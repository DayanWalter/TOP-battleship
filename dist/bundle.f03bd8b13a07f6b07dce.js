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
  width: 30px;
  height: 30px;
  border: 1px solid rgb(222, 83, 108);
}
main {
  display: grid;
  grid-template-columns: 450px 450px;
}

.fill {
  cursor: pointer;
}
.hold {
  border: 2px solid red;
  height: 30px;
}

#playerBoard,
#computerBoard {
  display: grid;
}

.empty,
.computerempty {
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 30px;
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
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-self: center;
}

.rotate {
  transform: rotate(90deg);
}

.ship {
  border: 1px solid black;
  height: 30px;
  margin: 5px;
  border-radius: 2px;
  box-shadow: 1px 1px 1px;
}
.carrier {
  width: 150px;
  background-color: aquamarine;
}
.battleship {
  width: 120px;
  background-color: aqua;
}
.submarine {
  width: 90px;
  background-color: blue;
}
.cruiser {
  width: 60px;
  background-color: blueviolet;
}
.patrolboat {
  width: 30px;
  background-color: cadetblue;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,uCAAuC;EACvC,WAAW;AACb;AACA;EACE,qCAAqC;AACvC;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mCAAmC;AACrC;AACA;EACE,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;;EAEE,aAAa;AACf;;AAEA;;EAEE,qBAAqB;EACrB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;AAC9B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,4BAA4B;AAC9B;AACA;EACE,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,4BAA4B;AAC9B;AACA;EACE,WAAW;EACX,2BAA2B;AAC7B","sourcesContent":["h1 {\n  font-family: 'Anonymous Pro', monospace;\n  color: blue;\n}\nli {\n  font-family: 'Montserrat', sans-serif;\n}\ntable {\n  border-collapse: collapse;\n}\n\ntd {\n  width: 30px;\n  height: 30px;\n  border: 1px solid rgb(222, 83, 108);\n}\nmain {\n  display: grid;\n  grid-template-columns: 450px 450px;\n}\n\n.fill {\n  cursor: pointer;\n}\n.hold {\n  border: 2px solid red;\n  height: 30px;\n}\n\n#playerBoard,\n#computerBoard {\n  display: grid;\n}\n\n.empty,\n.computerempty {\n  display: inline-block;\n  vertical-align: middle;\n  width: 30px;\n  height: 30px;\n  border: 1px solid rgb(222, 83, 108);\n  background: white;\n}\n\n.aquamarine {\n  background-color: aquamarine;\n}\n.aqua {\n  background-color: aqua;\n}\n.blue {\n  background-color: blue;\n}\n.blueviolet {\n  background-color: blueviolet;\n}\n.cadetblue {\n  background-color: cadetblue;\n}\n\n.hovered {\n  background: #ff9393;\n  border-style: dashed;\n}\n.invisible {\n  display: none;\n}\n\n.shipcontainer {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  justify-self: center;\n}\n\n.rotate {\n  transform: rotate(90deg);\n}\n\n.ship {\n  border: 1px solid black;\n  height: 30px;\n  margin: 5px;\n  border-radius: 2px;\n  box-shadow: 1px 1px 1px;\n}\n.carrier {\n  width: 150px;\n  background-color: aquamarine;\n}\n.battleship {\n  width: 120px;\n  background-color: aqua;\n}\n.submarine {\n  width: 90px;\n  background-color: blue;\n}\n.cruiser {\n  width: 60px;\n  background-color: blueviolet;\n}\n.patrolboat {\n  width: 30px;\n  background-color: cadetblue;\n}\n"],"sourceRoot":""}]);
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

  _UI__WEBPACK_IMPORTED_MODULE_1__["default"].changeDirection();

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
  _UI__WEBPACK_IMPORTED_MODULE_1__["default"].checkWinner(player, computer);
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
      this.grid[x + i][y] = ship;
      this.placedShips.add(`${x + i},${y}`);
    }
  }

  receiveAttack(x, y) {
    const target = this.grid[x][y];

    const coords = `${x},${y}`;
    if (target === 'missed' || target === 'hit') {
      return console.log('ALREADY SHOT AT X!!!');
    }
    // Field is a ship
    if (
      typeof target === 'object' &&
      !Array.isArray(target) &&
      target !== null
    ) {
      this.set.add(coords);
      this.hitShots.add(coords);
      console.log(
        '🚀 ~ file: Gameboard.js:70 ~ Gameboard ~ receiveAttack ~ this.hitShots:',
        this.hitShots
      );
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
    if (this.hitShots.size >= 10) {
      console.log(
        '🚀 ~ file: Gameboard.js:92 ~ Gameboard ~ checkGameover ~ this.hitShots:',
        this.hitShots
      );
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
      // setTimeout(() => {
      this.opponent.gameboard.receiveAttack(x, y);
      // }, 1200);
      // if hit...
      if (this.opponent.gameboard.hitShots.has(`${x},${y}`)) {
        // ...attack again
        // setTimeout(() => {
        this.attackRandom();
        // }, 1000);
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
          temp.clear();
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
            nothingFound = false;
            oneInSet = true;
            temp.clear();
          } else {
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

        // if (id === 'playerBoard') {
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

          // cell.innerHTML = target.length;
        }
        // }
        if (target === 'hit') {
          // console.log('hit');
          // cell.innerHTML = 'SH!';
          cell.style.backgroundColor = 'red';
        }

        if (target === 'missed') {
          // console.log('missed');
          // cell.innerHTML = 'M';
          cell.style.backgroundColor = 'yellow';
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
        // UI.displayInHtml(player, computer);

        // Timeout for later :)
        UI.displayInHtml(player, computer);
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
      e.dataTransfer.setData('length', e.target.dataset.length);
      e.dataTransfer.setData('orientation', e.target.dataset.orientation);

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
      const length = +e.dataTransfer.getData('length');
      const orientation = e.dataTransfer.getData('orientation');

      this.className = 'empty';
      const ID = this.id;
      const x = +ID.slice(-2, -1);
      const y = +ID.slice(-1);

      player.placeShip(x, y, length, orientation);
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

  static changeDirection() {
    const button = document.querySelector('#changeDirection');
    button.addEventListener('click', () => {
      const ships = document.querySelectorAll('.ship');
      const shipContainer = document.getElementById('ships');

      ships.forEach((ship) => {
        if (ship.dataset.orientation === 'x') {
          button.innerText = 'Switch to X';
          shipContainer.className = 'rotate';

          ship.setAttribute('data-orientation', 'y');
          // add class with new direction
        } else {
          button.innerText = 'Switch to Y';
          shipContainer.className = 'ships';

          ship.setAttribute('data-orientation', 'x');
          // add class with new direction
        }

        console.log(ship.dataset.orientation);
      });
      // console.log(ships);
    });
  }

  static checkWinner(player, computer) {
    setInterval(() => {
      if (player.gameboard.checkGameover()) {
        alert('Computer won!');
      }
      if (computer.gameboard.checkGameover()) {
        alert('Player won!');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUc7QUFDL0M7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBLG1DQUFtQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7O0FBRTlDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7O1VDak5sQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDcUI7QUFDYTs7QUFFbEMseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9HYW1lLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL1BsYXllci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvU2hpcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaDEge1xuICBmb250LWZhbWlseTogJ0Fub255bW91cyBQcm8nLCBtb25vc3BhY2U7XG4gIGNvbG9yOiBibHVlO1xufVxubGkge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50ZCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjIsIDgzLCAxMDgpO1xufVxubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUwcHggNDUwcHg7XG59XG5cbi5maWxsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbGQge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGhlaWdodDogMzBweDtcbn1cblxuI3BsYXllckJvYXJkLFxuI2NvbXB1dGVyQm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uZW1wdHksXG4uY29tcHV0ZXJlbXB0eSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMiwgODMsIDEwOCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYXF1YW1hcmluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG4uYXF1YSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG4uYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uYmx1ZXZpb2xldCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59XG4uY2FkZXRibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xufVxuXG4uaG92ZXJlZCB7XG4gIGJhY2tncm91bmQ6ICNmZjkzOTM7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xufVxuLmludmlzaWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaGlwY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnJvdGF0ZSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnNoaXAge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweDtcbn1cbi5jYXJyaWVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xufVxuLmJhdHRsZXNoaXAge1xuICB3aWR0aDogMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG59XG4uc3VibWFyaW5lIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG4uY3J1aXNlciB7XG4gIHdpZHRoOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xufVxuLnBhdHJvbGJvYXQge1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLFdBQVc7QUFDYjtBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaDEge1xcbiAgZm9udC1mYW1pbHk6ICdBbm9ueW1vdXMgUHJvJywgbW9ub3NwYWNlO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcbmxpIHtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbnRkIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyMiwgODMsIDEwOCk7XFxufVxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUwcHggNDUwcHg7XFxufVxcblxcbi5maWxsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhvbGQge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jcGxheWVyQm9hcmQsXFxuI2NvbXB1dGVyQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmVtcHR5LFxcbi5jb21wdXRlcmVtcHR5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjIsIDgzLCAxMDgpO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5hcXVhbWFyaW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcbi5hcXVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcbi5ibHVlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcbi5ibHVldmlvbGV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcbi5jYWRldGJsdWUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xcbn1cXG5cXG4uaG92ZXJlZCB7XFxuICBiYWNrZ3JvdW5kOiAjZmY5MzkzO1xcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XFxufVxcbi5pbnZpc2libGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNoaXBjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4O1xcbn1cXG4uY2FycmllciB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cXG4uYmF0dGxlc2hpcCB7XFxuICB3aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG4uc3VibWFyaW5lIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuLmNydWlzZXIge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG4ucGF0cm9sYm9hdCB7XFxuICB3aWR0aDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IFVJIGZyb20gJy4vVUknO1xuXG5mdW5jdGlvbiBnYW1lKCkge1xuICAvLyBpbml0aWFsaXplIHBsYXllclxuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCdQbGF5ZXInKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKCdDb21wdXRlcicpO1xuICAvLyBzZXQgb3Bwb25lbnRzXG4gIHBsYXllci5zZXRPcHBvbmVudChjb21wdXRlcik7XG4gIGNvbXB1dGVyLnNldE9wcG9uZW50KHBsYXllcik7XG5cbiAgVUkuY2hhbmdlRGlyZWN0aW9uKCk7XG5cbiAgY29tcHV0ZXIucGxhY2VTaGlwUmFuZG9tKDUpO1xuICBjb21wdXRlci5wbGFjZVNoaXBSYW5kb20oNCk7XG4gIGNvbXB1dGVyLnBsYWNlU2hpcFJhbmRvbSg0KTtcbiAgY29tcHV0ZXIucGxhY2VTaGlwUmFuZG9tKDMpO1xuICBjb21wdXRlci5wbGFjZVNoaXBSYW5kb20oMyk7XG4gIGNvbXB1dGVyLnBsYWNlU2hpcFJhbmRvbSgzKTtcbiAgY29tcHV0ZXIucGxhY2VTaGlwUmFuZG9tKDIpO1xuICBjb21wdXRlci5wbGFjZVNoaXBSYW5kb20oMik7XG4gIGNvbXB1dGVyLnBsYWNlU2hpcFJhbmRvbSgyKTtcbiAgY29tcHV0ZXIucGxhY2VTaGlwUmFuZG9tKDEpO1xuICBjb21wdXRlci5wbGFjZVNoaXBSYW5kb20oMSk7XG5cbiAgLy8gZGlzcGxheSBib2FyZHMgaW4gaHRtbFxuICBVSS5kaXNwbGF5SW5IdG1sKHBsYXllciwgY29tcHV0ZXIpO1xuXG4gIC8vIFVJLnBsYWNlU2hpcE9uRHJvcChwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgLy8gY2hlY2sgZm9yIHdpbm5lclxuICBVSS5jaGVja1dpbm5lcihwbGF5ZXIsIGNvbXB1dGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGdyaWQgPSBHYW1lYm9hcmQuY3JlYXRlR3JpZCgpO1xuXG4gIHNldCA9IG5ldyBTZXQoKTtcblxuICBtaXNzZWRTaG90cyA9IG5ldyBTZXQoKTtcblxuICBwbGFjZWRTaGlwcyA9IG5ldyBTZXQoKTtcblxuICBoaXRTaG90cyA9IG5ldyBTZXQoKTtcblxuICBzdGF0aWMgY3JlYXRlR3JpZCgpIHtcbiAgICBjb25zdCBncmlkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBncmlkW2ldID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgZ3JpZFtpXVtqXSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhncmlkKTtcbiAgICByZXR1cm4gZ3JpZDtcblxuICAgIC8vIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KDEpO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIC8vICAgYXJyYXlbaV0gPSBuZXcgQXJyYXkoMTApO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhhcnJheSk7XG4gICAgLy8gcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgcGxhY2VTaGlwTGVmdFRvUmlnaHQoeCwgeSwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG5cbiAgICAvLyBwbGFjZSBzaGlwIGhvcml6b250YWxseSBmcm9tIGxlZnQgdG8gcmlnaHRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgeCBpbiBmdW5jdGlvbjoke3h9XG4gICAgICAvLyB5IGluIGZ1bmN0aW9uOiAke3kgKyBpfWApO1xuICAgICAgdGhpcy5ncmlkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICB0aGlzLnBsYWNlZFNoaXBzLmFkZChgJHt4fSwke3kgKyBpfWApO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcFVwVG9Eb3duKHgsIHksIGxlbmd0aCkge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuXG4gICAgLy8gcGxhY2Ugc2hpcCB2ZXJ0aWNhbGx5IGZyb20gdXAgdG8gZG93blxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMuZ3JpZFt4ICsgaV1beV0gPSBzaGlwO1xuICAgICAgdGhpcy5wbGFjZWRTaGlwcy5hZGQoYCR7eCArIGl9LCR7eX1gKTtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmdyaWRbeF1beV07XG5cbiAgICBjb25zdCBjb29yZHMgPSBgJHt4fSwke3l9YDtcbiAgICBpZiAodGFyZ2V0ID09PSAnbWlzc2VkJyB8fCB0YXJnZXQgPT09ICdoaXQnKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coJ0FMUkVBRFkgU0hPVCBBVCBYISEhJyk7XG4gICAgfVxuICAgIC8vIEZpZWxkIGlzIGEgc2hpcFxuICAgIGlmIChcbiAgICAgIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnICYmXG4gICAgICAhQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmXG4gICAgICB0YXJnZXQgIT09IG51bGxcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0LmFkZChjb29yZHMpO1xuICAgICAgdGhpcy5oaXRTaG90cy5hZGQoY29vcmRzKTtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAn8J+agCB+IGZpbGU6IEdhbWVib2FyZC5qczo3MCB+IEdhbWVib2FyZCB+IHJlY2VpdmVBdHRhY2sgfiB0aGlzLmhpdFNob3RzOicsXG4gICAgICAgIHRoaXMuaGl0U2hvdHNcbiAgICAgICk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgICAgdGFyZ2V0LmhpdCgpO1xuICAgICAgdGhpcy5ncmlkW3hdW3ldID0gJ2hpdCc7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBGaWVsZCBpcyBlbXB0eS93YXRlclxuICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnd2F0ZXInKTtcbiAgICAgIHRoaXMuc2V0LmFkZChjb29yZHMpO1xuICAgICAgdGhpcy5taXNzZWRTaG90cy5hZGQoY29vcmRzKTtcblxuICAgICAgdGhpcy5ncmlkW3hdW3ldID0gJ21pc3NlZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKGBPT1BTIFNPTUVUSElORyBFU0NBUEVEIC0gQ29vcmRzIGF0IHg6JHt4fSwgeToke3l9YCk7XG4gIH1cblxuICBjaGVja0dhbWVvdmVyKCkge1xuICAgIC8vIGNoZWNrIGV2ZXJ5IHJvdW5kP1xuICAgIGlmICh0aGlzLmhpdFNob3RzLnNpemUgPj0gMTApIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAn8J+agCB+IGZpbGU6IEdhbWVib2FyZC5qczo5MiB+IEdhbWVib2FyZCB+IGNoZWNrR2FtZW92ZXIgfiB0aGlzLmhpdFNob3RzOicsXG4gICAgICAgIHRoaXMuaGl0U2hvdHNcbiAgICAgICk7XG4gICAgICAvLyB0aGUgb3RoZXIgcGxheWVyIHdvblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vR2FtZWJvYXJkJztcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBvcHBvbmVudCA9IG51bGw7XG5cbiAgZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIHNldE9wcG9uZW50KG9wcG9uZW50KSB7XG4gICAgdGhpcy5vcHBvbmVudCA9IG9wcG9uZW50O1xuICB9XG5cbiAgYXR0YWNrKHgsIHkpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGF0dGFja3MgJHt4fSwgJHt5fWApO1xuICAgIC8vIEF0dGFjayBnYW1lYm9hcmQgb2YgY29tcHV0ZXJcbiAgICB0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXG4gICAgLy8gaWYgYXR0YWNrIHdhcyBhIGhpdC4uLlxuICAgIGlmICh0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5oaXRTaG90cy5oYXMoYCR7eH0sJHt5fWApKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGhpdCBhdCAke3h9LCR7eX1gKTtcbiAgICAgIC8vIC4uLmF0dGFjayBhZ2FpblxuICAgICAgY29uc29sZS5sb2codGhpcy5vcHBvbmVudC5nYW1lYm9hcmQuaGl0U2hvdHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIGF0dGFjayB3YXMgYSBtaXNzZWRTaG90Li4uXG4gICAgaWYgKHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLm1pc3NlZFNob3RzLmhhcyhgJHt4fSwke3l9YCkpIHtcbiAgICAgIC8vIC4uLmNvbXB1dGVyIGF0dGFja3NcbiAgICAgIHRoaXMub3Bwb25lbnQuYXR0YWNrUmFuZG9tKCk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNrUmFuZG9tKCkge1xuICAgIC8vIEdlbmVyYXRlIHJhbmRvbSB4IGFuZCB5XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgLy8gaWYgY29vcmRzIG5vdCBpbiBzZXQuLi5cbiAgICBpZiAoIXRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLnNldC5oYXMoYCR7eH0sJHt5fWApKSB7XG4gICAgICAvLyAuLi5hdHRhY2sgcGxheWVyXG4gICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAvLyB9LCAxMjAwKTtcbiAgICAgIC8vIGlmIGhpdC4uLlxuICAgICAgaWYgKHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLmhpdFNob3RzLmhhcyhgJHt4fSwke3l9YCkpIHtcbiAgICAgICAgLy8gLi4uYXR0YWNrIGFnYWluXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmF0dGFja1JhbmRvbSgpO1xuICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgbWlzc2VkLi4uXG4gICAgICBpZiAodGhpcy5vcHBvbmVudC5nYW1lYm9hcmQubWlzc2VkU2hvdHMuaGFzKGAke3h9LCR7eX1gKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IG1pc3NlZCBhdCAke3h9LCR7eX1gKTtcblxuICAgICAgICAvLyAuLi5wbGF5ZXJzIHR1cm5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIGNvb3JkcyBBUkUgaW4gc2V0XG4gICAgaWYgKHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLnNldC5oYXMoYCR7eH0sJHt5fWApKSB7XG4gICAgICAvLyBjYWxsIGF0dGFjayByZWN1cnNpdmx5IGFuZCBzdGFydCBvdmVyXG4gICAgICB0aGlzLmF0dGFja1JhbmRvbSgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIG9yaWVudGF0aW9uKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAneCcpIHtcbiAgICAgIHRoaXMuZ2FtZWJvYXJkLnBsYWNlU2hpcExlZnRUb1JpZ2h0KHgsIHksIGxlbmd0aCk7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3knKSB7XG4gICAgICB0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXBVcFRvRG93bih4LCB5LCBsZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcFJhbmRvbShsZW5ndGgpIHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgIGlmIChyYW5kb20gPT09IDEpIHtcbiAgICAgIGNvbnN0IG8gPSAneCc7XG4gICAgICBsZXQgeCA9IDA7XG4gICAgICBsZXQgeSA9IDA7XG4gICAgICBjb25zdCB7IHBsYWNlZFNoaXBzIH0gPSB0aGlzLmdhbWVib2FyZDtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBuZXcgU2V0KCk7XG4gICAgICAgIGxldCBub3RoaW5nRm91bmQ7XG4gICAgICAgIGxldCBvbmVJblNldDtcblxuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gbGVuZ3RoKSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHRlbXAuYWRkKGAke3h9LCR7eSArIGl9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNvb3JkcyBvZiB0ZW1wKSB7XG4gICAgICAgICAgaWYgKHBsYWNlZFNoaXBzLmhhcyhjb29yZHMpKSB7XG4gICAgICAgICAgICBub3RoaW5nRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIG9uZUluU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRlbXAuY2xlYXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm90aGluZ0ZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdGhpbmdGb3VuZCAmJiAhb25lSW5TZXQpIHtcbiAgICAgICAgICB0aGlzLnBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIG8pO1xuICAgICAgICAgIHRlbXAuY2xlYXIoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmFuZG9tID09PSAwKSB7XG4gICAgICBjb25zdCBvID0gJ3knO1xuICAgICAgbGV0IHggPSAwO1xuICAgICAgbGV0IHkgPSAwO1xuICAgICAgY29uc3QgeyBwbGFjZWRTaGlwcyB9ID0gdGhpcy5nYW1lYm9hcmQ7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCB0ZW1wID0gbmV3IFNldCgpO1xuICAgICAgICBsZXQgbm90aGluZ0ZvdW5kO1xuICAgICAgICBsZXQgb25lSW5TZXQ7XG5cbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIGxlbmd0aCkpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB0ZW1wLmFkZChgJHt4ICsgaX0sJHt5fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjb29yZHMgb2YgdGVtcCkge1xuICAgICAgICAgIGlmIChwbGFjZWRTaGlwcy5oYXMoY29vcmRzKSkge1xuICAgICAgICAgICAgbm90aGluZ0ZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBvbmVJblNldCA9IHRydWU7XG4gICAgICAgICAgICB0ZW1wLmNsZWFyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vdGhpbmdGb3VuZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChub3RoaW5nRm91bmQgJiYgIW9uZUluU2V0KSB7XG4gICAgICAgICAgdGhpcy5wbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBvKTtcbiAgICAgICAgICB0ZW1wLmNsZWFyKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZVtsZW5ndGhdO1xuICB9XG5cbiAgdHlwZSA9IHtcbiAgICAvLyAyXG4gICAgMTogJ1BhdHJvbCBCb2F0JyxcbiAgICAvLyAzXG4gICAgMjogJ0NydWlzZXInLFxuICAgIC8vIDNcbiAgICAzOiAnU3VibWFyaW5lJyxcbiAgICAvLyAyXG4gICAgNDogJ0JhdHRsZXNoaXAnLFxuICAgIC8vIDFcbiAgICA1OiAnQ2FycmllcicsXG4gICAgLy8gMzAgZmllbGRzIGluIHRvdGFsXG4gIH07XG5cbiAgdGltZXNIaXQgPSAwO1xuXG4gIHNhbmsgPSBmYWxzZTtcblxuICBoaXQoKSB7XG4gICAgdGhpcy50aW1lc0hpdCArPSAxO1xuICAgIGlmICh0aGlzLnRpbWVzSGl0ID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgdGhpcy5zYW5rID0gdHJ1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyhgJHt0aGlzLnR5cGV9IGRlc3Ryb3llZCFgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiY2xhc3MgVUkge1xuICBzdGF0aWMgZGlzcGxheUluSHRtbChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgY29uc3QgcGxheWVyID0gcGxheWVyMTtcbiAgICBjb25zdCBjb21wdXRlciA9IHBsYXllcjI7XG5cbiAgICAvLyBnZXQgYm9hcmRzXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmdyaWQ7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGNvbXB1dGVyLmdhbWVib2FyZC5ncmlkO1xuXG4gICAgLy8gZGVmaW5lIElEIGZyb20gaHRtbFxuICAgIGNvbnN0IHBsYXllckJvYXJkSUQgPSAncGxheWVyQm9hcmQnO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRJRCA9ICdjb21wdXRlckJvYXJkJztcblxuICAgIC8vIGRpc3BsYXkgYm9hcmRzIGluIGh0bWwvRE9NXG4gICAgVUkuZGlzcGxheUJvYXJkKHBsYXllckJvYXJkLCBwbGF5ZXJCb2FyZElEKTtcbiAgICBVSS5kaXNwbGF5Qm9hcmQoY29tcHV0ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZElEKTtcbiAgICBVSS5hdHRhY2tPbkNsaWNrKHBsYXllciwgY29tcHV0ZXIpO1xuICAgIFVJLnBsYWNlU2hpcE9uRHJvcChwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNwbGF5Qm9hcmQoYm9hcmQsIGlkKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xuICAgIGdyaWQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncm93Jyk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdpZCcsIGAke2lkfSR7aX0ke2p9YCk7XG5cbiAgICAgICAgaWYgKGlkID09PSAncGxheWVyQm9hcmQnKSB7XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VtcHR5Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbXB1dGVyZW1wdHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGJvYXJkW2ldW2pdO1xuXG4gICAgICAgIC8vIGlmIChpZCA9PT0gJ3BsYXllckJvYXJkJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAhQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmXG4gICAgICAgICAgdGFyZ2V0ICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2FxdWFtYXJpbmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnYXF1YScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdibHVlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2JsdWV2aW9sZXQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2FkZXRibHVlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2VsbC5pbm5lckhUTUwgPSB0YXJnZXQubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaGl0Jyk7XG4gICAgICAgICAgLy8gY2VsbC5pbm5lckhUTUwgPSAnU0ghJztcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gJ21pc3NlZCcpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbWlzc2VkJyk7XG4gICAgICAgICAgLy8gY2VsbC5pbm5lckhUTUwgPSAnTSc7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VtcHR5Jyk7XG4gICAgICAgICAgY2VsbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdy5hcHBlbmQoY2VsbCk7XG4gICAgICB9XG5cbiAgICAgIGdyaWQuYXBwZW5kKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGF0dGFja09uQ2xpY2socGxheWVyLCBjb21wdXRlcikge1xuICAgIGNvbnN0IGZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlcmVtcHR5Jyk7XG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IElEID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIGNvbnN0IHggPSBJRC5zbGljZSgtMiwgLTEpO1xuICAgICAgICBjb25zdCB5ID0gSUQuc2xpY2UoLTEpO1xuXG4gICAgICAgIHBsYXllci5hdHRhY2soeCwgeSk7XG4gICAgICAgIC8vIFVJLmRpc3BsYXlJbkh0bWwocGxheWVyLCBjb21wdXRlcik7XG5cbiAgICAgICAgLy8gVGltZW91dCBmb3IgbGF0ZXIgOilcbiAgICAgICAgVUkuZGlzcGxheUluSHRtbChwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHBsYWNlU2hpcE9uRHJvcChwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsbCcpO1xuICAgIGNvbnN0IGJveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVtcHR5Jyk7XG5cbiAgICAvLyBEcmFnIEZ1bmN0aW9uc1xuXG4gICAgLy8gc2hpcFxuICAgIGZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gICAgICBlLmRhdGFUcmFuc2Zlci5jbGVhckRhdGEoKTtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ2xlbmd0aCcsIGUudGFyZ2V0LmRhdGFzZXQubGVuZ3RoKTtcbiAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ29yaWVudGF0aW9uJywgZS50YXJnZXQuZGF0YXNldC5vcmllbnRhdGlvbik7XG5cbiAgICAgIC8vIHRoaXMuY2xhc3NOYW1lICs9ICcgaG9sZCc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLmNsYXNzTmFtZSA9ICdpbnZpc2libGUnKSwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ0VuZCgpIHtcbiAgICAgIC8vIHRoaXMuY2xhc3NOYW1lID0gJ2ZpbGwgc2hpcCc7XG4gICAgICBVSS5kaXNwbGF5SW5IdG1sKHBsYXllciwgY29tcHV0ZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmFnRW50ZXIoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0aGlzLmNsYXNzTmFtZSArPSAnIGhvdmVyZWQnO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdMZWF2ZSgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2ZScpO1xuICAgICAgdGhpcy5jbGFzc05hbWUgPSAnZW1wdHknO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdEcm9wKGUpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9ICtlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdsZW5ndGgnKTtcbiAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnb3JpZW50YXRpb24nKTtcblxuICAgICAgdGhpcy5jbGFzc05hbWUgPSAnZW1wdHknO1xuICAgICAgY29uc3QgSUQgPSB0aGlzLmlkO1xuICAgICAgY29uc3QgeCA9ICtJRC5zbGljZSgtMiwgLTEpO1xuICAgICAgY29uc3QgeSA9ICtJRC5zbGljZSgtMSk7XG5cbiAgICAgIHBsYXllci5wbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgfVxuXG4gICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xuICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnRHJvcCk7XG4gICAgfSk7XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaGFzRXZlbnRsaXN0ZW5lcikge1xuICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWdFbmQpO1xuICAgICAgICBzaGlwLmhhc0V2ZW50bGlzdGVuZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGNoYW5nZURpcmVjdGlvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmdlRGlyZWN0aW9uJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuICAgICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwcycpO1xuXG4gICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmRhdGFzZXQub3JpZW50YXRpb24gPT09ICd4Jykge1xuICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnU3dpdGNoIHRvIFgnO1xuICAgICAgICAgIHNoaXBDb250YWluZXIuY2xhc3NOYW1lID0gJ3JvdGF0ZSc7XG5cbiAgICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmllbnRhdGlvbicsICd5Jyk7XG4gICAgICAgICAgLy8gYWRkIGNsYXNzIHdpdGggbmV3IGRpcmVjdGlvblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAnU3dpdGNoIHRvIFknO1xuICAgICAgICAgIHNoaXBDb250YWluZXIuY2xhc3NOYW1lID0gJ3NoaXBzJztcblxuICAgICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkYXRhLW9yaWVudGF0aW9uJywgJ3gnKTtcbiAgICAgICAgICAvLyBhZGQgY2xhc3Mgd2l0aCBuZXcgZGlyZWN0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhzaGlwLmRhdGFzZXQub3JpZW50YXRpb24pO1xuICAgICAgfSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaGlwcyk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tXaW5uZXIocGxheWVyLCBjb21wdXRlcikge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrR2FtZW92ZXIoKSkge1xuICAgICAgICBhbGVydCgnQ29tcHV0ZXIgd29uIScpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbXB1dGVyLmdhbWVib2FyZC5jaGVja0dhbWVvdmVyKCkpIHtcbiAgICAgICAgYWxlcnQoJ1BsYXllciB3b24hJyk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xuLy8gaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vbW9kdWxlcy9HYW1lJztcblxuZ2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9