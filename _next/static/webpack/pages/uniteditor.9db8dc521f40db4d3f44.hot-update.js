self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/components/HeroSelect/hooks.tsx":
/*!*********************************************!*\
  !*** ./app/components/HeroSelect/hooks.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useHooks; }
/* harmony export */ });
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_utils_heroes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/heroes */ "./app/utils/heroes.tsx");
/* harmony import */ var _app_components_TypeCheckboxs_useTypeCheckboxHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/TypeCheckboxs/useTypeCheckboxHooks */ "./app/components/TypeCheckboxs/useTypeCheckboxHooks.tsx");
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function useSortByHooks() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sortByHP = _useState[0],
      setSortByHP = _useState[1];

  var toggleSortByHp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSortByHP(function (prev) {
      return !prev;
    });
  }, []);

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sortByAtk = _useState2[0],
      setSortByAtk = _useState2[1];

  var toggleSortByAtk = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSortByAtk(function (prev) {
      return !prev;
    });
  }, []);

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sortBySpd = _useState3[0],
      setSortBySpd = _useState3[1];

  var toggleSortBySpd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSortBySpd(function (prev) {
      return !prev;
    });
  }, []);

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sortByDef = _useState4[0],
      setSortByDef = _useState4[1];

  var toggleSortByDef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSortByDef(function (prev) {
      return !prev;
    });
  }, []);

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      sortByRes = _useState5[0],
      setSortByRes = _useState5[1];

  var toggleSortByRes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setSortByRes(function (prev) {
      return !prev;
    });
  }, []);
  var sortBy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var keys = [];

    if (sortByHP) {
      keys.push('hp');
    }

    if (sortByAtk) {
      keys.push('atk');
    }

    if (sortBySpd) {
      keys.push('spd');
    }

    if (sortByDef) {
      keys.push('def');
    }

    if (sortByRes) {
      keys.push('res');
    }

    return keys;
  }, [sortByHP, sortByAtk, sortBySpd, sortByDef, sortByRes]);
  return {
    sortBy: sortBy,
    sortByHP: sortByHP,
    toggleSortByHp: toggleSortByHp,
    sortByAtk: sortByAtk,
    toggleSortByAtk: toggleSortByAtk,
    sortBySpd: sortBySpd,
    toggleSortBySpd: toggleSortBySpd,
    sortByDef: sortByDef,
    toggleSortByDef: toggleSortByDef,
    sortByRes: sortByRes,
    toggleSortByRes: toggleSortByRes
  };
}

_s(useSortByHooks, "gvykofuiwP63qfSwoDurL12vlp8=");

function useHooks(_ref) {
  _s2();

  var heroId = _ref.heroId,
      _ref$noDropdown = _ref.noDropdown,
      noDropdown = _ref$noDropdown === void 0 ? false : _ref$noDropdown,
      _ref$noStat = _ref.noStat,
      noStat = _ref$noStat === void 0 ? false : _ref$noStat,
      onSelect = _ref.onSelect,
      resplendent = _ref.resplendent;

  var _useFehDB = (0,_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_4__.useFehDB)(),
      heroDB = _useFehDB.heroDB,
      assistDB = _useFehDB.assistDB,
      resplendentDB = _useFehDB.resplendentDB;

  var heroes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return (0,_app_utils_heroes__WEBPACK_IMPORTED_MODULE_2__.makeHeroOptions)({
      heroDB: heroDB,
      assistDB: assistDB,
      resplendentDB: resplendentDB,
      noStat: noStat
    });
  }, [heroDB, assistDB, resplendentDB, noStat]);
  var placeholder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    var hero = heroDB[heroId];
    return "".concat(hero.name, " - ").concat(hero.title);
  }, [heroId, heroDB]);
  /** dropdown control */

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(noDropdown || false),
      open = _useState6[0],
      setOpen = _useState6[1];

  var toggleOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    setOpen(function (prev) {
      if (!prev) {
        inputRef.current.focus();
        inputRef.current.value = '';
        inputRef.current.placeholder = placeholder;
      } else {
        inputRef.current.value = placeholder;
      }

      return !prev;
    });
  }, [placeholder]);
  var onInputClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    event.stopPropagation();

    if (!open) {
      setOpen(true);
      inputRef.current.focus();
      inputRef.current.value = '';
      inputRef.current.placeholder = placeholder;
    }
  }, [open, placeholder]);

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      filter = _useState7[0],
      setFilter = _useState7[1];

  var onChangeFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    setFilter(event.currentTarget.value);
  }, []);

  var _useTypeCheckboxHooks = (0,_app_components_TypeCheckboxs_useTypeCheckboxHooks__WEBPACK_IMPORTED_MODULE_3__.default)(),
      allChecked = _useTypeCheckboxHooks.allChecked,
      allIndeterminated = _useTypeCheckboxHooks.allIndeterminated,
      toggleAll = _useTypeCheckboxHooks.toggleAll,
      moveTypeFilter = _useTypeCheckboxHooks.moveTypeFilter,
      toggleMoveType = _useTypeCheckboxHooks.toggleMoveType,
      weaponTypeFilter = _useTypeCheckboxHooks.weaponTypeFilter,
      toggleWeaponType = _useTypeCheckboxHooks.toggleWeaponType,
      isRarity5 = _useTypeCheckboxHooks.isRarity5,
      toggleRarity5 = _useTypeCheckboxHooks.toggleRarity5,
      isRarity4 = _useTypeCheckboxHooks.isRarity4,
      toggleRarity4 = _useTypeCheckboxHooks.toggleRarity4,
      isGrail = _useTypeCheckboxHooks.isGrail,
      toggleGrail = _useTypeCheckboxHooks.toggleGrail,
      isDuo = _useTypeCheckboxHooks.isDuo,
      toggleDuo = _useTypeCheckboxHooks.toggleDuo,
      isDancer = _useTypeCheckboxHooks.isDancer,
      toggleDancer = _useTypeCheckboxHooks.toggleDancer;

  var _useSortByHooks = useSortByHooks(),
      sortBy = _useSortByHooks.sortBy,
      sortByHP = _useSortByHooks.sortByHP,
      toggleSortByHp = _useSortByHooks.toggleSortByHp,
      sortByAtk = _useSortByHooks.sortByAtk,
      toggleSortByAtk = _useSortByHooks.toggleSortByAtk,
      sortBySpd = _useSortByHooks.sortBySpd,
      toggleSortBySpd = _useSortByHooks.toggleSortBySpd,
      sortByDef = _useSortByHooks.sortByDef,
      toggleSortByDef = _useSortByHooks.toggleSortByDef,
      sortByRes = _useSortByHooks.sortByRes,
      toggleSortByRes = _useSortByHooks.toggleSortByRes;

  var heroesOrder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return heroes.sort(function (a, b) {
      var aStatSum = sortBy.reduce(function (acc, statKey) {
        return acc + a[statKey];
      }, 0);
      var bStatSum = sortBy.reduce(function (acc, statKey) {
        return acc + b[statKey];
      }, 0);

      if (aStatSum > bStatSum) {
        return -1;
      }

      if (bStatSum > aStatSum) {
        return 1;
      }

      return a.index - b.index;
    }).reduce(function (acc, hero, index) {
      return _objectSpread(_objectSpread({}, acc), {}, (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, hero.id, index));
    }, {});
  }, [heroes, sortBy]);
  var computedHeroes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return heroes.map(function (option) {
      var hidden = (0,_app_utils_heroes__WEBPACK_IMPORTED_MODULE_2__.shouldBeHidden)(option, {
        filter: filter,
        moveTypeFilter: moveTypeFilter,
        weaponTypeFilter: weaponTypeFilter,
        isRarity5: isRarity5,
        isRarity4: isRarity4,
        isGrail: isGrail,
        isDuo: isDuo,
        isDancer: isDancer
      });
      return _objectSpread(_objectSpread({
        hidden: hidden
      }, option), {}, {
        faceSrc: resplendent ? option.faceSrcR : option.faceSrc
      });
    });
  }, [heroes, filter, moveTypeFilter, weaponTypeFilter, isRarity5, isRarity4, isGrail, isDuo, isDancer, resplendent]);
  var handleOnSelect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (newHeroId) {
    onSelect(newHeroId);
    setOpen(noDropdown || false);

    if (!noDropdown) {
      var hero = heroDB[newHeroId];
      var newPlaceholder = "".concat(hero.name, " - ").concat(hero.title);
      inputRef.current.value = newPlaceholder;
    }
  }, [onSelect, setOpen, noDropdown, heroDB]);
  return {
    /** dropdown control */
    inputRef: inputRef,
    open: open,
    setOpen: setOpen,
    toggleOpen: noDropdown ? undefined : toggleOpen,
    placeholder: placeholder,
    disabled: heroes.length < 2,
    onInputClick: noDropdown ? undefined : onInputClick,
    handleOnSelect: handleOnSelect,

    /** filtering with text */
    filter: filter,
    onChangeFilter: onChangeFilter,

    /** typecheckbox */
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
    isDuo: isDuo,
    toggleDuo: toggleDuo,
    isDancer: isDancer,
    toggleDancer: toggleDancer,

    /** sorting */
    sortByHP: sortByHP,
    toggleSortByHp: toggleSortByHp,
    sortByAtk: sortByAtk,
    toggleSortByAtk: toggleSortByAtk,
    sortBySpd: sortBySpd,
    toggleSortBySpd: toggleSortBySpd,
    sortByDef: sortByDef,
    toggleSortByDef: toggleSortByDef,
    sortByRes: sortByRes,
    toggleSortByRes: toggleSortByRes,

    /** rendering */
    computedHeroes: computedHeroes,
    heroesOrder: heroesOrder
  };
}

_s2(useHooks, "nrT8oRSztlXlFM5XbEIkerveExQ=", false, function () {
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_4__.useFehDB, _app_components_TypeCheckboxs_useTypeCheckboxHooks__WEBPACK_IMPORTED_MODULE_3__.default, useSortByHooks];
});

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9ob29rcy50c3giXSwibmFtZXMiOlsidXNlU29ydEJ5SG9va3MiLCJ1c2VTdGF0ZSIsInNvcnRCeUhQIiwic2V0U29ydEJ5SFAiLCJ0b2dnbGVTb3J0QnlIcCIsInVzZUNhbGxiYWNrIiwicHJldiIsInNvcnRCeUF0ayIsInNldFNvcnRCeUF0ayIsInRvZ2dsZVNvcnRCeUF0ayIsInNvcnRCeVNwZCIsInNldFNvcnRCeVNwZCIsInRvZ2dsZVNvcnRCeVNwZCIsInNvcnRCeURlZiIsInNldFNvcnRCeURlZiIsInRvZ2dsZVNvcnRCeURlZiIsInNvcnRCeVJlcyIsInNldFNvcnRCeVJlcyIsInRvZ2dsZVNvcnRCeVJlcyIsInNvcnRCeSIsInVzZU1lbW8iLCJrZXlzIiwicHVzaCIsInVzZUhvb2tzIiwiaGVyb0lkIiwibm9Ecm9wZG93biIsIm5vU3RhdCIsIm9uU2VsZWN0IiwicmVzcGxlbmRlbnQiLCJ1c2VGZWhEQiIsImhlcm9EQiIsImFzc2lzdERCIiwicmVzcGxlbmRlbnREQiIsImhlcm9lcyIsIm1ha2VIZXJvT3B0aW9ucyIsInBsYWNlaG9sZGVyIiwiaGVybyIsIm5hbWUiLCJ0aXRsZSIsImlucHV0UmVmIiwidXNlUmVmIiwib3BlbiIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwiY3VycmVudCIsImZvY3VzIiwidmFsdWUiLCJvbklucHV0Q2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbHRlciIsInNldEZpbHRlciIsIm9uQ2hhbmdlRmlsdGVyIiwiY3VycmVudFRhcmdldCIsInVzZVR5cGVDaGVja2JveEhvb2tzIiwiYWxsQ2hlY2tlZCIsImFsbEluZGV0ZXJtaW5hdGVkIiwidG9nZ2xlQWxsIiwibW92ZVR5cGVGaWx0ZXIiLCJ0b2dnbGVNb3ZlVHlwZSIsIndlYXBvblR5cGVGaWx0ZXIiLCJ0b2dnbGVXZWFwb25UeXBlIiwiaXNSYXJpdHk1IiwidG9nZ2xlUmFyaXR5NSIsImlzUmFyaXR5NCIsInRvZ2dsZVJhcml0eTQiLCJpc0dyYWlsIiwidG9nZ2xlR3JhaWwiLCJpc0R1byIsInRvZ2dsZUR1byIsImlzRGFuY2VyIiwidG9nZ2xlRGFuY2VyIiwiaGVyb2VzT3JkZXIiLCJzb3J0IiwiYSIsImIiLCJhU3RhdFN1bSIsInJlZHVjZSIsImFjYyIsInN0YXRLZXkiLCJiU3RhdFN1bSIsImluZGV4IiwiaWQiLCJjb21wdXRlZEhlcm9lcyIsIm1hcCIsIm9wdGlvbiIsImhpZGRlbiIsInNob3VsZEJlSGlkZGVuIiwiZmFjZVNyYyIsImZhY2VTcmNSIiwiaGFuZGxlT25TZWxlY3QiLCJuZXdIZXJvSWQiLCJuZXdQbGFjZWhvbGRlciIsInVuZGVmaW5lZCIsImRpc2FibGVkIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFLQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsR0FBMEI7QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQyxLQUFELENBRGhCO0FBQUEsTUFDakJDLFFBRGlCO0FBQUEsTUFDUEMsV0FETzs7QUFFeEIsTUFBTUMsY0FBYyxHQUFHQyxrREFBVyxDQUFDLFlBQU07QUFDdkNGLGVBQVcsQ0FBQyxVQUFDRyxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFYO0FBQ0QsR0FGaUMsRUFFL0IsRUFGK0IsQ0FBbEM7O0FBRndCLG1CQUtVTCwrQ0FBUSxDQUFDLEtBQUQsQ0FMbEI7QUFBQSxNQUtqQk0sU0FMaUI7QUFBQSxNQUtOQyxZQUxNOztBQU14QixNQUFNQyxlQUFlLEdBQUdKLGtEQUFXLENBQUMsWUFBTTtBQUN4Q0csZ0JBQVksQ0FBQyxVQUFDRixJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFaO0FBQ0QsR0FGa0MsRUFFaEMsRUFGZ0MsQ0FBbkM7O0FBTndCLG1CQVNVTCwrQ0FBUSxDQUFDLEtBQUQsQ0FUbEI7QUFBQSxNQVNqQlMsU0FU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QWdCLEVBQWhCQSxnQkFwQks7QUFxQkxDLGFBQVMsRUFBVEEsU0FyQks7QUFzQkxDLGlCQUFhLEVBQWJBLGFBdEJLO0FBdUJMQyxhQUFTLEVBQVRBLFNBdkJLO0FBd0JMQyxpQkFBYSxFQUFiQSxhQXhCSztBQXlCTEMsV0FBTyxFQUFQQSxPQXpCSztBQTBCTEMsZUFBVyxFQUFYQSxXQTFCSztBQTJCTEMsU0FBSyxFQUFMQSxLQTNCSztBQTRCTEMsYUFBUyxFQUFUQSxTQTVCSztBQTZCTEMsWUFBUSxFQUFSQSxRQTdCSztBQThCTEMsZ0JBQVksRUFBWkEsWUE5Qks7O0FBK0JMO0FBQ0FyRSxZQUFRLEVBQVJBLFFBaENLO0FBaUNMRSxrQkFBYyxFQUFkQSxjQWpDSztBQWtDTEcsYUFBUyxFQUFUQSxTQWxDSztBQW1DTEUsbUJBQWUsRUFBZkEsZUFuQ0s7QUFvQ0xDLGFBQVMsRUFBVEEsU0FwQ0s7QUFxQ0xFLG1CQUFlLEVBQWZBLGVBckNLO0FBc0NMQyxhQUFTLEVBQVRBLFNBdENLO0FBdUNMRSxtQkFBZSxFQUFmQSxlQXZDSztBQXdDTEMsYUFBUyxFQUFUQSxTQXhDSztBQXlDTEUsbUJBQWUsRUFBZkEsZUF6Q0s7O0FBMENMO0FBQ0FpRSxrQkFBYyxFQUFkQSxjQTNDSztBQTRDTFgsZUFBVyxFQUFYQTtBQTVDSyxHQUFQO0FBOENEOztJQTdNdUJqRCxRO1VBYXNCTSxxRCxFQThEeEN5Qix1RixFQWNBdEQsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjlkYjhkYzUyMWY0MGRiNGQzZjQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeW50aGV0aWNFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBUSGVyb09wdGlvbixcbiAgbWFrZUhlcm9PcHRpb25zLFxuICBzaG91bGRCZUhpZGRlbixcbn0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCB1c2VUeXBlQ2hlY2tib3hIb29rcyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvdXNlVHlwZUNoZWNrYm94SG9va3MnO1xuaW1wb3J0IHsgdXNlRmVoREIgfSBmcm9tICdAL2FwcC9wYWdlL0ZFSERCJztcblxuZnVuY3Rpb24gdXNlU29ydEJ5SG9va3MoKSB7XG4gIGNvbnN0IFtzb3J0QnlIUCwgc2V0U29ydEJ5SFBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTb3J0QnlIcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTb3J0QnlIUCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIGNvbnN0IFtzb3J0QnlBdGssIHNldFNvcnRCeUF0a10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVNvcnRCeUF0ayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTb3J0QnlBdGsoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBbc29ydEJ5U3BkLCBzZXRTb3J0QnlTcGRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTb3J0QnlTcGQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U29ydEJ5U3BkKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3QgW3NvcnRCeURlZiwgc2V0U29ydEJ5RGVmXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlU29ydEJ5RGVmID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNvcnRCeURlZigocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIGNvbnN0IFtzb3J0QnlSZXMsIHNldFNvcnRCeVJlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVNvcnRCeVJlcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTb3J0QnlSZXMoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBzb3J0QnkgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgaWYgKHNvcnRCeUhQKSB7XG4gICAgICBrZXlzLnB1c2goJ2hwJyk7XG4gICAgfVxuICAgIGlmIChzb3J0QnlBdGspIHtcbiAgICAgIGtleXMucHVzaCgnYXRrJyk7XG4gICAgfVxuICAgIGlmIChzb3J0QnlTcGQpIHtcbiAgICAgIGtleXMucHVzaCgnc3BkJyk7XG4gICAgfVxuICAgIGlmIChzb3J0QnlEZWYpIHtcbiAgICAgIGtleXMucHVzaCgnZGVmJyk7XG4gICAgfVxuICAgIGlmIChzb3J0QnlSZXMpIHtcbiAgICAgIGtleXMucHVzaCgncmVzJyk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xuICB9LCBbc29ydEJ5SFAsIHNvcnRCeUF0aywgc29ydEJ5U3BkLCBzb3J0QnlEZWYsIHNvcnRCeVJlc10pO1xuXG4gIHJldHVybiB7XG4gICAgc29ydEJ5LFxuICAgIHNvcnRCeUhQLFxuICAgIHRvZ2dsZVNvcnRCeUhwLFxuICAgIHNvcnRCeUF0ayxcbiAgICB0b2dnbGVTb3J0QnlBdGssXG4gICAgc29ydEJ5U3BkLFxuICAgIHRvZ2dsZVNvcnRCeVNwZCxcbiAgICBzb3J0QnlEZWYsXG4gICAgdG9nZ2xlU29ydEJ5RGVmLFxuICAgIHNvcnRCeVJlcyxcbiAgICB0b2dnbGVTb3J0QnlSZXMsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUhvb2tzKHtcbiAgaGVyb0lkLFxuICBub0Ryb3Bkb3duID0gZmFsc2UsXG4gIG5vU3RhdCA9IGZhbHNlLFxuICBvblNlbGVjdCxcbiAgcmVzcGxlbmRlbnQsXG59OiB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBub0Ryb3Bkb3duPzogYm9vbGVhbjtcbiAgbm9TdGF0PzogYm9vbGVhbjtcbiAgb25TZWxlY3Q6IChuZXdIZXJvSWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgcmVzcGxlbmRlbnQ/OiBib29sZWFuO1xufSkge1xuICBjb25zdCB7IGhlcm9EQiwgYXNzaXN0REIsIHJlc3BsZW5kZW50REIgfSA9IHVzZUZlaERCKCk7XG4gIGNvbnN0IGhlcm9lczogVEhlcm9PcHRpb25bXSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gbWFrZUhlcm9PcHRpb25zKHsgaGVyb0RCLCBhc3Npc3REQiwgcmVzcGxlbmRlbnREQiwgbm9TdGF0IH0pLFxuICAgIFtoZXJvREIsIGFzc2lzdERCLCByZXNwbGVuZGVudERCLCBub1N0YXRdLFxuICApO1xuICBjb25zdCBwbGFjZWhvbGRlciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGhlcm8gPSBoZXJvREJbaGVyb0lkXTtcbiAgICByZXR1cm4gYCR7aGVyby5uYW1lfSAtICR7aGVyby50aXRsZX1gO1xuICB9LCBbaGVyb0lkLCBoZXJvREJdKTtcblxuICAvKiogZHJvcGRvd24gY29udHJvbCAqL1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShub0Ryb3Bkb3duIHx8IGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlT3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuKChwcmV2KSA9PiB7XG4gICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBwbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhcHJldjtcbiAgICB9KTtcbiAgfSwgW3BsYWNlaG9sZGVyXSk7XG4gIGNvbnN0IG9uSW5wdXRDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCFvcGVuKSB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb3BlbiwgcGxhY2Vob2xkZXJdLFxuICApO1xuXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgb25DaGFuZ2VGaWx0ZXIgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBzZXRGaWx0ZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7XG4gICAgYWxsQ2hlY2tlZCxcbiAgICBhbGxJbmRldGVybWluYXRlZCxcbiAgICB0b2dnbGVBbGwsXG4gICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlTW92ZVR5cGUsXG4gICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICB0b2dnbGVXZWFwb25UeXBlLFxuICAgIGlzUmFyaXR5NSxcbiAgICB0b2dnbGVSYXJpdHk1LFxuICAgIGlzUmFyaXR5NCxcbiAgICB0b2dnbGVSYXJpdHk0LFxuICAgIGlzR3JhaWwsXG4gICAgdG9nZ2xlR3JhaWwsXG4gICAgaXNEdW8sXG4gICAgdG9nZ2xlRHVvLFxuICAgIGlzRGFuY2VyLFxuICAgIHRvZ2dsZURhbmNlcixcbiAgfSA9IHVzZVR5cGVDaGVja2JveEhvb2tzKCk7XG5cbiAgY29uc3Qge1xuICAgIHNvcnRCeSxcbiAgICBzb3J0QnlIUCxcbiAgICB0b2dnbGVTb3J0QnlIcCxcbiAgICBzb3J0QnlBdGssXG4gICAgdG9nZ2xlU29ydEJ5QXRrLFxuICAgIHNvcnRCeVNwZCxcbiAgICB0b2dnbGVTb3J0QnlTcGQsXG4gICAgc29ydEJ5RGVmLFxuICAgIHRvZ2dsZVNvcnRCeURlZixcbiAgICBzb3J0QnlSZXMsXG4gICAgdG9nZ2xlU29ydEJ5UmVzLFxuICB9ID0gdXNlU29ydEJ5SG9va3MoKTtcblxuICBjb25zdCBoZXJvZXNPcmRlciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBoZXJvZXNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFTdGF0U3VtID0gc29ydEJ5LnJlZHVjZSgoYWNjLCBzdGF0S2V5KSA9PiBhY2MgKyBhW3N0YXRLZXldLCAwKTtcbiAgICAgICAgY29uc3QgYlN0YXRTdW0gPSBzb3J0QnkucmVkdWNlKChhY2MsIHN0YXRLZXkpID0+IGFjYyArIGJbc3RhdEtleV0sIDApO1xuICAgICAgICBpZiAoYVN0YXRTdW0gPiBiU3RhdFN1bSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYlN0YXRTdW0gPiBhU3RhdFN1bSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhLmluZGV4IC0gYi5pbmRleDtcbiAgICAgIH0pXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoYWNjLCBoZXJvLCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgW2hlcm8uaWRdOiBpbmRleCxcbiAgICAgICAgfSksXG4gICAgICAgIHt9LFxuICAgICAgKTtcbiAgfSwgW2hlcm9lcywgc29ydEJ5XSk7XG5cbiAgY29uc3QgY29tcHV0ZWRIZXJvZXMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBoZXJvZXMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgaGlkZGVuID0gc2hvdWxkQmVIaWRkZW4ob3B0aW9uLCB7XG4gICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgICAgICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgICAgICAgaXNSYXJpdHk1LFxuICAgICAgICAgIGlzUmFyaXR5NCxcbiAgICAgICAgICBpc0dyYWlsLFxuICAgICAgICAgIGlzRHVvLFxuICAgICAgICAgIGlzRGFuY2VyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoaWRkZW4sXG4gICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICAgIGZhY2VTcmM6IHJlc3BsZW5kZW50ID8gb3B0aW9uLmZhY2VTcmNSIDogb3B0aW9uLmZhY2VTcmMsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICBbXG4gICAgICBoZXJvZXMsXG4gICAgICBmaWx0ZXIsXG4gICAgICBtb3ZlVHlwZUZpbHRlcixcbiAgICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgICBpc1Jhcml0eTUsXG4gICAgICBpc1Jhcml0eTQsXG4gICAgICBpc0dyYWlsLFxuICAgICAgaXNEdW8sXG4gICAgICBpc0RhbmNlcixcbiAgICAgIHJlc3BsZW5kZW50LFxuICAgIF0sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlT25TZWxlY3QgPSB1c2VDYWxsYmFjayhcbiAgICAobmV3SGVyb0lkOiBzdHJpbmcpID0+IHtcbiAgICAgIG9uU2VsZWN0KG5ld0hlcm9JZCk7XG4gICAgICBzZXRPcGVuKG5vRHJvcGRvd24gfHwgZmFsc2UpO1xuICAgICAgaWYgKCFub0Ryb3Bkb3duKSB7XG4gICAgICAgIGNvbnN0IGhlcm8gPSBoZXJvREJbbmV3SGVyb0lkXTtcbiAgICAgICAgY29uc3QgbmV3UGxhY2Vob2xkZXIgPSBgJHtoZXJvLm5hbWV9IC0gJHtoZXJvLnRpdGxlfWA7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBuZXdQbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvblNlbGVjdCwgc2V0T3Blbiwgbm9Ecm9wZG93biwgaGVyb0RCXSxcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIC8qKiBkcm9wZG93biBjb250cm9sICovXG4gICAgaW5wdXRSZWYsXG4gICAgb3BlbixcbiAgICBzZXRPcGVuLFxuICAgIHRvZ2dsZU9wZW46IG5vRHJvcGRvd24gPyB1bmRlZmluZWQgOiB0b2dnbGVPcGVuLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGRpc2FibGVkOiBoZXJvZXMubGVuZ3RoIDwgMixcbiAgICBvbklucHV0Q2xpY2s6IG5vRHJvcGRvd24gPyB1bmRlZmluZWQgOiBvbklucHV0Q2xpY2ssXG4gICAgaGFuZGxlT25TZWxlY3QsXG4gICAgLyoqIGZpbHRlcmluZyB3aXRoIHRleHQgKi9cbiAgICBmaWx0ZXIsXG4gICAgb25DaGFuZ2VGaWx0ZXIsXG4gICAgLyoqIHR5cGVjaGVja2JveCAqL1xuICAgIGFsbENoZWNrZWQsXG4gICAgYWxsSW5kZXRlcm1pbmF0ZWQsXG4gICAgdG9nZ2xlQWxsLFxuICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgIHRvZ2dsZU1vdmVUeXBlLFxuICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlV2VhcG9uVHlwZSxcbiAgICBpc1Jhcml0eTUsXG4gICAgdG9nZ2xlUmFyaXR5NSxcbiAgICBpc1Jhcml0eTQsXG4gICAgdG9nZ2xlUmFyaXR5NCxcbiAgICBpc0dyYWlsLFxuICAgIHRvZ2dsZUdyYWlsLFxuICAgIGlzRHVvLFxuICAgIHRvZ2dsZUR1byxcbiAgICBpc0RhbmNlcixcbiAgICB0b2dnbGVEYW5jZXIsXG4gICAgLyoqIHNvcnRpbmcgKi9cbiAgICBzb3J0QnlIUCxcbiAgICB0b2dnbGVTb3J0QnlIcCxcbiAgICBzb3J0QnlBdGssXG4gICAgdG9nZ2xlU29ydEJ5QXRrLFxuICAgIHNvcnRCeVNwZCxcbiAgICB0b2dnbGVTb3J0QnlTcGQsXG4gICAgc29ydEJ5RGVmLFxuICAgIHRvZ2dsZVNvcnRCeURlZixcbiAgICBzb3J0QnlSZXMsXG4gICAgdG9nZ2xlU29ydEJ5UmVzLFxuICAgIC8qKiByZW5kZXJpbmcgKi9cbiAgICBjb21wdXRlZEhlcm9lcyxcbiAgICBoZXJvZXNPcmRlcixcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=