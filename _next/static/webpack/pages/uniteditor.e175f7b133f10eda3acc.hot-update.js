webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/utils/skill.tsx":
/*!*****************************!*\
  !*** ./app/utils/skill.tsx ***!
  \*****************************/
/*! exports provided: getSkillOptions, hasSkillOption, getSkill, getSkillName, getSkillIconAndName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkillOptions", function() { return getSkillOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSkillOption", function() { return hasSkillOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkill", function() { return getSkill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkillName", function() { return getSkillName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSkillIconAndName", function() { return getSkillIconAndName; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _heroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroes */ "./app/utils/heroes.tsx");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules */ "./app/utils/rules.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function getSkillOptions(_ref) {
  var rulesDB = _ref.rulesDB,
      heroDB = _ref.heroDB,
      skillDB = _ref.skillDB,
      heroId = _ref.heroId;

  if (!rulesDB || !heroDB || !skillDB || !heroId) {
    return [];
  }

  var hero = Object(_heroes__WEBPACK_IMPORTED_MODULE_1__["getHero"])(heroDB, heroId);

  if (!hero) {
    return [];
  }

  return Object.values(skillDB).filter(function (skill) {
    if (skill.exclusive) {
      return skill.exclusive.includes(heroId);
    }

    var rule = Object(_rules__WEBPACK_IMPORTED_MODULE_2__["getRule"])({
      rulesDB: rulesDB,
      ruleId: skill.rules
    });

    if (!rule) {
      return true;
    }

    if (rule.moveType && rule.moveType[hero.moveType] === false) {
      return false;
    }

    if (rule.colorType && rule.colorType[hero.colorType] === false) {
      return false;
    }

    if (rule.weaponType && rule.weaponType[hero.weaponType] === false) {
      return false;
    }

    return true;
  }).map(function (skill) {
    var query = "".concat(skill.id.toLowerCase(), "|").concat(skill.name);
    return _objectSpread(_objectSpread({}, skill), {}, {
      query: query
    });
  });
}
function hasSkillOption(_ref2) {
  var rulesDB = _ref2.rulesDB,
      heroDB = _ref2.heroDB,
      skillDB = _ref2.skillDB,
      heroId = _ref2.heroId,
      skillId = _ref2.skillId;

  if (!rulesDB || !heroDB || !skillDB || !heroId || !skillId) {
    return false;
  }

  var hero = Object(_heroes__WEBPACK_IMPORTED_MODULE_1__["getHero"])(heroDB, heroId);

  if (!hero) {
    return false;
  }

  var skill = skillDB[skillId];

  if (!skill) {
    return false;
  }

  if (skill.exclusive) {
    return skill.exclusive.includes(heroId);
  }

  var rule = Object(_rules__WEBPACK_IMPORTED_MODULE_2__["getRule"])({
    rulesDB: rulesDB,
    ruleId: skill.rules
  });

  if (!rule) {
    return true;
  }

  if (rule.moveType && rule.moveType[hero.moveType] === false) {
    return false;
  }

  if (rule.weaponType && rule.weaponType[hero.weaponType] === false) {
    return false;
  }

  return true;
}
function getSkill(_ref3) {
  var skillDB = _ref3.skillDB,
      skillId = _ref3.skillId;

  if (!skillDB || !skillId) {
    return null;
  }

  return skillDB[skillId];
}
function getSkillName(_ref4) {
  var skillDB = _ref4.skillDB,
      skillId = _ref4.skillId;
  var skillData = getSkill({
    skillDB: skillDB,
    skillId: skillId
  });
  return (skillData === null || skillData === void 0 ? void 0 : skillData.name) || '';
}
function getSkillIconAndName(_ref5) {
  var skillDB = _ref5.skillDB,
      skillId = _ref5.skillId;
  var skillData = getSkill({
    skillDB: skillDB,
    skillId: skillId
  });

  if (skillData) {
    return {
      icon: skillData.icon,
      name: skillData.name
    };
  }

  return {
    icon: '',
    name: ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL3NraWxsLnRzeCJdLCJuYW1lcyI6WyJnZXRTa2lsbE9wdGlvbnMiLCJydWxlc0RCIiwiaGVyb0RCIiwic2tpbGxEQiIsImhlcm9JZCIsImhlcm8iLCJnZXRIZXJvIiwiT2JqZWN0IiwidmFsdWVzIiwiZmlsdGVyIiwic2tpbGwiLCJleGNsdXNpdmUiLCJpbmNsdWRlcyIsInJ1bGUiLCJnZXRSdWxlIiwicnVsZUlkIiwicnVsZXMiLCJtb3ZlVHlwZSIsImNvbG9yVHlwZSIsIndlYXBvblR5cGUiLCJtYXAiLCJxdWVyeSIsImlkIiwidG9Mb3dlckNhc2UiLCJuYW1lIiwiaGFzU2tpbGxPcHRpb24iLCJza2lsbElkIiwiZ2V0U2tpbGwiLCJnZXRTa2lsbE5hbWUiLCJza2lsbERhdGEiLCJnZXRTa2lsbEljb25BbmROYW1lIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxTQUFTQSxlQUFULE9BVTRCO0FBQUEsTUFUakNDLE9BU2lDLFFBVGpDQSxPQVNpQztBQUFBLE1BUmpDQyxNQVFpQyxRQVJqQ0EsTUFRaUM7QUFBQSxNQVBqQ0MsT0FPaUMsUUFQakNBLE9BT2lDO0FBQUEsTUFOakNDLE1BTWlDLFFBTmpDQSxNQU1pQzs7QUFDakMsTUFBSSxDQUFDSCxPQUFELElBQVksQ0FBQ0MsTUFBYixJQUF1QixDQUFDQyxPQUF4QixJQUFtQyxDQUFDQyxNQUF4QyxFQUFnRDtBQUM5QyxXQUFPLEVBQVA7QUFDRDs7QUFDRCxNQUFNQyxJQUFJLEdBQUdDLHVEQUFPLENBQUNKLE1BQUQsRUFBU0UsTUFBVCxDQUFwQjs7QUFDQSxNQUFJLENBQUNDLElBQUwsRUFBVztBQUNULFdBQU8sRUFBUDtBQUNEOztBQUVELFNBQU9FLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxPQUFkLEVBQ0pNLE1BREksQ0FDRyxVQUFDQyxLQUFELEVBQVc7QUFDakIsUUFBSUEsS0FBSyxDQUFDQyxTQUFWLEVBQXFCO0FBQ25CLGFBQU9ELEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsUUFBaEIsQ0FBeUJSLE1BQXpCLENBQVA7QUFDRDs7QUFDRCxRQUFNUyxJQUFJLEdBQUdDLHNEQUFPLENBQUM7QUFBRWIsYUFBTyxFQUFQQSxPQUFGO0FBQVdjLFlBQU0sRUFBRUwsS0FBSyxDQUFDTTtBQUF6QixLQUFELENBQXBCOztBQUNBLFFBQUksQ0FBQ0gsSUFBTCxFQUFXO0FBQ1QsYUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsUUFBSUEsSUFBSSxDQUFDSSxRQUFMLElBQWlCSixJQUFJLENBQUNJLFFBQUwsQ0FBY1osSUFBSSxDQUFDWSxRQUFuQixNQUFpQyxLQUF0RCxFQUE2RDtBQUMzRCxhQUFPLEtBQVA7QUFDRDs7QUFDRCxRQUFJSixJQUFJLENBQUNLLFNBQUwsSUFBa0JMLElBQUksQ0FBQ0ssU0FBTCxDQUFlYixJQUFJLENBQUNhLFNBQXBCLE1BQW1DLEtBQXpELEVBQWdFO0FBQzlELGFBQU8sS0FBUDtBQUNEOztBQUNELFFBQUlMLElBQUksQ0FBQ00sVUFBTCxJQUFtQk4sSUFBSSxDQUFDTSxVQUFMLENBQWdCZCxJQUFJLENBQUNjLFVBQXJCLE1BQXFDLEtBQTVELEVBQW1FO0FBQ2pFLGFBQU8sS0FBUDtBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNELEdBbkJJLEVBb0JKQyxHQXBCSSxDQW9CQSxVQUFDVixLQUFELEVBQVc7QUFDZCxRQUFNVyxLQUFLLGFBQU1YLEtBQUssQ0FBQ1ksRUFBTixDQUFTQyxXQUFULEVBQU4sY0FBZ0NiLEtBQUssQ0FBQ2MsSUFBdEMsQ0FBWDtBQUNBLDJDQUNLZCxLQURMO0FBRUVXLFdBQUssRUFBTEE7QUFGRjtBQUlELEdBMUJJLENBQVA7QUEyQkQ7QUFFTSxTQUFTSSxjQUFULFFBWUs7QUFBQSxNQVhWeEIsT0FXVSxTQVhWQSxPQVdVO0FBQUEsTUFWVkMsTUFVVSxTQVZWQSxNQVVVO0FBQUEsTUFUVkMsT0FTVSxTQVRWQSxPQVNVO0FBQUEsTUFSVkMsTUFRVSxTQVJWQSxNQVFVO0FBQUEsTUFQVnNCLE9BT1UsU0FQVkEsT0FPVTs7QUFDVixNQUFJLENBQUN6QixPQUFELElBQVksQ0FBQ0MsTUFBYixJQUF1QixDQUFDQyxPQUF4QixJQUFtQyxDQUFDQyxNQUFwQyxJQUE4QyxDQUFDc0IsT0FBbkQsRUFBNEQ7QUFDMUQsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTXJCLElBQUksR0FBR0MsdURBQU8sQ0FBQ0osTUFBRCxFQUFTRSxNQUFULENBQXBCOztBQUNBLE1BQUksQ0FBQ0MsSUFBTCxFQUFXO0FBQ1QsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTUssS0FBSyxHQUFHUCxPQUFPLENBQUN1QixPQUFELENBQXJCOztBQUNBLE1BQUksQ0FBQ2hCLEtBQUwsRUFBWTtBQUNWLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUlBLEtBQUssQ0FBQ0MsU0FBVixFQUFxQjtBQUNuQixXQUFPRCxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLFFBQWhCLENBQXlCUixNQUF6QixDQUFQO0FBQ0Q7O0FBQ0QsTUFBTVMsSUFBSSxHQUFHQyxzREFBTyxDQUFDO0FBQUViLFdBQU8sRUFBUEEsT0FBRjtBQUFXYyxVQUFNLEVBQUVMLEtBQUssQ0FBQ007QUFBekIsR0FBRCxDQUFwQjs7QUFDQSxNQUFJLENBQUNILElBQUwsRUFBVztBQUNULFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQUlBLElBQUksQ0FBQ0ksUUFBTCxJQUFpQkosSUFBSSxDQUFDSSxRQUFMLENBQWNaLElBQUksQ0FBQ1ksUUFBbkIsTUFBaUMsS0FBdEQsRUFBNkQ7QUFDM0QsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBSUosSUFBSSxDQUFDTSxVQUFMLElBQW1CTixJQUFJLENBQUNNLFVBQUwsQ0FBZ0JkLElBQUksQ0FBQ2MsVUFBckIsTUFBcUMsS0FBNUQsRUFBbUU7QUFDakUsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0Q7QUFFTSxTQUFTUSxRQUFULFFBTUo7QUFBQSxNQUxEeEIsT0FLQyxTQUxEQSxPQUtDO0FBQUEsTUFKRHVCLE9BSUMsU0FKREEsT0FJQzs7QUFDRCxNQUFJLENBQUN2QixPQUFELElBQVksQ0FBQ3VCLE9BQWpCLEVBQTBCO0FBQ3hCLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU92QixPQUFPLENBQUN1QixPQUFELENBQWQ7QUFDRDtBQUVNLFNBQVNFLFlBQVQsUUFNSjtBQUFBLE1BTER6QixPQUtDLFNBTERBLE9BS0M7QUFBQSxNQUpEdUIsT0FJQyxTQUpEQSxPQUlDO0FBQ0QsTUFBTUcsU0FBUyxHQUFHRixRQUFRLENBQUM7QUFBRXhCLFdBQU8sRUFBUEEsT0FBRjtBQUFXdUIsV0FBTyxFQUFQQTtBQUFYLEdBQUQsQ0FBMUI7QUFDQSxTQUFPLENBQUFHLFNBQVMsU0FBVCxJQUFBQSxTQUFTLFdBQVQsWUFBQUEsU0FBUyxDQUFFTCxJQUFYLEtBQW1CLEVBQTFCO0FBQ0Q7QUFFTSxTQUFTTSxtQkFBVCxRQU1KO0FBQUEsTUFMRDNCLE9BS0MsU0FMREEsT0FLQztBQUFBLE1BSkR1QixPQUlDLFNBSkRBLE9BSUM7QUFDRCxNQUFNRyxTQUFTLEdBQUdGLFFBQVEsQ0FBQztBQUFFeEIsV0FBTyxFQUFQQSxPQUFGO0FBQVd1QixXQUFPLEVBQVBBO0FBQVgsR0FBRCxDQUExQjs7QUFDQSxNQUFJRyxTQUFKLEVBQWU7QUFDYixXQUFPO0FBQ0xFLFVBQUksRUFBRUYsU0FBUyxDQUFDRSxJQURYO0FBRUxQLFVBQUksRUFBRUssU0FBUyxDQUFDTDtBQUZYLEtBQVA7QUFJRDs7QUFDRCxTQUFPO0FBQ0xPLFFBQUksRUFBRSxFQUREO0FBRUxQLFFBQUksRUFBRTtBQUZELEdBQVA7QUFJRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLmUxNzVmN2IxMzNmMTBlZGEzYWNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRIZXJvIH0gZnJvbSAnLi9oZXJvZXMnO1xuaW1wb3J0IHsgZ2V0UnVsZSB9IGZyb20gJy4vcnVsZXMnO1xuaW1wb3J0IHsgVEhlcm9EQiwgVFJ1bGVzREIsIFRTa2lsbCwgVFNraWxsREIgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNraWxsT3B0aW9ucyh7XG4gIHJ1bGVzREIsXG4gIGhlcm9EQixcbiAgc2tpbGxEQixcbiAgaGVyb0lkLFxufToge1xuICBydWxlc0RCOiBUUnVsZXNEQjtcbiAgaGVyb0RCOiBUSGVyb0RCO1xuICBza2lsbERCOiBUU2tpbGxEQjtcbiAgaGVyb0lkOiBzdHJpbmc7XG59KTogKFRTa2lsbCAmIHsgcXVlcnk6IHN0cmluZyB9KVtdIHtcbiAgaWYgKCFydWxlc0RCIHx8ICFoZXJvREIgfHwgIXNraWxsREIgfHwgIWhlcm9JZCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBoZXJvID0gZ2V0SGVybyhoZXJvREIsIGhlcm9JZCk7XG4gIGlmICghaGVybykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QudmFsdWVzKHNraWxsREIpXG4gICAgLmZpbHRlcigoc2tpbGwpID0+IHtcbiAgICAgIGlmIChza2lsbC5leGNsdXNpdmUpIHtcbiAgICAgICAgcmV0dXJuIHNraWxsLmV4Y2x1c2l2ZS5pbmNsdWRlcyhoZXJvSWQpO1xuICAgICAgfVxuICAgICAgY29uc3QgcnVsZSA9IGdldFJ1bGUoeyBydWxlc0RCLCBydWxlSWQ6IHNraWxsLnJ1bGVzIH0pO1xuICAgICAgaWYgKCFydWxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHJ1bGUubW92ZVR5cGUgJiYgcnVsZS5tb3ZlVHlwZVtoZXJvLm1vdmVUeXBlXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHJ1bGUuY29sb3JUeXBlICYmIHJ1bGUuY29sb3JUeXBlW2hlcm8uY29sb3JUeXBlXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHJ1bGUud2VhcG9uVHlwZSAmJiBydWxlLndlYXBvblR5cGVbaGVyby53ZWFwb25UeXBlXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICAubWFwKChza2lsbCkgPT4ge1xuICAgICAgY29uc3QgcXVlcnkgPSBgJHtza2lsbC5pZC50b0xvd2VyQ2FzZSgpfXwke3NraWxsLm5hbWV9YDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNraWxsLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNTa2lsbE9wdGlvbih7XG4gIHJ1bGVzREIsXG4gIGhlcm9EQixcbiAgc2tpbGxEQixcbiAgaGVyb0lkLFxuICBza2lsbElkLFxufToge1xuICBydWxlc0RCOiBUUnVsZXNEQjtcbiAgaGVyb0RCOiBUSGVyb0RCO1xuICBza2lsbERCOiBUU2tpbGxEQjtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHNraWxsSWQ6IHN0cmluZztcbn0pOiBib29sZWFuIHtcbiAgaWYgKCFydWxlc0RCIHx8ICFoZXJvREIgfHwgIXNraWxsREIgfHwgIWhlcm9JZCB8fCAhc2tpbGxJZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBoZXJvID0gZ2V0SGVybyhoZXJvREIsIGhlcm9JZCk7XG4gIGlmICghaGVybykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBza2lsbCA9IHNraWxsREJbc2tpbGxJZF07XG4gIGlmICghc2tpbGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHNraWxsLmV4Y2x1c2l2ZSkge1xuICAgIHJldHVybiBza2lsbC5leGNsdXNpdmUuaW5jbHVkZXMoaGVyb0lkKTtcbiAgfVxuICBjb25zdCBydWxlID0gZ2V0UnVsZSh7IHJ1bGVzREIsIHJ1bGVJZDogc2tpbGwucnVsZXMgfSk7XG4gIGlmICghcnVsZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChydWxlLm1vdmVUeXBlICYmIHJ1bGUubW92ZVR5cGVbaGVyby5tb3ZlVHlwZV0gPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChydWxlLndlYXBvblR5cGUgJiYgcnVsZS53ZWFwb25UeXBlW2hlcm8ud2VhcG9uVHlwZV0gPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2tpbGwoe1xuICBza2lsbERCLFxuICBza2lsbElkLFxufToge1xuICBza2lsbERCOiBUU2tpbGxEQjtcbiAgc2tpbGxJZDogc3RyaW5nO1xufSkge1xuICBpZiAoIXNraWxsREIgfHwgIXNraWxsSWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gc2tpbGxEQltza2lsbElkXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNraWxsTmFtZSh7XG4gIHNraWxsREIsXG4gIHNraWxsSWQsXG59OiB7XG4gIHNraWxsREI6IFRTa2lsbERCO1xuICBza2lsbElkOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHNraWxsRGF0YSA9IGdldFNraWxsKHsgc2tpbGxEQiwgc2tpbGxJZCB9KTtcbiAgcmV0dXJuIHNraWxsRGF0YT8ubmFtZSB8fCAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNraWxsSWNvbkFuZE5hbWUoe1xuICBza2lsbERCLFxuICBza2lsbElkLFxufToge1xuICBza2lsbERCOiBUU2tpbGxEQjtcbiAgc2tpbGxJZDogc3RyaW5nO1xufSkge1xuICBjb25zdCBza2lsbERhdGEgPSBnZXRTa2lsbCh7IHNraWxsREIsIHNraWxsSWQgfSk7XG4gIGlmIChza2lsbERhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjogc2tpbGxEYXRhLmljb24sXG4gICAgICBuYW1lOiBza2lsbERhdGEubmFtZSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgaWNvbjogJycsXG4gICAgbmFtZTogJycsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9