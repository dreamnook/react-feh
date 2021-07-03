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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        width: '100vw',
        margin: '0 -1em'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_HeroSelect__WEBPACK_IMPORTED_MODULE_1__.default, {
        heroId: heroId,
        onSelect: onSelect,
        noDropdown: true,
        resplendent: resplendent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL0hlcm9QaWNrZXJWaWV3L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIZXJvUGlja2VyVmlldyIsImhpZGRlbiIsImhlcm9JZCIsIm9uQ2hhbmdlSGVybyIsIm9uQ2xpY2tCYWNrIiwicmVzcGxlbmRlbnQiLCJvblNlbGVjdCIsInVzZUNhbGxiYWNrIiwibmV3SGVyb0lkIiwid2lkdGgiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxPQVlHO0FBQUE7O0FBQUEsTUFYREMsTUFXQyxRQVhEQSxNQVdDO0FBQUEsTUFWREMsTUFVQyxRQVZEQSxNQVVDO0FBQUEsTUFUREMsWUFTQyxRQVREQSxZQVNDO0FBQUEsTUFSREMsV0FRQyxRQVJEQSxXQVFDO0FBQUEsTUFQREMsV0FPQyxRQVBEQSxXQU9DO0FBQ0QsTUFBTUMsUUFBUSxHQUFHQyxrREFBVyxDQUMxQixVQUFDQyxTQUFELEVBQXVCO0FBQ3JCTCxnQkFBWSxDQUFDSyxTQUFELENBQVo7QUFDQUosZUFBVztBQUNaLEdBSnlCLEVBSzFCLENBQUNELFlBQUQsRUFBZUMsV0FBZixDQUwwQixDQUE1QjtBQU9BLHNCQUNFLDhEQUFDLDhDQUFEO0FBQVcsVUFBTSxFQUFFSCxNQUFuQjtBQUFBLDRCQUNFLDhEQUFDLDBDQUFEO0FBQUEsOEJBQ0UsOERBQUMsZ0RBQUQ7QUFBWSxlQUFPLEVBQUVHO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssV0FBSyxFQUFFO0FBQUVLLGFBQUssRUFBRSxPQUFUO0FBQWtCQyxjQUFNLEVBQUU7QUFBMUIsT0FBWjtBQUFBLDZCQUNFLDhEQUFDLCtEQUFEO0FBQ0UsY0FBTSxFQUFFUixNQURWO0FBRUUsZ0JBQVEsRUFBRUksUUFGWjtBQUdFLGtCQUFVLE1BSFo7QUFJRSxtQkFBVyxFQUFFRDtBQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBcENRTCxjOztLQUFBQSxjO0FBc0NULCtEQUFlQSxjQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuODIyOTBkZDYzOWVjMTFkZjJlYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvU2VsZWN0IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdCc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4uL0JhY2tCdXR0b24nO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUaXRsZSB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmZ1bmN0aW9uIEhlcm9QaWNrZXJWaWV3KHtcbiAgaGlkZGVuLFxuICBoZXJvSWQsXG4gIG9uQ2hhbmdlSGVybyxcbiAgb25DbGlja0JhY2ssXG4gIHJlc3BsZW5kZW50LFxufToge1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBoZXJvSWQ6IHN0cmluZztcbiAgb25DaGFuZ2VIZXJvOiAobmV3SGVyb0lkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uQ2xpY2tCYWNrOiAoKSA9PiB2b2lkO1xuICByZXNwbGVuZGVudD86IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IG9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soXG4gICAgKG5ld0hlcm9JZDogc3RyaW5nKSA9PiB7XG4gICAgICBvbkNoYW5nZUhlcm8obmV3SGVyb0lkKTtcbiAgICAgIG9uQ2xpY2tCYWNrKCk7XG4gICAgfSxcbiAgICBbb25DaGFuZ2VIZXJvLCBvbkNsaWNrQmFja10sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBoaWRkZW49e2hpZGRlbn0+XG4gICAgICA8VGl0bGU+XG4gICAgICAgIDxCYWNrQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tCYWNrfSAvPlxuICAgICAgICDoi7Hpm4RcbiAgICAgIDwvVGl0bGU+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwdncnLCBtYXJnaW46ICcwIC0xZW0nIH19PlxuICAgICAgICA8SGVyb1NlbGVjdFxuICAgICAgICAgIGhlcm9JZD17aGVyb0lkfVxuICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgICBub0Ryb3Bkb3duXG4gICAgICAgICAgcmVzcGxlbmRlbnQ9e3Jlc3BsZW5kZW50fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9QaWNrZXJWaWV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==