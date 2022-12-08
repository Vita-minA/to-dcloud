module.exports = function(window, document, temp) {var App = function(options) {window.appOptions = options};var self = window.self;var HTMLElement = window.HTMLElement;var Element = window.Element;var Node = window.Node;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var navigator = window.navigator;var history = window.history;var location = window.location;var performance = window.performance;var Image = window.Image;var CustomEvent = window.CustomEvent;var Event = window.Event;var requestAnimationFrame = window.requestAnimationFrame;var cancelAnimationFrame = window.cancelAnimationFrame;var getComputedStyle = window.getComputedStyle;var XMLHttpRequest = window.XMLHttpRequest;var Worker = window.Worker;var SharedWorker = window.SharedWorker;window["createApp"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([135,1,4,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ createApp; });

// EXTERNAL MODULE: ./node_modules/_vue@2.7.14@vue/dist/vue.esm.js
var vue_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/_vue-router@3.6.5@vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(22);

// EXTERNAL MODULE: ./src/App.vue + 4 modules
var App = __webpack_require__(36);

// EXTERNAL MODULE: ./src/store/index.js
var store = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--5-1!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./node_modules/_vue-improve-loader@0.3.5@vue-improve-loader/src!./src/home/Index.vue?vue&type=template&id=1514be3b&
var Indexvue_type_template_id_1514be3b_render = function render() {
  var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy;
  return _c("view", { staticClass: "chess-board-container" }, [_c("button", { on: { click: _vm.onClickTest } }, [_vm._v(" 测试 ")]), _c("ChessBoard", {
    attrs: {
      showHello: _vm.fuckFlag,
      showText: _vm.headerTips,
      test: temp.test
    }
  }), _vm._v("\n        " + _vm._s(_vm.test) + "\n\t")], 1);
};
var staticRenderFns = [];
Indexvue_type_template_id_1514be3b_render._withStripped = true;


// CONCATENATED MODULE: ./src/home/Index.vue?vue&type=template&id=1514be3b&

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(55);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/_reduce-loader@0.3.2@reduce-loader/src!./src/home/web.js
var web = __webpack_require__(88);

// EXTERNAL MODULE: ./src/components/chessground/index.vue + 25 modules
var chessground = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/_vuex@3.6.2@vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--5-1!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./node_modules/_vue-improve-loader@0.3.5@vue-improve-loader/src!./src/home/Index.vue?vue&type=script&lang=js&







/* harmony default export */ var Indexvue_type_script_lang_js_ = (vue_esm["a" /* default */].extend({
    components: {
        ChessBoard: chessground["a" /* default */]
    },
    props: {
        test: {
            type: Number,
            default: 0
        }
    },
    data: function data() {
        return {
            fuckFlag: false
        };
    },

    methods: {
        onClickTest: function onClickTest() {
            this.fuckFlag = !this.fuckFlag;
            this.test();
        }
    },
    computed: extends_default()({}, Object(vuex_esm["b" /* mapState */])(['headerTips']))
}));
// import  Chessground  from './chessgroundjs/index';
// import './board.css';
// import { Chess, SQUARES } from 'chess.js';

// function uniques<T>(arr: T[]) {
//     let uniqueArray = arr.filter(function (elem, index, self) {
//         return index === self.indexOf(elem)
//     })
//     return uniqueArray
// }


// export default Vue.extend({
//     name: 'Home',
//     props: {
//         fen: {
//             type: String,
//             default: '',
//         },
//         free: {
//             type: Boolean,
//             default: false,
//         },   
//         orientation: {
//             type: String,
//             default: 'white',
//         },     
//         onPromotion: {
//             type: String,
//             default: 'q',
//         },        
//         showThreats: {
//             type: Boolean,
//             default: false,
//         },                
//     },    
//     data() {
//         return {
//             game: new Chess(),
//             board: null,
//             promotions: [],
//             promoteTo: '',
//         }
//     },   
//     methods: {
//         opponentMoves() {
//             let originalPGN = this.game.pgn()
//             let tokens = this.game.fen().split(' ')
//             tokens[1] = tokens[1] === 'w' ? 'b' : 'w'
//             let joinTokens = tokens.join(' ')
//             let valid = this.game.load(joinTokens)
//             if (valid) {
//                 let moves = this.game.moves({ verbose: true })
//                 this.game.loadPgn(originalPGN)
//                 return moves
//             } else {
//                 return []
//             }
//         },
//         calculatePromotions() {
//             let moves = this.game.moves({ verbose: true });
//             this.promotions = []
//             for (let move of moves) {
//                 if (move.promotion) {
//                     this.promotions.push(move)
//                 }
//             }
//         },
//         isPromotion(orig, dest) {
//             let filteredPromotions = this.promotions.filter(move => move.from === orig && move.to === dest)
//             return filteredPromotions.length > 0 // The current movement is a promotion
//         },
//         afterMove() {
//             if (this.showThreats) {
//                 this.paintThreats()
//             }
//             let threats = this.countThreats(this.toColor()) || {}
//             threats['history'] = this.game.history()
//             threats['fen'] = this.game.fen()
//             this.$emit('onMove', threats)
//         },
//         countThreats(color) {
//             let threats = {}
//             let captures = 0
//             let checks = 0
//             let moves = this.game.moves({ verbose: true })
//             if (color !== this.toColor()) {
//                 moves = this.opponentMoves()
//             }

//             if (moves.length === 0) {
//                 return null // It´s an invalid position
//             }

//             moves.forEach(function (move) {
//                 if (move['captured']) {
//                     captures++
//                 }
//                 if (move['san'].includes('+')) {
//                     checks++
//                 }
//             })

//             threats[`legal_${color}`] = uniques(moves.map(x => x.from + x.to)).length // promotions count as 4 moves. This remove those duplicates moves.
//             threats[`checks_${color}`] = checks
//             threats[`threat_${color}`] = captures
//             threats[`turn`] = color
//             return threats
//         },      
//         // 传给 board 可允许的走法
//         possibleMoves() {
//             const dests = new Map();
//             SQUARES.forEach((s) => {
//                 const ms = this.game.moves({ square: s, verbose: true })
//                 if (ms.length) {
//                     dests.set(s, ms.map((m) => m.to))
//                 }
//             })
//             return dests
//         },      
//         // 传给棋盘当前轮到谁了
//         toColor() {
//             return (this.game.turn() === 'w') ? 'white' : 'black'
//         },
//         loadPosition() {
//             this.game.load(this.fen);
//             this.board = Chessground(this.$refs.board, {
//                 fen: this.game.fen(),
//                 turnColor: this.toColor(),
//                 movable: {
//                     color: this.toColor(),
//                     free: false,
//                     dests: this.possibleMoves(),
//                 },
//                 animation: {
//                     duration: 175,
//                 },
//                 premovable: {
//                     enabled: true,
//                     showDests: false,
//                     events: {
//                         set: () => console.log('set')
//                     }
//                 },
//                 orientation: this.orientation,
//             });
//             this.board.set({
//                 movable: { events: { after: this.changeTurn() } },
//             })
//             this.afterMove()            
//         },
//         paintThreats() {
//             let moves = this.game.moves({ verbose: true })
//             let threats = []
//             moves.forEach(function (move) {
//                 threats.push({ orig: move.to, brush: 'yellow' })

//                 if (move['captured']) {
//                     threats.push({ orig: move.from, dest: move.to, brush: 'red' })
//                 }
//                 if (move['san'].includes('+')) {
//                     threats.push({ orig: move.from, dest: move.to, brush: 'blue' })
//                 }
//             })
//             this.board.setShapes(threats)
//         }, 
//         changeTurn() {
//             return (orig, dest) => {
//                 if (this.isPromotion(orig, dest)) {
//                     this.promoteTo = this.onPromotion
//                 }
//                 this.promoteTo 
//                     ? this.game.move({ from: orig, to: dest, promotion: this.promoteTo }) // promote to queen for simplicity
//                     : this.game.move({ from: orig, to: dest })
//                 this.promoteTo = '';                 
//                 this.board.set({
//                     fen: this.game.fen(),
//                     turnColor: this.toColor(),
//                     movable: {
//                         color: this.toColor(),
//                         dests: this.possibleMoves(),
//                     },
//                     drawable: {
//                         enabled: true, // can draw
//                         visible: true, // can view
//                         brushes: {
//                             green: { key: 'g', color: '#15781B', opacity: 1, lineWidth: 10 },
//                         }
//                     },
//                 })
//                 // this.board.setAutoShapes([{
//                 //     orig: 'h2',
//                 //     dest: 'h4',
//                 //     brush: 'g'
//                 // }])
//                 this.calculatePromotions()
//                 this.afterMove()
//             }
//         },          
//     },    
//     created() {
//         if (process.env.isMiniprogram) {
//             console.log('I am in miniprogram')
//         } else {
//             console.log('I am in Web')
//         }
//     },
//     mounted() {
//         this.loadPosition()
//     },
// })
// CONCATENATED MODULE: ./src/home/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.10.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./src/home/Index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_Indexvue_type_script_lang_js_,
  Indexvue_type_template_id_1514be3b_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = (component.exports);
// CONCATENATED MODULE: ./src/mp/home/main.mp.js






vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

var router = new vue_router_esm["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/(home|index)?',
    name: 'Home',
    component: Index
  }]
});

function createApp() {
  var container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);

  vue_esm["a" /* default */].config.productionTip = false;

  return new vue_esm["a" /* default */]({
    el: '#app',
    router: router,
    store: store["a" /* default */],
    render: function render(h) {
      return h(App["a" /* default */]);
    }
  });
}

/***/ }),

/***/ 88:
/***/ (function(module, exports) {



/***/ })

/******/ })["default"];}