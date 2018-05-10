webpackJsonp([15],{

/***/ "../../../../../src/app/programs/programs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\n    <div class=\"x_panel\">\n        <div class=\"x_title\">\n            <h3>Programs</h3>\n            <div class=\"navbar-btn pull-right\">\n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"onAddProgram()\"> <i class=\"fa fa-plus\"></i> Add</button>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"x_content\">\n            <div class=\"row\">\n                <div class=\"form-group col-md-4 col-xs-12\">\n                    <input placeholder=\"Search Class Name\" class=\"form-control\" [(ngModel)]=\"searchText\" (ngModelChange)=\"getProgramList()\" />\n                </div>\n            </div>\n            <br>\n            <table class=\"table table-bordered text-center table-hover\">\n                <thead>\n                    <tr>\n                        <th>Code</th>\n                        <th>Name</th>\n                        <th>Total classes</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let program of programs\" (click)='onCellClick()'>\n                        <td>{{program.code}}</td>\n                        <td>{{program.name}}</td>\n                        <td>{{program.total_class}}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [itemsPerPage]=\"itemsPerPage\" [(ngModel)]=\"currentPage\" (pageChanged)=\"onPageChanged($event)\" class=\"pull-right no_margin\"></pagination>\n            <div class=\"form-group\">\n                <select [(ngModel)]=\"itemsPerPage\" (ngModelChange)=\"getProgramList()\">\n                    <option>10</option>\n                    <option>30</option>\n                    <option>50</option>\n                </select>\n                <span>Items/page</span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"addProgramModal\" role=\"dialog\">\n    <div class=\"vertical-alignment-helper\">\n        <div class=\"modal-dialog vertical-align-center\">\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Add new program</h4>\n                </div>\n                <form class=\"form-horizontal form-label-left\">\n                    <div class=\"modal-body\">\n                        <div class=\"row\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Name*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"new_program_name\" name=\"new_program_name\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-md-3 col-sm-3 col-xs-12\">Code*</label>\n                                <div class=\"col-md-6 col-sm-6 col-xs-12\">\n                                    <input type=\"text\" [(ngModel)]=\"new_program_code\" name=\"new_program_code\" required=\"required\" class=\"form-control col-md-7 col-xs-12\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                        <button type=\"button\" class=\"btn btn-default btn-success\" (click)=\"confirmAddProgram()\">Add</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/programs/programs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramsComponent = (function () {
    function ProgramsComponent(appService, programService, authService) {
        this.appService = appService;
        this.programService = programService;
        this.authService = authService;
        this.sort_tag = ['none', 'asc', 'dsc'];
        this.sort_index = 0;
        this.pageNumber = 1;
        this.limit = 15;
        this.currentPage = 1;
        this.totalItems = 0;
        this.itemsPerPage = 10;
        this.programs = [];
        this.new_program_name = '';
        this.new_program_code = '';
    }
    ProgramsComponent.prototype.ngOnInit = function () {
        this.getProgramList();
    };
    ProgramsComponent.prototype.getProgramList = function () {
        var _this = this;
        this.programService.getProgramList(this.searchText, this.sort_tag[this.sort_index], this.pageNumber, this.itemsPerPage)
            .subscribe(function (result) {
            _this.programs = result.programs;
            _this.totalItems = result.total_items;
            _this.apiResult = result.result;
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't get program list", 'error'); });
    };
    ProgramsComponent.prototype.onPageChanged = function (event) {
        this.pageNumber = event.page;
        this.getProgramList();
    };
    ProgramsComponent.prototype.onCellClick = function (id) {
    };
    ProgramsComponent.prototype.onAddProgram = function () {
        this.new_program_name = '';
        this.new_program_code = '';
        jQuery("#addProgramModal").modal("show");
    };
    ProgramsComponent.prototype.confirmAddProgram = function () {
        var _this = this;
        this.programService.addProgram(this.new_program_name, this.new_program_code).subscribe(function (result) {
            _this.apiResult = result.result;
            _this.apiResultMessage = result.message;
            if (result.result == 'success') {
                _this.getProgramList();
                _this.new_program_name = '';
                _this.new_program_code = '';
                jQuery("#addProgramModal").modal("hide");
            }
            _this.appService.showPNotify(_this.apiResult, _this.apiResultMessage, _this.apiResult == 'success' ? 'success' : 'error');
        }, function (error) { _this.appService.showPNotify('failure', "Server Error! Can't add class", 'error'); });
    };
    return ProgramsComponent;
}());
ProgramsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-programs',
        template: __webpack_require__("../../../../../src/app/programs/programs.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["g" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["i" /* ProgramsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["i" /* ProgramsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["e" /* AuthService */]) === "function" && _c || Object])
], ProgramsComponent);

var _a, _b, _c;
//# sourceMappingURL=programs.component.js.map

/***/ }),

/***/ "../../../../../src/app/programs/programs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__programs_component__ = __webpack_require__("../../../../../src/app/programs/programs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_pagination__ = __webpack_require__("../../../../ngx-bootstrap/pagination/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsModule", function() { return ProgramsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var homeRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__programs_component__["a" /* ProgramsComponent */],
    }
];
var ProgramsModule = (function () {
    function ProgramsModule() {
    }
    return ProgramsModule;
}());
ProgramsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(homeRoutes),
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["d" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__programs_component__["a" /* ProgramsComponent */]
        ],
        providers: []
    })
], ProgramsModule);

//# sourceMappingURL=programs.module.js.map

/***/ })

});
//# sourceMappingURL=15.chunk.js.map