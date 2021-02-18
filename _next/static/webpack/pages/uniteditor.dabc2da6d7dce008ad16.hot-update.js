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
  console.log(sbst, bst);
  var scoreColor = sbst > bst ? _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].blue : _Number_draw__WEBPACK_IMPORTED_MODULE_0__["colors"].green;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9TdGF0TnVtYmVyL2RyYXcudHN4Il0sIm5hbWVzIjpbImFuY2hvciIsIngiLCJ5Iiwic2hpZnRzIiwiY29tcGFyZXMiLCJkcmF3RGlnaXQiLCJjb250ZXh0IiwibnVtYmVyQXRsYXMiLCJudW1iZXIiLCJpbmRleCIsImNvbG9yIiwiY29sb3JzIiwieWVsbG93IiwiZHN0WSIsImZvckVhY2giLCJjb21wYXJlIiwic2hpZnQiLCJkaWdpdCIsIk1hdGgiLCJmbG9vciIsImRyYXdOdW1iZXIiLCJsYXN0RGlnaXQiLCJkcmF3U3RhdE51bWJlciIsInN0YXRzIiwic2NvcmUiLCJzYnN0IiwiYnN0IiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInNjb3JlQ29sb3IiLCJibHVlIiwiZ3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxHQUFDLEVBQUUsR0FEVTtBQUViQyxHQUFDLEVBQUU7QUFGVSxDQUFmO0FBSUEsSUFBTUMsTUFBTSxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxFQUFULEVBQWEsRUFBYixDQUFmO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLEdBQVAsRUFBWSxFQUFaLENBQWpCOztBQUNBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQ2hCQyxPQURnQixFQUVoQkMsV0FGZ0IsRUFHaEJDLE1BSGdCLEVBSWhCQyxLQUpnQixFQU1iO0FBQUEsTUFESEMsS0FDRyx1RUFES0MsbURBQU0sQ0FBQ0MsTUFDWjtBQUNILE1BQU1DLElBQUksR0FBRyxJQUFJYixNQUFNLENBQUNFLENBQVgsR0FBZU8sS0FBSyxHQUFHLEVBQXBDO0FBQ0FMLFVBQVEsQ0FBQ1UsT0FBVCxDQUFpQixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDbkMsUUFBSVIsTUFBTSxJQUFJTyxPQUFkLEVBQXVCO0FBQ3JCLFVBQU1FLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVlYLE1BQU0sR0FBR08sT0FBVixHQUFxQixFQUFoQyxDQUFkO0FBQ0FLLGtFQUFVLENBQ1JkLE9BRFEsRUFFUkMsV0FGUSxFQUdSRyxLQUhRLEVBSVJPLEtBSlEsRUFLUmpCLE1BQU0sQ0FBQ0MsQ0FBUCxHQUFXRSxNQUFNLENBQUNhLEtBQUQsQ0FMVCxFQU1SSCxJQU5RLENBQVY7QUFRRDtBQUNGLEdBWkQ7QUFhQSxNQUFNUSxTQUFTLEdBQUdiLE1BQU0sR0FBRyxFQUEzQjtBQUNBWSw4REFBVSxDQUNSZCxPQURRLEVBRVJDLFdBRlEsRUFHUkcsS0FIUSxFQUlSVyxTQUpRLEVBS1JyQixNQUFNLENBQUNDLENBQVAsR0FBV0UsTUFBTSxDQUFDLENBQUQsQ0FMVCxFQU1SVSxJQU5RLENBQVY7QUFRRCxDQTlCRDs7QUErQmUsU0FBU1MsY0FBVCxPQU9aO0FBQUEsTUFORGhCLE9BTUMsUUFOREEsT0FNQztBQUFBLE1BTERDLFdBS0MsUUFMREEsV0FLQztBQUFBLE1BSkRnQixLQUlDLFFBSkRBLEtBSUM7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSxNQUZEQyxJQUVDLFFBRkRBLElBRUM7QUFBQSxNQUREQyxHQUNDLFFBRERBLEdBQ0M7QUFDREMsUUFBTSxDQUFDQyxNQUFQLENBQWNMLEtBQWQsRUFBcUJULE9BQXJCLENBQTZCLFVBQUNOLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUM5Q0osYUFBUyxDQUFDQyxPQUFELEVBQVVDLFdBQVYsRUFBdUJDLE1BQXZCLEVBQStCQyxLQUEvQixFQUFzQ0UsbURBQU0sQ0FBQ0MsTUFBN0MsQ0FBVDtBQUNELEdBRkQ7QUFHQWlCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaLEVBQWtCQyxHQUFsQjtBQUNBLE1BQU1LLFVBQVUsR0FBR04sSUFBSSxHQUFHQyxHQUFQLEdBQWFmLG1EQUFNLENBQUNxQixJQUFwQixHQUEyQnJCLG1EQUFNLENBQUNzQixLQUFyRDtBQUNBNUIsV0FBUyxDQUFDQyxPQUFELEVBQVVDLFdBQVYsRUFBdUJtQixHQUF2QixFQUE0QixDQUE1QixFQUErQmYsbURBQU0sQ0FBQ3NCLEtBQXRDLENBQVQ7QUFDQTVCLFdBQVMsQ0FBQ0MsT0FBRCxFQUFVQyxXQUFWLEVBQXVCaUIsS0FBdkIsRUFBOEIsQ0FBOUIsRUFBaUNPLFVBQWpDLENBQVQ7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLmRhYmMyZGE2ZDdkY2UwMDhhZDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHJhd051bWJlciwgeyBjb2xvcnMgfSBmcm9tICcuLi9OdW1iZXIvZHJhdyc7XG5jb25zdCBhbmNob3IgPSB7XG4gIHg6IDEzMCxcbiAgeTogNTk0LFxufTtcbmNvbnN0IHNoaWZ0cyA9IFsxNCwgMjgsIDQyLCA1Nl07XG5jb25zdCBjb21wYXJlcyA9IFsxMDAwLCAxMDAsIDEwXTtcbmNvbnN0IGRyYXdEaWdpdCA9IChcbiAgY29udGV4dCxcbiAgbnVtYmVyQXRsYXMsXG4gIG51bWJlcixcbiAgaW5kZXgsXG4gIGNvbG9yID0gY29sb3JzLnllbGxvdyxcbikgPT4ge1xuICBjb25zdCBkc3RZID0gOCArIGFuY2hvci55ICsgaW5kZXggKiAzNztcbiAgY29tcGFyZXMuZm9yRWFjaCgoY29tcGFyZSwgc2hpZnQpID0+IHtcbiAgICBpZiAobnVtYmVyID49IGNvbXBhcmUpIHtcbiAgICAgIGNvbnN0IGRpZ2l0ID0gTWF0aC5mbG9vcigobnVtYmVyIC8gY29tcGFyZSkgJSAxMCk7XG4gICAgICBkcmF3TnVtYmVyKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhcyxcbiAgICAgICAgY29sb3IsXG4gICAgICAgIGRpZ2l0LFxuICAgICAgICBhbmNob3IueCArIHNoaWZ0c1tzaGlmdF0sXG4gICAgICAgIGRzdFksXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG4gIGNvbnN0IGxhc3REaWdpdCA9IG51bWJlciAlIDEwO1xuICBkcmF3TnVtYmVyKFxuICAgIGNvbnRleHQsXG4gICAgbnVtYmVyQXRsYXMsXG4gICAgY29sb3IsXG4gICAgbGFzdERpZ2l0LFxuICAgIGFuY2hvci54ICsgc2hpZnRzWzNdLFxuICAgIGRzdFksXG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd1N0YXROdW1iZXIoe1xuICBjb250ZXh0LFxuICBudW1iZXJBdGxhcyxcbiAgc3RhdHMsXG4gIHNjb3JlLFxuICBzYnN0LFxuICBic3QsXG59KSB7XG4gIE9iamVjdC52YWx1ZXMoc3RhdHMpLmZvckVhY2goKG51bWJlciwgaW5kZXgpID0+IHtcbiAgICBkcmF3RGlnaXQoY29udGV4dCwgbnVtYmVyQXRsYXMsIG51bWJlciwgaW5kZXgsIGNvbG9ycy55ZWxsb3cpO1xuICB9KTtcbiAgY29uc29sZS5sb2coc2JzdCwgYnN0KTtcbiAgY29uc3Qgc2NvcmVDb2xvciA9IHNic3QgPiBic3QgPyBjb2xvcnMuYmx1ZSA6IGNvbG9ycy5ncmVlbjtcbiAgZHJhd0RpZ2l0KGNvbnRleHQsIG51bWJlckF0bGFzLCBic3QsIDUsIGNvbG9ycy5ncmVlbik7XG4gIGRyYXdEaWdpdChjb250ZXh0LCBudW1iZXJBdGxhcywgc2NvcmUsIDYsIHNjb3JlQ29sb3IpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==