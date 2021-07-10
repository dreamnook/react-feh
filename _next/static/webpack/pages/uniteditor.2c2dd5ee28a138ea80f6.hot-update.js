self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/components/HeroSelect/HeroOptions.tsx":
/*!***************************************************!*\
  !*** ./app/components/HeroSelect/HeroOptions.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized-auto-sizer */ "./node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/HeroHeader */ "./app/components/HeroHeader/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\HeroSelect\\HeroOptions.tsx",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function RenderHeroOption(_ref) {
  var index = _ref.index,
      style = _ref.style,
      data = _ref.data;
  var heroId = data.heroId,
      heroes = data.heroes,
      heroesOrder = data.heroesOrder,
      onClick = data.onClick;
  var hero = heroes[index];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    disabled: heroId === hero.id,
    "data-active": heroId === hero.id,
    value: hero.id,
    hidden: hero.hidden,
    onClick: onClick,
    style: _objectSpread(_objectSpread({}, style), {}, {
      order: heroesOrder[hero.id]
    }),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread({
      id: hero.id
    }, hero), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, hero.id, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_c = RenderHeroOption;

function HeroOptions(_ref2) {
  _s();

  var _this = this;

  var heroId = _ref2.heroId,
      heroes = _ref2.heroes,
      heroesOrder = _ref2.heroesOrder,
      onSelect = _ref2.onSelect;
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (event) {
    event.stopPropagation();
    onSelect(event.currentTarget.value);
  }, [onSelect]);
  var listDataProp = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    return {
      heroId: heroId,
      heroes: heroes,
      heroesOrder: heroesOrder,
      onClick: onClick
    };
  }, [heroId, heroes, heroesOrder, onClick]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: function children(_ref3) {
        var width = _ref3.width;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_6__.FixedSizeList, {
          width: width,
          height: 160,
          itemCount: heroes.length,
          itemSize: 10,
          itemData: listDataProp,
          children: RenderHeroOption
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "987587854",
      children: "button.jsx-987587854{display:block;width:100%;text-align:left;background-color:transparent;padding:0;}button.jsx-987587854:disabled,button[data-active='true'].jsx-987587854{cursor:default;pointer-events:none;background-color:#476d7c;}button.jsx-987587854:hover{background-color:#77abb7aa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcSGVyb1NlbGVjdFxcSGVyb09wdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGa0IsQUFHeUIsQUFRQyxBQUtZLGNBWmhCLENBUVMsVUFQSixFQVlsQixRQUoyQixNQVBJLG1CQVEvQixVQVBZLFVBQ1oiLCJmaWxlIjoiRjpcXHJlcG9zXFxyZWFjdC1mZWgtc2l0ZVxcYXBwXFxjb21wb25lbnRzXFxIZXJvU2VsZWN0XFxIZXJvT3B0aW9ucy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vLCBTeW50aGV0aWNFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0LCBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgQXV0b1Jlc2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgSGVyb0hlYWRlciBmcm9tICdAL2FwcC9jb21wb25lbnRzL0hlcm9IZWFkZXInO1xuaW1wb3J0IHsgVEhlcm9PcHRpb24gfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuXG5mdW5jdGlvbiBSZW5kZXJIZXJvT3B0aW9uKHtcbiAgaW5kZXgsXG4gIHN0eWxlLFxuICBkYXRhLFxufTogTGlzdENoaWxkQ29tcG9uZW50UHJvcHM8e1xuICBoZXJvSWQ6IHN0cmluZztcbiAgaGVyb2VzOiBUSGVyb09wdGlvbltdO1xuICBoZXJvZXNPcmRlcjogeyBbaGVyb0lkOiBzdHJpbmddOiBudW1iZXIgfTtcbiAgb25DbGljazogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQ7XG59Pikge1xuICBjb25zdCB7IGhlcm9JZCwgaGVyb2VzLCBoZXJvZXNPcmRlciwgb25DbGljayB9ID0gZGF0YTtcbiAgY29uc3QgaGVybyA9IGhlcm9lc1tpbmRleF07XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAga2V5PXtoZXJvLmlkfVxuICAgICAgZGlzYWJsZWQ9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgIGRhdGEtYWN0aXZlPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICB2YWx1ZT17aGVyby5pZH1cbiAgICAgIGhpZGRlbj17aGVyby5oaWRkZW59XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGUsIG9yZGVyOiBoZXJvZXNPcmRlcltoZXJvLmlkXSB9fVxuICAgID5cbiAgICAgIDxIZXJvSGVhZGVyIGlkPXtoZXJvLmlkfSB7Li4uaGVyb30gLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVyb09wdGlvbnMoe1xuICBoZXJvSWQsXG4gIGhlcm9lcyxcbiAgaGVyb2VzT3JkZXIsXG4gIG9uU2VsZWN0LFxufToge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgaGVyb2VzOiBUSGVyb09wdGlvbltdO1xuICBoZXJvZXNPcmRlcjogeyBbaGVyb0lkOiBzdHJpbmddOiBudW1iZXIgfTtcbiAgb25TZWxlY3Q6IChuZXdIZXJvSWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uU2VsZWN0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIH0sXG4gICAgW29uU2VsZWN0XSxcbiAgKTtcbiAgY29uc3QgbGlzdERhdGFQcm9wID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgaGVyb0lkLFxuICAgICAgaGVyb2VzLFxuICAgICAgaGVyb2VzT3JkZXIsXG4gICAgICBvbkNsaWNrLFxuICAgIH0pLFxuICAgIFtoZXJvSWQsIGhlcm9lcywgaGVyb2VzT3JkZXIsIG9uQ2xpY2tdLFxuICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXV0b1Jlc2l6ZXI+XG4gICAgICAgIHsoeyB3aWR0aCB9KSA9PiAoXG4gICAgICAgICAgPEZpeGVkU2l6ZUxpc3RcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17MTYwfVxuICAgICAgICAgICAgaXRlbUNvdW50PXtoZXJvZXMubGVuZ3RofVxuICAgICAgICAgICAgaXRlbVNpemU9ezEwfVxuICAgICAgICAgICAgaXRlbURhdGE9e2xpc3REYXRhUHJvcH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7UmVuZGVySGVyb09wdGlvbn1cbiAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICl9XG4gICAgICA8L0F1dG9SZXNpemVyPlxuICAgICAgey8qIHtoZXJvZXMubWFwKChoZXJvKSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2hlcm8uaWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgICAgICBkYXRhLWFjdGl2ZT17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgICAgIHZhbHVlPXtoZXJvLmlkfVxuICAgICAgICAgIGhpZGRlbj17aGVyby5oaWRkZW59XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBzdHlsZT17eyBvcmRlcjogaGVyb2VzT3JkZXJbaGVyby5pZF0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIZXJvSGVhZGVyIGlkPXtoZXJvLmlkfSB7Li4uaGVyb30gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApKX0gKi99XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpkaXNhYmxlZCxcbiAgICAgICAgYnV0dG9uW2RhdGEtYWN0aXZlPSd0cnVlJ10ge1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc2ZDdjO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3YWJiN2FhO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVyb09wdGlvbnMpO1xuIl19 */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\HeroSelect\\\\HeroOptions.tsx */"
    }, void 0, false, void 0, this)]
  }, void 0, true);
}

_s(HeroOptions, "pDK2Ot9MIJNgjgWLBnI3jt4Gc98=");

_c2 = HeroOptions;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(HeroOptions));

var _c, _c2, _c3;

$RefreshReg$(_c, "RenderHeroOption");
$RefreshReg$(_c2, "HeroOptions");
$RefreshReg$(_c3, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9IZXJvT3B0aW9ucy50c3giXSwibmFtZXMiOlsiUmVuZGVySGVyb09wdGlvbiIsImluZGV4Iiwic3R5bGUiLCJkYXRhIiwiaGVyb0lkIiwiaGVyb2VzIiwiaGVyb2VzT3JkZXIiLCJvbkNsaWNrIiwiaGVybyIsImlkIiwiaGlkZGVuIiwib3JkZXIiLCJIZXJvT3B0aW9ucyIsIm9uU2VsZWN0IiwidXNlQ2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImxpc3REYXRhUHJvcCIsInVzZU1lbW8iLCJ3aWR0aCIsImxlbmd0aCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxnQkFBVCxPQVNJO0FBQUEsTUFSRkMsS0FRRSxRQVJGQSxLQVFFO0FBQUEsTUFQRkMsS0FPRSxRQVBGQSxLQU9FO0FBQUEsTUFORkMsSUFNRSxRQU5GQSxJQU1FO0FBQUEsTUFDTUMsTUFETixHQUMrQ0QsSUFEL0MsQ0FDTUMsTUFETjtBQUFBLE1BQ2NDLE1BRGQsR0FDK0NGLElBRC9DLENBQ2NFLE1BRGQ7QUFBQSxNQUNzQkMsV0FEdEIsR0FDK0NILElBRC9DLENBQ3NCRyxXQUR0QjtBQUFBLE1BQ21DQyxPQURuQyxHQUMrQ0osSUFEL0MsQ0FDbUNJLE9BRG5DO0FBRUYsTUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNKLEtBQUQsQ0FBbkI7QUFDQSxzQkFDRTtBQUVFLFlBQVEsRUFBRUcsTUFBTSxLQUFLSSxJQUFJLENBQUNDLEVBRjVCO0FBR0UsbUJBQWFMLE1BQU0sS0FBS0ksSUFBSSxDQUFDQyxFQUgvQjtBQUlFLFNBQUssRUFBRUQsSUFBSSxDQUFDQyxFQUpkO0FBS0UsVUFBTSxFQUFFRCxJQUFJLENBQUNFLE1BTGY7QUFNRSxXQUFPLEVBQUVILE9BTlg7QUFPRSxTQUFLLGtDQUFPTCxLQUFQO0FBQWNTLFdBQUssRUFBRUwsV0FBVyxDQUFDRSxJQUFJLENBQUNDLEVBQU47QUFBaEMsTUFQUDtBQUFBLDJCQVNFLDhEQUFDLCtEQUFEO0FBQVksUUFBRSxFQUFFRCxJQUFJLENBQUNDO0FBQXJCLE9BQTZCRCxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEYsS0FDT0EsSUFBSSxDQUFDQyxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztLQXpCUVQsZ0I7O0FBMkJULFNBQVNZLFdBQVQsUUFVRztBQUFBOztBQUFBOztBQUFBLE1BVERSLE1BU0MsU0FUREEsTUFTQztBQUFBLE1BUkRDLE1BUUMsU0FSREEsTUFRQztBQUFBLE1BUERDLFdBT0MsU0FQREEsV0FPQztBQUFBLE1BTkRPLFFBTUMsU0FOREEsUUFNQztBQUNELE1BQU1OLE9BQU8sR0FBR08sa0RBQVcsQ0FDekIsVUFBQ0MsS0FBRCxFQUE4QztBQUM1Q0EsU0FBSyxDQUFDQyxlQUFOO0FBQ0FILFlBQVEsQ0FBQ0UsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxLQUFyQixDQUFSO0FBQ0QsR0FKd0IsRUFLekIsQ0FBQ0wsUUFBRCxDQUx5QixDQUEzQjtBQU9BLE1BQU1NLFlBQVksR0FBR0MsOENBQU8sQ0FDMUI7QUFBQSxXQUFPO0FBQ0xoQixZQUFNLEVBQU5BLE1BREs7QUFFTEMsWUFBTSxFQUFOQSxNQUZLO0FBR0xDLGlCQUFXLEVBQVhBLFdBSEs7QUFJTEMsYUFBTyxFQUFQQTtBQUpLLEtBQVA7QUFBQSxHQUQwQixFQU8xQixDQUFDSCxNQUFELEVBQVNDLE1BQVQsRUFBaUJDLFdBQWpCLEVBQThCQyxPQUE5QixDQVAwQixDQUE1QjtBQVNBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsaUVBQUQ7QUFBQSxnQkFDRztBQUFBLFlBQUdjLEtBQUgsU0FBR0EsS0FBSDtBQUFBLDRCQUNDLDhEQUFDLHVEQUFEO0FBQ0UsZUFBSyxFQUFFQSxLQURUO0FBRUUsZ0JBQU0sRUFBRSxHQUZWO0FBR0UsbUJBQVMsRUFBRWhCLE1BQU0sQ0FBQ2lCLE1BSHBCO0FBSUUsa0JBQVEsRUFBRSxFQUpaO0FBS0Usa0JBQVEsRUFBRUgsWUFMWjtBQUFBLG9CQU9HbkI7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQWdERDs7R0EzRVFZLFc7O01BQUFBLFc7QUE2RVQsK0RBQWUsbUJBQUFXLDJDQUFJLENBQUNYLFdBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci4yYzJkZDVlZTI4YTEzOGVhODBmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbywgU3ludGhldGljRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCwgTGlzdENoaWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuaW1wb3J0IEF1dG9SZXNpemVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuaW1wb3J0IEhlcm9IZWFkZXIgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9IZXJvSGVhZGVyJztcbmltcG9ydCB7IFRIZXJvT3B0aW9uIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcblxuZnVuY3Rpb24gUmVuZGVySGVyb09wdGlvbih7XG4gIGluZGV4LFxuICBzdHlsZSxcbiAgZGF0YSxcbn06IExpc3RDaGlsZENvbXBvbmVudFByb3BzPHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIGhlcm9lczogVEhlcm9PcHRpb25bXTtcbiAgaGVyb2VzT3JkZXI6IHsgW2hlcm9JZDogc3RyaW5nXTogbnVtYmVyIH07XG4gIG9uQ2xpY2s6IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkO1xufT4pIHtcbiAgY29uc3QgeyBoZXJvSWQsIGhlcm9lcywgaGVyb2VzT3JkZXIsIG9uQ2xpY2sgfSA9IGRhdGE7XG4gIGNvbnN0IGhlcm8gPSBoZXJvZXNbaW5kZXhdO1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGtleT17aGVyby5pZH1cbiAgICAgIGRpc2FibGVkPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICBkYXRhLWFjdGl2ZT17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgdmFsdWU9e2hlcm8uaWR9XG4gICAgICBoaWRkZW49e2hlcm8uaGlkZGVufVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBvcmRlcjogaGVyb2VzT3JkZXJbaGVyby5pZF0gfX1cbiAgICA+XG4gICAgICA8SGVyb0hlYWRlciBpZD17aGVyby5pZH0gey4uLmhlcm99IC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEhlcm9PcHRpb25zKHtcbiAgaGVyb0lkLFxuICBoZXJvZXMsXG4gIGhlcm9lc09yZGVyLFxuICBvblNlbGVjdCxcbn06IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIGhlcm9lczogVEhlcm9PcHRpb25bXTtcbiAgaGVyb2VzT3JkZXI6IHsgW2hlcm9JZDogc3RyaW5nXTogbnVtYmVyIH07XG4gIG9uU2VsZWN0OiAobmV3SGVyb0lkOiBzdHJpbmcpID0+IHZvaWQ7XG59KSB7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvblNlbGVjdChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIFtvblNlbGVjdF0sXG4gICk7XG4gIGNvbnN0IGxpc3REYXRhUHJvcCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGhlcm9JZCxcbiAgICAgIGhlcm9lcyxcbiAgICAgIGhlcm9lc09yZGVyLFxuICAgICAgb25DbGljayxcbiAgICB9KSxcbiAgICBbaGVyb0lkLCBoZXJvZXMsIGhlcm9lc09yZGVyLCBvbkNsaWNrXSxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEF1dG9SZXNpemVyPlxuICAgICAgICB7KHsgd2lkdGggfSkgPT4gKFxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9ezE2MH1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17aGVyb2VzLmxlbmd0aH1cbiAgICAgICAgICAgIGl0ZW1TaXplPXsxMH1cbiAgICAgICAgICAgIGl0ZW1EYXRhPXtsaXN0RGF0YVByb3B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1JlbmRlckhlcm9PcHRpb259XG4gICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxuICAgICAgICApfVxuICAgICAgPC9BdXRvUmVzaXplcj5cbiAgICAgIHsvKiB7aGVyb2VzLm1hcCgoaGVybykgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAga2V5PXtoZXJvLmlkfVxuICAgICAgICAgIGRpc2FibGVkPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICAgICAgZGF0YS1hY3RpdmU9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgICAgICB2YWx1ZT17aGVyby5pZH1cbiAgICAgICAgICBoaWRkZW49e2hlcm8uaGlkZGVufVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3sgb3JkZXI6IGhlcm9lc09yZGVyW2hlcm8uaWRdIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SGVyb0hlYWRlciBpZD17aGVyby5pZH0gey4uLmhlcm99IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9ICovfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246ZGlzYWJsZWQsXG4gICAgICAgIGJ1dHRvbltkYXRhLWFjdGl2ZT0ndHJ1ZSddIHtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NmQ3YztcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3N2FiYjdhYTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhlcm9PcHRpb25zKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=