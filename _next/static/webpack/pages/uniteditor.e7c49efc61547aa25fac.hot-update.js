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
      loaders.current["".concat(skillName, "Icon")].load(icons[skillName] || empty);
    });
    var hasBlessing = hero.blessing !== '-' && !!hero.blessing || !!blessing;
    loaders.current.blessingAtlas.load(hasBlessing ? "assets/blessing-".concat(hero.blessing || blessing, ".png") : '');
  }, [hero, resplendent, skills, refine, blessing, statsInfos, db.heroDB, db.weaponDB, db.assistDB, db.specialDB, db.skillADB, db.skillBDB, db.skillCDB, db.sealDB, defaultSkillIcons]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9ob29rcy50c3giXSwibmFtZXMiOlsiaW1hZ2VJZEFuZFNyYyIsImRlZmF1bHRTa2lsbEljb25zIiwic2tpbGxOYW1lIiwiZW1wdHkiLCJ1c2VIb29rcyIsImhlcm9JZCIsInJhcml0eSIsIml2IiwibWVyZ2UiLCJkcmFnb25mbG93ZXIiLCJibGVzc2luZyIsInN1cHBvcnQiLCJhcmVuYSIsInJlc3BsZW5kZW50Iiwid2VhcG9uIiwicmVmaW5lIiwiYXNzaXN0Iiwic3BlY2lhbCIsInNraWxsQSIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJsdjEiLCJ1c2VSb3V0ZXIiLCJiYXNlUGF0aCIsImRiIiwidXNlRmVoREIiLCJjYW52YXNSZWYiLCJ1c2VSZWYiLCJ0ZXh0Q2FudmFzIiwiaGVyb1JlZiIsInNraWxsSW5mb3NSZWYiLCJzdGF0c0luZm9zUmVmIiwicmFyaXR5UmVmIiwiaXZSZWYiLCJtZXJnZVJlZiIsImRyYWdvbmZsb3dlclJlZiIsImJsZXNzaW5nUmVmIiwic3VwcG9ydFJlZiIsImFyZW5hUmVmIiwicmVzcGxlbmRlbnRSZWYiLCJyZWZpbmVSZWYiLCJsdjFSZWYiLCJzY29yZVJlZiIsImhlcm8iLCJ1c2VNZW1vIiwiZ2V0SGVybyIsImhlcm9EQiIsInNraWxscyIsInN0YXRzIiwic2tpbGxJbmZvcyIsImdldFNraWxsSW5mb3MiLCJ3ZWFwb25EQiIsImFzc2lzdERCIiwic3BlY2lhbERCIiwic2tpbGxBREIiLCJza2lsbEJEQiIsInNraWxsQ0RCIiwic2VhbERCIiwic3RhdHNJbmZvcyIsImdldFN0YXRzIiwic2NvcmUiLCJhcmVuYVNjb3JlIiwiYnN0IiwiTWF0aCIsIm1heCIsInNwdCIsImxvYWRlcnMiLCJkcmF3IiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiYmFja2dyb3VuZCIsImZvcmVncm91bmQiLCJmb3JlZ3JvdW5kMiIsInBvcnRyYWl0IiwicmFyaXR5QXRsYXMiLCJ3ZWFwb25UeXBlQXRsYXMiLCJtb3ZlVHlwZUF0bGFzIiwiZHJhZ29uZmxvd2VyQXRsYXMiLCJzdXBwb3J0QXRsYXMiLCJibGVzc2luZ0F0bGFzIiwibnVtYmVyQXRsYXMiLCJ3ZWFwb25JY29uIiwiYXNzaXN0SWNvbiIsInNwZWNpYWxJY29uIiwidGV4dEEiLCJ0ZXh0QiIsInRleHRDIiwidGV4dFMiLCJhcmVuYUljb24iLCJza2lsbEFJY29uIiwic2tpbGxCSWNvbiIsInNraWxsQ0ljb24iLCJzZWFsSWNvbiIsInJlc3BsZW5kZW50SWNvbiIsInRpdGxlIiwibmFtZSIsIndlYXBvblR5cGUiLCJtb3ZlVHlwZSIsImhhc0JsZXNzaW5nIiwiY29udGV4dCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJsb2FkZWQiLCJkcmF3QmFja2dyb3VuZCIsImltYWdlIiwiZHJhd1BvcnRyYWl0IiwiZHJhd0ZvcmVncm91bmQiLCJkcmF3Rm9yZWdyb3VuZDIiLCJkcmF3UmFyaXR5IiwiZHJhd1dlYXBvblR5cGUiLCJkcmF3TW92ZVR5cGUiLCJkcmF3RHJhZ29uZmxvd2VyIiwiZHJhd1N1cHBvcnQiLCJkcmF3Qmxlc3NpbmciLCJkcmF3TGV2ZWwiLCJkcmF3TWVyZ2UiLCJkcmF3U3RhdE51bWJlciIsInNic3QiLCJkcmF3U3BlY2lhbE51bWJlciIsImFjY2VsZXJhdGUiLCJzcGVjaWFsQ0QiLCJkcmF3U2tpbGxJY29uIiwidGV4dENvbnRleHQiLCJkcmF3U3RhdFRleHQiLCJjYW52YXMiLCJkcmF3U2tpbGxUZXh0IiwibmFtZXMiLCJkcmF3RGVzY3JpcHRpb24iLCJkcmF3QXJlbmFJY29uIiwiZHJhd1Jlc3BsZW5kZW50SWNvbiIsImRyYXdJbWFnZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9yRWFjaCIsImltYWdlSWQiLCJpbWdTcmMiLCJJbWFnZUxvYWRlciIsImxvYWQiLCJ0b1Jlc3BsZW5kZW50IiwiaWQiLCJpY29ucyIsImdldFNraWxsSWNvbnMiLCJ0cmlnZ2VyRG93bmxvYWQiLCJkYXRhVVJMIiwidG9EYXRhVVJMIiwibGluayIsImhyZWYiLCJkb3dubG9hZCIsInRhcmdldCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQURvQixFQUVwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQUZvQixFQUdwQixDQUFDLGFBQUQsRUFBZ0IseUJBQWhCLENBSG9CLEVBSXBCLENBQUMsVUFBRCxFQUFhLEVBQWIsQ0FKb0IsRUFLcEIsQ0FBQyxhQUFELEVBQWdCLG9CQUFoQixDQUxvQixFQU1wQixDQUFDLGlCQUFELEVBQW9CLHlCQUFwQixDQU5vQixFQU9wQixDQUFDLGVBQUQsRUFBa0IsdUJBQWxCLENBUG9CLEVBUXBCLENBQUMsbUJBQUQsRUFBc0IsMEJBQXRCLENBUm9CLEVBU3BCLENBQUMsY0FBRCxFQUFpQixxQkFBakIsQ0FUb0IsRUFVcEIsQ0FBQyxlQUFELEVBQWtCLEVBQWxCLENBVm9CLEVBV3BCLENBQUMsYUFBRCxFQUFnQixvQkFBaEIsQ0FYb0IsRUFZcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fab0IsRUFhcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fib0IsRUFjcEIsQ0FBQyxhQUFELEVBQWdCLHFCQUFoQixDQWRvQixFQWVwQixDQUFDLE9BQUQsRUFBVSxxQkFBVixDQWZvQixFQWdCcEIsQ0FBQyxPQUFELEVBQVUscUJBQVYsQ0FoQm9CLEVBaUJwQixDQUFDLE9BQUQsRUFBVSxxQkFBVixDQWpCb0IsRUFrQnBCLENBQUMsT0FBRCxFQUFVLHFCQUFWLENBbEJvQixFQW1CcEIsQ0FBQyxXQUFELEVBQWMseUJBQWQsQ0FuQm9CLEVBb0JwQixDQUFDLFlBQUQsRUFBZSxFQUFmLENBcEJvQixFQXFCcEIsQ0FBQyxZQUFELEVBQWUsRUFBZixDQXJCb0IsRUFzQnBCLENBQUMsWUFBRCxFQUFlLEVBQWYsQ0F0Qm9CLEVBdUJwQixDQUFDLFVBQUQsRUFBYSxFQUFiLENBdkJvQixFQXdCcEIsQ0FBQyxpQkFBRCxFQUFvQix3QkFBcEIsQ0F4Qm9CLENBQXRCO0FBMkJBLElBQU1DLGlCQUFpQixHQUFHLENBQ3hCO0FBQ0VDLFdBQVMsRUFBRSxRQURiO0FBRUVDLE9BQUssRUFBRTtBQUZULENBRHdCLEVBS3hCO0FBQ0VELFdBQVMsRUFBRSxRQURiO0FBRUVDLE9BQUssRUFBRTtBQUZULENBTHdCLEVBU3hCO0FBQ0VELFdBQVMsRUFBRSxRQURiO0FBRUVDLE9BQUssRUFBRTtBQUZULENBVHdCLEVBYXhCO0FBQ0VELFdBQVMsRUFBRSxRQURiO0FBRUVDLE9BQUssRUFBRTtBQUZULENBYndCLEVBaUJ4QjtBQUNFRCxXQUFTLEVBQUUsTUFEYjtBQUVFQyxPQUFLLEVBQUU7QUFGVCxDQWpCd0IsQ0FBMUI7O0FBNkNBLFNBQVNDLFFBQVQsT0FxQmU7QUFBQTs7QUFBQSxNQXBCYkMsTUFvQmEsUUFwQmJBLE1Bb0JhO0FBQUEsTUFuQmJDLE1BbUJhLFFBbkJiQSxNQW1CYTtBQUFBLE1BbEJiQyxFQWtCYSxRQWxCYkEsRUFrQmE7QUFBQSxNQWpCYkMsS0FpQmEsUUFqQmJBLEtBaUJhO0FBQUEsTUFoQmJDLFlBZ0JhLFFBaEJiQSxZQWdCYTtBQUFBLE1BZmJDLFFBZWEsUUFmYkEsUUFlYTtBQUFBLE1BZGJDLE9BY2EsUUFkYkEsT0FjYTtBQUFBLE1BYmJDLEtBYWEsUUFiYkEsS0FhYTtBQUFBLE1BWmJDLFdBWWEsUUFaYkEsV0FZYTtBQUFBLE1BVmJDLE1BVWEsUUFWYkEsTUFVYTtBQUFBLE1BVGJDLE1BU2EsUUFUYkEsTUFTYTtBQUFBLE1BUmJDLE1BUWEsUUFSYkEsTUFRYTtBQUFBLE1BUGJDLE9BT2EsUUFQYkEsT0FPYTtBQUFBLE1BTmJDLE1BTWEsUUFOYkEsTUFNYTtBQUFBLE1BTGJDLE1BS2EsUUFMYkEsTUFLYTtBQUFBLE1BSmJDLE1BSWEsUUFKYkEsTUFJYTtBQUFBLE1BSGJDLElBR2EsUUFIYkEsSUFHYTtBQUFBLE1BRGJDLEdBQ2EsUUFEYkEsR0FDYTs7QUFBQSxtQkFDUUMsNkRBQVMsRUFEakI7QUFBQSxNQUNMQyxRQURLLGNBQ0xBLFFBREs7O0FBR2IsTUFBTUMsRUFBRSxHQUFHQyxnRUFBUSxFQUFuQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHRCxvREFBTSxDQUFvQixJQUFwQixDQUF6QjtBQUNBLE1BQU1FLE9BQU8sR0FBR0Ysb0RBQU0sRUFBdEI7QUFDQSxNQUFNRyxhQUFhLEdBQUdILG9EQUFNLEVBQTVCO0FBY0EsTUFBTUksYUFBYSxHQUFHSixvREFBTSxFQUE1QjtBQUlBLE1BQU1LLFNBQVMsR0FBR0wsb0RBQU0sRUFBeEI7QUFDQSxNQUFNTSxLQUFLLEdBQUdOLG9EQUFNLEVBQXBCO0FBQ0EsTUFBTU8sUUFBUSxHQUFHUCxvREFBTSxFQUF2QjtBQUNBLE1BQU1RLGVBQWUsR0FBR1Isb0RBQU0sRUFBOUI7QUFDQSxNQUFNUyxXQUFXLEdBQUdULG9EQUFNLEVBQTFCO0FBQ0EsTUFBTVUsVUFBVSxHQUFHVixvREFBTSxFQUF6QjtBQUNBLE1BQU1XLFFBQVEsR0FBR1gsb0RBQU0sRUFBdkI7QUFDQSxNQUFNWSxjQUFjLEdBQUdaLG9EQUFNLEVBQTdCO0FBQ0EsTUFBTWEsU0FBUyxHQUFHYixvREFBTSxFQUF4QjtBQUNBLE1BQU1jLE1BQU0sR0FBR2Qsb0RBQU0sRUFBckI7QUFDQSxNQUFNZSxRQUFRLEdBQUdmLG9EQUFNLEVBQXZCO0FBRUEsTUFBTWdCLElBQUksR0FBR0MscURBQU8sQ0FBQztBQUFBLFdBQU1DLGlFQUFPLENBQUNyQixFQUFFLENBQUNzQixNQUFKLEVBQVkxQyxNQUFaLENBQWI7QUFBQSxHQUFELEVBQW1DLENBQUNvQixFQUFFLENBQUNzQixNQUFKLEVBQVkxQyxNQUFaLENBQW5DLENBQXBCO0FBRUEsTUFBTTJDLE1BQU0sR0FBR0gscURBQU8sQ0FDcEI7QUFBQSxXQUFPO0FBQUUvQixZQUFNLEVBQU5BLE1BQUY7QUFBVUUsWUFBTSxFQUFOQSxNQUFWO0FBQWtCQyxhQUFPLEVBQVBBLE9BQWxCO0FBQTJCQyxZQUFNLEVBQU5BLE1BQTNCO0FBQW1DQyxZQUFNLEVBQU5BLE1BQW5DO0FBQTJDQyxZQUFNLEVBQU5BLE1BQTNDO0FBQW1EQyxVQUFJLEVBQUpBO0FBQW5ELEtBQVA7QUFBQSxHQURvQixFQUVwQixDQUFDUCxNQUFELEVBQVNFLE1BQVQsRUFBaUJDLE9BQWpCLEVBQTBCQyxNQUExQixFQUFrQ0MsTUFBbEMsRUFBMENDLE1BQTFDLEVBQWtEQyxJQUFsRCxDQUZvQixDQUF0QjtBQUlBLE1BQU00QixLQUFLLEdBQUdMLElBQUksQ0FBQ0ssS0FBbkI7QUFDQSxNQUFNQyxVQUFVLEdBQUdMLHFEQUFPLENBQ3hCO0FBQUEsV0FDRU0sMkVBQWEsQ0FBQztBQUNaSixZQUFNLEVBQUV0QixFQUFFLENBQUNzQixNQURDO0FBRVpLLGNBQVEsRUFBRTNCLEVBQUUsQ0FBQzJCLFFBRkQ7QUFHWkMsY0FBUSxFQUFFNUIsRUFBRSxDQUFDNEIsUUFIRDtBQUlaQyxlQUFTLEVBQUU3QixFQUFFLENBQUM2QixTQUpGO0FBS1pDLGNBQVEsRUFBRTlCLEVBQUUsQ0FBQzhCLFFBTEQ7QUFNWkMsY0FBUSxFQUFFL0IsRUFBRSxDQUFDK0IsUUFORDtBQU9aQyxjQUFRLEVBQUVoQyxFQUFFLENBQUNnQyxRQVBEO0FBUVpDLFlBQU0sRUFBRWpDLEVBQUUsQ0FBQ2lDLE1BUkM7QUFTWlYsWUFBTSxFQUFOQSxNQVRZO0FBVVozQyxZQUFNLEVBQU5BLE1BVlk7QUFXWlUsWUFBTSxFQUFOQSxNQVhZO0FBWVpULFlBQU0sRUFBTkE7QUFaWSxLQUFELENBRGY7QUFBQSxHQUR3QixFQWdCeEIsQ0FDRTBDLE1BREYsRUFFRTNDLE1BRkYsRUFHRVUsTUFIRixFQUlFVCxNQUpGLEVBS0VtQixFQUFFLENBQUNzQixNQUxMLEVBTUV0QixFQUFFLENBQUMyQixRQU5MLEVBT0UzQixFQUFFLENBQUM0QixRQVBMLEVBUUU1QixFQUFFLENBQUM2QixTQVJMLEVBU0U3QixFQUFFLENBQUM4QixRQVRMLEVBVUU5QixFQUFFLENBQUMrQixRQVZMLEVBV0UvQixFQUFFLENBQUNnQyxRQVhMLEVBWUVoQyxFQUFFLENBQUNpQyxNQVpMLENBaEJ3QixDQUExQjtBQWdDQSxNQUFNQyxVQUFVLEdBQUdkLHFEQUFPLENBQ3hCO0FBQUEsV0FDRWUsaUVBQVEsQ0FDTnRELE1BRE0sRUFFTjJDLEtBRk0sRUFHTjFDLEVBSE0sRUFJTkMsS0FKTSxFQUtORyxPQUxNLEVBTU51QyxVQUFVLENBQUNELEtBTkwsRUFPTjNCLEdBUE0sRUFRTlYsS0FSTSxFQVNOSCxZQVRNLEVBVU5JLFdBVk0sQ0FEVjtBQUFBLEdBRHdCLEVBY3hCLENBQ0VQLE1BREYsRUFFRTJDLEtBRkYsRUFHRTFDLEVBSEYsRUFJRUMsS0FKRixFQUtFRyxPQUxGLEVBTUV1QyxVQU5GLEVBT0U1QixHQVBGLEVBUUVWLEtBUkYsRUFTRUgsWUFURixFQVVFSSxXQVZGLENBZHdCLENBQTFCO0FBMkJBLE1BQU1nRCxLQUFLLEdBQUdoQixxREFBTyxDQUNuQjtBQUFBLFdBQ0VpQixxRUFBVSxDQUFDO0FBQ1R4RCxZQUFNLEVBQU5BLE1BRFM7QUFFVEUsV0FBSyxFQUFMQSxLQUZTO0FBR1R1RCxTQUFHLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTTixVQUFVLENBQUNJLEdBQXBCLEVBQXlCYixVQUFVLENBQUNhLEdBQXBDLEVBQXlDbkIsSUFBSSxDQUFDbUIsR0FBTCxJQUFZLENBQXJELENBSEk7QUFJVEcsU0FBRyxFQUFFaEIsVUFBVSxDQUFDZ0I7QUFKUCxLQUFELENBRFo7QUFBQSxHQURtQixFQVFuQixDQUFDNUQsTUFBRCxFQUFTRSxLQUFULEVBQWdCbUQsVUFBVSxDQUFDSSxHQUEzQixFQUFnQ2IsVUFBVSxDQUFDYSxHQUEzQyxFQUFnRGIsVUFBVSxDQUFDZ0IsR0FBM0QsRUFBZ0V0QixJQUFoRSxDQVJtQixDQUFyQjtBQVdBLE1BQU11QixPQUFPLEdBQUd2QyxvREFBTSxDQUFxQyxFQUFyQyxDQUF0QjtBQUVBLE1BQU13QyxJQUFJLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUM3QixRQUFJLENBQUMxQyxTQUFTLENBQUMyQyxPQUFmLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBSDRCLDJCQTZCekJILE9BQU8sQ0FBQ0csT0E3QmlCO0FBQUEsUUFLM0JDLFVBTDJCLG9CQUszQkEsVUFMMkI7QUFBQSxRQU0zQkMsVUFOMkIsb0JBTTNCQSxVQU4yQjtBQUFBLFFBTzNCQyxXQVAyQixvQkFPM0JBLFdBUDJCO0FBQUEsUUFRM0JDLFFBUjJCLG9CQVEzQkEsUUFSMkI7QUFBQSxRQVMzQkMsV0FUMkIsb0JBUzNCQSxXQVQyQjtBQUFBLFFBVTNCQyxlQVYyQixvQkFVM0JBLGVBVjJCO0FBQUEsUUFXM0JDLGFBWDJCLG9CQVczQkEsYUFYMkI7QUFBQSxRQVkzQkMsaUJBWjJCLG9CQVkzQkEsaUJBWjJCO0FBQUEsUUFhM0JDLFlBYjJCLG9CQWEzQkEsWUFiMkI7QUFBQSxRQWMzQkMsYUFkMkIsb0JBYzNCQSxhQWQyQjtBQUFBLFFBZTNCQyxXQWYyQixvQkFlM0JBLFdBZjJCO0FBQUEsUUFnQjNCQyxVQWhCMkIsb0JBZ0IzQkEsVUFoQjJCO0FBQUEsUUFpQjNCQyxVQWpCMkIsb0JBaUIzQkEsVUFqQjJCO0FBQUEsUUFrQjNCQyxXQWxCMkIsb0JBa0IzQkEsV0FsQjJCO0FBQUEsUUFtQjNCQyxLQW5CMkIsb0JBbUIzQkEsS0FuQjJCO0FBQUEsUUFvQjNCQyxLQXBCMkIsb0JBb0IzQkEsS0FwQjJCO0FBQUEsUUFxQjNCQyxLQXJCMkIsb0JBcUIzQkEsS0FyQjJCO0FBQUEsUUFzQjNCQyxLQXRCMkIsb0JBc0IzQkEsS0F0QjJCO0FBQUEsUUF1QjNCQyxTQXZCMkIsb0JBdUIzQkEsU0F2QjJCO0FBQUEsUUF3QjNCQyxVQXhCMkIsb0JBd0IzQkEsVUF4QjJCO0FBQUEsUUF5QjNCQyxVQXpCMkIsb0JBeUIzQkEsVUF6QjJCO0FBQUEsUUEwQjNCQyxVQTFCMkIsb0JBMEIzQkEsVUExQjJCO0FBQUEsUUEyQjNCQyxRQTNCMkIsb0JBMkIzQkEsUUEzQjJCO0FBQUEsUUE0QjNCQyxlQTVCMkIsb0JBNEIzQkEsZUE1QjJCO0FBQUEsMkJBOEJpQmhFLE9BQU8sQ0FBQ3dDLE9BOUJ6QjtBQUFBLFFBOEJyQnlCLEtBOUJxQixvQkE4QnJCQSxLQTlCcUI7QUFBQSxRQThCZEMsSUE5QmMsb0JBOEJkQSxJQTlCYztBQUFBLFFBOEJSQyxVQTlCUSxvQkE4QlJBLFVBOUJRO0FBQUEsUUE4QklDLFFBOUJKLG9CQThCSUEsUUE5Qko7QUErQjdCLFFBQU1DLFdBQVcsR0FBRyxDQUFDLENBQUNyRSxPQUFPLENBQUN3QyxPQUFSLENBQWdCNUQsUUFBbEIsSUFBOEIsQ0FBQyxDQUFDMkIsV0FBVyxDQUFDaUMsT0FBaEU7QUFDQSxRQUFNOEIsT0FBTyxHQUFHekUsU0FBUyxDQUFDMkMsT0FBVixDQUFrQitCLFVBQWxCLENBQTZCLElBQTdCLENBQWhCO0FBQ0FELFdBQU8sQ0FBQ0UsU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixHQUF4QixFQUE2QixHQUE3Qjs7QUFFQSxRQUFJL0IsVUFBVSxDQUFDZ0MsTUFBZixFQUF1QjtBQUNyQkMsdUVBQWMsQ0FBQztBQUNiSixlQUFPLEVBQVBBLE9BRGE7QUFFYjdCLGtCQUFVLEVBQUVBLFVBQVUsQ0FBQ2tDLEtBRlY7QUFHYjlGLGVBQU8sRUFBRTJCLFVBQVUsQ0FBQ2dDO0FBSFAsT0FBRCxDQUFkO0FBS0Q7O0FBQ0QsUUFBSUksUUFBUSxDQUFDNkIsTUFBYixFQUFxQjtBQUNuQkcscUVBQVksQ0FBQztBQUFFTixlQUFPLEVBQVBBLE9BQUY7QUFBVzFCLGdCQUFRLEVBQUVBLFFBQVEsQ0FBQytCO0FBQTlCLE9BQUQsQ0FBWjtBQUNEOztBQUNELFFBQUlqQyxVQUFVLENBQUMrQixNQUFmLEVBQXVCO0FBQ3JCSSx1RUFBYyxDQUFDO0FBQUVQLGVBQU8sRUFBUEEsT0FBRjtBQUFXNUIsa0JBQVUsRUFBRUEsVUFBVSxDQUFDaUM7QUFBbEMsT0FBRCxDQUFkO0FBQ0Q7O0FBQ0QsUUFBSWhDLFdBQVcsQ0FBQzhCLE1BQWhCLEVBQXdCO0FBQ3RCSyx3RUFBZSxDQUFDO0FBQ2RSLGVBQU8sRUFBUEEsT0FEYztBQUVkM0IsbUJBQVcsRUFBRUEsV0FBVyxDQUFDZ0MsS0FGWDtBQUdkaEcsb0JBQVksRUFBRTJCLGVBQWUsQ0FBQ2tDO0FBSGhCLE9BQUQsQ0FBZjtBQUtEOztBQUNELFFBQUlLLFdBQVcsQ0FBQzRCLE1BQWhCLEVBQXdCO0FBQ3RCTSxtRUFBVSxDQUFDO0FBQ1RULGVBQU8sRUFBUEEsT0FEUztBQUVUekIsbUJBQVcsRUFBRUEsV0FBVyxDQUFDOEIsS0FGaEI7QUFHVG5HLGNBQU0sRUFBRTJCLFNBQVMsQ0FBQ3FDO0FBSFQsT0FBRCxDQUFWO0FBS0Q7O0FBQ0QsUUFBSU0sZUFBZSxDQUFDMkIsTUFBcEIsRUFBNEI7QUFDMUJPLHVFQUFjLENBQUM7QUFDYlYsZUFBTyxFQUFQQSxPQURhO0FBRWJ4Qix1QkFBZSxFQUFFQSxlQUFlLENBQUM2QixLQUZwQjtBQUdiUixrQkFBVSxFQUFWQTtBQUhhLE9BQUQsQ0FBZDtBQUtEOztBQUNELFFBQUlwQixhQUFhLENBQUMwQixNQUFsQixFQUEwQjtBQUN4QlEscUVBQVksQ0FBQztBQUFFWCxlQUFPLEVBQVBBLE9BQUY7QUFBV3ZCLHFCQUFhLEVBQUVBLGFBQWEsQ0FBQzRCLEtBQXhDO0FBQStDUCxnQkFBUSxFQUFSQTtBQUEvQyxPQUFELENBQVo7QUFDRDs7QUFDRCxRQUFJcEIsaUJBQWlCLENBQUN5QixNQUFsQixJQUE0QnRCLFdBQVcsQ0FBQ3NCLE1BQTVDLEVBQW9EO0FBQ2xEUyx5RUFBZ0IsQ0FBQztBQUNmWixlQUFPLEVBQVBBLE9BRGU7QUFFZnRCLHlCQUFpQixFQUFFQSxpQkFBaUIsQ0FBQzJCLEtBRnRCO0FBR2Z4QixtQkFBVyxFQUFFQSxXQUFXLENBQUN3QixLQUhWO0FBSWZQLGdCQUFRLEVBQVJBLFFBSmU7QUFLZnpGLG9CQUFZLEVBQUUyQixlQUFlLENBQUNrQztBQUxmLE9BQUQsQ0FBaEI7QUFPRDs7QUFDRCxRQUFJUyxZQUFZLENBQUN3QixNQUFqQixFQUF5QjtBQUN2QlUsb0VBQVcsQ0FBQztBQUNWYixlQUFPLEVBQVBBLE9BRFU7QUFFVnJCLG9CQUFZLEVBQUVBLFlBQVksQ0FBQzBCLEtBRmpCO0FBR1Y5RixlQUFPLEVBQUUyQixVQUFVLENBQUNnQyxPQUhWO0FBSVY2QixtQkFBVyxFQUFYQTtBQUpVLE9BQUQsQ0FBWDtBQU1EOztBQUNELFFBQUluQixhQUFhLENBQUN1QixNQUFsQixFQUEwQjtBQUN4QlcscUVBQVksQ0FBQztBQUFFZCxlQUFPLEVBQVBBLE9BQUY7QUFBV3BCLHFCQUFhLEVBQUVBLGFBQWEsQ0FBQ3lCO0FBQXhDLE9BQUQsQ0FBWjtBQUNEOztBQUNELFFBQUl4QixXQUFXLENBQUNzQixNQUFoQixFQUF3QjtBQUN0Qlksa0VBQVMsQ0FBQztBQUNSZixlQUFPLEVBQVBBLE9BRFE7QUFFUm5CLG1CQUFXLEVBQUVBLFdBQVcsQ0FBQ3dCLEtBRmpCO0FBR1JuRixXQUFHLEVBQUVvQixNQUFNLENBQUM0QjtBQUhKLE9BQUQsQ0FBVDtBQUtBOEMsa0VBQVMsQ0FBQztBQUNSaEIsZUFBTyxFQUFQQSxPQURRO0FBRVJuQixtQkFBVyxFQUFFQSxXQUFXLENBQUN3QixLQUZqQjtBQUdSakcsYUFBSyxFQUFFMkIsUUFBUSxDQUFDbUM7QUFIUixPQUFELENBQVQ7QUFLQStDLHVFQUFjO0FBQ1pqQixlQUFPLEVBQVBBLE9BRFk7QUFFWm5CLG1CQUFXLEVBQUVBLFdBQVcsQ0FBQ3dCLEtBRmI7QUFHWjVDLGFBQUssRUFBRWxCLFFBQVEsQ0FBQzJCLE9BSEo7QUFJWmdELFlBQUksRUFBRXRELElBQUksQ0FBQ0MsR0FBTCxDQUFTbEMsYUFBYSxDQUFDdUMsT0FBZCxDQUFzQlAsR0FBL0IsRUFBb0NqQyxPQUFPLENBQUN3QyxPQUFSLENBQWdCUCxHQUFwRDtBQUpNLFNBS1QvQixhQUFhLENBQUNzQyxPQUxMLEVBQWQ7QUFPQWlELDBFQUFpQixDQUFDO0FBQ2hCbkIsZUFBTyxFQUFQQSxPQURnQjtBQUVoQm5CLG1CQUFXLEVBQUVBLFdBQVcsQ0FBQ3dCLEtBRlQ7QUFHaEJlLGtCQUFVLEVBQUV6RixhQUFhLENBQUN1QyxPQUFkLENBQXNCa0QsVUFIbEI7QUFJaEJDLGlCQUFTLEVBQUUxRixhQUFhLENBQUN1QyxPQUFkLENBQXNCbUQ7QUFKakIsT0FBRCxDQUFqQjtBQU1EOztBQUNEQyxvRUFBYSxDQUFDO0FBQ1p0QixhQUFPLEVBQVBBLE9BRFk7QUFFWmxCLGdCQUFVLEVBQVZBLFVBRlk7QUFHWkMsZ0JBQVUsRUFBVkEsVUFIWTtBQUlaQyxpQkFBVyxFQUFYQSxXQUpZO0FBS1pDLFdBQUssRUFBTEEsS0FMWTtBQU1aQyxXQUFLLEVBQUxBLEtBTlk7QUFPWkMsV0FBSyxFQUFMQSxLQVBZO0FBUVpDLFdBQUssRUFBTEEsS0FSWTtBQVNaRSxnQkFBVSxFQUFWQSxVQVRZO0FBVVpDLGdCQUFVLEVBQVZBLFVBVlk7QUFXWkMsZ0JBQVUsRUFBVkEsVUFYWTtBQVlaQyxjQUFRLEVBQVJBO0FBWlksS0FBRCxDQUFiO0FBY0EsUUFBTThCLFdBQVcsR0FBRzlGLFVBQVUsQ0FBQ3lDLE9BQVgsQ0FBbUIrQixVQUFuQixDQUE4QixJQUE5QixDQUFwQjtBQUNBc0IsZUFBVyxDQUFDckIsU0FBWixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixJQUE1QixFQUFrQyxJQUFsQztBQUNBc0IsbUVBQVksQ0FBQztBQUNYQyxZQUFNLEVBQUVoRyxVQUFVLENBQUN5QyxPQURSO0FBRVgvRCxRQUFFLEVBQUUyQixLQUFLLENBQUNvQyxPQUZDO0FBR1g5RCxXQUFLLEVBQUUyQixRQUFRLENBQUNtQztBQUhMLEtBQUQsQ0FBWjtBQUtBd0Qsb0VBQWE7QUFDWEQsWUFBTSxFQUFFaEcsVUFBVSxDQUFDeUMsT0FEUjtBQUVYdkQsWUFBTSxFQUFFMEIsU0FBUyxDQUFDNkI7QUFGUCxPQUdSdkMsYUFBYSxDQUFDdUMsT0FBZCxDQUFzQnlELEtBSGQsRUFBYjtBQUtBQywwRUFBZSxDQUFDO0FBQ2RILFlBQU0sRUFBRWhHLFVBQVUsQ0FBQ3lDLE9BREw7QUFFZHlCLFdBQUssRUFBTEEsS0FGYztBQUdkQyxVQUFJLEVBQUpBO0FBSGMsS0FBRCxDQUFmOztBQUtBLFFBQUl6RCxRQUFRLENBQUMrQixPQUFULElBQW9CbUIsU0FBeEIsRUFBbUM7QUFDakN3QyxzRUFBYSxDQUFDO0FBQ1o3QixlQUFPLEVBQVBBLE9BRFk7QUFFWlgsaUJBQVMsRUFBRUEsU0FBUyxDQUFDZ0I7QUFGVCxPQUFELENBQWI7QUFJRDs7QUFDRCxRQUFJakUsY0FBYyxDQUFDOEIsT0FBZixJQUEwQndCLGVBQTlCLEVBQStDO0FBQzdDb0MsNEVBQW1CLENBQUM7QUFBRTlCLGVBQU8sRUFBUEEsT0FBRjtBQUFXTix1QkFBZSxFQUFFQSxlQUFlLENBQUNXO0FBQTVDLE9BQUQsQ0FBbkI7QUFDRDs7QUFDREwsV0FBTyxDQUFDK0IsU0FBUixDQUFrQnRHLFVBQVUsQ0FBQ3lDLE9BQTdCLEVBQXNDLENBQXRDLEVBQXlDLENBQXpDLEVBQTRDLEdBQTVDLEVBQWlELEdBQWpEO0FBQ0QsR0E5SnVCLEVBOEpyQixFQTlKcUIsQ0FBeEI7QUFnS0E4RCx5REFBUyxDQUFDLFlBQU07QUFDZHZHLGNBQVUsQ0FBQ3lDLE9BQVgsR0FBcUIrRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFDQXpHLGNBQVUsQ0FBQ3lDLE9BQVgsQ0FBbUJpRSxLQUFuQixHQUEyQixJQUEzQjtBQUNBMUcsY0FBVSxDQUFDeUMsT0FBWCxDQUFtQmtFLE1BQW5CLEdBQTRCLElBQTVCO0FBQ0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BSix5REFBUyxDQUFDLFlBQU07QUFDZHBJLGlCQUFhLENBQUN5SSxPQUFkLENBQXNCLGlCQUF1QjtBQUFBO0FBQUEsVUFBckJDLE9BQXFCO0FBQUEsVUFBWkMsTUFBWTs7QUFDM0N4RSxhQUFPLENBQUNHLE9BQVIsQ0FBZ0JvRSxPQUFoQixJQUEyQixJQUFJRSx5REFBSixDQUFnQnhFLElBQWhCLENBQTNCO0FBQ0FELGFBQU8sQ0FBQ0csT0FBUixDQUFnQm9FLE9BQWhCLEVBQXlCRyxJQUF6QixXQUFpQ3JILFFBQWpDLFNBQTRDbUgsTUFBNUM7QUFDRCxLQUhEO0FBSUQsR0FMUSxFQUtOLENBQUNuSCxRQUFELEVBQVcyQyxPQUFYLEVBQW9CQyxJQUFwQixDQUxNLENBQVQ7QUFPQWdFLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU0xRCxRQUFRLEdBQUdvRSw0RUFBYSxDQUFDbEcsSUFBSSxDQUFDbUcsRUFBTixFQUFVbEksV0FBVixDQUE5QjtBQUNBc0QsV0FBTyxDQUFDRyxPQUFSLENBQWdCSSxRQUFoQixDQUF5Qm1FLElBQXpCLHNCQUE0Q25FLFFBQTVDO0FBQ0EsUUFBTXNFLEtBQUssR0FBR0MsMkVBQWEsQ0FBQztBQUMxQmxHLFlBQU0sRUFBRXRCLEVBQUUsQ0FBQ3NCLE1BRGU7QUFFMUJLLGNBQVEsRUFBRTNCLEVBQUUsQ0FBQzJCLFFBRmE7QUFHMUJDLGNBQVEsRUFBRTVCLEVBQUUsQ0FBQzRCLFFBSGE7QUFJMUJDLGVBQVMsRUFBRTdCLEVBQUUsQ0FBQzZCLFNBSlk7QUFLMUJDLGNBQVEsRUFBRTlCLEVBQUUsQ0FBQzhCLFFBTGE7QUFNMUJDLGNBQVEsRUFBRS9CLEVBQUUsQ0FBQytCLFFBTmE7QUFPMUJDLGNBQVEsRUFBRWhDLEVBQUUsQ0FBQ2dDLFFBUGE7QUFRMUJDLFlBQU0sRUFBRWpDLEVBQUUsQ0FBQ2lDLE1BUmU7QUFTMUJWLFlBQU0sRUFBTkEsTUFUMEI7QUFVMUIzQyxZQUFNLEVBQUV1QyxJQUFJLENBQUNtRyxFQVZhO0FBVzFCaEksWUFBTSxFQUFOQTtBQVgwQixLQUFELENBQTNCO0FBY0FkLHFCQUFpQixDQUFDd0ksT0FBbEIsQ0FBMEIsaUJBQTBCO0FBQUEsVUFBdkJ2SSxTQUF1QixTQUF2QkEsU0FBdUI7QUFBQSxVQUFaQyxLQUFZLFNBQVpBLEtBQVk7QUFDbERnRSxhQUFPLENBQUNHLE9BQVIsV0FBbUJwRSxTQUFuQixXQUFvQzJJLElBQXBDLENBQXlDRyxLQUFLLENBQUM5SSxTQUFELENBQUwsSUFBb0JDLEtBQTdEO0FBQ0QsS0FGRDtBQUdBLFFBQU1nRyxXQUFXLEdBQ2R2RCxJQUFJLENBQUNsQyxRQUFMLEtBQWtCLEdBQWxCLElBQXlCLENBQUMsQ0FBQ2tDLElBQUksQ0FBQ2xDLFFBQWpDLElBQThDLENBQUMsQ0FBQ0EsUUFEbEQ7QUFFQXlELFdBQU8sQ0FBQ0csT0FBUixDQUFnQlUsYUFBaEIsQ0FBOEI2RCxJQUE5QixDQUNFMUMsV0FBVyw2QkFBc0J2RCxJQUFJLENBQUNsQyxRQUFMLElBQWlCQSxRQUF2QyxZQUF3RCxFQURyRTtBQUdELEdBekJRLEVBeUJOLENBQ0RrQyxJQURDLEVBRUQvQixXQUZDLEVBR0RtQyxNQUhDLEVBSURqQyxNQUpDLEVBS0RMLFFBTEMsRUFNRGlELFVBTkMsRUFPRGxDLEVBQUUsQ0FBQ3NCLE1BUEYsRUFRRHRCLEVBQUUsQ0FBQzJCLFFBUkYsRUFTRDNCLEVBQUUsQ0FBQzRCLFFBVEYsRUFVRDVCLEVBQUUsQ0FBQzZCLFNBVkYsRUFXRDdCLEVBQUUsQ0FBQzhCLFFBWEYsRUFZRDlCLEVBQUUsQ0FBQytCLFFBWkYsRUFhRC9CLEVBQUUsQ0FBQ2dDLFFBYkYsRUFjRGhDLEVBQUUsQ0FBQ2lDLE1BZEYsRUFlRHpELGlCQWZDLENBekJNLENBQVQ7QUEyQ0FtSSx5REFBUyxDQUFDLFlBQU07QUFDZHRHLFdBQU8sQ0FBQ3dDLE9BQVIsR0FBa0IxQixJQUFsQjtBQUNBWCxhQUFTLENBQUNxQyxPQUFWLEdBQW9CaEUsTUFBcEI7QUFDQTRCLFNBQUssQ0FBQ29DLE9BQU4sR0FBZ0IvRCxFQUFoQjtBQUNBNEIsWUFBUSxDQUFDbUMsT0FBVCxHQUFtQjlELEtBQW5CO0FBQ0E0QixtQkFBZSxDQUFDa0MsT0FBaEIsR0FBMEI3RCxZQUExQjtBQUNBNEIsZUFBVyxDQUFDaUMsT0FBWixHQUFzQjVELFFBQXRCO0FBQ0E0QixjQUFVLENBQUNnQyxPQUFYLEdBQXFCM0QsT0FBckI7QUFDQTRCLFlBQVEsQ0FBQytCLE9BQVQsR0FBbUIxRCxLQUFuQjtBQUNBNEIsa0JBQWMsQ0FBQzhCLE9BQWYsR0FBeUJ6RCxXQUF6QjtBQUNBNEIsYUFBUyxDQUFDNkIsT0FBVixHQUFvQnZELE1BQXBCO0FBQ0EyQixVQUFNLENBQUM0QixPQUFQLEdBQWlCaEQsR0FBakI7QUFDQXFCLFlBQVEsQ0FBQzJCLE9BQVQsR0FBbUJULEtBQW5CO0FBQ0E5QixpQkFBYSxDQUFDdUMsT0FBZCxHQUF3QnBCLFVBQXhCO0FBQ0FsQixpQkFBYSxDQUFDc0MsT0FBZCxHQUF3QlgsVUFBeEI7QUFDQVMsUUFBSTtBQUNMLEdBaEJRLEVBZ0JOLENBQ0R4QixJQURDLEVBRUR0QyxNQUZDLEVBR0RDLEVBSEMsRUFJREMsS0FKQyxFQUtEQyxZQUxDLEVBTURDLFFBTkMsRUFPREMsT0FQQyxFQVFEQyxLQVJDLEVBU0RDLFdBVEMsRUFVREUsTUFWQyxFQVdETyxHQVhDLEVBWUR1QyxLQVpDLEVBYURYLFVBYkMsRUFjRFMsVUFkQyxFQWVEUyxJQWZDLENBaEJNLENBQVQ7QUFrQ0EsTUFBTThFLGVBQWUsR0FBRzdFLHlEQUFXLENBQUMsWUFBTTtBQUN4QyxRQUFNOEUsT0FBTyxHQUFHeEgsU0FBUyxDQUFDMkMsT0FBVixDQUFrQjhFLFNBQWxCLENBQTRCLFdBQTVCLENBQWhCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHaEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQWUsUUFBSSxDQUFDQyxJQUFMLEdBQVlILE9BQVo7QUFDQUUsUUFBSSxDQUFDRSxRQUFMLGFBQW1CM0csSUFBbkIsYUFBbUJBLElBQW5CLHVCQUFtQkEsSUFBSSxDQUFFb0QsSUFBekIsY0FBaUNwRCxJQUFqQyxhQUFpQ0EsSUFBakMsdUJBQWlDQSxJQUFJLENBQUVtRCxLQUF2QztBQUNBc0QsUUFBSSxDQUFDRyxNQUFMLEdBQWMsUUFBZDtBQUNBbkIsWUFBUSxDQUFDb0IsSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxJQUExQjtBQUNBQSxRQUFJLENBQUNNLEtBQUw7QUFDQXRCLFlBQVEsQ0FBQ29CLElBQVQsQ0FBY0csV0FBZCxDQUEwQlAsSUFBMUI7QUFDRCxHQVRrQyxFQVNoQyxDQUFDekcsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVvRCxJQUFQLEVBQWFwRCxJQUFiLGFBQWFBLElBQWIsdUJBQWFBLElBQUksQ0FBRW1ELEtBQW5CLENBVGdDLENBQW5DO0FBV0EsU0FBTztBQUNMcEUsYUFBUyxFQUFUQSxTQURLO0FBRUx1SCxtQkFBZSxFQUFmQTtBQUZLLEdBQVA7QUFJRDs7R0FsWlE5SSxRO1VBc0JjbUIscUQsRUFFVkcsd0Q7OztBQTRYRXRCLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VuaXRlZGl0b3IuZTdjNDllZmM2MTU0N2FhMjVmYWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFRIZXJvLCBUU2tpbGxJZHMgfSBmcm9tICdAL2FwcC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBnZXRTa2lsbEljb25zLCBnZXRTa2lsbEluZm9zIH0gZnJvbSAnQC9hcHAvdXRpbHMvZGF0YS11dGlscyc7XG5pbXBvcnQgeyBnZXRTdGF0cyB9IGZyb20gJ0AvYXBwL3V0aWxzL3N0YXRzJztcbmltcG9ydCBhcmVuYVNjb3JlIGZyb20gJ0AvYXBwL3V0aWxzL2FyZW5hc2NvcmUnO1xuaW1wb3J0IHsgdG9SZXNwbGVuZGVudCB9IGZyb20gJ0AvYXBwL3V0aWxzL3Jlc3BsZW5kZW50JztcbmltcG9ydCB7IGdldEhlcm8gfSBmcm9tICdAL2FwcC91dGlscy9oZXJvZXMnO1xuaW1wb3J0IHsgdXNlRmVoREIgfSBmcm9tICdAL2FwcC9wYWdlL0ZFSERCJztcbmltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnLi9JbWFnZUxvYWRlcic7XG5pbXBvcnQgZHJhd0JhY2tncm91bmQgZnJvbSAnLi9CYWNrZ3JvdW5kL2RyYXcnO1xuaW1wb3J0IGRyYXdQb3J0cmFpdCBmcm9tICcuL1BvcnRyYWl0L2RyYXcnO1xuaW1wb3J0IGRyYXdGb3JlZ3JvdW5kIGZyb20gJy4vRm9yZWdyb3VuZC9kcmF3JztcbmltcG9ydCBkcmF3Rm9yZWdyb3VuZDIgZnJvbSAnLi9Gb3JlZ3JvdW5kMi9kcmF3JztcbmltcG9ydCBkcmF3UmFyaXR5IGZyb20gJy4vUmFyaXR5L2RyYXcnO1xuaW1wb3J0IGRyYXdXZWFwb25UeXBlIGZyb20gJy4vV2VhcG9uVHlwZS9kcmF3JztcbmltcG9ydCBkcmF3TW92ZVR5cGUgZnJvbSAnLi9Nb3ZlVHlwZS9kcmF3JztcbmltcG9ydCBkcmF3RHJhZ29uZmxvd2VyIGZyb20gJy4vRHJhZ29uRmxvd2VyL2RyYXcnO1xuaW1wb3J0IGRyYXdTdXBwb3J0IGZyb20gJy4vU3VwcG9ydC9kcmF3JztcbmltcG9ydCBkcmF3Qmxlc3NpbmcgZnJvbSAnLi9CbGVzc2luZy9kcmF3JztcbmltcG9ydCBkcmF3U2tpbGxJY29uIGZyb20gJy4vU2tpbGxJY29uL2RyYXcnO1xuaW1wb3J0IGRyYXdMZXZlbCBmcm9tICcuL0xldmVsL2RyYXcnO1xuaW1wb3J0IGRyYXdNZXJnZSBmcm9tICcuL01lcmdlL2RyYXcnO1xuaW1wb3J0IGRyYXdTdGF0TnVtYmVyIGZyb20gJy4vU3RhdE51bWJlci9kcmF3JztcbmltcG9ydCBkcmF3U3BlY2lhbE51bWJlciBmcm9tICcuL1NwZWNpYWxOdW1iZXIvZHJhdyc7XG5pbXBvcnQgZHJhd1N0YXRUZXh0IGZyb20gJy4vU3RhdFRleHQvZHJhdyc7XG5pbXBvcnQgZHJhd1NraWxsVGV4dCBmcm9tICcuL1NraWxsVGV4dC9kcmF3JztcbmltcG9ydCBkcmF3RGVzY3JpcHRpb24gZnJvbSAnLi9EZXNjcmlwdGlvblRleHQvZHJhdyc7XG5pbXBvcnQgZHJhd0FyZW5hSWNvbiBmcm9tICcuL0FyZW5hSWNvbi9kcmF3JztcbmltcG9ydCBkcmF3UmVzcGxlbmRlbnRJY29uIGZyb20gJy4vUmVzcGxlbmRlbnRJY29uL2RyYXcnO1xuXG5jb25zdCBpbWFnZUlkQW5kU3JjID0gW1xuICBbJ2JhY2tncm91bmQnLCAnL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZyddLFxuICBbJ2ZvcmVncm91bmQnLCAnL2Fzc2V0cy9mb3JlZ3JvdW5kLnBuZyddLFxuICBbJ2ZvcmVncm91bmQyJywgJy9hc3NldHMvZm9yZWdyb3VuZDIucG5nJ10sXG4gIFsncG9ydHJhaXQnLCAnJ10sXG4gIFsncmFyaXR5QXRsYXMnLCAnL2Fzc2V0cy9yYXJpdHkucG5nJ10sXG4gIFsnd2VhcG9uVHlwZUF0bGFzJywgJy9hc3NldHMvd2VhcG9uLXR5cGUucG5nJ10sXG4gIFsnbW92ZVR5cGVBdGxhcycsICcvYXNzZXRzL21vdmUtdHlwZS5wbmcnXSxcbiAgWydkcmFnb25mbG93ZXJBdGxhcycsICcvYXNzZXRzL2RyYWdvbmZsb3dlci5wbmcnXSxcbiAgWydzdXBwb3J0QXRsYXMnLCAnL2Fzc2V0cy9zdXBwb3J0LnBuZyddLFxuICBbJ2JsZXNzaW5nQXRsYXMnLCAnJ10sXG4gIFsnbnVtYmVyQXRsYXMnLCAnL2Fzc2V0cy9udW1iZXIucG5nJ10sXG4gIFsnd2VhcG9uSWNvbicsICcvc2tpbGxzL3dlYXBvbi5wbmcnXSxcbiAgWydhc3Npc3RJY29uJywgJy9za2lsbHMvYXNzaXN0LnBuZyddLFxuICBbJ3NwZWNpYWxJY29uJywgJy9za2lsbHMvc3BlY2lhbC5wbmcnXSxcbiAgWyd0ZXh0QScsICcvYXNzZXRzL3NraWxsLWEucG5nJ10sXG4gIFsndGV4dEInLCAnL2Fzc2V0cy9za2lsbC1iLnBuZyddLFxuICBbJ3RleHRDJywgJy9hc3NldHMvc2tpbGwtYy5wbmcnXSxcbiAgWyd0ZXh0UycsICcvYXNzZXRzL3NraWxsLXMucG5nJ10sXG4gIFsnYXJlbmFJY29uJywgJy9hc3NldHMvQXJlbmFfQ3Jvd24ucG5nJ10sXG4gIFsnc2tpbGxBSWNvbicsICcnXSxcbiAgWydza2lsbEJJY29uJywgJyddLFxuICBbJ3NraWxsQ0ljb24nLCAnJ10sXG4gIFsnc2VhbEljb24nLCAnJ10sXG4gIFsncmVzcGxlbmRlbnRJY29uJywgJy9hc3NldHMvZ29kLXdlYXItbC5wbmcnXSxcbl07XG5cbmNvbnN0IGRlZmF1bHRTa2lsbEljb25zID0gW1xuICB7XG4gICAgc2tpbGxOYW1lOiAnd2VhcG9uJyxcbiAgICBlbXB0eTogJy9za2lsbHMvd2VhcG9uLnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdza2lsbEEnLFxuICAgIGVtcHR5OiAnL3NraWxscy9lbXB0eS5wbmcnLFxuICB9LFxuICB7XG4gICAgc2tpbGxOYW1lOiAnc2tpbGxCJyxcbiAgICBlbXB0eTogJy9za2lsbHMvZW1wdHkucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NraWxsQycsXG4gICAgZW1wdHk6ICcvc2tpbGxzL2VtcHR5LnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdzZWFsJyxcbiAgICBlbXB0eTogJy9za2lsbHMvc2VhbC1lbXB0eS5wbmcnLFxuICB9LFxuXTtcbmV4cG9ydCB0eXBlIFRIb29rUHJvcHMgPSB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICByYXJpdHk6IDUgfCA0O1xuICBpdjogc3RyaW5nO1xuICBtZXJnZTogbnVtYmVyO1xuICBkcmFnb25mbG93ZXI6IG51bWJlcjtcbiAgYmxlc3Npbmc6IHN0cmluZztcbiAgc3VwcG9ydDogYm9vbGVhbjtcbiAgYXJlbmE6IGJvb2xlYW47XG4gIHJlc3BsZW5kZW50OiBib29sZWFuO1xuICAvKiogc2tpbGxzICovXG4gIHdlYXBvbjogc3RyaW5nO1xuICByZWZpbmU6IHN0cmluZztcbiAgYXNzaXN0OiBzdHJpbmc7XG4gIHNwZWNpYWw6IHN0cmluZztcbiAgc2tpbGxBOiBzdHJpbmc7XG4gIHNraWxsQjogc3RyaW5nO1xuICBza2lsbEM6IHN0cmluZztcbiAgc2VhbDogc3RyaW5nO1xuICAvKiogZWRpdG9yICovXG4gIGx2MTogYm9vbGVhbjtcbn07XG5cbmZ1bmN0aW9uIHVzZUhvb2tzKHtcbiAgaGVyb0lkLFxuICByYXJpdHksXG4gIGl2LFxuICBtZXJnZSxcbiAgZHJhZ29uZmxvd2VyLFxuICBibGVzc2luZyxcbiAgc3VwcG9ydCxcbiAgYXJlbmEsXG4gIHJlc3BsZW5kZW50LFxuICAvKiogc2tpbGxzICovXG4gIHdlYXBvbixcbiAgcmVmaW5lLFxuICBhc3Npc3QsXG4gIHNwZWNpYWwsXG4gIHNraWxsQSxcbiAgc2tpbGxCLFxuICBza2lsbEMsXG4gIHNlYWwsXG4gIC8qKiBlZGl0b3IgKi9cbiAgbHYxLFxufTogVEhvb2tQcm9wcykge1xuICBjb25zdCB7IGJhc2VQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBkYiA9IHVzZUZlaERCKCk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgdGV4dENhbnZhcyA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGhlcm9SZWYgPSB1c2VSZWY8VEhlcm8+KCk7XG4gIGNvbnN0IHNraWxsSW5mb3NSZWYgPSB1c2VSZWY8e1xuICAgIG5hbWVzOiBUU2tpbGxJZHM7XG4gICAgc3RhdHM6IHtcbiAgICAgIGhwOiBudW1iZXI7XG4gICAgICBhdGs6IG51bWJlcjtcbiAgICAgIHNwZDogbnVtYmVyO1xuICAgICAgZGVmOiBudW1iZXI7XG4gICAgICByZXM6IG51bWJlcjtcbiAgICB9O1xuICAgIGFjY2VsZXJhdGU6IG51bWJlcjtcbiAgICBzcGVjaWFsQ0Q6IG51bWJlcjtcbiAgICBzcHQ6IG51bWJlcjtcbiAgICBic3Q6IG51bWJlcjtcbiAgfT4oKTtcbiAgY29uc3Qgc3RhdHNJbmZvc1JlZiA9IHVzZVJlZjx7XG4gICAgc3RhdHM6IHsgW3N0YXRLZXk6IHN0cmluZ106IG51bWJlciB9O1xuICAgIGJzdDogbnVtYmVyO1xuICB9PigpO1xuICBjb25zdCByYXJpdHlSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuICBjb25zdCBpdlJlZiA9IHVzZVJlZjxzdHJpbmc+KCk7XG4gIGNvbnN0IG1lcmdlUmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgZHJhZ29uZmxvd2VyUmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgYmxlc3NpbmdSZWYgPSB1c2VSZWY8c3RyaW5nPigpO1xuICBjb25zdCBzdXBwb3J0UmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IGFyZW5hUmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHJlc3BsZW5kZW50UmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHJlZmluZVJlZiA9IHVzZVJlZjxzdHJpbmc+KCk7XG4gIGNvbnN0IGx2MVJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCBzY29yZVJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG5cbiAgY29uc3QgaGVybyA9IHVzZU1lbW8oKCkgPT4gZ2V0SGVybyhkYi5oZXJvREIsIGhlcm9JZCksIFtkYi5oZXJvREIsIGhlcm9JZF0pO1xuXG4gIGNvbnN0IHNraWxscyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHsgd2VhcG9uLCBhc3Npc3QsIHNwZWNpYWwsIHNraWxsQSwgc2tpbGxCLCBza2lsbEMsIHNlYWwgfSksXG4gICAgW3dlYXBvbiwgYXNzaXN0LCBzcGVjaWFsLCBza2lsbEEsIHNraWxsQiwgc2tpbGxDLCBzZWFsXVxuICApO1xuICBjb25zdCBzdGF0cyA9IGhlcm8uc3RhdHM7XG4gIGNvbnN0IHNraWxsSW5mb3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBnZXRTa2lsbEluZm9zKHtcbiAgICAgICAgaGVyb0RCOiBkYi5oZXJvREIsXG4gICAgICAgIHdlYXBvbkRCOiBkYi53ZWFwb25EQixcbiAgICAgICAgYXNzaXN0REI6IGRiLmFzc2lzdERCLFxuICAgICAgICBzcGVjaWFsREI6IGRiLnNwZWNpYWxEQixcbiAgICAgICAgc2tpbGxBREI6IGRiLnNraWxsQURCLFxuICAgICAgICBza2lsbEJEQjogZGIuc2tpbGxCREIsXG4gICAgICAgIHNraWxsQ0RCOiBkYi5za2lsbENEQixcbiAgICAgICAgc2VhbERCOiBkYi5zZWFsREIsXG4gICAgICAgIHNraWxscyxcbiAgICAgICAgaGVyb0lkLFxuICAgICAgICByZWZpbmUsXG4gICAgICAgIHJhcml0eSxcbiAgICAgIH0pLFxuICAgIFtcbiAgICAgIHNraWxscyxcbiAgICAgIGhlcm9JZCxcbiAgICAgIHJlZmluZSxcbiAgICAgIHJhcml0eSxcbiAgICAgIGRiLmhlcm9EQixcbiAgICAgIGRiLndlYXBvbkRCLFxuICAgICAgZGIuYXNzaXN0REIsXG4gICAgICBkYi5zcGVjaWFsREIsXG4gICAgICBkYi5za2lsbEFEQixcbiAgICAgIGRiLnNraWxsQkRCLFxuICAgICAgZGIuc2tpbGxDREIsXG4gICAgICBkYi5zZWFsREIsXG4gICAgXVxuICApO1xuXG4gIGNvbnN0IHN0YXRzSW5mb3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBnZXRTdGF0cyhcbiAgICAgICAgcmFyaXR5LFxuICAgICAgICBzdGF0cyxcbiAgICAgICAgaXYsXG4gICAgICAgIG1lcmdlLFxuICAgICAgICBzdXBwb3J0LFxuICAgICAgICBza2lsbEluZm9zLnN0YXRzLFxuICAgICAgICBsdjEsXG4gICAgICAgIGFyZW5hLFxuICAgICAgICBkcmFnb25mbG93ZXIsXG4gICAgICAgIHJlc3BsZW5kZW50XG4gICAgICApLFxuICAgIFtcbiAgICAgIHJhcml0eSxcbiAgICAgIHN0YXRzLFxuICAgICAgaXYsXG4gICAgICBtZXJnZSxcbiAgICAgIHN1cHBvcnQsXG4gICAgICBza2lsbEluZm9zLFxuICAgICAgbHYxLFxuICAgICAgYXJlbmEsXG4gICAgICBkcmFnb25mbG93ZXIsXG4gICAgICByZXNwbGVuZGVudCxcbiAgICBdXG4gICk7XG4gIGNvbnN0IHNjb3JlID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgYXJlbmFTY29yZSh7XG4gICAgICAgIHJhcml0eSxcbiAgICAgICAgbWVyZ2UsXG4gICAgICAgIGJzdDogTWF0aC5tYXgoc3RhdHNJbmZvcy5ic3QsIHNraWxsSW5mb3MuYnN0LCBoZXJvLmJzdCB8fCAwKSxcbiAgICAgICAgc3B0OiBza2lsbEluZm9zLnNwdCxcbiAgICAgIH0pLFxuICAgIFtyYXJpdHksIG1lcmdlLCBzdGF0c0luZm9zLmJzdCwgc2tpbGxJbmZvcy5ic3QsIHNraWxsSW5mb3Muc3B0LCBoZXJvXVxuICApO1xuXG4gIGNvbnN0IGxvYWRlcnMgPSB1c2VSZWY8eyBbaW1hZ2VJZDogc3RyaW5nXTogSW1hZ2VMb2FkZXIgfT4oe30pO1xuXG4gIGNvbnN0IGRyYXcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFjYW52YXNSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBiYWNrZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmQyLFxuICAgICAgcG9ydHJhaXQsXG4gICAgICByYXJpdHlBdGxhcyxcbiAgICAgIHdlYXBvblR5cGVBdGxhcyxcbiAgICAgIG1vdmVUeXBlQXRsYXMsXG4gICAgICBkcmFnb25mbG93ZXJBdGxhcyxcbiAgICAgIHN1cHBvcnRBdGxhcyxcbiAgICAgIGJsZXNzaW5nQXRsYXMsXG4gICAgICBudW1iZXJBdGxhcyxcbiAgICAgIHdlYXBvbkljb24sXG4gICAgICBhc3Npc3RJY29uLFxuICAgICAgc3BlY2lhbEljb24sXG4gICAgICB0ZXh0QSxcbiAgICAgIHRleHRCLFxuICAgICAgdGV4dEMsXG4gICAgICB0ZXh0UyxcbiAgICAgIGFyZW5hSWNvbixcbiAgICAgIHNraWxsQUljb24sXG4gICAgICBza2lsbEJJY29uLFxuICAgICAgc2tpbGxDSWNvbixcbiAgICAgIHNlYWxJY29uLFxuICAgICAgcmVzcGxlbmRlbnRJY29uLFxuICAgIH0gPSBsb2FkZXJzLmN1cnJlbnQ7XG4gICAgY29uc3QgeyB0aXRsZSwgbmFtZSwgd2VhcG9uVHlwZSwgbW92ZVR5cGUgfSA9IGhlcm9SZWYuY3VycmVudDtcbiAgICBjb25zdCBoYXNCbGVzc2luZyA9ICEhaGVyb1JlZi5jdXJyZW50LmJsZXNzaW5nIHx8ICEhYmxlc3NpbmdSZWYuY3VycmVudDtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCA1NDAsIDk2MCk7XG5cbiAgICBpZiAoYmFja2dyb3VuZC5sb2FkZWQpIHtcbiAgICAgIGRyYXdCYWNrZ3JvdW5kKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZC5pbWFnZSxcbiAgICAgICAgc3VwcG9ydDogc3VwcG9ydFJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwb3J0cmFpdC5sb2FkZWQpIHtcbiAgICAgIGRyYXdQb3J0cmFpdCh7IGNvbnRleHQsIHBvcnRyYWl0OiBwb3J0cmFpdC5pbWFnZSB9KTtcbiAgICB9XG4gICAgaWYgKGZvcmVncm91bmQubG9hZGVkKSB7XG4gICAgICBkcmF3Rm9yZWdyb3VuZCh7IGNvbnRleHQsIGZvcmVncm91bmQ6IGZvcmVncm91bmQuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChmb3JlZ3JvdW5kMi5sb2FkZWQpIHtcbiAgICAgIGRyYXdGb3JlZ3JvdW5kMih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGZvcmVncm91bmQyOiBmb3JlZ3JvdW5kMi5pbWFnZSxcbiAgICAgICAgZHJhZ29uZmxvd2VyOiBkcmFnb25mbG93ZXJSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocmFyaXR5QXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3UmFyaXR5KHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgcmFyaXR5QXRsYXM6IHJhcml0eUF0bGFzLmltYWdlLFxuICAgICAgICByYXJpdHk6IHJhcml0eVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh3ZWFwb25UeXBlQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3V2VhcG9uVHlwZSh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHdlYXBvblR5cGVBdGxhczogd2VhcG9uVHlwZUF0bGFzLmltYWdlLFxuICAgICAgICB3ZWFwb25UeXBlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtb3ZlVHlwZUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd01vdmVUeXBlKHsgY29udGV4dCwgbW92ZVR5cGVBdGxhczogbW92ZVR5cGVBdGxhcy5pbWFnZSwgbW92ZVR5cGUgfSk7XG4gICAgfVxuICAgIGlmIChkcmFnb25mbG93ZXJBdGxhcy5sb2FkZWQgJiYgbnVtYmVyQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3RHJhZ29uZmxvd2VyKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZHJhZ29uZmxvd2VyQXRsYXM6IGRyYWdvbmZsb3dlckF0bGFzLmltYWdlLFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIG1vdmVUeXBlLFxuICAgICAgICBkcmFnb25mbG93ZXI6IGRyYWdvbmZsb3dlclJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzdXBwb3J0QXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3U3VwcG9ydCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN1cHBvcnRBdGxhczogc3VwcG9ydEF0bGFzLmltYWdlLFxuICAgICAgICBzdXBwb3J0OiBzdXBwb3J0UmVmLmN1cnJlbnQsXG4gICAgICAgIGhhc0JsZXNzaW5nLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChibGVzc2luZ0F0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0JsZXNzaW5nKHsgY29udGV4dCwgYmxlc3NpbmdBdGxhczogYmxlc3NpbmdBdGxhcy5pbWFnZSB9KTtcbiAgICB9XG4gICAgaWYgKG51bWJlckF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0xldmVsKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBsdjE6IGx2MVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3TWVyZ2Uoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIG1lcmdlOiBtZXJnZVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3U3RhdE51bWJlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgc2NvcmU6IHNjb3JlUmVmLmN1cnJlbnQsXG4gICAgICAgIHNic3Q6IE1hdGgubWF4KHNraWxsSW5mb3NSZWYuY3VycmVudC5ic3QsIGhlcm9SZWYuY3VycmVudC5ic3QpLFxuICAgICAgICAuLi5zdGF0c0luZm9zUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICAgIGRyYXdTcGVjaWFsTnVtYmVyKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBhY2NlbGVyYXRlOiBza2lsbEluZm9zUmVmLmN1cnJlbnQuYWNjZWxlcmF0ZSxcbiAgICAgICAgc3BlY2lhbENEOiBza2lsbEluZm9zUmVmLmN1cnJlbnQuc3BlY2lhbENELFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdTa2lsbEljb24oe1xuICAgICAgY29udGV4dCxcbiAgICAgIHdlYXBvbkljb24sXG4gICAgICBhc3Npc3RJY29uLFxuICAgICAgc3BlY2lhbEljb24sXG4gICAgICB0ZXh0QSxcbiAgICAgIHRleHRCLFxuICAgICAgdGV4dEMsXG4gICAgICB0ZXh0UyxcbiAgICAgIHNraWxsQUljb24sXG4gICAgICBza2lsbEJJY29uLFxuICAgICAgc2tpbGxDSWNvbixcbiAgICAgIHNlYWxJY29uLFxuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb250ZXh0ID0gdGV4dENhbnZhcy5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGV4dENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDEwODAsIDE5MjApO1xuICAgIGRyYXdTdGF0VGV4dCh7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIGl2OiBpdlJlZi5jdXJyZW50LFxuICAgICAgbWVyZ2U6IG1lcmdlUmVmLmN1cnJlbnQsXG4gICAgfSk7XG4gICAgZHJhd1NraWxsVGV4dCh7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIHJlZmluZTogcmVmaW5lUmVmLmN1cnJlbnQsXG4gICAgICAuLi5za2lsbEluZm9zUmVmLmN1cnJlbnQubmFtZXMsXG4gICAgfSk7XG4gICAgZHJhd0Rlc2NyaXB0aW9uKHtcbiAgICAgIGNhbnZhczogdGV4dENhbnZhcy5jdXJyZW50LFxuICAgICAgdGl0bGUsXG4gICAgICBuYW1lLFxuICAgIH0pO1xuICAgIGlmIChhcmVuYVJlZi5jdXJyZW50ICYmIGFyZW5hSWNvbikge1xuICAgICAgZHJhd0FyZW5hSWNvbih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGFyZW5hSWNvbjogYXJlbmFJY29uLmltYWdlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChyZXNwbGVuZGVudFJlZi5jdXJyZW50ICYmIHJlc3BsZW5kZW50SWNvbikge1xuICAgICAgZHJhd1Jlc3BsZW5kZW50SWNvbih7IGNvbnRleHQsIHJlc3BsZW5kZW50SWNvbjogcmVzcGxlbmRlbnRJY29uLmltYWdlIH0pO1xuICAgIH1cbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0ZXh0Q2FudmFzLmN1cnJlbnQsIDAsIDAsIDU0MCwgOTYwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50LndpZHRoID0gMTA4MDtcbiAgICB0ZXh0Q2FudmFzLmN1cnJlbnQuaGVpZ2h0ID0gMTkyMDtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW1hZ2VJZEFuZFNyYy5mb3JFYWNoKChbaW1hZ2VJZCwgaW1nU3JjXSkgPT4ge1xuICAgICAgbG9hZGVycy5jdXJyZW50W2ltYWdlSWRdID0gbmV3IEltYWdlTG9hZGVyKGRyYXcpO1xuICAgICAgbG9hZGVycy5jdXJyZW50W2ltYWdlSWRdLmxvYWQoYCR7YmFzZVBhdGh9JHtpbWdTcmN9YCk7XG4gICAgfSk7XG4gIH0sIFtiYXNlUGF0aCwgbG9hZGVycywgZHJhd10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcG9ydHJhaXQgPSB0b1Jlc3BsZW5kZW50KGhlcm8uaWQsIHJlc3BsZW5kZW50KTtcbiAgICBsb2FkZXJzLmN1cnJlbnQucG9ydHJhaXQubG9hZChgL3BvcnRyYWl0cy8ke3BvcnRyYWl0fS5wbmdgKTtcbiAgICBjb25zdCBpY29ucyA9IGdldFNraWxsSWNvbnMoe1xuICAgICAgaGVyb0RCOiBkYi5oZXJvREIsXG4gICAgICB3ZWFwb25EQjogZGIud2VhcG9uREIsXG4gICAgICBhc3Npc3REQjogZGIuYXNzaXN0REIsXG4gICAgICBzcGVjaWFsREI6IGRiLnNwZWNpYWxEQixcbiAgICAgIHNraWxsQURCOiBkYi5za2lsbEFEQixcbiAgICAgIHNraWxsQkRCOiBkYi5za2lsbEJEQixcbiAgICAgIHNraWxsQ0RCOiBkYi5za2lsbENEQixcbiAgICAgIHNlYWxEQjogZGIuc2VhbERCLFxuICAgICAgc2tpbGxzLFxuICAgICAgaGVyb0lkOiBoZXJvLmlkLFxuICAgICAgcmVmaW5lLFxuICAgIH0pO1xuXG4gICAgZGVmYXVsdFNraWxsSWNvbnMuZm9yRWFjaCgoeyBza2lsbE5hbWUsIGVtcHR5IH0pID0+IHtcbiAgICAgIGxvYWRlcnMuY3VycmVudFtgJHtza2lsbE5hbWV9SWNvbmBdLmxvYWQoaWNvbnNbc2tpbGxOYW1lXSB8fCBlbXB0eSk7XG4gICAgfSk7XG4gICAgY29uc3QgaGFzQmxlc3NpbmcgPVxuICAgICAgKGhlcm8uYmxlc3NpbmcgIT09ICctJyAmJiAhIWhlcm8uYmxlc3NpbmcpIHx8ICEhYmxlc3Npbmc7XG4gICAgbG9hZGVycy5jdXJyZW50LmJsZXNzaW5nQXRsYXMubG9hZChcbiAgICAgIGhhc0JsZXNzaW5nID8gYGFzc2V0cy9ibGVzc2luZy0ke2hlcm8uYmxlc3NpbmcgfHwgYmxlc3Npbmd9LnBuZ2AgOiAnJ1xuICAgICk7XG4gIH0sIFtcbiAgICBoZXJvLFxuICAgIHJlc3BsZW5kZW50LFxuICAgIHNraWxscyxcbiAgICByZWZpbmUsXG4gICAgYmxlc3NpbmcsXG4gICAgc3RhdHNJbmZvcyxcbiAgICBkYi5oZXJvREIsXG4gICAgZGIud2VhcG9uREIsXG4gICAgZGIuYXNzaXN0REIsXG4gICAgZGIuc3BlY2lhbERCLFxuICAgIGRiLnNraWxsQURCLFxuICAgIGRiLnNraWxsQkRCLFxuICAgIGRiLnNraWxsQ0RCLFxuICAgIGRiLnNlYWxEQixcbiAgICBkZWZhdWx0U2tpbGxJY29ucyxcbiAgXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoZXJvUmVmLmN1cnJlbnQgPSBoZXJvO1xuICAgIHJhcml0eVJlZi5jdXJyZW50ID0gcmFyaXR5O1xuICAgIGl2UmVmLmN1cnJlbnQgPSBpdjtcbiAgICBtZXJnZVJlZi5jdXJyZW50ID0gbWVyZ2U7XG4gICAgZHJhZ29uZmxvd2VyUmVmLmN1cnJlbnQgPSBkcmFnb25mbG93ZXI7XG4gICAgYmxlc3NpbmdSZWYuY3VycmVudCA9IGJsZXNzaW5nO1xuICAgIHN1cHBvcnRSZWYuY3VycmVudCA9IHN1cHBvcnQ7XG4gICAgYXJlbmFSZWYuY3VycmVudCA9IGFyZW5hO1xuICAgIHJlc3BsZW5kZW50UmVmLmN1cnJlbnQgPSByZXNwbGVuZGVudDtcbiAgICByZWZpbmVSZWYuY3VycmVudCA9IHJlZmluZTtcbiAgICBsdjFSZWYuY3VycmVudCA9IGx2MTtcbiAgICBzY29yZVJlZi5jdXJyZW50ID0gc2NvcmU7XG4gICAgc2tpbGxJbmZvc1JlZi5jdXJyZW50ID0gc2tpbGxJbmZvcztcbiAgICBzdGF0c0luZm9zUmVmLmN1cnJlbnQgPSBzdGF0c0luZm9zO1xuICAgIGRyYXcoKTtcbiAgfSwgW1xuICAgIGhlcm8sXG4gICAgcmFyaXR5LFxuICAgIGl2LFxuICAgIG1lcmdlLFxuICAgIGRyYWdvbmZsb3dlcixcbiAgICBibGVzc2luZyxcbiAgICBzdXBwb3J0LFxuICAgIGFyZW5hLFxuICAgIHJlc3BsZW5kZW50LFxuICAgIHJlZmluZSxcbiAgICBsdjEsXG4gICAgc2NvcmUsXG4gICAgc2tpbGxJbmZvcyxcbiAgICBzdGF0c0luZm9zLFxuICAgIGRyYXcsXG4gIF0pO1xuXG4gIGNvbnN0IHRyaWdnZXJEb3dubG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBkYXRhVVJMID0gY2FudmFzUmVmLmN1cnJlbnQudG9EYXRhVVJMKCdpbWFnZS9wbmcnKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmsuaHJlZiA9IGRhdGFVUkw7XG4gICAgbGluay5kb3dubG9hZCA9IGAke2hlcm8/Lm5hbWV9LSR7aGVybz8udGl0bGV9LnBuZ2A7XG4gICAgbGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGxpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICB9LCBbaGVybz8ubmFtZSwgaGVybz8udGl0bGVdKTtcblxuICByZXR1cm4ge1xuICAgIGNhbnZhc1JlZixcbiAgICB0cmlnZ2VyRG93bmxvYWQsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUhvb2tzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==