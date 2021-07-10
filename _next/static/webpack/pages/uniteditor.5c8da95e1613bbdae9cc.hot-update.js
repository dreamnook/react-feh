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
        var width = _ref3.width,
            height = _ref3.height;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_6__.FixedSizeList, {
          width: width,
          height: height,
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
      children: "button.jsx-987587854{display:block;width:100%;text-align:left;background-color:transparent;padding:0;}button.jsx-987587854:disabled,button[data-active='true'].jsx-987587854{cursor:default;pointer-events:none;background-color:#476d7c;}button.jsx-987587854:hover{background-color:#77abb7aa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxyZXBvc1xccmVhY3QtZmVoLXNpdGVcXGFwcFxcY29tcG9uZW50c1xcSGVyb1NlbGVjdFxcSGVyb09wdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGa0IsQUFHeUIsQUFRQyxBQUtZLGNBWmhCLENBUVMsVUFQSixFQVlsQixRQUoyQixNQVBJLG1CQVEvQixVQVBZLFVBQ1oiLCJmaWxlIjoiRjpcXHJlcG9zXFxyZWFjdC1mZWgtc2l0ZVxcYXBwXFxjb21wb25lbnRzXFxIZXJvU2VsZWN0XFxIZXJvT3B0aW9ucy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vLCBTeW50aGV0aWNFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0LCBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgQXV0b1Jlc2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgSGVyb0hlYWRlciBmcm9tICdAL2FwcC9jb21wb25lbnRzL0hlcm9IZWFkZXInO1xuaW1wb3J0IHsgVEhlcm9PcHRpb24gfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuXG5mdW5jdGlvbiBSZW5kZXJIZXJvT3B0aW9uKHtcbiAgaW5kZXgsXG4gIHN0eWxlLFxuICBkYXRhLFxufTogTGlzdENoaWxkQ29tcG9uZW50UHJvcHM8e1xuICBoZXJvSWQ6IHN0cmluZztcbiAgaGVyb2VzOiBUSGVyb09wdGlvbltdO1xuICBoZXJvZXNPcmRlcjogeyBbaGVyb0lkOiBzdHJpbmddOiBudW1iZXIgfTtcbiAgb25DbGljazogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQ7XG59Pikge1xuICBjb25zdCB7IGhlcm9JZCwgaGVyb2VzLCBoZXJvZXNPcmRlciwgb25DbGljayB9ID0gZGF0YTtcbiAgY29uc3QgaGVybyA9IGhlcm9lc1tpbmRleF07XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAga2V5PXtoZXJvLmlkfVxuICAgICAgZGlzYWJsZWQ9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgIGRhdGEtYWN0aXZlPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICB2YWx1ZT17aGVyby5pZH1cbiAgICAgIGhpZGRlbj17aGVyby5oaWRkZW59XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGUsIG9yZGVyOiBoZXJvZXNPcmRlcltoZXJvLmlkXSB9fVxuICAgID5cbiAgICAgIDxIZXJvSGVhZGVyIGlkPXtoZXJvLmlkfSB7Li4uaGVyb30gLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVyb09wdGlvbnMoe1xuICBoZXJvSWQsXG4gIGhlcm9lcyxcbiAgaGVyb2VzT3JkZXIsXG4gIG9uU2VsZWN0LFxufToge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgaGVyb2VzOiBUSGVyb09wdGlvbltdO1xuICBoZXJvZXNPcmRlcjogeyBbaGVyb0lkOiBzdHJpbmddOiBudW1iZXIgfTtcbiAgb25TZWxlY3Q6IChuZXdIZXJvSWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uU2VsZWN0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIH0sXG4gICAgW29uU2VsZWN0XSxcbiAgKTtcbiAgY29uc3QgbGlzdERhdGFQcm9wID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgaGVyb0lkLFxuICAgICAgaGVyb2VzLFxuICAgICAgaGVyb2VzT3JkZXIsXG4gICAgICBvbkNsaWNrLFxuICAgIH0pLFxuICAgIFtoZXJvSWQsIGhlcm9lcywgaGVyb2VzT3JkZXIsIG9uQ2xpY2tdLFxuICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXV0b1Jlc2l6ZXI+XG4gICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IChcbiAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBpdGVtQ291bnQ9e2hlcm9lcy5sZW5ndGh9XG4gICAgICAgICAgICBpdGVtU2l6ZT17MTB9XG4gICAgICAgICAgICBpdGVtRGF0YT17bGlzdERhdGFQcm9wfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtSZW5kZXJIZXJvT3B0aW9ufVxuICAgICAgICAgIDwvRml4ZWRTaXplTGlzdD5cbiAgICAgICAgKX1cbiAgICAgIDwvQXV0b1Jlc2l6ZXI+XG4gICAgICB7Lyoge2hlcm9lcy5tYXAoKGhlcm8pID0+IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGtleT17aGVyby5pZH1cbiAgICAgICAgICBkaXNhYmxlZD17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgICAgIGRhdGEtYWN0aXZlPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICAgICAgdmFsdWU9e2hlcm8uaWR9XG4gICAgICAgICAgaGlkZGVuPXtoZXJvLmhpZGRlbn1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7IG9yZGVyOiBoZXJvZXNPcmRlcltoZXJvLmlkXSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEhlcm9IZWFkZXIgaWQ9e2hlcm8uaWR9IHsuLi5oZXJvfSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfSAqL31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmRpc2FibGVkLFxuICAgICAgICBidXR0b25bZGF0YS1hY3RpdmU9J3RydWUnXSB7XG4gICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzZkN2M7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdhYmI3YWE7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhIZXJvT3B0aW9ucyk7XG4iXX0= */\n/*@ sourceURL=F:\\\\repos\\\\react-feh-site\\\\app\\\\components\\\\HeroSelect\\\\HeroOptions.tsx */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9IZXJvT3B0aW9ucy50c3giXSwibmFtZXMiOlsiUmVuZGVySGVyb09wdGlvbiIsImluZGV4Iiwic3R5bGUiLCJkYXRhIiwiaGVyb0lkIiwiaGVyb2VzIiwiaGVyb2VzT3JkZXIiLCJvbkNsaWNrIiwiaGVybyIsImlkIiwiaGlkZGVuIiwib3JkZXIiLCJIZXJvT3B0aW9ucyIsIm9uU2VsZWN0IiwidXNlQ2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImxpc3REYXRhUHJvcCIsInVzZU1lbW8iLCJ3aWR0aCIsImhlaWdodCIsImxlbmd0aCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxnQkFBVCxPQVNJO0FBQUEsTUFSRkMsS0FRRSxRQVJGQSxLQVFFO0FBQUEsTUFQRkMsS0FPRSxRQVBGQSxLQU9FO0FBQUEsTUFORkMsSUFNRSxRQU5GQSxJQU1FO0FBQUEsTUFDTUMsTUFETixHQUMrQ0QsSUFEL0MsQ0FDTUMsTUFETjtBQUFBLE1BQ2NDLE1BRGQsR0FDK0NGLElBRC9DLENBQ2NFLE1BRGQ7QUFBQSxNQUNzQkMsV0FEdEIsR0FDK0NILElBRC9DLENBQ3NCRyxXQUR0QjtBQUFBLE1BQ21DQyxPQURuQyxHQUMrQ0osSUFEL0MsQ0FDbUNJLE9BRG5DO0FBRUYsTUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNKLEtBQUQsQ0FBbkI7QUFDQSxzQkFDRTtBQUVFLFlBQVEsRUFBRUcsTUFBTSxLQUFLSSxJQUFJLENBQUNDLEVBRjVCO0FBR0UsbUJBQWFMLE1BQU0sS0FBS0ksSUFBSSxDQUFDQyxFQUgvQjtBQUlFLFNBQUssRUFBRUQsSUFBSSxDQUFDQyxFQUpkO0FBS0UsVUFBTSxFQUFFRCxJQUFJLENBQUNFLE1BTGY7QUFNRSxXQUFPLEVBQUVILE9BTlg7QUFPRSxTQUFLLGtDQUFPTCxLQUFQO0FBQWNTLFdBQUssRUFBRUwsV0FBVyxDQUFDRSxJQUFJLENBQUNDLEVBQU47QUFBaEMsTUFQUDtBQUFBLDJCQVNFLDhEQUFDLCtEQUFEO0FBQVksUUFBRSxFQUFFRCxJQUFJLENBQUNDO0FBQXJCLE9BQTZCRCxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEYsS0FDT0EsSUFBSSxDQUFDQyxFQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztLQXpCUVQsZ0I7O0FBMkJULFNBQVNZLFdBQVQsUUFVRztBQUFBOztBQUFBOztBQUFBLE1BVERSLE1BU0MsU0FUREEsTUFTQztBQUFBLE1BUkRDLE1BUUMsU0FSREEsTUFRQztBQUFBLE1BUERDLFdBT0MsU0FQREEsV0FPQztBQUFBLE1BTkRPLFFBTUMsU0FOREEsUUFNQztBQUNELE1BQU1OLE9BQU8sR0FBR08sa0RBQVcsQ0FDekIsVUFBQ0MsS0FBRCxFQUE4QztBQUM1Q0EsU0FBSyxDQUFDQyxlQUFOO0FBQ0FILFlBQVEsQ0FBQ0UsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxLQUFyQixDQUFSO0FBQ0QsR0FKd0IsRUFLekIsQ0FBQ0wsUUFBRCxDQUx5QixDQUEzQjtBQU9BLE1BQU1NLFlBQVksR0FBR0MsOENBQU8sQ0FDMUI7QUFBQSxXQUFPO0FBQ0xoQixZQUFNLEVBQU5BLE1BREs7QUFFTEMsWUFBTSxFQUFOQSxNQUZLO0FBR0xDLGlCQUFXLEVBQVhBLFdBSEs7QUFJTEMsYUFBTyxFQUFQQTtBQUpLLEtBQVA7QUFBQSxHQUQwQixFQU8xQixDQUFDSCxNQUFELEVBQVNDLE1BQVQsRUFBaUJDLFdBQWpCLEVBQThCQyxPQUE5QixDQVAwQixDQUE1QjtBQVNBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsaUVBQUQ7QUFBQSxnQkFDRztBQUFBLFlBQUdjLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFlBQVVDLE1BQVYsU0FBVUEsTUFBVjtBQUFBLDRCQUNDLDhEQUFDLHVEQUFEO0FBQ0UsZUFBSyxFQUFFRCxLQURUO0FBRUUsZ0JBQU0sRUFBRUMsTUFGVjtBQUdFLG1CQUFTLEVBQUVqQixNQUFNLENBQUNrQixNQUhwQjtBQUlFLGtCQUFRLEVBQUUsRUFKWjtBQUtFLGtCQUFRLEVBQUVKLFlBTFo7QUFBQSxvQkFPR25CO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFnREQ7O0dBM0VRWSxXOztNQUFBQSxXO0FBNkVULCtEQUFlLG1CQUFBWSwyQ0FBSSxDQUFDWixXQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuNWM4ZGE5NWUxNjEzYmJkYWU5Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8sIFN5bnRoZXRpY0V2ZW50LCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QsIExpc3RDaGlsZENvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtd2luZG93JztcbmltcG9ydCBBdXRvUmVzaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcbmltcG9ydCBIZXJvSGVhZGVyIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSGVyb0hlYWRlcic7XG5pbXBvcnQgeyBUSGVyb09wdGlvbiB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5cbmZ1bmN0aW9uIFJlbmRlckhlcm9PcHRpb24oe1xuICBpbmRleCxcbiAgc3R5bGUsXG4gIGRhdGEsXG59OiBMaXN0Q2hpbGRDb21wb25lbnRQcm9wczx7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBoZXJvZXM6IFRIZXJvT3B0aW9uW107XG4gIGhlcm9lc09yZGVyOiB7IFtoZXJvSWQ6IHN0cmluZ106IG51bWJlciB9O1xuICBvbkNsaWNrOiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZDtcbn0+KSB7XG4gIGNvbnN0IHsgaGVyb0lkLCBoZXJvZXMsIGhlcm9lc09yZGVyLCBvbkNsaWNrIH0gPSBkYXRhO1xuICBjb25zdCBoZXJvID0gaGVyb2VzW2luZGV4XTtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBrZXk9e2hlcm8uaWR9XG4gICAgICBkaXNhYmxlZD17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgZGF0YS1hY3RpdmU9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgIHZhbHVlPXtoZXJvLmlkfVxuICAgICAgaGlkZGVuPXtoZXJvLmhpZGRlbn1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBzdHlsZT17eyAuLi5zdHlsZSwgb3JkZXI6IGhlcm9lc09yZGVyW2hlcm8uaWRdIH19XG4gICAgPlxuICAgICAgPEhlcm9IZWFkZXIgaWQ9e2hlcm8uaWR9IHsuLi5oZXJvfSAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBIZXJvT3B0aW9ucyh7XG4gIGhlcm9JZCxcbiAgaGVyb2VzLFxuICBoZXJvZXNPcmRlcixcbiAgb25TZWxlY3QsXG59OiB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBoZXJvZXM6IFRIZXJvT3B0aW9uW107XG4gIGhlcm9lc09yZGVyOiB7IFtoZXJvSWQ6IHN0cmluZ106IG51bWJlciB9O1xuICBvblNlbGVjdDogKG5ld0hlcm9JZDogc3RyaW5nKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgb25TZWxlY3QoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBbb25TZWxlY3RdLFxuICApO1xuICBjb25zdCBsaXN0RGF0YVByb3AgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBoZXJvSWQsXG4gICAgICBoZXJvZXMsXG4gICAgICBoZXJvZXNPcmRlcixcbiAgICAgIG9uQ2xpY2ssXG4gICAgfSksXG4gICAgW2hlcm9JZCwgaGVyb2VzLCBoZXJvZXNPcmRlciwgb25DbGlja10sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBdXRvUmVzaXplcj5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17aGVyb2VzLmxlbmd0aH1cbiAgICAgICAgICAgIGl0ZW1TaXplPXsxMH1cbiAgICAgICAgICAgIGl0ZW1EYXRhPXtsaXN0RGF0YVByb3B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1JlbmRlckhlcm9PcHRpb259XG4gICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxuICAgICAgICApfVxuICAgICAgPC9BdXRvUmVzaXplcj5cbiAgICAgIHsvKiB7aGVyb2VzLm1hcCgoaGVybykgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAga2V5PXtoZXJvLmlkfVxuICAgICAgICAgIGRpc2FibGVkPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICAgICAgZGF0YS1hY3RpdmU9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgICAgICB2YWx1ZT17aGVyby5pZH1cbiAgICAgICAgICBoaWRkZW49e2hlcm8uaGlkZGVufVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3sgb3JkZXI6IGhlcm9lc09yZGVyW2hlcm8uaWRdIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SGVyb0hlYWRlciBpZD17aGVyby5pZH0gey4uLmhlcm99IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9ICovfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246ZGlzYWJsZWQsXG4gICAgICAgIGJ1dHRvbltkYXRhLWFjdGl2ZT0ndHJ1ZSddIHtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NmQ3YztcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3N2FiYjdhYTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhlcm9PcHRpb25zKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=