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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/edit-document.ts");
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

/***/ "./src/edit-document.ts":
/*!******************************!*\
  !*** ./src/edit-document.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __webpack_require__(/*! ./classes/App */ "./src/classes/App.ts");
const FormCreator_1 = __webpack_require__(/*! ./classes/FormCreator */ "./src/classes/FormCreator.ts");
const LocStorage_1 = __webpack_require__(/*! ./classes/LocStorage */ "./src/classes/LocStorage.ts");
const backBtn = document.getElementById('backBtn');
const container = document.querySelector('.container');
const submitBtn = document.querySelector('#submitBtn');
const formCreator = new FormCreator_1.FormCreator();
formCreator.storage = new LocStorage_1.LocStorage();
let docID = window.location.search.substr(4);
let doc;
window.addEventListener('DOMContentLoaded', function (e) {
    backBtn.style.display = 'block';
    doc = formCreator.storage.loadDocument(docID);
    formCreator.newForm(doc.name);
    container.insertBefore(App_1.App.activeForm.render(), backBtn);
    const form = document.getElementById(`${App_1.App.activeForm.name.toLowerCase()}`);
    doc.fields.forEach(field => {
        const submitBtn = document.querySelector('#submitBtn');
        if (field.type === 'select') {
            form.insertBefore(formCreator.newField(field.name, field.type, field.options), submitBtn);
        }
        form.insertBefore(formCreator.newField(field.name, field.type), submitBtn);
    });
    form.addEventListener('submit', function (e) {
        console.log(App_1.App.activeForm.getValues());
        window.location.href = 'form-list.html';
        e.preventDefault();
    });
});
backBtn.addEventListener('click', function (e) {
    window.location.href = 'index.html';
    e.preventDefault();
});


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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0ZpZWxkTGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Gb3JtQ3JlYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Mb2NTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2NoZWNrYm94RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGF0ZUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2VtYWlsRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvaW5wdXRGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9zZWxlY3RGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy90ZXh0QXJlYUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9lZGl0LWRvY3VtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9lbnVtcy9GaWVsZFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBLE1BQWEsR0FBRztDQUlmO0FBSkQsa0JBSUM7Ozs7Ozs7Ozs7Ozs7OztBQ1BELE1BQWEsVUFBVTtJQUdyQixZQUFZLElBQVk7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELE1BQU07UUFFSixNQUFNLEtBQUssR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhELEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0Y7QUFoQkQsZ0NBZ0JDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkQsK0ZBQTRDO0FBRzVDLE1BQWEsSUFBSTtJQUlmLFlBQVksSUFBWSxFQUFFLE1BQWU7UUFGekMsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUduQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTTtRQUVKLE1BQU0sSUFBSSxHQUFvQixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdEQsTUFBTSxNQUFNLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekQsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUFXLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNsRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxNQUFnQixDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUF4Q0Qsb0JBd0NDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQ0QsZ0dBQWlEO0FBRWpELDRGQUEwQztBQUMxQyxxR0FBZ0Q7QUFDaEQseUZBQXdDO0FBQ3hDLDRGQUEwQztBQUMxQywrRkFBNEM7QUFDNUMscUdBQWdEO0FBQ2hELDBFQUE4QjtBQUM5Qix1RUFBNEI7QUFHNUIsTUFBYSxXQUFXO0lBR3RCLE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLFNBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWSxFQUFFLElBQVksRUFBRSxPQUFrQjtRQUNyRCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssTUFBTTtnQkFDVCxTQUFHLENBQUMsV0FBVyxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzNELE1BQU07WUFFUixLQUFLLGVBQWU7Z0JBQ2xCLFNBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxxQkFBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDdkUsTUFBTTtZQUVSLEtBQUssTUFBTTtnQkFDVCxTQUFHLENBQUMsV0FBVyxHQUFHLElBQUkscUJBQVMsQ0FBQyxJQUFJLEVBQUUscUJBQVMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzFELE1BQU07WUFFUixLQUFLLE9BQU87Z0JBQ1YsU0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxFQUFFLHFCQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxNQUFNO1lBRVIsS0FBSyxRQUFRO2dCQUNYLFNBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZFLE1BQU07WUFFUixLQUFLLFVBQVU7Z0JBQ2IsU0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLDZCQUFhLENBQUMsSUFBSSxFQUFFLHFCQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxNQUFNO1lBRVI7Z0JBQ0UsTUFBTTtTQUNUO1FBQ0QsT0FBTyxTQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsRUFBVSxFQUFFLEtBQWE7UUFDakQsTUFBTSxXQUFXLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdEUsV0FBVyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFM0MsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhDLFdBQVcsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM5QyxPQUFPLFdBQVc7SUFDcEIsQ0FBQztJQUVELE1BQU0sQ0FBQyxxQkFBcUI7UUFDMUIsTUFBTSxTQUFTLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEUsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFdkMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFNUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUU1RCxTQUFTLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQTlERCxrQ0E4REM7Ozs7Ozs7Ozs7Ozs7OztBQ3RFRCxNQUFhLFVBQVU7SUFDckIsWUFBWSxDQUEwQixHQUFXO1FBQy9DLElBQUksZUFBb0IsQ0FBQztRQUN6QixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3RDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWSxDQUF1QixRQUFXLEVBQUUsR0FBVztRQUN6RCxJQUFJLFNBQVMsR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFHbkMsSUFBSSxVQUFVLEdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUM7UUFDNUUsSUFBSSxlQUFvQixDQUFDO1FBQ3pCLElBQUksYUFBdUIsQ0FBQztRQUM1QixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3RDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNMLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUVELElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDekMsYUFBYSxHQUFHLEVBQUUsQ0FBQztTQUNwQjthQUFNO1lBQ0wsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQixhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUMzRCxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGNBQWMsQ0FBdUIsVUFBa0I7UUFDckQsSUFBSSxlQUFvQixDQUFDO1FBQ3pCLElBQUksYUFBdUIsQ0FBQztRQUU1QixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzlDLGVBQWUsR0FBRyxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNMLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQ25DLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QjtTQUNGO1FBRUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ25FLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsWUFBWSxDQUF1QixVQUFrQjtRQUluRCxJQUFJLGVBQW9CLENBQUM7UUFDekIsSUFBSSxhQUF1QixDQUFDO1FBQzVCLElBQUksY0FHSCxDQUFDO1FBRUYsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNMLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUU7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLGNBQWMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckM7U0FDRjtRQUVELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Q0FDRjtBQWhHRCxnQ0FnR0M7Ozs7Ozs7Ozs7Ozs7OztBQ3BHRCw0RkFBMEM7QUFHMUMsTUFBYSxhQUFhO0lBTXhCLFlBQVksSUFBWSxFQUFFLElBQWUsRUFBRSxLQUFhO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNO1FBRUosTUFBTSxhQUFhLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEUsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUvRCxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpFLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakUsTUFBTSxhQUFhLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDL0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN6QyxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQXFCLENBQUM7UUFDeEYsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQWhDRCxzQ0FnQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ25DRCw0RkFBMEM7QUFHMUMsTUFBYSxTQUFTO0lBTXBCLFlBQVksSUFBWSxFQUFFLElBQWUsRUFBRSxLQUFhO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNO1FBRUosTUFBTSxTQUFTLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEUsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUzRCxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTdELFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFN0QsTUFBTSxTQUFTLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDM0MsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQXdCLENBQUM7UUFDM0YsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQS9CRCw4QkErQkM7Ozs7Ozs7Ozs7Ozs7OztBQ2xDRCw0RkFBMEM7QUFHMUMsTUFBYSxVQUFVO0lBTXJCLFlBQVksSUFBWSxFQUFFLElBQWUsRUFBRSxLQUFhO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNO1FBRUosTUFBTSxVQUFVLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckUsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU1RCxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTlELFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFOUQsTUFBTSxVQUFVLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDNUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQXdCLENBQUM7UUFDM0YsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQS9CRCxnQ0ErQkM7Ozs7Ozs7Ozs7Ozs7OztBQ2xDRCw0RkFBMEM7QUFHMUMsTUFBYSxVQUFVO0lBTXJCLFlBQVksSUFBWSxFQUFFLElBQWUsRUFBRSxLQUFhO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxNQUFNO1FBRUosTUFBTSxTQUFTLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEUsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUzRCxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTdELFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFN0QsTUFBTSxVQUFVLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDNUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBQ0QsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQXFCLENBQUM7UUFDeEYsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQWhDRCxnQ0FnQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ25DRCw0RkFBMEM7QUFHMUMsTUFBYSxXQUFXO0lBT3RCLFlBQVksSUFBWSxFQUFFLElBQWUsRUFBRSxLQUFhLEVBQUUsT0FBaUI7UUFDekUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUNELE1BQU07UUFFSixNQUFNLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuRSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFMUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUxRCxNQUFNLFdBQVcsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUVqQyxNQUFNLE1BQU0sR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVuRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFN0QsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDakMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUM7UUFDRixXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBc0IsQ0FBQztRQUN6RixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBN0NELGtDQTZDQzs7Ozs7Ozs7Ozs7Ozs7O0FDaERELDRGQUEwQztBQUcxQyxNQUFhLGFBQWE7SUFNeEIsWUFBWSxJQUFZLEVBQUUsSUFBZSxFQUFFLEtBQWE7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELE1BQU07UUFFSixNQUFNLFFBQVEsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV6RSxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFELFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFNUQsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU1RCxNQUFNLGFBQWEsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwRSxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMvQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBd0IsQ0FBQztRQUMzRixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBaENELHNDQWdDQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNELCtFQUFvQztBQUNwQyx1R0FBb0Q7QUFDcEQsb0dBQWtEO0FBR2xELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFzQixDQUFDO0FBQ3hFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFtQixDQUFDO0FBQ3pFLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFxQixDQUFDO0FBRTNFLE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQ3RDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFFdkMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLElBQUksR0FHSCxDQUFDO0FBR0YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQztJQUNyRCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDaEMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6RCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsU0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBb0IsQ0FBQztJQUNoRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN6QixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBcUIsQ0FBQztRQUMzRSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzNGO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzdFLENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFDeEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBR0gsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDM0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzdDRixJQUFZLFNBRVg7QUFGRCxXQUFZLFNBQVM7SUFDbkIsMEJBQWE7SUFBRSw0Q0FBK0I7SUFBRSwwQkFBYTtJQUFFLDRCQUFlO0lBQUUsOEJBQWlCO0lBQUUsa0NBQXFCO0FBQzFILENBQUMsRUFGVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUVwQiIsImZpbGUiOiJlZGl0X2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZWRpdC1kb2N1bWVudC50c1wiKTtcbiIsImltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIHN0YXRpYyBkb2N1bWVudElEOiBzdHJpbmcgfCBudWxsO1xuICAgIHN0YXRpYyBhY3RpdmVGb3JtOiBGb3JtO1xuICAgIHN0YXRpYyBhY3RpdmVGaWVsZDogRmllbGQ7XG59XG5cblxuIiwiZXhwb3J0IGNsYXNzIEZpZWxkTGFiZWwge1xyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IEhUTUxMYWJlbEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGEgbGFiZWwgZWxlbWVudFxyXG4gICAgY29uc3QgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnZm9yJ1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBUZXh0Q29udGVudFxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgIHJldHVybiBsYWJlbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybUNyZWF0b3IgfSBmcm9tICcuL0Zvcm1DcmVhdG9yJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBmaWVsZHM6IEZpZWxkW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBmaWVsZHM6IEZpZWxkW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRm9ybUVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBlbGVtZW50XHJcbiAgICBjb25zdCBmb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdpZCdcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGVyIHdpdGggdGhlIG5hbWUgb2YgdGhlIEZvcm1cclxuICAgIGNvbnN0IGhlYWRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgLy8gU2V0IHRoZSBoZWFkZXIgdGV4dCBjb250ZW50IHRvIHRoZSBuYW1lIG9mIHRoZSBGb3JtXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgIC8vIEFwcGVuZCB0aGUgaGVhZGVyXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAvLyBDcmVhdGUgYSBsaW5lYnJlYWtcclxuICAgIGNvbnN0IGxpbmVicmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICAgIC8vIEFwcGVuZCBhIGxpbmVicmVha1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xyXG4gICAgLy8gQXBwZW5kIGZpZWxkc1xyXG4gICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQucmVuZGVyKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVicmVhayk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKEZvcm1DcmVhdG9yLnJlbmRlclN1Ym1pdEJ1dHRvbignc3VibWl0QnRuJywgJ1N1Ym1pdCB0aGUgRm9ybSEnKSk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlcygpOiBzdHJpbmdbXSB7XHJcbiAgICBsZXQgdmFsdWVzOiBzdHJpbmdbXTtcclxuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICB2YWx1ZXMucHVzaChmaWVsZC5nZXRWYWx1ZSgpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHZhbHVlcztcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEYXRhU3RvcmFnZSB9IGZyb20gJy4vRGF0YVN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuLy4uL2VudW1zL0ZpZWxkVHlwZSc7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9GaWVsZCc7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuL2lucHV0RmllbGQnO1xyXG5pbXBvcnQgeyBUZXh0YXJlYUZpZWxkIH0gZnJvbSAnLi90ZXh0QXJlYUZpZWxkJztcclxuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9kYXRlRmllbGQnO1xyXG5pbXBvcnQgeyBFbWFpbEZpZWxkIH0gZnJvbSAnLi9lbWFpbEZpZWxkJztcclxuaW1wb3J0IHsgU2VsZWN0RmllbGQgfSBmcm9tICcuL3NlbGVjdEZpZWxkJztcclxuaW1wb3J0IHsgQ2hlY2tib3hGaWVsZCB9IGZyb20gJy4vY2hlY2tib3hGaWVsZCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL0Zvcm0nO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL0FwcCc7XHJcbmltcG9ydCB7IExvY1N0b3JhZ2UgfSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1DcmVhdG9yIHtcclxuICBzdG9yYWdlOiBMb2NTdG9yYWdlO1xyXG5cclxuICBuZXdGb3JtKG5hbWU6IHN0cmluZykge1xyXG4gICAgQXBwLmFjdGl2ZUZvcm0gPSBuZXcgRm9ybShuYW1lLCBbXSk7XHJcbiAgfVxyXG5cclxuICBuZXdGaWVsZChuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgb3B0aW9ucz86IHN0cmluZ1tdKTogSFRNTEVsZW1lbnQge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgIEFwcC5hY3RpdmVGaWVsZCA9IG5ldyBJbnB1dEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5UZXh0LCAnJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdtdWx0aWxpbmV0ZXh0JzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgVGV4dGFyZWFGaWVsZChuYW1lLCBGaWVsZFR5cGUuTXVsdGlMaW5lVGV4dCwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgICAgQXBwLmFjdGl2ZUZpZWxkID0gbmV3IERhdGVGaWVsZChuYW1lLCBGaWVsZFR5cGUuRGF0ZSwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIEFwcC5hY3RpdmVGaWVsZCA9IG5ldyBFbWFpbEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5FbWFpbCwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnc2VsZWN0JzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgU2VsZWN0RmllbGQobmFtZSwgRmllbGRUeXBlLlNlbGVjdCwgJycsIG9wdGlvbnMpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnY2hlY2tib3gnOlxyXG4gICAgICAgIEFwcC5hY3RpdmVGaWVsZCA9IG5ldyBDaGVja2JveEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5DaGVja2JveCwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBBcHAuYWN0aXZlRmllbGQucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVyU3VibWl0QnV0dG9uKGlkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIGNvbnN0IHN1Ym1pdEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBzdWJtaXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdpZCdcclxuICAgIHN1Ym1pdEZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpZH1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3ZhbHVlJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3ZhbHVlfWApO1xyXG4gICAgcmV0dXJuIHN1Ym1pdEZpZWxkXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVuZGVySW5wdXRGb3JPcHRpb25zKCk6IEhUTUxJbnB1dEVsZW1lbnQge1xyXG4gICAgY29uc3QgdGV4dElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3B0aW9uSW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2NsYXNzJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnb3B0aW9uSW5wdXQgdS1mdWxsLXdpZHRoJyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdjbGFzcydcclxuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0VudGVyIHRoZSBPcHRpb24nKTtcclxuICAgIHJldHVybiB0ZXh0SW5wdXQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuL2RhdGFTdG9yYWdlJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4vZm9ybSc7XHJcbmltcG9ydCB7IERvYyB9IGZyb20gJy4vRG9jJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0ZpZWxkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NTdG9yYWdlIGltcGxlbWVudHMgRGF0YVN0b3JhZ2Uge1xyXG4gIGdldERvY3VtZW50czxUIGV4dGVuZHMgRm9ybSB8IHN0cmluZz4oa2V5OiBzdHJpbmcpOiBUW10ge1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPT09IG51bGwpIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gW107XHJcbiAgICAgIGNvbnNvbGUubG9nKG9iamVjdENvbnRhaW5lcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG4gICAgICBjb25zb2xlLmxvZyhvYmplY3RDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdENvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHNhdmVEb2N1bWVudDxUIGV4dGVuZHMgRm9ybSB8IERvYz4oZG9jdW1lbnQ6IFQsIGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgdGltZVN0YW1wOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgLy8gdmFyIHN0ciA9IHN0ci47XHJcbiAgICAvLyBkb2N1bWVudC53cml0ZShzdHIuKTtcclxuICAgIGxldCBkb2N1bWVudElEOiBzdHJpbmcgPSBgJHtkb2N1bWVudC5uYW1lLnJlcGxhY2UoL1xccy9nLCAnJyl9LSR7dGltZVN0YW1wfWA7XHJcbiAgICBsZXQgb2JqZWN0Q29udGFpbmVyOiBUW107XHJcbiAgICBsZXQga2V5c0NvbnRhaW5lcjogc3RyaW5nW107XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA9PT0gbnVsbCkge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iamVjdENvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykgPT09IG51bGwpIHtcclxuICAgICAga2V5c0NvbnRhaW5lciA9IFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5c0NvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSk7XHJcbiAgICB9XHJcbiAgICBvYmplY3RDb250YWluZXIucHVzaChkb2N1bWVudCk7XHJcbiAgICBrZXlzQ29udGFpbmVyLnB1c2goZG9jdW1lbnRJRCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG9iamVjdENvbnRhaW5lcikpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2tleXMnLCBKU09OLnN0cmluZ2lmeShrZXlzQ29udGFpbmVyKSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVEb2N1bWVudDxUIGV4dGVuZHMgRm9ybSB8IERvYz4oZG9jdW1lbnRJRDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgb2JqZWN0Q29udGFpbmVyOiBUW107XHJcbiAgICBsZXQga2V5c0NvbnRhaW5lcjogc3RyaW5nW107XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb2N1bWVudHMnKSA9PT0gbnVsbCkge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iamVjdENvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvY3VtZW50cycpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSA9PT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRoZSBhcnJheSBvZiBrZXlzIGlzIGVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5c0NvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQ29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChrZXlzQ29udGFpbmVyW2ldID09PSBkb2N1bWVudElEKSB7XHJcbiAgICAgICAgb2JqZWN0Q29udGFpbmVyLnNwbGljZShpLCAxKTtcclxuICAgICAgICBrZXlzQ29udGFpbmVyLnNwbGljZShpLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb2N1bWVudHMnLCBKU09OLnN0cmluZ2lmeShvYmplY3RDb250YWluZXIpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrZXlzJywgSlNPTi5zdHJpbmdpZnkoa2V5c0NvbnRhaW5lcikpO1xyXG4gIH1cclxuXHJcbiAgbG9hZERvY3VtZW50PFQgZXh0ZW5kcyBGb3JtIHwgRG9jPihkb2N1bWVudElEOiBzdHJpbmcpOiB7XHJcbiAgICBmaWVsZHM6IEZpZWxkW107XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgfSB7XHJcbiAgICBsZXQgb2JqZWN0Q29udGFpbmVyOiBUW107XHJcbiAgICBsZXQga2V5c0NvbnRhaW5lcjogc3RyaW5nW107XHJcbiAgICBsZXQgZG9jdW1lbnRUb0xvYWQ6IHtcclxuICAgICAgZmllbGRzOiBGaWVsZFtdO1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRzJykgPT09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJUaGVyZSBhcmUgbm8gZG9jdW1lbnRzIHRvIGxvYWQhXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna2V5cycpID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFycmF5IG9mIGtleXMgaXMgZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBrZXlzQ29udGFpbmVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna2V5cycpKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXNDb250YWluZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKGtleXNDb250YWluZXJbaV0gPT09IGRvY3VtZW50SUQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvYmplY3RDb250YWluZXJbaV0pO1xyXG4gICAgICAgIGRvY3VtZW50VG9Mb2FkID0gb2JqZWN0Q29udGFpbmVyW2ldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRvY3VtZW50VG9Mb2FkO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94RmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudCAgICBcclxuICAgIGNvbnN0IGNoZWNrQm94SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIGNoZWNrQm94SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tCb3hGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNoZWNrQm94RmllbGQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbC5yZW5kZXIoKSk7XHJcbiAgICBjaGVja0JveEZpZWxkLmFwcGVuZENoaWxkKGNoZWNrQm94SW5wdXQpO1xyXG4gICAgcmV0dXJuIGNoZWNrQm94RmllbGQ7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBkYXRlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3QgZGF0ZUZpZWxkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgZGF0ZUZpZWxkLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgICByZXR1cm4gZGF0ZUZpZWxkO1xyXG4gIH1cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVtYWlsRmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgZW1haWxJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICdpZCdcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbEZpZWxkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZW1haWxGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsLnJlbmRlcigpKTtcclxuICAgIGVtYWlsRmllbGQuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XHJcbiAgICByZXR1cm4gZW1haWxGaWVsZDtcclxuICB9XHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCB0ZXh0SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnaWQnXHJcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGlucHV0RmllbGQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbC5yZW5kZXIoKSk7XHJcbiAgICBpbnB1dEZpZWxkLmFwcGVuZENoaWxkKHRleHRJbnB1dCk7XHJcbiAgICByZXR1cm4gaW5wdXRGaWVsZDtcclxuICB9XHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSBcIi4vRmllbGRMYWJlbFwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi4vZW51bXMvRmllbGRUeXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0RmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIG9wdGlvbnM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZywgb3B0aW9uczogc3RyaW5nW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBzZWxlY3Q6IEhUTUxTZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICdpZCdcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlbGVjdEZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5vcHRpb25zKTtcclxuICAgIC8vIEFkZCBvcHRpb25zXHJcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb25WYWx1ZSA9PiB7XHJcbiAgICAgIC8vIENyZWF0ZSBvcHRpb24gZWxlbWVudFxyXG4gICAgICBjb25zdCBvcHRpb246IEhUTUxPcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ3ZhbHVlJ1xyXG4gICAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke29wdGlvblZhbHVlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ3ZhbHVlJ1xyXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25WYWx1ZTtcclxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KVxyXG4gICAgc2VsZWN0RmllbGQuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgIHJldHVybiBzZWxlY3RGaWVsZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhRmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgdGV4dGFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3QgdGV4dGFyZWFGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRleHRhcmVhRmllbGQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbC5yZW5kZXIoKSk7XHJcbiAgICB0ZXh0YXJlYUZpZWxkLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuICAgIHJldHVybiB0ZXh0YXJlYUZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBTZWxlY3RGaWVsZCB9IGZyb20gJy4vY2xhc3Nlcy9TZWxlY3RGaWVsZCc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vY2xhc3Nlcy9BcHAnO1xyXG5pbXBvcnQgeyBGb3JtQ3JlYXRvciB9IGZyb20gXCIuL2NsYXNzZXMvRm9ybUNyZWF0b3JcIjtcclxuaW1wb3J0IHsgTG9jU3RvcmFnZSB9IGZyb20gXCIuL2NsYXNzZXMvTG9jU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuL2ludGVyZmFjZXMvRmllbGRcIjtcclxuXHJcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja0J0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRCdG4nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuY29uc3QgZm9ybUNyZWF0b3IgPSBuZXcgRm9ybUNyZWF0b3IoKTtcclxuZm9ybUNyZWF0b3Iuc3RvcmFnZSA9IG5ldyBMb2NTdG9yYWdlKCk7XHJcblxyXG5sZXQgZG9jSUQgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cig0KTtcclxubGV0IGRvYzoge1xyXG4gIGZpZWxkczogRmllbGRbXTtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGJhY2tCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgZG9jID0gZm9ybUNyZWF0b3Iuc3RvcmFnZS5sb2FkRG9jdW1lbnQoZG9jSUQpO1xyXG4gIGZvcm1DcmVhdG9yLm5ld0Zvcm0oZG9jLm5hbWUpO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoQXBwLmFjdGl2ZUZvcm0ucmVuZGVyKCksIGJhY2tCdG4pO1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtBcHAuYWN0aXZlRm9ybS5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gIGRvYy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0QnRuJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGlmIChmaWVsZC50eXBlID09PSAnc2VsZWN0Jykge1xyXG4gICAgICBmb3JtLmluc2VydEJlZm9yZShmb3JtQ3JlYXRvci5uZXdGaWVsZChmaWVsZC5uYW1lLCBmaWVsZC50eXBlLCBmaWVsZC5vcHRpb25zKSwgc3VibWl0QnRuKTtcclxuICAgIH1cclxuICAgIGZvcm0uaW5zZXJ0QmVmb3JlKGZvcm1DcmVhdG9yLm5ld0ZpZWxkKGZpZWxkLm5hbWUsIGZpZWxkLnR5cGUpLCBzdWJtaXRCdG4pO1xyXG4gIH0pO1xyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhBcHAuYWN0aXZlRm9ybS5nZXRWYWx1ZXMoKSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdmb3JtLWxpc3QuaHRtbCc7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfSlcclxufSk7XHJcblxyXG5cclxuYmFja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnaW5kZXguaHRtbCc7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KSAiLCJleHBvcnQgZW51bSBGaWVsZFR5cGUge1xyXG4gIFRleHQgPSBcInRleHRcIiwgTXVsdGlMaW5lVGV4dCA9IFwibXVsdGlsaW5ldGV4dFwiLCBEYXRlID0gXCJkYXRlXCIsIEVtYWlsID0gXCJlbWFpbFwiLCBTZWxlY3QgPSBcInNlbGVjdFwiLCBDaGVja2JveCA9IFwiY2hlY2tib3hcIlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==