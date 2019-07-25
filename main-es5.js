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

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n\r\n  <app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category/category.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/category.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>category works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/customer.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/customer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>customer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n        <div class=\"footer\">>\n            <p>저작권</p>\n            </div>\n      </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logo/logo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logo/logo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>logo works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav-bar/nav-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n        <div class=\"container\">\n          <h1><a routerLink=\"/\">Logo</a></h1>  \n      \n          <!-- \n            routerLink => 내가 누른 메뉴로 컴포넌트 화면을 전환할 때 사용하는 기능\n            routerLinkActive => 내가 누른 메뉴가 활성화 될 수 있도록 클래스를 추가하는 기능\n           -->\n          <ul>\n            <li routerLinkActive=\"active\"><a routerLink=\"/category\">category</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"/story\">story</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"/store\">store</a></li>\n            <li routerLinkActive=\"active\"><a routerLink=\"/customer\">customer</a></li>\n          </ul>\n        </div>\n      </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store/store.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>store works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/story/story.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/story/story.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>story works!</p>\n"

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
        this.title = 'kakaofriends';
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
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/logo/logo.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");












var router = [
    //기본적으로 보여줄 컴포넌트를 redirectTo에 설정한다.
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'logo', component: _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"] },
    { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"] },
    { path: 'story', component: _story_story_component__WEBPACK_IMPORTED_MODULE_9__["StoryComponent"] },
    { path: 'store', component: _store_store_component__WEBPACK_IMPORTED_MODULE_7__["StoreComponent"] },
    { path: 'customer', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                _store_store_component__WEBPACK_IMPORTED_MODULE_7__["StoreComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"],
                _story_story_component__WEBPACK_IMPORTED_MODULE_9__["StoryComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(router)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        })
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        })
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{background: salmon; height: 100px; width: 100%; position: fixed; bottom: 0;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksa0JBQWtCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e2JhY2tncm91bmQ6IHNhbG1vbjsgaGVpZ2h0OiAxMDBweDsgd2lkdGg6IDEwMCU7IHBvc2l0aW9uOiBmaXhlZDsgYm90dG9tOiAwO31cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/logo/logo.component.css":
/*!*****************************************!*\
  !*** ./src/app/logo/logo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ28vbG9nby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/logo/logo.component.ts":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/index.js!./src/app/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.css */ "./src/app/logo/logo.component.css")]
        })
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{background: salmon; height: 100px;}\r\nnav h1{line-height: 100px;}\r\nnav ul{\r\n    position: absolute; right:0; top:50%; -webkit-transform: translateY(-50%); transform: translateY(-50%);\r\n}\r\nnav ul li{float: left; list-style: none;}\r\nnav ul li.active a{background: #fff; color:salmon;}\r\nnav ul li a{text-transform: uppercase; padding: 10px 20px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxrQkFBa0IsRUFBRSxhQUFhLENBQUM7QUFDdEMsT0FBTyxrQkFBa0IsQ0FBQztBQUMxQjtJQUNJLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsbUNBQTJCLEVBQTNCLDJCQUEyQjtBQUNyRTtBQUNBLFVBQVUsV0FBVyxFQUFFLGdCQUFnQixDQUFDO0FBQ3hDLG1CQUFtQixnQkFBZ0IsRUFBRSxZQUFZLENBQUM7QUFDbEQsWUFBWSx5QkFBeUIsRUFBRSxrQkFBa0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e2JhY2tncm91bmQ6IHNhbG1vbjsgaGVpZ2h0OiAxMDBweDt9XHJcbm5hdiBoMXtsaW5lLWhlaWdodDogMTAwcHg7fVxyXG5uYXYgdWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OjA7IHRvcDo1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5uYXYgdWwgbGl7ZmxvYXQ6IGxlZnQ7IGxpc3Qtc3R5bGU6IG5vbmU7fVxyXG5uYXYgdWwgbGkuYWN0aXZlIGF7YmFja2dyb3VuZDogI2ZmZjsgY29sb3I6c2FsbW9uO31cclxubmF2IHVsIGxpIGF7dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgcGFkZGluZzogMTBweCAyMHB4O30iXX0= */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/store/store.component.css":
/*!*******************************************!*\
  !*** ./src/app/store/store.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoreComponent = /** @class */ (function () {
    function StoreComponent() {
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.css */ "./src/app/store/store.component.css")]
        })
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/story/story.component.css":
/*!*******************************************!*\
  !*** ./src/app/story/story.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3J5L3N0b3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/story/story.component.ts":
/*!******************************************!*\
  !*** ./src/app/story/story.component.ts ***!
  \******************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoryComponent = /** @class */ (function () {
    function StoryComponent() {
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    StoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-story',
            template: __webpack_require__(/*! raw-loader!./story.component.html */ "./node_modules/raw-loader/index.js!./src/app/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.css */ "./src/app/story/story.component.css")]
        })
    ], StoryComponent);
    return StoryComponent;
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

module.exports = __webpack_require__(/*! d:\학생방\ncs웹퍼블리셔\웹표준코딩실무\황희경\06.이름_카카오프렌즈\kakaofriends\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map