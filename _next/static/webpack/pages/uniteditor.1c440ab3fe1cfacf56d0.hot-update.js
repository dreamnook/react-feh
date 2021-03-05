webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/utils/stats.tsx":
/*!*****************************!*\
  !*** ./app/utils/stats.tsx ***!
  \*****************************/
/*! exports provided: getIncreaseIndexes, getStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIncreaseIndexes", function() { return getIncreaseIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStats", function() { return getStats; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _iv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iv */ "./app/utils/iv.tsx");
/* harmony import */ var _merges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./merges */ "./app/utils/merges.tsx");
/* harmony import */ var _dragonflower__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dragonflower */ "./app/utils/dragonflower.tsx");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function getIncreaseIndexes(lv1Stats) {
  var mapped = Object.entries(lv1Stats).map(function (_ref, index) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
        key = _ref2[0],
        stat = _ref2[1];

    return {
      key: key,
      stat: stat,
      index: index
    };
  });
  mapped.sort(function (a, b) {
    if (a.stat > b.stat) {
      return -1;
    }

    if (a.stat < b.stat) {
      return 1;
    }

    if (a.index < b.index) {
      return -1;
    }

    if (a.index > b.index) {
      return 1;
    }

    return 0;
  });
  var indexes = mapped.map(function (_ref3) {
    var key = _ref3.key;
    return key;
  });
  return indexes;
}
var getStats = function getStats(rarity, stats, iv, merge, support, skillStats, lv1, arena, dragonflower, resplendent) {
  var _getStatsWithIV = Object(_iv__WEBPACK_IMPORTED_MODULE_3__["getStatsWithIV"])(stats["".concat(rarity)], iv, merge),
      bst = _getStatsWithIV.bst,
      statsBase = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_getStatsWithIV, ["bst"]);

  var lv1Stats = Object(_iv__WEBPACK_IMPORTED_MODULE_3__["getLv1StatsWithIV"])(stats["".concat(rarity, "-1")], iv);
  var mergeBase = Object(_iv__WEBPACK_IMPORTED_MODULE_3__["getLv1StatsWithIV"])(stats["5-1"], iv);
  var increaseIndexes = getIncreaseIndexes(mergeBase);
  var mergeStats = Object(_merges__WEBPACK_IMPORTED_MODULE_4__["getMergeStats"])(increaseIndexes, merge, !iv || iv === '-');
  var dragonflowerStats = Object(_dragonflower__WEBPACK_IMPORTED_MODULE_5__["getDragonflowerStats"])(increaseIndexes, dragonflower);
  var supportStats = support ? {
    hp: 5,
    atk: 2,
    spd: 2,
    def: 2,
    res: 2
  } : {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  };
  var arneaStats = arena ? {
    hp: 10,
    atk: 4,
    spd: 4,
    def: 4,
    res: 4
  } : {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  };
  var resplendentValue = resplendent ? 2 : 0;
  var statsSum = Object.entries(lv1 ? lv1Stats : statsBase).reduce(function (accumulator, _ref4) {
    var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, 2),
        key = _ref5[0],
        stat = _ref5[1];

    var value = stat + skillStats[key] + mergeStats[key] + dragonflowerStats[key] + supportStats[key] + arneaStats[key] + resplendentValue;
    return _objectSpread(_objectSpread({}, accumulator), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value > -1 ? value : 0));
  }, {});
  return {
    stats: statsSum,
    bst: bst
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL3N0YXRzLnRzeCJdLCJuYW1lcyI6WyJnZXRJbmNyZWFzZUluZGV4ZXMiLCJsdjFTdGF0cyIsIm1hcHBlZCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJpbmRleCIsImtleSIsInN0YXQiLCJzb3J0IiwiYSIsImIiLCJpbmRleGVzIiwiZ2V0U3RhdHMiLCJyYXJpdHkiLCJzdGF0cyIsIml2IiwibWVyZ2UiLCJzdXBwb3J0Iiwic2tpbGxTdGF0cyIsImx2MSIsImFyZW5hIiwiZHJhZ29uZmxvd2VyIiwicmVzcGxlbmRlbnQiLCJnZXRTdGF0c1dpdGhJViIsImJzdCIsInN0YXRzQmFzZSIsImdldEx2MVN0YXRzV2l0aElWIiwibWVyZ2VCYXNlIiwiaW5jcmVhc2VJbmRleGVzIiwibWVyZ2VTdGF0cyIsImdldE1lcmdlU3RhdHMiLCJkcmFnb25mbG93ZXJTdGF0cyIsImdldERyYWdvbmZsb3dlclN0YXRzIiwic3VwcG9ydFN0YXRzIiwiaHAiLCJhdGsiLCJzcGQiLCJkZWYiLCJyZXMiLCJhcm5lYVN0YXRzIiwicmVzcGxlbmRlbnRWYWx1ZSIsInN0YXRzU3VtIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0Esa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQWtEO0FBQ3ZELE1BQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVILFFBQWYsRUFBeUJJLEdBQXpCLENBQTZCLGdCQUFjQyxLQUFkO0FBQUE7QUFBQSxRQUFFQyxHQUFGO0FBQUEsUUFBT0MsSUFBUDs7QUFBQSxXQUF5QjtBQUNuRUQsU0FBRyxFQUFIQSxHQURtRTtBQUVuRUMsVUFBSSxFQUFKQSxJQUZtRTtBQUduRUYsV0FBSyxFQUFMQTtBQUhtRSxLQUF6QjtBQUFBLEdBQTdCLENBQWY7QUFLQUosUUFBTSxDQUFDTyxJ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QUFILEdBQWN5QixTQUFoQyxFQUEyQ2lCLE1BQTNDLENBQ2YsVUFBQ0MsV0FBRCxTQUE4QjtBQUFBO0FBQUEsUUFBZnJDLEdBQWU7QUFBQSxRQUFWQyxJQUFVOztBQUM1QixRQUFNcUMsS0FBSyxHQUNUckMsSUFBSSxHQUNKVyxVQUFVLENBQUNaLEdBQUQsQ0FEVixHQUVBdUIsVUFBVSxDQUFDdkIsR0FBRCxDQUZWLEdBR0F5QixpQkFBaUIsQ0FBQ3pCLEdBQUQsQ0FIakIsR0FJQTJCLFlBQVksQ0FBQzNCLEdBQUQsQ0FKWixHQUtBaUMsVUFBVSxDQUFDakMsR0FBRCxDQUxWLEdBTUFrQyxnQkFQRjtBQVFBLDJDQUNLRyxXQURMLHFHQUVHckMsR0FGSCxFQUVTc0MsS0FBSyxHQUFHLENBQUMsQ0FBVCxHQUFhQSxLQUFiLEdBQXFCLENBRjlCO0FBSUQsR0FkYyxFQWVmLEVBZmUsQ0FBakI7QUFpQkEsU0FBTztBQUFFOUIsU0FBSyxFQUFFMkIsUUFBVDtBQUFtQmpCLE9BQUcsRUFBSEE7QUFBbkIsR0FBUDtBQUNELENBM0NNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuMWM0NDBhYjNmZTFjZmFjZjU2ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRVbml0RnVsbFN0YXRzLCBUVW5pdFN0YXRzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdGF0c1dpdGhJViwgZ2V0THYxU3RhdHNXaXRoSVYgfSBmcm9tICcuL2l2JztcbmltcG9ydCB7IGdldE1lcmdlU3RhdHMgfSBmcm9tICcuL21lcmdlcyc7XG5pbXBvcnQgeyBnZXREcmFnb25mbG93ZXJTdGF0cyB9IGZyb20gJy4vZHJhZ29uZmxvd2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluY3JlYXNlSW5kZXhlcyhsdjFTdGF0czogVFVuaXRTdGF0cykge1xuICBjb25zdCBtYXBwZWQgPSBPYmplY3QuZW50cmllcyhsdjFTdGF0cykubWFwKChba2V5LCBzdGF0XSwgaW5kZXgpID0+ICh7XG4gICAga2V5LFxuICAgIHN0YXQsXG4gICAgaW5kZXgsXG4gIH0pKTtcbiAgbWFwcGVkLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5zdGF0ID4gYi5zdGF0KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhLnN0YXQgPCBiLnN0YXQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoYS5pbmRleCA8IGIuaW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGEuaW5kZXggPiBiLmluZGV4KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xuICBjb25zdCBpbmRleGVzID0gbWFwcGVkLm1hcCgoeyBrZXkgfSkgPT4ga2V5KTtcbiAgcmV0dXJuIGluZGV4ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0cyA9IChcbiAgcmFyaXR5OiBudW1iZXIsXG4gIHN0YXRzOiBUVW5pdEZ1bGxTdGF0cyxcbiAgaXY6IHN0cmluZyxcbiAgbWVyZ2U6IG51bWJlcixcbiAgc3VwcG9ydDogYm9vbGVhbixcbiAgc2tpbGxTdGF0czogVFVuaXRTdGF0cyxcbiAgbHYxOiBib29sZWFuLFxuICBhcmVuYTogYm9vbGVhbixcbiAgZHJhZ29uZmxvd2VyOiBudW1iZXIsXG4gIHJlc3BsZW5kZW50OiBib29sZWFuLFxuKSA9PiB7XG4gIGNvbnN0IHsgYnN0LCAuLi5zdGF0c0Jhc2UgfSA9IGdldFN0YXRzV2l0aElWKHN0YXRzW2Ake3Jhcml0eX1gXSwgaXYsIG1lcmdlKTtcbiAgY29uc3QgbHYxU3RhdHMgPSBnZXRMdjFTdGF0c1dpdGhJVihzdGF0c1tgJHtyYXJpdHl9LTFgXSwgaXYpO1xuICBjb25zdCBtZXJnZUJhc2UgPSBnZXRMdjFTdGF0c1dpdGhJVihzdGF0c1tgNS0xYF0sIGl2KTtcbiAgY29uc3QgaW5jcmVhc2VJbmRleGVzID0gZ2V0SW5jcmVhc2VJbmRleGVzKG1lcmdlQmFzZSk7XG4gIGNvbnN0IG1lcmdlU3RhdHMgPSBnZXRNZXJnZVN0YXRzKGluY3JlYXNlSW5kZXhlcywgbWVyZ2UsICFpdiB8fCBpdiA9PT0gJy0nKTtcbiAgY29uc3QgZHJhZ29uZmxvd2VyU3RhdHMgPSBnZXREcmFnb25mbG93ZXJTdGF0cyhpbmNyZWFzZUluZGV4ZXMsIGRyYWdvbmZsb3dlcik7XG4gIGNvbnN0IHN1cHBvcnRTdGF0cyA9IHN1cHBvcnRcbiAgICA/IHsgaHA6IDUsIGF0azogMiwgc3BkOiAyLCBkZWY6IDIsIHJlczogMiB9XG4gICAgOiB7IGhwOiAwLCBhdGs6IDAsIHNwZDogMCwgZGVmOiAwLCByZXM6IDAgfTtcbiAgY29uc3QgYXJuZWFTdGF0cyA9IGFyZW5hXG4gICAgPyB7IGhwOiAxMCwgYXRrOiA0LCBzcGQ6IDQsIGRlZjogNCwgcmVzOiA0IH1cbiAgICA6IHsgaHA6IDAsIGF0azogMCwgc3BkOiAwLCBkZWY6IDAsIHJlczogMCB9O1xuICBjb25zdCByZXNwbGVuZGVudFZhbHVlID0gcmVzcGxlbmRlbnQgPyAyIDogMDtcbiAgY29uc3Qgc3RhdHNTdW0gPSBPYmplY3QuZW50cmllcyhsdjEgPyBsdjFTdGF0cyA6IHN0YXRzQmFzZSkucmVkdWNlKFxuICAgIChhY2N1bXVsYXRvciwgW2tleSwgc3RhdF0pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID1cbiAgICAgICAgc3RhdCArXG4gICAgICAgIHNraWxsU3RhdHNba2V5XSArXG4gICAgICAgIG1lcmdlU3RhdHNba2V5XSArXG4gICAgICAgIGRyYWdvbmZsb3dlclN0YXRzW2tleV0gK1xuICAgICAgICBzdXBwb3J0U3RhdHNba2V5XSArXG4gICAgICAgIGFybmVhU3RhdHNba2V5XSArXG4gICAgICAgIHJlc3BsZW5kZW50VmFsdWU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY2N1bXVsYXRvcixcbiAgICAgICAgW2tleV06IHZhbHVlID4gLTEgPyB2YWx1ZSA6IDAsXG4gICAgICB9O1xuICAgIH0sXG4gICAge30sXG4gICk7XG4gIHJldHVybiB7IHN0YXRzOiBzdGF0c1N1bSwgYnN0IH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==