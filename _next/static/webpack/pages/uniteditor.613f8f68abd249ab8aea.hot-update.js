self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/components/HeroSelect/index.tsx":
/*!*********************************************!*\
  !*** ./app/components/HeroSelect/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_TypeCheckboxs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/TypeCheckboxs */ "./app/components/TypeCheckboxs/index.tsx");
/* harmony import */ var _HeroOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroOptions */ "./app/components/HeroSelect/HeroOptions.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./app/components/HeroSelect/hooks.tsx");
/* harmony import */ var _heroselect_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heroselect.module.css */ "./app/components/HeroSelect/heroselect.module.css");
/* harmony import */ var _heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


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
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default()["toggle-input"]),
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default().toggle),
    onClick: toggleOpen,
    role: "button",
    disabled: disabled,
    "data-open": open,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default()["toggle-input"]),
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default().arrow),
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

  var _useHooks = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.default)({
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

  console.log(heroesOrder);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DropdownToggle, {
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
      lineNumber: 121,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default().anchor),
      "data-open": open,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default().menu),
        "data-nobgcolor": noDropdown,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_TypeCheckboxs__WEBPACK_IMPORTED_MODULE_2__.default, {
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
          lineNumber: 133,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default()["stats-buttons"]),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
            children: "\u6392\u5E8F\u4F9D\u64DA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByHP,
            onClick: toggleSortByHp,
            children: "HP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByAtk,
            onClick: toggleSortByAtk,
            children: "\u653B\u64CA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortBySpd,
            onClick: toggleSortBySpd,
            children: "\u901F\u5EA6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByDef,
            onClick: toggleSortByDef,
            children: "\u9632\u5B88"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByRes,
            onClick: toggleSortByRes,
            children: "\u9B54\u9632"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default().list),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroOptions__WEBPACK_IMPORTED_MODULE_3__.default, {
            heroId: heroId,
            heroes: computedHeroes,
            onSelect: handleOnSelect,
            heroesOrder: heroesOrder
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, this);
}

_s(HeroSelect, "hE8iBadZ3GQtq62438ZoCgB4PNA=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_4__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9pbmRleC50c3giXSwibmFtZXMiOlsiRHJvcGRvd25Ub2dnbGUiLCJub0Ryb3Bkb3duIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInBsYWNlaG9sZGVyIiwib3BlbiIsInRvZ2dsZU9wZW4iLCJvbklucHV0Q2xpY2siLCJvbkNoYW5nZUZpbHRlciIsInN0eWxlcyIsIkhlcm9TZWxlY3QiLCJoZXJvSWQiLCJvblNlbGVjdCIsIm5vU3RhdCIsInJlc3BsZW5kZW50IiwidXNlSG9va3MiLCJoYW5kbGVPblNlbGVjdCIsImFsbENoZWNrZWQiLCJhbGxJbmRldGVybWluYXRlZCIsInRvZ2dsZUFsbCIsIm1vdmVUeXBlRmlsdGVyIiwidG9nZ2xlTW92ZVR5cGUiLCJ3ZWFwb25UeXBlRmlsdGVyIiwidG9nZ2xlV2VhcG9uVHlwZSIsImlzUmFyaXR5NSIsInRvZ2dsZVJhcml0eTUiLCJpc1Jhcml0eTQiLCJ0b2dnbGVSYXJpdHk0IiwiaXNHcmFpbCIsInRvZ2dsZUdyYWlsIiwiaXNEdW8iLCJ0b2dnbGVEdW8iLCJpc0RhbmNlciIsInRvZ2dsZURhbmNlciIsInNvcnRCeUhQIiwidG9nZ2xlU29ydEJ5SHAiLCJzb3J0QnlBdGsiLCJ0b2dnbGVTb3J0QnlBdGsiLCJzb3J0QnlTcGQiLCJ0b2dnbGVTb3J0QnlTcGQiLCJzb3J0QnlEZWYiLCJ0b2dnbGVTb3J0QnlEZWYiLCJzb3J0QnlSZXMiLCJ0b2dnbGVTb3J0QnlSZXMiLCJjb21wdXRlZEhlcm9lcyIsImhlcm9lc09yZGVyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxPQWtCRztBQUFBLE1BakJEQyxVQWlCQyxRQWpCREEsVUFpQkM7QUFBQSxNQWhCREMsUUFnQkMsUUFoQkRBLFFBZ0JDO0FBQUEsTUFmREMsUUFl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QUFoQjtBQUFBLGlDQUNFLDhEQUFDLGlEQUFEO0FBQ0Usa0JBQU0sRUFBRUUsTUFEVjtBQUVFLGtCQUFNLEVBQUVpQyxjQUZWO0FBR0Usb0JBQVEsRUFBRTVCLGNBSFo7QUFJRSx1QkFBVyxFQUFFNkI7QUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBK0REOztHQTNIUW5DLFU7VUF3REhLLDJDOzs7TUF4REdMLFU7QUE2SFQsK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci42MTNmOGY2OGFiZDI0OWFiOGFlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IE11dGFibGVSZWZPYmplY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVHlwZUNoZWNrYm94cyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMnO1xuaW1wb3J0IEhlcm9PcHRpb25zIGZyb20gJy4vSGVyb09wdGlvbnMnO1xuaW1wb3J0IHVzZUhvb2tzIGZyb20gJy4vaG9va3MnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlcm9zZWxlY3QubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIERyb3Bkb3duVG9nZ2xlKHtcbiAgbm9Ecm9wZG93bixcbiAgaW5wdXRSZWYsXG4gIGRpc2FibGVkLFxuICBwbGFjZWhvbGRlcixcbiAgb3BlbixcbiAgdG9nZ2xlT3BlbixcbiAgb25JbnB1dENsaWNrLFxuICBvbkNoYW5nZUZpbHRlcixcbn06IHtcbiAgbm9Ecm9wZG93bj86IGJvb2xlYW47XG4gIGlucHV0UmVmOiBNdXRhYmxlUmVmT2JqZWN0PEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgb3BlbjogYm9vbGVhbjtcbiAgdG9nZ2xlT3BlbjogKCkgPT4gdm9pZDtcbiAgb25JbnB1dENsaWNrOiAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQsIEV2ZW50PikgPT4gdm9pZDtcbiAgb25DaGFuZ2VGaWx0ZXI6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XG59KSB7XG4gIGlmIChub0Ryb3Bkb3duKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1sndG9nZ2xlLWlucHV0J119XG4gICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi6Ly45YWl5ZCN5a2XL+eoseiZn1wiXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUZpbHRlcn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgLz5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9nZ2xlfVxuICAgICAgb25DbGljaz17dG9nZ2xlT3Blbn1cbiAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgZGF0YS1vcGVuPXtvcGVufVxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1sndG9nZ2xlLWlucHV0J119XG4gICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17cGxhY2Vob2xkZXJ9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgb25DbGljaz17b25JbnB1dENsaWNrfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VGaWx0ZXJ9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIC8+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd30+4pa8PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBIZXJvU2VsZWN0KHtcbiAgaGVyb0lkLFxuICBvblNlbGVjdCxcbiAgbm9Ecm9wZG93biA9IGZhbHNlLFxuICBub1N0YXQgPSBmYWxzZSxcbiAgcmVzcGxlbmRlbnQsXG59OiB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBvblNlbGVjdDogKG5ld0hlcm9JZDogc3RyaW5nKSA9PiB2b2lkO1xuICBub0Ryb3Bkb3duPzogYm9vbGVhbjtcbiAgbm9TdGF0PzogYm9vbGVhbjtcbiAgcmVzcGxlbmRlbnQ/OiBib29sZWFuO1xufSkge1xuICBjb25zdCB7XG4gICAgLyoqIGRyb3Bkb3duIGNvbnRyb2wgKi9cbiAgICBpbnB1dFJlZixcbiAgICBvcGVuLFxuICAgIHRvZ2dsZU9wZW4sXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGlzYWJsZWQsXG4gICAgb25JbnB1dENsaWNrLFxuICAgIGhhbmRsZU9uU2VsZWN0LFxuICAgIC8qKiBmaWx0ZXJpbmcgd2l0aCB0ZXh0ICovXG4gICAgb25DaGFuZ2VGaWx0ZXIsXG4gICAgLyoqIHR5cGVjaGVja2JveCAqL1xuICAgIGFsbENoZWNrZWQsXG4gICAgYWxsSW5kZXRlcm1pbmF0ZWQsXG4gICAgdG9nZ2xlQWxsLFxuICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgIHRvZ2dsZU1vdmVUeXBlLFxuICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlV2VhcG9uVHlwZSxcbiAgICBpc1Jhcml0eTUsXG4gICAgdG9nZ2xlUmFyaXR5NSxcbiAgICBpc1Jhcml0eTQsXG4gICAgdG9nZ2xlUmFyaXR5NCxcbiAgICBpc0dyYWlsLFxuICAgIHRvZ2dsZUdyYWlsLFxuICAgIGlzRHVvLFxuICAgIHRvZ2dsZUR1byxcbiAgICBpc0RhbmNlcixcbiAgICB0b2dnbGVEYW5jZXIsXG4gICAgLyoqIHNvcnRpbmcgKi9cbiAgICBzb3J0QnlIUCxcbiAgICB0b2dnbGVTb3J0QnlIcCxcbiAgICBzb3J0QnlBdGssXG4gICAgdG9nZ2xlU29ydEJ5QXRrLFxuICAgIHNvcnRCeVNwZCxcbiAgICB0b2dnbGVTb3J0QnlTcGQsXG4gICAgc29ydEJ5RGVmLFxuICAgIHRvZ2dsZVNvcnRCeURlZixcbiAgICBzb3J0QnlSZXMsXG4gICAgdG9nZ2xlU29ydEJ5UmVzLFxuICAgIC8qKiByZW5kZXJpbmcgKi9cbiAgICBjb21wdXRlZEhlcm9lcyxcbiAgICBoZXJvZXNPcmRlcixcbiAgfSA9IHVzZUhvb2tzKHsgaGVyb0lkLCBub0Ryb3Bkb3duLCBub1N0YXQsIG9uU2VsZWN0LCByZXNwbGVuZGVudCB9KTtcblxuICBjb25zb2xlLmxvZyhoZXJvZXNPcmRlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8RHJvcGRvd25Ub2dnbGVcbiAgICAgICAgbm9Ecm9wZG93bj17bm9Ecm9wZG93bn1cbiAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgdG9nZ2xlT3Blbj17dG9nZ2xlT3Blbn1cbiAgICAgICAgb25JbnB1dENsaWNrPXtvbklucHV0Q2xpY2t9XG4gICAgICAgIG9uQ2hhbmdlRmlsdGVyPXtvbkNoYW5nZUZpbHRlcn1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuY2hvcn0gZGF0YS1vcGVuPXtvcGVufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZW51fSBkYXRhLW5vYmdjb2xvcj17bm9Ecm9wZG93bn0+XG4gICAgICAgICAgPFR5cGVDaGVja2JveHNcbiAgICAgICAgICAgIGFsbENoZWNrZWQ9e2FsbENoZWNrZWR9XG4gICAgICAgICAgICBhbGxJbmRldGVybWluYXRlZD17YWxsSW5kZXRlcm1pbmF0ZWR9XG4gICAgICAgICAgICB0b2dnbGVBbGw9e3RvZ2dsZUFsbH1cbiAgICAgICAgICAgIG1vdmVUeXBlRmlsdGVyPXttb3ZlVHlwZUZpbHRlcn1cbiAgICAgICAgICAgIHRvZ2dsZU1vdmVUeXBlPXt0b2dnbGVNb3ZlVHlwZX1cbiAgICAgICAgICAgIHdlYXBvblR5cGVGaWx0ZXI9e3dlYXBvblR5cGVGaWx0ZXJ9XG4gICAgICAgICAgICB0b2dnbGVXZWFwb25UeXBlPXt0b2dnbGVXZWFwb25UeXBlfVxuICAgICAgICAgICAgaXNSYXJpdHk1PXtpc1Jhcml0eTV9XG4gICAgICAgICAgICB0b2dnbGVSYXJpdHk1PXt0b2dnbGVSYXJpdHk1fVxuICAgICAgICAgICAgaXNSYXJpdHk0PXtpc1Jhcml0eTR9XG4gICAgICAgICAgICB0b2dnbGVSYXJpdHk0PXt0b2dnbGVSYXJpdHk0fVxuICAgICAgICAgICAgaXNHcmFpbD17aXNHcmFpbH1cbiAgICAgICAgICAgIHRvZ2dsZUdyYWlsPXt0b2dnbGVHcmFpbH1cbiAgICAgICAgICAgIGlzRHVvPXtpc0R1b31cbiAgICAgICAgICAgIHRvZ2dsZUR1bz17dG9nZ2xlRHVvfVxuICAgICAgICAgICAgaXNEYW5jZXI9e2lzRGFuY2VyfVxuICAgICAgICAgICAgdG9nZ2xlRGFuY2VyPXt0b2dnbGVEYW5jZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydzdGF0cy1idXR0b25zJ119PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+5o6S5bqP5L6d5pOaPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtYWN0aXZlPXtzb3J0QnlIUH0gb25DbGljaz17dG9nZ2xlU29ydEJ5SHB9PlxuICAgICAgICAgICAgICBIUFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtYWN0aXZlPXtzb3J0QnlBdGt9IG9uQ2xpY2s9e3RvZ2dsZVNvcnRCeUF0a30+XG4gICAgICAgICAgICAgIOaUu+aTilxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtYWN0aXZlPXtzb3J0QnlTcGR9IG9uQ2xpY2s9e3RvZ2dsZVNvcnRCeVNwZH0+XG4gICAgICAgICAgICAgIOmAn+W6plxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtYWN0aXZlPXtzb3J0QnlEZWZ9IG9uQ2xpY2s9e3RvZ2dsZVNvcnRCeURlZn0+XG4gICAgICAgICAgICAgIOmYsuWuiFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtYWN0aXZlPXtzb3J0QnlSZXN9IG9uQ2xpY2s9e3RvZ2dsZVNvcnRCeVJlc30+XG4gICAgICAgICAgICAgIOmtlOmYslxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAgICAgIDxIZXJvT3B0aW9uc1xuICAgICAgICAgICAgICBoZXJvSWQ9e2hlcm9JZH1cbiAgICAgICAgICAgICAgaGVyb2VzPXtjb21wdXRlZEhlcm9lc31cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e2hhbmRsZU9uU2VsZWN0fVxuICAgICAgICAgICAgICBoZXJvZXNPcmRlcj17aGVyb2VzT3JkZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VsZWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==