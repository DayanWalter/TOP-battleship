/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `h1 {
  font-family: 'Anonymous Pro', monospace;
  color: blue;
}
li {
  font-family: 'Montserrat', sans-serif;
}
table {
  border-collapse: collapse;
}

td {
  width: 50px;
  height: 50px;
  border: 1px solid rgb(222, 83, 108);
}
.fill {
  /* position: relative; */
  /* height: 150px;
  width: 150px; */
  /* top: 5px;
  left: 5px; */
  cursor: pointer;
}
.hold {
  border: 2px solid red;
  height: 40px;
}
#playerBoard,
#computerBoard {
  display: grid;
  /* grid-template-columns: repeat(10, 50px); */
  /* flex-direction: row; */
}
.row {
}
.empty,
.computerempty {
  display: inline-block;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border: 1px solid rgb(222, 83, 108);
  background: white;
}

.aquamarine {
  background-color: aquamarine;
}
.aqua {
  background-color: aqua;
}
.blue {
  background-color: blue;
}
.blueviolet {
  background-color: blueviolet;
}
.cadetblue {
  background-color: cadetblue;
}

.hovered {
  background: #ff9393;
  border-style: dashed;
}
.invisible {
  display: none;
}

.shipcontainer {
  /* display: flex; */

  border: 1px solid black;
}
.ship {
  border: 1px solid black;
  height: 40px;
}
.carrier {
  width: 200px;
  background-color: aquamarine;
}
.battleship {
  width: 160px;
  background-color: aqua;
}
.submarine {
  width: 120px;
  background-color: blue;
}
.cruiser {
  width: 80px;
  background-color: blueviolet;
}
.patrolboat {
  width: 40px;
  background-color: cadetblue;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uCAAuC;EACvC,WAAW;AACb;AACA;EACE,qCAAqC;AACvC;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mCAAmC;AACrC;AACA;EACE,wBAAwB;EACxB;iBACe;EACf;cACY;EACZ,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,YAAY;AACd;AACA;;EAEE,aAAa;EACb,6CAA6C;EAC7C,yBAAyB;AAC3B;AACA;AACA;AACA;;EAEE,qBAAqB;EACrB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;AAC9B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;;EAEnB,uBAAuB;AACzB;AACA;EACE,uBAAuB;EACvB,YAAY;AACd;AACA;EACE,YAAY;EACZ,4BAA4B;AAC9B;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,4BAA4B;AAC9B;AACA;EACE,WAAW;EACX,2BAA2B;AAC7B","sourcesContent":["h1 {\n  font-family: 'Anonymous Pro', monospace;\n  color: blue;\n}\nli {\n  font-family: 'Montserrat', sans-serif;\n}\ntable {\n  border-collapse: collapse;\n}\n\ntd {\n  width: 50px;\n  height: 50px;\n  border: 1px solid rgb(222, 83, 108);\n}\n.fill {\n  /* position: relative; */\n  /* height: 150px;\n  width: 150px; */\n  /* top: 5px;\n  left: 5px; */\n  cursor: pointer;\n}\n.hold {\n  border: 2px solid red;\n  height: 40px;\n}\n#playerBoard,\n#computerBoard {\n  display: grid;\n  /* grid-template-columns: repeat(10, 50px); */\n  /* flex-direction: row; */\n}\n.row {\n}\n.empty,\n.computerempty {\n  display: inline-block;\n  vertical-align: middle;\n  width: 40px;\n  height: 40px;\n  border: 1px solid rgb(222, 83, 108);\n  background: white;\n}\n\n.aquamarine {\n  background-color: aquamarine;\n}\n.aqua {\n  background-color: aqua;\n}\n.blue {\n  background-color: blue;\n}\n.blueviolet {\n  background-color: blueviolet;\n}\n.cadetblue {\n  background-color: cadetblue;\n}\n\n.hovered {\n  background: #ff9393;\n  border-style: dashed;\n}\n.invisible {\n  display: none;\n}\n\n.shipcontainer {\n  /* display: flex; */\n\n  border: 1px solid black;\n}\n.ship {\n  border: 1px solid black;\n  height: 40px;\n}\n.carrier {\n  width: 200px;\n  background-color: aquamarine;\n}\n.battleship {\n  width: 160px;\n  background-color: aqua;\n}\n.submarine {\n  width: 120px;\n  background-color: blue;\n}\n.cruiser {\n  width: 80px;\n  background-color: blueviolet;\n}\n.patrolboat {\n  width: 40px;\n  background-color: cadetblue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/modules/Player.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");



function game() {
  // initialize player
  const player = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Player');
  const computer = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"]('Computer');
  // set opponents
  player.setOpponent(computer);
  computer.setOpponent(player);
  // let the player place the ships(static at first)
  // player
  // player.placeStatic();
  // computer
  // computer.placeStaticRandom();
  computer.placeShipRandom(5);
  computer.placeShipRandom(4);
  computer.placeShipRandom(4);
  computer.placeShipRandom(3);
  computer.placeShipRandom(3);
  computer.placeShipRandom(3);
  computer.placeShipRandom(2);
  computer.placeShipRandom(2);
  computer.placeShipRandom(2);
  computer.placeShipRandom(1);
  computer.placeShipRandom(1);

  // display boards in html
  _UI__WEBPACK_IMPORTED_MODULE_1__["default"].displayInHtml(player, computer);

  // UI.placeShipOnDrop(player, computer);
  // check for winner
  // UI.checkWinner(player, computer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);


/***/ }),

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

  placedShips = new Set();

  hitShots = new Set();

  static createGrid() {
    const grid = [];
    for (let i = 0; i < 10; i += 1) {
      grid[i] = [];
      for (let j = 0; j < 10; j += 1) {
        grid[i][j] = [];
      }
    }
    // console.log(grid);
    return grid;

    // const array = new Array(1);
    // for (let i = 0; i < 10; i += 1) {
    //   array[i] = new Array(10);
    // }
    // console.log(array);
    // return array;
  }

  placeShipLeftToRight(x, y, length) {
    const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);

    // place ship horizontally from left to right
    for (let i = 0; i < length; i += 1) {
      // console.log(`x in function:${x}
      // y in function: ${y + i}`);
      this.grid[x][y + i] = ship;
      this.placedShips.add(`${x},${y + i}`);
    }
  }

  placeShipUpToDown(x, y, length) {
    const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__["default"](length);

    // place ship vertically from up to down
    for (let i = 0; i < length; i += 1) {
      console.log(`x in function:${x + i}
      y in function: ${y}`);
      this.grid[x + i][y] = ship;
      this.placedShips.add(`${x + i},${y}`);

      console.log(
        '🚀 ~ file: Gameboard.js:54 ~ Gameboard ~ placeShipUpToDown ~ this.placedShips:',
        this.placedShips
      );
    }
  }

  receiveAttack(x, y) {
    const target = this.grid[x][y];

    const coords = `${x},${y}`;
    if (target === 'missed' || target === 'hit') {
      console.log('missed or hit');
      return console.log('ALREADY SHOT AT X!!!');
    }
    // Field is a ship
    if (
      typeof target === 'object' &&
      !Array.isArray(target) &&
      target !== null
    ) {
      console.log('ship');
      this.set.add(coords);
      this.hitShots.add(coords);
      // console.log(target);
      target.hit();
      this.grid[x][y] = 'hit';

      return;
    }

    // Field is empty/water
    if (target.length === 0) {
      console.log('water');
      this.set.add(coords);
      this.missedShots.add(coords);

      this.grid[x][y] = 'missed';
    }

    return console.log(`OOPS SOMETHING ESCAPED - Coords at x:${x}, y:${y}`);
  }

  checkGameover() {
    // check every round?
    if (this.hitShots.size >= 30) {
      // the other player won
      return true;
    }
    return false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/modules/Gameboard.js");


class Player {
  constructor(name) {
    this.name = name;
  }

  opponent = null;

  gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();

  setOpponent(opponent) {
    this.opponent = opponent;
  }

  attack(x, y) {
    console.log(`${this.name} attacks ${x}, ${y}`);
    // Attack gameboard of computer
    this.opponent.gameboard.receiveAttack(x, y);

    // if attack was a hit...
    if (this.opponent.gameboard.hitShots.has(`${x},${y}`)) {
      console.log(`${this.name} hit at ${x},${y}`);
      // ...attack again
      console.log(this.opponent.gameboard.hitShots);
      return;
    }

    // if attack was a missedShot...
    if (this.opponent.gameboard.missedShots.has(`${x},${y}`)) {
      console.log(`${this.name} missed at ${x},${y}`);
      // ...computer attacks
      this.opponent.attackRandom();
    }
  }

  attackRandom() {
    // Generate random x and y
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    // if coords not in set...
    if (!this.opponent.gameboard.set.has(`${x},${y}`)) {
      // ...attack player
      console.log(`${this.name} attacks ${x}, ${y}`);
      this.opponent.gameboard.receiveAttack(x, y);
      // if hit...
      if (this.opponent.gameboard.hitShots.has(`${x},${y}`)) {
        console.log(`${this.name} hit at ${x},${y}`);

        // ...attack again

        this.attackRandom();
      }

      // if missed...
      if (this.opponent.gameboard.missedShots.has(`${x},${y}`)) {
        console.log(`${this.name} missed at ${x},${y}`);

        // ...players turn
        return;
      }
    }

    // if coords ARE in set
    if (this.opponent.gameboard.set.has(`${x},${y}`)) {
      // call attack recursivly and start over
      this.attackRandom();
    }
  }

  placeShip(x, y, length, orientation) {
    if (orientation === 'x') {
      this.gameboard.placeShipLeftToRight(x, y, length);
    }
    if (orientation === 'y') {
      this.gameboard.placeShipUpToDown(x, y, length);
    }
  }

  placeShipRandom(length) {
    const random = Math.floor(Math.random() * 2);

    if (random === 1) {
      const o = 'x';
      let x = 0;
      let y = 0;
      const { placedShips } = this.gameboard;
      while (true) {
        const temp = new Set();
        let nothingFound;
        let oneInSet;

        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * (10 - length));

        for (let i = 0; i < length; i += 1) {
          temp.add(`${x},${y + i}`);
        }

        for (const coords of temp) {
          if (placedShips.has(coords)) {
            nothingFound = false;
            oneInSet = true;
            temp.clear();
          } else {
            nothingFound = true;
          }
        }
        if (nothingFound && !oneInSet) {
          this.placeShip(x, y, length, o);
          first.clear();
          break;
        }
      }
    } else if (random === 0) {
      const o = 'y';
      let x = 0;
      let y = 0;
      const { placedShips } = this.gameboard;
      while (true) {
        const temp = new Set();
        let nothingFound;
        let oneInSet;

        x = Math.floor(Math.random() * (10 - length));
        y = Math.floor(Math.random() * 10);

        for (let i = 0; i < length; i += 1) {
          temp.add(`${x + i},${y}`);
        }

        for (const coords of temp) {
          if (placedShips.has(coords)) {
            console.log(`The coords "${coords}" are in placedShips set.`);
            nothingFound = false;
            oneInSet = true;
            temp.clear();
          } else {
            console.log('done');
            nothingFound = true;
          }
        }
        if (nothingFound && !oneInSet) {
          this.placeShip(x, y, length, o);
          temp.clear();
          break;
        }
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


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
    this.type = this.type[length];
  }

  type = {
    // 2
    1: 'Patrol Boat',
    // 3
    2: 'Cruiser',
    // 3
    3: 'Submarine',
    // 2
    4: 'Battleship',
    // 1
    5: 'Carrier',
    // 30 fields in total
  };

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
    // console.log(`${this.type} destroyed!`);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class UI {
  static displayInHtml(player1, player2) {
    const player = player1;
    const computer = player2;

    // get boards
    const playerBoard = player.gameboard.grid;
    const computerBoard = computer.gameboard.grid;

    // define ID from html
    const playerBoardID = 'playerBoard';
    const computerBoardID = 'computerBoard';

    // display boards in html/DOM
    UI.displayBoard(playerBoard, playerBoardID);
    UI.displayBoard(computerBoard, computerBoardID);
    UI.attackOnClick(player, computer);
    UI.placeShipOnDrop(player, computer);
  }

  static displayBoard(board, id) {
    const grid = document.getElementById(`${id}`);
    grid.innerHTML = '';

    for (let i = 0; i < 10; i += 1) {
      const row = document.createElement('div');
      row.setAttribute('class', 'row');

      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement('div');
        cell.setAttribute('id', `${id}${i}${j}`);

        if (id === 'playerBoard') {
          cell.setAttribute('class', 'empty');
        } else {
          cell.setAttribute('class', 'computerempty');
        }

        const target = board[i][j];

        if (
          typeof target === 'object' &&
          !Array.isArray(target) &&
          target !== null
        ) {
          if (target.length === 5) {
            cell.classList.add('aquamarine');
          }
          if (target.length === 4) {
            cell.classList.add('aqua');
          }
          if (target.length === 3) {
            cell.classList.add('blue');
          }
          if (target.length === 2) {
            cell.classList.add('blueviolet');
          }
          if (target.length === 1) {
            cell.classList.add('cadetblue');
          }

          cell.innerHTML = target.length;
        }

        if (target === 'hit') {
          // console.log('hit');
          cell.innerHTML = 'SH!';
        }

        if (target === 'missed') {
          // console.log('missed');
          cell.innerHTML = 'M';
        }

        if (target.length === 0) {
          // console.log('empty');
          cell.innerHTML = '';
        }

        row.append(cell);
      }

      grid.append(row);
    }
  }

  static attackOnClick(player, computer) {
    const fields = document.querySelectorAll('.computerempty');
    fields.forEach((field) => {
      field.addEventListener('click', (e) => {
        const ID = e.target.id;
        const x = ID.slice(-2, -1);
        const y = ID.slice(-1);

        player.attack(x, y);
        UI.displayInHtml(player, computer);

        // Timeout for later :)
        // setTimeout(() => {
        //   console.log('Delayed for 1 second.');
        //   UI.displayInHtml(player, computer);
        // }, 1000);
      });
    });
  }

  static placeShipOnDrop(player, computer) {
    const ships = document.querySelectorAll('.fill');
    const boxes = document.querySelectorAll('.empty');

    // Drag Functions

    // ship
    function dragStart(e) {
      e.dataTransfer.clearData();
      e.dataTransfer.setData('text', e.target.dataset.length);

      console.log('start');

      // this.className += ' hold';
      setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd() {
      // this.className = 'fill ship';
      UI.displayInHtml(player, computer);
    }

    function dragOver(e) {
      e.preventDefault();
    }

    function dragEnter(e) {
      e.preventDefault();

      this.className += ' hovered';
    }

    function dragLeave() {
      // console.log('leave');
      this.className = 'empty';
    }

    function dragDrop(e) {
      console.log('drop');
      const length = +e.dataTransfer.getData('text');

      this.className = 'empty';
      const ID = this.id;
      const x = +ID.slice(-2, -1);
      const y = +ID.slice(-1);

      player.placeShip(x, y, length, 'x');
    }

    boxes.forEach((box) => {
      box.addEventListener('dragover', dragOver);
      box.addEventListener('dragenter', dragEnter);
      box.addEventListener('dragleave', dragLeave);
      box.addEventListener('drop', dragDrop);
    });

    ships.forEach((ship) => {
      if (!ship.hasEventlistener) {
        ship.addEventListener('dragstart', dragStart);
        ship.addEventListener('dragend', dragEnd);
        ship.hasEventlistener = true;
      }
    });
  }

  static checkWinner(player, computer) {
    setInterval(() => {
      if (player.gameboard.checkGameover()) {
        console.log('Computer won!');
      }
      if (computer.gameboard.checkGameover()) {
        console.log('Player won!');
      }
    }, 1000);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Game */ "./src/modules/Game.js");
// import 'normalize.css';
// import '@fortawesome/fontawesome-free/css/all.css';



(0,_modules_Game__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxFQUFFLEVBQUM7Ozs7Ozs7VUN2TGxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNxQjtBQUNhOztBQUVsQyx5REFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvUGxheWVyLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBoMSB7XG4gIGZvbnQtZmFtaWx5OiAnQW5vbnltb3VzIFBybycsIG1vbm9zcGFjZTtcbiAgY29sb3I6IGJsdWU7XG59XG5saSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRkIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMiwgODMsIDEwOCk7XG59XG4uZmlsbCB7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgLyogaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4OyAqL1xuICAvKiB0b3A6IDVweDtcbiAgbGVmdDogNXB4OyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9sZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuI3BsYXllckJvYXJkLFxuI2NvbXB1dGVyQm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7ICovXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXG59XG4ucm93IHtcbn1cbi5lbXB0eSxcbi5jb21wdXRlcmVtcHR5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjIyLCA4MywgMTA4KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5hcXVhbWFyaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbn1cbi5hcXVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cbi5ibHVldmlvbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbn1cbi5jYWRldGJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XG59XG5cbi5ob3ZlcmVkIHtcbiAgYmFja2dyb3VuZDogI2ZmOTM5MztcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG59XG4uaW52aXNpYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNoaXBjb250YWluZXIge1xuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnNoaXAge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmNhcnJpZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG4uYmF0dGxlc2hpcCB7XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cbi5zdWJtYXJpbmUge1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uY3J1aXNlciB7XG4gIHdpZHRoOiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xufVxuLnBhdHJvbGJvYXQge1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLFdBQVc7QUFDYjtBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztBQUNyQztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCO2lCQUNlO0VBQ2Y7Y0FDWTtFQUNaLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsNkNBQTZDO0VBQzdDLHlCQUF5QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1COztFQUVuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaDEge1xcbiAgZm9udC1mYW1pbHk6ICdBbm9ueW1vdXMgUHJvJywgbW9ub3NwYWNlO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcbmxpIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRkIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMiwgODMsIDEwOCk7XFxufVxcbi5maWxsIHtcXG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gIC8qIGhlaWdodDogMTUwcHg7XFxuICB3aWR0aDogMTUwcHg7ICovXFxuICAvKiB0b3A6IDVweDtcXG4gIGxlZnQ6IDVweDsgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhvbGQge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4jcGxheWVyQm9hcmQsXFxuI2NvbXB1dGVyQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTsgKi9cXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiByb3c7ICovXFxufVxcbi5yb3cge1xcbn1cXG4uZW1wdHksXFxuLmNvbXB1dGVyZW1wdHkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMiwgODMsIDEwOCk7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuLmFxdWFtYXJpbmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuLmFxdWEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuLmJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLmJsdWV2aW9sZXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuLmNhZGV0Ymx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxufVxcblxcbi5ob3ZlcmVkIHtcXG4gIGJhY2tncm91bmQ6ICNmZjkzOTM7XFxuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcXG59XFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2hpcGNvbnRhaW5lciB7XFxuICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5zaGlwIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY2FycmllciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG4uYmF0dGxlc2hpcCB7XFxuICB3aWR0aDogMTYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG4uc3VibWFyaW5lIHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcbi5jcnVpc2VyIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuLnBhdHJvbGJvYXQge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcblxuZnVuY3Rpb24gZ2FtZSgpIHtcbiAgLy8gaW5pdGlhbGl6ZSBwbGF5ZXJcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcignUGxheWVyJyk7XG4gIGNvbnN0IGNvbXB1dGVyID0gbmV3IFBsYXllcignQ29tcHV0ZXInKTtcbiAgLy8gc2V0IG9wcG9uZW50c1xuICBwbGF5ZXIuc2V0T3Bwb25lbnQoY29tcHV0ZXIpO1xuICBjb21wdXRlci5zZXRPcHBvbmVudChwbGF5ZXIpO1xuICAvLyBsZXQgdGhlIHBsYXllciBwbGFjZSB0aGUgc2hpcHMoc3RhdGljIGF0IGZpcnN0KVxuICAvLyBwbGF5ZXJcbiAgLy8gcGxheWVyLnBsYWNlU3RhdGljKCk7XG4gIC8vIGNvbXB1dGVyXG4gIC8vIGNvbXB1dGVyLnBsYWNlU3RhdGljUmFuZG9tKCk7XG4gIGNvbXB1dGVyLnBsYWNlU2hpcFJhbmRvbSg1KTtcbiAgY29tcHV0ZXIucGxhY2VTaGlwUmFuZG9tKDQpO1xuICBjb21wdXRlci5wbGFjZVNoaXBSYW5kb20oNCk7XG4gIGNvbXB1dGVyLnBsYWNlU2hpcFJhbmRvbSgzKTtcbiAgY29tcHV0ZXIucGxhY2VTaGlwUmFuZG9tKDMpO1xuICBjb21wdXRlci5wbGFjZVNoaXBSYW5kb20oMyk7XG4gIGNvbXB1dGVyLnBsYWNlU2hpcFJhbmRvbSgyKTtcbiAgY29tcHV0ZXIucGxhY2VTaGlwUmFuZG9tKDIpO1xuICBjb21wdXRlci5wbGFjZVNoaXBSYW5kb20oMik7XG4gIGNvbXB1dGVyLnBsYWNlU2hpcFJhbmRvbSgxKTtcbiAgY29tcHV0ZXIucGxhY2VTaGlwUmFuZG9tKDEpO1xuXG4gIC8vIGRpc3BsYXkgYm9hcmRzIGluIGh0bWxcbiAgVUkuZGlzcGxheUluSHRtbChwbGF5ZXIsIGNvbXB1dGVyKTtcblxuICAvLyBVSS5wbGFjZVNoaXBPbkRyb3AocGxheWVyLCBjb21wdXRlcik7XG4gIC8vIGNoZWNrIGZvciB3aW5uZXJcbiAgLy8gVUkuY2hlY2tXaW5uZXIocGxheWVyLCBjb21wdXRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBncmlkID0gR2FtZWJvYXJkLmNyZWF0ZUdyaWQoKTtcblxuICBzZXQgPSBuZXcgU2V0KCk7XG5cbiAgbWlzc2VkU2hvdHMgPSBuZXcgU2V0KCk7XG5cbiAgcGxhY2VkU2hpcHMgPSBuZXcgU2V0KCk7XG5cbiAgaGl0U2hvdHMgPSBuZXcgU2V0KCk7XG5cbiAgc3RhdGljIGNyZWF0ZUdyaWQoKSB7XG4gICAgY29uc3QgZ3JpZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZ3JpZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGdyaWRbaV1bal0gPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coZ3JpZCk7XG4gICAgcmV0dXJuIGdyaWQ7XG5cbiAgICAvLyBjb25zdCBhcnJheSA9IG5ldyBBcnJheSgxKTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAvLyAgIGFycmF5W2ldID0gbmV3IEFycmF5KDEwKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coYXJyYXkpO1xuICAgIC8vIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIHBsYWNlU2hpcExlZnRUb1JpZ2h0KHgsIHksIGxlbmd0aCkge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuXG4gICAgLy8gcGxhY2Ugc2hpcCBob3Jpem9udGFsbHkgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgLy8gY29uc29sZS5sb2coYHggaW4gZnVuY3Rpb246JHt4fVxuICAgICAgLy8geSBpbiBmdW5jdGlvbjogJHt5ICsgaX1gKTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5ICsgaV0gPSBzaGlwO1xuICAgICAgdGhpcy5wbGFjZWRTaGlwcy5hZGQoYCR7eH0sJHt5ICsgaX1gKTtcbiAgICB9XG4gIH1cblxuICBwbGFjZVNoaXBVcFRvRG93bih4LCB5LCBsZW5ndGgpIHtcbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcblxuICAgIC8vIHBsYWNlIHNoaXAgdmVydGljYWxseSBmcm9tIHVwIHRvIGRvd25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zb2xlLmxvZyhgeCBpbiBmdW5jdGlvbjoke3ggKyBpfVxuICAgICAgeSBpbiBmdW5jdGlvbjogJHt5fWApO1xuICAgICAgdGhpcy5ncmlkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICB0aGlzLnBsYWNlZFNoaXBzLmFkZChgJHt4ICsgaX0sJHt5fWApO1xuXG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgJ/CfmoAgfiBmaWxlOiBHYW1lYm9hcmQuanM6NTQgfiBHYW1lYm9hcmQgfiBwbGFjZVNoaXBVcFRvRG93biB+IHRoaXMucGxhY2VkU2hpcHM6JyxcbiAgICAgICAgdGhpcy5wbGFjZWRTaGlwc1xuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmdyaWRbeF1beV07XG5cbiAgICBjb25zdCBjb29yZHMgPSBgJHt4fSwke3l9YDtcbiAgICBpZiAodGFyZ2V0ID09PSAnbWlzc2VkJyB8fCB0YXJnZXQgPT09ICdoaXQnKSB7XG4gICAgICBjb25zb2xlLmxvZygnbWlzc2VkIG9yIGhpdCcpO1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdBTFJFQURZIFNIT1QgQVQgWCEhIScpO1xuICAgIH1cbiAgICAvLyBGaWVsZCBpcyBhIHNoaXBcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgIUFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJlxuICAgICAgdGFyZ2V0ICE9PSBudWxsXG4gICAgKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2hpcCcpO1xuICAgICAgdGhpcy5zZXQuYWRkKGNvb3Jkcyk7XG4gICAgICB0aGlzLmhpdFNob3RzLmFkZChjb29yZHMpO1xuICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICAgIHRhcmdldC5oaXQoKTtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9ICdoaXQnO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRmllbGQgaXMgZW1wdHkvd2F0ZXJcbiAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coJ3dhdGVyJyk7XG4gICAgICB0aGlzLnNldC5hZGQoY29vcmRzKTtcbiAgICAgIHRoaXMubWlzc2VkU2hvdHMuYWRkKGNvb3Jkcyk7XG5cbiAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9ICdtaXNzZWQnO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zb2xlLmxvZyhgT09QUyBTT01FVEhJTkcgRVNDQVBFRCAtIENvb3JkcyBhdCB4OiR7eH0sIHk6JHt5fWApO1xuICB9XG5cbiAgY2hlY2tHYW1lb3ZlcigpIHtcbiAgICAvLyBjaGVjayBldmVyeSByb3VuZD9cbiAgICBpZiAodGhpcy5oaXRTaG90cy5zaXplID49IDMwKSB7XG4gICAgICAvLyB0aGUgb3RoZXIgcGxheWVyIHdvblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBvcHBvbmVudCA9IG51bGw7XG5cbiAgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIHNldE9wcG9uZW50KG9wcG9uZW50KSB7XG4gICAgdGhpcy5vcHBvbmVudCA9IG9wcG9uZW50O1xuICB9XG5cbiAgYXR0YWNrKHgsIHkpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGF0dGFja3MgJHt4fSwgJHt5fWApO1xuICAgIC8vIEF0dGFjayBnYW1lYm9hcmQgb2YgY29tcHV0ZXJcbiAgICB0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgLy8gaWYgYXR0YWNrIHdhcyBhIGhpdC4uLlxuICAgIGlmICh0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5oaXRTaG90cy5oYXMoYCR7eH0sJHt5fWApKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGhpdCBhdCAke3h9LCR7eX1gKTtcbiAgICAgIC8vIC4uLmF0dGFjayBhZ2FpblxuICAgICAgY29uc29sZS5sb2codGhpcy5vcHBvbmVudC5nYW1lYm9hcmQuaGl0U2hvdHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIGF0dGFjayB3YXMgYSBtaXNzZWRTaG90Li4uXG4gICAgaWYgKHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLm1pc3NlZFNob3RzLmhhcyhgJHt4fSwke3l9YCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gbWlzc2VkIGF0ICR7eH0sJHt5fWApO1xuICAgICAgLy8gLi4uY29tcHV0ZXIgYXR0YWNrc1xuICAgICAgdGhpcy5vcHBvbmVudC5hdHRhY2tSYW5kb20oKTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2tSYW5kb20oKSB7XG4gICAgLy8gR2VuZXJhdGUgcmFuZG9tIHggYW5kIHlcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAvLyBpZiBjb29yZHMgbm90IGluIHNldC4uLlxuICAgIGlmICghdGhpcy5vcHBvbmVudC5nYW1lYm9hcmQuc2V0LmhhcyhgJHt4fSwke3l9YCkpIHtcbiAgICAgIC8vIC4uLmF0dGFjayBwbGF5ZXJcbiAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gYXR0YWNrcyAke3h9LCAke3l9YCk7XG4gICAgICB0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgLy8gaWYgaGl0Li4uXG4gICAgICBpZiAodGhpcy5vcHBvbmVudC5nYW1lYm9hcmQuaGl0U2hvdHMuaGFzKGAke3h9LCR7eX1gKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGhpdCBhdCAke3h9LCR7eX1gKTtcblxuICAgICAgICAvLyAuLi5hdHRhY2sgYWdhaW5cblxuICAgICAgICB0aGlzLmF0dGFja1JhbmRvbSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBtaXNzZWQuLi5cbiAgICAgIGlmICh0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5taXNzZWRTaG90cy5oYXMoYCR7eH0sJHt5fWApKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX0gbWlzc2VkIGF0ICR7eH0sJHt5fWApO1xuXG4gICAgICAgIC8vIC4uLnBsYXllcnMgdHVyblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgY29vcmRzIEFSRSBpbiBzZXRcbiAgICBpZiAodGhpcy5vcHBvbmVudC5nYW1lYm9hcmQuc2V0LmhhcyhgJHt4fSwke3l9YCkpIHtcbiAgICAgIC8vIGNhbGwgYXR0YWNrIHJlY3Vyc2l2bHkgYW5kIHN0YXJ0IG92ZXJcbiAgICAgIHRoaXMuYXR0YWNrUmFuZG9tKCk7XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd4Jykge1xuICAgICAgdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwTGVmdFRvUmlnaHQoeCwgeSwgbGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAneScpIHtcbiAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcFVwVG9Eb3duKHgsIHksIGxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwUmFuZG9tKGxlbmd0aCkge1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgaWYgKHJhbmRvbSA9PT0gMSkge1xuICAgICAgY29uc3QgbyA9ICd4JztcbiAgICAgIGxldCB4ID0gMDtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGNvbnN0IHsgcGxhY2VkU2hpcHMgfSA9IHRoaXMuZ2FtZWJvYXJkO1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IG5ldyBTZXQoKTtcbiAgICAgICAgbGV0IG5vdGhpbmdGb3VuZDtcbiAgICAgICAgbGV0IG9uZUluU2V0O1xuXG4gICAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBsZW5ndGgpKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgdGVtcC5hZGQoYCR7eH0sJHt5ICsgaX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY29vcmRzIG9mIHRlbXApIHtcbiAgICAgICAgICBpZiAocGxhY2VkU2hpcHMuaGFzKGNvb3JkcykpIHtcbiAgICAgICAgICAgIG5vdGhpbmdGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgb25lSW5TZXQgPSB0cnVlO1xuICAgICAgICAgICAgdGVtcC5jbGVhcigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub3RoaW5nRm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobm90aGluZ0ZvdW5kICYmICFvbmVJblNldCkge1xuICAgICAgICAgIHRoaXMucGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgbyk7XG4gICAgICAgICAgZmlyc3QuY2xlYXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmFuZG9tID09PSAwKSB7XG4gICAgICBjb25zdCBvID0gJ3knO1xuICAgICAgbGV0IHggPSAwO1xuICAgICAgbGV0IHkgPSAwO1xuICAgICAgY29uc3QgeyBwbGFjZWRTaGlwcyB9ID0gdGhpcy5nYW1lYm9hcmQ7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB0ZW1wID0gbmV3IFNldCgpO1xuICAgICAgICBsZXQgbm90aGluZ0ZvdW5kO1xuICAgICAgICBsZXQgb25lSW5TZXQ7XG5cbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIGxlbmd0aCkpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB0ZW1wLmFkZChgJHt4ICsgaX0sJHt5fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjb29yZHMgb2YgdGVtcCkge1xuICAgICAgICAgIGlmIChwbGFjZWRTaGlwcy5oYXMoY29vcmRzKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFRoZSBjb29yZHMgXCIke2Nvb3Jkc31cIiBhcmUgaW4gcGxhY2VkU2hpcHMgc2V0LmApO1xuICAgICAgICAgICAgbm90aGluZ0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBvbmVJblNldCA9IHRydWU7XG4gICAgICAgICAgICB0ZW1wLmNsZWFyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkb25lJyk7XG4gICAgICAgICAgICBub3RoaW5nRm91bmQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobm90aGluZ0ZvdW5kICYmICFvbmVJblNldCkge1xuICAgICAgICAgIHRoaXMucGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgbyk7XG4gICAgICAgICAgdGVtcC5jbGVhcigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVbbGVuZ3RoXTtcbiAgfVxuXG4gIHR5cGUgPSB7XG4gICAgLy8gMlxuICAgIDE6ICdQYXRyb2wgQm9hdCcsXG4gICAgLy8gM1xuICAgIDI6ICdDcnVpc2VyJyxcbiAgICAvLyAzXG4gICAgMzogJ1N1Ym1hcmluZScsXG4gICAgLy8gMlxuICAgIDQ6ICdCYXR0bGVzaGlwJyxcbiAgICAvLyAxXG4gICAgNTogJ0NhcnJpZXInLFxuICAgIC8vIDMwIGZpZWxkcyBpbiB0b3RhbFxuICB9O1xuXG4gIHRpbWVzSGl0ID0gMDtcblxuICBzYW5rID0gZmFsc2U7XG5cbiAgaGl0KCkge1xuICAgIHRoaXMudGltZXNIaXQgKz0gMTtcbiAgICBpZiAodGhpcy50aW1lc0hpdCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHRoaXMuc2FuayA9IHRydWU7XG4gICAgLy8gY29uc29sZS5sb2coYCR7dGhpcy50eXBlfSBkZXN0cm95ZWQhYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImNsYXNzIFVJIHtcbiAgc3RhdGljIGRpc3BsYXlJbkh0bWwocGxheWVyMSwgcGxheWVyMikge1xuICAgIGNvbnN0IHBsYXllciA9IHBsYXllcjE7XG4gICAgY29uc3QgY29tcHV0ZXIgPSBwbGF5ZXIyO1xuXG4gICAgLy8gZ2V0IGJvYXJkc1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5ncmlkO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBjb21wdXRlci5nYW1lYm9hcmQuZ3JpZDtcblxuICAgIC8vIGRlZmluZSBJRCBmcm9tIGh0bWxcbiAgICBjb25zdCBwbGF5ZXJCb2FyZElEID0gJ3BsYXllckJvYXJkJztcbiAgICBjb25zdCBjb21wdXRlckJvYXJkSUQgPSAnY29tcHV0ZXJCb2FyZCc7XG5cbiAgICAvLyBkaXNwbGF5IGJvYXJkcyBpbiBodG1sL0RPTVxuICAgIFVJLmRpc3BsYXlCb2FyZChwbGF5ZXJCb2FyZCwgcGxheWVyQm9hcmRJRCk7XG4gICAgVUkuZGlzcGxheUJvYXJkKGNvbXB1dGVyQm9hcmQsIGNvbXB1dGVyQm9hcmRJRCk7XG4gICAgVUkuYXR0YWNrT25DbGljayhwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICBVSS5wbGFjZVNoaXBPbkRyb3AocGxheWVyLCBjb21wdXRlcik7XG4gIH1cblxuICBzdGF0aWMgZGlzcGxheUJvYXJkKGJvYXJkLCBpZCkge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKTtcbiAgICBncmlkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JvdycpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpZH0ke2l9JHtqfWApO1xuXG4gICAgICAgIGlmIChpZCA9PT0gJ3BsYXllckJvYXJkJykge1xuICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlbXB0eScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb21wdXRlcmVtcHR5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBib2FyZFtpXVtqXTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmXG4gICAgICAgICAgdGFyZ2V0ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2FxdWFtYXJpbmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXF1YScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdibHVlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JsdWV2aW9sZXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2FkZXRibHVlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSB0YXJnZXQubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaGl0Jyk7XG4gICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnU0ghJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQgPT09ICdtaXNzZWQnKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ21pc3NlZCcpO1xuICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJ00nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZW1wdHknKTtcbiAgICAgICAgICBjZWxsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcm93LmFwcGVuZChjZWxsKTtcbiAgICAgIH1cblxuICAgICAgZ3JpZC5hcHBlbmQocm93KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYXR0YWNrT25DbGljayhwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gICAgY29uc3QgZmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyZW1wdHknKTtcbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgSUQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgY29uc3QgeCA9IElELnNsaWNlKC0yLCAtMSk7XG4gICAgICAgIGNvbnN0IHkgPSBJRC5zbGljZSgtMSk7XG5cbiAgICAgICAgcGxheWVyLmF0dGFjayh4LCB5KTtcbiAgICAgICAgVUkuZGlzcGxheUluSHRtbChwbGF5ZXIsIGNvbXB1dGVyKTtcblxuICAgICAgICAvLyBUaW1lb3V0IGZvciBsYXRlciA6KVxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnRGVsYXllZCBmb3IgMSBzZWNvbmQuJyk7XG4gICAgICAgIC8vICAgVUkuZGlzcGxheUluSHRtbChwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgLy8gfSwgMTAwMCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBwbGFjZVNoaXBPbkRyb3AocGxheWVyLCBjb21wdXRlcikge1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbGwnKTtcbiAgICBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbXB0eScpO1xuXG4gICAgLy8gRHJhZyBGdW5jdGlvbnNcblxuICAgIC8vIHNoaXBcbiAgICBmdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICAgICAgZS5kYXRhVHJhbnNmZXIuY2xlYXJEYXRhKCk7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZS50YXJnZXQuZGF0YXNldC5sZW5ndGgpO1xuXG4gICAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcblxuICAgICAgLy8gdGhpcy5jbGFzc05hbWUgKz0gJyBob2xkJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gKHRoaXMuY2xhc3NOYW1lID0gJ2ludmlzaWJsZScpLCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRW5kKCkge1xuICAgICAgLy8gdGhpcy5jbGFzc05hbWUgPSAnZmlsbCBzaGlwJztcbiAgICAgIFVJLmRpc3BsYXlJbkh0bWwocGxheWVyLCBjb21wdXRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdFbnRlcihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuY2xhc3NOYW1lICs9ICcgaG92ZXJlZCc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0xlYXZlKCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2xlYXZlJyk7XG4gICAgICB0aGlzLmNsYXNzTmFtZSA9ICdlbXB0eSc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0Ryb3AoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Ryb3AnKTtcbiAgICAgIGNvbnN0IGxlbmd0aCA9ICtlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG5cbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gJ2VtcHR5JztcbiAgICAgIGNvbnN0IElEID0gdGhpcy5pZDtcbiAgICAgIGNvbnN0IHggPSArSUQuc2xpY2UoLTIsIC0xKTtcbiAgICAgIGNvbnN0IHkgPSArSUQuc2xpY2UoLTEpO1xuXG4gICAgICBwbGF5ZXIucGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgJ3gnKTtcbiAgICB9XG5cbiAgICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyYWdEcm9wKTtcbiAgICB9KTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5oYXNFdmVudGxpc3RlbmVyKSB7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ0VuZCk7XG4gICAgICAgIHNoaXAuaGFzRXZlbnRsaXN0ZW5lciA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tXaW5uZXIocGxheWVyLCBjb21wdXRlcikge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrR2FtZW92ZXIoKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcHV0ZXIgd29uIScpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbXB1dGVyLmdhbWVib2FyZC5jaGVja0dhbWVvdmVyKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYXllciB3b24hJyk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuLy8gaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vbW9kdWxlcy9HYW1lJztcblxuZ2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9