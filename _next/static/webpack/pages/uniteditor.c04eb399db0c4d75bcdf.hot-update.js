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
  var weaponRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');

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
  weaponRef.current = weapon;
  var onChangeHero = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (newHeroId) {
    setHeroId(newHeroId);
    defaultSkillsRef.current = Object(_app_utils_default_skill__WEBPACK_IMPORTED_MODULE_3__["getDefaultSkillIds"])({
      defaultSkillDB: defaultSkillDB,
      heroId: newHeroId
    });
    setWeapon(function () {
      var has = Object(_app_utils_weapon__WEBPACK_IMPORTED_MODULE_4__["hasWeaponOption"])({
        heroDB: heroDB,
        weaponDB: weaponDB,
        heroId: newHeroId,
        weaponId: weaponRef.current
      });
      return has ? weaponRef.current : '';
    });
    setRefine(function (prev) {
      var has = Object(_app_utils_weapon__WEBPACK_IMPORTED_MODULE_4__["hasRefineOption"])({
        heroDB: heroDB,
        weaponDB: weaponDB,
        heroId: newHeroId,
        weaponId: weaponRef.current,
        refineId: prev
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

_s(useHooks, "pnYDfddX2WsInU7I6Hmc2B8D4zk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UvVW5pdEVkaXRvci9ob29rcy50c3giXSwibmFtZXMiOlsidXNlSG9va3MiLCJ1c2VGZWhEQiIsInJ1bGVzREIiLCJoZXJvREIiLCJ3ZWFwb25EQiIsImFzc2lzdERCIiwic3BlY2lhbERCIiwic2tpbGxBREIiLCJza2lsbEJEQiIsInNraWxsQ0RCIiwic2VhbERCIiwiZGVmYXVsdFNraWxsREIiLCJ1c2VTdGF0ZSIsImhlcm9JZCIsInNldEhlcm9JZCIsInJhcml0eSIsInNldFJhcml0eSIsIml2Iiwic2V0SVYiLCJtZXJnZSIsInNldE1lcmdlIiwiZHJhZ29uZmxvd2VyIiwic2V0RHJhZ29uZmxvd2VyIiwiYmxlc3NpbmciLCJzZXRCbGVzc2luZyIsInN1cHBvcnQiLCJzZXRTdXBwb3J0IiwidG9nZ2xlU3VwcG9ydCIsInVzZUNhbGxiYWNrIiwicHJldiIsImRlZmF1bHRTa2lsbHNSZWYiLCJ1c2VSZWYiLCJ3ZWFwb24iLCJhc3Npc3QiLCJzcGVjaWFsIiwic2tpbGxBIiwic2tpbGxCIiwic2tpbGxDIiwid2VhcG9uUmVmIiwic2V0V2VhcG9uIiwicmVmaW5lIiwic2V0UmVmaW5lIiwic2V0QXNzaXN0Iiwic2V0U3BlY2lhbCIsInNldFNraWxsQSIsInNldFNraWxsQiIsInNldFNraWxsQyIsInNlYWwiLCJzZXRTZWFsIiwic2V0RGVmYXVsdFdlYXBvbiIsImN1cnJlbnQiLCJzZXREZWZhdWx0QXNzaXN0Iiwic2V0RGVmYXVsdFNwZWNpYWwiLCJzZXREZWZhdWx0U2tpbGxBIiwic2V0RGVmYXVsdFNraWxsQiIsInNldERlZmF1bHRTa2lsbEMiLCJzZXRBbGxTa2lsbERlZmF1bHQiLCJvbkNoYW5nZUhlcm8iLCJuZXdIZXJvSWQiLCJnZXREZWZhdWx0U2tpbGxJZHMiLCJoYXMiLCJoYXNXZWFwb25PcHRpb24iLCJ3ZWFwb25JZCIsImhhc1JlZmluZU9wdGlvbiIsInJlZmluZUlkIiwiaGFzQXNzaXN0T3B0aW9uIiwiYXNzaXN0SWQiLCJoYXNTcGVjaWFsT3B0aW9uIiwic3BlY2lhbElkIiwiaGFzU2tpbGxPcHRpb24iLCJza2lsbERCIiwic2tpbGxJZCIsImhhc1NlYWxPcHRvbiIsInNlYWxJZCIsImFyZW5hIiwic2V0QXJlbmEiLCJ0b2dnbGVBcmVuYSIsInJlc3BsZW5kZW50Iiwic2V0UmVzcGxlbmRlbnQiLCJ0b2dnbGVSZXNwbGVuZGVudCIsImx2MSIsInNldExWMSIsInRvZ2dsZUx2MSIsIm1heFNraWxsIiwic2V0TWF4U2tpbGwiLCJ0b2dnbGVNYXhTa2lsbCIsImVkaXRvcklzT3BlbiIsInNldEVkaXRvcklzT3BlbiIsIm9wZW5FZGl0b3IiLCJjbG9zZUVkaXRvciIsImJnIiwidXNlQmFzZVBhdGhVcmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFZN0JDLGdFQUFRLEVBWnFCO0FBQUEsTUFFL0JDLE9BRitCLGFBRS9CQSxPQUYrQjtBQUFBLE1BRy9CQyxNQUgrQixhQUcvQkEsTUFIK0I7QUFBQSxNQUkvQkMsUUFKK0IsYUFJL0JBLFFBSitCO0FBQUEsTUFLL0JDLFFBTCtCLGFBSy9CQSxRQUwrQjtBQUFBLE1BTS9CQyxTQU4rQixhQU0vQkEsU0FOK0I7QUFBQSxNQU8vQkMsUUFQK0IsYUFPL0JBLFFBUCtCO0FBQUEsTUFRL0JDLFFBUitCLGFBUS9CQSxRQVIrQjtBQUFBLE1BUy9CQyxRQVQrQixhQVMvQkEsUUFUK0I7QUFBQSxNQVUvQkMsTUFWK0IsYUFVL0JBLE1BVitCO0FBQUEsTUFXL0JDLGNBWCtCLGFBVy9CQSxjQVgrQjtBQWFqQzs7O0FBYmlDLGtCQWNMQyxzREFBUSxDQUFDLEtBQUQsQ0FkSDtBQUFBLE1BYzFCQyxNQWQwQjtBQUFBLE1BY2xCQyxTQWRrQjs7QUFBQSxtQkFlTEYsc0RBQVEsQ0FBUSxDQUFSLENBZkg7QUFBQSxNQWUxQkcsTUFmMEI7QUFBQSxNQWVsQkMsU0Fma0I7O0FBQUEsbUJBZ0JiSixzREFBUSxDQUFDLEVBQUQsQ0FoQks7QUFBQSxNQWdCMUJLLEVBaEIwQjtBQUFBLE1BZ0J0QkMsS0FoQnNCOztBQUFBLG1CQWlCUE4sc0RBQVEsQ0FBQyxDQUFELENBakJEO0FBQUEsTUFpQjFCTyxLQWpCMEI7QUFBQSxNQWlCbkJDLFFBakJtQjs7QUFBQSxtQkFrQk9SLHNEQUFRLENBQUMsQ0FBRCxDQWxCZjtBQUFBLE1Ba0IxQlMsWUFsQjBCO0FBQUEsTUFrQlpDLGVBbEJZOztBQUFBLG1CQW1CRFYsc0RBQVEsQ0FBQyxFQUFELENBbkJQO0FBQUEsTUFtQjFCVyxRQW5CMEI7QUFBQSxNQW1CaEJDLFdBbkJnQjs7QUFBQSxtQkFvQkhaLHNEQUFRLENBQUMsS0FBRCxDQXBCTDtBQUFBLE1Bb0IxQmEsT0FwQjBCO0FBQUEsTUFvQmpCQyxVQXBCaUI7O0FBcUJqQyxNQUFNQyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0Q0YsY0FBVSxDQUFDLFVBQUNHLElBQUQ7QUFBQSxhQUFVLENBQUNBLElBQVg7QUFBQSxLQUFELENBQVY7QUFDRCxHQUZnQyxFQUU5QixFQUY4QixDQUFqQztBQUdBOztBQUNBLE1BQU1DLGdCQUFnQixHQUFHQyxvREFBTSxDQU81QjtBQUNEQyxVQUFNLEVBQUUsRUFEUDtBQUVEQyxVQUFNLEVBQUUsRUFGUDtBQUdEQyxXQUFPLEVBQUUsRUFIUjtBQUlEQyxVQUFNLEVBQUUsRUFKUDtBQUtEQyxVQUFNLEVBQUUsRUFMUDtBQU1EQyxVQUFNLEVBQUU7QUFOUCxHQVA0QixDQUEvQjtBQWVBLE1BQU1DLFNBQVMsR0FBR1Asb0RBQU0sQ0FBQyxFQUFELENBQXhCOztBQXhDaUMsbUJBeUNMbkIsc0RBQVEsQ0FBQyxFQUFELENBekNIO0FBQUEsTUF5QzFCb0IsTUF6QzBCO0FBQUEsTUF5Q2xCTyxTQXpDa0I7O0FBQUEsbUJBMENMM0Isc0RBQVEsQ0FBQyxFQUFELENBMUNIO0FBQUEsTUEwQzFCNEIsTUExQzBCO0FBQUEsTUEwQ2xCQyxTQTFDa0I7O0FBQUEsb0JBMkNMN0Isc0RBQVEsQ0FBQyxFQUFELENBM0NIO0FBQUEsTUEyQzFCcUIsTUEzQzBCO0FBQUEsTUEyQ2xCUyxTQTNDa0I7O0FBQUEsb0JBNENIOUIsc0RBQVEsQ0FBQyxFQUFELENBNUNMO0FBQUEsTUE0QzFCc0IsT0E1QzBCO0FBQUEsTUE0Q2pCUyxVQTVDaUI7O0FBQUEsb0JBNkNML0Isc0RBQVEsQ0FBQyxFQUFELENBN0NIO0FBQUEsTUE2QzFCdUIsTUE3QzBCO0FBQUEsTUE2Q2xCUyxTQTdDa0I7O0FBQUEsb0JBOENMaEMsc0RBQVEsQ0FBQyxFQUFELENBOUNIO0FBQUEsTUE4QzFCd0IsTUE5QzBCO0FBQUEsTUE4Q2xCUyxTQTlDa0I7O0FBQUEsb0JBK0NMakMsc0RBQVEsQ0FBQyxFQUFELENBL0NIO0FBQUEsTUErQzFCeUIsTUEvQzBCO0FBQUEsTUErQ2xCUyxTQS9Da0I7O0FBQUEsb0JBZ0RUbEMsc0RBQVEsQ0FBQyxFQUFELENBaERDO0FBQUEsTUFnRDFCbUMsSUFoRDBCO0FBQUEsTUFnRHBCQyxPQWhEb0I7O0FBa0RqQyxNQUFNQyxnQkFBZ0IsR0FBR3JCLHlEQUFXLENBQUMsWUFBTTtBQUN6Q1csYUFBUyxDQUFDVCxnQkFBZ0IsQ0FBQ29CLE9BQWpCLENBQXlCbEIsTUFBMUIsQ0FBVDtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBSUEsTUFBTW1CLGdCQUFnQixHQUFHdkIseURBQVcsQ0FBQyxZQUFNO0FBQ3pDYyxhQUFTLENBQUNaLGdCQUFnQixDQUFDb0IsT0FBakIsQ0FBeUJqQixNQUExQixDQUFUO0FBQ0QsR0FGbUMsRUFFakMsRUFGaUMsQ0FBcEM7QUFJQSxNQUFNbUIsaUJBQWlCLEdBQUd4Qix5REFBVyxDQUFDLFlBQU07QUFDMUNlLGNBQVUsQ0FBQ2IsZ0JBQWdCLENBQUNvQixPQUFqQixDQUF5QmhCLE9BQTFCLENBQVY7QUFDRCxHQUZvQyxFQUVsQyxFQUZrQyxDQUFyQztBQUlBLE1BQU1tQixnQkFBZ0IsR0FBR3pCLHlEQUFXLENBQUMsWUFBTTtBQUN6Q2dCLGFBQVMsQ0FBQ2QsZ0JBQWdCLENBQUNvQixPQUFqQixDQUF5QmYsTUFBMUIsQ0FBVDtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBSUEsTUFBTW1CLGdCQUFnQixHQUFHMUIseURBQVcsQ0FBQyxZQUFNO0FBQ3pDaUIsYUFBUyxDQUFDZixnQkFBZ0IsQ0FBQ29CLE9BQWpCLENBQXlCZCxNQUExQixDQUFUO0FBQ0QsR0FGbUMsRUFFakMsRUFGaUMsQ0FBcEM7QUFJQSxNQUFNbUIsZ0JBQWdCLEdBQUczQix5REFBVyxDQUFDLFlBQU07QUFDekNrQixhQUFTLENBQUNoQixnQkFBZ0IsQ0FBQ29CLE9BQWpCLENBQXlCYixNQUExQixDQUFUO0FBQ0QsR0FGbUMsRUFFakMsRUFGaUMsQ0FBcEM7QUFJQSxNQUFNbUIsa0JBQWtCLEdBQUc1Qix5REFBVyxDQUFDLFlBQU07QUFDM0NxQixvQkFBZ0I7QUFDaEJFLG9CQUFnQjtBQUNoQkMscUJBQWlCO0FBQ2pCQyxvQkFBZ0I7QUFDaEJDLG9CQUFnQjtBQUNoQkMsb0JBQWdCO0FBQ2pCLEdBUHFDLEVBT25DLENBQ0ROLGdCQURDLEVBRURFLGdCQUZDLEVBR0RDLGlCQUhDLEVBSURDLGdCQUpDLEVBS0RDLGdCQUxDLEVBTURDLGdCQU5DLENBUG1DLENBQXRDO0FBZ0JBakIsV0FBUyxDQUFDWSxPQUFWLEdBQW9CbEIsTUFBcEI7QUFFQSxNQUFNeUIsWUFBWSxHQUFHN0IseURBQVcsQ0FDOUIsVUFBQzhCLFNBQUQsRUFBdUI7QUFDckI1QyxhQUFTLENBQUM0QyxTQUFELENBQVQ7QUFDQTVCLG9CQUFnQixDQUFDb0IsT0FBakIsR0FBMkJTLG1GQUFrQixDQUFDO0FBQzVDaEQsb0JBQWMsRUFBZEEsY0FENEM7QUFFNUNFLFlBQU0sRUFBRTZDO0FBRm9DLEtBQUQsQ0FBN0M7QUFJQW5CLGFBQVMsQ0FBQyxZQUFNO0FBQ2QsVUFBTXFCLEdBQUcsR0FBR0MseUVBQWUsQ0FBQztBQUMxQjFELGNBQU0sRUFBTkEsTUFEMEI7QUFFMUJDLGdCQUFRLEVBQVJBLFFBRjBCO0FBRzFCUyxjQUFNLEVBQUU2QyxTQUhrQjtBQUkxQkksZ0JBQVEsRUFBRXhCLFNBQVMsQ0FBQ1k7QUFKTSxPQUFELENBQTNCO0FBTUEsYUFBT1UsR0FBRyxHQUFHdEIsU0FBUyxDQUFDWSxPQUFiLEdBQXVCLEVBQWpDO0FBQ0QsS0FSUSxDQUFUO0FBU0FULGFBQVMsQ0FBQyxVQUFDWixJQUFELEVBQVU7QUFDbEIsVUFBTStCLEdBQUcsR0FBR0cseUVBQWUsQ0FBQztBQUMxQjVELGNBQU0sRUFBTkEsTUFEMEI7QUFFMUJDLGdCQUFRLEVBQVJBLFFBRjBCO0FBRzFCUyxjQUFNLEVBQUU2QyxTQUhrQjtBQUkxQkksZ0JBQVEsRUFBRXhCLFNBQVMsQ0FBQ1ksT0FKTTtBQUsxQmMsZ0JBQVEsRUFBRW5DO0FBTGdCLE9BQUQsQ0FBM0I7QUFPQSxhQUFPK0IsR0FBRyxHQUFHL0IsSUFBSCxHQUFVLEVBQXBCO0FBQ0QsS0FUUSxDQUFUO0FBVUFhLGFBQVMsQ0FBQyxVQUFDYixJQUFELEVBQVU7QUFDbEIsVUFBTStCLEdBQUcsR0FBR0sseUVBQWUsQ0FBQztBQUMxQi9ELGVBQU8sRUFBUEEsT0FEMEI7QUFFMUJDLGNBQU0sRUFBTkEsTUFGMEI7QUFHMUJFLGdCQUFRLEVBQVJBLFFBSDBCO0FBSTFCUSxjQUFNLEVBQUU2QyxTQUprQjtBQUsxQlEsZ0JBQVEsRUFBRXJDO0FBTGdCLE9BQUQsQ0FBM0I7QUFPQSxhQUFPK0IsR0FBRyxHQUFHL0IsSUFBSCxHQUFVLEVBQXBCO0FBQ0QsS0FUUSxDQUFUO0FBVUFjLGNBQVUsQ0FBQyxVQUFDZCxJQUFELEVBQVU7QUFDbkIsVUFBTStCLEdBQUcsR0FBR08sMkVBQWdCLENBQUM7QUFDM0JqRSxlQUFPLEVBQVBBLE9BRDJCO0FBRTNCQyxjQUFNLEVBQU5BLE1BRjJCO0FBRzNCRyxpQkFBUyxFQUFUQSxTQUgyQjtBQUkzQk8sY0FBTSxFQUFFNkMsU0FKbUI7QUFLM0JVLGlCQUFTLEVBQUV2QztBQUxnQixPQUFELENBQTVCO0FBT0EsYUFBTytCLEdBQUcsR0FBRy9CLElBQUgsR0FBVSxFQUFwQjtBQUNELEtBVFMsQ0FBVjtBQVVBZSxhQUFTLENBQUMsVUFBQ2YsSUFBRCxFQUFVO0FBQ2xCLFVBQU0rQixHQUFHLEdBQUdTLHVFQUFjLENBQUM7QUFDekJuRSxlQUFPLEVBQVBBLE9BRHlCO0FBRXpCQyxjQUFNLEVBQU5BLE1BRnlCO0FBR3pCbUUsZUFBTyxFQUFFL0QsUUFIZ0I7QUFJekJNLGNBQU0sRUFBRTZDLFNBSmlCO0FBS3pCYSxlQUFPLEVBQUUxQztBQUxnQixPQUFELENBQTFCO0FBT0EsYUFBTytCLEdBQUcsR0FBRy9CLElBQUgsR0FBVSxFQUFwQjtBQUNELEtBVFEsQ0FBVDtBQVVBZ0IsYUFBUyxDQUFDLFVBQUNoQixJQUFELEVBQVU7QUFDbEIsVUFBTStCLEdBQUcsR0FBR1MsdUVBQWMsQ0FBQztBQUN6Qm5FLGVBQU8sRUFBUEEsT0FEeUI7QUFFekJDLGNBQU0sRUFBTkEsTUFGeUI7QUFHekJtRSxlQUFPLEVBQUU5RCxRQUhnQjtBQUl6QkssY0FBTSxFQUFFNkMsU0FKaUI7QUFLekJhLGVBQU8sRUFBRTFDO0FBTGdCLE9BQUQsQ0FBMUI7QUFPQSxhQUFPK0IsR0FBRyxHQUFHL0IsSUFBSCxHQUFVLEVBQXBCO0FBQ0QsS0FUUSxDQUFUO0FBVUFpQixhQUFTLENBQUMsVUFBQ2pCLElBQUQsRUFBVTtBQUNsQixVQUFNK0IsR0FBRyxHQUFHUyx1RUFBYyxDQUFDO0FBQ3pCbkUsZUFBTyxFQUFQQSxPQUR5QjtBQUV6QkMsY0FBTSxFQUFOQSxNQUZ5QjtBQUd6Qm1FLGVBQU8sRUFBRTdELFFBSGdCO0FBSXpCSSxjQUFNLEVBQUU2QyxTQUppQjtBQUt6QmEsZUFBTyxFQUFFMUM7QUFMZ0IsT0FBRCxDQUExQjtBQU9BLGFBQU8rQixHQUFHLEdBQUcvQixJQUFILEdBQVUsRUFBcEI7QUFDRCxLQVRRLENBQVQ7QUFVQW1CLFdBQU8sQ0FBQyxVQUFDbkIsSUFBRCxFQUFVO0FBQ2hCLFVBQU0rQixHQUFHLEdBQUdZLG9FQUFZLENBQUM7QUFDdkJ0RSxlQUFPLEVBQVBBLE9BRHVCO0FBRXZCQyxjQUFNLEVBQU5BLE1BRnVCO0FBR3ZCTyxjQUFNLEVBQU5BLE1BSHVCO0FBSXZCRyxjQUFNLEVBQUU2QyxTQUplO0FBS3ZCZSxjQUFNLEVBQUU1QztBQUxlLE9BQUQsQ0FBeEI7QUFPQSxhQUFPK0IsR0FBRyxHQUFHL0IsSUFBSCxHQUFVLEVBQXBCO0FBQ0QsS0FUTSxDQUFQO0FBVUQsR0F0RjZCLEVBdUY5QixDQUNFM0IsT0FERixFQUVFQyxNQUZGLEVBR0VDLFFBSEYsRUFJRUMsUUFKRixFQUtFQyxTQUxGLEVBTUVDLFFBTkYsRUFPRUMsUUFQRixFQVFFQyxRQVJGLEVBU0VDLE1BVEYsRUFVRUMsY0FWRixDQXZGOEIsQ0FBaEM7QUFxR0E7O0FBak1pQyxvQkFrTVBDLHNEQUFRLENBQUMsS0FBRCxDQWxNRDtBQUFBLE1Ba00xQjhELEtBbE0wQjtBQUFBLE1Ba01uQkMsUUFsTW1COztBQW1NakMsTUFBTUMsV0FBVyxHQUFHaEQseURBQVcsQ0FBQyxZQUFNO0FBQ3BDK0MsWUFBUSxDQUFDLFVBQUM5QyxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFSO0FBQ0QsR0FGOEIsRUFFNUIsRUFGNEIsQ0FBL0I7O0FBbk1pQyxvQkFzTUtqQixzREFBUSxDQUFDLEtBQUQsQ0F0TWI7QUFBQSxNQXNNMUJpRSxXQXRNMEI7QUFBQSxNQXNNYkMsY0F0TWE7O0FBdU1qQyxNQUFNQyxpQkFBaUIsR0FBR25ELHlEQUFXLENBQUMsWUFBTTtBQUMxQ2tELGtCQUFjLENBQUMsVUFBQ2pELElBQUQ7QUFBQSxhQUFVLENBQUNBLElBQVg7QUFBQSxLQUFELENBQWQ7QUFDRCxHQUZvQyxFQUVsQyxFQUZrQyxDQUFyQztBQUlBOztBQTNNaUMsb0JBNE1YakIsc0RBQVEsQ0FBQyxLQUFELENBNU1HO0FBQUEsTUE0TTFCb0UsR0E1TTBCO0FBQUEsTUE0TXJCQyxNQTVNcUI7O0FBNk1qQyxNQUFNQyxTQUFTLEdBQUd0RCx5REFBVyxDQUFDLFlBQU07QUFDbENxRCxVQUFNLENBQUMsVUFBQ3BELElBQUQ7QUFBQSxhQUFVLENBQUNBLElBQVg7QUFBQSxLQUFELENBQU47QUFDRCxHQUY0QixFQUUxQixFQUYwQixDQUE3Qjs7QUE3TWlDLG9CQWdORGpCLHNEQUFRLENBQUMsSUFBRCxDQWhOUDtBQUFBLE1BZ04xQnVFLFFBaE4wQjtBQUFBLE1BZ05oQkMsV0FoTmdCOztBQWlOakMsTUFBTUMsY0FBYyxHQUFHekQseURBQVcsQ0FBQyxZQUFNO0FBQ3ZDd0QsZUFBVyxDQUFDLFVBQUN2RCxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFYO0FBQ0QsR0FGaUMsRUFFL0IsRUFGK0IsQ0FBbEM7QUFJQTs7QUFyTmlDLG9CQXNOT2pCLHNEQUFRLENBQUMsS0FBRCxDQXROZjtBQUFBLE1Bc04xQjBFLFlBdE4wQjtBQUFBLE1Bc05aQyxlQXROWTs7QUF1TmpDLE1BQU1DLFVBQVUsR0FBRzVELHlEQUFXLENBQUMsWUFBTTtBQUNuQzJELG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0QsR0FGNkIsRUFFM0IsRUFGMkIsQ0FBOUI7QUFHQSxNQUFNRSxXQUFXLEdBQUc3RCx5REFBVyxDQUFDLFlBQU07QUFDcEMyRCxtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNELEdBRjhCLEVBRTVCLEVBRjRCLENBQS9CO0FBSUEsTUFBTUcsRUFBRSxHQUFHQyx5RUFBYyxDQUFDLDBCQUFELENBQXpCO0FBRUEsU0FBTztBQUNMO0FBQ0E5RSxVQUFNLEVBQU5BLE1BRks7QUFHTDRDLGdCQUFZLEVBQVpBLFlBSEs7QUFJTDFDLFVBQU0sRUFBTkEsTUFKSztBQUtMQyxhQUFTLEVBQVRBLFNBTEs7QUFNTEMsTUFBRSxFQUFGQSxFQU5LO0FBT0xDLFNBQUssRUFBTEEsS0FQSztBQVFMQyxTQUFLLEVBQUxBLEtBUks7QUFTTEMsWUFBUSxFQUFSQSxRQVRLO0FBVUxDLGdCQUFZLEVBQVpBLFlBVks7QUFXTEMsbUJBQWUsRUFBZkEsZUFYSztBQVlMQyxZQUFRLEVBQVJBLFFBWks7QUFhTEMsZUFBVyxFQUFYQSxXQWJLO0FBY0xDLFdBQU8sRUFBUEEsT0FkSztBQWVMRSxpQkFBYSxFQUFiQSxhQWZLO0FBZ0JMK0MsU0FBSyxFQUFMQSxLQWhCSztBQWlCTEUsZUFBVyxFQUFYQSxXQWpCSztBQWtCTEMsZUFBVyxFQUFYQSxXQWxCSztBQW1CTEUscUJBQWlCLEVBQWpCQSxpQkFuQks7O0FBb0JMO0FBQ0EvQyxVQUFNLEVBQU5BLE1BckJLO0FBc0JMTyxhQUFTLEVBQVRBLFNBdEJLO0FBdUJMQyxVQUFNLEVBQU5BLE1BdkJLO0FBd0JMQyxhQUFTLEVBQVRBLFNBeEJLO0FBeUJMUixVQUFNLEVBQU5BLE1BekJLO0FBMEJMUyxhQUFTLEVBQVRBLFNBMUJLO0FBMkJMUixXQUFPLEVBQVBBLE9BM0JLO0FBNEJMUyxjQUFVLEVBQVZBLFVBNUJLO0FBNkJMUixVQUFNLEVBQU5BLE1BN0JLO0FBOEJMUyxhQUFTLEVBQVRBLFNBOUJLO0FBK0JMUixVQUFNLEVBQU5BLE1BL0JLO0FBZ0NMUyxhQUFTLEVBQVRBLFNBaENLO0FBaUNMUixVQUFNLEVBQU5BLE1BakNLO0FBa0NMUyxhQUFTLEVBQVRBLFNBbENLO0FBbUNMQyxRQUFJLEVBQUpBLElBbkNLO0FBb0NMQyxXQUFPLEVBQVBBLE9BcENLO0FBcUNMQyxvQkFBZ0IsRUFBaEJBLGdCQXJDSztBQXNDTEUsb0JBQWdCLEVBQWhCQSxnQkF0Q0s7QUF1Q0xDLHFCQUFpQixFQUFqQkEsaUJBdkNLO0FBd0NMQyxvQkFBZ0IsRUFBaEJBLGdCQXhDSztBQXlDTEMsb0JBQWdCLEVBQWhCQSxnQkF6Q0s7QUEwQ0xDLG9CQUFnQixFQUFoQkEsZ0JBMUNLO0FBMkNMQyxzQkFBa0IsRUFBbEJBLGtCQTNDSzs7QUE0Q0w7QUFDQXdCLE9BQUcsRUFBSEEsR0E3Q0s7QUE4Q0xFLGFBQVMsRUFBVEEsU0E5Q0s7QUErQ0xDLFlBQVEsRUFBUkEsUUEvQ0s7QUFnRExFLGtCQUFjLEVBQWRBLGNBaERLOztBQWlETDtBQUNBSyxNQUFFLEVBQUZBLEVBbERLO0FBbURMSixnQkFBWSxFQUFaQSxZQW5ESztBQW9ETEUsY0FBVSxFQUFWQSxVQXBESztBQXFETEMsZUFBVyxFQUFYQTtBQXJESyxHQUFQO0FBdUREOztHQXZSdUJ6RixRO1VBWWxCQyx3RCxFQWtOTzBGLGlFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuYzA0ZWIzOTlkYjBjNGQ3NWJjZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5pbXBvcnQgeyBnZXREZWZhdWx0U2tpbGxJZHMgfSBmcm9tICdAL2FwcC91dGlscy9kZWZhdWx0LXNraWxsJztcbmltcG9ydCB7IGhhc1JlZmluZU9wdGlvbiwgaGFzV2VhcG9uT3B0aW9uIH0gZnJvbSAnQC9hcHAvdXRpbHMvd2VhcG9uJztcbmltcG9ydCB7IGhhc0Fzc2lzdE9wdGlvbiB9IGZyb20gJ0AvYXBwL3V0aWxzL2Fzc2lzdCc7XG5pbXBvcnQgeyBoYXNTa2lsbE9wdGlvbiB9IGZyb20gJ0AvYXBwL3V0aWxzL3NraWxsJztcbmltcG9ydCB7IGhhc1NwZWNpYWxPcHRpb24gfSBmcm9tICdAL2FwcC91dGlscy9zcGVjaWFsJztcbmltcG9ydCB7IGhhc1NlYWxPcHRvbiB9IGZyb20gJ0AvYXBwL3V0aWxzL3NlYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIb29rcygpIHtcbiAgY29uc3Qge1xuICAgIHJ1bGVzREIsXG4gICAgaGVyb0RCLFxuICAgIHdlYXBvbkRCLFxuICAgIGFzc2lzdERCLFxuICAgIHNwZWNpYWxEQixcbiAgICBza2lsbEFEQixcbiAgICBza2lsbEJEQixcbiAgICBza2lsbENEQixcbiAgICBzZWFsREIsXG4gICAgZGVmYXVsdFNraWxsREIsXG4gIH0gPSB1c2VGZWhEQigpO1xuICAvKiogaGVybyAqL1xuICBjb25zdCBbaGVyb0lkLCBzZXRIZXJvSWRdID0gdXNlU3RhdGUoJ0ZlaCcpO1xuICBjb25zdCBbcmFyaXR5LCBzZXRSYXJpdHldID0gdXNlU3RhdGU8NSB8IDQ+KDUpO1xuICBjb25zdCBbaXYsIHNldElWXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21lcmdlLCBzZXRNZXJnZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RyYWdvbmZsb3dlciwgc2V0RHJhZ29uZmxvd2VyXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbYmxlc3NpbmcsIHNldEJsZXNzaW5nXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N1cHBvcnQsIHNldFN1cHBvcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVTdXBwb3J0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFN1cHBvcnQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICAvKiogc2tpbGxzICovXG4gIGNvbnN0IGRlZmF1bHRTa2lsbHNSZWYgPSB1c2VSZWY8e1xuICAgIHdlYXBvbjogc3RyaW5nO1xuICAgIGFzc2lzdDogc3RyaW5nO1xuICAgIHNwZWNpYWw6IHN0cmluZztcbiAgICBza2lsbEE6IHN0cmluZztcbiAgICBza2lsbEI6IHN0cmluZztcbiAgICBza2lsbEM6IHN0cmluZztcbiAgfT4oe1xuICAgIHdlYXBvbjogJycsXG4gICAgYXNzaXN0OiAnJyxcbiAgICBzcGVjaWFsOiAnJyxcbiAgICBza2lsbEE6ICcnLFxuICAgIHNraWxsQjogJycsXG4gICAgc2tpbGxDOiAnJyxcbiAgfSk7XG4gIGNvbnN0IHdlYXBvblJlZiA9IHVzZVJlZignJyk7XG4gIGNvbnN0IFt3ZWFwb24sIHNldFdlYXBvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZWZpbmUsIHNldFJlZmluZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthc3Npc3QsIHNldEFzc2lzdF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzcGVjaWFsLCBzZXRTcGVjaWFsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NraWxsQSwgc2V0U2tpbGxBXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NraWxsQiwgc2V0U2tpbGxCXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NraWxsQywgc2V0U2tpbGxDXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlYWwsIHNldFNlYWxdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHNldERlZmF1bHRXZWFwb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0V2VhcG9uKGRlZmF1bHRTa2lsbHNSZWYuY3VycmVudC53ZWFwb24pO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0RGVmYXVsdEFzc2lzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRBc3Npc3QoZGVmYXVsdFNraWxsc1JlZi5jdXJyZW50LmFzc2lzdCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXREZWZhdWx0U3BlY2lhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTcGVjaWFsKGRlZmF1bHRTa2lsbHNSZWYuY3VycmVudC5zcGVjaWFsKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldERlZmF1bHRTa2lsbEEgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2tpbGxBKGRlZmF1bHRTa2lsbHNSZWYuY3VycmVudC5za2lsbEEpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0RGVmYXVsdFNraWxsQiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTa2lsbEIoZGVmYXVsdFNraWxsc1JlZi5jdXJyZW50LnNraWxsQik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXREZWZhdWx0U2tpbGxDID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNraWxsQyhkZWZhdWx0U2tpbGxzUmVmLmN1cnJlbnQuc2tpbGxDKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldEFsbFNraWxsRGVmYXVsdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXREZWZhdWx0V2VhcG9uKCk7XG4gICAgc2V0RGVmYXVsdEFzc2lzdCgpO1xuICAgIHNldERlZmF1bHRTcGVjaWFsKCk7XG4gICAgc2V0RGVmYXVsdFNraWxsQSgpO1xuICAgIHNldERlZmF1bHRTa2lsbEIoKTtcbiAgICBzZXREZWZhdWx0U2tpbGxDKCk7XG4gIH0sIFtcbiAgICBzZXREZWZhdWx0V2VhcG9uLFxuICAgIHNldERlZmF1bHRBc3Npc3QsXG4gICAgc2V0RGVmYXVsdFNwZWNpYWwsXG4gICAgc2V0RGVmYXVsdFNraWxsQSxcbiAgICBzZXREZWZhdWx0U2tpbGxCLFxuICAgIHNldERlZmF1bHRTa2lsbEMsXG4gIF0pO1xuXG4gIHdlYXBvblJlZi5jdXJyZW50ID0gd2VhcG9uO1xuXG4gIGNvbnN0IG9uQ2hhbmdlSGVybyA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdIZXJvSWQ6IHN0cmluZykgPT4ge1xuICAgICAgc2V0SGVyb0lkKG5ld0hlcm9JZCk7XG4gICAgICBkZWZhdWx0U2tpbGxzUmVmLmN1cnJlbnQgPSBnZXREZWZhdWx0U2tpbGxJZHMoe1xuICAgICAgICBkZWZhdWx0U2tpbGxEQixcbiAgICAgICAgaGVyb0lkOiBuZXdIZXJvSWQsXG4gICAgICB9KTtcbiAgICAgIHNldFdlYXBvbigoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcyA9IGhhc1dlYXBvbk9wdGlvbih7XG4gICAgICAgICAgaGVyb0RCLFxuICAgICAgICAgIHdlYXBvbkRCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHdlYXBvbklkOiB3ZWFwb25SZWYuY3VycmVudCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoYXMgPyB3ZWFwb25SZWYuY3VycmVudCA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRSZWZpbmUoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzUmVmaW5lT3B0aW9uKHtcbiAgICAgICAgICBoZXJvREIsXG4gICAgICAgICAgd2VhcG9uREIsXG4gICAgICAgICAgaGVyb0lkOiBuZXdIZXJvSWQsXG4gICAgICAgICAgd2VhcG9uSWQ6IHdlYXBvblJlZi5jdXJyZW50LFxuICAgICAgICAgIHJlZmluZUlkOiBwcmV2LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhhcyA/IHByZXYgOiAnJztcbiAgICAgIH0pO1xuICAgICAgc2V0QXNzaXN0KChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcyA9IGhhc0Fzc2lzdE9wdGlvbih7XG4gICAgICAgICAgcnVsZXNEQixcbiAgICAgICAgICBoZXJvREIsXG4gICAgICAgICAgYXNzaXN0REIsXG4gICAgICAgICAgaGVyb0lkOiBuZXdIZXJvSWQsXG4gICAgICAgICAgYXNzaXN0SWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRTcGVjaWFsKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcyA9IGhhc1NwZWNpYWxPcHRpb24oe1xuICAgICAgICAgIHJ1bGVzREIsXG4gICAgICAgICAgaGVyb0RCLFxuICAgICAgICAgIHNwZWNpYWxEQixcbiAgICAgICAgICBoZXJvSWQ6IG5ld0hlcm9JZCxcbiAgICAgICAgICBzcGVjaWFsSWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRTa2lsbEEoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzU2tpbGxPcHRpb24oe1xuICAgICAgICAgIHJ1bGVzREIsXG4gICAgICAgICAgaGVyb0RCLFxuICAgICAgICAgIHNraWxsREI6IHNraWxsQURCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHNraWxsSWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRTa2lsbEIoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzU2tpbGxPcHRpb24oe1xuICAgICAgICAgIHJ1bGVzREIsXG4gICAgICAgICAgaGVyb0RCLFxuICAgICAgICAgIHNraWxsREI6IHNraWxsQkRCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHNraWxsSWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRTa2lsbEMoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzU2tpbGxPcHRpb24oe1xuICAgICAgICAgIHJ1bGVzREIsXG4gICAgICAgICAgaGVyb0RCLFxuICAgICAgICAgIHNraWxsREI6IHNraWxsQ0RCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHNraWxsSWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRTZWFsKChwcmV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGhhcyA9IGhhc1NlYWxPcHRvbih7XG4gICAgICAgICAgcnVsZXNEQixcbiAgICAgICAgICBoZXJvREIsXG4gICAgICAgICAgc2VhbERCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHNlYWxJZDogcHJldixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoYXMgPyBwcmV2IDogJyc7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtcbiAgICAgIHJ1bGVzREIsXG4gICAgICBoZXJvREIsXG4gICAgICB3ZWFwb25EQixcbiAgICAgIGFzc2lzdERCLFxuICAgICAgc3BlY2lhbERCLFxuICAgICAgc2tpbGxBREIsXG4gICAgICBza2lsbEJEQixcbiAgICAgIHNraWxsQ0RCLFxuICAgICAgc2VhbERCLFxuICAgICAgZGVmYXVsdFNraWxsREIsXG4gICAgXVxuICApO1xuXG4gIC8qKiBib251cyAqL1xuICBjb25zdCBbYXJlbmEsIHNldEFyZW5hXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlQXJlbmEgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QXJlbmEoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBbcmVzcGxlbmRlbnQsIHNldFJlc3BsZW5kZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlUmVzcGxlbmRlbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0UmVzcGxlbmRlbnQoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIC8qKiBwdXJlIHFvcyB1aSAqL1xuICBjb25zdCBbbHYxLCBzZXRMVjFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVMdjEgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TFYxKChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgY29uc3QgW21heFNraWxsLCBzZXRNYXhTa2lsbF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgdG9nZ2xlTWF4U2tpbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0TWF4U2tpbGwoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuXG4gIC8qKiBlZGl0b3IgKi9cbiAgY29uc3QgW2VkaXRvcklzT3Blbiwgc2V0RWRpdG9ySXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb3BlbkVkaXRvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFZGl0b3JJc09wZW4odHJ1ZSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgY2xvc2VFZGl0b3IgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0RWRpdG9ySXNPcGVuKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGJnID0gdXNlQmFzZVBhdGhVcmwoJy9hc3NldHMvc3VtbW9uLXN0b25lLmpwZycpO1xuXG4gIHJldHVybiB7XG4gICAgLyoqIGhlcm8gKi9cbiAgICBoZXJvSWQsXG4gICAgb25DaGFuZ2VIZXJvLFxuICAgIHJhcml0eSxcbiAgICBzZXRSYXJpdHksXG4gICAgaXYsXG4gICAgc2V0SVYsXG4gICAgbWVyZ2UsXG4gICAgc2V0TWVyZ2UsXG4gICAgZHJhZ29uZmxvd2VyLFxuICAgIHNldERyYWdvbmZsb3dlcixcbiAgICBibGVzc2luZyxcbiAgICBzZXRCbGVzc2luZyxcbiAgICBzdXBwb3J0LFxuICAgIHRvZ2dsZVN1cHBvcnQsXG4gICAgYXJlbmEsXG4gICAgdG9nZ2xlQXJlbmEsXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgdG9nZ2xlUmVzcGxlbmRlbnQsXG4gICAgLyoqIHNraWxscyAqL1xuICAgIHdlYXBvbixcbiAgICBzZXRXZWFwb24sXG4gICAgcmVmaW5lLFxuICAgIHNldFJlZmluZSxcbiAgICBhc3Npc3QsXG4gICAgc2V0QXNzaXN0LFxuICAgIHNwZWNpYWwsXG4gICAgc2V0U3BlY2lhbCxcbiAgICBza2lsbEEsXG4gICAgc2V0U2tpbGxBLFxuICAgIHNraWxsQixcbiAgICBzZXRTa2lsbEIsXG4gICAgc2tpbGxDLFxuICAgIHNldFNraWxsQyxcbiAgICBzZWFsLFxuICAgIHNldFNlYWwsXG4gICAgc2V0RGVmYXVsdFdlYXBvbixcbiAgICBzZXREZWZhdWx0QXNzaXN0LFxuICAgIHNldERlZmF1bHRTcGVjaWFsLFxuICAgIHNldERlZmF1bHRTa2lsbEEsXG4gICAgc2V0RGVmYXVsdFNraWxsQixcbiAgICBzZXREZWZhdWx0U2tpbGxDLFxuICAgIHNldEFsbFNraWxsRGVmYXVsdCxcbiAgICAvKiogcHVyZSBxb3MgdWkgKi9cbiAgICBsdjEsXG4gICAgdG9nZ2xlTHYxLFxuICAgIG1heFNraWxsLFxuICAgIHRvZ2dsZU1heFNraWxsLFxuICAgIC8qKiBlZGl0b3IgKi9cbiAgICBiZyxcbiAgICBlZGl0b3JJc09wZW4sXG4gICAgb3BlbkVkaXRvcixcbiAgICBjbG9zZUVkaXRvcixcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=