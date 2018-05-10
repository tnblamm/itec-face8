webpackJsonp([5],{

/***/ "../../../../../src/app/check-attendance/check-attendance-student/check-attendance-student.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Check Attendance ({{selected_attendance['created_at'] | date:'short'}})</h3>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div *ngIf=\"delegate_code_checked\">\n                <div class=\"row\">\n                    <div class=\"col-xs-1\" style=\"text-align: right\">\n                        <h4>Course:</h4>\n                    </div>\n                    <div class=\"col-xs-5\">\n                        <h4>{{selected_attendance['course_code']}} - {{selected_attendance['course_name']}}</h4>\n                    </div>\n                    <div class=\"col-xs-1\" style=\"text-align: right;\">\n                        <h4>Class: </h4>\n                    </div>\n                    <div class=\"col-xs-1\">\n                        <h4>{{selected_attendance['class_name']}}</h4>\n                    </div>\n                    <div class=\"col-xs-2\" style=\"text-align: right;\">\n                        <h4>Present/Total: </h4>\n                    </div>\n                    <div class=\"col-xs-2\">\n                        <h4>{{selected_attendance['student_count']}} / {{selected_attendance['total_stud']}}</h4>\n                    </div>\n                </div>\n            <div class=\"row\">\n                <tabset>\n                    <tab heading='Current Week'>\n                        <br>\n                        <ng-container *ngFor=\"let student of check_attendance_list;let i = index;\">\n                            <ng-container *ngIf=\"!student.exemption\">\n                                <div class=\"col-sm-3 col-md-55 text-center\">\n                                    <div class=\"thumbnail\" style=\"height: 190px\">\n                                        <ng-template #tolTemplate1>\n                                            <div>Method : {{student.attendance_details[student.attendance_details.length-1].method}}</div>\n                                        </ng-template>\n                                        <div class=\"image\" (click)=\"onAttendanceCheckClick(i,student.attendance_details.length-1)\" [tooltip]=\"tolTemplate1\" container=\"body\">\n                                            <div class=\"checked_overlay\" *ngIf=\"student.attendance_details[student.attendance_details.length-1].attendance_type\"><i [ngClass]=\"['fa avatar_check', student.attendance_details[student.attendance_details.length-1].icon]\"></i></div>\n                                            <img [src]=\"student.avatar\" class=\"attendance_avatar\">\n                                        </div>\n                                        <div class=\"caption\">\n                                            <p><label>{{student.code}}</label></p>\n                                            <p><label>{{student.name}}</label></p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </ng-container>\n                    </tab>\n                    <tab heading='History'>\n                        <table class=\"table table-bordered text-center\">\n                            <thead>\n                                <tr>\n                                    <th>No</th>\n                                    <th>Code</th>\n                                    <th>Name</th>\n                                    <th colspan=\"2\">Week 1</th>\n                                    <th colspan=\"2\">Week 2</th>\n                                    <th colspan=\"2\">Week 3</th>\n                                    <th colspan=\"2\">Week 4</th>\n                                    <th colspan=\"2\">Week 5</th>\n                                    <th colspan=\"2\">Week 6</th>\n                                    <th colspan=\"2\">Week 7</th>\n                                    <th colspan=\"2\">Week 8</th>\n                                    <th colspan=\"2\">Week 9</th>\n                                    <th colspan=\"2\">Week 10</th>\n                                    <th colspan=\"2\">Week 11</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let student of check_attendance_list;let i = index;\">\n                                    <td>{{i+1}}</td>\n                                    <td>{{student.code}}</td>\n                                    <td>{{student.name}}</td>\n                                    <ng-container *ngIf=\"student.exemption\">\n                                        <td class=\"gray_background\" colspan=\"22\" style=\"font-weight: bold;\">Exempted</td>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"!student.exemption\">\n                                        <ng-container *ngFor=\"let attendance_detail of student.attendance_details;let j = index\">\n                                            <ng-template #tolTemplate>\n                                                <div>Method : {{attendance_detail.method}}</div>\n                                                <div>Created at : {{attendance_detail.created_at | date:'short'}}</div>\n                                                <div>Edited at : {{attendance_detail.attendance_time | date:'short'}}</div>\n                                                <div *ngIf=\"attendance_detail.edited_by\">Edited by : {{attendance_detail.editor}}</div>\n                                                <div *ngIf=\"attendance_detail.edited_by\">Reason : {{attendance_detail.edited_reason}}</div>\n                                            </ng-template>\n                                            <td width=\"3%\" [ngClass]=\"{'gray_background': j < student.attendance_details.length-1, 'warning_background': attendance_detail.edited_by}\" [tooltip]=\"tolTemplate\" container=\"body\"><i [ngClass]=\"['fa attendance-check', attendance_detail.icon]\"></i></td>\n                                        </ng-container>\n                                        <ng-container *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\">\n                                            <td class=\"gray_background\" width=\"3%\" *ngIf=\"number > student.attendance_details.length\"></td>\n                                        </ng-container>\n                                    </ng-container>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </tab>\n                </tabset>\n            </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"sessionStoppedModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">{{stopped_modal_message}}</h4>\n                </div>\n                <div class=\"modal-footer text-center\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"router.navigate(['/dashboard'])\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"enterDelegateCodeModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\" (keydown)=\"keyDownFunction($event)\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Enter Delegate Code</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <input class=\"form-control\" type=\"text\" [(ngModel)]=\"delegate_code\">\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancelCheckDelegateCode()\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkDelegateCode()\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/check-attendance/check-attendance-student/check-attendance-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckAttendanceStudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckAttendanceStudentComponent = (function () {
    function CheckAttendanceStudentComponent(checkAttendanceService, appConfig, socketService, authService, attendanceService, localStorage, appService, router) {
        var _this = this;
        this.checkAttendanceService = checkAttendanceService;
        this.appConfig = appConfig;
        this.socketService = socketService;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.localStorage = localStorage;
        this.appService = appService;
        this.router = router;
        this.opening_attendances = [];
        this.selected_attendance = {};
        this.selected_attendance_id = 0;
        this.check_attendance_list = [];
        this.delegate_code_checked = false;
        this.delegate_code = '';
        this.delegate_detail = {};
        socketService.consumeEventOnCheckAttendanceUpdated();
        socketService.invokeCheckAttendanceUpdated.subscribe(function (result) {
            if (_this.delegate_detail['course_id'] == result['course_id'] && _this.delegate_detail['class_id'] == result['class_id']) {
                _this.getOpeningAttendance();
            }
        });
        socketService.consumeEventOnCheckAttendanceStopped();
        socketService.invokeCheckAttendanceStopped.subscribe(function (result) {
            if (_this.delegate_detail['course_id'] == result['course_id'] && _this.delegate_detail['class_id'] == result['class_id']) {
                _this.stopped_modal_message = "Session is " + result['message'];
                jQuery('#sessionStoppedModal').modal({ backdrop: 'static', keyboard: false });
            }
        });
    }
    CheckAttendanceStudentComponent.prototype.sortAttendanceList = function () {
        var temp_check_attendance_list = [];
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            var attendance_details = this.check_attendance_list[i].attendance_details;
            if (!attendance_details[attendance_details.length - 1].attendance_type) {
                var temp_attendance_details = [];
                for (var j = 0; j < attendance_details.length; j++) {
                    temp_attendance_details.push({
                        attendance_type: attendance_details[j].attendance_type,
                        attendance_time: attendance_details[j].attendance_time,
                        attendance_id: attendance_details[j].attendance_id,
                        created_at: attendance_details[j].created_at,
                        edited_reason: attendance_details[j].edited_reason,
                        edited_by: attendance_details[j].edited_by,
                        editor: attendance_details[j].editor,
                    });
                }
                temp_check_attendance_list.push({
                    id: this.check_attendance_list[i].id,
                    code: this.check_attendance_list[i].code,
                    name: this.check_attendance_list[i].name,
                    exemption: this.check_attendance_list[i].exemption,
                    avatar: this.check_attendance_list[i].avatar,
                    attendance_details: temp_attendance_details
                });
            }
        }
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            var attendance_details = this.check_attendance_list[i].attendance_details;
            if (attendance_details[attendance_details.length - 1].attendance_type) {
                var temp_attendance_details = [];
                for (var j = 0; j < attendance_details.length; j++) {
                    temp_attendance_details.push({
                        attendance_type: attendance_details[j].attendance_type,
                        attendance_time: attendance_details[j].attendance_time,
                        attendance_id: attendance_details[j].attendance_id,
                        created_at: attendance_details[j].created_at,
                        edited_reason: attendance_details[j].edited_reason,
                        edited_by: attendance_details[j].edited_by,
                        editor: attendance_details[j].editor,
                    });
                }
                temp_check_attendance_list.push({
                    id: this.check_attendance_list[i].id,
                    code: this.check_attendance_list[i].code,
                    name: this.check_attendance_list[i].name,
                    exemption: this.check_attendance_list[i].exemption,
                    avatar: this.check_attendance_list[i].avatar,
                    attendance_details: temp_attendance_details
                });
            }
        }
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            this.check_attendance_list[i].id = temp_check_attendance_list[i].id;
            this.check_attendance_list[i].code = temp_check_attendance_list[i].code;
            this.check_attendance_list[i].name = temp_check_attendance_list[i].name;
            this.check_attendance_list[i].exemption = temp_check_attendance_list[i].exemption;
            this.check_attendance_list[i].avatar = temp_check_attendance_list[i].avatar;
            for (var j = 0; j < temp_check_attendance_list[i].attendance_details.length; j++) {
                this.check_attendance_list[i].attendance_details[j].attendance_id = temp_check_attendance_list[i].attendance_details[j].attendance_id;
                this.check_attendance_list[i].attendance_details[j].attendance_type = temp_check_attendance_list[i].attendance_details[j].attendance_type;
                this.check_attendance_list[i].attendance_details[j].attendance_time = temp_check_attendance_list[i].attendance_details[j].attendance_time;
                this.check_attendance_list[i].attendance_details[j].created_at = temp_check_attendance_list[i].attendance_details[j].created_at;
                this.check_attendance_list[i].attendance_details[j].edited_reason = temp_check_attendance_list[i].attendance_details[j].edited_reason;
                this.check_attendance_list[i].attendance_details[j].edited_by = temp_check_attendance_list[i].attendance_details[j].edited_by;
                this.check_attendance_list[i].attendance_details[j].editor = temp_check_attendance_list[i].attendance_details[j].editor;
                switch (this.check_attendance_list[i].attendance_details[j].attendance_type) {
                    case this.appService.attendance_type.checklist:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-check';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Checklist';
                        break;
                    case this.appService.attendance_type.qr:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-qrcode';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'QR Code';
                        break;
                    case this.appService.attendance_type.quiz:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-question-circle';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Quiz';
                        break;
                    case this.appService.attendance_type.permited_absent:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-envelope-square';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Permited Absent';
                        break;
                    default:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = '';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Absent';
                        break;
                }
            }
        }
    };
    CheckAttendanceStudentComponent.prototype.getCheckAttendanceList = function () {
        var _this = this;
        this.attendanceService.getCheckAttendanceList(this.delegate_detail['course_id'], this.delegate_detail['class_id']).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.check_attendance_list = result.check_attendance_list;
            _this.sortAttendanceList();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get check_attendance_list", 'error'); });
    };
    CheckAttendanceStudentComponent.prototype.ngOnInit = function () {
        jQuery('#enterDelegateCodeModal').modal({ backdrop: 'static', keyboard: false });
    };
    CheckAttendanceStudentComponent.prototype.ngOnDestroy = function () {
        this.socketService.stopEventOnCheckAttendanceStopped();
        this.socketService.stopEventOnCheckAttendanceUpdated();
    };
    CheckAttendanceStudentComponent.prototype.cancelCheckDelegateCode = function () {
        jQuery("#enterDelegateCodeModal").modal("hide");
        this.router.navigate(['/dashboard']);
    };
    CheckAttendanceStudentComponent.prototype.checkDelegateCode = function () {
        var _this = this;
        this.checkAttendanceService.checkDelegateCode(this.delegate_code).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'success') {
                _this.delegate_detail = result.delegate_detail;
                _this.delegate_code_checked = true;
                _this.getOpeningAttendance();
                jQuery("#enterDelegateCodeModal").modal("hide");
            }
            else {
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, 'error');
            }
        }, function (error) {
            _this.appService.showPNotify('failure', "Server Error! Can't check delegate code", 'error');
        });
    };
    CheckAttendanceStudentComponent.prototype.getOpeningAttendance = function () {
        var _this = this;
        this.attendanceService.getOpeningAttendanceCourse(this.delegate_detail['created_by']).subscribe(function (result) {
            if (result.result == 'success') {
                _this.opening_attendances = result.opening_attendances;
                for (var j = 0; j < _this.opening_attendances.length; j++) {
                    if (_this.opening_attendances[j].course_id == _this.delegate_detail['course_id'] && _this.opening_attendances[j].class_id == _this.delegate_detail['class_id']) {
                        _this.selected_attendance = _this.opening_attendances[j];
                        _this.selected_attendance_id = _this.opening_attendances[j].id;
                        break;
                    }
                }
            }
            _this.getCheckAttendanceList();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get opening attendances", 'error'); });
    };
    CheckAttendanceStudentComponent.prototype.onAttendanceCheckClick = function (student_index, attendance_detail_index) {
        var _this = this;
        var type;
        if (this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_type) {
            type = this.appService.attendance_type.absent;
        }
        else {
            type = this.appService.attendance_type.checklist;
        }
        this.checkAttendanceService.checkList(this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_id, this.check_attendance_list[student_index].id, type).subscribe(function (result) {
            if (_this.apiResult == 'success') {
                _this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_type = type;
                if (type) {
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['icon'] = 'fa-check';
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['method'] = 'Checklist';
                }
                else {
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['icon'] = '';
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['method'] = 'Absent';
                }
                _this.sortAttendanceList();
                _this.socketService.emitEventOnCheckAttendanceUpdated({ course_id: _this.delegate_detail['course_id'], class_id: _this.delegate_detail['class_id'] });
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't check_list", 'error'); });
    };
    CheckAttendanceStudentComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.checkDelegateCode();
        }
    };
    return CheckAttendanceStudentComponent;
}());
CheckAttendanceStudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'check-attendance-student',
        template: __webpack_require__("../../../../../src/app/check-attendance/check-attendance-student/check-attendance-student.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["p" /* CheckAttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["p" /* CheckAttendanceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["q" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["q" /* AppConfig */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["r" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["r" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _h || Object])
], CheckAttendanceStudentComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=check-attendance-student.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-attendance/check-attendance-teacher/check-attendance-teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Check Attendance ({{selected_attendance['created_at'] | date:'short'}})</h3>\n            <div class=\"pull-right\">\n                <select class=\"form-control\" [(ngModel)]=\"selected_attendance_id\" (ngModelChange)=\"onChangeAttendance()\">\n                    <option *ngFor=\"let attendance of opening_attendances\" [value]=\"attendance.id\">{{attendance.course_name}}-{{attendance.class_name}}</option>\n                </select>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <div class=\"col-xs-1\" style=\"text-align: right\">\n                    <h4>Course:</h4>\n                </div>\n                <div class=\"col-xs-5\">\n                    <h4>{{selected_attendance['course_code']}} - {{selected_attendance['course_name']}}</h4>\n                </div>\n                <div class=\"col-xs-1\" style=\"text-align: right;\">\n                    <h4>Class: </h4>\n                </div>\n                <div class=\"col-xs-1\">\n                    <h4>{{selected_attendance['class_name']}}</h4>\n                </div>\n                <div class=\"col-xs-2\" style=\"text-align: right;\">\n                    <h4>Present/Total: </h4>\n                </div>\n                <div class=\"col-xs-2\">\n                    <h4>{{selected_attendance['student_count']}} / {{selected_attendance['total_stud']}}</h4>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"pull-right\">\n                    <button class=\"btn btn-primary\" (click)=\"generateQRCode()\"><i class=\"fa fa-qrcode\"></i> QR code</button>\n                    <button class=\"btn btn-primary\" (click)=\"generateDelegateCode()\"><i class=\"fa fa-external-link-square\"></i> Delegate Code</button>\n                    <button class=\"btn btn-primary\" (click)=\"generateQuiz()\"><i class=\"fa fa-question-circle\"></i> Quiz</button>\n                </div>\n            </div>\n            <hr>\n            <div class=\"row\">\n                <tabset [justified]=\"true\">\n                    <tab heading='Current Week'>\n                        <br>\n                        <ng-container *ngFor=\"let student of check_attendance_list;let i = index;\">\n                            <ng-container *ngIf=\"!student.exemption\">\n                                <div class=\"col-sm-3 col-md-55 text-center\">\n                                    <div class=\"thumbnail\" style=\"height: 190px\">\n                                        <ng-template #tolTemplate1>\n                                            <div>Method : {{student.attendance_details[student.attendance_details.length-1].method}}</div>\n                                            <div>Checked at : {{student.attendance_details[student.attendance_details.length-1].attendance_time | date:'short'}}</div>\n                                        </ng-template>\n                                        <div class=\"image\" (click)=\"onAttendanceCheckClick(i,student.attendance_details.length-1)\" [tooltip]=\"tolTemplate1\" container=\"body\">\n                                            <div class=\"checked_overlay\" *ngIf=\"student.attendance_details[student.attendance_details.length-1].attendance_type\"><i [ngClass]=\"['fa avatar_check', student.attendance_details[student.attendance_details.length-1]['icon']]\"></i></div>\n                                            <img [src]=\"student.avatar\" class=\"attendance_avatar\">\n                                        </div>\n                                        <div class=\"caption\">\n                                            <p><label>{{student.code}}</label></p>\n                                            <p><label>{{student.name}}</label></p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </ng-container>\n                    </tab>\n                    <tab class=\"text-center\" heading='Class management'>\n                        <br>\n                        <label class=\"note\">Note: Student's interactions: No. answered questions (<i class=\"fa fa-question-circle-o\"></i>), No. discussions (<i class=\"fa fa-comments\"></i>), No. presentations (<i class=\"fa fa-laptop\"></i>)</label>\n                        <br>\n                        <ng-container *ngFor=\"let student of check_attendance_list;let i = index;\">\n                            <ng-container *ngIf=\"!student.exemption\">\n                                <div class=\"col-sm-3 col-md-55 text-center\" *ngIf=\"student.attendance_details[student.attendance_details.length-1].attendance_type\">\n                                    <div class=\"thumbnail\" style=\"height: 220px\">\n                                        <div class=\"image\">\n                                            <img [src]=\"student.avatar\" class=\"attendance_avatar\">\n                                        </div>\n                                        <div class=\"caption\">\n                                            <div class=\"row student_interaction\">\n                                                <button class=\"btn btn-round btn-primary\" (click)=\"confirmInteraction(student,appService.student_interaction_type.answer_question)\"><i class=\"fa fa-question-circle-o\"></i> {{student.attendance_details[student.attendance_details.length-1].answered_questions}}</button>\n                                                <button class=\"btn btn-round btn-primary\" (click)=\"confirmInteraction(student,appService.student_interaction_type.discuss)\"><i class=\"fa fa-comments\"></i> {{student.attendance_details[student.attendance_details.length-1].discussions}}</button>\n                                                <button class=\"btn btn-round btn-primary\" (click)=\"confirmInteraction(student,appService.student_interaction_type.present)\"><i class=\"fa fa-laptop\"></i> {{student.attendance_details[student.attendance_details.length-1].presentations}}</button>\n                                            </div>\n                                            <p><label>{{student.code}}</label></p>\n                                            <p><label>{{student.name}}</label></p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </ng-container>\n                        </ng-container>\n                    </tab>\n                    <tab heading='History'>\n                        <br>\n                        <button class=\"pull-right btn-primary btn\" (click)=\"changeHistory()\">\n                            <span *ngIf=\"is_show_attendance_history\">Show interaction history</span>\n                            <span *ngIf=\"!is_show_attendance_history\">Show attendance history</span>\n                        </button>\n                        <table *ngIf=\"is_show_attendance_history\" class=\"table table-bordered text-center\">\n                            <thead>\n                                <tr>\n                                    <th>No</th>\n                                    <th>Code</th>\n                                    <th>Name</th>\n                                    <th colspan=\"2\">Week 1</th>\n                                    <th colspan=\"2\">Week 2</th>\n                                    <th colspan=\"2\">Week 3</th>\n                                    <th colspan=\"2\">Week 4</th>\n                                    <th colspan=\"2\">Week 5</th>\n                                    <th colspan=\"2\">Week 6</th>\n                                    <th colspan=\"2\">Week 7</th>\n                                    <th colspan=\"2\">Week 8</th>\n                                    <th colspan=\"2\">Week 9</th>\n                                    <th colspan=\"2\">Week 10</th>\n                                    <th colspan=\"2\">Week 11</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let student of check_attendance_list;let i = index;\">\n                                    <td>{{i+1}}</td>\n                                    <td>{{student.code}}</td>\n                                    <td>{{student.name}}</td>\n                                    <ng-container *ngIf=\"student.exemption\">\n                                        <td class=\"gray_background\" colspan=\"22\" style=\"font-weight: bold;\">Exempted</td>\n                                    </ng-container>\n                                    <ng-container *ngIf=\"!student.exemption\">\n                                        <ng-container *ngFor=\"let attendance_detail of student.attendance_details;let j = index\">\n                                            <ng-template #tolTemplate>\n                                                <div>Method : {{attendance_detail.method}}</div>\n                                                <div>Created at : {{attendance_detail.created_at | date:'short'}}</div>\n                                                <div>Checked at : {{attendance_detail.attendance_time | date:'short'}}</div>\n                                                <div *ngIf=\"attendance_detail.edited_by\">Edited by : {{attendance_detail.editor}}</div>\n                                                <div *ngIf=\"attendance_detail.edited_by\">Reason : {{attendance_detail.edited_reason}}</div>\n                                            </ng-template>\n                                            <td width=\"3%\" [ngClass]=\"{'gray_background': j < student.attendance_details.length-1, 'warning_background': attendance_detail.edited_by}\" [tooltip]=\"tolTemplate\" container=\"body\"><i [ngClass]=\"['fa attendance-check', attendance_detail.icon]\"></i></td>\n                                        </ng-container>\n                                        <ng-container *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\">\n                                            <td class=\"gray_background\" width=\"3%\" *ngIf=\"number > student.attendance_details.length\"></td>\n                                        </ng-container>\n                                    </ng-container>\n                                </tr>\n                            </tbody>\n                        </table>\n                        <div *ngIf=\"!is_show_attendance_history\">\n                            <div>\n                                <label>Student's interaction : </label>\n                                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" [value]=\"appService.student_interaction_type.answer_question\" [(ngModel)]=\"selected_interaction\">Answered questions (<i class=\"fa fa-question-circle-o\"></i>)</label>\n                                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" [value]=\"appService.student_interaction_type.discuss\" [(ngModel)]=\"selected_interaction\">Discussions (<i class=\"fa fa-comments\"></i>)</label>\n                                <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" [value]=\"appService.student_interaction_type.present\" [(ngModel)]=\"selected_interaction\">Presentations (<i class=\"fa fa-laptop\"></i>)</label>\n                            </div>\n                            <table class=\"table table-bordered text-center\">\n                                <thead>\n                                    <tr>\n                                        <th>Code</th>\n                                        <th>Name</th>\n                                        <th colspan=\"2\">Week 1</th>\n                                        <th colspan=\"2\">Week 2</th>\n                                        <th colspan=\"2\">Week 3</th>\n                                        <th colspan=\"2\">Week 4</th>\n                                        <th colspan=\"2\">Week 5</th>\n                                        <th colspan=\"2\">Week 6</th>\n                                        <th colspan=\"2\">Week 7</th>\n                                        <th colspan=\"2\">Week 8</th>\n                                        <th colspan=\"2\">Week 9</th>\n                                        <th colspan=\"2\">Week 10</th>\n                                        <th colspan=\"2\">Week 11</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let student of check_attendance_list;let i = index;\">\n                                        <td>{{student.code}}</td>\n                                        <td>{{student.name}}</td>\n                                        <ng-container *ngFor=\"let attendance_detail of student.attendance_details;let j = index\">\n                                            <td [ngClass]=\"{'gray_background': j < student.attendance_details.length-1}\"><label *ngIf=\"selected_interaction == appService.student_interaction_type.answer_question\">{{attendance_detail.answered_questions}}</label><label *ngIf=\"selected_interaction == appService.student_interaction_type.discuss\">{{attendance_detail.discussions}}</label><label *ngIf=\"selected_interaction == appService.student_interaction_type.present\">{{attendance_detail.presentations}}</label></td>\n                                        </ng-container>\n                                        <ng-container *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\">\n                                            <td class=\"gray_background\" width=\"3%\" *ngIf=\"number > student.attendance_details.length\"></td>\n                                        </ng-container>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </tab>\n                </tabset>\n            </div>\n            <div class=\"row\">\n                <div class=\"pull-right\">\n                    <button class=\"btn btn-danger\" (click)=\"onCancelAttendanceSession()\">Cancel Attendance Session</button>\n                    <button class=\"btn btn-success\" (click)=\"onCloseAttendanceSession()\">Close Attendance Session</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"confirmCancelModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Confirm Cancel Session</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        *All data of this session will be deleted.\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-default btn-danger\" (click)=\"confirmCancelAttendanceSession()\" data-dismiss=\"modal\">Confirm</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"confirmEndModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Confirm End Session</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        This session won't be updated once it's closed.\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmCloseAttendanceSession()\" data-dismiss=\"modal\">Confirm</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"sessionStoppedModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">{{stopped_modal_message}}</h4>\n                </div>\n                <div class=\"modal-footer text-center\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"router.navigate(['/dashboard'])\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"delegateCodeModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Delegate Code</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <h3 class=\"well well-sm text-center\">{{delegate_code}}</h3>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/check-attendance/check-attendance-teacher/check-attendance-teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckAttendanceTeacherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckAttendanceTeacherComponent = (function () {
    function CheckAttendanceTeacherComponent(checkAttendanceService, appConfig, socketService, authService, attendanceService, localStorage, appService, router, studentService) {
        var _this = this;
        this.checkAttendanceService = checkAttendanceService;
        this.appConfig = appConfig;
        this.socketService = socketService;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.localStorage = localStorage;
        this.appService = appService;
        this.router = router;
        this.studentService = studentService;
        this.opening_attendances = [];
        this.selected_attendance = {};
        this.selected_attendance_id = 0;
        this.delegate_code = '';
        this.check_attendance_list = [];
        this.is_show_attendance_history = true;
        socketService.consumeEventOnCheckAttendanceUpdated();
        socketService.invokeCheckAttendanceUpdated.subscribe(function (result) {
            if (_this.selected_course_id == result['course_id'] && _this.selected_class_id == result['class_id']) {
                _this.getOpeningAttendance();
            }
        });
        socketService.consumeEventOnCheckAttendanceCreated();
        socketService.invokeCheckAttendanceCreated.subscribe(function (result) {
            _this.getOpeningAttendance();
        });
        socketService.consumeEventOnCheckAttendanceStopped();
        socketService.invokeCheckAttendanceStopped.subscribe(function (result) {
            if (_this.selected_course_id == result['course_id'] && _this.selected_class_id == result['class_id']) {
                _this.stopped_modal_message = "Session is " + result['message'];
                jQuery('#sessionStoppedModal').modal({ backdrop: 'static', keyboard: false });
            }
        });
    }
    CheckAttendanceTeacherComponent.prototype.changeHistory = function () {
        this.is_show_attendance_history = !this.is_show_attendance_history;
    };
    CheckAttendanceTeacherComponent.prototype.sortAttendanceList = function () {
        var temp_check_attendance_list = [];
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            var attendance_details = this.check_attendance_list[i].attendance_details;
            if (!attendance_details[attendance_details.length - 1].attendance_type) {
                var temp_attendance_details = [];
                for (var j = 0; j < attendance_details.length; j++) {
                    temp_attendance_details.push({
                        attendance_type: attendance_details[j].attendance_type,
                        attendance_time: attendance_details[j].attendance_time,
                        attendance_id: attendance_details[j].attendance_id,
                        created_at: attendance_details[j].created_at,
                        edited_reason: attendance_details[j].edited_reason,
                        edited_by: attendance_details[j].edited_by,
                        editor: attendance_details[j].editor,
                        answered_questions: attendance_details[j].answered_questions,
                        discussions: attendance_details[j].discussions,
                        presentations: attendance_details[j].presentations,
                    });
                }
                temp_check_attendance_list.push({
                    id: this.check_attendance_list[i].id,
                    code: this.check_attendance_list[i].code,
                    name: this.check_attendance_list[i].name,
                    exemption: this.check_attendance_list[i].exemption,
                    avatar: this.check_attendance_list[i].avatar,
                    attendance_details: temp_attendance_details
                });
            }
        }
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            var attendance_details = this.check_attendance_list[i].attendance_details;
            if (attendance_details[attendance_details.length - 1].attendance_type) {
                var temp_attendance_details = [];
                for (var j = 0; j < attendance_details.length; j++) {
                    temp_attendance_details.push({
                        attendance_type: attendance_details[j].attendance_type,
                        attendance_time: attendance_details[j].attendance_time,
                        attendance_id: attendance_details[j].attendance_id,
                        created_at: attendance_details[j].created_at,
                        edited_reason: attendance_details[j].edited_reason,
                        edited_by: attendance_details[j].edited_by,
                        editor: attendance_details[j].editor,
                        answered_questions: attendance_details[j].answered_questions,
                        discussions: attendance_details[j].discussions,
                        presentations: attendance_details[j].presentations,
                    });
                }
                temp_check_attendance_list.push({
                    id: this.check_attendance_list[i].id,
                    code: this.check_attendance_list[i].code,
                    name: this.check_attendance_list[i].name,
                    exemption: this.check_attendance_list[i].exemption,
                    avatar: this.check_attendance_list[i].avatar,
                    attendance_details: temp_attendance_details
                });
            }
        }
        for (var i = 0; i < this.check_attendance_list.length; i++) {
            this.check_attendance_list[i].id = temp_check_attendance_list[i].id;
            this.check_attendance_list[i].code = temp_check_attendance_list[i].code;
            this.check_attendance_list[i].name = temp_check_attendance_list[i].name;
            this.check_attendance_list[i].exemption = temp_check_attendance_list[i].exemption;
            this.check_attendance_list[i].avatar = temp_check_attendance_list[i].avatar;
            for (var j = 0; j < temp_check_attendance_list[i].attendance_details.length; j++) {
                this.check_attendance_list[i].attendance_details[j].attendance_id = temp_check_attendance_list[i].attendance_details[j].attendance_id;
                this.check_attendance_list[i].attendance_details[j].attendance_type = temp_check_attendance_list[i].attendance_details[j].attendance_type;
                this.check_attendance_list[i].attendance_details[j].attendance_time = temp_check_attendance_list[i].attendance_details[j].attendance_time;
                this.check_attendance_list[i].attendance_details[j].created_at = temp_check_attendance_list[i].attendance_details[j].created_at;
                this.check_attendance_list[i].attendance_details[j].edited_reason = temp_check_attendance_list[i].attendance_details[j].edited_reason;
                this.check_attendance_list[i].attendance_details[j].edited_by = temp_check_attendance_list[i].attendance_details[j].edited_by;
                this.check_attendance_list[i].attendance_details[j].editor = temp_check_attendance_list[i].attendance_details[j].editor;
                this.check_attendance_list[i].attendance_details[j].answered_questions = temp_check_attendance_list[i].attendance_details[j].answered_questions;
                this.check_attendance_list[i].attendance_details[j].discussions = temp_check_attendance_list[i].attendance_details[j].discussions;
                this.check_attendance_list[i].attendance_details[j].presentations = temp_check_attendance_list[i].attendance_details[j].presentations;
                switch (this.check_attendance_list[i].attendance_details[j].attendance_type) {
                    case this.appService.attendance_type.checklist:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-check';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Checklist';
                        break;
                    case this.appService.attendance_type.qr:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-qrcode';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'QR Code';
                        break;
                    case this.appService.attendance_type.quiz:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-question-circle';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Quiz';
                        break;
                    case this.appService.attendance_type.permited_absent:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = 'fa-envelope-square';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Permited Absent';
                        break;
                    default:
                        this.check_attendance_list[i].attendance_details[j]['icon'] = '';
                        this.check_attendance_list[i].attendance_details[j]['method'] = 'Absent';
                        break;
                }
            }
        }
    };
    CheckAttendanceTeacherComponent.prototype.getCheckAttendanceList = function () {
        var _this = this;
        this.selected_class_id = this.selected_attendance['class_id'];
        this.selected_course_id = this.selected_attendance['course_id'];
        this.attendanceService.getCheckAttendanceList(this.selected_course_id, this.selected_class_id).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.check_attendance_list = result.check_attendance_list;
            _this.sortAttendanceList();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get check_attendance_list", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selected_interaction = this.appService.student_interaction_type.answer_question;
        this.attendanceService.getOpeningAttendanceCourse(this.authService.current_user.id)
            .subscribe(function (result) {
            _this.opening_attendances = result.opening_attendances;
            _this.selected_course_id = _this.localStorage.get('check_attendance_course_id');
            _this.selected_class_id = _this.localStorage.get('check_attendance_class_id');
            _this.localStorage.remove('check_attendance_course_id', 'check_attendance_class_id');
            if (_this.opening_attendances.length == 0) {
                if (_this.selected_course_id && _this.selected_class_id) {
                    _this.createAttendance();
                }
                else {
                    _this.router.navigate(['/dashboard']);
                    _this.appService.showPNotify('info', "There are no opening attendance! Select one first", 'info');
                }
            }
            else {
                if (!_this.selected_course_id) {
                    //show first opening
                    _this.selected_attendance_id = _this.opening_attendances[0].id;
                    _this.selected_attendance = _this.opening_attendances[0];
                    _this.getCheckAttendanceList();
                }
                else {
                    //check if new or not
                    var i;
                    for (i = 0; i < _this.opening_attendances.length; i++) {
                        if (_this.opening_attendances[i].course_id == _this.selected_course_id && _this.opening_attendances[i].class_id == _this.selected_class_id) {
                            _this.selected_attendance = _this.opening_attendances[i];
                            _this.selected_attendance_id = _this.opening_attendances[i].id;
                            break;
                        }
                    }
                    if (i == _this.opening_attendances.length) {
                        //new
                        _this.createAttendance();
                    }
                    else {
                        _this.getCheckAttendanceList();
                    }
                }
                setTimeout(function () {
                    //
                }, 1000);
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get opening attendances", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.ngOnDestroy = function () {
        console.log('abc');
        this.socketService.stopEventOnCheckAttendanceStopped();
        this.socketService.stopEventOnCheckAttendanceCreated();
        this.socketService.stopEventOnCheckAttendanceUpdated();
    };
    CheckAttendanceTeacherComponent.prototype.getOpeningAttendance = function () {
        var _this = this;
        this.attendanceService.getOpeningAttendanceCourse(this.authService.current_user.id).subscribe(function (result) {
            _this.opening_attendances = result.opening_attendances;
            for (var j = 0; j < _this.opening_attendances.length; j++) {
                if (_this.opening_attendances[j].course_id == _this.selected_course_id && _this.opening_attendances[j].class_id == _this.selected_class_id) {
                    _this.selected_attendance = _this.opening_attendances[j];
                    _this.selected_attendance_id = _this.opening_attendances[j].id;
                    break;
                }
            }
            _this.getCheckAttendanceList();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get opening attendances", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.createAttendance = function () {
        var _this = this;
        this.attendanceService.createAttendance(this.selected_course_id, this.selected_class_id, this.authService.current_user.id)
            .subscribe(function (result) {
            if (result.result == 'success') {
                _this.getOpeningAttendance();
                _this.socketService.emitEventOnCheckAttendanceCreated(null);
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't create new attendances", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.onChangeAttendance = function () {
        for (var j = 0; j < this.opening_attendances.length; j++) {
            if (this.opening_attendances[j].id == this.selected_attendance_id) {
                this.selected_attendance = this.opening_attendances[j];
                break;
            }
        }
        this.getCheckAttendanceList();
    };
    CheckAttendanceTeacherComponent.prototype.onCancelAttendanceSession = function () {
        jQuery('#confirmCancelModal').modal('show');
    };
    CheckAttendanceTeacherComponent.prototype.onCloseAttendanceSession = function () {
        jQuery('#confirmEndModal').modal('show');
    };
    CheckAttendanceTeacherComponent.prototype.confirmCancelAttendanceSession = function () {
        var _this = this;
        this.attendanceService.cancelAttendance(this.selected_attendance['id']).subscribe(function (result) {
            if (result.result == 'success') {
                var temp_attendance = _this.localStorage.get('selected_attendance');
                if (temp_attendance && _this.selected_attendance['id'] == temp_attendance['id']) {
                    _this.localStorage.remove('selected_attendance');
                }
                _this.socketService.emitEventOnCheckAttendanceStopped({
                    message: 'cancelled by ' + _this.authService.current_user.first_name + ' ' + _this.authService.current_user.last_name,
                    course_id: _this.selected_course_id,
                    class_id: _this.selected_class_id,
                });
                _this.appService.showPNotify('success', "Canceled Attendance Session", 'success');
                _this.router.navigate(['/dashboard']);
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't cancel attendance session", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.confirmCloseAttendanceSession = function () {
        var _this = this;
        this.attendanceService.closeAttendance(this.selected_attendance['id']).subscribe(function (result) {
            if (result.result == 'success') {
                var temp_attendance = _this.localStorage.get('selected_attendance');
                if (temp_attendance && _this.selected_attendance['id'] == temp_attendance['id']) {
                    _this.localStorage.remove('selected_attendance');
                }
                _this.socketService.emitEventOnCheckAttendanceStopped({
                    message: 'closed by ' + _this.authService.current_user.first_name + ' ' + _this.authService.current_user.last_name,
                    course_id: _this.selected_course_id,
                    class_id: _this.selected_class_id,
                });
                _this.appService.showPNotify('success', "Closed Attendance Session", 'success');
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.appService.showPNotify('failure', result.message, 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't close attendance session", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.generateQRCode = function () {
        var check_attendance_url = this.appConfig.apiHost + "/check-attendance/qr-code/" + this.selected_attendance_id;
        this.localStorage.set('qrCodeData', check_attendance_url);
        window.open(this.appConfig.host + '/qr-code', '_blank', 'height=300,width=300,scrollbars=yes,status=0,toolbar=0,menubar=0,location=0');
    };
    CheckAttendanceTeacherComponent.prototype.generateDelegateCode = function () {
        var _this = this;
        this.checkAttendanceService.generateDelegateCode(this.selected_course_id, this.selected_class_id).subscribe(function (result) {
            _this.delegate_code = result.code;
            jQuery('#delegateCodeModal').modal('show');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't generate delegate code", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.generateQuiz = function () {
        this.localStorage.set('selected_attendance', this.selected_attendance);
        this.router.navigate(['/check-attendance/quiz/']);
    };
    CheckAttendanceTeacherComponent.prototype.onAttendanceCheckClick = function (student_index, attendance_detail_index) {
        var _this = this;
        var type;
        if (this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_type) {
            type = this.appService.attendance_type.absent;
        }
        else {
            type = this.appService.attendance_type.checklist;
        }
        this.checkAttendanceService.checkList(this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_id, this.check_attendance_list[student_index].id, type).subscribe(function (result) {
            if (result.result == 'success') {
                _this.check_attendance_list[student_index].attendance_details[attendance_detail_index].attendance_type = type;
                if (type) {
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['icon'] = 'fa-check';
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['method'] = 'Checklist';
                }
                else {
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['icon'] = '';
                    _this.check_attendance_list[student_index].attendance_details[attendance_detail_index]['method'] = 'Absent';
                }
                _this.sortAttendanceList();
                _this.socketService.emitEventOnCheckAttendanceUpdated({
                    course_id: _this.selected_course_id,
                    class_id: _this.selected_class_id,
                });
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't check_list", 'error'); });
    };
    CheckAttendanceTeacherComponent.prototype.confirmInteraction = function (student, interaction_type) {
        var _this = this;
        this.studentService.updateStudentInteraction(student.id, this.selected_attendance_id, interaction_type)
            .subscribe(function (result) {
            if (result.result == 'success') {
                switch (interaction_type) {
                    case _this.appService.student_interaction_type.answer_question:
                        student.attendance_details[student.attendance_details.length - 1].answered_questions++;
                        break;
                    case _this.appService.student_interaction_type.discuss:
                        student.attendance_details[student.attendance_details.length - 1].discussions++;
                        break;
                    case _this.appService.student_interaction_type.present:
                        student.attendance_details[student.attendance_details.length - 1].presentations++;
                        break;
                }
                _this.appService.showPNotify('success', "Successfully update student interaction!", 'success');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't update student interaction", 'error'); });
    };
    return CheckAttendanceTeacherComponent;
}());
CheckAttendanceTeacherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'check-attendance-teacher',
        template: __webpack_require__("../../../../../src/app/check-attendance/check-attendance-teacher/check-attendance-teacher.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["p" /* CheckAttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["p" /* CheckAttendanceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["q" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["q" /* AppConfig */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["r" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["r" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["o" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["o" /* StudentService */]) === "function" && _j || Object])
], CheckAttendanceTeacherComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=check-attendance-teacher.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-attendance/check-attendance.component.html":
/***/ (function(module, exports) {

module.exports = "<check-attendance-teacher *ngIf=\"authService.current_user.role_id == appService.userType.teacher\"></check-attendance-teacher>\n<check-attendance-student *ngIf=\"authService.current_user.role_id == appService.userType.student\"></check-attendance-student>\n"

/***/ }),

/***/ "../../../../../src/app/check-attendance/check-attendance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckAttendanceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckAttendanceComponent = (function () {
    function CheckAttendanceComponent(checkAttendanceService, appConfig, authService, attendanceService, localStorage, appService, router) {
        this.checkAttendanceService = checkAttendanceService;
        this.appConfig = appConfig;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.localStorage = localStorage;
        this.appService = appService;
        this.router = router;
    }
    CheckAttendanceComponent.prototype.ngOnInit = function () {
    };
    return CheckAttendanceComponent;
}());
CheckAttendanceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-check-attendance',
        template: __webpack_require__("../../../../../src/app/check-attendance/check-attendance.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["p" /* CheckAttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["p" /* CheckAttendanceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["q" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["q" /* AppConfig */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object])
], CheckAttendanceComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=check-attendance.component.js.map

/***/ }),

/***/ "../../../../../src/app/check-attendance/check-attendance.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__check_attendance_component__ = __webpack_require__("../../../../../src/app/check-attendance/check-attendance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__check_attendance_teacher_check_attendance_teacher_component__ = __webpack_require__("../../../../../src/app/check-attendance/check-attendance-teacher/check-attendance-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__check_attendance_student_check_attendance_student_component__ = __webpack_require__("../../../../../src/app/check-attendance/check-attendance-student/check-attendance-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckAttendanceModule", function() { return CheckAttendanceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var Routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__check_attendance_component__["a" /* CheckAttendanceComponent */] },
];
var CheckAttendanceModule = (function () {
    function CheckAttendanceModule() {
    }
    return CheckAttendanceModule;
}());
CheckAttendanceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(Routes),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["e" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["b" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["d" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__check_attendance_component__["a" /* CheckAttendanceComponent */],
            __WEBPACK_IMPORTED_MODULE_7__check_attendance_student_check_attendance_student_component__["a" /* CheckAttendanceStudentComponent */],
            __WEBPACK_IMPORTED_MODULE_6__check_attendance_teacher_check_attendance_teacher_component__["a" /* CheckAttendanceTeacherComponent */],
        ],
        providers: []
    })
], CheckAttendanceModule);

//# sourceMappingURL=check-attendance.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map