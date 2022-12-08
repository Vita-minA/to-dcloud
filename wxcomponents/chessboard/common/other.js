module.exports = function(window, document) {var App = function(options) {window.appOptions = options};var self = window.self;var HTMLElement = window.HTMLElement;var Element = window.Element;var Node = window.Node;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var navigator = window.navigator;var history = window.history;var location = window.location;var performance = window.performance;var Image = window.Image;var CustomEvent = window.CustomEvent;var Event = window.Event;var requestAnimationFrame = window.requestAnimationFrame;var cancelAnimationFrame = window.cancelAnimationFrame;var getComputedStyle = window.getComputedStyle;var XMLHttpRequest = window.XMLHttpRequest;var Worker = window.Worker;var SharedWorker = window.SharedWorker;window["createApp"] =
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
/******/ 		3: 0
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
/******/ 	deferredModules.push([136,1,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 136:
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

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--5-1!./node_modules/_vue-loader@15.10.1@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./node_modules/_vue-improve-loader@0.3.5@vue-improve-loader/src!./src/other/index.vue?vue&type=template&id=795231dd&lang=true&
var othervue_type_template_id_795231dd_lang_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;
  return _c("view", { staticClass: "chess-board-container" }, [_c("ChessBoard", {
    attrs: {
      showHello: false,
      showHelloText: "chenjian tag is chenjian, hhh"
    }
  })], 1);
};
var staticRenderFns = [];
othervue_type_template_id_795231dd_lang_true_render._withStripped = true;


// CONCATENATED MODULE: ./src/other/index.vue?vue&type=template&id=795231dd&lang=true&

// EXTERNAL MODULE: ./src/components/chessground/index.vue + 25 modules
var chessground = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--5-1!./node_modules/_vue-loader@15.10.1@vue-loader/lib??vue-loader-options!./node_modules/_vue-improve-loader@0.3.5@vue-improve-loader/src!./src/other/index.vue?vue&type=script&lang=js&


/* harmony default export */ var othervue_type_script_lang_js_ = ({
    components: {
        ChessBoard: chessground["a" /* default */]
    }
});
// CONCATENATED MODULE: ./src/other/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_othervue_type_script_lang_js_ = (othervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.10.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(12);

// CONCATENATED MODULE: ./src/other/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_othervue_type_script_lang_js_,
  othervue_type_template_id_795231dd_lang_true_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var other = (component.exports);
// CONCATENATED MODULE: ./src/mp/other/main.mp.js






vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

var router = new vue_router_esm["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/(other)?',
    name: 'Other',
    component: other
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

/***/ })

/******/ })["default"];}