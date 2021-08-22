self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/utils/rules2.tsx":
/*!******************************!*\
  !*** ./app/utils/rules2.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRule2": function() { return /* binding */ getRule2; },
/* harmony export */   "matchRule2": function() { return /* binding */ matchRule2; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function getRule2(_ref) {
  var rules2DB = _ref.rules2DB,
      ruleId = _ref.ruleId;

  if (!rules2DB || !ruleId) {
    return null;
  }

  return rules2DB[ruleId];
}

function offRule(base, compare) {
  if (!base || !compare) {
    return false;
  }

  return (base & compare) === 0;
}

function matchRule2(_ref2) {
  var rules2DB = _ref2.rules2DB,
      ruleId = _ref2.ruleId,
      moveType = _ref2.moveType,
      colorType = _ref2.colorType,
      weaponType = _ref2.weaponType;

  if (ruleId === 'allDisabled') {
    return false;
  }

  var moveTypeRule2 = getRule2({
    rules2DB: rules2DB,
    ruleId: moveType
  });
  var colorTypeRule2 = getRule2({
    rules2DB: rules2DB,
    ruleId: colorType
  });
  var weaponTypeRule2 = getRule2({
    rules2DB: rules2DB,
    ruleId: weaponType
  });
  var rule2 = getRule2({
    rules2DB: rules2DB,
    ruleId: ruleId
  });

  if (!rule2) {
    return true;
  }

  if (offRule(rule2.moveType, moveTypeRule2 === null || moveTypeRule2 === void 0 ? void 0 : moveTypeRule2.moveType)) {
    return false;
  }

  if (offRule(rule2.colorType, colorTypeRule2 === null || colorTypeRule2 === void 0 ? void 0 : colorTypeRule2.colorType)) {
    return false;
  }

  if (offRule(rule2.weaponType, weaponTypeRule2 === null || weaponTypeRule2 === void 0 ? void 0 : weaponTypeRule2.weaponType)) {
    return false;
  }

  return true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3V0aWxzL3J1bGVzMi50c3giXSwibmFtZXMiOlsiZ2V0UnVsZTIiLCJydWxlczJEQiIsInJ1bGVJZCIsIm9mZlJ1bGUiLCJiYXNlIiwiY29tcGFyZSIsIm1hdGNoUnVsZTIiLCJtb3ZlVHlwZSIsImNvbG9yVHlwZSIsIndlYXBvblR5cGUiLCJtb3ZlVHlwZVJ1bGUyIiwiY29sb3JUeXBlUnVsZTIiLCJ3ZWFwb25UeXBlUnVsZTIiLCJydWxlMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sU0FBU0EsUUFBVCxPQU1KO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQUEsTUFKREMsTUFJQyxRQUpEQSxNQUlDOztBQUNELE1BQUksQ0FBQ0QsUUFBRCxJQUFhLENBQUNDLE1BQWxCLEVBQTBCO0FBQ3hCLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQU9ELFFBQVEsQ0FBQ0MsTUFBRCxDQUFmO0FBQ0Q7O0FBRUQsU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUJDLE9BQXZCLEVBQWdDO0FBQzlCLE1BQUksQ0FBQ0QsSUFBRCxJQUFTLENBQUNDLE9BQWQsRUFBdUI7QUFDckIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxDQUFDRCxJQUFJLEdBQUdDLE9BQVIsTUFBcUIsQ0FBNUI7QUFDRDs7QUFFTSxTQUFTQyxVQUFULFFBWUo7QUFBQSxNQVhETCxRQVdDLFNBWERBLFFBV0M7QUFBQSxNQVZEQyxNQVVDLFNBVkRBLE1BVUM7QUFBQSxNQVRESyxRQVNDLFNBVERBLFFBU0M7QUFBQSxNQVJEQyxTQVFDLFNBUkRBLFNBUUM7QUFBQSxNQVBEQyxVQU9DLFNBUERBLFVBT0M7O0FBQ0QsTUFBSVAsTUFBTSxLQUFLLGFBQWYsRUFBOEI7QUFDNUIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsTUFBTVEsYUFBYSxHQUFHVixRQUFRLENBQUM7QUFBRUMsWUFBUSxFQUFSQSxRQUFGO0FBQVlDLFVBQU0sRUFBRUs7QUFBcEIsR0FBRCxDQUE5QjtBQUNBLE1BQU1JLGNBQWMsR0FBR1gsUUFBUSxDQUFDO0FBQUVDLFlBQVEsRUFBUkEsUUFBRjtBQUFZQyxVQUFNLEVBQUVNO0FBQXBCLEdBQUQsQ0FBL0I7QUFDQSxNQUFNSSxlQUFlLEdBQUdaLFFBQVEsQ0FBQztBQUFFQyxZQUFRLEVBQVJBLFFBQUY7QUFBWUMsVUFBTSxFQUFFTztBQUFwQixHQUFELENBQWhDO0FBQ0EsTUFBTUksS0FBSyxHQUFHYixRQUFRLENBQUM7QUFBRUMsWUFBUSxFQUFSQSxRQUFGO0FBQVlDLFVBQU0sRUFBTkE7QUFBWixHQUFELENBQXRCOztBQUNBLE1BQUksQ0FBQ1csS0FBTCxFQUFZO0FBQ1YsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBSVYsT0FBTyxDQUFDVSxLQUFLLENBQUNOLFFBQVAsRUFBaUJHLGFBQWpCLGFBQWlCQSxhQUFqQix1QkFBaUJBLGFBQWEsQ0FBRUgsUUFBaEMsQ0FBWCxFQUFzRDtBQUNwRCxXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFJSixPQUFPLENBQUNVLEtBQUssQ0FBQ0wsU0FBUCxFQUFrQkcsY0FBbEIsYUFBa0JBLGNBQWxCLHVCQUFrQkEsY0FBYyxDQUFFSCxTQUFsQyxDQUFYLEVBQXlEO0FBQ3ZELFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUlMLE9BQU8sQ0FBQ1UsS0FBSyxDQUFDSixVQUFQLEVBQW1CRyxlQUFuQixhQUFtQkEsZUFBbkIsdUJBQW1CQSxlQUFlLENBQUVILFVBQXBDLENBQVgsRUFBNEQ7QUFDMUQsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci45ZGNkMWQwZjExM2IyZDUyYzBhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVENvbG9yVHlwZSwgVE1vdmVUeXBlLCBUUnVsZXMyREIsIFRXZWFwb25UeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSdWxlMih7XG4gIHJ1bGVzMkRCLFxuICBydWxlSWQsXG59OiB7XG4gIHJ1bGVzMkRCOiBUUnVsZXMyREI7XG4gIHJ1bGVJZD86IHN0cmluZztcbn0pIHtcbiAgaWYgKCFydWxlczJEQiB8fCAhcnVsZUlkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHJ1bGVzMkRCW3J1bGVJZF07XG59XG5cbmZ1bmN0aW9uIG9mZlJ1bGUoYmFzZSwgY29tcGFyZSkge1xuICBpZiAoIWJhc2UgfHwgIWNvbXBhcmUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChiYXNlICYgY29tcGFyZSkgPT09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFJ1bGUyKHtcbiAgcnVsZXMyREIsXG4gIHJ1bGVJZCxcbiAgbW92ZVR5cGUsXG4gIGNvbG9yVHlwZSxcbiAgd2VhcG9uVHlwZSxcbn06IHtcbiAgcnVsZXMyREI6IFRSdWxlczJEQjtcbiAgcnVsZUlkPzogc3RyaW5nO1xuICBtb3ZlVHlwZTogVE1vdmVUeXBlO1xuICBjb2xvclR5cGU6IFRDb2xvclR5cGU7XG4gIHdlYXBvblR5cGU6IFRXZWFwb25UeXBlO1xufSkge1xuICBpZiAocnVsZUlkID09PSAnYWxsRGlzYWJsZWQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IG1vdmVUeXBlUnVsZTIgPSBnZXRSdWxlMih7IHJ1bGVzMkRCLCBydWxlSWQ6IG1vdmVUeXBlIH0pO1xuICBjb25zdCBjb2xvclR5cGVSdWxlMiA9IGdldFJ1bGUyKHsgcnVsZXMyREIsIHJ1bGVJZDogY29sb3JUeXBlIH0pO1xuICBjb25zdCB3ZWFwb25UeXBlUnVsZTIgPSBnZXRSdWxlMih7IHJ1bGVzMkRCLCBydWxlSWQ6IHdlYXBvblR5cGUgfSk7XG4gIGNvbnN0IHJ1bGUyID0gZ2V0UnVsZTIoeyBydWxlczJEQiwgcnVsZUlkIH0pO1xuICBpZiAoIXJ1bGUyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKG9mZlJ1bGUocnVsZTIubW92ZVR5cGUsIG1vdmVUeXBlUnVsZTI/Lm1vdmVUeXBlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAob2ZmUnVsZShydWxlMi5jb2xvclR5cGUsIGNvbG9yVHlwZVJ1bGUyPy5jb2xvclR5cGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChvZmZSdWxlKHJ1bGUyLndlYXBvblR5cGUsIHdlYXBvblR5cGVSdWxlMj8ud2VhcG9uVHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9