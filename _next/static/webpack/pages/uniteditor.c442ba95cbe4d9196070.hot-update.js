webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/page/UnitEditor/hooks.tsx":
/*!***************************************!*\
  !*** ./app/page/UnitEditor/hooks.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHooks; });
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* harmony import */ var _app_utils_default_skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/default-skill */ "./app/utils/default-skill.tsx");
/* harmony import */ var _app_utils_weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/weapon */ "./app/utils/weapon.tsx");
/* harmony import */ var _app_utils_assist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/utils/assist */ "./app/utils/assist.tsx");
/* harmony import */ var _app_utils_skill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/utils/skill */ "./app/utils/skill.tsx");
/* harmony import */ var _app_utils_special__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/utils/special */ "./app/utils/special.tsx");
/* harmony import */ var _app_utils_seal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/utils/seal */ "./app/utils/seal.tsx");
var _s = $RefreshSig$();










function useHooks() {
  _s();

  var _useFehDB = Object(_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_2__["useFehDB"])(),
      rulesDB = _useFehDB.rulesDB,
      heroDB = _useFehDB.heroDB,
      weaponDB = _useFehDB.weaponDB,
      assistDB = _useFehDB.assistDB,
      specialDB = _useFehDB.specialDB,
      skillADB = _useFehDB.skillADB,
      skillBDB = _useFehDB.skillBDB,
      skillCDB = _useFehDB.skillCDB,
      sealDB = _useFehDB.sealDB,
      defaultSkillDB = _useFehDB.defaultSkillDB;
  /** hero */


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Feh'),
      heroId = _useState[0],
      setHeroId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(5),
      rarity = _useState2[0],
      setRarity = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      iv = _useState3[0],
      setIV = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      merge = _useState4[0],
      setMerge = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      dragonflower = _useState5[0],
      setDragonflower = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      blessing = _useState6[0],
      setBlessing = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      support = _useState7[0],
      setSupport = _useState7[1];

  var toggleSupport = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSupport(function (prev) {
      return !prev;
    });
  }, []);
  /** skills */

  var defaultSkillsRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({
    weapon: '',
    assist: '',
    special: '',
    skillA: '',
    skillB: '',
    skillC: ''
  });

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      weapon = _useState8[0],
      setWeapon = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      refine = _useState9[0],
      setRefine = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      assist = _useState10[0],
      setAssist = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      special = _useState11[0],
      setSpecial = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      skillA = _useState12[0],
      setSkillA = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      skillB = _useState13[0],
      setSkillB = _useState13[1];

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      skillC = _useState14[0],
      setSkillC = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      seal = _useState15[0],
      setSeal = _useState15[1];

  var setDefaultWeapon = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setWeapon(defaultSkillsRef.current.weapon);
  }, []);
  var setDefaultAssist = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setAssist(defaultSkillsRef.current.assist);
  }, []);
  var setDefaultSpecial = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSpecial(defaultSkillsRef.current.special);
  }, []);
  var setDefaultSkillA = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSkillA(defaultSkillsRef.current.skillA);
  }, []);
  var setDefaultSkillB = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSkillB(defaultSkillsRef.current.skillB);
  }, []);
  var setDefaultSkillC = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSkillC(defaultSkillsRef.current.skillC);
  }, []);
  var setAllSkillDefault = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setDefaultWeapon();
    setDefaultAssist();
    setDefaultSpecial();
    setDefaultSkillA();
    setDefaultSkillB();
    setDefaultSkillC();
  }, [setDefaultWeapon, setDefaultAssist, setDefaultSpecial, setDefaultSkillA, setDefaultSkillB, setDefaultSkillC]);
  var onChangeHero = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (newHeroId) {
    setHeroId(newHeroId);
    defaultSkillsRef.current = Object(_app_utils_default_skill__WEBPACK_IMPORTED_MODULE_3__["getDefaultSkillIds"])({
      defaultSkillDB: defaultSkillDB,
      heroId: newHeroId
    });
    setWeapon(function (prev) {
      var has = Object(_app_utils_weapon__WEBPACK_IMPORTED_MODULE_4__["hasWeaponOption"])({
        heroDB: heroDB,
        weaponDB: weaponDB,
        heroId: newHeroId,
        weaponId: prev
      });
      return has ? prev : '';
    });
    setAssist(function (prev) {
      var has = Object(_app_utils_assist__WEBPACK_IMPORTED_MODULE_5__["hasAssistOption"])({
        rulesDB: rulesDB,
        heroDB: heroDB,
        assistDB: assistDB,
        heroId: newHeroId,
        assistId: prev
      });
      return has ? prev : '';
    });
    setSpecial(function (prev) {
      var has = Object(_app_utils_special__WEBPACK_IMPORTED_MODULE_7__["hasSpecialOption"])({
        rulesDB: rulesDB,
        heroDB: heroDB,
        specialDB: specialDB,
        heroId: newHeroId,
        specialId: prev
      });
      return has ? prev : '';
    });
    setSkillA(function (prev) {
      var has = Object(_app_utils_skill__WEBPACK_IMPORTED_MODULE_6__["hasSkillOption"])({
        rulesDB: rulesDB,
        heroDB: heroDB,
        skillDB: skillADB,
        heroId: newHeroId,
        skillId: prev
      });
      return has ? prev : '';
    });
    setSkillB(function (prev) {
      var has = Object(_app_utils_skill__WEBPACK_IMPORTED_MODULE_6__["hasSkillOption"])({
        rulesDB: rulesDB,
        heroDB: heroDB,
        skillDB: skillBDB,
        heroId: newHeroId,
        skillId: prev
      });
      return has ? prev : '';
    });
    setSkillC(function (prev) {
      var has = Object(_app_utils_skill__WEBPACK_IMPORTED_MODULE_6__["hasSkillOption"])({
        rulesDB: rulesDB,
        heroDB: heroDB,
        skillDB: skillCDB,
        heroId: newHeroId,
        skillId: prev
      });
      return has ? prev : '';
    });
    setSeal(function (prev) {
      var has = Object(_app_utils_seal__WEBPACK_IMPORTED_MODULE_8__["hasSealOpton"])({
        rulesDB: rulesDB,
        heroDB: heroDB,
        sealDB: sealDB,
        heroId: newHeroId,
        sealId: prev
      });
      return has ? prev : '';
    });
  }, [rulesDB, heroDB, weaponDB, assistDB, specialDB, skillADB, skillBDB, skillCDB, sealDB, defaultSkillDB]);
  /** bonus */

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      arena = _useState16[0],
      setArena = _useState16[1];

  var toggleArena = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setArena(function (prev) {
      return !prev;
    });
  }, []);

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      resplendent = _useState17[0],
      setResplendent = _useState17[1];

  var toggleResplendent = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setResplendent(function (prev) {
      return !prev;
    });
  }, []);
  /** pure qos ui */

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      lv1 = _useState18[0],
      setLV1 = _useState18[1];

  var toggleLv1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setLV1(function (prev) {
      return !prev;
    });
  }, []);

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      maxSkill = _useState19[0],
      setMaxSkill = _useState19[1];

  var toggleMaxSkill = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setMaxSkill(function (prev) {
      return !prev;
    });
  }, []);
  /** editor */

  var _useState20 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      editorIsOpen = _useState20[0],
      setEditorIsOpen = _useState20[1];

  var openEditor = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setEditorIsOpen(true);
  }, []);
  var closeEditor = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setEditorIsOpen(false);
  }, []);
  var bg = Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_0__["default"])('/assets/summon-stone.jpg');
  return {
    /** hero */
    heroId: heroId,
    onChangeHero: onChangeHero,
    rarity: rarity,
    setRarity: setRarity,
    iv: iv,
    setIV: setIV,
    merge: merge,
    setMerge: setMerge,
    dragonflower: dragonflower,
    setDragonflower: setDragonflower,
    blessing: blessing,
    setBlessing: setBlessing,
    support: support,
    toggleSupport: toggleSupport,
    arena: arena,
    toggleArena: toggleArena,
    resplendent: resplendent,
    toggleResplendent: toggleResplendent,

    /** skills */
    weapon: weapon,
    setWeapon: setWeapon,
    refine: refine,
    setRefine: setRefine,
    assist: assist,
    setAssist: setAssist,
    special: special,
    setSpecial: setSpecial,
    skillA: skillA,
    setSkillA: setSkillA,
    skillB: skillB,
    setSkillB: setSkillB,
    skillC: skillC,
    setSkillC: setSkillC,
    seal: seal,
    setSeal: setSeal,
    setDefaultWeapon: setDefaultWeapon,
    setDefaultAssist: setDefaultAssist,
    setDefaultSpecial: setDefaultSpecial,
    setDefaultSkillA: setDefaultSkillA,
    setDefaultSkillB: setDefaultSkillB,
    setDefaultSkillC: setDefaultSkillC,
    setAllSkillDefault: setAllSkillDefault,

    /** pure qos ui */
    lv1: lv1,
    toggleLv1: toggleLv1,
    maxSkill: maxSkill,
    toggleMaxSkill: toggleMaxSkill,

    /** editor */
    bg: bg,
    editorIsOpen: editorIsOpen,
    openEditor: openEditor,
    closeEditor: closeEditor
  };
}

_s(useHooks, "8gBe7L72pTWgpIEgAmgr2F20Lcg=", false, function () {
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_2__["useFehDB"], _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_0__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UvVW5pdEVkaXRvci9ob29rcy50c3giXSwibmFtZXMiOlsidXNlSG9va3MiLCJ1c2VGZWhEQiIsInJ1bGVzREIiLCJoZXJvREIiLCJ3ZWFwb25EQiIsImFzc2lzdERCIiwic3BlY2lhbERCIiwic2tpbGxBREIiLCJza2lsbEJEQiIsInNraWxsQ0RCIiwic2VhbERCIiwiZGVmYXVsdFNraWxsREIiLCJ1c2VTdGF0ZSIsImhlcm9JZCIsInNldEhlcm9JZCIsInJhcml0eSIsInNldFJhcml0eSIsIml2Iiwic2V0SVYiLCJtZXJnZSIsInNldE1lcmdlIiwiZHJhZ29uZmxvd2VyIiwic2V0RHJhZ29uZmxvd2VyIiwiYmxlc3NpbmciLCJzZXRCbGVzc2luZyIsInN1cHBvcnQiLCJzZXRTdXBwb3J0IiwidG9nZ2xlU3VwcG9ydCIsInVzZUNhbGxiYWNrIiwicHJldiIsImRlZmF1bHRTa2lsbHNSZWYiLCJ1c2VSZWYiLCJ3ZWFwb24iLCJhc3Npc3QiLCJzcGVjaWFsIiwic2tpbGxBIiwic2tpbGxCIiwic2tpbGxDIiwic2V0V2VhcG9uIiwicmVmaW5lIiwic2V0UmVmaW5lIiwic2V0QXNzaXN0Iiwic2V0U3BlY2lhbCIsInNldFNraWxsQSIsInNldFNraWxsQiIsInNldFNraWxsQyIsInNlYWwiLCJzZXRTZWFsIiwic2V0RGVmYXVsdFdlYXBvbiIsImN1cnJlbnQiLCJzZXREZWZhdWx0QXNzaXN0Iiwic2V0RGVmYXVsdFNwZWNpYWwiLCJzZXREZWZhdWx0U2tpbGxBIiwic2V0RGVmYXVsdFNraWxsQiIsInNldERlZmF1bHRTa2lsbEMiLCJzZXRBbGxTa2lsbERlZmF1bHQiLCJvbkNoYW5nZUhlcm8iLCJuZXdIZXJvSWQiLCJnZXREZWZhdWx0U2tpbGxJZHMiLCJoYXMiLCJoYXNXZWFwb25PcHRpb24iLCJ3ZWFwb25JZCIsImhhc0Fzc2lzdE9wdGlvbiIsImFzc2lzdElkIiwiaGFzU3BlY2lhbE9wdGlvbiIsInNwZWNpYWxJZCIsImhhc1NraWxsT3B0aW9uIiwic2tpbGxEQiIsInNraWxsSWQiLCJoYXNTZWFsT3B0b24iLCJzZWFsSWQiLCJhcmVuYSIsInNldEFyZW5hIiwidG9nZ2xlQXJlbmEiLCJyZXNwbGVuZGVudCIsInNldFJlc3BsZW5kZW50IiwidG9nZ2xlUmVzcGxlbmRlbnQiLCJsdjEiLCJzZXRMVjEiLCJ0b2dnbGVMdjEiLCJtYXhTa2lsbCIsInNldE1heFNraWxsIiwidG9nZ2xlTWF4U2tpbGwiLCJlZGl0b3JJc09wZW4iLCJzZXRFZGl0b3JJc09wZW4iLCJvcGVuRWRpdG9yIiwiY2xvc2VFZGl0b3IiLCJiZyIsInVzZUJhc2VQYXRoVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBWTdCQyxnRUFBUSxFQVpxQjtBQUFBLE1BRS9CQyxPQUYrQixhQUUvQkEsT0FGK0I7QUFBQSxNQUcvQkMsTUFIK0IsYUFHL0JBLE1BSCtCO0FBQUEsTUFJL0JDLFFBSitCLGFBSS9CQSxRQUorQjtBQUFBLE1BSy9CQyxRQUwrQixhQUsvQkEsUUFMK0I7QUFBQSxNQU0vQkMsU0FOK0IsYUFNL0JBLFNBTitCO0FBQUEsTUFPL0JDLFFBUCtCLGFBTy9CQSxRQVArQjtBQUFBLE1BUS9CQyxRQVIrQixhQVEvQkEsUUFSK0I7QUFBQSxNQVMvQkMsUUFUK0IsYUFTL0JBLFFBVCtCO0FBQUEsTUFVL0JDLE1BVitCLGFBVS9CQSxNQVYrQjtBQUFBLE1BVy9CQyxjQVgrQixhQVcvQkEsY0FYK0I7QUFhakM7OztBQWJpQyxrQkFjTEMsc0RBQVEsQ0FBQyxLQUFELENBZEg7QUFBQSxNQWMxQkMsTUFkMEI7QUFBQSxNQWNsQkMsU0Fka0I7O0FBQUEsbUJBZUxGLHNEQUFRLENBQVEsQ0FBUixDQWZIO0FBQUEsTUFlMUJHLE1BZjBCO0FBQUEsTUFlbEJDLFNBZmtCOztBQUFBLG1CQWdCYkosc0RBQVEsQ0FBQyxFQUFELENBaEJLO0FBQUEsTUFnQjFCSyxFQWhCMEI7QUFBQSxNQWdCdEJDLEtBaEJzQjs7QUFBQSxtQkFpQlBOLHNEQUFRLENBQUMsQ0FBRCxDQWpCRDtBQUFBLE1BaUIxQk8sS0FqQjBCO0FBQUEsTUFpQm5CQyxRQWpCbUI7O0FBQUEsbUJBa0JPUixzREFBUSxDQUFDLENBQUQsQ0FsQmY7QUFBQSxNQWtCMUJTLFlBbEIwQjtBQUFBLE1Ba0JaQyxlQWxCWTs7QUFBQSxtQkFtQkRWLHNEQUFRLENBQUMsRUFBRCxDQW5CUDtBQUFBLE1BbUIxQlcsUUFuQjBCO0FBQUEsTUFtQmhCQyxXQW5CZ0I7O0FBQUEsbUJBb0JIWixzREFBUSxDQUFDLEtBQUQsQ0FwQkw7QUFBQSxNQW9CMUJhLE9BcEIwQjtBQUFBLE1Bb0JqQkMsVUFwQmlCOztBQXFCakMsTUFBTUMsYUFBYSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdENGLGNBQVUsQ0FBQyxVQUFDRyxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFWO0FBQ0QsR0FGZ0MsRUFFOUIsRUFGOEIsQ0FBakM7QUFHQTs7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR0Msb0RBQU0sQ0FPNUI7QUFDREMsVUFBTSxFQUFFLEVBRFA7QUFFREMsVUFBTSxFQUFFLEVBRlA7QUFHREMsV0FBTyxFQUFFLEVBSFI7QUFJREMsVUFBTSxFQUFFLEVBSlA7QUFLREMsVUFBTSxFQUFFLEVBTFA7QUFNREMsVUFBTSxFQUFFO0FBTlAsR0FQNEIsQ0FBL0I7O0FBekJpQyxtQkF3Q0x6QixzREFBUSxDQUFDLEVBQUQsQ0F4Q0g7QUFBQSxNQXdDMUJvQixNQXhDMEI7QUFBQSxNQXdDbEJNLFNBeENrQjs7QUFBQSxtQkF5Q0wxQixzREFBUSxDQUFDLEVBQUQsQ0F6Q0g7QUFBQSxNQXlDMUIyQixNQXpDMEI7QUFBQSxNQXlDbEJDLFNBekNrQjs7QUFBQSxvQkEwQ0w1QixzREFBUSxDQUFDLEVBQUQsQ0ExQ0g7QUFBQSxNQTBDMUJxQixNQTFDMEI7QUFBQSxNQTBDbEJRLFNBMUNrQjs7QUFBQSxvQkEyQ0g3QixzREFBUSxDQUFDLEVBQUQsQ0EzQ0w7QUFBQSxNQTJDMUJzQixPQTNDMEI7QUFBQSxNQTJDakJRLFVBM0NpQjs7QUFBQSxvQkE0Q0w5QixzREFBUSxDQUFDLEVBQUQsQ0E1Q0g7QUFBQSxNQTRDMUJ1QixNQTVDMEI7QUFBQSxNQTRDbEJRLFNBNUNrQjs7QUFBQSxvQkE2Q0wvQixzREFBUSxDQUFDLEVBQUQsQ0E3Q0g7QUFBQSxNQTZDMUJ3QixNQTdDMEI7QUFBQSxNQTZDbEJRLFNBN0NrQjs7QUFBQSxvQkE4Q0xoQyxzREFBUSxDQUFDLEVBQUQsQ0E5Q0g7QUFBQSxNQThDMUJ5QixNQTlDMEI7QUFBQSxNQThDbEJRLFNBOUNrQjs7QUFBQSxvQkErQ1RqQyxzREFBUSxDQUFDLEVBQUQsQ0EvQ0M7QUFBQSxNQStDMUJrQyxJQS9DMEI7QUFBQSxNQStDcEJDLE9BL0NvQjs7QUFpRGpDLE1BQU1DLGdCQUFnQixHQUFHcEIseURBQVcsQ0FBQyxZQUFNO0FBQ3pDVSxhQUFTLENBQUNSLGdCQUFnQixDQUFDbUIsT0FBakIsQ0FBeUJqQixNQUExQixDQUFUO0FBQ0QsR0FGbUMsRUFFakMsRUFGaUMsQ0FBcEM7QUFJQSxNQUFNa0IsZ0JBQWdCLEdBQUd0Qix5REFBVyxDQUFDLFlBQU07QUFDekNhLGFBQVMsQ0FBQ1gsZ0JBQWdCLENBQUNtQixPQUFqQixDQUF5QmhCLE1BQTFCLENBQVQ7QUFDRCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQztBQUlBLE1BQU1rQixpQkFBaUIsR0FBR3ZCLHlEQUFXLENBQUMsWUFBTTtBQUMxQ2MsY0FBVSxDQUFDWixnQkFBZ0IsQ0FBQ21CLE9BQWpCLENBQXlCZixPQUExQixDQUFWO0FBQ0QsR0FGb0MsRUFFbEMsRUFGa0MsQ0FBckM7QUFJQSxNQUFNa0IsZ0JBQWdCLEdBQUd4Qix5REFBVyxDQUFDLFlBQU07QUFDekNlLGFBQVMsQ0FBQ2IsZ0JBQWdCLENBQUNtQixPQUFqQixDQUF5QmQsTUFBMUIsQ0FBVDtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBSUEsTUFBTWtCLGdCQUFnQixHQUFHekIseURBQVcsQ0FBQyxZQUFNO0FBQ3pDZ0IsYUFBUyxDQUFDZCxnQkFBZ0IsQ0FBQ21CLE9BQWpCLENBQXlCYixNQUExQixDQUFUO0FBQ0QsR0FGbUMsRUFFakMsRUFGaUMsQ0FBcEM7QUFJQSxNQUFNa0IsZ0JBQWdCLEdBQUcxQix5REFBVyxDQUFDLFlBQU07QUFDekNpQixhQUFTLENBQUNmLGdCQUFnQixDQUFDbUIsT0FBakIsQ0FBeUJaLE1BQTFCLENBQVQ7QUFDRCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQztBQUlBLE1BQU1rQixrQkFBa0IsR0FBRzNCLHlEQUFXLENBQUMsWUFBTTtBQUMzQ29CLG9CQUFnQjtBQUNoQkUsb0JBQWdCO0FBQ2hCQyxxQkFBaUI7QUFDakJDLG9CQUFnQjtBQUNoQkMsb0JBQWdCO0FBQ2hCQyxvQkFBZ0I7QUFDakIsR0FQcUMsRUFPbkMsQ0FDRE4sZ0JBREMsRUFFREUsZ0JBRkMsRUFHREMsaUJBSEMsRUFJREMsZ0JBSkMsRUFLREMsZ0JBTEMsRUFNREMsZ0JBTkMsQ0FQbUMsQ0FBdEM7QUFnQkEsTUFBTUUsWUFBWSxHQUFHNUIseURBQVcsQ0FDOUIsVUFBQzZCLFNBQUQsRUFBdUI7QUFDckIzQyxhQUFTLENBQUMyQyxTQUFELENBQVQ7QUFDQTNCLG9CQUFnQixDQUFDbUIsT0FBakIsR0FBMkJTLG1GQUFrQixDQUFDO0FBQzVDL0Msb0JBQWMsRUFBZEEsY0FENEM7QUFFNUNFLFlBQU0sRUFBRTRDO0FBRm9DLEtBQUQsQ0FBN0M7QUFJQW5CLGFBQVMsQ0FBQyxVQUFDVCxJQUFELEVBQVU7QUFDbEIsVUFBTThCLEdBQUcsR0FBR0MseUVBQWUsQ0FBQztBQUMxQnpELGNBQU0sRUFBTkEsTUFEMEI7QUFFMUJDLGdCQUFRLEVBQVJBLFFBRjBCO0FBRzFCUyxjQUFNLEVBQUU0QyxTQUhrQjtBQUkxQkksZ0JBQVEsRUFBRWhDO0FBSmdCLE9BQUQsQ0FBM0I7QUFNQSxhQUFPOEIsR0FBRyxHQUFHOUIsSUFBSCxHQUFVLEVBQXBCO0FBQ0QsS0FSUSxDQUFUO0FBU0FZLGFBQVMsQ0FBQyxVQUFDWixJQUFELEVBQVU7QUFDbEIsVUFBTThCLEdBQUcsR0FBR0cseUVBQWUsQ0FBQztBQUMxQjVELGVBQU8sRUFBUEEsT0FEMEI7QUFFMUJDLGNBQU0sRUFBTkEsTUFGMEI7QUFHMUJFLGdCQUFRLEVBQVJBLFFBSDBCO0FBSTFCUSxjQUFNLEVBQUU0QyxTQUprQjtBQUsxQk0sZ0JBQVEsRUFBRWxDO0FBTGdCLE9BQUQsQ0FBM0I7QUFPQSxhQUFPOEIsR0FBRyxHQUFHOUIsSUFBSCxHQUFVLEVBQXBCO0FBQ0QsS0FUUSxDQUFUO0FBVUFhLGNBQVUsQ0FBQyxVQUFDYixJQUFELEVBQVU7QUFDbkIsVUFBTThCLEdBQUcsR0FBR0ssMkVBQWdCLENBQUM7QUFDM0I5RCxlQUFPLEVBQVBBLE9BRDJCO0FBRTNCQyxjQUFNLEVBQU5BLE1BRjJCO0FBRzNCRyxpQkFBUyxFQUFUQSxTQUgyQjtBQUkzQk8sY0FBTSxFQUFFNEMsU0FKbUI7QUFLM0JRLGlCQUFTLEVBQUVwQztBQUxnQixPQUFELENBQTVCO0FBT0EsYUFBTzhCLEdBQUcsR0FBRzlCLElBQUgsR0FBVSxFQUFwQjtBQUNELEtBVFMsQ0FBVjtBQVVBYyxhQUFTLENBQUMsVUFBQ2QsSUFBRCxFQUFVO0FBQ2xCLFVBQU04QixHQUFHLEdBQUdPLHVFQUFjLENBQUM7QUFDekJoRSxlQUFPLEVBQVBBLE9BRHlCO0FBRXpCQyxjQUFNLEVBQU5BLE1BRnlCO0FBR3pCZ0UsZUFBTyxFQUFFNUQsUUFIZ0I7QUFJekJNLGNBQU0sRUFBRTRDLFNBSmlCO0FBS3pCVyxlQUFPLEVBQUV2QztBQUxnQixPQUFELENBQTFCO0FBT0EsYUFBTzhCLEdBQUcsR0FBRzlCLElBQUgsR0FBVSxFQUFwQjtBQUNELEtBVFEsQ0FBVDtBQVVBZSxhQUFTLENBQUMsVUFBQ2YsSUFBRCxFQUFVO0FBQ2xCLFVBQU04QixHQUFHLEdBQUdPLHVFQUFjLENBQUM7QUFDekJoRSxlQUFPLEVBQVBBLE9BRHlCO0FBRXpCQyxjQUFNLEVBQU5BLE1BRnlCO0FBR3pCZ0UsZUFBTyxFQUFFM0QsUUFIZ0I7QUFJekJLLGNBQU0sRUFBRTRDLFNBSmlCO0FBS3pCVyxlQUFPLEVBQUV2QztBQUxnQixPQUFELENBQTFCO0FBT0EsYUFBTzhCLEdBQUcsR0FBRzlCLElBQUgsR0FBVSxFQUFwQjtBQUNELEtBVFEsQ0FBVDtBQVVBZ0IsYUFBUyxDQUFDLFVBQUNoQixJQUFELEVBQVU7QUFDbEIsVUFBTThCLEdBQUcsR0FBR08sdUVBQWMsQ0FBQztBQUN6QmhFLGVBQU8sRUFBUEEsT0FEeUI7QUFFekJDLGNBQU0sRUFBTkEsTUFGeUI7QUFHekJnRSxlQUFPLEVBQUUxRCxRQUhnQjtBQUl6QkksY0FBTSxFQUFFNEMsU0FKaUI7QUFLekJXLGVBQU8sRUFBRXZDO0FBTGdCLE9BQUQsQ0FBMUI7QUFPQSxhQUFPOEIsR0FBRyxHQUFHOUIsSUFBSCxHQUFVLEVBQXBCO0FBQ0QsS0FUUSxDQUFUO0FBVUFrQixXQUFPLENBQUMsVUFBQ2xCLElBQUQsRUFBVTtBQUNoQixVQUFNOEIsR0FBRyxHQUFHVSxvRUFBWSxDQUFDO0FBQ3ZCbkUsZUFBTyxFQUFQQSxPQUR1QjtBQUV2QkMsY0FBTSxFQUFOQSxNQUZ1QjtBQUd2Qk8sY0FBTSxFQUFOQSxNQUh1QjtBQUl2QkcsY0FBTSxFQUFFNEMsU0FKZTtBQUt2QmEsY0FBTSxFQUFFekM7QUFMZSxPQUFELENBQXhCO0FBT0EsYUFBTzhCLEdBQUcsR0FBRzlCLElBQUgsR0FBVSxFQUFwQjtBQUNELEtBVE0sQ0FBUDtBQVVELEdBNUU2QixFQTZFOUIsQ0FDRTNCLE9BREYsRUFFRUMsTUFGRixFQUdFQyxRQUhGLEVBSUVDLFFBSkYsRUFLRUMsU0FMRixFQU1FQyxRQU5GLEVBT0VDLFFBUEYsRUFRRUMsUUFSRixFQVNFQyxNQVRGLEVBVUVDLGNBVkYsQ0E3RThCLENBQWhDO0FBMkZBOztBQXBMaUMsb0JBcUxQQyxzREFBUSxDQUFDLEtBQUQsQ0FyTEQ7QUFBQSxNQXFMMUIyRCxLQXJMMEI7QUFBQSxNQXFMbkJDLFFBckxtQjs7QUFzTGpDLE1BQU1DLFdBQVcsR0FBRzdDLHlEQUFXLENBQUMsWUFBTTtBQUNwQzRDLFlBQVEsQ0FBQyxVQUFDM0MsSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBUjtBQUNELEdBRjhCLEVBRTVCLEVBRjRCLENBQS9COztBQXRMaUMsb0JBeUxLakIsc0RBQVEsQ0FBQyxLQUFELENBekxiO0FBQUEsTUF5TDFCOEQsV0F6TDBCO0FBQUEsTUF5TGJDLGNBekxhOztBQTBMakMsTUFBTUMsaUJBQWlCLEdBQUdoRCx5REFBVyxDQUFDLFlBQU07QUFDMUMrQyxrQkFBYyxDQUFDLFVBQUM5QyxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFkO0FBQ0QsR0FGb0MsRUFFbEMsRUFGa0MsQ0FBckM7QUFJQTs7QUE5TGlDLG9CQStMWGpCLHNEQUFRLENBQUMsS0FBRCxDQS9MRztBQUFBLE1BK0wxQmlFLEdBL0wwQjtBQUFBLE1BK0xyQkMsTUEvTHFCOztBQWdNakMsTUFBTUMsU0FBUyxHQUFHbkQseURBQVcsQ0FBQyxZQUFNO0FBQ2xDa0QsVUFBTSxDQUFDLFVBQUNqRCxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFOO0FBQ0QsR0FGNEIsRUFFMUIsRUFGMEIsQ0FBN0I7O0FBaE1pQyxvQkFtTURqQixzREFBUSxDQUFDLElBQUQsQ0FuTVA7QUFBQSxNQW1NMUJvRSxRQW5NMEI7QUFBQSxNQW1NaEJDLFdBbk1nQjs7QUFvTWpDLE1BQU1DLGNBQWMsR0FBR3RELHlEQUFXLENBQUMsWUFBTTtBQUN2Q3FELGVBQVcsQ0FBQyxVQUFDcEQsSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBWDtBQUNELEdBRmlDLEVBRS9CLEVBRitCLENBQWxDO0FBSUE7O0FBeE1pQyxvQkF5TU9qQixzREFBUSxDQUFDLEtBQUQsQ0F6TWY7QUFBQSxNQXlNMUJ1RSxZQXpNMEI7QUFBQSxNQXlNWkMsZUF6TVk7O0FBME1qQyxNQUFNQyxVQUFVLEdBQUd6RCx5REFBVyxDQUFDLFlBQU07QUFDbkN3RCxtQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNELEdBRjZCLEVBRTNCLEVBRjJCLENBQTlCO0FBR0EsTUFBTUUsV0FBVyxHQUFHMUQseURBQVcsQ0FBQyxZQUFNO0FBQ3BDd0QsbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDRCxHQUY4QixFQUU1QixFQUY0QixDQUEvQjtBQUlBLE1BQU1HLEVBQUUsR0FBR0MseUVBQWMsQ0FBQywwQkFBRCxDQUF6QjtBQUVBLFNBQU87QUFDTDtBQUNBM0UsVUFBTSxFQUFOQSxNQUZLO0FBR0wyQyxnQkFBWSxFQUFaQSxZQUhLO0FBSUx6QyxVQUFNLEVBQU5BLE1BSks7QUFLTEMsYUFBUyxFQUFUQSxTQUxLO0FBTUxDLE1BQUUsRUFBRkEsRUFOSztBQU9MQyxTQUFLLEVBQUxBLEtBUEs7QUFRTEMsU0FBSyxFQUFMQSxLQVJLO0FBU0xDLFlBQVEsRUFBUkEsUUFUSztBQVVMQyxnQkFBWSxFQUFaQSxZQVZLO0FBV0xDLG1CQUFlLEVBQWZBLGVBWEs7QUFZTEMsWUFBUSxFQUFSQSxRQVpLO0FBYUxDLGVBQVcsRUFBWEEsV0FiSztBQWNMQyxXQUFPLEVBQVBBLE9BZEs7QUFlTEUsaUJBQWEsRUFBYkEsYUFmSztBQWdCTDRDLFNBQUssRUFBTEEsS0FoQks7QUFpQkxFLGVBQVcsRUFBWEEsV0FqQks7QUFrQkxDLGVBQVcsRUFBWEEsV0FsQks7QUFtQkxFLHFCQUFpQixFQUFqQkEsaUJBbkJLOztBQW9CTDtBQUNBNUMsVUFBTSxFQUFOQSxNQXJCSztBQXNCTE0sYUFBUyxFQUFUQSxTQXRCSztBQXVCTEMsVUFBTSxFQUFOQSxNQXZCSztBQXdCTEMsYUFBUyxFQUFUQSxTQXhCSztBQXlCTFAsVUFBTSxFQUFOQSxNQXpCSztBQTBCTFEsYUFBUyxFQUFUQSxTQTFCSztBQTJCTFAsV0FBTyxFQUFQQSxPQTNCSztBQTRCTFEsY0FBVSxFQUFWQSxVQTVCSztBQTZCTFAsVUFBTSxFQUFOQSxNQTdCSztBQThCTFEsYUFBUyxFQUFUQSxTQTlCSztBQStCTFAsVUFBTSxFQUFOQSxNQS9CSztBQWdDTFEsYUFBUyxFQUFUQSxTQWhDSztBQWlDTFAsVUFBTSxFQUFOQSxNQWpDSztBQWtDTFEsYUFBUyxFQUFUQSxTQWxDSztBQW1DTEMsUUFBSSxFQUFKQSxJQW5DSztBQW9DTEMsV0FBTyxFQUFQQSxPQXBDSztBQXFDTEMsb0JBQWdCLEVBQWhCQSxnQkFyQ0s7QUFzQ0xFLG9CQUFnQixFQUFoQkEsZ0JBdENLO0FBdUNMQyxxQkFBaUIsRUFBakJBLGlCQXZDSztBQXdDTEMsb0JBQWdCLEVBQWhCQSxnQkF4Q0s7QUF5Q0xDLG9CQUFnQixFQUFoQkEsZ0JBekNLO0FBMENMQyxvQkFBZ0IsRUFBaEJBLGdCQTFDSztBQTJDTEMsc0JBQWtCLEVBQWxCQSxrQkEzQ0s7O0FBNENMO0FBQ0FzQixPQUFHLEVBQUhBLEdBN0NLO0FBOENMRSxhQUFTLEVBQVRBLFNBOUNLO0FBK0NMQyxZQUFRLEVBQVJBLFFBL0NLO0FBZ0RMRSxrQkFBYyxFQUFkQSxjQWhESzs7QUFpREw7QUFDQUssTUFBRSxFQUFGQSxFQWxESztBQW1ETEosZ0JBQVksRUFBWkEsWUFuREs7QUFvRExFLGNBQVUsRUFBVkEsVUFwREs7QUFxRExDLGVBQVcsRUFBWEE7QUFyREssR0FBUDtBQXVERDs7R0ExUXVCdEYsUTtVQVlsQkMsd0QsRUFxTU91RixpRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLmM0NDJiYTk1Y2JlNGQ5MTk2MDcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGZWhEQiB9IGZyb20gJ0AvYXBwL3BhZ2UvRkVIREInO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFNraWxsSWRzIH0gZnJvbSAnQC9hcHAvdXRpbHMvZGVmYXVsdC1za2lsbCc7XG5pbXBvcnQgeyBoYXNXZWFwb25PcHRpb24gfSBmcm9tICdAL2FwcC91dGlscy93ZWFwb24nO1xuaW1wb3J0IHsgaGFzQXNzaXN0T3B0aW9uIH0gZnJvbSAnQC9hcHAvdXRpbHMvYXNzaXN0JztcbmltcG9ydCB7IGhhc1NraWxsT3B0aW9uIH0gZnJvbSAnQC9hcHAvdXRpbHMvc2tpbGwnO1xuaW1wb3J0IHsgaGFzU3BlY2lhbE9wdGlvbiB9IGZyb20gJ0AvYXBwL3V0aWxzL3NwZWNpYWwnO1xuaW1wb3J0IHsgaGFzU2VhbE9wdG9uIH0gZnJvbSAnQC9hcHAvdXRpbHMvc2VhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUhvb2tzKCkge1xuICBjb25zdCB7XG4gICAgcnVsZXNEQixcbiAgICBoZXJvREIsXG4gICAgd2VhcG9uREIsXG4gICAgYXNzaXN0REIsXG4gICAgc3BlY2lhbERCLFxuICAgIHNraWxsQURCLFxuICAgIHNraWxsQkRCLFxuICAgIHNraWxsQ0RCLFxuICAgIHNlYWxEQixcbiAgICBkZWZhdWx0U2tpbGxEQixcbiAgfSA9IHVzZUZlaERCKCk7XG4gIC8qKiBoZXJvICovXG4gIGNvbnN0IFtoZXJvSWQsIHNldEhlcm9JZF0gPSB1c2VTdGF0ZSgnRmVoJyk7XG4gIGNvbnN0IFtyYXJpdHksIHNldFJhcml0eV0gPSB1c2VTdGF0ZTw1IHwgND4oNSk7XG4gIGNvbnN0IFtpdiwgc2V0SVZdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWVyZ2UsIHNldE1lcmdlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZHJhZ29uZmxvd2VyLCBzZXREcmFnb25mbG93ZXJdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtibGVzc2luZywgc2V0Qmxlc3NpbmddID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc3VwcG9ydCwgc2V0U3VwcG9ydF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZVN1cHBvcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3VwcG9ydCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIC8qKiBza2lsbHMgKi9cbiAgY29uc3QgZGVmYXVsdFNraWxsc1JlZiA9IHVzZVJlZjx7XG4gICAgd2VhcG9uOiBzdHJpbmc7XG4gICAgYXNzaXN0OiBzdHJpbmc7XG4gICAgc3BlY2lhbDogc3RyaW5nO1xuICAgIHNraWxsQTogc3RyaW5nO1xuICAgIHNraWxsQjogc3RyaW5nO1xuICAgIHNraWxsQzogc3RyaW5nO1xuICB9Pih7XG4gICAgd2VhcG9uOiAnJyxcbiAgICBhc3Npc3Q6ICcnLFxuICAgIHNwZWNpYWw6ICcnLFxuICAgIHNraWxsQTogJycsXG4gICAgc2tpbGxCOiAnJyxcbiAgICBza2lsbEM6ICcnLFxuICB9KTtcbiAgY29uc3QgW3dlYXBvbiwgc2V0V2VhcG9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JlZmluZSwgc2V0UmVmaW5lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Fzc2lzdCwgc2V0QXNzaXN0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NwZWNpYWwsIHNldFNwZWNpYWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2tpbGxBLCBzZXRTa2lsbEFdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2tpbGxCLCBzZXRTa2lsbEJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2tpbGxDLCBzZXRTa2lsbENdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VhbCwgc2V0U2VhbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3Qgc2V0RGVmYXVsdFdlYXBvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRXZWFwb24oZGVmYXVsdFNraWxsc1JlZi5jdXJyZW50LndlYXBvbik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXREZWZhdWx0QXNzaXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEFzc2lzdChkZWZhdWx0U2tpbGxzUmVmLmN1cnJlbnQuYXNzaXN0KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldERlZmF1bHRTcGVjaWFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNwZWNpYWwoZGVmYXVsdFNraWxsc1JlZi5jdXJyZW50LnNwZWNpYWwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0RGVmYXVsdFNraWxsQSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTa2lsbEEoZGVmYXVsdFNraWxsc1JlZi5jdXJyZW50LnNraWxsQSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXREZWZhdWx0U2tpbGxCID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNraWxsQihkZWZhdWx0U2tpbGxzUmVmLmN1cnJlbnQuc2tpbGxCKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldERlZmF1bHRTa2lsbEMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2tpbGxDKGRlZmF1bHRTa2lsbHNSZWYuY3VycmVudC5za2lsbEMpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0QWxsU2tpbGxEZWZhdWx0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldERlZmF1bHRXZWFwb24oKTtcbiAgICBzZXREZWZhdWx0QXNzaXN0KCk7XG4gICAgc2V0RGVmYXVsdFNwZWNpYWwoKTtcbiAgICBzZXREZWZhdWx0U2tpbGxBKCk7XG4gICAgc2V0RGVmYXVsdFNraWxsQigpO1xuICAgIHNldERlZmF1bHRTa2lsbEMoKTtcbiAgfSwgW1xuICAgIHNldERlZmF1bHRXZWFwb24sXG4gICAgc2V0RGVmYXVsdEFzc2lzdCxcbiAgICBzZXREZWZhdWx0U3BlY2lhbCxcbiAgICBzZXREZWZhdWx0U2tpbGxBLFxuICAgIHNldERlZmF1bHRTa2lsbEIsXG4gICAgc2V0RGVmYXVsdFNraWxsQyxcbiAgXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VIZXJvID0gdXNlQ2FsbGJhY2soXG4gICAgKG5ld0hlcm9JZDogc3RyaW5nKSA9PiB7XG4gICAgICBzZXRIZXJvSWQobmV3SGVyb0lkKTtcbiAgICAgIGRlZmF1bHRTa2lsbHNSZWYuY3VycmVudCA9IGdldERlZmF1bHRTa2lsbElkcyh7XG4gICAgICAgIGRlZmF1bHRTa2lsbERCLFxuICAgICAgICBoZXJvSWQ6IG5ld0hlcm9JZCxcbiAgICAgIH0pO1xuICAgICAgc2V0V2VhcG9uKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcyA9IGhhc1dlYXBvbk9wdGlvbih7XG4gICAgICAgICAgaGVyb0RCLFxuICAgICAgICAgIHdlYXBvbkRCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHdlYXBvbklkOiBwcmV2LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhhcyA/IHByZXYgOiAnJztcbiAgICAgIH0pO1xuICAgICAgc2V0QXNzaXN0KChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcyA9IGhhc0Fzc2lzdE9wdGlvbih7XG4gICAgICAgICAgcnVsZXNEQixcbiAgICAgICAgICBoZXJvREIsXG4gICAgICAgICAgYXNzaXN0REIsXG4gICAgICAgICAgaGVyb0lkOiBuZXdIZXJvSWQsXG4gICAgICAgICAgYXNzaXN0SWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRTcGVjaWFsKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcyA9IGhhc1NwZWNpYWxPcHRpb24oe1xuICAgICAgICAgIHJ1bGVzREIsXG4gICAgICAgICAgaGVyb0RCLFxuICAgICAgICAgIHNwZWNpYWxEQixcbiAgICAgICAgICBoZXJvSWQ6IG5ld0hlcm9JZCxcbiAgICAgICAgICBzcGVjaWFsSWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRTa2lsbEEoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzU2tpbGxPcHRpb24oe1xuICAgICAgICAgIHJ1bGVzREIsXG4gICAgICAgICAgaGVyb0RCLFxuICAgICAgICAgIHNraWxsREI6IHNraWxsQURCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHNraWxsSWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRTa2lsbEIoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzU2tpbGxPcHRpb24oe1xuICAgICAgICAgIHJ1bGVzREIsXG4gICAgICAgICAgaGVyb0RCLFxuICAgICAgICAgIHNraWxsREI6IHNraWxsQkRCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHNraWxsSWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRTa2lsbEMoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzU2tpbGxPcHRpb24oe1xuICAgICAgICAgIHJ1bGVzREIsXG4gICAgICAgICAgaGVyb0RCLFxuICAgICAgICAgIHNraWxsREI6IHNraWxsQ0RCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHNraWxsSWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRTZWFsKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcyA9IGhhc1NlYWxPcHRvbih7XG4gICAgICAgICAgcnVsZXNEQixcbiAgICAgICAgICBoZXJvREIsXG4gICAgICAgICAgc2VhbERCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHNlYWxJZDogcHJldixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoYXMgPyBwcmV2IDogJyc7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtcbiAgICAgIHJ1bGVzREIsXG4gICAgICBoZXJvREIsXG4gICAgICB3ZWFwb25EQixcbiAgICAgIGFzc2lzdERCLFxuICAgICAgc3BlY2lhbERCLFxuICAgICAgc2tpbGxBREIsXG4gICAgICBza2lsbEJEQixcbiAgICAgIHNraWxsQ0RCLFxuICAgICAgc2VhbERCLFxuICAgICAgZGVmYXVsdFNraWxsREIsXG4gICAgXVxuICApO1xuXG4gIC8qKiBib251cyAqL1xuICBjb25zdCBbYXJlbmEsIHNldEFyZW5hXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlQXJlbmEgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QXJlbmEoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBbcmVzcGxlbmRlbnQsIHNldFJlc3BsZW5kZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlUmVzcGxlbmRlbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0UmVzcGxlbmRlbnQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIC8qKiBwdXJlIHFvcyB1aSAqL1xuICBjb25zdCBbbHYxLCBzZXRMVjFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVMdjEgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TFYxKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3QgW21heFNraWxsLCBzZXRNYXhTa2lsbF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgdG9nZ2xlTWF4U2tpbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TWF4U2tpbGwoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIC8qKiBlZGl0b3IgKi9cbiAgY29uc3QgW2VkaXRvcklzT3Blbiwgc2V0RWRpdG9ySXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb3BlbkVkaXRvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFZGl0b3JJc09wZW4odHJ1ZSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgY2xvc2VFZGl0b3IgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0RWRpdG9ySXNPcGVuKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGJnID0gdXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvc3VtbW9uLXN0b25lLmpwZycpO1xuXG4gIHJldHVybiB7XG4gICAgLyoqIGhlcm8gKi9cbiAgICBoZXJvSWQsXG4gICAgb25DaGFuZ2VIZXJvLFxuICAgIHJhcml0eSxcbiAgICBzZXRSYXJpdHksXG4gICAgaXYsXG4gICAgc2V0SVYsXG4gICAgbWVyZ2UsXG4gICAgc2V0TWVyZ2UsXG4gICAgZHJhZ29uZmxvd2VyLFxuICAgIHNldERyYWdvbmZsb3dlcixcbiAgICBibGVzc2luZyxcbiAgICBzZXRCbGVzc2luZyxcbiAgICBzdXBwb3J0LFxuICAgIHRvZ2dsZVN1cHBvcnQsXG4gICAgYXJlbmEsXG4gICAgdG9nZ2xlQXJlbmEsXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgdG9nZ2xlUmVzcGxlbmRlbnQsXG4gICAgLyoqIHNraWxscyAqL1xuICAgIHdlYXBvbixcbiAgICBzZXRXZWFwb24sXG4gICAgcmVmaW5lLFxuICAgIHNldFJlZmluZSxcbiAgICBhc3Npc3QsXG4gICAgc2V0QXNzaXN0LFxuICAgIHNwZWNpYWwsXG4gICAgc2V0U3BlY2lhbCxcbiAgICBza2lsbEEsXG4gICAgc2V0U2tpbGxBLFxuICAgIHNraWxsQixcbiAgICBzZXRTa2lsbEIsXG4gICAgc2tpbGxDLFxuICAgIHNldFNraWxsQyxcbiAgICBzZWFsLFxuICAgIHNldFNlYWwsXG4gICAgc2V0RGVmYXVsdFdlYXBvbixcbiAgICBzZXREZWZhdWx0QXNzaXN0LFxuICAgIHNldERlZmF1bHRTcGVjaWFsLFxuICAgIHNldERlZmF1bHRTa2lsbEEsXG4gICAgc2V0RGVmYXVsdFNraWxsQixcbiAgICBzZXREZWZhdWx0U2tpbGxDLFxuICAgIHNldEFsbFNraWxsRGVmYXVsdCxcbiAgICAvKiogcHVyZSBxb3MgdWkgKi9cbiAgICBsdjEsXG4gICAgdG9nZ2xlTHYxLFxuICAgIG1heFNraWxsLFxuICAgIHRvZ2dsZU1heFNraWxsLFxuICAgIC8qKiBlZGl0b3IgKi9cbiAgICBiZyxcbiAgICBlZGl0b3JJc09wZW4sXG4gICAgb3BlbkVkaXRvcixcbiAgICBjbG9zZUVkaXRvcixcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=