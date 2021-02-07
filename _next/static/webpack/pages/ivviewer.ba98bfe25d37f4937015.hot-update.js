webpackHotUpdate_N_E("pages/ivviewer",{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy9XZWFwb25UeXBlQ2hlY2tib3hzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJXZWFwb25UeXBlQ2hlY2tib3hzIiwid2VhcG9uVHlwZUZpbHRlciIsIm9uVG9nZ2xlIiwib25DbGljayIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJkYXRhc2V0IiwiY3VycmVudFRhcmdldCIsIndlYXBvblR5cGUiLCJjaGVja2VkIiwid2VhcG9uVHlwZXMiLCJtYXAiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFHQTs7QUFFQSxTQUFTQSxtQkFBVCxPQU1HO0FBQUE7O0FBQUE7O0FBQUEsTUFMREMsZ0JBS0MsUUFMREEsZ0JBS0M7QUFBQSxNQUpEQyxRQUlDLFFBSkRBLFFBSUM7QUFDRCxNQUFNQyxPQUFPLEdBQUdDLHlEQUFXLENBQ3pCLFVBQUNDLEtBQUQsRUFBNEQ7QUFBQSxRQUNsREMsT0FEa0QsR0FDdENELEtBQUssQ0FBQ0UsYUFEZ0MsQ0FDbERELE9BRGtEO0FBRTFELFFBQU1FLFVBQVUsR0FBR0YsT0FBTyxDQUFDRSxVQUEzQjtBQUNBLFFBQU1DLE9BQU8sR0FBR0gsT0FBTyxDQUFDRyxPQUFSLEtBQW9CLE1BQXBDO0FBQ0FQLFlBQVEsQ0FBQztBQUFFTSxnQkFBVSxFQUFWQSxVQUFGO0FBQWNDLGFBQU8sRUFBUEE7QUFBZCxLQUFELENBQVI7QUFDRCxHQU53QixFQU96QixDQUFDUCxRQUFELENBUHlCLENBQTNCO0FBU0Esc0JBQ0U7QUFBQSxjQUNHUSwrREFBVyxDQUFDQyxHQUFaLENBQWdCLFVBQUNILFVBQUQ7QUFBQSwwQkFDZixxRUFBQywyREFBRDtBQUVFLGtCQUFVLEVBQUVBLFVBRmQ7QUFHRSxlQUFPLEVBQUVQLGdCQUFnQixDQUFDTyxVQUFELENBSDNCO0FBSUUsZUFBTyxFQUFFTDtBQUpYLFNBQ09LLFVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURlO0FBQUEsS0FBaEI7QUFESCxtQkFERjtBQVlEOztHQTVCUVIsbUI7O0tBQUFBLG1CO0FBNkJNLGtGQUFBWSxrREFBSSxDQUFDWixtQkFBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pdnZpZXdlci5iYTk4YmZlMjVkMzdmNDkzNzAxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUV2VhcG9uVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IHdlYXBvblR5cGVzIH0gZnJvbSAnQC9hcHAvdXRpbHMvZ2VuZXJhbHMnO1xuaW1wb3J0IHsgVFdlYXBvblR5cGVGaWx0ZXJUeXBlIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCB7IFRXZWFwb25UeXBlVG9nZ2xlRnVuY3Rpb24gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IFdlYXBvblR5cGVDaGVja2JveCBmcm9tICcuL1dlYXBvblR5cGVDaGVja2JveCc7XG5cbmZ1bmN0aW9uIFdlYXBvblR5cGVDaGVja2JveHMoe1xuICB3ZWFwb25UeXBlRmlsdGVyLFxuICBvblRvZ2dsZSxcbn06IHtcbiAgd2VhcG9uVHlwZUZpbHRlcjogVFdlYXBvblR5cGVGaWx0ZXJUeXBlO1xuICBvblRvZ2dsZTogVFdlYXBvblR5cGVUb2dnbGVGdW5jdGlvbjtcbn0pIHtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YXNldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgIGNvbnN0IHdlYXBvblR5cGUgPSBkYXRhc2V0LndlYXBvblR5cGUgYXMgVFdlYXBvblR5cGU7XG4gICAgICBjb25zdCBjaGVja2VkID0gZGF0YXNldC5jaGVja2VkID09PSAndHJ1ZSc7XG4gICAgICBvblRvZ2dsZSh7IHdlYXBvblR5cGUsIGNoZWNrZWQgfSk7XG4gICAgfSxcbiAgICBbb25Ub2dnbGVdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt3ZWFwb25UeXBlcy5tYXAoKHdlYXBvblR5cGUpID0+IChcbiAgICAgICAgPFdlYXBvblR5cGVDaGVja2JveFxuICAgICAgICAgIGtleT17d2VhcG9uVHlwZX1cbiAgICAgICAgICB3ZWFwb25UeXBlPXt3ZWFwb25UeXBlfVxuICAgICAgICAgIGNoZWNrZWQ9e3dlYXBvblR5cGVGaWx0ZXJbd2VhcG9uVHlwZV19XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgbWVtbyhXZWFwb25UeXBlQ2hlY2tib3hzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=