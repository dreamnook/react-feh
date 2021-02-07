webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/TypeCheckboxs/useTypeCheckboxHooks.tsx":
/*!***************************************************************!*\
  !*** ./app/components/TypeCheckboxs/useTypeCheckboxHooks.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/generals */ "./app/utils/generals.tsx");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./app/components/TypeCheckboxs/helper.tsx");
var _s = $RefreshSig$();






var useTypeCheckboxHooks = function useTypeCheckboxHooks() {
  _s();

  // move type
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeMoveTypeFilter"])(true);
  }),
      moveTypeFilter = _useState[0],
      setMoveTypeFilter = _useState[1];

  var toggleMoveType = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref) {
    var moveType = _ref.moveType,
        checked = _ref.checked;
    setMoveTypeFilter(function (prev) {
      var newState = Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(prev, function (draft) {
        draft[moveType] = !checked;
      });
      return newState;
    });
  }, []); // weapon type

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeWeaponTypeFilter"])(true);
  }),
      weaponTypeFilter = _useState2[0],
      setWeaponTypeFilter = _useState2[1];

  var toggleWeaponType = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref2) {
    var weaponType = _ref2.weaponType,
        checked = _ref2.checked;
    console.log(weaponType, checked);
    setWeaponTypeFilter(function (prev) {
      var newState = Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(prev, function (draft) {
        draft[weaponType] = !checked;
      });
      return newState;
    });
  }, []); // rarity 5

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isRarity5 = _useState3[0],
      setIsRarity5 = _useState3[1];

  var toggleRarity5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsRarity5(function (prev) {
      return !prev;
    });
  }, []); // rarity 4

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isRarity4 = _useState4[0],
      setIsRarity4 = _useState4[1];

  var toggleRarity4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsRarity4(function (prev) {
      return !prev;
    });
  }, []); // dancer

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDancer = _useState5[0],
      setIsDancer = _useState5[1];

  var toggleDancer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsDancer(function (prev) {
      return !prev;
    });
  }, []); // grail

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isGrail = _useState6[0],
      setIsGrail = _useState6[1];

  var toggleGrail = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsGrail(function (prev) {
      return !prev;
    });
  }, []);

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var moveTypeStates = _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__["moveTypes"].reduce(function (acc, moveType) {
      var value = moveTypeFilter[moveType];
      return {
        checked: acc.checked && value,
        indeterminated: acc.indeterminated || value
      };
    }, {
      checked: true,
      indeterminated: false
    });
    var weaponTypeStates = _app_utils_generals__WEBPACK_IMPORTED_MODULE_2__["weaponTypes"].reduce(function (acc, weaponType) {
      var value = weaponTypeFilter[weaponType];
      return {
        checked: acc.checked && value,
        indeterminated: acc.indeterminated || value
      };
    }, {
      checked: true,
      indeterminated: false
    });
    var checked = moveTypeStates.checked && weaponTypeStates.checked;
    return [checked, !checked && (moveTypeStates.indeterminated || weaponTypeStates.indeterminated)];
  }, [moveTypeFilter, weaponTypeFilter]),
      allChecked = _useMemo[0],
      allIndeterminated = _useMemo[1];

  var toggleAll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (allIndeterminated) {
      setMoveTypeFilter(Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeMoveTypeFilter"])(false));
      setWeaponTypeFilter(Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeWeaponTypeFilter"])(false));
    } else {
      setMoveTypeFilter(Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeMoveTypeFilter"])(!allChecked));
      setWeaponTypeFilter(Object(_helper__WEBPACK_IMPORTED_MODULE_3__["makeWeaponTypeFilter"])(!allChecked));
    }
  }, [allChecked, allIndeterminated]);
  return {
    allChecked: allChecked,
    allIndeterminated: allIndeterminated,
    toggleAll: toggleAll,
    moveTypeFilter: moveTypeFilter,
    toggleMoveType: toggleMoveType,
    weaponTypeFilter: weaponTypeFilter,
    toggleWeaponType: toggleWeaponType,
    isRarity5: isRarity5,
    toggleRarity5: toggleRarity5,
    isRarity4: isRarity4,
    toggleRarity4: toggleRarity4,
    isGrail: isGrail,
    toggleGrail: toggleGrail,
    isDancer: isDancer,
    toggleDancer: toggleDancer
  };
};

_s(useTypeCheckboxHooks, "eklaarYOg7Bu3ll9KEQSe19xJZM=");

/* harmony default export */ __webpack_exports__["default"] = (useTypeCheckboxHooks);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy91c2VUeXBlQ2hlY2tib3hIb29rcy50c3giXSwibmFtZXMiOlsidXNlVHlwZUNoZWNrYm94SG9va3MiLCJ1c2VTdGF0ZSIsIm1ha2VNb3ZlVHlwZUZpbHRlciIsIm1vdmVUeXBlRmlsdGVyIiwic2V0TW92ZVR5cGVGaWx0ZXIiLCJ0b2dnbGVNb3ZlVHlwZSIsInVzZUNhbGxiYWNrIiwibW92ZVR5cGUiLCJjaGVja2VkIiwicHJldiIsIm5ld1N0YXRlIiwicHJvZHVjZSIsImRyYWZ0IiwibWFrZVdlYXBvblR5cGVGaWx0ZXIiLCJ3ZWFwb25UeXBlRmlsdGVyIiwic2V0V2VhcG9uVHlwZUZpbHRlciIsInRvZ2dsZVdlYXBvblR5cGUiLCJ3ZWFwb25UeXBlIiwiY29uc29sZSIsImxvZyIsImlzUmFyaXR5NSIsInNldElzUmFyaXR5NSIsInRvZ2dsZVJhcml0eTUiLCJpc1Jhcml0eTQiLCJzZXRJc1Jhcml0eTQiLCJ0b2dnbGVSYXJpdHk0IiwiaXNEYW5jZXIiLCJzZXRJc0RhbmNlciIsInRvZ2dsZURhbmNlciIsImlzR3JhaWwiLCJzZXRJc0dyYWlsIiwidG9nZ2xlR3JhaWwiLCJ1c2VNZW1vIiwibW92ZVR5cGVTdGF0ZXMiLCJtb3ZlVHlwZXMiLCJyZWR1Y2UiLCJhY2MiLCJ2YWx1ZSIsImluZGV0ZXJtaW5hdGVkIiwid2VhcG9uVHlwZVN0YXRlcyIsIndlYXBvblR5cGVzIiwiYWxsQ2hlY2tlZCIsImFsbEluZGV0ZXJtaW5hdGVkIiwidG9nZ2xlQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFBQTs7QUFDakM7QUFEaUMsa0JBRVdDLHNEQUFRLENBQ2xEO0FBQUEsV0FBTUMsa0VBQWtCLENBQUMsSUFBRCxDQUF4QjtBQUFBLEdBRGtELENBRm5C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akMsTUFBTUMsU0FBUyxHQUFHckMseURBQVcsQ0FBQyxZQUFNO0FBQ2xDLFFBQUlvQyxpQkFBSixFQUF1QjtBQUNyQnRDLHVCQUFpQixDQUFDRixrRUFBa0IsQ0FBQyxLQUFELENBQW5CLENBQWpCO0FBQ0FhLHlCQUFtQixDQUFDRixvRUFBb0IsQ0FBQyxLQUFELENBQXJCLENBQW5CO0FBQ0QsS0FIRCxNQUdPO0FBQ0xULHVCQUFpQixDQUFDRixrRUFBa0IsQ0FBQyxDQUFDdUMsVUFBRixDQUFuQixDQUFqQjtBQUNBMUIseUJBQW1CLENBQUNGLG9FQUFvQixDQUFDLENBQUM0QixVQUFGLENBQXJCLENBQW5CO0FBQ0Q7QUFDRixHQVI0QixFQVExQixDQUFDQSxVQUFELEVBQWFDLGlCQUFiLENBUjBCLENBQTdCO0FBVUEsU0FBTztBQUNMRCxjQUFVLEVBQVZBLFVBREs7QUFFTEMscUJBQWlCLEVBQWpCQSxpQkFGSztBQUdMQyxhQUFTLEVBQVRBLFNBSEs7QUFJTHhDLGtCQUFjLEVBQWRBLGNBSks7QUFLTEUsa0JBQWMsRUFBZEEsY0FMSztBQU1MUyxvQkFBZ0IsRUFBaEJBLGdCQU5LO0FBT0xFLG9CQUFnQixFQUFoQkEsZ0JBUEs7QUFRTEksYUFBUyxFQUFUQSxTQVJLO0FBU0xFLGlCQUFhLEVBQWJBLGFBVEs7QUFVTEMsYUFBUyxFQUFUQSxTQVZLO0FBV0xFLGlCQUFhLEVBQWJBLGFBWEs7QUFZTEksV0FBTyxFQUFQQSxPQVpLO0FBYUxFLGVBQVcsRUFBWEEsV0FiSztBQWNMTCxZQUFRLEVBQVJBLFFBZEs7QUFlTEUsZ0JBQVksRUFBWkE7QUFmSyxHQUFQO0FBaUJELENBM0hEOztHQUFNNUIsb0I7O0FBNkhTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjc1ZmQxNDQyMDdkODE4ZGEzZDdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XG5pbXBvcnQgeyBUTW92ZVR5cGUsIFRXZWFwb25UeXBlIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgbW92ZVR5cGVzLCB3ZWFwb25UeXBlcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2dlbmVyYWxzJztcbmltcG9ydCB7IFRNb3ZlVHlwZUZpbHRlclR5cGUsIFRXZWFwb25UeXBlRmlsdGVyVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgeyBtYWtlTW92ZVR5cGVGaWx0ZXIsIG1ha2VXZWFwb25UeXBlRmlsdGVyIH0gZnJvbSAnLi9oZWxwZXInO1xuXG5jb25zdCB1c2VUeXBlQ2hlY2tib3hIb29rcyA9ICgpID0+IHtcbiAgLy8gbW92ZSB0eXBlXG4gIGNvbnN0IFttb3ZlVHlwZUZpbHRlciwgc2V0TW92ZVR5cGVGaWx0ZXJdID0gdXNlU3RhdGU8VE1vdmVUeXBlRmlsdGVyVHlwZT4oXG4gICAgKCkgPT4gbWFrZU1vdmVUeXBlRmlsdGVyKHRydWUpXG4gICk7XG5cbiAgY29uc3QgdG9nZ2xlTW92ZVR5cGUgPSB1c2VDYWxsYmFjayhcbiAgICAoeyBtb3ZlVHlwZSwgY2hlY2tlZCB9OiB7IG1vdmVUeXBlOiBUTW92ZVR5cGU7IGNoZWNrZWQ6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgc2V0TW92ZVR5cGVGaWx0ZXIoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBwcm9kdWNlKHByZXYsIChkcmFmdCkgPT4ge1xuICAgICAgICAgIGRyYWZ0W21vdmVUeXBlXSA9ICFjaGVja2VkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIC8vIHdlYXBvbiB0eXBlXG4gIGNvbnN0IFtcbiAgICB3ZWFwb25UeXBlRmlsdGVyLFxuICAgIHNldFdlYXBvblR5cGVGaWx0ZXIsXG4gIF0gPSB1c2VTdGF0ZTxUV2VhcG9uVHlwZUZpbHRlclR5cGU+KCgpID0+IG1ha2VXZWFwb25UeXBlRmlsdGVyKHRydWUpKTtcblxuICBjb25zdCB0b2dnbGVXZWFwb25UeXBlID0gdXNlQ2FsbGJhY2soXG4gICAgKHtcbiAgICAgIHdlYXBvblR5cGUsXG4gICAgICBjaGVja2VkLFxuICAgIH06IHtcbiAgICAgIHdlYXBvblR5cGU6IFRXZWFwb25UeXBlO1xuICAgICAgY2hlY2tlZDogYm9vbGVhbjtcbiAgICB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh3ZWFwb25UeXBlLCBjaGVja2VkKTtcbiAgICAgIHNldFdlYXBvblR5cGVGaWx0ZXIoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBwcm9kdWNlKHByZXYsIChkcmFmdCkgPT4ge1xuICAgICAgICAgIGRyYWZ0W3dlYXBvblR5cGVdID0gIWNoZWNrZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG5cbiAgLy8gcmFyaXR5IDVcbiAgY29uc3QgW2lzUmFyaXR5NSwgc2V0SXNSYXJpdHk1XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB0b2dnbGVSYXJpdHk1ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzUmFyaXR5NSgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgLy8gcmFyaXR5IDRcbiAgY29uc3QgW2lzUmFyaXR5NCwgc2V0SXNSYXJpdHk0XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB0b2dnbGVSYXJpdHk0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzUmFyaXR5NCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgLy8gZGFuY2VyXG4gIGNvbnN0IFtpc0RhbmNlciwgc2V0SXNEYW5jZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVEYW5jZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNEYW5jZXIoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIC8vIGdyYWlsXG4gIGNvbnN0IFtpc0dyYWlsLCBzZXRJc0dyYWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlR3JhaWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNHcmFpbCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW2FsbENoZWNrZWQsIGFsbEluZGV0ZXJtaW5hdGVkXSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IG1vdmVUeXBlU3RhdGVzID0gbW92ZVR5cGVzLnJlZHVjZShcbiAgICAgIChhY2MsIG1vdmVUeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbW92ZVR5cGVGaWx0ZXJbbW92ZVR5cGVdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoZWNrZWQ6IGFjYy5jaGVja2VkICYmIHZhbHVlLFxuICAgICAgICAgIGluZGV0ZXJtaW5hdGVkOiBhY2MuaW5kZXRlcm1pbmF0ZWQgfHwgdmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgeyBjaGVja2VkOiB0cnVlLCBpbmRldGVybWluYXRlZDogZmFsc2UgfVxuICAgICk7XG4gICAgY29uc3Qgd2VhcG9uVHlwZVN0YXRlcyA9IHdlYXBvblR5cGVzLnJlZHVjZShcbiAgICAgIChhY2MsIHdlYXBvblR5cGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB3ZWFwb25UeXBlRmlsdGVyW3dlYXBvblR5cGVdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoZWNrZWQ6IGFjYy5jaGVja2VkICYmIHZhbHVlLFxuICAgICAgICAgIGluZGV0ZXJtaW5hdGVkOiBhY2MuaW5kZXRlcm1pbmF0ZWQgfHwgdmFsdWUsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgeyBjaGVja2VkOiB0cnVlLCBpbmRldGVybWluYXRlZDogZmFsc2UgfVxuICAgICk7XG4gICAgY29uc3QgY2hlY2tlZCA9IG1vdmVUeXBlU3RhdGVzLmNoZWNrZWQgJiYgd2VhcG9uVHlwZVN0YXRlcy5jaGVja2VkO1xuICAgIHJldHVybiBbXG4gICAgICBjaGVja2VkLFxuICAgICAgIWNoZWNrZWQgJiZcbiAgICAgICAgKG1vdmVUeXBlU3RhdGVzLmluZGV0ZXJtaW5hdGVkIHx8IHdlYXBvblR5cGVTdGF0ZXMuaW5kZXRlcm1pbmF0ZWQpLFxuICAgIF07XG4gIH0sIFttb3ZlVHlwZUZpbHRlciwgd2VhcG9uVHlwZUZpbHRlcl0pO1xuXG4gIGNvbnN0IHRvZ2dsZUFsbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoYWxsSW5kZXRlcm1pbmF0ZWQpIHtcbiAgICAgIHNldE1vdmVUeXBlRmlsdGVyKG1ha2VNb3ZlVHlwZUZpbHRlcihmYWxzZSkpO1xuICAgICAgc2V0V2VhcG9uVHlwZUZpbHRlcihtYWtlV2VhcG9uVHlwZUZpbHRlcihmYWxzZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRNb3ZlVHlwZUZpbHRlcihtYWtlTW92ZVR5cGVGaWx0ZXIoIWFsbENoZWNrZWQpKTtcbiAgICAgIHNldFdlYXBvblR5cGVGaWx0ZXIobWFrZVdlYXBvblR5cGVGaWx0ZXIoIWFsbENoZWNrZWQpKTtcbiAgICB9XG4gIH0sIFthbGxDaGVja2VkLCBhbGxJbmRldGVybWluYXRlZF0pO1xuXG4gIHJldHVybiB7XG4gICAgYWxsQ2hlY2tlZCxcbiAgICBhbGxJbmRldGVybWluYXRlZCxcbiAgICB0b2dnbGVBbGwsXG4gICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlTW92ZVR5cGUsXG4gICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICB0b2dnbGVXZWFwb25UeXBlLFxuICAgIGlzUmFyaXR5NSxcbiAgICB0b2dnbGVSYXJpdHk1LFxuICAgIGlzUmFyaXR5NCxcbiAgICB0b2dnbGVSYXJpdHk0LFxuICAgIGlzR3JhaWwsXG4gICAgdG9nZ2xlR3JhaWwsXG4gICAgaXNEYW5jZXIsXG4gICAgdG9nZ2xlRGFuY2VyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVHlwZUNoZWNrYm94SG9va3M7XG4iXSwic291cmNlUm9vdCI6IiJ9