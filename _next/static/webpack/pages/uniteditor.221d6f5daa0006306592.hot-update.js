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



var _s4 = $RefreshSig$();

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
  _s4();

  var _s3 = $RefreshSig$();

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
    var _s = $RefreshSig$();

    imageIdAndSrc.forEach(_s(function (_ref2) {
      _s();

      var _ref3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
          imageId = _ref3[0],
          imgSrc = _ref3[1];

      loaders.current[imageId] = new _ImageLoader__WEBPACK_IMPORTED_MODULE_10__["ImageLoader"](draw);
      loaders.current[imageId].load(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(imgSrc));
    }, "44XApveloz3rNdDE2mwCzwCRPv8=", false, function () {
      return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"]];
    }));
  }, [loaders, draw]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(_s3(function () {
    var _s2 = $RefreshSig$();

    _s3();

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
    defaultSkillIcons.forEach(_s2(function (_ref4) {
      _s2();

      var skillName = _ref4.skillName,
          empty = _ref4.empty;
      console.log(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"])("/".concat(icons[skillName] || empty)));
      loaders.current["".concat(skillName, "Icon")].load(Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"])("/".concat(icons[skillName] || empty)));
    }, "PP9J2O39lWsWe8xSr7qiEE0bjZs=", false, function () {
      return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"], _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"]];
    }));
    var hasBlessing = hero.blessing !== '-' && !!hero.blessing || !!blessing;
    loaders.current.blessingAtlas.load(hasBlessing ? Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"])("/assets/blessing-".concat(hero.blessing || blessing, ".png")) : '');
  }, "PP9J2O39lWsWe8xSr7qiEE0bjZs=", false, function () {
    return [_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"], _app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"]];
  }), [hero, resplendent, skills, refine, blessing, statsInfos, db.heroDB, db.weaponDB, db.assistDB, db.specialDB, db.skillADB, db.skillBDB, db.skillCDB, db.sealDB]);
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

_s4(useHooks, "ayIhNLCPFOyHy129rLzLZbYuJLc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9ob29rcy50c3giXSwibmFtZXMiOlsiaW1hZ2VJZEFuZFNyYyIsImRlZmF1bHRTa2lsbEljb25zIiwic2tpbGxOYW1lIiwiZW1wdHkiLCJ1c2VIb29rcyIsImhlcm9JZCIsInJhcml0eSIsIml2IiwibWVyZ2UiLCJkcmFnb25mbG93ZXIiLCJibGVzc2luZyIsInN1cHBvcnQiLCJhcmVuYSIsInJlc3BsZW5kZW50Iiwid2VhcG9uIiwicmVmaW5lIiwiYXNzaXN0Iiwic3BlY2lhbCIsInNraWxsQSIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJsdjEiLCJkYiIsInVzZUZlaERCIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidGV4dENhbnZhcyIsImhlcm9SZWYiLCJza2lsbEluZm9zUmVmIiwic3RhdHNJbmZvc1JlZiIsInJhcml0eVJlZiIsIml2UmVmIiwibWVyZ2VSZWYiLCJkcmFnb25mbG93ZXJSZWYiLCJibGVzc2luZ1JlZiIsInN1cHBvcnRSZWYiLCJhcmVuYVJlZiIsInJlc3BsZW5kZW50UmVmIiwicmVmaW5lUmVmIiwibHYxUmVmIiwic2NvcmVSZWYiLCJoZXJvIiwidXNlTWVtbyIsImdldEhlcm8iLCJoZXJvREIiLCJza2lsbHMiLCJzdGF0cyIsInNraWxsSW5mb3MiLCJnZXRTa2lsbEluZm9zIiwid2VhcG9uREIiLCJhc3Npc3REQiIsInNwZWNpYWxEQiIsInNraWxsQURCIiwic2tpbGxCREIiLCJza2lsbENEQiIsInNlYWxEQiIsInN0YXRzSW5mb3MiLCJnZXRTdGF0cyIsInNjb3JlIiwiYXJlbmFTY29yZSIsImJzdCIsIk1hdGgiLCJtYXgiLCJzcHQiLCJsb2FkZXJzIiwiZHJhdyIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImJhY2tncm91bmQiLCJmb3JlZ3JvdW5kIiwiZm9yZWdyb3VuZDIiLCJwb3J0cmFpdCIsInJhcml0eUF0bGFzIiwid2VhcG9uVHlwZUF0bGFzIiwibW92ZVR5cGVBdGxhcyIsImRyYWdvbmZsb3dlckF0bGFzIiwic3VwcG9ydEF0bGFzIiwiYmxlc3NpbmdBdGxhcyIsIm51bWJlckF0bGFzIiwid2VhcG9uSWNvbiIsImFzc2lzdEljb24iLCJzcGVjaWFsSWNvbiIsInRleHRBIiwidGV4dEIiLCJ0ZXh0QyIsInRleHRTIiwiYXJlbmFJY29uIiwic2tpbGxBSWNvbiIsInNraWxsQkljb24iLCJza2lsbENJY29uIiwic2VhbEljb24iLCJyZXNwbGVuZGVudEljb24iLCJ0aXRsZSIsIm5hbWUiLCJ3ZWFwb25UeXBlIiwibW92ZVR5cGUiLCJoYXNCbGVzc2luZyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwibG9hZGVkIiwiZHJhd0JhY2tncm91bmQiLCJpbWFnZSIsImRyYXdQb3J0cmFpdCIsImRyYXdGb3JlZ3JvdW5kIiwiZHJhd0ZvcmVncm91bmQyIiwiZHJhd1Jhcml0eSIsImRyYXdXZWFwb25UeXBlIiwiZHJhd01vdmVUeXBlIiwiZHJhd0RyYWdvbmZsb3dlciIsImRyYXdTdXBwb3J0IiwiZHJhd0JsZXNzaW5nIiwiZHJhd0xldmVsIiwiZHJhd01lcmdlIiwiZHJhd1N0YXROdW1iZXIiLCJzYnN0IiwiZHJhd1NwZWNpYWxOdW1iZXIiLCJhY2NlbGVyYXRlIiwic3BlY2lhbENEIiwiZHJhd1NraWxsSWNvbiIsInRleHRDb250ZXh0IiwiZHJhd1N0YXRUZXh0IiwiY2FudmFzIiwiZHJhd1NraWxsVGV4dCIsIm5hbWVzIiwiZHJhd0Rlc2NyaXB0aW9uIiwiZHJhd0FyZW5hSWNvbiIsImRyYXdSZXNwbGVuZGVudEljb24iLCJkcmF3SW1hZ2UiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImZvckVhY2giLCJpbWFnZUlkIiwiaW1nU3JjIiwiSW1hZ2VMb2FkZXIiLCJsb2FkIiwidXNlQmFzZVBhdGhVcmwiLCJ0b1Jlc3BsZW5kZW50IiwiaWQiLCJpY29ucyIsImdldFNraWxsSWNvbnMiLCJjb25zb2xlIiwibG9nIiwidHJpZ2dlckRvd25sb2FkIiwiZGF0YVVSTCIsInRvRGF0YVVSTCIsImxpbmsiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQURvQixFQUVwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQUZvQixFQUdwQixDQUFDLGFBQUQsRUFBZ0IseUJBQWhCLENBSG9CLEVBSXBCLENBQUMsVUFBRCxFQUFhLEVBQWIsQ0FKb0IsRUFLcEIsQ0FBQyxhQUFELEVBQWdCLG9CQUFoQixDQUxvQixFQU1wQixDQUFDLGlCQUFELEVBQW9CLHlCQUFwQixDQU5vQixFQU9wQixDQUFDLGVBQUQsRUFBa0IsdUJBQWxCLENBUG9CLEVBUXBCLENBQUMsbUJBQUQsRUFBc0IsMEJBQXRCLENBUm9CLEVBU3BCLENBQUMsY0FBRCxFQUFpQixxQkFBakIsQ0FUb0IsRUFVcEIsQ0FBQyxlQUFELEVBQWtCLEVBQWxCLENBVm9CLEVBV3BCLENBQUMsYUFBRCxFQUFnQixvQkFBaEIsQ0FYb0IsRUFZcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fab0IsRUFhcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fib0IsRUFjcEIsQ0FBQyxhQUFELEVBQWdCLHFCQUFoQixDQWRvQixFQWVwQixDQUFDLE9BQUQsRUFBVSxxQkFBVixDQWZvQixFQWdCcEIsQ0FBQyxPQUFE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QUduQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBa0IsUUFBSSxDQUFDQyxJQUFMLEdBQVlILE9BQVo7QUFDQUUsUUFBSSxDQUFDRSxRQUFMLGFBQW1COUcsSUFBbkIsYUFBbUJBLElBQW5CLHVCQUFtQkEsSUFBSSxDQUFFb0QsSUFBekIsY0FBaUNwRCxJQUFqQyxhQUFpQ0EsSUFBakMsdUJBQWlDQSxJQUFJLENBQUVtRCxLQUF2QztBQUNBeUQsUUFBSSxDQUFDRyxNQUFMLEdBQWMsUUFBZDtBQUNBdEIsWUFBUSxDQUFDdUIsSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxJQUExQjtBQUNBQSxRQUFJLENBQUNNLEtBQUw7QUFDQXpCLFlBQVEsQ0FBQ3VCLElBQVQsQ0FBY0csV0FBZCxDQUEwQlAsSUFBMUI7QUFDRCxHQVRrQyxFQVNoQyxDQUFDNUcsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVvRCxJQUFQLEVBQWFwRCxJQUFiLGFBQWFBLElBQWIsdUJBQWFBLElBQUksQ0FBRW1ELEtBQW5CLENBVGdDLENBQW5DO0FBV0EsU0FBTztBQUNMcEUsYUFBUyxFQUFUQSxTQURLO0FBRUwwSCxtQkFBZSxFQUFmQTtBQUZLLEdBQVA7QUFJRDs7SUFwWlEvSSxRO1VBc0JJb0Isd0Q7OztBQWdZRXBCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuMjIxZDZmNWRhYTAwMDYzMDY1OTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRIZXJvLCBUU2tpbGxJZHMgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgdXNlQmFzZVBhdGhVcmwgZnJvbSAnQC9hcHAvdXRpbHMvdXNlQmF0aFBhdGhVcmwnO1xuaW1wb3J0IHsgZ2V0U2tpbGxJY29ucywgZ2V0U2tpbGxJbmZvcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHsgZ2V0U3RhdHMgfSBmcm9tICdAL2FwcC91dGlscy9zdGF0cyc7XG5pbXBvcnQgYXJlbmFTY29yZSBmcm9tICdAL2FwcC91dGlscy9hcmVuYXNjb3JlJztcbmltcG9ydCB7IHRvUmVzcGxlbmRlbnQgfSBmcm9tICdAL2FwcC91dGlscy9yZXNwbGVuZGVudCc7XG5pbXBvcnQgeyBnZXRIZXJvIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5pbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vSW1hZ2VMb2FkZXInO1xuaW1wb3J0IGRyYXdCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZC9kcmF3JztcbmltcG9ydCBkcmF3UG9ydHJhaXQgZnJvbSAnLi9Qb3J0cmFpdC9kcmF3JztcbmltcG9ydCBkcmF3Rm9yZWdyb3VuZCBmcm9tICcuL0ZvcmVncm91bmQvZHJhdyc7XG5pbXBvcnQgZHJhd0ZvcmVncm91bmQyIGZyb20gJy4vRm9yZWdyb3VuZDIvZHJhdyc7XG5pbXBvcnQgZHJhd1Jhcml0eSBmcm9tICcuL1Jhcml0eS9kcmF3JztcbmltcG9ydCBkcmF3V2VhcG9uVHlwZSBmcm9tICcuL1dlYXBvblR5cGUvZHJhdyc7XG5pbXBvcnQgZHJhd01vdmVUeXBlIGZyb20gJy4vTW92ZVR5cGUvZHJhdyc7XG5pbXBvcnQgZHJhd0RyYWdvbmZsb3dlciBmcm9tICcuL0RyYWdvbkZsb3dlci9kcmF3JztcbmltcG9ydCBkcmF3U3VwcG9ydCBmcm9tICcuL1N1cHBvcnQvZHJhdyc7XG5pbXBvcnQgZHJhd0JsZXNzaW5nIGZyb20gJy4vQmxlc3NpbmcvZHJhdyc7XG5pbXBvcnQgZHJhd1NraWxsSWNvbiBmcm9tICcuL1NraWxsSWNvbi9kcmF3JztcbmltcG9ydCBkcmF3TGV2ZWwgZnJvbSAnLi9MZXZlbC9kcmF3JztcbmltcG9ydCBkcmF3TWVyZ2UgZnJvbSAnLi9NZXJnZS9kcmF3JztcbmltcG9ydCBkcmF3U3RhdE51bWJlciBmcm9tICcuL1N0YXROdW1iZXIvZHJhdyc7XG5pbXBvcnQgZHJhd1NwZWNpYWxOdW1iZXIgZnJvbSAnLi9TcGVjaWFsTnVtYmVyL2RyYXcnO1xuaW1wb3J0IGRyYXdTdGF0VGV4dCBmcm9tICcuL1N0YXRUZXh0L2RyYXcnO1xuaW1wb3J0IGRyYXdTa2lsbFRleHQgZnJvbSAnLi9Ta2lsbFRleHQvZHJhdyc7XG5pbXBvcnQgZHJhd0Rlc2NyaXB0aW9uIGZyb20gJy4vRGVzY3JpcHRpb25UZXh0L2RyYXcnO1xuaW1wb3J0IGRyYXdBcmVuYUljb24gZnJvbSAnLi9BcmVuYUljb24vZHJhdyc7XG5pbXBvcnQgZHJhd1Jlc3BsZW5kZW50SWNvbiBmcm9tICcuL1Jlc3BsZW5kZW50SWNvbi9kcmF3JztcblxuY29uc3QgaW1hZ2VJZEFuZFNyYyA9IFtcbiAgWydiYWNrZ3JvdW5kJywgJy9hc3NldHMvYmFja2dyb3VuZC5qcGcnXSxcbiAgWydmb3JlZ3JvdW5kJywgJy9hc3NldHMvZm9yZWdyb3VuZC5wbmcnXSxcbiAgWydmb3JlZ3JvdW5kMicsICcvYXNzZXRzL2ZvcmVncm91bmQyLnBuZyddLFxuICBbJ3BvcnRyYWl0JywgJyddLFxuICBbJ3Jhcml0eUF0bGFzJywgJy9hc3NldHMvcmFyaXR5LnBuZyddLFxuICBbJ3dlYXBvblR5cGVBdGxhcycsICcvYXNzZXRzL3dlYXBvbi10eXBlLnBuZyddLFxuICBbJ21vdmVUeXBlQXRsYXMnLCAnL2Fzc2V0cy9tb3ZlLXR5cGUucG5nJ10sXG4gIFsnZHJhZ29uZmxvd2VyQXRsYXMnLCAnL2Fzc2V0cy9kcmFnb25mbG93ZXIucG5nJ10sXG4gIFsnc3VwcG9ydEF0bGFzJywgJy9hc3NldHMvc3VwcG9ydC5wbmcnXSxcbiAgWydibGVzc2luZ0F0bGFzJywgJyddLFxuICBbJ251bWJlckF0bGFzJywgJy9hc3NldHMvbnVtYmVyLnBuZyddLFxuICBbJ3dlYXBvbkljb24nLCAnL3NraWxscy93ZWFwb24ucG5nJ10sXG4gIFsnYXNzaXN0SWNvbicsICcvc2tpbGxzL2Fzc2lzdC5wbmcnXSxcbiAgWydzcGVjaWFsSWNvbicsICcvc2tpbGxzL3NwZWNpYWwucG5nJ10sXG4gIFsndGV4dEEnLCAnL2Fzc2V0cy9za2lsbC1hLnBuZyddLFxuICBbJ3RleHRCJywgJy9hc3NldHMvc2tpbGwtYi5wbmcnXSxcbiAgWyd0ZXh0QycsICcvYXNzZXRzL3NraWxsLWMucG5nJ10sXG4gIFsndGV4dFMnLCAnL2Fzc2V0cy9za2lsbC1zLnBuZyddLFxuICBbJ2FyZW5hSWNvbicsICcvYXNzZXRzL0FyZW5hX0Nyb3duLnBuZyddLFxuICBbJ3NraWxsQUljb24nLCAnJ10sXG4gIFsnc2tpbGxCSWNvbicsICcnXSxcbiAgWydza2lsbENJY29uJywgJyddLFxuICBbJ3NlYWxJY29uJywgJyddLFxuICBbJ3Jlc3BsZW5kZW50SWNvbicsICcvYXNzZXRzL2dvZC13ZWFyLWwucG5nJ10sXG5dO1xuXG5jb25zdCBkZWZhdWx0U2tpbGxJY29ucyA9IFtcbiAge1xuICAgIHNraWxsTmFtZTogJ3dlYXBvbicsXG4gICAgZW1wdHk6ICcvc2tpbGxzL3dlYXBvbi5wbmcnLFxuICB9LFxuICB7XG4gICAgc2tpbGxOYW1lOiAnc2tpbGxBJyxcbiAgICBlbXB0eTogJy9za2lsbHMvZW1wdHkucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NraWxsQicsXG4gICAgZW1wdHk6ICcvc2tpbGxzL2VtcHR5LnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdza2lsbEMnLFxuICAgIGVtcHR5OiAnL3NraWxscy9lbXB0eS5wbmcnLFxuICB9LFxuICB7XG4gICAgc2tpbGxOYW1lOiAnc2VhbCcsXG4gICAgZW1wdHk6ICcvc2tpbGxzL3NlYWwtZW1wdHkucG5nJyxcbiAgfSxcbl07XG5leHBvcnQgdHlwZSBUSG9va1Byb3BzID0ge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgcmFyaXR5OiA1IHwgNDtcbiAgaXY6IHN0cmluZztcbiAgbWVyZ2U6IG51bWJlcjtcbiAgZHJhZ29uZmxvd2VyOiBudW1iZXI7XG4gIGJsZXNzaW5nOiBzdHJpbmc7XG4gIHN1cHBvcnQ6IGJvb2xlYW47XG4gIGFyZW5hOiBib29sZWFuO1xuICByZXNwbGVuZGVudDogYm9vbGVhbjtcbiAgLyoqIHNraWxscyAqL1xuICB3ZWFwb246IHN0cmluZztcbiAgcmVmaW5lOiBzdHJpbmc7XG4gIGFzc2lzdDogc3RyaW5nO1xuICBzcGVjaWFsOiBzdHJpbmc7XG4gIHNraWxsQTogc3RyaW5nO1xuICBza2lsbEI6IHN0cmluZztcbiAgc2tpbGxDOiBzdHJpbmc7XG4gIHNlYWw6IHN0cmluZztcbiAgLyoqIGVkaXRvciAqL1xuICBsdjE6IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiB1c2VIb29rcyh7XG4gIGhlcm9JZCxcbiAgcmFyaXR5LFxuICBpdixcbiAgbWVyZ2UsXG4gIGRyYWdvbmZsb3dlcixcbiAgYmxlc3NpbmcsXG4gIHN1cHBvcnQsXG4gIGFyZW5hLFxuICByZXNwbGVuZGVudCxcbiAgLyoqIHNraWxscyAqL1xuICB3ZWFwb24sXG4gIHJlZmluZSxcbiAgYXNzaXN0LFxuICBzcGVjaWFsLFxuICBza2lsbEEsXG4gIHNraWxsQixcbiAgc2tpbGxDLFxuICBzZWFsLFxuICAvKiogZWRpdG9yICovXG4gIGx2MSxcbn06IFRIb29rUHJvcHMpIHtcbiAgY29uc3QgZGIgPSB1c2VGZWhEQigpO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHRleHRDYW52YXMgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBoZXJvUmVmID0gdXNlUmVmPFRIZXJvPigpO1xuICBjb25zdCBza2lsbEluZm9zUmVmID0gdXNlUmVmPHtcbiAgICBuYW1lczogVFNraWxsSWRzO1xuICAgIHN0YXRzOiB7XG4gICAgICBocDogbnVtYmVyO1xuICAgICAgYXRrOiBudW1iZXI7XG4gICAgICBzcGQ6IG51bWJlcjtcbiAgICAgIGRlZjogbnVtYmVyO1xuICAgICAgcmVzOiBudW1iZXI7XG4gICAgfTtcbiAgICBhY2NlbGVyYXRlOiBudW1iZXI7XG4gICAgc3BlY2lhbENEOiBudW1iZXI7XG4gICAgc3B0OiBudW1iZXI7XG4gICAgYnN0OiBudW1iZXI7XG4gIH0+KCk7XG4gIGNvbnN0IHN0YXRzSW5mb3NSZWYgPSB1c2VSZWY8e1xuICAgIHN0YXRzOiB7IFtzdGF0S2V5OiBzdHJpbmddOiBudW1iZXIgfTtcbiAgICBic3Q6IG51bWJlcjtcbiAgfT4oKTtcbiAgY29uc3QgcmFyaXR5UmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgaXZSZWYgPSB1c2VSZWY8c3RyaW5nPigpO1xuICBjb25zdCBtZXJnZVJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG4gIGNvbnN0IGRyYWdvbmZsb3dlclJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG4gIGNvbnN0IGJsZXNzaW5nUmVmID0gdXNlUmVmPHN0cmluZz4oKTtcbiAgY29uc3Qgc3VwcG9ydFJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCBhcmVuYVJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCByZXNwbGVuZGVudFJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCByZWZpbmVSZWYgPSB1c2VSZWY8c3RyaW5nPigpO1xuICBjb25zdCBsdjFSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oKTtcbiAgY29uc3Qgc2NvcmVSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuXG4gIGNvbnN0IGhlcm8gPSB1c2VNZW1vKCgpID0+IGdldEhlcm8oZGIuaGVyb0RCLCBoZXJvSWQpLCBbZGIuaGVyb0RCLCBoZXJvSWRdKTtcblxuICBjb25zdCBza2lsbHMgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7IHdlYXBvbiwgYXNzaXN0LCBzcGVjaWFsLCBza2lsbEEsIHNraWxsQiwgc2tpbGxDLCBzZWFsIH0pLFxuICAgIFt3ZWFwb24sIGFzc2lzdCwgc3BlY2lhbCwgc2tpbGxBLCBza2lsbEIsIHNraWxsQywgc2VhbF1cbiAgKTtcbiAgY29uc3Qgc3RhdHMgPSBoZXJvLnN0YXRzO1xuICBjb25zdCBza2lsbEluZm9zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2V0U2tpbGxJbmZvcyh7XG4gICAgICAgIGhlcm9EQjogZGIuaGVyb0RCLFxuICAgICAgICB3ZWFwb25EQjogZGIud2VhcG9uREIsXG4gICAgICAgIGFzc2lzdERCOiBkYi5hc3Npc3REQixcbiAgICAgICAgc3BlY2lhbERCOiBkYi5zcGVjaWFsREIsXG4gICAgICAgIHNraWxsQURCOiBkYi5za2lsbEFEQixcbiAgICAgICAgc2tpbGxCREI6IGRiLnNraWxsQkRCLFxuICAgICAgICBza2lsbENEQjogZGIuc2tpbGxDREIsXG4gICAgICAgIHNlYWxEQjogZGIuc2VhbERCLFxuICAgICAgICBza2lsbHMsXG4gICAgICAgIGhlcm9JZCxcbiAgICAgICAgcmVmaW5lLFxuICAgICAgICByYXJpdHksXG4gICAgICB9KSxcbiAgICBbXG4gICAgICBza2lsbHMsXG4gICAgICBoZXJvSWQsXG4gICAgICByZWZpbmUsXG4gICAgICByYXJpdHksXG4gICAgICBkYi5oZXJvREIsXG4gICAgICBkYi53ZWFwb25EQixcbiAgICAgIGRiLmFzc2lzdERCLFxuICAgICAgZGIuc3BlY2lhbERCLFxuICAgICAgZGIuc2tpbGxBREIsXG4gICAgICBkYi5za2lsbEJEQixcbiAgICAgIGRiLnNraWxsQ0RCLFxuICAgICAgZGIuc2VhbERCLFxuICAgIF1cbiAgKTtcblxuICBjb25zdCBzdGF0c0luZm9zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2V0U3RhdHMoXG4gICAgICAgIHJhcml0eSxcbiAgICAgICAgc3RhdHMsXG4gICAgICAgIGl2LFxuICAgICAgICBtZXJnZSxcbiAgICAgICAgc3VwcG9ydCxcbiAgICAgICAgc2tpbGxJbmZvcy5zdGF0cyxcbiAgICAgICAgbHYxLFxuICAgICAgICBhcmVuYSxcbiAgICAgICAgZHJhZ29uZmxvd2VyLFxuICAgICAgICByZXNwbGVuZGVudFxuICAgICAgKSxcbiAgICBbXG4gICAgICByYXJpdHksXG4gICAgICBzdGF0cyxcbiAgICAgIGl2LFxuICAgICAgbWVyZ2UsXG4gICAgICBzdXBwb3J0LFxuICAgICAgc2tpbGxJbmZvcyxcbiAgICAgIGx2MSxcbiAgICAgIGFyZW5hLFxuICAgICAgZHJhZ29uZmxvd2VyLFxuICAgICAgcmVzcGxlbmRlbnQsXG4gICAgXVxuICApO1xuICBjb25zdCBzY29yZSA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGFyZW5hU2NvcmUoe1xuICAgICAgICByYXJpdHksXG4gICAgICAgIG1lcmdlLFxuICAgICAgICBic3Q6IE1hdGgubWF4KHN0YXRzSW5mb3MuYnN0LCBza2lsbEluZm9zLmJzdCwgaGVyby5ic3QgfHwgMCksXG4gICAgICAgIHNwdDogc2tpbGxJbmZvcy5zcHQsXG4gICAgICB9KSxcbiAgICBbcmFyaXR5LCBtZXJnZSwgc3RhdHNJbmZvcy5ic3QsIHNraWxsSW5mb3MuYnN0LCBza2lsbEluZm9zLnNwdCwgaGVyb11cbiAgKTtcblxuICBjb25zdCBsb2FkZXJzID0gdXNlUmVmPHsgW2ltYWdlSWQ6IHN0cmluZ106IEltYWdlTG9hZGVyIH0+KHt9KTtcblxuICBjb25zdCBkcmF3ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgYmFja2dyb3VuZCxcbiAgICAgIGZvcmVncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kMixcbiAgICAgIHBvcnRyYWl0LFxuICAgICAgcmFyaXR5QXRsYXMsXG4gICAgICB3ZWFwb25UeXBlQXRsYXMsXG4gICAgICBtb3ZlVHlwZUF0bGFzLFxuICAgICAgZHJhZ29uZmxvd2VyQXRsYXMsXG4gICAgICBzdXBwb3J0QXRsYXMsXG4gICAgICBibGVzc2luZ0F0bGFzLFxuICAgICAgbnVtYmVyQXRsYXMsXG4gICAgICB3ZWFwb25JY29uLFxuICAgICAgYXNzaXN0SWNvbixcbiAgICAgIHNwZWNpYWxJY29uLFxuICAgICAgdGV4dEEsXG4gICAgICB0ZXh0QixcbiAgICAgIHRleHRDLFxuICAgICAgdGV4dFMsXG4gICAgICBhcmVuYUljb24sXG4gICAgICBza2lsbEFJY29uLFxuICAgICAgc2tpbGxCSWNvbixcbiAgICAgIHNraWxsQ0ljb24sXG4gICAgICBzZWFsSWNvbixcbiAgICAgIHJlc3BsZW5kZW50SWNvbixcbiAgICB9ID0gbG9hZGVycy5jdXJyZW50O1xuICAgIGNvbnN0IHsgdGl0bGUsIG5hbWUsIHdlYXBvblR5cGUsIG1vdmVUeXBlIH0gPSBoZXJvUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaGFzQmxlc3NpbmcgPSAhIWhlcm9SZWYuY3VycmVudC5ibGVzc2luZyB8fCAhIWJsZXNzaW5nUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgNTQwLCA5NjApO1xuXG4gICAgaWYgKGJhY2tncm91bmQubG9hZGVkKSB7XG4gICAgICBkcmF3QmFja2dyb3VuZCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQuaW1hZ2UsXG4gICAgICAgIHN1cHBvcnQ6IHN1cHBvcnRSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocG9ydHJhaXQubG9hZGVkKSB7XG4gICAgICBkcmF3UG9ydHJhaXQoeyBjb250ZXh0LCBwb3J0cmFpdDogcG9ydHJhaXQuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChmb3JlZ3JvdW5kLmxvYWRlZCkge1xuICAgICAgZHJhd0ZvcmVncm91bmQoeyBjb250ZXh0LCBmb3JlZ3JvdW5kOiBmb3JlZ3JvdW5kLmltYWdlIH0pO1xuICAgIH1cbiAgICBpZiAoZm9yZWdyb3VuZDIubG9hZGVkKSB7XG4gICAgICBkcmF3Rm9yZWdyb3VuZDIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBmb3JlZ3JvdW5kMjogZm9yZWdyb3VuZDIuaW1hZ2UsXG4gICAgICAgIGRyYWdvbmZsb3dlcjogZHJhZ29uZmxvd2VyUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJhcml0eUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1Jhcml0eSh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHJhcml0eUF0bGFzOiByYXJpdHlBdGxhcy5pbWFnZSxcbiAgICAgICAgcmFyaXR5OiByYXJpdHlSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAod2VhcG9uVHlwZUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1dlYXBvblR5cGUoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICB3ZWFwb25UeXBlQXRsYXM6IHdlYXBvblR5cGVBdGxhcy5pbWFnZSxcbiAgICAgICAgd2VhcG9uVHlwZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobW92ZVR5cGVBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdNb3ZlVHlwZSh7IGNvbnRleHQsIG1vdmVUeXBlQXRsYXM6IG1vdmVUeXBlQXRsYXMuaW1hZ2UsIG1vdmVUeXBlIH0pO1xuICAgIH1cbiAgICBpZiAoZHJhZ29uZmxvd2VyQXRsYXMubG9hZGVkICYmIG51bWJlckF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0RyYWdvbmZsb3dlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRyYWdvbmZsb3dlckF0bGFzOiBkcmFnb25mbG93ZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBtb3ZlVHlwZSxcbiAgICAgICAgZHJhZ29uZmxvd2VyOiBkcmFnb25mbG93ZXJSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydEF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1N1cHBvcnQoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdXBwb3J0QXRsYXM6IHN1cHBvcnRBdGxhcy5pbWFnZSxcbiAgICAgICAgc3VwcG9ydDogc3VwcG9ydFJlZi5jdXJyZW50LFxuICAgICAgICBoYXNCbGVzc2luZyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxlc3NpbmdBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdCbGVzc2luZyh7IGNvbnRleHQsIGJsZXNzaW5nQXRsYXM6IGJsZXNzaW5nQXRsYXMuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChudW1iZXJBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdMZXZlbCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgbHYxOiBsdjFSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgICAgZHJhd01lcmdlKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBtZXJnZTogbWVyZ2VSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgICAgZHJhd1N0YXROdW1iZXIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIHNjb3JlOiBzY29yZVJlZi5jdXJyZW50LFxuICAgICAgICBzYnN0OiBNYXRoLm1heChza2lsbEluZm9zUmVmLmN1cnJlbnQuYnN0LCBoZXJvUmVmLmN1cnJlbnQuYnN0KSxcbiAgICAgICAgLi4uc3RhdHNJbmZvc1JlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3U3BlY2lhbE51bWJlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgYWNjZWxlcmF0ZTogc2tpbGxJbmZvc1JlZi5jdXJyZW50LmFjY2VsZXJhdGUsXG4gICAgICAgIHNwZWNpYWxDRDogc2tpbGxJbmZvc1JlZi5jdXJyZW50LnNwZWNpYWxDRCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3U2tpbGxJY29uKHtcbiAgICAgIGNvbnRleHQsXG4gICAgICB3ZWFwb25JY29uLFxuICAgICAgYXNzaXN0SWNvbixcbiAgICAgIHNwZWNpYWxJY29uLFxuICAgICAgdGV4dEEsXG4gICAgICB0ZXh0QixcbiAgICAgIHRleHRDLFxuICAgICAgdGV4dFMsXG4gICAgICBza2lsbEFJY29uLFxuICAgICAgc2tpbGxCSWNvbixcbiAgICAgIHNraWxsQ0ljb24sXG4gICAgICBzZWFsSWNvbixcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0Q29udGV4dCA9IHRleHRDYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRleHRDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAxMDgwLCAxOTIwKTtcbiAgICBkcmF3U3RhdFRleHQoe1xuICAgICAgY2FudmFzOiB0ZXh0Q2FudmFzLmN1cnJlbnQsXG4gICAgICBpdjogaXZSZWYuY3VycmVudCxcbiAgICAgIG1lcmdlOiBtZXJnZVJlZi5jdXJyZW50LFxuICAgIH0pO1xuICAgIGRyYXdTa2lsbFRleHQoe1xuICAgICAgY2FudmFzOiB0ZXh0Q2FudmFzLmN1cnJlbnQsXG4gICAgICByZWZpbmU6IHJlZmluZVJlZi5jdXJyZW50LFxuICAgICAgLi4uc2tpbGxJbmZvc1JlZi5jdXJyZW50Lm5hbWVzLFxuICAgIH0pO1xuICAgIGRyYXdEZXNjcmlwdGlvbih7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIHRpdGxlLFxuICAgICAgbmFtZSxcbiAgICB9KTtcbiAgICBpZiAoYXJlbmFSZWYuY3VycmVudCAmJiBhcmVuYUljb24pIHtcbiAgICAgIGRyYXdBcmVuYUljb24oe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBhcmVuYUljb246IGFyZW5hSWNvbi5pbWFnZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocmVzcGxlbmRlbnRSZWYuY3VycmVudCAmJiByZXNwbGVuZGVudEljb24pIHtcbiAgICAgIGRyYXdSZXNwbGVuZGVudEljb24oeyBjb250ZXh0LCByZXNwbGVuZGVudEljb246IHJlc3BsZW5kZW50SWNvbi5pbWFnZSB9KTtcbiAgICB9XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGV4dENhbnZhcy5jdXJyZW50LCAwLCAwLCA1NDAsIDk2MCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRleHRDYW52YXMuY3VycmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRleHRDYW52YXMuY3VycmVudC53aWR0aCA9IDEwODA7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50LmhlaWdodCA9IDE5MjA7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGltYWdlSWRBbmRTcmMuZm9yRWFjaCgoW2ltYWdlSWQsIGltZ1NyY10pID0+IHtcbiAgICAgIGxvYWRlcnMuY3VycmVudFtpbWFnZUlkXSA9IG5ldyBJbWFnZUxvYWRlcihkcmF3KTtcbiAgICAgIGxvYWRlcnMuY3VycmVudFtpbWFnZUlkXS5sb2FkKHVzZUJhc2VQYXRoVXJsKGltZ1NyYykpO1xuICAgIH0pO1xuICB9LCBbbG9hZGVycywgZHJhd10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcG9ydHJhaXQgPSB0b1Jlc3BsZW5kZW50KGhlcm8uaWQsIHJlc3BsZW5kZW50KTtcbiAgICBsb2FkZXJzLmN1cnJlbnQucG9ydHJhaXQubG9hZCh1c2VCYXNlUGF0aFVybChgL3BvcnRyYWl0cy8ke3BvcnRyYWl0fS5wbmdgKSk7XG4gICAgY29uc3QgaWNvbnMgPSBnZXRTa2lsbEljb25zKHtcbiAgICAgIGhlcm9EQjogZGIuaGVyb0RCLFxuICAgICAgd2VhcG9uREI6IGRiLndlYXBvbkRCLFxuICAgICAgYXNzaXN0REI6IGRiLmFzc2lzdERCLFxuICAgICAgc3BlY2lhbERCOiBkYi5zcGVjaWFsREIsXG4gICAgICBza2lsbEFEQjogZGIuc2tpbGxBREIsXG4gICAgICBza2lsbEJEQjogZGIuc2tpbGxCREIsXG4gICAgICBza2lsbENEQjogZGIuc2tpbGxDREIsXG4gICAgICBzZWFsREI6IGRiLnNlYWxEQixcbiAgICAgIHNraWxscyxcbiAgICAgIGhlcm9JZDogaGVyby5pZCxcbiAgICAgIHJlZmluZSxcbiAgICB9KTtcblxuICAgIGRlZmF1bHRTa2lsbEljb25zLmZvckVhY2goKHsgc2tpbGxOYW1lLCBlbXB0eSB9KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh1c2VCYXNlUGF0aFVybChgLyR7aWNvbnNbc2tpbGxOYW1lXSB8fCBlbXB0eX1gKSk7XG4gICAgICBsb2FkZXJzLmN1cnJlbnRbYCR7c2tpbGxOYW1lfUljb25gXS5sb2FkKFxuICAgICAgICB1c2VCYXNlUGF0aFVybChgLyR7aWNvbnNbc2tpbGxOYW1lXSB8fCBlbXB0eX1gKVxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBoYXNCbGVzc2luZyA9XG4gICAgICAoaGVyby5ibGVzc2luZyAhPT0gJy0nICYmICEhaGVyby5ibGVzc2luZykgfHwgISFibGVzc2luZztcbiAgICBsb2FkZXJzLmN1cnJlbnQuYmxlc3NpbmdBdGxhcy5sb2FkKFxuICAgICAgaGFzQmxlc3NpbmdcbiAgICAgICAgPyB1c2VCYXNlUGF0aFVybChgL2Fzc2V0cy9ibGVzc2luZy0ke2hlcm8uYmxlc3NpbmcgfHwgYmxlc3Npbmd9LnBuZ2ApXG4gICAgICAgIDogJydcbiAgICApO1xuICB9LCBbXG4gICAgaGVybyxcbiAgICByZXNwbGVuZGVudCxcbiAgICBza2lsbHMsXG4gICAgcmVmaW5lLFxuICAgIGJsZXNzaW5nLFxuICAgIHN0YXRzSW5mb3MsXG4gICAgZGIuaGVyb0RCLFxuICAgIGRiLndlYXBvbkRCLFxuICAgIGRiLmFzc2lzdERCLFxuICAgIGRiLnNwZWNpYWxEQixcbiAgICBkYi5za2lsbEFEQixcbiAgICBkYi5za2lsbEJEQixcbiAgICBkYi5za2lsbENEQixcbiAgICBkYi5zZWFsREIsXG4gIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGVyb1JlZi5jdXJyZW50ID0gaGVybztcbiAgICByYXJpdHlSZWYuY3VycmVudCA9IHJhcml0eTtcbiAgICBpdlJlZi5jdXJyZW50ID0gaXY7XG4gICAgbWVyZ2VSZWYuY3VycmVudCA9IG1lcmdlO1xuICAgIGRyYWdvbmZsb3dlclJlZi5jdXJyZW50ID0gZHJhZ29uZmxvd2VyO1xuICAgIGJsZXNzaW5nUmVmLmN1cnJlbnQgPSBibGVzc2luZztcbiAgICBzdXBwb3J0UmVmLmN1cnJlbnQgPSBzdXBwb3J0O1xuICAgIGFyZW5hUmVmLmN1cnJlbnQgPSBhcmVuYTtcbiAgICByZXNwbGVuZGVudFJlZi5jdXJyZW50ID0gcmVzcGxlbmRlbnQ7XG4gICAgcmVmaW5lUmVmLmN1cnJlbnQgPSByZWZpbmU7XG4gICAgbHYxUmVmLmN1cnJlbnQgPSBsdjE7XG4gICAgc2NvcmVSZWYuY3VycmVudCA9IHNjb3JlO1xuICAgIHNraWxsSW5mb3NSZWYuY3VycmVudCA9IHNraWxsSW5mb3M7XG4gICAgc3RhdHNJbmZvc1JlZi5jdXJyZW50ID0gc3RhdHNJbmZvcztcbiAgICBkcmF3KCk7XG4gIH0sIFtcbiAgICBoZXJvLFxuICAgIHJhcml0eSxcbiAgICBpdixcbiAgICBtZXJnZSxcbiAgICBkcmFnb25mbG93ZXIsXG4gICAgYmxlc3NpbmcsXG4gICAgc3VwcG9ydCxcbiAgICBhcmVuYSxcbiAgICByZXNwbGVuZGVudCxcbiAgICByZWZpbmUsXG4gICAgbHYxLFxuICAgIHNjb3JlLFxuICAgIHNraWxsSW5mb3MsXG4gICAgc3RhdHNJbmZvcyxcbiAgICBkcmF3LFxuICBdKTtcblxuICBjb25zdCB0cmlnZ2VyRG93bmxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgZGF0YVVSTCA9IGNhbnZhc1JlZi5jdXJyZW50LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSBkYXRhVVJMO1xuICAgIGxpbmsuZG93bmxvYWQgPSBgJHtoZXJvPy5uYW1lfS0ke2hlcm8/LnRpdGxlfS5wbmdgO1xuICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgfSwgW2hlcm8/Lm5hbWUsIGhlcm8/LnRpdGxlXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjYW52YXNSZWYsXG4gICAgdHJpZ2dlckRvd25sb2FkLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VIb29rcztcbiJdLCJzb3VyY2VSb290IjoiIn0=