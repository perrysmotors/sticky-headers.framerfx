(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Examples.tsx": "./code/Examples.tsx",
	"./NotConnected.tsx": "./code/NotConnected.tsx",
	"./RegisterContext.tsx": "./code/RegisterContext.tsx",
	"./StickyElement.tsx": "./code/StickyElement.tsx",
	"./StickyScroll.tsx": "./code/StickyScroll.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ toggle: true, scale: framer_1.Animatable(1), opacity: framer_1.Animatable(1), rotation: framer_1.Animatable(0), rotationY: framer_1.Animatable(0) });\nexports.Scale = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.Rotate = props => {\n    window[\"__checkBudget__\"]();\n    data.rotation.set(props.rotation);\n    return {\n        rotation: data.rotation,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {\n                tension: 250,\n                friction: 20,\n            });\n        },\n    };\n};\nexports.Fade = props => {\n    window[\"__checkBudget__\"]();\n    data.opacity.set(props.opacity);\n    return {\n        opacity: data.opacity,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.linear(data.opacity, 0, 0.2);\n        },\n    };\n};\nexports.FlipOutput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        rotationY: data.rotationY,\n    };\n};\nexports.FlipInput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onTap() {\n            window[\"__checkBudget__\"]();\n            const toggle = data.toggle;\n            framer_1.animate.spring({ rotationY: data.rotationY }, {\n                rotationY: toggle ? 360 : 0,\n            }, { tension: 200, friction: 20 });\n            data.toggle = !toggle;\n        },\n    };\n};\nexports.__info__ = [{ name: \"Scale\", type: \"override\" }, { name: \"Rotate\", type: \"override\" }, { name: \"Fade\", type: \"override\" }, { name: \"FlipOutput\", type: \"override\" }, { name: \"FlipInput\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNEJBQTRCLG9KQUFvSjtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQSxhQUFhLEdBQUcsNkJBQTZCO0FBQzdDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDLEdBQUcsbUNBQW1DLEdBQUcsaUNBQWlDLEdBQUcsdUNBQXVDLEdBQUcsc0NBQXNDIiwiZmlsZSI6Ii4vY29kZS9FeGFtcGxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgdG9nZ2xlOiB0cnVlLCBzY2FsZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgb3BhY2l0eTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgcm90YXRpb246IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksIHJvdGF0aW9uWTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSB9KTtcbmV4cG9ydHMuU2NhbGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGEuc2NhbGUsXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBkYXRhLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5zY2FsZSwgMSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlJvdGF0ZSA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBkYXRhLnJvdGF0aW9uLnNldChwcm9wcy5yb3RhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb24sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnJvdGF0aW9uLCBkYXRhLnJvdGF0aW9uLmdldCgpICsgOTAsIHtcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb246IDIwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZhZGUgPSBwcm9wcyA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgZGF0YS5vcGFjaXR5LnNldChwcm9wcy5vcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcihkYXRhLm9wYWNpdHksIDAsIDAuMik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZsaXBPdXRwdXQgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSxcbiAgICB9O1xufTtcbmV4cG9ydHMuRmxpcElucHV0ID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBkYXRhLnRvZ2dsZTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKHsgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSB9LCB7XG4gICAgICAgICAgICAgICAgcm90YXRpb25ZOiB0b2dnbGUgPyAzNjAgOiAwLFxuICAgICAgICAgICAgfSwgeyB0ZW5zaW9uOiAyMDAsIGZyaWN0aW9uOiAyMCB9KTtcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlID0gIXRvZ2dsZTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlNjYWxlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiUm90YXRlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiRmFkZVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkZsaXBPdXRwdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJGbGlwSW5wdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Examples.tsx\n");

/***/ }),

/***/ "./code/NotConnected.tsx":
/*!*******************************!*\
  !*** ./code/NotConnected.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst style = {\n    height: \"100%\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    textAlign: \"center\",\n    color: \"#8855FF\",\n    background: \"rgba(136, 85, 255, 0.1)\",\n    overflow: \"hidden\"\n};\nfunction Component(props) {\n    window[\"__checkBudget__\"]();\n    const { prompt = \"Connect to content\" } = props;\n    return React.createElement(\"div\", { style: style },\n        prompt,\n        \" \\u2192\");\n}\nexports.NotConnected = Component;\nexports.__info__ = [];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL05vdENvbm5lY3RlZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0NBQWdDO0FBQzNDLHVDQUF1QyxlQUFlO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb2RlL05vdENvbm5lY3RlZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3Qgc3R5bGUgPSB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBjb2xvcjogXCIjODg1NUZGXCIsXG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDEzNiwgODUsIDI1NSwgMC4xKVwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG59O1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzKSB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgY29uc3QgeyBwcm9tcHQgPSBcIkNvbm5lY3QgdG8gY29udGVudFwiIH0gPSBwcm9wcztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZSB9LFxuICAgICAgICBwcm9tcHQsXG4gICAgICAgIFwiIFxcdTIxOTJcIik7XG59XG5leHBvcnRzLk5vdENvbm5lY3RlZCA9IENvbXBvbmVudDtcbmV4cG9ydHMuX19pbmZvX18gPSBbXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/NotConnected.tsx\n");

/***/ }),

/***/ "./code/RegisterContext.tsx":
/*!**********************************!*\
  !*** ./code/RegisterContext.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nexports.RegisterContext = React.createContext({\n    registerLayer: null,\n    unregisterLayer: null\n});\nexports.__info__ = [];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1JlZ2lzdGVyQ29udGV4dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCIsImZpbGUiOiIuL2NvZGUvUmVnaXN0ZXJDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5leHBvcnRzLlJlZ2lzdGVyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICAgIHJlZ2lzdGVyTGF5ZXI6IG51bGwsXG4gICAgdW5yZWdpc3RlckxheWVyOiBudWxsXG59KTtcbmV4cG9ydHMuX19pbmZvX18gPSBbXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/RegisterContext.tsx\n");

/***/ }),

/***/ "./code/StickyElement.tsx":
/*!********************************!*\
  !*** ./code/StickyElement.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\n            t[p[i]] = s[p[i]];\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst NotConnected_1 = __webpack_require__(/*! ./NotConnected */ \"./code/NotConnected.tsx\");\nconst RegisterContext_1 = __webpack_require__(/*! ./RegisterContext */ \"./code/RegisterContext.tsx\");\nclass StickyElementRegistrar extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.layerConfig = {\n            top: framer_1.Animatable(0),\n            id: null,\n            props: null\n        };\n    }\n    componentDidMount() {\n        window[\"__checkBudget__\"]();\n        const { registerLayer } = this.props;\n        if (registerLayer) {\n            this.layerConfig.props = this.props;\n            this.layerConfig.id = this.props.id;\n            registerLayer(this.layerConfig);\n        }\n    }\n    componentWillUnmount() {\n        window[\"__checkBudget__\"]();\n        const { unregisterLayer } = this.props;\n        if (unregisterLayer) {\n            unregisterLayer(this.layerConfig);\n        }\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        return (React.createElement(framer_1.Frame, Object.assign({}, this.props, { background: null, top: this.layerConfig.top }), this.props.children));\n    }\n}\nclass StickyElement extends React.Component {\n    render() {\n        window[\"__checkBudget__\"]();\n        const _a = this.props, { children } = _a, restProps = __rest(_a, [\"children\"]);\n        if (React.Children.count(children) === 0) {\n            return React.createElement(NotConnected_1.NotConnected, { prompt: \"Connect to something sticky\" });\n        }\n        else {\n            return (React.createElement(RegisterContext_1.RegisterContext.Consumer, null, ({ registerLayer, unregisterLayer }) => {\n                window[\"__checkBudget__\"]();\n                return (React.createElement(StickyElementRegistrar, Object.assign({}, restProps, { registerLayer: registerLayer, unregisterLayer: unregisterLayer }), children));\n            }));\n        }\n    }\n}\nexports.StickyElement = StickyElement;\nexports.__info__ = [{ name: \"StickyElement\", children: true, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1N0aWNreUVsZW1lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsZUFBZSw4Q0FBOEM7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0EscUVBQXFFLHdDQUF3QztBQUM3RztBQUNBO0FBQ0EsNEZBQTRGLGlDQUFpQztBQUM3SDtBQUNBLG9GQUFvRixjQUFjLGlFQUFpRTtBQUNuSyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQTJEIiwiZmlsZSI6Ii4vY29kZS9TdGlja3lFbGVtZW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICByZXR1cm4gdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IE5vdENvbm5lY3RlZF8xID0gcmVxdWlyZShcIi4vTm90Q29ubmVjdGVkXCIpO1xuY29uc3QgUmVnaXN0ZXJDb250ZXh0XzEgPSByZXF1aXJlKFwiLi9SZWdpc3RlckNvbnRleHRcIik7XG5jbGFzcyBTdGlja3lFbGVtZW50UmVnaXN0cmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5sYXllckNvbmZpZyA9IHtcbiAgICAgICAgICAgIHRvcDogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSxcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgcHJvcHM6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCB7IHJlZ2lzdGVyTGF5ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChyZWdpc3RlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyQ29uZmlnLnByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHRoaXMubGF5ZXJDb25maWcuaWQgPSB0aGlzLnByb3BzLmlkO1xuICAgICAgICAgICAgcmVnaXN0ZXJMYXllcih0aGlzLmxheWVyQ29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGNvbnN0IHsgdW5yZWdpc3RlckxheWVyIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBpZiAodW5yZWdpc3RlckxheWVyKSB7XG4gICAgICAgICAgICB1bnJlZ2lzdGVyTGF5ZXIodGhpcy5sYXllckNvbmZpZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KGZyYW1lcl8xLkZyYW1lLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7IGJhY2tncm91bmQ6IG51bGwsIHRvcDogdGhpcy5sYXllckNvbmZpZy50b3AgfSksIHRoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9XG59XG5jbGFzcyBTdGlja3lFbGVtZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCBfYSA9IHRoaXMucHJvcHMsIHsgY2hpbGRyZW4gfSA9IF9hLCByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90Q29ubmVjdGVkXzEuTm90Q29ubmVjdGVkLCB7IHByb21wdDogXCJDb25uZWN0IHRvIHNvbWV0aGluZyBzdGlja3lcIiB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWdpc3RlckNvbnRleHRfMS5SZWdpc3RlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsICh7IHJlZ2lzdGVyTGF5ZXIsIHVucmVnaXN0ZXJMYXllciB9KSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFN0aWNreUVsZW1lbnRSZWdpc3RyYXIsIE9iamVjdC5hc3NpZ24oe30sIHJlc3RQcm9wcywgeyByZWdpc3RlckxheWVyOiByZWdpc3RlckxheWVyLCB1bnJlZ2lzdGVyTGF5ZXI6IHVucmVnaXN0ZXJMYXllciB9KSwgY2hpbGRyZW4pKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuU3RpY2t5RWxlbWVudCA9IFN0aWNreUVsZW1lbnQ7XG5leHBvcnRzLl9faW5mb19fID0gW3sgbmFtZTogXCJTdGlja3lFbGVtZW50XCIsIGNoaWxkcmVuOiB0cnVlLCB0eXBlOiBcImNvbXBvbmVudFwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/StickyElement.tsx\n");

/***/ }),

/***/ "./code/StickyScroll.tsx":
/*!*******************************!*\
  !*** ./code/StickyScroll.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst NotConnected_1 = __webpack_require__(/*! ./NotConnected */ \"./code/NotConnected.tsx\");\nconst RegisterContext_1 = __webpack_require__(/*! ./RegisterContext */ \"./code/RegisterContext.tsx\");\nclass StickyScroll extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.layerConfigs = [];\n        this.stickyPositionLookup = [];\n        // Calculate and store sticky positions\n        this.setStickyPositionsLookup = () => {\n            window[\"__checkBudget__\"]();\n            const parent = this.props.children[0];\n            const stickyFrames = StickyScroll.getStickyElements(parent);\n            const stickyPositionLookup = [];\n            if (stickyFrames.length > 0) {\n                let i;\n                for (i = 0; i < stickyFrames.length - 1; i++) {\n                    window[\"__checkBudget__\"]();\n                    stickyPositionLookup.push({\n                        id: stickyFrames[i].props.id,\n                        yStick: StickyScroll.getY(stickyFrames[i], parent),\n                        yRelease: StickyScroll.getY(stickyFrames[i + 1], parent) -\n                            stickyFrames[i].props.height\n                    });\n                }\n                stickyPositionLookup.push({\n                    id: stickyFrames[i].props.id,\n                    yStick: StickyScroll.getY(stickyFrames[i], parent),\n                    yRelease: Number.POSITIVE_INFINITY\n                });\n            }\n            return stickyPositionLookup;\n        };\n        this.handleScroll = event => {\n            window[\"__checkBudget__\"]();\n            const offsetScrollY = this.props.offset - event.y;\n            this.stickyPositionLookup.forEach(({ id, yStick, yRelease }) => {\n                window[\"__checkBudget__\"]();\n                const layerConfig = this.layerConfigs.find(found => found.id === id);\n                if (offsetScrollY >= yRelease) {\n                    layerConfig.top.set(yRelease - yStick);\n                }\n                else if (offsetScrollY >= yStick) {\n                    layerConfig.top.set(offsetScrollY - yStick);\n                }\n                else {\n                    layerConfig.top.set(0);\n                }\n            });\n            // Run any onMove function passed from props:\n            const { onMove } = this.props;\n            onMove && onMove(event);\n        };\n        this.registerLayer = layerConfigs => {\n            window[\"__checkBudget__\"]();\n            this.layerConfigs.push(layerConfigs);\n        };\n        this.unregisterLayer = layerConfigs => {\n            window[\"__checkBudget__\"]();\n            this.layerConfigs = this.layerConfigs.filter(c => c !== layerConfigs);\n        };\n    }\n    static isSticky(element) {\n        window[\"__checkBudget__\"]();\n        const { componentIdentifier } = element.props;\n        return componentIdentifier && componentIdentifier.includes(\"StickyElement\");\n    }\n    // Return an array of the StickyElements sorted top to bottom\n    static getStickyElements(parent) {\n        window[\"__checkBudget__\"]();\n        const { children } = parent.props;\n        return children\n            .filter(element => StickyScroll.isSticky(element))\n            .sort((a, b) => StickyScroll.getY(a, parent) - StickyScroll.getY(b, parent));\n    }\n    // Get y position in parent\n    static getY(element, parent) {\n        window[\"__checkBudget__\"]();\n        let { top, bottom, centerY, height } = element.props;\n        if (top) {\n            return top;\n        }\n        else if (bottom) {\n            return parent.props.height - bottom - height;\n        }\n        else {\n            return Math.round((parseFloat(centerY) / 100) * parent.props.height - height / 2);\n        }\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        const { children } = this.props;\n        if (React.Children.count(children) === 0) {\n            return React.createElement(NotConnected_1.NotConnected, { prompt: \"Connect to scrollable content\" });\n        }\n        else {\n            this.stickyPositionLookup = this.setStickyPositionsLookup();\n            return (React.createElement(RegisterContext_1.RegisterContext.Provider, { value: {\n                    registerLayer: this.registerLayer,\n                    unregisterLayer: this.unregisterLayer\n                } },\n                React.createElement(framer_1.Scroll, Object.assign({}, this.props, { onMove: this.handleScroll }), children)));\n        }\n    }\n}\nStickyScroll.defaultProps = {\n    offset: 0,\n    direction: \"vertical\",\n    overflow: \"hidden\",\n    onMove: () => null\n};\nStickyScroll.propertyControls = {\n    offset: {\n        type: framer_1.ControlType.Number,\n        title: \"Offset\",\n        min: 0,\n        max: 500\n    }\n};\nexports.StickyScroll = StickyScroll;\nexports.__info__ = [{ name: \"StickyScroll\", children: true, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1N0aWNreVNjcm9sbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsdUJBQXVCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLCtCQUErQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQSxxRUFBcUUsMENBQTBDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0EsaUJBQWlCLEVBQUU7QUFDbkIscUVBQXFFLGVBQWUsNEJBQTRCO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwREFBMEQiLCJmaWxlIjoiLi9jb2RlL1N0aWNreVNjcm9sbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgZnJhbWVyXzEgPSByZXF1aXJlKFwiZnJhbWVyXCIpO1xuY29uc3QgTm90Q29ubmVjdGVkXzEgPSByZXF1aXJlKFwiLi9Ob3RDb25uZWN0ZWRcIik7XG5jb25zdCBSZWdpc3RlckNvbnRleHRfMSA9IHJlcXVpcmUoXCIuL1JlZ2lzdGVyQ29udGV4dFwiKTtcbmNsYXNzIFN0aWNreVNjcm9sbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMubGF5ZXJDb25maWdzID0gW107XG4gICAgICAgIHRoaXMuc3RpY2t5UG9zaXRpb25Mb29rdXAgPSBbXTtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGFuZCBzdG9yZSBzdGlja3kgcG9zaXRpb25zXG4gICAgICAgIHRoaXMuc2V0U3RpY2t5UG9zaXRpb25zTG9va3VwID0gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnByb3BzLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgY29uc3Qgc3RpY2t5RnJhbWVzID0gU3RpY2t5U2Nyb2xsLmdldFN0aWNreUVsZW1lbnRzKHBhcmVudCk7XG4gICAgICAgICAgICBjb25zdCBzdGlja3lQb3NpdGlvbkxvb2t1cCA9IFtdO1xuICAgICAgICAgICAgaWYgKHN0aWNreUZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0aWNreUZyYW1lcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNreVBvc2l0aW9uTG9va3VwLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHN0aWNreUZyYW1lc1tpXS5wcm9wcy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHlTdGljazogU3RpY2t5U2Nyb2xsLmdldFkoc3RpY2t5RnJhbWVzW2ldLCBwYXJlbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgeVJlbGVhc2U6IFN0aWNreVNjcm9sbC5nZXRZKHN0aWNreUZyYW1lc1tpICsgMV0sIHBhcmVudCkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0aWNreUZyYW1lc1tpXS5wcm9wcy5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0aWNreVBvc2l0aW9uTG9va3VwLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZDogc3RpY2t5RnJhbWVzW2ldLnByb3BzLmlkLFxuICAgICAgICAgICAgICAgICAgICB5U3RpY2s6IFN0aWNreVNjcm9sbC5nZXRZKHN0aWNreUZyYW1lc1tpXSwgcGFyZW50KSxcbiAgICAgICAgICAgICAgICAgICAgeVJlbGVhc2U6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0aWNreVBvc2l0aW9uTG9va3VwO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0U2Nyb2xsWSA9IHRoaXMucHJvcHMub2Zmc2V0IC0gZXZlbnQueTtcbiAgICAgICAgICAgIHRoaXMuc3RpY2t5UG9zaXRpb25Mb29rdXAuZm9yRWFjaCgoeyBpZCwgeVN0aWNrLCB5UmVsZWFzZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXJDb25maWcgPSB0aGlzLmxheWVyQ29uZmlncy5maW5kKGZvdW5kID0+IGZvdW5kLmlkID09PSBpZCk7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldFNjcm9sbFkgPj0geVJlbGVhc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJDb25maWcudG9wLnNldCh5UmVsZWFzZSAtIHlTdGljayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9mZnNldFNjcm9sbFkgPj0geVN0aWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyQ29uZmlnLnRvcC5zZXQob2Zmc2V0U2Nyb2xsWSAtIHlTdGljayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYXllckNvbmZpZy50b3Auc2V0KDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gUnVuIGFueSBvbk1vdmUgZnVuY3Rpb24gcGFzc2VkIGZyb20gcHJvcHM6XG4gICAgICAgICAgICBjb25zdCB7IG9uTW92ZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIG9uTW92ZSAmJiBvbk1vdmUoZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTGF5ZXIgPSBsYXllckNvbmZpZ3MgPT4ge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICB0aGlzLmxheWVyQ29uZmlncy5wdXNoKGxheWVyQ29uZmlncyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudW5yZWdpc3RlckxheWVyID0gbGF5ZXJDb25maWdzID0+IHtcbiAgICAgICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICAgICAgdGhpcy5sYXllckNvbmZpZ3MgPSB0aGlzLmxheWVyQ29uZmlncy5maWx0ZXIoYyA9PiBjICE9PSBsYXllckNvbmZpZ3MpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgaXNTdGlja3koZWxlbWVudCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgY29uc3QgeyBjb21wb25lbnRJZGVudGlmaWVyIH0gPSBlbGVtZW50LnByb3BzO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50SWRlbnRpZmllciAmJiBjb21wb25lbnRJZGVudGlmaWVyLmluY2x1ZGVzKFwiU3RpY2t5RWxlbWVudFwiKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGFuIGFycmF5IG9mIHRoZSBTdGlja3lFbGVtZW50cyBzb3J0ZWQgdG9wIHRvIGJvdHRvbVxuICAgIHN0YXRpYyBnZXRTdGlja3lFbGVtZW50cyhwYXJlbnQpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHBhcmVudC5wcm9wcztcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgICAgICAgICAuZmlsdGVyKGVsZW1lbnQgPT4gU3RpY2t5U2Nyb2xsLmlzU3RpY2t5KGVsZW1lbnQpKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IFN0aWNreVNjcm9sbC5nZXRZKGEsIHBhcmVudCkgLSBTdGlja3lTY3JvbGwuZ2V0WShiLCBwYXJlbnQpKTtcbiAgICB9XG4gICAgLy8gR2V0IHkgcG9zaXRpb24gaW4gcGFyZW50XG4gICAgc3RhdGljIGdldFkoZWxlbWVudCwgcGFyZW50KSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBsZXQgeyB0b3AsIGJvdHRvbSwgY2VudGVyWSwgaGVpZ2h0IH0gPSBlbGVtZW50LnByb3BzO1xuICAgICAgICBpZiAodG9wKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9wO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJvdHRvbSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5wcm9wcy5oZWlnaHQgLSBib3R0b20gLSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgocGFyc2VGbG9hdChjZW50ZXJZKSAvIDEwMCkgKiBwYXJlbnQucHJvcHMuaGVpZ2h0IC0gaGVpZ2h0IC8gMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTm90Q29ubmVjdGVkXzEuTm90Q29ubmVjdGVkLCB7IHByb21wdDogXCJDb25uZWN0IHRvIHNjcm9sbGFibGUgY29udGVudFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGlja3lQb3NpdGlvbkxvb2t1cCA9IHRoaXMuc2V0U3RpY2t5UG9zaXRpb25zTG9va3VwKCk7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVnaXN0ZXJDb250ZXh0XzEuUmVnaXN0ZXJDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyTGF5ZXI6IHRoaXMucmVnaXN0ZXJMYXllcixcbiAgICAgICAgICAgICAgICAgICAgdW5yZWdpc3RlckxheWVyOiB0aGlzLnVucmVnaXN0ZXJMYXllclxuICAgICAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGZyYW1lcl8xLlNjcm9sbCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBvbk1vdmU6IHRoaXMuaGFuZGxlU2Nyb2xsIH0pLCBjaGlsZHJlbikpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblN0aWNreVNjcm9sbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb2Zmc2V0OiAwLFxuICAgIGRpcmVjdGlvbjogXCJ2ZXJ0aWNhbFwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgIG9uTW92ZTogKCkgPT4gbnVsbFxufTtcblN0aWNreVNjcm9sbC5wcm9wZXJ0eUNvbnRyb2xzID0ge1xuICAgIG9mZnNldDoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsXG4gICAgICAgIHRpdGxlOiBcIk9mZnNldFwiLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogNTAwXG4gICAgfVxufTtcbmV4cG9ydHMuU3RpY2t5U2Nyb2xsID0gU3RpY2t5U2Nyb2xsO1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiU3RpY2t5U2Nyb2xsXCIsIGNoaWxkcmVuOiB0cnVlLCB0eXBlOiBcImNvbXBvbmVudFwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/StickyScroll.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.10.10","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"^7","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^9.6.0","@types/react":"^16","@types/react-dom":"^16","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-junit":"^5.2.0","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"~16.4","react-dev-utils":"^5.0.1","react-dom":"~16.4","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3","react-dom":"^16.3"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16"},"peerDependencies":{"framer":"^0.10.5","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"5f4411f5-e210-4355-ad08-d04613afe3a1","displayName":"Sticky Headers"},"author":"Giles Perry","dependencies":{},"name":"@framer/perrysmotors.sticky-headers","version":"1.17.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});