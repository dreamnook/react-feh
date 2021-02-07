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
/* harmony import */ var _seal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seal */ "./app/utils/seal.tsx");
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill */ "./app/utils/skill.tsx");
/* harmony import */ var _special__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./special */ "./app/utils/special.tsx");
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weapon */ "./app/utils/weapon.tsx");






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
    weapon: Object(_weapon__WEBPACK_IMPORTED_MODULE_5__["getWeapon"])({
      heroDB: heroDB,
      weaponDB: weaponDB,
      heroId: heroId,
      weapon: skills.weapon
    }),
    assist: Object(_assist__WEBPACK_IMPORTED_MODULE_1__["getAssist"])({
      assistDB: assistDB,
      assist: skills.assist
    }),
    special: Object(_special__WEBPACK_IMPORTED_MODULE_4__["getSpecial"])({
      specialDB: specialDB,
      special: skills.special
    }),
    skillA: Object(_skill__WEBPACK_IMPORTED_MODULE_3__["getSkill"])({
      skillDB: skillADB,
      skillId: skills.skillA
    }),
    skillB: Object(_skill__WEBPACK_IMPORTED_MODULE_3__["getSkill"])({
      skillDB: skillBDB,
      skillId: skills.skillB
    }),
    skillC: Object(_skill__WEBPACK_IMPORTED_MODULE_3__["getSkill"])({
      skillDB: skillCDB,
      skillId: skills.skillC
    }),
    seal: Object(_seal__WEBPACK_IMPORTED_MODULE_2__["getSeal"])({
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
    icons[skillKey] = (data === null || data === void 0 ? void 0 : data.icon) && "skills/".concat(data.icon);
  });

  if (!!refine && refine !== '-') {
    var _skillData$weapon$ref, _skillData$weapon$ref2;

    var refineIcon = basicRefine[refine] || ((_skillData$weapon$ref = skillData.weapon.refine) === null || _skillData$weapon$ref === void 0 ? void 0 : (_skillData$weapon$ref2 = _skillData$weapon$ref[refine]) === null || _skillData$weapon$ref2 === void 0 ? void 0 : _skillData$weapon$ref2.icon);

    if (refineIcon) {
      icons.weapon = "skills/weapon/".concat(refineIcon, ".png");
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
      bst = Math.max((data === null || data === void 0 ? void 0 : data.bst) || 0, bst);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2RhdGEtdXRpbHMudHN4Il0sIm5hbWVzIjpbImJhc2ljUmVmaW5lIiwiYXRrIiwic3BkIiwiZGVmIiwicmVzIiwiZ2V0U2tpbGxzIiwiaGVyb0RCIiwid2VhcG9uREIiLCJhc3Npc3REQiIsInNwZWNpYWxEQiIsInNraWxsQURCIiwic2tpbGxCREIiLCJza2lsbENEQiIsInNlYWxEQiIsImhlcm9JZCIsInNraWxscyIsIndlYXBvbiIsImdldFdlYXBvbiIsImFzc2lzdCIsImdldEFzc2lzdCIsInNwZWNpYWwiLCJnZXRTcGVjaWFsIiwic2tpbGxBIiwiZ2V0U2tpbGwiLCJza2lsbERCIiwic2tpbGxJZCIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJnZXRTZWFsIiwic2tpbGxLZXlzIiwiZ2V0U2tpbGxJY29ucyIsInJlZmluZSIsInNraWxsRGF0YSIsImljb25zIiwiZm9yRWFjaCIsInNraWxsS2V5IiwiZGF0YSIsImljb24iLCJyZWZpbmVJY29uIiwiZ2V0U2tpbGxJbmZvcyIsInJhcml0eSIsIm5hbWVzIiwiYWNjZWxlcmF0ZSIsInNwZWNpYWxDRCIsImNkIiwic3RhdHMiLCJocCIsInNwdCIsImJzdCIsIk9iamVjdCIsImVudHJpZXMiLCJza2lsbCIsIm5hbWUiLCJtdCIsInNwIiwiTWF0aCIsIm1heCIsInJlZmluZURhdGEiLCJleGNsdXNpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUVBLElBQU1BLFdBQVcsR0FBRztBQUNsQkMsS0FBRyxFQUFFLEtBRGE7QUFFbEJDLEtBQUcsRUFBRSxLQUZhO0FBR2xCQyxLQUFHLEVBQUUsS0FIYTtBQUlsQkMsS0FBRyxFQUFFO0FBSmEsQ0FBcEI7O0FBT0EsU0FBU0MsU0FBVCxPQXNCRztBQUFBLE1BckJEQyxNQXFCQyxRQXJCREEsTUFxQkM7QUFBQSxNQXBCREMsUUFvQkMsUUFwQkRBLFFB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QUFLLENBQWYsRUFBa0I7QUFDaEJRLFNBQUcsR0FBR08sSUFBSSxDQUFDQyxHQUFMLENBQVNSLEdBQVQsRUFBY1MsVUFBVSxDQUFDVCxHQUFYLElBQWtCLENBQWhDLENBQU47QUFDRDtBQUNGOztBQUNELFNBQU87QUFDTFAsU0FBSyxFQUFMQSxLQURLO0FBRUxJLFNBQUssRUFBTEEsS0FGSztBQUdMSCxjQUFVLEVBQVZBLFVBSEs7QUFJTEMsYUFBUyxFQUFUQSxTQUpLO0FBS0xJLE9BQUcsRUFBSEEsR0FMSztBQU1MQyxPQUFHLEVBQUhBO0FBTkssR0FBUDtBQVFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuMDNhM2I4MDY0MWQ2Yzk2NTJmNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEFzc2lzdCB9IGZyb20gJy4vYXNzaXN0JztcbmltcG9ydCB7IGdldFNlYWwgfSBmcm9tICcuL3NlYWwnO1xuaW1wb3J0IHsgZ2V0U2tpbGwgfSBmcm9tICcuL3NraWxsJztcbmltcG9ydCB7IGdldFNwZWNpYWwgfSBmcm9tICcuL3NwZWNpYWwnO1xuaW1wb3J0IHtcbiAgVFNraWxsSWRzLFxuICBUU2tpbGxOYW1lcyxcbiAgVEhlcm9EQixcbiAgVFdlYXBvbkRCLFxuICBUQXNzaXN0REIsXG4gIFRTa2lsbERCLFxuICBUU2VhbERCLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFdlYXBvbiB9IGZyb20gJy4vd2VhcG9uJztcblxuY29uc3QgYmFzaWNSZWZpbmUgPSB7XG4gIGF0azogJ2F0aycsXG4gIHNwZDogJ3NwZCcsXG4gIGRlZjogJ2RlZicsXG4gIHJlczogJ3JlcycsXG59O1xuXG5mdW5jdGlvbiBnZXRTa2lsbHMoe1xuICBoZXJvREIsXG4gIHdlYXBvbkRCLFxuICBhc3Npc3REQixcbiAgc3BlY2lhbERCLFxuICBza2lsbEFEQixcbiAgc2tpbGxCREIsXG4gIHNraWxsQ0RCLFxuICBzZWFsREIsXG4gIGhlcm9JZCxcbiAgc2tpbGxzLFxufToge1xuICBoZXJvREI6IFRIZXJvREI7XG4gIHdlYXBvbkRCOiBUV2VhcG9uREI7XG4gIGFzc2lzdERCOiBUQXNzaXN0REI7XG4gIHNwZWNpYWxEQjogVFNraWxsREI7XG4gIHNraWxsQURCOiBUU2tpbGxEQjtcbiAgc2tpbGxCREI6IFRTa2lsbERCO1xuICBza2lsbENEQjogVFNraWxsREI7XG4gIHNlYWxEQjogVFNlYWxEQjtcbiAgc2tpbGxzOiBUU2tpbGxJZHM7XG4gIGhlcm9JZDogc3RyaW5nO1xufSkge1xuICByZXR1cm4ge1xuICAgIHdlYXBvbjogZ2V0V2VhcG9uKHsgaGVyb0RCLCB3ZWFwb25EQiwgaGVyb0lkLCB3ZWFwb246IHNraWxscy53ZWFwb24gfSksXG4gICAgYXNzaXN0OiBnZXRBc3Npc3QoeyBhc3Npc3REQiwgYXNzaXN0OiBza2lsbHMuYXNzaXN0IH0pLFxuICAgIHNwZWNpYWw6IGdldFNwZWNpYWwoeyBzcGVjaWFsREIsIHNwZWNpYWw6IHNraWxscy5zcGVjaWFsIH0pLFxuICAgIHNraWxsQTogZ2V0U2tpbGwoeyBza2lsbERCOiBza2lsbEFEQiwgc2tpbGxJZDogc2tpbGxzLnNraWxsQSB9KSxcbiAgICBza2lsbEI6IGdldFNraWxsKHsgc2tpbGxEQjogc2tpbGxCREIsIHNraWxsSWQ6IHNraWxscy5za2lsbEIgfSksXG4gICAgc2tpbGxDOiBnZXRTa2lsbCh7IHNraWxsREI6IHNraWxsQ0RCLCBza2lsbElkOiBza2lsbHMuc2tpbGxDIH0pLFxuICAgIHNlYWw6IGdldFNlYWwoeyBzZWFsREI6IHNlYWxEQiwgc2VhbDogc2tpbGxzLnNlYWwgfSksXG4gIH07XG59XG5cbmNvbnN0IHNraWxsS2V5cyA9IFsnYXNzaXN0JywgJ3NwZWNpYWwnLCAnc2tpbGxBJywgJ3NraWxsQicsICdza2lsbEMnLCAnc2VhbCddO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2tpbGxJY29ucyh7XG4gIGhlcm9EQixcbiAgd2VhcG9uREIsXG4gIGFzc2lzdERCLFxuICBzcGVjaWFsREIsXG4gIHNraWxsQURCLFxuICBza2lsbEJEQixcbiAgc2tpbGxDREIsXG4gIHNlYWxEQixcbiAgaGVyb0lkLFxuICBza2lsbHMsXG4gIHJlZmluZSxcbn06IHtcbiAgaGVyb0RCOiBUSGVyb0RCO1xuICB3ZWFwb25EQjogVFdlYXBvbkRCO1xuICBhc3Npc3REQjogVEFzc2lzdERCO1xuICBzcGVjaWFsREI6IFRTa2lsbERCO1xuICBza2lsbEFEQjogVFNraWxsREI7XG4gIHNraWxsQkRCOiBUU2tpbGxEQjtcbiAgc2tpbGxDREI6IFRTa2lsbERCO1xuICBzZWFsREI6IFRTZWFsREI7XG4gIHNraWxsczogVFNraWxsSWRzO1xuICBoZXJvSWQ6IHN0cmluZztcbiAgcmVmaW5lOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHNraWxsRGF0YSA9IGdldFNraWxscyh7XG4gICAgaGVyb0RCLFxuICAgIHdlYXBvbkRCLFxuICAgIGFzc2lzdERCLFxuICAgIHNwZWNpYWxEQixcbiAgICBza2lsbEFEQixcbiAgICBza2lsbEJEQixcbiAgICBza2lsbENEQixcbiAgICBzZWFsREIsXG4gICAgaGVyb0lkLFxuICAgIHNraWxscyxcbiAgfSk7XG4gIGNvbnN0IGljb25zOiB7IFtza2lsbElkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBza2lsbEtleXMuZm9yRWFjaCgoc2tpbGxLZXkpID0+IHtcbiAgICBjb25zdCBkYXRhID0gc2tpbGxEYXRhW3NraWxsS2V5XTtcbiAgICBpY29uc1tza2lsbEtleV0gPSBkYXRhPy5pY29uICYmIGBza2lsbHMvJHtkYXRhLmljb259YDtcbiAgfSk7XG4gIGlmICghIXJlZmluZSAmJiByZWZpbmUgIT09ICctJykge1xuICAgIGNvbnN0IHJlZmluZUljb24gPVxuICAgICAgYmFzaWNSZWZpbmVbcmVmaW5lXSB8fCBza2lsbERhdGEud2VhcG9uLnJlZmluZT8uW3JlZmluZV0/Lmljb247XG4gICAgaWYgKHJlZmluZUljb24pIHtcbiAgICAgIGljb25zLndlYXBvbiA9IGBza2lsbHMvd2VhcG9uLyR7cmVmaW5lSWNvbn0ucG5nYDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGljb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2tpbGxJbmZvcyh7XG4gIGhlcm9EQixcbiAgd2VhcG9uREIsXG4gIGFzc2lzdERCLFxuICBzcGVjaWFsREIsXG4gIHNraWxsQURCLFxuICBza2lsbEJEQixcbiAgc2tpbGxDREIsXG4gIHNlYWxEQixcbiAgaGVyb0lkLFxuICBza2lsbHMsXG4gIHJlZmluZSxcbiAgcmFyaXR5LFxufToge1xuICBoZXJvREI6IFRIZXJvREI7XG4gIHdlYXBvbkRCOiBUV2VhcG9uREI7XG4gIGFzc2lzdERCOiBUQXNzaXN0REI7XG4gIHNwZWNpYWxEQjogVFNraWxsREI7XG4gIHNraWxsQURCOiBUU2tpbGxEQjtcbiAgc2tpbGxCREI6IFRTa2lsbERCO1xuICBza2lsbENEQjogVFNraWxsREI7XG4gIHNlYWxEQjogVFNlYWxEQjtcbiAgc2tpbGxzOiBUU2tpbGxJZHM7XG4gIGhlcm9JZDogc3RyaW5nO1xuICByZWZpbmU6IHN0cmluZztcbiAgcmFyaXR5OiA1IHwgNDtcbn0pIHtcbiAgY29uc3Qgc2tpbGxEYXRhID0gZ2V0U2tpbGxzKHtcbiAgICBoZXJvREIsXG4gICAgd2VhcG9uREIsXG4gICAgYXNzaXN0REIsXG4gICAgc3BlY2lhbERCLFxuICAgIHNraWxsQURCLFxuICAgIHNraWxsQkRCLFxuICAgIHNraWxsQ0RCLFxuICAgIHNlYWxEQixcbiAgICBoZXJvSWQsXG4gICAgc2tpbGxzLFxuICB9KTtcblxuICBjb25zdCBuYW1lczogVFNraWxsTmFtZXMgPSB7XG4gICAgd2VhcG9uOiAnLScsXG4gICAgYXNzaXN0OiAnLScsXG4gICAgc3BlY2lhbDogJy0nLFxuICAgIHNraWxsQTogJy0nLFxuICAgIHNraWxsQjogJy0nLFxuICAgIHNraWxsQzogJy0nLFxuICAgIHNlYWw6ICctJyxcbiAgfTtcbiAgbGV0IGFjY2VsZXJhdGUgPSAwO1xuICBjb25zdCBzcGVjaWFsQ0QgPSBza2lsbERhdGEuc3BlY2lhbD8uY2QgfHwgMDtcbiAgYWNjZWxlcmF0ZSArPSBza2lsbERhdGEud2VhcG9uPy5jZCB8fCAwO1xuICBhY2NlbGVyYXRlICs9IHNraWxsRGF0YS5hc3Npc3Q/LmNkIHx8IDA7XG4gIGFjY2VsZXJhdGUgKz0gc2tpbGxEYXRhLnNraWxsQT8uY2QgfHwgMDtcbiAgYWNjZWxlcmF0ZSArPSBza2lsbERhdGEuc2tpbGxCPy5jZCB8fCAwO1xuICBhY2NlbGVyYXRlICs9IHNraWxsRGF0YS5za2lsbEM/LmNkIHx8IDA7XG4gIGFjY2VsZXJhdGUgKz0gc2tpbGxEYXRhLnNlYWw/LmNkIHx8IDA7XG4gIGNvbnN0IHN0YXRzID0geyBocDogMCwgYXRrOiAwLCBzcGQ6IDAsIGRlZjogMCwgcmVzOiAwIH07XG4gIGxldCBzcHQgPSAwO1xuICBsZXQgYnN0ID0gMDtcbiAgT2JqZWN0LmVudHJpZXMoc2tpbGxEYXRhKS5mb3JFYWNoKChbc2tpbGwsIGRhdGFdKSA9PiB7XG4gICAgbmFtZXNbc2tpbGxdID0gZGF0YT8ubmFtZSB8fCAnLSc7XG4gICAgc3RhdHMuaHAgKz0gZGF0YT8uaHAgfHwgMDtcbiAgICBzdGF0cy5hdGsgKz0gKGRhdGE/Lm10IHx8IDApICsgKGRhdGE/LmF0ayB8fCAwKTtcbiAgICBzdGF0cy5zcGQgKz0gZGF0YT8uc3BkIHx8IDA7XG4gICAgc3RhdHMuZGVmICs9IGRhdGE/LmRlZiB8fCAwO1xuICAgIHN0YXRzLnJlcyArPSBkYXRhPy5yZXMgfHwgMDtcbiAgICBzcHQgKz0gZGF0YT8uc3AgfHwgMDtcbiAgICBpZiAocmFyaXR5ID09PSA1KSB7XG4gICAgICBic3QgPSBNYXRoLm1heChkYXRhPy5ic3QgfHwgMCwgYnN0KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHJlZmluZURhdGEgPSBza2lsbERhdGEud2VhcG9uPy5yZWZpbmU/LltyZWZpbmVdO1xuXG4gIGlmIChyZWZpbmVEYXRhKSB7XG4gICAgc3RhdHMuaHAgKz0gcmVmaW5lRGF0YS5ocCB8fCAwO1xuICAgIHN0YXRzLmF0ayArPSAocmVmaW5lRGF0YS5tdCB8fCAwKSArIChyZWZpbmVEYXRhLmF0ayB8fCAwKTtcbiAgICBzdGF0cy5zcGQgKz0gcmVmaW5lRGF0YS5zcGQgfHwgMDtcbiAgICBzdGF0cy5kZWYgKz0gcmVmaW5lRGF0YS5kZWYgfHwgMDtcbiAgICBzdGF0cy5yZXMgKz0gcmVmaW5lRGF0YS5yZXMgfHwgMDtcbiAgICBhY2NlbGVyYXRlICs9IHJlZmluZURhdGEuY2QgfHwgMDtcbiAgICBpZiAoIXNraWxsRGF0YS53ZWFwb24uZXhjbHVzaXZlKSB7XG4gICAgICBzcHQgKz0gNTA7XG4gICAgfVxuICAgIGlmIChyYXJpdHkgPT09IDUpIHtcbiAgICAgIGJzdCA9IE1hdGgubWF4KGJzdCwgcmVmaW5lRGF0YS5ic3QgfHwgMCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgbmFtZXMsXG4gICAgc3RhdHMsXG4gICAgYWNjZWxlcmF0ZSxcbiAgICBzcGVjaWFsQ0QsXG4gICAgc3B0LFxuICAgIGJzdCxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=