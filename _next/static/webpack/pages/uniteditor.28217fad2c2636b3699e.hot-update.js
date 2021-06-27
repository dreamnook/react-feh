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
  console.log(heroesOrder);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyb1NlbGVjdC9ob29rcy50c3giXSwibmFtZXMiOlsidXNlU29ydEJ5SG9va3MiLCJ1c2VTdGF0ZSIsInNvcnRCeUhQIiwic2V0U29ydEJ5SFAiLCJ0b2dnbGVTb3J0QnlIcCIsInVzZUNhbGxiYWNrIiwicHJldiIsInNvcnRCeUF0ayIsInNldFNvcnRCeUF0ayIsInRvZ2dsZVNvcnRCeUF0ayIsInNvcnRCeVNwZCIsInNldFNvcnRCeVNwZCIsInRvZ2dsZVNvcnRCeVNwZCIsInNvcnRCeURlZiIsInNldFNvcnRCeURlZiIsInRvZ2dsZVNvcnRCeURlZiIsInNvcnRCeVJlcyIsInNldFNvcnRCeVJlcyIsInRvZ2dsZVNvcnRCeVJlcyIsInNvcnRCeSIsInVzZU1lbW8iLCJrZXlzIiwicHVzaCIsInVzZUhvb2tzIiwiaGVyb0lkIiwibm9Ecm9wZG93biIsIm5vU3RhdCIsIm9uU2VsZWN0IiwicmVzcGxlbmRlbnQiLCJ1c2VGZWhEQiIsImhlcm9EQiIsImFzc2lzdERCIiwicmVzcGxlbmRlbnREQiIsImhlcm9lcyIsIm1ha2VIZXJvT3B0aW9ucyIsInBsYWNlaG9sZGVyIiwiaGVybyIsIm5hbWUiLCJ0aXRsZSIsImlucHV0UmVmIiwidXNlUmVmIiwib3BlbiIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwiY3VycmVudCIsImZvY3VzIiwidmFsdWUiLCJvbklucHV0Q2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbHRlciIsInNldEZpbHRlciIsIm9uQ2hhbmdlRmlsdGVyIiwiY3VycmVudFRhcmdldCIsInVzZVR5cGVDaGVja2JveEhvb2tzIiwiYWxsQ2hlY2tlZCIsImFsbEluZGV0ZXJtaW5hdGVkIiwidG9nZ2xlQWxsIiwibW92ZVR5cGVGaWx0ZXIiLCJ0b2dnbGVNb3ZlVHlwZSIsIndlYXBvblR5cGVGaWx0ZXIiLCJ0b2dnbGVXZWFwb25UeXBlIiwiaXNSYXJpdHk1IiwidG9nZ2xlUmFyaXR5NSIsImlzUmFyaXR5NCIsInRvZ2dsZVJhcml0eTQiLCJpc0dyYWlsIiwidG9nZ2xlR3JhaWwiLCJpc0R1byIsInRvZ2dsZUR1byIsImlzRGFuY2VyIiwidG9nZ2xlRGFuY2VyIiwiaGVyb2VzT3JkZXIiLCJzb3J0IiwiYSIsImIiLCJhU3RhdFN1bSIsInJlZHVjZSIsImFjYyIsInN0YXRLZXkiLCJiU3RhdFN1bSIsImluZGV4IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiY29tcHV0ZWRIZXJvZXMiLCJtYXAiLCJvcHRpb24iLCJoaWRkZW4iLCJzaG91bGRCZUhpZGRlbiIsImZhY2VTcmMiLCJmYWNlU3JjUiIsImhhbmRsZU9uU2VsZWN0IiwibmV3SGVyb0lkIiwibmV3UGxhY2Vob2xkZXIiLCJ1bmRlZmluZWQiLCJkaXNhYmxlZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBS0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUEsa0JBQ1FDLCtDQUFRLENBQUMsS0FBRCxDQURoQjtBQUFBLE1BQ2pCQyxRQURpQjtBQUFBLE1BQ1BDLFdBRE87O0FBRXhCLE1BQU1DLGNBQWMsR0FBR0Msa0RBQVcsQ0FBQyxZQUFNO0FBQ3ZDRixlQUFXLENBQUMsVUFBQ0csSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBWDtBQUNELEdBRmlDLEVBRS9CLEVBRitCLENBQWxDOztBQUZ3QixtQkFLVUwsK0NBQVEsQ0FBQyxLQUFELENBTGxCO0FBQUEsTUFLakJNLFNBTGlCO0FBQUEsTUFLTkMsWUFMTTs7QUFNeEIsTUFBTUMsZUFBZSxHQUFHSixrREFBVyxDQUFDLFlBQU07QUFDeENHLGdCQUFZLENBQUMsVUFBQ0YsSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBWjtBQUNELEdBRmtDLEVBRWhDLEVBRmdDLENBQW5DOztBQU53QixtQkFTVUwsK0NBQVEsQ0FBQyxLQUFELENBVGxC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QUFkQSxjQWxCSztBQW1CTEMsb0JBQWdCLEVBQWhCQSxnQkFuQks7QUFvQkxDLG9CQUFnQixFQUFoQkEsZ0JBcEJLO0FBcUJMQyxhQUFTLEVBQVRBLFNBckJLO0FBc0JMQyxpQkFBYSxFQUFiQSxhQXRCSztBQXVCTEMsYUFBUyxFQUFUQSxTQXZCSztBQXdCTEMsaUJBQWEsRUFBYkEsYUF4Qks7QUF5QkxDLFdBQU8sRUFBUEEsT0F6Qks7QUEwQkxDLGVBQVcsRUFBWEEsV0ExQks7QUEyQkxDLFNBQUssRUFBTEEsS0EzQks7QUE0QkxDLGFBQVMsRUFBVEEsU0E1Qks7QUE2QkxDLFlBQVEsRUFBUkEsUUE3Qks7QUE4QkxDLGdCQUFZLEVBQVpBLFlBOUJLOztBQStCTDtBQUNBckUsWUFBUSxFQUFSQSxRQWhDSztBQWlDTEUsa0JBQWMsRUFBZEEsY0FqQ0s7QUFrQ0xHLGFBQVMsRUFBVEEsU0FsQ0s7QUFtQ0xFLG1CQUFlLEVBQWZBLGVBbkNLO0FBb0NMQyxhQUFTLEVBQVRBLFNBcENLO0FBcUNMRSxtQkFBZSxFQUFmQSxlQXJDSztBQXNDTEMsYUFBUyxFQUFUQSxTQXRDSztBQXVDTEUsbUJBQWUsRUFBZkEsZUF2Q0s7QUF3Q0xDLGFBQVMsRUFBVEEsU0F4Q0s7QUF5Q0xFLG1CQUFlLEVBQWZBLGVBekNLOztBQTBDTDtBQUNBbUUsa0JBQWMsRUFBZEEsY0EzQ0s7QUE0Q0xiLGVBQVcsRUFBWEE7QUE1Q0ssR0FBUDtBQThDRDs7SUEvTXVCakQsUTtVQWFzQk0scUQsRUE4RHhDeUIsdUYsRUFjQXRELGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci4yODIxN2ZhZDJjMjYzNmIzNjk5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ludGhldGljRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgVEhlcm9PcHRpb24sXG4gIG1ha2VIZXJvT3B0aW9ucyxcbiAgc2hvdWxkQmVIaWRkZW4sXG59IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgdXNlVHlwZUNoZWNrYm94SG9va3MgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9UeXBlQ2hlY2tib3hzL3VzZVR5cGVDaGVja2JveEhvb2tzJztcbmltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5cbmZ1bmN0aW9uIHVzZVNvcnRCeUhvb2tzKCkge1xuICBjb25zdCBbc29ydEJ5SFAsIHNldFNvcnRCeUhQXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlU29ydEJ5SHAgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U29ydEJ5SFAoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBbc29ydEJ5QXRrLCBzZXRTb3J0QnlBdGtdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTb3J0QnlBdGsgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U29ydEJ5QXRrKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3QgW3NvcnRCeVNwZCwgc2V0U29ydEJ5U3BkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlU29ydEJ5U3BkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNvcnRCeVNwZCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIGNvbnN0IFtzb3J0QnlEZWYsIHNldFNvcnRCeURlZl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVNvcnRCeURlZiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTb3J0QnlEZWYoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBbc29ydEJ5UmVzLCBzZXRTb3J0QnlSZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTb3J0QnlSZXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U29ydEJ5UmVzKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3Qgc29ydEJ5ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGlmIChzb3J0QnlIUCkge1xuICAgICAga2V5cy5wdXNoKCdocCcpO1xuICAgIH1cbiAgICBpZiAoc29ydEJ5QXRrKSB7XG4gICAgICBrZXlzLnB1c2goJ2F0aycpO1xuICAgIH1cbiAgICBpZiAoc29ydEJ5U3BkKSB7XG4gICAgICBrZXlzLnB1c2goJ3NwZCcpO1xuICAgIH1cbiAgICBpZiAoc29ydEJ5RGVmKSB7XG4gICAgICBrZXlzLnB1c2goJ2RlZicpO1xuICAgIH1cbiAgICBpZiAoc29ydEJ5UmVzKSB7XG4gICAgICBrZXlzLnB1c2goJ3JlcycpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbiAgfSwgW3NvcnRCeUhQLCBzb3J0QnlBdGssIHNvcnRCeVNwZCwgc29ydEJ5RGVmLCBzb3J0QnlSZXNdKTtcblxuICByZXR1cm4ge1xuICAgIHNvcnRCeSxcbiAgICBzb3J0QnlIUCxcbiAgICB0b2dnbGVTb3J0QnlIcCxcbiAgICBzb3J0QnlBdGssXG4gICAgdG9nZ2xlU29ydEJ5QXRrLFxuICAgIHNvcnRCeVNwZCxcbiAgICB0b2dnbGVTb3J0QnlTcGQsXG4gICAgc29ydEJ5RGVmLFxuICAgIHRvZ2dsZVNvcnRCeURlZixcbiAgICBzb3J0QnlSZXMsXG4gICAgdG9nZ2xlU29ydEJ5UmVzLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIb29rcyh7XG4gIGhlcm9JZCxcbiAgbm9Ecm9wZG93biA9IGZhbHNlLFxuICBub1N0YXQgPSBmYWxzZSxcbiAgb25TZWxlY3QsXG4gIHJlc3BsZW5kZW50LFxufToge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgbm9Ecm9wZG93bj86IGJvb2xlYW47XG4gIG5vU3RhdD86IGJvb2xlYW47XG4gIG9uU2VsZWN0OiAobmV3SGVyb0lkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHJlc3BsZW5kZW50PzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgeyBoZXJvREIsIGFzc2lzdERCLCByZXNwbGVuZGVudERCIH0gPSB1c2VGZWhEQigpO1xuICBjb25zdCBoZXJvZXM6IFRIZXJvT3B0aW9uW10gPSB1c2VNZW1vKFxuICAgICgpID0+IG1ha2VIZXJvT3B0aW9ucyh7IGhlcm9EQiwgYXNzaXN0REIsIHJlc3BsZW5kZW50REIsIG5vU3RhdCB9KSxcbiAgICBbaGVyb0RCLCBhc3Npc3REQiwgcmVzcGxlbmRlbnREQiwgbm9TdGF0XSxcbiAgKTtcbiAgY29uc3QgcGxhY2Vob2xkZXIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBoZXJvID0gaGVyb0RCW2hlcm9JZF07XG4gICAgcmV0dXJuIGAke2hlcm8ubmFtZX0gLSAke2hlcm8udGl0bGV9YDtcbiAgfSwgW2hlcm9JZCwgaGVyb0RCXSk7XG5cbiAgLyoqIGRyb3Bkb3duIGNvbnRyb2wgKi9cbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUobm9Ecm9wZG93biB8fCBmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZU9wZW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0T3BlbigocHJldikgPT4ge1xuICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9ICcnO1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gcGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gIXByZXY7XG4gICAgfSk7XG4gIH0sIFtwbGFjZWhvbGRlcl0pO1xuICBjb25zdCBvbklucHV0Q2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghb3Blbikge1xuICAgICAgICBzZXRPcGVuKHRydWUpO1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29wZW4sIHBsYWNlaG9sZGVyXSxcbiAgKTtcblxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlRmlsdGVyID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XG4gICAgc2V0RmlsdGVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qge1xuICAgIGFsbENoZWNrZWQsXG4gICAgYWxsSW5kZXRlcm1pbmF0ZWQsXG4gICAgdG9nZ2xlQWxsLFxuICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgIHRvZ2dsZU1vdmVUeXBlLFxuICAgIHdlYXBvblR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlV2VhcG9uVHlwZSxcbiAgICBpc1Jhcml0eTUsXG4gICAgdG9nZ2xlUmFyaXR5NSxcbiAgICBpc1Jhcml0eTQsXG4gICAgdG9nZ2xlUmFyaXR5NCxcbiAgICBpc0dyYWlsLFxuICAgIHRvZ2dsZUdyYWlsLFxuICAgIGlzRHVvLFxuICAgIHRvZ2dsZUR1byxcbiAgICBpc0RhbmNlcixcbiAgICB0b2dnbGVEYW5jZXIsXG4gIH0gPSB1c2VUeXBlQ2hlY2tib3hIb29rcygpO1xuXG4gIGNvbnN0IHtcbiAgICBzb3J0QnksXG4gICAgc29ydEJ5SFAsXG4gICAgdG9nZ2xlU29ydEJ5SHAsXG4gICAgc29ydEJ5QXRrLFxuICAgIHRvZ2dsZVNvcnRCeUF0ayxcbiAgICBzb3J0QnlTcGQsXG4gICAgdG9nZ2xlU29ydEJ5U3BkLFxuICAgIHNvcnRCeURlZixcbiAgICB0b2dnbGVTb3J0QnlEZWYsXG4gICAgc29ydEJ5UmVzLFxuICAgIHRvZ2dsZVNvcnRCeVJlcyxcbiAgfSA9IHVzZVNvcnRCeUhvb2tzKCk7XG5cbiAgY29uc3QgaGVyb2VzT3JkZXIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gaGVyb2VzXG4gICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBhU3RhdFN1bSA9IHNvcnRCeS5yZWR1Y2UoKGFjYywgc3RhdEtleSkgPT4gYWNjICsgYVtzdGF0S2V5XSwgMCk7XG4gICAgICAgIGNvbnN0IGJTdGF0U3VtID0gc29ydEJ5LnJlZHVjZSgoYWNjLCBzdGF0S2V5KSA9PiBhY2MgKyBiW3N0YXRLZXldLCAwKTtcbiAgICAgICAgaWYgKGFTdGF0U3VtID4gYlN0YXRTdW0pIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJTdGF0U3VtID4gYVN0YXRTdW0pIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICB9KVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGFjYywgaGVybywgaW5kZXgpID0+ICh7XG4gICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgIFtoZXJvLmlkXTogaW5kZXgsXG4gICAgICAgIH0pLFxuICAgICAgICB7fSxcbiAgICAgICk7XG4gIH0sIFtoZXJvZXMsIHNvcnRCeV0pO1xuXG4gIGNvbnNvbGUubG9nKGhlcm9lc09yZGVyKTtcblxuICBjb25zdCBjb21wdXRlZEhlcm9lcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGhlcm9lcy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBoaWRkZW4gPSBzaG91bGRCZUhpZGRlbihvcHRpb24sIHtcbiAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgICAgICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICAgICAgICBpc1Jhcml0eTUsXG4gICAgICAgICAgaXNSYXJpdHk0LFxuICAgICAgICAgIGlzR3JhaWwsXG4gICAgICAgICAgaXNEdW8sXG4gICAgICAgICAgaXNEYW5jZXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhpZGRlbixcbiAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgICAgZmFjZVNyYzogcmVzcGxlbmRlbnQgPyBvcHRpb24uZmFjZVNyY1IgOiBvcHRpb24uZmFjZVNyYyxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgIFtcbiAgICAgIGhlcm9lcyxcbiAgICAgIGZpbHRlcixcbiAgICAgIG1vdmVUeXBlRmlsdGVyLFxuICAgICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICAgIGlzUmFyaXR5NSxcbiAgICAgIGlzUmFyaXR5NCxcbiAgICAgIGlzR3JhaWwsXG4gICAgICBpc0R1byxcbiAgICAgIGlzRGFuY2VyLFxuICAgICAgcmVzcGxlbmRlbnQsXG4gICAgXSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVPblNlbGVjdCA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdIZXJvSWQ6IHN0cmluZykgPT4ge1xuICAgICAgb25TZWxlY3QobmV3SGVyb0lkKTtcbiAgICAgIHNldE9wZW4obm9Ecm9wZG93biB8fCBmYWxzZSk7XG4gICAgICBpZiAoIW5vRHJvcGRvd24pIHtcbiAgICAgICAgY29uc3QgaGVybyA9IGhlcm9EQltuZXdIZXJvSWRdO1xuICAgICAgICBjb25zdCBuZXdQbGFjZWhvbGRlciA9IGAke2hlcm8ubmFtZX0gLSAke2hlcm8udGl0bGV9YDtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IG5ld1BsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29uU2VsZWN0LCBzZXRPcGVuLCBub0Ryb3Bkb3duLCBoZXJvREJdLFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLyoqIGRyb3Bkb3duIGNvbnRyb2wgKi9cbiAgICBpbnB1dFJlZixcbiAgICBvcGVuLFxuICAgIHNldE9wZW4sXG4gICAgdG9nZ2xlT3Blbjogbm9Ecm9wZG93biA/IHVuZGVmaW5lZCA6IHRvZ2dsZU9wZW4sXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGlzYWJsZWQ6IGhlcm9lcy5sZW5ndGggPCAyLFxuICAgIG9uSW5wdXRDbGljazogbm9Ecm9wZG93biA/IHVuZGVmaW5lZCA6IG9uSW5wdXRDbGljayxcbiAgICBoYW5kbGVPblNlbGVjdCxcbiAgICAvKiogZmlsdGVyaW5nIHdpdGggdGV4dCAqL1xuICAgIGZpbHRlcixcbiAgICBvbkNoYW5nZUZpbHRlcixcbiAgICAvKiogdHlwZWNoZWNrYm94ICovXG4gICAgYWxsQ2hlY2tlZCxcbiAgICBhbGxJbmRldGVybWluYXRlZCxcbiAgICB0b2dnbGVBbGwsXG4gICAgbW92ZVR5cGVGaWx0ZXIsXG4gICAgdG9nZ2xlTW92ZVR5cGUsXG4gICAgd2VhcG9uVHlwZUZpbHRlcixcbiAgICB0b2dnbGVXZWFwb25UeXBlLFxuICAgIGlzUmFyaXR5NSxcbiAgICB0b2dnbGVSYXJpdHk1LFxuICAgIGlzUmFyaXR5NCxcbiAgICB0b2dnbGVSYXJpdHk0LFxuICAgIGlzR3JhaWwsXG4gICAgdG9nZ2xlR3JhaWwsXG4gICAgaXNEdW8sXG4gICAgdG9nZ2xlRHVvLFxuICAgIGlzRGFuY2VyLFxuICAgIHRvZ2dsZURhbmNlcixcbiAgICAvKiogc29ydGluZyAqL1xuICAgIHNvcnRCeUhQLFxuICAgIHRvZ2dsZVNvcnRCeUhwLFxuICAgIHNvcnRCeUF0ayxcbiAgICB0b2dnbGVTb3J0QnlBdGssXG4gICAgc29ydEJ5U3BkLFxuICAgIHRvZ2dsZVNvcnRCeVNwZCxcbiAgICBzb3J0QnlEZWYsXG4gICAgdG9nZ2xlU29ydEJ5RGVmLFxuICAgIHNvcnRCeVJlcyxcbiAgICB0b2dnbGVTb3J0QnlSZXMsXG4gICAgLyoqIHJlbmRlcmluZyAqL1xuICAgIGNvbXB1dGVkSGVyb2VzLFxuICAgIGhlcm9lc09yZGVyLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==