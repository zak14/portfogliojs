/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var section8 = document.querySelector('#exo-8');
var inputA = section8.querySelector('#title-content1');
var inputB = section8.querySelector('#title-content2');
var button = section8.querySelector('button');
var somme = section8.querySelector('#risultato');
var operatore = section8.querySelector('#operatore');
var bottoneC = section8.querySelector('#cancella');

var controlla = function controlla(x) {

    if (x.value == "" || isNaN(x.value)) {
        if (x.value == "") {
            x.classList.add("error");
            x.value = "Champ obligatoire";
            // Enlever le focus de l'élément actif
            x.blur();
        } else if (isNaN(x.value)) {
            x.classList.add("error");
            x.value = "Error char";
            // Enlever le focus de l'élément actif
            x.blur();
        }
    }
};

var Ccarattere = function Ccarattere() {

    // Définition d'un expression régulière
    var reg = /^-?[0-9]*\.?[0-9]*$/;
    // Vérifier si la valeur est bien un nombre
    while (!reg.test(this.value)) {
        // Récupérer la longeur de la chaine de caractère
        var Ltesto = this.value.length;
        // Enlever le dernier cractère
        this.value = this.value.substr(0, Ltesto - 1);
    }
};
var plus = function plus() {

    controlla(inputA);
    controlla(inputB);

    if (inputA.classList.contains('error') || inputB.classList.contains('error')) {
        return false;
    }

    var a = parseInt(inputA.value);
    var b = parseInt(inputB.value);
    var c = void 0;
    switch (operatore.value) {
        case '+':
            c = a + b;
            break;
        case '-':
            c = a - b;
            break;
        case '*':
            c = a * b;
            break;
        case '/':
            c = a / b;
            break;

    }

    somme.innerText = c;
};

var viderChamp = function viderChamp(e) {
    // Vérifier si le champ est en error
    if (inputA.classList.contains('error') || inputB.classList.contains('error')) {
        // Vider la value
        if (inputA.classList.contains('error')) {
            inputA.value = "";
            // Retirer la class error
            inputA.classList.remove('error');
        }

        if (inputB.classList.contains('error')) {
            inputB.value = "";
            // Retirer la class error
            inputB.classList.remove('error');
        }
    }
};

var vidertout = function vidertout() {
    inputA.value = "";
    // Retirer la class error
    inputA.classList.remove('error');

    inputB.value = "";
    // Retirer la class error
    inputB.classList.remove('error');
};

button.addEventListener('click', plus);
inputA.addEventListener('click', viderChamp);
inputB.addEventListener('click', viderChamp);
bottoneC.addEventListener('click', vidertout);
inputA.addEventListener('keyup', Ccarattere);
inputB.addEventListener('keyup', Ccarattere);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);