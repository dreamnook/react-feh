webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/Editor/RarityPickerView/index.tsx":
/*!**********************************************************!*\
  !*** ./app/components/Editor/RarityPickerView/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_components_RarityPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/RarityPicker */ "./app/components/RarityPicker/index.tsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./app/components/Editor/shared.tsx");
/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BackButton */ "./app/components/Editor/BackButton/index.tsx");


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\Editor\\RarityPickerView\\index.tsx",
    _s = $RefreshSig$();






function RarityPickerView(_ref) {
  _s();

  var hidden = _ref.hidden,
      rarity = _ref.rarity,
      selectRarity = _ref.selectRarity,
      onClickBack = _ref.onClickBack;
  var onSelectRarity = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (newRarity) {
    selectRarity(newRarity);
    onClickBack();
  }, [selectRarity, onClickBack]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    hidden: hidden,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shared__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onClick: onClickBack
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), "\u7A00\u6709\u5EA6"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_app_components_RarityPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      rarity: rarity,
      minRarity: 4,
      onSelect: onSelectRarity
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(RarityPickerView, "HkpMwwjLVAZ47RyJvpr9w8ajr0o=");

_c = RarityPickerView;
/* harmony default export */ __webpack_exports__["default"] = (RarityPickerView);

var _c;

$RefreshReg$(_c, "RarityPickerView");

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

/***/ }),

/***/ "./app/components/Editor/index.tsx":
/*!*****************************************!*\
  !*** ./app/components/Editor/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overview */ "./app/components/Editor/Overview/index.tsx");
/* harmony import */ var _HeroPickerView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroPickerView */ "./app/components/Editor/HeroPickerView/index.tsx");
/* harmony import */ var _IVPickerView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IVPickerView */ "./app/components/Editor/IVPickerView/index.tsx");
/* harmony import */ var _BlessingPickerView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BlessingPickerView */ "./app/components/Editor/BlessingPickerView/index.tsx");
/* harmony import */ var _MergePickerView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MergePickerView */ "./app/components/Editor/MergePickerView/index.tsx");
/* harmony import */ var _DragonflowerPickerView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DragonflowerPickerView */ "./app/components/Editor/DragonflowerPickerView/index.tsx");
/* harmony import */ var _WeaponPickerView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WeaponPickerView */ "./app/components/Editor/WeaponPickerView/index.tsx");
/* harmony import */ var _RefinePickerView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RefinePickerView */ "./app/components/Editor/RefinePickerView/index.tsx");
/* harmony import */ var _SkillPickerView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SkillPickerView */ "./app/components/Editor/SkillPickerView/index.tsx");
/* harmony import */ var _AssistPickerView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AssistPickerView */ "./app/components/Editor/AssistPickerView/index.tsx");
/* harmony import */ var _SpecialPickerView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SpecialPickerView */ "./app/components/Editor/SpecialPickerView/index.tsx");
/* harmony import */ var _SealPickerView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SealPickerView */ "./app/components/Editor/SealPickerView/index.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hooks */ "./app/components/Editor/hooks.tsx");
/* harmony import */ var _RarityPickerView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RarityPickerView */ "./app/components/Editor/RarityPickerView/index.tsx");




var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\Editor\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















function Editor(props) {
  _s();

  var _useHooks = Object(_hooks__WEBPACK_IMPORTED_MODULE_14__["default"])(),
      view = _useHooks.view,
      openHeroPicker = _useHooks.openHeroPicker,
      openRarityPicker = _useHooks.openRarityPicker,
      openIVPicker = _useHooks.openIVPicker,
      openMergePicker = _useHooks.openMergePicker,
      openDragonflowerPicker = _useHooks.openDragonflowerPicker,
      openBlessingPicker = _useHooks.openBlessingPicker,
      openWeaponPicker = _useHooks.openWeaponPicker,
      openRefinePicker = _useHooks.openRefinePicker,
      openAssistPicker = _useHooks.openAssistPicker,
      openSpecialPicker = _useHooks.openSpecialPicker,
      openSkillAPicker = _useHooks.openSkillAPicker,
      openSkillBPicker = _useHooks.openSkillBPicker,
      openSkillCPicker = _useHooks.openSkillCPicker,
      openSealPicker = _useHooks.openSealPicker,
      onClickBack = _useHooks.onClickBack;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Overview__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({
      hidden: !!view
    }, props), {}, {
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
      openSealPicker: openSealPicker
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_HeroPickerView__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hidden: view !== 'hero',
      heroId: props.heroId,
      onChangeHero: props.onChangeHero,
      onClickBack: onClickBack,
      resplendent: props.resplendent
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_RarityPickerView__WEBPACK_IMPORTED_MODULE_15__["default"], {
      hidden: view !== 'rarity',
      rarity: props.rarity,
      selectRarity: props.setRarity,
      onClickBack: onClickBack
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_IVPickerView__WEBPACK_IMPORTED_MODULE_4__["default"], {
      hidden: view !== 'iv',
      iv: props.iv,
      selectIV: props.setIV,
      onClickBack: onClickBack
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_BlessingPickerView__WEBPACK_IMPORTED_MODULE_5__["default"], {
      hidden: view !== 'blessing',
      blessing: props.blessing,
      selectBlessing: props.setBlessing,
      onClickBack: onClickBack
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_MergePickerView__WEBPACK_IMPORTED_MODULE_6__["default"], {
      hidden: view !== 'merge',
      merge: props.merge,
      selectMerge: props.setMerge,
      onClickBack: onClickBack
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_DragonflowerPickerView__WEBPACK_IMPORTED_MODULE_7__["default"], {
      hidden: view !== 'dragonflower',
      dragonflower: props.dragonflower,
      selectDragonflower: props.setDragonflower,
      onClickBack: onClickBack
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_WeaponPickerView__WEBPACK_IMPORTED_MODULE_8__["default"], {
      hidden: view !== 'weapon',
      onClickBack: onClickBack,
      heroId: props.heroId,
      weapon: props.weapon,
      selectWeapon: props.setWeapon,
      maxSkill: props.maxSkill,
      toggleMaxSkill: props.toggleMaxSkill,
      setDefaultSkill: props.setDefaultWeapon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_RefinePickerView__WEBPACK_IMPORTED_MODULE_9__["default"], {
      hidden: view !== 'refine',
      onClickBack: onClickBack,
      heroId: props.heroId,
      weapon: props.weapon,
      refine: props.refine,
      selectRefine: props.setRefine
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_AssistPickerView__WEBPACK_IMPORTED_MODULE_11__["default"], {
      hidden: view !== 'assist',
      onClickBack: onClickBack,
      heroId: props.heroId,
      assist: props.assist,
      selectAssist: props.setAssist,
      maxSkill: props.maxSkill,
      toggleMaxSkill: props.toggleMaxSkill,
      setDefaultSkill: props.setDefaultAssist
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SpecialPickerView__WEBPACK_IMPORTED_MODULE_12__["default"], {
      title: "A\u6280\u80FD",
      hidden: view !== 'special',
      onClickBack: onClickBack,
      heroId: props.heroId,
      special: props.special,
      selectSpecial: props.setSpecial,
      maxSkill: props.maxSkill,
      toggleMaxSkill: props.toggleMaxSkill,
      setDefaultSkill: props.setDefaultSpecial
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SkillPickerView__WEBPACK_IMPORTED_MODULE_10__["default"], {
      skillType: "skillA",
      title: "A\u6280\u80FD",
      hidden: view !== 'skillA',
      onClickBack: onClickBack,
      heroId: props.heroId,
      skillId: props.skillA,
      selectSkill: props.setSkillA,
      maxSkill: props.maxSkill,
      toggleMaxSkill: props.toggleMaxSkill,
      setDefaultSkill: props.setDefaultSkillA
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SkillPickerView__WEBPACK_IMPORTED_MODULE_10__["default"], {
      skillType: "skillB",
      title: "B\u6280\u80FD",
      hidden: view !== 'skillB',
      onClickBack: onClickBack,
      heroId: props.heroId,
      skillId: props.skillB,
      selectSkill: props.setSkillB,
      maxSkill: props.maxSkill,
      toggleMaxSkill: props.toggleMaxSkill,
      setDefaultSkill: props.setDefaultSkillB
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SkillPickerView__WEBPACK_IMPORTED_MODULE_10__["default"], {
      skillType: "skillC",
      title: "C\u6280\u80FD",
      hidden: view !== 'skillC',
      onClickBack: onClickBack,
      heroId: props.heroId,
      skillId: props.skillC,
      selectSkill: props.setSkillC,
      maxSkill: props.maxSkill,
      toggleMaxSkill: props.toggleMaxSkill,
      setDefaultSkill: props.setDefaultSkillC
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SealPickerView__WEBPACK_IMPORTED_MODULE_13__["default"], {
      hidden: view !== 'seal',
      onClickBack: onClickBack,
      heroId: props.heroId,
      seal: props.skillC,
      selectSeal: props.setSeal,
      maxSkill: props.maxSkill,
      toggleMaxSkill: props.toggleMaxSkill
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Editor, "v67biia7QqedBcJ75DCipMP2ns0=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_14__["default"]];
});

_c = Editor;
/* harmony default export */ __webpack_exports__["default"] = (Editor);

var _c;

$RefreshReg$(_c, "Editor");

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

/***/ "./app/components/RarityPicker/index.tsx":
/*!***********************************************!*\
  !*** ./app/components/RarityPicker/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _raritypicker_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raritypicker.module.css */ "./app/components/RarityPicker/raritypicker.module.css");
/* harmony import */ var _raritypicker_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_raritypicker_module_css__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "F:\\repos\\react-feh-site\\app\\components\\RarityPicker\\index.tsx",
    _s = $RefreshSig$();



var defaultOptions = [{
  name: '5☆',
  value: 5
}, {
  name: '4★',
  value: 4
}];

function RarityPicker(_ref) {
  _s();

  var _this = this;

  var _ref$rarity = _ref.rarity,
      rarity = _ref$rarity === void 0 ? 5 : _ref$rarity,
      _ref$minRarity = _ref.minRarity,
      minRarity = _ref$minRarity === void 0 ? 5 : _ref$minRarity,
      onSelect = _ref.onSelect;
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    if (onSelect) {
      onSelect(Number(event.currentTarget.value));
    }
  }, [onSelect]);
  var options = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (minRarity < 5) {
      return defaultOptions;
    }

    return defaultOptions.slice(0, 1);
  }, [minRarity]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _raritypicker_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.raritypicker,
    children: options.map(function (option) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: onClick,
        "data-active": option.value === rarity,
        children: option.name
      }, option.value, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(RarityPicker, "w2jg9Vsppdv/7FH5mXZeAn++JjM=");

_c = RarityPicker;
/* harmony default export */ __webpack_exports__["default"] = (RarityPicker);

var _c;

$RefreshReg$(_c, "RarityPicker");

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

/***/ "./app/components/RarityPicker/raritypicker.module.css":
/*!*************************************************************!*\
  !*** ./app/components/RarityPicker/raritypicker.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./raritypicker.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./app/components/RarityPicker/raritypicker.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./raritypicker.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./app/components/RarityPicker/raritypicker.module.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./raritypicker.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./app/components/RarityPicker/raritypicker.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./app/components/RarityPicker/raritypicker.module.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-2-2!./app/components/RarityPicker/raritypicker.module.css ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".raritypicker_raritypicker__JEpxm {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-row-gap: 0.5em;\n  row-gap: 0.5em;\n  grid-column-gap: 0.5em;\n  -webkit-column-gap: 0.5em;\n     -moz-column-gap: 0.5em;\n          column-gap: 0.5em;\n  padding: 0.25em 0.5em;\n}\n\n.raritypicker_raritypicker__JEpxm button {\n  text-align: center;\n  padding: 0.5em;\n  border-radius: 0.25em;\n}\n", "",{"version":3,"sources":["webpack://app/components/RarityPicker/raritypicker.module.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAc;EAAd,cAAc;EACd,sBAAiB;EAAjB,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,qBAAqB;AACvB","sourcesContent":[".raritypicker {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  row-gap: 0.5em;\n  column-gap: 0.5em;\n  padding: 0.25em 0.5em;\n}\n\n.raritypicker button {\n  text-align: center;\n  padding: 0.5em;\n  border-radius: 0.25em;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"raritypicker": "raritypicker_raritypicker__JEpxm"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRWRpdG9yL1Jhcml0eVBpY2tlclZpZXcvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9FZGl0b3IvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9SYXJpdHlQaWNrZXIvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9SYXJpdHlQaWNrZXIvcmFyaXR5cGlja2VyLm1vZHVsZS5jc3M/ZTAwMCIsIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvUmFyaXR5UGlja2VyL3Jhcml0eXBpY2tlci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIlJhcml0eVBpY2tlclZpZXciLCJoaWRkZW4iLCJyYXJpdHkiLCJzZWxlY3RSYXJpdHkiLCJvbkNsaWNrQmFjayIsIm9uU2VsZWN0UmFyaXR5IiwidXNlQ2FsbGJhY2siLCJuZXdSYXJpdHkiLCJFZGl0b3IiLCJwcm9wcyIsInVzZUhvb2tzIiwidmlldyIsIm9wZW5IZXJvUGlja2VyIiwib3BlblJhcml0eVBpY2tlciIsIm9wZW5JVlBpY2tlciIsIm9wZW5NZXJnZVBpY2tlciIsIm9wZW5EcmFnb25mbG93ZXJQaWNrZXIiLCJvcGVuQmxlc3NpbmdQaWNrZXIiLCJvcGVuV2VhcG9uUGlja2VyIiwib3BlblJlZmluZVBpY2tlciIsIm9wZW5Bc3Npc3RQaWNrZXIiLCJvcGVuU3BlY2lhbFBpY2tlciIsIm9wZW5Ta2lsbEFQaWNrZXIiLCJvcGVuU2tpbGxCUGlja2VyIiwib3BlblNraWxsQ1BpY2tlciIsIm9wZW5TZWFsUGlja2VyIiwiaGVyb0lkIiwib25DaGFuZ2VIZXJvIiwicmVzcGxlbmRlbnQiLCJzZXRSYXJpdHkiLCJpdiIsInNldElWIiwiYmxlc3NpbmciLCJzZXRCbGVzc2luZyIsIm1lcmdlIiwic2V0TWVyZ2UiLCJkcmFnb25mbG93ZXIiLCJzZXREcmFnb25mbG93ZXIiLCJ3ZWFwb24iLCJzZXRXZWFwb24iLCJtYXhTa2lsbCIsInRvZ2dsZU1heFNraWxsIiwic2V0RGVmYXVsdFdlYXBvbiIsInJlZmluZSIsInNldFJlZmluZSIsImFzc2lzdCIsInNldEFzc2lzdCIsInNldERlZmF1bHRBc3Npc3QiLCJzcGVjaWFsIiwic2V0U3BlY2lhbCIsInNldERlZmF1bHRTcGVjaWFsIiwic2tpbGxBIiwic2V0U2tpbGxBIiwic2V0RGVmYXVsdFNraWxsQSIsInNraWxsQiIsInNldFNraWxsQiIsInNldERlZmF1bHRTa2lsbEIiLCJza2lsbEMiLCJzZXRTa2lsbEMiLCJzZXREZWZhdWx0U2tpbGxDIiwic2V0U2VhbCIsImRlZmF1bHRPcHRpb25zIiwibmFtZSIsInZhbHVlIiwiUmFyaXR5UGlja2VyIiwibWluUmFyaXR5Iiwib25TZWxlY3QiLCJvbkNsaWNrIiwiZXZlbnQiLCJOdW1iZXIiLCJjdXJyZW50VGFyZ2V0Iiwib3B0aW9ucyIsInVzZU1lbW8iLCJzbGljZSIsInN0eWxlcyIsInJhcml0eXBpY2tlciIsIm1hcCIsIm9wdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxnQkFBVCxPQVVHO0FBQUE7O0FBQUEsTUFUREMsTUFTQyxRQVREQSxNQVNDO0FBQUEsTUFSREMsTUFRQyxRQVJEQSxNQVFDO0FBQUEsTUFQREMsWUFPQyxRQVBEQSxZQU9DO0FBQUEsTUFOREMsV0FNQyxRQU5EQSxXQU1DO0FBQ0QsTUFBTUMsY0FBYyxHQUFHQyx5REFBVyxDQUNoQyxVQUFDQyxTQUFELEVBQXVCO0FBQ3JCSixnQkFBWSxDQUFDSSxTQUFELENBQVo7QUFDQUgsZUFBVztBQUNaLEdBSitCLEVBS2hDLENBQUNELFlBQUQsRUFBZUMsV0FBZixDQUxnQyxDQUFsQztBQU9BLHNCQUNFLHFFQUFDLGlEQUFEO0FBQVcsVUFBTSxFQUFFSCxNQUFuQjtBQUFBLDRCQUNFLHFFQUFDLDZDQUFEO0FBQUEsOEJB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QUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyx5VUFBNks7O0FBRS9NOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHlVQUE2SztBQUNuTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHlVQUE2Szs7QUFFdk07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyR0FBc0Q7QUFDaEc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLHNDQUFzQyxrQkFBa0IsMENBQTBDLHdCQUF3QixtQkFBbUIsMkJBQTJCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLDBCQUEwQixHQUFHLDhDQUE4Qyx1QkFBdUIsbUJBQW1CLDBCQUEwQixHQUFHLFNBQVMsb0hBQW9ILFVBQVUsWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSx5Q0FBeUMsa0JBQWtCLDBDQUEwQyxtQkFBbUIsc0JBQXNCLDBCQUEwQixHQUFHLDBCQUEwQix1QkFBdUIsbUJBQW1CLDBCQUEwQixHQUFHLHFCQUFxQjtBQUNwL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjVhYzU2ZDZkYjM2YzljZTlhMjdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmFyaXR5UGlja2VyIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvUmFyaXR5UGlja2VyJztcbmltcG9ydCB7IENvbnRhaW5lciwgVGl0bGUgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IEJhY2tCdXR0b24gZnJvbSAnLi4vQmFja0J1dHRvbic7XG5cbmZ1bmN0aW9uIFJhcml0eVBpY2tlclZpZXcoe1xuICBoaWRkZW4sXG4gIHJhcml0eSxcbiAgc2VsZWN0UmFyaXR5LFxuICBvbkNsaWNrQmFjayxcbn06IHtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgcmFyaXR5OiA1IHwgNDtcbiAgc2VsZWN0UmFyaXR5OiAobmV3UmFyaXR5OiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uQ2xpY2tCYWNrOiAoKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCBvblNlbGVjdFJhcml0eSA9IHVzZUNhbGxiYWNrKFxuICAgIChuZXdSYXJpdHk6IG51bWJlcikgPT4ge1xuICAgICAgc2VsZWN0UmFyaXR5KG5ld1Jhcml0eSk7XG4gICAgICBvbkNsaWNrQmFjaygpO1xuICAgIH0sXG4gICAgW3NlbGVjdFJhcml0eSwgb25DbGlja0JhY2tdLFxuICApO1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgaGlkZGVuPXtoaWRkZW59PlxuICAgICAgPFRpdGxlPlxuICAgICAgICA8QmFja0J1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQmFja30gLz5cbiAgICAgICAg56iA5pyJ5bqmXG4gICAgICA8L1RpdGxlPlxuICAgICAgPFJhcml0eVBpY2tlciByYXJpdHk9e3Jhcml0eX0gbWluUmFyaXR5PXs0fSBvblNlbGVjdD17b25TZWxlY3RSYXJpdHl9IC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhcml0eVBpY2tlclZpZXc7XG4iLCJpbXBvcnQgT3ZlcnZpZXcgZnJvbSAnLi9PdmVydmlldyc7XG5pbXBvcnQgSGVyb1BpY2tlclZpZXcgZnJvbSAnLi9IZXJvUGlja2VyVmlldyc7XG5pbXBvcnQgSVZQaWNrZXJWaWV3IGZyb20gJy4vSVZQaWNrZXJWaWV3JztcbmltcG9ydCBCbGVzc2luZ1BpY2tlclZpZXcgZnJvbSAnLi9CbGVzc2luZ1BpY2tlclZpZXcnO1xuaW1wb3J0IE1lcmdlUGlja2VyVmlldyBmcm9tICcuL01lcmdlUGlja2VyVmlldyc7XG5pbXBvcnQgRHJhZ29uZmxvd2VyUGlja2VyVmlldyBmcm9tICcuL0RyYWdvbmZsb3dlclBpY2tlclZpZXcnO1xuaW1wb3J0IFdlYXBvblBpY2tlclZpZXcgZnJvbSAnLi9XZWFwb25QaWNrZXJWaWV3JztcbmltcG9ydCBSZWZpbmVQaWNrZXJWaWV3IGZyb20gJy4vUmVmaW5lUGlja2VyVmlldyc7XG5pbXBvcnQgU2tpbGxQaWNrZXJWaWV3IGZyb20gJy4vU2tpbGxQaWNrZXJWaWV3JztcbmltcG9ydCBBc3Npc3RQaWNrZXJWaWV3IGZyb20gJy4vQXNzaXN0UGlja2VyVmlldyc7XG5pbXBvcnQgU3BlY2lhbFBpY2tlclZpZXcgZnJvbSAnLi9TcGVjaWFsUGlja2VyVmlldyc7XG5pbXBvcnQgU2VhbFBpY2tlclZpZXcgZnJvbSAnLi9TZWFsUGlja2VyVmlldyc7XG5pbXBvcnQgdXNlSG9va3MgZnJvbSAnLi9ob29rcyc7XG5pbXBvcnQgUmFyaXR5UGlja2VyVmlldyBmcm9tICcuL1Jhcml0eVBpY2tlclZpZXcnO1xuXG50eXBlIFRFZGl0b3JQcm9wcyA9IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlSGVybzogKG5ld0hlcm9JZDogc3RyaW5nKSA9PiB2b2lkO1xuICByYXJpdHk6IDUgfCA0O1xuICBzZXRSYXJpdHk6IChuZXdSYXJpdHk6IDUgfCA0KSA9PiB2b2lkO1xuICBpdjogc3RyaW5nO1xuICBzZXRJVjogKG5ld0lWOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG1lcmdlOiBudW1iZXI7XG4gIHNldE1lcmdlOiAobmV3TWVyZ2U6IG51bWJlcikgPT4gdm9pZDtcbiAgZHJhZ29uZmxvd2VyOiBudW1iZXI7XG4gIHNldERyYWdvbmZsb3dlcjogKG5ld0RyYWdvbmZsb3dlcjogbnVtYmVyKSA9PiB2b2lkO1xuICBibGVzc2luZzogc3RyaW5nO1xuICBzZXRCbGVzc2luZzogKG5ld0JsZXNzaW5nOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHN1cHBvcnQ6IGJvb2xlYW47XG4gIHRvZ2dsZVN1cHBvcnQ6ICgpID0+IHZvaWQ7XG4gIGFyZW5hOiBib29sZWFuO1xuICB0b2dnbGVBcmVuYTogKCkgPT4gdm9pZDtcbiAgcmVzcGxlbmRlbnQ6IGJvb2xlYW47XG4gIHRvZ2dsZVJlc3BsZW5kZW50OiAoKSA9PiB2b2lkO1xuICAvKiogc2tpbGxzICovXG4gIHdlYXBvbjogc3RyaW5nO1xuICBzZXRXZWFwb246IChuZXdXZWFwb246IHN0cmluZykgPT4gdm9pZDtcbiAgcmVmaW5lOiBzdHJpbmc7XG4gIHNldFJlZmluZTogKG5ld1JlZmluZTogc3RyaW5nKSA9PiB2b2lkO1xuICBhc3Npc3Q6IHN0cmluZztcbiAgc2V0QXNzaXN0OiAobmV3QXNzaXN0OiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNwZWNpYWw6IHN0cmluZztcbiAgc2V0U3BlY2lhbDogKG5ld1NwZWNpYWw6IHN0cmluZykgPT4gdm9pZDtcbiAgc2tpbGxBOiBzdHJpbmc7XG4gIHNldFNraWxsQTogKG5ld1NraWxsQTogc3RyaW5nKSA9PiB2b2lkO1xuICBza2lsbEI6IHN0cmluZztcbiAgc2V0U2tpbGxCOiAobmV3U2tpbGxCOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNraWxsQzogc3RyaW5nO1xuICBzZXRTa2lsbEM6IChuZXdTa2lsbEM6IHN0cmluZykgPT4gdm9pZDtcbiAgc2VhbDogc3RyaW5nO1xuICBzZXRTZWFsOiAobmV3U2VhbDogc3RyaW5nKSA9PiB2b2lkO1xuICBzZXREZWZhdWx0V2VhcG9uOiAoKSA9PiB2b2lkO1xuICBzZXREZWZhdWx0QXNzaXN0OiAoKSA9PiB2b2lkO1xuICBzZXREZWZhdWx0U3BlY2lhbDogKCkgPT4gdm9pZDtcbiAgc2V0RGVmYXVsdFNraWxsQTogKCkgPT4gdm9pZDtcbiAgc2V0RGVmYXVsdFNraWxsQjogKCkgPT4gdm9pZDtcbiAgc2V0RGVmYXVsdFNraWxsQzogKCkgPT4gdm9pZDtcbiAgc2V0QWxsU2tpbGxEZWZhdWx0OiAoKSA9PiB2b2lkO1xuICAvKiogZWRpdG9yICovXG4gIGx2MTogYm9vbGVhbjtcbiAgdG9nZ2xlTHYxOiAoKSA9PiB2b2lkO1xuICBtYXhTa2lsbDogYm9vbGVhbjtcbiAgdG9nZ2xlTWF4U2tpbGw6ICgpID0+IHZvaWQ7XG4gIGNsb3NlRWRpdG9yOiAoKSA9PiB2b2lkO1xufTtcblxuZnVuY3Rpb24gRWRpdG9yKHByb3BzOiBURWRpdG9yUHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHZpZXcsXG4gICAgb3Blbkhlcm9QaWNrZXIsXG4gICAgb3BlblJhcml0eVBpY2tlcixcbiAgICBvcGVuSVZQaWNrZXIsXG4gICAgb3Blbk1lcmdlUGlja2VyLFxuICAgIG9wZW5EcmFnb25mbG93ZXJQaWNrZXIsXG4gICAgb3BlbkJsZXNzaW5nUGlja2VyLFxuICAgIG9wZW5XZWFwb25QaWNrZXIsXG4gICAgb3BlblJlZmluZVBpY2tlcixcbiAgICBvcGVuQXNzaXN0UGlja2VyLFxuICAgIG9wZW5TcGVjaWFsUGlja2VyLFxuICAgIG9wZW5Ta2lsbEFQaWNrZXIsXG4gICAgb3BlblNraWxsQlBpY2tlcixcbiAgICBvcGVuU2tpbGxDUGlja2VyLFxuICAgIG9wZW5TZWFsUGlja2VyLFxuICAgIG9uQ2xpY2tCYWNrLFxuICB9ID0gdXNlSG9va3MoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8T3ZlcnZpZXdcbiAgICAgICAgaGlkZGVuPXshIXZpZXd9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgb3Blbkhlcm9QaWNrZXI9e29wZW5IZXJvUGlja2VyfVxuICAgICAgICBvcGVuUmFyaXR5UGlja2VyPXtvcGVuUmFyaXR5UGlja2VyfVxuICAgICAgICBvcGVuSVZQaWNrZXI9e29wZW5JVlBpY2tlcn1cbiAgICAgICAgb3Blbk1lcmdlUGlja2VyPXtvcGVuTWVyZ2VQaWNrZXJ9XG4gICAgICAgIG9wZW5EcmFnb25mbG93ZXJQaWNrZXI9e29wZW5EcmFnb25mbG93ZXJQaWNrZXJ9XG4gICAgICAgIG9wZW5CbGVzc2luZ1BpY2tlcj17b3BlbkJsZXNzaW5nUGlja2VyfVxuICAgICAgICBvcGVuV2VhcG9uUGlja2VyPXtvcGVuV2VhcG9uUGlja2VyfVxuICAgICAgICBvcGVuUmVmaW5lUGlja2VyPXtvcGVuUmVmaW5lUGlja2VyfVxuICAgICAgICBvcGVuQXNzaXN0UGlja2VyPXtvcGVuQXNzaXN0UGlja2VyfVxuICAgICAgICBvcGVuU3BlY2lhbFBpY2tlcj17b3BlblNwZWNpYWxQaWNrZXJ9XG4gICAgICAgIG9wZW5Ta2lsbEFQaWNrZXI9e29wZW5Ta2lsbEFQaWNrZXJ9XG4gICAgICAgIG9wZW5Ta2lsbEJQaWNrZXI9e29wZW5Ta2lsbEJQaWNrZXJ9XG4gICAgICAgIG9wZW5Ta2lsbENQaWNrZXI9e29wZW5Ta2lsbENQaWNrZXJ9XG4gICAgICAgIG9wZW5TZWFsUGlja2VyPXtvcGVuU2VhbFBpY2tlcn1cbiAgICAgIC8+XG4gICAgICA8SGVyb1BpY2tlclZpZXdcbiAgICAgICAgaGlkZGVuPXt2aWV3ICE9PSAnaGVybyd9XG4gICAgICAgIGhlcm9JZD17cHJvcHMuaGVyb0lkfVxuICAgICAgICBvbkNoYW5nZUhlcm89e3Byb3BzLm9uQ2hhbmdlSGVyb31cbiAgICAgICAgb25DbGlja0JhY2s9e29uQ2xpY2tCYWNrfVxuICAgICAgICByZXNwbGVuZGVudD17cHJvcHMucmVzcGxlbmRlbnR9XG4gICAgICAvPlxuICAgICAgPFJhcml0eVBpY2tlclZpZXdcbiAgICAgICAgaGlkZGVuPXt2aWV3ICE9PSAncmFyaXR5J31cbiAgICAgICAgcmFyaXR5PXtwcm9wcy5yYXJpdHl9XG4gICAgICAgIHNlbGVjdFJhcml0eT17cHJvcHMuc2V0UmFyaXR5fVxuICAgICAgICBvbkNsaWNrQmFjaz17b25DbGlja0JhY2t9XG4gICAgICAvPlxuICAgICAgPElWUGlja2VyVmlld1xuICAgICAgICBoaWRkZW49e3ZpZXcgIT09ICdpdid9XG4gICAgICAgIGl2PXtwcm9wcy5pdn1cbiAgICAgICAgc2VsZWN0SVY9e3Byb3BzLnNldElWfVxuICAgICAgICBvbkNsaWNrQmFjaz17b25DbGlja0JhY2t9XG4gICAgICAvPlxuICAgICAgPEJsZXNzaW5nUGlja2VyVmlld1xuICAgICAgICBoaWRkZW49e3ZpZXcgIT09ICdibGVzc2luZyd9XG4gICAgICAgIGJsZXNzaW5nPXtwcm9wcy5ibGVzc2luZ31cbiAgICAgICAgc2VsZWN0Qmxlc3Npbmc9e3Byb3BzLnNldEJsZXNzaW5nfVxuICAgICAgICBvbkNsaWNrQmFjaz17b25DbGlja0JhY2t9XG4gICAgICAvPlxuICAgICAgPE1lcmdlUGlja2VyVmlld1xuICAgICAgICBoaWRkZW49e3ZpZXcgIT09ICdtZXJnZSd9XG4gICAgICAgIG1lcmdlPXtwcm9wcy5tZXJnZX1cbiAgICAgICAgc2VsZWN0TWVyZ2U9e3Byb3BzLnNldE1lcmdlfVxuICAgICAgICBvbkNsaWNrQmFjaz17b25DbGlja0JhY2t9XG4gICAgICAvPlxuICAgICAgPERyYWdvbmZsb3dlclBpY2tlclZpZXdcbiAgICAgICAgaGlkZGVuPXt2aWV3ICE9PSAnZHJhZ29uZmxvd2VyJ31cbiAgICAgICAgZHJhZ29uZmxvd2VyPXtwcm9wcy5kcmFnb25mbG93ZXJ9XG4gICAgICAgIHNlbGVjdERyYWdvbmZsb3dlcj17cHJvcHMuc2V0RHJhZ29uZmxvd2VyfVxuICAgICAgICBvbkNsaWNrQmFjaz17b25DbGlja0JhY2t9XG4gICAgICAvPlxuICAgICAgPFdlYXBvblBpY2tlclZpZXdcbiAgICAgICAgaGlkZGVuPXt2aWV3ICE9PSAnd2VhcG9uJ31cbiAgICAgICAgb25DbGlja0JhY2s9e29uQ2xpY2tCYWNrfVxuICAgICAgICBoZXJvSWQ9e3Byb3BzLmhlcm9JZH1cbiAgICAgICAgd2VhcG9uPXtwcm9wcy53ZWFwb259XG4gICAgICAgIHNlbGVjdFdlYXBvbj17cHJvcHMuc2V0V2VhcG9ufVxuICAgICAgICBtYXhTa2lsbD17cHJvcHMubWF4U2tpbGx9XG4gICAgICAgIHRvZ2dsZU1heFNraWxsPXtwcm9wcy50b2dnbGVNYXhTa2lsbH1cbiAgICAgICAgc2V0RGVmYXVsdFNraWxsPXtwcm9wcy5zZXREZWZhdWx0V2VhcG9ufVxuICAgICAgLz5cbiAgICAgIDxSZWZpbmVQaWNrZXJWaWV3XG4gICAgICAgIGhpZGRlbj17dmlldyAhPT0gJ3JlZmluZSd9XG4gICAgICAgIG9uQ2xpY2tCYWNrPXtvbkNsaWNrQmFja31cbiAgICAgICAgaGVyb0lkPXtwcm9wcy5oZXJvSWR9XG4gICAgICAgIHdlYXBvbj17cHJvcHMud2VhcG9ufVxuICAgICAgICByZWZpbmU9e3Byb3BzLnJlZmluZX1cbiAgICAgICAgc2VsZWN0UmVmaW5lPXtwcm9wcy5zZXRSZWZpbmV9XG4gICAgICAvPlxuICAgICAgPEFzc2lzdFBpY2tlclZpZXdcbiAgICAgICAgaGlkZGVuPXt2aWV3ICE9PSAnYXNzaXN0J31cbiAgICAgICAgb25DbGlja0JhY2s9e29uQ2xpY2tCYWNrfVxuICAgICAgICBoZXJvSWQ9e3Byb3BzLmhlcm9JZH1cbiAgICAgICAgYXNzaXN0PXtwcm9wcy5hc3Npc3R9XG4gICAgICAgIHNlbGVjdEFzc2lzdD17cHJvcHMuc2V0QXNzaXN0fVxuICAgICAgICBtYXhTa2lsbD17cHJvcHMubWF4U2tpbGx9XG4gICAgICAgIHRvZ2dsZU1heFNraWxsPXtwcm9wcy50b2dnbGVNYXhTa2lsbH1cbiAgICAgICAgc2V0RGVmYXVsdFNraWxsPXtwcm9wcy5zZXREZWZhdWx0QXNzaXN0fVxuICAgICAgLz5cbiAgICAgIDxTcGVjaWFsUGlja2VyVmlld1xuICAgICAgICB0aXRsZT1cIkHmioDog71cIlxuICAgICAgICBoaWRkZW49e3ZpZXcgIT09ICdzcGVjaWFsJ31cbiAgICAgICAgb25DbGlja0JhY2s9e29uQ2xpY2tCYWNrfVxuICAgICAgICBoZXJvSWQ9e3Byb3BzLmhlcm9JZH1cbiAgICAgICAgc3BlY2lhbD17cHJvcHMuc3BlY2lhbH1cbiAgICAgICAgc2VsZWN0U3BlY2lhbD17cHJvcHMuc2V0U3BlY2lhbH1cbiAgICAgICAgbWF4U2tpbGw9e3Byb3BzLm1heFNraWxsfVxuICAgICAgICB0b2dnbGVNYXhTa2lsbD17cHJvcHMudG9nZ2xlTWF4U2tpbGx9XG4gICAgICAgIHNldERlZmF1bHRTa2lsbD17cHJvcHMuc2V0RGVmYXVsdFNwZWNpYWx9XG4gICAgICAvPlxuICAgICAgPFNraWxsUGlja2VyVmlld1xuICAgICAgICBza2lsbFR5cGU9XCJza2lsbEFcIlxuICAgICAgICB0aXRsZT1cIkHmioDog71cIlxuICAgICAgICBoaWRkZW49e3ZpZXcgIT09ICdza2lsbEEnfVxuICAgICAgICBvbkNsaWNrQmFjaz17b25DbGlja0JhY2t9XG4gICAgICAgIGhlcm9JZD17cHJvcHMuaGVyb0lkfVxuICAgICAgICBza2lsbElkPXtwcm9wcy5za2lsbEF9XG4gICAgICAgIHNlbGVjdFNraWxsPXtwcm9wcy5zZXRTa2lsbEF9XG4gICAgICAgIG1heFNraWxsPXtwcm9wcy5tYXhTa2lsbH1cbiAgICAgICAgdG9nZ2xlTWF4U2tpbGw9e3Byb3BzLnRvZ2dsZU1heFNraWxsfVxuICAgICAgICBzZXREZWZhdWx0U2tpbGw9e3Byb3BzLnNldERlZmF1bHRTa2lsbEF9XG4gICAgICAvPlxuICAgICAgPFNraWxsUGlja2VyVmlld1xuICAgICAgICBza2lsbFR5cGU9XCJza2lsbEJcIlxuICAgICAgICB0aXRsZT1cIkLmioDog71cIlxuICAgICAgICBoaWRkZW49e3ZpZXcgIT09ICdza2lsbEInfVxuICAgICAgICBvbkNsaWNrQmFjaz17b25DbGlja0JhY2t9XG4gICAgICAgIGhlcm9JZD17cHJvcHMuaGVyb0lkfVxuICAgICAgICBza2lsbElkPXtwcm9wcy5za2lsbEJ9XG4gICAgICAgIHNlbGVjdFNraWxsPXtwcm9wcy5zZXRTa2lsbEJ9XG4gICAgICAgIG1heFNraWxsPXtwcm9wcy5tYXhTa2lsbH1cbiAgICAgICAgdG9nZ2xlTWF4U2tpbGw9e3Byb3BzLnRvZ2dsZU1heFNraWxsfVxuICAgICAgICBzZXREZWZhdWx0U2tpbGw9e3Byb3BzLnNldERlZmF1bHRTa2lsbEJ9XG4gICAgICAvPlxuICAgICAgPFNraWxsUGlja2VyVmlld1xuICAgICAgICBza2lsbFR5cGU9XCJza2lsbENcIlxuICAgICAgICB0aXRsZT1cIkPmioDog71cIlxuICAgICAgICBoaWRkZW49e3ZpZXcgIT09ICdza2lsbEMnfVxuICAgICAgICBvbkNsaWNrQmFjaz17b25DbGlja0JhY2t9XG4gICAgICAgIGhlcm9JZD17cHJvcHMuaGVyb0lkfVxuICAgICAgICBza2lsbElkPXtwcm9wcy5za2lsbEN9XG4gICAgICAgIHNlbGVjdFNraWxsPXtwcm9wcy5zZXRTa2lsbEN9XG4gICAgICAgIG1heFNraWxsPXtwcm9wcy5tYXhTa2lsbH1cbiAgICAgICAgdG9nZ2xlTWF4U2tpbGw9e3Byb3BzLnRvZ2dsZU1heFNraWxsfVxuICAgICAgICBzZXREZWZhdWx0U2tpbGw9e3Byb3BzLnNldERlZmF1bHRTa2lsbEN9XG4gICAgICAvPlxuICAgICAgPFNlYWxQaWNrZXJWaWV3XG4gICAgICAgIGhpZGRlbj17dmlldyAhPT0gJ3NlYWwnfVxuICAgICAgICBvbkNsaWNrQmFjaz17b25DbGlja0JhY2t9XG4gICAgICAgIGhlcm9JZD17cHJvcHMuaGVyb0lkfVxuICAgICAgICBzZWFsPXtwcm9wcy5za2lsbEN9XG4gICAgICAgIHNlbGVjdFNlYWw9e3Byb3BzLnNldFNlYWx9XG4gICAgICAgIG1heFNraWxsPXtwcm9wcy5tYXhTa2lsbH1cbiAgICAgICAgdG9nZ2xlTWF4U2tpbGw9e3Byb3BzLnRvZ2dsZU1heFNraWxsfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIiwiaW1wb3J0IHsgUmVhY3RFbGVtZW50LCB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9yYXJpdHlwaWNrZXIubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCB0eXBlIFRSYXJpdHlQaWNrZXJQcm9wcyA9IHtcbiAgcmFyaXR5OiA1IHwgNDtcbiAgbWluUmFyaXR5PzogNSB8IDQ7XG4gIG9uU2VsZWN0PzogKG5ld1Jhcml0eTogbnVtYmVyKSA9PiB2b2lkO1xufTtcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBbXG4gIHsgbmFtZTogJzXimIYnLCB2YWx1ZTogNSB9LFxuICB7IG5hbWU6ICc04piFJywgdmFsdWU6IDQgfSxcbl07XG5cbmZ1bmN0aW9uIFJhcml0eVBpY2tlcih7XG4gIHJhcml0eSA9IDUsXG4gIG1pblJhcml0eSA9IDUsXG4gIG9uU2VsZWN0LFxufTogVFJhcml0eVBpY2tlclByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudCkgPT4ge1xuICAgICAgaWYgKG9uU2VsZWN0KSB7XG4gICAgICAgIG9uU2VsZWN0KE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbb25TZWxlY3RdLFxuICApO1xuICBjb25zdCBvcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKG1pblJhcml0eSA8IDUpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRPcHRpb25zLnNsaWNlKDAsIDEpO1xuICB9LCBbbWluUmFyaXR5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhcml0eXBpY2tlcn0+XG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBkYXRhLWFjdGl2ZT17b3B0aW9uLnZhbHVlID09PSByYXJpdHl9XG4gICAgICAgID5cbiAgICAgICAgICB7b3B0aW9uLm5hbWV9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhcml0eVBpY2tlcjtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9yYXJpdHlwaWNrZXIubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9yYXJpdHlwaWNrZXIubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0yLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0yLTIhLi9yYXJpdHlwaWNrZXIubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucmFyaXR5cGlja2VyX3Jhcml0eXBpY2tlcl9fSkVweG0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXJvdy1nYXA6IDAuNWVtO1xcbiAgcm93LWdhcDogMC41ZW07XFxuICBncmlkLWNvbHVtbi1nYXA6IDAuNWVtO1xcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAwLjVlbTtcXG4gICAgIC1tb3otY29sdW1uLWdhcDogMC41ZW07XFxuICAgICAgICAgIGNvbHVtbi1nYXA6IDAuNWVtO1xcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xcbn1cXG5cXG4ucmFyaXR5cGlja2VyX3Jhcml0eXBpY2tlcl9fSkVweG0gYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vYXBwL2NvbXBvbmVudHMvUmFyaXR5UGlja2VyL3Jhcml0eXBpY2tlci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQkFBYztFQUFkLGNBQWM7RUFDZCxzQkFBaUI7RUFBakIseUJBQWlCO0tBQWpCLHNCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJhcml0eXBpY2tlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIHJvdy1nYXA6IDAuNWVtO1xcbiAgY29sdW1uLWdhcDogMC41ZW07XFxuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XFxufVxcblxcbi5yYXJpdHlwaWNrZXIgYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJyYXJpdHlwaWNrZXJcIjogXCJyYXJpdHlwaWNrZXJfcmFyaXR5cGlja2VyX19KRXB4bVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=