webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/Editor/SkillPickerView/index.tsx":
/*!*********************************************************!*\
  !*** ./app/components/Editor/SkillPickerView/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_LabelCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/LabelCheckbox */ "./app/components/LabelCheckbox/index.tsx");
/* harmony import */ var _styles_comps_editor_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/comps/editor.module.css */ "./styles/comps/editor.module.css");
/* harmony import */ var _styles_comps_editor_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_comps_editor_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackButton */ "./app/components/Editor/BackButton/index.tsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./app/components/Editor/shared.tsx");
/* harmony import */ var _DefaultSkillButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DefaultSkillButton */ "./app/components/Editor/DefaultSkillButton/index.tsx");
/* harmony import */ var _SkillPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SkillPicker */ "./app/components/Editor/SkillPickerView/SkillPicker/index.tsx");


var _jsxFileName = "F:\\repos\\react-feh-nextjs\\app\\components\\Editor\\SkillPickerView\\index.tsx",
    _s = $RefreshSig$();









function SkillPickerView(_ref) {
  _s();

  var hidden = _ref.hidden,
      skillType = _ref.skillType,
      title = _ref.title,
      onClickBack = _ref.onClickBack,
      heroId = _ref.heroId,
      skillId = _ref.skillId,
      selectSkill = _ref.selectSkill,
      maxSkill = _ref.maxSkill,
      toggleMaxSkill = _ref.toggleMaxSkill,
      setDefaultSkill = _ref.setDefaultSkill;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      filter = _useState[0],
      setFilter = _useState[1];

  var onChangeFilter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    setFilter(event.currentTarget.value);
  }, []);
  var onSelectSkill = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (newRefine) {
    selectSkill(newRefine);
    onClickBack();
  }, [selectSkill, onClickBack]);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      hiddenTime = _useState2[0],
      setHiddenTime = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!hidden) {
      setHiddenTime(function (prev) {
        return prev + 1;
      });
    }
  }, [hidden]);

  if (hidden && hiddenTime === 0) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    hidden: hidden,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_5__["Title"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: onClickBack
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_5__["TitleTextGroup"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_LabelCheckbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
            checked: maxSkill,
            onChange: toggleMaxSkill,
            children: "\u50C5\u9AD8\u7D1A\u6280\u80FD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this), setDefaultSkill && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DefaultSkillButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            onClick: setDefaultSkill
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: _styles_comps_editor_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
      placeholder: "\u6280\u80FD\u540D\u7A31",
      onChange: onChangeFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_5__["OptionsContainer"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SkillPicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
        heroId: heroId,
        skillType: skillType,
        skillId: skillId,
        selectSkill: onSelectSkill,
        filter: filter,
        maxSkill: maxSkill
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(SkillPickerView, "ZuQ9PSV1bHmoeY9patgtkC/UFUI=");

_c = SkillPickerView;
/* harmony default export */ __webpack_exports__["default"] = (SkillPickerView);

var _c;

$RefreshReg$(_c, "SkillPickerView");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NraWxsUGlja2VyVmlldy9pbmRleC50c3giXSwibmFtZXMiOlsiU2tpbGxQaWNrZXJWaWV3IiwiaGlkZGVuIiwic2tpbGxUeXBlIiwidGl0bGUiLCJvbkNsaWNrQmFjayIsImhlcm9JZCIsInNraWxsSWQiLCJzZWxlY3RTa2lsbCIsIm1heFNraWxsIiwidG9nZ2xlTWF4U2tpbGwiLCJzZXREZWZhdWx0U2tpbGwiLCJ1c2VTdGF0ZSIsImZpbHRlciIsInNldEZpbHRlciIsIm9uQ2hhbmdlRmlsdGVyIiwidXNlQ2FsbGJhY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm9uU2VsZWN0U2tpbGwiLCJuZXdSZWZpbmUiLCJoaWRkZW5UaW1lIiwic2V0SGlkZGVuVGltZSIsInVzZUVmZmVjdCIsInByZXYiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInN0eWxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULE9Bc0JHO0FBQUE7O0FBQUEsTUFyQkRDLE1BcUJDLFFBckJEQSxNQXFCQztBQUFBLE1BcEJEQyxTQW9CQyxRQXBCREEsU0FvQkM7QUFBQSxNQW5CREMsS0FtQkMsUUFuQkRBLEtBbUJDO0FBQUEsTUFsQkRDLFdBa0JDLFFBbEJEQSxXQWtCQztBQUFBLE1BakJEQyxNQWlCQyxRQWpCREEsTUFpQkM7QUFBQSxNQWhCREMsT0FnQkMsUUFoQkRBLE9BZ0JDO0FBQUEsTUFmREMsV0FlQyxRQWZEQSxXQWVDO0FBQUEsTUFkREMsUUFjQyxRQWREQSxRQWNDO0FBQUEsTUFiREMsY0FhQyxRQWJEQSxjQWFDO0FBQUEsTUFaREMsZUFZQyxRQVpEQSxlQVlDOztBQUFBLGtCQUMyQkMsc0RBQVEsQ0FBQyxFQUFELENBRG5DO0FBQUEsTUFDTUMsTUFETjtBQUFBLE1BQ2NDLFNBRGQ7O0FBRUQsTUFBTUMsY0FBYyxHQUFHQyx5REFBVyxDQUNoQyxVQUFDQyxLQUFELEVBQTZDO0FBQzNDSCxhQUFTLENBQUNHLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsS0FBckIsQ0FBVDtBQUNELEdBSCtCLEVBSWhDLEVBSmdDLENBQWxDO0FBTUEsTUFBTUMsYUFBYSxHQUFHSix5REFBVyxDQUMvQixVQUFDSyxTQUFELEVBQXVCO0FBQ3JCYixlQUFXLENBQUNhLFNBQUQsQ0FBWDtBQUNBaEIsZUFBVztBQUNaLEdBSjhCLEVBSy9CLENBQUNHLFdBQUQsRUFBY0gsV0FBZCxDQUwrQixDQUFqQzs7QUFSQyxtQkFnQm1DTyxzREFBUSxDQUFDLENBQUQsQ0FoQjNDO0FBQUEsTUFnQk1VLFVBaEJOO0FBQUEsTUFnQmtCQyxhQWhCbEI7O0FBaUJEQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUN0QixNQUFMLEVBQWE7QUFDWHFCLG1CQUFhLENBQUMsVUFBQ0UsSUFBRDtBQUFBLGVBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLE9BQUQsQ0FBYjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUN2QixNQUFELENBSk0sQ0FBVDs7QUFNQSxNQUFJQSxNQUFNLElBQUlvQixVQUFVLEtBQUssQ0FBN0IsRUFBZ0M7QUFDOUIsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0UscUVBQUMsaURBQUQ7QUFBVyxVQUFNLEVBQUVwQixNQUFuQjtBQUFBLDRCQUNFLHFFQUFDLDZDQUFEO0FBQUEsOEJBQ0UscUVBQUMsbURBQUQ7QUFBWSxlQUFPLEVBQUVHO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLHNEQUFEO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBT0Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxlQUFLLEVBQUU7QUFBRXNCLG1CQUFPLEVBQUUsTUFBWDtBQUFtQkMsc0JBQVUsRUFBRTtBQUEvQixXQUFaO0FBQUEsa0NBQ0UscUVBQUMscUVBQUQ7QUFBZSxtQkFBTyxFQUFFbEIsUUFBeEI7QUFBa0Msb0JBQVEsRUFBRUMsY0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFJR0MsZUFBZSxpQkFDZCxxRUFBQywyREFBRDtBQUFvQixtQkFBTyxFQUFFQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWVFO0FBQ0UsZUFBUyxFQUFFaUIsc0VBQU0sQ0FBQ0MsS0FEcEI7QUFFRSxpQkFBVyxFQUFDLDBCQUZkO0FBR0UsY0FBUSxFQUFFZDtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRixlQW9CRSxxRUFBQyx3REFBRDtBQUFBLDZCQUNFLHFFQUFDLG9EQUFEO0FBQ0UsY0FBTSxFQUFFVCxNQURWO0FBRUUsaUJBQVMsRUFBRUgsU0FGYjtBQUdFLGVBQU8sRUFBRUksT0FIWDtBQUlFLG1CQUFXLEVBQUVhLGFBSmY7QUFLRSxjQUFNLEVBQUVQLE1BTFY7QUFNRSxnQkFBUSxFQUFFSjtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztHQWpGUVIsZTs7S0FBQUEsZTtBQW1GTUEsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci4zZjVkYjAwMDEwMTQyMGY1NTdjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50LCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYWJlbENoZWNrYm94IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvTGFiZWxDaGVja2JveCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL2NvbXBzL2VkaXRvci5tb2R1bGUuY3NzJztcbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4uL0JhY2tCdXR0b24nO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBPcHRpb25zQ29udGFpbmVyLCBUaXRsZSwgVGl0bGVUZXh0R3JvdXAgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IERlZmF1bHRTa2lsbEJ1dHRvbiBmcm9tICcuLi9EZWZhdWx0U2tpbGxCdXR0b24nO1xuaW1wb3J0IFNraWxsUGlja2VyIGZyb20gJy4vU2tpbGxQaWNrZXInO1xuXG5mdW5jdGlvbiBTa2lsbFBpY2tlclZpZXcoe1xuICBoaWRkZW4sXG4gIHNraWxsVHlwZSxcbiAgdGl0bGUsXG4gIG9uQ2xpY2tCYWNrLFxuICBoZXJvSWQsXG4gIHNraWxsSWQsXG4gIHNlbGVjdFNraWxsLFxuICBtYXhTa2lsbCxcbiAgdG9nZ2xlTWF4U2tpbGwsXG4gIHNldERlZmF1bHRTa2lsbCxcbn06IHtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgc2tpbGxUeXBlOiAnc2tpbGxBJyB8ICdza2lsbEInIHwgJ3NraWxsQyc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9uQ2xpY2tCYWNrOiAoKSA9PiB2b2lkO1xuICBoZXJvSWQ6IHN0cmluZztcbiAgc2tpbGxJZDogc3RyaW5nO1xuICBzZWxlY3RTa2lsbDogKG5ld1NraWxsSWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgbWF4U2tpbGw6IGJvb2xlYW47XG4gIHRvZ2dsZU1heFNraWxsOiAoKSA9PiB2b2lkO1xuICBzZXREZWZhdWx0U2tpbGw/OiAoKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBvbkNoYW5nZUZpbHRlciA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgIHNldEZpbHRlcihldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICAgIFtdXG4gICk7XG4gIGNvbnN0IG9uU2VsZWN0U2tpbGwgPSB1c2VDYWxsYmFjayhcbiAgICAobmV3UmVmaW5lOiBzdHJpbmcpID0+IHtcbiAgICAgIHNlbGVjdFNraWxsKG5ld1JlZmluZSk7XG4gICAgICBvbkNsaWNrQmFjaygpO1xuICAgIH0sXG4gICAgW3NlbGVjdFNraWxsLCBvbkNsaWNrQmFja11cbiAgKTtcblxuICBjb25zdCBbaGlkZGVuVGltZSwgc2V0SGlkZGVuVGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgc2V0SGlkZGVuVGltZSgocHJldikgPT4gcHJldiArIDEpO1xuICAgIH1cbiAgfSwgW2hpZGRlbl0pO1xuXG4gIGlmIChoaWRkZW4gJiYgaGlkZGVuVGltZSA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBoaWRkZW49e2hpZGRlbn0+XG4gICAgICA8VGl0bGU+XG4gICAgICAgIDxCYWNrQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tCYWNrfSAvPlxuICAgICAgICA8VGl0bGVUZXh0R3JvdXA+XG4gICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICA8TGFiZWxDaGVja2JveCBjaGVja2VkPXttYXhTa2lsbH0gb25DaGFuZ2U9e3RvZ2dsZU1heFNraWxsfT5cbiAgICAgICAgICAgICAg5YOF6auY57Sa5oqA6IO9XG4gICAgICAgICAgICA8L0xhYmVsQ2hlY2tib3g+XG4gICAgICAgICAgICB7c2V0RGVmYXVsdFNraWxsICYmIChcbiAgICAgICAgICAgICAgPERlZmF1bHRTa2lsbEJ1dHRvbiBvbkNsaWNrPXtzZXREZWZhdWx0U2tpbGx9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RpdGxlVGV4dEdyb3VwPlxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCLmioDog73lkI3nqLFcIlxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VGaWx0ZXJ9XG4gICAgICAvPlxuICAgICAgPE9wdGlvbnNDb250YWluZXI+XG4gICAgICAgIDxTa2lsbFBpY2tlclxuICAgICAgICAgIGhlcm9JZD17aGVyb0lkfVxuICAgICAgICAgIHNraWxsVHlwZT17c2tpbGxUeXBlfVxuICAgICAgICAgIHNraWxsSWQ9e3NraWxsSWR9XG4gICAgICAgICAgc2VsZWN0U2tpbGw9e29uU2VsZWN0U2tpbGx9XG4gICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgbWF4U2tpbGw9e21heFNraWxsfVxuICAgICAgICAvPlxuICAgICAgPC9PcHRpb25zQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lsbFBpY2tlclZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9