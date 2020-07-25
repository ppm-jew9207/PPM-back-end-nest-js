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
/******/ 	return __webpack_require__(__webpack_require__.s = 139);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/cqrs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_common_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _lib_routes_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_routes_path__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _lib_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_roles__WEBPACK_IMPORTED_MODULE_2__["a"]; });






/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModels; });
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
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
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__[/* ViewModels */ "a"].USER_PROFILES),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object)
], UserProfileModelService.prototype, "model", void 0);
UserProfileModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserProfileModelService);



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
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
                    createdUser.roles = [_user_interface__WEBPACK_IMPORTED_MODULE_4__[/* UserRoles */ "a"].User];
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
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
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__[/* ViewModels */ "a"].ADVERTS_VIEW),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object)
], AdvertsModelService.prototype, "_model", void 0);
AdvertsModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AdvertsModelService);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
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
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__[/* ViewModels */ "a"].SETTINGS_VIEW),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object)
], SettingsModelService.prototype, "_model", void 0);
SettingsModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SettingsModelService);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResponseSuccess; });
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
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
    Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_4__[/* ViewModels */ "a"].PERMISSIONS_VIEW),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object)
], PermissionsModelService.prototype, "model", void 0);
PermissionsModelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PermissionsModelService);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggingInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _user_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);





let UsersModelModule = class UsersModelModule {
};
UsersModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: 'User', schema: _user_schema__WEBPACK_IMPORTED_MODULE_4__[/* UserSchema */ "a"] }])],
        providers: [_users_service__WEBPACK_IMPORTED_MODULE_3__[/* UsersService */ "a"]],
        exports: [_users_service__WEBPACK_IMPORTED_MODULE_3__[/* UsersService */ "a"]]
    })
], UsersModelModule);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertCreated; });
class AdvertCreated {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JWTService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
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
/* 20 */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionCreated; });
class PermissionCreated {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileAggregate; });
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__);

class UserProfileAggregate extends _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__["AggregateRoot"] {
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileCreated; });
class UserProfileCreated {
    constructor(userProfile, id, userId) {
        this.userProfile = userProfile;
        this.id = id;
        this.userId = userId;
    }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsAggregate; });
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__);

class AdvertsAggregate extends _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__["AggregateRoot"] {
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertUpdated; });
class AdvertUpdated {
    constructor(advert) {
        this.advert = advert;
    }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _permissions_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);






let PermissionsModelModule = class PermissionsModelModule {
};
PermissionsModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                { name: _helpers_constants__WEBPACK_IMPORTED_MODULE_5__[/* ViewModels */ "a"].PERMISSIONS_VIEW, schema: _permissions_schema__WEBPACK_IMPORTED_MODULE_4__[/* PermissionsSchema */ "a"] },
            ]),
        ],
        providers: [_permissions_service__WEBPACK_IMPORTED_MODULE_3__[/* PermissionsModelService */ "a"]],
        exports: [_permissions_service__WEBPACK_IMPORTED_MODULE_3__[/* PermissionsModelService */ "a"]],
    })
], PermissionsModelModule);



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsAggregate; });
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__);

class PermissionsAggregate extends _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__["AggregateRoot"] {
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CreatePermissionHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _events_permission_created_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21);
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
            const aggregate = new _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__[/* PermissionsAggregate */ "a"]();
            const id = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId().toHexString();
            aggregate.apply(new _events_permission_created_event__WEBPACK_IMPORTED_MODULE_5__[/* PermissionCreated */ "a"](id, data));
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUpdated; });
class PermissionUpdated {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsAggregate; });
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__);

class SettingsAggregate extends _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_0__["AggregateRoot"] {
}


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(122);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_users_dto_user_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(124);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
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
                return { token: accessToken, user: new _models_users_dto_user_dto__WEBPACK_IMPORTED_MODULE_6__[/* UserDto */ "a"](userFromDb) };
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__[/* ViewModels */ "a"].EMAIL_VERIFICATION)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__[/* ViewModels */ "a"].FORGOTTEN_PASSWORD)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_7__["InjectModel"])(_helpers_constants__WEBPACK_IMPORTED_MODULE_8__[/* ViewModels */ "a"].CONSENT_REGISTRY)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _a : Object, typeof (_b = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _b : Object, typeof (_c = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _c : Object, typeof (_d = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _d : Object, typeof (_e = typeof _jwt_service__WEBPACK_IMPORTED_MODULE_4__[/* JWTService */ "a"] !== "undefined" && _jwt_service__WEBPACK_IMPORTED_MODULE_4__[/* JWTService */ "a"]) === "function" ? _e : Object])
], AuthService);



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CreateUserProfileHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
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
            const aggregate = new _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileAggregate */ "a"]();
            aggregate.apply(new _events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_4__[/* UserProfileCreated */ "a"](data, new mongoose__WEBPACK_IMPORTED_MODULE_5__["Types"].ObjectId().toHexString(), userId));
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__[/* UsersService */ "a"] !== "undefined" && _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__[/* UsersService */ "a"]) === "function" ? _b : Object)
], CreateUserProfileHandler.prototype, "_usersService", void 0);
CreateUserProfileHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["CommandHandler"])(CreateUserProfile)
], CreateUserProfileHandler);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteUserProfileCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DeleteUserProfileHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _events_user_profile_deleted_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
var _a;





class DeleteUserProfileCommand {
    constructor(id) {
        this.id = id;
    }
}
let DeleteUserProfileHandler = class DeleteUserProfileHandler {
    execute({ id }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileAggregate */ "a"]();
            aggregate.apply(new _events_user_profile_deleted_event__WEBPACK_IMPORTED_MODULE_4__[/* UserProfileDeleted */ "a"](id));
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileDeleted; });
class UserProfileDeleted {
    constructor(userProfile) {
        this.userProfile = userProfile;
    }
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserProfileCommand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateUserProfileHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _events_user_profile_updated_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
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
            const aggregate = new _user_profiles_aggregate__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileAggregate */ "a"]();
            aggregate.apply(new _events_user_profile_updated_event__WEBPACK_IMPORTED_MODULE_4__[/* UserProfileUpdated */ "a"](id, payload));
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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileUpdated; });
class UserProfileUpdated {
    constructor(id, userProfile) {
        this.id = id;
        this.userProfile = userProfile;
    }
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAdvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CreateAdvertHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _events_advert_created_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
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
            const aggregate = new _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__[/* AdvertsAggregate */ "a"]();
            const id = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId().toHexString();
            aggregate.apply(new _events_advert_created_event__WEBPACK_IMPORTED_MODULE_5__[/* AdvertCreated */ "a"](id, advertData));
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__[/* UsersService */ "a"] !== "undefined" && _models_users_users_service__WEBPACK_IMPORTED_MODULE_6__[/* UsersService */ "a"]) === "function" ? _b : Object)
], CreateAdvertHandler.prototype, "_usersService", void 0);
CreateAdvertHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__["CommandHandler"])(CreateAdvert)
], CreateAdvertHandler);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveAdvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoveAdvertHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_advert_removed_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43);
var _a;





class RemoveAdvert {
    constructor(data) {
        this.data = data;
    }
}
let RemoveAdvertHandler = class RemoveAdvertHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__[/* AdvertsAggregate */ "a"]();
            aggregate.apply(new _events_advert_removed_event__WEBPACK_IMPORTED_MODULE_4__[/* AdvertRemoved */ "a"](data));
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertRemoved; });
class AdvertRemoved {
    constructor(advert) {
        this.advert = advert;
    }
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateAdvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateAdvertHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_advert_updated_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
var _a;





class UpdateAdvert {
    constructor(data) {
        this.data = data;
    }
}
let UpdateAdvertHandler = class UpdateAdvertHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _adverts_aggregate__WEBPACK_IMPORTED_MODULE_1__[/* AdvertsAggregate */ "a"]();
            aggregate.apply(new _events_advert_updated_event__WEBPACK_IMPORTED_MODULE_4__[/* AdvertUpdated */ "a"](data));
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adverts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _adverts_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);






let AdvertsModelModule = class AdvertsModelModule {
};
AdvertsModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: _helpers_constants__WEBPACK_IMPORTED_MODULE_5__[/* ViewModels */ "a"].ADVERTS_VIEW, schema: _adverts_schema__WEBPACK_IMPORTED_MODULE_4__[/* AdvertsSchema */ "a"] }])],
        providers: [_adverts_service__WEBPACK_IMPORTED_MODULE_3__[/* AdvertsModelService */ "a"]],
        exports: [_adverts_service__WEBPACK_IMPORTED_MODULE_3__[/* AdvertsModelService */ "a"]]
    })
], AdvertsModelModule);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionRemoved; });
class PermissionRemoved {
    constructor(id) {
        this.id = id;
    }
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdatePermissionHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_permission_updated_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29);
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
            const aggregate = new _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__[/* PermissionsAggregate */ "a"]();
            aggregate.apply(new _events_permission_updated_event__WEBPACK_IMPORTED_MODULE_4__[/* PermissionUpdated */ "a"](id, data));
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CreateSettingHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _events_setting_created_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
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
            const aggregate = new _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__[/* SettingsAggregate */ "a"]();
            const id = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId().toHexString();
            aggregate.apply(new _events_setting_created_event__WEBPACK_IMPORTED_MODULE_5__[/* SettingCreated */ "a"](id, data));
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingCreated; });
class SettingCreated {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoveSettingHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_setting_removed_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
var _a;





class RemoveSetting {
    constructor(data) {
        this.data = data;
    }
}
let RemoveSettingHandler = class RemoveSettingHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__[/* SettingsAggregate */ "a"]();
            aggregate.apply(new _events_setting_removed_event__WEBPACK_IMPORTED_MODULE_4__[/* SettingRemoved */ "a"](data));
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingRemoved; });
class SettingRemoved {
    constructor(setting) {
        this.setting = setting;
    }
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateSettingHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_setting_updated_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53);
var _a;





class UpdateSetting {
    constructor(data) {
        this.data = data;
    }
}
let UpdateSettingHandler = class UpdateSettingHandler {
    execute({ data }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _settings_aggregate__WEBPACK_IMPORTED_MODULE_1__[/* SettingsAggregate */ "a"]();
            aggregate.apply(new _events_setting_updated_event__WEBPACK_IMPORTED_MODULE_4__[/* SettingUpdated */ "a"](data));
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingUpdated; });
class SettingUpdated {
    constructor(setting) {
        this.setting = setting;
    }
}


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _settings_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);






let SettingsModelModule = class SettingsModelModule {
};
SettingsModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([{ name: _helpers_constants__WEBPACK_IMPORTED_MODULE_5__[/* ViewModels */ "a"].SETTINGS_VIEW, schema: _settings_schema__WEBPACK_IMPORTED_MODULE_4__[/* SettingsSchema */ "a"] }])],
        providers: [_settings_service__WEBPACK_IMPORTED_MODULE_3__[/* SettingsModelService */ "a"]],
        exports: [_settings_service__WEBPACK_IMPORTED_MODULE_3__[/* SettingsModelService */ "a"]]
    })
], SettingsModelModule);



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _user_profile_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99);
/* harmony import */ var _user_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);






let UserProfileModelModule = class UserProfileModelModule {
};
UserProfileModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([
                { name: _helpers_constants__WEBPACK_IMPORTED_MODULE_3__[/* ViewModels */ "a"].USER_PROFILES, schema: _user_profile_schema__WEBPACK_IMPORTED_MODULE_4__[/* UserProfileSchema */ "a"] },
            ]),
        ],
        providers: [_user_profile_service__WEBPACK_IMPORTED_MODULE_5__[/* UserProfileModelService */ "a"]],
        exports: [_user_profile_service__WEBPACK_IMPORTED_MODULE_5__[/* UserProfileModelService */ "a"]],
    })
], UserProfileModelModule);



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetUserProfilesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUserProfilesHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileModelService */ "a"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileModelService */ "a"]) === "function" ? _a : Object)
], GetUserProfilesHandler.prototype, "_userProfileModelService", void 0);
GetUserProfilesHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetUserProfilesQuery)
], GetUserProfilesHandler);



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetUserProfileByIdQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUserProfileByIdHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileModelService */ "a"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileModelService */ "a"]) === "function" ? _a : Object)
], GetUserProfileByIdHandler.prototype, "_userProfileModelService", void 0);
GetUserProfileByIdHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetUserProfileByIdQuery)
], GetUserProfileByIdHandler);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetUserProfileByEmailQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUserProfileByEmailHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileModelService */ "a"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileModelService */ "a"]) === "function" ? _a : Object)
], GetUserProfileByEmailHandler.prototype, "_userProfileModelService", void 0);
GetUserProfileByEmailHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetUserProfileByEmailQuery)
], GetUserProfileByEmailHandler);



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetAdvertsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAdvertsHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__[/* AdvertsModelService */ "a"] !== "undefined" && _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__[/* AdvertsModelService */ "a"]) === "function" ? _a : Object)
], GetAdvertsHandler.prototype, "_advertsViewService", void 0);
GetAdvertsHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetAdvertsQuery)
], GetAdvertsHandler);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetAdvertQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAdvertHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__[/* AdvertsModelService */ "a"] !== "undefined" && _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_2__[/* AdvertsModelService */ "a"]) === "function" ? _a : Object)
], GetAdvertHandler.prototype, "_advertsViewService", void 0);
GetAdvertHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetAdvertQuery)
], GetAdvertHandler);



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetSettingsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetSettingsHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__[/* SettingsModelService */ "a"] !== "undefined" && _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__[/* SettingsModelService */ "a"]) === "function" ? _a : Object)
], GetSettingsHandler.prototype, "_settingsViewService", void 0);
GetSettingsHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetSettingsQuery)
], GetSettingsHandler);



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetSettingQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetSettingHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__[/* SettingsModelService */ "a"] !== "undefined" && _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_2__[/* SettingsModelService */ "a"]) === "function" ? _a : Object)
], GetSettingHandler.prototype, "_settingsViewService", void 0);
GetSettingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["QueryHandler"])(GetSettingQuery)
], GetSettingHandler);



/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserProfilePayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserProfilePayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 65 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateAdvertPayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAdvertPayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateSettingPayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSettingPayloadDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 70 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordDto; });
class ResetPasswordDto {
}


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 74 */
/***/ (function(module, exports) {

module.exports = require("express-rate-limit");

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RouterMenuIcons */
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
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateRoutesPath; });
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
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roles; });
var Roles;
(function (Roles) {
    Roles["USER"] = "user";
    Roles["MENTOR"] = "mentor";
    Roles["STUDENT"] = "student";
})(Roles || (Roles = {}));


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _domains_domains_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80);
/* harmony import */ var _view_view_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(121);
/* harmony import */ var _models_users_users_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _common_guards_roles_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(131);
/* harmony import */ var _sagas_sagas_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(132);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(135);
/* harmony import */ var _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nestjs_serve_static__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(136);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_12__);











 // <- INSERT LINE
 // <- INSERT LINE
const domains = [_domains_domains_module__WEBPACK_IMPORTED_MODULE_4__[/* DomainsModule */ "a"]];
const view = [_view_view_module__WEBPACK_IMPORTED_MODULE_5__[/* ViewModule */ "a"]];
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_serve_static__WEBPACK_IMPORTED_MODULE_11__["ServeStaticModule"].forRoot({
                rootPath: Object(path__WEBPACK_IMPORTED_MODULE_12__["join"])(__dirname, '..', 'ppm'),
                exclude: ['/api*']
            }),
            ...domains,
            ...view,
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_6__["MongooseModule"].forRoot(process.env.MONGO_DB),
            _models_users_users_module__WEBPACK_IMPORTED_MODULE_8__[/* UsersModelModule */ "a"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_7__[/* AuthModule */ "a"],
            _sagas_sagas_module__WEBPACK_IMPORTED_MODULE_10__[/* SagasModule */ "a"]
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__[/* AppController */ "a"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__[/* AppService */ "a"], _common_guards_roles_guard__WEBPACK_IMPORTED_MODULE_9__[/* RolesGuard */ "a"]],
    })
], AppModule);



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__[/* AppService */ "a"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__[/* AppService */ "a"]) === "function" ? _a : Object])
], AppController);



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomainsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _permissions_events_permission_created_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);
/* harmony import */ var _userProfiles_user_profiles_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81);
/* harmony import */ var _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84);
/* harmony import */ var _permissions_permissions_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87);
/* harmony import */ var _adverts_events_advert_updated_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25);
/* harmony import */ var _permissions_events_permission_updated_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29);
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90);











let DomainsModule = class DomainsModule {
};
DomainsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"],
            _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_6__[/* AdvertsDomainModule */ "a"],
            _permissions_permissions_module__WEBPACK_IMPORTED_MODULE_7__[/* PermissionsDomainModule */ "a"],
            _userProfiles_user_profiles_module__WEBPACK_IMPORTED_MODULE_5__[/* UserProfilesModule */ "a"],
            _settings_settings_module__WEBPACK_IMPORTED_MODULE_10__[/* SettingsDomainModule */ "a"],
        ],
        controllers: [],
        providers: [
            _adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_3__[/* AdvertCreated */ "a"],
            _adverts_events_advert_updated_event__WEBPACK_IMPORTED_MODULE_8__[/* AdvertUpdated */ "a"],
            _permissions_events_permission_created_event__WEBPACK_IMPORTED_MODULE_4__[/* PermissionCreated */ "a"],
            _permissions_events_permission_updated_event__WEBPACK_IMPORTED_MODULE_9__[/* PermissionUpdated */ "a"],
        ],
    })
], DomainsModule);



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_users_users_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _user_profiles_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var _commands_create_user_profile_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _commands_delete_user_profile_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
/* harmony import */ var _commands_update_user_profile_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);








const CommandHandlers = [
    _commands_create_user_profile_command__WEBPACK_IMPORTED_MODULE_5__[/* CreateUserProfileHandler */ "b"],
    _commands_delete_user_profile_command__WEBPACK_IMPORTED_MODULE_6__[/* DeleteUserProfileHandler */ "b"],
    _commands_update_user_profile_command__WEBPACK_IMPORTED_MODULE_7__[/* UpdateUserProfileHandler */ "b"],
];
let UserProfilesModule = class UserProfilesModule {
};
UserProfilesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_users_users_module__WEBPACK_IMPORTED_MODULE_3__[/* UsersModelModule */ "a"]],
        controllers: [_user_profiles_controller__WEBPACK_IMPORTED_MODULE_4__[/* UserProfilesController */ "a"]],
        providers: [...CommandHandlers],
    })
], UserProfilesModule);



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoles; });
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
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commands_create_user_profile_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _models_userProfiles_dto_create_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63);
/* harmony import */ var _commands_delete_user_profile_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var _models_userProfiles_dto_update_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64);
/* harmony import */ var _commands_update_user_profile_command__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5);
var _a, _b, _c, _d;














let UserProfilesController = class UserProfilesController {
    constructor(_commandBus) {
        this._commandBus = _commandBus;
    }
    create(payload, request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = request.user;
            return this._commandBus.execute(new _commands_create_user_profile_command__WEBPACK_IMPORTED_MODULE_3__[/* CreateUserProfile */ "a"](user._id, payload));
        });
    }
    delete(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._commandBus.execute(new _commands_delete_user_profile_command__WEBPACK_IMPORTED_MODULE_5__[/* DeleteUserProfileCommand */ "a"](id));
        });
    }
    update(id, payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._commandBus.execute(new _commands_update_user_profile_command__WEBPACK_IMPORTED_MODULE_11__[/* UpdateUserProfileCommand */ "a"](id, payload));
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _models_userProfiles_dto_create_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_4__[/* CreateUserProfilePayloadDto */ "a"] !== "undefined" && _models_userProfiles_dto_create_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_4__[/* CreateUserProfilePayloadDto */ "a"]) === "function" ? _a : Object, typeof (_b = typeof express__WEBPACK_IMPORTED_MODULE_12__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_12__["Request"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserProfilesController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_13__[/* PrivateRoutesPath */ "a"].POST_DELETE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserProfilesController.prototype, "delete", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_13__[/* PrivateRoutesPath */ "a"].POST_UPDATE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_c = typeof _models_userProfiles_dto_update_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_10__[/* UpdateUserProfilePayloadDto */ "a"] !== "undefined" && _models_userProfiles_dto_update_user_profile_payload_dto__WEBPACK_IMPORTED_MODULE_10__[/* UpdateUserProfilePayloadDto */ "a"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserProfilesController.prototype, "update", null);
UserProfilesController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_13__[/* PrivateRoutesPath */ "a"].USER_PROFILES),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_6__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_13__[/* PrivateRoutesPath */ "a"].USER_PROFILES),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_6__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_8__[/* LoggingInterceptor */ "a"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_9__[/* TransformInterceptor */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"]) === "function" ? _d : Object])
], UserProfilesController);



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsDomainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adverts_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85);
/* harmony import */ var _models_adverts_adverts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _commands_remove_advert_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
/* harmony import */ var _commands_create_advert_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _commands_update_advert_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony import */ var _models_users_users_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);









const commandHandlers = [_commands_create_advert_command__WEBPACK_IMPORTED_MODULE_6__[/* CreateAdvertHandler */ "b"], _commands_remove_advert_command__WEBPACK_IMPORTED_MODULE_5__[/* RemoveAdvertHandler */ "b"], _commands_update_advert_command__WEBPACK_IMPORTED_MODULE_7__[/* UpdateAdvertHandler */ "b"]];
let AdvertsDomainModule = class AdvertsDomainModule {
};
AdvertsDomainModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_adverts_adverts_module__WEBPACK_IMPORTED_MODULE_4__[/* AdvertsModelModule */ "a"], _models_users_users_module__WEBPACK_IMPORTED_MODULE_8__[/* UsersModelModule */ "a"]],
        controllers: [_adverts_controller__WEBPACK_IMPORTED_MODULE_3__[/* AdvertsController */ "a"]],
        providers: [...commandHandlers],
    })
], AdvertsDomainModule);



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commands_create_advert_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _commands_remove_advert_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _commands_update_advert_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _models_adverts_dtos_update_advert_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66);
/* harmony import */ var _models_adverts_dtos_create_advert_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5);
var _a, _b, _c, _d;













let AdvertsController = class AdvertsController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    create(dto, request) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = request.user;
            return this.commandBus.execute(new _commands_create_advert_command__WEBPACK_IMPORTED_MODULE_3__[/* CreateAdvert */ "a"](dto, user));
        });
    }
    updates(id, updateAdvertPayload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commandBus.execute(new _commands_update_advert_command__WEBPACK_IMPORTED_MODULE_5__[/* UpdateAdvert */ "a"](Object.assign({ id }, updateAdvertPayload)));
        });
    }
    remove(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commandBus.execute(new _commands_remove_advert_command__WEBPACK_IMPORTED_MODULE_4__[/* RemoveAdvert */ "a"]({ id }));
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _models_adverts_dtos_create_advert_dto__WEBPACK_IMPORTED_MODULE_7__[/* CreateAdvertPayloadDto */ "a"] !== "undefined" && _models_adverts_dtos_create_advert_dto__WEBPACK_IMPORTED_MODULE_7__[/* CreateAdvertPayloadDto */ "a"]) === "function" ? _a : Object, Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], AdvertsController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__[/* PrivateRoutesPath */ "a"].POST_UPDATE),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_b = typeof _models_adverts_dtos_update_advert_dto__WEBPACK_IMPORTED_MODULE_6__[/* UpdateAdvertPayloadDto */ "a"] !== "undefined" && _models_adverts_dtos_update_advert_dto__WEBPACK_IMPORTED_MODULE_6__[/* UpdateAdvertPayloadDto */ "a"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AdvertsController.prototype, "updates", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__[/* PrivateRoutesPath */ "a"].POST_DELETE),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], AdvertsController.prototype, "remove", null);
AdvertsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__[/* PrivateRoutesPath */ "a"].ADVERTS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__[/* PrivateRoutesPath */ "a"].ADVERTS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_10__[/* LoggingInterceptor */ "a"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_11__[/* TransformInterceptor */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"]) === "function" ? _d : Object])
], AdvertsController);



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


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
        _id: { type: String, ref: _helpers_constants__WEBPACK_IMPORTED_MODULE_1__[/* ViewModels */ "a"].USERS_VIEW },
        name: String
    },
}, { timestamps: true });


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsDomainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _commands_remove_permission_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
/* harmony import */ var _commands_create_permission_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28);
/* harmony import */ var _commands_update_permission_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);
/* harmony import */ var _models_users_users_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);








const commandHandlers = [
    _commands_create_permission_command__WEBPACK_IMPORTED_MODULE_5__[/* CreatePermissionHandler */ "b"],
    _commands_remove_permission_command__WEBPACK_IMPORTED_MODULE_4__[/* RemovePermissionHandler */ "a"],
    _commands_update_permission_command__WEBPACK_IMPORTED_MODULE_6__[/* UpdatePermissionHandler */ "b"],
];
let PermissionsDomainModule = class PermissionsDomainModule {
};
PermissionsDomainModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_3__[/* PermissionsModelModule */ "a"], _models_users_users_module__WEBPACK_IMPORTED_MODULE_7__[/* UsersModelModule */ "a"]],
        providers: [...commandHandlers],
    })
], PermissionsDomainModule);



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);


const PermissionsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    user: {
        _id: { type: String, ref: _helpers_constants__WEBPACK_IMPORTED_MODULE_1__[/* ViewModels */ "a"].USERS_VIEW },
        name: String,
    },
    role: {
        type: String,
        max: 100,
        required: true,
    },
    adverts: [
        { _id: { type: String, ref: _helpers_constants__WEBPACK_IMPORTED_MODULE_1__[/* ViewModels */ "a"].ADVERTS_VIEW }, title: String },
    ],
}, { timestamps: true });


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RemovePermission */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovePermissionHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _events_permission_removed_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
var _a;





class RemovePermission {
    constructor(id) {
        this.id = id;
    }
}
let RemovePermissionHandler = class RemovePermissionHandler {
    execute({ id }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const aggregate = new _permissions_aggregate__WEBPACK_IMPORTED_MODULE_1__[/* PermissionsAggregate */ "a"]();
            aggregate.apply(new _events_permission_removed_event__WEBPACK_IMPORTED_MODULE_4__[/* PermissionRemoved */ "a"](id));
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
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsDomainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var _models_settings_settings_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54);
/* harmony import */ var _commands_remove_setting_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony import */ var _commands_create_setting_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48);
/* harmony import */ var _commands_update_setting_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52);








const commandHandlers = [_commands_create_setting_command__WEBPACK_IMPORTED_MODULE_6__[/* CreateSettingHandler */ "b"], _commands_remove_setting_command__WEBPACK_IMPORTED_MODULE_5__[/* RemoveSettingHandler */ "b"], _commands_update_setting_command__WEBPACK_IMPORTED_MODULE_7__[/* UpdateSettingHandler */ "b"]];
let SettingsDomainModule = class SettingsDomainModule {
};
SettingsDomainModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_settings_settings_module__WEBPACK_IMPORTED_MODULE_4__[/* SettingsModelModule */ "a"]],
        controllers: [_settings_controller__WEBPACK_IMPORTED_MODULE_3__[/* SettingsController */ "a"]],
        providers: [...commandHandlers],
    })
], SettingsDomainModule);



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commands_create_setting_command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48);
/* harmony import */ var _commands_remove_setting_command__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50);
/* harmony import */ var _commands_update_setting_command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52);
/* harmony import */ var _models_settings_dtos_update_setting_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68);
/* harmony import */ var _models_settings_dtos_create_setting_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(15);
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16);
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5);
var _a, _b, _c, _d;













let SettingsController = class SettingsController {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    create(dto) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commandBus.execute(new _commands_create_setting_command__WEBPACK_IMPORTED_MODULE_3__[/* CreateSetting */ "a"](dto));
        });
    }
    updates(id, updateSettingPayload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commandBus.execute(new _commands_update_setting_command__WEBPACK_IMPORTED_MODULE_5__[/* UpdateSetting */ "a"](Object.assign({ id }, updateSettingPayload)));
        });
    }
    remove(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.commandBus.execute(new _commands_remove_setting_command__WEBPACK_IMPORTED_MODULE_4__[/* RemoveSetting */ "a"]({ id }));
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _models_settings_dtos_create_setting_dto__WEBPACK_IMPORTED_MODULE_7__[/* CreateSettingPayloadDto */ "a"] !== "undefined" && _models_settings_dtos_create_setting_dto__WEBPACK_IMPORTED_MODULE_7__[/* CreateSettingPayloadDto */ "a"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], SettingsController.prototype, "create", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__[/* PrivateRoutesPath */ "a"].POST_UPDATE),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_b = typeof _models_settings_dtos_update_setting_dto__WEBPACK_IMPORTED_MODULE_6__[/* UpdateSettingPayloadDto */ "a"] !== "undefined" && _models_settings_dtos_update_setting_dto__WEBPACK_IMPORTED_MODULE_6__[/* UpdateSettingPayloadDto */ "a"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], SettingsController.prototype, "updates", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__[/* PrivateRoutesPath */ "a"].POST_DELETE),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], SettingsController.prototype, "remove", null);
SettingsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__[/* PrivateRoutesPath */ "a"].SETTINGS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_12__[/* PrivateRoutesPath */ "a"].SETTINGS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_8__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_10__[/* LoggingInterceptor */ "a"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_11__[/* TransformInterceptor */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CommandBus"]) === "function" ? _d : Object])
], SettingsController);



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _userProfiles_user_profiles_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94);
/* harmony import */ var _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(102);
/* harmony import */ var _permissions_permissions_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(109);
/* harmony import */ var _settings_settings_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(114);







let ViewModule = class ViewModule {
};
ViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"],
            _adverts_adverts_module__WEBPACK_IMPORTED_MODULE_4__[/* AdvertsViewModule */ "a"],
            _userProfiles_user_profiles_module__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileViewModule */ "a"],
            _settings_settings_module__WEBPACK_IMPORTED_MODULE_6__[/* SettingsViewModule */ "a"],
            _permissions_permissions_module__WEBPACK_IMPORTED_MODULE_5__[/* PermissionsViewModule */ "a"],
        ],
        controllers: [],
        providers: [],
    })
], ViewModule);



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95);
/* harmony import */ var _models_userProfiles_user_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(100);
/* harmony import */ var _user_profiles_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(101);







let UserProfileViewModule = class UserProfileViewModule {
};
UserProfileViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_userProfiles_user_profile_module__WEBPACK_IMPORTED_MODULE_4__[/* UserProfileModelModule */ "a"]],
        controllers: [_user_profiles_controller__WEBPACK_IMPORTED_MODULE_6__[/* UserProfilesController */ "a"]],
        providers: [..._handlers__WEBPACK_IMPORTED_MODULE_3__[/* EventHandlers */ "a"], ..._queries__WEBPACK_IMPORTED_MODULE_5__[/* QueryHandlers */ "a"]],
    })
], UserProfileViewModule);



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventHandlers; });
/* harmony import */ var _created_user_profile_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _deleted_user_profile_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);
/* harmony import */ var _updated_user_profile_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);



const EventHandlers = [
    _created_user_profile_handler__WEBPACK_IMPORTED_MODULE_0__[/* UserProfileCreatedHandler */ "a"],
    _deleted_user_profile_handler__WEBPACK_IMPORTED_MODULE_1__[/* UserProfileDeletedHandler */ "a"],
    _updated_user_profile_handler__WEBPACK_IMPORTED_MODULE_2__[/* UserProfileUpdatedHandler */ "a"],
];


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileCreatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domains_userProfiles_events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_4__[/* UserProfileModelService */ "a"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_4__[/* UserProfileModelService */ "a"]) === "function" ? _a : Object)
], UserProfileCreatedHandler.prototype, "_userProfileModelService", void 0);
UserProfileCreatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_userProfiles_events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileCreated */ "a"])
], UserProfileCreatedHandler);



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileDeletedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _domains_userProfiles_events_user_profile_deleted_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileModelService */ "a"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileModelService */ "a"]) === "function" ? _a : Object)
], UserProfileDeletedHandler.prototype, "_userProfileModelService", void 0);
UserProfileDeletedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_userProfiles_events_user_profile_deleted_event__WEBPACK_IMPORTED_MODULE_4__[/* UserProfileDeleted */ "a"])
], UserProfileDeletedHandler);



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileUpdatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _domains_userProfiles_events_user_profile_updated_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileModelService */ "a"] !== "undefined" && _models_userProfiles_user_profile_service__WEBPACK_IMPORTED_MODULE_3__[/* UserProfileModelService */ "a"]) === "function" ? _a : Object)
], UserProfileUpdatedHandler.prototype, "_userProfileModelService", void 0);
UserProfileUpdatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_userProfiles_events_user_profile_updated_event__WEBPACK_IMPORTED_MODULE_4__[/* UserProfileUpdated */ "a"])
], UserProfileUpdatedHandler);



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryHandlers; });
/* harmony import */ var _get_user_profiles_handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _get_user_profile_by_id_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _get_user_profile_by_email_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);



const QueryHandlers = [
    _get_user_profiles_handlers__WEBPACK_IMPORTED_MODULE_0__[/* GetUserProfilesHandler */ "a"],
    _get_user_profile_by_id_handler__WEBPACK_IMPORTED_MODULE_1__[/* GetUserProfileByIdHandler */ "a"],
    _get_user_profile_by_email_handler__WEBPACK_IMPORTED_MODULE_2__[/* GetUserProfileByEmailHandler */ "a"],
];


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilesController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _queries_get_user_profile_by_id_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57);
/* harmony import */ var _queries_get_user_profile_by_email_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58);
/* harmony import */ var _queries_get_user_profiles_handlers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56);
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5);
var _a, _b, _c;











let UserProfilesController = class UserProfilesController {
    constructor(_queryBus) {
        this._queryBus = _queryBus;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._queryBus.execute(new _queries_get_user_profiles_handlers__WEBPACK_IMPORTED_MODULE_9__[/* GetUserProfilesQuery */ "b"]());
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._queryBus.execute(new _queries_get_user_profile_by_id_handler__WEBPACK_IMPORTED_MODULE_7__[/* GetUserProfileByIdQuery */ "b"](id));
        });
    }
    getByEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._queryBus.execute(new _queries_get_user_profile_by_email_handler__WEBPACK_IMPORTED_MODULE_8__[/* GetUserProfileByEmailQuery */ "b"](email));
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
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_10__[/* PrivateRoutesPath */ "a"].GET_BY_ID),
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
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_10__[/* PrivateRoutesPath */ "a"].USER_PROFILES),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_10__[/* PrivateRoutesPath */ "a"].USER_PROFILES),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_2__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_4__[/* LoggingInterceptor */ "a"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_5__[/* TransformInterceptor */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_6__["QueryBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_6__["QueryBus"]) === "function" ? _c : Object])
], UserProfilesController);



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(103);
/* harmony import */ var _adverts_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(107);
/* harmony import */ var _queries_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(108);
/* harmony import */ var _models_adverts_adverts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);







let AdvertsViewModule = class AdvertsViewModule {
};
AdvertsViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_adverts_adverts_module__WEBPACK_IMPORTED_MODULE_6__[/* AdvertsModelModule */ "a"]],
        controllers: [_adverts_controller__WEBPACK_IMPORTED_MODULE_4__[/* AdvertsController */ "a"]],
        providers: [
            ..._handlers__WEBPACK_IMPORTED_MODULE_3__[/* EventHandlers */ "a"],
            ..._queries_handlers__WEBPACK_IMPORTED_MODULE_5__[/* QueryHandlers */ "a"],
        ],
    })
], AdvertsViewModule);



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventHandlers; });
/* harmony import */ var _created_advert_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _removed_advert_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(105);
/* harmony import */ var _updated_advert_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(106);



const EventHandlers = [_created_advert_handler__WEBPACK_IMPORTED_MODULE_0__[/* AdvertCreatedHandler */ "a"], _removed_advert_handler__WEBPACK_IMPORTED_MODULE_1__[/* AdvertRemovedHandler */ "a"], _updated_advert_handler__WEBPACK_IMPORTED_MODULE_2__[/* AdvertUpdatedHandler */ "a"]];


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertCreatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__[/* AdvertsModelService */ "a"] !== "undefined" && _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__[/* AdvertsModelService */ "a"]) === "function" ? _a : Object)
], AdvertCreatedHandler.prototype, "_advertsViewService", void 0);
AdvertCreatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_2__[/* AdvertCreated */ "a"])
], AdvertCreatedHandler);



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertRemovedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_adverts_events_advert_removed_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__[/* AdvertsModelService */ "a"] !== "undefined" && _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__[/* AdvertsModelService */ "a"]) === "function" ? _a : Object)
], AdvertRemovedHandler.prototype, "_advertsViewService", void 0);
AdvertRemovedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_adverts_events_advert_removed_event__WEBPACK_IMPORTED_MODULE_2__[/* AdvertRemoved */ "a"])
], AdvertRemovedHandler);



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertUpdatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_adverts_events_advert_updated_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__[/* AdvertsModelService */ "a"] !== "undefined" && _models_adverts_adverts_service__WEBPACK_IMPORTED_MODULE_3__[/* AdvertsModelService */ "a"]) === "function" ? _a : Object)
], AdvertUpdatedHandler.prototype, "_advertsViewService", void 0);
AdvertUpdatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_adverts_events_advert_updated_event__WEBPACK_IMPORTED_MODULE_2__[/* AdvertUpdated */ "a"])
], AdvertUpdatedHandler);



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_handlers_get_adverts_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _queries_handlers_get_advert_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
var _a, _b, _c;










let AdvertsController = class AdvertsController {
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.queryBus.execute(new _queries_handlers_get_adverts_handler__WEBPACK_IMPORTED_MODULE_3__[/* GetAdvertsQuery */ "b"]());
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.queryBus.execute(new _queries_handlers_get_advert_handler__WEBPACK_IMPORTED_MODULE_4__[/* GetAdvertQuery */ "b"]({ id }));
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
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__[/* PrivateRoutesPath */ "a"].GET_BY_ID),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AdvertsController.prototype, "getById", null);
AdvertsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__[/* PrivateRoutesPath */ "a"].ADVERTS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__[/* PrivateRoutesPath */ "a"].ADVERTS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_8__[/* LoggingInterceptor */ "a"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_7__[/* TransformInterceptor */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["QueryBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["QueryBus"]) === "function" ? _c : Object])
], AdvertsController);



/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryHandlers; });
/* harmony import */ var _get_adverts_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _get_advert_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);


const QueryHandlers = [_get_adverts_handler__WEBPACK_IMPORTED_MODULE_0__[/* GetAdvertsHandler */ "a"], _get_advert_handler__WEBPACK_IMPORTED_MODULE_1__[/* GetAdvertHandler */ "a"]];


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(110);
/* harmony import */ var _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);





let PermissionsViewModule = class PermissionsViewModule {
};
PermissionsViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_4__[/* PermissionsModelModule */ "a"]],
        providers: [..._handlers__WEBPACK_IMPORTED_MODULE_3__[/* EventHandlers */ "a"]],
    })
], PermissionsViewModule);



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventHandlers; });
/* harmony import */ var _created_permission_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _removed_permission_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);
/* harmony import */ var _updated_permission_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);



const EventHandlers = [
    _created_permission_handler__WEBPACK_IMPORTED_MODULE_0__[/* PermissionCreatedHandler */ "a"],
    _removed_permission_handler__WEBPACK_IMPORTED_MODULE_1__[/* PermissionRemovedHandler */ "a"],
    _updated_permission_handler__WEBPACK_IMPORTED_MODULE_2__[/* PermissionUpdatedHandler */ "a"],
];


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionCreatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_permissions_events_permission_created_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__[/* PermissionsModelService */ "a"] !== "undefined" && _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__[/* PermissionsModelService */ "a"]) === "function" ? _a : Object)
], PermissionCreatedHandler.prototype, "_permissionsViewService", void 0);
PermissionCreatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_permissions_events_permission_created_event__WEBPACK_IMPORTED_MODULE_2__[/* PermissionCreated */ "a"])
], PermissionCreatedHandler);



/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionRemovedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_permissions_events_permission_removed_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__[/* PermissionsModelService */ "a"] !== "undefined" && _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__[/* PermissionsModelService */ "a"]) === "function" ? _a : Object)
], PermissionRemovedHandler.prototype, "_permissionsViewService", void 0);
PermissionRemovedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_permissions_events_permission_removed_event__WEBPACK_IMPORTED_MODULE_2__[/* PermissionRemoved */ "a"])
], PermissionRemovedHandler);



/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionUpdatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_permissions_events_permission_updated_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__[/* PermissionsModelService */ "a"] !== "undefined" && _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_3__[/* PermissionsModelService */ "a"]) === "function" ? _a : Object)
], PermissionUpdatedHandler.prototype, "_permissionsViewService", void 0);
PermissionUpdatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_permissions_events_permission_updated_event__WEBPACK_IMPORTED_MODULE_2__[/* PermissionUpdated */ "a"])
], PermissionUpdatedHandler);



/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(115);
/* harmony import */ var _settings_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(119);
/* harmony import */ var _queries_handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(120);
/* harmony import */ var _models_settings_settings_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54);







let SettingsViewModule = class SettingsViewModule {
};
SettingsViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["CqrsModule"], _models_settings_settings_module__WEBPACK_IMPORTED_MODULE_6__[/* SettingsModelModule */ "a"]],
        controllers: [_settings_controller__WEBPACK_IMPORTED_MODULE_4__[/* SettingsController */ "a"]],
        providers: [
            ..._handlers__WEBPACK_IMPORTED_MODULE_3__[/* EventHandlers */ "a"],
            ..._queries_handlers__WEBPACK_IMPORTED_MODULE_5__[/* QueryHandlers */ "a"],
        ],
    })
], SettingsViewModule);



/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventHandlers; });
/* harmony import */ var _created_setting_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony import */ var _removed_setting_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony import */ var _updated_setting_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(118);



const EventHandlers = [_created_setting_handler__WEBPACK_IMPORTED_MODULE_0__[/* SettingCreatedHandler */ "a"], _removed_setting_handler__WEBPACK_IMPORTED_MODULE_1__[/* SettingRemovedHandler */ "a"], _updated_setting_handler__WEBPACK_IMPORTED_MODULE_2__[/* SettingUpdatedHandler */ "a"]];


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingCreatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_settings_events_setting_created_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__[/* SettingsModelService */ "a"] !== "undefined" && _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__[/* SettingsModelService */ "a"]) === "function" ? _a : Object)
], SettingCreatedHandler.prototype, "_settingsViewService", void 0);
SettingCreatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_settings_events_setting_created_event__WEBPACK_IMPORTED_MODULE_2__[/* SettingCreated */ "a"])
], SettingCreatedHandler);



/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingRemovedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_settings_events_setting_removed_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__[/* SettingsModelService */ "a"] !== "undefined" && _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__[/* SettingsModelService */ "a"]) === "function" ? _a : Object)
], SettingRemovedHandler.prototype, "_settingsViewService", void 0);
SettingRemovedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_settings_events_setting_removed_event__WEBPACK_IMPORTED_MODULE_2__[/* SettingRemoved */ "a"])
], SettingRemovedHandler);



/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingUpdatedHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domains_settings_events_setting_updated_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__[/* SettingsModelService */ "a"] !== "undefined" && _models_settings_settings_service__WEBPACK_IMPORTED_MODULE_3__[/* SettingsModelService */ "a"]) === "function" ? _a : Object)
], SettingUpdatedHandler.prototype, "_settingsViewService", void 0);
SettingUpdatedHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_1__["EventsHandler"])(_domains_settings_events_setting_updated_event__WEBPACK_IMPORTED_MODULE_2__[/* SettingUpdated */ "a"])
], SettingUpdatedHandler);



/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _queries_handlers_get_settings_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var _queries_handlers_get_setting_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
var _a, _b, _c;










let SettingsController = class SettingsController {
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    findAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.queryBus.execute(new _queries_handlers_get_settings_handler__WEBPACK_IMPORTED_MODULE_3__[/* GetSettingsQuery */ "b"]());
        });
    }
    getById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.queryBus.execute(new _queries_handlers_get_setting_handler__WEBPACK_IMPORTED_MODULE_4__[/* GetSettingQuery */ "b"]({ id }));
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
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__[/* PrivateRoutesPath */ "a"].GET_BY_ID),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], SettingsController.prototype, "getById", null);
SettingsController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__[/* PrivateRoutesPath */ "a"].SETTINGS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_9__[/* PrivateRoutesPath */ "a"].SETTINGS),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_5__["ApiBearerAuth"])('JWT'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"])('jwt')),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseInterceptors"])(_common_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_7__[/* LoggingInterceptor */ "a"], _common_interceptors_transform_interceptor__WEBPACK_IMPORTED_MODULE_8__[/* TransformInterceptor */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["QueryBus"] !== "undefined" && _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["QueryBus"]) === "function" ? _c : Object])
], SettingsController);



/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryHandlers; });
/* harmony import */ var _get_settings_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _get_setting_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);


const QueryHandlers = [_get_settings_handler__WEBPACK_IMPORTED_MODULE_0__[/* GetSettingsHandler */ "a"], _get_setting_handler__WEBPACK_IMPORTED_MODULE_1__[/* GetSettingHandler */ "a"]];


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _passport_jwt_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(126);
/* harmony import */ var _auth_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(127);
/* harmony import */ var _models_users_user_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _auth_schemas_emailverification_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(128);
/* harmony import */ var _schemas_forgottenpassword_schema__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(129);
/* harmony import */ var _schemas_consentregistry_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(130);
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_13__);












// import { LoggerMiddleware } from '../common/middlewares/logger.middleware';


let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_passport__WEBPACK_IMPORTED_MODULE_13__["PassportModule"],
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_11__["MongooseModule"].forFeature([
                { name: 'User', schema: _models_users_user_schema__WEBPACK_IMPORTED_MODULE_5__[/* UserSchema */ "a"] },
                { name: _helpers_constants__WEBPACK_IMPORTED_MODULE_12__[/* ViewModels */ "a"].EMAIL_VERIFICATION, schema: _auth_schemas_emailverification_schema__WEBPACK_IMPORTED_MODULE_6__[/* EmailVerificationSchema */ "a"] },
                { name: _helpers_constants__WEBPACK_IMPORTED_MODULE_12__[/* ViewModels */ "a"].FORGOTTEN_PASSWORD, schema: _schemas_forgottenpassword_schema__WEBPACK_IMPORTED_MODULE_7__[/* ForgottenPasswordSchema */ "a"] },
                { name: _helpers_constants__WEBPACK_IMPORTED_MODULE_12__[/* ViewModels */ "a"].CONSENT_REGISTRY, schema: _schemas_consentregistry_schema__WEBPACK_IMPORTED_MODULE_8__[/* ConsentRegistrySchema */ "a"] },
            ])
        ],
        controllers: [_auth_controller__WEBPACK_IMPORTED_MODULE_4__[/* AuthController */ "a"]],
        providers: [_auth_service__WEBPACK_IMPORTED_MODULE_2__[/* AuthService */ "a"], _models_users_users_service__WEBPACK_IMPORTED_MODULE_9__[/* UsersService */ "a"], _jwt_service__WEBPACK_IMPORTED_MODULE_10__[/* JWTService */ "a"], _passport_jwt_strategy__WEBPACK_IMPORTED_MODULE_3__[/* JwtStrategy */ "a"]],
    })
], AuthModule);



/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDto; });
/* harmony import */ var _settings_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);

class UserDto {
    constructor(object) {
        this.name = object.name;
        this.surname = object.surname;
        this.email = object.email;
        this.phone = object.phone;
        this.birthDayDate = object.birthDayDate;
        this.settings = new _settings_dto__WEBPACK_IMPORTED_MODULE_0__[/* SettingsDto */ "a"](object.settings);
    }
    ;
}


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsDto; });
class SettingsDto {
    constructor(object) {
        object = object || {};
        this.email = object.email;
    }
    ;
}


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony import */ var passport_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _jwt_service__WEBPACK_IMPORTED_MODULE_3__[/* JWTService */ "a"] !== "undefined" && _jwt_service__WEBPACK_IMPORTED_MODULE_3__[/* JWTService */ "a"]) === "function" ? _a : Object])
], JwtStrategy);



/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _models_users_dto_create_user_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71);
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _dto_reset_password_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _dto_login_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73);
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4);
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
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseSuccess */ "b"]('LOGIN.SUCCESS', response);
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('LOGIN.ERROR', error);
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
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseSuccess */ "b"]('REGISTRATION.USER_REGISTERED_SUCCESSFULLY');
                }
                else {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('REGISTRATION.ERROR.MAIL_NOT_SENT');
                }
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('REGISTRATION.ERROR.GENERIC_ERROR', error);
            }
        });
    }
    verifyEmail(code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const isEmailVerified = yield this.authService.verifyEmail(code);
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseSuccess */ "b"]('LOGIN.EMAIL_VERIFIED', isEmailVerified);
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('LOGIN.ERROR', error);
            }
        });
    }
    sendEmailVerification(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authService.createEmailToken(params.email);
                const isEmailSent = yield this.authService.sendEmailVerification(params.email);
                if (isEmailSent) {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseSuccess */ "b"]('LOGIN.EMAIL_RESENT', null);
                }
                else {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('REGISTRATION.ERROR.MAIL_NOT_SENT');
                }
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('LOGIN.ERROR.SEND_EMAIL', error);
            }
        });
    }
    sendEmailForgotPassword(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const isEmailSent = yield this.authService.sendEmailForgotPassword(params.email);
                if (isEmailSent) {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseSuccess */ "b"]('LOGIN.EMAIL_RESENT', null);
                }
                else {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('REGISTRATION.ERROR.MAIL_NOT_SENT');
                }
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('LOGIN.ERROR.SEND_EMAIL', error);
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
                        return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('RESET_PASSWORD.WRONG_CURRENT_PASSWORD');
                    }
                }
                else if (resetPassword.newPasswordToken) {
                    const forgottenPasswordModel = yield this.authService.getForgottenPasswordModel(resetPassword.newPasswordToken);
                    isNewPasswordChanged = yield this.userService.setPassword(forgottenPasswordModel.email, resetPassword.newPassword);
                    if (isNewPasswordChanged)
                        yield forgottenPasswordModel.remove();
                }
                else {
                    return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('RESET_PASSWORD.CHANGE_PASSWORD_ERROR');
                }
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseSuccess */ "b"]('RESET_PASSWORD.PASSWORD_CHANGED', isNewPasswordChanged);
            }
            catch (error) {
                return new _common_dto_response_dto__WEBPACK_IMPORTED_MODULE_3__[/* ResponseError */ "a"]('RESET_PASSWORD.CHANGE_PASSWORD_ERROR', error);
            }
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__[/* PrivateRoutesPath */ "a"].POST_LOGIN),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _dto_login_dto__WEBPACK_IMPORTED_MODULE_7__[/* LoginDto */ "a"] !== "undefined" && _dto_login_dto__WEBPACK_IMPORTED_MODULE_7__[/* LoginDto */ "a"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthController.prototype, "login", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__[/* PrivateRoutesPath */ "a"].POST_REGISTRY),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _models_users_dto_create_user_dto__WEBPACK_IMPORTED_MODULE_4__[/* CreateUserDto */ "a"] !== "undefined" && _models_users_dto_create_user_dto__WEBPACK_IMPORTED_MODULE_4__[/* CreateUserDto */ "a"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthController.prototype, "register", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__[/* PrivateRoutesPath */ "a"].POST_VERIFY),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('code')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthController.prototype, "verifyEmail", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__[/* PrivateRoutesPath */ "a"].POST_RESEND_VERIFY),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "sendEmailVerification", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__[/* PrivateRoutesPath */ "a"].POST_FORGOT_PASSWORD),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AuthController.prototype, "sendEmailForgotPassword", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__[/* PrivateRoutesPath */ "a"].POST_RESET_PASSWORD),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpCode"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].OK),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_h = typeof _dto_reset_password_dto__WEBPACK_IMPORTED_MODULE_6__[/* ResetPasswordDto */ "a"] !== "undefined" && _dto_reset_password_dto__WEBPACK_IMPORTED_MODULE_6__[/* ResetPasswordDto */ "a"]) === "function" ? _h : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AuthController.prototype, "setNewPassord", null);
AuthController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__[/* PrivateRoutesPath */ "a"].AUTH),
    Object(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_9__["ApiTags"])(_ppm_common_main__WEBPACK_IMPORTED_MODULE_8__[/* PrivateRoutesPath */ "a"].AUTH),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_k = typeof _auth_service__WEBPACK_IMPORTED_MODULE_2__[/* AuthService */ "a"] !== "undefined" && _auth_service__WEBPACK_IMPORTED_MODULE_2__[/* AuthService */ "a"]) === "function" ? _k : Object, typeof (_l = typeof _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__[/* UsersService */ "a"] !== "undefined" && _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__[/* UsersService */ "a"]) === "function" ? _l : Object])
], AuthController);



/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVerificationSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const EmailVerificationSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    email: String,
    emailToken: String,
    timestamp: Date
});


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgottenPasswordSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ForgottenPasswordSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    email: String,
    newPasswordToken: String,
    timestamp: Date
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsentRegistrySchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
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
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SagasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adverts_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(133);
/* harmony import */ var _user_profiles_sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(134);
/* harmony import */ var _models_users_users_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _models_userProfiles_user_profile_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55);
/* harmony import */ var _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26);







let SagasModule = class SagasModule {
};
SagasModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_models_users_users_module__WEBPACK_IMPORTED_MODULE_4__[/* UsersModelModule */ "a"], _models_permissions_permissions_module__WEBPACK_IMPORTED_MODULE_6__[/* PermissionsModelModule */ "a"], _models_userProfiles_user_profile_module__WEBPACK_IMPORTED_MODULE_5__[/* UserProfileModelModule */ "a"]],
        providers: [_adverts_sagas__WEBPACK_IMPORTED_MODULE_2__[/* AdvertsSagas */ "a"], _user_profiles_sagas__WEBPACK_IMPORTED_MODULE_3__[/* UserProfilesSagas */ "a"]],
        exports: [],
    })
], SagasModule);



/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertsSagas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _domains_adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _domains_permissions_commands_update_permission_command__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47);
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var _domains_permissions_commands_create_permission_command__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28);
var _a, _b;










let AdvertsSagas = class AdvertsSagas {
    constructor() {
        this.updatePermission = (events$) => {
            return events$.pipe(Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_domains_adverts_events_advert_created_event__WEBPACK_IMPORTED_MODULE_4__[/* AdvertCreated */ "a"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const user = yield this._userService.getById(event.data.creator._id.toHexString());
                const permissions = yield this._permissionsService.getByUserIdAndRole(user._id.toHexString(), _ppm_common_main__WEBPACK_IMPORTED_MODULE_8__[/* Roles */ "b"].MENTOR);
                if (permissions.length) {
                    let permission = permissions[0];
                    if (!permission.adverts) {
                        permission.adverts = [];
                    }
                    permission.adverts.push({ _id: event.id, title: event.data.title });
                    return new _domains_permissions_commands_update_permission_command__WEBPACK_IMPORTED_MODULE_7__[/* UpdatePermission */ "a"](permission._id.toHexString(), permission);
                }
                else {
                    return new _domains_permissions_commands_create_permission_command__WEBPACK_IMPORTED_MODULE_9__[/* CreatePermission */ "a"]({
                        role: _ppm_common_main__WEBPACK_IMPORTED_MODULE_8__[/* Roles */ "b"].MENTOR,
                        user: { _id: user._id, name: user.userName },
                    });
                }
            })));
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__[/* UsersService */ "a"] !== "undefined" && _models_users_users_service__WEBPACK_IMPORTED_MODULE_5__[/* UsersService */ "a"]) === "function" ? _a : Object)
], AdvertsSagas.prototype, "_userService", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Inject"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_6__[/* PermissionsModelService */ "a"] !== "undefined" && _models_permissions_permissions_service__WEBPACK_IMPORTED_MODULE_6__[/* PermissionsModelService */ "a"]) === "function" ? _b : Object)
], AdvertsSagas.prototype, "_permissionsService", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["Saga"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AdvertsSagas.prototype, "updatePermission", void 0);
AdvertsSagas = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AdvertsSagas);



/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilesSagas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _domains_userProfiles_events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23);
/* harmony import */ var _domains_permissions_commands_create_permission_command__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
var _a;







let UserProfilesSagas = class UserProfilesSagas {
    constructor() {
        this.createUserProfile = (events$) => {
            return events$.pipe(Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_domains_userProfiles_events_user_profile_created_event__WEBPACK_IMPORTED_MODULE_5__[/* UserProfileCreated */ "a"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const user = yield this._userService.getById(event.userId);
                return Promise.all(user.roles.map((role) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (role) {
                        const cmd = new _domains_permissions_commands_create_permission_command__WEBPACK_IMPORTED_MODULE_6__[/* CreatePermission */ "a"]({
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _models_users_users_service__WEBPACK_IMPORTED_MODULE_4__[/* UsersService */ "a"] !== "undefined" && _models_users_users_service__WEBPACK_IMPORTED_MODULE_4__[/* UsersService */ "a"]) === "function" ? _a : Object)
], UserProfilesSagas.prototype, "_userService", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_cqrs__WEBPACK_IMPORTED_MODULE_2__["Saga"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UserProfilesSagas.prototype, "createUserProfile", void 0);
UserProfilesSagas = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserProfilesSagas);



/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/serve-static");

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllExceptionsFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
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
/* 138 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_common_filters_all_exception_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(137);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(138);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74);
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_rate_limit__WEBPACK_IMPORTED_MODULE_6__);
// require('dotenv').config();
// import { NestFactory } from '@nestjs/core';
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// import { AppModule } from './app/app.module';
// import { AllExceptionsFilter } from './app/common/filters/all-exception.filter';
// import * as helmet from 'helmet';
// import * as rateLimit from 'express-rate-limit';
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors();
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const bodyParser = require('body-parser');
//   app.use(bodyParser.json({ limit: '5mb' }));
//   app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
//   app.useGlobalFilters(new AllExceptionsFilter());
//   /* SECURITY */
//   app.use(helmet());
//   app.use(
//     rateLimit({
//       windowMs: 15 * 60 * 1000, // 15 minutes
//       max: 100, // limit each IP to 100 requests per windowMs
//       message: 'Too many requests from this IP, please try again later'
//     })
//   );
//   const createAccountLimiter = rateLimit({
//     windowMs: 60 * 60 * 1000, // 1 hour window
//     max: 3, // start blocking after 3 requests
//     message:
//       'Too many accounts created from this IP, please try again after an hour'
//   });
//   app.use('/api/auth/email/register', createAccountLimiter);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const options = new DocumentBuilder()
//     .setTitle('PPR BE')
//     .setDescription('PPR BE')
//     .setVersion('1.0')
//     .addBearerAuth(
//     { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
//     'JWT',
//     )
//     .build();
//   const document = SwaggerModule.createDocument(app, options);
//   SwaggerModule.setup('api', app, document);
//   // const port = process.env.port || process.env.PORT;
//   // const host = process.env.host || process.env.HOST;
//   async function bootstrap() {
//     const app = await NestFactory.create(AppModule);
//     app.enableCors(); // protection
//     await app.listen(process.env.PORT || '80');
//   }
// }
// bootstrap();
// // async function bootstrap() {
// //   const app = await NestFactory.create(AppModule);
// //   await app.listen(process.env.PORT || 3000);
// // }
// // bootstrap();
// //   await app.listen(process.env.PORT, () => {
// //     console.log(
// //       'Listening at http://' + process.env.HOST + ':' + process.env.PORT + '/' + globalPrefix
// //     );
// //   });
// // }
// // bootstrap();






function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_2__[/* AppModule */ "a"]);
        app.enableCors();
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        app.useGlobalFilters(new _app_common_filters_all_exception_filter__WEBPACK_IMPORTED_MODULE_4__[/* AllExceptionsFilter */ "a"]());
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
        app.use('/api/auth/register', createAccountLimiter);
        const options = new _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["DocumentBuilder"]()
            .setTitle('PPM BE')
            .setDescription('PPM BE')
            .setVersion('1.0')
            .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
            .build();
        const document = _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["SwaggerModule"].createDocument(app, options);
        _nestjs_swagger__WEBPACK_IMPORTED_MODULE_3__["SwaggerModule"].setup('api', app, document);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map