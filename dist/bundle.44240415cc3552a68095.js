/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/modules/Ship.js");


class Gameboard {
  grid = Gameboard.createGrid();

  static createGrid() {
    const array = new Array(1);
    for (let i = 0; i < 5; i++) {
      array[i] = new Array(5);
    }
    return array;
  }

  placeShip(x, y, length) {
    const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
    ship.shipType();

    for (let i = 0; i < length; i++) {
      this.grid[x][y + i] = ship;
    }

    console.log('Ship placed');
  }

  receiveAttack(x, y) {
    let target = this.grid[x][y];

    if (target === undefined) {
      console.log(`Hit water at x:${x}, y:${y}.`);
      target = 'x';
      return;
    }

    if (target.sank === true) {
      console.log(`Ship at x:${x}, y:${y} already sank.`);
      return;
    }

    if (target !== undefined) {
      console.log(`Hit ${target.type} at x:${x}, y:${y}!`);

      target.hit();
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
  }

  type = this.shipType();

  timesHit = 0;

  sank = false;

  hit() {
    this.timesHit += 1;
    if (this.timesHit === this.length) {
      this.isSunk();
    }
  }

  isSunk() {
    this.sank = true;
    console.log(`${this.type} destroyed!`);
  }

  shipType() {
    const shipSizes = {
      1: 'Patrol Boat',
      2: 'Cruiser',
      3: 'Submarine',
      4: 'Battleship',
      5: 'Carrier',
    };

    if (this.length >= 1 && this.length <= 5) {
      console.log(`Ship size: ${this.length}`);

      this.type = shipSizes[this.length];
    }

    if (this.length > 5) {
      console.log('Invalid ship size');
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Ship */ "./src/modules/Ship.js");
/* harmony import */ var _modules_Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Gameboard */ "./src/modules/Gameboard.js");
// import 'normalize.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import './style.css';



// const testBoard1 = new Gameboard();

// testBoard1.placeShip(0, 0, 1);

// testBoard1.placeShip(1, 1, 2);

// testBoard1.placeShip(2, 2, 3);

// testBoard1.receiveAttack(0, 0);
// testBoard1.receiveAttack(1, 1);
// testBoard1.receiveAttack(1, 1);
// testBoard1.receiveAttack(3, 3);

// console.log(testBoard1.grid);

// const testBoard2 = new Gameboard();
// testBoard2.placeShip(2, 0, 2);

// testBoard2.receiveAttack(2, 0);

// console.log(testBoard2.grid);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjQ0MjQwNDE1Y2MzNTUyYTY4MDk1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsNkNBQUk7QUFDekI7O0FBRUEsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsRUFBRSxNQUFNLEVBQUU7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLEVBQUUsTUFBTSxHQUFHO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsYUFBYSxPQUFPLEVBQUUsTUFBTSxFQUFFOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLFlBQVk7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUM1Q3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ2tDO0FBQ1U7O0FBRTVDOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGdyaWQgPSBHYW1lYm9hcmQuY3JlYXRlR3JpZCgpO1xuXG4gIHN0YXRpYyBjcmVhdGVHcmlkKCkge1xuICAgIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KDEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBhcnJheVtpXSA9IG5ldyBBcnJheSg1KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgcGxhY2VTaGlwKHgsIHksIGxlbmd0aCkge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgIHNoaXAuc2hpcFR5cGUoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5ICsgaV0gPSBzaGlwO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdTaGlwIHBsYWNlZCcpO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgbGV0IHRhcmdldCA9IHRoaXMuZ3JpZFt4XVt5XTtcblxuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coYEhpdCB3YXRlciBhdCB4OiR7eH0sIHk6JHt5fS5gKTtcbiAgICAgIHRhcmdldCA9ICd4JztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LnNhbmsgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBTaGlwIGF0IHg6JHt4fSwgeToke3l9IGFscmVhZHkgc2Fuay5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBIaXQgJHt0YXJnZXQudHlwZX0gYXQgeDoke3h9LCB5OiR7eX0hYCk7XG5cbiAgICAgIHRhcmdldC5oaXQoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgdHlwZSA9IHRoaXMuc2hpcFR5cGUoKTtcblxuICB0aW1lc0hpdCA9IDA7XG5cbiAgc2FuayA9IGZhbHNlO1xuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgaWYgKHRoaXMudGltZXNIaXQgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICB0aGlzLnNhbmsgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMudHlwZX0gZGVzdHJveWVkIWApO1xuICB9XG5cbiAgc2hpcFR5cGUoKSB7XG4gICAgY29uc3Qgc2hpcFNpemVzID0ge1xuICAgICAgMTogJ1BhdHJvbCBCb2F0JyxcbiAgICAgIDI6ICdDcnVpc2VyJyxcbiAgICAgIDM6ICdTdWJtYXJpbmUnLFxuICAgICAgNDogJ0JhdHRsZXNoaXAnLFxuICAgICAgNTogJ0NhcnJpZXInLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPj0gMSAmJiB0aGlzLmxlbmd0aCA8PSA1KSB7XG4gICAgICBjb25zb2xlLmxvZyhgU2hpcCBzaXplOiAke3RoaXMubGVuZ3RofWApO1xuXG4gICAgICB0aGlzLnR5cGUgPSBzaGlwU2l6ZXNbdGhpcy5sZW5ndGhdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxlbmd0aCA+IDUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIHNoaXAgc2l6ZScpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuLy8gaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vbW9kdWxlcy9TaGlwJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9tb2R1bGVzL0dhbWVib2FyZCc7XG5cbi8vIGNvbnN0IHRlc3RCb2FyZDEgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbi8vIHRlc3RCb2FyZDEucGxhY2VTaGlwKDAsIDAsIDEpO1xuXG4vLyB0ZXN0Qm9hcmQxLnBsYWNlU2hpcCgxLCAxLCAyKTtcblxuLy8gdGVzdEJvYXJkMS5wbGFjZVNoaXAoMiwgMiwgMyk7XG5cbi8vIHRlc3RCb2FyZDEucmVjZWl2ZUF0dGFjaygwLCAwKTtcbi8vIHRlc3RCb2FyZDEucmVjZWl2ZUF0dGFjaygxLCAxKTtcbi8vIHRlc3RCb2FyZDEucmVjZWl2ZUF0dGFjaygxLCAxKTtcbi8vIHRlc3RCb2FyZDEucmVjZWl2ZUF0dGFjaygzLCAzKTtcblxuLy8gY29uc29sZS5sb2codGVzdEJvYXJkMS5ncmlkKTtcblxuLy8gY29uc3QgdGVzdEJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoKTtcbi8vIHRlc3RCb2FyZDIucGxhY2VTaGlwKDIsIDAsIDIpO1xuXG4vLyB0ZXN0Qm9hcmQyLnJlY2VpdmVBdHRhY2soMiwgMCk7XG5cbi8vIGNvbnNvbGUubG9nKHRlc3RCb2FyZDIuZ3JpZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=