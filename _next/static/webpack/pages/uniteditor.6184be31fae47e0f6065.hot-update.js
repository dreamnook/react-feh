self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/components/Editor/SealPickerView/SealPicker/SealOptions.tsx":
/*!*************************************************************************!*\
  !*** ./app/components/Editor/SealPickerView/SealPicker/SealOptions.tsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-virtualized-auto-sizer */ "./node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./app/components/Editor/shared.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks */ "./app/components/Editor/SealPickerView/SealPicker/hooks.tsx");
/* harmony import */ var _SkillOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SkillOption */ "./app/components/Editor/SealPickerView/SealPicker/SkillOption.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\Editor\\SealPickerView\\SealPicker\\SealOptions.tsx",
    _s = $RefreshSig$();








function RenderSealOption(_ref) {
  var index = _ref.index,
      style = _ref.style,
      data = _ref.data;
  var seal = data.seal,
      skills = data.skills,
      onClick = data.onClick;
  var skill = skills[index];

  if (skill.id === '_sealA') {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: style,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared__WEBPACK_IMPORTED_MODULE_3__.SubTitle, {
        children: "A\u6280\u80FD\u8056\u5370"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this);
  }

  if (skill.id === '_sealB') {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: style,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared__WEBPACK_IMPORTED_MODULE_3__.SubTitle, {
        children: "B\u6280\u80FD\u8056\u5370"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this);
  }

  if (skill.id === '_sealC') {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: style,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared__WEBPACK_IMPORTED_MODULE_3__.SubTitle, {
        children: "C\u6280\u80FD\u8056\u5370"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this);
  }

  if (skill.id === '_seal') {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: style,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared__WEBPACK_IMPORTED_MODULE_3__.SubTitle, {
        children: "\u5C08\u7528\u8056\u5370"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: style,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SkillOption__WEBPACK_IMPORTED_MODULE_5__.default, {
      active: seal === skill.id,
      skill: skill,
      onClick: onClick
    }, skill.id, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

_c = RenderSealOption;

function SealOptions(_ref2) {
  _s();

  var _this = this;

  var heroId = _ref2.heroId,
      seal = _ref2.seal,
      selectSeal = _ref2.selectSeal,
      filter = _ref2.filter,
      maxSkill = _ref2.maxSkill;
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    event.stopPropagation();
    selectSeal(event.currentTarget.value);
  }, [selectSeal]);

  var _useHooks = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__.default)({
    heroId: heroId,
    filter: filter,
    maxSkill: maxSkill
  }),
      skills = _useHooks.options;

  var listDataProp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      seal: seal,
      skills: skills,
      onClick: onClick
    };
  }, [seal, skills, onClick]);
  var itemSize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {
    var skill = skills[index];
    console.log(skills);

    if (['_sealA', '_sealB', '_sealC', '_seal'].includes(skill.id)) {
      return 44;
    }

    var size = 40;

    if (skill.mt || skill.cd) {
      size += 24;
    }

    if (skill.hp || skill.atk || skill.spd || skill.def || skill.res) {
      size += 24;
    }

    if (skill.exclusive) {
      size += 24;
    }

    size += 18;
    return size;
  }, [skills]);
  var itemKey = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {
    return skills[index].id;
  }, [skills]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: function children(_ref3) {
      var width = _ref3.width,
          height = _ref3.height;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_6__.VariableSizeList, {
        width: width,
        height: height,
        itemCount: skills.length,
        itemSize: itemSize,
        itemData: listDataProp,
        itemKey: itemKey,
        children: RenderSealOption
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, this);
}

_s(SealOptions, "5sq0msZARYoFs1uA0Pz7uflnzvY=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c2 = SealOptions;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(SealOptions));

var _c, _c2, _c3;

$RefreshReg$(_c, "RenderSealOption");
$RefreshReg$(_c2, "SealOptions");
$RefreshReg$(_c3, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NlYWxQaWNrZXJWaWV3L1NlYWxQaWNrZXIvU2VhbE9wdGlvbnMudHN4Il0sIm5hbWVzIjpbIlJlbmRlclNlYWxPcHRpb24iLCJpbmRleCIsInN0eWxlIiwiZGF0YSIsInNlYWwiLCJza2lsbHMiLCJvbkNsaWNrIiwic2tpbGwiLCJpZCIsIlNlYWxPcHRpb25zIiwiaGVyb0lkIiwic2VsZWN0U2VhbCIsImZpbHRlciIsIm1heFNraWxsIiwidXNlQ2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInVzZUhvb2tzIiwib3B0aW9ucyIsImxpc3REYXRhUHJvcCIsInVzZU1lbW8iLCJpdGVtU2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsInNpemUiLCJtdCIsImNkIiwiaHAiLCJhdGsiLCJzcGQiLCJkZWYiLCJyZXMiLCJleGNsdXNpdmUiLCJpdGVtS2V5Iiwid2lkdGgiLCJoZWlnaHQiLCJsZW5ndGgiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGdCQUFULE9BUUk7QUFBQSxNQVBGQyxLQU9FLFFBUEZBLEtBT0U7QUFBQSxNQU5GQyxLQU1FLFFBTkZBLEtBTUU7QUFBQSxNQUxGQyxJQUtFLFFBTEZBLElBS0U7QUFBQSxNQUNNQyxJQUROLEdBQ2dDRCxJQURoQyxDQUNNQyxJQUROO0FBQUEsTUFDWUMsTUFEWixHQUNnQ0YsSUFEaEMsQ0FDWUUsTUFEWjtBQUFBLE1BQ29CQyxPQURwQixHQUNnQ0gsSUFEaEMsQ0FDb0JHLE9BRHBCO0FBRUYsTUFBTUMsS0FBSyxHQUFHRixNQUFNLENBQUNKLEtBQUQsQ0FBcEI7O0FBQ0EsTUFBSU0sS0FBSyxDQUFDQyxFQUFOLEtBQWEsUUFBakIsRUFBMkI7QUFDekIsd0JBQ0U7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QStCLDJDQUFJLENBQUMvQixXQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuNjE4NGJlMzFmYWU0N2UwZjYwNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8sIFN5bnRoZXRpY0V2ZW50LCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZhcmlhYmxlU2l6ZUxpc3QsIExpc3RDaGlsZENvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtd2luZG93JztcbmltcG9ydCBBdXRvUmVzaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcbmltcG9ydCB7IFRTa2lsbCB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IFN1YlRpdGxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkJztcbmltcG9ydCB1c2VIb29rcyBmcm9tICcuL2hvb2tzJztcbmltcG9ydCBTa2lsbE9wdGlvbiBmcm9tICcuL1NraWxsT3B0aW9uJztcblxuZnVuY3Rpb24gUmVuZGVyU2VhbE9wdGlvbih7XG4gIGluZGV4LFxuICBzdHlsZSxcbiAgZGF0YSxcbn06IExpc3RDaGlsZENvbXBvbmVudFByb3BzPHtcbiAgc2VhbDogc3RyaW5nO1xuICBza2lsbHM6IFRTa2lsbFtdO1xuICBvbkNsaWNrOiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZDtcbn0+KSB7XG4gIGNvbnN0IHsgc2VhbCwgc2tpbGxzLCBvbkNsaWNrIH0gPSBkYXRhO1xuICBjb25zdCBza2lsbCA9IHNraWxsc1tpbmRleF07XG4gIGlmIChza2lsbC5pZCA9PT0gJ19zZWFsQScpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8U3ViVGl0bGU+QeaKgOiDveiBluWNsDwvU3ViVGl0bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGlmIChza2lsbC5pZCA9PT0gJ19zZWFsQicpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8U3ViVGl0bGU+QuaKgOiDveiBluWNsDwvU3ViVGl0bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGlmIChza2lsbC5pZCA9PT0gJ19zZWFsQycpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8U3ViVGl0bGU+Q+aKgOiDveiBluWNsDwvU3ViVGl0bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGlmIChza2lsbC5pZCA9PT0gJ19zZWFsJykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxTdWJUaXRsZT7lsIjnlKjogZbljbA8L1N1YlRpdGxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIDxTa2lsbE9wdGlvblxuICAgICAgICBrZXk9e3NraWxsLmlkfVxuICAgICAgICBhY3RpdmU9e3NlYWwgPT09IHNraWxsLmlkfVxuICAgICAgICBza2lsbD17c2tpbGx9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBTZWFsT3B0aW9ucyh7XG4gIGhlcm9JZCxcbiAgc2VhbCxcbiAgc2VsZWN0U2VhbCxcbiAgZmlsdGVyLFxuICBtYXhTa2lsbCxcbn06IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHNlYWw6IHN0cmluZztcbiAgc2VsZWN0U2VhbDogKG5ld1NlYWw6IHN0cmluZykgPT4gdm9pZDtcbiAgZmlsdGVyOiBzdHJpbmc7XG4gIG1heFNraWxsPzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHNlbGVjdFNlYWwoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBbc2VsZWN0U2VhbF0sXG4gICk7XG4gIGNvbnN0IHsgb3B0aW9uczogc2tpbGxzIH0gPSB1c2VIb29rcyh7XG4gICAgaGVyb0lkLFxuICAgIGZpbHRlcixcbiAgICBtYXhTa2lsbCxcbiAgfSk7XG4gIGNvbnN0IGxpc3REYXRhUHJvcCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIHNlYWwsXG4gICAgICBza2lsbHMsXG4gICAgICBvbkNsaWNrLFxuICAgIH0pLFxuICAgIFtzZWFsLCBza2lsbHMsIG9uQ2xpY2tdLFxuICApO1xuICBjb25zdCBpdGVtU2l6ZSA9IHVzZUNhbGxiYWNrKFxuICAgIChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBza2lsbCA9IHNraWxsc1tpbmRleF07XG4gICAgICBjb25zb2xlLmxvZyhza2lsbHMpO1xuICAgICAgaWYgKFsnX3NlYWxBJywgJ19zZWFsQicsICdfc2VhbEMnLCAnX3NlYWwnXS5pbmNsdWRlcyhza2lsbC5pZCkpIHtcbiAgICAgICAgcmV0dXJuIDQ0O1xuICAgICAgfVxuICAgICAgbGV0IHNpemUgPSA0MDtcbiAgICAgIGlmIChza2lsbC5tdCB8fCBza2lsbC5jZCkge1xuICAgICAgICBzaXplICs9IDI0O1xuICAgICAgfVxuICAgICAgaWYgKHNraWxsLmhwIHx8IHNraWxsLmF0ayB8fCBza2lsbC5zcGQgfHwgc2tpbGwuZGVmIHx8IHNraWxsLnJlcykge1xuICAgICAgICBzaXplICs9IDI0O1xuICAgICAgfVxuICAgICAgaWYgKHNraWxsLmV4Y2x1c2l2ZSkge1xuICAgICAgICBzaXplICs9IDI0O1xuICAgICAgfVxuICAgICAgc2l6ZSArPSAxODtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH0sXG4gICAgW3NraWxsc10sXG4gICk7XG4gIGNvbnN0IGl0ZW1LZXkgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHNraWxsc1tpbmRleF0uaWQ7XG4gICAgfSxcbiAgICBbc2tpbGxzXSxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8QXV0b1Jlc2l6ZXI+XG4gICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgIDxWYXJpYWJsZVNpemVMaXN0XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGl0ZW1Db3VudD17c2tpbGxzLmxlbmd0aH1cbiAgICAgICAgICBpdGVtU2l6ZT17aXRlbVNpemV9XG4gICAgICAgICAgaXRlbURhdGE9e2xpc3REYXRhUHJvcH1cbiAgICAgICAgICBpdGVtS2V5PXtpdGVtS2V5fVxuICAgICAgICA+XG4gICAgICAgICAge1JlbmRlclNlYWxPcHRpb259XG4gICAgICAgIDwvVmFyaWFibGVTaXplTGlzdD5cbiAgICAgICl9XG4gICAgPC9BdXRvUmVzaXplcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTZWFsT3B0aW9ucyk7XG4iXSwic291cmNlUm9vdCI6IiJ9