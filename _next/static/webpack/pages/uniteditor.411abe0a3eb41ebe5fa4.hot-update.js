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
  console.log(special);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL3NwZWNpYWwudHN4Il0sIm5hbWVzIjpbImdldFNwZWNpYWxPcHRpb25zIiwicnVsZXNEQiIsImhlcm9EQiIsInNwZWNpYWxEQiIsImhlcm9JZCIsImhlcm8iLCJnZXRIZXJvIiwiT2JqZWN0IiwidmFsdWVzIiwiZmlsdGVyIiwic2tpbGwiLCJleGNsdXNpdmUiLCJpbmNsdWRlcyIsInJ1bGUiLCJnZXRSdWxlIiwicnVsZUlkIiwicnVsZXMiLCJtb3ZlVHlwZSIsIndlYXBvblR5cGUiLCJtYXAiLCJxdWVyeSIsImlkIiwidG9Mb3dlckNhc2UiLCJuYW1lIiwiaGFzU3BlY2lhbE9wdGlvbiIsInNwZWNpYWxJZCIsInNwZWNpYWwiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3BlY2lhbCIsImdldFNwZWNpYWxOYW1lIiwic3BlY2lhbERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxTQUFTQSxpQkFBVCxPQVVKO0FBQUEsTUFUREMsT0FTQyxRQVREQSxPQVNDO0FBQUEsTUFSREMsTUFRQyxRQVJEQSxNQVFDO0FBQUEsTUFQREMsU0FPQyxRQVBEQSxTQU9DO0FBQUEsTUFOREMsTUFNQyxRQU5EQSxNQU1DOztBQUNELE1BQUksQ0FBQ0gsT0FBRCxJQUFZLENBQUNDLE1BQWIsSUFBdUIsQ0FBQ0MsU0FBeEIsSUFBcUMsQ0FBQ0MsTUFBMUMsRUFBa0Q7QUFDaEQsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsTUFBTUMsSUFBSSxHQUFHQyx1REFBTyxDQUFDSixNQUFELEVBQVNFLE1BQVQsQ0FBcEI7O0FBQ0EsTUFBSSxDQUFDQyxJQUFMLEVBQVc7QUFDVCxXQUFPLEVBQVA7QUFDRDs7QUFDRCxTQUFPRSxNQUFNLENBQUNDLE1BQVAsQ0FBY0wsU0FBZCxFQUNKTSxNQURJLENBQ0csVUFBQ0MsS0FBRCxFQUFXO0FBQ2pCLFFBQUlBLEtBQUssQ0FBQ0MsU0FBVixFQUFxQjtBQUNu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QUFPdkIsU0FBUyxDQUFDdUIsT0FBRCxDQUFoQjtBQUNEO0FBRU0sU0FBU0ksY0FBVCxRQU1KO0FBQUEsTUFMRDNCLFNBS0MsU0FMREEsU0FLQztBQUFBLE1BSkR1QixPQUlDLFNBSkRBLE9BSUM7QUFDRCxNQUFNSyxXQUFXLEdBQUdGLFVBQVUsQ0FBQztBQUFFMUIsYUFBUyxFQUFUQSxTQUFGO0FBQWF1QixXQUFPLEVBQVBBO0FBQWIsR0FBRCxDQUE5QjtBQUNBLFNBQU8sQ0FBQUssV0FBVyxTQUFYLElBQUFBLFdBQVcsV0FBWCxZQUFBQSxXQUFXLENBQUVSLElBQWIsS0FBcUIsRUFBNUI7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjQxMWFiZTBhM2ViNDFlYmU1ZmE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRIZXJvIH0gZnJvbSAnLi9oZXJvZXMnO1xuaW1wb3J0IHsgZ2V0UnVsZSB9IGZyb20gJy4vcnVsZXMnO1xuaW1wb3J0IHsgVEhlcm9EQiwgVFJ1bGVzREIsIFRTa2lsbERCIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGVjaWFsT3B0aW9ucyh7XG4gIHJ1bGVzREIsXG4gIGhlcm9EQixcbiAgc3BlY2lhbERCLFxuICBoZXJvSWQsXG59OiB7XG4gIHJ1bGVzREI6IFRSdWxlc0RCO1xuICBoZXJvREI6IFRIZXJvREI7XG4gIHNwZWNpYWxEQjogVFNraWxsREI7XG4gIGhlcm9JZDogc3RyaW5nO1xufSkge1xuICBpZiAoIXJ1bGVzREIgfHwgIWhlcm9EQiB8fCAhc3BlY2lhbERCIHx8ICFoZXJvSWQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgaGVybyA9IGdldEhlcm8oaGVyb0RCLCBoZXJvSWQpO1xuICBpZiAoIWhlcm8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoc3BlY2lhbERCKVxuICAgIC5maWx0ZXIoKHNraWxsKSA9PiB7XG4gICAgICBpZiAoc2tpbGwuZXhjbHVzaXZlKSB7XG4gICAgICAgIHJldHVybiBza2lsbC5leGNsdXNpdmUuaW5jbHVkZXMoaGVyb0lkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJ1bGUgPSBnZXRSdWxlKHsgcnVsZXNEQiwgcnVsZUlkOiBza2lsbC5ydWxlcyB9KTtcbiAgICAgIGlmICghcnVsZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChydWxlLm1vdmVUeXBlICYmIHJ1bGUubW92ZVR5cGVbaGVyby5tb3ZlVHlwZV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChydWxlLndlYXBvblR5cGUgJiYgcnVsZS53ZWFwb25UeXBlW2hlcm8ud2VhcG9uVHlwZV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pXG4gICAgLm1hcCgoc2tpbGwpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gYCR7c2tpbGwuaWQudG9Mb3dlckNhc2UoKX18JHtza2lsbC5uYW1lfWA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5za2lsbCxcbiAgICAgICAgcXVlcnksXG4gICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzU3BlY2lhbE9wdGlvbih7XG4gIHJ1bGVzREIsXG4gIGhlcm9EQixcbiAgc3BlY2lhbERCLFxuICBoZXJvSWQsXG4gIHNwZWNpYWxJZCxcbn06IHtcbiAgcnVsZXNEQjogVFJ1bGVzREI7XG4gIGhlcm9EQjogVEhlcm9EQjtcbiAgc3BlY2lhbERCOiBUU2tpbGxEQjtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHNwZWNpYWxJZDogc3RyaW5nO1xufSkge1xuICBpZiAoIXJ1bGVzREIgfHwgIWhlcm9EQiB8fCAhc3BlY2lhbERCIHx8ICFoZXJvSWQgfHwgIXNwZWNpYWxJZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBoZXJvID0gZ2V0SGVybyhoZXJvREIsIGhlcm9JZCk7XG4gIGlmICghaGVybykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBzcGVjaWFsID0gc3BlY2lhbERCW3NwZWNpYWxJZF07XG5cbiAgY29uc29sZS5sb2coc3BlY2lhbClcblxuICBpZiAoIXNwZWNpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHNwZWNpYWwuZXhjbHVzaXZlKSB7XG4gICAgcmV0dXJuIHNwZWNpYWwuZXhjbHVzaXZlLmluY2x1ZGVzKGhlcm9JZCk7XG4gIH1cbiAgY29uc3QgcnVsZSA9IGdldFJ1bGUoeyBydWxlc0RCLCBydWxlSWQ6IHNwZWNpYWwucnVsZXMgfSk7XG4gIGlmICghcnVsZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChydWxlLm1vdmVUeXBlICYmIHJ1bGUubW92ZVR5cGVbaGVyby5tb3ZlVHlwZV0gPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChydWxlLndlYXBvblR5cGUgJiYgcnVsZS53ZWFwb25UeXBlW2hlcm8ud2VhcG9uVHlwZV0gPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3BlY2lhbCh7XG4gIHNwZWNpYWxEQixcbiAgc3BlY2lhbCxcbn06IHtcbiAgc3BlY2lhbERCOiBUU2tpbGxEQjtcbiAgc3BlY2lhbDogc3RyaW5nO1xufSkge1xuICBpZiAoIXNwZWNpYWxEQiB8fCAhc3BlY2lhbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBzcGVjaWFsREJbc3BlY2lhbF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGVjaWFsTmFtZSh7XG4gIHNwZWNpYWxEQixcbiAgc3BlY2lhbCxcbn06IHtcbiAgc3BlY2lhbERCOiBUU2tpbGxEQjtcbiAgc3BlY2lhbDogc3RyaW5nO1xufSkge1xuICBjb25zdCBzcGVjaWFsRGF0YSA9IGdldFNwZWNpYWwoeyBzcGVjaWFsREIsIHNwZWNpYWwgfSk7XG4gIHJldHVybiBzcGVjaWFsRGF0YT8ubmFtZSB8fCAnJztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=