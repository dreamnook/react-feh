webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/Editor/hooks.tsx":
/*!*****************************************!*\
  !*** ./app/components/Editor/hooks.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _s = $RefreshSig$();




function useHooks() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      view = _useState[0],
      setView = _useState[1];

  var viewRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])('');
  var openHeroPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'hero';
    setView('hero');
  }, []);
  var openRarityPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'rarity';
    setView('rarity');
  }, []);
  var openIVPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'iv';
    setView('iv');
  }, []);
  var openMergePicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'merge';
    setView('merge');
  }, []);
  var openDragonflowerPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'dragonflower';
    setView('dragonflower');
  }, []);
  var openBlessingPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'blessing';
    setView('blessing');
  }, []);
  var openWeaponPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'weapon';
    setView('weapon');
  }, []);
  var openRefinePicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'refine';
    setView('refine');
  }, []);
  var openAssistPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'assist';
    setView('assist');
  }, []);
  var openSpecialPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'special';
    setView('special');
  }, []);
  var openSkillAPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'skillA';
    setView('skillA');
  }, []);
  var openSkillBPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'skillB';
    setView('skillB');
  }, []);
  var openSkillCPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'skillC';
    setView('skillC');
  }, []);
  var openSealPicker = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = 'seal';
    setView('seal');
  }, []);
  var onClickBack = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    viewRef.current = '';
    setView('');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    router.beforePopState(function (_ref) {
      var as = _ref.as;

      if (viewRef.current) {
        window.location.href = as;
        return false;
      }

      return true;
    });
  }, [router]);
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

_s(useHooks, "khN9pg1y6bu0mm4Qth4NEmlhNYY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"]];
});

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL2hvb2tzLnRzeCJdLCJuYW1lcyI6WyJ1c2VIb29rcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidmlldyIsInNldFZpZXciLCJ2aWV3UmVmIiwidXNlUmVmIiwib3Blbkhlcm9QaWNrZXIiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJvcGVuUmFyaXR5UGlja2VyIiwib3BlbklWUGlja2VyIiwib3Blbk1lcmdlUGlja2VyIiwib3BlbkRyYWdvbmZsb3dlclBpY2tlciIsIm9wZW5CbGVzc2luZ1BpY2tlciIsIm9wZW5XZWFwb25QaWNrZXIiLCJvcGVuUmVmaW5lUGlja2VyIiwib3BlbkFzc2lzdFBpY2tlciIsIm9wZW5TcGVjaWFsUGlja2VyIiwib3BlblNraWxsQVBpY2tlciIsIm9wZW5Ta2lsbEJQaWNrZXIiLCJvcGVuU2tpbGxDUGlja2VyIiwib3BlblNlYWxQaWNrZXIiLCJvbkNsaWNrQmFjayIsInVzZUVmZmVjdCIsImJlZm9yZVBvcFN0YXRlIiwiYXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGtCLGtCQUVNQyxzREFBUSxDQUFDLEVBQUQsQ0FGZDtBQUFBLE1BRVhDLElBRlc7QUFBQSxNQUVMQyxPQUZLOztBQUdsQixNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLENBQUMsRUFBRCxDQUF0QjtBQUNBLE1BQU1DLGNBQWMsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3ZDSCxXQUFPLENBQUNJLE9BQVIsR0FBa0IsTUFBbEI7QUFDQUwsV0FBTyxDQUFDLE1BQUQsQ0FBUDtBQUNELEdBSGlDLEVBRy9CLEVBSCtCLENBQWxDO0FBSUEsTUFBTU0sZ0JBQWdCLEdBQUdGLHlE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QVMsQ0FBQyxZQUFNO0FBQ2R4QixVQUFNLENBQUN5QixjQUFQLENBQXNCLGdCQUFZO0FBQUEsVUFBVEMsRUFBUyxRQUFUQSxFQUFTOztBQUNoQyxVQUFJckIsT0FBTyxDQUFDSSxPQUFaLEVBQXFCO0FBQ25Ca0IsY0FBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QkgsRUFBdkI7QUFDQSxlQUFPLEtBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRCxLQU5EO0FBT0QsR0FSUSxFQVFOLENBQUMxQixNQUFELENBUk0sQ0FBVDtBQVNBLFNBQU87QUFDTEcsUUFBSSxFQUFKQSxJQURLO0FBRUxJLGtCQUFjLEVBQWRBLGNBRks7QUFHTEcsb0JBQWdCLEVBQWhCQSxnQkFISztBQUlMQyxnQkFBWSxFQUFaQSxZQUpLO0FBS0xDLG1CQUFlLEVBQWZBLGVBTEs7QUFNTEMsMEJBQXNCLEVBQXRCQSxzQkFOSztBQU9MQyxzQkFBa0IsRUFBbEJBLGtCQVBLO0FBUUxDLG9CQUFnQixFQUFoQkEsZ0JBUks7QUFTTEMsb0JBQWdCLEVBQWhCQSxnQkFUSztBQVVMQyxvQkFBZ0IsRUFBaEJBLGdCQVZLO0FBV0xDLHFCQUFpQixFQUFqQkEsaUJBWEs7QUFZTEMsb0JBQWdCLEVBQWhCQSxnQkFaSztBQWFMQyxvQkFBZ0IsRUFBaEJBLGdCQWJLO0FBY0xDLG9CQUFnQixFQUFoQkEsZ0JBZEs7QUFlTEMsa0JBQWMsRUFBZEEsY0FmSztBQWdCTEMsZUFBVyxFQUFYQTtBQWhCSyxHQUFQO0FBa0JEOztHQTVGUXhCLFE7VUFDUUUscUQ7OztBQTZGRkYsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci5mYTIwODlmNTBlYWU1NTVmNTgzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gdXNlSG9va3MoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdmlldywgc2V0Vmlld10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHZpZXdSZWYgPSB1c2VSZWYoJycpO1xuICBjb25zdCBvcGVuSGVyb1BpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB2aWV3UmVmLmN1cnJlbnQgPSAnaGVybyc7XG4gICAgc2V0VmlldygnaGVybycpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9wZW5SYXJpdHlQaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdmlld1JlZi5jdXJyZW50ID0gJ3Jhcml0eSc7XG4gICAgc2V0VmlldygncmFyaXR5Jyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3BlbklWUGlja2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHZpZXdSZWYuY3VycmVudCA9ICdpdic7XG4gICAgc2V0VmlldygnaXYnKTtcbiAgfSwgW10pO1xuICBjb25zdCBvcGVuTWVyZ2VQaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdmlld1JlZi5jdXJyZW50ID0gJ21lcmdlJztcbiAgICBzZXRWaWV3KCdtZXJnZScpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9wZW5EcmFnb25mbG93ZXJQaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdmlld1JlZi5jdXJyZW50ID0gJ2RyYWdvbmZsb3dlcic7XG4gICAgc2V0VmlldygnZHJhZ29uZmxvd2VyJyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3BlbkJsZXNzaW5nUGlja2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHZpZXdSZWYuY3VycmVudCA9ICdibGVzc2luZyc7XG4gICAgc2V0VmlldygnYmxlc3NpbmcnKTtcbiAgfSwgW10pO1xuICBjb25zdCBvcGVuV2VhcG9uUGlja2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHZpZXdSZWYuY3VycmVudCA9ICd3ZWFwb24nO1xuICAgIHNldFZpZXcoJ3dlYXBvbicpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9wZW5SZWZpbmVQaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdmlld1JlZi5jdXJyZW50ID0gJ3JlZmluZSc7XG4gICAgc2V0VmlldygncmVmaW5lJyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3BlbkFzc2lzdFBpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB2aWV3UmVmLmN1cnJlbnQgPSAnYXNzaXN0JztcbiAgICBzZXRWaWV3KCdhc3Npc3QnKTtcbiAgfSwgW10pO1xuICBjb25zdCBvcGVuU3BlY2lhbFBpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB2aWV3UmVmLmN1cnJlbnQgPSAnc3BlY2lhbCc7XG4gICAgc2V0Vmlldygnc3BlY2lhbCcpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9wZW5Ta2lsbEFQaWNrZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdmlld1JlZi5jdXJyZW50ID0gJ3NraWxsQSc7XG4gICAgc2V0Vmlldygnc2tpbGxBJyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb3BlblNraWxsQlBpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICB2aWV3UmVmLmN1cnJlbnQgPSAnc2tpbGxCJztcbiAgICBzZXRWaWV3KCdza2lsbEInKTtcbiAgfSwgW10pO1xuICBjb25zdCBvcGVuU2tpbGxDUGlja2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHZpZXdSZWYuY3VycmVudCA9ICdza2lsbEMnO1xuICAgIHNldFZpZXcoJ3NraWxsQycpO1xuICB9LCBbXSk7XG4gIGNvbnN0IG9wZW5TZWFsUGlja2VyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHZpZXdSZWYuY3VycmVudCA9ICdzZWFsJztcbiAgICBzZXRWaWV3KCdzZWFsJyk7XG4gIH0sIFtdKTtcbiAgY29uc3Qgb25DbGlja0JhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgdmlld1JlZi5jdXJyZW50ID0gJyc7XG4gICAgc2V0VmlldygnJyk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJvdXRlci5iZWZvcmVQb3BTdGF0ZSgoeyBhcyB9KSA9PiB7XG4gICAgICBpZiAodmlld1JlZi5jdXJyZW50KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9LCBbcm91dGVyXSk7XG4gIHJldHVybiB7XG4gICAgdmlldyxcbiAgICBvcGVuSGVyb1BpY2tlcixcbiAgICBvcGVuUmFyaXR5UGlja2VyLFxuICAgIG9wZW5JVlBpY2tlcixcbiAgICBvcGVuTWVyZ2VQaWNrZXIsXG4gICAgb3BlbkRyYWdvbmZsb3dlclBpY2tlcixcbiAgICBvcGVuQmxlc3NpbmdQaWNrZXIsXG4gICAgb3BlbldlYXBvblBpY2tlcixcbiAgICBvcGVuUmVmaW5lUGlja2VyLFxuICAgIG9wZW5Bc3Npc3RQaWNrZXIsXG4gICAgb3BlblNwZWNpYWxQaWNrZXIsXG4gICAgb3BlblNraWxsQVBpY2tlcixcbiAgICBvcGVuU2tpbGxCUGlja2VyLFxuICAgIG9wZW5Ta2lsbENQaWNrZXIsXG4gICAgb3BlblNlYWxQaWNrZXIsXG4gICAgb25DbGlja0JhY2ssXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUhvb2tzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==