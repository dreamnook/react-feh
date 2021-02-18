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
  var scoreColor = sbst > bst ? _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].blue : _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].green;
  drawDigit(context, numberAtlas, bst, 5, _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].green);
  drawDigit(context, numberAtlas, score, 6, _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].blue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9TdGF0TnVtYmVyL2RyYXcudHN4Il0sIm5hbWVzIjpbImFuY2hvciIsIngiLCJ5Iiwic2hpZnRzIiwiY29tcGFyZXMiLCJkcmF3RGlnaXQiLCJjb250ZXh0IiwibnVtYmVyQXRsYXMiLCJudW1iZXIiLCJpbmRleCIsImNvbG9yIiwiY29sb3JzIiwieWVsbG93IiwiZHN0WSIsImZvckVhY2giLCJjb21wYXJlIiwic2hpZnQiLCJkaWdpdCIsIk1hdGgiLCJmbG9vciIsImRyYXdOdW1iZXIiLCJsYXN0RGlnaXQiLCJkcmF3U3RhdE51bWJlciIsInN0YXRzIiwic2NvcmUiLCJzYnN0IiwiYnN0IiwiT2JqZWN0IiwidmFsdWVzIiwic2NvcmVDb2xvciIsImJsdWUiLCJncmVlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLEdBQUMsRUFBRSxHQURVO0FBRWJDLEdBQUMsRUFBRTtBQUZVLENBQWY7QUFJQSxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLENBQWY7QUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxJQUFELEVBQU8sR0FBUCxFQUFZLEVBQVosQ0FBakI7O0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FDaEJDLE9BRGdCLEVBRWhCQyxXQUZnQixFQUdoQkMsTUFIZ0IsRUFJaEJDLEtBSmdCLEVBTWI7QUFBQSxNQURIQyxLQUNHLHVFQURLQyxtREFBTSxDQUFDQyxNQUNaO0FBQ0gsTUFBTUMsSUFBSSxHQUFHLElBQUliLE1BQU0sQ0FBQ0UsQ0FBWCxHQUFlTyxLQUFLLEdBQUcsRUFBcEM7QUFDQUwsVUFBUSxDQUFDVSxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBVUMsS0FBVixFQUFvQjtBQUNuQyxRQUFJUixNQUFNLElBQUlPLE9BQWQsRUFBdUI7QUFDckIsVUFBTUUsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBWVgsTUFBTSxHQUFHTyxPQUFWLEdBQXFCLEVBQWhDLENBQWQ7QUFDQUssa0VBQVUsQ0FDUmQsT0FEUSxFQUVSQyxXQUZRLEVBR1JHLEtBSFEsRUFJUk8sS0FKUSxFQUtSakIsTUFBTSxDQUFDQyxDQUFQLEdBQVdFLE1BQU0sQ0FBQ2EsS0FBRCxDQUxULEVBTVJILElBTlEsQ0FBVjtBQVFEO0FBQ0YsR0FaRDtBQWFBLE1BQU1RLFNBQVMsR0FBR2IsTUFBTSxHQUFHLEVBQTNCO0FBQ0FZLDhEQUFVLENBQ1JkLE9BRFEsRUFFUkMsV0FGUSxFQUdSRyxLQUhRLEVBSVJXLFNBSlEsRUFLUnJCLE1BQU0sQ0FBQ0MsQ0FBUCxHQUFXRSxNQUFNLENBQUMsQ0FBRCxDQUxULEVBTVJVLElBTlEsQ0FBVjtBQVFELENBOUJEOztBQStCZSxTQUFTUyxjQUFULE9BT1o7QUFBQSxNQU5EaEIsT0FNQyxRQU5EQSxPQU1DO0FBQUEsTUFMREMsV0FLQyxRQUxEQSxXQUtDO0FBQUEsTUFKRGdCLEtBSUMsUUFKREEsS0FJQztBQUFBLE1BSERDLEtBR0MsUUFIREEsS0FHQztBQUFBLE1BRkRDLElBRUMsUUFGREEsSUFFQztBQUFBLE1BRERDLEdBQ0MsUUFEREEsR0FDQztBQUNEQyxRQUFNLENBQUNDLE1BQVAsQ0FBY0wsS0FBZCxFQUFxQlQsT0FBckIsQ0FBNkIsVUFBQ04sTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQzlDSixhQUFTLENBQUNDLE9BQUQsRUFBVUMsV0FBVixFQUF1QkMsTUFBdkIsRUFBK0JDLEtBQS9CLEVBQXNDRSxtREFBTSxDQUFDQyxNQUE3QyxDQUFUO0FBQ0QsR0FGRDtBQUdBLE1BQU1pQixVQUFVLEdBQUdKLElBQUksR0FBR0MsR0FBUCxHQUFhZixtREFBTSxDQUFDbUIsSUFBcEIsR0FBMkJuQixtREFBTSxDQUFDb0IsS0FBckQ7QUFDQTFCLFdBQVMsQ0FBQ0MsT0FBRCxFQUFVQyxXQUFWLEVBQXVCbUIsR0FBdkIsRUFBNEIsQ0FBNUIsRUFBK0JmLG1EQUFNLENBQUNvQixLQUF0QyxDQUFUO0FBQ0ExQixXQUFTLENBQUNDLE9BQUQsRUFBVUMsV0FBVixFQUF1QmlCLEtBQXZCLEVBQThCLENBQTlCLEVBQWlDYixtREFBTSxDQUFDbUIsSUFBeEMsQ0FBVDtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuMzk3MTQyNzQwNTVjMTkyMjlkMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkcmF3TnVtYmVyLCB7IGNvbG9ycyB9IGZyb20gJy4uL051bWJlci9kcmF3JztcbmNvbnN0IGFuY2hvciA9IHtcbiAgeDogMTMwLFxuICB5OiA1OTQsXG59O1xuY29uc3Qgc2hpZnRzID0gWzE0LCAyOCwgNDIsIDU2XTtcbmNvbnN0IGNvbXBhcmVzID0gWzEwMDAsIDEwMCwgMTBdO1xuY29uc3QgZHJhd0RpZ2l0ID0gKFxuICBjb250ZXh0LFxuICBudW1iZXJBdGxhcyxcbiAgbnVtYmVyLFxuICBpbmRleCxcbiAgY29sb3IgPSBjb2xvcnMueWVsbG93LFxuKSA9PiB7XG4gIGNvbnN0IGRzdFkgPSA4ICsgYW5jaG9yLnkgKyBpbmRleCAqIDM3O1xuICBjb21wYXJlcy5mb3JFYWNoKChjb21wYXJlLCBzaGlmdCkgPT4ge1xuICAgIGlmIChudW1iZXIgPj0gY29tcGFyZSkge1xuICAgICAgY29uc3QgZGlnaXQgPSBNYXRoLmZsb29yKChudW1iZXIgLyBjb21wYXJlKSAlIDEwKTtcbiAgICAgIGRyYXdOdW1iZXIoXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgZGlnaXQsXG4gICAgICAgIGFuY2hvci54ICsgc2hpZnRzW3NoaWZ0XSxcbiAgICAgICAgZHN0WSxcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgbGFzdERpZ2l0ID0gbnVtYmVyICUgMTA7XG4gIGRyYXdOdW1iZXIoXG4gICAgY29udGV4dCxcbiAgICBudW1iZXJBdGxhcyxcbiAgICBjb2xvcixcbiAgICBsYXN0RGlnaXQsXG4gICAgYW5jaG9yLnggKyBzaGlmdHNbM10sXG4gICAgZHN0WSxcbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3U3RhdE51bWJlcih7XG4gIGNvbnRleHQsXG4gIG51bWJlckF0bGFzLFxuICBzdGF0cyxcbiAgc2NvcmUsXG4gIHNic3QsXG4gIGJzdCxcbn0pIHtcbiAgT2JqZWN0LnZhbHVlcyhzdGF0cykuZm9yRWFjaCgobnVtYmVyLCBpbmRleCkgPT4ge1xuICAgIGRyYXdEaWdpdChjb250ZXh0LCBudW1iZXJBdGxhcywgbnVtYmVyLCBpbmRleCwgY29sb3JzLnllbGxvdyk7XG4gIH0pO1xuICBjb25zdCBzY29yZUNvbG9yID0gc2JzdCA+IGJzdCA/IGNvbG9ycy5ibHVlIDogY29sb3JzLmdyZWVuO1xuICBkcmF3RGlnaXQoY29udGV4dCwgbnVtYmVyQXRsYXMsIGJzdCwgNSwgY29sb3JzLmdyZWVuKTtcbiAgZHJhd0RpZ2l0KGNvbnRleHQsIG51bWJlckF0bGFzLCBzY29yZSwgNiwgY29sb3JzLmJsdWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==