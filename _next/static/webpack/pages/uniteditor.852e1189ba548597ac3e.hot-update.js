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
        var width = _ref3.width;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_6__.FixedSizeList, {
          width: width,
          height: 160 * heroes.length,
          itemCount: heroes.length,
          itemSize: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9IZXJvT3B0aW9ucy50c3giXSwibmFtZXMiOlsiUmVuZGVySGVyb09wdGlvbiIsImluZGV4Iiwic3R5bGUiLCJkYXRhIiwiaGVyb0lkIiwiaGVyb2VzIiwiaGVyb2VzT3JkZXIiLCJvbkNsaWNrIiwiaGVybyIsInN0eWxlcyIsImlkIiwiaGlkZGVuIiwib3JkZXIiLCJIZXJvT3B0aW9ucyIsIm9uU2VsZWN0IiwidXNlQ2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImxpc3REYXRhUHJvcCIsInVzZU1lbW8iLCJpdGVtS2V5Iiwid2lkdGgiLCJsZW5ndGgiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsZ0JBQVQsT0FTSTtBQUFBLE1BUkZDLEtBUUUsUUFSRkEsS0FRRTtBQUFBLE1BUEZDLEtBT0UsUUFQRkEsS0FPRTtBQUFBLE1BTkZDLElBTUUsUUFORkEsSUFNRTtBQUFBLE1BQ01DLE1BRE4sR0FDK0NELElBRC9DLENBQ01DLE1BRE47QUFBQSxNQUNjQyxNQURkLEdBQytDRixJQUQvQyxDQUNjRSxNQURkO0FBQUEsTUFDc0JDLFdBRHRCLEdBQytDSCxJQUQvQyxDQUNzQkcsV0FEdEI7QUFBQSxNQUNtQ0MsT0FEbkMsR0FDK0NKLElBRC9DLENBQ21DSSxPQURuQztBQUVGLE1BQU1DLElBQUksR0FBR0gsTUFBTSxDQUFDSixLQUFELENBQW5CO0FBQ0Esc0JBQ0U7QUFDRSxhQUFTLEVBQUVRLDhFQURiO0FBR0UsWUFBUSxFQUFFTCxNQUFNLEtBQUtJLElBQUksQ0FBQ0UsRUFINUI7QUFJRSxtQkFBYU4sTUFBTSxLQUFLSSxJQUFJLENBQUNFLEVBSi9CO0FBS0UsU0FBSyxFQUFFRixJQUFJLENBQUNFLEVBTGQ7QUFNRSxVQUFNLEVBQUVGLElBQUksQ0FBQ0csTUFOZjtBQU9FLFdBQU8sRUFBRUosT0FQWDtBQVFFLFNBQUssa0NBQU9MLEtBQVA7QUFBY1UsV0FBSyxFQUFFTixXQUFXLENBQUNFLElBQUksQ0FBQ0UsRUFBTjtBQUFoQyxNQVJQO0FBQUEsMkJBVUUsOERBQUMsK0RBQUQ7QUFBWSxRQUFFLEVBQUVGLElBQUksQ0FBQ0U7QUFBckIsT0FBNkJGLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRixLQUVPQSxJQUFJLENBQUNFLEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0tBMUJRVixnQjs7QUE0QlQsU0FBU2EsV0FBVCxRQVVHO0FBQUE7O0FBQUE7O0FBQUEsTUFURFQsTUFTQyxTQVREQSxNQVNDO0FBQUEsTUFSREMsTUFRQyxTQVJEQSxNQVFDO0FBQUEsTUFQREMsV0FPQyxTQVBEQSxXQU9DO0FBQUEsTUFORFEsUUFNQyxTQU5EQSxRQU1DO0FBQ0QsTUFBTVAsT0FBTyxHQUFHUSxrREFBVyxDQUN6QixVQUFDQyxLQUFELEVBQThDO0FBQzVDQSxTQUFLLENBQUNDLGVBQU47QUFDQUgsWUFBUSxDQUFDRSxLQUFLLENBQUNFLGFBQU4sQ0FBb0JDLEtBQXJCLENBQVI7QUFDRCxHQUp3QixFQUt6QixDQUFDTCxRQUFELENBTHlCLENBQTNCO0FBT0EsTUFBTU0sWUFBWSxHQUFHQyw4Q0FBTyxDQUMxQjtBQUFBLFdBQU87QUFDTGpCLFlBQU0sRUFBTkEsTUFESztBQUVMQyxZQUFNLEVBQU5BLE1BRks7QUFHTEMsaUJBQVcsRUFBWEEsV0FISztBQUlMQyxhQUFPLEVBQVBBO0FBSkssS0FBUDtBQUFBLEdBRDBCLEVBTzFCLENBQUNILE1BQUQsRUFBU0MsTUFBVCxFQUFpQkMsV0FBakIsRUFBOEJDLE9BQTlCLENBUDBCLENBQTVCO0FBU0EsTUFBTWUsT0FBTyxHQUFHUCxrREFBVyxDQUN6QixVQUFDZCxLQUFELEVBQW1CO0FBQ2pCLFdBQU9JLE1BQU0sQ0FBQ0osS0FBRCxDQUFOLENBQWNTLEVBQXJCO0FBQ0QsR0FId0IsRUFJekIsQ0FBQ0wsTUFBRCxDQUp5QixDQUEzQjtBQU1BLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsaUVBQUQ7QUFBQSxnQkFDRztBQUFBLFlBQUdrQixLQUFILFNBQUdBLEtBQUg7QUFBQSw0QkFDQyw4REFBQyx1REFBRDtBQUNFLGVBQUssRUFBRUEsS0FEVDtBQUVFLGdCQUFNLEVBQUUsTUFBTWxCLE1BQU0sQ0FBQ21CLE1BRnZCO0FBR0UsbUJBQVMsRUFBRW5CLE1BQU0sQ0FBQ21CLE1BSHBCO0FBSUUsa0JBQVEsRUFBRSxFQUpaO0FBS0Usa0JBQVEsRUFBRUosWUFMWjtBQU1FLGlCQUFPLEVBQUVFLE9BTlg7QUFBQSxvQkFRR3RCO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBK0JEOztHQWhFUWEsVzs7TUFBQUEsVztBQWtFVCwrREFBZSxtQkFBQVksMkNBQUksQ0FBQ1osV0FBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjg1MmUxMTg5YmE1NDg1OTdhYzNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vLCBTeW50aGV0aWNFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0LCBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgQXV0b1Jlc2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgSGVyb0hlYWRlciBmcm9tICdAL2FwcC9jb21wb25lbnRzL0hlcm9IZWFkZXInO1xuaW1wb3J0IHsgVEhlcm9PcHRpb24gfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlcm9zZWxlY3QubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIFJlbmRlckhlcm9PcHRpb24oe1xuICBpbmRleCxcbiAgc3R5bGUsXG4gIGRhdGEsXG59OiBMaXN0Q2hpbGRDb21wb25lbnRQcm9wczx7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBoZXJvZXM6IFRIZXJvT3B0aW9uW107XG4gIGhlcm9lc09yZGVyOiB7IFtoZXJvSWQ6IHN0cmluZ106IG51bWJlciB9O1xuICBvbkNsaWNrOiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZDtcbn0+KSB7XG4gIGNvbnN0IHsgaGVyb0lkLCBoZXJvZXMsIGhlcm9lc09yZGVyLCBvbkNsaWNrIH0gPSBkYXRhO1xuICBjb25zdCBoZXJvID0gaGVyb2VzW2luZGV4XTtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e3N0eWxlc1snaGVyby1vcHRpb24nXX1cbiAgICAgIGtleT17aGVyby5pZH1cbiAgICAgIGRpc2FibGVkPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICBkYXRhLWFjdGl2ZT17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgdmFsdWU9e2hlcm8uaWR9XG4gICAgICBoaWRkZW49e2hlcm8uaGlkZGVufVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBvcmRlcjogaGVyb2VzT3JkZXJbaGVyby5pZF0gfX1cbiAgICA+XG4gICAgICA8SGVyb0hlYWRlciBpZD17aGVyby5pZH0gey4uLmhlcm99IC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEhlcm9PcHRpb25zKHtcbiAgaGVyb0lkLFxuICBoZXJvZXMsXG4gIGhlcm9lc09yZGVyLFxuICBvblNlbGVjdCxcbn06IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIGhlcm9lczogVEhlcm9PcHRpb25bXTtcbiAgaGVyb2VzT3JkZXI6IHsgW2hlcm9JZDogc3RyaW5nXTogbnVtYmVyIH07XG4gIG9uU2VsZWN0OiAobmV3SGVyb0lkOiBzdHJpbmcpID0+IHZvaWQ7XG59KSB7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvblNlbGVjdChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIFtvblNlbGVjdF0sXG4gICk7XG4gIGNvbnN0IGxpc3REYXRhUHJvcCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGhlcm9JZCxcbiAgICAgIGhlcm9lcyxcbiAgICAgIGhlcm9lc09yZGVyLFxuICAgICAgb25DbGljayxcbiAgICB9KSxcbiAgICBbaGVyb0lkLCBoZXJvZXMsIGhlcm9lc09yZGVyLCBvbkNsaWNrXSxcbiAgKTtcbiAgY29uc3QgaXRlbUtleSA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gaGVyb2VzW2luZGV4XS5pZDtcbiAgICB9LFxuICAgIFtoZXJvZXNdLFxuICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXV0b1Jlc2l6ZXI+XG4gICAgICAgIHsoeyB3aWR0aCB9KSA9PiAoXG4gICAgICAgICAgPEZpeGVkU2l6ZUxpc3RcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17MTYwICogaGVyb2VzLmxlbmd0aH1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17aGVyb2VzLmxlbmd0aH1cbiAgICAgICAgICAgIGl0ZW1TaXplPXsxMH1cbiAgICAgICAgICAgIGl0ZW1EYXRhPXtsaXN0RGF0YVByb3B9XG4gICAgICAgICAgICBpdGVtS2V5PXtpdGVtS2V5fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtSZW5kZXJIZXJvT3B0aW9ufVxuICAgICAgICAgIDwvRml4ZWRTaXplTGlzdD5cbiAgICAgICAgKX1cbiAgICAgIDwvQXV0b1Jlc2l6ZXI+XG4gICAgICB7Lyoge2hlcm9lcy5tYXAoKGhlcm8pID0+IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGtleT17aGVyby5pZH1cbiAgICAgICAgICBkaXNhYmxlZD17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgICAgIGRhdGEtYWN0aXZlPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICAgICAgdmFsdWU9e2hlcm8uaWR9XG4gICAgICAgICAgaGlkZGVuPXtoZXJvLmhpZGRlbn1cbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7IG9yZGVyOiBoZXJvZXNPcmRlcltoZXJvLmlkXSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEhlcm9IZWFkZXIgaWQ9e2hlcm8uaWR9IHsuLi5oZXJvfSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfSAqL31cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhIZXJvT3B0aW9ucyk7XG4iXSwic291cmNlUm9vdCI6IiJ9