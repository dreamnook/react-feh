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
      console.log(skillInfosRef.current.bst, heroRef.current.bst);
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
    var portrait = Object(_app_utils_resplendent__WEBPACK_IMPORTED_MODULE_7__["toResplendent"])({
      resplendentDB: db.resplendentDB,
      heroId: hero.id,
      enable: resplendent
    });
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
    var blessingImg = Object(_app_utils_useBathPathUrl__WEBPACK_IMPORTED_MODULE_3__["default"])("/assets/blessing-".concat(hero.blessing || blessing, ".png"));
    loaders.current.blessingAtlas.load(hasBlessing ? blessingImg : '');
  }, [hero, resplendent, skills, refine, blessing, statsInfos, db.heroDB, db.weaponDB, db.assistDB, db.specialDB, db.skillADB, db.skillBDB, db.skillCDB, db.sealDB, db.resplendentDB]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9ob29rcy50c3giXSwibmFtZXMiOlsiaW1hZ2VJZEFuZFNyYyIsImRlZmF1bHRTa2lsbEljb25zIiwic2tpbGxOYW1lIiwiZW1wdHkiLCJ1c2VIb29rcyIsImhlcm9JZCIsInJhcml0eSIsIml2IiwibWVyZ2UiLCJkcmFnb25mbG93ZXIiLCJibGVzc2luZyIsInN1cHBvcnQiLCJhcmVuYSIsInJlc3BsZW5kZW50Iiwid2VhcG9uIiwicmVmaW5lIiwiYXNzaXN0Iiwic3BlY2lhbCIsInNraWxsQSIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJsdjEiLCJkYiIsInVzZUZlaERCIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidGV4dENhbnZhcyIsImhlcm9SZWYiLCJza2lsbEluZm9zUmVmIiwic3RhdHNJbmZvc1JlZiIsInJhcml0eVJlZiIsIml2UmVmIiwibWVyZ2VSZWYiLCJkcmFnb25mbG93ZXJSZWYiLCJibGVzc2luZ1JlZiIsInN1cHBvcnRSZWYiLCJhcmVuYVJlZiIsInJlc3BsZW5kZW50UmVmIiwicmVmaW5lUmVmIiwibHYxUmVmIiwic2NvcmVSZWYiLCJoZXJvIiwidXNlTWVtbyIsImdldEhlcm8iLCJoZXJvREIiLCJza2lsbHMiLCJzdGF0cyIsInNraWxsSW5mb3MiLCJnZXRTa2lsbEluZm9zIiwid2VhcG9uREIiLCJhc3Npc3REQiIsInNwZWNpYWxEQiIsInNraWxsQURCIiwic2tpbGxCREIiLCJza2lsbENEQiIsInNlYWxEQiIsInN0YXRzSW5mb3MiLCJnZXRTdGF0cyIsInNjb3JlIiwiYXJlbmFTY29yZSIsImJzdCIsIk1hdGgiLCJtYXgiLCJzcHQiLCJsb2FkZXJzIiwiZHJhdyIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImJhY2tncm91bmQiLCJmb3JlZ3JvdW5kIiwiZm9yZWdyb3VuZDIiLCJwb3J0cmFpdCIsInJhcml0eUF0bGFzIiwid2VhcG9uVHlwZUF0bGFzIiwibW92ZVR5cGVBdGxhcyIsImRyYWdvbmZsb3dlckF0bGFzIiwic3VwcG9ydEF0bGFzIiwiYmxlc3NpbmdBdGxhcyIsIm51bWJlckF0bGFzIiwid2VhcG9uSWNvbiIsImFzc2lzdEljb24iLCJzcGVjaWFsSWNvbiIsInRleHRBIiwidGV4dEIiLCJ0ZXh0QyIsInRleHRTIiwiYXJlbmFJY29uIiwic2tpbGxBSWNvbiIsInNraWxsQkljb24iLCJza2lsbENJY29uIiwic2VhbEljb24iLCJyZXNwbGVuZGVudEljb24iLCJ0aXRsZSIsIm5hbWUiLCJ3ZWFwb25UeXBlIiwibW92ZVR5cGUiLCJoYXNCbGVzc2luZyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwibG9hZGVkIiwiZHJhd0JhY2tncm91bmQiLCJpbWFnZSIsImRyYXdQb3J0cmFpdCIsImRyYXdGb3JlZ3JvdW5kIiwiZHJhd0ZvcmVncm91bmQyIiwiZHJhd1Jhcml0eSIsImRyYXdXZWFwb25UeXBlIiwiZHJhd01vdmVUeXBlIiwiZHJhd0RyYWdvbmZsb3dlciIsImRyYXdTdXBwb3J0IiwiZHJhd0JsZXNzaW5nIiwiZHJhd0xldmVsIiwiZHJhd01lcmdlIiwiY29uc29sZSIsImxvZyIsImRyYXdTdGF0TnVtYmVyIiwic2JzdCIsImRyYXdTcGVjaWFsTnVtYmVyIiwiYWNjZWxlcmF0ZSIsInNwZWNpYWxDRCIsImRyYXdTa2lsbEljb24iLCJ0ZXh0Q29udGV4dCIsImRyYXdTdGF0VGV4dCIsImNhbnZhcyIsImRyYXdTa2lsbFRleHQiLCJuYW1lcyIsImRyYXdEZXNjcmlwdGlvbiIsImRyYXdBcmVuYUljb24iLCJkcmF3UmVzcGxlbmRlbnRJY29uIiwiZHJhd0ltYWdlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJmb3JFYWNoIiwiaW1hZ2VJZCIsImltZ1NyYyIsIkltYWdlTG9hZGVyIiwibG9hZCIsIm1hcEJhc2VQYXRoVXJsIiwidG9SZXNwbGVuZGVudCIsInJlc3BsZW5kZW50REIiLCJpZCIsImVuYWJsZSIsImljb25zIiwiZ2V0U2tpbGxJY29ucyIsImJsZXNzaW5nSW1nIiwidHJpZ2dlckRvd25sb2FkIiwiZGF0YVVSTCIsInRvRGF0YVVSTCIsImxpbmsiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQURvQixFQUVwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQUZvQixFQUdwQixDQUFDLGFBQUQsRUFBZ0IseUJBQWhCLENBSG9CLEVBSXBCLENBQUMsVUFBRCxFQUFhLEVBQWIsQ0FKb0IsRUFLcEIsQ0FBQyxhQUFELEVBQWdCLG9CQUFoQixDQUxvQixFQU1wQixDQUFDLGlCQUFELEVBQW9CLHlCQUFwQixDQU5vQixFQU9wQixDQUFDLGVBQUQsRUFBa0IsdUJBQWxCLENBUG9CLEVBUXBCLENBQUMsbUJBQUQsRUFBc0IsMEJBQXRCLENBUm9CLEVBU3BCLENBQUMsY0FBRCxFQUFpQixxQkFBakIsQ0FUb0IsRUFVcEIsQ0FBQyxlQUFELEVBQWtCLEVBQWxCLENBVm9CLEVBV3BCLENBQUMsYUFBRCxFQUFnQixvQkFBaEIsQ0FYb0IsRUFZcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fab0IsRUFhcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fib0IsRUFjcEIsQ0FBQyxhQUFELEVBQWdCLHFCQUFoQixDQWRvQixFQWVwQixDQUFD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QUFrQm9GLFNBQWxCLENBQTRCLFdBQTVCLENBQWhCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHcEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQW1CLFFBQUksQ0FBQ0MsSUFBTCxHQUFZSCxPQUFaO0FBQ0FFLFFBQUksQ0FBQ0UsUUFBTCxhQUFtQmpILElBQW5CLGFBQW1CQSxJQUFuQix1QkFBbUJBLElBQUksQ0FBRW9ELElBQXpCLGNBQWlDcEQsSUFBakMsYUFBaUNBLElBQWpDLHVCQUFpQ0EsSUFBSSxDQUFFbUQsS0FBdkM7QUFDQTRELFFBQUksQ0FBQ0csTUFBTCxHQUFjLFFBQWQ7QUFDQXZCLFlBQVEsQ0FBQ3dCLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsSUFBMUI7QUFDQUEsUUFBSSxDQUFDTSxLQUFMO0FBQ0ExQixZQUFRLENBQUN3QixJQUFULENBQWNHLFdBQWQsQ0FBMEJQLElBQTFCO0FBQ0QsR0FUa0MsRUFTaEMsQ0FBQy9HLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFb0QsSUFBUCxFQUFhcEQsSUFBYixhQUFhQSxJQUFiLHVCQUFhQSxJQUFJLENBQUVtRCxLQUFuQixDQVRnQyxDQUFuQztBQVdBLFNBQU87QUFDTHBFLGFBQVMsRUFBVEEsU0FESztBQUVMNkgsbUJBQWUsRUFBZkE7QUFGSyxHQUFQO0FBSUQ7O0dBeFpRbEosUTtVQXNCSW9CLHdEOzs7QUFvWUVwQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLmNhMDRmMTMxYzMzNTUzZWU3OGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUSGVybywgVFNraWxsSWRzIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IG1hcEJhc2VQYXRoVXJsIGZyb20gJ0AvYXBwL3V0aWxzL3VzZUJhdGhQYXRoVXJsJztcbmltcG9ydCB7IGdldFNraWxsSWNvbnMsIGdldFNraWxsSW5mb3MgfSBmcm9tICdAL2FwcC91dGlscy9kYXRhLXV0aWxzJztcbmltcG9ydCB7IGdldFN0YXRzIH0gZnJvbSAnQC9hcHAvdXRpbHMvc3RhdHMnO1xuaW1wb3J0IGFyZW5hU2NvcmUgZnJvbSAnQC9hcHAvdXRpbHMvYXJlbmFzY29yZSc7XG5pbXBvcnQgeyB0b1Jlc3BsZW5kZW50IH0gZnJvbSAnQC9hcHAvdXRpbHMvcmVzcGxlbmRlbnQnO1xuaW1wb3J0IHsgZ2V0SGVybyB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgeyB1c2VGZWhEQiB9IGZyb20gJ0AvYXBwL3BhZ2UvRkVIREInO1xuaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL0ltYWdlTG9hZGVyJztcbmltcG9ydCBkcmF3QmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQvZHJhdyc7XG5pbXBvcnQgZHJhd1BvcnRyYWl0IGZyb20gJy4vUG9ydHJhaXQvZHJhdyc7XG5pbXBvcnQgZHJhd0ZvcmVncm91bmQgZnJvbSAnLi9Gb3JlZ3JvdW5kL2RyYXcnO1xuaW1wb3J0IGRyYXdGb3JlZ3JvdW5kMiBmcm9tICcuL0ZvcmVncm91bmQyL2RyYXcnO1xuaW1wb3J0IGRyYXdSYXJpdHkgZnJvbSAnLi9SYXJpdHkvZHJhdyc7XG5pbXBvcnQgZHJhd1dlYXBvblR5cGUgZnJvbSAnLi9XZWFwb25UeXBlL2RyYXcnO1xuaW1wb3J0IGRyYXdNb3ZlVHlwZSBmcm9tICcuL01vdmVUeXBlL2RyYXcnO1xuaW1wb3J0IGRyYXdEcmFnb25mbG93ZXIgZnJvbSAnLi9EcmFnb25GbG93ZXIvZHJhdyc7XG5pbXBvcnQgZHJhd1N1cHBvcnQgZnJvbSAnLi9TdXBwb3J0L2RyYXcnO1xuaW1wb3J0IGRyYXdCbGVzc2luZyBmcm9tICcuL0JsZXNzaW5nL2RyYXcnO1xuaW1wb3J0IGRyYXdTa2lsbEljb24gZnJvbSAnLi9Ta2lsbEljb24vZHJhdyc7XG5pbXBvcnQgZHJhd0xldmVsIGZyb20gJy4vTGV2ZWwvZHJhdyc7XG5pbXBvcnQgZHJhd01lcmdlIGZyb20gJy4vTWVyZ2UvZHJhdyc7XG5pbXBvcnQgZHJhd1N0YXROdW1iZXIgZnJvbSAnLi9TdGF0TnVtYmVyL2RyYXcnO1xuaW1wb3J0IGRyYXdTcGVjaWFsTnVtYmVyIGZyb20gJy4vU3BlY2lhbE51bWJlci9kcmF3JztcbmltcG9ydCBkcmF3U3RhdFRleHQgZnJvbSAnLi9TdGF0VGV4dC9kcmF3JztcbmltcG9ydCBkcmF3U2tpbGxUZXh0IGZyb20gJy4vU2tpbGxUZXh0L2RyYXcnO1xuaW1wb3J0IGRyYXdEZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uVGV4dC9kcmF3JztcbmltcG9ydCBkcmF3QXJlbmFJY29uIGZyb20gJy4vQXJlbmFJY29uL2RyYXcnO1xuaW1wb3J0IGRyYXdSZXNwbGVuZGVudEljb24gZnJvbSAnLi9SZXNwbGVuZGVudEljb24vZHJhdyc7XG5cbmNvbnN0IGltYWdlSWRBbmRTcmMgPSBbXG4gIFsnYmFja2dyb3VuZCcsICcvYXNzZXRzL2JhY2tncm91bmQuanBnJ10sXG4gIFsnZm9yZWdyb3VuZCcsICcvYXNzZXRzL2ZvcmVncm91bmQucG5nJ10sXG4gIFsnZm9yZWdyb3VuZDInLCAnL2Fzc2V0cy9mb3JlZ3JvdW5kMi5wbmcnXSxcbiAgWydwb3J0cmFpdCcsICcnXSxcbiAgWydyYXJpdHlBdGxhcycsICcvYXNzZXRzL3Jhcml0eS5wbmcnXSxcbiAgWyd3ZWFwb25UeXBlQXRsYXMnLCAnL2Fzc2V0cy93ZWFwb24tdHlwZS5wbmcnXSxcbiAgWydtb3ZlVHlwZUF0bGFzJywgJy9hc3NldHMvbW92ZS10eXBlLnBuZyddLFxuICBbJ2RyYWdvbmZsb3dlckF0bGFzJywgJy9hc3NldHMvZHJhZ29uZmxvd2VyLnBuZyddLFxuICBbJ3N1cHBvcnRBdGxhcycsICcvYXNzZXRzL3N1cHBvcnQucG5nJ10sXG4gIFsnYmxlc3NpbmdBdGxhcycsICcnXSxcbiAgWydudW1iZXJBdGxhcycsICcvYXNzZXRzL251bWJlci5wbmcnXSxcbiAgWyd3ZWFwb25JY29uJywgJy9za2lsbHMvd2VhcG9uLnBuZyddLFxuICBbJ2Fzc2lzdEljb24nLCAnL3NraWxscy9hc3Npc3QucG5nJ10sXG4gIFsnc3BlY2lhbEljb24nLCAnL3NraWxscy9zcGVjaWFsLnBuZyddLFxuICBbJ3RleHRBJywgJy9hc3NldHMvc2tpbGwtYS5wbmcnXSxcbiAgWyd0ZXh0QicsICcvYXNzZXRzL3NraWxsLWIucG5nJ10sXG4gIFsndGV4dEMnLCAnL2Fzc2V0cy9za2lsbC1jLnBuZyddLFxuICBbJ3RleHRTJywgJy9hc3NldHMvc2tpbGwtcy5wbmcnXSxcbiAgWydhcmVuYUljb24nLCAnL2Fzc2V0cy9BcmVuYV9Dcm93bi5wbmcnXSxcbiAgWydza2lsbEFJY29uJywgJyddLFxuICBbJ3NraWxsQkljb24nLCAnJ10sXG4gIFsnc2tpbGxDSWNvbicsICcnXSxcbiAgWydzZWFsSWNvbicsICcnXSxcbiAgWydyZXNwbGVuZGVudEljb24nLCAnL2Fzc2V0cy9nb2Qtd2Vhci1sLnBuZyddLFxuXTtcblxuY29uc3QgZGVmYXVsdFNraWxsSWNvbnMgPSBbXG4gIHtcbiAgICBza2lsbE5hbWU6ICd3ZWFwb24nLFxuICAgIGVtcHR5OiAnL3NraWxscy93ZWFwb24ucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NraWxsQScsXG4gICAgZW1wdHk6ICcvc2tpbGxzL2VtcHR5LnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdza2lsbEInLFxuICAgIGVtcHR5OiAnL3NraWxscy9lbXB0eS5wbmcnLFxuICB9LFxuICB7XG4gICAgc2tpbGxOYW1lOiAnc2tpbGxDJyxcbiAgICBlbXB0eTogJy9za2lsbHMvZW1wdHkucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NlYWwnLFxuICAgIGVtcHR5OiAnL3NraWxscy9zZWFsLWVtcHR5LnBuZycsXG4gIH0sXG5dO1xuZXhwb3J0IHR5cGUgVEhvb2tQcm9wcyA9IHtcbiAgaGVyb0lkOiBzdHJpbmc7XG4gIHJhcml0eTogNSB8IDQ7XG4gIGl2OiBzdHJpbmc7XG4gIG1lcmdlOiBudW1iZXI7XG4gIGRyYWdvbmZsb3dlcjogbnVtYmVyO1xuICBibGVzc2luZzogc3RyaW5nO1xuICBzdXBwb3J0OiBib29sZWFuO1xuICBhcmVuYTogYm9vbGVhbjtcbiAgcmVzcGxlbmRlbnQ6IGJvb2xlYW47XG4gIC8qKiBza2lsbHMgKi9cbiAgd2VhcG9uOiBzdHJpbmc7XG4gIHJlZmluZTogc3RyaW5nO1xuICBhc3Npc3Q6IHN0cmluZztcbiAgc3BlY2lhbDogc3RyaW5nO1xuICBza2lsbEE6IHN0cmluZztcbiAgc2tpbGxCOiBzdHJpbmc7XG4gIHNraWxsQzogc3RyaW5nO1xuICBzZWFsOiBzdHJpbmc7XG4gIC8qKiBlZGl0b3IgKi9cbiAgbHYxOiBib29sZWFuO1xufTtcblxuZnVuY3Rpb24gdXNlSG9va3Moe1xuICBoZXJvSWQsXG4gIHJhcml0eSxcbiAgaXYsXG4gIG1lcmdlLFxuICBkcmFnb25mbG93ZXIsXG4gIGJsZXNzaW5nLFxuICBzdXBwb3J0LFxuICBhcmVuYSxcbiAgcmVzcGxlbmRlbnQsXG4gIC8qKiBza2lsbHMgKi9cbiAgd2VhcG9uLFxuICByZWZpbmUsXG4gIGFzc2lzdCxcbiAgc3BlY2lhbCxcbiAgc2tpbGxBLFxuICBza2lsbEIsXG4gIHNraWxsQyxcbiAgc2VhbCxcbiAgLyoqIGVkaXRvciAqL1xuICBsdjEsXG59OiBUSG9va1Byb3BzKSB7XG4gIGNvbnN0IGRiID0gdXNlRmVoREIoKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCB0ZXh0Q2FudmFzID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgY29uc3QgaGVyb1JlZiA9IHVzZVJlZjxUSGVybz4oKTtcbiAgY29uc3Qgc2tpbGxJbmZvc1JlZiA9IHVzZVJlZjx7XG4gICAgbmFtZXM6IFRTa2lsbElkcztcbiAgICBzdGF0czoge1xuICAgICAgaHA6IG51bWJlcjtcbiAgICAgIGF0azogbnVtYmVyO1xuICAgICAgc3BkOiBudW1iZXI7XG4gICAgICBkZWY6IG51bWJlcjtcbiAgICAgIHJlczogbnVtYmVyO1xuICAgIH07XG4gICAgYWNjZWxlcmF0ZTogbnVtYmVyO1xuICAgIHNwZWNpYWxDRDogbnVtYmVyO1xuICAgIHNwdDogbnVtYmVyO1xuICAgIGJzdDogbnVtYmVyO1xuICB9PigpO1xuICBjb25zdCBzdGF0c0luZm9zUmVmID0gdXNlUmVmPHtcbiAgICBzdGF0czogeyBbc3RhdEtleTogc3RyaW5nXTogbnVtYmVyIH07XG4gICAgYnN0OiBudW1iZXI7XG4gIH0+KCk7XG4gIGNvbnN0IHJhcml0eVJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG4gIGNvbnN0IGl2UmVmID0gdXNlUmVmPHN0cmluZz4oKTtcbiAgY29uc3QgbWVyZ2VSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuICBjb25zdCBkcmFnb25mbG93ZXJSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuICBjb25zdCBibGVzc2luZ1JlZiA9IHVzZVJlZjxzdHJpbmc+KCk7XG4gIGNvbnN0IHN1cHBvcnRSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oKTtcbiAgY29uc3QgYXJlbmFSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oKTtcbiAgY29uc3QgcmVzcGxlbmRlbnRSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oKTtcbiAgY29uc3QgcmVmaW5lUmVmID0gdXNlUmVmPHN0cmluZz4oKTtcbiAgY29uc3QgbHYxUmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHNjb3JlUmVmID0gdXNlUmVmPG51bWJlcj4oKTtcblxuICBjb25zdCBoZXJvID0gdXNlTWVtbygoKSA9PiBnZXRIZXJvKGRiLmhlcm9EQiwgaGVyb0lkKSwgW2RiLmhlcm9EQiwgaGVyb0lkXSk7XG5cbiAgY29uc3Qgc2tpbGxzID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoeyB3ZWFwb24sIGFzc2lzdCwgc3BlY2lhbCwgc2tpbGxBLCBza2lsbEIsIHNraWxsQywgc2VhbCB9KSxcbiAgICBbd2VhcG9uLCBhc3Npc3QsIHNwZWNpYWwsIHNraWxsQSwgc2tpbGxCLCBza2lsbEMsIHNlYWxdLFxuICApO1xuICBjb25zdCBzdGF0cyA9IGhlcm8uc3RhdHM7XG4gIGNvbnN0IHNraWxsSW5mb3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBnZXRTa2lsbEluZm9zKHtcbiAgICAgICAgaGVyb0RCOiBkYi5oZXJvREIsXG4gICAgICAgIHdlYXBvbkRCOiBkYi53ZWFwb25EQixcbiAgICAgICAgYXNzaXN0REI6IGRiLmFzc2lzdERCLFxuICAgICAgICBzcGVjaWFsREI6IGRiLnNwZWNpYWxEQixcbiAgICAgICAgc2tpbGxBREI6IGRiLnNraWxsQURCLFxuICAgICAgICBza2lsbEJEQjogZGIuc2tpbGxCREIsXG4gICAgICAgIHNraWxsQ0RCOiBkYi5za2lsbENEQixcbiAgICAgICAgc2VhbERCOiBkYi5zZWFsREIsXG4gICAgICAgIHNraWxscyxcbiAgICAgICAgaGVyb0lkLFxuICAgICAgICByZWZpbmUsXG4gICAgICAgIHJhcml0eSxcbiAgICAgIH0pLFxuICAgIFtcbiAgICAgIHNraWxscyxcbiAgICAgIGhlcm9JZCxcbiAgICAgIHJlZmluZSxcbiAgICAgIHJhcml0eSxcbiAgICAgIGRiLmhlcm9EQixcbiAgICAgIGRiLndlYXBvbkRCLFxuICAgICAgZGIuYXNzaXN0REIsXG4gICAgICBkYi5zcGVjaWFsREIsXG4gICAgICBkYi5za2lsbEFEQixcbiAgICAgIGRiLnNraWxsQkRCLFxuICAgICAgZGIuc2tpbGxDREIsXG4gICAgICBkYi5zZWFsREIsXG4gICAgXSxcbiAgKTtcblxuICBjb25zdCBzdGF0c0luZm9zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2V0U3RhdHMoXG4gICAgICAgIHJhcml0eSxcbiAgICAgICAgc3RhdHMsXG4gICAgICAgIGl2LFxuICAgICAgICBtZXJnZSxcbiAgICAgICAgc3VwcG9ydCxcbiAgICAgICAgc2tpbGxJbmZvcy5zdGF0cyxcbiAgICAgICAgbHYxLFxuICAgICAgICBhcmVuYSxcbiAgICAgICAgZHJhZ29uZmxvd2VyLFxuICAgICAgICByZXNwbGVuZGVudCxcbiAgICAgICksXG4gICAgW1xuICAgICAgcmFyaXR5LFxuICAgICAgc3RhdHMsXG4gICAgICBpdixcbiAgICAgIG1lcmdlLFxuICAgICAgc3VwcG9ydCxcbiAgICAgIHNraWxsSW5mb3MsXG4gICAgICBsdjEsXG4gICAgICBhcmVuYSxcbiAgICAgIGRyYWdvbmZsb3dlcixcbiAgICAgIHJlc3BsZW5kZW50LFxuICAgIF0sXG4gICk7XG4gIGNvbnN0IHNjb3JlID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgYXJlbmFTY29yZSh7XG4gICAgICAgIHJhcml0eSxcbiAgICAgICAgbWVyZ2UsXG4gICAgICAgIGJzdDogTWF0aC5tYXgoc3RhdHNJbmZvcy5ic3QsIHNraWxsSW5mb3MuYnN0LCBoZXJvLmJzdCB8fCAwKSxcbiAgICAgICAgc3B0OiBza2lsbEluZm9zLnNwdCxcbiAgICAgIH0pLFxuICAgIFtyYXJpdHksIG1lcmdlLCBzdGF0c0luZm9zLmJzdCwgc2tpbGxJbmZvcy5ic3QsIHNraWxsSW5mb3Muc3B0LCBoZXJvXSxcbiAgKTtcblxuICBjb25zdCBsb2FkZXJzID0gdXNlUmVmPHsgW2ltYWdlSWQ6IHN0cmluZ106IEltYWdlTG9hZGVyIH0+KHt9KTtcblxuICBjb25zdCBkcmF3ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgYmFja2dyb3VuZCxcbiAgICAgIGZvcmVncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kMixcbiAgICAgIHBvcnRyYWl0LFxuICAgICAgcmFyaXR5QXRsYXMsXG4gICAgICB3ZWFwb25UeXBlQXRsYXMsXG4gICAgICBtb3ZlVHlwZUF0bGFzLFxuICAgICAgZHJhZ29uZmxvd2VyQXRsYXMsXG4gICAgICBzdXBwb3J0QXRsYXMsXG4gICAgICBibGVzc2luZ0F0bGFzLFxuICAgICAgbnVtYmVyQXRsYXMsXG4gICAgICB3ZWFwb25JY29uLFxuICAgICAgYXNzaXN0SWNvbixcbiAgICAgIHNwZWNpYWxJY29uLFxuICAgICAgdGV4dEEsXG4gICAgICB0ZXh0QixcbiAgICAgIHRleHRDLFxuICAgICAgdGV4dFMsXG4gICAgICBhcmVuYUljb24sXG4gICAgICBza2lsbEFJY29uLFxuICAgICAgc2tpbGxCSWNvbixcbiAgICAgIHNraWxsQ0ljb24sXG4gICAgICBzZWFsSWNvbixcbiAgICAgIHJlc3BsZW5kZW50SWNvbixcbiAgICB9ID0gbG9hZGVycy5jdXJyZW50O1xuICAgIGNvbnN0IHsgdGl0bGUsIG5hbWUsIHdlYXBvblR5cGUsIG1vdmVUeXBlIH0gPSBoZXJvUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaGFzQmxlc3NpbmcgPSAhIWhlcm9SZWYuY3VycmVudC5ibGVzc2luZyB8fCAhIWJsZXNzaW5nUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgNTQwLCA5NjApO1xuXG4gICAgaWYgKGJhY2tncm91bmQubG9hZGVkKSB7XG4gICAgICBkcmF3QmFja2dyb3VuZCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQuaW1hZ2UsXG4gICAgICAgIHN1cHBvcnQ6IHN1cHBvcnRSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocG9ydHJhaXQubG9hZGVkKSB7XG4gICAgICBkcmF3UG9ydHJhaXQoeyBjb250ZXh0LCBwb3J0cmFpdDogcG9ydHJhaXQuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChmb3JlZ3JvdW5kLmxvYWRlZCkge1xuICAgICAgZHJhd0ZvcmVncm91bmQoeyBjb250ZXh0LCBmb3JlZ3JvdW5kOiBmb3JlZ3JvdW5kLmltYWdlIH0pO1xuICAgIH1cbiAgICBpZiAoZm9yZWdyb3VuZDIubG9hZGVkKSB7XG4gICAgICBkcmF3Rm9yZWdyb3VuZDIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBmb3JlZ3JvdW5kMjogZm9yZWdyb3VuZDIuaW1hZ2UsXG4gICAgICAgIGRyYWdvbmZsb3dlcjogZHJhZ29uZmxvd2VyUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJhcml0eUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1Jhcml0eSh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHJhcml0eUF0bGFzOiByYXJpdHlBdGxhcy5pbWFnZSxcbiAgICAgICAgcmFyaXR5OiByYXJpdHlSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAod2VhcG9uVHlwZUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1dlYXBvblR5cGUoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICB3ZWFwb25UeXBlQXRsYXM6IHdlYXBvblR5cGVBdGxhcy5pbWFnZSxcbiAgICAgICAgd2VhcG9uVHlwZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobW92ZVR5cGVBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdNb3ZlVHlwZSh7IGNvbnRleHQsIG1vdmVUeXBlQXRsYXM6IG1vdmVUeXBlQXRsYXMuaW1hZ2UsIG1vdmVUeXBlIH0pO1xuICAgIH1cbiAgICBpZiAoZHJhZ29uZmxvd2VyQXRsYXMubG9hZGVkICYmIG51bWJlckF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0RyYWdvbmZsb3dlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRyYWdvbmZsb3dlckF0bGFzOiBkcmFnb25mbG93ZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBtb3ZlVHlwZSxcbiAgICAgICAgZHJhZ29uZmxvd2VyOiBkcmFnb25mbG93ZXJSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydEF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1N1cHBvcnQoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdXBwb3J0QXRsYXM6IHN1cHBvcnRBdGxhcy5pbWFnZSxcbiAgICAgICAgc3VwcG9ydDogc3VwcG9ydFJlZi5jdXJyZW50LFxuICAgICAgICBoYXNCbGVzc2luZyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxlc3NpbmdBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdCbGVzc2luZyh7IGNvbnRleHQsIGJsZXNzaW5nQXRsYXM6IGJsZXNzaW5nQXRsYXMuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChudW1iZXJBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdMZXZlbCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgbHYxOiBsdjFSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgICAgZHJhd01lcmdlKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBtZXJnZTogbWVyZ2VSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coc2tpbGxJbmZvc1JlZi5jdXJyZW50LmJzdCwgaGVyb1JlZi5jdXJyZW50LmJzdCk7XG4gICAgICBkcmF3U3RhdE51bWJlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgc2NvcmU6IHNjb3JlUmVmLmN1cnJlbnQsXG4gICAgICAgIHNic3Q6IE1hdGgubWF4KHNraWxsSW5mb3NSZWYuY3VycmVudC5ic3QsIGhlcm9SZWYuY3VycmVudC5ic3QpLFxuICAgICAgICAuLi5zdGF0c0luZm9zUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICAgIGRyYXdTcGVjaWFsTnVtYmVyKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBhY2NlbGVyYXRlOiBza2lsbEluZm9zUmVmLmN1cnJlbnQuYWNjZWxlcmF0ZSxcbiAgICAgICAgc3BlY2lhbENEOiBza2lsbEluZm9zUmVmLmN1cnJlbnQuc3BlY2lhbENELFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdTa2lsbEljb24oe1xuICAgICAgY29udGV4dCxcbiAgICAgIHdlYXBvbkljb24sXG4gICAgICBhc3Npc3RJY29uLFxuICAgICAgc3BlY2lhbEljb24sXG4gICAgICB0ZXh0QSxcbiAgICAgIHRleHRCLFxuICAgICAgdGV4dEMsXG4gICAgICB0ZXh0UyxcbiAgICAgIHNraWxsQUljb24sXG4gICAgICBza2lsbEJJY29uLFxuICAgICAgc2tpbGxDSWNvbixcbiAgICAgIHNlYWxJY29uLFxuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb250ZXh0ID0gdGV4dENhbnZhcy5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGV4dENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDEwODAsIDE5MjApO1xuICAgIGRyYXdTdGF0VGV4dCh7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIGl2OiBpdlJlZi5jdXJyZW50LFxuICAgICAgbWVyZ2U6IG1lcmdlUmVmLmN1cnJlbnQsXG4gICAgfSk7XG4gICAgZHJhd1NraWxsVGV4dCh7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIHJlZmluZTogcmVmaW5lUmVmLmN1cnJlbnQsXG4gICAgICAuLi5za2lsbEluZm9zUmVmLmN1cnJlbnQubmFtZXMsXG4gICAgfSk7XG4gICAgZHJhd0Rlc2NyaXB0aW9uKHtcbiAgICAgIGNhbnZhczogdGV4dENhbnZhcy5jdXJyZW50LFxuICAgICAgdGl0bGUsXG4gICAgICBuYW1lLFxuICAgIH0pO1xuICAgIGlmIChhcmVuYVJlZi5jdXJyZW50ICYmIGFyZW5hSWNvbikge1xuICAgICAgZHJhd0FyZW5hSWNvbih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGFyZW5hSWNvbjogYXJlbmFJY29uLmltYWdlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChyZXNwbGVuZGVudFJlZi5jdXJyZW50ICYmIHJlc3BsZW5kZW50SWNvbikge1xuICAgICAgZHJhd1Jlc3BsZW5kZW50SWNvbih7IGNvbnRleHQsIHJlc3BsZW5kZW50SWNvbjogcmVzcGxlbmRlbnRJY29uLmltYWdlIH0pO1xuICAgIH1cbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0ZXh0Q2FudmFzLmN1cnJlbnQsIDAsIDAsIDU0MCwgOTYwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50LndpZHRoID0gMTA4MDtcbiAgICB0ZXh0Q2FudmFzLmN1cnJlbnQuaGVpZ2h0ID0gMTkyMDtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW1hZ2VJZEFuZFNyYy5mb3JFYWNoKChbaW1hZ2VJZCwgaW1nU3JjXSkgPT4ge1xuICAgICAgbG9hZGVycy5jdXJyZW50W2ltYWdlSWRdID0gbmV3IEltYWdlTG9hZGVyKGRyYXcpO1xuICAgICAgbG9hZGVycy5jdXJyZW50W2ltYWdlSWRdLmxvYWQobWFwQmFzZVBhdGhVcmwoaW1nU3JjKSk7XG4gICAgfSk7XG4gIH0sIFtsb2FkZXJzLCBkcmF3XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwb3J0cmFpdCA9IHRvUmVzcGxlbmRlbnQoe1xuICAgICAgcmVzcGxlbmRlbnREQjogZGIucmVzcGxlbmRlbnREQixcbiAgICAgIGhlcm9JZDogaGVyby5pZCxcbiAgICAgIGVuYWJsZTogcmVzcGxlbmRlbnQsXG4gICAgfSk7XG4gICAgbG9hZGVycy5jdXJyZW50LnBvcnRyYWl0LmxvYWQobWFwQmFzZVBhdGhVcmwoYC9wb3J0cmFpdHMvJHtwb3J0cmFpdH0ucG5nYCkpO1xuICAgIGNvbnN0IGljb25zID0gZ2V0U2tpbGxJY29ucyh7XG4gICAgICBoZXJvREI6IGRiLmhlcm9EQixcbiAgICAgIHdlYXBvbkRCOiBkYi53ZWFwb25EQixcbiAgICAgIGFzc2lzdERCOiBkYi5hc3Npc3REQixcbiAgICAgIHNwZWNpYWxEQjogZGIuc3BlY2lhbERCLFxuICAgICAgc2tpbGxBREI6IGRiLnNraWxsQURCLFxuICAgICAgc2tpbGxCREI6IGRiLnNraWxsQkRCLFxuICAgICAgc2tpbGxDREI6IGRiLnNraWxsQ0RCLFxuICAgICAgc2VhbERCOiBkYi5zZWFsREIsXG4gICAgICBza2lsbHMsXG4gICAgICBoZXJvSWQ6IGhlcm8uaWQsXG4gICAgICByZWZpbmUsXG4gICAgfSk7XG5cbiAgICBkZWZhdWx0U2tpbGxJY29ucy5mb3JFYWNoKCh7IHNraWxsTmFtZSwgZW1wdHkgfSkgPT4ge1xuICAgICAgbG9hZGVycy5jdXJyZW50W2Ake3NraWxsTmFtZX1JY29uYF0ubG9hZChcbiAgICAgICAgbWFwQmFzZVBhdGhVcmwoYCR7aWNvbnNbc2tpbGxOYW1lXSB8fCBlbXB0eX1gKSxcbiAgICAgICk7XG4gICAgfSk7XG4gICAgY29uc3QgaGFzQmxlc3NpbmcgPVxuICAgICAgKGhlcm8uYmxlc3NpbmcgIT09ICctJyAmJiAhIWhlcm8uYmxlc3NpbmcpIHx8ICEhYmxlc3Npbmc7XG4gICAgY29uc3QgYmxlc3NpbmdJbWcgPSBtYXBCYXNlUGF0aFVybChcbiAgICAgIGAvYXNzZXRzL2JsZXNzaW5nLSR7aGVyby5ibGVzc2luZyB8fCBibGVzc2luZ30ucG5nYCxcbiAgICApO1xuICAgIGxvYWRlcnMuY3VycmVudC5ibGVzc2luZ0F0bGFzLmxvYWQoaGFzQmxlc3NpbmcgPyBibGVzc2luZ0ltZyA6ICcnKTtcbiAgfSwgW1xuICAgIGhlcm8sXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgc2tpbGxzLFxuICAgIHJlZmluZSxcbiAgICBibGVzc2luZyxcbiAgICBzdGF0c0luZm9zLFxuICAgIGRiLmhlcm9EQixcbiAgICBkYi53ZWFwb25EQixcbiAgICBkYi5hc3Npc3REQixcbiAgICBkYi5zcGVjaWFsREIsXG4gICAgZGIuc2tpbGxBREIsXG4gICAgZGIuc2tpbGxCREIsXG4gICAgZGIuc2tpbGxDREIsXG4gICAgZGIuc2VhbERCLFxuICAgIGRiLnJlc3BsZW5kZW50REIsXG4gIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGVyb1JlZi5jdXJyZW50ID0gaGVybztcbiAgICByYXJpdHlSZWYuY3VycmVudCA9IHJhcml0eTtcbiAgICBpdlJlZi5jdXJyZW50ID0gaXY7XG4gICAgbWVyZ2VSZWYuY3VycmVudCA9IG1lcmdlO1xuICAgIGRyYWdvbmZsb3dlclJlZi5jdXJyZW50ID0gZHJhZ29uZmxvd2VyO1xuICAgIGJsZXNzaW5nUmVmLmN1cnJlbnQgPSBibGVzc2luZztcbiAgICBzdXBwb3J0UmVmLmN1cnJlbnQgPSBzdXBwb3J0O1xuICAgIGFyZW5hUmVmLmN1cnJlbnQgPSBhcmVuYTtcbiAgICByZXNwbGVuZGVudFJlZi5jdXJyZW50ID0gcmVzcGxlbmRlbnQ7XG4gICAgcmVmaW5lUmVmLmN1cnJlbnQgPSByZWZpbmU7XG4gICAgbHYxUmVmLmN1cnJlbnQgPSBsdjE7XG4gICAgc2NvcmVSZWYuY3VycmVudCA9IHNjb3JlO1xuICAgIHNraWxsSW5mb3NSZWYuY3VycmVudCA9IHNraWxsSW5mb3M7XG4gICAgc3RhdHNJbmZvc1JlZi5jdXJyZW50ID0gc3RhdHNJbmZvcztcbiAgICBkcmF3KCk7XG4gIH0sIFtcbiAgICBoZXJvLFxuICAgIHJhcml0eSxcbiAgICBpdixcbiAgICBtZXJnZSxcbiAgICBkcmFnb25mbG93ZXIsXG4gICAgYmxlc3NpbmcsXG4gICAgc3VwcG9ydCxcbiAgICBhcmVuYSxcbiAgICByZXNwbGVuZGVudCxcbiAgICByZWZpbmUsXG4gICAgbHYxLFxuICAgIHNjb3JlLFxuICAgIHNraWxsSW5mb3MsXG4gICAgc3RhdHNJbmZvcyxcbiAgICBkcmF3LFxuICBdKTtcblxuICBjb25zdCB0cmlnZ2VyRG93bmxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgZGF0YVVSTCA9IGNhbnZhc1JlZi5jdXJyZW50LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSBkYXRhVVJMO1xuICAgIGxpbmsuZG93bmxvYWQgPSBgJHtoZXJvPy5uYW1lfS0ke2hlcm8/LnRpdGxlfS5wbmdgO1xuICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgfSwgW2hlcm8/Lm5hbWUsIGhlcm8/LnRpdGxlXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjYW52YXNSZWYsXG4gICAgdHJpZ2dlckRvd25sb2FkLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VIb29rcztcbiJdLCJzb3VyY2VSb290IjoiIn0=