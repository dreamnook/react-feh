webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/Editor/hooks.tsx":
/*!*****************************************!*\
  !*** ./app/components/Editor/hooks.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();



function useHooks() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      view = _useState[0],
      setView = _useState[1];

  var openHeroPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('hero');
  }, []);
  var openRarityPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('rarity');
  }, []);
  var openIVPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('iv');
  }, []);
  var openMergePicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('merge');
  }, []);
  var openDragonflowerPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('dragonflower');
  }, []);
  var openBlessingPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('blessing');
  }, []);
  var openWeaponPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('weapon');
  }, []);
  var openRefinePicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('refine');
  }, []);
  var openAssistPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('assist');
  }, []);
  var openSpecialPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('special');
  }, []);
  var openSkillAPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('skillA');
  }, []);
  var openSkillBPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('skillB');
  }, []);
  var openSkillCPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('skillC');
  }, []);
  var openSealPicker = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('seal');
  }, []);
  var onClickBack = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setView('');
  }, []);
  return {
    view: view,
    openHeroPicker: openHeroPicker,
    openRarityPicker: openRarityPicker,
    openIVPicker: openIVPicker,
    openMergePicker: openMergePicker,
    openDragonflowerPicker: openDragonflowerPicker,
    openBlessingPicker: openBlessingPicker,
    openWeaponPicker: openWeaponPicker,
    openRefinePicker: openRefinePicker,
    openAssistPicker: openAssistPicker,
    openSpecialPicker: openSpecialPicker,
    openSkillAPicker: openSkillAPicker,
    openSkillBPicker: openSkillBPicker,
    openSkillCPicker: openSkillCPicker,
    openSealPicker: openSealPicker,
    onClickBack: onClickBack
  };
}

_s(useHooks, "rRYy1gcQ1uFhpOI/NzabD0jrw6I=");

/* harmony default export */ __webpack_exports__["default"] = (useHooks);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/next/router.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VIb29rcyIsInVzZVN0YXRlIiwidmlldyIsInNldFZpZXciLCJvcGVuSGVyb1BpY2tlciIsInVzZUNhbGxiYWNrIiwib3BlblJhcml0eVBpY2tlciIsIm9wZW5JVlBpY2tlciIsIm9wZW5NZXJnZVBpY2tlciIsIm9wZW5EcmFnb25mbG93ZXJQaWNrZXIiLCJvcGVuQmxlc3NpbmdQaWNrZXIiLCJvcGVuV2VhcG9uUGlja2VyIiwib3BlblJlZmluZVBpY2tlciIsIm9wZW5Bc3Npc3RQaWNrZXIiLCJvcGVuU3BlY2lhbFBpY2tlciIsIm9wZW5Ta2lsbEFQaWNrZXIiLCJvcGVuU2tpbGxCUGlja2VyIiwib3BlblNraWxsQ1BpY2tlciIsIm9wZW5TZWFsUGlja2VyIiwib25DbGlja0JhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxFQUFELENBRGQ7QUFBQSxNQUNYQyxJQURXO0FBQUEsTUFDTEMsT0FESzs7QUFFbEIsTUFBTUMsY0FBYyxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDdkNGLFdBQU8sQ0FBQyxNQUFELENBQVA7QUFDRCxHQUZpQyxFQUUvQixFQUYrQixDQUFsQztBQUdBLE1BQU1HLGdCQUFnQixHQUFHRCx5REFBVyxDQUFDLFlBQU07QUFDekNGLFdBQU8sQ0FBQyxRQUFELENBQVA7QUFDRCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQztBQUdBLE1BQU1JLFlBQVksR0FBR0YseURBQVcsQ0FBQyxZQUFNO0FBQ3JDRixXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsR0FGK0IsRUFFN0IsRUFGNkIsQ0FBaEM7QUFHQSxNQUFNSyxlQUFlLEdBQUdILHlEQUFXLENBQUMsWUFBTTtBQUN4Q0YsV0FBTyxDQUFDLE9BQUQsQ0FBUDtBQUNELEdBRmtDLEVBRWhDLEVBRmdDLENBQW5DO0FBR0EsTUFBTU0sc0JBQXNCLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUMvQ0YsV0FBTyxDQUFDLGNBQUQsQ0FBUDtBQUNELEdBRnlDLEVBRXZDLEVBRnVDLENBQTFDO0FBR0EsTUFBTU8sa0JBQWtCLEdBQUdMLHlEQUFXLENBQUMsWUFBTTtBQUMzQ0YsV0FBTyxDQUFDLFVBQUQsQ0FBUDtBQUNELEdBRnFDLEVBRW5DLEVBRm1DLENBQXRDO0FBR0EsTUFBTVEsZ0JBQWdCLEdBQUdOLHlEQUFXLENBQUMsWUFBTTtBQUN6Q0YsV0FBTyxDQUFDLFFBQUQsQ0FBUDtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBR0EsTUFBTVMsZ0JBQWdCLEdBQUdQLHlEQUFXLENBQUMsWUFBTTtBQUN6Q0YsV0FBTyxDQUFDLFFBQUQsQ0FBUDtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBR0EsTUFBTVUsZ0JBQWdCLEdBQUdSLHlEQUFXLENBQUMsWUFBTTtBQUN6Q0YsV0FBTyxDQUFDLFFBQUQsQ0FBUDtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBR0EsTUFBTVcsaUJBQWlCLEdBQUdULHlEQUFXLENBQUMsWUFBTTtBQUMxQ0YsV0FBTyxDQUFDLFNBQUQsQ0FBUDtBQUNELEdBRm9DLEVBRWxDLEVBRmtDLENBQXJDO0FBR0EsTUFBTVksZ0JBQWdCLEdBQUdWLHlEQUFXLENBQUMsWUFBTTtBQUN6Q0YsV0FBTyxDQUFDLFFBQUQsQ0FBUDtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBR0EsTUFBTWEsZ0JBQWdCLEdBQUdYLHlEQUFXLENBQUMsWUFBTTtBQUN6Q0YsV0FBTyxDQUFDLFFBQUQsQ0FBUDtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBR0EsTUFBTWMsZ0JBQWdCLEdBQUdaLHlEQUFXLENBQUMsWUFBTTtBQUN6Q0YsV0FBTyxDQUFDLFFBQUQsQ0FBUDtBQUNELEdBRm1DLEVBRWpDLEVBRmlDLENBQXBDO0FBR0EsTUFBTWUsY0FBYyxHQUFHYix5REFBVyxDQUFDLFlBQU07QUFDdkNGLFdBQU8sQ0FBQyxNQUFELENBQVA7QUFDRCxHQUZpQyxFQUUvQixFQUYrQixDQUFsQztBQUdBLE1BQU1nQixXQUFXLEdBQUdkLHlEQUFXLENBQUMsWUFBTTtBQUNwQ0YsV0FBTyxDQUFDLEVBQUQsQ0FBUDtBQUNELEdBRjhCLEVBRTVCLEVBRjRCLENBQS9CO0FBR0EsU0FBTztBQUNMRCxRQUFJLEVBQUpBLElBREs7QUFFTEUsa0JBQWMsRUFBZEEsY0FGSztBQUdMRSxvQkFBZ0IsRUFBaEJBLGdCQUhLO0FBSUxDLGdCQUFZLEVBQVpBLFlBSks7QUFLTEMsbUJBQWUsRUFBZkEsZUFMSztBQU1MQywwQkFBc0IsRUFBdEJBLHNCQU5LO0FBT0xDLHNCQUFrQixFQUFsQkEsa0JBUEs7QUFRTEMsb0JBQWdCLEVBQWhCQSxnQkFSSztBQVNMQyxvQkFBZ0IsRUFBaEJBLGdCQVRLO0FBVUxDLG9CQUFnQixFQUFoQkEsZ0JBVks7QUFXTEMscUJBQWlCLEVBQWpCQSxpQkFYSztBQVlMQyxvQkFBZ0IsRUFBaEJBLGdCQVpLO0FBYUxDLG9CQUFnQixFQUFoQkEsZ0JBYks7QUFjTEMsb0JBQWdCLEVBQWhCQSxnQkFkSztBQWVMQyxrQkFBYyxFQUFkQSxjQWZLO0FBZ0JMQyxlQUFXLEVBQVhBO0FBaEJLLEdBQVA7QUFrQkQ7O0dBakVRbkIsUTs7QUFtRU1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuNGFjMjllMjVkM2RlMDY0MzRhMzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXNlSG9va3MoKSB7XG4gIGNvbnN0IFt2aWV3LCBzZXRWaWV3XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgb3Blbkhlcm9QaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VmlldygnaGVybycpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9wZW5SYXJpdHlQaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VmlldygncmFyaXR5Jyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3BlbklWUGlja2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFZpZXcoJ2l2Jyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3Blbk1lcmdlUGlja2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFZpZXcoJ21lcmdlJyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3BlbkRyYWdvbmZsb3dlclBpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRWaWV3KCdkcmFnb25mbG93ZXInKTtcbiAgfSwgW10pO1xuICBjb25zdCBvcGVuQmxlc3NpbmdQaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VmlldygnYmxlc3NpbmcnKTtcbiAgfSwgW10pO1xuICBjb25zdCBvcGVuV2VhcG9uUGlja2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFZpZXcoJ3dlYXBvbicpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9wZW5SZWZpbmVQaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VmlldygncmVmaW5lJyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3BlbkFzc2lzdFBpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRWaWV3KCdhc3Npc3QnKTtcbiAgfSwgW10pO1xuICBjb25zdCBvcGVuU3BlY2lhbFBpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRWaWV3KCdzcGVjaWFsJyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3BlblNraWxsQVBpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRWaWV3KCdza2lsbEEnKTtcbiAgfSwgW10pO1xuICBjb25zdCBvcGVuU2tpbGxCUGlja2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFZpZXcoJ3NraWxsQicpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9wZW5Ta2lsbENQaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Vmlldygnc2tpbGxDJyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3BlblNlYWxQaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0Vmlldygnc2VhbCcpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9uQ2xpY2tCYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFZpZXcoJycpO1xuICB9LCBbXSk7XG4gIHJldHVybiB7XG4gICAgdmlldyxcbiAgICBvcGVuSGVyb1BpY2tlcixcbiAgICBvcGVuUmFyaXR5UGlja2VyLFxuICAgIG9wZW5JVlBpY2tlcixcbiAgICBvcGVuTWVyZ2VQaWNrZXIsXG4gICAgb3BlbkRyYWdvbmZsb3dlclBpY2tlcixcbiAgICBvcGVuQmxlc3NpbmdQaWNrZXIsXG4gICAgb3BlbldlYXBvblBpY2tlcixcbiAgICBvcGVuUmVmaW5lUGlja2VyLFxuICAgIG9wZW5Bc3Npc3RQaWNrZXIsXG4gICAgb3BlblNwZWNpYWxQaWNrZXIsXG4gICAgb3BlblNraWxsQVBpY2tlcixcbiAgICBvcGVuU2tpbGxCUGlja2VyLFxuICAgIG9wZW5Ta2lsbENQaWNrZXIsXG4gICAgb3BlblNlYWxQaWNrZXIsXG4gICAgb25DbGlja0JhY2ssXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUhvb2tzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==