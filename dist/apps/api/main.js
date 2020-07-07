(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _a : Object])
], AppController);



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
/* harmony import */ var _domains_domains_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domains/domains.module */ "./apps/api/src/app/domains/domains.module.ts");
/* harmony import */ var _view_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.module */ "./apps/api/src/app/view/view.module.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.module */ "./apps/api/src/app/auth/auth.module.ts");
/* harmony import */ var _models_users_users_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/users/users.module */ "./apps/api/src/app/models/users/users.module.ts");
/* harmony import */ var _common_guards_roles_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/guards/roles.guard */ "./apps/api/src/app/common/guards/roles.guard.ts");
/* harmony import */ var _sagas_sagas_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sagas/sagas.module */ "./apps/api/src/app/sagas/sagas.module.ts");
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nestjs/serve-static */ "@nestjs/serve-static");
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nestjs_serve_static__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_12__);











 // <- INSERT LINE
 // <- INSERT LINE
const domains = [_domains_domains_module__WEBPACK_IMPORTED_MODULE_4__["DomainsModule"]];
const view = [_view_view_module__WEBPACK_IMPORTED_MODULE_5__["ViewModule"]];
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_11__["ServeStaticModule"].forRoot({
                rootPath: Object(path__WEBPACK_IMPORTED_MODULE_12__["join"])(__dirname, '..', 'nx-app'),
                exclude: ['/api*']
            }),
            ...domains,
            ...view,
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_6__["MongooseModule"].forRoot(process.env.MONGO_DB),
            _models_users_users_module__WEBPACK_IMPORTED_MODULE_8__["UsersModelModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
            _sagas_sagas_module__WEBPACK_IMPORTED_MODULE_10__["SagasModule"]
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _common_guards_roles_guard__WEBPACK_IMPORTED_MODULE_9__["RolesGuard"]],
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/api/src/app/auth/auth.controller.ts":
/*!**************************************************!*\
  !*** ./apps/api/src/app/auth/auth.controller.ts ***!
  \**************************************************/
/*! exports provided: AuthController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthController", function() { return AuthController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./apps/api/src/app/auth/auth.service.ts");
/* harmony import */ var _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dto/response.dto */ "./apps/api/src/app/common/dto/response.dto.ts");
/* harmony import */ var _models_users_dto_create_user_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/users/dto/create-user.dto */ "./apps/api/src/app/models/users/dto/create-user.dto.ts");
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/users/users.service */ "./apps/api/src/app/models/users/users.service.ts");
/* harmony import */ var _dto_reset_password_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dto/reset-password.dto */ "./apps/api/src/app/auth/dto/reset-password.dto.ts");
/* harmony import */ var _dto_login_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dto/login.dto */ "./apps/api/src/app/auth/dto/login.dto.ts");
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ppm/common/main */ "./libs/common/main/src/index.ts");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_9__);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;










let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    login(login) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const response = yield this.authService.validateLogin(login.email, login.password);
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseSuccess"]('LOGIN.SUCCESS', response);
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('LOGIN.ERROR', error);
            }
        });
    }
    register(createUserDto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const newUser = yield this.userService.createNewUser(createUserDto);
                yield this.authService.createEmailToken(newUser.email);
                yield this.authService.saveUserConsent(newUser.email);
                const sent = yield this.authService.sendEmailVerification(newUser.email);
                if (sent) {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseSuccess"]('REGISTRATION.USER_REGISTERED_SUCCESSFULLY');
                }
                else {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('REGISTRATION.ERROR.MAIL_NOT_SENT');
                }
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('REGISTRATION.ERROR.GENERIC_ERROR', error);
            }
        });
    }
    verifyEmail(code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const isEmailVerified = yield this.authService.verifyEmail(code);
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseSuccess"]('LOGIN.EMAIL_VERIFIED', isEmailVerified);
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('LOGIN.ERROR', error);
            }
        });
    }
    sendEmailVerification(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authService.createEmailToken(params.email);
                const isEmailSent = yield this.authService.sendEmailVerification(params.email);
                if (isEmailSent) {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseSuccess"]('LOGIN.EMAIL_RESENT', null);
                }
                else {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('REGISTRATION.ERROR.MAIL_NOT_SENT');
                }
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('LOGIN.ERROR.SEND_EMAIL', error);
            }
        });
    }
    sendEmailForgotPassword(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const isEmailSent = yield this.authService.sendEmailForgotPassword(params.email);
                if (isEmailSent) {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseSuccess"]('LOGIN.EMAIL_RESENT', null);
                }
                else {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('REGISTRATION.ERROR.MAIL_NOT_SENT');
                }
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('LOGIN.ERROR.SEND_EMAIL', error);
            }
        });
    }
    setNewPassord(resetPassword) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                let isNewPasswordChanged = false;
                if (resetPassword.email && resetPassword.currentPassword) {
                    const isValidPassword = yield this.authService.checkPassword(resetPassword.email, resetPassword.currentPassword);
                    if (isValidPassword) {
                        isNewPasswordChanged = yield this.userService.setPassword(resetPassword.email, resetPassword.newPassword);
                    }
                    else {
                        return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('RESET_PASSWORD.WRONG_CURRENT_PASSWORD');
                    }
                }
                else if (resetPassword.newPasswordToken) {
                    const forgottenPasswordModel = yield this.authService.getForgottenPasswordModel(resetPassword.newPasswordToken);
                    isNewPasswordChanged = yield this.userService.setPassword(forgottenPasswordModel.email, resetPassword.newPassword);
                    if (isNewPasswordChanged)
                        yield forgottenPasswordModel.remove();
                }
                else {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('RESET_PASSWORD.CHANGE_PASSWORD_ERROR');
                }
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseSuccess"]('RESET_PASSWORD.PASSWORD_CHANGED', isNewPasswordChanged);
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__["ResponseError"]('RESET_PASSWORD.CHANGE_PASSWORD_ERROR', error);
            }
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__["PrivateRoutesPath"].POST_LOGIN),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_login_dto__WEBPACK_IMPORTED_MODULE_7__["LoginDto"] !== "undefined" && _dto_login_dto__WEBPACK_IMPORTED_MODULE_7__["LoginDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthController.prototype, "login", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__["PrivateRoutesPath"].POST_REGISTRY),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _models_users_dto_create_user_dto__WEBPACK_IMPORTED_MODULE_4__["CreateUserDto"] !== "undefined" && _models_users_dto_create_user_dto__WEBPACK_IMPORTED_MODULE_4__["CreateUserDto"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthController.prototype, "register", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__["PrivateRoutesPath"].POST_VERIFY),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('code')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthController.prototype, "verifyEmail", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__["PrivateRoutesPath"].POST_RESEND_VERIFY),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "sendEmailVerification", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__["PrivateRoutesPath"].POST_FORGOT_PASSWORD),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AuthController.prototype, "sendEmailForgotPassword", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__["PrivateRoutesPath"].POST_RESET_PASSWORD),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_h = typeof _dto_reset_password_dto__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordDto"] !== "undefined" && _dto_reset_password_dto__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordDto"]) === "function" ? _h : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AuthController.prototype, "setNewPassord", null);
AuthController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__["PrivateRoutesPath"].AUTH),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_9__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__["PrivateRoutesPath"].AUTH),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_k = typeof _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] !== "undefined" && _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]) === "function" ? _k : Object, typeof (_l = typeof _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] !== "undefined" && _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]) === "function" ? _l : Object])
], AuthController);



/***/ }),

/***/ "./apps/api/src/app/auth/auth.module.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/auth/auth.module.ts ***!
  \**********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./apps/api/src/app/auth/auth.service.ts");
/* harmony import */ var _passport_jwt_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./passport/jwt.strategy */ "./apps/api/src/app/auth/passport/jwt.strategy.ts");
/* harmony import */ var _auth_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.controller */ "./apps/api/src/app/auth/auth.controller.ts");
/* harmony import */ var _models_users_user_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/users/user.schema */ "./apps/api/src/app/models/users/user.schema.ts");
/* harmony import */ var _auth_schemas_emailverification_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/schemas/emailverification.schema */ "./apps/api/src/app/auth/schemas/emailverification.schema.ts");
/* harmony import */ var _schemas_forgottenpassword_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./schemas/forgottenpassword.schema */ "./apps/api/src/app/auth/schemas/forgottenpassword.schema.ts");
/* harmony import */ var _schemas_consentregistry_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schemas/consentregistry.schema */ "./apps/api/src/app/auth/schemas/consentregistry.schema.ts");
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/users/users.service */ "./apps/api/src/app/models/users/users.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jwt.service */ "./apps/api/src/app/auth/jwt.service.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_13__);












// import { LoggerMiddleware } from '../common/middlewares/logger.middleware';


let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_passport__WEBPACK_IMPORTED_MODULE_13__["PassportModule"],
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_11__["MongooseModule"].forFeature([
                { name: 'User', schema: _models_users_user_schema__WEBPACK_IMPORTED_MODULE_5__["UserSchema"] },
                { name: _helpers_constants__WEBPACK_IMPORTED_MODULE_12__["ViewModels"].EMAIL_VERIFICATION, schema: _auth_schemas_emailverification_schema__WEBPACK_IMPORTED_MODULE_6__["EmailVerificationSchema"] },
                { name: _helpers_constants__WEBPACK_IMPORTED_MODULE_12__["ViewModels"].FORGOTTEN_PASSWORD, schema: _schemas_forgottenpassword_schema__WEBPACK_IMPORTED_MODULE_7__["ForgottenPasswordSchema"] },
                { name: _helpers_constants__WEBPACK_IMPORTED_MODULE_12__["ViewModels"].CONSENT_REGISTRY, schema: _schemas_consentregistry_schema__WEBPACK_IMPORTED_MODULE_8__["ConsentRegistrySchema"] },
            ])
        ],
        controllers: [_auth_controller__WEBPACK_IMPORTED_MODULE_4__["AuthController"]],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _models_users_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"], _jwt_service__WEBPACK_IMPORTED_MODULE_10__["JWTService"], _passport_jwt_strategy__WEBPACK_IMPORTED_MODULE_3__["JwtStrategy"]],
    })
], AuthModule);



/***/ }),

/***/ "./apps/api/src/app/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./apps/api/src/app/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nodemailer */ "nodemailer");
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./apps/api/src/app/auth/jwt.service.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_users_dto_user_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/users/dto/user.dto */ "./apps/api/src/app/models/users/dto/user.dto.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");
var _a, _b, _c, _d, _e;









const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_2__["createTransport"]({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
        user: process.env.MAIL_SERVER_USER,
        pass: process.env.MAIL_SERVER_PASS
    }
});
let AuthService = class AuthService {
    constructor(userModel, emailVerificationModel, forgottenPasswordModel, consentRegistryModel, jwtService) {
        this.userModel = userModel;
        this.emailVerificationModel = emailVerificationModel;
        this.forgottenPasswordModel = forgottenPasswordModel;
        this.consentRegistryModel = consentRegistryModel;
        this.jwtService = jwtService;
    }
    validateLogin(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userFromDb = yield this.userModel.findOne({ email: email });
            if (!userFromDb)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('LOGIN.USER_NOT_FOUND', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].NOT_FOUND);
            if (!userFromDb.auth.email.valid)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('LOGIN.EMAIL_NOT_VERIFIED', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].FORBIDDEN);
            const isValidPass = yield bcryptjs__WEBPACK_IMPORTED_MODULE_1__["compare"](password, userFromDb.password);
            if (isValidPass) {
                const accessToken = yield this.jwtService.createToken(email, userFromDb.roles);
                return { token: accessToken, user: new _models_users_dto_user_dto__WEBPACK_IMPORTED_MODULE_6__["UserDto"](userFromDb) };
            }
            else {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('LOGIN.ERROR', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].UNAUTHORIZED);
            }
        });
    }
    createEmailToken(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const emailVerification = yield this.emailVerificationModel.findOne({
                email: email
            });
            if (emailVerification &&
                (new Date().getTime() - emailVerification.timestamp.getTime()) / 60000 <
                    15) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('LOGIN.EMAIL_SENDED_RECENTLY', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
            else {
                yield this.emailVerificationModel.findOneAndUpdate({ email: email }, {
                    email: email,
                    emailToken: String(Math.floor(Math.random() * 9000000) + 1000000),
                    timestamp: new Date()
                }, { upsert: true });
                return true;
            }
        });
    }
    saveUserConsent(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const http = new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpService"]();
                const newConsent = new this.consentRegistryModel();
                newConsent.email = email;
                newConsent.date = new Date();
                newConsent.registrationForm = [
                    'firstName',
                    'lastName',
                    'email',
                    'birthday date',
                    'password'
                ];
                newConsent.checkboxText = 'I accept privacy policy';
                const privacyPolicyResponse = yield http
                    .get('https://www.XXXXXX.com/api/privacy-policy')
                    .toPromise();
                newConsent.privacyPolicy = privacyPolicyResponse.data.content;
                const cookiePolicyResponse = yield http
                    .get('https://www.XXXXXX.com/api/privacy-policy')
                    .toPromise();
                newConsent.cookiePolicy = cookiePolicyResponse.data.content;
                newConsent.acceptedPolicy = 'Y';
                return yield newConsent.save();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    createForgottenPasswordToken(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const forgottenPassword = yield this.forgottenPasswordModel.findOne({
                email: email
            });
            if (forgottenPassword &&
                (new Date().getTime() - forgottenPassword.timestamp.getTime()) / 60000 <
                    15) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('RESET_PASSWORD.EMAIL_SENDED_RECENTLY', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
            }
            else {
                const forgottenPasswordModel = yield this.forgottenPasswordModel.findOneAndUpdate({ email: email }, {
                    email: email,
                    newPasswordToken: String(Math.floor(Math.random() * 9000000) + 1000000),
                    timestamp: new Date()
                }, { upsert: true, new: true });
                if (forgottenPasswordModel) {
                    return forgottenPasswordModel;
                }
                else {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('LOGIN.ERROR.GENERIC_ERROR', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].INTERNAL_SERVER_ERROR);
                }
            }
        });
    }
    verifyEmail(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const emailVerif = yield this.emailVerificationModel.findOne({
                emailToken: token
            });
            if (emailVerif && emailVerif.email) {
                const userFromDb = yield this.userModel.findOne({
                    email: emailVerif.email
                });
                if (userFromDb) {
                    userFromDb.auth.email.valid = true;
                    const savedUser = yield userFromDb.save();
                    yield emailVerif.remove();
                    return !!savedUser;
                }
            }
            else {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('LOGIN.EMAIL_CODE_NOT_VALID', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].FORBIDDEN);
            }
        });
    }
    getForgottenPasswordModel(newPasswordToken) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.forgottenPasswordModel.findOne({
                newPasswordToken: newPasswordToken
            });
        });
    }
    sendEmailVerification(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const model = yield this.emailVerificationModel.findOne({ email: email });
            if (model && model.emailToken) {
                const url = `http://${process.env.HOST}:${process.env.PORT}/api/auth/email/verify/${model.emailToken}`;
                const mailOptions = {
                    from: process.env.MAIL_SERVER_USER,
                    to: email,
                    subject: 'Registracijos patvirtinimas',
                    text: 'Registracijos patvirtinima',
                    html: '<b>Sveiki, Registracijos patvirtinimas <br><a href=' +
                        url +
                        '>Patvirtinti  registracija</a></b>'
                };
                const sent = yield new Promise(function (resolve, reject) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        return yield transporter.sendMail(mailOptions, (error, info) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (error) {
                                console.log('Message sent: %s', error);
                                return reject(false);
                            }
                            console.log('Message sent: %s', info.messageId);
                            resolve(true);
                        }));
                    });
                });
                console.log(sent);
                return sent;
            }
            else {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('REGISTER.USER_NOT_REGISTERED', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].FORBIDDEN);
            }
        });
    }
    checkPassword(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userFromDb = yield this.userModel.findOne({ email: email });
            if (!userFromDb)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('LOGIN.USER_NOT_FOUND', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].NOT_FOUND);
            return yield bcryptjs__WEBPACK_IMPORTED_MODULE_1__["compare"](password, userFromDb.password);
        });
    }
    sendEmailForgotPassword(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userFromDb = yield this.userModel.findOne({ email: email });
            if (!userFromDb)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('LOGIN.USER_NOT_FOUND', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].NOT_FOUND);
            const tokenModel = yield this.createForgottenPasswordToken(email);
            if (tokenModel && tokenModel.newPasswordToken) {
                const url = `http://${process.env.HOST}:${process.env.PORT}/api/auth/email/reset-password/${tokenModel.newPasswordToken}`;
                const mailOptions = {
                    from: process.env.MAIL_SERVER_USER,
                    to: email,
                    subject: 'Slaptažodžio keitimas',
                    text: 'Slaptažodžio keitimas',
                    html: '<b>Sveiki, Jei norite pakeisti slaptažodį spauskite <a href=' +
                        url +
                        '>čia</a></b>'
                };
                const sended = yield new Promise(function (resolve, reject) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        return yield transporter.sendMail(mailOptions, (error, info) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (error) {
                                console.log('Message sent: %s', error);
                                return reject(false);
                            }
                            console.log('Message sent: %s', info.messageId);
                            resolve(true);
                        }));
                    });
                });
                return sended;
            }
            else {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('REGISTER.USER_NOT_REGISTERED', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].FORBIDDEN);
            }
        });
    }
};
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__["InjectModel"])('User')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__["ViewModels"].EMAIL_VERIFICATION)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__["ViewModels"].FORGOTTEN_PASSWORD)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__["ViewModels"].CONSENT_REGISTRY)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _a : Object, typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _b : Object, typeof (_c = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _c : Object, typeof (_d = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _d : Object, typeof (_e = typeof _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JWTService"] !== "undefined" && _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JWTService"]) === "function" ? _e : Object])
], AuthService);



/***/ }),

/***/ "./apps/api/src/app/auth/dto/login.dto.ts":
/*!************************************************!*\
  !*** ./apps/api/src/app/auth/dto/login.dto.ts ***!
  \************************************************/
/*! exports provided: LoginDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDto", function() { return LoginDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);


class LoginDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LoginDto.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ }),

/***/ "./apps/api/src/app/auth/dto/reset-password.dto.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/app/auth/dto/reset-password.dto.ts ***!
  \*********************************************************/
/*! exports provided: ResetPasswordDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordDto", function() { return ResetPasswordDto; });
class ResetPasswordDto {
}


/***/ }),

/***/ "./apps/api/src/app/auth/jwt.service.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/auth/jwt.service.ts ***!
  \**********************************************/
/*! exports provided: JWTService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTService", function() { return JWTService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let JWTService = class JWTService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    createToken(email, roles) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const expiresIn = process.env.JWT_EXPIRES_IN, secretOrKey = process.env.JWT_SECRET;
            const userInfo = { email: email, roles: roles };
            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__["sign"](userInfo, secretOrKey, { expiresIn });
            return {
                expiresIn: expiresIn,
                token: token,
            };
        });
    }
    validateUser(signedUser) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userFromDb = yield this.userModel.findOne({ email: signedUser.email });
            if (userFromDb) {
                return userFromDb;
            }
            return null;
        });
    }
};
JWTService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["InjectModel"])('User')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], JWTService);



/***/ }),

/***/ "./apps/api/src/app/auth/passport/jwt.strategy.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/app/auth/passport/jwt.strategy.ts ***!
  \********************************************************/
/*! exports provided: JwtStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtStrategy", function() { return JwtStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-jwt */ "passport-jwt");
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jwt.service */ "./apps/api/src/app/auth/jwt.service.ts");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let JwtStrategy = class JwtStrategy extends Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_4__["PassportStrategy"])(passport_jwt__WEBPACK_IMPORTED_MODULE_1__["Strategy"]) {
    constructor(jwtService) {
        super({
            jwtFromRequest: passport_jwt__WEBPACK_IMPORTED_MODULE_1__["ExtractJwt"].fromAuthHeaderAsBearerToken(),
            passReqToCallback: true,
            secretOrKey: process.env.JWT_SECRET,
            ignoreExpiration: false
        }
        // async (req, payload, next) => await this.verify(req, payload, next),
        );
        this.jwtService = jwtService;
        // passport.use(this);
    }
    validate(payload, req, next) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.jwtService.validateUser(req);
            if (!user) {
                return next(new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["UnauthorizedException"](), false);
            }
            next(null, user);
        });
    }
};
JwtStrategy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _jwt_service__WEBPACK_IMPORTED_MODULE_3__["JWTService"] !== "undefined" && _jwt_service__WEBPACK_IMPORTED_MODULE_3__["JWTService"]) === "function" ? _a : Object])
], JwtStrategy);



/***/ }),

/***/ "./apps/api/src/app/auth/schemas/consentregistry.schema.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/auth/schemas/consentregistry.schema.ts ***!
  \*****************************************************************/
/*! exports provided: ConsentRegistrySchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsentRegistrySchema", function() { return ConsentRegistrySchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ConsentRegistrySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    email: String,
    registrationForm: [Array],
    checkboxText: String,
    date: Date,
    privacyPolicy: String,
    cookiePolicy: String,
    acceptedPolicy: String
});


/***/ }),

/***/ "./apps/api/src/app/auth/schemas/emailverification.schema.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/auth/schemas/emailverification.schema.ts ***!
  \*******************************************************************/
/*! exports provided: EmailVerificationSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationSchema", function() { return EmailVerificationSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const EmailVerificationSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    email: String,
    emailToken: String,
    timestamp: Date
});


/***/ }),

/***/ "./apps/api/src/app/auth/schemas/forgottenpassword.schema.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/auth/schemas/forgottenpassword.schema.ts ***!
  \*******************************************************************/
/*! exports provided: ForgottenPasswordSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgottenPasswordSchema", function() { return ForgottenPasswordSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ForgottenPasswordSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    email: String,
    newPasswordToken: String,
    timestamp: Date
});


/***/ }),

/***/ "./apps/api/src/app/common/dto/response.dto.ts":
/*!*****************************************************!*\
  !*** ./apps/api/src/app/common/dto/response.dto.ts ***!
  \*****************************************************/
/*! exports provided: ResponseError, ResponseSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseError", function() { return ResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseSuccess", function() { return ResponseSuccess; });
class ResponseError {
    constructor(infoMessage, data) {
        this.success = false;
        this.message = infoMessage;
        this.data = data;
        console.warn(new Date().toString() + ' - [Response]: ' + infoMessage + (data ? ' - ' + JSON.stringify(data) : ''));
    }
    ;
}
class ResponseSuccess {
    constructor(infoMessage, data, notLog) {
        this.success = true;
        this.message = infoMessage;
        this.data = data;
        if (!notLog) {
            try {
                var offuscateRequest = JSON.parse(JSON.stringify(data));
                if (offuscateRequest && offuscateRequest.token)
                    offuscateRequest.token = "*******";
                console.log(new Date().toString() + ' - [Response]: ' + JSON.stringify(offuscateRequest));
            }
            catch (error) { }
        }
        ;
    }
    ;
}


/***/ }),

/***/ "./apps/api/src/app/common/filters/all-exception.filter.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/common/filters/all-exception.filter.ts ***!
  \*****************************************************************/
/*! exports provided: AllExceptionsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllExceptionsFilter", function() { return AllExceptionsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);



let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status = (exception instanceof _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]) ? exception.getStatus() : _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].INTERNAL_SERVER_ERROR;
        // if (status === HttpStatus.UNAUTHORIZED) 
        //     return response.status(status).render('views/401');
        // if (status === HttpStatus.NOT_FOUND) 
        //     return response.status(status).render('views/404');
        // if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
        //     if (process.env.NODE_ENV === 'production') {
        //       console.error(error.stack);
        //       return response.status(status).render('views/500');
        //     }
        //     else {
        //       let message = error.stack;
        //       return response.status(status).send(message); 
        //     } 
        // }
        console.error(exception.stack);
        response
            .status(status)
            .json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
    }
};
AllExceptionsFilter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Catch"])()
], AllExceptionsFilter);



/***/ }),

/***/ "./apps/api/src/app/common/guards/roles.guard.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/common/guards/roles.guard.ts ***!
  \*******************************************************/
/*! exports provided: RolesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesGuard", function() { return RolesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
var _a;



let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const roles = this.reflector.get('roles', context.getHandler());
        if (!roles) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        const user = req.user;
        const hasRole = () => user.roles.some(role => roles.indexOf(role) > -1);
        let hasPermission = false;
        console.log(hasRole());
        if (hasRole()) {
            hasPermission = true;
            if (req.params.email || req.body.email) {
                if (req.user.email != req.params.email &&
                    req.user.email != req.body.email) {
                    hasPermission = false;
                }
            }
        }
        return user && user.roles && hasPermission;
    }
};
RolesGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["Reflector"] !== "undefined" && _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["Reflector"]) === "function" ? _a : Object])
], RolesGuard);



/***/ }),

/***/ "./apps/api/src/app/common/interceptors/logging.interceptor.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/common/interceptors/logging.interceptor.ts ***!
  \*********************************************************************/
/*! exports provided: LoggingInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function() { return LoggingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let LoggingInterceptor = class LoggingInterceptor {
    intercept(context, next) {
        const now = Date.now();
        console.log(`After... ${Date.now() - now}ms`);
        return next
            .handle()
            .pipe();
    }
};
LoggingInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoggingInterceptor);



/***/ }),

/***/ "./apps/api/src/app/common/interceptors/transform.interceptor.ts":
/*!***********************************************************************!*\
  !*** ./apps/api/src/app/common/interceptors/transform.interceptor.ts ***!
  \***********************************************************************/
/*! exports provided: TransformInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformInterceptor", function() { return TransformInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);



let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        return next
            .handle()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => ({ data })));
    }
};
TransformInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TransformInterceptor);



/***/ }),

/***/ "./apps/api/src/app/domains/adverts/adverts.aggregate.ts":
/*!***************************************************************!*\
  !*** ./apps/api/src/app/domains/adverts/adverts.aggregate.ts ***!
  \***************************************************************/
/*! exports provided: AdvertsAggregate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertsAggregate", function() { return AdvertsAggregate; });
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__);

class AdvertsAggregate extends _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__["AggregateRoot"] {
}


/***/ }),

/***/ "./apps/api/src/app/domains/adverts/adverts.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/api/src/app/domains/adverts/adverts.controller.ts ***!
  \****************************************************************/
/*! exports provided: AdvertsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertsController", function() { return AdvertsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commands_create_advert_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands/create-advert.command */ "./apps/api/src/app/domains/adverts/commands/create-advert.command.ts");
/* harmony import */ var _commands_remove_advert_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commands/remove-advert.command */ "./apps/api/src/app/domains/adverts/commands/remove-advert.command.ts");
/* harmony import */ var _commands_update_advert_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/update-advert.command */ "./apps/api/src/app/domains/adverts/commands/update-advert.command.ts");
/* harmony import */ var _models_adverts_dtos_update_advert_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/adverts/dtos/update-advert.dto */ "./apps/api/src/app/models/adverts/dtos/update-advert.dto.ts");
/* harmony import */ var _models_adverts_dtos_create_advert_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/adverts/dtos/create-advert.dto */ "./apps/api/src/app/models/adverts/dtos/create-advert.dto.ts");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/interceptors/logging.interceptor */ "./apps/api/src/app/common/interceptors/logging.interceptor.ts");
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/interceptors/transform.interceptor */ "./apps/api/src/app/common/interceptors/transform.interceptor.ts");
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ppm/common/main */ "./libs/common/main/src/index.ts");
var _a, _b, _c, _d;













let AdvertsController = class AdvertsController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    create(dto, request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = request.user;
            if (!user.roles.includes(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__["Roles"].MENTOR)) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"](`You don't have permissions to create the advert`);
            }
            return this.commandBus.execute(new _commands_create_advert_command__WEBPACK_IMPORTED_MODULE_3__["CreateAdvert"](dto, user));
        });
    }
    updates(id, updateAdvertPayload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commandBus.execute(new _commands_update_advert_command__WEBPACK_IMPORTED_MODULE_5__["UpdateAdvert"](Object.assign({ id }, updateAdvertPayload)));
        });
    }
    remove(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commandBus.execute(new _commands_remove_advert_command__WEBPACK_IMPORTED_MODULE_4__["RemoveAdvert"]({ id }));
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _models_adverts_dtos_create_advert_dto__WEBPACK_IMPORTED_MODULE_7__["CreateAdvertPayloadDto"] !== "undefined" && _models_adverts_dtos_create_advert_dto__WEBPACK_IMPORTED_MODULE_7__["CreateAdvertPayloadDto"]) === "function" ? _a : Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], AdvertsController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__["PrivateRoutesPath"].POST_UPDATE),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_b = typeof _models_adverts_dtos_update_advert_dto__WEBPACK_IMPORTED_MODULE_6__["UpdateAdvertPayloadDto"] !== "undefined" && _models_adverts_dtos_update_advert_dto__WEBPACK_IMPORTED_MODULE_6__["UpdateAdvertPayloadDto"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AdvertsController.prototype, "updates", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__["PrivateRoutesPath"].POST_DELETE),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], AdvertsController.prototype, "remove", null);
AdvertsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__["PrivateRoutesPath"].ADVERTS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__["PrivateRoutesPath"].ADVERTS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_10__["LoggingInterceptor"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_11__["TransformInterceptor"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"]) === "function" ? _d : Object])
], AdvertsController);



/***/ }),

/***/ "./apps/api/src/app/domains/adverts/adverts.module.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/domains/adverts/adverts.module.ts ***!
  \************************************************************/
/*! exports provided: AdvertsDomainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertsDomainModule", function() { return AdvertsDomainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adverts_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adverts.controller */ "./apps/api/src/app/domains/adverts/adverts.controller.ts");
/* harmony import */ var _models_adverts_adverts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/adverts/adverts.module */ "./apps/api/src/app/models/adverts/adverts.module.ts");
/* harmony import */ var _commands_remove_advert_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/remove-advert.command */ "./apps/api/src/app/domains/adverts/commands/remove-advert.command.ts");
/* harmony import */ var _commands_create_advert_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands/create-advert.command */ "./apps/api/src/app/domains/adverts/commands/create-advert.command.ts");
/* harmony import */ var _commands_update_advert_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commands/update-advert.command */ "./apps/api/src/app/domains/adverts/commands/update-advert.command.ts");
/* harmony import */ var _models_users_users_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/users/users.module */ "./apps/api/src/app/models/users/users.module.ts");









const commandHandlers = [_commands_create_advert_command__WEBPACK_IMPORTED_MODULE_6__["CreateAdvertHandler"], _commands_remove_advert_command__WEBPACK_IMPORTED_MODULE_5__["RemoveAdvertHandler"], _commands_update_advert_command__WEBPACK_IMPORTED_MODULE_7__["UpdateAdvertHandler"]];
let AdvertsDomainModule = class AdvertsDomainModule {
};
AdvertsDomainModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_adverts_adverts_module__WEBPACK_IMPORTED_MODULE_4__["AdvertsModelModule"], _models_users_users_module__WEBPACK_IMPORTED_MODULE_8__["UsersModelModule"]],
        controllers: [_adverts_controller__WEBPACK_IMPORTED_MODULE_3__["AdvertsController"]],
        providers: [...commandHandlers],
    })
], AdvertsDomainModule);



/***/ }),

/***/ "./apps/api/src/app/domains/adverts/commands/create-advert.command.ts":
/*!****************************************************************************!*\
  !*** ./apps/api/src/app/domains/adverts/commands/create-advert.command.ts ***!
  \****************************************************************************/
/*! exports provided: CreateAdvert, CreateAdvertHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdvert", function() { return CreateAdvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdvertHandler", function() { return CreateAdvertHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adverts.aggregate */ "./apps/api/src/app/domains/adverts/adverts.aggregate.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _events_advert_created_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/advert-created.event */ "./apps/api/src/app/domains/adverts/events/advert-created.event.ts");
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/users/users.service */ "./apps/api/src/app/models/users/users.service.ts");
var _a, _b;







class CreateAdvert {
    constructor(data, user) {
        this.data = data;
        this.user = user;
    }
}
let CreateAdvertHandler = class CreateAdvertHandler {
    execute({ data, user }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userFromDB = yield this._usersService.getById(user._id.toHexString());
            if (!userFromDB) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["BadRequestException"](`This user doesn't exist`);
            }
            if (!data.title) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["BadRequestException"]('Title is required!');
            }
            const advertData = Object.assign(Object.assign({}, data), { creator: { _id: userFromDB._id, name: userFromDB.userName } });
            const aggregate = new _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__["AdvertsAggregate"]();
            const id = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId().toHexString();
            aggregate.apply(new _events_advert_created_event__WEBPACK_IMPORTED_MODULE_5__["AdvertCreated"](id, advertData));
            const advert = this._publisher.mergeObjectContext(aggregate);
            advert.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__["EventPublisher"]) === "function" ? _a : Object)
], CreateAdvertHandler.prototype, "_publisher", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] !== "undefined" && _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]) === "function" ? _b : Object)
], CreateAdvertHandler.prototype, "_usersService", void 0);
CreateAdvertHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__["CommandHandler"])(CreateAdvert)
], CreateAdvertHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/adverts/commands/remove-advert.command.ts":
/*!****************************************************************************!*\
  !*** ./apps/api/src/app/domains/adverts/commands/remove-advert.command.ts ***!
  \****************************************************************************/
/*! exports provided: RemoveAdvert, RemoveAdvertHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAdvert", function() { return RemoveAdvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAdvertHandler", function() { return RemoveAdvertHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adverts.aggregate */ "./apps/api/src/app/domains/adverts/adverts.aggregate.ts");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_advert_removed_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/advert-removed.event */ "./apps/api/src/app/domains/adverts/events/advert-removed.event.ts");
var _a;





class RemoveAdvert {
    constructor(data) {
        this.data = data;
    }
}
let RemoveAdvertHandler = class RemoveAdvertHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__["AdvertsAggregate"]();
            aggregate.apply(new _events_advert_removed_event__WEBPACK_IMPORTED_MODULE_4__["AdvertRemoved"](data));
            const advert = this._publisher.mergeObjectContext(aggregate);
            advert.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"]) === "function" ? _a : Object)
], RemoveAdvertHandler.prototype, "_publisher", void 0);
RemoveAdvertHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandHandler"])(RemoveAdvert)
], RemoveAdvertHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/adverts/commands/update-advert.command.ts":
/*!****************************************************************************!*\
  !*** ./apps/api/src/app/domains/adverts/commands/update-advert.command.ts ***!
  \****************************************************************************/
/*! exports provided: UpdateAdvert, UpdateAdvertHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAdvert", function() { return UpdateAdvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAdvertHandler", function() { return UpdateAdvertHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../adverts.aggregate */ "./apps/api/src/app/domains/adverts/adverts.aggregate.ts");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_advert_updated_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/advert-updated.event */ "./apps/api/src/app/domains/adverts/events/advert-updated.event.ts");
var _a;





class UpdateAdvert {
    constructor(data) {
        this.data = data;
    }
}
let UpdateAdvertHandler = class UpdateAdvertHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__["AdvertsAggregate"]();
            aggregate.apply(new _events_advert_updated_event__WEBPACK_IMPORTED_MODULE_4__["AdvertUpdated"](data));
            const advert = this._publisher.mergeObjectContext(aggregate);
            advert.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"]) === "function" ? _a : Object)
], UpdateAdvertHandler.prototype, "_publisher", void 0);
UpdateAdvertHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandHandler"])(UpdateAdvert)
], UpdateAdvertHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/adverts/events/advert-created.event.ts":
/*!*************************************************************************!*\
  !*** ./apps/api/src/app/domains/adverts/events/advert-created.event.ts ***!
  \*************************************************************************/
/*! exports provided: AdvertCreated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertCreated", function() { return AdvertCreated; });
class AdvertCreated {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/adverts/events/advert-removed.event.ts":
/*!*************************************************************************!*\
  !*** ./apps/api/src/app/domains/adverts/events/advert-removed.event.ts ***!
  \*************************************************************************/
/*! exports provided: AdvertRemoved */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertRemoved", function() { return AdvertRemoved; });
class AdvertRemoved {
    constructor(advert) {
        this.advert = advert;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/adverts/events/advert-updated.event.ts":
/*!*************************************************************************!*\
  !*** ./apps/api/src/app/domains/adverts/events/advert-updated.event.ts ***!
  \*************************************************************************/
/*! exports provided: AdvertUpdated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertUpdated", function() { return AdvertUpdated; });
class AdvertUpdated {
    constructor(advert) {
        this.advert = advert;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/domains.module.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/app/domains/domains.module.ts ***!
  \****************************************************/
/*! exports provided: DomainsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainsModule", function() { return DomainsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adverts/events/advert-created.event */ "./apps/api/src/app/domains/adverts/events/advert-created.event.ts");
/* harmony import */ var _permissions_events_permission_created_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions/events/permission-created.event */ "./apps/api/src/app/domains/permissions/events/permission-created.event.ts");
/* harmony import */ var _userProfiles_user_profiles_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userProfiles/user-profiles.module */ "./apps/api/src/app/domains/userProfiles/user-profiles.module.ts");
/* harmony import */ var _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adverts/adverts.module */ "./apps/api/src/app/domains/adverts/adverts.module.ts");
/* harmony import */ var _permissions_permissions_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./permissions/permissions.module */ "./apps/api/src/app/domains/permissions/permissions.module.ts");
/* harmony import */ var _adverts_events_advert_updated_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adverts/events/advert-updated.event */ "./apps/api/src/app/domains/adverts/events/advert-updated.event.ts");
/* harmony import */ var _permissions_events_permission_updated_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./permissions/events/permission-updated.event */ "./apps/api/src/app/domains/permissions/events/permission-updated.event.ts");
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/settings.module */ "./apps/api/src/app/domains/settings/settings.module.ts");











let DomainsModule = class DomainsModule {
};
DomainsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"],
            _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_6__["AdvertsDomainModule"],
            _permissions_permissions_module__WEBPACK_IMPORTED_MODULE_7__["PermissionsDomainModule"],
            _userProfiles_user_profiles_module__WEBPACK_IMPORTED_MODULE_5__["UserProfilesModule"],
            _settings_settings_module__WEBPACK_IMPORTED_MODULE_10__["SettingsDomainModule"],
        ],
        controllers: [],
        providers: [
            _adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_3__["AdvertCreated"],
            _adverts_events_advert_updated_event__WEBPACK_IMPORTED_MODULE_8__["AdvertUpdated"],
            _permissions_events_permission_created_event__WEBPACK_IMPORTED_MODULE_4__["PermissionCreated"],
            _permissions_events_permission_updated_event__WEBPACK_IMPORTED_MODULE_9__["PermissionUpdated"],
        ],
    })
], DomainsModule);



/***/ }),

/***/ "./apps/api/src/app/domains/permissions/commands/create-permission.command.ts":
/*!************************************************************************************!*\
  !*** ./apps/api/src/app/domains/permissions/commands/create-permission.command.ts ***!
  \************************************************************************************/
/*! exports provided: CreatePermission, CreatePermissionHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePermission", function() { return CreatePermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePermissionHandler", function() { return CreatePermissionHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../permissions.aggregate */ "./apps/api/src/app/domains/permissions/permissions.aggregate.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _events_permission_created_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/permission-created.event */ "./apps/api/src/app/domains/permissions/events/permission-created.event.ts");
var _a;






class CreatePermission {
    constructor(data) {
        this.data = data;
    }
}
let CreatePermissionHandler = class CreatePermissionHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!data.role) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["BadRequestException"]('Role is required!');
            }
            const aggregate = new _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__["PermissionsAggregate"]();
            const id = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId().toHexString();
            aggregate.apply(new _events_permission_created_event__WEBPACK_IMPORTED_MODULE_5__["PermissionCreated"](id, data));
            const permission = this._publisher.mergeObjectContext(aggregate);
            permission.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__["EventPublisher"]) === "function" ? _a : Object)
], CreatePermissionHandler.prototype, "_publisher", void 0);
CreatePermissionHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__["CommandHandler"])(CreatePermission)
], CreatePermissionHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/permissions/commands/remove-permission.command.ts":
/*!************************************************************************************!*\
  !*** ./apps/api/src/app/domains/permissions/commands/remove-permission.command.ts ***!
  \************************************************************************************/
/*! exports provided: RemovePermission, RemovePermissionHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovePermission", function() { return RemovePermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemovePermissionHandler", function() { return RemovePermissionHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../permissions.aggregate */ "./apps/api/src/app/domains/permissions/permissions.aggregate.ts");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_permission_removed_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/permission-removed.event */ "./apps/api/src/app/domains/permissions/events/permission-removed.event.ts");
var _a;





class RemovePermission {
    constructor(id) {
        this.id = id;
    }
}
let RemovePermissionHandler = class RemovePermissionHandler {
    execute({ id }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__["PermissionsAggregate"]();
            aggregate.apply(new _events_permission_removed_event__WEBPACK_IMPORTED_MODULE_4__["PermissionRemoved"](id));
            const permission = this._publisher.mergeObjectContext(aggregate);
            permission.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"]) === "function" ? _a : Object)
], RemovePermissionHandler.prototype, "_publisher", void 0);
RemovePermissionHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandHandler"])(RemovePermission)
], RemovePermissionHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/permissions/commands/update-permission.command.ts":
/*!************************************************************************************!*\
  !*** ./apps/api/src/app/domains/permissions/commands/update-permission.command.ts ***!
  \************************************************************************************/
/*! exports provided: UpdatePermission, UpdatePermissionHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePermission", function() { return UpdatePermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePermissionHandler", function() { return UpdatePermissionHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../permissions.aggregate */ "./apps/api/src/app/domains/permissions/permissions.aggregate.ts");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_permission_updated_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/permission-updated.event */ "./apps/api/src/app/domains/permissions/events/permission-updated.event.ts");
var _a;





class UpdatePermission {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
}
let UpdatePermissionHandler = class UpdatePermissionHandler {
    execute({ id, data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__["PermissionsAggregate"]();
            aggregate.apply(new _events_permission_updated_event__WEBPACK_IMPORTED_MODULE_4__["PermissionUpdated"](id, data));
            const permission = this._publisher.mergeObjectContext(aggregate);
            permission.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"]) === "function" ? _a : Object)
], UpdatePermissionHandler.prototype, "_publisher", void 0);
UpdatePermissionHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandHandler"])(UpdatePermission)
], UpdatePermissionHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/permissions/events/permission-created.event.ts":
/*!*********************************************************************************!*\
  !*** ./apps/api/src/app/domains/permissions/events/permission-created.event.ts ***!
  \*********************************************************************************/
/*! exports provided: PermissionCreated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionCreated", function() { return PermissionCreated; });
class PermissionCreated {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/permissions/events/permission-removed.event.ts":
/*!*********************************************************************************!*\
  !*** ./apps/api/src/app/domains/permissions/events/permission-removed.event.ts ***!
  \*********************************************************************************/
/*! exports provided: PermissionRemoved */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionRemoved", function() { return PermissionRemoved; });
class PermissionRemoved {
    constructor(id) {
        this.id = id;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/permissions/events/permission-updated.event.ts":
/*!*********************************************************************************!*\
  !*** ./apps/api/src/app/domains/permissions/events/permission-updated.event.ts ***!
  \*********************************************************************************/
/*! exports provided: PermissionUpdated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionUpdated", function() { return PermissionUpdated; });
class PermissionUpdated {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/permissions/permissions.aggregate.ts":
/*!***********************************************************************!*\
  !*** ./apps/api/src/app/domains/permissions/permissions.aggregate.ts ***!
  \***********************************************************************/
/*! exports provided: PermissionsAggregate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsAggregate", function() { return PermissionsAggregate; });
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__);

class PermissionsAggregate extends _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__["AggregateRoot"] {
}


/***/ }),

/***/ "./apps/api/src/app/domains/permissions/permissions.module.ts":
/*!********************************************************************!*\
  !*** ./apps/api/src/app/domains/permissions/permissions.module.ts ***!
  \********************************************************************/
/*! exports provided: PermissionsDomainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsDomainModule", function() { return PermissionsDomainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/permissions/permissions.module */ "./apps/api/src/app/models/permissions/permissions.module.ts");
/* harmony import */ var _commands_remove_permission_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commands/remove-permission.command */ "./apps/api/src/app/domains/permissions/commands/remove-permission.command.ts");
/* harmony import */ var _commands_create_permission_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/create-permission.command */ "./apps/api/src/app/domains/permissions/commands/create-permission.command.ts");
/* harmony import */ var _commands_update_permission_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands/update-permission.command */ "./apps/api/src/app/domains/permissions/commands/update-permission.command.ts");
/* harmony import */ var _models_users_users_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/users/users.module */ "./apps/api/src/app/models/users/users.module.ts");








const commandHandlers = [
    _commands_create_permission_command__WEBPACK_IMPORTED_MODULE_5__["CreatePermissionHandler"],
    _commands_remove_permission_command__WEBPACK_IMPORTED_MODULE_4__["RemovePermissionHandler"],
    _commands_update_permission_command__WEBPACK_IMPORTED_MODULE_6__["UpdatePermissionHandler"],
];
let PermissionsDomainModule = class PermissionsDomainModule {
};
PermissionsDomainModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_3__["PermissionsModelModule"], _models_users_users_module__WEBPACK_IMPORTED_MODULE_7__["UsersModelModule"]],
        providers: [...commandHandlers],
    })
], PermissionsDomainModule);



/***/ }),

/***/ "./apps/api/src/app/domains/settings/commands/create-setting.command.ts":
/*!******************************************************************************!*\
  !*** ./apps/api/src/app/domains/settings/commands/create-setting.command.ts ***!
  \******************************************************************************/
/*! exports provided: CreateSetting, CreateSettingHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSetting", function() { return CreateSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSettingHandler", function() { return CreateSettingHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings.aggregate */ "./apps/api/src/app/domains/settings/settings.aggregate.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _events_setting_created_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/setting-created.event */ "./apps/api/src/app/domains/settings/events/setting-created.event.ts");
var _a;






class CreateSetting {
    constructor(data) {
        this.data = data;
    }
}
let CreateSettingHandler = class CreateSettingHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!data.type) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["BadRequestException"]('Type is required!');
            }
            if (!data.settings) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["BadRequestException"]('Settings are required!');
            }
            if (!data.user) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["BadRequestException"]('User is required!');
            }
            if (typeof data.enabled === undefined) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_4__["BadRequestException"]('Enabled is required!');
            }
            const aggregate = new _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__["SettingsAggregate"]();
            const id = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId().toHexString();
            aggregate.apply(new _events_setting_created_event__WEBPACK_IMPORTED_MODULE_5__["SettingCreated"](id, data));
            const setting = this._publisher.mergeObjectContext(aggregate);
            setting.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__["EventPublisher"]) === "function" ? _a : Object)
], CreateSettingHandler.prototype, "_publisher", void 0);
CreateSettingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__["CommandHandler"])(CreateSetting)
], CreateSettingHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/settings/commands/remove-setting.command.ts":
/*!******************************************************************************!*\
  !*** ./apps/api/src/app/domains/settings/commands/remove-setting.command.ts ***!
  \******************************************************************************/
/*! exports provided: RemoveSetting, RemoveSettingHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSetting", function() { return RemoveSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveSettingHandler", function() { return RemoveSettingHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings.aggregate */ "./apps/api/src/app/domains/settings/settings.aggregate.ts");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_setting_removed_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/setting-removed.event */ "./apps/api/src/app/domains/settings/events/setting-removed.event.ts");
var _a;





class RemoveSetting {
    constructor(data) {
        this.data = data;
    }
}
let RemoveSettingHandler = class RemoveSettingHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__["SettingsAggregate"]();
            aggregate.apply(new _events_setting_removed_event__WEBPACK_IMPORTED_MODULE_4__["SettingRemoved"](data));
            const setting = this._publisher.mergeObjectContext(aggregate);
            setting.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"]) === "function" ? _a : Object)
], RemoveSettingHandler.prototype, "_publisher", void 0);
RemoveSettingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandHandler"])(RemoveSetting)
], RemoveSettingHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/settings/commands/update-setting.command.ts":
/*!******************************************************************************!*\
  !*** ./apps/api/src/app/domains/settings/commands/update-setting.command.ts ***!
  \******************************************************************************/
/*! exports provided: UpdateSetting, UpdateSettingHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSetting", function() { return UpdateSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSettingHandler", function() { return UpdateSettingHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings.aggregate */ "./apps/api/src/app/domains/settings/settings.aggregate.ts");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_setting_updated_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/setting-updated.event */ "./apps/api/src/app/domains/settings/events/setting-updated.event.ts");
var _a;





class UpdateSetting {
    constructor(data) {
        this.data = data;
    }
}
let UpdateSettingHandler = class UpdateSettingHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__["SettingsAggregate"]();
            aggregate.apply(new _events_setting_updated_event__WEBPACK_IMPORTED_MODULE_4__["SettingUpdated"](data));
            const setting = this._publisher.mergeObjectContext(aggregate);
            setting.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["EventPublisher"]) === "function" ? _a : Object)
], UpdateSettingHandler.prototype, "_publisher", void 0);
UpdateSettingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandHandler"])(UpdateSetting)
], UpdateSettingHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/settings/events/setting-created.event.ts":
/*!***************************************************************************!*\
  !*** ./apps/api/src/app/domains/settings/events/setting-created.event.ts ***!
  \***************************************************************************/
/*! exports provided: SettingCreated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingCreated", function() { return SettingCreated; });
class SettingCreated {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/settings/events/setting-removed.event.ts":
/*!***************************************************************************!*\
  !*** ./apps/api/src/app/domains/settings/events/setting-removed.event.ts ***!
  \***************************************************************************/
/*! exports provided: SettingRemoved */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRemoved", function() { return SettingRemoved; });
class SettingRemoved {
    constructor(setting) {
        this.setting = setting;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/settings/events/setting-updated.event.ts":
/*!***************************************************************************!*\
  !*** ./apps/api/src/app/domains/settings/events/setting-updated.event.ts ***!
  \***************************************************************************/
/*! exports provided: SettingUpdated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingUpdated", function() { return SettingUpdated; });
class SettingUpdated {
    constructor(setting) {
        this.setting = setting;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/settings/settings.aggregate.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/domains/settings/settings.aggregate.ts ***!
  \*****************************************************************/
/*! exports provided: SettingsAggregate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsAggregate", function() { return SettingsAggregate; });
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__);

class SettingsAggregate extends _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__["AggregateRoot"] {
}


/***/ }),

/***/ "./apps/api/src/app/domains/settings/settings.controller.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/app/domains/settings/settings.controller.ts ***!
  \******************************************************************/
/*! exports provided: SettingsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsController", function() { return SettingsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commands_create_setting_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands/create-setting.command */ "./apps/api/src/app/domains/settings/commands/create-setting.command.ts");
/* harmony import */ var _commands_remove_setting_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commands/remove-setting.command */ "./apps/api/src/app/domains/settings/commands/remove-setting.command.ts");
/* harmony import */ var _commands_update_setting_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/update-setting.command */ "./apps/api/src/app/domains/settings/commands/update-setting.command.ts");
/* harmony import */ var _models_settings_dtos_update_setting_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/settings/dtos/update-setting.dto */ "./apps/api/src/app/models/settings/dtos/update-setting.dto.ts");
/* harmony import */ var _models_settings_dtos_create_setting_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/settings/dtos/create-setting.dto */ "./apps/api/src/app/models/settings/dtos/create-setting.dto.ts");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/interceptors/logging.interceptor */ "./apps/api/src/app/common/interceptors/logging.interceptor.ts");
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/interceptors/transform.interceptor */ "./apps/api/src/app/common/interceptors/transform.interceptor.ts");
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ppm/common/main */ "./libs/common/main/src/index.ts");
var _a, _b, _c, _d;













let SettingsController = class SettingsController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    create(dto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commandBus.execute(new _commands_create_setting_command__WEBPACK_IMPORTED_MODULE_3__["CreateSetting"](dto));
        });
    }
    updates(id, updateSettingPayload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commandBus.execute(new _commands_update_setting_command__WEBPACK_IMPORTED_MODULE_5__["UpdateSetting"](Object.assign({ id }, updateSettingPayload)));
        });
    }
    remove(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commandBus.execute(new _commands_remove_setting_command__WEBPACK_IMPORTED_MODULE_4__["RemoveSetting"]({ id }));
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _models_settings_dtos_create_setting_dto__WEBPACK_IMPORTED_MODULE_7__["CreateSettingPayloadDto"] !== "undefined" && _models_settings_dtos_create_setting_dto__WEBPACK_IMPORTED_MODULE_7__["CreateSettingPayloadDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], SettingsController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__["PrivateRoutesPath"].POST_UPDATE),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_b = typeof _models_settings_dtos_update_setting_dto__WEBPACK_IMPORTED_MODULE_6__["UpdateSettingPayloadDto"] !== "undefined" && _models_settings_dtos_update_setting_dto__WEBPACK_IMPORTED_MODULE_6__["UpdateSettingPayloadDto"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], SettingsController.prototype, "updates", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__["PrivateRoutesPath"].POST_DELETE),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], SettingsController.prototype, "remove", null);
SettingsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__["PrivateRoutesPath"].SETTINGS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__["PrivateRoutesPath"].SETTINGS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_10__["LoggingInterceptor"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_11__["TransformInterceptor"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"]) === "function" ? _d : Object])
], SettingsController);



/***/ }),

/***/ "./apps/api/src/app/domains/settings/settings.module.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/domains/settings/settings.module.ts ***!
  \**************************************************************/
/*! exports provided: SettingsDomainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDomainModule", function() { return SettingsDomainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.controller */ "./apps/api/src/app/domains/settings/settings.controller.ts");
/* harmony import */ var _models_settings_settings_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/settings/settings.module */ "./apps/api/src/app/models/settings/settings.module.ts");
/* harmony import */ var _commands_remove_setting_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/remove-setting.command */ "./apps/api/src/app/domains/settings/commands/remove-setting.command.ts");
/* harmony import */ var _commands_create_setting_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands/create-setting.command */ "./apps/api/src/app/domains/settings/commands/create-setting.command.ts");
/* harmony import */ var _commands_update_setting_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commands/update-setting.command */ "./apps/api/src/app/domains/settings/commands/update-setting.command.ts");








const commandHandlers = [_commands_create_setting_command__WEBPACK_IMPORTED_MODULE_6__["CreateSettingHandler"], _commands_remove_setting_command__WEBPACK_IMPORTED_MODULE_5__["RemoveSettingHandler"], _commands_update_setting_command__WEBPACK_IMPORTED_MODULE_7__["UpdateSettingHandler"]];
let SettingsDomainModule = class SettingsDomainModule {
};
SettingsDomainModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_settings_settings_module__WEBPACK_IMPORTED_MODULE_4__["SettingsModelModule"]],
        controllers: [_settings_controller__WEBPACK_IMPORTED_MODULE_3__["SettingsController"]],
        providers: [...commandHandlers],
    })
], SettingsDomainModule);



/***/ }),

/***/ "./apps/api/src/app/domains/userProfiles/commands/create-user-profile.command.ts":
/*!***************************************************************************************!*\
  !*** ./apps/api/src/app/domains/userProfiles/commands/create-user-profile.command.ts ***!
  \***************************************************************************************/
/*! exports provided: CreateUserProfile, CreateUserProfileHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserProfile", function() { return CreateUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserProfileHandler", function() { return CreateUserProfileHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profiles.aggregate */ "./apps/api/src/app/domains/userProfiles/user-profiles.aggregate.ts");
/* harmony import */ var _events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/user-profile-created.event */ "./apps/api/src/app/domains/userProfiles/events/user-profile-created.event.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/users/users.service */ "./apps/api/src/app/models/users/users.service.ts");
var _a, _b;







class CreateUserProfile {
    constructor(userId, data) {
        this.userId = userId;
        this.data = data;
    }
}
let CreateUserProfileHandler = class CreateUserProfileHandler {
    execute({ userId, data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userFromDB = yield this._usersService.getById(userId);
            if (!userFromDB) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["BadRequestException"](`This user doesn't exist`);
            }
            const aggregate = new _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__["UserProfileAggregate"]();
            aggregate.apply(new _events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_4__["UserProfileCreated"](data, new mongoose__WEBPACK_IMPORTED_MODULE_5__["Types"].ObjectId().toHexString(), userId));
            const userProfile = this._publicher.mergeObjectContext(aggregate);
            userProfile.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventPublisher"]) === "function" ? _a : Object)
], CreateUserProfileHandler.prototype, "_publicher", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] !== "undefined" && _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]) === "function" ? _b : Object)
], CreateUserProfileHandler.prototype, "_usersService", void 0);
CreateUserProfileHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["CommandHandler"])(CreateUserProfile)
], CreateUserProfileHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/userProfiles/commands/delete-user-profile.command.ts":
/*!***************************************************************************************!*\
  !*** ./apps/api/src/app/domains/userProfiles/commands/delete-user-profile.command.ts ***!
  \***************************************************************************************/
/*! exports provided: DeleteUserProfileCommand, DeleteUserProfileHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserProfileCommand", function() { return DeleteUserProfileCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserProfileHandler", function() { return DeleteUserProfileHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profiles.aggregate */ "./apps/api/src/app/domains/userProfiles/user-profiles.aggregate.ts");
/* harmony import */ var _events_user_profile_deleted_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/user-profile-deleted.event */ "./apps/api/src/app/domains/userProfiles/events/user-profile-deleted.event.ts");
var _a;





class DeleteUserProfileCommand {
    constructor(id) {
        this.id = id;
    }
}
let DeleteUserProfileHandler = class DeleteUserProfileHandler {
    execute({ id }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__["UserProfileAggregate"]();
            aggregate.apply(new _events_user_profile_deleted_event__WEBPACK_IMPORTED_MODULE_4__["UserProfileDeleted"](id));
            const userProfile = this._publisher.mergeObjectContext(aggregate);
            userProfile.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventPublisher"]) === "function" ? _a : Object)
], DeleteUserProfileHandler.prototype, "_publisher", void 0);
DeleteUserProfileHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["CommandHandler"])(DeleteUserProfileCommand)
], DeleteUserProfileHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/userProfiles/commands/update-user-profile.command.ts":
/*!***************************************************************************************!*\
  !*** ./apps/api/src/app/domains/userProfiles/commands/update-user-profile.command.ts ***!
  \***************************************************************************************/
/*! exports provided: UpdateUserProfileCommand, UpdateUserProfileHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserProfileCommand", function() { return UpdateUserProfileCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserProfileHandler", function() { return UpdateUserProfileHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-profiles.aggregate */ "./apps/api/src/app/domains/userProfiles/user-profiles.aggregate.ts");
/* harmony import */ var _events_user_profile_updated_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../events/user-profile-updated.event */ "./apps/api/src/app/domains/userProfiles/events/user-profile-updated.event.ts");
var _a;





class UpdateUserProfileCommand {
    constructor(id, payload) {
        this.id = id;
        this.payload = payload;
    }
}
let UpdateUserProfileHandler = class UpdateUserProfileHandler {
    execute({ id, payload }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__["UserProfileAggregate"]();
            aggregate.apply(new _events_user_profile_updated_event__WEBPACK_IMPORTED_MODULE_4__["UserProfileUpdated"](id, payload));
            const userProfile = this._publisher.mergeObjectContext(aggregate);
            userProfile.commit();
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventPublisher"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventPublisher"]) === "function" ? _a : Object)
], UpdateUserProfileHandler.prototype, "_publisher", void 0);
UpdateUserProfileHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["CommandHandler"])(UpdateUserProfileCommand)
], UpdateUserProfileHandler);



/***/ }),

/***/ "./apps/api/src/app/domains/userProfiles/events/user-profile-created.event.ts":
/*!************************************************************************************!*\
  !*** ./apps/api/src/app/domains/userProfiles/events/user-profile-created.event.ts ***!
  \************************************************************************************/
/*! exports provided: UserProfileCreated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileCreated", function() { return UserProfileCreated; });
class UserProfileCreated {
    constructor(userProfile, id, userId) {
        this.userProfile = userProfile;
        this.id = id;
        this.userId = userId;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/userProfiles/events/user-profile-deleted.event.ts":
/*!************************************************************************************!*\
  !*** ./apps/api/src/app/domains/userProfiles/events/user-profile-deleted.event.ts ***!
  \************************************************************************************/
/*! exports provided: UserProfileDeleted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileDeleted", function() { return UserProfileDeleted; });
class UserProfileDeleted {
    constructor(userProfile) {
        this.userProfile = userProfile;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/userProfiles/events/user-profile-updated.event.ts":
/*!************************************************************************************!*\
  !*** ./apps/api/src/app/domains/userProfiles/events/user-profile-updated.event.ts ***!
  \************************************************************************************/
/*! exports provided: UserProfileUpdated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileUpdated", function() { return UserProfileUpdated; });
class UserProfileUpdated {
    constructor(id, userProfile) {
        this.id = id;
        this.userProfile = userProfile;
    }
}


/***/ }),

/***/ "./apps/api/src/app/domains/userProfiles/user-profiles.aggregate.ts":
/*!**************************************************************************!*\
  !*** ./apps/api/src/app/domains/userProfiles/user-profiles.aggregate.ts ***!
  \**************************************************************************/
/*! exports provided: UserProfileAggregate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileAggregate", function() { return UserProfileAggregate; });
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__);

class UserProfileAggregate extends _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__["AggregateRoot"] {
}


/***/ }),

/***/ "./apps/api/src/app/domains/userProfiles/user-profiles.controller.ts":
/*!***************************************************************************!*\
  !*** ./apps/api/src/app/domains/userProfiles/user-profiles.controller.ts ***!
  \***************************************************************************/
/*! exports provided: UserProfilesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesController", function() { return UserProfilesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commands_create_user_profile_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands/create-user-profile.command */ "./apps/api/src/app/domains/userProfiles/commands/create-user-profile.command.ts");
/* harmony import */ var _models_userProfiles_dto_create_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/userProfiles/dto/create-user-profile-payload.dto */ "./apps/api/src/app/models/userProfiles/dto/create-user-profile-payload.dto.ts");
/* harmony import */ var _commands_delete_user_profile_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/delete-user-profile.command */ "./apps/api/src/app/domains/userProfiles/commands/delete-user-profile.command.ts");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/interceptors/logging.interceptor */ "./apps/api/src/app/common/interceptors/logging.interceptor.ts");
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/interceptors/transform.interceptor */ "./apps/api/src/app/common/interceptors/transform.interceptor.ts");
/* harmony import */ var _models_userProfiles_dto_update_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/userProfiles/dto/update-user-profile-payload.dto */ "./apps/api/src/app/models/userProfiles/dto/update-user-profile-payload.dto.ts");
/* harmony import */ var _commands_update_user_profile_command__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./commands/update-user-profile.command */ "./apps/api/src/app/domains/userProfiles/commands/update-user-profile.command.ts");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ppm/common/main */ "./libs/common/main/src/index.ts");
var _a, _b, _c, _d;














let UserProfilesController = class UserProfilesController {
    constructor(_commandBus) {
        this._commandBus = _commandBus;
    }
    create(payload, request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = request.user;
            return this._commandBus.execute(new _commands_create_user_profile_command__WEBPACK_IMPORTED_MODULE_3__["CreateUserProfile"](user._id, payload));
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._commandBus.execute(new _commands_delete_user_profile_command__WEBPACK_IMPORTED_MODULE_5__["DeleteUserProfileCommand"](id));
        });
    }
    update(id, payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._commandBus.execute(new _commands_update_user_profile_command__WEBPACK_IMPORTED_MODULE_11__["UpdateUserProfileCommand"](id, payload));
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _models_userProfiles_dto_create_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_4__["CreateUserProfilePayloadDto"] !== "undefined" && _models_userProfiles_dto_create_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_4__["CreateUserProfilePayloadDto"]) === "function" ? _a : Object, typeof (_b = typeof express__WEBPACK_IMPORTED_MODULE_12__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_12__["Request"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserProfilesController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_13__["PrivateRoutesPath"].POST_DELETE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserProfilesController.prototype, "delete", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_13__["PrivateRoutesPath"].POST_UPDATE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_c = typeof _models_userProfiles_dto_update_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_10__["UpdateUserProfilePayloadDto"] !== "undefined" && _models_userProfiles_dto_update_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_10__["UpdateUserProfilePayloadDto"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserProfilesController.prototype, "update", null);
UserProfilesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_13__["PrivateRoutesPath"].USER_PROFILES),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_6__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_8__["LoggingInterceptor"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_9__["TransformInterceptor"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"]) === "function" ? _d : Object])
], UserProfilesController);



/***/ }),

/***/ "./apps/api/src/app/domains/userProfiles/user-profiles.module.ts":
/*!***********************************************************************!*\
  !*** ./apps/api/src/app/domains/userProfiles/user-profiles.module.ts ***!
  \***********************************************************************/
/*! exports provided: UserProfilesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesModule", function() { return UserProfilesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_users_users_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/users/users.module */ "./apps/api/src/app/models/users/users.module.ts");
/* harmony import */ var _user_profiles_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profiles.controller */ "./apps/api/src/app/domains/userProfiles/user-profiles.controller.ts");
/* harmony import */ var _commands_create_user_profile_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/create-user-profile.command */ "./apps/api/src/app/domains/userProfiles/commands/create-user-profile.command.ts");
/* harmony import */ var _commands_delete_user_profile_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands/delete-user-profile.command */ "./apps/api/src/app/domains/userProfiles/commands/delete-user-profile.command.ts");
/* harmony import */ var _commands_update_user_profile_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commands/update-user-profile.command */ "./apps/api/src/app/domains/userProfiles/commands/update-user-profile.command.ts");








const CommandHandlers = [
    _commands_create_user_profile_command__WEBPACK_IMPORTED_MODULE_5__["CreateUserProfileHandler"],
    _commands_delete_user_profile_command__WEBPACK_IMPORTED_MODULE_6__["DeleteUserProfileHandler"],
    _commands_update_user_profile_command__WEBPACK_IMPORTED_MODULE_7__["UpdateUserProfileHandler"],
];
let UserProfilesModule = class UserProfilesModule {
};
UserProfilesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_users_users_module__WEBPACK_IMPORTED_MODULE_3__["UsersModelModule"]],
        controllers: [_user_profiles_controller__WEBPACK_IMPORTED_MODULE_4__["UserProfilesController"]],
        providers: [...CommandHandlers],
    })
], UserProfilesModule);



/***/ }),

/***/ "./apps/api/src/app/helpers/constants.ts":
/*!***********************************************!*\
  !*** ./apps/api/src/app/helpers/constants.ts ***!
  \***********************************************/
/*! exports provided: ViewModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModels", function() { return ViewModels; });
var ViewModels;
(function (ViewModels) {
    ViewModels["USERS_VIEW"] = "Users";
    ViewModels["PROJECTS_VIEW"] = "Projects";
    ViewModels["ADVERTS_VIEW"] = "Adverts";
    ViewModels["SETTINGS_VIEW"] = "Settings";
    ViewModels["EMAIL_VERIFICATION"] = "EmailVerification";
    ViewModels["FORGOTTEN_PASSWORD"] = "ForgottenPassword";
    ViewModels["CONSENT_REGISTRY"] = "ConsentRegistration";
    ViewModels["MENTORS"] = "Mentors";
    ViewModels["STUDENTS"] = "Students";
    ViewModels["PERMISSIONS_VIEW"] = "Permissions";
    ViewModels["USER_PROFILES"] = "UserProfiles";
})(ViewModels || (ViewModels = {}));


/***/ }),

/***/ "./apps/api/src/app/models/adverts/adverts.module.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/models/adverts/adverts.module.ts ***!
  \***********************************************************/
/*! exports provided: AdvertsModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertsModelModule", function() { return AdvertsModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adverts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adverts.service */ "./apps/api/src/app/models/adverts/adverts.service.ts");
/* harmony import */ var _adverts_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adverts.schema */ "./apps/api/src/app/models/adverts/adverts.schema.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");






let AdvertsModelModule = class AdvertsModelModule {
};
AdvertsModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: _helpers_constants__WEBPACK_IMPORTED_MODULE_5__["ViewModels"].ADVERTS_VIEW, schema: _adverts_schema__WEBPACK_IMPORTED_MODULE_4__["AdvertsSchema"] }])],
        providers: [_adverts_service__WEBPACK_IMPORTED_MODULE_3__["AdvertsModelService"]],
        exports: [_adverts_service__WEBPACK_IMPORTED_MODULE_3__["AdvertsModelService"]]
    })
], AdvertsModelModule);



/***/ }),

/***/ "./apps/api/src/app/models/adverts/adverts.schema.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/models/adverts/adverts.schema.ts ***!
  \***********************************************************/
/*! exports provided: AdvertsSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertsSchema", function() { return AdvertsSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");


const AdvertsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    title: {
        type: String,
        max: 100,
        required: true
    },
    description: {
        type: String
    },
    creator: {
        _id: { type: String, ref: _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["ViewModels"].USERS_VIEW },
        name: String
    },
}, { timestamps: true });


/***/ }),

/***/ "./apps/api/src/app/models/adverts/adverts.service.ts":
/*!************************************************************!*\
  !*** ./apps/api/src/app/models/adverts/adverts.service.ts ***!
  \************************************************************/
/*! exports provided: AdvertsModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertsModelService", function() { return AdvertsModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");
var _a;






let AdvertsModelService = class AdvertsModelService {
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._model.find().exec();
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._model.find({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }).exec();
        });
    }
    create(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._model.findOneAndUpdate({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }, data, {
                upsert: true,
                new: true,
            });
        });
    }
    update(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._model.findOneAndUpdate({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }, data, {
                upsert: true,
                new: true,
            });
        });
    }
    remove({ id }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._model.deleteOne({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) });
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ViewModels"].ADVERTS_VIEW),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object)
], AdvertsModelService.prototype, "_model", void 0);
AdvertsModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AdvertsModelService);



/***/ }),

/***/ "./apps/api/src/app/models/adverts/dtos/create-advert.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/models/adverts/dtos/create-advert.dto.ts ***!
  \*******************************************************************/
/*! exports provided: CreateAdvertPayloadDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdvertPayloadDto", function() { return CreateAdvertPayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);


class CreateAdvertPayloadDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateAdvertPayloadDto.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateAdvertPayloadDto.prototype, "description", void 0);


/***/ }),

/***/ "./apps/api/src/app/models/adverts/dtos/update-advert.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/models/adverts/dtos/update-advert.dto.ts ***!
  \*******************************************************************/
/*! exports provided: UpdateAdvertPayloadDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAdvertPayloadDto", function() { return UpdateAdvertPayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);


class UpdateAdvertPayloadDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateAdvertPayloadDto.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateAdvertPayloadDto.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateAdvertPayloadDto.prototype, "description", void 0);


/***/ }),

/***/ "./apps/api/src/app/models/permissions/permissions.module.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/models/permissions/permissions.module.ts ***!
  \*******************************************************************/
/*! exports provided: PermissionsModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsModelModule", function() { return PermissionsModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissions.service */ "./apps/api/src/app/models/permissions/permissions.service.ts");
/* harmony import */ var _permissions_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions.schema */ "./apps/api/src/app/models/permissions/permissions.schema.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");






let PermissionsModelModule = class PermissionsModelModule {
};
PermissionsModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                { name: _helpers_constants__WEBPACK_IMPORTED_MODULE_5__["ViewModels"].PERMISSIONS_VIEW, schema: _permissions_schema__WEBPACK_IMPORTED_MODULE_4__["PermissionsSchema"] },
            ]),
        ],
        providers: [_permissions_service__WEBPACK_IMPORTED_MODULE_3__["PermissionsModelService"]],
        exports: [_permissions_service__WEBPACK_IMPORTED_MODULE_3__["PermissionsModelService"]],
    })
], PermissionsModelModule);



/***/ }),

/***/ "./apps/api/src/app/models/permissions/permissions.schema.ts":
/*!*******************************************************************!*\
  !*** ./apps/api/src/app/models/permissions/permissions.schema.ts ***!
  \*******************************************************************/
/*! exports provided: PermissionsSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsSchema", function() { return PermissionsSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");


const PermissionsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    user: {
        _id: { type: String, ref: _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["ViewModels"].USERS_VIEW },
        name: String,
    },
    role: {
        type: String,
        max: 100,
        required: true,
    },
    adverts: [
        { _id: { type: String, ref: _helpers_constants__WEBPACK_IMPORTED_MODULE_1__["ViewModels"].ADVERTS_VIEW }, title: String },
    ],
}, { timestamps: true });


/***/ }),

/***/ "./apps/api/src/app/models/permissions/permissions.service.ts":
/*!********************************************************************!*\
  !*** ./apps/api/src/app/models/permissions/permissions.service.ts ***!
  \********************************************************************/
/*! exports provided: PermissionsModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsModelService", function() { return PermissionsModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");
var _a;






let PermissionsModelService = class PermissionsModelService {
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.model.find().exec();
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.model.find({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }).exec();
        });
    }
    getByUserIdAndRole(id, role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.model
                .find({ 'user._id': mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id), role: role })
                .exec();
        });
    }
    create(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.model.findOneAndUpdate({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }, data, {
                upsert: true,
                new: true,
            });
        });
    }
    update(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.model.findOneAndUpdate({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }, data, {
                upsert: true,
                new: true,
            });
        });
    }
    remove(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.model.deleteOne({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) });
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ViewModels"].PERMISSIONS_VIEW),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object)
], PermissionsModelService.prototype, "model", void 0);
PermissionsModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PermissionsModelService);



/***/ }),

/***/ "./apps/api/src/app/models/settings/dtos/create-setting.dto.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/models/settings/dtos/create-setting.dto.ts ***!
  \*********************************************************************/
/*! exports provided: CreateSettingPayloadDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSettingPayloadDto", function() { return CreateSettingPayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);


class CreateSettingPayloadDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateSettingPayloadDto.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CreateSettingPayloadDto.prototype, "settings", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CreateSettingPayloadDto.prototype, "user", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CreateSettingPayloadDto.prototype, "enabled", void 0);


/***/ }),

/***/ "./apps/api/src/app/models/settings/dtos/update-setting.dto.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/models/settings/dtos/update-setting.dto.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateSettingPayloadDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSettingPayloadDto", function() { return UpdateSettingPayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);


class UpdateSettingPayloadDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateSettingPayloadDto.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateSettingPayloadDto.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UpdateSettingPayloadDto.prototype, "settings", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UpdateSettingPayloadDto.prototype, "user", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], UpdateSettingPayloadDto.prototype, "enabled", void 0);


/***/ }),

/***/ "./apps/api/src/app/models/settings/settings.module.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/app/models/settings/settings.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingsModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModelModule", function() { return SettingsModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./apps/api/src/app/models/settings/settings.service.ts");
/* harmony import */ var _settings_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.schema */ "./apps/api/src/app/models/settings/settings.schema.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");






let SettingsModelModule = class SettingsModelModule {
};
SettingsModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: _helpers_constants__WEBPACK_IMPORTED_MODULE_5__["ViewModels"].SETTINGS_VIEW, schema: _settings_schema__WEBPACK_IMPORTED_MODULE_4__["SettingsSchema"] }])],
        providers: [_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsModelService"]],
        exports: [_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsModelService"]]
    })
], SettingsModelModule);



/***/ }),

/***/ "./apps/api/src/app/models/settings/settings.schema.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/app/models/settings/settings.schema.ts ***!
  \*************************************************************/
/*! exports provided: SettingsSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsSchema", function() { return SettingsSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const SettingsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    type: {
        type: String,
        max: 100,
    },
    settings: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.Mixed
    },
    user: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"].Types.Mixed
    },
    enabled: {
        type: Boolean
    }
});


/***/ }),

/***/ "./apps/api/src/app/models/settings/settings.service.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/models/settings/settings.service.ts ***!
  \**************************************************************/
/*! exports provided: SettingsModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModelService", function() { return SettingsModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");
var _a;






let SettingsModelService = class SettingsModelService {
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._model.find().exec();
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._model.find({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }).exec();
        });
    }
    create(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._model.findOneAndUpdate({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }, data, {
                upsert: true,
                new: true,
            });
        });
    }
    update(id, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._model.findOneAndUpdate({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) }, data, {
                upsert: true,
                new: true,
            });
        });
    }
    remove({ id }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._model.deleteOne({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) });
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ViewModels"].SETTINGS_VIEW),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object)
], SettingsModelService.prototype, "_model", void 0);
SettingsModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SettingsModelService);



/***/ }),

/***/ "./apps/api/src/app/models/userProfiles/dto/create-user-profile-payload.dto.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api/src/app/models/userProfiles/dto/create-user-profile-payload.dto.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateUserProfilePayloadDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserProfilePayloadDto", function() { return CreateUserProfilePayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);


class CreateUserProfilePayloadDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateUserProfilePayloadDto.prototype, "firstName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateUserProfilePayloadDto.prototype, "lastName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateUserProfilePayloadDto.prototype, "photo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateUserProfilePayloadDto.prototype, "fieldOfProfession", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])({ isArray: true, type: 'string' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], CreateUserProfilePayloadDto.prototype, "categories", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateUserProfilePayloadDto.prototype, "city", void 0);


/***/ }),

/***/ "./apps/api/src/app/models/userProfiles/dto/update-user-profile-payload.dto.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api/src/app/models/userProfiles/dto/update-user-profile-payload.dto.ts ***!
  \*************************************************************************************/
/*! exports provided: UpdateUserProfilePayloadDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserProfilePayloadDto", function() { return UpdateUserProfilePayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);


class UpdateUserProfilePayloadDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserProfilePayloadDto.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserProfilePayloadDto.prototype, "description", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserProfilePayloadDto.prototype, "firstName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserProfilePayloadDto.prototype, "lastName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserProfilePayloadDto.prototype, "photo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserProfilePayloadDto.prototype, "fieldOfProfession", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserProfilePayloadDto.prototype, "company", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], UpdateUserProfilePayloadDto.prototype, "categories", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserProfilePayloadDto.prototype, "city", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserProfilePayloadDto.prototype, "phone", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserProfilePayloadDto.prototype, "email", void 0);


/***/ }),

/***/ "./apps/api/src/app/models/userProfiles/user-profile.module.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/models/userProfiles/user-profile.module.ts ***!
  \*********************************************************************/
/*! exports provided: UserProfileModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModelModule", function() { return UserProfileModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");
/* harmony import */ var _user_profile_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-profile.schema */ "./apps/api/src/app/models/userProfiles/user-profile.schema.ts");
/* harmony import */ var _user_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile.service */ "./apps/api/src/app/models/userProfiles/user-profile.service.ts");






let UserProfileModelModule = class UserProfileModelModule {
};
UserProfileModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                { name: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__["ViewModels"].USER_PROFILES, schema: _user_profile_schema__WEBPACK_IMPORTED_MODULE_4__["UserProfileSchema"] },
            ]),
        ],
        providers: [_user_profile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileModelService"]],
        exports: [_user_profile_service__WEBPACK_IMPORTED_MODULE_5__["UserProfileModelService"]],
    })
], UserProfileModelModule);



/***/ }),

/***/ "./apps/api/src/app/models/userProfiles/user-profile.schema.ts":
/*!*********************************************************************!*\
  !*** ./apps/api/src/app/models/userProfiles/user-profile.schema.ts ***!
  \*********************************************************************/
/*! exports provided: UserProfileSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileSchema", function() { return UserProfileSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const UserProfileSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    type: String,
    description: String,
    firstName: String,
    lastName: String,
    photo: String,
    fieldOfProfession: String,
    company: String,
    categories: [String],
    city: String,
    phone: String,
    email: String,
});


/***/ }),

/***/ "./apps/api/src/app/models/userProfiles/user-profile.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/api/src/app/models/userProfiles/user-profile.service.ts ***!
  \**********************************************************************/
/*! exports provided: UserProfileModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModelService", function() { return UserProfileModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/constants */ "./apps/api/src/app/helpers/constants.ts");
var _a;





let UserProfileModelService = class UserProfileModelService {
    create(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.model.findOneAndUpdate({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(data.id) }, data.userProfile, { upsert: true });
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.model.deleteOne({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) });
        });
    }
    update(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.model.findOneAndUpdate({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(data.id) }, { $set: data.userProfile });
        });
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.model.find().exec();
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.model.findById({ _id: mongoose__WEBPACK_IMPORTED_MODULE_3__["Types"].ObjectId(id) });
        });
    }
    getByEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.model.find({ email: email }).exec();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__["ViewModels"].USER_PROFILES),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object)
], UserProfileModelService.prototype, "model", void 0);
UserProfileModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserProfileModelService);



/***/ }),

/***/ "./apps/api/src/app/models/users/dto/create-user.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/models/users/dto/create-user.dto.ts ***!
  \**************************************************************/
/*! exports provided: CreateUserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserDto", function() { return CreateUserDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__);
var _a;


class CreateUserDto {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateUserDto.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateUserDto.prototype, "birthDayDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__["ApiProperty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateUserDto.prototype, "password", void 0);


/***/ }),

/***/ "./apps/api/src/app/models/users/dto/settings.dto.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/models/users/dto/settings.dto.ts ***!
  \***********************************************************/
/*! exports provided: SettingsDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsDto", function() { return SettingsDto; });
class SettingsDto {
    constructor(object) {
        object = object || {};
        this.email = object.email;
    }
    ;
}


/***/ }),

/***/ "./apps/api/src/app/models/users/dto/user.dto.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/models/users/dto/user.dto.ts ***!
  \*******************************************************/
/*! exports provided: UserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDto", function() { return UserDto; });
/* harmony import */ var _settings_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.dto */ "./apps/api/src/app/models/users/dto/settings.dto.ts");

class UserDto {
    constructor(object) {
        this.name = object.name;
        this.surname = object.surname;
        this.email = object.email;
        this.phone = object.phone;
        this.birthDayDate = object.birthDayDate;
        this.settings = new _settings_dto__WEBPACK_IMPORTED_MODULE_0__["SettingsDto"](object.settings);
    }
    ;
}


/***/ }),

/***/ "./apps/api/src/app/models/users/user.interface.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/app/models/users/user.interface.ts ***!
  \*********************************************************/
/*! exports provided: UserStatus, UserRoles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatus", function() { return UserStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoles", function() { return UserRoles; });
var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "Active";
    UserStatus["Closed"] = "Closed";
})(UserStatus || (UserStatus = {}));
var UserRoles;
(function (UserRoles) {
    UserRoles["User"] = "user";
    UserRoles["Manager"] = "manager";
    UserRoles["Admin"] = "admin";
    UserRoles["SuperAdmin"] = "superAdmin";
})(UserRoles || (UserRoles = {}));


/***/ }),

/***/ "./apps/api/src/app/models/users/user.schema.ts":
/*!******************************************************!*\
  !*** ./apps/api/src/app/models/users/user.schema.ts ***!
  \******************************************************/
/*! exports provided: UserSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSchema", function() { return UserSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    userName: {
        type: String,
        max: 100,
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    position: {
        type: String
    },
    companyCode: {
        type: String
    },
    registrationDate: { type: Date, default: Date.now },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    status: String,
    birthDayDate: Date,
    role: String,
    roles: [String],
    auth: {
        email: {
            valid: { type: Boolean, default: false }
        },
        facebook: {
            userid: String
        },
        gmail: {
            userid: String
        }
    },
    settings: {}
});


/***/ }),

/***/ "./apps/api/src/app/models/users/users.module.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/models/users/users.module.ts ***!
  \*******************************************************/
/*! exports provided: UsersModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModelModule", function() { return UsersModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.service */ "./apps/api/src/app/models/users/users.service.ts");
/* harmony import */ var _user_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.schema */ "./apps/api/src/app/models/users/user.schema.ts");





let UsersModelModule = class UsersModelModule {
};
UsersModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: 'User', schema: _user_schema__WEBPACK_IMPORTED_MODULE_4__["UserSchema"] }])],
        providers: [_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]],
        exports: [_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]]
    })
], UsersModelModule);



/***/ }),

/***/ "./apps/api/src/app/models/users/users.service.ts":
/*!********************************************************!*\
  !*** ./apps/api/src/app/models/users/users.service.ts ***!
  \********************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.interface */ "./apps/api/src/app/models/users/user.interface.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__);
var _a;






const saltRounds = 10;
let UsersService = class UsersService {
    constructor(model) {
        this.model = model;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.model.find().exec();
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.model.findOne({ _id: mongoose__WEBPACK_IMPORTED_MODULE_1__["Types"].ObjectId(id) }).exec();
        });
    }
    findByEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.model.findOne({ email: email }).exec();
        });
    }
    createNewUser(newUser) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isValidEmail(newUser.email) && newUser.password) {
                const userRegistered = yield this.findByEmail(newUser.email);
                if (!userRegistered) {
                    newUser.password = yield bcryptjs__WEBPACK_IMPORTED_MODULE_2__["hash"](newUser.password, saltRounds);
                    const createdUser = new this.model(newUser);
                    createdUser.roles = [_user_interface__WEBPACK_IMPORTED_MODULE_4__["UserRoles"].User];
                    createdUser.userName = `${createdUser.firstName} ${createdUser.lastName}`;
                    return createdUser.save();
                }
                else if (!userRegistered.auth.email.valid) {
                    return userRegistered;
                }
                else {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('REGISTRATION.USER_ALREADY_REGISTERED', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].FORBIDDEN);
                }
            }
            else {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('REGISTRATION.MISSING_MANDATORY_PARAMETERS', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].FORBIDDEN);
            }
        });
    }
    isValidEmail(email) {
        if (email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        else
            return false;
    }
    setPassword(email, newPassword) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userFromDb = yield this.model.findOne({ email: email });
            if (!userFromDb)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('LOGIN.USER_NOT_FOUND', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].NOT_FOUND);
            userFromDb.password = yield bcryptjs__WEBPACK_IMPORTED_MODULE_2__["hash"](newPassword, saltRounds);
            yield userFromDb.save();
            return true;
        });
    }
    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    updateSettings(settingsDto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userFromDb = yield this.model.findOne({ email: settingsDto.email });
            if (!userFromDb)
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpException"]('COMMON.USER_NOT_FOUND', _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["HttpStatus"].NOT_FOUND);
            userFromDb.settings = userFromDb.settings || {};
            for (const key in settingsDto) {
                // eslint-disable-next-line no-prototype-builtins
                if (settingsDto.hasOwnProperty(key) && key != "email") {
                    userFromDb.settings[key] = settingsDto[key];
                }
            }
            yield userFromDb.save();
            return userFromDb;
        });
    }
};
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__["InjectModel"])('User')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_1__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_1__["Model"]) === "function" ? _a : Object])
], UsersService);



/***/ }),

/***/ "./apps/api/src/app/sagas/adverts.sagas.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/app/sagas/adverts.sagas.ts ***!
  \*************************************************/
/*! exports provided: AdvertsSagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertsSagas", function() { return AdvertsSagas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _domains_adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domains/adverts/events/advert-created.event */ "./apps/api/src/app/domains/adverts/events/advert-created.event.ts");
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/users/users.service */ "./apps/api/src/app/models/users/users.service.ts");
/* harmony import */ var _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/permissions/permissions.service */ "./apps/api/src/app/models/permissions/permissions.service.ts");
/* harmony import */ var _domains_permissions_commands_update_permission_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domains/permissions/commands/update-permission.command */ "./apps/api/src/app/domains/permissions/commands/update-permission.command.ts");
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ppm/common/main */ "./libs/common/main/src/index.ts");
var _a, _b;









let AdvertsSagas = class AdvertsSagas {
    constructor() {
        this.updatePermission = (events$) => {
            return events$.pipe(Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_domains_adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_4__["AdvertCreated"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const user = yield this._userService.getById(event.data.creator._id.toHexString());
                const permissions = yield this._permissionsService.getByUserIdAndRole(user._id.toHexString(), _ppm_common_main__WEBPACK_IMPORTED_MODULE_8__["Roles"].MENTOR);
                if (permissions.length) {
                    let permission = permissions[0];
                    if (!permission.adverts) {
                        permission.adverts = [];
                    }
                    permission.adverts.push({ _id: event.id, title: event.data.title });
                    return new _domains_permissions_commands_update_permission_command__WEBPACK_IMPORTED_MODULE_7__["UpdatePermission"](permission._id.toHexString(), permission);
                }
                return null;
            })));
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] !== "undefined" && _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]) === "function" ? _a : Object)
], AdvertsSagas.prototype, "_userService", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_6__["PermissionsModelService"] !== "undefined" && _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_6__["PermissionsModelService"]) === "function" ? _b : Object)
], AdvertsSagas.prototype, "_permissionsService", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["Saga"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AdvertsSagas.prototype, "updatePermission", void 0);
AdvertsSagas = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AdvertsSagas);



/***/ }),

/***/ "./apps/api/src/app/sagas/sagas.module.ts":
/*!************************************************!*\
  !*** ./apps/api/src/app/sagas/sagas.module.ts ***!
  \************************************************/
/*! exports provided: SagasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SagasModule", function() { return SagasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adverts_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adverts.sagas */ "./apps/api/src/app/sagas/adverts.sagas.ts");
/* harmony import */ var _user_profiles_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profiles.sagas */ "./apps/api/src/app/sagas/user-profiles.sagas.ts");
/* harmony import */ var _models_users_users_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/users/users.module */ "./apps/api/src/app/models/users/users.module.ts");
/* harmony import */ var _models_userProfiles_user_profile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/userProfiles/user-profile.module */ "./apps/api/src/app/models/userProfiles/user-profile.module.ts");
/* harmony import */ var _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/permissions/permissions.module */ "./apps/api/src/app/models/permissions/permissions.module.ts");







let SagasModule = class SagasModule {
};
SagasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_models_users_users_module__WEBPACK_IMPORTED_MODULE_4__["UsersModelModule"], _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_6__["PermissionsModelModule"], _models_userProfiles_user_profile_module__WEBPACK_IMPORTED_MODULE_5__["UserProfileModelModule"]],
        providers: [_adverts_sagas__WEBPACK_IMPORTED_MODULE_2__["AdvertsSagas"], _user_profiles_sagas__WEBPACK_IMPORTED_MODULE_3__["UserProfilesSagas"]],
        exports: [],
    })
], SagasModule);



/***/ }),

/***/ "./apps/api/src/app/sagas/user-profiles.sagas.ts":
/*!*******************************************************!*\
  !*** ./apps/api/src/app/sagas/user-profiles.sagas.ts ***!
  \*******************************************************/
/*! exports provided: UserProfilesSagas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesSagas", function() { return UserProfilesSagas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/users/users.service */ "./apps/api/src/app/models/users/users.service.ts");
/* harmony import */ var _domains_userProfiles_events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domains/userProfiles/events/user-profile-created.event */ "./apps/api/src/app/domains/userProfiles/events/user-profile-created.event.ts");
/* harmony import */ var _domains_permissions_commands_create_permission_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domains/permissions/commands/create-permission.command */ "./apps/api/src/app/domains/permissions/commands/create-permission.command.ts");
var _a;







let UserProfilesSagas = class UserProfilesSagas {
    constructor() {
        this.createUserProfile = (events$) => {
            return events$.pipe(Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_domains_userProfiles_events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_5__["UserProfileCreated"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const user = yield this._userService.getById(event.userId);
                return Promise.all(user.roles.map((role) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (role) {
                        const cmd = new _domains_permissions_commands_create_permission_command__WEBPACK_IMPORTED_MODULE_6__["CreatePermission"]({
                            role,
                            user: { _id: user._id, name: user.userName },
                        });
                        return cmd;
                    }
                    return null;
                })));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatAll"])());
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] !== "undefined" && _models_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]) === "function" ? _a : Object)
], UserProfilesSagas.prototype, "_userService", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["Saga"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UserProfilesSagas.prototype, "createUserProfile", void 0);
UserProfilesSagas = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserProfilesSagas);



/***/ }),

/***/ "./apps/api/src/app/view/adverts/adverts.controller.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/app/view/adverts/adverts.controller.ts ***!
  \*************************************************************/
/*! exports provided: AdvertsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertsController", function() { return AdvertsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_handlers_get_adverts_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queries/handlers/get-adverts.handler */ "./apps/api/src/app/view/adverts/queries/handlers/get-adverts.handler.ts");
/* harmony import */ var _queries_handlers_get_advert_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queries/handlers/get-advert.handler */ "./apps/api/src/app/view/adverts/queries/handlers/get-advert.handler.ts");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/interceptors/transform.interceptor */ "./apps/api/src/app/common/interceptors/transform.interceptor.ts");
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/interceptors/logging.interceptor */ "./apps/api/src/app/common/interceptors/logging.interceptor.ts");
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ppm/common/main */ "./libs/common/main/src/index.ts");
var _a, _b, _c;










let AdvertsController = class AdvertsController {
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.queryBus.execute(new _queries_handlers_get_adverts_handler__WEBPACK_IMPORTED_MODULE_3__["GetAdvertsQuery"]());
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.queryBus.execute(new _queries_handlers_get_advert_handler__WEBPACK_IMPORTED_MODULE_4__["GetAdvertQuery"]({ id }));
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], AdvertsController.prototype, "findAll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__["PrivateRoutesPath"].GET_BY_ID),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AdvertsController.prototype, "getById", null);
AdvertsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__["PrivateRoutesPath"].ADVERTS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__["PrivateRoutesPath"].ADVERTS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_8__["LoggingInterceptor"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_7__["TransformInterceptor"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["QueryBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["QueryBus"]) === "function" ? _c : Object])
], AdvertsController);



/***/ }),

/***/ "./apps/api/src/app/view/adverts/adverts.module.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/app/view/adverts/adverts.module.ts ***!
  \*********************************************************/
/*! exports provided: AdvertsViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertsViewModule", function() { return AdvertsViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers */ "./apps/api/src/app/view/adverts/handlers/index.ts");
/* harmony import */ var _adverts_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adverts.controller */ "./apps/api/src/app/view/adverts/adverts.controller.ts");
/* harmony import */ var _queries_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queries/handlers */ "./apps/api/src/app/view/adverts/queries/handlers/index.ts");
/* harmony import */ var _models_adverts_adverts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/adverts/adverts.module */ "./apps/api/src/app/models/adverts/adverts.module.ts");







let AdvertsViewModule = class AdvertsViewModule {
};
AdvertsViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_adverts_adverts_module__WEBPACK_IMPORTED_MODULE_6__["AdvertsModelModule"]],
        controllers: [_adverts_controller__WEBPACK_IMPORTED_MODULE_4__["AdvertsController"]],
        providers: [
            ..._handlers__WEBPACK_IMPORTED_MODULE_3__["EventHandlers"],
            ..._queries_handlers__WEBPACK_IMPORTED_MODULE_5__["QueryHandlers"],
        ],
    })
], AdvertsViewModule);



/***/ }),

/***/ "./apps/api/src/app/view/adverts/handlers/created-advert.handler.ts":
/*!**************************************************************************!*\
  !*** ./apps/api/src/app/view/adverts/handlers/created-advert.handler.ts ***!
  \**************************************************************************/
/*! exports provided: AdvertCreatedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertCreatedHandler", function() { return AdvertCreatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domains/adverts/events/advert-created.event */ "./apps/api/src/app/domains/adverts/events/advert-created.event.ts");
/* harmony import */ var _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/adverts/adverts.service */ "./apps/api/src/app/models/adverts/adverts.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let AdvertCreatedHandler = class AdvertCreatedHandler {
    handle({ id, data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._advertsViewService.create(id, data);
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__["AdvertsModelService"] !== "undefined" && _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__["AdvertsModelService"]) === "function" ? _a : Object)
], AdvertCreatedHandler.prototype, "_advertsViewService", void 0);
AdvertCreatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_2__["AdvertCreated"])
], AdvertCreatedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/adverts/handlers/index.ts":
/*!*********************************************************!*\
  !*** ./apps/api/src/app/view/adverts/handlers/index.ts ***!
  \*********************************************************/
/*! exports provided: EventHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandlers", function() { return EventHandlers; });
/* harmony import */ var _created_advert_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./created-advert.handler */ "./apps/api/src/app/view/adverts/handlers/created-advert.handler.ts");
/* harmony import */ var _removed_advert_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removed-advert.handler */ "./apps/api/src/app/view/adverts/handlers/removed-advert.handler.ts");
/* harmony import */ var _updated_advert_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updated-advert.handler */ "./apps/api/src/app/view/adverts/handlers/updated-advert.handler.ts");



const EventHandlers = [_created_advert_handler__WEBPACK_IMPORTED_MODULE_0__["AdvertCreatedHandler"], _removed_advert_handler__WEBPACK_IMPORTED_MODULE_1__["AdvertRemovedHandler"], _updated_advert_handler__WEBPACK_IMPORTED_MODULE_2__["AdvertUpdatedHandler"]];


/***/ }),

/***/ "./apps/api/src/app/view/adverts/handlers/removed-advert.handler.ts":
/*!**************************************************************************!*\
  !*** ./apps/api/src/app/view/adverts/handlers/removed-advert.handler.ts ***!
  \**************************************************************************/
/*! exports provided: AdvertRemovedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertRemovedHandler", function() { return AdvertRemovedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_adverts_events_advert_removed_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domains/adverts/events/advert-removed.event */ "./apps/api/src/app/domains/adverts/events/advert-removed.event.ts");
/* harmony import */ var _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/adverts/adverts.service */ "./apps/api/src/app/models/adverts/adverts.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let AdvertRemovedHandler = class AdvertRemovedHandler {
    handle(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._advertsViewService.remove(event.advert);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__["AdvertsModelService"] !== "undefined" && _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__["AdvertsModelService"]) === "function" ? _a : Object)
], AdvertRemovedHandler.prototype, "_advertsViewService", void 0);
AdvertRemovedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_adverts_events_advert_removed_event__WEBPACK_IMPORTED_MODULE_2__["AdvertRemoved"])
], AdvertRemovedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/adverts/handlers/updated-advert.handler.ts":
/*!**************************************************************************!*\
  !*** ./apps/api/src/app/view/adverts/handlers/updated-advert.handler.ts ***!
  \**************************************************************************/
/*! exports provided: AdvertUpdatedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertUpdatedHandler", function() { return AdvertUpdatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_adverts_events_advert_updated_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domains/adverts/events/advert-updated.event */ "./apps/api/src/app/domains/adverts/events/advert-updated.event.ts");
/* harmony import */ var _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/adverts/adverts.service */ "./apps/api/src/app/models/adverts/adverts.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let AdvertUpdatedHandler = class AdvertUpdatedHandler {
    handle(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._advertsViewService.update(event.advert.id, event.advert);
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__["AdvertsModelService"] !== "undefined" && _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__["AdvertsModelService"]) === "function" ? _a : Object)
], AdvertUpdatedHandler.prototype, "_advertsViewService", void 0);
AdvertUpdatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_adverts_events_advert_updated_event__WEBPACK_IMPORTED_MODULE_2__["AdvertUpdated"])
], AdvertUpdatedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/adverts/queries/handlers/get-advert.handler.ts":
/*!******************************************************************************!*\
  !*** ./apps/api/src/app/view/adverts/queries/handlers/get-advert.handler.ts ***!
  \******************************************************************************/
/*! exports provided: GetAdvertQuery, GetAdvertHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAdvertQuery", function() { return GetAdvertQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAdvertHandler", function() { return GetAdvertHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/adverts/adverts.service */ "./apps/api/src/app/models/adverts/adverts.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
var _a;




class GetAdvertQuery {
    constructor(data) {
        this.data = data;
    }
}
let GetAdvertHandler = class GetAdvertHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._advertsViewService.getById(data.id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__["AdvertsModelService"] !== "undefined" && _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__["AdvertsModelService"]) === "function" ? _a : Object)
], GetAdvertHandler.prototype, "_advertsViewService", void 0);
GetAdvertHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetAdvertQuery)
], GetAdvertHandler);



/***/ }),

/***/ "./apps/api/src/app/view/adverts/queries/handlers/get-adverts.handler.ts":
/*!*******************************************************************************!*\
  !*** ./apps/api/src/app/view/adverts/queries/handlers/get-adverts.handler.ts ***!
  \*******************************************************************************/
/*! exports provided: GetAdvertsQuery, GetAdvertsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAdvertsQuery", function() { return GetAdvertsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAdvertsHandler", function() { return GetAdvertsHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/adverts/adverts.service */ "./apps/api/src/app/models/adverts/adverts.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
var _a;




class GetAdvertsQuery {
}
let GetAdvertsHandler = class GetAdvertsHandler {
    execute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._advertsViewService.getAll();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__["AdvertsModelService"] !== "undefined" && _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__["AdvertsModelService"]) === "function" ? _a : Object)
], GetAdvertsHandler.prototype, "_advertsViewService", void 0);
GetAdvertsHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetAdvertsQuery)
], GetAdvertsHandler);



/***/ }),

/***/ "./apps/api/src/app/view/adverts/queries/handlers/index.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/view/adverts/queries/handlers/index.ts ***!
  \*****************************************************************/
/*! exports provided: QueryHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryHandlers", function() { return QueryHandlers; });
/* harmony import */ var _get_adverts_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-adverts.handler */ "./apps/api/src/app/view/adverts/queries/handlers/get-adverts.handler.ts");
/* harmony import */ var _get_advert_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-advert.handler */ "./apps/api/src/app/view/adverts/queries/handlers/get-advert.handler.ts");


const QueryHandlers = [_get_adverts_handler__WEBPACK_IMPORTED_MODULE_0__["GetAdvertsHandler"], _get_advert_handler__WEBPACK_IMPORTED_MODULE_1__["GetAdvertHandler"]];


/***/ }),

/***/ "./apps/api/src/app/view/permissions/handlers/created-permission.handler.ts":
/*!**********************************************************************************!*\
  !*** ./apps/api/src/app/view/permissions/handlers/created-permission.handler.ts ***!
  \**********************************************************************************/
/*! exports provided: PermissionCreatedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionCreatedHandler", function() { return PermissionCreatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_permissions_events_permission_created_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domains/permissions/events/permission-created.event */ "./apps/api/src/app/domains/permissions/events/permission-created.event.ts");
/* harmony import */ var _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/permissions/permissions.service */ "./apps/api/src/app/models/permissions/permissions.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let PermissionCreatedHandler = class PermissionCreatedHandler {
    handle({ id, data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._permissionsViewService.create(id, data);
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__["PermissionsModelService"] !== "undefined" && _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__["PermissionsModelService"]) === "function" ? _a : Object)
], PermissionCreatedHandler.prototype, "_permissionsViewService", void 0);
PermissionCreatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_permissions_events_permission_created_event__WEBPACK_IMPORTED_MODULE_2__["PermissionCreated"])
], PermissionCreatedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/permissions/handlers/index.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/app/view/permissions/handlers/index.ts ***!
  \*************************************************************/
/*! exports provided: EventHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandlers", function() { return EventHandlers; });
/* harmony import */ var _created_permission_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./created-permission.handler */ "./apps/api/src/app/view/permissions/handlers/created-permission.handler.ts");
/* harmony import */ var _removed_permission_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removed-permission.handler */ "./apps/api/src/app/view/permissions/handlers/removed-permission.handler.ts");
/* harmony import */ var _updated_permission_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updated-permission.handler */ "./apps/api/src/app/view/permissions/handlers/updated-permission.handler.ts");



const EventHandlers = [
    _created_permission_handler__WEBPACK_IMPORTED_MODULE_0__["PermissionCreatedHandler"],
    _removed_permission_handler__WEBPACK_IMPORTED_MODULE_1__["PermissionRemovedHandler"],
    _updated_permission_handler__WEBPACK_IMPORTED_MODULE_2__["PermissionUpdatedHandler"],
];


/***/ }),

/***/ "./apps/api/src/app/view/permissions/handlers/removed-permission.handler.ts":
/*!**********************************************************************************!*\
  !*** ./apps/api/src/app/view/permissions/handlers/removed-permission.handler.ts ***!
  \**********************************************************************************/
/*! exports provided: PermissionRemovedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionRemovedHandler", function() { return PermissionRemovedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_permissions_events_permission_removed_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domains/permissions/events/permission-removed.event */ "./apps/api/src/app/domains/permissions/events/permission-removed.event.ts");
/* harmony import */ var _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/permissions/permissions.service */ "./apps/api/src/app/models/permissions/permissions.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let PermissionRemovedHandler = class PermissionRemovedHandler {
    handle({ id }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._permissionsViewService.remove(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__["PermissionsModelService"] !== "undefined" && _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__["PermissionsModelService"]) === "function" ? _a : Object)
], PermissionRemovedHandler.prototype, "_permissionsViewService", void 0);
PermissionRemovedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_permissions_events_permission_removed_event__WEBPACK_IMPORTED_MODULE_2__["PermissionRemoved"])
], PermissionRemovedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/permissions/handlers/updated-permission.handler.ts":
/*!**********************************************************************************!*\
  !*** ./apps/api/src/app/view/permissions/handlers/updated-permission.handler.ts ***!
  \**********************************************************************************/
/*! exports provided: PermissionUpdatedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionUpdatedHandler", function() { return PermissionUpdatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_permissions_events_permission_updated_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domains/permissions/events/permission-updated.event */ "./apps/api/src/app/domains/permissions/events/permission-updated.event.ts");
/* harmony import */ var _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/permissions/permissions.service */ "./apps/api/src/app/models/permissions/permissions.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let PermissionUpdatedHandler = class PermissionUpdatedHandler {
    handle({ id, data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._permissionsViewService.update(id, data);
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__["PermissionsModelService"] !== "undefined" && _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__["PermissionsModelService"]) === "function" ? _a : Object)
], PermissionUpdatedHandler.prototype, "_permissionsViewService", void 0);
PermissionUpdatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_permissions_events_permission_updated_event__WEBPACK_IMPORTED_MODULE_2__["PermissionUpdated"])
], PermissionUpdatedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/permissions/permissions.module.ts":
/*!*****************************************************************!*\
  !*** ./apps/api/src/app/view/permissions/permissions.module.ts ***!
  \*****************************************************************/
/*! exports provided: PermissionsViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsViewModule", function() { return PermissionsViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers */ "./apps/api/src/app/view/permissions/handlers/index.ts");
/* harmony import */ var _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/permissions/permissions.module */ "./apps/api/src/app/models/permissions/permissions.module.ts");





let PermissionsViewModule = class PermissionsViewModule {
};
PermissionsViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_4__["PermissionsModelModule"]],
        providers: [..._handlers__WEBPACK_IMPORTED_MODULE_3__["EventHandlers"]],
    })
], PermissionsViewModule);



/***/ }),

/***/ "./apps/api/src/app/view/settings/handlers/created-setting.handler.ts":
/*!****************************************************************************!*\
  !*** ./apps/api/src/app/view/settings/handlers/created-setting.handler.ts ***!
  \****************************************************************************/
/*! exports provided: SettingCreatedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingCreatedHandler", function() { return SettingCreatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_settings_events_setting_created_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domains/settings/events/setting-created.event */ "./apps/api/src/app/domains/settings/events/setting-created.event.ts");
/* harmony import */ var _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/settings/settings.service */ "./apps/api/src/app/models/settings/settings.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let SettingCreatedHandler = class SettingCreatedHandler {
    handle({ id, data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._settingsViewService.create(id, data);
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsModelService"] !== "undefined" && _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsModelService"]) === "function" ? _a : Object)
], SettingCreatedHandler.prototype, "_settingsViewService", void 0);
SettingCreatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_settings_events_setting_created_event__WEBPACK_IMPORTED_MODULE_2__["SettingCreated"])
], SettingCreatedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/settings/handlers/index.ts":
/*!**********************************************************!*\
  !*** ./apps/api/src/app/view/settings/handlers/index.ts ***!
  \**********************************************************/
/*! exports provided: EventHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandlers", function() { return EventHandlers; });
/* harmony import */ var _created_setting_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./created-setting.handler */ "./apps/api/src/app/view/settings/handlers/created-setting.handler.ts");
/* harmony import */ var _removed_setting_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removed-setting.handler */ "./apps/api/src/app/view/settings/handlers/removed-setting.handler.ts");
/* harmony import */ var _updated_setting_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updated-setting.handler */ "./apps/api/src/app/view/settings/handlers/updated-setting.handler.ts");



const EventHandlers = [_created_setting_handler__WEBPACK_IMPORTED_MODULE_0__["SettingCreatedHandler"], _removed_setting_handler__WEBPACK_IMPORTED_MODULE_1__["SettingRemovedHandler"], _updated_setting_handler__WEBPACK_IMPORTED_MODULE_2__["SettingUpdatedHandler"]];


/***/ }),

/***/ "./apps/api/src/app/view/settings/handlers/removed-setting.handler.ts":
/*!****************************************************************************!*\
  !*** ./apps/api/src/app/view/settings/handlers/removed-setting.handler.ts ***!
  \****************************************************************************/
/*! exports provided: SettingRemovedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingRemovedHandler", function() { return SettingRemovedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_settings_events_setting_removed_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domains/settings/events/setting-removed.event */ "./apps/api/src/app/domains/settings/events/setting-removed.event.ts");
/* harmony import */ var _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/settings/settings.service */ "./apps/api/src/app/models/settings/settings.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let SettingRemovedHandler = class SettingRemovedHandler {
    handle(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._settingsViewService.remove(event.setting);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsModelService"] !== "undefined" && _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsModelService"]) === "function" ? _a : Object)
], SettingRemovedHandler.prototype, "_settingsViewService", void 0);
SettingRemovedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_settings_events_setting_removed_event__WEBPACK_IMPORTED_MODULE_2__["SettingRemoved"])
], SettingRemovedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/settings/handlers/updated-setting.handler.ts":
/*!****************************************************************************!*\
  !*** ./apps/api/src/app/view/settings/handlers/updated-setting.handler.ts ***!
  \****************************************************************************/
/*! exports provided: SettingUpdatedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingUpdatedHandler", function() { return SettingUpdatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_settings_events_setting_updated_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../domains/settings/events/setting-updated.event */ "./apps/api/src/app/domains/settings/events/setting-updated.event.ts");
/* harmony import */ var _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/settings/settings.service */ "./apps/api/src/app/models/settings/settings.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let SettingUpdatedHandler = class SettingUpdatedHandler {
    handle(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._settingsViewService.update(event.setting.id, event.setting);
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsModelService"] !== "undefined" && _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsModelService"]) === "function" ? _a : Object)
], SettingUpdatedHandler.prototype, "_settingsViewService", void 0);
SettingUpdatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_settings_events_setting_updated_event__WEBPACK_IMPORTED_MODULE_2__["SettingUpdated"])
], SettingUpdatedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/settings/queries/handlers/get-setting.handler.ts":
/*!********************************************************************************!*\
  !*** ./apps/api/src/app/view/settings/queries/handlers/get-setting.handler.ts ***!
  \********************************************************************************/
/*! exports provided: GetSettingQuery, GetSettingHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSettingQuery", function() { return GetSettingQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSettingHandler", function() { return GetSettingHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/settings/settings.service */ "./apps/api/src/app/models/settings/settings.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
var _a;




class GetSettingQuery {
    constructor(data) {
        this.data = data;
    }
}
let GetSettingHandler = class GetSettingHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._settingsViewService.getById(data.id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsModelService"] !== "undefined" && _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsModelService"]) === "function" ? _a : Object)
], GetSettingHandler.prototype, "_settingsViewService", void 0);
GetSettingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetSettingQuery)
], GetSettingHandler);



/***/ }),

/***/ "./apps/api/src/app/view/settings/queries/handlers/get-settings.handler.ts":
/*!*********************************************************************************!*\
  !*** ./apps/api/src/app/view/settings/queries/handlers/get-settings.handler.ts ***!
  \*********************************************************************************/
/*! exports provided: GetSettingsQuery, GetSettingsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSettingsQuery", function() { return GetSettingsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSettingsHandler", function() { return GetSettingsHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/settings/settings.service */ "./apps/api/src/app/models/settings/settings.service.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
var _a;




class GetSettingsQuery {
}
let GetSettingsHandler = class GetSettingsHandler {
    execute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._settingsViewService.getAll();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsModelService"] !== "undefined" && _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsModelService"]) === "function" ? _a : Object)
], GetSettingsHandler.prototype, "_settingsViewService", void 0);
GetSettingsHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetSettingsQuery)
], GetSettingsHandler);



/***/ }),

/***/ "./apps/api/src/app/view/settings/queries/handlers/index.ts":
/*!******************************************************************!*\
  !*** ./apps/api/src/app/view/settings/queries/handlers/index.ts ***!
  \******************************************************************/
/*! exports provided: QueryHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryHandlers", function() { return QueryHandlers; });
/* harmony import */ var _get_settings_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-settings.handler */ "./apps/api/src/app/view/settings/queries/handlers/get-settings.handler.ts");
/* harmony import */ var _get_setting_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-setting.handler */ "./apps/api/src/app/view/settings/queries/handlers/get-setting.handler.ts");


const QueryHandlers = [_get_settings_handler__WEBPACK_IMPORTED_MODULE_0__["GetSettingsHandler"], _get_setting_handler__WEBPACK_IMPORTED_MODULE_1__["GetSettingHandler"]];


/***/ }),

/***/ "./apps/api/src/app/view/settings/settings.controller.ts":
/*!***************************************************************!*\
  !*** ./apps/api/src/app/view/settings/settings.controller.ts ***!
  \***************************************************************/
/*! exports provided: SettingsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsController", function() { return SettingsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_handlers_get_settings_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queries/handlers/get-settings.handler */ "./apps/api/src/app/view/settings/queries/handlers/get-settings.handler.ts");
/* harmony import */ var _queries_handlers_get_setting_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queries/handlers/get-setting.handler */ "./apps/api/src/app/view/settings/queries/handlers/get-setting.handler.ts");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/interceptors/logging.interceptor */ "./apps/api/src/app/common/interceptors/logging.interceptor.ts");
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/interceptors/transform.interceptor */ "./apps/api/src/app/common/interceptors/transform.interceptor.ts");
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ppm/common/main */ "./libs/common/main/src/index.ts");
var _a, _b, _c;










let SettingsController = class SettingsController {
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.queryBus.execute(new _queries_handlers_get_settings_handler__WEBPACK_IMPORTED_MODULE_3__["GetSettingsQuery"]());
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.queryBus.execute(new _queries_handlers_get_setting_handler__WEBPACK_IMPORTED_MODULE_4__["GetSettingQuery"]({ id }));
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], SettingsController.prototype, "findAll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__["PrivateRoutesPath"].GET_BY_ID),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], SettingsController.prototype, "getById", null);
SettingsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__["PrivateRoutesPath"].SETTINGS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__["PrivateRoutesPath"].SETTINGS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_7__["LoggingInterceptor"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_8__["TransformInterceptor"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["QueryBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["QueryBus"]) === "function" ? _c : Object])
], SettingsController);



/***/ }),

/***/ "./apps/api/src/app/view/settings/settings.module.ts":
/*!***********************************************************!*\
  !*** ./apps/api/src/app/view/settings/settings.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsViewModule", function() { return SettingsViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers */ "./apps/api/src/app/view/settings/handlers/index.ts");
/* harmony import */ var _settings_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.controller */ "./apps/api/src/app/view/settings/settings.controller.ts");
/* harmony import */ var _queries_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queries/handlers */ "./apps/api/src/app/view/settings/queries/handlers/index.ts");
/* harmony import */ var _models_settings_settings_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/settings/settings.module */ "./apps/api/src/app/models/settings/settings.module.ts");







let SettingsViewModule = class SettingsViewModule {
};
SettingsViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_settings_settings_module__WEBPACK_IMPORTED_MODULE_6__["SettingsModelModule"]],
        controllers: [_settings_controller__WEBPACK_IMPORTED_MODULE_4__["SettingsController"]],
        providers: [
            ..._handlers__WEBPACK_IMPORTED_MODULE_3__["EventHandlers"],
            ..._queries_handlers__WEBPACK_IMPORTED_MODULE_5__["QueryHandlers"],
        ],
    })
], SettingsViewModule);



/***/ }),

/***/ "./apps/api/src/app/view/userProfiles/handlers/created-user-profile.handler.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api/src/app/view/userProfiles/handlers/created-user-profile.handler.ts ***!
  \*************************************************************************************/
/*! exports provided: UserProfileCreatedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileCreatedHandler", function() { return UserProfileCreatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domains_userProfiles_events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../domains/userProfiles/events/user-profile-created.event */ "./apps/api/src/app/domains/userProfiles/events/user-profile-created.event.ts");
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/userProfiles/user-profile.service */ "./apps/api/src/app/models/userProfiles/user-profile.service.ts");
var _a;





let UserProfileCreatedHandler = class UserProfileCreatedHandler {
    handle(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._userProfileModelService.create(event);
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileModelService"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileModelService"]) === "function" ? _a : Object)
], UserProfileCreatedHandler.prototype, "_userProfileModelService", void 0);
UserProfileCreatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_userProfiles_events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_3__["UserProfileCreated"])
], UserProfileCreatedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/userProfiles/handlers/deleted-user-profile.handler.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api/src/app/view/userProfiles/handlers/deleted-user-profile.handler.ts ***!
  \*************************************************************************************/
/*! exports provided: UserProfileDeletedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileDeletedHandler", function() { return UserProfileDeletedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/userProfiles/user-profile.service */ "./apps/api/src/app/models/userProfiles/user-profile.service.ts");
/* harmony import */ var _domains_userProfiles_events_user_profile_deleted_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../domains/userProfiles/events/user-profile-deleted.event */ "./apps/api/src/app/domains/userProfiles/events/user-profile-deleted.event.ts");
var _a;





let UserProfileDeletedHandler = class UserProfileDeletedHandler {
    handle(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._userProfileModelService.delete(event.userProfile);
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileModelService"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileModelService"]) === "function" ? _a : Object)
], UserProfileDeletedHandler.prototype, "_userProfileModelService", void 0);
UserProfileDeletedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_userProfiles_events_user_profile_deleted_event__WEBPACK_IMPORTED_MODULE_4__["UserProfileDeleted"])
], UserProfileDeletedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/userProfiles/handlers/index.ts":
/*!**************************************************************!*\
  !*** ./apps/api/src/app/view/userProfiles/handlers/index.ts ***!
  \**************************************************************/
/*! exports provided: EventHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHandlers", function() { return EventHandlers; });
/* harmony import */ var _created_user_profile_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./created-user-profile.handler */ "./apps/api/src/app/view/userProfiles/handlers/created-user-profile.handler.ts");
/* harmony import */ var _deleted_user_profile_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleted-user-profile.handler */ "./apps/api/src/app/view/userProfiles/handlers/deleted-user-profile.handler.ts");
/* harmony import */ var _updated_user_profile_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updated-user-profile.handler */ "./apps/api/src/app/view/userProfiles/handlers/updated-user-profile.handler.ts");



const EventHandlers = [
    _created_user_profile_handler__WEBPACK_IMPORTED_MODULE_0__["UserProfileCreatedHandler"],
    _deleted_user_profile_handler__WEBPACK_IMPORTED_MODULE_1__["UserProfileDeletedHandler"],
    _updated_user_profile_handler__WEBPACK_IMPORTED_MODULE_2__["UserProfileUpdatedHandler"],
];


/***/ }),

/***/ "./apps/api/src/app/view/userProfiles/handlers/updated-user-profile.handler.ts":
/*!*************************************************************************************!*\
  !*** ./apps/api/src/app/view/userProfiles/handlers/updated-user-profile.handler.ts ***!
  \*************************************************************************************/
/*! exports provided: UserProfileUpdatedHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileUpdatedHandler", function() { return UserProfileUpdatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/userProfiles/user-profile.service */ "./apps/api/src/app/models/userProfiles/user-profile.service.ts");
/* harmony import */ var _domains_userProfiles_events_user_profile_updated_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../domains/userProfiles/events/user-profile-updated.event */ "./apps/api/src/app/domains/userProfiles/events/user-profile-updated.event.ts");
var _a;





let UserProfileUpdatedHandler = class UserProfileUpdatedHandler {
    handle(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._userProfileModelService.update(event);
            return null;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileModelService"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileModelService"]) === "function" ? _a : Object)
], UserProfileUpdatedHandler.prototype, "_userProfileModelService", void 0);
UserProfileUpdatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_userProfiles_events_user_profile_updated_event__WEBPACK_IMPORTED_MODULE_4__["UserProfileUpdated"])
], UserProfileUpdatedHandler);



/***/ }),

/***/ "./apps/api/src/app/view/userProfiles/queries/get-user-profile-by-email.handler.ts":
/*!*****************************************************************************************!*\
  !*** ./apps/api/src/app/view/userProfiles/queries/get-user-profile-by-email.handler.ts ***!
  \*****************************************************************************************/
/*! exports provided: GetUserProfileByEmailQuery, GetUserProfileByEmailHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProfileByEmailQuery", function() { return GetUserProfileByEmailQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProfileByEmailHandler", function() { return GetUserProfileByEmailHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/userProfiles/user-profile.service */ "./apps/api/src/app/models/userProfiles/user-profile.service.ts");
var _a;




class GetUserProfileByEmailQuery {
    constructor(email) {
        this.email = email;
    }
}
let GetUserProfileByEmailHandler = class GetUserProfileByEmailHandler {
    execute({ email }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._userProfileModelService.getByEmail(email);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileModelService"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileModelService"]) === "function" ? _a : Object)
], GetUserProfileByEmailHandler.prototype, "_userProfileModelService", void 0);
GetUserProfileByEmailHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetUserProfileByEmailQuery)
], GetUserProfileByEmailHandler);



/***/ }),

/***/ "./apps/api/src/app/view/userProfiles/queries/get-user-profile-by-id.handler.ts":
/*!**************************************************************************************!*\
  !*** ./apps/api/src/app/view/userProfiles/queries/get-user-profile-by-id.handler.ts ***!
  \**************************************************************************************/
/*! exports provided: GetUserProfileByIdQuery, GetUserProfileByIdHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProfileByIdQuery", function() { return GetUserProfileByIdQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProfileByIdHandler", function() { return GetUserProfileByIdHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/userProfiles/user-profile.service */ "./apps/api/src/app/models/userProfiles/user-profile.service.ts");
var _a;




class GetUserProfileByIdQuery {
    constructor(id) {
        this.id = id;
    }
}
let GetUserProfileByIdHandler = class GetUserProfileByIdHandler {
    execute({ id }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._userProfileModelService.getById(id);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileModelService"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileModelService"]) === "function" ? _a : Object)
], GetUserProfileByIdHandler.prototype, "_userProfileModelService", void 0);
GetUserProfileByIdHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetUserProfileByIdQuery)
], GetUserProfileByIdHandler);



/***/ }),

/***/ "./apps/api/src/app/view/userProfiles/queries/get-user-profiles.handlers.ts":
/*!**********************************************************************************!*\
  !*** ./apps/api/src/app/view/userProfiles/queries/get-user-profiles.handlers.ts ***!
  \**********************************************************************************/
/*! exports provided: GetUserProfilesQuery, GetUserProfilesHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProfilesQuery", function() { return GetUserProfilesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProfilesHandler", function() { return GetUserProfilesHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/userProfiles/user-profile.service */ "./apps/api/src/app/models/userProfiles/user-profile.service.ts");
var _a;




class GetUserProfilesQuery {
}
let GetUserProfilesHandler = class GetUserProfilesHandler {
    execute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._userProfileModelService.getAll();
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileModelService"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileModelService"]) === "function" ? _a : Object)
], GetUserProfilesHandler.prototype, "_userProfileModelService", void 0);
GetUserProfilesHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetUserProfilesQuery)
], GetUserProfilesHandler);



/***/ }),

/***/ "./apps/api/src/app/view/userProfiles/queries/index.ts":
/*!*************************************************************!*\
  !*** ./apps/api/src/app/view/userProfiles/queries/index.ts ***!
  \*************************************************************/
/*! exports provided: QueryHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryHandlers", function() { return QueryHandlers; });
/* harmony import */ var _get_user_profiles_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-user-profiles.handlers */ "./apps/api/src/app/view/userProfiles/queries/get-user-profiles.handlers.ts");
/* harmony import */ var _get_user_profile_by_id_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-user-profile-by-id.handler */ "./apps/api/src/app/view/userProfiles/queries/get-user-profile-by-id.handler.ts");
/* harmony import */ var _get_user_profile_by_email_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-user-profile-by-email.handler */ "./apps/api/src/app/view/userProfiles/queries/get-user-profile-by-email.handler.ts");



const QueryHandlers = [
    _get_user_profiles_handlers__WEBPACK_IMPORTED_MODULE_0__["GetUserProfilesHandler"],
    _get_user_profile_by_id_handler__WEBPACK_IMPORTED_MODULE_1__["GetUserProfileByIdHandler"],
    _get_user_profile_by_email_handler__WEBPACK_IMPORTED_MODULE_2__["GetUserProfileByEmailHandler"],
];


/***/ }),

/***/ "./apps/api/src/app/view/userProfiles/user-profiles.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/api/src/app/view/userProfiles/user-profiles.controller.ts ***!
  \************************************************************************/
/*! exports provided: UserProfilesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilesController", function() { return UserProfilesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/interceptors/logging.interceptor */ "./apps/api/src/app/common/interceptors/logging.interceptor.ts");
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/interceptors/transform.interceptor */ "./apps/api/src/app/common/interceptors/transform.interceptor.ts");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _queries_get_user_profile_by_id_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queries/get-user-profile-by-id.handler */ "./apps/api/src/app/view/userProfiles/queries/get-user-profile-by-id.handler.ts");
/* harmony import */ var _queries_get_user_profile_by_email_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./queries/get-user-profile-by-email.handler */ "./apps/api/src/app/view/userProfiles/queries/get-user-profile-by-email.handler.ts");
/* harmony import */ var _queries_get_user_profiles_handlers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./queries/get-user-profiles.handlers */ "./apps/api/src/app/view/userProfiles/queries/get-user-profiles.handlers.ts");
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ppm/common/main */ "./libs/common/main/src/index.ts");
var _a, _b, _c;











let UserProfilesController = class UserProfilesController {
    constructor(_queryBus) {
        this._queryBus = _queryBus;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._queryBus.execute(new _queries_get_user_profiles_handlers__WEBPACK_IMPORTED_MODULE_9__["GetUserProfilesQuery"]());
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._queryBus.execute(new _queries_get_user_profile_by_id_handler__WEBPACK_IMPORTED_MODULE_7__["GetUserProfileByIdQuery"](id));
        });
    }
    getByEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._queryBus.execute(new _queries_get_user_profile_by_email_handler__WEBPACK_IMPORTED_MODULE_8__["GetUserProfileByEmailQuery"](email));
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], UserProfilesController.prototype, "findAll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_10__["PrivateRoutesPath"].GET_BY_ID),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserProfilesController.prototype, "getById", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/:email/find-by-email'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('email')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserProfilesController.prototype, "getByEmail", null);
UserProfilesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_10__["PrivateRoutesPath"].USER_PROFILES),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_4__["LoggingInterceptor"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_5__["TransformInterceptor"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_6__["QueryBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_6__["QueryBus"]) === "function" ? _c : Object])
], UserProfilesController);



/***/ }),

/***/ "./apps/api/src/app/view/userProfiles/user-profiles.module.ts":
/*!********************************************************************!*\
  !*** ./apps/api/src/app/view/userProfiles/user-profiles.module.ts ***!
  \********************************************************************/
/*! exports provided: UserProfileViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileViewModule", function() { return UserProfileViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers */ "./apps/api/src/app/view/userProfiles/handlers/index.ts");
/* harmony import */ var _models_userProfiles_user_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/userProfiles/user-profile.module */ "./apps/api/src/app/models/userProfiles/user-profile.module.ts");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queries */ "./apps/api/src/app/view/userProfiles/queries/index.ts");
/* harmony import */ var _user_profiles_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profiles.controller */ "./apps/api/src/app/view/userProfiles/user-profiles.controller.ts");







let UserProfileViewModule = class UserProfileViewModule {
};
UserProfileViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_userProfiles_user_profile_module__WEBPACK_IMPORTED_MODULE_4__["UserProfileModelModule"]],
        controllers: [_user_profiles_controller__WEBPACK_IMPORTED_MODULE_6__["UserProfilesController"]],
        providers: [..._handlers__WEBPACK_IMPORTED_MODULE_3__["EventHandlers"], ..._queries__WEBPACK_IMPORTED_MODULE_5__["QueryHandlers"]],
    })
], UserProfileViewModule);



/***/ }),

/***/ "./apps/api/src/app/view/view.module.ts":
/*!**********************************************!*\
  !*** ./apps/api/src/app/view/view.module.ts ***!
  \**********************************************/
/*! exports provided: ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/cqrs */ "@nestjs/cqrs");
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _userProfiles_user_profiles_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userProfiles/user-profiles.module */ "./apps/api/src/app/view/userProfiles/user-profiles.module.ts");
/* harmony import */ var _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adverts/adverts.module */ "./apps/api/src/app/view/adverts/adverts.module.ts");
/* harmony import */ var _permissions_permissions_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permissions/permissions.module */ "./apps/api/src/app/view/permissions/permissions.module.ts");
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/settings.module */ "./apps/api/src/app/view/settings/settings.module.ts");







let ViewModule = class ViewModule {
};
ViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"],
            _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_4__["AdvertsViewModule"],
            _userProfiles_user_profiles_module__WEBPACK_IMPORTED_MODULE_3__["UserProfileViewModule"],
            _settings_settings_module__WEBPACK_IMPORTED_MODULE_6__["SettingsViewModule"],
            _permissions_permissions_module__WEBPACK_IMPORTED_MODULE_5__["PermissionsViewModule"],
        ],
        controllers: [],
        providers: [],
    })
], ViewModule);



/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
/* harmony import */ var _app_common_filters_all_exception_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/common/filters/all-exception.filter */ "./apps/api/src/app/common/filters/all-exception.filter.ts");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-rate-limit */ "express-rate-limit");
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_6__);

__webpack_require__(/*! dotenv */ "dotenv").config();






function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
        app.enableCors();
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
        app.use(bodyParser.json({ limit: '5mb' }));
        app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
        app.useGlobalFilters(new _app_common_filters_all_exception_filter__WEBPACK_IMPORTED_MODULE_4__["AllExceptionsFilter"]());
        /* SECURITY */
        app.use(helmet__WEBPACK_IMPORTED_MODULE_5__());
        app.use(express_rate_limit__WEBPACK_IMPORTED_MODULE_6__({
            windowMs: 15 * 60 * 1000,
            max: 100,
            message: 'Too many requests from this IP, please try again later'
        }));
        const createAccountLimiter = express_rate_limit__WEBPACK_IMPORTED_MODULE_6__({
            windowMs: 60 * 60 * 1000,
            max: 3,
            message: 'Too many accounts created from this IP, please try again after an hour'
        });
        app.use('/api/auth/email/register', createAccountLimiter);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const options = new _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__["DocumentBuilder"]()
            .setTitle('PPR BE')
            .setDescription('PPR BE')
            .setVersion('1.0')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
            .build();
        const document = _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__["SwaggerModule"].createDocument(app, options);
        _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__["SwaggerModule"].setup('api', app, document);
        // const port = process.env.port || process.env.PORT;
        // const host = process.env.host || process.env.HOST;
        function bootstrap() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
                app.enableCors(); // protection
                yield app.listen(process.env.PORT || '80');
            });
        }
    });
}
bootstrap();
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT || 3000);
// }
// bootstrap();
//   await app.listen(process.env.PORT, () => {
//     console.log(
//       'Listening at http://' + process.env.HOST + ':' + process.env.PORT + '/' + globalPrefix
//     );
//   });
// }
// bootstrap();


/***/ }),

/***/ "./libs/common/main/src/index.ts":
/*!***************************************!*\
  !*** ./libs/common/main/src/index.ts ***!
  \***************************************/
/*! exports provided: RouterMenuIcons, PrivateRoutesPath, Roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/common-main */ "./libs/common/main/src/lib/common-main.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterMenuIcons", function() { return _lib_common_main__WEBPACK_IMPORTED_MODULE_0__["RouterMenuIcons"]; });

/* harmony import */ var _lib_routes_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/routes-path */ "./libs/common/main/src/lib/routes-path.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrivateRoutesPath", function() { return _lib_routes_path__WEBPACK_IMPORTED_MODULE_1__["PrivateRoutesPath"]; });

/* harmony import */ var _lib_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/roles */ "./libs/common/main/src/lib/roles.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return _lib_roles__WEBPACK_IMPORTED_MODULE_2__["Roles"]; });






/***/ }),

/***/ "./libs/common/main/src/lib/common-main.ts":
/*!*************************************************!*\
  !*** ./libs/common/main/src/lib/common-main.ts ***!
  \*************************************************/
/*! exports provided: RouterMenuIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterMenuIcons", function() { return RouterMenuIcons; });
// TODO: Icons using like:
// https://fontawesome.com/icons?d=gallery
// <Icon className={item.icon} />
// <Icon className={RouterMenuIcons.MENTOR} color="primary" />
// <Icon className={RouterMenuIcons.MENTOR} color="secondary" />
// <Icon className={RouterMenuIcons.MENTOR} style={{ color: green[500] }} />
// <Icon className={RouterMenuIcons.MENTOR} fontSize="small" />
// <Icon className={RouterMenuIcons.MENTOR} style={{ fontSize: 30 }} />
var RouterMenuIcons;
(function (RouterMenuIcons) {
    RouterMenuIcons["MENTOR"] = "fas fa-user-tie";
})(RouterMenuIcons || (RouterMenuIcons = {}));


/***/ }),

/***/ "./libs/common/main/src/lib/roles.ts":
/*!*******************************************!*\
  !*** ./libs/common/main/src/lib/roles.ts ***!
  \*******************************************/
/*! exports provided: Roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles["USER"] = "user";
    Roles["MENTOR"] = "mentor";
    Roles["STUDENT"] = "student";
})(Roles || (Roles = {}));


/***/ }),

/***/ "./libs/common/main/src/lib/routes-path.ts":
/*!*************************************************!*\
  !*** ./libs/common/main/src/lib/routes-path.ts ***!
  \*************************************************/
/*! exports provided: PrivateRoutesPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoutesPath", function() { return PrivateRoutesPath; });
var PrivateRoutesPath;
(function (PrivateRoutesPath) {
    PrivateRoutesPath["DASHBOARD"] = "dashboard";
    PrivateRoutesPath["DASHBOARD_MENTOR"] = "/mentor/:id";
    PrivateRoutesPath["MENTOR"] = "mentor";
    PrivateRoutesPath["STUDENT"] = "student";
    PrivateRoutesPath["ADVERTS"] = "adverts";
    PrivateRoutesPath["SETTINGS"] = "settings";
    PrivateRoutesPath["USER_PROFILES"] = "user-profiles";
    PrivateRoutesPath["AUTH"] = "auth";
    PrivateRoutesPath["GET_BY_ID"] = "/:id";
    PrivateRoutesPath["GET_ALL"] = "/all";
    // TODO only for API
    PrivateRoutesPath["POST_CREATE"] = "/create";
    PrivateRoutesPath["POST_UPDATE"] = "/update/:id";
    PrivateRoutesPath["POST_DELETE"] = "/delete/:id";
    PrivateRoutesPath["GET_FIND_BY_ID"] = "/find-by-email";
    PrivateRoutesPath["POST_LOGIN"] = "/login";
    PrivateRoutesPath["POST_REGISTRY"] = "/registry";
    PrivateRoutesPath["POST_VERIFY"] = "/verify/:code";
    PrivateRoutesPath["POST_RESEND_VERIFY"] = "/resend-verification/:email";
    PrivateRoutesPath["POST_FORGOT_PASSWORD"] = "/forgot-password/:email";
    PrivateRoutesPath["POST_RESET_PASSWORD"] = "/reset-password";
})(PrivateRoutesPath || (PrivateRoutesPath = {}));


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/cqrs":
/*!*******************************!*\
  !*** external "@nestjs/cqrs" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/cqrs");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/serve-static":
/*!***************************************!*\
  !*** external "@nestjs/serve-static" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-rate-limit":
/*!*************************************!*\
  !*** external "express-rate-limit" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-rate-limit");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map