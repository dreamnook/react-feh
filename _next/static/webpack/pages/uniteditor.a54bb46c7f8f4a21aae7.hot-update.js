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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_3__.default, {
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
          lineNumber: 67,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(HeroOptions, "pDK2Ot9MIJNgjgWLBnI3jt4Gc98=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9IZXJvT3B0aW9ucy50c3giXSwibmFtZXMiOlsiUmVuZGVySGVyb09wdGlvbiIsImluZGV4Iiwic3R5bGUiLCJkYXRhIiwiaGVyb0lkIiwiaGVyb2VzIiwiaGVyb2VzT3JkZXIiLCJvbkNsaWNrIiwiaGVybyIsInN0eWxlcyIsImlkIiwiaGlkZGVuIiwib3JkZXIiLCJIZXJvT3B0aW9ucyIsIm9uU2VsZWN0IiwidXNlQ2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsImxpc3REYXRhUHJvcCIsInVzZU1lbW8iLCJ3aWR0aCIsImhlaWdodCIsImxlbmd0aCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxnQkFBVCxPQVNJO0FBQUEsTUFSRkMsS0FRRSxRQVJGQSxLQVFFO0FBQUEsTUFQRkMsS0FPRSxRQVBGQSxLQU9FO0FBQUEsTUFORkMsSUFNRSxRQU5GQSxJQU1FO0FBQUEsTUFDTUMsTUFETixHQUMrQ0QsSUFEL0MsQ0FDTUMsTUFETjtBQUFBLE1BQ2NDLE1BRGQsR0FDK0NGLElBRC9DLENBQ2NFLE1BRGQ7QUFBQSxNQUNzQkMsV0FEdEIsR0FDK0NILElBRC9DLENBQ3NCRyxXQUR0QjtBQUFBLE1BQ21DQyxPQURuQyxHQUMrQ0osSUFEL0MsQ0FDbUNJLE9BRG5DO0FBRUYsTUFBTUMsSUFBSSxHQUFHSCxNQUFNLENBQUNKLEtBQUQsQ0FBbkI7QUFDQSxzQkFDRTtBQUNFLGFBQVMsRUFBRVEsOEVBRGI7QUFHRSxZQUFRLEVBQUVMLE1BQU0sS0FBS0ksSUFBSSxDQUFDRSxFQUg1QjtBQUlFLG1CQUFhTixNQUFNLEtBQUtJLElBQUksQ0FBQ0UsRUFKL0I7QUFLRSxTQUFLLEVBQUVGLElBQUksQ0FBQ0UsRUFMZDtBQU1FLFVBQU0sRUFBRUYsSUFBSSxDQUFDRyxNQU5mO0FBT0UsV0FBTyxFQUFFSixPQVBYO0FBUUUsU0FBSyxrQ0FBT0wsS0FBUDtBQUFjVSxXQUFLLEVBQUVOLFdBQVcsQ0FBQ0UsSUFBSSxDQUFDRSxFQUFOO0FBQWhDLE1BUlA7QUFBQSwyQkFVRSw4REFBQywrREFBRDtBQUFZLFFBQUUsRUFBRUYsSUFBSSxDQUFDRTtBQUFyQixPQUE2QkYsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGLEtBRU9BLElBQUksQ0FBQ0UsRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7S0ExQlFWLGdCOztBQTRCVCxTQUFTYSxXQUFULFFBVUc7QUFBQTs7QUFBQTs7QUFBQSxNQVREVCxNQVNDLFNBVERBLE1BU0M7QUFBQSxNQVJEQyxNQVFDLFNBUkRBLE1BUUM7QUFBQSxNQVBEQyxXQU9DLFNBUERBLFdBT0M7QUFBQSxNQU5EUSxRQU1DLFNBTkRBLFFBTUM7QUFDRCxNQUFNUCxPQUFPLEdBQUdRLGtEQUFXLENBQ3pCLFVBQUNDLEtBQUQsRUFBOEM7QUFDNUNBLFNBQUssQ0FBQ0MsZUFBTjtBQUNBSCxZQUFRLENBQUNFLEtBQUssQ0FBQ0UsYUFBTixDQUFvQkMsS0FBckIsQ0FBUjtBQUNELEdBSndCLEVBS3pCLENBQUNMLFFBQUQsQ0FMeUIsQ0FBM0I7QUFPQSxNQUFNTSxZQUFZLEdBQUdDLDhDQUFPLENBQzFCO0FBQUEsV0FBTztBQUNMakIsWUFBTSxFQUFOQSxNQURLO0FBRUxDLFlBQU0sRUFBTkEsTUFGSztBQUdMQyxpQkFBVyxFQUFYQSxXQUhLO0FBSUxDLGFBQU8sRUFBUEE7QUFKSyxLQUFQO0FBQUEsR0FEMEIsRUFPMUIsQ0FBQ0gsTUFBRCxFQUFTQyxNQUFULEVBQWlCQyxXQUFqQixFQUE4QkMsT0FBOUIsQ0FQMEIsQ0FBNUI7QUFTQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLGlFQUFEO0FBQUEsZ0JBQ0c7QUFBQSxZQUFHZSxLQUFILFNBQUdBLEtBQUg7QUFBQSxZQUFVQyxNQUFWLFNBQVVBLE1BQVY7QUFBQSw0QkFDQyw4REFBQyx1REFBRDtBQUNFLGVBQUssRUFBRUQsS0FEVDtBQUVFLGdCQUFNLEVBQUVDLE1BRlY7QUFHRSxtQkFBUyxFQUFFbEIsTUFBTSxDQUFDbUIsTUFIcEI7QUFJRSxrQkFBUSxFQUFFLEVBSlo7QUFLRSxrQkFBUSxFQUFFSixZQUxaO0FBQUEsb0JBT0dwQjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQThCRDs7R0F6RFFhLFc7O01BQUFBLFc7QUEyRFQsK0RBQWUsbUJBQUFZLDJDQUFJLENBQUNaLFdBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci5hNTRiYjQ2YzdmOGY0YTIxYWFlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbywgU3ludGhldGljRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRml4ZWRTaXplTGlzdCwgTGlzdENoaWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuaW1wb3J0IEF1dG9SZXNpemVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuaW1wb3J0IEhlcm9IZWFkZXIgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9IZXJvSGVhZGVyJztcbmltcG9ydCB7IFRIZXJvT3B0aW9uIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZXJvc2VsZWN0Lm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBSZW5kZXJIZXJvT3B0aW9uKHtcbiAgaW5kZXgsXG4gIHN0eWxlLFxuICBkYXRhLFxufTogTGlzdENoaWxkQ29tcG9uZW50UHJvcHM8e1xuICBoZXJvSWQ6IHN0cmluZztcbiAgaGVyb2VzOiBUSGVyb09wdGlvbltdO1xuICBoZXJvZXNPcmRlcjogeyBbaGVyb0lkOiBzdHJpbmddOiBudW1iZXIgfTtcbiAgb25DbGljazogKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQ7XG59Pikge1xuICBjb25zdCB7IGhlcm9JZCwgaGVyb2VzLCBoZXJvZXNPcmRlciwgb25DbGljayB9ID0gZGF0YTtcbiAgY29uc3QgaGVybyA9IGhlcm9lc1tpbmRleF07XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbJ2hlcm8tb3B0aW9uJ119XG4gICAgICBrZXk9e2hlcm8uaWR9XG4gICAgICBkaXNhYmxlZD17aGVyb0lkID09PSBoZXJvLmlkfVxuICAgICAgZGF0YS1hY3RpdmU9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgIHZhbHVlPXtoZXJvLmlkfVxuICAgICAgaGlkZGVuPXtoZXJvLmhpZGRlbn1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICBzdHlsZT17eyAuLi5zdHlsZSwgb3JkZXI6IGhlcm9lc09yZGVyW2hlcm8uaWRdIH19XG4gICAgPlxuICAgICAgPEhlcm9IZWFkZXIgaWQ9e2hlcm8uaWR9IHsuLi5oZXJvfSAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBIZXJvT3B0aW9ucyh7XG4gIGhlcm9JZCxcbiAgaGVyb2VzLFxuICBoZXJvZXNPcmRlcixcbiAgb25TZWxlY3QsXG59OiB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBoZXJvZXM6IFRIZXJvT3B0aW9uW107XG4gIGhlcm9lc09yZGVyOiB7IFtoZXJvSWQ6IHN0cmluZ106IG51bWJlciB9O1xuICBvblNlbGVjdDogKG5ld0hlcm9JZDogc3RyaW5nKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgb25TZWxlY3QoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBbb25TZWxlY3RdLFxuICApO1xuICBjb25zdCBsaXN0RGF0YVByb3AgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBoZXJvSWQsXG4gICAgICBoZXJvZXMsXG4gICAgICBoZXJvZXNPcmRlcixcbiAgICAgIG9uQ2xpY2ssXG4gICAgfSksXG4gICAgW2hlcm9JZCwgaGVyb2VzLCBoZXJvZXNPcmRlciwgb25DbGlja10sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxBdXRvUmVzaXplcj5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgIDxGaXhlZFNpemVMaXN0XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17aGVyb2VzLmxlbmd0aH1cbiAgICAgICAgICAgIGl0ZW1TaXplPXsxMH1cbiAgICAgICAgICAgIGl0ZW1EYXRhPXtsaXN0RGF0YVByb3B9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1JlbmRlckhlcm9PcHRpb259XG4gICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxuICAgICAgICApfVxuICAgICAgPC9BdXRvUmVzaXplcj5cbiAgICAgIHsvKiB7aGVyb2VzLm1hcCgoaGVybykgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAga2V5PXtoZXJvLmlkfVxuICAgICAgICAgIGRpc2FibGVkPXtoZXJvSWQgPT09IGhlcm8uaWR9XG4gICAgICAgICAgZGF0YS1hY3RpdmU9e2hlcm9JZCA9PT0gaGVyby5pZH1cbiAgICAgICAgICB2YWx1ZT17aGVyby5pZH1cbiAgICAgICAgICBoaWRkZW49e2hlcm8uaGlkZGVufVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3sgb3JkZXI6IGhlcm9lc09yZGVyW2hlcm8uaWRdIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SGVyb0hlYWRlciBpZD17aGVyby5pZH0gey4uLmhlcm99IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9ICovfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhlcm9PcHRpb25zKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=