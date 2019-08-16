(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-table></app-table>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-expand-lg fixed-top\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Home</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Contacts <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item dropdown\" ngbDropdown display=\"dynamic\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"\n             data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" ngbDropdownToggle>\n            Products\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" ngbDropdownMenu>\n            <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem>Product-1</a>\n            <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem>Product-2</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Documents</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n\n    </div>\n\n    <div class=\"dropdown ml-2\" ngbDropdown display=\"dynamic\">\n      <a class=\"dropdown-toggle rounded-circle overflow-hidden\" href=\"#\" id=\"navbarDropdownUser\" role=\"button\"\n         data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" ngbDropdownToggle placement=\"left\"\n         ngbTooltip=\"Mark\"><img src=\"../../assets/img/user-placeholder.jpg\" alt=\"user\" width=\"30\"/></a>\n      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownUser\" ngbDropdownMenu>\n        <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem>Info</a>\n        <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem>Settings</a>\n        <a class=\"dropdown-item\" href=\"#\" ngbDropdownItem>Log Out</a>\n      </div>\n    </div>\n\n  </nav>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/table/table-row/table-row.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/table/table-row/table-row.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<th scope=\"row\">{{ index + 1 }}</th>\n<td><span *ngIf=\"contact.human\"><img src=\"../../../assets/img/icon-human.png\" width=\"15\" alt=\"human\" class=\"icon-human\"/></span>{{ contact.name }}</td>\n<td><a href=\"mailto:{{ contact.email }};\">{{ contact.email }}</a></td>\n<td><a href=\"tel:{{ contact.phone }};\">{{ contact.phone }}</a></td>\n<td>{{ contact.country }}</td>\n<td>{{ contact.position }}</td>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/table/table.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/table/table.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1 class=\"h1\">Contacts</h1>\n      <h3>Total {{ contacts.length }} persons</h3>\n      <table class=\"table table-striped mt-3 main-table\">\n        <thead>\n        <tr>\n          <th scope=\"col\">N</th>\n          <th scope=\"col\"><a href=\"#\" (click)=\"changeSort('name')\">Name</a></th>\n          <th scope=\"col\"><a href=\"#\" (click)=\"changeSort('email')\">E-mail</a></th>\n          <th scope=\"col\"><a href=\"#\" (click)=\"changeSort('phone')\">Phone</a></th>\n          <th scope=\"col\"><a href=\"#\" (click)=\"changeSort('country')\">Country</a></th>\n          <th scope=\"col\"><a href=\"#\" (click)=\"changeSort('position')\">Position</a></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr app-table-row *ngFor=\"let contact of getPage(); index as i\" [contact]=\"contact\" [index]=\"i\"></tr>\n        </tbody>\n      </table>\n\n      <ngb-pagination class=\"d-flex justify-content-center\" [collectionSize]=\"contacts.length\" [pageSize]=\"pageSize\"\n                      [(page)]=\"pageNumber\"></ngb-pagination>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'crm-demo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table/table-row/table-row.component */ "./src/app/table/table-row/table-row.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"],
                _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_6__["TableRowComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/table/table-row/table-row.component.css":
/*!*********************************************************!*\
  !*** ./src/app/table/table-row/table-row.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLXJvdy90YWJsZS1yb3cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/table/table-row/table-row.component.ts":
/*!********************************************************!*\
  !*** ./src/app/table/table-row/table-row.component.ts ***!
  \********************************************************/
/*! exports provided: TableRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRowComponent", function() { return TableRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableRowComponent = /** @class */ (function () {
    function TableRowComponent() {
        this.index = 1;
        this.contact = null;
    }
    TableRowComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TableRowComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TableRowComponent.prototype, "contact", void 0);
    TableRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[app-table-row]',
            template: __webpack_require__(/*! raw-loader!./table-row.component.html */ "./node_modules/raw-loader/index.js!./src/app/table/table-row/table-row.component.html"),
            styles: [__webpack_require__(/*! ./table-row.component.css */ "./src/app/table/table-row/table-row.component.css")]
        })
    ], TableRowComponent);
    return TableRowComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.sortField = null;
        this.pageSize = 10;
        this.pageNumber = 1;
        this.contacts = [
            {
                name: 'Mark',
                email: 'markG@gmail.com',
                phone: 4383345534,
                position: 'manager',
                country: 'Germany',
                human: true
            },
            {
                name: 'Yandex',
                email: 'glebG@gmail.com',
                phone: 483483838,
                position: 'seo-manager',
                country: 'France',
                human: false
            },
            {
                name: 'Boris',
                email: 'boris@gmail.com',
                phone: 4838323488,
                position: 'manager',
                country: 'Italy',
                human: true
            },
            {
                name: 'Yandex',
                email: 'yuri@gmail.com',
                phone: 4334834843,
                position: 'seo-manager',
                country: 'Spain',
                human: false
            },
            {
                name: 'Yuri',
                email: 'markG@gmail.com',
                phone: 443434833,
                position: 'manager',
                country: 'Denmark',
                human: true
            },
            {
                name: 'Gleb',
                email: 'glebG@gmail.com',
                phone: 782393334,
                position: 'seo-manager',
                country: 'Russia',
                human: true
            },
            {
                name: 'Google',
                email: 'markG@gmail.com',
                phone: 147233477,
                position: 'manager',
                country: 'Ukraine',
                human: false
            },
            {
                name: 'Yandex',
                email: 'glebG@gmail.com',
                phone: 167746796,
                position: 'seo-manager',
                country: 'Greece',
                human: false
            },
            {
                name: 'Google',
                email: 'markG@gmail.com',
                phone: 7764353644,
                position: 'manager',
                country: 'England',
                human: false
            },
            {
                name: 'Yandex',
                email: 'glebG@gmail.com',
                phone: 324113331,
                position: 'seo-manager',
                country: 'USA',
                human: false
            },
            {
                name: 'Google',
                email: 'markG@gmail.com',
                phone: 454554455,
                position: 'manager',
                country: 'Brazil',
                human: false
            },
            {
                name: 'Yandex',
                email: 'glebG@gmail.com',
                phone: 888888888,
                position: 'seo-manager',
                country: 'Belarus',
                human: false
            }
        ];
    }
    TableComponent.prototype.getPage = function () {
        var _this = this;
        var contactsList = this.contacts || [];
        if (this.sortField !== null) {
            contactsList = contactsList.sort(function (a, b) {
                if (typeof a[_this.sortField] === 'number') {
                    return a[_this.sortField] - b[_this.sortField];
                }
                else {
                    return a[_this.sortField].localeCompare(b[_this.sortField]);
                }
            });
        }
        if (contactsList === null || contactsList.length < this.pageSize) {
            return contactsList;
        }
        else {
            if (this.pageNumber > 1) {
                return contactsList.slice((this.pageNumber - 1) * this.pageSize, this.pageNumber * this.pageSize);
            }
            else {
                return contactsList.slice(0, this.pageNumber * this.pageSize);
            }
        }
    };
    TableComponent.prototype.changeSort = function (field) {
        if (this.sortField === field) {
            this.sortField = null;
        }
        else {
            this.sortField = field;
        }
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\OSPanel\domains\anatoliymoskalenko.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map