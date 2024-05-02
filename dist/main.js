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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example.js */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_word_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/word.js */ \"./src/scripts/word.js\");\n\n\nconsole.log(\"entry point working!\");\n(0,_scripts_example_js__WEBPACK_IMPORTED_MODULE_0__.fn1)();\nlet word = new _scripts_word_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"frozen\");\n\n// const dataMuseUrl = \"https://api.datamuse.com/words?sp=brig*\"\n// fetch(dataMuseUrl)\n//     .then(response => {return response.json()})\n//     .then(data => {console.log(data)})\n\n// console.log(word)\n// console.log(word.KEYBOARD)\n// const chopped = word.toFullPattern()\n// console.log(\"word\")\n// console.log(word.value)\n// console.log(\"left\")\n// console.log(word.toLeftPattern())\n// console.log(\"right pattern\")\n// const rightPattern = word.toRightPattern();\n// console.log(rightPattern);\n\nlet alp = word.allLeftPatterns();\nlet arp = word.allRightPatterns();\nconsole.log(arp);\nconsole.log(alp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBRzBDO0FBQ047QUFFcENFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0FBQ25DSCx3REFBRyxDQUFDLENBQUM7QUFHTCxJQUFJSSxJQUFJLEdBQUcsSUFBSUgsd0RBQUksQ0FBQyxRQUFRLENBQUM7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQUlJLEdBQUcsR0FBR0QsSUFBSSxDQUFDRSxlQUFlLENBQUMsQ0FBQztBQUNoQyxJQUFJQyxHQUFHLEdBQUdILElBQUksQ0FBQ0ksZ0JBQWdCLENBQUMsQ0FBQztBQUNqQ04sT0FBTyxDQUFDQyxHQUFHLENBQUNJLEdBQUcsQ0FBQztBQUNoQkwsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NsaXBfb2ZfdGhlX2hhbmQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5pbXBvcnQgeyBmbjEgfSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGUuanNcIlxuaW1wb3J0IFdvcmQgZnJvbSBcIi4vc2NyaXB0cy93b3JkLmpzXCJcblxuY29uc29sZS5sb2coXCJlbnRyeSBwb2ludCB3b3JraW5nIVwiKVxuZm4xKClcblxuXG5sZXQgd29yZCA9IG5ldyBXb3JkKFwiZnJvemVuXCIpO1xuXG4vLyBjb25zdCBkYXRhTXVzZVVybCA9IFwiaHR0cHM6Ly9hcGkuZGF0YW11c2UuY29tL3dvcmRzP3NwPWJyaWcqXCJcbi8vIGZldGNoKGRhdGFNdXNlVXJsKVxuLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHtyZXR1cm4gcmVzcG9uc2UuanNvbigpfSlcbi8vICAgICAudGhlbihkYXRhID0+IHtjb25zb2xlLmxvZyhkYXRhKX0pXG5cblxuLy8gY29uc29sZS5sb2cod29yZClcbi8vIGNvbnNvbGUubG9nKHdvcmQuS0VZQk9BUkQpXG4vLyBjb25zdCBjaG9wcGVkID0gd29yZC50b0Z1bGxQYXR0ZXJuKClcbi8vIGNvbnNvbGUubG9nKFwid29yZFwiKVxuLy8gY29uc29sZS5sb2cod29yZC52YWx1ZSlcbi8vIGNvbnNvbGUubG9nKFwibGVmdFwiKVxuLy8gY29uc29sZS5sb2cod29yZC50b0xlZnRQYXR0ZXJuKCkpXG4vLyBjb25zb2xlLmxvZyhcInJpZ2h0IHBhdHRlcm5cIilcbi8vIGNvbnN0IHJpZ2h0UGF0dGVybiA9IHdvcmQudG9SaWdodFBhdHRlcm4oKTtcbi8vIGNvbnNvbGUubG9nKHJpZ2h0UGF0dGVybik7XG5cblxuXG5sZXQgYWxwID0gd29yZC5hbGxMZWZ0UGF0dGVybnMoKTtcbmxldCBhcnAgPSB3b3JkLmFsbFJpZ2h0UGF0dGVybnMoKTtcbmNvbnNvbGUubG9nKGFycClcbmNvbnNvbGUubG9nKGFscClcblxuXG5cbiJdLCJuYW1lcyI6WyJmbjEiLCJXb3JkIiwiY29uc29sZSIsImxvZyIsIndvcmQiLCJhbHAiLCJhbGxMZWZ0UGF0dGVybnMiLCJhcnAiLCJhbGxSaWdodFBhdHRlcm5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\nclass Word {\n  KEYBOARD = [\"1234567890-=\".split(\"\"), [\"tab\"].concat(\"QWERTYUIOP[]\".split(\"\")), [\"caps lock\"].concat(\"ASDFGHJKL;'\".split(\"\")), [\"shift\"].concat(\"ZXCVBNM,./\".split(\"\")).concat([\"shift\"])];\n  DIRS = [[-1, 1], [0, 1], [1, 1], [-1, 0], [0, 0], [-1, 0], [-1, -1], [0, -1], [1, -1]];\n  constructor(value) {\n    this.value = value.toUpperCase();\n    this.positionArr = this.toFullPattern();\n  }\n  toFullPattern() {\n    const positionArr = [];\n    let arr = [];\n    arr = this.value.split(\"\");\n    for (let i = 0; i < arr.length; i++) {\n      for (let j = 0; j < 4; j++) {\n        for (let k = 0; k < this.KEYBOARD[j].length; k++) {\n          if (arr[i] === this.KEYBOARD[j][k]) {\n            positionArr.push([j, k]);\n          }\n        }\n      }\n    }\n    return positionArr;\n  }\n  toRightPattern() {\n    const rightPattern = [];\n    for (let i = 0; i < this.positionArr.length; i++) {\n      if (this.positionArr[i][1] > 5) {\n        rightPattern[i] = this.positionArr[i];\n      } else {\n        rightPattern[i] = undefined;\n      }\n    }\n    return rightPattern;\n  }\n  toLeftPattern() {\n    const leftPattern = [];\n    for (let i = 0; i < this.positionArr.length; i++) {\n      if (this.positionArr[i][1] <= 5) {\n        leftPattern[i] = this.positionArr[i];\n      } else {\n        leftPattern[i] = undefined;\n      }\n    }\n    debugger;\n    return leftPattern;\n  }\n  allRightPatterns = () => {\n    const rightPattern = this.toRightPattern();\n    const allTheRightPatterns = [];\n    debugger;\n    this.DIRS.forEach(dir => {\n      let subArr = [];\n      for (let i = 0; i < rightPattern.length; i++) {\n        debugger;\n        if (rightPattern[i] === undefined) {\n          subArr[i] = undefined;\n        } else {\n          subArr[i] = [rightPattern[i][0] + dir[0], rightPattern[i][1] + dir[1]];\n        }\n      }\n      allTheRightPatterns.push(subArr);\n    });\n    return allTheRightPatterns;\n  };\n  allLeftPatterns = () => {\n    const leftPattern = this.toLeftPattern();\n    const allTheLeftPatterns = [];\n    this.DIRS.forEach(dir => {\n      let subArr = [];\n      debugger;\n      for (let i = 0; i < leftPattern.length; i++) {\n        if (leftPattern[i] === undefined) {\n          subArr[i] = undefined;\n        } else {\n          subArr[i] = [leftPattern[i][0] + dir[0], leftPattern[i][1] + dir[1]];\n        }\n      }\n      allTheLeftPatterns.push(subArr);\n    });\n    return allTheLeftPatterns;\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Word);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93b3JkLmpzIiwibWFwcGluZ3MiOiI7QUFHQSxNQUFNQSxJQUFJLENBQUM7RUFFUEMsUUFBUSxHQUFJLENBQUMsY0FBYyxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQ3pCLENBQUMsS0FBSyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxjQUFjLENBQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUN4QyxDQUFDLFdBQVcsQ0FBQyxDQUFDQyxNQUFNLENBQUMsYUFBYSxDQUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDN0MsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQ3pEO0VBRWJDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3ZCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUduQ0MsV0FBV0EsQ0FBQ0MsS0FBSyxFQUFDO0lBQ2QsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQztFQUMzQztFQUVBQSxhQUFhQSxDQUFBLEVBQUc7SUFDWixNQUFNRCxXQUFXLEdBQUcsRUFBRTtJQUN0QixJQUFJRSxHQUFHLEdBQUcsRUFBRTtJQUNaQSxHQUFHLEdBQUcsSUFBSSxDQUFDSixLQUFLLENBQUNKLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDMUIsS0FBSyxJQUFJUyxDQUFDLEdBQUMsQ0FBQyxFQUFFQSxDQUFDLEdBQUVELEdBQUcsQ0FBQ0UsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBQztNQUU3QixLQUFLLElBQUlFLENBQUMsR0FBQyxDQUFDLEVBQUVBLENBQUMsR0FBQyxDQUFDLEVBQUVBLENBQUMsRUFBRSxFQUFDO1FBRW5CLEtBQUksSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFFLElBQUksQ0FBQ2IsUUFBUSxDQUFDWSxDQUFDLENBQUMsQ0FBQ0QsTUFBTyxFQUFFRSxDQUFDLEVBQUUsRUFBQztVQUU1QyxJQUFHSixHQUFHLENBQUNDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQ1YsUUFBUSxDQUFDWSxDQUFDLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEVBQUM7WUFDOUJOLFdBQVcsQ0FBQ08sSUFBSSxDQUFDLENBQUNGLENBQUMsRUFBQ0MsQ0FBQyxDQUFDLENBQUM7VUFDM0I7UUFDSjtNQUNKO0lBQ0o7SUFDQSxPQUFPTixXQUFXO0VBQ3RCO0VBRUFRLGNBQWNBLENBQUEsRUFBRTtJQUNaLE1BQU1DLFlBQVksR0FBRyxFQUFFO0lBRXZCLEtBQUksSUFBSU4sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFDLElBQUksQ0FBQ0gsV0FBVyxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFDO01BQzFDLElBQUksSUFBSSxDQUFDSCxXQUFXLENBQUNHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBQztRQUN6Qk0sWUFBWSxDQUFDTixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNILFdBQVcsQ0FBQ0csQ0FBQyxDQUFDO01BQ3pDLENBQUMsTUFBTTtRQUNITSxZQUFZLENBQUNOLENBQUMsQ0FBQyxHQUFHTyxTQUFTO01BQy9CO0lBQ0o7SUFFQSxPQUFPRCxZQUFZO0VBQ3ZCO0VBR0FFLGFBQWFBLENBQUEsRUFBRTtJQUNYLE1BQU1DLFdBQVcsR0FBRyxFQUFFO0lBQ3RCLEtBQUksSUFBSVQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFDLElBQUksQ0FBQ0gsV0FBVyxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFDO01BQzFDLElBQUksSUFBSSxDQUFDSCxXQUFXLENBQUNHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFFLENBQUMsRUFBQztRQUMxQlMsV0FBVyxDQUFDVCxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNILFdBQVcsQ0FBQ0csQ0FBQyxDQUFDO01BQ3hDLENBQUMsTUFBTTtRQUNIUyxXQUFXLENBQUNULENBQUMsQ0FBQyxHQUFHTyxTQUFTO01BQzlCO0lBQ0o7SUFDQTtJQUNBLE9BQU9FLFdBQVc7RUFDdEI7RUFHQUMsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTTtJQUNyQixNQUFNSixZQUFZLEdBQUcsSUFBSSxDQUFDRCxjQUFjLENBQUMsQ0FBQztJQUMxQyxNQUFNTSxtQkFBbUIsR0FBRyxFQUFFO0lBQzlCO0lBRUEsSUFBSSxDQUFDbEIsSUFBSSxDQUFDbUIsT0FBTyxDQUFFQyxHQUFHLElBQUs7TUFDdkIsSUFBSUMsTUFBTSxHQUFHLEVBQUU7TUFDZixLQUFJLElBQUlkLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRU0sWUFBWSxDQUFDTCxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFDO1FBQ3ZDO1FBQ0EsSUFBSU0sWUFBWSxDQUFDTixDQUFDLENBQUMsS0FBS08sU0FBUyxFQUFDO1VBQzlCTyxNQUFNLENBQUNkLENBQUMsQ0FBQyxHQUFHTyxTQUFTO1FBQ3pCLENBQUMsTUFBTTtVQUNITyxNQUFNLENBQUNkLENBQUMsQ0FBQyxHQUFJLENBQUNNLFlBQVksQ0FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUNhLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRVAsWUFBWSxDQUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ2EsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFO1FBQ3hFO01BQ0o7TUFDQUYsbUJBQW1CLENBQUNQLElBQUksQ0FBQ1UsTUFBTSxDQUFDO0lBQ3BDLENBQUMsQ0FBQztJQUNGLE9BQU9ILG1CQUFtQjtFQUM5QixDQUFDO0VBRURJLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0lBQ3BCLE1BQU1OLFdBQVcsR0FBRyxJQUFJLENBQUNELGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLE1BQU1RLGtCQUFrQixHQUFHLEVBQUU7SUFFN0IsSUFBSSxDQUFDdkIsSUFBSSxDQUFDbUIsT0FBTyxDQUFFQyxHQUFHLElBQUs7TUFDdkIsSUFBSUMsTUFBTSxHQUFHLEVBQUU7TUFDZjtNQUVBLEtBQUksSUFBSWQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFFUyxXQUFXLENBQUNSLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUM7UUFDdEMsSUFBSVMsV0FBVyxDQUFDVCxDQUFDLENBQUMsS0FBS08sU0FBUyxFQUFDO1VBQzdCTyxNQUFNLENBQUNkLENBQUMsQ0FBQyxHQUFHTyxTQUFTO1FBQ3pCLENBQUMsTUFBTTtVQUNITyxNQUFNLENBQUNkLENBQUMsQ0FBQyxHQUFJLENBQUNTLFdBQVcsQ0FBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUNhLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRUosV0FBVyxDQUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQ2EsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFO1FBQ3RFO01BQ0o7TUFDQUcsa0JBQWtCLENBQUNaLElBQUksQ0FBQ1UsTUFBTSxDQUFDO0lBQ25DLENBQUMsQ0FBQztJQUNGLE9BQU9FLGtCQUFrQjtFQUM3QixDQUFDO0FBSUw7QUFJQSwrREFBZTNCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGlwX29mX3RoZV9oYW5kLy4vc3JjL3NjcmlwdHMvd29yZC5qcz84NzIyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmNsYXNzIFdvcmQge1xuICAgIFxuICAgIEtFWUJPQVJEICA9IFtcIjEyMzQ1Njc4OTAtPVwiLnNwbGl0KFwiXCIpLFxuICAgICAgICAgICAgICAgIFtcInRhYlwiXS5jb25jYXQoXCJRV0VSVFlVSU9QW11cIi5zcGxpdChcIlwiKSksIFxuICAgICAgICAgICAgICAgIFtcImNhcHMgbG9ja1wiXS5jb25jYXQoXCJBU0RGR0hKS0w7J1wiLnNwbGl0KFwiXCIpKSwgXG4gICAgICAgICAgICAgICAgW1wic2hpZnRcIl0uY29uY2F0KFwiWlhDVkJOTSwuL1wiLnNwbGl0KFwiXCIpKS5jb25jYXQoW1wic2hpZnRcIl0pXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgRElSUyA9IFtbLTEsIDFdLCBbMCwgMV0sIFsxLCAxXSxcbiAgICAgICAgICAgIFstMSwgMF0sIFswLDBdLCBbLTEsIDBdLFxuICAgICAgICAgICAgWy0xLCAtMV0sIFswLCAtMV0sIFsxLCAtMV1dO1xuICAgICAgICAgICBcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSl7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uQXJyID0gdGhpcy50b0Z1bGxQYXR0ZXJuKCk7XG4gICAgfVxuXG4gICAgdG9GdWxsUGF0dGVybigpIHtcbiAgICAgICAgY29uc3QgcG9zaXRpb25BcnIgPSBbXTtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBhcnIgPSB0aGlzLnZhbHVlLnNwbGl0KFwiXCIpO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICBcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajw0OyBqKyspe1xuICAgICAgXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrID0gMDsgazwodGhpcy5LRVlCT0FSRFtqXS5sZW5ndGgpOyBrKyspe1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihhcnJbaV0gPT09IHRoaXMuS0VZQk9BUkRbal1ba10pe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25BcnIucHVzaChbaixrXSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zaXRpb25BcnI7XG4gICAgfVxuXG4gICAgdG9SaWdodFBhdHRlcm4oKXtcbiAgICAgICAgY29uc3QgcmlnaHRQYXR0ZXJuID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLnBvc2l0aW9uQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uQXJyW2ldWzFdPjUpe1xuICAgICAgICAgICAgICAgIHJpZ2h0UGF0dGVybltpXSA9IHRoaXMucG9zaXRpb25BcnJbaV1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmlnaHRQYXR0ZXJuW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICBcbiAgICAgICAgcmV0dXJuIHJpZ2h0UGF0dGVybjtcbiAgICB9XG5cblxuICAgIHRvTGVmdFBhdHRlcm4oKXtcbiAgICAgICAgY29uc3QgbGVmdFBhdHRlcm4gPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLnBvc2l0aW9uQXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uQXJyW2ldWzFdPD01KXtcbiAgICAgICAgICAgICAgICBsZWZ0UGF0dGVybltpXSA9IHRoaXMucG9zaXRpb25BcnJbaV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxlZnRQYXR0ZXJuW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICByZXR1cm4gbGVmdFBhdHRlcm47XG4gICAgfVxuXG5cbiAgICBhbGxSaWdodFBhdHRlcm5zID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByaWdodFBhdHRlcm4gPSB0aGlzLnRvUmlnaHRQYXR0ZXJuKCk7XG4gICAgICAgIGNvbnN0IGFsbFRoZVJpZ2h0UGF0dGVybnMgPSBbXTtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLkRJUlMuZm9yRWFjaCgoZGlyKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3ViQXJyID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPCByaWdodFBhdHRlcm4ubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIGlmIChyaWdodFBhdHRlcm5baV0gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHN1YkFycltpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJBcnJbaV0gPSAoW3JpZ2h0UGF0dGVybltpXVswXStkaXJbMF0sIHJpZ2h0UGF0dGVybltpXVsxXStkaXJbMV1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGxUaGVSaWdodFBhdHRlcm5zLnB1c2goc3ViQXJyKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWxsVGhlUmlnaHRQYXR0ZXJucztcbiAgICB9XG5cbiAgICBhbGxMZWZ0UGF0dGVybnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlZnRQYXR0ZXJuID0gdGhpcy50b0xlZnRQYXR0ZXJuKCk7XG4gICAgICAgIGNvbnN0IGFsbFRoZUxlZnRQYXR0ZXJucyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5ESVJTLmZvckVhY2goKGRpcikgPT4ge1xuICAgICAgICAgICAgbGV0IHN1YkFyciA9IFtdO1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8IGxlZnRQYXR0ZXJuLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZiAobGVmdFBhdHRlcm5baV0gPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgIHN1YkFycltpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWJBcnJbaV0gPSAoW2xlZnRQYXR0ZXJuW2ldWzBdK2RpclswXSwgbGVmdFBhdHRlcm5baV1bMV0rZGlyWzFdXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxsVGhlTGVmdFBhdHRlcm5zLnB1c2goc3ViQXJyKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYWxsVGhlTGVmdFBhdHRlcm5zO1xuICAgIH1cblxuXG4gIFxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgV29yZDsiXSwibmFtZXMiOlsiV29yZCIsIktFWUJPQVJEIiwic3BsaXQiLCJjb25jYXQiLCJESVJTIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsInRvVXBwZXJDYXNlIiwicG9zaXRpb25BcnIiLCJ0b0Z1bGxQYXR0ZXJuIiwiYXJyIiwiaSIsImxlbmd0aCIsImoiLCJrIiwicHVzaCIsInRvUmlnaHRQYXR0ZXJuIiwicmlnaHRQYXR0ZXJuIiwidW5kZWZpbmVkIiwidG9MZWZ0UGF0dGVybiIsImxlZnRQYXR0ZXJuIiwiYWxsUmlnaHRQYXR0ZXJucyIsImFsbFRoZVJpZ2h0UGF0dGVybnMiLCJmb3JFYWNoIiwiZGlyIiwic3ViQXJyIiwiYWxsTGVmdFBhdHRlcm5zIiwiYWxsVGhlTGVmdFBhdHRlcm5zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/word.js\n");

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