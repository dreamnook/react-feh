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
  console.log(computedOptions);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NlYWxQaWNrZXJWaWV3L1NlYWxQaWNrZXIvaG9va3MudHN4Il0sIm5hbWVzIjpbInVzZUhvb2tzIiwiaGVyb0lkIiwiZmlsdGVyIiwibWF4U2tpbGwiLCJmZWhEQiIsInVzZUZlaERCIiwicnVsZXMyREIiLCJoZXJvREIiLCJzZWFsREIiLCJzZWFsT3B0aW9ucyIsInVzZU1lbW8iLCJza2lsbEFPcHRpb25zIiwiZ2V0U2tpbGxPcHRpb25zIiwic2tpbGxEQiIsInNraWxsQSIsInNraWxsQk9wdGlvbnMiLCJza2lsbEIiLCJza2lsbENPcHRpb25zIiwic2tpbGxDIiwic2VhbCIsImlkIiwibmFtZSIsInNwIiwiaWNvbiIsInF1ZXJ5IiwiY29tcHV0ZWRPcHRpb25zIiwic2tpbGwiLCJpbmNsdWRlcyIsImxhc3QiLCJ0b0xvd2VyQ2FzZSIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsT0FRWjtBQUFBOztBQUFBLE1BUERDLE1BT0MsUUFQREEsTUFPQztBQUFBLE1BTkRDLE1BTUMsUUFOREEsTUFNQztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUNELE1BQU1DLEtBQUssR0FBR0MseURBQVEsRUFBdEI7QUFEQyxNQUVPQyxRQUZQLEdBRW9DRixLQUZwQyxDQUVPRSxRQUZQO0FBQUEsTUFFaUJDLE1BRmpCLEdBRW9DSCxLQUZwQyxDQUVpQkcsTUFGakI7QUFBQSxNQUV5QkMsTUFGekIsR0FFb0NKLEtBRnBDLENBRXlCSSxNQUZ6QjtBQUlELE1BQU1DLFdBQTJDLEdBQUdDLDhDQUFPLENBQUMsWUFBTTtBQUNoRSxRQUFNQyxhQUFhLEdBQUdDLGlFQUFlLENBQUM7QUFDcENOLGNBQVEsRUFBUkEsUUFEb0M7QUFFcENDLFlBQU0sRUFBTkEsTUFGb0M7QUFHcENNLGFBQU8sRUFBRUwsTUFBTSxDQUFDTSxNQUhvQjtBQUlwQ2IsWUFBTSxFQUFOQTtBQUpvQyxLQUFELENBQXJDO0FBTUEsUUFBTWMsYUFBYSxHQUFHSCxpRUFBZSxDQUFDO0FBQ3BDTixjQUFRLEVBQVJBLFFBRG9DO0FBRXBDQyxZQUFNLEVBQU5BLE1BRm9DO0FBR3BDTSxhQUFPLEVBQUVMLE1BQU0sQ0FBQ1EsTUFIb0I7QUFJcENmLFlBQU0sRUFBTkE7QUFKb0MsS0FBRCxDQUFyQztBQU1BLFFBQU1nQixhQUFhLEdBQUdMLGlFQUFlLENBQUM7QUFDcENOLGNBQVEsRUFBUkEsUUFEb0M7QUFFcENDLFlBQU0sRUFBTkEsTUFGb0M7QUFHcENNLGFBQU8sRUFBRUwsTUFBTSxDQUFDVSxNQUhvQjtBQUlwQ2pCLFlBQU0sRUFBTkE7QUFKb0MsS0FBRCxDQUFyQztBQU1BLFFBQU1RLFdBQVcsR0FBR0csaUVBQWUsQ0FBQztBQUNsQ04sY0FBUSxFQUFSQSxRQURrQztBQUVsQ0MsWUFBTSxFQUFOQSxNQUZrQztBQUdsQ00sYUFBTyxFQUFFTCxNQUFNLENBQUNXLElBSGtCO0FBSWxDbEIsWUFBTSxFQUFOQTtBQUprQyxLQUFELENBQW5DO0FBTUEsWUFDRTtBQUFFbUIsUUFBRSxFQUFFLFFBQU47QUFBZ0JDLFVBQUksRUFBRSxPQUF0QjtBQUErQkMsUUFBRSxFQUFFLENBQW5DO0FBQXNDQyxVQUFJLEVBQUUsRUFBNUM7QUFBZ0RDLFdBQUssRUFBRTtBQUF2RCxLQURGLGtJQUVLYixhQUZMLElBR0U7QUFBRVMsUUFBRSxFQUFFLFFBQU47QUFBZ0JDLFVBQUksRUFBRSxPQUF0QjtBQUErQkMsUUFBRSxFQUFFLENBQW5DO0FBQXNDQyxVQUFJLEVBQUUsRUFBNUM7QUFBZ0RDLFdBQUssRUFBRTtBQUF2RCxLQUhGLDRIQUlLVCxhQUpMLElBS0U7QUFBRUssUUFBRSxFQUFFLFFBQU47QUFBZ0JDLFVBQUksRUFBRSxPQUF0QjtBQUErQkMsUUFBRSxFQUFFLENBQW5DO0FBQXNDQyxVQUFJLEVBQUUsRUFBNUM7QUFBZ0RDLFdBQUssRUFBRTtBQUF2RCxLQUxGLDRIQU1LUCxhQU5MLElBT0U7QUFBRUcsUUFBRSxFQUFFLE9BQU47QUFBZUMsVUFBSSxFQUFFLE1BQXJCO0FBQTZCQyxRQUFFLEVBQUUsQ0FBakM7QUFBb0NDLFVBQUksRUFBRSxFQUExQztBQUE4Q0MsV0FBSyxFQUFFO0FBQXJELEtBUEYsNEhBUUtmLFdBUkw7QUFVRCxHQW5DMEQsRUFtQ3hELENBQUNILFFBQUQsRUFBV0MsTUFBWCxFQUFtQkMsTUFBbkIsRUFBMkJQLE1BQTNCLENBbkN3RCxDQUEzRDtBQXFDQSxNQUFNd0IsZUFBZSxHQUFHZiw4Q0FBTyxDQUFDLFlBQU07QUFDcEMsV0FBT0QsV0FBVyxDQUFDUCxNQUFaLENBQW1CLFVBQUN3QixLQUFELEVBQVc7QUFDbkMsVUFBSSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFFBQXJCLEVBQStCLE9BQS9CLEVBQXdDQyxRQUF4QyxDQUFpREQsS0FBSyxDQUFDTixFQUF2RCxDQUFKLEVBQWdFO0FBQzlELGVBQU8sSUFBUDtBQUNEOztBQUNELFVBQUlqQixRQUFRLElBQUksQ0FBQ3VCLEtBQUssQ0FBQ0UsSUFBdkIsRUFBNkI7QUFDM0IsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsVUFBSTFCLE1BQUosRUFBWTtBQUNWLGVBQU93QixLQUFLLENBQUNGLEtBQU4sQ0FBWUcsUUFBWixDQUFxQnpCLE1BQU0sQ0FBQzJCLFdBQVAsRUFBckIsQ0FBUDtBQUNEOztBQUNELGFBQU8sSUFBUDtBQUNELEtBWE0sQ0FBUDtBQVlELEdBYjhCLEVBYTVCLENBQUNwQixXQUFELEVBQWNQLE1BQWQsRUFBc0JDLFFBQXRCLENBYjRCLENBQS9CO0FBZUEyQixTQUFPLENBQUNDLEdBQVIsQ0FBWU4sZUFBWjtBQUVBLFNBQU87QUFDTE8sV0FBTyxFQUFFUDtBQURKLEdBQVA7QUFHRDs7R0FyRXVCekIsUTtVQVNSSyxxRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLmVhYzVjZDQzNTQ0Mjg1Y2MzMTYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VGZWhEQiB9IGZyb20gJ0AvYXBwL3BhZ2UvRkVIREInO1xuaW1wb3J0IHsgZ2V0U2tpbGxPcHRpb25zIH0gZnJvbSAnQC9hcHAvdXRpbHMvc2tpbGwnO1xuaW1wb3J0IHsgVFNraWxsIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSG9va3Moe1xuICBoZXJvSWQsXG4gIGZpbHRlcixcbiAgbWF4U2tpbGwsXG59OiB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBmaWx0ZXI6IHN0cmluZztcbiAgbWF4U2tpbGw/OiBib29sZWFuO1xufSkge1xuICBjb25zdCBmZWhEQiA9IHVzZUZlaERCKCk7XG4gIGNvbnN0IHsgcnVsZXMyREIsIGhlcm9EQiwgc2VhbERCIH0gPSBmZWhEQjtcblxuICBjb25zdCBzZWFsT3B0aW9uczogKFRTa2lsbCAmIHsgcXVlcnk6IHN0cmluZyB9KVtdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc2tpbGxBT3B0aW9ucyA9IGdldFNraWxsT3B0aW9ucyh7XG4gICAgICBydWxlczJEQixcbiAgICAgIGhlcm9EQixcbiAgICAgIHNraWxsREI6IHNlYWxEQi5za2lsbEEsXG4gICAgICBoZXJvSWQsXG4gICAgfSk7XG4gICAgY29uc3Qgc2tpbGxCT3B0aW9ucyA9IGdldFNraWxsT3B0aW9ucyh7XG4gICAgICBydWxlczJEQixcbiAgICAgIGhlcm9EQixcbiAgICAgIHNraWxsREI6IHNlYWxEQi5za2lsbEIsXG4gICAgICBoZXJvSWQsXG4gICAgfSk7XG4gICAgY29uc3Qgc2tpbGxDT3B0aW9ucyA9IGdldFNraWxsT3B0aW9ucyh7XG4gICAgICBydWxlczJEQixcbiAgICAgIGhlcm9EQixcbiAgICAgIHNraWxsREI6IHNlYWxEQi5za2lsbEMsXG4gICAgICBoZXJvSWQsXG4gICAgfSk7XG4gICAgY29uc3Qgc2VhbE9wdGlvbnMgPSBnZXRTa2lsbE9wdGlvbnMoe1xuICAgICAgcnVsZXMyREIsXG4gICAgICBoZXJvREIsXG4gICAgICBza2lsbERCOiBzZWFsREIuc2VhbCxcbiAgICAgIGhlcm9JZCxcbiAgICB9KTtcbiAgICByZXR1cm4gW1xuICAgICAgeyBpZDogJ19zZWFsQScsIG5hbWU6ICdB5oqA6IO96IGW5Y2wJywgc3A6IDAsIGljb246ICcnLCBxdWVyeTogJycgfSxcbiAgICAgIC4uLnNraWxsQU9wdGlvbnMsXG4gICAgICB7IGlkOiAnX3NlYWxCJywgbmFtZTogJ0LmioDog73ogZbljbAnLCBzcDogMCwgaWNvbjogJycsIHF1ZXJ5OiAnJyB9LFxuICAgICAgLi4uc2tpbGxCT3B0aW9ucyxcbiAgICAgIHsgaWQ6ICdfc2VhbEMnLCBuYW1lOiAnQ+aKgOiDveiBluWNsCcsIHNwOiAwLCBpY29uOiAnJywgcXVlcnk6ICcnIH0sXG4gICAgICAuLi5za2lsbENPcHRpb25zLFxuICAgICAgeyBpZDogJ19zZWFsJywgbmFtZTogJ+WwiOeUqOiBluWNsCcsIHNwOiAwLCBpY29uOiAnJywgcXVlcnk6ICcnIH0sXG4gICAgICAuLi5zZWFsT3B0aW9ucyxcbiAgICBdO1xuICB9LCBbcnVsZXMyREIsIGhlcm9EQiwgc2VhbERCLCBoZXJvSWRdKTtcblxuICBjb25zdCBjb21wdXRlZE9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gc2VhbE9wdGlvbnMuZmlsdGVyKChza2lsbCkgPT4ge1xuICAgICAgaWYgKFsnX3NlYWxBJywgJ19zZWFsQicsICdfc2VhbEMnLCAnX3NlYWwnXS5pbmNsdWRlcyhza2lsbC5pZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobWF4U2tpbGwgJiYgIXNraWxsLmxhc3QpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICByZXR1cm4gc2tpbGwucXVlcnkuaW5jbHVkZXMoZmlsdGVyLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH0sIFtzZWFsT3B0aW9ucywgZmlsdGVyLCBtYXhTa2lsbF0pO1xuXG4gIGNvbnNvbGUubG9nKGNvbXB1dGVkT3B0aW9ucyk7XG5cbiAgcmV0dXJuIHtcbiAgICBvcHRpb25zOiBjb21wdXRlZE9wdGlvbnMsXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9