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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/document-list.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/document-list.ts":
/*!******************************!*\
  !*** ./src/document-list.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const documentList_1 = __webpack_require__(/*! ./documentList */ "./src/documentList.ts");
const documentsList = document.getElementById('documentsList');
const backBtn = document.getElementById('backBtn');
window.addEventListener('DOMContentLoaded', function (e) {
    documentList_1.DocumentList.render(documentsList);
    backBtn.style.display = 'block';
    e.preventDefault();
});
backBtn.addEventListener('click', function (e) {
    window.location.href = 'index.html';
    e.preventDefault();
});


/***/ }),

/***/ "./src/documentList.ts":
/*!*****************************!*\
  !*** ./src/documentList.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DocumentList {
    static getDocumentList() {
        if (localStorage.getItem('documents') === null && localStorage.getItem('documentIDs') === null) {
            this.documentsList = [];
            this.documentIDs = [];
        }
        else {
            this.documentsList = JSON.parse(localStorage.getItem('documents'));
            this.documentIDs = JSON.parse(localStorage.getItem('documentIDs'));
        }
        return [this.documentsList, this.documentIDs];
    }
    static render(htmlElement) {
        const docListTable = document.createElement('table');
        const tHead = document.createElement('thead');
        const thID = document.createElement('th');
        const thEdit = document.createElement('th');
        const thRemove = document.createElement('th');
        const trHeader = document.createElement('tr');
        thID.textContent = 'Document ID';
        trHeader.appendChild(thID);
        trHeader.appendChild(thEdit);
        trHeader.appendChild(thRemove);
        tHead.appendChild(trHeader);
        docListTable.appendChild(tHead);
        docListTable.setAttribute('id', 'documentsTable');
        docListTable.setAttribute('class', 'u-full-width');
        let editLink = document.createElement('a');
        editLink.setAttribute('class', 'editLink');
        editLink.textContent = 'Edit';
        const tBody = document.createElement('tbody');
        let listOfDocs = this.getDocumentList();
        for (let i = 0; i < listOfDocs[0].length; i++) {
            const tdID = document.createElement('td');
            const tdEdit = document.createElement('td');
            const tdRemove = document.createElement('td');
            const tr = document.createElement('tr');
            tdID.textContent = `${listOfDocs[0][i].formName} : ${listOfDocs[1][i]}`;
            tdEdit.innerHTML = `<a class="editLink" href="edit-document.html?id=${this.documentIDs[i]}">EDIT</a>`;
            tdRemove.innerHTML = `<button class="removeBtn">Remove</button>`;
            tr.appendChild(tdID);
            tr.appendChild(tdEdit);
            tr.appendChild(tdRemove);
            tBody.appendChild(tr);
        }
        docListTable.appendChild(tBody);
        htmlElement.appendChild(docListTable);
    }
    ;
    static getDocument(id) {
    }
    static removeDocument(id) {
    }
}
exports.DocumentList = DocumentList;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3VtZW50LWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3VtZW50TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsMEZBQThDO0FBRTlDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDL0QsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUduRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxDQUFDO0lBQ3JELDJCQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8s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QUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pELE1BQU0sUUFBUSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELE1BQU0sRUFBRSxHQUF3QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxNQUFNLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsbURBQW1ELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUN0RyxRQUFRLENBQUMsU0FBUyxHQUFHLDJDQUEyQyxDQUFDO1lBQ2pFLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixFQUFFLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdkI7UUFFRCxZQUFZLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUFBLENBQUM7SUFFRixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQVU7SUFFN0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBVTtJQUVoQyxDQUFDO0NBRUY7QUF0RUQsb0NBc0VDIiwiZmlsZSI6ImRvY3VtZW50X2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kb2N1bWVudC1saXN0LnRzXCIpO1xuIiwiaW1wb3J0IHsgRG9jdW1lbnRMaXN0IH0gZnJvbSBcIi4vZG9jdW1lbnRMaXN0XCI7XHJcblxyXG5jb25zdCBkb2N1bWVudHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvY3VtZW50c0xpc3QnKTtcclxuY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrQnRuJyk7XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIERvY3VtZW50TGlzdC5yZW5kZXIoZG9jdW1lbnRzTGlzdCk7XHJcbiAgYmFja0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG5iYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdpbmRleC5odG1sJztcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pIiwiaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudExpc3Qge1xyXG4gIHN0YXRpYyBkb2N1bWVudHNMaXN0OiBGb3JtW107XHJcbiAgc3RhdGljIGRvY3VtZW50SURzOiBzdHJpbmdbXTtcclxuXHJcbiAgLy8gbWV0b2RhIHBvd2lubmEga29yenlzdGHEhyB6IGtsYXN5IExvY1N0b3JhZ2UgZG8gcG9icmFuaWEgbGlzdHkgZG9rdW1lbnTDs3cgaSB6YXBhbWnEmXRhbmlhIGplaiB3IHdld24uIHfFgmHFm2Npd2/Fm2NpIGtsYXN5XHJcbiAgc3RhdGljIGdldERvY3VtZW50TGlzdCgpOiBbRm9ybVtdLCBzdHJpbmdbXV0ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb2N1bWVudHMnKSA9PT0gbnVsbCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRJRHMnKSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRvY3VtZW50c0xpc3QgPSBbXTtcclxuICAgICAgdGhpcy5kb2N1bWVudElEcyA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kb2N1bWVudHNMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRzJykpO1xyXG4gICAgICB0aGlzLmRvY3VtZW50SURzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRJRHMnKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3RoaXMuZG9jdW1lbnRzTGlzdCwgdGhpcy5kb2N1bWVudElEc107XHJcbiAgfVxyXG5cclxuICAvLyAgbWV0b2RhIHBvd2lubmEgd3nFm3dpZXRsYcSHIGxpc3TEmSBkb2t1bWVudMOzdyB3IGZvcm1pZSB0YWJlbGkgemF3aWVyYWrEhWNlaiBpZCBkb2t1bWVudHVcclxuICBzdGF0aWMgcmVuZGVyKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgLy8gQ3JlYXRlIHRhYmxlIGVsZW1lbnRcclxuICAgIGNvbnN0IGRvY0xpc3RUYWJsZTogSFRNTFRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICBjb25zdCB0SGVhZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgY29uc3QgdGhJRDogSFRNTEhlYWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIGNvbnN0IHRoRWRpdDogSFRNTEhlYWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIGNvbnN0IHRoUmVtb3ZlOiBIVE1MSGVhZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgY29uc3QgdHJIZWFkZXI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgdGhJRC50ZXh0Q29udGVudCA9ICdEb2N1bWVudCBJRCdcclxuICAgIHRySGVhZGVyLmFwcGVuZENoaWxkKHRoSUQpO1xyXG4gICAgdHJIZWFkZXIuYXBwZW5kQ2hpbGQodGhFZGl0KTtcclxuICAgIHRySGVhZGVyLmFwcGVuZENoaWxkKHRoUmVtb3ZlKTtcclxuICAgIHRIZWFkLmFwcGVuZENoaWxkKHRySGVhZGVyKTtcclxuICAgIGRvY0xpc3RUYWJsZS5hcHBlbmRDaGlsZCh0SGVhZCk7XHJcblxyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBkb2NMaXN0VGFibGUuc2V0QXR0cmlidXRlKCdpZCcsICdkb2N1bWVudHNUYWJsZScpO1xyXG4gICAgZG9jTGlzdFRhYmxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndS1mdWxsLXdpZHRoJyk7XHJcblxyXG4gICAgbGV0IGVkaXRMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIC8vIFNldHRpbmcgYXR0cmlidXRlc1xyXG4gICAgZWRpdExpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0TGluaycpO1xyXG4gICAgZWRpdExpbmsudGV4dENvbnRlbnQgPSAnRWRpdCdcclxuXHJcbiAgICBjb25zdCB0Qm9keTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG5cclxuICAgIGxldCBsaXN0T2ZEb2NzOiBbRm9ybVtdLCBzdHJpbmdbXV0gPSB0aGlzLmdldERvY3VtZW50TGlzdCgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0T2ZEb2NzWzBdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRkSUQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgY29uc3QgdGRFZGl0OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgIGNvbnN0IHRkUmVtb3ZlOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgIGNvbnN0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHJcbiAgICAgIHRkSUQudGV4dENvbnRlbnQgPSBgJHtsaXN0T2ZEb2NzWzBdW2ldLmZvcm1OYW1lfSA6ICR7bGlzdE9mRG9jc1sxXVtpXX1gO1xyXG4gICAgICB0ZEVkaXQuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwiZWRpdExpbmtcIiBocmVmPVwiZWRpdC1kb2N1bWVudC5odG1sP2lkPSR7dGhpcy5kb2N1bWVudElEc1tpXX1cIj5FRElUPC9hPmA7XHJcbiAgICAgIHRkUmVtb3ZlLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlQnRuXCI+UmVtb3ZlPC9idXR0b24+YDtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGRJRCk7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkRWRpdCk7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkUmVtb3ZlKTtcclxuICAgICAgdEJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY0xpc3RUYWJsZS5hcHBlbmRDaGlsZCh0Qm9keSk7XHJcbiAgICBodG1sRWxlbWVudC5hcHBlbmRDaGlsZChkb2NMaXN0VGFibGUpO1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBnZXREb2N1bWVudChpZDogc3RyaW5nKSB7XHJcblxyXG4gIH1cclxuICBzdGF0aWMgcmVtb3ZlRG9jdW1lbnQoaWQ6IHN0cmluZykge1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=