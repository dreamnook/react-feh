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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized-auto-sizer */ "./node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/HeroHeader */ "./app/components/HeroHeader/index.tsx");
/* harmony import */ var _heroselect_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heroselect.module.css */ "./app/components/HeroSelect/heroselect.module.css");
/* harmony import */ var _heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5__);
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
    className: (_heroselect_module_css__WEBPACK_IMPORTED_MODULE_5___default()["hero-option"]),
    disabled: heroId === hero.id,
    "data-active": heroId === hero.id,
    value: hero.id,
    hidden: hero.hidden,
    onClick: onClick,
    style: _objectSpread(_objectSpread({}, style), {}, {
      order: heroesOrder[hero.id]
    }),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({
      id: hero.id
    }, hero), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, hero.id, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (event) {
    event.stopPropagation();
    onSelect(event.currentTarget.value);
  }, [onSelect]);
  var listDataProp = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return {
      heroId: heroId,
      heroes: heroes,
      heroesOrder: heroesOrder,
      onClick: onClick
    };
  }, [heroId, heroes, heroesOrder, onClick]);
  var itemKey = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (index) {
    return heroes[index].id;
  }, [heroes]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: function children(_ref3) {
        var width = _ref3.width,
            height = _ref3.height;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_6__.FixedSizeList, {
          width: width,
          height: height,
          itemCount: heroes.length,
          itemSize: 160,
          itemData: listDataProp,
          itemKey: itemKey,
          children: RenderHeroOption
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(HeroOptions, "Sn7CyinzcLFdF/yyxMAJTrclnPI=");

_c2 = HeroOptions;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(HeroOptions));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9IZXJvT3B0aW9ucy50c3giXSwibmFtZXMiOlsiUmVuZGVySGVyb09wdGlvbiIsImluZGV4Iiwic3R5bGUiLCJkYXRhIiwiaGVyb0lkIiwiaGVyb2VzIiwiaGVyb2VzT3JkZXIiLCJvbkNsaWNrIiwiaGVybyIsInN0eWxlcyIsImlkIiwiaGlkZGVuIiwib3JkZXIiLCJIZXJvT3B0aW9ucyIsIm9uU2VsZWN0IiwidXNlQ2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImxpc3REYXRhUHJvcCIsInVzZU1lbW8iLCJpdGVtS2V5Iiwid2lkdGgiLCJoZWlnaHQiLCJsZW5ndGgiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsZ0JBQVQsT0FTSTtBQUFBLE1BUkZDLEtBUUUsUUFSRkEsS0FRRTtBQUFBLE1BUEZDLEtBT0UsUUFQRkEsS0FPRTtBQUFBLE1BTkZDLElBTUUsUUFORkEsSUFNRTtBQUFBLE1BQ01DLE1BRE4sR0FDK0NELElBRC9DLENBQ01DLE1BRE47QUFBQSxNQUNjQyxNQURkLEdBQytDRixJQUQvQyxDQUNjRSxNQURkO0FBQUEsTUFDc0JDLFdBRHRCLEdBQytDSCxJQUQvQyxDQUNzQkcsV0FEdEI7QUFBQSxNQUNtQ0MsT0FEbkMsR0FDK0NKLElBRC9DLENBQ21DSSxPQURuQztBQUVGLE1BQU1DLElBQUksR0FBR0gsTUFBTSxDQUFDSixLQUFELENBQW5CO0FBQ0Esc0JBQ0U7QUFDRSxhQUFTLEVBQUVRLDhFQURiO0FBR0UsWUFBUSxFQUFFTCxNQUFNLEtBQUtJLElBQUksQ0FBQ0UsRUFINUI7QUFJRSxtQkFBYU4sTUFBTSxLQUFLSSxJQUFJLENBQUNFLEVBSi9CO0FBS0UsU0FBSyxFQUFFRixJQUFJLENBQUNFLEVBTGQ7QUFNRSxVQUFNLEVBQUVGLElBQUksQ0FBQ0csTUFOZjtBQU9FLFdBQU8sRUFBRUosT0FQWDtBQVFFLFNBQUssa0NBQU9MLEtBQVA7QUFBY1UsV0FBSyxFQUFFTixXQUFXLENBQUNFLElBQUksQ0FBQ0UsRUFBTjtBQUFoQyxNQVJQO0FBQUEsMkJBVUUsOERBQUMsK0RBQUQ7QUFBWSxRQUFFLEVBQUVGLElBQUksQ0FBQ0U7QUFBckIsT0FBNkJGLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRixLQUVPQSxJQUFJLENBQUNFLEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0tBMUJRVixnQjs7QUE0QlQsU0FBU2EsV0FBVCxRQVVHO0FBQUE7O0FBQUE7O0FBQUEsTUFURFQsTUFTQyxTQVREQSxNQVNDO0FBQUEsTUFSREMsTUFRQyxTQVJEQSxNQVFDO0FBQUEsTUFQREMsV0FPQyxTQVBEQSxXQU9DO0FBQUEsTUFORFEsUUFNQyxTQU5EQSxRQU1DO0FBQ0QsTUFBTVAsT0FBTyxHQUFHUSxrREFBVyxDQUN6QixVQUFDQyxLQUFELEVBQThDO0FBQzVDQSxTQUFLLENBQUNDLGVBQU47QUFDQUgsWUFBUSxDQUFDRSxLQUFLLENBQUNFLGFBQU4sQ0FBb0JDLEtBQXJCLENBQVI7QUFDRCxHQUp3QixFQUt6QixDQUFDTCxRQUFELENBTHlCLENBQTNCO0FBT0EsTUFBTU0sWUFBWSxHQUFHQyw4Q0FBTyxDQUMxQjtBQUFBLFdBQU87QUFDTGpCLFlBQU0sRUFBTkEsTUFESztBQUVMQyxZQUFNLEVBQU5BLE1BRks7QUFHTEMsaUJBQVcsRUFBWEEsV0FISztBQUlMQyxhQUFPLEVBQVBBO0FBSkssS0FBUDtBQUFBLEdBRDBCLEVBTzFCLENBQUNILE1BQUQsRUFBU0MsTUFBVCxFQUFpQkMsV0FBakIsRUFBOEJDLE9BQTlCLENBUDBCLENBQTVCO0FBU0EsTUFBTWUsT0FBTyxHQUFHUCxrREFBVyxDQUN6QixVQUFDZCxLQUFELEVBQW1CO0FBQ2pCLFdBQU9JLE1BQU0sQ0FBQ0osS0FBRCxDQUFOLENBQWNTLEVBQXJCO0FBQ0QsR0FId0IsRUFJekIsQ0FBQ0wsTUFBRCxDQUp5QixDQUEzQjtBQU1BLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsaUVBQUQ7QUFBQSxnQkFDRztBQUFBLFlBQUdrQixLQUFILFNBQUdBLEtBQUg7QUFBQSxZQUFVQyxNQUFWLFNBQVVBLE1BQVY7QUFBQSw0QkFDQyw4REFBQyx1REFBRDtBQUNFLGVBQUssRUFBRUQsS0FEVDtBQUVFLGdCQUFNLEVBQUVDLE1BRlY7QUFHRSxtQkFBUyxFQUFFbkIsTUFBTSxDQUFDb0IsTUFIcEI7QUFJRSxrQkFBUSxFQUFFLEdBSlo7QUFLRSxrQkFBUSxFQUFFTCxZQUxaO0FBTUUsaUJBQU8sRUFBRUUsT0FOWDtBQUFBLG9CQVFHdEI7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUErQkQ7O0dBaEVRYSxXOztNQUFBQSxXO0FBa0VULCtEQUFlLG1CQUFBYSwyQ0FBSSxDQUFDYixXQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuZjlmNTgxOTA5MjdjY2Y0NDc5ODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8sIFN5bnRoZXRpY0V2ZW50LCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QsIExpc3RDaGlsZENvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtd2luZG93JztcbmltcG9ydCBBdXRvUmVzaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcbmltcG9ydCBIZXJvSGVhZGVyIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvSGVyb0hlYWRlcic7XG5pbXBvcnQgeyBUSGVyb09wdGlvbiB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVyb3NlbGVjdC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gUmVuZGVySGVyb09wdGlvbih7XG4gIGluZGV4LFxuICBzdHlsZSxcbiAgZGF0YSxcbn06IExpc3RDaGlsZENvbXBvbmVudFByb3BzPHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIGhlcm9lczogVEhlcm9PcHRpb25bXTtcbiAgaGVyb2VzT3JkZXI6IHsgW2hlcm9JZDogc3RyaW5nXTogbnVtYmVyIH07XG4gIG9uQ2xpY2s6IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkO1xufT4pIHtcbiAgY29uc3QgeyBoZXJvSWQsIGhlcm9lcywgaGVyb2VzT3JkZXIsIG9uQ2xpY2sgfSA9IGRhdGE7XG4gIGNvbnN0IGhlcm8gPSBoZXJvZXNbaW5kZXhdO1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzWydoZXJvLW9wdGlvbiddfVxuICAgICAga2V5PXtoZXJvLmlkfVxuICAgICAgZGlzYWJsZWQ9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgIGRhdGEtYWN0aXZlPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICB2YWx1ZT17aGVyby5pZH1cbiAgICAgIGhpZGRlbj17aGVyby5oaWRkZW59XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGUsIG9yZGVyOiBoZXJvZXNPcmRlcltoZXJvLmlkXSB9fVxuICAgID5cbiAgICAgIDxIZXJvSGVhZGVyIGlkPXtoZXJvLmlkfSB7Li4uaGVyb30gLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSGVyb09wdGlvbnMoe1xuICBoZXJvSWQsXG4gIGhlcm9lcyxcbiAgaGVyb2VzT3JkZXIsXG4gIG9uU2VsZWN0LFxufToge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgaGVyb2VzOiBUSGVyb09wdGlvbltdO1xuICBoZXJvZXNPcmRlcjogeyBbaGVyb0lkOiBzdHJpbmddOiBudW1iZXIgfTtcbiAgb25TZWxlY3Q6IChuZXdIZXJvSWQ6IHN0cmluZykgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uU2VsZWN0KGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIH0sXG4gICAgW29uU2VsZWN0XSxcbiAgKTtcbiAgY29uc3QgbGlzdERhdGFQcm9wID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgaGVyb0lkLFxuICAgICAgaGVyb2VzLFxuICAgICAgaGVyb2VzT3JkZXIsXG4gICAgICBvbkNsaWNrLFxuICAgIH0pLFxuICAgIFtoZXJvSWQsIGhlcm9lcywgaGVyb2VzT3JkZXIsIG9uQ2xpY2tdLFxuICApO1xuICBjb25zdCBpdGVtS2V5ID0gdXNlQ2FsbGJhY2soXG4gICAgKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiBoZXJvZXNbaW5kZXhdLmlkO1xuICAgIH0sXG4gICAgW2hlcm9lc10sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBdXRvUmVzaXplcj5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17aGVyb2VzLmxlbmd0aH1cbiAgICAgICAgICAgIGl0ZW1TaXplPXsxNjB9XG4gICAgICAgICAgICBpdGVtRGF0YT17bGlzdERhdGFQcm9wfVxuICAgICAgICAgICAgaXRlbUtleT17aXRlbUtleX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7UmVuZGVySGVyb09wdGlvbn1cbiAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICl9XG4gICAgICA8L0F1dG9SZXNpemVyPlxuICAgICAgey8qIHtoZXJvZXMubWFwKChoZXJvKSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2hlcm8uaWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgICAgICBkYXRhLWFjdGl2ZT17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgICAgIHZhbHVlPXtoZXJvLmlkfVxuICAgICAgICAgIGhpZGRlbj17aGVyby5oaWRkZW59XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBzdHlsZT17eyBvcmRlcjogaGVyb2VzT3JkZXJbaGVyby5pZF0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIZXJvSGVhZGVyIGlkPXtoZXJvLmlkfSB7Li4uaGVyb30gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApKX0gKi99XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVyb09wdGlvbnMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==