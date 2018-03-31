webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".text-center{\r\n  text-align: center;\r\n}\r\n\r\n.navmenu{\r\n  position: fixed;\r\n  z-index: 2;\r\n  -webkit-box-shadow: 0 1px 6px rgba(0,0,0,0.16), 0 1px 6px rgba(0,0,0,0.23);\r\n          box-shadow: 0 1px 6px rgba(0,0,0,0.16), 0 1px 6px rgba(0,0,0,0.23);\r\n  color: #ffffff;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.navmenu .title{\r\n  float: right;\r\n}\r\n\r\n.subnav{\r\n  position: fixed;\r\n  background: #f5f5f5;\r\n  color: #333333;\r\n  bottom: 0;\r\n  z-index: 2;\r\n  padding: 0px;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 -1px 3px rgba(0,0,0,0.12), 0 -1px 2px rgba(0,0,0,0.24);\r\n          box-shadow: 0 -1px 3px rgba(0,0,0,0.12), 0 -1px 2px rgba(0,0,0,0.24);\r\n}\r\n\r\n.mat-toolbar-row{\r\n  padding: 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row .mat-button{\r\n  margin: 0px 0px;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  min-width: 72px;\r\n}\r\n\r\n.subnav .mat-toolbar-row .mat-button{\r\n  padding: 8px 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row a{\r\n  padding: 0px 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row ul{\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.subnav .mat-toolbar-row li{\r\n  list-style: none;\r\n  max-height: 20px;\r\n}\r\n\r\n.mat-icon{\r\n  font-size: 22px;\r\n}\r\n\r\n/*\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-sidenav-content {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.example-sidenav {\r\n  padding: 20px;\r\n}*/\r\n\r\n@media only screen and (min-width: 400px){\r\n  .subnav .mat-toolbar-row .mat-button{\r\n    min-width: 83px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 340px){\r\n  .subnav .mat-toolbar-row .mat-button{\r\n    min-width: 64px;\r\n    font-size: 10px;\r\n  }\r\n  .mat-icon{\r\n    font-size: 16px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"navmenu\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <a mat-icon-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon><i class=\"fas fa-bars\"></i></mat-icon>\r\n    </a>\r\n\r\n    <span class=\"nav-space\"></span>\r\n\r\n    <img class=\"nav-logo\" src=\"../assets/images/idot-logo36.png\" alt=\"idot logo\">\r\n\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"example-container\">\r\n  <mat-sidenav #sidenav class=\"example-sidenav\">\r\n    <p>Sidenav content goes here!</p>\r\n  </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n<mat-toolbar class=\"subnav\">\r\n  <mat-toolbar-row>\r\n    <a mat-button routerLink=\"/login\" routerLinkActive=\"router-link-active\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-home\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Home</span>\r\n        </li>\r\n      </ul>\r\n    </a>\r\n    <a mat-button routerLink=\"/meus-pets\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-paw\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Meus Pets</span>\r\n        </li>\r\n      </ul>\r\n\r\n    </a>\r\n    <a mat-button routerLink=\"/add-pet\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-plus\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Adicionar</span>\r\n        </li>\r\n      </ul>\r\n\r\n    </a>\r\n    <a mat-button routerLink=\"/favoritos\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-heart\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Favoritos</span>\r\n        </li>\r\n      </ul>\r\n\r\n    </a>\r\n    <a mat-button routerLink=\"/pesquisar\">\r\n      <ul>\r\n        <li>\r\n          <mat-icon><i class=\"fas fa-search\"></i></mat-icon>\r\n        </li>\r\n        <li>\r\n          <span class=\"text-center\">Pesquisar</span>\r\n        </li>\r\n      </ul>\r\n    </a>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_form_field__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_input__["a" /* MatInputModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "html, body{\r\n  background: #753bab !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-login\">\n  <mat-card>\n\n    <div class=\"col-md-12\">\n      <form>\n\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-12\">\n            <mat-form-field>\n              <input matInput placeholder=\"Email\" required>\n              <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"col-md-12\">\n            <mat-form-field>\n              <input matInput placeholder=\"Senha\" [type]=\"hide ? 'password' : 'text'\">\n              <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"col-md-12\">\n          <div class=\"button-row row justify-content-center\">\n            <button mat-raised-button type=\"submit\" color=\"primary\">Confirmar</button>\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.hide = true;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email]);
    }
    LoginComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'Você deve preencher seu email' :
            this.email.hasError('email') ? 'Email incorreto' :
                '';
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map