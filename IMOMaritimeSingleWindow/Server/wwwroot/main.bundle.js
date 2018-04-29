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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_content_main_content_component__ = __webpack_require__("./src/app/main-content/main-content.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__main_content_main_content_component__["a" /* MainContentComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authenticate_xhr_backend__ = __webpack_require__("./src/authenticate-xhr.backend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_content_main_content_component__ = __webpack_require__("./src/app/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_content_header_header_component__ = __webpack_require__("./src/app/main-content/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_content_content_container_content_container_module__ = __webpack_require__("./src/app/main-content/content-container/content-container.module.ts");
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
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__main_content_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__main_content_main_content_component__["a" /* MainContentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__main_content_content_container_content_container_module__["a" /* ContentContainerModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot()
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_http__["h" /* XHRBackend */], useClass: __WEBPACK_IMPORTED_MODULE_8__authenticate_xhr_backend__["a" /* AuthenticateXHRBackend */] },
                __WEBPACK_IMPORTED_MODULE_7__shared_utils_config_service__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_services_content_service__["a" /* ContentService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron bg-ssn-light text-ssn mt-5\">\r\n    <h2>LOGIN</h2>\r\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"email\" class=\"col-form-label-sm no-wrap col-sm-3 col-md-2 col-lg-2\">Email address:</label>\r\n        <div class=\"col my-auto\">\r\n          <input id=\"email\" name=\"email\" type=\"email\" class=\"form-control form-control-sm\" required placeholder=\"Enter email address\"\r\n            [(ngModel)]=\"credentials.username\" #email=\"ngModel\" tmFocus validateEmail>\r\n          <small *ngIf=\"!email.valid && (!email.pristine || submitted)\" class=\"text-danger\">Please enter a valid email</small>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"password\" class=\"col-form-label-sm no-wrap col-sm-3 col-md-2 col-lg-2\">Password:</label>\r\n        <div class=\"col my-auto\">\r\n          <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control form-control-sm\" required placeholder=\"Enter password\"\r\n            [(ngModel)]=\"credentials.password\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" class=\"btn btn-light\" [disabled]=\"f.invalid || isRequesting\">SIGN IN</button>\r\n      </div>\r\n\r\n      <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Something went wrong!</strong> {{errors}}\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function LoginComponent(loginService, router, activatedRoute) {
        this.loginService = loginService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.login_title = "LOGIN";
        this.submitted = false;
        this.credentials = { username: '', password: '' };
    }
    LoginComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.loginService.login(value.username, value.password)
                .finally(function () { return _this.isRequesting = false; })
                .subscribe(function (result) {
                if (result) {
                    _this.router.navigate(['']);
                }
            }, function (error) { return _this.errors = error; });
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.username = param['username'];
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/location-form/location-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/location-form/location-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Location details</h4>\r\n    <div class=\"form-group\">\r\n      <label for=\"location_name\">Location name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"location_name\" placeholder=\"Enter location name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"location_code\">Location code</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"location_code\" placeholder=\"Enter location code\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"post_code\">Post code</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"post_code\" placeholder=\"Enter post code\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"location_type\">Location type</label>\r\n      <select class=\"form-control\" id=\"location_type\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"country\">Country</label>\r\n      <select class=\"form-control\" id=\"country\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"location_source\">Location source</label>\r\n      <select class=\"form-control\" id=\"location_source\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"department\">Department</label>\r\n      <select class=\"form-control\" id=\"department\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Position</h4>\r\n    <div class=\"form-group\">\r\n      <label for=\"geometry\">Geometry string</label>\r\n      <textarea class=\"form-control\" rows=\"5\" id=\"geometry\"></textarea>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Confirm</h4>\r\n    <button type=\"submit\" class=\"btn btn-ssn\">Create new location</button>\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/location-form/location-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationFormComponent; });
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

var LocationFormComponent = /** @class */ (function () {
    function LocationFormComponent() {
    }
    LocationFormComponent.prototype.ngOnInit = function () {
    };
    LocationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-location-form',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/location/location-form/location-form.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/location/location-form/location-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationFormComponent);
    return LocationFormComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-ssn\">\r\n    <h3 class=\"text-ssn\">Register Location</h3>\r\n  <app-location-form></app-location-form>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterLocationComponent; });
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

var RegisterLocationComponent = /** @class */ (function () {
    function RegisterLocationComponent() {
    }
    RegisterLocationComponent.prototype.ngOnInit = function () {
    };
    RegisterLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-location',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterLocationComponent);
    return RegisterLocationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/organization-form/organization-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/organization-form/organization-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Organization details</h4>\r\n    <div class=\"form-group\">\r\n      <label for=\"organization_name\">Organization Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"organization_name\" placeholder=\"Enter organization name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"organization_org_no\">Organisation number</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"organization_org_no\" placeholder=\"Enter organization organisation number\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"remark\">Remarks</label>\r\n      <textarea class=\"form-control\" rows=\"3\" id=\"remarks\"></textarea>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Contact information</h4>\r\n    <div class=\"form-group\">\r\n      <label for=\"phone\">Phone</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Enter phone number\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"fax\">Fax</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"fax\" placeholder=\"Enter fax\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email address\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Confirm</h4>\r\n    <button type=\"submit\" class=\"btn btn-ssn\">Create new companny</button>\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/organization-form/organization-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationFormComponent; });
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

var OrganizationFormComponent = /** @class */ (function () {
    function OrganizationFormComponent() {
    }
    OrganizationFormComponent.prototype.ngOnInit = function () {
    };
    OrganizationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-organization-form',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/organization/organization-form/organization-form.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/organization/organization-form/organization-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrganizationFormComponent);
    return OrganizationFormComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-ssn\">\r\n    <h3 class=\"text-ssn\">Register Organization</h3>\r\n  <app-organization-form></app-organization-form>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterOrganizationComponent; });
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

var RegisterOrganizationComponent = /** @class */ (function () {
    function RegisterOrganizationComponent() {
    }
    RegisterOrganizationComponent.prototype.ngOnInit = function () {
    };
    RegisterOrganizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-organization',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterOrganizationComponent);
    return RegisterOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/search-organization/search-organization.component.css":
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\r\n    font-style: italic;\r\n }\r\n :-moz-placeholder {\r\n    font-style: italic;  \r\n }\r\n ::-moz-placeholder {\r\n    font-style: italic;  \r\n }\r\n :-ms-input-placeholder {  \r\n    font-style: italic; \r\n }"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/search-organization/search-organization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n    <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n        <strong *ngIf=\"r.name\">Name: </strong> {{ r.name }}\r\n        <strong *ngIf=\"r.organizationNo\">Org.no.: </strong> {{ r.organizationNo }}\r\n    </ng-template>\r\n\r\n    <div *ngIf=\"!organizationSelected\">\r\n        <label for=\"search-organization\">Search using organization name or organisation number</label>\r\n        <input id=\"search-organization\" type=\"text\" class=\"form-control mx-auto\" [(ngModel)]=\"organizationModel\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\"\r\n            [inputFormatter]=\"formatter\" (selectItem)=\"selectOrganization($event)\" placeholder=\"Enter search here...\"/>\r\n    </div>\r\n\r\n    <div *ngIf=\"organizationSelected\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                    <tr class=\"bg-ssn text-ssn\">\r\n                        <th>Organization Name</th>\r\n                        <th>Organization Number</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>{{ organizationModel.name }}</td>\r\n                        <td>{{ organizationModel.organizationNo }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <button class=\"btn btn-ssn\" (click)=\"deselectOrganization()\">\r\n            <img src=\"assets/images/VoyageIcons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/organization/search-organization/search-organization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOrganizationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_organization_service__ = __webpack_require__("./src/app/shared/services/organization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
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
    function SearchOrganizationComponent(organizationService, shipService) {
        var _this = this;
        this.organizationService = organizationService;
        this.shipService = shipService;
        this.organizationSelected = false;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function () { return function () { return _this.searching = false; }; });
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) { return term.length < 2 ? [] :
                _this.organizationService.search(term); })
                .do(function () { return _this.searching = false; })
                .merge(_this.hideSearchingWhenUnsubscribed);
        };
        this.formatter = function (x) { return x.organizationId; };
    }
    SearchOrganizationComponent.prototype.selectOrganization = function ($event) {
        this.organizationSelected = true;
        this.shipService.setOrganizationData($event.item);
    };
    SearchOrganizationComponent.prototype.deselectOrganization = function () {
        this.organizationSelected = false;
        this.organizationModel = null;
        this.shipService.setOrganizationData(this.organizationModel);
    };
    SearchOrganizationComponent.prototype.ngOnInit = function () {
    };
    SearchOrganizationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-organization',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/organization/search-organization/search-organization.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/organization/search-organization/search-organization.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_services_organization_service__["a" /* OrganizationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_services_organization_service__["a" /* OrganizationService */], __WEBPACK_IMPORTED_MODULE_6__shared_services_ship_service__["a" /* ShipService */]])
    ], SearchOrganizationComponent);
    return SearchOrganizationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship-flag-code/search-ship-flag-code/search-ship-flag-code.component.css":
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\r\n    font-style: italic;\r\n }\r\n :-moz-placeholder {\r\n    font-style: italic;  \r\n }\r\n ::-moz-placeholder {\r\n    font-style: italic;  \r\n }\r\n :-ms-input-placeholder {  \r\n    font-style: italic; \r\n }"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship-flag-code/search-ship-flag-code/search-ship-flag-code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n    <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n        <img *ngIf=\"r.country.twoCharCode\" src=\"../../../../../../assets/images/Flags/{{ r.country.twoCharCode.toLowerCase() }}.png\" height=\"16px\"/>\r\n        <strong *ngIf=\"r.shipFlagCode.name\">Code: </strong> {{ r.shipFlagCode.name }}\r\n        <strong *ngIf=\"r.country.name\">Country: </strong> {{ r.country.name }}\r\n    </ng-template>\r\n\r\n    <div *ngIf=\"!shipFlagCodeSelected\">\r\n        <label for=\"search-shipFlagCode\">Search using flag code or name of country</label>\r\n        <input id=\"search-shipFlagCode\" type=\"text\" class=\"form-control mx-auto\" [(ngModel)]=\"shipFlagCodeModel\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\"\r\n            [inputFormatter]=\"formatter\" (selectItem)=\"selectShipFlagCode($event)\" placeholder=\"Enter search here...\"/>\r\n    </div>\r\n\r\n    <div *ngIf=\"shipFlagCodeSelected\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                    <tr class=\"bg-ssn text-ssn\">\r\n                        <th>Country Flag</th>\r\n                        <th>Ship Flag Code</th>\r\n                        <th>Country</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td><img src=\"../../../../../../assets/images/Flags/{{ shipFlagCodeModel.country.twoCharCode.toLowerCase() }}.png\" height=\"20px\"/></td>\r\n                        <td>{{ shipFlagCodeModel.shipFlagCode.name }}</td>\r\n                        <td>{{ shipFlagCodeModel.country.name }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <button class=\"btn btn-ssn\" (click)=\"deselectShipFlagCode()\">\r\n            <img src=\"assets/images/VoyageIcons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship-flag-code/search-ship-flag-code/search-ship-flag-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchShipFlagCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_ship_flag_code_service__ = __webpack_require__("./src/app/shared/services/ship-flag-code.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
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
    function SearchShipFlagCodeComponent(shipService) {
        var _this = this;
        this.shipService = shipService;
        this.shipFlagCodeSelected = false;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function () { return function () { return _this.searching = false; }; });
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) { return term.length < 2 ? [] :
                _this.shipService.searchFlagCode(term); })
                .do(function () { return _this.searching = false; })
                .merge(_this.hideSearchingWhenUnsubscribed);
        };
        this.formatter = function (x) { return x.shipFlagCodeId; };
    }
    SearchShipFlagCodeComponent.prototype.selectShipFlagCode = function ($event) {
        this.shipFlagCodeSelected = true;
        this.shipService.setShipFlagCodeData($event.item);
    };
    SearchShipFlagCodeComponent.prototype.deselectShipFlagCode = function () {
        this.shipFlagCodeSelected = false;
        this.shipFlagCodeModel = null;
        this.shipService.setShipFlagCodeData(this.shipFlagCodeModel);
    };
    SearchShipFlagCodeComponent.prototype.ngOnInit = function () {
    };
    SearchShipFlagCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-ship-flag-code',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/ship-flag-code/search-ship-flag-code/search-ship-flag-code.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/ship-flag-code/search-ship-flag-code/search-ship-flag-code.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_services_ship_flag_code_service__["a" /* ShipFlagCodeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_services_ship_service__["a" /* ShipService */]])
    ], SearchShipFlagCodeComponent);
    return SearchShipFlagCodeComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.css":
/***/ (function(module, exports) {

module.exports = "::-webkit-input-placeholder {\r\n    font-style: italic;\r\n }\r\n :-moz-placeholder {\r\n    font-style: italic;  \r\n }\r\n ::-moz-placeholder {\r\n    font-style: italic;  \r\n }\r\n :-ms-input-placeholder {  \r\n    font-style: italic; \r\n }"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-ssn-light\">\r\n  <div class=\"row\">\r\n    <div class=\"col-2\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/ship.png\" height=\"64px\">\r\n    </div>\r\n    <div class=\"col-10\">\r\n      <h3 class=\"text-ssn display-4\">REGISTER SHIP</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <hr>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg\">\r\n      <div class=\"card card-ssn text-center\">\r\n        <div class=\"card-header bg-ssn text-ssn\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <img src=\"assets/images/VoyageIcons/128x128/white/ship.png\" height=\"32px\" />\r\n            </div>\r\n            <div class=\"col-8\">\r\n              <h4>Ship Identification</h4>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card-body text-left\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"ship_name\">Ship name</label>\r\n              <div class=\"col-sm-10\">\r\n                <input [(ngModel)]=\"shipModel.shipName\" name=\"shipName\" type=\"text\" class=\"form-control form-control-sm\" id=\"ship_name\" placeholder=\"Enter ship name\"\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"call_sign\">Call sign</label>\r\n              <div class=\"col-sm-10\">\r\n                <input [(ngModel)]=\"shipModel.callSign\" name=\"callSign\" type=\"text\" class=\"form-control form-control-sm\" id=\"call_sign\" placeholder=\"Enter call sign\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"imo_no\">IMO number</label>\r\n              <div class=\"col-sm-10\">\r\n                <input [(ngModel)]=\"shipModel.imoNo\" name=\"imoNo\" type=\"text\" class=\"form-control form-control-sm\" id=\"imo_no\" placeholder=\"Enter IMO number\">\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"mmsi_no\">MMSI number</label>\r\n              <div class=\"col-sm-10\">\r\n                <input [(ngModel)]=\"shipModel.mmsiNo\" name=\"mmsiNo\" type=\"text\" class=\"form-control form-control-sm\" id=\"mmsi_no\" placeholder=\"Enter MMSI number\">\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card card-ssn text-center\">\r\n    <div class=\"card-header bg-ssn text-ssn\">\r\n      <div class=\"row\">\r\n        <div class=\"col-2\">\r\n          <img src=\"assets/images/VoyageIcons/128x128/white/flag.png\" height=\"32px\" />\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <h4>Flag code</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-search-ship-flag-code></app-search-ship-flag-code>\r\n  </div>\r\n\r\n  <div class=\"card card-ssn text-center\">\r\n    <div class=\"card-header bg-ssn text-ssn\">\r\n      <div class=\"row\">\r\n        <div class=\"col-2\">\r\n          <img src=\"assets/images/VoyageIcons/128x128/white/pax.png\" height=\"32px\" />\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <h4>Organization</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-search-organization></app-search-organization>\r\n  </div>\r\n\r\n  <div class=\"card card-ssn text-center\">\r\n    <div class=\"card-header bg-ssn text-ssn\">\r\n      <div class=\"row\">\r\n        <div class=\"col-2\">\r\n          <img src=\"assets/images/VoyageIcons/128x128/white/ship.png\" height=\"32px\" />\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <h4>Ship Details</h4>\r\n        </div>\r\n        <pre> {{ shipModel | json }} </pre>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body text-left\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"year_of_build\">Year of build</label>\r\n          <div class=\"col-sm-3\">\r\n            <input [(ngModel)]=\"shipModel.yearOfBuild\" name=\"yearOfBuild\" type=\"number\" class=\"form-control form-control-sm\" id=\"year_of_build\"\r\n              placeholder=\"Enter year of build\" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"shipTypeDropdown\">Ship type</label>\r\n          <div class=\"col-sm-10\">\r\n            <div ngbDropdown class=\"d-inline-block\">\r\n              <button class=\"btn btn-outline-primary\" id=\"shipTypeDropdown\" ngbDropdownToggle> {{ shipTypeDropdownString }}</button>\r\n              <div ngbDropdownMenu aria-labelledby=\"shipTypeDropdown\">\r\n                <button class=\"dropdown-item\" *ngFor=\"let shipType of shipTypeList\" (click)=\"selectShipType(shipType)\">{{ shipType.name }}</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"shipSourceDropdown\">Ship type</label>\r\n          <div class=\"col-sm-10\">\r\n            <div ngbDropdown class=\"d-inline-block\">\r\n              <button class=\"btn btn-outline-primary\" id=\"shipSourceDropdown\" ngbDropdownToggle> {{ shipSourceDropdownString }}</button>\r\n              <div ngbDropdownMenu aria-labelledby=\"shipSourceDropdown\">\r\n                <button class=\"dropdown-item\" *ngFor=\"let shipSource of shipSourceList\" (click)=\"selectShipSource(shipSource)\">{{ shipSource.shipSource1 }}</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"hullTypeDropdown\">Hull type</label>\r\n          <div class=\"col-sm-10\">\r\n            <div ngbDropdown class=\"d-inline-block\">\r\n              <button class=\"btn btn-outline-primary\" id=\"hullTypeDropdown\" ngbDropdownToggle> {{ hullTypeDropdownString }}</button>\r\n              <div ngbDropdownMenu aria-labelledby=\"hullTypeDropdown\">\r\n                <button class=\"dropdown-item\" *ngFor=\"let hullType of hullTypeList\" (click)=\"selectHullType(hullType)\">{{ hullType.name }}</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <label class=\"control-label\" for=\"lengthTypeDropdown\">Length</label>\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-10\">\r\n              <div ngbDropdown class=\"d-inline-block\">\r\n                <button class=\"btn btn-outline-primary\" id=\"lengthTypeDropdown\" ngbDropdownToggle> {{ lengthTypeDropdownString }} </button>\r\n                <div ngbDropdownMenu aria-labelledby=\"lengthTypeDropdown\">\r\n                  <button class=\"dropdown-item\" *ngFor=\"let lengthType of lengthTypeList\" (click)=\"selectLengthType(lengthType)\">{{ lengthType.name }}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-11\">\r\n              <input [(ngModel)]=\"shipModel.shipLength\" name=\"shipLength\" type=\"number\" class=\"form-control form-control-sm\" id=\"ship_length\"\r\n                placeholder=\"Enter ship length\" [disabled]=\"!lengthTypeSelected\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <label class=\"control-labe\" for=\"breadthTypeDropdown\">Breadth</label>\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-10\">\r\n              <div ngbDropdown class=\"d-inline-block\">\r\n                <button class=\"btn btn-outline-primary\" id=\"breadthTypeDropdown\" ngbDropdownToggle> {{ breadthTypeDropdownString }} </button>\r\n                <div ngbDropdownMenu aria-labelledby=\"breadthTypeDropdown\">\r\n                  <button class=\"dropdown-item\" *ngFor=\"let breadthType of breadthTypeList\" (click)=\"selectBreadthType(breadthType)\">{{ breadthType.name }}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-11\">\r\n              <input [(ngModel)]=\"shipModel.breadth\" name=\"breadth\" type=\"number\" class=\"form-control form-control-sm\" id=\"ship_breadth\"\r\n                placeholder=\"Enter ship breadth\" [disabled]=\"!breadthTypeSelected\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <label class=\"control-label\" for=\"ship_power_type\">Power</label>\r\n        <div class=\"row\">\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-10\">\r\n              <div ngbDropdown class=\"d-inline-block\">\r\n                <button class=\"btn btn-outline-primary\" id=\"powerTypeDropdown\" ngbDropdownToggle> {{ powerTypeDropdownString }} </button>\r\n                <div ngbDropdownMenu aria-labelledby=\"powerTypeDropdown\">\r\n                  <button class=\"dropdown-item\" *ngFor=\"let powerType of powerTypeList\" (click)=\"selectPowerType(powerType)\">{{ powerType.name }}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <div class=\"col-sm-11\">\r\n              <input [(ngModel)]=\"shipModel.power\" name=\"power\" type=\"number\" class=\"form-control form-control-sm\" id=\"ship_power\" placeholder=\"Enter ship power\"\r\n                [disabled]=\"!powerTypeSelected\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"ship_height\">Height</label>\r\n          <div class=\"col-sm-3\">\r\n            <input [(ngModel)]=\"shipModel.height\" name=\"height\" type=\"number\" class=\"form-control form-control-sm\" id=\"ship_height\" placeholder=\"Enter ship height\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"ship_draught\">Draught</label>\r\n          <div class=\"col-sm-3\">\r\n            <input [(ngModel)]=\"shipModel.draught\" name=\"draught\" type=\"number\" class=\"form-control form-control-sm\" id=\"ship_draught\"\r\n              placeholder=\"Enter ship draught\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"gross_tonnage\">Gross tonnage</label>\r\n          <input [(ngModel)]=\"shipModel.grossTonnage\" name=\"grossTonnage\" type=\"number\" class=\"form-control form-control-sm\" id=\"gross_tonnage\"\r\n            placeholder=\"Enter gross tonnage\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"deadweight_tonnage\">Deadweight tonnage</label>\r\n          <input [(ngModel)]=\"shipModel.deadweightTonnage\" name=\"deadweightTonnage\" type=\"number\" class=\"form-control form-control-sm\"\r\n            id=\"deadweight_tonnage\" placeholder=\"Enter deadweight tonnage\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"has_side_thrusters\">Side thrusters (select all that apply)</label>\r\n          <div class=\"card\" id=\"has_side_thrusters\">\r\n            <div class=\"checkbox container\">\r\n              <label>\r\n                <input [(ngModel)]=\"shipModel.hasSideThrusters\" name=\"hasSideThrusters\" type=\"checkbox\" value=\"\"> Side thrusters</label>\r\n            </div>\r\n            <div class=\"checkbox container\">\r\n              <label>\r\n                <input [(ngModel)]=\"shipModel.hasSideThrustersFront\" name=\"hasSideThrustersFront\" type=\"checkbox\" value=\"\"> Front side thrusters</label>\r\n            </div>\r\n            <div class=\"checkbox container\">\r\n              <label>\r\n                <input [(ngModel)]=\"shipModel.hasSideThrustersBack\" name=\"hasSideThrustersBack\" type=\"checkbox\" value=\"\"> Back side thrusters</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"remark\">Remarks</label>\r\n          <textarea [(ngModel)]=\"shipModel.remark\" name=\"remark\" class=\"form-control form-control-sm\" rows=\"4\" id=\"remark\"></textarea>\r\n        </div>\r\n\r\n        <button class=\"btn btn-success\" (click)=\"registerShip(shipModel)\">Register ship</button>\r\n\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterShipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_ship_model__ = __webpack_require__("./src/app/shared/models/ship-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterShipComponent = /** @class */ (function () {
    // shipModel should be private, but Angular's AoT compilation can't handle it. Will be fixed in Angular 6.0
    function RegisterShipComponent(shipModel, shipService) {
        this.shipModel = shipModel;
        this.shipService = shipService;
        this.shipTypeSelected = false;
        this.hullTypeSelected = false;
        this.lengthTypeSelected = false;
        this.breadthTypeSelected = false;
        this.powerTypeSelected = false;
        this.shipSourceSelected = false;
        this.shipTypeDropdownString = "Select ship type";
        this.hullTypeDropdownString = "Select hull type";
        this.lengthTypeDropdownString = "Select type";
        this.breadthTypeDropdownString = "Select type";
        this.powerTypeDropdownString = "Select type";
        this.shipSourceDropdownString = "Select ship source";
    }
    RegisterShipComponent.prototype.selectShipType = function (shipType) {
        this.shipModel.shipTypeId = shipType.shipTypeId;
        this.shipTypeDropdownString = shipType.name;
        this.shipTypeSelected = true;
    };
    RegisterShipComponent.prototype.selectHullType = function (hullType) {
        this.shipModel.shipHullTypeId = hullType.shipHullTypeId;
        this.hullTypeDropdownString = hullType.name;
        this.hullTypeSelected = true;
    };
    RegisterShipComponent.prototype.selectLengthType = function (lengthType) {
        this.shipModel.shipLengthTypeId = lengthType.shipLengthTypeId;
        this.lengthTypeDropdownString = lengthType.name;
        this.lengthTypeSelected = true;
    };
    RegisterShipComponent.prototype.selectBreadthType = function (breadthType) {
        this.shipModel.shipBreadthTypeId = breadthType.shipBreadthTypeId;
        this.breadthTypeDropdownString = breadthType.name;
        this.breadthTypeSelected = true;
    };
    RegisterShipComponent.prototype.selectPowerType = function (powerType) {
        this.shipModel.shipPowerTypeId = powerType.shipPowerTypeId;
        this.powerTypeDropdownString = powerType.name;
        this.powerTypeSelected = true;
    };
    RegisterShipComponent.prototype.selectShipSource = function (shipSource) {
        this.shipModel.shipSourceId = shipSource.shipSourceId;
        this.shipSourceDropdownString = shipSource.shipSource1;
        this.shipSourceSelected = true;
    };
    RegisterShipComponent.prototype.registerShip = function (newShip) {
        this.shipService.registerShip(newShip);
    };
    RegisterShipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shipService.getShipTypes().subscribe(function (data) { return _this.shipTypeList = data; });
        this.shipService.getHullTypes().subscribe(function (data) { return _this.hullTypeList = data; });
        this.shipService.getLengthTypes().subscribe(function (data) { return _this.lengthTypeList = data; });
        this.shipService.getBreadthTypes().subscribe(function (data) { return _this.breadthTypeList = data; });
        this.shipService.getPowerTypes().subscribe(function (data) { return _this.powerTypeList = data; });
        this.shipService.getShipSources().subscribe(function (data) { return _this.shipSourceList = data; });
        this.shipService.organizationData$.subscribe(function (data) {
            _this.organizationSelected = data != null;
            if (_this.organizationSelected) {
                _this.shipModel.organizationId = data.organizationId;
            }
        });
        this.shipService.shipFlagCodeData$.subscribe(function (data) {
            _this.shipFlagCodeSelected = data != null;
            if (_this.shipFlagCodeSelected) {
                _this.shipModel.shipFlagCodeId = data.shipFlagCode.shipFlagCodeId;
            }
        });
    };
    RegisterShipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-ship',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_models_ship_model__["a" /* ShipModel */], __WEBPACK_IMPORTED_MODULE_1__shared_services_ship_service__["a" /* ShipService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_models_ship_model__["a" /* ShipModel */], __WEBPACK_IMPORTED_MODULE_1__shared_services_ship_service__["a" /* ShipService */]])
    ], RegisterShipComponent);
    return RegisterShipComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/ship-form/ship-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/ship-form/ship-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Ship Identification</h4>\r\n    <div class=\"form-group\">\r\n      <label for=\"ship_name\">Ship name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"ship_name\" placeholder=\"Enter ship name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"call_sign\">Call sign</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"call_sign\" placeholder=\"Enter call sign\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"imo_no\">IMO number</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"imo_no\" placeholder=\"Enter IMO number\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"mmsi_no\">MMSI number</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"mmsi_no\" placeholder=\"Enter MMSI number\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"organization\">Organization</label>\r\n      <select class=\"form-control\" id=\"organization\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"ship_flag_code\">Ship flag code</label>\r\n      <select class=\"form-control\" id=\"ship_flag_code\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Ship Details</h4>\r\n    <div class=\"form-group\">\r\n      <label for=\"year_of_build\">Year of build</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"year_of_build\" placeholder=\"Enter year of build\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"ship_type\">Ship type</label>\r\n      <select class=\"form-control\" id=\"ship_type\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"ship_hull_type\">Ship hull type</label>\r\n      <select class=\"form-control\" id=\"ship_hull_type\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"gross_tonnage\">Gross tonnage</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"gross_tonnage\" placeholder=\"Enter gross tonnage\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"deadweight_tonnage\">Deadweight tonnage</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"deadweight_tonnage\" placeholder=\"Enter deadweight tonnage\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"length_type\">Length type</label>\r\n      <select class=\"form-control\" id=\"length_type\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"ship_length\">Ship length</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"ship_length\" placeholder=\"Enter ship length\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"breadth_type\">Breadth type</label>\r\n      <select class=\"form-control\" id=\"breadth_type\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"ship_breadth\">Ship breadth</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"ship_breadth\" placeholder=\"Enter ship breadth\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"power_type\">Power type</label>\r\n      <select class=\"form-control\" id=\"power_type\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"ship_power\">Ship power</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"ship_power\" placeholder=\"Enter ship power\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"ship_height\">Ship height</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"ship_height\" placeholder=\"Enter ship height\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"ship_draught\">Ship draught</label>\r\n      <input type=\"number\" class=\"form-control\" id=\"ship_draught\" placeholder=\"Enter ship draught\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"side_thrusters\">Side thrusters</label>\r\n      <div class=\"card\" id=\"side_thrusters\">\r\n        <div class=\"checkbox container\">\r\n          <label>\r\n            <input type=\"checkbox\" value=\"\"> Front side thrusters</label>\r\n        </div>\r\n        <div class=\"checkbox container\">\r\n          <label>\r\n            <input type=\"checkbox\" value=\"\"> Back side thrusters</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"remark\">Remarks</label>\r\n      <textarea class=\"form-control\" rows=\"3\" id=\"remarks\"></textarea>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Contact</h4>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Confirm</h4>\r\n    <button type=\"submit\" class=\"btn btn-ssn\">Register ship</button>\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/ship/ship-form/ship-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipFormComponent; });
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

var ShipFormComponent = /** @class */ (function () {
    function ShipFormComponent() {
    }
    ShipFormComponent.prototype.ngOnInit = function () {
    };
    ShipFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ship-form',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/ship/ship-form/ship-form.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/ship/ship-form/ship-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShipFormComponent);
    return ShipFormComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/edit-user/edit-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-ssn\">\r\n  <h3 class=\"text-ssn\">EDIT USER</h3>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Find User</h4>\r\n    <button class=\"btn btn-ssn\" (click)=\"findUser()\">Find user</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"userFound\">\r\n    <div class=\"jumbotron\">\r\n      <h4>Selected User: Oh-la Njordman</h4>\r\n    </div>\r\n\r\n    <app-user-form></app-user-form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
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

var EditUserComponent = /** @class */ (function () {
    function EditUserComponent() {
        this.userFound = false;
    }
    EditUserComponent.prototype.findUser = function () {
        this.userFound = true;
    };
    EditUserComponent.prototype.ngOnInit = function () {
    };
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-user',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/user/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/user/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-ssn-light\">\r\n  <div class=\"row card-ssn text-center\">\r\n    <div class=\"col-2\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/user.png\" height=\"64px\">\r\n    </div>\r\n    <div class=\"col-8\">\r\n      <h3 class=\"text-ssn display-4\">REGISTER USER</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card card-ssn text-center\">\r\n    <div class=\"card-header bg-ssn text-ssn\">\r\n      <div class=\"row\">\r\n        <div class=\"col-2\">\r\n          <img src=\"assets/images/VoyageIcons/128x128/white/user-info.png\" height=\"32px\" />\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <h4>Personalia</h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-body text-left\">\r\n      <form>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"first_name\">First name</label>\r\n          <div class=\"col-sm-4\">\r\n            <input id=\"first_name\" class=\"form-control form-control-sm\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"last_name\">Last name</label>\r\n          <div class=\"col-sm-4\">\r\n            <input id=\"last_name\" class=\"form-control form-control-sm\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"email\">Email</label>\r\n          <div class=\"col-sm-4\">\r\n            <input id=\"email\" class=\"form-control form-control-sm\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label\" for=\"phone_number\">Phone number</label>\r\n          <div class=\"col-sm-4\">\r\n            <input id=\"phone_number\" class=\"form-control form-control-sm\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"user_name\">User name</label>\r\n            <div class=\"col-sm-4\">\r\n              <input id=\"user_name\" class=\"form-control form-control-sm\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"pwd\">Password</label>\r\n              <div class=\"col-sm-4\">\r\n                <input type=password id=\"pwd\" class=\"form-control form-control-sm\">\r\n              </div>\r\n            </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"card card-ssn text-center\">\r\n      <div class=\"card-header bg-ssn text-ssn\">\r\n        <div class=\"row\">\r\n          <div class=\"col-2\">\r\n            <img src=\"assets/images/VoyageIcons/128x128/white/user-info.png\" height=\"32px\" />\r\n          </div>\r\n          <div class=\"col-8\">\r\n            <h4>Rights</h4>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card-body text-left\">\r\n        <form>\r\n          To be continued :)\r\n        </form>\r\n    <button class=\"btn btn-success\">Register user</button>\r\n        \r\n      </div>\r\n    </div>\r\n\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_user_model__ = __webpack_require__("./src/app/shared/models/user-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(userModel, userService) {
        this.userModel = userModel;
        this.userService = userService;
    }
    RegisterUserComponent.prototype.registerUser = function (newUser) {
        this.userService.registerUser(newUser);
    };
    RegisterUserComponent.prototype.ngOnInit = function () {
    };
    RegisterUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-user',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_models_user_model__["a" /* UserModel */], __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_models_user_model__["a" /* UserModel */], __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/user-form/user-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>User details</h4>\r\n    <div class=\"form-group\">\r\n      <label for=\"first_name\">First name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"first_name\" placeholder=\"Enter first name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"middle_name\">Middle name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"middle_name\" placeholder=\"Enter middle name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"last_name\">Last name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"last_name\" placeholder=\"Enter last name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"country\">Country</label>\r\n      <select class=\"form-control\" id=\"country\">\r\n        <option>Norway (NO)</option>\r\n        <option>Antigua and Barbuda (AG)</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Contact information</h4>\r\n    <div class=\"form-group\">\r\n      <label for=\"phone\">Phone</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Enter phone number\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"fax\">Fax</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"fax\" placeholder=\"Enter fax\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email address\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Organisation</h4>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"organisation\">Organisation name</label>\r\n      <select class=\"form-control\" id=\"organisation\">\r\n        <option>1</option>\r\n        <option>2</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"jumbotron\">\r\n    <h4>Confirm</h4>\r\n    <button type=\"submit\" class=\"btn btn-ssn\">Create new user</button>\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/main-content/content-container/basis-data/user/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
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

var UserFormComponent = /** @class */ (function () {
    function UserFormComponent() {
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-form',
            template: __webpack_require__("./src/app/main-content/content-container/basis-data/user/user-form/user-form.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/basis-data/user/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/content-container.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/content-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"selectedComponent\">\r\n  <app-register-user *ngSwitchCase=\"'Register User'\"></app-register-user>\r\n  <app-edit-user *ngSwitchCase=\"'Edit User'\"></app-edit-user>\r\n  <app-register-ship *ngSwitchCase=\"'Register Ship'\"></app-register-ship>\r\n  <app-register-location *ngSwitchCase=\"'Register Location'\"></app-register-location>\r\n  <app-register-organization *ngSwitchCase=\"'Register Organization'\"></app-register-organization>\r\n  <app-port-call *ngSwitchCase=\"'Port Call'\"></app-port-call>\r\n  <app-new-port-call *ngSwitchCase=\"'Register New Port Call'\"></app-new-port-call>\r\n  <app-registration *ngSwitchCase=\"'Register Port Call'\"></app-registration>\r\n  <app-view-port-call *ngSwitchCase=\"'View Port Call'\"></app-view-port-call>\r\n  <app-clearance *ngSwitchCase=\"'Port Call Clearance'\"></app-clearance>\r\n  <p *ngSwitchDefault>This is the default page</p>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/content-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentContainerComponent; });
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


var ContentContainerComponent = /** @class */ (function () {
    function ContentContainerComponent(contentService) {
        this.contentService = contentService;
    }
    ContentContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.contentName$.subscribe(function (content) {
            _this.selectedComponent = content;
        });
    };
    ContentContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content-container',
            template: __webpack_require__("./src/app/main-content/content-container/content-container.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/content-container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basis_data_organization_organization_form_organization_form_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/organization/organization-form/organization-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basis_data_organization_register_organization_register_organization_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/organization/register-organization/register-organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basis_data_organization_search_organization_search_organization_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/organization/search-organization/search-organization.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__basis_data_location_location_form_location_form_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/location/location-form/location-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__basis_data_location_register_location_register_location_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/location/register-location/register-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__basis_data_ship_flag_code_search_ship_flag_code_search_ship_flag_code_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/ship-flag-code/search-ship-flag-code/search-ship-flag-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__basis_data_ship_register_ship_register_ship_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/ship/register-ship/register-ship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__basis_data_ship_ship_form_ship_form_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/ship/ship-form/ship-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__basis_data_user_edit_user_edit_user_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/user/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__basis_data_user_register_user_register_user_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/user/register-user/register-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__basis_data_user_user_form_user_form_component__ = __webpack_require__("./src/app/main-content/content-container/basis-data/user/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__content_container_component__ = __webpack_require__("./src/app/main-content/content-container/content-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__port_call_port_call_module__ = __webpack_require__("./src/app/main-content/content-container/port-call/port-call.module.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__port_call_port_call_module__["a" /* PortCallModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__content_container_component__["a" /* ContentContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__basis_data_user_register_user_register_user_component__["a" /* RegisterUserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__basis_data_user_edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_11__basis_data_ship_register_ship_register_ship_component__["a" /* RegisterShipComponent */],
                __WEBPACK_IMPORTED_MODULE_9__basis_data_location_register_location_register_location_component__["a" /* RegisterLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__basis_data_organization_register_organization_register_organization_component__["a" /* RegisterOrganizationComponent */],
                __WEBPACK_IMPORTED_MODULE_15__basis_data_user_user_form_user_form_component__["a" /* UserFormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__basis_data_ship_ship_form_ship_form_component__["a" /* ShipFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__basis_data_location_location_form_location_form_component__["a" /* LocationFormComponent */],
                __WEBPACK_IMPORTED_MODULE_5__basis_data_organization_organization_form_organization_form_component__["a" /* OrganizationFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__basis_data_organization_search_organization_search_organization_component__["a" /* SearchOrganizationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__basis_data_ship_flag_code_search_ship_flag_code_search_ship_flag_code_component__["a" /* SearchShipFlagCodeComponent */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_16__content_container_component__["a" /* ContentContainerComponent */]]
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

module.exports = "<div class=\"jumbotron bg-ssn-light\">\r\n  <div class=\"row mb-3 text-center\">\r\n    <div class=\"col-2\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/stamp.png\" height=\"64px\">\r\n    </div>\r\n    <div class=\"col-8\">\r\n      <h3 class=\"text-ssn display-4\">\r\n        <span class=\"no-wrap\">PORT CALL</span>\r\n        <span class=\"no-wrap\">CLEARANCE</span>\r\n      </h3>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <button class=\"btn btn-light\" (click)=\"goBack()\">\r\n        <img src=\"assets/images/VoyageIcons/128x128/left-arrow.png\" height=\"32px\">\r\n        <br>\r\n        <span class=\"no-wrap\"> GO BACK</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <app-info></app-info>\r\n  \r\n  <app-confirmation></app-confirmation>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <ssn-card title=\"Clearance\" icon=\"stamp.png\">\r\n        <div class=\"form-group\">\r\n          <label for=\"remarks\">Remarks</label>\r\n          <textarea class=\"form-control\" rows=\"3\" id=\"remarks\" [(ngModel)]=\"clearanceModel.remark\"></textarea>\r\n        </div>\r\n        <div class=\"text-center\">\r\n          <button class=\"btn btn-success\" (click)=\"showWarningBox(content, true)\">\r\n            <div class=\"mx-auto\">\r\n              <img src=\"assets/images/VoyageIcons/128x128/white/checkmark.png\" height=\"32px\">\r\n            </div>\r\n            <small>Accept</small>\r\n          </button>\r\n          <button class=\"btn btn-danger\" (click)=\"showWarningBox(content, false)\">\r\n            <div class=\"mx-auto\">\r\n              <img src=\"assets/images/VoyageIcons/128x128/white/cancel.png\" height=\"32px\">\r\n            </div>\r\n            <small>Decline</small>\r\n          </button>\r\n        </div>\r\n      </ssn-card>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row text-center\">\r\n    <div class=\"col\">\r\n      <button class=\"btn btn-light\" (click)=\"goBack()\">\r\n        <img src=\"assets/images/VoyageIcons/128x128/left-arrow.png\" height=\"32px\">\r\n        <span class=\"no-wrap\"> GO BACK</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #content let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Confirm Clearance</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div *ngIf=\"clearanceModel.remark\">\r\n      <span>Are you sure you want to submit a response with the following remarks:</span>\r\n      <br>\r\n      <pre>{{ clearanceModel.remark }}</pre>\r\n    </div>\r\n    <div *ngIf=\"!clearanceModel.remark\">\r\n      Are you sure you want to submit a clearance response with no remarks?\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button class=\"btn btn-success\" *ngIf=\"givingClearance\" (click)=\"saveClearance(); close()\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/checkmark.png\" height=\"24px\">\r\n      <span>Give Clearance</span>\r\n    </button>\r\n    <button class=\"btn btn-danger\" *ngIf=\"!givingClearance\" (click)=\"saveClearance(); close()\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/cancel.png\" height=\"24px\">\r\n      <span>Reject Clearance</span>\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-ssn\" (click)=\"close()\">\r\n      <span>Cancel</span>\r\n    </button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/clearance/clearance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_models_clearance_model__ = __webpack_require__("./src/app/shared/models/clearance-model.ts");
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
    function ClearanceComponent(contentService, modalService, portCallService) {
        this.contentService = contentService;
        this.modalService = modalService;
        this.portCallService = portCallService;
        this.clearanceModel = new __WEBPACK_IMPORTED_MODULE_4__shared_models_clearance_model__["a" /* ClearanceModel */]();
        this.clearanceList = [];
    }
    ClearanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallService.overviewData$.subscribe(function (data) {
            if (data)
                _this.clearanceList = data.clearanceList;
        });
        this.portCallService.clearanceData$.subscribe(function (data) {
            if (data)
                _this.clearanceModel = data;
        });
    };
    ClearanceComponent.prototype.showWarningBox = function (content, clearance) {
        this.givingClearance = clearance;
        this.modalService.open(content);
    };
    ClearanceComponent.prototype.saveClearance = function () {
        this.clearanceModel.cleared = this.givingClearance;
        this.portCallService.saveClearance(this.clearanceModel);
    };
    ClearanceComponent.prototype.goBack = function () {
        this.contentService.setContent("Port Call");
    };
    ClearanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clearance',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/clearance/clearance.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/clearance/clearance.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_3__shared_services_port_call_service__["a" /* PortCallService */]])
    ], ClearanceComponent);
    return ClearanceComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/clearances/clearances.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/clearances/clearances.component.html":
/***/ (function(module, exports) {

module.exports = "<table-card title=\"Clearances\" icon=\"stamp.png\">\r\n  <thead>\r\n    <tr>\r\n      <th>Type</th>\r\n      <th>Status</th>\r\n      <th>Remark</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let clearance of clearanceList\">\r\n      <td>{{ clearance.organization.name }}</td>\r\n      <td>\r\n        <div *ngIf=\"clearance.cleared\" class=\"alert alert-success\"><span>Cleared.</span></div>\r\n        <div *ngIf=\"clearance.cleared == null\" class=\"alert alert-warning\"><span>Not reviewed.</span></div>\r\n        <div *ngIf=\"clearance.cleared == false\" class=\"alert alert-danger\"><span>Denied.</span></div>\r\n      </td>\r\n      <td>{{ clearance.remark }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/clearances/clearances.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClearancesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
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
        this.portCallService.overviewData$.subscribe(function (data) {
            console.log(data);
            if (data)
                _this.clearanceList = data.clearanceList;
        });
    };
    ClearancesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clearances',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/clearances/clearances.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/confirmation/clearances/clearances.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */]])
    ], ClearancesComponent);
    return ClearancesComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/confirmation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/confirmation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Port Call Details -->\r\n<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <app-port-call-details></app-port-call-details>\r\n  </div>\r\n</div>\r\n\r\n<!-- FAL forms -->\r\n<div *ngFor=\"let entry of falForms\">\r\n  <div class=\"row mb-3\" *ngIf=\"entry.checked\">\r\n    <div class=\"col\">\r\n      <table-card title=\"{{entry.name}}\" icon=\"{{entry.icon}}\" collapsible=true>\r\n        <div [ngSwitch]=\"entry.name\">\r\n          <div *ngSwitchDefault class=\"text-center mt-3\">\r\n            <img src=\"{{iconPath}}warning.png\" height=\"24px\" />\r\n            <span class=\"no-wrap\">{{ entry.name }} information</span>\r\n            <span class=\"no-wrap\">is marked for delivery,</span>\r\n            <span class=\"no-wrap\">but no information is provided.</span>\r\n          </div>\r\n        </div>\r\n      </table-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Clearance information -->\r\n<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <app-clearances></app-clearances>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/confirmation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
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
    function ConfirmationComponent(portCallService) {
        this.portCallService = portCallService;
        this.iconPath = "assets/images/VoyageIcons/128x128/white/";
    }
    ConfirmationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallService.reportingForThisPortCallData$.subscribe(function (reportingData) {
            if (reportingData != null) {
                _this.falForms = [
                    { name: "Hazmat", icon: "hazard.png", checked: reportingData.reportingHazmat || false },
                    { name: "Bunkers", icon: "barrel.png", checked: reportingData.reportingBunkers || false },
                    { name: "Cargo", icon: "cargo.png", checked: reportingData.reportingCargo || false },
                    { name: "Ship Stores", icon: "alcohol.png", checked: reportingData.reportingShipStores || false },
                    { name: "Crew", icon: "crew.png", checked: reportingData.reportingCrew || false },
                    { name: "Pax", icon: "pax.png", checked: reportingData.reportingPax || false },
                    { name: "Waste", icon: "trash.png", checked: reportingData.reportingWaste || false }
                ];
            }
        });
    };
    ConfirmationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirmation',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/confirmation.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/confirmation/confirmation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */]])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/confirmation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_shared_module__ = __webpack_require__("./src/app/shared/components/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirmation_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__port_call_details_port_call_details_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/port-call-details/port-call-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__port_call_details_selected_purposes_selected_purposes_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/port-call-details/selected-purposes/selected-purposes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clearances_clearances_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/clearances/clearances.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__confirmation_component__["a" /* ConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_7__port_call_details_port_call_details_component__["a" /* PortCallDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__port_call_details_selected_purposes_selected_purposes_component__["a" /* SelectedPurposesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__clearances_clearances_component__["a" /* ClearancesComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__confirmation_component__["a" /* ConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__port_call_details_selected_purposes_selected_purposes_component__["a" /* SelectedPurposesComponent */]
            ]
        })
    ], ConfirmationModule);
    return ConfirmationModule;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/port-call-details/port-call-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/port-call-details/port-call-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <table-card title=\"Crew, Passengers and Dimensions\" icon=\"crew.png\" collapsible=true>\r\n      <tbody>\r\n        <tr>\r\n          <td *ngFor=\"let entry of portCallDetailsInfo\" class=\"no-wrap px-1 mx-1\">\r\n            <tr>\r\n              <small>{{ entry.description }}</small>\r\n            </tr>\r\n            <tr>{{ entry.data }}</tr>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <app-selected-purposes></app-selected-purposes>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/port-call-details/port-call-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NO_OF_CREW = "No. of Crew";
var NO_OF_PASSENGERS = "No. of Passengers";
var ACTUAL_DRAUGHT = "Actual Draught";
var AIR_DRAUGHT = "Air Draught";
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
        this.portCallService.crewPassengersAndDimensionsData$.subscribe(function (data) {
            if (data != null) {
                _this.portCallDetailsInfo.find(function (p) { return p.description == NO_OF_CREW; }).data = data.numberOfCrew;
                _this.portCallDetailsInfo.find(function (p) { return p.description == NO_OF_PASSENGERS; }).data = data.numberOfPassengers;
                _this.portCallDetailsInfo.find(function (p) { return p.description == ACTUAL_DRAUGHT; }).data = data.actualDraught;
                _this.portCallDetailsInfo.find(function (p) { return p.description == AIR_DRAUGHT; }).data = data.airDraught;
            }
        });
    };
    PortCallDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-port-call-details',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/port-call-details/port-call-details.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/confirmation/port-call-details/port-call-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */]])
    ], PortCallDetailsComponent);
    return PortCallDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/port-call-details/selected-purposes/selected-purposes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/port-call-details/selected-purposes/selected-purposes.component.html":
/***/ (function(module, exports) {

module.exports = "<table-card title=\"Selected Purposes\" icon=\"target.png\" collapsible=true>\r\n  <tbody class=\"border-top-0\">\r\n    <tr>\r\n      <td *ngFor=\"let purpose of selectedPurposes; let isFirst=first\" [ngClass]=\"{'border-left': !isFirst}\"> {{ getPurposeName(purpose.portCallPurposeId) }} </td>\r\n    </tr>\r\n  </tbody>\r\n</table-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/confirmation/port-call-details/selected-purposes/selected-purposes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedPurposesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_purpose_service__ = __webpack_require__("./src/app/shared/services/purpose.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OTHER_PURPOSE_ID = "100249";
var SelectedPurposesComponent = /** @class */ (function () {
    function SelectedPurposesComponent(purposeService, portCallService) {
        this.purposeService = purposeService;
        this.portCallService = portCallService;
        this.otherPurposeName = "";
    }
    SelectedPurposesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.purposeService.getPurposes().subscribe(function (data) {
            _this.purposeList = data;
        });
        this.portCallService.portCallPurposeData$.subscribe(function (data) {
            if (data != null) {
                _this.selectedPurposes = data;
            }
        });
        this.portCallService.otherPurposeName$.subscribe(function (data) {
            _this.otherPurposeName = data;
        });
    };
    SelectedPurposesComponent.prototype.getPurposeName = function (id) {
        if (this.purposeList != null) {
            var purpose = this.purposeList.find(function (p) { return p.portCallPurposeId == id; });
            if (purpose.portCallPurposeId != OTHER_PURPOSE_ID) {
                return purpose != null ? purpose.name : null;
            }
            else {
                return this.otherPurposeName == "" ? "Other purpose is undefined" : "Other: \"" + this.otherPurposeName + "\"";
            }
        }
    };
    SelectedPurposesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-selected-purposes',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/port-call-details/selected-purposes/selected-purposes.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/confirmation/port-call-details/selected-purposes/selected-purposes.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_purpose_service__["a" /* PurposeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_purpose_service__["a" /* PurposeService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */]])
    ], SelectedPurposesComponent);
    return SelectedPurposesComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/new-port-call.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/new-port-call.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-ssn-light\">\r\n  <div class=\"row mb-3 text-center\">\r\n    <div class=\"col-2\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/portcall.png\" height=\"64px\">\r\n    </div>\r\n    <div class=\"col-8\">\r\n      <h3 class=\"text-ssn display-4\">\r\n        <span class=\"no-wrap\">REGISTER NEW</span>\r\n        <span class=\"no-wrap\">PORT CALL</span>\r\n      </h3>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-ship-location-time></app-ship-location-time>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/new-port-call.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPortCallComponent; });
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

var NewPortCallComponent = /** @class */ (function () {
    function NewPortCallComponent() {
    }
    NewPortCallComponent.prototype.ngOnInit = function () {
    };
    NewPortCallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-port-call',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/new-port-call.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/new-port-call.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewPortCallComponent);
    return NewPortCallComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/confirm-data/confirm-data.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/confirm-data/confirm-data.component.html":
/***/ (function(module, exports) {

module.exports = "<ssn-card title=\"Confirm Port Call\" icon=\"checkmark.png\">\r\n  <div *ngIf=\"!shipFound || !locationFound || !dateTimeFound\" class=\"text-center\">\r\n    <p *ngIf=\"!shipFound\" class=\"no-wrap mb-0\">No ship selected.</p>\r\n    <p *ngIf=\"!locationFound\" class=\"no-wrap mb-0\">No location selected.</p>\r\n    <p *ngIf=\"!dateTimeFound\" class=\"no-wrap\">ETA and ETD not set.</p>\r\n    <button class=\"btn btn-ssn\" disabled=\"true\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/checkmark.png\" height=\"24px\" /> Register Port Call</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"shipFound && locationFound && dateTimeFound\" class=\"text-center\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr class=\"bg-ssn text-ssn\">\r\n            <th>Ship flag</th>\r\n            <th>Ship name</th>\r\n            <th>Location Name</th>\r\n            <th>Location Code</th>\r\n            <th>ETA</th>\r\n            <th>ETD</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>\r\n              <img src=\"assets/images/Flags/128x128/{{shipModel.country.twoCharCode | lowercase}}.png\" height=\"20px\" />\r\n            </td>\r\n            <td>{{ shipModel.ship.name }}</td>\r\n            <td>{{ locationModel.location.name }}</td>\r\n            <td>{{ locationModel.location.locationCode }}</td>\r\n            <td>{{ etaEtdModel.eta.year }}-{{ dateTimeFormat(etaEtdModel.eta.month) }}-{{ dateTimeFormat(etaEtdModel.eta.day)\r\n              }} {{ dateTimeFormat(etaEtdModel.eta.hour) }}:{{ dateTimeFormat(etaEtdModel.eta.minute) }}</td>\r\n            <td>{{ etaEtdModel.etd.year }}-{{ dateTimeFormat(etaEtdModel.etd.month) }}-{{ dateTimeFormat(etaEtdModel.etd.day)\r\n              }} {{ dateTimeFormat(etaEtdModel.etd.hour) }}:{{ dateTimeFormat(etaEtdModel.etd.minute) }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <button class=\"btn btn-ssn\" (click)=\"startPortCallRegistration()\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/checkmark.png\" height=\"24px\" /> Register Port Call</button>\r\n  </div>\r\n</ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/confirm-data/confirm-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmDataComponent = /** @class */ (function () {
    function ConfirmDataComponent(portCallService, contentService) {
        this.portCallService = portCallService;
        this.contentService = contentService;
    }
    ConfirmDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallService.overviewData$.subscribe(function (ovData) {
            if (ovData != null) {
                // Ship
                _this.shipFound = ovData.shipOverview != null;
                _this.shipModel = _this.shipFound ? ovData.shipOverview : null;
                // Location
                _this.locationFound = ovData.locationOverview != null;
                _this.locationModel = _this.locationFound ? ovData.locationOverview : null;
            }
        });
        // ETA/ETD
        this.portCallService.etaEtdData$.subscribe(function (data) {
            _this.dateTimeFound = data != null;
            _this.etaEtdModel = data;
        });
    };
    ConfirmDataComponent.prototype.dateTimeFormat = function (number) {
        if (number <= 9) {
            return "0" + number;
        }
        else {
            return number;
        }
    };
    ConfirmDataComponent.prototype.startPortCallRegistration = function () {
        if (!this.shipFound || !this.locationFound || !this.dateTimeFound) {
            return;
        }
        this.portCallService.savePortCall();
        this.contentService.setPortCallForm("Port Call Details");
        this.contentService.setContent("Register Port Call");
    };
    ConfirmDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm-data',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/confirm-data/confirm-data.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/confirm-data/confirm-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_content_service__["a" /* ContentService */]])
    ], ConfirmDataComponent);
    return ConfirmDataComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/eta-etd/eta-etd.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/eta-etd/eta-etd.component.html":
/***/ (function(module, exports) {

module.exports = "<ssn-card title=\"Select Arrival and Departure Time\" icon=\"time.png\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"eta_date_input\">ETA</label>\r\n        <div class=\"input-group\">\r\n          <input id=\"eta_date_input\" class=\"form-control form-control-sm\" placeholder=\"yyyy-MM-dd\" name=\"dp-eta\" [showWeekNumbers]=\"true\"\r\n            [(ngModel)]=\"etaDateModel\" ngbDatepicker #eta=\"ngbDatepicker\" (ngModelChange)=\"etaDateChanged($event)\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-sm btn-ssn\" (click)=\"eta.toggle()\" type=\"button\">\r\n              <img src=\"assets/images/VoyageIcons/128x128/white/calendar.png\" height=\"24px\" />\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!validEtaDateFormat\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Invalid date format!</strong> Format must be yyyy-MM-dd\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-6\">\r\n      <div class=\"form-group\">\r\n        <label for=\"etd_date_input\">ETD</label>\r\n        <div class=\"input-group\">\r\n          <input id=\"etd_date_input\" class=\"form-control form-control-sm\" placeholder=\"yyyy-MM-dd\" name=\"dp-etd\" [showWeekNumbers]=\"true\"\r\n            [(ngModel)]=\"etdDateModel\" ngbDatepicker #etd=\"ngbDatepicker\" (ngModelChange)=\"etdDateChanged($event)\">\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-sm btn-ssn\" (click)=\"etd.toggle()\" type=\"button\">\r\n              <img src=\"assets/images/VoyageIcons/128x128/white/calendar.png\" height=\"24px\" />\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!validEtdDateFormat\" class=\"alert alert-danger\" role=\"alert\">\r\n        <strong>Invalid date format!</strong> Format must be yyyy-MM-dd\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"dateSequenceError\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8 alert alert-danger\" role=\"alert\">\r\n      <strong>Departure date can not be before arrival date!</strong>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <ngb-timepicker [(ngModel)]=\"etaTimeModel\" (ngModelChange)=\"etaTimeChanged($event)\"></ngb-timepicker>\r\n    </div>\r\n    <div class=\"col\">\r\n      <ngb-timepicker [(ngModel)]=\"etdTimeModel\" (ngModelChange)=\"etdTimeChanged($event)\"></ngb-timepicker>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"timeSequenceError\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8 alert alert-danger\" role=\"alert\">\r\n      <strong>Departure time must be after arrival time!</strong>\r\n    </div>\r\n  </div>\r\n</ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/eta-etd/eta-etd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EtaEtdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var equals = function (one, two) {
    return one && two && two.year === one.year && two.month === one.month && two.day === one.day;
};
var before = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day < two.day : one.month < two.month : one.year < two.year;
};
var after = function (one, two) {
    return !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
        ? false : one.day > two.day : one.month > two.month : one.year > two.year;
};
var EtaEtdComponent = /** @class */ (function () {
    function EtaEtdComponent(portCallService) {
        this.portCallService = portCallService;
        this.etaEtdModel = {
            eta: { year: null, month: null, day: null, hour: null, minute: null },
            etd: { year: null, month: null, day: null, hour: null, minute: null }
        };
        this.validEtaDateFormat = true;
        this.validEtdDateFormat = true;
        this.dateSequenceError = false;
        this.timeSequenceError = false;
    }
    EtaEtdComponent.prototype.etaDateChanged = function ($event) {
        this.updateDateModel(this.etaEtdModel.eta, $event, "eta");
    };
    EtaEtdComponent.prototype.etdDateChanged = function ($event) {
        this.updateDateModel(this.etaEtdModel.etd, $event, "etd");
    };
    EtaEtdComponent.prototype.updateDateModel = function (model, $event, dateType) {
        if ($event != null) {
            if (this.hasValidDateFormat($event)) {
                this.updateValidDate(dateType, true);
                model.year = $event.year;
                model.month = $event.month;
                model.day = $event.day;
                this.validateData();
                return;
            }
            else {
                this.updateValidDate(dateType, false);
            }
        }
        else {
            this.updateValidDate(dateType, true);
        }
        model.year = null;
        model.month = null;
        model.day = null;
        this.validateData();
    };
    EtaEtdComponent.prototype.updateValidDate = function (dateType, valid) {
        if (dateType == "eta") {
            this.validEtaDateFormat = valid;
        }
        else if (dateType == "etd") {
            this.validEtdDateFormat = valid;
        }
    };
    EtaEtdComponent.prototype.hasValidDateFormat = function (model) {
        return typeof model != "string";
    };
    EtaEtdComponent.prototype.validateData = function () {
        if ((this.etaDateModel != null && this.etaDateModel.year != null) && (this.etdDateModel != null && this.etdDateModel.year != null)) {
            this.dateSequenceError = after(this.etaDateModel, this.etdDateModel);
            if (equals(this.etaDateModel, this.etdDateModel)) {
                if ((this.etaTimeModel != null && this.etaTimeModel.hour != null) && (this.etdTimeModel != null && this.etdTimeModel.hour != null)) {
                    this.timeSequenceError = (this.etaTimeModel.hour > this.etdTimeModel.hour)
                        || ((this.etaTimeModel.hour == this.etdTimeModel.hour) && (this.etaTimeModel.minute >= this.etdTimeModel.minute));
                }
                else {
                    this.timeSequenceError = false;
                }
            }
            else {
                this.timeSequenceError = false;
            }
        }
        else {
            this.dateSequenceError = false;
            this.timeSequenceError = false;
        }
        if (!this.dateSequenceError && !this.timeSequenceError && this.hasRequiredData(this.etaEtdModel)) {
            this.portCallService.setEtaEtdData(this.etaEtdModel);
        }
        else {
            this.portCallService.setEtaEtdData(null);
        }
    };
    EtaEtdComponent.prototype.hasRequiredData = function (model) {
        return model.eta.year != null && model.eta.hour != null && model.etd.year != null && model.etd.hour != null;
    };
    EtaEtdComponent.prototype.etaTimeChanged = function ($event) {
        this.updateTimeModel(this.etaEtdModel.eta, $event);
    };
    EtaEtdComponent.prototype.etdTimeChanged = function ($event) {
        this.updateTimeModel(this.etaEtdModel.etd, $event);
    };
    EtaEtdComponent.prototype.updateTimeModel = function (model, $event) {
        if ($event != null) {
            model.hour = $event.hour;
            model.minute = $event.minute;
        }
        else {
            model.hour = null;
            model.minute = null;
        }
        this.validateData();
    };
    EtaEtdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallService.etaEtdData$.subscribe(function (etaEtdData) {
            if (etaEtdData != null) {
                _this.etaEtdModel = etaEtdData;
            }
        });
        if (this.etaEtdModel != null) {
            this.etaDateModel = { year: this.etaEtdModel.eta.year, month: this.etaEtdModel.eta.month, day: this.etaEtdModel.eta.day };
            this.etaTimeModel = { hour: this.etaEtdModel.eta.hour, minute: this.etaEtdModel.eta.minute, second: 0 };
            this.etdDateModel = { year: this.etaEtdModel.etd.year, month: this.etaEtdModel.etd.month, day: this.etaEtdModel.etd.day };
            this.etdTimeModel = { hour: this.etaEtdModel.etd.hour, minute: this.etaEtdModel.etd.minute, second: 0 };
        }
    };
    EtaEtdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eta-etd',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/eta-etd/eta-etd.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/eta-etd/eta-etd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */]])
    ], EtaEtdComponent);
    return EtaEtdComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-location/find-location.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-location/find-location.component.html":
/***/ (function(module, exports) {

module.exports = "<ssn-card title=\"Select Location\" icon=\"location.png\">\r\n    <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n        <img src=\"assets/images/Flags/128x128/{{r.country.twoCharCode.toLowerCase()}}.png\" height=\"16px\" />\r\n        <strong *ngIf=\"r.location.name\">Name: </strong> {{ r.location.name }}\r\n        <strong *ngIf=\"r.location.locationCode\">Code: </strong> {{ r.location.locationCode }}\r\n    </ng-template>\r\n\r\n    <div *ngIf=\"!locationFound\" class=\"text-center\">\r\n        <label for=\"search-location\">Search using location name or location code</label>\r\n        <div class=\"row\">\r\n            <div class=\"col-2\"></div>\r\n            <div class=\"col-8\">\r\n                <input id=\"search-location\" type=\"text\" class=\"form-control form-control-sm mx-auto\" [(ngModel)]=\"locationModel\" [ngbTypeahead]=\"search\"\r\n                    [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" (selectItem)=\"selectLocation($event)\" />\r\n            </div>\r\n            <div class=\"col-2\">\r\n                <div *ngIf=\"searching\">\r\n                    <img class=\"mx-auto\" src=\"assets/images/animations/location.gif\" height=\"32px\" />\r\n                    <p>Searching</p>\r\n                </div>\r\n                <div *ngIf=\"searchFailed\">\r\n                    <img class=\"mx-auto\" src=\"assets/images/VoyageIcons/128x128/cancel.png\" height=\"32px\" />\r\n                    <p>No results</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"locationFound\" class=\"text-center\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                    <tr class=\"bg-ssn text-ssn\">\r\n                        <th>Country</th>\r\n                        <th>Location Name</th>\r\n                        <th>Location Code</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr>\r\n                        <td>\r\n                            <img src=\"assets/images/Flags/128x128/{{locationModel.country.twoCharCode.toLowerCase()}}.png\" height=\"20px\" /> {{ locationModel.country.name }}\r\n                        </td>\r\n                        <td>{{ locationModel.location.name }} </td>\r\n                        <td>{{ locationModel.location.locationCode }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <button class=\"btn btn-ssn\" (click)=\"deselectLocation()\">\r\n            <img src=\"assets/images/VoyageIcons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n    </div>\r\n</ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-location/find-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_location_service__ = __webpack_require__("./src/app/shared/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
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
    function FindLocationComponent(portCallService, locationService) {
        var _this = this;
        this.portCallService = portCallService;
        this.locationService = locationService;
        this.locationFound = false;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function () { return function () { return _this.searching = false; }; });
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function (term) {
                _this.searchFailed = false;
                if (term.length >= 2)
                    _this.searching = true;
            })
                .switchMap(function (term) { return term.length < 2 ? [] :
                _this.locationService.search(term); })
                .do(function (text$) {
                _this.searching = false;
                if (text$.length == 0) {
                    _this.searchFailed = true;
                }
            })
                .merge(_this.hideSearchingWhenUnsubscribed);
        };
        this.formatter = function (x) { return x.locationId; };
    }
    FindLocationComponent.prototype.selectLocation = function ($event) {
        this.portCallService.setLocationData($event.item);
    };
    FindLocationComponent.prototype.deselectLocation = function () {
        this.portCallService.setLocationData(null);
    };
    FindLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallService.overviewData$.subscribe(function (ovData) {
            if (ovData != null) {
                _this.locationFound = ovData.locationOverview != null;
                _this.locationModel = _this.locationFound ? ovData.locationOverview : null;
            }
        });
    };
    FindLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-find-location',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-location/find-location.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-location/find-location.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_services_location_service__["a" /* LocationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__shared_services_port_call_service__["a" /* PortCallService */], __WEBPACK_IMPORTED_MODULE_5__shared_services_location_service__["a" /* LocationService */]])
    ], FindLocationComponent);
    return FindLocationComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-ship/find-ship.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-ship/find-ship.component.html":
/***/ (function(module, exports) {

module.exports = "<ssn-card title=\"Select Ship\" icon=\"ship.png\">\r\n    <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n      <div class=\"\">\r\n        <img src=\"assets/images/Flags/128x128/{{r.country.twoCharCode.toLowerCase()}}.png\" height=\"16px\" />\r\n        <strong *ngIf=\"r.ship.name\">Name: </strong> {{ r.ship.name }}\r\n        <strong *ngIf=\"r.ship.callSign\"> Call sign: </strong> {{ r.ship.callSign }}\r\n        <strong *ngIf=\"r.ship.imoNo\"> IMO number: </strong> {{ r.ship.imoNo }}\r\n        <strong *ngIf=\"r.ship.mmsiNo\"> MMSI number: </strong> {{ r.ship.mmsiNo }}\r\n      </div>\r\n    </ng-template>\r\n\r\n    <div *ngIf=\"!shipFound\" class=\"text-center\">\r\n      <label for=\"find-ship\">Search using ship name, call sign, IMO number or MMSI number</label>\r\n      <div class=\"row\">\r\n        <div class=\"col-2\"></div>\r\n        <div class=\"col-8\">\r\n          <input id=\"find-ship\" type=\"text\" class=\"form-control form-control-sm mx-auto\" [(ngModel)]=\"shipModel\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\"\r\n            [inputFormatter]=\"formatter\" (selectItem)=\"selectShip($event)\" />\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <div *ngIf=\"searching\">\r\n            <img class=\"mx-auto\" src=\"assets/images/animations/ship.gif\" height=\"32px\">\r\n            <p>Searching</p>\r\n          </div>\r\n          <div *ngIf=\"searchFailed\">\r\n            <img class=\"mx-auto\" src=\"assets/images/VoyageIcons/128x128/cancel.png\" height=\"32px\">\r\n            <p>No results</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"shipFound\" class=\"text-center\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr class=\"bg-ssn text-ssn\">\r\n              <th>Flag</th>\r\n              <th>Ship name</th>\r\n              <th>Call sign</th>\r\n              <th>IMO number</th>\r\n              <th>MMSI number</th>\r\n              <th>Gross tonnage</th>\r\n              <th>Length</th>\r\n              <th>Ship type</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>\r\n                <img src=\"assets/images/Flags/128x128/{{shipModel.country.twoCharCode.toLowerCase()}}.png\" height=\"20px\" />\r\n              </td>\r\n              <td>{{ shipModel.ship.name }}</td>\r\n              <td>{{ shipModel.ship.callSign }}</td>\r\n              <td>{{ shipModel.ship.imoNo }}</td>\r\n              <td>{{ shipModel.ship.mmsiNo }}</td>\r\n              <td>{{ shipModel.ship.grossTonnage }}</td>\r\n              <td>{{ shipModel.ship.length }}</td>\r\n              <td><div *ngIf=\"shipModel.shipType\">{{ shipModel.shipType.name }}</div></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <button class=\"btn btn-ssn\" (click)=\"deselectShip()\">\r\n        <img src=\"assets/images/VoyageIcons/128x128/white/cancel.png\" height=\"24px\" /> Clear selection</button>\r\n    </div>\r\n  </ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-ship/find-ship.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindShipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_ship_service__ = __webpack_require__("./src/app/shared/services/ship.service.ts");
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
    function FindShipComponent(portCallService, shipService) {
        var _this = this;
        this.portCallService = portCallService;
        this.shipService = shipService;
        this.shipFound = false;
        this.searching = false;
        this.searchFailed = false;
        this.hideSearchingWhenUnsubscribed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function () { return function () { return _this.searching = false; }; });
        this.search = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function (term) {
                _this.searchFailed = false;
                if (term.length >= 2)
                    _this.searching = true;
            })
                .switchMap(function (term) { return term.length < 2 ? [] :
                _this.shipService.searchShip(term); })
                .do(function (text$) {
                _this.searching = false;
                if (text$.length == 0) {
                    _this.searchFailed = true;
                }
            })
                .merge(_this.hideSearchingWhenUnsubscribed);
        };
        this.formatter = function (x) { return x.shipId; };
    }
    FindShipComponent.prototype.selectShip = function ($event) {
        this.portCallService.setShipData($event.item);
    };
    FindShipComponent.prototype.deselectShip = function () {
        this.portCallService.setShipData(null);
    };
    FindShipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallService.overviewData$.subscribe(function (ovData) {
            if (ovData != null) {
                _this.shipFound = ovData.shipOverview != null;
                _this.shipModel = _this.shipFound ? ovData.shipOverview : null;
            }
        });
    };
    FindShipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-find-ship',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-ship/find-ship.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-ship/find-ship.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_ship_service__["a" /* ShipService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_port_call_service__["a" /* PortCallService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_ship_service__["a" /* ShipService */]])
    ], FindShipComponent);
    return FindShipComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/ship-location-time.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/ship-location-time.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-find-ship></app-find-ship>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-find-location></app-find-location>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-eta-etd></app-eta-etd>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-confirm-data></app-confirm-data>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/ship-location-time.component.ts":
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
            template: __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/ship-location-time.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/ship-location-time.component.css")]
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

module.exports = "<div class=\"d-table\">\r\n  <div class=\"d-table-row\">\r\n\r\n    <div class=\"d-table-cell\">\r\n      <button class=\"btn btn-sm btn-ssn\" (click)=\"onViewClick()\">\r\n        <div class=\"mx-auto\">\r\n          <img src='assets/images/VoyageIcons/128x128/white/eye.png' height='20px' />\r\n        </div>\r\n        <small class=\"text-center text-white\">VIEW</small>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"d-table-cell\">\r\n      <button class=\"btn btn-sm btn-ssn\" (click)=\"onEditClick()\">\r\n        <div class=\"mx-auto\">\r\n          <img src='assets/images/VoyageIcons/128x128/white/edit.png' height='20px' />\r\n        </div>\r\n        <small class=\"text-center text-white\">EDIT</small>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"d-table-cell\">\r\n      <button class=\"btn btn-sm btn-ssn\" (click)=\"onClearanceClick()\">\r\n        <div class=\"mx-auto\">\r\n          <img src='assets/images/VoyageIcons/128x128/white/stamp.png' height='20px' />\r\n        </div>\r\n        <small class=\"text-center text-white\">CLEAR</small>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
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
    function ButtonRowComponent(contentService, portCallService) {
        this.contentService = contentService;
        this.portCallService = portCallService;
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ButtonRowComponent.prototype.ngOnInit = function () {
    };
    ButtonRowComponent.prototype.onViewClick = function () {
        this.setContent('View Port Call');
    };
    ButtonRowComponent.prototype.onEditClick = function () {
        this.setContent('Register Port Call');
    };
    ButtonRowComponent.prototype.onClearanceClick = function () {
        this.setContent('Port Call Clearance');
    };
    ButtonRowComponent.prototype.setContent = function (content) {
        var _this = this;
        this.portCallService.wipeDetailsData();
        this.portCallService.setPortCall(this.rowData.overviewModel);
        this.portCallService.setClearance(this.rowData.overviewModel.clearanceList[0]); //hmmm
        try {
            this.portCallService.getDetailsByPortCallId(this.rowData.overviewModel.portCall.portCallId).subscribe(function (details) {
                if (details) {
                    _this.portCallService.setDetails(details);
                }
                else {
                    console.log("Empty details.");
                }
            }, function (error) {
                console.log("Get details error: ", error);
            });
            this.portCallService.getPurposeByPortCallId(this.rowData.overviewModel.portCall.portCallId).subscribe(function (purposeData) {
                if (purposeData) {
                    if (purposeData.find(function (p) { return p.name == "Other"; })) {
                        _this.portCallService.getOtherName(_this.rowData.overviewModel.portCall.portCallId).subscribe(function (otherNameData) {
                            _this.portCallService.setOtherPurposeName(otherNameData);
                            _this.portCallService.setPortCallPurposeData(purposeData);
                            _this.contentService.setContent(content);
                        });
                    }
                    else {
                        _this.portCallService.setPortCallPurposeData(purposeData);
                        _this.contentService.setContent(content);
                    }
                }
                else {
                    console.log("Empty purpose.");
                }
            }, function (error) {
                console.log("Get purpose error: ", error);
            });
        }
        catch (err) {
            console.log(err);
        }
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
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_port_call_service__["a" /* PortCallService */]])
    ], ButtonRowComponent);
    return ButtonRowComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = "/* Smart table */\r\n:root {\r\n    --color-primary: #002d50;\r\n    --color-primary-light: #37557c;\r\n    --color-primary-dark: #000128;\r\n    --color-primary-text: #ffffff;\r\n}\r\n:host /deep/ ng2-smart-table thead {\r\n    background-color: var(--color-primary);\r\n    color: white;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort::after {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    border-bottom: 4px solid white;\r\n    border-top: 4px solid transparent;\r\n    border-left: 4px solid transparent;\r\n    border-right: 4px solid transparent;\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.asc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n    margin-bottom: 2px;\r\n}\r\n:host /deep/ a.ng2-smart-sort-link.sort.desc::after {\r\n    border-bottom: 4px solid white;\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n    margin-bottom: -2px;\r\n}\r\n:host /deep/ ng2-smart-table a { \r\n    color:var(--color-primary-text); \r\n}\r\n:host /deep/ a.ng2-smart-page-link.page-link {  \r\n    color: var(--color-primary-dark);\r\n    border-color: #dee2e6;\r\n}\r\n:host /deep/ span.ng2-smart-page-link.page-link { \r\n    color: var(--color-primary-dark); \r\n    background-color: #dee2e6;\r\n    border-color: #dee2e6;        \r\n}"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"table-responsive\">\r\n        <ng2-smart-table [settings]=\"tableSettings\" [source]=\"dataSource\"></ng2-smart-table>\r\n        <img *ngIf=\"!overviewFound!\" src='assets/images/animations/portcall.gif' style=\"margin-left:auto\" style=\"left: 50%; position: relative\"/>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_port_call_overview_service__ = __webpack_require__("./src/app/shared/services/port-call-overview.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__button_row_button_row_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.ts");
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
    function OverviewComponent(datePipe, contentService, portCallService, overviewService) {
        this.datePipe = datePipe;
        this.contentService = contentService;
        this.portCallService = portCallService;
        this.overviewService = overviewService;
        this.myLocationId = 2328223; // temporary for testing
        this.overviewModels = [];
        this.data = [];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */]();
        this.overviewFound = false;
        // Smart table
        this.tableSettings = {
            mode: 'external',
            actions: false,
            attr: {
                class: 'table table-bordered',
            },
            noDataMessage: '',
            columns: {
                shipName: {
                    title: 'Ship Name',
                    type: 'html',
                },
                callSign: {
                    title: 'Call Sign',
                    type: 'text',
                },
                locationName: {
                    title: 'Location Name',
                    type: 'html'
                },
                eta: {
                    title: 'ETA',
                },
                etd: {
                    title: 'ETD'
                },
                actions: {
                    title: 'Actions',
                    type: 'custom',
                    filter: false,
                    sort: false,
                    renderComponent: __WEBPACK_IMPORTED_MODULE_6__button_row_button_row_component__["a" /* ButtonRowComponent */]
                },
            }
        };
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.overviewService.getPortCalls().subscribe(function (pcData) {
            pcData.forEach(function (pc) {
                _this.overviewService.getOverview(pc.portCallId).subscribe(function (ov) {
                    _this.overviewModels.push(ov);
                    _this.dataSource.add({
                        overviewModel: ov,
                        shipName: "<div hidden>" + ov.shipOverview.ship.name // ugly fix for alphabetical sorting but it works
                            + "</div> <div> <img src='assets/images/Flags/128x128/" + ov.shipOverview.country.twoCharCode.toLowerCase() + ".png' height='20px'/> " + ov.shipOverview.ship.name + "</div>",
                        callSign: ov.shipOverview.ship.callSign,
                        locationName: "<div hidden>" + ov.locationOverview.location.name // same ugly fix as ship name
                            + "</div> <div> <img src='assets/images/Flags/128x128/" + ov.locationOverview.country.twoCharCode.toLowerCase() + ".png' height='20px'/> " + ov.locationOverview.location.name + "</div>",
                        eta: _this.datePipe.transform(ov.portCall.locationEta, 'yyyy-MM-dd HH:mm'),
                        etd: _this.datePipe.transform(ov.portCall.locationEtd, 'yyyy-MM-dd HH:mm'),
                        actions: 'btn'
                    });
                    _this.dataSource.refresh();
                });
            });
            _this.overviewFound = true;
        });
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/overview/overview.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_port_call_overview_service__["a" /* PortCallOverviewService */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_3__shared_services_content_service__["a" /* ContentService */], __WEBPACK_IMPORTED_MODULE_5__shared_services_port_call_service__["a" /* PortCallService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_port_call_overview_service__["a" /* PortCallOverviewService */]])
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

module.exports = "<div clas=\"row\">\r\n    <div class=\"col-6\">\r\n        <ssn-card title='Create New Port Call' icon='portcall.png'>\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-ssn\" (click)=\"selectRegister()\">Register New Port Call</button>\r\n            </div>\r\n        </ssn-card>\r\n    </div>\r\n</div>\r\n\r\n<div clas=\"row\">\r\n    <div class=\"col\">\r\n        <app-overview></app-overview>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/port-call.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
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
    function PortCallComponent(contentService, portCallService) {
        this.contentService = contentService;
        this.portCallService = portCallService;
    }
    PortCallComponent.prototype.ngOnInit = function () {
    };
    PortCallComponent.prototype.selectRegister = function () {
        this.portCallService.wipeServiceData();
        this.contentService.setContent('Register New Port Call');
    };
    PortCallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-port-call',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/port-call.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/port-call.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_port_call_service__["a" /* PortCallService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__ = __webpack_require__("./node_modules/ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_shared_module__ = __webpack_require__("./src/app/shared/components/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clearance_clearance_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/clearance/clearance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__confirmation_confirmation_module__ = __webpack_require__("./src/app/main-content/content-container/port-call/confirmation/confirmation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_port_call_new_port_call_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/new-port-call.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_port_call_ship_location_time_confirm_data_confirm_data_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/confirm-data/confirm-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new_port_call_ship_location_time_eta_etd_eta_etd_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/eta-etd/eta-etd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__new_port_call_ship_location_time_find_location_find_location_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-location/find-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__new_port_call_ship_location_time_find_ship_find_ship_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/find-ship/find-ship.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__new_port_call_ship_location_time_ship_location_time_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/new-port-call/ship-location-time/ship-location-time.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__overview_button_row_button_row_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/overview/button-row/button-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__overview_overview_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__port_call_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/port-call.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__registration_forms_forms_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__registration_forms_port_call_details_crew_passengers_dimensions_crew_passengers_dimensions_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__registration_forms_port_call_details_port_call_details_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/port-call-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__registration_forms_port_call_details_purpose_purpose_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/purpose/purpose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__registration_forms_port_call_details_reporting_reporting_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/reporting/reporting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__registration_forms_port_call_details_save_details_save_details_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/save-details/save-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__registration_info_info_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__registration_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__registration_registration_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__view_port_call_view_port_call_component__ = __webpack_require__("./src/app/main-content/content-container/port-call/view-port-call/view-port-call.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var PortCallModule = /** @class */ (function () {
    function PortCallModule() {
    }
    PortCallModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_29__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__confirmation_confirmation_module__["a" /* ConfirmationModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_components_shared_module__["a" /* SharedModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__overview_button_row_button_row_component__["a" /* ButtonRowComponent */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_27__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_26__registration_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__registration_forms_forms_component__["a" /* FormsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__new_port_call_ship_location_time_ship_location_time_component__["a" /* ShipLocationTimeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__new_port_call_ship_location_time_find_ship_find_ship_component__["a" /* FindShipComponent */],
                __WEBPACK_IMPORTED_MODULE_13__new_port_call_ship_location_time_find_location_find_location_component__["a" /* FindLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__new_port_call_ship_location_time_eta_etd_eta_etd_component__["a" /* EtaEtdComponent */],
                __WEBPACK_IMPORTED_MODULE_11__new_port_call_ship_location_time_confirm_data_confirm_data_component__["a" /* ConfirmDataComponent */],
                __WEBPACK_IMPORTED_MODULE_21__registration_forms_port_call_details_port_call_details_component__["a" /* PortCallDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__registration_forms_port_call_details_reporting_reporting_component__["a" /* ReportingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__registration_forms_port_call_details_crew_passengers_dimensions_crew_passengers_dimensions_component__["a" /* CrewPassengersDimensionsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__registration_forms_port_call_details_purpose_purpose_component__["a" /* PurposeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_18__port_call_component__["a" /* PortCallComponent */],
                __WEBPACK_IMPORTED_MODULE_25__registration_info_info_component__["a" /* InfoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__overview_button_row_button_row_component__["a" /* ButtonRowComponent */],
                __WEBPACK_IMPORTED_MODULE_28__view_port_call_view_port_call_component__["a" /* ViewPortCallComponent */],
                __WEBPACK_IMPORTED_MODULE_8__clearance_clearance_component__["a" /* ClearanceComponent */],
                __WEBPACK_IMPORTED_MODULE_24__registration_forms_port_call_details_save_details_save_details_component__["a" /* SaveDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__new_port_call_new_port_call_component__["a" /* NewPortCallComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_18__port_call_component__["a" /* PortCallComponent */],
                __WEBPACK_IMPORTED_MODULE_10__new_port_call_new_port_call_component__["a" /* NewPortCallComponent */],
                __WEBPACK_IMPORTED_MODULE_27__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_28__view_port_call_view_port_call_component__["a" /* ViewPortCallComponent */],
                __WEBPACK_IMPORTED_MODULE_8__clearance_clearance_component__["a" /* ClearanceComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__shared_services_port_call_service__["a" /* PortCallService */]
            ]
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

module.exports = "<app-progress-bar></app-progress-bar>\r\n<app-info></app-info>\r\n<div [ngSwitch]=\"selectedComponent\">\r\n    <app-port-call-details *ngSwitchCase=\"'Port Call Details'\"></app-port-call-details>\r\n\r\n    <app-confirmation *ngSwitchCase=\"'Confirm Port Call'\"></app-confirmation>\r\n    <div *ngSwitchDefault class=\"alert alert-danger\" role=\"alert\">\r\n        This page is not implemented yet.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
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
    function FormsComponent(contentService, portCallService) {
        this.contentService = contentService;
        this.portCallService = portCallService;
    }
    FormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.portCallFormName$.subscribe(function (content) {
            _this.selectedComponent = content;
        });
    };
    FormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forms',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/forms.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/forms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_port_call_service__["a" /* PortCallService */]])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.html":
/***/ (function(module, exports) {

module.exports = "<ssn-card title=\"Crew, Passengers and Dimensions\" icon=\"crew.png\">\r\n  <form>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\" for=\"number_of_crew\">Number of Crew</label>\r\n          <div class=\"col my-auto\">\r\n            <input name=\"number_of_crew\" #numberOfCrew=\"ngModel\" class=\"form-control form-control-sm\" placeholder=\"Enter number of crew\" \r\n              pattern=\"{{positiveIntegerRegex}}\" (keypress)=\"limitInputToPositiveInteger($event)\" (ngModelChange)=\"persistData()\" \r\n              [(ngModel)]=\"crewPassengersAndDimensionsModel.numberOfCrew\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!isValid(numberOfCrew.valid)\" class=\"alert alert-danger\">\r\n          <li *ngIf=\"numberOfCrew.hasError('pattern')\"><small>Wrong format.</small></li>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label-sm no-wrap col-sm-5 col-md-3 col-lg-5\" for=\"number_of_passengers\">Number of Passengers</label>\r\n          <div class=\"col my-auto\">\r\n            <input name=\"number_of_passengers\" #numberOfPassengers=\"ngModel\" class=\"form-control form-control-sm\" placeholder=\"Enter actual draught\"\r\n              pattern=\"{{positiveIntegerRegex}}\" (keypress)=\"limitInputToPositiveInteger($event)\" (ngModelChange)=\"persistData()\" \r\n              [(ngModel)]=\"crewPassengersAndDimensionsModel.numberOfPassengers\" />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!isValid(numberOfPassengers.valid)\" class=\"alert alert-danger\">\r\n          <li *ngIf=\"numberOfPassengers.hasError('pattern')\"><small>Wrong format.</small></li>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\" for=\"actual_draught\">Actual Draught</label>\r\n          <div class=\"col my-auto\">\r\n            <input name=\"actual_draught\" #actualDraught=\"ngModel\" class=\"form-control form-control-sm\" placeholder=\"Enter actual draught\" pattern=\"{{positiveDecimalRegex}}\"\r\n              (keypress)=\"limitInputToPositiveDecimal($event)\" (ngModelChange)=\"persistData()\" [(ngModel)]=\"crewPassengersAndDimensionsModel.actualDraught\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!isValid(actualDraught.valid)\" class=\"alert alert-danger\">\r\n          <li *ngIf=\"actualDraught.hasError('pattern')\"><small>Wrong format.</small></li>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\" for=\"air_draught\">Air Draught</label>\r\n          <div class=\"col my-auto\">\r\n            <input name=\"air_draught\" #airDraught=\"ngModel\" class=\"form-control form-control-sm\" placeholder=\"Enter air draught\" pattern=\"{{positiveDecimalRegex}}\"\r\n              (keypress)=\"limitInputToPositiveDecimal($event)\" (ngModelChange)=\"persistData()\" [(ngModel)]=\"crewPassengersAndDimensionsModel.airDraught\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!isValid(airDraught.valid)\" class=\"alert alert-danger\">\r\n          <li *ngIf=\"airDraught.hasError('pattern')\"><small>Wrong format.</small></li>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </form>\r\n</ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrewPassengersDimensionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
        this.positiveDecimalRegex = '^[0-9]+((\.[0-9]+){1})?$';
        this.positiveIntegerRegex = '^[0-9]*$';
        this.crewPassengersAndDimensionsModel = {
            numberOfCrew: null,
            numberOfPassengers: null,
            actualDraught: null,
            airDraught: null
        };
    }
    CrewPassengersDimensionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallService.crewPassengersAndDimensionsData$.subscribe(function (data) {
            if (data != null) {
                _this.crewPassengersAndDimensionsModel = data;
            }
        });
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
    CrewPassengersDimensionsComponent.prototype.limitInputToPositiveInteger = function ($event) {
        return $event.charCode >= 48 && $event.charCode <= 57;
    };
    CrewPassengersDimensionsComponent.prototype.limitInputToPositiveDecimal = function ($event) {
        return $event.charCode == 46 || ($event.charCode >= 48 && $event.charCode <= 57);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgForm */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgForm */])
    ], CrewPassengersDimensionsComponent.prototype, "form", void 0);
    CrewPassengersDimensionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-crew-passengers-dimensions',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/crew-passengers-dimensions/crew-passengers-dimensions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */]])
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

module.exports = "<ssn-card title=\"Port Call Purpose\" icon=\"target.png\">\r\n  <label for=\"purposes\">\r\n    <span class=\"no-wrap\">Select purposes for this</span>\r\n    <span class=\"no-wrap\">port call.</span>\r\n  </label>\r\n  <ng-select id=\"purposes\" [items]=\"purposeList\" [multiple]=\"true\" [closeOnSelect]=\"true\" bindLabel=\"name\" placeholder=\"Select purposes\"\r\n    [(ngModel)]=\"selectedPurposes\" (change)=\"purposeSelected()\">\r\n  </ng-select>\r\n\r\n  <div *ngIf=\"otherPurposeSelected\" class=\"form-group row mt-3\">\r\n    <label class=\"col-form-label-sm no-wrap col-sm-4 col-md-3 col-lg-4\" for=\"other_purpose\">Specify Other Purpose:</label>\r\n    <div class=\"col my-auto\">\r\n      <input [(ngModel)]=\"otherPurposeName\" name=\"other_purpose\" type=\"text\" class=\"form-control form-control-sm\" id=\"other_purpose\"\r\n        placeholder=\"Enter other purpose\" (ngModelChange)=\"setOtherPurposeName()\" />\r\n    </div>\r\n  </div>\r\n</ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/purpose/purpose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurposeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_purpose_service__ = __webpack_require__("./src/app/shared/services/purpose.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { CommonModule } from '@angular/common';


var OTHER_PURPOSE_ID = 100249;
var PurposeComponent = /** @class */ (function () {
    function PurposeComponent(purposeService, portCallService) {
        this.purposeService = purposeService;
        this.portCallService = portCallService;
        this.selectedPurposes = [];
        this.purposeList = [];
        this.amountOfPurposes = 0;
        this.otherPurposeSelected = false;
        this.otherPurposeName = "";
    }
    PurposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.purposeService.getPurposes().subscribe(function (data) {
            _this.purposeList = data;
            _this.amountOfPurposes = Object.keys(_this.purposeList).length;
        });
        // this.selectedPurposes = this.portCallService.portCallPurposeData$;
        this.portCallService.portCallPurposeData$.subscribe(function (data) {
            if (data) {
                _this.selectedPurposes = data;
                _this.otherPurposeSelected = (_this.selectedPurposes.find(function (p) { return p.portCallPurposeId == OTHER_PURPOSE_ID; }) != null);
            }
        });
        this.portCallService.otherPurposeName$.subscribe(function (data) {
            _this.otherPurposeName = data;
        });
    };
    PurposeComponent.prototype.purposeSelected = function () {
        this.portCallService.setPortCallPurposeData(this.selectedPurposes);
        console.log("SELECTED: ", this.selectedPurposes);
        if (this.otherPurposeSelected) {
            this.setOtherPurposeName();
        }
    };
    PurposeComponent.prototype.setOtherPurposeName = function () {
        this.portCallService.setOtherPurposeName(this.otherPurposeName);
    };
    PurposeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            selector: 'app-purpose',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/purpose/purpose.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/purpose/purpose.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_purpose_service__["a" /* PurposeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_purpose_service__["a" /* PurposeService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */]])
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

module.exports = "<ssn-card title=\"Reporting for this Port Call\" icon=\"verification-clipboard.png\">\r\n  <form class=\"form-inline\">\r\n    <div class=\"form-check mx-2\" *ngFor=\"let cb of checkboxes\">\r\n      <input class=\"form-check-input clickable\" type=\"checkbox\" id=\"{{cb.name}}\" [checked]=\"cb.checked\" (change)=\"checkboxChecked(cb)\">\r\n      <label class=\"form-check-label clickable\" for=\"{{cb.name}}\">\r\n        <img src=\"{{baseIconUrl}}{{cb.icon}}\" height=\"16px\">{{cb.name}}\r\n      </label>\r\n    </div>\r\n  </form>\r\n</ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/reporting/reporting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
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
        this.baseIconUrl = "assets/images/VoyageIcons/128x128/";
        this.checkboxes = [];
    }
    ReportingComponent.prototype.checkboxChecked = function (checkboxModel) {
        checkboxModel.checked = !checkboxModel.checked;
        switch (checkboxModel.name) {
            case "Hazmat":
                this.reportingModel.reportingHazmat = checkboxModel.checked;
                break;
            case "Bunkers":
                this.reportingModel.reportingBunkers = checkboxModel.checked;
                break;
            case "Cargo":
                this.reportingModel.reportingCargo = checkboxModel.checked;
                break;
            case "Ship Stores":
                this.reportingModel.reportingShipStores = checkboxModel.checked;
                break;
            case "Crew":
                this.reportingModel.reportingCrew = checkboxModel.checked;
                break;
            case "Pax":
                this.reportingModel.reportingPax = checkboxModel.checked;
                break;
            case "Waste":
                this.reportingModel.reportingWaste = checkboxModel.checked;
                break;
            default:
                console.log("Oops. Something went wrong with the checkboxes.");
        }
        console.log(this.reportingModel);
        this.portCallService.setReportingForThisPortCallData(this.reportingModel);
    };
    ReportingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallService.reportingForThisPortCallData$.subscribe(function (data) {
            if (data != null) {
                _this.reportingModel = data;
            }
            else {
                _this.reportingModel = {
                    reportingHazmat: null,
                    reportingBunkers: null,
                    reportingCargo: null,
                    reportingShipStores: null,
                    reportingCrew: null,
                    reportingPax: null,
                    reportingWaste: null
                };
            }
            _this.checkboxes = [
                { name: "Hazmat", icon: "hazard.png", checked: _this.reportingModel.reportingHazmat || false },
                { name: "Bunkers", icon: "barrel.png", checked: _this.reportingModel.reportingBunkers || false },
                { name: "Cargo", icon: "cargo.png", checked: _this.reportingModel.reportingCargo || false },
                { name: "Ship Stores", icon: "alcohol.png", checked: _this.reportingModel.reportingShipStores || false },
                { name: "Crew", icon: "crew.png", checked: _this.reportingModel.reportingCrew || false },
                { name: "Pax", icon: "pax.png", checked: _this.reportingModel.reportingPax || false },
                { name: "Waste", icon: "trash.png", checked: _this.reportingModel.reportingWaste || false }
            ];
        });
    };
    ReportingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reporting',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/reporting/reporting.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/reporting/reporting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */]])
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

module.exports = "<ssn-card title=\"Save Port Call Details\" icon=\"save.png\">\r\n  <div class=\"text-center\" *ngIf=\"!dataIsPristine\">\r\n    <p *ngIf=\"!crewPassengersAndDimensionsMeta.valid\">cpad error</p>\r\n    <button class=\"btn btn-ssn\" (click)=\"saveDetails()\" [disabled]=\"!crewPassengersAndDimensionsMeta.valid\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/save.png\" height=\"24px\">\r\n      <span>Save Details</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"text-center\" *ngIf=\"dataIsPristine\">\r\n    The data in this form is unchanged.\r\n  </div>\r\n\r\n</ssn-card>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/forms/port-call-details/save-details/save-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveDetailsComponent = /** @class */ (function () {
    function SaveDetailsComponent(portCallService) {
        this.portCallService = portCallService;
        this.crewPassengersAndDimensionsMeta = { valid: true };
        this.dataIsPristine = true;
    }
    SaveDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallService.detailsPristine$.subscribe(function (detailsDataIsPristine) {
            _this.dataIsPristine = detailsDataIsPristine;
        });
        // Reporting
        this.portCallService.reportingForThisPortCallData$.subscribe(function (reportingData) {
            if (reportingData != null) {
                _this.reportingModel = reportingData;
            }
        });
        // Crew, passengers, and dimensions
        this.portCallService.crewPassengersAndDimensionsData$.subscribe(function (cpadData) {
            if (cpadData != null) {
                _this.crewPassengersAndDimensionsModel = cpadData;
            }
        });
        // Purpose
        this.portCallService.portCallPurposeData$.subscribe(function (purposeData) {
            if (purposeData != null) {
                _this.purposeFound = true;
                _this.purposeModel = purposeData;
            }
        });
        this.portCallService.otherPurposeName$.subscribe(function (otherNameData) {
            _this.otherPurposeName = otherNameData;
        });
        this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(function (cpadMetaData) {
            _this.crewPassengersAndDimensionsMeta = cpadMetaData;
        });
    };
    SaveDetailsComponent.prototype.saveDetails = function () {
        if (this.crewPassengersAndDimensionsMeta.valid) {
            this.portCallService.saveDetails(this.purposeModel, this.otherPurposeName);
        }
    };
    SaveDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-save-details',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/save-details/save-details.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/forms/port-call-details/save-details/save-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */]])
    ], SaveDetailsComponent);
    return SaveDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/info/info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <table-card title=\"Ship\" icon=\"ship.png\">\r\n      <tbody>\r\n        <tr>\r\n          <td>\r\n            <img *ngIf=\"shipFlag\" src=\"assets/images/Flags/128x128/{{shipFlag | lowercase}}.png\" class=\"my-2\" height=\"32px\">\r\n          </td>\r\n          <td *ngFor=\"let entry of portCallShipInfo\" class=\"no-wrap px-1 mx-1\">\r\n            <tr>\r\n              <small>{{ entry.description }}</small>\r\n            </tr>\r\n            <tr>{{ entry.data }}</tr>\r\n          </td>\r\n        </tr>\r\n    </table-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mb-3\">\r\n  <div class=\"col\">\r\n    <table-card title=\"Location\" icon=\"location.png\">\r\n      <tbody>\r\n        <tr>\r\n          <td>\r\n            <img *ngIf=\"locationFlag\" src=\"assets/images/Flags/128x128/{{locationFlag | lowercase}}.png\" class=\"my-2\" height=\"32px\">\r\n          </td>\r\n          <td *ngFor=\"let entry of portCallLocationInfo\" class=\"no-wrap px-1 mx-1\">\r\n            <tr>\r\n              <small>{{ entry.description }}</small>\r\n            </tr>\r\n            <tr>{{ entry.data }}</tr>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SHIP_NAME = "Ship Name:";
var CALL_SIGN = "Call Sign:";
var IMO_NO = "IMO no:";
var GROSS_TONNAGE = "Gross Tonnage:";
var LENGTH = "Length:";
var SHIP_TYPE = "Ship Type:";
var LOCATION = "Location:";
var LOCATION_CODE = "Location Code:";
var ETA = "ETA:";
var ETD = "ETD:";
var InfoComponent = /** @class */ (function () {
    function InfoComponent(portCallService) {
        this.portCallService = portCallService;
        this.portCallShipInfo = [
            { description: SHIP_NAME, data: null },
            { description: CALL_SIGN, data: null },
            { description: IMO_NO, data: null },
            { description: GROSS_TONNAGE, data: null },
            { description: LENGTH, data: null },
            { description: SHIP_TYPE, data: null }
        ];
        this.portCallLocationInfo = [
            { description: LOCATION, data: null },
            { description: LOCATION_CODE, data: null },
            { description: ETA, data: null },
            { description: ETD, data: null }
        ];
    }
    InfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portCallService.overviewData$.subscribe(function (data) {
            if (data != null) {
                // Ship
                if (data.shipOverview != null) {
                    if (data.shipOverview.country != null) {
                        _this.shipFlag = data.shipOverview.country.twoCharCode;
                    }
                    _this.portCallShipInfo.find(function (p) { return p.description == SHIP_NAME; }).data = data.shipOverview.ship.name;
                    _this.portCallShipInfo.find(function (p) { return p.description == CALL_SIGN; }).data = data.shipOverview.ship.callSign;
                    _this.portCallShipInfo.find(function (p) { return p.description == IMO_NO; }).data = data.shipOverview.ship.imoNo;
                    _this.portCallShipInfo.find(function (p) { return p.description == GROSS_TONNAGE; }).data = data.shipOverview.ship.grossTonnage;
                    _this.portCallShipInfo.find(function (p) { return p.description == LENGTH; }).data = data.shipOverview.ship.length;
                    if (data.shipOverview.shipType != null) {
                        _this.portCallShipInfo.find(function (p) { return p.description == SHIP_TYPE; }).data = data.shipOverview.shipType.name;
                    }
                }
                // Location
                if (data.locationOverview != null) {
                    if (data.locationOverview.country != null) {
                        _this.locationFlag = data.locationOverview.country.twoCharCode.toLowerCase();
                    }
                    _this.portCallLocationInfo.find(function (p) { return p.description == LOCATION; }).data = data.locationOverview.location.name;
                    _this.portCallLocationInfo.find(function (p) { return p.description == LOCATION_CODE; }).data = data.locationOverview.location.locationCode;
                }
            }
        });
        // ETA/ETD
        this.portCallService.etaEtdData$.subscribe(function (data) {
            if (data != null) {
                var eta = data.eta.year + "-" + _this.dateTimeFormat(data.eta.month) + "-" + _this.dateTimeFormat(data.eta.day)
                    + " " + _this.dateTimeFormat(data.eta.hour) + ":" + _this.dateTimeFormat(data.eta.minute);
                var etd = data.etd.year + "-" + _this.dateTimeFormat(data.etd.month) + "-" + _this.dateTimeFormat(data.etd.day)
                    + " " + _this.dateTimeFormat(data.etd.hour) + ":" + _this.dateTimeFormat(data.etd.minute);
                _this.portCallLocationInfo.find(function (p) { return p.description == ETA; }).data = eta;
                _this.portCallLocationInfo.find(function (p) { return p.description == ETD; }).data = etd;
            }
        });
    };
    InfoComponent.prototype.dateTimeFormat = function (number) {
        if (number <= 9) {
            return "0" + number;
        }
        else {
            return number;
        }
    };
    InfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-info',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/info/info.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/info/info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_port_call_service__["a" /* PortCallService */]])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/progress-bar/progress-bar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-ssn bg-ssn text-ssn\">\r\n  <div class=\"row px-3 py-1\">\r\n\r\n    <div *ngFor=\"let menuEntry of menuEntries\">\r\n      <div *ngIf=\"menuEntry.checked\" class=\"mx-1 my-1\">\r\n        <button class=\"btn btn-sm\" [ngClass]=\"{'btn-danger': menuEntry.hasError, 'btn-ssn': !menuEntry.hasError}\" (click)=\"setPortCallForm(menuEntry.name)\">\r\n          <img src=\"{{iconPath}}{{menuEntry.icon}}\" height=\"24px\" /> {{menuEntry.name}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_port_call_service__ = __webpack_require__("./src/app/shared/services/port-call.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PORT_CALL_DETAILS = "Port Call Details";
var CONFIRM_PORT_CALL = "Confirm Port Call";
var HAZMAT = "Hazmat";
var BUNKERS = "Bunkers";
var CARGO = "Cargo";
var SHIP_STORES = "Ship Stores";
var CREW = "Crew";
var PAX = "Pax";
var WASTE = "Waste";
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent(portCallService, contentService) {
        this.portCallService = portCallService;
        this.contentService = contentService;
        this.iconPath = "assets/images/VoyageIcons/128x128/white/";
        this.baseMenuEntries = [
            { name: PORT_CALL_DETAILS, icon: "verification-clipboard.png", checked: true, hasError: false }
        ];
        this.finalMenuEntries = [
            { name: CONFIRM_PORT_CALL, icon: "checkmark.png", checked: true, hasError: false }
        ];
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuEntries = this.baseMenuEntries.concat(this.finalMenuEntries);
        this.portCallService.reportingForThisPortCallData$.subscribe(function (reportingData) {
            if (reportingData != null) {
                var falForms = [
                    { name: HAZMAT, icon: "hazard.png", checked: reportingData.reportingHazmat || false, hasError: false },
                    { name: BUNKERS, icon: "barrel.png", checked: reportingData.reportingBunkers || false, hasError: false },
                    { name: CARGO, icon: "cargo.png", checked: reportingData.reportingCargo || false, hasError: false },
                    { name: SHIP_STORES, icon: "alcohol.png", checked: reportingData.reportingShipStores || false, hasError: false },
                    { name: CREW, icon: "crew.png", checked: reportingData.reportingCrew || false, hasError: false },
                    { name: PAX, icon: "pax.png", checked: reportingData.reportingPax || false, hasError: false },
                    { name: WASTE, icon: "trash.png", checked: reportingData.reportingWaste || false, hasError: false }
                ];
                _this.menuEntries = _this.baseMenuEntries.concat(falForms).concat(_this.finalMenuEntries);
            }
        });
        this.portCallService.crewPassengersAndDimensionsMeta$.subscribe(function (metaData) {
            _this.menuEntries.find(function (p) { return p.name == PORT_CALL_DETAILS; }).hasError = !metaData.valid;
        });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_port_call_service__["a" /* PortCallService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */]])
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

module.exports = "<div class=\"jumbotron bg-ssn-light\">\r\n  <div class=\"row mb-3 text-center\">\r\n    <div class=\"col-2\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/portcall.png\" height=\"64px\">\r\n    </div>\r\n    <div class=\"col-8\">\r\n      <h3 class=\"text-ssn display-4\">REGISTER <span class=\"no-wrap\">PORT CALL</span></h3>\r\n      <h4 class=\"text-ssn no-wrap\">~ {{ selectedComponent }} ~</h4>\r\n    </div>\r\n  </div>\r\n  <app-forms></app-forms>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
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


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(contentService) {
        this.contentService = contentService;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.portCallFormName$.subscribe(function (content) {
            _this.selectedComponent = content;
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */]])
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

module.exports = "<div class=\"jumbotron bg-ssn-light\">\r\n  <div class=\"row mb-3 text-center\">\r\n    <div class=\"col-2\">\r\n      <img src=\"assets/images/VoyageIcons/128x128/white/eye.png\" height=\"64px\">\r\n    </div>\r\n    <div class=\"col-8\">\r\n      <h3 class=\"text-ssn display-4\">VIEW\r\n        <span class=\"no-wrap\">PORT CALL</span>\r\n      </h3>\r\n    </div>\r\n    <div class=\"col-2\">\r\n      <button class=\"btn btn-light\" (click)=\"goBack()\">\r\n        <img src=\"assets/images/VoyageIcons/128x128/left-arrow.png\" height=\"32px\">\r\n        <br>\r\n        <span class=\"no-wrap\"> GO BACK</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <app-info></app-info>\r\n  \r\n  <app-confirmation></app-confirmation>\r\n  \r\n  <div class=\"row text-center\">\r\n    <div class=\"col\">\r\n      <button class=\"btn btn-light\" (click)=\"goBack()\">\r\n        <img src=\"assets/images/VoyageIcons/128x128/left-arrow.png\" height=\"32px\">\r\n        <span class=\"no-wrap\"> GO BACK</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main-content/content-container/port-call/view-port-call/view-port-call.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPortCallComponent; });
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


var ViewPortCallComponent = /** @class */ (function () {
    function ViewPortCallComponent(contentService) {
        this.contentService = contentService;
    }
    ViewPortCallComponent.prototype.ngOnInit = function () {
    };
    ViewPortCallComponent.prototype.goBack = function () {
        this.contentService.setContent("Port Call");
    };
    ViewPortCallComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-port-call',
            template: __webpack_require__("./src/app/main-content/content-container/port-call/view-port-call/view-port-call.component.html"),
            styles: [__webpack_require__("./src/app/main-content/content-container/port-call/view-port-call/view-port-call.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */]])
    ], ViewPortCallComponent);
    return ViewPortCallComponent;
}());



/***/ }),

/***/ "./src/app/main-content/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-content/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-dark bg-ssn\">\r\n\r\n    <button class=\"btn btn-sm btn-ssn mr-auto\" type=\"button\" (click)=\"menuIsCollapsed = !menuIsCollapsed\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"!loggedIn\">\r\n      <li class=\"nav-item\">\r\n        <form class=\"form-inline\">\r\n          <div class=\"btn-group\">\r\n            <button class=\"btn btn-light btn-sm\">Admin</button>\r\n            <button class=\"btn btn-outline-light btn-sm\" (click)=\"logout()\">Log out</button>\r\n          </div>\r\n        </form>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"collapse navbar-collapse\" [ngbCollapse]=\"menuIsCollapsed\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm mx-auto mt-2\" *ngFor=\"let menu_entry of menu_entries\">\r\n          <button class=\"btn btn-ssn btn-sm col\" (click)=\"setContent(menu_entry.componentDescription)\">\r\n            <img src=\"{{menu_entry.iconPath}}\" height=\"24px\" /> {{menu_entry.title}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/main-content/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
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
    function HeaderComponent(loginService, contentService) {
        this.loginService = loginService;
        this.contentService = contentService;
        this.menuIsCollapsed = true;
        this.icon_path = "assets/images/VoyageIcons/128x128/white/";
        this.menu_entries = [
            { title: "USERS", iconPath: this.icon_path + "user.png", componentDescription: "Register User" },
            { title: "SHIPS", iconPath: this.icon_path + "ship.png", componentDescription: "Register Ship" },
            { title: "LOCATIONS", iconPath: this.icon_path + "location.png", componentDescription: "Register Location" },
            { title: "ORGANIZATIONS", iconPath: this.icon_path + "pax.png", componentDescription: "Register Organization" },
            { title: "PORT CALL", iconPath: this.icon_path + "portcall.png", componentDescription: "Port Call" }
        ];
    }
    HeaderComponent.prototype.logout = function () {
        this.loginService.logout();
    };
    HeaderComponent.prototype.setContent = function (contentName) {
        this.contentService.setContent(contentName);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.loginService.authNavStatus$.subscribe(function (status) { return _this.loggedIn = status; });
        this.contentService.contentName$.subscribe(function () { return _this.menuIsCollapsed = true; });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/main-content/header/header.component.html"),
            styles: [__webpack_require__("./src/app/main-content/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_content_service__["a" /* ContentService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main-content/main-content.component.css":
/***/ (function(module, exports) {

module.exports = ".page-content {\r\n    margin-bottom: -100px;\r\n}\r\n\r\n.footer-gap {\r\n    height: 100px;\r\n}\r\n\r\nfooter {\r\n    height: 100px;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n\r\n.footer-section {\r\n    height: 100px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/main-content/main-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" [ngStyle]=\"{'min-height': clientHeight + 'px'}\">\r\n  <app-header></app-header>\r\n  <br>\r\n  <div class=\"mx-5\">\r\n      <app-content-container></app-content-container>\r\n  </div>\r\n  <div class=\"footer-gap\"></div>\r\n</div>\r\n\r\n<footer class=\"footer bg-ssn text-ssn text-center\">\r\n  <div class=\"row\">\r\n      <div class=\"col-4 footer-section\">\r\n          <h4>Maritime Single Window</h4>\r\n      </div>\r\n      <div class=\"col-4 footer-section\">\r\n          <img src=\"/assets/images/logo.png\" height=\"60px\" />\r\n      </div>\r\n      <div class=\"col-4 footer-section\">\r\n          <img src=\"/assets/images/imo-logo.png\" height=\"80px\" />\r\n      </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/main-content/main-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
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

var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
        this.clientHeight = window.innerHeight;
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-content',
            template: __webpack_require__("./src/app/main-content/main-content.component.html"),
            styles: [__webpack_require__("./src/app/main-content/main-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/rxjs-operators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/merge.js");
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics


// Operators









/***/ }),

/***/ "./src/app/shared/components/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ssn_card_ssn_card_component__ = __webpack_require__("./src/app/shared/components/ssn-card/ssn-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__table_card_table_card_component__ = __webpack_require__("./src/app/shared/components/table-card/table-card.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ssn_card_ssn_card_component__["a" /* SsnCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__table_card_table_card_component__["a" /* TableCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ssn_card_ssn_card_component__["a" /* SsnCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__table_card_table_card_component__["a" /* TableCardComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/components/ssn-card/ssn-card.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/ssn-card/ssn-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card ssn-card text-center my-2\">\r\n  <div class=\"card-header bg-ssn text-ssn\">\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <img *ngIf=\"icon\" src=\"{{iconPath}}{{icon}}\" height=\"32px\" />\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <h4>{{title}}</h4>\r\n      </div>\r\n      <div class=\"col-2\" *ngIf=\"collapsible\">\r\n        <button class=\"btn btn-sm btn-outline-light\" (click)=\"changeState()\">\r\n          <img src=\"{{iconPath}}{{collapsedIcon}}\" height=\"24px\" class=\"clickable\">\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body text-left\" *ngIf=\"!collapsed\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>"

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
        this.iconPath = "assets/images/VoyageIcons/128x128/white/";
        this.collapsed = false;
        this.collapsedIcon = "arrowhead-down.png";
    }
    SsnCardComponent.prototype.ngOnInit = function () {
    };
    SsnCardComponent.prototype.changeState = function () {
        this.collapsed = !this.collapsed;
        this.collapsedIcon = this.collapsed ? "arrowhead-left.png" : "arrowhead-down.png";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SsnCardComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SsnCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SsnCardComponent.prototype, "collapsible", void 0);
    SsnCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ssn-card',
            template: __webpack_require__("./src/app/shared/components/ssn-card/ssn-card.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/ssn-card/ssn-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SsnCardComponent);
    return SsnCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/table-card/table-card.component.css":
/***/ (function(module, exports) {

module.exports = ".table-card-header-bg {\r\n    background-color: #344d6e;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/table-card/table-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"border border-white table-card-header-bg p-1\">\r\n  <div class=\"row text-center text-white px-4\">\r\n    <div class=\"d-table-cell mr-auto\">\r\n      <img *ngIf=\"icon\" src=\"{{iconPath}}{{icon}}\" height=\"24px\" />\r\n    </div>\r\n    <div class=\"d-table-cell mx-auto\">\r\n      <span>{{ title }}</span>\r\n    </div>\r\n    <div class=\"d-table-cell ml-auto\">\r\n      <button *ngIf=\"collapsible\" class=\"btn btn-sm btn-outline-light\" (click)=\"changeState()\">\r\n        <img src=\"{{iconPath}}{{collapsedIcon}}\" height=\"16px\" class=\"clickable\">\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!collapsed\" class=\"table-responsive border-bottom border-left border-right border-white text-white\">\r\n  <table class=\"table\">\r\n    <ng-content></ng-content>\r\n  </table>\r\n</div>"

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
        this.iconPath = "assets/images/VoyageIcons/128x128/white/";
        this.collapsed = false;
        this.collapsedIcon = "arrowhead-down.png";
    }
    TableCardComponent.prototype.ngOnInit = function () {
    };
    TableCardComponent.prototype.changeState = function () {
        this.collapsed = !this.collapsed;
        this.collapsedIcon = this.collapsed ? "arrowhead-left.png" : "arrowhead-down.png";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TableCardComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TableCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableCardComponent.prototype, "collapsible", void 0);
    TableCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'table-card',
            template: __webpack_require__("./src/app/shared/components/table-card/table-card.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/table-card/table-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableCardComponent);
    return TableCardComponent;
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

/***/ "./src/app/shared/models/port-call-overview-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallOverviewModel; });
var PortCallOverviewModel = /** @class */ (function () {
    function PortCallOverviewModel() {
    }
    return PortCallOverviewModel;
}());



/***/ }),

/***/ "./src/app/shared/models/ship-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipModel; });
var ShipModel = /** @class */ (function () {
    function ShipModel() {
        this.shipStatusId = 101216;
    }
    return ShipModel;
}());



/***/ }),

/***/ "./src/app/shared/models/user-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");

var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Observable */].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Observable */].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
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



var ContentService = /** @class */ (function (_super) {
    __extends(ContentService, _super);
    function ContentService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('Port Call');
        _this.contentName$ = _this.contentSource.asObservable();
        _this.portCallFormSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]('Port Call Details');
        _this.portCallFormName$ = _this.portCallFormSource.asObservable();
        return _this;
    }
    ContentService.prototype.setContent = function (contentName) {
        this.contentSource.next(contentName);
    };
    ContentService.prototype.setPortCallForm = function (contentName) {
        this.portCallFormSource.next(contentName);
    };
    ContentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ContentService);
    return ContentService;
}(__WEBPACK_IMPORTED_MODULE_2__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/shared/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("./src/app/shared/services/search.service.ts");
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
    function LocationService(http) {
        this.http = http;
        this.searchService = new __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */](http);
        this.actionUrl = 'api/location/search/';
    }
    LocationService.prototype.search = function (term) {
        return this.searchService.search(this.actionUrl, term);
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_service__ = __webpack_require__("./src/app/shared/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rxjs_operators__ = __webpack_require__("./src/app/rxjs-operators.js");
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





// Add the RxJS Observable operators we need in this app.

var LoginService = /** @class */ (function (_super) {
    __extends(LoginService, _super);
    function LoginService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* BehaviorSubject */](false);
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.loggedIn = false;
        _this.loggedIn = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        _this._authNavStatusSource.next(_this.loggedIn);
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    LoginService.prototype.register = function () {
        //Not yet implemented
    };
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.baseUrl + '/auth/login', JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.auth_token);
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            return true;
        })
            .catch(this.handleError);
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
        this._authNavStatusSource.next(false);
    };
    LoginService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__utils_config_service__["a" /* ConfigService */]])
    ], LoginService);
    return LoginService;
}(__WEBPACK_IMPORTED_MODULE_3__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/shared/services/organization.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganizationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("./src/app/shared/services/search.service.ts");
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
    function OrganizationService(http) {
        this.http = http;
        this.searchService = new __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */](http);
        this.actionUrl = 'api/organization/search';
    }
    OrganizationService.prototype.search = function (term) {
        return this.searchService.search(this.actionUrl, term);
    };
    OrganizationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], OrganizationService);
    return OrganizationService;
}());



/***/ }),

/***/ "./src/app/shared/services/port-call-overview.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallOverviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
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



var PortCallOverviewService = /** @class */ (function () {
    function PortCallOverviewService(http) {
        this.http = http;
        // private overviewDataSource = new BehaviorSubject<any>(null);
        // overviewData$ = this.overviewDataSource.asObservable();
        this.overviewDataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.overviewData$ = this.overviewDataSource.asObservable();
        this.portCallDataSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.portCallData$ = this.portCallDataSource.asObservable();
        this.getOverviewUrl = 'api/portcall/overview';
        this.getPortCallsByLocationUrl = 'api/portcall/location';
        this.getPortCallsUrl = 'api/portcall/get';
    }
    PortCallOverviewService.prototype.getOverview = function (portCallId) {
        var uri = [this.getOverviewUrl, portCallId].join('/');
        return this.http.get(uri)
            .map(function (res) { return res.json(); });
    };
    PortCallOverviewService.prototype.setPortCallData = function (data) {
        this.portCallDataSource.next(data);
    };
    PortCallOverviewService.prototype.getPortCallsByLocation = function (locationId) {
        var uri = [this.getPortCallsByLocationUrl, locationId].join('/');
        return this.http.get(uri)
            .map(function (res) { return res.json(); });
    };
    PortCallOverviewService.prototype.getPortCalls = function () {
        var uri = this.getPortCallsUrl;
        return this.http.get(uri)
            .map(function (res) { return res.json(); });
    };
    PortCallOverviewService.prototype.getOverviews = function () {
        var uri = this.getOverviewUrl;
        return this.http.get(uri)
            .map(function (res) { return res.json(); });
        // .subscribe(data => this.overviewDataSource.next(data));
    };
    PortCallOverviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]])
    ], PortCallOverviewService);
    return PortCallOverviewService;
}());



/***/ }),

/***/ "./src/app/shared/services/port-call.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortCallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_port_call_model__ = __webpack_require__("./src/app/shared/models/port-call-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_port_call_overview_model__ = __webpack_require__("./src/app/shared/models/port-call-overview-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_port_call_details_model__ = __webpack_require__("./src/app/shared/models/port-call-details-model.ts");
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
    function PortCallService(http) {
        this.http = http;
        // Subjects
        this.detailsDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.detailsData$ = this.detailsDataSource.asObservable();
        this.detailsPristine = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](true);
        this.detailsPristine$ = this.detailsPristine.asObservable();
        this.overviewDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.overviewData$ = this.overviewDataSource.asObservable();
        this.clearanceDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.clearanceData$ = this.clearanceDataSource.asObservable();
        // Ship, Location and Time
        this.shipDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.shipData$ = this.shipDataSource.asObservable();
        this.locationDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.locationData$ = this.locationDataSource.asObservable();
        this.etaEtdDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.etaEtdData$ = this.etaEtdDataSource.asObservable();
        // This is a list of checkboxes that specify which FAL forms to include in this port call registration 
        this.reportingForThisPortCallSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.reportingForThisPortCallData$ = this.reportingForThisPortCallSource.asObservable();
        this.crewPassengersAndDimensionsSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.crewPassengersAndDimensionsData$ = this.crewPassengersAndDimensionsSource.asObservable();
        this.crewPassengersAndDimensionsMeta = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]({ valid: true });
        this.crewPassengersAndDimensionsMeta$ = this.crewPassengersAndDimensionsMeta.asObservable();
        this.portCallPurposeSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.portCallPurposeData$ = this.portCallPurposeSource.asObservable();
        this.otherPurposeNameSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]("");
        this.otherPurposeName$ = this.otherPurposeNameSource.asObservable();
        // Port call
        this.getPortCallUrl = "api/portcall/get";
        this.savePortCallUrl = "api/portcall/register";
        this.getPortCallsByUserIdUrl = "api/portcall/user";
        this.portCallModel = new __WEBPACK_IMPORTED_MODULE_4__models_port_call_model__["a" /* PortCallModel */]();
        // Purpose
        this.getPurposeUrl = "api/purpose/portcall";
        this.getOtherNameUrl = "api/purpose/getothername";
        this.setPurposeForPortCallUrl = "api/purpose/setpurposeforportcall";
        // Details
        this.saveDetailsUrl = "api/portcalldetails/register";
        this.getDetailsByPortCallIdUrl = "api/portcalldetails/portcall";
        this.detailsModel = new __WEBPACK_IMPORTED_MODULE_6__models_port_call_details_model__["a" /* PortCallDetailsModel */]();
        // Overview
        this.overviewModel = new __WEBPACK_IMPORTED_MODULE_5__models_port_call_overview_model__["a" /* PortCallOverviewModel */]();
        this.getOverviewUrl = 'api/portcall/overview';
        this.getPortCallsByLocationUrl = 'api/portcall/location';
        // Clearance
        this.saveClearanceUrl = "api/organizationportcall/save";
        this.getClearanceListByPortCallUrl = "api/organizationportcall/portcall";
        this.registerClearanceAgenciesForPortCallUrl = "api/organizationportcall/register";
    }
    // Overview methods
    PortCallService.prototype.wipeServiceData = function () {
        this.portCallModel = new __WEBPACK_IMPORTED_MODULE_4__models_port_call_model__["a" /* PortCallModel */]();
        this.overviewModel = new __WEBPACK_IMPORTED_MODULE_5__models_port_call_overview_model__["a" /* PortCallOverviewModel */]();
        this.shipDataSource.next(null);
        this.locationDataSource.next(null);
        this.etaEtdDataSource.next(null);
        // Overview
        this.overviewDataSource.next(null);
        // Details
        this.wipeDetailsData();
    };
    PortCallService.prototype.wipeDetailsData = function () {
        this.reportingForThisPortCallSource.next(null);
        this.crewPassengersAndDimensionsSource.next(null);
        this.portCallPurposeSource.next(null);
        this.otherPurposeNameSource.next("");
        this.detailsModel = new __WEBPACK_IMPORTED_MODULE_6__models_port_call_details_model__["a" /* PortCallDetailsModel */]();
        this.detailsDataSource.next(new __WEBPACK_IMPORTED_MODULE_6__models_port_call_details_model__["a" /* PortCallDetailsModel */]());
        this.detailsPristine.next(true);
    };
    PortCallService.prototype.getPortCallById = function (portCallId) {
        var uri = [this.getPortCallUrl, portCallId].join('/');
        return this.http.get(uri)
            .map(function (res) { return res.json(); });
    };
    // User
    PortCallService.prototype.getPortCallsByUserId = function (userId) {
        var uri = [this.getPortCallsByUserIdUrl, userId].join('/');
        return this.http.get(uri)
            .map(function (res) { return res.json(); });
    };
    PortCallService.prototype.getPurposeByPortCallId = function (portCallId) {
        var uri = [this.getPurposeUrl, portCallId].join('/');
        return this.http.get(uri).map(function (res) {
            return res.json();
        }).catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(e);
        });
    };
    PortCallService.prototype.getOtherName = function (portCallId) {
        var uri = [this.getOtherNameUrl, portCallId].join('/');
        return this.http.get(uri).map(function (res) {
            return res.json();
        }).catch(function (e) {
            console.log(e);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(e);
        });
    };
    PortCallService.prototype.setPortCall = function (overviewModel) {
        this.detailsModel.portCallId = overviewModel.portCall.portCallId;
        this.setDetails(this.detailsModel);
        this.setShipLocationTime(overviewModel);
        this.overviewModel.clearanceList = overviewModel.clearanceList;
        this.overviewDataSource.next(this.overviewModel);
    };
    PortCallService.prototype.setDetails = function (detailsModel) {
        if (detailsModel == null) {
            this.wipeDetailsData();
        }
        else {
            this.detailsModel = detailsModel;
            this.detailsDataSource.next(detailsModel);
            this.setCrewPassengersAndDimensionsData(detailsModel);
            this.setReportingForThisPortCallData(detailsModel);
        }
        this.detailsPristine.next(true);
    };
    PortCallService.prototype.setShipLocationTime = function (overviewModel) {
        this.setShipData(overviewModel.shipOverview);
        this.setLocationData(overviewModel.locationOverview);
        var etaData = new Date(overviewModel.portCall.locationEta);
        var etdData = new Date(overviewModel.portCall.locationEtd);
        var etaEtdData = {
            eta: { year: etaData.getFullYear(), month: etaData.getMonth(), day: etaData.getDate(), hour: etaData.getHours(), minute: etaData.getMinutes() },
            etd: { year: etdData.getFullYear(), month: etdData.getMonth(), day: etdData.getDate(), hour: etdData.getHours(), minute: etdData.getMinutes() },
        };
        this.setEtaEtdData(etaEtdData);
    };
    PortCallService.prototype.savePortCall = function () {
        var _this = this;
        this.overviewModel.portCall.portCallStatusId = 100235; // temporary, status id for incomplete port call
        console.log("Saving port call to database...");
        this.http.post(this.savePortCallUrl, this.overviewModel.portCall).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("Success.");
            console.log(data);
            _this.detailsModel.portCallId = data.portCallId;
            // add list of government agencies for clearance
            console.log("Registering government clearance agencies to port call...");
            _this.http.post(_this.registerClearanceAgenciesForPortCallUrl, data).map(function (res) { return res.json(); }).subscribe(function (clearanceData) {
                console.log("Clearance information added successfully.");
                _this.overviewModel.clearanceList = clearanceData;
                _this.overviewDataSource.next(_this.overviewModel);
            });
        });
    };
    PortCallService.prototype.setShipData = function (data) {
        this.portCallModel.shipId = data != null ? data.ship.shipId : null;
        this.overviewModel.portCall = this.portCallModel;
        this.overviewModel.shipOverview = data;
        this.overviewDataSource.next(this.overviewModel);
    };
    PortCallService.prototype.setLocationData = function (data) {
        this.portCallModel.locationId = data != null ? data.location.locationId : null;
        this.overviewModel.locationOverview = data;
        this.overviewDataSource.next(this.overviewModel);
    };
    PortCallService.prototype.setEtaEtdData = function (data) {
        if (data != null) {
            // UTC conversion
            var eta = new Date(Date.UTC(data.eta.year, (data.eta.month - 1), data.eta.day, data.eta.hour, data.eta.minute));
            var etd = new Date(Date.UTC(data.etd.year, (data.etd.month - 1), data.eta.day, data.eta.hour, data.eta.minute));
            this.overviewModel.portCall.locationEta = eta;
            this.overviewModel.portCall.locationEtd = etd;
        }
        else {
            this.overviewModel.portCall.locationEta = null;
            this.overviewModel.portCall.locationEtd = null;
        }
        this.etaEtdDataSource.next(data);
        // Overview
        this.overviewDataSource.next(this.overviewModel);
    };
    // Port Call Details
    PortCallService.prototype.getDetailsByPortCallId = function (portCallId) {
        var uri = [this.getDetailsByPortCallIdUrl, portCallId].join('/');
        return this.http.get(uri).map(function (res) {
            if (res && res.ok) {
                return res.json();
            }
            else {
                return res.status;
            }
        }).catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(e);
        });
    };
    PortCallService.prototype.setReportingForThisPortCallData = function (data) {
        this.detailsPristine.next(false);
        this.detailsModel.reportingBunkers = data.reportingBunkers || null;
        this.detailsModel.reportingCargo = data.reportingCargo || null;
        this.detailsModel.reportingCrew = data.reportingCrew || null;
        this.detailsModel.reportingHazmat = data.reportingHazmat || null;
        this.detailsModel.reportingPax = data.reportingPax || null;
        this.detailsModel.reportingShipStores = data.reportingShipStores || null;
        this.detailsModel.reportingWaste = data.reportingWaste || null;
        this.reportingForThisPortCallSource.next(data);
        this.detailsDataSource.next(this.detailsModel);
    };
    PortCallService.prototype.setCrewPassengersAndDimensionsData = function (data) {
        this.detailsPristine.next(false);
        this.detailsModel.numberOfCrew = (data.numberOfCrew != null) ? data.numberOfCrew : null;
        this.detailsModel.numberOfPassengers = (data.numberOfPassengers != null) ? data.numberOfPassengers : null;
        this.detailsModel.actualDraught = (data.actualDraught != null) ? data.actualDraught : null;
        this.detailsModel.airDraught = (data.airDraught != null) ? data.airDraught : null;
        this.crewPassengersAndDimensionsSource.next(this.detailsModel);
    };
    PortCallService.prototype.setCrewPassengersAndDimensionsMeta = function (metaData) {
        this.crewPassengersAndDimensionsMeta.next(metaData);
    };
    PortCallService.prototype.setPortCallPurposeData = function (data) {
        if (data.find(function (p) { return p.name == "Other"; }))
            this.detailsPristine.next(false);
        this.portCallPurposeSource.next(data);
    };
    PortCallService.prototype.setOtherPurposeName = function (data) {
        this.otherPurposeNameSource.next(data);
    };
    PortCallService.prototype.saveDetails = function (purposes, otherName) {
        var _this = this;
        if (!this.detailsPristine.value) {
            var pcHasPurposeList = purposes.map(function (p) {
                return {
                    portCallId: _this.detailsModel.portCallId,
                    portCallPurposeId: p.portCallPurposeId,
                    purposeIfUnknown: (p.name == "Other") ? otherName : null
                };
            });
            this.detailsModel.portCallDetailsId = this.detailsModel.portCallId;
            console.log(this.overviewModel);
            console.log(this.detailsModel);
            console.log("Saving port call details to database...");
            this.http.post(this.saveDetailsUrl, this.detailsModel).map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log("Success.");
                console.log(data);
                _this.detailsPristine.next(true);
                console.log("Saving port call purposes to database...");
                _this.http.post(_this.setPurposeForPortCallUrl, pcHasPurposeList).map(function (res) { return res.json(); }).subscribe(function (purposeData) {
                    console.log("Purposes successfully saved.");
                    console.log(purposeData);
                });
            });
        }
        else {
            console.log("Port call details already registered in the database.");
        }
    };
    PortCallService.prototype.getClearanceListForPortCall = function (portCallId) {
        var uri = [this.getClearanceListByPortCallUrl, portCallId].join('/');
        return this.http.get(uri).map(function (res) { return res.json().catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(error);
        }); });
    };
    PortCallService.prototype.setClearance = function (data) {
        this.clearanceDataSource.next(data);
    };
    // Clearance
    PortCallService.prototype.saveClearance = function (clearanceModel) {
        console.log('Saving clearance to database...');
        this.http.post(this.saveClearanceUrl, clearanceModel).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log("Clearance saved successfully.");
            console.log(data);
        }, function (error) {
            console.log("ERROR: ", error);
        });
    };
    PortCallService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]])
    ], PortCallService);
    return PortCallService;
}());



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
        this.purposeUrl = "api/purpose/all";
    }
    PurposeService.prototype.getPurposes = function () {
        return this.http.get(this.purposeUrl)
            .map(function (res) { return res.json(); });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
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
    SearchService.prototype.search = function (baseUrl, term) {
        var encoded_term = encodeURIComponent(term);
        if (term === '') {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])([]);
        }
        var uri = [baseUrl, encoded_term].join('/');
        return this.http.get(uri)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/services/ship-flag-code.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipFlagCodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("./src/app/shared/services/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShipFlagCodeService = /** @class */ (function () {
    function ShipFlagCodeService(http) {
        this.http = http;
        this.searchService = new __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */](http);
        this.actionUrl = 'api/shipflagcode/search';
    }
    ShipFlagCodeService.prototype.search = function (term) {
        return this.searchService.search(this.actionUrl, term);
    };
    ShipFlagCodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ShipFlagCodeService);
    return ShipFlagCodeService;
}());



/***/ }),

/***/ "./src/app/shared/services/ship.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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




var ShipService = /** @class */ (function () {
    function ShipService(http) {
        this.http = http;
        this.organizationDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.organizationData$ = this.organizationDataSource.asObservable();
        this.countryDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.countryData$ = this.countryDataSource.asObservable();
        this.shipFlagCodeDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.shipFlagCodeData$ = this.shipFlagCodeDataSource.asObservable();
        this.searchService = new __WEBPACK_IMPORTED_MODULE_3__search_service__["a" /* SearchService */](http);
        this.shipSearchUrl = 'api/ship/search';
        this.shipTypeUrl = 'api/shiptype/getall';
        this.hullTypeUrl = 'api/shiphulltype/getall';
        this.lengthTypeUrl = 'api/shiplengthtype/getall';
        this.breadthTypeUrl = 'api/shipbreadthtype/getall';
        this.powerTypeUrl = 'api/shippowertype/getall';
        this.shipSourceUrl = 'api/shipsource/getall';
        this.registerShipUrl = 'api/ship/register';
        this.flagCodeSearchUrl = 'api/shipflagcode/search';
    }
    ShipService.prototype.registerShip = function (newShip) {
        return this.http.post(this.registerShipUrl, newShip)
            .map(function (res) { return res.json(); });
    };
    ShipService.prototype.setOrganizationData = function (data) {
        this.organizationDataSource.next(data);
    };
    ShipService.prototype.setCountryData = function (data) {
        this.countryDataSource.next(data);
    };
    ShipService.prototype.setShipFlagCodeData = function (data) {
        this.shipFlagCodeDataSource.next(data);
        console.log(data);
    };
    ShipService.prototype.searchShip = function (term) {
        return this.searchService.search(this.shipSearchUrl, term);
    };
    ShipService.prototype.searchFlagCode = function (term) {
        return this.searchService.search(this.flagCodeSearchUrl, term);
    };
    ShipService.prototype.getShipTypes = function () {
        return this.http.get(this.shipTypeUrl)
            .map(function (res) { return res.json(); });
    };
    ShipService.prototype.getHullTypes = function () {
        return this.http.get(this.hullTypeUrl)
            .map(function (res) { return res.json(); });
    };
    ShipService.prototype.getLengthTypes = function () {
        return this.http.get(this.lengthTypeUrl)
            .map(function (res) { return res.json(); });
    };
    ShipService.prototype.getBreadthTypes = function () {
        return this.http.get(this.breadthTypeUrl)
            .map(function (res) { return res.json(); });
    };
    ShipService.prototype.getPowerTypes = function () {
        return this.http.get(this.powerTypeUrl)
            .map(function (res) { return res.json(); });
    };
    ShipService.prototype.getShipSources = function () {
        return this.http.get(this.shipSourceUrl)
            .map(function (res) { return res.json(); });
    };
    ShipService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ShipService);
    return ShipService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.actionUrl = 'api/user/search';
        this.registerUserUrl = 'api/user/register';
    }
    // private organizationDataSource = new BehaviorSubject<any>(null);
    // organizationData$ = this.organizationDataSource.asObservable();
    // private countryDataSource = new BehaviorSubject<any>(null);
    // countryData$ = this.countryDataSource.asObservable();
    // private userFlagCodeDataSource = new BehaviorSubject<any>(null);
    // userFlagCodeData$ = this.userFlagCodeDataSource.asObservable();
    UserService.prototype.registerUser = function (newUser) {
        return this.http.post(this.registerUserUrl, newUser)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/utils/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
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

var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._apiURI = 'http://localhost:5000/api';
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* XSRFStrategy */]])
    ], AuthenticateXHRBackend);
    return AuthenticateXHRBackend;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* XHRBackend */]));



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