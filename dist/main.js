/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example.js */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_word_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/word.js */ \"./src/scripts/word.js\");\n\n\nconsole.log(\"entry point working!\");\nlet word = new _scripts_word_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"hello\");\nconsole.log(word);\n(0,_scripts_example_js__WEBPACK_IMPORTED_MODULE_0__.fn1)();\n// test()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBRTBDO0FBQ047QUFFcENFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0FBRW5DLElBQUlDLElBQUksR0FBRyxJQUFJSCx3REFBSSxDQUFDLE9BQU8sQ0FBQztBQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQztBQUVqQkosd0RBQUcsQ0FBQyxDQUFDO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGlwX29mX3RoZV9oYW5kLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IGZuMSB9IGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZS5qc1wiXG5pbXBvcnQgV29yZCBmcm9tIFwiLi9zY3JpcHRzL3dvcmQuanNcIlxuXG5jb25zb2xlLmxvZyhcImVudHJ5IHBvaW50IHdvcmtpbmchXCIpXG5cbmxldCB3b3JkID0gbmV3IFdvcmQoXCJoZWxsb1wiKTtcbmNvbnNvbGUubG9nKHdvcmQpXG5cbmZuMSgpXG4vLyB0ZXN0KCkiXSwibmFtZXMiOlsiZm4xIiwiV29yZCIsImNvbnNvbGUiLCJsb2ciLCJ3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fn1: function() { return /* binding */ fn1; }\n/* harmony export */ });\nconst fn1 = () => {\n  console.log(\"connected!\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFHTyxNQUFNQSxHQUFHLEdBQUdBLENBQUEsS0FBTTtFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7QUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xpcF9vZl90aGVfaGFuZC8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgY29uc3QgZm4xID0gKCkgPT4geyBjb25zb2xlLmxvZyhcImNvbm5lY3RlZCFcIikgfSA7Il0sIm5hbWVzIjpbImZuMSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/word.js":
/*!*****************************!*\
  !*** ./src/scripts/word.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Word {\n  KEYBOARD = [\"1234567890-=\".split(\"\"), [\"tab\"].concat(\"QWERTYUIOP[]\".split(\"\")), [\"caps lock\"].concat(\"ASDFGHJKL;'\".split(\"\")), [\"shift\"].concat(\"ZXCVBNM,./\".split(\"\")).concat([\"shift\"])];\n  constructor(value) {\n    this.value = value;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Word);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93b3JkLmpzIiwibWFwcGluZ3MiOiI7QUFHQSxNQUFNQSxJQUFJLENBQUM7RUFFUEMsUUFBUSxHQUFJLENBQUMsY0FBYyxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQ3pCLENBQUMsS0FBSyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxjQUFjLENBQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN4QyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDN0MsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ3pEO0VBRWJDLFdBQVdBLENBQUNDLEtBQUssRUFBQztJQUNkLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0VBRXRCO0FBSUo7QUFJQSwrREFBZUwsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3NsaXBfb2ZfdGhlX2hhbmQvLi9zcmMvc2NyaXB0cy93b3JkLmpzPzg3MjIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuY2xhc3MgV29yZCB7XG4gICAgXG4gICAgS0VZQk9BUkQgID0gW1wiMTIzNDU2Nzg5MC09XCIuc3BsaXQoXCJcIiksXG4gICAgICAgICAgICAgICAgW1widGFiXCJdLmNvbmNhdChcIlFXRVJUWVVJT1BbXVwiLnNwbGl0KFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgW1wiY2FwcyBsb2NrXCJdLmNvbmNhdChcIkFTREZHSEpLTDsnXCIuc3BsaXQoXCJcIikpLCBcbiAgICAgICAgICAgICAgICBbXCJzaGlmdFwiXS5jb25jYXQoXCJaWENWQk5NLC4vXCIuc3BsaXQoXCJcIikpLmNvbmNhdChbXCJzaGlmdFwiXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgXG4gICAgY29uc3RydWN0b3IodmFsdWUpe1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgXG4gICAgfVxuXG5cblxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgV29yZDsiXSwibmFtZXMiOlsiV29yZCIsIktFWUJPQVJEIiwic3BsaXQiLCJjb25jYXQiLCJjb25zdHJ1Y3RvciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/word.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGlwX29mX3RoZV9oYW5kLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;