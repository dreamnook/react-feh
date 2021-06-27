self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/components/Editor/HeroPickerView/index.tsx":
/*!********************************************************!*\
  !*** ./app/components/Editor/HeroPickerView/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_HeroSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/HeroSelect */ "./app/components/HeroSelect/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BackButton */ "./app/components/Editor/BackButton/index.tsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./app/components/Editor/shared.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\Editor\\HeroPickerView\\index.tsx",
    _s = $RefreshSig$();






function HeroPickerView(_ref) {
  _s();

  var hidden = _ref.hidden,
      heroId = _ref.heroId,
      onChangeHero = _ref.onChangeHero,
      onClickBack = _ref.onClickBack,
      resplendent = _ref.resplendent;
  var onSelect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (newHeroId) {
    onChangeHero(newHeroId);
    onClickBack();
  }, [onChangeHero, onClickBack]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared__WEBPACK_IMPORTED_MODULE_4__.Container, {
    hidden: hidden,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared__WEBPACK_IMPORTED_MODULE_4__.Title, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BackButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        onClick: onClickBack
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), "\u82F1\u96C4"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_HeroSelect__WEBPACK_IMPORTED_MODULE_1__.default, {
      heroId: heroId,
      onSelect: onSelect,
      noDropdown: true,
      resplendent: resplendent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(HeroPickerView, "H8SSmYFP2FKkpe47/HkhbTuzoXA=");

_c = HeroPickerView;
/* harmony default export */ __webpack_exports__["default"] = (HeroPickerView);

var _c;

$RefreshReg$(_c, "HeroPickerView");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL0hlcm9QaWNrZXJWaWV3L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIZXJvUGlja2VyVmlldyIsImhpZGRlbiIsImhlcm9JZCIsIm9uQ2hhbmdlSGVybyIsIm9uQ2xpY2tCYWNrIiwicmVzcGxlbmRlbnQiLCJvblNlbGVjdCIsInVzZUNhbGxiYWNrIiwibmV3SGVyb0lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsT0FZRztBQUFBOztBQUFBLE1BWERDLE1BV0MsUUFYREEsTUFXQztBQUFBLE1BVkRDLE1BVUMsUUFWREEsTUFVQztBQUFBLE1BVERDLFlBU0MsUUFUREEsWUFTQztBQUFBLE1BUkRDLFdBUUMsUUFSREEsV0FRQztBQUFBLE1BUERDLFdBT0MsUUFQREEsV0FPQztBQUNELE1BQU1DLFFBQVEsR0FBR0Msa0RBQVcsQ0FDMUIsVUFBQ0MsU0FBRCxFQUF1QjtBQUNyQkwsZ0JBQVksQ0FBQ0ssU0FBRCxDQUFaO0FBQ0FKLGVBQVc7QUFDWixHQUp5QixFQUsxQixDQUFDRCxZQUFELEVBQWVDLFdBQWYsQ0FMMEIsQ0FBNUI7QUFPQSxzQkFDRSw4REFBQyw4Q0FBRDtBQUFXLFVBQU0sRUFBRUgsTUFBbkI7QUFBQSw0QkFDRSw4REFBQywwQ0FBRDtBQUFBLDhCQUNFLDhEQUFDLGdEQUFEO0FBQVksZUFBTyxFQUFFRztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSw4REFBQywrREFBRDtBQUNFLFlBQU0sRUFBRUYsTUFEVjtBQUVFLGNBQVEsRUFBRUksUUFGWjtBQUdFLGdCQUFVLE1BSFo7QUFJRSxpQkFBVyxFQUFFRDtBQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztHQWxDUUwsYzs7S0FBQUEsYztBQW9DVCwrREFBZUEsY0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjMxZWQ2NzI3MmVmZjZhOGQ3NTViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVyb1NlbGVjdCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0hlcm9TZWxlY3QnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICcuLi9CYWNrQnV0dG9uJztcbmltcG9ydCB7IENvbnRhaW5lciwgVGl0bGUgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5mdW5jdGlvbiBIZXJvUGlja2VyVmlldyh7XG4gIGhpZGRlbixcbiAgaGVyb0lkLFxuICBvbkNoYW5nZUhlcm8sXG4gIG9uQ2xpY2tCYWNrLFxuICByZXNwbGVuZGVudCxcbn06IHtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlSGVybzogKG5ld0hlcm9JZDogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkNsaWNrQmFjazogKCkgPT4gdm9pZDtcbiAgcmVzcGxlbmRlbnQ/OiBib29sZWFuO1xufSkge1xuICBjb25zdCBvblNlbGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdIZXJvSWQ6IHN0cmluZykgPT4ge1xuICAgICAgb25DaGFuZ2VIZXJvKG5ld0hlcm9JZCk7XG4gICAgICBvbkNsaWNrQmFjaygpO1xuICAgIH0sXG4gICAgW29uQ2hhbmdlSGVybywgb25DbGlja0JhY2tdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBoaWRkZW49e2hpZGRlbn0+XG4gICAgICA8VGl0bGU+XG4gICAgICAgIDxCYWNrQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tCYWNrfSAvPlxuICAgICAgICDoi7Hpm4RcbiAgICAgIDwvVGl0bGU+XG4gICAgICA8SGVyb1NlbGVjdFxuICAgICAgICBoZXJvSWQ9e2hlcm9JZH1cbiAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICBub0Ryb3Bkb3duXG4gICAgICAgIHJlc3BsZW5kZW50PXtyZXNwbGVuZGVudH1cbiAgICAgIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9QaWNrZXJWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==