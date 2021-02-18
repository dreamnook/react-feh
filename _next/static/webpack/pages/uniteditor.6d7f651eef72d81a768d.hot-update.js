webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/utils/data-utils.tsx":
/*!**********************************!*\
  !*** ./app/utils/data-utils.tsx ***!
  \**********************************/
/*! exports provided: getSkillIcons, getSkillInfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkillIcons", function() { return getSkillIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkillInfos", function() { return getSkillInfos; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _assist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assist */ "./app/utils/assist.tsx");
/* harmony import */ var _heroes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heroes */ "./app/utils/heroes.tsx");
/* harmony import */ var _seal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seal */ "./app/utils/seal.tsx");
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill */ "./app/utils/skill.tsx");
/* harmony import */ var _special__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./special */ "./app/utils/special.tsx");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weapon */ "./app/utils/weapon.tsx");







var basicRefine = {
  atk: 'atk',
  spd: 'spd',
  def: 'def',
  res: 'res'
};

function getSkills(_ref) {
  var heroDB = _ref.heroDB,
      weaponDB = _ref.weaponDB,
      assistDB = _ref.assistDB,
      specialDB = _ref.specialDB,
      skillADB = _ref.skillADB,
      skillBDB = _ref.skillBDB,
      skillCDB = _ref.skillCDB,
      sealDB = _ref.sealDB,
      heroId = _ref.heroId,
      skills = _ref.skills;
  return {
    weapon: Object(_weapon__WEBPACK_IMPORTED_MODULE_6__["getWeapon"])({
      heroDB: heroDB,
      weaponDB: weaponDB,
      heroId: heroId,
      weapon: skills.weapon
    }),
    assist: Object(_assist__WEBPACK_IMPORTED_MODULE_1__["getAssist"])({
      assistDB: assistDB,
      assist: skills.assist
    }),
    special: Object(_special__WEBPACK_IMPORTED_MODULE_5__["getSpecial"])({
      specialDB: specialDB,
      special: skills.special
    }),
    skillA: Object(_skill__WEBPACK_IMPORTED_MODULE_4__["getSkill"])({
      skillDB: skillADB,
      skillId: skills.skillA
    }),
    skillB: Object(_skill__WEBPACK_IMPORTED_MODULE_4__["getSkill"])({
      skillDB: skillBDB,
      skillId: skills.skillB
    }),
    skillC: Object(_skill__WEBPACK_IMPORTED_MODULE_4__["getSkill"])({
      skillDB: skillCDB,
      skillId: skills.skillC
    }),
    seal: Object(_seal__WEBPACK_IMPORTED_MODULE_3__["getSeal"])({
      sealDB: sealDB,
      seal: skills.seal
    })
  };
}

var skillKeys = ['assist', 'special', 'skillA', 'skillB', 'skillC', 'seal'];
function getSkillIcons(_ref2) {
  var heroDB = _ref2.heroDB,
      weaponDB = _ref2.weaponDB,
      assistDB = _ref2.assistDB,
      specialDB = _ref2.specialDB,
      skillADB = _ref2.skillADB,
      skillBDB = _ref2.skillBDB,
      skillCDB = _ref2.skillCDB,
      sealDB = _ref2.sealDB,
      heroId = _ref2.heroId,
      skills = _ref2.skills,
      refine = _ref2.refine;
  var skillData = getSkills({
    heroDB: heroDB,
    weaponDB: weaponDB,
    assistDB: assistDB,
    specialDB: specialDB,
    skillADB: skillADB,
    skillBDB: skillBDB,
    skillCDB: skillCDB,
    sealDB: sealDB,
    heroId: heroId,
    skills: skills
  });
  var icons = {};
  skillKeys.forEach(function (skillKey) {
    var data = skillData[skillKey];
    icons[skillKey] = (data === null || data === void 0 ? void 0 : data.icon) && "/skills/".concat(data.icon);
  });

  if (!!refine && refine !== '-') {
    var _skillData$weapon$ref, _skillData$weapon$ref2;

    var refineIcon = basicRefine[refine] || ((_skillData$weapon$ref = skillData.weapon.refine) === null || _skillData$weapon$ref === void 0 ? void 0 : (_skillData$weapon$ref2 = _skillData$weapon$ref[refine]) === null || _skillData$weapon$ref2 === void 0 ? void 0 : _skillData$weapon$ref2.icon);

    if (refineIcon) {
      icons.weapon = "/skills/weapon/".concat(refineIcon, ".png");
    }
  }

  return icons;
}
function getSkillInfos(_ref3) {
  var _skillData$special, _skillData$weapon, _skillData$assist, _skillData$skillA, _skillData$skillB, _skillData$skillC, _skillData$seal, _skillData$weapon2, _skillData$weapon2$re;

  var heroDB = _ref3.heroDB,
      weaponDB = _ref3.weaponDB,
      assistDB = _ref3.assistDB,
      specialDB = _ref3.specialDB,
      skillADB = _ref3.skillADB,
      skillBDB = _ref3.skillBDB,
      skillCDB = _ref3.skillCDB,
      sealDB = _ref3.sealDB,
      heroId = _ref3.heroId,
      skills = _ref3.skills,
      refine = _ref3.refine,
      rarity = _ref3.rarity;
  var hero = Object(_heroes__WEBPACK_IMPORTED_MODULE_2__["getHero"])(heroDB, heroId);
  var skillData = getSkills({
    heroDB: heroDB,
    weaponDB: weaponDB,
    assistDB: assistDB,
    specialDB: specialDB,
    skillADB: skillADB,
    skillBDB: skillBDB,
    skillCDB: skillCDB,
    sealDB: sealDB,
    heroId: heroId,
    skills: skills
  });
  var names = {
    weapon: '-',
    assist: '-',
    special: '-',
    skillA: '-',
    skillB: '-',
    skillC: '-',
    seal: '-'
  };
  var accelerate = 0;
  var specialCD = ((_skillData$special = skillData.special) === null || _skillData$special === void 0 ? void 0 : _skillData$special.cd) || 0;
  accelerate += ((_skillData$weapon = skillData.weapon) === null || _skillData$weapon === void 0 ? void 0 : _skillData$weapon.cd) || 0;
  accelerate += ((_skillData$assist = skillData.assist) === null || _skillData$assist === void 0 ? void 0 : _skillData$assist.cd) || 0;
  accelerate += ((_skillData$skillA = skillData.skillA) === null || _skillData$skillA === void 0 ? void 0 : _skillData$skillA.cd) || 0;
  accelerate += ((_skillData$skillB = skillData.skillB) === null || _skillData$skillB === void 0 ? void 0 : _skillData$skillB.cd) || 0;
  accelerate += ((_skillData$skillC = skillData.skillC) === null || _skillData$skillC === void 0 ? void 0 : _skillData$skillC.cd) || 0;
  accelerate += ((_skillData$seal = skillData.seal) === null || _skillData$seal === void 0 ? void 0 : _skillData$seal.cd) || 0;
  var stats = {
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  };
  var spt = 0;
  var bst = 0;
  Object.entries(skillData).forEach(function (_ref4) {
    var _ref5 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, 2),
        skill = _ref5[0],
        data = _ref5[1];

    names[skill] = (data === null || data === void 0 ? void 0 : data.name) || '-';
    stats.hp += (data === null || data === void 0 ? void 0 : data.hp) || 0;
    stats.atk += ((data === null || data === void 0 ? void 0 : data.mt) || 0) + ((data === null || data === void 0 ? void 0 : data.atk) || 0);
    stats.spd += (data === null || data === void 0 ? void 0 : data.spd) || 0;
    stats.def += (data === null || data === void 0 ? void 0 : data.def) || 0;
    stats.res += (data === null || data === void 0 ? void 0 : data.res) || 0;
    spt += (data === null || data === void 0 ? void 0 : data.sp) || 0;

    if (rarity === 5) {
      var skillBst = data === null || data === void 0 ? void 0 : data.bst;

      if (hero.blesser && (data === null || data === void 0 ? void 0 : data.bbst)) {
        skillBst = data === null || data === void 0 ? void 0 : data.bbst;
      }

      bst = Math.max(skillBst || 0, bst);
    }
  });
  var refineData = (_skillData$weapon2 = skillData.weapon) === null || _skillData$weapon2 === void 0 ? void 0 : (_skillData$weapon2$re = _skillData$weapon2.refine) === null || _skillData$weapon2$re === void 0 ? void 0 : _skillData$weapon2$re[refine];

  if (refineData) {
    stats.hp += refineData.hp || 0;
    stats.atk += (refineData.mt || 0) + (refineData.atk || 0);
    stats.spd += refineData.spd || 0;
    stats.def += refineData.def || 0;
    stats.res += refineData.res || 0;
    accelerate += refineData.cd || 0;

    if (!skillData.weapon.exclusive) {
      spt += 50;
    }

    if (rarity === 5) {
      bst = Math.max(bst, refineData.bst || 0);
    }
  }

  return {
    names: names,
    stats: stats,
    accelerate: accelerate,
    specialCD: specialCD,
    spt: spt,
    bst: bst
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2RhdGEtdXRpbHMudHN4Il0sIm5hbWVzIjpbImJhc2ljUmVmaW5lIiwiYXRrIiwic3BkIiwiZGVmIiwicmVzIiwiZ2V0U2tpbGxzIiwiaGVyb0RCIiwid2VhcG9uREIiLCJhc3Npc3REQiIsInNwZWNpYWxEQiIsInNraWxsQURCIiwic2tpbGxCREIiLCJza2lsbENEQiIsInNlYWxEQiIsImhlcm9JZCIsInNraWxscyIsIndlYXBvbiIsImdldFdlYXBvbiIsImFzc2lzdCIsImdldEFzc2lzdCIsInNwZWNpYWwiLCJnZXRTcGVjaWFsIiwic2tpbGxBIiwiZ2V0U2tpbGwiLCJza2lsbERCIiwic2tpbGxJZCIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJnZXRTZWFsIiwic2tpbGxLZXlzIiwiZ2V0U2tpbGxJY29ucyIsInJlZmluZSIsInNraWxsRGF0YSIsImljb25zIiwiZm9yRWFjaCIsInNraWxsS2V5IiwiZGF0YSIsImljb24iLCJyZWZpbmVJY29uIiwiZ2V0U2tpbGxJbmZvcyIsInJhcml0eSIsImhlcm8iLCJnZXRIZXJvIiwibmFtZXMiLCJhY2NlbGVyYXRlIiwic3BlY2lhbENEIiwiY2QiLCJzdGF0cyIsImhwIiwic3B0IiwiYnN0IiwiT2JqZWN0IiwiZW50cmllcyIsInNraWxsIiwibmFtZSIsIm10Iiwic3AiLCJza2lsbEJzdCIsImJsZXNzZXIiLCJiYnN0IiwiTWF0aCIsIm1heCIsInJlZmluZURhdGEiLCJleGNsdXNpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUVBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsS0FBRyxFQUFFLEtBRGE7QUFFbEJDLEtBQUcsRUFBRSxLQUZhO0FBR2xCQyxLQUFHLEVBQUUsS0FIYTtBQUlsQkMsS0FBRyxFQUFFO0FBSmEsQ0FBcEI7O0FBT0EsU0FBU0MsU0FBVCxPQXNCRztBQUFBLE1B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Q0FBQzdELEdBQVgsSUFBa0IsQ0FBL0I7QUFDQThDLFNBQUssQ0FBQzdDLEdBQU4sSUFBYTRELFVBQVUsQ0FBQzVELEdBQVgsSUFBa0IsQ0FBL0I7QUFDQTZDLFNBQUssQ0FBQzVDLEdBQU4sSUFBYTJELFVBQVUsQ0FBQzNELEdBQVgsSUFBa0IsQ0FBL0I7QUFDQXlDLGNBQVUsSUFBSWtCLFVBQVUsQ0FBQ2hCLEVBQVgsSUFBaUIsQ0FBL0I7O0FBQ0EsUUFBSSxDQUFDZCxTQUFTLENBQUNqQixNQUFWLENBQWlCZ0QsU0FBdEIsRUFBaUM7QUFDL0JkLFNBQUcsSUFBSSxFQUFQO0FBQ0Q7O0FBQ0QsUUFBSVQsTUFBTSxLQUFLLENBQWYsRUFBa0I7QUFDaEJVLFNBQUcsR0FBR1UsSUFBSSxDQUFDQyxHQUFMLENBQVNYLEdBQVQsRUFBY1ksVUFBVSxDQUFDWixHQUFYLElBQWtCLENBQWhDLENBQU47QUFDRDtBQUNGOztBQUNELFNBQU87QUFDTFAsU0FBSyxFQUFMQSxLQURLO0FBRUxJLFNBQUssRUFBTEEsS0FGSztBQUdMSCxjQUFVLEVBQVZBLFVBSEs7QUFJTEMsYUFBUyxFQUFUQSxTQUpLO0FBS0xJLE9BQUcsRUFBSEEsR0FMSztBQU1MQyxPQUFHLEVBQUhBO0FBTkssR0FBUDtBQVFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuNmQ3ZjY1MWVlZjcyZDgxYTc2OGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFzc2lzdCB9IGZyb20gJy4vYXNzaXN0JztcbmltcG9ydCB7IGdldEhlcm8gfSBmcm9tICcuL2hlcm9lcyc7XG5pbXBvcnQgeyBnZXRTZWFsIH0gZnJvbSAnLi9zZWFsJztcbmltcG9ydCB7IGdldFNraWxsIH0gZnJvbSAnLi9za2lsbCc7XG5pbXBvcnQgeyBnZXRTcGVjaWFsIH0gZnJvbSAnLi9zcGVjaWFsJztcbmltcG9ydCB7XG4gIFRTa2lsbElkcyxcbiAgVFNraWxsTmFtZXMsXG4gIFRIZXJvREIsXG4gIFRXZWFwb25EQixcbiAgVEFzc2lzdERCLFxuICBUU2tpbGxEQixcbiAgVFNlYWxEQixcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRXZWFwb24gfSBmcm9tICcuL3dlYXBvbic7XG5cbmNvbnN0IGJhc2ljUmVmaW5lID0ge1xuICBhdGs6ICdhdGsnLFxuICBzcGQ6ICdzcGQnLFxuICBkZWY6ICdkZWYnLFxuICByZXM6ICdyZXMnLFxufTtcblxuZnVuY3Rpb24gZ2V0U2tpbGxzKHtcbiAgaGVyb0RCLFxuICB3ZWFwb25EQixcbiAgYXNzaXN0REIsXG4gIHNwZWNpYWxEQixcbiAgc2tpbGxBREIsXG4gIHNraWxsQkRCLFxuICBza2lsbENEQixcbiAgc2VhbERCLFxuICBoZXJvSWQsXG4gIHNraWxscyxcbn06IHtcbiAgaGVyb0RCOiBUSGVyb0RCO1xuICB3ZWFwb25EQjogVFdlYXBvbkRCO1xuICBhc3Npc3REQjogVEFzc2lzdERCO1xuICBzcGVjaWFsREI6IFRTa2lsbERCO1xuICBza2lsbEFEQjogVFNraWxsREI7XG4gIHNraWxsQkRCOiBUU2tpbGxEQjtcbiAgc2tpbGxDREI6IFRTa2lsbERCO1xuICBzZWFsREI6IFRTZWFsREI7XG4gIHNraWxsczogVFNraWxsSWRzO1xuICBoZXJvSWQ6IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIHtcbiAgICB3ZWFwb246IGdldFdlYXBvbih7IGhlcm9EQiwgd2VhcG9uREIsIGhlcm9JZCwgd2VhcG9uOiBza2lsbHMud2VhcG9uIH0pLFxuICAgIGFzc2lzdDogZ2V0QXNzaXN0KHsgYXNzaXN0REIsIGFzc2lzdDogc2tpbGxzLmFzc2lzdCB9KSxcbiAgICBzcGVjaWFsOiBnZXRTcGVjaWFsKHsgc3BlY2lhbERCLCBzcGVjaWFsOiBza2lsbHMuc3BlY2lhbCB9KSxcbiAgICBza2lsbEE6IGdldFNraWxsKHsgc2tpbGxEQjogc2tpbGxBREIsIHNraWxsSWQ6IHNraWxscy5za2lsbEEgfSksXG4gICAgc2tpbGxCOiBnZXRTa2lsbCh7IHNraWxsREI6IHNraWxsQkRCLCBza2lsbElkOiBza2lsbHMuc2tpbGxCIH0pLFxuICAgIHNraWxsQzogZ2V0U2tpbGwoeyBza2lsbERCOiBza2lsbENEQiwgc2tpbGxJZDogc2tpbGxzLnNraWxsQyB9KSxcbiAgICBzZWFsOiBnZXRTZWFsKHsgc2VhbERCOiBzZWFsREIsIHNlYWw6IHNraWxscy5zZWFsIH0pLFxuICB9O1xufVxuXG5jb25zdCBza2lsbEtleXMgPSBbJ2Fzc2lzdCcsICdzcGVjaWFsJywgJ3NraWxsQScsICdza2lsbEInLCAnc2tpbGxDJywgJ3NlYWwnXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNraWxsSWNvbnMoe1xuICBoZXJvREIsXG4gIHdlYXBvbkRCLFxuICBhc3Npc3REQixcbiAgc3BlY2lhbERCLFxuICBza2lsbEFEQixcbiAgc2tpbGxCREIsXG4gIHNraWxsQ0RCLFxuICBzZWFsREIsXG4gIGhlcm9JZCxcbiAgc2tpbGxzLFxuICByZWZpbmUsXG59OiB7XG4gIGhlcm9EQjogVEhlcm9EQjtcbiAgd2VhcG9uREI6IFRXZWFwb25EQjtcbiAgYXNzaXN0REI6IFRBc3Npc3REQjtcbiAgc3BlY2lhbERCOiBUU2tpbGxEQjtcbiAgc2tpbGxBREI6IFRTa2lsbERCO1xuICBza2lsbEJEQjogVFNraWxsREI7XG4gIHNraWxsQ0RCOiBUU2tpbGxEQjtcbiAgc2VhbERCOiBUU2VhbERCO1xuICBza2lsbHM6IFRTa2lsbElkcztcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHJlZmluZTogc3RyaW5nO1xufSkge1xuICBjb25zdCBza2lsbERhdGEgPSBnZXRTa2lsbHMoe1xuICAgIGhlcm9EQixcbiAgICB3ZWFwb25EQixcbiAgICBhc3Npc3REQixcbiAgICBzcGVjaWFsREIsXG4gICAgc2tpbGxBREIsXG4gICAgc2tpbGxCREIsXG4gICAgc2tpbGxDREIsXG4gICAgc2VhbERCLFxuICAgIGhlcm9JZCxcbiAgICBza2lsbHMsXG4gIH0pO1xuICBjb25zdCBpY29uczogeyBbc2tpbGxJZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgc2tpbGxLZXlzLmZvckVhY2goKHNraWxsS2V5KSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHNraWxsRGF0YVtza2lsbEtleV07XG4gICAgaWNvbnNbc2tpbGxLZXldID0gZGF0YT8uaWNvbiAmJiBgL3NraWxscy8ke2RhdGEuaWNvbn1gO1xuICB9KTtcbiAgaWYgKCEhcmVmaW5lICYmIHJlZmluZSAhPT0gJy0nKSB7XG4gICAgY29uc3QgcmVmaW5lSWNvbiA9XG4gICAgICBiYXNpY1JlZmluZVtyZWZpbmVdIHx8IHNraWxsRGF0YS53ZWFwb24ucmVmaW5lPy5bcmVmaW5lXT8uaWNvbjtcbiAgICBpZiAocmVmaW5lSWNvbikge1xuICAgICAgaWNvbnMud2VhcG9uID0gYC9za2lsbHMvd2VhcG9uLyR7cmVmaW5lSWNvbn0ucG5nYDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGljb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2tpbGxJbmZvcyh7XG4gIGhlcm9EQixcbiAgd2VhcG9uREIsXG4gIGFzc2lzdERCLFxuICBzcGVjaWFsREIsXG4gIHNraWxsQURCLFxuICBza2lsbEJEQixcbiAgc2tpbGxDREIsXG4gIHNlYWxEQixcbiAgaGVyb0lkLFxuICBza2lsbHMsXG4gIHJlZmluZSxcbiAgcmFyaXR5LFxufToge1xuICBoZXJvREI6IFRIZXJvREI7XG4gIHdlYXBvbkRCOiBUV2VhcG9uREI7XG4gIGFzc2lzdERCOiBUQXNzaXN0REI7XG4gIHNwZWNpYWxEQjogVFNraWxsREI7XG4gIHNraWxsQURCOiBUU2tpbGxEQjtcbiAgc2tpbGxCREI6IFRTa2lsbERCO1xuICBza2lsbENEQjogVFNraWxsREI7XG4gIHNlYWxEQjogVFNlYWxEQjtcbiAgc2tpbGxzOiBUU2tpbGxJZHM7XG4gIGhlcm9JZDogc3RyaW5nO1xuICByZWZpbmU6IHN0cmluZztcbiAgcmFyaXR5OiA1IHwgNDtcbn0pIHtcbiAgY29uc3QgaGVybyA9IGdldEhlcm8oaGVyb0RCLCBoZXJvSWQpO1xuXG4gIGNvbnN0IHNraWxsRGF0YSA9IGdldFNraWxscyh7XG4gICAgaGVyb0RCLFxuICAgIHdlYXBvbkRCLFxuICAgIGFzc2lzdERCLFxuICAgIHNwZWNpYWxEQixcbiAgICBza2lsbEFEQixcbiAgICBza2lsbEJEQixcbiAgICBza2lsbENEQixcbiAgICBzZWFsREIsXG4gICAgaGVyb0lkLFxuICAgIHNraWxscyxcbiAgfSk7XG5cbiAgY29uc3QgbmFtZXM6IFRTa2lsbE5hbWVzID0ge1xuICAgIHdlYXBvbjogJy0nLFxuICAgIGFzc2lzdDogJy0nLFxuICAgIHNwZWNpYWw6ICctJyxcbiAgICBza2lsbEE6ICctJyxcbiAgICBza2lsbEI6ICctJyxcbiAgICBza2lsbEM6ICctJyxcbiAgICBzZWFsOiAnLScsXG4gIH07XG4gIGxldCBhY2NlbGVyYXRlID0gMDtcbiAgY29uc3Qgc3BlY2lhbENEID0gc2tpbGxEYXRhLnNwZWNpYWw/LmNkIHx8IDA7XG4gIGFjY2VsZXJhdGUgKz0gc2tpbGxEYXRhLndlYXBvbj8uY2QgfHwgMDtcbiAgYWNjZWxlcmF0ZSArPSBza2lsbERhdGEuYXNzaXN0Py5jZCB8fCAwO1xuICBhY2NlbGVyYXRlICs9IHNraWxsRGF0YS5za2lsbEE/LmNkIHx8IDA7XG4gIGFjY2VsZXJhdGUgKz0gc2tpbGxEYXRhLnNraWxsQj8uY2QgfHwgMDtcbiAgYWNjZWxlcmF0ZSArPSBza2lsbERhdGEuc2tpbGxDPy5jZCB8fCAwO1xuICBhY2NlbGVyYXRlICs9IHNraWxsRGF0YS5zZWFsPy5jZCB8fCAwO1xuICBjb25zdCBzdGF0cyA9IHsgaHA6IDAsIGF0azogMCwgc3BkOiAwLCBkZWY6IDAsIHJlczogMCB9O1xuICBsZXQgc3B0ID0gMDtcbiAgbGV0IGJzdCA9IDA7XG4gIE9iamVjdC5lbnRyaWVzKHNraWxsRGF0YSkuZm9yRWFjaCgoW3NraWxsLCBkYXRhXSkgPT4ge1xuICAgIG5hbWVzW3NraWxsXSA9IGRhdGE/Lm5hbWUgfHwgJy0nO1xuICAgIHN0YXRzLmhwICs9IGRhdGE/LmhwIHx8IDA7XG4gICAgc3RhdHMuYXRrICs9IChkYXRhPy5tdCB8fCAwKSArIChkYXRhPy5hdGsgfHwgMCk7XG4gICAgc3RhdHMuc3BkICs9IGRhdGE/LnNwZCB8fCAwO1xuICAgIHN0YXRzLmRlZiArPSBkYXRhPy5kZWYgfHwgMDtcbiAgICBzdGF0cy5yZXMgKz0gZGF0YT8ucmVzIHx8IDA7XG4gICAgc3B0ICs9IGRhdGE/LnNwIHx8IDA7XG4gICAgaWYgKHJhcml0eSA9PT0gNSkge1xuICAgICAgbGV0IHNraWxsQnN0ID0gZGF0YT8uYnN0O1xuICAgICAgaWYgKGhlcm8uYmxlc3NlciAmJiBkYXRhPy5iYnN0KSB7XG4gICAgICAgIHNraWxsQnN0ID0gZGF0YT8uYmJzdDtcbiAgICAgIH1cbiAgICAgIGJzdCA9IE1hdGgubWF4KHNraWxsQnN0IHx8IDAsIGJzdCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCByZWZpbmVEYXRhID0gc2tpbGxEYXRhLndlYXBvbj8ucmVmaW5lPy5bcmVmaW5lXTtcblxuICBpZiAocmVmaW5lRGF0YSkge1xuICAgIHN0YXRzLmhwICs9IHJlZmluZURhdGEuaHAgfHwgMDtcbiAgICBzdGF0cy5hdGsgKz0gKHJlZmluZURhdGEubXQgfHwgMCkgKyAocmVmaW5lRGF0YS5hdGsgfHwgMCk7XG4gICAgc3RhdHMuc3BkICs9IHJlZmluZURhdGEuc3BkIHx8IDA7XG4gICAgc3RhdHMuZGVmICs9IHJlZmluZURhdGEuZGVmIHx8IDA7XG4gICAgc3RhdHMucmVzICs9IHJlZmluZURhdGEucmVzIHx8IDA7XG4gICAgYWNjZWxlcmF0ZSArPSByZWZpbmVEYXRhLmNkIHx8IDA7XG4gICAgaWYgKCFza2lsbERhdGEud2VhcG9uLmV4Y2x1c2l2ZSkge1xuICAgICAgc3B0ICs9IDUwO1xuICAgIH1cbiAgICBpZiAocmFyaXR5ID09PSA1KSB7XG4gICAgICBic3QgPSBNYXRoLm1heChic3QsIHJlZmluZURhdGEuYnN0IHx8IDApO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIG5hbWVzLFxuICAgIHN0YXRzLFxuICAgIGFjY2VsZXJhdGUsXG4gICAgc3BlY2lhbENELFxuICAgIHNwdCxcbiAgICBic3QsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9