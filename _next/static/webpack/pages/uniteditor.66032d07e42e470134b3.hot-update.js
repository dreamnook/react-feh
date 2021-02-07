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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy91c2VUeXBlQ2hlY2tib3hIb29rcy50c3giXSwibmFtZXMiOlsidXNlVHlwZUNoZWNrYm94SG9va3MiLCJ1c2VTdGF0ZSIsIm1ha2VNb3ZlVHlwZUZpbHRlciIsIm1vdmVUeXBlRmlsdGVyIiwic2V0TW92ZVR5cGVGaWx0ZXIiLCJ0b2dnbGVNb3ZlVHlwZSIsInVzZUNhbGxiYWNrIiwibW92ZVR5cGUiLCJjaGVja2VkIiwicHJldiIsIm5ld1N0YXRlIiwicHJvZHVjZSIsImRyYWZ0IiwibWFrZVdlYXBvblR5cGVGaWx0ZXIiLCJ3ZWFwb25UeXBlRmlsdGVyIiwic2V0V2VhcG9uVHlwZUZpbHRlciIsInRvZ2dsZVdlYXBvblR5cGUiLCJ3ZWFwb25UeXBlIiwiaXNSYXJpdHk1Iiwic2V0SXNSYXJpdHk1IiwidG9nZ2xlUmFyaXR5NSIsImlzUmFyaXR5NCIsInNldElzUmFyaXR5NCIsInRvZ2dsZVJhcml0eTQiLCJpc0RhbmNlciIsInNldElzRGFuY2VyIiwidG9nZ2xlRGFuY2VyIiwiaXNHcmFpbCIsInNldElzR3JhaWwiLCJ0b2dnbGVHcmFpbCIsInVzZU1lbW8iLCJtb3ZlVHlwZVN0YXRlcyIsIm1vdmVUeXBlcyIsInJlZHVjZSIsImFjYyIsInZhbHVlIiwiaW5kZXRlcm1pbmF0ZWQiLCJ3ZWFwb25UeXBlU3RhdGVzIiwid2VhcG9uVHlwZXMiLCJhbGxDaGVja2VkIiwiYWxsSW5kZXRlcm1pbmF0ZWQiLCJ0b2dnbGVBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUFBOztBQUNqQztBQURpQyxrQkFFV0Msc0RBQVEsQ0FDbEQ7QUFBQSxXQUFNQyxrRUFBa0IsQ0FBQyxJQUFELENBQXhCO0FBQUEsR0FEa0QsQ0FGbkI7QUFBQSxNQUUxQkMsY0FG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ckJwQyx1QkFBaUIsQ0FBQ0Ysa0VBQWtCLENBQUMsS0FBRCxDQUFuQixDQUFqQjtBQUNBYSx5QkFBbUIsQ0FBQ0Ysb0VBQW9CLENBQUMsS0FBRCxDQUFyQixDQUFuQjtBQUNELEtBSEQsTUFHTztBQUNMVCx1QkFBaUIsQ0FBQ0Ysa0VBQWtCLENBQUMsQ0FBQ3FDLFVBQUYsQ0FBbkIsQ0FBakI7QUFDQXhCLHlCQUFtQixDQUFDRixvRUFBb0IsQ0FBQyxDQUFDMEIsVUFBRixDQUFyQixDQUFuQjtBQUNEO0FBQ0YsR0FSNEIsRUFRMUIsQ0FBQ0EsVUFBRCxFQUFhQyxpQkFBYixDQVIwQixDQUE3QjtBQVVBLFNBQU87QUFDTEQsY0FBVSxFQUFWQSxVQURLO0FBRUxDLHFCQUFpQixFQUFqQkEsaUJBRks7QUFHTEMsYUFBUyxFQUFUQSxTQUhLO0FBSUx0QyxrQkFBYyxFQUFkQSxjQUpLO0FBS0xFLGtCQUFjLEVBQWRBLGNBTEs7QUFNTFMsb0JBQWdCLEVBQWhCQSxnQkFOSztBQU9MRSxvQkFBZ0IsRUFBaEJBLGdCQVBLO0FBUUxFLGFBQVMsRUFBVEEsU0FSSztBQVNMRSxpQkFBYSxFQUFiQSxhQVRLO0FBVUxDLGFBQVMsRUFBVEEsU0FWSztBQVdMRSxpQkFBYSxFQUFiQSxhQVhLO0FBWUxJLFdBQU8sRUFBUEEsT0FaSztBQWFMRSxlQUFXLEVBQVhBLFdBYks7QUFjTEwsWUFBUSxFQUFSQSxRQWRLO0FBZUxFLGdCQUFZLEVBQVpBO0FBZkssR0FBUDtBQWlCRCxDQTFIRDs7R0FBTTFCLG9COztBQTRIU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci42NjAzMmQwN2U0MmU0NzAxMzRiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuaW1wb3J0IHsgVE1vdmVUeXBlLCBUV2VhcG9uVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IG1vdmVUeXBlcywgd2VhcG9uVHlwZXMgfSBmcm9tICdAL2FwcC91dGlscy9nZW5lcmFscyc7XG5pbXBvcnQgeyBUTW92ZVR5cGVGaWx0ZXJUeXBlLCBUV2VhcG9uVHlwZUZpbHRlclR5cGUgfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHsgbWFrZU1vdmVUeXBlRmlsdGVyLCBtYWtlV2VhcG9uVHlwZUZpbHRlciB9IGZyb20gJy4vaGVscGVyJztcblxuY29uc3QgdXNlVHlwZUNoZWNrYm94SG9va3MgPSAoKSA9PiB7XG4gIC8vIG1vdmUgdHlwZVxuICBjb25zdCBbbW92ZVR5cGVGaWx0ZXIsIHNldE1vdmVUeXBlRmlsdGVyXSA9IHVzZVN0YXRlPFRNb3ZlVHlwZUZpbHRlclR5cGU+KFxuICAgICgpID0+IG1ha2VNb3ZlVHlwZUZpbHRlcih0cnVlKVxuICApO1xuXG4gIGNvbnN0IHRvZ2dsZU1vdmVUeXBlID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgbW92ZVR5cGUsIGNoZWNrZWQgfTogeyBtb3ZlVHlwZTogVE1vdmVUeXBlOyBjaGVja2VkOiBib29sZWFuIH0pID0+IHtcbiAgICAgIHNldE1vdmVUeXBlRmlsdGVyKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gcHJvZHVjZShwcmV2LCAoZHJhZnQpID0+IHtcbiAgICAgICAgICBkcmFmdFttb3ZlVHlwZV0gPSAhY2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICAvLyB3ZWFwb24gdHlwZVxuICBjb25zdCBbXG4gICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICBzZXRXZWFwb25UeXBlRmlsdGVyLFxuICBdID0gdXNlU3RhdGU8VFdlYXBvblR5cGVGaWx0ZXJUeXBlPigoKSA9PiBtYWtlV2VhcG9uVHlwZUZpbHRlcih0cnVlKSk7XG5cbiAgY29uc3QgdG9nZ2xlV2VhcG9uVHlwZSA9IHVzZUNhbGxiYWNrKFxuICAgICh7XG4gICAgICB3ZWFwb25UeXBlLFxuICAgICAgY2hlY2tlZCxcbiAgICB9OiB7XG4gICAgICB3ZWFwb25UeXBlOiBUV2VhcG9uVHlwZTtcbiAgICAgIGNoZWNrZWQ6IGJvb2xlYW47XG4gICAgfSkgPT4ge1xuICAgICAgc2V0V2VhcG9uVHlwZUZpbHRlcigocHJldikgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHByb2R1Y2UocHJldiwgKGRyYWZ0KSA9PiB7XG4gICAgICAgICAgZHJhZnRbd2VhcG9uVHlwZV0gPSAhY2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICAvLyByYXJpdHkgNVxuICBjb25zdCBbaXNSYXJpdHk1LCBzZXRJc1Jhcml0eTVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHRvZ2dsZVJhcml0eTUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNSYXJpdHk1KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICAvLyByYXJpdHkgNFxuICBjb25zdCBbaXNSYXJpdHk0LCBzZXRJc1Jhcml0eTRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHRvZ2dsZVJhcml0eTQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNSYXJpdHk0KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICAvLyBkYW5jZXJcbiAgY29uc3QgW2lzRGFuY2VyLCBzZXRJc0RhbmNlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZURhbmNlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0RhbmNlcigocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgLy8gZ3JhaWxcbiAgY29uc3QgW2lzR3JhaWwsIHNldElzR3JhaWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVHcmFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0dyYWlsKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbYWxsQ2hlY2tlZCwgYWxsSW5kZXRlcm1pbmF0ZWRdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgbW92ZVR5cGVTdGF0ZXMgPSBtb3ZlVHlwZXMucmVkdWNlKFxuICAgICAgKGFjYywgbW92ZVR5cGUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBtb3ZlVHlwZUZpbHRlclttb3ZlVHlwZV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hlY2tlZDogYWNjLmNoZWNrZWQgJiYgdmFsdWUsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZWQ6IGFjYy5pbmRldGVybWluYXRlZCB8fCB2YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB7IGNoZWNrZWQ6IHRydWUsIGluZGV0ZXJtaW5hdGVkOiBmYWxzZSB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWFwb25UeXBlU3RhdGVzID0gd2VhcG9uVHlwZXMucmVkdWNlKFxuICAgICAgKGFjYywgd2VhcG9uVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHdlYXBvblR5cGVGaWx0ZXJbd2VhcG9uVHlwZV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hlY2tlZDogYWNjLmNoZWNrZWQgJiYgdmFsdWUsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZWQ6IGFjYy5pbmRldGVybWluYXRlZCB8fCB2YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB7IGNoZWNrZWQ6IHRydWUsIGluZGV0ZXJtaW5hdGVkOiBmYWxzZSB9XG4gICAgKTtcbiAgICBjb25zdCBjaGVja2VkID0gbW92ZVR5cGVTdGF0ZXMuY2hlY2tlZCAmJiB3ZWFwb25UeXBlU3RhdGVzLmNoZWNrZWQ7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNoZWNrZWQsXG4gICAgICAhY2hlY2tlZCAmJlxuICAgICAgICAobW92ZVR5cGVTdGF0ZXMuaW5kZXRlcm1pbmF0ZWQgfHwgd2VhcG9uVHlwZVN0YXRlcy5pbmRldGVybWluYXRlZCksXG4gICAgXTtcbiAgfSwgW21vdmVUeXBlRmlsdGVyLCB3ZWFwb25UeXBlRmlsdGVyXSk7XG5cbiAgY29uc3QgdG9nZ2xlQWxsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChhbGxJbmRldGVybWluYXRlZCkge1xuICAgICAgc2V0TW92ZVR5cGVGaWx0ZXIobWFrZU1vdmVUeXBlRmlsdGVyKGZhbHNlKSk7XG4gICAgICBzZXRXZWFwb25UeXBlRmlsdGVyKG1ha2VXZWFwb25UeXBlRmlsdGVyKGZhbHNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE1vdmVUeXBlRmlsdGVyKG1ha2VNb3ZlVHlwZUZpbHRlcighYWxsQ2hlY2tlZCkpO1xuICAgICAgc2V0V2VhcG9uVHlwZUZpbHRlcihtYWtlV2VhcG9uVHlwZUZpbHRlcighYWxsQ2hlY2tlZCkpO1xuICAgIH1cbiAgfSwgW2FsbENoZWNrZWQsIGFsbEluZGV0ZXJtaW5hdGVkXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhbGxDaGVja2VkLFxuICAgIGFsbEluZGV0ZXJtaW5hdGVkLFxuICAgIHRvZ2dsZUFsbCxcbiAgICBtb3ZlVHlwZUZpbHRlcixcbiAgICB0b2dnbGVNb3ZlVHlwZSxcbiAgICB3ZWFwb25UeXBlRmlsdGVyLFxuICAgIHRvZ2dsZVdlYXBvblR5cGUsXG4gICAgaXNSYXJpdHk1LFxuICAgIHRvZ2dsZVJhcml0eTUsXG4gICAgaXNSYXJpdHk0LFxuICAgIHRvZ2dsZVJhcml0eTQsXG4gICAgaXNHcmFpbCxcbiAgICB0b2dnbGVHcmFpbCxcbiAgICBpc0RhbmNlcixcbiAgICB0b2dnbGVEYW5jZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUeXBlQ2hlY2tib3hIb29rcztcbiJdLCJzb3VyY2VSb290IjoiIn0=