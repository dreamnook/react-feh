self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/components/Editor/SkillPickerView/SkillPicker/SkillOptions.tsx":
/*!****************************************************************************!*\
  !*** ./app/components/Editor/SkillPickerView/SkillPicker/SkillOptions.tsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-virtualized-auto-sizer */ "./node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks */ "./app/components/Editor/SkillPickerView/SkillPicker/hooks.tsx");
/* harmony import */ var _SkillOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SkillOption */ "./app/components/Editor/SkillPickerView/SkillPicker/SkillOption.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\Editor\\SkillPickerView\\SkillPicker\\SkillOptions.tsx",
    _s = $RefreshSig$();







function RenderSkillOption(_ref) {
  var index = _ref.index,
      style = _ref.style,
      data = _ref.data;
  var skillId = data.skillId,
      skills = data.skills,
      onClick = data.onClick;
  var skill = skills[index];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: style,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SkillOption__WEBPACK_IMPORTED_MODULE_4__.default, {
      active: skillId === skill.id,
      skill: skill,
      onClick: onClick
    }, skill.id, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_c = RenderSkillOption;

function SkillOptions(_ref2) {
  _s();

  var _this = this;

  var heroId = _ref2.heroId,
      skillType = _ref2.skillType,
      skillId = _ref2.skillId,
      selectSkill = _ref2.selectSkill,
      filter = _ref2.filter,
      maxSkill = _ref2.maxSkill;
  var onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (event) {
    event.stopPropagation();
    selectSkill(event.currentTarget.value);
  }, [selectSkill]);

  var _useHooks = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.default)({
    heroId: heroId,
    skillType: skillType,
    skillId: skillId,
    filter: filter,
    maxSkill: maxSkill
  }),
      skills = _useHooks.options;

  var listDataProp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      skillId: skillId,
      skills: skills,
      onClick: onClick
    };
  }, [skillId, skills, onClick]);
  var itemSize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function (index) {
    var skill = skills[index];
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
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_window__WEBPACK_IMPORTED_MODULE_5__.VariableSizeList, {
        width: width,
        height: height,
        itemCount: skills.length,
        itemSize: itemSize,
        itemData: listDataProp,
        itemKey: itemKey,
        children: RenderSkillOption
      }, skills.length, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

_s(SkillOptions, "5sq0msZARYoFs1uA0Pz7uflnzvY=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c2 = SkillOptions;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(SkillOptions));

var _c, _c2, _c3;

$RefreshReg$(_c, "RenderSkillOption");
$RefreshReg$(_c2, "SkillOptions");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NraWxsUGlja2VyVmlldy9Ta2lsbFBpY2tlci9Ta2lsbE9wdGlvbnMudHN4Il0sIm5hbWVzIjpbIlJlbmRlclNraWxsT3B0aW9uIiwiaW5kZXgiLCJzdHlsZSIsImRhdGEiLCJza2lsbElkIiwic2tpbGxzIiwib25DbGljayIsInNraWxsIiwiaWQiLCJTa2lsbE9wdGlvbnMiLCJoZXJvSWQiLCJza2lsbFR5cGUiLCJzZWxlY3RTa2lsbCIsImZpbHRlciIsIm1heFNraWxsIiwidXNlQ2FsbGJhY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInVzZUhvb2tzIiwib3B0aW9ucyIsImxpc3REYXRhUHJvcCIsInVzZU1lbW8iLCJpdGVtU2l6ZSIsInNpemUiLCJtdCIsImNkIiwiaHAiLCJhdGsiLCJzcGQiLCJkZWYiLCJyZXMiLCJleGNsdXNpdmUiLCJpdGVtS2V5Iiwid2lkdGgiLCJoZWlnaHQiLCJsZW5ndGgiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULE9BUUk7QUFBQSxNQVBGQyxLQU9FLFFBUEZBLEtBT0U7QUFBQSxNQU5GQyxLQU1FLFFBTkZBLEtBTUU7QUFBQSxNQUxGQyxJQUtFLFFBTEZBLElBS0U7QUFBQSxNQUNNQyxPQUROLEdBQ21DRCxJQURuQyxDQUNNQyxPQUROO0FBQUEsTUFDZUMsTUFEZixHQUNtQ0YsSUFEbkMsQ0FDZUUsTUFEZjtBQUFBLE1BQ3VCQyxPQUR2QixHQUNtQ0gsSUFEbkMsQ0FDdUJHLE9BRHZCO0FBRUYsTUFBTUMsS0FBSyxHQUFHRixNQUFNLENBQUNKLEtBQUQsQ0FBcEI7QUFDQSxzQkFDRTtBQUFLLFNBQUssRUFBRUMsS0FBWjtBQUFBLDJCQUNFLDhEQUFDLGlEQUFEO0FBRUUsWUFBTSxFQUFF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QVBYO0FBQUEsa0JBU0dsQztBQVRILFNBQ09LLE1BQU0sQ0FBQ2dDLE1BRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQ7O0dBOUVRNUIsWTtVQXNCcUJXLDJDOzs7TUF0QnJCWCxZO0FBZ0ZULCtEQUFlLG1CQUFBNkIsMkNBQUksQ0FBQzdCLFlBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci4wYzFjMWRkMDdlYjUyODg1YmI1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbywgU3ludGhldGljRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVmFyaWFibGVTaXplTGlzdCwgTGlzdENoaWxkQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xuaW1wb3J0IEF1dG9SZXNpemVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuaW1wb3J0IHsgVFNraWxsIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHVzZUhvb2tzIGZyb20gJy4vaG9va3MnO1xuaW1wb3J0IFNraWxsT3B0aW9uIGZyb20gJy4vU2tpbGxPcHRpb24nO1xuXG5mdW5jdGlvbiBSZW5kZXJTa2lsbE9wdGlvbih7XG4gIGluZGV4LFxuICBzdHlsZSxcbiAgZGF0YSxcbn06IExpc3RDaGlsZENvbXBvbmVudFByb3BzPHtcbiAgc2tpbGxJZDogc3RyaW5nO1xuICBza2lsbHM6IFRTa2lsbFtdO1xuICBvbkNsaWNrOiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4gdm9pZDtcbn0+KSB7XG4gIGNvbnN0IHsgc2tpbGxJZCwgc2tpbGxzLCBvbkNsaWNrIH0gPSBkYXRhO1xuICBjb25zdCBza2lsbCA9IHNraWxsc1tpbmRleF07XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgPFNraWxsT3B0aW9uXG4gICAgICAgIGtleT17c2tpbGwuaWR9XG4gICAgICAgIGFjdGl2ZT17c2tpbGxJZCA9PT0gc2tpbGwuaWR9XG4gICAgICAgIHNraWxsPXtza2lsbH1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNraWxsT3B0aW9ucyh7XG4gIGhlcm9JZCxcbiAgc2tpbGxUeXBlLFxuICBza2lsbElkLFxuICBzZWxlY3RTa2lsbCxcbiAgZmlsdGVyLFxuICBtYXhTa2lsbCxcbn06IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHNraWxsVHlwZTogJ3NraWxsQScgfCAnc2tpbGxCJyB8ICdza2lsbEMnO1xuICBza2lsbElkOiBzdHJpbmc7XG4gIHNlbGVjdFNraWxsOiAobmV3U2tpbGxJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBmaWx0ZXI6IHN0cmluZztcbiAgbWF4U2tpbGw/OiBib29sZWFuO1xufSkge1xuICBjb25zdCBvbkNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgc2VsZWN0U2tpbGwoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBbc2VsZWN0U2tpbGxdLFxuICApO1xuICBjb25zdCB7IG9wdGlvbnM6IHNraWxscyB9ID0gdXNlSG9va3Moe1xuICAgIGhlcm9JZCxcbiAgICBza2lsbFR5cGUsXG4gICAgc2tpbGxJZCxcbiAgICBmaWx0ZXIsXG4gICAgbWF4U2tpbGwsXG4gIH0pO1xuICBjb25zdCBsaXN0RGF0YVByb3AgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBza2lsbElkLFxuICAgICAgc2tpbGxzLFxuICAgICAgb25DbGljayxcbiAgICB9KSxcbiAgICBbc2tpbGxJZCwgc2tpbGxzLCBvbkNsaWNrXSxcbiAgKTtcbiAgY29uc3QgaXRlbVNpemUgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qgc2tpbGwgPSBza2lsbHNbaW5kZXhdO1xuICAgICAgbGV0IHNpemUgPSA0MDtcbiAgICAgIGlmIChza2lsbC5tdCB8fCBza2lsbC5jZCkge1xuICAgICAgICBzaXplICs9IDI0O1xuICAgICAgfVxuICAgICAgaWYgKHNraWxsLmhwIHx8IHNraWxsLmF0ayB8fCBza2lsbC5zcGQgfHwgc2tpbGwuZGVmIHx8IHNraWxsLnJlcykge1xuICAgICAgICBzaXplICs9IDI0O1xuICAgICAgfVxuICAgICAgaWYgKHNraWxsLmV4Y2x1c2l2ZSkge1xuICAgICAgICBzaXplICs9IDI0O1xuICAgICAgfVxuICAgICAgc2l6ZSArPSAxODtcbiAgICAgIHJldHVybiBzaXplO1xuICAgIH0sXG4gICAgW3NraWxsc10sXG4gICk7XG4gIGNvbnN0IGl0ZW1LZXkgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIHNraWxsc1tpbmRleF0uaWQ7XG4gICAgfSxcbiAgICBbc2tpbGxzXSxcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8QXV0b1Jlc2l6ZXI+XG4gICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgIDxWYXJpYWJsZVNpemVMaXN0XG4gICAgICAgICAga2V5PXtza2lsbHMubGVuZ3RofVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBpdGVtQ291bnQ9e3NraWxscy5sZW5ndGh9XG4gICAgICAgICAgaXRlbVNpemU9e2l0ZW1TaXplfVxuICAgICAgICAgIGl0ZW1EYXRhPXtsaXN0RGF0YVByb3B9XG4gICAgICAgICAgaXRlbUtleT17aXRlbUtleX1cbiAgICAgICAgPlxuICAgICAgICAgIHtSZW5kZXJTa2lsbE9wdGlvbn1cbiAgICAgICAgPC9WYXJpYWJsZVNpemVMaXN0PlxuICAgICAgKX1cbiAgICA8L0F1dG9SZXNpemVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNraWxsT3B0aW9ucyk7XG4iXSwic291cmNlUm9vdCI6IiJ9