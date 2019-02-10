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

/***/ "./code/StickyElement.tsx":
/*!********************************!*\
  !*** ./code/StickyElement.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst style = {\n    height: \"100%\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    textAlign: \"center\",\n    color: \"#8855FF\",\n    background: \"rgba(136, 85, 255, 0.1)\",\n    overflow: \"hidden\"\n};\nclass StickyElement extends React.Component {\n    render() {\n        window[\"__checkBudget__\"]();\n        const { children } = this.props;\n        if (children.length <= 0) {\n            return React.createElement(\"div\", { style: style }, \"Connect to something sticky \\u2192\");\n        }\n        else {\n            return children;\n        }\n    }\n}\nexports.StickyElement = StickyElement;\nexports.__info__ = [{ name: \"StickyElement\", children: true, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1N0aWNreUVsZW1lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBLCtDQUErQyxlQUFlO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUEyRCIsImZpbGUiOiIuL2NvZGUvU3RpY2t5RWxlbWVudC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3Qgc3R5bGUgPSB7XG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBjb2xvcjogXCIjODg1NUZGXCIsXG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDEzNiwgODUsIDI1NSwgMC4xKVwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiXG59O1xuY2xhc3MgU3RpY2t5RWxlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZSB9LCBcIkNvbm5lY3QgdG8gc29tZXRoaW5nIHN0aWNreSBcXHUyMTkyXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5TdGlja3lFbGVtZW50ID0gU3RpY2t5RWxlbWVudDtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlN0aWNreUVsZW1lbnRcIiwgY2hpbGRyZW46IHRydWUsIHR5cGU6IFwiY29tcG9uZW50XCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/StickyElement.tsx\n");

/***/ }),

/***/ "./code/StickyScroll.tsx":
/*!*******************************!*\
  !*** ./code/StickyScroll.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst style = {\n    height: \"100%\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    textAlign: \"center\",\n    color: \"#8855FF\",\n    background: \"rgba(136, 85, 255, 0.1)\",\n    overflow: \"hidden\"\n};\nclass StickyScroll extends React.Component {\n    constructor() {\n        super(...arguments);\n        // Store the current scroll position\n        this.state = {\n            scrollY: 0\n        };\n        // Calculate and store sticky positions\n        this.setStickyPositionsLookup = () => {\n            window[\"__checkBudget__\"]();\n            const scrollContentChildren = this.props.children[0].props.children;\n            const stickyFrames = StickyScroll.getStickyFrames(scrollContentChildren);\n            const stickyPositionLookup = [];\n            if (stickyFrames.length > 0) {\n                let i;\n                for (i = 0; i < stickyFrames.length - 1; i++) {\n                    window[\"__checkBudget__\"]();\n                    stickyPositionLookup.push({\n                        element: stickyFrames[i],\n                        yStick: stickyFrames[i].props.top,\n                        yRelease: stickyFrames[i + 1].props.top - stickyFrames[i].props.height\n                    });\n                }\n                stickyPositionLookup.push({\n                    element: stickyFrames[i],\n                    yStick: stickyFrames[i].props.top,\n                    yRelease: Number.POSITIVE_INFINITY\n                });\n            }\n            return stickyPositionLookup;\n        };\n        // Clone children, if StickyElement adjust props\n        this.cloneStickyChildren = (elements = []) => elements.map(element => {\n            window[\"__checkBudget__\"]();\n            if (StickyScroll.isSticky(element)) {\n                const offsetScrollY = this.state.scrollY + this.props.offset;\n                const stickyPosition = this.stickyPositionLookup.find(found => found.element === element);\n                if (offsetScrollY >= stickyPosition.yRelease) {\n                    return this.cloneContainer(element, {\n                        top: stickyPosition.yRelease\n                    });\n                }\n                else if (offsetScrollY >= stickyPosition.yStick) {\n                    return this.cloneContainer(element, {\n                        top: offsetScrollY\n                    });\n                }\n                else {\n                    return this.cloneContainer(element);\n                }\n            }\n            // If not a StickyElement just clone it\n            else {\n                return this.cloneContainer(element);\n            }\n        });\n        // Clone a container and clone it's children\n        this.cloneContainer = (e, props = null) => React.cloneElement(e, props, this.cloneStickyChildren(e.props.children));\n        // Update scrollY onMove\n        this.handleScroll = event => {\n            window[\"__checkBudget__\"]();\n            // Update scrollY\n            this.setState({ scrollY: -event.y });\n            // Run any onMove function passed from props:\n            const { onMove } = this.props;\n            onMove && onMove(event);\n        };\n    }\n    static isSticky(element) {\n        window[\"__checkBudget__\"]();\n        const { componentIdentifier } = element.props;\n        return (componentIdentifier &&\n            componentIdentifier.includes(\"StickyElement\") &&\n            element.props.top != null // Ignore if element is not fixed to top\n        );\n    }\n    static getStickyFrames(elements = []) {\n        window[\"__checkBudget__\"]();\n        return elements\n            .filter(element => StickyScroll.isSticky(element))\n            .sort((a, b) => a.props.top - b.props.top);\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        const { children } = this.props;\n        if (children.length === 0) {\n            return React.createElement(\"div\", { style: style }, \"Connect to scrollable content \\u2192\");\n        }\n        else {\n            this.stickyPositionLookup = this.setStickyPositionsLookup();\n            // Clone the child element to place in a scroll containter\n            let content = this.cloneContainer(children[0]);\n            return (\n            // Create a scroll element with an onMove function\n            React.createElement(framer_1.Scroll, Object.assign({}, this.props, { onMove: this.handleScroll }), content));\n        }\n    }\n}\nStickyScroll.defaultProps = {\n    offset: 0,\n    direction: \"vertical\",\n    overflow: \"hidden\",\n    onMove: () => null\n};\nStickyScroll.propertyControls = {\n    offset: {\n        type: framer_1.ControlType.Number,\n        title: \"Offset\",\n        min: 0,\n        max: 500\n    }\n};\nexports.StickyScroll = StickyScroll;\nexports.__info__ = [{ name: \"StickyScroll\", children: true, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1N0aWNreVNjcm9sbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzQkFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQSwrQ0FBK0MsZUFBZTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxlQUFlLDRCQUE0QjtBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMERBQTBEIiwiZmlsZSI6Ii4vY29kZS9TdGlja3lTY3JvbGwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IHN0eWxlID0ge1xuICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwiIzg4NTVGRlwiLFxuICAgIGJhY2tncm91bmQ6IFwicmdiYSgxMzYsIDg1LCAyNTUsIDAuMSlcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxufTtcbmNsYXNzIFN0aWNreVNjcm9sbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2Nyb2xsWTogMFxuICAgICAgICB9O1xuICAgICAgICAvLyBDYWxjdWxhdGUgYW5kIHN0b3JlIHN0aWNreSBwb3NpdGlvbnNcbiAgICAgICAgdGhpcy5zZXRTdGlja3lQb3NpdGlvbnNMb29rdXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbENvbnRlbnRDaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5bMF0ucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICBjb25zdCBzdGlja3lGcmFtZXMgPSBTdGlja3lTY3JvbGwuZ2V0U3RpY2t5RnJhbWVzKHNjcm9sbENvbnRlbnRDaGlsZHJlbik7XG4gICAgICAgICAgICBjb25zdCBzdGlja3lQb3NpdGlvbkxvb2t1cCA9IFtdO1xuICAgICAgICAgICAgaWYgKHN0aWNreUZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0aWNreUZyYW1lcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNreVBvc2l0aW9uTG9va3VwLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogc3RpY2t5RnJhbWVzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgeVN0aWNrOiBzdGlja3lGcmFtZXNbaV0ucHJvcHMudG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgeVJlbGVhc2U6IHN0aWNreUZyYW1lc1tpICsgMV0ucHJvcHMudG9wIC0gc3RpY2t5RnJhbWVzW2ldLnByb3BzLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RpY2t5UG9zaXRpb25Mb29rdXAucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHN0aWNreUZyYW1lc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgeVN0aWNrOiBzdGlja3lGcmFtZXNbaV0ucHJvcHMudG9wLFxuICAgICAgICAgICAgICAgICAgICB5UmVsZWFzZTogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RpY2t5UG9zaXRpb25Mb29rdXA7XG4gICAgICAgIH07XG4gICAgICAgIC8vIENsb25lIGNoaWxkcmVuLCBpZiBTdGlja3lFbGVtZW50IGFkanVzdCBwcm9wc1xuICAgICAgICB0aGlzLmNsb25lU3RpY2t5Q2hpbGRyZW4gPSAoZWxlbWVudHMgPSBbXSkgPT4gZWxlbWVudHMubWFwKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBpZiAoU3RpY2t5U2Nyb2xsLmlzU3RpY2t5KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2Zmc2V0U2Nyb2xsWSA9IHRoaXMuc3RhdGUuc2Nyb2xsWSArIHRoaXMucHJvcHMub2Zmc2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0aWNreVBvc2l0aW9uID0gdGhpcy5zdGlja3lQb3NpdGlvbkxvb2t1cC5maW5kKGZvdW5kID0+IGZvdW5kLmVsZW1lbnQgPT09IGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXRTY3JvbGxZID49IHN0aWNreVBvc2l0aW9uLnlSZWxlYXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb25lQ29udGFpbmVyKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogc3RpY2t5UG9zaXRpb24ueVJlbGVhc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9mZnNldFNjcm9sbFkgPj0gc3RpY2t5UG9zaXRpb24ueVN0aWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb25lQ29udGFpbmVyKGVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogb2Zmc2V0U2Nyb2xsWVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb25lQ29udGFpbmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIG5vdCBhIFN0aWNreUVsZW1lbnQganVzdCBjbG9uZSBpdFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmVDb250YWluZXIoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDbG9uZSBhIGNvbnRhaW5lciBhbmQgY2xvbmUgaXQncyBjaGlsZHJlblxuICAgICAgICB0aGlzLmNsb25lQ29udGFpbmVyID0gKGUsIHByb3BzID0gbnVsbCkgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGUsIHByb3BzLCB0aGlzLmNsb25lU3RpY2t5Q2hpbGRyZW4oZS5wcm9wcy5jaGlsZHJlbikpO1xuICAgICAgICAvLyBVcGRhdGUgc2Nyb2xsWSBvbk1vdmVcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwgPSBldmVudCA9PiB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzY3JvbGxZXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2Nyb2xsWTogLWV2ZW50LnkgfSk7XG4gICAgICAgICAgICAvLyBSdW4gYW55IG9uTW92ZSBmdW5jdGlvbiBwYXNzZWQgZnJvbSBwcm9wczpcbiAgICAgICAgICAgIGNvbnN0IHsgb25Nb3ZlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgb25Nb3ZlICYmIG9uTW92ZShldmVudCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBpc1N0aWNreShlbGVtZW50KSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCB7IGNvbXBvbmVudElkZW50aWZpZXIgfSA9IGVsZW1lbnQucHJvcHM7XG4gICAgICAgIHJldHVybiAoY29tcG9uZW50SWRlbnRpZmllciAmJlxuICAgICAgICAgICAgY29tcG9uZW50SWRlbnRpZmllci5pbmNsdWRlcyhcIlN0aWNreUVsZW1lbnRcIikgJiZcbiAgICAgICAgICAgIGVsZW1lbnQucHJvcHMudG9wICE9IG51bGwgLy8gSWdub3JlIGlmIGVsZW1lbnQgaXMgbm90IGZpeGVkIHRvIHRvcFxuICAgICAgICApO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0U3RpY2t5RnJhbWVzKGVsZW1lbnRzID0gW10pIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIHJldHVybiBlbGVtZW50c1xuICAgICAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IFN0aWNreVNjcm9sbC5pc1N0aWNreShlbGVtZW50KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnByb3BzLnRvcCAtIGIucHJvcHMudG9wKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGUgfSwgXCJDb25uZWN0IHRvIHNjcm9sbGFibGUgY29udGVudCBcXHUyMTkyXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGlja3lQb3NpdGlvbkxvb2t1cCA9IHRoaXMuc2V0U3RpY2t5UG9zaXRpb25zTG9va3VwKCk7XG4gICAgICAgICAgICAvLyBDbG9uZSB0aGUgY2hpbGQgZWxlbWVudCB0byBwbGFjZSBpbiBhIHNjcm9sbCBjb250YWludGVyXG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRoaXMuY2xvbmVDb250YWluZXIoY2hpbGRyZW5bMF0pO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHNjcm9sbCBlbGVtZW50IHdpdGggYW4gb25Nb3ZlIGZ1bmN0aW9uXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGZyYW1lcl8xLlNjcm9sbCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywgeyBvbk1vdmU6IHRoaXMuaGFuZGxlU2Nyb2xsIH0pLCBjb250ZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5TdGlja3lTY3JvbGwuZGVmYXVsdFByb3BzID0ge1xuICAgIG9mZnNldDogMCxcbiAgICBkaXJlY3Rpb246IFwidmVydGljYWxcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICBvbk1vdmU6ICgpID0+IG51bGxcbn07XG5TdGlja3lTY3JvbGwucHJvcGVydHlDb250cm9scyA9IHtcbiAgICBvZmZzZXQ6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuTnVtYmVyLFxuICAgICAgICB0aXRsZTogXCJPZmZzZXRcIixcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDUwMFxuICAgIH1cbn07XG5leHBvcnRzLlN0aWNreVNjcm9sbCA9IFN0aWNreVNjcm9sbDtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlN0aWNreVNjcm9sbFwiLCBjaGlsZHJlbjogdHJ1ZSwgdHlwZTogXCJjb21wb25lbnRcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/StickyScroll.tsx\n");

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
                    package.__framer__.packageJson = {"name":"framer","version":"0.10.3","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"^7.0.2","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^9.6.0","@types/react":"^16","@types/react-dom":"^16","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-junit":"^5.2.0","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"~16.4","react-dev-utils":"^5.0.1","react-dom":"~16.4","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3","react-dom":"^16.3"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
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

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16","framer":"^0.10.3"},"peerDependencies":{"framer":"^0.10.3","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"5f4411f5-e210-4355-ad08-d04613afe3a1","displayName":"Sticky Headers"},"author":"Giles Perry","dependencies":{},"name":"@framer/perrysmotors.sticky-headers","version":"1.4.0"};

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