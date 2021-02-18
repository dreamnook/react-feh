webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/UnitViewer/StatNumber/draw.tsx":
/*!*******************************************************!*\
  !*** ./app/components/UnitViewer/StatNumber/draw.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return drawStatNumber; });
/* harmony import */ var _Number_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Number/draw */ "./app/components/UnitViewer/Number/draw.tsx");

var anchor = {
  x: 130,
  y: 594
};
var shifts = [14, 28, 42, 56];
var compares = [1000, 100, 10];

var drawDigit = function drawDigit(context, numberAtlas, number, index) {
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow;
  var dstY = 8 + anchor.y + index * 37;
  compares.forEach(function (compare, shift) {
    if (number >= compare) {
      var digit = Math.floor(number / compare % 10);
      Object(_Number_draw__WEBPACK_IMPORTED_MODULE_0__["default"])(context, numberAtlas, color, digit, anchor.x + shifts[shift], dstY);
    }
  });
  var lastDigit = number % 10;
  Object(_Number_draw__WEBPACK_IMPORTED_MODULE_0__["default"])(context, numberAtlas, color, lastDigit, anchor.x + shifts[3], dstY);
};

function drawStatNumber(_ref) {
  var context = _ref.context,
      numberAtlas = _ref.numberAtlas,
      stats = _ref.stats,
      score = _ref.score,
      sbst = _ref.sbst,
      bst = _ref.bst;
  Object.values(stats).forEach(function (number, index) {
    drawDigit(context, numberAtlas, number, index, _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].yellow);
  });
  var scoreColor = sbst < bst ? _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].blue : _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].green;
  drawDigit(context, numberAtlas, bst, 5, _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].green);
  drawDigit(context, numberAtlas, score, 6, scoreColor);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9TdGF0TnVtYmVyL2RyYXcudHN4Il0sIm5hbWVzIjpbImFuY2hvciIsIngiLCJ5Iiwic2hpZnRzIiwiY29tcGFyZXMiLCJkcmF3RGlnaXQiLCJjb250ZXh0IiwibnVtYmVyQXRsYXMiLCJudW1iZXIiLCJpbmRleCIsImNvbG9yIiwiY29sb3JzIiwieWVsbG93IiwiZHN0WSIsImZvckVhY2giLCJjb21wYXJlIiwic2hpZnQiLCJkaWdpdCIsIk1hdGgiLCJmbG9vciIsImRyYXdOdW1iZXIiLCJsYXN0RGlnaXQiLCJkcmF3U3RhdE51bWJlciIsInN0YXRzIiwic2NvcmUiLCJzYnN0IiwiYnN0IiwiT2JqZWN0IiwidmFsdWVzIiwic2NvcmVDb2xvciIsImJsdWUiLCJncmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLEdBQUMsRUFBRSxHQURVO0FBRWJDLEdBQUMsRUFBRTtBQUZVLENBQWY7QUFJQSxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLENBQWY7QUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLEVBQVosQ0FBakI7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FDaEJDLE9BRGdCLEVBRWhCQyxXQUZnQixFQUdoQkMsTUFIZ0IsRUFJaEJDLEtBSmdCLEVBTWI7QUFBQSxNQURIQyxLQUNHLHVFQURLQyxtREFBTSxDQUFDQyxNQUNaO0FBQ0gsTUFBTUMsSUFBSSxHQUFHLElBQUliLE1BQU0sQ0FBQ0UsQ0FBWCxHQUFlTyxLQUFLLEdBQUcsRUFBcEM7QUFDQUwsVUFBUSxDQUFDVSxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUNuQyxRQUFJUixNQUFNLElBQUlPLE9BQWQsRUFBdUI7QUFDckIsVUFBTUUsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBWVgsTUFBTSxHQUFHTyxPQUFWLEdBQXFCLEVBQWhDLENBQWQ7QUFDQUssa0VBQVUsQ0FDUmQsT0FEUSxFQUVSQyxXQUZRLEVBR1JHLEtBSFEsRUFJUk8sS0FKUSxFQUtSakIsTUFBTSxDQUFDQyxDQUFQLEdBQVdFLE1BQU0sQ0FBQ2EsS0FBRCxDQUxULEVBTVJILElBTlEsQ0FBVjtBQVFEO0FBQ0YsR0FaRDtBQWFBLE1BQU1RLFNBQVMsR0FBR2IsTUFBTSxHQUFHLEVBQTNCO0FBQ0FZLDhEQUFVLENBQ1JkLE9BRFEsRUFFUkMsV0FGUSxFQUdSRyxLQUhRLEVBSVJXLFNBSlEsRUFLUnJCLE1BQU0sQ0FBQ0MsQ0FBUCxHQUFXRSxNQUFNLENBQUMsQ0FBRCxDQUxULEVBTVJVLElBTlEsQ0FBVjtBQVFELENBOUJEOztBQStCZSxTQUFTUyxjQUFULE9BT1o7QUFBQSxNQU5EaEIsT0FNQyxRQU5EQSxPQU1DO0FBQUEsTUFMREMsV0FLQyxRQUxEQSxXQUtDO0FBQUEsTUFKRGdCLEtBSUMsUUFKREEsS0FJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLE1BRkRDLElBRUMsUUFGREEsSUFFQztBQUFBLE1BRERDLEdBQ0MsUUFEREEsR0FDQztBQUNEQyxRQUFNLENBQUNDLE1BQVAsQ0FBY0wsS0FBZCxFQUFxQlQsT0FBckIsQ0FBNkIsVUFBQ04sTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQzlDSixhQUFTLENBQUNDLE9BQUQsRUFBVUMsV0FBVixFQUF1QkMsTUFBdkIsRUFBK0JDLEtBQS9CLEVBQXNDRSxtREFBTSxDQUFDQyxNQUE3QyxDQUFUO0FBQ0QsR0FGRDtBQUdBLE1BQU1pQixVQUFVLEdBQUdKLElBQUksR0FBR0MsR0FBUCxHQUFhZixtREFBTSxDQUFDbUIsSUFBcEIsR0FBMkJuQixtREFBTSxDQUFDb0IsS0FBckQ7QUFDQTFCLFdBQVMsQ0FBQ0MsT0FBRCxFQUFVQyxXQUFWLEVBQXVCbUIsR0FBdkIsRUFBNEIsQ0FBNUIsRUFBK0JmLG1EQUFNLENBQUNvQixLQUF0QyxDQUFUO0FBQ0ExQixXQUFTLENBQUNDLE9BQUQsRUFBVUMsV0FBVixFQUF1QmlCLEtBQXZCLEVBQThCLENBQTlCLEVBQWlDSyxVQUFqQyxDQUFUO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci5kY2NlMzkyOWJiOWUzM2U0MzJmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRyYXdOdW1iZXIsIHsgY29sb3JzIH0gZnJvbSAnLi4vTnVtYmVyL2RyYXcnO1xuY29uc3QgYW5jaG9yID0ge1xuICB4OiAxMzAsXG4gIHk6IDU5NCxcbn07XG5jb25zdCBzaGlmdHMgPSBbMTQsIDI4LCA0MiwgNTZdO1xuY29uc3QgY29tcGFyZXMgPSBbMTAwMCwgMTAwLCAxMF07XG5jb25zdCBkcmF3RGlnaXQgPSAoXG4gIGNvbnRleHQsXG4gIG51bWJlckF0bGFzLFxuICBudW1iZXIsXG4gIGluZGV4LFxuICBjb2xvciA9IGNvbG9ycy55ZWxsb3csXG4pID0+IHtcbiAgY29uc3QgZHN0WSA9IDggKyBhbmNob3IueSArIGluZGV4ICogMzc7XG4gIGNvbXBhcmVzLmZvckVhY2goKGNvbXBhcmUsIHNoaWZ0KSA9PiB7XG4gICAgaWYgKG51bWJlciA+PSBjb21wYXJlKSB7XG4gICAgICBjb25zdCBkaWdpdCA9IE1hdGguZmxvb3IoKG51bWJlciAvIGNvbXBhcmUpICUgMTApO1xuICAgICAgZHJhd051bWJlcihcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXMsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBkaWdpdCxcbiAgICAgICAgYW5jaG9yLnggKyBzaGlmdHNbc2hpZnRdLFxuICAgICAgICBkc3RZLFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBsYXN0RGlnaXQgPSBudW1iZXIgJSAxMDtcbiAgZHJhd051bWJlcihcbiAgICBjb250ZXh0LFxuICAgIG51bWJlckF0bGFzLFxuICAgIGNvbG9yLFxuICAgIGxhc3REaWdpdCxcbiAgICBhbmNob3IueCArIHNoaWZ0c1szXSxcbiAgICBkc3RZLFxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdTdGF0TnVtYmVyKHtcbiAgY29udGV4dCxcbiAgbnVtYmVyQXRsYXMsXG4gIHN0YXRzLFxuICBzY29yZSxcbiAgc2JzdCxcbiAgYnN0LFxufSkge1xuICBPYmplY3QudmFsdWVzKHN0YXRzKS5mb3JFYWNoKChudW1iZXIsIGluZGV4KSA9PiB7XG4gICAgZHJhd0RpZ2l0KGNvbnRleHQsIG51bWJlckF0bGFzLCBudW1iZXIsIGluZGV4LCBjb2xvcnMueWVsbG93KTtcbiAgfSk7XG4gIGNvbnN0IHNjb3JlQ29sb3IgPSBzYnN0IDwgYnN0ID8gY29sb3JzLmJsdWUgOiBjb2xvcnMuZ3JlZW47XG4gIGRyYXdEaWdpdChjb250ZXh0LCBudW1iZXJBdGxhcywgYnN0LCA1LCBjb2xvcnMuZ3JlZW4pO1xuICBkcmF3RGlnaXQoY29udGV4dCwgbnVtYmVyQXRsYXMsIHNjb3JlLCA2LCBzY29yZUNvbG9yKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=