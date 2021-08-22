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
      }, skills.length, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NlYWxQaWNrZXJWaWV3L1NlYWxQaWNrZXIvU2VhbE9wdGlvbnMudHN4Il0sIm5hbWVzIjpbIlJlbmRlclNlYWxPcHRpb24iLCJpbmRleCIsInN0eWxlIiwiZGF0YSIsInNlYWwiLCJza2lsbHMiLCJvbkNsaWNrIiwic2tpbGwiLCJpZCIsIlNlYWxPcHRpb25zIiwiaGVyb0lkIiwic2VsZWN0U2VhbCIsImZpbHRlciIsIm1heFNraWxsIiwidXNlQ2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInVzZUhvb2tzIiwib3B0aW9ucyIsImxpc3REYXRhUHJvcCIsInVzZU1lbW8iLCJpdGVtU2l6ZSIsImluY2x1ZGVzIiwic2l6ZSIsIm10IiwiY2QiLCJocCIsImF0ayIsInNwZCIsImRlZiIsInJlcyIsImV4Y2x1c2l2ZSIsIml0ZW1LZXkiLCJ3aWR0aCIsImhlaWdodCIsImxlbmd0aCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsT0FRSTtBQUFBLE1BUEZDLEtBT0UsUUFQRkEsS0FPRTtBQUFBLE1BTkZDLEtBTUUsUUFORkEsS0FNRTtBQUFBLE1BTEZDLElBS0UsUUFMRkEsSUFLRTtBQUFBLE1BQ01DLElBRE4sR0FDZ0NELElBRGhDLENBQ01DLElBRE47QUFBQSxNQUNZQyxNQURaLEdBQ2dDRixJQURoQyxDQUNZRSxNQURaO0FBQUEsTUFDb0JDLE9BRHBCLEdBQ2dDSCxJQURoQyxDQUNvQkcsT0FEcEI7QUFFRixNQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0osS0FBRCxDQUFwQjs7QUFDQSxNQUFJTSxLQUFLLENBQUNDLEVBQU4sS0FBYSxRQUFqQixFQUEyQjtBQUN6Qix3QkFDRTtBQUFLLFdBQUssRUFBRU4s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LCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci42OTU5N2VlNDE4M2QxMGRiMmRlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbywgU3ludGhldGljRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmFyaWFibGVTaXplTGlzdCwgTGlzdENoaWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuaW1wb3J0IEF1dG9SZXNpemVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuaW1wb3J0IHsgVFNraWxsIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgU3ViVGl0bGUgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuaW1wb3J0IHVzZUhvb2tzIGZyb20gJy4vaG9va3MnO1xuaW1wb3J0IFNraWxsT3B0aW9uIGZyb20gJy4vU2tpbGxPcHRpb24nO1xuXG5mdW5jdGlvbiBSZW5kZXJTZWFsT3B0aW9uKHtcbiAgaW5kZXgsXG4gIHN0eWxlLFxuICBkYXRhLFxufTogTGlzdENoaWxkQ29tcG9uZW50UHJvcHM8e1xuICBzZWFsOiBzdHJpbmc7XG4gIHNraWxsczogVFNraWxsW107XG4gIG9uQ2xpY2s6IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkO1xufT4pIHtcbiAgY29uc3QgeyBzZWFsLCBza2lsbHMsIG9uQ2xpY2sgfSA9IGRhdGE7XG4gIGNvbnN0IHNraWxsID0gc2tpbGxzW2luZGV4XTtcbiAgaWYgKHNraWxsLmlkID09PSAnX3NlYWxBJykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxTdWJUaXRsZT5B5oqA6IO96IGW5Y2wPC9TdWJUaXRsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgaWYgKHNraWxsLmlkID09PSAnX3NlYWxCJykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxTdWJUaXRsZT5C5oqA6IO96IGW5Y2wPC9TdWJUaXRsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgaWYgKHNraWxsLmlkID09PSAnX3NlYWxDJykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxTdWJUaXRsZT5D5oqA6IO96IGW5Y2wPC9TdWJUaXRsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgaWYgKHNraWxsLmlkID09PSAnX3NlYWwnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgPFN1YlRpdGxlPuWwiOeUqOiBluWNsDwvU3ViVGl0bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgPFNraWxsT3B0aW9uXG4gICAgICAgIGtleT17c2tpbGwuaWR9XG4gICAgICAgIGFjdGl2ZT17c2VhbCA9PT0gc2tpbGwuaWR9XG4gICAgICAgIHNraWxsPXtza2lsbH1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNlYWxPcHRpb25zKHtcbiAgaGVyb0lkLFxuICBzZWFsLFxuICBzZWxlY3RTZWFsLFxuICBmaWx0ZXIsXG4gIG1heFNraWxsLFxufToge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgc2VhbDogc3RyaW5nO1xuICBzZWxlY3RTZWFsOiAobmV3U2VhbDogc3RyaW5nKSA9PiB2b2lkO1xuICBmaWx0ZXI6IHN0cmluZztcbiAgbWF4U2tpbGw/OiBib29sZWFuO1xufSkge1xuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgc2VsZWN0U2VhbChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIFtzZWxlY3RTZWFsXSxcbiAgKTtcbiAgY29uc3QgeyBvcHRpb25zOiBza2lsbHMgfSA9IHVzZUhvb2tzKHtcbiAgICBoZXJvSWQsXG4gICAgZmlsdGVyLFxuICAgIG1heFNraWxsLFxuICB9KTtcbiAgY29uc3QgbGlzdERhdGFQcm9wID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgc2VhbCxcbiAgICAgIHNraWxscyxcbiAgICAgIG9uQ2xpY2ssXG4gICAgfSksXG4gICAgW3NlYWwsIHNraWxscywgb25DbGlja10sXG4gICk7XG4gIGNvbnN0IGl0ZW1TaXplID0gdXNlQ2FsbGJhY2soXG4gICAgKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHNraWxsID0gc2tpbGxzW2luZGV4XTtcbiAgICAgIGlmIChbJ19zZWFsQScsICdfc2VhbEInLCAnX3NlYWxDJywgJ19zZWFsJ10uaW5jbHVkZXMoc2tpbGwuaWQpKSB7XG4gICAgICAgIHJldHVybiA0NDtcbiAgICAgIH1cbiAgICAgIGxldCBzaXplID0gNDA7XG4gICAgICBpZiAoc2tpbGwubXQgfHwgc2tpbGwuY2QpIHtcbiAgICAgICAgc2l6ZSArPSAyNDtcbiAgICAgIH1cbiAgICAgIGlmIChza2lsbC5ocCB8fCBza2lsbC5hdGsgfHwgc2tpbGwuc3BkIHx8IHNraWxsLmRlZiB8fCBza2lsbC5yZXMpIHtcbiAgICAgICAgc2l6ZSArPSAyNDtcbiAgICAgIH1cbiAgICAgIGlmIChza2lsbC5leGNsdXNpdmUpIHtcbiAgICAgICAgc2l6ZSArPSAyNDtcbiAgICAgIH1cbiAgICAgIHNpemUgKz0gMTg7XG4gICAgICByZXR1cm4gc2l6ZTtcbiAgICB9LFxuICAgIFtza2lsbHNdLFxuICApO1xuICBjb25zdCBpdGVtS2V5ID0gdXNlQ2FsbGJhY2soXG4gICAgKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiBza2lsbHNbaW5kZXhdLmlkO1xuICAgIH0sXG4gICAgW3NraWxsc10sXG4gICk7XG4gIHJldHVybiAoXG4gICAgPEF1dG9SZXNpemVyPlxuICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICA8VmFyaWFibGVTaXplTGlzdFxuICAgICAgICAgIGtleT17c2tpbGxzLmxlbmd0aH1cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgaXRlbUNvdW50PXtza2lsbHMubGVuZ3RofVxuICAgICAgICAgIGl0ZW1TaXplPXtpdGVtU2l6ZX1cbiAgICAgICAgICBpdGVtRGF0YT17bGlzdERhdGFQcm9wfVxuICAgICAgICAgIGl0ZW1LZXk9e2l0ZW1LZXl9XG4gICAgICAgID5cbiAgICAgICAgICB7UmVuZGVyU2VhbE9wdGlvbn1cbiAgICAgICAgPC9WYXJpYWJsZVNpemVMaXN0PlxuICAgICAgKX1cbiAgICA8L0F1dG9SZXNpemVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNlYWxPcHRpb25zKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=