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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    hidden: hidden,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_5__["Title"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: onClickBack
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_5__["TitleTextGroup"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
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
            lineNumber: 53,
            columnNumber: 13
          }, this), setDefaultSkill && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DefaultSkillButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            onClick: setDefaultSkill
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      className: _styles_comps_editor_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
      placeholder: "\u6280\u80FD\u540D\u7A31",
      onChange: onChangeFilter
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
        lineNumber: 68,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(SkillPickerView, "uOOkI7qZAZGjQKRU/KyR1x3DIOU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NraWxsUGlja2VyVmlldy9pbmRleC50c3giXSwibmFtZXMiOlsiU2tpbGxQaWNrZXJWaWV3IiwiaGlkZGVuIiwic2tpbGxUeXBlIiwidGl0bGUiLCJvbkNsaWNrQmFjayIsImhlcm9JZCIsInNraWxsSWQiLCJzZWxlY3RTa2lsbCIsIm1heFNraWxsIiwidG9nZ2xlTWF4U2tpbGwiLCJzZXREZWZhdWx0U2tpbGwiLCJ1c2VTdGF0ZSIsImZpbHRlciIsInNldEZpbHRlciIsIm9uQ2hhbmdlRmlsdGVyIiwidXNlQ2FsbGJhY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm9uU2VsZWN0U2tpbGwiLCJuZXdSZWZpbmUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInN0eWxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULE9Bc0JHO0FBQUE7O0FBQUEsTUFyQkRDLE1BcUJDLFFBckJEQSxNQXFCQztBQUFBLE1BcEJEQyxTQW9CQyxRQXBCREEsU0FvQkM7QUFBQSxNQW5CREMsS0FtQkMsUUFuQkRBLEtBbUJDO0FBQUEsTUFsQkRDLFdBa0JDLFFBbEJEQSxXQWtCQztBQUFBLE1BakJEQyxNQWlCQyxRQWpCREEsTUFpQkM7QUFBQSxNQWhCREMsT0FnQkMsUUFoQkRBLE9BZ0JDO0FBQUEsTUFmREMsV0FlQyxRQWZEQSxXQWVDO0FBQUEsTUFkREMsUUFjQyxRQWREQSxRQWNDO0FBQUEsTUFiREMsY0FhQyxRQWJEQSxjQWFDO0FBQUEsTUFaREMsZUFZQyxRQVpEQSxlQVlDOztBQUFBLGtCQUMyQkMsc0RBQVEsQ0FBQyxFQUFELENBRG5DO0FBQUEsTUFDTUMsTUFETjtBQUFBLE1BQ2NDLFNBRGQ7O0FBRUQsTUFBTUMsY0FBYyxHQUFHQyx5REFBVyxDQUNoQyxVQUFDQyxLQUFELEVBQTZDO0FBQzNDSCxhQUFTLENBQUNHLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsS0FBckIsQ0FBVDtBQUNELEdBSCtCLEVBSWhDLEVBSmdDLENBQWxDO0FBTUEsTUFBTUMsYUFBYSxHQUFHSix5REFBVyxDQUMvQixVQUFDSyxTQUFELEVBQXVCO0FBQ3JCYixlQUFXLENBQUNhLFNBQUQsQ0FBWDtBQUNBaEIsZUFBVztBQUNaLEdBSjhCLEVBSy9CLENBQUNHLFdBQUQsRUFBY0gsV0FBZCxDQUwrQixDQUFqQztBQU9BLHNCQUNFLHFFQUFDLGlEQUFEO0FBQVcsVUFBTSxFQUFFSCxNQUFuQjtBQUFBLDRCQUNFLHFFQUFDLDZDQUFEO0FBQUEsOEJBQ0UscUVBQUMsbURBQUQ7QUFBWSxlQUFPLEVBQUVHO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLHNEQUFEO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBT0Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxlQUFLLEVBQUU7QUFBRWtCLG1CQUFPLEVBQUUsTUFBWDtBQUFtQkMsc0JBQVUsRUFBRTtBQUEvQixXQUFaO0FBQUEsa0NBQ0UscUVBQUMscUVBQUQ7QUFBZSxtQkFBTyxFQUFFZCxRQUF4QjtBQUFrQyxvQkFBUSxFQUFFQyxjQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUlHQyxlQUFlLGlCQUNkLHFFQUFDLDJEQUFEO0FBQW9CLG1CQUFPLEVBQUVBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBZUU7QUFDRSxlQUFTLEVBQUVhLHNFQUFNLENBQUNDLEtBRHBCO0FBRUUsaUJBQVcsRUFBQywwQkFGZDtBQUdFLGNBQVEsRUFBRVY7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUFvQkUscUVBQUMsd0RBQUQ7QUFBQSw2QkFDRSxxRUFBQyxvREFBRDtBQUNFLGNBQU0sRUFBRVQsTUFEVjtBQUVFLGlCQUFTLEVBQUVILFNBRmI7QUFHRSxlQUFPLEVBQUVJLE9BSFg7QUFJRSxtQkFBVyxFQUFFYSxhQUpmO0FBS0UsY0FBTSxFQUFFUCxNQUxWO0FBTUUsZ0JBQVEsRUFBRUo7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRDs7R0F0RVFSLGU7O0tBQUFBLGU7QUF3RU1BLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuMzU2YzkzMjVmNGVhZmY5NjA2NGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTeW50aGV0aWNFdmVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGFiZWxDaGVja2JveCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0xhYmVsQ2hlY2tib3gnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9jb21wcy9lZGl0b3IubW9kdWxlLmNzcyc7XG5pbXBvcnQgQmFja0J1dHRvbiBmcm9tICcuLi9CYWNrQnV0dG9uJztcbmltcG9ydCB7IENvbnRhaW5lciwgT3B0aW9uc0NvbnRhaW5lciwgVGl0bGUsIFRpdGxlVGV4dEdyb3VwIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCBEZWZhdWx0U2tpbGxCdXR0b24gZnJvbSAnLi4vRGVmYXVsdFNraWxsQnV0dG9uJztcbmltcG9ydCBTa2lsbFBpY2tlciBmcm9tICcuL1NraWxsUGlja2VyJztcblxuZnVuY3Rpb24gU2tpbGxQaWNrZXJWaWV3KHtcbiAgaGlkZGVuLFxuICBza2lsbFR5cGUsXG4gIHRpdGxlLFxuICBvbkNsaWNrQmFjayxcbiAgaGVyb0lkLFxuICBza2lsbElkLFxuICBzZWxlY3RTa2lsbCxcbiAgbWF4U2tpbGwsXG4gIHRvZ2dsZU1heFNraWxsLFxuICBzZXREZWZhdWx0U2tpbGwsXG59OiB7XG4gIGhpZGRlbj86IGJvb2xlYW47XG4gIHNraWxsVHlwZTogJ3NraWxsQScgfCAnc2tpbGxCJyB8ICdza2lsbEMnO1xuICB0aXRsZTogc3RyaW5nO1xuICBvbkNsaWNrQmFjazogKCkgPT4gdm9pZDtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHNraWxsSWQ6IHN0cmluZztcbiAgc2VsZWN0U2tpbGw6IChuZXdTa2lsbElkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG1heFNraWxsOiBib29sZWFuO1xuICB0b2dnbGVNYXhTa2lsbDogKCkgPT4gdm9pZDtcbiAgc2V0RGVmYXVsdFNraWxsPzogKCkgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgb25DaGFuZ2VGaWx0ZXIgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICBzZXRGaWx0ZXIoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBbXVxuICApO1xuICBjb25zdCBvblNlbGVjdFNraWxsID0gdXNlQ2FsbGJhY2soXG4gICAgKG5ld1JlZmluZTogc3RyaW5nKSA9PiB7XG4gICAgICBzZWxlY3RTa2lsbChuZXdSZWZpbmUpO1xuICAgICAgb25DbGlja0JhY2soKTtcbiAgICB9LFxuICAgIFtzZWxlY3RTa2lsbCwgb25DbGlja0JhY2tdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBoaWRkZW49e2hpZGRlbn0+XG4gICAgICA8VGl0bGU+XG4gICAgICAgIDxCYWNrQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tCYWNrfSAvPlxuICAgICAgICA8VGl0bGVUZXh0R3JvdXA+XG4gICAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICA8TGFiZWxDaGVja2JveCBjaGVja2VkPXttYXhTa2lsbH0gb25DaGFuZ2U9e3RvZ2dsZU1heFNraWxsfT5cbiAgICAgICAgICAgICAg5YOF6auY57Sa5oqA6IO9XG4gICAgICAgICAgICA8L0xhYmVsQ2hlY2tib3g+XG4gICAgICAgICAgICB7c2V0RGVmYXVsdFNraWxsICYmIChcbiAgICAgICAgICAgICAgPERlZmF1bHRTa2lsbEJ1dHRvbiBvbkNsaWNrPXtzZXREZWZhdWx0U2tpbGx9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RpdGxlVGV4dEdyb3VwPlxuICAgICAgPC9UaXRsZT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCLmioDog73lkI3nqLFcIlxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VGaWx0ZXJ9XG4gICAgICAvPlxuICAgICAgPE9wdGlvbnNDb250YWluZXI+XG4gICAgICAgIDxTa2lsbFBpY2tlclxuICAgICAgICAgIGhlcm9JZD17aGVyb0lkfVxuICAgICAgICAgIHNraWxsVHlwZT17c2tpbGxUeXBlfVxuICAgICAgICAgIHNraWxsSWQ9e3NraWxsSWR9XG4gICAgICAgICAgc2VsZWN0U2tpbGw9e29uU2VsZWN0U2tpbGx9XG4gICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgbWF4U2tpbGw9e21heFNraWxsfVxuICAgICAgICAvPlxuICAgICAgPC9PcHRpb25zQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lsbFBpY2tlclZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9