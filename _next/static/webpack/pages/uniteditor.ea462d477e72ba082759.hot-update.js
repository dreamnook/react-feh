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
  console.log(rarity);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2FyZW5hc2NvcmUudHN4Il0sIm5hbWVzIjpbImJhc2UiLCJmYWN0b3JzIiwiYXJlbmFTY29yZSIsInJhcml0eSIsIm1lcmdlIiwiYnN0Iiwic3B0IiwiYmxlc3NlciIsImNvbnNvbGUiLCJsb2ciLCJmYWN0b3IiLCJzY29yZSIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsa0RBQU1BLElBQUksR0FBRyxHQUFiO0FBQ0EsSUFBTUMsT0FBTyxHQUFHO0FBQ2QsS0FBRztBQUNERCxRQUFJLEVBQUUsRUFETDtBQUVELGFBQU87QUFGTixHQURXO0FBS2QsS0FBRztBQUNEQSxRQUFJLEVBQUUsRUFETDtBQUVELGFBQU87QUFGTixHQUxXO0FBU2QsS0FBRztBQUNEQSxRQUFJLEVBQUUsRUFETDtBQUVELGFBQU87QUFGTixHQVRXO0FBYWQsS0FBRztBQUNEQSxRQUFJLEVBQUUsRUFETDtBQUVELGFBQU87QUFGTixHQWJXO0FBaUJkLEtBQUc7QUFDREEsUUFBSSxFQUFFLEVBREw7QUFFRCxhQUFPO0FBRk47QUFqQlcsQ0FBaEI7O0FBdUJBLFNBQVNFLFVBQVQsT0FZRztBQUFBLHlCQVhEQyxNQVdDO0FBQUEsTUFYREEsTUFXQyw0QkFYUSxDQVdSO0FBQUEsTUFWREMsS0FVQyxRQVZEQSxLQVVDO0FBQUEsTUFUREMsR0FTQyxRQVREQSxHQVNDO0FBQUEsTUFSREMsR0FRQyxRQVJEQSxHQVFDO0FBQUEsMEJBUERDLE9BT0M7QUFBQSxNQVBEQSxPQU9DLDZCQVBTLENBT1Q7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVlOLE1BQVo7QUFDQSxNQUFNTyxNQUFNLEdBQUdULE9BQU8sQ0FBQ0UsTUFBRCxDQUF0QjtBQUNBLE1BQU1RLEtBQUssR0FDVFgsSUFBSSxHQUNKVSxNQUFNLENBQUNWLElBRFAsR0FFQVUsTUFBTSxTQUZOLEdBR0FOLEtBQUssR0FBRyxDQUhSLEdBSUFRLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixHQUFHLEdBQUcsQ0FBakIsQ0FKQSxHQUtBTyxJQUFJLENBQUNDLEtBQUwsQ0FBV1AsR0FBRyxHQUFHLEdBQWpCLENBTEEsR0FNQUMsT0FBTyxHQUFHLENBUFo7QUFRQSxTQUFPSSxLQUFLLEdBQUcsQ0FBZjtBQUNEOztBQUVjVCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLmVhNDYyZDQ3N2U3MmJhMDgyNzU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlID0gMTUwO1xuY29uc3QgZmFjdG9ycyA9IHtcbiAgMToge1xuICAgIGJhc2U6IDQ3LFxuICAgIGZsb2F0OiA2OSxcbiAgfSxcbiAgMjoge1xuICAgIGJhc2U6IDQ5LFxuICAgIGZsb2F0OiA3NCxcbiAgfSxcbiAgMzoge1xuICAgIGJhc2U6IDUxLFxuICAgIGZsb2F0OiA4MSxcbiAgfSxcbiAgNDoge1xuICAgIGJhc2U6IDUzLFxuICAgIGZsb2F0OiA4NixcbiAgfSxcbiAgNToge1xuICAgIGJhc2U6IDU1LFxuICAgIGZsb2F0OiA5MyxcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGFyZW5hU2NvcmUoe1xuICByYXJpdHkgPSA1LFxuICBtZXJnZSxcbiAgYnN0LFxuICBzcHQsXG4gIGJsZXNzZXIgPSAwLFxufToge1xuICByYXJpdHk/OiA1IHwgNCB8IDMgfCAyIHwgMTtcbiAgbWVyZ2U6IG51bWJlcjtcbiAgYnN0OiBudW1iZXI7XG4gIHNwdDogbnVtYmVyO1xuICBibGVzc2VyPzogbnVtYmVyO1xufSkge1xuICBjb25zb2xlLmxvZyhyYXJpdHkpO1xuICBjb25zdCBmYWN0b3IgPSBmYWN0b3JzW3Jhcml0eV07XG4gIGNvbnN0IHNjb3JlID1cbiAgICBiYXNlICtcbiAgICBmYWN0b3IuYmFzZSArXG4gICAgZmFjdG9yLmZsb2F0ICtcbiAgICBtZXJnZSAqIDIgK1xuICAgIE1hdGguZmxvb3IoYnN0IC8gNSkgK1xuICAgIE1hdGguZmxvb3Ioc3B0IC8gMTAwKSArXG4gICAgYmxlc3NlciAqIDQ7XG4gIHJldHVybiBzY29yZSAqIDI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFyZW5hU2NvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9