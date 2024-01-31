/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ car)\n/* harmony export */ });\nclass car {\r\n    constructor(id, make, model, year)\r\n    {\r\n     this.id = id;\r\n     this.make = make;\r\n     this.model = model;\r\n     this.year = year;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\nconsole.log(\"Hello World\");\r\n\r\n\r\n// Exercise 5\r\nlet vfrmCar = document.getElementById(\"submitForm\");\r\nlet vinpMake = document.getElementById(\"makeInput\");\r\nlet vinpModel = document.getElementById(\"modelInput\");\r\nlet vinpYear = document.getElementById(\"yearInput\");\r\nlet vparMake = document.getElementById(\"car-make\");\r\nlet vparModel = document.getElementById(\"car-model\");\r\nlet vparYear = document.getElementById(\"car-year\");\r\nlet vbtnRemove = document.getElementById(\"remButton\");\r\nlet vul_List = document.getElementById(\"wishlist-ul\");\r\n\r\nvfrmCar.addEventListener(\"submit\", (event) => {addCar(event)});\r\n//document.getElementById(\"remButton\").addEventListener(\"click\", (event) => {removeCar(event)});\r\nvbtnRemove.addEventListener(\"click\", (event) => {removeCar(event)});\r\nlet myWishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n//Exercise 6\r\nfunction showCarDetails(car) {\r\n    vparMake.textContent = car.make;\r\n    vparModel.textContent = car.model;\r\n    vparYear.textContent = car.year;\r\n    vbtnRemove.disabled = false;\r\n    vbtnRemove.setAttribute(\"data-carId\", car.id);\r\n}\r\n\r\n//Exercise 7\r\nfunction updateDOMList() {\r\n    vul_List.innerHTML = \"\";\r\n    myWishlist.list.forEach(car => {\r\n      const tmpLI = document.createElement(\"li\");\r\n      tmpLI.textContent = `${car.make} ${car.model}`;\r\n      tmpLI.addEventListener(\"click\", (event) => showCarDetails(car));\r\n      vul_List.appendChild(tmpLI);\r\n    })}\r\n\r\n//Exersize 8\r\nfunction addCar(event) {\r\n        event.preventDefault(); \r\n        myWishlist.add(vinpMake.value, vinpModel.value, vinpYear.value);\r\n        updateDOMList();\r\n        vinpMake.value = \"\";\r\n        vinpModel.value = \"\";\r\n        vinpYear.value = \"\";\r\n      }\r\n\r\n//Exercise 9\r\nfunction removeCar(event) {\r\n    const carID = Number(vbtnRemove.getAttribute(\"data-carId\"));\r\n    myWishlist.remove(carID);\r\n    updateDOMList();\r\n    vparMake.textContent = \"\";\r\n    vparModel.textContent = \"\";\r\n    vparYear.textContent = \"\";\r\n    vbtnRemove.disabled = true;\r\n}      \r\n\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ wishlist)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\r\n\r\nclass wishlist {\r\n    constructor()\r\n    {\r\n        this.list = [];\r\n        this.nextId = 0;\r\n    }\r\n    add(make, model, year)\r\n      {\r\n      const newCar = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](++this.nextId, make, model, year);\r\n      this.list.push(newCar);\r\n      }\r\n    remove(carId)\r\n        {\r\n         const cintLoc = this.list.findIndex(car => car.id == carId);\r\n         if (cintLoc > -1) \r\n            {this.list.splice(cintLoc,1)};\r\n        }\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;