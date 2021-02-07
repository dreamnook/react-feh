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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
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

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])(),
      basePath = _useRouter.basePath;

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
      loaders.current[imageId].load("".concat(basePath).concat(imgSrc));
    });
  }, [basePath, loaders, draw]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var portrait = Object(_app_utils_resplendent__WEBPACK_IMPORTED_MODULE_7__["toResplendent"])(hero.id, resplendent);
    loaders.current.portrait.load("/portraits/".concat(portrait, ".png"));
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
      loaders.current["".concat(skillName, "Icon")].load("".concat(basePath).concat(icons[skillName] || empty));
    });
    var hasBlessing = hero.blessing !== '-' && !!hero.blessing || !!blessing;
    loaders.current.blessingAtlas.load(hasBlessing ? "".concat(basePath, "/assets/blessing-").concat(hero.blessing || blessing, ".png") : '');
  }, [hero, resplendent, skills, refine, blessing, statsInfos, db.heroDB, db.weaponDB, db.assistDB, db.specialDB, db.skillADB, db.skillBDB, db.skillCDB, db.sealDB, basePath]);
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

_s(useHooks, "yBmo3muYQp7QBmlZivlZDz4wGhs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_9__["useFehDB"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9ob29rcy50c3giXSwibmFtZXMiOlsiaW1hZ2VJZEFuZFNyYyIsImRlZmF1bHRTa2lsbEljb25zIiwic2tpbGxOYW1lIiwiZW1wdHkiLCJ1c2VIb29rcyIsImhlcm9JZCIsInJhcml0eSIsIml2IiwibWVyZ2UiLCJkcmFnb25mbG93ZXIiLCJibGVzc2luZyIsInN1cHBvcnQiLCJhcmVuYSIsInJlc3BsZW5kZW50Iiwid2VhcG9uIiwicmVmaW5lIiwiYXNzaXN0Iiwic3BlY2lhbCIsInNraWxsQSIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJsdjEiLCJ1c2VSb3V0ZXIiLCJiYXNlUGF0aCIsImRiIiwidXNlRmVoREIiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ0ZXh0Q2FudmFzIiwiaGVyb1JlZiIsInNraWxsSW5mb3NSZWYiLCJzdGF0c0luZm9zUmVmIiwicmFyaXR5UmVmIiwiaXZSZWYiLCJtZXJnZVJlZiIsImRyYWdvbmZsb3dlclJlZiIsImJsZXNzaW5nUmVmIiwic3VwcG9ydFJlZiIsImFyZW5hUmVmIiwicmVzcGxlbmRlbnRSZWYiLCJyZWZpbmVSZWYiLCJsdjFSZWYiLCJzY29yZVJlZiIsImhlcm8iLCJ1c2VNZW1vIiwiZ2V0SGVybyIsImhlcm9EQiIsInNraWxscyIsInN0YXRzIiwic2tpbGxJbmZvcyIsImdldFNraWxsSW5mb3MiLCJ3ZWFwb25EQiIsImFzc2lzdERCIiwic3BlY2lhbERCIiwic2tpbGxBREIiLCJza2lsbEJEQiIsInNraWxsQ0RCIiwic2VhbERCIiwic3RhdHNJbmZvcyIsImdldFN0YXRzIiwic2NvcmUiLCJhcmVuYVNjb3JlIiwiYnN0IiwiTWF0aCIsIm1heCIsInNwdCIsImxvYWRlcnMiLCJkcmF3IiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiYmFja2dyb3VuZCIsImZvcmVncm91bmQiLCJmb3JlZ3JvdW5kMiIsInBvcnRyYWl0IiwicmFyaXR5QXRsYXMiLCJ3ZWFwb25UeXBlQXRsYXMiLCJtb3ZlVHlwZUF0bGFzIiwiZHJhZ29uZmxvd2VyQXRsYXMiLCJzdXBwb3J0QXRsYXMiLCJibGVzc2luZ0F0bGFzIiwibnVtYmVyQXRsYXMiLCJ3ZWFwb25JY29uIiwiYXNzaXN0SWNvbiIsInNwZWNpYWxJY29uIiwidGV4dEEiLCJ0ZXh0QiIsInRleHRDIiwidGV4dFMiLCJhcmVuYUljb24iLCJza2lsbEFJY29uIiwic2tpbGxCSWNvbiIsInNraWxsQ0ljb24iLCJzZWFsSWNvbiIsInJlc3BsZW5kZW50SWNvbiIsInRpdGxlIiwibmFtZSIsIndlYXBvblR5cGUiLCJtb3ZlVHlwZSIsImhhc0JsZXNzaW5nIiwiY29udGV4dCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJsb2FkZWQiLCJkcmF3QmFja2dyb3VuZCIsImltYWdlIiwiZHJhd1BvcnRyYWl0IiwiZHJhd0ZvcmVncm91bmQiLCJkcmF3Rm9yZWdyb3VuZDIiLCJkcmF3UmFyaXR5IiwiZHJhd1dlYXBvblR5cGUiLCJkcmF3TW92ZVR5cGUiLCJkcmF3RHJhZ29uZmxvd2VyIiwiZHJhd1N1cHBvcnQiLCJkcmF3Qmxlc3NpbmciLCJkcmF3TGV2ZWwiLCJkcmF3TWVyZ2UiLCJkcmF3U3RhdE51bWJlciIsInNic3QiLCJkcmF3U3BlY2lhbE51bWJlciIsImFjY2VsZXJhdGUiLCJzcGVjaWFsQ0QiLCJkcmF3U2tpbGxJY29uIiwidGV4dENvbnRleHQiLCJkcmF3U3RhdFRleHQiLCJjYW52YXMiLCJkcmF3U2tpbGxUZXh0IiwibmFtZXMiLCJkcmF3RGVzY3JpcHRpb24iLCJkcmF3QXJlbmFJY29uIiwiZHJhd1Jlc3BsZW5kZW50SWNvbiIsImRyYXdJbWFnZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yRWFjaCIsImltYWdlSWQiLCJpbWdTcmMiLCJJbWFnZUxvYWRlciIsImxvYWQiLCJ0b1Jlc3BsZW5kZW50IiwiaWQiLCJpY29ucyIsImdldFNraWxsSWNvbnMiLCJ0cmlnZ2VyRG93bmxvYWQiLCJkYXRhVVJMIiwidG9EYXRhVVJMIiwibGluayIsImhyZWYiLCJkb3dubG9hZCIsInRhcmdldCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQURvQixFQUVwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQUZvQixFQUdwQixDQUFDLGFBQUQsRUFBZ0IseUJBQWhCLENBSG9CLEVBSXBCLENBQUMsVUFBRCxFQUFhLEVBQWIsQ0FKb0IsRUFLcEIsQ0FBQyxhQUFELEVBQWdCLG9CQUFoQixDQUxvQixFQU1wQixDQUFDLGlCQUFELEVBQW9CLHlCQUFwQixDQU5vQixFQU9wQixDQUFDLGVBQUQsRUFBa0IsdUJBQWxCLENBUG9CLEVBUXBCLENBQUMsbUJBQUQsRUFBc0IsMEJBQXRCLENBUm9CLEVBU3BCLENBQUMsY0FBRCxFQUFpQixxQkFBakIsQ0FUb0IsRUFVcEIsQ0FBQyxlQUFELEVBQWtCLEVBQWxCLENBVm9CLEVBV3BCLENBQUMsYUFBRCxFQUFnQixvQkFBaEIsQ0FYb0IsRUFZcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fab0IsRUFhcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fib0IsRUFjcEIsQ0FBQyxhQUFELEVBQWdCLHFCQUFoQixDQWRvQixFQWVwQixDQUFDLE9BQUQsRUFBVSxxQkFBVixDQWZvQixFQWdCcEIsQ0FBQyxPQUFELEVBQVUscUJB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QUFpQ0EsSUFBSSxDQUFFbUQsS0FBdkM7QUFDQXNELFFBQUksQ0FBQ0csTUFBTCxHQUFjLFFBQWQ7QUFDQW5CLFlBQVEsQ0FBQ29CLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsSUFBMUI7QUFDQUEsUUFBSSxDQUFDTSxLQUFMO0FBQ0F0QixZQUFRLENBQUNvQixJQUFULENBQWNHLFdBQWQsQ0FBMEJQLElBQTFCO0FBQ0QsR0FUa0MsRUFTaEMsQ0FBQ3pHLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFb0QsSUFBUCxFQUFhcEQsSUFBYixhQUFhQSxJQUFiLHVCQUFhQSxJQUFJLENBQUVtRCxLQUFuQixDQVRnQyxDQUFuQztBQVdBLFNBQU87QUFDTHBFLGFBQVMsRUFBVEEsU0FESztBQUVMdUgsbUJBQWUsRUFBZkE7QUFGSyxHQUFQO0FBSUQ7O0dBdFpROUksUTtVQXNCY21CLHFELEVBRVZHLHdEOzs7QUFnWUV0Qix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLmVlZDc3YzI3OTUwZWQzMmZmMzUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBUSGVybywgVFNraWxsSWRzIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U2tpbGxJY29ucywgZ2V0U2tpbGxJbmZvcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHsgZ2V0U3RhdHMgfSBmcm9tICdAL2FwcC91dGlscy9zdGF0cyc7XG5pbXBvcnQgYXJlbmFTY29yZSBmcm9tICdAL2FwcC91dGlscy9hcmVuYXNjb3JlJztcbmltcG9ydCB7IHRvUmVzcGxlbmRlbnQgfSBmcm9tICdAL2FwcC91dGlscy9yZXNwbGVuZGVudCc7XG5pbXBvcnQgeyBnZXRIZXJvIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5pbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vSW1hZ2VMb2FkZXInO1xuaW1wb3J0IGRyYXdCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZC9kcmF3JztcbmltcG9ydCBkcmF3UG9ydHJhaXQgZnJvbSAnLi9Qb3J0cmFpdC9kcmF3JztcbmltcG9ydCBkcmF3Rm9yZWdyb3VuZCBmcm9tICcuL0ZvcmVncm91bmQvZHJhdyc7XG5pbXBvcnQgZHJhd0ZvcmVncm91bmQyIGZyb20gJy4vRm9yZWdyb3VuZDIvZHJhdyc7XG5pbXBvcnQgZHJhd1Jhcml0eSBmcm9tICcuL1Jhcml0eS9kcmF3JztcbmltcG9ydCBkcmF3V2VhcG9uVHlwZSBmcm9tICcuL1dlYXBvblR5cGUvZHJhdyc7XG5pbXBvcnQgZHJhd01vdmVUeXBlIGZyb20gJy4vTW92ZVR5cGUvZHJhdyc7XG5pbXBvcnQgZHJhd0RyYWdvbmZsb3dlciBmcm9tICcuL0RyYWdvbkZsb3dlci9kcmF3JztcbmltcG9ydCBkcmF3U3VwcG9ydCBmcm9tICcuL1N1cHBvcnQvZHJhdyc7XG5pbXBvcnQgZHJhd0JsZXNzaW5nIGZyb20gJy4vQmxlc3NpbmcvZHJhdyc7XG5pbXBvcnQgZHJhd1NraWxsSWNvbiBmcm9tICcuL1NraWxsSWNvbi9kcmF3JztcbmltcG9ydCBkcmF3TGV2ZWwgZnJvbSAnLi9MZXZlbC9kcmF3JztcbmltcG9ydCBkcmF3TWVyZ2UgZnJvbSAnLi9NZXJnZS9kcmF3JztcbmltcG9ydCBkcmF3U3RhdE51bWJlciBmcm9tICcuL1N0YXROdW1iZXIvZHJhdyc7XG5pbXBvcnQgZHJhd1NwZWNpYWxOdW1iZXIgZnJvbSAnLi9TcGVjaWFsTnVtYmVyL2RyYXcnO1xuaW1wb3J0IGRyYXdTdGF0VGV4dCBmcm9tICcuL1N0YXRUZXh0L2RyYXcnO1xuaW1wb3J0IGRyYXdTa2lsbFRleHQgZnJvbSAnLi9Ta2lsbFRleHQvZHJhdyc7XG5pbXBvcnQgZHJhd0Rlc2NyaXB0aW9uIGZyb20gJy4vRGVzY3JpcHRpb25UZXh0L2RyYXcnO1xuaW1wb3J0IGRyYXdBcmVuYUljb24gZnJvbSAnLi9BcmVuYUljb24vZHJhdyc7XG5pbXBvcnQgZHJhd1Jlc3BsZW5kZW50SWNvbiBmcm9tICcuL1Jlc3BsZW5kZW50SWNvbi9kcmF3JztcblxuY29uc3QgaW1hZ2VJZEFuZFNyYyA9IFtcbiAgWydiYWNrZ3JvdW5kJywgJy9hc3NldHMvYmFja2dyb3VuZC5qcGcnXSxcbiAgWydmb3JlZ3JvdW5kJywgJy9hc3NldHMvZm9yZWdyb3VuZC5wbmcnXSxcbiAgWydmb3JlZ3JvdW5kMicsICcvYXNzZXRzL2ZvcmVncm91bmQyLnBuZyddLFxuICBbJ3BvcnRyYWl0JywgJyddLFxuICBbJ3Jhcml0eUF0bGFzJywgJy9hc3NldHMvcmFyaXR5LnBuZyddLFxuICBbJ3dlYXBvblR5cGVBdGxhcycsICcvYXNzZXRzL3dlYXBvbi10eXBlLnBuZyddLFxuICBbJ21vdmVUeXBlQXRsYXMnLCAnL2Fzc2V0cy9tb3ZlLXR5cGUucG5nJ10sXG4gIFsnZHJhZ29uZmxvd2VyQXRsYXMnLCAnL2Fzc2V0cy9kcmFnb25mbG93ZXIucG5nJ10sXG4gIFsnc3VwcG9ydEF0bGFzJywgJy9hc3NldHMvc3VwcG9ydC5wbmcnXSxcbiAgWydibGVzc2luZ0F0bGFzJywgJyddLFxuICBbJ251bWJlckF0bGFzJywgJy9hc3NldHMvbnVtYmVyLnBuZyddLFxuICBbJ3dlYXBvbkljb24nLCAnL3NraWxscy93ZWFwb24ucG5nJ10sXG4gIFsnYXNzaXN0SWNvbicsICcvc2tpbGxzL2Fzc2lzdC5wbmcnXSxcbiAgWydzcGVjaWFsSWNvbicsICcvc2tpbGxzL3NwZWNpYWwucG5nJ10sXG4gIFsndGV4dEEnLCAnL2Fzc2V0cy9za2lsbC1hLnBuZyddLFxuICBbJ3RleHRCJywgJy9hc3NldHMvc2tpbGwtYi5wbmcnXSxcbiAgWyd0ZXh0QycsICcvYXNzZXRzL3NraWxsLWMucG5nJ10sXG4gIFsndGV4dFMnLCAnL2Fzc2V0cy9za2lsbC1zLnBuZyddLFxuICBbJ2FyZW5hSWNvbicsICcvYXNzZXRzL0FyZW5hX0Nyb3duLnBuZyddLFxuICBbJ3NraWxsQUljb24nLCAnJ10sXG4gIFsnc2tpbGxCSWNvbicsICcnXSxcbiAgWydza2lsbENJY29uJywgJyddLFxuICBbJ3NlYWxJY29uJywgJyddLFxuICBbJ3Jlc3BsZW5kZW50SWNvbicsICcvYXNzZXRzL2dvZC13ZWFyLWwucG5nJ10sXG5dO1xuXG5jb25zdCBkZWZhdWx0U2tpbGxJY29ucyA9IFtcbiAge1xuICAgIHNraWxsTmFtZTogJ3dlYXBvbicsXG4gICAgZW1wdHk6ICcvc2tpbGxzL3dlYXBvbi5wbmcnLFxuICB9LFxuICB7XG4gICAgc2tpbGxOYW1lOiAnc2tpbGxBJyxcbiAgICBlbXB0eTogJy9za2lsbHMvZW1wdHkucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NraWxsQicsXG4gICAgZW1wdHk6ICcvc2tpbGxzL2VtcHR5LnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdza2lsbEMnLFxuICAgIGVtcHR5OiAnL3NraWxscy9lbXB0eS5wbmcnLFxuICB9LFxuICB7XG4gICAgc2tpbGxOYW1lOiAnc2VhbCcsXG4gICAgZW1wdHk6ICcvc2tpbGxzL3NlYWwtZW1wdHkucG5nJyxcbiAgfSxcbl07XG5leHBvcnQgdHlwZSBUSG9va1Byb3BzID0ge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgcmFyaXR5OiA1IHwgNDtcbiAgaXY6IHN0cmluZztcbiAgbWVyZ2U6IG51bWJlcjtcbiAgZHJhZ29uZmxvd2VyOiBudW1iZXI7XG4gIGJsZXNzaW5nOiBzdHJpbmc7XG4gIHN1cHBvcnQ6IGJvb2xlYW47XG4gIGFyZW5hOiBib29sZWFuO1xuICByZXNwbGVuZGVudDogYm9vbGVhbjtcbiAgLyoqIHNraWxscyAqL1xuICB3ZWFwb246IHN0cmluZztcbiAgcmVmaW5lOiBzdHJpbmc7XG4gIGFzc2lzdDogc3RyaW5nO1xuICBzcGVjaWFsOiBzdHJpbmc7XG4gIHNraWxsQTogc3RyaW5nO1xuICBza2lsbEI6IHN0cmluZztcbiAgc2tpbGxDOiBzdHJpbmc7XG4gIHNlYWw6IHN0cmluZztcbiAgLyoqIGVkaXRvciAqL1xuICBsdjE6IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiB1c2VIb29rcyh7XG4gIGhlcm9JZCxcbiAgcmFyaXR5LFxuICBpdixcbiAgbWVyZ2UsXG4gIGRyYWdvbmZsb3dlcixcbiAgYmxlc3NpbmcsXG4gIHN1cHBvcnQsXG4gIGFyZW5hLFxuICByZXNwbGVuZGVudCxcbiAgLyoqIHNraWxscyAqL1xuICB3ZWFwb24sXG4gIHJlZmluZSxcbiAgYXNzaXN0LFxuICBzcGVjaWFsLFxuICBza2lsbEEsXG4gIHNraWxsQixcbiAgc2tpbGxDLFxuICBzZWFsLFxuICAvKiogZWRpdG9yICovXG4gIGx2MSxcbn06IFRIb29rUHJvcHMpIHtcbiAgY29uc3QgeyBiYXNlUGF0aCB9ID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZGIgPSB1c2VGZWhEQigpO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHRleHRDYW52YXMgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBoZXJvUmVmID0gdXNlUmVmPFRIZXJvPigpO1xuICBjb25zdCBza2lsbEluZm9zUmVmID0gdXNlUmVmPHtcbiAgICBuYW1lczogVFNraWxsSWRzO1xuICAgIHN0YXRzOiB7XG4gICAgICBocDogbnVtYmVyO1xuICAgICAgYXRrOiBudW1iZXI7XG4gICAgICBzcGQ6IG51bWJlcjtcbiAgICAgIGRlZjogbnVtYmVyO1xuICAgICAgcmVzOiBudW1iZXI7XG4gICAgfTtcbiAgICBhY2NlbGVyYXRlOiBudW1iZXI7XG4gICAgc3BlY2lhbENEOiBudW1iZXI7XG4gICAgc3B0OiBudW1iZXI7XG4gICAgYnN0OiBudW1iZXI7XG4gIH0+KCk7XG4gIGNvbnN0IHN0YXRzSW5mb3NSZWYgPSB1c2VSZWY8e1xuICAgIHN0YXRzOiB7IFtzdGF0S2V5OiBzdHJpbmddOiBudW1iZXIgfTtcbiAgICBic3Q6IG51bWJlcjtcbiAgfT4oKTtcbiAgY29uc3QgcmFyaXR5UmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgaXZSZWYgPSB1c2VSZWY8c3RyaW5nPigpO1xuICBjb25zdCBtZXJnZVJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG4gIGNvbnN0IGRyYWdvbmZsb3dlclJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG4gIGNvbnN0IGJsZXNzaW5nUmVmID0gdXNlUmVmPHN0cmluZz4oKTtcbiAgY29uc3Qgc3VwcG9ydFJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCBhcmVuYVJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCByZXNwbGVuZGVudFJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCByZWZpbmVSZWYgPSB1c2VSZWY8c3RyaW5nPigpO1xuICBjb25zdCBsdjFSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oKTtcbiAgY29uc3Qgc2NvcmVSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuXG4gIGNvbnN0IGhlcm8gPSB1c2VNZW1vKCgpID0+IGdldEhlcm8oZGIuaGVyb0RCLCBoZXJvSWQpLCBbZGIuaGVyb0RCLCBoZXJvSWRdKTtcblxuICBjb25zdCBza2lsbHMgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7IHdlYXBvbiwgYXNzaXN0LCBzcGVjaWFsLCBza2lsbEEsIHNraWxsQiwgc2tpbGxDLCBzZWFsIH0pLFxuICAgIFt3ZWFwb24sIGFzc2lzdCwgc3BlY2lhbCwgc2tpbGxBLCBza2lsbEIsIHNraWxsQywgc2VhbF1cbiAgKTtcbiAgY29uc3Qgc3RhdHMgPSBoZXJvLnN0YXRzO1xuICBjb25zdCBza2lsbEluZm9zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2V0U2tpbGxJbmZvcyh7XG4gICAgICAgIGhlcm9EQjogZGIuaGVyb0RCLFxuICAgICAgICB3ZWFwb25EQjogZGIud2VhcG9uREIsXG4gICAgICAgIGFzc2lzdERCOiBkYi5hc3Npc3REQixcbiAgICAgICAgc3BlY2lhbERCOiBkYi5zcGVjaWFsREIsXG4gICAgICAgIHNraWxsQURCOiBkYi5za2lsbEFEQixcbiAgICAgICAgc2tpbGxCREI6IGRiLnNraWxsQkRCLFxuICAgICAgICBza2lsbENEQjogZGIuc2tpbGxDREIsXG4gICAgICAgIHNlYWxEQjogZGIuc2VhbERCLFxuICAgICAgICBza2lsbHMsXG4gICAgICAgIGhlcm9JZCxcbiAgICAgICAgcmVmaW5lLFxuICAgICAgICByYXJpdHksXG4gICAgICB9KSxcbiAgICBbXG4gICAgICBza2lsbHMsXG4gICAgICBoZXJvSWQsXG4gICAgICByZWZpbmUsXG4gICAgICByYXJpdHksXG4gICAgICBkYi5oZXJvREIsXG4gICAgICBkYi53ZWFwb25EQixcbiAgICAgIGRiLmFzc2lzdERCLFxuICAgICAgZGIuc3BlY2lhbERCLFxuICAgICAgZGIuc2tpbGxBREIsXG4gICAgICBkYi5za2lsbEJEQixcbiAgICAgIGRiLnNraWxsQ0RCLFxuICAgICAgZGIuc2VhbERCLFxuICAgIF1cbiAgKTtcblxuICBjb25zdCBzdGF0c0luZm9zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2V0U3RhdHMoXG4gICAgICAgIHJhcml0eSxcbiAgICAgICAgc3RhdHMsXG4gICAgICAgIGl2LFxuICAgICAgICBtZXJnZSxcbiAgICAgICAgc3VwcG9ydCxcbiAgICAgICAgc2tpbGxJbmZvcy5zdGF0cyxcbiAgICAgICAgbHYxLFxuICAgICAgICBhcmVuYSxcbiAgICAgICAgZHJhZ29uZmxvd2VyLFxuICAgICAgICByZXNwbGVuZGVudFxuICAgICAgKSxcbiAgICBbXG4gICAgICByYXJpdHksXG4gICAgICBzdGF0cyxcbiAgICAgIGl2LFxuICAgICAgbWVyZ2UsXG4gICAgICBzdXBwb3J0LFxuICAgICAgc2tpbGxJbmZvcyxcbiAgICAgIGx2MSxcbiAgICAgIGFyZW5hLFxuICAgICAgZHJhZ29uZmxvd2VyLFxuICAgICAgcmVzcGxlbmRlbnQsXG4gICAgXVxuICApO1xuICBjb25zdCBzY29yZSA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGFyZW5hU2NvcmUoe1xuICAgICAgICByYXJpdHksXG4gICAgICAgIG1lcmdlLFxuICAgICAgICBic3Q6IE1hdGgubWF4KHN0YXRzSW5mb3MuYnN0LCBza2lsbEluZm9zLmJzdCwgaGVyby5ic3QgfHwgMCksXG4gICAgICAgIHNwdDogc2tpbGxJbmZvcy5zcHQsXG4gICAgICB9KSxcbiAgICBbcmFyaXR5LCBtZXJnZSwgc3RhdHNJbmZvcy5ic3QsIHNraWxsSW5mb3MuYnN0LCBza2lsbEluZm9zLnNwdCwgaGVyb11cbiAgKTtcblxuICBjb25zdCBsb2FkZXJzID0gdXNlUmVmPHsgW2ltYWdlSWQ6IHN0cmluZ106IEltYWdlTG9hZGVyIH0+KHt9KTtcblxuICBjb25zdCBkcmF3ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgYmFja2dyb3VuZCxcbiAgICAgIGZvcmVncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kMixcbiAgICAgIHBvcnRyYWl0LFxuICAgICAgcmFyaXR5QXRsYXMsXG4gICAgICB3ZWFwb25UeXBlQXRsYXMsXG4gICAgICBtb3ZlVHlwZUF0bGFzLFxuICAgICAgZHJhZ29uZmxvd2VyQXRsYXMsXG4gICAgICBzdXBwb3J0QXRsYXMsXG4gICAgICBibGVzc2luZ0F0bGFzLFxuICAgICAgbnVtYmVyQXRsYXMsXG4gICAgICB3ZWFwb25JY29uLFxuICAgICAgYXNzaXN0SWNvbixcbiAgICAgIHNwZWNpYWxJY29uLFxuICAgICAgdGV4dEEsXG4gICAgICB0ZXh0QixcbiAgICAgIHRleHRDLFxuICAgICAgdGV4dFMsXG4gICAgICBhcmVuYUljb24sXG4gICAgICBza2lsbEFJY29uLFxuICAgICAgc2tpbGxCSWNvbixcbiAgICAgIHNraWxsQ0ljb24sXG4gICAgICBzZWFsSWNvbixcbiAgICAgIHJlc3BsZW5kZW50SWNvbixcbiAgICB9ID0gbG9hZGVycy5jdXJyZW50O1xuICAgIGNvbnN0IHsgdGl0bGUsIG5hbWUsIHdlYXBvblR5cGUsIG1vdmVUeXBlIH0gPSBoZXJvUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaGFzQmxlc3NpbmcgPSAhIWhlcm9SZWYuY3VycmVudC5ibGVzc2luZyB8fCAhIWJsZXNzaW5nUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgNTQwLCA5NjApO1xuXG4gICAgaWYgKGJhY2tncm91bmQubG9hZGVkKSB7XG4gICAgICBkcmF3QmFja2dyb3VuZCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQuaW1hZ2UsXG4gICAgICAgIHN1cHBvcnQ6IHN1cHBvcnRSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocG9ydHJhaXQubG9hZGVkKSB7XG4gICAgICBkcmF3UG9ydHJhaXQoeyBjb250ZXh0LCBwb3J0cmFpdDogcG9ydHJhaXQuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChmb3JlZ3JvdW5kLmxvYWRlZCkge1xuICAgICAgZHJhd0ZvcmVncm91bmQoeyBjb250ZXh0LCBmb3JlZ3JvdW5kOiBmb3JlZ3JvdW5kLmltYWdlIH0pO1xuICAgIH1cbiAgICBpZiAoZm9yZWdyb3VuZDIubG9hZGVkKSB7XG4gICAgICBkcmF3Rm9yZWdyb3VuZDIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBmb3JlZ3JvdW5kMjogZm9yZWdyb3VuZDIuaW1hZ2UsXG4gICAgICAgIGRyYWdvbmZsb3dlcjogZHJhZ29uZmxvd2VyUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJhcml0eUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1Jhcml0eSh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHJhcml0eUF0bGFzOiByYXJpdHlBdGxhcy5pbWFnZSxcbiAgICAgICAgcmFyaXR5OiByYXJpdHlSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAod2VhcG9uVHlwZUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1dlYXBvblR5cGUoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICB3ZWFwb25UeXBlQXRsYXM6IHdlYXBvblR5cGVBdGxhcy5pbWFnZSxcbiAgICAgICAgd2VhcG9uVHlwZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobW92ZVR5cGVBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdNb3ZlVHlwZSh7IGNvbnRleHQsIG1vdmVUeXBlQXRsYXM6IG1vdmVUeXBlQXRsYXMuaW1hZ2UsIG1vdmVUeXBlIH0pO1xuICAgIH1cbiAgICBpZiAoZHJhZ29uZmxvd2VyQXRsYXMubG9hZGVkICYmIG51bWJlckF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0RyYWdvbmZsb3dlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRyYWdvbmZsb3dlckF0bGFzOiBkcmFnb25mbG93ZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBtb3ZlVHlwZSxcbiAgICAgICAgZHJhZ29uZmxvd2VyOiBkcmFnb25mbG93ZXJSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydEF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1N1cHBvcnQoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdXBwb3J0QXRsYXM6IHN1cHBvcnRBdGxhcy5pbWFnZSxcbiAgICAgICAgc3VwcG9ydDogc3VwcG9ydFJlZi5jdXJyZW50LFxuICAgICAgICBoYXNCbGVzc2luZyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxlc3NpbmdBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdCbGVzc2luZyh7IGNvbnRleHQsIGJsZXNzaW5nQXRsYXM6IGJsZXNzaW5nQXRsYXMuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChudW1iZXJBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdMZXZlbCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgbHYxOiBsdjFSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgICAgZHJhd01lcmdlKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBtZXJnZTogbWVyZ2VSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgICAgZHJhd1N0YXROdW1iZXIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIHNjb3JlOiBzY29yZVJlZi5jdXJyZW50LFxuICAgICAgICBzYnN0OiBNYXRoLm1heChza2lsbEluZm9zUmVmLmN1cnJlbnQuYnN0LCBoZXJvUmVmLmN1cnJlbnQuYnN0KSxcbiAgICAgICAgLi4uc3RhdHNJbmZvc1JlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3U3BlY2lhbE51bWJlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgYWNjZWxlcmF0ZTogc2tpbGxJbmZvc1JlZi5jdXJyZW50LmFjY2VsZXJhdGUsXG4gICAgICAgIHNwZWNpYWxDRDogc2tpbGxJbmZvc1JlZi5jdXJyZW50LnNwZWNpYWxDRCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3U2tpbGxJY29uKHtcbiAgICAgIGNvbnRleHQsXG4gICAgICB3ZWFwb25JY29uLFxuICAgICAgYXNzaXN0SWNvbixcbiAgICAgIHNwZWNpYWxJY29uLFxuICAgICAgdGV4dEEsXG4gICAgICB0ZXh0QixcbiAgICAgIHRleHRDLFxuICAgICAgdGV4dFMsXG4gICAgICBza2lsbEFJY29uLFxuICAgICAgc2tpbGxCSWNvbixcbiAgICAgIHNraWxsQ0ljb24sXG4gICAgICBzZWFsSWNvbixcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0Q29udGV4dCA9IHRleHRDYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRleHRDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAxMDgwLCAxOTIwKTtcbiAgICBkcmF3U3RhdFRleHQoe1xuICAgICAgY2FudmFzOiB0ZXh0Q2FudmFzLmN1cnJlbnQsXG4gICAgICBpdjogaXZSZWYuY3VycmVudCxcbiAgICAgIG1lcmdlOiBtZXJnZVJlZi5jdXJyZW50LFxuICAgIH0pO1xuICAgIGRyYXdTa2lsbFRleHQoe1xuICAgICAgY2FudmFzOiB0ZXh0Q2FudmFzLmN1cnJlbnQsXG4gICAgICByZWZpbmU6IHJlZmluZVJlZi5jdXJyZW50LFxuICAgICAgLi4uc2tpbGxJbmZvc1JlZi5jdXJyZW50Lm5hbWVzLFxuICAgIH0pO1xuICAgIGRyYXdEZXNjcmlwdGlvbih7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIHRpdGxlLFxuICAgICAgbmFtZSxcbiAgICB9KTtcbiAgICBpZiAoYXJlbmFSZWYuY3VycmVudCAmJiBhcmVuYUljb24pIHtcbiAgICAgIGRyYXdBcmVuYUljb24oe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBhcmVuYUljb246IGFyZW5hSWNvbi5pbWFnZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocmVzcGxlbmRlbnRSZWYuY3VycmVudCAmJiByZXNwbGVuZGVudEljb24pIHtcbiAgICAgIGRyYXdSZXNwbGVuZGVudEljb24oeyBjb250ZXh0LCByZXNwbGVuZGVudEljb246IHJlc3BsZW5kZW50SWNvbi5pbWFnZSB9KTtcbiAgICB9XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGV4dENhbnZhcy5jdXJyZW50LCAwLCAwLCA1NDAsIDk2MCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRleHRDYW52YXMuY3VycmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRleHRDYW52YXMuY3VycmVudC53aWR0aCA9IDEwODA7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50LmhlaWdodCA9IDE5MjA7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGltYWdlSWRBbmRTcmMuZm9yRWFjaCgoW2ltYWdlSWQsIGltZ1NyY10pID0+IHtcbiAgICAgIGxvYWRlcnMuY3VycmVudFtpbWFnZUlkXSA9IG5ldyBJbWFnZUxvYWRlcihkcmF3KTtcbiAgICAgIGxvYWRlcnMuY3VycmVudFtpbWFnZUlkXS5sb2FkKGAke2Jhc2VQYXRofSR7aW1nU3JjfWApO1xuICAgIH0pO1xuICB9LCBbYmFzZVBhdGgsIGxvYWRlcnMsIGRyYXddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBvcnRyYWl0ID0gdG9SZXNwbGVuZGVudChoZXJvLmlkLCByZXNwbGVuZGVudCk7XG4gICAgbG9hZGVycy5jdXJyZW50LnBvcnRyYWl0LmxvYWQoYC9wb3J0cmFpdHMvJHtwb3J0cmFpdH0ucG5nYCk7XG4gICAgY29uc3QgaWNvbnMgPSBnZXRTa2lsbEljb25zKHtcbiAgICAgIGhlcm9EQjogZGIuaGVyb0RCLFxuICAgICAgd2VhcG9uREI6IGRiLndlYXBvbkRCLFxuICAgICAgYXNzaXN0REI6IGRiLmFzc2lzdERCLFxuICAgICAgc3BlY2lhbERCOiBkYi5zcGVjaWFsREIsXG4gICAgICBza2lsbEFEQjogZGIuc2tpbGxBREIsXG4gICAgICBza2lsbEJEQjogZGIuc2tpbGxCREIsXG4gICAgICBza2lsbENEQjogZGIuc2tpbGxDREIsXG4gICAgICBzZWFsREI6IGRiLnNlYWxEQixcbiAgICAgIHNraWxscyxcbiAgICAgIGhlcm9JZDogaGVyby5pZCxcbiAgICAgIHJlZmluZSxcbiAgICB9KTtcblxuICAgIGRlZmF1bHRTa2lsbEljb25zLmZvckVhY2goKHsgc2tpbGxOYW1lLCBlbXB0eSB9KSA9PiB7XG4gICAgICBsb2FkZXJzLmN1cnJlbnRbYCR7c2tpbGxOYW1lfUljb25gXS5sb2FkKFxuICAgICAgICBgJHtiYXNlUGF0aH0ke2ljb25zW3NraWxsTmFtZV0gfHwgZW1wdHl9YFxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zdCBoYXNCbGVzc2luZyA9XG4gICAgICAoaGVyby5ibGVzc2luZyAhPT0gJy0nICYmICEhaGVyby5ibGVzc2luZykgfHwgISFibGVzc2luZztcbiAgICBsb2FkZXJzLmN1cnJlbnQuYmxlc3NpbmdBdGxhcy5sb2FkKFxuICAgICAgaGFzQmxlc3NpbmdcbiAgICAgICAgPyBgJHtiYXNlUGF0aH0vYXNzZXRzL2JsZXNzaW5nLSR7aGVyby5ibGVzc2luZyB8fCBibGVzc2luZ30ucG5nYFxuICAgICAgICA6ICcnXG4gICAgKTtcbiAgfSwgW1xuICAgIGhlcm8sXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgc2tpbGxzLFxuICAgIHJlZmluZSxcbiAgICBibGVzc2luZyxcbiAgICBzdGF0c0luZm9zLFxuICAgIGRiLmhlcm9EQixcbiAgICBkYi53ZWFwb25EQixcbiAgICBkYi5hc3Npc3REQixcbiAgICBkYi5zcGVjaWFsREIsXG4gICAgZGIuc2tpbGxBREIsXG4gICAgZGIuc2tpbGxCREIsXG4gICAgZGIuc2tpbGxDREIsXG4gICAgZGIuc2VhbERCLFxuICAgIGJhc2VQYXRoLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhlcm9SZWYuY3VycmVudCA9IGhlcm87XG4gICAgcmFyaXR5UmVmLmN1cnJlbnQgPSByYXJpdHk7XG4gICAgaXZSZWYuY3VycmVudCA9IGl2O1xuICAgIG1lcmdlUmVmLmN1cnJlbnQgPSBtZXJnZTtcbiAgICBkcmFnb25mbG93ZXJSZWYuY3VycmVudCA9IGRyYWdvbmZsb3dlcjtcbiAgICBibGVzc2luZ1JlZi5jdXJyZW50ID0gYmxlc3Npbmc7XG4gICAgc3VwcG9ydFJlZi5jdXJyZW50ID0gc3VwcG9ydDtcbiAgICBhcmVuYVJlZi5jdXJyZW50ID0gYXJlbmE7XG4gICAgcmVzcGxlbmRlbnRSZWYuY3VycmVudCA9IHJlc3BsZW5kZW50O1xuICAgIHJlZmluZVJlZi5jdXJyZW50ID0gcmVmaW5lO1xuICAgIGx2MVJlZi5jdXJyZW50ID0gbHYxO1xuICAgIHNjb3JlUmVmLmN1cnJlbnQgPSBzY29yZTtcbiAgICBza2lsbEluZm9zUmVmLmN1cnJlbnQgPSBza2lsbEluZm9zO1xuICAgIHN0YXRzSW5mb3NSZWYuY3VycmVudCA9IHN0YXRzSW5mb3M7XG4gICAgZHJhdygpO1xuICB9LCBbXG4gICAgaGVybyxcbiAgICByYXJpdHksXG4gICAgaXYsXG4gICAgbWVyZ2UsXG4gICAgZHJhZ29uZmxvd2VyLFxuICAgIGJsZXNzaW5nLFxuICAgIHN1cHBvcnQsXG4gICAgYXJlbmEsXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgcmVmaW5lLFxuICAgIGx2MSxcbiAgICBzY29yZSxcbiAgICBza2lsbEluZm9zLFxuICAgIHN0YXRzSW5mb3MsXG4gICAgZHJhdyxcbiAgXSk7XG5cbiAgY29uc3QgdHJpZ2dlckRvd25sb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFVUkwgPSBjYW52YXNSZWYuY3VycmVudC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gZGF0YVVSTDtcbiAgICBsaW5rLmRvd25sb2FkID0gYCR7aGVybz8ubmFtZX0tJHtoZXJvPy50aXRsZX0ucG5nYDtcbiAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgbGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gIH0sIFtoZXJvPy5uYW1lLCBoZXJvPy50aXRsZV0pO1xuXG4gIHJldHVybiB7XG4gICAgY2FudmFzUmVmLFxuICAgIHRyaWdnZXJEb3dubG9hZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSG9va3M7XG4iXSwic291cmNlUm9vdCI6IiJ9