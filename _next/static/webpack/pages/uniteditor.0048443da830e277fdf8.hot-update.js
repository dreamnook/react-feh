webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/utils/special.tsx":
/*!*******************************!*\
  !*** ./app/utils/special.tsx ***!
  \*******************************/
/*! exports provided: getSpecialOptions, hasSpecialOption, getSpecial, getSpecialName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialOptions", function() { return getSpecialOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasSpecialOption", function() { return hasSpecialOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecial", function() { return getSpecial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialName", function() { return getSpecialName; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _heroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroes */ "./app/utils/heroes.tsx");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules */ "./app/utils/rules.tsx");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function getSpecialOptions(_ref) {
  var rulesDB = _ref.rulesDB,
      heroDB = _ref.heroDB,
      specialDB = _ref.specialDB,
      heroId = _ref.heroId;

  if (!rulesDB || !heroDB || !specialDB || !heroId) {
    return [];
  }

  var hero = Object(_heroes__WEBPACK_IMPORTED_MODULE_1__["getHero"])(heroDB, heroId);

  if (!hero) {
    return [];
  }

  return Object.values(specialDB).filter(function (skill) {
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
  }).map(function (skill) {
    var query = "".concat(skill.id.toLowerCase(), "|").concat(skill.name);
    return _objectSpread(_objectSpread({}, skill), {}, {
      query: query
    });
  });
}
function hasSpecialOption(_ref2) {
  var rulesDB = _ref2.rulesDB,
      heroDB = _ref2.heroDB,
      specialDB = _ref2.specialDB,
      heroId = _ref2.heroId,
      specialId = _ref2.specialId;

  if (!rulesDB || !heroDB || !specialDB || !heroId || !specialId) {
    return false;
  }

  var hero = Object(_heroes__WEBPACK_IMPORTED_MODULE_1__["getHero"])(heroDB, heroId);

  if (!hero) {
    return false;
  }

  var special = specialDB[specialId];

  if (!special) {
    return false;
  }

  if (special.exclusive) {
    return special.exclusive.includes(heroId);
  }

  var rule = Object(_rules__WEBPACK_IMPORTED_MODULE_2__["getRule"])({
    rulesDB: rulesDB,
    ruleId: special.rules
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
function getSpecial(_ref3) {
  var specialDB = _ref3.specialDB,
      special = _ref3.special;

  if (!specialDB || !special) {
    return null;
  }

  return specialDB[special];
}
function getSpecialName(_ref4) {
  var specialDB = _ref4.specialDB,
      special = _ref4.special;
  var specialData = getSpecial({
    specialDB: specialDB,
    special: special
  });
  return (specialData === null || specialData === void 0 ? void 0 : specialData.name) || '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL3NwZWNpYWwudHN4Il0sIm5hbWVzIjpbImdldFNwZWNpYWxPcHRpb25zIiwicnVsZXNEQiIsImhlcm9EQiIsInNwZWNpYWxEQiIsImhlcm9JZCIsImhlcm8iLCJnZXRIZXJvIiwiT2JqZWN0IiwidmFsdWVzIiwiZmlsdGVyIiwic2tpbGwiLCJleGNsdXNpdmUiLCJpbmNsdWRlcyIsInJ1bGUiLCJnZXRSdWxlIiwicnVsZUlkIiwicnVsZXMiLCJtb3ZlVHlwZSIsIndlYXBvblR5cGUiLCJtYXAiLCJxdWVyeSIsImlkIiwidG9Mb3dlckNhc2UiLCJuYW1lIiwiaGFzU3BlY2lhbE9wdGlvbiIsInNwZWNpYWxJZCIsInNwZWNpYWwiLCJnZXRTcGVjaWFsIiwiZ2V0U3BlY2lhbE5hbWUiLCJzcGVjaWFsRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLFNBQVNBLGlCQUFULE9BVUo7QUFBQSxNQVREQyxPQVNDLFFBVERBLE9BU0M7QUFBQSxNQVJEQyxNQVFDLFFBUkRBLE1BUUM7QUFBQSxNQVBEQyxTQU9DLFFBUERBLFNBT0M7QUFBQSxNQU5EQyxNQU1DLFFBTkRBLE1BTUM7O0FBQ0QsTUFBSSxDQUFDSCxPQUFELElBQVksQ0FBQ0MsTUFBYixJQUF1QixDQUFDQyxTQUF4QixJQUFxQyxDQUFDQyxNQUExQyxFQUFrRDtBQUNoRCxXQUFPLEVBQVA7QUFDRDs7QUFDRCxNQUFNQyxJQUFJLEdBQUdDLHVEQUFPLENBQUNKLE1BQUQsRUFBU0UsTUFBVCxDQUFwQjs7QUFDQSxNQUFJLENBQUNDLElBQUwsRUFBVztBQUNULFdBQU8sRUFBUDtBQUNEOztBQUNELFNBQU9FLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxTQUFkLEVBQ0pNLE1BREksQ0FDRyxVQUFDQyxLQUFELEVBQVc7QUFDakIsUUFBSUEsS0FBSyxDQUFDQyxTQUFWLEVBQXFCO0FBQ25CLGFBQU9ELEtBQUssQ0FB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LFFBTUo7QUFBQSxNQUxEekIsU0FLQyxTQUxEQSxTQUtDO0FBQUEsTUFKRHVCLE9BSUMsU0FKREEsT0FJQztBQUNELE1BQU1HLFdBQVcsR0FBR0YsVUFBVSxDQUFDO0FBQUV4QixhQUFTLEVBQVRBLFNBQUY7QUFBYXVCLFdBQU8sRUFBUEE7QUFBYixHQUFELENBQTlCO0FBQ0EsU0FBTyxDQUFBRyxXQUFXLFNBQVgsSUFBQUEsV0FBVyxXQUFYLFlBQUFBLFdBQVcsQ0FBRU4sSUFBYixLQUFxQixFQUE1QjtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuMDA0ODQ0M2RhODMwZTI3N2ZkZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEhlcm8gfSBmcm9tICcuL2hlcm9lcyc7XG5pbXBvcnQgeyBnZXRSdWxlIH0gZnJvbSAnLi9ydWxlcyc7XG5pbXBvcnQgeyBUSGVyb0RCLCBUUnVsZXNEQiwgVFNraWxsREIgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwZWNpYWxPcHRpb25zKHtcbiAgcnVsZXNEQixcbiAgaGVyb0RCLFxuICBzcGVjaWFsREIsXG4gIGhlcm9JZCxcbn06IHtcbiAgcnVsZXNEQjogVFJ1bGVzREI7XG4gIGhlcm9EQjogVEhlcm9EQjtcbiAgc3BlY2lhbERCOiBUU2tpbGxEQjtcbiAgaGVyb0lkOiBzdHJpbmc7XG59KSB7XG4gIGlmICghcnVsZXNEQiB8fCAhaGVyb0RCIHx8ICFzcGVjaWFsREIgfHwgIWhlcm9JZCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBoZXJvID0gZ2V0SGVybyhoZXJvREIsIGhlcm9JZCk7XG4gIGlmICghaGVybykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzcGVjaWFsREIpXG4gICAgLmZpbHRlcigoc2tpbGwpID0+IHtcbiAgICAgIGlmIChza2lsbC5leGNsdXNpdmUpIHtcbiAgICAgICAgcmV0dXJuIHNraWxsLmV4Y2x1c2l2ZS5pbmNsdWRlcyhoZXJvSWQpO1xuICAgICAgfVxuICAgICAgY29uc3QgcnVsZSA9IGdldFJ1bGUoeyBydWxlc0RCLCBydWxlSWQ6IHNraWxsLnJ1bGVzIH0pO1xuICAgICAgaWYgKCFydWxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKHJ1bGUubW92ZVR5cGUgJiYgcnVsZS5tb3ZlVHlwZVtoZXJvLm1vdmVUeXBlXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHJ1bGUud2VhcG9uVHlwZSAmJiBydWxlLndlYXBvblR5cGVbaGVyby53ZWFwb25UeXBlXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICAubWFwKChza2lsbCkgPT4ge1xuICAgICAgY29uc3QgcXVlcnkgPSBgJHtza2lsbC5pZC50b0xvd2VyQ2FzZSgpfXwke3NraWxsLm5hbWV9YDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNraWxsLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNTcGVjaWFsT3B0aW9uKHtcbiAgcnVsZXNEQixcbiAgaGVyb0RCLFxuICBzcGVjaWFsREIsXG4gIGhlcm9JZCxcbiAgc3BlY2lhbElkLFxufToge1xuICBydWxlc0RCOiBUUnVsZXNEQjtcbiAgaGVyb0RCOiBUSGVyb0RCO1xuICBzcGVjaWFsREI6IFRTa2lsbERCO1xuICBoZXJvSWQ6IHN0cmluZztcbiAgc3BlY2lhbElkOiBzdHJpbmc7XG59KSB7XG4gIGlmICghcnVsZXNEQiB8fCAhaGVyb0RCIHx8ICFzcGVjaWFsREIgfHwgIWhlcm9JZCB8fCAhc3BlY2lhbElkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGhlcm8gPSBnZXRIZXJvKGhlcm9EQiwgaGVyb0lkKTtcbiAgaWYgKCFoZXJvKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHNwZWNpYWwgPSBzcGVjaWFsREJbc3BlY2lhbElkXTtcblxuICBpZiAoIXNwZWNpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHNwZWNpYWwuZXhjbHVzaXZlKSB7XG4gICAgcmV0dXJuIHNwZWNpYWwuZXhjbHVzaXZlLmluY2x1ZGVzKGhlcm9JZCk7XG4gIH1cbiAgY29uc3QgcnVsZSA9IGdldFJ1bGUoeyBydWxlc0RCLCBydWxlSWQ6IHNwZWNpYWwucnVsZXMgfSk7XG4gIGlmICghcnVsZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChydWxlLm1vdmVUeXBlICYmIHJ1bGUubW92ZVR5cGVbaGVyby5tb3ZlVHlwZV0gPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChydWxlLndlYXBvblR5cGUgJiYgcnVsZS53ZWFwb25UeXBlW2hlcm8ud2VhcG9uVHlwZV0gPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3BlY2lhbCh7XG4gIHNwZWNpYWxEQixcbiAgc3BlY2lhbCxcbn06IHtcbiAgc3BlY2lhbERCOiBUU2tpbGxEQjtcbiAgc3BlY2lhbDogc3RyaW5nO1xufSkge1xuICBpZiAoIXNwZWNpYWxEQiB8fCAhc3BlY2lhbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBzcGVjaWFsREJbc3BlY2lhbF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGVjaWFsTmFtZSh7XG4gIHNwZWNpYWxEQixcbiAgc3BlY2lhbCxcbn06IHtcbiAgc3BlY2lhbERCOiBUU2tpbGxEQjtcbiAgc3BlY2lhbDogc3RyaW5nO1xufSkge1xuICBjb25zdCBzcGVjaWFsRGF0YSA9IGdldFNwZWNpYWwoeyBzcGVjaWFsREIsIHNwZWNpYWwgfSk7XG4gIHJldHVybiBzcGVjaWFsRGF0YT8ubmFtZSB8fCAnJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=