/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/calculator-btn-view.js":
/*!******************************************!*\
  !*** ./assets/js/calculator-btn-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculatorBtnView": () => (/* binding */ calculatorBtnView)
/* harmony export */ });
const calculatorBtnView = (icon) => (
   `<button id="modal_btn" class="btn modal__initiate-btn">
      <div class="modal__initiate-btn-icon">${icon}</div>
   </button>`
);


/***/ }),

/***/ "./assets/js/calculator-modal-view.js":
/*!********************************************!*\
  !*** ./assets/js/calculator-modal-view.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculatorModalView": () => (/* binding */ calculatorModalView)
/* harmony export */ });
const calculatorModalView = (icon, selectOptions, placeholder) => (
   `<div id="modal" class="modal">
      <article id="calculator" class="calculator">
         <header class="calculator__header modal__header">
            <div class="calculator__icon">${icon}</div>
            <h4>
               Enter the Stake and Odds for your bet and the Bet Calculator will automatically calculate the Payout. Add Odds for Multiples.
            </h4>
            <button id="modal_close" class="btn modal__close-btn"><span></span></button>
         </header>
         <div class="calculator__body">
            <div class="calculator__inner-wrap">
               <label for="result" class="label calculator__label">Payout</label>
               <input type="text" id="result"class="input calculator__output" placeholder="$ 0.00" readonly>
            </div>
            <div class="calculator__inner-wrap calculator__inner-wrap--select">
               <label for="odds_format" class="label calculator__label">Selected Odds Format</label>
               <select id="odds_format" name="odds_format">${selectOptions}</select>
            </div>
            <div id="calculator-odds-container" class="calculator__inner-wrap calculator__odds-container"></div>
            <div class="calculator__inner-wrap calculator__btn-wrap">
               <button id="add_oods" class="btn calculator__btn calculator__add-btn"><span class="calculator__btn-icon"></span>Add odds</button>
               <button id="clear" class="btn calculator__btn calculator__clear-btn"><span class="calculator__btn-icon"></span>Clear</button>
            </div>
         </div>
      </article>
   </div>`
);


/***/ }),

/***/ "./assets/js/const.js":
/*!****************************!*\
  !*** ./assets/js/const.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOUSE_ICON": () => (/* binding */ HOUSE_ICON),
/* harmony export */   "oddsFormat": () => (/* binding */ oddsFormat),
/* harmony export */   "oddInputPlaceholders": () => (/* binding */ oddInputPlaceholders)
/* harmony export */ });
const HOUSE_ICON = () => (
   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M115.2 384H76.8c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8zm0-128H76.8c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8zm128 128h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8zm0-128h-38.4c-6.4 0-12.8 6.4-12.8 12.8v38.4c0 6.4 6.4 12.8 12.8 12.8h38.4c6.4 0 12.8-6.4 12.8-12.8v-38.4c0-6.4-6.4-12.8-12.8-12.8zm128 0h-38.4c-6.4 0-12.8 6.4-12.8 12.8v166.4c0 6.4 6.4 12.8 12.8 12.8h38.4c6.4 0 12.8-6.4 12.8-12.8V268.8c0-6.4-6.4-12.8-12.8-12.8z" class="fa-secondary"/>
      <path d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8z" class="fa-primary"/>
   </svg>`
);

const oddsFormat = {
   AMERICAN: 'American',
   FRACTAL: 'Fractal',
   DECIMAL: 'Decimal',
};

const oddInputPlaceholders = {
   'American': '+400',
   'Fractal': '4/1',
   'Decimal': '5.2',
}


/***/ }),

/***/ "./assets/js/create-odd-block.view.js":
/*!********************************************!*\
  !*** ./assets/js/create-odd-block.view.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOddBlock": () => (/* binding */ createOddBlock)
/* harmony export */ });
const createOddBlock = (placeholder) => (
   `<div class="calculator__odd-item calculator__multiply-odd-item">
      <div class="calculator__odd-wrap">
         <input type="number" name="stake" class="input calculator__input" placeholder="Enter stake">
      </div>
      <div class="calculator__odd-wrap">
         <input type="text" name="odd" class="input calculator__input" placeholder="${placeholder}">
      </div>
   </div>`
);

/***/ }),

/***/ "./assets/js/default-odd-block.js":
/*!****************************************!*\
  !*** ./assets/js/default-odd-block.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultOddBlockView": () => (/* binding */ defaultOddBlockView)
/* harmony export */ });
const defaultOddBlockView = (placeholder) => (
   `<div class="calculator__odd-item">
      <div class="calculator__odd-wrap">
         <label for="stake" class="label calculator__label">Stake</label>
         <input id="stake" type="number" name="stake" class="input calculator__input" placeholder="Enter stake">
      </div>
      <div class="calculator__odd-wrap">
         <label for="odd" class="label calculator__label">Odds</label>
         <input id="odd" type="text" name="odd" class="input calculator__input" placeholder="${placeholder}">
      </div>
   </div>`
);


/***/ }),

/***/ "./assets/js/format-options-view.js":
/*!******************************************!*\
  !*** ./assets/js/format-options-view.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatOptions": () => (/* binding */ formatOptions)
/* harmony export */ });
const formatOptions = (format) => (
   `<option value="${format.DECIMAL}">${format.DECIMAL}</option>
   <option value="${format.FRACTAL}">${format.FRACTAL}</option>
   <option value="${format.AMERICAN}">${format.AMERICAN}</option>`
);


/***/ }),

/***/ "./assets/js/utils.js":
/*!****************************!*\
  !*** ./assets/js/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
const createElement = (template) => {
   const newElement = document.createElement('div');
   newElement.innerHTML = template;

   return newElement.firstChild;
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/scss/style.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/scss/style.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #333;\n  bottom: 0;\n  right: 0;\n  visibility: hidden;\n  z-index: 2;\n}\nbody.overlay {\n  overflow: hidden;\n}\nbody.overlay::before {\n  visibility: visible;\n  opacity: 0.4;\n}\n\nbutton,\ninput,\nselect {\n  cursor: pointer;\n}\n\n.modal {\n  position: fixed;\n  left: 50%;\n  top: 15px;\n  padding: 16px;\n  padding-top: 45px;\n  width: 96%;\n  max-width: 96%;\n  max-height: 90%;\n  background-color: #96b396;\n  border-radius: 4px;\n  transform: translate(-50%, 0);\n  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.9);\n  z-index: 100;\n  box-sizing: border-box;\n  overflow: auto;\n}\n.modal .modal__header {\n  position: relative;\n}\n.modal .modal__close-btn {\n  display: block;\n  position: absolute;\n  top: -30px;\n  right: 0;\n  width: 20px;\n  height: 20px;\n  background-color: transparent;\n  border: none;\n}\n.modal .modal__close-btn span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.modal .modal__close-btn span::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: -11px;\n  left: -2px;\n  width: 3px;\n  height: 22px;\n  border-radius: 2px;\n  background-color: #000;\n  transform: rotate(45deg);\n}\n.modal .modal__close-btn span::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: -11px;\n  left: -2px;\n  width: 3px;\n  height: 22px;\n  border-radius: 2px;\n  background-color: #000;\n  transform: rotate(-45deg);\n}\n\n.modal__initiate-btn {\n  position: fixed;\n  right: 0;\n  bottom: 120px;\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  font-size: 0;\n  background-color: #96b396;\n  border-radius: 4px;\n}\n.modal__initiate-btn:hover {\n  background-color: #677a67;\n}\n.modal__initiate-btn .modal__initiate-btn-icon {\n  width: 30px;\n  height: 40px;\n}\n.modal__initiate-btn .modal__initiate-btn-icon svg {\n  width: 30px;\n  height: 40px;\n  fill: #000;\n}\n.modal__initiate-btn .modal__initiate-btn-icon .fa-secondary {\n  opacity: 0.4;\n}\n.modal__initiate-btn span {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n@media (min-width: 600px) {\n  .modal {\n    top: 50%;\n    padding: 35px;\n    width: 480px;\n    max-width: 480px;\n    max-height: unset;\n    transform: translate(-50%, -50%);\n  }\n  .modal .modal__close-btn {\n    top: -20px;\n    right: -20px;\n  }\n}\n@media (min-width: 768px) {\n  .modal .modal__initiate-btn {\n    column-gap: 8px;\n    padding: 16px 22px;\n    font-size: 18px;\n    font-family: \"Open Sans\", sans-serif !important;\n  }\n}\n.calculator {\n  color: #000;\n  font-family: \"Open Sans\", sans-serif !important;\n}\n.calculator .calculator__header {\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #444;\n}\n.calculator .calculator__header h4 {\n  margin: 0;\n  max-width: 90%;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: \"Open Sans\", sans-serif !important;\n  line-height: 1.4;\n}\n.calculator .calculator__icon {\n  position: absolute;\n  top: -30px;\n  left: 0;\n  width: 20px;\n  height: 20px;\n}\n.calculator .calculator__icon svg {\n  width: 20px;\n  height: 20px;\n}\n.calculator .calculator__icon .fa-secondary {\n  opacity: 0.4;\n}\n.calculator .calculator__body {\n  padding-top: 20px;\n}\n.calculator .calculator__inner-wrap {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n}\n.calculator .calculator__inner-wrap--select {\n  justify-content: flex-end;\n}\n.calculator .calculator__inner-wrap--select .calculator__label {\n  margin-bottom: 0;\n}\n.calculator .calculator__inner-wrap--select select {\n  padding: 8px 12px;\n  height: 36px;\n  font-weight: 600;\n  font-size: 16px;\n  color: #53a086;\n  border-width: 2px;\n  border-style: inset;\n  border-color: -internal-light-dark(white, #3b3b3b);\n  border-radius: 4px;\n}\n.calculator .calculator__inner-wrap--select option {\n  font-weight: 600;\n}\n.calculator .calculator__odds-container {\n  flex-direction: column;\n}\n.calculator .calculator__label {\n  margin-right: 16px;\n  margin-bottom: 5px;\n  font-weight: 700;\n  font-size: 14px;\n}\n.calculator .calculator__odd-item {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n}\n.calculator .calculator__multiply-odd-item {\n  margin-top: 12px;\n}\n.calculator .calculator__odd-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 49%;\n  max-width: 49%;\n}\n.calculator .calculator__odd-wrap .calculator__label {\n  margin-right: 0;\n}\n.calculator .calculator__input {\n  width: 100%;\n  max-width: 100%;\n  padding: 8px 12px;\n  height: 36px;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.calculator .calculator__input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #53a086;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #53a086;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #53a086;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #53a086;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__output {\n  padding: 8px 12px;\n  width: 100%;\n  height: 55px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 4px;\n  border-width: 4px;\n  background-color: #000;\n  box-sizing: border-box;\n}\n.calculator .calculator__output::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #fff;\n  font-weight: 600;\n}\n.calculator .calculator__output::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__output:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__output:-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__btn-wrap {\n  display: flex;\n}\n.calculator .calculator__btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 5px;\n  padding: 8px 12px;\n  height: 36px;\n  font-weight: 700;\n  line-height: 0.9;\n  font-size: 16px;\n  border-radius: 4px;\n}\n.calculator .calculator__btn-icon {\n  position: relative;\n  width: 18px;\n  height: 18px;\n  border-radius: 100%;\n}\n.calculator .calculator__btn-icon::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: block;\n  width: 2px;\n  height: 12px;\n  background-color: #fff;\n  transform: translate(-50%, -50%);\n}\n.calculator .calculator__btn-icon::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: block;\n  width: 12px;\n  height: 2px;\n  background-color: #fff;\n  transform: translate(-50%, -50%);\n}\n.calculator .calculator__add-btn {\n  margin-right: 8px;\n  background-color: #263126;\n  color: #fff;\n}\n.calculator .calculator__add-btn:hover {\n  background-color: #161a16;\n}\n.calculator .calculator__clear-btn {\n  background-color: #555;\n}\n.calculator .calculator__clear-btn:hover {\n  background-color: #777;\n}\n.calculator .calculator__clear-btn .calculator__btn-icon {\n  background-color: #333;\n  transform: rotate(45deg);\n}\n\n@media (min-width: 600px) {\n  .calculator .calculator__icon {\n    position: static;\n    margin-right: 12px;\n    width: 30px;\n    height: 35px;\n  }\n  .calculator .calculator__icon svg {\n    width: 30px;\n    height: 35px;\n  }\n  .calculator .calculator__header h4 {\n    font-size: 16px;\n  }\n  .calculator .calculator__label {\n    font-size: 18px;\n  }\n  .calculator .calculator__input {\n    padding: 10px 16px;\n    height: 44px;\n    font-size: 18px;\n  }\n  .calculator .calculator__input::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    font-size: 18px;\n  }\n  .calculator .calculator__input::-moz-placeholder {\n    /* Firefox 19+ */\n    font-size: 18px;\n  }\n  .calculator .calculator__input:-ms-input-placeholder {\n    /* IE 10+ */\n    font-size: 18px;\n  }\n  .calculator .calculator__input:-moz-placeholder {\n    /* Firefox 18- */\n    font-size: 18px;\n  }\n  .calculator .calculator__inner-wrap--select select {\n    padding: 0 16px;\n    height: 44px;\n  }\n  .calculator .calculator__output {\n    padding: 10px 16px;\n    min-width: 170px;\n    font-size: 18px;\n  }\n  .calculator .calculator__output::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    font-size: 18px;\n  }\n  .calculator .calculator__output::-moz-placeholder {\n    /* Firefox 19+ */\n    font-size: 18px;\n  }\n  .calculator .calculator__output:-ms-input-placeholder {\n    /* IE 10+ */\n    font-size: 18px;\n  }\n  .calculator .calculator__output:-moz-placeholder {\n    /* Firefox 18- */\n    font-size: 18px;\n  }\n  .calculator .calculator__btn {\n    padding: 10px 22px;\n    height: 44px;\n    font-size: 18px;\n  }\n}", "",{"version":3,"sources":["webpack://./assets/scss/common.scss","webpack://./assets/scss/style.scss","webpack://./assets/scss/modal.scss","webpack://./assets/scss/calculator.scss"],"names":[],"mappings":"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","sourcesContent":["body {\r\n\r\n\t&::before {\r\n\t\tcontent: \"\";\r\n\t\tdisplay: block;\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tbackground-color: #333;\r\n\t\tbottom: 0;\r\n\t\tright: 0;\r\n\t\tvisibility: hidden;\r\n\t\tz-index: 2;\r\n\t}\r\n\r\n\t&.overlay {\r\n\t    overflow: hidden;\r\n\t}\r\n\r\n\t&.overlay::before {\r\n\t\tvisibility: visible;\r\n      opacity: 0.4;\r\n\t}\r\n}\r\n\r\nbutton,\r\ninput,\r\nselect {\r\n\tcursor: pointer;\r\n}\r\n","body::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #333;\n  bottom: 0;\n  right: 0;\n  visibility: hidden;\n  z-index: 2;\n}\nbody.overlay {\n  overflow: hidden;\n}\nbody.overlay::before {\n  visibility: visible;\n  opacity: 0.4;\n}\n\nbutton,\ninput,\nselect {\n  cursor: pointer;\n}\n\n.modal {\n  position: fixed;\n  left: 50%;\n  top: 15px;\n  padding: 16px;\n  padding-top: 45px;\n  width: 96%;\n  max-width: 96%;\n  max-height: 90%;\n  background-color: #96b396;\n  border-radius: 4px;\n  transform: translate(-50%, 0);\n  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.9);\n  z-index: 100;\n  box-sizing: border-box;\n  overflow: auto;\n}\n.modal .modal__header {\n  position: relative;\n}\n.modal .modal__close-btn {\n  display: block;\n  position: absolute;\n  top: -30px;\n  right: 0;\n  width: 20px;\n  height: 20px;\n  background-color: transparent;\n  border: none;\n}\n.modal .modal__close-btn span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.modal .modal__close-btn span::before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: -11px;\n  left: -2px;\n  width: 3px;\n  height: 22px;\n  border-radius: 2px;\n  background-color: #000;\n  transform: rotate(45deg);\n}\n.modal .modal__close-btn span::after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  top: -11px;\n  left: -2px;\n  width: 3px;\n  height: 22px;\n  border-radius: 2px;\n  background-color: #000;\n  transform: rotate(-45deg);\n}\n\n.modal__initiate-btn {\n  position: fixed;\n  right: 0;\n  bottom: 120px;\n  display: flex;\n  align-items: center;\n  padding: 12px;\n  font-size: 0;\n  background-color: #96b396;\n  border-radius: 4px;\n}\n.modal__initiate-btn:hover {\n  background-color: #677a67;\n}\n.modal__initiate-btn .modal__initiate-btn-icon {\n  width: 30px;\n  height: 40px;\n}\n.modal__initiate-btn .modal__initiate-btn-icon svg {\n  width: 30px;\n  height: 40px;\n  fill: #000;\n}\n.modal__initiate-btn .modal__initiate-btn-icon .fa-secondary {\n  opacity: 0.4;\n}\n.modal__initiate-btn span {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.btn {\n  cursor: pointer;\n}\n\n@media (min-width: 600px) {\n  .modal {\n    top: 50%;\n    padding: 35px;\n    width: 480px;\n    max-width: 480px;\n    max-height: unset;\n    transform: translate(-50%, -50%);\n  }\n  .modal .modal__close-btn {\n    top: -20px;\n    right: -20px;\n  }\n}\n@media (min-width: 768px) {\n  .modal .modal__initiate-btn {\n    column-gap: 8px;\n    padding: 16px 22px;\n    font-size: 18px;\n    font-family: \"Open Sans\", sans-serif !important;\n  }\n}\n.calculator {\n  color: #000;\n  font-family: \"Open Sans\", sans-serif !important;\n}\n.calculator .calculator__header {\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #444;\n}\n.calculator .calculator__header h4 {\n  margin: 0;\n  max-width: 90%;\n  font-size: 12px;\n  font-weight: 600;\n  font-family: \"Open Sans\", sans-serif !important;\n  line-height: 1.4;\n}\n.calculator .calculator__icon {\n  position: absolute;\n  top: -30px;\n  left: 0;\n  width: 20px;\n  height: 20px;\n}\n.calculator .calculator__icon svg {\n  width: 20px;\n  height: 20px;\n}\n.calculator .calculator__icon .fa-secondary {\n  opacity: 0.4;\n}\n.calculator .calculator__body {\n  padding-top: 20px;\n}\n.calculator .calculator__inner-wrap {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n}\n.calculator .calculator__inner-wrap--select {\n  justify-content: flex-end;\n}\n.calculator .calculator__inner-wrap--select .calculator__label {\n  margin-bottom: 0;\n}\n.calculator .calculator__inner-wrap--select select {\n  padding: 8px 12px;\n  height: 36px;\n  font-weight: 600;\n  font-size: 16px;\n  color: #53a086;\n  border-width: 2px;\n  border-style: inset;\n  border-color: -internal-light-dark(white, #3b3b3b);\n  border-radius: 4px;\n}\n.calculator .calculator__inner-wrap--select option {\n  font-weight: 600;\n}\n.calculator .calculator__odds-container {\n  flex-direction: column;\n}\n.calculator .calculator__label {\n  margin-right: 16px;\n  margin-bottom: 5px;\n  font-weight: 700;\n  font-size: 14px;\n}\n.calculator .calculator__odd-item {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n}\n.calculator .calculator__multiply-odd-item {\n  margin-top: 12px;\n}\n.calculator .calculator__odd-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 49%;\n  max-width: 49%;\n}\n.calculator .calculator__odd-wrap .calculator__label {\n  margin-right: 0;\n}\n.calculator .calculator__input {\n  width: 100%;\n  max-width: 100%;\n  padding: 8px 12px;\n  height: 36px;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n.calculator .calculator__input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #53a086;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #53a086;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #53a086;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #53a086;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__output {\n  padding: 8px 12px;\n  width: 100%;\n  height: 55px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  border-radius: 4px;\n  border-width: 4px;\n  background-color: #000;\n  box-sizing: border-box;\n}\n.calculator .calculator__output::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #fff;\n  font-weight: 600;\n}\n.calculator .calculator__output::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__output:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__output:-moz-placeholder {\n  /* Firefox 18- */\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n}\n.calculator .calculator__btn-wrap {\n  display: flex;\n}\n.calculator .calculator__btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 5px;\n  padding: 8px 12px;\n  height: 36px;\n  font-weight: 700;\n  line-height: 0.9;\n  font-size: 16px;\n  border-radius: 4px;\n}\n.calculator .calculator__btn-icon {\n  position: relative;\n  width: 18px;\n  height: 18px;\n  border-radius: 100%;\n}\n.calculator .calculator__btn-icon::before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: block;\n  width: 2px;\n  height: 12px;\n  background-color: #fff;\n  transform: translate(-50%, -50%);\n}\n.calculator .calculator__btn-icon::after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: block;\n  width: 12px;\n  height: 2px;\n  background-color: #fff;\n  transform: translate(-50%, -50%);\n}\n.calculator .calculator__add-btn {\n  margin-right: 8px;\n  background-color: #263126;\n  color: #fff;\n}\n.calculator .calculator__add-btn:hover {\n  background-color: #161a16;\n}\n.calculator .calculator__clear-btn {\n  background-color: #555;\n}\n.calculator .calculator__clear-btn:hover {\n  background-color: #777;\n}\n.calculator .calculator__clear-btn .calculator__btn-icon {\n  background-color: #333;\n  transform: rotate(45deg);\n}\n\n@media (min-width: 600px) {\n  .calculator .calculator__icon {\n    position: static;\n    margin-right: 12px;\n    width: 30px;\n    height: 35px;\n  }\n  .calculator .calculator__icon svg {\n    width: 30px;\n    height: 35px;\n  }\n  .calculator .calculator__header h4 {\n    font-size: 16px;\n  }\n  .calculator .calculator__label {\n    font-size: 18px;\n  }\n  .calculator .calculator__input {\n    padding: 10px 16px;\n    height: 44px;\n    font-size: 18px;\n  }\n  .calculator .calculator__input::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    font-size: 18px;\n  }\n  .calculator .calculator__input::-moz-placeholder {\n    /* Firefox 19+ */\n    font-size: 18px;\n  }\n  .calculator .calculator__input:-ms-input-placeholder {\n    /* IE 10+ */\n    font-size: 18px;\n  }\n  .calculator .calculator__input:-moz-placeholder {\n    /* Firefox 18- */\n    font-size: 18px;\n  }\n  .calculator .calculator__inner-wrap--select select {\n    padding: 0 16px;\n    height: 44px;\n  }\n  .calculator .calculator__output {\n    padding: 10px 16px;\n    min-width: 170px;\n    font-size: 18px;\n  }\n  .calculator .calculator__output::-webkit-input-placeholder {\n    /* Chrome/Opera/Safari */\n    font-size: 18px;\n  }\n  .calculator .calculator__output::-moz-placeholder {\n    /* Firefox 19+ */\n    font-size: 18px;\n  }\n  .calculator .calculator__output:-ms-input-placeholder {\n    /* IE 10+ */\n    font-size: 18px;\n  }\n  .calculator .calculator__output:-moz-placeholder {\n    /* Firefox 18- */\n    font-size: 18px;\n  }\n  .calculator .calculator__btn {\n    padding: 10px 22px;\n    height: 44px;\n    font-size: 18px;\n  }\n}",".modal {\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 15px;\r\n  padding: 16px;\r\n  padding-top: 45px;\r\n  width: 96%;\r\n  max-width: 96%;\r\n  max-height: 90%;\r\n  background-color: rgb(150, 179, 150);\r\n  border-radius: 4px;\r\n  transform: translate(-50%, 0);\r\n  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.9);\r\n  z-index: 100;\r\n  box-sizing: border-box;\r\n  overflow: auto;\r\n\r\n  .modal__header {\r\n    position: relative;\r\n  }\r\n\r\n  .modal__close-btn {\r\n    display: block;\r\n    position: absolute;\r\n    top: -30px;\r\n    right: 0;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: transparent;\r\n    border: none;\r\n\r\n    span {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n\r\n      &::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        display: block;\r\n        top: -11px;\r\n        left: -2px;\r\n        width: 3px;\r\n        height: 22px;\r\n        border-radius: 2px;\r\n        background-color: #000;\r\n        transform: rotate(45deg);\r\n      }\r\n\r\n      &::after {\r\n        content: \"\";\r\n        position: absolute;\r\n        display: block;\r\n        top: -11px;\r\n        left: -2px;\r\n        width: 3px;\r\n        height: 22px;\r\n        border-radius: 2px;\r\n        background-color: #000;\r\n        transform: rotate(-45deg);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.modal__initiate-btn {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 120px;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 12px;\r\n  font-size: 0;\r\n  background-color: rgb(150, 179, 150);\r\n  border-radius: 4px;\r\n\r\n  &:hover {\r\n    background-color: rgb(103, 122, 103);\r\n  } \r\n\r\n  .modal__initiate-btn-icon {\r\n    width: 30px;\r\n    height: 40px;\r\n\r\n    svg {\r\n      width: 30px;\r\n      height: 40px;\r\n      fill: #000;\r\n    }\r\n\r\n    .fa-secondary {\r\n      opacity: 0.4;\r\n    }\r\n  }\r\n\r\n  span {\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n  }\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n@media (min-width: 600px) {\r\n\r\n  .modal {\r\n    top: 50%;\r\n    padding: 35px;\r\n    width: 480px;\r\n    max-width: 480px;\r\n    max-height: unset;\r\n    transform: translate(-50%, -50%);\r\n\r\n    .modal__close-btn {\r\n      top: -20px;\r\n      right: -20px;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n  .modal {\r\n\r\n    .modal__initiate-btn {\r\n      column-gap: 8px;\r\n      padding: 16px 22px;\r\n      font-size: 18px;\r\n      font-family: 'Open Sans', sans-serif !important;\r\n    }\r\n  }\r\n}\r\n",".calculator {\r\n   color: #000;\r\n   font-family: 'Open Sans', sans-serif !important;\r\n   \r\n   .calculator__header {\r\n      display: flex;\r\n      align-items: center;\r\n      column-gap: 10px;\r\n      padding-bottom: 15px;\r\n      border-bottom: 1px solid #444;\r\n   }\r\n\r\n   .calculator__header h4 {\r\n      margin: 0;\r\n      max-width: 90%;\r\n      font-size: 12px;\r\n      font-weight: 600;\r\n      font-family: 'Open Sans', sans-serif !important;\r\n      line-height: 1.4;\r\n   }\r\n\r\n   .calculator__icon {\r\n      position: absolute;\r\n      top: -30px;\r\n      left: 0;\r\n      width: 20px;\r\n      height: 20px;\r\n\r\n      svg {\r\n         width: 20px;\r\n         height: 20px;\r\n      }\r\n\r\n      .fa-secondary {\r\n         opacity: 0.4;\r\n      }\r\n   }\r\n\r\n   .calculator__body {\r\n      padding-top: 20px;\r\n   }\r\n\r\n   .calculator__inner-wrap {\r\n      display: flex;\r\n      align-items: center;\r\n      flex-wrap: wrap;\r\n      margin-bottom: 18px;\r\n   }\r\n\r\n   .calculator__inner-wrap--select {\r\n      justify-content: flex-end;\r\n\r\n      .calculator__label {\r\n         margin-bottom: 0;\r\n      }\r\n\r\n      select {\r\n         padding: 8px 12px;\r\n         height: 36px;\r\n         font-weight: 600;\r\n         font-size: 16px;\r\n         color:rgb(83, 160, 134);\r\n         border-width: 2px;\r\n         border-style: inset;\r\n         border-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));\r\n         border-radius: 4px;\r\n      }\r\n\r\n      option {\r\n         font-weight: 600;\r\n      }\r\n   }\r\n\r\n   .calculator__odds-container {\r\n      flex-direction: column;\r\n   }\r\n\r\n   .calculator__label {\r\n      margin-right: 16px;\r\n      margin-bottom: 5px;\r\n      font-weight: 700;\r\n      font-size: 14px;\r\n   }\r\n\r\n   .calculator__odd-item {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      width: 100%;\r\n      min-width: 100%;\r\n      max-width: 100%;\r\n   }\r\n\r\n   .calculator__multiply-odd-item {\r\n      margin-top: 12px;\r\n   }\r\n\r\n   .calculator__odd-wrap {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      width: 49%;\r\n      max-width: 49%;\r\n\r\n      .calculator__label {\r\n         margin-right: 0;\r\n      }\r\n   }\r\n\r\n   .calculator__input {\r\n      width: 100%;\r\n      max-width: 100%;\r\n      padding: 8px 12px;\r\n      height: 36px;\r\n      font-weight: 600;\r\n      font-size: 14px;\r\n      border-radius: 4px;\r\n      box-sizing: border-box;\r\n\r\n      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n         color: rgb(83, 160, 134);\r\n         font-weight: 600;\r\n         font-size: 14px;\r\n      }\r\n\r\n      &::-moz-placeholder { /* Firefox 19+ */\r\n         color: rgb(83, 160, 134);\r\n         font-weight: 600;\r\n         font-size: 14px;\r\n      }\r\n\r\n      &:-ms-input-placeholder { /* IE 10+ */\r\n         color: rgb(83, 160, 134);\r\n         font-weight: 600;\r\n         font-size: 14px;\r\n      }\r\n\r\n      &:-moz-placeholder { /* Firefox 18- */\r\n         color: rgb(83, 160, 134);\r\n         font-weight: 600;\r\n         font-size: 14px;\r\n      }\r\n   }\r\n\r\n   .calculator__output {\r\n      padding: 8px 12px;\r\n      width: 100%;\r\n      height: 55px;\r\n      color: #fff;\r\n      font-weight: 600;\r\n      font-size: 14px;\r\n      border-radius: 4px;\r\n      border-width: 4px;\r\n      background-color: #000;\r\n      box-sizing: border-box;\r\n\r\n      &::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n         color: #fff;\r\n         font-weight: 600;\r\n      }\r\n\r\n      &::-moz-placeholder { /* Firefox 19+ */\r\n         color: #fff;\r\n         font-weight: 600;\r\n         font-size: 14px;\r\n      }\r\n\r\n      &:-ms-input-placeholder { /* IE 10+ */\r\n         color: #fff;\r\n         font-weight: 600;\r\n         font-size: 14px;\r\n      }\r\n\r\n      &:-moz-placeholder { /* Firefox 18- */\r\n         color: #fff;\r\n         font-weight: 600;\r\n         font-size: 14px;\r\n      }\r\n   }\r\n\r\n   .calculator__btn-wrap {\r\n      display: flex;\r\n   }\r\n\r\n   .calculator__btn {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      column-gap: 5px;\r\n      padding: 8px 12px;\r\n      height: 36px;\r\n      font-weight: 700;\r\n      line-height: 0.9;\r\n      font-size: 16px;\r\n      border-radius: 4px;\r\n   }\r\n\r\n   .calculator__btn-icon {\r\n      position: relative;\r\n      width: 18px;\r\n      height: 18px;\r\n      border-radius: 100%;\r\n\r\n      &::before {\r\n         content: \"\";\r\n         position: absolute;\r\n         left: 50%;\r\n         top: 50%;\r\n         display: block;\r\n         width: 2px;\r\n         height: 12px;\r\n         background-color: #fff;\r\n         transform: translate(-50%, -50%);\r\n      }\r\n\r\n      &::after {\r\n         content: \"\";\r\n         position: absolute;\r\n         left: 50%;\r\n         top: 50%;\r\n         display: block;\r\n         width: 12px;\r\n         height: 2px;\r\n         background-color: #fff;\r\n         transform: translate(-50%, -50%);\r\n      }\r\n   }\r\n\r\n   .calculator__add-btn {\r\n      margin-right: 8px;\r\n      background-color: rgb(38, 49, 38);\r\n      color: #fff;\r\n\r\n      &:hover {\r\n         background-color: rgb(22, 26, 22);\r\n      }\r\n   }\r\n\r\n   .calculator__clear-btn {\r\n      background-color: #555;\r\n\r\n      &:hover {\r\n         background-color: #777;\r\n      }\r\n\r\n      .calculator__btn-icon {\r\n         background-color: #333;\r\n         transform: rotate(45deg);\r\n      }\r\n   }\r\n}\r\n\r\n@media (min-width: 600px) {\r\n\r\n   .calculator {\r\n\r\n      .calculator__icon {\r\n         position: static;\r\n         margin-right: 12px;\r\n         width: 30px;\r\n         height: 35px;\r\n\r\n         svg {\r\n            width: 30px;\r\n            height: 35px;\r\n         }\r\n      }\r\n\r\n      .calculator__header h4 {\r\n         font-size: 16px;\r\n      }\r\n\r\n      .calculator__label {\r\n         font-size: 18px;\r\n      }\r\n\r\n      .calculator__input {\r\n         padding: 10px 16px;\r\n         height: 44px;\r\n         font-size: 18px;\r\n\r\n         &::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n            font-size: 18px;\r\n         }\r\n\r\n         &::-moz-placeholder { /* Firefox 19+ */\r\n            font-size: 18px;\r\n         }\r\n\r\n         &:-ms-input-placeholder { /* IE 10+ */\r\n            font-size: 18px;\r\n         }\r\n\r\n         &:-moz-placeholder { /* Firefox 18- */\r\n            font-size: 18px;\r\n         }\r\n      }\r\n\r\n      .calculator__inner-wrap--select {\r\n\r\n         select {\r\n            padding: 0 16px;\r\n            height: 44px;\r\n         }\r\n      }\r\n\r\n      .calculator__output {\r\n         padding: 10px 16px;\r\n         min-width: 170px;\r\n         font-size: 18px;\r\n\r\n         &::-webkit-input-placeholder { /* Chrome/Opera/Safari */\r\n            font-size: 18px;\r\n         }\r\n\r\n         &::-moz-placeholder { /* Firefox 19+ */\r\n            font-size: 18px;\r\n         }\r\n\r\n         &:-ms-input-placeholder { /* IE 10+ */\r\n            font-size: 18px;\r\n         }\r\n\r\n         &:-moz-placeholder { /* Firefox 18- */\r\n            font-size: 18px;\r\n         }\r\n\r\n      }\r\n\r\n      .calculator__btn {\r\n         padding: 10px 22px;\r\n         height: 44px;\r\n         font-size: 18px;\r\n      }\r\n   }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./assets/scss/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./assets/js/calculator.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./assets/scss/style.scss");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ "./assets/js/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./assets/js/utils.js");
/* harmony import */ var _calculator_btn_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator-btn-view.js */ "./assets/js/calculator-btn-view.js");
/* harmony import */ var _calculator_modal_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator-modal-view.js */ "./assets/js/calculator-modal-view.js");
/* harmony import */ var _format_options_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format-options-view.js */ "./assets/js/format-options-view.js");
/* harmony import */ var _default_odd_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-odd-block */ "./assets/js/default-odd-block.js");
/* harmony import */ var _create_odd_block_view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-odd-block.view.js */ "./assets/js/create-odd-block.view.js");








const body = document.querySelector('body');

// creating calculator button
const calculatorInitiateBtn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)((0,_calculator_btn_view_js__WEBPACK_IMPORTED_MODULE_3__.calculatorBtnView)((0,_const_js__WEBPACK_IMPORTED_MODULE_1__.HOUSE_ICON)()));

//incerting calculator button into the body tag on the page
body.append(calculatorInitiateBtn);

// function for calculating odds in different formats
const getResult = (array) => {
   let result = 0;
   let currentFormat = document.querySelector('select[name="odds_format"]').value;
   Array.from(array).forEach((item) => {
      let odd = item.querySelector('input[name="odd"]').value;
      let stake = Number(item.querySelector('input[name="stake"]').value);
      switch (currentFormat) {
         case _const_js__WEBPACK_IMPORTED_MODULE_1__.oddsFormat.AMERICAN:
            odd = (Number(odd) + 100) / 100;
            console.log(odd);
            result += stake * odd;
            break;
         case _const_js__WEBPACK_IMPORTED_MODULE_1__.oddsFormat.FRACTAL:
            odd = eval(odd);
            console.log(odd);
            result += stake * odd;
            break;
         case _const_js__WEBPACK_IMPORTED_MODULE_1__.oddsFormat.DECIMAL:
            result += stake * odd;
            break;
      }
   });

   return result.toFixed(2);
};

// function for cleaning inputs values and removing created additional odds blocks
const clearInputs = (input) => {
   let oddItems = document.querySelectorAll('.calculator__odd-item');
   oddItems.forEach((item) => item.remove());
   input.value = '';
}

// callback for calling calculation function on the input change event
const inputChangeHandler = (inputs, odds, output) => {
   Array.from(inputs).forEach((item) => item.addEventListener('change', function () {
      let result = getResult(odds);
      if (!isNaN(result)) {
         output.value = '$ ' + result;
      }
   }));
};

// showing calculator modal
const showModal = () => {

   // removing calculator initiation button
   body.removeChild(calculatorInitiateBtn);

   const modalWindow = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)((0,_calculator_modal_view_js__WEBPACK_IMPORTED_MODULE_4__.calculatorModalView)((0,_const_js__WEBPACK_IMPORTED_MODULE_1__.HOUSE_ICON)(), (0,_format_options_view_js__WEBPACK_IMPORTED_MODULE_5__.formatOptions)(_const_js__WEBPACK_IMPORTED_MODULE_1__.oddsFormat)));

   // pushing calculator modal into the body tag on the page
   body.append(modalWindow);
   body.classList.add('overlay');

   const modalCloseBtn = modalWindow.querySelector('#modal_close');
   const addOddBtn = modalWindow.querySelector('#add_oods');
   const oddsContainer = modalWindow.querySelector('#calculator-odds-container');
   const clearBtn = modalWindow.querySelector('#clear');
   const outputInput = modalWindow.querySelector('#result');
   let currentOddsFormat = modalWindow.querySelector('select[name="odds_format"]');

   // creating and pushing into the modal default odd inputs
   oddsContainer.append((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)((0,_default_odd_block__WEBPACK_IMPORTED_MODULE_6__.defaultOddBlockView)(_const_js__WEBPACK_IMPORTED_MODULE_1__.oddInputPlaceholders[currentOddsFormat.value])));

   let calculatorInputs = modalWindow.querySelectorAll('.calculator__input');
   let oddItems = modalWindow.querySelectorAll('.calculator__odd-item');

   // event listener for changes in inputs
   inputChangeHandler(calculatorInputs, oddItems, outputInput);

   // event listener for adding additional odd block
   addOddBtn.addEventListener('click', function () {
      oddsContainer.append((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)((0,_create_odd_block_view_js__WEBPACK_IMPORTED_MODULE_7__.createOddBlock)(_const_js__WEBPACK_IMPORTED_MODULE_1__.oddInputPlaceholders[currentOddsFormat.value])));
      calculatorInputs = modalWindow.querySelectorAll('.calculator__input');
      oddItems = oddsContainer.querySelectorAll('.calculator__odd-item');
      inputChangeHandler(calculatorInputs, oddItems, outputInput);
      let currentStakeInputIndex = Array.from(oddItems).length - 1;
      oddItems[currentStakeInputIndex].querySelector('input[name="stake"]').focus();
   });

   // event listener for clear button
   clearBtn.addEventListener('click', function () {
      clearInputs(outputInput);
      oddsContainer.append((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)((0,_default_odd_block__WEBPACK_IMPORTED_MODULE_6__.defaultOddBlockView)(_const_js__WEBPACK_IMPORTED_MODULE_1__.oddInputPlaceholders[currentOddsFormat.value])));
      oddItems = modalWindow.querySelectorAll('.calculator__odd-item');
      calculatorInputs = modalWindow.querySelectorAll('.calculator__input');
      inputChangeHandler(calculatorInputs, oddItems, outputInput);
   });

   // even listener for changing odd format in select
   currentOddsFormat.addEventListener('change', function () {
      clearInputs(outputInput);
      oddsContainer.append((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.createElement)((0,_default_odd_block__WEBPACK_IMPORTED_MODULE_6__.defaultOddBlockView)(_const_js__WEBPACK_IMPORTED_MODULE_1__.oddInputPlaceholders[currentOddsFormat.value])));
      oddItems = modalWindow.querySelectorAll('.calculator__odd-item');
      calculatorInputs = modalWindow.querySelectorAll('.calculator__input');
      inputChangeHandler(calculatorInputs, oddItems, outputInput);
   });

   // function for closing calculator modal
   const closeModal = () => {
      body.removeChild(modalWindow);
      body.classList.remove('overlay');
      document.removeEventListener('keydown', escEvent);
      body.append(calculatorInitiateBtn);
   };

   // event listener on the modal close button
   modalCloseBtn.addEventListener('click', function () {
      clearInputs(outputInput);
      closeModal();
   });

   // callback function for click on escape button
   const escEvent = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
         closeModal();
      }
   };

   // event listener for click on escape button
   document.addEventListener('keydown', escEvent);
}

// initiationof calculator
if (calculatorInitiateBtn) {
   calculatorInitiateBtn.addEventListener('click', showModal);
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map