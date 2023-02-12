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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Dom */ \"./src/modules/Dom.js\");\n\n\nwindow.addEventListener('load', _modules_Dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadPage);\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/Dom.js":
/*!****************************!*\
  !*** ./src/modules/Dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/modules/TodoList.js\");\n\n\n\nconst Dom = (() => {\n  const loadPage = () => {\n    loadProjects();\n    initMenu();\n    initSideMenu();\n  };\n  const loadProjects = () => {\n    const todoList = (0,_TodoList__WEBPACK_IMPORTED_MODULE_0__.TodoList)();\n  };\n\n  const loadTodos = () => {};\n\n  const initMenu = () => {\n    const menuBtn = document.querySelector(\".menu-btn\");\n    const menu = document.querySelector(\".menu\");\n    menuBtn.addEventListener(\"click\", () => {\n      if (menu.style.display === \"none\") {\n        menu.style.display = \"flex\";\n      } else {\n        menu.style.display = \"none\";\n      }\n    });\n    const addBtn = document.querySelector(\".add-btn\");\n    const addForm = document.querySelector(\".task-add-menu\");\n    addBtn.addEventListener(\"click\", () => {\n      if (addForm.style.display === \"none\" || addForm.style.display === \"\") {\n        addForm.style.display = \"flex\";\n      } else {\n        addForm.style.display = \"none\";\n      }\n    });\n  };\n\n  const initSideMenu = () => {\n    const addProjectBtn = document.querySelector(\".add-project-btn\");\n    const addProjectForm = document.querySelector(\".project-add-menu\");\n    addProjectBtn.addEventListener(\"click\", () => {\n      if (\n        addProjectForm.style.display === \"none\" ||\n        addProjectForm.style.display === \"\"\n      ) {\n        addProjectForm.style.display = \"flex\";\n      } else {\n        addProjectForm.style.display = \"none\";\n      }\n    });\n\n    const projectSubmitBtn = document.querySelector(\".project-submit-btn\");\n    projectSubmitBtn.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      addProject();\n    });\n  };\n\n  const addProject = () => {\n    const projectFormData = new FormData(\n      document.querySelector(\".project-form-data\")\n    );\n    console.log(projectFormData);\n    // const projectList = document.querySelector(\".project-list\");\n    // const projectItem = document.createElement(\"div\");\n    // projectItem.classList.add(\"project-item\");\n    // projectItem.setAttribute(\"data-project\", project.title);\n    // projectItem.textContent = project.title;\n    // projectList.appendChild(projectItem);\n  };\n\n  return {\n    loadPage,\n    loadProjects,\n    loadTodos,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);\n\n\n//# sourceURL=webpack://todo/./src/modules/Dom.js?");

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoList\": () => (/* binding */ TodoList)\n/* harmony export */ });\nconst TodoList = () => {\n  let projects = [];\n  const addProject = (project) => {\n    projects.push(project);\n  };\n\n  const getProjects = () => projects;\n\n  return { addProject, getProjects };\n};\n\n\n\n\n//# sourceURL=webpack://todo/./src/modules/TodoList.js?");

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