webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/utils/arenascore.tsx":
/*!**********************************!*\
  !*** ./app/utils/arenascore.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var base = 150;
var factors = {
  1: {
    base: 47,
    "float": 69
  },
  2: {
    base: 49,
    "float": 74
  },
  3: {
    base: 51,
    "float": 81
  },
  4: {
    base: 53,
    "float": 86
  },
  5: {
    base: 55,
    "float": 93
  }
};

function arenaScore(_ref) {
  var _ref$rarity = _ref.rarity,
      rarity = _ref$rarity === void 0 ? 5 : _ref$rarity,
      merge = _ref.merge,
      bst = _ref.bst,
      spt = _ref.spt,
      _ref$blesser = _ref.blesser,
      blesser = _ref$blesser === void 0 ? 0 : _ref$blesser;
  var factor = factors[rarity];
  var score = base + factor.base + factor["float"] + merge * 2 + Math.floor(bst / 5) + Math.floor(spt / 100) + blesser * 4;
  return score * 2;
}

/* harmony default export */ __webpack_exports__["default"] = (arenaScore);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2FyZW5hc2NvcmUudHN4Il0sIm5hbWVzIjpbImJhc2UiLCJmYWN0b3JzIiwiYXJlbmFTY29yZSIsInJhcml0eSIsIm1lcmdlIiwiYnN0Iiwic3B0IiwiYmxlc3NlciIsImZhY3RvciIsInNjb3JlIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxrREFBTUEsSUFBSSxHQUFHLEdBQWI7QUFDQSxJQUFNQyxPQUFPLEdBQUc7QUFDZCxLQUFHO0FBQ0RELFFBQUksRUFBRSxFQURMO0FBRUQsYUFBTztBQUZOLEdBRFc7QUFLZCxLQUFHO0FBQ0RBLFFBQUksRUFBRSxFQURMO0FBRUQsYUFBTztBQUZOLEdBTFc7QUFTZCxLQUFHO0FBQ0RBLFFBQUksRUFBRSxFQURMO0FBRUQsYUFBTztBQUZOLEdBVFc7QUFhZCxLQUFHO0FBQ0RBLFFBQUksRUFBRSxFQURMO0FBRUQsYUFBTztBQUZOLEdBYlc7QUFpQmQsS0FBRztBQUNEQSxRQUFJLEVBQUUsRUFETDtBQUVELGFBQU87QUFGTjtBQWpCVyxDQUFoQjs7QUF1QkEsU0FBU0UsVUFBVCxPQVlHO0FBQUEseUJBWERDLE1BV0M7QUFBQSxNQVhEQSxNQVdDLDRCQVhRLENBV1I7QUFBQSxNQVZEQyxLQVVDLFFBVkRBLEtBVUM7QUFBQSxNQVREQyxHQVNDLFFBVERBLEdBU0M7QUFBQSxNQVJEQyxHQVFDLFFBUkRBLEdBUUM7QUFBQSwwQkFQREMsT0FPQztBQUFBLE1BUERBLE9BT0MsNkJBUFMsQ0FPVDtBQUNELE1BQU1DLE1BQU0sR0FBR1AsT0FBTyxDQUFDRSxNQUFELENBQXRCO0FBQ0EsTUFBTU0sS0FBSyxHQUNUVCxJQUFJLEdBQ0pRLE1BQU0sQ0FBQ1IsSUFEUCxHQUVBUSxNQUFNLFNBRk4sR0FHQUosS0FBSyxHQUFHLENBSFIsR0FJQU0sSUFBSSxDQUFDQyxLQUFMLENBQVdOLEdBQUcsR0FBRyxDQUFqQixDQUpBLEdBS0FLLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxHQUFHLEdBQUcsR0FBakIsQ0FMQSxHQU1BQyxPQUFPLEdBQUcsQ0FQWjtBQVFBLFNBQU9FLEtBQUssR0FBRyxDQUFmO0FBQ0Q7O0FBRWNQLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuMDU2OTdiOGRjYWJlZjcxMzVhZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2UgPSAxNTA7XG5jb25zdCBmYWN0b3JzID0ge1xuICAxOiB7XG4gICAgYmFzZTogNDcsXG4gICAgZmxvYXQ6IDY5LFxuICB9LFxuICAyOiB7XG4gICAgYmFzZTogNDksXG4gICAgZmxvYXQ6IDc0LFxuICB9LFxuICAzOiB7XG4gICAgYmFzZTogNTEsXG4gICAgZmxvYXQ6IDgxLFxuICB9LFxuICA0OiB7XG4gICAgYmFzZTogNTMsXG4gICAgZmxvYXQ6IDg2LFxuICB9LFxuICA1OiB7XG4gICAgYmFzZTogNTUsXG4gICAgZmxvYXQ6IDkzLFxuICB9LFxufTtcblxuZnVuY3Rpb24gYXJlbmFTY29yZSh7XG4gIHJhcml0eSA9IDUsXG4gIG1lcmdlLFxuICBic3QsXG4gIHNwdCxcbiAgYmxlc3NlciA9IDAsXG59OiB7XG4gIHJhcml0eT86IDUgfCA0IHwgMyB8IDIgfCAxO1xuICBtZXJnZTogbnVtYmVyO1xuICBic3Q6IG51bWJlcjtcbiAgc3B0OiBudW1iZXI7XG4gIGJsZXNzZXI/OiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IGZhY3RvciA9IGZhY3RvcnNbcmFyaXR5XTtcbiAgY29uc3Qgc2NvcmUgPVxuICAgIGJhc2UgK1xuICAgIGZhY3Rvci5iYXNlICtcbiAgICBmYWN0b3IuZmxvYXQgK1xuICAgIG1lcmdlICogMiArXG4gICAgTWF0aC5mbG9vcihic3QgLyA1KSArXG4gICAgTWF0aC5mbG9vcihzcHQgLyAxMDApICtcbiAgICBibGVzc2VyICogNDtcbiAgcmV0dXJuIHNjb3JlICogMjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJlbmFTY29yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=