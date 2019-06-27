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
	"./NotConnected.tsx": "./code/NotConnected.tsx",
	"./StickyElement.tsx": "./code/StickyElement.tsx",
	"./StickyScroll.tsx": "./code/StickyScroll.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/NotConnected.tsx":
/*!*******************************!*\
  !*** ./code/NotConnected.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90Q29ubmVjdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Ob3RDb25uZWN0ZWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRTlCLE1BQU0sS0FBSyxHQUF3QjtJQUMvQixNQUFNLEVBQUUsTUFBTTtJQUNkLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLFFBQVE7SUFDcEIsY0FBYyxFQUFFLFFBQVE7SUFDeEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsVUFBVSxFQUFFLHlCQUF5QjtJQUNyQyxRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFBO0FBRUQsU0FBUyxTQUFTLENBQUMsS0FBSzs7SUFDcEIsTUFBTSxFQUFFLE1BQU0sR0FBRyxvQkFBb0IsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUMvQyxPQUFPLDZCQUFLLEtBQUssRUFBRSxLQUFLO1FBQUcsTUFBTTtrQkFBUyxDQUFBO0NBQzdDO0FBRVksUUFBQSxZQUFZLEdBQUcsU0FBUyxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const style = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#8855FF",
    background: "rgba(136, 85, 255, 0.1)",
    overflow: "hidden",
};
function Component(props) {
    window["__checkBudget__"]();
    const { prompt = "Connect to content" } = props;
    return React.createElement("div", { style: style },
        prompt,
        " \u2192");
}
exports.NotConnected = Component;
exports.__info__ = [];


/***/ }),

/***/ "./code/StickyElement.tsx":
/*!********************************!*\
  !*** ./code/StickyElement.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RpY2t5RWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU3RpY2t5RWxlbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXVEO0FBQ3ZELGlEQUE2QztBQUM3QyxpREFBOEM7QUFFOUMsU0FBZ0IsYUFBYSxDQUFDLEtBQUs7O0lBQy9CLE1BQU0sRUFBRSxRQUFRLEtBQW1CLEtBQUssRUFBdEIsdUNBQXNCLENBQUE7SUFDeEMsTUFBTSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLDRCQUFhLENBQUMsQ0FBQTtJQUMxRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFckQsTUFBTSxrQkFBa0IsR0FBRyxrQkFBUyxDQUNoQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUM1QixDQUFBO0lBRUQsTUFBTSxDQUFDLEdBQUcscUJBQVksQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtJQUUxRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0QyxPQUFPLG9CQUFDLDJCQUFZLElBQUMsTUFBTSxFQUFDLDZCQUE2QixHQUFHLENBQUE7S0FDL0Q7U0FBTTtRQUNILE9BQU8sQ0FDSCxvQkFBQyxjQUFLLG9CQUNFLFNBQVMsSUFDYixVQUFVLEVBQUUsSUFBSSxFQUNoQixDQUFDLEVBQUUsQ0FBQyxFQUNKLEtBQUssRUFBQyxNQUFNLEVBQ1osTUFBTSxFQUFDLE1BQU0sS0FFWixRQUFRLENBQ0wsQ0FDWCxDQUFBO0tBQ0o7Q0FDSjtBQTNCRCxzQ0EyQkMifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const NotConnected_1 = __webpack_require__(/*! ./NotConnected */ "./code/NotConnected.tsx");
const StickyScroll_1 = __webpack_require__(/*! ./StickyScroll */ "./code/StickyScroll.tsx");
function StickyElement(props) {
    window["__checkBudget__"]();
    const { children } = props, restProps = __rest(props, ["children"]);
    const { contentOffsetY, getStickyRange } = React.useContext(StickyScroll_1.ScrollContext);
    const { yStick, yRelease } = getStickyRange(props.id);
    const convertScrollRange = framer_1.transform([0, -yStick, -yRelease], [0, 0, yRelease - yStick]);
    const y = framer_1.useTransform(contentOffsetY, convertScrollRange);
    if (React.Children.count(children) === 0) {
        return React.createElement(NotConnected_1.NotConnected, { prompt: "Connect to something sticky" });
    }
    else {
        return (React.createElement(framer_1.Frame, Object.assign({}, restProps, { background: null, y: y, width: "100%", height: "100%" }), children));
    }
}
exports.StickyElement = StickyElement;
exports.__info__ = [{ name: "StickyElement", children: true, type: "component" }];


/***/ }),

/***/ "./code/StickyScroll.tsx":
/*!*******************************!*\
  !*** ./code/StickyScroll.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RpY2t5U2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TdGlja3lTY3JvbGwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQU9lO0FBQ2YsaURBQTZDO0FBT2hDLFFBQUEsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQWdCO0lBQzVELGNBQWMsRUFBRSxvQkFBVyxDQUFDLENBQUMsQ0FBQztJQUM5QixjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ3JELENBQUMsQ0FBQTtBQUVGLFNBQWdCLFlBQVksQ0FBQyxLQUFLOztJQUM5QixNQUFNLEVBQ0YsTUFBTSxFQUNOLFFBQVEsRUFDUixjQUFjLEdBQUcsdUJBQWMsQ0FBQyxDQUFDLENBQUMsS0FFbEMsS0FBSyxFQURMLG1FQUNLLENBQUE7SUFFVCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0QyxPQUFPLG9CQUFDLDJCQUFZLElBQUMsTUFBTSxFQUFDLCtCQUErQixHQUFHLENBQUE7S0FDakU7U0FBTTtRQUNILE1BQU0sb0JBQW9CLEdBQUcsd0JBQXdCLENBQ2pELFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFDWCxNQUFNLENBQ1QsQ0FBQTtRQUVELE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFOztZQUN4QixNQUFNLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO1lBQ2xFLElBQUksTUFBTSxFQUFFO2dCQUNSLE9BQU8sTUFBTSxDQUFBO2FBQ2hCO2lCQUFNO2dCQUNILE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQTthQUNwQztTQUNKLENBQUE7UUFFRCxPQUFPLENBQ0gsb0JBQUMscUJBQWEsQ0FBQyxRQUFRLElBQ25CLEtBQUssRUFBRTtnQkFDSCxjQUFjLEVBQUUsY0FBYztnQkFDOUIsY0FBYyxFQUFFLGNBQWM7YUFDakM7WUFFRCxvQkFBQyxlQUFNLG9CQUNDLFNBQVMsSUFDYixjQUFjLEVBQUUsY0FBYyxFQUM5QixLQUFLLEVBQUMsTUFBTSxFQUNaLE1BQU0sRUFBQyxNQUFNLEtBRVosUUFBUSxDQUNKLENBQ1ksQ0FDNUIsQ0FBQTtLQUNKO0NBQ0o7QUEzQ0Qsb0NBMkNDO0FBRUQsWUFBWSxDQUFDLFlBQVksR0FBRztJQUN4QixNQUFNLEVBQUUsQ0FBQztJQUNULFNBQVMsRUFBRSxVQUFVO0lBQ3JCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFlBQVksRUFBRSxJQUFJO0lBQ2xCLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJO0NBQ3ZCLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxZQUFZLEVBQUU7SUFDOUIsTUFBTSxFQUFFO1FBQ0osSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTTtRQUN4QixLQUFLLEVBQUUsUUFBUTtRQUNmLEdBQUcsRUFBRSxDQUFDO0tBQ1Q7Q0FDSixDQUFDLENBQUE7QUFFRixTQUFTLFFBQVEsQ0FBQyxPQUFPOztJQUNyQixNQUFNLEVBQUUsbUJBQW1CLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFBO0lBQzdDLE9BQU8sbUJBQW1CLElBQUksbUJBQW1CLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFBO0NBQzlFO0FBRUQsNkRBQTZEO0FBQzdELFNBQVMsaUJBQWlCLENBQUMsTUFBTTs7SUFDN0IsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDakMsT0FBTyxRQUFRO1NBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0NBQ3pEO0FBRUQsMkJBQTJCO0FBQzNCLFNBQVMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNOztJQUN6QixNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFBO0lBRTdDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQ3pCLG9DQUFvQztRQUNwQyx1RkFBdUY7UUFDdkYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUNiLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQzdELENBQUE7S0FDSjtTQUFNLElBQUksR0FBRyxJQUFJLFNBQVMsRUFBRTtRQUN6QixxQkFBcUI7UUFDckIsT0FBTyxHQUFHLENBQUE7S0FDYjtTQUFNO1FBQ0gsd0JBQXdCO1FBQ3hCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQTtLQUMvQztDQUNKO0FBRUQsNkJBQTZCO0FBQzdCLFNBQVMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLE1BQU07O0lBQzVDLE1BQU0sb0JBQW9CLEdBQUcsRUFBRSxDQUFBO0lBQy9CLE1BQU0sWUFBWSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRTlDLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDekIsSUFBSSxDQUFDLENBQUE7UUFDTCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUMxQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLE1BQU07Z0JBQzlDLFFBQVEsRUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7b0JBQ2pDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTtvQkFDNUIsTUFBTTthQUNiLENBQUMsQ0FBQTtTQUNMO1FBRUQsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBQ3RCLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsTUFBTTtZQUM5QyxRQUFRLEVBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTTtTQUNsRSxDQUFDLENBQUE7S0FDTDtJQUVELE9BQU8sb0JBQW9CLENBQUE7Q0FDOUIifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const NotConnected_1 = __webpack_require__(/*! ./NotConnected */ "./code/NotConnected.tsx");
exports.ScrollContext = React.createContext({
    contentOffsetY: framer_1.motionValue(0),
    getStickyRange: () => ({ yStick: 0, yRelease: 0 }),
});
function StickyScroll(props) {
    window["__checkBudget__"]();
    const { offset, children, contentOffsetY = framer_1.useMotionValue(0) } = props, restProps = __rest(props, ["offset", "children", "contentOffsetY"]);
    if (React.Children.count(children) === 0) {
        return React.createElement(NotConnected_1.NotConnected, { prompt: "Connect to scrollable content" });
    }
    else {
        const stickyPositionLookup = setStickyPositionsLookup(children[0], offset);
        const getStickyRange = id => {
            window["__checkBudget__"]();
            const lookup = stickyPositionLookup.find(found => found.id === id);
            if (lookup) {
                return lookup;
            }
            else {
                return { yStick: 0, yRelease: 0 };
            }
        };
        return (React.createElement(exports.ScrollContext.Provider, { value: {
                contentOffsetY: contentOffsetY,
                getStickyRange: getStickyRange,
            } },
            React.createElement(framer_1.Scroll, Object.assign({}, restProps, { contentOffsetY: contentOffsetY, width: "100%", height: "100%" }), children)));
    }
}
exports.StickyScroll = StickyScroll;
StickyScroll.defaultProps = {
    offset: 0,
    direction: "vertical",
    overflow: "hidden",
    wheelEnabled: true,
    onScroll: () => null,
};
framer_1.addPropertyControls(StickyScroll, {
    offset: {
        type: framer_1.ControlType.Number,
        title: "Offset",
        min: 0,
    },
});
function isSticky(element) {
    window["__checkBudget__"]();
    const { componentIdentifier } = element.props;
    return componentIdentifier && componentIdentifier.includes("StickyElement");
}
// Return an array of the StickyElements sorted top to bottom
function getStickyElements(parent) {
    window["__checkBudget__"]();
    const { children } = parent.props;
    return children
        .filter(element => isSticky(element))
        .sort((a, b) => getY(a, parent) - getY(b, parent));
}
// Get y position in parent
function getY(element, parent) {
    window["__checkBudget__"]();
    const { top, bottom, height } = element.props;
    if (typeof top === "string") {
        // Not constrained to top or bottom.
        // In this case, top is distance to centre of element as a percentage of parent height.
        return Math.round((parseFloat(top) / 100) * parent.props.height - height / 2);
    }
    else if (top != undefined) {
        // Constrained to top
        return top;
    }
    else {
        // Constrained to bottom
        return parent.props.height - bottom - height;
    }
}
// Calculate sticky positions
function setStickyPositionsLookup(parent, offset) {
    window["__checkBudget__"]();
    const stickyPositionLookup = [];
    const stickyFrames = getStickyElements(parent);
    if (stickyFrames.length > 0) {
        let i;
        for (i = 0; i < stickyFrames.length - 1; i++) {
            window["__checkBudget__"]();
            stickyPositionLookup.push({
                id: stickyFrames[i].props.id,
                yStick: getY(stickyFrames[i], parent) - offset,
                yRelease: getY(stickyFrames[i + 1], parent) -
                    stickyFrames[i].props.height -
                    offset,
            });
        }
        stickyPositionLookup.push({
            id: stickyFrames[i].props.id,
            yStick: getY(stickyFrames[i], parent) - offset,
            yRelease: parent.props.height - stickyFrames[i].props.height - offset,
        });
    }
    return stickyPositionLookup;
}
exports.__info__ = [{ name: "StickyScroll", children: true, type: "component" }];


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
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.12","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-extractor":"^7.1.5","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.19.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    package.__framer__.packageJson.design = designJson
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

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16"},"peerDependencies":{"framer":"^0.10.5 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"5f4411f5-e210-4355-ad08-d04613afe3a1","displayName":"Sticky Headers"},"author":"Giles Perry","dependencies":{"framer-motion":"^0.15.1"},"name":"@framer/perrysmotors.sticky-headers","version":"2.2.0"};

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