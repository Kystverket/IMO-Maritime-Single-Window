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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guards_auth_guard__ = __webpack_require__("./src/app/auth/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guards_error_guard__ = __webpack_require__("./src/app/auth/guards/error.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_guards_login_auth_guard__ = __webpack_require__("./src/app/auth/guards/login-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_content_main_content_component__ = __webpack_require__("./src/app/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_email_confirmation_email_confirmation_component__ = __webpack_require__("./src/app/auth/email-confirmation/email-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guards_email_confirmation_guard__ = __webpack_require__("./src/app/auth/guards/email-confirmation.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_password_reset_password_reset_component__ = __webpack_require__("./src/app/auth/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guards_password_reset_guard__ = __webpack_require__("./src/app/auth/guards/password-reset.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_error_error_component__ = __webpack_require__("./src/app/auth/error/error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guards_login_auth_guard__["a" /* LoginAuthGuard */]]
    },
    {
        path: 'ConfirmEmail',
        component: __WEBPACK_IMPORTED_MODULE_7__auth_email_confirmation_email_confirmation_component__["a" /* EmailConfirmationComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_guards_email_confirmation_guard__["a" /* EmailConfirmationGuard */]]
    },
    {
        path: 'ResetPassword',
        component: __WEBPACK_IMPORTED_MODULE_9__auth_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guards_password_reset_guard__["a" /* PasswordResetGuard */]]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__main_content_main_content_component__["a" /* MainContentComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'error',
        component: __WEBPACK_IMPORTED_MODULE_11__auth_error_error_component__["a" /* ErrorComponent */]
    },
    {
        // TODO: Make ErrorComponent
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_11__auth_error_error_component__["a" /* ErrorComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guards_error_guard__["a" /* ErrorGuard */]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes
                //      { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routedComponents = [__WEBPACK_IMPORTED_MODULE_6__main_content_main_content_component__["a" /* MainContentComponent */], __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".page-content {\r\n    margin-bottom: -100px;\r\n}\r\n\r\n.footer-gap {\r\n    height: 100px;\r\n}\r\n\r\n/* Loading screen */\r\n\r\n#overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 1010;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n#loading-box {\r\n    position: fixed;\r\n    left: 50%;\r\n    top: 50%;\r\n    height: 200px;\r\n    width: 400px;\r\n    margin-left: -200px;\r\n    margin-top: -100px;\r\n    z-index: 1011;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"overlay\" *ngIf=\"loadingScreen && loadingScreen.isLoading\">\r\n    <div id=\"loading-box\" class=\"text-center\">\r\n        <img *ngIf=\"loadingScreen.loadingIcon\" src='{{loadingIconPath}}{{loadingScreen.loadingIcon}}' />\r\n        <img *ngIf=\"!loadingScreen.loadingIcon\" src='{{loadingIconPath}}portcall.gif' />\r\n        <h1>{{ loadingScreen.loadingText | uppercase }}</h1>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"page-content\" [ngStyle]=\"{'min-height': clientHeight + 'px'}\">\r\n    <router-outlet></router-outlet>\r\n    <div class=\"footer-gap\"></div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(contentService) {
        this.contentService = contentService;
        this.loadingIconPath = 'assets/images/animations/';
        this.clientHeight = window.innerHeight;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.loadingScreen$.subscribe(function (loadingScreenData) {
            if (loadingScreenData) {
                _this.loadingScreen = loadingScreenData;
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export tokenGetter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authenticate_xhr_backend__ = __webpack_require__("./src/authenticate-xhr.backend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guards_auth_guard__ = __webpack_require__("./src/app/auth/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_guards_email_confirmation_guard__ = __webpack_require__("./src/app/auth/guards/email-confirmation.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_guards_error_guard__ = __webpack_require__("./src/app/auth/guards/error.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guards_login_auth_guard__ = __webpack_require__("./src/app/auth/guards/login-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_guards_password_reset_guard__ = __webpack_require__("./src/app/auth/guards/password-reset.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_password_change_password_change_component__ = __webpack_require__("./src/app/auth/password-change/password-change.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_password_reset_password_reset_component__ = __webpack_require__("./src/app/auth/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_content_content_container_content_container_module__ = __webpack_require__("./src/app/main-content/content-container/content-container.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__main_content_footer_footer_component__ = __webpack_require__("./src/app/main-content/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_content_header_header_component__ = __webpack_require__("./src/app/main-content/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_auth_request_service__ = __webpack_require__("./src/app/shared/services/auth.request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_10__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__main_content_content_container_content_container_module__["a" /* ContentContainerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:4200'],
                        blacklistedRoutes: ['localhost:4200/login']
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__main_content_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__main_content_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__auth_password_change_password_change_component__["a" /* PasswordChangeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__auth_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["b" /* routedComponents */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["g" /* XHRBackend */], useClass: __WEBPACK_IMPORTED_MODULE_7__authenticate_xhr_backend__["a" /* AuthenticateXHRBackend */] },
                __WEBPACK_IMPORTED_MODULE_21__shared_services_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_11__auth_guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_23__shared_services_auth_request_service__["a" /* AuthRequest */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_27__shared_utils_config_service__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_services_constants_service__["a" /* ConstantsService */],
                __WEBPACK_IMPORTED_MODULE_25__shared_services_content_service__["a" /* ContentService */],
                __WEBPACK_IMPORTED_MODULE_12__auth_guards_email_confirmation_guard__["a" /* EmailConfirmationGuard */],
                __WEBPACK_IMPORTED_MODULE_13__auth_guards_error_guard__["a" /* ErrorGuard */],
                __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["a" /* JwtHelperService */],
                __WEBPACK_IMPORTED_MODULE_14__auth_guards_login_auth_guard__["a" /* LoginAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_26__shared_services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_15__auth_guards_password_reset_guard__["a" /* PasswordResetGuard */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

function tokenGetter() {
    return localStorage.getItem('auth_token');
}


/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_ssn_bg_ssn_bg_component__ = __webpack_require__("./src/app/shared/components/ssn-bg/ssn-bg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_ssn_card_ssn_card_component__ = __webpack_require__("./src/app/shared/components/ssn-card/ssn-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__email_confirmation_email_confirmation_component__ = __webpack_require__("./src/app/auth/email-confirmation/email-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__error_error_component__ = __webpack_require__("./src/app/auth/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_uri_query_service__ = __webpack_require__("./src/app/shared/services/uri-query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__password_password_component__ = __webpack_require__("./src/app/auth/password/password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_12__password_password_component__["a" /* PasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_ssn_bg_ssn_bg_component__["a" /* SsnBgComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_components_ssn_card_ssn_card_component__["a" /* SsnCardComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__email_confirmation_email_confirmation_component__["a" /* EmailConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_12__password_password_component__["a" /* PasswordComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__shared_services_uri_query_service__["a" /* UriQueryService */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/email-confirmation/email-confirmation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/email-confirmation/email-confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n  <app-ssn-bg header=\"EMAIL CONFIRMATION\" icon=\"user.png\">\r\n\r\n    <app-ssn-card header=\"Password reset form\">\r\n      <div class=\"row\">\r\n        <h3>Thank you for confirming your email address.</h3>\r\n        \r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n            <h3>You will be redirected to /login in... </h3>\r\n        </div>\r\n        <div class=\"col\">\r\n            <h1>{{secondsRemaining}} seconds</h1>\r\n        </div>\r\n      </div>\r\n\r\n    </app-ssn-card>\r\n  </app-ssn-bg>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/auth/email-confirmation/email-confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_uri_query_service__ = __webpack_require__("./src/app/shared/services/uri-query.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailConfirmationComponent = /** @class */ (function () {
    function EmailConfirmationComponent(router, activatedRoute, accountService, uriQueryService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.uriQueryService = uriQueryService;
        this.secondsRemaining = 10;
    }
    EmailConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tokenQueryModel = this.uriQueryService.getTokenQueryModel(this.activatedRoute.snapshot.queryParams);
        // console.log(tokenQueryModel);
        this.accountService.confirmEmail(tokenQueryModel).subscribe(function (result) {
            // If email confirmation token was valid
            if (result) {
                // Update html to reflect email successfully confirmed
                console.log('email confirmation was successful');
                // Get password reset token
                _this.accountService.getPasswordResetToken(tokenQueryModel.userId)
                    .subscribe(function (passwordResetToken) {
                    if (passwordResetToken) {
                        console.log({ passwordResetToken: passwordResetToken });
                        // Redirect? Or present link to navigate?
                        // Redirect:
                        // Navigate to reset password and supply token as query parameter in URI
                        // this.router.navigate(['ResetPassword'], { queryParams: userId, token});
                        // Present link? ...
                    }
                });
            }
        }, function (error) {
            // Update html to reflect email confirmation was unsuccessful
            console.log('email confirmation was unsuccessful');
        });
    };
    EmailConfirmationComponent.prototype.startRedirect = function (queryModel) {
        var _this = this;
        var intervalId = setInterval(function (activatedRoute) {
            if (_this.secondsRemaining === 0) {
                clearInterval(intervalId);
                _this.router.navigate(['/ResetPassword'], {
                    queryParams: {
                        userId: queryModel.userId,
                        token: queryModel.token
                    }
                });
            }
            else {
                _this.secondsRemaining--;
            }
        }, 1000);
        /* activatedRoute.queryParamMap
              .map((params: Params) => params.params)
              .subscribe((params) => {
                this.router.navigate(['/ResetPassword'], {
                  queryParams: {
                    userId: params.userId,
                    token: params.token
                  }
                }
                );
                console.log(params);
              }
            ); */
    };
    EmailConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-email-confirmation',
            template: __webpack_require__("./src/app/auth/email-confirmation/email-confirmation.component.html"),
            styles: [__webpack_require__("./src/app/auth/email-confirmation/email-confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_uri_query_service__["a" /* UriQueryService */]])
    ], EmailConfirmationComponent);
    return EmailConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/auth/error/error.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n  <app-ssn-bg header=\"ERROR PAGE\">\r\n    <!-- <app-ssn-card> -->\r\n      <div class=\"jumbotron bg-ssn-light text-ssn\">\r\n      <div class=\"row\">\r\n        <img src=\"../../../assets/images/Validation/validation-error.png\"\r\n        height=\"64px\" width=\"64px\" alt=\"Error\" />\r\n      </div>\r\n      <div class=\"row\">\r\n        <p>Something went wrong...</p>\r\n      </div>\r\n    <!-- </app-ssn-card> -->\r\n    </div>\r\n  </app-ssn-bg>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error',
            template: __webpack_require__("./src/app/auth/error/error.component.html"),
            styles: [__webpack_require__("./src/app/auth/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/auth/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService, loginService) {
        this.router = router;
        this.authService = authService;
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (!this.authService.hasToken()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return this.authService.hasValidToken()
                .map(function (tokenValid) {
                if (!tokenValid) {
                    _this.loginService.logout();
                    _this.router.navigate(['/login']);
                    return false;
                }
                else {
                    return true;
                }
            });
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_login_service__["a" /* LoginService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/guards/email-confirmation.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailConfirmationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailConfirmationGuard = /** @class */ (function () {
    function EmailConfirmationGuard(router) {
        this.router = router;
    }
    EmailConfirmationGuard.prototype.canActivate = function (next, state) {
        if (this.paramsNull([next.queryParams['userId'], next.queryParams['token']])) {
            this.router.navigate(['/error']);
            return false;
        }
        return true;
    };
    // Checks if any of the query parameters are null/undefined or empty string
    EmailConfirmationGuard.prototype.paramsNull = function (params) {
        return params.some(function (param) {
            // Checks for null/undefined and empty string
            return !param || param === '';
        });
    };
    EmailConfirmationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EmailConfirmationGuard);
    return EmailConfirmationGuard;
}());



/***/ }),

/***/ "./src/app/auth/guards/error.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorGuard = /** @class */ (function () {
    function ErrorGuard(router, authService, loginService) {
        this.router = router;
        this.authService = authService;
        this.loginService = loginService;
    }
    ErrorGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (!this.authService.hasToken()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return this.authService.hasValidToken()
                .map(function (tokenValid) {
                if (!tokenValid) {
                    _this.loginService.logout();
                    _this.router.navigate(['/login']);
                    return false;
                }
                else {
                    // TODO: redirect to an error page
                    _this.router.navigate(['']);
                    return true;
                }
            });
        }
    };
    ErrorGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_login_service__["a" /* LoginService */]])
    ], ErrorGuard);
    return ErrorGuard;
}());



/***/ }),

/***/ "./src/app/auth/guards/login-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginAuthGuard = /** @class */ (function () {
    function LoginAuthGuard(router, authService, loginService) {
        this.router = router;
        this.authService = authService;
        this.loginService = loginService;
    }
    LoginAuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (!this.authService.hasToken()) {
            return true;
        }
        else {
            return this.authService.hasValidToken()
                .map(function (tokenValid) {
                console.log(tokenValid);
                if (tokenValid) {
                    _this.router.navigate(['']);
                    return false;
                }
                else {
                    /* User tries to access login route with an invalid token
                     * This is OK, just remove relevant variables from localStorage
                     * so user can receive a new token upon login. */
                    _this.loginService.logout();
                    return true;
                }
            });
        }
    };
    LoginAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_login_service__["a" /* LoginService */]])
    ], LoginAuthGuard);
    return LoginAuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/guards/password-reset.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PasswordResetGuard = /** @class */ (function () {
    function PasswordResetGuard(router) {
        this.router = router;
    }
    PasswordResetGuard.prototype.canActivate = function (next, state) {
        // Verify query params are present
        if (this.paramsNull([next.queryParams['userId'], next.queryParams['token']])) {
            this.router.navigate(['/error']);
            return false;
        }
        return true;
    };
    // Checks if any of the query parameters are null/undefined or empty string
    PasswordResetGuard.prototype.paramsNull = function (params) {
        return params.some(function (param) {
            // Checks for null/undefined and empty string
            return !param || param === '';
        });
    };
    PasswordResetGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PasswordResetGuard);
    return PasswordResetGuard;
}());



/***/ }),

/***/ "./src/app/auth/password-change/password-change.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/password-change/password-change.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  password-change works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/auth/password-change/password-change.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordChangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordChangeComponent = /** @class */ (function () {
    function PasswordChangeComponent() {
    }
    PasswordChangeComponent.prototype.ngOnInit = function () {
    };
    PasswordChangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password-change',
            template: __webpack_require__("./src/app/auth/password-change/password-change.component.html"),
            styles: [__webpack_require__("./src/app/auth/password-change/password-change.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordChangeComponent);
    return PasswordChangeComponent;
}());



/***/ }),

/***/ "./src/app/auth/password-reset/password-reset.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/password-reset/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<app-password header=\"Reset\"></app-password>"

/***/ }),

/***/ "./src/app/auth/password-reset/password-reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent() {
        this.inputOne = '';
        this.inputTwo = '';
        this.passwordMatch = false;
        this.fieldsFilled = false;
    }
    PasswordResetComponent.prototype.checkFill = function () {
        this.fieldsFilled = this.inputOne !== '' && this.inputTwo !== '';
    };
    PasswordResetComponent.prototype.checkPasswords = function () {
        this.checkFill();
        this.passwordMatch =
            !(this.inputOne === '' || this.inputTwo === '') &&
                this.inputOne === this.inputTwo;
    };
    PasswordResetComponent.prototype.resetPassword = function () {
        return false;
    };
    PasswordResetComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PasswordResetComponent.prototype, "header", void 0);
    PasswordResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password-reset',
            template: __webpack_require__("./src/app/auth/password-reset/password-reset.component.html"),
            styles: [__webpack_require__("./src/app/auth/password-reset/password-reset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/auth/password/password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n  <app-ssn-bg header=\"{{ header + ' password' | uppercase }}\" icon=\"user.png\">\r\n    <app-ssn-card header=\"Password {{header}} form\">\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label-sm no-wrap col-sm-2 col-md-2 col-lg-2 col-xl-2\" for=\"first_password\">New password</label>\r\n        <div class=\"col\">\r\n          <input id=\"first_password\" name=\"first_password\" class=\"form-control form-control-sm\" type=\"password\" placeholder=\"Enter a new password\"\r\n            [(ngModel)]=\"inputOne\" (blur)=\"checkPasswords()\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row mb-0\">\r\n        <label class=\"col-form-label-sm no-wrap col-sm-2 col-md-2 col-lg-2 col-xl-2\" for=\"second_password\">Retype password</label>\r\n        <div class=\"col\">\r\n          <input id=\"second_password\" name=\"second_password\" class=\"form-control form-control-sm\" type=\"password\" placeholder=\"Retype the password\"\r\n            [(ngModel)]=\"inputTwo\" (blur)=\"checkPasswords()\">\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"fieldsFilled\" class=\"row\">\r\n        <div class=\"col-sm-2 col-md-2 col-lg-2 col-xl-2\">\r\n        </div>\r\n        <div class=\"col\" *ngIf=\"!passwordMatch\">\r\n          <img height=\"16px\" src=\"assets/images/icons/128x128/red/warning.png\">\r\n          <small class=\"text-danger\">Passwords does not match</small>\r\n        </div>\r\n        <div class=\"col\" *ngIf=\"passwordMatch\">\r\n            <img height=\"16px\" src=\"assets/images/icons/128x128/green/checkmark.png\">\r\n            <small class=\"text-success\">Passwords match</small>\r\n          </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"!passwordMatch\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <button class=\"btn btn-ssn\" disabled>{{header}} password</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Passwords typed in and passords match -->\r\n      <div *ngIf=\"passwordMatch\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <button class=\"btn btn-ssn\" (click)=\"resetPassword()\">{{header}} password</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </app-ssn-card>\r\n  </app-ssn-bg>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordComponent = /** @class */ (function () {
    function PasswordComponent() {
        this.inputOne = '';
        this.inputTwo = '';
        this.passwordMatch = false;
        this.fieldsFilled = false;
    }
    PasswordComponent.prototype.checkFill = function () {
        this.fieldsFilled = this.inputOne !== '' && this.inputTwo !== '';
    };
    PasswordComponent.prototype.checkPasswords = function () {
        this.checkFill();
        this.passwordMatch =
            !(this.inputOne === '' || this.inputTwo === '') &&
                this.inputOne === this.inputTwo;
    };
    PasswordComponent.prototype.resetPassword = function () {
        return false;
    };
    PasswordComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PasswordComponent.prototype, "header", void 0);
    PasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password',
            template: __webpack_require__("./src/app/auth/password/password.component.html"),
            styles: [__webpack_require__("./src/app/auth/password/password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n  <div class=\"jumbotron bg-ssn-light text-ssn\">\r\n    <div class=\"d-table mb-3 mx-auto\">\r\n      <div class=\"d-table-row\">\r\n        <div class=\"d-table-cell\">\r\n          <img src=\"assets/images/flags/ag.png\" height=\"80px\">\r\n        </div>\r\n        <div class=\"d-table-cell px-3\">\r\n          <h2>IMO Maritime Single Window</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"email\" class=\"col-form-label-sm no-wrap col-sm-3 col-md-2 col-lg-2\">Email address:</label>\r\n        <div class=\"col my-auto\">\r\n          <input id=\"email\" name=\"userName\" type=\"email\" class=\"form-control form-control-sm\"\r\n            placeholder=\"Enter email address\"\r\n            [(ngModel)]=\"credentials.userName\" #email=\"ngModel\" autocomplete=\"username\" tmFocus required>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"password\" class=\"col-form-label-sm no-wrap col-sm-3 col-md-2 col-lg-2\">Password:</label>\r\n        <div class=\"col my-auto\">\r\n          <input id=\"password\" name=\"password\" type=\"password\" #pw class=\"form-control form-control-sm\"\r\n          placeholder=\"Enter password\"\r\n            [(ngModel)]=\"credentials.password\" autocomplete=\"current-password\" required>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" (click)=\"pw.select()\" class=\"btn btn-light\" [disabled]=\"f.invalid || isRequesting\">SIGN IN</button>\r\n      </div>\r\n\r\n      <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n        <span>{{errors}}</span>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
// Based on https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/src/app/account/login-form/login-form.component.ts
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
    function LoginComponent(loginService, contentService, router, activatedRoute, accountService) {
        this.loginService = loginService;
        this.contentService = contentService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.login_title = 'LOGIN';
        this.submitted = false;
        this.credentials = { userName: '', password: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            // this.credentials.userName = param['userName'];
        });
    };
    LoginComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.errors = '';
        if (valid) {
            this.isRequesting = true;
            this.loginService.login(value.userName, value.password)
                .finally(function () {
                _this.isRequesting = false;
            })
                .subscribe(function (result) {
                // Login succeeded
                if (result) {
                    // Set user claims observable so they are
                    // available for the entire application
                    _this.accountService.getUserClaims()
                        .finally(function () {
                        _this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_PORT_CALLS);
                        _this.router.navigate(['']);
                    })
                        .subscribe(function (claims) {
                        if (claims) {
                            _this.accountService.setUserClaims(claims);
                            localStorage.setItem('user_claims', JSON.stringify(claims));
                        }
                    });
                }
                // Login failed
            }, function (error) {
                _this.errors = error;
                _this.credentials.password = '';
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_app_shared_services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_account_service__["a" /* AccountService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/basis-data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasisDataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_location_service__ = __webpack_require__("./src/app/shared/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_services_organization_service__ = __webpack_require__("./src/app/shared/services/organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__location_register_location_register_location_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__location_view_location_info_location_button_row_location_button_row_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/location/view-location-info/location-button-row/location-button-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__location_view_location_info_view_location_info_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/location/view-location-info/view-location-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__organization_register_organization_register_organization_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__organization_view_organization_info_view_organization_info_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/organization/view-organization-info/view-organization-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ship_register_ship_certificate_of_registry_certificate_of_registry_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/ship/register-ship/certificate-of-registry/certificate-of-registry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ship_register_ship_register_ship_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ship_view_ship_info_view_ship_info_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/ship/view-ship-info/view-ship-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_register_user_register_user_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var BasisDataModule = /** @class */ (function () {
    function BasisDataModule() {
    }
    BasisDataModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9_app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_smart_table__["b" /* Ng2SmartTableModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__user_register_user_register_user_component__["a" /* RegisterUserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__ship_register_ship_register_ship_component__["a" /* RegisterShipComponent */],
                __WEBPACK_IMPORTED_MODULE_18__ship_view_ship_info_view_ship_info_component__["a" /* ViewShipInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__organization_register_organization_register_organization_component__["a" /* RegisterOrganizationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__organization_view_organization_info_view_organization_info_component__["a" /* ViewOrganizationInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__location_register_location_register_location_component__["a" /* RegisterLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__location_view_location_info_view_location_info_component__["a" /* ViewLocationInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__location_view_location_info_location_button_row_location_button_row_component__["a" /* LocationButtonRowComponent */],
                __WEBPACK_IMPORTED_MODULE_16__ship_register_ship_certificate_of_registry_certificate_of_registry_component__["a" /* CertificateOfRegistryComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_19__user_register_user_register_user_component__["a" /* RegisterUserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__ship_view_ship_info_view_ship_info_component__["a" /* ViewShipInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__ship_register_ship_register_ship_component__["a" /* RegisterShipComponent */],
                __WEBPACK_IMPORTED_MODULE_11__location_register_location_register_location_component__["a" /* RegisterLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__organization_register_organization_register_organization_component__["a" /* RegisterOrganizationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__organization_view_organization_info_view_organization_info_component__["a" /* ViewOrganizationInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__location_view_location_info_view_location_info_component__["a" /* ViewLocationInfoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6_app_shared_services_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_7_app_shared_services_organization_service__["a" /* OrganizationService */],
                __WEBPACK_IMPORTED_MODULE_8_app_shared_services_ship_service__["a" /* ShipService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__location_view_location_info_location_button_row_location_button_row_component__["a" /* LocationButtonRowComponent */]
            ]
        })
    ], BasisDataModule);
    return BasisDataModule;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-bg header=\"{{ locationHeader }}\" icon=\"location.png\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header=\"Location Information\" icon=\"pax.png\">\r\n        <form>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"location_type_dropdown\">Location Type</label>\r\n                  <div ngbDropdown>\r\n                    <button class=\"btn btn-sm btn-ssn\" id=\"location_type_dropdown\" ngbDropdownToggle> {{ locationTypeDropdownString }}</button>\r\n                    <div ngbDropdownMenu aria-labelledby=\"location_type_dropdown\">\r\n                      <button class=\"dropdown-item\" *ngFor=\"let locationType of locationTypeList\" (click)=\"selectLocationType(locationType)\">{{ locationType.name }}</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"location_name\">Location Name</label>\r\n                  <input [(ngModel)]=\"locationModel.name\" name=\"locationName\" type=\"text\" class=\"form-control form-control-sm\" id=\"location_name\"\r\n                    placeholder=\"Enter location name\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"location_code\">Location Code</label>\r\n                  <input [(ngModel)]=\"locationModel.locationCode\" name=\"locationCode\" type=\"text\" class=\"form-control form-control-sm\" id=\"location_code\"\r\n                    placeholder=\"Enter location code\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\" *ngIf=\"!countrySelected\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"country_select\">Country</label>\r\n                  <ng-select id=\"country_select\" name=\"country_select\" [items]=\"countryList\" [multiple]=\"false\" [closeOnSelect]=\"true\" bindLabel=\"name\"\r\n                    placeholder=\"Select country\" [(ngModel)]=\"selectedCountry\" (change)=\"selectCountry($event)\"></ng-select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6\" *ngIf=\"countrySelected\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"country\">Country</label>\r\n                  <div class=\"input-group\">\r\n                    <input id=\"country\" name=\"country\" type=\"text\" class=\"form-control form-control-sm\" [ngModel]=\"selectedCountry.name\" disabled=\"true\"\r\n                    />\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-sm btn-ssn\" (click)=\"deselectCountry()\">\r\n                        <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"16px\">\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"location_post_code\">Post Code</label>\r\n                  <input [(ngModel)]=\"locationModel.postCode\" name=\"locationPostCode\" type=\"text\" class=\"form-control form-control-sm\" id=\"location_post_code\"\r\n                    placeholder=\"Enter location post code\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"text-center\">\r\n        <app-ssn-card header='{{ confirmHeader }}' icon=\"checkmark.png\">\r\n          <div class=\"text-center\" *ngIf=\"!(locationTypeSelected && locationModel.name && countrySelected)\">\r\n            <p *ngIf=\"!locationTypeSelected\" class=\"no-wrap mb-0\">Location type not selected.</p>\r\n            <p *ngIf=\"!locationModel.name\" class=\"no-wrap mb-0\">Location name not set.</p>\r\n            <p *ngIf=\"!countrySelected\" class=\"no-wrap\">Country not selected.</p>\r\n            <button class=\"btn btn-ssn\" disabled>\r\n              <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"24px\" /> {{ confirmButtonTitle }}</button>\r\n          </div>\r\n          <div class=\"text-center\" *ngIf=\"locationTypeSelected && locationModel.name && countrySelected\">\r\n            <button class=\"btn btn-ssn\" (click)=\"registerLocation()\">\r\n              <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"24px\" /> {{ confirmButtonTitle }}</button>\r\n          </div>\r\n        </app-ssn-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</app-ssn-bg>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__ = __webpack_require__("./src/app/shared/components/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_models_location_model__ = __webpack_require__("./src/app/shared/models/location-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_location_service__ = __webpack_require__("./src/app/shared/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RESULT_SUCCESS = 'Location was successfully saved to the database.';
var RESULT_FAILURE = 'There was a problem when trying to save the location to the database. Please try again later.';
var RegisterLocationComponent = /** @class */ (function () {
    function RegisterLocationComponent(locationModel, contentService, locationService, modalService) {
        this.locationModel = locationModel;
        this.contentService = contentService;
        this.locationService = locationService;
        this.modalService = modalService;
        this.locationTypeDropdownString = 'Select location type';
        this.countrySelected = false;
        this.countrySearchFailed = false;
    }
    RegisterLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationDataSubscription = this.locationService.locationData$.subscribe(function (data) {
            if (data) {
                _this.newLocation = false;
                _this.locationHeader = 'Edit Location';
                _this.confirmHeader = 'Confirm Location Changes';
                _this.confirmButtonTitle = 'Apply Changes';
                _this.locationModel = data;
                _this.selectedCountry = _this.locationModel.country;
                _this.countrySelected = true;
                _this.selectedLocationType = _this.locationModel.locationType;
                _this.locationTypeSelected = true;
                _this.locationTypeDropdownString = _this.selectedLocationType.name;
            }
            else {
                _this.newLocation = true;
                _this.locationHeader = 'Register New Location';
                _this.confirmHeader = 'Confirm Location Registration';
                _this.confirmButtonTitle = 'Register Location';
            }
        });
        this.locationTypesSubscription = this.locationService.getLocationTypes().subscribe(function (results) {
            _this.locationTypeList = results;
        }, function (error) {
            console.log(error);
        });
        this.countriesSubscription = this.locationService.getCountries().subscribe(function (results) {
            _this.countryList = results;
        }, function (error) {
            console.log(error);
        });
    };
    RegisterLocationComponent.prototype.ngOnDestroy = function () {
        this.locationDataSubscription.unsubscribe();
        this.locationTypesSubscription.unsubscribe();
        this.countriesSubscription.unsubscribe();
    };
    RegisterLocationComponent.prototype.selectCountry = function ($event) {
        this.selectedCountry = $event;
        this.locationModel.countryId = $event.countryId;
        this.countrySelected = true;
    };
    RegisterLocationComponent.prototype.deselectCountry = function () {
        this.selectedCountry = null;
        this.locationModel.country = null;
        this.locationModel.countryId = null;
        this.selectedCountry = null;
        this.countrySelected = false;
    };
    RegisterLocationComponent.prototype.selectLocationType = function (locationType) {
        this.locationModel.locationTypeId = locationType.locationTypeId;
        this.selectedLocationType = locationType;
        this.locationTypeDropdownString = locationType.name;
        this.locationTypeSelected = true;
    };
    RegisterLocationComponent.prototype.registerLocation = function () {
        var _this = this;
        if (this.newLocation) {
            this.locationService.registerLocation(this.locationModel).subscribe(function (result) {
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_SUCCESS, RESULT_SUCCESS);
            }, function (error) {
                console.log(error);
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE, RESULT_FAILURE);
            });
        }
        else {
            this.locationService.updateLocation(this.locationModel).subscribe(function (result) {
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_SUCCESS, RESULT_SUCCESS);
            }, function (error) {
                console.log(error);
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE, RESULT_FAILURE);
            });
        }
    };
    RegisterLocationComponent.prototype.goBack = function () {
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].LOCATIONS);
    };
    RegisterLocationComponent.prototype.openConfirmationModal = function (modalType, bodyText) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */]);
        modalRef.componentInstance.modalType = modalType;
        modalRef.componentInstance.bodyText = bodyText;
        modalRef.result.then(function (result) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goBack();
            }
        }, function (reason) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goBack();
            }
        });
    };
    RegisterLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-location',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4_app_shared_models_location_model__["a" /* LocationModel */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_shared_models_location_model__["a" /* LocationModel */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_services_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], RegisterLocationComponent);
    return RegisterLocationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/view-location-info/location-button-row/location-button-row.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/view-location-info/location-button-row/location-button-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-table\">\r\n  <div class=\"d-table-row\">\r\n    <div class=\"d-table-cell pl-1\" ngbTooltip=\"Edit location\">\r\n      <button class=\"btn btn-sm btn-ssn\" (click)=\"onEditClick()\">\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/edit.png\" height=\"20px\" />\r\n        </div>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/view-location-info/location-button-row/location-button-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationButtonRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_location_service__ = __webpack_require__("./src/app/shared/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LocationButtonRowComponent = /** @class */ (function () {
    function LocationButtonRowComponent(contentService, locationService) {
        this.contentService = contentService;
        this.locationService = locationService;
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    LocationButtonRowComponent.prototype.ngOnInit = function () { };
    LocationButtonRowComponent.prototype.onEditClick = function () {
        this.setContent(__WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].REGISTER_LOCATION);
    };
    LocationButtonRowComponent.prototype.setContent = function (content) {
        this.setLocation(content);
    };
    LocationButtonRowComponent.prototype.setLocation = function (content) {
        this.contentService.setLoadingScreen(true, 'location.gif', 'Loading');
        this.locationService.setLocationData(this.rowData.locationModel);
        this.contentService.setContent(content);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LocationButtonRowComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LocationButtonRowComponent.prototype, "rowData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], LocationButtonRowComponent.prototype, "edit", void 0);
    LocationButtonRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-button-row',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/location/view-location-info/location-button-row/location-button-row.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/location/view-location-info/location-button-row/location-button-row.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__["a" /* ConstantsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_services_location_service__["a" /* LocationService */]])
    ], LocationButtonRowComponent);
    return LocationButtonRowComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/view-location-info/view-location-info.component.css":
/***/ (function(module, exports) {

module.exports = "/* Smart table */\r\n:root {\r\n    --color-primary: #002d50;\r\n    --color-primary-light: #37557c;\r\n    --color-primary-dark: #000128;\r\n    --color-primary-text: #ffffff;\r\n}\r\n:host /deep/ ng2-smart-table thead {\r\n    background-color: var(--color-primary);\r\n    color: white;\r\n}\r\n:host /deep/ .ng2-smart-filter input {\r\n    color: black;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort::after {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 4px solid white;\r\n    border-top: 4px solid transparent;\r\n    border-left: 4px solid transparent;\r\n    border-right: 4px solid transparent;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.asc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    margin-bottom: 2px;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.desc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    margin-bottom: -2px;\r\n}\r\n:host /deep/ ng2-smart-table a { \r\n    color:var(--color-primary-text); \r\n}\r\n:host /deep/ a.ng2-smart-page-link.page-link {  \r\n    color: var(--color-primary-dark);\r\n    border-color: #dee2e6;\r\n}\r\n:host /deep/ span.ng2-smart-page-link.page-link { \r\n    color: var(--color-primary-dark); \r\n    background-color: #dee2e6;\r\n    border-color: #dee2e6;        \r\n}"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/view-location-info/view-location-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm col-md-6 col-lg-4\">\r\n    <app-ssn-card header='Register New Location' icon='location.png'>\r\n      <div class=\"text-center\">\r\n        <button class=\"btn btn-ssn\" (click)=\"registerNewLocation()\">Register New Location</button>\r\n      </div>\r\n    </app-ssn-card>\r\n  </div>\r\n</div>\r\n\r\n<app-ssn-card header=\"Location Search\" icon=\"pax.png\">\r\n  <app-search-location [showDropdown]=false (locationSearchResult)=\"onLocationSearchResult($event)\"></app-search-location>\r\n  <br>\r\n  <div>\r\n    <div class=\"mb-3\">\r\n      <table class=\"table table-bordered text-center mx-auto mb-0\">\r\n        <thead class=\"bg-ssn text-white\">\r\n          <tr>\r\n            <th class=\"py-1\">\r\n              <h5 class=\"mb-0\">Location search results</h5>\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n      </table>\r\n      <div class=\"table-responsive\">\r\n        <ng2-smart-table [settings]=\"tableSettings\" [source]=\"dataSource\"></ng2-smart-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/view-location-info/view-location-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewLocationInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_location_service__ = __webpack_require__("./src/app/shared/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table_lib_data_source_local_local_data_source__ = __webpack_require__("./node_modules/ng2-smart-table/lib/data-source/local/local.data-source.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_button_row_location_button_row_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/location/view-location-info/location-button-row/location-button-row.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewLocationInfoComponent = /** @class */ (function () {
    function ViewLocationInfoComponent(contentService, locationService) {
        this.contentService = contentService;
        this.locationService = locationService;
        this.tableData = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table_lib_data_source_local_local_data_source__["a" /* LocalDataSource */]();
        this.tableSettings = {
            mode: 'external',
            actions: false,
            attr: {
                class: 'table table-bordered'
            },
            noDataMessage: 'There are no locations in this list.',
            columns: {
                country: {
                    title: 'Country',
                    type: 'html'
                },
                name: {
                    title: 'Name',
                    type: 'html'
                },
                loCode: {
                    title: 'Location code',
                    type: 'html'
                },
                type: {
                    title: 'Type',
                    type: 'html'
                },
                actions: {
                    title: 'Actions',
                    type: 'custom',
                    filter: false,
                    sort: false,
                    renderComponent: __WEBPACK_IMPORTED_MODULE_5__location_button_row_location_button_row_component__["a" /* LocationButtonRowComponent */]
                }
            }
        };
    }
    ViewLocationInfoComponent.prototype.ngOnInit = function () { };
    ViewLocationInfoComponent.prototype.onLocationSearchResult = function (locationSearchResult) {
        var _this = this;
        if (locationSearchResult.length !== 0) {
            var rowList_1 = [];
            locationSearchResult.forEach(function (location) {
                var row = _this.dataRow(location);
                rowList_1.push(row);
            });
            this.tableData = rowList_1;
        }
        this.dataSource.load(this.tableData);
    };
    ViewLocationInfoComponent.prototype.registerNewLocation = function () {
        this.locationService.setLocationData(null);
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].REGISTER_LOCATION);
    };
    ViewLocationInfoComponent.prototype.dataRow = function (location) {
        var row = {
            locationModel: location,
            country: "<div class=\"no-wrap\"><div hidden>" +
                location.country.name + // ugly fix for alphabetical sorting but it works
                "</div> <div> <img src='assets/images/flags/128x128/" +
                location.country.twoCharCode.toLowerCase() +
                ".png' height='20px'/> " +
                location.country.name +
                "</div></div>",
            name: location.name,
            loCode: location.locationCode || "<div class=\"font-italic\">Not provided.</div>",
            type: location.locationType.name || "<div class=\"font-italic\">Not provided.</div>",
            actions: 'btn'
        };
        return row;
    };
    ViewLocationInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-location-info',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/location/view-location-info/view-location-info.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/location/view-location-info/view-location-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_location_service__["a" /* LocationService */]])
    ], ViewLocationInfoComponent);
    return ViewLocationInfoComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-bg header=\"{{ organizationHeader }}\" icon=\"pax.png\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header=\"Organization Information\" icon=\"pax.png\">\r\n        <form>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"organization_name\">Organization Name</label>\r\n                  <input [(ngModel)]=\"organizationModel.name\" name=\"organizationName\" type=\"text\" class=\"form-control form-control-sm\" id=\"organization_name\"\r\n                    placeholder=\"Enter organization name\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"organization_no\">Organization Number</label>\r\n                  <input [(ngModel)]=\"organizationModel.organizationNo\" name=\"organizationNo\" type=\"text\" class=\"form-control form-control-sm\"\r\n                    id=\"organization_no\" placeholder=\"Enter organization number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"description\">Description</label>\r\n                  <input [(ngModel)]=\"organizationModel.description\" name=\"description\" type=\"text\" class=\"form-control form-control-sm\" id=\"description\"\r\n                    placeholder=\"Enter description\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header='{{ confirmHeader }}' icon=\"checkmark.png\">\r\n        <div *ngIf=\"!organizationTypeSelected || !organizationModel.name || !organizationModel.organizationNo\" class=\"text-center\">\r\n          <div class=\"mb-3\">\r\n            <p *ngIf=\"!organizationTypeSelected\" class=\"no-wrap mb-0\">No organization type selected.</p>\r\n            <p *ngIf=\"!organizationModel.name\" class=\"no-wrap mb-0\">Organization name not set.</p>\r\n            <p *ngIf=\"!organizationModel.organizationNo\" class=\"no-wrap mb-0\">Organization number not set.</p>\r\n          </div>\r\n          <button class=\"btn btn-ssn\" disabled>\r\n            <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"24px\" /> {{ confirmButtonTitle }}</button>\r\n        </div>\r\n\r\n        <div *ngIf=\"organizationTypeSelected && organizationModel.name && organizationModel.organizationNo\" class=\"text-center\">\r\n          <button class=\"btn btn-ssn\" (click)=\"registerOrganization()\">\r\n            <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"24px\" /> {{ confirmButtonTitle }}</button>\r\n        </div>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n</app-ssn-bg>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterOrganizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__ = __webpack_require__("./src/app/shared/components/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_models_organization_model__ = __webpack_require__("./src/app/shared/models/organization-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_organization_service__ = __webpack_require__("./src/app/shared/services/organization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RESULT_SUCCESS = 'Organization was successfully saved to the database.';
var RESULT_FAILURE = 'There was a problem when trying to save the organization to the database. Please try again later.';
var RegisterOrganizationComponent = /** @class */ (function () {
    function RegisterOrganizationComponent(organizationModel, organizationService, contentService, modalService) {
        this.organizationModel = organizationModel;
        this.organizationService = organizationService;
        this.contentService = contentService;
        this.modalService = modalService;
        this.newOrganization = false;
        this.organizationTypeDropdownString = 'Select organization type';
    }
    RegisterOrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.organizationDataSubscription = this.organizationService.organizationData$.subscribe(function (data) {
            if (data) {
                _this.organizationHeader = 'Edit Organization';
                _this.confirmHeader = 'Confirm Organization Changes';
                _this.confirmButtonTitle = 'Apply Changes';
                _this.organizationModel = data;
                _this.selectedOrganizationType = _this.organizationModel.organizationType;
                _this.organizationTypeSelected = true;
            }
            else if (!_this.newOrganization) {
                _this.newOrganization = true;
                _this.organizationHeader = 'Register New Organization';
                _this.confirmHeader = 'Confirm Organization Registration';
                _this.confirmButtonTitle = 'Register Organization';
            }
        });
        this.organizationTypesSubscription = this.organizationService.getOrganizationTypes().subscribe(function (organizationTypesData) {
            _this.organizationTypeList = organizationTypesData;
            // Temporary until we add more organization types (certificate issuer)
            if (_this.newOrganization) {
                _this.selectedOrganizationType = _this.organizationTypeList.find(function (type) { return type.name === 'Authority'; });
                _this.organizationTypeSelected = true;
            }
        });
    };
    RegisterOrganizationComponent.prototype.ngOnDestroy = function () {
        this.organizationDataSubscription.unsubscribe();
        this.organizationTypesSubscription.unsubscribe();
    };
    RegisterOrganizationComponent.prototype.registerOrganization = function () {
        var _this = this;
        if (this.newOrganization) {
            this.organizationService
                .registerOrganization(this.organizationModel)
                .subscribe(function (result) {
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_SUCCESS, RESULT_SUCCESS);
            }, function (error) {
                console.log(error);
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE, RESULT_FAILURE);
            });
        }
        else {
            this.organizationService
                .updateOrganization(this.organizationModel)
                .subscribe(function (result) {
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_SUCCESS, RESULT_SUCCESS);
            }, function (error) {
                console.log(error);
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE, RESULT_FAILURE);
            });
        }
    };
    RegisterOrganizationComponent.prototype.selectOrganizationType = function (organizationType) {
        this.organizationModel.organizationTypeId =
            organizationType.organizationTypeId;
        this.organizationTypeDropdownString = organizationType.name;
        this.selectedOrganizationType = organizationType;
        this.organizationTypeSelected = true;
    };
    RegisterOrganizationComponent.prototype.goBack = function () {
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_ORGANIZATIONS);
    };
    RegisterOrganizationComponent.prototype.openConfirmationModal = function (modalType, bodyText) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */]);
        modalRef.componentInstance.modalType = modalType;
        modalRef.componentInstance.bodyText = bodyText;
        modalRef.result.then(function (result) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goBack();
            }
        }, function (reason) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goBack();
            }
        });
    };
    RegisterOrganizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-organization',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4_app_shared_models_organization_model__["a" /* OrganizationModel */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_shared_models_organization_model__["a" /* OrganizationModel */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_services_organization_service__["a" /* OrganizationService */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], RegisterOrganizationComponent);
    return RegisterOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/view-organization-info/view-organization-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/view-organization-info/view-organization-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm col-md-6 col-lg-4\">\r\n    <app-ssn-card header='Register New Organization' icon='pax.png'>\r\n      <div class=\"text-center\">\r\n        <button class=\"btn btn-ssn\" (click)=\"registerNewOrganization()\">Register New Organization</button>\r\n      </div>\r\n    </app-ssn-card>\r\n  </div>\r\n</div>\r\n\r\n<app-ssn-card header=\"Organization Search\" icon=\"pax.png\">\r\n  <app-search-organization [showDropdown]=false (organizationSearchResult)=\"onOrganizationSearchResult($event)\"></app-search-organization>\r\n  <br>\r\n  <div>\r\n    <app-organization-smart-table></app-organization-smart-table>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/view-organization-info/view-organization-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewOrganizationInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_organization_service__ = __webpack_require__("./src/app/shared/services/organization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewOrganizationInfoComponent = /** @class */ (function () {
    function ViewOrganizationInfoComponent(organizationService, contentService) {
        this.organizationService = organizationService;
        this.contentService = contentService;
    }
    ViewOrganizationInfoComponent.prototype.ngOnInit = function () { };
    ViewOrganizationInfoComponent.prototype.onOrganizationSearchResult = function (organizationSearchResult) {
        this.organizationService.setOrganizationSearchData(organizationSearchResult);
    };
    ViewOrganizationInfoComponent.prototype.registerNewOrganization = function () {
        this.organizationService.setOrganizationData(null);
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].REGISTER_ORGANIZATION);
    };
    ViewOrganizationInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-organization-info',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/organization/view-organization-info/view-organization-info.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/organization/view-organization-info/view-organization-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_organization_service__["a" /* OrganizationService */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__["a" /* ContentService */]])
    ], ViewOrganizationInfoComponent);
    return ViewOrganizationInfoComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/register-ship/certificate-of-registry/certificate-of-registry.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/register-ship/certificate-of-registry/certificate-of-registry.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Certificate of Registry\" icon=\"pax.png\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header=\"Port of Registry\">\r\n        <div [hidden]=\"portLocationSelected\">\r\n          <app-search-location [restrictTypeHarbour]=true [showDropdown]=true (locationResult)=\"onLocationResult($event)\"></app-search-location>\r\n        </div>\r\n        <div *ngIf=\"portLocationSelected\" class=\"text-center\">\r\n          <div class=\"table-responsive\">\r\n            <app-ssn-table [entryData]=\"locationProperties\"></app-ssn-table>\r\n          </div>\r\n          <button class=\"btn btn-ssn\" (click)=\"deselectPortLocation()\">\r\n            <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n        </div>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"d-table mx-auto\">\r\n        <div class=\"d-table-row\">\r\n          <div class=\"d-table-cell p-1\">\r\n            <div class=\"form-group\">\r\n              <label for=\"eta_date_input\">Date of issue</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <button class=\"btn btn-sm btn-ssn\" (click)=\"doi.toggle()\" type=\"button\">\r\n                    <img src=\"assets/images/icons/128x128/white/calendar.png\" height=\"24px\" />\r\n                  </button>\r\n                </div>\r\n                <input id=\"doi_date_input\" class=\"form-control form-control-sm\" placeholder=\"yyyy-mm-dd\" name=\"dp-doi\" [showWeekNumbers]=\"true\"\r\n                  [(ngModel)]=\"dateOfIssueModel\" (ngModelChange)=\"certificateDateChanged($event)\" ngbDatepicker #doi=\"ngbDatepicker\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-table-row \">\r\n          <div *ngIf=\"!validCertificateDateFormat \" class=\"alert alert-danger \" role=\"alert \">\r\n            <span>Invalid date format.</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label-sm no-wrap col-sm-2 col-md-2 col-lg-3 col-xl-2\" for=\"certificate_number\">Ship registry number</label>\r\n        <div class=\"col\">\r\n          <input [(ngModel)]=\"certificateModel.certificateNumber\" name=\"certificateNumber\" type=\"number\" class=\"form-control form-control-sm\"\r\n            id=\"certificate_number\" placeholder=\"Enter ship registry number\" (ngModelChange)=\"persistData()\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/register-ship/certificate-of-registry/certificate-of-registry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificateOfRegistryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_location_properties__ = __webpack_require__("./src/app/shared/constants/location-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_models_certificate_of_registry_model__ = __webpack_require__("./src/app/shared/models/certificate-of-registry-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CertificateOfRegistryComponent = /** @class */ (function () {
    function CertificateOfRegistryComponent() {
        this.certificateResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.validCertificateDateFormat = true;
        this.portLocationSelected = false;
        this.locationProperties = new __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_location_properties__["a" /* LocationProperties */]().getPropertyList();
    }
    CertificateOfRegistryComponent.prototype.ngOnInit = function () {
        if (this.certificateModel == null) {
            this.certificateModel = new __WEBPACK_IMPORTED_MODULE_3_app_shared_models_certificate_of_registry_model__["a" /* CertificateOfRegistryModel */]();
        }
        else {
            if (this.certificateModel.dateOfIssue) {
                var date = new Date(this.certificateModel.dateOfIssue);
                this.dateOfIssueModel = new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](date.getFullYear(), date.getMonth() + 1, date.getDate());
            }
            if (this.certificateModel.portLocation) {
                this.portLocationSelected = true;
                this.setLocationProperties(this.certificateModel.portLocation);
            }
        }
    };
    CertificateOfRegistryComponent.prototype.onLocationResult = function (locationResult) {
        this.certificateModel.portLocation = locationResult;
        this.certificateModel.portLocationId = locationResult.locationId;
        this.portLocationSelected = true;
        this.setLocationProperties(this.certificateModel.portLocation);
        this.persistData();
    };
    CertificateOfRegistryComponent.prototype.deselectPortLocation = function () {
        this.portLocationSelected = false;
        this.certificateModel.portLocation = null;
        this.certificateModel.portLocationId = null;
        this.persistData();
    };
    CertificateOfRegistryComponent.prototype.setLocationProperties = function (locationModel) {
        __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_location_properties__["a" /* LocationProperties */].setLocationData(this.locationProperties, locationModel);
        var twoCharCode = locationModel.country.twoCharCode.toLowerCase() || 'xx';
        var countryFlag = twoCharCode + '.png';
        __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_location_properties__["a" /* LocationProperties */].setCountry(this.locationProperties, locationModel.country.name, countryFlag);
    };
    CertificateOfRegistryComponent.prototype.persistData = function () {
        this.certificateResult.emit(this.certificateModel);
    };
    CertificateOfRegistryComponent.prototype.certificateDateChanged = function ($event) {
        this.validCertificateDateFormat = this.hasValidDateFormat($event);
        if (this.validCertificateDateFormat && $event != null) {
            this.certificateModel.dateOfIssue = new Date(this.dateOfIssueModel.year, this.dateOfIssueModel.month - 1, this.dateOfIssueModel.day);
        }
        else {
            this.certificateModel.dateOfIssue = null;
        }
        this.persistData();
    };
    CertificateOfRegistryComponent.prototype.hasValidDateFormat = function (model) {
        return typeof model !== 'string';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_app_shared_models_certificate_of_registry_model__["a" /* CertificateOfRegistryModel */])
    ], CertificateOfRegistryComponent.prototype, "certificateModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], CertificateOfRegistryComponent.prototype, "certificateResult", void 0);
    CertificateOfRegistryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-certificate-of-registry',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/ship/register-ship/certificate-of-registry/certificate-of-registry.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/ship/register-ship/certificate-of-registry/certificate-of-registry.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CertificateOfRegistryComponent);
    return CertificateOfRegistryComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-bg header=\"{{ shipHeader }}\" icon=\"ship.png\">\r\n  <form #form=\"ngForm\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <app-ssn-card header=\"Ship Identification\" icon=\"ship.png\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"ship_name\">Ship Name</label>\r\n                  <input [(ngModel)]=\"shipModel.name\" (ngModelChange)=\"touchData()\" name=\"shipName\" type=\"text\" class=\"form-control form-control-sm\"\r\n                    id=\"ship_name\" placeholder=\"Enter ship name\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"call_sign\">Call Sign</label>\r\n                  <input [(ngModel)]=\"shipModel.callSign\" (ngModelChange)=\"touchData()\" name=\"callSign\" type=\"text\" class=\"form-control form-control-sm\"\r\n                    id=\"call_sign\" placeholder=\"Enter call sign\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"imo_no\">IMO Number</label>\r\n                  <input [(ngModel)]=\"shipModel.imoNo\" (ngModelChange)=\"touchData()\" name=\"imoNo\" type=\"number\" class=\"form-control form-control-sm\"\r\n                    id=\"imo_no\" placeholder=\"Enter IMO number\" #imoNo=\"ngModel\" numberValidator integerValidator positiveNumberValidator\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!imoNo.valid\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"imoNo.hasError('notNumberError')\">\r\n                  <small>IMO number must be a valid number.</small>\r\n                </li>\r\n                <li *ngIf=\"imoNo.hasError('notIntegerError')\">\r\n                  <small>IMO number must be an integer.</small>\r\n                </li>\r\n                <li *ngIf=\"imoNo.hasError('notPositiveNumberError')\">\r\n                  <small>IMO number must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"mmsi_no\">MMSI Number</label>\r\n                  <input [(ngModel)]=\"shipModel.mmsiNo\" (ngModelChange)=\"touchData()\" name=\"mmsiNo\" type=\"number\" class=\"form-control form-control-sm\"\r\n                    id=\"mmsi_no\" placeholder=\"Enter MMSI number\" #mmsiNo=\"ngModel\" integerValidator positiveNumberValidator\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!mmsiNo.valid\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"mmsiNo.hasError('notIntegerError')\">\r\n                  <small>MMSI number must be an integer.</small>\r\n                </li>\r\n                <li *ngIf=\"mmsiNo.hasError('notPositiveNumberError')\">\r\n                  <small>MMSI number must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </app-ssn-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <app-ssn-card header=\"Ship Details\" icon=\"ship.png\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\" *ngIf=\"!shipTypeSelected\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"ship_type_select\">Ship Type</label>\r\n                  <ng-select id=\"ship_type_select\" name=\"ship_type_select\" [items]=\"shipTypeList\" [multiple]=\"false\" [closeOnSelect]=\"true\"\r\n                    bindLabel=\"name\" placeholder=\"Select ship type\" [(ngModel)]=\"selectedShipType\" (change)=\"selectShipType($event)\"></ng-select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6\" *ngIf=\"shipTypeSelected\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"ship_type\">Ship Type</label>\r\n                  <div class=\"input-group\">\r\n                    <input id=\"ship_type\" name=\"ship_type\" type=\"text\" class=\"form-control form-control-sm\" [ngModel]=\"selectedShipType.name\"\r\n                      disabled=\"true\" />\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-sm btn-ssn\" (click)=\"deselectShipType()\">\r\n                        <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"16px\">\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"year_of_build\">Year of Build</label>\r\n                  <input [(ngModel)]=\"shipModel.yearOfBuild\" (ngModelChange)=\"touchData()\" name=\"yearOfBuild\" type=\"number\" class=\"form-control form-control-sm\"\r\n                    id=\"year_of_build\" placeholder=\"Enter year of build\" #yearOfBuild=\"ngModel\" numberValidator integerValidator\r\n                    positiveNumberValidator />\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!yearOfBuild.valid\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"yearOfBuild.hasError('notNumberError')\">\r\n                  <small>Year of build must be a valid number.</small>\r\n                </li>\r\n                <li *ngIf=\"yearOfBuild.hasError('notIntegerError')\">\r\n                  <small>Year of build must be an integer.</small>\r\n                </li>\r\n                <li *ngIf=\"yearOfBuild.hasError('notPositiveNumberError')\">\r\n                  <small>Year of build must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"ship_length\">Length</label>\r\n                  <div class=\"input-group\">\r\n                    <div ngbDropdown class=\"input-group-prepend\">\r\n                      <button class=\"btn btn-sm btn-ssn\" id=\"lengthTypeDropdown\" ngbDropdownToggle> {{ lengthTypeDropdownString }} </button>\r\n                      <div ngbDropdownMenu aria-labelledby=\"lengthTypeDropdown\">\r\n                        <button class=\"dropdown-item\" *ngFor=\"let lengthType of lengthTypeList\" (click)=\"selectLengthType(lengthType)\">{{ lengthType.name }}</button>\r\n                      </div>\r\n                    </div>\r\n                    <input [(ngModel)]=\"shipModel.length\" (ngModelChange)=\"touchData()\" name=\"shipLength\" type=\"number\" class=\"form-control form-control-sm\"\r\n                      id=\"ship_length\" placeholder=\"Enter ship length\" [disabled]=\"!lengthTypeSelected\" #shipLength=\"ngModel\"\r\n                      numberValidator positiveNumberValidator />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!shipLength.valid && lengthTypeSelected\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"shipLength.hasError('notNumberError')\">\r\n                  <small>Ship length must be a valid number.</small>\r\n                </li>\r\n                <li *ngIf=\"shipLength.hasError('notPositiveNumberError')\">\r\n                  <small>Ship length must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"ship_breadth\">Breadth</label>\r\n                  <div class=\"input-group\">\r\n                    <div ngbDropdown class=\"input-group-prepend\">\r\n                      <button class=\"btn btn-sm btn-ssn\" id=\"breadthTypeDropdown\" ngbDropdownToggle> {{ breadthTypeDropdownString }} </button>\r\n                      <div ngbDropdownMenu aria-labelledby=\"breadthTypeDropdown\">\r\n                        <button class=\"dropdown-item\" *ngFor=\"let breadthType of breadthTypeList\" (click)=\"selectBreadthType(breadthType)\">{{ breadthType.name }}</button>\r\n                      </div>\r\n                    </div>\r\n                    <input [(ngModel)]=\"shipModel.breadth\" (ngModelChange)=\"touchData()\" name=\"breadth\" type=\"number\" class=\"form-control form-control-sm\"\r\n                      id=\"ship_breadth\" placeholder=\"Enter ship breadth\" [disabled]=\"!breadthTypeSelected\" #shipBreadth=\"ngModel\"\r\n                      numberValidator positiveNumberValidator />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!shipBreadth.valid && breadthTypeSelected\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"shipBreadth.hasError('notNumberError')\">\r\n                  <small>Ship breadth must be a valid number.</small>\r\n                </li>\r\n                <li *ngIf=\"shipBreadth.hasError('notPositiveNumberError')\">\r\n                  <small>Ship breadth must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"ship_power\">Power</label>\r\n                  <div class=\"input-group\">\r\n                    <div ngbDropdown class=\"input-group-prepend\">\r\n                      <button class=\"btn btn-sm btn-ssn\" id=\"powerTypeDropdown\" ngbDropdownToggle> {{ powerTypeDropdownString }} </button>\r\n                      <div ngbDropdownMenu aria-labelledby=\"powerTypeDropdown\">\r\n                        <button class=\"dropdown-item\" *ngFor=\"let powerType of powerTypeList\" (click)=\"selectPowerType(powerType)\">{{ powerType.name }}</button>\r\n                      </div>\r\n                    </div>\r\n                    <input [(ngModel)]=\"shipModel.power\" (ngModelChange)=\"touchData()\" name=\"power\" type=\"number\" class=\"form-control form-control-sm\"\r\n                      id=\"ship_power\" placeholder=\"Enter ship power\" [disabled]=\"!powerTypeSelected\" #shipPower=\"ngModel\" numberValidator\r\n                      integerValidator positiveNumberValidator />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!shipPower.valid && powerTypeSelected\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"shipPower.hasError('notNumberError')\">\r\n                  <small>Ship power must be a valid number.</small>\r\n                </li>\r\n                <li *ngIf=\"shipPower.hasError('notIntegerError')\">\r\n                  <small>Ship power must be an integer.</small>\r\n                </li>\r\n                <li *ngIf=\"shipPower.hasError('notPositiveNumberError')\">\r\n                  <small>Ship power must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"hull_type_dropdown\">Hull Type</label>\r\n                  <div ngbDropdown>\r\n                    <button class=\"btn btn-sm btn-ssn\" id=\"hull_type_dropdown\" ngbDropdownToggle> {{ hullTypeDropdownString }}</button>\r\n                    <div ngbDropdownMenu aria-labelledby=\"hull_type_dropdown\">\r\n                      <button class=\"dropdown-item\" *ngFor=\"let hullType of hullTypeList\" (click)=\"selectHullType(hullType)\">{{ hullType.name }}</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"ship_status_dropdown\">Ship Status</label>\r\n                  <div ngbDropdown>\r\n                    <button class=\"btn btn-sm btn-ssn\" id=\"ship_status_dropdown\" ngbDropdownToggle> {{ shipStatusDropdownString }}</button>\r\n                    <div ngbDropdownMenu aria-labelledby=\"ship_status_dropdown\">\r\n                      <button class=\"dropdown-item\" *ngFor=\"let shipStatus of shipStatusList\" (click)=\"selectShipStatus(shipStatus)\">{{ shipStatus.name }}</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"ship_height\">Height</label>\r\n                  <input [(ngModel)]=\"shipModel.height\" (ngModelChange)=\"touchData()\" #shipHeight=\"ngModel\" numberValidator positiveNumberValidator\r\n                    name=\"height\" type=\"number\" class=\"form-control form-control-sm\" id=\"height\" placeholder=\"Enter ship height\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!shipHeight.valid\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"shipHeight.hasError('notNumberError')\">\r\n                  <small>Ship height must be a valid number.</small>\r\n                </li>\r\n                <li *ngIf=\"shipHeight.hasError('notPositiveNumberError')\">\r\n                  <small>Ship height must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"ship_draught\">Draught</label>\r\n                  <input [(ngModel)]=\"shipModel.draught\" (ngModelChange)=\"touchData()\" name=\"draught\" type=\"number\" class=\"form-control form-control-sm\"\r\n                    id=\"ship_draught\" placeholder=\"Enter ship draught\" #shipDraught=\"ngModel\" numberValidator positiveNumberValidator\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!shipDraught.valid\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"shipDraught.hasError('notNumberError')\">\r\n                  <small>Ship draught must be a valid number.</small>\r\n                </li>\r\n                <li *ngIf=\"shipDraught.hasError('notPositiveNumberError')\">\r\n                  <small>Ship draught must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\">Gross Tonnage</label>\r\n                  <input [(ngModel)]=\"shipModel.grossTonnage\" (ngModelChange)=\"touchData()\" name=\"grossTonnage\" type=\"number\" class=\"form-control form-control-sm\"\r\n                    id=\"gross_tonnage\" placeholder=\"Enter gross tonnage\" #grossTonnage=\"ngModel\" numberValidator integerValidator\r\n                    positiveNumberValidator />\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!grossTonnage.valid\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"grossTonnage.hasError('notNumberError')\">\r\n                  <small>Gross tonnage must be a valid number.</small>\r\n                </li>\r\n                <li *ngIf=\"grossTonnage.hasError('notIntegerError')\">\r\n                  <small>Gross tonnage must be an integer.</small>\r\n                </li>\r\n                <li *ngIf=\"grossTonnage.hasError('notPositiveNumberError')\">\r\n                  <small>Gross tonnage must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\">Deadweight Tonnage</label>\r\n                  <input [(ngModel)]=\"shipModel.deadweightTonnage\" (ngModelChange)=\"touchData()\" name=\"deadweightTonnage\" type=\"number\" class=\"form-control form-control-sm\"\r\n                    id=\"deadweight_tonnage\" placeholder=\"Enter deadweight tonnage\" #dwt=\"ngModel\" numberValidator integerValidator\r\n                    positiveNumberValidator />\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!dwt.valid\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"dwt.hasError('notNumberError')\">\r\n                  <small>Deadweight tonnage must be a valid number.</small>\r\n                </li>\r\n                <li *ngIf=\"dwt.hasError('notIntegerError')\">\r\n                  <small>Deadweight tonnage must be an integer.</small>\r\n                </li>\r\n                <li *ngIf=\"dwt.hasError('notPositiveNumberError')\">\r\n                  <small>Deadweight tonnage must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\">Net Tonnage</label>\r\n                  <input [(ngModel)]=\"shipModel.netTonnage\" (ngModelChange)=\"touchData()\" name=\"netTonnage\" type=\"number\" class=\"form-control form-control-sm\"\r\n                    id=\"net_tonnage\" placeholder=\"Enter net tonnage\" #netTonnage=\"ngModel\" numberValidator integerValidator\r\n                    positiveNumberValidator />\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"!netTonnage.valid\" class=\"alert alert-danger\">\r\n                <li *ngIf=\"netTonnage.hasError('notNumberError')\">\r\n                  <small>Net tonnage must be a valid number.</small>\r\n                </li>\r\n                <li *ngIf=\"netTonnage.hasError('notIntegerError')\">\r\n                  <small>Net tonnage must be an integer.</small>\r\n                </li>\r\n                <li *ngIf=\"netTonnage.hasError('notPositiveNumberError')\">\r\n                  <small>Net tonnage must be a positive number.</small>\r\n                </li>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"col-form-label-sm no-wrap mb-0\" for=\"has_side_thrusters\">Side thrusters</label>\r\n            <div class=\"card pt-2\" id=\"has_side_thrusters\">\r\n              <div class=\"checkbox row\">\r\n                <div class=\"col ml-2\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\">\r\n                    <input [(ngModel)]=\"shipModel.hasSideThrusters\" (ngModelChange)=\"touchData()\" name=\"hasSideThrusters\" type=\"checkbox\" value=\"\"> Side thrusters</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"checkbox row\">\r\n                <div class=\"col ml-2\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\">\r\n                    <input [(ngModel)]=\"shipModel.hasSideThrustersFront\" (ngModelChange)=\"touchData()\" name=\"hasSideThrustersFront\" type=\"checkbox\"\r\n                      value=\"\"> Front side thrusters</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"checkbox row\">\r\n                <div class=\"col ml-2\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\">\r\n                    <input [(ngModel)]=\"shipModel.hasSideThrustersBack\" (ngModelChange)=\"touchData()\" name=\"hasSideThrustersBack\" type=\"checkbox\"\r\n                      value=\"\"> Back side thrusters</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label class=\"col-form-label-sm no-wrap mb-0\" for=\"remark\">Remark</label>\r\n            <textarea [(ngModel)]=\"shipModel.remark\" (ngModelChange)=\"touchData()\" name=\"remark\" class=\"form-control form-control-sm\"\r\n              rows=\"4\" id=\"remark\"></textarea>\r\n          </div>\r\n        </app-ssn-card>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header=\"Flag Code\" icon=\"flag.png\">\r\n        <div *ngIf=\"!shipFlagCodeSelected\">\r\n          <app-search-ship-flag-code (shipFlagCodeResult)=\"onShipFlagCodeResult($event)\"></app-search-ship-flag-code>\r\n        </div>\r\n\r\n        <div *ngIf=\"shipFlagCodeSelected\" class=\"text-center\">\r\n          <div class=\"table-responsive\">\r\n            <app-ssn-table [entryData]=shipFlagCodeProperties></app-ssn-table>\r\n          </div>\r\n          <button class=\"btn btn-ssn\" (click)=\"deselectShipFlagCode()\">\r\n            <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n        </div>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-select-ship-contact [selectedContactModelList]=\"shipModel.shipContact\" (contactModelListResult)=\"onContactDataResult($event)\"></app-select-ship-contact>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header=\"Organization\" icon=\"pax.png\">\r\n        <div *ngIf=\"!organizationSelected\">\r\n          <app-search-organization (organizationResult)=\"onOrganizationResult($event)\"></app-search-organization>\r\n        </div>\r\n\r\n        <div *ngIf=\"organizationSelected\" class=\"text-center\">\r\n          <div class=\"table-responsive\">\r\n            <app-ssn-table [entryData]=organizationProperties></app-ssn-table>\r\n          </div>\r\n          <button class=\"btn btn-ssn\" (click)=\"deselectOrganization()\">\r\n            <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n        </div>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-certificate-of-registry [certificateModel]=\"shipModel.certificateOfRegistry\" (certificateResult)=\"onCertificateOfRegistryResult($event)\">\r\n      </app-certificate-of-registry>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header=\"{{ confirmHeader }}\" icon=\"checkmark.png\">\r\n\r\n        <div class=\"text-center\" *ngIf=\"!form.valid || !(shipModel.name && shipModel.callSign && shipModel.imoNo && shipTypeSelected\r\n                        && shipModel.yearOfBuild && shipModel.length && lengthTypeSelected && shipModel.breadth && breadthTypeSelected\r\n                        && shipModel.power && powerTypeSelected && hullTypeSelected && shipModel.height && shipModel.draught\r\n                        && shipModel.grossTonnage && shipModel.deadweightTonnage && shipFlagCodeSelected && contactSelected\r\n                        && organizationSelected && certificateSelected)\">\r\n          <div *ngIf=\"!form.valid\" class=\"text-center\">\r\n            <div class=\"alert alert-danger\">\r\n              There are errors in the form that needs to be resolved.\r\n            </div>\r\n          </div>\r\n          <div class=\"mb-3\">\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.name\">Ship name not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.callSign\">Call sign not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.imoNo\">IMO number not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipTypeSelected\">Ship type not selected.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.yearOfBuild\">Year of build not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.length || !lengthTypeSelected\">Ship length not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.breadth || !breadthTypeSelected\">Ship breadth not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.power || !powerTypeSelected\">Ship power not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!hullTypeSelected\">Hull type not selected.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipStatusSelected\">Ship status not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.height\">Ship height not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.draught\">Ship draught not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.grossTonnage\">Gross tonnage not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipModel.deadweightTonnage\">Deadweight tonnage not set.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!shipFlagCodeSelected\">Flag code not selected.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!contactSelected\">At least one contact medium must be provided.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!organizationSelected\">Organization not selected.</p>\r\n            <p class=\"no-wrap mb-0\" *ngIf=\"!certificateSelected\">Certificate of registry must be provided.</p>\r\n          </div>\r\n          <button class=\"btn btn-ssn\" disabled>\r\n            <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"24px\" />{{ confirmButtonTitle }}</button>\r\n        </div>\r\n\r\n        <div class=\"text-center\" *ngIf=\"form.valid && shipModel.name && shipModel.callSign && shipModel.imoNo && shipTypeSelected\r\n                        && shipModel.yearOfBuild && shipModel.length && lengthTypeSelected && shipModel.breadth && breadthTypeSelected\r\n                        && shipModel.power && powerTypeSelected && hullTypeSelected && shipModel.height && shipModel.draught\r\n                        && shipModel.grossTonnage && shipModel.deadweightTonnage && shipFlagCodeSelected && contactSelected\r\n                        && organizationSelected && certificateSelected\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr class=\"bg-ssn text-ssn\">\r\n                  <th>Ship Name</th>\r\n                  <th>Call Sign</th>\r\n                  <th>IMO Number</th>\r\n                  <th *ngIf=\"shipModel.mmsiNo\">MMSI Number</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>{{ shipModel.name }}</td>\r\n                  <td>{{ shipModel.callSign }}</td>\r\n                  <td>{{ shipModel.imoNo }}</td>\r\n                  <td *ngIf=\"shipModel.mmsiNo\">{{ shipModel.mmsiNo }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr class=\"bg-ssn text-ssn\">\r\n                  <th>Ship Type</th>\r\n                  <th>Year of Build</th>\r\n                  <th>Length</th>\r\n                  <th>Breadth</th>\r\n                  <th>Power</th>\r\n                  <th>Hull Type</th>\r\n                  <th>Status</th>\r\n                  <th>Height</th>\r\n                  <th>Draught</th>\r\n                  <th>Gross Tonnage</th>\r\n                  <th>Deadweight Tonnage</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td *ngIf=\"shipTypeSelected\">{{ selectedShipType.name }}</td>\r\n                  <td>{{ shipModel.yearOfBuild }}</td>\r\n                  <td>{{ lengthTypeDropdownString }}\r\n                    <br>{{ shipModel.length }}</td>\r\n                  <td>{{ breadthTypeDropdownString }}\r\n                    <br>{{ shipModel.breadth }}</td>\r\n                  <td>{{ powerTypeDropdownString }}\r\n                    <br>{{ shipModel.power }}</td>\r\n                  <td>{{ hullTypeDropdownString }}</td>\r\n                  <td>{{ shipStatusDropdownString }}</td>\r\n                  <td>{{ shipModel.height }}</td>\r\n                  <td>{{ shipModel.draught }}</td>\r\n                  <td>{{ shipModel.grossTonnage }}</td>\r\n                  <td>{{ shipModel.deadweightTonnage }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <p *ngIf=\"shipModel.hasSideThrusters\">Ship has side thrusters.</p>\r\n          <p *ngIf=\"shipModel.hasSideThrustersFront\">Ship has front side thrusters.</p>\r\n          <p *ngIf=\"shipModel.hasSideThrustersBack\">Ship has back side thrusters.</p>\r\n\r\n          <div *ngIf=\"shipModel.remark\">\r\n            <span>Remark:</span>\r\n            <div class=\"card p-1 pt-3 text-left mb-3\">\r\n              <pre>{{ shipModel.remark }}</pre>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr class=\"bg-ssn text-ssn\">\r\n                  <th>Country Flag</th>\r\n                  <th>Ship Flag Code</th>\r\n                  <th>Country</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>\r\n                    <img src=\"assets/images/flags/{{ shipFlagCodeModel.country.twoCharCode | lowercase }}.png\" height=\"20px\" />\r\n                  </td>\r\n                  <td>{{ shipFlagCodeModel.name }}</td>\r\n                  <td>{{ shipFlagCodeModel.country.name }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n          <app-selected-contact-mediums [selectedContactModelList]=\"shipModel.shipContact\"></app-selected-contact-mediums>\r\n\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr class=\"bg-ssn text-ssn\">\r\n                  <th>Organization Name</th>\r\n                  <th>Organization Number</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>{{ organizationModel.name }}</td>\r\n                  <td>{{ organizationModel.organizationNo }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr class=\"bg-ssn text-ssn\">\r\n                  <th>Port of Registry</th>\r\n                  <th>Ship Registry Number</th>\r\n                  <th>Date of issue</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td>{{ certificateModel.portLocation.name }}</td>\r\n                  <td>{{ certificateModel.certificateNumber }}</td>\r\n                  <td>{{ certificateDateString }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"text-center\" *ngIf=\"dataIsPristine\">\r\n            <span>{{ dataIsPristineText }}</span>\r\n            <br>\r\n            <button class=\"btn btn-ssn mt-2\" disabled>\r\n              <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\">\r\n              <span>{{ confirmButtonTitle }}</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"text-center\" *ngIf=\"!(dataIsPristine)\">\r\n            <button class=\"btn btn-ssn\" (click)=\"registerShip()\">\r\n              <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"24px\" /> {{ confirmButtonTitle }}</button>\r\n          </div>\r\n        </div>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n</app-ssn-bg>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterShipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__ = __webpack_require__("./src/app/shared/components/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_organization_properties__ = __webpack_require__("./src/app/shared/constants/organization-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_ship_flag_code_properties__ = __webpack_require__("./src/app/shared/constants/ship-flag-code-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_models_certificate_of_registry_model__ = __webpack_require__("./src/app/shared/models/certificate-of-registry-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_models_ship_contact_model__ = __webpack_require__("./src/app/shared/models/ship-contact-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_models_ship_model__ = __webpack_require__("./src/app/shared/models/ship-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RESULT_SUCCESS = 'Ship was successfully saved to the database.';
var RESULT_FAILURE = 'There was a problem when trying to save the ship to the database. Please try again later.';
var RESULT_SAVED_WITHOUT_CONTACT = 'Ship was saved to the database, but there was an error when trying to save the ship\'s contact information. Please provide this information later.';
var INITIAL_DATA_IS_PRISTINE_TEXT = 'There are no unsaved changes in this page.';
var UPDATED_DATA_IS_PRISTINE_TEXT = 'Your changes have been saved.';
var RegisterShipComponent = /** @class */ (function () {
    function RegisterShipComponent(shipService, contentService, modalService) {
        this.shipService = shipService;
        this.contentService = contentService;
        this.modalService = modalService;
        this.shipModel = new __WEBPACK_IMPORTED_MODULE_8_app_shared_models_ship_model__["a" /* ShipModel */]();
        this.newShip = false;
        this.hullTypeSelected = false;
        this.lengthTypeSelected = false;
        this.breadthTypeSelected = false;
        this.powerTypeSelected = false;
        this.shipStatusSelected = false;
        this.shipTypeSelected = false;
        this.shipTypeSearchFailed = false;
        this.hullTypeDropdownString = 'Select hull type';
        this.lengthTypeDropdownString = 'Select type';
        this.breadthTypeDropdownString = 'Select type';
        this.powerTypeDropdownString = 'Select type';
        this.shipStatusDropdownString = 'Select status';
        this.shipFlagCodeProperties = new __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_ship_flag_code_properties__["a" /* ShipFlagCodeProperties */]().getPropertyList();
        this.organizationProperties = new __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_organization_properties__["a" /* OrganizationProperties */]().getPropertyList();
        this.certificateSelected = false;
        this.dataIsPristine = true;
    }
    // for development purposes, remove before prod
    RegisterShipComponent.prototype.setInfoShortcut = function () {
        this.shipModel.name = 'TJOHEI';
        this.shipModel.callSign = 'tjo123';
        this.shipModel.imoNo = 1234567;
        this.shipModel.mmsiNo = 7654321;
        // this.selectShipType(this.shipTypeList[0]);
        this.shipModel.yearOfBuild = 1234;
        this.selectLengthType(this.lengthTypeList[0]);
        this.shipModel.length = 100;
        this.selectBreadthType(this.breadthTypeList[0]);
        this.shipModel.breadth = 50;
        this.selectPowerType(this.powerTypeList[0]);
        this.shipModel.power = 1000;
        this.selectHullType(this.hullTypeList[0]);
        this.selectShipStatus(this.shipStatusList[0]);
        this.shipModel.height = 20;
        this.shipModel.draught = 10;
        this.shipModel.grossTonnage = 500;
        this.shipModel.deadweightTonnage = 600;
        this.shipModel.hasSideThrusters = true;
        this.shipModel.remark = 'Remark';
    };
    RegisterShipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataIsPristineText = INITIAL_DATA_IS_PRISTINE_TEXT;
        this.certificateModel = new __WEBPACK_IMPORTED_MODULE_6_app_shared_models_certificate_of_registry_model__["a" /* CertificateOfRegistryModel */]();
        this.shipOverviewDataSubscription = this.shipService.shipOverviewData$.subscribe(function (data) {
            if (data) {
                _this.setAllValues(data);
            }
            else if (!_this.newShip) {
                _this.newShip = true;
                _this.shipHeader = 'Register New Ship';
                _this.confirmHeader = 'Confirm Ship Registration';
                _this.confirmButtonTitle = 'Register Ship';
            }
        });
        this.shipTypesSubscription = this.shipService.getShipTypes().subscribe(function (data) { return (_this.shipTypeList = data); });
        this.hullTypesSubscription = this.shipService.getHullTypes().subscribe(function (data) { return (_this.hullTypeList = data); });
        this.lengthTypesSubscription = this.shipService.getLengthTypes().subscribe(function (data) { return (_this.lengthTypeList = data); });
        this.breadthTypesSubscription = this.shipService.getBreadthTypes().subscribe(function (data) { return (_this.breadthTypeList = data); });
        this.powerTypesSubscription = this.shipService.getPowerTypes().subscribe(function (data) { return (_this.powerTypeList = data); });
        this.shipStatusListSubscription = this.shipService.getShipStatusList().subscribe(function (data) { return (_this.shipStatusList = data); });
    };
    RegisterShipComponent.prototype.ngOnDestroy = function () {
        this.shipOverviewDataSubscription.unsubscribe();
        this.shipTypesSubscription.unsubscribe();
        this.hullTypesSubscription.unsubscribe();
        this.lengthTypesSubscription.unsubscribe();
        this.breadthTypesSubscription.unsubscribe();
        this.powerTypesSubscription.unsubscribe();
        this.shipStatusListSubscription.unsubscribe();
    };
    RegisterShipComponent.prototype.setAllValues = function (ship) {
        this.newShip = false;
        this.shipHeader = 'Edit Ship';
        this.confirmHeader = 'Confirm Ship Changes';
        this.confirmButtonTitle = 'Apply Changes';
        this.shipModel = ship;
        this.selectedShipType = ship.shipType;
        this.shipTypeSelected = ship.shipType != null;
        this.organizationModel = ship.organization;
        this.organizationSelected = ship.organization != null;
        this.selectedContactModelList = ship.shipContact;
        this.hullTypeSelected = ship.shipHullType != null;
        if (this.hullTypeSelected) {
            this.hullTypeDropdownString = ship.shipHullType.name;
        }
        this.lengthTypeSelected = ship.shipLengthType != null;
        if (this.lengthTypeSelected) {
            this.lengthTypeDropdownString = ship.shipLengthType.name;
        }
        this.hullTypeSelected = ship.shipHullType != null;
        if (this.hullTypeSelected) {
            this.hullTypeDropdownString = ship.shipHullType.name;
        }
        this.breadthTypeSelected = ship.shipBreadthType != null;
        if (this.breadthTypeSelected) {
            this.breadthTypeDropdownString = ship.shipBreadthType.name;
        }
        this.powerTypeSelected = ship.shipPowerType != null;
        if (this.powerTypeSelected) {
            this.powerTypeDropdownString = ship.shipPowerType.name;
        }
        this.shipStatusSelected = ship.shipStatus != null;
        if (this.shipStatusSelected) {
            this.shipStatusDropdownString = ship.shipStatus.name;
        }
        this.setShipFlagCode(ship.shipFlagCode);
        this.setOrganization(ship.organization);
        this.setCertificateOfRegistry(ship.certificateOfRegistry);
        this.setContactData(ship.shipContact);
    };
    RegisterShipComponent.prototype.selectShipType = function ($event) {
        this.shipModel.shipTypeId = $event.shipTypeId;
        this.shipTypeSelected = true;
        this.touchData();
    };
    RegisterShipComponent.prototype.deselectShipType = function () {
        this.shipModel.shipTypeId = null;
        this.selectedShipType = null;
        this.shipTypeSelected = false;
    };
    RegisterShipComponent.prototype.selectLengthType = function (lengthType) {
        this.shipModel.shipLengthTypeId = lengthType.shipLengthTypeId;
        this.lengthTypeDropdownString = lengthType.name;
        this.lengthTypeSelected = true;
        this.touchData();
    };
    RegisterShipComponent.prototype.selectBreadthType = function (breadthType) {
        this.shipModel.shipBreadthTypeId = breadthType.shipBreadthTypeId;
        this.breadthTypeDropdownString = breadthType.name;
        this.breadthTypeSelected = true;
        this.touchData();
    };
    RegisterShipComponent.prototype.selectPowerType = function (powerType) {
        this.shipModel.shipPowerTypeId = powerType.shipPowerTypeId;
        this.powerTypeDropdownString = powerType.name;
        this.powerTypeSelected = true;
        this.touchData();
    };
    RegisterShipComponent.prototype.selectHullType = function (hullType) {
        this.shipModel.shipHullTypeId = hullType.shipHullTypeId;
        this.hullTypeDropdownString = hullType.name;
        this.hullTypeSelected = true;
        this.touchData();
    };
    RegisterShipComponent.prototype.selectShipStatus = function (shipStatus) {
        this.shipModel.shipStatusId = shipStatus.shipStatusId;
        this.shipStatusDropdownString = shipStatus.name;
        this.shipStatusSelected = true;
        this.touchData();
    };
    RegisterShipComponent.prototype.onShipFlagCodeResult = function (shipFlagCodeResult) {
        this.setShipFlagCode(shipFlagCodeResult);
        this.touchData();
    };
    RegisterShipComponent.prototype.setShipFlagCode = function (shipFlagCodeData) {
        this.shipFlagCodeModel = shipFlagCodeData;
        if (shipFlagCodeData) {
            this.shipModel.shipFlagCodeId = shipFlagCodeData.shipFlagCodeId;
            this.shipFlagCodeSelected = true;
            __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_ship_flag_code_properties__["a" /* ShipFlagCodeProperties */].setShipFlagCodeData(this.shipFlagCodeProperties, this.shipFlagCodeModel);
            var twoCharCode = this.shipFlagCodeModel.country.twoCharCode.toLowerCase() || 'xx';
            var countryFlag = twoCharCode + '.png';
            __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_ship_flag_code_properties__["a" /* ShipFlagCodeProperties */].setCountry(this.shipFlagCodeProperties, this.shipFlagCodeModel.country.name, countryFlag);
        }
    };
    RegisterShipComponent.prototype.deselectShipFlagCode = function () {
        this.shipFlagCodeSelected = false;
        this.shipFlagCodeModel = null;
        this.shipModel.shipFlagCodeId = null;
    };
    RegisterShipComponent.prototype.onContactDataResult = function (contactData) {
        this.setContactData(contactData);
        this.touchData();
    };
    RegisterShipComponent.prototype.setContactData = function (contactData) {
        this.selectedContactModelList = contactData;
        this.shipModel.shipContact = this.selectedContactModelList;
        this.contactSelected = contactData.length !== 0;
    };
    RegisterShipComponent.prototype.onOrganizationResult = function (organizationResult) {
        this.setOrganization(organizationResult);
        this.touchData();
    };
    RegisterShipComponent.prototype.setOrganization = function (organizationData) {
        this.organizationModel = organizationData;
        if (organizationData) {
            this.shipModel.organizationId = organizationData.organizationId;
            this.organizationSelected = true;
            __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_organization_properties__["a" /* OrganizationProperties */].setOrganizationData(this.organizationProperties, this.organizationModel);
        }
    };
    RegisterShipComponent.prototype.deselectOrganization = function () {
        this.organizationSelected = false;
        this.organizationModel = null;
        this.shipModel.organizationId = null;
    };
    RegisterShipComponent.prototype.onCertificateOfRegistryResult = function (certificateResult) {
        this.setCertificateOfRegistry(certificateResult);
        this.touchData();
    };
    RegisterShipComponent.prototype.setCertificateOfRegistry = function (certificateData) {
        this.certificateModel = certificateData;
        if (certificateData) {
            if (this.certificateModel.dateOfIssue) {
                this.certificateDateString = this.dateString(new Date(this.certificateModel.dateOfIssue));
            }
            if (this.certificateModel.dateOfIssue && this.certificateModel.portLocationId
                && this.certificateModel.portLocation && this.certificateModel.certificateNumber) {
                this.certificateSelected = true;
            }
            else {
                this.certificateSelected = false;
            }
        }
        else {
            this.certificateSelected = false;
        }
    };
    RegisterShipComponent.prototype.touchData = function () {
        this.dataIsPristine = false;
    };
    RegisterShipComponent.prototype.updateCertificate = function () {
        // safeCertificate is used for removing unnecessary location objects within the certificate
        var safeCertificate = new __WEBPACK_IMPORTED_MODULE_6_app_shared_models_certificate_of_registry_model__["a" /* CertificateOfRegistryModel */]();
        safeCertificate.certificateNumber = this.certificateModel.certificateNumber;
        safeCertificate.dateOfIssue = this.certificateModel.dateOfIssue;
        safeCertificate.portLocationId = this.certificateModel.portLocationId;
        this.shipModel.certificateOfRegistry = safeCertificate;
    };
    RegisterShipComponent.prototype.registerShip = function () {
        var _this = this;
        this.updateCertificate();
        if (this.newShip) {
            this.shipService.registerShip(this.shipModel).subscribe(function (result) {
                _this.shipModel.shipId = result.shipId;
                var shipContactList = _this.selectedContactModelList.map(function (contactModel) {
                    var shipContact = new __WEBPACK_IMPORTED_MODULE_7_app_shared_models_ship_contact_model__["a" /* ShipContactModel */]();
                    shipContact.shipId = _this.shipModel.shipId;
                    shipContact.contactMediumId = contactModel.contactMedium.contactMediumId;
                    shipContact.contactValue = contactModel.contactValue;
                    shipContact.isPreferred = contactModel.isPreferred;
                    shipContact.comments = contactModel.comments;
                    return shipContact;
                });
                _this.saveShipContactList(shipContactList);
            }, function (error) {
                console.log(error);
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE, RESULT_FAILURE);
            });
        }
        else {
            // remove child dependencies
            this.shipModel.certificateOfRegistryId = this.certificateModel.certificateOfRegistryId;
            this.shipModel.organization = null;
            this.shipModel.shipStatus = null;
            this.shipModel.shipPowerType = null;
            this.shipModel.shipBreadthType = null;
            this.shipModel.shipLengthType = null;
            this.shipModel.shipSource = null;
            this.shipModel.shipFlagCode = null;
            this.shipModel.shipType = null;
            this.shipModel.shipContact = null;
            // update
            this.shipService.updateShip(this.shipModel).subscribe(function (result) {
                var shipContactList = _this.selectedContactModelList.map(function (contactModel) {
                    var shipContact = new __WEBPACK_IMPORTED_MODULE_7_app_shared_models_ship_contact_model__["a" /* ShipContactModel */]();
                    shipContact.shipId = _this.shipModel.shipId;
                    shipContact.contactMediumId = contactModel.contactMedium.contactMediumId;
                    shipContact.contactValue = contactModel.contactValue;
                    shipContact.isPreferred = contactModel.isPreferred;
                    shipContact.comments = contactModel.comments;
                    return shipContact;
                });
                _this.saveShipContactList(shipContactList);
            }, function (error) {
                console.log(error);
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE, RESULT_FAILURE);
            });
        }
        this.dataIsPristineText = UPDATED_DATA_IS_PRISTINE_TEXT;
    };
    RegisterShipComponent.prototype.saveShipContactList = function (shipContactList) {
        var _this = this;
        this.shipService.saveShipContactList(shipContactList).subscribe(function (result) {
            if (result) {
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_SUCCESS, RESULT_SUCCESS);
            }
        }, function (error) {
            console.log(error);
            _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_WARNING, RESULT_SAVED_WITHOUT_CONTACT);
        });
    };
    RegisterShipComponent.prototype.goBack = function () {
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_SHIPS);
    };
    RegisterShipComponent.prototype.dateString = function (date) {
        return (date.getFullYear() +
            '-' +
            this.dateTimeFormat(date.getMonth() + 1) +
            '-' +
            this.dateTimeFormat(date.getDate()));
    };
    RegisterShipComponent.prototype.dateTimeFormat = function (number) {
        if (number <= 9) {
            return '0' + number;
        }
        else {
            return number;
        }
    };
    RegisterShipComponent.prototype.openConfirmationModal = function (modalType, bodyText) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */]);
        modalRef.componentInstance.modalType = modalType;
        modalRef.componentInstance.bodyText = bodyText;
        modalRef.result.then(function (result) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goBack();
            }
        }, function (reason) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goBack();
            }
        });
    };
    RegisterShipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-ship',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_10_app_shared_services_ship_service__["a" /* ShipService */],
            __WEBPACK_IMPORTED_MODULE_9_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], RegisterShipComponent);
    return RegisterShipComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/view-ship-info/view-ship-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/view-ship-info/view-ship-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm col-md-6 col-lg-4\">\r\n    <app-ssn-card header=\"Register New Ship\" icon=\"ship.png\">\r\n      <div class=\"text-center\">\r\n        <button class=\"btn btn-ssn\" (click)=\"registerNewShip()\">Register New Ship</button>\r\n      </div>\r\n    </app-ssn-card>\r\n  </div>\r\n</div>\r\n\r\n<app-ssn-card header=\"Ship Search\" icon=\"ship.png\">\r\n  <app-search-ship [showDropdown]=false (shipSearchResult)=\"onShipSearchResult($event)\"></app-search-ship>\r\n  <br>\r\n  <div>\r\n    <app-ship-smart-table></app-ship-smart-table>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/view-ship-info/view-ship-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewShipInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewShipInfoComponent = /** @class */ (function () {
    function ViewShipInfoComponent(shipService, contentService) {
        this.shipService = shipService;
        this.contentService = contentService;
    }
    ViewShipInfoComponent.prototype.ngOnInit = function () { };
    ViewShipInfoComponent.prototype.onShipSearchResult = function (shipSearchResult) {
        this.shipService.setShipSearchData(shipSearchResult);
    };
    ViewShipInfoComponent.prototype.registerNewShip = function () {
        this.shipService.setShipOverviewData(null);
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].REGISTER_SHIP);
    };
    ViewShipInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-ship-info',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/ship/view-ship-info/view-ship-info.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/ship/view-ship-info/view-ship-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_ship_service__["a" /* ShipService */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__["a" /* ContentService */]])
    ], ViewShipInfoComponent);
    return ViewShipInfoComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-bg header=\"REGISTER USER\" icon=\"user.png\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card *ngIf=\"!isDrafted\" header=\"Personalia\" icon=\"user-info.png\" id=\"personalia\">\r\n        <form #f=\"ngForm\" novalidate>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"email\">Email</label>\r\n                  <input id=\"email\" name=\"email\" class=\"form-control form-control-sm\" placeholder=\"Enter email\" [(ngModel)]=\"user.email\" #email=\"ngModel\"\r\n                    [email]=\"true\" (ngModelChange)=\"emailChecked = false\" (blur)=\"userExists(email.valid)\" autocomplete=\"username\"\r\n                    tmFocus validateEmail>\r\n                  <small *ngIf=\"!email.valid && !email.pristine\" class=\"text-danger\">Please enter a valid email address</small>\r\n                  <div *ngIf=\"emailChecked && !emailTaken\">\r\n                    <img height=\"16px\" src=\"assets/images/icons/128x128/green/checkmark.png\">\r\n                    <small class=\"text-success\">email available</small>\r\n                  </div>\r\n                  <div *ngIf=\"emailChecked && emailTaken\">\r\n                    <img height=\"16px\" src=\"assets/images/icons/128x128/red/warning.png\">\r\n                    <small class=\"text-danger\">email is already in use</small>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"password\">Password</label>\r\n                  <input id=\"password\" type=\"password\" name=\"password\" class=\"form-control form-control-sm\" placeholder=\"Enter password\" [(ngModel)]=\"user.password\"\r\n                    autocomplete=\"new-password\" required>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"given_name\">Given name</label>\r\n                  <input id=\"given_name\" name=\"givenName\" class=\"form-control form-control-sm\" [(ngModel)]=\"user.givenName\" placeholder=\"Enter Given name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"surname\">Surname</label>\r\n                  <input id=\"surname\" name=\"surname\" class=\"form-control form-control-sm\" [(ngModel)]=\"user.surname\" placeholder=\"Enter surname\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"phone_number\">Phone number</label>\r\n                  <input id=\"phone_number\" name=\"phoneNumber\" class=\"form-control form-control-sm\" [(ngModel)]=\"user.phoneNumber\" placeholder=\"Enter phone number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"company_phone_number\">Company phone number</label>\r\n                  <input id=\"company_phone_number\" name=\"companyPhoneNumber\" class=\"form-control form-control-sm\" [(ngModel)]=\"user.companyPhoneNumber\"\r\n                    placeholder=\"Enter your company phone number\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 col-lg-6\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col\">\r\n                  <label class=\"col-form-label-sm no-wrap mb-0\" for=\"company_email\">Company email</label>\r\n                  <input id=\"company_email\" name=\"companyEmail\" class=\"form-control form-control-sm\" [(ngModel)]=\"user.companyEmail\" #compEmail=\"ngModel\"\r\n                    [email]=\"true\" tmFocus validateEmail placeholder=\"Enter your company email address\">\r\n                </div>\r\n                <small *ngIf=\"!compEmail.valid && !compEmail.pristine\" class=\"text-danger\">Please enter a valid email address</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header=\"Select Organization\" icon=\"pax.png\">\r\n        <div *ngIf=\"!organizationSelected\">\r\n          <app-search-organization (organizationResult)=\"onOrganizationResult($event)\"></app-search-organization>\r\n        </div>\r\n\r\n        <div *ngIf=\"organizationSelected\" class=\"text-center\">\r\n          <div class=\"table-responsive\">\r\n            <app-ssn-table [entryData]=organizationProperties></app-ssn-table>\r\n          </div>\r\n          <button class=\"btn btn-ssn\" (click)=\"deselectOrganization()\">\r\n            <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n        </div>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header=\"User rights\" icon=\"verification-clipboard.png\">\r\n        <div class=\"form-group\">\r\n          <div class=\"text-center\">\r\n            <span class=\"no-wrap\">Select a role for this user</span>\r\n          </div>\r\n          <ng-select id=\"roleSelected\" [items]=\"roleList\" [multiple]=\"false\" [closeOnSelect]=\"true\" bindLabel=\"name\" placeholder=\"Select role\"\r\n            [(ngModel)]=\"user.roleName\">\r\n          </ng-select>\r\n        </div>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header=\"Confirm User Registration\">\r\n        <div class=\"text-center\" *ngIf=\"!(user.email && emailChecked && !emailTaken && user.password && organizationSelected && user.roleName)\">\r\n          <div class=\"mb-3\">\r\n            <p class=\"mb-0\" *ngIf=\"!user.email\">Email not set.</p>\r\n            <p class=\"mb-0\" *ngIf=\"user.email && emailChecked && emailTaken\">Selected email is already in use.</p>\r\n            <p class=\"mb-0\" *ngIf=\"!user.password\">Password not set.</p>\r\n            <p class=\"mb-0\" *ngIf=\"!organizationSelected\">Organization not selected.</p>\r\n            <p class=\"mb-0\" *ngIf=\"!user.roleName\">Role not assigned.</p>\r\n          </div>\r\n          <button class=\"btn btn-ssn\" disabled>Register User</button>\r\n        </div>\r\n        <div class=\"text-center\" *ngIf=\"user.email && emailChecked && !emailTaken && user.password && organizationSelected && user.roleName\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr class=\"bg-ssn text-ssn\">\r\n                  <th *ngIf=\"user.givenName\">Given name</th>\r\n                  <th *ngIf=\"user.surname\">Surname</th>\r\n                  <th>Email</th>\r\n                  <th *ngIf=\"user.phoneNumber\">Phone number</th>\r\n                  <th>Organization</th>\r\n                  <th>Role</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr>\r\n                  <td *ngIf=\"user.givenName\">{{ user.givenName }}</td>\r\n                  <td *ngIf=\"user.surname\">{{ user.surname }}</td>\r\n                  <td> {{ user.email }} </td>\r\n                  <td *ngIf=\"user.phoneNumber\">{{ user.phoneNumber }}</td>\r\n                  <td>{{ organizationModel.name }}</td>\r\n                  <td>{{ user.roleName }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <button class=\"btn btn-ssn\" (click)=\"registerUserWithPassword()\">Register User</button>\r\n        </div>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n</app-ssn-bg>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__ = __webpack_require__("./src/app/shared/components/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_constants_organization_properties__ = __webpack_require__("./src/app/shared/constants/organization-properties.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RESULT_SUCCES = 'User was successfully registered.';
var RESULT_FAILURE = 'There was a problem when trying to register the user. Please try again later.';
var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(accountService, contentService, modalService) {
        this.accountService = accountService;
        this.contentService = contentService;
        this.modalService = modalService;
        this.user = {
            email: '',
            phoneNumber: '',
            givenName: '',
            surname: '',
            password: '',
            roleName: '',
            organizationId: '',
            companyEmail: '',
            companyPhoneNumber: ''
        };
        this.organizationProperties = new __WEBPACK_IMPORTED_MODULE_6_app_shared_constants_organization_properties__["a" /* OrganizationProperties */]().getPropertyList();
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllRolesSubscription = this.accountService.getAllRoles().subscribe(function (data) { return _this.roleList = data; });
        this.getEmailLink();
    };
    RegisterUserComponent.prototype.ngOnDestroy = function () {
        this.getAllRolesSubscription.unsubscribe();
    };
    RegisterUserComponent.prototype.getEmailLink = function () {
        this.accountService.getEmailLink().subscribe(function (result) {
            if (result) {
            }
        });
    };
    RegisterUserComponent.prototype.userExists = function (emailValid) {
        var _this = this;
        if (emailValid) {
            return this.accountService.emailTaken(this.user.email)
                .subscribe(function (result) {
                _this.emailTaken = result;
                _this.emailChecked = true;
            });
        }
    };
    RegisterUserComponent.prototype.registerUserWithPassword = function () {
        var _this = this;
        this.accountService.registerUser(this.user)
            .subscribe(function (result) {
            if (result) {
                console.log(result);
                _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_SUCCESS, RESULT_SUCCES);
            }
        }, function (error) {
            console.log(error);
            _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE, RESULT_FAILURE);
        });
    };
    RegisterUserComponent.prototype.onOrganizationResult = function (organizationResult) {
        this.setOrganization(organizationResult);
    };
    RegisterUserComponent.prototype.setOrganization = function (organizationData) {
        this.organizationModel = organizationData;
        this.user.organizationId = organizationData.organizationId;
        this.organizationSelected = true;
        __WEBPACK_IMPORTED_MODULE_6_app_shared_constants_organization_properties__["a" /* OrganizationProperties */].setOrganizationData(this.organizationProperties, this.organizationModel);
    };
    RegisterUserComponent.prototype.deselectOrganization = function () {
        this.organizationModel = null;
        this.user.organizationId = null;
        this.organizationSelected = false;
    };
    RegisterUserComponent.prototype.goBack = function () {
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_PORT_CALLS);
    };
    RegisterUserComponent.prototype.openConfirmationModal = function (modalType, bodyText) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */]);
        modalRef.componentInstance.modalType = modalType;
        modalRef.componentInstance.bodyText = bodyText;
        modalRef.result.then(function (result) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goBack();
            }
        }, function (reason) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goBack();
            }
        });
    };
    RegisterUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-user',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4_app_shared_services_account_service__["a" /* AccountService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_shared_services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/content-container.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/content-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"selectedComponent\">\r\n  <app-register-user *ngSwitchCase=\"cn.REGISTER_USER\"></app-register-user>\r\n  <app-view-ship-info *ngSwitchCase=\"cn.VIEW_SHIPS\"></app-view-ship-info>\r\n  <app-register-ship *ngSwitchCase=\"cn.REGISTER_SHIP\"></app-register-ship>\r\n  <app-view-location-info *ngSwitchCase=\"cn.LOCATIONS\"></app-view-location-info>\r\n  <app-register-location *ngSwitchCase=\"cn.REGISTER_LOCATION\"></app-register-location>\r\n  <app-view-organization-info *ngSwitchCase=\"cn.VIEW_ORGANIZATIONS\"></app-view-organization-info>\r\n  <app-register-organization *ngSwitchCase=\"cn.REGISTER_ORGANIZATION\"></app-register-organization>\r\n  <app-port-call *ngSwitchCase=\"cn.VIEW_PORT_CALLS\"></app-port-call>\r\n  <app-new-port-call-draft *ngSwitchCase=\"cn.REGISTER_PORT_CALL_DRAFT\"></app-new-port-call-draft>\r\n  <app-registration *ngSwitchCase=\"cn.REGISTER_PORT_CALL\"></app-registration>\r\n  <app-view-port-call *ngSwitchCase=\"cn.VIEW_PORT_CALL\"></app-view-port-call>\r\n  <app-clearance *ngSwitchCase=\"cn.PORT_CALL_CLEARANCE\"></app-clearance>\r\n  <div class=\"alert alert-danger\" *ngSwitchDefault>Oops, something went wrong. Please reload the page.</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/content-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentContainerComponent = /** @class */ (function () {
    function ContentContainerComponent(contentService) {
        this.contentService = contentService;
        this.cn = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__["a" /* CONTENT_NAMES */];
    }
    ContentContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentNameSubscription = this.contentService.contentName$.subscribe(function (content) {
            _this.selectedComponent = content;
        });
    };
    ContentContainerComponent.prototype.ngOnDestroy = function () {
        this.contentNameSubscription.unsubscribe();
    };
    ContentContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content-container',
            template: __webpack_require__("./src/app/main-content/content-container/content-container.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/content-container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__["a" /* ContentService */]])
    ], ContentContainerComponent);
    return ContentContainerComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/content-container.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentContainerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basis_data_basis_data_module__ = __webpack_require__("./src/app/main-content/content-container/basis-data/basis-data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_container_component__ = __webpack_require__("./src/app/main-content/content-container/content-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__port_call_port_call_module__ = __webpack_require__("./src/app/main-content/content-container/port-call/port-call.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ContentContainerModule = /** @class */ (function () {
    function ContentContainerModule() {
    }
    ContentContainerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__port_call_port_call_module__["a" /* PortCallModule */],
                __WEBPACK_IMPORTED_MODULE_4__basis_data_basis_data_module__["a" /* BasisDataModule */],
                __WEBPACK_IMPORTED_MODULE_3_app_shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__content_container_component__["a" /* ContentContainerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__content_container_component__["a" /* ContentContainerComponent */]]
        })
    ], ContentContainerModule);
    return ContentContainerModule;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/clearance/clearance.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/clearance/clearance.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-bg header=\"PORT CALL CLEARANCE\" icon=\"stamp.png\">\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col\">\r\n      <app-ship-info-table></app-ship-info-table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col\">\r\n      <app-location-time-info-table></app-location-time-info-table>\r\n    </div>\r\n  </div>\r\n\r\n  <app-confirmation-view></app-confirmation-view>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ssn-card header=\"Clearance\" icon=\"stamp.png\">\r\n        <div class=\"form-group\">\r\n          <label for=\"remark\">Remark</label>\r\n          <textarea class=\"form-control\" rows=\"3\" id=\"remark\" [(ngModel)]=\"clearanceText\"></textarea>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <button class=\"btn btn-success\" (click)=\"showWarningBox(content, true)\">\r\n            <div class=\"mx-auto\">\r\n              <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"32px\">\r\n            </div>\r\n            <small>Accept</small>\r\n          </button>\r\n          <button class=\"btn btn-danger\" (click)=\"showWarningBox(content, false)\">\r\n            <div class=\"mx-auto\">\r\n              <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"32px\">\r\n            </div>\r\n            <small>Reject</small>\r\n          </button>\r\n        </div>\r\n      </app-ssn-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-center\">\r\n    <div class=\"col\">\r\n      <button class=\"btn btn-outline-light\" (click)=\"goBack()\" (mouseover)=\"backButtonIcon='left-arrow'\" (mouseout)=\"backButtonIcon='white/left-arrow'\">\r\n        <img src=\"assets/images/icons/128x128/{{backButtonIcon}}.png\" height=\"32px\">\r\n        <span class=\"no-wrap\"> GO BACK</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</app-ssn-bg>\r\n\r\n<ng-template #content let-close=\"close()\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Confirm Clearance</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div *ngIf=\"clearanceModel.remark\">\r\n      <span>Are you sure you want to submit a clearance response with the following remark:</span>\r\n      <br>\r\n      <pre>{{ clearanceText }}</pre>\r\n    </div>\r\n    <div *ngIf=\"!clearanceModel.remark\">\r\n      <span>Are you sure you want to submit a clearance response with no remark?</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-success\" *ngIf=\"givingClearance\" (click)=\"saveClearance(); close\">\r\n      <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"24px\">\r\n      <span>Give Clearance</span>\r\n    </button>\r\n    <button class=\"btn btn-danger\" *ngIf=\"!givingClearance\" (click)=\"saveClearance(); close\">\r\n      <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\">\r\n      <span>Reject Clearance</span>\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-ssn\" (click)=\"close\">\r\n      <span>Cancel</span>\r\n    </button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/clearance/clearance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_models_clearance_model__ = __webpack_require__("./src/app/shared/models/clearance-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ClearanceComponent = /** @class */ (function () {
    function ClearanceComponent(contentService, modalService, portCallService, shipService) {
        this.contentService = contentService;
        this.modalService = modalService;
        this.portCallService = portCallService;
        this.shipService = shipService;
        this.clearanceModel = new __WEBPACK_IMPORTED_MODULE_3_app_shared_models_clearance_model__["a" /* ClearanceModel */]();
        this.backButtonIcon = 'white/left-arrow';
        this.clearanceList = [];
    }
    ClearanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clearanceListSubscription = this.portCallService.clearanceListData$.subscribe(function (data) {
            if (data) {
                _this.clearanceList = data;
                _this.portCallService.clearanceData$.subscribe(function (clearanceUser) {
                    if (clearanceUser) {
                        _this.clearanceModel = _this.clearanceList.find(function (cl) { return cl.organizationId === clearanceUser.organizationId; });
                        _this.clearanceText = _this.clearanceModel.remark;
                    }
                });
            }
        });
        this.shipDataSubscription = this.portCallService.shipData$.subscribe(function (shipResult) {
            _this.shipService.setShipOverviewData(shipResult);
        });
    };
    ClearanceComponent.prototype.ngOnDestroy = function () {
        this.clearanceListSubscription.unsubscribe();
        this.shipDataSubscription.unsubscribe();
    };
    ClearanceComponent.prototype.showWarningBox = function (content, clearance) {
        this.givingClearance = clearance;
        this.modalService.open(content);
    };
    ClearanceComponent.prototype.saveClearance = function () {
        this.clearanceModel.remark = this.clearanceText;
        this.clearanceModel.cleared = this.givingClearance;
        this.portCallService.saveClearance(this.clearanceModel);
    };
    ClearanceComponent.prototype.goBack = function () {
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_PORT_CALLS);
    };
    ClearanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clearance',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/clearance/clearance.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/clearance/clearance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_services_port_call_service__["a" /* PortCallService */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_services_ship_service__["a" /* ShipService */]])
    ], ClearanceComponent);
    return ClearanceComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/activate-port-call/activate-port-call.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/activate-port-call/activate-port-call.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Activate Port Call\" icon=\"save.png\" class=\"text-center\">\r\n  <div class=\"text-center\">\r\n\r\n    <div *ngIf=\"!prevAndNextPortCallDataIsPristine\" class=\"row\">\r\n\r\n      <div *ngIf=\"voyagesMeta.valid\" class=\"col\">\r\n        <div class=\"alert alert-warning\">\r\n          <span>Warning: Voyages are unsaved.</span>\r\n          <br>\r\n          <button class=\"btn btn-ssn mt-2\" (click)=\"savePrevAndNextPortCall()\">\r\n            <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\"> Save Voyages</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"!voyagesMeta.valid\" class=\"col\">\r\n        <div class=\"alert alert-danger\">\r\n          <span>Error: Voyages contains invalid data.</span>\r\n          <br>\r\n          <button class=\"btn btn-ssn mt-2\" disabled>\r\n            <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\"> Save Voyages</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!detailsDataIsPristine\" class=\"row\">\r\n\r\n      <div *ngIf=\"detailsMeta.valid\" class=\"col\">\r\n        <div class=\"alert alert-warning\">\r\n          <span>Warning: Port Call Details are unsaved.</span>\r\n          <br>\r\n          <button class=\"btn btn-ssn mt-2\" (click)=\"saveDetails()\">\r\n            <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\"> Save Details</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"!detailsMeta.valid\" class=\"col\">\r\n        <div class=\"alert alert-danger\">\r\n          <span>Error: Port Call Details contains invalid data.</span>\r\n          <br>\r\n          <button class=\"btn btn-ssn mt-2\" disabled>\r\n            <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\"> Save Details</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!shipStoresDataIsPristine && shipStoresIsChecked\" class=\"row\">\r\n      <div class=\"col\">\r\n        <div class=\"alert alert-warning\">\r\n          <span>Warning: Ship Stores List is unsaved.</span>\r\n          <br>\r\n          <button class=\"btn btn-ssn mt-2\" (click)=\"saveShipStores()\">\r\n            <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\"> Save Ship Stores\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!portCallIsDraft\">\r\n      <div class=\"col\">\r\n        <div class=\"text-center\">\r\n          <span>Port call is already active. You can still update the information.</span>\r\n          <br>\r\n          <button class=\"btn btn-ssn mt-2\" (click)=\"goBack()\">\r\n            <img src=\"assets/images/icons/128x128/white/left-arrow.png\" height=\"24px\"> Return to overview</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"portCallIsDraft\">\r\n      <div *ngIf=\"(detailsDataIsPristine && detailsMeta.valid) && prevAndNextPortCallDataIsPristine\" class=\"col\">\r\n        <p class=\"mb-0\">After activating the port call, it will no longer be a draft, and it will be visble for authorities to review.</p>\r\n        <p>This action cannot be undone.</p>\r\n        <button class=\"btn btn-ssn\" (click)=\"send()\">\r\n          <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\"> Activate</button>\r\n      </div>\r\n      <div *ngIf=\"!((detailsDataIsPristine && detailsMeta.valid) && prevAndNextPortCallDataIsPristine)\" class=\"col\">\r\n        <button class=\"btn btn-ssn\" disabled>\r\n          <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\"> Activate</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/activate-port-call/activate-port-call.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivatePortCallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__ = __webpack_require__("./src/app/shared/components/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_models_port_call_details_model__ = __webpack_require__("./src/app/shared/models/port-call-details-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_services_prev_and_next_poc_service__ = __webpack_require__("./src/app/shared/services/prev-and-next-poc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_port_call_ship_stores_service__ = __webpack_require__("./src/app/shared/services/fal-ship-stores.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RESULT_SUCCES = 'This port call has been activated, and is now awaiting clearance.';
var RESULT_FAILURE = 'There was a problem when trying to activate this port call. Please try again later.';
var ActivatePortCallComponent = /** @class */ (function () {
    function ActivatePortCallComponent(contentService, portCallService, prevAndNextPocService, shipStoresService, modalService) {
        this.contentService = contentService;
        this.portCallService = portCallService;
        this.prevAndNextPocService = prevAndNextPocService;
        this.shipStoresService = shipStoresService;
        this.modalService = modalService;
        this.prevAndNextPortCallDataIsPristine = true;
        this.detailsDataIsPristine = true;
        this.shipStoresDataIsPristine = true;
        this.shipStoresIsChecked = false;
        this.otherPurposeName = '';
        this.detailsModel = new __WEBPACK_IMPORTED_MODULE_4_app_shared_models_port_call_details_model__["a" /* PortCallDetailsModel */]();
        this.etdModel = null;
        this.etaModel = null;
        this.portCallIsActive = false;
        this.portCallIsDraft = false;
        this.STATUS_ACTIVE = 'Active';
        this.STATUS_DRAFT = 'Draft';
    }
    ActivatePortCallComponent.prototype.ngOnInit = function () {
        var _this = this;
        //
        // Voyages
        //
        this.voyagesIsPristineSubscription = this.prevAndNextPocService.dataIsPristine$.subscribe(function (pristineData) {
            _this.prevAndNextPortCallDataIsPristine = pristineData;
        });
        this.prevPortOfCallDataSubscription = this.prevAndNextPocService.prevPortOfCallData$.subscribe(function (prevLocationData) {
            _this.prevLocationModel = prevLocationData;
        });
        this.nextPortOfCallDataSubscription = this.prevAndNextPocService.nextPortOfCallData$.subscribe(function (nextLocationData) {
            _this.nextLocationModel = nextLocationData;
        });
        this.prevPortOfCallEtdSubscription = this.prevAndNextPocService.prevPortOfCallEtdData$.subscribe(function (etdData) {
            if (etdData) {
                var dateTime = new Date(etdData);
                _this.etdModel = {
                    date: new __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
                    time: new __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](dateTime.getHours(), dateTime.getMinutes(), 0)
                };
            }
            else {
                _this.etdModel = null;
            }
        });
        this.nextPortOfCallEtaSubscription = this.prevAndNextPocService.nextPortOfCallEtaData$.subscribe(function (etaData) {
            if (etaData) {
                var dateTime = new Date(etaData);
                _this.etaModel = {
                    date: new __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
                    time: new __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](dateTime.getHours(), dateTime.getMinutes(), 0)
                };
            }
            else {
                _this.etaModel = null;
            }
        });
        this.voyagesMetaSubscription = this.prevAndNextPocService.prevAndNextPortOfCallMeta$.subscribe(function (metaData) {
            if (metaData) {
                _this.voyagesMeta = metaData;
            }
        });
        //
        // Details
        //
        this.detailsPristineSubscription = this.portCallService.detailsPristine$.subscribe(function (detailsDataIsPristine) {
            _this.detailsDataIsPristine = detailsDataIsPristine;
        });
        this.detailsIdentificationSubscription = this.portCallService.detailsIdentificationData$.subscribe(function (detailsIdentificationData) {
            if (detailsIdentificationData) {
                _this.detailsIdentificationModel = detailsIdentificationData;
                _this.portCallId = detailsIdentificationData.portCallId;
            }
        });
        this.crewPassengersAndDimensionsDataSubscription = this.portCallService.crewPassengersAndDimensionsData$.subscribe(function (cpadData) {
            if (cpadData) {
                _this.crewPassengersAndDimensionsModel = cpadData;
            }
        });
        this.reportingForThisPortCallDataSubscription = this.portCallService.reportingForThisPortCallData$.subscribe(function (reportingData) {
            if (reportingData) {
                _this.reportingModel = reportingData;
            }
        });
        this.portCallPurposeDataSubscription = this.portCallService.portCallPurposeData$.subscribe(function (purposeData) {
            if (purposeData) {
                _this.purposeModel = purposeData;
            }
        });
        this.otherPurposeNameSubscription = this.portCallService.otherPurposeName$.subscribe(function (otherPurposeNameData) {
            if (otherPurposeNameData) {
                _this.otherPurposeName = otherPurposeNameData;
            }
        });
        this.crewPassengersAndDimensionsMetaSubscription = this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(function (metaData) {
            _this.detailsMeta = metaData;
        });
        //
        // Ship Stores
        //
        this.shipStoresDataSubscription = this.shipStoresService.shipStoresList$.subscribe(function (shipStoresData) {
            if (shipStoresData) {
                _this.shipStoresList = shipStoresData;
            }
        });
        this.shipStoresIsPristineSubscription = this.shipStoresService.dataIsPristine$.subscribe(function (pristineData) {
            _this.shipStoresDataIsPristine = pristineData;
        });
        this.shipStoresIsCheckedSubscription = this.shipStoresService.isCheckedInProgressBar$.subscribe(function (isCheckedData) {
            _this.shipStoresIsChecked = isCheckedData;
        });
        //
        // Status
        //
        this.portCallStatusDataSubscription = this.portCallService.portCallStatusData$.subscribe(function (statusData) {
            if (statusData) {
                if (statusData === _this.STATUS_DRAFT) {
                    _this.portCallIsDraft = true;
                }
                else {
                    _this.portCallIsDraft = false;
                }
                _this.portCallStatus = statusData;
            }
        });
    };
    ActivatePortCallComponent.prototype.ngOnDestroy = function () {
        this.voyagesIsPristineSubscription.unsubscribe();
        this.prevPortOfCallDataSubscription.unsubscribe();
        this.nextPortOfCallDataSubscription.unsubscribe();
        this.prevPortOfCallEtdSubscription.unsubscribe();
        this.nextPortOfCallEtaSubscription.unsubscribe();
        this.detailsPristineSubscription.unsubscribe();
        this.detailsIdentificationSubscription.unsubscribe();
        this.crewPassengersAndDimensionsDataSubscription.unsubscribe();
        this.reportingForThisPortCallDataSubscription.unsubscribe();
        this.portCallPurposeDataSubscription.unsubscribe();
        this.otherPurposeNameSubscription.unsubscribe();
        this.crewPassengersAndDimensionsMetaSubscription.unsubscribe();
        this.portCallStatusDataSubscription.unsubscribe();
        this.shipStoresDataSubscription.unsubscribe();
        this.shipStoresIsCheckedSubscription.unsubscribe();
        this.shipStoresIsPristineSubscription.unsubscribe();
    };
    ActivatePortCallComponent.prototype.savePrevAndNextPortCall = function () {
        var prevDate = new Date(this.etdModel.date.year, this.etdModel.date.month - 1, this.etdModel.date.day, this.etdModel.time.hour, this.etdModel.time.minute);
        var nextDate = new Date(this.etaModel.date.year, this.etaModel.date.month - 1, this.etaModel.date.day, this.etaModel.time.hour, this.etaModel.time.minute);
        this.portCallService.savePrevAndNextPortCall(this.portCallId, this.prevLocationModel, this.nextLocationModel, prevDate, nextDate);
    };
    ActivatePortCallComponent.prototype.saveDetails = function () {
        this.detailsModel.portCallDetailsId = this.detailsIdentificationModel.portCallDetailsId;
        this.detailsModel.portCallId = this.detailsIdentificationModel.portCallId;
        this.detailsModel.numberOfCrew = this.crewPassengersAndDimensionsModel.numberOfCrew;
        this.detailsModel.numberOfPassengers = this.crewPassengersAndDimensionsModel.numberOfPassengers;
        this.detailsModel.airDraught = this.crewPassengersAndDimensionsModel.airDraught;
        this.detailsModel.actualDraught = this.crewPassengersAndDimensionsModel.actualDraught;
        this.detailsModel.reportingCargo = this.reportingModel.reportingCargo;
        this.detailsModel.reportingCrew = this.reportingModel.reportingCrew;
        this.detailsModel.reportingDpg = this.reportingModel.reportingDpg;
        this.detailsModel.reportingPax = this.reportingModel.reportingPax;
        this.detailsModel.reportingShipStores = this.reportingModel.reportingShipStores;
        this.portCallService.saveDetails(this.detailsModel, this.purposeModel, this.otherPurposeName);
        console.log('META: ', this.detailsMeta.valid, '\nPRISTINE: ', this.detailsDataIsPristine);
    };
    ActivatePortCallComponent.prototype.saveShipStores = function () {
        this.shipStoresList = this.shipStoresService.setSequenceNumbers(this.shipStoresList);
        this.shipStoresService.updateShipStores(this.shipStoresList).subscribe(function (res) { });
    };
    ActivatePortCallComponent.prototype.send = function () {
        var _this = this;
        this.portCallService
            .updatePortCallStatusActive(this.detailsIdentificationModel.portCallId)
            .subscribe(function (updateStatusResponse) {
            console.log('Status successfully updated.');
            _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_SUCCESS, RESULT_SUCCES);
        }, function (error) {
            console.log(error);
            _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE, RESULT_FAILURE);
        });
    };
    ActivatePortCallComponent.prototype.goBack = function () {
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_PORT_CALLS);
    };
    ActivatePortCallComponent.prototype.openConfirmationModal = function (modalType, bodyText) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */]);
        modalRef.componentInstance.modalType = modalType;
        modalRef.componentInstance.bodyText = bodyText;
        modalRef.result.then(function (result) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goBack();
            }
        }, function (reason) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goBack();
            }
        });
    };
    ActivatePortCallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-activate-port-call',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/activate-port-call/activate-port-call.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/confirmation/activate-port-call/activate-port-call.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_services_port_call_service__["a" /* PortCallService */],
            __WEBPACK_IMPORTED_MODULE_7_app_shared_services_prev_and_next_poc_service__["a" /* PrevAndNextPocService */],
            __WEBPACK_IMPORTED_MODULE_10__shared_services_port_call_ship_stores_service__["a" /* FalShipStoresService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ActivatePortCallComponent);
    return ActivatePortCallComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/confirmation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-confirmation-view></app-confirmation-view>\r\n\r\n<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <app-activate-port-call></app-activate-port-call>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmationComponent = /** @class */ (function () {
    function ConfirmationComponent() {
    }
    ConfirmationComponent.prototype.ngOnInit = function () { };
    ConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirmation',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/confirmation.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/confirmation/confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/confirmation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activate_port_call_activate_port_call_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/activate-port-call/activate-port-call.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmation_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ConfirmationModule = /** @class */ (function () {
    function ConfirmationModule() {
    }
    ConfirmationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_7_app_shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__activate_port_call_activate_port_call_component__["a" /* ActivatePortCallComponent */],
                __WEBPACK_IMPORTED_MODULE_2__confirmation_component__["a" /* ConfirmationComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirmation_component__["a" /* ConfirmationComponent */]
            ]
        })
    ], ConfirmationModule);
    return ConfirmationModule;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/new-port-call-draft.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/new-port-call-draft.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-bg header=\"NEW PORT CALL DRAFT\" icon=\"portcall.png\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ship-location-time></app-ship-location-time>\r\n    </div>\r\n  </div>\r\n</app-ssn-bg>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/new-port-call-draft.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPortCallDraftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewPortCallDraftComponent = /** @class */ (function () {
    function NewPortCallDraftComponent() {
    }
    NewPortCallDraftComponent.prototype.ngOnInit = function () {
    };
    NewPortCallDraftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-port-call-draft',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/new-port-call-draft.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/new-port-call-draft.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewPortCallDraftComponent);
    return NewPortCallDraftComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/confirm-data/confirm-data.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/confirm-data/confirm-data.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Confirm Port Call Draft\" icon=\"checkmark.png\">\r\n  <div *ngIf=\"!shipFound || !locationFound || !dateTimeFound\" class=\"text-center\">\r\n    <p *ngIf=\"!shipFound\" class=\"no-wrap mb-0\">No ship selected.</p>\r\n    <p *ngIf=\"!locationFound\" class=\"no-wrap mb-0\">No location selected.</p>\r\n    <p *ngIf=\"!dateTimeFound\" class=\"no-wrap\">ETA and ETD not set.</p>\r\n    <button class=\"btn btn-ssn\" disabled>\r\n      <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"24px\" /> Create Port Call Draft</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"shipFound && locationFound && dateTimeFound\" class=\"text-center\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr class=\"bg-ssn text-ssn\">\r\n            <th>Ship flag</th>\r\n            <th>Ship name</th>\r\n            <th>Location Name</th>\r\n            <th>Location Code</th>\r\n            <th>ETA</th>\r\n            <th>ETD</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>\r\n              <img src=\"assets/images/flags/128x128/{{shipModel.shipFlagCode.country.twoCharCode | lowercase}}.png\" height=\"20px\" />\r\n            </td>\r\n            <td>{{ shipModel.name }}</td>\r\n            <td>{{ locationModel.name }}</td>\r\n            <td>{{ locationModel.locationCode }}</td>\r\n            <td>{{ etaEtdModel.eta.date.year }}-{{ dateTimeFormat(etaEtdModel.eta.date.month) }}-{{ dateTimeFormat(etaEtdModel.eta.date.day)\r\n              }} {{ dateTimeFormat(etaEtdModel.eta.time.hour) }}:{{ dateTimeFormat(etaEtdModel.eta.time.minute) }}</td>\r\n            <td>{{ etaEtdModel.etd.date.year }}-{{ dateTimeFormat(etaEtdModel.etd.date.month) }}-{{ dateTimeFormat(etaEtdModel.etd.date.day)\r\n              }} {{ dateTimeFormat(etaEtdModel.etd.time.hour) }}:{{ dateTimeFormat(etaEtdModel.etd.time.minute) }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <button class=\"btn btn-ssn\" (click)=\"startPortCallRegistration()\">\r\n      <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"24px\" /> Create Port Call Draft</button>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/confirm-data/confirm-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__ = __webpack_require__("./src/app/shared/components/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_port_call_status_types__ = __webpack_require__("./src/app/shared/constants/port-call-status-types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_models_port_call_details_model__ = __webpack_require__("./src/app/shared/models/port-call-details-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_models_port_call_model__ = __webpack_require__("./src/app/shared/models/port-call-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RESULT_SUCCESS = 'The port call draft was successfully created. You will now be taken to the wizard for ' +
    'registering the rest of the information and activating the port call.';
var RESULT_FAILURE = 'There was a problem when trying to create the new port call draft. Please try again later.';
var ConfirmDataComponent = /** @class */ (function () {
    function ConfirmDataComponent(portCallService, contentService, modalService) {
        this.portCallService = portCallService;
        this.contentService = contentService;
        this.modalService = modalService;
        this.portCallModel = new __WEBPACK_IMPORTED_MODULE_6_app_shared_models_port_call_model__["a" /* PortCallModel */]();
        this.dateTimeFound = false;
    }
    ConfirmDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shipDataSubscription = this.portCallService.shipData$.subscribe(function (shipData) {
            if (shipData) {
                _this.shipFound = true;
                _this.shipModel = shipData;
            }
            else {
                _this.shipFound = false;
            }
        });
        this.locationDataSubscription = this.portCallService.locationData$.subscribe(function (locationData) {
            if (locationData) {
                _this.locationFound = true;
                _this.locationModel = locationData;
            }
            else {
                _this.locationFound = false;
            }
        });
        this.etaEtdDataSubscription = this.portCallService.etaEtdData$.subscribe(function (etaEtdData) {
            if (etaEtdData && etaEtdData.eta !== null && etaEtdData.etd !== null) {
                _this.dateTimeFound = true;
                if (etaEtdData != null) {
                    _this.etaEtdModel = {
                        eta: {
                            date: new __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](etaEtdData.eta.year, etaEtdData.eta.month, etaEtdData.eta.day),
                            time: new __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](etaEtdData.eta.hour, etaEtdData.eta.minute, 0)
                        },
                        etd: {
                            date: new __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](etaEtdData.etd.year, etaEtdData.etd.month, etaEtdData.etd.day),
                            time: new __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](etaEtdData.etd.hour, etaEtdData.etd.minute, 0)
                        }
                    };
                }
            }
            else {
                _this.dateTimeFound = false;
            }
        });
    };
    ConfirmDataComponent.prototype.ngOnDestroy = function () {
        this.shipDataSubscription.unsubscribe();
        this.locationDataSubscription.unsubscribe();
        this.etaEtdDataSubscription.unsubscribe();
    };
    ConfirmDataComponent.prototype.dateTimeFormat = function (number) {
        if (number <= 9) {
            return '0' + number;
        }
        else {
            return number;
        }
    };
    ConfirmDataComponent.prototype.startPortCallRegistration = function () {
        var _this = this;
        this.portCallModel.shipId = this.shipModel.shipId;
        this.portCallModel.portCallStatusId = __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_port_call_status_types__["a" /* PortCallStatusTypes */].DRAFT_ID;
        this.portCallModel.locationId = this.locationModel.locationId;
        var eta = new Date(this.etaEtdModel.eta.date.year, this.etaEtdModel.eta.date.month - 1, this.etaEtdModel.eta.date.day, this.etaEtdModel.eta.time.hour, this.etaEtdModel.eta.time.minute);
        var etd = new Date(this.etaEtdModel.etd.date.year, this.etaEtdModel.etd.date.month - 1, this.etaEtdModel.etd.date.day, this.etaEtdModel.etd.time.hour, this.etaEtdModel.etd.time.minute);
        this.portCallModel.locationEta = eta;
        this.portCallModel.locationEtd = etd;
        this.portCallService.registerNewPortCall(this.portCallModel).subscribe(function (result) {
            console.log('New port call successfully registered.');
            // add list of authorities for clearance
            console.log('Registering authority clearance agencies to port call...');
            _this.portCallService.registerClearanceAgenciesForPortCall(result);
            // Set details
            var portCallDetails = new __WEBPACK_IMPORTED_MODULE_5_app_shared_models_port_call_details_model__["a" /* PortCallDetailsModel */]();
            portCallDetails.portCallId = result.portCallId;
            portCallDetails.portCallDetailsId = result.portCallId;
            _this.portCallService.setDetails(portCallDetails);
            _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_SUCCESS, RESULT_SUCCESS);
        }, function (error) {
            console.log(error);
            _this.openConfirmationModal(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE, RESULT_FAILURE);
        });
    };
    ConfirmDataComponent.prototype.openConfirmationModal = function (modalType, bodyText) {
        var _this = this;
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */]);
        modalRef.componentInstance.modalType = modalType;
        modalRef.componentInstance.bodyText = bodyText;
        modalRef.result.then(function (result) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goToPortCallWizard();
            }
        }, function (reason) {
            if (modalType !== __WEBPACK_IMPORTED_MODULE_2_app_shared_components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */].TYPE_FAILURE) {
                _this.goToPortCallWizard();
            }
        });
    };
    ConfirmDataComponent.prototype.goToPortCallWizard = function () {
        this.contentService.setPortCallForm('Port Call Details');
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_3_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].REGISTER_PORT_CALL);
    };
    ConfirmDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm-data',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/confirm-data/confirm-data.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/confirm-data/confirm-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8_app_shared_services_port_call_service__["a" /* PortCallService */],
            __WEBPACK_IMPORTED_MODULE_7_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ConfirmDataComponent);
    return ConfirmDataComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/eta-etd/eta-etd.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/eta-etd/eta-etd.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Select Arrival and Departure Time\" icon=\"time.png\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-6\">\r\n      <app-date-time-picker header=\"ETA\" (dateTimeResult)=\"onEtaResult($event)\"></app-date-time-picker>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6\">\r\n      <app-date-time-picker header=\"ETD\" (dateTimeResult)=\"onEtdResult($event)\"></app-date-time-picker>\r\n    </div>\r\n\r\n  </div>\r\n  \r\n  <div class=\"row\" *ngIf=\"dateSequenceError\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8 alert alert-danger\" role=\"alert\">\r\n      <span>Departure date can not be before arrival date.</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"timeSequenceError\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8 alert alert-danger\" role=\"alert\">\r\n      <span>Departure time must be after arrival time.</span>\r\n    </div>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/eta-etd/eta-etd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtaEtdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EtaEtdComponent = /** @class */ (function () {
    function EtaEtdComponent(portCallService) {
        this.portCallService = portCallService;
        this.etaEtdModel = {
            eta: null,
            etd: null
        };
        this.dateSequenceError = false;
        this.timeSequenceError = false;
    }
    EtaEtdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.etaEtdDataSubscription = this.portCallService.etaEtdData$.subscribe(function (etaEtdData) {
            if (etaEtdData != null) {
                _this.etaEtdModel = {
                    eta: {
                        date: new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](etaEtdData.eta.year, etaEtdData.eta.month, etaEtdData.eta.day),
                        time: new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](etaEtdData.eta.hour, etaEtdData.eta.minute, 0)
                    },
                    etd: {
                        date: new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](etaEtdData.etd.year, etaEtdData.etd.month, etaEtdData.etd.day),
                        time: new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](etaEtdData.etd.hour, etaEtdData.etd.minute, 0)
                    }
                };
            }
        });
    };
    EtaEtdComponent.prototype.ngOnDestroy = function () {
        this.etaEtdDataSubscription.unsubscribe();
    };
    EtaEtdComponent.prototype.onEtaResult = function (etaResult) {
        this.etaEtdModel.eta = etaResult;
        this.validateData();
    };
    EtaEtdComponent.prototype.onEtdResult = function (etdResult) {
        this.etaEtdModel.etd = etdResult;
        this.validateData();
    };
    EtaEtdComponent.prototype.validateData = function () {
        if (this.etaEtdModel.eta && this.etaEtdModel.etd) {
            var etaDate = new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](this.etaEtdModel.eta.date.year, this.etaEtdModel.eta.date.month, this.etaEtdModel.eta.date.day);
            var etdDate = new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](this.etaEtdModel.etd.date.year, this.etaEtdModel.etd.date.month, this.etaEtdModel.etd.date.day);
            this.dateSequenceError = etdDate.before(etaDate);
            if (etdDate.equals(etaDate)) {
                this.timeSequenceError = this.etaEtdModel.eta.time.hour > this.etaEtdModel.etd.time.hour
                    || (this.etaEtdModel.eta.time.hour === this.etaEtdModel.etd.time.hour
                        && this.etaEtdModel.eta.time.minute >= this.etaEtdModel.etd.time.minute);
            }
            else {
                this.timeSequenceError = false;
            }
        }
        else {
            this.dateSequenceError = false;
            this.timeSequenceError = false;
        }
        this.persistData();
    };
    EtaEtdComponent.prototype.persistData = function () {
        if (!this.dateSequenceError && !this.timeSequenceError && this.etaEtdModel && this.etaEtdModel.eta && this.etaEtdModel.etd) {
            var etaEtdData = {
                eta: Object.assign(this.etaEtdModel.eta.date, this.etaEtdModel.eta.time),
                etd: Object.assign(this.etaEtdModel.etd.date, this.etaEtdModel.etd.time)
            };
            // const formattedDate = this.portCallService.etaEtdDataFormat()
            this.portCallService.setEtaEtdData(etaEtdData);
        }
        else {
            this.portCallService.setEtaEtdData(null);
        }
    };
    EtaEtdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eta-etd',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/eta-etd/eta-etd.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/eta-etd/eta-etd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], EtaEtdComponent);
    return EtaEtdComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-location/find-location.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-location/find-location.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Select Location\" icon=\"location.png\">\r\n\r\n    <div *ngIf=\"!locationFound\" class=\"text-center\">\r\n        <app-search-location [restrictTypeHarbour]=true [showDropdown]=true (locationResult)=\"onLocationResult($event)\"></app-search-location>\r\n    </div>\r\n\r\n    <div *ngIf=\"locationFound\" class=\"text-center\">\r\n        <div class=\"table-responsive\">\r\n            <app-ssn-table [entryData]=\"locationProperties\"></app-ssn-table>\r\n        </div>\r\n        <button class=\"btn btn-ssn\" (click)=\"deselectLocation()\">\r\n            <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n    </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-location/find-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_properties__ = __webpack_require__("./src/app/shared/constants/location-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FindLocationComponent = /** @class */ (function () {
    function FindLocationComponent(portCallService) {
        this.portCallService = portCallService;
        this.locationFound = false;
        this.locationProperties = new __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_properties__["a" /* LocationProperties */]().getPropertyList();
    }
    FindLocationComponent.prototype.ngOnInit = function () { };
    FindLocationComponent.prototype.onLocationResult = function (locationResult) {
        if (locationResult) {
            this.locationFound = true;
            this.portCallService.setLocationData(locationResult);
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_properties__["a" /* LocationProperties */].setLocationData(this.locationProperties, locationResult);
            var twoCharCode = locationResult.country.twoCharCode.toLowerCase() || 'xx';
            var countryFlag = twoCharCode + '.png';
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_properties__["a" /* LocationProperties */].setCountry(this.locationProperties, locationResult.country.name, countryFlag);
        }
        else {
            this.locationFound = false;
            this.portCallService.setLocationData(null);
        }
    };
    FindLocationComponent.prototype.deselectLocation = function () {
        this.locationFound = false;
        this.portCallService.setLocationData(null);
    };
    FindLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-find-location',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-location/find-location.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-location/find-location.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], FindLocationComponent);
    return FindLocationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-ship/find-ship.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-ship/find-ship.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Select Ship\" icon=\"ship.png\">\r\n\r\n  <div *ngIf=\"!shipFound\">\r\n    <app-search-ship (shipResult)=\"onShipResult($event)\"></app-search-ship>\r\n  </div>\r\n\r\n  <div *ngIf=\"shipFound\" class=\"text-center\">\r\n    <div class=\"table-responsive\">\r\n      <app-ssn-table [entryData]=shipProperties></app-ssn-table>\r\n    </div>\r\n    <button class=\"btn btn-ssn\" (click)=\"deselectShip()\">\r\n      <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-ship/find-ship.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindShipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__ = __webpack_require__("./src/app/shared/constants/ship-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FindShipComponent = /** @class */ (function () {
    function FindShipComponent(portCallService) {
        this.portCallService = portCallService;
        this.shipFound = false;
        this.shipProperties = new __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */]().getPropertyList();
    }
    FindShipComponent.prototype.ngOnInit = function () { };
    FindShipComponent.prototype.onShipResult = function (shipResult) {
        if (shipResult) {
            var twoCharCode = shipResult.shipFlagCode.country.twoCharCode.toLowerCase() || 'xx';
            var countryFlag = twoCharCode + '.png';
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].setCountry(this.shipProperties, null, countryFlag);
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].setShipName(this.shipProperties, shipResult.name);
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].setCallSign(this.shipProperties, shipResult.callSign);
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].setImoNo(this.shipProperties, shipResult.imoNo);
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].setMmsiNo(this.shipProperties, shipResult.mmsiNo);
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].setGrossTonnage(this.shipProperties, shipResult.grossTonnage);
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].setNetTonnage(this.shipProperties, shipResult.netTonnage);
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].setLength(this.shipProperties, shipResult.length);
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].setShipType(this.shipProperties, shipResult.shipType.name);
            __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].setShipStatus(this.shipProperties, shipResult.shipStatus.name);
            this.shipFound = true;
            this.portCallService.setShipData(shipResult);
        }
        else {
            this.shipFound = false;
            this.portCallService.setShipData(null);
        }
    };
    FindShipComponent.prototype.deselectShip = function () {
        this.shipFound = false;
        this.portCallService.setShipData(null);
    };
    FindShipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-find-ship',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-ship/find-ship.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-ship/find-ship.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], FindShipComponent);
    return FindShipComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/ship-location-time.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/ship-location-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-find-ship></app-find-ship>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-find-location></app-find-location>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-eta-etd></app-eta-etd>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-confirm-data></app-confirm-data>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/ship-location-time.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipLocationTimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShipLocationTimeComponent = /** @class */ (function () {
    function ShipLocationTimeComponent() {
    }
    ShipLocationTimeComponent.prototype.ngOnInit = function () { };
    ShipLocationTimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ship-location-time',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/ship-location-time.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/ship-location-time.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShipLocationTimeComponent);
    return ShipLocationTimeComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-table\">\r\n  <div class=\"d-table-row\">\r\n\r\n    <div class=\"d-table-cell pl-1\" ngbTooltip=\"View port call information\" *ngIf=\"permissions.view\">\r\n      <button class=\"btn btn-sm btn-ssn\" (click)=\"onViewClick()\">\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/eye.png\" height=\"20px\" />\r\n        </div>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"d-table-cell pl-1\" *ngIf=\"permissions.edit\">\r\n      <button class=\"btn btn-sm btn-ssn\" ngbTooltip=\"Edit port call\" *ngIf=\"portCallIsCancelled\" disabled>\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/edit.png\" height=\"20px\" />\r\n        </div>\r\n      </button>\r\n\r\n      <button class=\"btn btn-sm btn-ssn\" ngbTooltip=\"Edit port call\" (click)=\"onEditClick()\" *ngIf=\"!portCallIsCancelled\">\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/edit.png\" height=\"20px\" />\r\n        </div>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"d-table-cell pl-1\" *ngIf=\"permissions.clearance\">\r\n      <button class=\"btn btn-sm btn-ssn\" *ngIf=\"portCallIsCancelled\" disabled>\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/stamp.png\" height=\"16px\" />\r\n        </div>\r\n      </button>\r\n\r\n      <button class=\"btn btn-sm btn-ssn\" ngbTooltip=\"Review port call clearance\" (click)=\"onClearanceClick()\" *ngIf=\"!portCallIsCancelled\">\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/stamp.png\" height=\"16px\" />\r\n        </div>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"d-table-cell pl-1\" *ngIf=\"permissions.cancel && !portCallIsDraft\">\r\n      <button class=\"btn btn-sm btn-ssn\" *ngIf=\"portCallIsDraft || portCallIsCancelled\" disabled>\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"16px\" />\r\n        </div>\r\n      </button>\r\n\r\n      <button class=\"btn btn-sm btn-ssn\" ngbTooltip=\"Cancel port call\" (click)=\"onCancelClick(cancelModal)\" *ngIf=\"!(portCallIsDraft || portCallIsCancelled)\">\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"16px\" />\r\n        </div>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"d-table-cell pl-1\" *ngIf=\"permissions.delete && portCallIsDraft\">\r\n      <button class=\"btn btn-sm btn-ssn\" ngbTooltip=\"Delete port call\" (click)=\"onDeleteClick(deleteModal)\">\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/trash.png\" height=\"16px\" />\r\n        </div>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<ng-template #cancelModal let-close=\"close()\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Cancel Port Call</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div>\r\n      <span>Are you sure you wish to cancel this port call?</span>\r\n      <br>\r\n      <span>This action cannot be undone.</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-danger\" (click)=\"cancelPortCall(); close\">\r\n      <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\">\r\n      <span>Cancel Port Call</span>\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-ssn\" (click)=\"close\">\r\n      <span>Exit</span>\r\n    </button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #deleteModal let-close=\"close()\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Delete Port Call</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div>\r\n      <span>Are you sure you wish to delete this port call?</span>\r\n      <br>\r\n      <span>This action cannot be undone.</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-danger\" (click)=\"deletePortCall(); close\">\r\n      <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\">\r\n      <span>Delete Port Call</span>\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-ssn\" (click)=\"close\">\r\n      <span>Exit</span>\r\n    </button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_port_call_claims__ = __webpack_require__("./src/app/shared/constants/port-call-claims.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_port_call_status_types__ = __webpack_require__("./src/app/shared/constants/port-call-status-types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_models_port_call_details_model__ = __webpack_require__("./src/app/shared/models/port-call-details-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_services_port_call_overview_service__ = __webpack_require__("./src/app/shared/services/port-call-overview.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_prev_and_next_poc_service__ = __webpack_require__("./src/app/shared/services/prev-and-next-poc.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ButtonRowComponent = /** @class */ (function () {
    function ButtonRowComponent(accountService, overviewService, contentService, portCallService, prevAndNextService, modalService) {
        this.accountService = accountService;
        this.overviewService = overviewService;
        this.contentService = contentService;
        this.portCallService = portCallService;
        this.prevAndNextService = prevAndNextService;
        this.modalService = modalService;
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.permissions = __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_port_call_claims__["a" /* PortCallClaims */].buttonRowPermissions;
        this.portCallIsDraft = false;
        this.portCallIsCancelled = false;
    }
    ButtonRowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallIsDraft = (this.rowData.overviewModel.status === __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_port_call_status_types__["a" /* PortCallStatusTypes */].DRAFT);
        this.portCallIsCancelled = (this.rowData.overviewModel.status === __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_port_call_status_types__["a" /* PortCallStatusTypes */].CANCELLED);
        this.accountService.userClaimsData$.subscribe(function (userClaims) {
            if (userClaims) {
                // Find user claims where claim type is Port Call
                var userClaimsTypePortCall_1 = userClaims.filter(function (claim) { return claim.type === __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_port_call_claims__["a" /* PortCallClaims */].TYPE; });
                var keys = Object.keys(_this.permissions);
                keys.forEach(function (key) {
                    _this.permissions[key] = (userClaimsTypePortCall_1.some(function (claim) { return claim.value.toUpperCase() === key.toString().toUpperCase(); }));
                });
            }
        });
        this.overviewService.overviewData$.subscribe(function (results) {
            if (results) {
                _this.overviewData = results;
            }
        });
        this.overviewService.draftOverviewData$.subscribe(function (results) {
            if (results) {
                _this.draftOverviewData = results;
            }
        });
        this.overviewService.clearedByUserAgencyOverviewData$.subscribe(function (results) {
            if (results) {
                _this.clearedOverviewData = results;
            }
        });
    };
    ButtonRowComponent.prototype.onViewClick = function () {
        this.setContent(__WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_PORT_CALL);
    };
    ButtonRowComponent.prototype.onEditClick = function () {
        this.contentService.setPortCallForm('Voyages');
        this.setContent(__WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].REGISTER_PORT_CALL);
    };
    ButtonRowComponent.prototype.onClearanceClick = function () {
        this.setContent(__WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].PORT_CALL_CLEARANCE);
    };
    ButtonRowComponent.prototype.onCancelClick = function (content) {
        this.modalService.open(content);
    };
    ButtonRowComponent.prototype.onDeleteClick = function (content) {
        this.modalService.open(content);
    };
    ButtonRowComponent.prototype.cancelPortCall = function () {
        var pcId = this.rowData.overviewModel.portCall.portCallId;
        this.rowData.overviewModel.status = __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_port_call_status_types__["a" /* PortCallStatusTypes */].CANCELLED;
        var htmlStatus = "<div class=\"text-danger\">" + this.rowData.overviewModel.status + "</div>";
        if (this.overviewData.find(function (r) { return r.overviewModel.portCall.portCallId === pcId; })) {
            this.overviewData.find(function (r) { return r.overviewModel.portCall.portCallId === pcId; }).status = htmlStatus;
            this.overviewService.setOverviewData(this.overviewData);
        }
        if (this.draftOverviewData.find(function (r) { return r.overviewModel.portCallId === pcId; })) {
            this.draftOverviewData.find(function (r) { return r.overviewModel.portCall.portCallId === pcId; }).status = htmlStatus;
            this.overviewService.setDraftData(this.draftOverviewData);
        }
        if (this.clearedOverviewData.find(function (r) { return r.overviewModel.portCallId === pcId; })) {
            this.clearedOverviewData.find(function (r) { return r.overviewModel.portCall.portCallId === pcId; }).status = htmlStatus;
            this.overviewService.setClearedData(this.clearedOverviewData);
        }
        this.portCallService.updatePortCallStatusCancelled(this.rowData.overviewModel.portCall.portCallId);
    };
    ButtonRowComponent.prototype.deletePortCall = function () {
        var _this = this;
        this.portCallService.deletePortCallDraft(this.rowData.overviewModel.portCall).subscribe(function (deleteResponse) {
            if (deleteResponse) {
                var newOverviewData = _this.overviewData.filter(function (row) { return row !== _this.rowData; });
                var newDraftData = _this.draftOverviewData.filter(function (row) { return row !== _this.rowData; });
                var newClearedData = _this.clearedOverviewData.filter(function (row) { return row !== _this.rowData; });
                _this.overviewService.setOverviewData(newOverviewData);
                _this.overviewService.setDraftData(newDraftData);
                _this.overviewService.setClearedData(newClearedData);
                console.log(deleteResponse);
            }
        }, function (error) {
            console.log(error);
        });
    };
    ButtonRowComponent.prototype.setContent = function (content) {
        this.setPortCall(content);
    };
    // NEW CLEANUP - Set methods
    ButtonRowComponent.prototype.setPortCall = function (content) {
        var _this = this;
        this.overviewService.setLoadingPortCall(true);
        this.contentService.setLoadingScreen(true, 'portcall.gif', 'Loading');
        this.overviewService.getOverview(this.rowData.overviewModel.portCall.portCallId).subscribe(function (data) {
            if (data) {
                console.log(data);
                _this.portCallService.setPortCall(data);
                _this.prevAndNextService.setPrevPortOfCall(data.portCall.previousLocation);
                _this.prevAndNextService.setPrevPortOfCallEtd(data.portCall.previousLocationEtd);
                _this.prevAndNextService.setNextPortOfCall(data.portCall.nextLocation);
                _this.prevAndNextService.setNextPortOfCallEta(data.portCall.nextLocationEta);
                _this.prevAndNextService.setDataPristine(true);
                _this.setPurpose(content);
            }
        });
    };
    ButtonRowComponent.prototype.setPurpose = function (content) {
        var _this = this;
        this.portCallService.getPurposeByPortCallId(this.rowData.overviewModel.portCall.portCallId).subscribe(function (purposeData) {
            if (purposeData) {
                if (purposeData.find(function (p) { return p.name === 'Other'; })) {
                    _this.portCallService.getOtherName(_this.rowData.overviewModel.portCall.portCallId).subscribe(function (otherNameData) {
                        _this.portCallService.setOtherPurposeName(otherNameData);
                        _this.portCallService.setPortCallPurposeData(purposeData);
                        _this.setDetails(content);
                    });
                }
                else {
                    _this.portCallService.setPortCallPurposeData(purposeData);
                    _this.setDetails(content);
                }
            }
            else {
                console.log('No purpose information has been registered for this port call.');
            }
        }, function (error) {
            console.log('Get Purpose Error: ', error);
        });
    };
    ButtonRowComponent.prototype.setDetails = function (content) {
        var _this = this;
        this.portCallService.getDetailsByPortCallId(this.rowData.overviewModel.portCall.portCallId).subscribe(function (detailsData) {
            if (detailsData) {
                _this.portCallService.setDetails(detailsData);
            }
            else {
                console.log('No details information has been registered for this port call.');
                var portCallDetails = new __WEBPACK_IMPORTED_MODULE_5_app_shared_models_port_call_details_model__["a" /* PortCallDetailsModel */]();
                portCallDetails.portCallDetailsId = _this.rowData.overviewModel.portCall.portCallId;
                portCallDetails.portCallId = _this.rowData.overviewModel.portCall.portCallId;
                _this.portCallService.setDetails(portCallDetails);
            }
            _this.contentService.setContent(content);
        }, function (error) {
            console.log('Get Details Error: ', error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonRowComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ButtonRowComponent.prototype, "rowData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ButtonRowComponent.prototype, "edit", void 0);
    ButtonRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-button-row',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_7_app_shared_services_constants_service__["a" /* ConstantsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_app_shared_services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_9_app_shared_services_port_call_overview_service__["a" /* PortCallOverviewService */],
            __WEBPACK_IMPORTED_MODULE_8_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_10_app_shared_services_port_call_service__["a" /* PortCallService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_services_prev_and_next_poc_service__["a" /* PrevAndNextPocService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ButtonRowComponent);
    return ButtonRowComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/clearance-row/clearance-row.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/clearance-row/clearance-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"no-wrap\">\r\n  <span *ngFor=\"let clearance of clearanceList\">\r\n    <span class=\"badge badge-warning\" ngbTooltip=\"Not reviewed by {{ clearance.organization.name }}\" *ngIf=\"clearance.cleared === null\">\r\n      <img src=\"assets/images/icons/128x128/white/stamp.png\" height=\"16px\">\r\n    </span>\r\n    <span class=\"badge badge-success\" ngbTooltip=\"Cleared by {{ clearance.organization.name }}\" *ngIf=\"clearance.cleared === true\">\r\n      <img src=\"assets/images/icons/128x128/white/checkmark.png\" height=\"16px\">\r\n    </span>\r\n    <span class=\"badge badge-danger\" ngbTooltip=\"Rejected by {{ clearance.organization.name }}\" *ngIf=\"clearance.cleared === false\">\r\n      <img src=\"assets/images/icons/128x128/white/rejected.png\" height=\"16px\">\r\n    </span>\r\n  </span>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/clearance-row/clearance-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearanceRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClearanceRowComponent = /** @class */ (function () {
    function ClearanceRowComponent() {
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ClearanceRowComponent.prototype.ngOnInit = function () {
        this.clearanceList = this.rowData.overviewModel.clearanceList;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ClearanceRowComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ClearanceRowComponent.prototype, "rowData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ClearanceRowComponent.prototype, "edit", void 0);
    ClearanceRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clearance-row',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/overview/clearance-row/clearance-row.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/overview/clearance-row/clearance-row.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClearanceRowComponent);
    return ClearanceRowComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = "/* Smart table */\r\n:root {\r\n    --color-primary: #002d50;\r\n    --color-primary-light: #37557c;\r\n    --color-primary-dark: #000128;\r\n    --color-primary-text: #ffffff;\r\n}\r\n:host /deep/ ng2-smart-table thead {\r\n    background-color: var(--color-primary);\r\n    color: white;\r\n}\r\n:host /deep/ .ng2-smart-filter input {\r\n    color: black;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort::after {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 4px solid white;\r\n    border-top: 4px solid transparent;\r\n    border-left: 4px solid transparent;\r\n    border-right: 4px solid transparent;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.asc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    margin-bottom: 2px;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.desc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    margin-bottom: -2px;\r\n}\r\n:host /deep/ ng2-smart-table a { \r\n    color:var(--color-primary-text); \r\n}\r\n:host /deep/ a.ng2-smart-page-link.page-link {  \r\n    color: var(--color-primary-dark);\r\n    border-color: #dee2e6;\r\n}\r\n:host /deep/ span.ng2-smart-page-link.page-link { \r\n    color: var(--color-primary-dark); \r\n    background-color: #dee2e6;\r\n    border-color: #dee2e6;        \r\n}"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n        <app-ssn-card header=\"Options\" icon=\"cogs.png\" collapsible=\"true\" collapsed=\"true\">\r\n            <div>\r\n                <button class=\"btn btn-sm btn-ssn\" *ngIf=\"!showCancelledPortCalls\" (click)=\"toggleCancelledPortCalls(true)\">Show cancelled port calls</button>\r\n                <button class=\"btn btn-sm btn-ssn\" *ngIf=\"showCancelledPortCalls\" (click)=\"toggleCancelledPortCalls(false)\">Hide cancelled port calls</button>\r\n            </div>\r\n        </app-ssn-card>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mb-3\">\r\n    <table class=\"table table-bordered text-center mx-auto mb-0\">\r\n        <thead class=\"bg-ssn text-white\">\r\n            <tr>\r\n                <th class=\"py-1\">\r\n                    <h5 class=\"mb-0\">Active Port Calls</h5>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n    </table>\r\n    <div class=\"table-responsive\">\r\n        <ng2-smart-table [settings]=\"tableSettings\" [source]=\"overviewSource\"></ng2-smart-table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mb-3\" *ngIf=\"permissions.edit\">\r\n    <table class=\"table table-bordered text-center mx-auto mb-0\">\r\n        <thead class=\"bg-ssn text-white\">\r\n            <tr>\r\n                <th class=\"py-1\">\r\n                    <h5 class=\"mb-0\">Port Call Drafts</h5>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n    </table>\r\n    <div class=\"table-responsive\">\r\n        <ng2-smart-table [settings]=\"tableSettings\" [source]=\"draftOverviewSource\"></ng2-smart-table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mb-3\" *ngIf=\"userIsGovernmentAgency\">\r\n    <table class=\"table table-bordered text-center mx-auto mb-0\">\r\n        <thead class=\"bg-ssn text-white\">\r\n            <tr>\r\n                <th class=\"py-1\">\r\n                    <h5 class=\"mb-0\">Cleared Port Calls</h5>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n    </table>\r\n    <div class=\"table-responsive\">\r\n        <ng2-smart-table [settings]=\"tableSettings\" [source]=\"clearedByUserAgencyOverviewSource\"></ng2-smart-table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_organization_types__ = __webpack_require__("./src/app/shared/constants/organization-types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_port_call_claims__ = __webpack_require__("./src/app/shared/constants/port-call-claims.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_port_call_status_types__ = __webpack_require__("./src/app/shared/constants/port-call-status-types.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_services_organization_service__ = __webpack_require__("./src/app/shared/services/organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_services_port_call_overview_service__ = __webpack_require__("./src/app/shared/services/port-call-overview.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__button_row_button_row_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clearance_row_clearance_row_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/overview/clearance-row/clearance-row.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(datePipe, accountService, organizationService, contentService, portCallService, overviewService) {
        this.datePipe = datePipe;
        this.accountService = accountService;
        this.organizationService = organizationService;
        this.contentService = contentService;
        this.portCallService = portCallService;
        this.overviewService = overviewService;
        this.permissions = __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_port_call_claims__["a" /* PortCallClaims */].portCallPermissions;
        this.overviewList = [];
        this.draftOverviewList = [];
        this.cancelledOverviewList = [];
        this.clearedByUserAgencyOverviewList = [];
        this.userIsGovernmentAgency = false;
        this.overviewSource = new __WEBPACK_IMPORTED_MODULE_10_ng2_smart_table__["a" /* LocalDataSource */]();
        this.draftOverviewSource = new __WEBPACK_IMPORTED_MODULE_10_ng2_smart_table__["a" /* LocalDataSource */]();
        this.clearedByUserAgencyOverviewSource = new __WEBPACK_IMPORTED_MODULE_10_ng2_smart_table__["a" /* LocalDataSource */]();
        this.showCancelledPortCalls = false;
        // Smart table
        this.tableSettings = {
            mode: 'external',
            actions: false,
            attr: {
                class: 'table table-bordered'
            },
            noDataMessage: 'There are no port calls in this list.',
            columns: {
                shipName: {
                    title: 'Ship Name',
                    type: 'html'
                },
                callSign: {
                    title: 'Call Sign',
                    type: 'html'
                },
                locationName: {
                    title: 'Location Name',
                    type: 'html'
                },
                eta: {
                    title: 'ETA',
                    type: 'html'
                },
                etd: {
                    title: 'ETD',
                    type: 'html'
                },
                status: {
                    title: 'Status',
                    type: 'html'
                },
                clearances: {
                    title: 'Clearances',
                    type: 'custom',
                    filter: false,
                    sort: false,
                    renderComponent: __WEBPACK_IMPORTED_MODULE_12__clearance_row_clearance_row_component__["a" /* ClearanceRowComponent */]
                },
                actions: {
                    title: 'Actions',
                    type: 'custom',
                    filter: false,
                    sort: false,
                    renderComponent: __WEBPACK_IMPORTED_MODULE_11__button_row_button_row_component__["a" /* ButtonRowComponent */]
                }
            }
        };
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userClaimsDataSubscription = this.accountService.userClaimsData$.subscribe(function (userClaims) {
            if (userClaims) {
                var userClaimsTypePortCall_1 = userClaims.filter(function (claim) { return claim.type === __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_port_call_claims__["a" /* PortCallClaims */].TYPE; }); // Find user claims where claim type is Port Call
                var keys = Object.keys(_this.permissions);
                keys.forEach(function (key) {
                    _this.permissions[key] = userClaimsTypePortCall_1.some(function (claim) { return claim.value.toUpperCase() === key.toString().toUpperCase(); });
                });
            }
        });
        this.getOrganizationForUserSubscription = this.organizationService.getOrganizationForUser().subscribe(function (organizationResult) {
            if (organizationResult) {
                _this.userIsGovernmentAgency =
                    organizationResult.organizationType &&
                        organizationResult.organizationType.name ===
                            __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_organization_types__["a" /* OrganizationTypes */].GOVERNMENT_AGENCY_STRING;
                if (_this.userIsGovernmentAgency) {
                    _this.portCallService.setClearance(organizationResult);
                }
            }
            _this.userOrganization = organizationResult;
            _this.loadOverview();
        });
    };
    OverviewComponent.prototype.ngOnDestroy = function () {
        this.userClaimsDataSubscription.unsubscribe();
        this.getOrganizationForUserSubscription.unsubscribe();
    };
    OverviewComponent.prototype.overviewRow = function (ov) {
        var row = {
            overviewModel: ov,
            shipName: "<div class=\"no-wrap\"><div hidden>" +
                ov.ship.name + // ugly fix for alphabetical sorting but it works
                "</div> <div> <img src='assets/images/flags/128x128/" +
                ov.ship.shipFlagCode.country.twoCharCode.toLowerCase() +
                ".png' height='20px'/> " +
                ov.ship.name +
                "</div></div>",
            callSign: ov.ship.callSign ||
                "<span class=\"font-italic no-wrap\">Not provided.</span>",
            locationName: "<div hidden>" +
                ov.location.name + // same ugly fix as ship name
                "</div> <div> <img src='assets/images/flags/128x128/" +
                ov.location.country.twoCharCode.toLowerCase() +
                ".png' height='20px'/> " +
                ov.location.name +
                "</div>",
            eta: "<span class=\"no-wrap\">" +
                this.datePipe.transform(ov.portCall.locationEta, 'yyyy-MM-dd') +
                "</span> <span class=\"no-wrap\">" +
                this.datePipe.transform(ov.portCall.locationEta, 'HH:mm') +
                "</span>",
            etd: "<span class=\"no-wrap\">" +
                this.datePipe.transform(ov.portCall.locationEtd, 'yyyy-MM-dd') +
                "</span> <span class=\"no-wrap\">" +
                this.datePipe.transform(ov.portCall.locationEtd, 'HH:mm') +
                "</span>",
            status: ov.status === __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_port_call_status_types__["a" /* PortCallStatusTypes */].CANCELLED
                ? "<div class=\"text-danger\">" + ov.status + "</div>"
                : ov.status,
            clearances: 'clearances',
            actions: 'btn'
        };
        return row;
    };
    OverviewComponent.prototype.loadOverview = function () {
        var _this = this;
        this.overviewService.showCancelledPortCall$.subscribe(function (showCancelledPortCalls) {
            if (showCancelledPortCalls !== null) {
                _this.showCancelledPortCalls = showCancelledPortCalls;
                var portCallList = _this.overviewList;
                if (showCancelledPortCalls) {
                    portCallList = portCallList.concat(_this.cancelledOverviewList);
                }
                _this.overviewService.setOverviewData(portCallList.sort(function (row1, row2) { return row2.overviewModel.portCall.portCallId - row1.overviewModel.portCall.portCallId; }));
            }
        });
        this.overviewService.overviewData$.subscribe(function (results) {
            if (results) {
                _this.overviewSource.load(results);
            }
        });
        if (!this.userIsGovernmentAgency) {
            this.overviewService.draftOverviewData$.subscribe(function (results) {
                if (results) {
                    _this.draftOverviewSource.load(results);
                }
            });
        }
        else {
            this.overviewService.clearedByUserAgencyOverviewData$.subscribe(function (results) {
                if (results) {
                    _this.clearedByUserAgencyOverviewSource.load(results);
                }
            });
        }
        this.overviewService.getPortCalls().subscribe(function (pcData) {
            if (pcData) {
                _this.contentService.setLoadingScreen(true, 'portcall.gif', 'LOADING PORT CALLS');
                if (pcData.length === 0) {
                    _this.contentService.setLoadingScreen(false, null, null);
                }
                else {
                    var index_1 = 0;
                    var finalIndex_1 = pcData.length - 1;
                    pcData.forEach(function (pc) {
                        _this.overviewService.getPartialOverview(pc.portCallId).subscribe(function (ov) {
                            if (ov) {
                                var row = _this.overviewRow(ov);
                                // Case: port call is incomplete (status: draft)
                                if (ov.status === __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_port_call_status_types__["a" /* PortCallStatusTypes */].DRAFT) {
                                    _this.draftOverviewList.push(row);
                                }
                                else if (_this.userIsGovernmentAgency &&
                                    ov.clearanceList &&
                                    ov.clearanceList.some(function (clearance) { return clearance.organizationId === _this.userOrganization.organizationId && clearance.cleared != null; })) {
                                    _this.clearedByUserAgencyOverviewList.push(row);
                                }
                                else if (ov.status === __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_port_call_status_types__["a" /* PortCallStatusTypes */].CANCELLED) {
                                    _this.cancelledOverviewList.push(row);
                                }
                                else {
                                    _this.overviewList.push(row);
                                }
                                _this.overviewService.setOverviewData(_this.overviewList.sort(function (row1, row2) { return row2.overviewModel.portCall.portCallId - row1.overviewModel.portCall.portCallId; }));
                                _this.overviewService.setDraftData(_this.draftOverviewList);
                                _this.overviewService.setClearedData(_this.clearedByUserAgencyOverviewList);
                            }
                        }, function (error) { return console.log(error); }, function () {
                            if (index_1++ >= finalIndex_1) {
                                _this.contentService.setLoadingScreen(false, null, null);
                            }
                        });
                    });
                }
            }
        }, function (error) { return console.log(error); });
    };
    OverviewComponent.prototype.toggleCancelledPortCalls = function (showCancelled) {
        this.overviewService.setShowCancelledPortCalls(showCancelled);
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/overview/overview.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_8_app_shared_services_port_call_overview_service__["a" /* PortCallOverviewService */], __WEBPACK_IMPORTED_MODULE_7_app_shared_services_organization_service__["a" /* OrganizationService */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_7_app_shared_services_organization_service__["a" /* OrganizationService */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_9_app_shared_services_port_call_service__["a" /* PortCallService */],
            __WEBPACK_IMPORTED_MODULE_8_app_shared_services_port_call_overview_service__["a" /* PortCallOverviewService */]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/port-call.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/port-call.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"permissions.register\">\r\n    <div class=\"col-sm-12 col-md-6 col-lg-4\">\r\n        <app-ssn-card header=\"New Port Call\" icon=\"portcall.png\">\r\n            <div class=\"text-center\">\r\n                <p>To register a new port call, you have to create a port call draft, and then activate it.</p>\r\n                <button class=\"btn btn-ssn\" (click)=\"selectRegister()\">New Port Call Draft</button>\r\n            </div>\r\n        </app-ssn-card>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col\">\r\n        <app-overview></app-overview>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/port-call.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_port_call_claims__ = __webpack_require__("./src/app/shared/constants/port-call-claims.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortCallComponent = /** @class */ (function () {
    function PortCallComponent(accountService, contentService, portCallService) {
        this.accountService = accountService;
        this.contentService = contentService;
        this.portCallService = portCallService;
        this.permissions = __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_port_call_claims__["a" /* PortCallClaims */].portCallPermissions;
    }
    PortCallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userClaimsDataSubscription = this.accountService.userClaimsData$.subscribe(function (userClaims) {
            if (userClaims) {
                var userClaimsTypePortCall_1 = userClaims.filter(function (claim) { return claim.type === __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_port_call_claims__["a" /* PortCallClaims */].TYPE; });
                var keys = Object.keys(_this.permissions);
                keys.forEach(function (key) {
                    _this.permissions[key] = userClaimsTypePortCall_1.some(function (claim) { return claim.value.toUpperCase() === key.toString().toUpperCase(); });
                });
            }
        });
    };
    PortCallComponent.prototype.ngOnDestroy = function () {
        this.userClaimsDataSubscription.unsubscribe();
    };
    PortCallComponent.prototype.selectRegister = function () {
        this.portCallService.wipeServiceData();
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].REGISTER_PORT_CALL_DRAFT);
    };
    PortCallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-port-call',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/port-call.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/port-call.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], PortCallComponent);
    return PortCallComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/port-call.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_services_prev_and_next_poc_service__ = __webpack_require__("./src/app/shared/services/prev-and-next-poc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clearance_clearance_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/clearance/clearance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__confirmation_confirmation_module__ = __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/confirmation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new_port_call_draft_new_port_call_draft_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/new-port-call-draft.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__new_port_call_draft_ship_location_time_confirm_data_confirm_data_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/confirm-data/confirm-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__new_port_call_draft_ship_location_time_eta_etd_eta_etd_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/eta-etd/eta-etd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__new_port_call_draft_ship_location_time_find_location_find_location_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-location/find-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__new_port_call_draft_ship_location_time_find_ship_find_ship_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/find-ship/find-ship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__new_port_call_draft_ship_location_time_ship_location_time_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call-draft/ship-location-time/ship-location-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__overview_button_row_button_row_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__overview_clearance_row_clearance_row_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/overview/clearance-row/clearance-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__overview_overview_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__port_call_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/port-call.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__registration_forms_forms_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__registration_forms_port_call_details_crew_passengers_dimensions_crew_passengers_dimensions_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__registration_forms_port_call_details_port_call_details_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/port-call-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__registration_forms_port_call_details_purpose_purpose_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/purpose/purpose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__registration_forms_port_call_details_reporting_reporting_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/reporting/reporting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__registration_forms_port_call_details_save_details_save_details_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/save-details/save-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__registration_forms_prev_and_next_poc_prev_and_next_poc_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/prev-and-next-poc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__registration_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__registration_registration_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__view_port_call_view_port_call_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/view-port-call/view-port-call.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_app_main_content_content_container_port_call_registration_forms_ship_stores_ship_stores_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/ship-stores/ship-stores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__registration_forms_shared_delete_button_delete_button_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/shared/delete-button/delete-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_services_port_call_ship_stores_service__ = __webpack_require__("./src/app/shared/services/fal-ship-stores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__registration_forms_ship_stores_save_ship_stores_save_ship_stores_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/ship-stores/save-ship-stores/save-ship-stores.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__registration_forms_passenger_list_passenger_list_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/passenger-list/passenger-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_services_port_call_passenger_list_service__ = __webpack_require__("./src/app/shared/services/port-call-passenger-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_services_country_service__ = __webpack_require__("./src/app/shared/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__registration_forms_passenger_list_find_port_of_embarkation_find_port_of_embarkation_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/passenger-list/find-port-of-embarkation/find-port-of-embarkation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__registration_forms_passenger_list_search_passenger_port_search_passenger_port_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/passenger-list/search-passenger-port/search-passenger-port.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__registration_forms_prev_and_next_poc_save_prev_and_next_poc_save_prev_and_next_poc_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/save-prev-and-next-poc/save-prev-and-next-poc.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































// tslint:disable-next-line:max-line-length







// tslint:disable-next-line:max-line-length



var PortCallModule = /** @class */ (function () {
    function PortCallModule() {
    }
    PortCallModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_11__confirmation_confirmation_module__["a" /* ConfirmationModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8_app_shared_shared_module__["a" /* SharedModule */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_18__overview_button_row_button_row_component__["a" /* ButtonRowComponent */], __WEBPACK_IMPORTED_MODULE_19__overview_clearance_row_clearance_row_component__["a" /* ClearanceRowComponent */], __WEBPACK_IMPORTED_MODULE_33__registration_forms_shared_delete_button_delete_button_component__["a" /* DeleteButtonComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__overview_button_row_button_row_component__["a" /* ButtonRowComponent */],
                __WEBPACK_IMPORTED_MODULE_10__clearance_clearance_component__["a" /* ClearanceComponent */],
                __WEBPACK_IMPORTED_MODULE_19__overview_clearance_row_clearance_row_component__["a" /* ClearanceRowComponent */],
                __WEBPACK_IMPORTED_MODULE_13__new_port_call_draft_ship_location_time_confirm_data_confirm_data_component__["a" /* ConfirmDataComponent */],
                __WEBPACK_IMPORTED_MODULE_23__registration_forms_port_call_details_crew_passengers_dimensions_crew_passengers_dimensions_component__["a" /* CrewPassengersDimensionsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__new_port_call_draft_ship_location_time_eta_etd_eta_etd_component__["a" /* EtaEtdComponent */],
                __WEBPACK_IMPORTED_MODULE_15__new_port_call_draft_ship_location_time_find_location_find_location_component__["a" /* FindLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__new_port_call_draft_ship_location_time_find_ship_find_ship_component__["a" /* FindShipComponent */],
                __WEBPACK_IMPORTED_MODULE_22__registration_forms_forms_component__["a" /* FormsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__new_port_call_draft_new_port_call_draft_component__["a" /* NewPortCallDraftComponent */],
                __WEBPACK_IMPORTED_MODULE_20__overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_21__port_call_component__["a" /* PortCallComponent */],
                __WEBPACK_IMPORTED_MODULE_24__registration_forms_port_call_details_port_call_details_component__["a" /* PortCallDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__registration_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_25__registration_forms_port_call_details_purpose_purpose_component__["a" /* PurposeComponent */],
                __WEBPACK_IMPORTED_MODULE_30__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_26__registration_forms_port_call_details_reporting_reporting_component__["a" /* ReportingComponent */],
                __WEBPACK_IMPORTED_MODULE_27__registration_forms_port_call_details_save_details_save_details_component__["a" /* SaveDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__new_port_call_draft_new_port_call_draft_component__["a" /* NewPortCallDraftComponent */],
                __WEBPACK_IMPORTED_MODULE_19__overview_clearance_row_clearance_row_component__["a" /* ClearanceRowComponent */],
                __WEBPACK_IMPORTED_MODULE_32_app_main_content_content_container_port_call_registration_forms_ship_stores_ship_stores_component__["a" /* ShipStoresComponent */],
                __WEBPACK_IMPORTED_MODULE_33__registration_forms_shared_delete_button_delete_button_component__["a" /* DeleteButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_17__new_port_call_draft_ship_location_time_ship_location_time_component__["a" /* ShipLocationTimeComponent */],
                __WEBPACK_IMPORTED_MODULE_28__registration_forms_prev_and_next_poc_prev_and_next_poc_component__["a" /* PrevAndNextPocComponent */],
                __WEBPACK_IMPORTED_MODULE_31__view_port_call_view_port_call_component__["a" /* ViewPortCallComponent */],
                __WEBPACK_IMPORTED_MODULE_35__registration_forms_ship_stores_save_ship_stores_save_ship_stores_component__["a" /* SaveShipStoresComponent */],
                __WEBPACK_IMPORTED_MODULE_36__registration_forms_passenger_list_passenger_list_component__["a" /* PassengerListComponent */],
                __WEBPACK_IMPORTED_MODULE_39__registration_forms_passenger_list_find_port_of_embarkation_find_port_of_embarkation_component__["a" /* FindPortOfEmbarkationComponent */],
                __WEBPACK_IMPORTED_MODULE_40__registration_forms_passenger_list_search_passenger_port_search_passenger_port_component__["a" /* SearchPassengerPortComponent */],
                __WEBPACK_IMPORTED_MODULE_41__registration_forms_prev_and_next_poc_save_prev_and_next_poc_save_prev_and_next_poc_component__["a" /* SavePrevAndNextPocComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_10__clearance_clearance_component__["a" /* ClearanceComponent */],
                __WEBPACK_IMPORTED_MODULE_12__new_port_call_draft_new_port_call_draft_component__["a" /* NewPortCallDraftComponent */],
                __WEBPACK_IMPORTED_MODULE_21__port_call_component__["a" /* PortCallComponent */],
                __WEBPACK_IMPORTED_MODULE_30__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_31__view_port_call_view_port_call_component__["a" /* ViewPortCallComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6_app_shared_services_port_call_service__["a" /* PortCallService */], __WEBPACK_IMPORTED_MODULE_34__shared_services_port_call_ship_stores_service__["a" /* FalShipStoresService */], __WEBPACK_IMPORTED_MODULE_37__shared_services_port_call_passenger_list_service__["a" /* PortCallPassengerListService */], __WEBPACK_IMPORTED_MODULE_38__shared_services_country_service__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_7_app_shared_services_prev_and_next_poc_service__["a" /* PrevAndNextPocService */]]
        })
    ], PortCallModule);
    return PortCallModule;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/forms.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/forms.component.html":
/***/ (function(module, exports) {

module.exports = "<app-progress-bar></app-progress-bar>\r\n\r\n<div class=\"row mb-3\">\r\n    <div class=\"col\">\r\n        <app-ship-info-table></app-ship-info-table>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mb-3\">\r\n    <div class=\"col\">\r\n        <app-location-time-info-table></app-location-time-info-table>\r\n    </div>\r\n</div>\r\n\r\n<div [ngSwitch]=\"selectedComponent\">\r\n    <app-port-call-details *ngSwitchCase=\"formNames.PORT_CALL_DETAILS\"></app-port-call-details>\r\n    <app-ship-stores *ngSwitchCase=\"formNames.SHIP_STORES\"></app-ship-stores>\r\n    <!-- <app-passenger-list *ngSwitchCase=\"formNames.PAX\"></app-passenger-list> -->\r\n    <app-prev-and-next-poc *ngSwitchCase=\"formNames.PREV_AND_NEXT_POC\"></app-prev-and-next-poc>\r\n    <app-confirmation *ngSwitchCase=\"'Confirm and Activate'\"></app-confirmation>\r\n    <div *ngSwitchDefault class=\"alert alert-danger\" role=\"alert\">\r\n        This page is not implemented yet.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_form_names__ = __webpack_require__("./src/app/shared/constants/form-names.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormsComponent = /** @class */ (function () {
    function FormsComponent(contentService, portCallService, shipService) {
        this.contentService = contentService;
        this.portCallService = portCallService;
        this.shipService = shipService;
    }
    FormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shipDataSubscription = this.portCallService.shipData$.subscribe(function (shipResult) {
            _this.shipService.setShipOverviewData(shipResult);
        });
        this.portCallFormNameSubscription = this.contentService.portCallFormName$.subscribe(function (content) {
            _this.selectedComponent = content;
        });
        this.formNames = __WEBPACK_IMPORTED_MODULE_4_app_shared_constants_form_names__["a" /* FORM_NAMES */];
    };
    FormsComponent.prototype.ngOnDestroy = function () {
        this.shipDataSubscription.unsubscribe();
        this.portCallFormNameSubscription.unsubscribe();
    };
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forms',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/forms.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/forms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__["a" /* PortCallService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_ship_service__["a" /* ShipService */]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/passenger-list/find-port-of-embarkation/find-port-of-embarkation.component.css":
/***/ (function(module, exports) {

module.exports = "button {\r\n    padding: 0.4rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/passenger-list/find-port-of-embarkation/find-port-of-embarkation.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!locationFound\">\r\n  <app-search-passenger-port></app-search-passenger-port>\r\n</div>\r\n<div class=\"form-group row\" *ngIf=\"locationFound\">\r\n  <label for=\"search-location\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Port of Embarkation</label>\r\n  <div class=\"col-7\">\r\n    <input id=\"search-location\" type=\"text\" class=\"form-control form-control-sm mx-auto\" readonly=\"readonly\" [(ngModel)]=\"locationProperties.LOCATION_NAME.data\"\r\n    />\r\n  </div>\r\n  <div>\r\n    <button class=\"btn btn-sm btn-ssn\" ngbTooltip=\"Remove port\" (click)=\"deselectLocation()\">\r\n      <img height=\"16px\" src=\"assets/images/icons/128x128/white/cancel.png\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"locationFound\" class=\"text-center\">\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <th *ngIf=\"locationFlag\" class=\"bg-ssn text-ssn\">Flag</th>\r\n        <th *ngFor=\"let entry of locationInfo\" class=\"bg-ssn text-ssn\">{{ entry.description }}</th>\r\n      </thead>\r\n      <tbody>\r\n        <td *ngIf=\"locationFlag\">\r\n          <img src=\"assets/images/flags/128x128/{{locationFlag | lowercase}}.png\" height=\"20px\">\r\n        </td>\r\n        <td *ngFor=\"let entry of locationInfo\">\r\n          <div *ngIf=\"entry.data\">{{ entry.data }}</div>\r\n          <div *ngIf=\"!entry.data\" class=\"font-italic\">Not provided.</div>\r\n        </td>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/passenger-list/find-port-of-embarkation/find-port-of-embarkation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindPortOfEmbarkationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_properties__ = __webpack_require__("./src/app/shared/constants/location-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_location_service__ = __webpack_require__("./src/app/shared/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_port_call_passenger_list_service__ = __webpack_require__("./src/app/shared/services/port-call-passenger-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FindPortOfEmbarkationComponent = /** @class */ (function () {
    function FindPortOfEmbarkationComponent(locationService, passengerListService) {
        this.locationService = locationService;
        this.passengerListService = passengerListService;
        this.showDropDown = true;
        this.locationFound = false;
        this.locationProperties = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_properties__["a" /* LocationProperties */].PROPERTIES;
    }
    FindPortOfEmbarkationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationDataSubscription = this.locationService.locationData$.subscribe(function (locationResult) {
            if (locationResult) {
                _this.locationFlag = (locationResult.country) ? locationResult.country.twoCharCode.toLowerCase() : null;
                _this.locationProperties.COUNTRY.data = (locationResult.country) ? locationResult.country.name : null;
                _this.locationProperties.LOCATION_TYPE.data = locationResult.locationType.name;
                _this.locationProperties.LOCATION_NAME.data = locationResult.name;
                _this.locationProperties.LOCATION_CODE.data = locationResult.locationCode;
                _this.locationFound = true;
                _this.passengerListService.setPortOfEmbarkation(locationResult);
            }
            else {
                _this.locationFound = false;
                _this.passengerListService.setPortOfEmbarkation(null);
            }
            _this.locationInfo = Object.values(_this.locationProperties);
        });
    };
    FindPortOfEmbarkationComponent.prototype.ngOnDestroy = function () {
        this.locationDataSubscription.unsubscribe();
    };
    FindPortOfEmbarkationComponent.prototype.deselectLocation = function () {
        this.locationFound = false;
        this.locationService.setLocationData(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], FindPortOfEmbarkationComponent.prototype, "showDropDown", void 0);
    FindPortOfEmbarkationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-find-port-of-embarkation',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/passenger-list/find-port-of-embarkation/find-port-of-embarkation.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/passenger-list/find-port-of-embarkation/find-port-of-embarkation.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_location_service__["a" /* LocationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_port_call_passenger_list_service__["a" /* PortCallPassengerListService */]])
    ], FindPortOfEmbarkationComponent);
    return FindPortOfEmbarkationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/passenger-list/passenger-list.component.css":
/***/ (function(module, exports) {

module.exports = "/* Smart table */\r\n:root {\r\n    --color-primary: #002d50;\r\n    --color-primary-light: #37557c;\r\n    --color-primary-dark: #000128;\r\n    --color-primary-text: #ffffff;\r\n  }\r\n:host /deep/ ng2-smart-table thead {\r\n    background-color: var(--color-primary);\r\n    color: white;\r\n  }\r\n:host /deep/ .ng2-smart-filter input {\r\n    color: black;\r\n  }\r\n:host /deep/ a.ng2-smart-sort-link.sort::after {\r\n    content: \"\";\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 4px solid white;\r\n    border-top: 4px solid transparent;\r\n    border-left: 4px solid transparent;\r\n    border-right: 4px solid transparent;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n  }\r\n:host /deep/ a.ng2-smart-sort-link.sort.asc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    margin-bottom: 2px;\r\n  }\r\n:host /deep/ a.ng2-smart-sort-link.sort.desc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    margin-bottom: -2px;\r\n  }\r\n:host /deep/ ng2-smart-table a {\r\n    color: var(--color-primary-text);\r\n  }\r\n:host /deep/ a.ng2-smart-page-link.page-link {\r\n    color: var(--color-primary-dark);\r\n    border-color: #dee2e6;\r\n  }\r\n:host /deep/ span.ng2-smart-page-link.page-link {\r\n    color: var(--color-primary-dark);\r\n    background-color: #dee2e6;\r\n    border-color: #dee2e6;\r\n  }\r\n:host /deep/ tbody > tr > td.ng2-smart-actions > a {\r\n    color: var(--color-primary-dark);\r\n  }\r\n:host /deep/ ng2-st-tbody-edit-delete > a,\r\n  :host /deep/ ng2-st-tbody-create-cancel > a {\r\n    color: var(--color-primary);\r\n  }\r\n.ng-select-placeholder-size {\r\n    font-size: 0.875rem;\r\n  }\r\n:host /deep/ .ng-placeholder, ::-webkit-input-placeholder  {\r\n      color: gray !important;\r\n      font-style: italic;\r\n  }\r\n:host /deep/ .ng-placeholder, :-ms-input-placeholder  {\r\n      color: gray !important;\r\n      font-style: italic;\r\n  }\r\n:host /deep/ .ng-placeholder, ::-ms-input-placeholder  {\r\n      color: gray !important;\r\n      font-style: italic;\r\n  }\r\n:host /deep/ .ng-placeholder, ::placeholder  {\r\n      color: gray !important;\r\n      font-style: italic;\r\n  }\r\n  \r\n  "

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/passenger-list/passenger-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Passenger List\" icon=\"pax.png\">\r\n\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"familyName\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Family Name</label>\r\n          <div class=\"col my-auto\">\r\n            <input type=\"text\" pattern=\"^[a-zA-Z]+$\" required [(ngModel)]=\"passengerModel.familyName\" placeholder=\"Family Name\" class=\"form-control form-control-sm\"\r\n              required name=\"familyName\">\r\n          </div>\r\n        </div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"formValid\">\r\n          <li>\r\n            <small>Only letters allowed.</small>\r\n          </li>\r\n          <li>\r\n            <small>More than one letter required.</small>\r\n          </li>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" required>\r\n          <label for=\"nationality\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Nationality</label>\r\n          <div class=\"col my-auto\">\r\n            <input id=\"nationality\" type=\"text\" class=\"form-control form-control-sm mx-auto\" [(ngModel)]=\"passengerModel.nationality\"\r\n              name=\"nationality\" placeholder=\"Enter search here...\"\r\n              (selectItem)=\"selectNationality($event)\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"placeOfBirth\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Place of Birth</label>\r\n          <div class=\"col my-auto\">\r\n            <input type=\"text\" pattern=\"^[a-zA-Z]+$\" required [(ngModel)]=\"passengerModel.placeOfBirth\" placeholder=\"Place of Birth\"\r\n              class=\"form-control form-control-sm\" name=\"placeOfBirth\">\r\n          </div>\r\n        </div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"formValid\">\r\n          <li>\r\n            <small>Only letters allowed.</small>\r\n          </li>\r\n          <li>\r\n            <small>More than one letter required.</small>\r\n          </li>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"natureOfIdentityDoc\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Nature of Identity Document</label>\r\n          <div class=\"col my-auto\">\r\n            <ng-select class=\"ng-select-placeholder-size\" [items]=\"countryList\" [(ngModel)]=\"passengerModel.natureOfIdentityDoc\" name=\"natureOfIdentityDoc\"\r\n              [closeOnSelect]=\"true\" bindLabel=\"name\" placeholder=\"Nature of Identity Document\" (change)=\"selectNationality($event)\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"visaOrResidenceNumber\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Visa or Residence Permit Number</label>\r\n          <div class=\"col my-auto\">\r\n            <input type=\"number\" required [(ngModel)]=\"passengerModel.permitNumber\" placeholder=\"Visa or Residence Permit Number\" class=\"form-control form-control-sm\"\r\n              name=\"visaOrResidenceNumber\" integerValidator positiveNumberValidator>\r\n          </div>\r\n        </div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"formValid\">\r\n          <li>\r\n            <small>Visa/permit number must be an integer.</small>\r\n          </li>\r\n          <li>\r\n            <small>Visa/permit number number must be a positive number.</small>\r\n          </li>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"portOfDisembarkation\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Port of Disembarkation</label>\r\n          <div class=\"col my-auto\">\r\n            <input type=\"text\" pattern=\"^[a-zA-Z]+$\" required [(ngModel)]=\"passengerModel.portOfDisembarkation\" placeholder=\"Port of Disembarkation\"\r\n              class=\"form-control form-control-sm\" required name=\"portOfDisembarkation\">\r\n          </div>\r\n        </div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"formValid\">\r\n          <li>\r\n            <small>Only letters allowed.</small>\r\n          </li>\r\n          <li>\r\n            <small>More than one letter required.</small>\r\n          </li>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /.col-lg-6 -->\r\n\r\n\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group row\">\r\n          <label for=\"givenName\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Given Name</label>\r\n          <div class=\"col my-auto\">\r\n            <input type=\"text\" required [(ngModel)]=\"passengerModel.givenName\" placeholder=\"Given Name\" class=\"form-control form-control-sm\"\r\n              pattern=\"^[a-zA-Z0-9.]+$\" name=\"givenName\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"alert alert-danger\" *ngIf=\"formValid\">\r\n          <li>\r\n            <small>Only letters, numbers and \".\" allowed.</small>\r\n          </li>\r\n          <li>\r\n            <small>More than one letter required.</small>\r\n          </li>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"dateOfBirth\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Date of Birth</label>\r\n          <div class=\"col my-auto\">\r\n            <input type=\"number\" required [(ngModel)]=\"passengerModel.dateOfBirth\" placeholder=\"Date of Birth\" class=\"form-control form-control-sm\"\r\n              name=\"dateOfBirth\" integerValidator positiveNumberValidator>\r\n          </div>\r\n        </div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"formValid\">\r\n          <li>\r\n            <small>Number of passengers must be an integer.</small>\r\n          </li>\r\n          <li>\r\n            <small>Number of passengers must be a positive number.</small>\r\n          </li>\r\n        </div>\r\n\r\n        <div class=\"form-group row\" required>\r\n          <label for=\"countryOfBirth\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Country of Birth</label>\r\n          <div class=\"col my-auto\">\r\n            <ng-select class=\"ng-select-placeholder-size\" [items]=\"countryList\" [(ngModel)]=\"passengerModel.countryOfBirth\" name=\"countryOfBirth\"\r\n              [closeOnSelect]=\"true\" bindLabel=\"name\" placeholder=\"Country of Birth\" (change)=\"selectCountryOfBirth($event)\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"numberOfIdentityDoc\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Number of Identity Document</label>\r\n          <div class=\"col my-auto\">\r\n            <input type=\"number\" required [(ngModel)]=\"passengerModel.numberOfIdentityDoc\" placeholder=\"Number of Identity Document\"\r\n              class=\"form-control form-control-sm\" name=\"numberOfIdentityDoc\" integerValidator positiveNumberValidator>\r\n          </div>\r\n        </div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"formValid\">\r\n          <li>\r\n            <small>Identity document number must be an integer.</small>\r\n          </li>\r\n          <li>\r\n            <small>Identity document number must be a positive number.</small>\r\n          </li>\r\n        </div>\r\n\r\n        <app-find-port-of-embarkation></app-find-port-of-embarkation>\r\n\r\n        \r\n\r\n        <div class=\"form-group row\" required>\r\n          <label for=\"transit\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Transit</label>\r\n          <div class=\"col my-auto\">\r\n            <ng-select class=\"ng-select-placeholder-size\" [items]=\"countryList\" [(ngModel)]=\"passengerModel.transit\" name=\"transit\" [closeOnSelect]=\"true\"\r\n              bindLabel=\"name\" placeholder=\"Transit\" (change)=\"selectNationality($event)\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- /.col-lg-6 -->\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"col-lg-12\">\r\n\r\n    <pre>{{ passengerModel | json }}</pre>\r\n\r\n    <div class=\"form-group\">\r\n      <button *ngIf=\"form.valid\" type=\"submit\" class=\"btn btn-ssn mt-2\" (click)=\"addPassenger()\">\r\n        <span>Submit</span>\r\n      </button>\r\n      <button *ngIf=\"!form.valid\" type=\"submit\" disabled class=\"btn btn-ssn mt-2\">\r\n        <span>Submit</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button type=\"submit\" class=\"btn btn-ssn mt-2\" (click)=addMockData()>\r\n        <span>Add mockdata</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"mb-3\">\r\n\r\n      <div class=\"table-responsive\">\r\n        <div ng2-st-add-button=\"\" ng-reflect-grid=\"[object Object]\" class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\r\n        </div>\r\n        <ng2-smart-table [settings]=\"tableSettings\" [source]=\"passengerListDataSource\"></ng2-smart-table>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/passenger-list/passenger-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_delete_button_delete_button_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/shared/delete-button/delete-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_models_port_call_passenger_model__ = __webpack_require__("./src/app/shared/models/port-call-passenger-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_port_call_passenger_list_service__ = __webpack_require__("./src/app/shared/services/port-call-passenger-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_location_service__ = __webpack_require__("./src/app/shared/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PassengerListComponent = /** @class */ (function () {
    function PassengerListComponent(passengerListService, locationService) {
        this.passengerListService = passengerListService;
        this.locationService = locationService;
        this.showDropdown = true;
        this.passengerList = [];
        this.listIsPristine = true;
        this.countryList = ['Norway', 'Sweeden', 'Australia'];
        this.passengerModel = new __WEBPACK_IMPORTED_MODULE_4_app_shared_models_port_call_passenger_model__["a" /* PassengerModel */]();
        this.formValid = false;
        this.passengerListDataSource = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tableSettings = {
            actions: false,
            attr: {
                class: 'table table-bordered'
            },
            editor: {
                config: {
                    completer: {
                        descriptionField: 'Search here'
                    }
                }
            },
            noDataMessage: 'There are no passengers in this list.',
            columns: {
                passengerId: {
                    title: 'Passenger ID'
                },
                familyName: {
                    title: 'Family Name',
                },
                givenName: {
                    title: 'Given Name'
                },
                nationality: {
                    title: 'Nationality'
                },
                dateOfBirth: {
                    title: 'Date of Birth'
                },
                placeOfBirth: {
                    title: 'Place of Birth'
                },
                countryOfBirth: {
                    title: 'Location Onboard'
                },
                natureOfIdentityDoc: {
                    title: 'Nature of Identity Document'
                },
                numberOfIdentityDoc: {
                    title: 'Identity Document No.'
                },
                permitNumber: {
                    title: 'Permit Number'
                },
                portOfEmbarkation: {
                    title: 'Port of Embarkation'
                },
                portOfDisembarkation: {
                    title: 'Port of Disembarkation'
                },
                delete: {
                    title: 'Delete',
                    // deleteButtonContent: 'Delete',
                    type: 'custom',
                    filter: false,
                    sort: false,
                    renderComponent: __WEBPACK_IMPORTED_MODULE_3__shared_delete_button_delete_button_component__["a" /* DeleteButtonComponent */],
                },
            }
        };
        this.countries = ['Norway', 'Sweden'];
    }
    PassengerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.passengerListSubscription = this.passengerListService.passengerList$.subscribe(function (list) {
            if (list) {
                _this.passengerList = list;
                _this.passengerListDataSource.load(list);
            }
        });
        this.passengerModelSubscription = this.passengerListService.passengerModel$.subscribe(function (model) {
            if (model) {
                _this.passengerModel = model;
            }
        });
    };
    PassengerListComponent.prototype.ngOnDestroy = function () {
        this.passengerListSubscription.unsubscribe();
        this.passengerModelSubscription.unsubscribe();
    };
    PassengerListComponent.prototype.addPassenger = function () {
        this.listIsPristine = false;
        if (this.passengerList.length > 0) {
            this.passengerModel.passengerId = this.passengerList[this.passengerList.length - 1].passengerId + 1;
        }
        else {
            this.passengerModel.passengerId = 1;
        }
        // Add this passenger to local model and create new model
        this.passengerList.push(this.passengerModel);
        this.passengerModel = new __WEBPACK_IMPORTED_MODULE_4_app_shared_models_port_call_passenger_model__["a" /* PassengerModel */]();
        // Update values in service
        this.passengerListService.setPassengerModel(this.passengerModel);
        this.passengerListService.setPassengersList(this.passengerList);
    };
    PassengerListComponent.prototype.isValid = function (valid) {
        this.sendMetaData();
        return valid;
    };
    PassengerListComponent.prototype.sendMetaData = function () {
        this.passengerListService.setPassengerListMeta({ valid: this.form.valid });
    };
    PassengerListComponent.prototype.selectNationality = function ($event) {
        this.passengerModel.nationality = $event.name;
    };
    PassengerListComponent.prototype.selectCountryOfBirth = function ($event) {
        this.passengerModel.countryOfBirth = $event.name;
    };
    PassengerListComponent.prototype.addMockData = function () {
        var mockData = {
            familyName: 'Dalan',
            givenName: 'Camilla',
            nationality: 'Norwegian',
            dateOfBirth: 130794,
            placeOfBirth: 'Oslo',
            countryOfBirth: 'Norway',
            natureOfIdentityDoc: 'Passport',
            numberOfIdentityDoc: 39572824,
            permitNumber: null,
            portOfEmbarkation: 'Trondheim',
            portOfDisembarkation: 'Oslo',
            transit: true,
            passengerId: 49292,
            portCallId: 160
        };
        this.passengerModel = mockData;
        this.addPassenger();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], PassengerListComponent.prototype, "showDropdown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], PassengerListComponent.prototype, "form", void 0);
    PassengerListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-passenger-list',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/passenger-list/passenger-list.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/passenger-list/passenger-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_app_shared_services_port_call_passenger_list_service__["a" /* PortCallPassengerListService */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_services_location_service__["a" /* LocationService */]])
    ], PassengerListComponent);
    return PassengerListComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/passenger-list/search-passenger-port/search-passenger-port.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/passenger-list/search-passenger-port/search-passenger-port.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #rt let-r=\"result\" let-t=\"term\">\r\n  <img src=\"assets/images/flags/128x128/{{r.country.twoCharCode.toLowerCase()}}.png\" height=\"16px\" />\r\n  <strong *ngIf=\"r.name\">Name: </strong> {{ r.name }}\r\n  <strong *ngIf=\"r.locationCode\">Code: </strong> {{ r.locationCode }}\r\n</ng-template>\r\n\r\n<div *ngIf=\"!locationSelected\" class=\"form-group row\">\r\n  <label for=\"search-location\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Port of Embarkation</label>\r\n  <div class=\"col my-auto\">\r\n    <input id=\"search-location\" type=\"text\" class=\"form-control form-control-sm mx-auto\" [(ngModel)]=\"locationModel\" [ngbTypeahead]=\"search\"\r\n      [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" (selectItem)=\"selectLocation($event)\" placeholder=\"Enter search here...\"\r\n    />\r\n  </div>\r\n  <div class=\"col-2\">\r\n    <div *ngIf=\"searching\">\r\n      <img class=\"mx-auto\" src=\"assets/images/animations/location.gif\" height=\"32px\">\r\n      <p>Searching</p>\r\n    </div>\r\n    <div *ngIf=\"searchFailed\">\r\n      <img class=\"mx-auto\" src=\"assets/images/icons/128x128/cancel.png\" height=\"32px\">\r\n      <p>No results</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/passenger-list/search-passenger-port/search-passenger-port.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPassengerPortComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_location_service__ = __webpack_require__("./src/app/shared/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_search_amounts__ = __webpack_require__("./src/app/shared/constants/search-amounts.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPassengerPortComponent = /** @class */ (function () {
    function SearchPassengerPortComponent(locationService) {
        var _this = this;
        this.locationService = locationService;
        this.showDropdown = true;
        this.restrictTypeHarbour = false;
        this.resultsDropdown = __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_search_amounts__["a" /* SEARCH_AMOUNTS */].DROPDOWN;
        this.resultsWithoutDropdown = __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_search_amounts__["a" /* SEARCH_AMOUNTS */].WITHOUT_DROPDOWN_2;
        this.locationSelected = false;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function () { return function () {
            return (_this.searching = false);
        }; });
        this.search = function (text$) {
            return text$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["debounceTime"])(150), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (term) {
                _this.searchFailed = false;
                _this.searching = (term.length >= 2);
            }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["switchMap"])(function (term) { return (_this.showDropdown) ?
                _this.locationService.search(term, _this.restrictTypeHarbour, _this.resultsDropdown).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function () {
                    _this.searchFailed = false;
                }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])([]);
                })) : Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])([]); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (res) {
                if (_this.showDropdown) {
                    _this.searching = false;
                    _this.searchFailed = _this.locationModel.length >= 2 && res.length === 0;
                }
                else {
                    _this.locationService.search(_this.locationModel, _this.restrictTypeHarbour, _this.resultsWithoutDropdown).subscribe(function (data) {
                        _this.searchFailed = _this.locationModel.length >= 2 && data.length === 0;
                        _this.locationService.setLocationSearchData(data);
                        _this.searching = false;
                    });
                }
            }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["merge"])(_this.hideSearchingWhenUnsubscribed));
        };
        this.formatter = function (x) { return x.locationId; };
    }
    SearchPassengerPortComponent.prototype.ngOnInit = function () {
        this.locationService.setLocationData(null);
    };
    SearchPassengerPortComponent.prototype.selectLocation = function ($event) {
        this.locationSelected = true;
        this.locationModel = $event.item;
        this.locationService.setLocationData(this.locationModel);
    };
    SearchPassengerPortComponent.prototype.deselectLocation = function () {
        this.locationSelected = false;
        this.locationService.setLocationData(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchPassengerPortComponent.prototype, "showDropdown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchPassengerPortComponent.prototype, "restrictTypeHarbour", void 0);
    SearchPassengerPortComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-passenger-port',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/passenger-list/search-passenger-port/search-passenger-port.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/passenger-list/search-passenger-port/search-passenger-port.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_location_service__["a" /* LocationService */]])
    ], SearchPassengerPortComponent);
    return SearchPassengerPortComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Crew, Passengers and Dimensions\" icon=\"crew.png\">\r\n  <form>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-6 col-lg-6\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col my-auto\">\r\n            <label class=\"col-form-label-sm no-wrap mb-0\" for=\"number_of_crew\">Number of Crew</label>\r\n            <input name=\"number_of_crew\" type=\"number\" #numberOfCrew=\"ngModel\" class=\"form-control form-control-sm\" placeholder=\"Enter number of crew\"\r\n              integerValidator positiveNumberValidator (ngModelChange)=\"persistData()\" [(ngModel)]=\"crewPassengersAndDimensionsModel.numberOfCrew\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!isValid(numberOfCrew.valid)\" class=\"alert alert-danger\">\r\n          <li *ngIf=\"numberOfCrew.hasError('notIntegerError')\">\r\n            <small>Number of crew must be an integer.</small>\r\n          </li>\r\n          <li *ngIf=\"numberOfCrew.hasError('notPositiveNumberError')\">\r\n            <small>Number of crew must be a positive number.</small>\r\n          </li>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-lg-6\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col my-auto\">\r\n            <label class=\"col-form-label-sm no-wrap mb-0\" for=\"number_of_passengers\">Number of Passengers</label>\r\n            <input name=\"number_of_passengers\" type=\"number\" #numberOfPassengers=\"ngModel\" class=\"form-control form-control-sm\" placeholder=\"Enter number of passengers\"\r\n              integerValidator positiveNumberValidator (ngModelChange)=\"persistData()\" [(ngModel)]=\"crewPassengersAndDimensionsModel.numberOfPassengers\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!isValid(numberOfPassengers.valid)\" class=\"alert alert-danger\">\r\n          <li *ngIf=\"numberOfPassengers.hasError('notIntegerError')\">\r\n            <small>Number of passengers must be an integer.</small>\r\n          </li>\r\n          <li *ngIf=\"numberOfPassengers.hasError('notPositiveNumberError')\">\r\n            <small>Number of passengers must be a positive number.</small>\r\n          </li>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-6 col-lg-6\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col my-auto\">\r\n            <label class=\"col-form-label-sm no-wrap mb-0\" for=\"actual_draught\">Actual Draught</label>\r\n            <input name=\"actual_draught\" type=\"number\" #actualDraught=\"ngModel\" class=\"form-control form-control-sm\" placeholder=\"Enter actual draught\"\r\n              positiveNumberValidator (ngModelChange)=\"persistData()\" [(ngModel)]=\"crewPassengersAndDimensionsModel.actualDraught\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!isValid(actualDraught.valid)\" class=\"alert alert-danger\">\r\n          <li *ngIf=\"actualDraught.hasError('notPositiveNumberError')\">\r\n            <small>Actual draught must be a positive number.</small>\r\n          </li>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 col-lg-6\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col my-auto\">\r\n            <label class=\"col-form-label-sm no-wrap mb-0\" for=\"air_draught\">Air Draught</label>\r\n            <input name=\"air_draught\" type=\"number\" #airDraught=\"ngModel\" class=\"form-control form-control-sm\" placeholder=\"Enter air draught\"\r\n              positiveNumberValidator (ngModelChange)=\"persistData()\" [(ngModel)]=\"crewPassengersAndDimensionsModel.airDraught\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!isValid(airDraught.valid)\" class=\"alert alert-danger\">\r\n          <li *ngIf=\"airDraught.hasError('notPositiveNumberError')\">\r\n            <small>Air draught must be a positive number.</small>\r\n          </li>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrewPassengersDimensionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrewPassengersDimensionsComponent = /** @class */ (function () {
    function CrewPassengersDimensionsComponent(portCallService) {
        this.portCallService = portCallService;
        this.crewPassengersAndDimensionsModel = {
            numberOfCrew: null,
            numberOfPassengers: null,
            actualDraught: null,
            airDraught: null
        };
    }
    CrewPassengersDimensionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crewPassengersAndDimensionsDataSubscription = this.portCallService.crewPassengersAndDimensionsData$.subscribe(function (data) {
            if (data) {
                _this.crewPassengersAndDimensionsModel = data;
            }
        });
    };
    CrewPassengersDimensionsComponent.prototype.ngOnDestroy = function () {
        this.crewPassengersAndDimensionsDataSubscription.unsubscribe();
    };
    CrewPassengersDimensionsComponent.prototype.persistData = function () {
        this.portCallService.setCrewPassengersAndDimensionsData(this.crewPassengersAndDimensionsModel);
    };
    CrewPassengersDimensionsComponent.prototype.isValid = function (valid) {
        this.sendMetaData();
        return valid;
    };
    CrewPassengersDimensionsComponent.prototype.sendMetaData = function () {
        this.portCallService.setCrewPassengersAndDimensionsMeta({ valid: this.form.valid });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], CrewPassengersDimensionsComponent.prototype, "form", void 0);
    CrewPassengersDimensionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-crew-passengers-dimensions',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], CrewPassengersDimensionsComponent);
    return CrewPassengersDimensionsComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/port-call-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/port-call-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-reporting></app-reporting>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-crew-passengers-dimensions></app-crew-passengers-dimensions>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-purpose></app-purpose>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-save-details></app-save-details>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/port-call-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortCallDetailsComponent = /** @class */ (function () {
    function PortCallDetailsComponent() {
    }
    PortCallDetailsComponent.prototype.ngOnInit = function () { };
    PortCallDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-port-call-details',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/port-call-details.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/port-call-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortCallDetailsComponent);
    return PortCallDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/purpose/purpose.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/purpose/purpose.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Port Call Purpose\" icon=\"target.png\">\r\n  <label for=\"purposes\">\r\n    <span class=\"no-wrap\">Select purposes for this</span>\r\n    <span class=\"no-wrap\">port call.</span>\r\n  </label>\r\n  <ng-select id=\"purposes\" [items]=\"purposeList\" [multiple]=\"true\" [closeOnSelect]=\"true\" bindLabel=\"name\" placeholder=\"Select purposes\"\r\n    [(ngModel)]=\"selectedPurposes\" (change)=\"purposeSelected()\">\r\n  </ng-select>\r\n\r\n  <div *ngIf=\"otherPurposeSelected\" class=\"form-group row mt-3\">\r\n    <label class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\" for=\"other_purpose\">Specify Other Purpose:</label>\r\n    <div class=\"col my-auto\">\r\n      <input [(ngModel)]=\"otherPurposeName\" name=\"other_purpose\" type=\"text\" class=\"form-control form-control-sm\" id=\"other_purpose\"\r\n        placeholder=\"Enter other purpose\" (ngModelChange)=\"setOtherPurposeName()\" />\r\n    </div>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/purpose/purpose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurposeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_purpose_service__ = __webpack_require__("./src/app/shared/services/purpose.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OTHER_PURPOSE_ID = 100249;
var PurposeComponent = /** @class */ (function () {
    function PurposeComponent(purposeService, portCallService) {
        this.purposeService = purposeService;
        this.portCallService = portCallService;
        this.selectedPurposes = [];
        this.purposeList = [];
        this.amountOfPurposes = 0;
        this.otherPurposeSelected = false;
        this.otherPurposeName = '';
    }
    PurposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPurposesSubscription = this.purposeService.getPurposes().subscribe(function (data) {
            _this.purposeList = data;
            _this.amountOfPurposes = Object.keys(_this.purposeList).length;
        });
        this.portCallPurposeDataSubscription = this.portCallService.portCallPurposeData$.subscribe(function (data) {
            if (data) {
                _this.selectedPurposes = data;
                _this.otherPurposeSelected = (_this.selectedPurposes.find(function (p) { return p.portCallPurposeId === OTHER_PURPOSE_ID; }) != null);
            }
        });
        this.otherPurposeNameSubscription = this.portCallService.otherPurposeName$.subscribe(function (data) {
            _this.otherPurposeName = data;
        });
    };
    PurposeComponent.prototype.ngOnDestroy = function () {
        this.getPurposesSubscription.unsubscribe();
        this.portCallPurposeDataSubscription.unsubscribe();
        this.otherPurposeNameSubscription.unsubscribe();
    };
    PurposeComponent.prototype.purposeSelected = function () {
        this.portCallService.setPortCallPurposeData(this.selectedPurposes);
        console.log('SELECTED: ', this.selectedPurposes);
        if (this.otherPurposeSelected) {
            this.setOtherPurposeName();
        }
    };
    PurposeComponent.prototype.setOtherPurposeName = function () {
        this.portCallService.setOtherPurposeName(this.otherPurposeName);
    };
    PurposeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-purpose',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/purpose/purpose.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/purpose/purpose.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_purpose_service__["a" /* PurposeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_purpose_service__["a" /* PurposeService */], __WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], PurposeComponent);
    return PurposeComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/reporting/reporting.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/reporting/reporting.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Reporting for this Port Call\" icon=\"verification-clipboard.png\">\r\n  <form class=\"form-inline\">\r\n    <div class=\"form-check mx-2\" *ngFor=\"let cb of checkboxes\">\r\n      <input class=\"form-check-input clickable\" type=\"checkbox\" id=\"{{cb.name}}\" [checked]=\"cb.checked\" (change)=\"checkboxChecked(cb)\">\r\n      <label class=\"form-check-label clickable\" for=\"{{cb.name}}\">\r\n        <img src=\"{{baseIconUrl}}{{cb.icon}}\" height=\"16px\">{{cb.name}}\r\n      </label>\r\n    </div>\r\n  </form>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/reporting/reporting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportingComponent = /** @class */ (function () {
    function ReportingComponent(portCallService) {
        this.portCallService = portCallService;
        this.baseIconUrl = 'assets/images/icons/128x128/';
        this.checkboxes = [];
    }
    ReportingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportingForThisPortCallDataSubscription = this.portCallService.reportingForThisPortCallData$.subscribe(function (data) {
            if (data != null) {
                _this.reportingModel = data;
            }
            else {
                _this.reportingModel = {
                    reportingDpg: null,
                    reportingCargo: null,
                    reportingShipStores: null,
                    reportingCrew: null,
                    reportingPax: null,
                };
            }
            _this.checkboxes = [
                { name: 'DPG', icon: 'hazard.png', checked: _this.reportingModel.reportingDpg || false },
                { name: 'Cargo', icon: 'cargo.png', checked: _this.reportingModel.reportingCargo || false },
                { name: 'Ship Stores', icon: 'alcohol.png', checked: _this.reportingModel.reportingShipStores || false },
                { name: 'Crew', icon: 'crew.png', checked: _this.reportingModel.reportingCrew || false },
                { name: 'Pax', icon: 'pax.png', checked: _this.reportingModel.reportingPax || false }
            ];
        });
    };
    ReportingComponent.prototype.ngOnDestroy = function () {
        this.reportingForThisPortCallDataSubscription.unsubscribe();
    };
    ReportingComponent.prototype.checkboxChecked = function (checkboxModel) {
        checkboxModel.checked = !checkboxModel.checked;
        switch (checkboxModel.name) {
            case 'DPG':
                this.reportingModel.reportingDpg = checkboxModel.checked;
                break;
            case 'Cargo':
                this.reportingModel.reportingCargo = checkboxModel.checked;
                break;
            case 'Ship Stores':
                this.reportingModel.reportingShipStores = checkboxModel.checked;
                break;
            case 'Crew':
                this.reportingModel.reportingCrew = checkboxModel.checked;
                break;
            case 'Pax':
                this.reportingModel.reportingPax = checkboxModel.checked;
                break;
            default:
                console.log('Oops. Something went wrong with the checkboxes.');
        }
        this.portCallService.setReportingForThisPortCallData(this.reportingModel);
    };
    ReportingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reporting',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/reporting/reporting.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/reporting/reporting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], ReportingComponent);
    return ReportingComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/save-details/save-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/save-details/save-details.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Save Port Call Details\" icon=\"save.png\">\r\n  <div class=\"text-center\" *ngIf=\"!dataIsPristine\">\r\n    <div *ngIf=\"!crewPassengersAndDimensionsMeta.valid\">\r\n      <div class=\"alert alert-danger\">\r\n        <span>You can't save port call details.</span>\r\n        <br>\r\n        <span>Reason:</span>\r\n        <li *ngIf=\"!crewPassengersAndDimensionsMeta.valid\">\r\n          <small>There are errors in \"Crew, Passengers and Dimensions\"</small>\r\n        </li>\r\n      </div>\r\n      <button class=\"btn btn-ssn\" disabled>\r\n        <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\">\r\n        <span>Save Details</span>\r\n      </button>\r\n    </div>\r\n\r\n    <button class=\"btn btn-ssn\" (click)=\"saveDetails()\" *ngIf=\"crewPassengersAndDimensionsMeta.valid\">\r\n      <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\">\r\n      <span>Save Details</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"text-center\" *ngIf=\"dataIsPristine\">\r\n    <span>{{ dataIsPristineText }}</span>\r\n    <br>\r\n    <button class=\"btn btn-ssn mt-2\" disabled>\r\n      <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\">\r\n      <span>Save Details</span>\r\n    </button>\r\n  </div>\r\n\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/save-details/save-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_models_port_call_details_model__ = __webpack_require__("./src/app/shared/models/port-call-details-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var INITIAL_DATA_IS_PRISTINE_TEXT = 'There are no unsaved changes in this page.';
var UPDATED_DATA_IS_PRISTINE_TEXT = 'Your changes have been saved.';
var SaveDetailsComponent = /** @class */ (function () {
    function SaveDetailsComponent(portCallService) {
        this.portCallService = portCallService;
        this.detailsModel = new __WEBPACK_IMPORTED_MODULE_1_app_shared_models_port_call_details_model__["a" /* PortCallDetailsModel */]();
        this.purposeModel = [];
        this.crewPassengersAndDimensionsMeta = { valid: true };
        this.dataIsPristine = true;
        this.dataIsPristineText = INITIAL_DATA_IS_PRISTINE_TEXT;
    }
    SaveDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.detailsPristineSubscription = this.portCallService.detailsPristine$.subscribe(function (detailsDataIsPristine) {
            _this.dataIsPristine = detailsDataIsPristine;
        });
        // Database Identification
        this.detailsIdentificationDataSubscription = this.portCallService.detailsIdentificationData$.subscribe(function (identificationData) {
            if (identificationData) {
                _this.detailsModel.portCallDetailsId =
                    identificationData.portCallDetailsId;
                _this.detailsModel.portCallId = identificationData.portCallId;
            }
        });
        // Reporting
        this.reportingForThisPortCallDataSubscription = this.portCallService.reportingForThisPortCallData$.subscribe(function (reportingData) {
            if (reportingData) {
                _this.detailsModel.reportingCargo = reportingData.reportingCargo;
                _this.detailsModel.reportingCrew = reportingData.reportingCrew;
                _this.detailsModel.reportingDpg = reportingData.reportingDpg;
                _this.detailsModel.reportingPax = reportingData.reportingPax;
                _this.detailsModel.reportingShipStores =
                    reportingData.reportingShipStores;
            }
        });
        // Crew, passengers, and dimensions
        this.crewPassengersAndDimensionsDataSubscription = this.portCallService.crewPassengersAndDimensionsData$.subscribe(function (cpadData) {
            if (cpadData) {
                _this.crewPassengersAndDimensionsModel = cpadData;
                _this.detailsModel.numberOfCrew = cpadData.numberOfCrew;
                _this.detailsModel.numberOfPassengers = cpadData.numberOfPassengers;
                _this.detailsModel.airDraught = cpadData.airDraught;
                _this.detailsModel.actualDraught = cpadData.actualDraught;
            }
        });
        // Purpose
        this.portCallPurposeDataSubscription = this.portCallService.portCallPurposeData$.subscribe(function (purposeData) {
            if (purposeData) {
                _this.purposeModel = purposeData;
            }
        });
        this.otherPurposeNameSubscription = this.portCallService.otherPurposeName$.subscribe(function (otherNameData) {
            _this.otherPurposeName = otherNameData;
        });
        this.crewPassengersAndDimensionsMetaSubscription = this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(function (cpadMetaData) {
            _this.crewPassengersAndDimensionsMeta = cpadMetaData;
        });
    };
    SaveDetailsComponent.prototype.ngOnDestroy = function () {
        this.detailsPristineSubscription.unsubscribe();
        this.detailsIdentificationDataSubscription.unsubscribe();
        this.reportingForThisPortCallDataSubscription.unsubscribe();
        this.crewPassengersAndDimensionsDataSubscription.unsubscribe();
        this.portCallPurposeDataSubscription.unsubscribe();
        this.otherPurposeNameSubscription.unsubscribe();
        this.crewPassengersAndDimensionsMetaSubscription.unsubscribe();
    };
    SaveDetailsComponent.prototype.saveDetails = function () {
        if (this.crewPassengersAndDimensionsMeta.valid) {
            this.detailsModel.numberOfCrew = this.crewPassengersAndDimensionsModel.numberOfCrew;
            this.detailsModel.numberOfPassengers = this.crewPassengersAndDimensionsModel.numberOfPassengers;
            this.detailsModel.airDraught = this.crewPassengersAndDimensionsModel.airDraught;
            this.detailsModel.actualDraught = this.crewPassengersAndDimensionsModel.actualDraught;
            this.portCallService.saveDetails(this.detailsModel, this.purposeModel, this.otherPurposeName);
            this.dataIsPristineText = UPDATED_DATA_IS_PRISTINE_TEXT;
        }
    };
    SaveDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-save-details',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/save-details/save-details.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/save-details/save-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], SaveDetailsComponent);
    return SaveDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/prev-and-next-poc.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/prev-and-next-poc.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Previous Port of Call\" icon=\"location.png\">\r\n    <app-search-location *ngIf=\"!prevLocationFound\" [restrictTypeHarbour]=true (locationResult)=\"onPrevLocationResult($event)\"></app-search-location>\r\n    <div class=\"text-center\" *ngIf=\"prevLocationModel\">\r\n        <app-ssn-table [entryData]=\"prevLocationData\"></app-ssn-table>\r\n        <button class=\"btn btn-ssn\" (click)=\"deselectPrevLocation()\">\r\n            <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n    </div>\r\n    <app-date-time-picker header=\"ETD\" [dateTimeModel]=\"prevEtdModel\" (dateTimeResult)=\"onEtdResult($event)\"></app-date-time-picker>\r\n    <div class=\"row\" *ngIf=\"prevEtdIsAfterCurrentEtaError\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8 alert alert-danger\" role=\"alert\">\r\n            <span>ETD for previous Port of Call must be before ETA for current Port of Call.</span>\r\n        </div>\r\n    </div>\r\n</app-ssn-card>\r\n\r\n<app-ssn-card header=\"Next Port of Call\" icon=\"location.png\">\r\n    <app-search-location *ngIf=\"!nextLocationFound\" [restrictTypeHarbour]=true (locationResult)=\"onNextLocationResult($event)\"></app-search-location>\r\n    <div class=\"text-center\" *ngIf=\"nextLocationModel\">\r\n        <app-ssn-table [entryData]=\"nextLocationData\"></app-ssn-table>\r\n        <button class=\"btn btn-ssn\" (click)=\"deselectNextLocation()\">\r\n            <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n    </div>\r\n    <app-date-time-picker header=\"ETA\" [dateTimeModel]=\"nextEtaModel\" (dateTimeResult)=\"onEtaResult($event)\"></app-date-time-picker>\r\n    <div class=\"row\" *ngIf=\"nextEtaIsBeforeCurrentEtdError\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8 alert alert-danger\" role=\"alert\">\r\n            <span>ETA for next Port of Call must be after ETA for current Port of Call.</span>\r\n        </div>\r\n    </div>\r\n</app-ssn-card>\r\n\r\n<app-save-prev-and-next-poc></app-save-prev-and-next-poc>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/prev-and-next-poc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevAndNextPocComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_location_properties__ = __webpack_require__("./src/app/shared/constants/location-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_prev_and_next_poc_service__ = __webpack_require__("./src/app/shared/services/prev-and-next-poc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrevAndNextPocComponent = /** @class */ (function () {
    function PrevAndNextPocComponent(prevAndNextPocService, portCallService) {
        this.prevAndNextPocService = prevAndNextPocService;
        this.portCallService = portCallService;
        this.prevLocationModel = null;
        this.nextLocationModel = null;
        this.prevLocationFound = false;
        this.nextLocationFound = false;
        this.prevEtdIsAfterCurrentEtaError = false;
        this.nextEtaIsBeforeCurrentEtdError = false;
        this.prevLocationData = new __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_location_properties__["a" /* LocationProperties */]().getPropertyList();
        this.nextLocationData = new __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_location_properties__["a" /* LocationProperties */]().getPropertyList();
    }
    PrevAndNextPocComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prevPortOfCallDataSubscription = this.prevAndNextPocService.prevPortOfCallData$.subscribe(function (data) {
            _this.prevLocationModel = data;
            if (data) {
                console.log(data);
                _this.prevLocationFound = true;
                __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_location_properties__["a" /* LocationProperties */].setLocationData(_this.prevLocationData, _this.prevLocationModel);
                if (_this.prevLocationModel.country != null) {
                    var twoCharCode = _this.prevLocationModel.country.twoCharCode.toLowerCase() || 'xx';
                    var countryFlag = twoCharCode + '.png';
                    __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_location_properties__["a" /* LocationProperties */].setCountry(_this.prevLocationData, _this.prevLocationModel.country.name, countryFlag);
                }
            }
        });
        this.nextPortOfCallDataSubscription = this.prevAndNextPocService.nextPortOfCallData$.subscribe(function (data) {
            _this.nextLocationModel = data;
            if (data) {
                _this.nextLocationFound = true;
                __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_location_properties__["a" /* LocationProperties */].setLocationData(_this.nextLocationData, _this.nextLocationModel);
                if (_this.nextLocationModel.country != null) {
                    var twoCharCode = _this.nextLocationModel.country.twoCharCode.toLowerCase() || 'xx';
                    var countryFlag = twoCharCode + '.png';
                    __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_location_properties__["a" /* LocationProperties */].setCountry(_this.nextLocationData, _this.nextLocationModel.country.name, countryFlag);
                }
            }
        });
        this.prevPortOfCallEtdDataSubscription = this.prevAndNextPocService.prevPortOfCallEtdData$.subscribe(function (data) {
            if (data) {
                var dateTime = new Date(data);
                _this.prevEtdModel = {
                    date: new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
                    time: new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](dateTime.getHours(), dateTime.getMinutes(), 0)
                };
            }
            else {
                _this.prevEtdModel = {
                    date: null,
                    time: new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](0, 0, 0)
                };
            }
        });
        this.nextPortOfCallEtaDataSubscription = this.prevAndNextPocService.nextPortOfCallEtaData$.subscribe(function (data) {
            if (data) {
                var dateTime = new Date(data);
                _this.nextEtaModel = {
                    date: new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
                    time: new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](dateTime.getHours(), dateTime.getMinutes(), 0)
                };
            }
            else {
                _this.nextEtaModel = {
                    date: null,
                    time: new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](0, 0, 0)
                };
            }
        });
        this.currentPortOfCallEtaEtdSubscription = this.portCallService.etaEtdData$.subscribe(function (etaEtdData) {
            if (etaEtdData) {
                _this.currentEtaModel = {
                    date: new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](etaEtdData.eta.year, etaEtdData.eta.month, etaEtdData.eta.day),
                    time: new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](etaEtdData.eta.hour, etaEtdData.eta.minute, 0)
                };
                _this.currentEtdModel = {
                    date: new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](etaEtdData.etd.year, etaEtdData.etd.month, etaEtdData.etd.day),
                    time: new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](etaEtdData.etd.hour, etaEtdData.etd.minute, 0)
                };
            }
        });
    };
    PrevAndNextPocComponent.prototype.ngOnDestroy = function () {
        this.prevPortOfCallDataSubscription.unsubscribe();
        this.nextPortOfCallDataSubscription.unsubscribe();
        this.prevPortOfCallEtdDataSubscription.unsubscribe();
        this.nextPortOfCallEtaDataSubscription.unsubscribe();
        this.currentPortOfCallEtaEtdSubscription.unsubscribe();
    };
    PrevAndNextPocComponent.prototype.onPrevLocationResult = function (prevLocationResult) {
        this.prevAndNextPocService.setPrevPortOfCall(prevLocationResult);
    };
    PrevAndNextPocComponent.prototype.onNextLocationResult = function (nextLocationResult) {
        this.prevAndNextPocService.setNextPortOfCall(nextLocationResult);
    };
    PrevAndNextPocComponent.prototype.deselectPrevLocation = function () {
        this.prevLocationFound = false;
        this.prevAndNextPocService.setPrevPortOfCall(null);
    };
    PrevAndNextPocComponent.prototype.deselectNextLocation = function () {
        this.nextLocationFound = false;
        this.prevAndNextPocService.setNextPortOfCall(null);
    };
    PrevAndNextPocComponent.prototype.onEtdResult = function (etdResult) {
        if (etdResult) {
            var dateTime = etdResult;
            var date = new Date(dateTime.date.year, dateTime.date.month - 1, dateTime.date.day, dateTime.time.hour, dateTime.time.minute);
            this.prevAndNextPocService.setPrevPortOfCallEtd(date);
        }
        else {
            this.prevAndNextPocService.setPrevPortOfCallEtd(null);
        }
        this.validateDateTime();
    };
    PrevAndNextPocComponent.prototype.onEtaResult = function (etaResult) {
        if (etaResult) {
            var dateTime = etaResult;
            var date = new Date(dateTime.date.year, dateTime.date.month - 1, dateTime.date.day, dateTime.time.hour, dateTime.time.minute);
            this.prevAndNextPocService.setNextPortOfCallEta(date);
        }
        else {
            this.prevAndNextPocService.setNextPortOfCallEta(null);
        }
        this.validateDateTime();
    };
    PrevAndNextPocComponent.prototype.validateDateTime = function () {
        var prevEtdDate = this.prevEtdModel.date != null ? new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](this.prevEtdModel.date.year, this.prevEtdModel.date.month, this.prevEtdModel.date.day) : null;
        var nextEtaDate = this.nextEtaModel.date != null ? new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](this.nextEtaModel.date.year, this.nextEtaModel.date.month, this.nextEtaModel.date.day) : null;
        // Checking for sequence errors between prev and current port of call
        if (prevEtdDate && this.currentEtaModel) {
            this.prevEtdIsAfterCurrentEtaError = prevEtdDate.after(this.currentEtaModel.date);
            if (prevEtdDate.equals(this.currentEtaModel.date)) {
                this.prevEtdIsAfterCurrentEtaError = this.prevEtdModel.time.hour > this.currentEtaModel.time.hour
                    || (this.prevEtdModel.time.hour === this.currentEtaModel.time.hour
                        && this.prevEtdModel.time.minute >= this.currentEtaModel.time.minute);
            }
        }
        else {
            this.prevEtdIsAfterCurrentEtaError = false;
        }
        // Checking for sequence errors between next and current port of call
        if (nextEtaDate && this.currentEtdModel) {
            this.nextEtaIsBeforeCurrentEtdError = nextEtaDate.before(this.currentEtdModel.date);
            if (nextEtaDate.equals(this.currentEtdModel.date)) {
                this.nextEtaIsBeforeCurrentEtdError = this.nextEtaModel.time.hour < this.currentEtdModel.time.hour
                    || (this.nextEtaModel.time.hour === this.currentEtdModel.time.hour
                        && this.nextEtaModel.time.minute <= this.currentEtdModel.time.minute);
            }
        }
        else {
            this.nextEtaIsBeforeCurrentEtdError = false;
        }
        this.prevAndNextPocService.setPrevAndNextPortOfCallMeta({ valid: !(this.prevEtdIsAfterCurrentEtaError || this.nextEtaIsBeforeCurrentEtdError) });
        this.persistDateTime();
    };
    PrevAndNextPocComponent.prototype.persistDateTime = function () {
        if (!this.prevEtdIsAfterCurrentEtaError && !this.nextEtaIsBeforeCurrentEtdError) {
            if (this.prevEtdModel.date) {
                var etdDateTime = new Date(this.prevEtdModel.date.year, this.prevEtdModel.date.month - 1, this.prevEtdModel.date.day, this.prevEtdModel.time.hour, this.prevEtdModel.time.minute);
                this.prevAndNextPocService.setPrevPortOfCallEtd(etdDateTime);
            }
            else {
                var etdDateTime = {
                    date: null,
                    time: new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](0, 0, 0)
                };
                this.prevAndNextPocService.setPrevPortOfCallEtd(null);
            }
            if (this.nextEtaModel.date) {
                var etaDateTime = new Date(this.nextEtaModel.date.year, this.nextEtaModel.date.month - 1, this.nextEtaModel.date.day, this.nextEtaModel.time.hour, this.nextEtaModel.time.minute);
                this.prevAndNextPocService.setNextPortOfCallEta(etaDateTime);
            }
            else {
                var etaDateTime = {
                    date: null,
                    time: new __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](0, 0, 0)
                };
                this.prevAndNextPocService.setNextPortOfCallEta(null);
            }
        }
    };
    PrevAndNextPocComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prev-and-next-poc',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/prev-and-next-poc.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/prev-and-next-poc.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_shared_services_prev_and_next_poc_service__["a" /* PrevAndNextPocService */], __WEBPACK_IMPORTED_MODULE_5_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], PrevAndNextPocComponent);
    return PrevAndNextPocComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/save-prev-and-next-poc/save-prev-and-next-poc.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/save-prev-and-next-poc/save-prev-and-next-poc.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Save Voyages\" icon=\"save.png\">\r\n  <div *ngIf=\"(!prevLocationFound && prevEtdFound) || (!nextLocationFound && nextEtaFound) || dateSequenceError\"\r\n    class=\"text-center\">\r\n    <div class=\"alert alert-danger\">\r\n      <span>You can't save voyages.</span>\r\n      <br>\r\n      <span>Reason:</span>\r\n      <li *ngIf=\"!prevLocationFound && prevEtdFound\"><small>Previous Port of Call ETD is provided without a location</small></li>\r\n      <li *ngIf=\"!nextLocationFound && nextEtaFound\"><small>Next Port of Call ETA is provided without a location</small></li>\r\n      <li *ngIf=\"dateSequenceError\"><small>Date sequence error</small></li>\r\n    </div>\r\n    <button class=\"btn btn-ssn mt-2\" disabled>\r\n      <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\">\r\n      <span>Save Voyages</span>\r\n    </button>\r\n  </div>\r\n  <div *ngIf=\"!((!prevLocationFound && prevEtdFound) || (!nextLocationFound && nextEtaFound) || dateSequenceError)\">\r\n    <div class=\"text-center\" *ngIf=\"!dataIsPristine\">\r\n      <button class=\"btn btn-ssn\" (click)=\"savePrevAndNextPoc()\">\r\n        <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\">\r\n        <span>Save Voyages</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"text-center\" *ngIf=\"dataIsPristine\">\r\n      <span>{{ dataIsPristineText }}</span>\r\n      <br>\r\n      <button class=\"btn btn-ssn mt-2\" disabled>\r\n        <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\">\r\n        <span>Save Voyages</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/save-prev-and-next-poc/save-prev-and-next-poc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavePrevAndNextPocComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_prev_and_next_poc_service__ = __webpack_require__("./src/app/shared/services/prev-and-next-poc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/datepicker/ngb-date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var INITIAL_DATA_IS_PRISTINE_TEXT = 'There are no unsaved changes in this page.';
var UPDATED_DATA_IS_PRISTINE_TEXT = 'Your changes have been saved.';
var SavePrevAndNextPocComponent = /** @class */ (function () {
    function SavePrevAndNextPocComponent(portCallService, prevAndNextPocService) {
        this.portCallService = portCallService;
        this.prevAndNextPocService = prevAndNextPocService;
        this.dateSequenceError = false;
        this.prevLocationModel = null;
        this.nextLocationModel = null;
        this.etdModel = null;
        this.etaModel = null;
        this.dataIsPristine = true;
        this.dataIsPristineText = INITIAL_DATA_IS_PRISTINE_TEXT;
    }
    SavePrevAndNextPocComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataIsPristineSubscription = this.prevAndNextPocService.dataIsPristine$.subscribe(function (pristineData) {
            _this.dataIsPristine = pristineData;
        });
        this.prevPortOfCallDataSubscription = this.prevAndNextPocService.prevPortOfCallData$.subscribe(function (prevLocationData) {
            _this.prevLocationFound = (prevLocationData != null);
            _this.prevLocationModel = prevLocationData;
        });
        this.nextPortOfCallDataSubscription = this.prevAndNextPocService.nextPortOfCallData$.subscribe(function (nextLocationData) {
            _this.nextLocationFound = (nextLocationData != null);
            _this.nextLocationModel = nextLocationData;
        });
        this.prevPortOfCallEtdDataSubscription = this.prevAndNextPocService.prevPortOfCallEtdData$.subscribe(function (etdData) {
            if (etdData) {
                _this.prevEtdFound = true;
                var dateTime = new Date(etdData);
                _this.etdModel = {
                    date: new __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
                    time: new __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](dateTime.getHours(), dateTime.getMinutes(), 0)
                };
            }
            else {
                _this.prevEtdFound = false;
                _this.etdModel = null;
            }
        });
        this.nextPortOfCallEtaDataSubscription = this.prevAndNextPocService.nextPortOfCallEtaData$.subscribe(function (etaData) {
            if (etaData) {
                _this.nextEtaFound = true;
                var dateTime = new Date(etaData);
                _this.etaModel = {
                    date: new __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap_datepicker_ngb_date__["a" /* NgbDate */](dateTime.getFullYear(), dateTime.getMonth() + 1, dateTime.getDate()),
                    time: new __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](dateTime.getHours(), dateTime.getMinutes(), 0)
                };
            }
            else {
                _this.nextEtaFound = false;
                _this.etaModel = null;
            }
        });
        this.detailsIdentificationDataSubscription = this.portCallService.detailsIdentificationData$.subscribe(function (portCallIdData) {
            if (portCallIdData) {
                _this.portCallId = portCallIdData.portCallId;
            }
        });
        this.prevAndNextPortOfCallMetaSubscription = this.prevAndNextPocService.prevAndNextPortOfCallMeta$.subscribe(function (metaData) {
            if (metaData) {
                _this.dateSequenceError = !metaData.valid;
            }
        });
    };
    SavePrevAndNextPocComponent.prototype.ngOnDestroy = function () {
        this.dataIsPristineSubscription.unsubscribe();
        this.prevPortOfCallDataSubscription.unsubscribe();
        this.nextPortOfCallDataSubscription.unsubscribe();
        this.prevPortOfCallEtdDataSubscription.unsubscribe();
        this.nextPortOfCallEtaDataSubscription.unsubscribe();
        this.detailsIdentificationDataSubscription.unsubscribe();
    };
    SavePrevAndNextPocComponent.prototype.savePrevAndNextPoc = function () {
        var prevDate = this.etdModel != null ? new Date(this.etdModel.date.year, this.etdModel.date.month - 1, this.etdModel.date.day, this.etdModel.time.hour, this.etdModel.time.minute) : null;
        var nextDate = this.etaModel != null ? new Date(this.etaModel.date.year, this.etaModel.date.month - 1, this.etaModel.date.day, this.etaModel.time.hour, this.etaModel.time.minute) : null;
        this.portCallService.savePrevAndNextPortCall(this.portCallId, this.prevLocationModel, this.nextLocationModel, prevDate, nextDate);
        this.dataIsPristineText = UPDATED_DATA_IS_PRISTINE_TEXT;
    };
    SavePrevAndNextPocComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-save-prev-and-next-poc',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/save-prev-and-next-poc/save-prev-and-next-poc.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/prev-and-next-poc/save-prev-and-next-poc/save-prev-and-next-poc.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__["a" /* PortCallService */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_prev_and_next_poc_service__["a" /* PrevAndNextPocService */]])
    ], SavePrevAndNextPocComponent);
    return SavePrevAndNextPocComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/shared/delete-button/delete-button.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/shared/delete-button/delete-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-sm btn-ssn\" ngbTooltip=\"Delete Ship Store\" (click)=\"onDeleteClick(deleteModal)\">\r\n  <img height=\"16px\" src=\"assets/images/icons/128x128/white/cancel.png\">\r\n</button>\r\n\r\n<ng-template #deleteModal let-close=\"close()\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Delete Ship Stores</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div>\r\n      <span>Are you sure you wish to delete this ship store?</span>\r\n      <br>\r\n      <span>This action cannot be undone.</span>\r\n    </div>\r\n  </div>\r\n  <div [ngSwitch]=\"selectedForm\" class=\"modal-footer\">\r\n    <button *ngSwitchCase=\"formNames.SHIP_STORES\" class=\"btn btn-danger\" (click)=\"deleteShipStoreEntry(); close\">\r\n      <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\">\r\n      <span>Delete Ship Store</span>\r\n    </button>\r\n    <button *ngSwitchCase=\"formNames.PAX\" class=\"btn btn-danger\" (click)=\"deletePassengerEntry(); close\">\r\n      <img src=\"assets/images/icons/128x128/white/cancel.png\" height=\"24px\">\r\n      <span>Passenger Entry</span>\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-ssn\" (click)=\"close\">\r\n      <span>Exit</span>\r\n    </button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/shared/delete-button/delete-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_port_call_ship_stores_service__ = __webpack_require__("./src/app/shared/services/fal-ship-stores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_form_names__ = __webpack_require__("./src/app/shared/constants/form-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_port_call_passenger_list_service__ = __webpack_require__("./src/app/shared/services/port-call-passenger-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DeleteButtonComponent = /** @class */ (function () {
    function DeleteButtonComponent(modalService, shipStoresService, passengerService, contentService) {
        this.modalService = modalService;
        this.shipStoresService = shipStoresService;
        this.passengerService = passengerService;
        this.contentService = contentService;
    }
    DeleteButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formNames = __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_form_names__["a" /* FORM_NAMES */];
        this.portCallFormNameSubscription = this.contentService.portCallFormName$.subscribe(function (name) {
            _this.selectedForm = name;
        });
    };
    DeleteButtonComponent.prototype.ngOnDestroy = function () {
        this.portCallFormNameSubscription.unsubscribe();
    };
    DeleteButtonComponent.prototype.onDeleteClick = function (content) {
        this.modalService.open(content);
    };
    DeleteButtonComponent.prototype.deleteShipStoreEntry = function () {
        this.shipStoresService.deleteShipStoreEntry(this.rowData);
    };
    DeleteButtonComponent.prototype.deletePassengerEntry = function () {
        this.passengerService.deletePassengerEntry(this.rowData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DeleteButtonComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DeleteButtonComponent.prototype, "rowData", void 0);
    DeleteButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-delete-button',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/shared/delete-button/delete-button.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/shared/delete-button/delete-button.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_constants_service__["a" /* ConstantsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_port_call_ship_stores_service__["a" /* FalShipStoresService */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_services_port_call_passenger_list_service__["a" /* PortCallPassengerListService */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_services_content_service__["a" /* ContentService */]])
    ], DeleteButtonComponent);
    return DeleteButtonComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/ship-stores/save-ship-stores/save-ship-stores.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/ship-stores/save-ship-stores/save-ship-stores.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Save Ship Stores\" icon=\"save.png\">\r\n  <div class=\"text-center\" *ngIf=\"!listIsPristine\">\r\n      <span>You have unsaved changes.</span>\r\n      <br>\r\n    <button class=\"btn btn-ssn\" (click)=\"saveShipStores()\">\r\n      <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\">\r\n      <span>Save Details</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"text-center\" *ngIf=\"listIsPristine\">\r\n    <span>There is nothing to save.</span>\r\n    <br>\r\n    <button class=\"btn btn-ssn mt-2\" disabled>\r\n      <img src=\"assets/images/icons/128x128/white/save.png\" height=\"24px\">\r\n      <span>Save Details</span>\r\n    </button>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/ship-stores/save-ship-stores/save-ship-stores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveShipStoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_ship_stores_service__ = __webpack_require__("./src/app/shared/services/fal-ship-stores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_models_port_call_ship_stores_model__ = __webpack_require__("./src/app/shared/models/port-call-ship-stores-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaveShipStoresComponent = /** @class */ (function () {
    function SaveShipStoresComponent(shipStoresService, portCallService) {
        this.shipStoresService = shipStoresService;
        this.portCallService = portCallService;
        this.shipStoresModel = new __WEBPACK_IMPORTED_MODULE_2_app_shared_models_port_call_ship_stores_model__["a" /* PortCallShipStoresModel */]();
        this.portCallShipStoresList = [];
        this.listIsPristine = true;
    }
    SaveShipStoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Database Identification
        this.detailsIdentificationDataSubscription = this.portCallService.detailsIdentificationData$.subscribe(function (results) {
            if (results) {
                _this.portCallId = results.portCallId;
            }
        });
        // Get original ship stores list belonging to this port call
        // Get updated list of ship stores
        this.shipStoresListSubscription = this.shipStoresService.shipStoresList$.subscribe(function (shipStoresList) {
            if (shipStoresList) {
                _this.portCallShipStoresList = shipStoresList;
            }
            _this.shipStoresService.dataIsPristine$.subscribe(function (isPristine) {
                _this.listIsPristine = isPristine;
            });
        });
    };
    SaveShipStoresComponent.prototype.ngOnDestroy = function () {
        this.detailsIdentificationDataSubscription.unsubscribe();
        this.shipStoresListSubscription.unsubscribe();
    };
    SaveShipStoresComponent.prototype.saveShipStores = function () {
        this.portCallShipStoresList = this.shipStoresService.setSequenceNumbers(this.portCallShipStoresList);
        this.shipStoresService.updateShipStores(this.portCallShipStoresList).subscribe(function (res) { });
    };
    SaveShipStoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-save-ship-stores',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/ship-stores/save-ship-stores/save-ship-stores.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/ship-stores/save-ship-stores/save-ship-stores.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_ship_stores_service__["a" /* FalShipStoresService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], SaveShipStoresComponent);
    return SaveShipStoresComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/ship-stores/ship-stores.component.css":
/***/ (function(module, exports) {

module.exports = "/* Smart table */\r\n:root {\r\n  --color-primary: #002d50;\r\n  --color-primary-light: #37557c;\r\n  --color-primary-dark: #000128;\r\n  --color-primary-text: #ffffff;\r\n}\r\n:host /deep/ ng2-smart-table thead {\r\n  background-color: var(--color-primary);\r\n  color: white;\r\n}\r\n:host /deep/ .ng2-smart-filter input {\r\n  color: black;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort::after {\r\n  content: \"\";\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  border-bottom: 4px solid white;\r\n  border-top: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n  border-right: 4px solid transparent;\r\n  -webkit-transform: rotate(90deg);\r\n          transform: rotate(90deg);\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.asc::after {\r\n  border-bottom: 4px solid white;\r\n  -webkit-transform: rotate(0deg);\r\n          transform: rotate(0deg);\r\n  margin-bottom: 2px;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.desc::after {\r\n  border-bottom: 4px solid white;\r\n  -webkit-transform: rotate(180deg);\r\n          transform: rotate(180deg);\r\n  margin-bottom: -2px;\r\n}\r\n:host /deep/ ng2-smart-table a {\r\n  color: var(--color-primary-text);\r\n}\r\n:host /deep/ a.ng2-smart-page-link.page-link {\r\n  color: var(--color-primary-dark);\r\n  border-color: #dee2e6;\r\n}\r\n:host /deep/ span.ng2-smart-page-link.page-link {\r\n  color: var(--color-primary-dark);\r\n  background-color: #dee2e6;\r\n  border-color: #dee2e6;\r\n}\r\n:host /deep/ tbody > tr > td.ng2-smart-actions > a {\r\n  color: var(--color-primary-dark);\r\n}\r\n:host /deep/ ng2-st-tbody-edit-delete > a,\r\n:host /deep/ ng2-st-tbody-create-cancel > a {\r\n  color: var(--color-primary);\r\n}\r\n#measurementTypes {\r\n  font-size: 0.875rem;\r\n}\r\n:host /deep/ .ng-placeholder, ::-webkit-input-placeholder  {\r\n    color: gray !important;\r\n    font-style: italic;\r\n}\r\n:host /deep/ .ng-placeholder, :-ms-input-placeholder  {\r\n    color: gray !important;\r\n    font-style: italic;\r\n}\r\n:host /deep/ .ng-placeholder, ::-ms-input-placeholder  {\r\n    color: gray !important;\r\n    font-style: italic;\r\n}\r\n:host /deep/ .ng-placeholder, ::placeholder  {\r\n    color: gray !important;\r\n    font-style: italic;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/ship-stores/ship-stores.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Ship Stores List\" icon=\"alcohol.png\">\r\n\r\n    <form>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"articleName\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Article Name</label>\r\n                    <div class=\"col my-auto\">\r\n                        <input type=\"text\" pattern=\"^[a-zA-Z0-9.]+$\" required [(ngModel)]=\"portCallShipStoresModel.articleName\" #articleName=\"ngModel\"\r\n                            placeholder=\"Article Name\" class=\"form-control form-control-sm\" required name=\"articleName\">\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"articleName.hasError('pattern')\" class=\"alert alert-danger\">\r\n                    <li>\r\n                        <small>Only letters, numbers and \".\" allowed.</small>\r\n                    </li>\r\n                    <li>\r\n                        <small>More than one letter required.</small>\r\n                    </li>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label for=\"articleCode\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Article Code</label>\r\n                    <div class=\"col my-auto\">\r\n                        <input type=\"text\" pattern=\"^[a-zA-Z0-9.]+$\" required [(ngModel)]=\"portCallShipStoresModel.articleCode\" #articleCode=\"ngModel\"\r\n                            placeholder=\"Article Code\" class=\"form-control form-control-sm\" name=\"articleCode\">\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"articleCode.hasError('pattern')\" class=\"alert alert-danger\">\r\n                    <li>\r\n                        <small>Only letters, numbers and \".\" allowed.</small>\r\n                    </li>\r\n                    <li>\r\n                        <small>More than one letter required.</small>\r\n                    </li>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label for=\"locationOnBoard\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Location on Board</label>\r\n                    <div class=\"col my-auto\">\r\n                        <input type=\"text\" pattern=\"^[a-zA-Z0-9.]+$\" required [(ngModel)]=\"portCallShipStoresModel.locationOnBoard\" #locationOnBoard=\"ngModel\"\r\n                            placeholder=\"Location on Board\" class=\"form-control form-control-sm\" name=\"locationOnBoard\">\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"locationOnBoard.hasError('pattern')\" class=\"alert alert-danger\">\r\n                    <li>\r\n                        <small>Only letters, numbers and \".\" allowed.</small>\r\n                    </li>\r\n                    <li>\r\n                        <small>More than one letter required.</small>\r\n                    </li>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"quantity\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Quantity</label>\r\n                    <div class=\"col my-auto\">\r\n                        <input type=\"number\" required [(ngModel)]=\"portCallShipStoresModel.quantity\" #quantity=\"ngModel\" placeholder=\"Quantity\" class=\"form-control form-control-sm\"\r\n                            integerValidator positiveNumberValidator name=\"quantity\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"quantity.hasError('notIntegerError') || quantity.hasError('notPositiveNumberError')\" class=\"alert alert-danger\">\r\n                    <li *ngIf=\"quantity.hasError('notIntegerError')\">\r\n                        <small>Number of passengers must be an integer.</small>\r\n                    </li>\r\n                    <li *ngIf=\"quantity.hasError('notPositiveNumberError')\">\r\n                        <small>Number of passengers must be a positive number.</small>\r\n                    </li>\r\n                </div>\r\n\r\n                <div class=\"form-group row\" required>\r\n                    <label for=\"measurementType\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Measurement Type</label>\r\n                    <div class=\"col my-auto\">\r\n                        <ng-select id=\"measurementTypes\" [items]=\"measurementTypeList\" [(ngModel)]=\"selectedMeasurementType\" name=\"measurementType\"\r\n                            [closeOnSelect]=\"true\" bindLabel=\"name\" placeholder=\"Measurement Type\" (change)=\"selectMeasurementType($event)\">\r\n                        </ng-select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label for=\"locationOnBoardCode\" class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\">Location on Board Code</label>\r\n                    <div class=\"col my-auto\">\r\n                        <input type=\"number\" required [(ngModel)]=\"portCallShipStoresModel.locationOnBoardCode\" #locationOnBoardCode=\"ngModel\" placeholder=\"Location on Board Code\"\r\n                            class=\"form-control form-control-sm\" name=\"locationOnBoardCode\" integerValidator positiveNumberValidator>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"locationOnBoardCode.hasError('notIntegerError') || locationOnBoardCode.hasError('notPositiveNumberError')\" class=\"alert alert-danger\">\r\n                    <li *ngIf=\"locationOnBoardCode.hasError('notIntegerError')\">\r\n                        <small>Number of passengers must be an integer.</small>\r\n                    </li>\r\n                    <li *ngIf=\"locationOnBoardCode.hasError('notPositiveNumberError')\">\r\n                        <small>Number of passengers must be a positive number.</small>\r\n                    </li>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n\r\n    <div class=\"col-lg-12\">\r\n\r\n        <div class=\"form-group\">\r\n            <button *ngIf=\"form.valid\" type=\"submit\" class=\"btn btn-ssn mt-2\" (click)=\"persistData()\">\r\n                <span>Submit</span>\r\n            </button>\r\n            <button *ngIf=\"!form.valid\" type=\"submit\" disabled class=\"btn btn-ssn mt-2\">\r\n                <span>Submit</span>\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"mb-3\">\r\n\r\n            <div class=\"table-responsive\">\r\n                <div ng2-st-add-button=\"\" ng-reflect-grid=\"[object Object]\" class=\"ng2-smart-actions-title ng2-smart-actions-title-add\">\r\n                </div>\r\n                <ng2-smart-table [settings]=\"tableSettings\" [source]=\"shipStoresDataSource\"></ng2-smart-table>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-ssn-card>\r\n\r\n<app-save-ship-stores></app-save-ship-stores>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/ship-stores/ship-stores.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipStoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_models_port_call_ship_stores_model__ = __webpack_require__("./src/app/shared/models/port-call-ship-stores-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_port_call_ship_stores_service__ = __webpack_require__("./src/app/shared/services/fal-ship-stores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_delete_button_delete_button_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/shared/delete-button/delete-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShipStoresComponent = /** @class */ (function () {
    function ShipStoresComponent(shipStoresService, portCallService) {
        this.shipStoresService = shipStoresService;
        this.portCallService = portCallService;
        this.portCallShipStoresList = [];
        this.portCallShipStoresModel = new __WEBPACK_IMPORTED_MODULE_2_app_shared_models_port_call_ship_stores_model__["a" /* PortCallShipStoresModel */]();
        this.listIsPristine = true;
        this.shipStoresDataSource = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tableSettings = {
            actions: false,
            attr: {
                class: 'table table-bordered'
            },
            editor: {
                config: {
                    completer: {
                        descriptionField: 'Search here'
                    }
                }
            },
            noDataMessage: 'There are no ship stores in this list.',
            columns: {
                sequenceNumber: {
                    title: 'Sequence Number',
                },
                articleName: {
                    title: 'Article Name'
                },
                articleCode: {
                    title: 'Article Code'
                },
                quantity: {
                    title: 'Quantity'
                },
                measurementType: {
                    title: 'Measurement Type'
                },
                locationOnBoard: {
                    title: 'Location Onboard'
                },
                locationOnBoardCode: {
                    title: 'Location Onboard Code'
                },
                delete: {
                    title: 'Delete',
                    // deleteButtonContent: 'Delete',
                    type: 'custom',
                    filter: false,
                    sort: false,
                    renderComponent: __WEBPACK_IMPORTED_MODULE_5__shared_delete_button_delete_button_component__["a" /* DeleteButtonComponent */],
                },
            }
        };
    }
    ShipStoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallShipStoresModel = new __WEBPACK_IMPORTED_MODULE_2_app_shared_models_port_call_ship_stores_model__["a" /* PortCallShipStoresModel */]();
        this.detailsIdentificationDataSubscription = this.portCallService.detailsIdentificationData$.subscribe(function (element) {
            if (element) {
                _this.portCallShipStoresModel.portCallId = element.portCallId;
                // Subscribe to shipStoresList$ og set lokal liste og dataSource
                _this.shipStoresService.shipStoresList$.subscribe(function (list) {
                    if (list) {
                        _this.portCallShipStoresList = list;
                        _this.portCallShipStoresModel.portCallId = element.portCallId;
                        // Get measurement types
                        if (!_this.measurementTypeList) {
                            _this.shipStoresService.getMeasurementTypeList().subscribe(function (results) {
                                _this.measurementTypeList = results;
                                _this.shipStoresDataSource.load(_this.generateSmartTable());
                            });
                        }
                        else {
                            _this.shipStoresDataSource.load(_this.generateSmartTable());
                        }
                        /*if (!this.measurementTypeList) {
              this.shipStoresService.getMeasurementTypeList().toPromise().then(measurementTypeList => {
                this.measurementTypeList = measurementTypeList;
              });
            }
            console.log(this.measurementTypeList);*/
                    }
                });
                // This will change when the port calls list changes in the database
                _this.shipStoresService.getShipStoresByPortCallId(_this.portCallShipStoresModel.portCallId).subscribe(function (list) {
                    _this.shipStoresDataSource = new __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["a" /* LocalDataSource */]();
                    _this.portCallShipStoresList = [];
                    if (list) {
                        _this.shipStoresService.setShipStoresInformationData(list);
                    }
                });
            }
        });
    };
    ShipStoresComponent.prototype.ngOnDestroy = function () {
        this.detailsIdentificationDataSubscription.unsubscribe();
    };
    // Generate list that will be sent to shipStoresDataSource that is connected to the smart table
    ShipStoresComponent.prototype.generateSmartTable = function () {
        var _this = this;
        var list = [];
        if (this.portCallShipStoresList) {
            this.portCallShipStoresList.forEach(function (element) {
                var measureMentTypeName;
                _this.measurementTypeList.forEach(function (measurementType) {
                    if (measurementType.measurementTypeId === element.measurementTypeId) {
                        measureMentTypeName = measurementType.name;
                    }
                });
                list.push({
                    sequenceNumber: element.sequenceNumber,
                    articleName: element.articleName,
                    articleCode: element.articleCode,
                    quantity: element.quantity,
                    measurementType: measureMentTypeName,
                    locationOnBoard: element.locationOnBoard,
                    locationOnBoardCode: element.locationOnBoardCode,
                });
            });
        }
        return list;
    };
    // Set measurement type and id of model
    ShipStoresComponent.prototype.selectMeasurementType = function ($event) {
        this.portCallShipStoresModel.measurementTypeId = $event.measurementTypeId;
    };
    ShipStoresComponent.prototype.persistData = function () {
        this.listIsPristine = false;
        this.shipStoresService.setDataIsPristine(false);
        // Add sequence number for model to be submitted
        if (this.portCallShipStoresList.length > 0) {
            this.portCallShipStoresModel.sequenceNumber = this.portCallShipStoresList[this.portCallShipStoresList.length - 1].sequenceNumber + 1;
        }
        else {
            this.portCallShipStoresModel.sequenceNumber = 1;
        }
        // Add this ship store to local model and create new model
        this.portCallShipStoresList.push(this.portCallShipStoresModel);
        this.portCallShipStoresModel = new __WEBPACK_IMPORTED_MODULE_2_app_shared_models_port_call_ship_stores_model__["a" /* PortCallShipStoresModel */]();
        // Update value in service
        this.shipStoresService.setShipStoresInformationData(this.portCallShipStoresList);
    };
    ShipStoresComponent.prototype.isValid = function (valid) {
        this.sendMetaData();
        return valid;
    };
    ShipStoresComponent.prototype.sendMetaData = function () {
        this.shipStoresService.setShipStoresInformationMeta({ valid: this.form.valid });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* NgForm */])
    ], ShipStoresComponent.prototype, "form", void 0);
    ShipStoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ship-stores',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/ship-stores/ship-stores.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/ship-stores/ship-stores.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_shared_services_port_call_ship_stores_service__["a" /* FalShipStoresService */],
            __WEBPACK_IMPORTED_MODULE_6_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], ShipStoresComponent);
    return ShipStoresComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/progress-bar/progress-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-ssn bg-ssn text-ssn\">\r\n  <div class=\"row px-3 py-1\">\r\n\r\n    <div *ngFor=\"let menuEntry of menuEntries\">\r\n      <div *ngIf=\"menuEntry.checked\" class=\"mx-1 my-1\">\r\n        <button class=\"btn btn-sm\" [ngClass]=\"{'btn-danger': menuEntry.hasError, 'btn-ssn': !menuEntry.hasError, 'active': selectedPortCallForm == menuEntry.name}\"\r\n          (click)=\"setPortCallForm(menuEntry.name)\">\r\n          <img src=\"{{iconPath}}{{menuEntry.icon}}\" height=\"24px\" /> {{menuEntry.name}}\r\n          <span *ngIf=\"menuEntry.hasUnsavedData\" title=\"There is unsaved data in this page.\"> *</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_prev_and_next_poc_service__ = __webpack_require__("./src/app/shared/services/prev-and-next-poc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_port_call_ship_stores_service__ = __webpack_require__("./src/app/shared/services/fal-ship-stores.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_form_names__ = __webpack_require__("./src/app/shared/constants/form-names.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent(portCallService, prevAndNextPortCallService, contentService, shipStoresService) {
        this.portCallService = portCallService;
        this.prevAndNextPortCallService = prevAndNextPortCallService;
        this.contentService = contentService;
        this.shipStoresService = shipStoresService;
        this.formNames = __WEBPACK_IMPORTED_MODULE_5_app_shared_constants_form_names__["a" /* FORM_NAMES */];
        this.iconPath = 'assets/images/icons/128x128/white/';
        this.baseMenuEntries = [
            {
                name: this.formNames.PREV_AND_NEXT_POC,
                icon: 'voyage.png',
                checked: true,
                hasError: false,
                hasUnsavedData: false
            },
            {
                name: this.formNames.PORT_CALL_DETAILS,
                icon: 'verification-clipboard.png',
                checked: true,
                hasError: false,
                hasUnsavedData: false
            }
        ];
        this.finalMenuEntries = [
            {
                name: this.formNames.CONFIRM_PORT_CALL,
                icon: 'checkmark.png',
                checked: true,
                hasError: false,
                hasUnsavedData: false
            }
        ];
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuEntries = this.baseMenuEntries.concat(this.finalMenuEntries);
        this.reportingForThisPortCallDataSubscription = this.portCallService.reportingForThisPortCallData$.subscribe(function (reportingData) {
            if (reportingData != null) {
                var falForms = [
                    {
                        name: _this.formNames.DPG,
                        icon: 'hazard.png',
                        checked: reportingData.reportingDpg || false,
                        hasError: false,
                        hasUnsavedData: false
                    },
                    {
                        name: _this.formNames.CARGO,
                        icon: 'cargo.png',
                        checked: reportingData.reportingCargo || false,
                        hasError: false,
                        hasUnsavedData: false
                    },
                    {
                        name: _this.formNames.SHIP_STORES,
                        icon: 'alcohol.png',
                        checked: reportingData.reportingShipStores || false,
                        hasError: false,
                        hasUnsavedData: false
                    },
                    {
                        name: _this.formNames.CREW,
                        icon: 'crew.png',
                        checked: reportingData.reportingCrew || false,
                        hasError: false,
                        hasUnsavedData: false
                    },
                    {
                        name: _this.formNames.PAX,
                        icon: 'pax.png',
                        checked: reportingData.reportingPax || false,
                        hasError: false,
                        hasUnsavedData: false
                    }
                ];
                _this.menuEntries = _this.baseMenuEntries
                    .concat(falForms)
                    .concat(_this.finalMenuEntries);
                // Set checked in services for FAL forms
                _this.shipStoresService.setCheckedInProgressBar(reportingData.reportingShipStores);
            }
        });
        this.portCallFormNameSubscription = this.contentService.portCallFormName$.subscribe(function (portCallFormName) {
            _this.selectedPortCallForm = portCallFormName;
        });
        this.crewPassengersAndDimensionsMetaSubscription = this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(function (metaData) {
            _this.menuEntries.find(function (p) { return p.name === _this.formNames.PORT_CALL_DETAILS; }).hasError = !metaData.valid;
        });
        this.voyagesDataIsPristineSubscription = this.prevAndNextPortCallService.dataIsPristine$.subscribe(function (pristineData) {
            _this.menuEntries.find(function (p) { return p.name === _this.formNames.PREV_AND_NEXT_POC; }).hasUnsavedData = !pristineData;
        });
        this.voyagesMetaSubscription = this.prevAndNextPortCallService.prevAndNextPortOfCallMeta$.subscribe(function (metaData) {
            _this.menuEntries.find(function (p) { return p.name === _this.formNames.PREV_AND_NEXT_POC; }).hasError = !metaData.valid;
        });
        this.portCallDetailsPristineSubscription = this.portCallService.detailsPristine$.subscribe(function (detailsDataIsPristine) {
            _this.menuEntries.find(function (p) { return p.name === _this.formNames.PORT_CALL_DETAILS; }).hasUnsavedData = !detailsDataIsPristine;
        });
        this.shipStoresDataIsPristineSubscription = this.shipStoresService.dataIsPristine$.subscribe(function (shipStoresDataIsPristine) {
            var shipStores = _this.menuEntries.find(function (p) { return p.name === _this.formNames.SHIP_STORES; });
            if (shipStores) {
                shipStores.hasUnsavedData = !shipStoresDataIsPristine;
            }
        });
    };
    ProgressBarComponent.prototype.ngOnDestroy = function () {
        this.reportingForThisPortCallDataSubscription.unsubscribe();
        this.portCallFormNameSubscription.unsubscribe();
        this.crewPassengersAndDimensionsMetaSubscription.unsubscribe();
        this.voyagesDataIsPristineSubscription.unsubscribe();
        this.portCallDetailsPristineSubscription.unsubscribe();
        this.shipStoresDataIsPristineSubscription.unsubscribe();
    };
    ProgressBarComponent.prototype.setPortCallForm = function (contentName) {
        this.contentService.setPortCallForm(contentName);
    };
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-progress-bar',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/progress-bar/progress-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__["a" /* PortCallService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_prev_and_next_poc_service__["a" /* PrevAndNextPocService */],
            __WEBPACK_IMPORTED_MODULE_1_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_services_port_call_ship_stores_service__["a" /* FalShipStoresService */]])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/registration.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-bg header=\"REGISTER PORT CALL\" icon=\"portcall.png\">\r\n  <app-forms></app-forms>\r\n</app-ssn-bg>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(contentService) {
        this.contentService = contentService;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallFormNameSubscription = this.contentService.portCallFormName$.subscribe(function (content) {
            _this.selectedComponent = content;
        });
    };
    RegistrationComponent.prototype.ngOnDestroy = function () {
        this.portCallFormNameSubscription.unsubscribe();
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_content_service__["a" /* ContentService */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/view-port-call/view-port-call.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/view-port-call/view-port-call.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-bg header=\"VIEW PORT CALL\" icon=\"eye.png\">\r\n\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col\">\r\n      <app-ship-info-table></app-ship-info-table>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col\">\r\n      <app-location-time-info-table></app-location-time-info-table>\r\n    </div>\r\n  </div>\r\n\r\n  <app-confirmation-view></app-confirmation-view>\r\n\r\n  <div class=\"row text-center\">\r\n    <div class=\"col\">\r\n      <button class=\"btn btn-outline-light\" (click)=\"goBack()\" (mouseover)=\"backButtonIcon='left-arrow'\" (mouseout)=\"backButtonIcon='white/left-arrow'\">\r\n        <img src=\"assets/images/icons/128x128/{{backButtonIcon}}.png\" height=\"32px\">\r\n        <span class=\"no-wrap\"> GO BACK</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</app-ssn-bg>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/view-port-call/view-port-call.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPortCallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewPortCallComponent = /** @class */ (function () {
    function ViewPortCallComponent(contentService, portCallService, shipService) {
        this.contentService = contentService;
        this.portCallService = portCallService;
        this.shipService = shipService;
        this.backButtonIcon = 'white/left-arrow';
    }
    ViewPortCallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shipDataSubscription = this.portCallService.shipData$.subscribe(function (shipResult) {
            _this.shipService.setShipOverviewData(shipResult);
        });
    };
    ViewPortCallComponent.prototype.ngOnDestroy = function () {
        this.shipDataSubscription.unsubscribe();
    };
    ViewPortCallComponent.prototype.goBack = function () {
        this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_PORT_CALLS);
    };
    ViewPortCallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-port-call',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/view-port-call/view-port-call.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/view-port-call/view-port-call.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_port_call_service__["a" /* PortCallService */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_services_ship_service__["a" /* ShipService */]])
    ], ViewPortCallComponent);
    return ViewPortCallComponent;
}());



/***/ }),

/***/ "./src/app/main-content/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer {\r\n    height: 100px;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n\r\n.footer-section {\r\n    height: 100px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/main-content/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-ssn text-ssn text-center\">\r\n  <div class=\"row\">\r\n    <div class=\"col-4 footer-section\">\r\n      <a href=\"/assets/files/imo_msw_guide.pdf\" download=\"Guide to operate the preliminary MSW\">\r\n        <small class=\"text-ssn\">Download user guide here</small>\r\n        <img src=\"/assets/images/icons/128x128/white/download.png\" height=\"24px\" />\r\n      </a>\r\n    </div>\r\n    <div class=\"col-4 footer-section\">\r\n      <div class=\"d-table\">\r\n        <div class=\"d-table-row\">\r\n          <div class=\"d-table-cell py-1\">\r\n            <small class=\"no-wrap\">\r\n              An Open Source Maritime\r\n            </small>\r\n            <small class=\"no-wrap\">\r\n              Single Window project.\r\n            </small>\r\n          </div>\r\n        </div>\r\n        <div class=\"d-table-row\">\r\n          <div class=\"d-table-cell py-1\">\r\n            <small>Available at </small>\r\n            <a href=\"https://github.com/Fundator/IMO-Maritime-Single-Window/\" target=\"_blank\" title=\"GitHub\">\r\n              <small class=\"text-ssn\">GitHub</small>\r\n              <img src=\"/assets/images/icons/128x128/white/github.png\" height=\"24px\" />\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4 footer-section\">\r\n      <div class=\"d-table\">\r\n        <div class=\"d-table-row\">\r\n          <div class=\"d-table-cell py-1\">\r\n            <span>Coordinated by</span>\r\n            <a href=\"https://www.imo.org/\" target=\"_blank\">\r\n              <img src=\"/assets/images/logos/imo-logo.png\" alt=\"IMO\" title=\"International Maritime Organization\" height=\"48px\" />\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/main-content/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/main-content/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/main-content/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main-content/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-dark bg-ssn\">\r\n\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <button class=\"btn btn-sm btn-ssn\" type=\"button\" (click)=\"menuIsCollapsed = !menuIsCollapsed\" *ngIf=\"userMenuEntries.length > 1\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <button class=\"btn btn-sm btn-ssn\" type=\"button\" (click)=\"setContent(userMenuEntries[0].menuName)\" *ngIf=\"userMenuEntries.length === 1\">\r\n          <img src=\"{{iconPath}}home.png\" height=\"16px\">\r\n        </button>\r\n        <img src=\"/assets/images/logos/logo.png\" height=\"32px\" />\r\n        <span class=\"text-center text-ssn\">IMO Maritime Single Window</span>\r\n      </li>\r\n    </ul>\r\n\r\n    <span class=\"badge badge-danger\" *ngIf=\"!(online$ | async)\">Internet connection lost</span>\r\n    <span class=\"badge badge-danger\" *ngIf=\"!hasDbConnection\">Connection to database lost.</span>\r\n    <span class=\"badge badge-danger\" *ngIf=\"!hasServerConnection\">Connection to server lost.</span>\r\n\r\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"loggedIn\">\r\n      <li class=\"nav-item\">\r\n        <form class=\"form-inline\">\r\n          <div class=\"btn-group\">\r\n            <button class=\"btn btn-light btn-sm\">{{userName}}</button>\r\n            <button class=\"btn btn-outline-light btn-sm\" (click)=\"logout()\">Log out</button>\r\n          </div>\r\n        </form>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"menuIsCollapsed\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm mx-auto mt-2\" *ngFor=\"let menuEntry of userMenuEntries\">\r\n          <button class=\"btn btn-ssn btn-sm col\" (click)=\"setContent(menuEntry.menuName)\">\r\n            <img src=\"{{ menuEntry.iconPath }}\" height=\"24px\" /> {{menuEntry.title}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/main-content/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_menu_claims__ = __webpack_require__("./src/app/shared/constants/menu-claims.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators_mapTo__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/mapTo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_shared_services_db_connection_service__ = __webpack_require__("./src/app/shared/services/db-connection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService, contentService, accountService, dbConnectionService, router) {
        this.loginService = loginService;
        this.contentService = contentService;
        this.accountService = accountService;
        this.dbConnectionService = dbConnectionService;
        this.router = router;
        this.hasDbConnection = true;
        this.hasServerConnection = true;
        this.menuIsCollapsed = true;
        this.roles = new Array();
        this.userName = 'default';
        this.iconPath = 'assets/images/icons/128x128/white/';
        this.menuEntries = [
            {
                title: 'PORT CALLS',
                iconPath: this.iconPath + 'portcall.png',
                menuName: __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_PORT_CALLS
            },
            {
                title: 'USERS',
                iconPath: this.iconPath + 'user.png',
                menuName: __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].REGISTER_USER
            },
            {
                title: 'SHIPS',
                iconPath: this.iconPath + 'ship.png',
                menuName: __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_SHIPS
            },
            {
                title: 'LOCATIONS',
                iconPath: this.iconPath + 'location.png',
                menuName: __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].LOCATIONS
            },
            {
                title: 'ORGANIZATIONS',
                iconPath: this.iconPath + 'pax.png',
                menuName: __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_ORGANIZATIONS
            }
        ];
        this.permissions = __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_menu_claims__["a" /* MenuClaims */].PERMISSIONS;
        this.online$ = Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_merge__["a" /* merge */])(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_of__["a" /* of */])(navigator.onLine), Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_fromEvent__["a" /* fromEvent */])(window, 'online').pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators_mapTo__["a" /* mapTo */])(true)), Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_fromEvent__["a" /* fromEvent */])(window, 'offline').pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators_mapTo__["a" /* mapTo */])(false)));
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loginService.authNavStatus$.subscribe(function (status) { return (_this.loggedIn = status); });
        this.contentService.contentName$.subscribe(function () { return (_this.menuIsCollapsed = true); });
        this.accountService.userClaimsData$.subscribe(function (userClaims) {
            if (userClaims) {
                var userClaimsTypeMenu_1 = userClaims.filter(function (claim) { return claim.type === __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_menu_claims__["a" /* MenuClaims */].TYPE; });
                var keys = Object.keys(_this.permissions);
                keys.forEach(function (key) {
                    _this.permissions[key] = userClaimsTypeMenu_1.some(function (claim) { return claim.value === key; });
                });
                _this.generateMenu();
            }
        });
        if (this.loggedIn) {
            this.accountService.getUserName().subscribe(function (result) {
                if (result) {
                    _this.userName = result;
                }
            });
        }
        this.startDbConnectionCheck();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
        this.dbConnectionSubscription.unsubscribe();
    };
    HeaderComponent.prototype.startDbConnectionCheck = function () {
        var _this = this;
        if (this.dbConnectionSubscription) {
            this.dbConnectionSubscription.unsubscribe();
        }
        this.dbConnectionSubscription = __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__["a" /* Observable */].interval(this.hasDbConnection && this.hasServerConnection ? 15000 : 5000).subscribe(function () {
            _this.dbConnectionService.getHasDbConnection().subscribe(function (hasConnection) {
                _this.hasServerConnection = true;
                if (_this.hasDbConnection !== hasConnection) {
                    _this.hasDbConnection = hasConnection;
                    _this.startDbConnectionCheck();
                }
            }, function (error) {
                _this.hasServerConnection = false;
                _this.startDbConnectionCheck();
            });
        });
    };
    HeaderComponent.prototype.generateMenu = function () {
        this.setMenuEntries();
    };
    HeaderComponent.prototype.setMenuEntries = function () {
        // Populates the menu entry list with the entries the user has access to
        this.userMenuEntries = [];
        var _loop_1 = function (menuEntry) {
            var menuName = menuEntry.menuName;
            if (this_1.permissions[menuName]) {
                this_1.userMenuEntries.push(this_1.menuEntries.find(function (newMenuEntry) { return newMenuEntry.menuName === menuName; }));
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.menuEntries; _i < _a.length; _i++) {
            var menuEntry = _a[_i];
            _loop_1(menuEntry);
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate(['/login']);
    };
    HeaderComponent.prototype.setContent = function (contentName) {
        this.contentService.setContent(contentName);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/main-content/header/header.component.html"),
            styles: [__webpack_require__("./src/app/main-content/header/header.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_app_shared_services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_5_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_12_app_shared_services_db_connection_service__["a" /* DbConnectionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-content/main-content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/main-content.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"mt-2 mx-sm-auto mx-md-2 mx-lg-4\">\r\n  <app-content-container></app-content-container>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/main-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(accountService) {
        this.accountService = accountService;
    }
    MainContentComponent.prototype.ngOnInit = function () {
        var userClaims;
        if ((userClaims = localStorage.getItem('user_claims'))) {
            this.accountService.setUserClaims(JSON.parse(userClaims));
        }
    };
    MainContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-content',
            template: __webpack_require__("./src/app/main-content/main-content.component.html"),
            styles: [__webpack_require__("./src/app/main-content/main-content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_account_service__["a" /* AccountService */]])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirmation-modal/confirmation-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/confirmation-modal/confirmation-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">{{ headerText }}</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  {{ bodyText }}\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-ssn\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/confirmation-modal/confirmation-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationModalComponent = /** @class */ (function () {
    function ConfirmationModalComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmationModalComponent.prototype.ngOnInit = function () {
        this.headerText = this.modalType;
    };
    ConfirmationModalComponent.TYPE_SUCCESS = 'SUCCESS';
    ConfirmationModalComponent.TYPE_WARNING = 'WARNING';
    ConfirmationModalComponent.TYPE_FAILURE = 'FAILURE';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmationModalComponent.prototype, "headerText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmationModalComponent.prototype, "bodyText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ConfirmationModalComponent.prototype, "modalType", void 0);
    ConfirmationModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirmation-modal',
            template: __webpack_require__("./src/app/shared/components/confirmation-modal/confirmation-modal.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/confirmation-modal/confirmation-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]])
    ], ConfirmationModalComponent);
    return ConfirmationModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirmation-view/clearances/clearances.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/confirmation-view/clearances/clearances.component.html":
/***/ (function(module, exports) {

module.exports = "<app-table-card header=\"Clearances\" icon=\"stamp.png\">\r\n  <thead>\r\n    <tr>\r\n      <th>Type</th>\r\n      <th>Status</th>\r\n      <th>Remark</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let clearance of clearanceList\">\r\n      <td>{{ clearance.organization.name }}</td>\r\n      <td>\r\n        <div *ngIf=\"clearance.cleared\" class=\"badge badge-success mb-0\"><span>Cleared.</span></div>\r\n        <div *ngIf=\"clearance.cleared == null\" class=\"badge badge-warning mb-0\"><span>Not reviewed.</span></div>\r\n        <div *ngIf=\"clearance.cleared == false\" class=\"badge badge-danger mb-0\"><span>Rejected.</span></div>\r\n      </td>\r\n      <td>{{ clearance.remark }}</td>\r\n    </tr>\r\n  </tbody>\r\n</app-table-card>"

/***/ }),

/***/ "./src/app/shared/components/confirmation-view/clearances/clearances.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearancesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClearancesComponent = /** @class */ (function () {
    function ClearancesComponent(portCallService) {
        this.portCallService = portCallService;
        this.clearanceList = [];
    }
    ClearancesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clearanceListDataSubscription = this.portCallService.clearanceListData$.subscribe(function (clearanceListData) {
            if (clearanceListData) {
                _this.clearanceList = clearanceListData;
            }
        });
    };
    ClearancesComponent.prototype.ngOnDestroy = function () {
        this.clearanceListDataSubscription.unsubscribe();
    };
    ClearancesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clearances',
            template: __webpack_require__("./src/app/shared/components/confirmation-view/clearances/clearances.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/confirmation-view/clearances/clearances.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], ClearancesComponent);
    return ClearancesComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirmation-view/confirmation-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/confirmation-view/confirmation-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <app-prev-and-next-poc-table></app-prev-and-next-poc-table>\r\n  </div>\r\n</div>\r\n\r\n<!-- Port Call Details -->\r\n<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <app-port-call-details></app-port-call-details>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- FAL forms -->\r\n<div *ngFor=\"let entry of falForms\">\r\n  <div class=\"row mb-3\" *ngIf=\"entry.checked\">\r\n    <div class=\"col\">\r\n      <app-table-card header=\"{{entry.name}}\" icon=\"{{entry.icon}}\" collapsible=true>\r\n        <div [ngSwitch]=\"entry.name\">\r\n          <div *ngSwitchCase=\"'Ship Stores'\" class=\"text-center my-3\">\r\n            <span class=\"no-wrap\">{{ entry.name }} information</span>\r\n            <span class=\"no-wrap\">has been provided.</span>\r\n          </div>\r\n          <div *ngSwitchDefault class=\"text-center my-3\">\r\n            <img src=\"{{iconPath}}warning.png\" height=\"24px\" />\r\n            <span class=\"no-wrap\">{{ entry.name }} information</span>\r\n            <span class=\"no-wrap\">is marked for delivery,</span>\r\n            <span class=\"no-wrap\">but no information is provided.</span>\r\n          </div>\r\n        </div>\r\n      </app-table-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Clearance information -->\r\n<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <app-clearances></app-clearances>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/confirmation-view/confirmation-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmationViewComponent = /** @class */ (function () {
    function ConfirmationViewComponent(portCallService) {
        this.portCallService = portCallService;
        this.iconPath = 'assets/images/icons/128x128/white/';
    }
    ConfirmationViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportingForThisPortCallDataSubcription = this.portCallService.reportingForThisPortCallData$.subscribe(function (reportingData) {
            if (reportingData != null) {
                _this.falForms = [
                    {
                        name: 'DPG',
                        icon: 'hazard.png',
                        checked: reportingData.reportingDpg || false
                    },
                    {
                        name: 'Cargo',
                        icon: 'cargo.png',
                        checked: reportingData.reportingCargo || false
                    },
                    {
                        name: 'Ship Stores',
                        icon: 'alcohol.png',
                        checked: reportingData.reportingShipStores || false
                    },
                    {
                        name: 'Crew',
                        icon: 'crew.png',
                        checked: reportingData.reportingCrew || false
                    },
                    {
                        name: 'Pax',
                        icon: 'pax.png',
                        checked: reportingData.reportingPax || false
                    }
                ];
            }
        });
    };
    ConfirmationViewComponent.prototype.ngOnDestroy = function () {
        this.reportingForThisPortCallDataSubcription.unsubscribe();
    };
    ConfirmationViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirmation-view',
            template: __webpack_require__("./src/app/shared/components/confirmation-view/confirmation-view.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/confirmation-view/confirmation-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], ConfirmationViewComponent);
    return ConfirmationViewComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirmation-view/port-call-details/port-call-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/confirmation-view/port-call-details/port-call-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <app-table-card header=\"Crew, Passengers and Dimensions\" icon=\"crew.png\" collapsible=true>\r\n      <tbody>\r\n        <tr>\r\n          <td *ngFor=\"let entry of portCallDetailsInfo\" class=\"no-wrap px-1 mx-1\">\r\n            <tr>\r\n              <small>{{entry.description}}</small>\r\n            </tr>\r\n            <tr>\r\n              <div *ngIf=\"entry.data\">{{ entry.data }}</div>\r\n              <div *ngIf=\"!entry.data\" class=\"font-italic\">Not provided.</div>\r\n            </tr>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </app-table-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <app-selected-purposes></app-selected-purposes>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/confirmation-view/port-call-details/port-call-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NO_OF_CREW = 'No. of Crew';
var NO_OF_PASSENGERS = 'No. of Passengers';
var ACTUAL_DRAUGHT = 'Actual Draught';
var AIR_DRAUGHT = 'Air Draught';
var PortCallDetailsComponent = /** @class */ (function () {
    function PortCallDetailsComponent(portCallService) {
        this.portCallService = portCallService;
        this.portCallDetailsInfo = [
            { description: NO_OF_CREW, data: null },
            { description: NO_OF_PASSENGERS, data: null },
            { description: ACTUAL_DRAUGHT, data: null },
            { description: AIR_DRAUGHT, data: null }
        ];
    }
    PortCallDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crewPassengersAndDimensionsDataSubscription = this.portCallService.crewPassengersAndDimensionsData$.subscribe(function (data) {
            if (data != null) {
                _this.portCallDetailsInfo.find(function (p) { return p.description === NO_OF_CREW; }).data =
                    data.numberOfCrew;
                _this.portCallDetailsInfo.find(function (p) { return p.description === NO_OF_PASSENGERS; }).data =
                    data.numberOfPassengers;
                _this.portCallDetailsInfo.find(function (p) { return p.description === ACTUAL_DRAUGHT; }).data =
                    data.actualDraught;
                _this.portCallDetailsInfo.find(function (p) { return p.description === AIR_DRAUGHT; }).data =
                    data.airDraught;
            }
        });
    };
    PortCallDetailsComponent.prototype.ngOnDestroy = function () {
        this.crewPassengersAndDimensionsDataSubscription.unsubscribe();
    };
    PortCallDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-port-call-details',
            template: __webpack_require__("./src/app/shared/components/confirmation-view/port-call-details/port-call-details.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/confirmation-view/port-call-details/port-call-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], PortCallDetailsComponent);
    return PortCallDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-table-card header=\"Selected Purposes\" icon=\"target.png\" collapsible=true>\r\n  <tbody class=\"border-top-0\">\r\n    <tr>\r\n      <td *ngFor=\"let purpose of selectedPurposes; let isFirst=first\" [ngClass]=\"{'border-left': !isFirst}\"> {{ getPurposeName(purpose.portCallPurposeId) }} </td>\r\n    </tr>\r\n  </tbody>\r\n</app-table-card>"

/***/ }),

/***/ "./src/app/shared/components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedPurposesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_purpose_service__ = __webpack_require__("./src/app/shared/services/purpose.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OTHER_PURPOSE_ID = '100249';
var SelectedPurposesComponent = /** @class */ (function () {
    function SelectedPurposesComponent(purposeService, portCallService) {
        this.purposeService = purposeService;
        this.portCallService = portCallService;
        this.otherPurposeName = '';
    }
    SelectedPurposesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPurposesSubscription = this.purposeService.getPurposes().subscribe(function (data) {
            _this.purposeList = data;
        });
        this.portCallPurposeDataSubscription = this.portCallService.portCallPurposeData$.subscribe(function (data) {
            if (data != null) {
                _this.selectedPurposes = data;
            }
        });
        this.otherPurposeNameSubscription = this.portCallService.otherPurposeName$.subscribe(function (data) {
            _this.otherPurposeName = data;
        });
    };
    SelectedPurposesComponent.prototype.ngOnDestroy = function () {
        this.getPurposesSubscription.unsubscribe();
        this.portCallPurposeDataSubscription.unsubscribe();
        this.otherPurposeNameSubscription.unsubscribe();
    };
    SelectedPurposesComponent.prototype.getPurposeName = function (id) {
        if (this.purposeList != null) {
            var purpose = this.purposeList.find(function (p) { return p.portCallPurposeId === id; });
            if (purpose.portCallPurposeId !== OTHER_PURPOSE_ID) {
                return purpose != null ? purpose.name : null;
            }
            else {
                return this.otherPurposeName === ''
                    ? 'Other purpose is undefined'
                    : 'Other: "' + this.otherPurposeName + '"';
            }
        }
    };
    SelectedPurposesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-selected-purposes',
            template: __webpack_require__("./src/app/shared/components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_purpose_service__["a" /* PurposeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_purpose_service__["a" /* PurposeService */],
            __WEBPACK_IMPORTED_MODULE_1_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], SelectedPurposesComponent);
    return SelectedPurposesComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/contact-select/contact-select.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/contact-select/contact-select.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Contact information\" icon=\"contact.png\">\r\n  <div class=\"text-center\">\r\n    <label for=\"contact_info\">Select contact information</label>\r\n  </div>\r\n  <ng-select id=\"contact_info\" [items]=\"contactList\" [multiple]=\"true\" [closeOnSelect]=\"true\" bindLabel=\"contactMedium.contactMediumType\"\r\n    placeholder=\"Select contact mediums\" [(ngModel)]=\"selectedContactModels\" (change)=\"contactMediumSelected()\">\r\n  </ng-select>\r\n\r\n  <div *ngFor=\"let contactMedium of selectedContactModels; let i = index\" class=\"form-group row mt-3\">\r\n    <div class=\"col\">\r\n      <div class=\"input-group input-group-sm\">\r\n\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text bg-ssn text-white\">{{ contactMedium.contactMedium.contactMediumType }}</span>\r\n        </div>\r\n\r\n        <input id=\"contact_value\" name=\"contactValue\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter {{ contactMedium.contactMedium.contactMediumType }}\"\r\n          [(ngModel)]=\"selectedContactModels[i].contactValue\" (ngModelChange)=\"contactInfoChanged(contactMedium)\" />\r\n\r\n        <div class=\"input-group-append\">\r\n          <div class=\"input-group-text bg-ssn text-white\">\r\n            <input type=\"radio\" id=\"{{i}}\" name=\"preferredRadios\" [value]=\"true\" [(ngModel)]=\"selectedContactModels[i].isPreferred\" (ngModelChange)=\"preferredSet(selectedContactModels[i])\"\r\n              [checked]=\"selectedContactModels[i].isPreferred\">\r\n            <label class=\"form-check-label\" for=\"{{i}}\">Preferred</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/shared/components/contact-select/contact-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_models_contact_model__ = __webpack_require__("./src/app/shared/models/contact-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactSelectComponent = /** @class */ (function () {
    function ContactSelectComponent(constantsService) {
        this.constantsService = constantsService;
    }
    ContactSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getContactMediumListSubscription = this.constantsService.getContactMediumList().subscribe(function (data) {
            if (data) {
                _this.contactList = data.map(function (d) {
                    var contactModel = new __WEBPACK_IMPORTED_MODULE_1_app_shared_models_contact_model__["a" /* ContactModel */]();
                    contactModel.contactMedium = d;
                    return contactModel;
                });
            }
        });
    };
    ContactSelectComponent.prototype.ngOnDestroy = function () {
        this.getContactMediumListSubscription.unsubscribe();
    };
    ContactSelectComponent.prototype.preferredSet = function (selectedContactModel) {
        var newUpdatedContactMediums = this.selectedContactModels.map(function (oldContactModel) {
            if (oldContactModel.contactMedium.contactMediumId ===
                selectedContactModel.contactMedium.contactMediumId) {
                return selectedContactModel;
            }
            var updatedContactModel = oldContactModel;
            updatedContactModel.isPreferred = false;
            return updatedContactModel;
        });
    };
    ContactSelectComponent.prototype.contactMediumSelected = function () {
        // Outdated
        // this.contactService.setContactData(this.selectedContactModels);
    };
    ContactSelectComponent.prototype.contactInfoChanged = function (contactMedium) {
        // Outdated
        // this.contactService.setContactData(this.selectedContactModels);
    };
    ContactSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-select',
            template: __webpack_require__("./src/app/shared/components/contact-select/contact-select.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/contact-select/contact-select.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__["a" /* ConstantsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__["a" /* ConstantsService */]])
    ], ContactSelectComponent);
    return ContactSelectComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/date-time-picker/date-time-picker.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/date-time-picker/date-time-picker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-table mx-auto\">\r\n  <div class=\"d-table-row\">\r\n    <div class=\"d-table-cell p-1\">\r\n      <div class=\"form-group\">\r\n        <label for=\"date_input\">{{ header }}</label>\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <button class=\"btn btn-sm btn-ssn\" (click)=\"dp.toggle()\" type=\"button\">\r\n              <img src=\"assets/images/icons/128x128/white/calendar.png\" height=\"24px\" />\r\n            </button>\r\n          </div>\r\n          <input id=\"date_input\" class=\"form-control form-control-sm\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [showWeekNumbers]=\"true\"\r\n            [(ngModel)]=\"dateTimeModel.date\" ngbDatepicker #dp=\"ngbDatepicker\" (ngModelChange)=\"dateChanged($event)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-table-cell p-1\">\r\n      <ngb-timepicker [(ngModel)]=\"dateTimeModel.time\" (ngModelChange)=\"timeChanged($event)\" [minuteStep]=15></ngb-timepicker>\r\n    </div>\r\n  </div>\r\n  <div class=\"d-table-row\">\r\n    <div *ngIf=\"!validDateFormat\" class=\"alert alert-danger\" role=\"alert\">\r\n      <span>Invalid date format.</span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/date-time-picker/date-time-picker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/timepicker/ngb-time.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateTimePickerComponent = /** @class */ (function () {
    function DateTimePickerComponent() {
        this.dateTimeModel = {
            date: null,
            time: new __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap_timepicker_ngb_time__["a" /* NgbTime */](0, 0, 0)
        };
        this.dateTimeResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.validDateFormat = true;
    }
    DateTimePickerComponent.prototype.ngOnInit = function () { };
    DateTimePickerComponent.prototype.dateChanged = function (dateResult) {
        this.validDateFormat = this.hasValidDateFormat(dateResult);
        this.persistData();
    };
    DateTimePickerComponent.prototype.timeChanged = function () {
        this.persistData();
    };
    DateTimePickerComponent.prototype.persistData = function () {
        if (this.dateTimeModel.date && this.validDateFormat && this.dateTimeModel.time) {
            this.dateTimeResult.emit(this.dateTimeModel);
        }
        else {
            this.dateTimeResult.emit(null);
        }
    };
    DateTimePickerComponent.prototype.hasValidDateFormat = function (model) {
        return typeof model !== 'string';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DateTimePickerComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DateTimePickerComponent.prototype, "dateTimeModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], DateTimePickerComponent.prototype, "dateTimeResult", void 0);
    DateTimePickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-date-time-picker',
            template: __webpack_require__("./src/app/shared/components/date-time-picker/date-time-picker.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/date-time-picker/date-time-picker.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], DateTimePickerComponent);
    return DateTimePickerComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/location-info-table/location-info-table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/location-info-table/location-info-table.component.html":
/***/ (function(module, exports) {

module.exports = "<app-table-card header=\"Location Information\" icon=\"location.png\">\r\n  <tbody>\r\n    <tr>\r\n      <td>\r\n        <img *ngIf=\"locationFlag\" src=\"assets/images/flags/128x128/{{locationFlag | lowercase}}.png\" class=\"my-2\" height=\"32px\">\r\n      </td>\r\n      <td *ngFor=\"let entry of locationInfo\" class=\"no-wrap px-1 mx-1\">\r\n        <tr>\r\n          <small>{{ entry.description }}:</small>\r\n        </tr>\r\n        <tr>\r\n          <div *ngIf=\"entry.data\">{{ entry.data }}</div>\r\n          <div *ngIf=\"!entry.data\" class=\"font-italic\">Not provided.</div>\r\n        </tr>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</app-table-card>"

/***/ }),

/***/ "./src/app/shared/components/location-info-table/location-info-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationInfoTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_properties__ = __webpack_require__("./src/app/shared/constants/location-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_location_service__ = __webpack_require__("./src/app/shared/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationInfoTableComponent = /** @class */ (function () {
    function LocationInfoTableComponent(locationService) {
        this.locationService = locationService;
        this.locationProperties = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_properties__["a" /* LocationProperties */].PROPERTIES;
        this.locationInfo = [];
    }
    LocationInfoTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationProperties = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_properties__["a" /* LocationProperties */].PROPERTIES;
        this.locationDataSubscription = this.locationService.locationData$.subscribe(function (locationResult) {
            if (locationResult) {
                _this.locationFlag = (locationResult.country) ? locationResult.country.twoCharCode.toLowerCase() : null;
                _this.locationProperties.COUNTRY.data = (locationResult.country) ? locationResult.country.name : null;
                _this.locationProperties.LOCATION_TYPE.data = locationResult.locationType.name;
                _this.locationProperties.LOCATION_NAME.data = locationResult.name;
                _this.locationProperties.LOCATION_CODE.data = locationResult.locationCode;
            }
            _this.locationInfo = Object.values(_this.locationProperties);
        });
    };
    LocationInfoTableComponent.prototype.ngOnDestroy = function () {
        this.locationDataSubscription.unsubscribe();
    };
    LocationInfoTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-info-table',
            template: __webpack_require__("./src/app/shared/components/location-info-table/location-info-table.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/location-info-table/location-info-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_location_service__["a" /* LocationService */]])
    ], LocationInfoTableComponent);
    return LocationInfoTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/location-time-info-table/location-time-info-table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/location-time-info-table/location-time-info-table.component.html":
/***/ (function(module, exports) {

module.exports = "<app-table-card header=\"Location Information\" icon=\"location.png\">\r\n  <tbody>\r\n    <tr>\r\n      <td>\r\n        <img *ngIf=\"locationFlag\" src=\"assets/images/flags/128x128/{{locationFlag | lowercase}}.png\" class=\"my-2\" height=\"32px\">\r\n      </td>\r\n      <td *ngFor=\"let entry of locationTimeInfo\" class=\"no-wrap px-1 mx-1\">\r\n        <tr *ngIf=\"entry.data\">\r\n          <small>{{ entry.description }}:</small>\r\n        </tr>\r\n        <tr *ngIf=\"entry.data\">{{ entry.data }}</tr>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</app-table-card>"

/***/ }),

/***/ "./src/app/shared/components/location-time-info-table/location-time-info-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTimeInfoTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_time_properties__ = __webpack_require__("./src/app/shared/constants/location-time-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationTimeInfoTableComponent = /** @class */ (function () {
    function LocationTimeInfoTableComponent(portCallService) {
        this.portCallService = portCallService;
        this.locationTimeProperties = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_time_properties__["a" /* LocationTimeProperties */].PROPERTIES;
        this.locationTimeInfo = [];
    }
    LocationTimeInfoTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationTimeProperties = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_location_time_properties__["a" /* LocationTimeProperties */].PROPERTIES;
        this.locationDataSubscription = this.portCallService.locationData$.subscribe(function (locationResult) {
            if (locationResult) {
                _this.locationFlag = locationResult.country
                    ? locationResult.country.twoCharCode.toLowerCase()
                    : null;
                _this.locationTimeProperties.LOCATION_TYPE.data =
                    locationResult.locationType.name;
                _this.locationTimeProperties.LOCATION_NAME.data = locationResult.name;
                _this.locationTimeProperties.LOCATION_CODE.data =
                    locationResult.locationCode;
                _this.portCallService.etaEtdData$.subscribe(function (dateTimeResult) {
                    if (dateTimeResult && dateTimeResult.eta && dateTimeResult.etd) {
                        _this.locationTimeProperties.ETA.data = _this.dateTimeFormat(dateTimeResult.eta);
                        _this.locationTimeProperties.ETD.data = _this.dateTimeFormat(dateTimeResult.etd);
                    }
                });
            }
            _this.locationTimeInfo = Object.values(_this.locationTimeProperties);
        });
    };
    LocationTimeInfoTableComponent.prototype.ngOnDestroy = function () {
        this.locationDataSubscription.unsubscribe();
    };
    LocationTimeInfoTableComponent.prototype.dateTimeFormat = function (time) {
        return (time.year +
            '-' +
            this.twoDigitFormat(time.month) +
            '-' +
            this.twoDigitFormat(time.day) +
            ' ' +
            this.twoDigitFormat(time.hour) +
            ':' +
            this.twoDigitFormat(time.minute));
    };
    LocationTimeInfoTableComponent.prototype.twoDigitFormat = function (number) {
        if (number <= 9) {
            return '0' + number;
        }
        else {
            return number;
        }
    };
    LocationTimeInfoTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-time-info-table',
            template: __webpack_require__("./src/app/shared/components/location-time-info-table/location-time-info-table.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/location-time-info-table/location-time-info-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_port_call_service__["a" /* PortCallService */]])
    ], LocationTimeInfoTableComponent);
    return LocationTimeInfoTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/organization-smart-table/organization-button-row/organization-button-row.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/organization-smart-table/organization-button-row/organization-button-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-table\">\r\n  <div class=\"d-table-row\">\r\n    <div class=\"d-table-cell pl-1\" ngbTooltip=\"Edit organization\">\r\n      <button class=\"btn btn-sm btn-ssn\" (click)=\"onEditClick()\">\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/edit.png\" height=\"20px\" />\r\n        </div>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/organization-smart-table/organization-button-row/organization-button-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationButtonRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_organization_service__ = __webpack_require__("./src/app/shared/services/organization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrganizationButtonRowComponent = /** @class */ (function () {
    function OrganizationButtonRowComponent(organizationService, contentService) {
        this.organizationService = organizationService;
        this.contentService = contentService;
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    OrganizationButtonRowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.organizationService.organizationData$.subscribe(function (results) {
            if (results) {
                _this.organizationData = results;
            }
        });
    };
    OrganizationButtonRowComponent.prototype.onEditClick = function () {
        this.setContent(__WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].REGISTER_ORGANIZATION);
    };
    OrganizationButtonRowComponent.prototype.setContent = function (content) {
        this.setOrganization(content);
    };
    OrganizationButtonRowComponent.prototype.setOrganization = function (content) {
        this.contentService.setLoadingScreen(true, 'pax.gif', 'Loading');
        this.organizationService.setOrganizationData(this.rowData.organizationModel);
        this.contentService.setContent(content);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], OrganizationButtonRowComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], OrganizationButtonRowComponent.prototype, "rowData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], OrganizationButtonRowComponent.prototype, "edit", void 0);
    OrganizationButtonRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-organization-button-row',
            template: __webpack_require__("./src/app/shared/components/organization-smart-table/organization-button-row/organization-button-row.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/organization-smart-table/organization-button-row/organization-button-row.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__["a" /* ConstantsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_shared_services_organization_service__["a" /* OrganizationService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_content_service__["a" /* ContentService */]])
    ], OrganizationButtonRowComponent);
    return OrganizationButtonRowComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/organization-smart-table/organization-smart-table.component.css":
/***/ (function(module, exports) {

module.exports = "/* Smart table */\r\n:root {\r\n    --color-primary: #002d50;\r\n    --color-primary-light: #37557c;\r\n    --color-primary-dark: #000128;\r\n    --color-primary-text: #ffffff;\r\n}\r\n:host /deep/ ng2-smart-table thead {\r\n    background-color: var(--color-primary);\r\n    color: white;\r\n}\r\n:host /deep/ .ng2-smart-filter input {\r\n    color: black;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort::after {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 4px solid white;\r\n    border-top: 4px solid transparent;\r\n    border-left: 4px solid transparent;\r\n    border-right: 4px solid transparent;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.asc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    margin-bottom: 2px;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.desc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    margin-bottom: -2px;\r\n}\r\n:host /deep/ ng2-smart-table a { \r\n    color:var(--color-primary-text); \r\n}\r\n:host /deep/ a.ng2-smart-page-link.page-link {  \r\n    color: var(--color-primary-dark);\r\n    border-color: #dee2e6;\r\n}\r\n:host /deep/ span.ng2-smart-page-link.page-link { \r\n    color: var(--color-primary-dark); \r\n    background-color: #dee2e6;\r\n    border-color: #dee2e6;        \r\n}"

/***/ }),

/***/ "./src/app/shared/components/organization-smart-table/organization-smart-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-3\">\r\n  <table class=\"table table-bordered text-center mx-auto mb-0\">\r\n    <thead class=\"bg-ssn text-white\">\r\n      <tr>\r\n        <th class=\"py-1\">\r\n          <h5 class=\"mb-0\">Organization search results</h5>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n  </table>\r\n  <div class=\"table-responsive\">\r\n    <ng2-smart-table [settings]=\"tableSettings\" [source]=\"dataSource\"></ng2-smart-table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/organization-smart-table/organization-smart-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationSmartTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_organization_service__ = __webpack_require__("./src/app/shared/services/organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__organization_button_row_organization_button_row_component__ = __webpack_require__("./src/app/shared/components/organization-smart-table/organization-button-row/organization-button-row.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizationSmartTableComponent = /** @class */ (function () {
    function OrganizationSmartTableComponent(organizationService) {
        this.organizationService = organizationService;
        this.tableData = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tableSettings = {
            mode: 'external',
            actions: false,
            attr: {
                class: 'table table-bordered'
            },
            noDataMessage: 'There are no organizations in this list.',
            columns: {
                name: {
                    title: 'Name',
                    type: 'html'
                },
                type: {
                    title: 'Type',
                    type: 'html'
                },
                organizationNumber: {
                    title: 'Organization Number',
                    type: 'html'
                },
                description: {
                    title: 'Description',
                    type: 'html'
                },
                actions: {
                    title: 'Actions',
                    type: 'custom',
                    filter: false,
                    sort: false,
                    renderComponent: __WEBPACK_IMPORTED_MODULE_3__organization_button_row_organization_button_row_component__["a" /* OrganizationButtonRowComponent */]
                }
            }
        };
    }
    OrganizationSmartTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.organizationSearchDataSubscription = this.organizationService.organizationSearchData$.subscribe(function (data) {
            if (data) {
                if (data.length !== 0) {
                    var rowList_1 = [];
                    data.forEach(function (organization) {
                        var row = _this.dataRow(organization);
                        rowList_1.push(row);
                    });
                    _this.tableData = rowList_1;
                }
            }
            _this.dataSource.load(_this.tableData);
        });
    };
    OrganizationSmartTableComponent.prototype.ngOnDestroy = function () {
        this.organizationSearchDataSubscription.unsubscribe();
    };
    OrganizationSmartTableComponent.prototype.dataRow = function (organization) {
        var row = {
            organizationModel: organization,
            name: organization.name,
            type: organization.organizationType.name,
            organizationNumber: organization.organizationNo || "<div class=\"font-italic\">Not provided.</div>",
            description: organization.description || "<div class=\"font-italic\">Not provided.</div>",
            actions: 'btn'
        };
        return row;
    };
    OrganizationSmartTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-organization-smart-table',
            template: __webpack_require__("./src/app/shared/components/organization-smart-table/organization-smart-table.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/organization-smart-table/organization-smart-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_organization_service__["a" /* OrganizationService */]])
    ], OrganizationSmartTableComponent);
    return OrganizationSmartTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/prev-and-next-poc-table/prev-and-next-poc-table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/prev-and-next-poc-table/prev-and-next-poc-table.component.html":
/***/ (function(module, exports) {

module.exports = "<app-table-card header=\"Previous Port of Call Information\" icon=\"location.png\">\r\n  <tbody>\r\n    <tr>\r\n      <td *ngFor=\"let entry of prevLocationTimeInfo\" class=\"no-wrap px-1 mx-1\">\r\n        <tr *ngIf=\"entry.data\">\r\n          <small>{{ entry.description }}:</small>\r\n        </tr>\r\n        <tr *ngIf=\"entry.data\">{{ entry.data }}</tr>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</app-table-card>\r\n\r\n<app-table-card header=\"Next Port of Call Information\" icon=\"location.png\">\r\n  <tbody>\r\n    <tr>\r\n      <td *ngFor=\"let entry of nextLocationTimeInfo\" class=\"no-wrap px-1 mx-1\">\r\n        <tr *ngIf=\"entry.data\">\r\n          <small>{{ entry.description }}:</small>\r\n        </tr>\r\n        <tr *ngIf=\"entry.data\">{{ entry.data }}</tr>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</app-table-card>"

/***/ }),

/***/ "./src/app/shared/components/prev-and-next-poc-table/prev-and-next-poc-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevAndNextPocTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_prev_and_next_poc_service__ = __webpack_require__("./src/app/shared/services/prev-and-next-poc.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_prev_location_time_properties__ = __webpack_require__("./src/app/shared/constants/prev-location-time-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_next_location_time_properties__ = __webpack_require__("./src/app/shared/constants/next-location-time-properties.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrevAndNextPocTableComponent = /** @class */ (function () {
    function PrevAndNextPocTableComponent(prevAndNextPocService) {
        this.prevAndNextPocService = prevAndNextPocService;
        this.PrevLocationTimeProperties = new __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_prev_location_time_properties__["a" /* PrevLocationTimeProperties */]();
        this.NextLocationTimeProperties = new __WEBPACK_IMPORTED_MODULE_3_app_shared_constants_next_location_time_properties__["a" /* NextLocationTimeProperties */]();
        this.prevLocationTimeInfo = [];
        this.nextLocationTimeInfo = [];
    }
    PrevAndNextPocTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prevLocationTimeProperties = this.PrevLocationTimeProperties.getProperties();
        this.nextLocationTimeProperties = this.NextLocationTimeProperties.getProperties();
        this.prevPortOfCallDataSubscription = this.prevAndNextPocService.prevPortOfCallData$.subscribe(function (prevPocResult) {
            if (prevPocResult) {
                _this.prevLocationTimeProperties.LOCATION_NAME.data = prevPocResult.name;
                _this.prevLocationTimeProperties.LOCATION_CODE.data = prevPocResult.locationCode;
                _this.prevAndNextPocService.prevPortOfCallEtdData$.subscribe(function (dateTimeResult) {
                    if (dateTimeResult) {
                        _this.prevLocationTimeProperties.ETD.data = _this.dateTimeFormat(dateTimeResult);
                    }
                });
            }
            else {
                _this.prevLocationTimeProperties = _this.PrevLocationTimeProperties.getProperties();
            }
            _this.prevLocationTimeInfo = Object.values(_this.prevLocationTimeProperties);
        });
        this.nextPortOfCallDataSubscription = this.prevAndNextPocService.nextPortOfCallData$.subscribe(function (nextPocResult) {
            if (nextPocResult) {
                _this.nextLocationTimeProperties.LOCATION_NAME.data = nextPocResult.name;
                _this.nextLocationTimeProperties.LOCATION_CODE.data = nextPocResult.locationCode;
                _this.prevAndNextPocService.nextPortOfCallEtaData$.subscribe(function (dateTimeResult) {
                    if (dateTimeResult) {
                        _this.nextLocationTimeProperties.ETA.data = _this.dateTimeFormat(dateTimeResult);
                    }
                });
            }
            else {
                _this.nextLocationTimeProperties = _this.NextLocationTimeProperties.getProperties();
            }
            _this.nextLocationTimeInfo = Object.values(_this.nextLocationTimeProperties);
        });
    };
    PrevAndNextPocTableComponent.prototype.ngOnDestroy = function () {
        this.prevPortOfCallDataSubscription.unsubscribe();
        this.nextPortOfCallDataSubscription.unsubscribe();
    };
    PrevAndNextPocTableComponent.prototype.dateTimeFormat = function (dateTime) {
        dateTime = new Date(dateTime);
        return (dateTime.getFullYear() +
            '-' +
            this.twoDigitFormat(dateTime.getMonth() + 1) +
            '-' +
            this.twoDigitFormat(dateTime.getDate()) +
            ' ' +
            this.twoDigitFormat(dateTime.getHours()) +
            ':' +
            this.twoDigitFormat(dateTime.getMinutes()));
    };
    PrevAndNextPocTableComponent.prototype.twoDigitFormat = function (number) {
        if (number <= 9) {
            return '0' + number;
        }
        else {
            return number;
        }
    };
    PrevAndNextPocTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prev-and-next-poc-table',
            template: __webpack_require__("./src/app/shared/components/prev-and-next-poc-table/prev-and-next-poc-table.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/prev-and-next-poc-table/prev-and-next-poc-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_prev_and_next_poc_service__["a" /* PrevAndNextPocService */]])
    ], PrevAndNextPocTableComponent);
    return PrevAndNextPocTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search-location/search-location.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/search-location/search-location.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #rt let-r=\"result\" let-t=\"term\">\r\n  <img src=\"assets/images/flags/128x128/{{r.country.twoCharCode.toLowerCase()}}.png\" height=\"16px\" />\r\n  <strong *ngIf=\"r.name\">Name: </strong> {{ r.name }}\r\n  <strong *ngIf=\"r.locationCode\">Code: </strong> {{ r.locationCode }}\r\n</ng-template>\r\n\r\n<div class=\"text-center\">\r\n  <label for=\"search-location\">Search using location name or UN/LOCODE code</label>\r\n  <div class=\"row\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8\">\r\n      <input id=\"search-location\" type=\"text\" class=\"form-control form-control-sm mx-auto\" [(ngModel)]=\"locationModel\" [ngbTypeahead]=\"search\"\r\n        [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" (selectItem)=\"selectLocation($event)\" placeholder=\"Enter search here...\"\r\n      />\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <div *ngIf=\"searching\">\r\n        <img class=\"mx-auto\" src=\"assets/images/animations/location.gif\" height=\"32px\">\r\n        <p>Searching</p>\r\n      </div>\r\n      <div *ngIf=\"searchFailed\">\r\n        <img class=\"mx-auto\" src=\"assets/images/icons/128x128/cancel.png\" height=\"32px\">\r\n        <p>No results</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/search-location/search-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_search_amounts__ = __webpack_require__("./src/app/shared/constants/search-amounts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_location_service__ = __webpack_require__("./src/app/shared/components/search-location/search-location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchLocationComponent = /** @class */ (function () {
    function SearchLocationComponent(locationSearchService) {
        var _this = this;
        this.locationSearchService = locationSearchService;
        this.showDropdown = true;
        this.restrictTypeHarbour = false;
        this.locationResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.locationSearchResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.resultsDropdown = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_search_amounts__["a" /* SEARCH_AMOUNTS */].DROPDOWN;
        this.resultsWithoutDropdown = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_search_amounts__["a" /* SEARCH_AMOUNTS */].WITHOUT_DROPDOWN_2;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */](function () { return function () {
            return (_this.searching = false);
        }; });
        this.search = function (text$) {
            return text$.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["debounceTime"])(150), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (term) {
                _this.searchFailed = false;
                _this.searching = (term.length >= 2);
            }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["switchMap"])(function (term) { return (_this.showDropdown) ?
                _this.locationSearchService.search(term, _this.restrictTypeHarbour, _this.resultsDropdown).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function () {
                    _this.searchFailed = false;
                }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])([]);
                })) : Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])([]); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["tap"])(function (res) {
                if (_this.showDropdown) {
                    _this.searching = false;
                    _this.searchFailed = _this.locationModel.length >= 2 && res.length === 0;
                }
                else {
                    _this.locationSearchService.search(_this.locationModel, _this.restrictTypeHarbour, _this.resultsWithoutDropdown).subscribe(function (data) {
                        _this.searchFailed = _this.locationModel.length >= 2 && data.length === 0;
                        _this.locationSearchResult.emit(data);
                        _this.searching = false;
                    });
                }
            }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["merge"])(_this.hideSearchingWhenUnsubscribed));
        };
        this.formatter = function (x) { return ''; };
        this.locationSelected = false;
    }
    SearchLocationComponent.prototype.ngOnInit = function () { };
    SearchLocationComponent.prototype.selectLocation = function ($event) {
        this.locationModel = $event.item;
        this.locationSelected = true;
        this.locationResult.emit(this.locationModel);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchLocationComponent.prototype, "showDropdown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchLocationComponent.prototype, "restrictTypeHarbour", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchLocationComponent.prototype, "locationResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchLocationComponent.prototype, "locationSearchResult", void 0);
    SearchLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-location',
            template: __webpack_require__("./src/app/shared/components/search-location/search-location.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/search-location/search-location.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__search_location_service__["a" /* SearchLocationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__search_location_service__["a" /* SearchLocationService */]])
    ], SearchLocationComponent);
    return SearchLocationComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search-location/search-location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_search_service__ = __webpack_require__("./src/app/shared/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchLocationService = /** @class */ (function () {
    function SearchLocationService(http) {
        this.http = http;
        this.searchService = new __WEBPACK_IMPORTED_MODULE_2_app_shared_services_search_service__["a" /* SearchService */](this.http);
        this.searchUrl = 'api/location/search';
        this.searchHarbourUrl = 'api/location/harbour/search';
    }
    SearchLocationService.prototype.search = function (term, restrictTypeHarbour, amount) {
        if (amount === void 0) { amount = 10; }
        if (term.length < 2) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of([]);
        }
        var uri = (restrictTypeHarbour) ? this.searchHarbourUrl : this.searchUrl;
        return this.searchService.search(uri, term, amount);
    };
    SearchLocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], SearchLocationService);
    return SearchLocationService;
}());



/***/ }),

/***/ "./src/app/shared/components/search-organization/search-organization.component.css":
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder { \r\n    font-style: italic; \r\n } \r\n :-moz-placeholder { \r\n    font-style: italic;   \r\n } \r\n ::-moz-placeholder { \r\n    font-style: italic;   \r\n } \r\n :-ms-input-placeholder {   \r\n    font-style: italic;  \r\n }"

/***/ }),

/***/ "./src/app/shared/components/search-organization/search-organization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n  <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n    <strong *ngIf=\"r.name\">Name: </strong> {{ r.name }}\r\n    <strong *ngIf=\"r.organizationNo\">Org.no.: </strong> {{ r.organizationNo }}\r\n  </ng-template>\r\n\r\n  <div class=\"text-center\">\r\n    <label for=\"search-organization\">Search using organization name or organization number</label>\r\n    <div class=\"row\">\r\n      <div class=\"col-2\"></div>\r\n      <div class=\"col-8\">\r\n        <div *ngIf=\"showDropdown\">\r\n          <input id=\"search-organization\" type=\"text\" class=\"form-control form-control-sm mx-auto\" [(ngModel)]=\"organizationModel\"\r\n            [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" (selectItem)=\"selectOrganization($event)\"\r\n            placeholder=\"Enter search here...\" />\r\n        </div>\r\n        <div *ngIf=\"!showDropdown\">\r\n          <input id=\"search-organization-no-dropdown\" type=\"text\" class=\"form-control form-control-sm mx-auto\" [(ngModel)]=\"organizationModel\"\r\n            [ngbTypeahead]=\"search\" placeholder=\"Enter search here...\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <div *ngIf=\"searching\">\r\n          <img class=\"mx-auto\" src=\"assets/images/animations/pax.gif\" height=\"32px\">\r\n          <p>Searching</p>\r\n        </div>\r\n        <div *ngIf=\"searchFailed\">\r\n          <img class=\"mx-auto\" src=\"assets/images/icons/128x128/cancel.png\" height=\"32px\">\r\n          <p>No results</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"organizationSelected\" class=\"text-center\">\r\n    <img class=\"mx-auto\" src=\"assets/images/animations/pax.gif\" height=\"32px\">\r\n    <p>Loading organization...</p>\r\n  </div>"

/***/ }),

/***/ "./src/app/shared/components/search-organization/search-organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOrganizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_search_amounts__ = __webpack_require__("./src/app/shared/constants/search-amounts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_organization_service__ = __webpack_require__("./src/app/shared/components/search-organization/search-organization.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchOrganizationComponent = /** @class */ (function () {
    function SearchOrganizationComponent(searchOrganizationService) {
        var _this = this;
        this.searchOrganizationService = searchOrganizationService;
        this.showDropdown = true;
        this.organizationResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.organizationSearchResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.resultsDropdown = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_search_amounts__["a" /* SEARCH_AMOUNTS */].DROPDOWN;
        this.resultsWithoutDropdown = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_search_amounts__["a" /* SEARCH_AMOUNTS */].WITHOUT_DROPDOWN;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */](function () { return function () {
            return (_this.searching = false);
        }; });
        this.search = function (text$) {
            return text$.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["debounceTime"])(150), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["tap"])(function (term) {
                _this.searchFailed = false;
                _this.searching = (term.length >= 2);
            }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["switchMap"])(function (term) { return (_this.showDropdown) ?
                _this.searchOrganizationService.search(term, _this.resultsDropdown).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["tap"])(function () {
                    _this.searchFailed = false;
                }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["a" /* of */])([]);
                })) : Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["a" /* of */])([]); }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["tap"])(function (res) {
                if (_this.showDropdown) {
                    _this.searching = false;
                    _this.searchFailed = _this.organizationModel.length >= 2 && res.length === 0;
                }
                else {
                    _this.searchOrganizationService.search(_this.organizationModel, _this.resultsWithoutDropdown).subscribe(function (data) {
                        _this.searchFailed = _this.organizationModel.length >= 2 && data.length === 0;
                        _this.organizationSearchResult.emit(data);
                        _this.searching = false;
                    });
                }
            }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["merge"])(_this.hideSearchingWhenUnsubscribed));
        };
        this.formatter = function (x) { return x.organizationId; };
    }
    SearchOrganizationComponent.prototype.ngOnInit = function () {
        this.organizationSelected = false;
    };
    SearchOrganizationComponent.prototype.selectOrganization = function ($event) {
        this.organizationSelected = true;
        this.organizationModel = $event.item;
        this.organizationResult.emit(this.organizationModel);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchOrganizationComponent.prototype, "showDropdown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchOrganizationComponent.prototype, "organizationResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchOrganizationComponent.prototype, "organizationSearchResult", void 0);
    SearchOrganizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-organization',
            template: __webpack_require__("./src/app/shared/components/search-organization/search-organization.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/search-organization/search-organization.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_8__search_organization_service__["a" /* SearchOrganizationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__search_organization_service__["a" /* SearchOrganizationService */]])
    ], SearchOrganizationComponent);
    return SearchOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search-organization/search-organization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOrganizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_search_service__ = __webpack_require__("./src/app/shared/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchOrganizationService = /** @class */ (function () {
    function SearchOrganizationService(http) {
        this.http = http;
        this.searchService = new __WEBPACK_IMPORTED_MODULE_2_app_shared_services_search_service__["a" /* SearchService */](this.http);
        this.searchUrl = 'api/organization/search';
        this.organizationUrl = 'api/organization';
    }
    SearchOrganizationService.prototype.search = function (term, amount) {
        if (amount === void 0) { amount = 10; }
        if (term.length < 2) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of([]);
        }
        return this.searchService.search(this.searchUrl, term, amount);
    };
    SearchOrganizationService.prototype.getorganization = function (id) {
        var uri = [this.organizationUrl, id].join('/');
        return this.http.get(uri)
            .map(function (res) { return res.json(); });
    };
    SearchOrganizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], SearchOrganizationService);
    return SearchOrganizationService;
}());



/***/ }),

/***/ "./src/app/shared/components/search-ship-flag-code/search-ship-flag-code.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/search-ship-flag-code/search-ship-flag-code.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #rt let-r=\"result\" let-t=\"term\">\r\n  <img *ngIf=\"r.country.twoCharCode\" src=\"assets/images/flags/{{ r.country.twoCharCode | lowercase }}.png\" height=\"16px\" />\r\n  <strong *ngIf=\"r.name\">Code: </strong> {{ r.name }}\r\n  <strong *ngIf=\"r.country.name\">Country: </strong> {{ r.country.name }}\r\n</ng-template>\r\n\r\n<div class=\"text-center\">\r\n  <label for=\"search-shipFlagCode\">Search using flag code or name of country</label>\r\n  <div class=\"row\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8\">\r\n      <input id=\"search-shipFlagCode\" type=\"text\" class=\"form-control form-control-sm mx-auto\" [(ngModel)]=\"shipFlagCodeModel\"\r\n        [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" (selectItem)=\"selectShipFlagCode($event)\"\r\n        placeholder=\"Enter search here...\" />\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <div *ngIf=\"searching\">\r\n        <img class=\"mx-auto\" src=\"assets/images/animations/flag.gif\" height=\"32px\">\r\n        <p>Searching</p>\r\n      </div>\r\n      <div *ngIf=\"searchFailed\">\r\n        <img class=\"mx-auto\" src=\"assets/images/icons/128x128/cancel.png\" height=\"32px\">\r\n        <p>No results</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/search-ship-flag-code/search-ship-flag-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchShipFlagCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_search_amounts__ = __webpack_require__("./src/app/shared/constants/search-amounts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_ship_flag_code_service__ = __webpack_require__("./src/app/shared/components/search-ship-flag-code/search-ship-flag-code.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchShipFlagCodeComponent = /** @class */ (function () {
    function SearchShipFlagCodeComponent(searchShipFlagCodeService) {
        var _this = this;
        this.searchShipFlagCodeService = searchShipFlagCodeService;
        this.shipFlagCodeResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.resultsDropdown = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_search_amounts__["a" /* SEARCH_AMOUNTS */].DROPDOWN;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */](function () { return function () {
            return (_this.searching = false);
        }; });
        this.search = function (text$) {
            return text$.pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["debounceTime"])(50), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["tap"])(function (term) {
                _this.searchFailed = false;
                _this.searching = (term.length >= 1);
            }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["switchMap"])(function (term) {
                return _this.searchShipFlagCodeService.search(term, _this.resultsDropdown).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["tap"])(function () { return _this.searchFailed = false; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["a" /* of */])([]);
                }));
            }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["tap"])(function (res) {
                _this.searching = false;
                _this.searchFailed = (_this.shipFlagCodeModel.length >= 1 && res.length === 0);
            }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["merge"])(_this.hideSearchingWhenUnsubscribed));
        };
        this.formatter = function (x) { return ''; };
        this.shipFlagCodeSelected = false;
    }
    SearchShipFlagCodeComponent.prototype.ngOnInit = function () { };
    SearchShipFlagCodeComponent.prototype.selectShipFlagCode = function ($event) {
        this.shipFlagCodeModel = $event.item;
        this.shipFlagCodeSelected = true;
        this.shipFlagCodeResult.emit(this.shipFlagCodeModel);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchShipFlagCodeComponent.prototype, "shipFlagCodeResult", void 0);
    SearchShipFlagCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-ship-flag-code',
            template: __webpack_require__("./src/app/shared/components/search-ship-flag-code/search-ship-flag-code.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/search-ship-flag-code/search-ship-flag-code.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_8__search_ship_flag_code_service__["a" /* SearchShipFlagCodeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__search_ship_flag_code_service__["a" /* SearchShipFlagCodeService */]])
    ], SearchShipFlagCodeComponent);
    return SearchShipFlagCodeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search-ship-flag-code/search-ship-flag-code.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchShipFlagCodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_search_service__ = __webpack_require__("./src/app/shared/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchShipFlagCodeService = /** @class */ (function () {
    function SearchShipFlagCodeService(http) {
        this.http = http;
        this.searchService = new __WEBPACK_IMPORTED_MODULE_3_app_shared_services_search_service__["a" /* SearchService */](http);
        this.searchUrl = 'api/shipflagcode/search';
    }
    SearchShipFlagCodeService.prototype.search = function (term, amount) {
        if (amount === void 0) { amount = 10; }
        if (term.length < 2) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of([]);
        }
        return this.searchService.search(this.searchUrl, term, amount);
    };
    SearchShipFlagCodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], SearchShipFlagCodeService);
    return SearchShipFlagCodeService;
}());



/***/ }),

/***/ "./src/app/shared/components/search-ship/search-ship.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/search-ship/search-ship.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #rt let-r=\"result\" let-t=\"term\">\r\n  <img src=\"assets/images/flags/128x128/{{r.shipFlagCode.country.twoCharCode.toLowerCase()}}.png\" height=\"16px\" />\r\n  <strong *ngIf=\"r.name\">Name: </strong> {{ r.name }}\r\n  <strong *ngIf=\"r.callSign\"> Call sign: </strong> {{ r.callSign }}\r\n  <strong *ngIf=\"r.imoNo\"> IMO number: </strong> {{ r.imoNo }}\r\n  <strong *ngIf=\"r.mmsiNo\"> MMSI number: </strong> {{ r.mmsiNo }}\r\n</ng-template>\r\n\r\n<div class=\"text-center\">\r\n  <label for=\"search-ship\">Search using ship name, call sign, IMO number or MMSI number</label>\r\n  <div class=\"row\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8\">\r\n      <div *ngIf=\"showDropdown\">\r\n        <input id=\"search-ship\" type=\"text\" class=\"form-control form-control-sm mx-auto\" [(ngModel)]=\"shipModel\" [ngbTypeahead]=\"search\"\r\n          [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" (selectItem)=\"selectShip($event)\" placeholder=\"Enter search here...\"\r\n        />\r\n      </div>\r\n      <div *ngIf=\"!showDropdown\">\r\n        <input id=\"search-ship-no-dropdown\" type=\"text\" class=\"form-control form-control-sm mx-auto\" [(ngModel)]=\"shipModel\" [ngbTypeahead]=\"search\"\r\n          placeholder=\"Enter search here...\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <div *ngIf=\"searching\">\r\n        <img class=\"mx-auto\" src=\"assets/images/animations/ship.gif\" height=\"32px\">\r\n        <p>Searching</p>\r\n      </div>\r\n      <div *ngIf=\"searchFailed\">\r\n        <img class=\"mx-auto\" src=\"assets/images/icons/128x128/cancel.png\" height=\"32px\">\r\n        <p>No results</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"shipSelected\" class=\"text-center\">\r\n  <img class=\"mx-auto\" src=\"assets/images/animations/ship.gif\" height=\"32px\">\r\n  <p>Loading ship...</p>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/search-ship/search-ship.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchShipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_search_amounts__ = __webpack_require__("./src/app/shared/constants/search-amounts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_ship_service__ = __webpack_require__("./src/app/shared/components/search-ship/search-ship.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchShipComponent = /** @class */ (function () {
    function SearchShipComponent(searchShipService) {
        var _this = this;
        this.searchShipService = searchShipService;
        this.showDropdown = true;
        this.shipResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.shipSearchResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.resultsDropdown = __WEBPACK_IMPORTED_MODULE_4__constants_search_amounts__["a" /* SEARCH_AMOUNTS */].DROPDOWN;
        this.resultsWithoutDropdown = __WEBPACK_IMPORTED_MODULE_4__constants_search_amounts__["a" /* SEARCH_AMOUNTS */].WITHOUT_DROPDOWN;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function () { return function () {
            return (_this.searching = false);
        }; });
        this.search = function (text$) {
            return text$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(150), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["distinctUntilChanged"])(), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (term) {
                _this.searchFailed = false;
                _this.searching = (term.length >= 2);
            }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["switchMap"])(function (term) { return (_this.showDropdown) ?
                _this.searchShipService.search(term, _this.resultsDropdown).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function () {
                    _this.searchFailed = false;
                }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(function () {
                    _this.searchFailed = true;
                    return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]);
                })) : Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["tap"])(function (res) {
                if (_this.showDropdown) {
                    _this.searching = false;
                    _this.searchFailed = _this.shipModel.length >= 2 && res.length === 0;
                }
                else {
                    _this.searchShipService.search(_this.shipModel, _this.resultsWithoutDropdown).subscribe(function (data) {
                        _this.searchFailed = _this.shipModel.length >= 2 && data.length === 0;
                        _this.shipSearchResult.emit(data);
                        _this.searching = false;
                    });
                }
            }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["merge"])(_this.hideSearchingWhenUnsubscribed));
        };
        this.formatter = function (x) { return x.shipId; };
    }
    SearchShipComponent.prototype.ngOnInit = function () {
        this.shipSelected = false;
    };
    SearchShipComponent.prototype.selectShip = function ($event) {
        var _this = this;
        this.shipSelected = true;
        this.shipModel = $event.item;
        this.searchShipService.getShip($event.item.shipId).subscribe(function (result) {
            if (result) {
                _this.shipResult.emit(result);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchShipComponent.prototype, "showDropdown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchShipComponent.prototype, "shipResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchShipComponent.prototype, "shipSearchResult", void 0);
    SearchShipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-ship',
            template: __webpack_require__("./src/app/shared/components/search-ship/search-ship.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/search-ship/search-ship.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__search_ship_service__["a" /* SearchShipService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__search_ship_service__["a" /* SearchShipService */]])
    ], SearchShipComponent);
    return SearchShipComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/search-ship/search-ship.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchShipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_search_service__ = __webpack_require__("./src/app/shared/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchShipService = /** @class */ (function () {
    function SearchShipService(http) {
        this.http = http;
        this.searchService = new __WEBPACK_IMPORTED_MODULE_2_app_shared_services_search_service__["a" /* SearchService */](this.http);
        this.searchUrl = 'api/ship/search';
        this.shipUrl = 'api/ship';
    }
    SearchShipService.prototype.search = function (term, amount) {
        if (amount === void 0) { amount = 10; }
        if (term.length < 2) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of([]);
        }
        return this.searchService.search(this.searchUrl, term, amount);
    };
    SearchShipService.prototype.getShip = function (id) {
        var uri = [this.shipUrl, id].join('/');
        return this.http.get(uri)
            .map(function (res) { return res.json(); });
    };
    SearchShipService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], SearchShipService);
    return SearchShipService;
}());



/***/ }),

/***/ "./src/app/shared/components/select-ship-contact/select-ship-contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/select-ship-contact/select-ship-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ssn-card header=\"Contact Information\" icon=\"contact.png\">\r\n  <div class=\"text-center\">\r\n    <label for=\"contact_info\">Select contact information</label>\r\n  </div>\r\n  <ng-select id=\"contact_info\" [items]=\"contactList\" [multiple]=\"true\" [closeOnSelect]=\"true\" bindLabel=\"contactMedium.contactMediumType\"\r\n    placeholder=\"Select contact mediums\" [ngModel]=\"selectedContactModelList\" (add)=\"onAdd($event)\" (remove)=\"onRemove($event)\"></ng-select>\r\n\r\n  <div *ngFor=\"let contactModel of selectedContactModelList; let i = index\" class=\"form-group row mt-3\">\r\n    <div class=\"col\">\r\n\r\n      <div class=\"input-group input-group-sm\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text bg-ssn text-white\">{{ contactModel.contactMedium.contactMediumType }}</span>\r\n        </div>\r\n\r\n        <input id=\"contact_value\" name=\"contactValue\" type=\"text\" class=\"form-control form-control-sm\" placeholder=\"Enter {{ contactModel.contactMedium.contactMediumType }}\"\r\n          [(ngModel)]=\"selectedContactModelList[i].contactValue\" (ngModelChange)=\"contactInfoChanged()\" />\r\n\r\n        <div class=\"input-group-append\">\r\n          <div class=\"input-group-text bg-ssn text-white\">\r\n            <input type=\"radio\" id=\"{{ i }}\" name=\"preferredRadios\" [value]=\"true\" [(ngModel)]=\"selectedContactModelList[i].isPreferred\"\r\n              (ngModelChange)=\"preferredSet(selectedContactModelList[i])\" [checked]=\"selectedContactModelList[i].isPreferred\">\r\n            <label class=\"form-check-label\" for=\"{{ i }}\">Preferred</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-ssn-card>"

/***/ }),

/***/ "./src/app/shared/components/select-ship-contact/select-ship-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectShipContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_models_ship_contact_model__ = __webpack_require__("./src/app/shared/models/ship-contact-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectShipContactComponent = /** @class */ (function () {
    function SelectShipContactComponent(constantsService) {
        this.constantsService = constantsService;
        this.contactModelListResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    SelectShipContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getContactMediumListSubscription = this.constantsService.getContactMediumList().subscribe(function (data) {
            if (data) {
                _this.contactList = data.map(function (cm) {
                    var contact = new __WEBPACK_IMPORTED_MODULE_1_app_shared_models_ship_contact_model__["a" /* ShipContactModel */]();
                    contact.contactMediumId = cm.contactMediumId;
                    contact.contactMedium = cm;
                    return contact;
                });
            }
        });
        if (this.selectedContactModelList === undefined) {
            this.selectedContactModelList = [];
        }
    };
    SelectShipContactComponent.prototype.ngOnDestroy = function () {
        this.getContactMediumListSubscription.unsubscribe();
    };
    SelectShipContactComponent.prototype.contactInfoChanged = function () {
        this.contactModelListResult.emit(this.selectedContactModelList);
    };
    SelectShipContactComponent.prototype.onAdd = function ($event) {
        console.log(this.selectedContactModelList);
        this.selectedContactModelList.push($event);
        this.contactModelListResult.emit(this.selectedContactModelList);
    };
    SelectShipContactComponent.prototype.onRemove = function ($event) {
        var index = this.selectedContactModelList.findIndex(function (item, i) { return item.contactMediumId === $event.value.contactMediumId; });
        if (index !== -1) {
            this.selectedContactModelList.splice(index, 1);
            this.contactModelListResult.emit(this.selectedContactModelList);
        }
        else {
            console.error('Selected contact medium could not be found.');
        }
    };
    SelectShipContactComponent.prototype.preferredSet = function (selectedContactModel) {
        var updatedContactModelList = this.selectedContactModelList.map(function (contactModel) {
            if (contactModel.contactMediumId === selectedContactModel.contactMediumId) {
                return selectedContactModel;
            }
            var notPreferredContactModel = contactModel;
            notPreferredContactModel.isPreferred = false;
            return notPreferredContactModel;
        });
        this.contactModelListResult.emit(updatedContactModelList);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectShipContactComponent.prototype, "selectedContactModelList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], SelectShipContactComponent.prototype, "contactModelListResult", void 0);
    SelectShipContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-select-ship-contact',
            template: __webpack_require__("./src/app/shared/components/select-ship-contact/select-ship-contact.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/select-ship-contact/select-ship-contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__["a" /* ConstantsService */]])
    ], SelectShipContactComponent);
    return SelectShipContactComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/selected-contact-mediums/selected-contact-mediums.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/selected-contact-mediums/selected-contact-mediums.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr class=\"bg-ssn text-ssn\">\r\n        <th colspan=3>Selected Contact Mediums</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"text-left\">\r\n      <tr *ngFor=\"let contactModel of selectedContactModelList\">\r\n        <td class=\"bg-ssn text-ssn\">{{ contactModel.contactMedium.contactMediumType }}</td>\r\n        <td [attr.colspan]=\"!contactModel.isPreferred ? 2 : null\">{{ contactModel.contactValue ? contactModel.contactValue : 'Value not set' }}</td>\r\n        <td *ngIf=\"contactModel.isPreferred\">Preferred</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/selected-contact-mediums/selected-contact-mediums.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedContactMediumsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectedContactMediumsComponent = /** @class */ (function () {
    function SelectedContactMediumsComponent() {
    }
    SelectedContactMediumsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectedContactMediumsComponent.prototype, "selectedContactModelList", void 0);
    SelectedContactMediumsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-selected-contact-mediums',
            template: __webpack_require__("./src/app/shared/components/selected-contact-mediums/selected-contact-mediums.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/selected-contact-mediums/selected-contact-mediums.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectedContactMediumsComponent);
    return SelectedContactMediumsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/ship-info-table/ship-info-table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/ship-info-table/ship-info-table.component.html":
/***/ (function(module, exports) {

module.exports = "<app-table-card header=\"Ship Information\" icon=\"ship.png\">\r\n  <tbody>\r\n    <tr>\r\n      <td>\r\n        <img *ngIf=\"shipFlag\" src=\"assets/images/flags/128x128/{{shipFlag | lowercase}}.png\" class=\"my-2\" height=\"32px\">\r\n      </td>\r\n      <td *ngFor=\"let entry of shipInfo\" class=\"no-wrap px-1 mx-1\">\r\n        <tr>\r\n          <small>{{ entry.description }}:</small>\r\n        </tr>\r\n        <tr *ngIf=\"entry.data\">{{ entry.data }}</tr>\r\n        <tr *ngIf=\"!entry.data\">\r\n          <div class=\"font-italic\">Not provided.</div>\r\n        </tr>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</app-table-card>\r\n<app-table-card header=\"Ship Contact Information\" icon=\"contact.png\" collapsible=true collapsed=true>\r\n  <tbody *ngIf=\"shipHasContactInfo\">\r\n    <tr>\r\n      <td *ngFor=\"let entry of shipContactInfo\" class=\"no-wrap px-1 mx-1\">\r\n        <tr>\r\n          <small>{{ entry.description }}:\r\n            <span *ngIf=\"entry.isPreferred\"> (preferred)</span>\r\n          </small>\r\n        </tr>\r\n        <tr>{{ entry.data }}</tr>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n  <tbody class=\"text-center\" *ngIf=\"!shipHasContactInfo\">\r\n    <div class=\"my-3\">\r\n      <img src=\"assets/images/icons/128x128/white/warning.png\" height=\"24px\">\r\n      <span>No contact information for this ship has been provided.</span>\r\n    </div>\r\n  </tbody>\r\n</app-table-card>"

/***/ }),

/***/ "./src/app/shared/components/ship-info-table/ship-info-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipInfoTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__ = __webpack_require__("./src/app/shared/constants/ship-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShipInfoTableComponent = /** @class */ (function () {
    function ShipInfoTableComponent(shipService, constantsService) {
        this.shipService = shipService;
        this.constantsService = constantsService;
        this.shipContactInfo = [];
        this.shipProperties = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].PROPERTIES;
    }
    ShipInfoTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shipHasContactInfo = false;
        this.shipOverviewDataSubscription = this.shipService.shipOverviewData$.subscribe(function (shipResult) {
            if (shipResult) {
                if (shipResult.shipFlagCode.country) {
                    _this.shipFlag = shipResult.shipFlagCode.country.twoCharCode.toLowerCase();
                }
                if (shipResult.shipType) {
                    _this.shipProperties.SHIP_TYPE.data = shipResult.shipType.name;
                }
                if (shipResult.shipStatus) {
                    _this.shipProperties.SHIP_STATUS.data = shipResult.shipStatus.name;
                }
                _this.shipProperties.SHIP_NAME.data = shipResult.name;
                _this.shipProperties.CALL_SIGN.data = shipResult.callSign;
                _this.shipProperties.IMO_NO.data = shipResult.imoNo;
                _this.shipProperties.MMSI_NO.data = shipResult.mmsiNo;
                _this.shipProperties.GROSS_TONNAGE.data = shipResult.grossTonnage;
                _this.shipProperties.LENGTH.data = shipResult.length;
                _this.constantsService.getContactMediumList().subscribe(function (contactResult) {
                    if (contactResult) {
                        _this.contactMediumList = contactResult;
                        if (contactResult && shipResult.shipContact != null && shipResult.shipContact.length > 0) {
                            _this.shipHasContactInfo = true;
                            _this.contactMediumList.forEach(function (contactMedium) {
                                var value = shipResult.shipContact.find(function (shipCM) { return shipCM.contactMediumId === contactMedium.contactMediumId; });
                                if (value && (_this.shipContactInfo.find(function (sc) { return sc.description === (contactMedium.contactMediumType); }) == null)) {
                                    _this.shipContactInfo.push({
                                        description: contactMedium.contactMediumType,
                                        data: value.contactValue,
                                        isPreferred: value.isPreferred
                                    });
                                }
                            });
                        }
                    }
                });
            }
            else {
                _this.shipFlag = null;
                _this.shipProperties = __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_ship_properties__["a" /* ShipProperties */].PROPERTIES;
            }
            _this.shipInfo = Object.values(_this.shipProperties);
        });
    };
    ShipInfoTableComponent.prototype.ngOnDestroy = function () {
        this.shipOverviewDataSubscription.unsubscribe();
    };
    ShipInfoTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ship-info-table',
            template: __webpack_require__("./src/app/shared/components/ship-info-table/ship-info-table.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/ship-info-table/ship-info-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_ship_service__["a" /* ShipService */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_constants_service__["a" /* ConstantsService */]])
    ], ShipInfoTableComponent);
    return ShipInfoTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/ship-smart-table/ship-button-row/ship-button-row.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/ship-smart-table/ship-button-row/ship-button-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-table\">\r\n  <div class=\"d-table-row\">\r\n    <div class=\"d-table-cell pl-1\" ngbTooltip=\"Edit ship\">\r\n      <button class=\"btn btn-sm btn-ssn\" (click)=\"onEditClick()\">\r\n        <div class=\"mx-auto\">\r\n          <img src=\"assets/images/icons/128x128/white/edit.png\" height=\"20px\" />\r\n        </div>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/ship-smart-table/ship-button-row/ship-button-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipButtonRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShipButtonRowComponent = /** @class */ (function () {
    function ShipButtonRowComponent(shipService, contentService) {
        this.shipService = shipService;
        this.contentService = contentService;
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ShipButtonRowComponent.prototype.ngOnInit = function () { };
    ShipButtonRowComponent.prototype.onEditClick = function () {
        this.setContent(__WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].REGISTER_SHIP);
    };
    ShipButtonRowComponent.prototype.setContent = function (content) {
        this.setShip(content);
    };
    ShipButtonRowComponent.prototype.setShip = function (content) {
        var _this = this;
        this.contentService.setLoadingScreen(true, 'ship.gif', 'Loading');
        this.shipService.getShip(this.rowData.shipModel.shipId).subscribe(function (data) {
            if (data) {
                _this.shipService.setShipOverviewData(data);
                _this.contentService.setContent(content);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShipButtonRowComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ShipButtonRowComponent.prototype, "rowData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ShipButtonRowComponent.prototype, "edit", void 0);
    ShipButtonRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ship-button-row',
            template: __webpack_require__("./src/app/shared/components/ship-smart-table/ship-button-row/ship-button-row.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/ship-smart-table/ship-button-row/ship-button-row.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_shared_services_ship_service__["a" /* ShipService */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_content_service__["a" /* ContentService */]])
    ], ShipButtonRowComponent);
    return ShipButtonRowComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/ship-smart-table/ship-smart-table.component.css":
/***/ (function(module, exports) {

module.exports = "/* Smart table */\r\n:root {\r\n    --color-primary: #002d50;\r\n    --color-primary-light: #37557c;\r\n    --color-primary-dark: #000128;\r\n    --color-primary-text: #ffffff;\r\n}\r\n:host /deep/ ng2-smart-table thead {\r\n    background-color: var(--color-primary);\r\n    color: white;\r\n}\r\n:host /deep/ .ng2-smart-filter input {\r\n    color: black;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort::after {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 4px solid white;\r\n    border-top: 4px solid transparent;\r\n    border-left: 4px solid transparent;\r\n    border-right: 4px solid transparent;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.asc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    margin-bottom: 2px;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.desc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    margin-bottom: -2px;\r\n}\r\n:host /deep/ ng2-smart-table a { \r\n    color:var(--color-primary-text); \r\n}\r\n:host /deep/ a.ng2-smart-page-link.page-link {  \r\n    color: var(--color-primary-dark);\r\n    border-color: #dee2e6;\r\n}\r\n:host /deep/ span.ng2-smart-page-link.page-link { \r\n    color: var(--color-primary-dark); \r\n    background-color: #dee2e6;\r\n    border-color: #dee2e6;        \r\n}"

/***/ }),

/***/ "./src/app/shared/components/ship-smart-table/ship-smart-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-3\">\r\n  <table class=\"table table-bordered text-center mx-auto mb-0\">\r\n    <thead class=\"bg-ssn text-white\">\r\n      <tr>\r\n        <th class=\"py-1\">\r\n          <h5 class=\"mb-0\">Ship search results</h5>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n  </table>\r\n  <div class=\"table-responsive\">\r\n    <ng2-smart-table [settings]=\"tableSettings\" [source]=\"dataSource\"></ng2-smart-table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/ship-smart-table/ship-smart-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipSmartTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ship_button_row_ship_button_row_component__ = __webpack_require__("./src/app/shared/components/ship-smart-table/ship-button-row/ship-button-row.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShipSmartTableComponent = /** @class */ (function () {
    function ShipSmartTableComponent(shipService) {
        this.shipService = shipService;
        this.tableData = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */]();
        this.tableSettings = {
            mode: 'external',
            actions: false,
            attr: {
                class: 'table table-bordered'
            },
            noDataMessage: 'There are no ships in this list.',
            columns: {
                country: {
                    title: 'Country',
                    type: 'html'
                },
                name: {
                    title: 'Name',
                    type: 'html'
                },
                callSign: {
                    title: 'Call Sign',
                    type: 'html'
                },
                actions: {
                    title: 'Actions',
                    type: 'custom',
                    filter: false,
                    sort: false,
                    renderComponent: __WEBPACK_IMPORTED_MODULE_3__ship_button_row_ship_button_row_component__["a" /* ShipButtonRowComponent */]
                }
            }
        };
    }
    ShipSmartTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shipSearchDataSubscription = this.shipService.shipSearchData$.subscribe(function (data) {
            if (data) {
                if (data.length !== 0) {
                    var rowList_1 = [];
                    data.forEach(function (ship) {
                        var row = _this.dataRow(ship);
                        rowList_1.push(row);
                    });
                    _this.tableData = rowList_1;
                }
            }
            _this.dataSource.load(_this.tableData);
        });
    };
    ShipSmartTableComponent.prototype.ngOnDestroy = function () {
        this.shipSearchDataSubscription.unsubscribe();
    };
    ShipSmartTableComponent.prototype.dataRow = function (ship) {
        var row = {
            shipModel: ship,
            country: "<div class=\"no-wrap\"><div hidden>" +
                ship.shipFlagCode.country.name + // ugly fix for alphabetical sorting but it works
                "</div> <div> <img src='assets/images/flags/128x128/" +
                ship.shipFlagCode.country.twoCharCode.toLowerCase() +
                ".png' height='20px'/> " +
                ship.shipFlagCode.country.name +
                "</div></div>",
            name: ship.name,
            callSign: ship.callSign,
            actions: 'btn'
        };
        return row;
    };
    ShipSmartTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ship-smart-table',
            template: __webpack_require__("./src/app/shared/components/ship-smart-table/ship-smart-table.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/ship-smart-table/ship-smart-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_shared_services_ship_service__["a" /* ShipService */]])
    ], ShipSmartTableComponent);
    return ShipSmartTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/ssn-bg/ssn-bg.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/ssn-bg/ssn-bg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-ssn-light p-3\">\r\n\r\n  <div class=\"d-table-row\">\r\n    <div class=\"d-table-cell\" *ngIf=\"icon\">\r\n      <img src=\"{{iconPath}}{{icon}}\" class=\"mb-2\" height=\"32px\">\r\n    </div>\r\n    <div class=\"d-table-cell pl-2\">\r\n      <h3 class=\"text-ssn mb-0\">{{ header }}</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/ssn-bg/ssn-bg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsnBgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SsnBgComponent = /** @class */ (function () {
    function SsnBgComponent() {
        this.iconPath = 'assets/images/icons/128x128/white/';
    }
    SsnBgComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SsnBgComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SsnBgComponent.prototype, "header", void 0);
    SsnBgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ssn-bg',
            template: __webpack_require__("./src/app/shared/components/ssn-bg/ssn-bg.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/ssn-bg/ssn-bg.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SsnBgComponent);
    return SsnBgComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/ssn-card/ssn-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/ssn-card/ssn-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card ssn-card my-2\">\r\n  <div class=\"card-header bg-ssn text-ssn text-left d-table py-1\">\r\n    <div class=\"d-table-row text-white px-4\" [ngClass]=\"{clickable: collapsible}\" (click)=\"collapsible ? changeState() : null\">\r\n\r\n      <div class=\"d-table-cell pt-1\">\r\n        <h5 class=\"mb-0 text-vertical-align\"><img *ngIf=\"icon\" src=\"{{iconPath}}{{icon}}\" height=\"24px\" /> {{ header }}</h5>\r\n      </div>\r\n      <div class=\"d-table-cell pb-0 text-right\">\r\n        <button *ngIf=\"collapsible\" class=\"btn btn-sm btn-outline-light\" (mouseover)=\"collapsedIconColor=''\" (mouseout)=\"collapsedIconColor='white/'\">\r\n          <img src=\"{{collapsedIconPath}}{{collapsedIconColor}}{{collapsedIcon}}\" height=\"16px\">\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body p-2\" *ngIf=\"!collapsed\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/ssn-card/ssn-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsnCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SsnCardComponent = /** @class */ (function () {
    function SsnCardComponent() {
        this.iconPath = 'assets/images/icons/128x128/white/';
        this.collapsedIconPath = 'assets/images/icons/128x128/';
        this.collapsedIconColor = 'white/';
    }
    SsnCardComponent.prototype.ngOnInit = function () {
        if (this.collapsed == null) {
            this.collapsed = false;
        }
        this.collapsedIcon = this.collapsed
            ? 'arrowhead-left.png'
            : 'arrowhead-down.png';
    };
    SsnCardComponent.prototype.changeState = function () {
        this.collapsed = !this.collapsed;
        this.collapsedIcon = this.collapsed
            ? 'arrowhead-left.png'
            : 'arrowhead-down.png';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SsnCardComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SsnCardComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SsnCardComponent.prototype, "collapsible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SsnCardComponent.prototype, "collapsed", void 0);
    SsnCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ssn-card',
            template: __webpack_require__("./src/app/shared/components/ssn-card/ssn-card.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/ssn-card/ssn-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SsnCardComponent);
    return SsnCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/ssn-table/ssn-table.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/ssn-table/ssn-table.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\r\n  <thead>\r\n    <tr>\r\n      <th *ngFor=\"let entry of entryData\" class=\"bg-ssn text-ssn no-wrap p-1\">\r\n        <span>{{ entry.description }}</span>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td *ngFor=\"let entry of entryData\" class=\"p-1\">\r\n        <img *ngIf=\"entry.imageUrl\" src=\"{{ entry.imageUrl }}\" height=\"24px\" />\r\n        <span>{{ entry.data }}</span>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/shared/components/ssn-table/ssn-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsnTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SsnTableComponent = /** @class */ (function () {
    function SsnTableComponent() {
    }
    SsnTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], SsnTableComponent.prototype, "entryData", void 0);
    SsnTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ssn-table',
            template: __webpack_require__("./src/app/shared/components/ssn-table/ssn-table.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/ssn-table/ssn-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SsnTableComponent);
    return SsnTableComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/table-card/table-card.component.css":
/***/ (function(module, exports) {

module.exports = ".table-card-header-bg {\r\n    background-color: #344d6e;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/table-card/table-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border border-white table-card-header-bg p-1\">\r\n  <div class=\"row text-center text-white px-4\" [ngClass]=\"{clickable: collapsible}\" (click)=\"collapsible ? changeState() : null\">\r\n    <div class=\"d-table-cell mr-auto\">\r\n      <img *ngIf=\"icon\" src=\"{{iconPath}}{{icon}}\" height=\"24px\" />\r\n    </div>\r\n    <div class=\"d-table-cell m-auto\">\r\n      <span>{{ header }}</span>\r\n    </div>\r\n    <div class=\"d-table-cell ml-auto\">\r\n      <button *ngIf=\"collapsible\" class=\"btn btn-sm btn-outline-light\" (mouseover)=\"collapsedIconColor=''\" (mouseout)=\"collapsedIconColor='white/'\">\r\n        <img src=\"{{collapsedIconPath}}{{collapsedIconColor}}{{collapsedIcon}}\" height=\"16px\">\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!collapsed\" class=\"table-responsive border-bottom border-left border-right border-white text-white\">\r\n  <table class=\"table mb-0\">\r\n    <ng-content></ng-content>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/table-card/table-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableCardComponent = /** @class */ (function () {
    function TableCardComponent() {
        this.iconPath = 'assets/images/icons/128x128/white/';
        this.collapsedIconPath = 'assets/images/icons/128x128/';
        this.collapsedIconColor = 'white/';
    }
    TableCardComponent.prototype.ngOnInit = function () {
        if (this.collapsed == null) {
            this.collapsed = false;
        }
        this.collapsedIcon = this.collapsed
            ? 'arrowhead-left.png'
            : 'arrowhead-down.png';
    };
    TableCardComponent.prototype.changeState = function () {
        this.collapsed = !this.collapsed;
        this.collapsedIcon = this.collapsed
            ? 'arrowhead-left.png'
            : 'arrowhead-down.png';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TableCardComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TableCardComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableCardComponent.prototype, "collapsible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableCardComponent.prototype, "collapsed", void 0);
    TableCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-table-card',
            template: __webpack_require__("./src/app/shared/components/table-card/table-card.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/table-card/table-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableCardComponent);
    return TableCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/content-names.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTENT_NAMES; });
var CONTENT_NAMES = {
    REGISTER_USER: 'USERS',
    VIEW_SHIPS: 'SHIPS',
    REGISTER_SHIP: 'Register Ship',
    LOCATIONS: 'LOCATIONS',
    REGISTER_LOCATION: 'Register Location',
    VIEW_ORGANIZATIONS: 'ORGANIZATIONS',
    REGISTER_ORGANIZATION: 'Register Organization',
    VIEW_PORT_CALLS: 'PORT CALL',
    REGISTER_PORT_CALL_DRAFT: 'Register Port Call Draft',
    REGISTER_PORT_CALL: 'Register Port Call',
    VIEW_PORT_CALL: 'View Port Call',
    PORT_CALL_CLEARANCE: 'Port Call Clearance'
};



/***/ }),

/***/ "./src/app/shared/constants/form-names.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FORM_NAMES; });
var FORM_NAMES = {
    PORT_CALL_DETAILS: 'Port Call Details',
    CONFIRM_PORT_CALL: 'Confirm and Activate',
    DPG: 'DPG',
    CARGO: 'Cargo',
    SHIP_STORES: 'Ship Stores',
    CREW: 'Crew',
    PAX: 'Passenger List',
    PREV_AND_NEXT_POC: 'Voyages'
};



/***/ }),

/***/ "./src/app/shared/constants/location-properties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationProperties; });
var LocationProperties = /** @class */ (function () {
    function LocationProperties() {
        this.propertyList = [
            { description: LocationProperties.COUNTRY, data: null, imageUrl: null },
            { description: LocationProperties.LOCATION_NAME, data: null, imageUrl: null },
            { description: LocationProperties.LOCATION_CODE, data: null, imageUrl: null },
            { description: LocationProperties.LOCATION_TYPE, data: null, imageUrl: null },
        ];
    }
    LocationProperties.setLocationData = function (propertyList, locationModel) {
        if (locationModel.country) {
            LocationProperties.setCountry(propertyList, locationModel.country.name);
        }
        LocationProperties.setLocationName(propertyList, locationModel.name);
        LocationProperties.setLocationCode(propertyList, locationModel.locationCode);
        if (locationModel.locationType) {
            LocationProperties.setLocationType(propertyList, locationModel.locationType.name);
        }
    };
    LocationProperties.setCountry = function (propertyList, data, image) {
        if (image === void 0) { image = null; }
        propertyList.find(function (e) { return e.description === LocationProperties.COUNTRY; }).data = data;
        if (image) {
            propertyList.find(function (e) { return e.description === LocationProperties.COUNTRY; }).imageUrl = (LocationProperties.FLAGS_FOLDER + image);
        }
    };
    LocationProperties.setLocationName = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === LocationProperties.LOCATION_NAME; }).data = data;
    };
    LocationProperties.setLocationCode = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === LocationProperties.LOCATION_CODE; }).data = data;
    };
    LocationProperties.setLocationType = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === LocationProperties.LOCATION_TYPE; }).data = data;
    };
    LocationProperties.prototype.getPropertyList = function () {
        return this.propertyList;
    };
    LocationProperties.PROPERTIES = {
        COUNTRY: { description: 'Country', data: null },
        LOCATION_NAME: { description: 'Name', data: null },
        LOCATION_CODE: { description: 'Location Code', data: null },
        LOCATION_TYPE: { description: 'Type', data: null }
    };
    LocationProperties.COUNTRY = 'Country';
    LocationProperties.LOCATION_NAME = 'Location Name';
    LocationProperties.LOCATION_CODE = 'Location Code';
    LocationProperties.LOCATION_TYPE = 'Location Type';
    LocationProperties.FLAGS_FOLDER = 'assets/images/flags/';
    return LocationProperties;
}());



/***/ }),

/***/ "./src/app/shared/constants/location-time-properties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTimeProperties; });
var LocationTimeProperties = /** @class */ (function () {
    function LocationTimeProperties() {
    }
    LocationTimeProperties.PROPERTIES = {
        LOCATION_NAME: { description: 'Location Name', data: null },
        LOCATION_CODE: { description: 'Location Code', data: null },
        LOCATION_TYPE: { description: 'Location Type', data: null },
        ETA: { description: 'ETA', data: null },
        ETD: { description: 'ETD', data: null }
    };
    return LocationTimeProperties;
}());



/***/ }),

/***/ "./src/app/shared/constants/menu-claims.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuClaims; });
var MenuClaims = /** @class */ (function () {
    function MenuClaims() {
    }
    MenuClaims.TYPE = 'Menu';
    MenuClaims.PERMISSIONS = {
        'PORT CALL': false,
        USERS: false,
        SHIPS: false,
        ORGANIZATIONS: false,
        LOCATIONS: false
    };
    MenuClaims.PORT_CALL = 'PORT CALL';
    MenuClaims.USERS = 'USERS';
    MenuClaims.SHIPS = 'SHIPS';
    MenuClaims.ORGANIZATIONS = 'ORGANIZATIONS';
    MenuClaims.LOCATIONS = 'LOCATIONS';
    return MenuClaims;
}());



/***/ }),

/***/ "./src/app/shared/constants/next-location-time-properties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextLocationTimeProperties; });
var NextLocationTimeProperties = /** @class */ (function () {
    function NextLocationTimeProperties() {
        this.PROPERTIES = {
            LOCATION_NAME: { description: 'Location Name', data: null },
            LOCATION_CODE: { description: 'Location Code', data: null },
            ETA: { description: 'ETA', data: null },
        };
    }
    NextLocationTimeProperties.prototype.getProperties = function () {
        return this.PROPERTIES;
    };
    return NextLocationTimeProperties;
}());



/***/ }),

/***/ "./src/app/shared/constants/organization-properties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationProperties; });
var OrganizationProperties = /** @class */ (function () {
    function OrganizationProperties() {
        this.propertyList = [
            { description: OrganizationProperties.ORGANIZATION_NAME, data: null, imageUrl: null },
            { description: OrganizationProperties.ORGANIZATION_NO, data: null, imageUrl: null },
            { description: OrganizationProperties.ORGANIZATION_TYPE, data: null, imageUrl: null },
            { description: OrganizationProperties.ORGANIZATION_DESCRIPTION, data: null, imageUrl: null }
        ];
    }
    OrganizationProperties.setOrganizationData = function (propertyList, organizationModel) {
        OrganizationProperties.setOrganizationName(propertyList, organizationModel.name);
        OrganizationProperties.setOrganizationNo(propertyList, organizationModel.organizationNo);
        if (organizationModel.organizationType) {
            OrganizationProperties.setOrganizationType(propertyList, organizationModel.organizationType.name);
        }
        OrganizationProperties.setOrganizationDescription(propertyList, organizationModel.description);
    };
    OrganizationProperties.setOrganizationName = function (propertyList, data) {
        propertyList.find(function (e) { return e.description === OrganizationProperties.ORGANIZATION_NAME; }).data = data;
    };
    OrganizationProperties.setOrganizationNo = function (propertyList, data) {
        propertyList.find(function (e) { return e.description === OrganizationProperties.ORGANIZATION_NO; }).data = data;
    };
    OrganizationProperties.setOrganizationType = function (propertyList, data) {
        propertyList.find(function (e) { return e.description === OrganizationProperties.ORGANIZATION_TYPE; }).data = data;
    };
    OrganizationProperties.setOrganizationDescription = function (propertyList, data) {
        propertyList.find(function (e) { return e.description === OrganizationProperties.ORGANIZATION_DESCRIPTION; }).data = data;
    };
    OrganizationProperties.prototype.getPropertyList = function () {
        return this.propertyList;
    };
    OrganizationProperties.ORGANIZATION_NAME = 'Organization Name';
    OrganizationProperties.ORGANIZATION_NO = 'Organization Number';
    OrganizationProperties.ORGANIZATION_TYPE = 'Organization Type';
    OrganizationProperties.ORGANIZATION_DESCRIPTION = 'Description';
    return OrganizationProperties;
}());



/***/ }),

/***/ "./src/app/shared/constants/organization-types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationTypes; });
var OrganizationTypes = /** @class */ (function () {
    function OrganizationTypes() {
    }
    OrganizationTypes.GOVERNMENT_AGENCY_STRING = 'Authority';
    OrganizationTypes.COMPANY_STRING = 'Company';
    return OrganizationTypes;
}());



/***/ }),

/***/ "./src/app/shared/constants/port-call-claims.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallClaims; });
var PortCallClaims = /** @class */ (function () {
    function PortCallClaims() {
    }
    PortCallClaims.TYPE = 'Port Call';
    PortCallClaims.buttonRowPermissions = {
        view: false,
        edit: false,
        clearance: false,
        cancel: false,
        delete: false
    };
    PortCallClaims.portCallPermissions = {
        register: false,
        edit: false,
        clearance: false
    };
    return PortCallClaims;
}());



/***/ }),

/***/ "./src/app/shared/constants/port-call-status-types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallStatusTypes; });
var PortCallStatusTypes = /** @class */ (function () {
    function PortCallStatusTypes() {
    }
    PortCallStatusTypes.ACTIVE = 'Active';
    PortCallStatusTypes.DRAFT = 'Draft';
    PortCallStatusTypes.CANCELLED = 'Cancelled';
    PortCallStatusTypes.COMPLETED = 'Completed';
    PortCallStatusTypes.DRAFT_ID = 100235;
    return PortCallStatusTypes;
}());



/***/ }),

/***/ "./src/app/shared/constants/prev-location-time-properties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevLocationTimeProperties; });
var PrevLocationTimeProperties = /** @class */ (function () {
    function PrevLocationTimeProperties() {
        this.PROPERTIES = {
            LOCATION_NAME: { description: 'Location Name', data: null },
            LOCATION_CODE: { description: 'Location Code', data: null },
            ETD: { description: 'ETD', data: null },
        };
    }
    PrevLocationTimeProperties.prototype.getProperties = function () {
        return this.PROPERTIES;
    };
    return PrevLocationTimeProperties;
}());



/***/ }),

/***/ "./src/app/shared/constants/search-amounts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEARCH_AMOUNTS; });
var SEARCH_AMOUNTS = {
    DROPDOWN: 6,
    WITHOUT_DROPDOWN: 100,
    WITHOUT_DROPDOWN_2: 40
};



/***/ }),

/***/ "./src/app/shared/constants/ship-flag-code-properties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipFlagCodeProperties; });
var ShipFlagCodeProperties = /** @class */ (function () {
    function ShipFlagCodeProperties() {
        this.propertyList = [
            { description: ShipFlagCodeProperties.COUNTRY, data: null, imageUrl: null },
            { description: ShipFlagCodeProperties.SHIP_FLAG_CODE_NAME, data: null, imageUrl: null }
        ];
    }
    ShipFlagCodeProperties.setShipFlagCodeData = function (propertyList, shipFlagCodeModel) {
        ShipFlagCodeProperties.setName(propertyList, shipFlagCodeModel.name);
        if (shipFlagCodeModel.country) {
            ShipFlagCodeProperties.setCountry(propertyList, shipFlagCodeModel.country.name);
        }
    };
    ShipFlagCodeProperties.setCountry = function (propertyList, data, image) {
        if (image === void 0) { image = null; }
        propertyList.find(function (e) { return e.description === ShipFlagCodeProperties.COUNTRY; }).data = data;
        if (image) {
            propertyList.find(function (e) { return e.description === ShipFlagCodeProperties.COUNTRY; }).imageUrl = (ShipFlagCodeProperties.FLAGS_FOLDER + image);
        }
    };
    ShipFlagCodeProperties.setName = function (propertyList, data) {
        propertyList.find(function (e) { return e.description === ShipFlagCodeProperties.SHIP_FLAG_CODE_NAME; }).data = data;
    };
    ShipFlagCodeProperties.prototype.getPropertyList = function () {
        return this.propertyList;
    };
    ShipFlagCodeProperties.SHIP_FLAG_CODE_NAME = 'Flag Code';
    ShipFlagCodeProperties.SHIP_FLAG_CODE_DESCRIPTION = 'Desciption';
    ShipFlagCodeProperties.COUNTRY = 'Country';
    ShipFlagCodeProperties.FLAGS_FOLDER = 'assets/images/flags/';
    return ShipFlagCodeProperties;
}());



/***/ }),

/***/ "./src/app/shared/constants/ship-properties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipProperties; });
var ShipProperties = /** @class */ (function () {
    function ShipProperties() {
        this.propertyList = [
            { description: 'Country', data: null, imageUrl: null },
            { description: 'Ship Name', data: null, imageUrl: null },
            { description: 'Call Sign', data: null, imageUrl: null },
            { description: 'IMO no.', data: null, imageUrl: null },
            { description: 'MMSI no.', data: null, imageUrl: null },
            { description: 'Gross Tonnage', data: null, imageUrl: null },
            { description: 'Net Tonnage', data: null, imageUrl: null },
            { description: 'Length', data: null, imageUrl: null },
            { description: 'Ship Type', data: null, imageUrl: null },
            { description: 'Ship Status', data: null, imageUrl: null }
        ];
    }
    ShipProperties.setShipData = function (propertyList, shipModel) {
        if (shipModel.shipFlagCode && shipModel.shipFlagCode.country) {
            ShipProperties.setCountry(propertyList, shipModel.shipFlagCode.country.name);
        }
        ShipProperties.setShipName(propertyList, shipModel.name);
        ShipProperties.setCallSign(propertyList, shipModel.callSign);
        ShipProperties.setImoNo(propertyList, shipModel.imoNo);
        ShipProperties.setMmsiNo(propertyList, shipModel.mmsiNo);
        ShipProperties.setGrossTonnage(propertyList, shipModel.grossTonnage);
        ShipProperties.setNetTonnage(propertyList, shipModel.netTonnage);
        ShipProperties.setLength(propertyList, shipModel.length);
        if (shipModel.shipType) {
            ShipProperties.setShipType(propertyList, shipModel.shipType.name);
        }
        if (shipModel.shipStatus) {
            ShipProperties.setShipStatus(propertyList, shipModel.shipStatus.name);
        }
    };
    ShipProperties.setCountry = function (propertyList, data, image) {
        if (image === void 0) { image = null; }
        propertyList.find(function (e) { return e.description === ShipProperties.COUNTRY; }).data = data;
        if (image) {
            propertyList.find(function (e) { return e.description === ShipProperties.COUNTRY; }).imageUrl = (ShipProperties.FLAGS_FOLDER + image);
        }
    };
    ShipProperties.setShipName = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === ShipProperties.SHIP_NAME; }).data = data;
    };
    ShipProperties.setCallSign = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === ShipProperties.CALL_SIGN; }).data = data;
    };
    ShipProperties.setImoNo = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === ShipProperties.IMO_NO; }).data = data;
    };
    ShipProperties.setMmsiNo = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === ShipProperties.MMSI_NO; }).data = data;
    };
    ShipProperties.setGrossTonnage = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === ShipProperties.GROSS_TONNAGE; }).data = data;
    };
    ShipProperties.setNetTonnage = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === ShipProperties.NET_TONNAGE; }).data = data;
    };
    ShipProperties.setLength = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === ShipProperties.LENGTH; }).data = data;
    };
    ShipProperties.setShipType = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === ShipProperties.SHIP_TYPE; }).data = data;
    };
    ShipProperties.setShipStatus = function (propertyList, data, imageUrl) {
        if (imageUrl === void 0) { imageUrl = null; }
        propertyList.find(function (e) { return e.description === ShipProperties.SHIP_STATUS; }).data = data;
    };
    ShipProperties.prototype.getPropertyList = function () {
        return this.propertyList;
    };
    ShipProperties.PROPERTIES = {
        SHIP_NAME: { description: 'Ship Name', data: null, imageUrl: null },
        CALL_SIGN: { description: 'Call Sign', data: null },
        IMO_NO: { description: 'IMO no.', data: null },
        MMSI_NO: { description: 'MMSI no.', data: null },
        GROSS_TONNAGE: { description: 'Gross Tonnage', data: null },
        LENGTH: { description: 'Length', data: null },
        SHIP_TYPE: { description: 'Ship Type', data: null },
        SHIP_STATUS: { description: 'Ship Status', data: null }
    };
    ShipProperties.COUNTRY = 'Country';
    ShipProperties.SHIP_NAME = 'Ship Name';
    ShipProperties.CALL_SIGN = 'Call Sign';
    ShipProperties.IMO_NO = 'IMO no.';
    ShipProperties.MMSI_NO = 'MMSI no.';
    ShipProperties.GROSS_TONNAGE = 'Gross Tonnage';
    ShipProperties.NET_TONNAGE = 'Net Tonnage';
    ShipProperties.LENGTH = 'Length';
    ShipProperties.SHIP_TYPE = 'Ship Type';
    ShipProperties.SHIP_STATUS = 'Ship Status';
    ShipProperties.FLAGS_FOLDER = 'assets/images/flags/';
    return ShipProperties;
}());



/***/ }),

/***/ "./src/app/shared/models/certificate-of-registry-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificateOfRegistryModel; });
var CertificateOfRegistryModel = /** @class */ (function () {
    function CertificateOfRegistryModel() {
    }
    return CertificateOfRegistryModel;
}());



/***/ }),

/***/ "./src/app/shared/models/clearance-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearanceModel; });
var ClearanceModel = /** @class */ (function () {
    function ClearanceModel() {
    }
    return ClearanceModel;
}());



/***/ }),

/***/ "./src/app/shared/models/contact-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModel; });
var ContactModel = /** @class */ (function () {
    function ContactModel() {
    }
    return ContactModel;
}());



/***/ }),

/***/ "./src/app/shared/models/location-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModel; });
var LocationModel = /** @class */ (function () {
    function LocationModel() {
    }
    return LocationModel;
}());



/***/ }),

/***/ "./src/app/shared/models/organization-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationModel; });
var OrganizationModel = /** @class */ (function () {
    function OrganizationModel() {
    }
    return OrganizationModel;
}());



/***/ }),

/***/ "./src/app/shared/models/port-call-details-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallDetailsModel; });
var PortCallDetailsModel = /** @class */ (function () {
    function PortCallDetailsModel() {
    }
    return PortCallDetailsModel;
}());



/***/ }),

/***/ "./src/app/shared/models/port-call-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallModel; });
var PortCallModel = /** @class */ (function () {
    function PortCallModel() {
    }
    return PortCallModel;
}());



/***/ }),

/***/ "./src/app/shared/models/port-call-passenger-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PassengerModel; });
var PassengerModel = /** @class */ (function () {
    function PassengerModel() {
    }
    return PassengerModel;
}());



/***/ }),

/***/ "./src/app/shared/models/port-call-ship-stores-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallShipStoresModel; });
var PortCallShipStoresModel = /** @class */ (function () {
    function PortCallShipStoresModel() {
    }
    return PortCallShipStoresModel;
}());



/***/ }),

/***/ "./src/app/shared/models/ship-contact-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipContactModel; });
var ShipContactModel = /** @class */ (function () {
    function ShipContactModel() {
    }
    return ShipContactModel;
}());



/***/ }),

/***/ "./src/app/shared/models/ship-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipModel; });
var ShipModel = /** @class */ (function () {
    function ShipModel() {
    }
    return ShipModel;
}());



/***/ }),

/***/ "./src/app/shared/models/token-query-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenQueryModel; });
var TokenQueryModel = /** @class */ (function () {
    function TokenQueryModel(userId, token) {
        this.setUserId(userId);
        this.setToken(token);
    }
    TokenQueryModel.prototype.setUserId = function (userId) {
        this.userId = encodeURIComponent(userId);
    };
    TokenQueryModel.prototype.setToken = function (token) {
        this.token = encodeURIComponent(token);
    };
    return TokenQueryModel;
}());



/***/ }),

/***/ "./src/app/shared/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_request_service__ = __webpack_require__("./src/app/shared/services/auth.request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_utils_base_request__ = __webpack_require__("./src/app/shared/utils/base.request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountService = /** @class */ (function (_super) {
    __extends(AccountService, _super);
    function AccountService(http, httpClient, authRequestService, configService) {
        var _this = _super.call(this, configService, authRequestService) || this;
        _this.http = http;
        _this.httpClient = httpClient;
        // URLs
        _this.accountBaseUrl = '/account';
        // Subjects & observables
        _this.userClaimsDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.userClaimsData$ = _this.userClaimsDataSource.asObservable();
        _this.userOrganizationDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.userOrganizationData$ = _this.userOrganizationDataSource.asObservable();
        _this.actionUrl = _this.baseUrl + _this.accountBaseUrl; /* /api/account/                    */
        _this.userUrl = _this.actionUrl + '/user'; /* /api/account/user                */
        _this.rolesUrl = _this.actionUrl + '/roles'; /* /api/account/roles               */
        _this.userClaimsUrl = _this.userUrl + '/claims'; /* /api/account/claims              */
        _this.userNameUrl = _this.userUrl + '/name'; /* /api/account/user/name           */
        _this.emailUrl = _this.userUrl + '/email'; /* /api/account/user/email          */
        _this.passwordUrl = _this.userUrl + '/password'; /* /api/account/user/password       */
        _this.emailTakenUrl = _this.actionUrl + '/emailTaken'; /* /api/account/emailTaken          */
        return _this;
    }
    AccountService.prototype.getAllRoles = function () {
        var options = this.getRequestOptions();
        return this.http
            .get(this.rolesUrl, options)
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.setUserOrganization = function (data) {
        this.userOrganizationDataSource.next(data);
    };
    AccountService.prototype.getUserClaims = function () {
        var options = this.getRequestOptions();
        return this.http.get(this.userClaimsUrl, options)
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.setUserClaims = function (data) {
        this.userClaimsDataSource.next(data);
    };
    // Will be deprecated once email registration is implemented.
    AccountService.prototype.registerUser = function (newUser) {
        var options = this.getRequestOptions();
        return this.http.post(this.userUrl, newUser, options);
    };
    AccountService.prototype.getUserName = function () {
        var options = this.getRequestOptions();
        return this.http
            .get(this.userNameUrl, options)
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.getUserByEmail = function (email) {
        var options = this.getRequestOptions();
        var uri = [this.userUrl, email].join('/');
        return this.http
            .get(uri, options)
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.emailTaken = function (email) {
        var options = this.getRequestOptions();
        var uri = [this.emailTakenUrl, email].join('/');
        console.log(uri);
        return this.http
            .get(uri, options)
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.changeRole = function (userName, roleName) {
        /* Not yet implemented
        return this.http.post(url,body)
            .map(res => res.json());
         */
    };
    AccountService.prototype.confirmEmail = function (queryModel) {
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of(true);
        /* const uri = [this.emailUrl, 'confirm'].join('/');
        return this.http
            .post(uri, JSON.stringify(queryModel))
            .map(res => res.json()); */
    };
    AccountService.prototype.getPasswordResetToken = function (userId) {
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["a" /* Observable */].of('default token');
        /* const uri = [this.passwordUrl, 'reset'].join('/');
        return this.httpClient
            .post(uri, null, {
                params: {
                    userId
                }
            })
            .map(res => res.toString()); */
    };
    // getPasswordResetToken() {
    //     this.route.queryParams.subscribe((queryParams: any) => {
    //         const uri = [this.emailUrl, 'confirm'].join('/');
    //         return this.http
    //             .post(uri, null, {
    //                 params: {
    //                     userId: queryParams.userId,
    //                     emailConfirmationToken: queryParams.emailConfirmationToken
    //                 }
    //             })
    //             .map(res => res.text());
    //     });
    // }
    AccountService.prototype.getEmailLink = function () {
        var uri = [this.actionUrl, 'emailLink'].join('/');
        return this.http
            .get(uri)
            .map(function (res) { return res.text(); });
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__auth_request_service__["a" /* AuthRequest */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__["a" /* ConfigService */]])
    ], AccountService);
    return AccountService;
}(__WEBPACK_IMPORTED_MODULE_1_app_shared_utils_base_request__["a" /* BaseRequest */]));



/***/ }),

/***/ "./src/app/shared/services/auth-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_utils_base_request__ = __webpack_require__("./src/app/shared/utils/base.request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_request_service__ = __webpack_require__("./src/app/shared/services/auth.request.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http, authService, configService) {
        var _this = _super.call(this, configService, authService) || this;
        _this.http = http;
        _this.authService = authService;
        _this.authBaseUrl = '/auth';
        _this.actionUrl = _this.baseUrl + _this.authBaseUrl;
        return _this;
    }
    AuthService.prototype.isAdmin = function () {
        var authHeader = this.authService.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: authHeader });
        return this.http
            .get(this.actionUrl + '/isAdmin', options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.canSetClearance = function () {
        var authHeader = this.authService.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: authHeader });
        return (this.http
            .get('api/test/canSetPortCallClearance', options)
            .map(function (res) { return res.json(); }));
    };
    AuthService.prototype.hasToken = function () {
        return localStorage.getItem('auth_token') != null;
    };
    AuthService.prototype.hasValidToken = function () {
        var authHeader = this.authService.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: authHeader });
        return this.http
            .get(this.actionUrl + '/hasValidToken', options)
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__auth_request_service__["a" /* AuthRequest */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__["a" /* ConfigService */]])
    ], AuthService);
    return AuthService;
}(__WEBPACK_IMPORTED_MODULE_2_app_shared_utils_base_request__["a" /* BaseRequest */]));



/***/ }),

/***/ "./src/app/shared/services/auth.request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthRequest = /** @class */ (function () {
    function AuthRequest(http) {
        this.http = http;
    }
    AuthRequest.prototype.GetHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('auth_token'));
        return headers;
    };
    AuthRequest = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], AuthRequest);
    return AuthRequest;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
// Based on https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/src/app/shared/services/base.service.ts

var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/constants.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstantsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConstantsService = /** @class */ (function () {
    function ConstantsService(http) {
        this.http = http;
        this.contactMediumUrl = 'api/contactmedium';
        this.claimUrl = 'api/claim';
        this.portCallClaimsUrl = 'api/claim/type/portcall';
        this.getMenuClaimListUrl = 'api/claim/type/menu';
    }
    ConstantsService.prototype.getContactMediumList = function () {
        return this.http.get(this.contactMediumUrl).map(function (res) { return res.json(); });
    };
    ConstantsService.prototype.getClaimList = function () {
        return this.http.get(this.claimUrl).map(function (res) { return res.json(); });
    };
    ConstantsService.prototype.GetPortCallClaimList = function () {
        return this.http.get(this.portCallClaimsUrl).map(function (res) { return res.json(); });
    };
    ConstantsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ConstantsService);
    return ConstantsService;
}());



/***/ }),

/***/ "./src/app/shared/services/content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__("./src/app/shared/services/base.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentService = /** @class */ (function (_super) {
    __extends(ContentService, _super);
    function ContentService() {
        var _this = _super.call(this) || this;
        _this.contentSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](__WEBPACK_IMPORTED_MODULE_1_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_PORT_CALLS);
        _this.contentName$ = _this.contentSource.asObservable();
        _this.portCallFormSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('Voyages');
        _this.portCallFormName$ = _this.portCallFormSource.asObservable();
        _this.loadingScreenSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.loadingScreen$ = _this.loadingScreenSource.asObservable();
        return _this;
    }
    ContentService.prototype.setContent = function (contentName) {
        this.setLoadingScreen(false, null, null);
        this.contentSource.next(contentName);
    };
    ContentService.prototype.setPortCallForm = function (contentName) {
        this.portCallFormSource.next(contentName);
    };
    ContentService.prototype.setLoadingScreen = function (isLoading, loadingIcon, loadingText) {
        this.loadingScreenSource.next({ isLoading: isLoading, loadingIcon: loadingIcon, loadingText: loadingText });
    };
    ContentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ContentService);
    return ContentService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/shared/services/country.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_service__ = __webpack_require__("./src/app/shared/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
        this.searchService = new __WEBPACK_IMPORTED_MODULE_3__search_service__["a" /* SearchService */](http);
        this.searchUrl = 'api/country/search/';
    }
    CountryService.prototype.search = function (term) {
        if (term.length < 2) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of([]);
        }
        return this.searchService.search(this.searchUrl, term);
    };
    CountryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/shared/services/db-connection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DbConnectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__("./src/app/shared/services/base.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DbConnectionService = /** @class */ (function (_super) {
    __extends(DbConnectionService, _super);
    function DbConnectionService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.hasDbConnectionSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        _this.hasDbConnection$ = _this.hasDbConnectionSource.asObservable();
        _this.connectionUrl = 'api/connection/state';
        return _this;
    }
    DbConnectionService.prototype.getHasDbConnection = function () {
        return this.http.get(this.connectionUrl).map(function (res) { return res.json(); });
    };
    DbConnectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], DbConnectionService);
    return DbConnectionService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/shared/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_request_service__ = __webpack_require__("./src/app/shared/services/auth.request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_search_service__ = __webpack_require__("./src/app/shared/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LocationService = /** @class */ (function () {
    function LocationService(http, authRequest) {
        this.http = http;
        this.authRequest = authRequest;
        this.locationDataSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.locationData$ = this.locationDataSource.asObservable();
        this.locationSearchDataSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.locationSearchData$ = this.locationSearchDataSource.asObservable();
        this.locationUrl = 'api/location';
        this.locationTypeUrl = 'api/locationtype';
        this.countryUrl = 'api/country';
        this.searchService = new __WEBPACK_IMPORTED_MODULE_5_app_shared_services_search_service__["a" /* SearchService */](this.http);
        this.searchUrl = 'api/location/search';
        this.searchHarbourUrl = 'api/location/harbour/search';
    }
    LocationService.prototype.setLocationSearchData = function (data) {
        this.locationSearchDataSource.next(data);
    };
    LocationService.prototype.clearLocationSearch = function () {
        this.setLocationData(null);
        this.setLocationSearchData(null);
    };
    LocationService.prototype.search = function (term, restrictTypeHarbour, amount) {
        if (amount === void 0) { amount = 10; }
        if (term.length < 2) {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].of([]);
        }
        var uri = (restrictTypeHarbour) ? this.searchHarbourUrl : this.searchUrl;
        return this.searchService.search(uri, term, amount);
    };
    LocationService.prototype.setLocationData = function (data) {
        this.locationDataSource.next(data);
    };
    LocationService.prototype.updateLocation = function (location) {
        location.country = null;
        location.locationType = null;
        var auth_headers = this.authRequest.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: auth_headers });
        return this.http
            .put(this.locationUrl, location, options)
            .map(function (res) { return res.json(); });
    };
    LocationService.prototype.registerLocation = function (newLocation) {
        var authHeaders = this.authRequest.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: authHeaders });
        return this.http
            .post(this.locationUrl, newLocation, options)
            .map(function (res) { return res.json(); });
    };
    LocationService.prototype.getLocationTypes = function () {
        return this.http.get(this.locationTypeUrl).map(function (res) { return res.json(); });
    };
    LocationService.prototype.getCountries = function () {
        return this.http.get(this.countryUrl).map(function (res) { return res.json(); });
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_4__auth_request_service__["a" /* AuthRequest */]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__ = __webpack_require__("./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_service__ = __webpack_require__("./src/app/shared/services/base.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Based on https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/src/app/shared/services/user.service.ts
var LoginService = /** @class */ (function (_super) {
    __extends(LoginService, _super);
    function LoginService(http, configService, jwtHelperService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.jwtHelperService = jwtHelperService;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this._loggedInSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        _this.loggedIn$ = _this._loggedInSource.asObservable();
        _this.loggedIn = false;
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        _this.baseUrl = configService.getApiURI();
        _this.jwtHelperService = new __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]({
            tokenGetter: function () { return localStorage.getItem(''); }
        });
        return _this;
    }
    LoginService.prototype.login = function (userName, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.baseUrl + '/auth/login', JSON.stringify({ userName: userName, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res) {
                localStorage.setItem('auth_token', res.auth_token);
                _this.loggedIn = true;
                _this._loggedInSource.next(true);
                _this._authNavStatusSource.next(true);
                return true;
            }
            _this._loggedInSource.next(false);
            _this._authNavStatusSource.next(false);
            return false;
        })
            .catch(this.handleError);
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_claims');
        this.loggedIn = false;
        this._loggedInSource.next(false);
        this._authNavStatusSource.next(false);
    };
    // Tips from https://ryanchenkie.com/angular-authentication-using-route-guards
    LoginService.prototype.isLoggedIn = function () {
        // Get token from localStorage
        var token = localStorage.getItem('auth_token');
        // Check whether the token is expired
        var isExpired = this.jwtHelperService.isTokenExpired(token);
        return !isExpired;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__utils_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], LoginService);
    return LoginService;
}(__WEBPACK_IMPORTED_MODULE_5__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/shared/services/organization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_request_service__ = __webpack_require__("./src/app/shared/services/auth.request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_service__ = __webpack_require__("./src/app/shared/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrganizationService = /** @class */ (function () {
    function OrganizationService(http, authRequestService) {
        this.http = http;
        this.authRequestService = authRequestService;
        this.organizationDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.organizationData$ = this.organizationDataSource.asObservable();
        this.organizationSearchDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.organizationSearchData$ = this.organizationSearchDataSource.asObservable();
        this.searchService = new __WEBPACK_IMPORTED_MODULE_4__search_service__["a" /* SearchService */](http);
        this.organizationUrl = 'api/organization';
        this.organizationTypeUrl = 'api/organizationtype';
        this.organizationUserUrl = this.organizationUrl + '/user';
        this.searchOrganizationUrl = this.organizationUrl + '/search';
    }
    OrganizationService.prototype.setOrganizationData = function (data) {
        this.organizationDataSource.next(data);
    };
    OrganizationService.prototype.setOrganizationSearchData = function (data) {
        this.organizationSearchDataSource.next(data);
    };
    OrganizationService.prototype.registerOrganization = function (newOrganization) {
        var authHeaders = this.authRequestService.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: authHeaders });
        return this.http
            .post(this.organizationUrl, newOrganization, options)
            .map(function (res) { return res.json(); });
    };
    OrganizationService.prototype.updateOrganization = function (organization) {
        var auth_headers = this.authRequestService.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: auth_headers });
        return this.http
            .put(this.organizationUrl, organization, options)
            .map(function (res) { return res.json(); });
    };
    OrganizationService.prototype.search = function (term, amount) {
        if (amount === void 0) { amount = 10; }
        if (term.length < 2) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].of([]);
        }
        return this.searchService.search(this.searchOrganizationUrl, term, amount);
    };
    OrganizationService.prototype.getOrganizationTypes = function () {
        return this.http.get(this.organizationTypeUrl).map(function (res) { return res.json(); });
    };
    OrganizationService.prototype.getOrganizationForUser = function () {
        var auth_headers = this.authRequestService.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: auth_headers });
        var uri = this.organizationUserUrl;
        return this.http.get(uri, options).map(function (res) { return res.json(); });
    };
    OrganizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_3__auth_request_service__["a" /* AuthRequest */]])
    ], OrganizationService);
    return OrganizationService;
}());



/***/ }),

/***/ "./src/app/shared/services/port-call-overview.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallOverviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_utils_base_request__ = __webpack_require__("./src/app/shared/utils/base.request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_request_service__ = __webpack_require__("./src/app/shared/services/auth.request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortCallOverviewService = /** @class */ (function (_super) {
    __extends(PortCallOverviewService, _super);
    function PortCallOverviewService(http, authRequestService, configService) {
        var _this = _super.call(this, configService, authRequestService) || this;
        _this.http = http;
        _this.overviewDataSource = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.overviewData$ = _this.overviewDataSource.asObservable();
        _this.draftOverviewDataSource = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.draftOverviewData$ = _this.draftOverviewDataSource.asObservable();
        _this.showCancelledPortCallsSource = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        _this.showCancelledPortCall$ = _this.showCancelledPortCallsSource.asObservable();
        _this.clearedByUserAgencyDataSource = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.clearedByUserAgencyOverviewData$ = _this.clearedByUserAgencyDataSource.asObservable();
        _this.portCallDataSource = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.portCallData$ = _this.portCallDataSource.asObservable();
        _this.loadingPortCallSource = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        _this.loadingPortCall$ = _this.loadingPortCallSource.asObservable();
        _this.portCallUrl = 'api/portcall';
        _this.partialOverviewUrl = _this.portCallUrl + '/partialOverview';
        _this.overviewUrl = _this.portCallUrl + '/overview';
        _this.portCallUserUrl = _this.portCallUrl + '/user';
        return _this;
    }
    PortCallOverviewService.prototype.setLoadingPortCall = function (data) {
        this.loadingPortCallSource.next(data);
    };
    PortCallOverviewService.prototype.setOverviewData = function (data) {
        this.overviewDataSource.next(data);
    };
    PortCallOverviewService.prototype.setDraftData = function (data) {
        this.draftOverviewDataSource.next(data);
    };
    PortCallOverviewService.prototype.setShowCancelledPortCalls = function (showCancelled) {
        this.showCancelledPortCallsSource.next(showCancelled);
    };
    PortCallOverviewService.prototype.setClearedData = function (data) {
        this.clearedByUserAgencyDataSource.next(data);
    };
    PortCallOverviewService.prototype.getPartialOverview = function (portCallId) {
        var uri = [this.partialOverviewUrl, portCallId].join('/');
        return this.http.get(uri).map(function (res) { return res.json(); });
    };
    PortCallOverviewService.prototype.getOverview = function (portCallId) {
        var uri = [this.overviewUrl, portCallId].join('/');
        return this.http.get(uri).map(function (res) { return res.json(); });
    };
    PortCallOverviewService.prototype.setPortCallData = function (data) {
        this.portCallDataSource.next(data);
    };
    PortCallOverviewService.prototype.getPortCalls = function () {
        var options = this.getRequestOptions();
        var uri = this.portCallUserUrl;
        return this.http.get(uri, options).map(function (res) { return res.json(); });
    };
    PortCallOverviewService.prototype.getOverviews = function () {
        var uri = this.overviewUrl;
        return this.http.get(uri).map(function (res) { return res.json(); });
    };
    PortCallOverviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__auth_request_service__["a" /* AuthRequest */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_utils_config_service__["a" /* ConfigService */]])
    ], PortCallOverviewService);
    return PortCallOverviewService;
}(__WEBPACK_IMPORTED_MODULE_2_app_shared_utils_base_request__["a" /* BaseRequest */]));



/***/ }),

/***/ "./src/app/shared/services/port-call-passenger-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallPassengerListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__country_service__ = __webpack_require__("./src/app/shared/services/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_port_call_passenger_model__ = __webpack_require__("./src/app/shared/models/port-call-passenger-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortCallPassengerListService = /** @class */ (function () {
    function PortCallPassengerListService(http, countryService) {
        this.http = http;
        this.countryService = countryService;
        this.passengerListSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.passengerList$ = this.passengerListSource.asObservable();
        this.passengerListMeta = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            valid: true
        });
        this.passengerListMeta$ = this.passengerListMeta.asObservable();
        this.dataIsPristine = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        this.dataIsPristine$ = this.dataIsPristine.asObservable();
        this.passengerModelSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_5__models_port_call_passenger_model__["a" /* PassengerModel */]());
        this.passengerModel$ = this.passengerModelSource.asObservable();
        this.personOnBoardListUrl = 'api/personOnBoard/list';
    }
    // Http
    PortCallPassengerListService.prototype.registerPassengerList = function (passengerList) {
        var uri = this.personOnBoardListUrl;
        return this.http.post(uri, passengerList).map(function (res) { return res.json(); });
    };
    PortCallPassengerListService.prototype.updatePassengerList = function (passengerList) {
        var uri = this.personOnBoardListUrl;
        return this.http.put(uri, passengerList).map(function (res) { return res.json(); });
    };
    PortCallPassengerListService.prototype.setPassengersList = function (data) {
        this.passengerListSource.next(data);
    };
    PortCallPassengerListService.prototype.setPassengerListMeta = function (metaData) {
        this.passengerListMeta.next(metaData);
    };
    PortCallPassengerListService.prototype.setDataIsPristine = function (isPristine) {
        this.dataIsPristine.next(isPristine);
    };
    PortCallPassengerListService.prototype.setPortOfEmbarkation = function (data) {
        console.log('Set port of embarkation: ' + data);
        var tempPassengerModel = this.passengerModelSource.getValue();
        tempPassengerModel.portOfEmbarkation = data;
        this.passengerModelSource.next(tempPassengerModel);
    };
    PortCallPassengerListService.prototype.setPortOfDisembarkation = function (data) {
        var tempPassengerModel = this.passengerModelSource.getValue();
        tempPassengerModel.portOfDisembarkation = data;
        this.passengerModelSource.next(tempPassengerModel);
    };
    PortCallPassengerListService.prototype.setPassengerModel = function (data) {
        this.passengerModelSource.next(data);
    };
    PortCallPassengerListService.prototype.searchCountry = function (term, amount) {
        if (amount === void 0) { amount = 10; }
        if (term.length < 1) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of([]);
        }
        return this.countryService.search(term);
    };
    PortCallPassengerListService.prototype.deletePassengerEntry = function (data) {
        var _this = this;
        var copyPassengerList = this.passengerListSource.getValue();
        data = JSON.stringify(this.createComparableObject(data));
        // Find clicked item
        copyPassengerList.forEach(function (item, index) {
            item = JSON.stringify(_this.createComparableObject(item));
            if (item === data) {
                copyPassengerList.splice(index, 1);
            }
        });
        copyPassengerList = this.setPassengerIds(copyPassengerList);
        this.setPassengersList(copyPassengerList);
        this.setDataIsPristine(false);
    };
    PortCallPassengerListService.prototype.createComparableObject = function (item) {
        var object = {
            familyName: item.familyName,
            givenName: item.givenName,
            nationality: item.nationality,
            dateOfBirth: item.dateOfBirth,
            placeOfBirth: item.placeOfBirth,
            countryOfBirth: item.countryOfBirth,
            natureOfIdentityDoc: item.natureOfIdentityDoc,
            numberOfIdentityDoc: item.numberOfIdentityDoc,
            permitNumber: item.permitNumber,
            portOfEmbarkation: item.portOfEmbarkation,
            portOfDisembarkation: item.portOfDisembarkation,
            transit: item.transit,
            passengerId: item.passengerId,
            portCallId: item.portCallId
        };
        return object;
    };
    PortCallPassengerListService.prototype.setPassengerIds = function (list) {
        var tempPassengerId = 1;
        list.forEach(function (passenger) {
            passenger.passengerId = tempPassengerId;
            tempPassengerId++;
        });
        return list;
    };
    PortCallPassengerListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_4__country_service__["a" /* CountryService */]])
    ], PortCallPassengerListService);
    return PortCallPassengerListService;
}());



/***/ }),

/***/ "./src/app/shared/services/fal-ship-stores.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FalShipStoresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FalShipStoresService = /** @class */ (function () {
    function FalShipStoresService(http) {
        this.http = http;
        this.shipStoresInformationSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.shipStoresList$ = this.shipStoresInformationSource.asObservable();
        this.shipStoresInformationMeta = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            valid: true
        });
        this.shipStoresInformationMeta$ = this.shipStoresInformationMeta.asObservable();
        this.dataIsPristine = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        this.dataIsPristine$ = this.dataIsPristine.asObservable();
        this.sequenceNumberSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](1);
        this.sequenceNumber$ = this.sequenceNumberSource.asObservable();
        this.isCheckedInProgressBar = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.isCheckedInProgressBar$ = this.isCheckedInProgressBar.asObservable();
        this.shipStoresUrl = 'api/falShipStores';
        this.shipStoresListUrl = 'api/falShipStores/list';
        this.portCallUrl = 'api/portCall';
        this.shipStoresString = 'falShipStores';
        this.measurementTypeUrl = 'api/measurementType';
    }
    // API calls
    // Get ship stores object by its primary key ID
    FalShipStoresService.prototype.getShipStoresById = function (shipStoresId) {
        var uri = [this.shipStoresUrl, shipStoresId].join('/');
        return this.http.get(uri).map(function (res) { return res.json(); });
    };
    // Add new ship stores list to database
    FalShipStoresService.prototype.addShipStores = function (shipStoresList) {
        var _this = this;
        console.log('Adding Ship Stores...');
        var uri = this.shipStoresListUrl;
        this.http.post(uri, shipStoresList).map(function (res) {
            console.log(res);
            _this.setDataIsPristine(true);
            return res.json();
        });
    };
    // Update  existing ship stores list in database
    FalShipStoresService.prototype.updateShipStores = function (shipStoresList) {
        var _this = this;
        console.log('Updating ship stores...');
        console.log(shipStoresList);
        var uri = this.shipStoresListUrl;
        return this.http.put(uri, shipStoresList).map(function (res) {
            res.json();
            if (res.status === 200) {
                console.log('Ship stores successfully saved.');
                _this.setDataIsPristine(true);
            }
        });
    };
    // Get all ship stores for a given port call
    FalShipStoresService.prototype.getShipStoresByPortCallId = function (portCallId) {
        var uri = [this.portCallUrl, portCallId].join('/');
        uri = [uri, this.shipStoresString].join('/');
        return this.http.get(uri).map(function (res) { return res.json(); });
    };
    // Get list of all measurement types
    FalShipStoresService.prototype.getMeasurementTypeList = function () {
        var uri = this.measurementTypeUrl;
        return this.http.get(uri).map(function (res) { return res.json(); });
    };
    /************************
     *
     *  SETTERS AND DELETE
     *
     ************************/
    // Update shipStoresInformationData
    FalShipStoresService.prototype.setShipStoresInformationData = function (data) {
        this.shipStoresInformationSource.next(data);
    };
    // Update setShipStoresInformationMeta
    FalShipStoresService.prototype.setShipStoresInformationMeta = function (metaData) {
        this.shipStoresInformationMeta.next(metaData);
    };
    FalShipStoresService.prototype.setDataIsPristine = function (isPristine) {
        this.dataIsPristine.next(isPristine);
    };
    FalShipStoresService.prototype.setCheckedInProgressBar = function (checked) {
        this.isCheckedInProgressBar.next(checked);
    };
    // Delete port call draft
    FalShipStoresService.prototype.deleteShipStoreEntry = function (data) {
        var _this = this;
        var copyShipStoresInformationSource = this.shipStoresInformationSource.getValue();
        data = JSON.stringify(this.createComparableObject(data));
        // Find clicked item
        copyShipStoresInformationSource.forEach(function (item, index) {
            item = JSON.stringify(_this.createComparableObject(item));
            if (item === data) {
                copyShipStoresInformationSource.splice(index, 1);
            }
        });
        // Reset all sequenceNumbers
        copyShipStoresInformationSource = this.setSequenceNumbers(copyShipStoresInformationSource);
        this.setShipStoresInformationData(copyShipStoresInformationSource);
        // Set dataIsPristine to false (data is touched)
        this.setDataIsPristine(false);
    };
    /******************
     *
     *  HELP METHODS
     *
     ******************/
    FalShipStoresService.prototype.createComparableObject = function (item) {
        var object = {
            sequenceNumber: item.sequenceNumber,
            articleCode: item.articleCode,
            articleName: item.articleName,
            locationOnBoard: item.locationOnBoard,
            locationOnBoardCode: item.locationOnBoardCode,
            quantity: item.quantity,
        };
        return object;
    };
    FalShipStoresService.prototype.setSequenceNumbers = function (list) {
        var tempSequenceNumber = 1;
        list.forEach(function (item) {
            item.sequenceNumber = tempSequenceNumber;
            tempSequenceNumber++;
        });
        return list;
    };
    FalShipStoresService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]])
    ], FalShipStoresService);
    return FalShipStoresService;
}());



/***/ }),

/***/ "./src/app/shared/services/port-call.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_request_service__ = __webpack_require__("./src/app/shared/services/auth.request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__prev_and_next_poc_service__ = __webpack_require__("./src/app/shared/services/prev-and-next-poc.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PortCallService = /** @class */ (function () {
    function PortCallService(http, authRequestService, prevAndNextPocService) {
        this.http = http;
        this.authRequestService = authRequestService;
        this.prevAndNextPocService = prevAndNextPocService;
        // Subjects
        this.detailsPristine = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        this.detailsPristine$ = this.detailsPristine.asObservable();
        // Data sources with observables
        this.updateOverviewSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.updateOverview$ = this.updateOverviewSource.asObservable();
        this.shipDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.shipData$ = this.shipDataSource.asObservable();
        this.locationDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.locationData$ = this.locationDataSource.asObservable();
        this.etaEtdDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.etaEtdData$ = this.etaEtdDataSource.asObservable();
        this.portCallStatusSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.portCallStatusData$ = this.portCallStatusSource.asObservable();
        this.detailsIdentificationSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.detailsIdentificationData$ = this.detailsIdentificationSource.asObservable();
        this.crewPassengersAndDimensionsSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.crewPassengersAndDimensionsData$ = this.crewPassengersAndDimensionsSource.asObservable();
        this.crewPassengersAndDimensionsMeta = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            valid: true
        });
        this.crewPassengersAndDimensionsMeta$ = this.crewPassengersAndDimensionsMeta.asObservable();
        this.reportingForThisPortCallSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.reportingForThisPortCallData$ = this.reportingForThisPortCallSource.asObservable();
        this.portCallPurposeDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.portCallPurposeData$ = this.portCallPurposeDataSource.asObservable();
        this.otherPurposeNameSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.otherPurposeName$ = this.otherPurposeNameSource.asObservable();
        this.otherPurposeDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.otherPurposeData$ = this.otherPurposeDataSource.asObservable();
        this.clearanceDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.clearanceData$ = this.clearanceDataSource.asObservable();
        this.clearanceListDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.clearanceListData$ = this.clearanceListDataSource.asObservable();
        // Port call
        this.portCallUrl = 'api/portcall';
        this.portCallUserUrl = 'api/portcall/user';
        this.updatePortCallStatusActiveUrl = 'api/portcall/updatestatus/active';
        this.updatePortCallStatusCancelledUrl = 'api/portcall/updatestatus/cancelled';
        // Purpose
        this.purposePortCallUrl = 'api/purpose/portcall';
        this.purposeOtherNameUrl = 'api/purpose/othername';
        // Details
        this.detailsUrl = 'api/portcalldetails';
        this.detailsPortCallUrl = 'api/portcalldetails/portcall';
        // Clearance
        this.clearanceUrl = 'api/organizationportcall';
        this.clearancePortCallUrl = 'api/organizationportcall/portcall';
    }
    // Helper method for ETA/ETD formatting
    PortCallService.prototype.etaEtdDataFormat = function (arrival, departure) {
        var etaData = new Date(arrival);
        var etdData = new Date(departure);
        return {
            eta: {
                year: etaData.getFullYear(),
                month: etaData.getMonth() + 1,
                day: etaData.getDate(),
                hour: etaData.getHours(),
                minute: etaData.getMinutes()
            },
            etd: {
                year: etdData.getFullYear(),
                month: etdData.getMonth() + 1,
                day: etdData.getDate(),
                hour: etdData.getHours(),
                minute: etdData.getMinutes()
            }
        };
    };
    PortCallService.prototype.setUpdateOverview = function (data) {
        this.updateOverviewSource.next(data);
    };
    /** * * * * * * * * * * *
     *                       *
     *  == NEW PORT CALL ==  *
     *                       *
     * * * * * * * * * * * * */
    // setPortCall: sets values for: Ship, Location, ETA/ETD, and Clearance list
    PortCallService.prototype.setPortCall = function (overview) {
        // Ship Location Time
        this.setShipData(overview.ship);
        this.setLocationData(overview.location);
        var etaEtd = this.etaEtdDataFormat(overview.portCall.locationEta, overview.portCall.locationEtd);
        this.setEtaEtdData(etaEtd);
        // Clearance list
        this.setClearanceListData(overview.clearanceList);
        this.setPortCallStatus(overview.status);
    };
    PortCallService.prototype.updatePortCall = function (portCall) {
        console.log('Updating port call...');
        var authHeaders = this.authRequestService.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: authHeaders });
        return this.http
            .put(this.portCallUrl, portCall, options)
            .map(function (res) { return res.json(); });
    };
    PortCallService.prototype.setShipData = function (data) {
        this.shipDataSource.next(data);
    };
    PortCallService.prototype.setLocationData = function (data) {
        this.locationDataSource.next(data);
    };
    PortCallService.prototype.setEtaEtdData = function (data) {
        this.etaEtdDataSource.next(data);
    };
    PortCallService.prototype.setPortCallStatus = function (data) {
        this.portCallStatusSource.next(data);
    };
    // REGISTER NEW PORT CALL
    PortCallService.prototype.registerNewPortCall = function (portCall) {
        // NEW
        console.log('Registering new port call...');
        var authHeaders = this.authRequestService.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: authHeaders });
        var uri = this.portCallUrl;
        this.setPortCallStatus('Draft');
        return this.http.post(uri, portCall, options).map(function (res) { return res.json(); });
    };
    // Set port call status to actual
    PortCallService.prototype.updatePortCallStatusActive = function (portCallId) {
        var uri = [this.updatePortCallStatusActiveUrl, portCallId].join('/');
        console.log('Updating port call status to active...');
        return this.http.post(uri, null).map(function (res) { return res.json(); });
    };
    // Set port call status to cancelled
    PortCallService.prototype.updatePortCallStatusCancelled = function (portCallId) {
        var uri = [this.updatePortCallStatusCancelledUrl, portCallId].join('/');
        console.log('Updating port call status to cancelled...');
        this.http
            .post(uri, null)
            .map(function (res) { return res.json(); })
            .subscribe(function (updateStatusResponse) {
            console.log('Port call successfully cancelled.');
        });
    };
    // Delete port call draft
    PortCallService.prototype.deletePortCallDraft = function (portCall) {
        console.log('Deleting port call...');
        var authHeaders = this.authRequestService.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            headers: authHeaders,
            body: portCall
        });
        var uri = this.portCallUrl;
        return this.http.delete(uri, options).map(function (res) { return res.json(); });
    };
    // Get methods
    PortCallService.prototype.getPortCallById = function (portCallId) {
        var uri = [this.portCallUrl, portCallId].join('/');
        return this.http.get(uri).map(function (res) { return res.json(); });
    };
    PortCallService.prototype.getPortCallsByUserId = function (userId) {
        var uri = [this.portCallUserUrl, userId].join('/');
        return this.http.get(uri).map(function (res) { return res.json(); });
    };
    /** * * * * * * * * * * * * *
     *                           *
     * == PORT CALL DETAILS ==   *
     *                           *
     * * * * * * * * * * * * * * */
    PortCallService.prototype.setDetails = function (details) {
        // NEW
        this.setCrewPassengersAndDimensionsData(details);
        this.setReportingForThisPortCallData(details);
        this.setDetailsIdentificationData(details);
        this.detailsPristine.next(true);
    };
    PortCallService.prototype.setDetailsIdentificationData = function (data) {
        this.detailsPristine.next(false);
        this.detailsIdentificationSource.next(data);
    };
    // Crew, passengers and dimensions
    PortCallService.prototype.setCrewPassengersAndDimensionsData = function (data) {
        // NEW
        this.detailsPristine.next(false);
        this.crewPassengersAndDimensionsSource.next(data);
    };
    PortCallService.prototype.setCrewPassengersAndDimensionsMeta = function (metaData) {
        this.crewPassengersAndDimensionsMeta.next(metaData);
    };
    // Reporting
    // This is a list of checkboxes that specify which FAL forms to include in this port call registration
    PortCallService.prototype.setReportingForThisPortCallData = function (data) {
        // NEW
        this.detailsPristine.next(false);
        this.reportingForThisPortCallSource.next(data);
    };
    // Purpose
    PortCallService.prototype.setPortCallPurposeData = function (data) {
        // NEW
        this.detailsPristine.next(false);
        this.portCallPurposeDataSource.next(data);
    };
    // User-specified purpose of type "Other"
    PortCallService.prototype.setOtherPurposeName = function (data) {
        this.detailsPristine.next(false);
        this.otherPurposeNameSource.next(data);
    };
    PortCallService.prototype.setOtherPurposeData = function (data) {
        // NEW - try to use otherpurpose object instead of just name string, for easier id handling etc.
        this.otherPurposeDataSource.next(data);
    };
    PortCallService.prototype.savePrevAndNextPortCall = function (portCallId, prevPortOfCall, nextPortCall, prevEtd, nextEta) {
        var _this = this;
        // const updatedPortCallData = new PortCallModel();
        this.getPortCallById(portCallId).subscribe(function (data) {
            if (data) {
                var updatedPortCallData = data;
                updatedPortCallData.previousLocationId = prevPortOfCall != null ? prevPortOfCall.locationId : null;
                updatedPortCallData.nextLocationId = nextPortCall != null ? nextPortCall.locationId : null;
                updatedPortCallData.previousLocationEtd = prevEtd;
                updatedPortCallData.nextLocationEta = nextEta;
                console.log(updatedPortCallData);
                _this.updatePortCall(updatedPortCallData).subscribe(function (result) {
                    console.log(result);
                    _this.prevAndNextPocService.setDataPristine(true);
                }, function (error) {
                    console.log(error);
                });
            }
        });
    };
    // SAVE DETAILS
    PortCallService.prototype.saveDetails = function (details, purposes, otherName) {
        var _this = this;
        details.portCallDetailsId = details.portCallId; // To ensure one-to-one in DB
        console.log('Saving port call details...');
        this.http
            .post(this.detailsUrl, details)
            .map(function (res) { return res.json(); })
            .subscribe(function (detailsResponse) {
            console.log('Successfully saved port call details.');
            _this.savePurposesForPortCall(details.portCallId, purposes, otherName);
        });
    };
    PortCallService.prototype.savePurposesForPortCall = function (pcId, purposes, otherName) {
        var _this = this;
        if (purposes.length === 0) {
            var uri = [this.purposePortCallUrl, pcId.toString()].join('/');
            this.http
                .delete(uri, null)
                .map(function (res) { return res.json(); })
                .subscribe(function (removePurposeResponse) {
                if (removePurposeResponse) {
                    _this.detailsPristine.next(true);
                }
            });
        }
        else {
            var pcHasPurposeList = purposes.map(function (p) {
                return {
                    portCallId: pcId,
                    portCallPurposeId: p.portCallPurposeId,
                    purposeIfUnknown: p.name === 'Other' ? otherName : null
                };
            });
            console.log('Saving port call purposes to database...');
            this.http
                .put(this.purposePortCallUrl, pcHasPurposeList)
                .map(function (res) { return res.json(); })
                .subscribe(function (purposeResponse) {
                if (purposeResponse) {
                    _this.detailsPristine.next(true);
                }
                console.log('Purposes successfully saved.');
            });
        }
    };
    // Get methods
    PortCallService.prototype.getDetailsByPortCallId = function (portCallId) {
        var uri = [this.detailsPortCallUrl, portCallId].join('/');
        return this.http
            .get(uri)
            .map(function (res) {
            if (res && res.ok) {
                return res.json();
            }
            else {
                return res.status;
            }
        })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(e);
        });
    };
    PortCallService.prototype.getPurposeByPortCallId = function (portCallId) {
        var uri = [this.purposePortCallUrl, portCallId].join('/');
        return this.http
            .get(uri)
            .map(function (res) {
            return res.json();
        })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(e);
        });
    };
    PortCallService.prototype.getOtherName = function (portCallId) {
        var uri = [this.purposeOtherNameUrl, portCallId].join('/');
        return this.http
            .get(uri)
            .map(function (res) {
            return res.json();
        })
            .catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(e);
        });
    };
    /** * * * * * * * * *
     *                   *
     *  == CLEARANCE ==  *
     *                   *
     * * * * * * * * * * */
    PortCallService.prototype.setClearance = function (data) {
        this.clearanceDataSource.next(data);
    };
    // Clearance agencies list
    PortCallService.prototype.setClearanceListData = function (data) {
        // NEW
        this.clearanceListDataSource.next(data);
    };
    PortCallService.prototype.saveClearance = function (clearanceModel) {
        console.log('Saving clearance to database...');
        this.http
            .put(this.clearanceUrl, clearanceModel)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('Clearance saved successfully.');
        }, function (error) {
            console.log('ERROR: ', error);
        });
    };
    PortCallService.prototype.getClearanceListForPortCall = function (portCallId) {
        var uri = [this.clearancePortCallUrl, portCallId].join('/');
        return this.http.get(uri).map(function (res) {
            return res.json().catch(function (error) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(error);
            });
        });
    };
    // REGISTER CLEARANCE AGENCIES FOR NEW PORT CALL
    PortCallService.prototype.registerClearanceAgenciesForPortCall = function (portCall) {
        var _this = this;
        // NEW
        this.http
            .post(this.clearanceUrl, portCall)
            .map(function (res) { return res.json(); })
            .subscribe(function (clearanceData) {
            console.log('Clearance agency information successfully added to port call.');
            _this.clearanceListDataSource.next(clearanceData);
        });
    };
    // Wipe methods
    PortCallService.prototype.wipeServiceData = function () {
        this.shipDataSource.next(null);
        this.locationDataSource.next(null);
        this.etaEtdDataSource.next(null);
        this.clearanceListDataSource.next(null);
        // Details
        this.wipeDetailsData();
    };
    PortCallService.prototype.wipeDetailsData = function () {
        this.reportingForThisPortCallSource.next(null);
        this.crewPassengersAndDimensionsSource.next(null);
        this.portCallPurposeDataSource.next(null);
        this.otherPurposeNameSource.next('');
        this.detailsPristine.next(true);
    };
    PortCallService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_5__auth_request_service__["a" /* AuthRequest */], __WEBPACK_IMPORTED_MODULE_6__prev_and_next_poc_service__["a" /* PrevAndNextPocService */]])
    ], PortCallService);
    return PortCallService;
}());



/***/ }),

/***/ "./src/app/shared/services/prev-and-next-poc.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevAndNextPocService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_service__ = __webpack_require__("./src/app/shared/services/base.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrevAndNextPocService = /** @class */ (function (_super) {
    __extends(PrevAndNextPocService, _super);
    function PrevAndNextPocService() {
        var _this = _super.call(this) || this;
        _this.prevPortOfCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.prevPortOfCallData$ = _this.prevPortOfCallSource.asObservable();
        _this.nextPortOfCallSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.nextPortOfCallData$ = _this.nextPortOfCallSource.asObservable();
        _this.prevPortOfCallEtdSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.prevPortOfCallEtdData$ = _this.prevPortOfCallEtdSource.asObservable();
        _this.nextPortOfCallEtaSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        _this.nextPortOfCallEtaData$ = _this.nextPortOfCallEtaSource.asObservable();
        _this.prevAndNextPortOfCallMeta = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({
            valid: true
        });
        _this.prevAndNextPortOfCallMeta$ = _this.prevAndNextPortOfCallMeta.asObservable();
        _this.dataIsPristine = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        _this.dataIsPristine$ = _this.dataIsPristine.asObservable();
        return _this;
    }
    PrevAndNextPocService.prototype.setDataPristine = function (data) {
        this.dataIsPristine.next(data);
    };
    PrevAndNextPocService.prototype.setPrevPortOfCall = function (prevPortOfCall) {
        this.dataIsPristine.next(false);
        this.prevPortOfCallSource.next(prevPortOfCall);
    };
    PrevAndNextPocService.prototype.setNextPortOfCall = function (nextPortOfCall) {
        this.dataIsPristine.next(false);
        this.nextPortOfCallSource.next(nextPortOfCall);
    };
    PrevAndNextPocService.prototype.setPrevPortOfCallEtd = function (prevPortOfCallEtd) {
        this.dataIsPristine.next(false);
        this.prevPortOfCallEtdSource.next(prevPortOfCallEtd);
    };
    PrevAndNextPocService.prototype.setNextPortOfCallEta = function (nextPortOfCallEta) {
        this.dataIsPristine.next(false);
        this.nextPortOfCallEtaSource.next(nextPortOfCallEta);
    };
    PrevAndNextPocService.prototype.setPrevAndNextPortOfCallMeta = function (metaData) {
        this.prevAndNextPortOfCallMeta.next(metaData);
    };
    PrevAndNextPocService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PrevAndNextPocService);
    return PrevAndNextPocService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/shared/services/purpose.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurposeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PurposeService = /** @class */ (function () {
    function PurposeService(http) {
        this.http = http;
        this.purposeUrl = 'api/purpose';
    }
    PurposeService.prototype.getPurposes = function () {
        return this.http.get(this.purposeUrl).map(function (res) { return res.json(); });
    };
    PurposeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], PurposeService);
    return PurposeService;
}());



/***/ }),

/***/ "./src/app/shared/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (baseUrl, term, amount) {
        if (amount === void 0) { amount = 10; }
        var encodedTerm = encodeURIComponent(term);
        var uri = [baseUrl, encodedTerm, amount].join('/');
        return this.http.get(uri).map(function (res) { return res.json(); });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/services/ship.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_request_service__ = __webpack_require__("./src/app/shared/services/auth.request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShipService = /** @class */ (function () {
    function ShipService(http, authRequest) {
        this.http = http;
        this.authRequest = authRequest;
        this.shipUrl = 'api/ship';
        this.shipTypeUrl = 'api/shiptype';
        this.hullTypeUrl = 'api/shiphulltype';
        this.lengthTypeUrl = 'api/shiplengthtype';
        this.breadthTypeUrl = 'api/shipbreadthtype';
        this.powerTypeUrl = 'api/shippowertype';
        this.shipSourceUrl = 'api/shipsource';
        this.shipStatusListUrl = 'api/shipstatus';
        this.contactListShipUrl = 'api/shipcontact/ship';
        this.shipContactListUrl = 'api/shipcontact/list';
        this.shipOverviewDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.shipOverviewData$ = this.shipOverviewDataSource.asObservable();
        this.shipSearchDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.shipSearchData$ = this.shipSearchDataSource.asObservable();
    }
    ShipService.prototype.registerShip = function (newShip) {
        var auth_header = this.authRequest.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: auth_header });
        return this.http
            .post(this.shipUrl, newShip, options)
            .map(function (res) { return res.json(); });
    };
    ShipService.prototype.getShip = function (id) {
        var uri = [this.shipUrl, id].join('/');
        return this.http.get(uri)
            .map(function (res) { return res.json(); });
    };
    ShipService.prototype.setShipOverviewData = function (data) {
        this.shipOverviewDataSource.next(data);
    };
    ShipService.prototype.setShipSearchData = function (data) {
        this.shipSearchDataSource.next(data);
    };
    ShipService.prototype.updateShip = function (ship) {
        var auth_header = this.authRequest.GetHeaders();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: auth_header });
        return this.http.put(this.shipUrl, ship, options)
            .map(function (res) { return res.json(); });
    };
    ShipService.prototype.saveShipContactList = function (shipContactList) {
        return this.http.post(this.shipContactListUrl, shipContactList)
            .map(function (res) { return res.json(); });
    };
    ShipService.prototype.getShipTypes = function () {
        return this.http.get(this.shipTypeUrl).map(function (res) { return res.json(); });
    };
    ShipService.prototype.getHullTypes = function () {
        return this.http.get(this.hullTypeUrl).map(function (res) { return res.json(); });
    };
    ShipService.prototype.getLengthTypes = function () {
        return this.http.get(this.lengthTypeUrl).map(function (res) { return res.json(); });
    };
    ShipService.prototype.getBreadthTypes = function () {
        return this.http.get(this.breadthTypeUrl).map(function (res) { return res.json(); });
    };
    ShipService.prototype.getPowerTypes = function () {
        return this.http.get(this.powerTypeUrl).map(function (res) { return res.json(); });
    };
    ShipService.prototype.getShipSources = function () {
        return this.http.get(this.shipSourceUrl).map(function (res) { return res.json(); });
    };
    ShipService.prototype.getShipStatusList = function () {
        return this.http.get(this.shipStatusListUrl).map(function (res) { return res.json(); });
    };
    ShipService.prototype.getContactList = function (shipId) {
        var uri = [this.contactListShipUrl, shipId].join('/');
        return this.http.get(uri).map(function (res) { return res.json(); });
    };
    ShipService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__auth_request_service__["a" /* AuthRequest */]])
    ], ShipService);
    return ShipService;
}());



/***/ }),

/***/ "./src/app/shared/services/uri-query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UriQueryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_token_query_model__ = __webpack_require__("./src/app/shared/models/token-query-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UriQueryService = /** @class */ (function () {
    function UriQueryService() {
    }
    UriQueryService.prototype.getTokenQueryModel = function (queryParams) {
        // console.log({hasProperties: this.hasProperties(queryParams)});
        if (this.hasProperties(queryParams) && !this.anyParamsNull(queryParams)) {
            return new __WEBPACK_IMPORTED_MODULE_1__models_token_query_model__["a" /* TokenQueryModel */](queryParams['userId'], queryParams['token']);
        }
        return null;
    };
    UriQueryService.prototype.anyParamsNull = function (queryParams) {
        return this.paramNull(queryParams.userId) && this.paramNull(queryParams.token);
    };
    UriQueryService.prototype.paramNull = function (param) {
        return !param || param === '';
    };
    UriQueryService.prototype.hasProperties = function (queryParams) {
        /* console.log({
          'userId': queryParams['userId'],
          'token': queryParams['token']
        });
        console.log({
          'hasUserId': !!queryParams['userId'],
          'hasToken': !!queryParams['token']
        }); */
        return !!queryParams['userId'] && !!queryParams['token'];
    };
    UriQueryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UriQueryService);
    return UriQueryService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_components_organization_smart_table_organization_button_row_organization_button_row_component__ = __webpack_require__("./src/app/shared/components/organization-smart-table/organization-button-row/organization-button-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_shared_components_organization_smart_table_organization_smart_table_component__ = __webpack_require__("./src/app/shared/components/organization-smart-table/organization-smart-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_shared_components_ship_smart_table_ship_button_row_ship_button_row_component__ = __webpack_require__("./src/app/shared/components/ship-smart-table/ship-button-row/ship-button-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_shared_services_db_connection_service__ = __webpack_require__("./src/app/shared/services/db-connection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_confirmation_modal_confirmation_modal_component__ = __webpack_require__("./src/app/shared/components/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_confirmation_view_clearances_clearances_component__ = __webpack_require__("./src/app/shared/components/confirmation-view/clearances/clearances.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_confirmation_view_confirmation_view_component__ = __webpack_require__("./src/app/shared/components/confirmation-view/confirmation-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_confirmation_view_port_call_details_port_call_details_component__ = __webpack_require__("./src/app/shared/components/confirmation-view/port-call-details/port-call-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_confirmation_view_port_call_details_selected_purposes_selected_purposes_component__ = __webpack_require__("./src/app/shared/components/confirmation-view/port-call-details/selected-purposes/selected-purposes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_contact_select_contact_select_component__ = __webpack_require__("./src/app/shared/components/contact-select/contact-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_date_time_picker_date_time_picker_component__ = __webpack_require__("./src/app/shared/components/date-time-picker/date-time-picker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_location_info_table_location_info_table_component__ = __webpack_require__("./src/app/shared/components/location-info-table/location-info-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_location_time_info_table_location_time_info_table_component__ = __webpack_require__("./src/app/shared/components/location-time-info-table/location-time-info-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_prev_and_next_poc_table_prev_and_next_poc_table_component__ = __webpack_require__("./src/app/shared/components/prev-and-next-poc-table/prev-and-next-poc-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_search_location_search_location_component__ = __webpack_require__("./src/app/shared/components/search-location/search-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_search_organization_search_organization_component__ = __webpack_require__("./src/app/shared/components/search-organization/search-organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_search_ship_flag_code_search_ship_flag_code_component__ = __webpack_require__("./src/app/shared/components/search-ship-flag-code/search-ship-flag-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_search_ship_search_ship_component__ = __webpack_require__("./src/app/shared/components/search-ship/search-ship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_select_ship_contact_select_ship_contact_component__ = __webpack_require__("./src/app/shared/components/select-ship-contact/select-ship-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_selected_contact_mediums_selected_contact_mediums_component__ = __webpack_require__("./src/app/shared/components/selected-contact-mediums/selected-contact-mediums.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_ship_info_table_ship_info_table_component__ = __webpack_require__("./src/app/shared/components/ship-info-table/ship-info-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_ship_smart_table_ship_smart_table_component__ = __webpack_require__("./src/app/shared/components/ship-smart-table/ship-smart-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_ssn_bg_ssn_bg_component__ = __webpack_require__("./src/app/shared/components/ssn-bg/ssn-bg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_ssn_card_ssn_card_component__ = __webpack_require__("./src/app/shared/components/ssn-card/ssn-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_ssn_table_ssn_table_component__ = __webpack_require__("./src/app/shared/components/ssn-table/ssn-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_table_card_table_card_component__ = __webpack_require__("./src/app/shared/components/table-card/table-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_location_service__ = __webpack_require__("./src/app/shared/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_organization_service__ = __webpack_require__("./src/app/shared/services/organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__utils_custom_validators_integer_validator_directive__ = __webpack_require__("./src/app/shared/utils/custom-validators/integer-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__utils_custom_validators_number_validator_directive__ = __webpack_require__("./src/app/shared/utils/custom-validators/number-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__utils_custom_validators_positive_number_validator_directive__ = __webpack_require__("./src/app/shared/utils/custom-validators/positive-number-validator.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__["a" /* NgSelectModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__components_confirmation_view_clearances_clearances_component__["a" /* ClearancesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_confirmation_view_confirmation_view_component__["a" /* ConfirmationViewComponent */],
                __WEBPACK_IMPORTED_MODULE_35__utils_custom_validators_integer_validator_directive__["a" /* IntegerValidator */],
                __WEBPACK_IMPORTED_MODULE_17__components_location_info_table_location_info_table_component__["a" /* LocationInfoTableComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_location_time_info_table_location_time_info_table_component__["a" /* LocationTimeInfoTableComponent */],
                __WEBPACK_IMPORTED_MODULE_36__utils_custom_validators_number_validator_directive__["a" /* NumberValidator */],
                __WEBPACK_IMPORTED_MODULE_5_app_shared_components_organization_smart_table_organization_button_row_organization_button_row_component__["a" /* OrganizationButtonRowComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_shared_components_organization_smart_table_organization_smart_table_component__["a" /* OrganizationSmartTableComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_confirmation_view_port_call_details_port_call_details_component__["a" /* PortCallDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_37__utils_custom_validators_positive_number_validator_directive__["a" /* PositiveNumberValidator */],
                __WEBPACK_IMPORTED_MODULE_20__components_search_location_search_location_component__["a" /* SearchLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_search_organization_search_organization_component__["a" /* SearchOrganizationComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_search_ship_search_ship_component__["a" /* SearchShipComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_selected_contact_mediums_selected_contact_mediums_component__["a" /* SelectedContactMediumsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_confirmation_view_port_call_details_selected_purposes_selected_purposes_component__["a" /* SelectedPurposesComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_select_ship_contact_select_ship_contact_component__["a" /* SelectShipContactComponent */],
                __WEBPACK_IMPORTED_MODULE_7_app_shared_components_ship_smart_table_ship_button_row_ship_button_row_component__["a" /* ShipButtonRowComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_ship_info_table_ship_info_table_component__["a" /* ShipInfoTableComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_ship_smart_table_ship_smart_table_component__["a" /* ShipSmartTableComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_ssn_bg_ssn_bg_component__["a" /* SsnBgComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_ssn_card_ssn_card_component__["a" /* SsnCardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_table_card_table_card_component__["a" /* TableCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_date_time_picker_date_time_picker_component__["a" /* DateTimePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_ssn_table_ssn_table_component__["a" /* SsnTableComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_prev_and_next_poc_table_prev_and_next_poc_table_component__["a" /* PrevAndNextPocTableComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_search_ship_flag_code_search_ship_flag_code_component__["a" /* SearchShipFlagCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_contact_select_contact_select_component__["a" /* ContactSelectComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_10__components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_confirmation_view_confirmation_view_component__["a" /* ConfirmationViewComponent */],
                __WEBPACK_IMPORTED_MODULE_35__utils_custom_validators_integer_validator_directive__["a" /* IntegerValidator */],
                __WEBPACK_IMPORTED_MODULE_17__components_location_info_table_location_info_table_component__["a" /* LocationInfoTableComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_location_time_info_table_location_time_info_table_component__["a" /* LocationTimeInfoTableComponent */],
                __WEBPACK_IMPORTED_MODULE_36__utils_custom_validators_number_validator_directive__["a" /* NumberValidator */],
                __WEBPACK_IMPORTED_MODULE_6_app_shared_components_organization_smart_table_organization_smart_table_component__["a" /* OrganizationSmartTableComponent */],
                __WEBPACK_IMPORTED_MODULE_37__utils_custom_validators_positive_number_validator_directive__["a" /* PositiveNumberValidator */],
                __WEBPACK_IMPORTED_MODULE_20__components_search_location_search_location_component__["a" /* SearchLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_search_organization_search_organization_component__["a" /* SearchOrganizationComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_search_ship_search_ship_component__["a" /* SearchShipComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_selected_contact_mediums_selected_contact_mediums_component__["a" /* SelectedContactMediumsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_select_ship_contact_select_ship_contact_component__["a" /* SelectShipContactComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_ship_info_table_ship_info_table_component__["a" /* ShipInfoTableComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_ship_smart_table_ship_smart_table_component__["a" /* ShipSmartTableComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_ssn_bg_ssn_bg_component__["a" /* SsnBgComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_ssn_card_ssn_card_component__["a" /* SsnCardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_table_card_table_card_component__["a" /* TableCardComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_date_time_picker_date_time_picker_component__["a" /* DateTimePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_ssn_table_ssn_table_component__["a" /* SsnTableComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_prev_and_next_poc_table_prev_and_next_poc_table_component__["a" /* PrevAndNextPocTableComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_search_ship_flag_code_search_ship_flag_code_component__["a" /* SearchShipFlagCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_contact_select_contact_select_component__["a" /* ContactSelectComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_32__services_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_33__services_organization_service__["a" /* OrganizationService */],
                __WEBPACK_IMPORTED_MODULE_34__services_ship_service__["a" /* ShipService */],
                __WEBPACK_IMPORTED_MODULE_8_app_shared_services_db_connection_service__["a" /* DbConnectionService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__components_confirmation_modal_confirmation_modal_component__["a" /* ConfirmationModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7_app_shared_components_ship_smart_table_ship_button_row_ship_button_row_component__["a" /* ShipButtonRowComponent */],
                __WEBPACK_IMPORTED_MODULE_5_app_shared_components_organization_smart_table_organization_button_row_organization_button_row_component__["a" /* OrganizationButtonRowComponent */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils/base.request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared_services_base_service__ = __webpack_require__("./src/app/shared/services/base.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BaseRequest = /** @class */ (function (_super) {
    __extends(BaseRequest, _super);
    function BaseRequest(configService, authRequestService) {
        var _this = _super.call(this) || this;
        _this.configService = configService;
        _this.authRequestService = authRequestService;
        _this.baseUrl = _this.configService.getApiURI();
        return _this;
    }
    BaseRequest.prototype.getRequestOptions = function () {
        var headers = this.authRequestService.GetHeaders();
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return requestOptions;
    };
    return BaseRequest;
}(__WEBPACK_IMPORTED_MODULE_1_app_shared_services_base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/shared/utils/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
// Based on https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/src/app/shared/utils/config.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiURI = 'api';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/utils/custom-validators/integer-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntegerValidator; });
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


var IntegerValidator = /** @class */ (function () {
    function IntegerValidator() {
    }
    IntegerValidator_1 = IntegerValidator;
    IntegerValidator.prototype.validate = function (c) {
        if (c.value !== undefined &&
            (isNaN(c.value) || c.value - Math.floor(c.value) !== 0)) {
            return { notIntegerError: true };
        }
        return null;
    };
    IntegerValidator = IntegerValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: 
            // tslint:disable-next-line:directive-selector
            '[integerValidator][formControlName],[integerValidator][formControl],[integerValidator][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* forwardRef */])(function () { return IntegerValidator_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], IntegerValidator);
    return IntegerValidator;
    var IntegerValidator_1;
}());



/***/ }),

/***/ "./src/app/shared/utils/custom-validators/number-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberValidator; });
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


var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
    }
    NumberValidator_1 = NumberValidator;
    NumberValidator.prototype.validate = function (c) {
        if (c.value !== undefined && c.value === null) {
            return { notNumberError: true };
        }
        return null;
    };
    NumberValidator = NumberValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: 
            // tslint:disable-next-line:directive-selector
            '[numberValidator][formControlName],[numberValidator][formControl],[numberValidator][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* forwardRef */])(function () { return NumberValidator_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], NumberValidator);
    return NumberValidator;
    var NumberValidator_1;
}());



/***/ }),

/***/ "./src/app/shared/utils/custom-validators/positive-number-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositiveNumberValidator; });
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


var PositiveNumberValidator = /** @class */ (function () {
    function PositiveNumberValidator() {
    }
    PositiveNumberValidator_1 = PositiveNumberValidator;
    PositiveNumberValidator.prototype.validate = function (c) {
        if (c.value !== undefined && (isNaN(c.value) || c.value < 0)) {
            return { notPositiveNumberError: true };
        }
        return null;
    };
    PositiveNumberValidator = PositiveNumberValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: 
            // tslint:disable-next-line:directive-selector
            '[positiveNumberValidator][formControlName],[positiveNumberValidator][formControl],[positiveNumberValidator][ngModel]',
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALIDATORS */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* forwardRef */])(function () { return PositiveNumberValidator_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PositiveNumberValidator);
    return PositiveNumberValidator;
    var PositiveNumberValidator_1;
}());



/***/ }),

/***/ "./src/authenticate-xhr.backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateXHRBackend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// sweet global way to handle 401s - works in tandem with existing AuthGuard route checks
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
var AuthenticateXHRBackend = /** @class */ (function (_super) {
    __extends(AuthenticateXHRBackend, _super);
    function AuthenticateXHRBackend(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        return _super.call(this, _browserXhr, _baseResponseOptions, _xsrfStrategy) || this;
    }
    AuthenticateXHRBackend.prototype.createConnection = function (request) {
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
        });
        return xhrConnection;
    };
    AuthenticateXHRBackend = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BrowserXhr */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* ResponseOptions */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* XSRFStrategy */]])
    ], AuthenticateXHRBackend);
    return AuthenticateXHRBackend;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["g" /* XHRBackend */]));



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
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