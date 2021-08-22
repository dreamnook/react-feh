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
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* harmony import */ var _app_utils_skill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/skill */ "./app/utils/skill.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$();




function useHooks(_ref) {
  _s();

  var heroId = _ref.heroId,
      filter = _ref.filter,
      maxSkill = _ref.maxSkill;
  var fehDB = (0,_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__.useFehDB)();
  var rules2DB = fehDB.rules2DB,
      heroDB = fehDB.heroDB,
      sealDB = fehDB.sealDB;
  var sealOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    var skillAOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_2__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.skillA,
      heroId: heroId
    });
    var skillBOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_2__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.skillB,
      heroId: heroId
    });
    var skillCOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_2__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.skillC,
      heroId: heroId
    });
    var sealOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_2__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.seal,
      heroId: heroId
    });
    return [{
      id: '_sealA',
      name: 'A技能聖印',
      sp: 0,
      icon: '',
      query: ''
    }].concat((0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(skillAOptions), [{
      id: '_sealB',
      name: 'B技能聖印',
      sp: 0,
      icon: '',
      query: ''
    }], (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(skillBOptions), [{
      id: '_sealC',
      name: 'C技能聖印',
      sp: 0,
      icon: '',
      query: ''
    }], (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(skillCOptions), [{
      id: '_seal',
      name: '專用聖印',
      sp: 0,
      icon: '',
      query: ''
    }], (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sealOptions));
  }, [rules2DB, heroDB, sealDB, heroId]);
  var computedOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    return sealOptions.filter(function (skill) {
      if (['_sealA', '_sealB', '_sealC', '_seal'].includes(skill.id)) {
        return true;
      }

      if (maxSkill && !skill.last) {
        return false;
      }

      if (filter) {
        return skill.query.includes(filter.toLowerCase());
      }

      return true;
    });
  }, [sealOptions, filter, maxSkill]);
  return {
    options: computedOptions
  };
}

_s(useHooks, "rl15Z2TgqqNt3EOaAaJmRZxJmW8=", false, function () {
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__.useFehDB];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NlYWxQaWNrZXJWaWV3L1NlYWxQaWNrZXIvaG9va3MudHN4Il0sIm5hbWVzIjpbInVzZUhvb2tzIiwiaGVyb0lkIiwiZmlsdGVyIiwibWF4U2tpbGwiLCJmZWhEQiIsInVzZUZlaERCIiwicnVsZXMyREIiLCJoZXJvREIiLCJzZWFsREIiLCJzZWFsT3B0aW9ucyIsInVzZU1lbW8iLCJza2lsbEFPcHRpb25zIiwiZ2V0U2tpbGxPcHRpb25zIiwic2tpbGxEQiIsInNraWxsQSIsInNraWxsQk9wdGlvbnMiLCJza2lsbEIiLCJza2lsbENPcHRpb25zIiwic2tpbGxDIiwic2VhbCIsImlkIiwibmFtZSIsInNwIiwiaWNvbiIsInF1ZXJ5IiwiY29tcHV0ZWRPcHRpb25zIiwic2tpbGwiLCJpbmNsdWRlcyIsImxhc3QiLCJ0b0xvd2VyQ2FzZSIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRWUsU0FBU0EsUUFBVCxPQVFaO0FBQUE7O0FBQUEsTUFQREMsTUFPQyxRQVBEQSxNQU9DO0FBQUEsTUFOREMsTUFNQyxRQU5EQSxNQU1DO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQ0QsTUFBTUMsS0FBSyxHQUFHQyx5REFBUSxFQUF0QjtBQURDLE1BRU9DLFFBRlAsR0FFb0NGLEtBRnBDLENBRU9FLFFBRlA7QUFBQSxNQUVpQkMsTUFGakIsR0FFb0NILEtBRnBDLENBRWlCRyxNQUZqQjtBQUFBLE1BRXlCQyxNQUZ6QixHQUVvQ0osS0FGcEMsQ0FFeUJJLE1BRnpCO0FBSUQsTUFBTUMsV0FBMkMsR0FBR0MsOENBQU8sQ0FBQyxZQUFNO0FBQ2hFLFFBQU1DLGFBQWEsR0FBR0MsaUVBQWUsQ0FBQztBQUNwQ04sY0FBUSxFQUFSQSxRQURvQztBQUVwQ0MsWUFBTSxFQUFOQSxNQUZvQztBQUdwQ00sYUFBTyxFQUFFTCxNQUFNLENBQUNNLE1BSG9CO0FBSXBDYixZQUFNLEVBQU5BO0FBSm9DLEtBQUQsQ0FBckM7QUFNQSxRQUFNYyxhQUFhLEdBQUdILGlFQUFlLENBQUM7QUFDcENOLGNBQVEsRUFBUkEsUUFEb0M7QUFFcENDLFlBQU0sRUFBTkEsTUFGb0M7QUFHcENNLGFBQU8sRUFBRUwsTUFBTSxDQUFDUSxNQUhvQjtBQUlwQ2YsWUFBTSxFQUFOQTtBQUpvQyxLQUFELENBQXJDO0FBTUEsUUFBTWdCLGFBQWEsR0FBR0wsaUVBQWUsQ0FBQztBQUNwQ04sY0FBUSxFQUFSQSxRQURvQztBQUVwQ0MsWUFBTSxFQUFOQSxNQUZvQztBQUdwQ00sYUFBTyxFQUFFTCxNQUFNLENBQUNVLE1BSG9CO0FBSXBDakIsWUFBTSxFQUFOQTtBQUpvQyxLQUFELENBQXJDO0FBTUEsUUFBTVEsV0FBVyxHQUFHRyxpRUFBZSxDQUFDO0FBQ2xDTixjQUFRLEVBQVJBLFFBRGtDO0FBRWxDQyxZQUFNLEVBQU5BLE1BRmtDO0FBR2xDTSxhQUFPLEVBQUVMLE1BQU0sQ0FBQ1csSUFIa0I7QUFJbENsQixZQUFNLEVBQU5BO0FBSmtDLEtBQUQsQ0FBbkM7QUFNQSxZQUNFO0FBQUVtQixRQUFFLEVBQUUsUUFBTjtBQUFnQkMsVUFBSSxFQUFFLE9BQXRCO0FBQStCQyxRQUFFLEVBQUUsQ0FBbkM7QUFBc0NDLFVBQUksRUFBRSxFQUE1QztBQUFnREMsV0FBSyxFQUFFO0FBQXZELEtBREYsa0lBRUtiLGFBRkwsSUFHRTtBQUFFUyxRQUFFLEVBQUUsUUFBTjtBQUFnQkMsVUFBSSxFQUFFLE9BQXRCO0FBQStCQyxRQUFFLEVBQUUsQ0FBbkM7QUFBc0NDLFVBQUksRUFBRSxFQUE1QztBQUFnREMsV0FBSyxFQUFFO0FBQXZELEtBSEYsNEhBSUtULGFBSkwsSUFLRTtBQUFFSyxRQUFFLEVBQUUsUUFBTjtBQUFnQkMsVUFBSSxFQUFFLE9BQXRCO0FBQStCQyxRQUFFLEVBQUUsQ0FBbkM7QUFBc0NDLFVBQUksRUFBRSxFQUE1QztBQUFnREMsV0FBSyxFQUFFO0FBQXZELEtBTEYsNEhBTUtQLGFBTkwsSUFPRTtBQUFFRyxRQUFFLEVBQUUsT0FBTjtBQUFlQyxVQUFJLEVBQUUsTUFBckI7QUFBNkJDLFFBQUUsRUFBRSxDQUFqQztBQUFvQ0MsVUFBSSxFQUFFLEVBQTFDO0FBQThDQyxXQUFLLEVBQUU7QUFBckQsS0FQRiw0SEFRS2YsV0FSTDtBQVVELEdBbkMwRCxFQW1DeEQsQ0FBQ0gsUUFBRCxFQUFXQyxNQUFYLEVBQW1CQyxNQUFuQixFQUEyQlAsTUFBM0IsQ0FuQ3dELENBQTNEO0FBcUNBLE1BQU13QixlQUFlLEdBQUdmLDhDQUFPLENBQUMsWUFBTTtBQUNwQyxXQUFPRCxXQUFXLENBQUNQLE1BQVosQ0FBbUIsVUFBQ3dCLEtBQUQsRUFBVztBQUNuQyxVQUFJLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsUUFBckIsRUFBK0IsT0FBL0IsRUFBd0NDLFFBQXhDLENBQWlERCxLQUFLLENBQUNOLEVBQXZELENBQUosRUFBZ0U7QUFDOUQsZUFBTyxJQUFQO0FBQ0Q7O0FBQ0QsVUFBSWpCLFFBQVEsSUFBSSxDQUFDdUIsS0FBSyxDQUFDRSxJQUF2QixFQUE2QjtBQUMzQixlQUFPLEtBQVA7QUFDRDs7QUFDRCxVQUFJMUIsTUFBSixFQUFZO0FBQ1YsZUFBT3dCLEtBQUssQ0FBQ0YsS0FBTixDQUFZRyxRQUFaLENBQXFCekIsTUFBTSxDQUFDMkIsV0FBUCxFQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0QsS0FYTSxDQUFQO0FBWUQsR0FiOEIsRUFhNUIsQ0FBQ3BCLFdBQUQsRUFBY1AsTUFBZCxFQUFzQkMsUUFBdEIsQ0FiNEIsQ0FBL0I7QUFlQSxTQUFPO0FBQ0wyQixXQUFPLEVBQUVMO0FBREosR0FBUDtBQUdEOztHQW5FdUJ6QixRO1VBU1JLLHFEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuMzhlNzYyOWY0MTgwNTA3ZGE1YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5pbXBvcnQgeyBnZXRTa2lsbE9wdGlvbnMgfSBmcm9tICdAL2FwcC91dGlscy9za2lsbCc7XG5pbXBvcnQgeyBUU2tpbGwgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VIb29rcyh7XG4gIGhlcm9JZCxcbiAgZmlsdGVyLFxuICBtYXhTa2lsbCxcbn06IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIGZpbHRlcjogc3RyaW5nO1xuICBtYXhTa2lsbD86IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IGZlaERCID0gdXNlRmVoREIoKTtcbiAgY29uc3QgeyBydWxlczJEQiwgaGVyb0RCLCBzZWFsREIgfSA9IGZlaERCO1xuXG4gIGNvbnN0IHNlYWxPcHRpb25zOiAoVFNraWxsICYgeyBxdWVyeTogc3RyaW5nIH0pW10gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBza2lsbEFPcHRpb25zID0gZ2V0U2tpbGxPcHRpb25zKHtcbiAgICAgIHJ1bGVzMkRCLFxuICAgICAgaGVyb0RCLFxuICAgICAgc2tpbGxEQjogc2VhbERCLnNraWxsQSxcbiAgICAgIGhlcm9JZCxcbiAgICB9KTtcbiAgICBjb25zdCBza2lsbEJPcHRpb25zID0gZ2V0U2tpbGxPcHRpb25zKHtcbiAgICAgIHJ1bGVzMkRCLFxuICAgICAgaGVyb0RCLFxuICAgICAgc2tpbGxEQjogc2VhbERCLnNraWxsQixcbiAgICAgIGhlcm9JZCxcbiAgICB9KTtcbiAgICBjb25zdCBza2lsbENPcHRpb25zID0gZ2V0U2tpbGxPcHRpb25zKHtcbiAgICAgIHJ1bGVzMkRCLFxuICAgICAgaGVyb0RCLFxuICAgICAgc2tpbGxEQjogc2VhbERCLnNraWxsQyxcbiAgICAgIGhlcm9JZCxcbiAgICB9KTtcbiAgICBjb25zdCBzZWFsT3B0aW9ucyA9IGdldFNraWxsT3B0aW9ucyh7XG4gICAgICBydWxlczJEQixcbiAgICAgIGhlcm9EQixcbiAgICAgIHNraWxsREI6IHNlYWxEQi5zZWFsLFxuICAgICAgaGVyb0lkLFxuICAgIH0pO1xuICAgIHJldHVybiBbXG4gICAgICB7IGlkOiAnX3NlYWxBJywgbmFtZTogJ0HmioDog73ogZbljbAnLCBzcDogMCwgaWNvbjogJycsIHF1ZXJ5OiAnJyB9LFxuICAgICAgLi4uc2tpbGxBT3B0aW9ucyxcbiAgICAgIHsgaWQ6ICdfc2VhbEInLCBuYW1lOiAnQuaKgOiDveiBluWNsCcsIHNwOiAwLCBpY29uOiAnJywgcXVlcnk6ICcnIH0sXG4gICAgICAuLi5za2lsbEJPcHRpb25zLFxuICAgICAgeyBpZDogJ19zZWFsQycsIG5hbWU6ICdD5oqA6IO96IGW5Y2wJywgc3A6IDAsIGljb246ICcnLCBxdWVyeTogJycgfSxcbiAgICAgIC4uLnNraWxsQ09wdGlvbnMsXG4gICAgICB7IGlkOiAnX3NlYWwnLCBuYW1lOiAn5bCI55So6IGW5Y2wJywgc3A6IDAsIGljb246ICcnLCBxdWVyeTogJycgfSxcbiAgICAgIC4uLnNlYWxPcHRpb25zLFxuICAgIF07XG4gIH0sIFtydWxlczJEQiwgaGVyb0RCLCBzZWFsREIsIGhlcm9JZF0pO1xuXG4gIGNvbnN0IGNvbXB1dGVkT3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBzZWFsT3B0aW9ucy5maWx0ZXIoKHNraWxsKSA9PiB7XG4gICAgICBpZiAoWydfc2VhbEEnLCAnX3NlYWxCJywgJ19zZWFsQycsICdfc2VhbCddLmluY2x1ZGVzKHNraWxsLmlkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhTa2lsbCAmJiAhc2tpbGwubGFzdCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBza2lsbC5xdWVyeS5pbmNsdWRlcyhmaWx0ZXIudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfSwgW3NlYWxPcHRpb25zLCBmaWx0ZXIsIG1heFNraWxsXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zOiBjb21wdXRlZE9wdGlvbnMsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9