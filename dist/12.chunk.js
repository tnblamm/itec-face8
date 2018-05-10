webpackJsonp([12],{

/***/ "../../../../../src/app/settings/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-sm-6 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h4>Email</h4>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"form-group form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\">Host <span class=\"required\">*</span></label>\n                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\n                        <select class=\"form-control\" name=\"host\" [(ngModel)]=\"settings['selected_host']\" (ngModelChange)=\"onChangeHost()\">\n                            <option *ngFor=\"let email of settings['emails']\" [value]=\"email.host_name\">{{email.host_name}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\">Email <span class=\"required\">*</span></label>\n                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\n                        <input type=\"text\" name=\"email\" [(ngModel)]=\"settings['emails'][selected_email_index]['config']['auth']['user']\" class=\"form-control col-md-7 col-xs-12\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\">Password <span class=\"required\">*</span></label>\n                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\n                        <input type=\"password\" name=\"password\" [(ngModel)]=\"settings['emails'][selected_email_index]['config']['auth']['pass']\" class=\"form-control col-md-7 col-xs-12\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" for=\"first-name\"> Signature <span class=\"required\">*</span></label>\n                    <div class=\"col-md-9 col-sm-9 col-xs-12\">\n                        <textarea class=\"form-control col-md-7 col-xs-12\" name=\"signature\" autosize rows=\"2\" style=\"resize: none;\" [(ngModel)]=\"settings['emails'][selected_email_index]['signature']\"></textarea>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- <div class=\"col-md-6 col-sm-6 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h4>General</h4>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"form-group form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"control-label col-md-5 col-sm-6 col-xs-12\" for=\"first-name\">Auto close attendance time</label>\n                    <div class=\"col-md-3 col-sm-3 col-xs-12\">\n                        <input [textMask]=\"{mask: mask,guide:true,placeholderChar:'_'}\" class=\"form-control only_bottom_border\" [(ngModel)]=\"settings['auto_close_attendance_time']\" style=\"font-size: large;\">\n                    </div>\n                </div>\n                <br>\n            </div>\n        </div>\n    </div>\n</div> -->\n<div class=\"col-xs-12\">\n    <button class=\"btn btn-success pull-right\" (click)=\"saveSetting()\">Save</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/settings/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingComponent = (function () {
    function SettingComponent(scheduleService, appService, router, semesterService) {
        this.scheduleService = scheduleService;
        this.appService = appService;
        this.router = router;
        this.semesterService = semesterService;
        this.mask = [/\d/, /\d/, ':', /\d/, /\d/];
        this.settings = {
            emails: [
                {
                    host_name: '',
                    signature: '',
                    config: {
                        auth: {
                            user: '',
                            pass: ''
                        }
                    },
                }
            ]
        };
        this.selected_email_index = 0;
    }
    SettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getSettings().subscribe(function (result) {
            _this.settings = result.settings;
            console.log(_this.settings.emails);
            _this.onChangeHost();
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get settings", 'error'); });
    };
    SettingComponent.prototype.onChangeHost = function () {
        for (var i = 0; i < this.settings['emails'].length; i++) {
            if (this.settings['emails'][i].host_name == this.settings['selected_host']) {
                this.selected_email_index = i;
                break;
            }
        }
    };
    SettingComponent.prototype.saveSetting = function () {
        var _this = this;
        this.appService.saveSettings(this.settings).subscribe(function (result) {
            if (result.result == 'success') {
                _this.appService.showPNotify('success', result.message, 'success');
            }
            else {
                _this.appService.showPNotify('failure', result.message, 'error');
            }
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get settings", 'error'); });
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-setting',
        template: __webpack_require__("../../../../../src/app/settings/setting.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["t" /* ScheduleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["t" /* ScheduleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["h" /* SemesterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["h" /* SemesterService */]) === "function" && _d || Object])
], SettingComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=setting.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/setting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setting_component__ = __webpack_require__("../../../../../src/app/settings/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_tabs__ = __webpack_require__("../../../../ngx-bootstrap/tabs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_module_autosize_autosize_module__ = __webpack_require__("../../../../../src/app/shared/module/autosize/autosize.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var Routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__setting_component__["a" /* SettingComponent */] }
];
var SettingModule = (function () {
    function SettingModule() {
    }
    return SettingModule;
}());
SettingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(Routes),
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["e" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_tabs__["a" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_10__shared_module_autosize_autosize_module__["a" /* AutosizeModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__setting_component__["a" /* SettingComponent */],
        ],
        providers: []
    })
], SettingModule);

//# sourceMappingURL=setting.module.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map