webpackJsonp([7],{

/***/ "../../../../../src/app/absence-requests/absence-requests-staff/absence-requests-staff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n        <div class=\"x_panel\">\n            <div class=\"x_title\">\n                <h3>Absence Requests<small> (Only accept when you received their letter)</small></h3>\n                <div class=\"clearfix\"></div>\n            </div>\n            <div class=\"x_content\">\n                <div class=\"row\">\n                    <div class=\"col-xs-4\">\n                        <input placeholder=\"Search Code/Name\" class=\"form-control\" [(ngModel)]=\"search_text\" (ngModelChange)=\"onSearchChange()\" />\n                    </div>\n                    <div class=\"col-xs-3\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectedStatus\" (ngModelChange)=\"onChangeStatus()\">\n                            <option *ngFor=\"let status of absence_request_status\" [value]=\"status.id\">{{status.title}}</option>\n                        </select>\n                    </div>\n                </div>\n                <br/>\n                <table class=\"table table-bordered text-center table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Code</th>\n                            <th>Name</th>\n                            <th>Reason</th>\n                            <th>Start Date</th>\n                            <th>End Date</th>\n                            <th>Submited At</th>\n                            <th>Accepted/Rejected At</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let request of absence_requests\">\n                            <td>{{request.code}}</td>\n                            <td>{{request.name}}</td>\n                            <td>{{request.reason}}</td>\n                            <td>{{request.start_date | date: 'dd/MM/yyyy'}}</td>\n                            <td>{{request.end_date | date: 'dd/MM/yyyy'}}</td>\n                            <td>{{request.created_at | date: 'short'}}</td>\n                            <td *ngIf=\"request.status == appService.absence_request_status.new.id\"></td>\n                            <td *ngIf=\"request.status != appService.absence_request_status.new.id\">{{request.updated_at | date: 'short'}}</td>\n                            <td *ngIf=\"request.status == appService.absence_request_status.new.id\"><button class=\"btn btn-success btn-sm\" (click)=\"onAcceptRequest(request.id)\">Accept</button><button class=\"btn btn-danger btn-sm\" (click)=\"onRejectRequest(request.id)\">Reject</button>\n                            </td>\n                            <td *ngIf=\"request.status != appService.absence_request_status.new.id\"><button class=\"btn btn-warning btn-sm\" (click)=\"onUndoRequest(request.id)\">Undo</button></td>\n                        </tr>\n                    </tbody>\n                </table>\n                <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"currentPage\" (pageChanged)=\"onPageChanged($event)\" class=\"pull-right no_margin\"></pagination>\n                <div class=\"form-group\">\n                    <select [(ngModel)]=\"itemsPerPage\" (ngModelChange)=\"getAbsenceRequests()\">\n                        <option>10</option>\n                        <option>30</option>\n                        <option>50</option>\n                    </select>\n                    <span>Items/page</span>\n                </div>\n            </div>\n        </div>\n</div>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"confirmModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">{{confirm_modal_title}}</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmAction()\" data-dismiss=\"modal\">Confirm</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/absence-requests/absence-requests-staff/absence-requests-staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsenceRequestsStaffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbsenceRequestsStaffComponent = (function () {
    function AbsenceRequestsStaffComponent(router, absenceRequestService, appService) {
        this.router = router;
        this.absenceRequestService = absenceRequestService;
        this.appService = appService;
        this.pageNumber = 1;
        this.limit = 15;
        this.currentPage = 1;
        this.totalItems = 0;
        this.itemsPerPage = 10;
        this.absence_requests = [];
        this.absence_request_status = [];
        this.search_text = '';
        this.current_request_id = 0;
        this.current_request_status = 0;
        this.confirm_modal_title = '';
    }
    AbsenceRequestsStaffComponent.prototype.ngOnInit = function () {
        this.getAbsenceRequests();
        this.absence_request_status.push(this.appService.absence_request_status.new);
        this.absence_request_status.push(this.appService.absence_request_status.accepted);
        this.absence_request_status.push(this.appService.absence_request_status.rejected);
        this.selectedStatus = this.appService.absence_request_status.new.id;
    };
    AbsenceRequestsStaffComponent.prototype.getAbsenceRequests = function () {
        var _this = this;
        this.absenceRequestService.getAbsenceRequests(this.selectedStatus, this.search_text).subscribe(function (result) {
            _this.absence_requests = result.absence_requests;
            _this.totalItems = result.total_items;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get absence_requests", 'error'); });
    };
    AbsenceRequestsStaffComponent.prototype.onChangeStatus = function () {
        this.getAbsenceRequests();
    };
    AbsenceRequestsStaffComponent.prototype.onAcceptRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Accept this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.accepted.id;
    };
    AbsenceRequestsStaffComponent.prototype.onUndoRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Undo this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.new.id;
    };
    AbsenceRequestsStaffComponent.prototype.onRejectRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Reject this request ?';
        this.current_request_id = id;
        this.current_request_status = this.appService.absence_request_status.rejected.id;
    };
    AbsenceRequestsStaffComponent.prototype.confirmAction = function () {
        var _this = this;
        this.absenceRequestService.changeRequestStatus(this.current_request_id, this.current_request_status)
            .subscribe(function (result) {
            _this.absenceRequestService.getAbsenceRequests(_this.selectedStatus, _this.search_text)
                .subscribe(function (result) {
                _this.absence_requests = result.absence_requests;
                jQuery('#confirmModal').modal("hide");
            }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get requests", 'error'); });
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't change request status", 'error'); });
    };
    AbsenceRequestsStaffComponent.prototype.onSearchChange = function () {
        if (this.search_text.length > 3 || this.search_text.length == 0) {
            this.getAbsenceRequests();
        }
    };
    AbsenceRequestsStaffComponent.prototype.onPageChanged = function (event) {
        this.pageNumber = event.page;
        this.getAbsenceRequests();
    };
    return AbsenceRequestsStaffComponent;
}());
AbsenceRequestsStaffComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-absence-requests-staff',
        template: __webpack_require__("../../../../../src/app/absence-requests/absence-requests-staff/absence-requests-staff.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["x" /* AbsenceRequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["x" /* AbsenceRequestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _c || Object])
], AbsenceRequestsStaffComponent);

var _a, _b, _c;
//# sourceMappingURL=absence-requests-staff.component.js.map

/***/ }),

/***/ "../../../../../src/app/absence-requests/absence-requests-student/absence-requests-student.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Absence Requests</h3>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <div class=\"col-xs-4\">\n                    <input placeholder=\"Search Code/Name\" class=\"form-control\" [(ngModel)]=\"search_text\" (ngModelChange)=\"onSearchChange()\" />\n                </div>\n                <div class=\"col-xs-3\">\n                    <select class=\"form-control\" [(ngModel)]=\"selectedStatus\" (ngModelChange)=\"onChangeStatus()\">\n                        <option *ngFor=\"let status of absence_request_status\" [value]=\"status.id\">{{status.title}}</option>\n                    </select>\n                </div>\n                <button class=\"btn btn-primary\" (click)=\"onCreateRequest()\"><i class=\"fa fa-plus\"></i> Send request</button>\n            </div>\n            <br/>\n            <table class=\"table table-bordered text-center table-hover\">\n                <thead>\n                    <tr>\n                        <th>Reason</th>\n                        <th>Start Date</th>\n                        <th>End Date</th>\n                        <th>Submited At</th>\n                        <th>Accepted/Rejected At</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let request of absence_requests\">\n                        <td>{{request.reason}}</td>\n                        <td>{{request.start_date | date: 'dd/MM/yyyy'}}</td>\n                        <td>{{request.end_date | date: 'dd/MM/yyyy'}}</td>\n                        <td>{{request.created_at | date: 'short'}}</td>\n                        <td *ngIf=\"request.status == appService.absence_request_status.new.id\"></td>\n                        <td *ngIf=\"request.status != appService.absence_request_status.new.id\">{{request.updated_at | date: 'short'}}</td>\n                        <td *ngIf=\"request.status == appService.absence_request_status.new.id\"><button class=\"btn btn-danger btn-sm\" (click)=\"onCancelRequest(request.id)\">Cancel</button></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n<!-- Modal -->\n<create-absence-request-modal (onConfirmed)=\"onRequestCreated($event)\"></create-absence-request-modal>\n<div class=\"modal fade\" id=\"confirmModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">{{confirm_modal_title}}</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmAction()\" data-dismiss=\"modal\">Send</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/absence-requests/absence-requests-student/absence-requests-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsenceRequestsStudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbsenceRequestsStudentComponent = (function () {
    function AbsenceRequestsStudentComponent(router, absenceRequestService, appService, authService) {
        this.router = router;
        this.absenceRequestService = absenceRequestService;
        this.appService = appService;
        this.authService = authService;
        this.absence_requests = [];
        this.absence_request_status = [];
        this.search_text = '';
        this.current_request_id = 0;
        this.current_request_status = 0;
        this.confirm_modal_title = '';
    }
    AbsenceRequestsStudentComponent.prototype.ngOnInit = function () {
        this.getAbsenceRequests();
        this.absence_request_status.push(this.appService.absence_request_status.new);
        this.absence_request_status.push(this.appService.absence_request_status.accepted);
        this.absence_request_status.push(this.appService.absence_request_status.rejected);
        this.selectedStatus = this.appService.absence_request_status.new.id;
    };
    AbsenceRequestsStudentComponent.prototype.getAbsenceRequests = function () {
        var _this = this;
        this.absenceRequestService.getRequestsByStudent(this.authService.current_user.id, this.selectedStatus, this.search_text).subscribe(function (result) {
            _this.absence_requests = result.absence_requests;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get absence requests", 'error'); });
    };
    AbsenceRequestsStudentComponent.prototype.onChangeStatus = function () {
        this.getAbsenceRequests();
    };
    AbsenceRequestsStudentComponent.prototype.onCancelRequest = function (id) {
        jQuery('#confirmModal').modal("show");
        this.confirm_modal_title = 'Cancel this request ?';
        this.current_request_id = id;
    };
    AbsenceRequestsStudentComponent.prototype.onCreateRequest = function () {
        this.createAbsenceRequestModal.onOpenModal();
    };
    AbsenceRequestsStudentComponent.prototype.onRequestCreated = function (result) {
        if (result == 'success') {
            this.getAbsenceRequests();
        }
    };
    AbsenceRequestsStudentComponent.prototype.confirmAction = function () {
        var _this = this;
        this.absenceRequestService.cancelAbsenceRequests(this.current_request_id)
            .subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
            if (_this.apiResult == 'success') {
                jQuery('#confirmModal').modal("hide");
                _this.getAbsenceRequests();
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't cancel request", 'error'); });
    };
    AbsenceRequestsStudentComponent.prototype.onSearchChange = function () {
        if (this.search_text.length > 3 || this.search_text.length == 0) {
            this.getAbsenceRequests();
        }
    };
    return AbsenceRequestsStudentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["w" /* CreateAbsenceRequestModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["w" /* CreateAbsenceRequestModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["w" /* CreateAbsenceRequestModalComponent */]) === "function" && _a || Object)
], AbsenceRequestsStudentComponent.prototype, "createAbsenceRequestModal", void 0);
AbsenceRequestsStudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-absence-requests-student',
        template: __webpack_require__("../../../../../src/app/absence-requests/absence-requests-student/absence-requests-student.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["x" /* AbsenceRequestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["x" /* AbsenceRequestService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */]) === "function" && _e || Object])
], AbsenceRequestsStudentComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=absence-requests-student.component.js.map

/***/ }),

/***/ "../../../../../src/app/absence-requests/absence-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<app-absence-requests-staff *ngIf=\"authService.current_user.role_id == appService.userType.staff || authService.current_user.role_id == appService.userType.admin\"></app-absence-requests-staff>\n<app-absence-requests-student *ngIf=\"authService.current_user.role_id == appService.userType.student\"></app-absence-requests-student>"

/***/ }),

/***/ "../../../../../src/app/absence-requests/absence-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbsenceRequestsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbsenceRequestsComponent = (function () {
    function AbsenceRequestsComponent(authService, appService) {
        this.authService = authService;
        this.appService = appService;
    }
    AbsenceRequestsComponent.prototype.ngOnInit = function () {
    };
    return AbsenceRequestsComponent;
}());
AbsenceRequestsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-absence-requests',
        template: __webpack_require__("../../../../../src/app/absence-requests/absence-requests.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */]) === "function" && _b || Object])
], AbsenceRequestsComponent);

var _a, _b;
//# sourceMappingURL=absence-requests.component.js.map

/***/ }),

/***/ "../../../../../src/app/absence-requests/absence-requests.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__absence_requests_component__ = __webpack_require__("../../../../../src/app/absence-requests/absence-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__absence_requests_staff_absence_requests_staff_component__ = __webpack_require__("../../../../../src/app/absence-requests/absence-requests-staff/absence-requests-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__absence_requests_student_absence_requests_student_component__ = __webpack_require__("../../../../../src/app/absence-requests/absence-requests-student/absence-requests-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbsenceRequestsModule", function() { return AbsenceRequestsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AbsenceRequestsRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__absence_requests_component__["a" /* AbsenceRequestsComponent */] },
];
var AbsenceRequestsModule = (function () {
    function AbsenceRequestsModule() {
    }
    return AbsenceRequestsModule;
}());
AbsenceRequestsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(AbsenceRequestsRoutes),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["e" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["c" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["f" /* DatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["d" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__absence_requests_component__["a" /* AbsenceRequestsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__absence_requests_staff_absence_requests_staff_component__["a" /* AbsenceRequestsStaffComponent */],
            __WEBPACK_IMPORTED_MODULE_6__absence_requests_student_absence_requests_student_component__["a" /* AbsenceRequestsStudentComponent */]
        ],
        providers: []
    })
], AbsenceRequestsModule);

//# sourceMappingURL=absence-requests.module.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map