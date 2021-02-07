webpackHotUpdate_N_E("pages/uniteditor",{

/***/ "./app/components/UnitViewer/hooks.tsx":
/*!*********************************************!*\
  !*** ./app/components/UnitViewer/hooks.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/useBathPathUrl */ "./app/utils/useBathPathUrl.tsx");
/* harmony import */ var _app_utils_data_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/data-utils */ "./app/utils/data-utils.tsx");
/* harmony import */ var _app_utils_stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/utils/stats */ "./app/utils/stats.tsx");
/* harmony import */ var _app_utils_arenascore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/utils/arenascore */ "./app/utils/arenascore.tsx");
/* harmony import */ var _app_utils_resplendent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/utils/resplendent */ "./app/utils/resplendent.tsx");
/* harmony import */ var _app_utils_heroes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/utils/heroes */ "./app/utils/heroes.tsx");
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ImageLoader */ "./app/components/UnitViewer/ImageLoader/index.tsx");
/* harmony import */ var _Background_draw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Background/draw */ "./app/components/UnitViewer/Background/draw.tsx");
/* harmony import */ var _Portrait_draw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Portrait/draw */ "./app/components/UnitViewer/Portrait/draw.tsx");
/* harmony import */ var _Foreground_draw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Foreground/draw */ "./app/components/UnitViewer/Foreground/draw.tsx");
/* harmony import */ var _Foreground2_draw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Foreground2/draw */ "./app/components/UnitViewer/Foreground2/draw.tsx");
/* harmony import */ var _Rarity_draw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Rarity/draw */ "./app/components/UnitViewer/Rarity/draw.tsx");
/* harmony import */ var _WeaponType_draw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./WeaponType/draw */ "./app/components/UnitViewer/WeaponType/draw.tsx");
/* harmony import */ var _MoveType_draw__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./MoveType/draw */ "./app/components/UnitViewer/MoveType/draw.tsx");
/* harmony import */ var _DragonFlower_draw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DragonFlower/draw */ "./app/components/UnitViewer/DragonFlower/draw.tsx");
/* harmony import */ var _Support_draw__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Support/draw */ "./app/components/UnitViewer/Support/draw.tsx");
/* harmony import */ var _Blessing_draw__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Blessing/draw */ "./app/components/UnitViewer/Blessing/draw.tsx");
/* harmony import */ var _SkillIcon_draw__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SkillIcon/draw */ "./app/components/UnitViewer/SkillIcon/draw.tsx");
/* harmony import */ var _Level_draw__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Level/draw */ "./app/components/UnitViewer/Level/draw.tsx");
/* harmony import */ var _Merge_draw__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Merge/draw */ "./app/components/UnitViewer/Merge/draw.tsx");
/* harmony import */ var _StatNumber_draw__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./StatNumber/draw */ "./app/components/UnitViewer/StatNumber/draw.tsx");
/* harmony import */ var _SpecialNumber_draw__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SpecialNumber/draw */ "./app/components/UnitViewer/SpecialNumber/draw.tsx");
/* harmony import */ var _StatText_draw__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./StatText/draw */ "./app/components/UnitViewer/StatText/draw.tsx");
/* harmony import */ var _SkillText_draw__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./SkillText/draw */ "./app/components/UnitViewer/SkillText/draw.tsx");
/* harmony import */ var _DescriptionText_draw__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./DescriptionText/draw */ "./app/components/UnitViewer/DescriptionText/draw.tsx");
/* harmony import */ var _ArenaIcon_draw__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ArenaIcon/draw */ "./app/components/UnitViewer/ArenaIcon/draw.tsx");
/* harmony import */ var _ResplendentIcon_draw__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ResplendentIcon/draw */ "./app/components/UnitViewer/ResplendentIcon/draw.tsx");



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






























var imageIdAndSrc = [['background', '/assets/background.jpg'], ['foreground', '/assets/foreground.png'], ['foreground2', '/assets/foreground2.png'], ['portrait', ''], ['rarityAtlas', '/assets/rarity.png'], ['weaponTypeAtlas', '/assets/weapon-type.png'], ['moveTypeAtlas', '/assets/move-type.png'], ['dragonflowerAtlas', '/assets/dragonflower.png'], ['supportAtlas', '/assets/support.png'], ['blessingAtlas', ''], ['numberAtlas', '/assets/number.png'], ['weaponIcon', '/skills/weapon.png'], ['assistIcon', '/skills/assist.png'], ['specialIcon', '/skills/special.png'], ['textA', '/assets/skill-a.png'], ['textB', '/assets/skill-b.png'], ['textC', '/assets/skill-c.png'], ['textS', '/assets/skill-s.png'], ['arenaIcon', '/assets/Arena_Crown.png'], ['skillAIcon', ''], ['skillBIcon', ''], ['skillCIcon', ''], ['sealIcon', ''], ['resplendentIcon', '/assets/god-wear-l.png']];
var defaultSkillIcons = [{
  skillName: 'weapon',
  empty: '/skills/weapon.png'
}, {
  skillName: 'skillA',
  empty: '/skills/empty.png'
}, {
  skillName: 'skillB',
  empty: '/skills/empty.png'
}, {
  skillName: 'skillC',
  empty: '/skills/empty.png'
}, {
  skillName: 'seal',
  empty: '/skills/seal-empty.png'
}];

function useHooks(_ref) {
  _s();

  var heroId = _ref.heroId,
      rarity = _ref.rarity,
      iv = _ref.iv,
      merge = _ref.merge,
      dragonflower = _ref.dragonflower,
      blessing = _ref.blessing,
      support = _ref.support,
      arena = _ref.arena,
      resplendent = _ref.resplendent,
      weapon = _ref.weapon,
      refine = _ref.refine,
      assist = _ref.assist,
      special = _ref.special,
      skillA = _ref.skillA,
      skillB = _ref.skillB,
      skillC = _ref.skillC,
      seal = _ref.seal,
      lv1 = _ref.lv1;
  var db = Object(_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_9__["useFehDB"])();
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var textCanvas = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var heroRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var skillInfosRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var statsInfosRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var rarityRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var ivRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var mergeRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var dragonflowerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var blessingRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var supportRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var arenaRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var resplendentRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var refineRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var lv1Ref = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var scoreRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var hero = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_app_utils_heroes__WEBPACK_IMPORTED_MODULE_8__["getHero"])(db.heroDB, heroId);
  }, [db.heroDB, heroId]);
  var skills = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      weapon: weapon,
      assist: assist,
      special: special,
      skillA: skillA,
      skillB: skillB,
      skillC: skillC,
      seal: seal
    };
  }, [weapon, assist, special, skillA, skillB, skillC, seal]);
  var stats = hero.stats;
  var skillInfos = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_app_utils_data_utils__WEBPACK_IMPORTED_MODULE_4__["getSkillInfos"])({
      heroDB: db.heroDB,
      weaponDB: db.weaponDB,
      assistDB: db.assistDB,
      specialDB: db.specialDB,
      skillADB: db.skillADB,
      skillBDB: db.skillBDB,
      skillCDB: db.skillCDB,
      sealDB: db.sealDB,
      skills: skills,
      heroId: heroId,
      refine: refine,
      rarity: rarity
    });
  }, [skills, heroId, refine, rarity, db.heroDB, db.weaponDB, db.assistDB, db.specialDB, db.skillADB, db.skillBDB, db.skillCDB, db.sealDB]);
  var statsInfos = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_app_utils_stats__WEBPACK_IMPORTED_MODULE_5__["getStats"])(rarity, stats, iv, merge, support, skillInfos.stats, lv1, arena, dragonflower, resplendent);
  }, [rarity, stats, iv, merge, support, skillInfos, lv1, arena, dragonflower, resplendent]);
  var score = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_app_utils_arenascore__WEBPACK_IMPORTED_MODULE_6__["default"])({
      rarity: rarity,
      merge: merge,
      bst: Math.max(statsInfos.bst, skillInfos.bst, hero.bst || 0),
      spt: skillInfos.spt
    });
  }, [rarity, merge, statsInfos.bst, skillInfos.bst, skillInfos.spt, hero]);
  var loaders = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({});
  var draw = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!canvasRef.current) {
      return;
    }

    var _loaders$current = loaders.current,
        background = _loaders$current.background,
        foreground = _loaders$current.foreground,
        foreground2 = _loaders$current.foreground2,
        portrait = _loaders$current.portrait,
        rarityAtlas = _loaders$current.rarityAtlas,
        weaponTypeAtlas = _loaders$current.weaponTypeAtlas,
        moveTypeAtlas = _loaders$current.moveTypeAtlas,
        dragonflowerAtlas = _loaders$current.dragonflowerAtlas,
        supportAtlas = _loaders$current.supportAtlas,
        blessingAtlas = _loaders$current.blessingAtlas,
        numberAtlas = _loaders$current.numberAtlas,
        weaponIcon = _loaders$current.weaponIcon,
        assistIcon = _loaders$current.assistIcon,
        specialIcon = _loaders$current.specialIcon,
        textA = _loaders$current.textA,
        textB = _loaders$current.textB,
        textC = _loaders$current.textC,
        textS = _loaders$current.textS,
        arenaIcon = _loaders$current.arenaIcon,
        skillAIcon = _loaders$current.skillAIcon,
        skillBIcon = _loaders$current.skillBIcon,
        skillCIcon = _loaders$current.skillCIcon,
        sealIcon = _loaders$current.sealIcon,
        resplendentIcon = _loaders$current.resplendentIcon;
    var _heroRef$current = heroRef.current,
        title = _heroRef$current.title,
        name = _heroRef$current.name,
        weaponType = _heroRef$current.weaponType,
        moveType = _heroRef$current.moveType;
    var hasBlessing = !!heroRef.current.blessing || !!blessingRef.current;
    var context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, 540, 960);

    if (background.loaded) {
      Object(_Background_draw__WEBPACK_IMPORTED_MODULE_11__["default"])({
        context: context,
        background: background.image,
        support: supportRef.current
      });
    }

    if (portrait.loaded) {
      Object(_Portrait_draw__WEBPACK_IMPORTED_MODULE_12__["default"])({
        context: context,
        portrait: portrait.image
      });
    }

    if (foreground.loaded) {
      Object(_Foreground_draw__WEBPACK_IMPORTED_MODULE_13__["default"])({
        context: context,
        foreground: foreground.image
      });
    }

    if (foreground2.loaded) {
      Object(_Foreground2_draw__WEBPACK_IMPORTED_MODULE_14__["default"])({
        context: context,
        foreground2: foreground2.image,
        dragonflower: dragonflowerRef.current
      });
    }

    if (rarityAtlas.loaded) {
      Object(_Rarity_draw__WEBPACK_IMPORTED_MODULE_15__["default"])({
        context: context,
        rarityAtlas: rarityAtlas.image,
        rarity: rarityRef.current
      });
    }

    if (weaponTypeAtlas.loaded) {
      Object(_WeaponType_draw__WEBPACK_IMPORTED_MODULE_16__["default"])({
        context: context,
        weaponTypeAtlas: weaponTypeAtlas.image,
        weaponType: weaponType
      });
    }

    if (moveTypeAtlas.loaded) {
      Object(_MoveType_draw__WEBPACK_IMPORTED_MODULE_17__["default"])({
        context: context,
        moveTypeAtlas: moveTypeAtlas.image,
        moveType: moveType
      });
    }

    if (dragonflowerAtlas.loaded && numberAtlas.loaded) {
      Object(_DragonFlower_draw__WEBPACK_IMPORTED_MODULE_18__["default"])({
        context: context,
        dragonflowerAtlas: dragonflowerAtlas.image,
        numberAtlas: numberAtlas.image,
        moveType: moveType,
        dragonflower: dragonflowerRef.current
      });
    }

    if (supportAtlas.loaded) {
      Object(_Support_draw__WEBPACK_IMPORTED_MODULE_19__["default"])({
        context: context,
        supportAtlas: supportAtlas.image,
        support: supportRef.current,
        hasBlessing: hasBlessing
      });
    }

    if (blessingAtlas.loaded) {
      Object(_Blessing_draw__WEBPACK_IMPORTED_MODULE_20__["default"])({
        context: context,
        blessingAtlas: blessingAtlas.image
      });
    }

    if (numberAtlas.loaded) {
      Object(_Level_draw__WEBPACK_IMPORTED_MODULE_22__["default"])({
        context: context,
        numberAtlas: numberAtlas.image,
        lv1: lv1Ref.current
      });
      Object(_Merge_draw__WEBPACK_IMPORTED_MODULE_23__["default"])({
        context: context,
        numberAtlas: numberAtlas.image,
        merge: mergeRef.current
      });
      Object(_StatNumber_draw__WEBPACK_IMPORTED_MODULE_24__["default"])(_objectSpread({
        context: context,
        numberAtlas: numberAtlas.image,
        score: scoreRef.current,
        sbst: Math.max(skillInfosRef.current.bst, heroRef.current.bst)
      }, statsInfosRef.current));
      Object(_SpecialNumber_draw__WEBPACK_IMPORTED_MODULE_25__["default"])({
        context: context,
        numberAtlas: numberAtlas.image,
        accelerate: skillInfosRef.current.accelerate,
        specialCD: skillInfosRef.current.specialCD
      });
    }

    Object(_SkillIcon_draw__WEBPACK_IMPORTED_MODULE_21__["default"])({
      context: context,
      weaponIcon: weaponIcon,
      assistIcon: assistIcon,
      specialIcon: specialIcon,
      textA: textA,
      textB: textB,
      textC: textC,
      textS: textS,
      skillAIcon: skillAIcon,
      skillBIcon: skillBIcon,
      skillCIcon: skillCIcon,
      sealIcon: sealIcon
    });
    var textContext = textCanvas.current.getContext('2d');
    textContext.clearRect(0, 0, 1080, 1920);
    Object(_StatText_draw__WEBPACK_IMPORTED_MODULE_26__["default"])({
      canvas: textCanvas.current,
      iv: ivRef.current,
      merge: mergeRef.current
    });
    Object(_SkillText_draw__WEBPACK_IMPORTED_MODULE_27__["default"])(_objectSpread({
      canvas: textCanvas.current,
      refine: refineRef.current
    }, skillInfosRef.current.names));
    Object(_DescriptionText_draw__WEBPACK_IMPORTED_MODULE_28__["default"])({
      canvas: textCanvas.current,
      title: title,
      name: name
    });

    if (arenaRef.current && arenaIcon) {
      Object(_ArenaIcon_draw__WEBPACK_IMPORTED_MODULE_29__["default"])({
        context: context,
        arenaIcon: arenaIcon.image
      });
    }

    if (resplendentRef.current && resplendentIcon) {
      Object(_ResplendentIcon_draw__WEBPACK_IMPORTED_MODULE_30__["default"])({
        context: context,
        resplendentIcon: resplendentIcon.image
      });
    }

    context.drawImage(textCanvas.current, 0, 0, 540, 960);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    textCanvas.current = document.createElement('canvas');
    textCanvas.current.width = 1080;
    textCanvas.current.height = 1920;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    imageIdAndSrc.forEach(function (_ref2) {
      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          imageId = _ref3[0],
          imgSrc = _ref3[1];

      loaders.current[imageId] = new _ImageLoader__WEBPACK_IMPORTED_MODULE_10__["ImageLoader"](draw);
      loaders.current[imageId].load(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(imgSrc));
    });
  }, [loaders, draw]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var portrait = Object(_app_utils_resplendent__WEBPACK_IMPORTED_MODULE_7__["toResplendent"])(hero.id, resplendent);
    loaders.current.portrait.load(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"])("/portraits/".concat(portrait, ".png")));
    var icons = Object(_app_utils_data_utils__WEBPACK_IMPORTED_MODULE_4__["getSkillIcons"])({
      heroDB: db.heroDB,
      weaponDB: db.weaponDB,
      assistDB: db.assistDB,
      specialDB: db.specialDB,
      skillADB: db.skillADB,
      skillBDB: db.skillBDB,
      skillCDB: db.skillCDB,
      sealDB: db.sealDB,
      skills: skills,
      heroId: hero.id,
      refine: refine
    });
    defaultSkillIcons.forEach(function (_ref4) {
      var skillName = _ref4.skillName,
          empty = _ref4.empty;
      loaders.current["".concat(skillName, "Icon")].load(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"])("".concat(icons[skillName] || empty)));
    });
    var hasBlessing = hero.blessing !== '-' && !!hero.blessing || !!blessing;
    loaders.current.blessingAtlas.load(hasBlessing ? Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"])("/assets/blessing-".concat(hero.blessing || blessing, ".png")) : '');
  }, [hero, resplendent, skills, refine, blessing, statsInfos, db.heroDB, db.weaponDB, db.assistDB, db.specialDB, db.skillADB, db.skillBDB, db.skillCDB, db.sealDB]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    heroRef.current = hero;
    rarityRef.current = rarity;
    ivRef.current = iv;
    mergeRef.current = merge;
    dragonflowerRef.current = dragonflower;
    blessingRef.current = blessing;
    supportRef.current = support;
    arenaRef.current = arena;
    resplendentRef.current = resplendent;
    refineRef.current = refine;
    lv1Ref.current = lv1;
    scoreRef.current = score;
    skillInfosRef.current = skillInfos;
    statsInfosRef.current = statsInfos;
    draw();
  }, [hero, rarity, iv, merge, dragonflower, blessing, support, arena, resplendent, refine, lv1, score, skillInfos, statsInfos, draw]);
  var triggerDownload = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var dataURL = canvasRef.current.toDataURL('image/png');
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = "".concat(hero === null || hero === void 0 ? void 0 : hero.name, "-").concat(hero === null || hero === void 0 ? void 0 : hero.title, ".png");
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [hero === null || hero === void 0 ? void 0 : hero.name, hero === null || hero === void 0 ? void 0 : hero.title]);
  return {
    canvasRef: canvasRef,
    triggerDownload: triggerDownload
  };
}

_s(useHooks, "ayIhNLCPFOyHy129rLzLZbYuJLc=", false, function () {
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_9__["useFehDB"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9ob29rcy50c3giXSwibmFtZXMiOlsiaW1hZ2VJZEFuZFNyYyIsImRlZmF1bHRTa2lsbEljb25zIiwic2tpbGxOYW1lIiwiZW1wdHkiLCJ1c2VIb29rcyIsImhlcm9JZCIsInJhcml0eSIsIml2IiwibWVyZ2UiLCJkcmFnb25mbG93ZXIiLCJibGVzc2luZyIsInN1cHBvcnQiLCJhcmVuYSIsInJlc3BsZW5kZW50Iiwid2VhcG9uIiwicmVmaW5lIiwiYXNzaXN0Iiwic3BlY2lhbCIsInNraWxsQSIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJsdjEiLCJkYiIsInVzZUZlaERCIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidGV4dENhbnZhcyIsImhlcm9SZWYiLCJza2lsbEluZm9zUmVmIiwic3RhdHNJbmZvc1JlZiIsInJhcml0eVJlZiIsIml2UmVmIiwibWVyZ2VSZWYiLCJkcmFnb25mbG93ZXJSZWYiLCJibGVzc2luZ1JlZiIsInN1cHBvcnRSZWYiLCJhcmVuYVJlZiIsInJlc3BsZW5kZW50UmVmIiwicmVmaW5lUmVmIiwibHYxUmVmIiwic2NvcmVSZWYiLCJoZXJvIiwidXNlTWVtbyIsImdldEhlcm8iLCJoZXJvREIiLCJza2lsbHMiLCJzdGF0cyIsInNraWxsSW5mb3MiLCJnZXRTa2lsbEluZm9zIiwid2VhcG9uREIiLCJhc3Npc3REQiIsInNwZWNpYWxEQiIsInNraWxsQURCIiwic2tpbGxCREIiLCJza2lsbENEQiIsInNlYWxEQiIsInN0YXRzSW5mb3MiLCJnZXRTdGF0cyIsInNjb3JlIiwiYXJlbmFTY29yZSIsImJzdCIsIk1hdGgiLCJtYXgiLCJzcHQiLCJsb2FkZXJzIiwiZHJhdyIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImJhY2tncm91bmQiLCJmb3JlZ3JvdW5kIiwiZm9yZWdyb3VuZDIiLCJwb3J0cmFpdCIsInJhcml0eUF0bGFzIiwid2VhcG9uVHlwZUF0bGFzIiwibW92ZVR5cGVBdGxhcyIsImRyYWdvbmZsb3dlckF0bGFzIiwic3VwcG9ydEF0bGFzIiwiYmxlc3NpbmdBdGxhcyIsIm51bWJlckF0bGFzIiwid2VhcG9uSWNvbiIsImFzc2lzdEljb24iLCJzcGVjaWFsSWNvbiIsInRleHRBIiwidGV4dEIiLCJ0ZXh0QyIsInRleHRTIiwiYXJlbmFJY29uIiwic2tpbGxBSWNvbiIsInNraWxsQkljb24iLCJza2lsbENJY29uIiwic2VhbEljb24iLCJyZXNwbGVuZGVudEljb24iLCJ0aXRsZSIsIm5hbWUiLCJ3ZWFwb25UeXBlIiwibW92ZVR5cGUiLCJoYXNCbGVzc2luZyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwibG9hZGVkIiwiZHJhd0JhY2tncm91bmQiLCJpbWFnZSIsImRyYXdQb3J0cmFpdCIsImRyYXdGb3JlZ3JvdW5kIiwiZHJhd0ZvcmVncm91bmQyIiwiZHJhd1Jhcml0eSIsImRyYXdXZWFwb25UeXBlIiwiZHJhd01vdmVUeXBlIiwiZHJhd0RyYWdvbmZsb3dlciIsImRyYXdTdXBwb3J0IiwiZHJhd0JsZXNzaW5nIiwiZHJhd0xldmVsIiwiZHJhd01lcmdlIiwiZHJhd1N0YXROdW1iZXIiLCJzYnN0IiwiZHJhd1NwZWNpYWxOdW1iZXIiLCJhY2NlbGVyYXRlIiwic3BlY2lhbENEIiwiZHJhd1NraWxsSWNvbiIsInRleHRDb250ZXh0IiwiZHJhd1N0YXRUZXh0IiwiY2FudmFzIiwiZHJhd1NraWxsVGV4dCIsIm5hbWVzIiwiZHJhd0Rlc2NyaXB0aW9uIiwiZHJhd0FyZW5hSWNvbiIsImRyYXdSZXNwbGVuZGVudEljb24iLCJkcmF3SW1hZ2UiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImZvckVhY2giLCJpbWFnZUlkIiwiaW1nU3JjIiwiSW1hZ2VMb2FkZXIiLCJsb2FkIiwibWFwQmFzZVBhdGhVcmwiLCJ0b1Jlc3BsZW5kZW50IiwiaWQiLCJpY29ucyIsImdldFNraWxsSWNvbnMiLCJ0cmlnZ2VyRG93bmxvYWQiLCJkYXRhVVJMIiwidG9EYXRhVVJMIiwibGluayIsImhyZWYiLCJkb3dubG9hZCIsInRhcmdldCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQ3BCLENBQUMsWUFBRCxFQUFlLHdCQUFmLENBRG9CLEVBRXBCLENBQUMsWUFBRCxFQUFlLHdCQUFmLENBRm9CLEVBR3BCLENBQUMsYUFBRCxFQUFnQix5QkFBaEIsQ0FIb0IsRUFJcEIsQ0FBQyxVQUFELEVBQWEsRUFBYixDQUpvQixFQUtwQixDQUFDLGFBQUQsRUFBZ0Isb0JBQWhCLENBTG9CLEVBTXBCLENBQUMsaUJBQUQsRUFBb0IseUJBQXBCLENBTm9CLEVBT3BCLENBQUMsZUFBRCxFQUFrQix1QkFBbEIsQ0FQb0IsRUFRcEIsQ0FBQyxtQkFBRCxFQUFzQiwwQkFBdEIsQ0FSb0IsRUFTcEIsQ0FBQyxjQUFELEVBQWlCLHFCQUFqQixDQVRvQixFQVVwQixDQUFDLGVBQUQsRUFBa0IsRUFBbEIsQ0FWb0IsRUFXcEIsQ0FBQyxhQUFELEVBQWdCLG9CQUFoQixDQVhvQixFQVlwQixDQUFDLFlBQUQsRUFBZSxvQkFBZixDQVpvQixFQWFwQixDQUFDLFlBQUQsRUFBZSxvQkFBZixDQWJvQixFQWNwQixDQUFDLGFBQUQsRUFBZ0IscUJBQWhCLENBZG9CLEVBZXBCLENBQUMsT0FBRCxFQUFVLHFCQUFWLENBZm9CLEVBZ0JwQixDQUFDLE9BQUQsRUFBVSxxQkFBVixDQWhC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O0FBQ0FwQixZQUFRLENBQUNxQixJQUFULENBQWNDLFdBQWQsQ0FBMEJMLElBQTFCO0FBQ0FBLFFBQUksQ0FBQ00sS0FBTDtBQUNBdkIsWUFBUSxDQUFDcUIsSUFBVCxDQUFjRyxXQUFkLENBQTBCUCxJQUExQjtBQUNELEdBVGtDLEVBU2hDLENBQUMxRyxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRW9ELElBQVAsRUFBYXBELElBQWIsYUFBYUEsSUFBYix1QkFBYUEsSUFBSSxDQUFFbUQsS0FBbkIsQ0FUZ0MsQ0FBbkM7QUFXQSxTQUFPO0FBQ0xwRSxhQUFTLEVBQVRBLFNBREs7QUFFTHdILG1CQUFlLEVBQWZBO0FBRkssR0FBUDtBQUlEOztHQW5aUTdJLFE7VUFzQklvQix3RDs7O0FBK1hFcEIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci5lNjEwZjg0MDVmMmVlYjhlMTQzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVEhlcm8sIFRTa2lsbElkcyB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCBtYXBCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5pbXBvcnQgeyBnZXRTa2lsbEljb25zLCBnZXRTa2lsbEluZm9zIH0gZnJvbSAnQC9hcHAvdXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQgeyBnZXRTdGF0cyB9IGZyb20gJ0AvYXBwL3V0aWxzL3N0YXRzJztcbmltcG9ydCBhcmVuYVNjb3JlIGZyb20gJ0AvYXBwL3V0aWxzL2FyZW5hc2NvcmUnO1xuaW1wb3J0IHsgdG9SZXNwbGVuZGVudCB9IGZyb20gJ0AvYXBwL3V0aWxzL3Jlc3BsZW5kZW50JztcbmltcG9ydCB7IGdldEhlcm8gfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHsgdXNlRmVoREIgfSBmcm9tICdAL2FwcC9wYWdlL0ZFSERCJztcbmltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9JbWFnZUxvYWRlcic7XG5pbXBvcnQgZHJhd0JhY2tncm91bmQgZnJvbSAnLi9CYWNrZ3JvdW5kL2RyYXcnO1xuaW1wb3J0IGRyYXdQb3J0cmFpdCBmcm9tICcuL1BvcnRyYWl0L2RyYXcnO1xuaW1wb3J0IGRyYXdGb3JlZ3JvdW5kIGZyb20gJy4vRm9yZWdyb3VuZC9kcmF3JztcbmltcG9ydCBkcmF3Rm9yZWdyb3VuZDIgZnJvbSAnLi9Gb3JlZ3JvdW5kMi9kcmF3JztcbmltcG9ydCBkcmF3UmFyaXR5IGZyb20gJy4vUmFyaXR5L2RyYXcnO1xuaW1wb3J0IGRyYXdXZWFwb25UeXBlIGZyb20gJy4vV2VhcG9uVHlwZS9kcmF3JztcbmltcG9ydCBkcmF3TW92ZVR5cGUgZnJvbSAnLi9Nb3ZlVHlwZS9kcmF3JztcbmltcG9ydCBkcmF3RHJhZ29uZmxvd2VyIGZyb20gJy4vRHJhZ29uRmxvd2VyL2RyYXcnO1xuaW1wb3J0IGRyYXdTdXBwb3J0IGZyb20gJy4vU3VwcG9ydC9kcmF3JztcbmltcG9ydCBkcmF3Qmxlc3NpbmcgZnJvbSAnLi9CbGVzc2luZy9kcmF3JztcbmltcG9ydCBkcmF3U2tpbGxJY29uIGZyb20gJy4vU2tpbGxJY29uL2RyYXcnO1xuaW1wb3J0IGRyYXdMZXZlbCBmcm9tICcuL0xldmVsL2RyYXcnO1xuaW1wb3J0IGRyYXdNZXJnZSBmcm9tICcuL01lcmdlL2RyYXcnO1xuaW1wb3J0IGRyYXdTdGF0TnVtYmVyIGZyb20gJy4vU3RhdE51bWJlci9kcmF3JztcbmltcG9ydCBkcmF3U3BlY2lhbE51bWJlciBmcm9tICcuL1NwZWNpYWxOdW1iZXIvZHJhdyc7XG5pbXBvcnQgZHJhd1N0YXRUZXh0IGZyb20gJy4vU3RhdFRleHQvZHJhdyc7XG5pbXBvcnQgZHJhd1NraWxsVGV4dCBmcm9tICcuL1NraWxsVGV4dC9kcmF3JztcbmltcG9ydCBkcmF3RGVzY3JpcHRpb24gZnJvbSAnLi9EZXNjcmlwdGlvblRleHQvZHJhdyc7XG5pbXBvcnQgZHJhd0FyZW5hSWNvbiBmcm9tICcuL0FyZW5hSWNvbi9kcmF3JztcbmltcG9ydCBkcmF3UmVzcGxlbmRlbnRJY29uIGZyb20gJy4vUmVzcGxlbmRlbnRJY29uL2RyYXcnO1xuXG5jb25zdCBpbWFnZUlkQW5kU3JjID0gW1xuICBbJ2JhY2tncm91bmQnLCAnL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZyddLFxuICBbJ2ZvcmVncm91bmQnLCAnL2Fzc2V0cy9mb3JlZ3JvdW5kLnBuZyddLFxuICBbJ2ZvcmVncm91bmQyJywgJy9hc3NldHMvZm9yZWdyb3VuZDIucG5nJ10sXG4gIFsncG9ydHJhaXQnLCAnJ10sXG4gIFsncmFyaXR5QXRsYXMnLCAnL2Fzc2V0cy9yYXJpdHkucG5nJ10sXG4gIFsnd2VhcG9uVHlwZUF0bGFzJywgJy9hc3NldHMvd2VhcG9uLXR5cGUucG5nJ10sXG4gIFsnbW92ZVR5cGVBdGxhcycsICcvYXNzZXRzL21vdmUtdHlwZS5wbmcnXSxcbiAgWydkcmFnb25mbG93ZXJBdGxhcycsICcvYXNzZXRzL2RyYWdvbmZsb3dlci5wbmcnXSxcbiAgWydzdXBwb3J0QXRsYXMnLCAnL2Fzc2V0cy9zdXBwb3J0LnBuZyddLFxuICBbJ2JsZXNzaW5nQXRsYXMnLCAnJ10sXG4gIFsnbnVtYmVyQXRsYXMnLCAnL2Fzc2V0cy9udW1iZXIucG5nJ10sXG4gIFsnd2VhcG9uSWNvbicsICcvc2tpbGxzL3dlYXBvbi5wbmcnXSxcbiAgWydhc3Npc3RJY29uJywgJy9za2lsbHMvYXNzaXN0LnBuZyddLFxuICBbJ3NwZWNpYWxJY29uJywgJy9za2lsbHMvc3BlY2lhbC5wbmcnXSxcbiAgWyd0ZXh0QScsICcvYXNzZXRzL3NraWxsLWEucG5nJ10sXG4gIFsndGV4dEInLCAnL2Fzc2V0cy9za2lsbC1iLnBuZyddLFxuICBbJ3RleHRDJywgJy9hc3NldHMvc2tpbGwtYy5wbmcnXSxcbiAgWyd0ZXh0UycsICcvYXNzZXRzL3NraWxsLXMucG5nJ10sXG4gIFsnYXJlbmFJY29uJywgJy9hc3NldHMvQXJlbmFfQ3Jvd24ucG5nJ10sXG4gIFsnc2tpbGxBSWNvbicsICcnXSxcbiAgWydza2lsbEJJY29uJywgJyddLFxuICBbJ3NraWxsQ0ljb24nLCAnJ10sXG4gIFsnc2VhbEljb24nLCAnJ10sXG4gIFsncmVzcGxlbmRlbnRJY29uJywgJy9hc3NldHMvZ29kLXdlYXItbC5wbmcnXSxcbl07XG5cbmNvbnN0IGRlZmF1bHRTa2lsbEljb25zID0gW1xuICB7XG4gICAgc2tpbGxOYW1lOiAnd2VhcG9uJyxcbiAgICBlbXB0eTogJy9za2lsbHMvd2VhcG9uLnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdza2lsbEEnLFxuICAgIGVtcHR5OiAnL3NraWxscy9lbXB0eS5wbmcnLFxuICB9LFxuICB7XG4gICAgc2tpbGxOYW1lOiAnc2tpbGxCJyxcbiAgICBlbXB0eTogJy9za2lsbHMvZW1wdHkucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NraWxsQycsXG4gICAgZW1wdHk6ICcvc2tpbGxzL2VtcHR5LnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdzZWFsJyxcbiAgICBlbXB0eTogJy9za2lsbHMvc2VhbC1lbXB0eS5wbmcnLFxuICB9LFxuXTtcbmV4cG9ydCB0eXBlIFRIb29rUHJvcHMgPSB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICByYXJpdHk6IDUgfCA0O1xuICBpdjogc3RyaW5nO1xuICBtZXJnZTogbnVtYmVyO1xuICBkcmFnb25mbG93ZXI6IG51bWJlcjtcbiAgYmxlc3Npbmc6IHN0cmluZztcbiAgc3VwcG9ydDogYm9vbGVhbjtcbiAgYXJlbmE6IGJvb2xlYW47XG4gIHJlc3BsZW5kZW50OiBib29sZWFuO1xuICAvKiogc2tpbGxzICovXG4gIHdlYXBvbjogc3RyaW5nO1xuICByZWZpbmU6IHN0cmluZztcbiAgYXNzaXN0OiBzdHJpbmc7XG4gIHNwZWNpYWw6IHN0cmluZztcbiAgc2tpbGxBOiBzdHJpbmc7XG4gIHNraWxsQjogc3RyaW5nO1xuICBza2lsbEM6IHN0cmluZztcbiAgc2VhbDogc3RyaW5nO1xuICAvKiogZWRpdG9yICovXG4gIGx2MTogYm9vbGVhbjtcbn07XG5cbmZ1bmN0aW9uIHVzZUhvb2tzKHtcbiAgaGVyb0lkLFxuICByYXJpdHksXG4gIGl2LFxuICBtZXJnZSxcbiAgZHJhZ29uZmxvd2VyLFxuICBibGVzc2luZyxcbiAgc3VwcG9ydCxcbiAgYXJlbmEsXG4gIHJlc3BsZW5kZW50LFxuICAvKiogc2tpbGxzICovXG4gIHdlYXBvbixcbiAgcmVmaW5lLFxuICBhc3Npc3QsXG4gIHNwZWNpYWwsXG4gIHNraWxsQSxcbiAgc2tpbGxCLFxuICBza2lsbEMsXG4gIHNlYWwsXG4gIC8qKiBlZGl0b3IgKi9cbiAgbHYxLFxufTogVEhvb2tQcm9wcykge1xuICBjb25zdCBkYiA9IHVzZUZlaERCKCk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgdGV4dENhbnZhcyA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGhlcm9SZWYgPSB1c2VSZWY8VEhlcm8+KCk7XG4gIGNvbnN0IHNraWxsSW5mb3NSZWYgPSB1c2VSZWY8e1xuICAgIG5hbWVzOiBUU2tpbGxJZHM7XG4gICAgc3RhdHM6IHtcbiAgICAgIGhwOiBudW1iZXI7XG4gICAgICBhdGs6IG51bWJlcjtcbiAgICAgIHNwZDogbnVtYmVyO1xuICAgICAgZGVmOiBudW1iZXI7XG4gICAgICByZXM6IG51bWJlcjtcbiAgICB9O1xuICAgIGFjY2VsZXJhdGU6IG51bWJlcjtcbiAgICBzcGVjaWFsQ0Q6IG51bWJlcjtcbiAgICBzcHQ6IG51bWJlcjtcbiAgICBic3Q6IG51bWJlcjtcbiAgfT4oKTtcbiAgY29uc3Qgc3RhdHNJbmZvc1JlZiA9IHVzZVJlZjx7XG4gICAgc3RhdHM6IHsgW3N0YXRLZXk6IHN0cmluZ106IG51bWJlciB9O1xuICAgIGJzdDogbnVtYmVyO1xuICB9PigpO1xuICBjb25zdCByYXJpdHlSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuICBjb25zdCBpdlJlZiA9IHVzZVJlZjxzdHJpbmc+KCk7XG4gIGNvbnN0IG1lcmdlUmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgZHJhZ29uZmxvd2VyUmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgYmxlc3NpbmdSZWYgPSB1c2VSZWY8c3RyaW5nPigpO1xuICBjb25zdCBzdXBwb3J0UmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IGFyZW5hUmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHJlc3BsZW5kZW50UmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHJlZmluZVJlZiA9IHVzZVJlZjxzdHJpbmc+KCk7XG4gIGNvbnN0IGx2MVJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCBzY29yZVJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG5cbiAgY29uc3QgaGVybyA9IHVzZU1lbW8oKCkgPT4gZ2V0SGVybyhkYi5oZXJvREIsIGhlcm9JZCksIFtkYi5oZXJvREIsIGhlcm9JZF0pO1xuXG4gIGNvbnN0IHNraWxscyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHsgd2VhcG9uLCBhc3Npc3QsIHNwZWNpYWwsIHNraWxsQSwgc2tpbGxCLCBza2lsbEMsIHNlYWwgfSksXG4gICAgW3dlYXBvbiwgYXNzaXN0LCBzcGVjaWFsLCBza2lsbEEsIHNraWxsQiwgc2tpbGxDLCBzZWFsXVxuICApO1xuICBjb25zdCBzdGF0cyA9IGhlcm8uc3RhdHM7XG4gIGNvbnN0IHNraWxsSW5mb3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBnZXRTa2lsbEluZm9zKHtcbiAgICAgICAgaGVyb0RCOiBkYi5oZXJvREIsXG4gICAgICAgIHdlYXBvbkRCOiBkYi53ZWFwb25EQixcbiAgICAgICAgYXNzaXN0REI6IGRiLmFzc2lzdERCLFxuICAgICAgICBzcGVjaWFsREI6IGRiLnNwZWNpYWxEQixcbiAgICAgICAgc2tpbGxBREI6IGRiLnNraWxsQURCLFxuICAgICAgICBza2lsbEJEQjogZGIuc2tpbGxCREIsXG4gICAgICAgIHNraWxsQ0RCOiBkYi5za2lsbENEQixcbiAgICAgICAgc2VhbERCOiBkYi5zZWFsREIsXG4gICAgICAgIHNraWxscyxcbiAgICAgICAgaGVyb0lkLFxuICAgICAgICByZWZpbmUsXG4gICAgICAgIHJhcml0eSxcbiAgICAgIH0pLFxuICAgIFtcbiAgICAgIHNraWxscyxcbiAgICAgIGhlcm9JZCxcbiAgICAgIHJlZmluZSxcbiAgICAgIHJhcml0eSxcbiAgICAgIGRiLmhlcm9EQixcbiAgICAgIGRiLndlYXBvbkRCLFxuICAgICAgZGIuYXNzaXN0REIsXG4gICAgICBkYi5zcGVjaWFsREIsXG4gICAgICBkYi5za2lsbEFEQixcbiAgICAgIGRiLnNraWxsQkRCLFxuICAgICAgZGIuc2tpbGxDREIsXG4gICAgICBkYi5zZWFsREIsXG4gICAgXVxuICApO1xuXG4gIGNvbnN0IHN0YXRzSW5mb3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBnZXRTdGF0cyhcbiAgICAgICAgcmFyaXR5LFxuICAgICAgICBzdGF0cyxcbiAgICAgICAgaXYsXG4gICAgICAgIG1lcmdlLFxuICAgICAgICBzdXBwb3J0LFxuICAgICAgICBza2lsbEluZm9zLnN0YXRzLFxuICAgICAgICBsdjEsXG4gICAgICAgIGFyZW5hLFxuICAgICAgICBkcmFnb25mbG93ZXIsXG4gICAgICAgIHJlc3BsZW5kZW50XG4gICAgICApLFxuICAgIFtcbiAgICAgIHJhcml0eSxcbiAgICAgIHN0YXRzLFxuICAgICAgaXYsXG4gICAgICBtZXJnZSxcbiAgICAgIHN1cHBvcnQsXG4gICAgICBza2lsbEluZm9zLFxuICAgICAgbHYxLFxuICAgICAgYXJlbmEsXG4gICAgICBkcmFnb25mbG93ZXIsXG4gICAgICByZXNwbGVuZGVudCxcbiAgICBdXG4gICk7XG4gIGNvbnN0IHNjb3JlID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgYXJlbmFTY29yZSh7XG4gICAgICAgIHJhcml0eSxcbiAgICAgICAgbWVyZ2UsXG4gICAgICAgIGJzdDogTWF0aC5tYXgoc3RhdHNJbmZvcy5ic3QsIHNraWxsSW5mb3MuYnN0LCBoZXJvLmJzdCB8fCAwKSxcbiAgICAgICAgc3B0OiBza2lsbEluZm9zLnNwdCxcbiAgICAgIH0pLFxuICAgIFtyYXJpdHksIG1lcmdlLCBzdGF0c0luZm9zLmJzdCwgc2tpbGxJbmZvcy5ic3QsIHNraWxsSW5mb3Muc3B0LCBoZXJvXVxuICApO1xuXG4gIGNvbnN0IGxvYWRlcnMgPSB1c2VSZWY8eyBbaW1hZ2VJZDogc3RyaW5nXTogSW1hZ2VMb2FkZXIgfT4oe30pO1xuXG4gIGNvbnN0IGRyYXcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFjYW52YXNSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBiYWNrZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmQyLFxuICAgICAgcG9ydHJhaXQsXG4gICAgICByYXJpdHlBdGxhcyxcbiAgICAgIHdlYXBvblR5cGVBdGxhcyxcbiAgICAgIG1vdmVUeXBlQXRsYXMsXG4gICAgICBkcmFnb25mbG93ZXJBdGxhcyxcbiAgICAgIHN1cHBvcnRBdGxhcyxcbiAgICAgIGJsZXNzaW5nQXRsYXMsXG4gICAgICBudW1iZXJBdGxhcyxcbiAgICAgIHdlYXBvbkljb24sXG4gICAgICBhc3Npc3RJY29uLFxuICAgICAgc3BlY2lhbEljb24sXG4gICAgICB0ZXh0QSxcbiAgICAgIHRleHRCLFxuICAgICAgdGV4dEMsXG4gICAgICB0ZXh0UyxcbiAgICAgIGFyZW5hSWNvbixcbiAgICAgIHNraWxsQUljb24sXG4gICAgICBza2lsbEJJY29uLFxuICAgICAgc2tpbGxDSWNvbixcbiAgICAgIHNlYWxJY29uLFxuICAgICAgcmVzcGxlbmRlbnRJY29uLFxuICAgIH0gPSBsb2FkZXJzLmN1cnJlbnQ7XG4gICAgY29uc3QgeyB0aXRsZSwgbmFtZSwgd2VhcG9uVHlwZSwgbW92ZVR5cGUgfSA9IGhlcm9SZWYuY3VycmVudDtcbiAgICBjb25zdCBoYXNCbGVzc2luZyA9ICEhaGVyb1JlZi5jdXJyZW50LmJsZXNzaW5nIHx8ICEhYmxlc3NpbmdSZWYuY3VycmVudDtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCA1NDAsIDk2MCk7XG5cbiAgICBpZiAoYmFja2dyb3VuZC5sb2FkZWQpIHtcbiAgICAgIGRyYXdCYWNrZ3JvdW5kKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZC5pbWFnZSxcbiAgICAgICAgc3VwcG9ydDogc3VwcG9ydFJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwb3J0cmFpdC5sb2FkZWQpIHtcbiAgICAgIGRyYXdQb3J0cmFpdCh7IGNvbnRleHQsIHBvcnRyYWl0OiBwb3J0cmFpdC5pbWFnZSB9KTtcbiAgICB9XG4gICAgaWYgKGZvcmVncm91bmQubG9hZGVkKSB7XG4gICAgICBkcmF3Rm9yZWdyb3VuZCh7IGNvbnRleHQsIGZvcmVncm91bmQ6IGZvcmVncm91bmQuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChmb3JlZ3JvdW5kMi5sb2FkZWQpIHtcbiAgICAgIGRyYXdGb3JlZ3JvdW5kMih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGZvcmVncm91bmQyOiBmb3JlZ3JvdW5kMi5pbWFnZSxcbiAgICAgICAgZHJhZ29uZmxvd2VyOiBkcmFnb25mbG93ZXJSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocmFyaXR5QXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3UmFyaXR5KHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgcmFyaXR5QXRsYXM6IHJhcml0eUF0bGFzLmltYWdlLFxuICAgICAgICByYXJpdHk6IHJhcml0eVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh3ZWFwb25UeXBlQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3V2VhcG9uVHlwZSh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHdlYXBvblR5cGVBdGxhczogd2VhcG9uVHlwZUF0bGFzLmltYWdlLFxuICAgICAgICB3ZWFwb25UeXBlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtb3ZlVHlwZUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd01vdmVUeXBlKHsgY29udGV4dCwgbW92ZVR5cGVBdGxhczogbW92ZVR5cGVBdGxhcy5pbWFnZSwgbW92ZVR5cGUgfSk7XG4gICAgfVxuICAgIGlmIChkcmFnb25mbG93ZXJBdGxhcy5sb2FkZWQgJiYgbnVtYmVyQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3RHJhZ29uZmxvd2VyKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZHJhZ29uZmxvd2VyQXRsYXM6IGRyYWdvbmZsb3dlckF0bGFzLmltYWdlLFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIG1vdmVUeXBlLFxuICAgICAgICBkcmFnb25mbG93ZXI6IGRyYWdvbmZsb3dlclJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzdXBwb3J0QXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3U3VwcG9ydCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN1cHBvcnRBdGxhczogc3VwcG9ydEF0bGFzLmltYWdlLFxuICAgICAgICBzdXBwb3J0OiBzdXBwb3J0UmVmLmN1cnJlbnQsXG4gICAgICAgIGhhc0JsZXNzaW5nLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChibGVzc2luZ0F0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0JsZXNzaW5nKHsgY29udGV4dCwgYmxlc3NpbmdBdGxhczogYmxlc3NpbmdBdGxhcy5pbWFnZSB9KTtcbiAgICB9XG4gICAgaWYgKG51bWJlckF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0xldmVsKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBsdjE6IGx2MVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3TWVyZ2Uoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIG1lcmdlOiBtZXJnZVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3U3RhdE51bWJlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgc2NvcmU6IHNjb3JlUmVmLmN1cnJlbnQsXG4gICAgICAgIHNic3Q6IE1hdGgubWF4KHNraWxsSW5mb3NSZWYuY3VycmVudC5ic3QsIGhlcm9SZWYuY3VycmVudC5ic3QpLFxuICAgICAgICAuLi5zdGF0c0luZm9zUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICAgIGRyYXdTcGVjaWFsTnVtYmVyKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBhY2NlbGVyYXRlOiBza2lsbEluZm9zUmVmLmN1cnJlbnQuYWNjZWxlcmF0ZSxcbiAgICAgICAgc3BlY2lhbENEOiBza2lsbEluZm9zUmVmLmN1cnJlbnQuc3BlY2lhbENELFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdTa2lsbEljb24oe1xuICAgICAgY29udGV4dCxcbiAgICAgIHdlYXBvbkljb24sXG4gICAgICBhc3Npc3RJY29uLFxuICAgICAgc3BlY2lhbEljb24sXG4gICAgICB0ZXh0QSxcbiAgICAgIHRleHRCLFxuICAgICAgdGV4dEMsXG4gICAgICB0ZXh0UyxcbiAgICAgIHNraWxsQUljb24sXG4gICAgICBza2lsbEJJY29uLFxuICAgICAgc2tpbGxDSWNvbixcbiAgICAgIHNlYWxJY29uLFxuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb250ZXh0ID0gdGV4dENhbnZhcy5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGV4dENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDEwODAsIDE5MjApO1xuICAgIGRyYXdTdGF0VGV4dCh7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIGl2OiBpdlJlZi5jdXJyZW50LFxuICAgICAgbWVyZ2U6IG1lcmdlUmVmLmN1cnJlbnQsXG4gICAgfSk7XG4gICAgZHJhd1NraWxsVGV4dCh7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIHJlZmluZTogcmVmaW5lUmVmLmN1cnJlbnQsXG4gICAgICAuLi5za2lsbEluZm9zUmVmLmN1cnJlbnQubmFtZXMsXG4gICAgfSk7XG4gICAgZHJhd0Rlc2NyaXB0aW9uKHtcbiAgICAgIGNhbnZhczogdGV4dENhbnZhcy5jdXJyZW50LFxuICAgICAgdGl0bGUsXG4gICAgICBuYW1lLFxuICAgIH0pO1xuICAgIGlmIChhcmVuYVJlZi5jdXJyZW50ICYmIGFyZW5hSWNvbikge1xuICAgICAgZHJhd0FyZW5hSWNvbih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGFyZW5hSWNvbjogYXJlbmFJY29uLmltYWdlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChyZXNwbGVuZGVudFJlZi5jdXJyZW50ICYmIHJlc3BsZW5kZW50SWNvbikge1xuICAgICAgZHJhd1Jlc3BsZW5kZW50SWNvbih7IGNvbnRleHQsIHJlc3BsZW5kZW50SWNvbjogcmVzcGxlbmRlbnRJY29uLmltYWdlIH0pO1xuICAgIH1cbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0ZXh0Q2FudmFzLmN1cnJlbnQsIDAsIDAsIDU0MCwgOTYwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50LndpZHRoID0gMTA4MDtcbiAgICB0ZXh0Q2FudmFzLmN1cnJlbnQuaGVpZ2h0ID0gMTkyMDtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW1hZ2VJZEFuZFNyYy5mb3JFYWNoKChbaW1hZ2VJZCwgaW1nU3JjXSkgPT4ge1xuICAgICAgbG9hZGVycy5jdXJyZW50W2ltYWdlSWRdID0gbmV3IEltYWdlTG9hZGVyKGRyYXcpO1xuICAgICAgbG9hZGVycy5jdXJyZW50W2ltYWdlSWRdLmxvYWQobWFwQmFzZVBhdGhVcmwoaW1nU3JjKSk7XG4gICAgfSk7XG4gIH0sIFtsb2FkZXJzLCBkcmF3XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwb3J0cmFpdCA9IHRvUmVzcGxlbmRlbnQoaGVyby5pZCwgcmVzcGxlbmRlbnQpO1xuICAgIGxvYWRlcnMuY3VycmVudC5wb3J0cmFpdC5sb2FkKG1hcEJhc2VQYXRoVXJsKGAvcG9ydHJhaXRzLyR7cG9ydHJhaXR9LnBuZ2ApKTtcbiAgICBjb25zdCBpY29ucyA9IGdldFNraWxsSWNvbnMoe1xuICAgICAgaGVyb0RCOiBkYi5oZXJvREIsXG4gICAgICB3ZWFwb25EQjogZGIud2VhcG9uREIsXG4gICAgICBhc3Npc3REQjogZGIuYXNzaXN0REIsXG4gICAgICBzcGVjaWFsREI6IGRiLnNwZWNpYWxEQixcbiAgICAgIHNraWxsQURCOiBkYi5za2lsbEFEQixcbiAgICAgIHNraWxsQkRCOiBkYi5za2lsbEJEQixcbiAgICAgIHNraWxsQ0RCOiBkYi5za2lsbENEQixcbiAgICAgIHNlYWxEQjogZGIuc2VhbERCLFxuICAgICAgc2tpbGxzLFxuICAgICAgaGVyb0lkOiBoZXJvLmlkLFxuICAgICAgcmVmaW5lLFxuICAgIH0pO1xuXG4gICAgZGVmYXVsdFNraWxsSWNvbnMuZm9yRWFjaCgoeyBza2lsbE5hbWUsIGVtcHR5IH0pID0+IHtcbiAgICAgIGxvYWRlcnMuY3VycmVudFtgJHtza2lsbE5hbWV9SWNvbmBdLmxvYWQoXG4gICAgICAgIG1hcEJhc2VQYXRoVXJsKGAke2ljb25zW3NraWxsTmFtZV0gfHwgZW1wdHl9YClcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgaGFzQmxlc3NpbmcgPVxuICAgICAgKGhlcm8uYmxlc3NpbmcgIT09ICctJyAmJiAhIWhlcm8uYmxlc3NpbmcpIHx8ICEhYmxlc3Npbmc7XG4gICAgbG9hZGVycy5jdXJyZW50LmJsZXNzaW5nQXRsYXMubG9hZChcbiAgICAgIGhhc0JsZXNzaW5nXG4gICAgICAgID8gbWFwQmFzZVBhdGhVcmwoYC9hc3NldHMvYmxlc3NpbmctJHtoZXJvLmJsZXNzaW5nIHx8IGJsZXNzaW5nfS5wbmdgKVxuICAgICAgICA6ICcnXG4gICAgKTtcbiAgfSwgW1xuICAgIGhlcm8sXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgc2tpbGxzLFxuICAgIHJlZmluZSxcbiAgICBibGVzc2luZyxcbiAgICBzdGF0c0luZm9zLFxuICAgIGRiLmhlcm9EQixcbiAgICBkYi53ZWFwb25EQixcbiAgICBkYi5hc3Npc3REQixcbiAgICBkYi5zcGVjaWFsREIsXG4gICAgZGIuc2tpbGxBREIsXG4gICAgZGIuc2tpbGxCREIsXG4gICAgZGIuc2tpbGxDREIsXG4gICAgZGIuc2VhbERCLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhlcm9SZWYuY3VycmVudCA9IGhlcm87XG4gICAgcmFyaXR5UmVmLmN1cnJlbnQgPSByYXJpdHk7XG4gICAgaXZSZWYuY3VycmVudCA9IGl2O1xuICAgIG1lcmdlUmVmLmN1cnJlbnQgPSBtZXJnZTtcbiAgICBkcmFnb25mbG93ZXJSZWYuY3VycmVudCA9IGRyYWdvbmZsb3dlcjtcbiAgICBibGVzc2luZ1JlZi5jdXJyZW50ID0gYmxlc3Npbmc7XG4gICAgc3VwcG9ydFJlZi5jdXJyZW50ID0gc3VwcG9ydDtcbiAgICBhcmVuYVJlZi5jdXJyZW50ID0gYXJlbmE7XG4gICAgcmVzcGxlbmRlbnRSZWYuY3VycmVudCA9IHJlc3BsZW5kZW50O1xuICAgIHJlZmluZVJlZi5jdXJyZW50ID0gcmVmaW5lO1xuICAgIGx2MVJlZi5jdXJyZW50ID0gbHYxO1xuICAgIHNjb3JlUmVmLmN1cnJlbnQgPSBzY29yZTtcbiAgICBza2lsbEluZm9zUmVmLmN1cnJlbnQgPSBza2lsbEluZm9zO1xuICAgIHN0YXRzSW5mb3NSZWYuY3VycmVudCA9IHN0YXRzSW5mb3M7XG4gICAgZHJhdygpO1xuICB9LCBbXG4gICAgaGVybyxcbiAgICByYXJpdHksXG4gICAgaXYsXG4gICAgbWVyZ2UsXG4gICAgZHJhZ29uZmxvd2VyLFxuICAgIGJsZXNzaW5nLFxuICAgIHN1cHBvcnQsXG4gICAgYXJlbmEsXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgcmVmaW5lLFxuICAgIGx2MSxcbiAgICBzY29yZSxcbiAgICBza2lsbEluZm9zLFxuICAgIHN0YXRzSW5mb3MsXG4gICAgZHJhdyxcbiAgXSk7XG5cbiAgY29uc3QgdHJpZ2dlckRvd25sb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFVUkwgPSBjYW52YXNSZWYuY3VycmVudC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gZGF0YVVSTDtcbiAgICBsaW5rLmRvd25sb2FkID0gYCR7aGVybz8ubmFtZX0tJHtoZXJvPy50aXRsZX0ucG5nYDtcbiAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgbGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gIH0sIFtoZXJvPy5uYW1lLCBoZXJvPy50aXRsZV0pO1xuXG4gIHJldHVybiB7XG4gICAgY2FudmFzUmVmLFxuICAgIHRyaWdnZXJEb3dubG9hZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSG9va3M7XG4iXSwic291cmNlUm9vdCI6IiJ9