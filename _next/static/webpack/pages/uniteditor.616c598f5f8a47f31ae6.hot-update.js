webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/Editor/SkillPickerView/SkillPicker/hooks.tsx":
/*!*********************************************************************!*\
  !*** ./app/components/Editor/SkillPickerView/SkillPicker/hooks.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHooks; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* harmony import */ var _app_utils_skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/skill */ "./app/utils/skill.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function useHooks(_ref) {
  _s();

  var heroId = _ref.heroId,
      skillType = _ref.skillType,
      filter = _ref.filter,
      maxSkill = _ref.maxSkill;
  var fehDB = Object(_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__["useFehDB"])();
  var rulesDB = fehDB.rulesDB,
      heroDB = fehDB.heroDB;
  var skillDB = fehDB["".concat(skillType, "DB")];
  var skillOptions = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return Object(_app_utils_skill__WEBPACK_IMPORTED_MODULE_2__["getSkillOptions"])({
      rulesDB: rulesDB,
      heroDB: heroDB,
      skillDB: skillDB,
      heroId: heroId
    });
  }, [rulesDB, heroDB, skillDB, heroId]);
  var computedOptions = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return skillOptions.map(function (skill) {
      var hidden = false;

      if (maxSkill && !skill.last) {
        hidden = true;
      }

      if (!hidden && filter) {
        hidden = !skill.query.includes(filter.toLowerCase());
      }

      return _objectSpread(_objectSpread({}, skill), {}, {
        hidden: hidden
      });
    });
  }, [skillOptions, filter, maxSkill]);
  return {
    options: computedOptions
  };
}

_s(useHooks, "OQdHhsE9E8ZjmH1rrOQxyDfRBnc=", false, function () {
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__["useFehDB"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NraWxsUGlja2VyVmlldy9Ta2lsbFBpY2tlci9ob29rcy50c3giXSwibmFtZXMiOlsidXNlSG9va3MiLCJoZXJvSWQiLCJza2lsbFR5cGUiLCJmaWx0ZXIiLCJtYXhTa2lsbCIsImZlaERCIiwidXNlRmVoREIiLCJydWxlc0RCIiwiaGVyb0RCIiwic2tpbGxEQiIsInNraWxsT3B0aW9ucyIsInVzZU1lbW8iLCJnZXRTa2lsbE9wdGlvbnMiLCJjb21wdXRlZE9wdGlvbnMiLCJtYXAiLCJza2lsbCIsImhpZGRlbiIsImxhc3QiLCJxdWVyeSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQVdaO0FBQUE7O0FBQUEsTUFWREMsTUFVQyxRQVZEQSxNQVVDO0FBQUEsTUFUREMsU0FTQyxRQVREQSxTQVNDO0FBQUEsTUFSREMsTUFRQyxRQVJEQSxNQVFDO0FBQUEsTUFQREMsUUFPQyxRQVBEQSxRQU9DO0FBQ0QsTUFBTUMsS0FBSyxHQUFHQyxnRUFBUSxFQUF0QjtBQURDLE1BRU9DLE9BRlAsR0FFMkJGLEtBRjNCLENBRU9FLE9BRlA7QUFBQSxNQUVnQkMsTUFGaEIsR0FFMkJILEtBRjNCLENBRWdCRyxNQUZoQjtBQUdELE1BQU1DLE9BQU8sR0FBR0osS0FBSyxXQUFJSCxTQUFKLFFBQXJCO0FBRUEsTUFBTVEsWUFBWSxHQUFHQyxxREFBTyxDQUFDLFlBQU07QUFDakMsV0FBT0Msd0VBQWUsQ0FBQztBQUFFTCxhQUFPLEVBQVBBLE9BQUY7QUFBV0MsWUFBTSxFQUFOQSxNQUFYO0FBQW1CQyxhQUFPLEVBQVBBLE9BQW5CO0FBQTRCUixZQUFNLEVBQU5BO0FBQTVCLEtBQUQsQ0FBdEI7QUFDRCxHQUYyQixFQUV6QixDQUFDTSxPQUFELEVBQVVDLE1BQVYsRUFBa0JDLE9BQWxCLEVBQTJCUixNQUEzQixDQUZ5QixDQUE1QjtBQUlBLE1BQU1ZLGVBQWUsR0FBR0YscURBQU8sQ0FBQyxZQUFNO0FBQ3BDLFdBQU9ELFlBQVksQ0FBQ0ksR0FBYixDQUFpQixVQUFDQyxLQUFELEVBQVc7QUFDakMsVUFBSUMsTUFBTSxHQUFHLEtBQWI7O0FBQ0EsVUFBSVosUUFBUSxJQUFJLENBQUNXLEtBQUssQ0FBQ0UsSUFBdkIsRUFBNkI7QUFDM0JELGNBQU0sR0FBRyxJQUFUO0FBQ0Q7O0FBQ0QsVUFBSSxDQUFDQSxNQUFELElBQVdiLE1BQWYsRUFBdUI7QUFDckJhLGNBQU0sR0FBRyxDQUFDRCxLQUFLLENBQUNHLEtBQU4sQ0FBWUMsUUFBWixDQUFxQmhCLE1BQU0sQ0FBQ2lCLFdBQVAsRUFBckIsQ0FBVjtBQUNEOztBQUNELDZDQUNLTCxLQURMO0FBRUVDLGNBQU0sRUFBTkE7QUFGRjtBQUlELEtBWk0sQ0FBUDtBQWFELEdBZDhCLEVBYzVCLENBQUNOLFlBQUQsRUFBZVAsTUFBZixFQUF1QkMsUUFBdkIsQ0FkNEIsQ0FBL0I7QUFnQkEsU0FBTztBQUNMaUIsV0FBTyxFQUFFUjtBQURKLEdBQVA7QUFHRDs7R0F2Q3VCYixRO1VBWVJNLHdEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuNjE2YzU5OGY1ZjhhNDdmMzFhZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5pbXBvcnQgeyBnZXRTa2lsbE9wdGlvbnMgfSBmcm9tICdAL2FwcC91dGlscy9za2lsbCc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIb29rcyh7XG4gIGhlcm9JZCxcbiAgc2tpbGxUeXBlLFxuICBmaWx0ZXIsXG4gIG1heFNraWxsLFxufToge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgc2tpbGxUeXBlOiAnc2tpbGxBJyB8ICdza2lsbEInIHwgJ3NraWxsQyc7XG4gIHNraWxsSWQ6IHN0cmluZztcbiAgZmlsdGVyOiBzdHJpbmc7XG4gIG1heFNraWxsPzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgZmVoREIgPSB1c2VGZWhEQigpO1xuICBjb25zdCB7IHJ1bGVzREIsIGhlcm9EQiB9ID0gZmVoREI7XG4gIGNvbnN0IHNraWxsREIgPSBmZWhEQltgJHtza2lsbFR5cGV9REJgXTtcblxuICBjb25zdCBza2lsbE9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gZ2V0U2tpbGxPcHRpb25zKHsgcnVsZXNEQiwgaGVyb0RCLCBza2lsbERCLCBoZXJvSWQgfSk7XG4gIH0sIFtydWxlc0RCLCBoZXJvREIsIHNraWxsREIsIGhlcm9JZF0pO1xuXG4gIGNvbnN0IGNvbXB1dGVkT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBza2lsbE9wdGlvbnMubWFwKChza2lsbCkgPT4ge1xuICAgICAgbGV0IGhpZGRlbiA9IGZhbHNlO1xuICAgICAgaWYgKG1heFNraWxsICYmICFza2lsbC5sYXN0KSB7XG4gICAgICAgIGhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoIWhpZGRlbiAmJiBmaWx0ZXIpIHtcbiAgICAgICAgaGlkZGVuID0gIXNraWxsLnF1ZXJ5LmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnNraWxsLFxuICAgICAgICBoaWRkZW4sXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbc2tpbGxPcHRpb25zLCBmaWx0ZXIsIG1heFNraWxsXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zOiBjb21wdXRlZE9wdGlvbnMsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9