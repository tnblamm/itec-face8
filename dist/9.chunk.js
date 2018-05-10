webpackJsonp([9],{

/***/ "../../../../../src/app/students/student-detail/student-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div *ngIf=\"student_not_found\" class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3 class=\"course_title\">Student not found</h3>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n    <div *ngIf=\"!student_not_found\" class=\"x_panel\">\n        <div class=\"x_content\">\n            <div class=\"col-md-3 col-sm-3 col-xs-12 profile_left\">\n                <img id=\"profilePic\" style=\"height:150px;width:150px;padding-bottom: 5px;\" [src]=\"student.avatar\">\n                <ng-container *ngIf=\"!isEditingStudent\">\n                    <h3>{{editing_name}}</h3>\n                    <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\n                        <li *ngIf=\"student.status == appService.student_status.active.id\" style=\"color: green\">\n                            <i class=\"fa fa-info-circle\"></i> {{appService.student_status.active.title}}\n                        </li>\n                        <li *ngIf=\"student.status == appService.student_status.reserved.id\" style=\"color: orange\">\n                            <i class=\"fa fa-info-circle\"></i> {{appService.student_status.reserved.title}}\n                        </li>\n                        <li *ngIf=\"student.status == appService.student_status.dropped.id\" style=\"color: red\">\n                            <i class=\"fa fa-info-circle\"></i> {{appService.student_status.dropped.title}}\n                        </li>\n                        <li>\n                            <i class=\"fa fa-id-card-o\"></i> {{student.code}}\n                        </li>\n                        <li>\n                            <i class=\"fa fa-group\"></i> {{student.class_name}}\n                        </li>\n                        <li>\n                            <i class=\"fa fa-phone\"></i> {{student.phone}}\n                        </li>\n                        <li>\n                            <i class=\"fa fa-envelope-o\"></i> {{student.email}}\n                        </li>\n                    </ul>\n                    <button class=\"btn btn-primary\" (click)=\"onEditStudent()\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                </ng-container>\n                <ng-container *ngIf=\"isEditingStudent\">\n                    <h3><input class=\"form-control\" type=\"text\" name=\"editing_name\" [(ngModel)] = \"editing_name\"></h3>\n                    <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\n                        <li>\n                            <i class=\"fa fa-info-circle\"></i>\n                            <select class=\"form-control\" [(ngModel)]=\"editing_status\">\n                                <option [value]=\"appService.student_status.active.id\">{{appService.student_status.active.title}}</option>\n                                <option [value]=\"appService.student_status.reserved.id\">{{appService.student_status.reserved.title}}</option>\n                                <option [value]=\"appService.student_status.dropped.id\">{{appService.student_status.dropped.title}}</option>\n                            </select>\n                        </li>\n                        <li>\n                            <i class=\"fa fa-id-card-o\"></i> {{student.code}}\n                        </li>\n                        <li>\n                            <i class=\"fa fa-group\"></i> {{student.class_name}}\n                        </li>\n                        <li>\n                            <i class=\"fa fa-phone\"></i>\n                            <input class=\"form-control\" type=\"text\" name=\"editing_phone\" [(ngModel)]=\"editing_phone\">\n                        </li>\n                        <li>\n                            <i class=\"fa fa-envelope-o\"></i>\n                            <input class=\"form-control\" type=\"text\" name=\"editing_mail\" [(ngModel)]=\"editing_mail\">\n                        </li>\n                    </ul>\n                    <button class=\"btn btn-default\" (click)=\"onCancelEditStudent()\">Cancel</button>\n                    <button class=\"btn btn-success\" (click)=\"onSaveEditStudent()\">Save</button>\n                </ng-container>\n                <br />\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-xs-12\">\n                <tabset>\n                    <tab heading='Current Courses'>\n                        <table class=\"data table table-striped text-center\">\n                            <thead>\n                                <tr>\n                                    <th>Course</th>\n                                    <th>Lecturers</th>\n                                    <th>No. Absences</th>\n                                    <th>Attendance Status</th>\n                                    <!-- <th>Enrollment Status</th> -->\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let course of current_courses\">\n                                    <td><a routerLink=\"/courses/{{course.id}}\" routerLinkActive=\"active\"><strong>{{course.code}} - {{course.name}}</strong></a></td>\n                                    <td>{{course.lecturers}}</td>\n                                    <td>{{course.absence_count}}</td>\n                                    <td *ngIf=\"course.attendance_status == appService.attendance_status.normal\"><button class=\"btn btn-primary\" (click)=\"onChangeAttendanceStatus(course.id,appService.attendance_status.exemption)\">Normal</button></td>\n                                    <td *ngIf=\"course.attendance_status == appService.attendance_status.exemption\"><button class=\"btn btn-warning\" (click)=\"onChangeAttendanceStatus(course.id,appService.attendance_status.normal)\">Exemption</button></td>\n                                    <!-- <td *ngIf=\"course.enrollment_status == appService.enrollment_status.compulsory\">Compulsory</td>\n                                    <td *ngIf=\"course.enrollment_status == appService.enrollment_status.elective\">Elective</td> -->\n                                </tr>\n                            </tbody>\n                        </table>\n                    </tab>\n                    <tab heading='Absence Requests'>\n                        <table class=\"data table table-striped text-center\">\n                            <thead>\n                                <tr>\n                                    <th>Reason</th>\n                                    <th>Start Date</th>\n                                    <th>End Date</th>\n                                    <th>Status</th>\n                                    <th>Created At</th>\n                                    <th>Accepted/Rejected At</th>\n                                    <th>Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let request of absence_requests\">\n                                    <td>{{request.reason}}</td>\n                                    <td>{{request.start_date | date: 'dd/MM/yyyy'}}</td>\n                                    <td>{{request.end_date | date: 'dd/MM/yyyy'}}</td>\n                                    <td *ngIf=\"request.status == appService.absence_request_status.new.id\" style=\"color: blue\">{{appService.absence_request_status.new.title}}</td>\n                                    <td *ngIf=\"request.status == appService.absence_request_status.accepted.id\" style=\"color: green\">{{appService.absence_request_status.accepted.title}}</td>\n                                    <td *ngIf=\"request.status == appService.absence_request_status.rejected.id\" style=\"color: red\">{{appService.absence_request_status.rejected.title}}</td>\n                                    <td>{{request.created_at | date: 'short'}}</td>\n                                    <td *ngIf=\"request.status == appService.absence_request_status.new.id\"></td>\n                                    <td *ngIf=\"request.status != appService.absence_request_status.new.id\">{{request.updated_at | date: 'short'}}</td>\n                                    <td *ngIf=\"request.status == appService.absence_request_status.new.id\"><button class=\"btn btn-success btn-sm\" (click)=\"onAcceptRequest(request.id)\">Accept</button><button class=\"btn btn-danger btn-sm\" (click)=\"onRejectRequest(request.id)\">Reject</button></td>\n                                    <td *ngIf=\"request.status != appService.absence_request_status.new.id\"><button class=\"btn btn-warning btn-sm\" (click)=\"onUndoRequest(request.id)\">Undo</button></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </tab>\n                </tabset>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal -->\n<result-message-modal [modal_title]=\"apiResult\" [modal_message]=\"apiResultMessage\"></result-message-modal>\n<div class=\"modal fade\" id=\"confirmModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">{{confirm_modal_title}}</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmAction()\" data-dismiss=\"modal\">Confirm</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"confirmChangeAttendanceStatusModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">{{confirm_modal_title}}</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div *ngIf=\"current_attendance_status == appService.attendance_status.exemption\">\n                        <label>*Only do this when you received permission from the lecturer</label>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmChangeAttendanceStatus()\" data-dismiss=\"modal\">Confirm</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/students/student-detail/student-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentDetailComponent = (function () {
    function StudentDetailComponent(route, router, studentService, authService, appService, absenceRequestService) {
        this.route = route;
        this.router = router;
        this.studentService = studentService;
        this.authService = authService;
        this.appService = appService;
        this.absenceRequestService = absenceRequestService;
        this.student_not_found = false;
        this.isEditingStudent = false;
        this.student = {
            id: 0,
            first_name: '',
            last_name: '',
            class_name: '',
            class_id: 0,
            status: 0,
            email: '',
            phone: '',
            avatar: '',
            code: ''
        };
        this.current_courses = [];
        this.current_course_id = 0;
        this.absence_requests = [];
        this.current_request_id = 0;
        this.current_request_status = 0;
        this.confirm_modal_title = '';
        this.current_attendance_status = 0;
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { _this.student_id = params['id']; });
        //get Student from database
        this.getStudentrDetail();
    };
    StudentDetailComponent.prototype.getStudentrDetail = function () {
        var _this = this;
        this.studentService.getStudentrDetail(this.student_id).subscribe(function (result) {
            _this.student = result.student;
            if (_this.student == undefined || _this.student == null) {
                _this.student_not_found = true;
                return;
            }
            _this.current_courses = result.current_courses;
            _this.editing_name = _this.student.first_name + ' ' + _this.student.last_name;
            _this.absenceRequestService.getRequestsByStudent(_this.student_id, -1, '')
                .subscribe(function (result) {
                _this.absence_requests = result.absence_requests;
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get absence requests by student", 'error'); });
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't student detail", 'error'); });
    };
    StudentDetailComponent.prototype.onCourseClick = function (id) {
        this.router.navigate(['/courses/', id]);
    };
    StudentDetailComponent.prototype.onAcceptRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Accept this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.accepted.id;
    };
    StudentDetailComponent.prototype.onUndoRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Undo this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.new.id;
    };
    StudentDetailComponent.prototype.onRejectRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Reject this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.rejected.id;
    };
    StudentDetailComponent.prototype.confirmAction = function () {
        var _this = this;
        this.absenceRequestService.changeRequestStatus(this.current_request_id, this.current_request_status)
            .subscribe(function (result) {
            _this.absenceRequestService.getRequestsByStudent(_this.student_id, -1, '')
                .subscribe(function (result) {
                _this.absence_requests = result.absence_requests;
                jQuery('#confirmModal').modal("hide");
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get absence_requests by student", 'error'); });
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't change request status", 'error'); });
    };
    StudentDetailComponent.prototype.onEditStudent = function () {
        this.editing_name = this.student.first_name + ' ' + this.student.last_name;
        this.editing_mail = this.student.email;
        this.editing_phone = this.student.phone;
        this.editing_status = this.student.status;
        this.isEditingStudent = true;
    };
    StudentDetailComponent.prototype.onCancelEditStudent = function () {
        this.isEditingStudent = false;
    };
    StudentDetailComponent.prototype.onSaveEditStudent = function () {
        var _this = this;
        this.studentService.updateStudent(this.student.id, this.editing_name, this.editing_mail, this.editing_phone, this.student.avatar, this.editing_status)
            .subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (result.result == 'success') {
                _this.isEditingStudent = false;
                _this.student.email = _this.editing_mail;
                _this.student.phone = _this.editing_phone;
                _this.student.status = _this.editing_status;
            }
            //this.resultMessageModal.onOpenModal();
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't update profile", 'error'); });
    };
    StudentDetailComponent.prototype.onChangeAttendanceStatus = function (course_id, status) {
        jQuery('#confirmChangeAttendanceStatusModal').modal("show");
        if (this.appService.attendance_status.exemption == status) {
            this.confirm_modal_title = 'Change attendance status to Exemption?';
        }
        else {
            this.confirm_modal_title = 'Change attendance status to Normal?';
        }
        this.current_attendance_status = status;
        this.current_course_id = course_id;
    };
    StudentDetailComponent.prototype.confirmChangeAttendanceStatus = function () {
        var _this = this;
        this.studentService.changeAttendanceStatus(this.student_id, this.current_course_id, this.student.class_id, this.current_attendance_status).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (result.result == 'success') {
                jQuery('#confirmChangeAttendanceStatusModal').modal("hide");
                _this.getStudentrDetail();
            }
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't change attendance status", 'error'); });
    };
    return StudentDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["z" /* ResultMessageModalComponent */]) === "function" && _a || Object)
], StudentDetailComponent.prototype, "resultMessageModal", void 0);
StudentDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'students-detail',
        template: __webpack_require__("../../../../../src/app/students/student-detail/student-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["o" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["o" /* StudentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["x" /* AbsenceRequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["x" /* AbsenceRequestService */]) === "function" && _g || Object])
], StudentDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=student-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>All Students</h3>\n            <div class=\"pull-right navbar-btn\">\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onOpenAddStudent()\"> <i class=\"fa fa-plus\"></i> Add</button>\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onImportStudent()\"> <i class=\"fa fa-upload\"></i> Import</button>\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onExportStudent()\"> <i class=\"fa fa-download\"></i> Export</button>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-4\">\n                    <input placeholder=\"Search\" class=\"form-control\" [(ngModel)]=\"searchText\" (ngModelChange)=\"getCurrentList()\" />\n                </div>\n                <div class=\"col-xs-12 col-sm-6\">\n                    <div class=\"col-xs-5\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectedProgram\" (ngModelChange)=\"onChangeProgram()\">\n                            <option *ngFor=\"let program of programs\" [value]=\"program.id\">{{program.name}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectedClasses\" (ngModelChange)=\"getCurrentList()\">\n                            <option *ngFor=\"let class of filteredClasses\" [value]=\"class.id\">{{class.name}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-xs-3\">\n                        <select class=\"form-control\" [(ngModel)]=\"selected_status\" (ngModelChange)=\"getCurrentList()\">\n                            <option [value]=\"appService.student_status.active.id\">{{appService.student_status.active.title}}</option>\n                            <option [value]=\"appService.student_status.reserved.id\">{{appService.student_status.reserved.title}}</option>\n                            <option [value]=\"appService.student_status.dropped.id\">{{appService.student_status.dropped.title}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <br>\n            <table id=\"table_test\" class=\"table table-bordered text-center table-hover\">\n                <thead>\n                    <tr>\n                        <th>Code</th>\n                        <th>Name</th>\n                        <th>Class</th>\n                        <th>Phone</th>\n                        <th>Enrolled Courses</th>\n                        <th>Status</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let student of student_list\" (click)='onCellClick(student.id)'>\n                        <td>{{student.code}}</td>\n                        <td>{{student.name}}</td>\n                        <td>{{student.class_name}}</td>\n                        <td>{{student.phone}}</td>\n                        <td>{{student.enroll_course}}</td>\n                        <td *ngIf=\"student.status == appService.student_status.active.id\" style=\"color: green\">{{appService.student_status.active.title}}</td>\n                        <td *ngIf=\"student.status == appService.student_status.reserved.id\" style=\"color: orange\">{{appService.student_status.reserved.title}}</td>\n                        <td *ngIf=\"student.status == appService.student_status.dropped.id\" style=\"color: red\">{{appService.student_status.dropped.title}}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"currentPage\" (pageChanged)=\"onPageChanged($event)\" class=\"pull-right no_margin\"></pagination>\n            <div class=\"form-group\">\n                <select [(ngModel)]=\"itemsPerPage\" (ngModelChange)=\"getCurrentList()\">\n                    <option>10</option>\n                    <option>30</option>\n                    <option>50</option>\n                </select>\n                <span>Items/page</span>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addStudentModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-lg vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Add student</h4>\n                </div>\n                <form class=\"form-horizontal form-label-left\">\n                    <div class=\"modal-body row\">\n                        <div class=\"col-xs-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Program* </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <select class=\"form-control\" name=\"program\" [(ngModel)]=\"newProgram\" (ngModelChange)=\"onChangeNewProgram()\">\n                                        <option *ngFor=\"let program of new_programs\" [value]=\"program.id\">{{program.name}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Class* </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <select class=\"form-control\" name=\"class\" [(ngModel)]=\"newClass\">\n                                        <option *ngFor=\"let class of new_classes\" [value]=\"class.id\">{{class.name}}</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Code*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"newCode\" (ngModelChange)=\"onChangeStudentCode()\" name=\"first_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Email</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" readonly [(ngModel)]=\"newEmail\" name=\"email\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">First Name*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"newFirstName\" name=\"first_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Last Name*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"newLastName\" name=\"last_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Phone </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"phone\" [(ngModel)]=\"newPhone\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Note </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"note\" [(ngModel)]=\"newNote\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelAddStudent()\">Cancel</button>\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"onAddStudent()\">Add</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"progressModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">\n                        <h2>Loading</h2>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width:100%\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<import-modal [import_type]=\"appService.import_export_type.student\" [title]=\"'Import Student'\" [note] = \"'*Students class will be based on file name. E.g. 13CTT.xlsx'\" (onClose)=\"onCloseImport($event)\"></import-modal>\n<export-modal [export_type]=\"appService.import_export_type.student\" [title]=\"'Export Student'\" [search_data]=\"export_search_data\"></export-modal>\n'"

/***/ }),

/***/ "../../../../../src/app/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentsComponent = (function () {
    function StudentsComponent(appService, studentService, router) {
        this.appService = appService;
        this.studentService = studentService;
        this.router = router;
        this.sort = 'none'; // ['none', 'asc', 'dsc'];
        this.sort_tag = '';
        this.semesters = [];
        this.programs = [];
        this.classes = [];
        this.selected_status = this.appService.student_status.active.id;
        this.student_list = [];
        this.pageNumber = 1;
        this.limit = 15;
        this.currentPage = 1;
        this.totalItems = 0;
        this.itemsPerPage = 10;
        this.newFirstName = "";
        this.newLastName = "";
        this.newPhone = "";
        this.newEmail = "";
        this.newCode = "";
        this.newClass = 0;
        this.newProgram = 0;
        this.newNote = '';
        this.new_programs = [];
        this.new_classes = [];
        this.export_search_data = {};
    }
    StudentsComponent.prototype.ngOnInit = function () {
        this.getSemesterProgramClass();
    };
    StudentsComponent.prototype.getSemesterProgramClass = function () {
        var _this = this;
        this.appService.getSemesterProgramClass().subscribe(function (results) {
            _this.semesters = results.semesters;
            _this.selectedSemester = _this.semesters.length > 0 ? _this.semesters[_this.semesters.length - 1].id : 0;
            _this.classes = results.classes;
            _this.programs = _this.new_programs = results.programs;
            _this.selectedProgram = _this.programs.length > 0 ? _this.programs[0].id : 0;
            _this.onChangeProgram();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't semester class program", 'error'); });
    };
    StudentsComponent.prototype.getCurrentList = function () {
        var _this = this;
        this.studentService.getListStudents(this.selectedProgram, this.selectedClasses, this.selected_status, this.searchText, this.pageNumber, this.itemsPerPage)
            .subscribe(function (result) {
            _this.student_list = result.student_list;
            _this.totalItems = result.total_items;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't student list", 'error'); });
    };
    StudentsComponent.prototype.onChangeProgram = function () {
        this.filteredClasses = [{ id: 0, name: 'All Classes' }];
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].program_id == this.selectedProgram) {
                this.filteredClasses.push(this.classes[i]);
            }
        }
        this.selectedClasses = this.filteredClasses[0].id;
        this.getCurrentList();
    };
    StudentsComponent.prototype.onPageChanged = function (event) {
        this.pageNumber = event.page;
        this.getCurrentList();
    };
    StudentsComponent.prototype.onCellClick = function (id) {
        this.router.navigate(['/students/', id]);
    };
    StudentsComponent.prototype.onChangeStudentCode = function () {
        this.newEmail = this.newCode + "@student.hcmus.edu.vn";
    };
    StudentsComponent.prototype.onOpenAddStudent = function () {
        this.newProgram = this.programs.length > 0 ? this.new_programs[this.new_programs.length - 1].id : 0;
        this.newEmail = "@student.hcmus.edu.vn";
        this.onChangeNewProgram();
        jQuery("#addStudentModal").modal("show");
    };
    StudentsComponent.prototype.onCancelAddStudent = function () {
        this.newFirstName = this.newLastName = this.newPhone = this.newEmail = this.newCode = this.newNote = '';
        this.newClass = this.newProgram = 0;
        jQuery("#addStudentModal").modal("hide");
    };
    StudentsComponent.prototype.onAddStudent = function () {
        var _this = this;
        this.studentService.addStudent(this.newProgram, this.newClass, this.newCode, this.newFirstName, this.newLastName, this.newEmail, this.newPhone, this.newNote)
            .subscribe(function (list) {
            _this.apiResult = list.result;
            _this.apiResultMessage = list.message;
            if (_this.apiResult == 'success') {
                jQuery("#addStudentModal").modal("hide");
                _this.newFirstName = _this.newLastName = _this.newPhone = _this.newEmail = _this.newCode = _this.newNote = '';
                _this.newClass = _this.newProgram = 0;
                _this.getCurrentList();
            }
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (err) { _this.appService.showPNotify('failure', "Server Error! Can't add student", 'error'); });
    };
    StudentsComponent.prototype.onChangeNewProgram = function () {
        this.new_classes = [];
        for (var i = 0; i < this.classes.length; i++) {
            if (this.classes[i].program_id == this.newProgram) {
                this.new_classes.push(this.classes[i]);
            }
        }
        this.newClass = this.new_classes[0].id;
    };
    StudentsComponent.prototype.onImportStudent = function () {
        this.importModal.onOpenModal();
    };
    StudentsComponent.prototype.onCloseImport = function (event) {
        this.getSemesterProgramClass();
    };
    StudentsComponent.prototype.onExportStudent = function () {
        this.export_search_data = {};
        this.export_search_data['search_text'] = this.searchText;
        this.export_search_data['program_id'] = this.selectedProgram;
        this.export_search_data['class_id'] = this.selectedClasses;
        this.export_search_data['status'] = this.selected_status;
        this.exportModal.onOpenModal();
    };
    return StudentsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["y" /* ImportModalComponent */]) === "function" && _a || Object)
], StudentsComponent.prototype, "importModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["l" /* ExportModalComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["l" /* ExportModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["l" /* ExportModalComponent */]) === "function" && _b || Object)
], StudentsComponent.prototype, "exportModal", void 0);
StudentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-students',
        template: __webpack_require__("../../../../../src/app/students/students.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["o" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["o" /* StudentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], StudentsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ "../../../../../src/app/students/students.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__students_component__ = __webpack_require__("../../../../../src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_detail_student_detail_component__ = __webpack_require__("../../../../../src/app/students/student-detail/student-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsModule", function() { return StudentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var studentsRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__students_component__["a" /* StudentsComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__student_detail_student_detail_component__["a" /* StudentDetailComponent */] }
];
var StudentsModule = (function () {
    function StudentsModule() {
    }
    return StudentsModule;
}());
StudentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(studentsRoutes),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["d" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__students_component__["a" /* StudentsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__student_detail_student_detail_component__["a" /* StudentDetailComponent */]
        ],
        providers: []
    })
], StudentsModule);

//# sourceMappingURL=students.module.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map