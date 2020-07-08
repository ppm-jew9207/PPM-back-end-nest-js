(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/common/main/src/index.ts":
/*!***************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/common/main/src/index.ts ***!
  \***************************************************************************************/
/*! exports provided: RouterMenuIcons, PrivateRoutesPath, Roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/common-main */ "../../../libs/common/main/src/lib/common-main.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterMenuIcons", function() { return _lib_common_main__WEBPACK_IMPORTED_MODULE_0__["RouterMenuIcons"]; });

/* harmony import */ var _lib_routes_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/routes-path */ "../../../libs/common/main/src/lib/routes-path.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrivateRoutesPath", function() { return _lib_routes_path__WEBPACK_IMPORTED_MODULE_1__["PrivateRoutesPath"]; });

/* harmony import */ var _lib_roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/roles */ "../../../libs/common/main/src/lib/roles.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return _lib_roles__WEBPACK_IMPORTED_MODULE_2__["Roles"]; });





/***/ }),

/***/ "../../../libs/common/main/src/lib/common-main.ts":
/*!*************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/common/main/src/lib/common-main.ts ***!
  \*************************************************************************************************/
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
let RouterMenuIcons;

(function (RouterMenuIcons) {
  RouterMenuIcons["MENTOR"] = "fas fa-user-tie";
})(RouterMenuIcons || (RouterMenuIcons = {}));

/***/ }),

/***/ "../../../libs/common/main/src/lib/roles.ts":
/*!*******************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/common/main/src/lib/roles.ts ***!
  \*******************************************************************************************/
/*! exports provided: Roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
let Roles;

(function (Roles) {
  Roles["USER"] = "user";
  Roles["MENTOR"] = "mentor";
  Roles["STUDENT"] = "student";
})(Roles || (Roles = {}));

/***/ }),

/***/ "../../../libs/common/main/src/lib/routes-path.ts":
/*!*************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/common/main/src/lib/routes-path.ts ***!
  \*************************************************************************************************/
/*! exports provided: PrivateRoutesPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateRoutesPath", function() { return PrivateRoutesPath; });
let PrivateRoutesPath;

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

/***/ "../../../libs/features/dashboard/mentor/src/index.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/features/dashboard/mentor/src/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FeaturesDashboardMentor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_features_dashboard_mentor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/features-dashboard-mentor */ "../../../libs/features/dashboard/mentor/src/lib/features-dashboard-mentor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesDashboardMentor", function() { return _lib_features_dashboard_mentor__WEBPACK_IMPORTED_MODULE_0__["FeaturesDashboardMentor"]; });



/***/ }),

/***/ "../../../libs/features/dashboard/mentor/src/lib/features-dashboard-mentor.scss":
/*!*******************************************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/features/dashboard/mentor/src/lib/features-dashboard-mentor.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/postcss-loader/src??embedded!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!./features-dashboard-mentor.scss */ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!../../../libs/features/dashboard/mentor/src/lib/features-dashboard-mentor.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/features/dashboard/mentor/src/lib/features-dashboard-mentor.tsx":
/*!******************************************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/features/dashboard/mentor/src/lib/features-dashboard-mentor.tsx ***!
  \******************************************************************************************************************************/
/*! exports provided: FeaturesDashboardMentor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesDashboardMentor", function() { return FeaturesDashboardMentor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_dashboard_mentor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features-dashboard-mentor.scss */ "../../../libs/features/dashboard/mentor/src/lib/features-dashboard-mentor.scss");
/* harmony import */ var _features_dashboard_mentor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_features_dashboard_mentor_scss__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable-next-line */

const FeaturesDashboardMentor = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to features-dashboard-mentor!"));
};
/* harmony default export */ __webpack_exports__["default"] = (FeaturesDashboardMentor);

/***/ }),

/***/ "../../../libs/features/mentors/src/index.ts":
/*!********************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/features/mentors/src/index.ts ***!
  \********************************************************************************************/
/*! exports provided: FeaturesMentors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_features_mentors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/features-mentors */ "../../../libs/features/mentors/src/lib/features-mentors.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeaturesMentors", function() { return _lib_features_mentors__WEBPACK_IMPORTED_MODULE_0__["FeaturesMentors"]; });



/***/ }),

/***/ "../../../libs/features/mentors/src/lib/features-mentors.scss":
/*!*************************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/features/mentors/src/lib/features-mentors.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/postcss-loader/src??embedded!../../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!./features-mentors.scss */ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!../../../libs/features/mentors/src/lib/features-mentors.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/features/mentors/src/lib/features-mentors.tsx":
/*!************************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/features/mentors/src/lib/features-mentors.tsx ***!
  \************************************************************************************************************/
/*! exports provided: FeaturesMentors, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesMentors", function() { return FeaturesMentors; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_mentors_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features-mentors.scss */ "../../../libs/features/mentors/src/lib/features-mentors.scss");
/* harmony import */ var _features_mentors_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_features_mentors_scss__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable-next-line */

const FeaturesMentors = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to features-mentors!"));
};
/* harmony default export */ __webpack_exports__["default"] = (FeaturesMentors);

/***/ }),

/***/ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!../../../libs/features/dashboard/mentor/src/lib/features-dashboard-mentor.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/node_modules/postcss-loader/src??embedded!/Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!/Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/features/dashboard/mentor/src/lib/features-dashboard-mentor.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmVzL2Rhc2hib2FyZC9tZW50b3Ivc3JjL2xpYi9mZWF0dXJlcy1kYXNoYm9hcmQtbWVudG9yLnNjc3MifQ== */"

/***/ }),

/***/ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!../../../libs/features/mentors/src/lib/features-mentors.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/node_modules/postcss-loader/src??embedded!/Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!/Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/libs/features/mentors/src/lib/features-mentors.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2ZlYXR1cmVzL21lbnRvcnMvc3JjL2xpYi9mZWF0dXJlcy1tZW50b3JzLnNjc3MifQ== */"

/***/ }),

/***/ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./app/app.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/node_modules/postcss-loader/src??embedded!/Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!./app/app.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BwbS9zcmMvYXBwL2FwcC5zY3NzIn0= */"

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/app.scss":
/*!**********************!*\
  !*** ./app/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/postcss-loader/src??embedded!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-2!./app.scss */ "../../../node_modules/postcss-loader/src/index.js?!../../../node_modules/sass-loader/dist/cjs.js?!./app/app.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ "../../../node_modules/reselect/es/index.js");
/* harmony import */ var _routes_private__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/private */ "./app/routes/private.ts");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.scss */ "./app/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_4__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





 // TODO: all commented lines below i use in future for login

const stateSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_2__["createStructuredSelector"])({// isLogedIn: loginSelectors.selectIsLogedIn(),
});

const PrivateRoute = (_ref) => {
  let {
    component: Component
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["component"]);

  // const dispatch = useDispatch();
  // const { isLoggedIn } = useSelector(stateSelector);
  const isLoggedIn = true;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {//   if (!localStorage.getItem('token')) {
    //     // dispatch(loginActions.logOut());
    //   }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, rest, {
    render: props => isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, console.log('on'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: {
        pathname: '/login',
        state: {
          from: props.location
        }
      }
    })
  }));
};

const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    basename: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes_private__WEBPACK_IMPORTED_MODULE_3__["default"].map(prop => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivateRoute, {
    path: `/${prop.path}`,
    key: prop.path,
    component: prop.component
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/routes/private.ts":
/*!*******************************!*\
  !*** ./app/routes/private.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ppm_common_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ppm/common/main */ "../../../libs/common/main/src/index.ts");
/* harmony import */ var _ppm_features_dashboard_mentor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ppm/features/dashboard/mentor */ "../../../libs/features/dashboard/mentor/src/index.ts");
/* harmony import */ var _ppm_features_mentors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ppm/features/mentors */ "../../../libs/features/mentors/src/index.ts");



const PrivateRouter = [{
  path: `${_ppm_common_main__WEBPACK_IMPORTED_MODULE_0__["PrivateRoutesPath"].DASHBOARD}${_ppm_common_main__WEBPACK_IMPORTED_MODULE_0__["PrivateRoutesPath"].DASHBOARD_MENTOR}`,
  title: null,
  icon: null,
  component: _ppm_features_dashboard_mentor__WEBPACK_IMPORTED_MODULE_1__["FeaturesDashboardMentor"],
  onMenu: false
}, {
  path: `${_ppm_common_main__WEBPACK_IMPORTED_MODULE_0__["PrivateRoutesPath"].MENTOR}${_ppm_common_main__WEBPACK_IMPORTED_MODULE_0__["PrivateRoutesPath"].GET_ALL}`,
  title: 'Mentors',
  icon: _ppm_common_main__WEBPACK_IMPORTED_MODULE_0__["RouterMenuIcons"].MENTOR,
  component: _ppm_features_mentors__WEBPACK_IMPORTED_MODULE_2__["FeaturesMentors"],
  onMenu: true
}];
/* harmony default export */ __webpack_exports__["default"] = (PrivateRouter);

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kuskysdonatas/Desktop/PPM-back-end-nest-js/apps/ppm/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map