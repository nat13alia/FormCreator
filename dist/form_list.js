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
    getValues() {
        let values;
        this.fields.forEach(field => {
            values.push(field.getValue());
        });
        return values;
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
    newField(name, type, options) {
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
                App_1.App.activeField = new selectField_1.SelectField(name, FieldType_1.FieldType.Select, '', options);
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
    static renderInputForOptions() {
        const textInput = document.createElement('input');
        textInput.setAttribute('type', 'text');
        textInput.setAttribute('id', 'optionInput');
        textInput.setAttribute('class', 'optionInput u-full-width');
        textInput.setAttribute('placeholder', 'Enter the Option');
        return textInput;
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
        let documentID = `${document.name.replace(/\s/g, '')}-${timeStamp}`;
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
    constructor(name, type, value, options) {
        this.name = name;
        this.label = new FieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
        this.options = options;
    }
    render() {
        const select = document.createElement('select');
        select.setAttribute('id', `${this.name.toLowerCase()}`);
        select.setAttribute('name', `${this.name.toLowerCase()}`);
        select.setAttribute('type', `${this.type.toLowerCase()}`);
        const selectField = document.createElement('div');
        selectField.appendChild(this.label.render());
        console.log(this.options);
        this.options.forEach(optionValue => {
            const option = document.createElement('option');
            select.setAttribute('value', `${optionValue.toLowerCase()}`);
            option.textContent = optionValue;
            select.appendChild(option);
        });
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
        const textarea = document.createElement('textarea');
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
const formList = document.querySelector('.formList');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0ZpZWxkTGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Gb3JtQ3JlYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Mb2NTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2NoZWNrYm94RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGF0ZUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2RvY3VtZW50TGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9lbWFpbEZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2lucHV0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvc2VsZWN0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvdGV4dEFyZWFGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW51bXMvRmllbGRUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9mb3JtLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFD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QyxjQUFjLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztJQUMzQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLFNBQVMsV0FBVyxDQUFDLE1BQVc7SUFDOUIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUMxQyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDN0M7QUFDSCxDQUFDIiwiZmlsZSI6ImZvcm1fbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Zvcm0tbGlzdC50c1wiKTtcbiIsImltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIHN0YXRpYyBkb2N1bWVudElEOiBzdHJpbmcgfCBudWxsO1xuICAgIHN0YXRpYyBhY3RpdmVGb3JtOiBGb3JtO1xuICAgIHN0YXRpYyBhY3RpdmVGaWVsZDogRmllbGQ7XG59XG5cblxuIiwiZXhwb3J0IGNsYXNzIEZpZWxkTGFiZWwge1xyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IEhUTUxMYWJlbEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGEgbGFiZWwgZWxlbWVudFxyXG4gICAgY29uc3QgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnZm9yJ1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBUZXh0Q29udGVudFxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgIHJldHVybiBsYWJlbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybUNyZWF0b3IgfSBmcm9tICcuL0Zvcm1DcmVhdG9yJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBmaWVsZHM6IEZpZWxkW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBmaWVsZHM6IEZpZWxkW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRm9ybUVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBlbGVtZW50XHJcbiAgICBjb25zdCBmb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdpZCdcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGVyIHdpdGggdGhlIG5hbWUgb2YgdGhlIEZvcm1cclxuICAgIGNvbnN0IGhlYWRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgLy8gU2V0IHRoZSBoZWFkZXIgdGV4dCBjb250ZW50IHRvIHRoZSBuYW1lIG9mIHRoZSBGb3JtXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgIC8vIEFwcGVuZCB0aGUgaGVhZGVyXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAvLyBDcmVhdGUgYSBsaW5lYnJlYWtcclxuICAgIGNvbnN0IGxpbmVicmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICAgIC8vIEFwcGVuZCBhIGxpbmVicmVha1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xyXG4gICAgLy8gQXBwZW5kIGZpZWxkc1xyXG4gICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQucmVuZGVyKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVicmVhayk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKEZvcm1DcmVhdG9yLnJlbmRlclN1Ym1pdEJ1dHRvbignc3VibWl0QnRuJywgJ1N1Ym1pdCB0aGUgRm9ybSEnKSk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlcygpOiBzdHJpbmdbXSB7XHJcbiAgICBsZXQgdmFsdWVzOiBzdHJpbmdbXTtcclxuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICB2YWx1ZXMucHVzaChmaWVsZC5nZXRWYWx1ZSgpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHZhbHVlcztcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEYXRhU3RvcmFnZSB9IGZyb20gJy4vRGF0YVN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuLy4uL2VudW1zL0ZpZWxkVHlwZSc7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9GaWVsZCc7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuL2lucHV0RmllbGQnO1xyXG5pbXBvcnQgeyBUZXh0YXJlYUZpZWxkIH0gZnJvbSAnLi90ZXh0QXJlYUZpZWxkJztcclxuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9kYXRlRmllbGQnO1xyXG5pbXBvcnQgeyBFbWFpbEZpZWxkIH0gZnJvbSAnLi9lbWFpbEZpZWxkJztcclxuaW1wb3J0IHsgU2VsZWN0RmllbGQgfSBmcm9tICcuL3NlbGVjdEZpZWxkJztcclxuaW1wb3J0IHsgQ2hlY2tib3hGaWVsZCB9IGZyb20gJy4vY2hlY2tib3hGaWVsZCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL0Zvcm0nO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL0FwcCc7XHJcbmltcG9ydCB7IExvY1N0b3JhZ2UgfSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1DcmVhdG9yIHtcclxuICBzdG9yYWdlOiBMb2NTdG9yYWdlO1xyXG5cclxuICBuZXdGb3JtKG5hbWU6IHN0cmluZykge1xyXG4gICAgQXBwLmFjdGl2ZUZvcm0gPSBuZXcgRm9ybShuYW1lLCBbXSk7XHJcbiAgfVxyXG5cclxuICBuZXdGaWVsZChuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZ1tdKTogSFRNTEVsZW1lbnQge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgIEFwcC5hY3RpdmVGaWVsZCA9IG5ldyBJbnB1dEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5UZXh0LCAnJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdtdWx0aWxpbmV0ZXh0JzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgVGV4dGFyZWFGaWVsZChuYW1lLCBGaWVsZFR5cGUuTXVsdGlMaW5lVGV4dCwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgICAgQXBwLmFjdGl2ZUZpZWxkID0gbmV3IERhdGVGaWVsZChuYW1lLCBGaWVsZFR5cGUuRGF0ZSwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIEFwcC5hY3RpdmVGaWVsZCA9IG5ldyBFbWFpbEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5FbWFpbCwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnc2VsZWN0JzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgU2VsZWN0RmllbGQobmFtZSwgRmllbGRUeXBlLlNlbGVjdCwgJycsIG9wdGlvbnMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnY2hlY2tib3gnOlxyXG4gICAgICAgIEFwcC5hY3RpdmVGaWVsZCA9IG5ldyBDaGVja2JveEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5DaGVja2JveCwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBBcHAuYWN0aXZlRmllbGQucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVyU3VibWl0QnV0dG9uKGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIGNvbnN0IHN1Ym1pdEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBzdWJtaXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdpZCdcclxuICAgIHN1Ym1pdEZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpZH1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3ZhbHVlJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3ZhbHVlfWApO1xyXG4gICAgcmV0dXJuIHN1Ym1pdEZpZWxkXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVySW5wdXRGb3JPcHRpb25zKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgY29uc3QgdGV4dElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3B0aW9uSW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2NsYXNzJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb3B0aW9uSW5wdXQgdS1mdWxsLXdpZHRoJyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdjbGFzcydcclxuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHRoZSBPcHRpb24nKTtcclxuICAgIHJldHVybiB0ZXh0SW5wdXQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuL2RhdGFTdG9yYWdlJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4vZm9ybSc7XHJcbmltcG9ydCB7IERvYyB9IGZyb20gJy4vRG9jJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0ZpZWxkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NTdG9yYWdlIGltcGxlbWVudHMgRGF0YVN0b3JhZ2Uge1xyXG4gIGdldERvY3VtZW50czxUIGV4dGVuZHMgRm9ybSB8IHN0cmluZz4oa2V5OiBzdHJpbmcpOiBUW10ge1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPT09IG51bGwpIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gW107XHJcbiAgICAgIGNvbnNvbGUubG9nKG9iamVjdENvbnRhaW5lcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhvYmplY3RDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHNhdmVEb2N1bWVudDxUIGV4dGVuZHMgRm9ybSB8IERvYz4oZG9jdW1lbnQ6IFQsIGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgdGltZVN0YW1wOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgLy8gdmFyIHN0ciA9IHN0ci47XHJcbiAgICAvLyBkb2N1bWVudC53cml0ZShzdHIuKTtcclxuICAgIGxldCBkb2N1bWVudElEOiBzdHJpbmcgPSBgJHtkb2N1bWVudC5uYW1lLnJlcGxhY2UoL1xccy9nLCAnJyl9LSR7dGltZVN0YW1wfWA7XHJcbiAgICBsZXQgb2JqZWN0Q29udGFpbmVyOiBUW107XHJcbiAgICBsZXQga2V5c0NvbnRhaW5lcjogc3RyaW5nW107XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA9PT0gbnVsbCkge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iamVjdENvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykgPT09IG51bGwpIHtcclxuICAgICAga2V5c0NvbnRhaW5lciA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5c0NvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSk7XHJcbiAgICB9XHJcbiAgICBvYmplY3RDb250YWluZXIucHVzaChkb2N1bWVudCk7XHJcbiAgICBrZXlzQ29udGFpbmVyLnB1c2goZG9jdW1lbnRJRCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG9iamVjdENvbnRhaW5lcikpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2tleXMnLCBKU09OLnN0cmluZ2lmeShrZXlzQ29udGFpbmVyKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVEb2N1bWVudDxUIGV4dGVuZHMgRm9ybSB8IERvYz4oZG9jdW1lbnRJRDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgb2JqZWN0Q29udGFpbmVyOiBUW107XHJcbiAgICBsZXQga2V5c0NvbnRhaW5lcjogc3RyaW5nW107XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb2N1bWVudHMnKSA9PT0gbnVsbCkge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iamVjdENvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvY3VtZW50cycpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSA9PT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRoZSBhcnJheSBvZiBrZXlzIGlzIGVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5c0NvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQ29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChrZXlzQ29udGFpbmVyW2ldID09PSBkb2N1bWVudElEKSB7XHJcbiAgICAgICAgb2JqZWN0Q29udGFpbmVyLnNwbGljZShpLCAxKTtcclxuICAgICAgICBrZXlzQ29udGFpbmVyLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb2N1bWVudHMnLCBKU09OLnN0cmluZ2lmeShvYmplY3RDb250YWluZXIpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrZXlzJywgSlNPTi5zdHJpbmdpZnkoa2V5c0NvbnRhaW5lcikpO1xyXG4gIH1cclxuXHJcbiAgbG9hZERvY3VtZW50PFQgZXh0ZW5kcyBGb3JtIHwgRG9jPihkb2N1bWVudElEOiBzdHJpbmcpOiB7XHJcbiAgICBmaWVsZHM6IEZpZWxkW107XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgfSB7XHJcbiAgICBsZXQgb2JqZWN0Q29udGFpbmVyOiBUW107XHJcbiAgICBsZXQga2V5c0NvbnRhaW5lcjogc3RyaW5nW107XHJcbiAgICBsZXQgZG9jdW1lbnRUb0xvYWQ6IHtcclxuICAgICAgZmllbGRzOiBGaWVsZFtdO1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRzJykgPT09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJUaGVyZSBhcmUgbm8gZG9jdW1lbnRzIHRvIGxvYWQhXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna2V5cycpID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFycmF5IG9mIGtleXMgaXMgZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBrZXlzQ29udGFpbmVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna2V5cycpKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNDb250YWluZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGtleXNDb250YWluZXJbaV0gPT09IGRvY3VtZW50SUQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvYmplY3RDb250YWluZXJbaV0pO1xyXG4gICAgICAgIGRvY3VtZW50VG9Mb2FkID0gb2JqZWN0Q29udGFpbmVyW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRvY3VtZW50VG9Mb2FkO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94RmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudCAgICBcclxuICAgIGNvbnN0IGNoZWNrQm94SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIGNoZWNrQm94SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tCb3hGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWNrQm94RmllbGQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbC5yZW5kZXIoKSk7XHJcbiAgICBjaGVja0JveEZpZWxkLmFwcGVuZENoaWxkKGNoZWNrQm94SW5wdXQpO1xyXG4gICAgcmV0dXJuIGNoZWNrQm94RmllbGQ7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBkYXRlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3QgZGF0ZUZpZWxkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgICByZXR1cm4gZGF0ZUZpZWxkO1xyXG4gIH1cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IExvY1N0b3JhZ2UgfSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vZm9ybVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50TGlzdCB7XHJcbiAgZG9jdW1lbnRzTGlzdDogRm9ybVtdO1xyXG4gIGRvY3VtZW50SURzOiBzdHJpbmdbXTtcclxuXHJcbiAgLy8gbWV0b2RhIHBvd2lubmEga29yenlzdGHEhyB6IGtsYXN5IExvY1N0b3JhZ2UgZG8gcG9icmFuaWEgbGlzdHkgZG9rdW1lbnTDs3cgaSB6YXBhbWnEmXRhbmlhIGplaiB3IHdld24uIHfFgmHFm2Npd2/Fm2NpIGtsYXN5XHJcbiAgZ2V0RG9jdW1lbnRMaXN0KCk6IFtGb3JtW10sIHN0cmluZ1tdXSB7XHJcbiAgICBsZXQgc3RvcmFnZSA9IG5ldyBMb2NTdG9yYWdlKCk7XHJcbiAgICB0aGlzLmRvY3VtZW50c0xpc3QgPSBzdG9yYWdlLmdldERvY3VtZW50cygnZG9jdW1lbnRzJyk7XHJcbiAgICB0aGlzLmRvY3VtZW50SURzID0gc3RvcmFnZS5nZXREb2N1bWVudHMoJ2tleXMnKTtcclxuICAgIHJldHVybiBbdGhpcy5kb2N1bWVudHNMaXN0LCB0aGlzLmRvY3VtZW50SURzXTtcclxuICB9XHJcblxyXG4gIC8vICBtZXRvZGEgcG93aW5uYSB3ecWbd2lldGxhxIcgbGlzdMSZIGRva3VtZW50w7N3IHcgZm9ybWllIHRhYmVsaSB6YXdpZXJhasSFY2VqIGlkIGRva3VtZW50dVxyXG4gIHJlbmRlcigpOiBIVE1MVGFibGVFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSB0YWJsZSBlbGVtZW50XHJcbiAgICBjb25zdCBkb2NzVGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnaWQnIGFuZCAnY2xhc3MnXHJcbiAgICBkb2NzVGFibGUuc2V0QXR0cmlidXRlKCdpZCcsICdkb2NzVGFibGUnKTtcclxuICAgIGRvY3NUYWJsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3UtZnVsbC13aWR0aCcpO1xyXG4gICAgLy8gQ3JlYXRlIHRoZWFkIGVsZW1lbnRcclxuICAgIGNvbnN0IHRIZWFkOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XHJcbiAgICAvLyBDcmVhdGUgdGggZWxlbWVudCBmb3IgSUQgY29sdW1uXHJcbiAgICBjb25zdCB0aE5hbWU6IEhUTUxIZWFkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICB0aE5hbWUudGV4dENvbnRlbnQgPSAnRG9jdW1lbnQgTmFtZSdcclxuICAgIC8vIENyZWF0ZSB0aCBlbGVtZW50IGZvciBJRCBjb2x1bW5cclxuICAgIGNvbnN0IHRoSUQ6IEhUTUxIZWFkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICB0aElELnRleHRDb250ZW50ID0gJ0RvY3VtZW50IElEJ1xyXG4gICAgLy8gQ3JlYXRlIHRoIGVsZW1lbnQgZm9yIEVkaXQgbGluayBjb2x1bW5cclxuICAgIGNvbnN0IHRoRWRpdDogSFRNTEhlYWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgIC8vIENyZWF0ZSB0aCBlbGVtZW50IGZvciByZW1vdmUgYnRuIGNvbHVtblxyXG4gICAgY29uc3QgdGhSZW1vdmU6IEhUTUxIZWFkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAvLyBDcmVhdGUgdHIgZWxlbWVudCBmb3IgaGVhZGVyXHJcbiAgICBjb25zdCB0ckhlYWRlcjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICB0ckhlYWRlci5hcHBlbmRDaGlsZCh0aE5hbWUpO1xyXG4gICAgdHJIZWFkZXIuYXBwZW5kQ2hpbGQodGhJRCk7XHJcbiAgICB0ckhlYWRlci5hcHBlbmRDaGlsZCh0aEVkaXQpO1xyXG4gICAgdHJIZWFkZXIuYXBwZW5kQ2hpbGQodGhSZW1vdmUpO1xyXG4gICAgdEhlYWQuYXBwZW5kQ2hpbGQodHJIZWFkZXIpO1xyXG4gICAgZG9jc1RhYmxlLmFwcGVuZENoaWxkKHRIZWFkKTtcclxuXHJcbiAgICBjb25zdCB0Qm9keTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG4gICAgLy8gQ3JlYXRlIGEgZWxlbWVudCBmb3IgZWRpdCBsaW5rXHJcbiAgICBsZXQgZWRpdExpbms6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgLy8gU2V0dGluZyBhdHRyaWJ1dGVzXHJcbiAgICBlZGl0TGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXRMaW5rJyk7XHJcbiAgICBlZGl0TGluay50ZXh0Q29udGVudCA9ICdFZGl0J1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb2N1bWVudHNMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHRkTmFtZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICBjb25zdCB0ZElEOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgIGNvbnN0IHRkRWRpdDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICBjb25zdCB0ZFJlbW92ZTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICBjb25zdCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcblxyXG4gICAgICB0ZE5hbWUudGV4dENvbnRlbnQgPSBgJHt0aGlzLmRvY3VtZW50c0xpc3RbaV0ubmFtZX1gO1xyXG4gICAgICB0ZElELnRleHRDb250ZW50ID0gYCR7dGhpcy5kb2N1bWVudElEc1tpXX1gO1xyXG4gICAgICB0ZEVkaXQuaW5uZXJIVE1MID0gYDxhIGNsYXNzPVwiZWRpdExpbmtcIiBocmVmPVwiZWRpdC1kb2N1bWVudC5odG1sP2lkPSR7dGhpcy5kb2N1bWVudElEc1tpXX1cIj5FRElUPC9hPmA7XHJcbiAgICAgIHRkUmVtb3ZlLmlubmVySFRNTCA9IGA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlQnRuICR7dGhpcy5kb2N1bWVudElEc1tpXX1cIj5SZW1vdmU8L2J1dHRvbj5gO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZE5hbWUpO1xyXG4gICAgICB0ci5hcHBlbmRDaGlsZCh0ZElEKTtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGRFZGl0KTtcclxuICAgICAgdHIuYXBwZW5kQ2hpbGQodGRSZW1vdmUpO1xyXG4gICAgICB0Qm9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jc1RhYmxlLmFwcGVuZENoaWxkKHRCb2R5KTtcclxuICAgIHJldHVybiBkb2NzVGFibGU7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuICBzdGF0aWMgZ2V0RG9jdW1lbnQoaWQ6IHN0cmluZykge1xyXG5cclxuICB9XHJcbiAgc3RhdGljIHJlbW92ZURvY3VtZW50KGlkOiBzdHJpbmcpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IGVtYWlsSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3QgZW1haWxGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVtYWlsRmllbGQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbC5yZW5kZXIoKSk7XHJcbiAgICBlbWFpbEZpZWxkLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xyXG4gICAgcmV0dXJuIGVtYWlsRmllbGQ7XHJcbiAgfVxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSBcIi4vRmllbGRMYWJlbFwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi4vZW51bXMvRmllbGRUeXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgdGV4dElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnB1dEZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgaW5wdXRGaWVsZC5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xyXG4gICAgcmV0dXJuIGlucHV0RmllbGQ7XHJcbiAgfVxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBvcHRpb25zOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3Qgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0RmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWxlY3RGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsLnJlbmRlcigpKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9ucyk7XHJcbiAgICAvLyBBZGQgb3B0aW9uc1xyXG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xyXG4gICAgICAvLyBDcmVhdGUgb3B0aW9uIGVsZW1lbnRcclxuICAgICAgY29uc3Qgb3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAvLyBBZGQgYXR0cmlidXRlICd2YWx1ZSdcclxuICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtvcHRpb25WYWx1ZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgICAvLyBBZGQgYXR0cmlidXRlICd2YWx1ZSdcclxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVmFsdWU7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSlcclxuICAgIHNlbGVjdEZpZWxkLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0RmllbGQ7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IHRleHRhcmVhRmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0YXJlYUZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgdGV4dGFyZWFGaWVsZC5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcbiAgICByZXR1cm4gdGV4dGFyZWFGaWVsZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGVudW0gRmllbGRUeXBlIHtcclxuICBUZXh0ID0gXCJ0ZXh0XCIsIE11bHRpTGluZVRleHQgPSBcIm11bHRpbGluZXRleHRcIiwgRGF0ZSA9IFwiZGF0ZVwiLCBFbWFpbCA9IFwiZW1haWxcIiwgU2VsZWN0ID0gXCJzZWxlY3RcIiwgQ2hlY2tib3ggPSBcImNoZWNrYm94XCJcclxufSIsImltcG9ydCB7IERhdGFTdG9yYWdlIH0gZnJvbSAnLi9jbGFzc2VzL0RhdGFTdG9yYWdlJztcclxuaW1wb3J0IHsgRm9ybUNyZWF0b3IgfSBmcm9tICcuL2NsYXNzZXMvRm9ybUNyZWF0b3InO1xyXG5pbXBvcnQgeyBMb2NTdG9yYWdlIH0gZnJvbSAnLi9jbGFzc2VzL0xvY1N0b3JhZ2UnO1xyXG5pbXBvcnQgeyBEb2N1bWVudExpc3QgfSBmcm9tIFwiLi9jbGFzc2VzL2RvY3VtZW50TGlzdFwiO1xyXG5cclxuY29uc3QgZm9ybUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUxpc3QnKTtcclxuY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrQnRuJyk7XHJcblxyXG5jb25zdCBmb3JtQ3JlYXRvciA9IG5ldyBGb3JtQ3JlYXRvcigpO1xyXG5mb3JtQ3JlYXRvci5zdG9yYWdlID0gbmV3IExvY1N0b3JhZ2UoKTtcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgbGV0IGRvY0xpc3QgPSBuZXcgRG9jdW1lbnRMaXN0KCk7XHJcbiAgZG9jTGlzdC5nZXREb2N1bWVudExpc3QoKTtcclxuICBmb3JtTGlzdC5hcHBlbmRDaGlsZChkb2NMaXN0LnJlbmRlcigpKTtcclxuICBiYWNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jc1RhYmxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZGVsZXRlRW50cnkoZS50YXJnZXQpO1xyXG4gIH0pXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KVxyXG5cclxuYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCc7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlRW50cnkodGFyZ2V0OiBhbnkpIHtcclxuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlQnRuJykpIHtcclxuICAgIGZvcm1DcmVhdG9yLnN0b3JhZ2UucmVtb3ZlRG9jdW1lbnQodGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudCk7XHJcbiAgICB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==