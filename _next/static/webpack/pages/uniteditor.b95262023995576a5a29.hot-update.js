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
      var skillBst = data === null || data === void 0 ? void 0 : data.bst; // if (hero.blesser && data?.bbst) {
      //   skillBst = data?.bbst;
      // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2RhdGEtdXRpbHMudHN4Il0sIm5hbWVzIjpbImJhc2ljUmVmaW5lIiwiYXRrIiwic3BkIiwiZGVmIiwicmVzIiwiZ2V0U2tpbGxzIiwiaGVyb0RCIiwid2VhcG9uREIiLCJhc3Npc3REQiIsInNwZWNpYWxEQiIsInNraWxsQURCIiwic2tpbGxCREIiLCJza2lsbENEQiIsInNlYWxEQiIsImhlcm9JZCIsInNraWxscyIsIndlYXBvbiIsImdldFdlYXBvbiIsImFzc2lzdCIsImdldEFzc2lzdCIsInNwZWNpYWwiLCJnZXRTcGVjaWFsIiwic2tpbGxBIiwiZ2V0U2tpbGwiLCJza2lsbERCIiwic2tpbGxJZCIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJnZXRTZWFsIiwic2tpbGxLZXlzIiwiZ2V0U2tpbGxJY29ucyIsInJlZmluZSIsInNraWxsRGF0YSIsImljb25zIiwiZm9yRWFjaCIsInNraWxsS2V5IiwiZGF0YSIsImljb24iLCJyZWZpbmVJY29uIiwiZ2V0U2tpbGxJbmZvcyIsInJhcml0eSIsImhlcm8iLCJnZXRIZXJvIiwibmFtZXMiLCJhY2NlbGVyYXRlIiwic3BlY2lhbENEIiwiY2QiLCJzdGF0cyIsImhwIiwic3B0IiwiYnN0IiwiT2JqZWN0IiwiZW50cmllcyIsInNraWxsIiwibmFtZSIsIm10Iiwic3AiLCJza2lsbEJzdCIsIk1hdGgiLCJtYXgiLCJyZWZpbmVEYXRhIiwiZXhjbHVzaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEJDLEtBQUcsRUFBRSxLQURhO0FBRWxCQyxLQUFHLEVBQUUsS0FGYTtBQUdsQkMsS0FBRyxFQUFFLEtBSGE7QUFJbEJDLEtBQUcsRUFBRTtBQUphLENBQXBCOztBQU9BLFNBQVNDLFNBQVQsT0FzQkc7QUFBQSxNQXJCREMsTUFxQkMsUUFyQkRB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VSxJQUFJZ0IsVUFBVSxDQUFDZCxFQUFYLElBQWlCLENBQS9COztBQUNBLFFBQUksQ0FBQ2QsU0FBUyxDQUFDakIsTUFBVixDQUFpQjhDLFNBQXRCLEVBQWlDO0FBQy9CWixTQUFHLElBQUksRUFBUDtBQUNEOztBQUNELFFBQUlULE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2hCVSxTQUFHLEdBQUdRLElBQUksQ0FBQ0MsR0FBTCxDQUFTVCxHQUFULEVBQWNVLFVBQVUsQ0FBQ1YsR0FBWCxJQUFrQixDQUFoQyxDQUFOO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPO0FBQ0xQLFNBQUssRUFBTEEsS0FESztBQUVMSSxTQUFLLEVBQUxBLEtBRks7QUFHTEgsY0FBVSxFQUFWQSxVQUhLO0FBSUxDLGFBQVMsRUFBVEEsU0FKSztBQUtMSSxPQUFHLEVBQUhBLEdBTEs7QUFNTEMsT0FBRyxFQUFIQTtBQU5LLEdBQVA7QUFRRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLmI5NTI2MjAyMzk5NTU3NmE1YTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBc3Npc3QgfSBmcm9tICcuL2Fzc2lzdCc7XG5pbXBvcnQgeyBnZXRIZXJvIH0gZnJvbSAnLi9oZXJvZXMnO1xuaW1wb3J0IHsgZ2V0U2VhbCB9IGZyb20gJy4vc2VhbCc7XG5pbXBvcnQgeyBnZXRTa2lsbCB9IGZyb20gJy4vc2tpbGwnO1xuaW1wb3J0IHsgZ2V0U3BlY2lhbCB9IGZyb20gJy4vc3BlY2lhbCc7XG5pbXBvcnQge1xuICBUU2tpbGxJZHMsXG4gIFRTa2lsbE5hbWVzLFxuICBUSGVyb0RCLFxuICBUV2VhcG9uREIsXG4gIFRBc3Npc3REQixcbiAgVFNraWxsREIsXG4gIFRTZWFsREIsXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0V2VhcG9uIH0gZnJvbSAnLi93ZWFwb24nO1xuXG5jb25zdCBiYXNpY1JlZmluZSA9IHtcbiAgYXRrOiAnYXRrJyxcbiAgc3BkOiAnc3BkJyxcbiAgZGVmOiAnZGVmJyxcbiAgcmVzOiAncmVzJyxcbn07XG5cbmZ1bmN0aW9uIGdldFNraWxscyh7XG4gIGhlcm9EQixcbiAgd2VhcG9uREIsXG4gIGFzc2lzdERCLFxuICBzcGVjaWFsREIsXG4gIHNraWxsQURCLFxuICBza2lsbEJEQixcbiAgc2tpbGxDREIsXG4gIHNlYWxEQixcbiAgaGVyb0lkLFxuICBza2lsbHMsXG59OiB7XG4gIGhlcm9EQjogVEhlcm9EQjtcbiAgd2VhcG9uREI6IFRXZWFwb25EQjtcbiAgYXNzaXN0REI6IFRBc3Npc3REQjtcbiAgc3BlY2lhbERCOiBUU2tpbGxEQjtcbiAgc2tpbGxBREI6IFRTa2lsbERCO1xuICBza2lsbEJEQjogVFNraWxsREI7XG4gIHNraWxsQ0RCOiBUU2tpbGxEQjtcbiAgc2VhbERCOiBUU2VhbERCO1xuICBza2lsbHM6IFRTa2lsbElkcztcbiAgaGVyb0lkOiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiB7XG4gICAgd2VhcG9uOiBnZXRXZWFwb24oeyBoZXJvREIsIHdlYXBvbkRCLCBoZXJvSWQsIHdlYXBvbjogc2tpbGxzLndlYXBvbiB9KSxcbiAgICBhc3Npc3Q6IGdldEFzc2lzdCh7IGFzc2lzdERCLCBhc3Npc3Q6IHNraWxscy5hc3Npc3QgfSksXG4gICAgc3BlY2lhbDogZ2V0U3BlY2lhbCh7IHNwZWNpYWxEQiwgc3BlY2lhbDogc2tpbGxzLnNwZWNpYWwgfSksXG4gICAgc2tpbGxBOiBnZXRTa2lsbCh7IHNraWxsREI6IHNraWxsQURCLCBza2lsbElkOiBza2lsbHMuc2tpbGxBIH0pLFxuICAgIHNraWxsQjogZ2V0U2tpbGwoeyBza2lsbERCOiBza2lsbEJEQiwgc2tpbGxJZDogc2tpbGxzLnNraWxsQiB9KSxcbiAgICBza2lsbEM6IGdldFNraWxsKHsgc2tpbGxEQjogc2tpbGxDREIsIHNraWxsSWQ6IHNraWxscy5za2lsbEMgfSksXG4gICAgc2VhbDogZ2V0U2VhbCh7IHNlYWxEQjogc2VhbERCLCBzZWFsOiBza2lsbHMuc2VhbCB9KSxcbiAgfTtcbn1cblxuY29uc3Qgc2tpbGxLZXlzID0gWydhc3Npc3QnLCAnc3BlY2lhbCcsICdza2lsbEEnLCAnc2tpbGxCJywgJ3NraWxsQycsICdzZWFsJ107XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTa2lsbEljb25zKHtcbiAgaGVyb0RCLFxuICB3ZWFwb25EQixcbiAgYXNzaXN0REIsXG4gIHNwZWNpYWxEQixcbiAgc2tpbGxBREIsXG4gIHNraWxsQkRCLFxuICBza2lsbENEQixcbiAgc2VhbERCLFxuICBoZXJvSWQsXG4gIHNraWxscyxcbiAgcmVmaW5lLFxufToge1xuICBoZXJvREI6IFRIZXJvREI7XG4gIHdlYXBvbkRCOiBUV2VhcG9uREI7XG4gIGFzc2lzdERCOiBUQXNzaXN0REI7XG4gIHNwZWNpYWxEQjogVFNraWxsREI7XG4gIHNraWxsQURCOiBUU2tpbGxEQjtcbiAgc2tpbGxCREI6IFRTa2lsbERCO1xuICBza2lsbENEQjogVFNraWxsREI7XG4gIHNlYWxEQjogVFNlYWxEQjtcbiAgc2tpbGxzOiBUU2tpbGxJZHM7XG4gIGhlcm9JZDogc3RyaW5nO1xuICByZWZpbmU6IHN0cmluZztcbn0pIHtcbiAgY29uc3Qgc2tpbGxEYXRhID0gZ2V0U2tpbGxzKHtcbiAgICBoZXJvREIsXG4gICAgd2VhcG9uREIsXG4gICAgYXNzaXN0REIsXG4gICAgc3BlY2lhbERCLFxuICAgIHNraWxsQURCLFxuICAgIHNraWxsQkRCLFxuICAgIHNraWxsQ0RCLFxuICAgIHNlYWxEQixcbiAgICBoZXJvSWQsXG4gICAgc2tpbGxzLFxuICB9KTtcbiAgY29uc3QgaWNvbnM6IHsgW3NraWxsSWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIHNraWxsS2V5cy5mb3JFYWNoKChza2lsbEtleSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBza2lsbERhdGFbc2tpbGxLZXldO1xuICAgIGljb25zW3NraWxsS2V5XSA9IGRhdGE/Lmljb24gJiYgYC9za2lsbHMvJHtkYXRhLmljb259YDtcbiAgfSk7XG4gIGlmICghIXJlZmluZSAmJiByZWZpbmUgIT09ICctJykge1xuICAgIGNvbnN0IHJlZmluZUljb24gPVxuICAgICAgYmFzaWNSZWZpbmVbcmVmaW5lXSB8fCBza2lsbERhdGEud2VhcG9uLnJlZmluZT8uW3JlZmluZV0/Lmljb247XG4gICAgaWYgKHJlZmluZUljb24pIHtcbiAgICAgIGljb25zLndlYXBvbiA9IGAvc2tpbGxzL3dlYXBvbi8ke3JlZmluZUljb259LnBuZ2A7XG4gICAgfVxuICB9XG4gIHJldHVybiBpY29ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNraWxsSW5mb3Moe1xuICBoZXJvREIsXG4gIHdlYXBvbkRCLFxuICBhc3Npc3REQixcbiAgc3BlY2lhbERCLFxuICBza2lsbEFEQixcbiAgc2tpbGxCREIsXG4gIHNraWxsQ0RCLFxuICBzZWFsREIsXG4gIGhlcm9JZCxcbiAgc2tpbGxzLFxuICByZWZpbmUsXG4gIHJhcml0eSxcbn06IHtcbiAgaGVyb0RCOiBUSGVyb0RCO1xuICB3ZWFwb25EQjogVFdlYXBvbkRCO1xuICBhc3Npc3REQjogVEFzc2lzdERCO1xuICBzcGVjaWFsREI6IFRTa2lsbERCO1xuICBza2lsbEFEQjogVFNraWxsREI7XG4gIHNraWxsQkRCOiBUU2tpbGxEQjtcbiAgc2tpbGxDREI6IFRTa2lsbERCO1xuICBzZWFsREI6IFRTZWFsREI7XG4gIHNraWxsczogVFNraWxsSWRzO1xuICBoZXJvSWQ6IHN0cmluZztcbiAgcmVmaW5lOiBzdHJpbmc7XG4gIHJhcml0eTogNSB8IDQ7XG59KSB7XG4gIGNvbnN0IGhlcm8gPSBnZXRIZXJvKGhlcm9EQiwgaGVyb0lkKTtcblxuICBjb25zdCBza2lsbERhdGEgPSBnZXRTa2lsbHMoe1xuICAgIGhlcm9EQixcbiAgICB3ZWFwb25EQixcbiAgICBhc3Npc3REQixcbiAgICBzcGVjaWFsREIsXG4gICAgc2tpbGxBREIsXG4gICAgc2tpbGxCREIsXG4gICAgc2tpbGxDREIsXG4gICAgc2VhbERCLFxuICAgIGhlcm9JZCxcbiAgICBza2lsbHMsXG4gIH0pO1xuXG4gIGNvbnN0IG5hbWVzOiBUU2tpbGxOYW1lcyA9IHtcbiAgICB3ZWFwb246ICctJyxcbiAgICBhc3Npc3Q6ICctJyxcbiAgICBzcGVjaWFsOiAnLScsXG4gICAgc2tpbGxBOiAnLScsXG4gICAgc2tpbGxCOiAnLScsXG4gICAgc2tpbGxDOiAnLScsXG4gICAgc2VhbDogJy0nLFxuICB9O1xuICBsZXQgYWNjZWxlcmF0ZSA9IDA7XG4gIGNvbnN0IHNwZWNpYWxDRCA9IHNraWxsRGF0YS5zcGVjaWFsPy5jZCB8fCAwO1xuICBhY2NlbGVyYXRlICs9IHNraWxsRGF0YS53ZWFwb24/LmNkIHx8IDA7XG4gIGFjY2VsZXJhdGUgKz0gc2tpbGxEYXRhLmFzc2lzdD8uY2QgfHwgMDtcbiAgYWNjZWxlcmF0ZSArPSBza2lsbERhdGEuc2tpbGxBPy5jZCB8fCAwO1xuICBhY2NlbGVyYXRlICs9IHNraWxsRGF0YS5za2lsbEI/LmNkIHx8IDA7XG4gIGFjY2VsZXJhdGUgKz0gc2tpbGxEYXRhLnNraWxsQz8uY2QgfHwgMDtcbiAgYWNjZWxlcmF0ZSArPSBza2lsbERhdGEuc2VhbD8uY2QgfHwgMDtcbiAgY29uc3Qgc3RhdHMgPSB7IGhwOiAwLCBhdGs6IDAsIHNwZDogMCwgZGVmOiAwLCByZXM6IDAgfTtcbiAgbGV0IHNwdCA9IDA7XG4gIGxldCBic3QgPSAwO1xuICBPYmplY3QuZW50cmllcyhza2lsbERhdGEpLmZvckVhY2goKFtza2lsbCwgZGF0YV0pID0+IHtcbiAgICBuYW1lc1tza2lsbF0gPSBkYXRhPy5uYW1lIHx8ICctJztcbiAgICBzdGF0cy5ocCArPSBkYXRhPy5ocCB8fCAwO1xuICAgIHN0YXRzLmF0ayArPSAoZGF0YT8ubXQgfHwgMCkgKyAoZGF0YT8uYXRrIHx8IDApO1xuICAgIHN0YXRzLnNwZCArPSBkYXRhPy5zcGQgfHwgMDtcbiAgICBzdGF0cy5kZWYgKz0gZGF0YT8uZGVmIHx8IDA7XG4gICAgc3RhdHMucmVzICs9IGRhdGE/LnJlcyB8fCAwO1xuICAgIHNwdCArPSBkYXRhPy5zcCB8fCAwO1xuICAgIGlmIChyYXJpdHkgPT09IDUpIHtcbiAgICAgIGxldCBza2lsbEJzdCA9IGRhdGE/LmJzdDtcbiAgICAgIC8vIGlmIChoZXJvLmJsZXNzZXIgJiYgZGF0YT8uYmJzdCkge1xuICAgICAgLy8gICBza2lsbEJzdCA9IGRhdGE/LmJic3Q7XG4gICAgICAvLyB9XG4gICAgICBic3QgPSBNYXRoLm1heChza2lsbEJzdCB8fCAwLCBic3QpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgcmVmaW5lRGF0YSA9IHNraWxsRGF0YS53ZWFwb24/LnJlZmluZT8uW3JlZmluZV07XG5cbiAgaWYgKHJlZmluZURhdGEpIHtcbiAgICBzdGF0cy5ocCArPSByZWZpbmVEYXRhLmhwIHx8IDA7XG4gICAgc3RhdHMuYXRrICs9IChyZWZpbmVEYXRhLm10IHx8IDApICsgKHJlZmluZURhdGEuYXRrIHx8IDApO1xuICAgIHN0YXRzLnNwZCArPSByZWZpbmVEYXRhLnNwZCB8fCAwO1xuICAgIHN0YXRzLmRlZiArPSByZWZpbmVEYXRhLmRlZiB8fCAwO1xuICAgIHN0YXRzLnJlcyArPSByZWZpbmVEYXRhLnJlcyB8fCAwO1xuICAgIGFjY2VsZXJhdGUgKz0gcmVmaW5lRGF0YS5jZCB8fCAwO1xuICAgIGlmICghc2tpbGxEYXRhLndlYXBvbi5leGNsdXNpdmUpIHtcbiAgICAgIHNwdCArPSA1MDtcbiAgICB9XG4gICAgaWYgKHJhcml0eSA9PT0gNSkge1xuICAgICAgYnN0ID0gTWF0aC5tYXgoYnN0LCByZWZpbmVEYXRhLmJzdCB8fCAwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBuYW1lcyxcbiAgICBzdGF0cyxcbiAgICBhY2NlbGVyYXRlLFxuICAgIHNwZWNpYWxDRCxcbiAgICBzcHQsXG4gICAgYnN0LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==