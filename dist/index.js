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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90Q29ubmVjdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Ob3RDb25uZWN0ZWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRTlCLE1BQU0sS0FBSyxHQUF3QjtJQUMvQixNQUFNLEVBQUUsTUFBTTtJQUNkLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLFFBQVE7SUFDcEIsY0FBYyxFQUFFLFFBQVE7SUFDeEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsS0FBSyxFQUFFLFNBQVM7SUFDaEIsVUFBVSxFQUFFLHlCQUF5QjtJQUNyQyxRQUFRLEVBQUUsUUFBUTtDQUNyQixDQUFBO0FBRUQsU0FBUyxTQUFTLENBQUMsS0FBSzs7SUFDcEIsTUFBTSxFQUFFLE1BQU0sR0FBRyxvQkFBb0IsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUMvQyxPQUFPLDZCQUFLLEtBQUssRUFBRSxLQUFLO1FBQUcsTUFBTTtrQkFBUyxDQUFBO0NBQzdDO0FBRVksUUFBQSxZQUFZLEdBQUcsU0FBUyxDQUFBO0FBQ3JDIn0=

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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RpY2t5RWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU3RpY2t5RWxlbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXVEO0FBQ3ZELGlEQUE2QztBQUM3QyxpREFBOEM7QUFFOUMsU0FBZ0IsYUFBYSxDQUFDLEtBQUs7O0lBQy9CLE1BQU0sRUFBRSxRQUFRLEtBQW1CLEtBQUssRUFBdEIsdUNBQXNCLENBQUE7SUFDeEMsTUFBTSxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLDRCQUFhLENBQUMsQ0FBQTtJQUMxRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFckQsTUFBTSxrQkFBa0IsR0FBRyxrQkFBUyxDQUNoQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUM1QixDQUFBO0lBRUQsTUFBTSxDQUFDLEdBQUcscUJBQVksQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQTtJQUUxRCxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN0QyxPQUFPLG9CQUFDLDJCQUFZLElBQUMsTUFBTSxFQUFDLDZCQUE2QixHQUFHLENBQUE7S0FDL0Q7U0FBTTtRQUNILE9BQU8sQ0FDSCxvQkFBQyxjQUFLLG9CQUFLLFNBQVMsSUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQ3ZDLFFBQVEsQ0FDTCxDQUNYLENBQUE7S0FDSjtDQUNKO0FBckJELHNDQXFCQztBQUNEIn0=

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
        return (React.createElement(framer_1.Frame, Object.assign({}, restProps, { background: null, y: y }), children));
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RpY2t5U2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TdGlja3lTY3JvbGwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQU9lO0FBQ2YsaURBQTZDO0FBT2hDLFFBQUEsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQWdCO0lBQzVELGNBQWMsRUFBRSxvQkFBVyxDQUFDLENBQUMsQ0FBQztJQUM5QixjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ3JELENBQUMsQ0FBQTtBQUVGLFNBQWdCLFlBQVksQ0FBQyxLQUFLOztJQUM5Qix1Q0FBdUM7SUFDdkMsU0FBUyx3QkFBd0I7O1FBQzdCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUE7UUFDeEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoQyxNQUFNLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUU5QyxNQUFNLG9CQUFvQixHQUFHLEVBQUUsQ0FBQTtRQUUvQixJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxDQUFBO1lBQ0wsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQzFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztvQkFDdEIsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsTUFBTTtvQkFDOUMsUUFBUSxF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

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
    // Calculate and store sticky positions
    function setStickyPositionsLookup() {
        window["__checkBudget__"]();
        const { offset } = props;
        const parent = props.children[0];
        const stickyFrames = getStickyElements(parent);
        const stickyPositionLookup = [];
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
    const { children, contentOffsetY = framer_1.useMotionValue(0) } = props, restProps = __rest(props, ["children", "contentOffsetY"]);
    if (React.Children.count(children) === 0) {
        return React.createElement(NotConnected_1.NotConnected, { prompt: "Connect to scrollable content" });
    }
    else {
        const stickyPositionLookup = setStickyPositionsLookup();
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
            React.createElement(framer_1.Scroll, Object.assign({}, restProps, { contentOffsetY: contentOffsetY }), children)));
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
    else if (top) {
        // Constrained to top
        return top;
    }
    else {
        // Constrained to bottom
        return parent.props.height - bottom - height;
    }
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
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.2","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"7.0.13","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.16.8","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.4"}}
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

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16"},"peerDependencies":{"framer":"^0.10.5 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"5f4411f5-e210-4355-ad08-d04613afe3a1","displayName":"Sticky Headers"},"author":"Giles Perry","dependencies":{"framer-motion":"^0.15.1"},"name":"@framer/perrysmotors.sticky-headers","version":"2.0.0"};

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