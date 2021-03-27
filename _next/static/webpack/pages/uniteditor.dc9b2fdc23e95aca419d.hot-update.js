webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/RarityPicker/index.tsx":
/*!***********************************************!*\
  !*** ./app/components/RarityPicker/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _raritypicker_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raritypicker.module.css */ "./app/components/RarityPicker/raritypicker.module.css");
/* harmony import */ var _raritypicker_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_raritypicker_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\RarityPicker\\index.tsx",
    _s = $RefreshSig$();



var defaultOptions = [{
  name: '5☆',
  value: 5
}, {
  name: '4★',
  value: 4
}];

function RarityPicker(_ref) {
  _s();

  var _this = this;

  var _ref$rarity = _ref.rarity,
      rarity = _ref$rarity === void 0 ? 5 : _ref$rarity,
      _ref$minRarity = _ref.minRarity,
      minRarity = _ref$minRarity === void 0 ? 5 : _ref$minRarity,
      onSelect = _ref.onSelect;
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    if (onSelect) {
      onSelect(Number(event.currentTarget.value));
    }
  }, [onSelect]);
  var options = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (minRarity < 5) {
      return defaultOptions;
    }

    return defaultOptions.slice(0, 1);
  }, [minRarity]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _raritypicker_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.raritypicker,
    children: options.map(function (option) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onClick,
        "data-active": option.value === rarity,
        value: option.value,
        children: option.name
      }, option.value, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(RarityPicker, "w2jg9Vsppdv/7FH5mXZeAn++JjM=");

_c = RarityPicker;
/* harmony default export */ __webpack_exports__["default"] = (RarityPicker);

var _c;

$RefreshReg$(_c, "RarityPicker");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUmFyaXR5UGlja2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJkZWZhdWx0T3B0aW9ucyIsIm5hbWUiLCJ2YWx1ZSIsIlJhcml0eVBpY2tlciIsInJhcml0eSIsIm1pblJhcml0eSIsIm9uU2VsZWN0Iiwib25DbGljayIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJOdW1iZXIiLCJjdXJyZW50VGFyZ2V0Iiwib3B0aW9ucyIsInVzZU1lbW8iLCJzbGljZSIsInN0eWxlcyIsInJhcml0eXBpY2tlciIsIm1hcCIsIm9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFRQSxJQUFNQSxjQUFjLEdBQUcsQ0FDckI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsT0FBSyxFQUFFO0FBQXJCLENBRHFCLEVBRXJCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE9BQUssRUFBRTtBQUFyQixDQUZxQixDQUF2Qjs7QUFLQSxTQUFTQyxZQUFULE9BSXFDO0FBQUE7O0FBQUE7O0FBQUEseUJBSG5DQyxNQUdtQztBQUFBLE1BSG5DQSxNQUdtQyw0QkFIMUIsQ0FHMEI7QUFBQSw0QkFGbkNDLFNBRW1DO0FBQUEsTUFGbkNBLFNBRW1DLCtCQUZ2QixDQUV1QjtBQUFBLE1BRG5DQyxRQUNtQyxRQURuQ0EsUUFDbUM7QUFDbkMsTUFBTUMsT0FBTyxHQUFHQyx5REFBVyxDQUN6QixVQUFDQyxLQUFELEVBQVc7QUFDVCxRQUFJSCxRQUFKLEVBQWM7QUFDWkEsY0FBUSxDQUFDSSxNQUFNLENBQUNELEtBQUssQ0FBQ0UsYUFBTixDQUFvQlQsS0FBckIsQ0FBUCxDQUFSO0FBQ0Q7QUFDRixHQUx3QixFQU16QixDQUFDSSxRQUFELENBTnlCLENBQTNCO0FBUUEsTUFBTU0sT0FBTyxHQUFHQyxxREFBTyxDQUFDLFlBQU07QUFDNUIsUUFBSVIsU0FBUyxHQUFHLENBQWhCLEVBQW1CO0FBQ2pCLGFBQU9MLGNBQVA7QUFDRDs7QUFDRCxXQUFPQSxjQUFjLENBQUNjLEtBQWYsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBUDtBQUNELEdBTHNCLEVBS3BCLENBQUNULFNBQUQsQ0FMb0IsQ0FBdkI7QUFPQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVUsK0RBQU0sQ0FBQ0MsWUFBdkI7QUFBQSxjQUNHSixPQUFPLENBQUNLLEdBQVIsQ0FBWSxVQUFDQyxNQUFEO0FBQUEsMEJBQ1g7QUFFRSxlQUFPLEVBQUVYLE9BRlg7QUFHRSx1QkFBYVcsTUFBTSxDQUFDaEIsS0FBUCxLQUFpQkUsTUFIaEM7QUFJRSxhQUFLLEVBQUVjLE1BQU0sQ0FBQ2hCLEtBSmhCO0FBQUEsa0JBTUdnQixNQUFNLENBQUNqQjtBQU5WLFNBQ09pQixNQUFNLENBQUNoQixLQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7R0FsQ1FDLFk7O0tBQUFBLFk7QUFvQ01BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuZGM5YjJmZGMyM2U5NWFjYTQxOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0RWxlbWVudCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcmFyaXR5cGlja2VyLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgdHlwZSBUUmFyaXR5UGlja2VyUHJvcHMgPSB7XG4gIHJhcml0eTogNSB8IDQ7XG4gIG1pblJhcml0eT86IDUgfCA0O1xuICBvblNlbGVjdD86IChuZXdSYXJpdHk6IG51bWJlcikgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0gW1xuICB7IG5hbWU6ICc14piGJywgdmFsdWU6IDUgfSxcbiAgeyBuYW1lOiAnNOKYhScsIHZhbHVlOiA0IH0sXG5dO1xuXG5mdW5jdGlvbiBSYXJpdHlQaWNrZXIoe1xuICByYXJpdHkgPSA1LFxuICBtaW5SYXJpdHkgPSA1LFxuICBvblNlbGVjdCxcbn06IFRSYXJpdHlQaWNrZXJQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChvblNlbGVjdCkge1xuICAgICAgICBvblNlbGVjdChOdW1iZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29uU2VsZWN0XSxcbiAgKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChtaW5SYXJpdHkgPCA1KSB7XG4gICAgICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0T3B0aW9ucy5zbGljZSgwLCAxKTtcbiAgfSwgW21pblJhcml0eV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXJpdHlwaWNrZXJ9PlxuICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGtleT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgZGF0YS1hY3RpdmU9e29wdGlvbi52YWx1ZSA9PT0gcmFyaXR5fVxuICAgICAgICAgIHZhbHVlPXtvcHRpb24udmFsdWV9XG4gICAgICAgID5cbiAgICAgICAgICB7b3B0aW9uLm5hbWV9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhcml0eVBpY2tlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=