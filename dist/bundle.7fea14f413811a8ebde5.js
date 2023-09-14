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

  set = new Set();

  missedShots = new Set();

  hitShots = new Set();

  static createGrid() {
    const array = new Array(1);
    for (let i = 0; i < 5; i += 1) {
      array[i] = new Array(5);
    }
    return array;
  }

  placeShip(x, y, length) {
    const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);
    ship.shipType();

    // place ship horizontally from left to right
    for (let i = 0; i < length; i += 1) {
      this.grid[x][y + i] = ship;
    }
  }

  receiveAttack(x, y) {
    const target = this.grid[x][y];
    const coords = `${x},${y}`;

    // Field is already shot at
    if (this.set.has(coords)) {
      console.log(`Coords at x:${x}, y:${y} are already shot at.`);

      // same player again
      return;
    }

    // Field is empty/water
    if (target === undefined) {
      this.set.add(coords);
      this.missedShots.add(coords);

      console.log(`Hit water at x:${x}, y:${y}.`);

      this.grid[x][y] = 'x';

      // next player
      return;
    }

    // Field is a ship
    if (target !== undefined) {
      console.log(`Hit ${target.type} at x:${x}, y:${y}!`);

      this.set.add(coords);
      this.hitShots.add(coords);

      target.hit();

      // same player again
      return;
    }

    console.log(`OOPS SOMETHING ESCAPED - Coords at x:${x}, y:${y}`);
  }

  checkGameover() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjdmZWExNGY0MTM4MTFhOGViZGU1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsNkNBQUk7QUFDekI7O0FBRUE7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixFQUFFLEdBQUcsRUFBRTs7QUFFN0I7QUFDQTtBQUNBLGlDQUFpQyxFQUFFLE1BQU0sR0FBRzs7QUFFNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxFQUFFLE1BQU0sRUFBRTs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsYUFBYSxPQUFPLEVBQUUsTUFBTSxFQUFFOztBQUV2RDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0QsRUFBRSxNQUFNLEVBQUU7QUFDbEU7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3pFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQzFDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDa0M7QUFDVTs7QUFFNUM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgZ3JpZCA9IEdhbWVib2FyZC5jcmVhdGVHcmlkKCk7XG5cbiAgc2V0ID0gbmV3IFNldCgpO1xuXG4gIG1pc3NlZFNob3RzID0gbmV3IFNldCgpO1xuXG4gIGhpdFNob3RzID0gbmV3IFNldCgpO1xuXG4gIHN0YXRpYyBjcmVhdGVHcmlkKCkge1xuICAgIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KDEpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgICBhcnJheVtpXSA9IG5ldyBBcnJheSg1KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgcGxhY2VTaGlwKHgsIHksIGxlbmd0aCkge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgIHNoaXAuc2hpcFR5cGUoKTtcblxuICAgIC8vIHBsYWNlIHNoaXAgaG9yaXpvbnRhbGx5IGZyb20gbGVmdCB0byByaWdodFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5ICsgaV0gPSBzaGlwO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZ3JpZFt4XVt5XTtcbiAgICBjb25zdCBjb29yZHMgPSBgJHt4fSwke3l9YDtcblxuICAgIC8vIEZpZWxkIGlzIGFscmVhZHkgc2hvdCBhdFxuICAgIGlmICh0aGlzLnNldC5oYXMoY29vcmRzKSkge1xuICAgICAgY29uc29sZS5sb2coYENvb3JkcyBhdCB4OiR7eH0sIHk6JHt5fSBhcmUgYWxyZWFkeSBzaG90IGF0LmApO1xuXG4gICAgICAvLyBzYW1lIHBsYXllciBhZ2FpblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEZpZWxkIGlzIGVtcHR5L3dhdGVyXG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldC5hZGQoY29vcmRzKTtcbiAgICAgIHRoaXMubWlzc2VkU2hvdHMuYWRkKGNvb3Jkcyk7XG5cbiAgICAgIGNvbnNvbGUubG9nKGBIaXQgd2F0ZXIgYXQgeDoke3h9LCB5OiR7eX0uYCk7XG5cbiAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9ICd4JztcblxuICAgICAgLy8gbmV4dCBwbGF5ZXJcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGaWVsZCBpcyBhIHNoaXBcbiAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBIaXQgJHt0YXJnZXQudHlwZX0gYXQgeDoke3h9LCB5OiR7eX0hYCk7XG5cbiAgICAgIHRoaXMuc2V0LmFkZChjb29yZHMpO1xuICAgICAgdGhpcy5oaXRTaG90cy5hZGQoY29vcmRzKTtcblxuICAgICAgdGFyZ2V0LmhpdCgpO1xuXG4gICAgICAvLyBzYW1lIHBsYXllciBhZ2FpblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGBPT1BTIFNPTUVUSElORyBFU0NBUEVEIC0gQ29vcmRzIGF0IHg6JHt4fSwgeToke3l9YCk7XG4gIH1cblxuICBjaGVja0dhbWVvdmVyKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgdHlwZSA9IHRoaXMuc2hpcFR5cGUoKTtcblxuICB0aW1lc0hpdCA9IDA7XG5cbiAgc2FuayA9IGZhbHNlO1xuXG4gIGhpdCgpIHtcbiAgICB0aGlzLnRpbWVzSGl0ICs9IDE7XG4gICAgaWYgKHRoaXMudGltZXNIaXQgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICB0aGlzLnNhbmsgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMudHlwZX0gZGVzdHJveWVkIWApO1xuICB9XG5cbiAgc2hpcFR5cGUoKSB7XG4gICAgY29uc3Qgc2hpcFNpemVzID0ge1xuICAgICAgMTogJ1BhdHJvbCBCb2F0JyxcbiAgICAgIDI6ICdDcnVpc2VyJyxcbiAgICAgIDM6ICdTdWJtYXJpbmUnLFxuICAgICAgNDogJ0JhdHRsZXNoaXAnLFxuICAgICAgNTogJ0NhcnJpZXInLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPj0gMSAmJiB0aGlzLmxlbmd0aCA8PSA1KSB7XG4gICAgICB0aGlzLnR5cGUgPSBzaGlwU2l6ZXNbdGhpcy5sZW5ndGhdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxlbmd0aCA+IDUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIHNoaXAgc2l6ZScpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuLy8gaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBTaGlwIGZyb20gJy4vbW9kdWxlcy9TaGlwJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9tb2R1bGVzL0dhbWVib2FyZCc7XG5cbi8vIGNvbnN0IHRlc3RCb2FyZDEgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbi8vIHRlc3RCb2FyZDEucGxhY2VTaGlwKDAsIDAsIDEpO1xuXG4vLyB0ZXN0Qm9hcmQxLnBsYWNlU2hpcCgxLCAxLCAyKTtcblxuLy8gdGVzdEJvYXJkMS5wbGFjZVNoaXAoMiwgMiwgMyk7XG5cbi8vIHRlc3RCb2FyZDEucmVjZWl2ZUF0dGFjaygwLCAwKTtcbi8vIHRlc3RCb2FyZDEucmVjZWl2ZUF0dGFjaygxLCAxKTtcbi8vIHRlc3RCb2FyZDEucmVjZWl2ZUF0dGFjaygxLCAxKTtcbi8vIHRlc3RCb2FyZDEucmVjZWl2ZUF0dGFjaygzLCAzKTtcblxuLy8gY29uc29sZS5sb2codGVzdEJvYXJkMS5ncmlkKTtcblxuLy8gY29uc3QgdGVzdEJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoKTtcbi8vIHRlc3RCb2FyZDIucGxhY2VTaGlwKDIsIDAsIDIpO1xuXG4vLyB0ZXN0Qm9hcmQyLnJlY2VpdmVBdHRhY2soMiwgMCk7XG5cbi8vIGNvbnNvbGUubG9nKHRlc3RCb2FyZDIuZ3JpZCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=