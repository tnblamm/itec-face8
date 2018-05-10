webpackJsonp([10],{

/***/ "../../../../../src/app/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Change Password</h3>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <form class=\"form-horizontal form-label-left\">\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-offset-2 col-sm-2 col-xs-12\">Current Password*</label>\n                                <div class=\"col-sm-4 col-xs-12\">\n                                    <input type=\"password\" [(ngModel)]=\"current_password\" name=\"current_password\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-offset-2 col-sm-2 col-xs-12\">New Password*</label>\n                                <div class=\"col-sm-4 col-xs-12\">\n                                    <input type=\"password\" [(ngModel)]=\"new_password\" name=\"new_password\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-xs-12\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-offset-2 col-sm-2 col-xs-12\">Confirm Password*</label>\n                                <div class=\"col-sm-4 col-xs-12\">\n                                    <input type=\"password\" [(ngModel)]=\"confirm_password\" name=\"confirm_password\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancelChangePassword()\">Cancel</button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onChangePassword()\">Change Password</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("../../../../angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(route, appService, authService, router, localStorage) {
        this.route = route;
        this.appService = appService;
        this.authService = authService;
        this.router = router;
        this.localStorage = localStorage;
        this.current_password = '';
        this.new_password = '';
        this.confirm_password = '';
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.onCancelChangePassword = function () {
        this.router.navigate(['/dashboard']);
    };
    ChangePasswordComponent.prototype.onChangePassword = function () {
        var _this = this;
        this.appService.changePassword(this.current_password, this.new_password, this.confirm_password).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (result.result == 'success') {
                setTimeout(function () {
                    _this.router.navigate(['/dashboard']);
                }, 2000);
            }
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't change password", 'error'); });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__("../../../../../src/app/change-password/change-password.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _e || Object])
], ChangePasswordComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container body\">\n    <div class=\"main_container\">\n        <div id =\"menu_fixed\" class=\"col-md-3 left_col menu_fixed\">\n            <app-side-menu></app-side-menu>\n        </div>\n        <div class=\"top_nav\">\n            <app-top-navigation></app-top-navigation>\n        </div>\n        <div class=\"right_col\" role=\"main\">\n            <div id=\"app_content\">\n                <div id=\"app_content_inner\" class=\"row\">\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n        <app-footer></app-footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngAfterViewInit = function () {
        jQuery(document).ready(function () {
            console.log('jQuery ready');
            var CURRENT_PATH = window.location.protocol + "//" + window.location.host + window.location.pathname;
            var setContentHeight = function () {
                // jQuery('#app_content').css('height', jQuery('#app_content_inner').outerHeight());
                // jQuery('.left_col').css('height', jQuery('.left_col_content').outerHeight());
                // var leftColHeight = jQuery('.left_col').outerHeight();
                // var rightColHeight = jQuery('#app_content').outerHeight() + jQuery('.top_nav').outerHeight() + jQuery('#footer').outerHeight() + 10;
                // if (leftColHeight < rightColHeight) {
                //     jQuery('.left_col').css('height', rightColHeight);
                // } else {
                //     jQuery('#app_content').css('height', leftColHeight - jQuery('.top_nav').outerHeight() - jQuery('#footer').outerHeight() - 10);
                // }
            };
            jQuery('#sidebar-menu').find('a').on('click', function (ev) {
                console.log('clicked - sidebar_menu');
                var jQueryli = jQuery(this).parent();
                jQuery('#sidebar-menu').find('li').removeClass('current-page');
                jQuery('#sidebar-menu').find('.child_menu').find('li').removeClass('active');
                if (jQueryli.is('.active')) {
                    jQueryli.removeClass('active active-sm');
                    jQuery('ul:first', jQueryli).slideUp(function () {
                        setContentHeight();
                    });
                }
                else {
                    // prevent closing menu if we are on child menu
                    if (!jQueryli.parent().is('.child_menu')) {
                        jQuery('#sidebar-menu').find('li').removeClass('active active-sm');
                        jQuery('#sidebar-menu').find('li ul').slideUp();
                    }
                    else {
                        if (jQuery('body').is(".nav-sm")) {
                            jQuery('#sidebar-menu').find("li").removeClass("active active-sm");
                            jQuery('#sidebar-menu').find("li ul").slideUp();
                        }
                    }
                    jQueryli.addClass('active').addClass('current-page');
                    jQuery('ul:first', jQueryli).slideDown(function () {
                        setContentHeight();
                    });
                }
            });
            // toggle small or large menu 
            jQuery('#menu_toggle').on('click', function () {
                console.log('clicked - menu toggle');
                if (jQuery('body').hasClass('nav-md')) {
                    jQuery('#sidebar-menu').find('li.active ul').hide();
                    jQuery('#sidebar-menu').find('li.active').addClass('active-sm').removeClass('active');
                }
                else {
                    jQuery('#sidebar-menu').find('li.active-sm ul').show();
                    jQuery('#sidebar-menu').find('li.active-sm').addClass('active').removeClass('active-sm');
                }
                jQuery('body').toggleClass('nav-md nav-sm');
                setContentHeight();
            });
            // check active menu
            jQuery('#sidebar-menu').find('a[href="' + CURRENT_PATH + '"]').parent('li').addClass('current-page');
            jQuery('#sidebar-menu').find('a').filter(function () {
                return this.href == CURRENT_PATH;
            }).parent('li').addClass('current-page').parents('ul').slideDown(function () {
                setContentHeight();
            }).parent().addClass('active');
            setContentHeight();
            // fixed sidebar
            if (jQuery.fn.mCustomScrollbar) {
                jQuery('.menu_fixed').mCustomScrollbar({
                    autoHideScrollbar: true,
                    theme: 'minimal',
                    mouseWheel: { preventDefault: true, scrollAmount: 150 }
                });
            }
        });
    };
    LayoutComponent.prototype.ngAfterViewChecked = function () {
        jQuery('.right_col').css('min-height', jQuery(window).height());
        var bodyHeight = jQuery('body').outerHeight(), footerHeight = jQuery('body').hasClass('footer_fixed') ? -10 : jQuery('footer').height(), leftColHeight = jQuery('.left_col').eq(1).height() + jQuery('.sidebar-footer').height(), contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;
        // normalize content
        contentHeight -= jQuery('.nav_menu').height() + footerHeight;
        jQuery('.right_col').css('min-height', contentHeight);
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layout/layout.component.html"),
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_component__ = __webpack_require__("../../../../../src/app/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_password_change_password_component__ = __webpack_require__("../../../../../src/app/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ROUTES = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__layout_component__["a" /* LayoutComponent */],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["f" /* AuthGuardService */]],
        children: [
            { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
            { path: 'courses', loadChildren: 'app/courses/courses.module#CoursesModule' },
            { path: 'students', loadChildren: 'app/students/students.module#StudentsModule' },
            { path: 'teachers', loadChildren: 'app/teachers/teachers.module#TeachersModule' },
            { path: 'schedule', loadChildren: 'app/schedule/schedule.module#ScheduleModule' },
            { path: 'absence-requests', loadChildren: 'app/absence-requests/absence-requests.module#AbsenceRequestsModule' },
            { path: 'feedbacks', loadChildren: 'app/feedback/feedback.module#FeedbackModule' },
            { path: 'settings', loadChildren: 'app/settings/setting.module#SettingModule' },
            { path: 'check-attendance', loadChildren: 'app/check-attendance/check-attendance.module#CheckAttendanceModule' },
            { path: 'check-attendance/quiz', loadChildren: 'app/check-attendance-quiz/check-attendance-quiz.module#CheckAttendanceQuizModule' },
            { path: 'quiz', loadChildren: 'app/quiz/quiz.module#QuizModule' },
            { path: 'statistic', loadChildren: 'app/statistic/statistic.module#StatisticModule' },
            { path: 'classes', loadChildren: 'app/classes/classes.module#ClassesModule' },
            { path: 'programs', loadChildren: 'app/programs/programs.module#ProgramsModule' },
            { path: 'semesters', loadChildren: 'app/semesters/semesters.module#SemestersModule' },
            { path: 'change-password', component: __WEBPACK_IMPORTED_MODULE_5__change_password_change_password_component__["a" /* ChangePasswordComponent */] },
        ]
    },];
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__change_password_change_password_component__["a" /* ChangePasswordComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["d" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(ROUTES),
        ],
        providers: [],
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map