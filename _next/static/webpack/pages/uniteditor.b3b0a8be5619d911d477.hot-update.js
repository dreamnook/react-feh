webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/Editor/Overview/SkillSection.tsx":
/*!*********************************************************!*\
  !*** ./app/components/Editor/Overview/SkillSection.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* harmony import */ var _app_utils_seal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/seal */ "./app/utils/seal.tsx");
/* harmony import */ var _app_utils_skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/skill */ "./app/utils/skill.tsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./app/components/Editor/shared.tsx");



var _jsxFileName = "F:\\repos\\react-feh-nextjs\\app\\components\\Editor\\Overview\\SkillSection.tsx",
    _s = $RefreshSig$();





var skillTypes = ['skillA', 'skillB', 'skillC'];

function SkillSection(_ref) {
  _s();

  var skillType = _ref.skillType,
      skillId = _ref.skillId;
  var db = Object(_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__["useFehDB"])();

  if (skillTypes.includes(skillType)) {
    var dbKey = "".concat(skillType, "DB");
    var skillDB = db[skillType];

    var _getSkillIconAndName = Object(_app_utils_skill__WEBPACK_IMPORTED_MODULE_3__["getSkillIconAndName"])({
      skillDB: skillDB,
      skillId: skillId
    }),
        icon = _getSkillIconAndName.icon,
        name = _getSkillIconAndName.name;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        src: "skills/".concat(icon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 18
      }, this), name]
    }, void 0, true);
  }

  if (skillType === 'seal') {
    var sealDB = db.sealDB;

    var _getSealIconAndName = Object(_app_utils_seal__WEBPACK_IMPORTED_MODULE_2__["getSealIconAndName"])({
      sealDB: sealDB,
      seal: skillId
    }),
        _icon = _getSealIconAndName.icon,
        _name = _getSealIconAndName.name;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [_icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        src: "skills/".concat(_icon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 18
      }, this), _name]
    }, void 0, true);
  }

  return null;
}

_s(SkillSection, "DWdbvuCSqQLQE8fuwMrXV0yq8As=", false, function () {
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_1__["useFehDB"]];
});

_c = SkillSection;
/* harmony default export */ __webpack_exports__["default"] = (SkillSection);

var _c;

$RefreshReg$(_c, "SkillSection");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL092ZXJ2aWV3L1NraWxsU2VjdGlvbi50c3giXSwibmFtZXMiOlsic2tpbGxUeXBlcyIsIlNraWxsU2VjdGlvbiIsInNraWxsVHlwZSIsInNraWxsSWQiLCJkYiIsInVzZUZlaERCIiwiaW5jbHVkZXMiLCJkYktleSIsInNraWxsREIiLCJnZXRTa2lsbEljb25BbmROYW1lIiwiaWNvbiIsIm5hbWUiLCJzZWFsREIiLCJnZXRTZWFsSWNvbkFuZE5hbWUiLCJzZWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsUUFBckIsQ0FBbkI7O0FBRUEsU0FBU0MsWUFBVCxPQU1HO0FBQUE7O0FBQUEsTUFMREMsU0FLQyxRQUxEQSxTQUtDO0FBQUEsTUFKREMsT0FJQyxRQUpEQSxPQUlDO0FBQ0QsTUFBTUMsRUFBRSxHQUFHQyxnRUFBUSxFQUFuQjs7QUFDQSxNQUFJTCxVQUFVLENBQUNNLFFBQVgsQ0FBb0JKLFNBQXBCLENBQUosRUFBb0M7QUFDbEMsUUFBTUssS0FBMkMsYUFBTUwsU0FBTixPQUFqRDtBQUNBLFFBQU1NLE9BQU8sR0FBR0osRUFBRSxDQUFDRixTQUFELENBQWxCOztBQUZrQywrQkFHWE8sNEVBQW1CLENBQUM7QUFBRUQsYUFBTyxFQUFQQSxPQUFGO0FBQVdMLGFBQU8sRUFBUEE7QUFBWCxLQUFELENBSFI7QUFBQSxRQUcxQk8sSUFIMEIsd0JBRzFCQSxJQUgwQjtBQUFBLFFBR3BCQyxJQUhvQix3QkFHcEJBLElBSG9COztBQUlsQyx3QkFDRTtBQUFBLGlCQUNHRCxJQUFJLGlCQUFJLHFFQUFDLDRDQUFEO0FBQU0sV0FBRyxtQkFBWUEsSUFBWjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEWCxFQUVHQyxJQUZIO0FBQUEsb0JBREY7QUFNRDs7QUFDRCxNQUFJVCxTQUFTLEtBQUssTUFBbEIsRUFBMEI7QUFDeEIsUUFBTVUsTUFBTSxHQUFHUixFQUFFLENBQUNRLE1BQWxCOztBQUR3Qiw4QkFFREMsMEVBQWtCLENBQUM7QUFBRUQsWUFBTSxFQUFOQSxNQUFGO0FBQVVFLFVBQUksRUFBRVg7QUFBaEIsS0FBRCxDQUZqQjtBQUFBLFFBRWhCTyxLQUZnQix1QkFFaEJBLElBRmdCO0FBQUEsUUFFVkMsS0FGVSx1QkFFVkEsSUFGVTs7QUFHeEIsd0JBQ0U7QUFBQSxpQkFDR0QsS0FBSSxpQkFBSSxxRUFBQyw0Q0FBRDtBQUFNLFdBQUcsbUJBQVlBLEtBQVo7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFgsRUFFR0MsS0FGSDtBQUFBLG9CQURGO0FBTUQ7O0FBQ0QsU0FBTyxJQUFQO0FBQ0Q7O0dBOUJRVixZO1VBT0lJLHdEOzs7S0FQSkosWTtBQWdDTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci5iM2IwYThiZTU2MTlkOTExZDQ3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRmVoREIgfSBmcm9tICdAL2FwcC9wYWdlL0ZFSERCJztcbmltcG9ydCB7IGdldFNlYWxJY29uQW5kTmFtZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3NlYWwnO1xuaW1wb3J0IHsgZ2V0U2tpbGxJY29uQW5kTmFtZSB9IGZyb20gJ0AvYXBwL3V0aWxzL3NraWxsJztcbmltcG9ydCB7IFRTa2lsbERCIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IHNraWxsVHlwZXMgPSBbJ3NraWxsQScsICdza2lsbEInLCAnc2tpbGxDJ107XG5cbmZ1bmN0aW9uIFNraWxsU2VjdGlvbih7XG4gIHNraWxsVHlwZSxcbiAgc2tpbGxJZCxcbn06IHtcbiAgc2tpbGxUeXBlOiAnc2tpbGxBJyB8ICdza2lsbEInIHwgJ3NraWxsQycgfCAnc2VhbCc7XG4gIHNraWxsSWQ6IHN0cmluZztcbn0pIHtcbiAgY29uc3QgZGIgPSB1c2VGZWhEQigpO1xuICBpZiAoc2tpbGxUeXBlcy5pbmNsdWRlcyhza2lsbFR5cGUpKSB7XG4gICAgY29uc3QgZGJLZXk6ICdza2lsbEFEQicgfCAnc2tpbGxCREInIHwgJ3NraWxsQ0RCJyA9IGAke3NraWxsVHlwZX1EQmA7XG4gICAgY29uc3Qgc2tpbGxEQiA9IGRiW3NraWxsVHlwZV0gYXMgVFNraWxsREI7XG4gICAgY29uc3QgeyBpY29uLCBuYW1lIH0gPSBnZXRTa2lsbEljb25BbmROYW1lKHsgc2tpbGxEQiwgc2tpbGxJZCB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2ljb24gJiYgPEljb24gc3JjPXtgc2tpbGxzLyR7aWNvbn1gfSAvPn1cbiAgICAgICAge25hbWV9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gIGlmIChza2lsbFR5cGUgPT09ICdzZWFsJykge1xuICAgIGNvbnN0IHNlYWxEQiA9IGRiLnNlYWxEQjtcbiAgICBjb25zdCB7IGljb24sIG5hbWUgfSA9IGdldFNlYWxJY29uQW5kTmFtZSh7IHNlYWxEQiwgc2VhbDogc2tpbGxJZCB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2ljb24gJiYgPEljb24gc3JjPXtgc2tpbGxzLyR7aWNvbn1gfSAvPn1cbiAgICAgICAge25hbWV9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lsbFNlY3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9