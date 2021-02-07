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
    setAssist(defaultSkillsRef.current.weapon);
  }, []);
  var setDefaultSpecial = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSpecial(defaultSkillsRef.current.assist);
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
    console.log(defaultSkillsRef.current);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UvVW5pdEVkaXRvci9ob29rcy50c3giXSwibmFtZXMiOlsidXNlSG9va3MiLCJ1c2VGZWhEQiIsInJ1bGVzREIiLCJoZXJvREIiLCJ3ZWFwb25EQiIsImFzc2lzdERCIiwic3BlY2lhbERCIiwic2tpbGxBREIiLCJza2lsbEJEQiIsInNraWxsQ0RCIiwic2VhbERCIiwiZGVmYXVsdFNraWxsREIiLCJ1c2VTdGF0ZSIsImhlcm9JZCIsInNldEhlcm9JZCIsInJhcml0eSIsInNldFJhcml0eSIsIml2Iiwic2V0SVYiLCJtZXJnZSIsInNldE1lcmdlIiwiZHJhZ29uZmxvd2VyIiwic2V0RHJhZ29uZmxvd2VyIiwiYmxlc3NpbmciLCJzZXRCbGVzc2luZyIsInN1cHBvcnQiLCJzZXRTdXBwb3J0IiwidG9nZ2xlU3VwcG9ydCIsInVzZUNhbGxiYWNrIiwicHJldiIsImRlZmF1bHRTa2lsbHNSZWYiLCJ1c2VSZWYiLCJ3ZWFwb24iLCJhc3Npc3QiLCJzcGVjaWFsIiwic2tpbGxBIiwic2tpbGxCIiwic2tpbGxDIiwic2V0V2VhcG9uIiwicmVmaW5lIiwic2V0UmVmaW5lIiwic2V0QXNzaXN0Iiwic2V0U3BlY2lhbCIsInNldFNraWxsQSIsInNldFNraWxsQiIsInNldFNraWxsQyIsInNlYWwiLCJzZXRTZWFsIiwic2V0RGVmYXVsdFdlYXBvbiIsImN1cnJlbnQiLCJzZXREZWZhdWx0QXNzaXN0Iiwic2V0RGVmYXVsdFNwZWNpYWwiLCJzZXREZWZhdWx0U2tpbGxBIiwic2V0RGVmYXVsdFNraWxsQiIsInNldERlZmF1bHRTa2lsbEMiLCJzZXRBbGxTa2lsbERlZmF1bHQiLCJvbkNoYW5nZUhlcm8iLCJuZXdIZXJvSWQiLCJnZXREZWZhdWx0U2tpbGxJZHMiLCJjb25zb2xlIiwibG9nIiwiaGFzIiwiaGFzV2VhcG9uT3B0aW9uIiwid2VhcG9uSWQiLCJoYXNBc3Npc3RPcHRpb24iLCJhc3Npc3RJZCIsImhhc1NwZWNpYWxPcHRpb24iLCJzcGVjaWFsSWQiLCJoYXNTa2lsbE9wdGlvbiIsInNraWxsREIiLCJza2lsbElkIiwiaGFzU2VhbE9wdG9uIiwic2VhbElkIiwiYXJlbmEiLCJzZXRBcmVuYSIsInRvZ2dsZUFyZW5hIiwicmVzcGxlbmRlbnQiLCJzZXRSZXNwbGVuZGVudCIsInRvZ2dsZVJlc3BsZW5kZW50IiwibHYxIiwic2V0TFYxIiwidG9nZ2xlTHYxIiwibWF4U2tpbGwiLCJzZXRNYXhTa2lsbCIsInRvZ2dsZU1heFNraWxsIiwiZWRpdG9ySXNPcGVuIiwic2V0RWRpdG9ySXNPcGVuIiwib3BlbkVkaXRvciIsImNsb3NlRWRpdG9yIiwiYmciLCJ1c2VCYXNlUGF0aFVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQVk3QkMsZ0VBQVEsRUFacUI7QUFBQSxNQUUvQkMsT0FGK0IsYUFFL0JBLE9BRitCO0FBQUEsTUFHL0JDLE1BSCtCLGFBRy9CQSxNQUgrQjtBQUFBLE1BSS9CQyxRQUorQixhQUkvQkEsUUFKK0I7QUFBQSxNQUsvQkMsUUFMK0IsYUFLL0JBLFFBTCtCO0FBQUEsTUFNL0JDLFNBTitCLGFBTS9CQSxTQU4rQjtBQUFBLE1BTy9CQyxRQVArQixhQU8vQkEsUUFQK0I7QUFBQSxNQVEvQkMsUUFSK0IsYUFRL0JBLFFBUitCO0FBQUEsTUFTL0JDLFFBVCtCLGFBUy9CQSxRQVQrQjtBQUFBLE1BVS9CQyxNQVYrQixhQVUvQkEsTUFWK0I7QUFBQSxNQVcvQkMsY0FYK0IsYUFXL0JBLGNBWCtCO0FBYWpDOzs7QUFiaUMsa0JBY0xDLHNEQUFRLENBQUMsS0FBRCxDQWRIO0FBQUEsTUFjMUJDLE1BZDBCO0FBQUEsTUFjbEJDLFNBZGtCOztBQUFBLG1CQWVMRixzREFBUSxDQUFRLENBQVIsQ0FmSDtBQUFBLE1BZTFCRyxNQWYwQjtBQUFBLE1BZWxC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O0FBNEJMUSxjQUFVLEVBQVZBLFVBNUJLO0FBNkJMUCxVQUFNLEVBQU5BLE1BN0JLO0FBOEJMUSxhQUFTLEVBQVRBLFNBOUJLO0FBK0JMUCxVQUFNLEVBQU5BLE1BL0JLO0FBZ0NMUSxhQUFTLEVBQVRBLFNBaENLO0FBaUNMUCxVQUFNLEVBQU5BLE1BakNLO0FBa0NMUSxhQUFTLEVBQVRBLFNBbENLO0FBbUNMQyxRQUFJLEVBQUpBLElBbkNLO0FBb0NMQyxXQUFPLEVBQVBBLE9BcENLO0FBcUNMQyxvQkFBZ0IsRUFBaEJBLGdCQXJDSztBQXNDTEUsb0JBQWdCLEVBQWhCQSxnQkF0Q0s7QUF1Q0xDLHFCQUFpQixFQUFqQkEsaUJBdkNLO0FBd0NMQyxvQkFBZ0IsRUFBaEJBLGdCQXhDSztBQXlDTEMsb0JBQWdCLEVBQWhCQSxnQkF6Q0s7QUEwQ0xDLG9CQUFnQixFQUFoQkEsZ0JBMUNLO0FBMkNMQyxzQkFBa0IsRUFBbEJBLGtCQTNDSzs7QUE0Q0w7QUFDQXdCLE9BQUcsRUFBSEEsR0E3Q0s7QUE4Q0xFLGFBQVMsRUFBVEEsU0E5Q0s7QUErQ0xDLFlBQVEsRUFBUkEsUUEvQ0s7QUFnRExFLGtCQUFjLEVBQWRBLGNBaERLOztBQWlETDtBQUNBSyxNQUFFLEVBQUZBLEVBbERLO0FBbURMSixnQkFBWSxFQUFaQSxZQW5ESztBQW9ETEUsY0FBVSxFQUFWQSxVQXBESztBQXFETEMsZUFBVyxFQUFYQTtBQXJESyxHQUFQO0FBdUREOztHQTNRdUJ4RixRO1VBWWxCQyx3RCxFQXNNT3lGLGlFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuODU5NzViZjM2MTk4MzIzYzNjYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5pbXBvcnQgeyBnZXREZWZhdWx0U2tpbGxJZHMgfSBmcm9tICdAL2FwcC91dGlscy9kZWZhdWx0LXNraWxsJztcbmltcG9ydCB7IGhhc1dlYXBvbk9wdGlvbiB9IGZyb20gJ0AvYXBwL3V0aWxzL3dlYXBvbic7XG5pbXBvcnQgeyBoYXNBc3Npc3RPcHRpb24gfSBmcm9tICdAL2FwcC91dGlscy9hc3Npc3QnO1xuaW1wb3J0IHsgaGFzU2tpbGxPcHRpb24gfSBmcm9tICdAL2FwcC91dGlscy9za2lsbCc7XG5pbXBvcnQgeyBoYXNTcGVjaWFsT3B0aW9uIH0gZnJvbSAnQC9hcHAvdXRpbHMvc3BlY2lhbCc7XG5pbXBvcnQgeyBoYXNTZWFsT3B0b24gfSBmcm9tICdAL2FwcC91dGlscy9zZWFsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSG9va3MoKSB7XG4gIGNvbnN0IHtcbiAgICBydWxlc0RCLFxuICAgIGhlcm9EQixcbiAgICB3ZWFwb25EQixcbiAgICBhc3Npc3REQixcbiAgICBzcGVjaWFsREIsXG4gICAgc2tpbGxBREIsXG4gICAgc2tpbGxCREIsXG4gICAgc2tpbGxDREIsXG4gICAgc2VhbERCLFxuICAgIGRlZmF1bHRTa2lsbERCLFxuICB9ID0gdXNlRmVoREIoKTtcbiAgLyoqIGhlcm8gKi9cbiAgY29uc3QgW2hlcm9JZCwgc2V0SGVyb0lkXSA9IHVzZVN0YXRlKCdGZWgnKTtcbiAgY29uc3QgW3Jhcml0eSwgc2V0UmFyaXR5XSA9IHVzZVN0YXRlPDUgfCA0Pig1KTtcbiAgY29uc3QgW2l2LCBzZXRJVl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFttZXJnZSwgc2V0TWVyZ2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkcmFnb25mbG93ZXIsIHNldERyYWdvbmZsb3dlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2JsZXNzaW5nLCBzZXRCbGVzc2luZ10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzdXBwb3J0LCBzZXRTdXBwb3J0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9nZ2xlU3VwcG9ydCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdXBwb3J0KChwcmV2KSA9PiAhcHJldik7XG4gIH0sIFtdKTtcbiAgLyoqIHNraWxscyAqL1xuICBjb25zdCBkZWZhdWx0U2tpbGxzUmVmID0gdXNlUmVmPHtcbiAgICB3ZWFwb246IHN0cmluZztcbiAgICBhc3Npc3Q6IHN0cmluZztcbiAgICBzcGVjaWFsOiBzdHJpbmc7XG4gICAgc2tpbGxBOiBzdHJpbmc7XG4gICAgc2tpbGxCOiBzdHJpbmc7XG4gICAgc2tpbGxDOiBzdHJpbmc7XG4gIH0+KHtcbiAgICB3ZWFwb246ICcnLFxuICAgIGFzc2lzdDogJycsXG4gICAgc3BlY2lhbDogJycsXG4gICAgc2tpbGxBOiAnJyxcbiAgICBza2lsbEI6ICcnLFxuICAgIHNraWxsQzogJycsXG4gIH0pO1xuICBjb25zdCBbd2VhcG9uLCBzZXRXZWFwb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVmaW5lLCBzZXRSZWZpbmVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYXNzaXN0LCBzZXRBc3Npc3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc3BlY2lhbCwgc2V0U3BlY2lhbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtza2lsbEEsIHNldFNraWxsQV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtza2lsbEIsIHNldFNraWxsQl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtza2lsbEMsIHNldFNraWxsQ10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWFsLCBzZXRTZWFsXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBzZXREZWZhdWx0V2VhcG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFdlYXBvbihkZWZhdWx0U2tpbGxzUmVmLmN1cnJlbnQud2VhcG9uKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldERlZmF1bHRBc3Npc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0QXNzaXN0KGRlZmF1bHRTa2lsbHNSZWYuY3VycmVudC53ZWFwb24pO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0RGVmYXVsdFNwZWNpYWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3BlY2lhbChkZWZhdWx0U2tpbGxzUmVmLmN1cnJlbnQuYXNzaXN0KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldERlZmF1bHRTa2lsbEEgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2tpbGxBKGRlZmF1bHRTa2lsbHNSZWYuY3VycmVudC5za2lsbEEpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2V0RGVmYXVsdFNraWxsQiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTa2lsbEIoZGVmYXVsdFNraWxsc1JlZi5jdXJyZW50LnNraWxsQik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzZXREZWZhdWx0U2tpbGxDID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNraWxsQyhkZWZhdWx0U2tpbGxzUmVmLmN1cnJlbnQuc2tpbGxDKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNldEFsbFNraWxsRGVmYXVsdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXREZWZhdWx0V2VhcG9uKCk7XG4gICAgc2V0RGVmYXVsdEFzc2lzdCgpO1xuICAgIHNldERlZmF1bHRTcGVjaWFsKCk7XG4gICAgc2V0RGVmYXVsdFNraWxsQSgpO1xuICAgIHNldERlZmF1bHRTa2lsbEIoKTtcbiAgICBzZXREZWZhdWx0U2tpbGxDKCk7XG4gIH0sIFtcbiAgICBzZXREZWZhdWx0V2VhcG9uLFxuICAgIHNldERlZmF1bHRBc3Npc3QsXG4gICAgc2V0RGVmYXVsdFNwZWNpYWwsXG4gICAgc2V0RGVmYXVsdFNraWxsQSxcbiAgICBzZXREZWZhdWx0U2tpbGxCLFxuICAgIHNldERlZmF1bHRTa2lsbEMsXG4gIF0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlSGVybyA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdIZXJvSWQ6IHN0cmluZykgPT4ge1xuICAgICAgc2V0SGVyb0lkKG5ld0hlcm9JZCk7XG4gICAgICBkZWZhdWx0U2tpbGxzUmVmLmN1cnJlbnQgPSBnZXREZWZhdWx0U2tpbGxJZHMoe1xuICAgICAgICBkZWZhdWx0U2tpbGxEQixcbiAgICAgICAgaGVyb0lkOiBuZXdIZXJvSWQsXG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRTa2lsbHNSZWYuY3VycmVudCk7XG4gICAgICBzZXRXZWFwb24oKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzV2VhcG9uT3B0aW9uKHtcbiAgICAgICAgICBoZXJvREIsXG4gICAgICAgICAgd2VhcG9uREIsXG4gICAgICAgICAgaGVyb0lkOiBuZXdIZXJvSWQsXG4gICAgICAgICAgd2VhcG9uSWQ6IHByZXYsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaGFzID8gcHJldiA6ICcnO1xuICAgICAgfSk7XG4gICAgICBzZXRBc3Npc3QoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzQXNzaXN0T3B0aW9uKHtcbiAgICAgICAgICBydWxlc0RCLFxuICAgICAgICAgIGhlcm9EQixcbiAgICAgICAgICBhc3Npc3REQixcbiAgICAgICAgICBoZXJvSWQ6IG5ld0hlcm9JZCxcbiAgICAgICAgICBhc3Npc3RJZDogcHJldixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoYXMgPyBwcmV2IDogJyc7XG4gICAgICB9KTtcbiAgICAgIHNldFNwZWNpYWwoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzU3BlY2lhbE9wdGlvbih7XG4gICAgICAgICAgcnVsZXNEQixcbiAgICAgICAgICBoZXJvREIsXG4gICAgICAgICAgc3BlY2lhbERCLFxuICAgICAgICAgIGhlcm9JZDogbmV3SGVyb0lkLFxuICAgICAgICAgIHNwZWNpYWxJZDogcHJldixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoYXMgPyBwcmV2IDogJyc7XG4gICAgICB9KTtcbiAgICAgIHNldFNraWxsQSgocHJldikgPT4ge1xuICAgICAgICBjb25zdCBoYXMgPSBoYXNTa2lsbE9wdGlvbih7XG4gICAgICAgICAgcnVsZXNEQixcbiAgICAgICAgICBoZXJvREIsXG4gICAgICAgICAgc2tpbGxEQjogc2tpbGxBREIsXG4gICAgICAgICAgaGVyb0lkOiBuZXdIZXJvSWQsXG4gICAgICAgICAgc2tpbGxJZDogcHJldixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoYXMgPyBwcmV2IDogJyc7XG4gICAgICB9KTtcbiAgICAgIHNldFNraWxsQigocHJldikgPT4ge1xuICAgICAgICBjb25zdCBoYXMgPSBoYXNTa2lsbE9wdGlvbih7XG4gICAgICAgICAgcnVsZXNEQixcbiAgICAgICAgICBoZXJvREIsXG4gICAgICAgICAgc2tpbGxEQjogc2tpbGxCREIsXG4gICAgICAgICAgaGVyb0lkOiBuZXdIZXJvSWQsXG4gICAgICAgICAgc2tpbGxJZDogcHJldixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoYXMgPyBwcmV2IDogJyc7XG4gICAgICB9KTtcbiAgICAgIHNldFNraWxsQygocHJldikgPT4ge1xuICAgICAgICBjb25zdCBoYXMgPSBoYXNTa2lsbE9wdGlvbih7XG4gICAgICAgICAgcnVsZXNEQixcbiAgICAgICAgICBoZXJvREIsXG4gICAgICAgICAgc2tpbGxEQjogc2tpbGxDREIsXG4gICAgICAgICAgaGVyb0lkOiBuZXdIZXJvSWQsXG4gICAgICAgICAgc2tpbGxJZDogcHJldixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBoYXMgPyBwcmV2IDogJyc7XG4gICAgICB9KTtcbiAgICAgIHNldFNlYWwoKHByZXYpID0+IHtcbiAgICAgICAgY29uc3QgaGFzID0gaGFzU2VhbE9wdG9uKHtcbiAgICAgICAgICBydWxlc0RCLFxuICAgICAgICAgIGhlcm9EQixcbiAgICAgICAgICBzZWFsREIsXG4gICAgICAgICAgaGVyb0lkOiBuZXdIZXJvSWQsXG4gICAgICAgICAgc2VhbElkOiBwcmV2LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGhhcyA/IHByZXYgOiAnJztcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgW1xuICAgICAgcnVsZXNEQixcbiAgICAgIGhlcm9EQixcbiAgICAgIHdlYXBvbkRCLFxuICAgICAgYXNzaXN0REIsXG4gICAgICBzcGVjaWFsREIsXG4gICAgICBza2lsbEFEQixcbiAgICAgIHNraWxsQkRCLFxuICAgICAgc2tpbGxDREIsXG4gICAgICBzZWFsREIsXG4gICAgICBkZWZhdWx0U2tpbGxEQixcbiAgICBdXG4gICk7XG5cbiAgLyoqIGJvbnVzICovXG4gIGNvbnN0IFthcmVuYSwgc2V0QXJlbmFdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVBcmVuYSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRBcmVuYSgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG4gIGNvbnN0IFtyZXNwbGVuZGVudCwgc2V0UmVzcGxlbmRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVSZXNwbGVuZGVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRSZXNwbGVuZGVudCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgLyoqIHB1cmUgcW9zIHVpICovXG4gIGNvbnN0IFtsdjEsIHNldExWMV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRvZ2dsZUx2MSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRMVjEoKHByZXYpID0+ICFwcmV2KTtcbiAgfSwgW10pO1xuICBjb25zdCBbbWF4U2tpbGwsIHNldE1heFNraWxsXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB0b2dnbGVNYXhTa2lsbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRNYXhTa2lsbCgocHJldikgPT4gIXByZXYpO1xuICB9LCBbXSk7XG5cbiAgLyoqIGVkaXRvciAqL1xuICBjb25zdCBbZWRpdG9ySXNPcGVuLCBzZXRFZGl0b3JJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBvcGVuRWRpdG9yID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEVkaXRvcklzT3Blbih0cnVlKTtcbiAgfSwgW10pO1xuICBjb25zdCBjbG9zZUVkaXRvciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFZGl0b3JJc09wZW4oZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgYmcgPSB1c2VCYXNlUGF0aFVybCgnL2Fzc2V0cy9zdW1tb24tc3RvbmUuanBnJyk7XG5cbiAgcmV0dXJuIHtcbiAgICAvKiogaGVybyAqL1xuICAgIGhlcm9JZCxcbiAgICBvbkNoYW5nZUhlcm8sXG4gICAgcmFyaXR5LFxuICAgIHNldFJhcml0eSxcbiAgICBpdixcbiAgICBzZXRJVixcbiAgICBtZXJnZSxcbiAgICBzZXRNZXJnZSxcbiAgICBkcmFnb25mbG93ZXIsXG4gICAgc2V0RHJhZ29uZmxvd2VyLFxuICAgIGJsZXNzaW5nLFxuICAgIHNldEJsZXNzaW5nLFxuICAgIHN1cHBvcnQsXG4gICAgdG9nZ2xlU3VwcG9ydCxcbiAgICBhcmVuYSxcbiAgICB0b2dnbGVBcmVuYSxcbiAgICByZXNwbGVuZGVudCxcbiAgICB0b2dnbGVSZXNwbGVuZGVudCxcbiAgICAvKiogc2tpbGxzICovXG4gICAgd2VhcG9uLFxuICAgIHNldFdlYXBvbixcbiAgICByZWZpbmUsXG4gICAgc2V0UmVmaW5lLFxuICAgIGFzc2lzdCxcbiAgICBzZXRBc3Npc3QsXG4gICAgc3BlY2lhbCxcbiAgICBzZXRTcGVjaWFsLFxuICAgIHNraWxsQSxcbiAgICBzZXRTa2lsbEEsXG4gICAgc2tpbGxCLFxuICAgIHNldFNraWxsQixcbiAgICBza2lsbEMsXG4gICAgc2V0U2tpbGxDLFxuICAgIHNlYWwsXG4gICAgc2V0U2VhbCxcbiAgICBzZXREZWZhdWx0V2VhcG9uLFxuICAgIHNldERlZmF1bHRBc3Npc3QsXG4gICAgc2V0RGVmYXVsdFNwZWNpYWwsXG4gICAgc2V0RGVmYXVsdFNraWxsQSxcbiAgICBzZXREZWZhdWx0U2tpbGxCLFxuICAgIHNldERlZmF1bHRTa2lsbEMsXG4gICAgc2V0QWxsU2tpbGxEZWZhdWx0LFxuICAgIC8qKiBwdXJlIHFvcyB1aSAqL1xuICAgIGx2MSxcbiAgICB0b2dnbGVMdjEsXG4gICAgbWF4U2tpbGwsXG4gICAgdG9nZ2xlTWF4U2tpbGwsXG4gICAgLyoqIGVkaXRvciAqL1xuICAgIGJnLFxuICAgIGVkaXRvcklzT3BlbixcbiAgICBvcGVuRWRpdG9yLFxuICAgIGNsb3NlRWRpdG9yLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==