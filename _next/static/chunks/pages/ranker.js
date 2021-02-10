_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/ranker"],{

/***/ "./app/components/HeroHeader/index.tsx":
/*!*********************************************!*\
  !*** ./app/components/HeroHeader/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/comps/heroheader.module.css */ "./styles/comps/heroheader.module.css");
/* harmony import */ var _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_WeaponTypeIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/WeaponTypeIcon */ "./app/components/WeaponTypeIcon/index.tsx");
/* harmony import */ var _app_components_MoveTypeIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/MoveTypeIcon */ "./app/components/MoveTypeIcon/index.tsx");
/* harmony import */ var _app_components_Img__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/Img */ "./app/components/Img/index.tsx");


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
  var style = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return hidden ? {
      display: 'none',
      order: order
    } : {
      order: order
    };
  }, [hidden, order]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    style: style,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a['img-container'],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_Img__WEBPACK_IMPORTED_MODULE_5__["default"], {
        src: faceSrc,
        loading: "lazy"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), bst && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bst,
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a['title-and-name'],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title,
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.name,
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.types,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_WeaponTypeIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          weaponType: weaponType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_MoveTypeIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
          moveType: moveType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), pool === 'duo' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_Img__WEBPACK_IMPORTED_MODULE_5__["default"], {
          src: "/assets/unit-duo.png",
          loading: "lazy",
          className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.blessing
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), pool === 'harmonized' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_Img__WEBPACK_IMPORTED_MODULE_5__["default"], {
          src: "/assets/harmonized.png",
          loading: "lazy",
          className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.blessing
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this), blessingSrc && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_Img__WEBPACK_IMPORTED_MODULE_5__["default"], {
          src: blessingSrc,
          loading: "lazy",
          className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.blessing
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_comps_heroheader_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.stats,
        children: [hp && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: ["HP ", hp]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 18
        }, this), atk && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: ["\u653B\u64CA ", atk]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 19
        }, this), spd && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: ["\u901F\u5EA6 ", spd]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 19
        }, this), def && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: ["\u9632\u5B88 ", def]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 19
        }, this), res && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(HeroHeader));

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/IconCheckbox/index.tsx":
/*!***********************************************!*\
  !*** ./app/components/IconCheckbox/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\IconCheckbox\\index.tsx";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function IconCheckbox(_ref) {
  var checked = _ref.checked,
      onClick = _ref.onClick,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["checked", "onClick", "children"]);

  var opacity = checked ? 1 : 0.25;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", _objectSpread(_objectSpread({
      "data-checked": checked,
      onClick: onClick
    }, props), {}, {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a.dynamic([["1657900522", [opacity]]]) + " " + (props && props.className != null && props.className || ""),
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/Img/index.tsx":
/*!**************************************!*\
  !*** ./app/components/Img/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");




var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\Img\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Img(_ref) {
  _s();

  var _src = _ref.src,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["src"]);

  var src = Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(_src);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", _objectSpread({
    src: src
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

_s(Img, "jmMg9W0Uygudgr0AmaFzDCAj78o=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/MoveTypeIcon/index.tsx":
/*!***********************************************!*\
  !*** ./app/components/MoveTypeIcon/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\MoveTypeIcon\\index.tsx",
    _s = $RefreshSig$();






var backgroundPosition = function backgroundPosition(index) {
  return "".concat(index * -56, "px 0");
};

function MoveTypeIcon(_ref) {
  _s();

  var moveType = _ref.moveType;
  var style = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var index = _app_utils_generals__WEBPACK_IMPORTED_MODULE_3__["moveTypes"].indexOf(moveType);
    return {
      backgroundPosition: backgroundPosition(index)
    };
  }, [moveType]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: style,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2617712003", [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/move-type.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2617712003",
      dynamic: [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/move-type.png')],
      children: "div.__jsx-style-dynamic-selector{background:no-repeat url('".concat(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/move-type.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcTW92ZVR5cGVJY29uXFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JTLEFBSWtELHlEQUMxQixXQUNDLFlBQ2QiLCJmaWxlIjoiRjpcXHJlcG9zXFxyZWFjdC1mZWgtc2l0ZVxcYXBwXFxjb21wb25lbnRzXFxNb3ZlVHlwZUljb25cXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3ZlVHlwZXMgfSBmcm9tICdAL2FwcC91dGlscy9nZW5lcmFscyc7XG5pbXBvcnQgeyBUTW92ZVR5cGUgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuXG5jb25zdCBiYWNrZ3JvdW5kUG9zaXRpb24gPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7aW5kZXggKiAtNTZ9cHggMGA7XG5cbmZ1bmN0aW9uIE1vdmVUeXBlSWNvbih7IG1vdmVUeXBlIH06IHsgbW92ZVR5cGU6IFRNb3ZlVHlwZSB9KTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qgc3R5bGUgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IG1vdmVUeXBlcy5pbmRleE9mKG1vdmVUeXBlKTtcbiAgICByZXR1cm4ge1xuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24oaW5kZXgpLFxuICAgIH07XG4gIH0sIFttb3ZlVHlwZV0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdFxuICAgICAgICAgICAgICB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvbW92ZS10eXBlLnBuZycpfScpO1xuICAgICAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92ZVR5cGVJY29uO1xuIl19 */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\MoveTypeIcon\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(MoveTypeIcon, "YSjFL2MYXgh6lJFn3xXnuDh74Dk=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/AllCheckbox/index.tsx":
/*!************************************************************!*\
  !*** ./app/components/TypeCheckboxs/AllCheckbox/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\AllCheckbox\\index.tsx",
    _s = $RefreshSig$();




function AllCheckbox(_ref) {
  _s();

  var checked = _ref.checked,
      indeterminated = _ref.indeterminated,
      onClick = _ref.onClick;
  var opacity = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (indeterminated) {
      return 0.5;
    }

    if (checked) {
      return 1;
    }

    return 0.25;
  }, [indeterminated, checked]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    role: "button",
    style: {
      opacity: opacity
    },
    onClick: onClick,
    className: "jsx-867646372",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-867646372",
      children: "\u5168"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/DancerCheckbox/index.tsx":
/*!***************************************************************!*\
  !*** ./app/components/TypeCheckboxs/DancerCheckbox/index.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\DancerCheckbox\\index.tsx",
    _s = $RefreshSig$();






function DancerCheckbox(_ref) {
  _s();

  var checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checked: checked,
    onClick: onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1793609765", [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/dancer.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1793609765",
      dynamic: [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/dancer.png')],
      children: ".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-image:url('".concat(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/dancer.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcRGFuY2VyQ2hlY2tib3hcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFFcUMsNEJBQ0QsMkJBQzBCLHFEQUMxQyxXQUNDLFlBQ2QiLCJmaWxlIjoiRjpcXHJlcG9zXFxyZWFjdC1mZWgtc2l0ZVxcYXBwXFxjb21wb25lbnRzXFxUeXBlQ2hlY2tib3hzXFxEYW5jZXJDaGVja2JveFxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JY29uQ2hlY2tib3gnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7IFRCdXR0b25FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBEYW5jZXJDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvZGFuY2VyLnBuZycpfScpO1xuICAgICAgICB3aWR0aDogNTJweDtcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYH08L3N0eWxlPlxuICAgIDwvSWNvbkNoZWNrYm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYW5jZXJDaGVja2JveDtcbiJdfQ== */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\DancerCheckbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(DancerCheckbox, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/DuoCheckbox/index.tsx":
/*!************************************************************!*\
  !*** ./app/components/TypeCheckboxs/DuoCheckbox/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\DuoCheckbox\\index.tsx",
    _s = $RefreshSig$();






function DuoCheckbox(_ref) {
  _s();

  var checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checked: checked,
    onClick: onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1089836651", [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/unit-duo.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1089836651",
      dynamic: [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/unit-duo.png')],
      children: ".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url('".concat(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/unit-duo.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcRHVvQ2hlY2tib3hcXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFla0IsQUFFcUMsNEJBQ0QsMkJBQ0gsd0JBQzZCLHFEQUMxQyxXQUNDLFlBQ2QiLCJmaWxlIjoiRjpcXHJlcG9zXFxyZWFjdC1mZWgtc2l0ZVxcYXBwXFxjb21wb25lbnRzXFxUeXBlQ2hlY2tib3hzXFxEdW9DaGVja2JveFxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JY29uQ2hlY2tib3gnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7IFRCdXR0b25FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBEdW9DaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt1c2VCYXNlUGF0aFVybCgnL2Fzc2V0cy91bml0LWR1by5wbmcnKX0nKTtcbiAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ljb25DaGVja2JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHVvQ2hlY2tib3g7XG4iXX0= */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\DuoCheckbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(DuoCheckbox, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/GrailCheckbox/index.tsx":
/*!**************************************************************!*\
  !*** ./app/components/TypeCheckboxs/GrailCheckbox/index.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\GrailCheckbox\\index.tsx",
    _s = $RefreshSig$();






function GrailCheckbox(_ref) {
  _s();

  var checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checked: checked,
    onClick: onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2124255049", [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/Heroic_Grail.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2124255049",
      dynamic: [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/Heroic_Grail.png')],
      children: ".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-size:contain;background-image:url('".concat(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/Heroic_Grail.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcR3JhaWxDaGVja2JveFxcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUVxQyw0QkFDRCwyQkFDSCx3QkFDNkIscURBQzFDLFdBQ0MsWUFDZCIsImZpbGUiOiJGOlxccmVwb3NcXHJlYWN0LWZlaC1zaXRlXFxhcHBcXGNvbXBvbmVudHNcXFR5cGVDaGVja2JveHNcXEdyYWlsQ2hlY2tib3hcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbkNoZWNrYm94IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSWNvbkNoZWNrYm94JztcbmltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5pbXBvcnQgeyBUQnV0dG9uRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vaGVscGVyJztcblxuZnVuY3Rpb24gR3JhaWxDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt1c2VCYXNlUGF0aFVybCgnL2Fzc2V0cy9IZXJvaWNfR3JhaWwucG5nJyl9Jyk7XG4gICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9JY29uQ2hlY2tib3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyYWlsQ2hlY2tib3g7XG4iXX0= */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\GrailCheckbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(GrailCheckbox, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/MoveTypeCheckboxs/MoveTypeCheckbox/index.tsx":
/*!***********************************************************************************!*\
  !*** ./app/components/TypeCheckboxs/MoveTypeCheckboxs/MoveTypeCheckbox/index.tsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_MoveTypeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/MoveTypeIcon */ "./app/components/MoveTypeIcon/index.tsx");
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\MoveTypeCheckboxs\\MoveTypeCheckbox\\index.tsx",
    _this = undefined;





var MoveTypeCheckbox = function MoveTypeCheckbox(_ref) {
  var moveType = _ref.moveType,
      checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checked: checked,
    onClick: onClick,
    "data-move-type": moveType,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_MoveTypeIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/MoveTypeCheckboxs/index.tsx":
/*!******************************************************************!*\
  !*** ./app/components/TypeCheckboxs/MoveTypeCheckboxs/index.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _MoveTypeCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MoveTypeCheckbox */ "./app/components/TypeCheckboxs/MoveTypeCheckboxs/MoveTypeCheckbox/index.tsx");



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\MoveTypeCheckboxs\\index.tsx",
    _s = $RefreshSig$();





function MoveTypeCheckboxs(_ref) {
  _s();

  var _this = this;

  var moveTypeFilter = _ref.moveTypeFilter,
      onToggle = _ref.onToggle;
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    var dataset = event.currentTarget.dataset;
    var moveType = dataset.moveType;
    var checked = dataset.checked === 'true';
    onToggle({
      moveType: moveType,
      checked: checked
    });
  }, [onToggle]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__["moveTypes"].map(function (moveType) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MoveTypeCheckbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(MoveTypeCheckboxs));

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/Rarity4Checkbox/index.tsx":
/*!****************************************************************!*\
  !*** ./app/components/TypeCheckboxs/Rarity4Checkbox/index.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\Rarity4Checkbox\\index.tsx",
    _s = $RefreshSig$();






function Rarity4Checkbox(_ref) {
  _s();

  var checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checked: checked,
    onClick: onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2154148204", [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/rarity4.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2154148204",
      dynamic: [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/rarity4.png')],
      children: ".__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-image:url('".concat(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/rarity4.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcUmFyaXR5NENoZWNrYm94XFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBRXFDLDRCQUNELDJCQUMwQixxREFDMUMsV0FDQyxZQUNkIiwiZmlsZSI6IkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcUmFyaXR5NENoZWNrYm94XFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb25DaGVja2JveCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0ljb25DaGVja2JveCc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuaW1wb3J0IHsgVEJ1dHRvbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2hlbHBlcic7XG5cbmZ1bmN0aW9uIFJhcml0eTRDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvcmFyaXR5NC5wbmcnKX0nKTtcbiAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ljb25DaGVja2JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFyaXR5NENoZWNrYm94O1xuIl19 */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\Rarity4Checkbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Rarity4Checkbox, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/Rarity5Checkbox/index.tsx":
/*!****************************************************************!*\
  !*** ./app/components/TypeCheckboxs/Rarity5Checkbox/index.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\Rarity5Checkbox\\index.tsx",
    _s = $RefreshSig$();






function Rarity5Checkbox(_ref) {
  _s();

  var checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checked: checked,
    onClick: onClick,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["4090559497", [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/rarity5.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "4090559497",
      dynamic: [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/rarity5.png')],
      children: "div.__jsx-style-dynamic-selector{background-repeat:no-repeat;background-position:center;background-image:url('".concat(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/rarity5.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcUmFyaXR5NUNoZWNrYm94XFxpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWtCLEFBR3VDLDRCQUNELDJCQUMwQixxREFDMUMsV0FDQyxZQUNkIiwiZmlsZSI6IkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcVHlwZUNoZWNrYm94c1xcUmFyaXR5NUNoZWNrYm94XFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb25DaGVja2JveCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0ljb25DaGVja2JveCc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuaW1wb3J0IHsgVEJ1dHRvbkV2ZW50SGFuZGxlciB9IGZyb20gJy4uL2hlbHBlcic7XG5cbmZ1bmN0aW9uIFJhcml0eTVDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvcmFyaXR5NS5wbmcnKX0nKTtcbiAgICAgICAgICB3aWR0aDogNTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ljb25DaGVja2JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFyaXR5NUNoZWNrYm94O1xuIl19 */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\TypeCheckboxs\\\\Rarity5Checkbox\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(Rarity5Checkbox, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/WeaponTypeCheckboxs/WeaponTypeCheckbox/index.tsx":
/*!***************************************************************************************!*\
  !*** ./app/components/TypeCheckboxs/WeaponTypeCheckboxs/WeaponTypeCheckbox/index.tsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_WeaponTypeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/WeaponTypeIcon */ "./app/components/WeaponTypeIcon/index.tsx");
/* harmony import */ var _app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/IconCheckbox */ "./app/components/IconCheckbox/index.tsx");


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\WeaponTypeCheckboxs\\WeaponTypeCheckbox\\index.tsx",
    _this = undefined;





var WeaponTypeCheckbox = function WeaponTypeCheckbox(_ref) {
  var weaponType = _ref.weaponType,
      checked = _ref.checked,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_IconCheckbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    checked: checked,
    onClick: onClick,
    "data-weapon-type": weaponType,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_WeaponTypeIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/WeaponTypeCheckboxs/index.tsx":
/*!********************************************************************!*\
  !*** ./app/components/TypeCheckboxs/WeaponTypeCheckboxs/index.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _WeaponTypeCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WeaponTypeCheckbox */ "./app/components/TypeCheckboxs/WeaponTypeCheckboxs/WeaponTypeCheckbox/index.tsx");



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\TypeCheckboxs\\WeaponTypeCheckboxs\\index.tsx",
    _s = $RefreshSig$();





function WeaponTypeCheckboxs(_ref) {
  _s();

  var _this = this;

  var weaponTypeFilter = _ref.weaponTypeFilter,
      onToggle = _ref.onToggle;
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    var dataset = event.currentTarget.dataset;
    var weaponType = dataset.weaponType;
    var checked = dataset.checked === 'true';
    onToggle({
      weaponType: weaponType,
      checked: checked
    });
  }, [onToggle]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__["weaponTypes"].map(function (weaponType) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_WeaponTypeCheckbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(WeaponTypeCheckboxs));

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/helper.tsx":
/*!*************************************************!*\
  !*** ./app/components/TypeCheckboxs/helper.tsx ***!
  \*************************************************/
/*! exports provided: makeMoveTypeFilter, makeWeaponTypeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMoveTypeFilter", function() { return makeMoveTypeFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeWeaponTypeFilter", function() { return makeWeaponTypeFilter; });
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");

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
  return _app_utils_generals__WEBPACK_IMPORTED_MODULE_0__["weaponTypes"].reduce(function (acc, weaponType) {
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/index.tsx":
/*!************************************************!*\
  !*** ./app/components/TypeCheckboxs/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_comps_typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/comps/typecheckboxs.module.css */ "./styles/comps/typecheckboxs.module.css");
/* harmony import */ var _styles_comps_typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_comps_typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AllCheckbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllCheckbox */ "./app/components/TypeCheckboxs/AllCheckbox/index.tsx");
/* harmony import */ var _Rarity5Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rarity5Checkbox */ "./app/components/TypeCheckboxs/Rarity5Checkbox/index.tsx");
/* harmony import */ var _Rarity4Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Rarity4Checkbox */ "./app/components/TypeCheckboxs/Rarity4Checkbox/index.tsx");
/* harmony import */ var _GrailCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GrailCheckbox */ "./app/components/TypeCheckboxs/GrailCheckbox/index.tsx");
/* harmony import */ var _DuoCheckbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DuoCheckbox */ "./app/components/TypeCheckboxs/DuoCheckbox/index.tsx");
/* harmony import */ var _DancerCheckbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DancerCheckbox */ "./app/components/TypeCheckboxs/DancerCheckbox/index.tsx");
/* harmony import */ var _MoveTypeCheckboxs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MoveTypeCheckboxs */ "./app/components/TypeCheckboxs/MoveTypeCheckboxs/index.tsx");
/* harmony import */ var _WeaponTypeCheckboxs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WeaponTypeCheckboxs */ "./app/components/TypeCheckboxs/WeaponTypeCheckboxs/index.tsx");



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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      expanded = _useState[0],
      setExpanded = _useState[1];

  var onClickExpand = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setExpanded(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_comps_typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_comps_typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.checkboxs,
        hidden: !expanded,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AllCheckbox__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onClick: toggleAll,
          checked: allChecked,
          indeterminated: allIndeterminated
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MoveTypeCheckboxs__WEBPACK_IMPORTED_MODULE_9__["default"], {
          moveTypeFilter: moveTypeFilter,
          onToggle: toggleMoveType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_WeaponTypeCheckboxs__WEBPACK_IMPORTED_MODULE_10__["default"], {
          weaponTypeFilter: weaponTypeFilter,
          onToggle: toggleWeaponType
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rarity5Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
          checked: isRarity5,
          onClick: toggleRarity5
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rarity4Checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
          checked: isRarity4,
          onClick: toggleRarity4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DuoCheckbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
          checked: isDuo,
          onClick: toggleDuo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_GrailCheckbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
          checked: isGrail,
          onClick: toggleGrail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DancerCheckbox__WEBPACK_IMPORTED_MODULE_8__["default"], {
          checked: isDancer,
          onClick: toggleDancer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_comps_typecheckboxs_module_css__WEBPACK_IMPORTED_MODULE_2___default.a['expand-button'],
      onClick: onClickExpand,
      children: expanded ? '▲' : '▼'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(TypeCheckboxs, "NJGF7Fc74QH+xeCf196kbgg8FiM=");

_c = TypeCheckboxs;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(TypeCheckboxs));

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/TypeCheckboxs/useTypeCheckboxHooks.tsx":
/*!***************************************************************!*\
  !*** ./app/components/TypeCheckboxs/useTypeCheckboxHooks.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./app/components/TypeCheckboxs/helper.tsx");
var _s = $RefreshSig$();






var useTypeCheckboxHooks = function useTypeCheckboxHooks() {
  _s();

  // move type
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeMoveTypeFilter"])(true);
  }),
      moveTypeFilter = _useState[0],
      setMoveTypeFilter = _useState[1];

  var toggleMoveType = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref) {
    var moveType = _ref.moveType,
        checked = _ref.checked;
    setMoveTypeFilter(function (prev) {
      var newState = Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(prev, function (draft) {
        draft[moveType] = !checked;
      });
      return newState;
    });
  }, []); // weapon type

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeWeaponTypeFilter"])(true);
  }),
      weaponTypeFilter = _useState2[0],
      setWeaponTypeFilter = _useState2[1];

  var toggleWeaponType = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref2) {
    var weaponType = _ref2.weaponType,
        checked = _ref2.checked;
    setWeaponTypeFilter(function (prev) {
      var newState = Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(prev, function (draft) {
        draft[weaponType] = !checked;
      });
      return newState;
    });
  }, []); // rarity 5

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isRarity5 = _useState3[0],
      setIsRarity5 = _useState3[1];

  var toggleRarity5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsRarity5(function (prev) {
      return !prev;
    });
  }, []); // rarity 4

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isRarity4 = _useState4[0],
      setIsRarity4 = _useState4[1];

  var toggleRarity4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsRarity4(function (prev) {
      return !prev;
    });
  }, []);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDuo = _useState5[0],
      setIsDuo = _useState5[1];

  var toggleDuo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDuo(function (prev) {
      return !prev;
    });
  }, []); // dancer

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDancer = _useState6[0],
      setIsDancer = _useState6[1];

  var toggleDancer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDancer(function (prev) {
      return !prev;
    });
  }, []); // grail

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isGrail = _useState7[0],
      setIsGrail = _useState7[1];

  var toggleGrail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsGrail(function (prev) {
      return !prev;
    });
  }, []);

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var moveTypeStates = _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__["moveTypes"].reduce(function (acc, moveType) {
      var value = moveTypeFilter[moveType];
      return {
        checked: acc.checked && value,
        indeterminated: acc.indeterminated || value
      };
    }, {
      checked: true,
      indeterminated: false
    });
    var weaponTypeStates = _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__["weaponTypes"].reduce(function (acc, weaponType) {
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

  var toggleAll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (allIndeterminated) {
      setMoveTypeFilter(Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeMoveTypeFilter"])(false));
      setWeaponTypeFilter(Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeWeaponTypeFilter"])(false));
    } else {
      setMoveTypeFilter(Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeMoveTypeFilter"])(!allChecked));
      setWeaponTypeFilter(Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeWeaponTypeFilter"])(!allChecked));
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/components/WeaponTypeIcon/index.tsx":
/*!*************************************************!*\
  !*** ./app/components/WeaponTypeIcon/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\WeaponTypeIcon\\index.tsx",
    _s = $RefreshSig$();






var backgroundPosition = function backgroundPosition(index) {
  return "".concat(index * -56 - 2, "px -2px");
};

function WeaponTypeIcon(_ref) {
  _s();

  var weaponType = _ref.weaponType;
  var style = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    var index = _app_utils_generals__WEBPACK_IMPORTED_MODULE_3__["weaponTypes"].indexOf(weaponType);
    return {
      backgroundPosition: backgroundPosition(index)
    };
  }, [weaponType]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: style,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3169364258", [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/weapon-type.png')]]])
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "3169364258",
      dynamic: [Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/weapon-type.png')],
      children: "div.__jsx-style-dynamic-selector{background:no-repeat url('".concat(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"])('/assets/weapon-type.png'), "');width:52px;height:55px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcV2VhcG9uVHlwZUljb25cXGluZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQlMsQUFJa0QseURBQzFCLFdBQ0MsWUFDZCIsImZpbGUiOiJGOlxccmVwb3NcXHJlYWN0LWZlaC1zaXRlXFxhcHBcXGNvbXBvbmVudHNcXFdlYXBvblR5cGVJY29uXFxpbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVFdlYXBvblR5cGUgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyB3ZWFwb25UeXBlcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2dlbmVyYWxzJztcbmltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5cbmNvbnN0IGJhY2tncm91bmRQb3NpdGlvbiA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtpbmRleCAqIC01NiAtIDJ9cHggLTJweGA7XG5cbmZ1bmN0aW9uIFdlYXBvblR5cGVJY29uKHtcbiAgd2VhcG9uVHlwZSxcbn06IHtcbiAgd2VhcG9uVHlwZT86IFRXZWFwb25UeXBlO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB3ZWFwb25UeXBlcy5pbmRleE9mKHdlYXBvblR5cGUpO1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbihpbmRleCksXG4gICAgfTtcbiAgfSwgW3dlYXBvblR5cGVdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IC8+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXRcbiAgICAgICAgICAgICAgdXJsKCcke3VzZUJhc2VQYXRoVXJsKCcvYXNzZXRzL3dlYXBvbi10eXBlLnBuZycpfScpO1xuICAgICAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhcG9uVHlwZUljb247XG4iXX0= */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\WeaponTypeIcon\\\\index.tsx */")
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(WeaponTypeIcon, "YSjFL2MYXgh6lJFn3xXnuDh74Dk=", false, function () {
  return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/page/FEHDB/index.tsx":
/*!**********************************!*\
  !*** ./app/page/FEHDB/index.tsx ***!
  \**********************************/
/*! exports provided: FEHDB, useFehDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEHDB", function() { return FEHDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFehDB", function() { return useFehDB; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


var FEHDB = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
var useFehDB = function useFehDB() {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FEHDB);
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/page/Ranker/HeroHeaders.tsx":
/*!*****************************************!*\
  !*** ./app/page/Ranker/HeroHeaders.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/HeroHeader */ "./app/components/HeroHeader/index.tsx");



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\page\\Ranker\\HeroHeaders.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function HeroHeaders(_ref) {
  var _this = this;

  var heroes = _ref.heroes,
      heroesOrder = _ref.heroesOrder;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: heroes.map(function (hero) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
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
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(HeroHeaders));

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/page/Ranker/hooks.tsx":
/*!***********************************!*\
  !*** ./app/page/Ranker/hooks.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHooks; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* harmony import */ var _app_utils_heroes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/heroes */ "./app/utils/heroes.tsx");
/* harmony import */ var _app_components_TypeCheckboxs_useTypeCheckboxHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/TypeCheckboxs/useTypeCheckboxHooks */ "./app/components/TypeCheckboxs/useTypeCheckboxHooks.tsx");
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");


var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function useSortByHooks() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sortByHP = _useState[0],
      setSortByHP = _useState[1];

  var toggleSortByHp = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSortByHP(function (prev) {
      return !prev;
    });
  }, []);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sortByAtk = _useState2[0],
      setSortByAtk = _useState2[1];

  var toggleSortByAtk = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSortByAtk(function (prev) {
      return !prev;
    });
  }, []);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sortBySpd = _useState3[0],
      setSortBySpd = _useState3[1];

  var toggleSortBySpd = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSortBySpd(function (prev) {
      return !prev;
    });
  }, []);

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sortByDef = _useState4[0],
      setSortByDef = _useState4[1];

  var toggleSortByDef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSortByDef(function (prev) {
      return !prev;
    });
  }, []);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sortByRes = _useState5[0],
      setSortByRes = _useState5[1];

  var toggleSortByRes = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSortByRes(function (prev) {
      return !prev;
    });
  }, []);
  var sortBy = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
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

  var _useFehDB = Object(_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_5__["useFehDB"])(),
      heroDB = _useFehDB.heroDB,
      assistDB = _useFehDB.assistDB,
      resplendentDB = _useFehDB.resplendentDB;

  var heroes = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_app_utils_heroes__WEBPACK_IMPORTED_MODULE_3__["makeHeroOptions"])({
      heroDB: heroDB,
      assistDB: assistDB,
      resplendentDB: resplendentDB
    });
  }, [heroDB, assistDB, resplendentDB]);

  var _useTypeCheckboxHooks = Object(_app_components_TypeCheckboxs_useTypeCheckboxHooks__WEBPACK_IMPORTED_MODULE_4__["default"])(),
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

  var heroesOrder = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
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
      return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hero.id, index));
    }, {});
  }, [heroes, sortBy]);
  var computedHeroes = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return heroes.map(function (option) {
      var hidden = Object(_app_utils_heroes__WEBPACK_IMPORTED_MODULE_3__["shouldBeHidden"])(option, {
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
  var bg = Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_2__["default"])('/assets/summon-stone.jpg');
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
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_5__["useFehDB"], _app_components_TypeCheckboxs_useTypeCheckboxHooks__WEBPACK_IMPORTED_MODULE_4__["default"], useSortByHooks, _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_2__["default"]];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/page/Ranker/index.tsx":
/*!***********************************!*\
  !*** ./app/page/Ranker/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_components_TypeCheckboxs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/TypeCheckboxs */ "./app/components/TypeCheckboxs/index.tsx");
/* harmony import */ var _styles_pages_ranker_index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/pages/ranker/index.module.css */ "./styles/pages/ranker/index.module.css");
/* harmony import */ var _styles_pages_ranker_index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_ranker_index_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeroHeaders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeroHeaders */ "./app/page/Ranker/HeroHeaders.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks */ "./app/page/Ranker/hooks.tsx");



var _jsxFileName = "F:\\repos\\react-feh-site\\app\\page\\Ranker\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Ranker = function Ranker() {
  _s();

  var _useHooks = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["default"])(),
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_ranker_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
      style: {
        background: "url('".concat(bg, "') center / cover no-repeat fixed")
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_ranker_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['bg-layer'],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_TypeCheckboxs__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_ranker_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a['stats-buttons'],
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_ranker_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
            children: "\u6392\u5E8F\u4F9D\u64DA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "data-active": sortByHP,
            onClick: toggleSortByHp,
            children: "HP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "data-active": sortByAtk,
            onClick: toggleSortByAtk,
            children: "\u653B\u64CA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "data-active": sortBySpd,
            onClick: toggleSortBySpd,
            children: "\u901F\u5EA6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            "data-active": sortByDef,
            onClick: toggleSortByDef,
            children: "\u9632\u5B88"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_ranker_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.list,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeroHeaders__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  return [_hooks__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = Ranker;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Ranker));

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/utils/blessings.tsx":
/*!*********************************!*\
  !*** ./app/utils/blessings.tsx ***!
  \*********************************/
/*! exports provided: getSrc, getName, getSrcAndName, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSrc", function() { return getSrc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getName", function() { return getName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSrcAndName", function() { return getSrcAndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _generals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generals */ "./app/utils/generals.tsx");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
var blesserNameMap = _generals__WEBPACK_IMPORTED_MODULE_2__["blessers"].reduce(function (acc, blesser) {
  var _blesser$split = blesser.split('-'),
      _blesser$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_blesser$split, 2),
      kind = _blesser$split2[0],
      boost = _blesser$split2[1];

  return _objectSpread(_objectSpread({}, acc), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blesser, "".concat(blesserKindNameMap[kind], " - ").concat(blessingBoostNameMap[boost])));
}, {});
function getSrc(bless) {
  if (!bless || bless === '-') {
    return '';
  }

  if (blessingKindNameMap[bless] || blesserNameMap[bless]) {
    return "/assets/blessing-".concat(bless, ".png");
  }

  return '';
}
function getName(bless) {
  if (!bless || bless === '-') {
    return '';
  }

  return blessingKindNameMap[bless] || blesserNameMap[bless] || '無祝福';
}
function getSrcAndName(bless) {
  return {
    src: getSrc(bless),
    name: getName(bless)
  };
}
var options = Object.entries(blessingKindNameMap).map(function (_ref) {
  var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/utils/generals.tsx":
/*!********************************!*\
  !*** ./app/utils/generals.tsx ***!
  \********************************/
/*! exports provided: moveTypes, weaponTypes, blessingKinds, blessingBoosts, blessers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveTypes", function() { return moveTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weaponTypes", function() { return weaponTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessingKinds", function() { return blessingKinds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessingBoosts", function() { return blessingBoosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessers", function() { return blessers; });
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/utils/heroes.tsx":
/*!******************************!*\
  !*** ./app/utils/heroes.tsx ***!
  \******************************/
/*! exports provided: getHero, extractHeroOption, extractHeroInfo, makeHeroOptions, hiddenByFilter, hiddenByMoveType, hiddenByWeaponType, hiddenByDuo, hiddenByGrail, hiddenByDancer, hiddenByRarity5, hiddenByRarity4, shouldBeHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHero", function() { return getHero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractHeroOption", function() { return extractHeroOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractHeroInfo", function() { return extractHeroInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeHeroOptions", function() { return makeHeroOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenByFilter", function() { return hiddenByFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenByMoveType", function() { return hiddenByMoveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenByWeaponType", function() { return hiddenByWeaponType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenByDuo", function() { return hiddenByDuo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenByGrail", function() { return hiddenByGrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenByDancer", function() { return hiddenByDancer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenByRarity5", function() { return hiddenByRarity5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiddenByRarity4", function() { return hiddenByRarity4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldBeHidden", function() { return shouldBeHidden; });
/* harmony import */ var _blessings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blessings */ "./app/utils/blessings.tsx");

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
  var blessingSrc = Object(_blessings__WEBPACK_IMPORTED_MODULE_0__["getSrc"])(blessing);
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
  return !!filter && !hero.query.includes(filter);
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./app/utils/useBathPathUrl.tsx":
/*!**************************************!*\
  !*** ./app/utils/useBathPathUrl.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useBasePathUrl; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "./node_modules/next/config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);


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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_babel_runtime_helpers_esm_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_babel_runtime_helpers_esm_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/comps/heroheader.module.css":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/comps/heroheader.module.css ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".heroheader_container__1R10- {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n          align-items: center;\n  border-bottom: 2px solid #1d3e53;\n  line-height: 1.5;\n}\n\n.heroheader_container__1R10- .heroheader_right__1xQTi {\n  -webkit-flex-grow: 1;\n     -moz-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  margin-left: 0.5em;\n  min-height: 158px;\n}\n\n.heroheader_img-container__4CBXS {\n  width: 158px;\n  height: 158px;\n  position: relative;\n  -webkit-flex-shrink: 0;\n          flex-shrink: 0;\n}\n\n.heroheader_img-container__4CBXS img {\n  width: 158px;\n  height: 158px;\n}\n\n.heroheader_img-container__4CBXS .heroheader_bst__2nXPX {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  bottom: 0;\n  right: 0;\n  padding: 0 4px;\n}\n\n.heroheader_title-and-name__1JpzJ {\n  -webkit-flex-grow: 1;\n     -moz-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-align-items: flex-end;\n     -moz-box-align: end;\n          align-items: flex-end;\n  margin-bottom: 0.5em;\n}\n\n.heroheader_title-and-name__1JpzJ .heroheader_title__mtlIN {\n  font-size: 1em;\n}\n\n.heroheader_title-and-name__1JpzJ .heroheader_name__8tu-0 {\n  font-size: 24px;\n  -webkit-flex-grow: 1;\n     -moz-box-flex: 1;\n          flex-grow: 1;\n  font-weight: bold;\n}\n\n.heroheader_types__1LTNO {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  height: 55px;\n}\n\n.heroheader_blessing__2yEav {\n  width: 52px;\n  height: 52px;\n}\n\n.heroheader_stats__22rs5 {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n}\n\n.heroheader_stats__22rs5 > div {\n  text-align: center;\n  font-size: 14px;\n  margin-right: 1em;\n}\n", "",{"version":3,"sources":["webpack://styles/comps/heroheader.module.css"],"names":[],"mappings":"AAAA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,2BAAmB;KAAnB,sBAAmB;UAAnB,mBAAmB;EACnB,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,oBAAY;KAAZ,gBAAY;UAAZ,YAAY;EACZ,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,8BAAsB;KAAtB,yBAAsB;KAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,sBAAc;UAAd,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,YAAY;EACZ,SAAS;EACT,QAAQ;EACR,cAAc;AAChB;;AAEA;EACE,oBAAY;KAAZ,gBAAY;UAAZ,YAAY;EACZ,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,6BAAqB;KAArB,mBAAqB;UAArB,qBAAqB;EACrB,oBAAoB;AACtB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,oBAAY;KAAZ,gBAAY;UAAZ,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,qBAAa;EAAb,iBAAa;EAAb,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB","sourcesContent":[".container {\n  display: flex;\n  align-items: center;\n  border-bottom: 2px solid #1d3e53;\n  line-height: 1.5;\n}\n\n.container .right {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  margin-left: 0.5em;\n  min-height: 158px;\n}\n\n.img-container {\n  width: 158px;\n  height: 158px;\n  position: relative;\n  flex-shrink: 0;\n}\n\n.img-container img {\n  width: 158px;\n  height: 158px;\n}\n\n.img-container .bst {\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  bottom: 0;\n  right: 0;\n  padding: 0 4px;\n}\n\n.title-and-name {\n  flex-grow: 1;\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 0.5em;\n}\n\n.title-and-name .title {\n  font-size: 1em;\n}\n\n.title-and-name .name {\n  font-size: 24px;\n  flex-grow: 1;\n  font-weight: bold;\n}\n\n.types {\n  display: flex;\n  height: 55px;\n}\n\n.blessing {\n  width: 52px;\n  height: 52px;\n}\n\n.stats {\n  display: flex;\n}\n\n.stats > div {\n  text-align: center;\n  font-size: 14px;\n  margin-right: 1em;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "heroheader_container__1R10-",
	"right": "heroheader_right__1xQTi",
	"img-container": "heroheader_img-container__4CBXS",
	"bst": "heroheader_bst__2nXPX",
	"title-and-name": "heroheader_title-and-name__1JpzJ",
	"title": "heroheader_title__mtlIN",
	"name": "heroheader_name__8tu-0",
	"types": "heroheader_types__1LTNO",
	"blessing": "heroheader_blessing__2yEav",
	"stats": "heroheader_stats__22rs5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/comps/typecheckboxs.module.css":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/comps/typecheckboxs.module.css ***!
  \*********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".typecheckboxs_content__K98Pq {\n  line-height: 1;\n  overflow: hidden;\n  -webkit-flex: none;\n     -moz-box-flex: 0;\n          flex: none;\n  background-color: rgba(0, 0, 0, 0.382);\n}\n\n.typecheckboxs_checkboxs__3p3VI {\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  color: white;\n}\n\n.typecheckboxs_checkboxs__3p3VI[hidden] {\n  display: block;\n  opacity: 0;\n  pointer-events: none;\n  height: 0;\n}\n\n.typecheckboxs_expand-button__1pJrt {\n  background-color: rgba(0, 0, 0, 0.382);\n  color: white;\n  text-align: center;\n  padding: 0.25em;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://styles/comps/typecheckboxs.module.css"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAU;KAAV,gBAAU;UAAV,UAAU;EACV,sCAAsC;AACxC;;AAEA;EACE,8BAAyB;EAAzB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,UAAU;EACV,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB","sourcesContent":[".content {\n  line-height: 1;\n  overflow: hidden;\n  flex: none;\n  background-color: rgba(0, 0, 0, 0.382);\n}\n\n.checkboxs {\n  transition: all 0.3s ease;\n  color: white;\n}\n\n.checkboxs[hidden] {\n  display: block;\n  opacity: 0;\n  pointer-events: none;\n  height: 0;\n}\n\n.expand-button {\n  background-color: rgba(0, 0, 0, 0.382);\n  color: white;\n  text-align: center;\n  padding: 0.25em;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"content": "typecheckboxs_content__K98Pq",
	"checkboxs": "typecheckboxs_checkboxs__3p3VI",
	"expand-button": "typecheckboxs_expand-button__1pJrt"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/pages/ranker/index.module.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./styles/pages/ranker/index.module.css ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ranker_container__2-8mm {\n  min-height: 100vh;\n  height: 100%;\n}\n\n.ranker_bg-layer__2JnzL {\n  background-color: #1d3e53aa;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n.ranker_bg-layer__2JnzL .ranker_list__1ajJp {\n  overflow-y: auto;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n          flex-direction: column;\n  padding-bottom: 1.5em;\n}\n\n.ranker_stats-buttons__2zkqu {\n  padding: 0.25em;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  background-color: #476d7c;\n}\n\n.ranker_stats-buttons__2zkqu > .ranker_title__1ZUc5 {\n  font-size: 1.2em;\n  padding: 0.5em;\n  margin-right: 1em;\n}\n\n.ranker_stats-buttons__2zkqu > button {\n  text-align: center;\n  padding: 0.25em 0.5em;\n}\n", "",{"version":3,"sources":["webpack://styles/pages/ranker/index.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,2BAA2B;EAC3B,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,8BAAsB;KAAtB,yBAAsB;KAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,8BAAsB;KAAtB,yBAAsB;KAAtB,0BAAsB;UAAtB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,qBAAa;EAAb,iBAAa;EAAb,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB","sourcesContent":[".container {\n  min-height: 100vh;\n  height: 100%;\n}\n\n.bg-layer {\n  background-color: #1d3e53aa;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n.bg-layer .list {\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 1.5em;\n}\n\n.stats-buttons {\n  padding: 0.25em;\n  display: flex;\n  background-color: #476d7c;\n}\n\n.stats-buttons > .title {\n  font-size: 1.2em;\n  padding: 0.5em;\n  margin-right: 1em;\n}\n\n.stats-buttons > button {\n  text-align: center;\n  padding: 0.25em 0.5em;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "ranker_container__2-8mm",
	"bg-layer": "ranker_bg-layer__2JnzL",
	"list": "ranker_list__1ajJp",
	"stats-buttons": "ranker_stats-buttons__2zkqu",
	"title": "ranker_title__1ZUc5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, freeze, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immer", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatches", function() { return vn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castDraft", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castImmutable", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDraft", function() { return pn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableAllPlugins", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableES5", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableMapSet", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePatches", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishDraft", function() { return ln; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "freeze", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "immerable", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraft", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDraftable", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "original", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produce", function() { return an; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "produceWithPatches", function() { return fn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAutoFreeze", function() { return cn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUseProxies", function() { return sn; });
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(true){var i=Y[n],o=i?"function"==typeof i?i.apply(null,r):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[Q]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);return!t||t===Object.prototype}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(r){return t(r)||n(23,r),r[Q].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:Z)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=nn(n);delete t[Q];for(var r=Z(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=tn[t];return r||n(18,t),r}function m(n,t){tn[n]||(tn[n]=t)}function _(){return false||U||n(0),U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.g=!0}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.O||b("ES5").S(e,t,o),o?(i[Q].P&&(g(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( true&&c===o&&n(5),t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.N&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,t,r){void 0===r&&(r=!1),n.h.N&&n.m&&d(t,r)}function z(n,t){var r=n[Q];return(r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function E(n){n.P||(n.P=!0,n.l&&E(n.l))}function k(n){n.o||(n.o=l(n.t))}function R(n,t,r){var e=s(t)?b("MapSet").T(t,r):v(t)?b("MapSet").F(t,r):n.O?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=rn;r&&(i=[e],o=en);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return(r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=N(t,c),u.I=!1}else e=N(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r))})),3===c?new Set(e):e}(e)}function N(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function T(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q];return true&&f(t),rn.get(t,n)},set:function(t){var r=this[Q]; true&&f(r),rn.set(r,n,t)}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q];if(!r.P)switch(r.i){case 5:a(r)&&E(r);break;case 4:o(r)&&E(r)}}}function o(n){for(var t=n.t,r=n.k,e=Z(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=t[o];if(void 0===a&&!u(t,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!t[Q];return e.length!==Z(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function f(t){t.g&&n(3,JSON.stringify(p(t)))}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=nn(t);delete o[Q];for(var u=Z(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[Q].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,E(r)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,E(r))}));else if(5===c){if(a(r)&&(E(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function F(){function e(n){if(!r(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var t=Object.create(Object.getPrototypeOf(n));for(var i in n)t[i]=e(n[i]);return t}function f(n){return t(n)?e(n):n}var c="add";m("Patches",{$:function(t,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=t,s=0;s<i.length-1;s++)"object"!=typeof(f=a(f,i[s]))&&n(15,i.join("/"));var v=o(f),p=e(r.value),l=i[i.length-1];switch(u){case"replace":switch(v){case 2:return f.set(l,p);case 3:n(16);default:return f[l]=p}case c:switch(v){case 1:return f.splice(l,0,p);case 2:return f.set(l,p);case 3:return f.add(p);default:return f[l]=p}case"remove":switch(v){case 1:return f.splice(l,1);case 2:return f.delete(l);case 3:return f.delete(r.value);default:return delete f[l]}default:n(17,u)}})),t},R:function(n,t,r,e){switch(n.i){case 0:case 4:case 2:return function(n,t,r,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=t.concat([l]);r.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length})}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,e)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function t(n,t){function r(){this.constructor=n}a(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=R(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function u(t){t.g&&n(3,JSON.stringify(p(t)))}var a=function(n,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},f=function(){function n(n,t){return this[Q]={i:2,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,g:!1},this}t(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,t){var r=this[Q];return u(r),p(r).has(n)&&p(r).get(n)===t||(e(r),E(r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),e(t),E(t),t.D.set(n,!1),t.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),E(n),n.D=new Map,i(n.t,(function(t){n.D.set(t,!1)})),n.o.clear())},o.forEach=function(n,t){var r=this;p(this[Q]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},o.get=function(n){var t=this[Q];u(t);var i=p(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var o=R(t.A.h,i,t);return e(t),t.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},o.entries=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,t){return this[Q]={i:3,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(n){var t=this[Q];return u(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[Q];return u(t),this.has(n)||(o(t),E(t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),o(t),E(t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),E(n),n.o.clear())},r.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},r.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();m("MapSet",{T:function(n,t){return new f(n,t)},F:function(n,t){return new c(n,t)}})}function J(){T(),C(),F()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n}},Z="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,nn=Object.getOwnPropertyDescriptors||function(n){var t={};return Z(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},tn={},rn={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(k(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return!0;k(n),E(n)}return n.o[t]=r,n.D[t]=!0,!0},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,k(n),E(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},en={};i(rn,(function(n,t){en[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),en.deleteProperty=function(t,r){return true&&isNaN(parseInt(r))&&n(13),rn.deleteProperty.call(this,t[0],r)},en.set=function(t,r,e){return true&&"length"!==r&&isNaN(parseInt(r))&&n(14),rn.set.call(this,t[0],r,e,t[0])};var on=function(){function e(n){this.O=B,this.N=!0,"boolean"==typeof(null==n?void 0:n.useProxies)&&this.setUseProxies(n.useProxies),"boolean"==typeof(null==n?void 0:n.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var i=e.prototype;return i.produce=function(t,e,i){if("function"==typeof t&&"function"!=typeof e){var o=e;e=t;var u=this;return function(n){var t=this;void 0===n&&(n=o);for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return u.produce(n,(function(n){var r;return(r=e).call.apply(r,[t,n].concat(i))}))}}var a;if("function"!=typeof e&&n(6),void 0!==i&&"function"!=typeof i&&n(7),r(t)){var f=w(this),c=R(this,t,void 0),s=!0;try{a=e(c),s=!1}finally{s?g(f):O(f)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return j(f,i),P(n,f)}),(function(n){throw g(f),n})):(j(f,i),P(a,f))}if(!t||"object"!=typeof t){if((a=e(t))===H)return;return void 0===a&&(a=t),this.N&&d(a,!0),a}n(21,t)},i.produceWithPatches=function(n,t){var r,e,i=this;return"function"==typeof n?function(t){for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(e))}))}:[this.produce(n,t,(function(n,t){r=n,e=t})),r,e]},i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(t,r){var e=t&&t[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.N=n},i.setUseProxies=function(t){t&&!B&&n(20),this.O=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),un=new on,an=un.produce,fn=un.produceWithPatches.bind(un),cn=un.setAutoFreeze.bind(un),sn=un.setUseProxies.bind(un),vn=un.applyPatches.bind(un),pn=un.createDraft.bind(un),ln=un.finishDraft.bind(un);/* harmony default export */ __webpack_exports__["default"] = (an);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ "./node_modules/next/config.js":
/*!*************************************!*\
  !*** ./node_modules/next/config.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/runtime-config */ "./node_modules/next/dist/next-server/lib/runtime-config.js")


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Franker&absolutePagePath=F%3A%5Crepos%5Creact-feh-site%5Cpages%5Cranker%5Cindex.tsx!./":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Franker&absolutePagePath=F%3A%5Crepos%5Creact-feh-site%5Cpages%5Cranker%5Cindex.tsx ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/ranker",
      function () {
        return __webpack_require__(/*! ./pages/ranker/index.tsx */ "./pages/ranker/index.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports["default"] = void 0;

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

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
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

            if (categories.has(category)) {
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
exports["default"] = _default;

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/runtime-config.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/runtime-config.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.setConfig = setConfig;
exports["default"] = void 0;
var runtimeConfig;

var _default = function _default() {
  return runtimeConfig;
};

exports["default"] = _default;

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _toConsumableArray = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports["default"] = void 0;

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

exports["default"] = _default;

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
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
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

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
  } else {
    style.removeAttribute('media');
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
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

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

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

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

exports["default"] = JSXStyle;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

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

exports["default"] = StyleSheetRegistry;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/ranker/index.tsx":
/*!********************************!*\
  !*** ./pages/ranker/index.tsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* harmony import */ var _app_page_Ranker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/page/Ranker */ "./app/page/Ranker/index.tsx");

var _jsxFileName = "F:\\repos\\react-feh-site\\pages\\ranker\\index.tsx";



function RankerPage(_ref) {
  var db = _ref.db;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__["FEHDB"].Provider, {
    value: db,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_page_Ranker__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./styles/comps/heroheader.module.css":
/*!********************************************!*\
  !*** ./styles/comps/heroheader.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./heroheader.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/comps/heroheader.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
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
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./heroheader.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/comps/heroheader.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./heroheader.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/comps/heroheader.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
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

/***/ "./styles/comps/typecheckboxs.module.css":
/*!***********************************************!*\
  !*** ./styles/comps/typecheckboxs.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./typecheckboxs.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/comps/typecheckboxs.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
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
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./typecheckboxs.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/comps/typecheckboxs.module.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./typecheckboxs.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/comps/typecheckboxs.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
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

/***/ "./styles/pages/ranker/index.module.css":
/*!**********************************************!*\
  !*** ./styles/pages/ranker/index.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/pages/ranker/index.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
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
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/pages/ranker/index.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./index.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./styles/pages/ranker/index.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
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

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Franker&absolutePagePath=F%3A%5Crepos%5Creact-feh-site%5Cpages%5Cranker%5Cindex.tsx!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0ljb25DaGVja2JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0ltZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL01vdmVUeXBlSWNvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvQWxsQ2hlY2tib3gvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UeXBlQ2hlY2tib3hzL0RhbmNlckNoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9EdW9DaGVja2JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvR3JhaWxDaGVja2JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvTW92ZVR5cGVDaGVja2JveHMvTW92ZVR5cGVDaGVja2JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvTW92ZVR5cGVDaGVja2JveHMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UeXBlQ2hlY2tib3hzL1Jhcml0eTRDaGVja2JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvUmFyaXR5NUNoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9XZWFwb25UeXBlQ2hlY2tib3hzL1dlYXBvblR5cGVDaGVja2JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvV2VhcG9uVHlwZUNoZWNrYm94cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvaGVscGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvdXNlVHlwZUNoZWNrYm94SG9va3MudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9XZWFwb25UeXBlSWNvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlL0ZFSERCL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UvUmFua2VyL0hlcm9IZWFkZXJzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UvUmFua2VyL2hvb2tzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UvUmFua2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2JsZXNzaW5ncy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91dGlscy9nZW5lcmFscy50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91dGlscy9oZXJvZXMudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9jb21wcy9oZXJvaGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9jb21wcy90eXBlY2hlY2tib3hzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9wYWdlcy9yYW5rZXIvaW5kZXgubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ltbWVyL2Rpc3QvaW1tZXIuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9jb25maWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcnVudGltZS1jb25maWcudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3RyaW5nLWhhc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9saWIvc3R5bGVzaGVldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zdHlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1qc3gvZGlzdC9zdHlsZXNoZWV0LXJlZ2lzdHJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWpzeC9zdHlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9yYW5rZXIvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvY29tcHMvaGVyb2hlYWRlci5tb2R1bGUuY3NzPzJkZTkiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9jb21wcy90eXBlY2hlY2tib3hzLm1vZHVsZS5jc3M/OTk2NCIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3BhZ2VzL3Jhbmtlci9pbmRleC5tb2R1bGUuY3NzPzE1NTMiXSwibmFtZXMiOlsiSGVyb0hlYWRlciIsImhpZGRlbiIsImZhY2VTcmMiLCJ0aXRsZSIsIm5hbWUiLCJ3ZWFwb25UeXBlIiwibW92ZVR5cGUiLCJibGVzc2luZ1NyYyIsImJzdCIsImhwIiwiYXRrIiwic3BkIiwiZGVmIiwicmVzIiwicG9vbCIsIm9yZGVyIiwic3R5bGUiLCJ1c2VNZW1vIiwiZGlzcGxheSIsInN0eWxlcyIsImNvbnRhaW5lciIsInJpZ2h0IiwidHlwZXMiLCJibGVzc2luZyIsInN0YXRzIiwibWVtbyIsIkljb25DaGVja2JveCIsImNoZWNrZWQiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJwcm9wcyIsIm9wYWNpdHkiLCJJbWciLCJfc3JjIiwic3JjIiwidXNlQmFzZVBhdGhVcmwiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJpbmRleCIsIk1vdmVUeXBlSWNvbiIsIm1vdmVUeXBlcyIsImluZGV4T2YiLCJBbGxDaGVja2JveCIsImluZGV0ZXJtaW5hdGVkIiwiRGFuY2VyQ2hlY2tib3giLCJEdW9DaGVja2JveCIsIkdyYWlsQ2hlY2tib3giLCJNb3ZlVHlwZUNoZWNrYm94IiwiTW92ZVR5cGVDaGVja2JveHMiLCJtb3ZlVHlwZUZpbHRlciIsIm9uVG9nZ2xlIiwidXNlQ2FsbGJhY2siLCJldmVudCIsImRhdGFzZXQiLCJjdXJyZW50VGFyZ2V0IiwibWFwIiwiUmFyaXR5NENoZWNrYm94IiwiUmFyaXR5NUNoZWNrYm94IiwiV2VhcG9uVHlwZUNoZWNrYm94IiwiV2VhcG9uVHlwZUNoZWNrYm94cyIsIndlYXBvblR5cGVGaWx0ZXIiLCJ3ZWFwb25UeXBlcyIsIm1ha2VNb3ZlVHlwZUZpbHRlciIsImRlZmF1bHRWYWx1ZSIsImluZmFudHJ5IiwiYXJtb3JlZCIsImNhdmFscnkiLCJmbHlpbmciLCJtYWtlV2VhcG9uVHlwZUZpbHRlciIsInJlZHVjZSIsImFjYyIsIlR5cGVDaGVja2JveHMiLCJhbGxDaGVja2VkIiwiYWxsSW5kZXRlcm1pbmF0ZWQiLCJ0b2dnbGVBbGwiLCJ0b2dnbGVNb3ZlVHlwZSIsInRvZ2dsZVdlYXBvblR5cGUiLCJpc1Jhcml0eTUiLCJ0b2dnbGVSYXJpdHk1IiwiaXNSYXJpdHk0IiwidG9nZ2xlUmFyaXR5NCIsImlzR3JhaWwiLCJ0b2dnbGVHcmFpbCIsImlzRHVvIiwidG9nZ2xlRHVvIiwiaXNEYW5jZXIiLCJ0b2dnbGVEYW5jZXIiLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJvbkNsaWNrRXhwYW5kIiwicHJldiIsImNvbnRlbnQiLCJjaGVja2JveHMiLCJ1c2VUeXBlQ2hlY2tib3hIb29rcyIsInNldE1vdmVUeXBlRmlsdGVyIiwibmV3U3RhdGUiLCJwcm9kdWNlIiwiZHJhZnQiLCJzZXRXZWFwb25UeXBlRmlsdGVyIiwic2V0SXNSYXJpdHk1Iiwic2V0SXNSYXJpdHk0Iiwic2V0SXNEdW8iLCJzZXRJc0RhbmNlciIsInNldElzR3JhaWwiLCJtb3ZlVHlwZVN0YXRlcyIsInZhbHVlIiwid2VhcG9uVHlwZVN0YXRlcyIsIldlYXBvblR5cGVJY29uIiwiRkVIREIiLCJjcmVhdGVDb250ZXh0IiwidXNlRmVoREIiLCJ1c2VDb250ZXh0IiwiSGVyb0hlYWRlcnMiLCJoZXJvZXMiLCJoZXJvZXNPcmRlciIsImhlcm8iLCJpZCIsInVzZVNvcnRCeUhvb2tzIiwic29ydEJ5SFAiLCJzZXRTb3J0QnlIUCIsInRvZ2dsZVNvcnRCeUhwIiwic29ydEJ5QXRrIiwic2V0U29ydEJ5QXRrIiwidG9nZ2xlU29ydEJ5QXRrIiwic29ydEJ5U3BkIiwic2V0U29ydEJ5U3BkIiwidG9nZ2xlU29ydEJ5U3BkIiwic29ydEJ5RGVmIiwic2V0U29ydEJ5RGVmIiwidG9nZ2xlU29ydEJ5RGVmIiwic29ydEJ5UmVzIiwic2V0U29ydEJ5UmVzIiwidG9nZ2xlU29ydEJ5UmVzIiwic29ydEJ5Iiwia2V5cyIsInB1c2giLCJ1c2VIb29rcyIsImhlcm9EQiIsImFzc2lzdERCIiwicmVzcGxlbmRlbnREQiIsIm1ha2VIZXJvT3B0aW9ucyIsInNvcnQiLCJhIiwiYiIsImFTdGF0U3VtIiwic3RhdEtleSIsImJTdGF0U3VtIiwiY29tcHV0ZWRIZXJvZXMiLCJvcHRpb24iLCJzaG91bGRCZUhpZGRlbiIsImJnIiwiUmFua2VyIiwiYmFja2dyb3VuZCIsImxpc3QiLCJibGVzc2luZ0tpbmROYW1lTWFwIiwiZmlyZSIsIndhdGVyIiwid2luZCIsImVhcnRoIiwibGlnaHQiLCJkYXJrIiwiYXN0cmEiLCJhbmltYSIsImJsZXNzZXJLaW5kTmFtZU1hcCIsImJsZXNzaW5nQm9vc3ROYW1lTWFwIiwiYmxlc3Nlck5hbWVNYXAiLCJibGVzc2VycyIsImJsZXNzZXIiLCJzcGxpdCIsImtpbmQiLCJib29zdCIsImdldFNyYyIsImJsZXNzIiwiZ2V0TmFtZSIsImdldFNyY0FuZE5hbWUiLCJvcHRpb25zIiwiT2JqZWN0IiwiZW50cmllcyIsImJsZXNzaW5nS2luZHMiLCJibGVzc2luZ0Jvb3N0cyIsImJsZXNzaW5nS2luZCIsImZvckVhY2giLCJibGVzc2luZ0Jvb3N0IiwiZ2V0SGVybyIsImhlcm9JZCIsImV4dHJhY3RIZXJvT3B0aW9uIiwibm9TdGF0IiwicmFyaXR5IiwiY29sb3JUeXBlIiwic3RhdE1heCIsInF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJ1bmRlZmluZWQiLCJNYXRoIiwibWF4IiwiZXh0cmFjdEhlcm9JbmZvIiwiZGFuY2VycyIsIkRhbmNlIiwiZXhjbHVzaXZlIiwiaW5jbHVkZXMiLCJoYXNSZXNwbGVuZGVudCIsImZhY2VTcmNSIiwidmFsdWVzIiwiaGlkZGVuQnlGaWx0ZXIiLCJmaWx0ZXIiLCJoaWRkZW5CeU1vdmVUeXBlIiwiaGlkZGVuQnlXZWFwb25UeXBlIiwiaGlkZGVuQnlEdW8iLCJoaWRkZW5CeUdyYWlsIiwiaGlkZGVuQnlEYW5jZXIiLCJoaWRkZW5CeVJhcml0eTUiLCJsZW5ndGgiLCJoaWRkZW5CeVJhcml0eTQiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwidXJsIiwiYmFzZVBhdGgiLCJBbXBTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsImluQW1wTW9kZSIsImhlYWQiLCJjaGlsZCIsImZyYWdtZW50TGlzdCIsIk1FVEFUWVBFUyIsInRhZ3MiLCJtZXRhVHlwZXMiLCJtZXRhQ2F0ZWdvcmllcyIsImgiLCJpc1VuaXF1ZSIsImtleSIsImkiLCJsZW4iLCJtZXRhdHlwZSIsImNhdGVnb3J5IiwiY2F0ZWdvcmllcyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50Q2hpbGRyZW4iLCJoZWFkRWxlbWVudCIsImRlZmF1bHRIZWFkIiwidW5pcXVlIiwiYyIsInByb2Nlc3MiLCJhbXBTdGF0ZSIsImhlYWRNYW5hZ2VyIiwiSGVhZCIsInJ1bnRpbWVDb25maWciLCJpc1NlcnZlciIsImNvbnN0cnVjdG9yIiwiX2hhc0hlYWRNYW5hZ2VyIiwiZW1pdENoYW5nZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJSYW5rZXJQYWdlIiwiZGIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULE9BZ0JnQjtBQUFBOztBQUFBLE1BZmRDLE1BZWMsUUFmZEEsTUFlYztBQUFBLE1BZGRDLE9BY2MsUUFkZEEsT0FjYztBQUFBLE1BYmRDLEtBYWMsUUFiZEEsS0FhYztBQUFBLE1BWmRDLElBWWMsUUFaZEEsSUFZYztBQUFBLE1BWGRDLFVBV2MsUUFYZEEsVUFXYztBQUFBLE1BVmRDLFFBVWMsUUFWZEEsUUFVYztBQUFBLE1BVGRDLFdBU2MsUUFUZEEsV0FTYztBQUFBLE1BUmRDLEdBUWMsUUFSZEEsR0FRYztBQUFBLE1BUGRDLEVBT2MsUUFQZEEsRUFPYztBQUFBLE1BTmRDLEdBTWMsUUFOZEEsR0FNYztBQUFBLE1BTGRDLEdBS2MsUUFMZEEsR0FLYztBQUFBLE1BSmRDLEdBSWMsUUFKZEEsR0FJYztB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEI3QixpQkFBaUIsbUJBQU8sQ0FBQyxxRkFBNkI7Ozs7Ozs7Ozs7OztBQ0F0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLGVBQWU7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhNQUE4TTs7QUFFOU07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxXQUFXO0FBQ3hCLGFBQWEsT0FBTztBQUNwQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0JBQWdCO0FBQzNCO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtREFBbUQ7O0FBRW5EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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QTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsbUJBQW1CLGlDQUFpQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7OztBQzdSYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRDQUFPOztBQUU1QixpREFBaUQsbUJBQU8sQ0FBQyxvRkFBdUI7O0FBRWhGLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRiwrQ0FBK0MsMERBQTBELDJDQUEyQyxpQ0FBaUM7O0FBRXJMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pFYTs7QUFFYjtBQUNBOztBQUVBLHlDQUF5QyxtQkFBTyxDQUFDLHdEQUFhOztBQUU5RCx5Q0FBeUMsbUJBQU8sQ0FBQywwRUFBa0I7O0FBRW5FLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTtBQUNYOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7OztBQUcxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxrQkFBa0IsY0FBYyxPQUFPLEdBQUcsY0FBYyxHQUFHOztBQUVsRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxtVEFBc0s7QUFDNUs7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxtVEFBc0s7O0FBRWhNOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0MiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9yYW5rZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9jb21wcy9oZXJvaGVhZGVyLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgVEhlcm9PcHRpb24gfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IFdlYXBvblR5cGVJY29uIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvV2VhcG9uVHlwZUljb24nO1xuaW1wb3J0IE1vdmVUeXBlSWNvbiBmcm9tICdAL2FwcC9jb21wb25lbnRzL01vdmVUeXBlSWNvbic7XG5pbXBvcnQgSW1nIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSW1nJztcblxuZnVuY3Rpb24gSGVyb0hlYWRlcih7XG4gIGhpZGRlbixcbiAgZmFjZVNyYyxcbiAgdGl0bGUsXG4gIG5hbWUsXG4gIHdlYXBvblR5cGUsXG4gIG1vdmVUeXBlLFxuICBibGVzc2luZ1NyYyxcbiAgYnN0LFxuICBocCxcbiAgYXRrLFxuICBzcGQsXG4gIGRlZixcbiAgcmVzLFxuICBwb29sLFxuICBvcmRlcixcbn06IFRIZXJvT3B0aW9uKSB7XG4gIGNvbnN0IHN0eWxlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoaGlkZGVuID8geyBkaXNwbGF5OiAnbm9uZScsIG9yZGVyIH0gOiB7IG9yZGVyIH0pLFxuICAgIFtoaWRkZW4sIG9yZGVyXVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBzdHlsZT17c3R5bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snaW1nLWNvbnRhaW5lciddfT5cbiAgICAgICAgPEltZyBzcmM9e2ZhY2VTcmN9IGxvYWRpbmc9XCJsYXp5XCIgLz5cbiAgICAgICAge2JzdCAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJzdH0+e2JzdH08L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWyd0aXRsZS1hbmQtbmFtZSddfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57bmFtZX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHlwZXN9PlxuICAgICAgICAgIDxXZWFwb25UeXBlSWNvbiB3ZWFwb25UeXBlPXt3ZWFwb25UeXBlfSAvPlxuICAgICAgICAgIDxNb3ZlVHlwZUljb24gbW92ZVR5cGU9e21vdmVUeXBlfSAvPlxuICAgICAgICAgIHtwb29sID09PSAnZHVvJyAmJiAoXG4gICAgICAgICAgICA8SW1nXG4gICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvdW5pdC1kdW8ucG5nXCJcbiAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ibGVzc2luZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cG9vbCA9PT0gJ2hhcm1vbml6ZWQnICYmIChcbiAgICAgICAgICAgIDxJbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9oYXJtb25pemVkLnBuZ1wiXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmxlc3Npbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2JsZXNzaW5nU3JjICYmIChcbiAgICAgICAgICAgIDxJbWcgc3JjPXtibGVzc2luZ1NyY30gbG9hZGluZz1cImxhenlcIiBjbGFzc05hbWU9e3N0eWxlcy5ibGVzc2luZ30gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c30+XG4gICAgICAgICAge2hwICYmIDxkaXY+SFAge2hwfTwvZGl2Pn1cbiAgICAgICAgICB7YXRrICYmIDxkaXY+5pS75pOKIHthdGt9PC9kaXY+fVxuICAgICAgICAgIHtzcGQgJiYgPGRpdj7pgJ/luqYge3NwZH08L2Rpdj59XG4gICAgICAgICAge2RlZiAmJiA8ZGl2PumYsuWuiCB7ZGVmfTwvZGl2Pn1cbiAgICAgICAgICB7cmVzICYmIDxkaXY+6a2U6ZiyIHtyZXN9PC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhlcm9IZWFkZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBJY29uQ2hlY2tib3goe1xuICBjaGVja2VkLFxuICBvbkNsaWNrLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IHtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbn0pOiBSZWFjdEVsZW1lbnQge1xuICBjb25zdCBvcGFjaXR5ID0gY2hlY2tlZCA/IDEgOiAwLjI1O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIGRhdGEtY2hlY2tlZD17Y2hlY2tlZH0gb25DbGljaz17b25DbGlja30gey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9idXR0b24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIG9wYWNpdHk6ICR7b3BhY2l0eX07XG4gICAgICAgICAgcGFkZGluZzogMC4yNWVtO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBJY29uQ2hlY2tib3g7XG4iLCJpbXBvcnQgeyBEZXRhaWxlZEhUTUxQcm9wcywgSW1nSFRNTEF0dHJpYnV0ZXMsIFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5cbmZ1bmN0aW9uIEltZyh7XG4gIHNyYzogX3NyYyxcbiAgLi4ucHJvcHNcbn06IERldGFpbGVkSFRNTFByb3BzPFxuICBJbWdIVE1MQXR0cmlidXRlczxIVE1MSW1hZ2VFbGVtZW50PixcbiAgSFRNTEltYWdlRWxlbWVudFxuPik6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHNyYyA9IHVzZUJhc2VQYXRoVXJsKF9zcmMpO1xuICByZXR1cm4gPGltZyBzcmM9e3NyY30gey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1nO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdmVUeXBlcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2dlbmVyYWxzJztcbmltcG9ydCB7IFRNb3ZlVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5cbmNvbnN0IGJhY2tncm91bmRQb3NpdGlvbiA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtpbmRleCAqIC01Nn1weCAwYDtcblxuZnVuY3Rpb24gTW92ZVR5cGVJY29uKHsgbW92ZVR5cGUgfTogeyBtb3ZlVHlwZTogVE1vdmVUeXBlIH0pOiBSZWFjdEVsZW1lbnQge1xuICBjb25zdCBzdHlsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gbW92ZVR5cGVzLmluZGV4T2YobW92ZVR5cGUpO1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbihpbmRleCksXG4gICAgfTtcbiAgfSwgW21vdmVUeXBlXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSAvPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0XG4gICAgICAgICAgICAgIHVybCgnJHt1c2VCYXNlUGF0aFVybCgnL2Fzc2V0cy9tb3ZlLXR5cGUucG5nJyl9Jyk7XG4gICAgICAgICAgICB3aWR0aDogNTJweDtcbiAgICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZlVHlwZUljb247XG4iLCJpbXBvcnQgeyBSZWFjdEVsZW1lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBURGl2RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vaGVscGVyJztcblxuZnVuY3Rpb24gQWxsQ2hlY2tib3goe1xuICBjaGVja2VkLFxuICBpbmRldGVybWluYXRlZCxcbiAgb25DbGljayxcbn06IHtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGluZGV0ZXJtaW5hdGVkPzogYm9vbGVhbjtcbiAgb25DbGljazogVERpdkV2ZW50SGFuZGxlcjtcbn0pOiBSZWFjdEVsZW1lbnQge1xuICBjb25zdCBvcGFjaXR5ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGluZGV0ZXJtaW5hdGVkKSB7XG4gICAgICByZXR1cm4gMC41O1xuICAgIH1cbiAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiAwLjI1O1xuICB9LCBbaW5kZXRlcm1pbmF0ZWQsIGNoZWNrZWRdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJvbGU9XCJidXR0b25cIiBzdHlsZT17eyBvcGFjaXR5IH19IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPGRpdj7lhag8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDExcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgZGl2ID4gZGl2IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsbENoZWNrYm94O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JY29uQ2hlY2tib3gnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7IFRCdXR0b25FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBEYW5jZXJDaGVja2JveCh7XG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrOiBUQnV0dG9uRXZlbnRIYW5kbGVyO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxkaXYgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvZGFuY2VyLnBuZycpfScpO1xuICAgICAgICB3aWR0aDogNTJweDtcbiAgICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgYH08L3N0eWxlPlxuICAgIDwvSWNvbkNoZWNrYm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYW5jZXJDaGVja2JveDtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbkNoZWNrYm94IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSWNvbkNoZWNrYm94JztcbmltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5pbXBvcnQgeyBUQnV0dG9uRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vaGVscGVyJztcblxuZnVuY3Rpb24gRHVvQ2hlY2tib3goe1xuICBjaGVja2VkLFxuICBvbkNsaWNrLFxufToge1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgb25DbGljazogVEJ1dHRvbkV2ZW50SGFuZGxlcjtcbn0pOiBSZWFjdEVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxJY29uQ2hlY2tib3ggY2hlY2tlZD17Y2hlY2tlZH0gb25DbGljaz17b25DbGlja30+XG4gICAgICA8ZGl2IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvdW5pdC1kdW8ucG5nJyl9Jyk7XG4gICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9JY29uQ2hlY2tib3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IER1b0NoZWNrYm94O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JY29uQ2hlY2tib3gnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7IFRCdXR0b25FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBHcmFpbENoZWNrYm94KHtcbiAgY2hlY2tlZCxcbiAgb25DbGljayxcbn06IHtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s6IFRCdXR0b25FdmVudEhhbmRsZXI7XG59KTogUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8SWNvbkNoZWNrYm94IGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPGRpdiAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3VzZUJhc2VQYXRoVXJsKCcvYXNzZXRzL0hlcm9pY19HcmFpbC5wbmcnKX0nKTtcbiAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0ljb25DaGVja2JveD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhaWxDaGVja2JveDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUTW92ZVR5cGUgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgTW92ZVR5cGVJY29uIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvTW92ZVR5cGVJY29uJztcbmltcG9ydCBJY29uQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JY29uQ2hlY2tib3gnO1xuXG5jb25zdCBNb3ZlVHlwZUNoZWNrYm94ID0gKHtcbiAgbW92ZVR5cGUsXG4gIGNoZWNrZWQsXG4gIG9uQ2xpY2ssXG59OiB7XG4gIG1vdmVUeXBlOiBUTW92ZVR5cGU7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn0pID0+IChcbiAgPEljb25DaGVja2JveCBjaGVja2VkPXtjaGVja2VkfSBvbkNsaWNrPXtvbkNsaWNrfSBkYXRhLW1vdmUtdHlwZT17bW92ZVR5cGV9PlxuICAgIDxNb3ZlVHlwZUljb24gbW92ZVR5cGU9e21vdmVUeXBlfSAvPlxuICA8L0ljb25DaGVja2JveD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmVUeXBlQ2hlY2tib3g7XG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUTW92ZVR5cGUgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBtb3ZlVHlwZXMgfSBmcm9tICdAL2FwcC91dGlscy9nZW5lcmFscyc7XG5pbXBvcnQgeyBUTW92ZVR5cGVGaWx0ZXJUeXBlIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCB7IFRNb3ZlVHlwZVRvZ2dsZUZ1bmN0aW9uIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCBNb3ZlVHlwZUNoZWNrYm94IGZyb20gJy4vTW92ZVR5cGVDaGVja2JveCc7XG5cbmZ1bmN0aW9uIE1vdmVUeXBlQ2hlY2tib3hzKHtcbiAgbW92ZVR5cGVGaWx0ZXIsXG4gIG9uVG9nZ2xlLFxufToge1xuICBtb3ZlVHlwZUZpbHRlcjogVE1vdmVUeXBlRmlsdGVyVHlwZTtcbiAgb25Ub2dnbGU6IFRNb3ZlVHlwZVRvZ2dsZUZ1bmN0aW9uO1xufSkge1xuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhc2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgY29uc3QgbW92ZVR5cGUgPSBkYXRhc2V0Lm1vdmVUeXBlIGFzIFRNb3ZlVHlwZTtcbiAgICAgIGNvbnN0IGNoZWNrZWQgPSBkYXRhc2V0LmNoZWNrZWQgPT09ICd0cnVlJztcbiAgICAgIG9uVG9nZ2xlKHsgbW92ZVR5cGUsIGNoZWNrZWQgfSk7XG4gICAgfSxcbiAgICBbb25Ub2dnbGVdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHttb3ZlVHlwZXMubWFwKChtb3ZlVHlwZSkgPT4gKFxuICAgICAgICA8TW92ZVR5cGVDaGVja2JveFxuICAgICAgICAgIGtleT17bW92ZVR5cGV9XG4gICAgICAgICAgbW92ZVR5cGU9e21vdmVUeXBlfVxuICAgICAgICAgIGNoZWNrZWQ9e21vdmVUeXBlRmlsdGVyW21vdmVUeXBlXX1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oTW92ZVR5cGVDaGVja2JveHMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9JY29uQ2hlY2tib3gnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7IFRCdXR0b25FdmVudEhhbmRsZXIgfSBmcm9tICcuLi9oZWxwZXInO1xuXG5mdW5jdGlvbiBSYXJpdHk0Q2hlY2tib3goe1xuICBjaGVja2VkLFxuICBvbkNsaWNrLFxufToge1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgb25DbGljazogVEJ1dHRvbkV2ZW50SGFuZGxlcjtcbn0pOiBSZWFjdEVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxJY29uQ2hlY2tib3ggY2hlY2tlZD17Y2hlY2tlZH0gb25DbGljaz17b25DbGlja30+XG4gICAgICA8ZGl2IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3VzZUJhc2VQYXRoVXJsKCcvYXNzZXRzL3Jhcml0eTQucG5nJyl9Jyk7XG4gICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9JY29uQ2hlY2tib3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhcml0eTRDaGVja2JveDtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbkNoZWNrYm94IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSWNvbkNoZWNrYm94JztcbmltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5pbXBvcnQgeyBUQnV0dG9uRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vaGVscGVyJztcblxuZnVuY3Rpb24gUmFyaXR5NUNoZWNrYm94KHtcbiAgY2hlY2tlZCxcbiAgb25DbGljayxcbn06IHtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s6IFRCdXR0b25FdmVudEhhbmRsZXI7XG59KTogUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8SWNvbkNoZWNrYm94IGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPGRpdiAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHt1c2VCYXNlUGF0aFVybCgnL2Fzc2V0cy9yYXJpdHk1LnBuZycpfScpO1xuICAgICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICAgIGhlaWdodDogNTVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvSWNvbkNoZWNrYm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBSYXJpdHk1Q2hlY2tib3g7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdlYXBvblR5cGVJY29uIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvV2VhcG9uVHlwZUljb24nO1xuaW1wb3J0IEljb25DaGVja2JveCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0ljb25DaGVja2JveCc7XG5pbXBvcnQgeyBUV2VhcG9uVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcblxuY29uc3QgV2VhcG9uVHlwZUNoZWNrYm94ID0gKHtcbiAgd2VhcG9uVHlwZSxcbiAgY2hlY2tlZCxcbiAgb25DbGljayxcbn06IHtcbiAgd2VhcG9uVHlwZTogVFdlYXBvblR5cGU7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBvbkNsaWNrPzogKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZDtcbn0pID0+IChcbiAgPEljb25DaGVja2JveFxuICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBkYXRhLXdlYXBvbi10eXBlPXt3ZWFwb25UeXBlfVxuICA+XG4gICAgPFdlYXBvblR5cGVJY29uIHdlYXBvblR5cGU9e3dlYXBvblR5cGV9IC8+XG4gIDwvSWNvbkNoZWNrYm94PlxuKTtcbmV4cG9ydCBkZWZhdWx0IFdlYXBvblR5cGVDaGVja2JveDtcbiIsImltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVFdlYXBvblR5cGUgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyB3ZWFwb25UeXBlcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2dlbmVyYWxzJztcbmltcG9ydCB7IFRXZWFwb25UeXBlRmlsdGVyVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgeyBUV2VhcG9uVHlwZVRvZ2dsZUZ1bmN0aW9uIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCBXZWFwb25UeXBlQ2hlY2tib3ggZnJvbSAnLi9XZWFwb25UeXBlQ2hlY2tib3gnO1xuXG5mdW5jdGlvbiBXZWFwb25UeXBlQ2hlY2tib3hzKHtcbiAgd2VhcG9uVHlwZUZpbHRlcixcbiAgb25Ub2dnbGUsXG59OiB7XG4gIHdlYXBvblR5cGVGaWx0ZXI6IFRXZWFwb25UeXBlRmlsdGVyVHlwZTtcbiAgb25Ub2dnbGU6IFRXZWFwb25UeXBlVG9nZ2xlRnVuY3Rpb247XG59KSB7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGFzZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zdCB3ZWFwb25UeXBlID0gZGF0YXNldC53ZWFwb25UeXBlIGFzIFRXZWFwb25UeXBlO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IGRhdGFzZXQuY2hlY2tlZCA9PT0gJ3RydWUnO1xuICAgICAgb25Ub2dnbGUoeyB3ZWFwb25UeXBlLCBjaGVja2VkIH0pO1xuICAgIH0sXG4gICAgW29uVG9nZ2xlXVxuICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7d2VhcG9uVHlwZXMubWFwKCh3ZWFwb25UeXBlKSA9PiAoXG4gICAgICAgIDxXZWFwb25UeXBlQ2hlY2tib3hcbiAgICAgICAgICBrZXk9e3dlYXBvblR5cGV9XG4gICAgICAgICAgd2VhcG9uVHlwZT17d2VhcG9uVHlwZX1cbiAgICAgICAgICBjaGVja2VkPXt3ZWFwb25UeXBlRmlsdGVyW3dlYXBvblR5cGVdfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IG1lbW8oV2VhcG9uVHlwZUNoZWNrYm94cyk7XG4iLCJpbXBvcnQgeyB3ZWFwb25UeXBlcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2dlbmVyYWxzJztcbmltcG9ydCB7XG4gIFRNb3ZlVHlwZUZpbHRlclR5cGUsXG4gIFRXZWFwb25UeXBlRmlsdGVyVHlwZSxcbn0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCB7IFRNb3ZlVHlwZSwgVFdlYXBvblR5cGUgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFRCdXR0b25FdmVudEhhbmRsZXIgPSAoXG4gIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxuKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBURGl2RXZlbnRIYW5kbGVyID0gKFxuICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD5cbikgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgVE1vdmVUeXBlVG9nZ2xlRnVuY3Rpb24gPSAoe1xuICBtb3ZlVHlwZSxcbiAgY2hlY2tlZCxcbn06IHtcbiAgbW92ZVR5cGU6IFRNb3ZlVHlwZTtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG59KSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBUV2VhcG9uVHlwZVRvZ2dsZUZ1bmN0aW9uID0gKHtcbiAgd2VhcG9uVHlwZSxcbiAgY2hlY2tlZCxcbn06IHtcbiAgd2VhcG9uVHlwZTogVFdlYXBvblR5cGU7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xufSkgPT4gdm9pZDtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNb3ZlVHlwZUZpbHRlcihkZWZhdWx0VmFsdWUgPSB0cnVlKTogVE1vdmVUeXBlRmlsdGVyVHlwZSB7XG4gIHJldHVybiB7XG4gICAgaW5mYW50cnk6IGRlZmF1bHRWYWx1ZSxcbiAgICBhcm1vcmVkOiBkZWZhdWx0VmFsdWUsXG4gICAgY2F2YWxyeTogZGVmYXVsdFZhbHVlLFxuICAgIGZseWluZzogZGVmYXVsdFZhbHVlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVdlYXBvblR5cGVGaWx0ZXIoXG4gIGRlZmF1bHRWYWx1ZSA9IHRydWVcbik6IFRXZWFwb25UeXBlRmlsdGVyVHlwZSB7XG4gIHJldHVybiB3ZWFwb25UeXBlcy5yZWR1Y2UoKGFjYywgd2VhcG9uVHlwZSkgPT4ge1xuICAgIGFjY1t3ZWFwb25UeXBlXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSkgYXMgVFdlYXBvblR5cGVGaWx0ZXJUeXBlO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvY29tcHMvdHlwZWNoZWNrYm94cy5tb2R1bGUuY3NzJztcbmltcG9ydCB7XG4gIFRNb3ZlVHlwZUZpbHRlclR5cGUsXG4gIFRXZWFwb25UeXBlRmlsdGVyVHlwZSxcbn0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCBBbGxDaGVja2JveCBmcm9tICcuL0FsbENoZWNrYm94JztcbmltcG9ydCBSYXJpdHk1Q2hlY2tib3ggZnJvbSAnLi9SYXJpdHk1Q2hlY2tib3gnO1xuaW1wb3J0IFJhcml0eTRDaGVja2JveCBmcm9tICcuL1Jhcml0eTRDaGVja2JveCc7XG5pbXBvcnQgR3JhaWxDaGVja2JveCBmcm9tICcuL0dyYWlsQ2hlY2tib3gnO1xuaW1wb3J0IER1b0NoZWNrYm94IGZyb20gJy4vRHVvQ2hlY2tib3gnO1xuaW1wb3J0IERhbmNlckNoZWNrYm94IGZyb20gJy4vRGFuY2VyQ2hlY2tib3gnO1xuaW1wb3J0IE1vdmVUeXBlQ2hlY2tib3hzIGZyb20gJy4vTW92ZVR5cGVDaGVja2JveHMnO1xuaW1wb3J0IFdlYXBvblR5cGVDaGVja2JveHMgZnJvbSAnLi9XZWFwb25UeXBlQ2hlY2tib3hzJztcbmltcG9ydCB7XG4gIFRCdXR0b25FdmVudEhhbmRsZXIsXG4gIFREaXZFdmVudEhhbmRsZXIsXG4gIFRNb3ZlVHlwZVRvZ2dsZUZ1bmN0aW9uLFxuICBUV2VhcG9uVHlwZVRvZ2dsZUZ1bmN0aW9uLFxufSBmcm9tICcuL2hlbHBlcic7XG5cbmV4cG9ydCB0eXBlIFR5cGVDaGVja2JveHNQcm9wcyA9IHtcbiAgYWxsQ2hlY2tlZDogYm9vbGVhbjtcbiAgYWxsSW5kZXRlcm1pbmF0ZWQ6IGJvb2xlYW47XG4gIHRvZ2dsZUFsbDogVERpdkV2ZW50SGFuZGxlcjtcbiAgbW92ZVR5cGVGaWx0ZXI6IFRNb3ZlVHlwZUZpbHRlclR5cGU7XG4gIHRvZ2dsZU1vdmVUeXBlOiBUTW92ZVR5cGVUb2dnbGVGdW5jdGlvbjtcbiAgd2VhcG9uVHlwZUZpbHRlcjogVFdlYXBvblR5cGVGaWx0ZXJUeXBlO1xuICB0b2dnbGVXZWFwb25UeXBlOiBUV2VhcG9uVHlwZVRvZ2dsZUZ1bmN0aW9uO1xuICBpc1Jhcml0eTU6IGJvb2xlYW47XG4gIHRvZ2dsZVJhcml0eTU6IFRCdXR0b25FdmVudEhhbmRsZXI7XG4gIGlzUmFyaXR5NDogYm9vbGVhbjtcbiAgdG9nZ2xlUmFyaXR5NDogVEJ1dHRvbkV2ZW50SGFuZGxlcjtcbiAgaXNHcmFpbDogYm9vbGVhbjtcbiAgdG9nZ2xlR3JhaWw6IFRCdXR0b25FdmVudEhhbmRsZXI7XG4gIGlzRHVvOiBib29sZWFuLFxuICB0b2dnbGVEdW86IFRCdXR0b25FdmVudEhhbmRsZXIsXG4gIGlzRGFuY2VyOiBib29sZWFuO1xuICB0b2dnbGVEYW5jZXI6IFRCdXR0b25FdmVudEhhbmRsZXI7XG59O1xuXG5mdW5jdGlvbiBUeXBlQ2hlY2tib3hzKHtcbiAgYWxsQ2hlY2tlZCxcbiAgYWxsSW5kZXRlcm1pbmF0ZWQsXG4gIHRvZ2dsZUFsbCxcbiAgbW92ZVR5cGVGaWx0ZXIsXG4gIHRvZ2dsZU1vdmVUeXBlLFxuICB3ZWFwb25UeXBlRmlsdGVyLFxuICB0b2dnbGVXZWFwb25UeXBlLFxuICBpc1Jhcml0eTUsXG4gIHRvZ2dsZVJhcml0eTUsXG4gIGlzUmFyaXR5NCxcbiAgdG9nZ2xlUmFyaXR5NCxcbiAgaXNHcmFpbCxcbiAgdG9nZ2xlR3JhaWwsXG4gIGlzRHVvLFxuICB0b2dnbGVEdW8sXG4gIGlzRGFuY2VyLFxuICB0b2dnbGVEYW5jZXIsXG59OiBUeXBlQ2hlY2tib3hzUHJvcHMpIHtcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uQ2xpY2tFeHBhbmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94c30gaGlkZGVuPXshZXhwYW5kZWR9PlxuICAgICAgICAgIDxBbGxDaGVja2JveFxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQWxsfVxuICAgICAgICAgICAgY2hlY2tlZD17YWxsQ2hlY2tlZH1cbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGVkPXthbGxJbmRldGVybWluYXRlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxNb3ZlVHlwZUNoZWNrYm94c1xuICAgICAgICAgICAgbW92ZVR5cGVGaWx0ZXI9e21vdmVUeXBlRmlsdGVyfVxuICAgICAgICAgICAgb25Ub2dnbGU9e3RvZ2dsZU1vdmVUeXBlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFdlYXBvblR5cGVDaGVja2JveHNcbiAgICAgICAgICAgIHdlYXBvblR5cGVGaWx0ZXI9e3dlYXBvblR5cGVGaWx0ZXJ9XG4gICAgICAgICAgICBvblRvZ2dsZT17dG9nZ2xlV2VhcG9uVHlwZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxSYXJpdHk1Q2hlY2tib3ggY2hlY2tlZD17aXNSYXJpdHk1fSBvbkNsaWNrPXt0b2dnbGVSYXJpdHk1fSAvPlxuICAgICAgICAgIDxSYXJpdHk0Q2hlY2tib3ggY2hlY2tlZD17aXNSYXJpdHk0fSBvbkNsaWNrPXt0b2dnbGVSYXJpdHk0fSAvPlxuICAgICAgICAgIDxEdW9DaGVja2JveCBjaGVja2VkPXtpc0R1b30gb25DbGljaz17dG9nZ2xlRHVvfSAvPlxuICAgICAgICAgIDxHcmFpbENoZWNrYm94IGNoZWNrZWQ9e2lzR3JhaWx9IG9uQ2xpY2s9e3RvZ2dsZUdyYWlsfSAvPlxuICAgICAgICAgIDxEYW5jZXJDaGVja2JveCBjaGVja2VkPXtpc0RhbmNlcn0gb25DbGljaz17dG9nZ2xlRGFuY2VyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snZXhwYW5kLWJ1dHRvbiddfSBvbkNsaWNrPXtvbkNsaWNrRXhwYW5kfT5cbiAgICAgICAge2V4cGFuZGVkID8gJ+KWsicgOiAn4pa8J31cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFR5cGVDaGVja2JveHMpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuaW1wb3J0IHsgVE1vdmVUeXBlLCBUV2VhcG9uVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IG1vdmVUeXBlcywgd2VhcG9uVHlwZXMgfSBmcm9tICdAL2FwcC91dGlscy9nZW5lcmFscyc7XG5pbXBvcnQgeyBUTW92ZVR5cGVGaWx0ZXJUeXBlLCBUV2VhcG9uVHlwZUZpbHRlclR5cGUgfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHsgbWFrZU1vdmVUeXBlRmlsdGVyLCBtYWtlV2VhcG9uVHlwZUZpbHRlciB9IGZyb20gJy4vaGVscGVyJztcblxuY29uc3QgdXNlVHlwZUNoZWNrYm94SG9va3MgPSAoKSA9PiB7XG4gIC8vIG1vdmUgdHlwZVxuICBjb25zdCBbbW92ZVR5cGVGaWx0ZXIsIHNldE1vdmVUeXBlRmlsdGVyXSA9IHVzZVN0YXRlPFRNb3ZlVHlwZUZpbHRlclR5cGU+KFxuICAgICgpID0+IG1ha2VNb3ZlVHlwZUZpbHRlcih0cnVlKVxuICApO1xuXG4gIGNvbnN0IHRvZ2dsZU1vdmVUeXBlID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgbW92ZVR5cGUsIGNoZWNrZWQgfTogeyBtb3ZlVHlwZTogVE1vdmVUeXBlOyBjaGVja2VkOiBib29sZWFuIH0pID0+IHtcbiAgICAgIHNldE1vdmVUeXBlRmlsdGVyKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gcHJvZHVjZShwcmV2LCAoZHJhZnQpID0+IHtcbiAgICAgICAgICBkcmFmdFttb3ZlVHlwZV0gPSAhY2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICAvLyB3ZWFwb24gdHlwZVxuICBjb25zdCBbXG4gICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICBzZXRXZWFwb25UeXBlRmlsdGVyLFxuICBdID0gdXNlU3RhdGU8VFdlYXBvblR5cGVGaWx0ZXJUeXBlPigoKSA9PiBtYWtlV2VhcG9uVHlwZUZpbHRlcih0cnVlKSk7XG5cbiAgY29uc3QgdG9nZ2xlV2VhcG9uVHlwZSA9IHVzZUNhbGxiYWNrKFxuICAgICh7XG4gICAgICB3ZWFwb25UeXBlLFxuICAgICAgY2hlY2tlZCxcbiAgICB9OiB7XG4gICAgICB3ZWFwb25UeXBlOiBUV2VhcG9uVHlwZTtcbiAgICAgIGNoZWNrZWQ6IGJvb2xlYW47XG4gICAgfSkgPT4ge1xuICAgICAgc2V0V2VhcG9uVHlwZUZpbHRlcigocHJldikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHByb2R1Y2UocHJldiwgKGRyYWZ0KSA9PiB7XG4gICAgICAgICAgZHJhZnRbd2VhcG9uVHlwZV0gPSAhY2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICAvLyByYXJpdHkgNVxuICBjb25zdCBbaXNSYXJpdHk1LCBzZXRJc1Jhcml0eTVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHRvZ2dsZVJhcml0eTUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNSYXJpdHk1KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICAvLyByYXJpdHkgNFxuICBjb25zdCBbaXNSYXJpdHk0LCBzZXRJc1Jhcml0eTRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHRvZ2dsZVJhcml0eTQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNSYXJpdHk0KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbaXNEdW8sIHNldElzRHVvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlRHVvID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzRHVvKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICAvLyBkYW5jZXJcbiAgY29uc3QgW2lzRGFuY2VyLCBzZXRJc0RhbmNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZURhbmNlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0RhbmNlcigocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgLy8gZ3JhaWxcbiAgY29uc3QgW2lzR3JhaWwsIHNldElzR3JhaWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVHcmFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0dyYWlsKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbYWxsQ2hlY2tlZCwgYWxsSW5kZXRlcm1pbmF0ZWRdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgbW92ZVR5cGVTdGF0ZXMgPSBtb3ZlVHlwZXMucmVkdWNlKFxuICAgICAgKGFjYywgbW92ZVR5cGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBtb3ZlVHlwZUZpbHRlclttb3ZlVHlwZV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hlY2tlZDogYWNjLmNoZWNrZWQgJiYgdmFsdWUsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZWQ6IGFjYy5pbmRldGVybWluYXRlZCB8fCB2YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB7IGNoZWNrZWQ6IHRydWUsIGluZGV0ZXJtaW5hdGVkOiBmYWxzZSB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWFwb25UeXBlU3RhdGVzID0gd2VhcG9uVHlwZXMucmVkdWNlKFxuICAgICAgKGFjYywgd2VhcG9uVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHdlYXBvblR5cGVGaWx0ZXJbd2VhcG9uVHlwZV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hlY2tlZDogYWNjLmNoZWNrZWQgJiYgdmFsdWUsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZWQ6IGFjYy5pbmRldGVybWluYXRlZCB8fCB2YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB7IGNoZWNrZWQ6IHRydWUsIGluZGV0ZXJtaW5hdGVkOiBmYWxzZSB9XG4gICAgKTtcbiAgICBjb25zdCBjaGVja2VkID0gbW92ZVR5cGVTdGF0ZXMuY2hlY2tlZCAmJiB3ZWFwb25UeXBlU3RhdGVzLmNoZWNrZWQ7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNoZWNrZWQsXG4gICAgICAhY2hlY2tlZCAmJlxuICAgICAgICAobW92ZVR5cGVTdGF0ZXMuaW5kZXRlcm1pbmF0ZWQgfHwgd2VhcG9uVHlwZVN0YXRlcy5pbmRldGVybWluYXRlZCksXG4gICAgXTtcbiAgfSwgW21vdmVUeXBlRmlsdGVyLCB3ZWFwb25UeXBlRmlsdGVyXSk7XG5cbiAgY29uc3QgdG9nZ2xlQWxsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChhbGxJbmRldGVybWluYXRlZCkge1xuICAgICAgc2V0TW92ZVR5cGVGaWx0ZXIobWFrZU1vdmVUeXBlRmlsdGVyKGZhbHNlKSk7XG4gICAgICBzZXRXZWFwb25UeXBlRmlsdGVyKG1ha2VXZWFwb25UeXBlRmlsdGVyKGZhbHNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE1vdmVUeXBlRmlsdGVyKG1ha2VNb3ZlVHlwZUZpbHRlcighYWxsQ2hlY2tlZCkpO1xuICAgICAgc2V0V2VhcG9uVHlwZUZpbHRlcihtYWtlV2VhcG9uVHlwZUZpbHRlcighYWxsQ2hlY2tlZCkpO1xuICAgIH1cbiAgfSwgW2FsbENoZWNrZWQsIGFsbEluZGV0ZXJtaW5hdGVkXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhbGxDaGVja2VkLFxuICAgIGFsbEluZGV0ZXJtaW5hdGVkLFxuICAgIHRvZ2dsZUFsbCxcbiAgICBtb3ZlVHlwZUZpbHRlcixcbiAgICB0b2dnbGVNb3ZlVHlwZSxcbiAgICB3ZWFwb25UeXBlRmlsdGVyLFxuICAgIHRvZ2dsZVdlYXBvblR5cGUsXG4gICAgaXNSYXJpdHk1LFxuICAgIHRvZ2dsZVJhcml0eTUsXG4gICAgaXNSYXJpdHk0LFxuICAgIHRvZ2dsZVJhcml0eTQsXG4gICAgaXNHcmFpbCxcbiAgICB0b2dnbGVHcmFpbCxcbiAgICBpc0R1byxcbiAgICB0b2dnbGVEdW8sXG4gICAgaXNEYW5jZXIsXG4gICAgdG9nZ2xlRGFuY2VyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVHlwZUNoZWNrYm94SG9va3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVFdlYXBvblR5cGUgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyB3ZWFwb25UeXBlcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2dlbmVyYWxzJztcbmltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5cbmNvbnN0IGJhY2tncm91bmRQb3NpdGlvbiA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtpbmRleCAqIC01NiAtIDJ9cHggLTJweGA7XG5cbmZ1bmN0aW9uIFdlYXBvblR5cGVJY29uKHtcbiAgd2VhcG9uVHlwZSxcbn06IHtcbiAgd2VhcG9uVHlwZT86IFRXZWFwb25UeXBlO1xufSk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB3ZWFwb25UeXBlcy5pbmRleE9mKHdlYXBvblR5cGUpO1xuICAgIHJldHVybiB7XG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbihpbmRleCksXG4gICAgfTtcbiAgfSwgW3dlYXBvblR5cGVdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IC8+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXRcbiAgICAgICAgICAgICAgdXJsKCcke3VzZUJhc2VQYXRoVXJsKCcvYXNzZXRzL3dlYXBvbi10eXBlLnBuZycpfScpO1xuICAgICAgICAgICAgd2lkdGg6IDUycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhcG9uVHlwZUljb247XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgVEFzc2lzdERCLFxuICBURGVmYXVsdFNraWxsREIsXG4gIFRIZXJvREIsXG4gIFRSdWxlc0RCLFxuICBUU2VhbERCLFxuICBUU2tpbGxEQixcbiAgVFdlYXBvbkRCLFxufSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFRGRUhEQlR5cGUgPSB7XG4gIHJ1bGVzREI6IFRSdWxlc0RCO1xuICBoZXJvREI6IFRIZXJvREI7XG4gIHdlYXBvbkRCPzogVFdlYXBvbkRCO1xuICBhc3Npc3REQj86IFRBc3Npc3REQjtcbiAgc3BlY2lhbERCPzogVFNraWxsREI7XG4gIHNraWxsQURCPzogVFNraWxsREI7XG4gIHNraWxsQkRCPzogVFNraWxsREI7XG4gIHNraWxsQ0RCPzogVFNraWxsREI7XG4gIHNlYWxEQj86IFRTZWFsREI7XG4gIGRlZmF1bHRTa2lsbERCPzogVERlZmF1bHRTa2lsbERCO1xuICByZXNwbGVuZGVudERCOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBGRUhEQiA9IGNyZWF0ZUNvbnRleHQ8VEZFSERCVHlwZT4obnVsbCk7XG5cbmV4cG9ydCBjb25zdCB1c2VGZWhEQiA9ICgpOiBURkVIREJUeXBlID0+IHVzZUNvbnRleHQoRkVIREIpO1xuIiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZXJvSGVhZGVyIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSGVyb0hlYWRlcic7XG5pbXBvcnQgeyBUSGVyb09wdGlvbiB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5cbmZ1bmN0aW9uIEhlcm9IZWFkZXJzKHtcbiAgaGVyb2VzLFxuICBoZXJvZXNPcmRlcixcbn06IHtcbiAgaGVyb2VzOiBUSGVyb09wdGlvbltdO1xuICBoZXJvZXNPcmRlcjogeyBbaGVyb0lkOiBzdHJpbmddOiBudW1iZXIgfTtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2hlcm9lcy5tYXAoKGhlcm8pID0+IChcbiAgICAgICAgPEhlcm9IZWFkZXJcbiAgICAgICAgICBrZXk9e2hlcm8uaWR9XG4gICAgICAgICAgaWQ9e2hlcm8uaWR9XG4gICAgICAgICAgb3JkZXI9e2hlcm9lc09yZGVyW2hlcm8uaWRdfVxuICAgICAgICAgIHsuLi5oZXJvfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVyb0hlYWRlcnMpO1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7XG4gIFRIZXJvT3B0aW9uLFxuICBtYWtlSGVyb09wdGlvbnMsXG4gIHNob3VsZEJlSGlkZGVuLFxufSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHVzZVR5cGVDaGVja2JveEhvb2tzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy91c2VUeXBlQ2hlY2tib3hIb29rcyc7XG5pbXBvcnQgeyB1c2VGZWhEQiB9IGZyb20gJ0AvYXBwL3BhZ2UvRkVIREInO1xuXG5mdW5jdGlvbiB1c2VTb3J0QnlIb29rcygpIHtcbiAgY29uc3QgW3NvcnRCeUhQLCBzZXRTb3J0QnlIUF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVNvcnRCeUhwID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNvcnRCeUhQKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3QgW3NvcnRCeUF0aywgc2V0U29ydEJ5QXRrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlU29ydEJ5QXRrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNvcnRCeUF0aygocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIGNvbnN0IFtzb3J0QnlTcGQsIHNldFNvcnRCeVNwZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVNvcnRCeVNwZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTb3J0QnlTcGQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBbc29ydEJ5RGVmLCBzZXRTb3J0QnlEZWZdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTb3J0QnlEZWYgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U29ydEJ5RGVmKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3QgW3NvcnRCeVJlcywgc2V0U29ydEJ5UmVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlU29ydEJ5UmVzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNvcnRCeVJlcygocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIGNvbnN0IHNvcnRCeSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBbXTtcbiAgICBpZiAoc29ydEJ5SFApIHtcbiAgICAgIGtleXMucHVzaCgnaHAnKTtcbiAgICB9XG4gICAgaWYgKHNvcnRCeUF0aykge1xuICAgICAga2V5cy5wdXNoKCdhdGsnKTtcbiAgICB9XG4gICAgaWYgKHNvcnRCeVNwZCkge1xuICAgICAga2V5cy5wdXNoKCdzcGQnKTtcbiAgICB9XG4gICAgaWYgKHNvcnRCeURlZikge1xuICAgICAga2V5cy5wdXNoKCdkZWYnKTtcbiAgICB9XG4gICAgaWYgKHNvcnRCeVJlcykge1xuICAgICAga2V5cy5wdXNoKCdyZXMnKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXM7XG4gIH0sIFtzb3J0QnlIUCwgc29ydEJ5QXRrLCBzb3J0QnlTcGQsIHNvcnRCeURlZiwgc29ydEJ5UmVzXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzb3J0QnksXG4gICAgc29ydEJ5SFAsXG4gICAgdG9nZ2xlU29ydEJ5SHAsXG4gICAgc29ydEJ5QXRrLFxuICAgIHRvZ2dsZVNvcnRCeUF0ayxcbiAgICBzb3J0QnlTcGQsXG4gICAgdG9nZ2xlU29ydEJ5U3BkLFxuICAgIHNvcnRCeURlZixcbiAgICB0b2dnbGVTb3J0QnlEZWYsXG4gICAgc29ydEJ5UmVzLFxuICAgIHRvZ2dsZVNvcnRCeVJlcyxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSG9va3MoKSB7XG4gIGNvbnN0IHsgaGVyb0RCLCBhc3Npc3REQiwgcmVzcGxlbmRlbnREQiB9ID0gdXNlRmVoREIoKTtcbiAgY29uc3QgaGVyb2VzOiBUSGVyb09wdGlvbltdID0gdXNlTWVtbyhcbiAgICAoKSA9PiBtYWtlSGVyb09wdGlvbnMoeyBoZXJvREIsIGFzc2lzdERCLCByZXNwbGVuZGVudERCIH0pLFxuICAgIFtoZXJvREIsIGFzc2lzdERCLCByZXNwbGVuZGVudERCXVxuICApO1xuXG4gIGNvbnN0IHtcbiAgICBhbGxDaGVja2VkLFxuICAgIGFsbEluZGV0ZXJtaW5hdGVkLFxuICAgIHRvZ2dsZUFsbCxcbiAgICBtb3ZlVHlwZUZpbHRlcixcbiAgICB0b2dnbGVNb3ZlVHlwZSxcbiAgICB3ZWFwb25UeXBlRmlsdGVyLFxuICAgIHRvZ2dsZVdlYXBvblR5cGUsXG4gICAgaXNSYXJpdHk1LFxuICAgIHRvZ2dsZVJhcml0eTUsXG4gICAgaXNSYXJpdHk0LFxuICAgIHRvZ2dsZVJhcml0eTQsXG4gICAgaXNHcmFpbCxcbiAgICB0b2dnbGVHcmFpbCxcbiAgICBpc0R1byxcbiAgICB0b2dnbGVEdW8sXG4gICAgaXNEYW5jZXIsXG4gICAgdG9nZ2xlRGFuY2VyLFxuICB9ID0gdXNlVHlwZUNoZWNrYm94SG9va3MoKTtcblxuICBjb25zdCB7XG4gICAgc29ydEJ5LFxuICAgIHNvcnRCeUhQLFxuICAgIHRvZ2dsZVNvcnRCeUhwLFxuICAgIHNvcnRCeUF0ayxcbiAgICB0b2dnbGVTb3J0QnlBdGssXG4gICAgc29ydEJ5U3BkLFxuICAgIHRvZ2dsZVNvcnRCeVNwZCxcbiAgICBzb3J0QnlEZWYsXG4gICAgdG9nZ2xlU29ydEJ5RGVmLFxuICAgIHNvcnRCeVJlcyxcbiAgICB0b2dnbGVTb3J0QnlSZXMsXG4gIH0gPSB1c2VTb3J0QnlIb29rcygpO1xuXG4gIGNvbnN0IGhlcm9lc09yZGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGhlcm9lc1xuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgYVN0YXRTdW0gPSBzb3J0QnkucmVkdWNlKChhY2MsIHN0YXRLZXkpID0+IGFjYyArIGFbc3RhdEtleV0sIDApO1xuICAgICAgICBjb25zdCBiU3RhdFN1bSA9IHNvcnRCeS5yZWR1Y2UoKGFjYywgc3RhdEtleSkgPT4gYWNjICsgYltzdGF0S2V5XSwgMCk7XG4gICAgICAgIGlmIChhU3RhdFN1bSA+IGJTdGF0U3VtKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiU3RhdFN1bSA+IGFTdGF0U3VtKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgfSlcbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChhY2MsIGhlcm8sIGluZGV4KSA9PiAoe1xuICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICBbaGVyby5pZF06IGluZGV4LFxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgICk7XG4gIH0sIFtoZXJvZXMsIHNvcnRCeV0pO1xuXG4gIGNvbnN0IGNvbXB1dGVkSGVyb2VzID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgaGVyb2VzLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IHNob3VsZEJlSGlkZGVuKG9wdGlvbiwge1xuICAgICAgICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgICAgICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgICAgICAgaXNSYXJpdHk1LFxuICAgICAgICAgIGlzUmFyaXR5NCxcbiAgICAgICAgICBpc0dyYWlsLFxuICAgICAgICAgIGlzRHVvLFxuICAgICAgICAgIGlzRGFuY2VyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoaWRkZW4sXG4gICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgW1xuICAgICAgaGVyb2VzLFxuICAgICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgICB3ZWFwb25UeXBlRmlsdGVyLFxuICAgICAgaXNSYXJpdHk1LFxuICAgICAgaXNSYXJpdHk0LFxuICAgICAgaXNHcmFpbCxcbiAgICAgIGlzRHVvLFxuICAgICAgaXNEYW5jZXIsXG4gICAgXVxuICApO1xuXG4gIGNvbnN0IGJnID0gdXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvc3VtbW9uLXN0b25lLmpwZycpO1xuXG4gIHJldHVybiB7XG4gICAgYmcsXG4gICAgLyoqIHR5cGVjaGVja2JveCAqL1xuICAgIGFsbENoZWNrZWQsXG4gICAgYWxsSW5kZXRlcm1pbmF0ZWQsXG4gICAgdG9nZ2xlQWxsLFxuICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgIHRvZ2dsZU1vdmVUeXBlLFxuICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlV2VhcG9uVHlwZSxcbiAgICBpc1Jhcml0eTUsXG4gICAgdG9nZ2xlUmFyaXR5NSxcbiAgICBpc1Jhcml0eTQsXG4gICAgdG9nZ2xlUmFyaXR5NCxcbiAgICBpc0dyYWlsLFxuICAgIHRvZ2dsZUdyYWlsLFxuICAgIGlzRHVvLFxuICAgIHRvZ2dsZUR1byxcbiAgICBpc0RhbmNlcixcbiAgICB0b2dnbGVEYW5jZXIsXG4gICAgLyoqIHNvcnRpbmcgKi9cbiAgICBzb3J0QnlIUCxcbiAgICB0b2dnbGVTb3J0QnlIcCxcbiAgICBzb3J0QnlBdGssXG4gICAgdG9nZ2xlU29ydEJ5QXRrLFxuICAgIHNvcnRCeVNwZCxcbiAgICB0b2dnbGVTb3J0QnlTcGQsXG4gICAgc29ydEJ5RGVmLFxuICAgIHRvZ2dsZVNvcnRCeURlZixcbiAgICBzb3J0QnlSZXMsXG4gICAgdG9nZ2xlU29ydEJ5UmVzLFxuICAgIC8qKiByZW5kZXJpbmcgKi9cbiAgICBjb21wdXRlZEhlcm9lcyxcbiAgICBoZXJvZXNPcmRlcixcbiAgfTtcbn1cbiIsImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgVHlwZUNoZWNrYm94cyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9wYWdlcy9yYW5rZXIvaW5kZXgubW9kdWxlLmNzcyc7XG5pbXBvcnQgSGVyb0hlYWRlcnMgZnJvbSAnLi9IZXJvSGVhZGVycyc7XG5pbXBvcnQgdXNlSG9va3MgZnJvbSAnLi9ob29rcyc7XG5cbmNvbnN0IFJhbmtlciA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGJnLFxuICAgIC8qKiB0eXBlY2hlY2tib3ggKi9cbiAgICBhbGxDaGVja2VkLFxuICAgIGFsbEluZGV0ZXJtaW5hdGVkLFxuICAgIHRvZ2dsZUFsbCxcbiAgICBtb3ZlVHlwZUZpbHRlcixcbiAgICB0b2dnbGVNb3ZlVHlwZSxcbiAgICB3ZWFwb25UeXBlRmlsdGVyLFxuICAgIHRvZ2dsZVdlYXBvblR5cGUsXG4gICAgaXNSYXJpdHk1LFxuICAgIHRvZ2dsZVJhcml0eTUsXG4gICAgaXNSYXJpdHk0LFxuICAgIHRvZ2dsZVJhcml0eTQsXG4gICAgaXNHcmFpbCxcbiAgICB0b2dnbGVHcmFpbCxcbiAgICBpc0R1byxcbiAgICB0b2dnbGVEdW8sXG4gICAgaXNEYW5jZXIsXG4gICAgdG9nZ2xlRGFuY2VyLFxuICAgIC8qKiBzb3J0aW5nICovXG4gICAgc29ydEJ5SFAsXG4gICAgdG9nZ2xlU29ydEJ5SHAsXG4gICAgc29ydEJ5QXRrLFxuICAgIHRvZ2dsZVNvcnRCeUF0ayxcbiAgICBzb3J0QnlTcGQsXG4gICAgdG9nZ2xlU29ydEJ5U3BkLFxuICAgIHNvcnRCeURlZixcbiAgICB0b2dnbGVTb3J0QnlEZWYsXG4gICAgc29ydEJ5UmVzLFxuICAgIHRvZ2dsZVNvcnRCeVJlcyxcbiAgICBjb21wdXRlZEhlcm9lcyxcbiAgICBoZXJvZXNPcmRlcixcbiAgfSA9IHVzZUhvb2tzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7pq5Tos6rmjpLmjpLnnIs8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZDogYHVybCgnJHtiZ30nKSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQgZml4ZWRgLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydiZy1sYXllciddfT5cbiAgICAgICAgICA8VHlwZUNoZWNrYm94c1xuICAgICAgICAgICAgYWxsQ2hlY2tlZD17YWxsQ2hlY2tlZH1cbiAgICAgICAgICAgIGFsbEluZGV0ZXJtaW5hdGVkPXthbGxJbmRldGVybWluYXRlZH1cbiAgICAgICAgICAgIHRvZ2dsZUFsbD17dG9nZ2xlQWxsfVxuICAgICAgICAgICAgbW92ZVR5cGVGaWx0ZXI9e21vdmVUeXBlRmlsdGVyfVxuICAgICAgICAgICAgdG9nZ2xlTW92ZVR5cGU9e3RvZ2dsZU1vdmVUeXBlfVxuICAgICAgICAgICAgd2VhcG9uVHlwZUZpbHRlcj17d2VhcG9uVHlwZUZpbHRlcn1cbiAgICAgICAgICAgIHRvZ2dsZVdlYXBvblR5cGU9e3RvZ2dsZVdlYXBvblR5cGV9XG4gICAgICAgICAgICBpc1Jhcml0eTU9e2lzUmFyaXR5NX1cbiAgICAgICAgICAgIHRvZ2dsZVJhcml0eTU9e3RvZ2dsZVJhcml0eTV9XG4gICAgICAgICAgICBpc1Jhcml0eTQ9e2lzUmFyaXR5NH1cbiAgICAgICAgICAgIHRvZ2dsZVJhcml0eTQ9e3RvZ2dsZVJhcml0eTR9XG4gICAgICAgICAgICBpc0dyYWlsPXtpc0dyYWlsfVxuICAgICAgICAgICAgdG9nZ2xlR3JhaWw9e3RvZ2dsZUdyYWlsfVxuICAgICAgICAgICAgaXNEdW89e2lzRHVvfVxuICAgICAgICAgICAgdG9nZ2xlRHVvPXt0b2dnbGVEdW99XG4gICAgICAgICAgICBpc0RhbmNlcj17aXNEYW5jZXJ9XG4gICAgICAgICAgICB0b2dnbGVEYW5jZXI9e3RvZ2dsZURhbmNlcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ3N0YXRzLWJ1dHRvbnMnXX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7mjpLluo/kvp3mk5o8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1hY3RpdmU9e3NvcnRCeUhQfSBvbkNsaWNrPXt0b2dnbGVTb3J0QnlIcH0+XG4gICAgICAgICAgICAgIEhQXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1hY3RpdmU9e3NvcnRCeUF0a30gb25DbGljaz17dG9nZ2xlU29ydEJ5QXRrfT5cbiAgICAgICAgICAgICAg5pS75pOKXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1hY3RpdmU9e3NvcnRCeVNwZH0gb25DbGljaz17dG9nZ2xlU29ydEJ5U3BkfT5cbiAgICAgICAgICAgICAg6YCf5bqmXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1hY3RpdmU9e3NvcnRCeURlZn0gb25DbGljaz17dG9nZ2xlU29ydEJ5RGVmfT5cbiAgICAgICAgICAgICAg6Ziy5a6IXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1hY3RpdmU9e3NvcnRCeVJlc30gb25DbGljaz17dG9nZ2xlU29ydEJ5UmVzfT5cbiAgICAgICAgICAgICAg6a2U6ZiyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICAgICAgPEhlcm9IZWFkZXJzIGhlcm9lcz17Y29tcHV0ZWRIZXJvZXN9IGhlcm9lc09yZGVyPXtoZXJvZXNPcmRlcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oUmFua2VyKTtcbiIsImltcG9ydCB7IFRCbGVzc2luZ0tpbmQsIFRCbGVzc2luZ0Jvb3N0IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBibGVzc2VycyB9IGZyb20gJy4vZ2VuZXJhbHMnO1xuXG5jb25zdCBibGVzc2luZ0tpbmROYW1lTWFwOiB7IFtibGVzc2luZ0tpbmQgaW4gVEJsZXNzaW5nS2luZF06IHN0cmluZyB9ID0ge1xuICBmaXJlOiAn54Gr5LmL56Wd56aPJyxcbiAgd2F0ZXI6ICfmsLTkuYvnpZ3npo8nLFxuICB3aW5kOiAn6aKo5LmL56Wd56aPJyxcbiAgZWFydGg6ICflnLDkuYvnpZ3npo8nLFxuICBsaWdodDogJ+WFieS5i+elneemjycsXG4gIGRhcms6ICfpl4fkuYvnpZ3npo8nLFxuICBhc3RyYTogJ+WkqeS5i+elneemjycsXG4gIGFuaW1hOiAn55CG5LmL56Wd56aPJyxcbn07XG5cbmNvbnN0IGJsZXNzZXJLaW5kTmFtZU1hcDogeyBbYmxlc3NpbmdLaW5kIGluIFRCbGVzc2luZ0tpbmRdOiBzdHJpbmcgfSA9IHtcbiAgZmlyZTogJ+eBq+S5i+WCs+aJvycsXG4gIHdhdGVyOiAn5rC05LmL5YKz5om/JyxcbiAgd2luZDogJ+miqOS5i+WCs+aJvycsXG4gIGVhcnRoOiAn5Zyw5LmL5YKz5om/JyxcbiAgbGlnaHQ6ICflhYnkuYvlgrPmib8nLFxuICBkYXJrOiAn6ZeH5LmL5YKz5om/JyxcbiAgYXN0cmE6ICflpKnkuYvlgrPmib8nLFxuICBhbmltYTogJ+eQhuS5i+WCs+aJvycsXG59O1xuXG5jb25zdCBibGVzc2luZ0Jvb3N0TmFtZU1hcDoge1xuICBbYmxlc3NpbmdCb29zdCBpbiBUQmxlc3NpbmdCb29zdF06IHN0cmluZztcbn0gPSB7XG4gIGhwOiAn5q276aylJyxcbiAgYXRrOiAn5pS75pOKJyxcbiAgc3BkOiAn6YCf5bqmJyxcbiAgZGVmOiAn6Ziy5a6IJyxcbiAgcmVzOiAn6a2U6ZiyJyxcbn07XG5cbmNvbnN0IGJsZXNzZXJOYW1lTWFwOiB7XG4gIFtibGVzc2VyOiBzdHJpbmddOiBzdHJpbmc7XG59ID0gYmxlc3NlcnMucmVkdWNlKChhY2MsIGJsZXNzZXIpID0+IHtcbiAgY29uc3QgW2tpbmQsIGJvb3N0XSA9IGJsZXNzZXIuc3BsaXQoJy0nKTtcbiAgcmV0dXJuIHtcbiAgICAuLi5hY2MsXG4gICAgW2JsZXNzZXJdOiBgJHtibGVzc2VyS2luZE5hbWVNYXBba2luZF19IC0gJHtibGVzc2luZ0Jvb3N0TmFtZU1hcFtib29zdF19YCxcbiAgfTtcbn0sIHt9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNyYyhibGVzczogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFibGVzcyB8fCBibGVzcyA9PT0gJy0nKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmIChibGVzc2luZ0tpbmROYW1lTWFwW2JsZXNzXSB8fCBibGVzc2VyTmFtZU1hcFtibGVzc10pIHtcbiAgICByZXR1cm4gYC9hc3NldHMvYmxlc3NpbmctJHtibGVzc30ucG5nYDtcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lKGJsZXNzOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoIWJsZXNzIHx8IGJsZXNzID09PSAnLScpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIGJsZXNzaW5nS2luZE5hbWVNYXBbYmxlc3NdIHx8IGJsZXNzZXJOYW1lTWFwW2JsZXNzXSB8fCAn54Sh56Wd56aPJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNyY0FuZE5hbWUoYmxlc3M6IHN0cmluZyk6IHsgc3JjOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9IHtcbiAgcmV0dXJuIHsgc3JjOiBnZXRTcmMoYmxlc3MpLCBuYW1lOiBnZXROYW1lKGJsZXNzKSB9O1xufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5lbnRyaWVzKGJsZXNzaW5nS2luZE5hbWVNYXApLm1hcChcbiAgKFt2YWx1ZSwgbmFtZV0pID0+ICh7XG4gICAgdmFsdWUsXG4gICAgbmFtZSxcbiAgfSlcbik7XG4iLCJpbXBvcnQge1xuICBUQmxlc3NpbmdCb29zdCxcbiAgVEJsZXNzaW5nS2luZCxcbiAgVE1vdmVUeXBlLFxuICBUV2VhcG9uVHlwZSxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtb3ZlVHlwZXM6IFRNb3ZlVHlwZVtdID0gW1xuICAnaW5mYW50cnknLFxuICAnYXJtb3JlZCcsXG4gICdjYXZhbHJ5JyxcbiAgJ2ZseWluZycsXG5dO1xuXG5leHBvcnQgY29uc3Qgd2VhcG9uVHlwZXM6IFRXZWFwb25UeXBlW10gPSBbXG4gICdyZWQtc3dvcmQnLFxuICAnYmx1ZS1sYW5jZScsXG4gICdncmVlbi1heGUnLFxuICAncmVkLWJvdycsXG4gICdibHVlLWJvdycsXG4gICdncmVlbi1ib3cnLFxuICAnd2hpdGUtYm93JyxcbiAgJ3JlZC1kYWdnZXInLFxuICAnYmx1ZS1kYWdnZXInLFxuICAnZ3JlZW4tZGFnZ2VyJyxcbiAgJ3doaXRlLWRhZ2dlcicsXG4gICdyZWQtdG9tZScsXG4gICdibHVlLXRvbWUnLFxuICAnZ3JlZW4tdG9tZScsXG4gICd3aGl0ZS10b21lJyxcbiAgJ3doaXRlLXN0YWZmJyxcbiAgJ3JlZC1kcmFnb24nLFxuICAnYmx1ZS1kcmFnb24nLFxuICAnZ3JlZW4tZHJhZ29uJyxcbiAgJ3doaXRlLWRyYWdvbicsXG4gICdyZWQtYmVhc3QnLFxuICAnYmx1ZS1iZWFzdCcsXG4gICdncmVlbi1iZWFzdCcsXG4gICd3aGl0ZS1iZWFzdCcsXG5dO1xuXG5leHBvcnQgY29uc3QgYmxlc3NpbmdLaW5kczogVEJsZXNzaW5nS2luZFtdID0gW1xuICAnZmlyZScsXG4gICd3YXRlcicsXG4gICd3aW5kJyxcbiAgJ2VhcnRoJyxcbiAgJ2xpZ2h0JyxcbiAgJ2RhcmsnLFxuICAnYXN0cmEnLFxuICAnYW5pbWEnLFxuXTtcblxuZXhwb3J0IGNvbnN0IGJsZXNzaW5nQm9vc3RzOiBUQmxlc3NpbmdCb29zdFtdID0gW1xuICAnaHAnLFxuICAnYXRrJyxcbiAgJ3NwZCcsXG4gICdkZWYnLFxuICAncmVzJyxcbl07XG5cbmV4cG9ydCBjb25zdCBibGVzc2Vyczogc3RyaW5nW10gPSBibGVzc2luZ0tpbmRzLnJlZHVjZSgoYWNjLCBibGVzc2luZ0tpbmQpID0+IHtcbiAgYmxlc3NpbmdCb29zdHMuZm9yRWFjaCgoYmxlc3NpbmdCb29zdCkgPT4ge1xuICAgIGFjYy5wdXNoKGAke2JsZXNzaW5nS2luZH0tJHtibGVzc2luZ0Jvb3N0fWApO1xuICB9KTtcbiAgcmV0dXJuIGFjYztcbn0sIFtdKTtcbiIsImltcG9ydCB7XG4gIFRBc3Npc3REQixcbiAgVENvbG9yVHlwZSxcbiAgVEhlcm8sXG4gIFRIZXJvREIsXG4gIFRNb3ZlVHlwZSxcbiAgVFdlYXBvblR5cGUsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U3JjIH0gZnJvbSAnLi9ibGVzc2luZ3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SGVybyhcbiAgaGVyb2VzOiB7IFtoZXJvSWQ6IHN0cmluZ106IFRIZXJvIH0sXG4gIGhlcm9JZDogc3RyaW5nXG4pOiBUSGVybyB7XG4gIGlmIChoZXJvZXNbaGVyb0lkXSkge1xuICAgIHJldHVybiBoZXJvZXNbaGVyb0lkXTtcbiAgfVxuICByZXR1cm4gaGVyb2VzWydGZWgnXTtcbn1cblxuZXhwb3J0IHR5cGUgVEhlcm9PcHRpb24gPSB7XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIGlkOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcmFyaXR5OiBudW1iZXJbXTtcbiAgY29sb3JUeXBlPzogVENvbG9yVHlwZTtcbiAgd2VhcG9uVHlwZT86IFRXZWFwb25UeXBlO1xuICBtb3ZlVHlwZT86IFRNb3ZlVHlwZTtcbiAgYnN0PzogbnVtYmVyO1xuICBocD86IG51bWJlcjtcbiAgYXRrPzogbnVtYmVyO1xuICBzcGQ/OiBudW1iZXI7XG4gIGRlZj86IG51bWJlcjtcbiAgcmVzPzogbnVtYmVyO1xuICBwb29sOiBzdHJpbmc7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIGlzRGFuY2VyPzogYm9vbGVhbjtcbiAgaGFzUmVzcGxlbmRlbnQ/OiBib29sZWFuO1xuICBmYWNlU3JjOiBzdHJpbmc7XG4gIGZhY2VTcmNSPzogc3RyaW5nIC8qKiByZXNwbGVuZGVudCBoZXJvIGZhY2VTcmMgKi87XG4gIGJsZXNzaW5nU3JjPzogc3RyaW5nO1xuICBpbmRleD86IG51bWJlcjtcbiAgb3JkZXI/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBUTW92ZVR5cGVGaWx0ZXJUeXBlID0ge1xuICBbbW92ZVR5cGUgaW4gVE1vdmVUeXBlXTogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFRXZWFwb25UeXBlRmlsdGVyVHlwZSA9IHtcbiAgW3dlYXBvblR5cGUgaW4gVFdlYXBvblR5cGVdOiBib29sZWFuO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RIZXJvT3B0aW9uKGhlcm86IFRIZXJvLCBub1N0YXQgPSBmYWxzZSk6IFRIZXJvT3B0aW9uIHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIG5hbWUsXG4gICAgcmFyaXR5LFxuICAgIGNvbG9yVHlwZSxcbiAgICB3ZWFwb25UeXBlLFxuICAgIG1vdmVUeXBlLFxuICAgIGJsZXNzaW5nLFxuICAgIGJzdCxcbiAgICBzdGF0TWF4LFxuICAgIHN0YXRzLFxuICAgIHBvb2wsXG4gIH0gPSBoZXJvO1xuICBjb25zdCBmYWNlU3JjID0gYC9mYWNlcy8ke2lkfS5wbmdgO1xuICBjb25zdCBibGVzc2luZ1NyYyA9IGdldFNyYyhibGVzc2luZyk7XG4gIGxldCBocCA9IHN0YXRzWzVdLmhwWzFdO1xuICBsZXQgYXRrID0gc3RhdHNbNV0uYXRrWzFdO1xuICBsZXQgc3BkID0gc3RhdHNbNV0uc3BkWzFdO1xuICBsZXQgZGVmID0gc3RhdHNbNV0uZGVmWzFdO1xuICBsZXQgcmVzID0gc3RhdHNbNV0ucmVzWzFdO1xuICBjb25zdCBxdWVyeSA9IGAke2lkLnRvTG93ZXJDYXNlKCl9fCR7dGl0bGV9fCR7bmFtZX1gO1xuICBpZiAobm9TdGF0KSB7XG4gICAgaHAgPSB1bmRlZmluZWQ7XG4gICAgYXRrID0gdW5kZWZpbmVkO1xuICAgIHNwZCA9IHVuZGVmaW5lZDtcbiAgICBkZWYgPSB1bmRlZmluZWQ7XG4gICAgcmVzID0gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgdGl0bGUsXG4gICAgbmFtZSxcbiAgICByYXJpdHksXG4gICAgY29sb3JUeXBlLFxuICAgIHdlYXBvblR5cGUsXG4gICAgbW92ZVR5cGUsXG4gICAgYnN0OiBNYXRoLm1heChic3QgfHwgMCwgc3RhdE1heCB8fCAwKSB8fCB1bmRlZmluZWQsXG4gICAgaHAsXG4gICAgYXRrLFxuICAgIHNwZCxcbiAgICBkZWYsXG4gICAgcmVzLFxuICAgIHBvb2wsXG4gICAgcXVlcnksXG4gICAgZmFjZVNyYyxcbiAgICBibGVzc2luZ1NyYyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RIZXJvSW5mbyh7XG4gIGhlcm9EQixcbiAgYXNzaXN0REIsXG4gIHJlc3BsZW5kZW50REIsXG4gIGhlcm9JZCxcbiAgbm9TdGF0LFxufToge1xuICBoZXJvREI6IFRIZXJvREI7XG4gIGFzc2lzdERCOiBUQXNzaXN0REI7XG4gIHJlc3BsZW5kZW50REI6IHN0cmluZ1tdO1xuICBoZXJvSWQ6IHN0cmluZztcbiAgbm9TdGF0PzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgaGVybyA9IGhlcm9EQltoZXJvSWRdO1xuICBjb25zdCBkYW5jZXJzID0gYXNzaXN0REIuRGFuY2UuZXhjbHVzaXZlO1xuICBjb25zdCBvcHRpb24gPSBleHRyYWN0SGVyb09wdGlvbihoZXJvLCBub1N0YXQpO1xuICBvcHRpb24uaXNEYW5jZXIgPSBkYW5jZXJzLmluY2x1ZGVzKGhlcm8uaWQpO1xuICBvcHRpb24uaGFzUmVzcGxlbmRlbnQgPSByZXNwbGVuZGVudERCLmluY2x1ZGVzKGhlcm8uaWQpO1xuICBvcHRpb24uZmFjZVNyY1IgPSBvcHRpb24uaGFzUmVzcGxlbmRlbnRcbiAgICA/IGAvZmFjZXMvJHtoZXJvLmlkfShSKS5wbmdgXG4gICAgOiBvcHRpb24uZmFjZVNyYztcbiAgcmV0dXJuIG9wdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VIZXJvT3B0aW9ucyh7XG4gIGhlcm9EQixcbiAgYXNzaXN0REIsXG4gIHJlc3BsZW5kZW50REIsXG4gIG5vU3RhdCxcbn06IHtcbiAgaGVyb0RCOiBUSGVyb0RCO1xuICBhc3Npc3REQjogVEFzc2lzdERCO1xuICByZXNwbGVuZGVudERCOiBzdHJpbmdbXTtcbiAgbm9TdGF0PzogYm9vbGVhbjtcbn0pOiBUSGVyb09wdGlvbltdIHtcbiAgY29uc3QgZGFuY2VycyA9IGFzc2lzdERCLkRhbmNlLmV4Y2x1c2l2ZTtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoaGVyb0RCKS5tYXA8VEhlcm9PcHRpb24+KFxuICAgIChoZXJvOiBUSGVybywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZXh0cmFjdEhlcm9PcHRpb24oaGVybywgbm9TdGF0KTtcbiAgICAgIG9wdGlvbi5pc0RhbmNlciA9IGRhbmNlcnMuaW5jbHVkZXMoaGVyby5pZCk7XG4gICAgICBvcHRpb24uaGFzUmVzcGxlbmRlbnQgPSByZXNwbGVuZGVudERCLmluY2x1ZGVzKGhlcm8uaWQpO1xuICAgICAgb3B0aW9uLmZhY2VTcmNSID0gb3B0aW9uLmhhc1Jlc3BsZW5kZW50XG4gICAgICAgID8gYC9mYWNlcy8ke2hlcm8uaWR9KFIpLnBuZ2BcbiAgICAgICAgOiBvcHRpb24uZmFjZVNyYztcbiAgICAgIG9wdGlvbi5pbmRleCA9IGluZGV4O1xuICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeUZpbHRlcihoZXJvOiBUSGVyb09wdGlvbiwgZmlsdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuICEhZmlsdGVyICYmICFoZXJvLnF1ZXJ5LmluY2x1ZGVzKGZpbHRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeU1vdmVUeXBlKFxuICBoZXJvOiBUSGVyb09wdGlvbixcbiAgbW92ZVR5cGVGaWx0ZXI6IFRNb3ZlVHlwZUZpbHRlclR5cGVcbik6IGJvb2xlYW4ge1xuICBpZiAoIW1vdmVUeXBlRmlsdGVyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBoZXJvLmlkICE9PSAnRmVoJyAmJiAhbW92ZVR5cGVGaWx0ZXJbaGVyby5tb3ZlVHlwZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeVdlYXBvblR5cGUoXG4gIGhlcm86IFRIZXJvT3B0aW9uLFxuICB3ZWFwb25UeXBlRmlsdGVyOiBUV2VhcG9uVHlwZUZpbHRlclR5cGVcbik6IGJvb2xlYW4ge1xuICBpZiAoIXdlYXBvblR5cGVGaWx0ZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGhlcm8uaWQgIT09ICdGZWgnICYmICF3ZWFwb25UeXBlRmlsdGVyW2hlcm8ud2VhcG9uVHlwZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeUR1byhoZXJvOiBUSGVyb09wdGlvbiwgaXNEdW86IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKCFpc0R1bykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaGVyby5wb29sICE9PSAnZHVvJyAmJiBoZXJvLnBvb2wgIT09ICdoYXJtb25pemVkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGRlbkJ5R3JhaWwoaGVybzogVEhlcm9PcHRpb24sIGlzR3JhaWw6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKCFpc0dyYWlsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBoZXJvLnBvb2wgIT09ICdncmFpbCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeURhbmNlcihoZXJvOiBUSGVyb09wdGlvbiwgaXNEYW5jZXI6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKCFpc0RhbmNlcikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gIWhlcm8uaXNEYW5jZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRkZW5CeVJhcml0eTUoaGVybzogVEhlcm9PcHRpb24sIGlzUmFyaXR5NTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICBpZiAoaXNSYXJpdHk1KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChoZXJvLmlkID09PSAnRmVoJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaGVyby5yYXJpdHkubGVuZ3RoID09PSAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZGVuQnlSYXJpdHk0KGhlcm86IFRIZXJvT3B0aW9uLCBpc1Jhcml0eTQ6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgaWYgKGlzUmFyaXR5NCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoaGVyby5pZCA9PT0gJ0ZlaCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGhlcm8ucmFyaXR5Lmxlbmd0aCA+IDE7XG59XG5cbnR5cGUgVFNob3VsZEJlSGlkZGVuT3B0aW9ucyA9IHtcbiAgZmlsdGVyPzogc3RyaW5nO1xuICBtb3ZlVHlwZUZpbHRlcjogVE1vdmVUeXBlRmlsdGVyVHlwZTtcbiAgd2VhcG9uVHlwZUZpbHRlcjogVFdlYXBvblR5cGVGaWx0ZXJUeXBlO1xuICBpc1Jhcml0eTU/OiBib29sZWFuO1xuICBpc1Jhcml0eTQ/OiBib29sZWFuO1xuICBpc0R1bz86IGJvb2xlYW47XG4gIGlzR3JhaWw/OiBib29sZWFuO1xuICBpc0RhbmNlcj86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkQmVIaWRkZW4oXG4gIGhlcm86IFRIZXJvT3B0aW9uLFxuICB7XG4gICAgZmlsdGVyLFxuICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgaXNSYXJpdHk1LFxuICAgIGlzUmFyaXR5NCxcbiAgICBpc0R1byxcbiAgICBpc0dyYWlsLFxuICAgIGlzRGFuY2VyLFxuICB9OiBUU2hvdWxkQmVIaWRkZW5PcHRpb25zXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBoaWRkZW5CeUZpbHRlcihoZXJvLCBmaWx0ZXIpIHx8XG4gICAgaGlkZGVuQnlNb3ZlVHlwZShoZXJvLCBtb3ZlVHlwZUZpbHRlcikgfHxcbiAgICBoaWRkZW5CeVdlYXBvblR5cGUoaGVybywgd2VhcG9uVHlwZUZpbHRlcikgfHxcbiAgICBoaWRkZW5CeUR1byhoZXJvLCBpc0R1bykgfHxcbiAgICBoaWRkZW5CeUdyYWlsKGhlcm8sIGlzR3JhaWwpIHx8XG4gICAgaGlkZGVuQnlEYW5jZXIoaGVybywgaXNEYW5jZXIpIHx8XG4gICAgaGlkZGVuQnlSYXJpdHk1KGhlcm8sIGlzUmFyaXR5NSkgfHxcbiAgICBoaWRkZW5CeVJhcml0eTQoaGVybywgaXNSYXJpdHk0KVxuICApO1xufVxuIiwiaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZyc7XG5cbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUJhc2VQYXRoVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFwdWJsaWNSdW50aW1lQ29uZmlnLmJhc2VQYXRoKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICByZXR1cm4gYCR7cHVibGljUnVudGltZUNvbmZpZy5iYXNlUGF0aH0ke3VybH1gO1xufVxuIiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXRcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgPSByZXF1aXJlKFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIik7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZFwiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZXJvaGVhZGVyX2NvbnRhaW5lcl9fMVIxMC0ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMWQzZTUzO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLmhlcm9oZWFkZXJfY29udGFpbmVyX18xUjEwLSAuaGVyb2hlYWRlcl9yaWdodF9fMXhRVGkge1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAtbW96LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxuICBtaW4taGVpZ2h0OiAxNThweDtcXG59XFxuXFxuLmhlcm9oZWFkZXJfaW1nLWNvbnRhaW5lcl9fNENCWFMge1xcbiAgd2lkdGg6IDE1OHB4O1xcbiAgaGVpZ2h0OiAxNThweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtZmxleC1zaHJpbms6IDA7XFxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uaGVyb2hlYWRlcl9pbWctY29udGFpbmVyX180Q0JYUyBpbWcge1xcbiAgd2lkdGg6IDE1OHB4O1xcbiAgaGVpZ2h0OiAxNThweDtcXG59XFxuXFxuLmhlcm9oZWFkZXJfaW1nLWNvbnRhaW5lcl9fNENCWFMgLmhlcm9oZWFkZXJfYnN0X18yblhQWCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbn1cXG5cXG4uaGVyb2hlYWRlcl90aXRsZS1hbmQtbmFtZV9fMUpwekoge1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAtbW96LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgIC1tb3otYm94LWFsaWduOiBlbmQ7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4uaGVyb2hlYWRlcl90aXRsZS1hbmQtbmFtZV9fMUpwekogLmhlcm9oZWFkZXJfdGl0bGVfX210bElOIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uaGVyb2hlYWRlcl90aXRsZS1hbmQtbmFtZV9fMUpwekogLmhlcm9oZWFkZXJfbmFtZV9fOHR1LTAge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XFxuICAgICAtbW96LWJveC1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmhlcm9oZWFkZXJfdHlwZXNfXzFMVE5PIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuXFxuLmhlcm9oZWFkZXJfYmxlc3NpbmdfXzJ5RWF2IHtcXG4gIHdpZHRoOiA1MnB4O1xcbiAgaGVpZ2h0OiA1MnB4O1xcbn1cXG5cXG4uaGVyb2hlYWRlcl9zdGF0c19fMjJyczUge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGVyb2hlYWRlcl9zdGF0c19fMjJyczUgPiBkaXYge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvY29tcHMvaGVyb2hlYWRlci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7RUFDYiwyQkFBbUI7S0FBbkIsc0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQVk7S0FBWixnQkFBWTtVQUFaLFlBQVk7RUFDWixxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFzQjtLQUF0Qix5QkFBc0I7S0FBdEIsMEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQWM7VUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLFNBQVM7RUFDVCxRQUFRO0VBQ1IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFZO0tBQVosZ0JBQVk7VUFBWixZQUFZO0VBQ1oscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7RUFDYiw2QkFBcUI7S0FBckIsbUJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFZO0tBQVosZ0JBQVk7VUFBWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQWE7RUFBYixpQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzFkM2U1MztcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5jb250YWluZXIgLnJpZ2h0IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbiAgbWluLWhlaWdodDogMTU4cHg7XFxufVxcblxcbi5pbWctY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxNThweDtcXG4gIGhlaWdodDogMTU4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmltZy1jb250YWluZXIgaW1nIHtcXG4gIHdpZHRoOiAxNThweDtcXG4gIGhlaWdodDogMTU4cHg7XFxufVxcblxcbi5pbWctY29udGFpbmVyIC5ic3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwIDRweDtcXG59XFxuXFxuLnRpdGxlLWFuZC1uYW1lIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLnRpdGxlLWFuZC1uYW1lIC50aXRsZSB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLnRpdGxlLWFuZC1uYW1lIC5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udHlwZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNTVweDtcXG59XFxuXFxuLmJsZXNzaW5nIHtcXG4gIHdpZHRoOiA1MnB4O1xcbiAgaGVpZ2h0OiA1MnB4O1xcbn1cXG5cXG4uc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnN0YXRzID4gZGl2IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJoZXJvaGVhZGVyX2NvbnRhaW5lcl9fMVIxMC1cIixcblx0XCJyaWdodFwiOiBcImhlcm9oZWFkZXJfcmlnaHRfXzF4UVRpXCIsXG5cdFwiaW1nLWNvbnRhaW5lclwiOiBcImhlcm9oZWFkZXJfaW1nLWNvbnRhaW5lcl9fNENCWFNcIixcblx0XCJic3RcIjogXCJoZXJvaGVhZGVyX2JzdF9fMm5YUFhcIixcblx0XCJ0aXRsZS1hbmQtbmFtZVwiOiBcImhlcm9oZWFkZXJfdGl0bGUtYW5kLW5hbWVfXzFKcHpKXCIsXG5cdFwidGl0bGVcIjogXCJoZXJvaGVhZGVyX3RpdGxlX19tdGxJTlwiLFxuXHRcIm5hbWVcIjogXCJoZXJvaGVhZGVyX25hbWVfXzh0dS0wXCIsXG5cdFwidHlwZXNcIjogXCJoZXJvaGVhZGVyX3R5cGVzX18xTFROT1wiLFxuXHRcImJsZXNzaW5nXCI6IFwiaGVyb2hlYWRlcl9ibGVzc2luZ19fMnlFYXZcIixcblx0XCJzdGF0c1wiOiBcImhlcm9oZWFkZXJfc3RhdHNfXzIycnM1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnR5cGVjaGVja2JveHNfY29udGVudF9fSzk4UHEge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC1mbGV4OiBub25lO1xcbiAgICAgLW1vei1ib3gtZmxleDogMDtcXG4gICAgICAgICAgZmxleDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zODIpO1xcbn1cXG5cXG4udHlwZWNoZWNrYm94c19jaGVja2JveHNfXzNwM1ZJIHtcXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50eXBlY2hlY2tib3hzX2NoZWNrYm94c19fM3AzVklbaGlkZGVuXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLnR5cGVjaGVja2JveHNfZXhwYW5kLWJ1dHRvbl9fMXBKcnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvY29tcHMvdHlwZWNoZWNrYm94cy5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBVTtLQUFWLGdCQUFVO1VBQVYsVUFBVTtFQUNWLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLDhCQUF5QjtFQUF6Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRlbnQge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZmxleDogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zODIpO1xcbn1cXG5cXG4uY2hlY2tib3hzIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jaGVja2JveHNbaGlkZGVuXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuLmV4cGFuZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4Mik7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRlbnRcIjogXCJ0eXBlY2hlY2tib3hzX2NvbnRlbnRfX0s5OFBxXCIsXG5cdFwiY2hlY2tib3hzXCI6IFwidHlwZWNoZWNrYm94c19jaGVja2JveHNfXzNwM1ZJXCIsXG5cdFwiZXhwYW5kLWJ1dHRvblwiOiBcInR5cGVjaGVja2JveHNfZXhwYW5kLWJ1dHRvbl9fMXBKcnRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmFua2VyX2NvbnRhaW5lcl9fMi04bW0ge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5yYW5rZXJfYmctbGF5ZXJfXzJKbnpMIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZDNlNTNhYTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5yYW5rZXJfYmctbGF5ZXJfXzJKbnpMIC5yYW5rZXJfbGlzdF9fMWFqSnAge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcXG59XFxuXFxuLnJhbmtlcl9zdGF0cy1idXR0b25zX18yemtxdSB7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbW96LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc2ZDdjO1xcbn1cXG5cXG4ucmFua2VyX3N0YXRzLWJ1dHRvbnNfXzJ6a3F1ID4gLnJhbmtlcl90aXRsZV9fMVpVYzUge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5yYW5rZXJfc3RhdHMtYnV0dG9uc19fMnprcXUgPiBidXR0b24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3BhZ2VzL3Jhbmtlci9pbmRleC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFzQjtLQUF0Qix5QkFBc0I7S0FBdEIsMEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFhO0VBQWIsaUJBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQXNCO0tBQXRCLHlCQUFzQjtLQUF0QiwwQkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBYTtFQUFiLGlCQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVyIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uYmctbGF5ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFkM2U1M2FhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uYmctbGF5ZXIgLmxpc3Qge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xcbn1cXG5cXG4uc3RhdHMtYnV0dG9ucyB7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NmQ3YztcXG59XFxuXFxuLnN0YXRzLWJ1dHRvbnMgPiAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxufVxcblxcbi5zdGF0cy1idXR0b25zID4gYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicmFua2VyX2NvbnRhaW5lcl9fMi04bW1cIixcblx0XCJiZy1sYXllclwiOiBcInJhbmtlcl9iZy1sYXllcl9fMkpuekxcIixcblx0XCJsaXN0XCI6IFwicmFua2VyX2xpc3RfXzFhakpwXCIsXG5cdFwic3RhdHMtYnV0dG9uc1wiOiBcInJhbmtlcl9zdGF0cy1idXR0b25zX18yemtxdVwiLFxuXHRcInRpdGxlXCI6IFwicmFua2VyX3RpdGxlX18xWlVjNVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsImZ1bmN0aW9uIG4obil7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscj1BcnJheSh0PjE/dC0xOjApLGU9MTtlPHQ7ZSsrKXJbZS0xXT1hcmd1bWVudHNbZV07aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVil7dmFyIGk9WVtuXSxvPWk/XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pLmFwcGx5KG51bGwscik6aTpcInVua25vd24gZXJyb3IgbnI6IFwiK247dGhyb3cgRXJyb3IoXCJbSW1tZXJdIFwiK28pfXRocm93IEVycm9yKFwiW0ltbWVyXSBtaW5pZmllZCBlcnJvciBucjogXCIrbisoci5sZW5ndGg/XCIgXCIrci5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiJ1wiK24rXCInXCJ9KSkuam9pbihcIixcIik6XCJcIikrXCIuIEZpbmQgdGhlIGZ1bGwgZXJyb3IgYXQ6IGh0dHBzOi8vYml0Lmx5LzNjWEVLV2ZcIil9ZnVuY3Rpb24gdChuKXtyZXR1cm4hIW4mJiEhbltRXX1mdW5jdGlvbiByKG4pe3JldHVybiEhbiYmKGZ1bmN0aW9uKG4pe2lmKCFufHxcIm9iamVjdFwiIT10eXBlb2YgbilyZXR1cm4hMTt2YXIgdD1PYmplY3QuZ2V0UHJvdG90eXBlT2Yobik7cmV0dXJuIXR8fHQ9PT1PYmplY3QucHJvdG90eXBlfShuKXx8QXJyYXkuaXNBcnJheShuKXx8ISFuW0xdfHwhIW4uY29uc3RydWN0b3JbTF18fHMobil8fHYobikpfWZ1bmN0aW9uIGUocil7cmV0dXJuIHQocil8fG4oMjMscikscltRXS50fWZ1bmN0aW9uIGkobix0LHIpe3ZvaWQgMD09PXImJihyPSExKSwwPT09byhuKT8ocj9PYmplY3Qua2V5czpaKShuKS5mb3JFYWNoKChmdW5jdGlvbihlKXtyJiZcInN5bWJvbFwiPT10eXBlb2YgZXx8dChlLG5bZV0sbil9KSk6bi5mb3JFYWNoKChmdW5jdGlvbihyLGUpe3JldHVybiB0KGUscixuKX0pKX1mdW5jdGlvbiBvKG4pe3ZhciB0PW5bUV07cmV0dXJuIHQ/dC5pPjM/dC5pLTQ6dC5pOkFycmF5LmlzQXJyYXkobik/MTpzKG4pPzI6dihuKT8zOjB9ZnVuY3Rpb24gdShuLHQpe3JldHVybiAyPT09byhuKT9uLmhhcyh0KTpPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobix0KX1mdW5jdGlvbiBhKG4sdCl7cmV0dXJuIDI9PT1vKG4pP24uZ2V0KHQpOm5bdF19ZnVuY3Rpb24gZihuLHQscil7dmFyIGU9byhuKTsyPT09ZT9uLnNldCh0LHIpOjM9PT1lPyhuLmRlbGV0ZSh0KSxuLmFkZChyKSk6blt0XT1yfWZ1bmN0aW9uIGMobix0KXtyZXR1cm4gbj09PXQ/MCE9PW58fDEvbj09MS90Om4hPW4mJnQhPXR9ZnVuY3Rpb24gcyhuKXtyZXR1cm4gWCYmbiBpbnN0YW5jZW9mIE1hcH1mdW5jdGlvbiB2KG4pe3JldHVybiBxJiZuIGluc3RhbmNlb2YgU2V0fWZ1bmN0aW9uIHAobil7cmV0dXJuIG4ub3x8bi50fWZ1bmN0aW9uIGwobil7aWYoQXJyYXkuaXNBcnJheShuKSlyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobik7dmFyIHQ9bm4obik7ZGVsZXRlIHRbUV07Zm9yKHZhciByPVoodCksZT0wO2U8ci5sZW5ndGg7ZSsrKXt2YXIgaT1yW2VdLG89dFtpXTshMT09PW8ud3JpdGFibGUmJihvLndyaXRhYmxlPSEwLG8uY29uZmlndXJhYmxlPSEwKSwoby5nZXR8fG8uc2V0KSYmKHRbaV09e2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCxlbnVtZXJhYmxlOm8uZW51bWVyYWJsZSx2YWx1ZTpuW2ldfSl9cmV0dXJuIE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pLHQpfWZ1bmN0aW9uIGQobixlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9ITEpLHkobil8fHQobil8fCFyKG4pP246KG8obik+MSYmKG4uc2V0PW4uYWRkPW4uY2xlYXI9bi5kZWxldGU9aCksT2JqZWN0LmZyZWV6ZShuKSxlJiZpKG4sKGZ1bmN0aW9uKG4sdCl7cmV0dXJuIGQodCwhMCl9KSwhMCksbil9ZnVuY3Rpb24gaCgpe24oMil9ZnVuY3Rpb24geShuKXtyZXR1cm4gbnVsbD09bnx8XCJvYmplY3RcIiE9dHlwZW9mIG58fE9iamVjdC5pc0Zyb3plbihuKX1mdW5jdGlvbiBiKHQpe3ZhciByPXRuW3RdO3JldHVybiByfHxuKDE4LHQpLHJ9ZnVuY3Rpb24gbShuLHQpe3RuW25dfHwodG5bbl09dCl9ZnVuY3Rpb24gXygpe3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fFV8fG4oMCksVX1mdW5jdGlvbiBqKG4sdCl7dCYmKGIoXCJQYXRjaGVzXCIpLG4udT1bXSxuLnM9W10sbi52PXQpfWZ1bmN0aW9uIGcobil7TyhuKSxuLnAuZm9yRWFjaChTKSxuLnA9bnVsbH1mdW5jdGlvbiBPKG4pe249PT1VJiYoVT1uLmwpfWZ1bmN0aW9uIHcobil7cmV0dXJuIFU9e3A6W10sbDpVLGg6bixtOiEwLF86MH19ZnVuY3Rpb24gUyhuKXt2YXIgdD1uW1FdOzA9PT10Lml8fDE9PT10Lmk/dC5qKCk6dC5nPSEwfWZ1bmN0aW9uIFAodCxlKXtlLl89ZS5wLmxlbmd0aDt2YXIgaT1lLnBbMF0sbz12b2lkIDAhPT10JiZ0IT09aTtyZXR1cm4gZS5oLk98fGIoXCJFUzVcIikuUyhlLHQsbyksbz8oaVtRXS5QJiYoZyhlKSxuKDQpKSxyKHQpJiYodD1NKGUsdCksZS5sfHx4KGUsdCkpLGUudSYmYihcIlBhdGNoZXNcIikuTShpW1FdLHQsZS51LGUucykpOnQ9TShlLGksW10pLGcoZSksZS51JiZlLnYoZS51LGUucyksdCE9PUg/dDp2b2lkIDB9ZnVuY3Rpb24gTShuLHQscil7aWYoeSh0KSlyZXR1cm4gdDt2YXIgZT10W1FdO2lmKCFlKXJldHVybiBpKHQsKGZ1bmN0aW9uKGksbyl7cmV0dXJuIEEobixlLHQsaSxvLHIpfSksITApLHQ7aWYoZS5BIT09bilyZXR1cm4gdDtpZighZS5QKXJldHVybiB4KG4sZS50LCEwKSxlLnQ7aWYoIWUuSSl7ZS5JPSEwLGUuQS5fLS07dmFyIG89ND09PWUuaXx8NT09PWUuaT9lLm89bChlLmspOmUubztpKDM9PT1lLmk/bmV3IFNldChvKTpvLChmdW5jdGlvbih0LGkpe3JldHVybiBBKG4sZSxvLHQsaSxyKX0pKSx4KG4sbywhMSksciYmbi51JiZiKFwiUGF0Y2hlc1wiKS5SKGUscixuLnUsbi5zKX1yZXR1cm4gZS5vfWZ1bmN0aW9uIEEoZSxpLG8sYSxjLHMpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmM9PT1vJiZuKDUpLHQoYykpe3ZhciB2PU0oZSxjLHMmJmkmJjMhPT1pLmkmJiF1KGkuRCxhKT9zLmNvbmNhdChhKTp2b2lkIDApO2lmKGYobyxhLHYpLCF0KHYpKXJldHVybjtlLm09ITF9aWYocihjKSYmIXkoYykpe2lmKCFlLmguTiYmZS5fPDEpcmV0dXJuO00oZSxjKSxpJiZpLkEubHx8eChlLGMpfX1mdW5jdGlvbiB4KG4sdCxyKXt2b2lkIDA9PT1yJiYocj0hMSksbi5oLk4mJm4ubSYmZCh0LHIpfWZ1bmN0aW9uIHoobix0KXt2YXIgcj1uW1FdO3JldHVybihyP3Aocik6bilbdF19ZnVuY3Rpb24gSShuLHQpe2lmKHQgaW4gbilmb3IodmFyIHI9T2JqZWN0LmdldFByb3RvdHlwZU9mKG4pO3I7KXt2YXIgZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCk7aWYoZSlyZXR1cm4gZTtyPU9iamVjdC5nZXRQcm90b3R5cGVPZihyKX19ZnVuY3Rpb24gRShuKXtuLlB8fChuLlA9ITAsbi5sJiZFKG4ubCkpfWZ1bmN0aW9uIGsobil7bi5vfHwobi5vPWwobi50KSl9ZnVuY3Rpb24gUihuLHQscil7dmFyIGU9cyh0KT9iKFwiTWFwU2V0XCIpLlQodCxyKTp2KHQpP2IoXCJNYXBTZXRcIikuRih0LHIpOm4uTz9mdW5jdGlvbihuLHQpe3ZhciByPUFycmF5LmlzQXJyYXkobiksZT17aTpyPzE6MCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsRDp7fSxsOnQsdDpuLGs6bnVsbCxvOm51bGwsajpudWxsLEM6ITF9LGk9ZSxvPXJuO3ImJihpPVtlXSxvPWVuKTt2YXIgdT1Qcm94eS5yZXZvY2FibGUoaSxvKSxhPXUucmV2b2tlLGY9dS5wcm94eTtyZXR1cm4gZS5rPWYsZS5qPWEsZn0odCxyKTpiKFwiRVM1XCIpLkoodCxyKTtyZXR1cm4ocj9yLkE6XygpKS5wLnB1c2goZSksZX1mdW5jdGlvbiBEKGUpe3JldHVybiB0KGUpfHxuKDIyLGUpLGZ1bmN0aW9uIG4odCl7aWYoIXIodCkpcmV0dXJuIHQ7dmFyIGUsdT10W1FdLGM9byh0KTtpZih1KXtpZighdS5QJiYodS5pPDR8fCFiKFwiRVM1XCIpLksodSkpKXJldHVybiB1LnQ7dS5JPSEwLGU9Tih0LGMpLHUuST0hMX1lbHNlIGU9Tih0LGMpO3JldHVybiBpKGUsKGZ1bmN0aW9uKHQscil7dSYmYSh1LnQsdCk9PT1yfHxmKGUsdCxuKHIpKX0pKSwzPT09Yz9uZXcgU2V0KGUpOmV9KGUpfWZ1bmN0aW9uIE4obix0KXtzd2l0Y2godCl7Y2FzZSAyOnJldHVybiBuZXcgTWFwKG4pO2Nhc2UgMzpyZXR1cm4gQXJyYXkuZnJvbShuKX1yZXR1cm4gbChuKX1mdW5jdGlvbiBUKCl7ZnVuY3Rpb24gcihuLHQpe3ZhciByPXNbbl07cmV0dXJuIHI/ci5lbnVtZXJhYmxlPXQ6c1tuXT1yPXtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTp0LGdldDpmdW5jdGlvbigpe3ZhciB0PXRoaXNbUV07cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZih0KSxybi5nZXQodCxuKX0sc2V0OmZ1bmN0aW9uKHQpe3ZhciByPXRoaXNbUV07XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmZihyKSxybi5zZXQocixuLHQpfX0scn1mdW5jdGlvbiBlKG4pe2Zvcih2YXIgdD1uLmxlbmd0aC0xO3Q+PTA7dC0tKXt2YXIgcj1uW3RdW1FdO2lmKCFyLlApc3dpdGNoKHIuaSl7Y2FzZSA1OmEocikmJkUocik7YnJlYWs7Y2FzZSA0Om8ocikmJkUocil9fX1mdW5jdGlvbiBvKG4pe2Zvcih2YXIgdD1uLnQscj1uLmssZT1aKHIpLGk9ZS5sZW5ndGgtMTtpPj0wO2ktLSl7dmFyIG89ZVtpXTtpZihvIT09USl7dmFyIGE9dFtvXTtpZih2b2lkIDA9PT1hJiYhdSh0LG8pKXJldHVybiEwO3ZhciBmPXJbb10scz1mJiZmW1FdO2lmKHM/cy50IT09YTohYyhmLGEpKXJldHVybiEwfX12YXIgdj0hIXRbUV07cmV0dXJuIGUubGVuZ3RoIT09Wih0KS5sZW5ndGgrKHY/MDoxKX1mdW5jdGlvbiBhKG4pe3ZhciB0PW4uaztpZih0Lmxlbmd0aCE9PW4udC5sZW5ndGgpcmV0dXJuITA7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LHQubGVuZ3RoLTEpO3JldHVybiEoIXJ8fHIuZ2V0KX1mdW5jdGlvbiBmKHQpe3QuZyYmbigzLEpTT04uc3RyaW5naWZ5KHAodCkpKX12YXIgcz17fTttKFwiRVM1XCIse0o6ZnVuY3Rpb24obix0KXt2YXIgZT1BcnJheS5pc0FycmF5KG4pLGk9ZnVuY3Rpb24obix0KXtpZihuKXtmb3IodmFyIGU9QXJyYXkodC5sZW5ndGgpLGk9MDtpPHQubGVuZ3RoO2krKylPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIlwiK2kscihpLCEwKSk7cmV0dXJuIGV9dmFyIG89bm4odCk7ZGVsZXRlIG9bUV07Zm9yKHZhciB1PVoobyksYT0wO2E8dS5sZW5ndGg7YSsrKXt2YXIgZj11W2FdO29bZl09cihmLG58fCEhb1tmXS5lbnVtZXJhYmxlKX1yZXR1cm4gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodCksbyl9KGUsbiksbz17aTplPzU6NCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsRDp7fSxsOnQsdDpuLGs6aSxvOm51bGwsZzohMSxDOiExfTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGksUSx7dmFsdWU6byx3cml0YWJsZTohMH0pLGl9LFM6ZnVuY3Rpb24obixyLG8pe28/dChyKSYmcltRXS5BPT09biYmZShuLnApOihuLnUmJmZ1bmN0aW9uIG4odCl7aWYodCYmXCJvYmplY3RcIj09dHlwZW9mIHQpe3ZhciByPXRbUV07aWYocil7dmFyIGU9ci50LG89ci5rLGY9ci5ELGM9ci5pO2lmKDQ9PT1jKWkobywoZnVuY3Rpb24odCl7dCE9PVEmJih2b2lkIDAhPT1lW3RdfHx1KGUsdCk/Zlt0XXx8bihvW3RdKTooZlt0XT0hMCxFKHIpKSl9KSksaShlLChmdW5jdGlvbihuKXt2b2lkIDAhPT1vW25dfHx1KG8sbil8fChmW25dPSExLEUocikpfSkpO2Vsc2UgaWYoNT09PWMpe2lmKGEocikmJihFKHIpLGYubGVuZ3RoPSEwKSxvLmxlbmd0aDxlLmxlbmd0aClmb3IodmFyIHM9by5sZW5ndGg7czxlLmxlbmd0aDtzKyspZltzXT0hMTtlbHNlIGZvcih2YXIgdj1lLmxlbmd0aDt2PG8ubGVuZ3RoO3YrKylmW3ZdPSEwO2Zvcih2YXIgcD1NYXRoLm1pbihvLmxlbmd0aCxlLmxlbmd0aCksbD0wO2w8cDtsKyspdm9pZCAwPT09ZltsXSYmbihvW2xdKX19fX0obi5wWzBdKSxlKG4ucCkpfSxLOmZ1bmN0aW9uKG4pe3JldHVybiA0PT09bi5pP28obik6YShuKX19KX1mdW5jdGlvbiBGKCl7ZnVuY3Rpb24gZShuKXtpZighcihuKSlyZXR1cm4gbjtpZihBcnJheS5pc0FycmF5KG4pKXJldHVybiBuLm1hcChlKTtpZihzKG4pKXJldHVybiBuZXcgTWFwKEFycmF5LmZyb20obi5lbnRyaWVzKCkpLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuW25bMF0sZShuWzFdKV19KSkpO2lmKHYobikpcmV0dXJuIG5ldyBTZXQoQXJyYXkuZnJvbShuKS5tYXAoZSkpO3ZhciB0PU9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKG4pKTtmb3IodmFyIGkgaW4gbil0W2ldPWUobltpXSk7cmV0dXJuIHR9ZnVuY3Rpb24gZihuKXtyZXR1cm4gdChuKT9lKG4pOm59dmFyIGM9XCJhZGRcIjttKFwiUGF0Y2hlc1wiLHskOmZ1bmN0aW9uKHQscil7cmV0dXJuIHIuZm9yRWFjaCgoZnVuY3Rpb24ocil7Zm9yKHZhciBpPXIucGF0aCx1PXIub3AsZj10LHM9MDtzPGkubGVuZ3RoLTE7cysrKVwib2JqZWN0XCIhPXR5cGVvZihmPWEoZixpW3NdKSkmJm4oMTUsaS5qb2luKFwiL1wiKSk7dmFyIHY9byhmKSxwPWUoci52YWx1ZSksbD1pW2kubGVuZ3RoLTFdO3N3aXRjaCh1KXtjYXNlXCJyZXBsYWNlXCI6c3dpdGNoKHYpe2Nhc2UgMjpyZXR1cm4gZi5zZXQobCxwKTtjYXNlIDM6bigxNik7ZGVmYXVsdDpyZXR1cm4gZltsXT1wfWNhc2UgYzpzd2l0Y2godil7Y2FzZSAxOnJldHVybiBmLnNwbGljZShsLDAscCk7Y2FzZSAyOnJldHVybiBmLnNldChsLHApO2Nhc2UgMzpyZXR1cm4gZi5hZGQocCk7ZGVmYXVsdDpyZXR1cm4gZltsXT1wfWNhc2VcInJlbW92ZVwiOnN3aXRjaCh2KXtjYXNlIDE6cmV0dXJuIGYuc3BsaWNlKGwsMSk7Y2FzZSAyOnJldHVybiBmLmRlbGV0ZShsKTtjYXNlIDM6cmV0dXJuIGYuZGVsZXRlKHIudmFsdWUpO2RlZmF1bHQ6cmV0dXJuIGRlbGV0ZSBmW2xdfWRlZmF1bHQ6bigxNyx1KX19KSksdH0sUjpmdW5jdGlvbihuLHQscixlKXtzd2l0Y2gobi5pKXtjYXNlIDA6Y2FzZSA0OmNhc2UgMjpyZXR1cm4gZnVuY3Rpb24obix0LHIsZSl7dmFyIG89bi50LHM9bi5vO2kobi5ELChmdW5jdGlvbihuLGkpe3ZhciB2PWEobyxuKSxwPWEocyxuKSxsPWk/dShvLG4pP1wicmVwbGFjZVwiOmM6XCJyZW1vdmVcIjtpZih2IT09cHx8XCJyZXBsYWNlXCIhPT1sKXt2YXIgZD10LmNvbmNhdChuKTtyLnB1c2goXCJyZW1vdmVcIj09PWw/e29wOmwscGF0aDpkfTp7b3A6bCxwYXRoOmQsdmFsdWU6cH0pLGUucHVzaChsPT09Yz97b3A6XCJyZW1vdmVcIixwYXRoOmR9OlwicmVtb3ZlXCI9PT1sP3tvcDpjLHBhdGg6ZCx2YWx1ZTpmKHYpfTp7b3A6XCJyZXBsYWNlXCIscGF0aDpkLHZhbHVlOmYodil9KX19KSl9KG4sdCxyLGUpO2Nhc2UgNTpjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBpPW4udCxvPW4uRCx1PW4ubztpZih1Lmxlbmd0aDxpLmxlbmd0aCl7dmFyIGE9W3UsaV07aT1hWzBdLHU9YVsxXTt2YXIgcz1bZSxyXTtyPXNbMF0sZT1zWzFdfWZvcih2YXIgdj0wO3Y8aS5sZW5ndGg7disrKWlmKG9bdl0mJnVbdl0hPT1pW3ZdKXt2YXIgcD10LmNvbmNhdChbdl0pO3IucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpwLHZhbHVlOmYodVt2XSl9KSxlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6cCx2YWx1ZTpmKGlbdl0pfSl9Zm9yKHZhciBsPWkubGVuZ3RoO2w8dS5sZW5ndGg7bCsrKXt2YXIgZD10LmNvbmNhdChbbF0pO3IucHVzaCh7b3A6YyxwYXRoOmQsdmFsdWU6Zih1W2xdKX0pfWkubGVuZ3RoPHUubGVuZ3RoJiZlLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6dC5jb25jYXQoW1wibGVuZ3RoXCJdKSx2YWx1ZTppLmxlbmd0aH0pfShuLHQscixlKTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKG4sdCxyLGUpe3ZhciBpPW4udCxvPW4ubyx1PTA7aS5mb3JFYWNoKChmdW5jdGlvbihuKXtpZighby5oYXMobikpe3ZhciBpPXQuY29uY2F0KFt1XSk7ci5wdXNoKHtvcDpcInJlbW92ZVwiLHBhdGg6aSx2YWx1ZTpufSksZS51bnNoaWZ0KHtvcDpjLHBhdGg6aSx2YWx1ZTpufSl9dSsrfSkpLHU9MCxvLmZvckVhY2goKGZ1bmN0aW9uKG4pe2lmKCFpLmhhcyhuKSl7dmFyIG89dC5jb25jYXQoW3VdKTtyLnB1c2goe29wOmMscGF0aDpvLHZhbHVlOm59KSxlLnVuc2hpZnQoe29wOlwicmVtb3ZlXCIscGF0aDpvLHZhbHVlOm59KX11Kyt9KSl9KG4sdCxyLGUpfX0sTTpmdW5jdGlvbihuLHQscixlKXtyLnB1c2goe29wOlwicmVwbGFjZVwiLHBhdGg6W10sdmFsdWU6dH0pLGUucHVzaCh7b3A6XCJyZXBsYWNlXCIscGF0aDpbXSx2YWx1ZTpuLnR9KX19KX1mdW5jdGlvbiBDKCl7ZnVuY3Rpb24gdChuLHQpe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPW59YShuLHQpLG4ucHJvdG90eXBlPShyLnByb3RvdHlwZT10LnByb3RvdHlwZSxuZXcgcil9ZnVuY3Rpb24gZShuKXtuLm98fChuLkQ9bmV3IE1hcCxuLm89bmV3IE1hcChuLnQpKX1mdW5jdGlvbiBvKG4pe24ub3x8KG4ubz1uZXcgU2V0LG4udC5mb3JFYWNoKChmdW5jdGlvbih0KXtpZihyKHQpKXt2YXIgZT1SKG4uQS5oLHQsbik7bi5wLnNldCh0LGUpLG4uby5hZGQoZSl9ZWxzZSBuLm8uYWRkKHQpfSkpKX1mdW5jdGlvbiB1KHQpe3QuZyYmbigzLEpTT04uc3RyaW5naWZ5KHAodCkpKX12YXIgYT1mdW5jdGlvbihuLHQpe3JldHVybihhPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbihuLHQpe24uX19wcm90b19fPXR9fHxmdW5jdGlvbihuLHQpe2Zvcih2YXIgciBpbiB0KXQuaGFzT3duUHJvcGVydHkocikmJihuW3JdPXRbcl0pfSkobix0KX0sZj1mdW5jdGlvbigpe2Z1bmN0aW9uIG4obix0KXtyZXR1cm4gdGhpc1tRXT17aToyLGw6dCxBOnQ/dC5BOl8oKSxQOiExLEk6ITEsbzp2b2lkIDAsRDp2b2lkIDAsdDpuLGs6dGhpcyxDOiExLGc6ITF9LHRoaXN9dChuLE1hcCk7dmFyIG89bi5wcm90b3R5cGU7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwic2l6ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcCh0aGlzW1FdKS5zaXplfX0pLG8uaGFzPWZ1bmN0aW9uKG4pe3JldHVybiBwKHRoaXNbUV0pLmhhcyhuKX0sby5zZXQ9ZnVuY3Rpb24obix0KXt2YXIgcj10aGlzW1FdO3JldHVybiB1KHIpLHAocikuaGFzKG4pJiZwKHIpLmdldChuKT09PXR8fChlKHIpLEUociksci5ELnNldChuLCEwKSxyLm8uc2V0KG4sdCksci5ELnNldChuLCEwKSksdGhpc30sby5kZWxldGU9ZnVuY3Rpb24obil7aWYoIXRoaXMuaGFzKG4pKXJldHVybiExO3ZhciB0PXRoaXNbUV07cmV0dXJuIHUodCksZSh0KSxFKHQpLHQuRC5zZXQobiwhMSksdC5vLmRlbGV0ZShuKSwhMH0sby5jbGVhcj1mdW5jdGlvbigpe3ZhciBuPXRoaXNbUV07dShuKSxwKG4pLnNpemUmJihlKG4pLEUobiksbi5EPW5ldyBNYXAsaShuLnQsKGZ1bmN0aW9uKHQpe24uRC5zZXQodCwhMSl9KSksbi5vLmNsZWFyKCkpfSxvLmZvckVhY2g9ZnVuY3Rpb24obix0KXt2YXIgcj10aGlzO3AodGhpc1tRXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSxpKXtuLmNhbGwodCxyLmdldChpKSxpLHIpfSkpfSxvLmdldD1mdW5jdGlvbihuKXt2YXIgdD10aGlzW1FdO3UodCk7dmFyIGk9cCh0KS5nZXQobik7aWYodC5JfHwhcihpKSlyZXR1cm4gaTtpZihpIT09dC50LmdldChuKSlyZXR1cm4gaTt2YXIgbz1SKHQuQS5oLGksdCk7cmV0dXJuIGUodCksdC5vLnNldChuLG8pLG99LG8ua2V5cz1mdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLmtleXMoKX0sby52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgbix0PXRoaXMscj10aGlzLmtleXMoKTtyZXR1cm4obj17fSlbVl09ZnVuY3Rpb24oKXtyZXR1cm4gdC52YWx1ZXMoKX0sbi5uZXh0PWZ1bmN0aW9uKCl7dmFyIG49ci5uZXh0KCk7cmV0dXJuIG4uZG9uZT9uOntkb25lOiExLHZhbHVlOnQuZ2V0KG4udmFsdWUpfX0sbn0sby5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIG4sdD10aGlzLHI9dGhpcy5rZXlzKCk7cmV0dXJuKG49e30pW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHQuZW50cmllcygpfSxuLm5leHQ9ZnVuY3Rpb24oKXt2YXIgbj1yLm5leHQoKTtpZihuLmRvbmUpcmV0dXJuIG47dmFyIGU9dC5nZXQobi52YWx1ZSk7cmV0dXJue2RvbmU6ITEsdmFsdWU6W24udmFsdWUsZV19fSxufSxvW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfSxufSgpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBuKG4sdCl7cmV0dXJuIHRoaXNbUV09e2k6MyxsOnQsQTp0P3QuQTpfKCksUDohMSxJOiExLG86dm9pZCAwLHQ6bixrOnRoaXMscDpuZXcgTWFwLGc6ITEsQzohMX0sdGhpc310KG4sU2V0KTt2YXIgcj1uLnByb3RvdHlwZTtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBwKHRoaXNbUV0pLnNpemV9fSksci5oYXM9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSx0Lm8/ISF0Lm8uaGFzKG4pfHwhKCF0LnAuaGFzKG4pfHwhdC5vLmhhcyh0LnAuZ2V0KG4pKSk6dC50LmhhcyhuKX0sci5hZGQ9ZnVuY3Rpb24obil7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSx0aGlzLmhhcyhuKXx8KG8odCksRSh0KSx0Lm8uYWRkKG4pKSx0aGlzfSxyLmRlbGV0ZT1mdW5jdGlvbihuKXtpZighdGhpcy5oYXMobikpcmV0dXJuITE7dmFyIHQ9dGhpc1tRXTtyZXR1cm4gdSh0KSxvKHQpLEUodCksdC5vLmRlbGV0ZShuKXx8ISF0LnAuaGFzKG4pJiZ0Lm8uZGVsZXRlKHQucC5nZXQobikpfSxyLmNsZWFyPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTt1KG4pLHAobikuc2l6ZSYmKG8obiksRShuKSxuLm8uY2xlYXIoKSl9LHIudmFsdWVzPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxvKG4pLG4uby52YWx1ZXMoKX0sci5lbnRyaWVzPWZ1bmN0aW9uKCl7dmFyIG49dGhpc1tRXTtyZXR1cm4gdShuKSxvKG4pLG4uby5lbnRyaWVzKCl9LHIua2V5cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcygpfSxyW1ZdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzKCl9LHIuZm9yRWFjaD1mdW5jdGlvbihuLHQpe2Zvcih2YXIgcj10aGlzLnZhbHVlcygpLGU9ci5uZXh0KCk7IWUuZG9uZTspbi5jYWxsKHQsZS52YWx1ZSxlLnZhbHVlLHRoaXMpLGU9ci5uZXh0KCl9LG59KCk7bShcIk1hcFNldFwiLHtUOmZ1bmN0aW9uKG4sdCl7cmV0dXJuIG5ldyBmKG4sdCl9LEY6ZnVuY3Rpb24obix0KXtyZXR1cm4gbmV3IGMobix0KX19KX1mdW5jdGlvbiBKKCl7VCgpLEMoKSxGKCl9ZnVuY3Rpb24gSyhuKXtyZXR1cm4gbn1mdW5jdGlvbiAkKG4pe3JldHVybiBufXZhciBHLFUsVz1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sKFwieFwiKSxYPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBNYXAscT1cInVuZGVmaW5lZFwiIT10eXBlb2YgU2V0LEI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFByb3h5JiZ2b2lkIDAhPT1Qcm94eS5yZXZvY2FibGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBSZWZsZWN0LEg9Vz9TeW1ib2wuZm9yKFwiaW1tZXItbm90aGluZ1wiKTooKEc9e30pW1wiaW1tZXItbm90aGluZ1wiXT0hMCxHKSxMPVc/U3ltYm9sLmZvcihcImltbWVyLWRyYWZ0YWJsZVwiKTpcIl9fJGltbWVyX2RyYWZ0YWJsZVwiLFE9Vz9TeW1ib2wuZm9yKFwiaW1tZXItc3RhdGVcIik6XCJfXyRpbW1lcl9zdGF0ZVwiLFY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yfHxcIkBAaXRlcmF0b3JcIixZPXswOlwiSWxsZWdhbCBzdGF0ZVwiLDE6XCJJbW1lciBkcmFmdHMgY2Fubm90IGhhdmUgY29tcHV0ZWQgcHJvcGVydGllc1wiLDI6XCJUaGlzIG9iamVjdCBoYXMgYmVlbiBmcm96ZW4gYW5kIHNob3VsZCBub3QgYmUgbXV0YXRlZFwiLDM6ZnVuY3Rpb24obil7cmV0dXJuXCJDYW5ub3QgdXNlIGEgcHJveHkgdGhhdCBoYXMgYmVlbiByZXZva2VkLiBEaWQgeW91IHBhc3MgYW4gb2JqZWN0IGZyb20gaW5zaWRlIGFuIGltbWVyIGZ1bmN0aW9uIHRvIGFuIGFzeW5jIHByb2Nlc3M/IFwiK259LDQ6XCJBbiBpbW1lciBwcm9kdWNlciByZXR1cm5lZCBhIG5ldyB2YWx1ZSAqYW5kKiBtb2RpZmllZCBpdHMgZHJhZnQuIEVpdGhlciByZXR1cm4gYSBuZXcgdmFsdWUgKm9yKiBtb2RpZnkgdGhlIGRyYWZ0LlwiLDU6XCJJbW1lciBmb3JiaWRzIGNpcmN1bGFyIHJlZmVyZW5jZXNcIiw2OlwiVGhlIGZpcnN0IG9yIHNlY29uZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uXCIsNzpcIlRoZSB0aGlyZCBhcmd1bWVudCB0byBgcHJvZHVjZWAgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIHVuZGVmaW5lZFwiLDg6XCJGaXJzdCBhcmd1bWVudCB0byBgY3JlYXRlRHJhZnRgIG11c3QgYmUgYSBwbGFpbiBvYmplY3QsIGFuIGFycmF5LCBvciBhbiBpbW1lcmFibGUgb2JqZWN0XCIsOTpcIkZpcnN0IGFyZ3VtZW50IHRvIGBmaW5pc2hEcmFmdGAgbXVzdCBiZSBhIGRyYWZ0IHJldHVybmVkIGJ5IGBjcmVhdGVEcmFmdGBcIiwxMDpcIlRoZSBnaXZlbiBkcmFmdCBpcyBhbHJlYWR5IGZpbmFsaXplZFwiLDExOlwiT2JqZWN0LmRlZmluZVByb3BlcnR5KCkgY2Fubm90IGJlIHVzZWQgb24gYW4gSW1tZXIgZHJhZnRcIiwxMjpcIk9iamVjdC5zZXRQcm90b3R5cGVPZigpIGNhbm5vdCBiZSB1c2VkIG9uIGFuIEltbWVyIGRyYWZ0XCIsMTM6XCJJbW1lciBvbmx5IHN1cHBvcnRzIGRlbGV0aW5nIGFycmF5IGluZGljZXNcIiwxNDpcIkltbWVyIG9ubHkgc3VwcG9ydHMgc2V0dGluZyBhcnJheSBpbmRpY2VzIGFuZCB0aGUgJ2xlbmd0aCcgcHJvcGVydHlcIiwxNTpmdW5jdGlvbihuKXtyZXR1cm5cIkNhbm5vdCBhcHBseSBwYXRjaCwgcGF0aCBkb2Vzbid0IHJlc29sdmU6IFwiK259LDE2OidTZXRzIGNhbm5vdCBoYXZlIFwicmVwbGFjZVwiIHBhdGNoZXMuJywxNzpmdW5jdGlvbihuKXtyZXR1cm5cIlVuc3VwcG9ydGVkIHBhdGNoIG9wZXJhdGlvbjogXCIrbn0sMTg6ZnVuY3Rpb24obil7cmV0dXJuXCJUaGUgcGx1Z2luIGZvciAnXCIrbitcIicgaGFzIG5vdCBiZWVuIGxvYWRlZCBpbnRvIEltbWVyLiBUbyBlbmFibGUgdGhlIHBsdWdpbiwgaW1wb3J0IGFuZCBjYWxsIGBlbmFibGVcIituK1wiKClgIHdoZW4gaW5pdGlhbGl6aW5nIHlvdXIgYXBwbGljYXRpb24uXCJ9LDIwOlwiQ2Fubm90IHVzZSBwcm94aWVzIGlmIFByb3h5LCBQcm94eS5yZXZvY2FibGUgb3IgUmVmbGVjdCBhcmUgbm90IGF2YWlsYWJsZVwiLDIxOmZ1bmN0aW9uKG4pe3JldHVyblwicHJvZHVjZSBjYW4gb25seSBiZSBjYWxsZWQgb24gdGhpbmdzIHRoYXQgYXJlIGRyYWZ0YWJsZTogcGxhaW4gb2JqZWN0cywgYXJyYXlzLCBNYXAsIFNldCBvciBjbGFzc2VzIHRoYXQgYXJlIG1hcmtlZCB3aXRoICdbaW1tZXJhYmxlXTogdHJ1ZScuIEdvdCAnXCIrbitcIidcIn0sMjI6ZnVuY3Rpb24obil7cmV0dXJuXCInY3VycmVudCcgZXhwZWN0cyBhIGRyYWZ0LCBnb3Q6IFwiK259LDIzOmZ1bmN0aW9uKG4pe3JldHVyblwiJ29yaWdpbmFsJyBleHBlY3RzIGEgZHJhZnQsIGdvdDogXCIrbn19LFo9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3Qub3duS2V5cz9SZWZsZWN0Lm93bktleXM6dm9pZCAwIT09T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scz9mdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobikuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMobikpfTpPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxubj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc3x8ZnVuY3Rpb24obil7dmFyIHQ9e307cmV0dXJuIFoobikuZm9yRWFjaCgoZnVuY3Rpb24ocil7dFtyXT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG4scil9KSksdH0sdG49e30scm49e2dldDpmdW5jdGlvbihuLHQpe2lmKHQ9PT1RKXJldHVybiBuO3ZhciBlPXAobik7aWYoIXUoZSx0KSlyZXR1cm4gZnVuY3Rpb24obix0LHIpe3ZhciBlLGk9SSh0LHIpO3JldHVybiBpP1widmFsdWVcImluIGk/aS52YWx1ZTpudWxsPT09KGU9aS5nZXQpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLmNhbGwobi5rKTp2b2lkIDB9KG4sZSx0KTt2YXIgaT1lW3RdO3JldHVybiBuLkl8fCFyKGkpP2k6aT09PXoobi50LHQpPyhrKG4pLG4ub1t0XT1SKG4uQS5oLGksbikpOml9LGhhczpmdW5jdGlvbihuLHQpe3JldHVybiB0IGluIHAobil9LG93bktleXM6ZnVuY3Rpb24obil7cmV0dXJuIFJlZmxlY3Qub3duS2V5cyhwKG4pKX0sc2V0OmZ1bmN0aW9uKG4sdCxyKXt2YXIgZT1JKHAobiksdCk7aWYobnVsbD09ZT92b2lkIDA6ZS5zZXQpcmV0dXJuIGUuc2V0LmNhbGwobi5rLHIpLCEwO2lmKCFuLlApe3ZhciBpPXoocChuKSx0KSxvPW51bGw9PWk/dm9pZCAwOmlbUV07aWYobyYmby50PT09cilyZXR1cm4gbi5vW3RdPXIsbi5EW3RdPSExLCEwO2lmKGMocixpKSYmKHZvaWQgMCE9PXJ8fHUobi50LHQpKSlyZXR1cm4hMDtrKG4pLEUobil9cmV0dXJuIG4ub1t0XT1yLG4uRFt0XT0hMCwhMH0sZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24obix0KXtyZXR1cm4gdm9pZCAwIT09eihuLnQsdCl8fHQgaW4gbi50PyhuLkRbdF09ITEsayhuKSxFKG4pKTpkZWxldGUgbi5EW3RdLG4ubyYmZGVsZXRlIG4ub1t0XSwhMH0sZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKG4sdCl7dmFyIHI9cChuKSxlPVJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCk7cmV0dXJuIGU/e3dyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZToxIT09bi5pfHxcImxlbmd0aFwiIT09dCxlbnVtZXJhYmxlOmUuZW51bWVyYWJsZSx2YWx1ZTpyW3RdfTplfSxkZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbigpe24oMTEpfSxnZXRQcm90b3R5cGVPZjpmdW5jdGlvbihuKXtyZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG4udCl9LHNldFByb3RvdHlwZU9mOmZ1bmN0aW9uKCl7bigxMil9fSxlbj17fTtpKHJuLChmdW5jdGlvbihuLHQpe2VuW25dPWZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c1swXT1hcmd1bWVudHNbMF1bMF0sdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSkpLGVuLmRlbGV0ZVByb3BlcnR5PWZ1bmN0aW9uKHQscil7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmaXNOYU4ocGFyc2VJbnQocikpJiZuKDEzKSxybi5kZWxldGVQcm9wZXJ0eS5jYWxsKHRoaXMsdFswXSxyKX0sZW4uc2V0PWZ1bmN0aW9uKHQscixlKXtyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcImxlbmd0aFwiIT09ciYmaXNOYU4ocGFyc2VJbnQocikpJiZuKDE0KSxybi5zZXQuY2FsbCh0aGlzLHRbMF0scixlLHRbMF0pfTt2YXIgb249ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKG4pe3RoaXMuTz1CLHRoaXMuTj0hMCxcImJvb2xlYW5cIj09dHlwZW9mKG51bGw9PW4/dm9pZCAwOm4udXNlUHJveGllcykmJnRoaXMuc2V0VXNlUHJveGllcyhuLnVzZVByb3hpZXMpLFwiYm9vbGVhblwiPT10eXBlb2YobnVsbD09bj92b2lkIDA6bi5hdXRvRnJlZXplKSYmdGhpcy5zZXRBdXRvRnJlZXplKG4uYXV0b0ZyZWV6ZSksdGhpcy5wcm9kdWNlPXRoaXMucHJvZHVjZS5iaW5kKHRoaXMpLHRoaXMucHJvZHVjZVdpdGhQYXRjaGVzPXRoaXMucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQodGhpcyl9dmFyIGk9ZS5wcm90b3R5cGU7cmV0dXJuIGkucHJvZHVjZT1mdW5jdGlvbih0LGUsaSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgZSl7dmFyIG89ZTtlPXQ7dmFyIHU9dGhpcztyZXR1cm4gZnVuY3Rpb24obil7dmFyIHQ9dGhpczt2b2lkIDA9PT1uJiYobj1vKTtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxpPUFycmF5KHI+MT9yLTE6MCksYT0xO2E8cjthKyspaVthLTFdPWFyZ3VtZW50c1thXTtyZXR1cm4gdS5wcm9kdWNlKG4sKGZ1bmN0aW9uKG4pe3ZhciByO3JldHVybihyPWUpLmNhbGwuYXBwbHkocixbdCxuXS5jb25jYXQoaSkpfSkpfX12YXIgYTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlJiZuKDYpLHZvaWQgMCE9PWkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGkmJm4oNykscih0KSl7dmFyIGY9dyh0aGlzKSxjPVIodGhpcyx0LHZvaWQgMCkscz0hMDt0cnl7YT1lKGMpLHM9ITF9ZmluYWxseXtzP2coZik6TyhmKX1yZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSYmYSBpbnN0YW5jZW9mIFByb21pc2U/YS50aGVuKChmdW5jdGlvbihuKXtyZXR1cm4gaihmLGkpLFAobixmKX0pLChmdW5jdGlvbihuKXt0aHJvdyBnKGYpLG59KSk6KGooZixpKSxQKGEsZikpfWlmKCF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCl7aWYoKGE9ZSh0KSk9PT1IKXJldHVybjtyZXR1cm4gdm9pZCAwPT09YSYmKGE9dCksdGhpcy5OJiZkKGEsITApLGF9bigyMSx0KX0saS5wcm9kdWNlV2l0aFBhdGNoZXM9ZnVuY3Rpb24obix0KXt2YXIgcixlLGk9dGhpcztyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP2Z1bmN0aW9uKHQpe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGU9QXJyYXkocj4xP3ItMTowKSxvPTE7bzxyO28rKyllW28tMV09YXJndW1lbnRzW29dO3JldHVybiBpLnByb2R1Y2VXaXRoUGF0Y2hlcyh0LChmdW5jdGlvbih0KXtyZXR1cm4gbi5hcHBseSh2b2lkIDAsW3RdLmNvbmNhdChlKSl9KSl9Olt0aGlzLnByb2R1Y2Uobix0LChmdW5jdGlvbihuLHQpe3I9bixlPXR9KSkscixlXX0saS5jcmVhdGVEcmFmdD1mdW5jdGlvbihlKXtyKGUpfHxuKDgpLHQoZSkmJihlPUQoZSkpO3ZhciBpPXcodGhpcyksbz1SKHRoaXMsZSx2b2lkIDApO3JldHVybiBvW1FdLkM9ITAsTyhpKSxvfSxpLmZpbmlzaERyYWZ0PWZ1bmN0aW9uKHQscil7dmFyIGU9dCYmdFtRXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoZSYmZS5DfHxuKDkpLGUuSSYmbigxMCkpO3ZhciBpPWUuQTtyZXR1cm4gaihpLHIpLFAodm9pZCAwLGkpfSxpLnNldEF1dG9GcmVlemU9ZnVuY3Rpb24obil7dGhpcy5OPW59LGkuc2V0VXNlUHJveGllcz1mdW5jdGlvbih0KXt0JiYhQiYmbigyMCksdGhpcy5PPXR9LGkuYXBwbHlQYXRjaGVzPWZ1bmN0aW9uKG4scil7dmFyIGU7Zm9yKGU9ci5sZW5ndGgtMTtlPj0wO2UtLSl7dmFyIGk9cltlXTtpZigwPT09aS5wYXRoLmxlbmd0aCYmXCJyZXBsYWNlXCI9PT1pLm9wKXtuPWkudmFsdWU7YnJlYWt9fXZhciBvPWIoXCJQYXRjaGVzXCIpLiQ7cmV0dXJuIHQobik/byhuLHIpOnRoaXMucHJvZHVjZShuLChmdW5jdGlvbihuKXtyZXR1cm4gbyhuLHIuc2xpY2UoZSsxKSl9KSl9LGV9KCksdW49bmV3IG9uLGFuPXVuLnByb2R1Y2UsZm49dW4ucHJvZHVjZVdpdGhQYXRjaGVzLmJpbmQodW4pLGNuPXVuLnNldEF1dG9GcmVlemUuYmluZCh1biksc249dW4uc2V0VXNlUHJveGllcy5iaW5kKHVuKSx2bj11bi5hcHBseVBhdGNoZXMuYmluZCh1bikscG49dW4uY3JlYXRlRHJhZnQuYmluZCh1biksbG49dW4uZmluaXNoRHJhZnQuYmluZCh1bik7ZXhwb3J0IGRlZmF1bHQgYW47ZXhwb3J0e29uIGFzIEltbWVyLHZuIGFzIGFwcGx5UGF0Y2hlcyxLIGFzIGNhc3REcmFmdCwkIGFzIGNhc3RJbW11dGFibGUscG4gYXMgY3JlYXRlRHJhZnQsRCBhcyBjdXJyZW50LEogYXMgZW5hYmxlQWxsUGx1Z2lucyxUIGFzIGVuYWJsZUVTNSxDIGFzIGVuYWJsZU1hcFNldCxGIGFzIGVuYWJsZVBhdGNoZXMsbG4gYXMgZmluaXNoRHJhZnQsZCBhcyBmcmVlemUsTCBhcyBpbW1lcmFibGUsdCBhcyBpc0RyYWZ0LHIgYXMgaXNEcmFmdGFibGUsSCBhcyBub3RoaW5nLGUgYXMgb3JpZ2luYWwsYW4gYXMgcHJvZHVjZSxmbiBhcyBwcm9kdWNlV2l0aFBhdGNoZXMsY24gYXMgc2V0QXV0b0ZyZWV6ZSxzbiBhcyBzZXRVc2VQcm94aWVzfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltbWVyLmVzbS5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L25leHQtc2VydmVyL2xpYi9ydW50aW1lLWNvbmZpZycpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgYXNzaWduPU9iamVjdC5hc3NpZ24uYmluZChPYmplY3QpO21vZHVsZS5leHBvcnRzPWFzc2lnbjttb2R1bGUuZXhwb3J0cy5kZWZhdWx0PW1vZHVsZS5leHBvcnRzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JqZWN0LWFzc2lnbi5qcy5tYXAiLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL3JhbmtlclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkY6XFxcXHJlcG9zXFxcXHJlYWN0LWZlaC1zaXRlXFxcXHBhZ2VzXFxcXHJhbmtlclxcXFxpbmRleC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IEFtcFN0YXRlQ29udGV4dDogUmVhY3QuQ29udGV4dDxhbnk+ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgQW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gJ0FtcFN0YXRlQ29udGV4dCdcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luQW1wTW9kZSh7XG4gIGFtcEZpcnN0ID0gZmFsc2UsXG4gIGh5YnJpZCA9IGZhbHNlLFxuICBoYXNRdWVyeSA9IGZhbHNlLFxufSA9IHt9KTogYm9vbGVhbiB7XG4gIHJldHVybiBhbXBGaXJzdCB8fCAoaHlicmlkICYmIGhhc1F1ZXJ5KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQW1wKCk6IGJvb2xlYW4ge1xuICAvLyBEb24ndCBhc3NpZ24gdGhlIGNvbnRleHQgdmFsdWUgdG8gYSB2YXJpYWJsZSB0byBzYXZlIGJ5dGVzXG4gIHJldHVybiBpc0luQW1wTW9kZShSZWFjdC51c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dCkpXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBIZWFkTWFuYWdlckNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8e1xuICB1cGRhdGVIZWFkPzogKHN0YXRlOiBhbnkpID0+IHZvaWRcbiAgbW91bnRlZEluc3RhbmNlcz86IGFueVxuICB1cGRhdGVTY3JpcHRzPzogKHN0YXRlOiBhbnkpID0+IHZvaWRcbiAgc2NyaXB0cz86IGFueVxufT4gPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBIZWFkTWFuYWdlckNvbnRleHQuZGlzcGxheU5hbWUgPSAnSGVhZE1hbmFnZXJDb250ZXh0J1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi9zaWRlLWVmZmVjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IHsgaXNJbkFtcE1vZGUgfSBmcm9tICcuL2FtcCdcblxudHlwZSBXaXRoSW5BbXBNb2RlID0ge1xuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSk6IEpTWC5FbGVtZW50W10ge1xuICBjb25zdCBoZWFkID0gWzxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XVxuICBpZiAoIWluQW1wTW9kZSkge1xuICAgIGhlYWQucHVzaCg8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz4pXG4gIH1cbiAgcmV0dXJuIGhlYWRcbn1cblxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChcbiAgbGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBjaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+IHtcbiAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgLy8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuICBpZiAoY2hpbGQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoXG4gICAgICAgIChcbiAgICAgICAgICBmcmFnbWVudExpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICAgICAgICBmcmFnbWVudENoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4gICAgICAgICk6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3RcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZClcbiAgICAgICAgfSxcbiAgICAgICAgW11cbiAgICAgIClcbiAgICApXG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKVxufVxuXG5jb25zdCBNRVRBVFlQRVMgPSBbJ25hbWUnLCAnaHR0cEVxdWl2JywgJ2NoYXJTZXQnLCAnaXRlbVByb3AnXVxuXG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9cbmZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKVxuICBjb25zdCB0YWdzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFUeXBlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhQ2F0ZWdvcmllczogeyBbbWV0YXR5cGU6IHN0cmluZ106IFNldDxzdHJpbmc+IH0gPSB7fVxuXG4gIHJldHVybiAoaDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICBsZXQgaXNVbmlxdWUgPSB0cnVlXG5cbiAgICBpZiAoaC5rZXkgJiYgdHlwZW9mIGgua2V5ICE9PSAnbnVtYmVyJyAmJiBoLmtleS5pbmRleE9mKCckJykgPiAwKSB7XG4gICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykgKyAxKVxuICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5hZGQoa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICBzd2l0Y2ggKGgudHlwZSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZ3MuYWRkKGgudHlwZSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWV0YSc6XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtZXRhdHlwZSA9IE1FVEFUWVBFU1tpXVxuICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlXG5cbiAgICAgICAgICBpZiAobWV0YXR5cGUgPT09ICdjaGFyU2V0Jykge1xuICAgICAgICAgICAgaWYgKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV1cbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KVxuICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVW5pcXVlXG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL1xuZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhcbiAgaGVhZEVsZW1lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIHByb3BzOiBXaXRoSW5BbXBNb2RlXG4pIHtcbiAgcmV0dXJuIGhlYWRFbGVtZW50c1xuICAgIC5yZWR1Y2UoXG4gICAgICAobGlzdDogUmVhY3QuUmVhY3RDaGlsZFtdLCBoZWFkRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoXG4gICAgICAgICAgaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbilcbiAgICAgIH0sXG4gICAgICBbXVxuICAgIClcbiAgICAucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKVxuICAgIC5yZXZlcnNlKClcbiAgICAuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpXG4gICAgLmZpbHRlcih1bmlxdWUoKSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLm1hcCgoYzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaVxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiZcbiAgICAgICAgIXByb3BzLmluQW1wTW9kZVxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXSAmJlxuICAgICAgICAgIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgIFsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnXS5zb21lKCh1cmwpID0+XG4gICAgICAgICAgICBjLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgLi4uKGMucHJvcHMgfHwge30pIH1cbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1ocmVmJ10gPSBuZXdQcm9wc1snaHJlZiddXG4gICAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgeyBrZXkgfSlcbiAgICB9KVxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovXG5mdW5jdGlvbiBIZWFkKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgYW1wU3RhdGUgPSB1c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dClcbiAgY29uc3QgaGVhZE1hbmFnZXIgPSB1c2VDb250ZXh0KEhlYWRNYW5hZ2VyQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8RWZmZWN0XG4gICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZT17cmVkdWNlQ29tcG9uZW50c31cbiAgICAgIGhlYWRNYW5hZ2VyPXtoZWFkTWFuYWdlcn1cbiAgICAgIGluQW1wTW9kZT17aXNJbkFtcE1vZGUoYW1wU3RhdGUpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0VmZmVjdD5cbiAgKVxufVxuXG4vLyBUT0RPOiBSZW1vdmUgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxuSGVhZC5yZXdpbmQgPSAoKSA9PiB7fVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkXG4iLCJsZXQgcnVudGltZUNvbmZpZzogYW55XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIHJ1bnRpbWVDb25maWdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldENvbmZpZyhjb25maWdWYWx1ZTogYW55KTogdm9pZCB7XG4gIHJ1bnRpbWVDb25maWcgPSBjb25maWdWYWx1ZVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbnR5cGUgU3RhdGUgPSBKU1guRWxlbWVudFtdIHwgdW5kZWZpbmVkXG5cbnR5cGUgU2lkZUVmZmVjdFByb3BzID0ge1xuICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZTogPFQ+KFxuICAgIGNvbXBvbmVudHM6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICBwcm9wczogVFxuICApID0+IFN0YXRlXG4gIGhhbmRsZVN0YXRlQ2hhbmdlPzogKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZFxuICBoZWFkTWFuYWdlcjogYW55XG4gIGluQW1wTW9kZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQ8U2lkZUVmZmVjdFByb3BzPiB7XG4gIHByaXZhdGUgX2hhc0hlYWRNYW5hZ2VyOiBib29sZWFuXG5cbiAgZW1pdENoYW5nZSA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIudXBkYXRlSGVhZChcbiAgICAgICAgdGhpcy5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShcbiAgICAgICAgICBbLi4udGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXSxcbiAgICAgICAgICB0aGlzLnByb3BzXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5faGFzSGVhZE1hbmFnZXIgPVxuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlciAmJiB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNcblxuICAgIGlmIChpc1NlcnZlciAmJiB0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKVxuICAgICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuZGVsZXRlKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4xJztcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG5leHBvcnRzLlN0cmljdE1vZGUgPSAweGVhY2M7XG5leHBvcnRzLlByb2ZpbGVyID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG5leHBvcnRzLlN1c3BlbnNlID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgZXhwb3J0cy5TdHJpY3RNb2RlID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBleHBvcnRzLlByb2ZpbGVyID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgZXhwb3J0cy5TdXNwZW5zZSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogMFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBvd25lci5cbiAqXG4gKiBUaGUgY3VycmVudCBvd25lciBpcyB0aGUgY29tcG9uZW50IHdobyBzaG91bGQgb3duIGFueSBjb21wb25lbnRzIHRoYXQgYXJlXG4gKiBjdXJyZW50bHkgYmVpbmcgY29uc3RydWN0ZWQuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBAdHlwZSB7UmVhY3RDb21wb25lbnR9XG4gICAqL1xuICBjdXJyZW50OiBudWxsXG59O1xuXG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IHt9O1xudmFyIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBudWxsO1xuZnVuY3Rpb24gc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKSB7XG4gIHtcbiAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gIH1cbn1cblxue1xuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIHtcbiAgICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgICB9XG4gIH07IC8vIFN0YWNrIGltcGxlbWVudGF0aW9uIGluamVjdGVkIGJ5IHRoZSBjdXJyZW50IHJlbmRlcmVyLlxuXG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gQWRkIGFuIGV4dHJhIHRvcCBmcmFtZSB3aGlsZSBhbiBlbGVtZW50IGlzIGJlaW5nIHZhbGlkYXRlZFxuXG4gICAgaWYgKGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUpIHtcbiAgICAgIHN0YWNrICs9IGN1cnJlbnRFeHRyYVN0YWNrRnJhbWU7XG4gICAgfSAvLyBEZWxlZ2F0ZSB0byB0aGUgaW5qZWN0ZWQgcmVuZGVyZXItc3BlY2lmaWMgaW1wbGVtZW50YXRpb25cblxuXG4gICAgdmFyIGltcGwgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjaztcblxuICAgIGlmIChpbXBsKSB7XG4gICAgICBzdGFjayArPSBpbXBsKCkgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YWNrO1xuICB9O1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYWN0KCkgdG8gdHJhY2sgd2hldGhlciB5b3UncmUgaW5zaWRlIGFuIGFjdCgpIHNjb3BlLlxuICovXG52YXIgSXNTb21lUmVuZGVyZXJBY3RpbmcgPSB7XG4gIGN1cnJlbnQ6IGZhbHNlXG59O1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyLFxuICBJc1NvbWVSZW5kZXJlckFjdGluZzogSXNTb21lUmVuZGVyZXJBY3RpbmcsXG4gIC8vIFVzZWQgYnkgcmVuZGVyZXJzIHRvIGF2b2lkIGJ1bmRsaW5nIG9iamVjdC1hc3NpZ24gdHdpY2UgaW4gVU1EIGJ1bmRsZXM6XG4gIGFzc2lnbjogX2Fzc2lnblxufTtcblxue1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbn1cblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuXG5cbmZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0OyAvLyBXZSBpbml0aWFsaXplIHRoZSBkZWZhdWx0IHVwZGF0ZXIgYnV0IHRoZSByZWFsIG9uZSBnZXRzIGluamVjdGVkIGJ5IHRoZVxuICAvLyByZW5kZXJlci5cblxuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG5Db21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQgPSB7fTtcbi8qKlxuICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyB0byBtdXRhdGVcbiAqIHN0YXRlLiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gKlxuICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgY2FsbHMgdG8gYHNldFN0YXRlYCB3aWxsIHJ1biBzeW5jaHJvbm91c2x5LFxuICogYXMgdGhleSBtYXkgZXZlbnR1YWxseSBiZSBiYXRjaGVkIHRvZ2V0aGVyLiAgWW91IGNhbiBwcm92aWRlIGFuIG9wdGlvbmFsXG4gKiBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgY2FsbCB0byBzZXRTdGF0ZSBpcyBhY3R1YWxseVxuICogY29tcGxldGVkLlxuICpcbiAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwcm92aWRlZCB0byBzZXRTdGF0ZSwgaXQgd2lsbCBiZSBjYWxsZWQgYXQgc29tZSBwb2ludCBpblxuICogdGhlIGZ1dHVyZSAobm90IHN5bmNocm9ub3VzbHkpLiBJdCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSB1cCB0byBkYXRlXG4gKiBjb21wb25lbnQgYXJndW1lbnRzIChzdGF0ZSwgcHJvcHMsIGNvbnRleHQpLiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGRpZmZlcmVudFxuICogZnJvbSB0aGlzLiogYmVjYXVzZSB5b3VyIGZ1bmN0aW9uIG1heSBiZSBjYWxsZWQgYWZ0ZXIgcmVjZWl2ZVByb3BzIGJ1dCBiZWZvcmVcbiAqIHNob3VsZENvbXBvbmVudFVwZGF0ZSwgYW5kIHRoaXMgbmV3IHN0YXRlLCBwcm9wcywgYW5kIGNvbnRleHQgd2lsbCBub3QgeWV0IGJlXG4gKiBhc3NpZ25lZCB0byB0aGlzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIG9yIGZ1bmN0aW9uIHRvXG4gKiAgICAgICAgcHJvZHVjZSBuZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggY3VycmVudCBzdGF0ZS5cbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuc2V0U3RhdGUgPSBmdW5jdGlvbiAocGFydGlhbFN0YXRlLCBjYWxsYmFjaykge1xuICBpZiAoISh0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgcGFydGlhbFN0YXRlID09PSAnZnVuY3Rpb24nIHx8IHBhcnRpYWxTdGF0ZSA9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcInNldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbl9hc3NpZ24ocHVyZUNvbXBvbmVudFByb3RvdHlwZSwgQ29tcG9uZW50LnByb3RvdHlwZSk7XG5cbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIGV4cG9ydHMuUHJvZmlsZXI6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdHJpY3RNb2RlOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgZXhwb3J0cy5TdXNwZW5zZTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZykge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIGNvbmZpZy5fX3NlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IGNvbmZpZy5fX3NlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIgKyBlbGVtZW50ICsgXCIuXCIgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBfYXNzaWduKHt9LCBlbGVtZW50LnByb3BzKTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgb3ZlcnJpZGUgZXhpc3RpbmcgcHJvcHNcblxuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcblxuICAgIGlmIChlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgZGVmYXVsdFByb3BzID0gZWxlbWVudC50eXBlLmRlZmF1bHRQcm9wcztcbiAgICB9XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBpZiAoY29uZmlnW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRQcm9wcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KGVsZW1lbnQudHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbnZhciBTRVBBUkFUT1IgPSAnLic7XG52YXIgU1VCU0VQQVJBVE9SID0gJzonO1xuLyoqXG4gKiBFc2NhcGUgYW5kIHdyYXAga2V5IHNvIGl0IGlzIHNhZmUgdG8gdXNlIGFzIGEgcmVhY3RpZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgdG8gYmUgZXNjYXBlZC5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGVzY2FwZWQga2V5LlxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShrZXkpIHtcbiAgdmFyIGVzY2FwZVJlZ2V4ID0gL1s9Ol0vZztcbiAgdmFyIGVzY2FwZXJMb29rdXAgPSB7XG4gICAgJz0nOiAnPTAnLFxuICAgICc6JzogJz0yJ1xuICB9O1xuICB2YXIgZXNjYXBlZFN0cmluZyA9IGtleS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGVsZW1lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gZWxlbWVudCBBIGVsZW1lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRLZXkoZWxlbWVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCAhPT0gbnVsbCAmJiBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZSgnJyArIGVsZW1lbnQua2V5KTtcbiAgfSAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuXG5cbiAgcmV0dXJuIGluZGV4LnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbWFwSW50b0FycmF5KGNoaWxkcmVuLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmFtZVNvRmFyLCBjYWxsYmFjaykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICB2YXIgX2NoaWxkID0gY2hpbGRyZW47XG4gICAgdmFyIG1hcHBlZENoaWxkID0gY2FsbGJhY2soX2NoaWxkKTsgLy8gSWYgaXQncyB0aGUgb25seSBjaGlsZCwgdHJlYXQgdGhlIG5hbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gYW4gYXJyYXlcbiAgICAvLyBzbyB0aGF0IGl0J3MgY29uc2lzdGVudCBpZiB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIGdyb3dzOlxuXG4gICAgdmFyIGNoaWxkS2V5ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldEVsZW1lbnRLZXkoX2NoaWxkLCAwKSA6IG5hbWVTb0ZhcjtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KG1hcHBlZENoaWxkKSkge1xuICAgICAgdmFyIGVzY2FwZWRDaGlsZEtleSA9ICcnO1xuXG4gICAgICBpZiAoY2hpbGRLZXkgIT0gbnVsbCkge1xuICAgICAgICBlc2NhcGVkQ2hpbGRLZXkgPSBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoY2hpbGRLZXkpICsgJy8nO1xuICAgICAgfVxuXG4gICAgICBtYXBJbnRvQXJyYXkobWFwcGVkQ2hpbGQsIGFycmF5LCBlc2NhcGVkQ2hpbGRLZXksICcnLCBmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KG1hcHBlZENoaWxkKSkge1xuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgZXNjYXBlVXNlclByb3ZpZGVkS2V5KCcnICsgbWFwcGVkQ2hpbGQua2V5KSArICcvJyA6ICcnKSArIGNoaWxkS2V5KTtcbiAgICAgIH1cblxuICAgICAgYXJyYXkucHVzaChtYXBwZWRDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICB2YXIgY2hpbGQ7XG4gIHZhciBuZXh0TmFtZTtcbiAgdmFyIHN1YnRyZWVDb3VudCA9IDA7IC8vIENvdW50IG9mIGNoaWxkcmVuIGZvdW5kIGluIHRoZSBjdXJyZW50IHN1YnRyZWUuXG5cbiAgdmFyIG5leHROYW1lUHJlZml4ID0gbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiA6IG5hbWVTb0ZhciArIFNVQlNFUEFSQVRPUjtcblxuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciBpdGVyYWJsZUNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAgLy8gV2FybiBhYm91dCB1c2luZyBNYXBzIGFzIGNoaWxkcmVuXG4gICAgICAgIGlmIChpdGVyYXRvckZuID09PSBpdGVyYWJsZUNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgbm90IHN1cHBvcnRlZC4gJyArICdVc2UgYW4gYXJyYXkgb2Yga2V5ZWQgUmVhY3RFbGVtZW50cyBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpZFdhcm5BYm91dE1hcHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChpdGVyYWJsZUNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwO1xuICAgICAgdmFyIGlpID0gMDtcblxuICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICBjaGlsZCA9IHN0ZXAudmFsdWU7XG4gICAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IG1hcEludG9BcnJheShjaGlsZCwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5leHROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gJycgKyBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiT2JqZWN0cyBhcmUgbm90IHZhbGlkIGFzIGEgUmVhY3QgY2hpbGQgKGZvdW5kOiBcIiArIChjaGlsZHJlblN0cmluZyA9PT0gJ1tvYmplY3QgT2JqZWN0XScgPyAnb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5qb2luKCcsICcpICsgJ30nIDogY2hpbGRyZW5TdHJpbmcpICsgXCIpLiBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5IGluc3RlYWQuXCIgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSBudWxsICYmIHR5cGVvZiBjYWxjdWxhdGVDaGFuZ2VkQml0cyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBlcnJvcignY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsXG4gIH07XG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlciA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSBmYWxzZTtcblxuICB7XG4gICAgLy8gQSBzZXBhcmF0ZSBvYmplY3QsIGJ1dCBwcm94aWVzIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRleHQgb2JqZWN0IGZvclxuICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LiBJdCBoYXMgYSBkaWZmZXJlbnQgJCR0eXBlb2YsIHNvIHdlIGNhbiBwcm9wZXJseVxuICAgIC8vIHdhcm4gZm9yIHRoZSBpbmNvcnJlY3QgdXNhZ2Ugb2YgQ29udGV4dCBhcyBhIENvbnN1bWVyLlxuICAgIHZhciBDb25zdW1lciA9IHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgICBfY29udGV4dDogY29udGV4dCxcbiAgICAgIF9jYWxjdWxhdGVDaGFuZ2VkQml0czogY29udGV4dC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHNcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG4gICAgdmFyIHBlbmRpbmcgPSBwYXlsb2FkO1xuICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nKSB7XG4gICAgICAgIHZhciBkZWZhdWx0RXhwb3J0ID0gbW9kdWxlT2JqZWN0LmRlZmF1bHQ7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChkZWZhdWx0RXhwb3J0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXBvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuXG5cbiAgICAgICAgdmFyIHJlc29sdmVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVzb2x2ZWQuX3N0YXR1cyA9IFJlc29sdmVkO1xuICAgICAgICByZXNvbHZlZC5fcmVzdWx0ID0gZGVmYXVsdEV4cG9ydDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcpIHtcbiAgICAgICAgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAgICAgdmFyIHJlamVjdGVkID0gcGF5bG9hZDtcbiAgICAgICAgcmVqZWN0ZWQuX3N0YXR1cyA9IFJlamVjdGVkO1xuICAgICAgICByZWplY3RlZC5fcmVzdWx0ID0gZXJyb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHJldHVybiBwYXlsb2FkLl9yZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgcGF5bG9hZC5fcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgcGF5bG9hZCA9IHtcbiAgICAvLyBXZSB1c2UgdGhlc2UgZmllbGRzIHRvIHN0b3JlIHRoZSByZXN1bHQuXG4gICAgX3N0YXR1czogLTEsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTtcblxuICAgICAgICBpZiAocmVuZGVyLmRpc3BsYXlOYW1lID09IG51bGwpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IGV4cG9ydHMuUHJvZmlsZXIgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gZXhwb3J0cy5TdHJpY3RNb2RlIHx8IHR5cGUgPT09IGV4cG9ydHMuU3VzcGVuc2UgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHR5cGUuZGlzcGxheU5hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICBpZiAoIShkaXNwYXRjaGVyICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyA6ICcnKTtcbiAgICB9IC8vIFRPRE86IGFkZCBhIG1vcmUgZ2VuZXJpYyB3YXJuaW5nIGZvciBpbnZhbGlkIHZhbHVlcy5cblxuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQsIHVuc3RhYmxlX29ic2VydmVkQml0cyk7XG59XG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xufVxuZnVuY3Rpb24gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQXJnLCBpbml0KTtcbn1cbmZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWYoaW5pdGlhbFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTWVtbyhjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VNZW1vKGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbikge1xuICB7XG4gICAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICAgIHJldHVybiBkaXNwYXRjaGVyLnVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKTtcbiAgfVxufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuU3VzcGVuc2U6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxue1xuXG4gIHRyeSB7XG4gICAgdmFyIGZyb3plbk9iamVjdCA9IE9iamVjdC5mcmVlemUoe30pO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuXG4gICAgbmV3IE1hcChbW2Zyb3plbk9iamVjdCwgbnVsbF1dKTtcbiAgICBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldyAqL1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRWZmZWN0ID0gdXNlRWZmZWN0O1xuZXhwb3J0cy51c2VJbXBlcmF0aXZlSGFuZGxlID0gdXNlSW1wZXJhdGl2ZUhhbmRsZTtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBoYXNoKHN0cikge1xuICB2YXIgaGFzaCA9IDUzODEsXG4gICAgICBpICAgID0gc3RyLmxlbmd0aDtcblxuICB3aGlsZShpKSB7XG4gICAgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyLmNoYXJDb2RlQXQoLS1pKTtcbiAgfVxuXG4gIC8qIEphdmFTY3JpcHQgZG9lcyBiaXR3aXNlIG9wZXJhdGlvbnMgKGxpa2UgWE9SLCBhYm92ZSkgb24gMzItYml0IHNpZ25lZFxuICAgKiBpbnRlZ2Vycy4gU2luY2Ugd2Ugd2FudCB0aGUgcmVzdWx0cyB0byBiZSBhbHdheXMgcG9zaXRpdmUsIGNvbnZlcnQgdGhlXG4gICAqIHNpZ25lZCBpbnQgdG8gYW4gdW5zaWduZWQgYnkgZG9pbmcgYW4gdW5zaWduZWQgYml0c2hpZnQuICovXG4gIHJldHVybiBoYXNoID4+PiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qXG5CYXNlZCBvbiBHbGFtb3IncyBzaGVldFxuaHR0cHM6Ly9naXRodWIuY29tL3RocmVlcG9pbnRvbmUvZ2xhbW9yL2Jsb2IvNjY3YjQ4MGQzMWIzNzIxYTkwNTAyMWIyNmUxMjkwY2U5MmNhMjg3OS9zcmMvc2hlZXQuanNcbiovXG52YXIgaXNQcm9kID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5cbnZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuXG52YXIgU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICAgIG5hbWUgPSBfcmVmJG5hbWUgPT09IHZvaWQgMCA/ICdzdHlsZXNoZWV0JyA6IF9yZWYkbmFtZSxcbiAgICAgICAgX3JlZiRvcHRpbWl6ZUZvclNwZWVkID0gX3JlZi5vcHRpbWl6ZUZvclNwZWVkLFxuICAgICAgICBvcHRpbWl6ZUZvclNwZWVkID0gX3JlZiRvcHRpbWl6ZUZvclNwZWVkID09PSB2b2lkIDAgPyBpc1Byb2QgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgaW52YXJpYW50KGlzU3RyaW5nKG5hbWUpLCAnYG5hbWVgIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyID0gXCIjXCIgKyBuYW1lICsgXCItZGVsZXRlZC1ydWxlX19fX3t9XCI7XG4gICAgaW52YXJpYW50KHR5cGVvZiBvcHRpbWl6ZUZvclNwZWVkID09PSAnYm9vbGVhbicsICdgb3B0aW1pemVGb3JTcGVlZGAgbXVzdCBiZSBhIGJvb2xlYW4nKTtcbiAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gb3B0aW1pemVGb3JTcGVlZDtcbiAgICB0aGlzLl9pc0Jyb3dzZXIgPSBpc0Jyb3dzZXI7XG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fdGFncyA9IFtdO1xuICAgIHRoaXMuX2luamVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcnVsZXNDb3VudCA9IDA7XG4gICAgdmFyIG5vZGUgPSB0aGlzLl9pc0Jyb3dzZXIgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cImNzcC1ub25jZVwiXScpO1xuICAgIHRoaXMuX25vbmNlID0gbm9kZSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN0eWxlU2hlZXQucHJvdG90eXBlO1xuXG4gIF9wcm90by5zZXRPcHRpbWl6ZUZvclNwZWVkID0gZnVuY3Rpb24gc2V0T3B0aW1pemVGb3JTcGVlZChib29sKSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiBib29sID09PSAnYm9vbGVhbicsICdgc2V0T3B0aW1pemVGb3JTcGVlZGAgYWNjZXB0cyBhIGJvb2xlYW4nKTtcbiAgICBpbnZhcmlhbnQodGhpcy5fcnVsZXNDb3VudCA9PT0gMCwgJ29wdGltaXplRm9yU3BlZWQgY2Fubm90IGJlIHdoZW4gcnVsZXMgaGF2ZSBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQnKTtcbiAgICB0aGlzLmZsdXNoKCk7XG4gICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IGJvb2w7XG4gICAgdGhpcy5pbmplY3QoKTtcbiAgfTtcblxuICBfcHJvdG8uaXNPcHRpbWl6ZUZvclNwZWVkID0gZnVuY3Rpb24gaXNPcHRpbWl6ZUZvclNwZWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkO1xuICB9O1xuXG4gIF9wcm90by5pbmplY3QgPSBmdW5jdGlvbiBpbmplY3QoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGludmFyaWFudCghdGhpcy5faW5qZWN0ZWQsICdzaGVldCBhbHJlYWR5IGluamVjdGVkJyk7XG4gICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuX2lzQnJvd3NlciAmJiB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICB0aGlzLl90YWdzWzBdID0gdGhpcy5tYWtlU3R5bGVUYWcodGhpcy5fbmFtZSk7XG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gJ2luc2VydFJ1bGUnIGluIHRoaXMuZ2V0U2hlZXQoKTtcblxuICAgICAgaWYgKCF0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKSB7XG4gICAgICAgIGlmICghaXNQcm9kKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdTdHlsZVNoZWV0OiBvcHRpbWl6ZUZvclNwZWVkIG1vZGUgbm90IHN1cHBvcnRlZCBmYWxsaW5nIGJhY2sgdG8gc3RhbmRhcmQgbW9kZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmx1c2goKTtcbiAgICAgICAgdGhpcy5faW5qZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2VydmVyU2hlZXQgPSB7XG4gICAgICBjc3NSdWxlczogW10sXG4gICAgICBpbnNlcnRSdWxlOiBmdW5jdGlvbiBpbnNlcnRSdWxlKHJ1bGUsIGluZGV4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgX3RoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzW2luZGV4XSA9IHtcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGNzc1RleHQ6IHJ1bGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH0sXG4gICAgICBkZWxldGVSdWxlOiBmdW5jdGlvbiBkZWxldGVSdWxlKGluZGV4KSB7XG4gICAgICAgIF90aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlc1tpbmRleF0gPSBudWxsO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmdldFNoZWV0Rm9yVGFnID0gZnVuY3Rpb24gZ2V0U2hlZXRGb3JUYWcodGFnKSB7XG4gICAgaWYgKHRhZy5zaGVldCkge1xuICAgICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGJyb3VnaHQgdG8geW91IGJ5IGZpcmVmb3hcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5zdHlsZVNoZWV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRvY3VtZW50LnN0eWxlU2hlZXRzW2ldLm93bmVyTm9kZSA9PT0gdGFnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFNoZWV0ID0gZnVuY3Rpb24gZ2V0U2hlZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U2hlZXRGb3JUYWcodGhpcy5fdGFnc1t0aGlzLl90YWdzLmxlbmd0aCAtIDFdKTtcbiAgfTtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSwgaW5kZXgpIHtcbiAgICBpbnZhcmlhbnQoaXNTdHJpbmcocnVsZSksICdgaW5zZXJ0UnVsZWAgYWNjZXB0cyBvbmx5IHN0cmluZ3MnKTtcblxuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBpbmRleCA9IHRoaXMuX3NlcnZlclNoZWV0LmNzc1J1bGVzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuZ2V0U2hlZXQoKTtcblxuICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5kZXggPSBzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICB9IC8vIHRoaXMgd2VpcmRuZXNzIGZvciBwZXJmLCBhbmQgY2hyb21lJ3Mgd2VpcmQgYnVnXG4gICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDAwNzk5Mi9jaHJvbWUtc3VkZGVubHktc3RvcHBlZC1hY2NlcHRpbmctaW5zZXJ0cnVsZVxuXG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCFpc1Byb2QpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJTdHlsZVNoZWV0OiBpbGxlZ2FsIHJ1bGU6IFxcblxcblwiICsgcnVsZSArIFwiXFxuXFxuU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8yMDAwNzk5MiBmb3IgbW9yZSBpbmZvXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaW5zZXJ0aW9uUG9pbnQgPSB0aGlzLl90YWdzW2luZGV4XTtcblxuICAgICAgdGhpcy5fdGFncy5wdXNoKHRoaXMubWFrZVN0eWxlVGFnKHRoaXMuX25hbWUsIHJ1bGUsIGluc2VydGlvblBvaW50KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3J1bGVzQ291bnQrKztcbiAgfTtcblxuICBfcHJvdG8ucmVwbGFjZVJ1bGUgPSBmdW5jdGlvbiByZXBsYWNlUnVsZShpbmRleCwgcnVsZSkge1xuICAgIGlmICh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkIHx8ICF0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHZhciBzaGVldCA9IHRoaXMuX2lzQnJvd3NlciA/IHRoaXMuZ2V0U2hlZXQoKSA6IHRoaXMuX3NlcnZlclNoZWV0O1xuXG4gICAgICBpZiAoIXJ1bGUudHJpbSgpKSB7XG4gICAgICAgIHJ1bGUgPSB0aGlzLl9kZWxldGVkUnVsZVBsYWNlaG9sZGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNoZWV0LmNzc1J1bGVzW2luZGV4XSkge1xuICAgICAgICAvLyBAVEJEIFNob3VsZCB3ZSB0aHJvdyBhbiBlcnJvcj9cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgfVxuXG4gICAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc2hlZXQuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoIWlzUHJvZCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcIlN0eWxlU2hlZXQ6IGlsbGVnYWwgcnVsZTogXFxuXFxuXCIgKyBydWxlICsgXCJcXG5cXG5TZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIwMDA3OTkyIGZvciBtb3JlIGluZm9cIik7XG4gICAgICAgIH0gLy8gSW4gb3JkZXIgdG8gcHJlc2VydmUgdGhlIGluZGljZXMgd2UgaW5zZXJ0IGEgZGVsZXRlUnVsZVBsYWNlaG9sZGVyXG5cblxuICAgICAgICBzaGVldC5pbnNlcnRSdWxlKHRoaXMuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIsIGluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRhZyA9IHRoaXMuX3RhZ3NbaW5kZXhdO1xuICAgICAgaW52YXJpYW50KHRhZywgXCJvbGQgcnVsZSBhdCBpbmRleCBgXCIgKyBpbmRleCArIFwiYCBub3QgZm91bmRcIik7XG4gICAgICB0YWcudGV4dENvbnRlbnQgPSBydWxlO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfTtcblxuICBfcHJvdG8uZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fc2VydmVyU2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3B0aW1pemVGb3JTcGVlZCkge1xuICAgICAgdGhpcy5yZXBsYWNlUnVsZShpbmRleCwgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGFnID0gdGhpcy5fdGFnc1tpbmRleF07XG4gICAgICBpbnZhcmlhbnQodGFnLCBcInJ1bGUgYXQgaW5kZXggYFwiICsgaW5kZXggKyBcImAgbm90IGZvdW5kXCIpO1xuICAgICAgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIHRoaXMuX3RhZ3NbaW5kZXhdID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5faW5qZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9ydWxlc0NvdW50ID0gMDtcblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuX3RhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgIHJldHVybiB0YWcgJiYgdGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl90YWdzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNpbXBsZXIgb24gc2VydmVyXG4gICAgICB0aGlzLl9zZXJ2ZXJTaGVldC5jc3NSdWxlcyA9IFtdO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY3NzUnVsZXMgPSBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VydmVyU2hlZXQuY3NzUnVsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX3RhZ3MucmVkdWNlKGZ1bmN0aW9uIChydWxlcywgdGFnKSB7XG4gICAgICBpZiAodGFnKSB7XG4gICAgICAgIHJ1bGVzID0gcnVsZXMuY29uY2F0KEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChfdGhpczIuZ2V0U2hlZXRGb3JUYWcodGFnKS5jc3NSdWxlcywgZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgICAgICByZXR1cm4gcnVsZS5jc3NUZXh0ID09PSBfdGhpczIuX2RlbGV0ZWRSdWxlUGxhY2Vob2xkZXIgPyBudWxsIDogcnVsZTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcnVsZXMucHVzaChudWxsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH0sIFtdKTtcbiAgfTtcblxuICBfcHJvdG8ubWFrZVN0eWxlVGFnID0gZnVuY3Rpb24gbWFrZVN0eWxlVGFnKG5hbWUsIGNzc1N0cmluZywgcmVsYXRpdmVUb1RhZykge1xuICAgIGlmIChjc3NTdHJpbmcpIHtcbiAgICAgIGludmFyaWFudChpc1N0cmluZyhjc3NTdHJpbmcpLCAnbWFrZVN0eWxlVGFnIGFjY2VwcyBvbmx5IHN0cmluZ3MgYXMgc2Vjb25kIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGlmICh0aGlzLl9ub25jZSkgdGFnLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCB0aGlzLl9ub25jZSk7XG4gICAgdGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHRhZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLVwiICsgbmFtZSwgJycpO1xuXG4gICAgaWYgKGNzc1N0cmluZykge1xuICAgICAgdGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc1N0cmluZykpO1xuICAgIH1cblxuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuXG4gICAgaWYgKHJlbGF0aXZlVG9UYWcpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHRhZywgcmVsYXRpdmVUb1RhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQodGFnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFnO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTdHlsZVNoZWV0LCBbe1xuICAgIGtleTogXCJsZW5ndGhcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydWxlc0NvdW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0eWxlU2hlZXQ7XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdHlsZVNoZWV0OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZmx1c2ggPSBmbHVzaDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3N0eWxlc2hlZXRSZWdpc3RyeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc3R5bGVzaGVldC1yZWdpc3RyeVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIHN0eWxlU2hlZXRSZWdpc3RyeSA9IG5ldyBfc3R5bGVzaGVldFJlZ2lzdHJ5W1wiZGVmYXVsdFwiXSgpO1xuXG52YXIgSlNYU3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoSlNYU3R5bGUsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEpTWFN0eWxlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgX3RoaXMucHJldlByb3BzID0ge307XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgSlNYU3R5bGUuZHluYW1pYyA9IGZ1bmN0aW9uIGR5bmFtaWMoaW5mbykge1xuICAgIHJldHVybiBpbmZvLm1hcChmdW5jdGlvbiAodGFnSW5mbykge1xuICAgICAgdmFyIGJhc2VJZCA9IHRhZ0luZm9bMF07XG4gICAgICB2YXIgcHJvcHMgPSB0YWdJbmZvWzFdO1xuICAgICAgcmV0dXJuIHN0eWxlU2hlZXRSZWdpc3RyeS5jb21wdXRlSWQoYmFzZUlkLCBwcm9wcyk7XG4gICAgfSkuam9pbignICcpO1xuICB9IC8vIHByb2JhYmx5IGZhc3RlciB0aGFuIFB1cmVDb21wb25lbnQgKHNoYWxsb3dFcXVhbClcbiAgO1xuXG4gIHZhciBfcHJvdG8gPSBKU1hTdHlsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShvdGhlclByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuaWQgIT09IG90aGVyUHJvcHMuaWQgfHwgLy8gV2UgZG8gdGhpcyBjaGVjayBiZWNhdXNlIGBkeW5hbWljYCBpcyBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIHVuZGVmaW5lZC5cbiAgICAvLyBUaGVzZSBhcmUgdGhlIGNvbXB1dGVkIHZhbHVlcyBmb3IgZHluYW1pYyBzdHlsZXMuXG4gICAgU3RyaW5nKHRoaXMucHJvcHMuZHluYW1pYykgIT09IFN0cmluZyhvdGhlclByb3BzLmR5bmFtaWMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB0byBtYWtlIHRoZSBzaWRlIGVmZmVjdCBhc3luYyBzYWZlIGluIHRoZSBcInJlbmRlclwiIHBoYXNlLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vemVpdC9zdHlsZWQtanN4L3B1bGwvNDg0XG4gICAgaWYgKHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKHRoaXMucHJldlByb3BzKSkge1xuICAgICAgLy8gVXBkYXRlc1xuICAgICAgaWYgKHRoaXMucHJldlByb3BzLmlkKSB7XG4gICAgICAgIHN0eWxlU2hlZXRSZWdpc3RyeS5yZW1vdmUodGhpcy5wcmV2UHJvcHMpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZVNoZWV0UmVnaXN0cnkuYWRkKHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5wcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBKU1hTdHlsZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSlNYU3R5bGU7XG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICB2YXIgY3NzUnVsZXMgPSBzdHlsZVNoZWV0UmVnaXN0cnkuY3NzUnVsZXMoKTtcbiAgc3R5bGVTaGVldFJlZ2lzdHJ5LmZsdXNoKCk7XG4gIHJldHVybiBjc3NSdWxlcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3N0cmluZ0hhc2ggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJzdHJpbmctaGFzaFwiKSk7XG5cbnZhciBfc3R5bGVzaGVldCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbGliL3N0eWxlc2hlZXRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIHNhbml0aXplID0gZnVuY3Rpb24gc2FuaXRpemUocnVsZSkge1xuICByZXR1cm4gcnVsZS5yZXBsYWNlKC9cXC9zdHlsZS9naSwgJ1xcXFwvc3R5bGUnKTtcbn07XG5cbnZhciBTdHlsZVNoZWV0UmVnaXN0cnkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZVNoZWV0UmVnaXN0cnkoX3RlbXApIHtcbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBfcmVmJHN0eWxlU2hlZXQgPSBfcmVmLnN0eWxlU2hlZXQsXG4gICAgICAgIHN0eWxlU2hlZXQgPSBfcmVmJHN0eWxlU2hlZXQgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmJHN0eWxlU2hlZXQsXG4gICAgICAgIF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYub3B0aW1pemVGb3JTcGVlZCxcbiAgICAgICAgb3B0aW1pemVGb3JTcGVlZCA9IF9yZWYkb3B0aW1pemVGb3JTcGVlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJG9wdGltaXplRm9yU3BlZWQsXG4gICAgICAgIF9yZWYkaXNCcm93c2VyID0gX3JlZi5pc0Jyb3dzZXIsXG4gICAgICAgIGlzQnJvd3NlciA9IF9yZWYkaXNCcm93c2VyID09PSB2b2lkIDAgPyB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA6IF9yZWYkaXNCcm93c2VyO1xuXG4gICAgdGhpcy5fc2hlZXQgPSBzdHlsZVNoZWV0IHx8IG5ldyBfc3R5bGVzaGVldFtcImRlZmF1bHRcIl0oe1xuICAgICAgbmFtZTogJ3N0eWxlZC1qc3gnLFxuICAgICAgb3B0aW1pemVGb3JTcGVlZDogb3B0aW1pemVGb3JTcGVlZFxuICAgIH0pO1xuXG4gICAgdGhpcy5fc2hlZXQuaW5qZWN0KCk7XG5cbiAgICBpZiAoc3R5bGVTaGVldCAmJiB0eXBlb2Ygb3B0aW1pemVGb3JTcGVlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aGlzLl9zaGVldC5zZXRPcHRpbWl6ZUZvclNwZWVkKG9wdGltaXplRm9yU3BlZWQpO1xuXG4gICAgICB0aGlzLl9vcHRpbWl6ZUZvclNwZWVkID0gdGhpcy5fc2hlZXQuaXNPcHRpbWl6ZUZvclNwZWVkKCk7XG4gICAgfVxuXG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNCcm93c2VyO1xuICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faW5kaWNlcyA9IHt9O1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IHt9O1xuICAgIHRoaXMuY29tcHV0ZUlkID0gdGhpcy5jcmVhdGVDb21wdXRlSWQoKTtcbiAgICB0aGlzLmNvbXB1dGVTZWxlY3RvciA9IHRoaXMuY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldFJlZ2lzdHJ5LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKHByb3BzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuX29wdGltaXplRm9yU3BlZWQpIHtcbiAgICAgIHRoaXMuX29wdGltaXplRm9yU3BlZWQgPSBBcnJheS5pc0FycmF5KHByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgdGhpcy5fc2hlZXQuc2V0T3B0aW1pemVGb3JTcGVlZCh0aGlzLl9vcHRpbWl6ZUZvclNwZWVkKTtcblxuICAgICAgdGhpcy5fb3B0aW1pemVGb3JTcGVlZCA9IHRoaXMuX3NoZWV0LmlzT3B0aW1pemVGb3JTcGVlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgIXRoaXMuX2Zyb21TZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX2Zyb21TZXJ2ZXIgPSB0aGlzLnNlbGVjdEZyb21TZXJ2ZXIoKTtcbiAgICAgIHRoaXMuX2luc3RhbmNlc0NvdW50cyA9IE9iamVjdC5rZXlzKHRoaXMuX2Zyb21TZXJ2ZXIpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB0YWdOYW1lKSB7XG4gICAgICAgIGFjY1t0YWdOYW1lXSA9IDA7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgdmFyIF90aGlzJGdldElkQW5kUnVsZXMgPSB0aGlzLmdldElkQW5kUnVsZXMocHJvcHMpLFxuICAgICAgICBzdHlsZUlkID0gX3RoaXMkZ2V0SWRBbmRSdWxlcy5zdHlsZUlkLFxuICAgICAgICBydWxlcyA9IF90aGlzJGdldElkQW5kUnVsZXMucnVsZXM7IC8vIERlZHVwaW5nOiBqdXN0IGluY3JlYXNlIHRoZSBpbnN0YW5jZXMgY291bnQuXG5cblxuICAgIGlmIChzdHlsZUlkIGluIHRoaXMuX2luc3RhbmNlc0NvdW50cykge1xuICAgICAgdGhpcy5faW5zdGFuY2VzQ291bnRzW3N0eWxlSWRdICs9IDE7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluZGljZXMgPSBydWxlcy5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICAgIHJldHVybiBfdGhpcy5fc2hlZXQuaW5zZXJ0UnVsZShydWxlKTtcbiAgICB9KSAvLyBGaWx0ZXIgb3V0IGludmFsaWQgcnVsZXNcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICE9PSAtMTtcbiAgICB9KTtcbiAgICB0aGlzLl9pbmRpY2VzW3N0eWxlSWRdID0gaW5kaWNlcztcbiAgICB0aGlzLl9pbnN0YW5jZXNDb3VudHNbc3R5bGVJZF0gPSAxO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGhpcyRnZXRJZEFuZFJ1bGVzMiA9IHRoaXMuZ2V0SWRBbmRSdWxlcyhwcm9wcyksXG4gICAgICAgIHN0eWxlSWQgPSBfdGhpcyRnZXRJZEFuZFJ1bGVzMi5zdHlsZUlkO1xuXG4gICAgaW52YXJpYW50KHN0eWxlSWQgaW4gdGhpcy5faW5zdGFuY2VzQ291bnRzLCBcInN0eWxlSWQ6IGBcIiArIHN0eWxlSWQgKyBcImAgbm90IGZvdW5kXCIpO1xuICAgIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSAtPSAxO1xuXG4gICAgaWYgKHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXSA8IDEpIHtcbiAgICAgIHZhciB0YWdGcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciAmJiB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuXG4gICAgICBpZiAodGFnRnJvbVNlcnZlcikge1xuICAgICAgICB0YWdGcm9tU2VydmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFnRnJvbVNlcnZlcik7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9mcm9tU2VydmVyW3N0eWxlSWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faW5kaWNlc1tzdHlsZUlkXS5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX3NoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZWxldGUgdGhpcy5faW5kaWNlc1tzdHlsZUlkXTtcbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuX2luc3RhbmNlc0NvdW50c1tzdHlsZUlkXTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShwcm9wcywgbmV4dFByb3BzKSB7XG4gICAgdGhpcy5hZGQobmV4dFByb3BzKTtcbiAgICB0aGlzLnJlbW92ZShwcm9wcyk7XG4gIH07XG5cbiAgX3Byb3RvLmZsdXNoID0gZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgdGhpcy5fc2hlZXQuZmx1c2goKTtcblxuICAgIHRoaXMuX3NoZWV0LmluamVjdCgpO1xuXG4gICAgdGhpcy5fZnJvbVNlcnZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9pbmRpY2VzID0ge307XG4gICAgdGhpcy5faW5zdGFuY2VzQ291bnRzID0ge307XG4gICAgdGhpcy5jb21wdXRlSWQgPSB0aGlzLmNyZWF0ZUNvbXB1dGVJZCgpO1xuICAgIHRoaXMuY29tcHV0ZVNlbGVjdG9yID0gdGhpcy5jcmVhdGVDb21wdXRlU2VsZWN0b3IoKTtcbiAgfTtcblxuICBfcHJvdG8uY3NzUnVsZXMgPSBmdW5jdGlvbiBjc3NSdWxlcygpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBmcm9tU2VydmVyID0gdGhpcy5fZnJvbVNlcnZlciA/IE9iamVjdC5rZXlzKHRoaXMuX2Zyb21TZXJ2ZXIpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2Zyb21TZXJ2ZXJbc3R5bGVJZF1dO1xuICAgIH0pIDogW107XG5cbiAgICB2YXIgY3NzUnVsZXMgPSB0aGlzLl9zaGVldC5jc3NSdWxlcygpO1xuXG4gICAgcmV0dXJuIGZyb21TZXJ2ZXIuY29uY2F0KE9iamVjdC5rZXlzKHRoaXMuX2luZGljZXMpLm1hcChmdW5jdGlvbiAoc3R5bGVJZCkge1xuICAgICAgcmV0dXJuIFtzdHlsZUlkLCBfdGhpczMuX2luZGljZXNbc3R5bGVJZF0ubWFwKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gY3NzUnVsZXNbaW5kZXhdLmNzc1RleHQ7XG4gICAgICB9KS5qb2luKF90aGlzMy5fb3B0aW1pemVGb3JTcGVlZCA/ICcnIDogJ1xcbicpXTtcbiAgICB9KSAvLyBmaWx0ZXIgb3V0IGVtcHR5IHJ1bGVzXG4gICAgLmZpbHRlcihmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcmV0dXJuIEJvb2xlYW4ocnVsZVsxXSk7XG4gICAgfSkpO1xuICB9XG4gIC8qKlxuICAgKiBjcmVhdGVDb21wdXRlSWRcbiAgICpcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRvIGNvbXB1dGUgYW5kIG1lbW9pemUgYSBqc3ggaWQgZnJvbSBhIGJhc2VkSWQgYW5kIG9wdGlvbmFsbHkgcHJvcHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZUNvbXB1dGVJZCA9IGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVJZCgpIHtcbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJhc2VJZCwgcHJvcHMpIHtcbiAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIFwianN4LVwiICsgYmFzZUlkO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcHNUb1N0cmluZyA9IFN0cmluZyhwcm9wcyk7XG4gICAgICB2YXIga2V5ID0gYmFzZUlkICsgcHJvcHNUb1N0cmluZzsgLy8gcmV0dXJuIGBqc3gtJHtoYXNoU3RyaW5nKGAke2Jhc2VJZH0tJHtwcm9wc1RvU3RyaW5nfWApfWBcblxuICAgICAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBcImpzeC1cIiArICgwLCBfc3RyaW5nSGFzaFtcImRlZmF1bHRcIl0pKGJhc2VJZCArIFwiLVwiICsgcHJvcHNUb1N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYWNoZVtrZXldO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIGNyZWF0ZUNvbXB1dGVTZWxlY3RvclxuICAgKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gdG8gY29tcHV0ZSBhbmQgbWVtb2l6ZSBkeW5hbWljIHNlbGVjdG9ycy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uY3JlYXRlQ29tcHV0ZVNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZVNlbGVjdG9yKHNlbGVjdG9QbGFjZWhvbGRlclJlZ2V4cCkge1xuICAgIGlmIChzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAgPT09IHZvaWQgMCkge1xuICAgICAgc2VsZWN0b1BsYWNlaG9sZGVyUmVnZXhwID0gL19fanN4LXN0eWxlLWR5bmFtaWMtc2VsZWN0b3IvZztcbiAgICB9XG5cbiAgICB2YXIgY2FjaGUgPSB7fTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCBjc3MpIHtcbiAgICAgIC8vIFNhbml0aXplIFNTUi1lZCBDU1MuXG4gICAgICAvLyBDbGllbnQgc2lkZSBjb2RlIGRvZXNuJ3QgbmVlZCB0byBiZSBzYW5pdGl6ZWQgc2luY2Ugd2UgdXNlXG4gICAgICAvLyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSAoZGV2KSBhbmQgdGhlIENTU09NIGFwaSBzaGVldC5pbnNlcnRSdWxlIChwcm9kKS5cbiAgICAgIGlmICghdGhpcy5faXNCcm93c2VyKSB7XG4gICAgICAgIGNzcyA9IHNhbml0aXplKGNzcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpZGNzcyA9IGlkICsgY3NzO1xuXG4gICAgICBpZiAoIWNhY2hlW2lkY3NzXSkge1xuICAgICAgICBjYWNoZVtpZGNzc10gPSBjc3MucmVwbGFjZShzZWxlY3RvUGxhY2Vob2xkZXJSZWdleHAsIGlkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlW2lkY3NzXTtcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5nZXRJZEFuZFJ1bGVzID0gZnVuY3Rpb24gZ2V0SWRBbmRSdWxlcyhwcm9wcykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGNzcyA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBkeW5hbWljID0gcHJvcHMuZHluYW1pYyxcbiAgICAgICAgaWQgPSBwcm9wcy5pZDtcblxuICAgIGlmIChkeW5hbWljKSB7XG4gICAgICB2YXIgc3R5bGVJZCA9IHRoaXMuY29tcHV0ZUlkKGlkLCBkeW5hbWljKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0eWxlSWQ6IHN0eWxlSWQsXG4gICAgICAgIHJ1bGVzOiBBcnJheS5pc0FycmF5KGNzcykgPyBjc3MubWFwKGZ1bmN0aW9uIChydWxlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5jb21wdXRlU2VsZWN0b3Ioc3R5bGVJZCwgcnVsZSk7XG4gICAgICAgIH0pIDogW3RoaXMuY29tcHV0ZVNlbGVjdG9yKHN0eWxlSWQsIGNzcyldXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdHlsZUlkOiB0aGlzLmNvbXB1dGVJZChpZCksXG4gICAgICBydWxlczogQXJyYXkuaXNBcnJheShjc3MpID8gY3NzIDogW2Nzc11cbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBzZWxlY3RGcm9tU2VydmVyXG4gICAqXG4gICAqIENvbGxlY3RzIHN0eWxlIHRhZ3MgZnJvbSB0aGUgZG9jdW1lbnQgd2l0aCBpZCBfX2pzeC1YWFhcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2VsZWN0RnJvbVNlcnZlciA9IGZ1bmN0aW9uIHNlbGVjdEZyb21TZXJ2ZXIoKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2lkXj1cIl9fanN4LVwiXScpKTtcbiAgICByZXR1cm4gZWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGVsZW1lbnQpIHtcbiAgICAgIHZhciBpZCA9IGVsZW1lbnQuaWQuc2xpY2UoMik7XG4gICAgICBhY2NbaWRdID0gZWxlbWVudDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0UmVnaXN0cnk7XG59KCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU3R5bGVTaGVldFJlZ2lzdHJ5O1xuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU3R5bGVTaGVldFJlZ2lzdHJ5OiBcIiArIG1lc3NhZ2UgKyBcIi5cIik7XG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zdHlsZScpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBydWxlc0RCIGZyb20gJ0AvZmVoZGIvcnVsZUhhc2guanNvbic7XG5pbXBvcnQgaGVyb0RCIGZyb20gJ0AvZmVoZGIvaGVyb2VzLmpzb24nO1xuaW1wb3J0IGFzc2lzdERCIGZyb20gJ0AvZmVoZGIvYXNzaXN0Lmpzb24nO1xuaW1wb3J0IHJlc3BsZW5kZW50REIgZnJvbSAnQC9mZWhkYi9yZXNwbGVuZGVudC5qc29uJztcbmltcG9ydCB7IEZFSERCLCBURkVIREJUeXBlIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5pbXBvcnQgUmFua2VyIGZyb20gJ0AvYXBwL3BhZ2UvUmFua2VyJztcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGI6IHtcbiAgICAgICAgcnVsZXNEQixcbiAgICAgICAgaGVyb0RCLFxuICAgICAgICBhc3Npc3REQixcbiAgICAgICAgcmVzcGxlbmRlbnREQixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIFJhbmtlclBhZ2UoeyBkYiB9OiB7IGRiOiBURkVIREJUeXBlIH0pOiBSZWFjdEVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxGRUhEQi5Qcm92aWRlciB2YWx1ZT17ZGJ9PlxuICAgICAgPFJhbmtlciAvPlxuICAgIDwvRkVIREIuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmtlclBhZ2U7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vaGVyb2hlYWRlci5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2hlcm9oZWFkZXIubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9oZXJvaGVhZGVyLm1vZHVsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL3R5cGVjaGVja2JveHMubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi90eXBlY2hlY2tib3hzLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vdHlwZWNoZWNrYm94cy5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9pbmRleC5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTItMiEuL2luZGV4Lm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMi0yIS4vaW5kZXgubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9