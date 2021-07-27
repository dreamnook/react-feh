self["webpackHotUpdate_N_E"]("pages/uniteditor",{

/***/ "./app/components/UnitViewer/hooks.tsx":
/*!*********************************************!*\
  !*** ./app/components/UnitViewer/hooks.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






























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
      mythicBonus1 = _ref.mythicBonus1,
      mythicBonus2 = _ref.mythicBonus2,
      mythicBonus3 = _ref.mythicBonus3,
      mythicBonus4 = _ref.mythicBonus4,
      weapon = _ref.weapon,
      refine = _ref.refine,
      assist = _ref.assist,
      special = _ref.special,
      skillA = _ref.skillA,
      skillB = _ref.skillB,
      skillC = _ref.skillC,
      seal = _ref.seal,
      lv1 = _ref.lv1;
  var db = (0,_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_9__.useFehDB)();
  var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var textCanvas = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var heroRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var skillInfosRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var statsInfosRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var rarityRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var ivRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var mergeRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var dragonflowerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var blessingRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var supportRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var arenaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var resplendentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var refineRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var lv1Ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var scoreRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var hero = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return (0,_app_utils_heroes__WEBPACK_IMPORTED_MODULE_8__.getHero)(db.heroDB, heroId);
  }, [db.heroDB, heroId]);
  var skills = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
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
  var skillInfos = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return (0,_app_utils_data_utils__WEBPACK_IMPORTED_MODULE_4__.getSkillInfos)({
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
  var statsInfos = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return (0,_app_utils_stats__WEBPACK_IMPORTED_MODULE_5__.getStats)({
      rarity: rarity,
      stats: stats,
      iv: iv,
      merge: merge,
      support: support,
      skillStats: skillInfos.stats,
      lv1: lv1,
      arena: arena,
      dragonflower: dragonflower,
      resplendent: resplendent,
      mythicBonus1: mythicBonus1,
      mythicBonus2: mythicBonus2,
      mythicBonus3: mythicBonus3,
      mythicBonus4: mythicBonus4
    });
  }, [rarity, stats, iv, merge, support, skillInfos, lv1, arena, dragonflower, resplendent, mythicBonus1, mythicBonus2, mythicBonus3, mythicBonus4]);
  var score = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return (0,_app_utils_arenascore__WEBPACK_IMPORTED_MODULE_6__.default)({
      rarity: rarity,
      merge: merge,
      bst: Math.max(statsInfos.bst, skillInfos.bst, hero.bst || 0),
      spt: skillInfos.spt
    });
  }, [rarity, merge, statsInfos.bst, skillInfos.bst, skillInfos.spt, hero]);
  var loaders = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});
  var draw = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
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
      (0,_Background_draw__WEBPACK_IMPORTED_MODULE_11__.default)({
        context: context,
        background: background.image,
        support: supportRef.current
      });
    }

    if (portrait.loaded) {
      (0,_Portrait_draw__WEBPACK_IMPORTED_MODULE_12__.default)({
        context: context,
        portrait: portrait.image
      });
    }

    if (foreground.loaded) {
      (0,_Foreground_draw__WEBPACK_IMPORTED_MODULE_13__.default)({
        context: context,
        foreground: foreground.image
      });
    }

    if (foreground2.loaded) {
      (0,_Foreground2_draw__WEBPACK_IMPORTED_MODULE_14__.default)({
        context: context,
        foreground2: foreground2.image,
        dragonflower: dragonflowerRef.current
      });
    }

    if (rarityAtlas.loaded) {
      (0,_Rarity_draw__WEBPACK_IMPORTED_MODULE_15__.default)({
        context: context,
        rarityAtlas: rarityAtlas.image,
        rarity: rarityRef.current
      });
    }

    if (weaponTypeAtlas.loaded) {
      (0,_WeaponType_draw__WEBPACK_IMPORTED_MODULE_16__.default)({
        context: context,
        weaponTypeAtlas: weaponTypeAtlas.image,
        weaponType: weaponType
      });
    }

    if (moveTypeAtlas.loaded) {
      (0,_MoveType_draw__WEBPACK_IMPORTED_MODULE_17__.default)({
        context: context,
        moveTypeAtlas: moveTypeAtlas.image,
        moveType: moveType
      });
    }

    if (dragonflowerAtlas.loaded && numberAtlas.loaded) {
      (0,_DragonFlower_draw__WEBPACK_IMPORTED_MODULE_18__.default)({
        context: context,
        dragonflowerAtlas: dragonflowerAtlas.image,
        numberAtlas: numberAtlas.image,
        moveType: moveType,
        dragonflower: dragonflowerRef.current
      });
    }

    if (supportAtlas.loaded) {
      (0,_Support_draw__WEBPACK_IMPORTED_MODULE_19__.default)({
        context: context,
        supportAtlas: supportAtlas.image,
        support: supportRef.current,
        hasBlessing: hasBlessing
      });
    }

    if (blessingAtlas.loaded) {
      (0,_Blessing_draw__WEBPACK_IMPORTED_MODULE_20__.default)({
        context: context,
        blessingAtlas: blessingAtlas.image
      });
    }

    if (numberAtlas.loaded) {
      (0,_Level_draw__WEBPACK_IMPORTED_MODULE_22__.default)({
        context: context,
        numberAtlas: numberAtlas.image,
        lv1: lv1Ref.current
      });
      (0,_Merge_draw__WEBPACK_IMPORTED_MODULE_23__.default)({
        context: context,
        numberAtlas: numberAtlas.image,
        merge: mergeRef.current
      });
      (0,_StatNumber_draw__WEBPACK_IMPORTED_MODULE_24__.default)(_objectSpread({
        context: context,
        numberAtlas: numberAtlas.image,
        score: scoreRef.current,
        sbst: Math.max(skillInfosRef.current.bst || 0, heroRef.current.bst || 0)
      }, statsInfosRef.current));
      (0,_SpecialNumber_draw__WEBPACK_IMPORTED_MODULE_25__.default)({
        context: context,
        numberAtlas: numberAtlas.image,
        accelerate: skillInfosRef.current.accelerate,
        specialCD: skillInfosRef.current.specialCD
      });
    }

    (0,_SkillIcon_draw__WEBPACK_IMPORTED_MODULE_21__.default)({
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
    (0,_StatText_draw__WEBPACK_IMPORTED_MODULE_26__.default)({
      canvas: textCanvas.current,
      iv: ivRef.current,
      merge: mergeRef.current
    });
    (0,_SkillText_draw__WEBPACK_IMPORTED_MODULE_27__.default)(_objectSpread({
      canvas: textCanvas.current,
      refine: refineRef.current
    }, skillInfosRef.current.names));
    (0,_DescriptionText_draw__WEBPACK_IMPORTED_MODULE_28__.default)({
      canvas: textCanvas.current,
      title: title,
      name: name
    });

    if (arenaRef.current && arenaIcon) {
      (0,_ArenaIcon_draw__WEBPACK_IMPORTED_MODULE_29__.default)({
        context: context,
        arenaIcon: arenaIcon.image
      });
    }

    if (resplendentRef.current && resplendentIcon) {
      (0,_ResplendentIcon_draw__WEBPACK_IMPORTED_MODULE_30__.default)({
        context: context,
        resplendentIcon: resplendentIcon.image
      });
    }

    context.drawImage(textCanvas.current, 0, 0, 540, 960);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    textCanvas.current = document.createElement('canvas');
    textCanvas.current.width = 1080;
    textCanvas.current.height = 1920;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    imageIdAndSrc.forEach(function (_ref2) {
      var _ref3 = (0,F_repos_react_feh_site_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, 2),
          imageId = _ref3[0],
          imgSrc = _ref3[1];

      loaders.current[imageId] = new _ImageLoader__WEBPACK_IMPORTED_MODULE_10__.ImageLoader(draw);
      loaders.current[imageId].load((0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__.default)(imgSrc));
    });
  }, [loaders, draw]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var portrait = (0,_app_utils_resplendent__WEBPACK_IMPORTED_MODULE_7__.toResplendent)({
      resplendentDB: db.resplendentDB,
      heroId: hero.id,
      enable: resplendent
    });
    loaders.current.portrait.load((0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__.default)("/portraits/".concat(portrait, ".png")));
    var icons = (0,_app_utils_data_utils__WEBPACK_IMPORTED_MODULE_4__.getSkillIcons)({
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
      loaders.current["".concat(skillName, "Icon")].load((0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__.default)("".concat(icons[skillName] || empty)));
    });
    var hasBlessing = hero.blessing !== '-' && !!hero.blessing || !!blessing;
    var blessingImg = (0,_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__.default)("/assets/blessing-".concat(hero.blessing || blessing, ".png"));
    loaders.current.blessingAtlas.load(hasBlessing ? blessingImg : '');
  }, [hero, resplendent, skills, refine, blessing, statsInfos, db.heroDB, db.weaponDB, db.assistDB, db.specialDB, db.skillADB, db.skillBDB, db.skillCDB, db.sealDB, db.resplendentDB]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
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
  var triggerDownload = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function () {
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
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_9__.useFehDB];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9ob29rcy50c3giXSwibmFtZXMiOlsiaW1hZ2VJZEFuZFNyYyIsImRlZmF1bHRTa2lsbEljb25zIiwic2tpbGxOYW1lIiwiZW1wdHkiLCJ1c2VIb29rcyIsImhlcm9JZCIsInJhcml0eSIsIml2IiwibWVyZ2UiLCJkcmFnb25mbG93ZXIiLCJibGVzc2luZyIsInN1cHBvcnQiLCJhcmVuYSIsInJlc3BsZW5kZW50IiwibXl0aGljQm9udXMxIiwibXl0aGljQm9udXMyIiwibXl0aGljQm9udXMzIiwibXl0aGljQm9udXM0Iiwid2VhcG9uIiwicmVmaW5lIiwiYXNzaXN0Iiwic3BlY2lhbCIsInNraWxsQSIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJsdjEiLCJkYiIsInVzZUZlaERCIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidGV4dENhbnZhcyIsImhlcm9SZWYiLCJza2lsbEluZm9zUmVmIiwic3RhdHNJbmZvc1JlZiIsInJhcml0eVJlZiIsIml2UmVmIiwibWVyZ2VSZWYiLCJkcmFnb25mbG93ZXJSZWYiLCJibGVzc2luZ1JlZiIsInN1cHBvcnRSZWYiLCJhcmVuYVJlZiIsInJlc3BsZW5kZW50UmVmIiwicmVmaW5lUmVmIiwibHYxUmVmIiwic2NvcmVSZWYiLCJoZXJvIiwidXNlTWVtbyIsImdldEhlcm8iLCJoZXJvREIiLCJza2lsbHMiLCJzdGF0cyIsInNraWxsSW5mb3MiLCJnZXRTa2lsbEluZm9zIiwid2VhcG9uREIiLCJhc3Npc3REQiIsInNwZWNpYWxEQiIsInNraWxsQURCIiwic2tpbGxCREIiLCJza2lsbENEQiIsInNlYWxEQiIsInN0YXRzSW5mb3MiLCJnZXRTdGF0cyIsInNraWxsU3RhdHMiLCJzY29yZSIsImFyZW5hU2NvcmUiLCJic3QiLCJNYXRoIiwibWF4Iiwic3B0IiwibG9hZGVycyIsImRyYXciLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJiYWNrZ3JvdW5kIiwiZm9yZWdyb3VuZCIsImZvcmVncm91bmQyIiwicG9ydHJhaXQiLCJyYXJpdHlBdGxhcyIsIndlYXBvblR5cGVBdGxhcyIsIm1vdmVUeXBlQXRsYXMiLCJkcmFnb25mbG93ZXJBdGxhcyIsInN1cHBvcnRBdGxhcyIsImJsZXNzaW5nQXRsYXMiLCJudW1iZXJBdGxhcyIsIndlYXBvbkljb24iLCJhc3Npc3RJY29uIiwic3BlY2lhbEljb24iLCJ0ZXh0QSIsInRleHRCIiwidGV4dEMiLCJ0ZXh0UyIsImFyZW5hSWNvbiIsInNraWxsQUljb24iLCJza2lsbEJJY29uIiwic2tpbGxDSWNvbiIsInNlYWxJY29uIiwicmVzcGxlbmRlbnRJY29uIiwidGl0bGUiLCJuYW1lIiwid2VhcG9uVHlwZSIsIm1vdmVUeXBlIiwiaGFzQmxlc3NpbmciLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImxvYWRlZCIsImRyYXdCYWNrZ3JvdW5kIiwiaW1hZ2UiLCJkcmF3UG9ydHJhaXQiLCJkcmF3Rm9yZWdyb3VuZCIsImRyYXdGb3JlZ3JvdW5kMiIsImRyYXdSYXJpdHkiLCJkcmF3V2VhcG9uVHlwZSIsImRyYXdNb3ZlVHlwZSIsImRyYXdEcmFnb25mbG93ZXIiLCJkcmF3U3VwcG9ydCIsImRyYXdCbGVzc2luZyIsImRyYXdMZXZlbCIsImRyYXdNZXJnZSIsImRyYXdTdGF0TnVtYmVyIiwic2JzdCIsImRyYXdTcGVjaWFsTnVtYmVyIiwiYWNjZWxlcmF0ZSIsInNwZWNpYWxDRCIsImRyYXdTa2lsbEljb24iLCJ0ZXh0Q29udGV4dCIsImRyYXdTdGF0VGV4dCIsImNhbnZhcyIsImRyYXdTa2lsbFRleHQiLCJuYW1lcyIsImRyYXdEZXNjcmlwdGlvbiIsImRyYXdBcmVuYUljb24iLCJkcmF3UmVzcGxlbmRlbnRJY29uIiwiZHJhd0ltYWdlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJmb3JFYWNoIiwiaW1hZ2VJZCIsImltZ1NyYyIsIkltYWdlTG9hZGVyIiwibG9hZCIsIm1hcEJhc2VQYXRoVXJsIiwidG9SZXNwbGVuZGVudCIsInJlc3BsZW5kZW50REIiLCJpZCIsImVuYWJsZSIsImljb25zIiwiZ2V0U2tpbGxJY29ucyIsImJsZXNzaW5nSW1nIiwidHJpZ2dlckRvd25sb2FkIiwiZGF0YVVSTCIsInRvRGF0YVVSTCIsImxpbmsiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQURvQixFQUVwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQUZvQixFQUdwQixDQUFDLGFBQUQsRUFBZ0IseUJBQWhCLENBSG9CLEVBSXBCLENBQUMsVUFBRCxFQUFhLEVBQWIsQ0FKb0IsRUFLcEIsQ0FBQyxhQUFELEVBQWdCLG9CQUFoQixDQUxvQixFQU1wQixDQUFDLGlCQUFELEVBQW9CLHlCQUFwQixDQU5vQixFQU9wQixDQUFDLGVBQUQsRUFBa0IsdUJBQWxCLENBUG9CLEVBUXBCLENBQUMsbUJBQUQsRUFBc0IsMEJBQXRCLENBUm9CLEVBU3BCLENBQUMsY0FBRCxFQUFpQixxQkFBakIsQ0FUb0IsRUFVcEIsQ0FBQyxlQUFELEVBQWtCLEVBQWxCLENBVm9CLEVBV3BCLENBQUMsYUFBRCxFQUFnQixvQkFBaEIsQ0FYb0IsRUFZcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fab0IsRUFhcEIsQ0FBQyxZQUFELEVBQWUs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TztBQUNMckUsYUFBUyxFQUFUQSxTQURLO0FBRUw0SCxtQkFBZSxFQUFmQTtBQUZLLEdBQVA7QUFJRDs7R0F0YVFySixRO1VBMEJJd0IscUQ7OztBQThZYiwrREFBZXhCLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci41ZDBlNzNhYTU2NjdmYmM2OGI5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVEhlcm8sIFRTa2lsbElkcyB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCBtYXBCYXNlUGF0aFVybCBmcm9tICdAL2FwcC91dGlscy91c2VCYXRoUGF0aFVybCc7XG5pbXBvcnQgeyBnZXRTa2lsbEljb25zLCBnZXRTa2lsbEluZm9zIH0gZnJvbSAnQC9hcHAvdXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQgeyBnZXRTdGF0cyB9IGZyb20gJ0AvYXBwL3V0aWxzL3N0YXRzJztcbmltcG9ydCBhcmVuYVNjb3JlIGZyb20gJ0AvYXBwL3V0aWxzL2FyZW5hc2NvcmUnO1xuaW1wb3J0IHsgdG9SZXNwbGVuZGVudCB9IGZyb20gJ0AvYXBwL3V0aWxzL3Jlc3BsZW5kZW50JztcbmltcG9ydCB7IGdldEhlcm8gfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHsgdXNlRmVoREIgfSBmcm9tICdAL2FwcC9wYWdlL0ZFSERCJztcbmltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9JbWFnZUxvYWRlcic7XG5pbXBvcnQgZHJhd0JhY2tncm91bmQgZnJvbSAnLi9CYWNrZ3JvdW5kL2RyYXcnO1xuaW1wb3J0IGRyYXdQb3J0cmFpdCBmcm9tICcuL1BvcnRyYWl0L2RyYXcnO1xuaW1wb3J0IGRyYXdGb3JlZ3JvdW5kIGZyb20gJy4vRm9yZWdyb3VuZC9kcmF3JztcbmltcG9ydCBkcmF3Rm9yZWdyb3VuZDIgZnJvbSAnLi9Gb3JlZ3JvdW5kMi9kcmF3JztcbmltcG9ydCBkcmF3UmFyaXR5IGZyb20gJy4vUmFyaXR5L2RyYXcnO1xuaW1wb3J0IGRyYXdXZWFwb25UeXBlIGZyb20gJy4vV2VhcG9uVHlwZS9kcmF3JztcbmltcG9ydCBkcmF3TW92ZVR5cGUgZnJvbSAnLi9Nb3ZlVHlwZS9kcmF3JztcbmltcG9ydCBkcmF3RHJhZ29uZmxvd2VyIGZyb20gJy4vRHJhZ29uRmxvd2VyL2RyYXcnO1xuaW1wb3J0IGRyYXdTdXBwb3J0IGZyb20gJy4vU3VwcG9ydC9kcmF3JztcbmltcG9ydCBkcmF3Qmxlc3NpbmcgZnJvbSAnLi9CbGVzc2luZy9kcmF3JztcbmltcG9ydCBkcmF3U2tpbGxJY29uIGZyb20gJy4vU2tpbGxJY29uL2RyYXcnO1xuaW1wb3J0IGRyYXdMZXZlbCBmcm9tICcuL0xldmVsL2RyYXcnO1xuaW1wb3J0IGRyYXdNZXJnZSBmcm9tICcuL01lcmdlL2RyYXcnO1xuaW1wb3J0IGRyYXdTdGF0TnVtYmVyIGZyb20gJy4vU3RhdE51bWJlci9kcmF3JztcbmltcG9ydCBkcmF3U3BlY2lhbE51bWJlciBmcm9tICcuL1NwZWNpYWxOdW1iZXIvZHJhdyc7XG5pbXBvcnQgZHJhd1N0YXRUZXh0IGZyb20gJy4vU3RhdFRleHQvZHJhdyc7XG5pbXBvcnQgZHJhd1NraWxsVGV4dCBmcm9tICcuL1NraWxsVGV4dC9kcmF3JztcbmltcG9ydCBkcmF3RGVzY3JpcHRpb24gZnJvbSAnLi9EZXNjcmlwdGlvblRleHQvZHJhdyc7XG5pbXBvcnQgZHJhd0FyZW5hSWNvbiBmcm9tICcuL0FyZW5hSWNvbi9kcmF3JztcbmltcG9ydCBkcmF3UmVzcGxlbmRlbnRJY29uIGZyb20gJy4vUmVzcGxlbmRlbnRJY29uL2RyYXcnO1xuXG5jb25zdCBpbWFnZUlkQW5kU3JjID0gW1xuICBbJ2JhY2tncm91bmQnLCAnL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZyddLFxuICBbJ2ZvcmVncm91bmQnLCAnL2Fzc2V0cy9mb3JlZ3JvdW5kLnBuZyddLFxuICBbJ2ZvcmVncm91bmQyJywgJy9hc3NldHMvZm9yZWdyb3VuZDIucG5nJ10sXG4gIFsncG9ydHJhaXQnLCAnJ10sXG4gIFsncmFyaXR5QXRsYXMnLCAnL2Fzc2V0cy9yYXJpdHkucG5nJ10sXG4gIFsnd2VhcG9uVHlwZUF0bGFzJywgJy9hc3NldHMvd2VhcG9uLXR5cGUucG5nJ10sXG4gIFsnbW92ZVR5cGVBdGxhcycsICcvYXNzZXRzL21vdmUtdHlwZS5wbmcnXSxcbiAgWydkcmFnb25mbG93ZXJBdGxhcycsICcvYXNzZXRzL2RyYWdvbmZsb3dlci5wbmcnXSxcbiAgWydzdXBwb3J0QXRsYXMnLCAnL2Fzc2V0cy9zdXBwb3J0LnBuZyddLFxuICBbJ2JsZXNzaW5nQXRsYXMnLCAnJ10sXG4gIFsnbnVtYmVyQXRsYXMnLCAnL2Fzc2V0cy9udW1iZXIucG5nJ10sXG4gIFsnd2VhcG9uSWNvbicsICcvc2tpbGxzL3dlYXBvbi5wbmcnXSxcbiAgWydhc3Npc3RJY29uJywgJy9za2lsbHMvYXNzaXN0LnBuZyddLFxuICBbJ3NwZWNpYWxJY29uJywgJy9za2lsbHMvc3BlY2lhbC5wbmcnXSxcbiAgWyd0ZXh0QScsICcvYXNzZXRzL3NraWxsLWEucG5nJ10sXG4gIFsndGV4dEInLCAnL2Fzc2V0cy9za2lsbC1iLnBuZyddLFxuICBbJ3RleHRDJywgJy9hc3NldHMvc2tpbGwtYy5wbmcnXSxcbiAgWyd0ZXh0UycsICcvYXNzZXRzL3NraWxsLXMucG5nJ10sXG4gIFsnYXJlbmFJY29uJywgJy9hc3NldHMvQXJlbmFfQ3Jvd24ucG5nJ10sXG4gIFsnc2tpbGxBSWNvbicsICcnXSxcbiAgWydza2lsbEJJY29uJywgJyddLFxuICBbJ3NraWxsQ0ljb24nLCAnJ10sXG4gIFsnc2VhbEljb24nLCAnJ10sXG4gIFsncmVzcGxlbmRlbnRJY29uJywgJy9hc3NldHMvZ29kLXdlYXItbC5wbmcnXSxcbl07XG5cbmNvbnN0IGRlZmF1bHRTa2lsbEljb25zID0gW1xuICB7XG4gICAgc2tpbGxOYW1lOiAnd2VhcG9uJyxcbiAgICBlbXB0eTogJy9za2lsbHMvd2VhcG9uLnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdza2lsbEEnLFxuICAgIGVtcHR5OiAnL3NraWxscy9lbXB0eS5wbmcnLFxuICB9LFxuICB7XG4gICAgc2tpbGxOYW1lOiAnc2tpbGxCJyxcbiAgICBlbXB0eTogJy9za2lsbHMvZW1wdHkucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NraWxsQycsXG4gICAgZW1wdHk6ICcvc2tpbGxzL2VtcHR5LnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdzZWFsJyxcbiAgICBlbXB0eTogJy9za2lsbHMvc2VhbC1lbXB0eS5wbmcnLFxuICB9LFxuXTtcbmV4cG9ydCB0eXBlIFRIb29rUHJvcHMgPSB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICByYXJpdHk6IDUgfCA0O1xuICBpdjogc3RyaW5nO1xuICBtZXJnZTogbnVtYmVyO1xuICBkcmFnb25mbG93ZXI6IG51bWJlcjtcbiAgYmxlc3Npbmc6IHN0cmluZztcbiAgc3VwcG9ydDogYm9vbGVhbjtcbiAgYXJlbmE6IGJvb2xlYW47XG4gIHJlc3BsZW5kZW50OiBib29sZWFuO1xuICBteXRoaWNCb251czE6IHN0cmluZztcbiAgbXl0aGljQm9udXMyOiBzdHJpbmc7XG4gIG15dGhpY0JvbnVzMzogc3RyaW5nO1xuICBteXRoaWNCb251czQ6IHN0cmluZztcbiAgLyoqIHNraWxscyAqL1xuICB3ZWFwb246IHN0cmluZztcbiAgcmVmaW5lOiBzdHJpbmc7XG4gIGFzc2lzdDogc3RyaW5nO1xuICBzcGVjaWFsOiBzdHJpbmc7XG4gIHNraWxsQTogc3RyaW5nO1xuICBza2lsbEI6IHN0cmluZztcbiAgc2tpbGxDOiBzdHJpbmc7XG4gIHNlYWw6IHN0cmluZztcbiAgLyoqIGVkaXRvciAqL1xuICBsdjE6IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiB1c2VIb29rcyh7XG4gIGhlcm9JZCxcbiAgcmFyaXR5LFxuICBpdixcbiAgbWVyZ2UsXG4gIGRyYWdvbmZsb3dlcixcbiAgYmxlc3NpbmcsXG4gIHN1cHBvcnQsXG4gIGFyZW5hLFxuICByZXNwbGVuZGVudCxcbiAgbXl0aGljQm9udXMxLFxuICBteXRoaWNCb251czIsXG4gIG15dGhpY0JvbnVzMyxcbiAgbXl0aGljQm9udXM0LFxuICAvKiogc2tpbGxzICovXG4gIHdlYXBvbixcbiAgcmVmaW5lLFxuICBhc3Npc3QsXG4gIHNwZWNpYWwsXG4gIHNraWxsQSxcbiAgc2tpbGxCLFxuICBza2lsbEMsXG4gIHNlYWwsXG4gIC8qKiBlZGl0b3IgKi9cbiAgbHYxLFxufTogVEhvb2tQcm9wcykge1xuICBjb25zdCBkYiA9IHVzZUZlaERCKCk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgdGV4dENhbnZhcyA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGhlcm9SZWYgPSB1c2VSZWY8VEhlcm8+KCk7XG4gIGNvbnN0IHNraWxsSW5mb3NSZWYgPSB1c2VSZWY8e1xuICAgIG5hbWVzOiBUU2tpbGxJZHM7XG4gICAgc3RhdHM6IHtcbiAgICAgIGhwOiBudW1iZXI7XG4gICAgICBhdGs6IG51bWJlcjtcbiAgICAgIHNwZDogbnVtYmVyO1xuICAgICAgZGVmOiBudW1iZXI7XG4gICAgICByZXM6IG51bWJlcjtcbiAgICB9O1xuICAgIGFjY2VsZXJhdGU6IG51bWJlcjtcbiAgICBzcGVjaWFsQ0Q6IG51bWJlcjtcbiAgICBzcHQ6IG51bWJlcjtcbiAgICBic3Q6IG51bWJlcjtcbiAgfT4oKTtcbiAgY29uc3Qgc3RhdHNJbmZvc1JlZiA9IHVzZVJlZjx7XG4gICAgc3RhdHM6IHsgW3N0YXRLZXk6IHN0cmluZ106IG51bWJlciB9O1xuICAgIGJzdDogbnVtYmVyO1xuICB9PigpO1xuICBjb25zdCByYXJpdHlSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuICBjb25zdCBpdlJlZiA9IHVzZVJlZjxzdHJpbmc+KCk7XG4gIGNvbnN0IG1lcmdlUmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgZHJhZ29uZmxvd2VyUmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgYmxlc3NpbmdSZWYgPSB1c2VSZWY8c3RyaW5nPigpO1xuICBjb25zdCBzdXBwb3J0UmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IGFyZW5hUmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHJlc3BsZW5kZW50UmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHJlZmluZVJlZiA9IHVzZVJlZjxzdHJpbmc+KCk7XG4gIGNvbnN0IGx2MVJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCBzY29yZVJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG5cbiAgY29uc3QgaGVybyA9IHVzZU1lbW8oKCkgPT4gZ2V0SGVybyhkYi5oZXJvREIsIGhlcm9JZCksIFtkYi5oZXJvREIsIGhlcm9JZF0pO1xuXG4gIGNvbnN0IHNraWxscyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHsgd2VhcG9uLCBhc3Npc3QsIHNwZWNpYWwsIHNraWxsQSwgc2tpbGxCLCBza2lsbEMsIHNlYWwgfSksXG4gICAgW3dlYXBvbiwgYXNzaXN0LCBzcGVjaWFsLCBza2lsbEEsIHNraWxsQiwgc2tpbGxDLCBzZWFsXSxcbiAgKTtcbiAgY29uc3Qgc3RhdHMgPSBoZXJvLnN0YXRzO1xuICBjb25zdCBza2lsbEluZm9zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2V0U2tpbGxJbmZvcyh7XG4gICAgICAgIGhlcm9EQjogZGIuaGVyb0RCLFxuICAgICAgICB3ZWFwb25EQjogZGIud2VhcG9uREIsXG4gICAgICAgIGFzc2lzdERCOiBkYi5hc3Npc3REQixcbiAgICAgICAgc3BlY2lhbERCOiBkYi5zcGVjaWFsREIsXG4gICAgICAgIHNraWxsQURCOiBkYi5za2lsbEFEQixcbiAgICAgICAgc2tpbGxCREI6IGRiLnNraWxsQkRCLFxuICAgICAgICBza2lsbENEQjogZGIuc2tpbGxDREIsXG4gICAgICAgIHNlYWxEQjogZGIuc2VhbERCLFxuICAgICAgICBza2lsbHMsXG4gICAgICAgIGhlcm9JZCxcbiAgICAgICAgcmVmaW5lLFxuICAgICAgICByYXJpdHksXG4gICAgICB9KSxcbiAgICBbXG4gICAgICBza2lsbHMsXG4gICAgICBoZXJvSWQsXG4gICAgICByZWZpbmUsXG4gICAgICByYXJpdHksXG4gICAgICBkYi5oZXJvREIsXG4gICAgICBkYi53ZWFwb25EQixcbiAgICAgIGRiLmFzc2lzdERCLFxuICAgICAgZGIuc3BlY2lhbERCLFxuICAgICAgZGIuc2tpbGxBREIsXG4gICAgICBkYi5za2lsbEJEQixcbiAgICAgIGRiLnNraWxsQ0RCLFxuICAgICAgZGIuc2VhbERCLFxuICAgIF0sXG4gICk7XG5cbiAgY29uc3Qgc3RhdHNJbmZvcyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGdldFN0YXRzKHtcbiAgICAgICAgcmFyaXR5LFxuICAgICAgICBzdGF0cyxcbiAgICAgICAgaXYsXG4gICAgICAgIG1lcmdlLFxuICAgICAgICBzdXBwb3J0LFxuICAgICAgICBza2lsbFN0YXRzOiBza2lsbEluZm9zLnN0YXRzLFxuICAgICAgICBsdjEsXG4gICAgICAgIGFyZW5hLFxuICAgICAgICBkcmFnb25mbG93ZXIsXG4gICAgICAgIHJlc3BsZW5kZW50LFxuICAgICAgICBteXRoaWNCb251czEsXG4gICAgICAgIG15dGhpY0JvbnVzMixcbiAgICAgICAgbXl0aGljQm9udXMzLFxuICAgICAgICBteXRoaWNCb251czQsXG4gICAgICB9KSxcbiAgICBbXG4gICAgICByYXJpdHksXG4gICAgICBzdGF0cyxcbiAgICAgIGl2LFxuICAgICAgbWVyZ2UsXG4gICAgICBzdXBwb3J0LFxuICAgICAgc2tpbGxJbmZvcyxcbiAgICAgIGx2MSxcbiAgICAgIGFyZW5hLFxuICAgICAgZHJhZ29uZmxvd2VyLFxuICAgICAgcmVzcGxlbmRlbnQsXG4gICAgICBteXRoaWNCb251czEsXG4gICAgICBteXRoaWNCb251czIsXG4gICAgICBteXRoaWNCb251czMsXG4gICAgICBteXRoaWNCb251czQsXG4gICAgXSxcbiAgKTtcbiAgY29uc3Qgc2NvcmUgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBhcmVuYVNjb3JlKHtcbiAgICAgICAgcmFyaXR5LFxuICAgICAgICBtZXJnZSxcbiAgICAgICAgYnN0OiBNYXRoLm1heChzdGF0c0luZm9zLmJzdCwgc2tpbGxJbmZvcy5ic3QsIGhlcm8uYnN0IHx8IDApLFxuICAgICAgICBzcHQ6IHNraWxsSW5mb3Muc3B0LFxuICAgICAgfSksXG4gICAgW3Jhcml0eSwgbWVyZ2UsIHN0YXRzSW5mb3MuYnN0LCBza2lsbEluZm9zLmJzdCwgc2tpbGxJbmZvcy5zcHQsIGhlcm9dLFxuICApO1xuXG4gIGNvbnN0IGxvYWRlcnMgPSB1c2VSZWY8eyBbaW1hZ2VJZDogc3RyaW5nXTogSW1hZ2VMb2FkZXIgfT4oe30pO1xuXG4gIGNvbnN0IGRyYXcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFjYW52YXNSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBiYWNrZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmQyLFxuICAgICAgcG9ydHJhaXQsXG4gICAgICByYXJpdHlBdGxhcyxcbiAgICAgIHdlYXBvblR5cGVBdGxhcyxcbiAgICAgIG1vdmVUeXBlQXRsYXMsXG4gICAgICBkcmFnb25mbG93ZXJBdGxhcyxcbiAgICAgIHN1cHBvcnRBdGxhcyxcbiAgICAgIGJsZXNzaW5nQXRsYXMsXG4gICAgICBudW1iZXJBdGxhcyxcbiAgICAgIHdlYXBvbkljb24sXG4gICAgICBhc3Npc3RJY29uLFxuICAgICAgc3BlY2lhbEljb24sXG4gICAgICB0ZXh0QSxcbiAgICAgIHRleHRCLFxuICAgICAgdGV4dEMsXG4gICAgICB0ZXh0UyxcbiAgICAgIGFyZW5hSWNvbixcbiAgICAgIHNraWxsQUljb24sXG4gICAgICBza2lsbEJJY29uLFxuICAgICAgc2tpbGxDSWNvbixcbiAgICAgIHNlYWxJY29uLFxuICAgICAgcmVzcGxlbmRlbnRJY29uLFxuICAgIH0gPSBsb2FkZXJzLmN1cnJlbnQ7XG4gICAgY29uc3QgeyB0aXRsZSwgbmFtZSwgd2VhcG9uVHlwZSwgbW92ZVR5cGUgfSA9IGhlcm9SZWYuY3VycmVudDtcbiAgICBjb25zdCBoYXNCbGVzc2luZyA9ICEhaGVyb1JlZi5jdXJyZW50LmJsZXNzaW5nIHx8ICEhYmxlc3NpbmdSZWYuY3VycmVudDtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCA1NDAsIDk2MCk7XG5cbiAgICBpZiAoYmFja2dyb3VuZC5sb2FkZWQpIHtcbiAgICAgIGRyYXdCYWNrZ3JvdW5kKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZC5pbWFnZSxcbiAgICAgICAgc3VwcG9ydDogc3VwcG9ydFJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwb3J0cmFpdC5sb2FkZWQpIHtcbiAgICAgIGRyYXdQb3J0cmFpdCh7IGNvbnRleHQsIHBvcnRyYWl0OiBwb3J0cmFpdC5pbWFnZSB9KTtcbiAgICB9XG4gICAgaWYgKGZvcmVncm91bmQubG9hZGVkKSB7XG4gICAgICBkcmF3Rm9yZWdyb3VuZCh7IGNvbnRleHQsIGZvcmVncm91bmQ6IGZvcmVncm91bmQuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChmb3JlZ3JvdW5kMi5sb2FkZWQpIHtcbiAgICAgIGRyYXdGb3JlZ3JvdW5kMih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGZvcmVncm91bmQyOiBmb3JlZ3JvdW5kMi5pbWFnZSxcbiAgICAgICAgZHJhZ29uZmxvd2VyOiBkcmFnb25mbG93ZXJSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocmFyaXR5QXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3UmFyaXR5KHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgcmFyaXR5QXRsYXM6IHJhcml0eUF0bGFzLmltYWdlLFxuICAgICAgICByYXJpdHk6IHJhcml0eVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh3ZWFwb25UeXBlQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3V2VhcG9uVHlwZSh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHdlYXBvblR5cGVBdGxhczogd2VhcG9uVHlwZUF0bGFzLmltYWdlLFxuICAgICAgICB3ZWFwb25UeXBlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtb3ZlVHlwZUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd01vdmVUeXBlKHsgY29udGV4dCwgbW92ZVR5cGVBdGxhczogbW92ZVR5cGVBdGxhcy5pbWFnZSwgbW92ZVR5cGUgfSk7XG4gICAgfVxuICAgIGlmIChkcmFnb25mbG93ZXJBdGxhcy5sb2FkZWQgJiYgbnVtYmVyQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3RHJhZ29uZmxvd2VyKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZHJhZ29uZmxvd2VyQXRsYXM6IGRyYWdvbmZsb3dlckF0bGFzLmltYWdlLFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIG1vdmVUeXBlLFxuICAgICAgICBkcmFnb25mbG93ZXI6IGRyYWdvbmZsb3dlclJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzdXBwb3J0QXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3U3VwcG9ydCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN1cHBvcnRBdGxhczogc3VwcG9ydEF0bGFzLmltYWdlLFxuICAgICAgICBzdXBwb3J0OiBzdXBwb3J0UmVmLmN1cnJlbnQsXG4gICAgICAgIGhhc0JsZXNzaW5nLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChibGVzc2luZ0F0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0JsZXNzaW5nKHsgY29udGV4dCwgYmxlc3NpbmdBdGxhczogYmxlc3NpbmdBdGxhcy5pbWFnZSB9KTtcbiAgICB9XG4gICAgaWYgKG51bWJlckF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0xldmVsKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBsdjE6IGx2MVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3TWVyZ2Uoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIG1lcmdlOiBtZXJnZVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3U3RhdE51bWJlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgc2NvcmU6IHNjb3JlUmVmLmN1cnJlbnQsXG4gICAgICAgIHNic3Q6IE1hdGgubWF4KFxuICAgICAgICAgIHNraWxsSW5mb3NSZWYuY3VycmVudC5ic3QgfHwgMCxcbiAgICAgICAgICBoZXJvUmVmLmN1cnJlbnQuYnN0IHx8IDAsXG4gICAgICAgICksXG4gICAgICAgIC4uLnN0YXRzSW5mb3NSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgICAgZHJhd1NwZWNpYWxOdW1iZXIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIGFjY2VsZXJhdGU6IHNraWxsSW5mb3NSZWYuY3VycmVudC5hY2NlbGVyYXRlLFxuICAgICAgICBzcGVjaWFsQ0Q6IHNraWxsSW5mb3NSZWYuY3VycmVudC5zcGVjaWFsQ0QsXG4gICAgICB9KTtcbiAgICB9XG4gICAgZHJhd1NraWxsSWNvbih7XG4gICAgICBjb250ZXh0LFxuICAgICAgd2VhcG9uSWNvbixcbiAgICAgIGFzc2lzdEljb24sXG4gICAgICBzcGVjaWFsSWNvbixcbiAgICAgIHRleHRBLFxuICAgICAgdGV4dEIsXG4gICAgICB0ZXh0QyxcbiAgICAgIHRleHRTLFxuICAgICAgc2tpbGxBSWNvbixcbiAgICAgIHNraWxsQkljb24sXG4gICAgICBza2lsbENJY29uLFxuICAgICAgc2VhbEljb24sXG4gICAgfSk7XG4gICAgY29uc3QgdGV4dENvbnRleHQgPSB0ZXh0Q2FudmFzLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0ZXh0Q29udGV4dC5jbGVhclJlY3QoMCwgMCwgMTA4MCwgMTkyMCk7XG4gICAgZHJhd1N0YXRUZXh0KHtcbiAgICAgIGNhbnZhczogdGV4dENhbnZhcy5jdXJyZW50LFxuICAgICAgaXY6IGl2UmVmLmN1cnJlbnQsXG4gICAgICBtZXJnZTogbWVyZ2VSZWYuY3VycmVudCxcbiAgICB9KTtcbiAgICBkcmF3U2tpbGxUZXh0KHtcbiAgICAgIGNhbnZhczogdGV4dENhbnZhcy5jdXJyZW50LFxuICAgICAgcmVmaW5lOiByZWZpbmVSZWYuY3VycmVudCxcbiAgICAgIC4uLnNraWxsSW5mb3NSZWYuY3VycmVudC5uYW1lcyxcbiAgICB9KTtcbiAgICBkcmF3RGVzY3JpcHRpb24oe1xuICAgICAgY2FudmFzOiB0ZXh0Q2FudmFzLmN1cnJlbnQsXG4gICAgICB0aXRsZSxcbiAgICAgIG5hbWUsXG4gICAgfSk7XG4gICAgaWYgKGFyZW5hUmVmLmN1cnJlbnQgJiYgYXJlbmFJY29uKSB7XG4gICAgICBkcmF3QXJlbmFJY29uKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgYXJlbmFJY29uOiBhcmVuYUljb24uaW1hZ2UsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJlc3BsZW5kZW50UmVmLmN1cnJlbnQgJiYgcmVzcGxlbmRlbnRJY29uKSB7XG4gICAgICBkcmF3UmVzcGxlbmRlbnRJY29uKHsgY29udGV4dCwgcmVzcGxlbmRlbnRJY29uOiByZXNwbGVuZGVudEljb24uaW1hZ2UgfSk7XG4gICAgfVxuICAgIGNvbnRleHQuZHJhd0ltYWdlKHRleHRDYW52YXMuY3VycmVudCwgMCwgMCwgNTQwLCA5NjApO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0ZXh0Q2FudmFzLmN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0ZXh0Q2FudmFzLmN1cnJlbnQud2lkdGggPSAxMDgwO1xuICAgIHRleHRDYW52YXMuY3VycmVudC5oZWlnaHQgPSAxOTIwO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbWFnZUlkQW5kU3JjLmZvckVhY2goKFtpbWFnZUlkLCBpbWdTcmNdKSA9PiB7XG4gICAgICBsb2FkZXJzLmN1cnJlbnRbaW1hZ2VJZF0gPSBuZXcgSW1hZ2VMb2FkZXIoZHJhdyk7XG4gICAgICBsb2FkZXJzLmN1cnJlbnRbaW1hZ2VJZF0ubG9hZChtYXBCYXNlUGF0aFVybChpbWdTcmMpKTtcbiAgICB9KTtcbiAgfSwgW2xvYWRlcnMsIGRyYXddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBvcnRyYWl0ID0gdG9SZXNwbGVuZGVudCh7XG4gICAgICByZXNwbGVuZGVudERCOiBkYi5yZXNwbGVuZGVudERCLFxuICAgICAgaGVyb0lkOiBoZXJvLmlkLFxuICAgICAgZW5hYmxlOiByZXNwbGVuZGVudCxcbiAgICB9KTtcbiAgICBsb2FkZXJzLmN1cnJlbnQucG9ydHJhaXQubG9hZChtYXBCYXNlUGF0aFVybChgL3BvcnRyYWl0cy8ke3BvcnRyYWl0fS5wbmdgKSk7XG4gICAgY29uc3QgaWNvbnMgPSBnZXRTa2lsbEljb25zKHtcbiAgICAgIGhlcm9EQjogZGIuaGVyb0RCLFxuICAgICAgd2VhcG9uREI6IGRiLndlYXBvbkRCLFxuICAgICAgYXNzaXN0REI6IGRiLmFzc2lzdERCLFxuICAgICAgc3BlY2lhbERCOiBkYi5zcGVjaWFsREIsXG4gICAgICBza2lsbEFEQjogZGIuc2tpbGxBREIsXG4gICAgICBza2lsbEJEQjogZGIuc2tpbGxCREIsXG4gICAgICBza2lsbENEQjogZGIuc2tpbGxDREIsXG4gICAgICBzZWFsREI6IGRiLnNlYWxEQixcbiAgICAgIHNraWxscyxcbiAgICAgIGhlcm9JZDogaGVyby5pZCxcbiAgICAgIHJlZmluZSxcbiAgICB9KTtcblxuICAgIGRlZmF1bHRTa2lsbEljb25zLmZvckVhY2goKHsgc2tpbGxOYW1lLCBlbXB0eSB9KSA9PiB7XG4gICAgICBsb2FkZXJzLmN1cnJlbnRbYCR7c2tpbGxOYW1lfUljb25gXS5sb2FkKFxuICAgICAgICBtYXBCYXNlUGF0aFVybChgJHtpY29uc1tza2lsbE5hbWVdIHx8IGVtcHR5fWApLFxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBoYXNCbGVzc2luZyA9XG4gICAgICAoaGVyby5ibGVzc2luZyAhPT0gJy0nICYmICEhaGVyby5ibGVzc2luZykgfHwgISFibGVzc2luZztcbiAgICBjb25zdCBibGVzc2luZ0ltZyA9IG1hcEJhc2VQYXRoVXJsKFxuICAgICAgYC9hc3NldHMvYmxlc3NpbmctJHtoZXJvLmJsZXNzaW5nIHx8IGJsZXNzaW5nfS5wbmdgLFxuICAgICk7XG4gICAgbG9hZGVycy5jdXJyZW50LmJsZXNzaW5nQXRsYXMubG9hZChoYXNCbGVzc2luZyA/IGJsZXNzaW5nSW1nIDogJycpO1xuICB9LCBbXG4gICAgaGVybyxcbiAgICByZXNwbGVuZGVudCxcbiAgICBza2lsbHMsXG4gICAgcmVmaW5lLFxuICAgIGJsZXNzaW5nLFxuICAgIHN0YXRzSW5mb3MsXG4gICAgZGIuaGVyb0RCLFxuICAgIGRiLndlYXBvbkRCLFxuICAgIGRiLmFzc2lzdERCLFxuICAgIGRiLnNwZWNpYWxEQixcbiAgICBkYi5za2lsbEFEQixcbiAgICBkYi5za2lsbEJEQixcbiAgICBkYi5za2lsbENEQixcbiAgICBkYi5zZWFsREIsXG4gICAgZGIucmVzcGxlbmRlbnREQixcbiAgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoZXJvUmVmLmN1cnJlbnQgPSBoZXJvO1xuICAgIHJhcml0eVJlZi5jdXJyZW50ID0gcmFyaXR5O1xuICAgIGl2UmVmLmN1cnJlbnQgPSBpdjtcbiAgICBtZXJnZVJlZi5jdXJyZW50ID0gbWVyZ2U7XG4gICAgZHJhZ29uZmxvd2VyUmVmLmN1cnJlbnQgPSBkcmFnb25mbG93ZXI7XG4gICAgYmxlc3NpbmdSZWYuY3VycmVudCA9IGJsZXNzaW5nO1xuICAgIHN1cHBvcnRSZWYuY3VycmVudCA9IHN1cHBvcnQ7XG4gICAgYXJlbmFSZWYuY3VycmVudCA9IGFyZW5hO1xuICAgIHJlc3BsZW5kZW50UmVmLmN1cnJlbnQgPSByZXNwbGVuZGVudDtcbiAgICByZWZpbmVSZWYuY3VycmVudCA9IHJlZmluZTtcbiAgICBsdjFSZWYuY3VycmVudCA9IGx2MTtcbiAgICBzY29yZVJlZi5jdXJyZW50ID0gc2NvcmU7XG4gICAgc2tpbGxJbmZvc1JlZi5jdXJyZW50ID0gc2tpbGxJbmZvcztcbiAgICBzdGF0c0luZm9zUmVmLmN1cnJlbnQgPSBzdGF0c0luZm9zO1xuICAgIGRyYXcoKTtcbiAgfSwgW1xuICAgIGhlcm8sXG4gICAgcmFyaXR5LFxuICAgIGl2LFxuICAgIG1lcmdlLFxuICAgIGRyYWdvbmZsb3dlcixcbiAgICBibGVzc2luZyxcbiAgICBzdXBwb3J0LFxuICAgIGFyZW5hLFxuICAgIHJlc3BsZW5kZW50LFxuICAgIHJlZmluZSxcbiAgICBsdjEsXG4gICAgc2NvcmUsXG4gICAgc2tpbGxJbmZvcyxcbiAgICBzdGF0c0luZm9zLFxuICAgIGRyYXcsXG4gIF0pO1xuXG4gIGNvbnN0IHRyaWdnZXJEb3dubG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBkYXRhVVJMID0gY2FudmFzUmVmLmN1cnJlbnQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuaHJlZiA9IGRhdGFVUkw7XG4gICAgbGluay5kb3dubG9hZCA9IGAke2hlcm8/Lm5hbWV9LSR7aGVybz8udGl0bGV9LnBuZ2A7XG4gICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGxpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICB9LCBbaGVybz8ubmFtZSwgaGVybz8udGl0bGVdKTtcblxuICByZXR1cm4ge1xuICAgIGNhbnZhc1JlZixcbiAgICB0cmlnZ2VyRG93bmxvYWQsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUhvb2tzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==