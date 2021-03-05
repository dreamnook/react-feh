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
  console.log(iv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL3N0YXRzLnRzeCJdLCJuYW1lcyI6WyJnZXRJbmNyZWFzZUluZGV4ZXMiLCJsdjFTdGF0cyIsIm1hcHBlZCIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJpbmRleCIsImtleSIsInN0YXQiLCJzb3J0IiwiYSIsImIiLCJpbmRleGVzIiwiZ2V0U3RhdHMiLCJyYXJpdHkiLCJzdGF0cyIsIml2IiwibWVyZ2UiLCJzdXBwb3J0Iiwic2tpbGxTdGF0cyIsImx2MSIsImFyZW5hIiwiZHJhZ29uZmxvd2VyIiwicmVzcGxlbmRlbnQiLCJnZXRTdGF0c1dpdGhJViIsImJzdCIsInN0YXRzQmFzZSIsImdldEx2MVN0YXRzV2l0aElWIiwibWVyZ2VCYXNlIiwiaW5jcmVhc2VJbmRleGVzIiwiY29uc29sZSIsImxvZyIsIm1lcmdlU3RhdHMiLCJnZXRNZXJnZVN0YXRzIiwiZHJhZ29uZmxvd2VyU3RhdHMiLCJnZXREcmFnb25mbG93ZXJTdGF0cyIsInN1cHBvcnRTdGF0cyIsImhwIiwiYXRrIiwic3BkIiwiZGVmIiwicmVzIiwiYXJuZWFTdGF0cyIsInJlc3BsZW5kZW50VmFsdWUiLCJzdGF0c1N1bSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLGtCQUFULENBQTRCQyxRQUE1QixFQUFrRDtBQUN2RCxNQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSCxRQUFmLEVBQXlCSSxHQUF6QixDQUE2QixnQkFBY0MsS0FBZDtBQUFBO0FBQUEsUUFBRUMsR0FBRjtBQUFBLFFBQU9DLElBQVA7O0FBQUEsV0FBeUI7QUFDbkVELFNBQUcsRUFBSEEsR0FEbUU7QUFFbkVDLFVBQUksRUFBSkEsSUFGbUU7QUFHbkVGLFdBQUssRUFBTEE7QUFIbUUsS0FBekI7QUFBQSxHQUE3QixDQUFmO0FB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cUIsUUFBUSxHQUFHekMsTUFBTSxDQUFDQyxPQUFQLENBQWVnQixHQUFHLEdBQUduQixRQUFILEdBQWN5QixTQUFoQyxFQUEyQ21CLE1BQTNDLENBQ2YsVUFBQ0MsV0FBRCxTQUE4QjtBQUFBO0FBQUEsUUFBZnZDLEdBQWU7QUFBQSxRQUFWQyxJQUFVOztBQUM1QixRQUFNdUMsS0FBSyxHQUNUdkMsSUFBSSxHQUNKVyxVQUFVLENBQUNaLEdBQUQsQ0FEVixHQUVBeUIsVUFBVSxDQUFDekIsR0FBRCxDQUZWLEdBR0EyQixpQkFBaUIsQ0FBQzNCLEdBQUQsQ0FIakIsR0FJQTZCLFlBQVksQ0FBQzdCLEdBQUQsQ0FKWixHQUtBbUMsVUFBVSxDQUFDbkMsR0FBRCxDQUxWLEdBTUFvQyxnQkFQRjtBQVFBLDJDQUNLRyxXQURMLHFHQUVHdkMsR0FGSCxFQUVTd0MsS0FBSyxHQUFHLENBQUMsQ0FBVCxHQUFhQSxLQUFiLEdBQXFCLENBRjlCO0FBSUQsR0FkYyxFQWVmLEVBZmUsQ0FBakI7QUFpQkEsU0FBTztBQUFFaEMsU0FBSyxFQUFFNkIsUUFBVDtBQUFtQm5CLE9BQUcsRUFBSEE7QUFBbkIsR0FBUDtBQUNELENBNUNNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuYjYxMWY5YzY5MWU1NzVjNmJlYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRVbml0RnVsbFN0YXRzLCBUVW5pdFN0YXRzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdGF0c1dpdGhJViwgZ2V0THYxU3RhdHNXaXRoSVYgfSBmcm9tICcuL2l2JztcbmltcG9ydCB7IGdldE1lcmdlU3RhdHMgfSBmcm9tICcuL21lcmdlcyc7XG5pbXBvcnQgeyBnZXREcmFnb25mbG93ZXJTdGF0cyB9IGZyb20gJy4vZHJhZ29uZmxvd2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluY3JlYXNlSW5kZXhlcyhsdjFTdGF0czogVFVuaXRTdGF0cykge1xuICBjb25zdCBtYXBwZWQgPSBPYmplY3QuZW50cmllcyhsdjFTdGF0cykubWFwKChba2V5LCBzdGF0XSwgaW5kZXgpID0+ICh7XG4gICAga2V5LFxuICAgIHN0YXQsXG4gICAgaW5kZXgsXG4gIH0pKTtcbiAgbWFwcGVkLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5zdGF0ID4gYi5zdGF0KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhLnN0YXQgPCBiLnN0YXQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoYS5pbmRleCA8IGIuaW5kZXgpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGEuaW5kZXggPiBiLmluZGV4KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pO1xuICBjb25zdCBpbmRleGVzID0gbWFwcGVkLm1hcCgoeyBrZXkgfSkgPT4ga2V5KTtcbiAgcmV0dXJuIGluZGV4ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0cyA9IChcbiAgcmFyaXR5OiBudW1iZXIsXG4gIHN0YXRzOiBUVW5pdEZ1bGxTdGF0cyxcbiAgaXY6IHN0cmluZyxcbiAgbWVyZ2U6IG51bWJlcixcbiAgc3VwcG9ydDogYm9vbGVhbixcbiAgc2tpbGxTdGF0czogVFVuaXRTdGF0cyxcbiAgbHYxOiBib29sZWFuLFxuICBhcmVuYTogYm9vbGVhbixcbiAgZHJhZ29uZmxvd2VyOiBudW1iZXIsXG4gIHJlc3BsZW5kZW50OiBib29sZWFuLFxuKSA9PiB7XG4gIGNvbnN0IHsgYnN0LCAuLi5zdGF0c0Jhc2UgfSA9IGdldFN0YXRzV2l0aElWKHN0YXRzW2Ake3Jhcml0eX1gXSwgaXYsIG1lcmdlKTtcbiAgY29uc3QgbHYxU3RhdHMgPSBnZXRMdjFTdGF0c1dpdGhJVihzdGF0c1tgJHtyYXJpdHl9LTFgXSwgaXYpO1xuICBjb25zdCBtZXJnZUJhc2UgPSBnZXRMdjFTdGF0c1dpdGhJVihzdGF0c1tgNS0xYF0sIGl2KTtcbiAgY29uc3QgaW5jcmVhc2VJbmRleGVzID0gZ2V0SW5jcmVhc2VJbmRleGVzKG1lcmdlQmFzZSk7XG4gIGNvbnNvbGUubG9nKGl2KTtcbiAgY29uc3QgbWVyZ2VTdGF0cyA9IGdldE1lcmdlU3RhdHMoaW5jcmVhc2VJbmRleGVzLCBtZXJnZSwgIWl2IHx8IGl2ID09PSAnLScpO1xuICBjb25zdCBkcmFnb25mbG93ZXJTdGF0cyA9IGdldERyYWdvbmZsb3dlclN0YXRzKGluY3JlYXNlSW5kZXhlcywgZHJhZ29uZmxvd2VyKTtcbiAgY29uc3Qgc3VwcG9ydFN0YXRzID0gc3VwcG9ydFxuICAgID8geyBocDogNSwgYXRrOiAyLCBzcGQ6IDIsIGRlZjogMiwgcmVzOiAyIH1cbiAgICA6IHsgaHA6IDAsIGF0azogMCwgc3BkOiAwLCBkZWY6IDAsIHJlczogMCB9O1xuICBjb25zdCBhcm5lYVN0YXRzID0gYXJlbmFcbiAgICA/IHsgaHA6IDEwLCBhdGs6IDQsIHNwZDogNCwgZGVmOiA0LCByZXM6IDQgfVxuICAgIDogeyBocDogMCwgYXRrOiAwLCBzcGQ6IDAsIGRlZjogMCwgcmVzOiAwIH07XG4gIGNvbnN0IHJlc3BsZW5kZW50VmFsdWUgPSByZXNwbGVuZGVudCA/IDIgOiAwO1xuICBjb25zdCBzdGF0c1N1bSA9IE9iamVjdC5lbnRyaWVzKGx2MSA/IGx2MVN0YXRzIDogc3RhdHNCYXNlKS5yZWR1Y2UoXG4gICAgKGFjY3VtdWxhdG9yLCBba2V5LCBzdGF0XSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPVxuICAgICAgICBzdGF0ICtcbiAgICAgICAgc2tpbGxTdGF0c1trZXldICtcbiAgICAgICAgbWVyZ2VTdGF0c1trZXldICtcbiAgICAgICAgZHJhZ29uZmxvd2VyU3RhdHNba2V5XSArXG4gICAgICAgIHN1cHBvcnRTdGF0c1trZXldICtcbiAgICAgICAgYXJuZWFTdGF0c1trZXldICtcbiAgICAgICAgcmVzcGxlbmRlbnRWYWx1ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjY3VtdWxhdG9yLFxuICAgICAgICBba2V5XTogdmFsdWUgPiAtMSA/IHZhbHVlIDogMCxcbiAgICAgIH07XG4gICAgfSxcbiAgICB7fSxcbiAgKTtcbiAgcmV0dXJuIHsgc3RhdHM6IHN0YXRzU3VtLCBic3QgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9