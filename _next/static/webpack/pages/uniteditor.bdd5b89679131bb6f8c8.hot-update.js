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
  var sealOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
    var skillAOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_3__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.skillA,
      heroId: heroId
    });
    var skillBOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_3__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.skillA,
      heroId: heroId
    });
    var skillCOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_3__.getSkillOptions)({
      rules2DB: rules2DB,
      heroDB: heroDB,
      skillDB: sealDB.skillA,
      heroId: heroId
    });
    var sealOptions = (0,_app_utils_skill__WEBPACK_IMPORTED_MODULE_3__.getSkillOptions)({
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
  var computedOptions = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NlYWxQaWNrZXJWaWV3L1NlYWxQaWNrZXIvaG9va3MudHN4Il0sIm5hbWVzIjpbIm1hcHBlciIsInNraWxsIiwibWF4U2tpbGwiLCJmaWx0ZXIiLCJoaWRkZW4iLCJsYXN0IiwicXVlcnkiLCJpbmNsdWRlcyIsInRvTG93ZXJDYXNlIiwidXNlSG9va3MiLCJoZXJvSWQiLCJmZWhEQiIsInVzZUZlaERCIiwicnVsZXMyREIiLCJoZXJvREIiLCJzZWFsREIiLCJzZWFsT3B0aW9ucyIsInVzZU1lbW8iLCJza2lsbEFPcHRpb25zIiwiZ2V0U2tpbGxPcHRpb25zIiwic2tpbGxEQiIsInNraWxsQSIsInNraWxsQk9wdGlvbnMiLCJza2lsbENPcHRpb25zIiwic2VhbCIsImlkIiwibmFtZSIsInNwIiwiaWNvbiIsImNvbXB1dGVkT3B0aW9ucyIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLE1BQVQsT0FRRztBQUFBLE1BUERDLEtBT0MsUUFQREEsS0FPQztBQUFBLE1BTkRDLFFBTUMsUUFOREEsUUFNQztBQUFBLE1BTERDLE1BS0MsUUFMREEsTUFLQztBQUNELE1BQUlDLE1BQU0sR0FBRyxLQUFiOztBQUNBLE1BQUlGLFFBQVEsSUFBSSxDQUFDRCxLQUFLLENBQUNJLElBQXZCLEVBQTZCO0FBQzNCRCxVQUFNLEdBQUcsSUFBVDtBQUNEOztBQUNELE1BQUksQ0FBQ0EsTUFBRCxJQUFXRCxNQUFmLEVBQXVCO0FBQ3JCQyxVQUFNLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDSyxLQUFOLENBQVlDLFFBQVosQ0FBcUJKLE1BQU0sQ0FBQ0ssV0FBUCxFQUFyQixDQUFWO0FBQ0Q7O0FBQ0QseUNBQ0tQLEtBREw7QUFFRUcsVUFBTSxFQUFOQTtBQUZGO0FBSUQ7O0FBRWMsU0FBU0ssUUFBVCxRQVFaO0FBQUE7O0FB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Q0Q7O0FBQ0QsVUFBSUYsTUFBSixFQUFZO0FBQ1YsZUFBT0YsS0FBSyxDQUFDSyxLQUFOLENBQVlDLFFBQVosQ0FBcUJKLE1BQU0sQ0FBQ0ssV0FBUCxFQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFQO0FBQ0QsS0FYTSxDQUFQO0FBWUQsR0FiOEIsRUFhNUIsQ0FBQ1EsV0FBRCxFQUFjYixNQUFkLEVBQXNCRCxRQUF0QixDQWI0QixDQUEvQjtBQWVBLFNBQU87QUFDTDRCLFdBQU8sRUFBRUQ7QUFESixHQUFQO0FBR0Q7O0dBbkV1QnBCLFE7VUFTUkcscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci5iZGQ1Yjg5Njc5MTMxYmI2ZjhjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRmVoREIgfSBmcm9tICdAL2FwcC9wYWdlL0ZFSERCJztcbmltcG9ydCB7IGdldFNraWxsT3B0aW9ucyB9IGZyb20gJ0AvYXBwL3V0aWxzL3NraWxsJztcbmltcG9ydCB7IFRTa2lsbCB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIG1hcHBlcih7XG4gIHNraWxsLFxuICBtYXhTa2lsbCxcbiAgZmlsdGVyLFxufToge1xuICBza2lsbDogVFNraWxsICYgeyBxdWVyeTogc3RyaW5nIH07XG4gIG1heFNraWxsOiBib29sZWFuO1xuICBmaWx0ZXI6IHN0cmluZztcbn0pIHtcbiAgbGV0IGhpZGRlbiA9IGZhbHNlO1xuICBpZiAobWF4U2tpbGwgJiYgIXNraWxsLmxhc3QpIHtcbiAgICBoaWRkZW4gPSB0cnVlO1xuICB9XG4gIGlmICghaGlkZGVuICYmIGZpbHRlcikge1xuICAgIGhpZGRlbiA9ICFza2lsbC5xdWVyeS5pbmNsdWRlcyhmaWx0ZXIudG9Mb3dlckNhc2UoKSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5za2lsbCxcbiAgICBoaWRkZW4sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUhvb2tzKHtcbiAgaGVyb0lkLFxuICBmaWx0ZXIsXG4gIG1heFNraWxsLFxufToge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgZmlsdGVyOiBzdHJpbmc7XG4gIG1heFNraWxsPzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgZmVoREIgPSB1c2VGZWhEQigpO1xuICBjb25zdCB7IHJ1bGVzMkRCLCBoZXJvREIsIHNlYWxEQiB9ID0gZmVoREI7XG5cbiAgY29uc3Qgc2VhbE9wdGlvbnM6IChUU2tpbGwgJiB7IHF1ZXJ5OiBzdHJpbmcgfSlbXSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHNraWxsQU9wdGlvbnMgPSBnZXRTa2lsbE9wdGlvbnMoe1xuICAgICAgcnVsZXMyREIsXG4gICAgICBoZXJvREIsXG4gICAgICBza2lsbERCOiBzZWFsREIuc2tpbGxBLFxuICAgICAgaGVyb0lkLFxuICAgIH0pO1xuICAgIGNvbnN0IHNraWxsQk9wdGlvbnMgPSBnZXRTa2lsbE9wdGlvbnMoe1xuICAgICAgcnVsZXMyREIsXG4gICAgICBoZXJvREIsXG4gICAgICBza2lsbERCOiBzZWFsREIuc2tpbGxBLFxuICAgICAgaGVyb0lkLFxuICAgIH0pO1xuICAgIGNvbnN0IHNraWxsQ09wdGlvbnMgPSBnZXRTa2lsbE9wdGlvbnMoe1xuICAgICAgcnVsZXMyREIsXG4gICAgICBoZXJvREIsXG4gICAgICBza2lsbERCOiBzZWFsREIuc2tpbGxBLFxuICAgICAgaGVyb0lkLFxuICAgIH0pO1xuICAgIGNvbnN0IHNlYWxPcHRpb25zID0gZ2V0U2tpbGxPcHRpb25zKHtcbiAgICAgIHJ1bGVzMkRCLFxuICAgICAgaGVyb0RCLFxuICAgICAgc2tpbGxEQjogc2VhbERCLnNlYWwsXG4gICAgICBoZXJvSWQsXG4gICAgfSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIHsgaWQ6ICdfc2VhbEEnLCBuYW1lOiAnQeaKgOiDveiBluWNsCcsIHNwOiAwLCBpY29uOiAnJywgcXVlcnk6ICcnIH0sXG4gICAgICAuLi5za2lsbEFPcHRpb25zLFxuICAgICAgeyBpZDogJ19zZWFsQicsIG5hbWU6ICdC5oqA6IO96IGW5Y2wJywgc3A6IDAsIGljb246ICcnLCBxdWVyeTogJycgfSxcbiAgICAgIC4uLnNraWxsQk9wdGlvbnMsXG4gICAgICB7IGlkOiAnX3NlYWxDJywgbmFtZTogJ0PmioDog73ogZbljbAnLCBzcDogMCwgaWNvbjogJycsIHF1ZXJ5OiAnJyB9LFxuICAgICAgLi4uc2tpbGxDT3B0aW9ucyxcbiAgICAgIHsgaWQ6ICdfc2VhbCcsIG5hbWU6ICflsIjnlKjogZbljbAnLCBzcDogMCwgaWNvbjogJycsIHF1ZXJ5OiAnJyB9LFxuICAgICAgLi4uc2VhbE9wdGlvbnMsXG4gICAgXTtcbiAgfSwgW3J1bGVzMkRCLCBoZXJvREIsIHNlYWxEQiwgaGVyb0lkXSk7XG5cbiAgY29uc3QgY29tcHV0ZWRPcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHNlYWxPcHRpb25zLmZpbHRlcigoc2tpbGwpID0+IHtcbiAgICAgIGlmIChbJ19zZWFsQScsICdfc2VhbEInLCAnX3NlYWxDJywgJ19zZWFsJ10uaW5jbHVkZXMoc2tpbGwuaWQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG1heFNraWxsICYmICFza2lsbC5sYXN0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHNraWxsLnF1ZXJ5LmluY2x1ZGVzKGZpbHRlci50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9LCBbc2VhbE9wdGlvbnMsIGZpbHRlciwgbWF4U2tpbGxdKTtcblxuICByZXR1cm4ge1xuICAgIG9wdGlvbnM6IGNvbXB1dGVkT3B0aW9ucyxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=