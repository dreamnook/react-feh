webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/HeroSelect/index.tsx":
/*!*********************************************!*\
  !*** ./app/components/HeroSelect/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_TypeCheckboxs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/TypeCheckboxs */ "./app/components/TypeCheckboxs/index.tsx");
/* harmony import */ var _styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/comps/heroselect.module.css */ "./styles/comps/heroselect.module.css");
/* harmony import */ var _styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HeroOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroOptions */ "./app/components/HeroSelect/HeroOptions.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks */ "./app/components/HeroSelect/hooks.tsx");


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\HeroSelect\\index.tsx",
    _s = $RefreshSig$();







function DropdownToggle(_ref) {
  var noDropdown = _ref.noDropdown,
      inputRef = _ref.inputRef,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      open = _ref.open,
      toggleOpen = _ref.toggleOpen,
      onInputClick = _ref.onInputClick,
      onChangeFilter = _ref.onChangeFilter;

  if (noDropdown) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: _styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['toggle-input'],
      ref: inputRef,
      placeholder: "\u8F38\u5165\u540D\u5B57/\u7A31\u865F",
      onChange: onChangeFilter,
      disabled: disabled
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: _styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.toggle,
    onClick: toggleOpen,
    role: "button",
    disabled: disabled,
    "data-open": open,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: _styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3___default.a['toggle-input'],
      ref: inputRef,
      defaultValue: placeholder,
      placeholder: placeholder,
      onClick: onInputClick,
      onChange: onChangeFilter,
      disabled: disabled
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.arrow,
      children: "\u25BC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_c = DropdownToggle;

function HeroSelect(_ref2) {
  _s();

  var heroId = _ref2.heroId,
      onSelect = _ref2.onSelect,
      _ref2$noDropdown = _ref2.noDropdown,
      noDropdown = _ref2$noDropdown === void 0 ? false : _ref2$noDropdown,
      _ref2$noStat = _ref2.noStat,
      noStat = _ref2$noStat === void 0 ? false : _ref2$noStat,
      resplendent = _ref2.resplendent;

  var _useHooks = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["default"])({
    heroId: heroId,
    noDropdown: noDropdown,
    noStat: noStat,
    onSelect: onSelect,
    resplendent: resplendent
  }),
      inputRef = _useHooks.inputRef,
      open = _useHooks.open,
      toggleOpen = _useHooks.toggleOpen,
      placeholder = _useHooks.placeholder,
      disabled = _useHooks.disabled,
      onInputClick = _useHooks.onInputClick,
      handleOnSelect = _useHooks.handleOnSelect,
      onChangeFilter = _useHooks.onChangeFilter,
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
      computedHeroes = _useHooks.computedHeroes;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DropdownToggle, {
      noDropdown: noDropdown,
      inputRef: inputRef,
      disabled: disabled,
      placeholder: placeholder,
      open: open,
      toggleOpen: toggleOpen,
      onInputClick: onInputClick,
      onChangeFilter: onChangeFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.anchor,
      "data-open": open,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.menu,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_TypeCheckboxs__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
          lineNumber: 119,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_comps_heroselect_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
          "data-transparent": noDropdown,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeroOptions__WEBPACK_IMPORTED_MODULE_4__["default"], {
            heroId: heroId,
            heroes: computedHeroes,
            onSelect: handleOnSelect
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

_s(HeroSelect, "yV4O1ylpl+k9UQn9qMhb1qB6q0A=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c2 = HeroSelect;
/* harmony default export */ __webpack_exports__["default"] = (HeroSelect);

var _c, _c2;

$RefreshReg$(_c, "DropdownToggle");
$RefreshReg$(_c2, "HeroSelect");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9pbmRleC50c3giXSwibmFtZXMiOlsiRHJvcGRvd25Ub2dnbGUiLCJub0Ryb3Bkb3duIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInBsYWNlaG9sZGVyIiwib3BlbiIsInRvZ2dsZU9wZW4iLCJvbklucHV0Q2xpY2siLCJvbkNoYW5nZUZpbHRlciIsInN0eWxlcyIsInRvZ2dsZSIsImFycm93IiwiSGVyb1NlbGVjdCIsImhlcm9JZCIsIm9uU2VsZWN0Iiwibm9TdGF0IiwicmVzcGxlbmRlbnQiLCJ1c2VIb29rcyIsImhhbmRsZU9uU2VsZWN0IiwiYWxsQ2hlY2tlZCIsImFsbEluZGV0ZXJtaW5hdGVkIiwidG9nZ2xlQWxsIiwibW92ZVR5cGVGaWx0ZXIiLCJ0b2dnbGVNb3ZlVHlwZSIsIndlYXBvblR5cGVGaWx0ZXIiLCJ0b2dnbGVXZWFwb25UeXBlIiwiaXNSYXJpdHk1IiwidG9nZ2xlUmFyaXR5NSIsImlzUmFyaXR5NCIsInRvZ2dsZVJhcml0eTQiLCJpc0dyYWlsIiwidG9nZ2xlR3JhaWwiLCJpc0R1byIsInRvZ2dsZUR1byIsImlzRGFuY2VyIiwidG9nZ2xlRGFuY2VyIiwiY29tcHV0ZWRIZXJvZXMiLCJjb250YWluZXIiLCJhbmNob3IiLCJtZW51IiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxPQWtCRztBQUFBLE1BakJEQyxVQWlCQyxRQWpCREEsVUFpQkM7QUFBQSxNQWhCREMsUUFnQkMsUUFoQkRBLFFBZ0JDO0FBQUEsTUFmREMsUUFlQyxRQWZEQSxRQWVDO0FBQUEsTUFkREMsV0FjQyxRQWREQSxXQWNDO0FBQUEsTUFiREMsSUFhQyxRQWJEQSxJQWFDO0FBQUEsTUFaREMsVUFZQyxRQVpEQSxVQVlDO0FBQUEsTUFYREMsWUFXQyxRQVhEQSxZQVdDO0FBQUEs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LE1BRFY7QUFFRSxrQkFBTSxFQUFFdUIsY0FGVjtBQUdFLG9CQUFRLEVBQUVsQjtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0Q0Q7O0dBMUZRTixVO1VBNENISyw4Qzs7O01BNUNHTCxVO0FBNEZNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjhlM2QwOWM3YTU1NjZmZDBjNGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgTXV0YWJsZVJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUeXBlQ2hlY2tib3hzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL2NvbXBzL2hlcm9zZWxlY3QubW9kdWxlLmNzcyc7XG5pbXBvcnQgSGVyb09wdGlvbnMgZnJvbSAnLi9IZXJvT3B0aW9ucyc7XG5pbXBvcnQgdXNlSG9va3MgZnJvbSAnLi9ob29rcyc7XG5cbmZ1bmN0aW9uIERyb3Bkb3duVG9nZ2xlKHtcbiAgbm9Ecm9wZG93bixcbiAgaW5wdXRSZWYsXG4gIGRpc2FibGVkLFxuICBwbGFjZWhvbGRlcixcbiAgb3BlbixcbiAgdG9nZ2xlT3BlbixcbiAgb25JbnB1dENsaWNrLFxuICBvbkNoYW5nZUZpbHRlcixcbn06IHtcbiAgbm9Ecm9wZG93bj86IGJvb2xlYW47XG4gIGlucHV0UmVmOiBNdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgb3BlbjogYm9vbGVhbjtcbiAgdG9nZ2xlT3BlbjogKCkgPT4gdm9pZDtcbiAgb25JbnB1dENsaWNrOiAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQsIEV2ZW50PikgPT4gdm9pZDtcbiAgb25DaGFuZ2VGaWx0ZXI6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59KSB7XG4gIGlmIChub0Ryb3Bkb3duKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1sndG9nZ2xlLWlucHV0J119XG4gICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi6Ly45YWl5ZCN5a2XL+eoseiZn1wiXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUZpbHRlcn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlfVxuICAgICAgb25DbGljaz17dG9nZ2xlT3Blbn1cbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgZGF0YS1vcGVuPXtvcGVufVxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1sndG9nZ2xlLWlucHV0J119XG4gICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17cGxhY2Vob2xkZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgb25DbGljaz17b25JbnB1dENsaWNrfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VGaWx0ZXJ9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30+4pa8PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBIZXJvU2VsZWN0KHtcbiAgaGVyb0lkLFxuICBvblNlbGVjdCxcbiAgbm9Ecm9wZG93biA9IGZhbHNlLFxuICBub1N0YXQgPSBmYWxzZSxcbiAgcmVzcGxlbmRlbnQsXG59OiB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBvblNlbGVjdDogKG5ld0hlcm9JZDogc3RyaW5nKSA9PiB2b2lkO1xuICBub0Ryb3Bkb3duPzogYm9vbGVhbjtcbiAgbm9TdGF0PzogYm9vbGVhbjtcbiAgcmVzcGxlbmRlbnQ/OiBib29sZWFuO1xufSkge1xuICBjb25zdCB7XG4gICAgLyoqIGRyb3Bkb3duIGNvbnRyb2wgKi9cbiAgICBpbnB1dFJlZixcbiAgICBvcGVuLFxuICAgIHRvZ2dsZU9wZW4sXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGlzYWJsZWQsXG4gICAgb25JbnB1dENsaWNrLFxuICAgIGhhbmRsZU9uU2VsZWN0LFxuICAgIC8qKiBmaWx0ZXJpbmcgd2l0aCB0ZXh0ICovXG4gICAgb25DaGFuZ2VGaWx0ZXIsXG4gICAgLyoqIHR5cGVjaGVja2JveCAqL1xuICAgIGFsbENoZWNrZWQsXG4gICAgYWxsSW5kZXRlcm1pbmF0ZWQsXG4gICAgdG9nZ2xlQWxsLFxuICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgIHRvZ2dsZU1vdmVUeXBlLFxuICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlV2VhcG9uVHlwZSxcbiAgICBpc1Jhcml0eTUsXG4gICAgdG9nZ2xlUmFyaXR5NSxcbiAgICBpc1Jhcml0eTQsXG4gICAgdG9nZ2xlUmFyaXR5NCxcbiAgICBpc0dyYWlsLFxuICAgIHRvZ2dsZUdyYWlsLFxuICAgIGlzRHVvLFxuICAgIHRvZ2dsZUR1byxcbiAgICBpc0RhbmNlcixcbiAgICB0b2dnbGVEYW5jZXIsXG4gICAgLyoqIHJlbmRlcmluZyAqL1xuICAgIGNvbXB1dGVkSGVyb2VzLFxuICB9ID0gdXNlSG9va3MoeyBoZXJvSWQsIG5vRHJvcGRvd24sIG5vU3RhdCwgb25TZWxlY3QsIHJlc3BsZW5kZW50IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPERyb3Bkb3duVG9nZ2xlXG4gICAgICAgIG5vRHJvcGRvd249e25vRHJvcGRvd259XG4gICAgICAgIGlucHV0UmVmPXtpbnB1dFJlZn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIHRvZ2dsZU9wZW49e3RvZ2dsZU9wZW59XG4gICAgICAgIG9uSW5wdXRDbGljaz17b25JbnB1dENsaWNrfVxuICAgICAgICBvbkNoYW5nZUZpbHRlcj17b25DaGFuZ2VGaWx0ZXJ9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbmNob3J9IGRhdGEtb3Blbj17b3Blbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XG4gICAgICAgICAgPFR5cGVDaGVja2JveHNcbiAgICAgICAgICAgIGFsbENoZWNrZWQ9e2FsbENoZWNrZWR9XG4gICAgICAgICAgICBhbGxJbmRldGVybWluYXRlZD17YWxsSW5kZXRlcm1pbmF0ZWR9XG4gICAgICAgICAgICB0b2dnbGVBbGw9e3RvZ2dsZUFsbH1cbiAgICAgICAgICAgIG1vdmVUeXBlRmlsdGVyPXttb3ZlVHlwZUZpbHRlcn1cbiAgICAgICAgICAgIHRvZ2dsZU1vdmVUeXBlPXt0b2dnbGVNb3ZlVHlwZX1cbiAgICAgICAgICAgIHdlYXBvblR5cGVGaWx0ZXI9e3dlYXBvblR5cGVGaWx0ZXJ9XG4gICAgICAgICAgICB0b2dnbGVXZWFwb25UeXBlPXt0b2dnbGVXZWFwb25UeXBlfVxuICAgICAgICAgICAgaXNSYXJpdHk1PXtpc1Jhcml0eTV9XG4gICAgICAgICAgICB0b2dnbGVSYXJpdHk1PXt0b2dnbGVSYXJpdHk1fVxuICAgICAgICAgICAgaXNSYXJpdHk0PXtpc1Jhcml0eTR9XG4gICAgICAgICAgICB0b2dnbGVSYXJpdHk0PXt0b2dnbGVSYXJpdHk0fVxuICAgICAgICAgICAgaXNHcmFpbD17aXNHcmFpbH1cbiAgICAgICAgICAgIHRvZ2dsZUdyYWlsPXt0b2dnbGVHcmFpbH1cbiAgICAgICAgICAgIGlzRHVvPXtpc0R1b31cbiAgICAgICAgICAgIHRvZ2dsZUR1bz17dG9nZ2xlRHVvfVxuICAgICAgICAgICAgaXNEYW5jZXI9e2lzRGFuY2VyfVxuICAgICAgICAgICAgdG9nZ2xlRGFuY2VyPXt0b2dnbGVEYW5jZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9IGRhdGEtdHJhbnNwYXJlbnQ9e25vRHJvcGRvd259PlxuICAgICAgICAgICAgPEhlcm9PcHRpb25zXG4gICAgICAgICAgICAgIGhlcm9JZD17aGVyb0lkfVxuICAgICAgICAgICAgICBoZXJvZXM9e2NvbXB1dGVkSGVyb2VzfVxuICAgICAgICAgICAgICBvblNlbGVjdD17aGFuZGxlT25TZWxlY3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VsZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==