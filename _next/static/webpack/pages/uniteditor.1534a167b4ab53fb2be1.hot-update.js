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
  }, [selectSkill, onClickBack]); // const [hiddenTime, setHiddenTime] = useState(0);
  // useEffect(() => {
  //   if (!hidden) {
  //     setHiddenTime((prev) => prev + 1);
  //   }
  // }, [hidden]);
  // if (hidden && hiddenTime === 0) {
  //   return null;
  // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1NraWxsUGlja2VyVmlldy9pbmRleC50c3giXSwibmFtZXMiOlsiU2tpbGxQaWNrZXJWaWV3IiwiaGlkZGVuIiwic2tpbGxUeXBlIiwidGl0bGUiLCJvbkNsaWNrQmFjayIsImhlcm9JZCIsInNraWxsSWQiLCJzZWxlY3RTa2lsbCIsIm1heFNraWxsIiwidG9nZ2xlTWF4U2tpbGwiLCJzZXREZWZhdWx0U2tpbGwiLCJ1c2VTdGF0ZSIsImZpbHRlciIsInNldEZpbHRlciIsIm9uQ2hhbmdlRmlsdGVyIiwidXNlQ2FsbGJhY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm9uU2VsZWN0U2tpbGwiLCJuZXdSZWZpbmUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsInN0eWxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxlQUFULE9Bc0JHO0FBQUE7O0FBQUEsTUFyQkRDLE1BcUJDLFFBckJEQSxNQXFCQztBQUFBLE1BcEJEQyxTQW9CQyxRQXBCREEsU0FvQkM7QUFBQSxNQW5CREMsS0FtQkMsUUFuQkRBLEtBbUJDO0FBQUEsTUFsQkRDLFdBa0JDLFFBbEJEQSxXQWtCQztBQUFBLE1BakJEQyxNQWlCQyxRQWpCREEsTUFpQkM7QUFBQSxNQWhCREMsT0FnQkMsUUFoQkRBLE9BZ0JDO0FBQUEsTUFmREMsV0FlQyxRQWZEQSxXQWVDO0FBQUEsTUFkREMsUUFjQyxRQWREQSxRQWNDO0FBQUEsTUFiREMsY0FhQyxRQWJEQSxjQWFDO0FBQUEsTUFaREMsZUFZQyxRQVpEQSxlQVlDOztBQUFBLGtCQUMyQkMsc0RBQVEsQ0FBQyxFQUFELENBRG5DO0FBQUEsTUFDTUMsTUFETjtBQUFBLE1BQ2NDLFNBRGQ7O0FBRUQsTUFBTUMsY0FBYyxHQUFHQyx5REFBVyxDQUNoQyxVQUFDQyxLQUFELEVBQTZDO0FBQzNDSCxhQUFTLENBQUNHLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsS0FBckIsQ0FBVDtBQUNELEdBSCtCLEVBSWhDLEVBSmdDLENBQWxDO0FBTUEsTUFBTUMsYUFBYSxHQUFHSix5REFBVyxDQUMvQixVQUFDSyxTQUFELEVBQXVCO0FBQ3JCYixlQUFXLENBQUNhLFNBQUQsQ0FBWDtBQUNBaEIsZUFBVztBQUNaLEdBSjhCLEVBSy9CLENBQUNHLFdBQUQsRUFBY0gsV0FBZCxDQUwrQixDQUFqQyxDQVJDLENBZ0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxzQkFDRSxxRUFBQyxpREFBRDtBQUFXLFVBQU0sRUFBRUgsTUFBbkI7QUFBQSw0QkFDRSxxRUFBQyw2Q0FBRDtBQUFBLDhCQUNFLHFFQUFDLG1EQUFEO0FBQVksZUFBTyxFQUFFRztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxzREFBRDtBQUFBLGdDQUNFO0FBQUEsb0JBQU9EO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssZUFBSyxFQUFFO0FBQUVrQixtQkFBTyxFQUFFLE1BQVg7QUFBbUJDLHNCQUFVLEVBQUU7QUFBL0IsV0FBWjtBQUFBLGtDQUNFLHFFQUFDLHFFQUFEO0FBQWUsbUJBQU8sRUFBRWQsUUFBeEI7QUFBa0Msb0JBQVEsRUFBRUMsY0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFJR0MsZUFBZSxpQkFDZCxxRUFBQywyREFBRDtBQUFvQixtQkFBTyxFQUFFQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWVFO0FBQ0UsZUFBUyxFQUFFYSxzRUFBTSxDQUFDQyxLQURwQjtBQUVFLGlCQUFXLEVBQUMsMEJBRmQ7QUFHRSxjQUFRLEVBQUVWO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLGVBb0JFLHFFQUFDLHdEQUFEO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQ7QUFDRSxjQUFNLEVBQUVULE1BRFY7QUFFRSxpQkFBUyxFQUFFSCxTQUZiO0FBR0UsZUFBTyxFQUFFSSxPQUhYO0FBSUUsbUJBQVcsRUFBRWEsYUFKZjtBQUtFLGNBQU0sRUFBRVAsTUFMVjtBQU1FLGdCQUFRLEVBQUVKO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7O0dBakZRUixlOztLQUFBQSxlO0FBbUZNQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjE1MzRhMTY3YjRhYjUzZmIyYmUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExhYmVsQ2hlY2tib3ggZnJvbSAnQC9hcHAvY29tcG9uZW50cy9MYWJlbENoZWNrYm94JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvY29tcHMvZWRpdG9yLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSAnLi4vQmFja0J1dHRvbic7XG5pbXBvcnQgeyBDb250YWluZXIsIE9wdGlvbnNDb250YWluZXIsIFRpdGxlLCBUaXRsZVRleHRHcm91cCB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgRGVmYXVsdFNraWxsQnV0dG9uIGZyb20gJy4uL0RlZmF1bHRTa2lsbEJ1dHRvbic7XG5pbXBvcnQgU2tpbGxQaWNrZXIgZnJvbSAnLi9Ta2lsbFBpY2tlcic7XG5cbmZ1bmN0aW9uIFNraWxsUGlja2VyVmlldyh7XG4gIGhpZGRlbixcbiAgc2tpbGxUeXBlLFxuICB0aXRsZSxcbiAgb25DbGlja0JhY2ssXG4gIGhlcm9JZCxcbiAgc2tpbGxJZCxcbiAgc2VsZWN0U2tpbGwsXG4gIG1heFNraWxsLFxuICB0b2dnbGVNYXhTa2lsbCxcbiAgc2V0RGVmYXVsdFNraWxsLFxufToge1xuICBoaWRkZW4/OiBib29sZWFuO1xuICBza2lsbFR5cGU6ICdza2lsbEEnIHwgJ3NraWxsQicgfCAnc2tpbGxDJztcbiAgdGl0bGU6IHN0cmluZztcbiAgb25DbGlja0JhY2s6ICgpID0+IHZvaWQ7XG4gIGhlcm9JZDogc3RyaW5nO1xuICBza2lsbElkOiBzdHJpbmc7XG4gIHNlbGVjdFNraWxsOiAobmV3U2tpbGxJZDogc3RyaW5nKSA9PiB2b2lkO1xuICBtYXhTa2lsbDogYm9vbGVhbjtcbiAgdG9nZ2xlTWF4U2tpbGw6ICgpID0+IHZvaWQ7XG4gIHNldERlZmF1bHRTa2lsbD86ICgpID0+IHZvaWQ7XG59KSB7XG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IG9uQ2hhbmdlRmlsdGVyID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgc2V0RmlsdGVyKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgIH0sXG4gICAgW11cbiAgKTtcbiAgY29uc3Qgb25TZWxlY3RTa2lsbCA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdSZWZpbmU6IHN0cmluZykgPT4ge1xuICAgICAgc2VsZWN0U2tpbGwobmV3UmVmaW5lKTtcbiAgICAgIG9uQ2xpY2tCYWNrKCk7XG4gICAgfSxcbiAgICBbc2VsZWN0U2tpbGwsIG9uQ2xpY2tCYWNrXVxuICApO1xuXG4gIC8vIGNvbnN0IFtoaWRkZW5UaW1lLCBzZXRIaWRkZW5UaW1lXSA9IHVzZVN0YXRlKDApO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICghaGlkZGVuKSB7XG4gIC8vICAgICBzZXRIaWRkZW5UaW1lKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gIC8vICAgfVxuICAvLyB9LCBbaGlkZGVuXSk7XG5cbiAgLy8gaWYgKGhpZGRlbiAmJiBoaWRkZW5UaW1lID09PSAwKSB7XG4gIC8vICAgcmV0dXJuIG51bGw7XG4gIC8vIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGhpZGRlbj17aGlkZGVufT5cbiAgICAgIDxUaXRsZT5cbiAgICAgICAgPEJhY2tCdXR0b24gb25DbGljaz17b25DbGlja0JhY2t9IC8+XG4gICAgICAgIDxUaXRsZVRleHRHcm91cD5cbiAgICAgICAgICA8c3Bhbj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIDxMYWJlbENoZWNrYm94IGNoZWNrZWQ9e21heFNraWxsfSBvbkNoYW5nZT17dG9nZ2xlTWF4U2tpbGx9PlxuICAgICAgICAgICAgICDlg4Xpq5jntJrmioDog71cbiAgICAgICAgICAgIDwvTGFiZWxDaGVja2JveD5cbiAgICAgICAgICAgIHtzZXREZWZhdWx0U2tpbGwgJiYgKFxuICAgICAgICAgICAgICA8RGVmYXVsdFNraWxsQnV0dG9uIG9uQ2xpY2s9e3NldERlZmF1bHRTa2lsbH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGl0bGVUZXh0R3JvdXA+XG4gICAgICA8L1RpdGxlPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIuaKgOiDveWQjeeosVwiXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUZpbHRlcn1cbiAgICAgIC8+XG4gICAgICA8T3B0aW9uc0NvbnRhaW5lcj5cbiAgICAgICAgPFNraWxsUGlja2VyXG4gICAgICAgICAgaGVyb0lkPXtoZXJvSWR9XG4gICAgICAgICAgc2tpbGxUeXBlPXtza2lsbFR5cGV9XG4gICAgICAgICAgc2tpbGxJZD17c2tpbGxJZH1cbiAgICAgICAgICBzZWxlY3RTa2lsbD17b25TZWxlY3RTa2lsbH1cbiAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICBtYXhTa2lsbD17bWF4U2tpbGx9XG4gICAgICAgIC8+XG4gICAgICA8L09wdGlvbnNDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraWxsUGlja2VyVmlldztcbiJdLCJzb3VyY2VSb290IjoiIn0=