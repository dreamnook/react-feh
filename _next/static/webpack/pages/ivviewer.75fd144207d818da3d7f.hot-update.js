webpackHotUpdate_N_E("pages/ivviewer",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVHlwZUNoZWNrYm94cy91c2VUeXBlQ2hlY2tib3hIb29rcy50c3giXSwibmFtZXMiOlsidXNlVHlwZUNoZWNrYm94SG9va3MiLCJ1c2VTdGF0ZSIsIm1ha2VNb3ZlVHlwZUZpbHRlciIsIm1vdmVUeXBlRmlsdGVyIiwic2V0TW92ZVR5cGVGaWx0ZXIiLCJ0b2dnbGVNb3ZlVHlwZSIsInVzZUNhbGxiYWNrIiwibW92ZVR5cGUiLCJjaGVja2VkIiwicHJldiIsIm5ld1N0YXRlIiwicHJvZHVjZSIsImRyYWZ0IiwibWFrZVdlYXBvblR5cGVGaWx0ZXIiLCJ3ZWFwb25UeXBlRmlsdGVyIiwic2V0V2VhcG9uVHlwZUZpbHRlciIsInRvZ2dsZVdlYXBvblR5cGUiLCJ3ZWFwb25UeXBlIiwiY29uc29sZSIsImxvZyIsImlzUmFyaXR5NSIsInNldElzUmFyaXR5NSIsInRvZ2dsZVJhcml0eTUiLCJpc1Jhcml0eTQiLCJzZXRJc1Jhcml0eTQiLCJ0b2dnbGVSYXJpdHk0IiwiaXNEYW5jZXIiLCJzZXRJc0RhbmNlciIsInRvZ2dsZURhbmNlciIsImlzR3JhaWwiLCJzZXRJc0dyYWlsIiwidG9nZ2xlR3JhaWwiLCJ1c2VNZW1vIiwibW92ZVR5cGVTdGF0ZXMiLCJtb3ZlVHlwZXMiLCJyZWR1Y2UiLCJhY2MiLCJ2YWx1ZSIsImluZGV0ZXJtaW5hdGVkIiwid2VhcG9uVHlwZVN0YXRlcyIsIndlYXBvblR5cGVzIiwiYWxsQ2hlY2tlZCIsImFsbEluZGV0ZXJtaW5hdGVkIiwidG9nZ2xlQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQU07QUFBQTs7QUFDakM7QUFEaUMsa0JBRVdDLHNEQUFRLENBQ2xEO0FBQUEsV0FBTUMsa0VBQWtCLENBQUMsSUFBRCxDQUF4QjtBQUFBLEdBRGtELENBRm5CO0FBQUEsTUFFMUJDLGNBRjBCO0FBQUEsTUFFVkMsaUJBRlU7O0FBTWpDLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FDaEMsZ0JBQXNFO0FBQUEsUUFBbkVDLFFBQW1FLFFBQW5FQSxRQUFtRTtBQUFBLFFBQXpEQyxPQUF5RCxRQUF6REEsT0FBeUQ7QUFDcEVKLHFCQUFpQixDQUFDLFVBQUNLLElBQUQsRUFBVTtBQUMxQixVQUFNQyxRQUFRLEdBQUdDLHFEQUFPLENBQUNGLElBQUQsRUFBTyxVQUFDRyxLQUFELEVBQVc7QUFDeENBLGFBQUssQ0FBQ0wsUUFBRCxDQUFMLEdBQWtCLENBQUNDLE9BQW5CO0FBQ0QsT0FGdUIsQ0FBeEI7QUFHQSxhQUFPRSxRQUFQO0FBQ0QsS0FMZ0IsQ0FBakI7QUFNRCxHQVIrQixFQVNoQyxFQVRnQyxDQUFsQyxDQU5pQyxDQWtCakM7O0FBbEJpQyxtQkFzQjdCVCxzREFBUSxDQUF3QjtBQUFBLFdBQU1ZLG9FQUFvQixDQUFDLElBQUQsQ0FBMUI7QUFBQSxHQUF4QixDQXRCcUI7QUFBQSxNQW9CL0JDLGdCQXBCK0I7QUFBQSxNQXFCL0JDLG1CQXJCK0I7O0FBd0JqQyxNQUFNQyxnQkFBZ0IsR0FBR1YseURBQVcsQ0FDbEMsaUJBTU07QUFBQSxRQUxKVyxVQUtJLFNBTEpBLFVBS0k7QUFBQSxRQUpKVCxPQUlJLFNBSkpBLE9BSUk7QUFDSlUsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVosRUFBd0JULE9BQXhCO0FBQ0FPLHVCQUFtQixDQUFDLFVBQUNOLElBQUQsRUFBVTtBQUM1QixVQUFNQyxRQUFRLEdBQUdDLHFEQUFPLENBQUNGLElBQUQsRUFBTyxVQUFDRyxLQUFELEVBQVc7QUFDeENBLGFBQUssQ0FBQ0ssVUFBRCxDQUFMLEdBQW9CLENBQUNULE9BQXJCO0FBQ0QsT0FGdUIsQ0FBeEI7QUFHQSxhQUFPRSxRQUFQO0FBQ0QsS0FMa0IsQ0FBbkI7QUFNRCxHQWZpQyxFQWdCbEMsRUFoQmtDLENBQXBDLENBeEJpQyxDQTJDakM7O0FBM0NpQyxtQkE0Q0NULHNEQUFRLENBQUMsSUFBRCxDQTVDVDtBQUFBLE1BNEMxQm1CLFNBNUMwQjtBQUFBLE1BNENmQyxZQTVDZTs7QUE2Q2pDLE1BQU1DLGFBQWEsR0FBR2hCLHlEQUFXLENBQUMsWUFBTTtBQUN0Q2UsZ0JBQVksQ0FBQyxVQUFDWixJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFaO0FBQ0QsR0FGZ0MsRUFFOUIsRUFGOEIsQ0FBakMsQ0E3Q2lDLENBaURqQzs7QUFqRGlDLG1CQWtEQ1Isc0RBQVEsQ0FBQyxJQUFELENBbERUO0FBQUEsTUFrRDFCc0IsU0FsRDBCO0FBQUEsTUFrRGZDLFlBbERlOztBQW1EakMsTUFBTUMsYUFBYSxHQUFHbkIseURBQVcsQ0FBQyxZQUFNO0FBQ3RDa0IsZ0JBQVksQ0FBQyxVQUFDZixJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFaO0FBQ0QsR0FGZ0MsRUFFOUIsRUFGOEIsQ0FBakMsQ0FuRGlDLENBdURqQzs7QUF2RGlDLG1CQXdERFIsc0RBQVEsQ0FBQyxLQUFELENBeERQO0FBQUEsTUF3RDFCeUIsUUF4RDBCO0FBQUEsTUF3RGhCQyxXQXhEZ0I7O0FBeURqQyxNQUFNQyxZQUFZLEdBQUd0Qix5REFBVyxDQUFDLFlBQU07QUFDckNxQixlQUFXLENBQUMsVUFBQ2xCLElBQUQ7QUFBQSxhQUFVLENBQUNBLElBQVg7QUFBQSxLQUFELENBQVg7QUFDRCxHQUYrQixFQUU3QixFQUY2QixDQUFoQyxDQXpEaUMsQ0E2RGpDOztBQTdEaUMsbUJBOERIUixzREFBUSxDQUFDLEtBQUQsQ0E5REw7QUFBQSxNQThEMUI0QixPQTlEMEI7QUFBQSxNQThEakJDLFVBOURpQjs7QUErRGpDLE1BQU1DLFdBQVcsR0FBR3pCLHlEQUFXLENBQUMsWUFBTTtBQUNwQ3dCLGNBQVUsQ0FBQyxVQUFDckIsSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBVjtBQUNELEdBRjhCLEVBRTVCLEVBRjRCLENBQS9COztBQS9EaUMsaUJBbUVPdUIscURBQU8sQ0FBQyxZQUFNO0FBQ3BELFFBQU1DLGNBQWMsR0FBR0MsNkRBQVMsQ0FBQ0MsTUFBVixDQUNyQixVQUFDQyxHQUFELEVBQU03QixRQUFOLEVBQW1CO0FBQ2pCLFVBQU04QixLQUFLLEdBQUdsQyxjQUFjLENBQUNJLFFBQUQsQ0FBNUI7QUFDQSxhQUFPO0FBQ0xDLGVBQU8sRUFBRTRCLEdBQUcsQ0FBQzVCLE9BQUosSUFBZTZCLEtBRG5CO0FBRUxDLHNCQUFjLEVBQUVGLEdBQUcsQ0FBQ0UsY0FBSixJQUFzQkQ7QUFGakMsT0FBUDtBQUlELEtBUG9CLEVBUXJCO0FBQUU3QixhQUFPLEVBQUUsSUFBWDtBQUFpQjhCLG9CQUFjLEVBQUU7QUFBakMsS0FScUIsQ0FBdkI7QUFVQSxRQUFNQyxnQkFBZ0IsR0FBR0MsK0RBQVcsQ0FBQ0wsTUFBWixDQUN2QixVQUFDQyxHQUFELEVBQU1uQixVQUFOLEVBQXFCO0FBQ25CLFVBQU1vQixLQUFLLEdBQUd2QixnQkFBZ0IsQ0FBQ0csVUFBRCxDQUE5QjtBQUNBLGFBQU87QUFDTFQsZUFBTyxFQUFFNEIsR0FBRyxDQUFDNUIsT0FBSixJQUFlNkIsS0FEbkI7QUFFTEMsc0JBQWMsRUFBRUYsR0FBRyxDQUFDRSxjQUFKLElBQXNCRDtBQUZqQyxPQUFQO0FBSUQsS0FQc0IsRUFRdkI7QUFBRTdCLGFBQU8sRUFBRSxJQUFYO0FBQWlCOEIsb0JBQWMsRUFBRTtBQUFqQyxLQVJ1QixDQUF6QjtBQVVBLFFBQU05QixPQUFPLEdBQUd5QixjQUFjLENBQUN6QixPQUFmLElBQTBCK0IsZ0JBQWdCLENBQUMvQixPQUEzRDtBQUNBLFdBQU8sQ0FDTEEsT0FESyxFQUVMLENBQUNBLE9BQUQsS0FDR3lCLGNBQWMsQ0FBQ0ssY0FBZixJQUFpQ0MsZ0JBQWdCLENBQUNELGNBRHJELENBRkssQ0FBUDtBQUtELEdBM0I4QyxFQTJCNUMsQ0FBQ25DLGNBQUQsRUFBaUJXLGdCQUFqQixDQTNCNEMsQ0FuRWQ7QUFBQSxNQW1FMUIyQixVQW5FMEI7QUFBQSxNQW1FZEMsaUJBbkVjOztBQWdHakMsTUFBTUMsU0FBUyxHQUFHckMseURBQVcsQ0FBQyxZQUFNO0FBQ2xDLFFBQUlvQyxpQkFBSixFQUF1QjtBQUNyQnRDLHVCQUFpQixDQUFDRixrRUFBa0IsQ0FBQyxLQUFELENBQW5CLENBQWpCO0FBQ0FhLHlCQUFtQixDQUFDRixvRUFBb0IsQ0FBQyxLQUFELENBQXJCLENBQW5CO0FBQ0QsS0FIRCxNQUdPO0FBQ0xULHVCQUFpQixDQUFDRixrRUFBa0IsQ0FBQyxDQUFDdUMsVUFBRixDQUFuQixDQUFqQjtBQUNBMUIseUJBQW1CLENBQUNGLG9FQUFvQixDQUFDLENBQUM0QixVQUFGLENBQXJCLENBQW5CO0FBQ0Q7QUFDRixHQVI0QixFQVExQixDQUFDQSxVQUFELEVBQWFDLGlCQUFiLENBUjBCLENBQTdCO0FBVUEsU0FBTztBQUNMRCxjQUFVLEVBQVZBLFVBREs7QUFFTEMscUJBQWlCLEVBQWpCQSxpQkFGSztBQUdMQyxhQUFTLEVBQVRBLFNBSEs7QUFJTHhDLGtCQUFjLEVBQWRBLGNBSks7QUFLTEUsa0JBQWMsRUFBZEEsY0FMSztBQU1MUyxvQkFBZ0IsRUFBaEJBLGdCQU5LO0FBT0xFLG9CQUFnQixFQUFoQkEsZ0JBUEs7QUFRTEksYUFBUyxFQUFUQSxTQVJLO0FBU0xFLGlCQUFhLEVBQWJBLGFBVEs7QUFVTEMsYUFBUyxFQUFUQSxTQVZLO0FBV0xFLGlCQUFhLEVBQWJBLGFBWEs7QUFZTEksV0FBTyxFQUFQQSxPQVpLO0FBYUxFLGVBQVcsRUFBWEEsV0FiSztBQWNMTCxZQUFRLEVBQVJBLFFBZEs7QUFlTEUsZ0JBQVksRUFBWkE7QUFmSyxHQUFQO0FBaUJELENBM0hEOztHQUFNNUIsb0I7O0FBNkhTQSxtRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pdnZpZXdlci43NWZkMTQ0MjA3ZDgxOGRhM2Q3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xuaW1wb3J0IHsgVE1vdmVUeXBlLCBUV2VhcG9uVHlwZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IG1vdmVUeXBlcywgd2VhcG9uVHlwZXMgfSBmcm9tICdAL2FwcC91dGlscy9nZW5lcmFscyc7XG5pbXBvcnQgeyBUTW92ZVR5cGVGaWx0ZXJUeXBlLCBUV2VhcG9uVHlwZUZpbHRlclR5cGUgfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHsgbWFrZU1vdmVUeXBlRmlsdGVyLCBtYWtlV2VhcG9uVHlwZUZpbHRlciB9IGZyb20gJy4vaGVscGVyJztcblxuY29uc3QgdXNlVHlwZUNoZWNrYm94SG9va3MgPSAoKSA9PiB7XG4gIC8vIG1vdmUgdHlwZVxuICBjb25zdCBbbW92ZVR5cGVGaWx0ZXIsIHNldE1vdmVUeXBlRmlsdGVyXSA9IHVzZVN0YXRlPFRNb3ZlVHlwZUZpbHRlclR5cGU+KFxuICAgICgpID0+IG1ha2VNb3ZlVHlwZUZpbHRlcih0cnVlKVxuICApO1xuXG4gIGNvbnN0IHRvZ2dsZU1vdmVUeXBlID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgbW92ZVR5cGUsIGNoZWNrZWQgfTogeyBtb3ZlVHlwZTogVE1vdmVUeXBlOyBjaGVja2VkOiBib29sZWFuIH0pID0+IHtcbiAgICAgIHNldE1vdmVUeXBlRmlsdGVyKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gcHJvZHVjZShwcmV2LCAoZHJhZnQpID0+IHtcbiAgICAgICAgICBkcmFmdFttb3ZlVHlwZV0gPSAhY2hlY2tlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICAvLyB3ZWFwb24gdHlwZVxuICBjb25zdCBbXG4gICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICBzZXRXZWFwb25UeXBlRmlsdGVyLFxuICBdID0gdXNlU3RhdGU8VFdlYXBvblR5cGVGaWx0ZXJUeXBlPigoKSA9PiBtYWtlV2VhcG9uVHlwZUZpbHRlcih0cnVlKSk7XG5cbiAgY29uc3QgdG9nZ2xlV2VhcG9uVHlwZSA9IHVzZUNhbGxiYWNrKFxuICAgICh7XG4gICAgICB3ZWFwb25UeXBlLFxuICAgICAgY2hlY2tlZCxcbiAgICB9OiB7XG4gICAgICB3ZWFwb25UeXBlOiBUV2VhcG9uVHlwZTtcbiAgICAgIGNoZWNrZWQ6IGJvb2xlYW47XG4gICAgfSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cod2VhcG9uVHlwZSwgY2hlY2tlZCk7XG4gICAgICBzZXRXZWFwb25UeXBlRmlsdGVyKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1N0YXRlID0gcHJvZHVjZShwcmV2LCAoZHJhZnQpID0+IHtcbiAgICAgICAgICBkcmFmdFt3ZWFwb25UeXBlXSA9ICFjaGVja2VkO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuXG4gIC8vIHJhcml0eSA1XG4gIGNvbnN0IFtpc1Jhcml0eTUsIHNldElzUmFyaXR5NV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgdG9nZ2xlUmFyaXR5NSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc1Jhcml0eTUoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIC8vIHJhcml0eSA0XG4gIGNvbnN0IFtpc1Jhcml0eTQsIHNldElzUmFyaXR5NF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgdG9nZ2xlUmFyaXR5NCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc1Jhcml0eTQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIC8vIGRhbmNlclxuICBjb25zdCBbaXNEYW5jZXIsIHNldElzRGFuY2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlRGFuY2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzRGFuY2VyKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcblxuICAvLyBncmFpbFxuICBjb25zdCBbaXNHcmFpbCwgc2V0SXNHcmFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZUdyYWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzR3JhaWwoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFthbGxDaGVja2VkLCBhbGxJbmRldGVybWluYXRlZF0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBtb3ZlVHlwZVN0YXRlcyA9IG1vdmVUeXBlcy5yZWR1Y2UoXG4gICAgICAoYWNjLCBtb3ZlVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG1vdmVUeXBlRmlsdGVyW21vdmVUeXBlXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGVja2VkOiBhY2MuY2hlY2tlZCAmJiB2YWx1ZSxcbiAgICAgICAgICBpbmRldGVybWluYXRlZDogYWNjLmluZGV0ZXJtaW5hdGVkIHx8IHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHsgY2hlY2tlZDogdHJ1ZSwgaW5kZXRlcm1pbmF0ZWQ6IGZhbHNlIH1cbiAgICApO1xuICAgIGNvbnN0IHdlYXBvblR5cGVTdGF0ZXMgPSB3ZWFwb25UeXBlcy5yZWR1Y2UoXG4gICAgICAoYWNjLCB3ZWFwb25UeXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gd2VhcG9uVHlwZUZpbHRlclt3ZWFwb25UeXBlXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGVja2VkOiBhY2MuY2hlY2tlZCAmJiB2YWx1ZSxcbiAgICAgICAgICBpbmRldGVybWluYXRlZDogYWNjLmluZGV0ZXJtaW5hdGVkIHx8IHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHsgY2hlY2tlZDogdHJ1ZSwgaW5kZXRlcm1pbmF0ZWQ6IGZhbHNlIH1cbiAgICApO1xuICAgIGNvbnN0IGNoZWNrZWQgPSBtb3ZlVHlwZVN0YXRlcy5jaGVja2VkICYmIHdlYXBvblR5cGVTdGF0ZXMuY2hlY2tlZDtcbiAgICByZXR1cm4gW1xuICAgICAgY2hlY2tlZCxcbiAgICAgICFjaGVja2VkICYmXG4gICAgICAgIChtb3ZlVHlwZVN0YXRlcy5pbmRldGVybWluYXRlZCB8fCB3ZWFwb25UeXBlU3RhdGVzLmluZGV0ZXJtaW5hdGVkKSxcbiAgICBdO1xuICB9LCBbbW92ZVR5cGVGaWx0ZXIsIHdlYXBvblR5cGVGaWx0ZXJdKTtcblxuICBjb25zdCB0b2dnbGVBbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGFsbEluZGV0ZXJtaW5hdGVkKSB7XG4gICAgICBzZXRNb3ZlVHlwZUZpbHRlcihtYWtlTW92ZVR5cGVGaWx0ZXIoZmFsc2UpKTtcbiAgICAgIHNldFdlYXBvblR5cGVGaWx0ZXIobWFrZVdlYXBvblR5cGVGaWx0ZXIoZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TW92ZVR5cGVGaWx0ZXIobWFrZU1vdmVUeXBlRmlsdGVyKCFhbGxDaGVja2VkKSk7XG4gICAgICBzZXRXZWFwb25UeXBlRmlsdGVyKG1ha2VXZWFwb25UeXBlRmlsdGVyKCFhbGxDaGVja2VkKSk7XG4gICAgfVxuICB9LCBbYWxsQ2hlY2tlZCwgYWxsSW5kZXRlcm1pbmF0ZWRdKTtcblxuICByZXR1cm4ge1xuICAgIGFsbENoZWNrZWQsXG4gICAgYWxsSW5kZXRlcm1pbmF0ZWQsXG4gICAgdG9nZ2xlQWxsLFxuICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgIHRvZ2dsZU1vdmVUeXBlLFxuICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlV2VhcG9uVHlwZSxcbiAgICBpc1Jhcml0eTUsXG4gICAgdG9nZ2xlUmFyaXR5NSxcbiAgICBpc1Jhcml0eTQsXG4gICAgdG9nZ2xlUmFyaXR5NCxcbiAgICBpc0dyYWlsLFxuICAgIHRvZ2dsZUdyYWlsLFxuICAgIGlzRGFuY2VyLFxuICAgIHRvZ2dsZURhbmNlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVR5cGVDaGVja2JveEhvb2tzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==