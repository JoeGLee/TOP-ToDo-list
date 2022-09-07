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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --font-color: #f7f7ff;\n    --header-color: #495867;\n    --nav-background: #577399;\n}\n\n\n\n*{\n    margin: 0;\n    font-family:sans-serif;\n}\nbody{\n    margin: 0;\n}\n.content{\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    grid-template-rows: 1fr 8fr;\n    \n}\n/* ------Header------ */\n.header{\n    height: 100px;\n    grid-column: 1/3;\n    background-color: var(--header-color);\n    display: flex;\n    align-items: center;\n}\n\n.headerTitle{\n    margin-left: 80px;\n\n    color: var(--font-color);\n}\n\n/* ------NavBar----- */\n\n/* Main nav */\n.nav{\n    background-color: var(--nav-background);\n    grid-column: 1/2;\n    grid-row: 2/3;\n    display: grid;\n    grid-template-rows: 1fr 3fr;\n}\n\n.btnContainer{\n    justify-self: center;\n    padding: 0;\n    margin-top: 75px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.btns{\n    list-style-type: none;\n}\n\n.navBtns{\n    width: 100px;\n    font-size: 30px;\n    border-style: none;\n    background-color: var(--nav-background);\n    color: var(--font-color);\n}\n\n.navBtns:hover{\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n/* project */\n\n/* main project container */\n.projectContainer{\n    justify-self: center;\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n    gap: 20px;\n}\n\n\n.projectTitle{\n    color: var(--font-color);\n    text-decoration: underline;\n}\n/* project userinput */\n.addProjectBtn{\n    font-size: 20px;\n    border-style: none;\n    background-color: var(--nav-background);\n    color: var(--font-color);\n}\n\n.addProjectBtn:hover{\n    color: #FE5F55;\n    cursor: pointer;\n}\n\n.projectInput{\n    transform: scale(0);\n    background-color: #FE5F55;\n    gap: 10px;\n    margin-left: 10px;\n    margin-right: 10px;\n    width: 95%;\n    height: 20%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    justify-items: center;\n    align-items: center;\n    border-radius: 15px;\n\n   \n}\n\n\n#name{\n    width: 150px;\n    height: 30px;\n    background-color: #FE5F55;\n    color: black;\n    border-style: none;\n    border-bottom: 1px solid;\n}\n\n#priority{\n    height: 30px;\n    margin-left: 5px;\n    background-color: #FE5F55;\n}\n\n.submitProject, .resetProject{\n    background-color: #FE5F55;\n    border-style: none;\n    border: 1px solid var(--font-color);\n    color: var(--font-color);\n    width: 70px;\n    height: 30px;\n    border-radius: 10px;\n}\n\n.submitProject{\n    justify-self: end;\n}\n\n.submitProject:hover, .resetProject:hover{\n    background-color: #fdbab5;\n    color: black;\n    cursor: pointer;\n}\n\n.project{\n    display: flex;\n    gap: 20px;\n}\n\n.projectName{\n    color: var(--font-color);\n}\n\n.red{\n    margin-top: 3px;\n   width: 15px;\n   height: 15px;\n   border-radius: 10px;\n    color: var(--font-color);\n    background-color: red;\n    border: 2px solid;\n}\n.green{\n    margin-top: 3px;\n    width: 15px;\n    height: 15px;\n    border-radius: 10px;\n    color: var(--font-color);\n    border: 2px solid;\n    background-color: rgb(83, 181, 83);\n}\n.orange{\n    margin-top: 3px;\n    width: 15px;\n    height: 15px;\n    border-radius: 10px;\n    color: var(--font-color);\n    border: 2px solid;\n    background-color: rgb(247, 171, 28);\n}\n\n.deleteProject{\n    background-color: var(--nav-background);\n    border-style: none;\n    color: var(--font-color);\n    font-size: 20px;\n}\n\n.deleteProject:hover{\n    color:#FE5F55;\n    cursor: pointer;\n}\n\n.projectName:hover{\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.clicked{\n    color: #FE5F55;\n}\n\n.todoContainer{\n    margin-top: 50px;\n    display: flex;\n    gap:10px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.addTask{\n    font-size: 40px;\n    width: 70px;\n    height: 60px;\n    padding-bottom: 10px;\n    border-radius: 20px;\n    border-style: none;\n    color: var(--font-color);\n    background-color: var(--nav-background);\n}\n\n.addTask:hover{\n   background-color: #697785;\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.todoForm{\n    transform: scale(0);\n    margin-bottom: 10px;\n    width: 80%;\n    height: 8%; \n    border-radius: 20px;\n    border: solid black 3px;\n    background-color: #697785;\n    display: flex;\n\n    gap: 25px;\n    align-items: center;\n}\n.addTaskBtnContainer{\n    display: flex;\n    gap: 10px;\n    margin-left: 25%;\n}\n\n.taskInput{\n    margin-left: 50px;\n}\n\n.addTaskBtn,.cancelTaskAddBtn{\n    width: 75px;\n    height: 30px;\n    border-radius: 10px;\n    border-style: none;\n}\n\n.addTaskBtn:hover{\n    cursor: pointer;\n    background-color: #93dc5f;\n    color: var(--font-color);\n}\n.cancelTaskAddBtn:hover{\n    cursor: pointer;\n    background-color: #FE5F55;\n    color: var(--font-color);\n}\n\n.active{\n    transform: scale(1);\n}\n\n.taskContainer{\n    width: 80%;\n    height: 6%;\n    display: flex;\n    border-radius: 20px;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    background-color: var(--header-color);\n    color: var(--font-color);\n}\n\n.taskName{\n    margin-left: 50px;\n   \n}\n\n.taskContainer > p{\n    font-size: 20px;\n}\n\n.deleteTask{\n    margin-right: 30px;\n    border-style: none;\n    background-color: var(--header-color);\n    color: var(--font-color);\n    font-size: 20px;\n}\n\n.deleteTask:hover{\n    color:#FE5F55;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,yBAAyB;AAC7B;;;;AAIA;IACI,SAAS;IACT,sBAAsB;AAC1B;AACA;IACI,SAAS;AACb;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;;AAE/B;AACA,uBAAuB;AACvB;IACI,aAAa;IACb,gBAAgB;IAChB,qCAAqC;IACrC,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;;IAEjB,wBAAwB;AAC5B;;AAEA,sBAAsB;;AAEtB,aAAa;AACb;IACI,uCAAuC;IACvC,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,uCAAuC;IACvC,wBAAwB;AAC5B;;AAEA;IACI,0BAA0B;IAC1B,eAAe;AACnB;;AAEA,YAAY;;AAEZ,2BAA2B;AAC3B;IACI,oBAAoB;IACpB,aAAa;IACb,sBAAsB;;IAEtB,mBAAmB;IACnB,SAAS;AACb;;;AAGA;IACI,wBAAwB;IACxB,0BAA0B;AAC9B;AACA,sBAAsB;AACtB;IACI,eAAe;IACf,kBAAkB;IAClB,uCAAuC;IACvC,wBAAwB;AAC5B;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,SAAS;IACT,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,mBAAmB;IACnB,mBAAmB;;;AAGvB;;;AAGA;IACI,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,mCAAmC;IACnC,wBAAwB;IACxB,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;GAChB,WAAW;GACX,YAAY;GACZ,mBAAmB;IAClB,wBAAwB;IACxB,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,iBAAiB;IACjB,kCAAkC;AACtC;AACA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,wBAAwB;IACxB,iBAAiB;IACjB,mCAAmC;AACvC;;AAEA;IACI,uCAAuC;IACvC,kBAAkB;IAClB,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,QAAQ;IACR,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,wBAAwB;IACxB,uCAAuC;AAC3C;;AAEA;GACG,yBAAyB;EAC1B,qBAAqB;EACrB,eAAe;AACjB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,UAAU;IACV,UAAU;IACV,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,aAAa;;IAEb,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,wBAAwB;AAC5B;AACA;IACI,eAAe;IACf,yBAAyB;IACzB,wBAAwB;AAC5B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,qCAAqC;IACrC,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,qCAAqC;IACrC,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB","sourcesContent":[":root{\n    --font-color: #f7f7ff;\n    --header-color: #495867;\n    --nav-background: #577399;\n}\n\n\n\n*{\n    margin: 0;\n    font-family:sans-serif;\n}\nbody{\n    margin: 0;\n}\n.content{\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    grid-template-rows: 1fr 8fr;\n    \n}\n/* ------Header------ */\n.header{\n    height: 100px;\n    grid-column: 1/3;\n    background-color: var(--header-color);\n    display: flex;\n    align-items: center;\n}\n\n.headerTitle{\n    margin-left: 80px;\n\n    color: var(--font-color);\n}\n\n/* ------NavBar----- */\n\n/* Main nav */\n.nav{\n    background-color: var(--nav-background);\n    grid-column: 1/2;\n    grid-row: 2/3;\n    display: grid;\n    grid-template-rows: 1fr 3fr;\n}\n\n.btnContainer{\n    justify-self: center;\n    padding: 0;\n    margin-top: 75px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.btns{\n    list-style-type: none;\n}\n\n.navBtns{\n    width: 100px;\n    font-size: 30px;\n    border-style: none;\n    background-color: var(--nav-background);\n    color: var(--font-color);\n}\n\n.navBtns:hover{\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n/* project */\n\n/* main project container */\n.projectContainer{\n    justify-self: center;\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n    gap: 20px;\n}\n\n\n.projectTitle{\n    color: var(--font-color);\n    text-decoration: underline;\n}\n/* project userinput */\n.addProjectBtn{\n    font-size: 20px;\n    border-style: none;\n    background-color: var(--nav-background);\n    color: var(--font-color);\n}\n\n.addProjectBtn:hover{\n    color: #FE5F55;\n    cursor: pointer;\n}\n\n.projectInput{\n    transform: scale(0);\n    background-color: #FE5F55;\n    gap: 10px;\n    margin-left: 10px;\n    margin-right: 10px;\n    width: 95%;\n    height: 20%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    justify-items: center;\n    align-items: center;\n    border-radius: 15px;\n\n   \n}\n\n\n#name{\n    width: 150px;\n    height: 30px;\n    background-color: #FE5F55;\n    color: black;\n    border-style: none;\n    border-bottom: 1px solid;\n}\n\n#priority{\n    height: 30px;\n    margin-left: 5px;\n    background-color: #FE5F55;\n}\n\n.submitProject, .resetProject{\n    background-color: #FE5F55;\n    border-style: none;\n    border: 1px solid var(--font-color);\n    color: var(--font-color);\n    width: 70px;\n    height: 30px;\n    border-radius: 10px;\n}\n\n.submitProject{\n    justify-self: end;\n}\n\n.submitProject:hover, .resetProject:hover{\n    background-color: #fdbab5;\n    color: black;\n    cursor: pointer;\n}\n\n.project{\n    display: flex;\n    gap: 20px;\n}\n\n.projectName{\n    color: var(--font-color);\n}\n\n.red{\n    margin-top: 3px;\n   width: 15px;\n   height: 15px;\n   border-radius: 10px;\n    color: var(--font-color);\n    background-color: red;\n    border: 2px solid;\n}\n.green{\n    margin-top: 3px;\n    width: 15px;\n    height: 15px;\n    border-radius: 10px;\n    color: var(--font-color);\n    border: 2px solid;\n    background-color: rgb(83, 181, 83);\n}\n.orange{\n    margin-top: 3px;\n    width: 15px;\n    height: 15px;\n    border-radius: 10px;\n    color: var(--font-color);\n    border: 2px solid;\n    background-color: rgb(247, 171, 28);\n}\n\n.deleteProject{\n    background-color: var(--nav-background);\n    border-style: none;\n    color: var(--font-color);\n    font-size: 20px;\n}\n\n.deleteProject:hover{\n    color:#FE5F55;\n    cursor: pointer;\n}\n\n.projectName:hover{\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.clicked{\n    color: #FE5F55;\n}\n\n.todoContainer{\n    margin-top: 50px;\n    display: flex;\n    gap:10px;\n    flex-direction: column;\n    align-items: center;\n}\n\n.addTask{\n    font-size: 40px;\n    width: 70px;\n    height: 60px;\n    padding-bottom: 10px;\n    border-radius: 20px;\n    border-style: none;\n    color: var(--font-color);\n    background-color: var(--nav-background);\n}\n\n.addTask:hover{\n   background-color: #697785;\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.todoForm{\n    transform: scale(0);\n    margin-bottom: 10px;\n    width: 80%;\n    height: 8%; \n    border-radius: 20px;\n    border: solid black 3px;\n    background-color: #697785;\n    display: flex;\n\n    gap: 25px;\n    align-items: center;\n}\n.addTaskBtnContainer{\n    display: flex;\n    gap: 10px;\n    margin-left: 25%;\n}\n\n.taskInput{\n    margin-left: 50px;\n}\n\n.addTaskBtn,.cancelTaskAddBtn{\n    width: 75px;\n    height: 30px;\n    border-radius: 10px;\n    border-style: none;\n}\n\n.addTaskBtn:hover{\n    cursor: pointer;\n    background-color: #93dc5f;\n    color: var(--font-color);\n}\n.cancelTaskAddBtn:hover{\n    cursor: pointer;\n    background-color: #FE5F55;\n    color: var(--font-color);\n}\n\n.active{\n    transform: scale(1);\n}\n\n.taskContainer{\n    width: 80%;\n    height: 6%;\n    display: flex;\n    border-radius: 20px;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 20px;\n    background-color: var(--header-color);\n    color: var(--font-color);\n}\n\n.taskName{\n    margin-left: 50px;\n   \n}\n\n.taskContainer > p{\n    font-size: 20px;\n}\n\n.deleteTask{\n    margin-right: 30px;\n    border-style: none;\n    background-color: var(--header-color);\n    color: var(--font-color);\n    font-size: 20px;\n}\n\n.deleteTask:hover{\n    color:#FE5F55;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/append.js":
/*!***********************!*\
  !*** ./src/append.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendToBody": () => (/* binding */ appendToBody)
/* harmony export */ });
const appendToBody = (element) => {
    const body = document.querySelector('.content');

    body.appendChild(element);
}//calls function to append to div.content





/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append.js */ "./src/append.js");


const headerTitle  = () =>{
    const title = document.createElement('h1');
    title.classList.add('headerTitle');
    title.textContent = 'To-Do';

    return title;
}//creates a header title

const header = () => {
    const title = headerTitle();

    const headerContainer = document.createElement('header');
    headerContainer.classList.add('header');

    headerAppend(headerContainer, title);//appends elements to the header

    return headerContainer;
}//creates a container header that holds title 

const headerAppend = (head, element) => {
    head.appendChild(element);
}///appends elements to the header


;(0,_append_js__WEBPACK_IMPORTED_MODULE_0__.appendToBody)(header());

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectBar": () => (/* binding */ projectBar),
/* harmony export */   "projectBtnEvents": () => (/* binding */ projectBtnEvents),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append.js */ "./src/append.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



const whoIsClicked = (project) => {
    const id = project.getAttribute('id');
    
    project.addEventListener('click', ()=>{   
        project.classList.add('clicked');
        (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.searchTodoList)(id);
        const others = document.querySelectorAll('.clicked');
        others.forEach(other => {
            if(other.textContent !== project.textContent)
            {
                other.classList.remove('clicked');
            }
        });
    })
    
}//checks for class of clicked to see who is being clicked and where the clicked element needs to move to

const nav = () =>{
    const navigation = document.createElement('nav');
    navigation.classList.add('nav');   

    return navigation;
}//creates a navigation container

const appendToNavBar = (element) => {
    const navBar = nav();

    navBar.appendChild(element)
    return navBar;
}//appends to navbar 

//------------Main Navigation (home/today/all)--------------
const navButtonsContainer = () => {
    const btnContainer = document.createElement('ul');
    btnContainer.classList.add('btnContainer');

    return btnContainer;
}//creates a ul to hold buttons

const buttons = (btnText) => {
    const homeBtnContainer = document.createElement('li');
    homeBtnContainer.classList.add('btns')
    const homeBtn = document.createElement('button')
    homeBtn.classList.add('navBtns')
    homeBtn.classList.add('todoNav')
    homeBtn.setAttribute('id',btnText);
    homeBtn.textContent = btnText;
    homeBtnContainer.appendChild(homeBtn);
    whoIsClicked(homeBtn);

    return homeBtnContainer;
}//creates a buttons and li to hold buttons

const appendBtns = () => {
    const container = navButtonsContainer();
    const homeBtn = buttons('Home');




    container.appendChild(homeBtn);


    return container;
}//appends li buttons to ul and ul to nav element



const Nav = appendBtns();
const navBar = appendToNavBar(Nav);
(0,_append_js__WEBPACK_IMPORTED_MODULE_0__.appendToBody)(navBar);//appends navbar container to the body


//---------Projects--------

//container
const projectContainer = () => {
    const container = document.createElement('div');
    container.classList.add('projectContainer');

    return container;
}//creates a container for projects

const appendProjectContainer = (element) =>{
    const navbar = document.querySelector('.nav');

    navbar.appendChild(element);
};


const appendToProjectContainer = (element) => {
    const container = document.querySelector('.projectContainer');

    container.appendChild(element);
}


//title
const projectTitle = () =>{
    const title = document.createElement('h2');
    title.classList.add('projectTitle');
    title.textContent = 'Projects';
    return title;

}//creates title for project



const addProjectBtn = () => {
    const btn = document.createElement('button');
    btn.classList.add('addProjectBtn');
    btn.textContent = '+ Add New Projects';
    
    return btn;
}// creates a button to add projects


const projectFactory = (name,priority) => {
    return {name,priority};
}//factory function for project object

const projectTextInputs = () => {
  const getProjectName = document.createElement('input');
    getProjectName.setAttribute('type', 'text');
    getProjectName.setAttribute('id', 'name');
    getProjectName.setAttribute('placeholder', 'Project Name');

    return getProjectName;
}//input for name of project

const projectPriorityInputs = () =>{
    const getProjectPriority = document.createElement('select');
    getProjectPriority.setAttribute('id', 'priority');
    getProjectPriority.setAttribute('name', 'priority');


    const selectRed = document.createElement('option');
    selectRed.setAttribute('value', 'red');
    selectRed.classList.add('red');
    selectRed.textContent = 'Red'
    getProjectPriority.appendChild(selectRed);

    const selectOrange = document.createElement('option');
    selectOrange.setAttribute('value', 'orange');
    selectOrange.setAttribute('class', 'orange');
    selectOrange.textContent = 'Orange'
    getProjectPriority.appendChild(selectOrange);

    const selectGreen = document.createElement('option');
    selectGreen.setAttribute('value', 'green');
    selectGreen.setAttribute('class', 'green');
    selectGreen.textContent = 'Green'
    getProjectPriority.appendChild(selectGreen);

    return getProjectPriority;
}// gets the priority of the projects by color

const createForm = () => {
    const form = document.createElement('div');
    form.classList.add('projectInput');

    const submit = document.createElement('button');
    submit.classList.add('submitProject');
    submit.textContent = 'Add';

    const reset = document.createElement('button');
    reset.classList.add('resetProject');
    reset.textContent = 'cancel';
    
    form.appendChild(projectPriorityInputs());
    form.appendChild(projectTextInputs());
    form.appendChild(submit);
    form.appendChild(reset);
    return form;
}//creates a form for user input


const addProject = () => {
    const form = document.querySelector('.projectInput');
    form.classList.add('active');
}//adds class active to form

const projects = [];
const projectList = (project) =>{
    projects.push(project);
}


const createNewProject = () =>{
    const name = document.querySelector('#name').value;
    const priority = document.querySelector('#priority').value;

    const project = projectFactory(name, priority);
    projectList(project);

   const projectDom = createProjectDom(project.name, project.priority);

   const container = document.querySelector('.projectContainer')
   const btn = document.querySelector('.addProjectBtn');
   container.insertBefore(projectDom, btn) 

   return name;
}//creates an object of project with name and priority creates dom element



const createProjectDom = (name, priority) =>{
    const newProject = document.createElement('div');
    newProject.classList.add('project');


    const newProjectName = document.createElement('h3');
    newProjectName.classList.add('projectName');
    newProjectName.setAttribute('id', name);
    newProjectName.textContent = name;
    whoIsClicked(newProjectName);

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.classList.add('deleteProject');
    deleteProjectButton.textContent = '\u2715';
    deleteProjectButton.addEventListener('click',() => {
        const container = document.querySelector('.projectContainer');
        container.removeChild(newProject);

        const body = document.querySelector('.content');
        body.removeChild(body.lastChild);
        const home = document.querySelector('#Home');
        home.classList.add('clicked');
        (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.searchTodoList)('Home');
        
    })

    const newProjectPriority = document.createElement('h3');
    newProjectPriority.classList.add('projectPriority');
    if(priority === 'red'){
        newProjectPriority.classList.add('red');

    }
    else if(priority === 'orange'){
        newProjectPriority.classList.add('orange');

    }
    else{
        newProjectPriority.classList.add('green');
    }

    newProject.appendChild(newProjectPriority);
    newProject.appendChild(newProjectName);
    newProject.appendChild(deleteProjectButton);

    return newProject;
}//inserts dom elements of project on to container of project


const projectBar = () => {

    const title = projectTitle();
    appendProjectContainer(projectContainer());
    appendToProjectContainer(title);//appends title to project container

    appendToProjectContainer(addProjectBtn());
    appendToProjectContainer(createForm());


}

const closeAddProject = (form) => {
    const input = document.querySelector('#name');
    input.value = '';
    form.classList.remove('active');
}



const projectBtnEvents =() =>{

    const projectBtn = document.querySelector('.addProjectBtn');
    projectBtn.addEventListener('click', addProject);//event listener to add project

    const addBtn = document.querySelector('.submitProject');
    addBtn.addEventListener('click', () =>{

        const form = document.querySelector('.projectInput');
        const id = createNewProject();
        
        (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.createNewProjectTodoList)(id);
        closeAddProject(form);

    })

 

}




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendToDoHome": () => (/* binding */ appendToDoHome),
/* harmony export */   "createNewProjectTodoList": () => (/* binding */ createNewProjectTodoList),
/* harmony export */   "createTodoContainer": () => (/* binding */ createTodoContainer),
/* harmony export */   "searchTodoList": () => (/* binding */ searchTodoList)
/* harmony export */ });
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append.js */ "./src/append.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");




const todoFactory = (name,description, dueDate, priority) =>{


    return{name, description,dueDate, priority};
}// todo factory that inherits from project 


const createTodoContainer = (name) => {
    const container = document.createElement('div');
    container.classList.add('todoContainer');
    container.setAttribute('id',name);   
    addTodoList(container);
    return container;
}//creates a container for todo elements


const addTaskObjectBtn = () => {
    const addTask = document.createElement('button');
    addTask.classList.add('addTask');
    addTask.textContent = '\u002B';
    addTask.addEventListener('click', addActive);
    return addTask;
   
}
const todos = [];

const addTodoList = (container) => {
    todos.push(container)
}

const searchTodoList = (id) => {
    todos.forEach(todo => {
      
        if(todo.getAttribute('id') === id)
        { 
             console.log(todo.getAttribute('id'))
             const body = document.querySelector('.content');
            
             body.removeChild(body.lastChild);
            (0,_append_js__WEBPACK_IMPORTED_MODULE_0__.appendToBody)(todo);
        }
    })
}

const appendtoToDoContainer = (container,element) => {

    container.appendChild(element);

}




const todoForm = () =>{
    const form = document.createElement('div');
    form.classList.add('todoForm');
    
    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('placeholder', 'Task Name');
    taskInput.classList.add('taskInput');
    form.appendChild(taskInput);

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.classList.add('taskDescriptionInput');
    description.setAttribute('placeholder', 'Description');
    form.appendChild(description);

    const taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.classList.add('taskDueDateInput');
    form.appendChild(taskDueDate);

    const getProjectPriority = document.createElement('select');
    getProjectPriority.setAttribute('id', 'taskPriority');
    getProjectPriority.setAttribute('name', 'taskPriority');
    form.appendChild(getProjectPriority);

    const selectRed = document.createElement('option');
    selectRed.setAttribute('value', 'red');
    selectRed.classList.add('red');
    selectRed.textContent = 'Red'
    getProjectPriority.appendChild(selectRed);

    const selectOrange = document.createElement('option');
    selectOrange.setAttribute('value', 'orange');
    selectOrange.setAttribute('class', 'orange');
    selectOrange.textContent = 'Orange'
    getProjectPriority.appendChild(selectOrange);

    const selectGreen = document.createElement('option');
    selectGreen.setAttribute('value', 'green');
    selectGreen.setAttribute('class', 'green');
    selectGreen.textContent = 'Green'
    getProjectPriority.appendChild(selectGreen);

    const addTaskBtnContainer = document.createElement('div');
    addTaskBtnContainer.classList.add('addTaskBtnContainer');
    form.appendChild(addTaskBtnContainer);

    const addBtn = document.createElement('button');
    addBtn.classList.add('addTaskBtn');
    addBtn.textContent = 'Add'
    addTaskBtnContainer.appendChild(addBtn);
    addBtn.addEventListener('click',() => {
        createTaskDom();
        removeActive();
    })

    const cancelTaskAddBtn = document.createElement('button');
    cancelTaskAddBtn.classList.add('cancelTaskAddBtn');
    cancelTaskAddBtn.textContent = 'Cancel'
    addTaskBtnContainer.appendChild(cancelTaskAddBtn);
    cancelTaskAddBtn.addEventListener('click', removeActive)

    return form;

}



const addActive = () => {
    const form = document.querySelector('.todoForm');
    form.classList.add('active');
}



const removeActive = () => {
    const form = document.querySelector('.todoForm');
    document.querySelector('.taskInput').value = '';
    document.querySelector('.taskDescriptionInput').value = '';
    document.querySelector('.taskDueDateInput').value = '';
    form.classList.remove('active');
}



const createTaskOject = () => {
    const taskName = document.querySelector('.taskInput').value;
    const taskDescription = document.querySelector('.taskDescriptionInput').value;
    const taskDueDate = document.querySelector('.taskDueDateInput').value;
    const taskPriority = document.querySelector('#taskPriority').value;

    const task = todoFactory(taskName,taskDescription,taskDueDate,taskPriority);

    return task;
}

const createTaskDom = () => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');

    const task = createTaskOject();

    const taskName = document.createElement('p');
    taskName.classList.add('taskName');
    taskName.textContent = task.name;
    taskContainer.appendChild(taskName);

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('taskDescription');
    taskDescription.textContent = task.description;
    taskContainer.appendChild(taskDescription);

    const taskDueDate = document.createElement('p');
    taskDueDate.classList.add('taskDueDate');
    taskDueDate.textContent = task.dueDate;
    taskContainer.appendChild(taskDueDate);

    const taskPriority = document.createElement('p');
    taskPriority.classList.add('TaskPriority');
    if(task.priority === 'red'){
        taskPriority.classList.add('red');

    }
    else if(task.priority === 'orange'){
        taskPriority.classList.add('orange');

    }
    else{
        taskPriority.classList.add('green');
    }
    taskContainer.appendChild(taskPriority);

    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('deleteTask');
    deleteTaskBtn.textContent = 'X';
    deleteTaskBtn.addEventListener('click', deleteTask)
    taskContainer.appendChild(deleteTaskBtn);

    const todoContainer = document.querySelector('.todoContainer')
    const form = document.querySelector('.todoForm')

    todoContainer.insertBefore(taskContainer, form);

}


const deleteTask = () => {
    const taskContainer = document.querySelector('.taskContainer')
    const todoContainer = document.querySelector('.todoContainer')

    todoContainer.removeChild(taskContainer);
}


const appendToDoHome = () => {
    const home = createTodoContainer('Home')
    ;(0,_append_js__WEBPACK_IMPORTED_MODULE_0__.appendToBody)(home);
    appendtoToDoContainer(home,todoForm());
    appendtoToDoContainer(home,addTaskObjectBtn());

}

const appendCreatedTodo = (id) => {
     const container = createTodoContainer(id);
    appendtoToDoContainer(container,todoForm());
    appendtoToDoContainer(container,addTaskObjectBtn());

}


const createNewProjectTodoList = (id) => {
    const todoLast = document.querySelector('.todoContainer')
   

    if(id !== todoLast.getAttribute('id')){
        appendCreatedTodo(id);
    }

}




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
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append.js */ "./src/append.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav.js */ "./src/nav.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");






(0,_nav_js__WEBPACK_IMPORTED_MODULE_3__.projectBar)();
(0,_nav_js__WEBPACK_IMPORTED_MODULE_3__.projectBtnEvents)();
(0,_todo_js__WEBPACK_IMPORTED_MODULE_4__.appendToDoHome)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELDRCQUE0Qiw4QkFBOEIsZ0NBQWdDLEdBQUcsVUFBVSxnQkFBZ0IsNkJBQTZCLEdBQUcsT0FBTyxnQkFBZ0IsR0FBRyxXQUFXLG9CQUFvQixxQ0FBcUMsa0NBQWtDLFNBQVMsb0NBQW9DLG9CQUFvQix1QkFBdUIsNENBQTRDLG9CQUFvQiwwQkFBMEIsR0FBRyxpQkFBaUIsd0JBQXdCLGlDQUFpQyxHQUFHLG9EQUFvRCw4Q0FBOEMsdUJBQXVCLG9CQUFvQixvQkFBb0Isa0NBQWtDLEdBQUcsa0JBQWtCLDJCQUEyQixpQkFBaUIsdUJBQXVCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLEdBQUcsVUFBVSw0QkFBNEIsR0FBRyxhQUFhLG1CQUFtQixzQkFBc0IseUJBQXlCLDhDQUE4QywrQkFBK0IsR0FBRyxtQkFBbUIsaUNBQWlDLHNCQUFzQixHQUFHLHFFQUFxRSwyQkFBMkIsb0JBQW9CLDZCQUE2Qiw0QkFBNEIsZ0JBQWdCLEdBQUcsb0JBQW9CLCtCQUErQixpQ0FBaUMsR0FBRywwQ0FBMEMsc0JBQXNCLHlCQUF5Qiw4Q0FBOEMsK0JBQStCLEdBQUcseUJBQXlCLHFCQUFxQixzQkFBc0IsR0FBRyxrQkFBa0IsMEJBQTBCLGdDQUFnQyxnQkFBZ0Isd0JBQXdCLHlCQUF5QixpQkFBaUIsa0JBQWtCLG9CQUFvQixxQ0FBcUMsNEJBQTRCLDBCQUEwQiwwQkFBMEIsVUFBVSxZQUFZLG1CQUFtQixtQkFBbUIsZ0NBQWdDLG1CQUFtQix5QkFBeUIsK0JBQStCLEdBQUcsY0FBYyxtQkFBbUIsdUJBQXVCLGdDQUFnQyxHQUFHLGtDQUFrQyxnQ0FBZ0MseUJBQXlCLDBDQUEwQywrQkFBK0Isa0JBQWtCLG1CQUFtQiwwQkFBMEIsR0FBRyxtQkFBbUIsd0JBQXdCLEdBQUcsOENBQThDLGdDQUFnQyxtQkFBbUIsc0JBQXNCLEdBQUcsYUFBYSxvQkFBb0IsZ0JBQWdCLEdBQUcsaUJBQWlCLCtCQUErQixHQUFHLFNBQVMsc0JBQXNCLGlCQUFpQixrQkFBa0IseUJBQXlCLCtCQUErQiw0QkFBNEIsd0JBQXdCLEdBQUcsU0FBUyxzQkFBc0Isa0JBQWtCLG1CQUFtQiwwQkFBMEIsK0JBQStCLHdCQUF3Qix5Q0FBeUMsR0FBRyxVQUFVLHNCQUFzQixrQkFBa0IsbUJBQW1CLDBCQUEwQiwrQkFBK0Isd0JBQXdCLDBDQUEwQyxHQUFHLG1CQUFtQiw4Q0FBOEMseUJBQXlCLCtCQUErQixzQkFBc0IsR0FBRyx5QkFBeUIsb0JBQW9CLHNCQUFzQixHQUFHLHVCQUF1QiwrQkFBK0Isb0JBQW9CLEdBQUcsYUFBYSxxQkFBcUIsR0FBRyxtQkFBbUIsdUJBQXVCLG9CQUFvQixlQUFlLDZCQUE2QiwwQkFBMEIsR0FBRyxhQUFhLHNCQUFzQixrQkFBa0IsbUJBQW1CLDJCQUEyQiwwQkFBMEIseUJBQXlCLCtCQUErQiw4Q0FBOEMsR0FBRyxtQkFBbUIsK0JBQStCLDBCQUEwQixvQkFBb0IsR0FBRyxjQUFjLDBCQUEwQiwwQkFBMEIsaUJBQWlCLGtCQUFrQiwwQkFBMEIsOEJBQThCLGdDQUFnQyxvQkFBb0Isa0JBQWtCLDBCQUEwQixHQUFHLHVCQUF1QixvQkFBb0IsZ0JBQWdCLHVCQUF1QixHQUFHLGVBQWUsd0JBQXdCLEdBQUcsa0NBQWtDLGtCQUFrQixtQkFBbUIsMEJBQTBCLHlCQUF5QixHQUFHLHNCQUFzQixzQkFBc0IsZ0NBQWdDLCtCQUErQixHQUFHLDBCQUEwQixzQkFBc0IsZ0NBQWdDLCtCQUErQixHQUFHLFlBQVksMEJBQTBCLEdBQUcsbUJBQW1CLGlCQUFpQixpQkFBaUIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsMEJBQTBCLHNCQUFzQiw0Q0FBNEMsK0JBQStCLEdBQUcsY0FBYyx3QkFBd0IsUUFBUSx1QkFBdUIsc0JBQXNCLEdBQUcsZ0JBQWdCLHlCQUF5Qix5QkFBeUIsNENBQTRDLCtCQUErQixzQkFBc0IsR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsU0FBUyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGNBQWMsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxhQUFhLGFBQWEsT0FBTyxhQUFhLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLFdBQVcsWUFBWSxNQUFNLFlBQVksV0FBVyxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGVBQWUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdB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QUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFJQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSx5REFBWTtBQUNoQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7VUM5T0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUI7QUFDUDtBQUNvQjtBQUNmOztBQUV4QyxtREFBVTtBQUNWLHlEQUFnQjtBQUNoQix3REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9hcHBlbmQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1mb250LWNvbG9yOiAjZjdmN2ZmO1xcbiAgICAtLWhlYWRlci1jb2xvcjogIzQ5NTg2NztcXG4gICAgLS1uYXYtYmFja2dyb3VuZDogIzU3NzM5OTtcXG59XFxuXFxuXFxuXFxuKntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxufVxcbi5jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG4gICAgXFxufVxcbi8qIC0tLS0tLUhlYWRlci0tLS0tLSAqL1xcbi5oZWFkZXJ7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXJUaXRsZXtcXG4gICAgbWFyZ2luLWxlZnQ6IDgwcHg7XFxuXFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLyogLS0tLS0tTmF2QmFyLS0tLS0gKi9cXG5cXG4vKiBNYWluIG5hdiAqL1xcbi5uYXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbn1cXG5cXG4uYnRuQ29udGFpbmVye1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLXRvcDogNzVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYnRuc3tcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ubmF2QnRuc3tcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5uYXZCdG5zOmhvdmVye1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBwcm9qZWN0ICovXFxuXFxuLyogbWFpbiBwcm9qZWN0IGNvbnRhaW5lciAqL1xcbi5wcm9qZWN0Q29udGFpbmVye1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5cXG4ucHJvamVjdFRpdGxle1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4vKiBwcm9qZWN0IHVzZXJpbnB1dCAqL1xcbi5hZGRQcm9qZWN0QnRue1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5hZGRQcm9qZWN0QnRuOmhvdmVye1xcbiAgICBjb2xvcjogI0ZFNUY1NTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdElucHV0e1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU1RjU1O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG5cXG4gICBcXG59XFxuXFxuXFxuI25hbWV7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU1RjU1O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbn1cXG5cXG4jcHJpb3JpdHl7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFNUY1NTtcXG59XFxuXFxuLnN1Ym1pdFByb2plY3QsIC5yZXNldFByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTVGNTU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnN1Ym1pdFByb2plY3R7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uc3VibWl0UHJvamVjdDpob3ZlciwgLnJlc2V0UHJvamVjdDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYmFiNTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0TmFtZXtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ucmVke1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgd2lkdGg6IDE1cHg7XFxuICAgaGVpZ2h0OiAxNXB4O1xcbiAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXG59XFxuLmdyZWVue1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgMTgxLCA4Myk7XFxufVxcbi5vcmFuZ2V7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMTcxLCAyOCk7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZCk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0OmhvdmVye1xcbiAgICBjb2xvcjojRkU1RjU1O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0TmFtZTpob3ZlcntcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xpY2tlZHtcXG4gICAgY29sb3I6ICNGRTVGNTU7XFxufVxcblxcbi50b2RvQ29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MTBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZFRhc2t7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZCk7XFxufVxcblxcbi5hZGRUYXNrOmhvdmVye1xcbiAgIGJhY2tncm91bmQtY29sb3I6ICM2OTc3ODU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvRm9ybXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA4JTsgXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk3Nzg1O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBnYXA6IDI1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hZGRUYXNrQnRuQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi50YXNrSW5wdXR7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uYWRkVGFza0J0biwuY2FuY2VsVGFza0FkZEJ0bntcXG4gICAgd2lkdGg6IDc1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4uYWRkVGFza0J0bjpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkYzVmO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi5jYW5jZWxUYXNrQWRkQnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTVGNTU7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLnRhc2tDb250YWluZXJ7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNiU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi50YXNrTmFtZXtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxuICAgXFxufVxcblxcbi50YXNrQ29udGFpbmVyID4gcHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZGVsZXRlVGFza3tcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uZGVsZXRlVGFzazpob3ZlcntcXG4gICAgY29sb3I6I0ZFNUY1NTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOzs7O0FBSUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCOztBQUUvQjtBQUNBLHVCQUF1QjtBQUN2QjtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7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eUJBQXlCO0lBQ3pCLGFBQWE7O0lBRWIsU0FBUztJQUNULG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWZvbnQtY29sb3I6ICNmN2Y3ZmY7XFxuICAgIC0taGVhZGVyLWNvbG9yOiAjNDk1ODY3O1xcbiAgICAtLW5hdi1iYWNrZ3JvdW5kOiAjNTc3Mzk5O1xcbn1cXG5cXG5cXG5cXG4qe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xcbiAgICBcXG59XFxuLyogLS0tLS0tSGVhZGVyLS0tLS0tICovXFxuLmhlYWRlcntcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlclRpdGxle1xcbiAgICBtYXJnaW4tbGVmdDogODBweDtcXG5cXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4vKiAtLS0tLS1OYXZCYXItLS0tLSAqL1xcblxcbi8qIE1haW4gbmF2ICovXFxuLm5hdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQpO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxufVxcblxcbi5idG5Db250YWluZXJ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5idG5ze1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5uYXZCdG5ze1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLm5hdkJ0bnM6aG92ZXJ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIHByb2plY3QgKi9cXG5cXG4vKiBtYWluIHByb2plY3QgY29udGFpbmVyICovXFxuLnByb2plY3RDb250YWluZXJ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcblxcbi5wcm9qZWN0VGl0bGV7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi8qIHByb2plY3QgdXNlcmlucHV0ICovXFxuLmFkZFByb2plY3RCdG57XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmFkZFByb2plY3RCdG46aG92ZXJ7XFxuICAgIGNvbG9yOiAjRkU1RjU1O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0SW5wdXR7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTVGNTU7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcbiAgIFxcbn1cXG5cXG5cXG4jbmFtZXtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTVGNTU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxufVxcblxcbiNwcmlvcml0eXtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU1RjU1O1xcbn1cXG5cXG4uc3VibWl0UHJvamVjdCwgLnJlc2V0UHJvamVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFNUY1NTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc3VibWl0UHJvamVjdHtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5zdWJtaXRQcm9qZWN0OmhvdmVyLCAucmVzZXRQcm9qZWN0OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRiYWI1O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnByb2plY3ROYW1le1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5yZWR7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICB3aWR0aDogMTVweDtcXG4gICBoZWlnaHQ6IDE1cHg7XFxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbn1cXG4uZ3JlZW57XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCAxODEsIDgzKTtcXG59XFxuLm9yYW5nZXtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAxNzEsIDI4KTtcXG59XFxuXFxuLmRlbGV0ZVByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmRlbGV0ZVByb2plY3Q6aG92ZXJ7XFxuICAgIGNvbG9yOiNGRTVGNTU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3ROYW1lOmhvdmVye1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGlja2Vke1xcbiAgICBjb2xvcjogI0ZFNUY1NTtcXG59XFxuXFxuLnRvZG9Db250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoxMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkVGFza3tcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmFkZFRhc2s6aG92ZXJ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogIzY5Nzc4NTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG9Gb3Jte1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDglOyBcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAzcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2OTc3ODU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGdhcDogMjVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZFRhc2tCdG5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuXFxuLnRhc2tJbnB1dHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5hZGRUYXNrQnRuLC5jYW5jZWxUYXNrQWRkQnRue1xcbiAgICB3aWR0aDogNzVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5hZGRUYXNrQnRuOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5M2RjNWY7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuLmNhbmNlbFRhc2tBZGRCdG46aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFNUY1NTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uYWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lcntcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgaGVpZ2h0OiA2JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLnRhc2tOYW1le1xcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcXG4gICBcXG59XFxuXFxuLnRhc2tDb250YWluZXIgPiBwe1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5kZWxldGVUYXNre1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5kZWxldGVUYXNrOmhvdmVye1xcbiAgICBjb2xvcjojRkU1RjU1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwcGVuZFRvQm9keSA9IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufS8vY2FsbHMgZnVuY3Rpb24gdG8gYXBwZW5kIHRvIGRpdi5jb250ZW50XG5cblxuXG5leHBvcnR7XG4gICAgYXBwZW5kVG9Cb2R5XG59IiwiaW1wb3J0IHthcHBlbmRUb0JvZHkgfSBmcm9tICcuL2FwcGVuZC5qcyc7XG5cbmNvbnN0IGhlYWRlclRpdGxlICA9ICgpID0+e1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJUaXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RvLURvJztcblxuICAgIHJldHVybiB0aXRsZTtcbn0vL2NyZWF0ZXMgYSBoZWFkZXIgdGl0bGVcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gaGVhZGVyVGl0bGUoKTtcblxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGhlYWRlckFwcGVuZChoZWFkZXJDb250YWluZXIsIHRpdGxlKTsvL2FwcGVuZHMgZWxlbWVudHMgdG8gdGhlIGhlYWRlclxuXG4gICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbn0vL2NyZWF0ZXMgYSBjb250YWluZXIgaGVhZGVyIHRoYXQgaG9sZHMgdGl0bGUgXG5cbmNvbnN0IGhlYWRlckFwcGVuZCA9IChoZWFkLCBlbGVtZW50KSA9PiB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn0vLy9hcHBlbmRzIGVsZW1lbnRzIHRvIHRoZSBoZWFkZXJcblxuXG5hcHBlbmRUb0JvZHkoaGVhZGVyKCkpOyIsImltcG9ydCB7YXBwZW5kVG9Cb2R5IH0gZnJvbSAnLi9hcHBlbmQuanMnO1xuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdFRvZG9MaXN0LCBzZWFyY2hUb2RvTGlzdCB9IGZyb20gJy4vdG9kby5qcyc7XG5cbmNvbnN0IHdob0lzQ2xpY2tlZCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgaWQgPSBwcm9qZWN0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PnsgICBcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJyk7XG4gICAgICAgIHNlYXJjaFRvZG9MaXN0KGlkKTtcbiAgICAgICAgY29uc3Qgb3RoZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsaWNrZWQnKTtcbiAgICAgICAgb3RoZXJzLmZvckVhY2gob3RoZXIgPT4ge1xuICAgICAgICAgICAgaWYob3RoZXIudGV4dENvbnRlbnQgIT09IHByb2plY3QudGV4dENvbnRlbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3RoZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2tlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KVxuICAgIFxufS8vY2hlY2tzIGZvciBjbGFzcyBvZiBjbGlja2VkIHRvIHNlZSB3aG8gaXMgYmVpbmcgY2xpY2tlZCBhbmQgd2hlcmUgdGhlIGNsaWNrZWQgZWxlbWVudCBuZWVkcyB0byBtb3ZlIHRvXG5cbmNvbnN0IG5hdiA9ICgpID0+e1xuICAgIGNvbnN0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ25hdicpOyAgIFxuXG4gICAgcmV0dXJuIG5hdmlnYXRpb247XG59Ly9jcmVhdGVzIGEgbmF2aWdhdGlvbiBjb250YWluZXJcblxuY29uc3QgYXBwZW5kVG9OYXZCYXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG5hdkJhciA9IG5hdigpO1xuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgcmV0dXJuIG5hdkJhcjtcbn0vL2FwcGVuZHMgdG8gbmF2YmFyIFxuXG4vLy0tLS0tLS0tLS0tLU1haW4gTmF2aWdhdGlvbiAoaG9tZS90b2RheS9hbGwpLS0tLS0tLS0tLS0tLS1cbmNvbnN0IG5hdkJ1dHRvbnNDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuQ29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gYnRuQ29udGFpbmVyO1xufS8vY3JlYXRlcyBhIHVsIHRvIGhvbGQgYnV0dG9uc1xuXG5jb25zdCBidXR0b25zID0gKGJ0blRleHQpID0+IHtcbiAgICBjb25zdCBob21lQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob21lQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bnMnKVxuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnbmF2QnRucycpXG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvTmF2JylcbiAgICBob21lQnRuLnNldEF0dHJpYnV0ZSgnaWQnLGJ0blRleHQpO1xuICAgIGhvbWVCdG4udGV4dENvbnRlbnQgPSBidG5UZXh0O1xuICAgIGhvbWVCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gICAgd2hvSXNDbGlja2VkKGhvbWVCdG4pO1xuXG4gICAgcmV0dXJuIGhvbWVCdG5Db250YWluZXI7XG59Ly9jcmVhdGVzIGEgYnV0dG9ucyBhbmQgbGkgdG8gaG9sZCBidXR0b25zXG5cbmNvbnN0IGFwcGVuZEJ0bnMgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gbmF2QnV0dG9uc0NvbnRhaW5lcigpO1xuICAgIGNvbnN0IGhvbWVCdG4gPSBidXR0b25zKCdIb21lJyk7XG5cblxuXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG5cblxuICAgIHJldHVybiBjb250YWluZXI7XG59Ly9hcHBlbmRzIGxpIGJ1dHRvbnMgdG8gdWwgYW5kIHVsIHRvIG5hdiBlbGVtZW50XG5cblxuXG5jb25zdCBOYXYgPSBhcHBlbmRCdG5zKCk7XG5jb25zdCBuYXZCYXIgPSBhcHBlbmRUb05hdkJhcihOYXYpO1xuYXBwZW5kVG9Cb2R5KG5hdkJhcik7Ly9hcHBlbmRzIG5hdmJhciBjb250YWluZXIgdG8gdGhlIGJvZHlcblxuXG4vLy0tLS0tLS0tLVByb2plY3RzLS0tLS0tLS1cblxuLy9jb250YWluZXJcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250YWluZXInKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59Ly9jcmVhdGVzIGEgY29udGFpbmVyIGZvciBwcm9qZWN0c1xuXG5jb25zdCBhcHBlbmRQcm9qZWN0Q29udGFpbmVyID0gKGVsZW1lbnQpID0+e1xuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcblxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbn07XG5cblxuY29uc3QgYXBwZW5kVG9Qcm9qZWN0Q29udGFpbmVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRhaW5lcicpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xufVxuXG5cbi8vdGl0bGVcbmNvbnN0IHByb2plY3RUaXRsZSA9ICgpID0+e1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgcmV0dXJuIHRpdGxlO1xuXG59Ly9jcmVhdGVzIHRpdGxlIGZvciBwcm9qZWN0XG5cblxuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJysgQWRkIE5ldyBQcm9qZWN0cyc7XG4gICAgXG4gICAgcmV0dXJuIGJ0bjtcbn0vLyBjcmVhdGVzIGEgYnV0dG9uIHRvIGFkZCBwcm9qZWN0c1xuXG5cbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKG5hbWUscHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4ge25hbWUscHJpb3JpdHl9O1xufS8vZmFjdG9yeSBmdW5jdGlvbiBmb3IgcHJvamVjdCBvYmplY3RcblxuY29uc3QgcHJvamVjdFRleHRJbnB1dHMgPSAoKSA9PiB7XG4gIGNvbnN0IGdldFByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBnZXRQcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGdldFByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIGdldFByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJyk7XG5cbiAgICByZXR1cm4gZ2V0UHJvamVjdE5hbWU7XG59Ly9pbnB1dCBmb3IgbmFtZSBvZiBwcm9qZWN0XG5cbmNvbnN0IHByb2plY3RQcmlvcml0eUlucHV0cyA9ICgpID0+e1xuICAgIGNvbnN0IGdldFByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGdldFByb2plY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gICAgZ2V0UHJvamVjdFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuXG5cbiAgICBjb25zdCBzZWxlY3RSZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzZWxlY3RSZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdyZWQnKTtcbiAgICBzZWxlY3RSZWQuY2xhc3NMaXN0LmFkZCgncmVkJyk7XG4gICAgc2VsZWN0UmVkLnRleHRDb250ZW50ID0gJ1JlZCdcbiAgICBnZXRQcm9qZWN0UHJpb3JpdHkuYXBwZW5kQ2hpbGQoc2VsZWN0UmVkKTtcblxuICAgIGNvbnN0IHNlbGVjdE9yYW5nZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHNlbGVjdE9yYW5nZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ29yYW5nZScpO1xuICAgIHNlbGVjdE9yYW5nZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29yYW5nZScpO1xuICAgIHNlbGVjdE9yYW5nZS50ZXh0Q29udGVudCA9ICdPcmFuZ2UnXG4gICAgZ2V0UHJvamVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdE9yYW5nZSk7XG5cbiAgICBjb25zdCBzZWxlY3RHcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHNlbGVjdEdyZWVuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnZ3JlZW4nKTtcbiAgICBzZWxlY3RHcmVlbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dyZWVuJyk7XG4gICAgc2VsZWN0R3JlZW4udGV4dENvbnRlbnQgPSAnR3JlZW4nXG4gICAgZ2V0UHJvamVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdEdyZWVuKTtcblxuICAgIHJldHVybiBnZXRQcm9qZWN0UHJpb3JpdHk7XG59Ly8gZ2V0cyB0aGUgcHJpb3JpdHkgb2YgdGhlIHByb2plY3RzIGJ5IGNvbG9yXG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdElucHV0Jyk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnc3VibWl0UHJvamVjdCcpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdBZGQnO1xuXG4gICAgY29uc3QgcmVzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldC5jbGFzc0xpc3QuYWRkKCdyZXNldFByb2plY3QnKTtcbiAgICByZXNldC50ZXh0Q29udGVudCA9ICdjYW5jZWwnO1xuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFByaW9yaXR5SW5wdXRzKCkpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRleHRJbnB1dHMoKSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmVzZXQpO1xuICAgIHJldHVybiBmb3JtO1xufS8vY3JlYXRlcyBhIGZvcm0gZm9yIHVzZXIgaW5wdXRcblxuXG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdElucHV0Jyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0vL2FkZHMgY2xhc3MgYWN0aXZlIHRvIGZvcm1cblxuY29uc3QgcHJvamVjdHMgPSBbXTtcbmNvbnN0IHByb2plY3RMaXN0ID0gKHByb2plY3QpID0+e1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG59XG5cblxuY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9ICgpID0+e1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkobmFtZSwgcHJpb3JpdHkpO1xuICAgIHByb2plY3RMaXN0KHByb2plY3QpO1xuXG4gICBjb25zdCBwcm9qZWN0RG9tID0gY3JlYXRlUHJvamVjdERvbShwcm9qZWN0Lm5hbWUsIHByb2plY3QucHJpb3JpdHkpO1xuXG4gICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENvbnRhaW5lcicpXG4gICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdEJ0bicpO1xuICAgY29udGFpbmVyLmluc2VydEJlZm9yZShwcm9qZWN0RG9tLCBidG4pIFxuXG4gICByZXR1cm4gbmFtZTtcbn0vL2NyZWF0ZXMgYW4gb2JqZWN0IG9mIHByb2plY3Qgd2l0aCBuYW1lIGFuZCBwcmlvcml0eSBjcmVhdGVzIGRvbSBlbGVtZW50XG5cblxuXG5jb25zdCBjcmVhdGVQcm9qZWN0RG9tID0gKG5hbWUsIHByaW9yaXR5KSA9PntcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cblxuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBuZXdQcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICAgIG5ld1Byb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICBuZXdQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgd2hvSXNDbGlja2VkKG5ld1Byb2plY3ROYW1lKTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVByb2plY3QnKTtcbiAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1xcdTI3MTUnO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld1Byb2plY3QpO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNIb21lJyk7XG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpO1xuICAgICAgICBzZWFyY2hUb2RvTGlzdCgnSG9tZScpO1xuICAgICAgICBcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3UHJvamVjdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBuZXdQcm9qZWN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJvamVjdFByaW9yaXR5Jyk7XG4gICAgaWYocHJpb3JpdHkgPT09ICdyZWQnKXtcbiAgICAgICAgbmV3UHJvamVjdFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuXG4gICAgfVxuICAgIGVsc2UgaWYocHJpb3JpdHkgPT09ICdvcmFuZ2UnKXtcbiAgICAgICAgbmV3UHJvamVjdFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ29yYW5nZScpO1xuXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG5ld1Byb2plY3RQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdncmVlbicpO1xuICAgIH1cblxuICAgIG5ld1Byb2plY3QuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFByaW9yaXR5KTtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59Ly9pbnNlcnRzIGRvbSBlbGVtZW50cyBvZiBwcm9qZWN0IG9uIHRvIGNvbnRhaW5lciBvZiBwcm9qZWN0XG5cblxuY29uc3QgcHJvamVjdEJhciA9ICgpID0+IHtcblxuICAgIGNvbnN0IHRpdGxlID0gcHJvamVjdFRpdGxlKCk7XG4gICAgYXBwZW5kUHJvamVjdENvbnRhaW5lcihwcm9qZWN0Q29udGFpbmVyKCkpO1xuICAgIGFwcGVuZFRvUHJvamVjdENvbnRhaW5lcih0aXRsZSk7Ly9hcHBlbmRzIHRpdGxlIHRvIHByb2plY3QgY29udGFpbmVyXG5cbiAgICBhcHBlbmRUb1Byb2plY3RDb250YWluZXIoYWRkUHJvamVjdEJ0bigpKTtcbiAgICBhcHBlbmRUb1Byb2plY3RDb250YWluZXIoY3JlYXRlRm9ybSgpKTtcblxuXG59XG5cbmNvbnN0IGNsb3NlQWRkUHJvamVjdCA9IChmb3JtKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn1cblxuXG5cbmNvbnN0IHByb2plY3RCdG5FdmVudHMgPSgpID0+e1xuXG4gICAgY29uc3QgcHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnRuJyk7XG4gICAgcHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFByb2plY3QpOy8vZXZlbnQgbGlzdGVuZXIgdG8gYWRkIHByb2plY3RcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRQcm9qZWN0Jyk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0SW5wdXQnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjcmVhdGVOZXdQcm9qZWN0KCk7XG4gICAgICAgIFxuICAgICAgICBjcmVhdGVOZXdQcm9qZWN0VG9kb0xpc3QoaWQpO1xuICAgICAgICBjbG9zZUFkZFByb2plY3QoZm9ybSk7XG5cbiAgICB9KVxuXG4gXG5cbn1cblxuXG5leHBvcnR7XG4gICAgcHJvamVjdEZhY3RvcnksXG4gICAgcHJvamVjdEJ0bkV2ZW50cyxcbiAgICBwcm9qZWN0QmFyXG59IiwiaW1wb3J0IHthcHBlbmRUb0JvZHkgfSBmcm9tICcuL2FwcGVuZC5qcyc7XG5pbXBvcnQge3Byb2plY3RGYWN0b3J5fSBmcm9tICcuL25hdi5qcyc7XG5pbXBvcnQgeyBhZGQsIGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcblxuY29uc3QgdG9kb0ZhY3RvcnkgPSAobmFtZSxkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+e1xuXG5cbiAgICByZXR1cm57bmFtZSwgZGVzY3JpcHRpb24sZHVlRGF0ZSwgcHJpb3JpdHl9O1xufS8vIHRvZG8gZmFjdG9yeSB0aGF0IGluaGVyaXRzIGZyb20gcHJvamVjdCBcblxuXG5jb25zdCBjcmVhdGVUb2RvQ29udGFpbmVyID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJyxuYW1lKTsgICBcbiAgICBhZGRUb2RvTGlzdChjb250YWluZXIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59Ly9jcmVhdGVzIGEgY29udGFpbmVyIGZvciB0b2RvIGVsZW1lbnRzXG5cblxuY29uc3QgYWRkVGFza09iamVjdEJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrJyk7XG4gICAgYWRkVGFzay50ZXh0Q29udGVudCA9ICdcXHUwMDJCJztcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkQWN0aXZlKTtcbiAgICByZXR1cm4gYWRkVGFzaztcbiAgIFxufVxuY29uc3QgdG9kb3MgPSBbXTtcblxuY29uc3QgYWRkVG9kb0xpc3QgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgdG9kb3MucHVzaChjb250YWluZXIpXG59XG5cbmNvbnN0IHNlYXJjaFRvZG9MaXN0ID0gKGlkKSA9PiB7XG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgIFxuICAgICAgICBpZih0b2RvLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gaWQpXG4gICAgICAgIHsgXG4gICAgICAgICAgICAgY29uc29sZS5sb2codG9kby5nZXRBdHRyaWJ1dGUoJ2lkJykpXG4gICAgICAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkubGFzdENoaWxkKTtcbiAgICAgICAgICAgIGFwcGVuZFRvQm9keSh0b2RvKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGFwcGVuZHRvVG9Eb0NvbnRhaW5lciA9IChjb250YWluZXIsZWxlbWVudCkgPT4ge1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG59XG5cblxuXG5cbmNvbnN0IHRvZG9Gb3JtID0gKCkgPT57XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgndG9kb0Zvcm0nKTtcbiAgICBcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgTmFtZScpO1xuICAgIHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCd0YXNrSW5wdXQnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrRGVzY3JpcHRpb25JbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIHRhc2tEdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEdWVEYXRlSW5wdXQnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcblxuICAgIGNvbnN0IGdldFByb2plY3RQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGdldFByb2plY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQcmlvcml0eScpO1xuICAgIGdldFByb2plY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza1ByaW9yaXR5Jyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChnZXRQcm9qZWN0UHJpb3JpdHkpO1xuXG4gICAgY29uc3Qgc2VsZWN0UmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgc2VsZWN0UmVkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAncmVkJyk7XG4gICAgc2VsZWN0UmVkLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuICAgIHNlbGVjdFJlZC50ZXh0Q29udGVudCA9ICdSZWQnXG4gICAgZ2V0UHJvamVjdFByaW9yaXR5LmFwcGVuZENoaWxkKHNlbGVjdFJlZCk7XG5cbiAgICBjb25zdCBzZWxlY3RPcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzZWxlY3RPcmFuZ2Uuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdvcmFuZ2UnKTtcbiAgICBzZWxlY3RPcmFuZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvcmFuZ2UnKTtcbiAgICBzZWxlY3RPcmFuZ2UudGV4dENvbnRlbnQgPSAnT3JhbmdlJ1xuICAgIGdldFByb2plY3RQcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RPcmFuZ2UpO1xuXG4gICAgY29uc3Qgc2VsZWN0R3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBzZWxlY3RHcmVlbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2dyZWVuJyk7XG4gICAgc2VsZWN0R3JlZW4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdncmVlbicpO1xuICAgIHNlbGVjdEdyZWVuLnRleHRDb250ZW50ID0gJ0dyZWVuJ1xuICAgIGdldFByb2plY3RQcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RHcmVlbik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVGFza0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrQnRuQ29udGFpbmVyJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrQnRuQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrQnRuJyk7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gJ0FkZCdcbiAgICBhZGRUYXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgIGNyZWF0ZVRhc2tEb20oKTtcbiAgICAgICAgcmVtb3ZlQWN0aXZlKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGNhbmNlbFRhc2tBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxUYXNrQWRkQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbFRhc2tBZGRCdG4nKTtcbiAgICBjYW5jZWxUYXNrQWRkQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcbiAgICBhZGRUYXNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbFRhc2tBZGRCdG4pO1xuICAgIGNhbmNlbFRhc2tBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVBY3RpdmUpXG5cbiAgICByZXR1cm4gZm9ybTtcblxufVxuXG5leHBvcnR7XG4gICAgY3JlYXRlVG9kb0NvbnRhaW5lclxufVxuXG5jb25zdCBhZGRBY3RpdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cblxuXG5jb25zdCByZW1vdmVBY3RpdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRm9ybScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRGVzY3JpcHRpb25JbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEdWVEYXRlSW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59XG5cblxuXG5jb25zdCBjcmVhdGVUYXNrT2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0lucHV0JykudmFsdWU7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tEZXNjcmlwdGlvbklucHV0JykudmFsdWU7XG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0R1ZURhdGVJbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrUHJpb3JpdHknKS52YWx1ZTtcblxuICAgIGNvbnN0IHRhc2sgPSB0b2RvRmFjdG9yeSh0YXNrTmFtZSx0YXNrRGVzY3JpcHRpb24sdGFza0R1ZURhdGUsdGFza1ByaW9yaXR5KTtcblxuICAgIHJldHVybiB0YXNrO1xufVxuXG5jb25zdCBjcmVhdGVUYXNrRG9tID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250YWluZXInKTtcblxuICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrT2plY3QoKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2tOYW1lJyk7XG4gICAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG5cbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndGFza0R1ZURhdGUnKTtcbiAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcblxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnVGFza1ByaW9yaXR5Jyk7XG4gICAgaWYodGFzay5wcmlvcml0eSA9PT0gJ3JlZCcpe1xuICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncmVkJyk7XG5cbiAgICB9XG4gICAgZWxzZSBpZih0YXNrLnByaW9yaXR5ID09PSAnb3JhbmdlJyl7XG4gICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdvcmFuZ2UnKTtcblxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnZ3JlZW4nKTtcbiAgICB9XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuXG4gICAgY29uc3QgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFzaycpO1xuICAgIGRlbGV0ZVRhc2tCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVRhc2spXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcblxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0NvbnRhaW5lcicpXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvRm9ybScpXG5cbiAgICB0b2RvQ29udGFpbmVyLmluc2VydEJlZm9yZSh0YXNrQ29udGFpbmVyLCBmb3JtKTtcblxufVxuXG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJylcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Db250YWluZXInKVxuXG4gICAgdG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyKTtcbn1cblxuXG5jb25zdCBhcHBlbmRUb0RvSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBob21lID0gY3JlYXRlVG9kb0NvbnRhaW5lcignSG9tZScpXG4gICAgYXBwZW5kVG9Cb2R5KGhvbWUpO1xuICAgIGFwcGVuZHRvVG9Eb0NvbnRhaW5lcihob21lLHRvZG9Gb3JtKCkpO1xuICAgIGFwcGVuZHRvVG9Eb0NvbnRhaW5lcihob21lLGFkZFRhc2tPYmplY3RCdG4oKSk7XG5cbn1cblxuY29uc3QgYXBwZW5kQ3JlYXRlZFRvZG8gPSAoaWQpID0+IHtcbiAgICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlVG9kb0NvbnRhaW5lcihpZCk7XG4gICAgYXBwZW5kdG9Ub0RvQ29udGFpbmVyKGNvbnRhaW5lcix0b2RvRm9ybSgpKTtcbiAgICBhcHBlbmR0b1RvRG9Db250YWluZXIoY29udGFpbmVyLGFkZFRhc2tPYmplY3RCdG4oKSk7XG5cbn1cblxuXG5jb25zdCBjcmVhdGVOZXdQcm9qZWN0VG9kb0xpc3QgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0b2RvTGFzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvQ29udGFpbmVyJylcbiAgIFxuXG4gICAgaWYoaWQgIT09IHRvZG9MYXN0LmdldEF0dHJpYnV0ZSgnaWQnKSl7XG4gICAgICAgIGFwcGVuZENyZWF0ZWRUb2RvKGlkKTtcbiAgICB9XG5cbn1cblxuXG5leHBvcnR7XG4gICAgYXBwZW5kVG9Eb0hvbWUsXG4gICAgY3JlYXRlTmV3UHJvamVjdFRvZG9MaXN0LFxuICAgIHNlYXJjaFRvZG9MaXN0XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7YXBwZW5kVG9Cb2R5IH0gZnJvbSAnLi9hcHBlbmQuanMnO1xuaW1wb3J0IHtoZWFkZXJ9IGZyb20gJy4vaGVhZGVyLmpzJztcbmltcG9ydCB7IHByb2plY3RCdG5FdmVudHMscHJvamVjdEJhciB9IGZyb20gJy4vbmF2LmpzJztcbmltcG9ydCB7YXBwZW5kVG9Eb0hvbWV9IGZyb20gJy4vdG9kby5qcydcblxucHJvamVjdEJhcigpO1xucHJvamVjdEJ0bkV2ZW50cygpO1xuYXBwZW5kVG9Eb0hvbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==