module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/clins-MacBook/Documents/GitHub/tvde-online/components/Menu.js\";\n\n\n\nconst Menu = () => {\n  const {\n    0: isOpen,\n    1: setIsOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  const toggle = () => setIsOpen(!isOpen);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"], {\n      color: \"primary\",\n      dark: true,\n      expand: \"md\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavbarBrand\"], {\n          href: \"/\",\n          children: \"LinsTur\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavbarToggler\"], {\n          onClick: toggle\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Collapse\"], {\n          isOpen: isOpen,\n          navbar: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {\n            className: \"mr-auto\",\n            navbar: true,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavItem\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n                href: \"/\",\n                children: \"Home\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 19\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavItem\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n                href: \"/sobre\",\n                children: \"Sobre\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 19\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavItem\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n                href: \"/contacto\",\n                children: \"Contacto\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 19\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavItem\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n                href: \"/resumo\",\n                children: \"Resumo\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 19\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavItem\"], {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n                href: \"/login\",\n                children: \"Login\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 19\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01lbnUuanM/MTEwZCJdLCJuYW1lcyI6WyJNZW51IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBaUJBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQ2YsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEM7O0FBRUEsUUFBTUMsTUFBTSxHQUFHLE1BQU1GLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQTlCOztBQUVBLHNCQUNJO0FBQUEsMkJBQ0UscUVBQUMsaURBQUQ7QUFBUSxXQUFLLEVBQUMsU0FBZDtBQUF3QixVQUFJLE1BQTVCO0FBQTZCLFlBQU0sRUFBQyxJQUFwQztBQUFBLDZCQUNFLHFFQUFDLG9EQUFEO0FBQUEsZ0NBQ0EscUVBQUMsc0RBQUQ7QUFBYSxjQUFJLEVBQUMsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQSxxRUFBQyx3REFBRDtBQUFlLGlCQUFPLEVBQUVHO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkEsZUFHQSxxRUFBQyxtREFBRDtBQUFVLGdCQUFNLEVBQUVILE1BQWxCO0FBQTBCLGdCQUFNLE1BQWhDO0FBQUEsaUNBQ0UscUVBQUMsOENBQUQ7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBeUIsa0JBQU0sTUFBL0I7QUFBQSxvQ0FFRSxxRUFBQyxrREFBRDtBQUFBLHFDQUNFLHFFQUFDLGtEQUFEO0FBQVMsb0JBQUksRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQU1FLHFFQUFDLGtEQUFEO0FBQUEscUNBQ0UscUVBQUMsa0RBQUQ7QUFBUyxvQkFBSSxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQU5GLGVBVUUscUVBQUMsa0RBQUQ7QUFBQSxxQ0FDRSxxRUFBQyxrREFBRDtBQUFTLG9CQUFJLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBVkYsZUFjRSxxRUFBQyxrREFBRDtBQUFBLHFDQUNFLHFFQUFDLGtEQUFEO0FBQVMsb0JBQUksRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFkRixlQWtCRSxxRUFBQyxrREFBRDtBQUFBLHFDQUNFLHFFQUFDLGtEQUFEO0FBQVMsb0JBQUksRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBbUNILENBeENEOztBQTBDZUQsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBDb2xsYXBzZSxcbiAgTmF2YmFyLFxuICBOYXZiYXJUb2dnbGVyLFxuICBOYXZiYXJCcmFuZCxcbiAgTmF2LFxuICBOYXZJdGVtLFxuICBOYXZMaW5rLFxuICBVbmNvbnRyb2xsZWREcm9wZG93bixcbiAgRHJvcGRvd25Ub2dnbGUsXG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25JdGVtLFxuICBOYXZiYXJUZXh0LFxuICBDb250YWluZXJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5cblxuY29uc3QgTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOYXZiYXIgY29sb3I9XCJwcmltYXJ5XCIgZGFyayBleHBhbmQ9XCJtZFwiPlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPkxpbnNUdXI8L05hdmJhckJyYW5kPlxuICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxuICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XG4gICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3NvYnJlXCI+U29icmU8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL2NvbnRhY3RvXCI+Q29udGFjdG88L05hdkxpbms+XG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3Jlc3Vtb1wiPlJlc3VtbzwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvbG9naW5cIj5Mb2dpbjwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XG5cbiAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Menu.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu */ \"./components/Menu.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/clins-MacBook/Documents/GitHub/tvde-online/pages/index.js\";\n\n\n\n\n\nfunction HomePage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"LinsTur - Controle TVDE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Controle de corridas TVDE e Tranfer\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"author\",\n        content: \"LinsTur\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 17\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Jumbotron\"], {\n      fluid: true,\n      className: \"servicos\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n        children: `.servicos{\n    padding-top: 80px;\n    padding-bottom: 80px;\n    background-color: #00f;\n    color: #fff;\n    margin-bottom: 0rem !important;\n    margin-top: 0rem !important;\n}`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 1\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n        className: \"text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"display-4\",\n          children: \"Servi\\xE7os da Empresa\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 25\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Temos a solu\\xE7\\xE3o que a sua empresa precisa\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 25\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 12\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2hCLHNCQUFPO0FBQUEsNEJBQ0sscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBTSxZQUFJLEVBQUMsUUFBWDtBQUFvQixlQUFPLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURMLGVBTUsscUVBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5MLGVBT0sscUVBQUMsb0RBQUQ7QUFBVyxXQUFLLE1BQWhCO0FBQWlCLGVBQVMsRUFBQyxVQUEzQjtBQUFBLDhCQUNoQjtBQUFBLGtCQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGdCLGVBU0kscUVBQUMsb0RBQUQ7QUFBVyxpQkFBUyxFQUFDLGFBQXJCO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQXVCRDs7QUFFY0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuXG5pbXBvcnQge0p1bWJvdHJvbiwgQ29udGFpbmVyfSBmcm9tICdyZWFjdHN0cmFwJztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5MaW5zVHVyIC0gQ29udHJvbGUgVFZERTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdDb250cm9sZSBkZSBjb3JyaWRhcyBUVkRFIGUgVHJhbmZlcicgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0nYXV0aG9yJyBjb250ZW50PSdMaW5zVHVyJyAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgICAgICAgIDxKdW1ib3Ryb24gZmx1aWQgY2xhc3NOYW1lPVwic2Vydmljb3NcIj5cbjxzdHlsZT57YC5zZXJ2aWNvc3tcbiAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAwcmVtICFpbXBvcnRhbnQ7XG59YH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+U2VydmnDp29zIGRhIEVtcHJlc2E8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVtb3MgYSBzb2x1w6fDo28gcXVlIGEgc3VhIGVtcHJlc2EgcHJlY2lzYTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9KdW1ib3Ryb24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCI/MjQ5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ })

/******/ });