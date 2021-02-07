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
/* harmony import */ var _app_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/utils/data-utils */ "./app/utils/data-utils.tsx");
/* harmony import */ var _app_utils_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/utils/stats */ "./app/utils/stats.tsx");
/* harmony import */ var _app_utils_arenascore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/utils/arenascore */ "./app/utils/arenascore.tsx");
/* harmony import */ var _app_utils_resplendent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/utils/resplendent */ "./app/utils/resplendent.tsx");
/* harmony import */ var _app_utils_heroes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/utils/heroes */ "./app/utils/heroes.tsx");
/* harmony import */ var _app_page_FEHDB__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/page/FEHDB */ "./app/page/FEHDB/index.tsx");
/* harmony import */ var _ImageLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageLoader */ "./app/components/UnitViewer/ImageLoader/index.tsx");
/* harmony import */ var _Background_draw__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Background/draw */ "./app/components/UnitViewer/Background/draw.tsx");
/* harmony import */ var _Portrait_draw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Portrait/draw */ "./app/components/UnitViewer/Portrait/draw.tsx");
/* harmony import */ var _Foreground_draw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Foreground/draw */ "./app/components/UnitViewer/Foreground/draw.tsx");
/* harmony import */ var _Foreground2_draw__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Foreground2/draw */ "./app/components/UnitViewer/Foreground2/draw.tsx");
/* harmony import */ var _Rarity_draw__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Rarity/draw */ "./app/components/UnitViewer/Rarity/draw.tsx");
/* harmony import */ var _WeaponType_draw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./WeaponType/draw */ "./app/components/UnitViewer/WeaponType/draw.tsx");
/* harmony import */ var _MoveType_draw__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MoveType/draw */ "./app/components/UnitViewer/MoveType/draw.tsx");
/* harmony import */ var _DragonFlower_draw__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DragonFlower/draw */ "./app/components/UnitViewer/DragonFlower/draw.tsx");
/* harmony import */ var _Support_draw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Support/draw */ "./app/components/UnitViewer/Support/draw.tsx");
/* harmony import */ var _Blessing_draw__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Blessing/draw */ "./app/components/UnitViewer/Blessing/draw.tsx");
/* harmony import */ var _SkillIcon_draw__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SkillIcon/draw */ "./app/components/UnitViewer/SkillIcon/draw.tsx");
/* harmony import */ var _Level_draw__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Level/draw */ "./app/components/UnitViewer/Level/draw.tsx");
/* harmony import */ var _Merge_draw__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Merge/draw */ "./app/components/UnitViewer/Merge/draw.tsx");
/* harmony import */ var _StatNumber_draw__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./StatNumber/draw */ "./app/components/UnitViewer/StatNumber/draw.tsx");
/* harmony import */ var _SpecialNumber_draw__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SpecialNumber/draw */ "./app/components/UnitViewer/SpecialNumber/draw.tsx");
/* harmony import */ var _StatText_draw__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./StatText/draw */ "./app/components/UnitViewer/StatText/draw.tsx");
/* harmony import */ var _SkillText_draw__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SkillText/draw */ "./app/components/UnitViewer/SkillText/draw.tsx");
/* harmony import */ var _DescriptionText_draw__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./DescriptionText/draw */ "./app/components/UnitViewer/DescriptionText/draw.tsx");
/* harmony import */ var _ArenaIcon_draw__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ArenaIcon/draw */ "./app/components/UnitViewer/ArenaIcon/draw.tsx");
/* harmony import */ var _ResplendentIcon_draw__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ResplendentIcon/draw */ "./app/components/UnitViewer/ResplendentIcon/draw.tsx");



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





























var imageIdAndSrc = [['background', '/assets/background.jpg'], ['foreground', '/assets/foreground.png'], ['foreground2', '/assets/foreground2.png'], ['portrait', ''], ['rarityAtlas', '/assets/rarity.png'], ['weaponTypeAtlas', '/assets/weapon-type.png'], ['moveTypeAtlas', '/assets/move-type.png'], ['dragonflowerAtlas', '/assets/dragonflower.png'], ['supportAtlas', '/assets/support.png'], ['blessingAtlas', ''], ['numberAtlas', '/assets/number.png'], ['weaponIcon', '/skills/weapon.png'], ['assistIcon', '/skills/assist.png'], ['specialIcon', 'skills/special.png'], ['textA', '/assets/skill-a.png'], ['textB', '/assets/skill-b.png'], ['textC', '/assets/skill-c.png'], ['textS', '/assets/skill-s.png'], ['arenaIcon', '/assets/Arena_Crown.png'], ['skillAIcon', ''], ['skillBIcon', ''], ['skillCIcon', ''], ['sealIcon', ''], ['resplendentIcon', '/assets/god-wear-l.png']];
var defaultSkillIcons = [{
  skillName: 'weapon',
  empty: 'skills/weapon.png'
}, {
  skillName: 'skillA',
  empty: 'skills/empty.png'
}, {
  skillName: 'skillB',
  empty: 'skills/empty.png'
}, {
  skillName: 'skillC',
  empty: 'skills/empty.png'
}, {
  skillName: 'seal',
  empty: 'skills/seal-empty.png'
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
  var db = Object(_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_8__["useFehDB"])();
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
    return Object(_app_utils_heroes__WEBPACK_IMPORTED_MODULE_7__["getHero"])(db.heroDB, heroId);
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
    return Object(_app_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["getSkillInfos"])({
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
    return Object(_app_utils_stats__WEBPACK_IMPORTED_MODULE_4__["getStats"])(rarity, stats, iv, merge, support, skillInfos.stats, lv1, arena, dragonflower, resplendent);
  }, [rarity, stats, iv, merge, support, skillInfos, lv1, arena, dragonflower, resplendent]);
  var score = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return Object(_app_utils_arenascore__WEBPACK_IMPORTED_MODULE_5__["default"])({
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
      Object(_Background_draw__WEBPACK_IMPORTED_MODULE_10__["default"])({
        context: context,
        background: background.image,
        support: supportRef.current
      });
    }

    if (portrait.loaded) {
      Object(_Portrait_draw__WEBPACK_IMPORTED_MODULE_11__["default"])({
        context: context,
        portrait: portrait.image
      });
    }

    if (foreground.loaded) {
      Object(_Foreground_draw__WEBPACK_IMPORTED_MODULE_12__["default"])({
        context: context,
        foreground: foreground.image
      });
    }

    if (foreground2.loaded) {
      Object(_Foreground2_draw__WEBPACK_IMPORTED_MODULE_13__["default"])({
        context: context,
        foreground2: foreground2.image,
        dragonflower: dragonflowerRef.current
      });
    }

    if (rarityAtlas.loaded) {
      Object(_Rarity_draw__WEBPACK_IMPORTED_MODULE_14__["default"])({
        context: context,
        rarityAtlas: rarityAtlas.image,
        rarity: rarityRef.current
      });
    }

    if (weaponTypeAtlas.loaded) {
      Object(_WeaponType_draw__WEBPACK_IMPORTED_MODULE_15__["default"])({
        context: context,
        weaponTypeAtlas: weaponTypeAtlas.image,
        weaponType: weaponType
      });
    }

    if (moveTypeAtlas.loaded) {
      Object(_MoveType_draw__WEBPACK_IMPORTED_MODULE_16__["default"])({
        context: context,
        moveTypeAtlas: moveTypeAtlas.image,
        moveType: moveType
      });
    }

    if (dragonflowerAtlas.loaded && numberAtlas.loaded) {
      Object(_DragonFlower_draw__WEBPACK_IMPORTED_MODULE_17__["default"])({
        context: context,
        dragonflowerAtlas: dragonflowerAtlas.image,
        numberAtlas: numberAtlas.image,
        moveType: moveType,
        dragonflower: dragonflowerRef.current
      });
    }

    if (supportAtlas.loaded) {
      Object(_Support_draw__WEBPACK_IMPORTED_MODULE_18__["default"])({
        context: context,
        supportAtlas: supportAtlas.image,
        support: supportRef.current,
        hasBlessing: hasBlessing
      });
    }

    if (blessingAtlas.loaded) {
      Object(_Blessing_draw__WEBPACK_IMPORTED_MODULE_19__["default"])({
        context: context,
        blessingAtlas: blessingAtlas.image
      });
    }

    if (numberAtlas.loaded) {
      Object(_Level_draw__WEBPACK_IMPORTED_MODULE_21__["default"])({
        context: context,
        numberAtlas: numberAtlas.image,
        lv1: lv1Ref.current
      });
      Object(_Merge_draw__WEBPACK_IMPORTED_MODULE_22__["default"])({
        context: context,
        numberAtlas: numberAtlas.image,
        merge: mergeRef.current
      });
      Object(_StatNumber_draw__WEBPACK_IMPORTED_MODULE_23__["default"])(_objectSpread({
        context: context,
        numberAtlas: numberAtlas.image,
        score: scoreRef.current,
        sbst: Math.max(skillInfosRef.current.bst, heroRef.current.bst)
      }, statsInfosRef.current));
      Object(_SpecialNumber_draw__WEBPACK_IMPORTED_MODULE_24__["default"])({
        context: context,
        numberAtlas: numberAtlas.image,
        accelerate: skillInfosRef.current.accelerate,
        specialCD: skillInfosRef.current.specialCD
      });
    }

    Object(_SkillIcon_draw__WEBPACK_IMPORTED_MODULE_20__["default"])({
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
    Object(_StatText_draw__WEBPACK_IMPORTED_MODULE_25__["default"])({
      canvas: textCanvas.current,
      iv: ivRef.current,
      merge: mergeRef.current
    });
    Object(_SkillText_draw__WEBPACK_IMPORTED_MODULE_26__["default"])(_objectSpread({
      canvas: textCanvas.current,
      refine: refineRef.current
    }, skillInfosRef.current.names));
    Object(_DescriptionText_draw__WEBPACK_IMPORTED_MODULE_27__["default"])({
      canvas: textCanvas.current,
      title: title,
      name: name
    });

    if (arenaRef.current && arenaIcon) {
      Object(_ArenaIcon_draw__WEBPACK_IMPORTED_MODULE_28__["default"])({
        context: context,
        arenaIcon: arenaIcon.image
      });
    }

    if (resplendentRef.current && resplendentIcon) {
      Object(_ResplendentIcon_draw__WEBPACK_IMPORTED_MODULE_29__["default"])({
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

      loaders.current[imageId] = new _ImageLoader__WEBPACK_IMPORTED_MODULE_9__["ImageLoader"](draw);
      loaders.current[imageId].load(imgSrc);
    });
  }, [loaders, draw]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var portrait = Object(_app_utils_resplendent__WEBPACK_IMPORTED_MODULE_6__["toResplendent"])(hero.id, resplendent);
    loaders.current.portrait.load("/portraits/".concat(portrait, ".png"));
    var icons = Object(_app_utils_data_utils__WEBPACK_IMPORTED_MODULE_3__["getSkillIcons"])({
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
    console.log(skillInfos);
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
  return [_app_page_FEHDB__WEBPACK_IMPORTED_MODULE_8__["useFehDB"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9ob29rcy50c3giXSwibmFtZXMiOlsiaW1hZ2VJZEFuZFNyYyIsImRlZmF1bHRTa2lsbEljb25zIiwic2tpbGxOYW1lIiwiZW1wdHkiLCJ1c2VIb29rcyIsImhlcm9JZCIsInJhcml0eSIsIml2IiwibWVyZ2UiLCJkcmFnb25mbG93ZXIiLCJibGVzc2luZyIsInN1cHBvcnQiLCJhcmVuYSIsInJlc3BsZW5kZW50Iiwid2VhcG9uIiwicmVmaW5lIiwiYXNzaXN0Iiwic3BlY2lhbCIsInNraWxsQSIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJsdjEiLCJkYiIsInVzZUZlaERCIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidGV4dENhbnZhcyIsImhlcm9SZWYiLCJza2lsbEluZm9zUmVmIiwic3RhdHNJbmZvc1JlZiIsInJhcml0eVJlZiIsIml2UmVmIiwibWVyZ2VSZWYiLCJkcmFnb25mbG93ZXJSZWYiLCJibGVzc2luZ1JlZiIsInN1cHBvcnRSZWYiLCJhcmVuYVJlZiIsInJlc3BsZW5kZW50UmVmIiwicmVmaW5lUmVmIiwibHYxUmVmIiwic2NvcmVSZWYiLCJoZXJvIiwidXNlTWVtbyIsImdldEhlcm8iLCJoZXJvREIiLCJza2lsbHMiLCJzdGF0cyIsInNraWxsSW5mb3MiLCJnZXRTa2lsbEluZm9zIiwid2VhcG9uREIiLCJhc3Npc3REQiIsInNwZWNpYWxEQiIsInNraWxsQURCIiwic2tpbGxCREIiLCJza2lsbENEQiIsInNlYWxEQiIsInN0YXRzSW5mb3MiLCJnZXRTdGF0cyIsInNjb3JlIiwiYXJlbmFTY29yZSIsImJzdCIsIk1hdGgiLCJtYXgiLCJzcHQiLCJsb2FkZXJzIiwiZHJhdyIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImJhY2tncm91bmQiLCJmb3JlZ3JvdW5kIiwiZm9yZWdyb3VuZDIiLCJwb3J0cmFpdCIsInJhcml0eUF0bGFzIiwid2VhcG9uVHlwZUF0bGFzIiwibW92ZVR5cGVBdGxhcyIsImRyYWdvbmZsb3dlckF0bGFzIiwic3VwcG9ydEF0bGFzIiwiYmxlc3NpbmdBdGxhcyIsIm51bWJlckF0bGFzIiwid2VhcG9uSWNvbiIsImFzc2lzdEljb24iLCJzcGVjaWFsSWNvbiIsInRleHRBIiwidGV4dEIiLCJ0ZXh0QyIsInRleHRTIiwiYXJlbmFJY29uIiwic2tpbGxBSWNvbiIsInNraWxsQkljb24iLCJza2lsbENJY29uIiwic2VhbEljb24iLCJyZXNwbGVuZGVudEljb24iLCJ0aXRsZSIsIm5hbWUiLCJ3ZWFwb25UeXBlIiwibW92ZVR5cGUiLCJoYXNCbGVzc2luZyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwibG9hZGVkIiwiZHJhd0JhY2tncm91bmQiLCJpbWFnZSIsImRyYXdQb3J0cmFpdCIsImRyYXdGb3JlZ3JvdW5kIiwiZHJhd0ZvcmVncm91bmQyIiwiZHJhd1Jhcml0eSIsImRyYXdXZWFwb25UeXBlIiwiZHJhd01vdmVUeXBlIiwiZHJhd0RyYWdvbmZsb3dlciIsImRyYXdTdXBwb3J0IiwiZHJhd0JsZXNzaW5nIiwiZHJhd0xldmVsIiwiZHJhd01lcmdlIiwiZHJhd1N0YXROdW1iZXIiLCJzYnN0IiwiZHJhd1NwZWNpYWxOdW1iZXIiLCJhY2NlbGVyYXRlIiwic3BlY2lhbENEIiwiZHJhd1NraWxsSWNvbiIsInRleHRDb250ZXh0IiwiZHJhd1N0YXRUZXh0IiwiY2FudmFzIiwiZHJhd1NraWxsVGV4dCIsIm5hbWVzIiwiZHJhd0Rlc2NyaXB0aW9uIiwiZHJhd0FyZW5hSWNvbiIsImRyYXdSZXNwbGVuZGVudEljb24iLCJkcmF3SW1hZ2UiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImZvckVhY2giLCJpbWFnZUlkIiwiaW1nU3JjIiwiSW1hZ2VMb2FkZXIiLCJsb2FkIiwidG9SZXNwbGVuZGVudCIsImlkIiwiaWNvbnMiLCJnZXRTa2lsbEljb25zIiwiY29uc29sZSIsImxvZyIsInRyaWdnZXJEb3dubG9hZCIsImRhdGFVUkwiLCJ0b0RhdGFVUkwiLCJsaW5rIiwiaHJlZiIsImRvd25sb2FkIiwidGFyZ2V0IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEIsQ0FBQyxZQUFELEVBQWUsd0JBQWYsQ0FEb0IsRUFFcEIsQ0FBQyxZQUFELEVBQWUsd0JBQWYsQ0FGb0IsRUFHcEIsQ0FBQyxhQUFELEVBQWdCLHlCQUFoQixDQUhvQixFQUlwQixDQUFDLFVBQUQsRUFBYSxFQUFiLENBSm9CLEVBS3BCLENBQUMsYUFBRCxFQUFnQixvQkFBaEIsQ0FMb0IsRUFNcEIsQ0FBQyxpQkFBRCxFQUFvQix5QkFBcEIsQ0FOb0IsRUFPcEIsQ0FBQyxlQUFELEVBQWtCLHVCQUFsQixDQVBvQixFQVFwQixDQUFDLG1CQUFELEVBQXNCLDBCQUF0QixDQVJvQixFQVNwQixDQUFDLGNBQUQsRUFBaUIscUJBQWpCLENBVG9CLEVBVXBCLENBQUMsZUFBRCxFQUFrQixFQUFsQixDQVZvQixFQVdwQixDQUFDLGFBQUQsRUFBZ0Isb0JBQWhCLENBWG9CLEVBWXBCLENBQUMsWUFBRCxFQUFlLG9CQUFmLENBWm9CLEVBYXBCLENBQUMsWUFBRCxFQUFlLG9CQUFmLENBYm9CLEVBY3BCLENBQUMsYUFBRCxFQUFnQixvQkFBaEIsQ0Fkb0IsRUFlcEIsQ0FBQyxPQUFELEVBQVUscUJBQVYsQ0Fmb0IsRUFnQnBCLENBQUMsT0FBRCxFQUFVLHFCQUFWLENBaEJvQixFQWlC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MEJMLElBQTFCO0FBQ0FBLFFBQUksQ0FBQ00sS0FBTDtBQUNBeEIsWUFBUSxDQUFDc0IsSUFBVCxDQUFjRyxXQUFkLENBQTBCUCxJQUExQjtBQUNELEdBVGtDLEVBU2hDLENBQUMzRyxJQUFELGFBQUNBLElBQUQsdUJBQUNBLElBQUksQ0FBRW9ELElBQVAsRUFBYXBELElBQWIsYUFBYUEsSUFBYix1QkFBYUEsSUFBSSxDQUFFbUQsS0FBbkIsQ0FUZ0MsQ0FBbkM7QUFXQSxTQUFPO0FBQ0xwRSxhQUFTLEVBQVRBLFNBREs7QUFFTHlILG1CQUFlLEVBQWZBO0FBRkssR0FBUDtBQUlEOztHQWhaUTlJLFE7VUFzQklvQix3RDs7O0FBNFhFcEIsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdW5pdGVkaXRvci43MmJhOWRmZTdkY2ZkNjg4NTlhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVEhlcm8sIFRTa2lsbElkcyB9IGZyb20gJ0AvYXBwL3V0aWxzL3R5cGVzJztcbmltcG9ydCB7IGdldFNraWxsSWNvbnMsIGdldFNraWxsSW5mb3MgfSBmcm9tICdAL2FwcC91dGlscy9kYXRhLXV0aWxzJztcbmltcG9ydCB7IGdldFN0YXRzIH0gZnJvbSAnQC9hcHAvdXRpbHMvc3RhdHMnO1xuaW1wb3J0IGFyZW5hU2NvcmUgZnJvbSAnQC9hcHAvdXRpbHMvYXJlbmFzY29yZSc7XG5pbXBvcnQgeyB0b1Jlc3BsZW5kZW50IH0gZnJvbSAnQC9hcHAvdXRpbHMvcmVzcGxlbmRlbnQnO1xuaW1wb3J0IHsgZ2V0SGVybyB9IGZyb20gJ0AvYXBwL3V0aWxzL2hlcm9lcyc7XG5pbXBvcnQgeyB1c2VGZWhEQiB9IGZyb20gJ0AvYXBwL3BhZ2UvRkVIREInO1xuaW1wb3J0IHsgSW1hZ2VMb2FkZXIgfSBmcm9tICcuL0ltYWdlTG9hZGVyJztcbmltcG9ydCBkcmF3QmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQvZHJhdyc7XG5pbXBvcnQgZHJhd1BvcnRyYWl0IGZyb20gJy4vUG9ydHJhaXQvZHJhdyc7XG5pbXBvcnQgZHJhd0ZvcmVncm91bmQgZnJvbSAnLi9Gb3JlZ3JvdW5kL2RyYXcnO1xuaW1wb3J0IGRyYXdGb3JlZ3JvdW5kMiBmcm9tICcuL0ZvcmVncm91bmQyL2RyYXcnO1xuaW1wb3J0IGRyYXdSYXJpdHkgZnJvbSAnLi9SYXJpdHkvZHJhdyc7XG5pbXBvcnQgZHJhd1dlYXBvblR5cGUgZnJvbSAnLi9XZWFwb25UeXBlL2RyYXcnO1xuaW1wb3J0IGRyYXdNb3ZlVHlwZSBmcm9tICcuL01vdmVUeXBlL2RyYXcnO1xuaW1wb3J0IGRyYXdEcmFnb25mbG93ZXIgZnJvbSAnLi9EcmFnb25GbG93ZXIvZHJhdyc7XG5pbXBvcnQgZHJhd1N1cHBvcnQgZnJvbSAnLi9TdXBwb3J0L2RyYXcnO1xuaW1wb3J0IGRyYXdCbGVzc2luZyBmcm9tICcuL0JsZXNzaW5nL2RyYXcnO1xuaW1wb3J0IGRyYXdTa2lsbEljb24gZnJvbSAnLi9Ta2lsbEljb24vZHJhdyc7XG5pbXBvcnQgZHJhd0xldmVsIGZyb20gJy4vTGV2ZWwvZHJhdyc7XG5pbXBvcnQgZHJhd01lcmdlIGZyb20gJy4vTWVyZ2UvZHJhdyc7XG5pbXBvcnQgZHJhd1N0YXROdW1iZXIgZnJvbSAnLi9TdGF0TnVtYmVyL2RyYXcnO1xuaW1wb3J0IGRyYXdTcGVjaWFsTnVtYmVyIGZyb20gJy4vU3BlY2lhbE51bWJlci9kcmF3JztcbmltcG9ydCBkcmF3U3RhdFRleHQgZnJvbSAnLi9TdGF0VGV4dC9kcmF3JztcbmltcG9ydCBkcmF3U2tpbGxUZXh0IGZyb20gJy4vU2tpbGxUZXh0L2RyYXcnO1xuaW1wb3J0IGRyYXdEZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uVGV4dC9kcmF3JztcbmltcG9ydCBkcmF3QXJlbmFJY29uIGZyb20gJy4vQXJlbmFJY29uL2RyYXcnO1xuaW1wb3J0IGRyYXdSZXNwbGVuZGVudEljb24gZnJvbSAnLi9SZXNwbGVuZGVudEljb24vZHJhdyc7XG5cbmNvbnN0IGltYWdlSWRBbmRTcmMgPSBbXG4gIFsnYmFja2dyb3VuZCcsICcvYXNzZXRzL2JhY2tncm91bmQuanBnJ10sXG4gIFsnZm9yZWdyb3VuZCcsICcvYXNzZXRzL2ZvcmVncm91bmQucG5nJ10sXG4gIFsnZm9yZWdyb3VuZDInLCAnL2Fzc2V0cy9mb3JlZ3JvdW5kMi5wbmcnXSxcbiAgWydwb3J0cmFpdCcsICcnXSxcbiAgWydyYXJpdHlBdGxhcycsICcvYXNzZXRzL3Jhcml0eS5wbmcnXSxcbiAgWyd3ZWFwb25UeXBlQXRsYXMnLCAnL2Fzc2V0cy93ZWFwb24tdHlwZS5wbmcnXSxcbiAgWydtb3ZlVHlwZUF0bGFzJywgJy9hc3NldHMvbW92ZS10eXBlLnBuZyddLFxuICBbJ2RyYWdvbmZsb3dlckF0bGFzJywgJy9hc3NldHMvZHJhZ29uZmxvd2VyLnBuZyddLFxuICBbJ3N1cHBvcnRBdGxhcycsICcvYXNzZXRzL3N1cHBvcnQucG5nJ10sXG4gIFsnYmxlc3NpbmdBdGxhcycsICcnXSxcbiAgWydudW1iZXJBdGxhcycsICcvYXNzZXRzL251bWJlci5wbmcnXSxcbiAgWyd3ZWFwb25JY29uJywgJy9za2lsbHMvd2VhcG9uLnBuZyddLFxuICBbJ2Fzc2lzdEljb24nLCAnL3NraWxscy9hc3Npc3QucG5nJ10sXG4gIFsnc3BlY2lhbEljb24nLCAnc2tpbGxzL3NwZWNpYWwucG5nJ10sXG4gIFsndGV4dEEnLCAnL2Fzc2V0cy9za2lsbC1hLnBuZyddLFxuICBbJ3RleHRCJywgJy9hc3NldHMvc2tpbGwtYi5wbmcnXSxcbiAgWyd0ZXh0QycsICcvYXNzZXRzL3NraWxsLWMucG5nJ10sXG4gIFsndGV4dFMnLCAnL2Fzc2V0cy9za2lsbC1zLnBuZyddLFxuICBbJ2FyZW5hSWNvbicsICcvYXNzZXRzL0FyZW5hX0Nyb3duLnBuZyddLFxuICBbJ3NraWxsQUljb24nLCAnJ10sXG4gIFsnc2tpbGxCSWNvbicsICcnXSxcbiAgWydza2lsbENJY29uJywgJyddLFxuICBbJ3NlYWxJY29uJywgJyddLFxuICBbJ3Jlc3BsZW5kZW50SWNvbicsICcvYXNzZXRzL2dvZC13ZWFyLWwucG5nJ10sXG5dO1xuXG5jb25zdCBkZWZhdWx0U2tpbGxJY29ucyA9IFtcbiAge1xuICAgIHNraWxsTmFtZTogJ3dlYXBvbicsXG4gICAgZW1wdHk6ICdza2lsbHMvd2VhcG9uLnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdza2lsbEEnLFxuICAgIGVtcHR5OiAnc2tpbGxzL2VtcHR5LnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdza2lsbEInLFxuICAgIGVtcHR5OiAnc2tpbGxzL2VtcHR5LnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdza2lsbEMnLFxuICAgIGVtcHR5OiAnc2tpbGxzL2VtcHR5LnBuZycsXG4gIH0sXG4gIHtcbiAgICBza2lsbE5hbWU6ICdzZWFsJyxcbiAgICBlbXB0eTogJ3NraWxscy9zZWFsLWVtcHR5LnBuZycsXG4gIH0sXG5dO1xuXG5leHBvcnQgdHlwZSBUSG9va1Byb3BzID0ge1xuICBoZXJvSWQ6IHN0cmluZztcbiAgcmFyaXR5OiA1IHwgNDtcbiAgaXY6IHN0cmluZztcbiAgbWVyZ2U6IG51bWJlcjtcbiAgZHJhZ29uZmxvd2VyOiBudW1iZXI7XG4gIGJsZXNzaW5nOiBzdHJpbmc7XG4gIHN1cHBvcnQ6IGJvb2xlYW47XG4gIGFyZW5hOiBib29sZWFuO1xuICByZXNwbGVuZGVudDogYm9vbGVhbjtcbiAgLyoqIHNraWxscyAqL1xuICB3ZWFwb246IHN0cmluZztcbiAgcmVmaW5lOiBzdHJpbmc7XG4gIGFzc2lzdDogc3RyaW5nO1xuICBzcGVjaWFsOiBzdHJpbmc7XG4gIHNraWxsQTogc3RyaW5nO1xuICBza2lsbEI6IHN0cmluZztcbiAgc2tpbGxDOiBzdHJpbmc7XG4gIHNlYWw6IHN0cmluZztcbiAgLyoqIGVkaXRvciAqL1xuICBsdjE6IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiB1c2VIb29rcyh7XG4gIGhlcm9JZCxcbiAgcmFyaXR5LFxuICBpdixcbiAgbWVyZ2UsXG4gIGRyYWdvbmZsb3dlcixcbiAgYmxlc3NpbmcsXG4gIHN1cHBvcnQsXG4gIGFyZW5hLFxuICByZXNwbGVuZGVudCxcbiAgLyoqIHNraWxscyAqL1xuICB3ZWFwb24sXG4gIHJlZmluZSxcbiAgYXNzaXN0LFxuICBzcGVjaWFsLFxuICBza2lsbEEsXG4gIHNraWxsQixcbiAgc2tpbGxDLFxuICBzZWFsLFxuICAvKiogZWRpdG9yICovXG4gIGx2MSxcbn06IFRIb29rUHJvcHMpIHtcbiAgY29uc3QgZGIgPSB1c2VGZWhEQigpO1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHRleHRDYW52YXMgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBoZXJvUmVmID0gdXNlUmVmPFRIZXJvPigpO1xuICBjb25zdCBza2lsbEluZm9zUmVmID0gdXNlUmVmPHtcbiAgICBuYW1lczogVFNraWxsSWRzO1xuICAgIHN0YXRzOiB7XG4gICAgICBocDogbnVtYmVyO1xuICAgICAgYXRrOiBudW1iZXI7XG4gICAgICBzcGQ6IG51bWJlcjtcbiAgICAgIGRlZjogbnVtYmVyO1xuICAgICAgcmVzOiBudW1iZXI7XG4gICAgfTtcbiAgICBhY2NlbGVyYXRlOiBudW1iZXI7XG4gICAgc3BlY2lhbENEOiBudW1iZXI7XG4gICAgc3B0OiBudW1iZXI7XG4gICAgYnN0OiBudW1iZXI7XG4gIH0+KCk7XG4gIGNvbnN0IHN0YXRzSW5mb3NSZWYgPSB1c2VSZWY8e1xuICAgIHN0YXRzOiB7IFtzdGF0S2V5OiBzdHJpbmddOiBudW1iZXIgfTtcbiAgICBic3Q6IG51bWJlcjtcbiAgfT4oKTtcbiAgY29uc3QgcmFyaXR5UmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgaXZSZWYgPSB1c2VSZWY8c3RyaW5nPigpO1xuICBjb25zdCBtZXJnZVJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG4gIGNvbnN0IGRyYWdvbmZsb3dlclJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG4gIGNvbnN0IGJsZXNzaW5nUmVmID0gdXNlUmVmPHN0cmluZz4oKTtcbiAgY29uc3Qgc3VwcG9ydFJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCBhcmVuYVJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCByZXNwbGVuZGVudFJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCByZWZpbmVSZWYgPSB1c2VSZWY8c3RyaW5nPigpO1xuICBjb25zdCBsdjFSZWYgPSB1c2VSZWY8Ym9vbGVhbj4oKTtcbiAgY29uc3Qgc2NvcmVSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuXG4gIGNvbnN0IGhlcm8gPSB1c2VNZW1vKCgpID0+IGdldEhlcm8oZGIuaGVyb0RCLCBoZXJvSWQpLCBbZGIuaGVyb0RCLCBoZXJvSWRdKTtcblxuICBjb25zdCBza2lsbHMgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7IHdlYXBvbiwgYXNzaXN0LCBzcGVjaWFsLCBza2lsbEEsIHNraWxsQiwgc2tpbGxDLCBzZWFsIH0pLFxuICAgIFt3ZWFwb24sIGFzc2lzdCwgc3BlY2lhbCwgc2tpbGxBLCBza2lsbEIsIHNraWxsQywgc2VhbF1cbiAgKTtcbiAgY29uc3Qgc3RhdHMgPSBoZXJvLnN0YXRzO1xuICBjb25zdCBza2lsbEluZm9zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2V0U2tpbGxJbmZvcyh7XG4gICAgICAgIGhlcm9EQjogZGIuaGVyb0RCLFxuICAgICAgICB3ZWFwb25EQjogZGIud2VhcG9uREIsXG4gICAgICAgIGFzc2lzdERCOiBkYi5hc3Npc3REQixcbiAgICAgICAgc3BlY2lhbERCOiBkYi5zcGVjaWFsREIsXG4gICAgICAgIHNraWxsQURCOiBkYi5za2lsbEFEQixcbiAgICAgICAgc2tpbGxCREI6IGRiLnNraWxsQkRCLFxuICAgICAgICBza2lsbENEQjogZGIuc2tpbGxDREIsXG4gICAgICAgIHNlYWxEQjogZGIuc2VhbERCLFxuICAgICAgICBza2lsbHMsXG4gICAgICAgIGhlcm9JZCxcbiAgICAgICAgcmVmaW5lLFxuICAgICAgICByYXJpdHksXG4gICAgICB9KSxcbiAgICBbXG4gICAgICBza2lsbHMsXG4gICAgICBoZXJvSWQsXG4gICAgICByZWZpbmUsXG4gICAgICByYXJpdHksXG4gICAgICBkYi5oZXJvREIsXG4gICAgICBkYi53ZWFwb25EQixcbiAgICAgIGRiLmFzc2lzdERCLFxuICAgICAgZGIuc3BlY2lhbERCLFxuICAgICAgZGIuc2tpbGxBREIsXG4gICAgICBkYi5za2lsbEJEQixcbiAgICAgIGRiLnNraWxsQ0RCLFxuICAgICAgZGIuc2VhbERCLFxuICAgIF1cbiAgKTtcblxuICBjb25zdCBzdGF0c0luZm9zID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgZ2V0U3RhdHMoXG4gICAgICAgIHJhcml0eSxcbiAgICAgICAgc3RhdHMsXG4gICAgICAgIGl2LFxuICAgICAgICBtZXJnZSxcbiAgICAgICAgc3VwcG9ydCxcbiAgICAgICAgc2tpbGxJbmZvcy5zdGF0cyxcbiAgICAgICAgbHYxLFxuICAgICAgICBhcmVuYSxcbiAgICAgICAgZHJhZ29uZmxvd2VyLFxuICAgICAgICByZXNwbGVuZGVudFxuICAgICAgKSxcbiAgICBbXG4gICAgICByYXJpdHksXG4gICAgICBzdGF0cyxcbiAgICAgIGl2LFxuICAgICAgbWVyZ2UsXG4gICAgICBzdXBwb3J0LFxuICAgICAgc2tpbGxJbmZvcyxcbiAgICAgIGx2MSxcbiAgICAgIGFyZW5hLFxuICAgICAgZHJhZ29uZmxvd2VyLFxuICAgICAgcmVzcGxlbmRlbnQsXG4gICAgXVxuICApO1xuICBjb25zdCBzY29yZSA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIGFyZW5hU2NvcmUoe1xuICAgICAgICByYXJpdHksXG4gICAgICAgIG1lcmdlLFxuICAgICAgICBic3Q6IE1hdGgubWF4KHN0YXRzSW5mb3MuYnN0LCBza2lsbEluZm9zLmJzdCwgaGVyby5ic3QgfHwgMCksXG4gICAgICAgIHNwdDogc2tpbGxJbmZvcy5zcHQsXG4gICAgICB9KSxcbiAgICBbcmFyaXR5LCBtZXJnZSwgc3RhdHNJbmZvcy5ic3QsIHNraWxsSW5mb3MuYnN0LCBza2lsbEluZm9zLnNwdCwgaGVyb11cbiAgKTtcblxuICBjb25zdCBsb2FkZXJzID0gdXNlUmVmPHsgW2ltYWdlSWQ6IHN0cmluZ106IEltYWdlTG9hZGVyIH0+KHt9KTtcblxuICBjb25zdCBkcmF3ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgYmFja2dyb3VuZCxcbiAgICAgIGZvcmVncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kMixcbiAgICAgIHBvcnRyYWl0LFxuICAgICAgcmFyaXR5QXRsYXMsXG4gICAgICB3ZWFwb25UeXBlQXRsYXMsXG4gICAgICBtb3ZlVHlwZUF0bGFzLFxuICAgICAgZHJhZ29uZmxvd2VyQXRsYXMsXG4gICAgICBzdXBwb3J0QXRsYXMsXG4gICAgICBibGVzc2luZ0F0bGFzLFxuICAgICAgbnVtYmVyQXRsYXMsXG4gICAgICB3ZWFwb25JY29uLFxuICAgICAgYXNzaXN0SWNvbixcbiAgICAgIHNwZWNpYWxJY29uLFxuICAgICAgdGV4dEEsXG4gICAgICB0ZXh0QixcbiAgICAgIHRleHRDLFxuICAgICAgdGV4dFMsXG4gICAgICBhcmVuYUljb24sXG4gICAgICBza2lsbEFJY29uLFxuICAgICAgc2tpbGxCSWNvbixcbiAgICAgIHNraWxsQ0ljb24sXG4gICAgICBzZWFsSWNvbixcbiAgICAgIHJlc3BsZW5kZW50SWNvbixcbiAgICB9ID0gbG9hZGVycy5jdXJyZW50O1xuICAgIGNvbnN0IHsgdGl0bGUsIG5hbWUsIHdlYXBvblR5cGUsIG1vdmVUeXBlIH0gPSBoZXJvUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaGFzQmxlc3NpbmcgPSAhIWhlcm9SZWYuY3VycmVudC5ibGVzc2luZyB8fCAhIWJsZXNzaW5nUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgNTQwLCA5NjApO1xuXG4gICAgaWYgKGJhY2tncm91bmQubG9hZGVkKSB7XG4gICAgICBkcmF3QmFja2dyb3VuZCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmQuaW1hZ2UsXG4gICAgICAgIHN1cHBvcnQ6IHN1cHBvcnRSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocG9ydHJhaXQubG9hZGVkKSB7XG4gICAgICBkcmF3UG9ydHJhaXQoeyBjb250ZXh0LCBwb3J0cmFpdDogcG9ydHJhaXQuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChmb3JlZ3JvdW5kLmxvYWRlZCkge1xuICAgICAgZHJhd0ZvcmVncm91bmQoeyBjb250ZXh0LCBmb3JlZ3JvdW5kOiBmb3JlZ3JvdW5kLmltYWdlIH0pO1xuICAgIH1cbiAgICBpZiAoZm9yZWdyb3VuZDIubG9hZGVkKSB7XG4gICAgICBkcmF3Rm9yZWdyb3VuZDIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBmb3JlZ3JvdW5kMjogZm9yZWdyb3VuZDIuaW1hZ2UsXG4gICAgICAgIGRyYWdvbmZsb3dlcjogZHJhZ29uZmxvd2VyUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJhcml0eUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1Jhcml0eSh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHJhcml0eUF0bGFzOiByYXJpdHlBdGxhcy5pbWFnZSxcbiAgICAgICAgcmFyaXR5OiByYXJpdHlSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAod2VhcG9uVHlwZUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1dlYXBvblR5cGUoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICB3ZWFwb25UeXBlQXRsYXM6IHdlYXBvblR5cGVBdGxhcy5pbWFnZSxcbiAgICAgICAgd2VhcG9uVHlwZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobW92ZVR5cGVBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdNb3ZlVHlwZSh7IGNvbnRleHQsIG1vdmVUeXBlQXRsYXM6IG1vdmVUeXBlQXRsYXMuaW1hZ2UsIG1vdmVUeXBlIH0pO1xuICAgIH1cbiAgICBpZiAoZHJhZ29uZmxvd2VyQXRsYXMubG9hZGVkICYmIG51bWJlckF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0RyYWdvbmZsb3dlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGRyYWdvbmZsb3dlckF0bGFzOiBkcmFnb25mbG93ZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBtb3ZlVHlwZSxcbiAgICAgICAgZHJhZ29uZmxvd2VyOiBkcmFnb25mbG93ZXJSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3VwcG9ydEF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd1N1cHBvcnQoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdXBwb3J0QXRsYXM6IHN1cHBvcnRBdGxhcy5pbWFnZSxcbiAgICAgICAgc3VwcG9ydDogc3VwcG9ydFJlZi5jdXJyZW50LFxuICAgICAgICBoYXNCbGVzc2luZyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxlc3NpbmdBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdCbGVzc2luZyh7IGNvbnRleHQsIGJsZXNzaW5nQXRsYXM6IGJsZXNzaW5nQXRsYXMuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChudW1iZXJBdGxhcy5sb2FkZWQpIHtcbiAgICAgIGRyYXdMZXZlbCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgbHYxOiBsdjFSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgICAgZHJhd01lcmdlKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBtZXJnZTogbWVyZ2VSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgICAgZHJhd1N0YXROdW1iZXIoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIHNjb3JlOiBzY29yZVJlZi5jdXJyZW50LFxuICAgICAgICBzYnN0OiBNYXRoLm1heChza2lsbEluZm9zUmVmLmN1cnJlbnQuYnN0LCBoZXJvUmVmLmN1cnJlbnQuYnN0KSxcbiAgICAgICAgLi4uc3RhdHNJbmZvc1JlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3U3BlY2lhbE51bWJlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgYWNjZWxlcmF0ZTogc2tpbGxJbmZvc1JlZi5jdXJyZW50LmFjY2VsZXJhdGUsXG4gICAgICAgIHNwZWNpYWxDRDogc2tpbGxJbmZvc1JlZi5jdXJyZW50LnNwZWNpYWxDRCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkcmF3U2tpbGxJY29uKHtcbiAgICAgIGNvbnRleHQsXG4gICAgICB3ZWFwb25JY29uLFxuICAgICAgYXNzaXN0SWNvbixcbiAgICAgIHNwZWNpYWxJY29uLFxuICAgICAgdGV4dEEsXG4gICAgICB0ZXh0QixcbiAgICAgIHRleHRDLFxuICAgICAgdGV4dFMsXG4gICAgICBza2lsbEFJY29uLFxuICAgICAgc2tpbGxCSWNvbixcbiAgICAgIHNraWxsQ0ljb24sXG4gICAgICBzZWFsSWNvbixcbiAgICB9KTtcbiAgICBjb25zdCB0ZXh0Q29udGV4dCA9IHRleHRDYW52YXMuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRleHRDb250ZXh0LmNsZWFyUmVjdCgwLCAwLCAxMDgwLCAxOTIwKTtcbiAgICBkcmF3U3RhdFRleHQoe1xuICAgICAgY2FudmFzOiB0ZXh0Q2FudmFzLmN1cnJlbnQsXG4gICAgICBpdjogaXZSZWYuY3VycmVudCxcbiAgICAgIG1lcmdlOiBtZXJnZVJlZi5jdXJyZW50LFxuICAgIH0pO1xuICAgIGRyYXdTa2lsbFRleHQoe1xuICAgICAgY2FudmFzOiB0ZXh0Q2FudmFzLmN1cnJlbnQsXG4gICAgICByZWZpbmU6IHJlZmluZVJlZi5jdXJyZW50LFxuICAgICAgLi4uc2tpbGxJbmZvc1JlZi5jdXJyZW50Lm5hbWVzLFxuICAgIH0pO1xuICAgIGRyYXdEZXNjcmlwdGlvbih7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIHRpdGxlLFxuICAgICAgbmFtZSxcbiAgICB9KTtcbiAgICBpZiAoYXJlbmFSZWYuY3VycmVudCAmJiBhcmVuYUljb24pIHtcbiAgICAgIGRyYXdBcmVuYUljb24oe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBhcmVuYUljb246IGFyZW5hSWNvbi5pbWFnZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocmVzcGxlbmRlbnRSZWYuY3VycmVudCAmJiByZXNwbGVuZGVudEljb24pIHtcbiAgICAgIGRyYXdSZXNwbGVuZGVudEljb24oeyBjb250ZXh0LCByZXNwbGVuZGVudEljb246IHJlc3BsZW5kZW50SWNvbi5pbWFnZSB9KTtcbiAgICB9XG4gICAgY29udGV4dC5kcmF3SW1hZ2UodGV4dENhbnZhcy5jdXJyZW50LCAwLCAwLCA1NDAsIDk2MCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRleHRDYW52YXMuY3VycmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHRleHRDYW52YXMuY3VycmVudC53aWR0aCA9IDEwODA7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50LmhlaWdodCA9IDE5MjA7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGltYWdlSWRBbmRTcmMuZm9yRWFjaCgoW2ltYWdlSWQsIGltZ1NyY10pID0+IHtcbiAgICAgIGxvYWRlcnMuY3VycmVudFtpbWFnZUlkXSA9IG5ldyBJbWFnZUxvYWRlcihkcmF3KTtcbiAgICAgIGxvYWRlcnMuY3VycmVudFtpbWFnZUlkXS5sb2FkKGltZ1NyYyk7XG4gICAgfSk7XG4gIH0sIFtsb2FkZXJzLCBkcmF3XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwb3J0cmFpdCA9IHRvUmVzcGxlbmRlbnQoaGVyby5pZCwgcmVzcGxlbmRlbnQpO1xuICAgIGxvYWRlcnMuY3VycmVudC5wb3J0cmFpdC5sb2FkKGAvcG9ydHJhaXRzLyR7cG9ydHJhaXR9LnBuZ2ApO1xuICAgIGNvbnN0IGljb25zID0gZ2V0U2tpbGxJY29ucyh7XG4gICAgICBoZXJvREI6IGRiLmhlcm9EQixcbiAgICAgIHdlYXBvbkRCOiBkYi53ZWFwb25EQixcbiAgICAgIGFzc2lzdERCOiBkYi5hc3Npc3REQixcbiAgICAgIHNwZWNpYWxEQjogZGIuc3BlY2lhbERCLFxuICAgICAgc2tpbGxBREI6IGRiLnNraWxsQURCLFxuICAgICAgc2tpbGxCREI6IGRiLnNraWxsQkRCLFxuICAgICAgc2tpbGxDREI6IGRiLnNraWxsQ0RCLFxuICAgICAgc2VhbERCOiBkYi5zZWFsREIsXG4gICAgICBza2lsbHMsXG4gICAgICBoZXJvSWQ6IGhlcm8uaWQsXG4gICAgICByZWZpbmUsXG4gICAgfSk7XG5cbiAgICBkZWZhdWx0U2tpbGxJY29ucy5mb3JFYWNoKCh7IHNraWxsTmFtZSwgZW1wdHkgfSkgPT4ge1xuICAgICAgbG9hZGVycy5jdXJyZW50W2Ake3NraWxsTmFtZX1JY29uYF0ubG9hZChpY29uc1tza2lsbE5hbWVdIHx8IGVtcHR5KTtcbiAgICB9KTtcbiAgICBjb25zdCBoYXNCbGVzc2luZyA9XG4gICAgICAoaGVyby5ibGVzc2luZyAhPT0gJy0nICYmICEhaGVyby5ibGVzc2luZykgfHwgISFibGVzc2luZztcbiAgICBsb2FkZXJzLmN1cnJlbnQuYmxlc3NpbmdBdGxhcy5sb2FkKFxuICAgICAgaGFzQmxlc3NpbmcgPyBgYXNzZXRzL2JsZXNzaW5nLSR7aGVyby5ibGVzc2luZyB8fCBibGVzc2luZ30ucG5nYCA6ICcnXG4gICAgKTtcbiAgfSwgW1xuICAgIGhlcm8sXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgc2tpbGxzLFxuICAgIHJlZmluZSxcbiAgICBibGVzc2luZyxcbiAgICBzdGF0c0luZm9zLFxuICAgIGRiLmhlcm9EQixcbiAgICBkYi53ZWFwb25EQixcbiAgICBkYi5hc3Npc3REQixcbiAgICBkYi5zcGVjaWFsREIsXG4gICAgZGIuc2tpbGxBREIsXG4gICAgZGIuc2tpbGxCREIsXG4gICAgZGIuc2tpbGxDREIsXG4gICAgZGIuc2VhbERCLFxuICBdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhlcm9SZWYuY3VycmVudCA9IGhlcm87XG4gICAgcmFyaXR5UmVmLmN1cnJlbnQgPSByYXJpdHk7XG4gICAgaXZSZWYuY3VycmVudCA9IGl2O1xuICAgIG1lcmdlUmVmLmN1cnJlbnQgPSBtZXJnZTtcbiAgICBkcmFnb25mbG93ZXJSZWYuY3VycmVudCA9IGRyYWdvbmZsb3dlcjtcbiAgICBibGVzc2luZ1JlZi5jdXJyZW50ID0gYmxlc3Npbmc7XG4gICAgc3VwcG9ydFJlZi5jdXJyZW50ID0gc3VwcG9ydDtcbiAgICBhcmVuYVJlZi5jdXJyZW50ID0gYXJlbmE7XG4gICAgcmVzcGxlbmRlbnRSZWYuY3VycmVudCA9IHJlc3BsZW5kZW50O1xuICAgIHJlZmluZVJlZi5jdXJyZW50ID0gcmVmaW5lO1xuICAgIGx2MVJlZi5jdXJyZW50ID0gbHYxO1xuICAgIHNjb3JlUmVmLmN1cnJlbnQgPSBzY29yZTtcbiAgICBjb25zb2xlLmxvZyhza2lsbEluZm9zKTtcbiAgICBza2lsbEluZm9zUmVmLmN1cnJlbnQgPSBza2lsbEluZm9zO1xuICAgIHN0YXRzSW5mb3NSZWYuY3VycmVudCA9IHN0YXRzSW5mb3M7XG4gICAgZHJhdygpO1xuICB9LCBbXG4gICAgaGVybyxcbiAgICByYXJpdHksXG4gICAgaXYsXG4gICAgbWVyZ2UsXG4gICAgZHJhZ29uZmxvd2VyLFxuICAgIGJsZXNzaW5nLFxuICAgIHN1cHBvcnQsXG4gICAgYXJlbmEsXG4gICAgcmVzcGxlbmRlbnQsXG4gICAgcmVmaW5lLFxuICAgIGx2MSxcbiAgICBzY29yZSxcbiAgICBza2lsbEluZm9zLFxuICAgIHN0YXRzSW5mb3MsXG4gICAgZHJhdyxcbiAgXSk7XG5cbiAgY29uc3QgdHJpZ2dlckRvd25sb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFVUkwgPSBjYW52YXNSZWYuY3VycmVudC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbGluay5ocmVmID0gZGF0YVVSTDtcbiAgICBsaW5rLmRvd25sb2FkID0gYCR7aGVybz8ubmFtZX0tJHtoZXJvPy50aXRsZX0ucG5nYDtcbiAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgbGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7XG4gIH0sIFtoZXJvPy5uYW1lLCBoZXJvPy50aXRsZV0pO1xuXG4gIHJldHVybiB7XG4gICAgY2FudmFzUmVmLFxuICAgIHRyaWdnZXJEb3dubG9hZCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlSG9va3M7XG4iXSwic291cmNlUm9vdCI6IiJ9