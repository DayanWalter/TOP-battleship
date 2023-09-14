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

    if (target === undefined) {
      console.log(`Hit water at x:${x}, y:${y}.`);
      this.grid[x][y] = 'x';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjUwN2I4YzIxMmVlYTllYjVjNmU2LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsNkNBQUk7QUFDekI7O0FBRUE7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxFQUFFLE1BQU0sRUFBRTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsRUFBRSxNQUFNLEdBQUc7QUFDMUM7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixhQUFhLE9BQU8sRUFBRSxNQUFNLEVBQUU7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0N6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsWUFBWTs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQzVDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDa0M7QUFDVTs7QUFFNUM7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgZ3JpZCA9IEdhbWVib2FyZC5jcmVhdGVHcmlkKCk7XG5cbiAgc3RhdGljIGNyZWF0ZUdyaWQoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBuZXcgQXJyYXkoMSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICAgIGFycmF5W2ldID0gbmV3IEFycmF5KDUpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBwbGFjZVNoaXAoeCwgeSwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgc2hpcC5zaGlwVHlwZSgpO1xuXG4gICAgLy8gcGxhY2Ugc2hpcCBob3Jpem9udGFsbHkgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5ncmlkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5ncmlkW3hdW3ldO1xuXG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSGl0IHdhdGVyIGF0IHg6JHt4fSwgeToke3l9LmApO1xuICAgICAgdGhpcy5ncmlkW3hdW3ldID0gJ3gnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQuc2FuayA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coYFNoaXAgYXQgeDoke3h9LCB5OiR7eX0gYWxyZWFkeSBzYW5rLmApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coYEhpdCAke3RhcmdldC50eXBlfSBhdCB4OiR7eH0sIHk6JHt5fSFgKTtcblxuICAgICAgdGFyZ2V0LmhpdCgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gIH1cblxuICB0eXBlID0gdGhpcy5zaGlwVHlwZSgpO1xuXG4gIHRpbWVzSGl0ID0gMDtcblxuICBzYW5rID0gZmFsc2U7XG5cbiAgaGl0KCkge1xuICAgIHRoaXMudGltZXNIaXQgKz0gMTtcbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHRoaXMuc2FuayA9IHRydWU7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy50eXBlfSBkZXN0cm95ZWQhYCk7XG4gIH1cblxuICBzaGlwVHlwZSgpIHtcbiAgICBjb25zdCBzaGlwU2l6ZXMgPSB7XG4gICAgICAxOiAnUGF0cm9sIEJvYXQnLFxuICAgICAgMjogJ0NydWlzZXInLFxuICAgICAgMzogJ1N1Ym1hcmluZScsXG4gICAgICA0OiAnQmF0dGxlc2hpcCcsXG4gICAgICA1OiAnQ2FycmllcicsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA+PSAxICYmIHRoaXMubGVuZ3RoIDw9IDUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBTaGlwIHNpemU6ICR7dGhpcy5sZW5ndGh9YCk7XG5cbiAgICAgIHRoaXMudHlwZSA9IHNoaXBTaXplc1t0aGlzLmxlbmd0aF07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gNSkge1xuICAgICAgY29uc29sZS5sb2coJ0ludmFsaWQgc2hpcCBzaXplJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCAnbm9ybWFsaXplLmNzcyc7XG4vLyBpbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwuY3NzJztcbi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9tb2R1bGVzL1NoaXAnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL21vZHVsZXMvR2FtZWJvYXJkJztcblxuLy8gY29uc3QgdGVzdEJvYXJkMSA9IG5ldyBHYW1lYm9hcmQoKTtcblxuLy8gdGVzdEJvYXJkMS5wbGFjZVNoaXAoMCwgMCwgMSk7XG5cbi8vIHRlc3RCb2FyZDEucGxhY2VTaGlwKDEsIDEsIDIpO1xuXG4vLyB0ZXN0Qm9hcmQxLnBsYWNlU2hpcCgyLCAyLCAzKTtcblxuLy8gdGVzdEJvYXJkMS5yZWNlaXZlQXR0YWNrKDAsIDApO1xuLy8gdGVzdEJvYXJkMS5yZWNlaXZlQXR0YWNrKDEsIDEpO1xuLy8gdGVzdEJvYXJkMS5yZWNlaXZlQXR0YWNrKDEsIDEpO1xuLy8gdGVzdEJvYXJkMS5yZWNlaXZlQXR0YWNrKDMsIDMpO1xuXG4vLyBjb25zb2xlLmxvZyh0ZXN0Qm9hcmQxLmdyaWQpO1xuXG4vLyBjb25zdCB0ZXN0Qm9hcmQyID0gbmV3IEdhbWVib2FyZCgpO1xuLy8gdGVzdEJvYXJkMi5wbGFjZVNoaXAoMiwgMCwgMik7XG5cbi8vIHRlc3RCb2FyZDIucmVjZWl2ZUF0dGFjaygyLCAwKTtcblxuLy8gY29uc29sZS5sb2codGVzdEJvYXJkMi5ncmlkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==