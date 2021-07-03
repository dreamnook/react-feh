(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/ranker"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./app/components/HeroHeader/index.tsx":
/*!*********************************************!*\
  !*** ./app/components/HeroHeader/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_WeaponTypeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/WeaponTypeIcon */ "./app/components/WeaponTypeIcon/index.tsx");
/* harmony import */ var _app_components_MoveTypeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/MoveTypeIcon */ "./app/components/MoveTypeIcon/index.tsx");
/* harmony import */ var _app_components_Img__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/Img */ "./app/components/Img/index.tsx");
/* harmony import */ var _heroheader_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heroheader.module.css */ "./app/components/HeroHeader/heroheader.module.css");
/* harmony import */ var _heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\HeroHeader\\index.tsx",
    _s = $RefreshSig$();







function HeroHeader(_ref) {
  _s();

  var hidden = _ref.hidden,
      faceSrc = _ref.faceSrc,
      title = _ref.title,
      name = _ref.name,
      weaponType = _ref.weaponType,
      moveType = _ref.moveType,
      blessingSrc = _ref.blessingSrc,
      bst = _ref.bst,
      hp = _ref.hp,
      atk = _ref.atk,
      spd = _ref.spd,
      def = _ref.def,
      res = _ref.res,
      pool = _ref.pool,
      order = _ref.order;
  var style = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return hidden ? {
      display: 'none',
      order: order
    } : {
      order: order
    };
  }, [hidden, order]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    style: style,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default()["img-container"]),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Img__WEBPACK_IMPORTED_MODULE_4__.default, {
        src: faceSrc,
        loading: "lazy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), bst && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default().bst),
        children: bst
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default().right),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default()["title-and-name"]),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default().name),
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default().types),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_WeaponTypeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {
          weaponType: weaponType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_MoveTypeIcon__WEBPACK_IMPORTED_MODULE_3__.default, {
          moveType: moveType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), pool === 'duo' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Img__WEBPACK_IMPORTED_MODULE_4__.default, {
          src: "/assets/unit-duo.png",
          loading: "lazy",
          className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default().blessing)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), pool === 'harmonized' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Img__WEBPACK_IMPORTED_MODULE_4__.default, {
          src: "/assets/harmonized.png",
          loading: "lazy",
          className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default().blessing)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this), blessingSrc && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Img__WEBPACK_IMPORTED_MODULE_4__.default, {
          src: blessingSrc,
          loading: "lazy",
          className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default().blessing)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_heroheader_module_css__WEBPACK_IMPORTED_MODULE_5___default().stats),
        children: [hp && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["HP ", hp]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 18
        }, this), atk && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\u653B\u64CA ", atk]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 19
        }, this), spd && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\u901F\u5EA6 ", spd]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 19
        }, this), def && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\u9632\u5B88 ", def]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 19
        }, this), res && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ["\u9B54\u9632 ", res]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 19
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(HeroHeader, "03TOej/Atx47IHUj0GasUXSIbAc=");

_c = HeroHeader;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(HeroHeader));

var _c, _c2;

$RefreshReg$(_c, "HeroHeader");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/IconCheckbox/index.tsx":
/*!***********************************************!*\
  !*** ./app/components/IconCheckbox/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\IconCheckbox\\index.tsx";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function IconCheckbox(_ref) {
  var checked = _ref.checked,
      onClick = _ref.onClick,
      children = _ref.children,
      props = (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["checked", "onClick", "children"]);

  var opacity = checked ? 1 : 0.25;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", _objectSpread(_objectSpread({
      "data-checked": checked,
      onClick: onClick
    }, props), {}, {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default().dynamic([["1657900522", [opacity]]]) + " " + (props && props.className != null && props.className || ""),
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default()), {
      id: "1657900522",
      dynamic: [opacity],
      children: "button.__jsx-style-dynamic-selector{color:white;opacity:".concat(opacity, ";padding:0.25em;display:inline-block;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-align:left;outline:none;background-color:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcSWNvbkNoZWNrYm94XFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JrQixBQUd1QixZQUN5QixxQ0FDdEIsZUFDTSxxQkFDUSxrRUFDZCxlQUNDLDZEQUNKLFlBQ0ksZ0JBQ0gsYUFDZ0IsNkJBQy9CIiwiZmlsZSI6IkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcSWNvbkNoZWNrYm94XFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEljb25DaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufToge1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgb25DbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IG9wYWNpdHkgPSBjaGVja2VkID8gMSA6IDAuMjU7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gZGF0YS1jaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfSB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgb3BhY2l0eTogJHtvcGFjaXR5fTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEljb25DaGVja2JveDtcbiJdfQ== */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\IconCheckbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_c = IconCheckbox;
/* harmony default export */ __webpack_exports__["default"] = (IconCheckbox);

var _c;

$RefreshReg$(_c, "IconCheckbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/Img/index.tsx":
/*!**************************************!*\
  !*** ./app/components/Img/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\Img\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Img(_ref) {
  _s();

  var _src = _ref.src,
      props = (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["src"]);

  var src = (0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__.default)(_src);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", _objectSpread({
    src: src
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

_s(Img, "jmMg9W0Uygudgr0AmaFzDCAj78o=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = Img;
/* harmony default export */ __webpack_exports__["default"] = (Img);

var _c;

$RefreshReg$(_c, "Img");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/MoveTypeIcon/index.tsx":
/*!***********************************************!*\
  !*** ./app/components/MoveTypeIcon/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\MoveTypeIcon\\index.tsx",
    _s = $RefreshSig$();






var backgroundPosition = function backgroundPosition(index) {
  return "".concat(index * -56, "px 0");
};

function MoveTypeIcon(_ref) {
  _s();

  var moveType = _ref.moveType;
  var style = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    var index = _app_utils_generals__WEBPACK_IMPORTED_MODULE_3__.moveTypes.indexOf(moveType);
    return {
      backgroundPosition: backgroundPosition(index)
    };
  }, [moveType]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: style,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2617712003", [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/move-type.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2617712003",
      dynamic: [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/move-type.png')],
      children: "div.__jsx-style-dynamic-selector{background:no-repeat url('".concat((0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/move-type.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcTW92ZVR5cGVJY29uXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JTLEFBSWtELHlEQUMxQixXQUNDLFlBQ2QiLCJmaWxlIjoiRjpcXHJlcG9zXFxyZWFjdC1mZWgtc2l0ZVxcYXBwXFxjb21wb25lbnRzXFxNb3ZlVHlwZUljb25cXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3ZlVHlwZXMgfSBmcm9tICdAL2FwcC91dGlscy9nZW5lcmFscyc7XG5pbXBvcnQgeyBUTW92ZVR5cGUgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuXG5jb25zdCBiYWNrZ3JvdW5kUG9zaXRpb24gPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7aW5kZXggKiAtNTZ9cHggMGA7XG5cbmZ1bmN0aW9uIE1vdmVUeXBlSWNvbih7IG1vdmVUeXBlIH06IHsgbW92ZVR5cGU6IFRNb3ZlVHlwZSB9KTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qgc3R5bGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IG1vdmVUeXBlcy5pbmRleE9mKG1vdmVUeXBlKTtcbiAgICByZXR1cm4ge1xuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24oaW5kZXgpLFxuICAgIH07XG4gIH0sIFttb3ZlVHlwZV0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdFxuICAgICAgICAgICAgICB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvbW92ZS10eXBlLnBuZycpfScpO1xuICAgICAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92ZVR5cGVJY29uO1xuIl19 */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\MoveTypeIcon\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(MoveTypeIcon, "YSjFL2MYXgh6lJFn3xXnuDh74Dk=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = MoveTypeIcon;
/* harmony default export */ __webpack_exports__["default"] = (MoveTypeIcon);

var _c;

$RefreshReg$(_c, "MoveTypeIcon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/AllCheckbox/index.tsx":
/*!************************************************************!*\
  !*** ./app/components/TypeCheckboxs/AllCheckbox/index.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\AllCheckbox\\index.tsx",
    _s = $RefreshSig$();




function AllCheckbox(_ref) {
  _s();

  var checked = _ref.checked,
      indeterminated = _ref.indeterminated,
      onClick = _ref.onClick;
  var opacity = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    if (indeterminated) {
      return 0.5;
    }

    if (checked) {
      return 1;
    }

    return 0.25;
  }, [indeterminated, checked]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    role: "button",
    style: {
      opacity: opacity
    },
    onClick: onClick,
    className: "jsx-867646372",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "jsx-867646372",
      children: "\u5168"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "867646372",
      children: "div.jsx-867646372{padding:8px 8px 11px;cursor:pointer;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;display:inline-block;vertical-align:top;box-sizing:border-box;}div.jsx-867646372>div.jsx-867646372{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:44px;height:44px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:black;background-color:white;border-radius:0.25em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcQWxsQ2hlY2tib3hcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QmtCLEFBR2dDLEFBUUQscUJBUEwsZUFDYyxrRUFDUixBQU1WLFdBQ0MsVUFOTyxFQU9BLGlCQU5HLHNCQUN4QixzREFNeUIsbUdBQ1gsWUFDVyx1QkFDRixxQkFDdkIiLCJmaWxlIjoiRjpcXHJlcG9zXFxyZWFjdC1mZWgtc2l0ZVxcYXBwXFxjb21wb25lbnRzXFxUeXBlQ2hlY2tib3hzXFxBbGxDaGVja2JveFxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3RFbGVtZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVERpdkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2hlbHBlcic7XG5cbmZ1bmN0aW9uIEFsbENoZWNrYm94KHtcbiAgY2hlY2tlZCxcbiAgaW5kZXRlcm1pbmF0ZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBpbmRldGVybWluYXRlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s6IFREaXZFdmVudEhhbmRsZXI7XG59KTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qgb3BhY2l0eSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChpbmRldGVybWluYXRlZCkge1xuICAgICAgcmV0dXJuIDAuNTtcbiAgICB9XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMC4yNTtcbiAgfSwgW2luZGV0ZXJtaW5hdGVkLCBjaGVja2VkXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiByb2xlPVwiYnV0dG9uXCIgc3R5bGU9e3sgb3BhY2l0eSB9fSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXY+5YWoPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDhweCAxMXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIGRpdiA+IGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgd2lkdGg6IDQ0cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbGxDaGVja2JveDtcbiJdfQ== */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\AllCheckbox\\\\index.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

_s(AllCheckbox, "XvUA4+AIIEwsIjbUdWm8Xxrxgl4=");

_c = AllCheckbox;
/* harmony default export */ __webpack_exports__["default"] = (AllCheckbox);

var _c;

$RefreshReg$(_c, "AllCheckbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/DancerCheckbox/index.tsx":
/*!***************************************************************!*\
  !*** ./app/components/TypeCheckboxs/DancerCheckbox/index.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\DancerCheckbox\\index.tsx",
    _s = $RefreshSig$();






function DancerCheckbox(_ref) {
  _s();

  var checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    checked: checked,
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["1793609765", [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/dancer.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1793609765",
      dynamic: [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/dancer.png')],
      children: ".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-image:url('".concat((0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/dancer.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcRGFuY2VyQ2hlY2tib3hcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFFcUMsNEJBQ0QsMkJBQzBCLHFEQUMxQyxXQUNDLFlBQ2QiLCJmaWxlIjoiRjpcXHJlcG9zXFxyZWFjdC1mZWgtc2l0ZVxcYXBwXFxjb21wb25lbnRzXFxUeXBlQ2hlY2tib3hzXFxEYW5jZXJDaGVja2JveFxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JY29uQ2hlY2tib3gnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7IFRCdXR0b25FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBEYW5jZXJDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvZGFuY2VyLnBuZycpfScpO1xuICAgICAgICB3aWR0aDogNTJweDtcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYH08L3N0eWxlPlxuICAgIDwvSWNvbkNoZWNrYm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYW5jZXJDaGVja2JveDtcbiJdfQ== */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\DancerCheckbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(DancerCheckbox, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = DancerCheckbox;
/* harmony default export */ __webpack_exports__["default"] = (DancerCheckbox);

var _c;

$RefreshReg$(_c, "DancerCheckbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/DuoCheckbox/index.tsx":
/*!************************************************************!*\
  !*** ./app/components/TypeCheckboxs/DuoCheckbox/index.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\DuoCheckbox\\index.tsx",
    _s = $RefreshSig$();






function DuoCheckbox(_ref) {
  _s();

  var checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    checked: checked,
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["1089836651", [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/unit-duo.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1089836651",
      dynamic: [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/unit-duo.png')],
      children: ".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url('".concat((0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/unit-duo.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcRHVvQ2hlY2tib3hcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFFcUMsNEJBQ0QsMkJBQ0gsd0JBQzZCLHFEQUMxQyxXQUNDLFlBQ2QiLCJmaWxlIjoiRjpcXHJlcG9zXFxyZWFjdC1mZWgtc2l0ZVxcYXBwXFxjb21wb25lbnRzXFxUeXBlQ2hlY2tib3hzXFxEdW9DaGVja2JveFxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JY29uQ2hlY2tib3gnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7IFRCdXR0b25FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBEdW9DaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt1c2VCYXNlUGF0aFVybCgnL2Fzc2V0cy91bml0LWR1by5wbmcnKX0nKTtcbiAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ljb25DaGVja2JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHVvQ2hlY2tib3g7XG4iXX0= */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\DuoCheckbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(DuoCheckbox, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = DuoCheckbox;
/* harmony default export */ __webpack_exports__["default"] = (DuoCheckbox);

var _c;

$RefreshReg$(_c, "DuoCheckbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/GrailCheckbox/index.tsx":
/*!**************************************************************!*\
  !*** ./app/components/TypeCheckboxs/GrailCheckbox/index.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\GrailCheckbox\\index.tsx",
    _s = $RefreshSig$();






function GrailCheckbox(_ref) {
  _s();

  var checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    checked: checked,
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2124255049", [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/Heroic_Grail.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2124255049",
      dynamic: [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/Heroic_Grail.png')],
      children: ".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url('".concat((0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/Heroic_Grail.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcR3JhaWxDaGVja2JveFxcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUVxQyw0QkFDRCwyQkFDSCx3QkFDNkIscURBQzFDLFdBQ0MsWUFDZCIsImZpbGUiOiJGOlxccmVwb3NcXHJlYWN0LWZlaC1zaXRlXFxhcHBcXGNvbXBvbmVudHNcXFR5cGVDaGVja2JveHNcXEdyYWlsQ2hlY2tib3hcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbkNoZWNrYm94IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSWNvbkNoZWNrYm94JztcbmltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5pbXBvcnQgeyBUQnV0dG9uRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vaGVscGVyJztcblxuZnVuY3Rpb24gR3JhaWxDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt1c2VCYXNlUGF0aFVybCgnL2Fzc2V0cy9IZXJvaWNfR3JhaWwucG5nJyl9Jyk7XG4gICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9JY29uQ2hlY2tib3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyYWlsQ2hlY2tib3g7XG4iXX0= */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\GrailCheckbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(GrailCheckbox, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = GrailCheckbox;
/* harmony default export */ __webpack_exports__["default"] = (GrailCheckbox);

var _c;

$RefreshReg$(_c, "GrailCheckbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/MoveTypeCheckboxs/MoveTypeCheckbox/index.tsx":
/*!***********************************************************************************!*\
  !*** ./app/components/TypeCheckboxs/MoveTypeCheckboxs/MoveTypeCheckbox/index.tsx ***!
  \***********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_MoveTypeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/MoveTypeIcon */ "./app/components/MoveTypeIcon/index.tsx");
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\MoveTypeCheckboxs\\MoveTypeCheckbox\\index.tsx",
    _this = undefined;





var MoveTypeCheckbox = function MoveTypeCheckbox(_ref) {
  var moveType = _ref.moveType,
      checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    checked: checked,
    onClick: onClick,
    "data-move-type": moveType,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_MoveTypeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {
      moveType: moveType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, _this);
};

_c = MoveTypeCheckbox;
/* harmony default export */ __webpack_exports__["default"] = (MoveTypeCheckbox);

var _c;

$RefreshReg$(_c, "MoveTypeCheckbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/MoveTypeCheckboxs/index.tsx":
/*!******************************************************************!*\
  !*** ./app/components/TypeCheckboxs/MoveTypeCheckboxs/index.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _MoveTypeCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MoveTypeCheckbox */ "./app/components/TypeCheckboxs/MoveTypeCheckboxs/MoveTypeCheckbox/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\MoveTypeCheckboxs\\index.tsx",
    _s = $RefreshSig$();





function MoveTypeCheckboxs(_ref) {
  _s();

  var _this = this;

  var moveTypeFilter = _ref.moveTypeFilter,
      onToggle = _ref.onToggle;
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    var dataset = event.currentTarget.dataset;
    var moveType = dataset.moveType;
    var checked = dataset.checked === 'true';
    onToggle({
      moveType: moveType,
      checked: checked
    });
  }, [onToggle]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__.moveTypes.map(function (moveType) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoveTypeCheckbox__WEBPACK_IMPORTED_MODULE_3__.default, {
        moveType: moveType,
        checked: moveTypeFilter[moveType],
        onClick: onClick
      }, moveType, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false);
}

_s(MoveTypeCheckboxs, "bUqifs7h7EVXqFrOnyVIJNrl0EY=");

_c = MoveTypeCheckboxs;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(MoveTypeCheckboxs));

var _c, _c2;

$RefreshReg$(_c, "MoveTypeCheckboxs");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/Rarity4Checkbox/index.tsx":
/*!****************************************************************!*\
  !*** ./app/components/TypeCheckboxs/Rarity4Checkbox/index.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\Rarity4Checkbox\\index.tsx",
    _s = $RefreshSig$();






function Rarity4Checkbox(_ref) {
  _s();

  var checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    checked: checked,
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["2154148204", [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/rarity4.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2154148204",
      dynamic: [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/rarity4.png')],
      children: ".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-image:url('".concat((0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/rarity4.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcUmFyaXR5NENoZWNrYm94XFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBRXFDLDRCQUNELDJCQUMwQixxREFDMUMsV0FDQyxZQUNkIiwiZmlsZSI6IkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcUmFyaXR5NENoZWNrYm94XFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb25DaGVja2JveCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0ljb25DaGVja2JveCc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuaW1wb3J0IHsgVEJ1dHRvbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2hlbHBlcic7XG5cbmZ1bmN0aW9uIFJhcml0eTRDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvcmFyaXR5NC5wbmcnKX0nKTtcbiAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ljb25DaGVja2JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFyaXR5NENoZWNrYm94O1xuIl19 */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\Rarity4Checkbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Rarity4Checkbox, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Rarity4Checkbox;
/* harmony default export */ __webpack_exports__["default"] = (Rarity4Checkbox);

var _c;

$RefreshReg$(_c, "Rarity4Checkbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/Rarity5Checkbox/index.tsx":
/*!****************************************************************!*\
  !*** ./app/components/TypeCheckboxs/Rarity5Checkbox/index.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\Rarity5Checkbox\\index.tsx",
    _s = $RefreshSig$();






function Rarity5Checkbox(_ref) {
  _s();

  var checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    checked: checked,
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["4090559497", [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/rarity5.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "4090559497",
      dynamic: [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/rarity5.png')],
      children: "div.__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-image:url('".concat((0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/rarity5.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcUmFyaXR5NUNoZWNrYm94XFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR3VDLDRCQUNELDJCQUMwQixxREFDMUMsV0FDQyxZQUNkIiwiZmlsZSI6IkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcUmFyaXR5NUNoZWNrYm94XFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb25DaGVja2JveCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0ljb25DaGVja2JveCc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuaW1wb3J0IHsgVEJ1dHRvbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2hlbHBlcic7XG5cbmZ1bmN0aW9uIFJhcml0eTVDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvcmFyaXR5NS5wbmcnKX0nKTtcbiAgICAgICAgICB3aWR0aDogNTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ljb25DaGVja2JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFyaXR5NUNoZWNrYm94O1xuIl19 */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\Rarity5Checkbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Rarity5Checkbox, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Rarity5Checkbox;
/* harmony default export */ __webpack_exports__["default"] = (Rarity5Checkbox);

var _c;

$RefreshReg$(_c, "Rarity5Checkbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/WeaponTypeCheckboxs/WeaponTypeCheckbox/index.tsx":
/*!***************************************************************************************!*\
  !*** ./app/components/TypeCheckboxs/WeaponTypeCheckboxs/WeaponTypeCheckbox/index.tsx ***!
  \***************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_WeaponTypeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/WeaponTypeIcon */ "./app/components/WeaponTypeIcon/index.tsx");
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\WeaponTypeCheckboxs\\WeaponTypeCheckbox\\index.tsx",
    _this = undefined;





var WeaponTypeCheckbox = function WeaponTypeCheckbox(_ref) {
  var weaponType = _ref.weaponType,
      checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__.default, {
    checked: checked,
    onClick: onClick,
    "data-weapon-type": weaponType,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_WeaponTypeIcon__WEBPACK_IMPORTED_MODULE_2__.default, {
      weaponType: weaponType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, _this);
};

_c = WeaponTypeCheckbox;
/* harmony default export */ __webpack_exports__["default"] = (WeaponTypeCheckbox);

var _c;

$RefreshReg$(_c, "WeaponTypeCheckbox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/WeaponTypeCheckboxs/index.tsx":
/*!********************************************************************!*\
  !*** ./app/components/TypeCheckboxs/WeaponTypeCheckboxs/index.tsx ***!
  \********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _WeaponTypeCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WeaponTypeCheckbox */ "./app/components/TypeCheckboxs/WeaponTypeCheckboxs/WeaponTypeCheckbox/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\WeaponTypeCheckboxs\\index.tsx",
    _s = $RefreshSig$();





function WeaponTypeCheckboxs(_ref) {
  _s();

  var _this = this;

  var weaponTypeFilter = _ref.weaponTypeFilter,
      onToggle = _ref.onToggle;
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    var dataset = event.currentTarget.dataset;
    var weaponType = dataset.weaponType;
    var checked = dataset.checked === 'true';
    onToggle({
      weaponType: weaponType,
      checked: checked
    });
  }, [onToggle]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__.weaponTypes.map(function (weaponType) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WeaponTypeCheckbox__WEBPACK_IMPORTED_MODULE_3__.default, {
        weaponType: weaponType,
        checked: weaponTypeFilter[weaponType],
        onClick: onClick
      }, weaponType, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false);
}

_s(WeaponTypeCheckboxs, "bUqifs7h7EVXqFrOnyVIJNrl0EY=");

_c = WeaponTypeCheckboxs;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(WeaponTypeCheckboxs));

var _c, _c2;

$RefreshReg$(_c, "WeaponTypeCheckboxs");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/helper.tsx":
/*!*************************************************!*\
  !*** ./app/components/TypeCheckboxs/helper.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeMoveTypeFilter": function() { return /* binding */ makeMoveTypeFilter; },
/* harmony export */   "makeWeaponTypeFilter": function() { return /* binding */ makeWeaponTypeFilter; }
/* harmony export */ });
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

function makeMoveTypeFilter() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    infantry: defaultValue,
    armored: defaultValue,
    cavalry: defaultValue,
    flying: defaultValue
  };
}
function makeWeaponTypeFilter() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return _app_utils_generals__WEBPACK_IMPORTED_MODULE_0__.weaponTypes.reduce(function (acc, weaponType) {
    acc[weaponType] = defaultValue;
    return acc;
  }, {});
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/index.tsx":
/*!************************************************!*\
  !*** ./app/components/TypeCheckboxs/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AllCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllCheckbox */ "./app/components/TypeCheckboxs/AllCheckbox/index.tsx");
/* harmony import */ var _Rarity5Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rarity5Checkbox */ "./app/components/TypeCheckboxs/Rarity5Checkbox/index.tsx");
/* harmony import */ var _Rarity4Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rarity4Checkbox */ "./app/components/TypeCheckboxs/Rarity4Checkbox/index.tsx");
/* harmony import */ var _GrailCheckbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GrailCheckbox */ "./app/components/TypeCheckboxs/GrailCheckbox/index.tsx");
/* harmony import */ var _DuoCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DuoCheckbox */ "./app/components/TypeCheckboxs/DuoCheckbox/index.tsx");
/* harmony import */ var _DancerCheckbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DancerCheckbox */ "./app/components/TypeCheckboxs/DancerCheckbox/index.tsx");
/* harmony import */ var _MoveTypeCheckboxs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MoveTypeCheckboxs */ "./app/components/TypeCheckboxs/MoveTypeCheckboxs/index.tsx");
/* harmony import */ var _WeaponTypeCheckboxs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WeaponTypeCheckboxs */ "./app/components/TypeCheckboxs/WeaponTypeCheckboxs/index.tsx");
/* harmony import */ var _typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typecheckboxs.module.css */ "./app/components/TypeCheckboxs/typecheckboxs.module.css");
/* harmony import */ var _typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\index.tsx",
    _s = $RefreshSig$();












function TypeCheckboxs(_ref) {
  _s();

  var allChecked = _ref.allChecked,
      allIndeterminated = _ref.allIndeterminated,
      toggleAll = _ref.toggleAll,
      moveTypeFilter = _ref.moveTypeFilter,
      toggleMoveType = _ref.toggleMoveType,
      weaponTypeFilter = _ref.weaponTypeFilter,
      toggleWeaponType = _ref.toggleWeaponType,
      isRarity5 = _ref.isRarity5,
      toggleRarity5 = _ref.toggleRarity5,
      isRarity4 = _ref.isRarity4,
      toggleRarity4 = _ref.toggleRarity4,
      isGrail = _ref.isGrail,
      toggleGrail = _ref.toggleGrail,
      isDuo = _ref.isDuo,
      toggleDuo = _ref.toggleDuo,
      isDancer = _ref.isDancer,
      toggleDancer = _ref.toggleDancer;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      expanded = _useState[0],
      setExpanded = _useState[1];

  var onClickExpand = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setExpanded(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_10___default().content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_10___default().checkboxs),
        hidden: !expanded,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AllCheckbox__WEBPACK_IMPORTED_MODULE_2__.default, {
          onClick: toggleAll,
          checked: allChecked,
          indeterminated: allIndeterminated
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoveTypeCheckboxs__WEBPACK_IMPORTED_MODULE_8__.default, {
          moveTypeFilter: moveTypeFilter,
          onToggle: toggleMoveType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WeaponTypeCheckboxs__WEBPACK_IMPORTED_MODULE_9__.default, {
          weaponTypeFilter: weaponTypeFilter,
          onToggle: toggleWeaponType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rarity5Checkbox__WEBPACK_IMPORTED_MODULE_3__.default, {
          checked: isRarity5,
          onClick: toggleRarity5
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rarity4Checkbox__WEBPACK_IMPORTED_MODULE_4__.default, {
          checked: isRarity4,
          onClick: toggleRarity4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DuoCheckbox__WEBPACK_IMPORTED_MODULE_6__.default, {
          checked: isDuo,
          onClick: toggleDuo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GrailCheckbox__WEBPACK_IMPORTED_MODULE_5__.default, {
          checked: isGrail,
          onClick: toggleGrail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DancerCheckbox__WEBPACK_IMPORTED_MODULE_7__.default, {
          checked: isDancer,
          onClick: toggleDancer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_10___default()["expand-button"]),
      onClick: onClickExpand,
      children: expanded ? '▲' : '▼'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(TypeCheckboxs, "NJGF7Fc74QH+xeCf196kbgg8FiM=");

_c = TypeCheckboxs;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(TypeCheckboxs));

var _c, _c2;

$RefreshReg$(_c, "TypeCheckboxs");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/TypeCheckboxs/useTypeCheckboxHooks.tsx":
/*!***************************************************************!*\
  !*** ./app/components/TypeCheckboxs/useTypeCheckboxHooks.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper */ "./app/components/TypeCheckboxs/helper.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();






var useTypeCheckboxHooks = function useTypeCheckboxHooks() {
  _s();

  // move type
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return (0,_helper__WEBPACK_IMPORTED_MODULE_2__.makeMoveTypeFilter)(true);
  }),
      moveTypeFilter = _useState[0],
      setMoveTypeFilter = _useState[1];

  var toggleMoveType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref) {
    var moveType = _ref.moveType,
        checked = _ref.checked;
    setMoveTypeFilter(function (prev) {
      var newState = (0,immer__WEBPACK_IMPORTED_MODULE_3__.default)(prev, function (draft) {
        draft[moveType] = !checked;
      });
      return newState;
    });
  }, []); // weapon type

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return (0,_helper__WEBPACK_IMPORTED_MODULE_2__.makeWeaponTypeFilter)(true);
  }),
      weaponTypeFilter = _useState2[0],
      setWeaponTypeFilter = _useState2[1];

  var toggleWeaponType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (_ref2) {
    var weaponType = _ref2.weaponType,
        checked = _ref2.checked;
    setWeaponTypeFilter(function (prev) {
      var newState = (0,immer__WEBPACK_IMPORTED_MODULE_3__.default)(prev, function (draft) {
        draft[weaponType] = !checked;
      });
      return newState;
    });
  }, []); // rarity 5

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      isRarity5 = _useState3[0],
      setIsRarity5 = _useState3[1];

  var toggleRarity5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setIsRarity5(function (prev) {
      return !prev;
    });
  }, []); // rarity 4

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      isRarity4 = _useState4[0],
      setIsRarity4 = _useState4[1];

  var toggleRarity4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setIsRarity4(function (prev) {
      return !prev;
    });
  }, []);

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isDuo = _useState5[0],
      setIsDuo = _useState5[1];

  var toggleDuo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setIsDuo(function (prev) {
      return !prev;
    });
  }, []); // dancer

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isDancer = _useState6[0],
      setIsDancer = _useState6[1];

  var toggleDancer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setIsDancer(function (prev) {
      return !prev;
    });
  }, []); // grail

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      isGrail = _useState7[0],
      setIsGrail = _useState7[1];

  var toggleGrail = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    setIsGrail(function (prev) {
      return !prev;
    });
  }, []);

  var _useMemo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var moveTypeStates = _app_utils_generals__WEBPACK_IMPORTED_MODULE_1__.moveTypes.reduce(function (acc, moveType) {
      var value = moveTypeFilter[moveType];
      return {
        checked: acc.checked && value,
        indeterminated: acc.indeterminated || value
      };
    }, {
      checked: true,
      indeterminated: false
    });
    var weaponTypeStates = _app_utils_generals__WEBPACK_IMPORTED_MODULE_1__.weaponTypes.reduce(function (acc, weaponType) {
      var value = weaponTypeFilter[weaponType];
      return {
        checked: acc.checked && value,
        indeterminated: acc.indeterminated || value
      };
    }, {
      checked: true,
      indeterminated: false
    });
    var checked = moveTypeStates.checked && weaponTypeStates.checked;
    return [checked, !checked && (moveTypeStates.indeterminated || weaponTypeStates.indeterminated)];
  }, [moveTypeFilter, weaponTypeFilter]),
      allChecked = _useMemo[0],
      allIndeterminated = _useMemo[1];

  var toggleAll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (allIndeterminated) {
      setMoveTypeFilter((0,_helper__WEBPACK_IMPORTED_MODULE_2__.makeMoveTypeFilter)(false));
      setWeaponTypeFilter((0,_helper__WEBPACK_IMPORTED_MODULE_2__.makeWeaponTypeFilter)(false));
    } else {
      setMoveTypeFilter((0,_helper__WEBPACK_IMPORTED_MODULE_2__.makeMoveTypeFilter)(!allChecked));
      setWeaponTypeFilter((0,_helper__WEBPACK_IMPORTED_MODULE_2__.makeWeaponTypeFilter)(!allChecked));
    }
  }, [allChecked, allIndeterminated]);
  return {
    allChecked: allChecked,
    allIndeterminated: allIndeterminated,
    toggleAll: toggleAll,
    moveTypeFilter: moveTypeFilter,
    toggleMoveType: toggleMoveType,
    weaponTypeFilter: weaponTypeFilter,
    toggleWeaponType: toggleWeaponType,
    isRarity5: isRarity5,
    toggleRarity5: toggleRarity5,
    isRarity4: isRarity4,
    toggleRarity4: toggleRarity4,
    isGrail: isGrail,
    toggleGrail: toggleGrail,
    isDuo: isDuo,
    toggleDuo: toggleDuo,
    isDancer: isDancer,
    toggleDancer: toggleDancer
  };
};

_s(useTypeCheckboxHooks, "Hb+sj0aX8bGvWA+fWFZRfRpZz6w=");

/* harmony default export */ __webpack_exports__["default"] = (useTypeCheckboxHooks);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/components/WeaponTypeIcon/index.tsx":
/*!*************************************************!*\
  !*** ./app/components/WeaponTypeIcon/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\WeaponTypeIcon\\index.tsx",
    _s = $RefreshSig$();






var backgroundPosition = function backgroundPosition(index) {
  return "".concat(index * -56 - 2, "px -2px");
};

function WeaponTypeIcon(_ref) {
  _s();

  var weaponType = _ref.weaponType;
  var style = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    var index = _app_utils_generals__WEBPACK_IMPORTED_MODULE_3__.weaponTypes.indexOf(weaponType);
    return {
      backgroundPosition: backgroundPosition(index)
    };
  }, [weaponType]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: style,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([["3169364258", [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/weapon-type.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3169364258",
      dynamic: [(0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/weapon-type.png')],
      children: "div.__jsx-style-dynamic-selector{background:no-repeat url('".concat((0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default)('/assets/weapon-type.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcV2VhcG9uVHlwZUljb25cXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQlMsQUFJa0QseURBQzFCLFdBQ0MsWUFDZCIsImZpbGUiOiJGOlxccmVwb3NcXHJlYWN0LWZlaC1zaXRlXFxhcHBcXGNvbXBvbmVudHNcXFdlYXBvblR5cGVJY29uXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVFdlYXBvblR5cGUgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyB3ZWFwb25UeXBlcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2dlbmVyYWxzJztcbmltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5cbmNvbnN0IGJhY2tncm91bmRQb3NpdGlvbiA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtpbmRleCAqIC01NiAtIDJ9cHggLTJweGA7XG5cbmZ1bmN0aW9uIFdlYXBvblR5cGVJY29uKHtcbiAgd2VhcG9uVHlwZSxcbn06IHtcbiAgd2VhcG9uVHlwZT86IFRXZWFwb25UeXBlO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB3ZWFwb25UeXBlcy5pbmRleE9mKHdlYXBvblR5cGUpO1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbihpbmRleCksXG4gICAgfTtcbiAgfSwgW3dlYXBvblR5cGVdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IC8+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXRcbiAgICAgICAgICAgICAgdXJsKCcke3VzZUJhc2VQYXRoVXJsKCcvYXNzZXRzL3dlYXBvbi10eXBlLnBuZycpfScpO1xuICAgICAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhcG9uVHlwZUljb247XG4iXX0= */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\WeaponTypeIcon\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(WeaponTypeIcon, "YSjFL2MYXgh6lJFn3xXnuDh74Dk=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = WeaponTypeIcon;
/* harmony default export */ __webpack_exports__["default"] = (WeaponTypeIcon);

var _c;

$RefreshReg$(_c, "WeaponTypeIcon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/page/FEHDB/index.tsx":
/*!**********************************!*\
  !*** ./app/page/FEHDB/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FEHDB": function() { return /* binding */ FEHDB; },
/* harmony export */   "useFehDB": function() { return /* binding */ useFehDB; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();


var FEHDB = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var useFehDB = function useFehDB() {
  _s();

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FEHDB);
};

_s(useFehDB, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/page/Ranker/HeroHeaders.tsx":
/*!*****************************************!*\
  !*** ./app/page/Ranker/HeroHeaders.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/HeroHeader */ "./app/components/HeroHeader/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\page\\Ranker\\HeroHeaders.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function HeroHeaders(_ref) {
  var _this = this;

  var heroes = _ref.heroes,
      heroesOrder = _ref.heroesOrder;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: heroes.map(function (hero) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread({
        id: hero.id,
        order: heroesOrder[hero.id]
      }, hero), hero.id, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false);
}

_c = HeroHeaders;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(HeroHeaders));

var _c, _c2;

$RefreshReg$(_c, "HeroHeaders");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/page/Ranker/hooks.tsx":
/*!***********************************!*\
  !*** ./app/page/Ranker/hooks.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useHooks; }
/* harmony export */ });
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* harmony import */ var _app_utils_heroes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/heroes */ "./app/utils/heroes.tsx");
/* harmony import */ var _app_components_TypeCheckboxs_useTypeCheckboxHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/TypeCheckboxs/useTypeCheckboxHooks */ "./app/components/TypeCheckboxs/useTypeCheckboxHooks.tsx");
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function useSortByHooks() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sortByHP = _useState[0],
      setSortByHP = _useState[1];

  var toggleSortByHp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSortByHP(function (prev) {
      return !prev;
    });
  }, []);

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sortByAtk = _useState2[0],
      setSortByAtk = _useState2[1];

  var toggleSortByAtk = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSortByAtk(function (prev) {
      return !prev;
    });
  }, []);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sortBySpd = _useState3[0],
      setSortBySpd = _useState3[1];

  var toggleSortBySpd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSortBySpd(function (prev) {
      return !prev;
    });
  }, []);

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sortByDef = _useState4[0],
      setSortByDef = _useState4[1];

  var toggleSortByDef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSortByDef(function (prev) {
      return !prev;
    });
  }, []);

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sortByRes = _useState5[0],
      setSortByRes = _useState5[1];

  var toggleSortByRes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSortByRes(function (prev) {
      return !prev;
    });
  }, []);
  var sortBy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var keys = [];

    if (sortByHP) {
      keys.push('hp');
    }

    if (sortByAtk) {
      keys.push('atk');
    }

    if (sortBySpd) {
      keys.push('spd');
    }

    if (sortByDef) {
      keys.push('def');
    }

    if (sortByRes) {
      keys.push('res');
    }

    return keys;
  }, [sortByHP, sortByAtk, sortBySpd, sortByDef, sortByRes]);
  return {
    sortBy: sortBy,
    sortByHP: sortByHP,
    toggleSortByHp: toggleSortByHp,
    sortByAtk: sortByAtk,
    toggleSortByAtk: toggleSortByAtk,
    sortBySpd: sortBySpd,
    toggleSortBySpd: toggleSortBySpd,
    sortByDef: sortByDef,
    toggleSortByDef: toggleSortByDef,
    sortByRes: sortByRes,
    toggleSortByRes: toggleSortByRes
  };
}

_s(useSortByHooks, "gvykofuiwP63qfSwoDurL12vlp8=");

function useHooks() {
  _s2();

  var _useFehDB = (0,_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_5__.useFehDB)(),
      heroDB = _useFehDB.heroDB,
      assistDB = _useFehDB.assistDB,
      resplendentDB = _useFehDB.resplendentDB;

  var heroes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return (0,_app_utils_heroes__WEBPACK_IMPORTED_MODULE_3__.makeHeroOptions)({
      heroDB: heroDB,
      assistDB: assistDB,
      resplendentDB: resplendentDB
    });
  }, [heroDB, assistDB, resplendentDB]);

  var _useTypeCheckboxHooks = (0,_app_components_TypeCheckboxs_useTypeCheckboxHooks__WEBPACK_IMPORTED_MODULE_4__.default)(),
      allChecked = _useTypeCheckboxHooks.allChecked,
      allIndeterminated = _useTypeCheckboxHooks.allIndeterminated,
      toggleAll = _useTypeCheckboxHooks.toggleAll,
      moveTypeFilter = _useTypeCheckboxHooks.moveTypeFilter,
      toggleMoveType = _useTypeCheckboxHooks.toggleMoveType,
      weaponTypeFilter = _useTypeCheckboxHooks.weaponTypeFilter,
      toggleWeaponType = _useTypeCheckboxHooks.toggleWeaponType,
      isRarity5 = _useTypeCheckboxHooks.isRarity5,
      toggleRarity5 = _useTypeCheckboxHooks.toggleRarity5,
      isRarity4 = _useTypeCheckboxHooks.isRarity4,
      toggleRarity4 = _useTypeCheckboxHooks.toggleRarity4,
      isGrail = _useTypeCheckboxHooks.isGrail,
      toggleGrail = _useTypeCheckboxHooks.toggleGrail,
      isDuo = _useTypeCheckboxHooks.isDuo,
      toggleDuo = _useTypeCheckboxHooks.toggleDuo,
      isDancer = _useTypeCheckboxHooks.isDancer,
      toggleDancer = _useTypeCheckboxHooks.toggleDancer;

  var _useSortByHooks = useSortByHooks(),
      sortBy = _useSortByHooks.sortBy,
      sortByHP = _useSortByHooks.sortByHP,
      toggleSortByHp = _useSortByHooks.toggleSortByHp,
      sortByAtk = _useSortByHooks.sortByAtk,
      toggleSortByAtk = _useSortByHooks.toggleSortByAtk,
      sortBySpd = _useSortByHooks.sortBySpd,
      toggleSortBySpd = _useSortByHooks.toggleSortBySpd,
      sortByDef = _useSortByHooks.sortByDef,
      toggleSortByDef = _useSortByHooks.toggleSortByDef,
      sortByRes = _useSortByHooks.sortByRes,
      toggleSortByRes = _useSortByHooks.toggleSortByRes;

  var heroesOrder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return heroes.sort(function (a, b) {
      var aStatSum = sortBy.reduce(function (acc, statKey) {
        return acc + a[statKey];
      }, 0);
      var bStatSum = sortBy.reduce(function (acc, statKey) {
        return acc + b[statKey];
      }, 0);

      if (aStatSum > bStatSum) {
        return -1;
      }

      if (bStatSum > aStatSum) {
        return 1;
      }

      return a.index - b.index;
    }).reduce(function (acc, hero, index) {
      return _objectSpread(_objectSpread({}, acc), {}, (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, hero.id, index));
    }, {});
  }, [heroes, sortBy]);
  var computedHeroes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return heroes.map(function (option) {
      var hidden = (0,_app_utils_heroes__WEBPACK_IMPORTED_MODULE_3__.shouldBeHidden)(option, {
        moveTypeFilter: moveTypeFilter,
        weaponTypeFilter: weaponTypeFilter,
        isRarity5: isRarity5,
        isRarity4: isRarity4,
        isGrail: isGrail,
        isDuo: isDuo,
        isDancer: isDancer
      });
      return _objectSpread({
        hidden: hidden
      }, option);
    });
  }, [heroes, moveTypeFilter, weaponTypeFilter, isRarity5, isRarity4, isGrail, isDuo, isDancer]);
  var bg = (0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_2__.default)('/assets/summon-stone.jpg');
  return {
    bg: bg,

    /** typecheckbox */
    allChecked: allChecked,
    allIndeterminated: allIndeterminated,
    toggleAll: toggleAll,
    moveTypeFilter: moveTypeFilter,
    toggleMoveType: toggleMoveType,
    weaponTypeFilter: weaponTypeFilter,
    toggleWeaponType: toggleWeaponType,
    isRarity5: isRarity5,
    toggleRarity5: toggleRarity5,
    isRarity4: isRarity4,
    toggleRarity4: toggleRarity4,
    isGrail: isGrail,
    toggleGrail: toggleGrail,
    isDuo: isDuo,
    toggleDuo: toggleDuo,
    isDancer: isDancer,
    toggleDancer: toggleDancer,

    /** sorting */
    sortByHP: sortByHP,
    toggleSortByHp: toggleSortByHp,
    sortByAtk: sortByAtk,
    toggleSortByAtk: toggleSortByAtk,
    sortBySpd: sortBySpd,
    toggleSortBySpd: toggleSortBySpd,
    sortByDef: sortByDef,
    toggleSortByDef: toggleSortByDef,
    sortByRes: sortByRes,
    toggleSortByRes: toggleSortByRes,

    /** rendering */
    computedHeroes: computedHeroes,
    heroesOrder: heroesOrder
  };
}

_s2(useHooks, "/QAH60Dfon8EbwkvWh/QCtVWgLM=", false, function () {
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_5__.useFehDB, _app_components_TypeCheckboxs_useTypeCheckboxHooks__WEBPACK_IMPORTED_MODULE_4__.default, useSortByHooks, _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_2__.default];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/page/Ranker/index.tsx":
/*!***********************************!*\
  !*** ./app/page/Ranker/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_TypeCheckboxs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/TypeCheckboxs */ "./app/components/TypeCheckboxs/index.tsx");
/* harmony import */ var _HeroHeaders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroHeaders */ "./app/page/Ranker/HeroHeaders.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks */ "./app/page/Ranker/hooks.tsx");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.css */ "./app/page/Ranker/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\page\\Ranker\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Ranker = function Ranker() {
  _s();

  var _useHooks = (0,_hooks__WEBPACK_IMPORTED_MODULE_5__.default)(),
      bg = _useHooks.bg,
      allChecked = _useHooks.allChecked,
      allIndeterminated = _useHooks.allIndeterminated,
      toggleAll = _useHooks.toggleAll,
      moveTypeFilter = _useHooks.moveTypeFilter,
      toggleMoveType = _useHooks.toggleMoveType,
      weaponTypeFilter = _useHooks.weaponTypeFilter,
      toggleWeaponType = _useHooks.toggleWeaponType,
      isRarity5 = _useHooks.isRarity5,
      toggleRarity5 = _useHooks.toggleRarity5,
      isRarity4 = _useHooks.isRarity4,
      toggleRarity4 = _useHooks.toggleRarity4,
      isGrail = _useHooks.isGrail,
      toggleGrail = _useHooks.toggleGrail,
      isDuo = _useHooks.isDuo,
      toggleDuo = _useHooks.toggleDuo,
      isDancer = _useHooks.isDancer,
      toggleDancer = _useHooks.toggleDancer,
      sortByHP = _useHooks.sortByHP,
      toggleSortByHp = _useHooks.toggleSortByHp,
      sortByAtk = _useHooks.sortByAtk,
      toggleSortByAtk = _useHooks.toggleSortByAtk,
      sortBySpd = _useHooks.sortBySpd,
      toggleSortBySpd = _useHooks.toggleSortBySpd,
      sortByDef = _useHooks.sortByDef,
      toggleSortByDef = _useHooks.toggleSortByDef,
      sortByRes = _useHooks.sortByRes,
      toggleSortByRes = _useHooks.toggleSortByRes,
      computedHeroes = _useHooks.computedHeroes,
      heroesOrder = _useHooks.heroesOrder;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "\u9AD4\u8CEA\u6392\u6392\u770B"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
      style: {
        background: "url('".concat(bg, "') center / cover no-repeat fixed")
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["bg-layer"]),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_TypeCheckboxs__WEBPACK_IMPORTED_MODULE_3__.default, {
          allChecked: allChecked,
          allIndeterminated: allIndeterminated,
          toggleAll: toggleAll,
          moveTypeFilter: moveTypeFilter,
          toggleMoveType: toggleMoveType,
          weaponTypeFilter: weaponTypeFilter,
          toggleWeaponType: toggleWeaponType,
          isRarity5: isRarity5,
          toggleRarity5: toggleRarity5,
          isRarity4: isRarity4,
          toggleRarity4: toggleRarity4,
          isGrail: isGrail,
          toggleGrail: toggleGrail,
          isDuo: isDuo,
          toggleDuo: toggleDuo,
          isDancer: isDancer,
          toggleDancer: toggleDancer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default()["stats-buttons"]),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
            children: "\u6392\u5E8F\u4F9D\u64DA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByHP,
            onClick: toggleSortByHp,
            children: "HP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByAtk,
            onClick: toggleSortByAtk,
            children: "\u653B\u64CA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortBySpd,
            onClick: toggleSortBySpd,
            children: "\u901F\u5EA6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByDef,
            onClick: toggleSortByDef,
            children: "\u9632\u5B88"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByRes,
            onClick: toggleSortByRes,
            children: "\u9B54\u9632"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().list),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroHeaders__WEBPACK_IMPORTED_MODULE_4__.default, {
            heroes: computedHeroes,
            heroesOrder: heroesOrder
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Ranker, "jiAwBoYp1YtA69oUstUEvLLaOx0=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_5__.default];
});

_c = Ranker;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Ranker));

var _c, _c2;

$RefreshReg$(_c, "Ranker");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/utils/blessings.tsx":
/*!*********************************!*\
  !*** ./app/utils/blessings.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSrc": function() { return /* binding */ getSrc; },
/* harmony export */   "getName": function() { return /* binding */ getName; },
/* harmony export */   "getSrcAndName": function() { return /* binding */ getSrcAndName; },
/* harmony export */   "options": function() { return /* binding */ options; }
/* harmony export */ });
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _generals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generals */ "./app/utils/generals.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var blessingKindNameMap = {
  fire: '火之祝福',
  water: '水之祝福',
  wind: '風之祝福',
  earth: '地之祝福',
  light: '光之祝福',
  dark: '闇之祝福',
  astra: '天之祝福',
  anima: '理之祝福'
};
var blesserKindNameMap = {
  fire: '火之傳承',
  water: '水之傳承',
  wind: '風之傳承',
  earth: '地之傳承',
  light: '光之傳承',
  dark: '闇之傳承',
  astra: '天之傳承',
  anima: '理之傳承'
};
var blessingBoostNameMap = {
  hp: '死鬥',
  atk: '攻擊',
  spd: '速度',
  def: '防守',
  res: '魔防'
};
var blesserNameMap = _generals__WEBPACK_IMPORTED_MODULE_2__.blessers.reduce(function (acc, blesser) {
  var _blesser$split = blesser.split('-'),
      _blesser$split2 = (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_blesser$split, 2),
      kind = _blesser$split2[0],
      boost = _blesser$split2[1];

  return _objectSpread(_objectSpread({}, acc), {}, (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, blesser, "".concat(blesserKindNameMap[kind], " - ").concat(blessingBoostNameMap[boost])));
}, {});
var blessRegex = new RegExp(/(\w+-\w+)(?:-\d)?/);

function getBlessKey(bless) {
  var _bless$match;

  return ((_bless$match = bless.match(blessRegex)) === null || _bless$match === void 0 ? void 0 : _bless$match[1]) || bless;
}

function getSrc(bless) {
  if (!bless || bless === '-') {
    return '';
  }

  var blessKey = getBlessKey(bless);

  if (blessingKindNameMap[blessKey] || blesserNameMap[blessKey]) {
    return "/assets/blessing-".concat(bless, ".png");
  }

  return '';
}
function getName(bless) {
  if (!bless || bless === '-') {
    return '';
  }

  var blessKey = getBlessKey(bless);
  return blessingKindNameMap[blessKey] || blesserNameMap[blessKey] || '無祝福';
}
function getSrcAndName(bless) {
  return {
    src: getSrc(bless),
    name: getName(bless)
  };
}
var options = Object.entries(blessingKindNameMap).map(function (_ref) {
  var _ref2 = (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
      value = _ref2[0],
      name = _ref2[1];

  return {
    value: value,
    name: name
  };
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/utils/generals.tsx":
/*!********************************!*\
  !*** ./app/utils/generals.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveTypes": function() { return /* binding */ moveTypes; },
/* harmony export */   "weaponTypes": function() { return /* binding */ weaponTypes; },
/* harmony export */   "blessingKinds": function() { return /* binding */ blessingKinds; },
/* harmony export */   "blessingBoosts": function() { return /* binding */ blessingBoosts; },
/* harmony export */   "blessers": function() { return /* binding */ blessers; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var moveTypes = ['infantry', 'armored', 'cavalry', 'flying'];
var weaponTypes = ['red-sword', 'blue-lance', 'green-axe', 'red-bow', 'blue-bow', 'green-bow', 'white-bow', 'red-dagger', 'blue-dagger', 'green-dagger', 'white-dagger', 'red-tome', 'blue-tome', 'green-tome', 'white-tome', 'white-staff', 'red-dragon', 'blue-dragon', 'green-dragon', 'white-dragon', 'red-beast', 'blue-beast', 'green-beast', 'white-beast'];
var blessingKinds = ['fire', 'water', 'wind', 'earth', 'light', 'dark', 'astra', 'anima'];
var blessingBoosts = ['hp', 'atk', 'spd', 'def', 'res'];
var blessers = blessingKinds.reduce(function (acc, blessingKind) {
  blessingBoosts.forEach(function (blessingBoost) {
    acc.push("".concat(blessingKind, "-").concat(blessingBoost));
  });
  return acc;
}, []);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/utils/heroes.tsx":
/*!******************************!*\
  !*** ./app/utils/heroes.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHero": function() { return /* binding */ getHero; },
/* harmony export */   "extractHeroOption": function() { return /* binding */ extractHeroOption; },
/* harmony export */   "extractHeroInfo": function() { return /* binding */ extractHeroInfo; },
/* harmony export */   "makeHeroOptions": function() { return /* binding */ makeHeroOptions; },
/* harmony export */   "hiddenByFilter": function() { return /* binding */ hiddenByFilter; },
/* harmony export */   "hiddenByMoveType": function() { return /* binding */ hiddenByMoveType; },
/* harmony export */   "hiddenByWeaponType": function() { return /* binding */ hiddenByWeaponType; },
/* harmony export */   "hiddenByDuo": function() { return /* binding */ hiddenByDuo; },
/* harmony export */   "hiddenByGrail": function() { return /* binding */ hiddenByGrail; },
/* harmony export */   "hiddenByDancer": function() { return /* binding */ hiddenByDancer; },
/* harmony export */   "hiddenByRarity5": function() { return /* binding */ hiddenByRarity5; },
/* harmony export */   "hiddenByRarity4": function() { return /* binding */ hiddenByRarity4; },
/* harmony export */   "shouldBeHidden": function() { return /* binding */ shouldBeHidden; }
/* harmony export */ });
/* harmony import */ var _blessings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blessings */ "./app/utils/blessings.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

function getHero(heroes, heroId) {
  if (heroes[heroId]) {
    return heroes[heroId];
  }

  return heroes['Feh'];
}
function extractHeroOption(hero) {
  var noStat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var id = hero.id,
      title = hero.title,
      name = hero.name,
      rarity = hero.rarity,
      colorType = hero.colorType,
      weaponType = hero.weaponType,
      moveType = hero.moveType,
      blessing = hero.blessing,
      bst = hero.bst,
      statMax = hero.statMax,
      stats = hero.stats,
      pool = hero.pool;
  var faceSrc = "/faces/".concat(id, ".png");
  var blessingSrc = (0,_blessings__WEBPACK_IMPORTED_MODULE_0__.getSrc)(blessing);
  var hp = stats[5].hp[1];
  var atk = stats[5].atk[1];
  var spd = stats[5].spd[1];
  var def = stats[5].def[1];
  var res = stats[5].res[1];
  var query = "".concat(id.toLowerCase(), "|").concat(title, "|").concat(name);

  if (noStat) {
    hp = undefined;
    atk = undefined;
    spd = undefined;
    def = undefined;
    res = undefined;
  }

  return {
    id: id,
    title: title,
    name: name,
    rarity: rarity,
    colorType: colorType,
    weaponType: weaponType,
    moveType: moveType,
    bst: Math.max(bst || 0, statMax || 0) || undefined,
    hp: hp,
    atk: atk,
    spd: spd,
    def: def,
    res: res,
    pool: pool,
    query: query,
    faceSrc: faceSrc,
    blessingSrc: blessingSrc
  };
}
function extractHeroInfo(_ref) {
  var heroDB = _ref.heroDB,
      assistDB = _ref.assistDB,
      resplendentDB = _ref.resplendentDB,
      heroId = _ref.heroId,
      noStat = _ref.noStat;
  var hero = heroDB[heroId];
  var dancers = assistDB.Dance.exclusive;
  var option = extractHeroOption(hero, noStat);
  option.isDancer = dancers.includes(hero.id);
  option.hasResplendent = resplendentDB.includes(hero.id);
  option.faceSrcR = option.hasResplendent ? "/faces/".concat(hero.id, "(R).png") : option.faceSrc;
  return option;
}
function makeHeroOptions(_ref2) {
  var heroDB = _ref2.heroDB,
      assistDB = _ref2.assistDB,
      resplendentDB = _ref2.resplendentDB,
      noStat = _ref2.noStat;
  var dancers = assistDB.Dance.exclusive;
  return Object.values(heroDB).map(function (hero, index) {
    var option = extractHeroOption(hero, noStat);
    option.isDancer = dancers.includes(hero.id);
    option.hasResplendent = resplendentDB.includes(hero.id);
    option.faceSrcR = option.hasResplendent ? "/faces/".concat(hero.id, "(R).png") : option.faceSrc;
    option.index = index;
    return option;
  });
}
function hiddenByFilter(hero, filter) {
  return !!filter && !hero.query.includes(filter.toLowerCase());
}
function hiddenByMoveType(hero, moveTypeFilter) {
  if (!moveTypeFilter) {
    return false;
  }

  return hero.id !== 'Feh' && !moveTypeFilter[hero.moveType];
}
function hiddenByWeaponType(hero, weaponTypeFilter) {
  if (!weaponTypeFilter) {
    return false;
  }

  return hero.id !== 'Feh' && !weaponTypeFilter[hero.weaponType];
}
function hiddenByDuo(hero, isDuo) {
  if (!isDuo) {
    return false;
  }

  return hero.pool !== 'duo' && hero.pool !== 'harmonized';
}
function hiddenByGrail(hero, isGrail) {
  if (!isGrail) {
    return false;
  }

  return hero.pool !== 'grail';
}
function hiddenByDancer(hero, isDancer) {
  if (!isDancer) {
    return false;
  }

  return !hero.isDancer;
}
function hiddenByRarity5(hero, isRarity5) {
  if (isRarity5) {
    return false;
  }

  if (hero.id === 'Feh') {
    return false;
  }

  return hero.rarity.length === 1;
}
function hiddenByRarity4(hero, isRarity4) {
  if (isRarity4) {
    return false;
  }

  if (hero.id === 'Feh') {
    return false;
  }

  return hero.rarity.length > 1;
}
function shouldBeHidden(hero, _ref3) {
  var filter = _ref3.filter,
      moveTypeFilter = _ref3.moveTypeFilter,
      weaponTypeFilter = _ref3.weaponTypeFilter,
      isRarity5 = _ref3.isRarity5,
      isRarity4 = _ref3.isRarity4,
      isDuo = _ref3.isDuo,
      isGrail = _ref3.isGrail,
      isDancer = _ref3.isDancer;
  return hiddenByFilter(hero, filter) || hiddenByMoveType(hero, moveTypeFilter) || hiddenByWeaponType(hero, weaponTypeFilter) || hiddenByDuo(hero, isDuo) || hiddenByGrail(hero, isGrail) || hiddenByDancer(hero, isDancer) || hiddenByRarity5(hero, isRarity5) || hiddenByRarity4(hero, isRarity4);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./app/utils/useBathPathUrl.tsx":
/*!**************************************!*\
  !*** ./app/utils/useBathPathUrl.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useBasePathUrl; }
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_0___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

function useBasePathUrl(url) {
  if (!publicRuntimeConfig.basePath) {
    return url;
  }

  return "".concat(publicRuntimeConfig.basePath).concat(url);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = function () {};

var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/runtime-config.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/runtime-config.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.setConfig = setConfig;
exports.default = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports.default = _default;

function setConfig(configValue) {
  runtimeConfig = configValue;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/ranker/index.tsx":
/*!********************************!*\
  !*** ./pages/ranker/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* harmony import */ var _app_page_Ranker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/page/Ranker */ "./app/page/Ranker/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "F:\\repos\\react-feh-site\\pages\\ranker\\index.tsx";



function RankerPage(_ref) {
  var db = _ref.db;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__.FEHDB.Provider, {
    value: db,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_page_Ranker__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_c = RankerPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (RankerPage);

var _c;

$RefreshReg$(_c, "RankerPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immer": function() { return /* binding */ un; },
/* harmony export */   "applyPatches": function() { return /* binding */ pn; },
/* harmony export */   "castDraft": function() { return /* binding */ K; },
/* harmony export */   "castImmutable": function() { return /* binding */ $; },
/* harmony export */   "createDraft": function() { return /* binding */ ln; },
/* harmony export */   "current": function() { return /* binding */ D; },
/* harmony export */   "enableAllPlugins": function() { return /* binding */ J; },
/* harmony export */   "enableES5": function() { return /* binding */ N; },
/* harmony export */   "enableMapSet": function() { return /* binding */ C; },
/* harmony export */   "enablePatches": function() { return /* binding */ T; },
/* harmony export */   "finishDraft": function() { return /* binding */ dn; },
/* harmony export */   "freeze": function() { return /* binding */ d; },
/* harmony export */   "immerable": function() { return /* binding */ L; },
/* harmony export */   "isDraft": function() { return /* binding */ r; },
/* harmony export */   "isDraftable": function() { return /* binding */ t; },
/* harmony export */   "nothing": function() { return /* binding */ H; },
/* harmony export */   "original": function() { return /* binding */ e; },
/* harmony export */   "produce": function() { return /* binding */ fn; },
/* harmony export */   "produceWithPatches": function() { return /* binding */ cn; },
/* harmony export */   "setAutoFreeze": function() { return /* binding */ sn; },
/* harmony export */   "setUseProxies": function() { return /* binding */ vn; }
/* harmony export */ });
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.g=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b("ES5").S(e,r,o),o?(i[Q].P&&(g(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q],r,e.u,e.s)):r=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);return!(!t||t.get)}function f(r){r.g&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.g&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,g:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.D.set(n,!1),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),en.deleteProperty.call(this,r[0],t)},on.set=function(r,t,e){return true&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?g(c):O(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw g(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if((f=i(r))===H)return;return void 0===f&&(f=r),e.F&&d(f,!0),f}n(21,r)},this.produceWithPatches=function(n,r){return"function"==typeof n?function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))}:[e.produce(n,r,(function(n,r){t=n,i=r})),t,i];var t,i},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.O=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t.slice(e+1))}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ __webpack_exports__["default"] = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/next/config.js":
/*!*************************************!*\
  !*** ./node_modules/next/config.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/runtime-config */ "./node_modules/next/dist/next-server/lib/runtime-config.js")


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Franker&absolutePagePath=F%3A%5Crepos%5Creact-feh-site%5Cpages%5Cranker%5Cindex.tsx!":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Franker&absolutePagePath=F%3A%5Crepos%5Creact-feh-site%5Cpages%5Cranker%5Cindex.tsx! ***!
  \******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/ranker",
      function () {
        return __webpack_require__(/*! ./pages/ranker/index.tsx */ "./pages/ranker/index.tsx");
      }
    ]);
  

/***/ }),

/***/ "./app/components/HeroHeader/heroheader.module.css":
/*!*********************************************************!*\
  !*** ./app/components/HeroHeader/heroheader.module.css ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./heroheader.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/components/HeroHeader/heroheader.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./heroheader.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/components/HeroHeader/heroheader.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./heroheader.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/components/HeroHeader/heroheader.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./app/components/TypeCheckboxs/typecheckboxs.module.css":
/*!***************************************************************!*\
  !*** ./app/components/TypeCheckboxs/typecheckboxs.module.css ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./typecheckboxs.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/components/TypeCheckboxs/typecheckboxs.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./typecheckboxs.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/components/TypeCheckboxs/typecheckboxs.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./typecheckboxs.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/components/TypeCheckboxs/typecheckboxs.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./app/page/Ranker/index.module.css":
/*!******************************************!*\
  !*** ./app/page/Ranker/index.module.css ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./index.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/page/Ranker/index.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./index.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/page/Ranker/index.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./index.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/page/Ranker/index.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/components/HeroHeader/heroheader.module.css":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/components/HeroHeader/heroheader.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".heroheader_container__3TiRd {\n  display: flex;\n  align-items: center;\n  border-bottom: 2px solid #1d3e53;\n  line-height: 1.5;\n}\n\n.heroheader_container__3TiRd .heroheader_right__1mb0I {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 0.5em;\n  min-height: 158px;\n}\n\n.heroheader_img-container__2kBJA {\n  width: 158px;\n  height: 158px;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.heroheader_img-container__2kBJA img {\n  width: 158px;\n  height: 158px;\n}\n\n.heroheader_img-container__2kBJA .heroheader_bst__2Fe7m {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  bottom: 0;\n  right: 0;\n  padding: 0 4px;\n}\n\n.heroheader_title-and-name__2eeAv {\n  flex-grow: 1;\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 0.5em;\n}\n\n.heroheader_title-and-name__2eeAv .heroheader_title__1X9uL {\n  font-size: 1em;\n}\n\n.heroheader_title-and-name__2eeAv .heroheader_name__1xVHD {\n  font-size: 24px;\n  flex-grow: 1;\n  font-weight: bold;\n}\n\n.heroheader_types__q6tFs {\n  display: flex;\n  height: 55px;\n}\n\n.heroheader_blessing__2-7aN {\n  width: 52px;\n  height: 52px;\n}\n\n.heroheader_stats__987nw {\n  display: flex;\n}\n\n.heroheader_stats__987nw > div {\n  text-align: center;\n  font-size: 14px;\n  margin-right: 1em;\n}\n", "",{"version":3,"sources":["webpack://app/components/HeroHeader/heroheader.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB","sourcesContent":[".container {\n  display: flex;\n  align-items: center;\n  border-bottom: 2px solid #1d3e53;\n  line-height: 1.5;\n}\n\n.container .right {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 0.5em;\n  min-height: 158px;\n}\n\n.img-container {\n  width: 158px;\n  height: 158px;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.img-container img {\n  width: 158px;\n  height: 158px;\n}\n\n.img-container .bst {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  bottom: 0;\n  right: 0;\n  padding: 0 4px;\n}\n\n.title-and-name {\n  flex-grow: 1;\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 0.5em;\n}\n\n.title-and-name .title {\n  font-size: 1em;\n}\n\n.title-and-name .name {\n  font-size: 24px;\n  flex-grow: 1;\n  font-weight: bold;\n}\n\n.types {\n  display: flex;\n  height: 55px;\n}\n\n.blessing {\n  width: 52px;\n  height: 52px;\n}\n\n.stats {\n  display: flex;\n}\n\n.stats > div {\n  text-align: center;\n  font-size: 14px;\n  margin-right: 1em;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "heroheader_container__3TiRd",
	"right": "heroheader_right__1mb0I",
	"img-container": "heroheader_img-container__2kBJA",
	"bst": "heroheader_bst__2Fe7m",
	"title-and-name": "heroheader_title-and-name__2eeAv",
	"title": "heroheader_title__1X9uL",
	"name": "heroheader_name__1xVHD",
	"types": "heroheader_types__q6tFs",
	"blessing": "heroheader_blessing__2-7aN",
	"stats": "heroheader_stats__987nw"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/components/TypeCheckboxs/typecheckboxs.module.css":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/components/TypeCheckboxs/typecheckboxs.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".typecheckboxs_content__oldWb {\n  line-height: 1;\n  overflow: hidden;\n  flex: none;\n  background-color: rgba(0, 0, 0, 0.382);\n}\n\n.typecheckboxs_checkboxs__3_Up0 {\n  transition: all 0.3s ease;\n  color: white;\n}\n\n.typecheckboxs_checkboxs__3_Up0[hidden] {\n  display: block;\n  opacity: 0;\n  pointer-events: none;\n  height: 0;\n}\n\n.typecheckboxs_expand-button__22EOZ {\n  background-color: rgba(0, 0, 0, 0.382);\n  color: white;\n  text-align: center;\n  padding: 0.25em;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://app/components/TypeCheckboxs/typecheckboxs.module.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,gBAAgB;EAChB,UAAU;EACV,sCAAsC;AACxC;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,UAAU;EACV,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB","sourcesContent":[".content {\n  line-height: 1;\n  overflow: hidden;\n  flex: none;\n  background-color: rgba(0, 0, 0, 0.382);\n}\n\n.checkboxs {\n  transition: all 0.3s ease;\n  color: white;\n}\n\n.checkboxs[hidden] {\n  display: block;\n  opacity: 0;\n  pointer-events: none;\n  height: 0;\n}\n\n.expand-button {\n  background-color: rgba(0, 0, 0, 0.382);\n  color: white;\n  text-align: center;\n  padding: 0.25em;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"content": "typecheckboxs_content__oldWb",
	"checkboxs": "typecheckboxs_checkboxs__3_Up0",
	"expand-button": "typecheckboxs_expand-button__22EOZ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/page/Ranker/index.module.css":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./app/page/Ranker/index.module.css ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Ranker_container__p14h9 {\n  min-height: 100vh;\n  height: 100%;\n}\n\n.Ranker_bg-layer__1lbzo {\n  background-color: #1d3e53aa;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n.Ranker_bg-layer__1lbzo .Ranker_list__8kpX4 {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 1.5em;\n}\n\n.Ranker_stats-buttons__QpHH1 {\n  padding: 0.25em;\n  display: flex;\n  background-color: #476d7c;\n}\n\n.Ranker_stats-buttons__QpHH1 > .Ranker_title__1tGj4 {\n  font-size: 1.2em;\n  padding: 0.5em;\n  margin-right: 1em;\n}\n\n.Ranker_stats-buttons__QpHH1 > button {\n  text-align: center;\n  padding: 0.25em 0.5em;\n}\n", "",{"version":3,"sources":["webpack://app/page/Ranker/index.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB","sourcesContent":[".container {\n  min-height: 100vh;\n  height: 100%;\n}\n\n.bg-layer {\n  background-color: #1d3e53aa;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n.bg-layer .list {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 1.5em;\n}\n\n.stats-buttons {\n  padding: 0.25em;\n  display: flex;\n  background-color: #476d7c;\n}\n\n.stats-buttons > .title {\n  font-size: 1.2em;\n  padding: 0.5em;\n  margin-right: 1em;\n}\n\n.stats-buttons > button {\n  text-align: center;\n  padding: 0.25em 0.5em;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Ranker_container__p14h9",
	"bg-layer": "Ranker_bg-layer__1lbzo",
	"list": "Ranker_list__8kpX4",
	"stats-buttons": "Ranker_stats-buttons__QpHH1",
	"title": "Ranker_title__1tGj4"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");


exports.__esModule = true;
exports.default = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry = /*#__PURE__*/function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Franker&absolutePagePath=F%3A%5Crepos%5Creact-feh-site%5Cpages%5Cranker%5Cindex.tsx!"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9IZXJvSGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSWNvbkNoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSW1nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTW92ZVR5cGVJY29uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9BbGxDaGVja2JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvRGFuY2VyQ2hlY2tib3gvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UeXBlQ2hlY2tib3hzL0R1b0NoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9HcmFpbENoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9Nb3ZlVHlwZUNoZWNrYm94cy9Nb3ZlVHlwZUNoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9Nb3ZlVHlwZUNoZWNrYm94cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvUmFyaXR5NENoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9SYXJpdHk1Q2hlY2tib3gvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UeXBlQ2hlY2tib3hzL1dlYXBvblR5cGVDaGVja2JveHMvV2VhcG9uVHlwZUNoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9XZWFwb25UeXBlQ2hlY2tib3hzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9oZWxwZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UeXBlQ2hlY2tib3hzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy91c2VUeXBlQ2hlY2tib3hIb29rcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1dlYXBvblR5cGVJY29uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UvRkVIREIvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS9SYW5rZXIvSGVyb0hlYWRlcnMudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS9SYW5rZXIvaG9va3MudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS9SYW5rZXIvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvdXRpbHMvYmxlc3NpbmdzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2dlbmVyYWxzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2hlcm9lcy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91dGlscy91c2VCYXRoUGF0aFVybC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvYW1wLnRzIiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LnRzIiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQudHN4Iiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL3J1bnRpbWUtY29uZmlnLnRzIiwid2VicGFjazovL19OX0UvLi4vbmV4dC1zZXJ2ZXIvbGliL3NpZGUtZWZmZWN0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmFua2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW1tZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hlcm9IZWFkZXIvaGVyb2hlYWRlci5tb2R1bGUuY3NzP2FlOGEiLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvdHlwZWNoZWNrYm94cy5tb2R1bGUuY3NzP2NjYTEiLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlL1Jhbmtlci9pbmRleC5tb2R1bGUuY3NzPzQ2NWIiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzIiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9IZXJvSGVhZGVyL2hlcm9oZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy90eXBlY2hlY2tib3hzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlL1Jhbmtlci9pbmRleC5tb2R1bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3RyaW5nLWhhc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3QvbGliL3N0eWxlc2hlZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L2Rpc3Qvc3R5bGVzaGVldC1yZWdpc3RyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvc3R5bGUuanMiXSwibmFtZXMiOlsiSGVyb0hlYWRlciIsImhpZGRlbiIsImZhY2VTcmMiLCJ0aXRsZSIsIm5hbWUiLCJ3ZWFwb25UeXBlIiwibW92ZVR5cGUiLCJibGVzc2luZ1NyYyIsImJzdCIsImhwIiwiYXRrIiwic3BkIiwiZGVmIiwicmVzIiwicG9vbCIsIm9yZGVyIiwic3R5bGUiLCJ1c2VNZW1vIiwiZGlzcGxheSIsInN0eWxlcyIsImJsZXNzaW5nIiwibWVtbyIsIkljb25DaGVja2JveCIsImNoZWNrZWQiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJwcm9wcyIsIm9wYWNpdHkiLCJJbWciLCJfc3JjIiwic3JjIiwidXNlQmFzZVBhdGhVcmwiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJpbmRleCIsIk1vdmVUeXBlSWNvbiIsIm1vdmVUeXBlcyIsIkFsbENoZWNrYm94IiwiaW5kZXRlcm1pbmF0ZWQiLCJEYW5jZXJDaGVja2JveCIsIkR1b0NoZWNrYm94IiwiR3JhaWxDaGVja2JveCIsIk1vdmVUeXBlQ2hlY2tib3giLCJNb3ZlVHlwZUNoZWNrYm94cyIsIm1vdmVUeXBlRmlsdGVyIiwib25Ub2dnbGUiLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwiZGF0YXNldCIsImN1cnJlbnRUYXJnZXQiLCJSYXJpdHk0Q2hlY2tib3giLCJSYXJpdHk1Q2hlY2tib3giLCJXZWFwb25UeXBlQ2hlY2tib3giLCJXZWFwb25UeXBlQ2hlY2tib3hzIiwid2VhcG9uVHlwZUZpbHRlciIsIndlYXBvblR5cGVzIiwibWFrZU1vdmVUeXBlRmlsdGVyIiwiZGVmYXVsdFZhbHVlIiwiaW5mYW50cnkiLCJhcm1vcmVkIiwiY2F2YWxyeSIsImZseWluZyIsIm1ha2VXZWFwb25UeXBlRmlsdGVyIiwiYWNjIiwiVHlwZUNoZWNrYm94cyIsImFsbENoZWNrZWQiLCJhbGxJbmRldGVybWluYXRlZCIsInRvZ2dsZUFsbCIsInRvZ2dsZU1vdmVUeXBlIiwidG9nZ2xlV2VhcG9uVHlwZSIsImlzUmFyaXR5NSIsInRvZ2dsZVJhcml0eTUiLCJpc1Jhcml0eTQiLCJ0b2dnbGVSYXJpdHk0IiwiaXNHcmFpbCIsInRvZ2dsZUdyYWlsIiwiaXNEdW8iLCJ0b2dnbGVEdW8iLCJpc0RhbmNlciIsInRvZ2dsZURhbmNlciIsInVzZVN0YXRlIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsIm9uQ2xpY2tFeHBhbmQiLCJwcmV2IiwidXNlVHlwZUNoZWNrYm94SG9va3MiLCJzZXRNb3ZlVHlwZUZpbHRlciIsIm5ld1N0YXRlIiwicHJvZHVjZSIsImRyYWZ0Iiwic2V0V2VhcG9uVHlwZUZpbHRlciIsInNldElzUmFyaXR5NSIsInNldElzUmFyaXR5NCIsInNldElzRHVvIiwic2V0SXNEYW5jZXIiLCJzZXRJc0dyYWlsIiwibW92ZVR5cGVTdGF0ZXMiLCJ2YWx1ZSIsIndlYXBvblR5cGVTdGF0ZXMiLCJXZWFwb25UeXBlSWNvbiIsIkZFSERCIiwiY3JlYXRlQ29udGV4dCIsInVzZUZlaERCIiwidXNlQ29udGV4dCIsIkhlcm9IZWFkZXJzIiwiaGVyb2VzIiwiaGVyb2VzT3JkZXIiLCJtYXAiLCJoZXJvIiwiaWQiLCJ1c2VTb3J0QnlIb29rcyIsInNvcnRCeUhQIiwic2V0U29ydEJ5SFAiLCJ0b2dnbGVTb3J0QnlIcCIsInNvcnRCeUF0ayIsInNldFNvcnRCeUF0ayIsInRvZ2dsZVNvcnRCeUF0ayIsInNvcnRCeVNwZCIsInNldFNvcnRCeVNwZCIsInRvZ2dsZVNvcnRCeVNwZCIsInNvcnRCeURlZiIsInNldFNvcnRCeURlZiIsInRvZ2dsZVNvcnRCeURlZiIsInNvcnRCeVJlcyIsInNldFNvcnRCeVJlcyIsInRvZ2dsZVNvcnRCeVJlcyIsInNvcnRCeSIsImtleXMiLCJwdXNoIiwidXNlSG9va3MiLCJoZXJvREIiLCJhc3Npc3REQiIsInJlc3BsZW5kZW50REIiLCJtYWtlSGVyb09wdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJhU3RhdFN1bSIsInJlZHVjZSIsInN0YXRLZXkiLCJiU3RhdFN1bSIsImNvbXB1dGVkSGVyb2VzIiwib3B0aW9uIiwic2hvdWxkQmVIaWRkZW4iLCJiZyIsIlJhbmtlciIsImJhY2tncm91bmQiLCJibGVzc2luZ0tpbmROYW1lTWFwIiwiZmlyZSIsIndhdGVyIiwid2luZCIsImVhcnRoIiwibGlnaHQiLCJkYXJrIiwiYXN0cmEiLCJhbmltYSIsImJsZXNzZXJLaW5kTmFtZU1hcCIsImJsZXNzaW5nQm9vc3ROYW1lTWFwIiwiYmxlc3Nlck5hbWVNYXAiLCJibGVzc2VycyIsImJsZXNzZXIiLCJzcGxpdCIsImtpbmQiLCJib29zdCIsImJsZXNzUmVnZXgiLCJSZWdFeHAiLCJnZXRCbGVzc0tleSIsImJsZXNzIiwibWF0Y2giLCJnZXRTcmMiLCJibGVzc0tleSIsImdldE5hbWUiLCJnZXRTcmNBbmROYW1lIiwib3B0aW9ucyIsIk9iamVjdCIsImVudHJpZXMiLCJibGVzc2luZ0tpbmRzIiwiYmxlc3NpbmdCb29zdHMiLCJibGVzc2luZ0tpbmQiLCJmb3JFYWNoIiwiYmxlc3NpbmdCb29zdCIsImdldEhlcm8iLCJoZXJvSWQiLCJleHRyYWN0SGVyb09wdGlvbiIsIm5vU3RhdCIsInJhcml0eSIsImNvbG9yVHlwZSIsInN0YXRNYXgiLCJzdGF0cyIsInF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJNYXRoIiwibWF4IiwiZXh0cmFjdEhlcm9JbmZvIiwiZGFuY2VycyIsIkRhbmNlIiwiZXhjbHVzaXZlIiwiaW5jbHVkZXMiLCJoYXNSZXNwbGVuZGVudCIsImZhY2VTcmNSIiwidmFsdWVzIiwiaGlkZGVuQnlGaWx0ZXIiLCJmaWx0ZXIiLCJoaWRkZW5CeU1vdmVUeXBlIiwiaGlkZGVuQnlXZWFwb25UeXBlIiwiaGlkZGVuQnlEdW8iLCJoaWRkZW5CeUdyYWlsIiwiaGlkZGVuQnlEYW5jZXIiLCJoaWRkZW5CeVJhcml0eTUiLCJsZW5ndGgiLCJoaWRkZW5CeVJhcml0eTQiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwidXJsIiwiYmFzZVBhdGgiLCJBbXBTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImluQW1wTW9kZSIsImhlYWQiLCJjaGlsZCIsImxpc3QiLCJmcmFnbWVudExpc3QiLCJNRVRBVFlQRVMiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJrZXkiLCJpIiwibGVuIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJoZWFkRWxlbWVudHMiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwiaGVhZEVsZW1lbnQiLCJkZWZhdWx0SGVhZCIsInVuaXF1ZSIsImMiLCJwcm9jZXNzIiwiYW1wU3RhdGUiLCJoZWFkTWFuYWdlciIsIkhlYWQiLCJydW50aW1lQ29uZmlnIiwiaXNTZXJ2ZXIiLCJjb25zdHJ1Y3RvciIsIl9oYXNIZWFkTWFuYWdlciIsImVtaXRDaGFuZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiQ29tcG9uZW50IiwiUmFua2VyUGFnZSIsImRiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7O0FDVkEsdUJBQXVCLG1CQUFPLENBQUMscUZBQW9COztBQUVuRDtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7OztBQ05BO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCOzs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQSxDOzs7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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhGQUE4RixlQUFlO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2IsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyQ0FBMkM7O0FBRTNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEI7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIscUJBQXFCO0FBQ3JCLDBEQUEwRDtBQUMxRCxvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEIsWUFBWTtBQUNaLFlBQVk7QUFDWixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDNXhFYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLHVIQUFzRDtBQUN4RDs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSx1SkFBc0U7QUFDeEU7Ozs7Ozs7Ozs7OztBQ05hOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2hCYTs7QUFFYixrQkFBa0I7QUFDbEIsZUFBa0I7O0FBRWxCLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU8sb0JBQW9CLE9BQU8sUUFBUSxhQUFvQjs7QUFFbEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMLG1CQUFtQixpQ0FBaUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7O0FBRUE7QUFDQSxDQUFDOztBQUVELGVBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7QUMzUEEsbUdBQXdDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvcmFua2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImltcG9ydCB7IG1lbW8sIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUSGVyb09wdGlvbiB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgV2VhcG9uVHlwZUljb24gZnJvbSAnQC9hcHAvY29tcG9uZW50cy9XZWFwb25UeXBlSWNvbic7XG5pbXBvcnQgTW92ZVR5cGVJY29uIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvTW92ZVR5cGVJY29uJztcbmltcG9ydCBJbWcgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JbWcnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlcm9oZWFkZXIubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIEhlcm9IZWFkZXIoe1xuICBoaWRkZW4sXG4gIGZhY2VTcmMsXG4gIHRpdGxlLFxuICBuYW1lLFxuICB3ZWFwb25UeXBlLFxuICBtb3ZlVHlwZSxcbiAgYmxlc3NpbmdTcmMsXG4gIGJzdCxcbiAgaHAsXG4gIGF0ayxcbiAgc3BkLFxuICBkZWYsXG4gIHJlcyxcbiAgcG9vbCxcbiAgb3JkZXIsXG59OiBUSGVyb09wdGlvbikge1xuICBjb25zdCBzdHlsZSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKGhpZGRlbiA/IHsgZGlzcGxheTogJ25vbmUnLCBvcmRlciB9IDogeyBvcmRlciB9KSxcbiAgICBbaGlkZGVuLCBvcmRlcl0sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHN0eWxlPXtzdHlsZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydpbWctY29udGFpbmVyJ119PlxuICAgICAgICA8SW1nIHNyYz17ZmFjZVNyY30gbG9hZGluZz1cImxhenlcIiAvPlxuICAgICAgICB7YnN0ICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnN0fT57YnN0fTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3RpdGxlLWFuZC1uYW1lJ119PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eXBlc30+XG4gICAgICAgICAgPFdlYXBvblR5cGVJY29uIHdlYXBvblR5cGU9e3dlYXBvblR5cGV9IC8+XG4gICAgICAgICAgPE1vdmVUeXBlSWNvbiBtb3ZlVHlwZT17bW92ZVR5cGV9IC8+XG4gICAgICAgICAge3Bvb2wgPT09ICdkdW8nICYmIChcbiAgICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy91bml0LWR1by5wbmdcIlxuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJsZXNzaW5nfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtwb29sID09PSAnaGFybW9uaXplZCcgJiYgKFxuICAgICAgICAgICAgPEltZ1xuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2hhcm1vbml6ZWQucG5nXCJcbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ibGVzc2luZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Ymxlc3NpbmdTcmMgJiYgKFxuICAgICAgICAgICAgPEltZyBzcmM9e2JsZXNzaW5nU3JjfSBsb2FkaW5nPVwibGF6eVwiIGNsYXNzTmFtZT17c3R5bGVzLmJsZXNzaW5nfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzfT5cbiAgICAgICAgICB7aHAgJiYgPGRpdj5IUCB7aHB9PC9kaXY+fVxuICAgICAgICAgIHthdGsgJiYgPGRpdj7mlLvmk4oge2F0a308L2Rpdj59XG4gICAgICAgICAge3NwZCAmJiA8ZGl2PumAn+W6piB7c3BkfTwvZGl2Pn1cbiAgICAgICAgICB7ZGVmICYmIDxkaXY+6Ziy5a6IIHtkZWZ9PC9kaXY+fVxuICAgICAgICAgIHtyZXMgJiYgPGRpdj7prZTpmLIge3Jlc308L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVyb0hlYWRlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEljb25DaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufToge1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgb25DbGljaz86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IG9wYWNpdHkgPSBjaGVja2VkID8gMSA6IDAuMjU7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gZGF0YS1jaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfSB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgb3BhY2l0eTogJHtvcGFjaXR5fTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEljb25DaGVja2JveDtcbiIsImltcG9ydCB7IERldGFpbGVkSFRNTFByb3BzLCBJbWdIVE1MQXR0cmlidXRlcywgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcblxuZnVuY3Rpb24gSW1nKHtcbiAgc3JjOiBfc3JjLFxuICAuLi5wcm9wc1xufTogRGV0YWlsZWRIVE1MUHJvcHM8XG4gIEltZ0hUTUxBdHRyaWJ1dGVzPEhUTUxJbWFnZUVsZW1lbnQ+LFxuICBIVE1MSW1hZ2VFbGVtZW50XG4+KTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qgc3JjID0gdXNlQmFzZVBhdGhVcmwoX3NyYyk7XG4gIHJldHVybiA8aW1nIHNyYz17c3JjfSB7Li4ucHJvcHN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbWc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW92ZVR5cGVzIH0gZnJvbSAnQC9hcHAvdXRpbHMvZ2VuZXJhbHMnO1xuaW1wb3J0IHsgVE1vdmVUeXBlIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcblxuY29uc3QgYmFja2dyb3VuZFBvc2l0aW9uID0gKGluZGV4OiBudW1iZXIpID0+IGAke2luZGV4ICogLTU2fXB4IDBgO1xuXG5mdW5jdGlvbiBNb3ZlVHlwZUljb24oeyBtb3ZlVHlwZSB9OiB7IG1vdmVUeXBlOiBUTW92ZVR5cGUgfSk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBtb3ZlVHlwZXMuaW5kZXhPZihtb3ZlVHlwZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uKGluZGV4KSxcbiAgICB9O1xuICB9LCBbbW92ZVR5cGVdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IC8+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXRcbiAgICAgICAgICAgICAgdXJsKCcke3VzZUJhc2VQYXRoVXJsKCcvYXNzZXRzL21vdmUtdHlwZS5wbmcnKX0nKTtcbiAgICAgICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmVUeXBlSWNvbjtcbiIsImltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFREaXZFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBBbGxDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIGluZGV0ZXJtaW5hdGVkLFxuICBvbkNsaWNrLFxufToge1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgaW5kZXRlcm1pbmF0ZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBURGl2RXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IG9wYWNpdHkgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoaW5kZXRlcm1pbmF0ZWQpIHtcbiAgICAgIHJldHVybiAwLjU7XG4gICAgfVxuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDAuMjU7XG4gIH0sIFtpbmRldGVybWluYXRlZCwgY2hlY2tlZF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgcm9sZT1cImJ1dHRvblwiIHN0eWxlPXt7IG9wYWNpdHkgfX0gb25DbGljaz17b25DbGlja30+XG4gICAgICA8ZGl2PuWFqDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIHBhZGRpbmc6IDhweCA4cHggMTFweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICBkaXYgPiBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxsQ2hlY2tib3g7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb25DaGVja2JveCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0ljb25DaGVja2JveCc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuaW1wb3J0IHsgVEJ1dHRvbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2hlbHBlcic7XG5cbmZ1bmN0aW9uIERhbmNlckNoZWNrYm94KHtcbiAgY2hlY2tlZCxcbiAgb25DbGljayxcbn06IHtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s6IFRCdXR0b25FdmVudEhhbmRsZXI7XG59KTogUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8SWNvbkNoZWNrYm94IGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPGRpdiAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt1c2VCYXNlUGF0aFVybCgnL2Fzc2V0cy9kYW5jZXIucG5nJyl9Jyk7XG4gICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9JY29uQ2hlY2tib3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhbmNlckNoZWNrYm94O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JY29uQ2hlY2tib3gnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7IFRCdXR0b25FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBEdW9DaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt1c2VCYXNlUGF0aFVybCgnL2Fzc2V0cy91bml0LWR1by5wbmcnKX0nKTtcbiAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ljb25DaGVja2JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHVvQ2hlY2tib3g7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb25DaGVja2JveCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0ljb25DaGVja2JveCc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuaW1wb3J0IHsgVEJ1dHRvbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2hlbHBlcic7XG5cbmZ1bmN0aW9uIEdyYWlsQ2hlY2tib3goe1xuICBjaGVja2VkLFxuICBvbkNsaWNrLFxufToge1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgb25DbGljazogVEJ1dHRvbkV2ZW50SGFuZGxlcjtcbn0pOiBSZWFjdEVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxJY29uQ2hlY2tib3ggY2hlY2tlZD17Y2hlY2tlZH0gb25DbGljaz17b25DbGlja30+XG4gICAgICA8ZGl2IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvSGVyb2ljX0dyYWlsLnBuZycpfScpO1xuICAgICAgICB3aWR0aDogNTJweDtcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYH08L3N0eWxlPlxuICAgIDwvSWNvbkNoZWNrYm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFpbENoZWNrYm94O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRNb3ZlVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCBNb3ZlVHlwZUljb24gZnJvbSAnQC9hcHAvY29tcG9uZW50cy9Nb3ZlVHlwZUljb24nO1xuaW1wb3J0IEljb25DaGVja2JveCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0ljb25DaGVja2JveCc7XG5cbmNvbnN0IE1vdmVUeXBlQ2hlY2tib3ggPSAoe1xuICBtb3ZlVHlwZSxcbiAgY2hlY2tlZCxcbiAgb25DbGljayxcbn06IHtcbiAgbW92ZVR5cGU6IFRNb3ZlVHlwZTtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xufSkgPT4gKFxuICA8SWNvbkNoZWNrYm94IGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2xpY2s9e29uQ2xpY2t9IGRhdGEtbW92ZS10eXBlPXttb3ZlVHlwZX0+XG4gICAgPE1vdmVUeXBlSWNvbiBtb3ZlVHlwZT17bW92ZVR5cGV9IC8+XG4gIDwvSWNvbkNoZWNrYm94PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTW92ZVR5cGVDaGVja2JveDtcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRNb3ZlVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IG1vdmVUeXBlcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2dlbmVyYWxzJztcbmltcG9ydCB7IFRNb3ZlVHlwZUZpbHRlclR5cGUgfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHsgVE1vdmVUeXBlVG9nZ2xlRnVuY3Rpb24gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IE1vdmVUeXBlQ2hlY2tib3ggZnJvbSAnLi9Nb3ZlVHlwZUNoZWNrYm94JztcblxuZnVuY3Rpb24gTW92ZVR5cGVDaGVja2JveHMoe1xuICBtb3ZlVHlwZUZpbHRlcixcbiAgb25Ub2dnbGUsXG59OiB7XG4gIG1vdmVUeXBlRmlsdGVyOiBUTW92ZVR5cGVGaWx0ZXJUeXBlO1xuICBvblRvZ2dsZTogVE1vdmVUeXBlVG9nZ2xlRnVuY3Rpb247XG59KSB7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGFzZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCBtb3ZlVHlwZSA9IGRhdGFzZXQubW92ZVR5cGUgYXMgVE1vdmVUeXBlO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IGRhdGFzZXQuY2hlY2tlZCA9PT0gJ3RydWUnO1xuICAgICAgb25Ub2dnbGUoeyBtb3ZlVHlwZSwgY2hlY2tlZCB9KTtcbiAgICB9LFxuICAgIFtvblRvZ2dsZV1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21vdmVUeXBlcy5tYXAoKG1vdmVUeXBlKSA9PiAoXG4gICAgICAgIDxNb3ZlVHlwZUNoZWNrYm94XG4gICAgICAgICAga2V5PXttb3ZlVHlwZX1cbiAgICAgICAgICBtb3ZlVHlwZT17bW92ZVR5cGV9XG4gICAgICAgICAgY2hlY2tlZD17bW92ZVR5cGVGaWx0ZXJbbW92ZVR5cGVdfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhNb3ZlVHlwZUNoZWNrYm94cyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb25DaGVja2JveCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0ljb25DaGVja2JveCc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuaW1wb3J0IHsgVEJ1dHRvbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2hlbHBlcic7XG5cbmZ1bmN0aW9uIFJhcml0eTRDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvcmFyaXR5NC5wbmcnKX0nKTtcbiAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ljb25DaGVja2JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFyaXR5NENoZWNrYm94O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JY29uQ2hlY2tib3gnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7IFRCdXR0b25FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBSYXJpdHk1Q2hlY2tib3goe1xuICBjaGVja2VkLFxuICBvbkNsaWNrLFxufToge1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgb25DbGljazogVEJ1dHRvbkV2ZW50SGFuZGxlcjtcbn0pOiBSZWFjdEVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxJY29uQ2hlY2tib3ggY2hlY2tlZD17Y2hlY2tlZH0gb25DbGljaz17b25DbGlja30+XG4gICAgICA8ZGl2IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3VzZUJhc2VQYXRoVXJsKCcvYXNzZXRzL3Jhcml0eTUucG5nJyl9Jyk7XG4gICAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9JY29uQ2hlY2tib3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhcml0eTVDaGVja2JveDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgV2VhcG9uVHlwZUljb24gZnJvbSAnQC9hcHAvY29tcG9uZW50cy9XZWFwb25UeXBlSWNvbic7XG5pbXBvcnQgSWNvbkNoZWNrYm94IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSWNvbkNoZWNrYm94JztcbmltcG9ydCB7IFRXZWFwb25UeXBlIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuXG5jb25zdCBXZWFwb25UeXBlQ2hlY2tib3ggPSAoe1xuICB3ZWFwb25UeXBlLFxuICBjaGVja2VkLFxuICBvbkNsaWNrLFxufToge1xuICB3ZWFwb25UeXBlOiBUV2VhcG9uVHlwZTtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xufSkgPT4gKFxuICA8SWNvbkNoZWNrYm94XG4gICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGRhdGEtd2VhcG9uLXR5cGU9e3dlYXBvblR5cGV9XG4gID5cbiAgICA8V2VhcG9uVHlwZUljb24gd2VhcG9uVHlwZT17d2VhcG9uVHlwZX0gLz5cbiAgPC9JY29uQ2hlY2tib3g+XG4pO1xuZXhwb3J0IGRlZmF1bHQgV2VhcG9uVHlwZUNoZWNrYm94O1xuIiwiaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUV2VhcG9uVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IHdlYXBvblR5cGVzIH0gZnJvbSAnQC9hcHAvdXRpbHMvZ2VuZXJhbHMnO1xuaW1wb3J0IHsgVFdlYXBvblR5cGVGaWx0ZXJUeXBlIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCB7IFRXZWFwb25UeXBlVG9nZ2xlRnVuY3Rpb24gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IFdlYXBvblR5cGVDaGVja2JveCBmcm9tICcuL1dlYXBvblR5cGVDaGVja2JveCc7XG5cbmZ1bmN0aW9uIFdlYXBvblR5cGVDaGVja2JveHMoe1xuICB3ZWFwb25UeXBlRmlsdGVyLFxuICBvblRvZ2dsZSxcbn06IHtcbiAgd2VhcG9uVHlwZUZpbHRlcjogVFdlYXBvblR5cGVGaWx0ZXJUeXBlO1xuICBvblRvZ2dsZTogVFdlYXBvblR5cGVUb2dnbGVGdW5jdGlvbjtcbn0pIHtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YXNldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHdlYXBvblR5cGUgPSBkYXRhc2V0LndlYXBvblR5cGUgYXMgVFdlYXBvblR5cGU7XG4gICAgICBjb25zdCBjaGVja2VkID0gZGF0YXNldC5jaGVja2VkID09PSAndHJ1ZSc7XG4gICAgICBvblRvZ2dsZSh7IHdlYXBvblR5cGUsIGNoZWNrZWQgfSk7XG4gICAgfSxcbiAgICBbb25Ub2dnbGVdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt3ZWFwb25UeXBlcy5tYXAoKHdlYXBvblR5cGUpID0+IChcbiAgICAgICAgPFdlYXBvblR5cGVDaGVja2JveFxuICAgICAgICAgIGtleT17d2VhcG9uVHlwZX1cbiAgICAgICAgICB3ZWFwb25UeXBlPXt3ZWFwb25UeXBlfVxuICAgICAgICAgIGNoZWNrZWQ9e3dlYXBvblR5cGVGaWx0ZXJbd2VhcG9uVHlwZV19XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgbWVtbyhXZWFwb25UeXBlQ2hlY2tib3hzKTtcbiIsImltcG9ydCB7IHdlYXBvblR5cGVzIH0gZnJvbSAnQC9hcHAvdXRpbHMvZ2VuZXJhbHMnO1xuaW1wb3J0IHtcbiAgVE1vdmVUeXBlRmlsdGVyVHlwZSxcbiAgVFdlYXBvblR5cGVGaWx0ZXJUeXBlLFxufSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHsgVE1vdmVUeXBlLCBUV2VhcG9uVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgVEJ1dHRvbkV2ZW50SGFuZGxlciA9IChcbiAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4pID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFREaXZFdmVudEhhbmRsZXIgPSAoXG4gIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PlxuKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBUTW92ZVR5cGVUb2dnbGVGdW5jdGlvbiA9ICh7XG4gIG1vdmVUeXBlLFxuICBjaGVja2VkLFxufToge1xuICBtb3ZlVHlwZTogVE1vdmVUeXBlO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbn0pID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFRXZWFwb25UeXBlVG9nZ2xlRnVuY3Rpb24gPSAoe1xuICB3ZWFwb25UeXBlLFxuICBjaGVja2VkLFxufToge1xuICB3ZWFwb25UeXBlOiBUV2VhcG9uVHlwZTtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG59KSA9PiB2b2lkO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1vdmVUeXBlRmlsdGVyKGRlZmF1bHRWYWx1ZSA9IHRydWUpOiBUTW92ZVR5cGVGaWx0ZXJUeXBlIHtcbiAgcmV0dXJuIHtcbiAgICBpbmZhbnRyeTogZGVmYXVsdFZhbHVlLFxuICAgIGFybW9yZWQ6IGRlZmF1bHRWYWx1ZSxcbiAgICBjYXZhbHJ5OiBkZWZhdWx0VmFsdWUsXG4gICAgZmx5aW5nOiBkZWZhdWx0VmFsdWUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlV2VhcG9uVHlwZUZpbHRlcihcbiAgZGVmYXVsdFZhbHVlID0gdHJ1ZVxuKTogVFdlYXBvblR5cGVGaWx0ZXJUeXBlIHtcbiAgcmV0dXJuIHdlYXBvblR5cGVzLnJlZHVjZSgoYWNjLCB3ZWFwb25UeXBlKSA9PiB7XG4gICAgYWNjW3dlYXBvblR5cGVdID0gZGVmYXVsdFZhbHVlO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KSBhcyBUV2VhcG9uVHlwZUZpbHRlclR5cGU7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVE1vdmVUeXBlRmlsdGVyVHlwZSwgVFdlYXBvblR5cGVGaWx0ZXJUeXBlIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCBBbGxDaGVja2JveCBmcm9tICcuL0FsbENoZWNrYm94JztcbmltcG9ydCBSYXJpdHk1Q2hlY2tib3ggZnJvbSAnLi9SYXJpdHk1Q2hlY2tib3gnO1xuaW1wb3J0IFJhcml0eTRDaGVja2JveCBmcm9tICcuL1Jhcml0eTRDaGVja2JveCc7XG5pbXBvcnQgR3JhaWxDaGVja2JveCBmcm9tICcuL0dyYWlsQ2hlY2tib3gnO1xuaW1wb3J0IER1b0NoZWNrYm94IGZyb20gJy4vRHVvQ2hlY2tib3gnO1xuaW1wb3J0IERhbmNlckNoZWNrYm94IGZyb20gJy4vRGFuY2VyQ2hlY2tib3gnO1xuaW1wb3J0IE1vdmVUeXBlQ2hlY2tib3hzIGZyb20gJy4vTW92ZVR5cGVDaGVja2JveHMnO1xuaW1wb3J0IFdlYXBvblR5cGVDaGVja2JveHMgZnJvbSAnLi9XZWFwb25UeXBlQ2hlY2tib3hzJztcbmltcG9ydCB7XG4gIFRCdXR0b25FdmVudEhhbmRsZXIsXG4gIFREaXZFdmVudEhhbmRsZXIsXG4gIFRNb3ZlVHlwZVRvZ2dsZUZ1bmN0aW9uLFxuICBUV2VhcG9uVHlwZVRvZ2dsZUZ1bmN0aW9uLFxufSBmcm9tICcuL2hlbHBlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdHlwZWNoZWNrYm94cy5tb2R1bGUuY3NzJztcblxuZXhwb3J0IHR5cGUgVHlwZUNoZWNrYm94c1Byb3BzID0ge1xuICBhbGxDaGVja2VkOiBib29sZWFuO1xuICBhbGxJbmRldGVybWluYXRlZDogYm9vbGVhbjtcbiAgdG9nZ2xlQWxsOiBURGl2RXZlbnRIYW5kbGVyO1xuICBtb3ZlVHlwZUZpbHRlcjogVE1vdmVUeXBlRmlsdGVyVHlwZTtcbiAgdG9nZ2xlTW92ZVR5cGU6IFRNb3ZlVHlwZVRvZ2dsZUZ1bmN0aW9uO1xuICB3ZWFwb25UeXBlRmlsdGVyOiBUV2VhcG9uVHlwZUZpbHRlclR5cGU7XG4gIHRvZ2dsZVdlYXBvblR5cGU6IFRXZWFwb25UeXBlVG9nZ2xlRnVuY3Rpb247XG4gIGlzUmFyaXR5NTogYm9vbGVhbjtcbiAgdG9nZ2xlUmFyaXR5NTogVEJ1dHRvbkV2ZW50SGFuZGxlcjtcbiAgaXNSYXJpdHk0OiBib29sZWFuO1xuICB0b2dnbGVSYXJpdHk0OiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xuICBpc0dyYWlsOiBib29sZWFuO1xuICB0b2dnbGVHcmFpbDogVEJ1dHRvbkV2ZW50SGFuZGxlcjtcbiAgaXNEdW86IGJvb2xlYW47XG4gIHRvZ2dsZUR1bzogVEJ1dHRvbkV2ZW50SGFuZGxlcjtcbiAgaXNEYW5jZXI6IGJvb2xlYW47XG4gIHRvZ2dsZURhbmNlcjogVEJ1dHRvbkV2ZW50SGFuZGxlcjtcbn07XG5cbmZ1bmN0aW9uIFR5cGVDaGVja2JveHMoe1xuICBhbGxDaGVja2VkLFxuICBhbGxJbmRldGVybWluYXRlZCxcbiAgdG9nZ2xlQWxsLFxuICBtb3ZlVHlwZUZpbHRlcixcbiAgdG9nZ2xlTW92ZVR5cGUsXG4gIHdlYXBvblR5cGVGaWx0ZXIsXG4gIHRvZ2dsZVdlYXBvblR5cGUsXG4gIGlzUmFyaXR5NSxcbiAgdG9nZ2xlUmFyaXR5NSxcbiAgaXNSYXJpdHk0LFxuICB0b2dnbGVSYXJpdHk0LFxuICBpc0dyYWlsLFxuICB0b2dnbGVHcmFpbCxcbiAgaXNEdW8sXG4gIHRvZ2dsZUR1byxcbiAgaXNEYW5jZXIsXG4gIHRvZ2dsZURhbmNlcixcbn06IFR5cGVDaGVja2JveHNQcm9wcykge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb25DbGlja0V4cGFuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFeHBhbmRlZCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3hzfSBoaWRkZW49eyFleHBhbmRlZH0+XG4gICAgICAgICAgPEFsbENoZWNrYm94XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVBbGx9XG4gICAgICAgICAgICBjaGVja2VkPXthbGxDaGVja2VkfVxuICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZWQ9e2FsbEluZGV0ZXJtaW5hdGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1vdmVUeXBlQ2hlY2tib3hzXG4gICAgICAgICAgICBtb3ZlVHlwZUZpbHRlcj17bW92ZVR5cGVGaWx0ZXJ9XG4gICAgICAgICAgICBvblRvZ2dsZT17dG9nZ2xlTW92ZVR5cGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8V2VhcG9uVHlwZUNoZWNrYm94c1xuICAgICAgICAgICAgd2VhcG9uVHlwZUZpbHRlcj17d2VhcG9uVHlwZUZpbHRlcn1cbiAgICAgICAgICAgIG9uVG9nZ2xlPXt0b2dnbGVXZWFwb25UeXBlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFJhcml0eTVDaGVja2JveCBjaGVja2VkPXtpc1Jhcml0eTV9IG9uQ2xpY2s9e3RvZ2dsZVJhcml0eTV9IC8+XG4gICAgICAgICAgPFJhcml0eTRDaGVja2JveCBjaGVja2VkPXtpc1Jhcml0eTR9IG9uQ2xpY2s9e3RvZ2dsZVJhcml0eTR9IC8+XG4gICAgICAgICAgPER1b0NoZWNrYm94IGNoZWNrZWQ9e2lzRHVvfSBvbkNsaWNrPXt0b2dnbGVEdW99IC8+XG4gICAgICAgICAgPEdyYWlsQ2hlY2tib3ggY2hlY2tlZD17aXNHcmFpbH0gb25DbGljaz17dG9nZ2xlR3JhaWx9IC8+XG4gICAgICAgICAgPERhbmNlckNoZWNrYm94IGNoZWNrZWQ9e2lzRGFuY2VyfSBvbkNsaWNrPXt0b2dnbGVEYW5jZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydleHBhbmQtYnV0dG9uJ119IG9uQ2xpY2s9e29uQ2xpY2tFeHBhbmR9PlxuICAgICAgICB7ZXhwYW5kZWQgPyAn4payJyA6ICfilrwnfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oVHlwZUNoZWNrYm94cyk7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5pbXBvcnQgeyBUTW92ZVR5cGUsIFRXZWFwb25UeXBlIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgbW92ZVR5cGVzLCB3ZWFwb25UeXBlcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2dlbmVyYWxzJztcbmltcG9ydCB7IFRNb3ZlVHlwZUZpbHRlclR5cGUsIFRXZWFwb25UeXBlRmlsdGVyVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgeyBtYWtlTW92ZVR5cGVGaWx0ZXIsIG1ha2VXZWFwb25UeXBlRmlsdGVyIH0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCB1c2VUeXBlQ2hlY2tib3hIb29rcyA9ICgpID0+IHtcbiAgLy8gbW92ZSB0eXBlXG4gIGNvbnN0IFttb3ZlVHlwZUZpbHRlciwgc2V0TW92ZVR5cGVGaWx0ZXJdID0gdXNlU3RhdGU8VE1vdmVUeXBlRmlsdGVyVHlwZT4oXG4gICAgKCkgPT4gbWFrZU1vdmVUeXBlRmlsdGVyKHRydWUpXG4gICk7XG5cbiAgY29uc3QgdG9nZ2xlTW92ZVR5cGUgPSB1c2VDYWxsYmFjayhcbiAgICAoeyBtb3ZlVHlwZSwgY2hlY2tlZCB9OiB7IG1vdmVUeXBlOiBUTW92ZVR5cGU7IGNoZWNrZWQ6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgc2V0TW92ZVR5cGVGaWx0ZXIoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBwcm9kdWNlKHByZXYsIChkcmFmdCkgPT4ge1xuICAgICAgICAgIGRyYWZ0W21vdmVUeXBlXSA9ICFjaGVja2VkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIC8vIHdlYXBvbiB0eXBlXG4gIGNvbnN0IFtcbiAgICB3ZWFwb25UeXBlRmlsdGVyLFxuICAgIHNldFdlYXBvblR5cGVGaWx0ZXIsXG4gIF0gPSB1c2VTdGF0ZTxUV2VhcG9uVHlwZUZpbHRlclR5cGU+KCgpID0+IG1ha2VXZWFwb25UeXBlRmlsdGVyKHRydWUpKTtcblxuICBjb25zdCB0b2dnbGVXZWFwb25UeXBlID0gdXNlQ2FsbGJhY2soXG4gICAgKHtcbiAgICAgIHdlYXBvblR5cGUsXG4gICAgICBjaGVja2VkLFxuICAgIH06IHtcbiAgICAgIHdlYXBvblR5cGU6IFRXZWFwb25UeXBlO1xuICAgICAgY2hlY2tlZDogYm9vbGVhbjtcbiAgICB9KSA9PiB7XG4gICAgICBzZXRXZWFwb25UeXBlRmlsdGVyKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gcHJvZHVjZShwcmV2LCAoZHJhZnQpID0+IHtcbiAgICAgICAgICBkcmFmdFt3ZWFwb25UeXBlXSA9ICFjaGVja2VkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIC8vIHJhcml0eSA1XG4gIGNvbnN0IFtpc1Jhcml0eTUsIHNldElzUmFyaXR5NV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgdG9nZ2xlUmFyaXR5NSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc1Jhcml0eTUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIC8vIHJhcml0eSA0XG4gIGNvbnN0IFtpc1Jhcml0eTQsIHNldElzUmFyaXR5NF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgdG9nZ2xlUmFyaXR5NCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc1Jhcml0eTQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtpc0R1bywgc2V0SXNEdW9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVEdW8gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNEdW8oKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIC8vIGRhbmNlclxuICBjb25zdCBbaXNEYW5jZXIsIHNldElzRGFuY2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlRGFuY2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzRGFuY2VyKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICAvLyBncmFpbFxuICBjb25zdCBbaXNHcmFpbCwgc2V0SXNHcmFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZUdyYWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzR3JhaWwoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFthbGxDaGVja2VkLCBhbGxJbmRldGVybWluYXRlZF0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBtb3ZlVHlwZVN0YXRlcyA9IG1vdmVUeXBlcy5yZWR1Y2UoXG4gICAgICAoYWNjLCBtb3ZlVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG1vdmVUeXBlRmlsdGVyW21vdmVUeXBlXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGVja2VkOiBhY2MuY2hlY2tlZCAmJiB2YWx1ZSxcbiAgICAgICAgICBpbmRldGVybWluYXRlZDogYWNjLmluZGV0ZXJtaW5hdGVkIHx8IHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHsgY2hlY2tlZDogdHJ1ZSwgaW5kZXRlcm1pbmF0ZWQ6IGZhbHNlIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXBvblR5cGVTdGF0ZXMgPSB3ZWFwb25UeXBlcy5yZWR1Y2UoXG4gICAgICAoYWNjLCB3ZWFwb25UeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gd2VhcG9uVHlwZUZpbHRlclt3ZWFwb25UeXBlXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGVja2VkOiBhY2MuY2hlY2tlZCAmJiB2YWx1ZSxcbiAgICAgICAgICBpbmRldGVybWluYXRlZDogYWNjLmluZGV0ZXJtaW5hdGVkIHx8IHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHsgY2hlY2tlZDogdHJ1ZSwgaW5kZXRlcm1pbmF0ZWQ6IGZhbHNlIH1cbiAgICApO1xuICAgIGNvbnN0IGNoZWNrZWQgPSBtb3ZlVHlwZVN0YXRlcy5jaGVja2VkICYmIHdlYXBvblR5cGVTdGF0ZXMuY2hlY2tlZDtcbiAgICByZXR1cm4gW1xuICAgICAgY2hlY2tlZCxcbiAgICAgICFjaGVja2VkICYmXG4gICAgICAgIChtb3ZlVHlwZVN0YXRlcy5pbmRldGVybWluYXRlZCB8fCB3ZWFwb25UeXBlU3RhdGVzLmluZGV0ZXJtaW5hdGVkKSxcbiAgICBdO1xuICB9LCBbbW92ZVR5cGVGaWx0ZXIsIHdlYXBvblR5cGVGaWx0ZXJdKTtcblxuICBjb25zdCB0b2dnbGVBbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGFsbEluZGV0ZXJtaW5hdGVkKSB7XG4gICAgICBzZXRNb3ZlVHlwZUZpbHRlcihtYWtlTW92ZVR5cGVGaWx0ZXIoZmFsc2UpKTtcbiAgICAgIHNldFdlYXBvblR5cGVGaWx0ZXIobWFrZVdlYXBvblR5cGVGaWx0ZXIoZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TW92ZVR5cGVGaWx0ZXIobWFrZU1vdmVUeXBlRmlsdGVyKCFhbGxDaGVja2VkKSk7XG4gICAgICBzZXRXZWFwb25UeXBlRmlsdGVyKG1ha2VXZWFwb25UeXBlRmlsdGVyKCFhbGxDaGVja2VkKSk7XG4gICAgfVxuICB9LCBbYWxsQ2hlY2tlZCwgYWxsSW5kZXRlcm1pbmF0ZWRdKTtcblxuICByZXR1cm4ge1xuICAgIGFsbENoZWNrZWQsXG4gICAgYWxsSW5kZXRlcm1pbmF0ZWQsXG4gICAgdG9nZ2xlQWxsLFxuICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgIHRvZ2dsZU1vdmVUeXBlLFxuICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlV2VhcG9uVHlwZSxcbiAgICBpc1Jhcml0eTUsXG4gICAgdG9nZ2xlUmFyaXR5NSxcbiAgICBpc1Jhcml0eTQsXG4gICAgdG9nZ2xlUmFyaXR5NCxcbiAgICBpc0dyYWlsLFxuICAgIHRvZ2dsZUdyYWlsLFxuICAgIGlzRHVvLFxuICAgIHRvZ2dsZUR1byxcbiAgICBpc0RhbmNlcixcbiAgICB0b2dnbGVEYW5jZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUeXBlQ2hlY2tib3hIb29rcztcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUV2VhcG9uVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IHdlYXBvblR5cGVzIH0gZnJvbSAnQC9hcHAvdXRpbHMvZ2VuZXJhbHMnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcblxuY29uc3QgYmFja2dyb3VuZFBvc2l0aW9uID0gKGluZGV4OiBudW1iZXIpID0+IGAke2luZGV4ICogLTU2IC0gMn1weCAtMnB4YDtcblxuZnVuY3Rpb24gV2VhcG9uVHlwZUljb24oe1xuICB3ZWFwb25UeXBlLFxufToge1xuICB3ZWFwb25UeXBlPzogVFdlYXBvblR5cGU7XG59KTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qgc3R5bGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHdlYXBvblR5cGVzLmluZGV4T2Yod2VhcG9uVHlwZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uKGluZGV4KSxcbiAgICB9O1xuICB9LCBbd2VhcG9uVHlwZV0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdFxuICAgICAgICAgICAgICB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvd2VhcG9uLXR5cGUucG5nJyl9Jyk7XG4gICAgICAgICAgICB3aWR0aDogNTJweDtcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXZWFwb25UeXBlSWNvbjtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBUQXNzaXN0REIsXG4gIFREZWZhdWx0U2tpbGxEQixcbiAgVEhlcm9EQixcbiAgVFJ1bGVzREIsXG4gIFRTZWFsREIsXG4gIFRTa2lsbERCLFxuICBUV2VhcG9uREIsXG59IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgVEZFSERCVHlwZSA9IHtcbiAgcnVsZXNEQjogVFJ1bGVzREI7XG4gIGhlcm9EQjogVEhlcm9EQjtcbiAgd2VhcG9uREI/OiBUV2VhcG9uREI7XG4gIGFzc2lzdERCPzogVEFzc2lzdERCO1xuICBzcGVjaWFsREI/OiBUU2tpbGxEQjtcbiAgc2tpbGxBREI/OiBUU2tpbGxEQjtcbiAgc2tpbGxCREI/OiBUU2tpbGxEQjtcbiAgc2tpbGxDREI/OiBUU2tpbGxEQjtcbiAgc2VhbERCPzogVFNlYWxEQjtcbiAgZGVmYXVsdFNraWxsREI/OiBURGVmYXVsdFNraWxsREI7XG4gIHJlc3BsZW5kZW50REI6IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IGNvbnN0IEZFSERCID0gY3JlYXRlQ29udGV4dDxURkVIREJUeXBlPihudWxsKTtcblxuZXhwb3J0IGNvbnN0IHVzZUZlaERCID0gKCk6IFRGRUhEQlR5cGUgPT4gdXNlQ29udGV4dChGRUhEQik7XG4iLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlcm9IZWFkZXIgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9IZXJvSGVhZGVyJztcbmltcG9ydCB7IFRIZXJvT3B0aW9uIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcblxuZnVuY3Rpb24gSGVyb0hlYWRlcnMoe1xuICBoZXJvZXMsXG4gIGhlcm9lc09yZGVyLFxufToge1xuICBoZXJvZXM6IFRIZXJvT3B0aW9uW107XG4gIGhlcm9lc09yZGVyOiB7IFtoZXJvSWQ6IHN0cmluZ106IG51bWJlciB9O1xufSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aGVyb2VzLm1hcCgoaGVybykgPT4gKFxuICAgICAgICA8SGVyb0hlYWRlclxuICAgICAgICAgIGtleT17aGVyby5pZH1cbiAgICAgICAgICBpZD17aGVyby5pZH1cbiAgICAgICAgICBvcmRlcj17aGVyb2VzT3JkZXJbaGVyby5pZF19XG4gICAgICAgICAgey4uLmhlcm99XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhIZXJvSGVhZGVycyk7XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuaW1wb3J0IHtcbiAgVEhlcm9PcHRpb24sXG4gIG1ha2VIZXJvT3B0aW9ucyxcbiAgc2hvdWxkQmVIaWRkZW4sXG59IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgdXNlVHlwZUNoZWNrYm94SG9va3MgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9UeXBlQ2hlY2tib3hzL3VzZVR5cGVDaGVja2JveEhvb2tzJztcbmltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5cbmZ1bmN0aW9uIHVzZVNvcnRCeUhvb2tzKCkge1xuICBjb25zdCBbc29ydEJ5SFAsIHNldFNvcnRCeUhQXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlU29ydEJ5SHAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U29ydEJ5SFAoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBbc29ydEJ5QXRrLCBzZXRTb3J0QnlBdGtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTb3J0QnlBdGsgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U29ydEJ5QXRrKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3QgW3NvcnRCeVNwZCwgc2V0U29ydEJ5U3BkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlU29ydEJ5U3BkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNvcnRCeVNwZCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIGNvbnN0IFtzb3J0QnlEZWYsIHNldFNvcnRCeURlZl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVNvcnRCeURlZiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTb3J0QnlEZWYoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBbc29ydEJ5UmVzLCBzZXRTb3J0QnlSZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTb3J0QnlSZXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U29ydEJ5UmVzKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3Qgc29ydEJ5ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGlmIChzb3J0QnlIUCkge1xuICAgICAga2V5cy5wdXNoKCdocCcpO1xuICAgIH1cbiAgICBpZiAoc29ydEJ5QXRrKSB7XG4gICAgICBrZXlzLnB1c2goJ2F0aycpO1xuICAgIH1cbiAgICBpZiAoc29ydEJ5U3BkKSB7XG4gICAgICBrZXlzLnB1c2goJ3NwZCcpO1xuICAgIH1cbiAgICBpZiAoc29ydEJ5RGVmKSB7XG4gICAgICBrZXlzLnB1c2goJ2RlZicpO1xuICAgIH1cbiAgICBpZiAoc29ydEJ5UmVzKSB7XG4gICAgICBrZXlzLnB1c2goJ3JlcycpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfSwgW3NvcnRCeUhQLCBzb3J0QnlBdGssIHNvcnRCeVNwZCwgc29ydEJ5RGVmLCBzb3J0QnlSZXNdKTtcblxuICByZXR1cm4ge1xuICAgIHNvcnRCeSxcbiAgICBzb3J0QnlIUCxcbiAgICB0b2dnbGVTb3J0QnlIcCxcbiAgICBzb3J0QnlBdGssXG4gICAgdG9nZ2xlU29ydEJ5QXRrLFxuICAgIHNvcnRCeVNwZCxcbiAgICB0b2dnbGVTb3J0QnlTcGQsXG4gICAgc29ydEJ5RGVmLFxuICAgIHRvZ2dsZVNvcnRCeURlZixcbiAgICBzb3J0QnlSZXMsXG4gICAgdG9nZ2xlU29ydEJ5UmVzLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIb29rcygpIHtcbiAgY29uc3QgeyBoZXJvREIsIGFzc2lzdERCLCByZXNwbGVuZGVudERCIH0gPSB1c2VGZWhEQigpO1xuICBjb25zdCBoZXJvZXM6IFRIZXJvT3B0aW9uW10gPSB1c2VNZW1vKFxuICAgICgpID0+IG1ha2VIZXJvT3B0aW9ucyh7IGhlcm9EQiwgYXNzaXN0REIsIHJlc3BsZW5kZW50REIgfSksXG4gICAgW2hlcm9EQiwgYXNzaXN0REIsIHJlc3BsZW5kZW50REJdXG4gICk7XG5cbiAgY29uc3Qge1xuICAgIGFsbENoZWNrZWQsXG4gICAgYWxsSW5kZXRlcm1pbmF0ZWQsXG4gICAgdG9nZ2xlQWxsLFxuICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgIHRvZ2dsZU1vdmVUeXBlLFxuICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlV2VhcG9uVHlwZSxcbiAgICBpc1Jhcml0eTUsXG4gICAgdG9nZ2xlUmFyaXR5NSxcbiAgICBpc1Jhcml0eTQsXG4gICAgdG9nZ2xlUmFyaXR5NCxcbiAgICBpc0dyYWlsLFxuICAgIHRvZ2dsZUdyYWlsLFxuICAgIGlzRHVvLFxuICAgIHRvZ2dsZUR1byxcbiAgICBpc0RhbmNlcixcbiAgICB0b2dnbGVEYW5jZXIsXG4gIH0gPSB1c2VUeXBlQ2hlY2tib3hIb29rcygpO1xuXG4gIGNvbnN0IHtcbiAgICBzb3J0QnksXG4gICAgc29ydEJ5SFAsXG4gICAgdG9nZ2xlU29ydEJ5SHAsXG4gICAgc29ydEJ5QXRrLFxuICAgIHRvZ2dsZVNvcnRCeUF0ayxcbiAgICBzb3J0QnlTcGQsXG4gICAgdG9nZ2xlU29ydEJ5U3BkLFxuICAgIHNvcnRCeURlZixcbiAgICB0b2dnbGVTb3J0QnlEZWYsXG4gICAgc29ydEJ5UmVzLFxuICAgIHRvZ2dsZVNvcnRCeVJlcyxcbiAgfSA9IHVzZVNvcnRCeUhvb2tzKCk7XG5cbiAgY29uc3QgaGVyb2VzT3JkZXIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gaGVyb2VzXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBhU3RhdFN1bSA9IHNvcnRCeS5yZWR1Y2UoKGFjYywgc3RhdEtleSkgPT4gYWNjICsgYVtzdGF0S2V5XSwgMCk7XG4gICAgICAgIGNvbnN0IGJTdGF0U3VtID0gc29ydEJ5LnJlZHVjZSgoYWNjLCBzdGF0S2V5KSA9PiBhY2MgKyBiW3N0YXRLZXldLCAwKTtcbiAgICAgICAgaWYgKGFTdGF0U3VtID4gYlN0YXRTdW0pIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJTdGF0U3VtID4gYVN0YXRTdW0pIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICB9KVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGFjYywgaGVybywgaW5kZXgpID0+ICh7XG4gICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgIFtoZXJvLmlkXTogaW5kZXgsXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKTtcbiAgfSwgW2hlcm9lcywgc29ydEJ5XSk7XG5cbiAgY29uc3QgY29tcHV0ZWRIZXJvZXMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBoZXJvZXMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgaGlkZGVuID0gc2hvdWxkQmVIaWRkZW4ob3B0aW9uLCB7XG4gICAgICAgICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgICAgICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICAgICAgICBpc1Jhcml0eTUsXG4gICAgICAgICAgaXNSYXJpdHk0LFxuICAgICAgICAgIGlzR3JhaWwsXG4gICAgICAgICAgaXNEdW8sXG4gICAgICAgICAgaXNEYW5jZXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhpZGRlbixcbiAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICBbXG4gICAgICBoZXJvZXMsXG4gICAgICBtb3ZlVHlwZUZpbHRlcixcbiAgICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgICBpc1Jhcml0eTUsXG4gICAgICBpc1Jhcml0eTQsXG4gICAgICBpc0dyYWlsLFxuICAgICAgaXNEdW8sXG4gICAgICBpc0RhbmNlcixcbiAgICBdXG4gICk7XG5cbiAgY29uc3QgYmcgPSB1c2VCYXNlUGF0aFVybCgnL2Fzc2V0cy9zdW1tb24tc3RvbmUuanBnJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBiZyxcbiAgICAvKiogdHlwZWNoZWNrYm94ICovXG4gICAgYWxsQ2hlY2tlZCxcbiAgICBhbGxJbmRldGVybWluYXRlZCxcbiAgICB0b2dnbGVBbGwsXG4gICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlTW92ZVR5cGUsXG4gICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICB0b2dnbGVXZWFwb25UeXBlLFxuICAgIGlzUmFyaXR5NSxcbiAgICB0b2dnbGVSYXJpdHk1LFxuICAgIGlzUmFyaXR5NCxcbiAgICB0b2dnbGVSYXJpdHk0LFxuICAgIGlzR3JhaWwsXG4gICAgdG9nZ2xlR3JhaWwsXG4gICAgaXNEdW8sXG4gICAgdG9nZ2xlRHVvLFxuICAgIGlzRGFuY2VyLFxuICAgIHRvZ2dsZURhbmNlcixcbiAgICAvKiogc29ydGluZyAqL1xuICAgIHNvcnRCeUhQLFxuICAgIHRvZ2dsZVNvcnRCeUhwLFxuICAgIHNvcnRCeUF0ayxcbiAgICB0b2dnbGVTb3J0QnlBdGssXG4gICAgc29ydEJ5U3BkLFxuICAgIHRvZ2dsZVNvcnRCeVNwZCxcbiAgICBzb3J0QnlEZWYsXG4gICAgdG9nZ2xlU29ydEJ5RGVmLFxuICAgIHNvcnRCeVJlcyxcbiAgICB0b2dnbGVTb3J0QnlSZXMsXG4gICAgLyoqIHJlbmRlcmluZyAqL1xuICAgIGNvbXB1dGVkSGVyb2VzLFxuICAgIGhlcm9lc09yZGVyLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmltcG9ydCBUeXBlQ2hlY2tib3hzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cyc7XG5pbXBvcnQgSGVyb0hlYWRlcnMgZnJvbSAnLi9IZXJvSGVhZGVycyc7XG5pbXBvcnQgdXNlSG9va3MgZnJvbSAnLi9ob29rcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFJhbmtlciA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGJnLFxuICAgIC8qKiB0eXBlY2hlY2tib3ggKi9cbiAgICBhbGxDaGVja2VkLFxuICAgIGFsbEluZGV0ZXJtaW5hdGVkLFxuICAgIHRvZ2dsZUFsbCxcbiAgICBtb3ZlVHlwZUZpbHRlcixcbiAgICB0b2dnbGVNb3ZlVHlwZSxcbiAgICB3ZWFwb25UeXBlRmlsdGVyLFxuICAgIHRvZ2dsZVdlYXBvblR5cGUsXG4gICAgaXNSYXJpdHk1LFxuICAgIHRvZ2dsZVJhcml0eTUsXG4gICAgaXNSYXJpdHk0LFxuICAgIHRvZ2dsZVJhcml0eTQsXG4gICAgaXNHcmFpbCxcbiAgICB0b2dnbGVHcmFpbCxcbiAgICBpc0R1byxcbiAgICB0b2dnbGVEdW8sXG4gICAgaXNEYW5jZXIsXG4gICAgdG9nZ2xlRGFuY2VyLFxuICAgIC8qKiBzb3J0aW5nICovXG4gICAgc29ydEJ5SFAsXG4gICAgdG9nZ2xlU29ydEJ5SHAsXG4gICAgc29ydEJ5QXRrLFxuICAgIHRvZ2dsZVNvcnRCeUF0ayxcbiAgICBzb3J0QnlTcGQsXG4gICAgdG9nZ2xlU29ydEJ5U3BkLFxuICAgIHNvcnRCeURlZixcbiAgICB0b2dnbGVTb3J0QnlEZWYsXG4gICAgc29ydEJ5UmVzLFxuICAgIHRvZ2dsZVNvcnRCeVJlcyxcbiAgICBjb21wdXRlZEhlcm9lcyxcbiAgICBoZXJvZXNPcmRlcixcbiAgfSA9IHVzZUhvb2tzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7pq5Tos6rmjpLmjpLnnIs8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogYHVybCgnJHtiZ30nKSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgZml4ZWRgLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydiZy1sYXllciddfT5cbiAgICAgICAgICA8VHlwZUNoZWNrYm94c1xuICAgICAgICAgICAgYWxsQ2hlY2tlZD17YWxsQ2hlY2tlZH1cbiAgICAgICAgICAgIGFsbEluZGV0ZXJtaW5hdGVkPXthbGxJbmRldGVybWluYXRlZH1cbiAgICAgICAgICAgIHRvZ2dsZUFsbD17dG9nZ2xlQWxsfVxuICAgICAgICAgICAgbW92ZVR5cGVGaWx0ZXI9e21vdmVUeXBlRmlsdGVyfVxuICAgICAgICAgICAgdG9nZ2xlTW92ZVR5cGU9e3RvZ2dsZU1vdmVUeXBlfVxuICAgICAgICAgICAgd2VhcG9uVHlwZUZpbHRlcj17d2VhcG9uVHlwZUZpbHRlcn1cbiAgICAgICAgICAgIHRvZ2dsZVdlYXBvblR5cGU9e3RvZ2dsZVdlYXBvblR5cGV9XG4gICAgICAgICAgICBpc1Jhcml0eTU9e2lzUmFyaXR5NX1cbiAgICAgICAgICAgIHRvZ2dsZVJhcml0eTU9e3RvZ2dsZVJhcml0eTV9XG4gICAgICAgICAgICBpc1Jhcml0eTQ9e2lzUmFyaXR5NH1cbiAgICAgICAgICAgIHRvZ2dsZVJhcml0eTQ9e3RvZ2dsZVJhcml0eTR9XG4gICAgICAgICAgICBpc0dyYWlsPXtpc0dyYWlsfVxuICAgICAgICAgICAgdG9nZ2xlR3JhaWw9e3RvZ2dsZUdyYWlsfVxuICAgICAgICAgICAgaXNEdW89e2lzRHVvfVxuICAgICAgICAgICAgdG9nZ2xlRHVvPXt0b2dnbGVEdW99XG4gICAgICAgICAgICBpc0RhbmNlcj17aXNEYW5jZXJ9XG4gICAgICAgICAgICB0b2dnbGVEYW5jZXI9e3RvZ2dsZURhbmNlcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3N0YXRzLWJ1dHRvbnMnXX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7mjpLluo/kvp3mk5o8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1hY3RpdmU9e3NvcnRCeUhQfSBvbkNsaWNrPXt0b2dnbGVTb3J0QnlIcH0+XG4gICAgICAgICAgICAgIEhQXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1hY3RpdmU9e3NvcnRCeUF0a30gb25DbGljaz17dG9nZ2xlU29ydEJ5QXRrfT5cbiAgICAgICAgICAgICAg5pS75pOKXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1hY3RpdmU9e3NvcnRCeVNwZH0gb25DbGljaz17dG9nZ2xlU29ydEJ5U3BkfT5cbiAgICAgICAgICAgICAg6YCf5bqmXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1hY3RpdmU9e3NvcnRCeURlZn0gb25DbGljaz17dG9nZ2xlU29ydEJ5RGVmfT5cbiAgICAgICAgICAgICAg6Ziy5a6IXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1hY3RpdmU9e3NvcnRCeVJlc30gb25DbGljaz17dG9nZ2xlU29ydEJ5UmVzfT5cbiAgICAgICAgICAgICAg6a2U6ZiyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICAgICAgPEhlcm9IZWFkZXJzIGhlcm9lcz17Y29tcHV0ZWRIZXJvZXN9IGhlcm9lc09yZGVyPXtoZXJvZXNPcmRlcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oUmFua2VyKTtcbiIsImltcG9ydCB7IFRCbGVzc2luZ0tpbmQsIFRCbGVzc2luZ0Jvb3N0IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBibGVzc2VycyB9IGZyb20gJy4vZ2VuZXJhbHMnO1xuXG5jb25zdCBibGVzc2luZ0tpbmROYW1lTWFwOiB7IFtibGVzc2luZ0tpbmQgaW4gVEJsZXNzaW5nS2luZF06IHN0cmluZyB9ID0ge1xuICBmaXJlOiAn54Gr5LmL56Wd56aPJyxcbiAgd2F0ZXI6ICfmsLTkuYvnpZ3npo8nLFxuICB3aW5kOiAn6aKo5LmL56Wd56aPJyxcbiAgZWFydGg6ICflnLDkuYvnpZ3npo8nLFxuICBsaWdodDogJ+WFieS5i+elneemjycsXG4gIGRhcms6ICfpl4fkuYvnpZ3npo8nLFxuICBhc3RyYTogJ+WkqeS5i+elneemjycsXG4gIGFuaW1hOiAn55CG5LmL56Wd56aPJyxcbn07XG5cbmNvbnN0IGJsZXNzZXJLaW5kTmFtZU1hcDogeyBbYmxlc3NpbmdLaW5kIGluIFRCbGVzc2luZ0tpbmRdOiBzdHJpbmcgfSA9IHtcbiAgZmlyZTogJ+eBq+S5i+WCs+aJvycsXG4gIHdhdGVyOiAn5rC05LmL5YKz5om/JyxcbiAgd2luZDogJ+miqOS5i+WCs+aJvycsXG4gIGVhcnRoOiAn5Zyw5LmL5YKz5om/JyxcbiAgbGlnaHQ6ICflhYnkuYvlgrPmib8nLFxuICBkYXJrOiAn6ZeH5LmL5YKz5om/JyxcbiAgYXN0cmE6ICflpKnkuYvlgrPmib8nLFxuICBhbmltYTogJ+eQhuS5i+WCs+aJvycsXG59O1xuXG5jb25zdCBibGVzc2luZ0Jvb3N0TmFtZU1hcDoge1xuICBbYmxlc3NpbmdCb29zdCBpbiBUQmxlc3NpbmdCb29zdF06IHN0cmluZztcbn0gPSB7XG4gIGhwOiAn5q276aylJyxcbiAgYXRrOiAn5pS75pOKJyxcbiAgc3BkOiAn6YCf5bqmJyxcbiAgZGVmOiAn6Ziy5a6IJyxcbiAgcmVzOiAn6a2U6ZiyJyxcbn07XG5cbmNvbnN0IGJsZXNzZXJOYW1lTWFwOiB7XG4gIFtibGVzc2VyOiBzdHJpbmddOiBzdHJpbmc7XG59ID0gYmxlc3NlcnMucmVkdWNlKChhY2MsIGJsZXNzZXIpID0+IHtcbiAgY29uc3QgW2tpbmQsIGJvb3N0XSA9IGJsZXNzZXIuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5hY2MsXG4gICAgW2JsZXNzZXJdOiBgJHtibGVzc2VyS2luZE5hbWVNYXBba2luZF19IC0gJHtibGVzc2luZ0Jvb3N0TmFtZU1hcFtib29zdF19YCxcbiAgfTtcbn0sIHt9KTtcblxuY29uc3QgYmxlc3NSZWdleCA9IG5ldyBSZWdFeHAoLyhcXHcrLVxcdyspKD86LVxcZCk/Lyk7XG5cbmZ1bmN0aW9uIGdldEJsZXNzS2V5KGJsZXNzOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGJsZXNzLm1hdGNoKGJsZXNzUmVnZXgpPy5bMV0gfHwgYmxlc3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcmMoYmxlc3M6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghYmxlc3MgfHwgYmxlc3MgPT09ICctJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjb25zdCBibGVzc0tleSA9IGdldEJsZXNzS2V5KGJsZXNzKTtcbiAgaWYgKGJsZXNzaW5nS2luZE5hbWVNYXBbYmxlc3NLZXldIHx8IGJsZXNzZXJOYW1lTWFwW2JsZXNzS2V5XSkge1xuICAgIHJldHVybiBgL2Fzc2V0cy9ibGVzc2luZy0ke2JsZXNzfS5wbmdgO1xuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hbWUoYmxlc3M6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghYmxlc3MgfHwgYmxlc3MgPT09ICctJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBjb25zdCBibGVzc0tleSA9IGdldEJsZXNzS2V5KGJsZXNzKTtcbiAgcmV0dXJuIGJsZXNzaW5nS2luZE5hbWVNYXBbYmxlc3NLZXldIHx8IGJsZXNzZXJOYW1lTWFwW2JsZXNzS2V5XSB8fCAn54Sh56Wd56aPJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNyY0FuZE5hbWUoYmxlc3M6IHN0cmluZyk6IHsgc3JjOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9IHtcbiAgcmV0dXJuIHsgc3JjOiBnZXRTcmMoYmxlc3MpLCBuYW1lOiBnZXROYW1lKGJsZXNzKSB9O1xufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKGJsZXNzaW5nS2luZE5hbWVNYXApLm1hcChcbiAgKFt2YWx1ZSwgbmFtZV0pID0+ICh7XG4gICAgdmFsdWUsXG4gICAgbmFtZSxcbiAgfSksXG4pO1xuIiwiaW1wb3J0IHtcbiAgVEJsZXNzaW5nQm9vc3QsXG4gIFRCbGVzc2luZ0tpbmQsXG4gIFRNb3ZlVHlwZSxcbiAgVFdlYXBvblR5cGUsXG59IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbW92ZVR5cGVzOiBUTW92ZVR5cGVbXSA9IFtcbiAgJ2luZmFudHJ5JyxcbiAgJ2FybW9yZWQnLFxuICAnY2F2YWxyeScsXG4gICdmbHlpbmcnLFxuXTtcblxuZXhwb3J0IGNvbnN0IHdlYXBvblR5cGVzOiBUV2VhcG9uVHlwZVtdID0gW1xuICAncmVkLXN3b3JkJyxcbiAgJ2JsdWUtbGFuY2UnLFxuICAnZ3JlZW4tYXhlJyxcbiAgJ3JlZC1ib3cnLFxuICAnYmx1ZS1ib3cnLFxuICAnZ3JlZW4tYm93JyxcbiAgJ3doaXRlLWJvdycsXG4gICdyZWQtZGFnZ2VyJyxcbiAgJ2JsdWUtZGFnZ2VyJyxcbiAgJ2dyZWVuLWRhZ2dlcicsXG4gICd3aGl0ZS1kYWdnZXInLFxuICAncmVkLXRvbWUnLFxuICAnYmx1ZS10b21lJyxcbiAgJ2dyZWVuLXRvbWUnLFxuICAnd2hpdGUtdG9tZScsXG4gICd3aGl0ZS1zdGFmZicsXG4gICdyZWQtZHJhZ29uJyxcbiAgJ2JsdWUtZHJhZ29uJyxcbiAgJ2dyZWVuLWRyYWdvbicsXG4gICd3aGl0ZS1kcmFnb24nLFxuICAncmVkLWJlYXN0JyxcbiAgJ2JsdWUtYmVhc3QnLFxuICAnZ3JlZW4tYmVhc3QnLFxuICAnd2hpdGUtYmVhc3QnLFxuXTtcblxuZXhwb3J0IGNvbnN0IGJsZXNzaW5nS2luZHM6IFRCbGVzc2luZ0tpbmRbXSA9IFtcbiAgJ2ZpcmUnLFxuICAnd2F0ZXInLFxuICAnd2luZCcsXG4gICdlYXJ0aCcsXG4gICdsaWdodCcsXG4gICdkYXJrJyxcbiAgJ2FzdHJhJyxcbiAgJ2FuaW1hJyxcbl07XG5cbmV4cG9ydCBjb25zdCBibGVzc2luZ0Jvb3N0czogVEJsZXNzaW5nQm9vc3RbXSA9IFtcbiAgJ2hwJyxcbiAgJ2F0aycsXG4gICdzcGQnLFxuICAnZGVmJyxcbiAgJ3JlcycsXG5dO1xuXG5leHBvcnQgY29uc3QgYmxlc3NlcnM6IHN0cmluZ1tdID0gYmxlc3NpbmdLaW5kcy5yZWR1Y2UoKGFjYywgYmxlc3NpbmdLaW5kKSA9PiB7XG4gIGJsZXNzaW5nQm9vc3RzLmZvckVhY2goKGJsZXNzaW5nQm9vc3QpID0+IHtcbiAgICBhY2MucHVzaChgJHtibGVzc2luZ0tpbmR9LSR7Ymxlc3NpbmdCb29zdH1gKTtcbiAgfSk7XG4gIHJldHVybiBhY2M7XG59LCBbXSk7XG4iLCJpbXBvcnQge1xuICBUQXNzaXN0REIsXG4gIFRDb2xvclR5cGUsXG4gIFRIZXJvLFxuICBUSGVyb0RCLFxuICBUTW92ZVR5cGUsXG4gIFRXZWFwb25UeXBlLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFNyYyB9IGZyb20gJy4vYmxlc3NpbmdzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhlcm8oXG4gIGhlcm9lczogeyBbaGVyb0lkOiBzdHJpbmddOiBUSGVybyB9LFxuICBoZXJvSWQ6IHN0cmluZ1xuKTogVEhlcm8ge1xuICBpZiAoaGVyb2VzW2hlcm9JZF0pIHtcbiAgICByZXR1cm4gaGVyb2VzW2hlcm9JZF07XG4gIH1cbiAgcmV0dXJuIGhlcm9lc1snRmVoJ107XG59XG5cbmV4cG9ydCB0eXBlIFRIZXJvT3B0aW9uID0ge1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJhcml0eTogbnVtYmVyW107XG4gIGNvbG9yVHlwZT86IFRDb2xvclR5cGU7XG4gIHdlYXBvblR5cGU/OiBUV2VhcG9uVHlwZTtcbiAgbW92ZVR5cGU/OiBUTW92ZVR5cGU7XG4gIGJzdD86IG51bWJlcjtcbiAgaHA/OiBudW1iZXI7XG4gIGF0az86IG51bWJlcjtcbiAgc3BkPzogbnVtYmVyO1xuICBkZWY/OiBudW1iZXI7XG4gIHJlcz86IG51bWJlcjtcbiAgcG9vbDogc3RyaW5nO1xuICBxdWVyeTogc3RyaW5nO1xuICBpc0RhbmNlcj86IGJvb2xlYW47XG4gIGhhc1Jlc3BsZW5kZW50PzogYm9vbGVhbjtcbiAgZmFjZVNyYzogc3RyaW5nO1xuICBmYWNlU3JjUj86IHN0cmluZyAvKiogcmVzcGxlbmRlbnQgaGVybyBmYWNlU3JjICovO1xuICBibGVzc2luZ1NyYz86IHN0cmluZztcbiAgaW5kZXg/OiBudW1iZXI7XG4gIG9yZGVyPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgVE1vdmVUeXBlRmlsdGVyVHlwZSA9IHtcbiAgW21vdmVUeXBlIGluIFRNb3ZlVHlwZV06IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBUV2VhcG9uVHlwZUZpbHRlclR5cGUgPSB7XG4gIFt3ZWFwb25UeXBlIGluIFRXZWFwb25UeXBlXTogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SGVyb09wdGlvbihoZXJvOiBUSGVybywgbm9TdGF0ID0gZmFsc2UpOiBUSGVyb09wdGlvbiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBuYW1lLFxuICAgIHJhcml0eSxcbiAgICBjb2xvclR5cGUsXG4gICAgd2VhcG9uVHlwZSxcbiAgICBtb3ZlVHlwZSxcbiAgICBibGVzc2luZyxcbiAgICBic3QsXG4gICAgc3RhdE1heCxcbiAgICBzdGF0cyxcbiAgICBwb29sLFxuICB9ID0gaGVybztcbiAgY29uc3QgZmFjZVNyYyA9IGAvZmFjZXMvJHtpZH0ucG5nYDtcbiAgY29uc3QgYmxlc3NpbmdTcmMgPSBnZXRTcmMoYmxlc3NpbmcpO1xuICBsZXQgaHAgPSBzdGF0c1s1XS5ocFsxXTtcbiAgbGV0IGF0ayA9IHN0YXRzWzVdLmF0a1sxXTtcbiAgbGV0IHNwZCA9IHN0YXRzWzVdLnNwZFsxXTtcbiAgbGV0IGRlZiA9IHN0YXRzWzVdLmRlZlsxXTtcbiAgbGV0IHJlcyA9IHN0YXRzWzVdLnJlc1sxXTtcbiAgY29uc3QgcXVlcnkgPSBgJHtpZC50b0xvd2VyQ2FzZSgpfXwke3RpdGxlfXwke25hbWV9YDtcbiAgaWYgKG5vU3RhdCkge1xuICAgIGhwID0gdW5kZWZpbmVkO1xuICAgIGF0ayA9IHVuZGVmaW5lZDtcbiAgICBzcGQgPSB1bmRlZmluZWQ7XG4gICAgZGVmID0gdW5kZWZpbmVkO1xuICAgIHJlcyA9IHVuZGVmaW5lZDtcbiAgfVxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIG5hbWUsXG4gICAgcmFyaXR5LFxuICAgIGNvbG9yVHlwZSxcbiAgICB3ZWFwb25UeXBlLFxuICAgIG1vdmVUeXBlLFxuICAgIGJzdDogTWF0aC5tYXgoYnN0IHx8IDAsIHN0YXRNYXggfHwgMCkgfHwgdW5kZWZpbmVkLFxuICAgIGhwLFxuICAgIGF0ayxcbiAgICBzcGQsXG4gICAgZGVmLFxuICAgIHJlcyxcbiAgICBwb29sLFxuICAgIHF1ZXJ5LFxuICAgIGZhY2VTcmMsXG4gICAgYmxlc3NpbmdTcmMsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0SGVyb0luZm8oe1xuICBoZXJvREIsXG4gIGFzc2lzdERCLFxuICByZXNwbGVuZGVudERCLFxuICBoZXJvSWQsXG4gIG5vU3RhdCxcbn06IHtcbiAgaGVyb0RCOiBUSGVyb0RCO1xuICBhc3Npc3REQjogVEFzc2lzdERCO1xuICByZXNwbGVuZGVudERCOiBzdHJpbmdbXTtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIG5vU3RhdD86IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IGhlcm8gPSBoZXJvREJbaGVyb0lkXTtcbiAgY29uc3QgZGFuY2VycyA9IGFzc2lzdERCLkRhbmNlLmV4Y2x1c2l2ZTtcbiAgY29uc3Qgb3B0aW9uID0gZXh0cmFjdEhlcm9PcHRpb24oaGVybywgbm9TdGF0KTtcbiAgb3B0aW9uLmlzRGFuY2VyID0gZGFuY2Vycy5pbmNsdWRlcyhoZXJvLmlkKTtcbiAgb3B0aW9uLmhhc1Jlc3BsZW5kZW50ID0gcmVzcGxlbmRlbnREQi5pbmNsdWRlcyhoZXJvLmlkKTtcbiAgb3B0aW9uLmZhY2VTcmNSID0gb3B0aW9uLmhhc1Jlc3BsZW5kZW50XG4gICAgPyBgL2ZhY2VzLyR7aGVyby5pZH0oUikucG5nYFxuICAgIDogb3B0aW9uLmZhY2VTcmM7XG4gIHJldHVybiBvcHRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlSGVyb09wdGlvbnMoe1xuICBoZXJvREIsXG4gIGFzc2lzdERCLFxuICByZXNwbGVuZGVudERCLFxuICBub1N0YXQsXG59OiB7XG4gIGhlcm9EQjogVEhlcm9EQjtcbiAgYXNzaXN0REI6IFRBc3Npc3REQjtcbiAgcmVzcGxlbmRlbnREQjogc3RyaW5nW107XG4gIG5vU3RhdD86IGJvb2xlYW47XG59KTogVEhlcm9PcHRpb25bXSB7XG4gIGNvbnN0IGRhbmNlcnMgPSBhc3Npc3REQi5EYW5jZS5leGNsdXNpdmU7XG4gIHJldHVybiBPYmplY3QudmFsdWVzKGhlcm9EQikubWFwPFRIZXJvT3B0aW9uPihcbiAgICAoaGVybzogVEhlcm8sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGV4dHJhY3RIZXJvT3B0aW9uKGhlcm8sIG5vU3RhdCk7XG4gICAgICBvcHRpb24uaXNEYW5jZXIgPSBkYW5jZXJzLmluY2x1ZGVzKGhlcm8uaWQpO1xuICAgICAgb3B0aW9uLmhhc1Jlc3BsZW5kZW50ID0gcmVzcGxlbmRlbnREQi5pbmNsdWRlcyhoZXJvLmlkKTtcbiAgICAgIG9wdGlvbi5mYWNlU3JjUiA9IG9wdGlvbi5oYXNSZXNwbGVuZGVudFxuICAgICAgICA/IGAvZmFjZXMvJHtoZXJvLmlkfShSKS5wbmdgXG4gICAgICAgIDogb3B0aW9uLmZhY2VTcmM7XG4gICAgICBvcHRpb24uaW5kZXggPSBpbmRleDtcbiAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZGVuQnlGaWx0ZXIoaGVybzogVEhlcm9PcHRpb24sIGZpbHRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiAhIWZpbHRlciAmJiAhaGVyby5xdWVyeS5pbmNsdWRlcyhmaWx0ZXIudG9Mb3dlckNhc2UoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeU1vdmVUeXBlKFxuICBoZXJvOiBUSGVyb09wdGlvbixcbiAgbW92ZVR5cGVGaWx0ZXI6IFRNb3ZlVHlwZUZpbHRlclR5cGVcbik6IGJvb2xlYW4ge1xuICBpZiAoIW1vdmVUeXBlRmlsdGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBoZXJvLmlkICE9PSAnRmVoJyAmJiAhbW92ZVR5cGVGaWx0ZXJbaGVyby5tb3ZlVHlwZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeVdlYXBvblR5cGUoXG4gIGhlcm86IFRIZXJvT3B0aW9uLFxuICB3ZWFwb25UeXBlRmlsdGVyOiBUV2VhcG9uVHlwZUZpbHRlclR5cGVcbik6IGJvb2xlYW4ge1xuICBpZiAoIXdlYXBvblR5cGVGaWx0ZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGhlcm8uaWQgIT09ICdGZWgnICYmICF3ZWFwb25UeXBlRmlsdGVyW2hlcm8ud2VhcG9uVHlwZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeUR1byhoZXJvOiBUSGVyb09wdGlvbiwgaXNEdW86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKCFpc0R1bykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaGVyby5wb29sICE9PSAnZHVvJyAmJiBoZXJvLnBvb2wgIT09ICdoYXJtb25pemVkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGRlbkJ5R3JhaWwoaGVybzogVEhlcm9PcHRpb24sIGlzR3JhaWw6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKCFpc0dyYWlsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBoZXJvLnBvb2wgIT09ICdncmFpbCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeURhbmNlcihoZXJvOiBUSGVyb09wdGlvbiwgaXNEYW5jZXI6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKCFpc0RhbmNlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gIWhlcm8uaXNEYW5jZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeVJhcml0eTUoaGVybzogVEhlcm9PcHRpb24sIGlzUmFyaXR5NTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICBpZiAoaXNSYXJpdHk1KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChoZXJvLmlkID09PSAnRmVoJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaGVyby5yYXJpdHkubGVuZ3RoID09PSAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZGVuQnlSYXJpdHk0KGhlcm86IFRIZXJvT3B0aW9uLCBpc1Jhcml0eTQ6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKGlzUmFyaXR5NCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaGVyby5pZCA9PT0gJ0ZlaCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGhlcm8ucmFyaXR5Lmxlbmd0aCA+IDE7XG59XG5cbnR5cGUgVFNob3VsZEJlSGlkZGVuT3B0aW9ucyA9IHtcbiAgZmlsdGVyPzogc3RyaW5nO1xuICBtb3ZlVHlwZUZpbHRlcjogVE1vdmVUeXBlRmlsdGVyVHlwZTtcbiAgd2VhcG9uVHlwZUZpbHRlcjogVFdlYXBvblR5cGVGaWx0ZXJUeXBlO1xuICBpc1Jhcml0eTU/OiBib29sZWFuO1xuICBpc1Jhcml0eTQ/OiBib29sZWFuO1xuICBpc0R1bz86IGJvb2xlYW47XG4gIGlzR3JhaWw/OiBib29sZWFuO1xuICBpc0RhbmNlcj86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkQmVIaWRkZW4oXG4gIGhlcm86IFRIZXJvT3B0aW9uLFxuICB7XG4gICAgZmlsdGVyLFxuICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgaXNSYXJpdHk1LFxuICAgIGlzUmFyaXR5NCxcbiAgICBpc0R1byxcbiAgICBpc0dyYWlsLFxuICAgIGlzRGFuY2VyLFxuICB9OiBUU2hvdWxkQmVIaWRkZW5PcHRpb25zXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBoaWRkZW5CeUZpbHRlcihoZXJvLCBmaWx0ZXIpIHx8XG4gICAgaGlkZGVuQnlNb3ZlVHlwZShoZXJvLCBtb3ZlVHlwZUZpbHRlcikgfHxcbiAgICBoaWRkZW5CeVdlYXBvblR5cGUoaGVybywgd2VhcG9uVHlwZUZpbHRlcikgfHxcbiAgICBoaWRkZW5CeUR1byhoZXJvLCBpc0R1bykgfHxcbiAgICBoaWRkZW5CeUdyYWlsKGhlcm8sIGlzR3JhaWwpIHx8XG4gICAgaGlkZGVuQnlEYW5jZXIoaGVybywgaXNEYW5jZXIpIHx8XG4gICAgaGlkZGVuQnlSYXJpdHk1KGhlcm8sIGlzUmFyaXR5NSkgfHxcbiAgICBoaWRkZW5CeVJhcml0eTQoaGVybywgaXNSYXJpdHk0KVxuICApO1xufVxuIiwiaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XG5cbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUJhc2VQYXRoVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFwdWJsaWNSdW50aW1lQ29uZmlnLmJhc2VQYXRoKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICByZXR1cm4gYCR7cHVibGljUnVudGltZUNvbmZpZy5iYXNlUGF0aH0ke3VybH1gO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgQW1wU3RhdGVDb250ZXh0OiBSZWFjdC5Db250ZXh0PGFueT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBBbXBTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSAnQW1wU3RhdGVDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5BbXBNb2RlKHtcbiAgYW1wRmlyc3QgPSBmYWxzZSxcbiAgaHlicmlkID0gZmFsc2UsXG4gIGhhc1F1ZXJ5ID0gZmFsc2UsXG59ID0ge30pOiBib29sZWFuIHtcbiAgcmV0dXJuIGFtcEZpcnN0IHx8IChoeWJyaWQgJiYgaGFzUXVlcnkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbXAoKTogYm9vbGVhbiB7XG4gIC8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbiAgcmV0dXJuIGlzSW5BbXBNb2RlKFJlYWN0LnVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KSlcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEhlYWRNYW5hZ2VyQ29udGV4dDogUmVhY3QuQ29udGV4dDx7XG4gIHVwZGF0ZUhlYWQ/OiAoc3RhdGU6IGFueSkgPT4gdm9pZFxuICBtb3VudGVkSW5zdGFuY2VzPzogYW55XG4gIHVwZGF0ZVNjcmlwdHM/OiAoc3RhdGU6IGFueSkgPT4gdm9pZFxuICBzY3JpcHRzPzogYW55XG59PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEhlYWRNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdIZWFkTWFuYWdlckNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVmZmVjdCBmcm9tICcuL3NpZGUtZWZmZWN0J1xuaW1wb3J0IHsgQW1wU3RhdGVDb250ZXh0IH0gZnJvbSAnLi9hbXAtY29udGV4dCdcbmltcG9ydCB7IEhlYWRNYW5hZ2VyQ29udGV4dCB9IGZyb20gJy4vaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgeyBpc0luQW1wTW9kZSB9IGZyb20gJy4vYW1wJ1xuXG50eXBlIFdpdGhJbkFtcE1vZGUgPSB7XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZSA9IGZhbHNlKTogSlNYLkVsZW1lbnRbXSB7XG4gIGNvbnN0IGhlYWQgPSBbPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5dXG4gIGlmICghaW5BbXBNb2RlKSB7XG4gICAgaGVhZC5wdXNoKDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPilcbiAgfVxuICByZXR1cm4gaGVhZFxufVxuXG5mdW5jdGlvbiBvbmx5UmVhY3RFbGVtZW50KFxuICBsaXN0OiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIGNoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4pOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4ge1xuICAvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGxpc3RcbiAgfVxuICAvLyBBZGRzIHN1cHBvcnQgZm9yIFJlYWN0LkZyYWdtZW50XG4gIGlmIChjaGlsZC50eXBlID09PSBSZWFjdC5GcmFnbWVudCkge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdChcbiAgICAgIFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZShcbiAgICAgICAgKFxuICAgICAgICAgIGZyYWdtZW50TGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgICAgICAgIGZyYWdtZW50Q2hpbGQ6IFJlYWN0LlJlYWN0Q2hpbGRcbiAgICAgICAgKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+ID0+IHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgIHR5cGVvZiBmcmFnbWVudENoaWxkID09PSAnbnVtYmVyJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKVxuICAgICAgICB9LFxuICAgICAgICBbXVxuICAgICAgKVxuICAgIClcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpXG59XG5cbmNvbnN0IE1FVEFUWVBFUyA9IFsnbmFtZScsICdodHRwRXF1aXYnLCAnY2hhclNldCcsICdpdGVtUHJvcCddXG5cbi8qXG4gcmV0dXJucyBhIGZ1bmN0aW9uIGZvciBmaWx0ZXJpbmcgaGVhZCBjaGlsZCBlbGVtZW50c1xuIHdoaWNoIHNob3VsZG4ndCBiZSBkdXBsaWNhdGVkLCBsaWtlIDx0aXRsZS8+XG4gQWxzbyBhZGRzIHN1cHBvcnQgZm9yIGRlZHVwbGljYXRlZCBga2V5YCBwcm9wZXJ0aWVzXG4qL1xuZnVuY3Rpb24gdW5pcXVlKCkge1xuICBjb25zdCBrZXlzID0gbmV3IFNldCgpXG4gIGNvbnN0IHRhZ3MgPSBuZXcgU2V0KClcbiAgY29uc3QgbWV0YVR5cGVzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFDYXRlZ29yaWVzOiB7IFttZXRhdHlwZTogc3RyaW5nXTogU2V0PHN0cmluZz4gfSA9IHt9XG5cbiAgcmV0dXJuIChoOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgIGxldCBpc1VuaXF1ZSA9IHRydWVcbiAgICBsZXQgaGFzS2V5ID0gZmFsc2VcblxuICAgIGlmIChoLmtleSAmJiB0eXBlb2YgaC5rZXkgIT09ICdudW1iZXInICYmIGgua2V5LmluZGV4T2YoJyQnKSA+IDApIHtcbiAgICAgIGhhc0tleSA9IHRydWVcbiAgICAgIGNvbnN0IGtleSA9IGgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSArIDEpXG4gICAgICBpZiAoa2V5cy5oYXMoa2V5KSkge1xuICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXlzLmFkZChrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgIHN3aXRjaCAoaC50eXBlKSB7XG4gICAgICBjYXNlICd0aXRsZSc6XG4gICAgICBjYXNlICdiYXNlJzpcbiAgICAgICAgaWYgKHRhZ3MuaGFzKGgudHlwZSkpIHtcbiAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFncy5hZGQoaC50eXBlKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtZXRhJzpcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1FVEFUWVBFUy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNvbnN0IG1ldGF0eXBlID0gTUVUQVRZUEVTW2ldXG4gICAgICAgICAgaWYgKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSkgY29udGludWVcblxuICAgICAgICAgIGlmIChtZXRhdHlwZSA9PT0gJ2NoYXJTZXQnKSB7XG4gICAgICAgICAgICBpZiAobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWV0YVR5cGVzLmFkZChtZXRhdHlwZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoLnByb3BzW21ldGF0eXBlXVxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSB8fCBuZXcgU2V0KClcbiAgICAgICAgICAgIGlmICgobWV0YXR5cGUgIT09ICduYW1lJyB8fCAhaGFzS2V5KSAmJiBjYXRlZ29yaWVzLmhhcyhjYXRlZ29yeSkpIHtcbiAgICAgICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIG1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXSA9IGNhdGVnb3JpZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNVbmlxdWVcbiAgfVxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovXG5mdW5jdGlvbiByZWR1Y2VDb21wb25lbnRzKFxuICBoZWFkRWxlbWVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgcHJvcHM6IFdpdGhJbkFtcE1vZGVcbikge1xuICByZXR1cm4gaGVhZEVsZW1lbnRzXG4gICAgLnJlZHVjZShcbiAgICAgIChsaXN0OiBSZWFjdC5SZWFjdENoaWxkW10sIGhlYWRFbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PikgPT4ge1xuICAgICAgICBjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShcbiAgICAgICAgICBoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlblxuICAgICAgICApXG4gICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKVxuICAgICAgfSxcbiAgICAgIFtdXG4gICAgKVxuICAgIC5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCwgW10pXG4gICAgLnJldmVyc2UoKVxuICAgIC5jb25jYXQoZGVmYXVsdEhlYWQocHJvcHMuaW5BbXBNb2RlKSlcbiAgICAuZmlsdGVyKHVuaXF1ZSgpKVxuICAgIC5yZXZlcnNlKClcbiAgICAubWFwKChjOiBSZWFjdC5SZWFjdEVsZW1lbnQ8YW55PiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBjLmtleSB8fCBpXG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnICYmXG4gICAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyAmJlxuICAgICAgICAhcHJvcHMuaW5BbXBNb2RlXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGMudHlwZSA9PT0gJ2xpbmsnICYmXG4gICAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgICAgLy8gVE9ETyhwcmF0ZWVrYmhAKTogUmVwbGFjZSB0aGlzIHdpdGggY29uc3QgZnJvbSBgY29uc3RhbnRzYCB3aGVuIHRoZSB0cmVlIHNoYWtpbmcgd29ya3MuXG4gICAgICAgICAgW1xuICAgICAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzJyxcbiAgICAgICAgICAgICdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nLFxuICAgICAgICAgIF0uc29tZSgodXJsKSA9PiBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddXG4gICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuXG4gICAgICAgICAgLy8gQWRkIHRoaXMgYXR0cmlidXRlIHRvIG1ha2UgaXQgZWFzeSB0byBpZGVudGlmeSBvcHRpbWl6ZWQgdGFnc1xuICAgICAgICAgIG5ld1Byb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddID0gdHJ1ZVxuXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCBuZXdQcm9wcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCB7IGtleSB9KVxuICAgIH0pXG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9cbmZ1bmN0aW9uIEhlYWQoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSkge1xuICBjb25zdCBhbXBTdGF0ZSA9IHVzZUNvbnRleHQoQW1wU3RhdGVDb250ZXh0KVxuICBjb25zdCBoZWFkTWFuYWdlciA9IHVzZUNvbnRleHQoSGVhZE1hbmFnZXJDb250ZXh0KVxuICByZXR1cm4gKFxuICAgIDxFZmZlY3RcbiAgICAgIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlPXtyZWR1Y2VDb21wb25lbnRzfVxuICAgICAgaGVhZE1hbmFnZXI9e2hlYWRNYW5hZ2VyfVxuICAgICAgaW5BbXBNb2RlPXtpc0luQW1wTW9kZShhbXBTdGF0ZSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRWZmZWN0PlxuICApXG59XG5cbi8vIFRPRE86IFJlbW92ZSBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5IZWFkLnJld2luZCA9ICgpID0+IHt9XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRcbiIsImxldCBydW50aW1lQ29uZmlnOiBhbnlcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICByZXR1cm4gcnVudGltZUNvbmZpZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29uZmlnKGNvbmZpZ1ZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgcnVudGltZUNvbmZpZyA9IGNvbmZpZ1ZhbHVlXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxudHlwZSBTdGF0ZSA9IEpTWC5FbGVtZW50W10gfCB1bmRlZmluZWRcblxudHlwZSBTaWRlRWZmZWN0UHJvcHMgPSB7XG4gIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiA8VD4oXG4gICAgY29tcG9uZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgIHByb3BzOiBUXG4gICkgPT4gU3RhdGVcbiAgaGFuZGxlU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGhlYWRNYW5hZ2VyOiBhbnlcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+IHtcbiAgcHJpdmF0ZSBfaGFzSGVhZE1hbmFnZXI6IGJvb2xlYW5cblxuICBlbWl0Q2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKFxuICAgICAgICB0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFxuICAgICAgICAgIFsuLi50aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNdLFxuICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLl9oYXNIZWFkTWFuYWdlciA9XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyICYmIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc1xuXG4gICAgaWYgKGlzU2VydmVyICYmIHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHJ1bGVzREIgZnJvbSAnQC9mZWhkYi9ydWxlSGFzaC5qc29uJztcbmltcG9ydCBoZXJvREIgZnJvbSAnQC9mZWhkYi9oZXJvZXMuanNvbic7XG5pbXBvcnQgYXNzaXN0REIgZnJvbSAnQC9mZWhkYi9hc3Npc3QuanNvbic7XG5pbXBvcnQgcmVzcGxlbmRlbnREQiBmcm9tICdAL2ZlaGRiL3Jlc3BsZW5kZW50Lmpzb24nO1xuaW1wb3J0IHsgRkVIREIsIFRGRUhEQlR5cGUgfSBmcm9tICdAL2FwcC9wYWdlL0ZFSERCJztcbmltcG9ydCBSYW5rZXIgZnJvbSAnQC9hcHAvcGFnZS9SYW5rZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYjoge1xuICAgICAgICBydWxlc0RCLFxuICAgICAgICBoZXJvREIsXG4gICAgICAgIGFzc2lzdERCLFxuICAgICAgICByZXNwbGVuZGVudERCLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufTtcblxuZnVuY3Rpb24gUmFua2VyUGFnZSh7IGRiIH06IHsgZGI6IFRGRUhEQlR5cGUgfSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEZFSERCLlByb3ZpZGVyIHZhbHVlPXtkYn0+XG4gICAgICA8UmFua2VyIC8+XG4gICAgPC9GRUhEQi5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFua2VyUGFnZTtcbiIsImZ1bmN0aW9uIG4obil7Zm9yKHZhciByPWFyZ3VtZW50cy5sZW5ndGgsdD1BcnJheShyPjE/ci0xOjApLGU9MTtlPHI7ZSsrKXRbZS0xXT1hcmd1bWVudHNbZV07aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVil7dmFyIGk9WVtuXSxvPWk/XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KG51bGwsdCk6aTpcInVua25vd24gZXJyb3IgbnI6IFwiK247dGhyb3cgRXJyb3IoXCJbSW1tZXJdIFwiK28pfXRocm93IEVycm9yKFwiW0ltbWVyXSBtaW5pZmllZCBlcnJvciBucjogXCIrbisodC5sZW5ndGg/XCIgXCIrdC5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiJ1wiK24rXCInXCJ9KSkuam9pbihcIixcIik6XCJcIikrXCIuIEZpbmQgdGhlIGZ1bGwgZXJyb3IgYXQ6IGh0dHBzOi8vYml0Lmx5LzNjWEVLV2ZcIil9ZnVuY3Rpb24gcihuKXtyZXR1cm4hIW4mJiEhbltRXX1mdW5jdGlvbiB0KG4pe3JldHVybiEhbiYmKGZ1bmN0aW9uKG4pe2lmKCFufHxcIm9iamVjdFwiIT10eXBlb2YgbilyZXR1cm4hMTt2YXIgcj1PYmplY3QuZ2V0UHJvdG90eXBlT2Yobik7aWYobnVsbD09PXIpcmV0dXJuITA7dmFyIHQ9T2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwocixcImNvbnN0cnVjdG9yXCIpJiZyLmNvbnN0cnVjdG9yO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJkZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwodCk9PT1afShuKXx8QXJyYXkuaXNBcnJheShuKXx8ISFuW0xdfHwhIW4uY29uc3RydWN0b3JbTF18fHMobil8fHYobikpfWZ1bmN0aW9uIGUodCl7cmV0dXJuIHIodCl8fG4oMjMsdCksdFtRXS50fWZ1bmN0aW9uIGkobixyLHQpe3ZvaWQgMD09PXQmJih0PSExKSwwPT09byhuKT8odD9PYmplY3Qua2V5czpubikobikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dCYmXCJzeW1ib2xcIj09dHlwZW9mIGV8fHIoZSxuW2VdLG4pfSkpOm4uZm9yRWFjaCgoZnVuY3Rpb24odCxlKXtyZXR1cm4gcihlLHQsbil9KSl9ZnVuY3Rpb24gbyhuKXt2YXIgcj1uW1FdO3JldHVybiByP3IuaT4zP3IuaS00OnIuaTpBcnJheS5pc0FycmF5KG4pPzE6cyhuKT8yOnYobik/MzowfWZ1bmN0aW9uIHUobixyKXtyZXR1cm4gMj09PW8obik/bi5oYXMocik6T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4scil9ZnVuY3Rpb24gYShuLHIpe3JldHVybiAyPT09byhuKT9uLmdldChyKTpuW3JdfWZ1bmN0aW9uIGYobixyLHQpe3ZhciBlPW8obik7Mj09PWU/bi5zZXQocix0KTozPT09ZT8obi5kZWxldGUociksbi5hZGQodCkpOm5bcl09dH1mdW5jdGlvbiBjKG4scil7cmV0dXJuIG49PT1yPzAhPT1ufHwxL249PTEvcjpuIT1uJiZyIT1yfWZ1bmN0aW9uIHMobil7cmV0dXJuIFgmJm4gaW5zdGFuY2VvZiBNYXB9ZnVuY3Rpb24gdihuKXtyZXR1cm4gcSYmbiBpbnN0YW5jZW9mIFNldH1mdW5jdGlvbiBwKG4pe3JldHVybiBuLm98fG4udH1mdW5jdGlvbiBsKG4pe2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pO3ZhciByPXJuKG4pO2RlbGV0ZSByW1FdO2Zvcih2YXIgdD1ubihyKSxlPTA7ZTx0Lmxlbmd0aDtlKyspe3ZhciBpPXRbZV0sbz1yW2ldOyExPT09by53cml0YWJsZSYmKG8ud3JpdGFibGU9ITAsby5jb25maWd1cmFibGU9ITApLChvLmdldHx8by5zZXQpJiYocltpXT17Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLGVudW1lcmFibGU6by5lbnVtZXJhYmxlLHZhbHVlOm5baV19KX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2Yobikscil9ZnVuY3Rpb24gZChuLGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT0hMSkseShuKXx8cihuKXx8IXQobik/bjoobyhuKT4xJiYobi5zZXQ9bi5hZGQ9bi5jbGVhcj1uLmRlbGV0ZT1oKSxPYmplY3QuZnJlZXplKG4pLGUmJmkobiwoZnVuY3Rpb24obixyKXtyZXR1cm4gZChyLCEwKX0pLCEwKSxuKX1mdW5jdGlvbiBoKCl7bigyKX1mdW5jdGlvbiB5KG4pe3JldHVybiBudWxsPT1ufHxcIm9iamVjdFwiIT10eXBlb2Ygbnx8T2JqZWN0LmlzRnJvemVuKG4pfWZ1bmN0aW9uIGIocil7dmFyIHQ9dG5bcl07cmV0dXJuIHR8fG4oMTgsciksdH1mdW5jdGlvbiBtKG4scil7dG5bbl18fCh0bltuXT1yKX1mdW5jdGlvbiBfKCl7cmV0dXJuXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8VXx8bigwKSxVfWZ1bmN0aW9uIGoobixyKXtyJiYoYihcIlBhdGNoZXNcIiksbi51PVtdLG4ucz1bXSxuLnY9cil9ZnVuY3Rpb24gZyhuKXtPKG4pLG4ucC5mb3JFYWNoKFMpLG4ucD1udWxsfWZ1bmN0aW9uIE8obil7bj09PVUmJihVPW4ubCl9ZnVuY3Rpb24gdyhuKXtyZXR1cm4gVT17cDpbXSxsOlUsaDpuLG06ITAsXzowfX1mdW5jdGlvbiBTKG4pe3ZhciByPW5bUV07MD09PXIuaXx8MT09PXIuaT9yLmooKTpyLmc9ITB9ZnVuY3Rpb24gUChyLGUpe2UuXz1lLnAubGVuZ3RoO3ZhciBpPWUucFswXSxvPXZvaWQgMCE9PXImJnIhPT1pO3JldHVybiBlLmguT3x8YihcIkVTNVwiKS5TKGUscixvKSxvPyhpW1FdLlAmJihnKGUpLG4oNCkpLHQocikmJihyPU0oZSxyKSxlLmx8fHgoZSxyKSksZS51JiZiKFwiUGF0Y2hlc1wiKS5NKGlbUV0scixlLnUsZS5zKSk6cj1NKGUsaSxbXSksZyhlKSxlLnUmJmUudihlLnUsZS5zKSxyIT09SD9yOnZvaWQgMH1mdW5jdGlvbiBNKG4scix0KXtpZih5KHIpKXJldHVybiByO3ZhciBlPXJbUV07aWYoIWUpcmV0dXJuIGkociwoZnVuY3Rpb24oaSxvKXtyZXR1cm4gQShuLGUscixpLG8sdCl9KSwhMCkscjtpZihlLkEhPT1uKXJldHVybiByO2lmKCFlLlApcmV0dXJuIHgobixlLnQsITApLGUudDtpZighZS5JKXtlLkk9ITAsZS5BLl8tLTt2YXIgbz00PT09ZS5pfHw1PT09ZS5pP2Uubz1sKGUuayk6ZS5vO2koMz09PWUuaT9uZXcgU2V0KG8pOm8sKGZ1bmN0aW9uKHIsaSl7cmV0dXJuIEEobixlLG8scixpLHQpfSkpLHgobixvLCExKSx0JiZuLnUmJmIoXCJQYXRjaGVzXCIpLlIoZSx0LG4udSxuLnMpfXJldHVybiBlLm99ZnVuY3Rpb24gQShlLGksbyxhLGMscyl7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmYz09PW8mJm4oNSkscihjKSl7dmFyIHY9TShlLGMscyYmaSYmMyE9PWkuaSYmIXUoaS5ELGEpP3MuY29uY2F0KGEpOnZvaWQgMCk7aWYoZihvLGEsdiksIXIodikpcmV0dXJuO2UubT0hMX1pZih0KGMpJiYheShjKSl7aWYoIWUuaC5GJiZlLl88MSlyZXR1cm47TShlLGMpLGkmJmkuQS5sfHx4KGUsYyl9fWZ1bmN0aW9uIHgobixyLHQpe3ZvaWQgMD09PXQmJih0PSExKSxuLmguRiYmbi5tJiZkKHIsdCl9ZnVuY3Rpb24geihuLHIpe3ZhciB0PW5bUV07cmV0dXJuKHQ/cCh0KTpuKVtyXX1mdW5jdGlvbiBJKG4scil7aWYociBpbiBuKWZvcih2YXIgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2Yobik7dDspe3ZhciBlPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxyKTtpZihlKXJldHVybiBlO3Q9T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpfX1mdW5jdGlvbiBrKG4pe24uUHx8KG4uUD0hMCxuLmwmJmsobi5sKSl9ZnVuY3Rpb24gRShuKXtuLm98fChuLm89bChuLnQpKX1mdW5jdGlvbiBSKG4scix0KXt2YXIgZT1zKHIpP2IoXCJNYXBTZXRcIikuTihyLHQpOnYocik/YihcIk1hcFNldFwiKS5UKHIsdCk6bi5PP2Z1bmN0aW9uKG4scil7dmFyIHQ9QXJyYXkuaXNBcnJheShuKSxlPXtpOnQ/MTowLEE6cj9yLkE6XygpLFA6ITEsSTohMSxEOnt9LGw6cix0Om4sazpudWxsLG86bnVsbCxqOm51bGwsQzohMX0saT1lLG89ZW47dCYmKGk9W2VdLG89b24pO3ZhciB1PVByb3h5LnJldm9jYWJsZShpLG8pLGE9dS5yZXZva2UsZj11LnByb3h5O3JldHVybiBlLms9ZixlLmo9YSxmfShyLHQpOmIoXCJFUzVcIikuSihyLHQpO3JldHVybih0P3QuQTpfKCkpLnAucHVzaChlKSxlfWZ1bmN0aW9uIEQoZSl7cmV0dXJuIHIoZSl8fG4oMjIsZSksZnVuY3Rpb24gbihyKXtpZighdChyKSlyZXR1cm4gcjt2YXIgZSx1PXJbUV0sYz1vKHIpO2lmKHUpe2lmKCF1LlAmJih1Lmk8NHx8IWIoXCJFUzVcIikuSyh1KSkpcmV0dXJuIHUudDt1Lkk9ITAsZT1GKHIsYyksdS5JPSExfWVsc2UgZT1GKHIsYyk7cmV0dXJuIGkoZSwoZnVuY3Rpb24ocix0KXt1JiZhKHUudCxyKT09PXR8fGYoZSxyLG4odCkpfSkpLDM9PT1jP25ldyBTZXQoZSk6ZX0oZSl9ZnVuY3Rpb24gRihuLHIpe3N3aXRjaChyKXtjYXNlIDI6cmV0dXJuIG5ldyBNYXAobik7Y2FzZSAzOnJldHVybiBBcnJheS5mcm9tKG4pfXJldHVybiBsKG4pfWZ1bmN0aW9uIE4oKXtmdW5jdGlvbiB0KG4scil7dmFyIHQ9c1tuXTtyZXR1cm4gdD90LmVudW1lcmFibGU9cjpzW25dPXQ9e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOnIsZ2V0OmZ1bmN0aW9uKCl7dmFyIHI9dGhpc1tRXTtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZmKHIpLGVuLmdldChyLG4pfSxzZXQ6ZnVuY3Rpb24ocil7dmFyIHQ9dGhpc1tRXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZmKHQpLGVuLnNldCh0LG4scil9fSx0fWZ1bmN0aW9uIGUobil7Zm9yKHZhciByPW4ubGVuZ3RoLTE7cj49MDtyLS0pe3ZhciB0PW5bcl1bUV07aWYoIXQuUClzd2l0Y2godC5pKXtjYXNlIDU6YSh0KSYmayh0KTticmVhaztjYXNlIDQ6byh0KSYmayh0KX19fWZ1bmN0aW9uIG8obil7Zm9yKHZhciByPW4udCx0PW4uayxlPW5uKHQpLGk9ZS5sZW5ndGgtMTtpPj0wO2ktLSl7dmFyIG89ZVtpXTtpZihvIT09USl7dmFyIGE9cltvXTtpZih2b2lkIDA9PT1hJiYhdShyLG8pKXJldHVybiEwO3ZhciBmPXRbb10scz1mJiZmW1FdO2lmKHM/cy50IT09YTohYyhmLGEpKXJldHVybiEwfX12YXIgdj0hIXJbUV07cmV0dXJuIGUubGVuZ3RoIT09bm4ocikubGVuZ3RoKyh2PzA6MSl9ZnVuY3Rpb24gYShuKXt2YXIgcj1uLms7aWYoci5sZW5ndGghPT1uLnQubGVuZ3RoKXJldHVybiEwO3ZhciB0PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocixyLmxlbmd0aC0xKTtyZXR1cm4hKCF0fHx0LmdldCl9ZnVuY3Rpb24gZihyKXtyLmcmJm4oMyxKU09OLnN0cmluZ2lmeShwKHIpKSl9dmFyIHM9e307bShcIkVTNVwiLHtKOmZ1bmN0aW9uKG4scil7dmFyIGU9QXJyYXkuaXNBcnJheShuKSxpPWZ1bmN0aW9uKG4scil7aWYobil7Zm9yKHZhciBlPUFycmF5KHIubGVuZ3RoKSxpPTA7aTxyLmxlbmd0aDtpKyspT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJcIitpLHQoaSwhMCkpO3JldHVybiBlfXZhciBvPXJuKHIpO2RlbGV0ZSBvW1FdO2Zvcih2YXIgdT1ubihvKSxhPTA7YTx1Lmxlbmd0aDthKyspe3ZhciBmPXVbYV07b1tmXT10KGYsbnx8ISFvW2ZdLmVudW1lcmFibGUpfXJldHVybiBPYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZihyKSxvKX0oZSxuKSxvPXtpOmU/NTo0LEE6cj9yLkE6XygpLFA6ITEsSTohMSxEOnt9LGw6cix0Om4sazppLG86bnVsbCxnOiExLEM6ITF9O3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoaSxRLHt2YWx1ZTpvLHdyaXRhYmxlOiEwfSksaX0sUzpmdW5jdGlvbihuLHQsbyl7bz9yKHQpJiZ0W1FdLkE9PT1uJiZlKG4ucCk6KG4udSYmZnVuY3Rpb24gbihyKXtpZihyJiZcIm9iamVjdFwiPT10eXBlb2Ygcil7dmFyIHQ9cltRXTtpZih0KXt2YXIgZT10LnQsbz10LmssZj10LkQsYz10Lmk7aWYoND09PWMpaShvLChmdW5jdGlvbihyKXtyIT09USYmKHZvaWQgMCE9PWVbcl18fHUoZSxyKT9mW3JdfHxuKG9bcl0pOihmW3JdPSEwLGsodCkpKX0pKSxpKGUsKGZ1bmN0aW9uKG4pe3ZvaWQgMCE9PW9bbl18fHUobyxuKXx8KGZbbl09ITEsayh0KSl9KSk7ZWxzZSBpZig1PT09Yyl7aWYoYSh0KSYmKGsodCksZi5sZW5ndGg9ITApLG8ubGVuZ3RoPGUubGVuZ3RoKWZvcih2YXIgcz1vLmxlbmd0aDtzPGUubGVuZ3RoO3MrKylmW3NdPSExO2Vsc2UgZm9yKHZhciB2PWUubGVuZ3RoO3Y8by5sZW5ndGg7disrKWZbdl09ITA7Zm9yKHZhciBwPU1hdGgubWluKG8ubGVuZ3RoLGUubGVuZ3RoKSxsPTA7bDxwO2wrKyl2b2lkIDA9PT1mW2xdJiZuKG9bbF0pfX19fShuLnBbMF0pLGUobi5wKSl9LEs6ZnVuY3Rpb24obil7cmV0dXJuIDQ9PT1uLmk/byhuKTphKG4pfX0pfWZ1bmN0aW9uIFQoKXtmdW5jdGlvbiBlKG4pe2lmKCF0KG4pKXJldHVybiBuO2lmKEFycmF5LmlzQXJyYXkobikpcmV0dXJuIG4ubWFwKGUpO2lmKHMobikpcmV0dXJuIG5ldyBNYXAoQXJyYXkuZnJvbShuLmVudHJpZXMoKSkubWFwKChmdW5jdGlvbihuKXtyZXR1cm5bblswXSxlKG5bMV0pXX0pKSk7aWYodihuKSlyZXR1cm4gbmV3IFNldChBcnJheS5mcm9tKG4pLm1hcChlKSk7dmFyIHI9T2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YobikpO2Zvcih2YXIgaSBpbiBuKXJbaV09ZShuW2ldKTtyZXR1cm4gcn1mdW5jdGlvbiBmKG4pe3JldHVybiByKG4pP2Uobik6bn12YXIgYz1cImFkZFwiO20oXCJQYXRjaGVzXCIseyQ6ZnVuY3Rpb24ocix0KXtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtmb3IodmFyIGk9dC5wYXRoLHU9dC5vcCxmPXIscz0wO3M8aS5sZW5ndGgtMTtzKyspe3ZhciB2PW8oZikscD1pW3NdOzAhPT12JiYxIT09dnx8XCJfX3Byb3RvX19cIiE9PXAmJlwiY29uc3RydWN0b3JcIiE9PXB8fG4oMjQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJlwicHJvdG90eXBlXCI9PT1wJiZuKDI0KSxcIm9iamVjdFwiIT10eXBlb2YoZj1hKGYscCkpJiZuKDE1LGkuam9pbihcIi9cIikpfXZhciBsPW8oZiksZD1lKHQudmFsdWUpLGg9aVtpLmxlbmd0aC0xXTtzd2l0Y2godSl7Y2FzZVwicmVwbGFjZVwiOnN3aXRjaChsKXtjYXNlIDI6cmV0dXJuIGYuc2V0KGgsZCk7Y2FzZSAzOm4oMTYpO2RlZmF1bHQ6cmV0dXJuIGZbaF09ZH1jYXNlIGM6c3dpdGNoKGwpe2Nhc2UgMTpyZXR1cm4gZi5zcGxpY2UoaCwwLGQpO2Nhc2UgMjpyZXR1cm4gZi5zZXQoaCxkKTtjYXNlIDM6cmV0dXJuIGYuYWRkKGQpO2RlZmF1bHQ6cmV0dXJuIGZbaF09ZH1jYXNlXCJyZW1vdmVcIjpzd2l0Y2gobCl7Y2FzZSAxOnJldHVybiBmLnNwbGljZShoLDEpO2Nhc2UgMjpyZXR1cm4gZi5kZWxldGUoaCk7Y2FzZSAzOnJldHVybiBmLmRlbGV0ZSh0LnZhbHVlKTtkZWZhdWx0OnJldHVybiBkZWxldGUgZltoXX1kZWZhdWx0Om4oMTcsdSl9fSkpLHJ9LFI6ZnVuY3Rpb24obixyLHQsZSl7c3dpdGNoKG4uaSl7Y2FzZSAwOmNhc2UgNDpjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKG4scix0LGUpe3ZhciBvPW4udCxzPW4ubztpKG4uRCwoZnVuY3Rpb24obixpKXt2YXIgdj1hKG8sbikscD1hKHMsbiksbD1pP3UobyxuKT9cInJlcGxhY2VcIjpjOlwicmVtb3ZlXCI7aWYodiE9PXB8fFwicmVwbGFjZVwiIT09bCl7dmFyIGQ9ci5jb25jYXQobik7dC5wdXNoKFwicmVtb3ZlXCI9PT1sP3tvcDpsLHBhdGg6ZH06e29wOmwscGF0aDpkLHZhbHVlOnB9KSxlLnB1c2gobD09PWM/e29wOlwicmVtb3ZlXCIscGF0aDpkfTpcInJlbW92ZVwiPT09bD97b3A6YyxwYXRoOmQsdmFsdWU6Zih2KX06e29wOlwicmVwbGFjZVwiLHBhdGg6ZCx2YWx1ZTpmKHYpfSl9fSkpfShuLHIsdCxlKTtjYXNlIDU6Y2FzZSAxOnJldHVybiBmdW5jdGlvbihuLHIsdCxlKXt2YXIgaT1uLnQsbz1uLkQsdT1uLm87aWYodS5sZW5ndGg8aS5sZW5ndGgpe3ZhciBhPVt1LGldO2k9YVswXSx1PWFbMV07dmFyIHM9W2UsdF07dD1zWzBdLGU9c1sxXX1mb3IodmFyIHY9MDt2PGkubGVuZ3RoO3YrKylpZihvW3ZdJiZ1W3ZdIT09aVt2XSl7dmFyIHA9ci5jb25jYXQoW3ZdKTt0LnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKHVbdl0pfSksZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnAsdmFsdWU6ZihpW3ZdKX0pfWZvcih2YXIgbD1pLmxlbmd0aDtsPHUubGVuZ3RoO2wrKyl7dmFyIGQ9ci5jb25jYXQoW2xdKTt0LnB1c2goe29wOmMscGF0aDpkLHZhbHVlOmYodVtsXSl9KX1pLmxlbmd0aDx1Lmxlbmd0aCYmZS5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOnIuY29uY2F0KFtcImxlbmd0aFwiXSksdmFsdWU6aS5sZW5ndGh9KX0obixyLHQsZSk7Y2FzZSAzOnJldHVybiBmdW5jdGlvbihuLHIsdCxlKXt2YXIgaT1uLnQsbz1uLm8sdT0wO2kuZm9yRWFjaCgoZnVuY3Rpb24obil7aWYoIW8uaGFzKG4pKXt2YXIgaT1yLmNvbmNhdChbdV0pO3QucHVzaCh7b3A6XCJyZW1vdmVcIixwYXRoOmksdmFsdWU6bn0pLGUudW5zaGlmdCh7b3A6YyxwYXRoOmksdmFsdWU6bn0pfXUrK30pKSx1PTAsby5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighaS5oYXMobikpe3ZhciBvPXIuY29uY2F0KFt1XSk7dC5wdXNoKHtvcDpjLHBhdGg6byx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpcInJlbW92ZVwiLHBhdGg6byx2YWx1ZTpufSl9dSsrfSkpfShuLHIsdCxlKX19LE06ZnVuY3Rpb24obixyLHQsZSl7dC5wdXNoKHtvcDpcInJlcGxhY2VcIixwYXRoOltdLHZhbHVlOnJ9KSxlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6W10sdmFsdWU6bi50fSl9fSl9ZnVuY3Rpb24gQygpe2Z1bmN0aW9uIHIobixyKXtmdW5jdGlvbiB0KCl7dGhpcy5jb25zdHJ1Y3Rvcj1ufWEobixyKSxuLnByb3RvdHlwZT0odC5wcm90b3R5cGU9ci5wcm90b3R5cGUsbmV3IHQpfWZ1bmN0aW9uIGUobil7bi5vfHwobi5EPW5ldyBNYXAsbi5vPW5ldyBNYXAobi50KSl9ZnVuY3Rpb24gbyhuKXtuLm98fChuLm89bmV3IFNldCxuLnQuZm9yRWFjaCgoZnVuY3Rpb24ocil7aWYodChyKSl7dmFyIGU9UihuLkEuaCxyLG4pO24ucC5zZXQocixlKSxuLm8uYWRkKGUpfWVsc2Ugbi5vLmFkZChyKX0pKSl9ZnVuY3Rpb24gdShyKXtyLmcmJm4oMyxKU09OLnN0cmluZ2lmeShwKHIpKSl9dmFyIGE9ZnVuY3Rpb24obixyKXtyZXR1cm4oYT1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24obixyKXtuLl9fcHJvdG9fXz1yfXx8ZnVuY3Rpb24obixyKXtmb3IodmFyIHQgaW4gcilyLmhhc093blByb3BlcnR5KHQpJiYoblt0XT1yW3RdKX0pKG4scil9LGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4scil7cmV0dXJuIHRoaXNbUV09e2k6MixsOnIsQTpyP3IuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLEQ6dm9pZCAwLHQ6bixrOnRoaXMsQzohMSxnOiExfSx0aGlzfXIobixNYXApO3ZhciBvPW4ucHJvdG90eXBlO3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHAodGhpc1tRXSkuc2l6ZX19KSxvLmhhcz1mdW5jdGlvbihuKXtyZXR1cm4gcCh0aGlzW1FdKS5oYXMobil9LG8uc2V0PWZ1bmN0aW9uKG4scil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSxwKHQpLmhhcyhuKSYmcCh0KS5nZXQobik9PT1yfHwoZSh0KSxrKHQpLHQuRC5zZXQobiwhMCksdC5vLnNldChuLHIpLHQuRC5zZXQobiwhMCkpLHRoaXN9LG8uZGVsZXRlPWZ1bmN0aW9uKG4pe2lmKCF0aGlzLmhhcyhuKSlyZXR1cm4hMTt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLGUociksayhyKSxyLkQuc2V0KG4sITEpLHIuby5kZWxldGUobiksITB9LG8uY2xlYXI9ZnVuY3Rpb24oKXt2YXIgbj10aGlzW1FdO3UobikscChuKS5zaXplJiYoZShuKSxrKG4pLG4uRD1uZXcgTWFwLGkobi50LChmdW5jdGlvbihyKXtuLkQuc2V0KHIsITEpfSkpLG4uby5jbGVhcigpKX0sby5mb3JFYWNoPWZ1bmN0aW9uKG4scil7dmFyIHQ9dGhpcztwKHRoaXNbUV0pLmZvckVhY2goKGZ1bmN0aW9uKGUsaSl7bi5jYWxsKHIsdC5nZXQoaSksaSx0KX0pKX0sby5nZXQ9ZnVuY3Rpb24obil7dmFyIHI9dGhpc1tRXTt1KHIpO3ZhciBpPXAocikuZ2V0KG4pO2lmKHIuSXx8IXQoaSkpcmV0dXJuIGk7aWYoaSE9PXIudC5nZXQobikpcmV0dXJuIGk7dmFyIG89UihyLkEuaCxpLHIpO3JldHVybiBlKHIpLHIuby5zZXQobixvKSxvfSxvLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5rZXlzKCl9LG8udmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG4scj10aGlzLHQ9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHIudmFsdWVzKCl9LG4ubmV4dD1mdW5jdGlvbigpe3ZhciBuPXQubmV4dCgpO3JldHVybiBuLmRvbmU/bjp7ZG9uZTohMSx2YWx1ZTpyLmdldChuLnZhbHVlKX19LG59LG8uZW50cmllcz1mdW5jdGlvbigpe3ZhciBuLHI9dGhpcyx0PXRoaXMua2V5cygpO3JldHVybihuPXt9KVtWXT1mdW5jdGlvbigpe3JldHVybiByLmVudHJpZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49dC5uZXh0KCk7aWYobi5kb25lKXJldHVybiBuO3ZhciBlPXIuZ2V0KG4udmFsdWUpO3JldHVybntkb25lOiExLHZhbHVlOltuLnZhbHVlLGVdfX0sbn0sb1tWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX0sbn0oKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gbihuLHIpe3JldHVybiB0aGlzW1FdPXtpOjMsbDpyLEE6cj9yLkE6XygpLFA6ITEsSTohMSxvOnZvaWQgMCx0Om4sazp0aGlzLHA6bmV3IE1hcCxnOiExLEM6ITF9LHRoaXN9cihuLFNldCk7dmFyIHQ9bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLHQuaGFzPWZ1bmN0aW9uKG4pe3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksci5vPyEhci5vLmhhcyhuKXx8ISghci5wLmhhcyhuKXx8IXIuby5oYXMoci5wLmdldChuKSkpOnIudC5oYXMobil9LHQuYWRkPWZ1bmN0aW9uKG4pe3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksdGhpcy5oYXMobil8fChvKHIpLGsociksci5vLmFkZChuKSksdGhpc30sdC5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciByPXRoaXNbUV07cmV0dXJuIHUociksbyhyKSxrKHIpLHIuby5kZWxldGUobil8fCEhci5wLmhhcyhuKSYmci5vLmRlbGV0ZShyLnAuZ2V0KG4pKX0sdC5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihvKG4pLGsobiksbi5vLmNsZWFyKCkpfSx0LnZhbHVlcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8udmFsdWVzKCl9LHQuZW50cmllcz1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07cmV0dXJuIHUobiksbyhuKSxuLm8uZW50cmllcygpfSx0LmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMoKX0sdFtWXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSx0LmZvckVhY2g9ZnVuY3Rpb24obixyKXtmb3IodmFyIHQ9dGhpcy52YWx1ZXMoKSxlPXQubmV4dCgpOyFlLmRvbmU7KW4uY2FsbChyLGUudmFsdWUsZS52YWx1ZSx0aGlzKSxlPXQubmV4dCgpfSxufSgpO20oXCJNYXBTZXRcIix7TjpmdW5jdGlvbihuLHIpe3JldHVybiBuZXcgZihuLHIpfSxUOmZ1bmN0aW9uKG4scil7cmV0dXJuIG5ldyBjKG4scil9fSl9ZnVuY3Rpb24gSigpe04oKSxDKCksVCgpfWZ1bmN0aW9uIEsobil7cmV0dXJuIG59ZnVuY3Rpb24gJChuKXtyZXR1cm4gbn12YXIgRyxVLFc9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbChcInhcIiksWD1cInVuZGVmaW5lZFwiIT10eXBlb2YgTWFwLHE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNldCxCPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm94eSYmdm9pZCAwIT09UHJveHkucmV2b2NhYmxlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCxIPVc/U3ltYm9sLmZvcihcImltbWVyLW5vdGhpbmdcIik6KChHPXt9KVtcImltbWVyLW5vdGhpbmdcIl09ITAsRyksTD1XP1N5bWJvbC5mb3IoXCJpbW1lci1kcmFmdGFibGVcIik6XCJfXyRpbW1lcl9kcmFmdGFibGVcIixRPVc/U3ltYm9sLmZvcihcImltbWVyLXN0YXRlXCIpOlwiX18kaW1tZXJfc3RhdGVcIixWPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcnx8XCJAQGl0ZXJhdG9yXCIsWT17MDpcIklsbGVnYWwgc3RhdGVcIiwxOlwiSW1tZXIgZHJhZnRzIGNhbm5vdCBoYXZlIGNvbXB1dGVkIHByb3BlcnRpZXNcIiwyOlwiVGhpcyBvYmplY3QgaGFzIGJlZW4gZnJvemVuIGFuZCBzaG91bGQgbm90IGJlIG11dGF0ZWRcIiwzOmZ1bmN0aW9uKG4pe3JldHVyblwiQ2Fubm90IHVzZSBhIHByb3h5IHRoYXQgaGFzIGJlZW4gcmV2b2tlZC4gRGlkIHlvdSBwYXNzIGFuIG9iamVjdCBmcm9tIGluc2lkZSBhbiBpbW1lciBmdW5jdGlvbiB0byBhbiBhc3luYyBwcm9jZXNzPyBcIitufSw0OlwiQW4gaW1tZXIgcHJvZHVjZXIgcmV0dXJuZWQgYSBuZXcgdmFsdWUgKmFuZCogbW9kaWZpZWQgaXRzIGRyYWZ0LiBFaXRoZXIgcmV0dXJuIGEgbmV3IHZhbHVlICpvciogbW9kaWZ5IHRoZSBkcmFmdC5cIiw1OlwiSW1tZXIgZm9yYmlkcyBjaXJjdWxhciByZWZlcmVuY2VzXCIsNjpcIlRoZSBmaXJzdCBvciBzZWNvbmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvblwiLDc6XCJUaGUgdGhpcmQgYXJndW1lbnQgdG8gYHByb2R1Y2VgIG11c3QgYmUgYSBmdW5jdGlvbiBvciB1bmRlZmluZWRcIiw4OlwiRmlyc3QgYXJndW1lbnQgdG8gYGNyZWF0ZURyYWZ0YCBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LCBhbiBhcnJheSwgb3IgYW4gaW1tZXJhYmxlIG9iamVjdFwiLDk6XCJGaXJzdCBhcmd1bWVudCB0byBgZmluaXNoRHJhZnRgIG11c3QgYmUgYSBkcmFmdCByZXR1cm5lZCBieSBgY3JlYXRlRHJhZnRgXCIsMTA6XCJUaGUgZ2l2ZW4gZHJhZnQgaXMgYWxyZWFkeSBmaW5hbGl6ZWRcIiwxMTpcIk9iamVjdC5kZWZpbmVQcm9wZXJ0eSgpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTI6XCJPYmplY3Quc2V0UHJvdG90eXBlT2YoKSBjYW5ub3QgYmUgdXNlZCBvbiBhbiBJbW1lciBkcmFmdFwiLDEzOlwiSW1tZXIgb25seSBzdXBwb3J0cyBkZWxldGluZyBhcnJheSBpbmRpY2VzXCIsMTQ6XCJJbW1lciBvbmx5IHN1cHBvcnRzIHNldHRpbmcgYXJyYXkgaW5kaWNlcyBhbmQgdGhlICdsZW5ndGgnIHByb3BlcnR5XCIsMTU6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgYXBwbHkgcGF0Y2gsIHBhdGggZG9lc24ndCByZXNvbHZlOiBcIitufSwxNjonU2V0cyBjYW5ub3QgaGF2ZSBcInJlcGxhY2VcIiBwYXRjaGVzLicsMTc6ZnVuY3Rpb24obil7cmV0dXJuXCJVbnN1cHBvcnRlZCBwYXRjaCBvcGVyYXRpb246IFwiK259LDE4OmZ1bmN0aW9uKG4pe3JldHVyblwiVGhlIHBsdWdpbiBmb3IgJ1wiK24rXCInIGhhcyBub3QgYmVlbiBsb2FkZWQgaW50byBJbW1lci4gVG8gZW5hYmxlIHRoZSBwbHVnaW4sIGltcG9ydCBhbmQgY2FsbCBgZW5hYmxlXCIrbitcIigpYCB3aGVuIGluaXRpYWxpemluZyB5b3VyIGFwcGxpY2F0aW9uLlwifSwyMDpcIkNhbm5vdCB1c2UgcHJveGllcyBpZiBQcm94eSwgUHJveHkucmV2b2NhYmxlIG9yIFJlZmxlY3QgYXJlIG5vdCBhdmFpbGFibGVcIiwyMTpmdW5jdGlvbihuKXtyZXR1cm5cInByb2R1Y2UgY2FuIG9ubHkgYmUgY2FsbGVkIG9uIHRoaW5ncyB0aGF0IGFyZSBkcmFmdGFibGU6IHBsYWluIG9iamVjdHMsIGFycmF5cywgTWFwLCBTZXQgb3IgY2xhc3NlcyB0aGF0IGFyZSBtYXJrZWQgd2l0aCAnW2ltbWVyYWJsZV06IHRydWUnLiBHb3QgJ1wiK24rXCInXCJ9LDIyOmZ1bmN0aW9uKG4pe3JldHVyblwiJ2N1cnJlbnQnIGV4cGVjdHMgYSBkcmFmdCwgZ290OiBcIitufSwyMzpmdW5jdGlvbihuKXtyZXR1cm5cIidvcmlnaW5hbCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259LDI0OlwiUGF0Y2hpbmcgcmVzZXJ2ZWQgYXR0cmlidXRlcyBsaWtlIF9fcHJvdG9fXywgcHJvdG90eXBlIGFuZCBjb25zdHJ1Y3RvciBpcyBub3QgYWxsb3dlZFwifSxaPVwiXCIrT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvcixubj1cInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmUmVmbGVjdC5vd25LZXlzP1JlZmxlY3Qub3duS2V5czp2b2lkIDAhPT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKG4pe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhuKSl9Ok9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLHJuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzfHxmdW5jdGlvbihuKXt2YXIgcj17fTtyZXR1cm4gbm4obikuZm9yRWFjaCgoZnVuY3Rpb24odCl7clt0XT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4sdCl9KSkscn0sdG49e30sZW49e2dldDpmdW5jdGlvbihuLHIpe2lmKHI9PT1RKXJldHVybiBuO3ZhciBlPXAobik7aWYoIXUoZSxyKSlyZXR1cm4gZnVuY3Rpb24obixyLHQpe3ZhciBlLGk9SShyLHQpO3JldHVybiBpP1widmFsdWVcImluIGk/aS52YWx1ZTpudWxsPT09KGU9aS5nZXQpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNhbGwobi5rKTp2b2lkIDB9KG4sZSxyKTt2YXIgaT1lW3JdO3JldHVybiBuLkl8fCF0KGkpP2k6aT09PXoobi50LHIpPyhFKG4pLG4ub1tyXT1SKG4uQS5oLGksbikpOml9LGhhczpmdW5jdGlvbihuLHIpe3JldHVybiByIGluIHAobil9LG93bktleXM6ZnVuY3Rpb24obil7cmV0dXJuIFJlZmxlY3Qub3duS2V5cyhwKG4pKX0sc2V0OmZ1bmN0aW9uKG4scix0KXt2YXIgZT1JKHAobikscik7aWYobnVsbD09ZT92b2lkIDA6ZS5zZXQpcmV0dXJuIGUuc2V0LmNhbGwobi5rLHQpLCEwO2lmKCFuLlApe3ZhciBpPXoocChuKSxyKSxvPW51bGw9PWk/dm9pZCAwOmlbUV07aWYobyYmby50PT09dClyZXR1cm4gbi5vW3JdPXQsbi5EW3JdPSExLCEwO2lmKGModCxpKSYmKHZvaWQgMCE9PXR8fHUobi50LHIpKSlyZXR1cm4hMDtFKG4pLGsobil9cmV0dXJuIG4ub1tyXT09PXQmJlwibnVtYmVyXCIhPXR5cGVvZiB0fHwobi5vW3JdPXQsbi5EW3JdPSEwLCEwKX0sZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24obixyKXtyZXR1cm4gdm9pZCAwIT09eihuLnQscil8fHIgaW4gbi50PyhuLkRbcl09ITEsRShuKSxrKG4pKTpkZWxldGUgbi5EW3JdLG4ubyYmZGVsZXRlIG4ub1tyXSwhMH0sZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKG4scil7dmFyIHQ9cChuKSxlPVJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQscik7cmV0dXJuIGU/e3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZToxIT09bi5pfHxcImxlbmd0aFwiIT09cixlbnVtZXJhYmxlOmUuZW51bWVyYWJsZSx2YWx1ZTp0W3JdfTplfSxkZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbigpe24oMTEpfSxnZXRQcm90b3R5cGVPZjpmdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG4udCl9LHNldFByb3RvdHlwZU9mOmZ1bmN0aW9uKCl7bigxMil9fSxvbj17fTtpKGVuLChmdW5jdGlvbihuLHIpe29uW25dPWZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXT1hcmd1bWVudHNbMF1bMF0sci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSkpLG9uLmRlbGV0ZVByb3BlcnR5PWZ1bmN0aW9uKHIsdCl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmaXNOYU4ocGFyc2VJbnQodCkpJiZuKDEzKSxlbi5kZWxldGVQcm9wZXJ0eS5jYWxsKHRoaXMsclswXSx0KX0sb24uc2V0PWZ1bmN0aW9uKHIsdCxlKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcImxlbmd0aFwiIT09dCYmaXNOYU4ocGFyc2VJbnQodCkpJiZuKDE0KSxlbi5zZXQuY2FsbCh0aGlzLHJbMF0sdCxlLHJbMF0pfTt2YXIgdW49ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHIpe3ZhciBlPXRoaXM7dGhpcy5PPUIsdGhpcy5GPSEwLHRoaXMucHJvZHVjZT1mdW5jdGlvbihyLGksbyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgciYmXCJmdW5jdGlvblwiIT10eXBlb2YgaSl7dmFyIHU9aTtpPXI7dmFyIGE9ZTtyZXR1cm4gZnVuY3Rpb24obil7dmFyIHI9dGhpczt2b2lkIDA9PT1uJiYobj11KTtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPUFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspZVtvLTFdPWFyZ3VtZW50c1tvXTtyZXR1cm4gYS5wcm9kdWNlKG4sKGZ1bmN0aW9uKG4pe3ZhciB0O3JldHVybih0PWkpLmNhbGwuYXBwbHkodCxbcixuXS5jb25jYXQoZSkpfSkpfX12YXIgZjtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBpJiZuKDYpLHZvaWQgMCE9PW8mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG8mJm4oNyksdChyKSl7dmFyIGM9dyhlKSxzPVIoZSxyLHZvaWQgMCksdj0hMDt0cnl7Zj1pKHMpLHY9ITF9ZmluYWxseXt2P2coYyk6TyhjKX1yZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSYmZiBpbnN0YW5jZW9mIFByb21pc2U/Zi50aGVuKChmdW5jdGlvbihuKXtyZXR1cm4gaihjLG8pLFAobixjKX0pLChmdW5jdGlvbihuKXt0aHJvdyBnKGMpLG59KSk6KGooYyxvKSxQKGYsYykpfWlmKCFyfHxcIm9iamVjdFwiIT10eXBlb2Ygcil7aWYoKGY9aShyKSk9PT1IKXJldHVybjtyZXR1cm4gdm9pZCAwPT09ZiYmKGY9ciksZS5GJiZkKGYsITApLGZ9bigyMSxyKX0sdGhpcy5wcm9kdWNlV2l0aFBhdGNoZXM9ZnVuY3Rpb24obixyKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP2Z1bmN0aW9uKHIpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGk9QXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKylpW28tMV09YXJndW1lbnRzW29dO3JldHVybiBlLnByb2R1Y2VXaXRoUGF0Y2hlcyhyLChmdW5jdGlvbihyKXtyZXR1cm4gbi5hcHBseSh2b2lkIDAsW3JdLmNvbmNhdChpKSl9KSl9OltlLnByb2R1Y2UobixyLChmdW5jdGlvbihuLHIpe3Q9bixpPXJ9KSksdCxpXTt2YXIgdCxpfSxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PXI/dm9pZCAwOnIudXNlUHJveGllcykmJnRoaXMuc2V0VXNlUHJveGllcyhyLnVzZVByb3hpZXMpLFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09cj92b2lkIDA6ci5hdXRvRnJlZXplKSYmdGhpcy5zZXRBdXRvRnJlZXplKHIuYXV0b0ZyZWV6ZSl9dmFyIGk9ZS5wcm90b3R5cGU7cmV0dXJuIGkuY3JlYXRlRHJhZnQ9ZnVuY3Rpb24oZSl7dChlKXx8big4KSxyKGUpJiYoZT1EKGUpKTt2YXIgaT13KHRoaXMpLG89Uih0aGlzLGUsdm9pZCAwKTtyZXR1cm4gb1tRXS5DPSEwLE8oaSksb30saS5maW5pc2hEcmFmdD1mdW5jdGlvbihyLHQpe3ZhciBlPXImJnJbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKGUmJmUuQ3x8big5KSxlLkkmJm4oMTApKTt2YXIgaT1lLkE7cmV0dXJuIGooaSx0KSxQKHZvaWQgMCxpKX0saS5zZXRBdXRvRnJlZXplPWZ1bmN0aW9uKG4pe3RoaXMuRj1ufSxpLnNldFVzZVByb3hpZXM9ZnVuY3Rpb24ocil7ciYmIUImJm4oMjApLHRoaXMuTz1yfSxpLmFwcGx5UGF0Y2hlcz1mdW5jdGlvbihuLHQpe3ZhciBlO2ZvcihlPXQubGVuZ3RoLTE7ZT49MDtlLS0pe3ZhciBpPXRbZV07aWYoMD09PWkucGF0aC5sZW5ndGgmJlwicmVwbGFjZVwiPT09aS5vcCl7bj1pLnZhbHVlO2JyZWFrfX12YXIgbz1iKFwiUGF0Y2hlc1wiKS4kO3JldHVybiByKG4pP28obix0KTp0aGlzLnByb2R1Y2UobiwoZnVuY3Rpb24obil7cmV0dXJuIG8obix0LnNsaWNlKGUrMSkpfSkpfSxlfSgpLGFuPW5ldyB1bixmbj1hbi5wcm9kdWNlLGNuPWFuLnByb2R1Y2VXaXRoUGF0Y2hlcy5iaW5kKGFuKSxzbj1hbi5zZXRBdXRvRnJlZXplLmJpbmQoYW4pLHZuPWFuLnNldFVzZVByb3hpZXMuYmluZChhbikscG49YW4uYXBwbHlQYXRjaGVzLmJpbmQoYW4pLGxuPWFuLmNyZWF0ZURyYWZ0LmJpbmQoYW4pLGRuPWFuLmZpbmlzaERyYWZ0LmJpbmQoYW4pO2V4cG9ydCBkZWZhdWx0IGZuO2V4cG9ydHt1biBhcyBJbW1lcixwbiBhcyBhcHBseVBhdGNoZXMsSyBhcyBjYXN0RHJhZnQsJCBhcyBjYXN0SW1tdXRhYmxlLGxuIGFzIGNyZWF0ZURyYWZ0LEQgYXMgY3VycmVudCxKIGFzIGVuYWJsZUFsbFBsdWdpbnMsTiBhcyBlbmFibGVFUzUsQyBhcyBlbmFibGVNYXBTZXQsVCBhcyBlbmFibGVQYXRjaGVzLGRuIGFzIGZpbmlzaERyYWZ0LGQgYXMgZnJlZXplLEwgYXMgaW1tZXJhYmxlLHIgYXMgaXNEcmFmdCx0IGFzIGlzRHJhZnRhYmxlLEggYXMgbm90aGluZyxlIGFzIG9yaWdpbmFsLGZuIGFzIHByb2R1Y2UsY24gYXMgcHJvZHVjZVdpdGhQYXRjaGVzLHNuIGFzIHNldEF1dG9GcmVlemUsdm4gYXMgc2V0VXNlUHJveGllc307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbW1lci5lc20uanMubWFwXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvcnVudGltZS1jb25maWcnKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIGFzc2lnbj1PYmplY3QuYXNzaWduLmJpbmQoT2JqZWN0KTttb2R1bGUuZXhwb3J0cz1hc3NpZ247bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9iamVjdC1hc3NpZ24uanMubWFwIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9yYW5rZXJcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJGOlxcXFxyZXBvc1xcXFxyZWFjdC1mZWgtc2l0ZVxcXFxwYWdlc1xcXFxyYW5rZXJcXFxcaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vaGVyb2hlYWRlci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL2hlcm9oZWFkZXIubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vaGVyb2hlYWRlci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi90eXBlY2hlY2tib3hzLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vdHlwZWNoZWNrYm94cy5tb2R1bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi90eXBlY2hlY2tib3hzLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL2luZGV4Lm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vaW5kZXgubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vaW5kZXgubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtjb25zdCBpc09sZElFPWZ1bmN0aW9uIGlzT2xkSUUoKXtsZXQgbWVtbztyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKXtpZih0eXBlb2YgbWVtbz09PSd1bmRlZmluZWQnKXsvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4vLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbm1lbW89Qm9vbGVhbih3aW5kb3cmJmRvY3VtZW50JiZkb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYik7fXJldHVybiBtZW1vO307fSgpO2NvbnN0IGdldFRhcmdldD1mdW5jdGlvbiBnZXRUYXJnZXQoKXtjb25zdCBtZW1vPXt9O3JldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpe2lmKHR5cGVvZiBtZW1vW3RhcmdldF09PT0ndW5kZWZpbmVkJyl7bGV0IHN0eWxlVGFyZ2V0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuaWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCl7dHJ5ey8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4vLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuc3R5bGVUYXJnZXQ9c3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7fWNhdGNoKGUpey8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5zdHlsZVRhcmdldD1udWxsO319bWVtb1t0YXJnZXRdPXN0eWxlVGFyZ2V0O31yZXR1cm4gbWVtb1t0YXJnZXRdO307fSgpO2NvbnN0IHN0eWxlc0luRG9tPVtdO2Z1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpe2xldCByZXN1bHQ9LTE7Zm9yKGxldCBpPTA7aTxzdHlsZXNJbkRvbS5sZW5ndGg7aSsrKXtpZihzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyPT09aWRlbnRpZmllcil7cmVzdWx0PWk7YnJlYWs7fX1yZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCxvcHRpb25zKXtjb25zdCBpZENvdW50TWFwPXt9O2NvbnN0IGlkZW50aWZpZXJzPVtdO2ZvcihsZXQgaT0wO2k8bGlzdC5sZW5ndGg7aSsrKXtjb25zdCBpdGVtPWxpc3RbaV07Y29uc3QgaWQ9b3B0aW9ucy5iYXNlP2l0ZW1bMF0rb3B0aW9ucy5iYXNlOml0ZW1bMF07Y29uc3QgY291bnQ9aWRDb3VudE1hcFtpZF18fDA7Y29uc3QgaWRlbnRpZmllcj1pZCsnICcrY291bnQudG9TdHJpbmcoKTtpZENvdW50TWFwW2lkXT1jb3VudCsxO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2NvbnN0IG9iaj17Y3NzOml0ZW1bMV0sbWVkaWE6aXRlbVsyXSxzb3VyY2VNYXA6aXRlbVszXX07aWYoaW5kZXghPT0tMSl7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO31lbHNle3N0eWxlc0luRG9tLnB1c2goe2lkZW50aWZpZXI6aWRlbnRpZmllcix1cGRhdGVyOmFkZFN0eWxlKG9iaixvcHRpb25zKSxyZWZlcmVuY2VzOjF9KTt9aWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTt9cmV0dXJuIGlkZW50aWZpZXJzO31mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyl7Y29uc3Qgc3R5bGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtjb25zdCBhdHRyaWJ1dGVzPW9wdGlvbnMuYXR0cmlidXRlc3x8e307aWYodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2U9PT0ndW5kZWZpbmVkJyl7Y29uc3Qgbm9uY2U9Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG50eXBlb2YgX193ZWJwYWNrX25vbmNlX18hPT0ndW5kZWZpbmVkJz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsO2lmKG5vbmNlKXthdHRyaWJ1dGVzLm5vbmNlPW5vbmNlO319T2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe3N0eWxlLnNldEF0dHJpYnV0ZShrZXksYXR0cmlidXRlc1trZXldKTt9KTtpZih0eXBlb2Ygb3B0aW9ucy5pbnNlcnQ9PT0nZnVuY3Rpb24nKXtvcHRpb25zLmluc2VydChzdHlsZSk7fWVsc2V7Y29uc3QgdGFyZ2V0PWdldFRhcmdldChvcHRpb25zLmluc2VydHx8J2hlYWQnKTtpZighdGFyZ2V0KXt0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO310YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO31yZXR1cm4gc3R5bGU7fWZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSl7Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5pZihzdHlsZS5wYXJlbnROb2RlPT09bnVsbCl7cmV0dXJuIGZhbHNlO31zdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTt9LyogaXN0YW5idWwgaWdub3JlIG5leHQgICovY29uc3QgcmVwbGFjZVRleHQ9ZnVuY3Rpb24gcmVwbGFjZVRleHQoKXtjb25zdCB0ZXh0U3RvcmU9W107cmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgscmVwbGFjZW1lbnQpe3RleHRTdG9yZVtpbmRleF09cmVwbGFjZW1lbnQ7cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7fTt9KCk7ZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSxpbmRleCxyZW1vdmUsb2JqKXtjb25zdCBjc3M9cmVtb3ZlPycnOm9iai5tZWRpYT8nQG1lZGlhICcrb2JqLm1lZGlhKycgeycrb2JqLmNzcysnfSc6b2JqLmNzczsvLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PXJlcGxhY2VUZXh0KGluZGV4LGNzcyk7fWVsc2V7Y29uc3QgY3NzTm9kZT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO2NvbnN0IGNoaWxkTm9kZXM9c3R5bGUuY2hpbGROb2RlcztpZihjaGlsZE5vZGVzW2luZGV4XSl7c3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO31pZihjaGlsZE5vZGVzLmxlbmd0aCl7c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsY2hpbGROb2Rlc1tpbmRleF0pO31lbHNle3N0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO319fWZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsb3B0aW9ucyxvYmope2xldCBjc3M9b2JqLmNzcztjb25zdCBtZWRpYT1vYmoubWVkaWE7Y29uc3Qgc291cmNlTWFwPW9iai5zb3VyY2VNYXA7aWYobWVkaWEpe3N0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLG1lZGlhKTt9ZWxzZXtzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7fWlmKHNvdXJjZU1hcCYmdHlwZW9mIGJ0b2EhPT0ndW5kZWZpbmVkJyl7Y3NzKz0nXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkrJyAqLyc7fS8vIEZvciBvbGQgSUVcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9pZihzdHlsZS5zdHlsZVNoZWV0KXtzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQ9Y3NzO31lbHNle3doaWxlKHN0eWxlLmZpcnN0Q2hpbGQpe3N0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO31zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTt9fWxldCBzaW5nbGV0b249bnVsbDtsZXQgc2luZ2xldG9uQ291bnRlcj0wO2Z1bmN0aW9uIGFkZFN0eWxlKG9iaixvcHRpb25zKXtsZXQgc3R5bGU7bGV0IHVwZGF0ZTtsZXQgcmVtb3ZlO2lmKG9wdGlvbnMuc2luZ2xldG9uKXtjb25zdCBzdHlsZUluZGV4PXNpbmdsZXRvbkNvdW50ZXIrKztzdHlsZT1zaW5nbGV0b258fChzaW5nbGV0b249aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTt1cGRhdGU9YXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsc3R5bGUsc3R5bGVJbmRleCxmYWxzZSk7cmVtb3ZlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsdHJ1ZSk7fWVsc2V7c3R5bGU9aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO3VwZGF0ZT1hcHBseVRvVGFnLmJpbmQobnVsbCxzdHlsZSxvcHRpb25zKTtyZW1vdmU9ZnVuY3Rpb24oKXtyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO307fXVwZGF0ZShvYmopO3JldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmope2lmKG5ld09iail7aWYobmV3T2JqLmNzcz09PW9iai5jc3MmJm5ld09iai5tZWRpYT09PW9iai5tZWRpYSYmbmV3T2JqLnNvdXJjZU1hcD09PW9iai5zb3VyY2VNYXApe3JldHVybjt9dXBkYXRlKG9iaj1uZXdPYmopO31lbHNle3JlbW92ZSgpO319O31tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihsaXN0LG9wdGlvbnMpe29wdGlvbnM9b3B0aW9uc3x8e307Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5pZighb3B0aW9ucy5zaW5nbGV0b24mJnR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiE9PSdib29sZWFuJyl7b3B0aW9ucy5zaW5nbGV0b249aXNPbGRJRSgpO31saXN0PWxpc3R8fFtdO2xldCBsYXN0SWRlbnRpZmllcnM9bW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyk7cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KXtuZXdMaXN0PW5ld0xpc3R8fFtdO2lmKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSE9PSdbb2JqZWN0IEFycmF5XScpe3JldHVybjt9Zm9yKGxldCBpPTA7aTxsYXN0SWRlbnRpZmllcnMubGVuZ3RoO2krKyl7Y29uc3QgaWRlbnRpZmllcj1sYXN0SWRlbnRpZmllcnNbaV07Y29uc3QgaW5kZXg9Z2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7c3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTt9Y29uc3QgbmV3TGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShuZXdMaXN0LG9wdGlvbnMpO2ZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO2lmKHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzPT09MCl7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIoKTtzdHlsZXNJbkRvbS5zcGxpY2UoaW5kZXgsMSk7fX1sYXN0SWRlbnRpZmllcnM9bmV3TGFzdElkZW50aWZpZXJzO307fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVyb2hlYWRlcl9jb250YWluZXJfXzNUaVJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxZDNlNTM7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uaGVyb2hlYWRlcl9jb250YWluZXJfXzNUaVJkIC5oZXJvaGVhZGVyX3JpZ2h0X18xbWIwSSB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gIG1pbi1oZWlnaHQ6IDE1OHB4O1xcbn1cXG5cXG4uaGVyb2hlYWRlcl9pbWctY29udGFpbmVyX18ya0JKQSB7XFxuICB3aWR0aDogMTU4cHg7XFxuICBoZWlnaHQ6IDE1OHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5oZXJvaGVhZGVyX2ltZy1jb250YWluZXJfXzJrQkpBIGltZyB7XFxuICB3aWR0aDogMTU4cHg7XFxuICBoZWlnaHQ6IDE1OHB4O1xcbn1cXG5cXG4uaGVyb2hlYWRlcl9pbWctY29udGFpbmVyX18ya0JKQSAuaGVyb2hlYWRlcl9ic3RfXzJGZTdtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMCA0cHg7XFxufVxcblxcbi5oZXJvaGVhZGVyX3RpdGxlLWFuZC1uYW1lX18yZWVBdiB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5oZXJvaGVhZGVyX3RpdGxlLWFuZC1uYW1lX18yZWVBdiAuaGVyb2hlYWRlcl90aXRsZV9fMVg5dUwge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5oZXJvaGVhZGVyX3RpdGxlLWFuZC1uYW1lX18yZWVBdiAuaGVyb2hlYWRlcl9uYW1lX18xeFZIRCB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlcm9oZWFkZXJfdHlwZXNfX3E2dEZzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDU1cHg7XFxufVxcblxcbi5oZXJvaGVhZGVyX2JsZXNzaW5nX18yLTdhTiB7XFxuICB3aWR0aDogNTJweDtcXG4gIGhlaWdodDogNTJweDtcXG59XFxuXFxuLmhlcm9oZWFkZXJfc3RhdHNfXzk4N253IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oZXJvaGVhZGVyX3N0YXRzX185ODdudyA+IGRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2FwcC9jb21wb25lbnRzL0hlcm9IZWFkZXIvaGVyb2hlYWRlci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxZDNlNTM7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uY29udGFpbmVyIC5yaWdodCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcXG4gIG1pbi1oZWlnaHQ6IDE1OHB4O1xcbn1cXG5cXG4uaW1nLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTU4cHg7XFxuICBoZWlnaHQ6IDE1OHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5pbWctY29udGFpbmVyIGltZyB7XFxuICB3aWR0aDogMTU4cHg7XFxuICBoZWlnaHQ6IDE1OHB4O1xcbn1cXG5cXG4uaW1nLWNvbnRhaW5lciAuYnN0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMCA0cHg7XFxufVxcblxcbi50aXRsZS1hbmQtbmFtZSB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi50aXRsZS1hbmQtbmFtZSAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi50aXRsZS1hbmQtbmFtZSAubmFtZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnR5cGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDU1cHg7XFxufVxcblxcbi5ibGVzc2luZyB7XFxuICB3aWR0aDogNTJweDtcXG4gIGhlaWdodDogNTJweDtcXG59XFxuXFxuLnN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zdGF0cyA+IGRpdiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiaGVyb2hlYWRlcl9jb250YWluZXJfXzNUaVJkXCIsXG5cdFwicmlnaHRcIjogXCJoZXJvaGVhZGVyX3JpZ2h0X18xbWIwSVwiLFxuXHRcImltZy1jb250YWluZXJcIjogXCJoZXJvaGVhZGVyX2ltZy1jb250YWluZXJfXzJrQkpBXCIsXG5cdFwiYnN0XCI6IFwiaGVyb2hlYWRlcl9ic3RfXzJGZTdtXCIsXG5cdFwidGl0bGUtYW5kLW5hbWVcIjogXCJoZXJvaGVhZGVyX3RpdGxlLWFuZC1uYW1lX18yZWVBdlwiLFxuXHRcInRpdGxlXCI6IFwiaGVyb2hlYWRlcl90aXRsZV9fMVg5dUxcIixcblx0XCJuYW1lXCI6IFwiaGVyb2hlYWRlcl9uYW1lX18xeFZIRFwiLFxuXHRcInR5cGVzXCI6IFwiaGVyb2hlYWRlcl90eXBlc19fcTZ0RnNcIixcblx0XCJibGVzc2luZ1wiOiBcImhlcm9oZWFkZXJfYmxlc3NpbmdfXzItN2FOXCIsXG5cdFwic3RhdHNcIjogXCJoZXJvaGVhZGVyX3N0YXRzX185ODdud1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50eXBlY2hlY2tib3hzX2NvbnRlbnRfX29sZFdiIHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZsZXg6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgyKTtcXG59XFxuXFxuLnR5cGVjaGVja2JveHNfY2hlY2tib3hzX18zX1VwMCB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udHlwZWNoZWNrYm94c19jaGVja2JveHNfXzNfVXAwW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi50eXBlY2hlY2tib3hzX2V4cGFuZC1idXR0b25fXzIyRU9aIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zODIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy90eXBlY2hlY2tib3hzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnQge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxleDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zODIpO1xcbn1cXG5cXG4uY2hlY2tib3hzIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jaGVja2JveHNbaGlkZGVuXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLmV4cGFuZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRlbnRcIjogXCJ0eXBlY2hlY2tib3hzX2NvbnRlbnRfX29sZFdiXCIsXG5cdFwiY2hlY2tib3hzXCI6IFwidHlwZWNoZWNrYm94c19jaGVja2JveHNfXzNfVXAwXCIsXG5cdFwiZXhwYW5kLWJ1dHRvblwiOiBcInR5cGVjaGVja2JveHNfZXhwYW5kLWJ1dHRvbl9fMjJFT1pcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuUmFua2VyX2NvbnRhaW5lcl9fcDE0aDkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5SYW5rZXJfYmctbGF5ZXJfXzFsYnpvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDNlNTNhYTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLlJhbmtlcl9iZy1sYXllcl9fMWxiem8gLlJhbmtlcl9saXN0X184a3BYNCB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XFxufVxcblxcbi5SYW5rZXJfc3RhdHMtYnV0dG9uc19fUXBISDEge1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzZkN2M7XFxufVxcblxcbi5SYW5rZXJfc3RhdHMtYnV0dG9uc19fUXBISDEgPiAuUmFua2VyX3RpdGxlX18xdEdqNCB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuLlJhbmtlcl9zdGF0cy1idXR0b25zX19RcEhIMSA+IGJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9hcHAvcGFnZS9SYW5rZXIvaW5kZXgubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmJnLWxheWVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDNlNTNhYTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmJnLWxheWVyIC5saXN0IHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcXG59XFxuXFxuLnN0YXRzLWJ1dHRvbnMge1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NzZkN2M7XFxufVxcblxcbi5zdGF0cy1idXR0b25zID4gLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cXG4uc3RhdHMtYnV0dG9ucyA+IGJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlJhbmtlcl9jb250YWluZXJfX3AxNGg5XCIsXG5cdFwiYmctbGF5ZXJcIjogXCJSYW5rZXJfYmctbGF5ZXJfXzFsYnpvXCIsXG5cdFwibGlzdFwiOiBcIlJhbmtlcl9saXN0X184a3BYNFwiLFxuXHRcInN0YXRzLWJ1dHRvbnNcIjogXCJSYW5rZXJfc3RhdHMtYnV0dG9uc19fUXBISDFcIixcblx0XCJ0aXRsZVwiOiBcIlJhbmtlcl90aXRsZV9fMXRHajRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjFcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjFcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNy4wLjEnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IDB4ZWFjYztcbmV4cG9ydHMuUHJvZmlsZXIgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbmV4cG9ydHMuU3VzcGVuc2UgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBleHBvcnRzLlN0cmljdE1vZGUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIGV4cG9ydHMuUHJvZmlsZXIgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBleHBvcnRzLlN1c3BlbnNlID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiAwXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcbiAge1xuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgfVxufVxuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAge1xuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICAgIH1cbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG5cblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudEV4dHJhU3RhY2tGcmFtZSkge1xuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxudmFyIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgY2FsbGVyTmFtZSkge1xuICB7XG4gICAgdmFyIF9jb25zdHJ1Y3RvciA9IHB1YmxpY0luc3RhbmNlLmNvbnN0cnVjdG9yO1xuICAgIHZhciBjb21wb25lbnROYW1lID0gX2NvbnN0cnVjdG9yICYmIChfY29uc3RydWN0b3IuZGlzcGxheU5hbWUgfHwgX2NvbnN0cnVjdG9yLm5hbWUpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyBcIi5cIiArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXJyb3IoXCJDYW4ndCBjYWxsICVzIG9uIGEgY29tcG9uZW50IHRoYXQgaXMgbm90IHlldCBtb3VudGVkLiBcIiArICdUaGlzIGlzIGEgbm8tb3AsIGJ1dCBpdCBtaWdodCBpbmRpY2F0ZSBhIGJ1ZyBpbiB5b3VyIGFwcGxpY2F0aW9uLiAnICsgJ0luc3RlYWQsIGFzc2lnbiB0byBgdGhpcy5zdGF0ZWAgZGlyZWN0bHkgb3IgZGVmaW5lIGEgYHN0YXRlID0ge307YCAnICsgJ2NsYXNzIHByb3BlcnR5IHdpdGggdGhlIGRlc2lyZWQgc3RhdGUgaW4gdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSA9IHRydWU7XG4gIH1cbn1cbi8qKlxuICogVGhpcyBpcyB0aGUgYWJzdHJhY3QgQVBJIGZvciBhbiB1cGRhdGUgcXVldWUuXG4gKi9cblxuXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICghKHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYXJ0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgfHwgcGFydGlhbFN0YXRlID09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIgKTtcbiAgICB9XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuX2Fzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcblxucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgZXhwb3J0cy5Qcm9maWxlcjpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBleHBvcnRzLlN0cmljdE1vZGU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBleHBvcnRzLlN1c3BlbnNlOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBjb21wb25lbnROYW1lLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IEEgZWxlbWVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIHZhciBfY2hpbGQgPSBjaGlsZHJlbjtcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XG5cbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XG5cbiAgICAgIGlmIChjaGlsZEtleSAhPSBudWxsKSB7XG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XG4gICAgICB9XG5cbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLCAvLyBLZWVwIGJvdGggdGhlIChtYXBwZWQpIGFuZCBvbGQga2V5cyBpZiB0aGV5IGRpZmZlciwganVzdCBhc1xuICAgICAgICAvLyB0cmF2ZXJzZUFsbENoaWxkcmVuIHVzZWQgdG8gZG8gZm9yIG9iamVjdHMgYXMgY2hpbGRyZW5cbiAgICAgICAgZXNjYXBlZFByZWZpeCArICggLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgIG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpID8gLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBleGlzdGluZyBlbGVtZW50J3Mga2V5IGNhbiBiZSBhIG51bWJlclxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgfVxuXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGl0ZXJhYmxlQ2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlQ2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIHtcbiAgICAgICAgICB0aHJvdyBFcnJvciggXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIiApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0LFxuICAgICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjb250ZXh0Ll9jYWxjdWxhdGVDaGFuZ2VkQml0c1xuICAgIH07IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG5vdCBzZXR0aW5nIGEgdmFsdWUsIHdoaWNoIGlzIGludGVudGlvbmFsIGhlcmVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKENvbnN1bWVyLCB7XG4gICAgICBQcm92aWRlcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuUHJvdmlkZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuUHJvdmlkZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuUHJvdmlkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9Qcm92aWRlcikge1xuICAgICAgICAgIGNvbnRleHQuUHJvdmlkZXIgPSBfUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUgPSBfY3VycmVudFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZTI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF9jdXJyZW50VmFsdWUyKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlMiA9IF9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX3RocmVhZENvdW50OiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll90aHJlYWRDb3VudDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX3RocmVhZENvdW50KSB7XG4gICAgICAgICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBfdGhyZWFkQ291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBDb25zdW1lcjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzKSB7XG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IHRydWU7XG5cbiAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQuQ29uc3VtZXIuQ29uc3VtZXI+IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuQ29uc3VtZXI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5TmFtZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5kaXNwbGF5TmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyKSB7XG4gICAgICAgICAgICB3YXJuKCdTZXR0aW5nIGBkaXNwbGF5TmFtZWAgb24gQ29udGV4dC5Db25zdW1lciBoYXMgbm8gZWZmZWN0LiAnICsgXCJZb3Ugc2hvdWxkIHNldCBpdCBkaXJlY3RseSBvbiB0aGUgY29udGV4dCB3aXRoIENvbnRleHQuZGlzcGxheU5hbWUgPSAnJXMnLlwiLCBkaXNwbGF5TmFtZSk7XG5cbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbWlzc2luZyBwcm9wZXJ0aWVzIGJlY2F1c2UgaXQgZG9lc24ndCB1bmRlcnN0YW5kIGRlZmluZVByb3BlcnR5XG5cbiAgICBjb250ZXh0LkNvbnN1bWVyID0gQ29uc3VtZXI7XG4gIH1cblxuICB7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyID0gbnVsbDtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIyID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjb250ZXh0O1xufVxuXG52YXIgVW5pbml0aWFsaXplZCA9IC0xO1xudmFyIFBlbmRpbmcgPSAwO1xudmFyIFJlc29sdmVkID0gMTtcbnZhciBSZWplY3RlZCA9IDI7XG5cbmZ1bmN0aW9uIGxhenlJbml0aWFsaXplcihwYXlsb2FkKSB7XG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICB2YXIgY3RvciA9IHBheWxvYWQuX3Jlc3VsdDtcbiAgICB2YXIgdGhlbmFibGUgPSBjdG9yKCk7IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cbiAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XG4gICAgcGVuZGluZy5fc3RhdHVzID0gUGVuZGluZztcbiAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRFeHBvcnQgPSBtb2R1bGVPYmplY3QuZGVmYXVsdDtcblxuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRlZmF1bHRFeHBvcnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcG9ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG5cblxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZXNvbHZlZC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBkZWZhdWx0RXhwb3J0O1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUGVuZGluZykge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFJlc29sdmVkKSB7XG4gICAgcmV0dXJuIHBheWxvYWQuX3Jlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBwYXlsb2FkID0ge1xuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiAtMSxcbiAgICBfcmVzdWx0OiBjdG9yXG4gIH07XG4gIHZhciBsYXp5VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTEFaWV9UWVBFLFxuICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgIF9pbml0OiBsYXp5SW5pdGlhbGl6ZXJcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlczsgLy8gJEZsb3dGaXhNZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobGF6eVR5cGUsIHtcbiAgICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld0RlZmF1bHRQcm9wcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBkZWZhdWx0UHJvcHNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBkZWZhdWx0UHJvcHMgPSBuZXdEZWZhdWx0UHJvcHM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ2RlZmF1bHRQcm9wcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByb3BUeXBlczoge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBwcm9wVHlwZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG5ld1Byb3BUeXBlcykge1xuICAgICAgICAgIGVycm9yKCdSZWFjdC5sYXp5KC4uLik6IEl0IGlzIG5vdCBzdXBwb3J0ZWQgdG8gYXNzaWduIGBwcm9wVHlwZXNgIHRvICcgKyAnYSBsYXp5IGNvbXBvbmVudCBpbXBvcnQuIEVpdGhlciBzcGVjaWZ5IHRoZW0gd2hlcmUgdGhlIGNvbXBvbmVudCAnICsgJ2lzIGRlZmluZWQsIG9yIGNyZWF0ZSBhIHdyYXBwaW5nIGNvbXBvbmVudCBhcm91bmQgaXQuJyk7XG5cbiAgICAgICAgICBwcm9wVHlwZXMgPSBuZXdQcm9wVHlwZXM7IC8vIE1hdGNoIHByb2R1Y3Rpb24gYmVoYXZpb3IgbW9yZSBjbG9zZWx5OlxuICAgICAgICAgIC8vICRGbG93Rml4TWVcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsXG4gICAgcmVuZGVyOiByZW5kZXJcbiAgfTtcblxuICB7XG4gICAgdmFyIG93bk5hbWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnRUeXBlLCAnZGlzcGxheU5hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb3duTmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG93bk5hbWUgPSBuYW1lO1xuXG4gICAgICAgIGlmIChyZW5kZXIuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gZXhwb3J0cy5Qcm9maWxlciB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBleHBvcnRzLlN0cmljdE1vZGUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdXNwZW5zZSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAodHlwZS5kaXNwbGF5TmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgdHlwZS5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlcjtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICBpZiAodW5zdGFibGVfb2JzZXJ2ZWRCaXRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yKCd1c2VDb250ZXh0KCkgc2Vjb25kIGFyZ3VtZW50IGlzIHJlc2VydmVkIGZvciBmdXR1cmUgJyArICd1c2UgaW4gUmVhY3QuIFBhc3NpbmcgaXQgaXMgbm90IHN1cHBvcnRlZC4gJyArICdZb3UgcGFzc2VkOiAlcy4lcycsIHVuc3RhYmxlX29ic2VydmVkQml0cywgdHlwZW9mIHVuc3RhYmxlX29ic2VydmVkQml0cyA9PT0gJ251bWJlcicgJiYgQXJyYXkuaXNBcnJheShhcmd1bWVudHNbMl0pID8gJ1xcblxcbkRpZCB5b3UgY2FsbCBhcnJheS5tYXAodXNlQ29udGV4dCk/ICcgKyAnQ2FsbGluZyBIb29rcyBpbnNpZGUgYSBsb29wIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnTGVhcm4gbW9yZSBhdCBodHRwczovL3JlYWN0anMub3JnL2xpbmsvcnVsZXMtb2YtaG9va3MnIDogJycpO1xuICAgIH0gLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuXG5cbiAgICBpZiAoQ29udGV4dC5fY29udGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcmVhbENvbnRleHQgPSBDb250ZXh0Ll9jb250ZXh0OyAvLyBEb24ndCBkZWR1cGxpY2F0ZSBiZWNhdXNlIHRoaXMgbGVnaXRpbWF0ZWx5IGNhdXNlcyBidWdzXG4gICAgICAvLyBhbmQgbm9ib2R5IHNob3VsZCBiZSB1c2luZyB0aGlzIGluIGV4aXN0aW5nIGNvZGUuXG5cbiAgICAgIGlmIChyZWFsQ29udGV4dC5Db25zdW1lciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuQ29uc3VtZXIpIGlzIG5vdCBzdXBwb3J0ZWQsIG1heSBjYXVzZSBidWdzLCBhbmQgd2lsbCBiZSAnICsgJ3JlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfSBlbHNlIGlmIChyZWFsQ29udGV4dC5Qcm92aWRlciA9PT0gQ29udGV4dCkge1xuICAgICAgICBlcnJvcignQ2FsbGluZyB1c2VDb250ZXh0KENvbnRleHQuUHJvdmlkZXIpIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnRGlkIHlvdSBtZWFuIHRvIGNhbGwgdXNlQ29udGV4dChDb250ZXh0KSBpbnN0ZWFkPycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcy5fX3NvdXJjZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgaWYgKCFpbmZvKSB7XG4gICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gIGlmICghdmFsaWRUeXBlKSB7XG4gICAgdmFyIGluZm8gPSAnJztcblxuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhwcm9wcyk7XG5cbiAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgIH1cblxuICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG57XG5cbiAgdHJ5IHtcbiAgICB2YXIgZnJvemVuT2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tbmV3ICovXG5cbiAgICBuZXcgTWFwKFtbZnJvemVuT2JqZWN0LCBudWxsXV0pO1xuICAgIG5ldyBTZXQoW2Zyb3plbk9iamVjdF0pO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbmV3ICovXG4gIH0gY2F0Y2ggKGUpIHtcbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuUHVyZUNvbXBvbmVudCA9IFB1cmVDb21wb25lbnQ7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEID0gUmVhY3RTaGFyZWRJbnRlcm5hbHM7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMudXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaztcbmV4cG9ydHMudXNlQ29udGV4dCA9IHVzZUNvbnRleHQ7XG5leHBvcnRzLnVzZURlYnVnVmFsdWUgPSB1c2VEZWJ1Z1ZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VMYXlvdXRFZmZlY3QgPSB1c2VMYXlvdXRFZmZlY3Q7XG5leHBvcnRzLnVzZU1lbW8gPSB1c2VNZW1vO1xuZXhwb3J0cy51c2VSZWR1Y2VyID0gdXNlUmVkdWNlcjtcbmV4cG9ydHMudXNlUmVmID0gdXNlUmVmO1xuZXhwb3J0cy51c2VTdGF0ZSA9IHVzZVN0YXRlO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gIHZhciBoYXNoID0gNTM4MSxcbiAgICAgIGkgICAgPSBzdHIubGVuZ3RoO1xuXG4gIHdoaWxlKGkpIHtcbiAgICBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHIuY2hhckNvZGVBdCgtLWkpO1xuICB9XG5cbiAgLyogSmF2YVNjcmlwdCBkb2VzIGJpdHdpc2Ugb3BlcmF0aW9ucyAobGlrZSBYT1IsIGFib3ZlKSBvbiAzMi1iaXQgc2lnbmVkXG4gICAqIGludGVnZXJzLiBTaW5jZSB3ZSB3YW50IHRoZSByZXN1bHRzIHRvIGJlIGFsd2F5cyBwb3NpdGl2ZSwgY29udmVydCB0aGVcbiAgICogc2lnbmVkIGludCB0byBhbiB1bnNpZ25lZCBieSBkb2luZyBhbiB1bnNpZ25lZCBiaXRzaGlmdC4gKi9cbiAgcmV0dXJuIGhhc2ggPj4+IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuLypcbkJhc2VkIG9uIEdsYW1vcidzIHNoZWV0XG5odHRwczovL2dpdGh1Yi5jb20vdGhyZWVwb2ludG9uZS9nbGFtb3IvYmxvYi82NjdiNDgwZDMxYjM3MjFhOTA1MDIxYjI2ZTEyOTBjZTkyY2EyODc5L3NyYy9zaGVldC5qc1xuKi9cbnZhciBpc1Byb2QgPSB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxudmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG5cbnZhciBTdHlsZVNoZWV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldChfdGVtcCkge1xuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIF9yZWYkbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgbmFtZSA9IF9yZWYkbmFtZSA9PT0gdm9pZCAwID8gJ3N0eWxlc2hlZXQnIDogX3JlZiRuYW1lLFxuICAgICAgICBfcmVmJG9wdGltaXplRm9yU3BlZWQgPSBfcmVmLm9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIG9wdGltaXplRm9yU3BlZWQgPSBfcmVmJG9wdGltaXplRm9yU3BlZWQgPT09IHZvaWQgMCA/IGlzUHJvZCA6IF9yZWYkb3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgX3JlZiRpc0Jyb3dzZXIgPSBfcmVmLmlzQnJvd3NlcixcbiAgICAgICAgaXNCcm93c2VyID0gX3JlZiRpc0Jyb3dzZXIgPT09IHZvaWQgMCA/IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIDogX3JlZiRpc0Jyb3dzZXI7XG5cbiAgICBpbnZhcmlhbnQoaXNTdHJpbmcobmFtZSksICdgbmFtZWAgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIgPSBcIiNcIiArIG5hbWUgKyBcIi1kZWxldGVkLXJ1bGVfX19fe31cIjtcbiAgICBpbnZhcmlhbnQodHlwZW9mIG9wdGltaXplRm9yU3BlZWQgPT09ICdib29sZWFuJywgJ2BvcHRpbWl6ZUZvclNwZWVkYCBtdXN0IGJlIGEgYm9vbGVhbicpO1xuICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBvcHRpbWl6ZUZvclNwZWVkO1xuICAgIHRoaXMuX2lzQnJvd3NlciA9IGlzQnJvd3NlcjtcbiAgICB0aGlzLl9zZXJ2ZXJTaGVldCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl90YWdzID0gW107XG4gICAgdGhpcy5faW5qZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9ydWxlc0NvdW50ID0gMDtcbiAgICB2YXIgbm9kZSA9IHRoaXMuX2lzQnJvd3NlciAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW3Byb3BlcnR5PVwiY3NwLW5vbmNlXCJdJyk7XG4gICAgdGhpcy5fbm9uY2UgPSBub2RlID8gbm9kZS5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSA6IG51bGw7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldE9wdGltaXplRm9yU3BlZWQgPSBmdW5jdGlvbiBzZXRPcHRpbWl6ZUZvclNwZWVkKGJvb2wpIHtcbiAgICBpbnZhcmlhbnQodHlwZW9mIGJvb2wgPT09ICdib29sZWFuJywgJ2BzZXRPcHRpbWl6ZUZvclNwZWVkYCBhY2NlcHRzIGEgYm9vbGVhbicpO1xuICAgIGludmFyaWFudCh0aGlzLl9ydWxlc0NvdW50ID09PSAwLCAnb3B0aW1pemVGb3JTcGVlZCBjYW5ub3QgYmUgd2hlbiBydWxlcyBoYXZlIGFscmVhZHkgYmVlbiBpbnNlcnRlZCcpO1xuICAgIHRoaXMuZmx1c2goKTtcbiAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gYm9vbDtcbiAgICB0aGlzLmluamVjdCgpO1xuICB9O1xuXG4gIF9wcm90by5pc09wdGltaXplRm9yU3BlZWQgPSBmdW5jdGlvbiBpc09wdGltaXplRm9yU3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGltaXplRm9yU3BlZWQ7XG4gIH07XG5cbiAgX3Byb3RvLmluamVjdCA9IGZ1bmN0aW9uIGluamVjdCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaW52YXJpYW50KCF0aGlzLl9pbmplY3RlZCwgJ3NoZWV0IGFscmVhZHkgaW5qZWN0ZWQnKTtcbiAgICB0aGlzLl9pbmplY3RlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5faXNCcm93c2VyICYmIHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHRoaXMuX3RhZ3NbMF0gPSB0aGlzLm1ha2VTdHlsZVRhZyh0aGlzLl9uYW1lKTtcbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSAnaW5zZXJ0UnVsZScgaW4gdGhpcy5nZXRTaGVldCgpO1xuXG4gICAgICBpZiAoIXRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1N0eWxlU2hlZXQ6IG9wdGltaXplRm9yU3BlZWQgbW9kZSBub3Qgc3VwcG9ydGVkIGZhbGxpbmcgYmFjayB0byBzdGFuZGFyZCBtb2RlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mbHVzaCgpO1xuICAgICAgICB0aGlzLl9pbmplY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXJ2ZXJTaGVldCA9IHtcbiAgICAgIGNzc1J1bGVzOiBbXSxcbiAgICAgIGluc2VydFJ1bGU6IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBfdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXNbaW5kZXhdID0ge1xuICAgICAgICAgICAgY3NzVGV4dDogcnVsZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzLnB1c2goe1xuICAgICAgICAgICAgY3NzVGV4dDogcnVsZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfSxcbiAgICAgIGRlbGV0ZVJ1bGU6IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICAgICAgX3RoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzW2luZGV4XSA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0U2hlZXRGb3JUYWcgPSBmdW5jdGlvbiBnZXRTaGVldEZvclRhZyh0YWcpIHtcbiAgICBpZiAodGFnLnNoZWV0KSB7XG4gICAgICByZXR1cm4gdGFnLnNoZWV0O1xuICAgIH0gLy8gdGhpcyB3ZWlyZG5lc3MgYnJvdWdodCB0byB5b3UgYnkgZmlyZWZveFxuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuc3R5bGVTaGVldHNbaV0ub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0U2hlZXQgPSBmdW5jdGlvbiBnZXRTaGVldCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTaGVldEZvclRhZyh0aGlzLl90YWdzW3RoaXMuX3RhZ3MubGVuZ3RoIC0gMV0pO1xuICB9O1xuXG4gIF9wcm90by5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlLCBpbmRleCkge1xuICAgIGludmFyaWFudChpc1N0cmluZyhydWxlKSwgJ2BpbnNlcnRSdWxlYCBhY2NlcHRzIG9ubHkgc3RyaW5ncycpO1xuXG4gICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICAgIGluZGV4ID0gdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXJ2ZXJTaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcblxuICAgICAgcmV0dXJuIHRoaXMuX3J1bGVzQ291bnQrKztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdmFyIHNoZWV0ID0gdGhpcy5nZXRTaGVldCgpO1xuXG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpbmRleCA9IHNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgIH0gLy8gdGhpcyB3ZWlyZG5lc3MgZm9yIHBlcmYsIGFuZCBjaHJvbWUncyB3ZWlyZCBidWdcbiAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIwMDA3OTkyL2Nocm9tZS1zdWRkZW5seS1zdG9wcGVkLWFjY2VwdGluZy1pbnNlcnRydWxlXG5cblxuICAgICAgdHJ5IHtcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlU2hlZXQ6IGlsbGVnYWwgcnVsZTogXFxuXFxuXCIgKyBydWxlICsgXCJcXG5cXG5TZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIwMDA3OTkyIGZvciBtb3JlIGluZm9cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpbnNlcnRpb25Qb2ludCA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xuXG4gICAgICB0aGlzLl90YWdzLnB1c2godGhpcy5tYWtlU3R5bGVUYWcodGhpcy5fbmFtZSwgcnVsZSwgaW5zZXJ0aW9uUG9pbnQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fcnVsZXNDb3VudCsrO1xuICB9O1xuXG4gIF9wcm90by5yZXBsYWNlUnVsZSA9IGZ1bmN0aW9uIHJlcGxhY2VSdWxlKGluZGV4LCBydWxlKSB7XG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQgfHwgIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgdmFyIHNoZWV0ID0gdGhpcy5faXNCcm93c2VyID8gdGhpcy5nZXRTaGVldCgpIDogdGhpcy5fc2VydmVyU2hlZXQ7XG5cbiAgICAgIGlmICghcnVsZS50cmltKCkpIHtcbiAgICAgICAgcnVsZSA9IHRoaXMuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXI7XG4gICAgICB9XG5cbiAgICAgIGlmICghc2hlZXQuY3NzUnVsZXNbaW5kZXhdKSB7XG4gICAgICAgIC8vIEBUQkQgU2hvdWxkIHdlIHRocm93IGFuIGVycm9yP1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICghaXNQcm9kKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiU3R5bGVTaGVldDogaWxsZWdhbCBydWxlOiBcXG5cXG5cIiArIHJ1bGUgKyBcIlxcblxcblNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMjAwMDc5OTIgZm9yIG1vcmUgaW5mb1wiKTtcbiAgICAgICAgfSAvLyBJbiBvcmRlciB0byBwcmVzZXJ2ZSB0aGUgaW5kaWNlcyB3ZSBpbnNlcnQgYSBkZWxldGVSdWxlUGxhY2Vob2xkZXJcblxuXG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUodGhpcy5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlciwgaW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGFnID0gdGhpcy5fdGFnc1tpbmRleF07XG4gICAgICBpbnZhcmlhbnQodGFnLCBcIm9sZCBydWxlIGF0IGluZGV4IGBcIiArIGluZGV4ICsgXCJgIG5vdCBmb3VuZFwiKTtcbiAgICAgIHRhZy50ZXh0Q29udGVudCA9IHJ1bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9O1xuXG4gIF9wcm90by5kZWxldGVSdWxlID0gZnVuY3Rpb24gZGVsZXRlUnVsZShpbmRleCkge1xuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9zZXJ2ZXJTaGVldC5kZWxldGVSdWxlKGluZGV4KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB0aGlzLnJlcGxhY2VSdWxlKGluZGV4LCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0YWcgPSB0aGlzLl90YWdzW2luZGV4XTtcbiAgICAgIGludmFyaWFudCh0YWcsIFwicnVsZSBhdCBpbmRleCBgXCIgKyBpbmRleCArIFwiYCBub3QgZm91bmRcIik7XG4gICAgICB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgICAgdGhpcy5fdGFnc1tpbmRleF0gPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB0aGlzLl9pbmplY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3J1bGVzQ291bnQgPSAwO1xuXG4gICAgaWYgKHRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fdGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgcmV0dXJuIHRhZyAmJiB0YWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWcpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3RhZ3MgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2ltcGxlciBvbiBzZXJ2ZXJcbiAgICAgIHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzID0gW107XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jc3NSdWxlcyA9IGZ1bmN0aW9uIGNzc1J1bGVzKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fdGFncy5yZWR1Y2UoZnVuY3Rpb24gKHJ1bGVzLCB0YWcpIHtcbiAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgcnVsZXMgPSBydWxlcy5jb25jYXQoQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKF90aGlzMi5nZXRTaGVldEZvclRhZyh0YWcpLmNzc1J1bGVzLCBmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICAgIHJldHVybiBydWxlLmNzc1RleHQgPT09IF90aGlzMi5fZGVsZXRlZFJ1bGVQbGFjZWhvbGRlciA/IG51bGwgOiBydWxlO1xuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBydWxlcy5wdXNoKG51bGwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcnVsZXM7XG4gICAgfSwgW10pO1xuICB9O1xuXG4gIF9wcm90by5tYWtlU3R5bGVUYWcgPSBmdW5jdGlvbiBtYWtlU3R5bGVUYWcobmFtZSwgY3NzU3RyaW5nLCByZWxhdGl2ZVRvVGFnKSB7XG4gICAgaWYgKGNzc1N0cmluZykge1xuICAgICAgaW52YXJpYW50KGlzU3RyaW5nKGNzc1N0cmluZyksICdtYWtlU3R5bGVUYWcgYWNjZXBzIG9ubHkgc3RyaW5ncyBhcyBzZWNvbmQgcGFyYW1ldGVyJyk7XG4gICAgfVxuXG4gICAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgaWYgKHRoaXMuX25vbmNlKSB0YWcuc2V0QXR0cmlidXRlKCdub25jZScsIHRoaXMuX25vbmNlKTtcbiAgICB0YWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgdGFnLnNldEF0dHJpYnV0ZShcImRhdGEtXCIgKyBuYW1lLCAnJyk7XG5cbiAgICBpZiAoY3NzU3RyaW5nKSB7XG4gICAgICB0YWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzU3RyaW5nKSk7XG4gICAgfVxuXG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG5cbiAgICBpZiAocmVsYXRpdmVUb1RhZykge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUodGFnLCByZWxhdGl2ZVRvVGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZCh0YWcpO1xuICAgIH1cblxuICAgIHJldHVybiB0YWc7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFN0eWxlU2hlZXQsIFt7XG4gICAga2V5OiBcImxlbmd0aFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1bGVzQ291bnQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXQ7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU3R5bGVTaGVldDtcblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN0eWxlU2hlZXQ6IFwiICsgbWVzc2FnZSArIFwiLlwiKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5mbHVzaCA9IGZsdXNoO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfc3R5bGVzaGVldFJlZ2lzdHJ5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zdHlsZXNoZWV0LXJlZ2lzdHJ5XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgc3R5bGVTaGVldFJlZ2lzdHJ5ID0gbmV3IF9zdHlsZXNoZWV0UmVnaXN0cnlbXCJkZWZhdWx0XCJdKCk7XG5cbnZhciBKU1hTdHlsZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShKU1hTdHlsZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSlNYU3R5bGUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5wcmV2UHJvcHMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBKU1hTdHlsZS5keW5hbWljID0gZnVuY3Rpb24gZHluYW1pYyhpbmZvKSB7XG4gICAgcmV0dXJuIGluZm8ubWFwKGZ1bmN0aW9uICh0YWdJbmZvKSB7XG4gICAgICB2YXIgYmFzZUlkID0gdGFnSW5mb1swXTtcbiAgICAgIHZhciBwcm9wcyA9IHRhZ0luZm9bMV07XG4gICAgICByZXR1cm4gc3R5bGVTaGVldFJlZ2lzdHJ5LmNvbXB1dGVJZChiYXNlSWQsIHByb3BzKTtcbiAgICB9KS5qb2luKCcgJyk7XG4gIH0gLy8gcHJvYmFibHkgZmFzdGVyIHRoYW4gUHVyZUNvbXBvbmVudCAoc2hhbGxvd0VxdWFsKVxuICA7XG5cbiAgdmFyIF9wcm90byA9IEpTWFN0eWxlLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG90aGVyUHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pZCAhPT0gb3RoZXJQcm9wcy5pZCB8fCAvLyBXZSBkbyB0aGlzIGNoZWNrIGJlY2F1c2UgYGR5bmFtaWNgIGlzIGFuIGFycmF5IG9mIHN0cmluZ3Mgb3IgdW5kZWZpbmVkLlxuICAgIC8vIFRoZXNlIGFyZSB0aGUgY29tcHV0ZWQgdmFsdWVzIGZvciBkeW5hbWljIHN0eWxlcy5cbiAgICBTdHJpbmcodGhpcy5wcm9wcy5keW5hbWljKSAhPT0gU3RyaW5nKG90aGVyUHJvcHMuZHluYW1pYyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgc3R5bGVTaGVldFJlZ2lzdHJ5LnJlbW92ZSh0aGlzLnByb3BzKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIC8vIFRoaXMgaXMgYSB3b3JrYXJvdW5kIHRvIG1ha2UgdGhlIHNpZGUgZWZmZWN0IGFzeW5jIHNhZmUgaW4gdGhlIFwicmVuZGVyXCIgcGhhc2UuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L3N0eWxlZC1qc3gvcHVsbC80ODRcbiAgICBpZiAodGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUodGhpcy5wcmV2UHJvcHMpKSB7XG4gICAgICAvLyBVcGRhdGVzXG4gICAgICBpZiAodGhpcy5wcmV2UHJvcHMuaWQpIHtcbiAgICAgICAgc3R5bGVTaGVldFJlZ2lzdHJ5LnJlbW92ZSh0aGlzLnByZXZQcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5hZGQodGhpcy5wcm9wcyk7XG4gICAgICB0aGlzLnByZXZQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIEpTWFN0eWxlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBKU1hTdHlsZTtcblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gIHZhciBjc3NSdWxlcyA9IHN0eWxlU2hlZXRSZWdpc3RyeS5jc3NSdWxlcygpO1xuICBzdHlsZVNoZWV0UmVnaXN0cnkuZmx1c2goKTtcbiAgcmV0dXJuIGNzc1J1bGVzO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3RyaW5nSGFzaCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInN0cmluZy1oYXNoXCIpKTtcblxudmFyIF9zdHlsZXNoZWV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9saWIvc3R5bGVzaGVldFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgc2FuaXRpemUgPSBmdW5jdGlvbiBzYW5pdGl6ZShydWxlKSB7XG4gIHJldHVybiBydWxlLnJlcGxhY2UoL1xcL3N0eWxlL2dpLCAnXFxcXC9zdHlsZScpO1xufTtcblxudmFyIFN0eWxlU2hlZXRSZWdpc3RyeSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXRSZWdpc3RyeShfdGVtcCkge1xuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIF9yZWYkc3R5bGVTaGVldCA9IF9yZWYuc3R5bGVTaGVldCxcbiAgICAgICAgc3R5bGVTaGVldCA9IF9yZWYkc3R5bGVTaGVldCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkc3R5bGVTaGVldCxcbiAgICAgICAgX3JlZiRvcHRpbWl6ZUZvclNwZWVkID0gX3JlZi5vcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBvcHRpbWl6ZUZvclNwZWVkID0gX3JlZiRvcHRpbWl6ZUZvclNwZWVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkb3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgX3JlZiRpc0Jyb3dzZXIgPSBfcmVmLmlzQnJvd3NlcixcbiAgICAgICAgaXNCcm93c2VyID0gX3JlZiRpc0Jyb3dzZXIgPT09IHZvaWQgMCA/IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnIDogX3JlZiRpc0Jyb3dzZXI7XG5cbiAgICB0aGlzLl9zaGVldCA9IHN0eWxlU2hlZXQgfHwgbmV3IF9zdHlsZXNoZWV0W1wiZGVmYXVsdFwiXSh7XG4gICAgICBuYW1lOiAnc3R5bGVkLWpzeCcsXG4gICAgICBvcHRpbWl6ZUZvclNwZWVkOiBvcHRpbWl6ZUZvclNwZWVkXG4gICAgfSk7XG5cbiAgICB0aGlzLl9zaGVldC5pbmplY3QoKTtcblxuICAgIGlmIChzdHlsZVNoZWV0ICYmIHR5cGVvZiBvcHRpbWl6ZUZvclNwZWVkID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHRoaXMuX3NoZWV0LnNldE9wdGltaXplRm9yU3BlZWQob3B0aW1pemVGb3JTcGVlZCk7XG5cbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSB0aGlzLl9zaGVldC5pc09wdGltaXplRm9yU3BlZWQoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gICAgdGhpcy5fZnJvbVNlcnZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pbmRpY2VzID0ge307XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0ge307XG4gICAgdGhpcy5jb21wdXRlSWQgPSB0aGlzLmNyZWF0ZUNvbXB1dGVJZCgpO1xuICAgIHRoaXMuY29tcHV0ZVNlbGVjdG9yID0gdGhpcy5jcmVhdGVDb21wdXRlU2VsZWN0b3IoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0UmVnaXN0cnkucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGQgPSBmdW5jdGlvbiBhZGQocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IEFycmF5LmlzQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICB0aGlzLl9zaGVldC5zZXRPcHRpbWl6ZUZvclNwZWVkKHRoaXMuX29wdGltaXplRm9yU3BlZWQpO1xuXG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gdGhpcy5fc2hlZXQuaXNPcHRpbWl6ZUZvclNwZWVkKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzQnJvd3NlciAmJiAhdGhpcy5fZnJvbVNlcnZlcikge1xuICAgICAgdGhpcy5fZnJvbVNlcnZlciA9IHRoaXMuc2VsZWN0RnJvbVNlcnZlcigpO1xuICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0gT2JqZWN0LmtleXModGhpcy5fZnJvbVNlcnZlcikucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHRhZ05hbWUpIHtcbiAgICAgICAgYWNjW3RhZ05hbWVdID0gMDtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkZ2V0SWRBbmRSdWxlcyA9IHRoaXMuZ2V0SWRBbmRSdWxlcyhwcm9wcyksXG4gICAgICAgIHN0eWxlSWQgPSBfdGhpcyRnZXRJZEFuZFJ1bGVzLnN0eWxlSWQsXG4gICAgICAgIHJ1bGVzID0gX3RoaXMkZ2V0SWRBbmRSdWxlcy5ydWxlczsgLy8gRGVkdXBpbmc6IGp1c3QgaW5jcmVhc2UgdGhlIGluc3RhbmNlcyBjb3VudC5cblxuXG4gICAgaWYgKHN0eWxlSWQgaW4gdGhpcy5faW5zdGFuY2VzQ291bnRzKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gKz0gMTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaW5kaWNlcyA9IHJ1bGVzLm1hcChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcmV0dXJuIF90aGlzLl9zaGVldC5pbnNlcnRSdWxlKHJ1bGUpO1xuICAgIH0pIC8vIEZpbHRlciBvdXQgaW52YWxpZCBydWxlc1xuICAgIC5maWx0ZXIoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggIT09IC0xO1xuICAgIH0pO1xuICAgIHRoaXMuX2luZGljZXNbc3R5bGVJZF0gPSBpbmRpY2VzO1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSA9IDE7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShwcm9wcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF90aGlzJGdldElkQW5kUnVsZXMyID0gdGhpcy5nZXRJZEFuZFJ1bGVzKHByb3BzKSxcbiAgICAgICAgc3R5bGVJZCA9IF90aGlzJGdldElkQW5kUnVsZXMyLnN0eWxlSWQ7XG5cbiAgICBpbnZhcmlhbnQoc3R5bGVJZCBpbiB0aGlzLl9pbnN0YW5jZXNDb3VudHMsIFwic3R5bGVJZDogYFwiICsgc3R5bGVJZCArIFwiYCBub3QgZm91bmRcIik7XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdIC09IDE7XG5cbiAgICBpZiAodGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdIDwgMSkge1xuICAgICAgdmFyIHRhZ0Zyb21TZXJ2ZXIgPSB0aGlzLl9mcm9tU2VydmVyICYmIHRoaXMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF07XG5cbiAgICAgIGlmICh0YWdGcm9tU2VydmVyKSB7XG4gICAgICAgIHRhZ0Zyb21TZXJ2ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0YWdGcm9tU2VydmVyKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdLmZvckVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5fc2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHByb3BzLCBuZXh0UHJvcHMpIHtcbiAgICB0aGlzLmFkZChuZXh0UHJvcHMpO1xuICAgIHRoaXMucmVtb3ZlKHByb3BzKTtcbiAgfTtcblxuICBfcHJvdG8uZmx1c2ggPSBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICB0aGlzLl9zaGVldC5mbHVzaCgpO1xuXG4gICAgdGhpcy5fc2hlZXQuaW5qZWN0KCk7XG5cbiAgICB0aGlzLl9mcm9tU2VydmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2luZGljZXMgPSB7fTtcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHMgPSB7fTtcbiAgICB0aGlzLmNvbXB1dGVJZCA9IHRoaXMuY3JlYXRlQ29tcHV0ZUlkKCk7XG4gICAgdGhpcy5jb21wdXRlU2VsZWN0b3IgPSB0aGlzLmNyZWF0ZUNvbXB1dGVTZWxlY3RvcigpO1xuICB9O1xuXG4gIF9wcm90by5jc3NSdWxlcyA9IGZ1bmN0aW9uIGNzc1J1bGVzKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGZyb21TZXJ2ZXIgPSB0aGlzLl9mcm9tU2VydmVyID8gT2JqZWN0LmtleXModGhpcy5fZnJvbVNlcnZlcikubWFwKGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICByZXR1cm4gW3N0eWxlSWQsIF90aGlzMy5fZnJvbVNlcnZlcltzdHlsZUlkXV07XG4gICAgfSkgOiBbXTtcblxuICAgIHZhciBjc3NSdWxlcyA9IHRoaXMuX3NoZWV0LmNzc1J1bGVzKCk7XG5cbiAgICByZXR1cm4gZnJvbVNlcnZlci5jb25jYXQoT2JqZWN0LmtleXModGhpcy5faW5kaWNlcykubWFwKGZ1bmN0aW9uIChzdHlsZUlkKSB7XG4gICAgICByZXR1cm4gW3N0eWxlSWQsIF90aGlzMy5faW5kaWNlc1tzdHlsZUlkXS5tYXAoZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHJldHVybiBjc3NSdWxlc1tpbmRleF0uY3NzVGV4dDtcbiAgICAgIH0pLmpvaW4oX3RoaXMzLl9vcHRpbWl6ZUZvclNwZWVkID8gJycgOiAnXFxuJyldO1xuICAgIH0pIC8vIGZpbHRlciBvdXQgZW1wdHkgcnVsZXNcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihydWxlWzFdKTtcbiAgICB9KSk7XG4gIH1cbiAgLyoqXG4gICAqIGNyZWF0ZUNvbXB1dGVJZFxuICAgKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBhbmQgbWVtb2l6ZSBhIGpzeCBpZCBmcm9tIGEgYmFzZWRJZCBhbmQgb3B0aW9uYWxseSBwcm9wcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlQ29tcHV0ZUlkID0gZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZUlkKCkge1xuICAgIHZhciBjYWNoZSA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoYmFzZUlkLCBwcm9wcykge1xuICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICByZXR1cm4gXCJqc3gtXCIgKyBiYXNlSWQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wc1RvU3RyaW5nID0gU3RyaW5nKHByb3BzKTtcbiAgICAgIHZhciBrZXkgPSBiYXNlSWQgKyBwcm9wc1RvU3RyaW5nOyAvLyByZXR1cm4gYGpzeC0ke2hhc2hTdHJpbmcoYCR7YmFzZUlkfS0ke3Byb3BzVG9TdHJpbmd9YCl9YFxuXG4gICAgICBpZiAoIWNhY2hlW2tleV0pIHtcbiAgICAgICAgY2FjaGVba2V5XSA9IFwianN4LVwiICsgKDAsIF9zdHJpbmdIYXNoW1wiZGVmYXVsdFwiXSkoYmFzZUlkICsgXCItXCIgKyBwcm9wc1RvU3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlW2tleV07XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogY3JlYXRlQ29tcHV0ZVNlbGVjdG9yXG4gICAqXG4gICAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0byBjb21wdXRlIGFuZCBtZW1vaXplIGR5bmFtaWMgc2VsZWN0b3JzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5jcmVhdGVDb21wdXRlU2VsZWN0b3IgPSBmdW5jdGlvbiBjcmVhdGVDb21wdXRlU2VsZWN0b3Ioc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwKSB7XG4gICAgaWYgKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCA9PT0gdm9pZCAwKSB7XG4gICAgICBzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAgPSAvX19qc3gtc3R5bGUtZHluYW1pYy1zZWxlY3Rvci9nO1xuICAgIH1cblxuICAgIHZhciBjYWNoZSA9IHt9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoaWQsIGNzcykge1xuICAgICAgLy8gU2FuaXRpemUgU1NSLWVkIENTUy5cbiAgICAgIC8vIENsaWVudCBzaWRlIGNvZGUgZG9lc24ndCBuZWVkIHRvIGJlIHNhbml0aXplZCBzaW5jZSB3ZSB1c2VcbiAgICAgIC8vIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlIChkZXYpIGFuZCB0aGUgQ1NTT00gYXBpIHNoZWV0Lmluc2VydFJ1bGUgKHByb2QpLlxuICAgICAgaWYgKCF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgICAgY3NzID0gc2FuaXRpemUoY3NzKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGlkY3NzID0gaWQgKyBjc3M7XG5cbiAgICAgIGlmICghY2FjaGVbaWRjc3NdKSB7XG4gICAgICAgIGNhY2hlW2lkY3NzXSA9IGNzcy5yZXBsYWNlKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCwgaWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FjaGVbaWRjc3NdO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldElkQW5kUnVsZXMgPSBmdW5jdGlvbiBnZXRJZEFuZFJ1bGVzKHByb3BzKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgY3NzID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGR5bmFtaWMgPSBwcm9wcy5keW5hbWljLFxuICAgICAgICBpZCA9IHByb3BzLmlkO1xuXG4gICAgaWYgKGR5bmFtaWMpIHtcbiAgICAgIHZhciBzdHlsZUlkID0gdGhpcy5jb21wdXRlSWQoaWQsIGR5bmFtaWMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3R5bGVJZDogc3R5bGVJZCxcbiAgICAgICAgcnVsZXM6IEFycmF5LmlzQXJyYXkoY3NzKSA/IGNzcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmNvbXB1dGVTZWxlY3RvcihzdHlsZUlkLCBydWxlKTtcbiAgICAgICAgfSkgOiBbdGhpcy5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgY3NzKV1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0eWxlSWQ6IHRoaXMuY29tcHV0ZUlkKGlkKSxcbiAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGNzcykgPyBjc3MgOiBbY3NzXVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIHNlbGVjdEZyb21TZXJ2ZXJcbiAgICpcbiAgICogQ29sbGVjdHMgc3R5bGUgdGFncyBmcm9tIHRoZSBkb2N1bWVudCB3aXRoIGlkIF9fanN4LVhYWFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZWxlY3RGcm9tU2VydmVyID0gZnVuY3Rpb24gc2VsZWN0RnJvbVNlcnZlcigpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbaWRePVwiX19qc3gtXCJdJykpO1xuICAgIHJldHVybiBlbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZWxlbWVudCkge1xuICAgICAgdmFyIGlkID0gZWxlbWVudC5pZC5zbGljZSgyKTtcbiAgICAgIGFjY1tpZF0gPSBlbGVtZW50O1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgcmV0dXJuIFN0eWxlU2hlZXRSZWdpc3RyeTtcbn0oKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdHlsZVNoZWV0UmVnaXN0cnk7XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZVNoZWV0UmVnaXN0cnk6IFwiICsgbWVzc2FnZSArIFwiLlwiKTtcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3N0eWxlJylcbiJdLCJzb3VyY2VSb290IjoiIn0=