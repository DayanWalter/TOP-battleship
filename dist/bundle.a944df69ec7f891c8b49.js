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
      target.hit();
      console.log(`Hit ${target.type} at x:${x}, y:${y}!`);
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
    console.log('Ship destroyed');
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
      console.log(`Ship size ${this.length}`);
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



const testBoard1 = new _modules_Gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();

testBoard1.placeShip(0, 0, 1);

testBoard1.placeShip(1, 1, 2);

testBoard1.placeShip(2, 2, 3);

// testBoard1.receiveAttack(0, 0);
testBoard1.receiveAttack(1, 1);
// testBoard1.receiveAttack(1, 1);
// testBoard1.receiveAttack(3, 3);

console.log(testBoard1.grid);

// const testBoard2 = new Gameboard();
// testBoard2.placeShip(2, 0, 2);

// testBoard2.receiveAttack(2, 0);

// console.log(testBoard2.grid);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmE5NDRkZjY5ZWM3Zjg5MWM4YjQ5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsNkNBQUk7QUFDekI7O0FBRUEsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxFQUFFLE1BQU0sRUFBRTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsRUFBRSxNQUFNLEdBQUc7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGFBQWEsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN2RDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQzNDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDa0M7QUFDVTs7QUFFNUMsdUJBQXVCLDBEQUFTOztBQUVoQzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBncmlkID0gR2FtZWJvYXJkLmNyZWF0ZUdyaWQoKTtcblxuICBzdGF0aWMgY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBhcnJheSA9IG5ldyBBcnJheSgxKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgYXJyYXlbaV0gPSBuZXcgQXJyYXkoNSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIHBsYWNlU2hpcCh4LCB5LCBsZW5ndGgpIHtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICBzaGlwLnNoaXBUeXBlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdyaWRbeF1beSArIGldID0gc2hpcDtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5ncmlkW3hdW3ldO1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2coYEhpdCB3YXRlciBhdCB4OiR7eH0sIHk6JHt5fS5gKTtcbiAgICAgIHRhcmdldCA9ICd4JztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LnNhbmsgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBTaGlwIGF0IHg6JHt4fSwgeToke3l9IGFscmVhZHkgc2Fuay5gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5oaXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGBIaXQgJHt0YXJnZXQudHlwZX0gYXQgeDoke3h9LCB5OiR7eX0hYCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgfVxuXG4gIHR5cGUgPSB0aGlzLnNoaXBUeXBlKCk7XG5cbiAgdGltZXNIaXQgPSAwO1xuXG4gIHNhbmsgPSBmYWxzZTtcblxuICBoaXQoKSB7XG4gICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgIGlmICh0aGlzLnRpbWVzSGl0ID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgdGhpcy5zYW5rID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZygnU2hpcCBkZXN0cm95ZWQnKTtcbiAgfVxuXG4gIHNoaXBUeXBlKCkge1xuICAgIGNvbnN0IHNoaXBTaXplcyA9IHtcbiAgICAgIDE6ICdQYXRyb2wgQm9hdCcsXG4gICAgICAyOiAnQ3J1aXNlcicsXG4gICAgICAzOiAnU3VibWFyaW5lJyxcbiAgICAgIDQ6ICdCYXR0bGVzaGlwJyxcbiAgICAgIDU6ICdDYXJyaWVyJyxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID49IDEgJiYgdGhpcy5sZW5ndGggPD0gNSkge1xuICAgICAgY29uc29sZS5sb2coYFNoaXAgc2l6ZSAke3RoaXMubGVuZ3RofWApO1xuICAgICAgdGhpcy50eXBlID0gc2hpcFNpemVzW3RoaXMubGVuZ3RoXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPiA1KSB7XG4gICAgICBjb25zb2xlLmxvZygnSW52YWxpZCBzaGlwIHNpemUnKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0ICdub3JtYWxpemUuY3NzJztcbi8vIGltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3MnO1xuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgU2hpcCBmcm9tICcuL21vZHVsZXMvU2hpcCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vbW9kdWxlcy9HYW1lYm9hcmQnO1xuXG5jb25zdCB0ZXN0Qm9hcmQxID0gbmV3IEdhbWVib2FyZCgpO1xuXG50ZXN0Qm9hcmQxLnBsYWNlU2hpcCgwLCAwLCAxKTtcblxudGVzdEJvYXJkMS5wbGFjZVNoaXAoMSwgMSwgMik7XG5cbnRlc3RCb2FyZDEucGxhY2VTaGlwKDIsIDIsIDMpO1xuXG4vLyB0ZXN0Qm9hcmQxLnJlY2VpdmVBdHRhY2soMCwgMCk7XG50ZXN0Qm9hcmQxLnJlY2VpdmVBdHRhY2soMSwgMSk7XG4vLyB0ZXN0Qm9hcmQxLnJlY2VpdmVBdHRhY2soMSwgMSk7XG4vLyB0ZXN0Qm9hcmQxLnJlY2VpdmVBdHRhY2soMywgMyk7XG5cbmNvbnNvbGUubG9nKHRlc3RCb2FyZDEuZ3JpZCk7XG5cbi8vIGNvbnN0IHRlc3RCb2FyZDIgPSBuZXcgR2FtZWJvYXJkKCk7XG4vLyB0ZXN0Qm9hcmQyLnBsYWNlU2hpcCgyLCAwLCAyKTtcblxuLy8gdGVzdEJvYXJkMi5yZWNlaXZlQXR0YWNrKDIsIDApO1xuXG4vLyBjb25zb2xlLmxvZyh0ZXN0Qm9hcmQyLmdyaWQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9