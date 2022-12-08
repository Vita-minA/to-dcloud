module.exports = function(window, document) {var App = function(options) {window.appOptions = options};var self = window.self;var HTMLElement = window.HTMLElement;var Element = window.Element;var Node = window.Node;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var navigator = window.navigator;var history = window.history;var location = window.location;var performance = window.performance;var Image = window.Image;var CustomEvent = window.CustomEvent;var Event = window.Event;var requestAnimationFrame = window.requestAnimationFrame;var cancelAnimationFrame = window.cancelAnimationFrame;var getComputedStyle = window.getComputedStyle;var XMLHttpRequest = window.XMLHttpRequest;var Worker = window.Worker;var SharedWorker = window.SharedWorker;(window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || []).push([[0],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_postcss_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_improve_loader_0_3_5_vue_improve_loader_src_index_js_index_vue_vue_type_style_index_0_id_281560c0_prod_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_postcss_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_improve_loader_0_3_5_vue_improve_loader_src_index_js_index_vue_vue_type_style_index_0_id_281560c0_prod_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_10_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_postcss_node_modules_less_loader_5_0_0_less_loader_dist_cjs_js_node_modules_thread_loader_2_1_3_thread_loader_dist_cjs_js_node_modules_vue_loader_15_10_1_vue_loader_lib_index_js_vue_loader_options_node_modules_vue_improve_loader_0_3_5_vue_improve_loader_src_index_js_index_vue_vue_type_style_index_0_id_281560c0_prod_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);



vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].Store({
  state: {
    headerTips: 'hello',
    input: ''
  },
  mutations: {
    // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    test: function test(state) {
      state.headerTips += 's';
    }
  }
}));

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--5-1!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./node_modules/_vue-improve-loader@0.3.5@vue-improve-loader/src!./src/components/chessground/index.vue?vue&type=template&id=281560c0&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;
  return _c("div", { staticClass: "blue merida" }, [_c("div", { ref: "board", staticClass: "cg-board-wrap" }), _vm._v("\n    " + _vm._s(_vm.test) + "\n")]);
};
var staticRenderFns = [];
render._withStripped = true;


// CONCATENATED MODULE: ./src/components/chessground/index.vue?vue&type=template&id=281560c0&

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/map.js
var map = __webpack_require__(1);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__(0);
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/_vue@2.7.14@vue/dist/vue.esm.js
var vue_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(4);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(56);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/types.js
var colors = ['white', 'black'];
var types_files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
//# sourceMappingURL=types.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/util.js


var _Array$prototype;


var invRanks = [].concat(toConsumableArray_default()(ranks)).reverse();
var allKeys = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, toConsumableArray_default()(types_files.map(function (c) {
    return ranks.map(function (r) {
        return c + r;
    });
})));
var pos2key = function pos2key(pos) {
    return allKeys[8 * pos[0] + pos[1]];
};
var key2pos = function key2pos(k) {
    return [k.charCodeAt(0) - 97, k.charCodeAt(1) - 49];
};
var uciToMove = function uciToMove(uci) {
    if (!uci) return undefined;
    if (uci[1] === '@') return [uci.slice(2, 4)];
    return [uci.slice(0, 2), uci.slice(2, 4)];
};
var allPos = allKeys.map(key2pos);
function memo(f) {
    var v = void 0;
    var ret = function ret() {
        if (v === undefined) v = f();
        return v;
    };
    ret.clear = function () {
        v = undefined;
    };
    return ret;
}
var timer = function timer() {
    var startAt = void 0;
    return {
        start: function start() {
            startAt = performance.now();
        },
        cancel: function cancel() {
            startAt = undefined;
        },
        stop: function stop() {
            if (!startAt) return 0;
            var time = performance.now() - startAt;
            startAt = undefined;
            return time;
        }
    };
};
var opposite = function opposite(c) {
    return c === 'white' ? 'black' : 'white';
};
var distanceSq = function distanceSq(pos1, pos2) {
    var dx = pos1[0] - pos2[0],
        dy = pos1[1] - pos2[1];
    return dx * dx + dy * dy;
};
var samePiece = function samePiece(p1, p2) {
    return p1.role === p2.role && p1.color === p2.color;
};
var util_posToTranslate = function posToTranslate(bounds) {
    return function (pos, asWhite) {
        return [(asWhite ? pos[0] : 7 - pos[0]) * bounds.width / 8, (asWhite ? 7 - pos[1] : pos[1]) * bounds.height / 8];
    };
};
var translate = function translate(el, pos) {
    el.style.transform = 'translate(' + pos[0] + 'px,' + pos[1] + 'px)';
};
var translateAndScale = function translateAndScale(el, pos) {
    var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    el.style.transform = 'translate(' + pos[0] + 'px,' + pos[1] + 'px) scale(' + scale + ')';
};
var setVisible = function setVisible(el, v) {
    el.style.visibility = v ? 'visible' : 'hidden';
};
var eventPosition = function eventPosition(e) {
    var _a;
    if (e.clientX || e.clientX === 0) return [e.clientX, e.clientY];
    if ((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a[0]) return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
    return; // touchend has no position!
};
var isRightButton = function isRightButton(e) {
    return e.buttons === 2 || e.button === 2;
};
var createEl = function createEl(tagName, className) {
    var el = document.createElement(tagName);
    if (className) el.className = className;
    return el;
};
function computeSquareCenter(key, asWhite, bounds) {
    var pos = key2pos(key);
    if (!asWhite) {
        pos[0] = 7 - pos[0];
        pos[1] = 7 - pos[1];
    }
    return [bounds.left + bounds.width * pos[0] / 8 + bounds.width / 16, bounds.top + bounds.height * (7 - pos[1]) / 8 + bounds.height / 16];
}
function takeItem(array, str) {
    if (array.findIndex(function (item) {
        return item === str;
    }) !== -1) {
        array.splice(array.findIndex(function (item) {
            return item === str;
        }), 1);
    }
}
//# sourceMappingURL=util.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/premove.js



var diff = function diff(a, b) {
    return Math.abs(a - b);
};
var pawn = function pawn(color) {
    return function (x1, y1, x2, y2) {
        return diff(x1, x2) < 2 && (color === 'white' ? // allow 2 squares from first two ranks, for horde
        y2 === y1 + 1 || y1 <= 1 && y2 === y1 + 2 && x1 === x2 : y2 === y1 - 1 || y1 >= 6 && y2 === y1 - 2 && x1 === x2);
    };
};
var knight = function knight(x1, y1, x2, y2) {
    var xd = diff(x1, x2);
    var yd = diff(y1, y2);
    return xd === 1 && yd === 2 || xd === 2 && yd === 1;
};
var bishop = function bishop(x1, y1, x2, y2) {
    return diff(x1, x2) === diff(y1, y2);
};
var premove_rook = function rook(x1, y1, x2, y2) {
    return x1 === x2 || y1 === y2;
};
var queen = function queen(x1, y1, x2, y2) {
    return bishop(x1, y1, x2, y2) || premove_rook(x1, y1, x2, y2);
};
var premove_king = function king(color, rookFiles, canCastle) {
    return function (x1, y1, x2, y2) {
        return diff(x1, x2) < 2 && diff(y1, y2) < 2 || canCastle && y1 === y2 && y1 === (color === 'white' ? 0 : 7) && (x1 === 4 && (x2 === 2 && rookFiles.includes(0) || x2 === 6 && rookFiles.includes(7)) || rookFiles.includes(x2));
    };
};
function rookFilesOf(pieces, color) {
    var backrank = color === 'white' ? '1' : '8';
    var files = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = get_iterator_default()(pieces), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = slicedToArray_default()(_ref, 2);

            var key = _ref2[0];
            var piece = _ref2[1];

            if (key[1] === backrank && piece.color === color && piece.role === 'rook') {
                files.push(key2pos(key)[0]);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return files;
}
function premove_premove(pieces, key, canCastle) {
    var piece = pieces.get(key);
    if (!piece) return [];
    var pos = key2pos(key),
        r = piece.role,
        mobility = r === 'pawn' ? pawn(piece.color) : r === 'knight' ? knight : r === 'bishop' ? bishop : r === 'rook' ? premove_rook : r === 'queen' ? queen : premove_king(piece.color, rookFilesOf(pieces, piece.color), canCastle);
    return allPos.filter(function (pos2) {
        return (pos[0] !== pos2[0] || pos[1] !== pos2[1]) && mobility(pos[0], pos[1], pos2[0], pos2[1]);
    }).map(pos2key);
}
//# sourceMappingURL=premove.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/board.js




function callUserFunction(f) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    if (f) setTimeout(function () {
        return f.apply(undefined, args);
    }, 1);
}
function board_toggleOrientation(state) {
    state.orientation = opposite(state.orientation);
    state.animation.current = state.draggable.current = state.selected = undefined;
}
function board_reset(state) {
    state.lastMove = undefined;
    unselect(state);
    unsetPremove(state);
    unsetPredrop(state);
}
function board_setPieces(state, pieces) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = get_iterator_default()(pieces), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = slicedToArray_default()(_ref, 2);

            var key = _ref2[0];
            var piece = _ref2[1];

            if (piece) state.pieces.set(key, piece);else state.pieces.delete(key);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function setCheck(state, color) {
    state.check = undefined;
    if (color === true) color = state.turnColor;
    if (color) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = get_iterator_default()(state.pieces), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _ref3 = _step2.value;

                var _ref4 = slicedToArray_default()(_ref3, 2);

                var k = _ref4[0];
                var p = _ref4[1];

                if (p.role === 'king' && p.color === color) {
                    state.check = k;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }
}
function setPremove(state, orig, dest, meta) {
    unsetPredrop(state);
    state.premovable.current = [orig, dest];
    callUserFunction(state.premovable.events.set, orig, dest, meta);
}
function unsetPremove(state) {
    if (state.premovable.current) {
        state.premovable.current = undefined;
        callUserFunction(state.premovable.events.unset);
    }
}
function setPredrop(state, role, key) {
    unsetPremove(state);
    state.predroppable.current = { role: role, key: key };
    callUserFunction(state.predroppable.events.set, role, key);
}
function unsetPredrop(state) {
    var pd = state.predroppable;
    if (pd.current) {
        pd.current = undefined;
        callUserFunction(pd.events.unset);
    }
}
function tryAutoCastle(state, orig, dest) {
    if (!state.autoCastle) return false;
    var king = state.pieces.get(orig);
    if (!king || king.role !== 'king') return false;
    var origPos = key2pos(orig);
    var destPos = key2pos(dest);
    if (origPos[1] !== 0 && origPos[1] !== 7 || origPos[1] !== destPos[1]) return false;
    if (origPos[0] === 4 && !state.pieces.has(dest)) {
        if (destPos[0] === 6) dest = pos2key([7, destPos[1]]);else if (destPos[0] === 2) dest = pos2key([0, destPos[1]]);
    }
    var rook = state.pieces.get(dest);
    if (!rook || rook.color !== king.color || rook.role !== 'rook') return false;
    state.pieces.delete(orig);
    state.pieces.delete(dest);
    if (origPos[0] < destPos[0]) {
        state.pieces.set(pos2key([6, destPos[1]]), king);
        state.pieces.set(pos2key([5, destPos[1]]), rook);
    } else {
        state.pieces.set(pos2key([2, destPos[1]]), king);
        state.pieces.set(pos2key([3, destPos[1]]), rook);
    }
    return true;
}
function baseMove(state, orig, dest) {
    var origPiece = state.pieces.get(orig),
        destPiece = state.pieces.get(dest);
    if (orig === dest || !origPiece) return false;
    var captured = destPiece && destPiece.color !== origPiece.color ? destPiece : undefined;
    if (dest === state.selected) unselect(state);
    callUserFunction(state.events.move, orig, dest, captured);
    if (!tryAutoCastle(state, orig, dest)) {
        state.pieces.set(dest, origPiece);
        state.pieces.delete(orig);
    }
    state.lastMove = [orig, dest];
    state.check = undefined;
    callUserFunction(state.events.change);
    return captured || true;
}
function baseNewPiece(state, piece, key, force) {
    if (state.pieces.has(key)) {
        if (force) state.pieces.delete(key);else return false;
    }
    callUserFunction(state.events.dropNewPiece, piece, key);
    state.pieces.set(key, piece);
    state.lastMove = [key];
    state.check = undefined;
    callUserFunction(state.events.change);
    state.movable.dests = undefined;
    state.turnColor = opposite(state.turnColor);
    return true;
}
function baseUserMove(state, orig, dest) {
    var result = baseMove(state, orig, dest);
    if (result) {
        state.movable.dests = undefined;
        state.turnColor = opposite(state.turnColor);
        state.animation.current = undefined;
    }
    return result;
}
function userMove(state, orig, dest) {
    if (canMove(state, orig, dest)) {
        var result = baseUserMove(state, orig, dest);
        if (result) {
            var holdTime = state.hold.stop();
            unselect(state);
            var metadata = {
                premove: false,
                ctrlKey: state.stats.ctrlKey,
                holdTime: holdTime
            };
            if (result !== true) metadata.captured = result;
            callUserFunction(state.movable.events.after, orig, dest, metadata);
            return true;
        }
    } else if (board_canPremove(state, orig, dest)) {
        setPremove(state, orig, dest, {
            ctrlKey: state.stats.ctrlKey
        });
        unselect(state);
        return true;
    }
    unselect(state);
    return false;
}
function dropNewPiece(state, orig, dest, force) {
    var piece = state.pieces.get(orig);
    if (piece && (canDrop(state, orig, dest) || force)) {
        state.pieces.delete(orig);
        baseNewPiece(state, piece, dest, force);
        callUserFunction(state.movable.events.afterNewPiece, piece.role, dest, {
            premove: false,
            predrop: false
        });
    } else if (piece && canPredrop(state, orig, dest)) {
        setPredrop(state, piece.role, dest);
    } else {
        unsetPremove(state);
        unsetPredrop(state);
    }
    state.pieces.delete(orig);
    unselect(state);
}
function board_selectSquare(state, key, force) {
    callUserFunction(state.events.select, key);
    if (state.selected) {
        if (state.selected === key && !state.draggable.enabled) {
            unselect(state);
            state.hold.cancel();
            return;
        } else if ((state.selectable.enabled || force) && state.selected !== key) {
            if (userMove(state, state.selected, key)) {
                state.stats.dragged = false;
                return;
            }
        }
    }
    if ((state.selectable.enabled || state.draggable.enabled) && (isMovable(state, key) || isPremovable(state, key))) {
        setSelected(state, key);
        state.hold.start();
    }
}
function setSelected(state, key) {
    state.selected = key;
    if (isPremovable(state, key)) {
        state.premovable.dests = premove_premove(state.pieces, key, state.premovable.castle);
    } else state.premovable.dests = undefined;
}
function unselect(state) {
    state.selected = undefined;
    state.premovable.dests = undefined;
    state.hold.cancel();
}
function isMovable(state, orig) {
    var piece = state.pieces.get(orig);
    return !!piece && (state.movable.color === 'both' || state.movable.color === piece.color && state.turnColor === piece.color);
}
var canMove = function canMove(state, orig, dest) {
    var _a, _b;return orig !== dest && isMovable(state, orig) && (state.movable.free || !!((_b = (_a = state.movable.dests) === null || _a === void 0 ? void 0 : _a.get(orig)) === null || _b === void 0 ? void 0 : _b.includes(dest)));
};
function canDrop(state, orig, dest) {
    var piece = state.pieces.get(orig);
    return !!piece && (orig === dest || !state.pieces.has(dest)) && (state.movable.color === 'both' || state.movable.color === piece.color && state.turnColor === piece.color);
}
function isPremovable(state, orig) {
    var piece = state.pieces.get(orig);
    return !!piece && state.premovable.enabled && state.movable.color === piece.color && state.turnColor !== piece.color;
}
var board_canPremove = function canPremove(state, orig, dest) {
    return orig !== dest && isPremovable(state, orig) && premove_premove(state.pieces, orig, state.premovable.castle).includes(dest);
};
function canPredrop(state, orig, dest) {
    var piece = state.pieces.get(orig);
    var destPiece = state.pieces.get(dest);
    return !!piece && (!destPiece || destPiece.color !== state.movable.color) && state.predroppable.enabled && (piece.role !== 'pawn' || dest[1] !== '1' && dest[1] !== '8') && state.movable.color === piece.color && state.turnColor !== piece.color;
}
function isDraggable(state, orig) {
    var piece = state.pieces.get(orig);
    return !!piece && state.draggable.enabled && (state.movable.color === 'both' || state.movable.color === piece.color && (state.turnColor === piece.color || state.premovable.enabled));
}
function board_playPremove(state) {
    var move = state.premovable.current;
    if (!move) return false;
    var orig = move[0],
        dest = move[1];
    var success = false;
    if (canMove(state, orig, dest)) {
        var result = baseUserMove(state, orig, dest);
        if (result) {
            var metadata = { premove: true };
            if (result !== true) metadata.captured = result;
            callUserFunction(state.movable.events.after, orig, dest, metadata);
            success = true;
        }
    }
    unsetPremove(state);
    return success;
}
function board_playPredrop(state, validate) {
    var drop = state.predroppable.current;
    var success = false;
    if (!drop) return false;
    if (validate(drop)) {
        var piece = {
            role: drop.role,
            color: state.movable.color
        };
        if (baseNewPiece(state, piece, drop.key)) {
            callUserFunction(state.movable.events.afterNewPiece, drop.role, drop.key, {
                premove: false,
                predrop: true
            });
            success = true;
        }
    }
    unsetPredrop(state);
    return success;
}
function board_cancelMove(state) {
    unsetPremove(state);
    unsetPredrop(state);
    unselect(state);
}
function board_stop(state) {
    state.movable.color = state.movable.dests = state.animation.current = undefined;
    board_cancelMove(state);
}
function board_getKeyAtDomPos(pos, asWhite, bounds) {
    var file = Math.floor(8 * (pos[0] - bounds.left) / bounds.width);
    if (!asWhite) file = 7 - file;
    var rank = 7 - Math.floor(8 * (pos[1] - bounds.top) / bounds.height);
    if (!asWhite) rank = 7 - rank;
    return file >= 0 && file < 8 && rank >= 0 && rank < 8 ? pos2key([file, rank]) : undefined;
}
function getSnappedKeyAtDomPos(orig, pos, asWhite, bounds) {
    var origPos = key2pos(orig);
    var validSnapPos = allPos.filter(function (pos2) {
        return queen(origPos[0], origPos[1], pos2[0], pos2[1]) || knight(origPos[0], origPos[1], pos2[0], pos2[1]);
    });
    var validSnapCenters = validSnapPos.map(function (pos2) {
        return computeSquareCenter(pos2key(pos2), asWhite, bounds);
    });
    var validSnapDistances = validSnapCenters.map(function (pos2) {
        return distanceSq(pos, pos2);
    });

    var _validSnapDistances$r = validSnapDistances.reduce(function (a, b, index) {
        return a[0] < b ? a : [b, index];
    }, [validSnapDistances[0], 0]),
        _validSnapDistances$r2 = slicedToArray_default()(_validSnapDistances$r, 2),
        closestSnapIndex = _validSnapDistances$r2[1];

    return pos2key(validSnapPos[closestSnapIndex]);
}
var whitePov = function whitePov(s) {
    return s.orientation === 'white';
};
//# sourceMappingURL=board.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/fen.js




var initial = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR';
var roles = {
    p: 'pawn',
    r: 'rook',
    n: 'knight',
    b: 'bishop',
    q: 'queen',
    k: 'king'
};
var letters = {
    pawn: 'p',
    rook: 'r',
    knight: 'n',
    bishop: 'b',
    queen: 'q',
    king: 'k'
};
function read(fen) {
    if (fen === 'start') fen = initial;
    var pieces = new map_default.a();
    var row = 7,
        col = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = get_iterator_default()(fen), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            switch (c) {
                case ' ':
                case '[':
                    return pieces;
                case '/':
                    --row;
                    if (row < 0) return pieces;
                    col = 0;
                    break;
                case '~':
                    {
                        var piece = pieces.get(pos2key([col - 1, row]));
                        if (piece) piece.promoted = true;
                        break;
                    }
                default:
                    {
                        var nb = c.charCodeAt(0);
                        if (nb < 57) col += nb - 48;else {
                            var role = c.toLowerCase();
                            pieces.set(pos2key([col, row]), {
                                role: roles[role],
                                color: c === role ? 'black' : 'white'
                            });
                            ++col;
                        }
                    }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return pieces;
}
function write(pieces) {
    return invRanks.map(function (y) {
        return types_files.map(function (x) {
            var piece = pieces.get(x + y);
            if (piece) {
                var p = letters[piece.role];
                if (piece.color === 'white') p = p.toUpperCase();
                if (piece.promoted) p += '~';
                return p;
            } else return '1';
        }).join('');
    }).join('/').replace(/1{2,}/g, function (s) {
        return s.length.toString();
    });
}
//# sourceMappingURL=fen.js.map
// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__(77);
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(78);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/config.js




function applyAnimation(state, config) {
    if (config.animation) {
        deepMerge(state.animation, config.animation);
        // no need for such short animations
        if ((state.animation.duration || 0) < 70) state.animation.enabled = false;
    }
}
function configure(state, config) {
    var _a, _b;
    // don't merge destinations and autoShapes. Just override.
    if ((_a = config.movable) === null || _a === void 0 ? void 0 : _a.dests) state.movable.dests = undefined;
    if ((_b = config.drawable) === null || _b === void 0 ? void 0 : _b.autoShapes) state.drawable.autoShapes = [];
    deepMerge(state, config);
    // if a fen was provided, replace the pieces
    if (config.fen) {
        state.pieces = read(config.fen);
        state.drawable.shapes = [];
    }
    // apply config values that could be undefined yet meaningful
    if ('check' in config) setCheck(state, config.check || false);
    if ('lastMove' in config && !config.lastMove) state.lastMove = undefined;
    // in case of ZH drop last move, there's a single square.
    // if the previous last move had two squares,
    // the merge algorithm will incorrectly keep the second square.
    else if (config.lastMove) state.lastMove = config.lastMove;
    // fix move/premove dests
    if (state.selected) setSelected(state, state.selected);
    applyAnimation(state, config);
    if (!state.movable.rookCastle && state.movable.dests) {
        var rank = state.movable.color === 'white' ? '1' : '8',
            kingStartPos = 'e' + rank,
            dests = state.movable.dests.get(kingStartPos),
            king = state.pieces.get(kingStartPos);
        if (!dests || !king || king.role !== 'king') return;
        state.movable.dests.set(kingStartPos, dests.filter(function (d) {
            return !(d === 'a' + rank && dests.includes('c' + rank)) && !(d === 'h' + rank && dests.includes('g' + rank));
        }));
    }
}
function deepMerge(base, extend) {
    for (var key in extend) {
        if (Object.prototype.hasOwnProperty.call(extend, key)) {
            if (Object.prototype.hasOwnProperty.call(base, key) && isPlainObject(base[key]) && isPlainObject(extend[key])) deepMerge(base[key], extend[key]);else base[key] = extend[key];
        }
    }
}
function isPlainObject(o) {
    if ((typeof o === 'undefined' ? 'undefined' : typeof_default()(o)) !== 'object' || o === null) return false;
    var proto = get_prototype_of_default()(o);
    return proto === Object.prototype || proto === null;
}
//# sourceMappingURL=config.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/anim.js




var anim_anim = function anim(mutation, state) {
    return state.animation.enabled ? animate(mutation, state) : anim_render(mutation, state);
};
function anim_render(mutation, state) {
    var result = mutation(state);
    state.dom.redraw();
    return result;
}
var anim_makePiece = function makePiece(key, piece) {
    return {
        key: key,
        pos: key2pos(key),
        piece: piece
    };
};
var anim_closer = function closer(piece, pieces) {
    return pieces.sort(function (p1, p2) {
        return distanceSq(piece.pos, p1.pos) - distanceSq(piece.pos, p2.pos);
    })[0];
};
function computePlan(prevPieces, current) {
    var anims = new map_default.a(),
        animedOrigs = [],
        fadings = new map_default.a(),
        missings = [],
        news = [],
        prePieces = new map_default.a();
    var curP = void 0,
        preP = void 0,
        vector = void 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = get_iterator_default()(prevPieces), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = slicedToArray_default()(_ref, 2);

            var k = _ref2[0];
            var p = _ref2[1];

            prePieces.set(k, anim_makePiece(k, p));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = get_iterator_default()(allKeys), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            curP = current.pieces.get(key);
            preP = prePieces.get(key);
            if (curP) {
                if (preP) {
                    if (!samePiece(curP, preP.piece)) {
                        missings.push(preP);
                        news.push(anim_makePiece(key, curP));
                    }
                } else news.push(anim_makePiece(key, curP));
            } else if (preP) missings.push(preP);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _loop = function _loop(newP) {
        preP = anim_closer(newP, missings.filter(function (p) {
            return samePiece(newP.piece, p.piece);
        }));
        if (preP) {
            vector = [preP.pos[0] - newP.pos[0], preP.pos[1] - newP.pos[1]];
            anims.set(newP.key, vector.concat(vector));
            animedOrigs.push(preP.key);
        }
    };

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = get_iterator_default()(news), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var newP = _step3.value;

            _loop(newP);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = get_iterator_default()(missings), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _p = _step4.value;

            if (!animedOrigs.includes(_p.key)) fadings.set(_p.key, _p.piece);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    return {
        anims: anims,
        fadings: fadings
    };
}
function step(state, now) {
    var cur = state.animation.current;
    if (cur === undefined) {
        // animation was canceled :(
        if (!state.dom.destroyed) state.dom.redrawNow();
        return;
    }
    var rest = 1 - (now - cur.start) * cur.frequency;
    if (rest <= 0) {
        state.animation.current = undefined;
        state.dom.redrawNow();
    } else {
        var ease = easing(rest);
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = get_iterator_default()(cur.plan.anims.values()), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var cfg = _step5.value;

                cfg[2] = cfg[0] * ease;
                cfg[3] = cfg[1] * ease;
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }

        state.dom.redrawNow(true); // optimisation: don't render SVG changes during animations
        requestAnimationFrame(function () {
            var now = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();
            return step(state, now);
        });
    }
}
function animate(mutation, state) {
    // clone state before mutating it
    var prevPieces = new map_default.a(state.pieces);
    var result = mutation(state);
    var plan = computePlan(prevPieces, state);
    if (plan.anims.size || plan.fadings.size) {
        var alreadyRunning = state.animation.current && state.animation.current.start;
        state.animation.current = {
            start: performance.now(),
            frequency: 1 / state.animation.duration,
            plan: plan
        };
        if (!alreadyRunning) step(state, performance.now());
    } else {
        // don't animate, just render right away
        state.dom.redraw();
    }
    return result;
}
// https://gist.github.com/gre/1650294
var easing = function easing(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
//# sourceMappingURL=anim.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/draw.js


var draw_brushes = ['green', 'red', 'blue', 'yellow'];
function start(state, e) {
    // support one finger touch only
    if (e.touches && e.touches.length > 1) return;
    e.stopPropagation();
    e.preventDefault();
    e.ctrlKey ? unselect(state) : board_cancelMove(state);
    var pos = eventPosition(e),
        orig = board_getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());
    if (!orig) return;
    state.drawable.current = {
        orig: orig,
        pos: pos,
        brush: eventBrush(e),
        snapToValidMove: state.drawable.defaultSnapToValidMove
    };
    processDraw(state);
}
function processDraw(state) {
    requestAnimationFrame(function () {
        var cur = state.drawable.current;
        if (cur) {
            var keyAtDomPos = board_getKeyAtDomPos(cur.pos, whitePov(state), state.dom.bounds());
            if (!keyAtDomPos) {
                cur.snapToValidMove = false;
            }
            var mouseSq = cur.snapToValidMove ? getSnappedKeyAtDomPos(cur.orig, cur.pos, whitePov(state), state.dom.bounds()) : keyAtDomPos;
            if (mouseSq !== cur.mouseSq) {
                cur.mouseSq = mouseSq;
                cur.dest = mouseSq !== cur.orig ? mouseSq : undefined;
                state.dom.redrawNow();
            }
            processDraw(state);
        }
    });
}
function draw_move(state, e) {
    if (state.drawable.current) state.drawable.current.pos = eventPosition(e);
}
function end(state) {
    var cur = state.drawable.current;
    if (cur) {
        if (cur.mouseSq) addShape(state.drawable, cur);
        cancel(state);
    }
}
function cancel(state) {
    if (state.drawable.current) {
        state.drawable.current = undefined;
        state.dom.redraw();
    }
}
function clear(state) {
    if (state.drawable.shapes.length) {
        state.drawable.shapes = [];
        state.dom.redraw();
        onChange(state.drawable);
    }
}
function eventBrush(e) {
    var _a;
    var modA = (e.shiftKey || e.ctrlKey) && isRightButton(e);
    var modB = e.altKey || e.metaKey || ((_a = e.getModifierState) === null || _a === void 0 ? void 0 : _a.call(e, 'AltGraph'));
    return draw_brushes[(modA ? 1 : 0) + (modB ? 2 : 0)];
}
function addShape(drawable, cur) {
    var sameShape = function sameShape(s) {
        return s.orig === cur.orig && s.dest === cur.dest;
    };
    var similar = drawable.shapes.find(sameShape);
    if (similar) drawable.shapes = drawable.shapes.filter(function (s) {
        return !sameShape(s);
    });
    if (!similar || similar.brush !== cur.brush) drawable.shapes.push(cur);
    onChange(drawable);
}
function onChange(drawable) {
    if (drawable.onChange) drawable.onChange(drawable.shapes);
}
//# sourceMappingURL=draw.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/drag.js





function drag_start(s, e) {
    // if (!e.isTrusted || (e.button !== undefined && e.button !== 0))
    //     return; // only touch or left click
    if (e.touches && e.touches.length > 1) return; // support one finger touch only
    var bounds = s.dom.bounds();
    var position = eventPosition(e);
    var orig = board_getKeyAtDomPos(position, whitePov(s), bounds);
    console.log(orig, bounds);
    if (!orig) return;
    var piece = s.pieces.get(orig);
    var previouslySelected = s.selected;
    if (!previouslySelected && s.drawable.enabled && (s.drawable.eraseOnClick || !piece || piece.color !== s.turnColor)) clear(s);
    // Prevent touch scroll and create no corresponding mouse event, if there
    // is an intent to interact with the board.
    if (e.cancelable !== false && (!e.touches || s.blockTouchScroll || piece || previouslySelected || pieceCloseTo(s, position))) e.preventDefault();
    var hadPremove = !!s.premovable.current;
    var hadPredrop = !!s.predroppable.current;
    s.stats.ctrlKey = e.ctrlKey;
    if (s.selected && canMove(s, s.selected, orig)) {
        anim_anim(function (state) {
            return board_selectSquare(state, orig);
        }, s);
    } else {
        board_selectSquare(s, orig);
    }
    var stillSelected = s.selected === orig;
    var element = pieceElementByKey(s, orig);
    if (piece && element && stillSelected && isDraggable(s, orig)) {
        s.draggable.current = {
            orig: orig,
            piece: piece,
            origPos: position,
            pos: position,
            started: s.draggable.autoDistance && s.stats.dragged,
            element: element,
            previouslySelected: previouslySelected,
            originTarget: e.target,
            keyHasChanged: false
        };
        element.cgDragging = true;
        element.classList.push('dragging');
        // place ghost
        var ghost = s.dom.elements.ghost;
        if (ghost) {
            ghost.classList.push(piece.color);
            ghost.classList.push(piece.role);
            // ghost.className = `ghost ${piece.color} ${piece.role}`;
            translate(ghost, util_posToTranslate(bounds)(key2pos(orig), whitePov(s)));
            setVisible(ghost, true);
        }
        processDrag(s);
    } else {
        if (hadPremove) unsetPremove(s);
        if (hadPredrop) unsetPredrop(s);
    }
    s.dom.redraw();
}
function pieceCloseTo(s, pos) {
    var asWhite = whitePov(s),
        bounds = s.dom.bounds(),
        radiusSq = Math.pow(bounds.width / 8, 2);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = get_iterator_default()(s.pieces.keys()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            var center = computeSquareCenter(key, asWhite, bounds);
            if (distanceSq(center, pos) <= radiusSq) return true;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return false;
}
function drag_dragNewPiece(s, piece, e, force) {
    var key = 'a0';
    s.pieces.set(key, piece);
    s.dom.redraw();
    var position = eventPosition(e);
    s.draggable.current = {
        orig: key,
        piece: piece,
        origPos: position,
        pos: position,
        started: true,
        element: function element() {
            return pieceElementByKey(s, key);
        },
        originTarget: e.target,
        newPiece: true,
        force: !!force,
        keyHasChanged: false
    };
    processDrag(s);
}
function processDrag(s) {
    requestAnimationFrame(function () {
        var _a;
        var cur = s.draggable.current;
        if (!cur) return;
        // cancel animations while dragging
        if ((_a = s.animation.current) === null || _a === void 0 ? void 0 : _a.plan.anims.has(cur.orig)) s.animation.current = undefined;
        // if moving piece is gone, cancel
        var origPiece = s.pieces.get(cur.orig);
        if (!origPiece || !samePiece(origPiece, cur.piece)) drag_cancel(s);else {
            if (!cur.started && distanceSq(cur.pos, cur.origPos) >= Math.pow(s.draggable.distance, 2)) cur.started = true;
            if (cur.started) {
                // support lazy elements
                if (typeof cur.element === 'function') {
                    var found = cur.element();
                    if (!found) return;
                    found.cgDragging = true;
                    // 微信适配 add 不适用
                    found.classList.push('dragging');
                    cur.element = found;
                }
                var bounds = s.dom.bounds();
                translate(cur.element, [cur.pos[0] - bounds.left - bounds.width / 16, cur.pos[1] - bounds.top - bounds.height / 16]);
                cur.keyHasChanged || (cur.keyHasChanged = cur.orig !== board_getKeyAtDomPos(cur.pos, whitePov(s), bounds));
            }
        }
        processDrag(s);
    });
}
function drag_move(s, e) {
    // support one finger touch only
    if (s.draggable.current && (!e.touches || e.touches.length < 2)) {
        s.draggable.current.pos = eventPosition(e);
    }
}
function drag_end(s, e) {
    var cur = s.draggable.current;
    if (!cur) return;
    // create no corresponding mouse event
    if (e.type === 'touchend' && e.cancelable !== false) e.preventDefault();
    // comparing with the origin target is an easy way to test that the end event
    // has the same touch origin
    if (e.type === 'touchend' && cur.originTarget !== e.target && !cur.newPiece) {
        s.draggable.current = undefined;
        return;
    }
    unsetPremove(s);
    unsetPredrop(s);
    // touchend has no position; so use the last touchmove position instead
    var eventPos = eventPosition(e) || cur.pos;
    var dest = board_getKeyAtDomPos(eventPos, whitePov(s), s.dom.bounds());
    if (dest && cur.started && cur.orig !== dest) {
        if (cur.newPiece) dropNewPiece(s, cur.orig, dest, cur.force);else {
            s.stats.ctrlKey = e.ctrlKey;
            if (userMove(s, cur.orig, dest)) s.stats.dragged = true;
        }
    } else if (cur.newPiece) {
        s.pieces.delete(cur.orig);
    } else if (s.draggable.deleteOnDropOff && !dest) {
        s.pieces.delete(cur.orig);
        callUserFunction(s.events.change);
    }
    if ((cur.orig === cur.previouslySelected || cur.keyHasChanged) && (cur.orig === dest || !dest)) unselect(s);else if (!s.selectable.enabled) unselect(s);
    removeDragElements(s);
    s.draggable.current = undefined;
    s.dom.redraw();
}
function drag_cancel(s) {
    var cur = s.draggable.current;
    if (cur) {
        if (cur.newPiece) s.pieces.delete(cur.orig);
        s.draggable.current = undefined;
        unselect(s);
        removeDragElements(s);
        s.dom.redraw();
    }
}
function removeDragElements(s) {
    var e = s.dom.elements;
    if (e.ghost) setVisible(e.ghost, false);
}
function pieceElementByKey(s, key) {
    var el = s.dom.elements.board.firstChild;
    while (el) {
        if (el.cgKey === key && el.tagName === 'PIECE') return el;
        el = el.nextSibling;
    }
    return;
}
//# sourceMappingURL=drag.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/explosion.js
function explosion(state, keys) {
    state.exploding = { stage: 1, keys: keys };
    state.dom.redraw();
    setTimeout(function () {
        setStage(state, 2);
        setTimeout(function () {
            return setStage(state, undefined);
        }, 120);
    }, 120);
}
function setStage(state, stage) {
    if (state.exploding) {
        if (stage) state.exploding.stage = stage;else state.exploding = undefined;
        state.dom.redraw();
    }
}
//# sourceMappingURL=explosion.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/api.js






// see API types and documentations in dts/api.d.ts
function api_start(state, redrawAll) {
    function toggleOrientation() {
        board_toggleOrientation(state);
        redrawAll();
    }
    return {
        set: function set(config) {
            if (config.orientation && config.orientation !== state.orientation) toggleOrientation();
            applyAnimation(state, config);
            (config.fen ? anim_anim : anim_render)(function (state) {
                return configure(state, config);
            }, state);
        },

        state: state,
        getFen: function getFen() {
            return write(state.pieces);
        },
        toggleOrientation: toggleOrientation,
        setPieces: function setPieces(pieces) {
            anim_anim(function (state) {
                return board_setPieces(state, pieces);
            }, state);
        },
        selectSquare: function selectSquare(key, force) {
            if (key) anim_anim(function (state) {
                return board_selectSquare(state, key, force);
            }, state);else if (state.selected) {
                unselect(state);
                state.dom.redraw();
            }
        },
        move: function move(orig, dest) {
            anim_anim(function (state) {
                return baseMove(state, orig, dest);
            }, state);
        },
        newPiece: function newPiece(piece, key) {
            anim_anim(function (state) {
                return baseNewPiece(state, piece, key);
            }, state);
        },
        playPremove: function playPremove() {
            if (state.premovable.current) {
                if (anim_anim(board_playPremove, state)) return true;
                // if the premove couldn't be played, redraw to clear it up
                state.dom.redraw();
            }
            return false;
        },
        playPredrop: function playPredrop(validate) {
            if (state.predroppable.current) {
                var result = board_playPredrop(state, validate);
                state.dom.redraw();
                return result;
            }
            return false;
        },
        cancelPremove: function cancelPremove() {
            anim_render(unsetPremove, state);
        },
        cancelPredrop: function cancelPredrop() {
            anim_render(unsetPredrop, state);
        },
        cancelMove: function cancelMove() {
            anim_render(function (state) {
                board_cancelMove(state);
                drag_cancel(state);
            }, state);
        },
        stop: function stop() {
            anim_render(function (state) {
                board_stop(state);
                drag_cancel(state);
            }, state);
        },
        explode: function explode(keys) {
            explosion(state, keys);
        },
        setAutoShapes: function setAutoShapes(shapes) {
            anim_render(function (state) {
                return state.drawable.autoShapes = shapes;
            }, state);
        },
        setShapes: function setShapes(shapes) {
            anim_render(function (state) {
                return state.drawable.shapes = shapes;
            }, state);
        },
        getKeyAtDomPos: function getKeyAtDomPos(pos) {
            return board_getKeyAtDomPos(pos, whitePov(state), state.dom.bounds());
        },

        redrawAll: redrawAll,
        dragNewPiece: function dragNewPiece(piece, event, force) {
            drag_dragNewPiece(state, piece, event, force);
        },
        destroy: function destroy() {
            board_stop(state);
            state.dom.unbind && state.dom.unbind();
            state.dom.destroyed = true;
        }
    };
}
//# sourceMappingURL=api.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/state.js


function defaults() {
    return {
        pieces: read(initial),
        orientation: 'white',
        turnColor: 'white',
        coordinates: true,
        ranksPosition: 'right',
        autoCastle: true,
        viewOnly: false,
        disableContextMenu: false,
        addPieceZIndex: false,
        blockTouchScroll: false,
        pieceKey: false,
        highlight: {
            lastMove: true,
            check: true
        },
        animation: {
            enabled: true,
            duration: 200
        },
        movable: {
            free: true,
            color: 'both',
            showDests: true,
            events: {},
            rookCastle: true
        },
        premovable: {
            enabled: true,
            showDests: true,
            castle: true,
            events: {}
        },
        predroppable: {
            enabled: false,
            events: {}
        },
        draggable: {
            enabled: true,
            distance: 3,
            autoDistance: true,
            showGhost: true,
            deleteOnDropOff: false
        },
        dropmode: {
            active: false
        },
        selectable: {
            enabled: true
        },
        stats: {
            // on touchscreen, default to "tap-tap" moves
            // instead of drag
            dragged: !('ontouchstart' in window)
        },
        events: {},
        drawable: {
            enabled: true,
            visible: true,
            defaultSnapToValidMove: true,
            eraseOnClick: true,
            shapes: [],
            autoShapes: [],
            brushes: {
                green: { key: 'g', color: '#15781B', opacity: 1, lineWidth: 10 },
                red: { key: 'r', color: '#882020', opacity: 1, lineWidth: 10 },
                blue: { key: 'b', color: '#003088', opacity: 1, lineWidth: 10 },
                yellow: { key: 'y', color: '#e68f00', opacity: 1, lineWidth: 10 },
                paleBlue: { key: 'pb', color: '#003088', opacity: 0.4, lineWidth: 15 },
                paleGreen: { key: 'pg', color: '#15781B', opacity: 0.4, lineWidth: 15 },
                paleRed: { key: 'pr', color: '#882020', opacity: 0.4, lineWidth: 15 },
                paleGrey: {
                    key: 'pgr',
                    color: '#4a4a4a',
                    opacity: 0.35,
                    lineWidth: 15
                }
            },
            prevSvgHash: ''
        },
        hold: timer()
    };
}
//# sourceMappingURL=state.js.map
// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/core-js/set.js
var core_js_set = __webpack_require__(25);
var set_default = /*#__PURE__*/__webpack_require__.n(core_js_set);

// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/sync.js


// append and remove only. No updates.
function syncShapes(shapes, root, renderShape) {
    var hashesInDom = new map_default.a(),
        // by hash
    toRemove = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = get_iterator_default()(shapes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var sc = _step.value;

            hashesInDom.set(sc.hash, false);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var el = root.firstChild,
        elHash = void 0;
    while (el) {
        elHash = el.getAttribute('cgHash');
        // found a shape element that's here to stay
        if (hashesInDom.has(elHash)) hashesInDom.set(elHash, true);
        // or remove it
        else toRemove.push(el);
        el = el.nextSibling;
    }
    // remove old shapes
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = get_iterator_default()(toRemove), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _el = _step2.value;

            root.removeChild(_el);
        } // insert shapes that are not yet in dom
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = get_iterator_default()(shapes), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _sc = _step3.value;

            if (!hashesInDom.get(_sc.hash)) root.appendChild(renderShape(_sc));
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
}
//# sourceMappingURL=sync.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/svg.js






function createElement(tagName) {
    return document.createElementNS('http://www.w3.org/2000/svg', tagName);
}
function renderSvg(state, svg, customSvg) {
    var d = state.drawable,
        curD = d.current,
        cur = curD && curD.mouseSq ? curD : undefined,
        arrowDests = new map_default.a(),
        bounds = state.dom.bounds(),
        nonPieceAutoShapes = d.autoShapes.filter(function (autoShape) {
        return !autoShape.piece;
    });
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = get_iterator_default()(d.shapes.concat(nonPieceAutoShapes).concat(cur ? [cur] : [])), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var s = _step.value;

            if (s.dest) arrowDests.set(s.dest, (arrowDests.get(s.dest) || 0) + 1);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var shapes = d.shapes.concat(nonPieceAutoShapes).map(function (s) {
        return {
            shape: s,
            current: false,
            hash: shapeHash(s, arrowDests, false, bounds)
        };
    });
    if (cur) shapes.push({
        shape: cur,
        current: true,
        hash: shapeHash(cur, arrowDests, true, bounds)
    });
    var fullHash = shapes.map(function (sc) {
        return sc.hash;
    }).join(';');
    if (fullHash === state.drawable.prevSvgHash) return;
    state.drawable.prevSvgHash = fullHash;
    /*
      -- DOM hierarchy --
      <svg class="cg-shapes">      (<= svg)
        <defs>
          ...(for brushes)...
        </defs>
        <g>
          ...(for arrows and circles)...
        </g>
      </svg>
      <svg class="cg-custom-svgs"> (<= customSvg)
        <g>
          ...(for custom svgs)...
        </g>
      </svg>
    */
    var defsEl = svg.querySelector('defs');
    var shapesEl = svg.querySelector('g');
    var customSvgsEl = customSvg.querySelector('g');
    syncDefs(d, shapes, defsEl);
    syncShapes(shapes.filter(function (s) {
        return !s.shape.customSvg;
    }), shapesEl, function (shape) {
        return svg_renderShape(state, shape, d.brushes, arrowDests, bounds);
    });
    syncShapes(shapes.filter(function (s) {
        return s.shape.customSvg;
    }), customSvgsEl, function (shape) {
        return svg_renderShape(state, shape, d.brushes, arrowDests, bounds);
    });
}
// append only. Don't try to update/remove.
function syncDefs(d, shapes, defsEl) {
    var brushes = new map_default.a();
    var brush = void 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = get_iterator_default()(shapes), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var s = _step2.value;

            if (s.shape.dest) {
                brush = d.brushes[s.shape.brush];
                if (s.shape.modifiers) brush = makeCustomBrush(brush, s.shape.modifiers);
                brushes.set(brush.key, brush);
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var keysInDom = new set_default.a();
    var el = defsEl.firstChild;
    while (el) {
        keysInDom.add(el.getAttribute('cgKey'));
        el = el.nextSibling;
    }
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = get_iterator_default()(brushes.entries()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _ref = _step3.value;

            var _ref2 = slicedToArray_default()(_ref, 2);

            var key = _ref2[0];
            var _brush = _ref2[1];

            if (!keysInDom.has(key)) defsEl.appendChild(renderMarker(_brush));
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
}
function shapeHash(_ref3, arrowDests, current, bounds) {
    var orig = _ref3.orig,
        dest = _ref3.dest,
        brush = _ref3.brush,
        piece = _ref3.piece,
        modifiers = _ref3.modifiers,
        customSvg = _ref3.customSvg;

    return [bounds.width, bounds.height, current, orig, dest, brush, dest && (arrowDests.get(dest) || 0) > 1, piece && pieceHash(piece), modifiers && modifiersHash(modifiers), customSvg && customSvgHash(customSvg)].filter(function (x) {
        return x;
    }).join(',');
}
function pieceHash(piece) {
    return [piece.color, piece.role, piece.scale].filter(function (x) {
        return x;
    }).join(',');
}
function modifiersHash(m) {
    return '' + (m.lineWidth || '');
}
function customSvgHash(s) {
    // Rolling hash with base 31 (cf. https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript)
    var h = 0;
    for (var i = 0; i < s.length; i++) {
        h = (h << 5) - h + s.charCodeAt(i) >>> 0;
    }
    return 'custom-' + h.toString();
}
function svg_renderShape(state, _ref4, brushes, arrowDests, bounds) {
    var shape = _ref4.shape,
        current = _ref4.current,
        hash = _ref4.hash;

    var el = void 0;
    var orig = orient(key2pos(shape.orig), state.orientation);
    if (shape.customSvg) {
        el = renderCustomSvg(shape.customSvg, orig, bounds);
    } else {
        if (shape.dest) {
            var brush = brushes[shape.brush];
            if (shape.modifiers) brush = makeCustomBrush(brush, shape.modifiers);
            el = renderArrow(brush, orig, orient(key2pos(shape.dest), state.orientation), current, (arrowDests.get(shape.dest) || 0) > 1, bounds);
        } else el = renderCircle(brushes[shape.brush], orig, current, bounds);
    }
    el.setAttribute('cgHash', hash);
    return el;
}
function renderCustomSvg(customSvg, pos, bounds) {
    var _pos2user = pos2user(pos, bounds),
        _pos2user2 = slicedToArray_default()(_pos2user, 2),
        x = _pos2user2[0],
        y = _pos2user2[1];
    // Translate to top-left of `orig` square


    var g = setAttributes(createElement('g'), { transform: 'translate(' + x + ',' + y + ')' });
    // Give 100x100 coordinate system to the user for `orig` square
    var svg = setAttributes(createElement('svg'), { width: 1, height: 1, viewBox: '0 0 100 100' });
    g.appendChild(svg);
    svg.innerHTML = customSvg;
    return g;
}
function renderCircle(brush, pos, current, bounds) {
    var o = pos2user(pos, bounds),
        widths = circleWidth(),
        radius = (bounds.width + bounds.height) / (4 * Math.max(bounds.width, bounds.height));
    return setAttributes(createElement('circle'), {
        stroke: brush.color,
        'stroke-width': widths[current ? 0 : 1],
        fill: 'none',
        opacity: opacity(brush, current),
        cx: o[0],
        cy: o[1],
        r: radius - widths[1] / 2
    });
}
function renderArrow(brush, orig, dest, current, shorten, bounds) {
    var m = arrowMargin(shorten && !current),
        a = pos2user(orig, bounds),
        b = pos2user(dest, bounds),
        dx = b[0] - a[0],
        dy = b[1] - a[1],
        angle = Math.atan2(dy, dx),
        xo = Math.cos(angle) * m,
        yo = Math.sin(angle) * m;
    return setAttributes(createElement('line'), {
        stroke: brush.color,
        'stroke-width': lineWidth(brush, current),
        'stroke-linecap': 'round',
        'marker-end': 'url(#arrowhead-' + brush.key + ')',
        opacity: opacity(brush, current),
        x1: a[0],
        y1: a[1],
        x2: b[0] - xo,
        y2: b[1] - yo
    });
}
function renderMarker(brush) {
    var marker = setAttributes(createElement('marker'), {
        id: 'arrowhead-' + brush.key,
        orient: 'auto',
        markerWidth: 4,
        markerHeight: 8,
        refX: 2.05,
        refY: 2.01
    });
    marker.appendChild(setAttributes(createElement('path'), {
        d: 'M0,0 V4 L3,2 Z',
        fill: brush.color
    }));
    marker.setAttribute('cgKey', brush.key);
    return marker;
}
function setAttributes(el, attrs) {
    for (var key in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, key)) el.setAttribute(key, attrs[key]);
    }
    return el;
}
function orient(pos, color) {
    return color === 'white' ? pos : [7 - pos[0], 7 - pos[1]];
}
function makeCustomBrush(base, modifiers) {
    return {
        color: base.color,
        opacity: Math.round(base.opacity * 10) / 10,
        lineWidth: Math.round(modifiers.lineWidth || base.lineWidth),
        key: [base.key, modifiers.lineWidth].filter(function (x) {
            return x;
        }).join('')
    };
}
function circleWidth() {
    return [3 / 64, 4 / 64];
}
function lineWidth(brush, current) {
    return (brush.lineWidth || 10) * (current ? 0.85 : 1) / 64;
}
function opacity(brush, current) {
    return (brush.opacity || 1) * (current ? 0.9 : 1);
}
function arrowMargin(shorten) {
    return (shorten ? 20 : 10) / 64;
}
function pos2user(pos, bounds) {
    var xScale = Math.min(1, bounds.width / bounds.height);
    var yScale = Math.min(1, bounds.height / bounds.width);
    return [(pos[0] - 3.5) * xScale, (3.5 - pos[1]) * yScale];
}
//# sourceMappingURL=svg.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/wrap.js




function renderWrap(element, s) {
    // .cg-wrap (element passed to Chessground)
    //   cg-container
    //     cg-board
    //     svg.cg-shapes
    //       defs
    //       g
    //     svg.cg-custom-svgs
    //       g
    //     cg-auto-pieces
    //     coords.ranks
    //     coords.files
    //     piece.ghost
    element.innerHTML = '';
    // ensure the cg-wrap class is set
    // so bounds calculation can use the CSS width/height values
    // add that class yourself to the element before calling chessground
    // for a slight performance improvement! (avoids recomputing style)
    element.classList.push('cg-wrap');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = get_iterator_default()(colors), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var c = _step.value;

            element.classList.toggle('orientation-' + c, s.orientation === c);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    element.classList.toggle('manipulable', !s.viewOnly);
    var container = createEl('cg-container');
    element.appendChild(container);
    var board = createEl('cg-board');
    container.appendChild(board);
    var svg = void 0;
    var customSvg = void 0;
    var autoPieces = void 0;
    if (s.drawable.visible) {
        svg = setAttributes(createElement('svg'), {
            class: 'cg-shapes',
            viewBox: '-4 -4 8 8',
            preserveAspectRatio: 'xMidYMid slice'
        });
        svg.appendChild(createElement('defs'));
        svg.appendChild(createElement('g'));
        customSvg = setAttributes(createElement('svg'), {
            class: 'cg-custom-svgs',
            viewBox: '-3.5 -3.5 8 8',
            preserveAspectRatio: 'xMidYMid slice'
        });
        customSvg.appendChild(createElement('g'));
        autoPieces = createEl('cg-auto-pieces');
        container.appendChild(svg);
        container.appendChild(customSvg);
        container.appendChild(autoPieces);
    }
    if (s.coordinates) {
        var orientClass = s.orientation === 'black' ? ' black' : '';
        var ranksPositionClass = s.ranksPosition === 'left' ? ' left' : '';
        container.appendChild(renderCoords(ranks, 'ranks' + orientClass + ranksPositionClass));
        container.appendChild(renderCoords(types_files, 'files' + orientClass));
    }
    var ghost = void 0;
    if (s.draggable.enabled && s.draggable.showGhost) {
        ghost = createEl('piece', 'ghost');
        setVisible(ghost, false);
        container.appendChild(ghost);
    }
    return {
        board: board,
        container: container,
        wrap: element,
        ghost: ghost,
        svg: svg,
        customSvg: customSvg,
        autoPieces: autoPieces
    };
}
function renderCoords(elems, className) {
    var el = createEl('coords', className);
    var f = void 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = get_iterator_default()(elems), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var elem = _step2.value;

            f = createEl('coord');
            f.textContent = elem;
            el.appendChild(f);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return el;
}
//# sourceMappingURL=wrap.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/drop.js



function setDropMode(s, piece) {
    s.dropmode = {
        active: true,
        piece: piece
    };
    drag_cancel(s);
}
function cancelDropMode(s) {
    s.dropmode = {
        active: false
    };
}
function drop(s, e) {
    if (!s.dropmode.active) return;
    unsetPremove(s);
    unsetPredrop(s);
    var piece = s.dropmode.piece;
    if (piece) {
        s.pieces.set('a0', piece);
        var position = eventPosition(e);
        var dest = position && board_getKeyAtDomPos(position, whitePov(s), s.dom.bounds());
        if (dest) dropNewPiece(s, 'a0', dest);
    }
    s.dom.redraw();
}
//# sourceMappingURL=drop.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/events.js




function bindBoard(s, onResize) {
    var boardEl = s.dom.elements.board;
    if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(s.dom.elements.wrap);
    if (s.viewOnly) return;
    // Cannot be passive, because we prevent touch scrolling and dragging of
    // selected elements.
    var onStart = events_startDragOrDraw(s);
    boardEl.addEventListener('touchstart', onStart, {
        passive: false
    });
    boardEl.addEventListener('mousedown', onStart, {
        passive: false
    });
    if (s.disableContextMenu || s.drawable.enabled) {
        boardEl.addEventListener('contextmenu', function (e) {
            return e.preventDefault();
        });
    }
}
// returns the unbind function
function bindDocument(s, onResize) {
    var unbinds = [];
    // Old versions of Edge and Safari do not support ResizeObserver. Send
    // chessground.resize if a user action has changed the bounds of the board.
    if (!('ResizeObserver' in window)) unbinds.push(unbindable(document.body, 'chessground.resize', onResize));
    if (!s.viewOnly) {
        var onmove = dragOrDraw(s, drag_move, draw_move);
        var onend = dragOrDraw(s, drag_end, end);
        var _arr = ['touchmove', 'mousemove'];
        for (var _i = 0; _i < _arr.length; _i++) {
            var ev = _arr[_i];
            unbinds.push(unbindable(document, ev, onmove));
        }var _arr2 = ['touchend', 'mouseup'];
        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
            var _ev = _arr2[_i2];
            unbinds.push(unbindable(document, _ev, onend));
        }var onScroll = function onScroll() {
            return s.dom.bounds.clear();
        };
        unbinds.push(unbindable(document, 'scroll', onScroll, { capture: true, passive: true }));
        unbinds.push(unbindable(window, 'resize', onScroll, { passive: true }));
    }
    return function () {
        return unbinds.forEach(function (f) {
            return f();
        });
    };
}
function unbindable(el, eventName, callback, options) {
    el.addEventListener(eventName, callback, options);
    return function () {
        return el.removeEventListener(eventName, callback, options);
    };
}
var events_startDragOrDraw = function startDragOrDraw(s) {
    return function (e) {
        if (s.draggable.current) drag_cancel(s);else if (s.drawable.current) cancel(s);else if (e.shiftKey || isRightButton(e)) {
            if (s.drawable.enabled) start(s, e);
        } else if (!s.viewOnly) {
            if (s.dropmode.active) drop(s, e);else drag_start(s, e);
        }
    };
};
var dragOrDraw = function dragOrDraw(s, withDrag, withDraw) {
    return function (e) {
        if (s.drawable.current) {
            if (s.drawable.enabled) withDraw(s, e);
        } else if (!s.viewOnly) withDrag(s, e);
    };
};
//# sourceMappingURL=events.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/render.js






// ported from https://github.com/lichess-org/lichobile/blob/master/src/chessground/render.ts
// in case of bugs, blame @veloce
function render_render(s) {
    var asWhite = whitePov(s),
        posToTranslate = util_posToTranslate(s.dom.bounds()),
        boardEl = s.dom.elements.board,
        pieces = s.pieces,
        curAnim = s.animation.current,
        anims = curAnim ? curAnim.plan.anims : new map_default.a(),
        fadings = curAnim ? curAnim.plan.fadings : new map_default.a(),
        curDrag = s.draggable.current,
        squares = computeSquareClasses(s),
        samePieces = new set_default.a(),
        sameSquares = new set_default.a(),
        movedPieces = new map_default.a(),
        movedSquares = new map_default.a(); // by class name
    var k = void 0,
        el = void 0,
        pieceAtKey = void 0,
        elPieceName = void 0,
        anim = void 0,
        fading = void 0,
        pMvdset = void 0,
        pMvd = void 0,
        sMvdset = void 0,
        sMvd = void 0;
    // walk over all board dom elements, apply animations and flag moved pieces
    el = boardEl.firstChild;
    while (el) {
        k = el.cgKey;
        if (isPieceNode(el)) {
            pieceAtKey = pieces.get(k);
            anim = anims.get(k);
            fading = fadings.get(k);
            elPieceName = el.cgPiece;
            // if piece not being dragged anymore, remove dragging style
            if (el.cgDragging && (!curDrag || curDrag.orig !== k)) {
                takeItem(el.classList, 'dragging');
                // if (el.classList.findIndex(item => item === 'dragging') !== -1) {
                //     el.classList.splice(el.classList.findIndex(item => item === 'dragging'), 1)
                // }
                // 微信适配 remove 不适用
                // el.classList.remove('dragging');
                translate(el, posToTranslate(key2pos(k), asWhite));
                el.cgDragging = false;
            }
            // remove fading class if it still remains
            if (!fading && el.cgFading) {
                el.cgFading = false;
                takeItem(el.classList, 'fading');
                // el.classList.remove('fading');
            }
            // there is now a piece at this dom key
            if (pieceAtKey) {
                // continue animation if already animating and same piece
                // (otherwise it could animate a captured piece)
                if (anim && el.cgAnimating && elPieceName === pieceNameOf(pieceAtKey)) {
                    var pos = key2pos(k);
                    pos[0] += anim[2];
                    pos[1] += anim[3];
                    el.classList.push('anim');
                    translate(el, posToTranslate(pos, asWhite));
                } else if (el.cgAnimating) {
                    el.cgAnimating = false;
                    // el.classList.remove('anim');
                    takeItem(el.classList, 'anim');
                    translate(el, posToTranslate(key2pos(k), asWhite));
                    if (s.addPieceZIndex) el.style.zIndex = posZIndex(key2pos(k), asWhite);
                }
                // same piece: flag as same
                if (elPieceName === pieceNameOf(pieceAtKey) && (!fading || !el.cgFading)) {
                    samePieces.add(k);
                }
                // different piece: flag as moved unless it is a fading piece
                else {
                        if (fading && elPieceName === pieceNameOf(fading)) {
                            el.classList.push('fading');
                            el.cgFading = true;
                        } else {
                            appendValue(movedPieces, elPieceName, el);
                        }
                    }
            }
            // no piece: flag as moved
            else {
                    appendValue(movedPieces, elPieceName, el);
                }
        } else if (isSquareNode(el)) {
            var cn = el.className;
            if (squares.get(k) === cn) sameSquares.add(k);else appendValue(movedSquares, cn, el);
        }
        el = el.nextSibling;
    }
    // walk over all squares in current set, apply dom changes to moved squares
    // or append new squares
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = get_iterator_default()(squares), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = slicedToArray_default()(_ref, 2);

            var sk = _ref2[0];
            var className = _ref2[1];

            if (!sameSquares.has(sk)) {
                sMvdset = movedSquares.get(className);
                sMvd = sMvdset && sMvdset.pop();
                var translation = posToTranslate(key2pos(sk), asWhite);
                if (sMvd) {
                    sMvd.cgKey = sk;
                    translate(sMvd, translation);
                } else {
                    var squareNode = createEl('square', className);
                    squareNode.cgKey = sk;
                    translate(squareNode, translation);
                    boardEl.insertBefore(squareNode, boardEl.firstChild);
                }
            }
        }
        // walk over all pieces in current set, apply dom changes to moved pieces
        // or append new pieces
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = get_iterator_default()(pieces), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ref3 = _step2.value;

            var _ref4 = slicedToArray_default()(_ref3, 2);

            var _k = _ref4[0];
            var p = _ref4[1];

            anim = anims.get(_k);
            if (!samePieces.has(_k)) {
                pMvdset = movedPieces.get(pieceNameOf(p));
                pMvd = pMvdset && pMvdset.pop();
                // a same piece was moved
                if (pMvd) {
                    // apply dom changes
                    pMvd.cgKey = _k;
                    if (pMvd.cgFading) {
                        // pMvd.classList.remove('fading');
                        takeItem(pMvd.classList, 'fading');
                        pMvd.cgFading = false;
                    }
                    var _pos = key2pos(_k);
                    if (s.addPieceZIndex) pMvd.style.zIndex = posZIndex(_pos, asWhite);
                    if (anim) {
                        pMvd.cgAnimating = true;
                        pMvd.classList.push('anim');
                        _pos[0] += anim[2];
                        _pos[1] += anim[3];
                    }
                    translate(pMvd, posToTranslate(_pos, asWhite));
                }
                // no piece in moved obj: insert the new piece
                // assumes the new piece is not being dragged
                else {
                        var pieceName = pieceNameOf(p),
                            pieceNode = createEl('piece', pieceName),
                            _pos2 = key2pos(_k);
                        pieceNode.cgPiece = pieceName;
                        pieceNode.cgKey = _k;
                        if (anim) {
                            pieceNode.cgAnimating = true;
                            _pos2[0] += anim[2];
                            _pos2[1] += anim[3];
                        }
                        translate(pieceNode, posToTranslate(_pos2, asWhite));
                        if (s.addPieceZIndex) pieceNode.style.zIndex = posZIndex(_pos2, asWhite);
                        boardEl.appendChild(pieceNode);
                    }
            }
        }
        // remove any element that remains in the moved sets
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = get_iterator_default()(movedPieces.values()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var nodes = _step3.value;

            removeNodes(s, nodes);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = get_iterator_default()(movedSquares.values()), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _nodes = _step4.value;

            removeNodes(s, _nodes);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
}
function renderResized(s) {
    var asWhite = whitePov(s),
        posToTranslate = util_posToTranslate(s.dom.bounds());
    var el = s.dom.elements.board.firstChild;
    while (el) {
        if (isPieceNode(el) && !el.cgAnimating || isSquareNode(el)) {
            translate(el, posToTranslate(key2pos(el.cgKey), asWhite));
        }
        el = el.nextSibling;
    }
}
function updateBounds(s) {
    var _a, _b;
    var bounds = s.dom.elements.wrap.getBoundingClientRect();
    var container = s.dom.elements.container;
    var ratio = bounds.height / bounds.width;
    var width = Math.floor(bounds.width * window.devicePixelRatio / 8) * 8 / window.devicePixelRatio;
    var height = width * ratio;
    container.style.width = width + 'px';
    container.style.height = height + 'px';
    s.dom.bounds.clear();
    (_a = s.addDimensionsCssVarsTo) === null || _a === void 0 ? void 0 : _a.style.setProperty('--cg-width', width + 'px');
    (_b = s.addDimensionsCssVarsTo) === null || _b === void 0 ? void 0 : _b.style.setProperty('--cg-height', height + 'px');
}
var isPieceNode = function isPieceNode(el) {
    return el.tagName === 'PIECE';
};
var isSquareNode = function isSquareNode(el) {
    return el.tagName === 'SQUARE';
};
function removeNodes(s, nodes) {
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = get_iterator_default()(nodes), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var node = _step5.value;

            s.dom.elements.board.removeChild(node);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }
}
function posZIndex(pos, asWhite) {
    var minZ = 3;
    var rank = pos[1];
    var z = asWhite ? minZ + 7 - rank : minZ + rank;
    return '' + z;
}
var pieceNameOf = function pieceNameOf(piece) {
    return piece.color + ' ' + piece.role;
};
function computeSquareClasses(s) {
    var _a;
    var squares = new map_default.a();
    if (s.lastMove && s.highlight.lastMove) {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = get_iterator_default()(s.lastMove), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var k = _step6.value;

                addSquare(squares, k, 'last-move');
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }
    }if (s.check && s.highlight.check) addSquare(squares, s.check, 'check');
    if (s.selected) {
        addSquare(squares, s.selected, 'selected');
        if (s.movable.showDests) {
            var dests = (_a = s.movable.dests) === null || _a === void 0 ? void 0 : _a.get(s.selected);
            if (dests) {
                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                    for (var _iterator7 = get_iterator_default()(dests), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                        var _k2 = _step7.value;

                        addSquare(squares, _k2, 'move-dest' + (s.pieces.has(_k2) ? ' oc' : ''));
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }
                    } finally {
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }
            }var pDests = s.premovable.dests;
            if (pDests) {
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = get_iterator_default()(pDests), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var _k3 = _step8.value;

                        addSquare(squares, _k3, 'premove-dest' + (s.pieces.has(_k3) ? ' oc' : ''));
                    }
                } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                            _iterator8.return();
                        }
                    } finally {
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }
            }
        }
    }
    var premove = s.premovable.current;
    if (premove) {
        var _iteratorNormalCompletion9 = true;
        var _didIteratorError9 = false;
        var _iteratorError9 = undefined;

        try {
            for (var _iterator9 = get_iterator_default()(premove), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var _k4 = _step9.value;

                addSquare(squares, _k4, 'current-premove');
            }
        } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion9 && _iterator9.return) {
                    _iterator9.return();
                }
            } finally {
                if (_didIteratorError9) {
                    throw _iteratorError9;
                }
            }
        }
    } else if (s.predroppable.current) addSquare(squares, s.predroppable.current.key, 'current-premove');
    var o = s.exploding;
    if (o) {
        var _iteratorNormalCompletion10 = true;
        var _didIteratorError10 = false;
        var _iteratorError10 = undefined;

        try {
            for (var _iterator10 = get_iterator_default()(o.keys), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var _k5 = _step10.value;

                addSquare(squares, _k5, 'exploding' + o.stage);
            }
        } catch (err) {
            _didIteratorError10 = true;
            _iteratorError10 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion10 && _iterator10.return) {
                    _iterator10.return();
                }
            } finally {
                if (_didIteratorError10) {
                    throw _iteratorError10;
                }
            }
        }
    }return squares;
}
function addSquare(squares, key, klass) {
    var classes = squares.get(key);
    if (classes) squares.set(key, classes + ' ' + klass);else squares.set(key, klass);
}
function appendValue(map, key, value) {
    var arr = map.get(key);
    if (arr) arr.push(value);else map.set(key, [value]);
}
//# sourceMappingURL=render.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/autoPieces.js



function autoPieces_render(state, autoPieceEl) {
    var autoPieces = state.drawable.autoShapes.filter(function (autoShape) {
        return autoShape.piece;
    });
    var autoPieceShapes = autoPieces.map(function (s) {
        return {
            shape: s,
            hash: autoPieces_hash(s),
            current: false
        };
    });
    syncShapes(autoPieceShapes, autoPieceEl, function (shape) {
        return autoPieces_renderShape(state, shape, state.dom.bounds());
    });
}
function autoPieces_renderResized(state) {
    var _a;
    var asWhite = whitePov(state),
        posToTranslate = util_posToTranslate(state.dom.bounds());
    var el = (_a = state.dom.elements.autoPieces) === null || _a === void 0 ? void 0 : _a.firstChild;
    while (el) {
        translateAndScale(el, posToTranslate(key2pos(el.cgKey), asWhite), el.cgScale);
        el = el.nextSibling;
    }
}
function autoPieces_renderShape(state, _ref, bounds) {
    var shape = _ref.shape,
        hash = _ref.hash;

    var _a, _b, _c;
    var orig = shape.orig;
    var role = (_a = shape.piece) === null || _a === void 0 ? void 0 : _a.role;
    var color = (_b = shape.piece) === null || _b === void 0 ? void 0 : _b.color;
    var scale = (_c = shape.piece) === null || _c === void 0 ? void 0 : _c.scale;
    var pieceEl = createEl('piece', role + ' ' + color);
    pieceEl.setAttribute('cgHash', hash);
    pieceEl.cgKey = orig;
    pieceEl.cgScale = scale;
    translateAndScale(pieceEl, util_posToTranslate(bounds)(key2pos(orig), whitePov(state)), scale);
    return pieceEl;
}
var autoPieces_hash = function hash(autoPiece) {
    var _a, _b, _c;return [autoPiece.orig, (_a = autoPiece.piece) === null || _a === void 0 ? void 0 : _a.role, (_b = autoPiece.piece) === null || _b === void 0 ? void 0 : _b.color, (_c = autoPiece.piece) === null || _c === void 0 ? void 0 : _c.scale].join(',');
};
//# sourceMappingURL=autoPieces.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/chessground.js









function Chessground(element, config) {
    var maybeState = defaults();
    configure(maybeState, config || {});
    function redrawAll() {
        var prevUnbind = 'dom' in maybeState ? maybeState.dom.unbind : undefined;
        // compute bounds from existing board element if possible
        // this allows non-square boards from CSS to be handled (for 3D)
        var elements = renderWrap(element, maybeState),
            bounds = memo(function () {
            return { left: 0, top: 30, height: 320, width: 320 };
        }),
            redrawNow = function redrawNow(skipSvg) {
            render_render(state);
            if (elements.autoPieces) autoPieces_render(state, elements.autoPieces);
            if (!skipSvg && elements.svg) renderSvg(state, elements.svg, elements.customSvg);
        },
            onResize = function onResize() {
            updateBounds(state);
            renderResized(state);
            if (elements.autoPieces) autoPieces_renderResized(state);
        };
        var state = maybeState;
        state.dom = {
            elements: elements,
            bounds: bounds,
            redraw: debounceRedraw(redrawNow),
            redrawNow: redrawNow,
            unbind: prevUnbind
        };
        state.drawable.prevSvgHash = '';
        updateBounds(state);
        redrawNow(false);
        bindBoard(state, onResize);
        if (!prevUnbind) state.dom.unbind = bindDocument(state, onResize);
        state.events.insert && state.events.insert(elements);
        return state;
    }
    return api_start(redrawAll(), redrawAll);
}
function debounceRedraw(redrawNow) {
    var redrawing = false;
    return function () {
        if (redrawing) return;
        redrawing = true;
        requestAnimationFrame(function () {
            redrawNow();
            redrawing = false;
        });
    };
}
//# sourceMappingURL=chessground.js.map
// CONCATENATED MODULE: ./src/components/chessground/chessgroundjs/index.js

/* harmony default export */ var chessgroundjs = (Chessground);
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./src/components/chessground/board.css
var chessground_board = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/_chess.js@1.0.0-alpha.0@chess.js/dist/chess.js
var chess = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--4-1!./node_modules/_ts-loader@6.2.2@ts-loader??ref--4-2!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./node_modules/_vue-improve-loader@0.3.5@vue-improve-loader/src!./src/components/chessground/index.vue?vue&type=script&lang=ts&



// import 'reduce-loader!./web'



function uniques(arr) {
    var uniqueArray = arr.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });
    return uniqueArray;
}
/* harmony default export */ var chessgroundvue_type_script_lang_ts_ = (vue_esm["a" /* default */].extend({
    name: 'Home',
    props: {
        fen: {
            type: String,
            default: ''
        },
        free: {
            type: Boolean,
            default: false
        },
        orientation: {
            type: String,
            default: 'white'
        },
        onPromotion: {
            type: String,
            default: 'q'
        },
        showThreats: {
            type: Boolean,
            default: false
        },
        showHello: {
            type: Boolean,
            default: false
        },
        showText: {
            type: String,
            default: 'chenjian'
        },
        test: {
            type: Number,
            default: 0
        }
    },
    data: function data() {
        return {
            game: new chess["Chess"](),
            board: null,
            promotions: [],
            promoteTo: ''
        };
    },

    methods: {
        opponentMoves: function opponentMoves() {
            var originalPGN = this.game.pgn();
            var tokens = this.game.fen().split(' ');
            tokens[1] = tokens[1] === 'w' ? 'b' : 'w';
            var joinTokens = tokens.join(' ');
            var valid = this.game.load(joinTokens);
            if (valid) {
                var moves = this.game.moves({ verbose: true });
                this.game.loadPgn(originalPGN);
                return moves;
            } else {
                return [];
            }
        },
        calculatePromotions: function calculatePromotions() {
            var moves = this.game.moves({ verbose: true });
            this.promotions = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = get_iterator_default()(moves), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var move = _step.value;

                    if (move.promotion) {
                        this.promotions.push(move);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        },
        isPromotion: function isPromotion(orig, dest) {
            var filteredPromotions = this.promotions.filter(function (move) {
                return move.from === orig && move.to === dest;
            });
            return filteredPromotions.length > 0; // The current movement is a promotion
        },
        afterMove: function afterMove() {
            if (this.showThreats) {
                this.paintThreats();
            }
            var threats = this.countThreats(this.toColor()) || {};
            threats['history'] = this.game.history();
            threats['fen'] = this.game.fen();
            this.$emit('onMove', threats);
        },
        countThreats: function countThreats(color) {
            var threats = {};
            var captures = 0;
            var checks = 0;
            var moves = this.game.moves({ verbose: true });
            if (color !== this.toColor()) {
                moves = this.opponentMoves();
            }
            if (moves.length === 0) {
                return null; // It´s an invalid position
            }
            moves.forEach(function (move) {
                if (move['captured']) {
                    captures++;
                }
                if (move['san'].includes('+')) {
                    checks++;
                }
            });
            threats['legal_' + color] = uniques(moves.map(function (x) {
                return x.from + x.to;
            })).length; // promotions count as 4 moves. This remove those duplicates moves.
            threats['checks_' + color] = checks;
            threats['threat_' + color] = captures;
            threats['turn'] = color;
            return threats;
        },

        // 传给 board 可允许的走法
        possibleMoves: function possibleMoves() {
            var _this = this;

            var dests = new map_default.a();
            chess["SQUARES"].forEach(function (s) {
                var ms = _this.game.moves({ square: s, verbose: true });
                if (ms.length) {
                    dests.set(s, ms.map(function (m) {
                        return m.to;
                    }));
                }
            });
            return dests;
        },

        // 传给棋盘当前轮到谁了
        toColor: function toColor() {
            return this.game.turn() === 'w' ? 'white' : 'black';
        },
        loadPosition: function loadPosition() {
            this.game.load(this.fen);
            this.board = chessgroundjs(this.$refs.board, {
                fen: this.game.fen(),
                turnColor: this.toColor(),
                movable: {
                    color: this.toColor(),
                    free: false,
                    dests: this.possibleMoves()
                },
                animation: {
                    duration: 175
                },
                premovable: {
                    enabled: true,
                    showDests: false,
                    events: {
                        set: function set() {
                            return console.log('set');
                        }
                    }
                },
                orientation: this.orientation
            });
            this.board.set({
                movable: { events: { after: this.changeTurn() } }
            });
            this.afterMove();
        },
        paintThreats: function paintThreats() {
            var moves = this.game.moves({ verbose: true });
            var threats = [];
            moves.forEach(function (move) {
                threats.push({ orig: move.to, brush: 'yellow' });
                if (move['captured']) {
                    threats.push({ orig: move.from, dest: move.to, brush: 'red' });
                }
                if (move['san'].includes('+')) {
                    threats.push({ orig: move.from, dest: move.to, brush: 'blue' });
                }
            });
            this.board.setShapes(threats);
        },
        changeTurn: function changeTurn() {
            var _this2 = this;

            return function (orig, dest) {
                if (_this2.isPromotion(orig, dest)) {
                    _this2.promoteTo = _this2.onPromotion;
                }
                _this2.promoteTo ? _this2.game.move({ from: orig, to: dest, promotion: _this2.promoteTo }) // promote to queen for simplicity
                : _this2.game.move({ from: orig, to: dest });
                _this2.promoteTo = '';
                _this2.board.set({
                    fen: _this2.game.fen(),
                    turnColor: _this2.toColor(),
                    movable: {
                        color: _this2.toColor(),
                        dests: _this2.possibleMoves()
                    },
                    drawable: {
                        enabled: true,
                        visible: true,
                        brushes: {
                            green: { key: 'g', color: '#15781B', opacity: 1, lineWidth: 10 }
                        }
                    }
                });
                // this.board.setAutoShapes([{
                //     orig: 'h2',
                //     dest: 'h4',
                //     brush: 'g'
                // }])
                _this2.calculatePromotions();
                _this2.afterMove();
            };
        }
    },
    created: function created() {
        if (true) {
            console.log('I am in miniprogram');
        } else {}
    },
    mounted: function mounted() {
        this.showHello && console.log('hello');
        this.loadPosition();
        console.log(this.test);
    }
}));
// CONCATENATED MODULE: ./src/components/chessground/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_chessgroundvue_type_script_lang_ts_ = (chessgroundvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/chessground/index.vue?vue&type=style&index=0&id=281560c0&prod&lang=less&
var chessgroundvue_type_style_index_0_id_281560c0_prod_lang_less_ = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.10.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./src/components/chessground/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_chessgroundvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var chessground = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--5-1!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./node_modules/_vue-improve-loader@0.3.5@vue-improve-loader/src!./src/App.vue?vue&type=template&id=32b2480e&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;
  return _c("div", { attrs: { id: "app" } }, [_c("router-view")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=32b2480e&

// EXTERNAL MODULE: ./node_modules/_vue@2.7.14@vue/dist/vue.esm.js
var vue_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--5-1!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./node_modules/_vue-improve-loader@0.3.5@vue-improve-loader/src!./src/App.vue?vue&type=script&lang=js&



/* harmony default export */ var Appvue_type_script_lang_js_ = (vue_esm["a" /* default */].extend({
  name: 'App'
}));
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.10.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);}