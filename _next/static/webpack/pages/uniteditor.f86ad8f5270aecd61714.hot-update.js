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
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized-auto-sizer */ "./node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _app_components_HeroHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/HeroHeader */ "./app/components/HeroHeader/index.tsx");
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
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_5__.FixedSizeList, {
          width: width,
          height: height,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9IZXJvT3B0aW9ucy50c3giXSwibmFtZXMiOlsiUmVuZGVySGVyb09wdGlvbiIsImluZGV4Iiwic3R5bGUiLCJkYXRhIiwiaGVyb0lkIiwiaGVyb2VzIiwiaGVyb2VzT3JkZXIiLCJvbkNsaWNrIiwiaGVybyIsImlkIiwiaGlkZGVuIiwib3JkZXIiLCJIZXJvT3B0aW9ucyIsIm9uU2VsZWN0IiwidXNlQ2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImxpc3REYXRhUHJvcCIsInVzZU1lbW8iLCJpdGVtS2V5Iiwid2lkdGgiLCJoZWlnaHQiLCJsZW5ndGgiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxnQkFBVCxPQVNJO0FBQUEsTUFSRkMsS0FRRSxRQVJGQSxLQVFFO0FBQUEsTUFQRkMsS0FPRSxRQVBGQSxLQU9FO0FBQUEsTUFORkMsSUFNRSxRQU5GQSxJQU1FO0FBQUEsTUFDTUMsTUFETixHQUMrQ0QsSUFEL0MsQ0FDTUMsTUFETjtBQUFBLE1BQ2NDLE1BRGQsR0FDK0NGLElBRC9DLENBQ2NFLE1BRGQ7QUFBQSxNQUNzQkMsV0FEdEIsR0FDK0NILElBRC9DLENBQ3NCRyxXQUR0QjtBQUFBLE1BQ21DQyxPQURuQyxHQUMrQ0osSUFEL0MsQ0FDbUNJLE9BRG5DO0FBRUYsTUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNKLEtBQUQsQ0FBbkI7QUFDQSxzQkFDRTtBQUdFLFlBQVEsRUFBRUcsTUFBTSxLQUFLSSxJQUFJLENBQUNDLEVBSDVCO0FBSUUsbUJBQWFMLE1BQU0sS0FBS0ksSUFBSSxDQUFDQyxFQUovQjtBQUtFLFNBQUssRUFBRUQsSUFBSSxDQUFDQyxFQUxkO0FBTUUsVUFBTSxFQUFFRCxJQUFJLENBQUNFLE1BTmY7QUFPRSxXQUFPLEVBQUVILE9BUFg7QUFRRSxTQUFLLGtDQUFPTCxLQUFQO0FBQWNTLFdBQUssRUFBRUwsV0FBVyxDQUFDRSxJQUFJLENBQUNDLEVBQU47QUFBaEMsTUFSUDtBQUFBLDJCQVVFLDhEQUFDLCtEQUFEO0FBQVksUUFBRSxFQUFFRCxJQUFJLENBQUNDO0FBQXJCLE9BQTZCRCxJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkYsS0FFT0EsSUFBSSxDQUFDQyxFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztLQTFCUVQsZ0I7O0FBNEJULFNBQVNZLFdBQVQsUUFVRztBQUFBOztBQUFBOztBQUFBLE1BVERSLE1BU0MsU0FUREEsTUFTQztBQUFBLE1BUkRDLE1BUUMsU0FSREEsTUFRQztBQUFBLE1BUERDLFdBT0MsU0FQREEsV0FPQztBQUFBLE1BTkRPLFFBTUMsU0FOREEsUUFNQztBQUNELE1BQU1OLE9BQU8sR0FBR08sa0RBQVcsQ0FDekIsVUFBQ0MsS0FBRCxFQUE4QztBQUM1Q0EsU0FBSyxDQUFDQyxlQUFOO0FBQ0FILFlBQVEsQ0FBQ0UsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxLQUFyQixDQUFSO0FBQ0QsR0FKd0IsRUFLekIsQ0FBQ0wsUUFBRCxDQUx5QixDQUEzQjtBQU9BLE1BQU1NLFlBQVksR0FBR0MsOENBQU8sQ0FDMUI7QUFBQSxXQUFPO0FBQ0xoQixZQUFNLEVBQU5BLE1BREs7QUFFTEMsWUFBTSxFQUFOQSxNQUZLO0FBR0xDLGlCQUFXLEVBQVhBLFdBSEs7QUFJTEMsYUFBTyxFQUFQQTtBQUpLLEtBQVA7QUFBQSxHQUQwQixFQU8xQixDQUFDSCxNQUFELEVBQVNDLE1BQVQsRUFBaUJDLFdBQWpCLEVBQThCQyxPQUE5QixDQVAwQixDQUE1QjtBQVNBLE1BQU1jLE9BQU8sR0FBR1Asa0RBQVcsQ0FDekIsVUFBQ2IsS0FBRCxFQUFtQjtBQUNqQixXQUFPSSxNQUFNLENBQUNKLEtBQUQsQ0FBTixDQUFjUSxFQUFyQjtBQUNELEdBSHdCLEVBSXpCLENBQUNKLE1BQUQsQ0FKeUIsQ0FBM0I7QUFNQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGlFQUFEO0FBQUEsZ0JBQ0c7QUFBQSxZQUFHaUIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsWUFBVUMsTUFBVixTQUFVQSxNQUFWO0FBQUEsNEJBQ0MsOERBQUMsdURBQUQ7QUFDRSxlQUFLLEVBQUVELEtBRFQ7QUFFRSxnQkFBTSxFQUFFQyxNQUZWO0FBR0UsbUJBQVMsRUFBRWxCLE1BQU0sQ0FBQ21CLE1BSHBCO0FBSUUsa0JBQVEsRUFBRSxFQUpaO0FBS0Usa0JBQVEsRUFBRUwsWUFMWjtBQU1FLGlCQUFPLEVBQUVFLE9BTlg7QUFBQSxvQkFRR3JCO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBK0JEOztHQWhFUVksVzs7TUFBQUEsVztBQWtFVCwrREFBZSxtQkFBQWEsMkNBQUksQ0FBQ2IsV0FBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLmY4NmFkOGY1MjcwYWVjZDYxNzE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vLCBTeW50aGV0aWNFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0LCBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgQXV0b1Jlc2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgSGVyb0hlYWRlciBmcm9tICdAL2FwcC9jb21wb25lbnRzL0hlcm9IZWFkZXInO1xuaW1wb3J0IHsgVEhlcm9PcHRpb24gfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlcm9zZWxlY3QubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIFJlbmRlckhlcm9PcHRpb24oe1xuICBpbmRleCxcbiAgc3R5bGUsXG4gIGRhdGEsXG59OiBMaXN0Q2hpbGRDb21wb25lbnRQcm9wczx7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBoZXJvZXM6IFRIZXJvT3B0aW9uW107XG4gIGhlcm9lc09yZGVyOiB7IFtoZXJvSWQ6IHN0cmluZ106IG51bWJlciB9O1xuICBvbkNsaWNrOiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZDtcbn0+KSB7XG4gIGNvbnN0IHsgaGVyb0lkLCBoZXJvZXMsIGhlcm9lc09yZGVyLCBvbkNsaWNrIH0gPSBkYXRhO1xuICBjb25zdCBoZXJvID0gaGVyb2VzW2luZGV4XTtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICAvLyBjbGFzc05hbWU9e3N0eWxlc1snaGVyby1vcHRpb24nXX1cbiAgICAgIGtleT17aGVyby5pZH1cbiAgICAgIGRpc2FibGVkPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICBkYXRhLWFjdGl2ZT17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgdmFsdWU9e2hlcm8uaWR9XG4gICAgICBoaWRkZW49e2hlcm8uaGlkZGVufVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBvcmRlcjogaGVyb2VzT3JkZXJbaGVyby5pZF0gfX1cbiAgICA+XG4gICAgICA8SGVyb0hlYWRlciBpZD17aGVyby5pZH0gey4uLmhlcm99IC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEhlcm9PcHRpb25zKHtcbiAgaGVyb0lkLFxuICBoZXJvZXMsXG4gIGhlcm9lc09yZGVyLFxuICBvblNlbGVjdCxcbn06IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIGhlcm9lczogVEhlcm9PcHRpb25bXTtcbiAgaGVyb2VzT3JkZXI6IHsgW2hlcm9JZDogc3RyaW5nXTogbnVtYmVyIH07XG4gIG9uU2VsZWN0OiAobmV3SGVyb0lkOiBzdHJpbmcpID0+IHZvaWQ7XG59KSB7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvblNlbGVjdChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIFtvblNlbGVjdF0sXG4gICk7XG4gIGNvbnN0IGxpc3REYXRhUHJvcCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGhlcm9JZCxcbiAgICAgIGhlcm9lcyxcbiAgICAgIGhlcm9lc09yZGVyLFxuICAgICAgb25DbGljayxcbiAgICB9KSxcbiAgICBbaGVyb0lkLCBoZXJvZXMsIGhlcm9lc09yZGVyLCBvbkNsaWNrXSxcbiAgKTtcbiAgY29uc3QgaXRlbUtleSA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gaGVyb2VzW2luZGV4XS5pZDtcbiAgICB9LFxuICAgIFtoZXJvZXNdLFxuICApO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QXV0b1Jlc2l6ZXI+XG4gICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IChcbiAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICBpdGVtQ291bnQ9e2hlcm9lcy5sZW5ndGh9XG4gICAgICAgICAgICBpdGVtU2l6ZT17MTB9XG4gICAgICAgICAgICBpdGVtRGF0YT17bGlzdERhdGFQcm9wfVxuICAgICAgICAgICAgaXRlbUtleT17aXRlbUtleX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7UmVuZGVySGVyb09wdGlvbn1cbiAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICl9XG4gICAgICA8L0F1dG9SZXNpemVyPlxuICAgICAgey8qIHtoZXJvZXMubWFwKChoZXJvKSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2hlcm8uaWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgICAgICBkYXRhLWFjdGl2ZT17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgICAgIHZhbHVlPXtoZXJvLmlkfVxuICAgICAgICAgIGhpZGRlbj17aGVyby5oaWRkZW59XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBzdHlsZT17eyBvcmRlcjogaGVyb2VzT3JkZXJbaGVyby5pZF0gfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIZXJvSGVhZGVyIGlkPXtoZXJvLmlkfSB7Li4uaGVyb30gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApKX0gKi99XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oSGVyb09wdGlvbnMpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==