webpackJsonp(["auth.module"],{

/***/ "./src/app/auth/auth-home/auth-home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth-home/auth-home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav>\r\n  <a class=\"btn btn-ssn\" routerLink=\"./\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Home</a>\r\n  <a class=\"btn btn-ssn\" routerLink=\"./ResetPassword\" routerLinkActive=\"active\" (click)=\"setResetRequested()\">Reset password</a>\r\n</nav> -->\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/auth/auth-home/auth-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__password_service__ = __webpack_require__("./src/app/auth/password.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthHomeComponent = /** @class */ (function () {
    function AuthHomeComponent(passwordService) {
        this.passwordService = passwordService;
    }
    AuthHomeComponent.prototype.ngOnInit = function () {
    };
    AuthHomeComponent.prototype.setResetRequested = function () {
        this.passwordService.setResetRequested(true);
    };
    AuthHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth-home',
            template: __webpack_require__("./src/app/auth/auth-home/auth-home.component.html"),
            styles: [__webpack_require__("./src/app/auth/auth-home/auth-home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__password_service__["a" /* PasswordService */]])
    ], AuthHomeComponent);
    return AuthHomeComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_reset_password_reset_component__ = __webpack_require__("./src/app/auth/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_home_auth_home_component__ = __webpack_require__("./src/app/auth/auth-home/auth-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_confirmation_email_confirmation_component__ = __webpack_require__("./src/app/auth/email-confirmation/email-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_email_confirmation_guard__ = __webpack_require__("./src/app/auth/guards/email-confirmation.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_change_password_change_component__ = __webpack_require__("./src/app/auth/password-change/password-change.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_login_guard__ = __webpack_require__("./src/app/auth/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__password_forgotten_password_forgotten_component__ = __webpack_require__("./src/app/auth/password-forgotten/password-forgotten.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var authRoutes = [
    {
        path: '',
        // redirectTo: 'auth/login',
        // pathMatch: 'full',
        // component: LoginComponent,
        // canActivate: [LoginGuard],
        component: __WEBPACK_IMPORTED_MODULE_3__auth_home_auth_home_component__["a" /* AuthHomeComponent */],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'ResetPassword',
                component: __WEBPACK_IMPORTED_MODULE_2__password_reset_password_reset_component__["a" /* PasswordResetComponent */],
            },
            {
                path: 'ChangePassword',
                component: __WEBPACK_IMPORTED_MODULE_6__password_change_password_change_component__["a" /* PasswordChangeComponent */],
                data: { title: 'Change password' }
            },
            {
                path: 'ForgotPassword',
                component: __WEBPACK_IMPORTED_MODULE_9__password_forgotten_password_forgotten_component__["a" /* PasswordForgottenComponent */]
            },
            {
                path: 'ConfirmEmail',
                component: __WEBPACK_IMPORTED_MODULE_4__email_confirmation_email_confirmation_component__["a" /* EmailConfirmationComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_email_confirmation_guard__["a" /* EmailConfirmationGuard */]]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_login_guard__["a" /* LoginGuard */]]
            }
        ]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(authRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_components_ssn_bg_ssn_bg_component__ = __webpack_require__("./src/app/shared/components/ssn-bg/ssn-bg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_ssn_card_ssn_card_component__ = __webpack_require__("./src/app/shared/components/ssn-card/ssn-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__email_confirmation_email_confirmation_component__ = __webpack_require__("./src/app/auth/email-confirmation/email-confirmation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_uri_query_service__ = __webpack_require__("./src/app/shared/services/uri-query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__password_password_component__ = __webpack_require__("./src/app/auth/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_routing_module__ = __webpack_require__("./src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_home_auth_home_component__ = __webpack_require__("./src/app/auth/auth-home/auth-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__password_change_password_change_component__ = __webpack_require__("./src/app/auth/password-change/password-change.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__password_reset_password_reset_component__ = __webpack_require__("./src/app/auth/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_email_confirmation_guard__ = __webpack_require__("./src/app/auth/guards/email-confirmation.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_password_reset_guard__ = __webpack_require__("./src/app/auth/guards/password-reset.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__password_service__ = __webpack_require__("./src/app/auth/password.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_login_component__ = __webpack_require__("./src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_login_guard__ = __webpack_require__("./src/app/auth/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_home_guard__ = __webpack_require__("./src/app/auth/guards/auth-home.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__password_forgotten_password_forgotten_component__ = __webpack_require__("./src/app/auth/password-forgotten/password-forgotten.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_12__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_11__password_password_component__["a" /* PasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_components_ssn_bg_ssn_bg_component__["a" /* SsnBgComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_components_ssn_card_ssn_card_component__["a" /* SsnCardComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__auth_home_auth_home_component__["a" /* AuthHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__email_confirmation_email_confirmation_component__["a" /* EmailConfirmationComponent */],
                __WEBPACK_IMPORTED_MODULE_19__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__password_password_component__["a" /* PasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_14__password_change_password_change_component__["a" /* PasswordChangeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__password_reset_password_reset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_22__password_forgotten_password_forgotten_component__["a" /* PasswordForgottenComponent */],
            ],
            providers: [
                // Guards
                __WEBPACK_IMPORTED_MODULE_21__guards_auth_home_guard__["a" /* AuthHomeGuard */],
                __WEBPACK_IMPORTED_MODULE_16__guards_email_confirmation_guard__["a" /* EmailConfirmationGuard */],
                __WEBPACK_IMPORTED_MODULE_20__guards_login_guard__["a" /* LoginGuard */],
                __WEBPACK_IMPORTED_MODULE_17__guards_password_reset_guard__["a" /* PasswordResetGuard */],
                // Services
                __WEBPACK_IMPORTED_MODULE_18__password_service__["a" /* PasswordService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_services_uri_query_service__["a" /* UriQueryService */],
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

module.exports = "<div class=\"container pt-5\">\r\n  <app-ssn-bg header=\"ACCOUNT CONFIRMATION\" icon=\"user.png\">\r\n\r\n    <div *ngIf=isRequesting></div>\r\n    <div *ngIf=!isRequesting>\r\n      <div *ngIf=\"emailConfirmationSuccessful\">\r\n        <div class=\"row\">\r\n          <div class=\"col col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center\"></div>\r\n          <h3>Thank you for confirming your email address.</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col col-sm-2 col-md-3 col-lg-5 col-xl-6 text-center\">\r\n            <p>Now please select a password for the account created by your local administrator:</p>\r\n          </div>\r\n        </div>\r\n  \r\n        <app-password purpose=\"Set\"></app-password>\r\n  \r\n        <!-- <div class=\"row\">\r\n          <div class=\"col\">\r\n            <h3>You will be redirected to login page in... </h3>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h1>{{secondsRemaining}} seconds</h1>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n  \r\n      <app-ssn-card *ngIf=\"!emailConfirmationSuccessful\" header=\"Account confirmation\">\r\n        <p>Email confirmation unsuccessful.</p>\r\n        <p>This may occur if the link you've been provided has expired. Please contact your local system administrator.</p>\r\n        <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n          <span>{{errors}}</span>\r\n        </div>\r\n      </app-ssn-card>\r\n    </div>\r\n    \r\n    </app-ssn-bg>\r\n</div>"

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var EmailConfirmationComponent = /** @class */ (function () {
    function EmailConfirmationComponent(router, activatedRoute, accountService, uriQueryService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.uriQueryService = uriQueryService;
        this.secondsRemaining = 10;
        this.emailConfirmationSuccessful = false;
        this.isRequesting = true;
    }
    EmailConfirmationComponent.prototype.ngOnInit = function () {
        // const tokenQueryModel = this.uriQueryService.getTokenQueryModel(this.activatedRoute.snapshot.queryParams);
        // this.confirmEmail(tokenQueryModel);
        // console.log('emailConfirmed?', this.emailConfirmationSuccessful);
        this.initAsync();
        // this.accountService.confirmEmail(tokenQueryModel)
        //   .subscribe(result => {
        //     // If email confirmation token was valid
        //     if (result) {
        //       // Update html to reflect email successfully confirmed
        //       console.log('email confirmation was successful');
        //       // Get password reset token
        //       this.accountService.getPasswordResetToken(tokenQueryModel.userId)
        //         .subscribe(passwordResetToken => {
        //           if (passwordResetToken) {
        //             console.log({passwordResetToken: passwordResetToken});
        //             // Redirect? Or present link to navigate?
        //             // Redirect:
        //             // Navigate to reset password and supply token as query parameter in URI
        //             // this.router.navigate(['ResetPassword'], { queryParams: userId, token});
        //             // Present link? ...
        //           }
        //         });
        //     }
        //   }, error => {
        //     // Update html to reflect email confirmation was unsuccessful
        //     console.log('email confirmation was unsuccessful');
        //   }
        // );
    };
    EmailConfirmationComponent.prototype.initAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tokenQueryModel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenQueryModel = this.uriQueryService.getTokenQueryModel(this.activatedRoute.snapshot.queryParams);
                        return [4 /*yield*/, this.confirmEmail(tokenQueryModel)];
                    case 1:
                        _a.sent();
                        this.isRequesting = false;
                        console.log('emailConfirmed?', this.emailConfirmationSuccessful);
                        return [2 /*return*/];
                }
            });
        });
    };
    EmailConfirmationComponent.prototype.confirmEmail = function (tokenQueryModel) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.accountService.confirmEmail(tokenQueryModel)
                            .toPromise().then(function (resultModel) {
                            if (resultModel) {
                                _this.emailConfirmationSuccessful = true;
                                _this.uriQueryService.setTokenQueryModel(resultModel);
                            }
                        }, function (error) {
                            _this.emailConfirmationSuccessful = false;
                            _this.errors = error;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmailConfirmationComponent.prototype.startRedirect = function (queryModel) {
        var _this = this;
        var intervalId = setInterval(function (activatedRoute) {
            if (_this.secondsRemaining === 0) {
                clearInterval(intervalId);
                _this.router.navigate(['../ResetPassword'], {
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

/***/ "./src/app/auth/guards/auth-home.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthHomeGuard; });
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


var AuthHomeGuard = /** @class */ (function () {
    function AuthHomeGuard(router) {
        this.router = router;
    }
    AuthHomeGuard.prototype.canActivate = function (next, state) {
        this.router.navigate(['/auth/login']);
        return true;
    };
    AuthHomeGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthHomeGuard);
    return AuthHomeGuard;
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

/***/ "./src/app/auth/guards/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
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




var LoginGuard = /** @class */ (function () {
    function LoginGuard(router, authService, loginService) {
        this.router = router;
        this.authService = authService;
        this.loginService = loginService;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (!this.authService.hasToken()) {
            return true;
        }
        else {
            return this.authService.hasValidToken()
                .map(function (tokenValid) {
                console.log(tokenValid);
                if (tokenValid) {
                    _this.router.navigateByUrl('');
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
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_app_shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_login_service__["a" /* LoginService */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/auth/guards/password-reset.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_service__ = __webpack_require__("./src/app/auth/password.service.ts");
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
    function PasswordResetGuard(router, passwordService) {
        this.router = router;
        this.passwordService = passwordService;
    }
    PasswordResetGuard.prototype.canActivate = function (next, state) {
        // Request for reset made within app
        if (this.passwordService.isResetRequested()) {
            return true;
        }
        // Expect user to have clicked link received by email
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__password_service__["a" /* PasswordService */]])
    ], PasswordResetGuard);
    return PasswordResetGuard;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n  <div class=\"jumbotron bg-ssn-light text-ssn\">\r\n    <div class=\"d-table mb-3 mx-auto\">\r\n      <div class=\"d-table-row\">\r\n        <div class=\"d-table-cell\">\r\n          <img src=\"assets/images/flags/ag.png\" height=\"80px\">\r\n        </div>\r\n        <div class=\"d-table-cell px-3\">\r\n          <h2>IMO Maritime Single Window</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form #f=\"ngForm\" novalidate (ngSubmit)=\"login(f)\">\r\n      <div class=\"form-group row\">\r\n        <label for=\"email\" class=\"col-form-label-sm no-wrap col-sm-3 col-md-2 col-lg-2\">Email address:</label>\r\n        <div class=\"col my-auto\">\r\n          <input id=\"email\" name=\"userName\" type=\"email\" class=\"form-control form-control-sm\"\r\n            placeholder=\"Enter email address\"\r\n            [(ngModel)]=\"credentials.userName\" #email=\"ngModel\" autocomplete=\"username\" tmFocus required>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"password\" class=\"col-form-label-sm no-wrap col-sm-3 col-md-2 col-lg-2\">Password:</label>\r\n        <div class=\"col my-auto\">\r\n          <input id=\"password\" name=\"password\" type=\"password\" #pw class=\"form-control form-control-sm\"\r\n          placeholder=\"Enter password\"\r\n            [(ngModel)]=\"credentials.password\" autocomplete=\"current-password\" required>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" (click)=\"pw.select()\" class=\"btn btn-light\" [disabled]=\"f.invalid || isRequesting\">SIGN IN</button>\r\n      </div>\r\n\r\n      <nav>\r\n        <a class=\"btn btn-light\" routerLink=\"../ForgotPassword\" routerLinkActive=\"active\">Forgot password?</a>\r\n      </nav>\r\n\r\n      <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n        <h5>Error</h5>\r\n        <span>{{errors}}</span>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__ = __webpack_require__("./src/app/shared/constants/content-names.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_shared_services_login_service__ = __webpack_require__("./src/app/shared/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__password_service__ = __webpack_require__("./src/app/auth/password.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_constants_menu_claims__ = __webpack_require__("./src/app/shared/constants/menu-claims.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_auth_service__ = __webpack_require__("./src/app/shared/services/auth-service.ts");
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, contentService, router, activatedRoute, accountService, authService, passwordService) {
        this.loginService = loginService;
        this.contentService = contentService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.authService = authService;
        this.passwordService = passwordService;
        this.login_title = 'LOGIN';
        this.submitted = false;
        this.credentials = { userName: '', password: '' };
    }
    LoginComponent.prototype.logError = function (error) {
        this.errors = error;
        this.credentials.password = '';
    };
    LoginComponent.prototype.login = function (_a) {
        var value = _a.value, valid = _a.valid;
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var jwtResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        this.errors = '';
                        if (!valid) return [3 /*break*/, 4];
                        this.isRequesting = true;
                        return [4 /*yield*/, this.loginService
                                .login(value)
                                .toPromise()
                                .then(function (jwt) {
                                if (jwt) {
                                    return jwt;
                                }
                                // Login failed
                            }, function (error) { return _this.logError(error); })];
                    case 1:
                        jwtResponse = _a.sent();
                        if (!!this.errors) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.accountService
                                .getUserClaims()
                                .toPromise()
                                .then(function (claims) {
                                if (claims) {
                                    _this.accountService.setUserClaims(claims);
                                    if (_this.authService.hasPortCallMenuClaim(claims)) {
                                        _this.contentService.setContent(__WEBPACK_IMPORTED_MODULE_2_app_shared_constants_content_names__["a" /* CONTENT_NAMES */].VIEW_PORT_CALLS);
                                        _this.router.navigate(['']);
                                    }
                                }
                                else {
                                    _this.loginService.logout();
                                    _this.router.navigate(['/error']);
                                }
                                // Error getting user claims
                            }, function (error) { return _this.logError(error); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        this.isRequesting = false;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.hasPortCallMenuClaim = function (claims) {
        return claims
            .filter(function (claim) { return claim.type === __WEBPACK_IMPORTED_MODULE_7__shared_constants_menu_claims__["a" /* MenuClaims */].TYPE; })
            .some(function (claim) { return claim.value === __WEBPACK_IMPORTED_MODULE_7__shared_constants_menu_claims__["a" /* MenuClaims */].PORT_CALL; });
    };
    LoginComponent.prototype.setResetRequested = function () {
        this.passwordService.setResetRequested(true);
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            // this.credentials.userName = param['userName'];
        });
        this.passwordService.setResetRequested(false);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("./src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_app_shared_services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_4_app_shared_services_content_service__["a" /* ContentService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_app_shared_services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_8__shared_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__password_service__["a" /* PasswordService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/password-change/password-change.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/password-change/password-change.component.html":
/***/ (function(module, exports) {

module.exports = "<app-password purpose=\"Change\">\r\n</app-password>\r\n<router-outlet></router-outlet>\r\n"

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

/***/ "./src/app/auth/password-forgotten/password-forgotten.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/password-forgotten/password-forgotten.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n  <app-ssn-bg header=\"FORGOT PASSWORD\">\r\n    <app-ssn-card header=\"Forgot password\">\r\n      <div class=\"row\">\r\n        <div class=\"text-center col col-sm-2 col-md-4 col-lg-2 col-xl-6\">\r\n          <p>Please input the email you registered an account with. We will send you an email to that address, providing you\r\n            with a link to a page where you can reset your password.\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n\r\n        <label class=\"col-form-label-sm no-wrap col-sm-2 col-md-2 col-lg-2 col-xl-2\" for=\"email\">Email</label>\r\n        <div class=\"col\">\r\n          <input id=\"email\" name=\"email\" class=\"form-control form-control-sm\" type=\"email\" placeholder=\"Enter email address\" [(ngModel)]=\"email\"\r\n            tmFocus validateEmail>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <div class=\"col col-sm-2 col-md-2 col-lg-2 col-xl-2\">\r\n          <button class=\"btn btn-ssn\" (click)=\"requestPasswordReset();\">Send email link</button>\r\n        </div>\r\n      </div>\r\n    </app-ssn-card>\r\n\r\n    <!-- <app-feedback [props]=\"properties\"></app-feedback> -->\r\n    <app-feedback [started]=\"started\" [actionSucceeded]=\"actionSucceeded\" [successMessage]=\"successMessage\" [errors]=\"errors\" [errorDescription]=\"errorDescription\"></app-feedback>\r\n\r\n  </app-ssn-bg>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/password-forgotten/password-forgotten.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordForgottenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_models_feedback__ = __webpack_require__("./src/app/shared/models/feedback.ts");
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



var PasswordForgottenComponent = /** @class */ (function (_super) {
    __extends(PasswordForgottenComponent, _super);
    function PasswordForgottenComponent(accountService) {
        var _this = _super.call(this) || this;
        _this.accountService = accountService;
        return _this;
    }
    PasswordForgottenComponent.prototype.ngOnInit = function () { };
    PasswordForgottenComponent.prototype.requestPasswordReset = function () {
        var _this = this;
        this.accountService.requestPasswordReset(this.email).subscribe(function (res) {
            var msg = 'Please check your email for instruction for how to reset your password.';
            _this.reportSuccess(msg);
        }, function (error) {
            var msg = 'An error occurred while trying to request a password reset';
            _this.reportError(error, msg);
        });
    };
    PasswordForgottenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password-forgotten',
            template: __webpack_require__("./src/app/auth/password-forgotten/password-forgotten.component.html"),
            styles: [__webpack_require__("./src/app/auth/password-forgotten/password-forgotten.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_account_service__["a" /* AccountService */]])
    ], PasswordForgottenComponent);
    return PasswordForgottenComponent;
}(__WEBPACK_IMPORTED_MODULE_2__shared_models_feedback__["a" /* FeedBack */]));



/***/ }),

/***/ "./src/app/auth/password-reset/password-reset.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/password-reset/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<app-password purpose=\"Reset\"></app-password>\r\n<router-outlet></router-outlet>"

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
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
    };
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

/***/ "./src/app/auth/password.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordService; });
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

var PasswordService = /** @class */ (function () {
    function PasswordService() {
        // private resetRequestedSource = new BehaviorSubject<boolean>(false);
        // resetRequested$ = this.resetRequestedSource.asObservable();
        this.resetRequested = false;
    }
    PasswordService.prototype.setResetRequested = function (value) {
        this.resetRequested = value;
    };
    PasswordService.prototype.isResetRequested = function () {
        return this.resetRequested;
    };
    PasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PasswordService);
    return PasswordService;
}());



/***/ }),

/***/ "./src/app/auth/password/password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-5\">\r\n  <app-ssn-bg header=\"{{ purpose + ' password' | uppercase }}\" icon=\"user.png\">\r\n    <app-ssn-card header=\"Password {{purpose | lowercase}} form\">\r\n\r\n      <div *ngIf=\"isChangeComponent\" class=\"form-group row\">\r\n        <label class=\"col-form-label-sm no-wrap col-sm-2 col-md-2 col-lg-2 col-xl-2\" for=\"current_password\">Current password</label>\r\n        <div class=\"col\">\r\n          <input id=\"current_password\" name=\"current_password\" class=\"form-control form-control-sm\" type=\"password\" placeholder=\"Enter your current password\"\r\n            [(ngModel)]=\"currentPassword\" (ngModelChange)=\"validateFields(); fieldFocused = true;\" (blur)=\"validateFields(); fieldFocused = false;\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-form-label-sm no-wrap col-sm-2 col-md-2 col-lg-2 col-xl-2\" for=\"first_password\">New password</label>\r\n        <div class=\"col\">\r\n          <input id=\"first_password\" name=\"first_password\" class=\"form-control form-control-sm\" type=\"password\" placeholder=\"Enter a new password\"\r\n            [(ngModel)]=\"inputOne\" (ngModelChange)=\"validateFields(); fieldFocused = true;\" (blur)=\"validateFields(); fieldFocused = false;\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row mb-0\">\r\n        <label class=\"col-form-label-sm no-wrap col-sm-2 col-md-2 col-lg-2 col-xl-2\" for=\"second_password\">Retype password</label>\r\n        <div class=\"col\">\r\n          <input id=\"second_password\" name=\"second_password\" class=\"form-control form-control-sm\" type=\"password\" placeholder=\"Retype the password\"\r\n            [(ngModel)]=\"inputTwo\" (ngModelChange)=\"validateFields(); fieldFocused = true;\" (blur)=\"validateFields(); fieldFocused = false;\">\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"fieldsFilled\" class=\"row\">\r\n        <div class=\"col-sm-2 col-md-2 col-lg-2 col-xl-2\">\r\n        </div>\r\n        <div class=\"col\" *ngIf=\"!passwordMatch && !fieldFocused\">\r\n          <img height=\"16px\" src=\"assets/images/icons/128x128/red/warning.png\">\r\n          <small class=\"text-danger\">New passwords do not match</small>\r\n        </div>\r\n        <div class=\"col\" *ngIf=\"passwordMatch\">\r\n          <img height=\"16px\" src=\"assets/images/icons/128x128/green/checkmark.png\">\r\n          <small class=\"text-success\">New passwords match</small>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"passwordMatch && !fieldsFilled\" class=\"row\">\r\n        <div class=\"col\" *ngIf=\"passwordMatch\">\r\n          <img height=\"16px\" src=\"assets/images/icons/128x128/green/checkmark.png\">\r\n          <small class=\"text-success\">New passwords match, but please also input your current password.</small>\r\n        </div>\r\n      </div>\r\n\r\n       <div *ngIf=\"!passwordMatch || passwordMatch && !fieldsFilled\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <button class=\"btn btn-ssn\" disabled>{{purpose}} password</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Passwords typed in and passords match -->\r\n      <div *ngIf=\"passwordMatch && fieldsFilled\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <button class=\"btn btn-ssn\" (click)=\"editPassword()\" [disabled]=\"actionSucceeded\">{{purpose}} password</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- TEST -->\r\n      <!-- <div *ngIf=\"!passwordMatch || passwordMatch && !fieldsFilled\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <button class=\"btn btn-ssn\" [disabled]=\"!passwordMatch || passwordMatch && !fieldsFilled || !actionSucceeded\">{{purpose}} password</button>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n\r\n      <div *ngIf=\"submissionReady\">\r\n        <div *ngIf=\"actionSucceeded\" class=\"alert-success\" role=\"alert\">\r\n          <h5>Success</h5>\r\n          <span>{{successMessage}}</span>\r\n        </div>\r\n        <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n          <h5>Error</h5>\r\n          <span>{{errors}}</span>\r\n        </div>\r\n      </div>\r\n      \r\n    </app-ssn-card>\r\n  </app-ssn-bg>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_account_service__ = __webpack_require__("./src/app/shared/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_uri_query_service__ = __webpack_require__("./src/app/shared/services/uri-query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__ = __webpack_require__("./src/app/shared/constants/password-component-types.ts");
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
    function PasswordComponent(accountService, uriQueryService, activatedRoute, router) {
        this.accountService = accountService;
        this.uriQueryService = uriQueryService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.currentPassword = '';
        this.inputOne = '';
        this.inputTwo = '';
        this.passwordMatch = false;
        this.fieldsFilled = false;
        this.isChangeComponent = false;
        this.fieldFocused = true;
        // Error component
        this.submissionReady = false;
        this.actionSucceeded = false;
    }
    PasswordComponent.prototype.validateFields = function () {
        this.fieldsFilled = this.checkFieldsFilled();
        this.passwordMatch = this.checkPasswordsMatch();
    };
    PasswordComponent.prototype.checkFieldsFilled = function () {
        if (this.componentType === __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["b" /* PASSWORD_COMPONENT_TYPE */].CHANGE) {
            return (this.inputOne !== '' &&
                this.inputTwo !== '' &&
                this.currentPassword !== '');
        }
        else {
            return this.inputOne !== '' && this.inputTwo !== '';
        }
    };
    PasswordComponent.prototype.checkPasswordsMatch = function () {
        return (!(this.inputOne === '' || this.inputTwo === '') &&
            this.inputOne === this.inputTwo);
    };
    PasswordComponent.prototype.editPassword = function () {
        switch (this.componentType) {
            case __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["b" /* PASSWORD_COMPONENT_TYPE */].CHANGE:
                this.changePassword();
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["b" /* PASSWORD_COMPONENT_TYPE */].RESET:
                this.resetPassword();
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["b" /* PASSWORD_COMPONENT_TYPE */].SET:
                this.setPassword();
                break;
        }
        return false;
    };
    PasswordComponent.prototype.changePassword = function () {
        var _this = this;
        var model = {
            currentPassword: this.currentPassword,
            newPassword: this.inputOne
        };
        this.accountService.changePassword(model).subscribe(function (response) {
            var message = 'Password change successful';
            _this.reportSuccess(message);
        }, function (errors) {
            var message = "Password change unsuccessful";
            _this.reportError(errors, message);
        });
    };
    PasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        // Validation has been done, so we can safely construct a valid object from model
        var model = {
            userId: this.tokenQueryModel.userId,
            passwordResetToken: this.tokenQueryModel.token,
            newPassword: this.inputOne // Doesn't matter which input value we pick; they're the same
        };
        this.accountService.resetPassword(model).subscribe(function (response) {
            var message = 'Password reset successful';
            _this.reportSuccess(message);
            return true;
        }, function (errors) {
            var message = "Password reset unsuccessful";
            _this.reportError(errors, message);
            return false;
        });
    };
    PasswordComponent.prototype.setPassword = function () {
        var _this = this;
        if (this.passwordResetToken === null) {
            this.errors = 'Application error';
        }
        else {
            var model = {
                userId: this.tokenQueryModel.userId,
                passwordResetToken: this.passwordResetToken,
                newPassword: this.inputOne
            };
            this.accountService.resetPassword(model).subscribe(function (result) {
                var message = 'Password assignment successful!';
                _this.reportSuccess(message);
            }, function (errors) {
                var message = 'Password assignment unsuccessful!';
                _this.reportError(errors, message);
            });
        }
    };
    PasswordComponent.prototype.reportSuccess = function (message) {
        this.submissionReady = true;
        this.actionSucceeded = true;
        this.successMessage = message;
    };
    PasswordComponent.prototype.reportError = function (error, message) {
        this.submissionReady = true;
        this.actionSucceeded = false;
        this.errors = error;
        this.errorDescription = message;
    };
    PasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        var purpose = this.purpose.toUpperCase();
        switch (purpose) {
            case __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["a" /* PASSWORD_COMPONENT_NAME */].CHANGE:
                // this.componentName = PASSWORD_COMPONENT_NAME.CHANGE;
                this.isChangeComponent = true;
                this.componentType =
                    __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["b" /* PASSWORD_COMPONENT_TYPE */][__WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["a" /* PASSWORD_COMPONENT_NAME */].CHANGE];
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["a" /* PASSWORD_COMPONENT_NAME */].RESET:
                // this.componentName = PASSWORD_COMPONENT_NAME.RESET;
                this.componentType =
                    __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["b" /* PASSWORD_COMPONENT_TYPE */][__WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["a" /* PASSWORD_COMPONENT_NAME */].RESET];
                break;
            case __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["a" /* PASSWORD_COMPONENT_NAME */].SET:
                // this.componentName = PASSWORD_COMPONENT_NAME.SET;
                this.componentType =
                    __WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["b" /* PASSWORD_COMPONENT_TYPE */][__WEBPACK_IMPORTED_MODULE_4__shared_constants_password_component_types__["a" /* PASSWORD_COMPONENT_NAME */].SET];
                this.uriQueryService.tokenQueryModelData$.subscribe(function (token) {
                    _this.passwordResetToken = token.token;
                });
                break;
            default:
                this.router.navigate(['/error']);
        }
        this.tokenQueryModel = this.uriQueryService.getTokenQueryModel(this.activatedRoute.snapshot.queryParams);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], PasswordComponent.prototype, "purpose", void 0);
    PasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password',
            template: __webpack_require__("./src/app/auth/password/password.component.html"),
            styles: [__webpack_require__("./src/app/auth/password/password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_uri_query_service__["a" /* UriQueryService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], PasswordComponent);
    return PasswordComponent;
}());



/***/ }),

/***/ "./src/app/shared/constants/password-component-types.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PASSWORD_COMPONENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PASSWORD_COMPONENT_TYPE; });
var PASSWORD_COMPONENT_NAME = {
    SET: 'SET',
    RESET: 'RESET',
    CHANGE: 'CHANGE'
};
var PASSWORD_COMPONENT_TYPE;
(function (PASSWORD_COMPONENT_TYPE) {
    PASSWORD_COMPONENT_TYPE[PASSWORD_COMPONENT_TYPE["SET"] = 0] = "SET";
    PASSWORD_COMPONENT_TYPE[PASSWORD_COMPONENT_TYPE["RESET"] = 1] = "RESET";
    PASSWORD_COMPONENT_TYPE[PASSWORD_COMPONENT_TYPE["CHANGE"] = 2] = "CHANGE";
})(PASSWORD_COMPONENT_TYPE || (PASSWORD_COMPONENT_TYPE = {}));



/***/ }),

/***/ "./src/app/shared/models/feedback.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedBack; });
var FeedBack = /** @class */ (function () {
    function FeedBack() {
        this.successMessage = '';
        this.started = false;
    }
    FeedBack.prototype.reportSuccess = function (message) {
        // this.properties.started = true;
        // this.properties.actionSucceeded = true;
        // this.properties.successMessage = message;
        this.started = true;
        this.actionSucceeded = true;
        this.successMessage = message;
    };
    FeedBack.prototype.reportError = function (error, message) {
        // this.properties.started = true;
        // this.properties.actionSucceeded = false;
        // this.properties.errors = error;
        // this.properties.errorDescription = message;
        this.started = true;
        this.actionSucceeded = false;
        this.errors = error;
        this.errorDescription = message;
    };
    return FeedBack;
}());



/***/ }),

/***/ "./src/app/shared/services/uri-query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UriQueryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_token_query_model__ = __webpack_require__("./src/app/shared/models/token-query-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
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
        this.tokenQueryModelDataSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        this.tokenQueryModelData$ = this.tokenQueryModelDataSource.asObservable();
    }
    UriQueryService.prototype.setTokenQueryModel = function (tokenQueryModel) {
        this.tokenQueryModelDataSource.next(tokenQueryModel);
    };
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



/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map