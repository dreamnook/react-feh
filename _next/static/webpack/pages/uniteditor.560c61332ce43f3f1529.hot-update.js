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

  console.log(sortBy);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9ob29rcy50c3giXSwibmFtZXMiOlsidXNlU29ydEJ5SG9va3MiLCJ1c2VTdGF0ZSIsInNvcnRCeUhQIiwic2V0U29ydEJ5SFAiLCJ0b2dnbGVTb3J0QnlIcCIsInVzZUNhbGxiYWNrIiwicHJldiIsInNvcnRCeUF0ayIsInNldFNvcnRCeUF0ayIsInRvZ2dsZVNvcnRCeUF0ayIsInNvcnRCeVNwZCIsInNldFNvcnRCeVNwZCIsInRvZ2dsZVNvcnRCeVNwZCIsInNvcnRCeURlZiIsInNldFNvcnRCeURlZiIsInRvZ2dsZVNvcnRCeURlZiIsInNvcnRCeVJlcyIsInNldFNvcnRCeVJlcyIsInRvZ2dsZVNvcnRCeVJlcyIsInNvcnRCeSIsInVzZU1lbW8iLCJrZXlzIiwicHVzaCIsInVzZUhvb2tzIiwiaGVyb0lkIiwibm9Ecm9wZG93biIsIm5vU3RhdCIsIm9uU2VsZWN0IiwicmVzcGxlbmRlbnQiLCJ1c2VGZWhEQiIsImhlcm9EQiIsImFzc2lzdERCIiwicmVzcGxlbmRlbnREQiIsImhlcm9lcyIsIm1ha2VIZXJvT3B0aW9ucyIsInBsYWNlaG9sZGVyIiwiaGVybyIsIm5hbWUiLCJ0aXRsZSIsImlucHV0UmVmIiwidXNlUmVmIiwib3BlbiIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwiY3VycmVudCIsImZvY3VzIiwidmFsdWUiLCJvbklucHV0Q2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbHRlciIsInNldEZpbHRlciIsIm9uQ2hhbmdlRmlsdGVyIiwiY3VycmVudFRhcmdldCIsInVzZVR5cGVDaGVja2JveEhvb2tzIiwiYWxsQ2hlY2tlZCIsImFsbEluZGV0ZXJtaW5hdGVkIiwidG9nZ2xlQWxsIiwibW92ZVR5cGVGaWx0ZXIiLCJ0b2dnbGVNb3ZlVHlwZSIsIndlYXBvblR5cGVGaWx0ZXIiLCJ0b2dnbGVXZWFwb25UeXBlIiwiaXNSYXJpdHk1IiwidG9nZ2xlUmFyaXR5NSIsImlzUmFyaXR5NCIsInRvZ2dsZVJhcml0eTQiLCJpc0dyYWlsIiwidG9nZ2xlR3JhaWwiLCJpc0R1byIsInRvZ2dsZUR1byIsImlzRGFuY2VyIiwidG9nZ2xlRGFuY2VyIiwiY29uc29sZSIsImxvZyIsImhlcm9lc09yZGVyIiwic29ydCIsImEiLCJiIiwiYVN0YXRTdW0iLCJyZWR1Y2UiLCJhY2MiLCJzdGF0S2V5IiwiYlN0YXRTdW0iLCJpbmRleCIsImlkIiwiY29tcHV0ZWRIZXJvZXMiLCJtYXAiLCJvcHRpb24iLCJoaWRkZW4iLCJzaG91bGRCZUhpZGRlbiIsImZhY2VTcmMiLCJmYWNlU3JjUiIsImhhbmRsZU9uU2VsZWN0IiwibmV3SGVyb0lkIiwibmV3UGxhY2Vob2xkZXIiLCJ1bmRlZmluZWQiLCJkaXNhYmxlZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQ2pCQyxRQURpQjtBQUFBLE1BQ1BDLFdBRE87O0FBRXhCLE1BQU1DLGNBQWMsR0FBR0Msa0RBQVcsQ0FBQyxZQUFNO0FBQ3ZDRixlQUFXLENBQUMsVUFBQ0csSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBWDtBQUNELEdBRmlDLEVBRS9CLEVBRitCLENBQWxDOztBQUZ3QixtQkFLVUwsK0NBQVEsQ0FBQyxLQUFELENBTGxCO0FBQUEsTUFLakJNLFNBTGlCO0FBQUEsTUFLTkMsWUFMTTs7QUFNeEIsTUFBTUMsZUFBZSxHQUFHSixrREFBVyxDQUFDLFlBQU07QUFDeENHLGdCQUFZLENBQUMsVUFBQ0YsSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBWjtBQUNELEdBRmtDLEVBRWhDLEVBRmdDLENBQW5DOztBQU53QixtQkFTVUwsK0NBQVEsQ0FBQyxLQUFELENBVGxC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LEVBQWRBLGNBbEJLO0FBbUJMQyxvQkFBZ0IsRUFBaEJBLGdCQW5CSztBQW9CTEMsb0JBQWdCLEVBQWhCQSxnQkFwQks7QUFxQkxDLGFBQVMsRUFBVEEsU0FyQks7QUFzQkxDLGlCQUFhLEVBQWJBLGFBdEJLO0FBdUJMQyxhQUFTLEVBQVRBLFNBdkJLO0FBd0JMQyxpQkFBYSxFQUFiQSxhQXhCSztBQXlCTEMsV0FBTyxFQUFQQSxPQXpCSztBQTBCTEMsZUFBVyxFQUFYQSxXQTFCSztBQTJCTEMsU0FBSyxFQUFMQSxLQTNCSztBQTRCTEMsYUFBUyxFQUFUQSxTQTVCSztBQTZCTEMsWUFBUSxFQUFSQSxRQTdCSztBQThCTEMsZ0JBQVksRUFBWkEsWUE5Qks7O0FBK0JMO0FBQ0FyRSxZQUFRLEVBQVJBLFFBaENLO0FBaUNMRSxrQkFBYyxFQUFkQSxjQWpDSztBQWtDTEcsYUFBUyxFQUFUQSxTQWxDSztBQW1DTEUsbUJBQWUsRUFBZkEsZUFuQ0s7QUFvQ0xDLGFBQVMsRUFBVEEsU0FwQ0s7QUFxQ0xFLG1CQUFlLEVBQWZBLGVBckNLO0FBc0NMQyxhQUFTLEVBQVRBLFNBdENLO0FBdUNMRSxtQkFBZSxFQUFmQSxlQXZDSztBQXdDTEMsYUFBUyxFQUFUQSxTQXhDSztBQXlDTEUsbUJBQWUsRUFBZkEsZUF6Q0s7O0FBMENMO0FBQ0FtRSxrQkFBYyxFQUFkQSxjQTNDSztBQTRDTFgsZUFBVyxFQUFYQTtBQTVDSyxHQUFQO0FBOENEOztJQS9NdUJuRCxRO1VBYXNCTSxxRCxFQThEeEN5Qix1RixFQWNBdEQsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjU2MGM2MTMzMmNlNDNmM2YxNTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTeW50aGV0aWNFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBUSGVyb09wdGlvbixcbiAgbWFrZUhlcm9PcHRpb25zLFxuICBzaG91bGRCZUhpZGRlbixcbn0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCB1c2VUeXBlQ2hlY2tib3hIb29rcyBmcm9tICdAL2FwcC9jb21wb25lbnRzL1R5cGVDaGVja2JveHMvdXNlVHlwZUNoZWNrYm94SG9va3MnO1xuaW1wb3J0IHsgdXNlRmVoREIgfSBmcm9tICdAL2FwcC9wYWdlL0ZFSERCJztcblxuZnVuY3Rpb24gdXNlU29ydEJ5SG9va3MoKSB7XG4gIGNvbnN0IFtzb3J0QnlIUCwgc2V0U29ydEJ5SFBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTb3J0QnlIcCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTb3J0QnlIUCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIGNvbnN0IFtzb3J0QnlBdGssIHNldFNvcnRCeUF0a10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVNvcnRCeUF0ayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTb3J0QnlBdGsoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBbc29ydEJ5U3BkLCBzZXRTb3J0QnlTcGRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTb3J0QnlTcGQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U29ydEJ5U3BkKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3QgW3NvcnRCeURlZiwgc2V0U29ydEJ5RGVmXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlU29ydEJ5RGVmID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNvcnRCeURlZigocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIGNvbnN0IFtzb3J0QnlSZXMsIHNldFNvcnRCeVJlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVNvcnRCeVJlcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTb3J0QnlSZXMoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBzb3J0QnkgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgaWYgKHNvcnRCeUhQKSB7XG4gICAgICBrZXlzLnB1c2goJ2hwJyk7XG4gICAgfVxuICAgIGlmIChzb3J0QnlBdGspIHtcbiAgICAgIGtleXMucHVzaCgnYXRrJyk7XG4gICAgfVxuICAgIGlmIChzb3J0QnlTcGQpIHtcbiAgICAgIGtleXMucHVzaCgnc3BkJyk7XG4gICAgfVxuICAgIGlmIChzb3J0QnlEZWYpIHtcbiAgICAgIGtleXMucHVzaCgnZGVmJyk7XG4gICAgfVxuICAgIGlmIChzb3J0QnlSZXMpIHtcbiAgICAgIGtleXMucHVzaCgncmVzJyk7XG4gICAgfVxuICAgIHJldHVybiBrZXlzO1xuICB9LCBbc29ydEJ5SFAsIHNvcnRCeUF0aywgc29ydEJ5U3BkLCBzb3J0QnlEZWYsIHNvcnRCeVJlc10pO1xuXG4gIHJldHVybiB7XG4gICAgc29ydEJ5LFxuICAgIHNvcnRCeUhQLFxuICAgIHRvZ2dsZVNvcnRCeUhwLFxuICAgIHNvcnRCeUF0ayxcbiAgICB0b2dnbGVTb3J0QnlBdGssXG4gICAgc29ydEJ5U3BkLFxuICAgIHRvZ2dsZVNvcnRCeVNwZCxcbiAgICBzb3J0QnlEZWYsXG4gICAgdG9nZ2xlU29ydEJ5RGVmLFxuICAgIHNvcnRCeVJlcyxcbiAgICB0b2dnbGVTb3J0QnlSZXMsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUhvb2tzKHtcbiAgaGVyb0lkLFxuICBub0Ryb3Bkb3duID0gZmFsc2UsXG4gIG5vU3RhdCA9IGZhbHNlLFxuICBvblNlbGVjdCxcbiAgcmVzcGxlbmRlbnQsXG59OiB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBub0Ryb3Bkb3duPzogYm9vbGVhbjtcbiAgbm9TdGF0PzogYm9vbGVhbjtcbiAgb25TZWxlY3Q6IChuZXdIZXJvSWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgcmVzcGxlbmRlbnQ/OiBib29sZWFuO1xufSkge1xuICBjb25zdCB7IGhlcm9EQiwgYXNzaXN0REIsIHJlc3BsZW5kZW50REIgfSA9IHVzZUZlaERCKCk7XG4gIGNvbnN0IGhlcm9lczogVEhlcm9PcHRpb25bXSA9IHVzZU1lbW8oXG4gICAgKCkgPT4gbWFrZUhlcm9PcHRpb25zKHsgaGVyb0RCLCBhc3Npc3REQiwgcmVzcGxlbmRlbnREQiwgbm9TdGF0IH0pLFxuICAgIFtoZXJvREIsIGFzc2lzdERCLCByZXNwbGVuZGVudERCLCBub1N0YXRdLFxuICApO1xuICBjb25zdCBwbGFjZWhvbGRlciA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGhlcm8gPSBoZXJvREJbaGVyb0lkXTtcbiAgICByZXR1cm4gYCR7aGVyby5uYW1lfSAtICR7aGVyby50aXRsZX1gO1xuICB9LCBbaGVyb0lkLCBoZXJvREJdKTtcblxuICAvKiogZHJvcGRvd24gY29udHJvbCAqL1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShub0Ryb3Bkb3duIHx8IGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlT3BlbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRPcGVuKChwcmV2KSA9PiB7XG4gICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSBwbGFjZWhvbGRlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAhcHJldjtcbiAgICB9KTtcbiAgfSwgW3BsYWNlaG9sZGVyXSk7XG4gIGNvbnN0IG9uSW5wdXRDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKCFvcGVuKSB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb3BlbiwgcGxhY2Vob2xkZXJdLFxuICApO1xuXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgb25DaGFuZ2VGaWx0ZXIgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBzZXRGaWx0ZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7XG4gICAgYWxsQ2hlY2tlZCxcbiAgICBhbGxJbmRldGVybWluYXRlZCxcbiAgICB0b2dnbGVBbGwsXG4gICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlTW92ZVR5cGUsXG4gICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICB0b2dnbGVXZWFwb25UeXBlLFxuICAgIGlzUmFyaXR5NSxcbiAgICB0b2dnbGVSYXJpdHk1LFxuICAgIGlzUmFyaXR5NCxcbiAgICB0b2dnbGVSYXJpdHk0LFxuICAgIGlzR3JhaWwsXG4gICAgdG9nZ2xlR3JhaWwsXG4gICAgaXNEdW8sXG4gICAgdG9nZ2xlRHVvLFxuICAgIGlzRGFuY2VyLFxuICAgIHRvZ2dsZURhbmNlcixcbiAgfSA9IHVzZVR5cGVDaGVja2JveEhvb2tzKCk7XG5cbiAgY29uc3Qge1xuICAgIHNvcnRCeSxcbiAgICBzb3J0QnlIUCxcbiAgICB0b2dnbGVTb3J0QnlIcCxcbiAgICBzb3J0QnlBdGssXG4gICAgdG9nZ2xlU29ydEJ5QXRrLFxuICAgIHNvcnRCeVNwZCxcbiAgICB0b2dnbGVTb3J0QnlTcGQsXG4gICAgc29ydEJ5RGVmLFxuICAgIHRvZ2dsZVNvcnRCeURlZixcbiAgICBzb3J0QnlSZXMsXG4gICAgdG9nZ2xlU29ydEJ5UmVzLFxuICB9ID0gdXNlU29ydEJ5SG9va3MoKTtcblxuICBjb25zb2xlLmxvZyhzb3J0QnkpO1xuXG4gIGNvbnN0IGhlcm9lc09yZGVyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGhlcm9lc1xuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgYVN0YXRTdW0gPSBzb3J0QnkucmVkdWNlKChhY2MsIHN0YXRLZXkpID0+IGFjYyArIGFbc3RhdEtleV0sIDApO1xuICAgICAgICBjb25zdCBiU3RhdFN1bSA9IHNvcnRCeS5yZWR1Y2UoKGFjYywgc3RhdEtleSkgPT4gYWNjICsgYltzdGF0S2V5XSwgMCk7XG4gICAgICAgIGlmIChhU3RhdFN1bSA+IGJTdGF0U3VtKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiU3RhdFN1bSA+IGFTdGF0U3VtKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgfSlcbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChhY2MsIGhlcm8sIGluZGV4KSA9PiAoe1xuICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICBbaGVyby5pZF06IGluZGV4LFxuICAgICAgICB9KSxcbiAgICAgICAge30sXG4gICAgICApO1xuICB9LCBbaGVyb2VzLCBzb3J0QnldKTtcblxuICBjb25zdCBjb21wdXRlZEhlcm9lcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGhlcm9lcy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBoaWRkZW4gPSBzaG91bGRCZUhpZGRlbihvcHRpb24sIHtcbiAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgICAgICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICAgICAgICBpc1Jhcml0eTUsXG4gICAgICAgICAgaXNSYXJpdHk0LFxuICAgICAgICAgIGlzR3JhaWwsXG4gICAgICAgICAgaXNEdW8sXG4gICAgICAgICAgaXNEYW5jZXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhpZGRlbixcbiAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgICAgZmFjZVNyYzogcmVzcGxlbmRlbnQgPyBvcHRpb24uZmFjZVNyY1IgOiBvcHRpb24uZmFjZVNyYyxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgIFtcbiAgICAgIGhlcm9lcyxcbiAgICAgIGZpbHRlcixcbiAgICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICAgIGlzUmFyaXR5NSxcbiAgICAgIGlzUmFyaXR5NCxcbiAgICAgIGlzR3JhaWwsXG4gICAgICBpc0R1byxcbiAgICAgIGlzRGFuY2VyLFxuICAgICAgcmVzcGxlbmRlbnQsXG4gICAgXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVPblNlbGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdIZXJvSWQ6IHN0cmluZykgPT4ge1xuICAgICAgb25TZWxlY3QobmV3SGVyb0lkKTtcbiAgICAgIHNldE9wZW4obm9Ecm9wZG93biB8fCBmYWxzZSk7XG4gICAgICBpZiAoIW5vRHJvcGRvd24pIHtcbiAgICAgICAgY29uc3QgaGVybyA9IGhlcm9EQltuZXdIZXJvSWRdO1xuICAgICAgICBjb25zdCBuZXdQbGFjZWhvbGRlciA9IGAke2hlcm8ubmFtZX0gLSAke2hlcm8udGl0bGV9YDtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IG5ld1BsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29uU2VsZWN0LCBzZXRPcGVuLCBub0Ryb3Bkb3duLCBoZXJvREJdLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLyoqIGRyb3Bkb3duIGNvbnRyb2wgKi9cbiAgICBpbnB1dFJlZixcbiAgICBvcGVuLFxuICAgIHNldE9wZW4sXG4gICAgdG9nZ2xlT3Blbjogbm9Ecm9wZG93biA/IHVuZGVmaW5lZCA6IHRvZ2dsZU9wZW4sXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGlzYWJsZWQ6IGhlcm9lcy5sZW5ndGggPCAyLFxuICAgIG9uSW5wdXRDbGljazogbm9Ecm9wZG93biA/IHVuZGVmaW5lZCA6IG9uSW5wdXRDbGljayxcbiAgICBoYW5kbGVPblNlbGVjdCxcbiAgICAvKiogZmlsdGVyaW5nIHdpdGggdGV4dCAqL1xuICAgIGZpbHRlcixcbiAgICBvbkNoYW5nZUZpbHRlcixcbiAgICAvKiogdHlwZWNoZWNrYm94ICovXG4gICAgYWxsQ2hlY2tlZCxcbiAgICBhbGxJbmRldGVybWluYXRlZCxcbiAgICB0b2dnbGVBbGwsXG4gICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlTW92ZVR5cGUsXG4gICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICB0b2dnbGVXZWFwb25UeXBlLFxuICAgIGlzUmFyaXR5NSxcbiAgICB0b2dnbGVSYXJpdHk1LFxuICAgIGlzUmFyaXR5NCxcbiAgICB0b2dnbGVSYXJpdHk0LFxuICAgIGlzR3JhaWwsXG4gICAgdG9nZ2xlR3JhaWwsXG4gICAgaXNEdW8sXG4gICAgdG9nZ2xlRHVvLFxuICAgIGlzRGFuY2VyLFxuICAgIHRvZ2dsZURhbmNlcixcbiAgICAvKiogc29ydGluZyAqL1xuICAgIHNvcnRCeUhQLFxuICAgIHRvZ2dsZVNvcnRCeUhwLFxuICAgIHNvcnRCeUF0ayxcbiAgICB0b2dnbGVTb3J0QnlBdGssXG4gICAgc29ydEJ5U3BkLFxuICAgIHRvZ2dsZVNvcnRCeVNwZCxcbiAgICBzb3J0QnlEZWYsXG4gICAgdG9nZ2xlU29ydEJ5RGVmLFxuICAgIHNvcnRCeVJlcyxcbiAgICB0b2dnbGVTb3J0QnlSZXMsXG4gICAgLyoqIHJlbmRlcmluZyAqL1xuICAgIGNvbXB1dGVkSGVyb2VzLFxuICAgIGhlcm9lc09yZGVyLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==