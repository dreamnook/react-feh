self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/components/Editor/SealPickerView/SealPicker/hooks.tsx":
/*!*******************************************************************!*\
  !*** ./app/components/Editor/SealPickerView/SealPicker/hooks.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useHooks; }
/* harmony export */ });
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* harmony import */ var _app_utils_skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/skill */ "./app/utils/skill.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function mapper(_ref) {
  var skill = _ref.skill,
      maxSkill = _ref.maxSkill,
      filter = _ref.filter;
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
}

function useHooks(_ref2) {
  _s();

  var heroId = _ref2.heroId,
      filter = _ref2.filter,
      maxSkill = _ref2.maxSkill;
  var fehDB = (0,_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_2__.useFehDB)();
  var rules2DB = fehDB.rules2DB,
      heroDB = fehDB.heroDB,
      sealDB = fehDB.sealDB;
  var options = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    var skillAOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_3__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.skillA,
      heroId: heroId
    }).map(function (skill) {
      return mapper({
        skill: skill,
        maxSkill: maxSkill,
        filter: filter
      });
    });
    var skillBOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_3__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.skillA,
      heroId: heroId
    }).map(function (skill) {
      return mapper({
        skill: skill,
        maxSkill: maxSkill,
        filter: filter
      });
    });
    var skillCOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_3__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.skillA,
      heroId: heroId
    }).map(function (skill) {
      return mapper({
        skill: skill,
        maxSkill: maxSkill,
        filter: filter
      });
    });
    var sealOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_3__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.seal,
      heroId: heroId
    }).map(function (skill) {
      return mapper({
        skill: skill,
        maxSkill: maxSkill,
        filter: filter
      });
    });
    return [{
      id: '_seala',
      name: 'A技能聖印',
      sp: 0,
      icon: ''
    }].concat((0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(skillAOptions), [{
      id: '_sealb',
      name: 'B技能聖印',
      sp: 0,
      icon: ''
    }], (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(skillBOptions), [{
      id: '_sealC',
      name: 'C技能聖印',
      sp: 0,
      icon: ''
    }], (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(skillCOptions), [{
      id: '_seal',
      name: '專用聖印',
      sp: 0,
      icon: ''
    }], (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sealOptions));
  }, [rules2DB, heroDB, sealDB, heroId, filter, maxSkill]);
  return {
    options: options
  };
}

_s(useHooks, "vbNaDx15oHyLm9mJto2R9anw/S4=", false, function () {
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_2__.useFehDB];
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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NlYWxQaWNrZXJWaWV3L1NlYWxQaWNrZXIvaG9va3MudHN4Il0sIm5hbWVzIjpbIm1hcHBlciIsInNraWxsIiwibWF4U2tpbGwiLCJmaWx0ZXIiLCJoaWRkZW4iLCJsYXN0IiwicXVlcnkiLCJpbmNsdWRlcyIsInRvTG93ZXJDYXNlIiwidXNlSG9va3MiLCJoZXJvSWQiLCJmZWhEQiIsInVzZUZlaERCIiwicnVsZXMyREIiLCJoZXJvREIiLCJzZWFsREIiLCJvcHRpb25zIiwidXNlTWVtbyIsInNraWxsQU9wdGlvbnMiLCJnZXRTa2lsbE9wdGlvbnMiLCJza2lsbERCIiwic2tpbGxBIiwibWFwIiwic2tpbGxCT3B0aW9ucyIsInNraWxsQ09wdGlvbnMiLCJzZWFsT3B0aW9ucyIsInNlYWwiLCJpZCIsIm5hbWUiLCJzcCIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLE1BQVQsT0FRRztBQUFBLE1BUERDLEtBT0MsUUFQREEsS0FPQztBQUFBLE1BTkRDLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLE1BS0MsUUFMREEsTUFLQztBQUNELE1BQUlDLE1BQU0sR0FBRyxLQUFiOztBQUNBLE1BQUlGLFFBQVEsSUFBSSxDQUFDRCxLQUFLLENBQUNJLElBQXZCLEVBQTZCO0FBQzNCRCxVQUFNLEdBQUcsSUFBVDtBQUNEOztBQUNELE1BQUksQ0FBQ0EsTUFBRCxJQUFXRCxNQUFmLEVBQXVCO0FBQ3JCQyxVQUFNLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDSyxLQUFOLENBQVlDLFFBQVosQ0FBcUJKLE1BQU0sQ0FBQ0ssV0FBUCxFQUFyQixDQUFWO0FBQ0Q7O0FBQ0QseUNBQ0tQLEtBREw7QUFFRUcsVUFBTSxFQUFOQTtBQUZGO0FBSUQ7O0FBRWMsU0FBU0ssUUFBVCxRQVFaO0FBQUE7O0FBQUEsTUFQREMsTUFP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QUFFO0FBQTVDLEtBTEYsNEhBTUtOLGFBTkwsSUFPRTtBQUFFRyxRQUFFLEVBQUUsT0FBTjtBQUFlQyxVQUFJLEVBQUUsTUFBckI7QUFBNkJDLFFBQUUsRUFBRSxDQUFqQztBQUFvQ0MsVUFBSSxFQUFFO0FBQTFDLEtBUEYsNEhBUUtMLFdBUkw7QUFVRCxHQTNDZ0MsRUEyQzlCLENBQUNaLFFBQUQsRUFBV0MsTUFBWCxFQUFtQkMsTUFBbkIsRUFBMkJMLE1BQTNCLEVBQW1DUCxNQUFuQyxFQUEyQ0QsUUFBM0MsQ0EzQzhCLENBQWpDO0FBNkNBLFNBQU87QUFDTGMsV0FBTyxFQUFQQTtBQURLLEdBQVA7QUFHRDs7R0E1RHVCUCxRO1VBU1JHLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuY2I4YTE3YTY0OGFjNDc5ZjQ0YjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5pbXBvcnQgeyBnZXRTa2lsbE9wdGlvbnMgfSBmcm9tICdAL2FwcC91dGlscy9za2lsbCc7XG5pbXBvcnQgeyBUU2tpbGwgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBtYXBwZXIoe1xuICBza2lsbCxcbiAgbWF4U2tpbGwsXG4gIGZpbHRlcixcbn06IHtcbiAgc2tpbGw6IFRTa2lsbCAmIHsgcXVlcnk6IHN0cmluZyB9O1xuICBtYXhTa2lsbDogYm9vbGVhbjtcbiAgZmlsdGVyOiBzdHJpbmc7XG59KSB7XG4gIGxldCBoaWRkZW4gPSBmYWxzZTtcbiAgaWYgKG1heFNraWxsICYmICFza2lsbC5sYXN0KSB7XG4gICAgaGlkZGVuID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWhpZGRlbiAmJiBmaWx0ZXIpIHtcbiAgICBoaWRkZW4gPSAhc2tpbGwucXVlcnkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4uc2tpbGwsXG4gICAgaGlkZGVuLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIb29rcyh7XG4gIGhlcm9JZCxcbiAgZmlsdGVyLFxuICBtYXhTa2lsbCxcbn06IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIGZpbHRlcjogc3RyaW5nO1xuICBtYXhTa2lsbD86IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IGZlaERCID0gdXNlRmVoREIoKTtcbiAgY29uc3QgeyBydWxlczJEQiwgaGVyb0RCLCBzZWFsREIgfSA9IGZlaERCO1xuXG4gIGNvbnN0IG9wdGlvbnM6IFRTa2lsbFtdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc2tpbGxBT3B0aW9ucyA9IGdldFNraWxsT3B0aW9ucyh7XG4gICAgICBydWxlczJEQixcbiAgICAgIGhlcm9EQixcbiAgICAgIHNraWxsREI6IHNlYWxEQi5za2lsbEEsXG4gICAgICBoZXJvSWQsXG4gICAgfSkubWFwKChza2lsbCkgPT4ge1xuICAgICAgcmV0dXJuIG1hcHBlcih7IHNraWxsLCBtYXhTa2lsbCwgZmlsdGVyIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IHNraWxsQk9wdGlvbnMgPSBnZXRTa2lsbE9wdGlvbnMoe1xuICAgICAgcnVsZXMyREIsXG4gICAgICBoZXJvREIsXG4gICAgICBza2lsbERCOiBzZWFsREIuc2tpbGxBLFxuICAgICAgaGVyb0lkLFxuICAgIH0pLm1hcCgoc2tpbGwpID0+IHtcbiAgICAgIHJldHVybiBtYXBwZXIoeyBza2lsbCwgbWF4U2tpbGwsIGZpbHRlciB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBza2lsbENPcHRpb25zID0gZ2V0U2tpbGxPcHRpb25zKHtcbiAgICAgIHJ1bGVzMkRCLFxuICAgICAgaGVyb0RCLFxuICAgICAgc2tpbGxEQjogc2VhbERCLnNraWxsQSxcbiAgICAgIGhlcm9JZCxcbiAgICB9KS5tYXAoKHNraWxsKSA9PiB7XG4gICAgICByZXR1cm4gbWFwcGVyKHsgc2tpbGwsIG1heFNraWxsLCBmaWx0ZXIgfSk7XG4gICAgfSk7XG4gICAgY29uc3Qgc2VhbE9wdGlvbnMgPSBnZXRTa2lsbE9wdGlvbnMoe1xuICAgICAgcnVsZXMyREIsXG4gICAgICBoZXJvREIsXG4gICAgICBza2lsbERCOiBzZWFsREIuc2VhbCxcbiAgICAgIGhlcm9JZCxcbiAgICB9KS5tYXAoKHNraWxsKSA9PiB7XG4gICAgICByZXR1cm4gbWFwcGVyKHsgc2tpbGwsIG1heFNraWxsLCBmaWx0ZXIgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgaWQ6ICdfc2VhbGEnLCBuYW1lOiAnQeaKgOiDveiBluWNsCcsIHNwOiAwLCBpY29uOiAnJyB9LFxuICAgICAgLi4uc2tpbGxBT3B0aW9ucyxcbiAgICAgIHsgaWQ6ICdfc2VhbGInLCBuYW1lOiAnQuaKgOiDveiBluWNsCcsIHNwOiAwLCBpY29uOiAnJyB9LFxuICAgICAgLi4uc2tpbGxCT3B0aW9ucyxcbiAgICAgIHsgaWQ6ICdfc2VhbEMnLCBuYW1lOiAnQ+aKgOiDveiBluWNsCcsIHNwOiAwLCBpY29uOiAnJyB9LFxuICAgICAgLi4uc2tpbGxDT3B0aW9ucyxcbiAgICAgIHsgaWQ6ICdfc2VhbCcsIG5hbWU6ICflsIjnlKjogZbljbAnLCBzcDogMCwgaWNvbjogJycgfSxcbiAgICAgIC4uLnNlYWxPcHRpb25zLFxuICAgIF07XG4gIH0sIFtydWxlczJEQiwgaGVyb0RCLCBzZWFsREIsIGhlcm9JZCwgZmlsdGVyLCBtYXhTa2lsbF0pO1xuXG4gIHJldHVybiB7XG4gICAgb3B0aW9ucyxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=