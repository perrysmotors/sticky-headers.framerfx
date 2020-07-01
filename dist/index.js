(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.default"); } catch(e) {} }()), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer-package-loader!@framer/framer.default", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.default"); } catch(e) {} }()), require("react")) : factory(root["Framer"], root["framer-package-loader!@framer/framer.default"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90Q29ubmVjdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Ob3RDb25uZWN0ZWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUU5QixNQUFNLEtBQUssR0FBd0I7SUFDL0IsTUFBTSxFQUFFLE1BQU07SUFDZCxPQUFPLEVBQUUsTUFBTTtJQUNmLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLEtBQUssRUFBRSxTQUFTO0lBQ2hCLFVBQVUsRUFBRSx5QkFBeUI7SUFDckMsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQTtBQUVELFNBQVMsU0FBUyxDQUFDLEtBQUs7O0lBQ3BCLE1BQU0sRUFBRSxNQUFNLEdBQUcsb0JBQW9CLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFDL0MsT0FBTyw2QkFBSyxLQUFLLEVBQUUsS0FBSztRQUFHLE1BQU07a0JBQVMsQ0FBQTtDQUM3QztBQUVZLFFBQUEsWUFBWSxHQUFHLFNBQVMsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RpY2t5RWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU3RpY2t5RWxlbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXVEO0FBQ3ZELGlEQUE2QztBQUM3QyxpREFBOEM7QUFFOUMsU0FBZ0IsYUFBYSxDQUFDLEtBQUs7O0lBQy9CLE1BQU0sRUFBRSxRQUFRLEtBQW1CLEtBQUssRUFBdEIsdUNBQXNCLENBQUE7SUFDeEMsTUFBTSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLDRCQUFhLENBQUMsQ0FBQTtJQUMxRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFckQsTUFBTSxrQkFBa0IsR0FBRyxrQkFBUyxDQUNoQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUM1QixDQUFBO0lBRUQsTUFBTSxDQUFDLEdBQUcscUJBQVksQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtJQUUxRCxNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBRS9HLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RDLE9BQU8sb0JBQUMsMkJBQVksSUFBQyxNQUFNLEVBQUMsNkJBQTZCLEdBQUcsQ0FBQTtLQUMvRDtTQUFNO1FBQ0gsT0FBTyxDQUNILG9CQUFDLGNBQUssb0JBQ0UsU0FBUyxJQUNiLFVBQVUsRUFBRSxJQUFJLEVBQ2hCLENBQUMsRUFBRSxDQUFDLEVBQ0osS0FBSyxFQUFDLE1BQU0sRUFDWixNQUFNLEVBQUMsTUFBTSxLQUVaLGtCQUFrQixDQUNmLENBQ1gsQ0FBQTtLQUNKO0NBQ0o7QUE3QkQsc0NBNkJDIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const NotConnected_1 = __webpack_require__(/*! ./NotConnected */ "./code/NotConnected.tsx");
const StickyScroll_1 = __webpack_require__(/*! ./StickyScroll */ "./code/StickyScroll.tsx");
function StickyElement(props) {
    window["__checkComponentBudget__"]();
    const { children } = props, restProps = __rest(props, ["children"]);
    const { contentOffsetY, getStickyRange } = React.useContext(StickyScroll_1.ScrollContext);
    const { yStick, yRelease } = getStickyRange(props.id);
    const convertScrollRange = framer_1.transform([0, -yStick, -yRelease], [0, 0, yRelease - yStick]);
    const y = framer_1.useTransform(contentOffsetY, convertScrollRange);
    const responsiveChildren = React.Children.map(children, (child) => React.cloneElement(child, { width: "100%" }));
    if (React.Children.count(children) === 0) {
        return React.createElement(NotConnected_1.NotConnected, { prompt: "Connect to something sticky" });
    }
    else {
        return (React.createElement(framer_1.Frame, Object.assign({}, restProps, { background: null, y: y, width: "100%", height: "100%" }), responsiveChildren));
    }
}
exports.StickyElement = StickyElement;
exports.__info__ = [{ "name": "StickyElement", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/StickyScroll.tsx":
/*!*******************************!*\
  !*** ./code/StickyScroll.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RpY2t5U2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TdGlja3lTY3JvbGwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQU9lO0FBQ2YsaURBQTZDO0FBT2hDLFFBQUEsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQWdCO0lBQzVELGNBQWMsRUFBRSxvQkFBVyxDQUFDLENBQUMsQ0FBQztJQUM5QixjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ3JELENBQUMsQ0FBQTtBQUVGLFNBQWdCLFlBQVksQ0FBQyxLQUFLOztJQUM5QixNQUFNLEVBQ0YsTUFBTSxFQUNOLElBQUksRUFDSixVQUFVLEVBQ1YsUUFBUSxFQUNSLGNBQWMsR0FBRyx1QkFBYyxDQUFDLENBQUMsQ0FBQyxLQUVsQyxLQUFLLEVBREwseUZBQ0ssQ0FBQTtJQUVULElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3RDLE9BQU8sb0JBQUMsMkJBQVksSUFBQyxNQUFNLEVBQUMsK0JBQStCLEdBQUcsQ0FBQTtLQUNqRTtTQUFNO1FBQ0gsTUFBTSxvQkFBb0IsR0FBRyx3QkFBd0IsQ0FDakQsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUNYLE1BQU0sQ0FDVCxDQUFBO1FBRUQsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUU7O1lBQ3hCLE1BQU0sTUFBTSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDbEUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsT0FBTyxNQUFNLENBQUE7YUFDaEI7aUJBQU07Z0JBQ0gsT0FBTyxF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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const NotConnected_1 = __webpack_require__(/*! ./NotConnected */ "./code/NotConnected.tsx");
exports.ScrollContext = React.createContext({
    contentOffsetY: framer_1.motionValue(0),
    getStickyRange: () => ({ yStick: 0, yRelease: 0 }),
});
function StickyScroll(props) {
    window["__checkComponentBudget__"]();
    const { offset, fill, background, children, contentOffsetY = framer_1.useMotionValue(0) } = props, restProps = __rest(props, ["offset", "fill", "background", "children", "contentOffsetY"]);
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
            React.createElement(framer_1.Scroll, Object.assign({}, restProps, { background: fill ? background : null, contentOffsetY: contentOffsetY, width: "100%", height: "100%" }), children)));
    }
}
exports.StickyScroll = StickyScroll;
StickyScroll.defaultProps = {
    offset: 0,
    direction: "vertical",
    directionLock: true,
    dragEnabled: true,
    wheelEnabled: true,
    fill: false,
    background: "#fff",
    onScroll: () => null,
};
framer_1.addPropertyControls(StickyScroll, {
    offset: {
        type: framer_1.ControlType.Number,
        title: "Offset",
        min: 0,
    },
    directionLock: {
        type: framer_1.ControlType.Boolean,
        title: "Lock",
        defaultValue: true,
        enabledTitle: "1 Axis",
        disabledTitle: "Off",
    },
    dragEnabled: {
        type: framer_1.ControlType.Boolean,
        title: "Drag scroll",
        defaultValue: true,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
    wheelEnabled: {
        type: framer_1.ControlType.Boolean,
        title: "Wheel scroll",
        defaultValue: true,
        enabledTitle: "On",
        disabledTitle: "Off",
    },
    fill: {
        type: framer_1.ControlType.Boolean,
        title: "Fill",
        defaultValue: false,
        enabledTitle: "Show",
        disabledTitle: "Hide",
    },
    background: {
        type: framer_1.ControlType.Color,
        title: "Fill Color",
        defaultValue: "#fff",
        hidden(props) {
            window["__checkBudget__"]();
            return props.fill === false;
        },
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
exports.__info__ = [{ "name": "StickyScroll", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
if (!window["__checkBudget__"])
    window["__checkBudget__"] = function __checkBudget__() { };
if (!window["__checkComponentBudget__"])
    window["__checkComponentBudget__"] = function __checkComponentBudget__() { };
if (!window["__checkFileBudget__"])
    window["__checkFileBudget__"] = function __checkFileBudget__() { };
window["__checkFileBudget__"]();
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template
designs["@framer/framer.default"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : 141,
            "centerAnchorX" : 0.49886363636363634,
            "centerAnchorY" : 0.58269720101781175,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/SegmentedControl.tsx_SegmentedControl",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "activeBackground" : "#ffffff",
              "activeBorderColor" : "rgba(0, 0, 0, 0)",
              "activeBorderSize" : 1,
              "activeTextColor" : "#0099ff",
              "bottomActiveBorderSize" : 1,
              "bottomLeftBorderRadius" : 8,
              "bottomRightBorderRadius" : 8,
              "defaultSegment" : 1,
              "direction" : "horizontal",
              "disabled" : false,
              "disabledBackground" : "#ebebeb",
              "disabledBorderColor" : "rgba(0, 0, 0, 0)",
              "disabledBorderSize" : 1,
              "disabledTextColor" : "#AAAAAA",
              "divider" : false,
              "dividerColor" : "#ADADAD",
              "font" : false,
              "fontFamily" : "",
              "fontSize" : 12,
              "fontWeight" : 100,
              "gap" : 0,
              "inactiveBackground" : "rgba(0, 0, 0, 0)",
              "inactiveBorderColor" : "rgba(0, 0, 0, 0)",
              "inactiveBorderSize" : 1,
              "inactiveTextColor" : "#BBBBBB",
              "isMixedActiveBorder" : false,
              "isMixedBorderRadius" : false,
              "leftActiveBorderSize" : 1,
              "radius" : 8,
              "rightActiveBorderSize" : 1,
              "segments" : [
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 1"
                },
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 2"
                },
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 3"
                }
              ],
              "segmentTransition" : {
                "damping" : 60,
                "delay" : 0,
                "duration" : 0.29999999999999999,
                "ease" : [
                  0.44,
                  0,
                  0.56000000000000005,
                  1
                ],
                "mass" : 1,
                "stiffness" : 500,
                "type" : "spring"
              },
              "shadow" : true,
              "slide" : true,
              "topActiveBorderSize" : 1,
              "topLeftBorderRadius" : 8,
              "topRightBorderRadius" : 8,
              "trackColor" : "#ebebeb",
              "variant" : "active"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "P93fU2NLp"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 46,
            "heightType" : 0,
            "id" : "lcDzVF4Ph",
            "intrinsicHeight" : 45,
            "intrinsicWidth" : 300,
            "left" : 36,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Gg4vYAeh1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 37,
            "rotation" : 0,
            "top" : null,
            "visible" : true,
            "width" : 367,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : null,
            "centerAnchorX" : 0,
            "centerAnchorY" : 0,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/SegmentedControl.tsx_SegmentedControl",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "activeBackground" : "#ffffff",
              "activeBorderColor" : "rgba(0, 0, 0, 0)",
              "activeBorderSize" : 1,
              "activeTextColor" : "#0099ff",
              "bottomActiveBorderSize" : 1,
              "bottomLeftBorderRadius" : 8,
              "bottomRightBorderRadius" : 8,
              "defaultSegment" : 1,
              "direction" : "horizontal",
              "disabled" : false,
              "disabledBackground" : "#ebebeb",
              "disabledBorderColor" : "rgba(0, 0, 0, 0)",
              "disabledBorderSize" : 1,
              "disabledTextColor" : "#AAAAAA",
              "divider" : false,
              "dividerColor" : "#ADADAD",
              "font" : true,
              "fontFamily" : "georgia",
              "fontSize" : 12,
              "fontWeight" : 100,
              "gap" : 0,
              "inactiveBackground" : "rgba(0, 0, 0, 0)",
              "inactiveBorderColor" : "rgba(0, 0, 0, 0)",
              "inactiveBorderSize" : 1,
              "inactiveTextColor" : "#BBBBBB",
              "isMixedActiveBorder" : false,
              "isMixedBorderRadius" : false,
              "leftActiveBorderSize" : 1,
              "radius" : 8,
              "rightActiveBorderSize" : 1,
              "segments" : [
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 1"
                },
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 2"
                },
                {
                  "enabled" : true,
                  "type" : "string",
                  "value" : "Item 3"
                }
              ],
              "segmentTransition" : {
                "damping" : 60,
                "delay" : 0,
                "duration" : 0.29999999999999999,
                "ease" : [
                  0.44,
                  0,
                  0.56000000000000005,
                  1
                ],
                "mass" : 1,
                "stiffness" : 500,
                "type" : "spring"
              },
              "shadow" : true,
              "slide" : true,
              "topActiveBorderSize" : 1,
              "topLeftBorderRadius" : 8,
              "topRightBorderRadius" : 8,
              "trackColor" : "#ebebeb",
              "variant" : "active"
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "nIIuzs2RG"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 45,
            "heightType" : 0,
            "id" : "wODYnpJi7",
            "intrinsicHeight" : 45,
            "intrinsicWidth" : 300,
            "left" : 71,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Gg4vYAeh1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "rotation" : 0,
            "top" : 294,
            "visible" : true,
            "width" : 300,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : null,
            "centerAnchorX" : 0.26931818181818185,
            "centerAnchorY" : 0.26335877862595419,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Button.tsx_Button",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "alignment" : "center",
              "bottomLeft" : 10,
              "bottomRight" : 10,
              "colorTransition" : {
                "damping" : 60,
                "delay" : 0,
                "duration" : 0.29999999999999999,
                "ease" : [
                  0.44,
                  0,
                  0.56000000000000005,
                  1
                ],
                "mass" : 1,
                "stiffness" : 500,
                "type" : "spring"
              },
              "defaultBackground" : "#0099FF",
              "defaultTextColor" : "#ffffff",
              "disabled" : false,
              "disabledBackground" : "#f3f3f3",
              "disabledTextColor" : "#AAAAAA",
              "font" : true,
              "fontFamily" : "",
              "fontSize" : 14,
              "fontWeight" : 600,
              "hoverBackground" : "#0077FF",
              "hoverTextColor" : "#ffffff",
              "isMixed" : false,
              "padding" : 10,
              "paddingBottom" : 0,
              "paddingLeft" : 0,
              "paddingPerSide" : false,
              "paddingRight" : 0,
              "paddingTop" : 0,
              "pressedBackground" : "#0088FF",
              "pressedTextColor" : "#ffffff",
              "radius" : 10,
              "scaleTransition" : {
                "damping" : 30,
                "delay" : 0,
                "duration" : 0.29999999999999999,
                "mass" : 1,
                "stiffness" : 600,
                "type" : "spring"
              },
              "shadow" : true,
              "text" : "Hello Framer!",
              "topLeft" : 10,
              "topRight" : 10,
              "variant" : "Default",
              "whileHoverScale" : 1.1000000000000001,
              "whileTapScale" : 0.94999999999999996
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "e4jL7E1Pd"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 45,
            "heightType" : 0,
            "id" : "tsHYmdJBD",
            "intrinsicHeight" : 45,
            "intrinsicWidth" : 135,
            "left" : 51,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "Gg4vYAeh1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "rotation" : 0,
            "top" : 81,
            "visible" : true,
            "width" : 135,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "duplicatedFrom" : null,
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "framePreset" : null,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 393,
        "heightType" : 0,
        "id" : "Gg4vYAeh1",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 65,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -67,
        "visible" : true,
        "width" : 440,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "duplicatedFrom" : [
          "Gg4vYAeh1"
        ],
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "framePreset" : null,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 393,
        "heightType" : 0,
        "id" : "fg_XnlFJw",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 534,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -67,
        "visible" : true,
        "width" : 440,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "duplicatedFrom" : null,
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "framePreset" : null,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 237,
        "heightType" : 0,
        "id" : "QMb8z48BW",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 41,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -356,
        "visible" : true,
        "width" : 285,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [

        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "duplicatedFrom" : [
          "QMb8z48BW"
        ],
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "framePreset" : null,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 237,
        "heightType" : 0,
        "id" : "hG4KsEcH0",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : 469,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -198,
        "visible" : true,
        "width" : 285,
        "widthType" : 0
      },
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : null,
            "centerAnchorX" : 0.6675191815856778,
            "centerAnchorY" : 0.24871355060034306,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Gif.tsx_Gif",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "bottomLeft" : 0,
              "bottomRight" : 0,
              "isMixed" : false,
              "lockImage" : true,
              "radius" : 0,
              "search" : "Abstract",
              "topLeft" : 0,
              "topRight" : 0
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "QaqJbpiFu"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 200,
            "heightType" : 0,
            "id" : "dtlaQwj9t",
            "intrinsicHeight" : 200,
            "intrinsicWidth" : 200,
            "left" : null,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "yR_krJJF1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 160,
            "rotation" : 0,
            "top" : 45,
            "visible" : true,
            "width" : 200,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : 98,
            "centerAnchorX" : 0.78132992327365725,
            "centerAnchorY" : 0.660377358490566,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Gif.tsx_Gif",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "bottomLeft" : 0,
              "bottomRight" : 0,
              "isMixed" : false,
              "lockImage" : false,
              "radius" : 0,
              "search" : "Abstract",
              "topLeft" : 0,
              "topRight" : 0
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "QaqJbpiFu",
              "dtlaQwj9t"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 200,
            "heightType" : 0,
            "id" : "RRyZWAU5Y",
            "intrinsicHeight" : 200,
            "intrinsicWidth" : 200,
            "left" : null,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "yR_krJJF1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 71,
            "rotation" : 0,
            "top" : null,
            "visible" : true,
            "width" : 200,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : 53,
            "centerAnchorX" : 0.33503836317135549,
            "centerAnchorY" : 0.73756432246998282,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Gif.tsx_Gif",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "bottomLeft" : 0,
              "bottomRight" : 0,
              "isMixed" : false,
              "lockImage" : false,
              "radius" : 0,
              "search" : "Abstract",
              "topLeft" : 0,
              "topRight" : 0
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "QaqJbpiFu",
              "dtlaQwj9t",
              "RRyZWAU5Y"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 200,
            "heightType" : 0,
            "id" : "LJ6kYPCAR",
            "intrinsicHeight" : 200,
            "intrinsicWidth" : 200,
            "left" : 162,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "yR_krJJF1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "rotation" : 0,
            "top" : null,
            "visible" : true,
            "width" : 200,
            "widthType" : 0
          },
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : -178,
            "centerAnchorX" : 0.3126598465473146,
            "centerAnchorY" : 0.52658662092624353,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Unsplash.tsx_Unsplash",
            "codeComponentPackageVersion" : null,
            "codeComponentProps" : {
              "bottomLeft" : 0,
              "bottomRight" : 0,
              "isMixed" : false,
              "lockImage" : true,
              "radius" : 0,
              "search" : "",
              "size" : "XL",
              "topLeft" : 0,
              "topRight" : 0
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "duplicatedFrom" : [
              "ns1HlLZBa"
            ],
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 908,
            "heightType" : 0,
            "id" : "lotRHqcSf",
            "intrinsicHeight" : null,
            "intrinsicWidth" : null,
            "left" : -254,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "yR_krJJF1",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : 39,
            "rotation" : 0,
            "top" : -147,
            "visible" : true,
            "width" : 997,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "duplicatedFrom" : null,
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "framePreset" : null,
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 583,
        "heightType" : 0,
        "id" : "yR_krJJF1",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : -96,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -984,
        "visible" : true,
        "width" : 782,
        "widthType" : 0
      }
    ],
    "duplicatedFrom" : null,
    "guidesX" : [
      -1177
    ],
    "guidesY" : [
      -90,
      63,
      170
    ],
    "homeNodeId" : null,
    "id" : "uXpaPrDOp",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "tokens" : {

    },
    "tokensIndex" : [

    ],
    "visible" : false
  },
  "version" : 64
}

module.exports = designs


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.2.3","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.6.1","@testing-library/jest-dom":"^5.1.1","@testing-library/react":"^9.4.0","@testing-library/react-hooks":"^3.2.1","@types/chalk":"2.2.0","@types/css-font-loading-module":"^0.0.4","@types/draft-js":"0.10.38","@types/enzyme":"3.1.10","@types/enzyme-adapter-react-16":"1.0.3","@types/google.fonts":"1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"25.2.1","@types/node":"^12.12.12","@types/promise-queue":"2.2.0","@types/react":"16.9.19","@types/react-dom":"16.9.5","@types/webfontloader":"1.6.29","@typescript-eslint/eslint-plugin":"^1.10.3-alpha.2","@typescript-eslint/parser":"^1.10.2","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.11.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"2.0.0-beta.72","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^25.5.4","jest-diff":"^25.5.0","jest-junit":"^10.0.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.12.0","react-dev-utils":"^5.0.1","react-dom":"^16.12.0","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","terser-webpack-plugin":"^1.3.0","ts-jest":"^25.5.0","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","watch":"^1.0.2","webfontloader":"^1.6.28","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.12.0","react-dom":"^16.12.0"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.default"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.default */ "framer-package-loader!@framer/framer.default")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.default"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","dependencies":{"react-feather":"^2.0.3"},"devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"ed433636-a308-4ea6-8026-c3b3f320806d","displayName":"Default"},"author":"Framer Team","name":"@framer/framer.default","version":"1.71.0"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.4.16\"},\"peerDependencies\":{\"framer\":\"^0.10.5 || ^1\",\"react\":\"^16.3.0\",\"react-dom\":\"^16.3.0\"},\"framer\":{\"id\":\"5f4411f5-e210-4355-ad08-d04613afe3a1\",\"displayName\":\"Sticky Headers\"},\"author\":\"Giles Perry\",\"dependencies\":{\"@framer/framer.default\":\"^1.71.0\",\"framer-motion\":\"^0.15.1\"},\"name\":\"@framer/perrysmotors.sticky-headers\",\"version\":\"2.3.0\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.default":
/*!***************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.default" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.default'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__;

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