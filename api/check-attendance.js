var express = require('express');
var router = express.Router();
var _global = require('../global.js');
var mysql = require('mysql');
var connection = mysql.createConnection(_global.db);
var pool = mysql.createPool(_global.db);
var bcrypt = require('bcrypt');
var async = require("async");
var pg = require('pg');
var format = require('pg-format');
const pool_postgres = new pg.Pool(_global.db_postgres);

router.post('/check-list', function (req, res, next) {
    if (req.body.student_id == null || req.body.student_id == 0) {
        _global.sendError(res, null, "student_id is required");
        return console.log("student_id is required");
    }
    if (req.body.attendance_id == null || req.body.attendance_id == 0) {
        _global.sendError(res, null, "attendance_id is required");
        return console.log("attendance_id is required");
    }
    var student_id = req.body.student_id;
    var attendance_id = req.body.attendance_id;
    var attendance_type = req.body.attendance_type;
    var course_id = 0;
    var class_id = 0;

    pool_postgres.connect(function (error, connection, done) {
        if (connection == undefined) {
            _global.sendError(res, null, "Can't connect to database");
            done();
            return console.log("Can't connect to database");
        }
        async.series([
            function(callback){
                connection.query(format(`UPDATE attendance_detail SET attendance_type = %L, attendance_time = %L WHERE attendance_id = %L AND student_id = %L`, attendance_type, new Date(), attendance_id, student_id), function (error, result, fields) {
                    if (error){
                        callback(error.message + ' at update attendance detail');
                    } else {
                        callback();
                    } 
                });
            },
            function(callback){
                connection.query(format(`SELECT * FROM class_has_course,attendance,student_enroll_course 
                WHERE class_has_course.class_id = attendance.class_id AND attendance.course_id = class_has_course.course_id AND student_enroll_course.class_has_course_id = class_has_course.id 
                AND attendance.id = %L AND student_enroll_course.student_id = %L`, attendance_id, student_id), function (error, result, fields) {
                    if (error){
                        callback(error.message + ' at get course id');
                    } else {
                        class_id = result.rows[0].class_id;
                        course_id = result.rows[0].course_id;
                        callback();
                    } 
                });
            }
        ], function(error){
            if (error) {
                _global.sendError(res, null, 'error at update attendance_detail');
                done();
                return console.log(error.message + ' at update attendance_detail');
            } else {
                res.send({
                    result: 'success',
                });
                var socket = req.app.get('socket');
                socket.emit('checkAttendanceUpdated', {'course_id':course_id,'class_id':class_id});
                done();
            }
        });
    });
});

router.post('/verify-face', function (req, res, next) {
    if (!req.body.students || req.body.students.length == 0) {
        _global.sendError(res, null, "student object is required");
        return console.log("student object is required");
    }
    if (req.body.attendance_id == null || req.body.attendance_id == 0) {
        _global.sendError(res, null, "attendance_id is required");
        return console.log("attendance_id is required");
    }
    if (req.body.attendance_type == null) {
        _global.sendError(res, null, "attendance_type is required");
        return console.log("attendance_type is required");
    }
    if (!req.body.attendance_img || req.body.attendance_img.length == 0) {
        _global.sendError(res, null, "Attendance image is required");
        return console.log("Attendance image is required");
    }

    var student = req.body.students;
    var attendance_id = req.body.attendance_id;
    var attendance_type = req.body.attendance_type;
    var attendance_img = req.body.attendance_img;
    var attendance_image_id = null;

    var class_id = 0;
    var course_id = 0;

    pool_postgres.connect(function (error, connection, done) {
        if (connection == undefined) {
            _global.sendError(res, null, "Can't connect to database");
            done();
            return console.log("Can't connect to database");
        }
        async.series([
            function(callback){
                connection.query(format(`INSERT INTO attendance_image(attendance_id, created_time, attendance_img) VALUES (%L, %L, %L) RETURNING id`, attendance_id, new Date(), attendance_img), function(error, result, fields) {
                    if (error){
                        callback(error.message + ' at update attendance image detail');
                    }
                    attendance_image_id = result.rows[0].id;
                    console.log(attendance_image_id);
                    callback();
                });
            },
            function(callback){
                for (var i = 0; i < student.length; i++){
                    var current_student_id = student[i];
                    connection.query(format(`UPDATE attendance_detail SET attendance_type = %L, attendance_time = %L, attendance_image_id = %L WHERE attendance_id = %L AND student_id = %L`,attendance_type, new Date(), attendance_image_id, attendance_id, current_student_id), function(error, result, fields) {
                        if (error){
                            callback(error.message + ' at update attendance detail');
                        }
                    });
                }
                callback();
            },
            //Check student_id
            function (callback) {
                var current_student = student[0];
                connection.query(format(`SELECT * FROM class_has_course,attendance,student_enroll_course 
                    WHERE class_has_course.class_id = attendance.class_id AND attendance.course_id = class_has_course.course_id AND student_enroll_course.class_has_course_id = class_has_course.id 
                    AND attendance.id = %L AND student_enroll_course.student_id = %L`, attendance_id, current_student), function (error, result, fields) {
                        if (error) {
                            callback(error.message + ' at check student_id');
                        } else {
                            if (result.rowCount == 0) {
                                callback('Student did not enrolled in this Course');
                            } else {
                                class_id = result.rows[0].class_id;
                                course_id = result.rows[0].course_id;
                                callback();
                            }
                        }
                    });
            }
        ], function(error){
            if (error) {
                _global.sendError(res, null, error);
                done();
                return console.log(error);
            } else {
                res.send({
                    result: 'success',
                });
                var socket = req.app.get('socket');
                socket.emit('checkAttendanceUpdated', {'course_id':course_id,'class_id':class_id});
                done();
            }
        });
    });
});

router.post('/qr-code/:id', function (req, res, next) {
    var attendance_id = req.params['id'];
    if (attendance_id == null || attendance_id == 0) {
        attendance_id = req.body.attendance_id;
        if (attendance_id == null || attendance_id == 0) {
            _global.sendError(res, null, "attendance_id is required");
            return console.log("attendance_id is required");
        }
    }
    var student_id = req.decoded.id;
    var class_id = 0;
    var course_id = 0;
    pool_postgres.connect(function (error, connection, done) {
        if (connection == undefined) {
            _global.sendError(res, null, "Can't connect to database");
            done();
            return console.log("Can't connect to database");
        }
        async.series([
            //Check attendance id
            function (callback) {
                connection.query(format(`SELECT * FROM attendance WHERE id = %L`, attendance_id), function (error, result, fields) {
                    if (error) {
                        callback(error.message + ' at check attendance_id');
                    } else {
                        if (result.rowCount == 0) {
                            callback('Invalid attendance id');
                        } else {
                            if (result.rows[0].closed) {
                                callback('This attendance is closed');
                            } else {
                                callback();
                            }
                        }
                    }
                });
            },
            //Check student_id
            function (callback) {
                connection.query(format(`SELECT * FROM class_has_course,attendance,student_enroll_course 
                    WHERE class_has_course.class_id = attendance.class_id AND attendance.course_id = class_has_course.course_id AND student_enroll_course.class_has_course_id = class_has_course.id 
                    AND attendance.id = %L AND student_enroll_course.student_id = %L`, attendance_id, student_id), function (error, result, fields) {
                        if (error) {
                            callback(error.message + ' at check student_id');
                        } else {
                            if (result.rowCount == 0) {
                                callback('Student did not enrolled in this Course');
                            } else {
                                class_id = result.rows[0].class_id;
                                course_id = result.rows[0].course_id;
                                callback();
                            }
                        }
                    });
            },
            //Update attendance detail
            function (callback) {
                connection.query(format(`UPDATE attendance_detail SET attendance_type = %L, attendance_time = %L WHERE attendance_id = %L AND student_id = %L`, _global.attendance_type.qr, new Date(), attendance_id, student_id), function (error, results, fields) {
                    if (error) {
                        callback(error.message + ' at update attendance_detail');
                    } else {
                        callback();
                    }
                });
            },
        ], function (error) {
            if (error) {
                _global.sendError(res, null, error);
                done();
                return console.log(error);
            } else {
                res.send({
                    result: 'success',
                });
                var socket = req.app.get('socket');
                socket.emit('checkAttendanceUpdated', { 'course_id': course_id, 'class_id': class_id });
                done();
            }
        });
    });
});

module.exports = router;
