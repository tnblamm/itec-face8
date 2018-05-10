webpackJsonp([2],{

/***/ "../../../../../src/app/dashboard/dashboard-admin/dashboard-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_content\">\n            <div class=\"col-sm-2\" style=\"padding: 0;text-align: center;\">\n                <img id=\"profilePic\" style=\"height:150px;width:150px;padding-bottom: 5px;\">\n                <ng-container *ngIf=\"isEditingProfile\">\n                    <label class=\"btn btn-primary\">\n                        Change Picture\n                        <input type=\"file\" style=\"display:none;\" name=\"uploads\" (change)=\"onEditProfilePic($event)\">\n                    </label>  \n                </ng-container>    \n            </div>\n            <div class=\"col-md-4 col-sm-4 col-xs-12 profile_left\">\n                <ng-container *ngIf=\"!isEditingProfile\">\n                    <h3>{{editing_name}}</h3>\n                    <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\n                        <li>\n                            <i class=\"fa fa-phone\"></i> {{authService.current_user.phone}}\n                        </li>\n                        <li>\n                            <i class=\"fa fa-envelope-o\"></i> {{authService.current_user.email}}\n                        </li>\n                    </ul>\n                    <button class=\"btn btn-primary\" (click)=\"onEditProfile()\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                </ng-container>\n                <ng-container *ngIf=\"isEditingProfile\" (keydown)=\"keyDownFunction($event)\">\n                    <h3><input class=\"form-control\" type=\"text\" name=\"editing_name\" [(ngModel)] = \"editing_name\"></h3>\n                    <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\n                        <li>\n                            <i class=\"fa fa-phone\"></i>\n                            <input class=\"form-control\" type=\"text\" name=\"editing_phone\" [(ngModel)]=\"editing_phone\">\n                        </li>\n                        <li>\n                            <i class=\"fa fa-envelope-o\"></i>\n                            <input class=\"form-control\" type=\"text\" name=\"editing_mail\" [(ngModel)]=\"editing_mail\">\n                        </li>\n                    </ul>\n                    <button class=\"btn btn-default\" (click)=\"onCancelEditProfile()\">Cancel</button>\n                    <button class=\"btn btn-success\" (click)=\"onSaveEditProfile()\">Save</button>\n                </ng-container>\n            </div>\n            <div class=\"col-sm-6 col-xs-12\">\n                <div class=\"pad-top\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onChangePassword()\">\n                        <i class=\"fa fa-cogs fa-3x\"></i>\n                        <h5>Change Password</h5>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Staff list</h3>\n            <div class=\"navbar-btn pull-right\">\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onAddStaff()\"> <i class=\"fa fa-plus\"></i> Add</button>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <table class=\"table table-bordered text-center\">\n                    <thead>\n                        <tr>\n                            <th>ID</th>\n                            <th>First Name</th>\n                            <th>Last Name</th>\n                            <th>Email</th>\n                            <th>Phone</th>\n                            <th>Remove</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let staff of staffs;let i = index\">\n                            <td>{{i+1}}</td>\n                            <td>{{staff.first_name}}</td>\n                            <td>{{staff.last_name}}</td>\n                            <td>{{staff.email}}</td>\n                            <td>{{staff.phone}}</td>\n                            <td><button class=\"btn btn-danger\" (click)=\"onRemoveStaff(staff.email)\">Remove</button></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"progressModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">\n                        <h2>Loading</h2>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width:100%\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"addStaffModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Add staff</h4>\n                </div>\n                <form class=\"form-horizontal form-label-left\">\n                    <div class=\"modal-body row\">\n                        <div class=\"col-xs-12\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">First Name*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"newFirstName\" name=\"first_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Last Name*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"newLastName\" name=\"last_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Phone* </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input class=\"form-control col-md-7 col-xs-12\" type=\"text\" name=\"phone\" [(ngModel)]=\"newPhone\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\"> Email* </label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"newEmail\" name=\"email\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelAddStaff()\">Cancel</button>\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"addStaff()\">Add</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-admin/dashboard-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardAdminComponent = (function () {
    function DashboardAdminComponent(appService, excelService, authService, teacherService, router, element) {
        this.appService = appService;
        this.excelService = excelService;
        this.authService = authService;
        this.teacherService = teacherService;
        this.router = router;
        this.element = element;
        this.i = 0;
        this.staffs = [];
        this.isEditingProfile = false;
        this.editing_name = '';
        this.editing_phone = '';
        this.editing_mail = '';
    }
    DashboardAdminComponent.prototype.onEditProfilePic = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('#profilePic');
        reader.onload = function (e) {
            var src = e.target['result'];
            image.src = src;
        };
        this.uploaded_avatar = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
    };
    DashboardAdminComponent.prototype.onEditProfile = function () {
        this.isEditingProfile = true;
        this.editing_name = this.authService.current_user.first_name + ' ' + this.authService.current_user.last_name;
        this.editing_mail = this.authService.current_user.email;
        this.editing_phone = this.authService.current_user.phone;
    };
    DashboardAdminComponent.prototype.onCancelEditProfile = function () {
        var image = this.element.nativeElement.querySelector('#profilePic');
        image.src = this.authService.current_user.avatar;
        this.isEditingProfile = false;
    };
    DashboardAdminComponent.prototype.onSaveEditProfile = function () {
        var _this = this;
        jQuery('#progressModal').modal({ backdrop: 'static', keyboard: false });
        if (this.uploaded_avatar != null) {
            this.appService.uploadAvatar(this.uploaded_avatar).subscribe(function (result) {
                var avatar_link = result['data'].link;
                _this.teacherService.updateTeacher(_this.authService.current_user.id, _this.editing_name, _this.editing_mail, _this.editing_phone, avatar_link)
                    .subscribe(function (result) {
                    jQuery('#progressModal').modal('hide');
                    _this.apiResult = result.result;
                    _this.apiResultMessage = result.message;
                    _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
                    if (result.result == 'success') {
                        _this.isEditingProfile = false;
                        _this.authService.current_user.email = _this.editing_mail;
                        _this.authService.current_user.phone = _this.editing_phone;
                        _this.authService.current_user.avatar = avatar_link;
                        _this.authService.saveCurrentUserToLocal();
                        var image = _this.element.nativeElement.querySelector('#topNavPic');
                        image.src = _this.authService.current_user.avatar;
                    }
                }, function (error) {
                    jQuery('#progressModal').modal('hide');
                    _this.appService.showPNotify('failure', "Server Error! Can't edit profile", 'error');
                });
            }, function (error) {
                jQuery('#progressModal').modal('hide');
                _this.appService.showPNotify('failure', "Error! Can't upload new profile picture", 'error');
            });
        }
        else {
            this.teacherService.updateTeacher(this.authService.current_user.id, this.editing_name, this.editing_mail, this.editing_phone, null)
                .subscribe(function (result) {
                jQuery('#progressModal').modal('hide');
                _this.apiResult = result.result;
                _this.apiResultMessage = result.message;
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
                if (result.result == 'success') {
                    _this.isEditingProfile = false;
                    _this.authService.current_user.email = _this.editing_mail;
                    _this.authService.current_user.phone = _this.editing_phone;
                }
            }, function (error) {
                jQuery('#progressModal').modal('hide');
                _this.appService.showPNotify('failure', "Server Error! Can't edit profile", 'error');
            });
        }
    };
    DashboardAdminComponent.prototype.onChangePassword = function () {
        this.router.navigate(['/change-password']);
    };
    DashboardAdminComponent.prototype.ngOnInit = function () {
        this.editing_name = this.authService.current_user.first_name + ' ' + this.authService.current_user.last_name;
        var image = this.element.nativeElement.querySelector('#profilePic');
        image.src = this.authService.current_user.avatar;
        jQuery('#from_to').daterangepicker(null, function (start, end, label) { });
        this.getStaffs();
    };
    DashboardAdminComponent.prototype.getStaffs = function () {
        var _this = this;
        this.appService.getStaffs().subscribe(function (results) {
            _this.staffs = results.staffs;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get staff", 'error'); });
    };
    DashboardAdminComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.onSaveEditProfile();
        }
    };
    DashboardAdminComponent.prototype.onAddStaff = function () {
        jQuery('#addStaffModal').modal('show');
    };
    DashboardAdminComponent.prototype.addStaff = function () {
        var _this = this;
        this.appService.addStaff(this.newEmail, this.newPhone, this.newFirstName, this.newLastName)
            .subscribe(function (result) {
            jQuery('#addStaffModal').modal('hide');
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
            if (result.result == 'success') {
                _this.newEmail = '';
                _this.newPhone = '';
                _this.newFirstName = '';
                _this.newLastName = '';
                _this.getStaffs();
            }
        }, function (error) {
            _this.appService.showPNotify('failure', "Server Error! Can't add staff", 'error');
        });
    };
    DashboardAdminComponent.prototype.onCancelAddStaff = function () {
        jQuery('#addStaffModal').modal('hide');
    };
    DashboardAdminComponent.prototype.onRemoveStaff = function (email) {
        var _this = this;
        this.appService.removeStaff(email)
            .subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
            if (result.result == 'success') {
                _this.getStaffs();
            }
        }, function (error) {
            _this.appService.showPNotify('failure', "Server Error! Can't add staff", 'error');
        });
    };
    return DashboardAdminComponent;
}());
DashboardAdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-admin',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard-admin/dashboard-admin.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["j" /* ExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["j" /* ExcelService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["A" /* TeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["A" /* TeacherService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], DashboardAdminComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dashboard-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-staff/dashboard-staff.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_content\">\n            <div class=\"col-sm-2\" style=\"padding: 0;text-align: center;\">\n                <img id=\"profilePic\" style=\"height:150px;width:150px;padding-bottom: 5px;\">\n                <ng-container *ngIf=\"isEditingProfile\">\n                    <label class=\"btn btn-primary\">\n                        Change Picture\n                        <input type=\"file\" style=\"display:none;\" name=\"uploads\" (change)=\"onEditProfilePic($event)\">\n                    </label>  \n                </ng-container>    \n            </div>\n            <div class=\"col-md-4 col-sm-4 col-xs-12 profile_left\">\n                <ng-container *ngIf=\"!isEditingProfile\">\n                    <h3>{{editing_name}}</h3>\n                    <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\n                        <li>\n                            <i class=\"fa fa-phone\"></i> {{authService.current_user.phone}}\n                        </li>\n                        <li>\n                            <i class=\"fa fa-envelope-o\"></i> {{authService.current_user.email}}\n                        </li>\n                    </ul>\n                    <button class=\"btn btn-primary\" (click)=\"onEditProfile()\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                </ng-container>\n                <ng-container *ngIf=\"isEditingProfile\" (keydown)=\"keyDownFunction($event)\">\n                    <h3><input class=\"form-control\" type=\"text\" name=\"editing_name\" [(ngModel)] = \"editing_name\"></h3>\n                    <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\n                        <li>\n                            <i class=\"fa fa-phone\"></i>\n                            <input class=\"form-control\" type=\"text\" name=\"editing_phone\" [(ngModel)]=\"editing_phone\">\n                        </li>\n                        <li>\n                            <i class=\"fa fa-envelope-o\"></i>\n                            <input class=\"form-control\" type=\"text\" name=\"editing_mail\" [(ngModel)]=\"editing_mail\">\n                        </li>\n                    </ul>\n                    <button class=\"btn btn-default\" (click)=\"onCancelEditProfile()\">Cancel</button>\n                    <button class=\"btn btn-success\" (click)=\"onSaveEditProfile()\">Save</button>\n                </ng-container>\n            </div>\n            <div class=\"col-sm-6 col-xs-12\">\n                <div class=\"pad-top\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onChangePassword()\">\n                        <i class=\"fa fa-cogs fa-3x\"></i>\n                        <h5>Change Password</h5>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"progressModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">\n                        <h2>Loading</h2>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width:100%\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-staff/dashboard-staff.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardStaffComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardStaffComponent = (function () {
    function DashboardStaffComponent(appService, excelService, authService, teacherService, router, element) {
        this.appService = appService;
        this.excelService = excelService;
        this.authService = authService;
        this.teacherService = teacherService;
        this.router = router;
        this.element = element;
        this.i = 0;
        this.isEditingProfile = false;
        this.editing_name = '';
        this.editing_phone = '';
        this.editing_mail = '';
        this.programs = [];
    }
    DashboardStaffComponent.prototype.onEditProfilePic = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('#profilePic');
        reader.onload = function (e) {
            var src = e.target['result'];
            image.src = src;
        };
        this.uploaded_avatar = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
    };
    DashboardStaffComponent.prototype.onEditProfile = function () {
        this.isEditingProfile = true;
        this.editing_name = this.authService.current_user.first_name + ' ' + this.authService.current_user.last_name;
        this.editing_mail = this.authService.current_user.email;
        this.editing_phone = this.authService.current_user.phone;
    };
    DashboardStaffComponent.prototype.onCancelEditProfile = function () {
        var image = this.element.nativeElement.querySelector('#profilePic');
        image.src = this.authService.current_user.avatar;
        this.isEditingProfile = false;
    };
    DashboardStaffComponent.prototype.onSaveEditProfile = function () {
        var _this = this;
        jQuery('#progressModal').modal({ backdrop: 'static', keyboard: false });
        if (this.uploaded_avatar != null) {
            this.appService.uploadAvatar(this.uploaded_avatar).subscribe(function (result) {
                var avatar_link = result['data'].link;
                _this.teacherService.updateTeacher(_this.authService.current_user.id, _this.editing_name, _this.editing_mail, _this.editing_phone, avatar_link)
                    .subscribe(function (result) {
                    jQuery('#progressModal').modal('hide');
                    _this.apiResult = result.result;
                    _this.apiResultMessage = result.message;
                    _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
                    if (result.result == 'success') {
                        _this.isEditingProfile = false;
                        _this.authService.current_user.email = _this.editing_mail;
                        _this.authService.current_user.phone = _this.editing_phone;
                        _this.authService.current_user.avatar = avatar_link;
                        _this.authService.saveCurrentUserToLocal();
                        var image = _this.element.nativeElement.querySelector('#topNavPic');
                        image.src = _this.authService.current_user.avatar;
                    }
                }, function (error) {
                    jQuery('#progressModal').modal('hide');
                    _this.appService.showPNotify('failure', "Server Error! Can't edit profile", 'error');
                });
            }, function (error) {
                jQuery('#progressModal').modal('hide');
                _this.appService.showPNotify('failure', "Error! Can't upload new profile picture", 'error');
            });
        }
        else {
            this.teacherService.updateTeacher(this.authService.current_user.id, this.editing_name, this.editing_mail, this.editing_phone, null)
                .subscribe(function (result) {
                jQuery('#progressModal').modal('hide');
                _this.apiResult = result.result;
                _this.apiResultMessage = result.message;
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
                if (result.result == 'success') {
                    _this.isEditingProfile = false;
                    _this.authService.current_user.email = _this.editing_mail;
                    _this.authService.current_user.phone = _this.editing_phone;
                }
            }, function (error) {
                jQuery('#progressModal').modal('hide');
                _this.appService.showPNotify('failure', "Server Error! Can't edit profile", 'error');
            });
        }
    };
    DashboardStaffComponent.prototype.onChangePassword = function () {
        this.router.navigate(['/change-password']);
    };
    DashboardStaffComponent.prototype.getSemesterProgramClass = function () {
        var _this = this;
        this.appService.getSemesterProgramClass().subscribe(function (results) {
            _this.programs = results.programs;
            _this.new_class_program = _this.programs[_this.programs.length - 1].id;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get semester-program-class", 'error'); });
    };
    DashboardStaffComponent.prototype.ngOnInit = function () {
        this.editing_name = this.authService.current_user.first_name + ' ' + this.authService.current_user.last_name;
        var image = this.element.nativeElement.querySelector('#profilePic');
        image.src = this.authService.current_user.avatar;
        jQuery('#from_to').daterangepicker(null, function (start, end, label) {
        });
    };
    DashboardStaffComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.onSaveEditProfile();
        }
    };
    return DashboardStaffComponent;
}());
DashboardStaffComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-staff',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard-staff/dashboard-staff.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["j" /* ExcelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["j" /* ExcelService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["A" /* TeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["A" /* TeacherService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object])
], DashboardStaffComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dashboard-staff.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-student/dashboard-student.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <div class=\"col-sm-2\" style=\"padding: 0;text-align: center;\">\n                    <img id=\"profilePic\" style=\"height:150px;width:150px;padding-bottom: 5px;\">\n                    <ng-container *ngIf=\"isEditingProfile\">\n                        <label class=\"btn btn-primary\">\n                            Change Picture\n                            <input type=\"file\" style=\"display:none;\" name=\"uploads\" (change)=\"onEditProfilePic($event)\">\n                        </label>  \n                    </ng-container>    \n                </div>\n                <div class=\"col-md-4 col-sm-4 col-xs-12 profile_left\">\n                    <ng-container *ngIf=\"!isEditingProfile\"> \n                        <h3>{{editing_name}}</h3>\n                        <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\n                            <li>\n                                <i class=\"fa fa-phone\"></i> {{authService.current_user.phone}}\n                            </li>\n                            <li>\n                                <i class=\"fa fa-envelope-o\"></i> {{authService.current_user.email}}\n                            </li>\n                        </ul>\n                        <button class=\"btn btn-primary\" (click)=\"onEditProfile()\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                    </ng-container>\n                    <ng-container *ngIf=\"isEditingProfile\" (keydown)=\"keyDownFunction($event)\">\n                        <h3><input class=\"form-control\" type=\"text\" name=\"editing_name\" [(ngModel)] = \"editing_name\"></h3>\n                        <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\n                            <li>\n                                <i class=\"fa fa-phone\"></i>\n                                <input class=\"form-control\" type=\"text\" name=\"editing_phone\" [(ngModel)]=\"editing_phone\">\n                            </li>\n                            <li>\n                                <i class=\"fa fa-envelope-o\"></i> {{authService.current_user.email}}\n                            </li>\n                        </ul>\n                        <button class=\"btn btn-default\" (click)=\"onCancelEditProfile()\">Cancel</button>\n                        <button class=\"btn btn-success\" (click)=\"onSaveEditProfile()\">Save</button>\n                    </ng-container>\n                </div>\n                <div class=\"col-sm-6 col-xs-12\">\n                    <div class=\"row pad-top col-xs-12\">\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onCreateAbsenceRequest()\">\n                            <i class=\"fa fa-envelope fa-3x\"></i>\n                            <h5>Send Absence Req</h5>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSendFeedback()\">\n                            <i class=\"fa fa-comments fa-3x\"></i>\n                            <h5>Send Feedback</h5>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onChangePassword()\">\n                            <i class=\"fa fa-cog fa-3x\"></i>\n                            <h5>Change Password</h5>\n                        </button>\n                    </div>\n                </div> \n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"col-xs-12\" *ngIf=\"opening_attendance_for_student.length > 0\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Courses with Opening Attendance</h3>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <table class=\"table table-bordered text-center\">\n                    <thead>\n                        <tr>\n                            <th>Course</th>\n                            <th>Attendance Status</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let course of opening_attendance_for_student;let i = index\">\n                            <td>{{course.code}} - {{course.name}}</td>\n                            <ng-container *ngIf=\"course.exemption\">\n                                <td class=\"gray_background\" colspan=\"2\" style=\"font-weight: bold;\">Exempted</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"!course.exemption\">\n                                <td *ngIf=\"course.attendance_type == appService.attendance_type.absent\"><label class=\"red_text\">Not checked</label></td>\n                                <td *ngIf=\"course.attendance_type != appService.attendance_type.absent\"><label class=\"green_text\">{{course.checked_by}}</label></td>\n                                <td *ngIf=\"course.attendance_type == appService.attendance_type.absent\"><button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onRequestToBeChecked(course)\">Request to be checked</button></td>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <ng-template #howto>\n                <div>To calculate the absence percentage, You divide the total number of attendances (white-box) for the number of absences (empty white-box) and multiply by 100.</div>\n            </ng-template>\n            <h3>Attendance Progression <small [tooltip]=\"howto\" container=\"body\"><a style=\"text-decoration: underline\">(How to calculate % absences?)</a></small></h3>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <table class=\"table table-bordered text-center\">\n                    <thead>\n                        <tr>\n                            <ng-template #predictedTemplate>\n                                <div>The predicted percentages are based on a specific lecturer. Calculated by all attendances opened and No.courses teached by that lecturer.</div>\n                            </ng-template>\n                            <th>Course</th>\n                            <th>Actual % Absences</th>\n                            <th>Predicted % Absences <i [tooltip]=\"predictedTemplate\" container=\"body\" class=\"fa fa-question-circle\"></i></th>\n                            <th colspan=\"2\">Week 1</th>\n                            <th colspan=\"2\">Week 2</th>\n                            <th colspan=\"2\">Week 3</th>\n                            <th colspan=\"2\">Week 4</th>\n                            <th colspan=\"2\">Week 5</th>\n                            <th colspan=\"2\">Week 6</th>\n                            <th colspan=\"2\">Week 7</th>\n                            <th colspan=\"2\">Week 8</th>\n                            <th colspan=\"2\">Week 9</th>\n                            <th colspan=\"2\">Week 10</th>\n                            <th colspan=\"2\">Week 11</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let course of attendance_list_by_student;let i = index\">\n                            <td>{{course.code}} - {{course.name}}</td>\n                            <ng-container *ngIf=\"course.exemption\">\n                                <td class=\"gray_background\" colspan=\"24\" style=\"font-weight: bold;\">Exempted</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"!course.exemption\">\n                                <td>{{course.absences}}/{{course.attendance_details.length}} ({{(course.absences/course.attendance_details.length) | percent:'2.1-1'}})</td>\n                                <td></td>\n                                <ng-container *ngFor=\"let attendance_detail of course.attendance_details;let j = index\">\n                                    <ng-template #tolTemplate>\n                                        <div>Method : {{attendance_detail.method}}</div>\n                                        <div>Created at : {{attendance_detail.created_at | date:'short'}}</div>\n                                        <div>Checked at : {{attendance_detail.attendance_time | date:'short'}}</div>\n                                        <div *ngIf=\"attendance_detail.edited_by\">Edited by : {{attendance_detail.editor}}</div>\n                                        <div *ngIf=\"attendance_detail.edited_by\">Reason : {{attendance_detail.edited_reason}}</div>\n                                    </ng-template>\n                                    <td [tooltip]=\"tolTemplate\" container=\"body\" [ngClass]=\"{'warning_background': attendance_detail.edited_by}\"><i [ngClass]=\"['fa attendance-check', attendance_detail.icon]\"></i></td>\n                                </ng-container>\n                                <ng-container *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]\">\n                                    <td class=\"gray_background\" width=\"3%\" *ngIf=\"number > course.attendance_details.length\"></td>\n                                </ng-container>\n                            </ng-container>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<create-absence-request-modal (onConfirmed)=\"onRequestCreated($event)\"></create-absence-request-modal>\n<send-feedback-modal (onSent)=\"onFeedbackSent($event)\"></send-feedback-modal>\n<div class=\"modal fade\" id=\"progressModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">\n                        <h2>Loading</h2>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width:100%\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-student/dashboard-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardStudentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardStudentComponent = (function () {
    function DashboardStudentComponent(appService, authService, studentService, attendanceService, router, element, socketService) {
        var _this = this;
        this.appService = appService;
        this.authService = authService;
        this.studentService = studentService;
        this.attendanceService = attendanceService;
        this.router = router;
        this.element = element;
        this.socketService = socketService;
        //public htmlContent: string = null;
        this.userType = null;
        this.role = null;
        this.attendance_list_by_student = [];
        this.opening_attendance_for_student = [];
        this.isEditingProfile = false;
        this.editing_name = '';
        this.editing_phone = '';
        this.editing_mail = '';
        socketService.consumeEventOnCheckAttendanceUpdated();
        socketService.invokeCheckAttendanceUpdated.subscribe(function (result) {
            _this.getOpeningAttendanceForStudent();
        });
        socketService.consumeEventOnCheckAttendanceCreated();
        socketService.invokeCheckAttendanceCreated.subscribe(function (result) {
            _this.getAttendanceListByStudent();
        });
        socketService.consumeEventOnCheckAttendanceStopped();
        socketService.invokeCheckAttendanceStopped.subscribe(function (result) {
            _this.getAttendanceListByStudent();
        });
    }
    DashboardStudentComponent.prototype.ngOnInit = function () {
        this.editing_name = this.authService.current_user.first_name + ' ' + this.authService.current_user.last_name;
        var image = this.element.nativeElement.querySelector('#profilePic');
        image.src = this.authService.current_user.avatar;
        this.getAttendanceListByStudent();
    };
    DashboardStudentComponent.prototype.getAttendanceListByStudent = function () {
        var _this = this;
        this.attendanceService.getAttendanceListByStudent(this.authService.current_user.id).subscribe(function (result) {
            if (result.result == 'success') {
                _this.attendance_list_by_student = result.attendance_list_by_student;
                for (var i = 0; i < _this.attendance_list_by_student.length; i++) {
                    var absences = 0;
                    for (var j = 0; j < _this.attendance_list_by_student[i].attendance_details.length; j++) {
                        if (_this.attendance_list_by_student[i].attendance_details[j].attendance_type == _this.appService.attendance_type.absent) {
                            absences++;
                        }
                        switch (_this.attendance_list_by_student[i].attendance_details[j].attendance_type) {
                            case _this.appService.attendance_type.checklist:
                                _this.attendance_list_by_student[i].attendance_details[j]['icon'] = 'fa-check';
                                _this.attendance_list_by_student[i].attendance_details[j]['method'] = 'Checklist';
                                break;
                            case _this.appService.attendance_type.qr:
                                _this.attendance_list_by_student[i].attendance_details[j]['icon'] = 'fa-qrcode';
                                _this.attendance_list_by_student[i].attendance_details[j]['method'] = 'QR Code';
                                break;
                            case _this.appService.attendance_type.quiz:
                                _this.attendance_list_by_student[i].attendance_details[j]['icon'] = 'fa-question-circle';
                                _this.attendance_list_by_student[i].attendance_details[j]['method'] = 'Quiz';
                                break;
                            case _this.appService.attendance_type.permited_absent:
                                _this.attendance_list_by_student[i].attendance_details[j]['icon'] = 'fa-envelope-square';
                                _this.attendance_list_by_student[i].attendance_details[j]['method'] = 'Permited Absent';
                                break;
                            default:
                                _this.attendance_list_by_student[i].attendance_details[j]['icon'] = '';
                                _this.attendance_list_by_student[i].attendance_details[j]['method'] = 'Absent';
                                break;
                        }
                    }
                    _this.attendance_list_by_student[i]['absences'] = absences;
                }
                _this.getOpeningAttendanceForStudent();
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get attendance progression", 'error'); });
    };
    DashboardStudentComponent.prototype.getOpeningAttendanceForStudent = function () {
        var _this = this;
        this.attendanceService.getOpeningAttendanceForStudent(this.authService.current_user.id).subscribe(function (result) {
            if (result.result == 'success') {
                _this.opening_attendance_for_student = result.opening_attendance_for_student;
                for (var i = 0; i < _this.opening_attendance_for_student.length; i++) {
                    switch (_this.opening_attendance_for_student[i].attendance_type) {
                        case _this.appService.attendance_type.checklist:
                            _this.opening_attendance_for_student[i]['checked_by'] = "Checked with Checklist";
                            break;
                        case _this.appService.attendance_type.qr:
                            _this.opening_attendance_for_student[i]['checked_by'] = "Checked with QR code";
                            break;
                        case _this.appService.attendance_type.quiz:
                            _this.opening_attendance_for_student[i]['checked_by'] = "Checked with quiz";
                            break;
                        case _this.appService.attendance_type.permited_absent:
                            _this.opening_attendance_for_student[i]['checked_by'] = "Permited Absent";
                            break;
                    }
                }
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get opening attendance for student", 'error'); });
    };
    DashboardStudentComponent.prototype.onEditProfilePic = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('#profilePic');
        reader.onload = function (e) {
            var src = e.target['result'];
            image.src = src;
        };
        this.uploaded_avatar = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
    };
    DashboardStudentComponent.prototype.onEditProfile = function () {
        this.isEditingProfile = true;
        this.editing_name = this.authService.current_user.first_name + ' ' + this.authService.current_user.last_name;
        this.editing_mail = this.authService.current_user.email;
        this.editing_phone = this.authService.current_user.phone;
    };
    DashboardStudentComponent.prototype.onCancelEditProfile = function () {
        var image = this.element.nativeElement.querySelector('#profilePic');
        image.src = this.authService.current_user.avatar;
        this.isEditingProfile = false;
    };
    DashboardStudentComponent.prototype.onSaveEditProfile = function () {
        var _this = this;
        jQuery('#progressModal').modal({ backdrop: 'static', keyboard: false });
        if (this.uploaded_avatar != null) {
            this.appService.uploadAvatar(this.uploaded_avatar).subscribe(function (result) {
                var avatar_link = result['data'].link;
                _this.studentService.updateStudent(_this.authService.current_user.id, _this.editing_name, _this.editing_mail, _this.editing_phone, avatar_link, null)
                    .subscribe(function (result) {
                    jQuery('#progressModal').modal('hide');
                    _this.apiResult = result.result;
                    _this.apiResultMessage = result.message;
                    _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
                    if (result.result == 'success') {
                        _this.isEditingProfile = false;
                        _this.authService.current_user.email = _this.editing_mail;
                        _this.authService.current_user.phone = _this.editing_phone;
                        _this.authService.current_user.avatar = avatar_link;
                        _this.authService.saveCurrentUserToLocal();
                        var image = _this.element.nativeElement.querySelector('#topNavPic');
                        image.src = _this.authService.current_user.avatar;
                    }
                }, function (error) {
                    jQuery('#progressModal').modal('hide');
                    _this.appService.showPNotify('failure', "Server Error! Can't edit profile", 'error');
                });
            }, function (error) {
                jQuery('#progressModal').modal('hide');
                _this.appService.showPNotify('failure', "Error! Can't upload new profile picture", 'error');
            });
        }
        else {
            this.studentService.updateStudent(this.authService.current_user.id, this.editing_name, this.editing_mail, this.editing_phone, null, null)
                .subscribe(function (result) {
                jQuery('#progressModal').modal('hide');
                _this.apiResult = result.result;
                _this.apiResultMessage = result.message;
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
                if (result.result == 'success') {
                    _this.isEditingProfile = false;
                    _this.authService.current_user.email = _this.editing_mail;
                    _this.authService.current_user.phone = _this.editing_phone;
                }
            }, function (error) {
                jQuery('#progressModal').modal('hide');
                _this.appService.showPNotify('failure', "Server Error! Can't edit profile", 'error');
            });
        }
    };
    DashboardStudentComponent.prototype.onCreateAbsenceRequest = function () {
        this.createAbsenceRequestModal.onOpenModal();
    };
    DashboardStudentComponent.prototype.onRequestCreated = function (result) { };
    DashboardStudentComponent.prototype.onSendFeedback = function () {
        this.sendFeedbackModal.onOpenModal();
    };
    DashboardStudentComponent.prototype.onFeedbackSent = function (result) { };
    DashboardStudentComponent.prototype.onChangePassword = function () {
        this.router.navigate(['/change-password']);
    };
    DashboardStudentComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.onSaveEditProfile();
        }
    };
    DashboardStudentComponent.prototype.onRequestToBeChecked = function (course) {
        var _this = this;
        this.attendanceService.requestToBeCheckAttendance(this.authService.current_user.id, course.id).subscribe(function (result) {
            if (result.result == 'success') {
                _this.appService.showPNotify('success', result.message, 'success');
            }
            else {
                _this.appService.showPNotify('failure', result.message, 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't request to be check attendance", 'error'); });
    };
    return DashboardStudentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["w" /* CreateAbsenceRequestModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["w" /* CreateAbsenceRequestModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["w" /* CreateAbsenceRequestModalComponent */]) === "function" && _a || Object)
], DashboardStudentComponent.prototype, "createAbsenceRequestModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["u" /* SendFeedbackModalComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["u" /* SendFeedbackModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["u" /* SendFeedbackModalComponent */]) === "function" && _b || Object)
], DashboardStudentComponent.prototype, "sendFeedbackModal", void 0);
DashboardStudentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-student',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard-student/dashboard-student.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["o" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["o" /* StudentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["s" /* AttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["s" /* AttendanceService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["r" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["r" /* SocketService */]) === "function" && _j || Object])
], DashboardStudentComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=dashboard-student.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-teacher/dashboard-teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <div class=\"col-sm-2\" style=\"padding: 0;text-align: center;\">\n                    <img id=\"profilePic\" style=\"height:150px;width:150px;padding-bottom: 5px;\">\n                    <ng-container *ngIf=\"isEditingProfile\">\n                        <label class=\"btn btn-primary\">\n                            Change Picture\n                            <input type=\"file\" style=\"display:none;\" name=\"uploads\" (change)=\"onEditProfilePic($event)\">\n                        </label>  \n                    </ng-container>    \n                </div>\n                <div class=\"col-sm-4 col-xs-12 profile_left\">\n                    <ng-container *ngIf=\"!isEditingProfile\">\n                        <h3>{{editing_name}}</h3>\n                        <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\n                            <li>\n                                <i class=\"fa fa-phone\"></i> {{authService.current_user.phone}}\n                            </li>\n                            <li>\n                                <i class=\"fa fa-envelope-o\"></i> {{authService.current_user.email}}\n                            </li>\n                        </ul>\n                        <button class=\"btn btn-primary\" (click)=\"onEditProfile()\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                    </ng-container>\n                    <ng-container *ngIf=\"isEditingProfile\" (keydown)=\"keyDownFunction($event)\">\n                        <h3><input class=\"form-control\" type=\"text\" name=\"editing_name\" [(ngModel)] = \"editing_name\"></h3>\n                        <ul class=\"list-unstyled user_data\" style=\"font-size: medium;\">\n                            <li>\n                                <i class=\"fa fa-phone\"></i>\n                                <input class=\"form-control\" type=\"text\" name=\"editing_phone\" [(ngModel)]=\"editing_phone\">\n                            </li>\n                            <li>\n                                <i class=\"fa fa-envelope-o\"></i>\n                                <input class=\"form-control\" type=\"text\" name=\"editing_mail\" [(ngModel)]=\"editing_mail\">\n                            </li>\n                        </ul>\n                        <button class=\"btn btn-default\" (click)=\"onCancelEditProfile()\">Cancel</button>\n                        <button class=\"btn btn-success\" (click)=\"onSaveEditProfile()\">Save</button>\n                    </ng-container>\n                </div>\n                <div class=\"col-sm-6 col-xs-12\">\n                    <div class=\"row pad-top col-xs-12\">\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSendFeedback()\">\n                            <i class=\"fa fa-comments fa-3x\"></i>\n                            <h5>Send Feedback</h5>\n                        </button>\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onChangePassword()\">\n                            <i class=\"fa fa-cog fa-3x\"></i>\n                            <h5>Change Password</h5>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div><div class=\"col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Courses</h3>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <div class=\"form-group col-sm-4 col-xs-12\">\n                    <input placeholder=\"Search Course Name\" class=\"form-control input_search\" [(ngModel)]=\"search_text\" (ngModelChange)=\"getTeachingList()\" />\n                </div>\n                <div class=\"form-group col-sm-6 col-xs-12\">\n                    <div class=\"col-xs-6\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectedProgram\" (ngModelChange)=\"onChangeProgram()\">\n                            <option *ngFor=\"let program of programs\" [value]=\"program.id\">{{program.name}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-xs-6\">\n                        <select class=\"form-control\" [(ngModel)]=\"selectedClass\" (ngModelChange)=\"getTeachingList()\">\n                            <option *ngFor=\"let class of filteredClasses\" [value]=\"class.id\">{{class.name}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <table class=\"table table-bordered text-center\">\n                    <thead>\n                        <tr>\n                            <th>Course</th>\n                            <th>Class</th>\n                            <th>Lecturers</th>\n                            <th>TAs</th>\n                            <th>Total students</th>\n                            <th>Status</th>\n                            <th></th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let course of teaching_courses\">\n                            <td><a routerLink=\"/courses/{{course.id}}\" routerLinkActive=\"active\"><strong>{{course.code}} - {{course.name}}</strong></a></td>\n                            <td>{{course.class_name}}</td>\n                            <td>{{course.lecturers}}</td>\n                            <td>{{course.tas}}</td>\n                            <td>{{course.total_stud}}</td>\n                            <td *ngIf=\"!course.is_opening_attendance\"><label class=\"red_text\">Closed</label></td>\n                            <td *ngIf=\"course.is_opening_attendance\"><label class=\"green_text\">Opening</label></td>\n                            <td *ngIf=\"!course.is_opening_attendance\"><button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onCheckAttendance($event,course)\">Open Attendance</button></td>\n                            <td *ngIf=\"course.is_opening_attendance\"><button type=\"button\" class=\"btn btn-success btn-round\" (click)=\"onCheckAttendance($event,course)\">Check Attendance</button></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<send-feedback-modal (onSent)=\"onFeedbackSent($event)\"></send-feedback-modal>\n<div class=\"modal fade\" id=\"confirmModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Confirm check attendance</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-4\" style=\"text-align: right\">\n                            <h4>Course:</h4>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <h4>{{selected_course['code']}} - {{selected_course['name']}}</h4>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-4\" style=\"text-align: right;\">\n                            <h4>Class: </h4>\n                        </div>\n                        <div class=\"col-xs-8\">\n                            <h4>{{selected_course['class_name']}}</h4>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmAction()\" data-dismiss=\"modal\">Confirm</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"progressModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog modal-sm vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                    <div class=\"text-center\">\n                        <h2>Loading</h2>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" style=\"width:100%\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-teacher/dashboard-teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardTeacherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardTeacherComponent = (function () {
    function DashboardTeacherComponent(router, element, localStorage, socketService, appService, authService, attendanceService, teacherService, courseService) {
        var _this = this;
        this.router = router;
        this.element = element;
        this.localStorage = localStorage;
        this.socketService = socketService;
        this.appService = appService;
        this.authService = authService;
        this.attendanceService = attendanceService;
        this.teacherService = teacherService;
        this.courseService = courseService;
        this.opening_attendances = [];
        this.uploaded_avatar = null;
        this.isEditingProfile = false;
        this.editing_name = '';
        this.editing_phone = '';
        this.editing_mail = '';
        this.search_text = '';
        this.programs = [];
        this.selectedProgram = 0;
        this.classes = [];
        this.selectedClass = 0;
        this.teaching_courses = [];
        this.selected_course = {};
        socketService.consumeEventOnCheckAttendanceCreated();
        socketService.invokeCheckAttendanceCreated.subscribe(function (result) {
            _this.getOpeningAttendance();
        });
        socketService.consumeEventOnCheckAttendanceStopped();
        socketService.invokeCheckAttendanceStopped.subscribe(function (result) {
            _this.getOpeningAttendance();
        });
    }
    DashboardTeacherComponent.prototype.getOpeningAttendance = function () {
        var _this = this;
        this.attendanceService.getOpeningAttendanceCourse(this.authService.current_user.id).subscribe(function (result) {
            _this.opening_attendances = result.opening_attendances;
            for (var j = 0; j < _this.teaching_courses.length; j++) {
                _this.teaching_courses[j]['is_opening_attendance'] = false;
            }
            for (var i = 0; i < _this.opening_attendances.length; i++) {
                for (var j = 0; j < _this.teaching_courses.length; j++) {
                    if (_this.opening_attendances[i].course_id == _this.teaching_courses[j].id &&
                        _this.opening_attendances[i].class_id == _this.teaching_courses[j].class_id) {
                        _this.teaching_courses[j]['is_opening_attendance'] = true;
                    }
                }
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get opening attendances", 'error'); });
    };
    DashboardTeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editing_name = this.authService.current_user.first_name + ' ' + this.authService.current_user.last_name;
        var image = this.element.nativeElement.querySelector('#profilePic');
        image.src = this.authService.current_user.avatar;
        this.appService.getSemesterProgramClass().subscribe(function (results) {
            _this.classes = results.classes;
            _this.programs = results.programs;
            _this.programs.unshift({ id: 0, name: "All programs" });
            _this.selectedProgram = _this.programs[0].id;
            _this.onChangeProgram();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get semester-program-class", 'error'); });
    };
    DashboardTeacherComponent.prototype.ngOnDestroy = function () {
        this.socketService.stopEventOnCheckAttendanceStopped();
        this.socketService.stopEventOnCheckAttendanceCreated();
    };
    DashboardTeacherComponent.prototype.onEditProfilePic = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('#profilePic');
        reader.onload = function (e) {
            var src = e.target['result'];
            image.src = src;
        };
        this.uploaded_avatar = event.target.files[0];
        reader.readAsDataURL(event.target.files[0]);
    };
    DashboardTeacherComponent.prototype.onEditProfile = function () {
        this.isEditingProfile = true;
        this.editing_name = this.authService.current_user.first_name + ' ' + this.authService.current_user.last_name;
        this.editing_mail = this.authService.current_user.email;
        this.editing_phone = this.authService.current_user.phone;
    };
    DashboardTeacherComponent.prototype.onCancelEditProfile = function () {
        var image = this.element.nativeElement.querySelector('#profilePic');
        image.src = this.authService.current_user.avatar;
        this.isEditingProfile = false;
    };
    DashboardTeacherComponent.prototype.onSaveEditProfile = function () {
        var _this = this;
        jQuery('#progressModal').modal({ backdrop: 'static', keyboard: false });
        if (this.uploaded_avatar != null) {
            this.appService.uploadAvatar(this.uploaded_avatar).subscribe(function (result) {
                var avatar_link = result['data'].link;
                _this.teacherService.updateTeacher(_this.authService.current_user.id, _this.editing_name, _this.editing_mail, _this.editing_phone, avatar_link)
                    .subscribe(function (result) {
                    jQuery('#progressModal').modal('hide');
                    _this.apiResult = result.result;
                    _this.apiResultMessage = result.message;
                    _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
                    if (result.result == 'success') {
                        _this.isEditingProfile = false;
                        _this.authService.current_user.email = _this.editing_mail;
                        _this.authService.current_user.phone = _this.editing_phone;
                        _this.authService.current_user.avatar = avatar_link;
                        _this.authService.saveCurrentUserToLocal();
                        var image = _this.element.nativeElement.querySelector('#topNavPic');
                        image.src = _this.authService.current_user.avatar;
                    }
                }, function (error) {
                    jQuery('#progressModal').modal('hide');
                    _this.appService.showPNotify('failure', "Server Error! Can't edit profile", 'error');
                });
            }, function (error) {
                jQuery('#progressModal').modal('hide');
                _this.appService.showPNotify('failure', "Error! Can't upload new profile picture", 'error');
            });
        }
        else {
            this.teacherService.updateTeacher(this.authService.current_user.id, this.editing_name, this.editing_mail, this.editing_phone, null)
                .subscribe(function (result) {
                jQuery('#progressModal').modal('hide');
                _this.apiResult = result.result;
                _this.apiResultMessage = result.message;
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
                if (result.result == 'success') {
                    _this.isEditingProfile = false;
                    _this.authService.current_user.email = _this.editing_mail;
                    _this.authService.current_user.phone = _this.editing_phone;
                }
            }, function (error) {
                jQuery('#progressModal').modal('hide');
                _this.appService.showPNotify('failure', "Server Error! Can't edit profile", 'error');
            });
        }
    };
    DashboardTeacherComponent.prototype.onSendFeedback = function () {
        this.sendFeedbackModal.onOpenModal();
    };
    DashboardTeacherComponent.prototype.onFeedbackSent = function (result) { };
    DashboardTeacherComponent.prototype.getTeachingList = function () {
        var _this = this;
        this.courseService.getTeachingCourses(this.authService.current_user.id, this.search_text, this.selectedProgram, this.selectedClass).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (_this.apiResult == 'failure') {
                _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
            }
            _this.teaching_courses = result.courses;
            if (_this.teaching_courses && _this.teaching_courses.length > 0) {
                _this.getOpeningAttendance();
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get teaching course", 'error'); });
    };
    DashboardTeacherComponent.prototype.onChangeProgram = function () {
        this.filteredClasses = [{ id: 0, name: 'All Classes' }];
        for (var i = 0; i < this.classes.length; i++) {
            if (this.selectedProgram == 0 || this.classes[i].program_id == this.selectedProgram) {
                this.filteredClasses.push(this.classes[i]);
            }
        }
        this.selectedClass = this.filteredClasses[0].id;
        this.getTeachingList();
    };
    DashboardTeacherComponent.prototype.onCourseClick = function (course_id) {
        this.router.navigate(['/courses/', course_id]);
    };
    DashboardTeacherComponent.prototype.onCheckAttendance = function (event, course) {
        this.selected_course = course;
        if (course.is_opening_attendance) {
            this.confirmAction();
        }
        else {
            jQuery('#confirmModal').modal('show');
        }
    };
    DashboardTeacherComponent.prototype.confirmAction = function () {
        this.localStorage.set('check_attendance_course_id', this.selected_course['id']);
        this.localStorage.set('check_attendance_class_id', this.selected_course['class_id']);
        this.router.navigate(['/check-attendance']);
    };
    DashboardTeacherComponent.prototype.onChangePassword = function () {
        this.router.navigate(['/change-password']);
    };
    DashboardTeacherComponent.prototype.keyDownFunction = function (event) {
        if (event.keyCode == 13) {
            this.onSaveEditProfile();
        }
    };
    return DashboardTeacherComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["u" /* SendFeedbackModalComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["u" /* SendFeedbackModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["u" /* SendFeedbackModalComponent */]) === "function" && _a || Object)
], DashboardTeacherComponent.prototype, "sendFeedbackModal", void 0);
DashboardTeacherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard-teacher',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard-teacher/dashboard-teacher.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["r" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["r" /* SocketService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["g" /* AppService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["e" /* AuthService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["s" /* AttendanceService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["A" /* TeacherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["A" /* TeacherService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["m" /* CourseService */]) === "function" && _k || Object])
], DashboardTeacherComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=dashboard-teacher.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dashboard-staff *ngIf=\"authService.current_user.role_id == appService.userType.staff\"></app-dashboard-staff>\n<app-dashboard-admin *ngIf=\"authService.current_user.role_id == appService.userType.admin\"></app-dashboard-admin>\n<app-dashboard-student *ngIf=\"authService.current_user.role_id == appService.userType.student\"></app-dashboard-student>\n<app-dashboard-teacher *ngIf=\"authService.current_user.role_id == appService.userType.teacher\"></app-dashboard-teacher>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(appService, authService) {
        this.appService = appService;
        this.authService = authService;
        //public htmlContent: string = null;
        this.userType = null;
        this.role = null;
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_student_dashboard_student_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-student/dashboard-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_admin_dashboard_admin_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-admin/dashboard-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_staff_dashboard_staff_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-staff/dashboard-staff.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_teacher_dashboard_teacher_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-teacher/dashboard-teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var homeRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */],
    }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(homeRoutes),
            __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["d" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["b" /* TooltipModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_staff_dashboard_staff_component__["a" /* DashboardStaffComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_admin_dashboard_admin_component__["a" /* DashboardAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_student_dashboard_student_component__["a" /* DashboardStudentComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_teacher_dashboard_teacher_component__["a" /* DashboardTeacherComponent */]
        ],
        providers: []
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map