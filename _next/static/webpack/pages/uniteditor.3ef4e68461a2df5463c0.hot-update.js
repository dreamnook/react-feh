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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVW5pdFZpZXdlci9ob29rcy50c3giXSwibmFtZXMiOlsiaW1hZ2VJZEFuZFNyYyIsImRlZmF1bHRTa2lsbEljb25zIiwic2tpbGxOYW1lIiwiZW1wdHkiLCJ1c2VIb29rcyIsImhlcm9JZCIsInJhcml0eSIsIml2IiwibWVyZ2UiLCJkcmFnb25mbG93ZXIiLCJibGVzc2luZyIsInN1cHBvcnQiLCJhcmVuYSIsInJlc3BsZW5kZW50Iiwid2VhcG9uIiwicmVmaW5lIiwiYXNzaXN0Iiwic3BlY2lhbCIsInNraWxsQSIsInNraWxsQiIsInNraWxsQyIsInNlYWwiLCJsdjEiLCJkYiIsInVzZUZlaERCIiwiY2FudmFzUmVmIiwidXNlUmVmIiwidGV4dENhbnZhcyIsImhlcm9SZWYiLCJza2lsbEluZm9zUmVmIiwic3RhdHNJbmZvc1JlZiIsInJhcml0eVJlZiIsIml2UmVmIiwibWVyZ2VSZWYiLCJkcmFnb25mbG93ZXJSZWYiLCJibGVzc2luZ1JlZiIsInN1cHBvcnRSZWYiLCJhcmVuYVJlZiIsInJlc3BsZW5kZW50UmVmIiwicmVmaW5lUmVmIiwibHYxUmVmIiwic2NvcmVSZWYiLCJoZXJvIiwidXNlTWVtbyIsImdldEhlcm8iLCJoZXJvREIiLCJza2lsbHMiLCJzdGF0cyIsInNraWxsSW5mb3MiLCJnZXRTa2lsbEluZm9zIiwid2VhcG9uREIiLCJhc3Npc3REQiIsInNwZWNpYWxEQiIsInNraWxsQURCIiwic2tpbGxCREIiLCJza2lsbENEQiIsInNlYWxEQiIsInN0YXRzSW5mb3MiLCJnZXRTdGF0cyIsInNjb3JlIiwiYXJlbmFTY29yZSIsImJzdCIsIk1hdGgiLCJtYXgiLCJzcHQiLCJsb2FkZXJzIiwiZHJhdyIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImJhY2tncm91bmQiLCJmb3JlZ3JvdW5kIiwiZm9yZWdyb3VuZDIiLCJwb3J0cmFpdCIsInJhcml0eUF0bGFzIiwid2VhcG9uVHlwZUF0bGFzIiwibW92ZVR5cGVBdGxhcyIsImRyYWdvbmZsb3dlckF0bGFzIiwic3VwcG9ydEF0bGFzIiwiYmxlc3NpbmdBdGxhcyIsIm51bWJlckF0bGFzIiwid2VhcG9uSWNvbiIsImFzc2lzdEljb24iLCJzcGVjaWFsSWNvbiIsInRleHRBIiwidGV4dEIiLCJ0ZXh0QyIsInRleHRTIiwiYXJlbmFJY29uIiwic2tpbGxBSWNvbiIsInNraWxsQkljb24iLCJza2lsbENJY29uIiwic2VhbEljb24iLCJyZXNwbGVuZGVudEljb24iLCJ0aXRsZSIsIm5hbWUiLCJ3ZWFwb25UeXBlIiwibW92ZVR5cGUiLCJoYXNCbGVzc2luZyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwibG9hZGVkIiwiZHJhd0JhY2tncm91bmQiLCJpbWFnZSIsImRyYXdQb3J0cmFpdCIsImRyYXdGb3JlZ3JvdW5kIiwiZHJhd0ZvcmVncm91bmQyIiwiZHJhd1Jhcml0eSIsImRyYXdXZWFwb25UeXBlIiwiZHJhd01vdmVUeXBlIiwiZHJhd0RyYWdvbmZsb3dlciIsImRyYXdTdXBwb3J0IiwiZHJhd0JsZXNzaW5nIiwiZHJhd0xldmVsIiwiZHJhd01lcmdlIiwiZHJhd1N0YXROdW1iZXIiLCJzYnN0IiwiZHJhd1NwZWNpYWxOdW1iZXIiLCJhY2NlbGVyYXRlIiwic3BlY2lhbENEIiwiZHJhd1NraWxsSWNvbiIsInRleHRDb250ZXh0IiwiZHJhd1N0YXRUZXh0IiwiY2FudmFzIiwiZHJhd1NraWxsVGV4dCIsIm5hbWVzIiwiZHJhd0Rlc2NyaXB0aW9uIiwiZHJhd0FyZW5hSWNvbiIsImRyYXdSZXNwbGVuZGVudEljb24iLCJkcmF3SW1hZ2UiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImZvckVhY2giLCJpbWFnZUlkIiwiaW1nU3JjIiwiSW1hZ2VMb2FkZXIiLCJsb2FkIiwidG9SZXNwbGVuZGVudCIsImlkIiwiaWNvbnMiLCJnZXRTa2lsbEljb25zIiwidHJpZ2dlckRvd25sb2FkIiwiZGF0YVVSTCIsInRvRGF0YVVSTCIsImxpbmsiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQURvQixFQUVwQixDQUFDLFlBQUQsRUFBZSx3QkFBZixDQUZvQixFQUdwQixDQUFDLGFBQUQsRUFBZ0IseUJBQWhCLENBSG9CLEVBSXBCLENBQUMsVUFBRCxFQUFhLEVBQWIsQ0FKb0IsRUFLcEIsQ0FBQyxhQUFELEVBQWdCLG9CQUFoQixDQUxvQixFQU1wQixDQUFDLGlCQUFELEVBQW9CLHlCQUFwQixDQU5vQixFQU9wQixDQUFDLGVBQUQsRUFBa0IsdUJBQWxCLENBUG9CLEVBUXBCLENBQUMsbUJBQUQsRUFBc0IsMEJBQXRCLENBUm9CLEVBU3BCLENBQUMsY0FBRCxFQUFpQixxQkFBakIsQ0FUb0IsRUFVcEIsQ0FBQyxlQUFELEVBQWtCLEVBQWxCLENBVm9CLEVBV3BCLENBQUMsYUFBRCxFQUFnQixvQkFBaEIsQ0FYb0IsRUFZcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fab0IsRUFhcEIsQ0FBQyxZQUFELEVBQWUsb0JBQWYsQ0Fib0IsRUFjcEIsQ0FBQyxhQUFELEVBQWdCLG9CQUFoQixDQWRvQixFQWVwQixDQUFDLE9BQUQsRUFBVSxxQkFBVixDQWZvQixFQWdCcEIsQ0FBQyxPQUFELEVBQVUscUJBQVYsQ0FoQm9CLEVBaUJwQixDQUFDLE9BQUQsRUFB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QUFULENBQWNHLFdBQWQsQ0FBMEJQLElBQTFCO0FBQ0QsR0FUa0MsRUFTaEMsQ0FBQ3pHLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFb0QsSUFBUCxFQUFhcEQsSUFBYixhQUFhQSxJQUFiLHVCQUFhQSxJQUFJLENBQUVtRCxLQUFuQixDQVRnQyxDQUFuQztBQVdBLFNBQU87QUFDTHBFLGFBQVMsRUFBVEEsU0FESztBQUVMdUgsbUJBQWUsRUFBZkE7QUFGSyxHQUFQO0FBSUQ7O0dBL1lRNUksUTtVQXNCSW9CLHdEOzs7QUEyWEVwQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91bml0ZWRpdG9yLjNlZjRlNjg0NjFhMmRmNTQ2M2MwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUSGVybywgVFNraWxsSWRzIH0gZnJvbSAnQC9hcHAvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0U2tpbGxJY29ucywgZ2V0U2tpbGxJbmZvcyB9IGZyb20gJ0AvYXBwL3V0aWxzL2RhdGEtdXRpbHMnO1xuaW1wb3J0IHsgZ2V0U3RhdHMgfSBmcm9tICdAL2FwcC91dGlscy9zdGF0cyc7XG5pbXBvcnQgYXJlbmFTY29yZSBmcm9tICdAL2FwcC91dGlscy9hcmVuYXNjb3JlJztcbmltcG9ydCB7IHRvUmVzcGxlbmRlbnQgfSBmcm9tICdAL2FwcC91dGlscy9yZXNwbGVuZGVudCc7XG5pbXBvcnQgeyBnZXRIZXJvIH0gZnJvbSAnQC9hcHAvdXRpbHMvaGVyb2VzJztcbmltcG9ydCB7IHVzZUZlaERCIH0gZnJvbSAnQC9hcHAvcGFnZS9GRUhEQic7XG5pbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJy4vSW1hZ2VMb2FkZXInO1xuaW1wb3J0IGRyYXdCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZC9kcmF3JztcbmltcG9ydCBkcmF3UG9ydHJhaXQgZnJvbSAnLi9Qb3J0cmFpdC9kcmF3JztcbmltcG9ydCBkcmF3Rm9yZWdyb3VuZCBmcm9tICcuL0ZvcmVncm91bmQvZHJhdyc7XG5pbXBvcnQgZHJhd0ZvcmVncm91bmQyIGZyb20gJy4vRm9yZWdyb3VuZDIvZHJhdyc7XG5pbXBvcnQgZHJhd1Jhcml0eSBmcm9tICcuL1Jhcml0eS9kcmF3JztcbmltcG9ydCBkcmF3V2VhcG9uVHlwZSBmcm9tICcuL1dlYXBvblR5cGUvZHJhdyc7XG5pbXBvcnQgZHJhd01vdmVUeXBlIGZyb20gJy4vTW92ZVR5cGUvZHJhdyc7XG5pbXBvcnQgZHJhd0RyYWdvbmZsb3dlciBmcm9tICcuL0RyYWdvbkZsb3dlci9kcmF3JztcbmltcG9ydCBkcmF3U3VwcG9ydCBmcm9tICcuL1N1cHBvcnQvZHJhdyc7XG5pbXBvcnQgZHJhd0JsZXNzaW5nIGZyb20gJy4vQmxlc3NpbmcvZHJhdyc7XG5pbXBvcnQgZHJhd1NraWxsSWNvbiBmcm9tICcuL1NraWxsSWNvbi9kcmF3JztcbmltcG9ydCBkcmF3TGV2ZWwgZnJvbSAnLi9MZXZlbC9kcmF3JztcbmltcG9ydCBkcmF3TWVyZ2UgZnJvbSAnLi9NZXJnZS9kcmF3JztcbmltcG9ydCBkcmF3U3RhdE51bWJlciBmcm9tICcuL1N0YXROdW1iZXIvZHJhdyc7XG5pbXBvcnQgZHJhd1NwZWNpYWxOdW1iZXIgZnJvbSAnLi9TcGVjaWFsTnVtYmVyL2RyYXcnO1xuaW1wb3J0IGRyYXdTdGF0VGV4dCBmcm9tICcuL1N0YXRUZXh0L2RyYXcnO1xuaW1wb3J0IGRyYXdTa2lsbFRleHQgZnJvbSAnLi9Ta2lsbFRleHQvZHJhdyc7XG5pbXBvcnQgZHJhd0Rlc2NyaXB0aW9uIGZyb20gJy4vRGVzY3JpcHRpb25UZXh0L2RyYXcnO1xuaW1wb3J0IGRyYXdBcmVuYUljb24gZnJvbSAnLi9BcmVuYUljb24vZHJhdyc7XG5pbXBvcnQgZHJhd1Jlc3BsZW5kZW50SWNvbiBmcm9tICcuL1Jlc3BsZW5kZW50SWNvbi9kcmF3JztcblxuY29uc3QgaW1hZ2VJZEFuZFNyYyA9IFtcbiAgWydiYWNrZ3JvdW5kJywgJy9hc3NldHMvYmFja2dyb3VuZC5qcGcnXSxcbiAgWydmb3JlZ3JvdW5kJywgJy9hc3NldHMvZm9yZWdyb3VuZC5wbmcnXSxcbiAgWydmb3JlZ3JvdW5kMicsICcvYXNzZXRzL2ZvcmVncm91bmQyLnBuZyddLFxuICBbJ3BvcnRyYWl0JywgJyddLFxuICBbJ3Jhcml0eUF0bGFzJywgJy9hc3NldHMvcmFyaXR5LnBuZyddLFxuICBbJ3dlYXBvblR5cGVBdGxhcycsICcvYXNzZXRzL3dlYXBvbi10eXBlLnBuZyddLFxuICBbJ21vdmVUeXBlQXRsYXMnLCAnL2Fzc2V0cy9tb3ZlLXR5cGUucG5nJ10sXG4gIFsnZHJhZ29uZmxvd2VyQXRsYXMnLCAnL2Fzc2V0cy9kcmFnb25mbG93ZXIucG5nJ10sXG4gIFsnc3VwcG9ydEF0bGFzJywgJy9hc3NldHMvc3VwcG9ydC5wbmcnXSxcbiAgWydibGVzc2luZ0F0bGFzJywgJyddLFxuICBbJ251bWJlckF0bGFzJywgJy9hc3NldHMvbnVtYmVyLnBuZyddLFxuICBbJ3dlYXBvbkljb24nLCAnL3NraWxscy93ZWFwb24ucG5nJ10sXG4gIFsnYXNzaXN0SWNvbicsICcvc2tpbGxzL2Fzc2lzdC5wbmcnXSxcbiAgWydzcGVjaWFsSWNvbicsICdza2lsbHMvc3BlY2lhbC5wbmcnXSxcbiAgWyd0ZXh0QScsICcvYXNzZXRzL3NraWxsLWEucG5nJ10sXG4gIFsndGV4dEInLCAnL2Fzc2V0cy9za2lsbC1iLnBuZyddLFxuICBbJ3RleHRDJywgJy9hc3NldHMvc2tpbGwtYy5wbmcnXSxcbiAgWyd0ZXh0UycsICcvYXNzZXRzL3NraWxsLXMucG5nJ10sXG4gIFsnYXJlbmFJY29uJywgJy9hc3NldHMvQXJlbmFfQ3Jvd24ucG5nJ10sXG4gIFsnc2tpbGxBSWNvbicsICcnXSxcbiAgWydza2lsbEJJY29uJywgJyddLFxuICBbJ3NraWxsQ0ljb24nLCAnJ10sXG4gIFsnc2VhbEljb24nLCAnJ10sXG4gIFsncmVzcGxlbmRlbnRJY29uJywgJy9hc3NldHMvZ29kLXdlYXItbC5wbmcnXSxcbl07XG5cbmNvbnN0IGRlZmF1bHRTa2lsbEljb25zID0gW1xuICB7XG4gICAgc2tpbGxOYW1lOiAnd2VhcG9uJyxcbiAgICBlbXB0eTogJ3NraWxscy93ZWFwb24ucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NraWxsQScsXG4gICAgZW1wdHk6ICdza2lsbHMvZW1wdHkucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NraWxsQicsXG4gICAgZW1wdHk6ICdza2lsbHMvZW1wdHkucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NraWxsQycsXG4gICAgZW1wdHk6ICdza2lsbHMvZW1wdHkucG5nJyxcbiAgfSxcbiAge1xuICAgIHNraWxsTmFtZTogJ3NlYWwnLFxuICAgIGVtcHR5OiAnc2tpbGxzL3NlYWwtZW1wdHkucG5nJyxcbiAgfSxcbl07XG5cbmV4cG9ydCB0eXBlIFRIb29rUHJvcHMgPSB7XG4gIGhlcm9JZDogc3RyaW5nO1xuICByYXJpdHk6IDUgfCA0O1xuICBpdjogc3RyaW5nO1xuICBtZXJnZTogbnVtYmVyO1xuICBkcmFnb25mbG93ZXI6IG51bWJlcjtcbiAgYmxlc3Npbmc6IHN0cmluZztcbiAgc3VwcG9ydDogYm9vbGVhbjtcbiAgYXJlbmE6IGJvb2xlYW47XG4gIHJlc3BsZW5kZW50OiBib29sZWFuO1xuICAvKiogc2tpbGxzICovXG4gIHdlYXBvbjogc3RyaW5nO1xuICByZWZpbmU6IHN0cmluZztcbiAgYXNzaXN0OiBzdHJpbmc7XG4gIHNwZWNpYWw6IHN0cmluZztcbiAgc2tpbGxBOiBzdHJpbmc7XG4gIHNraWxsQjogc3RyaW5nO1xuICBza2lsbEM6IHN0cmluZztcbiAgc2VhbDogc3RyaW5nO1xuICAvKiogZWRpdG9yICovXG4gIGx2MTogYm9vbGVhbjtcbn07XG5cbmZ1bmN0aW9uIHVzZUhvb2tzKHtcbiAgaGVyb0lkLFxuICByYXJpdHksXG4gIGl2LFxuICBtZXJnZSxcbiAgZHJhZ29uZmxvd2VyLFxuICBibGVzc2luZyxcbiAgc3VwcG9ydCxcbiAgYXJlbmEsXG4gIHJlc3BsZW5kZW50LFxuICAvKiogc2tpbGxzICovXG4gIHdlYXBvbixcbiAgcmVmaW5lLFxuICBhc3Npc3QsXG4gIHNwZWNpYWwsXG4gIHNraWxsQSxcbiAgc2tpbGxCLFxuICBza2lsbEMsXG4gIHNlYWwsXG4gIC8qKiBlZGl0b3IgKi9cbiAgbHYxLFxufTogVEhvb2tQcm9wcykge1xuICBjb25zdCBkYiA9IHVzZUZlaERCKCk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgdGV4dENhbnZhcyA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGhlcm9SZWYgPSB1c2VSZWY8VEhlcm8+KCk7XG4gIGNvbnN0IHNraWxsSW5mb3NSZWYgPSB1c2VSZWY8e1xuICAgIG5hbWVzOiBUU2tpbGxJZHM7XG4gICAgc3RhdHM6IHtcbiAgICAgIGhwOiBudW1iZXI7XG4gICAgICBhdGs6IG51bWJlcjtcbiAgICAgIHNwZDogbnVtYmVyO1xuICAgICAgZGVmOiBudW1iZXI7XG4gICAgICByZXM6IG51bWJlcjtcbiAgICB9O1xuICAgIGFjY2VsZXJhdGU6IG51bWJlcjtcbiAgICBzcGVjaWFsQ0Q6IG51bWJlcjtcbiAgICBzcHQ6IG51bWJlcjtcbiAgICBic3Q6IG51bWJlcjtcbiAgfT4oKTtcbiAgY29uc3Qgc3RhdHNJbmZvc1JlZiA9IHVzZVJlZjx7XG4gICAgc3RhdHM6IHsgW3N0YXRLZXk6IHN0cmluZ106IG51bWJlciB9O1xuICAgIGJzdDogbnVtYmVyO1xuICB9PigpO1xuICBjb25zdCByYXJpdHlSZWYgPSB1c2VSZWY8bnVtYmVyPigpO1xuICBjb25zdCBpdlJlZiA9IHVzZVJlZjxzdHJpbmc+KCk7XG4gIGNvbnN0IG1lcmdlUmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgZHJhZ29uZmxvd2VyUmVmID0gdXNlUmVmPG51bWJlcj4oKTtcbiAgY29uc3QgYmxlc3NpbmdSZWYgPSB1c2VSZWY8c3RyaW5nPigpO1xuICBjb25zdCBzdXBwb3J0UmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IGFyZW5hUmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHJlc3BsZW5kZW50UmVmID0gdXNlUmVmPGJvb2xlYW4+KCk7XG4gIGNvbnN0IHJlZmluZVJlZiA9IHVzZVJlZjxzdHJpbmc+KCk7XG4gIGNvbnN0IGx2MVJlZiA9IHVzZVJlZjxib29sZWFuPigpO1xuICBjb25zdCBzY29yZVJlZiA9IHVzZVJlZjxudW1iZXI+KCk7XG5cbiAgY29uc3QgaGVybyA9IHVzZU1lbW8oKCkgPT4gZ2V0SGVybyhkYi5oZXJvREIsIGhlcm9JZCksIFtkYi5oZXJvREIsIGhlcm9JZF0pO1xuXG4gIGNvbnN0IHNraWxscyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHsgd2VhcG9uLCBhc3Npc3QsIHNwZWNpYWwsIHNraWxsQSwgc2tpbGxCLCBza2lsbEMsIHNlYWwgfSksXG4gICAgW3dlYXBvbiwgYXNzaXN0LCBzcGVjaWFsLCBza2lsbEEsIHNraWxsQiwgc2tpbGxDLCBzZWFsXVxuICApO1xuICBjb25zdCBzdGF0cyA9IGhlcm8uc3RhdHM7XG4gIGNvbnN0IHNraWxsSW5mb3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBnZXRTa2lsbEluZm9zKHtcbiAgICAgICAgaGVyb0RCOiBkYi5oZXJvREIsXG4gICAgICAgIHdlYXBvbkRCOiBkYi53ZWFwb25EQixcbiAgICAgICAgYXNzaXN0REI6IGRiLmFzc2lzdERCLFxuICAgICAgICBzcGVjaWFsREI6IGRiLnNwZWNpYWxEQixcbiAgICAgICAgc2tpbGxBREI6IGRiLnNraWxsQURCLFxuICAgICAgICBza2lsbEJEQjogZGIuc2tpbGxCREIsXG4gICAgICAgIHNraWxsQ0RCOiBkYi5za2lsbENEQixcbiAgICAgICAgc2VhbERCOiBkYi5zZWFsREIsXG4gICAgICAgIHNraWxscyxcbiAgICAgICAgaGVyb0lkLFxuICAgICAgICByZWZpbmUsXG4gICAgICAgIHJhcml0eSxcbiAgICAgIH0pLFxuICAgIFtcbiAgICAgIHNraWxscyxcbiAgICAgIGhlcm9JZCxcbiAgICAgIHJlZmluZSxcbiAgICAgIHJhcml0eSxcbiAgICAgIGRiLmhlcm9EQixcbiAgICAgIGRiLndlYXBvbkRCLFxuICAgICAgZGIuYXNzaXN0REIsXG4gICAgICBkYi5zcGVjaWFsREIsXG4gICAgICBkYi5za2lsbEFEQixcbiAgICAgIGRiLnNraWxsQkRCLFxuICAgICAgZGIuc2tpbGxDREIsXG4gICAgICBkYi5zZWFsREIsXG4gICAgXVxuICApO1xuXG4gIGNvbnN0IHN0YXRzSW5mb3MgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBnZXRTdGF0cyhcbiAgICAgICAgcmFyaXR5LFxuICAgICAgICBzdGF0cyxcbiAgICAgICAgaXYsXG4gICAgICAgIG1lcmdlLFxuICAgICAgICBzdXBwb3J0LFxuICAgICAgICBza2lsbEluZm9zLnN0YXRzLFxuICAgICAgICBsdjEsXG4gICAgICAgIGFyZW5hLFxuICAgICAgICBkcmFnb25mbG93ZXIsXG4gICAgICAgIHJlc3BsZW5kZW50XG4gICAgICApLFxuICAgIFtcbiAgICAgIHJhcml0eSxcbiAgICAgIHN0YXRzLFxuICAgICAgaXYsXG4gICAgICBtZXJnZSxcbiAgICAgIHN1cHBvcnQsXG4gICAgICBza2lsbEluZm9zLFxuICAgICAgbHYxLFxuICAgICAgYXJlbmEsXG4gICAgICBkcmFnb25mbG93ZXIsXG4gICAgICByZXNwbGVuZGVudCxcbiAgICBdXG4gICk7XG4gIGNvbnN0IHNjb3JlID0gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgYXJlbmFTY29yZSh7XG4gICAgICAgIHJhcml0eSxcbiAgICAgICAgbWVyZ2UsXG4gICAgICAgIGJzdDogTWF0aC5tYXgoc3RhdHNJbmZvcy5ic3QsIHNraWxsSW5mb3MuYnN0LCBoZXJvLmJzdCB8fCAwKSxcbiAgICAgICAgc3B0OiBza2lsbEluZm9zLnNwdCxcbiAgICAgIH0pLFxuICAgIFtyYXJpdHksIG1lcmdlLCBzdGF0c0luZm9zLmJzdCwgc2tpbGxJbmZvcy5ic3QsIHNraWxsSW5mb3Muc3B0LCBoZXJvXVxuICApO1xuXG4gIGNvbnN0IGxvYWRlcnMgPSB1c2VSZWY8eyBbaW1hZ2VJZDogc3RyaW5nXTogSW1hZ2VMb2FkZXIgfT4oe30pO1xuXG4gIGNvbnN0IGRyYXcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFjYW52YXNSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7XG4gICAgICBiYWNrZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmQyLFxuICAgICAgcG9ydHJhaXQsXG4gICAgICByYXJpdHlBdGxhcyxcbiAgICAgIHdlYXBvblR5cGVBdGxhcyxcbiAgICAgIG1vdmVUeXBlQXRsYXMsXG4gICAgICBkcmFnb25mbG93ZXJBdGxhcyxcbiAgICAgIHN1cHBvcnRBdGxhcyxcbiAgICAgIGJsZXNzaW5nQXRsYXMsXG4gICAgICBudW1iZXJBdGxhcyxcbiAgICAgIHdlYXBvbkljb24sXG4gICAgICBhc3Npc3RJY29uLFxuICAgICAgc3BlY2lhbEljb24sXG4gICAgICB0ZXh0QSxcbiAgICAgIHRleHRCLFxuICAgICAgdGV4dEMsXG4gICAgICB0ZXh0UyxcbiAgICAgIGFyZW5hSWNvbixcbiAgICAgIHNraWxsQUljb24sXG4gICAgICBza2lsbEJJY29uLFxuICAgICAgc2tpbGxDSWNvbixcbiAgICAgIHNlYWxJY29uLFxuICAgICAgcmVzcGxlbmRlbnRJY29uLFxuICAgIH0gPSBsb2FkZXJzLmN1cnJlbnQ7XG4gICAgY29uc3QgeyB0aXRsZSwgbmFtZSwgd2VhcG9uVHlwZSwgbW92ZVR5cGUgfSA9IGhlcm9SZWYuY3VycmVudDtcbiAgICBjb25zdCBoYXNCbGVzc2luZyA9ICEhaGVyb1JlZi5jdXJyZW50LmJsZXNzaW5nIHx8ICEhYmxlc3NpbmdSZWYuY3VycmVudDtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCA1NDAsIDk2MCk7XG5cbiAgICBpZiAoYmFja2dyb3VuZC5sb2FkZWQpIHtcbiAgICAgIGRyYXdCYWNrZ3JvdW5kKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgYmFja2dyb3VuZDogYmFja2dyb3VuZC5pbWFnZSxcbiAgICAgICAgc3VwcG9ydDogc3VwcG9ydFJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwb3J0cmFpdC5sb2FkZWQpIHtcbiAgICAgIGRyYXdQb3J0cmFpdCh7IGNvbnRleHQsIHBvcnRyYWl0OiBwb3J0cmFpdC5pbWFnZSB9KTtcbiAgICB9XG4gICAgaWYgKGZvcmVncm91bmQubG9hZGVkKSB7XG4gICAgICBkcmF3Rm9yZWdyb3VuZCh7IGNvbnRleHQsIGZvcmVncm91bmQ6IGZvcmVncm91bmQuaW1hZ2UgfSk7XG4gICAgfVxuICAgIGlmIChmb3JlZ3JvdW5kMi5sb2FkZWQpIHtcbiAgICAgIGRyYXdGb3JlZ3JvdW5kMih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGZvcmVncm91bmQyOiBmb3JlZ3JvdW5kMi5pbWFnZSxcbiAgICAgICAgZHJhZ29uZmxvd2VyOiBkcmFnb25mbG93ZXJSZWYuY3VycmVudCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocmFyaXR5QXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3UmFyaXR5KHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgcmFyaXR5QXRsYXM6IHJhcml0eUF0bGFzLmltYWdlLFxuICAgICAgICByYXJpdHk6IHJhcml0eVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh3ZWFwb25UeXBlQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3V2VhcG9uVHlwZSh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHdlYXBvblR5cGVBdGxhczogd2VhcG9uVHlwZUF0bGFzLmltYWdlLFxuICAgICAgICB3ZWFwb25UeXBlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtb3ZlVHlwZUF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd01vdmVUeXBlKHsgY29udGV4dCwgbW92ZVR5cGVBdGxhczogbW92ZVR5cGVBdGxhcy5pbWFnZSwgbW92ZVR5cGUgfSk7XG4gICAgfVxuICAgIGlmIChkcmFnb25mbG93ZXJBdGxhcy5sb2FkZWQgJiYgbnVtYmVyQXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3RHJhZ29uZmxvd2VyKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgZHJhZ29uZmxvd2VyQXRsYXM6IGRyYWdvbmZsb3dlckF0bGFzLmltYWdlLFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIG1vdmVUeXBlLFxuICAgICAgICBkcmFnb25mbG93ZXI6IGRyYWdvbmZsb3dlclJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzdXBwb3J0QXRsYXMubG9hZGVkKSB7XG4gICAgICBkcmF3U3VwcG9ydCh7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN1cHBvcnRBdGxhczogc3VwcG9ydEF0bGFzLmltYWdlLFxuICAgICAgICBzdXBwb3J0OiBzdXBwb3J0UmVmLmN1cnJlbnQsXG4gICAgICAgIGhhc0JsZXNzaW5nLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChibGVzc2luZ0F0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0JsZXNzaW5nKHsgY29udGV4dCwgYmxlc3NpbmdBdGxhczogYmxlc3NpbmdBdGxhcy5pbWFnZSB9KTtcbiAgICB9XG4gICAgaWYgKG51bWJlckF0bGFzLmxvYWRlZCkge1xuICAgICAgZHJhd0xldmVsKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBsdjE6IGx2MVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3TWVyZ2Uoe1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBudW1iZXJBdGxhczogbnVtYmVyQXRsYXMuaW1hZ2UsXG4gICAgICAgIG1lcmdlOiBtZXJnZVJlZi5jdXJyZW50LFxuICAgICAgfSk7XG4gICAgICBkcmF3U3RhdE51bWJlcih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIG51bWJlckF0bGFzOiBudW1iZXJBdGxhcy5pbWFnZSxcbiAgICAgICAgc2NvcmU6IHNjb3JlUmVmLmN1cnJlbnQsXG4gICAgICAgIHNic3Q6IE1hdGgubWF4KHNraWxsSW5mb3NSZWYuY3VycmVudC5ic3QsIGhlcm9SZWYuY3VycmVudC5ic3QpLFxuICAgICAgICAuLi5zdGF0c0luZm9zUmVmLmN1cnJlbnQsXG4gICAgICB9KTtcbiAgICAgIGRyYXdTcGVjaWFsTnVtYmVyKHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgbnVtYmVyQXRsYXM6IG51bWJlckF0bGFzLmltYWdlLFxuICAgICAgICBhY2NlbGVyYXRlOiBza2lsbEluZm9zUmVmLmN1cnJlbnQuYWNjZWxlcmF0ZSxcbiAgICAgICAgc3BlY2lhbENEOiBza2lsbEluZm9zUmVmLmN1cnJlbnQuc3BlY2lhbENELFxuICAgICAgfSk7XG4gICAgfVxuICAgIGRyYXdTa2lsbEljb24oe1xuICAgICAgY29udGV4dCxcbiAgICAgIHdlYXBvbkljb24sXG4gICAgICBhc3Npc3RJY29uLFxuICAgICAgc3BlY2lhbEljb24sXG4gICAgICB0ZXh0QSxcbiAgICAgIHRleHRCLFxuICAgICAgdGV4dEMsXG4gICAgICB0ZXh0UyxcbiAgICAgIHNraWxsQUljb24sXG4gICAgICBza2lsbEJJY29uLFxuICAgICAgc2tpbGxDSWNvbixcbiAgICAgIHNlYWxJY29uLFxuICAgIH0pO1xuICAgIGNvbnN0IHRleHRDb250ZXh0ID0gdGV4dENhbnZhcy5jdXJyZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgdGV4dENvbnRleHQuY2xlYXJSZWN0KDAsIDAsIDEwODAsIDE5MjApO1xuICAgIGRyYXdTdGF0VGV4dCh7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIGl2OiBpdlJlZi5jdXJyZW50LFxuICAgICAgbWVyZ2U6IG1lcmdlUmVmLmN1cnJlbnQsXG4gICAgfSk7XG4gICAgZHJhd1NraWxsVGV4dCh7XG4gICAgICBjYW52YXM6IHRleHRDYW52YXMuY3VycmVudCxcbiAgICAgIHJlZmluZTogcmVmaW5lUmVmLmN1cnJlbnQsXG4gICAgICAuLi5za2lsbEluZm9zUmVmLmN1cnJlbnQubmFtZXMsXG4gICAgfSk7XG4gICAgZHJhd0Rlc2NyaXB0aW9uKHtcbiAgICAgIGNhbnZhczogdGV4dENhbnZhcy5jdXJyZW50LFxuICAgICAgdGl0bGUsXG4gICAgICBuYW1lLFxuICAgIH0pO1xuICAgIGlmIChhcmVuYVJlZi5jdXJyZW50ICYmIGFyZW5hSWNvbikge1xuICAgICAgZHJhd0FyZW5hSWNvbih7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGFyZW5hSWNvbjogYXJlbmFJY29uLmltYWdlLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChyZXNwbGVuZGVudFJlZi5jdXJyZW50ICYmIHJlc3BsZW5kZW50SWNvbikge1xuICAgICAgZHJhd1Jlc3BsZW5kZW50SWNvbih7IGNvbnRleHQsIHJlc3BsZW5kZW50SWNvbjogcmVzcGxlbmRlbnRJY29uLmltYWdlIH0pO1xuICAgIH1cbiAgICBjb250ZXh0LmRyYXdJbWFnZSh0ZXh0Q2FudmFzLmN1cnJlbnQsIDAsIDAsIDU0MCwgOTYwKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGV4dENhbnZhcy5jdXJyZW50LndpZHRoID0gMTA4MDtcbiAgICB0ZXh0Q2FudmFzLmN1cnJlbnQuaGVpZ2h0ID0gMTkyMDtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW1hZ2VJZEFuZFNyYy5mb3JFYWNoKChbaW1hZ2VJZCwgaW1nU3JjXSkgPT4ge1xuICAgICAgbG9hZGVycy5jdXJyZW50W2ltYWdlSWRdID0gbmV3IEltYWdlTG9hZGVyKGRyYXcpO1xuICAgICAgbG9hZGVycy5jdXJyZW50W2ltYWdlSWRdLmxvYWQoaW1nU3JjKTtcbiAgICB9KTtcbiAgfSwgW2xvYWRlcnMsIGRyYXddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBvcnRyYWl0ID0gdG9SZXNwbGVuZGVudChoZXJvLmlkLCByZXNwbGVuZGVudCk7XG4gICAgbG9hZGVycy5jdXJyZW50LnBvcnRyYWl0LmxvYWQoYC9wb3J0cmFpdHMvJHtwb3J0cmFpdH0ucG5nYCk7XG4gICAgY29uc3QgaWNvbnMgPSBnZXRTa2lsbEljb25zKHtcbiAgICAgIGhlcm9EQjogZGIuaGVyb0RCLFxuICAgICAgd2VhcG9uREI6IGRiLndlYXBvbkRCLFxuICAgICAgYXNzaXN0REI6IGRiLmFzc2lzdERCLFxuICAgICAgc3BlY2lhbERCOiBkYi5zcGVjaWFsREIsXG4gICAgICBza2lsbEFEQjogZGIuc2tpbGxBREIsXG4gICAgICBza2lsbEJEQjogZGIuc2tpbGxCREIsXG4gICAgICBza2lsbENEQjogZGIuc2tpbGxDREIsXG4gICAgICBzZWFsREI6IGRiLnNlYWxEQixcbiAgICAgIHNraWxscyxcbiAgICAgIGhlcm9JZDogaGVyby5pZCxcbiAgICAgIHJlZmluZSxcbiAgICB9KTtcblxuICAgIGRlZmF1bHRTa2lsbEljb25zLmZvckVhY2goKHsgc2tpbGxOYW1lLCBlbXB0eSB9KSA9PiB7XG4gICAgICBsb2FkZXJzLmN1cnJlbnRbYCR7c2tpbGxOYW1lfUljb25gXS5sb2FkKGljb25zW3NraWxsTmFtZV0gfHwgZW1wdHkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGhhc0JsZXNzaW5nID1cbiAgICAgIChoZXJvLmJsZXNzaW5nICE9PSAnLScgJiYgISFoZXJvLmJsZXNzaW5nKSB8fCAhIWJsZXNzaW5nO1xuICAgIGxvYWRlcnMuY3VycmVudC5ibGVzc2luZ0F0bGFzLmxvYWQoXG4gICAgICBoYXNCbGVzc2luZyA/IGBhc3NldHMvYmxlc3NpbmctJHtoZXJvLmJsZXNzaW5nIHx8IGJsZXNzaW5nfS5wbmdgIDogJydcbiAgICApO1xuICB9LCBbXG4gICAgaGVybyxcbiAgICByZXNwbGVuZGVudCxcbiAgICBza2lsbHMsXG4gICAgcmVmaW5lLFxuICAgIGJsZXNzaW5nLFxuICAgIHN0YXRzSW5mb3MsXG4gICAgZGIuaGVyb0RCLFxuICAgIGRiLndlYXBvbkRCLFxuICAgIGRiLmFzc2lzdERCLFxuICAgIGRiLnNwZWNpYWxEQixcbiAgICBkYi5za2lsbEFEQixcbiAgICBkYi5za2lsbEJEQixcbiAgICBkYi5za2lsbENEQixcbiAgICBkYi5zZWFsREIsXG4gIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGVyb1JlZi5jdXJyZW50ID0gaGVybztcbiAgICByYXJpdHlSZWYuY3VycmVudCA9IHJhcml0eTtcbiAgICBpdlJlZi5jdXJyZW50ID0gaXY7XG4gICAgbWVyZ2VSZWYuY3VycmVudCA9IG1lcmdlO1xuICAgIGRyYWdvbmZsb3dlclJlZi5jdXJyZW50ID0gZHJhZ29uZmxvd2VyO1xuICAgIGJsZXNzaW5nUmVmLmN1cnJlbnQgPSBibGVzc2luZztcbiAgICBzdXBwb3J0UmVmLmN1cnJlbnQgPSBzdXBwb3J0O1xuICAgIGFyZW5hUmVmLmN1cnJlbnQgPSBhcmVuYTtcbiAgICByZXNwbGVuZGVudFJlZi5jdXJyZW50ID0gcmVzcGxlbmRlbnQ7XG4gICAgcmVmaW5lUmVmLmN1cnJlbnQgPSByZWZpbmU7XG4gICAgbHYxUmVmLmN1cnJlbnQgPSBsdjE7XG4gICAgc2NvcmVSZWYuY3VycmVudCA9IHNjb3JlO1xuICAgIHNraWxsSW5mb3NSZWYuY3VycmVudCA9IHNraWxsSW5mb3M7XG4gICAgc3RhdHNJbmZvc1JlZi5jdXJyZW50ID0gc3RhdHNJbmZvcztcbiAgICBkcmF3KCk7XG4gIH0sIFtcbiAgICBoZXJvLFxuICAgIHJhcml0eSxcbiAgICBpdixcbiAgICBtZXJnZSxcbiAgICBkcmFnb25mbG93ZXIsXG4gICAgYmxlc3NpbmcsXG4gICAgc3VwcG9ydCxcbiAgICBhcmVuYSxcbiAgICByZXNwbGVuZGVudCxcbiAgICByZWZpbmUsXG4gICAgbHYxLFxuICAgIHNjb3JlLFxuICAgIHNraWxsSW5mb3MsXG4gICAgc3RhdHNJbmZvcyxcbiAgICBkcmF3LFxuICBdKTtcblxuICBjb25zdCB0cmlnZ2VyRG93bmxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgZGF0YVVSTCA9IGNhbnZhc1JlZi5jdXJyZW50LnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSBkYXRhVVJMO1xuICAgIGxpbmsuZG93bmxvYWQgPSBgJHtoZXJvPy5uYW1lfS0ke2hlcm8/LnRpdGxlfS5wbmdgO1xuICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgfSwgW2hlcm8/Lm5hbWUsIGhlcm8/LnRpdGxlXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjYW52YXNSZWYsXG4gICAgdHJpZ2dlckRvd25sb2FkLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VIb29rcztcbiJdLCJzb3VyY2VSb290IjoiIn0=