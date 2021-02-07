webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/utils/weapon.tsx":
/*!******************************!*\
  !*** ./app/utils/weapon.tsx ***!
  \******************************/
/*! exports provided: getWeaponGroup, getWeaponOptions, hasWeaponOption, getWeapon, getWeaponName, getRefineOptions, hasRefineOption, getRefine, getRefineName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeaponGroup", function() { return getWeaponGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeaponOptions", function() { return getWeaponOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasWeaponOption", function() { return hasWeaponOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeapon", function() { return getWeapon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeaponName", function() { return getWeaponName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRefineOptions", function() { return getRefineOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasRefineOption", function() { return hasRefineOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRefine", function() { return getRefine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRefineName", function() { return getRefineName; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _heroes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heroes */ "./app/utils/heroes.tsx");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function getWeaponGroup(weaponType) {
  switch (weaponType) {
    case 'red-bow':
    case 'blue-bow':
    case 'green-bow':
    case 'white-bow':
      return 'bow';

    case 'red-dagger':
    case 'blue-dagger':
    case 'green-dagger':
    case 'white-dagger':
      return 'dagger';

    case 'red-dragon':
    case 'blue-dragon':
    case 'green-dragon':
    case 'white-dragon':
      return 'dragon';

    case 'red-beast':
    case 'blue-beast':
    case 'green-beast':
    case 'white-beast':
      return 'beast';
  }

  return weaponType;
}
function getWeaponOptions(_ref) {
  var heroDB = _ref.heroDB,
      weaponDB = _ref.weaponDB,
      heroId = _ref.heroId;

  if (!weaponDB || !heroDB || !heroId) {
    return [];
  }

  var hero = Object(_heroes__WEBPACK_IMPORTED_MODULE_2__["getHero"])(heroDB, heroId);

  if (!hero) {
    return [];
  }

  var weaponGroup = getWeaponGroup(hero.weaponType);
  var weapons = weaponDB[weaponGroup];

  if (!weaponGroup) {
    return [];
  }

  return Object.values(weapons).filter(function (weapon) {
    if (!weapon.exclusive) {
      return true;
    }

    return weapon.exclusive.includes(heroId);
  }).map(function (weapon) {
    var query = "".concat(weapon.id.toLowerCase(), "|").concat(weapon.name);
    return _objectSpread(_objectSpread({}, weapon), {}, {
      query: query
    });
  });
}
function hasWeaponOption(_ref2) {
  var heroDB = _ref2.heroDB,
      weaponDB = _ref2.weaponDB,
      heroId = _ref2.heroId,
      weaponId = _ref2.weaponId;

  if (!weaponDB || !heroDB || !heroId || !weaponId) {
    return false;
  }

  var hero = Object(_heroes__WEBPACK_IMPORTED_MODULE_2__["getHero"])(heroDB, heroId);

  if (!hero) {
    return false;
  }

  var weaponGroup = getWeaponGroup(hero.weaponType);
  var weapons = weaponDB[weaponGroup];

  if (!weaponGroup) {
    return false;
  }

  var weapon = weapons[weaponId];

  if (!weapon) {
    return false;
  }

  if (weapon.exclusive) {
    return weapon.exclusive.includes(heroId);
  }

  return true;
}
function getWeapon(_ref3) {
  var heroDB = _ref3.heroDB,
      weaponDB = _ref3.weaponDB,
      heroId = _ref3.heroId,
      weapon = _ref3.weapon;

  if (!weaponDB || !heroDB || !weapon || !heroId) {
    return null;
  }

  var hero = Object(_heroes__WEBPACK_IMPORTED_MODULE_2__["getHero"])(heroDB, heroId);

  if (!hero) {
    return null;
  }

  var weaponGroup = getWeaponGroup(hero.weaponType);
  return weaponDB[weaponGroup][weapon];
}
function getWeaponName(_ref4) {
  var heroDB = _ref4.heroDB,
      weaponDB = _ref4.weaponDB,
      heroId = _ref4.heroId,
      weapon = _ref4.weapon;
  var weaponData = getWeapon({
    heroDB: heroDB,
    weaponDB: weaponDB,
    heroId: heroId,
    weapon: weapon
  });
  return (weaponData === null || weaponData === void 0 ? void 0 : weaponData.name) || '';
}
var refineNameMap = {
  atk: '攻擊',
  spd: '速度',
  def: '防守',
  res: '魔防'
};
function getRefineOptions(_ref5) {
  var heroDB = _ref5.heroDB,
      weaponDB = _ref5.weaponDB,
      heroId = _ref5.heroId,
      weapon = _ref5.weapon;
  var weaponData = getWeapon({
    heroDB: heroDB,
    weaponDB: weaponDB,
    heroId: heroId,
    weapon: weapon
  });

  if (!weaponData || !weaponData.refine) {
    return [];
  }

  return Object.entries(weaponData.refine).filter(function (_ref6) {
    var _ref7 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, 2),
        refineData = _ref7[1];

    if (refineData.exclusive) {
      return refineData.exclusive.includes(heroId);
    }

    return true;
  }).map(function (_ref8) {
    var _ref9 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref8, 2),
        key = _ref9[0],
        refineData = _ref9[1];

    var mapped = _objectSpread({
      value: key
    }, refineData);

    if (!mapped.name) {
      mapped.name = refineNameMap[key] || key;
    }

    if (mapped.icon) {
      mapped.icon = "/skills/weapon/".concat(mapped.icon, ".png");
    }

    if (!mapped.icon && refineNameMap[key]) {
      mapped.icon = "/skills/weapon/".concat(key, ".png");
    }

    return mapped;
  });
}
function hasRefineOption(_ref10) {
  var heroDB = _ref10.heroDB,
      weaponDB = _ref10.weaponDB,
      heroId = _ref10.heroId,
      weaponId = _ref10.weaponId,
      refineId = _ref10.refineId;
  var weapon = getWeapon({
    heroDB: heroDB,
    weaponDB: weaponDB,
    heroId: heroId,
    weapon: weaponId
  });

  if (!weapon || !weapon.refine || !weapon.refine[refineId]) {
    return false;
  }

  if (weapon.refine[refineId].exclusive) {
    return weapon.refine[refineId].exclusive.includes(heroId);
  }

  return true;
}
function getRefine(_ref11) {
  var _weaponData$refine;

  var heroDB = _ref11.heroDB,
      weaponDB = _ref11.weaponDB,
      heroId = _ref11.heroId,
      weapon = _ref11.weapon,
      refine = _ref11.refine;
  var weaponData = getWeapon({
    heroDB: heroDB,
    weaponDB: weaponDB,
    heroId: heroId,
    weapon: weapon
  });
  return weaponData === null || weaponData === void 0 ? void 0 : (_weaponData$refine = weaponData.refine) === null || _weaponData$refine === void 0 ? void 0 : _weaponData$refine[refine];
}
function getRefineName(_ref12) {
  var heroDB = _ref12.heroDB,
      weaponDB = _ref12.weaponDB,
      heroId = _ref12.heroId,
      weapon = _ref12.weapon,
      refine = _ref12.refine;
  var refineData = getRefine({
    heroDB: heroDB,
    weaponDB: weaponDB,
    heroId: heroId,
    weapon: weapon,
    refine: refine
  });

  if (!refineData) {
    return '';
  }

  if (refineNameMap[refine]) {
    return refineNameMap[refine];
  }

  return refineData.name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL3dlYXBvbi50c3giXSwibmFtZXMiOlsiZ2V0V2VhcG9uR3JvdXAiLCJ3ZWFwb25UeXBlIiwiZ2V0V2VhcG9uT3B0aW9ucyIsImhlcm9EQiIsIndlYXBvbkRCIiwiaGVyb0lkIiwiaGVybyIsImdldEhlcm8iLCJ3ZWFwb25Hcm91cCIsIndlYXBvbnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJ3ZWFwb24iLCJleGNsdXNpdmUiLCJpbmNsdWRlcyIsIm1hcCIsInF1ZXJ5IiwiaWQiLCJ0b0xvd2VyQ2FzZSIsIm5hbWUiLCJoYXNXZWFwb25PcHRpb24iLCJ3ZWFwb25JZCIsImdldFdlYXBvbiIsImdldFdlYXBvbk5hbWUiLCJ3ZWFwb25EYXRhIiwicmVmaW5lTmFtZU1hcCIsImF0ayIsInNwZCIsImRlZiIsInJlcyIsImdldFJlZmluZU9wdGlvbnMiLCJyZWZpbmUiLCJlbnRyaWVzIiwicmVmaW5lRGF0YSIsImtleSIsIm1hcHBlZCIsInZhbHVlIiwiaWNvbiIsImhhc1JlZmluZU9wdGlvbiIsInJlZmluZUlkIiwiZ2V0UmVmaW5lIiwiZ2V0UmVmaW5lTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTTyxTQUFTQSxjQUFULENBQXdCQyxVQUF4QixFQUErRDtBQUNwRSxVQUFRQSxVQUFSO0FBQ0UsU0FBSyxTQUFMO0FBQ0EsU0FBSyxVQUFMO0FBQ0EsU0FBSyxXQUFMO0FBQ0EsU0FBSyxXQUFMO0FBQ0UsYUFBTyxLQUFQOztBQUNGLFNBQUssWUFBTDtBQUNBLFNBQUssYUFBTDtBQUNBLFNBQUssY0FBTDtBQUNBLFNBQUssY0FBTDtBQUNFLGFBQU8sUUFBUDs7QUFDRixTQUFLLFlBQUw7QUFDQSxTQUFLLGFBQUw7QUFDQSxTQUFLLGNBQUw7QUFDQSxTQUFLLGNBQUw7QUFDRSxhQUFPLFFBQVA7O0FBQ0YsU0FBSyxXQUFMO0FBQ0EsU0FBSyxZQUFMO0FB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QXFCQSxNQUFyQixDQUFQO0FBQ0Q7QUFFTSxTQUFTVSxhQUFULFNBWUo7QUFBQSxNQVhEdkMsTUFXQyxVQVhEQSxNQVdDO0FBQUEsTUFWREMsUUFVQyxVQVZEQSxRQVVDO0FBQUEsTUFUREMsTUFTQyxVQVREQSxNQVNDO0FBQUEsTUFSRFEsTUFRQyxVQVJEQSxNQVFDO0FBQUEsTUFQRG1CLE1BT0MsVUFQREEsTUFPQztBQUNELE1BQU1FLFVBQVUsR0FBR08sU0FBUyxDQUFDO0FBQzNCdEMsVUFBTSxFQUFOQSxNQUQyQjtBQUUzQkMsWUFBUSxFQUFSQSxRQUYyQjtBQUczQkMsVUFBTSxFQUFOQSxNQUgyQjtBQUkzQlEsVUFBTSxFQUFOQSxNQUoyQjtBQUszQm1CLFVBQU0sRUFBTkE7QUFMMkIsR0FBRCxDQUE1Qjs7QUFPQSxNQUFJLENBQUNFLFVBQUwsRUFBaUI7QUFDZixXQUFPLEVBQVA7QUFDRDs7QUFDRCxNQUFJUixhQUFhLENBQUNNLE1BQUQsQ0FBakIsRUFBMkI7QUFDekIsV0FBT04sYUFBYSxDQUFDTSxNQUFELENBQXBCO0FBQ0Q7O0FBQ0QsU0FBT0UsVUFBVSxDQUFDZCxJQUFsQjtBQUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuZGQxOWRlZmRjZWY5OTM5NGE4ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEhlcm8gfSBmcm9tICcuL2hlcm9lcyc7XG5pbXBvcnQge1xuICBUV2VhcG9uVHlwZSxcbiAgVFdlYXBvbkdyb3VwLFxuICBUSGVyb0RCLFxuICBUV2VhcG9uREIsXG4gIFRXZWFwb24sXG59IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhcG9uR3JvdXAod2VhcG9uVHlwZTogVFdlYXBvblR5cGUpOiBUV2VhcG9uR3JvdXAge1xuICBzd2l0Y2ggKHdlYXBvblR5cGUpIHtcbiAgICBjYXNlICdyZWQtYm93JzpcbiAgICBjYXNlICdibHVlLWJvdyc6XG4gICAgY2FzZSAnZ3JlZW4tYm93JzpcbiAgICBjYXNlICd3aGl0ZS1ib3cnOlxuICAgICAgcmV0dXJuICdib3cnO1xuICAgIGNhc2UgJ3JlZC1kYWdnZXInOlxuICAgIGNhc2UgJ2JsdWUtZGFnZ2VyJzpcbiAgICBjYXNlICdncmVlbi1kYWdnZXInOlxuICAgIGNhc2UgJ3doaXRlLWRhZ2dlcic6XG4gICAgICByZXR1cm4gJ2RhZ2dlcic7XG4gICAgY2FzZSAncmVkLWRyYWdvbic6XG4gICAgY2FzZSAnYmx1ZS1kcmFnb24nOlxuICAgIGNhc2UgJ2dyZWVuLWRyYWdvbic6XG4gICAgY2FzZSAnd2hpdGUtZHJhZ29uJzpcbiAgICAgIHJldHVybiAnZHJhZ29uJztcbiAgICBjYXNlICdyZWQtYmVhc3QnOlxuICAgIGNhc2UgJ2JsdWUtYmVhc3QnOlxuICAgIGNhc2UgJ2dyZWVuLWJlYXN0JzpcbiAgICBjYXNlICd3aGl0ZS1iZWFzdCc6XG4gICAgICByZXR1cm4gJ2JlYXN0JztcbiAgfVxuICByZXR1cm4gd2VhcG9uVHlwZSBhcyBUV2VhcG9uR3JvdXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWFwb25PcHRpb25zKHtcbiAgaGVyb0RCLFxuICB3ZWFwb25EQixcbiAgaGVyb0lkLFxufToge1xuICBoZXJvREI6IFRIZXJvREI7XG4gIHdlYXBvbkRCOiBUV2VhcG9uREI7XG4gIGhlcm9JZDogc3RyaW5nO1xufSk6IChUV2VhcG9uICYgeyBxdWVyeTogc3RyaW5nIH0pW10ge1xuICBpZiAoIXdlYXBvbkRCIHx8ICFoZXJvREIgfHwgIWhlcm9JZCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCBoZXJvID0gZ2V0SGVybyhoZXJvREIsIGhlcm9JZCk7XG4gIGlmICghaGVybykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCB3ZWFwb25Hcm91cCA9IGdldFdlYXBvbkdyb3VwKGhlcm8ud2VhcG9uVHlwZSk7XG4gIGNvbnN0IHdlYXBvbnMgPSB3ZWFwb25EQlt3ZWFwb25Hcm91cF07XG5cbiAgaWYgKCF3ZWFwb25Hcm91cCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QudmFsdWVzKHdlYXBvbnMpXG4gICAgLmZpbHRlcigod2VhcG9uKSA9PiB7XG4gICAgICBpZiAoIXdlYXBvbi5leGNsdXNpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2VhcG9uLmV4Y2x1c2l2ZS5pbmNsdWRlcyhoZXJvSWQpO1xuICAgIH0pXG4gICAgLm1hcCgod2VhcG9uKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IGAke3dlYXBvbi5pZC50b0xvd2VyQ2FzZSgpfXwke3dlYXBvbi5uYW1lfWA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi53ZWFwb24sXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1dlYXBvbk9wdGlvbih7XG4gIGhlcm9EQixcbiAgd2VhcG9uREIsXG4gIGhlcm9JZCxcbiAgd2VhcG9uSWQsXG59OiB7XG4gIGhlcm9EQjogVEhlcm9EQjtcbiAgd2VhcG9uREI6IFRXZWFwb25EQjtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHdlYXBvbklkOiBzdHJpbmc7XG59KSB7XG4gIGlmICghd2VhcG9uREIgfHwgIWhlcm9EQiB8fCAhaGVyb0lkIHx8ICF3ZWFwb25JZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBoZXJvID0gZ2V0SGVybyhoZXJvREIsIGhlcm9JZCk7XG4gIGlmICghaGVybykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCB3ZWFwb25Hcm91cCA9IGdldFdlYXBvbkdyb3VwKGhlcm8ud2VhcG9uVHlwZSk7XG4gIGNvbnN0IHdlYXBvbnMgPSB3ZWFwb25EQlt3ZWFwb25Hcm91cF07XG5cbiAgaWYgKCF3ZWFwb25Hcm91cCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCB3ZWFwb24gPSB3ZWFwb25zW3dlYXBvbklkXTtcbiAgaWYgKCF3ZWFwb24pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHdlYXBvbi5leGNsdXNpdmUpIHtcbiAgICByZXR1cm4gd2VhcG9uLmV4Y2x1c2l2ZS5pbmNsdWRlcyhoZXJvSWQpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhcG9uKHtcbiAgaGVyb0RCLFxuICB3ZWFwb25EQixcbiAgaGVyb0lkLFxuICB3ZWFwb24sXG59OiB7XG4gIGhlcm9EQjogVEhlcm9EQjtcbiAgd2VhcG9uREI6IFRXZWFwb25EQjtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHdlYXBvbjogc3RyaW5nO1xufSkge1xuICBpZiAoIXdlYXBvbkRCIHx8ICFoZXJvREIgfHwgIXdlYXBvbiB8fCAhaGVyb0lkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgaGVybyA9IGdldEhlcm8oaGVyb0RCLCBoZXJvSWQpO1xuICBpZiAoIWhlcm8pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB3ZWFwb25Hcm91cCA9IGdldFdlYXBvbkdyb3VwKGhlcm8ud2VhcG9uVHlwZSk7XG4gIHJldHVybiB3ZWFwb25EQlt3ZWFwb25Hcm91cF1bd2VhcG9uXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXBvbk5hbWUoe1xuICBoZXJvREIsXG4gIHdlYXBvbkRCLFxuICBoZXJvSWQsXG4gIHdlYXBvbixcbn06IHtcbiAgaGVyb0RCOiBUSGVyb0RCO1xuICB3ZWFwb25EQjogVFdlYXBvbkRCO1xuICBoZXJvSWQ6IHN0cmluZztcbiAgd2VhcG9uOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHdlYXBvbkRhdGEgPSBnZXRXZWFwb24oeyBoZXJvREIsIHdlYXBvbkRCLCBoZXJvSWQsIHdlYXBvbiB9KTtcbiAgcmV0dXJuIHdlYXBvbkRhdGE/Lm5hbWUgfHwgJyc7XG59XG5cbmNvbnN0IHJlZmluZU5hbWVNYXAgPSB7XG4gIGF0azogJ+aUu+aTiicsXG4gIHNwZDogJ+mAn+W6picsXG4gIGRlZjogJ+mYsuWuiCcsXG4gIHJlczogJ+mtlOmYsicsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVmaW5lT3B0aW9ucyh7XG4gIGhlcm9EQixcbiAgd2VhcG9uREIsXG4gIGhlcm9JZCxcbiAgd2VhcG9uLFxufToge1xuICBoZXJvREI6IFRIZXJvREI7XG4gIHdlYXBvbkRCOiBUV2VhcG9uREI7XG4gIGhlcm9JZDogc3RyaW5nO1xuICB3ZWFwb246IHN0cmluZztcbn0pIHtcbiAgY29uc3Qgd2VhcG9uRGF0YSA9IGdldFdlYXBvbih7IGhlcm9EQiwgd2VhcG9uREIsIGhlcm9JZCwgd2VhcG9uIH0pO1xuICBpZiAoIXdlYXBvbkRhdGEgfHwgIXdlYXBvbkRhdGEucmVmaW5lKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBPYmplY3QuZW50cmllcyh3ZWFwb25EYXRhLnJlZmluZSlcbiAgICAuZmlsdGVyKChbLCByZWZpbmVEYXRhXSkgPT4ge1xuICAgICAgaWYgKHJlZmluZURhdGEuZXhjbHVzaXZlKSB7XG4gICAgICAgIHJldHVybiByZWZpbmVEYXRhLmV4Y2x1c2l2ZS5pbmNsdWRlcyhoZXJvSWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSlcbiAgICAubWFwKChba2V5LCByZWZpbmVEYXRhXSkgPT4ge1xuICAgICAgY29uc3QgbWFwcGVkID0ge1xuICAgICAgICB2YWx1ZToga2V5LFxuICAgICAgICAuLi5yZWZpbmVEYXRhLFxuICAgICAgfTtcbiAgICAgIGlmICghbWFwcGVkLm5hbWUpIHtcbiAgICAgICAgbWFwcGVkLm5hbWUgPSByZWZpbmVOYW1lTWFwW2tleV0gfHwga2V5O1xuICAgICAgfVxuICAgICAgaWYgKG1hcHBlZC5pY29uKSB7XG4gICAgICAgIG1hcHBlZC5pY29uID0gYC9za2lsbHMvd2VhcG9uLyR7bWFwcGVkLmljb259LnBuZ2A7XG4gICAgICB9XG4gICAgICBpZiAoIW1hcHBlZC5pY29uICYmIHJlZmluZU5hbWVNYXBba2V5XSkge1xuICAgICAgICBtYXBwZWQuaWNvbiA9IGAvc2tpbGxzL3dlYXBvbi8ke2tleX0ucG5nYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXBwZWQ7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNSZWZpbmVPcHRpb24oe1xuICBoZXJvREIsXG4gIHdlYXBvbkRCLFxuICBoZXJvSWQsXG4gIHdlYXBvbklkLFxuICByZWZpbmVJZCxcbn06IHtcbiAgaGVyb0RCOiBUSGVyb0RCO1xuICB3ZWFwb25EQjogVFdlYXBvbkRCO1xuICBoZXJvSWQ6IHN0cmluZztcbiAgd2VhcG9uSWQ6IHN0cmluZztcbiAgcmVmaW5lSWQ6IHN0cmluZztcbn0pIHtcbiAgY29uc3Qgd2VhcG9uID0gZ2V0V2VhcG9uKHsgaGVyb0RCLCB3ZWFwb25EQiwgaGVyb0lkLCB3ZWFwb246IHdlYXBvbklkIH0pO1xuICBpZiAoIXdlYXBvbiB8fCAhd2VhcG9uLnJlZmluZSB8fCAhd2VhcG9uLnJlZmluZVtyZWZpbmVJZF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHdlYXBvbi5yZWZpbmVbcmVmaW5lSWRdLmV4Y2x1c2l2ZSkge1xuICAgIHJldHVybiB3ZWFwb24ucmVmaW5lW3JlZmluZUlkXS5leGNsdXNpdmUuaW5jbHVkZXMoaGVyb0lkKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZmluZSh7XG4gIGhlcm9EQixcbiAgd2VhcG9uREIsXG4gIGhlcm9JZCxcbiAgd2VhcG9uLFxuICByZWZpbmUsXG59OiB7XG4gIGhlcm9EQjogVEhlcm9EQjtcbiAgd2VhcG9uREI6IFRXZWFwb25EQjtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHdlYXBvbjogc3RyaW5nO1xuICByZWZpbmU6IHN0cmluZztcbn0pIHtcbiAgY29uc3Qgd2VhcG9uRGF0YSA9IGdldFdlYXBvbih7IGhlcm9EQiwgd2VhcG9uREIsIGhlcm9JZCwgd2VhcG9uIH0pO1xuICByZXR1cm4gd2VhcG9uRGF0YT8ucmVmaW5lPy5bcmVmaW5lXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZmluZU5hbWUoe1xuICBoZXJvREIsXG4gIHdlYXBvbkRCLFxuICBoZXJvSWQsXG4gIHdlYXBvbixcbiAgcmVmaW5lLFxufToge1xuICBoZXJvREI6IFRIZXJvREI7XG4gIHdlYXBvbkRCOiBUV2VhcG9uREI7XG4gIGhlcm9JZDogc3RyaW5nO1xuICB3ZWFwb246IHN0cmluZztcbiAgcmVmaW5lOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHJlZmluZURhdGEgPSBnZXRSZWZpbmUoe1xuICAgIGhlcm9EQixcbiAgICB3ZWFwb25EQixcbiAgICBoZXJvSWQsXG4gICAgd2VhcG9uLFxuICAgIHJlZmluZSxcbiAgfSk7XG4gIGlmICghcmVmaW5lRGF0YSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAocmVmaW5lTmFtZU1hcFtyZWZpbmVdKSB7XG4gICAgcmV0dXJuIHJlZmluZU5hbWVNYXBbcmVmaW5lXTtcbiAgfVxuICByZXR1cm4gcmVmaW5lRGF0YS5uYW1lO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==