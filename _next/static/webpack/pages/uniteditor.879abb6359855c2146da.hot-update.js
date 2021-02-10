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
        "data-nobgcolor": noDropdown,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9pbmRleC50c3giXSwibmFtZXMiOlsiRHJvcGRvd25Ub2dnbGUiLCJub0Ryb3Bkb3duIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInBsYWNlaG9sZGVyIiwib3BlbiIsInRvZ2dsZU9wZW4iLCJvbklucHV0Q2xpY2siLCJvbkNoYW5nZUZpbHRlciIsInN0eWxlcyIsInRvZ2dsZSIsImFycm93IiwiSGVyb1NlbGVjdCIsImhlcm9JZCIsIm9uU2VsZWN0Iiwibm9TdGF0IiwicmVzcGxlbmRlbnQiLCJ1c2VIb29rcyIsImhhbmRsZU9uU2VsZWN0IiwiYWxsQ2hlY2tlZCIsImFsbEluZGV0ZXJtaW5hdGVkIiwidG9nZ2xlQWxsIiwibW92ZVR5cGVGaWx0ZXIiLCJ0b2dnbGVNb3ZlVHlwZSIsIndlYXBvblR5cGVGaWx0ZXIiLCJ0b2dnbGVXZWFwb25UeXBlIiwiaXNSYXJpdHk1IiwidG9nZ2xlUmFyaXR5NSIsImlzUmFyaXR5NCIsInRvZ2dsZVJhcml0eTQiLCJpc0dyYWlsIiwidG9nZ2xlR3JhaWwiLCJpc0R1byIsInRvZ2dsZUR1byIsImlzRGFuY2VyIiwidG9nZ2xlRGFuY2VyIiwiY29tcHV0ZWRIZXJvZXMiLCJjb250YWluZXIiLCJhbmNob3IiLCJtZW51IiwibGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxPQWtCRztBQUFBLE1BakJEQyxVQWlCQyxRQWpCREEsVUFpQkM7QUFBQSxNQWhCREMsUUFnQkMsUUFoQkRBLFFBZ0JDO0FBQUEsTUFmREMsUUFlQyxRQWZEQSxRQWVDO0FBQUEsTUFkREMsV0FjQyxRQWREQSxXQWNDO0FBQUEsTUFiREMsSUFhQyxRQWJEQSxJQWFDO0FBQUEsTUFaREMsVUFZQyxRQVpEQSxVQVlDO0FBQUEsTUFYREMsWUFXQyxRQVhEQSxZQVdDO0FBQUEs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QixNQURWO0FBRUUsa0JBQU0sRUFBRXVCLGNBRlY7QUFHRSxvQkFBUSxFQUFFbEI7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNENEOztHQTFGUU4sVTtVQTRDSEssOEM7OztNQTVDR0wsVTtBQTRGTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci44NzlhYmI2MzU5ODU1YzIxNDZkYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IE11dGFibGVSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHlwZUNoZWNrYm94cyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9jb21wcy9oZXJvc2VsZWN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IEhlcm9PcHRpb25zIGZyb20gJy4vSGVyb09wdGlvbnMnO1xuaW1wb3J0IHVzZUhvb2tzIGZyb20gJy4vaG9va3MnO1xuXG5mdW5jdGlvbiBEcm9wZG93blRvZ2dsZSh7XG4gIG5vRHJvcGRvd24sXG4gIGlucHV0UmVmLFxuICBkaXNhYmxlZCxcbiAgcGxhY2Vob2xkZXIsXG4gIG9wZW4sXG4gIHRvZ2dsZU9wZW4sXG4gIG9uSW5wdXRDbGljayxcbiAgb25DaGFuZ2VGaWx0ZXIsXG59OiB7XG4gIG5vRHJvcGRvd24/OiBib29sZWFuO1xuICBpbnB1dFJlZjogTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIG9wZW46IGJvb2xlYW47XG4gIHRvZ2dsZU9wZW46ICgpID0+IHZvaWQ7XG4gIG9uSW5wdXRDbGljazogKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50LCBFdmVudD4pID0+IHZvaWQ7XG4gIG9uQ2hhbmdlRmlsdGVyOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xufSkge1xuICBpZiAobm9Ecm9wZG93bikge1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ3RvZ2dsZS1pbnB1dCddfVxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIui8uOWFpeWQjeWtly/nqLHomZ9cIlxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VGaWx0ZXJ9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZX1cbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZW59XG4gICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGRhdGEtb3Blbj17b3Blbn1cbiAgICA+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ3RvZ2dsZS1pbnB1dCddfVxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICBkZWZhdWx0VmFsdWU9e3BsYWNlaG9sZGVyfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIG9uQ2xpY2s9e29uSW5wdXRDbGlja31cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRmlsdGVyfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYXJyb3d9PuKWvDwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVyb1NlbGVjdCh7XG4gIGhlcm9JZCxcbiAgb25TZWxlY3QsXG4gIG5vRHJvcGRvd24gPSBmYWxzZSxcbiAgbm9TdGF0ID0gZmFsc2UsXG4gIHJlc3BsZW5kZW50LFxufToge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgb25TZWxlY3Q6IChuZXdIZXJvSWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgbm9Ecm9wZG93bj86IGJvb2xlYW47XG4gIG5vU3RhdD86IGJvb2xlYW47XG4gIHJlc3BsZW5kZW50PzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3Qge1xuICAgIC8qKiBkcm9wZG93biBjb250cm9sICovXG4gICAgaW5wdXRSZWYsXG4gICAgb3BlbixcbiAgICB0b2dnbGVPcGVuLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGRpc2FibGVkLFxuICAgIG9uSW5wdXRDbGljayxcbiAgICBoYW5kbGVPblNlbGVjdCxcbiAgICAvKiogZmlsdGVyaW5nIHdpdGggdGV4dCAqL1xuICAgIG9uQ2hhbmdlRmlsdGVyLFxuICAgIC8qKiB0eXBlY2hlY2tib3ggKi9cbiAgICBhbGxDaGVja2VkLFxuICAgIGFsbEluZGV0ZXJtaW5hdGVkLFxuICAgIHRvZ2dsZUFsbCxcbiAgICBtb3ZlVHlwZUZpbHRlcixcbiAgICB0b2dnbGVNb3ZlVHlwZSxcbiAgICB3ZWFwb25UeXBlRmlsdGVyLFxuICAgIHRvZ2dsZVdlYXBvblR5cGUsXG4gICAgaXNSYXJpdHk1LFxuICAgIHRvZ2dsZVJhcml0eTUsXG4gICAgaXNSYXJpdHk0LFxuICAgIHRvZ2dsZVJhcml0eTQsXG4gICAgaXNHcmFpbCxcbiAgICB0b2dnbGVHcmFpbCxcbiAgICBpc0R1byxcbiAgICB0b2dnbGVEdW8sXG4gICAgaXNEYW5jZXIsXG4gICAgdG9nZ2xlRGFuY2VyLFxuICAgIC8qKiByZW5kZXJpbmcgKi9cbiAgICBjb21wdXRlZEhlcm9lcyxcbiAgfSA9IHVzZUhvb2tzKHsgaGVyb0lkLCBub0Ryb3Bkb3duLCBub1N0YXQsIG9uU2VsZWN0LCByZXNwbGVuZGVudCB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxEcm9wZG93blRvZ2dsZVxuICAgICAgICBub0Ryb3Bkb3duPXtub0Ryb3Bkb3dufVxuICAgICAgICBpbnB1dFJlZj17aW5wdXRSZWZ9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICB0b2dnbGVPcGVuPXt0b2dnbGVPcGVufVxuICAgICAgICBvbklucHV0Q2xpY2s9e29uSW5wdXRDbGlja31cbiAgICAgICAgb25DaGFuZ2VGaWx0ZXI9e29uQ2hhbmdlRmlsdGVyfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5jaG9yfSBkYXRhLW9wZW49e29wZW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9IGRhdGEtbm9iZ2NvbG9yPXtub0Ryb3Bkb3dufT5cbiAgICAgICAgICA8VHlwZUNoZWNrYm94c1xuICAgICAgICAgICAgYWxsQ2hlY2tlZD17YWxsQ2hlY2tlZH1cbiAgICAgICAgICAgIGFsbEluZGV0ZXJtaW5hdGVkPXthbGxJbmRldGVybWluYXRlZH1cbiAgICAgICAgICAgIHRvZ2dsZUFsbD17dG9nZ2xlQWxsfVxuICAgICAgICAgICAgbW92ZVR5cGVGaWx0ZXI9e21vdmVUeXBlRmlsdGVyfVxuICAgICAgICAgICAgdG9nZ2xlTW92ZVR5cGU9e3RvZ2dsZU1vdmVUeXBlfVxuICAgICAgICAgICAgd2VhcG9uVHlwZUZpbHRlcj17d2VhcG9uVHlwZUZpbHRlcn1cbiAgICAgICAgICAgIHRvZ2dsZVdlYXBvblR5cGU9e3RvZ2dsZVdlYXBvblR5cGV9XG4gICAgICAgICAgICBpc1Jhcml0eTU9e2lzUmFyaXR5NX1cbiAgICAgICAgICAgIHRvZ2dsZVJhcml0eTU9e3RvZ2dsZVJhcml0eTV9XG4gICAgICAgICAgICBpc1Jhcml0eTQ9e2lzUmFyaXR5NH1cbiAgICAgICAgICAgIHRvZ2dsZVJhcml0eTQ9e3RvZ2dsZVJhcml0eTR9XG4gICAgICAgICAgICBpc0dyYWlsPXtpc0dyYWlsfVxuICAgICAgICAgICAgdG9nZ2xlR3JhaWw9e3RvZ2dsZUdyYWlsfVxuICAgICAgICAgICAgaXNEdW89e2lzRHVvfVxuICAgICAgICAgICAgdG9nZ2xlRHVvPXt0b2dnbGVEdW99XG4gICAgICAgICAgICBpc0RhbmNlcj17aXNEYW5jZXJ9XG4gICAgICAgICAgICB0b2dnbGVEYW5jZXI9e3RvZ2dsZURhbmNlcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICAgICAgICA8SGVyb09wdGlvbnNcbiAgICAgICAgICAgICAgaGVyb0lkPXtoZXJvSWR9XG4gICAgICAgICAgICAgIGhlcm9lcz17Y29tcHV0ZWRIZXJvZXN9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXtoYW5kbGVPblNlbGVjdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWxlY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9