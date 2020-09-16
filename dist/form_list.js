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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/form-list.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/App.ts":
/*!****************************!*\
  !*** ./src/classes/App.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class App {
}
exports.App = App;


/***/ }),

/***/ "./src/classes/FieldLabel.ts":
/*!***********************************!*\
  !*** ./src/classes/FieldLabel.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FieldLabel {
    constructor(name) {
        this.name = name;
    }
    render() {
        const label = document.createElement('label');
        label.setAttribute('for', `${this.name.toLowerCase()}`);
        label.textContent = `${this.name}`;
        return label;
    }
}
exports.FieldLabel = FieldLabel;


/***/ }),

/***/ "./src/classes/Form.ts":
/*!*****************************!*\
  !*** ./src/classes/Form.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FormCreator_1 = __webpack_require__(/*! ./FormCreator */ "./src/classes/FormCreator.ts");
class Form {
    constructor(name, fields) {
        this.fields = [];
        this.name = name;
        this.fields = fields;
    }
    render() {
        const form = document.createElement('form');
        form.setAttribute('id', `${this.name.toLowerCase()}`);
        const header = document.createElement('h3');
        header.textContent = `${this.name}`;
        form.appendChild(header);
        const linebreak = document.createElement("br");
        form.appendChild(linebreak);
        this.fields.forEach(field => {
            form.appendChild(field.render());
        });
        form.appendChild(linebreak);
        form.appendChild(FormCreator_1.FormCreator.renderSubmitButton('submitBtn', 'Submit the Form!'));
        return form;
    }
}
exports.Form = Form;


/***/ }),

/***/ "./src/classes/FormCreator.ts":
/*!************************************!*\
  !*** ./src/classes/FormCreator.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FieldType_1 = __webpack_require__(/*! ./../enums/FieldType */ "./src/enums/FieldType.ts");
const inputField_1 = __webpack_require__(/*! ./inputField */ "./src/classes/inputField.ts");
const textAreaField_1 = __webpack_require__(/*! ./textAreaField */ "./src/classes/textAreaField.ts");
const dateField_1 = __webpack_require__(/*! ./dateField */ "./src/classes/dateField.ts");
const emailField_1 = __webpack_require__(/*! ./emailField */ "./src/classes/emailField.ts");
const selectField_1 = __webpack_require__(/*! ./selectField */ "./src/classes/selectField.ts");
const checkboxField_1 = __webpack_require__(/*! ./checkboxField */ "./src/classes/checkboxField.ts");
const Form_1 = __webpack_require__(/*! ./Form */ "./src/classes/Form.ts");
const App_1 = __webpack_require__(/*! ./App */ "./src/classes/App.ts");
class FormCreator {
    newForm(name) {
        App_1.App.activeForm = new Form_1.Form(name, []);
    }
    newField(name, type) {
        switch (type) {
            case 'text':
                App_1.App.activeField = new inputField_1.InputField(name, FieldType_1.FieldType.Text, '');
                break;
            case 'multilinetext':
                App_1.App.activeField = new textAreaField_1.TextareaField(name, FieldType_1.FieldType.MultiLineText, '');
                break;
            case 'date':
                App_1.App.activeField = new dateField_1.DateField(name, FieldType_1.FieldType.Date, '');
                break;
            case 'email':
                App_1.App.activeField = new emailField_1.EmailField(name, FieldType_1.FieldType.Email, '');
                break;
            case 'select':
                App_1.App.activeField = new selectField_1.SelectField(name, FieldType_1.FieldType.Select, '');
                break;
            case 'checkbox':
                App_1.App.activeField = new checkboxField_1.CheckboxField(name, FieldType_1.FieldType.Checkbox, '');
                break;
            default:
                break;
        }
        return App_1.App.activeField.render();
    }
    static renderSubmitButton(id, value) {
        const submitField = document.createElement('input');
        submitField.setAttribute('type', 'submit');
        submitField.setAttribute('id', `${id}`);
        submitField.setAttribute('value', `${value}`);
        return submitField;
    }
}
exports.FormCreator = FormCreator;


/***/ }),

/***/ "./src/classes/LocStorage.ts":
/*!***********************************!*\
  !*** ./src/classes/LocStorage.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LocStorage {
    getDocuments(key) {
        let objectContainer;
        if (localStorage.getItem(key) === null) {
            objectContainer = [];
            console.log(objectContainer);
        }
        else {
            objectContainer = JSON.parse(localStorage.getItem(key));
            console.log(objectContainer);
        }
        return objectContainer;
    }
    saveDocument(document, key) {
        let timeStamp = Date.now();
        let documentID = `${document.name}-${timeStamp}`;
        let objectContainer;
        let keysContainer;
        if (localStorage.getItem(key) === null) {
            objectContainer = [];
        }
        else {
            objectContainer = JSON.parse(localStorage.getItem(key));
        }
        if (localStorage.getItem('keys') === null) {
            keysContainer = [];
        }
        else {
            keysContainer = JSON.parse(localStorage.getItem('keys'));
        }
        objectContainer.push(document);
        keysContainer.push(documentID);
        localStorage.setItem(key, JSON.stringify(objectContainer));
        localStorage.setItem('keys', JSON.stringify(keysContainer));
    }
    removeDocument(documentID) {
        let objectContainer;
        let keysContainer;
        if (localStorage.getItem('documents') === null) {
            objectContainer = [];
        }
        else {
            objectContainer = JSON.parse(localStorage.getItem('documents'));
        }
        if (localStorage.getItem('keys') === null) {
            console.log("The array of keys is empty");
        }
        else {
            keysContainer = JSON.parse(localStorage.getItem('keys'));
        }
        for (let i = 0; i < keysContainer.length; i++) {
            if (keysContainer[i] === documentID) {
                objectContainer.splice(i, 1);
                keysContainer.splice(i, 1);
            }
        }
        localStorage.setItem('documents', JSON.stringify(objectContainer));
        localStorage.setItem('keys', JSON.stringify(keysContainer));
    }
    loadDocument(documentID) {
        let objectContainer;
        let keysContainer;
        let documentToLoad;
        if (localStorage.getItem('documents') === null) {
            console.log("There are no documents to load!");
        }
        else {
            objectContainer = JSON.parse(localStorage.getItem('documents'));
        }
        if (localStorage.getItem('keys') === null) {
            console.log("The array of keys is empty");
        }
        else {
            keysContainer = JSON.parse(localStorage.getItem('keys'));
        }
        for (let i = 0; i < keysContainer.length; i++) {
            if (keysContainer[i] === documentID) {
                console.log(objectContainer[i]);
                documentToLoad = objectContainer[i];
            }
        }
        return documentToLoad;
    }
}
exports.LocStorage = LocStorage;


/***/ }),

/***/ "./src/classes/checkboxField.ts":
/*!**************************************!*\
  !*** ./src/classes/checkboxField.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
class CheckboxField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new FieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const checkBoxInput = document.createElement('input');
        checkBoxInput.setAttribute('id', `${this.name.toLowerCase()}`);
        checkBoxInput.setAttribute('name', `${this.name.toLowerCase()}`);
        checkBoxInput.setAttribute('type', `${this.type.toLowerCase()}`);
        const checkBoxField = document.createElement('div');
        checkBoxField.appendChild(this.label.render());
        checkBoxField.appendChild(checkBoxInput);
        return checkBoxField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.CheckboxField = CheckboxField;


/***/ }),

/***/ "./src/classes/dateField.ts":
/*!**********************************!*\
  !*** ./src/classes/dateField.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
class DateField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new FieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const dateInput = document.createElement('input');
        dateInput.setAttribute('id', `${this.name.toLowerCase()}`);
        dateInput.setAttribute('name', `${this.name.toLowerCase()}`);
        dateInput.setAttribute('type', `${this.type.toLowerCase()}`);
        const dateField = document.createElement('div');
        dateField.appendChild(this.label.render());
        dateField.appendChild(dateInput);
        return dateField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.DateField = DateField;


/***/ }),

/***/ "./src/classes/documentList.ts":
/*!*************************************!*\
  !*** ./src/classes/documentList.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const LocStorage_1 = __webpack_require__(/*! ./LocStorage */ "./src/classes/LocStorage.ts");
class DocumentList {
    getDocumentList() {
        let storage = new LocStorage_1.LocStorage();
        this.documentsList = storage.getDocuments('documents');
        this.documentIDs = storage.getDocuments('keys');
        return [this.documentsList, this.documentIDs];
    }
    render() {
        const docsTable = document.createElement('table');
        docsTable.setAttribute('id', 'docsTable');
        docsTable.setAttribute('class', 'u-full-width');
        const tHead = document.createElement('thead');
        const thName = document.createElement('th');
        thName.textContent = 'Document Name';
        const thID = document.createElement('th');
        thID.textContent = 'Document ID';
        const thEdit = document.createElement('th');
        const thRemove = document.createElement('th');
        const trHeader = document.createElement('tr');
        trHeader.appendChild(thName);
        trHeader.appendChild(thID);
        trHeader.appendChild(thEdit);
        trHeader.appendChild(thRemove);
        tHead.appendChild(trHeader);
        docsTable.appendChild(tHead);
        const tBody = document.createElement('tbody');
        let editLink = document.createElement('a');
        editLink.setAttribute('class', 'editLink');
        editLink.textContent = 'Edit';
        for (let i = 0; i < this.documentsList.length; i++) {
            const tdName = document.createElement('td');
            const tdID = document.createElement('td');
            const tdEdit = document.createElement('td');
            const tdRemove = document.createElement('td');
            const tr = document.createElement('tr');
            tdName.textContent = `${this.documentsList[i].name}`;
            tdID.textContent = `${this.documentIDs[i]}`;
            tdEdit.innerHTML = `<a class="editLink" href="edit-document.html?id=${this.documentIDs[i]}">EDIT</a>`;
            tdRemove.innerHTML = `<button class="removeBtn ${this.documentIDs[i]}">Remove</button>`;
            tr.appendChild(tdName);
            tr.appendChild(tdID);
            tr.appendChild(tdEdit);
            tr.appendChild(tdRemove);
            tBody.appendChild(tr);
        }
        docsTable.appendChild(tBody);
        return docsTable;
    }
    ;
    static getDocument(id) {
    }
    static removeDocument(id) {
    }
}
exports.DocumentList = DocumentList;


/***/ }),

/***/ "./src/classes/emailField.ts":
/*!***********************************!*\
  !*** ./src/classes/emailField.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
class EmailField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new FieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const emailInput = document.createElement('input');
        emailInput.setAttribute('id', `${this.name.toLowerCase()}`);
        emailInput.setAttribute('name', `${this.name.toLowerCase()}`);
        emailInput.setAttribute('type', `${this.type.toLowerCase()}`);
        const emailField = document.createElement('div');
        emailField.appendChild(this.label.render());
        emailField.appendChild(emailInput);
        return emailField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.EmailField = EmailField;


/***/ }),

/***/ "./src/classes/inputField.ts":
/*!***********************************!*\
  !*** ./src/classes/inputField.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
class InputField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new FieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const textInput = document.createElement('input');
        textInput.setAttribute('id', `${this.name.toLowerCase()}`);
        textInput.setAttribute('name', `${this.name.toLowerCase()}`);
        textInput.setAttribute('type', `${this.type.toLowerCase()}`);
        const inputField = document.createElement('div');
        inputField.appendChild(this.label.render());
        inputField.appendChild(textInput);
        return inputField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.InputField = InputField;


/***/ }),

/***/ "./src/classes/selectField.ts":
/*!************************************!*\
  !*** ./src/classes/selectField.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
class SelectField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new FieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const select = document.createElement('input');
        select.setAttribute('id', `${this.name.toLowerCase()}`);
        select.setAttribute('name', `${this.name.toLowerCase()}`);
        select.setAttribute('type', `${this.type.toLowerCase()}`);
        const selectField = document.createElement('div');
        selectField.appendChild(this.label.render());
        selectField.appendChild(select);
        return selectField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.SelectField = SelectField;


/***/ }),

/***/ "./src/classes/textAreaField.ts":
/*!**************************************!*\
  !*** ./src/classes/textAreaField.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FieldLabel_1 = __webpack_require__(/*! ./FieldLabel */ "./src/classes/FieldLabel.ts");
class TextareaField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new FieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const textarea = document.createElement('input');
        textarea.setAttribute('id', `${this.name.toLowerCase()}`);
        textarea.setAttribute('name', `${this.name.toLowerCase()}`);
        textarea.setAttribute('type', `${this.type.toLowerCase()}`);
        const textareaField = document.createElement('div');
        textareaField.appendChild(this.label.render());
        textareaField.appendChild(textarea);
        return textareaField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.TextareaField = TextareaField;


/***/ }),

/***/ "./src/enums/FieldType.ts":
/*!********************************!*\
  !*** ./src/enums/FieldType.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldType;
(function (FieldType) {
    FieldType["Text"] = "text";
    FieldType["MultiLineText"] = "multilinetext";
    FieldType["Date"] = "date";
    FieldType["Email"] = "email";
    FieldType["Select"] = "select";
    FieldType["Checkbox"] = "checkbox";
})(FieldType = exports.FieldType || (exports.FieldType = {}));


/***/ }),

/***/ "./src/form-list.ts":
/*!**************************!*\
  !*** ./src/form-list.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FormCreator_1 = __webpack_require__(/*! ./classes/FormCreator */ "./src/classes/FormCreator.ts");
const LocStorage_1 = __webpack_require__(/*! ./classes/LocStorage */ "./src/classes/LocStorage.ts");
const documentList_1 = __webpack_require__(/*! ./classes/documentList */ "./src/classes/documentList.ts");
const formList = document.getElementById('formList');
const backBtn = document.getElementById('backBtn');
const formCreator = new FormCreator_1.FormCreator();
formCreator.storage = new LocStorage_1.LocStorage();
window.addEventListener('DOMContentLoaded', function (e) {
    let docList = new documentList_1.DocumentList();
    docList.getDocumentList();
    formList.appendChild(docList.render());
    backBtn.style.display = 'block';
    document.getElementById('docsTable').addEventListener('click', function (e) {
        deleteEntry(e.target);
    });
    e.preventDefault();
});
backBtn.addEventListener('click', function (e) {
    window.location.href = 'index.html';
    e.preventDefault();
});
function deleteEntry(target) {
    if (target.classList.contains('removeBtn')) {
        formCreator.storage.removeDocument(target.parentElement.previousSibling.previousSibling.textContent);
        target.parentElement.parentElement.remove();
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0ZpZWxkTGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Gb3JtQ3JlYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Mb2NTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2NoZWNrYm94RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGF0ZUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2RvY3VtZW50TGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9lbWFpbEZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2lucHV0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvc2VsZWN0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvdGV4dEFyZWFGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW51bXMvRmllbGRUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9mb3JtLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFD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QUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUMzQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLFNBQVMsV0FBVyxDQUFDLE1BQVc7SUFDOUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUMxQyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDN0M7QUFDSCxDQUFDIiwiZmlsZSI6ImZvcm1fbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Zvcm0tbGlzdC50c1wiKTtcbiIsImltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIHN0YXRpYyBkb2N1bWVudElEOiBzdHJpbmcgfCBudWxsO1xuICAgIHN0YXRpYyBhY3RpdmVGb3JtOiBGb3JtO1xuICAgIHN0YXRpYyBhY3RpdmVGaWVsZDogRmllbGQ7XG59XG5cblxuIiwiZXhwb3J0IGNsYXNzIEZpZWxkTGFiZWwge1xyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IEhUTUxMYWJlbEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGEgbGFiZWwgZWxlbWVudFxyXG4gICAgY29uc3QgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnZm9yJ1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBUZXh0Q29udGVudFxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgIHJldHVybiBsYWJlbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybUNyZWF0b3IgfSBmcm9tICcuL0Zvcm1DcmVhdG9yJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBmaWVsZHM6IEZpZWxkW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBmaWVsZHM6IEZpZWxkW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRm9ybUVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBlbGVtZW50XHJcbiAgICBjb25zdCBmb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdpZCdcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGVyIHdpdGggdGhlIG5hbWUgb2YgdGhlIEZvcm1cclxuICAgIGNvbnN0IGhlYWRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgLy8gU2V0IHRoZSBoZWFkZXIgdGV4dCBjb250ZW50IHRvIHRoZSBuYW1lIG9mIHRoZSBGb3JtXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgIC8vIEFwcGVuZCB0aGUgaGVhZGVyXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAvLyBDcmVhdGUgYSBsaW5lYnJlYWtcclxuICAgIGNvbnN0IGxpbmVicmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICAgIC8vIEFwcGVuZCBhIGxpbmVicmVha1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xyXG4gICAgLy8gQXBwZW5kIGZpZWxkc1xyXG4gICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQucmVuZGVyKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVicmVhayk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKEZvcm1DcmVhdG9yLnJlbmRlclN1Ym1pdEJ1dHRvbignc3VibWl0QnRuJywgJ1N1Ym1pdCB0aGUgRm9ybSEnKSk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEYXRhU3RvcmFnZSB9IGZyb20gJy4vRGF0YVN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuLy4uL2VudW1zL0ZpZWxkVHlwZSc7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9GaWVsZCc7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuL2lucHV0RmllbGQnO1xyXG5pbXBvcnQgeyBUZXh0YXJlYUZpZWxkIH0gZnJvbSAnLi90ZXh0QXJlYUZpZWxkJztcclxuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9kYXRlRmllbGQnO1xyXG5pbXBvcnQgeyBFbWFpbEZpZWxkIH0gZnJvbSAnLi9lbWFpbEZpZWxkJztcclxuaW1wb3J0IHsgU2VsZWN0RmllbGQgfSBmcm9tICcuL3NlbGVjdEZpZWxkJztcclxuaW1wb3J0IHsgQ2hlY2tib3hGaWVsZCB9IGZyb20gJy4vY2hlY2tib3hGaWVsZCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL0Zvcm0nO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL0FwcCc7XHJcbmltcG9ydCB7IExvY1N0b3JhZ2UgfSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1DcmVhdG9yIHtcclxuICBzdG9yYWdlOiBMb2NTdG9yYWdlO1xyXG5cclxuICBuZXdGb3JtKG5hbWU6IHN0cmluZykge1xyXG4gICAgQXBwLmFjdGl2ZUZvcm0gPSBuZXcgRm9ybShuYW1lLCBbXSk7XHJcbiAgfVxyXG5cclxuICBuZXdGaWVsZChuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgSW5wdXRGaWVsZChuYW1lLCBGaWVsZFR5cGUuVGV4dCwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnbXVsdGlsaW5ldGV4dCc6XHJcbiAgICAgICAgQXBwLmFjdGl2ZUZpZWxkID0gbmV3IFRleHRhcmVhRmllbGQobmFtZSwgRmllbGRUeXBlLk11bHRpTGluZVRleHQsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgIEFwcC5hY3RpdmVGaWVsZCA9IG5ldyBEYXRlRmllbGQobmFtZSwgRmllbGRUeXBlLkRhdGUsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgRW1haWxGaWVsZChuYW1lLCBGaWVsZFR5cGUuRW1haWwsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgQXBwLmFjdGl2ZUZpZWxkID0gbmV3IFNlbGVjdEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5TZWxlY3QsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgQ2hlY2tib3hGaWVsZChuYW1lLCBGaWVsZFR5cGUuQ2hlY2tib3gsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBwLmFjdGl2ZUZpZWxkLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbmRlclN1Ym1pdEJ1dHRvbihpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICBjb25zdCBzdWJtaXRGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBzdWJtaXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWR9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd2YWx1ZSdcclxuICAgIHN1Ym1pdEZpZWxkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt2YWx1ZX1gKTtcclxuICAgIHJldHVybiBzdWJtaXRGaWVsZFxyXG4gIH1cclxufSIsImltcG9ydCB7IERhdGFTdG9yYWdlIH0gZnJvbSAnLi9kYXRhU3RvcmFnZSc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL2Zvcm0nO1xyXG5pbXBvcnQgeyBEb2MgfSBmcm9tICcuL0RvYyc7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9GaWVsZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jU3RvcmFnZSBpbXBsZW1lbnRzIERhdGFTdG9yYWdlIHtcclxuICBnZXREb2N1bWVudHM8VCBleHRlbmRzIEZvcm0gfCBzdHJpbmc+KGtleTogc3RyaW5nKTogVFtdIHtcclxuICAgIGxldCBvYmplY3RDb250YWluZXI6IFRbXTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpID09PSBudWxsKSB7XHJcbiAgICAgIG9iamVjdENvbnRhaW5lciA9IFtdO1xyXG4gICAgICBjb25zb2xlLmxvZyhvYmplY3RDb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICAgICAgY29uc29sZS5sb2cob2JqZWN0Q29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3RDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBzYXZlRG9jdW1lbnQ8VCBleHRlbmRzIEZvcm0gfCBEb2M+KGRvY3VtZW50OiBULCBrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHRpbWVTdGFtcDogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIGxldCBkb2N1bWVudElEOiBzdHJpbmcgPSBgJHtkb2N1bWVudC5uYW1lfS0ke3RpbWVTdGFtcH1gO1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgbGV0IGtleXNDb250YWluZXI6IHN0cmluZ1tdO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPT09IG51bGwpIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna2V5cycpID09PSBudWxsKSB7XHJcbiAgICAgIGtleXNDb250YWluZXIgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtleXNDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykpO1xyXG4gICAgfVxyXG4gICAgb2JqZWN0Q29udGFpbmVyLnB1c2goZG9jdW1lbnQpO1xyXG4gICAga2V5c0NvbnRhaW5lci5wdXNoKGRvY3VtZW50SUQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3RDb250YWluZXIpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrZXlzJywgSlNPTi5zdHJpbmdpZnkoa2V5c0NvbnRhaW5lcikpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRG9jdW1lbnQ8VCBleHRlbmRzIEZvcm0gfCBEb2M+KGRvY3VtZW50SUQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgbGV0IGtleXNDb250YWluZXI6IHN0cmluZ1tdO1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRzJykgPT09IG51bGwpIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb2N1bWVudHMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykgPT09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJUaGUgYXJyYXkgb2Yga2V5cyBpcyBlbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtleXNDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0NvbnRhaW5lci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoa2V5c0NvbnRhaW5lcltpXSA9PT0gZG9jdW1lbnRJRCkge1xyXG4gICAgICAgIG9iamVjdENvbnRhaW5lci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAga2V5c0NvbnRhaW5lci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZG9jdW1lbnRzJywgSlNPTi5zdHJpbmdpZnkob2JqZWN0Q29udGFpbmVyKSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgna2V5cycsIEpTT04uc3RyaW5naWZ5KGtleXNDb250YWluZXIpKTtcclxuICB9XHJcblxyXG4gIGxvYWREb2N1bWVudDxUIGV4dGVuZHMgRm9ybSB8IERvYz4oZG9jdW1lbnRJRDogc3RyaW5nKToge1xyXG4gICAgZmllbGRzOiBGaWVsZFtdO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gIH0ge1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgbGV0IGtleXNDb250YWluZXI6IHN0cmluZ1tdO1xyXG4gICAgbGV0IGRvY3VtZW50VG9Mb2FkOiB7XHJcbiAgICAgIGZpZWxkczogRmllbGRbXTtcclxuICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvY3VtZW50cycpID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgYXJlIG5vIGRvY3VtZW50cyB0byBsb2FkIVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iamVjdENvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvY3VtZW50cycpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSA9PT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRoZSBhcnJheSBvZiBrZXlzIGlzIGVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5c0NvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQ29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChrZXlzQ29udGFpbmVyW2ldID09PSBkb2N1bWVudElEKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0Q29udGFpbmVyW2ldKTtcclxuICAgICAgICBkb2N1bWVudFRvTG9hZCA9IG9iamVjdENvbnRhaW5lcltpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkb2N1bWVudFRvTG9hZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnQgICAgXHJcbiAgICBjb25zdCBjaGVja0JveElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQm94RmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaGVja0JveEZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgY2hlY2tCb3hGaWVsZC5hcHBlbmRDaGlsZChjaGVja0JveElucHV0KTtcclxuICAgIHJldHVybiBjaGVja0JveEZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlRmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgZGF0ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IGRhdGVGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsLnJlbmRlcigpKTtcclxuICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gICAgcmV0dXJuIGRhdGVGaWVsZDtcclxuICB9XHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBMb2NTdG9yYWdlIH0gZnJvbSAnLi9Mb2NTdG9yYWdlJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudExpc3Qge1xyXG4gIGRvY3VtZW50c0xpc3Q6IEZvcm1bXTtcclxuICBkb2N1bWVudElEczogc3RyaW5nW107XHJcblxyXG4gIC8vIG1ldG9kYSBwb3dpbm5hIGtvcnp5c3RhxIcgeiBrbGFzeSBMb2NTdG9yYWdlIGRvIHBvYnJhbmlhIGxpc3R5IGRva3VtZW50w7N3IGkgemFwYW1pxJl0YW5pYSBqZWogdyB3ZXduLiB3xYJhxZtjaXdvxZtjaSBrbGFzeVxyXG4gIGdldERvY3VtZW50TGlzdCgpOiBbRm9ybVtdLCBzdHJpbmdbXV0ge1xyXG4gICAgbGV0IHN0b3JhZ2UgPSBuZXcgTG9jU3RvcmFnZSgpO1xyXG4gICAgdGhpcy5kb2N1bWVudHNMaXN0ID0gc3RvcmFnZS5nZXREb2N1bWVudHMoJ2RvY3VtZW50cycpO1xyXG4gICAgdGhpcy5kb2N1bWVudElEcyA9IHN0b3JhZ2UuZ2V0RG9jdW1lbnRzKCdrZXlzJyk7XHJcbiAgICByZXR1cm4gW3RoaXMuZG9jdW1lbnRzTGlzdCwgdGhpcy5kb2N1bWVudElEc107XHJcbiAgfVxyXG5cclxuICAvLyAgbWV0b2RhIHBvd2lubmEgd3nFm3dpZXRsYcSHIGxpc3TEmSBkb2t1bWVudMOzdyB3IGZvcm1pZSB0YWJlbGkgemF3aWVyYWrEhWNlaiBpZCBkb2t1bWVudHVcclxuICByZW5kZXIoKTogSFRNTFRhYmxlRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgdGFibGUgZWxlbWVudFxyXG4gICAgY29uc3QgZG9jc1RhYmxlOiBIVE1MVGFibGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJyBhbmQgJ2NsYXNzJ1xyXG4gICAgZG9jc1RhYmxlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZG9jc1RhYmxlJyk7XHJcbiAgICBkb2NzVGFibGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1LWZ1bGwtd2lkdGgnKTtcclxuICAgIC8vIENyZWF0ZSB0aGVhZCBlbGVtZW50XHJcbiAgICBjb25zdCB0SGVhZDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xyXG4gICAgLy8gQ3JlYXRlIHRoIGVsZW1lbnQgZm9yIElEIGNvbHVtblxyXG4gICAgY29uc3QgdGhOYW1lOiBIVE1MSGVhZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgdGhOYW1lLnRleHRDb250ZW50ID0gJ0RvY3VtZW50IE5hbWUnXHJcbiAgICAvLyBDcmVhdGUgdGggZWxlbWVudCBmb3IgSUQgY29sdW1uXHJcbiAgICBjb25zdCB0aElEOiBIVE1MSGVhZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgdGhJRC50ZXh0Q29udGVudCA9ICdEb2N1bWVudCBJRCdcclxuICAgIC8vIENyZWF0ZSB0aCBlbGVtZW50IGZvciBFZGl0IGxpbmsgY29sdW1uXHJcbiAgICBjb25zdCB0aEVkaXQ6IEhUTUxIZWFkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAvLyBDcmVhdGUgdGggZWxlbWVudCBmb3IgcmVtb3ZlIGJ0biBjb2x1bW5cclxuICAgIGNvbnN0IHRoUmVtb3ZlOiBIVE1MSGVhZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgLy8gQ3JlYXRlIHRyIGVsZW1lbnQgZm9yIGhlYWRlclxyXG4gICAgY29uc3QgdHJIZWFkZXI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgdHJIZWFkZXIuYXBwZW5kQ2hpbGQodGhOYW1lKTtcclxuICAgIHRySGVhZGVyLmFwcGVuZENoaWxkKHRoSUQpO1xyXG4gICAgdHJIZWFkZXIuYXBwZW5kQ2hpbGQodGhFZGl0KTtcclxuICAgIHRySGVhZGVyLmFwcGVuZENoaWxkKHRoUmVtb3ZlKTtcclxuICAgIHRIZWFkLmFwcGVuZENoaWxkKHRySGVhZGVyKTtcclxuICAgIGRvY3NUYWJsZS5hcHBlbmRDaGlsZCh0SGVhZCk7XHJcblxyXG4gICAgY29uc3QgdEJvZHk6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcclxuICAgIC8vIENyZWF0ZSBhIGVsZW1lbnQgZm9yIGVkaXQgbGlua1xyXG4gICAgbGV0IGVkaXRMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIC8vIFNldHRpbmcgYXR0cmlidXRlc1xyXG4gICAgZWRpdExpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0TGluaycpO1xyXG4gICAgZWRpdExpbmsudGV4dENvbnRlbnQgPSAnRWRpdCdcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZG9jdW1lbnRzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCB0ZE5hbWU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgY29uc3QgdGRJRDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICBjb25zdCB0ZEVkaXQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgY29uc3QgdGRSZW1vdmU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgY29uc3QgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgICAgdGROYW1lLnRleHRDb250ZW50ID0gYCR7dGhpcy5kb2N1bWVudHNMaXN0W2ldLm5hbWV9YDtcclxuICAgICAgdGRJRC50ZXh0Q29udGVudCA9IGAke3RoaXMuZG9jdW1lbnRJRHNbaV19YDtcclxuICAgICAgdGRFZGl0LmlubmVySFRNTCA9IGA8YSBjbGFzcz1cImVkaXRMaW5rXCIgaHJlZj1cImVkaXQtZG9jdW1lbnQuaHRtbD9pZD0ke3RoaXMuZG9jdW1lbnRJRHNbaV19XCI+RURJVDwvYT5gO1xyXG4gICAgICB0ZFJlbW92ZS5pbm5lckhUTUwgPSBgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZUJ0biAke3RoaXMuZG9jdW1lbnRJRHNbaV19XCI+UmVtb3ZlPC9idXR0b24+YDtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGROYW1lKTtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGRJRCk7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkRWRpdCk7XHJcbiAgICAgIHRyLmFwcGVuZENoaWxkKHRkUmVtb3ZlKTtcclxuICAgICAgdEJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3NUYWJsZS5hcHBlbmRDaGlsZCh0Qm9keSk7XHJcbiAgICByZXR1cm4gZG9jc1RhYmxlO1xyXG4gIH07XHJcblxyXG5cclxuXHJcbiAgc3RhdGljIGdldERvY3VtZW50KGlkOiBzdHJpbmcpIHtcclxuXHJcbiAgfVxyXG4gIHN0YXRpYyByZW1vdmVEb2N1bWVudChpZDogc3RyaW5nKSB7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSBcIi4vRmllbGRMYWJlbFwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi4vZW51bXMvRmllbGRUeXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW1haWxGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBlbWFpbElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsRmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbWFpbEZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgZW1haWxGaWVsZC5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcclxuICAgIHJldHVybiBlbWFpbEZpZWxkO1xyXG4gIH1cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IHRleHRJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdpZCdcclxuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dEZpZWxkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5wdXRGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsLnJlbmRlcigpKTtcclxuICAgIGlucHV0RmllbGQuYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcclxuICAgIHJldHVybiBpbnB1dEZpZWxkO1xyXG4gIH1cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBzZWxlY3Q6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0RmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWxlY3RGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsLnJlbmRlcigpKTtcclxuICAgIHNlbGVjdEZpZWxkLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0RmllbGQ7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhRmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgdGV4dGFyZWE6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3QgdGV4dGFyZWFGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRleHRhcmVhRmllbGQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbC5yZW5kZXIoKSk7XHJcbiAgICB0ZXh0YXJlYUZpZWxkLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuICAgIHJldHVybiB0ZXh0YXJlYUZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJleHBvcnQgZW51bSBGaWVsZFR5cGUge1xyXG4gIFRleHQgPSBcInRleHRcIiwgTXVsdGlMaW5lVGV4dCA9IFwibXVsdGlsaW5ldGV4dFwiLCBEYXRlID0gXCJkYXRlXCIsIEVtYWlsID0gXCJlbWFpbFwiLCBTZWxlY3QgPSBcInNlbGVjdFwiLCBDaGVja2JveCA9IFwiY2hlY2tib3hcIlxyXG59IiwiaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuL2NsYXNzZXMvRGF0YVN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBGb3JtQ3JlYXRvciB9IGZyb20gJy4vY2xhc3Nlcy9Gb3JtQ3JlYXRvcic7XHJcbmltcG9ydCB7IExvY1N0b3JhZ2UgfSBmcm9tICcuL2NsYXNzZXMvTG9jU3RvcmFnZSc7XHJcbmltcG9ydCB7IERvY3VtZW50TGlzdCB9IGZyb20gXCIuL2NsYXNzZXMvZG9jdW1lbnRMaXN0XCI7XHJcblxyXG5jb25zdCBmb3JtTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtTGlzdCcpO1xyXG5jb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tCdG4nKTtcclxuXHJcbmNvbnN0IGZvcm1DcmVhdG9yID0gbmV3IEZvcm1DcmVhdG9yKCk7XHJcbmZvcm1DcmVhdG9yLnN0b3JhZ2UgPSBuZXcgTG9jU3RvcmFnZSgpO1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGUpIHtcclxuICBsZXQgZG9jTGlzdCA9IG5ldyBEb2N1bWVudExpc3QoKTtcclxuICBkb2NMaXN0LmdldERvY3VtZW50TGlzdCgpO1xyXG4gIGZvcm1MaXN0LmFwcGVuZENoaWxkKGRvY0xpc3QucmVuZGVyKCkpO1xyXG4gIGJhY2tCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2NzVGFibGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBkZWxldGVFbnRyeShlLnRhcmdldCk7XHJcbiAgfSlcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG5iYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdpbmRleC5odG1sJztcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBkZWxldGVFbnRyeSh0YXJnZXQ6IGFueSkge1xyXG4gIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmVCdG4nKSkge1xyXG4gICAgZm9ybUNyZWF0b3Iuc3RvcmFnZS5yZW1vdmVEb2N1bWVudCh0YXJnZXQucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50KTtcclxuICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9