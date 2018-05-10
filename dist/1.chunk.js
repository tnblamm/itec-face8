webpackJsonp([1],{

/***/ "../../../../../src/app/courses/add-course/add-course.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Add New Course</h3>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <form class=\"form-horizontal form-label-left\">\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Code*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"code\" name=\"code\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Name*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Office hour </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"office_hour\" [(ngModel)]=\"office_hour\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Note </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"note\" [(ngModel)]=\"note\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Lecturer*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-control tag_list col-md-7 col-xs-12\" (click)=\"onOpenChooseLecturer()\">\n                                        <button class=\"btn btn-primary disabled\" *ngFor=\"let lecturer of selected_lecturers\" style=\"margin-bottom:5px\">{{lecturer.first_name}} {{lecturer.last_name}}</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> TA </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-control tag_list col-md-7 col-xs-12 \" (click)=\"onOpenChooseTA()\">\n                                        <button class=\"btn btn-primary disabled\" *ngFor=\"let lecturer of selected_TAs\" style=\"margin-bottom:5px\">{{lecturer.first_name}} {{lecturer.last_name}}</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-xs-12\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-xs-3\"> Programs*</label>\n                                <div class=\"col-xs-6\">\n                                    <select class=\"form-control\" [(ngModel)]=\"selectedProgram\" (ngModelChange)=\"onChangeProgram()\" name=\"program\">\n                                        <option *ngFor=\"let program of programs\" [value]=\"program.id\">{{program.name}}</option>\n                                    </select>\n                                </div>\n                                <button class=\"btn btn-link col-xs-2\" (click)=\"onAddClass()\"><i class=\"fa fa-plus\"></i> Add class</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" *ngFor=\"let selectedClass of selectedClasses; let i = index;\">\n                        <div class=\"col-md-offset-1 col-md-4\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Class*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <select class=\"form-control\" [(ngModel)]=\"selectedClass.classId\" name=\"class{{i}}\">\n                                        <option *ngFor=\"let class of filteredClasses\" [value]=\"class.id\">{{class.name}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <div class=\"checkbox\">\n                                <label>\n                                    <input type=\"checkbox\" name=\"isAddStudentFromCLass{{i}}\" [(ngModel)]=\"selectedClass.isAddStudentFromCLass\">Add all students from selected class</label>\n                            </div>\n                        </div>\n                        <div class=\"col-md-3\">\n                            <label class=\"btn btn-primary btn-sm btn-file\">\n                                Add students from file\n                                <input type=\"file\" style=\"display:none;\" accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel\" name=\"students{{i}}\" (change)=\"onSelectFile(i,$event.target.files[0])\">\n                            </label>\n                            <button *ngIf=\"selectedClass.addStudentFromFile\" class='btn btn-xs btn-success' tooltip=\"Click to remove file\" (click)=\"onRemoveFile(i)\">{{selectedClass.addStudentFromFile['name']}}</button>\n                        </div>\n                        <div class=\"col-md-1\">\n                            <button *ngIf=\"selectedClasses.length > 1\" class=\"btn btn-danger\" (click)=\"onRemoveClass(i)\"><i class=\"fa fa-times\"></i> Remove</button>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-xs-12\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Schedule*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <button class=\"btn btn-primary\" (click)=\"onOpenChooseSchedule()\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelAddCourse()\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onAddCourse()\">Add</button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onAddCourse(true)\">Add & Continue</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"chooseLecturerModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-lg vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Add Lecturer</h4>\n                </div>\n                <form class=\"form-horizontal form-label-left\">\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-6 col-xs-12 text-center\">\n                                <h4>Teacher list</h4>\n                                <input placeholder=\"Search Name\" class=\"form-control\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchList()\" name=\"searchText\" />\n                                <div style=\"overflow:auto; max-height:300px;\">\n                                    <table class=\"table table-bordered text-center table-hover\">\n                                        <thead>\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Email</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let teacher of filtered_teachers\" (click)='onSelectLecturerClick(teacher.id)'>\n                                                <td>{{teacher.first_name}} {{teacher.last_name}}</td>\n                                                <td>{{teacher.email}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-5 col-xs-12 col-sm-offset-1 text-center\">\n                                <h4>Selected Lecturers</h4>\n                                <div style=\"overflow:auto; max-height:300px;\">\n                                    <table class=\"table table-bordered text-center table-hover table-fixed\">\n                                        <thead>\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Email</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let teacher of temp_lecturers\" (click)='onRemoveLecturerClick(teacher.id)'>\n                                                <td>{{teacher.first_name}} {{teacher.last_name}}</td>\n                                                <td>{{teacher.email}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelChooseLecturer()\">Cancel</button>\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"onSaveChooseLecturer()\">Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"chooseTAModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-lg vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Add TA</h4>\n                </div>\n                <form class=\"form-horizontal form-label-left\">\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-6 col-xs-12 text-center\">\n                                <h4>Teacher list</h4>\n                                <input placeholder=\"Search Name\" class=\"form-control\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchList()\" name=\"searchText\" />\n                                <div style=\"overflow:auto; max-height:300px;\">\n                                    <table class=\"table table-bordered text-center table-hover\">\n                                        <thead>\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Email</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let teacher of filtered_teachers\" (click)='onSelectTAClick(teacher.id)'>\n                                                <td>{{teacher.first_name}} {{teacher.last_name}}</td>\n                                                <td>{{teacher.email}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-5 col-xs-12 col-sm-offset-1 text-center\">\n                                <h4>Selected TAs</h4>\n                                <div style=\"overflow:auto; max-height:300px;\">\n                                    <table class=\"table table-bordered text-center table-hover table-fixed\">\n                                        <thead>\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Email</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let teacher of temp_TAs\" (click)='onRemoveTAClick(teacher.id)'>\n                                                <td>{{teacher.first_name}} {{teacher.last_name}}</td>\n                                                <td>{{teacher.email}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelChooseTA()\">Cancel</button>\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"onSaveChooseTA()\">Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<edit-schedule-modal [modal_id]=\"scheduleModal.id\" [modal_title]=\"scheduleModal.title\" [classes]=\"selectedClasses.slice()\" (onSave)=\"onSaveChooseSchedule($event)\"></edit-schedule-modal>\n<result-message-modal [modal_title]=\"apiResult\" [modal_message]=\"apiResultMessage\"></result-message-modal>\n<div class=\"modal fade\" id=\"progressModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">\n                        <h2>Loading</h2>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width:100%\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/courses/add-course/add-course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCourseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCourseComponent = (function () {
    function AddCourseComponent(router, excelService, appService, courseService, teacherService) {
        this.router = router;
        this.excelService = excelService;
        this.appService = appService;
        this.courseService = courseService;
        this.teacherService = teacherService;
        this.searchText = '';
        this.teachers = [];
        this.filtered_teachers = [];
        this.selected_lecturers = [];
        this.temp_lecturers = [];
        this.selected_TAs = [];
        this.temp_TAs = [];
        this.code = '';
        this.name = '';
        this.note = '';
        this.office_hour = '';
        this.isContinue = false;
        //Class
        this.programs = [];
        this.isAddStudentFromCLass = true;
        this.isAddStudentFromFile = false;
        this.selectedClasses = [{
                classId: 0,
                class_name: '',
                schedule: '',
                isAddStudentFromCLass: true,
                addStudentFromFile: '',
                studentListFromFile: [],
            }];
        this.tempValue = [];
        this.scheduleModal = {
            id: 'chooseScheduleModal',
            title: 'Add Schedule'
        };
    }
    AddCourseComponent.prototype.onChangeProgram = function () {
        this.filteredClasses = [{ id: 0, name: 'Choose class' }];
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].program_id == this.selectedProgram) {
                this.filteredClasses.push(this.classes[i]);
            }
        }
        for (var i = 0; i < this.selectedClasses.length; i++) {
            this.selectedClasses[i].classId = this.filteredClasses[0].id;
        }
    };
    AddCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teacherService.getListTeachers(this.searchText, 1, 9999)
            .subscribe(function (result) {
            _this.teachers = result.teacher_list;
            _this.filtered_teachers = _this.teachers.slice();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't teacher list", 'error'); });
        this.appService.getSemesterProgramClass().subscribe(function (results) {
            _this.classes = results.classes;
            _this.programs = results.programs;
            _this.selectedProgram = _this.programs[0].id;
            _this.onChangeProgram();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get semester_program_class", 'error'); });
    };
    AddCourseComponent.prototype.onCancelAddCourse = function () {
        this.router.navigate(['/courses/']);
    };
    AddCourseComponent.prototype.addCourse = function () {
        var _this = this;
        this.courseService.addCourse(this.code, this.name, this.selected_lecturers, this.selected_TAs, this.office_hour, this.note, this.selectedProgram, this.selectedClasses)
            .subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'success') {
                if (_this.isContinue == false) {
                    _this.apiResultMessage = result.message + '...Redirecting';
                    setTimeout(function () {
                        _this.router.navigate(['/courses/']);
                    }, 3000);
                }
                else {
                    _this.apiResultMessage = result.message;
                }
            }
            jQuery("#progressModal").modal("hide");
            //this.resultMessageModal.onOpenModal();
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) {
            _this.apiResult = 'failure';
            _this.apiResultMessage = error;
            console.log(error);
            jQuery("#progressModal").modal("hide");
            //this.resultMessageModal.onOpenModal();
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        });
    };
    AddCourseComponent.prototype.loopReadStudentFile = function (index) {
        var _this = this;
        if (this.selectedClasses[index].addStudentFromFile == '') {
            if (index < this.selectedClasses.length - 1) {
                this.loopReadStudentFile(index + 1);
            }
            else {
                this.addCourse();
                return;
            }
        }
        else {
            this.excelService.readStudentListFile(this.selectedClasses[index].addStudentFromFile).subscribe(function (result) {
                _this.apiResult = result.result;
                if (_this.apiResult == 'failure') {
                    _this.apiResultMessage = result.message;
                    return;
                }
                if (_this.apiResult == 'success') {
                    _this.selectedClasses[index].studentListFromFile = result.student_list.slice();
                    if (index < _this.selectedClasses.length - 1) {
                        _this.loopReadStudentFile(index + 1);
                    }
                    else {
                        _this.addCourse();
                        return;
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    AddCourseComponent.prototype.onAddCourse = function (isContinue) {
        if (isContinue === void 0) { isContinue = false; }
        jQuery("#progressModal").modal("show");
        this.isContinue = isContinue;
        this.loopReadStudentFile(0);
    };
    AddCourseComponent.prototype.searchList = function () {
        this.filtered_teachers = [];
        for (var i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].first_name.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0 || this.teachers[i].last_name.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0) {
                this.filtered_teachers.push(this.teachers[i]);
            }
        }
    };
    AddCourseComponent.prototype.onSelectLecturerClick = function (id) {
        for (var i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].id == id) {
                this.temp_lecturers.push(this.teachers[i]);
                this.teachers.splice(i, 1);
                this.searchList();
                break;
            }
        }
    };
    AddCourseComponent.prototype.onRemoveLecturerClick = function (id) {
        for (var i = 0; i < this.temp_lecturers.length; i++) {
            if (this.temp_lecturers[i].id == id) {
                this.teachers.push(this.temp_lecturers[i]);
                this.searchList();
                this.temp_lecturers.splice(i, 1);
                break;
            }
        }
    };
    AddCourseComponent.prototype.onOpenChooseLecturer = function () {
        this.temp_lecturers = [];
        this.temp_lecturers = this.selected_lecturers.slice();
        jQuery("#chooseLecturerModal").modal("show");
    };
    AddCourseComponent.prototype.onCancelChooseLecturer = function () {
        for (var i = 0; i < this.temp_lecturers.length; i++) {
            this.teachers.push(this.temp_lecturers[i]);
            this.searchList();
            this.temp_lecturers.splice(i, 1);
            break;
        }
        this.filtered_teachers = this.teachers.slice();
        this.temp_lecturers = [];
        jQuery("#chooseLecturerModal").modal("hide");
    };
    AddCourseComponent.prototype.onSaveChooseLecturer = function () {
        this.selected_lecturers = this.temp_lecturers.slice();
        this.temp_lecturers = [];
        this.filtered_teachers = this.teachers.slice();
        jQuery("#chooseLecturerModal").modal("hide");
    };
    AddCourseComponent.prototype.onSelectTAClick = function (id) {
        for (var i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].id == id) {
                this.temp_TAs.push(this.teachers[i]);
                this.teachers.splice(i, 1);
                this.searchList();
                break;
            }
        }
    };
    AddCourseComponent.prototype.onRemoveTAClick = function (id) {
        for (var i = 0; i < this.temp_TAs.length; i++) {
            if (this.temp_TAs[i].id == id) {
                this.teachers.push(this.temp_TAs[i]);
                this.searchList();
                this.temp_TAs.splice(i, 1);
                break;
            }
        }
    };
    AddCourseComponent.prototype.onOpenChooseTA = function () {
        this.temp_TAs = [];
        this.temp_TAs = this.selected_TAs.slice();
        jQuery("#chooseTAModal").modal("show");
    };
    AddCourseComponent.prototype.onCancelChooseTA = function () {
        this.temp_lecturers = [];
        for (var i = 0; i < this.temp_TAs.length; i++) {
            this.teachers.push(this.temp_TAs[i]);
            this.searchList();
            this.temp_TAs.splice(i, 1);
        }
        this.filtered_teachers = this.teachers.slice();
        jQuery("#chooseTAModal").modal("hide");
    };
    AddCourseComponent.prototype.onSaveChooseTA = function () {
        this.filtered_teachers = this.teachers.slice();
        this.selected_TAs = this.temp_TAs.slice();
        this.temp_TAs = [];
        jQuery("#chooseTAModal").modal("hide");
    };
    AddCourseComponent.prototype.onSelectFile = function (index, file) {
        this.selectedClasses[index].addStudentFromFile = file;
    };
    AddCourseComponent.prototype.onRemoveFile = function (index) {
        this.selectedClasses[index].addStudentFromFile = '';
    };
    AddCourseComponent.prototype.onAddClass = function () {
        this.selectedClasses.push({
            classId: 0,
            class_name: '',
            schedule: '',
            isAddStudentFromCLass: false,
            addStudentFromFile: '',
            studentListFromFile: [],
        });
    };
    AddCourseComponent.prototype.onRemoveClass = function (index) {
        //remove class
        for (var i = index; i < this.selectedClasses.length - 1; i++) {
            this.selectedClasses[i].classId = this.selectedClasses[i + 1].classId;
            this.selectedClasses[i].class_name = this.selectedClasses[i + 1].class_name;
            this.selectedClasses[i].schedule = this.selectedClasses[i + 1].schedule;
            this.selectedClasses[i].isAddStudentFromCLass = this.selectedClasses[i + 1].isAddStudentFromCLass;
            this.selectedClasses[i].addStudentFromFile = this.selectedClasses[i + 1].addStudentFromFile;
        }
        this.selectedClasses.pop();
    };
    AddCourseComponent.prototype.onOpenChooseSchedule = function () {
        for (var i = 0; i < this.selectedClasses.length; i++) {
            if (this.selectedClasses[i].classId == 0) {
                this.apiResult = 'failure';
                this.apiResultMessage = 'Class is required';
                //this.resultMessageModal.onOpenModal();
                this.appService.showPNotify(this.apiResult, this.apiResultMessage, this.apiResult == 'success' ? 'success' : 'error');
                return;
            }
            for (var j = i + 1; j < this.selectedClasses.length; j++) {
                if (this.selectedClasses[i].classId == this.selectedClasses[j].classId) {
                    this.apiResult = 'failure';
                    this.apiResultMessage = 'Cannot select the same class';
                    //this.resultMessageModal.onOpenModal();
                    this.appService.showPNotify(this.apiResult, this.apiResultMessage, this.apiResult == 'success' ? 'success' : 'error');
                    return;
                }
            }
        }
        for (var i = 0; i < this.selectedClasses.length; i++) {
            for (var j = 0; j < this.classes.length; j++) {
                if (this.selectedClasses[i].classId == this.classes[j].id) {
                    this.selectedClasses[i].class_name = this.classes[j].name;
                    break;
                }
            }
        }
        this.editScheduleModal.onOpenModal();
    };
    AddCourseComponent.prototype.onSaveChooseSchedule = function (schedule) {
        for (var i = 0; i < schedule.length; i++) {
            this.selectedClasses[i].schedule = schedule[i];
        }
    };
    return AddCourseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */]) === "function" && _a || Object)
], AddCourseComponent.prototype, "resultMessageModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["B" /* EditScheduleModalComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["B" /* EditScheduleModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["B" /* EditScheduleModalComponent */]) === "function" && _b || Object)
], AddCourseComponent.prototype, "editScheduleModal", void 0);
AddCourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-course',
        template: __webpack_require__("../../../../../src/app/courses/add-course/add-course.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["j" /* ExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["j" /* ExcelService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["A" /* TeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["A" /* TeacherService */]) === "function" && _g || Object])
], AddCourseComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=add-course.component.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course-detail/course-detail-staff/course-detail-staff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div *ngIf=\"course_not_found\" class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3 class=\"course_title\">Course not found</h3>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n    <div *ngIf=\"!course_not_found\" class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3 class=\"course_title\">{{course['code']}} - {{course['name']}} ({{course['semester_name']}})</h3>\n            <div class=\"pull-right\">\n                <button *ngIf=\"!course['not_in_current_course']\" type=\"button\" class=\"btn btn-success btn-round navbar-btn\" (click)=\"onEditCourse()\"> <i class=\"fa fa-pencil\"></i> Edit Course</button>\n                <button type=\"button\" class=\"btn btn-success btn-round navbar-btn\" (click)=\"onOpenSchedule()\"> <i class=\"fa fa-calendar\"></i> Schedule</button>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"form-horizontal\">\n                <div class=\"row\">\n                    <div class=\"col-xs-2\" style=\"text-align: right\">\n                        <h4>Lecturer :</h4>\n                    </div>\n                    <div class=\"col-xs-3\">\n                        <h4 *ngFor=\"let lecturer of lecturers\"><a href=\"/teachers/{{lecturer.id}}\">{{lecturer.first_name}} {{lecturer.last_name}}</a></h4>\n                    </div>\n                    <div class=\"col-xs-1\" style=\"text-align: right\">\n                        <h4>TAs :</h4>\n                    </div>\n                    <div class=\"col-xs-3\">\n                        <h4 *ngFor=\"let TA of TAs\"><a href=\"/teachers/{{TA.id}}\">{{TA.first_name}} {{TA.last_name}}</a></h4>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div *ngIf=\"course['office_hour']\" class=\"col-xs-2\" style=\"text-align: right\">\n                        <h4>Office hour :</h4>\n                    </div>\n                    <div *ngIf=\"course['office_hour']\" class=\"col-xs-2\">\n                        <h4>{{course['office_hour']}}</h4>\n                    </div>\n                    <div *ngIf=\"course['note']\" class=\"col-xs-2\" style=\"text-align: right\">\n                        <h4>Note :</h4>\n                    </div>\n                    <div *ngIf=\"course['note']\" class=\"col-xs-6\">\n                        <h4>{{course['note']}}</h4>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-2\" style=\"text-align: right;\">\n                        <h4>Total Students :</h4>\n                    </div>\n                    <div class=\"col-xs-2\">\n                        <h4 *ngFor=\"let class_course of class_has_course\">{{class_course.total_stud}} ({{class_course.class_name}})</h4>\n                    </div>\n                </div>\n            </div>\n            <br>\n            <div>\n                <div class=\"pull-right\">\n                    <button *ngIf=\"!course['not_in_current_course'] && !isEdittingAttendance\" type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onEditAttendance()\"> <i class=\"fa fa-pencil\"></i> Edit Attendance</button>\n                    <button *ngIf=\"isEdittingAttendance\" type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onImportAttendanceList()\"> <i class=\"fa fa-upload\"></i> Import</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onExportAttendanceList()\"> <i class=\"fa fa-download\"></i> Export</button>\n                </div>\n                <ul class=\"nav nav-tabs\" *ngIf=\"class_has_course.length > 1\">\n                      <li *ngFor=\"let class of class_has_course; let i = index\" [ngClass]=\"{'active': i == selected_class_index}\" (click)=\"onChangeClass(i)\"><a>{{class.class_name}}</a></li>\n                </ul>\n            </div>\n            <div *ngIf=\"!isEdittingAttendance\">\n                <table class=\"table table-bordered text-center\">\n                    <thead>\n                        <tr>\n                            <th>No</th>\n                            <th>Code</th>\n                            <th>Name</th>\n                            <th colspan=\"2\">Week 1</th>\n                            <th colspan=\"2\">Week 2</th>\n                            <th colspan=\"2\">Week 3</th>\n                            <th colspan=\"2\">Week 4</th>\n                            <th colspan=\"2\">Week 5</th>\n                            <th colspan=\"2\">Week 6</th>\n                            <th colspan=\"2\">Week 7</th>\n                            <th colspan=\"2\">Week 8</th>\n                            <th colspan=\"2\">Week 9</th>\n                            <th colspan=\"2\">Week 10</th>\n                            <th colspan=\"2\">Week 11</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let attendance of attendance_list;let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>{{attendance.code}}</td>\n                            <td>{{attendance.name}}</td>\n                            <ng-container *ngIf=\"attendance.exemption\">\n                                <td class=\"gray_background\" colspan=\"22\" style=\"font-weight: bold;\">Exempted</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"!attendance.exemption\">\n                                <ng-container *ngFor=\"let attendance_detail of attendance.attendance_details;let j = index\">\n                                    <ng-template #tolTemplate>\n                                        <div>Method : {{attendance_detail.method}}</div>\n                                        <div>Created at : {{attendance_detail.created_at | date:'short'}}</div>\n                                        <div>Edited at : {{attendance_detail.attendance_time | date:'short'}}</div>\n                                        <div *ngIf=\"attendance_detail.edited_by\">Edited by : {{attendance_detail.editor}}</div>\n                                        <div *ngIf=\"attendance_detail.edited_by\">Reason : {{attendance_detail.edited_reason}}</div>\n                                    </ng-template>\n                                    <td width=\"3%\" [tooltip]=\"tolTemplate\" container=\"body\" [ngClass]=\"{'warning_background': attendance_detail.edited_by}\"><i [ngClass]=\"['fa attendance-check', attendance_detail.icon]\"></i></td>\n                                </ng-container>\n                                <ng-container *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\">\n                                    <td class=\"gray_background\" width=\"3%\" *ngIf=\"number > attendance.attendance_details.length\"></td>\n                                </ng-container>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <div *ngIf=\"isEdittingAttendance\">\n                <table class=\"table table-bordered text-center\">\n                    <thead>\n                        <tr>\n                            <th></th>\n                            <th width=\"10%\">Code</th>\n                            <th>Name</th>\n                            <th colspan=\"2\">Week 1</th>\n                            <th colspan=\"2\">Week 2</th>\n                            <th colspan=\"2\">Week 3</th>\n                            <th colspan=\"2\">Week 4</th>\n                            <th colspan=\"2\">Week 5</th>\n                            <th colspan=\"2\">Week 6</th>\n                            <th colspan=\"2\">Week 7</th>\n                            <th colspan=\"2\">Week 8</th>\n                            <th colspan=\"2\">Week 9</th>\n                            <th colspan=\"2\">Week 10</th>\n                            <th colspan=\"2\">Week 11</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let attendance of temp_attendance_lists[selected_class_index];let i = index\">\n                            <td (click)=\"onRemoveAttendanceClick(i)\"><i class=\"fa fa-close attendance-check\" style=\"color:red\"></i></td>\n                            <td>{{attendance.code}}</td>\n                            <td><input class=\"form-control\" [(ngModel)]=\"attendance.name\" name=\"name{{i}}\" /></td>\n                            <ng-container *ngIf=\"attendance.exemption\">\n                                <td class=\"gray_background\" colspan=\"22\" style=\"font-weight: bold;\">Exempted</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"!attendance.exemption\">\n                                <ng-container *ngFor=\"let attendance_detail of attendance.attendance_details;let j = index\">\n                                    <ng-template #tolTemplate>\n                                        <div>Method : {{attendance_detail.method}}</div>\n                                        <div>Created at : {{attendance_detail.created_at | date:'short'}}</div>\n                                        <div>Edited at : {{attendance_detail.attendance_time | date:'short'}}</div>\n                                        <div *ngIf=\"attendance_detail.edited_by\">Edited by : {{attendance_detail.editor}}</div>\n                                        <div *ngIf=\"attendance_detail.edited_by\">Reason : {{attendance_detail.edited_reason}}</div>\n                                    </ng-template>\n                                    <td width=\"3%\" [tooltip]=\"tolTemplate\" container=\"body\" [ngClass]=\"{'warning_background': attendance_detail.edited_by}\" (click)=\"onAttendanceCheckClick(i,j)\"><i [ngClass]=\"['fa attendance-check', attendance_detail.icon]\"></i></td>\n                                </ng-container>\n                                <ng-container *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\">\n                                    <td class=\"gray_background\" width=\"3%\" *ngIf=\"number > attendance.attendance_details.length\"></td>\n                                </ng-container>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                </table>\n                <div class=\"form-horizontal\">\n                    <div class=\"form-group\" (keydown)=\"keyDownFunction($event)\">\n                        <label class=\"control-label col-sm-2\">Add student to course : </label>\n                        <div class=\"col-sm-2\">\n                            <input type=\"text\" placeholder=\"Code\" [(ngModel)]=\"new_code\" (ngModelChange)=\"getSearchingStudentDetail()\" name=\"new_code\" required=\"required\" class=\"form-control\">\n                        </div>\n                        <div class=\"col-sm-3\">\n                            <input type=\"text\" placeholder=\"Name\" [(ngModel)]=\"new_name\" name=\"new_name\" required=\"required\" class=\"form-control\">\n                        </div>\n                        <button class=\"btn btn-success\" (click)=\"onAddToAttendanceList()\"><i class=\"fa fa-plus\"></i> Add</button>\n                    </div>\n                    <div class=\"pull-right\">\n                        <button class=\"btn btn-default\" (click)=\"onCancelEditAttendance()\">Cancel</button>\n                        <button class=\"btn btn-success\" (click)=\"onSaveEditAttendance()\">Save</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<import-modal [import_type]=\"appService.import_export_type.attendance_list\" [title]=\"import_title\" (onClose)=\"onCloseImport($event)\"></import-modal>\n<edit-schedule-modal [modal_id]=\"scheduleModal.id\" [modal_title]=\"scheduleModal.title\" [classes]=\"class_has_course\" (onSave)=\"onSaveSchedule($event)\" [view_only]=\"course['not_in_current_course']\"></edit-schedule-modal>\n<div class=\"modal fade\" id=\"confirmRemoveModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Remove this student from the list ?</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmRemoveAttendance()\" data-dismiss=\"modal\">Confirm</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"confirmChangeAttendanceDetailModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Confirm change attendance detail for this student ?</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <textarea autosize class=\"form-control only_bottom_border\" placeholder=\"Reason\" [(ngModel)]=\"edit_attendance_reason\" style=\"resize: none;\"></textarea>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmChangeAttendanceDetail()\">Confirm</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/courses/course-detail/course-detail-staff/course-detail-staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailStaffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseDetailStaffComponent = (function () {
    function CourseDetailStaffComponent(route, studentService, router, appService, courseService, attendanceSerivce, scheduleService, authService, excelService) {
        this.route = route;
        this.studentService = studentService;
        this.router = router;
        this.appService = appService;
        this.courseService = courseService;
        this.attendanceSerivce = attendanceSerivce;
        this.scheduleService = scheduleService;
        this.authService = authService;
        this.excelService = excelService;
        this.schedules = [];
        this.course_not_found = false;
        this.course = [];
        this.lecturers = [];
        this.TAs = [];
        this.class_has_course = [{
                classId: 0,
                class_name: '',
                schedule: '',
                isAddStudentFromCLass: true,
                addStudentFromFile: '',
                studentListFromFile: [],
            }];
        this.attendance_lists = [];
        this.attendance_list = [];
        this.scheduleModal = {
            id: 'scheduleModal',
            title: 'Schedule'
        };
        this.isEdittingAttendance = false;
        this.temp_attendance_lists = [];
        this.selected_class_index = 0;
        this.edit_attendance_reason = '';
        this.current_attendance_index = 0;
        this.current_attendance_detail_index = 0;
        this.new_code = '';
        this.new_name = '';
        this.deleting_attendance_index = 0;
    }
    CourseDetailStaffComponent.prototype.getAttendanceList = function () {
        var _this = this;
        var classes_id = [];
        for (var i = 0; i < this.class_has_course.length; i++) {
            classes_id.push(this.class_has_course[i].class_id);
        }
        this.attendanceSerivce.getAttendanceListByCourse(this.course_id, classes_id).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.attendance_lists = result.attendance_lists;
            _this.onChangeClass(0);
            _this.cloneAttendanceList(true);
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get attendance_list", 'error'); });
    };
    CourseDetailStaffComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.course_id = params['id']; });
        //get course info
        this.courseService.getCourseDetail(this.course_id).subscribe(function (result) {
            _this.course = result.course;
            _this.lecturers = result.lecturers;
            _this.TAs = result.TAs;
            _this.class_has_course = result.class_has_course;
            if (_this.course == undefined || _this.course == null) {
                _this.course_not_found = true;
            }
            else {
                //get list student
                _this.getAttendanceList();
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get course detail", 'error'); });
    };
    CourseDetailStaffComponent.prototype.onEditCourse = function () {
        this.router.navigate(['/courses/', this.course_id, 'edit']);
    };
    CourseDetailStaffComponent.prototype.onSaveSchedule = function (schedule) {
        var _this = this;
        //this.course.schedule = schedule;
        for (var i = 0; i < this.class_has_course.length; i++) {
            this.class_has_course[i].schedules = schedule[i];
        }
        this.scheduleService.updateSchedule(this.class_has_course).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            //this.resultMessageModal.onOpenModal();
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't save schedule", 'error'); });
    };
    CourseDetailStaffComponent.prototype.onOpenSchedule = function () {
        this.editScheduleModal.onOpenModal();
    };
    CourseDetailStaffComponent.prototype.onChangeClass = function (index) {
        this.selected_class_index = index;
        this.attendance_list = this.attendance_lists[index];
        for (var i = 0; i < this.attendance_list.length; i++) {
            for (var j = 0; j < this.attendance_list[i].attendance_details.length; j++) {
                switch (this.attendance_list[i].attendance_details[j].attendance_type) {
                    case this.appService.attendance_type.checklist:
                        this.attendance_list[i].attendance_details[j]['icon'] = 'fa-check';
                        this.attendance_list[i].attendance_details[j]['method'] = 'Checklist';
                        break;
                    case this.appService.attendance_type.qr:
                        this.attendance_list[i].attendance_details[j]['icon'] = 'fa-qrcode';
                        this.attendance_list[i].attendance_details[j]['method'] = 'QR Code';
                        break;
                    case this.appService.attendance_type.quiz:
                        this.attendance_list[i].attendance_details[j]['icon'] = 'fa-question-circle';
                        this.attendance_list[i].attendance_details[j]['method'] = 'Quiz';
                        break;
                    case this.appService.attendance_type.permited_absent:
                        this.attendance_list[i].attendance_details[j]['icon'] = 'fa-envelope-square';
                        this.attendance_list[i].attendance_details[j]['method'] = 'Permited Absent';
                        break;
                    default:
                        this.attendance_list[i].attendance_details[j]['icon'] = '';
                        this.attendance_list[i].attendance_details[j]['method'] = 'Absent';
                        break;
                }
            }
        }
    };
    CourseDetailStaffComponent.prototype.cloneAttendanceList = function (isTempDes) {
        if (isTempDes) {
            this.temp_attendance_lists = [];
            for (var k = 0; k < this.attendance_lists.length; k++) {
                var temp_attendance_list = [];
                for (var i = 0; i < this.attendance_lists[k].length; i++) {
                    var attendance = {
                        id: this.attendance_lists[k][i].id,
                        code: this.attendance_lists[k][i].code,
                        name: this.attendance_lists[k][i].name,
                        exemption: this.attendance_lists[k][i].exemption,
                        attendance_details: []
                    };
                    for (var j = 0; j < this.attendance_lists[k][i].attendance_details.length; j++) {
                        var attendance_detail = {
                            attendance_id: this.attendance_lists[k][i].attendance_details[j].attendance_id,
                            attendance_type: this.attendance_lists[k][i].attendance_details[j].attendance_type,
                            attendance_time: this.attendance_lists[k][i].attendance_details[j].attendance_time,
                            created_at: this.attendance_lists[k][i].attendance_details[j].created_at,
                            edited_reason: this.attendance_lists[k][i].attendance_details[j].edited_reason,
                            edited_by: this.attendance_lists[k][i].attendance_details[j].edited_by,
                            editor: this.attendance_lists[k][i].attendance_details[j].editor,
                            icon: this.attendance_lists[k][i].attendance_details[j].icon,
                            method: this.attendance_lists[k][i].attendance_details[j].method,
                        };
                        attendance.attendance_details.push(attendance_detail);
                    }
                    temp_attendance_list.push(attendance);
                }
                this.temp_attendance_lists.push(temp_attendance_list);
            }
        }
        else {
            this.attendance_lists = [];
            for (var k = 0; k < this.temp_attendance_lists.length; k++) {
                var attendance_list = [];
                for (var i = 0; i < this.temp_attendance_lists[k].length; i++) {
                    var attendance = {
                        id: this.temp_attendance_lists[k][i].id,
                        code: this.temp_attendance_lists[k][i].code,
                        name: this.temp_attendance_lists[k][i].name,
                        exemption: this.temp_attendance_lists[k][i].exemption,
                        attendance_details: []
                    };
                    for (var j = 0; j < this.temp_attendance_lists[k][i].attendance_details.length; j++) {
                        var attendance_detail = {
                            attendance_id: this.temp_attendance_lists[k][i].attendance_details[j].attendance_id,
                            attendance_type: this.temp_attendance_lists[k][i].attendance_details[j].attendance_type,
                            attendance_time: this.temp_attendance_lists[k][i].attendance_details[j].attendance_time,
                            created_at: this.temp_attendance_lists[k][i].attendance_details[j].created_at,
                            edited_reason: this.temp_attendance_lists[k][i].attendance_details[j].edited_reason,
                            edited_by: this.temp_attendance_lists[k][i].attendance_details[j].edited_by,
                            editor: this.temp_attendance_lists[k][i].attendance_details[j].editor,
                            icon: this.temp_attendance_lists[k][i].attendance_details[j].icon,
                            method: this.temp_attendance_lists[k][i].attendance_details[j].method,
                        };
                        attendance.attendance_details.push(attendance_detail);
                    }
                    attendance_list.push(attendance);
                }
                this.attendance_lists.push(attendance_list);
            }
        }
    };
    CourseDetailStaffComponent.prototype.onEditAttendance = function () {
        this.isEdittingAttendance = true;
        this.cloneAttendanceList(true);
    };
    CourseDetailStaffComponent.prototype.onCancelEditAttendance = function () {
        this.isEdittingAttendance = false;
    };
    CourseDetailStaffComponent.prototype.onSaveEditAttendance = function () {
        var _this = this;
        var classes_id = [];
        for (var i = 0; i < this.class_has_course.length; i++) {
            classes_id.push(this.class_has_course[i].class_id);
        }
        this.attendanceSerivce.updateAttendanceListByCourse(this.course_id, classes_id, this.temp_attendance_lists)
            .subscribe(function (results) {
            if (results.result == 'success') {
                _this.cloneAttendanceList(false);
                _this.onChangeClass(_this.selected_class_index);
                _this.isEdittingAttendance = false;
            }
            else {
            }
            _this.apiResult = results.result;
            _this.apiResultMessage = results.message;
            //this.resultMessageModal.onOpenModal();
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get save attendance", 'error'); });
    };
    CourseDetailStaffComponent.prototype.onAttendanceCheckClick = function (attendance_index, attendance_detail_index) {
        jQuery('#confirmChangeAttendanceDetailModal').modal('show');
        this.current_attendance_index = attendance_index;
        this.current_attendance_detail_index = attendance_detail_index;
    };
    CourseDetailStaffComponent.prototype.confirmChangeAttendanceDetail = function () {
        if (this.edit_attendance_reason == '') {
            this.appService.showPNotify('failure', "Error! Reason is required to change attendance detail", 'error');
        }
        else {
            if (this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].attendance_type) {
                this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].attendance_type = this.appService.attendance_type.absent;
                this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].icon = '';
                this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].method = 'Absent';
            }
            else {
                this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].attendance_type = this.appService.attendance_type.checklist;
                this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].icon = 'fa-check';
                this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].method = 'Checklist';
            }
            this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].attendance_time = new Date();
            this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].edited_by = this.authService.current_user.id;
            this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].edited_reason = this.edit_attendance_reason;
            this.temp_attendance_lists[this.selected_class_index][this.current_attendance_index].attendance_details[this.current_attendance_detail_index].editor = this.authService.current_user.first_name + ' ' + this.authService.current_user.last_name;
            jQuery('#confirmChangeAttendanceDetailModal').modal('hide');
        }
    };
    CourseDetailStaffComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.onAddToAttendanceList();
        }
    };
    CourseDetailStaffComponent.prototype.getSearchingStudentDetail = function () {
        var _this = this;
        if (this.new_code.length > 6) {
            this.studentService.getStudentDetailByCode(this.new_code).subscribe(function (result) {
                if (result.result == 'success') {
                    _this.new_name = result.student.first_name + ' ' + result.student.last_name;
                }
                else {
                    _this.new_name = '';
                }
            }, function (error) { console.log(error); });
        }
    };
    CourseDetailStaffComponent.prototype.onAddToAttendanceList = function () {
        var _this = this;
        this.attendanceSerivce.checkAddToCourse(this.course_id, this.new_code, this.new_name).subscribe(function (results) {
            if (results.result == 'success') {
                var attendance = {
                    id: 0,
                    code: _this.new_code,
                    name: _this.new_name,
                    exemption: _this.appService.attendance_status.normal,
                    attendance_details: []
                };
                for (var j = 0; j < _this.temp_attendance_lists[_this.selected_class_index][0].attendance_details.length; j++) {
                    var attendance_detail = {
                        attendance_id: _this.attendance_lists[_this.selected_class_index][0].attendance_details[j].attendance_id,
                        attendance_type: 0,
                        attendance_time: new Date(),
                        created_at: _this.attendance_lists[_this.selected_class_index][0].attendance_details[j].created_at,
                        edited_by: null,
                        edited_reason: null,
                        icon: '',
                        method: 'Absent'
                    };
                    attendance.attendance_details.push(attendance_detail);
                }
                _this.temp_attendance_lists[_this.selected_class_index].push(attendance);
                _this.new_name = '';
                _this.new_code = '';
            }
            else {
                _this.apiResult = results.result;
                _this.apiResultMessage = results.message;
                //this.resultMessageModal.onOpenModal();
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't check student", 'error'); });
    };
    CourseDetailStaffComponent.prototype.onRemoveAttendanceClick = function (index) {
        jQuery('#confirmRemoveModal').modal('show');
        this.deleting_attendance_index = index;
    };
    CourseDetailStaffComponent.prototype.confirmRemoveAttendance = function () {
        for (var i = this.deleting_attendance_index; i < this.temp_attendance_lists[this.selected_class_index].length - 1; i++) {
            this.temp_attendance_lists[this.selected_class_index][i].id = this.temp_attendance_lists[this.selected_class_index][i + 1].id;
            this.temp_attendance_lists[this.selected_class_index][i].code = this.temp_attendance_lists[this.selected_class_index][i + 1].code;
            this.temp_attendance_lists[this.selected_class_index][i].name = this.temp_attendance_lists[this.selected_class_index][i + 1].name;
            this.temp_attendance_lists[this.selected_class_index][i].exemption = this.temp_attendance_lists[this.selected_class_index][i + 1].exemption;
            for (var j = 0; j < this.temp_attendance_lists[this.selected_class_index][i].attendance_details.length; j++) {
                this.temp_attendance_lists[this.selected_class_index][i].attendance_details[j].attendance_id = this.temp_attendance_lists[this.selected_class_index][i + 1].attendance_details[j].attendance_id;
                this.temp_attendance_lists[this.selected_class_index][i].attendance_details[j].attendance_type = this.temp_attendance_lists[this.selected_class_index][i + 1].attendance_details[j].attendance_type;
                this.temp_attendance_lists[this.selected_class_index][i].attendance_details[j].attendance_time = this.temp_attendance_lists[this.selected_class_index][i + 1].attendance_details[j].attendance_time;
                this.temp_attendance_lists[this.selected_class_index][i].attendance_details[j].created_at = this.temp_attendance_lists[this.selected_class_index][i + 1].attendance_details[j].created_at;
                this.temp_attendance_lists[this.selected_class_index][i].attendance_details[j].edited_by = this.temp_attendance_lists[this.selected_class_index][i + 1].attendance_details[j].edited_by;
                this.temp_attendance_lists[this.selected_class_index][i].attendance_details[j].edited_reason = this.temp_attendance_lists[this.selected_class_index][i + 1].attendance_details[j].edited_reason;
                this.temp_attendance_lists[this.selected_class_index][i].attendance_details[j].editor = this.temp_attendance_lists[this.selected_class_index][i + 1].attendance_details[j].editor;
                this.temp_attendance_lists[this.selected_class_index][i].attendance_details[j]['icon'] = this.temp_attendance_lists[this.selected_class_index][i + 1].attendance_details[j]['icon'];
                this.temp_attendance_lists[this.selected_class_index][i].attendance_details[j]['method'] = this.temp_attendance_lists[this.selected_class_index][i + 1].attendance_details[j]['method'];
            }
        }
        this.temp_attendance_lists[this.selected_class_index].pop();
    };
    CourseDetailStaffComponent.prototype.onCloseImport = function (attendance_list) {
        if (attendance_list == 'close') {
            return;
        }
        var temp_attendance_list = this.temp_attendance_lists[this.selected_class_index];
        for (var i = 0; i < attendance_list.length; i++) {
            var check_new_student = true;
            for (var j = 0; j < temp_attendance_list.length; j++) {
                if (attendance_list[i].code.toString() == temp_attendance_list[j].code.toString()) {
                    var length = 0;
                    if (attendance_list[i].attendance_details.length < temp_attendance_list[j].attendance_details.length) {
                        length = attendance_list[i].attendance_details.length;
                    }
                    else {
                        length = temp_attendance_list[j].attendance_details.length;
                    }
                    for (var k = 0; k < length; k++) {
                        temp_attendance_list[j].attendance_details[k].attendance_type = attendance_list[i].attendance_details[k].attendance_type;
                        temp_attendance_list[j].attendance_details[k].attendance_time = new Date();
                        temp_attendance_list[j].attendance_details[k].icon = attendance_list[i].attendance_details[k].icon;
                        temp_attendance_list[j].attendance_details[k].method = attendance_list[i].attendance_details[k].method;
                    }
                    check_new_student = false;
                    break;
                }
            }
            if (check_new_student) {
                var attendance = {
                    id: 0,
                    code: attendance_list[i].code,
                    name: attendance_list[i].name,
                    exemption: attendance_list[i].exemption,
                    attendance_details: []
                };
                if (temp_attendance_list.length > 0 && temp_attendance_list[0].attendance_details.length > 0) {
                    var length = 0;
                    if (attendance_list[i].attendance_details.length < temp_attendance_list[0].attendance_details.length) {
                        length = attendance_list[i].attendance_details.length;
                    }
                    else {
                        length = temp_attendance_list[0].attendance_details.length;
                    }
                    for (var j = 0; j < length; j++) {
                        var attendance_detail = {
                            attendance_id: temp_attendance_list[0].attendance_details[j].attendance_id,
                            attendance_type: attendance_list[i].attendance_details[j].attendance_type,
                            attendance_time: new Date(),
                            created_at: temp_attendance_list[0].attendance_details[j].created_at,
                            edited_reason: null,
                            edited_by: null,
                            editor: null,
                            icon: attendance_list[i].attendance_details[j].icon,
                            method: attendance_list[i].attendance_details[j].method,
                        };
                        attendance.attendance_details.push(attendance_detail);
                    }
                }
                temp_attendance_list.push(attendance);
            }
        }
    };
    CourseDetailStaffComponent.prototype.onImportAttendanceList = function () {
        this.import_title = 'Load Attendance List For' + this.class_has_course[this.selected_class_index].class_name;
        this.importModal.onOpenModal();
    };
    CourseDetailStaffComponent.prototype.onExportAttendanceList = function () {
        var lecturers = '';
        for (var i = 0; i < this.lecturers.length; i++) {
            lecturers += this.lecturers[i].first_name + ' ' + this.lecturers[i].last_name + '\r\n';
        }
        this.excelService.writeAttendanceList(this.attendance_list, this.course['code'] + ' - ' + this.course['name'] + ' - ' + this.class_has_course[this.selected_class_index].class_name + ' (' + this.course['semester_name'] + ')', lecturers);
    };
    return CourseDetailStaffComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */]) === "function" && _a || Object)
], CourseDetailStaffComponent.prototype, "resultMessageModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["B" /* EditScheduleModalComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["B" /* EditScheduleModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["B" /* EditScheduleModalComponent */]) === "function" && _b || Object)
], CourseDetailStaffComponent.prototype, "editScheduleModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */]),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */]) === "function" && _c || Object)
], CourseDetailStaffComponent.prototype, "importModal", void 0);
CourseDetailStaffComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'course-detail-staff',
        template: __webpack_require__("../../../../../src/app/courses/course-detail/course-detail-staff/course-detail-staff.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["o" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["o" /* StudentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["t" /* ScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["t" /* ScheduleService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["j" /* ExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["j" /* ExcelService */]) === "function" && _m || Object])
], CourseDetailStaffComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=course-detail-staff.component.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course-detail/course-detail-teacher/course-detail-teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n    <div *ngIf=\"course_not_found\" class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3 class=\"course_title\">Course not found or You're not teaching this course</h3>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n        <div *ngIf=\"!course_not_found\" class=\"x_panel\">\n            <div class=\"x_title\">\n                <h3 class=\"course_title\">{{course['code']}} - {{course['name']}} ({{course['semester_name']}})</h3>\n                <div class=\"pull-right\">\n                    <button type=\"button\" class=\"btn btn-success btn-round navbar-btn\" (click)=\"onOpenSchedule()\"> <i class=\"fa fa-calendar\"></i> Schedule</button>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n            <div class=\"x_content\">\n                <div class=\"form-horizontal\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-1\" style=\"text-align: right\">\n                            <h4>TAs :</h4>\n                        </div>\n                        <div class=\"col-xs-3\">\n                            <h4 *ngFor=\"let TA of TAs\"><a href=\"/teachers/{{TA.id}}\">{{TA.first_name}} {{TA.last_name}}</a></h4>\n                        </div>\n                        <div class=\"col-xs-2\" style=\"text-align: right;\">\n                            <h4>Total Students :</h4>\n                        </div>\n                        <div class=\"col-xs-2\">\n                            <h4 *ngFor=\"let class_course of class_has_course\">{{class_course.total_stud}} ({{class_course.class_name}})</h4>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div *ngIf=\"course['office_hour']\" class=\"col-xs-2\" style=\"text-align: right\">\n                            <h4>Office hour :</h4>\n                        </div>\n                        <div *ngIf=\"course['office_hour']\" class=\"col-xs-2\">\n                            <h4>{{course['office_hour']}}</h4>\n                        </div>\n                        <div *ngIf=\"course['note']\" class=\"col-xs-2\" style=\"text-align: right\">\n                            <h4>Note :</h4>\n                        </div>\n                        <div *ngIf=\"course['note']\" class=\"col-xs-6\">\n                            <h4>{{course['note']}}</h4>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div>\n                    <ul class=\"nav nav-tabs\" *ngIf=\"class_has_course.length > 1\">\n                          <li *ngFor=\"let class of class_has_course; let i = index\" [ngClass]=\"{'active': i == selected_class_index}\" (click)=\"onChangeClass(i)\"><a>{{class.class_name}}</a></li>\n                    </ul>\n                </div>\n                <div>\n                    <table class=\"table table-bordered text-center\">\n                        <thead>\n                            <tr>\n                                <th>No</th>\n                                <th>Code</th>\n                                <th>Name</th>\n                                <th colspan=\"2\">Week 1</th>\n                                <th colspan=\"2\">Week 2</th>\n                                <th colspan=\"2\">Week 3</th>\n                                <th colspan=\"2\">Week 4</th>\n                                <th colspan=\"2\">Week 5</th>\n                                <th colspan=\"2\">Week 6</th>\n                                <th colspan=\"2\">Week 7</th>\n                                <th colspan=\"2\">Week 8</th>\n                                <th colspan=\"2\">Week 9</th>\n                                <th colspan=\"2\">Week 10</th>\n                                <th colspan=\"2\">Week 11</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let attendance of attendance_list;let i = index\">\n                                <td>{{i+1}}</td>\n                                <td>{{attendance.code}}</td>\n                                <td>{{attendance.name}}</td>\n                                <ng-container *ngFor=\"let attendance_detail of attendance.attendance_details;let j = index\">\n                                    <ng-template #tolTemplate>\n                                        <div>Method : {{attendance_detail.method}}</div>\n                                        <div>Created at : {{attendance_detail.created_at | date:'short'}}</div>\n                                        <div *ngIf=\"attendance_detail.attendance_type != appService.attendance_type.absent\">Attended at : {{attendance_detail.attendance_time | date:'short'}}</div>\n                                        <div *ngIf=\"attendance_detail.edited_by\">Edited by : {{attendance_detail.editor}}</div>\n                                        <div *ngIf=\"attendance_detail.edited_by\">Reason : {{attendance_detail.edited_reason}}</div>\n                                    </ng-template>\n                                    <td width=\"3%\" [tooltip]=\"tolTemplate\" container=\"body\" [ngClass]=\"{'warning_background': attendance_detail.edited_by}\"><i [ngClass]=\"['fa attendance-check', attendance_detail.icon]\"></i></td>\n                                </ng-container>\n                                <ng-container *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\">\n                                    <td class=\"gray_background\" width=\"3%\" *ngIf=\"number > attendance.attendance_details.length\"></td>\n                                </ng-container>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n</div>\n<edit-schedule-modal [modal_id]=\"scheduleModal.id\" [modal_title]=\"scheduleModal.title\" [classes]=\"class_has_course\"  [view_only]=\"true\"></edit-schedule-modal>"

/***/ }),

/***/ "../../../../../src/app/courses/course-detail/course-detail-teacher/course-detail-teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailTeacherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseDetailTeacherComponent = (function () {
    function CourseDetailTeacherComponent(route, router, authService, appService, courseService, attendanceSerivce, scheduleService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.appService = appService;
        this.courseService = courseService;
        this.attendanceSerivce = attendanceSerivce;
        this.scheduleService = scheduleService;
        this.schedules = [];
        this.course_not_found = false;
        this.course = [];
        this.lecturers = [];
        this.TAs = [];
        this.class_has_course = [{
                classId: 0,
                class_name: '',
                schedule: '',
                isAddStudentFromCLass: true,
                addStudentFromFile: '',
                studentListFromFile: [],
            }];
        this.attendance_lists = [];
        this.attendance_list = [];
        this.scheduleModal = {
            id: 'scheduleModal',
            title: 'Schedule'
        };
        this.selected_class_index = 0;
    }
    CourseDetailTeacherComponent.prototype.getAttendanceList = function () {
        var _this = this;
        var classes_id = [];
        for (var i = 0; i < this.class_has_course.length; i++) {
            classes_id.push(this.class_has_course[i].class_id);
        }
        this.attendanceSerivce.getAttendanceListByCourse(this.course_id, classes_id).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.attendance_lists = result.attendance_lists;
            _this.onChangeClass(0);
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get attendance_lists by course", 'error'); });
    };
    CourseDetailTeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.course_id = params['id']; });
        //get course info
        this.courseService.getCourseDetail(this.course_id).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'failure') {
                _this.course_not_found = true;
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
            }
            else {
                _this.course = result.course;
                _this.lecturers = result.lecturers;
                _this.TAs = result.TAs;
                _this.class_has_course = result.class_has_course;
                if (_this.course == undefined || _this.course == null) {
                    _this.course_not_found = true;
                }
                else {
                    var check_not_teaching = true;
                    for (var i = 0; i < _this.lecturers.length; i++) {
                        if (_this.lecturers[i].id == _this.authService.current_user.id) {
                            check_not_teaching = false;
                        }
                    }
                    for (var i = 0; i < _this.TAs.length; i++) {
                        if (_this.TAs[i].id == _this.authService.current_user.id) {
                            check_not_teaching = false;
                        }
                    }
                    if (check_not_teaching) {
                        _this.course_not_found = true;
                    }
                    else {
                        //get list student
                        _this.getAttendanceList();
                    }
                }
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't course detail", 'error'); });
    };
    CourseDetailTeacherComponent.prototype.onOpenSchedule = function () {
        this.editScheduleModal.onOpenModal();
    };
    CourseDetailTeacherComponent.prototype.onChangeClass = function (index) {
        this.selected_class_index = index;
        this.attendance_list = this.attendance_lists[index];
        for (var i = 0; i < this.attendance_list.length; i++) {
            var absences = 0;
            for (var j = 0; j < this.attendance_list[i].attendance_details.length; j++) {
                switch (this.attendance_list[i].attendance_details[j].attendance_type) {
                    case this.appService.attendance_type.checklist:
                        this.attendance_list[i].attendance_details[j]['icon'] = 'fa-check';
                        this.attendance_list[i].attendance_details[j]['method'] = 'Checklist';
                        break;
                    case this.appService.attendance_type.qr:
                        this.attendance_list[i].attendance_details[j]['icon'] = 'fa-qrcode';
                        this.attendance_list[i].attendance_details[j]['method'] = 'QR Code';
                        break;
                    case this.appService.attendance_type.quiz:
                        this.attendance_list[i].attendance_details[j]['icon'] = 'fa-question-circle';
                        this.attendance_list[i].attendance_details[j]['method'] = 'Quiz';
                        break;
                    case this.appService.attendance_type.permited_absent:
                        this.attendance_list[i].attendance_details[j]['icon'] = 'fa-envelope-square';
                        this.attendance_list[i].attendance_details[j]['method'] = 'Permited Absent';
                        break;
                    default:
                        this.attendance_list[i].attendance_details[j]['icon'] = '';
                        this.attendance_list[i].attendance_details[j]['method'] = 'Absent';
                        break;
                }
            }
        }
    };
    return CourseDetailTeacherComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */]) === "function" && _a || Object)
], CourseDetailTeacherComponent.prototype, "resultMessageModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["B" /* EditScheduleModalComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["B" /* EditScheduleModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["B" /* EditScheduleModalComponent */]) === "function" && _b || Object)
], CourseDetailTeacherComponent.prototype, "editScheduleModal", void 0);
CourseDetailTeacherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'course-detail-teacher',
        template: __webpack_require__("../../../../../src/app/courses/course-detail/course-detail-teacher/course-detail-teacher.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["t" /* ScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["t" /* ScheduleService */]) === "function" && _j || Object])
], CourseDetailTeacherComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=course-detail-teacher.component.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course-detail/course-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<course-detail-staff *ngIf=\"authService.current_user.role_id == appService.userType.staff\"></course-detail-staff>\n<course-detail-teacher *ngIf=\"authService.current_user.role_id == appService.userType.teacher\"></course-detail-teacher>"

/***/ }),

/***/ "../../../../../src/app/courses/course-detail/course-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseDetailComponent = (function () {
    function CourseDetailComponent(route, router, appService, authService) {
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.authService = authService;
    }
    CourseDetailComponent.prototype.ngOnInit = function () {
    };
    return CourseDetailComponent;
}());
CourseDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'course-detail',
        template: __webpack_require__("../../../../../src/app/courses/course-detail/course-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */]) === "function" && _d || Object])
], CourseDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=course-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/courses/courses.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Courses</h3>\n            <div class=\"navbar-btn pull-right\">\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onAddCourse()\"> <i class=\"fa fa-plus\"></i> Add</button>\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onImportCourse()\"> <i class=\"fa fa-upload\"></i> Import</button>\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onExportCourse()\"> <i class=\"fa fa-download\"></i> Export</button>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <div class=\"form-group col-md-4 col-xs-12\">\n                    <input placeholder=\"Search Course Name\" class=\"form-control\" [(ngModel)]=\"searchText\" (ngModelChange)=\"getCourseList()\" />\n                </div>\n                <div class=\"form-group col-md-8 col-xs-12\">\n                    <div class=\"col-xs-4\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectedProgram\" (ngModelChange)=\"onChangeProgram()\">\n                            <option *ngFor=\"let program of programs\" [value]=\"program.id\">{{program.name}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectedClasses\" (ngModelChange)=\"getCourseList()\">\n                            <option *ngFor=\"let class of filteredClasses\" [value]=\"class.id\">{{class.name}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectedSemester\" (ngModelChange)=\"getCourseList()\">\n                            <option *ngFor=\"let semester of semesters\" [value]=\"semester.id\">{{semester.name}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <br>\n            <table class=\"table table-bordered text-center table-hover\">\n                <thead>\n                    <tr>\n                        <th>Code</th>\n                        <th>Name</th>\n                        <th>Class</th>\n                        <th>Lecturer</th>\n                        <th>TA</th>\n                        <th>Total students</th>\n                        <th>Total attendances</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let course of current_courses\" (click)='onCellClick(course.id)'>\n                        <td>{{course.code}}</td>\n                        <td>{{course.name}}</td>\n                        <td>{{course.class_name}}</td>\n                        <td>{{course.lecturers}}</td>\n                        <td>{{course.tas}}</td>\n                        <td>{{course.total_stud}}</td>\n                        <td>{{course.attendance_count}}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"currentPage\" (pageChanged)=\"onPageChanged($event)\" class=\"pull-right no_margin\"></pagination>\n            <div class=\"form-group\">\n                <select [(ngModel)]=\"itemsPerPage\" (ngModelChange)=\"getCourseList()\">\n                    <option>10</option>\n                    <option>30</option>\n                    <option>50</option>\n                </select>\n                <span>Items/page</span>\n            </div>\n        </div>\n    </div>\n</div>\n<import-modal [import_type]=\"appService.import_export_type.course\" [title]=\"'Import Course'\" [note]=\"'*Class of the courses is based on file name, e.g. 16CLC.xlsx. Imported courses will belong to the lastest semester.'\" (onClose)=\"onCloseImport($event)\"></import-modal>\n<export-modal [export_type]=\"appService.import_export_type.course\" [title]=\"'Export Course'\" [search_data]=\"export_search_data\"></export-modal>\n"

/***/ }),

/***/ "../../../../../src/app/courses/courses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoursesComponent = (function () {
    function CoursesComponent(appService, courseService, router) {
        this.appService = appService;
        this.courseService = courseService;
        this.router = router;
        this.isCollapsed = true;
        this.sort_tag = ['none', 'asc', 'dsc'];
        this.sort_index = 0;
        this.semesters = [];
        this.programs = [];
        this.classes = [];
        this.current_courses = [];
        this.pageNumber = 1;
        this.limit = 15;
        this.currentPage = 1;
        this.totalItems = 0;
        this.itemsPerPage = 10;
        this.newCourseName = "";
        this.newCourseCode = "";
        this.newCourseLecturer = "";
        this.newCourseTA = "";
        this.export_search_data = {};
    }
    CoursesComponent.prototype.getCourseList = function () {
        var _this = this;
        this.courseService.getCourseLists(this.selectedProgram, this.selectedClasses, this.selectedSemester, this.searchText, this.sort_tag[this.sort_index], this.pageNumber, this.itemsPerPage)
            .subscribe(function (result) {
            _this.current_courses = result.courses;
            _this.totalItems = result.total_items;
            _this.apiCallResult = result.result;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get course list", 'error'); });
    };
    CoursesComponent.prototype.onChangeProgram = function () {
        this.filteredClasses = [{ id: 0, name: 'All Classes' }];
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].program_id == this.selectedProgram) {
                this.filteredClasses.push(this.classes[i]);
            }
        }
        this.selectedClasses = this.filteredClasses[0].id;
        this.getCourseList();
    };
    CoursesComponent.prototype.onPageChanged = function (event) {
        this.pageNumber = event.page;
        this.getCourseList();
    };
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getSemesterProgramClass().subscribe(function (results) {
            _this.semesters = results.semesters;
            _this.selectedSemester = _this.semesters.length > 0 ? _this.semesters[_this.semesters.length - 1].id : 0;
            _this.classes = results.classes;
            _this.programs = results.programs;
            _this.selectedProgram = _this.programs.length > 0 ? _this.programs[0].id : 0;
            _this.onChangeProgram();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get semester_program_class", 'error'); });
    };
    CoursesComponent.prototype.onCellClick = function (id) {
        this.router.navigate(['/courses/', id]);
    };
    CoursesComponent.prototype.onAddCourse = function () {
        this.router.navigate(['/courses/add']);
    };
    CoursesComponent.prototype.onImportCourse = function () {
        this.importModal.onOpenModal();
    };
    CoursesComponent.prototype.onCloseImport = function (event) {
        this.getCourseList();
    };
    CoursesComponent.prototype.onExportCourse = function () {
        this.export_search_data = {};
        this.export_search_data['program_id'] = this.selectedProgram;
        this.export_search_data['class_id'] = this.selectedClasses;
        this.export_search_data['semester_id'] = this.selectedSemester;
        this.export_search_data['search_text'] = this.searchText;
        this.exportModal.onOpenModal();
    };
    return CoursesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */]) === "function" && _a || Object)
], CoursesComponent.prototype, "importModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["l" /* ExportModalComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["l" /* ExportModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["l" /* ExportModalComponent */]) === "function" && _b || Object)
], CoursesComponent.prototype, "exportModal", void 0);
CoursesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-courses',
        template: __webpack_require__("../../../../../src/app/courses/courses.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], CoursesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=courses.component.js.map

/***/ }),

/***/ "../../../../../src/app/courses/courses.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__courses_component__ = __webpack_require__("../../../../../src/app/courses/courses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_course_add_course_component__ = __webpack_require__("../../../../../src/app/courses/add-course/add-course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__course_detail_course_detail_component__ = __webpack_require__("../../../../../src/app/courses/course-detail/course-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__course_detail_course_detail_staff_course_detail_staff_component__ = __webpack_require__("../../../../../src/app/courses/course-detail/course-detail-staff/course-detail-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__course_detail_course_detail_teacher_course_detail_teacher_component__ = __webpack_require__("../../../../../src/app/courses/course-detail/course-detail-teacher/course-detail-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_course_edit_course_component__ = __webpack_require__("../../../../../src/app/courses/edit-course/edit-course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesModule", function() { return CoursesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var coursesRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__courses_component__["a" /* CoursesComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_6__add_course_add_course_component__["a" /* AddCourseComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_7__course_detail_course_detail_component__["a" /* CourseDetailComponent */] },
    { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_10__edit_course_edit_course_component__["a" /* EditCourseComponent */] },
];
var CoursesModule = (function () {
    function CoursesModule() {
    }
    return CoursesModule;
}());
CoursesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(coursesRoutes),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["e" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["b" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_tabs__["a" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_14__shared_shared_module__["d" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__courses_component__["a" /* CoursesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__course_detail_course_detail_component__["a" /* CourseDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__course_detail_course_detail_teacher_course_detail_teacher_component__["a" /* CourseDetailTeacherComponent */],
            __WEBPACK_IMPORTED_MODULE_8__course_detail_course_detail_staff_course_detail_staff_component__["a" /* CourseDetailStaffComponent */],
            __WEBPACK_IMPORTED_MODULE_6__add_course_add_course_component__["a" /* AddCourseComponent */],
            __WEBPACK_IMPORTED_MODULE_10__edit_course_edit_course_component__["a" /* EditCourseComponent */]
        ],
        providers: []
    })
], CoursesModule);

//# sourceMappingURL=courses.module.js.map

/***/ }),

/***/ "../../../../../src/app/courses/edit-course/edit-course.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Edit Course</h3>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <form class=\"form-horizontal\">\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12 col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Code*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"course.code\" name=\"code\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Name*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"course.name\" name=\"name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Office hour </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"office_hour\" [(ngModel)]=\"course.office_hour\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Note </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"note\" [(ngModel)]=\"course.note\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12 col-md-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Lecturer*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-control tag_list col-md-7 col-xs-12\" (click)=\"onOpenChooseLecturer()\">\n                                        <button class=\"btn btn-primary disabled\" *ngFor=\"let lecturer of lecturers\" style=\"margin-bottom:5px\">{{lecturer.first_name}} {{lecturer.last_name}}</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> TA </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <div class=\"form-control tag_list col-md-7 col-xs-12\" (click)=\"onOpenChooseTA()\">\n                                        <button class=\"btn btn-primary disabled\" *ngFor=\"let lecturer of TAs\" style=\"margin-bottom:5px\">{{lecturer.first_name}} {{lecturer.last_name}}</button>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelEditCourse()\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onSaveCourse()\">Save</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"chooseLecturerModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-lg vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Edit Lecturers</h4>\n                </div>\n                <form class=\"form-horizontal form-label-left\">\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-6 col-xs-12 text-center\">\n                                <h4>Teacher list</h4>\n                                <input placeholder=\"Search Name\" class=\"form-control\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchList()\" name=\"searchText\" />\n                                <div style=\"overflow:auto; max-height:300px;\">\n                                    <table class=\"table table-bordered text-center table-hover\">\n                                        <thead>\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Email</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let teacher of filtered_teachers\" (click)='onSelectLecturerClick(teacher.id)'>\n                                                <td>{{teacher.first_name}} {{teacher.last_name}}</td>\n                                                <td>{{teacher.email}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-5 col-xs-12 col-sm-offset-1 text-center\">\n                                <h4>Selected Lecturers</h4>\n                                <div style=\"overflow:auto; max-height:300px;\">\n                                    <table class=\"table table-bordered text-center table-hover table-fixed\">\n                                        <thead>\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Email</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let teacher of temp_lecturers\" (click)='onRemoveLecturerClick(teacher.id)'>\n                                                <td>{{teacher.first_name}} {{teacher.last_name}}</td>\n                                                <td>{{teacher.email}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelChooseLecturer()\">Cancel</button>\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"onSaveChooseLecturer()\">Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"chooseTAModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-lg vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Edit TAs</h4>\n                </div>\n                <form class=\"form-horizontal form-label-left\">\n                    <div class=\"modal-body\">\n                        <div class=\"form-group\">\n                            <div class=\"col-sm-6 col-xs-12 text-center\">\n                                <h4>Teacher list</h4>\n                                <input placeholder=\"Search Name\" class=\"form-control\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchList()\" name=\"searchText\" />\n                                <div style=\"overflow:auto; max-height:300px;\">\n                                    <table class=\"table table-bordered text-center table-hover\">\n                                        <thead>\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Email</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let teacher of filtered_teachers\" (click)='onSelectTAClick(teacher.id)'>\n                                                <td>{{teacher.first_name}} {{teacher.last_name}}</td>\n                                                <td>{{teacher.email}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-5 col-xs-12 col-sm-offset-1 text-center\">\n                                <h4>Selected TAs</h4>\n                                <div style=\"overflow:auto; max-height:300px;\">\n                                    <table class=\"table table-bordered text-center table-hover table-fixed\">\n                                        <thead>\n                                            <tr>\n                                                <th>Name</th>\n                                                <th>Email</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor=\"let teacher of temp_TAs\" (click)='onRemoveTAClick(teacher.id)'>\n                                                <td>{{teacher.first_name}} {{teacher.last_name}}</td>\n                                                <td>{{teacher.email}}</td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelChooseTA()\">Cancel</button>\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"onSaveChooseTA()\">Save</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<result-message-modal [modal_title]=\"apiResult\" [modal_message]=\"apiResultMessage\"></result-message-modal>\n<div class=\"modal fade\" id=\"progressModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">\n                        <h2>Loading</h2>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width:100%\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/courses/edit-course/edit-course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCourseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCourseComponent = (function () {
    function EditCourseComponent(route, router, location, appService, courseService, teacherService) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.appService = appService;
        this.courseService = courseService;
        this.teacherService = teacherService;
        this.course = {
            code: '',
            name: '',
            note: '',
            office_hour: ''
        };
        this.lecturers = [];
        this.TAs = [];
        this.searchText = '';
        this.teachers = [];
        this.filtered_teachers = [];
        this.temp_lecturers = [];
        this.temp_TAs = [];
    }
    EditCourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teacherService.getListTeachers(this.searchText, 1, 9999)
            .subscribe(function (result) {
            _this.teachers = result.teacher_list;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get teacher list", 'error'); });
        this.route.params.subscribe(function (params) { _this.course_id = params['id']; });
        this.courseService.getCourseDetail(this.course_id).subscribe(function (result) {
            _this.course = result.course;
            if (_this.course['not_in_current_semester']) {
                _this.router.navigate(['/courses/', _this.course_id]);
                setTimeout(function () {
                    _this.appService.showPNotify('failure', "Can't edit course, that semester is ended", 'error');
                }, 3000);
            }
            _this.lecturers = result.lecturers;
            _this.TAs = result.TAs;
            for (var i = 0; i < _this.lecturers.length; i++) {
                for (var j = 0; j < _this.teachers.length; j++) {
                    if (_this.lecturers[i].id == _this.teachers[j].id) {
                        _this.teachers.splice(j, 1);
                    }
                }
            }
            for (var i = 0; i < _this.TAs.length; i++) {
                for (var j = 0; j < _this.teachers.length; j++) {
                    if (_this.TAs[i].id == _this.teachers[j].id) {
                        _this.teachers.splice(j, 1);
                    }
                }
            }
            _this.filtered_teachers = _this.teachers.slice();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get course detail", 'error'); });
    };
    EditCourseComponent.prototype.onCancelEditCourse = function () {
        this.location.back();
    };
    EditCourseComponent.prototype.onSaveCourse = function (isContinue) {
        var _this = this;
        if (isContinue === void 0) { isContinue = false; }
        //jQuery("#progressModal").modal("show");
        this.courseService.editCourse(this.course_id, this.course.code, this.course.name, this.lecturers, this.TAs, this.course.office_hour, this.course.note)
            .subscribe(function (result) {
            _this.apiResult = result.result;
            if (_this.apiResult == 'failure') {
                _this.apiResultMessage = result.message;
            }
            if (_this.apiResult == 'success') {
                _this.apiResultMessage = result.message + '...Redirecting';
                setTimeout(function () {
                    _this.router.navigate(['/courses/']);
                }, 3000);
            }
            //jQuery("#progressModal").modal("hide");
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) {
            _this.apiResult = 'failure;';
            _this.apiResultMessage = 'Server Error';
            //jQuery("#progressModal").modal("hide");
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        });
    };
    EditCourseComponent.prototype.searchList = function () {
        console.log('searchText');
        this.filtered_teachers = [];
        for (var i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].first_name.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0 || this.teachers[i].last_name.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0) {
                this.filtered_teachers.push(this.teachers[i]);
            }
        }
    };
    EditCourseComponent.prototype.onSelectLecturerClick = function (id) {
        for (var i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].id == id) {
                this.temp_lecturers.push(this.teachers[i]);
                this.teachers.splice(i, 1);
                this.searchList();
                break;
            }
        }
    };
    EditCourseComponent.prototype.onRemoveLecturerClick = function (id) {
        for (var i = 0; i < this.temp_lecturers.length; i++) {
            if (this.temp_lecturers[i].id == id) {
                this.teachers.push(this.temp_lecturers[i]);
                this.searchList();
                this.temp_lecturers.splice(i, 1);
                break;
            }
        }
    };
    EditCourseComponent.prototype.onOpenChooseLecturer = function () {
        this.temp_lecturers = [];
        this.temp_lecturers = this.lecturers.slice();
        jQuery("#chooseLecturerModal").modal("show");
    };
    EditCourseComponent.prototype.onCancelChooseLecturer = function () {
        for (var i = 0; i < this.temp_lecturers.length; i++) {
            this.teachers.push(this.temp_lecturers[i]);
            this.searchList();
            this.temp_lecturers.splice(i, 1);
            break;
        }
        this.filtered_teachers = this.teachers.slice();
        this.temp_lecturers = [];
        jQuery("#chooseLecturerModal").modal("hide");
    };
    EditCourseComponent.prototype.onSaveChooseLecturer = function () {
        this.lecturers = this.temp_lecturers.slice();
        this.temp_lecturers = [];
        this.filtered_teachers = this.teachers.slice();
        jQuery("#chooseLecturerModal").modal("hide");
    };
    EditCourseComponent.prototype.onSelectTAClick = function (id) {
        for (var i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i].id == id) {
                this.temp_TAs.push(this.teachers[i]);
                this.teachers.splice(i, 1);
                this.searchList();
                break;
            }
        }
    };
    EditCourseComponent.prototype.onRemoveTAClick = function (id) {
        for (var i = 0; i < this.temp_TAs.length; i++) {
            if (this.temp_TAs[i].id == id) {
                this.teachers.push(this.temp_TAs[i]);
                this.searchList();
                this.temp_TAs.splice(i, 1);
                break;
            }
        }
    };
    EditCourseComponent.prototype.onOpenChooseTA = function () {
        this.temp_TAs = [];
        this.temp_TAs = this.TAs.slice();
        jQuery("#chooseTAModal").modal("show");
    };
    EditCourseComponent.prototype.onCancelChooseTA = function () {
        this.temp_lecturers = [];
        for (var i = 0; i < this.temp_TAs.length; i++) {
            this.teachers.push(this.temp_TAs[i]);
            this.searchList();
            this.temp_TAs.splice(i, 1);
        }
        this.filtered_teachers = this.teachers.slice();
        jQuery("#chooseTAModal").modal("hide");
    };
    EditCourseComponent.prototype.onSaveChooseTA = function () {
        this.filtered_teachers = this.teachers.slice();
        this.TAs = this.temp_TAs.slice();
        this.temp_TAs = [];
        jQuery("#chooseTAModal").modal("hide");
    };
    return EditCourseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditCourseComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["z" /* ResultMessageModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["z" /* ResultMessageModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["z" /* ResultMessageModalComponent */]) === "function" && _a || Object)
], EditCourseComponent.prototype, "resultMessageModal", void 0);
EditCourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-course',
        template: __webpack_require__("../../../../../src/app/courses/edit-course/edit-course.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["g" /* AppService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["m" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["m" /* CourseService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["A" /* TeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["A" /* TeacherService */]) === "function" && _g || Object])
], EditCourseComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=edit-course.component.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map