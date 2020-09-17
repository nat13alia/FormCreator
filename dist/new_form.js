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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/new-form.ts");
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

/***/ "./src/new-form.ts":
/*!*************************!*\
  !*** ./src/new-form.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __webpack_require__(/*! ./classes/App */ "./src/classes/App.ts");
const FormCreator_1 = __webpack_require__(/*! ./classes/FormCreator */ "./src/classes/FormCreator.ts");
const LocStorage_1 = __webpack_require__(/*! ./classes/LocStorage */ "./src/classes/LocStorage.ts");
const container = document.querySelector('.container');
const newFormForm = document.getElementById('form-form');
const formName = document.getElementById('formName');
const newFieldForm = document.getElementById('field-form');
const fieldName = document.getElementById('fieldName');
const renderBtn = document.getElementById('renderBtn');
const saveBtn = document.getElementById('saveBtn');
const backBtn = document.getElementById('backBtn');
const editFormBtn = document.getElementById('editFormBtn');
const fieldType = document.getElementById('fieldType');
const optionsHolder = document.querySelector('.optionsHolder');
const addAnotherOption = document.getElementById('addAnotherOption');
const formCreator = new FormCreator_1.FormCreator();
formCreator.storage = new LocStorage_1.LocStorage();
newFormForm.addEventListener('submit', function (e) {
    formCreator.newForm(formName.value);
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'block';
    e.preventDefault();
});
newFieldForm.addEventListener('submit', function (e) {
    if (fieldType.value == 'select') {
        let optionInputsCollection = document.getElementsByClassName('optionInput u-full-width');
        let optionInputs = [];
        let options = [];
        for (let i = 0; i < optionInputsCollection.length; i++) {
            optionInputs.push(optionInputsCollection[i]);
        }
        optionInputs.forEach(optionInput => {
            options.push(optionInput.value);
        });
        formCreator.newField(fieldName.value, fieldType.value, options);
    }
    else {
        formCreator.newField(fieldName.value, fieldType.value);
    }
    App_1.App.activeForm.fields.push(App_1.App.activeField);
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'block';
    renderBtn.style.display = 'block';
    editFormBtn.style.display = 'block';
    if (fieldType.value == 'select') {
        optionsHolder.style.display = 'block';
    }
    else {
        optionsHolder.style.display = 'none';
    }
    fieldName.value = '';
    e.preventDefault();
});
fieldType.addEventListener('change', function (e) {
    if (fieldType.value == 'select') {
        optionsHolder.style.display = 'block';
    }
    else {
        optionsHolder.style.display = 'none';
    }
    e.preventDefault();
});
addAnotherOption.addEventListener('click', function (e) {
    optionsHolder.insertBefore(FormCreator_1.FormCreator.renderInputForOptions(), addAnotherOption);
    e.preventDefault();
});
renderBtn.addEventListener('click', function (e) {
    container.insertBefore(App_1.App.activeForm.render(), saveBtn);
    newFieldForm.style.display = 'none';
    renderBtn.style.display = 'none';
    saveBtn.style.display = 'block';
    editFormBtn.style.display = 'none';
    backBtn.style.display = 'block';
    e.preventDefault();
});
saveBtn.addEventListener('click', function (e) {
    formCreator.storage.saveDocument(App_1.App.activeForm, 'documents');
    window.location.href = 'index.html';
    e.preventDefault();
});
backBtn.addEventListener('click', function (e) {
    window.location.href = 'index.html';
    e.preventDefault();
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0ZpZWxkTGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Gb3JtQ3JlYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Mb2NTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2NoZWNrYm94RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGF0ZUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2VtYWlsRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvaW5wdXRGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9zZWxlY3RGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy90ZXh0QXJlYUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnVtcy9GaWVsZFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldy1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9FQSxNQUFhLEdBQUc7Q0FJZjtBQUpELGtCQUlDOzs7Ozs7Ozs7Ozs7Ozs7QUNQRCxNQUFhLFVBQVU7SUFHckIsWUFBWSxJQUFZO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxNQUFNO1FBRUosTUFBTSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEUsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV4RCxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGO0FBaEJELGdDQWdCQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJELCtGQUE0QztBQUc1QyxNQUFhLElBQUk7SUFJZixZQUFZLElBQVksRUFBRSxNQUFlO1FBRnpDLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFHbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELE1BQU07UUFFSixNQUFNLElBQUksR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXRELE1BQU0sTUFBTSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpELE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBVyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDbEYsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksTUFBZ0IsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBeENELG9CQXdDQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNELGdHQUFpRDtBQUVqRCw0RkFBMEM7QUFDMUMscUdBQWdEO0FBQ2hELHlGQUF3QztBQUN4Qyw0RkFBMEM7QUFDMUMsK0ZBQTRDO0FBQzVDLHFHQUFnRDtBQUNoRCwwRUFBOEI7QUFDOUIsdUVBQTRCO0FBRzVCLE1BQWEsV0FBVztJQUd0QixPQUFPLENBQUMsSUFBWTtRQUNsQixTQUFHLENBQUMsVUFBVSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsT0FBa0I7UUFDckQsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLE1BQU07Z0JBQ1QsU0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxNQUFNO1lBRVIsS0FBSyxlQUFlO2dCQUNsQixTQUFHLENBQUMsV0FBVyxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLEVBQUUscUJBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZFLE1BQU07WUFFUixLQUFLLE1BQU07Z0JBQ1QsU0FBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1lBRVIsS0FBSyxPQUFPO2dCQUNWLFNBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksRUFBRSxxQkFBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDNUQsTUFBTTtZQUVSLEtBQUssUUFBUTtnQkFDWCxTQUFHLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN2RSxNQUFNO1lBRVIsS0FBSyxVQUFVO2dCQUNiLFNBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxxQkFBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEUsTUFBTTtZQUVSO2dCQUNFLE1BQU07U0FDVDtRQUNELE9BQU8sU0FBRyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEVBQVUsRUFBRSxLQUFhO1FBQ2pELE1BQU0sV0FBVyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXRFLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV4QyxXQUFXLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDOUMsT0FBTyxXQUFXO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMscUJBQXFCO1FBQzFCLE1BQU0sU0FBUyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBFLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXZDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRTVDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFFNUQsU0FBUyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUMxRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUE5REQsa0NBOERDOzs7Ozs7Ozs7Ozs7Ozs7QUN0RUQsTUFBYSxVQUFVO0lBQ3JCLFlBQVksQ0FBMEIsR0FBVztRQUMvQyxJQUFJLGVBQW9CLENBQUM7UUFDekIsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUN0QyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVELFlBQVksQ0FBdUIsUUFBVyxFQUFFLEdBQVc7UUFDekQsSUFBSSxTQUFTLEdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBR25DLElBQUksVUFBVSxHQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQzVFLElBQUksZUFBb0IsQ0FBQztRQUN6QixJQUFJLGFBQXVCLENBQUM7UUFDNUIsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUN0QyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFFRCxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3pDLGFBQWEsR0FBRyxFQUFFLENBQUM7U0FDcEI7YUFBTTtZQUNMLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMxRDtRQUNELGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDM0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxjQUFjLENBQXVCLFVBQWtCO1FBQ3JELElBQUksZUFBb0IsQ0FBQztRQUN6QixJQUFJLGFBQXVCLENBQUM7UUFFNUIsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUM5QyxlQUFlLEdBQUcsRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUNuQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDNUI7U0FDRjtRQUVELFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNuRSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFlBQVksQ0FBdUIsVUFBa0I7UUFJbkQsSUFBSSxlQUFvQixDQUFDO1FBQ3pCLElBQUksYUFBdUIsQ0FBQztRQUM1QixJQUFJLGNBR0gsQ0FBQztRQUVGLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0MsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxjQUFjLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1NBQ0Y7UUFFRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFoR0QsZ0NBZ0dDOzs7Ozs7Ozs7Ozs7Ozs7QUNwR0QsNEZBQTBDO0FBRzFDLE1BQWEsYUFBYTtJQU14QixZQUFZLElBQVksRUFBRSxJQUFlLEVBQUUsS0FBYTtRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsTUFBTTtRQUVKLE1BQU0sYUFBYSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhFLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFL0QsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqRSxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpFLE1BQU0sYUFBYSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLGFBQWEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFxQixDQUFDO1FBQ3hGLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUFoQ0Qsc0NBZ0NDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0QsNEZBQTBDO0FBRzFDLE1BQWEsU0FBUztJQU1wQixZQUFZLElBQVksRUFBRSxJQUFlLEVBQUUsS0FBYTtRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsTUFBTTtRQUVKLE1BQU0sU0FBUyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBFLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFM0QsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3RCxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTdELE1BQU0sU0FBUyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUNELFFBQVE7UUFDTixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUF3QixDQUFDO1FBQzNGLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUEvQkQsOEJBK0JDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ0QsNEZBQTBDO0FBRzFDLE1BQWEsVUFBVTtJQU1yQixZQUFZLElBQVksRUFBRSxJQUFlLEVBQUUsS0FBYTtRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsTUFBTTtRQUVKLE1BQU0sVUFBVSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJFLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFNUQsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU5RCxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTlELE1BQU0sVUFBVSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUNELFFBQVE7UUFDTixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUF3QixDQUFDO1FBQzNGLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUEvQkQsZ0NBK0JDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ0QsNEZBQTBDO0FBRzFDLE1BQWEsVUFBVTtJQU1yQixZQUFZLElBQVksRUFBRSxJQUFlLEVBQUUsS0FBYTtRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTTtRQUVKLE1BQU0sU0FBUyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBFLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFM0QsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3RCxTQUFTLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTdELE1BQU0sVUFBVSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUNELFFBQVE7UUFDTixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFxQixDQUFDO1FBQ3hGLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0NBQ0Y7QUFoQ0QsZ0NBZ0NDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0QsNEZBQTBDO0FBRzFDLE1BQWEsV0FBVztJQU90QixZQUFZLElBQVksRUFBRSxJQUFlLEVBQUUsS0FBYSxFQUFFLE9BQWlCO1FBQ3pFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxNQUFNO1FBRUosTUFBTSxNQUFNLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkUsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV4RCxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFELE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFMUQsTUFBTSxXQUFXLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEUsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFFakMsTUFBTSxNQUFNLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkUsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTdELE1BQU0sQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBQ0YsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQXNCLENBQUM7UUFDekYsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQTdDRCxrQ0E2Q0M7Ozs7Ozs7Ozs7Ozs7OztBQ2hERCw0RkFBMEM7QUFHMUMsTUFBYSxhQUFhO0lBTXhCLFlBQVksSUFBWSxFQUFFLElBQWUsRUFBRSxLQUFhO1FBQ3RELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxNQUFNO1FBRUosTUFBTSxRQUFRLEdBQXdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekUsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUxRCxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTVELFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFNUQsTUFBTSxhQUFhLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDL0MsYUFBYSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQXdCLENBQUM7UUFDM0YsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQWhDRCxzQ0FnQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ3BDRCxJQUFZLFNBRVg7QUFGRCxXQUFZLFNBQVM7SUFDbkIsMEJBQWE7SUFBRSw0Q0FBK0I7SUFBRSwwQkFBYTtJQUFFLDRCQUFlO0lBQUUsOEJBQWlCO0lBQUUsa0NBQXFCO0FBQzFILENBQUMsRUFGVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUVwQjs7Ozs7Ozs7Ozs7Ozs7O0FDREQsK0VBQW9DO0FBQ3BDLHVHQUFvRDtBQUNwRCxvR0FBa0Q7QUFHbEQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQW1CLENBQUM7QUFFekUsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQW9CLENBQUM7QUFDNUUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCLENBQUM7QUFFekUsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQW9CLENBQUM7QUFDOUUsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXFCLENBQUM7QUFFM0UsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCLENBQUM7QUFDNUUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQXNCLENBQUM7QUFDeEUsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQXNCLENBQUM7QUFDeEUsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCLENBQUM7QUFFaEYsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXNCLENBQUM7QUFDNUUsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBbUIsQ0FBQztBQUNqRixNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQXNCLENBQUM7QUFFMUYsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDdEMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUl2QyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztJQUNoRCxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDbkMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUdILFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQ2pELElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUU7UUFFL0IsSUFBSSxzQkFBc0IsR0FBbUIsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDekcsSUFBSSxZQUFZLEdBQXVCLEVBQUUsQ0FBQztRQUMxQyxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0RCxZQUFZLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBcUIsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNILFdBQVcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ2pFO1NBQU07UUFDTCxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hEO0lBQ0QsU0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDbkMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3JDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNsQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDcEMsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBRTtRQUMvQixhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDdkM7U0FBTTtRQUNMLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztLQUN0QztJQUNELFNBQVMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUdILFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO0lBQzlDLElBQUksU0FBUyxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUU7UUFDL0IsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3ZDO1NBQU07UUFDTCxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7S0FDdEM7SUFDRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFHSCxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQ3BELGFBQWEsQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDbEYsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBSUgsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDN0MsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUNwQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ2hDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUNuQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDaEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDM0MsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBRyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM5RCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztJQUNwQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckIsQ0FBQyxDQUFDIiwiZmlsZSI6Im5ld19mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbmV3LWZvcm0udHNcIik7XG4iLCJpbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBzdGF0aWMgZG9jdW1lbnRJRDogc3RyaW5nIHwgbnVsbDtcbiAgICBzdGF0aWMgYWN0aXZlRm9ybTogRm9ybTtcbiAgICBzdGF0aWMgYWN0aXZlRmllbGQ6IEZpZWxkO1xufVxuXG5cbiIsImV4cG9ydCBjbGFzcyBGaWVsZExhYmVsIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MTGFiZWxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBhIGxhYmVsIGVsZW1lbnRcclxuICAgIGNvbnN0IGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2ZvcidcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgVGV4dENvbnRlbnRcclxuICAgIGxhYmVsLnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfWA7XHJcbiAgICByZXR1cm4gbGFiZWw7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZvcm1DcmVhdG9yIH0gZnJvbSAnLi9Gb3JtQ3JlYXRvcic7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZmllbGRzOiBGaWVsZFtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZmllbGRzOiBGaWVsZFtdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKTogSFRNTEZvcm1FbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBhIGZvcm0gZWxlbWVudFxyXG4gICAgY29uc3QgZm9ybTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIENyZWF0ZSBhIGhlYWRlciB3aXRoIHRoZSBuYW1lIG9mIHRoZSBGb3JtXHJcbiAgICBjb25zdCBoZWFkZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIC8vIFNldCB0aGUgaGVhZGVyIHRleHQgY29udGVudCB0byB0aGUgbmFtZSBvZiB0aGUgRm9ybVxyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7dGhpcy5uYW1lfWA7XHJcbiAgICAvLyBBcHBlbmQgdGhlIGhlYWRlclxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgLy8gQ3JlYXRlIGEgbGluZWJyZWFrXHJcbiAgICBjb25zdCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XHJcbiAgICAvLyBBcHBlbmQgYSBsaW5lYnJlYWtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGluZWJyZWFrKTtcclxuICAgIC8vIEFwcGVuZCBmaWVsZHNcclxuICAgIHRoaXMuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkLnJlbmRlcigpKTtcclxuICAgIH0pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChGb3JtQ3JlYXRvci5yZW5kZXJTdWJtaXRCdXR0b24oJ3N1Ym1pdEJ0bicsICdTdWJtaXQgdGhlIEZvcm0hJykpO1xyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZXMoKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHZhbHVlczogc3RyaW5nW107XHJcbiAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgdmFsdWVzLnB1c2goZmllbGQuZ2V0VmFsdWUoKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRGF0YVN0b3JhZ2UgfSBmcm9tICcuL0RhdGFTdG9yYWdlJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi8uLi9lbnVtcy9GaWVsZFR5cGUnO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvRmllbGQnO1xyXG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSAnLi9pbnB1dEZpZWxkJztcclxuaW1wb3J0IHsgVGV4dGFyZWFGaWVsZCB9IGZyb20gJy4vdGV4dEFyZWFGaWVsZCc7XHJcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJy4vZGF0ZUZpZWxkJztcclxuaW1wb3J0IHsgRW1haWxGaWVsZCB9IGZyb20gJy4vZW1haWxGaWVsZCc7XHJcbmltcG9ydCB7IFNlbGVjdEZpZWxkIH0gZnJvbSAnLi9zZWxlY3RGaWVsZCc7XHJcbmltcG9ydCB7IENoZWNrYm94RmllbGQgfSBmcm9tICcuL2NoZWNrYm94RmllbGQnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi9Gb3JtJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9BcHAnO1xyXG5pbXBvcnQgeyBMb2NTdG9yYWdlIH0gZnJvbSAnLi9Mb2NTdG9yYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ3JlYXRvciB7XHJcbiAgc3RvcmFnZTogTG9jU3RvcmFnZTtcclxuXHJcbiAgbmV3Rm9ybShuYW1lOiBzdHJpbmcpIHtcclxuICAgIEFwcC5hY3RpdmVGb3JtID0gbmV3IEZvcm0obmFtZSwgW10pO1xyXG4gIH1cclxuXHJcbiAgbmV3RmllbGQobmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIG9wdGlvbnM/OiBzdHJpbmdbXSk6IEhUTUxFbGVtZW50IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgSW5wdXRGaWVsZChuYW1lLCBGaWVsZFR5cGUuVGV4dCwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnbXVsdGlsaW5ldGV4dCc6XHJcbiAgICAgICAgQXBwLmFjdGl2ZUZpZWxkID0gbmV3IFRleHRhcmVhRmllbGQobmFtZSwgRmllbGRUeXBlLk11bHRpTGluZVRleHQsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgIEFwcC5hY3RpdmVGaWVsZCA9IG5ldyBEYXRlRmllbGQobmFtZSwgRmllbGRUeXBlLkRhdGUsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgRW1haWxGaWVsZChuYW1lLCBGaWVsZFR5cGUuRW1haWwsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgQXBwLmFjdGl2ZUZpZWxkID0gbmV3IFNlbGVjdEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5TZWxlY3QsICcnLCBvcHRpb25zKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgQ2hlY2tib3hGaWVsZChuYW1lLCBGaWVsZFR5cGUuQ2hlY2tib3gsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBwLmFjdGl2ZUZpZWxkLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbmRlclN1Ym1pdEJ1dHRvbihpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICBjb25zdCBzdWJtaXRGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBzdWJtaXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWR9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd2YWx1ZSdcclxuICAgIHN1Ym1pdEZpZWxkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt2YWx1ZX1gKTtcclxuICAgIHJldHVybiBzdWJtaXRGaWVsZFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbmRlcklucHV0Rm9yT3B0aW9ucygpOiBIVE1MSW5wdXRFbGVtZW50IHtcclxuICAgIGNvbnN0IHRleHRJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdpZCdcclxuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29wdGlvbklucHV0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdjbGFzcydcclxuICAgIHRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ29wdGlvbklucHV0IHUtZnVsbC13aWR0aCcpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnY2xhc3MnXHJcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciB0aGUgT3B0aW9uJyk7XHJcbiAgICByZXR1cm4gdGV4dElucHV0O1xyXG4gIH1cclxufSIsImltcG9ydCB7IERhdGFTdG9yYWdlIH0gZnJvbSAnLi9kYXRhU3RvcmFnZSc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL2Zvcm0nO1xyXG5pbXBvcnQgeyBEb2MgfSBmcm9tICcuL0RvYyc7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9GaWVsZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jU3RvcmFnZSBpbXBsZW1lbnRzIERhdGFTdG9yYWdlIHtcclxuICBnZXREb2N1bWVudHM8VCBleHRlbmRzIEZvcm0gfCBzdHJpbmc+KGtleTogc3RyaW5nKTogVFtdIHtcclxuICAgIGxldCBvYmplY3RDb250YWluZXI6IFRbXTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpID09PSBudWxsKSB7XHJcbiAgICAgIG9iamVjdENvbnRhaW5lciA9IFtdO1xyXG4gICAgICBjb25zb2xlLmxvZyhvYmplY3RDb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICAgICAgY29uc29sZS5sb2cob2JqZWN0Q29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3RDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBzYXZlRG9jdW1lbnQ8VCBleHRlbmRzIEZvcm0gfCBEb2M+KGRvY3VtZW50OiBULCBrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHRpbWVTdGFtcDogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIC8vIHZhciBzdHIgPSBzdHIuO1xyXG4gICAgLy8gZG9jdW1lbnQud3JpdGUoc3RyLik7XHJcbiAgICBsZXQgZG9jdW1lbnRJRDogc3RyaW5nID0gYCR7ZG9jdW1lbnQubmFtZS5yZXBsYWNlKC9cXHMvZywgJycpfS0ke3RpbWVTdGFtcH1gO1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgbGV0IGtleXNDb250YWluZXI6IHN0cmluZ1tdO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPT09IG51bGwpIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna2V5cycpID09PSBudWxsKSB7XHJcbiAgICAgIGtleXNDb250YWluZXIgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtleXNDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykpO1xyXG4gICAgfVxyXG4gICAgb2JqZWN0Q29udGFpbmVyLnB1c2goZG9jdW1lbnQpO1xyXG4gICAga2V5c0NvbnRhaW5lci5wdXNoKGRvY3VtZW50SUQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3RDb250YWluZXIpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrZXlzJywgSlNPTi5zdHJpbmdpZnkoa2V5c0NvbnRhaW5lcikpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRG9jdW1lbnQ8VCBleHRlbmRzIEZvcm0gfCBEb2M+KGRvY3VtZW50SUQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgbGV0IGtleXNDb250YWluZXI6IHN0cmluZ1tdO1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRzJykgPT09IG51bGwpIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb2N1bWVudHMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykgPT09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJUaGUgYXJyYXkgb2Yga2V5cyBpcyBlbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtleXNDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0NvbnRhaW5lci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoa2V5c0NvbnRhaW5lcltpXSA9PT0gZG9jdW1lbnRJRCkge1xyXG4gICAgICAgIG9iamVjdENvbnRhaW5lci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAga2V5c0NvbnRhaW5lci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZG9jdW1lbnRzJywgSlNPTi5zdHJpbmdpZnkob2JqZWN0Q29udGFpbmVyKSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgna2V5cycsIEpTT04uc3RyaW5naWZ5KGtleXNDb250YWluZXIpKTtcclxuICB9XHJcblxyXG4gIGxvYWREb2N1bWVudDxUIGV4dGVuZHMgRm9ybSB8IERvYz4oZG9jdW1lbnRJRDogc3RyaW5nKToge1xyXG4gICAgZmllbGRzOiBGaWVsZFtdO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gIH0ge1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgbGV0IGtleXNDb250YWluZXI6IHN0cmluZ1tdO1xyXG4gICAgbGV0IGRvY3VtZW50VG9Mb2FkOiB7XHJcbiAgICAgIGZpZWxkczogRmllbGRbXTtcclxuICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvY3VtZW50cycpID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgYXJlIG5vIGRvY3VtZW50cyB0byBsb2FkIVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iamVjdENvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvY3VtZW50cycpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSA9PT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRoZSBhcnJheSBvZiBrZXlzIGlzIGVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5c0NvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQ29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChrZXlzQ29udGFpbmVyW2ldID09PSBkb2N1bWVudElEKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0Q29udGFpbmVyW2ldKTtcclxuICAgICAgICBkb2N1bWVudFRvTG9hZCA9IG9iamVjdENvbnRhaW5lcltpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkb2N1bWVudFRvTG9hZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnQgICAgXHJcbiAgICBjb25zdCBjaGVja0JveElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQm94RmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaGVja0JveEZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgY2hlY2tCb3hGaWVsZC5hcHBlbmRDaGlsZChjaGVja0JveElucHV0KTtcclxuICAgIHJldHVybiBjaGVja0JveEZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlRmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgZGF0ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IGRhdGVGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsLnJlbmRlcigpKTtcclxuICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gICAgcmV0dXJuIGRhdGVGaWVsZDtcclxuICB9XHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IGVtYWlsSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3QgZW1haWxGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVtYWlsRmllbGQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbC5yZW5kZXIoKSk7XHJcbiAgICBlbWFpbEZpZWxkLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xyXG4gICAgcmV0dXJuIGVtYWlsRmllbGQ7XHJcbiAgfVxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSBcIi4vRmllbGRMYWJlbFwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi4vZW51bXMvRmllbGRUeXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgdGV4dElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnB1dEZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgaW5wdXRGaWVsZC5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xyXG4gICAgcmV0dXJuIGlucHV0RmllbGQ7XHJcbiAgfVxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBvcHRpb25zOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM6IHN0cmluZ1tdKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3Qgc2VsZWN0OiBIVE1MU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0RmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWxlY3RGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsLnJlbmRlcigpKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9ucyk7XHJcbiAgICAvLyBBZGQgb3B0aW9uc1xyXG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xyXG4gICAgICAvLyBDcmVhdGUgb3B0aW9uIGVsZW1lbnRcclxuICAgICAgY29uc3Qgb3B0aW9uOiBIVE1MT3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAvLyBBZGQgYXR0cmlidXRlICd2YWx1ZSdcclxuICAgICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtvcHRpb25WYWx1ZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgICAvLyBBZGQgYXR0cmlidXRlICd2YWx1ZSdcclxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVmFsdWU7XHJcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSlcclxuICAgIHNlbGVjdEZpZWxkLmFwcGVuZENoaWxkKHNlbGVjdCk7XHJcbiAgICByZXR1cm4gc2VsZWN0RmllbGQ7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MU2VsZWN0RWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IHRleHRhcmVhRmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0YXJlYUZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgdGV4dGFyZWFGaWVsZC5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XHJcbiAgICByZXR1cm4gdGV4dGFyZWFGaWVsZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGVudW0gRmllbGRUeXBlIHtcclxuICBUZXh0ID0gXCJ0ZXh0XCIsIE11bHRpTGluZVRleHQgPSBcIm11bHRpbGluZXRleHRcIiwgRGF0ZSA9IFwiZGF0ZVwiLCBFbWFpbCA9IFwiZW1haWxcIiwgU2VsZWN0ID0gXCJzZWxlY3RcIiwgQ2hlY2tib3ggPSBcImNoZWNrYm94XCJcclxufSIsImltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vZW51bXMvRmllbGRUeXBlJztcclxuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vY2xhc3Nlcy9BcHBcIjtcclxuaW1wb3J0IHsgRm9ybUNyZWF0b3IgfSBmcm9tIFwiLi9jbGFzc2VzL0Zvcm1DcmVhdG9yXCI7XHJcbmltcG9ydCB7IExvY1N0b3JhZ2UgfSBmcm9tICcuL2NsYXNzZXMvTG9jU3RvcmFnZSc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9jbGFzc2VzL2Zvcm1cIjtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmNvbnN0IG5ld0Zvcm1Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybU5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuY29uc3QgbmV3RmllbGRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkLWZvcm0nKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbmNvbnN0IGZpZWxkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZE5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuY29uc3QgcmVuZGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbmRlckJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVCdG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrQnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IGVkaXRGb3JtQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRGb3JtQnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG5jb25zdCBmaWVsZFR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGRUeXBlJykgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XHJcbmNvbnN0IG9wdGlvbnNIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uc0hvbGRlcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5jb25zdCBhZGRBbm90aGVyT3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEFub3RoZXJPcHRpb24nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbmNvbnN0IGZvcm1DcmVhdG9yID0gbmV3IEZvcm1DcmVhdG9yKCk7XHJcbmZvcm1DcmVhdG9yLnN0b3JhZ2UgPSBuZXcgTG9jU3RvcmFnZSgpO1xyXG5cclxuXHJcbi8vIExpc3RlbiBmb3IgYSBzdWJtaXQgZm9yIGEgbmV3IEZvcm0gdG8gYmUgY3JlYXRlZFxyXG5uZXdGb3JtRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGZvcm1DcmVhdG9yLm5ld0Zvcm0oZm9ybU5hbWUudmFsdWUpO1xyXG4gIG5ld0Zvcm1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4vLyBMaXN0ZW4gZm9yIGEgc3VibWl0IGZvciBhIG5ldyBGaWVsZCB0byBiZSBjcmVhdGVkXHJcbm5ld0ZpZWxkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmIChmaWVsZFR5cGUudmFsdWUgPT0gJ3NlbGVjdCcpIHtcclxuICAgIC8vIGxldCBvcHRpb25zOiBOb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0I29wdGlvbklucHV0Jyk7XHJcbiAgICBsZXQgb3B0aW9uSW5wdXRzQ29sbGVjdGlvbjogSFRNTENvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb25JbnB1dCB1LWZ1bGwtd2lkdGgnKTtcclxuICAgIGxldCBvcHRpb25JbnB1dHM6IEhUTUxJbnB1dEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgbGV0IG9wdGlvbnM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbklucHV0c0NvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgb3B0aW9uSW5wdXRzLnB1c2gob3B0aW9uSW5wdXRzQ29sbGVjdGlvbltpXSBhcyBIVE1MSW5wdXRFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvcHRpb25JbnB1dHMuZm9yRWFjaChvcHRpb25JbnB1dCA9PiB7XHJcbiAgICAgIG9wdGlvbnMucHVzaChvcHRpb25JbnB1dC52YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIGZvcm1DcmVhdG9yLm5ld0ZpZWxkKGZpZWxkTmFtZS52YWx1ZSwgZmllbGRUeXBlLnZhbHVlLCBvcHRpb25zKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9ybUNyZWF0b3IubmV3RmllbGQoZmllbGROYW1lLnZhbHVlLCBmaWVsZFR5cGUudmFsdWUpO1xyXG4gIH1cclxuICBBcHAuYWN0aXZlRm9ybS5maWVsZHMucHVzaChBcHAuYWN0aXZlRmllbGQpO1xyXG4gIG5ld0Zvcm1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHJlbmRlckJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBlZGl0Rm9ybUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBpZiAoZmllbGRUeXBlLnZhbHVlID09ICdzZWxlY3QnKSB7XHJcbiAgICBvcHRpb25zSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvcHRpb25zSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIGZpZWxkTmFtZS52YWx1ZSA9ICcnO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4vLyBMaXN0ZW4gZm9yIGEgY2hhbmdlIG9uIHRoZSBzZWxlY3RlZCBmaWVsZCBUeXBlXHJcbmZpZWxkVHlwZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xyXG4gIGlmIChmaWVsZFR5cGUudmFsdWUgPT0gJ3NlbGVjdCcpIHtcclxuICAgIG9wdGlvbnNIb2xkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9wdGlvbnNIb2xkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8vIExpc3RlbiBmb3IgYSBjYWxsIHRvIGFkZCBhbm90aGVyIE9wdGlvblxyXG5hZGRBbm90aGVyT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICBvcHRpb25zSG9sZGVyLmluc2VydEJlZm9yZShGb3JtQ3JlYXRvci5yZW5kZXJJbnB1dEZvck9wdGlvbnMoKSwgYWRkQW5vdGhlck9wdGlvbik7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcblxyXG4vLyBMaXN0ZW4gZm9yIGEgY2FsbCB0byByZW5kZXIgdGhlIEZvcm1cclxucmVuZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKEFwcC5hY3RpdmVGb3JtLnJlbmRlcigpLCBzYXZlQnRuKTtcclxuICBuZXdGaWVsZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICByZW5kZXJCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBzYXZlQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGVkaXRGb3JtQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgYmFja0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgZm9ybUNyZWF0b3Iuc3RvcmFnZS5zYXZlRG9jdW1lbnQoQXBwLmFjdGl2ZUZvcm0sICdkb2N1bWVudHMnKTtcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdpbmRleC5odG1sJztcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pXHJcblxyXG5iYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdpbmRleC5odG1sJztcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==