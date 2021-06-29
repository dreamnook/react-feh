self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/utils/blessings.tsx":
/*!*********************************!*\
  !*** ./app/utils/blessings.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSrc": function() { return /* binding */ getSrc; },
/* harmony export */   "getName": function() { return /* binding */ getName; },
/* harmony export */   "getSrcAndName": function() { return /* binding */ getSrcAndName; },
/* harmony export */   "options": function() { return /* binding */ options; }
/* harmony export */ });
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _generals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generals */ "./app/utils/generals.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var blessingKindNameMap = {
  fire: '火之祝福',
  water: '水之祝福',
  wind: '風之祝福',
  earth: '地之祝福',
  light: '光之祝福',
  dark: '闇之祝福',
  astra: '天之祝福',
  anima: '理之祝福'
};
var blesserKindNameMap = {
  fire: '火之傳承',
  water: '水之傳承',
  wind: '風之傳承',
  earth: '地之傳承',
  light: '光之傳承',
  dark: '闇之傳承',
  astra: '天之傳承',
  anima: '理之傳承'
};
var blessingBoostNameMap = {
  hp: '死鬥',
  atk: '攻擊',
  spd: '速度',
  def: '防守',
  res: '魔防'
};
var blesserNameMap = _generals__WEBPACK_IMPORTED_MODULE_2__.blessers.reduce(function (acc, blesser) {
  var _blesser$split = blesser.split('-'),
      _blesser$split2 = (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_blesser$split, 2),
      kind = _blesser$split2[0],
      boost = _blesser$split2[1];

  return _objectSpread(_objectSpread({}, acc), {}, (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, blesser, "".concat(blesserKindNameMap[kind], " - ").concat(blessingBoostNameMap[boost])));
}, {});
var blessRegex = new RegExp(/(\w+)(?:-\w+(-\d)?)?/);

function getBlessKey(bless) {
  var _bless$match;

  return (_bless$match = bless.match(blessRegex)) === null || _bless$match === void 0 ? void 0 : _bless$match[1];
}

function getSrc(bless) {
  if (!bless || bless === '-') {
    return '';
  }

  var blessKey = getBlessKey(bless);

  if (blessingKindNameMap[blessKey] || blesserNameMap[blessKey]) {
    return "/assets/blessing-".concat(bless, ".png");
  }

  return '';
}
function getName(bless) {
  if (!bless || bless === '-') {
    return '';
  }

  var blessKey = getBlessKey(bless);
  return blessingKindNameMap[blessKey] || blesserNameMap[blessKey] || '無祝福';
}
function getSrcAndName(bless) {
  return {
    src: getSrc(bless),
    name: getName(bless)
  };
}
var options = Object.entries(blessingKindNameMap).map(function (_ref) {
  var _ref2 = (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),
      value = _ref2[0],
      name = _ref2[1];

  return {
    value: value,
    name: name
  };
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL2JsZXNzaW5ncy50c3giXSwibmFtZXMiOlsiYmxlc3NpbmdLaW5kTmFtZU1hcCIsImZpcmUiLCJ3YXRlciIsIndpbmQiLCJlYXJ0aCIsImxpZ2h0IiwiZGFyayIsImFzdHJhIiwiYW5pbWEiLCJibGVzc2VyS2luZE5hbWVNYXAiLCJibGVzc2luZ0Jvb3N0TmFtZU1hcCIsImhwIiwiYXRrIiwic3BkIiwiZGVmIiwicmVzIiwiYmxlc3Nlck5hbWVNYXAiLCJibGVzc2VycyIsImFjYyIsImJsZXNzZXIiLCJzcGxpdCIsImtpbmQiLCJib29zdCIsImJsZXNzUmVnZXgiLCJSZWdFeHAiLCJnZXRCbGVzc0tleSIsImJsZXNzIiwibWF0Y2giLCJnZXRTcmMiLCJibGVzc0tleSIsImdldE5hbWUiLCJnZXRTcmNBbmROYW1lIiwic3JjIiwibmFtZSIsIm9wdGlvbnMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUEsSUFBTUEsbUJBQWdFLEdBQUc7QUFDdkVDLE1BQUksRUFBRSxNQURpRTtBQUV2RUMsT0FBSyxFQUFFLE1BRmdFO0FBR3ZFQyxNQUFJLEVBQUUsTUFIaUU7QUFJdkVDLE9BQUssRUFBRSxNQUpnRTtBQUt2RUMsT0FBSyxFQUFFLE1BTGdFO0FBTXZFQyxNQUFJLEVBQUUsTUFOaUU7QUFPdkVDLE9BQUssRUFBRSxNQVBnRTtBQVF2RUMsT0FBSyxFQUFFO0FBUmdFLENBQXpFO0FBV0EsSUFBTUMsa0JBQStELEdBQUc7QUFDdEVSLE1BQUksRUFBRSxNQURnRTtBQUV0RUMsT0FBSyxFQUFFLE1BRitEO0FBR3RFQyxNQUFJLEVBQUUsTUFIZ0U7QUFJdEVDLE9BQUssRUFBRSxNQUorRDtBQUt0RUMsT0FBSyxFQUFFLE1BTCtEO0FBTXRFQyxNQUFJLEVBQUUsTUFOZ0U7QUFPdEVDLE9BQUssRUFBRSxNQVArRDtBQVF0RUMsT0FBSyxFQUFFO0FBUitELENBQXhFO0FBV0EsSUFBTUUsb0JBRUwsR0FBRztBQUNGQyxJQUFFLEVBQUUsSUFERjtBQUVGQyxLQUFHLEVBQUUsSUFGSDtBQUdGQyxLQUFHLEVBQUUsSUFISDtBQUlGQyxLQUFHLEVBQUUsSUFKSDtBQUtGQyxLQUFHLEVBQUU7QUFMSCxDQUZKO0FBVUEsSUFBTUMsY0FFTCxHQUFHQyxzREFBQSxDQUFnQixVQUFDQyxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFBQSx1QkFDZEEsT0FBTyxDQUFDQyxLQUFSLENBQWMsR0FBZCxDQURjO0FBQUE7QUFBQSxNQUM3QkMsSUFENkI7QUFBQSxNQUN2QkMsS0FEdUI7O0FBRXBDLHlDQUNLSixHQURMLGlJQUVHQyxPQUZILFlBRWdCVixrQkFBa0IsQ0FBQ1ksSUFBRCxDQUZsQyxnQkFFOENYLG9CQUFvQixDQUFDWSxLQUFELENBRmxFO0FBSUQsQ0FORyxFQU1ELEVBTkMsQ0FGSjtBQVVBLElBQU1DLFVBQVUsR0FBRyxJQUFJQyxNQUFKLENBQVcsc0JBQVgsQ0FBbkI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBb0M7QUFBQTs7QUFDbEMseUJBQU9BLEtBQUssQ0FBQ0MsS0FBTixDQUFZSixVQUFaLENBQVAsaURBQU8sYUFBMEIsQ0FBMUIsQ0FBUDtBQUNEOztBQUVNLFNBQVNLLE1BQVQsQ0FBZ0JGLEtBQWhCLEVBQXVDO0FBQzVDLE1BQUksQ0FBQ0EsS0FBRCxJQUFVQSxLQUFLLEtBQUssR0FBeEIsRUFBNkI7QUFDM0IsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsTUFBTUcsUUFBUSxHQUFHSixXQUFXLENBQUNDLEtBQUQsQ0FBNUI7O0FBQ0EsTUFBSTFCLG1CQUFtQixDQUFDNkIsUUFBRCxDQUFuQixJQUFpQ2IsY0FBYyxDQUFDYSxRQUFELENBQW5ELEVBQStEO0FBQzdELHNDQUEyQkgsS0FBM0I7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRDtBQUVNLFNBQVNJLE9BQVQsQ0FBaUJKLEtBQWpCLEVBQXdDO0FBQzdDLE1BQUksQ0FBQ0EsS0FBRCxJQUFVQSxLQUFLLEtBQUssR0FBeEIsRUFBNkI7QUFDM0IsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsTUFBTUcsUUFBUSxHQUFHSixXQUFXLENBQUNDLEtBQUQsQ0FBNUI7QUFDQSxTQUFPMUIsbUJBQW1CLENBQUM2QixRQUFELENBQW5CLElBQWlDYixjQUFjLENBQUNhLFFBQUQsQ0FBL0MsSUFBNkQsS0FBcEU7QUFDRDtBQUVNLFNBQVNFLGFBQVQsQ0FBdUJMLEtBQXZCLEVBQXFFO0FBQzFFLFNBQU87QUFBRU0sT0FBRyxFQUFFSixNQUFNLENBQUNGLEtBQUQsQ0FBYjtBQUFzQk8sUUFBSSxFQUFFSCxPQUFPLENBQUNKLEtBQUQ7QUFBbkMsR0FBUDtBQUNEO0FBRU0sSUFBTVEsT0FBTyxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZXBDLG1CQUFmLEVBQW9DcUMsR0FBcEMsQ0FDckI7QUFBQTtBQUFBLE1BQUVDLEtBQUY7QUFBQSxNQUFTTCxJQUFUOztBQUFBLFNBQW9CO0FBQ2xCSyxTQUFLLEVBQUxBLEtBRGtCO0FBRWxCTCxRQUFJLEVBQUpBO0FBRmtCLEdBQXBCO0FBQUEsQ0FEcUIsQ0FBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci5kYzg1NThlMTYwZDA0NGNkYjMwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVEJsZXNzaW5nS2luZCwgVEJsZXNzaW5nQm9vc3QgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGJsZXNzZXJzIH0gZnJvbSAnLi9nZW5lcmFscyc7XG5cbmNvbnN0IGJsZXNzaW5nS2luZE5hbWVNYXA6IHsgW2JsZXNzaW5nS2luZCBpbiBUQmxlc3NpbmdLaW5kXTogc3RyaW5nIH0gPSB7XG4gIGZpcmU6ICfngavkuYvnpZ3npo8nLFxuICB3YXRlcjogJ+awtOS5i+elneemjycsXG4gIHdpbmQ6ICfpoqjkuYvnpZ3npo8nLFxuICBlYXJ0aDogJ+WcsOS5i+elneemjycsXG4gIGxpZ2h0OiAn5YWJ5LmL56Wd56aPJyxcbiAgZGFyazogJ+mXh+S5i+elneemjycsXG4gIGFzdHJhOiAn5aSp5LmL56Wd56aPJyxcbiAgYW5pbWE6ICfnkIbkuYvnpZ3npo8nLFxufTtcblxuY29uc3QgYmxlc3NlcktpbmROYW1lTWFwOiB7IFtibGVzc2luZ0tpbmQgaW4gVEJsZXNzaW5nS2luZF06IHN0cmluZyB9ID0ge1xuICBmaXJlOiAn54Gr5LmL5YKz5om/JyxcbiAgd2F0ZXI6ICfmsLTkuYvlgrPmib8nLFxuICB3aW5kOiAn6aKo5LmL5YKz5om/JyxcbiAgZWFydGg6ICflnLDkuYvlgrPmib8nLFxuICBsaWdodDogJ+WFieS5i+WCs+aJvycsXG4gIGRhcms6ICfpl4fkuYvlgrPmib8nLFxuICBhc3RyYTogJ+WkqeS5i+WCs+aJvycsXG4gIGFuaW1hOiAn55CG5LmL5YKz5om/Jyxcbn07XG5cbmNvbnN0IGJsZXNzaW5nQm9vc3ROYW1lTWFwOiB7XG4gIFtibGVzc2luZ0Jvb3N0IGluIFRCbGVzc2luZ0Jvb3N0XTogc3RyaW5nO1xufSA9IHtcbiAgaHA6ICfmrbvprKUnLFxuICBhdGs6ICfmlLvmk4onLFxuICBzcGQ6ICfpgJ/luqYnLFxuICBkZWY6ICfpmLLlrognLFxuICByZXM6ICfprZTpmLInLFxufTtcblxuY29uc3QgYmxlc3Nlck5hbWVNYXA6IHtcbiAgW2JsZXNzZXI6IHN0cmluZ106IHN0cmluZztcbn0gPSBibGVzc2Vycy5yZWR1Y2UoKGFjYywgYmxlc3NlcikgPT4ge1xuICBjb25zdCBba2luZCwgYm9vc3RdID0gYmxlc3Nlci5zcGxpdCgnLScpO1xuICByZXR1cm4ge1xuICAgIC4uLmFjYyxcbiAgICBbYmxlc3Nlcl06IGAke2JsZXNzZXJLaW5kTmFtZU1hcFtraW5kXX0gLSAke2JsZXNzaW5nQm9vc3ROYW1lTWFwW2Jvb3N0XX1gLFxuICB9O1xufSwge30pO1xuXG5jb25zdCBibGVzc1JlZ2V4ID0gbmV3IFJlZ0V4cCgvKFxcdyspKD86LVxcdysoLVxcZCk/KT8vKTtcblxuZnVuY3Rpb24gZ2V0Qmxlc3NLZXkoYmxlc3M6IHN0cmluZykge1xuICByZXR1cm4gYmxlc3MubWF0Y2goYmxlc3NSZWdleCk/LlsxXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNyYyhibGVzczogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFibGVzcyB8fCBibGVzcyA9PT0gJy0nKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGNvbnN0IGJsZXNzS2V5ID0gZ2V0Qmxlc3NLZXkoYmxlc3MpO1xuICBpZiAoYmxlc3NpbmdLaW5kTmFtZU1hcFtibGVzc0tleV0gfHwgYmxlc3Nlck5hbWVNYXBbYmxlc3NLZXldKSB7XG4gICAgcmV0dXJuIGAvYXNzZXRzL2JsZXNzaW5nLSR7Ymxlc3N9LnBuZ2A7XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZShibGVzczogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKCFibGVzcyB8fCBibGVzcyA9PT0gJy0nKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGNvbnN0IGJsZXNzS2V5ID0gZ2V0Qmxlc3NLZXkoYmxlc3MpO1xuICByZXR1cm4gYmxlc3NpbmdLaW5kTmFtZU1hcFtibGVzc0tleV0gfHwgYmxlc3Nlck5hbWVNYXBbYmxlc3NLZXldIHx8ICfnhKHnpZ3npo8nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3JjQW5kTmFtZShibGVzczogc3RyaW5nKTogeyBzcmM6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0ge1xuICByZXR1cm4geyBzcmM6IGdldFNyYyhibGVzcyksIG5hbWU6IGdldE5hbWUoYmxlc3MpIH07XG59XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zID0gT2JqZWN0LmVudHJpZXMoYmxlc3NpbmdLaW5kTmFtZU1hcCkubWFwKFxuICAoW3ZhbHVlLCBuYW1lXSkgPT4gKHtcbiAgICB2YWx1ZSxcbiAgICBuYW1lLFxuICB9KVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=