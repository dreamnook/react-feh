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
    var skillDB = db[dbKey];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL092ZXJ2aWV3L1NraWxsU2VjdGlvbi50c3giXSwibmFtZXMiOlsic2tpbGxUeXBlcyIsIlNraWxsU2VjdGlvbiIsInNraWxsVHlwZSIsInNraWxsSWQiLCJkYiIsInVzZUZlaERCIiwiaW5jbHVkZXMiLCJkYktleSIsInNraWxsREIiLCJnZXRTa2lsbEljb25BbmROYW1lIiwiaWNvbiIsIm5hbWUiLCJzZWFsREIiLCJnZXRTZWFsSWNvbkFuZE5hbWUiLCJzZWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsUUFBckIsQ0FBbkI7O0FBRUEsU0FBU0MsWUFBVCxPQU1HO0FBQUE7O0FBQUEsTUFMREMsU0FLQyxRQUxEQSxTQUtDO0FBQUEsTUFKREMsT0FJQyxRQUpEQSxPQUlDO0FBQ0QsTUFBTUMsRUFBRSxHQUFHQyxnRUFBUSxFQUFuQjs7QUFDQSxNQUFJTCxVQUFVLENBQUNNLFFBQVgsQ0FBb0JKLFNBQXBCLENBQUosRUFBb0M7QUFDbEMsUUFBTUssS0FBSyxhQUFNTCxTQUFOLE9BQVg7QUFDQSxRQUFNTSxPQUFPLEdBQUdKLEVBQUUsQ0FBQ0csS0FBRCxDQUFsQjs7QUFGa0MsK0JBR1hFLDRFQUFtQixDQUFDO0FBQUVELGFBQU8sRUFBUEEsT0FBRjtBQUFXTCxhQUFPLEVBQVBBO0FBQVgsS0FBRCxDQUhSO0FBQUEsUUFHMUJPLElBSDBCLHdCQUcxQkEsSUFIMEI7QUFBQSxRQUdwQkMsSUFIb0Isd0JBR3BCQSxJQUhvQjs7QUFJbEMsd0JBQ0U7QUFBQSxpQkFDR0QsSUFBSSxpQkFBSSxxRUFBQyw0Q0FBRDtBQUFNLFdBQUcsbUJBQVlBLElBQVo7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFgsRUFFR0MsSUFGSDtBQUFBLG9CQURGO0FBTUQ7O0FBQ0QsTUFBSVQsU0FBUyxLQUFLLE1BQWxCLEVBQTBCO0FBQ3hCLFFBQU1VLE1BQU0sR0FBR1IsRUFBRSxDQUFDUSxNQUFsQjs7QUFEd0IsOEJBRURDLDBFQUFrQixDQUFDO0FBQUVELFlBQU0sRUFBTkEsTUFBRjtBQUFVRSxVQUFJLEVBQUVYO0FBQWhCLEtBQUQsQ0FGakI7QUFBQSxRQUVoQk8sS0FGZ0IsdUJBRWhCQSxJQUZnQjtBQUFBLFFBRVZDLEtBRlUsdUJBRVZBLElBRlU7O0FBR3hCLHdCQUNFO0FBQUEsaUJBQ0dELEtBQUksaUJBQUkscUVBQUMsNENBQUQ7QUFBTSxXQUFHLG1CQUFZQSxLQUFaO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURYLEVBRUdDLEtBRkg7QUFBQSxvQkFERjtBQU1EOztBQUNELFNBQU8sSUFBUDtBQUNEOztHQTlCUVYsWTtVQU9JSSx3RDs7O0tBUEpKLFk7QUFnQ01BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuOWNmNjc4MTE4MzMyZGMzNzJiYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5pbXBvcnQgeyBnZXRTZWFsSWNvbkFuZE5hbWUgfSBmcm9tICdAL2FwcC91dGlscy9zZWFsJztcbmltcG9ydCB7IGdldFNraWxsSWNvbkFuZE5hbWUgfSBmcm9tICdAL2FwcC91dGlscy9za2lsbCc7XG5pbXBvcnQgeyBUU2tpbGxEQiB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5jb25zdCBza2lsbFR5cGVzID0gWydza2lsbEEnLCAnc2tpbGxCJywgJ3NraWxsQyddO1xuXG5mdW5jdGlvbiBTa2lsbFNlY3Rpb24oe1xuICBza2lsbFR5cGUsXG4gIHNraWxsSWQsXG59OiB7XG4gIHNraWxsVHlwZTogJ3NraWxsQScgfCAnc2tpbGxCJyB8ICdza2lsbEMnIHwgJ3NlYWwnO1xuICBza2lsbElkOiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IGRiID0gdXNlRmVoREIoKTtcbiAgaWYgKHNraWxsVHlwZXMuaW5jbHVkZXMoc2tpbGxUeXBlKSkge1xuICAgIGNvbnN0IGRiS2V5ID0gYCR7c2tpbGxUeXBlfURCYDtcbiAgICBjb25zdCBza2lsbERCID0gZGJbZGJLZXldIGFzIFRTa2lsbERCO1xuICAgIGNvbnN0IHsgaWNvbiwgbmFtZSB9ID0gZ2V0U2tpbGxJY29uQW5kTmFtZSh7IHNraWxsREIsIHNraWxsSWQgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtpY29uICYmIDxJY29uIHNyYz17YHNraWxscy8ke2ljb259YH0gLz59XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICBpZiAoc2tpbGxUeXBlID09PSAnc2VhbCcpIHtcbiAgICBjb25zdCBzZWFsREIgPSBkYi5zZWFsREI7XG4gICAgY29uc3QgeyBpY29uLCBuYW1lIH0gPSBnZXRTZWFsSWNvbkFuZE5hbWUoeyBzZWFsREIsIHNlYWw6IHNraWxsSWQgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtpY29uICYmIDxJY29uIHNyYz17YHNraWxscy8ke2ljb259YH0gLz59XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxTZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==