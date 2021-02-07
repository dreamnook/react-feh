webpackHotUpdate_N_E("pages/ranker",{

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



var _jsxFileName = "F:\\repos\\react-feh-nextjs\\app\\components\\TypeCheckboxs\\WeaponTypeCheckboxs\\index.tsx",
    _s = $RefreshSig$();





function WeaponTypeCheckboxs(_ref) {
  _s();

  var _this = this;

  var weaponTypeFilter = _ref.weaponTypeFilter,
      onToggle = _ref.onToggle;
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    var dataset = event.currentTarget.dataset;
    console.log(dataset);
    var weaponType = dataset.moveType;
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
        lineNumber: 28,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9XZWFwb25UeXBlQ2hlY2tib3hzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJXZWFwb25UeXBlQ2hlY2tib3hzIiwid2VhcG9uVHlwZUZpbHRlciIsIm9uVG9nZ2xlIiwib25DbGljayIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJkYXRhc2V0IiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJ3ZWFwb25UeXBlIiwibW92ZVR5cGUiLCJjaGVja2VkIiwid2VhcG9uVHlwZXMiLCJtYXAiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFHQTs7QUFFQSxTQUFTQSxtQkFBVCxPQU1HO0FBQUE7O0FBQUE7O0FBQUEsTUFMREMsZ0JBS0MsUUFMREEsZ0JBS0M7QUFBQSxNQUpEQyxRQUlDLFFBSkRBLFFBSUM7QUFDRCxNQUFNQyxPQUFPLEdBQUdDLHlEQUFXLENBQ3pCLFVBQUNDLEtBQUQsRUFBNEQ7QUFBQSxRQUNsREMsT0FEa0QsR0FDdENELEtBQUssQ0FBQ0UsYUFEZ0MsQ0FDbERELE9BRGtEO0FBRTFERSxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBLFFBQU1JLFVBQVUsR0FBR0osT0FBTyxDQUFDSyxRQUEzQjtBQUNBLFFBQU1DLE9BQU8sR0FBR04sT0FBTyxDQUFDTSxPQUFSLEtBQW9CLE1BQXBDO0FBQ0FWLFlBQVEsQ0FBQztBQUFFUSxnQkFBVSxFQUFWQSxVQUFGO0FBQWNFLGFBQU8sRUFBUEE7QUFBZCxLQUFELENBQVI7QUFDRCxHQVB3QixFQVF6QixDQUFDVixRQUFELENBUnlCLENBQTNCO0FBVUEsc0JBQ0U7QUFBQSxjQUNHVywrREFBVyxDQUFDQyxHQUFaLENBQWdCLFVBQUNKLFVBQUQ7QUFBQSwwQkFDZixxRUFBQywyREFBRDtBQUVFLGtCQUFVLEVBQUVBLFVBRmQ7QUFHRSxlQUFPLEVBQUVULGdCQUFnQixDQUFDUyxVQUFELENBSDNCO0FBSUUsZUFBTyxFQUFFUDtBQUpYLFNBQ09PLFVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURlO0FBQUEsS0FBaEI7QUFESCxtQkFERjtBQVlEOztHQTdCUVYsbUI7O0tBQUFBLG1CO0FBOEJNLGtGQUFBZSxrREFBSSxDQUFDZixtQkFBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yYW5rZXIuYzkyMWZlYWFhMGZmYjA2OGFmMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVFdlYXBvblR5cGUgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyB3ZWFwb25UeXBlcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2dlbmVyYWxzJztcbmltcG9ydCB7IFRXZWFwb25UeXBlRmlsdGVyVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgeyBUV2VhcG9uVHlwZVRvZ2dsZUZ1bmN0aW9uIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCBXZWFwb25UeXBlQ2hlY2tib3ggZnJvbSAnLi9XZWFwb25UeXBlQ2hlY2tib3gnO1xuXG5mdW5jdGlvbiBXZWFwb25UeXBlQ2hlY2tib3hzKHtcbiAgd2VhcG9uVHlwZUZpbHRlcixcbiAgb25Ub2dnbGUsXG59OiB7XG4gIHdlYXBvblR5cGVGaWx0ZXI6IFRXZWFwb25UeXBlRmlsdGVyVHlwZTtcbiAgb25Ub2dnbGU6IFRXZWFwb25UeXBlVG9nZ2xlRnVuY3Rpb247XG59KSB7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGFzZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhc2V0KTtcbiAgICAgIGNvbnN0IHdlYXBvblR5cGUgPSBkYXRhc2V0Lm1vdmVUeXBlIGFzIFRXZWFwb25UeXBlO1xuICAgICAgY29uc3QgY2hlY2tlZCA9IGRhdGFzZXQuY2hlY2tlZCA9PT0gJ3RydWUnO1xuICAgICAgb25Ub2dnbGUoeyB3ZWFwb25UeXBlLCBjaGVja2VkIH0pO1xuICAgIH0sXG4gICAgW29uVG9nZ2xlXVxuICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7d2VhcG9uVHlwZXMubWFwKCh3ZWFwb25UeXBlKSA9PiAoXG4gICAgICAgIDxXZWFwb25UeXBlQ2hlY2tib3hcbiAgICAgICAgICBrZXk9e3dlYXBvblR5cGV9XG4gICAgICAgICAgd2VhcG9uVHlwZT17d2VhcG9uVHlwZX1cbiAgICAgICAgICBjaGVja2VkPXt3ZWFwb25UeXBlRmlsdGVyW3dlYXBvblR5cGVdfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IG1lbW8oV2VhcG9uVHlwZUNoZWNrYm94cyk7XG4iXSwic291cmNlUm9vdCI6IiJ9