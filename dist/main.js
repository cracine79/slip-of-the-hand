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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example.js */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_word_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/word.js */ \"./src/scripts/word.js\");\n\n\nconsole.log(\"entry point working!\");\n(0,_scripts_example_js__WEBPACK_IMPORTED_MODULE_0__.fn1)();\nlet word = new _scripts_word_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"friendly\");\nconst dataMuseUrl = \"https://api.datamuse.com/words?sp=brig*\";\nfetch(dataMuseUrl).then(response => {\n  return response.json();\n}).then(data => {\n  console.log(data);\n});\n\n// console.log(word)\n// console.log(word.KEYBOARD)\n// const chopped = word.toFullPattern()\n// console.log(\"word\")\n// console.log(word.value)\n// console.log(\"left\")\n// console.log(word.toLeftPattern())\n// console.log(\"right pattern\")\n// const rightPattern = word.toRightPattern();\n// console.log(rightPattern);\n// console.log(word.allRightPatterns())//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBRzBDO0FBQ047QUFFcENFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0FBQ25DSCx3REFBRyxDQUFDLENBQUM7QUFHTCxJQUFJSSxJQUFJLEdBQUcsSUFBSUgsd0RBQUksQ0FBQyxVQUFVLENBQUM7QUFFL0IsTUFBTUksV0FBVyxHQUFHLHlDQUF5QztBQUM3REMsS0FBSyxDQUFDRCxXQUFXLENBQUMsQ0FDYkUsSUFBSSxDQUFDQyxRQUFRLElBQUk7RUFBQyxPQUFPQSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO0FBQUEsQ0FBQyxDQUFDLENBQzFDRixJQUFJLENBQUNHLElBQUksSUFBSTtFQUFDUixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sSUFBSSxDQUFDO0FBQUEsQ0FBQyxDQUFDOztBQUd0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xpcF9vZl90aGVfaGFuZC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmltcG9ydCB7IGZuMSB9IGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZS5qc1wiXG5pbXBvcnQgV29yZCBmcm9tIFwiLi9zY3JpcHRzL3dvcmQuanNcIlxuXG5jb25zb2xlLmxvZyhcImVudHJ5IHBvaW50IHdvcmtpbmchXCIpXG5mbjEoKVxuXG5cbmxldCB3b3JkID0gbmV3IFdvcmQoXCJmcmllbmRseVwiKTtcblxuY29uc3QgZGF0YU11c2VVcmwgPSBcImh0dHBzOi8vYXBpLmRhdGFtdXNlLmNvbS93b3Jkcz9zcD1icmlnKlwiXG5mZXRjaChkYXRhTXVzZVVybClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7cmV0dXJuIHJlc3BvbnNlLmpzb24oKX0pXG4gICAgLnRoZW4oZGF0YSA9PiB7Y29uc29sZS5sb2coZGF0YSl9KVxuXG5cbi8vIGNvbnNvbGUubG9nKHdvcmQpXG4vLyBjb25zb2xlLmxvZyh3b3JkLktFWUJPQVJEKVxuLy8gY29uc3QgY2hvcHBlZCA9IHdvcmQudG9GdWxsUGF0dGVybigpXG4vLyBjb25zb2xlLmxvZyhcIndvcmRcIilcbi8vIGNvbnNvbGUubG9nKHdvcmQudmFsdWUpXG4vLyBjb25zb2xlLmxvZyhcImxlZnRcIilcbi8vIGNvbnNvbGUubG9nKHdvcmQudG9MZWZ0UGF0dGVybigpKVxuLy8gY29uc29sZS5sb2coXCJyaWdodCBwYXR0ZXJuXCIpXG4vLyBjb25zdCByaWdodFBhdHRlcm4gPSB3b3JkLnRvUmlnaHRQYXR0ZXJuKCk7XG4vLyBjb25zb2xlLmxvZyhyaWdodFBhdHRlcm4pO1xuLy8gY29uc29sZS5sb2cod29yZC5hbGxSaWdodFBhdHRlcm5zKCkpXG5cblxuIl0sIm5hbWVzIjpbImZuMSIsIldvcmQiLCJjb25zb2xlIiwibG9nIiwid29yZCIsImRhdGFNdXNlVXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\nclass Word {\n  KEYBOARD = [\"1234567890-=\".split(\"\"), [\"tab\"].concat(\"QWERTYUIOP[]\".split(\"\")), [\"caps lock\"].concat(\"ASDFGHJKL;'\".split(\"\")), [\"shift\"].concat(\"ZXCVBNM,./\".split(\"\")).concat([\"shift\"])];\n  DIRS = [[-1, 1], [0, 1], [1, 1], [-1, 0], [0, 0], [-1, 0], [-1, -1], [0, -1], [1, -1]];\n  constructor(value) {\n    this.value = value.toUpperCase();\n    this.positionArr = this.toFullPattern();\n  }\n  toFullPattern() {\n    const positionArr = [];\n    let arr = [];\n    arr = this.value.split(\"\");\n    for (let i = 0; i < arr.length; i++) {\n      for (let j = 0; j < 4; j++) {\n        for (let k = 0; k < this.KEYBOARD[j].length; k++) {\n          if (arr[i] === this.KEYBOARD[j][k]) {\n            positionArr.push([j, k]);\n          }\n        }\n      }\n    }\n    return positionArr;\n  }\n  toRightPattern() {\n    const rightPattern = [];\n    for (let i = 0; i < this.positionArr.length; i++) {\n      if (this.positionArr[i][1] > 5) {\n        rightPattern[i] = this.positionArr[i];\n      }\n    }\n    return rightPattern;\n  }\n  toLeftPattern() {\n    const leftPattern = {};\n    for (let i = 0; i < this.positionArr.length; i++) {\n      if (this.positionArr[i][1] <= 5) {\n        leftPattern[i] = this.positionArr[i];\n      }\n    }\n    return leftPattern;\n  }\n  allRightPatterns = () => {\n    const rightPattern = this.toRightPattern();\n    const allRightPatterns = [];\n    let subArr = [];\n    this.DIRS.forEach(dir => {\n      for (let i = 0; i < rightPattern.length; i++) {\n        debugger;\n        if (rightPattern[i] === undefined) {\n          subArr[i] = undefined;\n        } else {\n          subArr[i] = [rightPattern[i][0] + dir[0], rightPattern[i][1] + dir[1]];\n        }\n      }\n      allRightPatterns.push(subArr);\n    });\n    return allRightPatterns;\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Word);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLENBQUM7SUFDRixPQUFPRCxnQkFBZ0I7RUFDM0IsQ0FBQztBQUNMO0FBSUEsK0RBQWVwQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xpcF9vZl90aGVfaGFuZC8uL3NyYy9zY3JpcHRzL3dvcmQuanM/ODcyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5jbGFzcyBXb3JkIHtcbiAgICBcbiAgICBLRVlCT0FSRCAgPSBbXCIxMjM0NTY3ODkwLT1cIi5zcGxpdChcIlwiKSxcbiAgICAgICAgICAgICAgICBbXCJ0YWJcIl0uY29uY2F0KFwiUVdFUlRZVUlPUFtdXCIuc3BsaXQoXCJcIikpLCBcbiAgICAgICAgICAgICAgICBbXCJjYXBzIGxvY2tcIl0uY29uY2F0KFwiQVNERkdISktMOydcIi5zcGxpdChcIlwiKSksIFxuICAgICAgICAgICAgICAgIFtcInNoaWZ0XCJdLmNvbmNhdChcIlpYQ1ZCTk0sLi9cIi5zcGxpdChcIlwiKSkuY29uY2F0KFtcInNoaWZ0XCJdKVxuICAgICAgICAgICAgICAgIF1cblxuICAgIERJUlMgPSBbWy0xLCAxXSwgWzAsIDFdLCBbMSwgMV0sXG4gICAgICAgICAgICBbLTEsIDBdLCBbMCwwXSwgWy0xLCAwXSxcbiAgICAgICAgICAgIFstMSwgLTFdLCBbMCwgLTFdLCBbMSwgLTFdXTtcbiAgICAgICAgICAgXG4gICAgXG4gICAgY29uc3RydWN0b3IodmFsdWUpe1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbkFyciA9IHRoaXMudG9GdWxsUGF0dGVybigpO1xuICAgIH1cblxuICAgIHRvRnVsbFBhdHRlcm4oKSB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uQXJyID0gW107XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgYXJyID0gdGhpcy52YWx1ZS5zcGxpdChcIlwiKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8NDsgaisrKXtcbiAgICAgIFxuICAgICAgICAgICAgICAgIGZvcihsZXQgayA9IDA7IGs8KHRoaXMuS0VZQk9BUkRbal0ubGVuZ3RoKTsgaysrKXtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyW2ldID09PSB0aGlzLktFWUJPQVJEW2pdW2tdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQXJyLnB1c2goW2osa10pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uQXJyO1xuICAgIH1cblxuICAgIHRvUmlnaHRQYXR0ZXJuKCl7XG4gICAgICAgIGNvbnN0IHJpZ2h0UGF0dGVybiA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5wb3NpdGlvbkFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbkFycltpXVsxXT41KXtcbiAgICAgICAgICAgICAgICByaWdodFBhdHRlcm5baV0gPSB0aGlzLnBvc2l0aW9uQXJyW2ldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJpZ2h0UGF0dGVybjtcbiAgICB9XG5cblxuICAgIHRvTGVmdFBhdHRlcm4oKXtcbiAgICAgICAgY29uc3QgbGVmdFBhdHRlcm4gPSB7fTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLnBvc2l0aW9uQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uQXJyW2ldWzFdPD01KXtcbiAgICAgICAgICAgICAgICBsZWZ0UGF0dGVybltpXSA9IHRoaXMucG9zaXRpb25BcnJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnRQYXR0ZXJuO1xuICAgIH1cblxuXG4gICAgYWxsUmlnaHRQYXR0ZXJucyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmlnaHRQYXR0ZXJuID0gdGhpcy50b1JpZ2h0UGF0dGVybigpO1xuICAgICAgICBjb25zdCBhbGxSaWdodFBhdHRlcm5zID0gW107XG4gICAgICAgIGxldCBzdWJBcnIgPSBbXTtcblxuXG5cbiAgICAgICAgdGhpcy5ESVJTLmZvckVhY2goKGRpcikgPT4ge1xuXG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IHJpZ2h0UGF0dGVybi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0UGF0dGVybltpXSA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgc3ViQXJyW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YkFycltpXSA9IChbcmlnaHRQYXR0ZXJuW2ldWzBdK2RpclswXSwgcmlnaHRQYXR0ZXJuW2ldWzFdK2RpclsxXV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsbFJpZ2h0UGF0dGVybnMucHVzaChzdWJBcnIpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhbGxSaWdodFBhdHRlcm5zO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFdvcmQ7Il0sIm5hbWVzIjpbIldvcmQiLCJLRVlCT0FSRCIsInNwbGl0IiwiY29uY2F0IiwiRElSUyIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInBvc2l0aW9uQXJyIiwidG9GdWxsUGF0dGVybiIsImFyciIsImkiLCJsZW5ndGgiLCJqIiwiayIsInB1c2giLCJ0b1JpZ2h0UGF0dGVybiIsInJpZ2h0UGF0dGVybiIsInRvTGVmdFBhdHRlcm4iLCJsZWZ0UGF0dGVybiIsImFsbFJpZ2h0UGF0dGVybnMiLCJzdWJBcnIiLCJmb3JFYWNoIiwiZGlyIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/word.js\n");

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