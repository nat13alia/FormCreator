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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const form_1 = __webpack_require__(/*! ./form */ "./src/form.ts");
class App {
    createNewForm() {
        let form = new form_1.Form();
        console.log('createNewForm has been called!');
    }
    createNewField() {
        let field;
        console.log('createNewField has been called!');
    }
}
exports.App = App;


/***/ }),

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Form {
    constructor() {
        this.formFields = [];
    }
    getValue() { }
    render() { }
}
exports.Form = Form;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
const newFormForm = document.getElementById('document-form');
const newFieldForm = document.getElementById('field-form');
let app = new app_1.App();
newFormForm.addEventListener('submit', function (e) {
    app.createNewForm();
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'block';
    e.preventDefault();
});
newFieldForm.addEventListener('submit', function (e) {
    app.createNewField();
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'block';
    e.preventDefault();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLGtFQUE4QjtBQW1COUIsTUFBYSxHQUFHO0lBR1osYUFBYTtRQUNULElBQUksSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxjQUFjO1FBQ1YsSUFBSSxLQUFZLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDSjtBQVpELGtCQVlDOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkQsTUFBYSxJQUFJO0lBQWpCO1FBQ0UsZUFBVSxHQUFZLEVBQUUsQ0FBQztJQUkzQixDQUFDO0lBRkMsUUFBUSxLQUFLLENBQUM7SUFDZCxNQUFNLEtBQUssQ0FBQztDQUNiO0FBTEQsb0JBS0M7Ozs7Ozs7Ozs7Ozs7OztBQ2RELCtEQUE0QjtBQUU1QixNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7QUFHM0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQztBQUdwQixXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNoRCxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDcEIsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ25DLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNyQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNqRCxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckIsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ25DLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNyQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IEZvcm0gfSBmcm9tICcuL2Zvcm0nOyAvLyBDVFJMICsgLlxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcblxuLy8ga2xhc2EgemFyesSFZHphasSFY2EgeiB3c3p5c3RraW1pIHBvZHN0YXdvd3ltaSBmdW5rY2phbWkgYXBsaWthY2ppIOKAkyByZWFnb3dhbmllbSBuYSBlbGVtZW50eSBpbnRlcmZlanN1LCB3ecWbd2lldGxhbmllbSBmb3JtdWxhcnp5IGl0ZC5cblxuLyogXG5cbkVmZWt0ZW0gcHJhY3kgcG93aW5uYSBiecSHIGFwbGlrYWNqYSBrdMOzcmEgcG96d2FsYSB3ecWbd2lldGxpxIcgc3RhdHljem5pZSB6YWtvZG93YW55IGZvcm11bGFyei4gUG93aW5uYSB0ZcW8IHVtb8W8bGl3acSHIHBvYnJhbmllIHd5bmlrw7N3IGFua2lldHkgKHdhcnRvxZtjaSBmb3JtdWxhcnphKSBpIHd5xZt3aWV0bGVuaWUgaWNoIHcgZG93b2xueW0gbWllanNjdSBla3JhbnUgKGplZHluaWUgZGxhIHRlc3R1IG1ldG9keSBnZXRWYWx1ZSgpIGtsYXN5IEZvcm0pLiBcblxuUHJ6eWvFgmFkb3d5IGZvcm11bGFyeiBkbyB3ecWbd2lldGxlbmlhOiBcbjEuXHRJbWnEmSAocG9sZSB0ZWtzdG93ZSkgXG4yLlx0TmF6d2lza28gKHBvbGUgdGVrc3Rvd2UpIFxuMy5cdEUtbWFpbCAocG9sZSBlLW1haWwpIFxuNC5cdFd5YnJhbnkga2llcnVuZWsgc3R1ZGnDs3cgKHNlbGVjdCkgXG41Llx0Q3p5IHByZWZlcnVqZXN6IGUtbGVhcm5pbmcgKGNoZWNrYm94KSBcbjYuXHRVd2FnaSAodGV4dGFyZWEpIFxuXG4qL1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBhY3RpdmVGb3JtOiBGb3JtO1xuXG4gICAgY3JlYXRlTmV3Rm9ybSgpIHtcbiAgICAgICAgbGV0IGZvcm0gPSBuZXcgRm9ybSgpO1xuICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRlTmV3Rm9ybSBoYXMgYmVlbiBjYWxsZWQhJyk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3RmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZDogRmllbGQ7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVOZXdGaWVsZCBoYXMgYmVlbiBjYWxsZWQhJyk7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XHJcbi8vIEtsYXNhIGZvcm0gb2Rwb3dpYWRhIHphIHByemV0cnp5bXl3YW5pZSAgY2HFgm/Fm2NpIGluZm9ybWFjamkgbyBmb3JtdWxhcnp1IG9yYXogamVnbyB3ecWbd2lldGxhbmllLlxyXG5cclxuLy8gVyBrbGFzaWUgcG93aW5ueSBiecSHIHByemVjaG93eXdhbmUgaW5mb3JtYWNqZSBvIHdzenlzdGtpY2ggcG9sYWNoIGZvcm11bGFyemEgKHRhYmxpY2EgZWxlbWVudMOzdyBGaWVsZCkuXHJcblxyXG4vLyBLbGFzYSBwb3dpbm5hIHVkb3N0xJlwbmlhxIcgZHdpZSBtZXRvZHk6XHJcbi8vIC0gZ2V0VmFsdWUoKSBwb2JpZXJhasSFY8SFIHd5bmlraSBmb3JtdWxhcnphXHJcbi8vIC0gcmVuZGVyKCkgd3nFm3dpZXRsYWrEhWPEhSBmb3JtdWxhcnogd2Ugd3NrYXphbnltIG1pZWpzY3UuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSB7XHJcbiAgZm9ybUZpZWxkczogRmllbGRbXSA9IFtdO1xyXG5cclxuICBnZXRWYWx1ZSgpIHsgfVxyXG4gIHJlbmRlcigpIHsgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAnO1xuXG5jb25zdCBuZXdGb3JtRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2N1bWVudC1mb3JtJyk7XG5jb25zdCBuZXdGaWVsZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGQtZm9ybScpO1xuXG5cbmxldCBhcHAgPSBuZXcgQXBwKCk7XG5cbi8vIExpc3RlbiBmb3IgYSBzdWJtaXQgZm9yIGEgbmV3IEZvcm0gdG8gYmUgY3JlYXRlZFxubmV3Rm9ybUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgYXBwLmNyZWF0ZU5ld0Zvcm0oKTtcbiAgbmV3Rm9ybUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxubmV3RmllbGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGFwcC5jcmVhdGVOZXdGaWVsZCgpO1xuICBuZXdGb3JtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBuZXdGaWVsZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=