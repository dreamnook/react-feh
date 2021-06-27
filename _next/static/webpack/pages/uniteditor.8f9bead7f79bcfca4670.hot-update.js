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
      lineNumber: 119,
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
          lineNumber: 131,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default()["stats-buttons"]),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
            children: "\u6392\u5E8F\u4F9D\u64DA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByHP,
            onClick: toggleSortByHp,
            children: "HP"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByAtk,
            onClick: toggleSortByAtk,
            children: "\u653B\u64CA"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortBySpd,
            onClick: toggleSortBySpd,
            children: "\u901F\u5EA6"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByDef,
            onClick: toggleSortByDef,
            children: "\u9632\u5B88"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            "data-active": sortByRes,
            onClick: toggleSortByRes,
            children: "\u9B54\u9632"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
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
            lineNumber: 169,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9pbmRleC50c3giXSwibmFtZXMiOlsiRHJvcGRvd25Ub2dnbGUiLCJub0Ryb3Bkb3duIiwiaW5wdXRSZWYiLCJkaXNhYmxlZCIsInBsYWNlaG9sZGVyIiwib3BlbiIsInRvZ2dsZU9wZW4iLCJvbklucHV0Q2xpY2siLCJvbkNoYW5nZUZpbHRlciIsInN0eWxlcyIsIkhlcm9TZWxlY3QiLCJoZXJvSWQiLCJvblNlbGVjdCIsIm5vU3RhdCIsInJlc3BsZW5kZW50IiwidXNlSG9va3MiLCJoYW5kbGVPblNlbGVjdCIsImFsbENoZWNrZWQiLCJhbGxJbmRldGVybWluYXRlZCIsInRvZ2dsZUFsbCIsIm1vdmVUeXBlRmlsdGVyIiwidG9nZ2xlTW92ZVR5cGUiLCJ3ZWFwb25UeXBlRmlsdGVyIiwidG9nZ2xlV2VhcG9uVHlwZSIsImlzUmFyaXR5NSIsInRvZ2dsZVJhcml0eTUiLCJpc1Jhcml0eTQiLCJ0b2dnbGVSYXJpdHk0IiwiaXNHcmFpbCIsInRvZ2dsZUdyYWlsIiwiaXNEdW8iLCJ0b2dnbGVEdW8iLCJpc0RhbmNlciIsInRvZ2dsZURhbmNlciIsInNvcnRCeUhQIiwidG9nZ2xlU29ydEJ5SHAiLCJzb3J0QnlBdGsiLCJ0b2dnbGVTb3J0QnlBdGsiLCJzb3J0QnlTcGQiLCJ0b2dnbGVTb3J0QnlTcGQiLCJzb3J0QnlEZWYiLCJ0b2dnbGVTb3J0QnlEZWYiLCJzb3J0QnlSZXMiLCJ0b2dnbGVTb3J0QnlSZXMiLCJjb21wdXRlZEhlcm9lcyIsImhlcm9lc09yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULE9Ba0JHO0FBQUEsTUFqQkRDLFVBaUJDLFFBakJEQSxVQWlCQztBQUFBLE1BaEJEQyxRQWdCQyxRQWhCREEsUUFnQkM7QUFBQSxNQWZEQyxRQWVDLFFBZkRBLFFBZUM7QUFB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O0FBRUUsa0JBQU0sRUFBRWlDLGNBRlY7QUFHRSxvQkFBUSxFQUFFNUIsY0FIWjtBQUlFLHVCQUFXLEVBQUU2QjtBQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErREQ7O0dBekhRbkMsVTtVQXdESEssMkM7OztNQXhER0wsVTtBQTJIVCwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjhmOWJlYWQ3Zjc5YmNmY2E0NjcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgTXV0YWJsZVJlZk9iamVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUeXBlQ2hlY2tib3hzIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cyc7XG5pbXBvcnQgSGVyb09wdGlvbnMgZnJvbSAnLi9IZXJvT3B0aW9ucyc7XG5pbXBvcnQgdXNlSG9va3MgZnJvbSAnLi9ob29rcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVyb3NlbGVjdC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gRHJvcGRvd25Ub2dnbGUoe1xuICBub0Ryb3Bkb3duLFxuICBpbnB1dFJlZixcbiAgZGlzYWJsZWQsXG4gIHBsYWNlaG9sZGVyLFxuICBvcGVuLFxuICB0b2dnbGVPcGVuLFxuICBvbklucHV0Q2xpY2ssXG4gIG9uQ2hhbmdlRmlsdGVyLFxufToge1xuICBub0Ryb3Bkb3duPzogYm9vbGVhbjtcbiAgaW5wdXRSZWY6IE11dGFibGVSZWZPYmplY3Q8SFRNTElucHV0RWxlbWVudD47XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBvcGVuOiBib29sZWFuO1xuICB0b2dnbGVPcGVuOiAoKSA9PiB2b2lkO1xuICBvbklucHV0Q2xpY2s6IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudCwgRXZlbnQ+KSA9PiB2b2lkO1xuICBvbkNoYW5nZUZpbHRlcjogKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbn0pIHtcbiAgaWYgKG5vRHJvcGRvd24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWyd0b2dnbGUtaW5wdXQnXX1cbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCLovLjlhaXlkI3lrZcv56ix6JmfXCJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRmlsdGVyfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGV9XG4gICAgICBvbkNsaWNrPXt0b2dnbGVPcGVufVxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBkYXRhLW9wZW49e29wZW59XG4gICAgPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzWyd0b2dnbGUtaW5wdXQnXX1cbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBvbkNsaWNrPXtvbklucHV0Q2xpY2t9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUZpbHRlcn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgLz5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFycm93fT7ilrw8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEhlcm9TZWxlY3Qoe1xuICBoZXJvSWQsXG4gIG9uU2VsZWN0LFxuICBub0Ryb3Bkb3duID0gZmFsc2UsXG4gIG5vU3RhdCA9IGZhbHNlLFxuICByZXNwbGVuZGVudCxcbn06IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIG9uU2VsZWN0OiAobmV3SGVyb0lkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG5vRHJvcGRvd24/OiBib29sZWFuO1xuICBub1N0YXQ/OiBib29sZWFuO1xuICByZXNwbGVuZGVudD86IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IHtcbiAgICAvKiogZHJvcGRvd24gY29udHJvbCAqL1xuICAgIGlucHV0UmVmLFxuICAgIG9wZW4sXG4gICAgdG9nZ2xlT3BlbixcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkaXNhYmxlZCxcbiAgICBvbklucHV0Q2xpY2ssXG4gICAgaGFuZGxlT25TZWxlY3QsXG4gICAgLyoqIGZpbHRlcmluZyB3aXRoIHRleHQgKi9cbiAgICBvbkNoYW5nZUZpbHRlcixcbiAgICAvKiogdHlwZWNoZWNrYm94ICovXG4gICAgYWxsQ2hlY2tlZCxcbiAgICBhbGxJbmRldGVybWluYXRlZCxcbiAgICB0b2dnbGVBbGwsXG4gICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlTW92ZVR5cGUsXG4gICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICB0b2dnbGVXZWFwb25UeXBlLFxuICAgIGlzUmFyaXR5NSxcbiAgICB0b2dnbGVSYXJpdHk1LFxuICAgIGlzUmFyaXR5NCxcbiAgICB0b2dnbGVSYXJpdHk0LFxuICAgIGlzR3JhaWwsXG4gICAgdG9nZ2xlR3JhaWwsXG4gICAgaXNEdW8sXG4gICAgdG9nZ2xlRHVvLFxuICAgIGlzRGFuY2VyLFxuICAgIHRvZ2dsZURhbmNlcixcbiAgICAvKiogc29ydGluZyAqL1xuICAgIHNvcnRCeUhQLFxuICAgIHRvZ2dsZVNvcnRCeUhwLFxuICAgIHNvcnRCeUF0ayxcbiAgICB0b2dnbGVTb3J0QnlBdGssXG4gICAgc29ydEJ5U3BkLFxuICAgIHRvZ2dsZVNvcnRCeVNwZCxcbiAgICBzb3J0QnlEZWYsXG4gICAgdG9nZ2xlU29ydEJ5RGVmLFxuICAgIHNvcnRCeVJlcyxcbiAgICB0b2dnbGVTb3J0QnlSZXMsXG4gICAgLyoqIHJlbmRlcmluZyAqL1xuICAgIGNvbXB1dGVkSGVyb2VzLFxuICAgIGhlcm9lc09yZGVyLFxuICB9ID0gdXNlSG9va3MoeyBoZXJvSWQsIG5vRHJvcGRvd24sIG5vU3RhdCwgb25TZWxlY3QsIHJlc3BsZW5kZW50IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPERyb3Bkb3duVG9nZ2xlXG4gICAgICAgIG5vRHJvcGRvd249e25vRHJvcGRvd259XG4gICAgICAgIGlucHV0UmVmPXtpbnB1dFJlZn1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIHRvZ2dsZU9wZW49e3RvZ2dsZU9wZW59XG4gICAgICAgIG9uSW5wdXRDbGljaz17b25JbnB1dENsaWNrfVxuICAgICAgICBvbkNoYW5nZUZpbHRlcj17b25DaGFuZ2VGaWx0ZXJ9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbmNob3J9IGRhdGEtb3Blbj17b3Blbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0gZGF0YS1ub2JnY29sb3I9e25vRHJvcGRvd259PlxuICAgICAgICAgIDxUeXBlQ2hlY2tib3hzXG4gICAgICAgICAgICBhbGxDaGVja2VkPXthbGxDaGVja2VkfVxuICAgICAgICAgICAgYWxsSW5kZXRlcm1pbmF0ZWQ9e2FsbEluZGV0ZXJtaW5hdGVkfVxuICAgICAgICAgICAgdG9nZ2xlQWxsPXt0b2dnbGVBbGx9XG4gICAgICAgICAgICBtb3ZlVHlwZUZpbHRlcj17bW92ZVR5cGVGaWx0ZXJ9XG4gICAgICAgICAgICB0b2dnbGVNb3ZlVHlwZT17dG9nZ2xlTW92ZVR5cGV9XG4gICAgICAgICAgICB3ZWFwb25UeXBlRmlsdGVyPXt3ZWFwb25UeXBlRmlsdGVyfVxuICAgICAgICAgICAgdG9nZ2xlV2VhcG9uVHlwZT17dG9nZ2xlV2VhcG9uVHlwZX1cbiAgICAgICAgICAgIGlzUmFyaXR5NT17aXNSYXJpdHk1fVxuICAgICAgICAgICAgdG9nZ2xlUmFyaXR5NT17dG9nZ2xlUmFyaXR5NX1cbiAgICAgICAgICAgIGlzUmFyaXR5ND17aXNSYXJpdHk0fVxuICAgICAgICAgICAgdG9nZ2xlUmFyaXR5ND17dG9nZ2xlUmFyaXR5NH1cbiAgICAgICAgICAgIGlzR3JhaWw9e2lzR3JhaWx9XG4gICAgICAgICAgICB0b2dnbGVHcmFpbD17dG9nZ2xlR3JhaWx9XG4gICAgICAgICAgICBpc0R1bz17aXNEdW99XG4gICAgICAgICAgICB0b2dnbGVEdW89e3RvZ2dsZUR1b31cbiAgICAgICAgICAgIGlzRGFuY2VyPXtpc0RhbmNlcn1cbiAgICAgICAgICAgIHRvZ2dsZURhbmNlcj17dG9nZ2xlRGFuY2VyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1snc3RhdHMtYnV0dG9ucyddfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PuaOkuW6j+S+neaTmjwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWFjdGl2ZT17c29ydEJ5SFB9IG9uQ2xpY2s9e3RvZ2dsZVNvcnRCeUhwfT5cbiAgICAgICAgICAgICAgSFBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWFjdGl2ZT17c29ydEJ5QXRrfSBvbkNsaWNrPXt0b2dnbGVTb3J0QnlBdGt9PlxuICAgICAgICAgICAgICDmlLvmk4pcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWFjdGl2ZT17c29ydEJ5U3BkfSBvbkNsaWNrPXt0b2dnbGVTb3J0QnlTcGR9PlxuICAgICAgICAgICAgICDpgJ/luqZcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWFjdGl2ZT17c29ydEJ5RGVmfSBvbkNsaWNrPXt0b2dnbGVTb3J0QnlEZWZ9PlxuICAgICAgICAgICAgICDpmLLlrohcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWFjdGl2ZT17c29ydEJ5UmVzfSBvbkNsaWNrPXt0b2dnbGVTb3J0QnlSZXN9PlxuICAgICAgICAgICAgICDprZTpmLJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICAgICAgICA8SGVyb09wdGlvbnNcbiAgICAgICAgICAgICAgaGVyb0lkPXtoZXJvSWR9XG4gICAgICAgICAgICAgIGhlcm9lcz17Y29tcHV0ZWRIZXJvZXN9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXtoYW5kbGVPblNlbGVjdH1cbiAgICAgICAgICAgICAgaGVyb2VzT3JkZXI9e2hlcm9lc09yZGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlbGVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=