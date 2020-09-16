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
const fieldType = document.getElementById("fieldType");
const formCreator = new FormCreator_1.FormCreator();
formCreator.storage = new LocStorage_1.LocStorage();
newFormForm.addEventListener('submit', function (e) {
    formCreator.newForm(formName.value.replace(/\s/g, ''));
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'block';
    e.preventDefault();
});
newFieldForm.addEventListener('submit', function (e) {
    formCreator.newField(fieldName.value, fieldType.value);
    App_1.App.activeForm.fields.push(App_1.App.activeField);
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'block';
    renderBtn.style.display = 'block';
    editFormBtn.style.display = 'block';
    fieldName.value = '';
    e.preventDefault();
});
renderBtn.addEventListener('click', function (e) {
    container.insertBefore(App_1.App.activeForm.render(), saveBtn);
    newFieldForm.style.display = 'none';
    renderBtn.style.display = 'none';
    saveBtn.style.display = 'block';
    editFormBtn.style.display = 'block';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0ZpZWxkTGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Gb3JtQ3JlYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Mb2NTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2NoZWNrYm94RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZGF0ZUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2VtYWlsRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvaW5wdXRGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9zZWxlY3RGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy90ZXh0QXJlYUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9lbnVtcy9GaWVsZFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldy1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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QUFjLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUMiLCJmaWxlIjoibmV3X2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9uZXctZm9ybS50c1wiKTtcbiIsImltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuICAgIHN0YXRpYyBkb2N1bWVudElEOiBzdHJpbmcgfCBudWxsO1xuICAgIHN0YXRpYyBhY3RpdmVGb3JtOiBGb3JtO1xuICAgIHN0YXRpYyBhY3RpdmVGaWVsZDogRmllbGQ7XG59XG5cblxuIiwiZXhwb3J0IGNsYXNzIEZpZWxkTGFiZWwge1xyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IEhUTUxMYWJlbEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGEgbGFiZWwgZWxlbWVudFxyXG4gICAgY29uc3QgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnZm9yJ1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBUZXh0Q29udGVudFxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgIHJldHVybiBsYWJlbDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRm9ybUNyZWF0b3IgfSBmcm9tICcuL0Zvcm1DcmVhdG9yJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBmaWVsZHM6IEZpZWxkW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBmaWVsZHM6IEZpZWxkW10pIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRm9ybUVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGEgZm9ybSBlbGVtZW50XHJcbiAgICBjb25zdCBmb3JtOiBIVE1MRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdpZCdcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGVyIHdpdGggdGhlIG5hbWUgb2YgdGhlIEZvcm1cclxuICAgIGNvbnN0IGhlYWRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgLy8gU2V0IHRoZSBoZWFkZXIgdGV4dCBjb250ZW50IHRvIHRoZSBuYW1lIG9mIHRoZSBGb3JtXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgIC8vIEFwcGVuZCB0aGUgaGVhZGVyXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAvLyBDcmVhdGUgYSBsaW5lYnJlYWtcclxuICAgIGNvbnN0IGxpbmVicmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICAgIC8vIEFwcGVuZCBhIGxpbmVicmVha1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xyXG4gICAgLy8gQXBwZW5kIGZpZWxkc1xyXG4gICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQucmVuZGVyKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVicmVhayk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKEZvcm1DcmVhdG9yLnJlbmRlclN1Ym1pdEJ1dHRvbignc3VibWl0QnRuJywgJ1N1Ym1pdCB0aGUgRm9ybSEnKSk7XHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEYXRhU3RvcmFnZSB9IGZyb20gJy4vRGF0YVN0b3JhZ2UnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuLy4uL2VudW1zL0ZpZWxkVHlwZSc7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9GaWVsZCc7XHJcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuL2lucHV0RmllbGQnO1xyXG5pbXBvcnQgeyBUZXh0YXJlYUZpZWxkIH0gZnJvbSAnLi90ZXh0QXJlYUZpZWxkJztcclxuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9kYXRlRmllbGQnO1xyXG5pbXBvcnQgeyBFbWFpbEZpZWxkIH0gZnJvbSAnLi9lbWFpbEZpZWxkJztcclxuaW1wb3J0IHsgU2VsZWN0RmllbGQgfSBmcm9tICcuL3NlbGVjdEZpZWxkJztcclxuaW1wb3J0IHsgQ2hlY2tib3hGaWVsZCB9IGZyb20gJy4vY2hlY2tib3hGaWVsZCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL0Zvcm0nO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL0FwcCc7XHJcbmltcG9ydCB7IExvY1N0b3JhZ2UgfSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1DcmVhdG9yIHtcclxuICBzdG9yYWdlOiBMb2NTdG9yYWdlO1xyXG5cclxuICBuZXdGb3JtKG5hbWU6IHN0cmluZykge1xyXG4gICAgQXBwLmFjdGl2ZUZvcm0gPSBuZXcgRm9ybShuYW1lLCBbXSk7XHJcbiAgfVxyXG5cclxuICBuZXdGaWVsZChuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgSW5wdXRGaWVsZChuYW1lLCBGaWVsZFR5cGUuVGV4dCwgJycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnbXVsdGlsaW5ldGV4dCc6XHJcbiAgICAgICAgQXBwLmFjdGl2ZUZpZWxkID0gbmV3IFRleHRhcmVhRmllbGQobmFtZSwgRmllbGRUeXBlLk11bHRpTGluZVRleHQsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgIEFwcC5hY3RpdmVGaWVsZCA9IG5ldyBEYXRlRmllbGQobmFtZSwgRmllbGRUeXBlLkRhdGUsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgRW1haWxGaWVsZChuYW1lLCBGaWVsZFR5cGUuRW1haWwsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XHJcbiAgICAgICAgQXBwLmFjdGl2ZUZpZWxkID0gbmV3IFNlbGVjdEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5TZWxlY3QsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcclxuICAgICAgICBBcHAuYWN0aXZlRmllbGQgPSBuZXcgQ2hlY2tib3hGaWVsZChuYW1lLCBGaWVsZFR5cGUuQ2hlY2tib3gsICcnKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gQXBwLmFjdGl2ZUZpZWxkLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbmRlclN1Ym1pdEJ1dHRvbihpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogSFRNTElucHV0RWxlbWVudCB7XHJcbiAgICBjb25zdCBzdWJtaXRGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBzdWJtaXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aWR9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd2YWx1ZSdcclxuICAgIHN1Ym1pdEZpZWxkLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt2YWx1ZX1gKTtcclxuICAgIHJldHVybiBzdWJtaXRGaWVsZFxyXG4gIH1cclxufSIsImltcG9ydCB7IERhdGFTdG9yYWdlIH0gZnJvbSAnLi9kYXRhU3RvcmFnZSc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL2Zvcm0nO1xyXG5pbXBvcnQgeyBEb2MgfSBmcm9tICcuL0RvYyc7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9GaWVsZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jU3RvcmFnZSBpbXBsZW1lbnRzIERhdGFTdG9yYWdlIHtcclxuICBnZXREb2N1bWVudHM8VCBleHRlbmRzIEZvcm0gfCBzdHJpbmc+KGtleTogc3RyaW5nKTogVFtdIHtcclxuICAgIGxldCBvYmplY3RDb250YWluZXI6IFRbXTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpID09PSBudWxsKSB7XHJcbiAgICAgIG9iamVjdENvbnRhaW5lciA9IFtdO1xyXG4gICAgICBjb25zb2xlLmxvZyhvYmplY3RDb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcclxuICAgICAgY29uc29sZS5sb2cob2JqZWN0Q29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3RDb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBzYXZlRG9jdW1lbnQ8VCBleHRlbmRzIEZvcm0gfCBEb2M+KGRvY3VtZW50OiBULCBrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHRpbWVTdGFtcDogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIGxldCBkb2N1bWVudElEOiBzdHJpbmcgPSBgJHtkb2N1bWVudC5uYW1lfS0ke3RpbWVTdGFtcH1gO1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgbGV0IGtleXNDb250YWluZXI6IHN0cmluZ1tdO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPT09IG51bGwpIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgna2V5cycpID09PSBudWxsKSB7XHJcbiAgICAgIGtleXNDb250YWluZXIgPSBbXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtleXNDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykpO1xyXG4gICAgfVxyXG4gICAgb2JqZWN0Q29udGFpbmVyLnB1c2goZG9jdW1lbnQpO1xyXG4gICAga2V5c0NvbnRhaW5lci5wdXNoKGRvY3VtZW50SUQpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShvYmplY3RDb250YWluZXIpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrZXlzJywgSlNPTi5zdHJpbmdpZnkoa2V5c0NvbnRhaW5lcikpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlRG9jdW1lbnQ8VCBleHRlbmRzIEZvcm0gfCBEb2M+KGRvY3VtZW50SUQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgbGV0IGtleXNDb250YWluZXI6IHN0cmluZ1tdO1xyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRzJykgPT09IG51bGwpIHtcclxuICAgICAgb2JqZWN0Q29udGFpbmVyID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvYmplY3RDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb2N1bWVudHMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykgPT09IG51bGwpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJUaGUgYXJyYXkgb2Yga2V5cyBpcyBlbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGtleXNDb250YWluZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdrZXlzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0NvbnRhaW5lci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoa2V5c0NvbnRhaW5lcltpXSA9PT0gZG9jdW1lbnRJRCkge1xyXG4gICAgICAgIG9iamVjdENvbnRhaW5lci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAga2V5c0NvbnRhaW5lci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZG9jdW1lbnRzJywgSlNPTi5zdHJpbmdpZnkob2JqZWN0Q29udGFpbmVyKSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgna2V5cycsIEpTT04uc3RyaW5naWZ5KGtleXNDb250YWluZXIpKTtcclxuICB9XHJcblxyXG4gIGxvYWREb2N1bWVudDxUIGV4dGVuZHMgRm9ybSB8IERvYz4oZG9jdW1lbnRJRDogc3RyaW5nKToge1xyXG4gICAgZmllbGRzOiBGaWVsZFtdO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gIH0ge1xyXG4gICAgbGV0IG9iamVjdENvbnRhaW5lcjogVFtdO1xyXG4gICAgbGV0IGtleXNDb250YWluZXI6IHN0cmluZ1tdO1xyXG4gICAgbGV0IGRvY3VtZW50VG9Mb2FkOiB7XHJcbiAgICAgIGZpZWxkczogRmllbGRbXTtcclxuICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvY3VtZW50cycpID09PSBudWxsKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgYXJlIG5vIGRvY3VtZW50cyB0byBsb2FkIVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9iamVjdENvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvY3VtZW50cycpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSA9PT0gbnVsbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRoZSBhcnJheSBvZiBrZXlzIGlzIGVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5c0NvbnRhaW5lciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2tleXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQ29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChrZXlzQ29udGFpbmVyW2ldID09PSBkb2N1bWVudElEKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0Q29udGFpbmVyW2ldKTtcclxuICAgICAgICBkb2N1bWVudFRvTG9hZCA9IG9iamVjdENvbnRhaW5lcltpXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkb2N1bWVudFRvTG9hZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnQgICAgXHJcbiAgICBjb25zdCBjaGVja0JveElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgY2hlY2tCb3hJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBjaGVja0JveElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQm94RmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjaGVja0JveEZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgY2hlY2tCb3hGaWVsZC5hcHBlbmRDaGlsZChjaGVja0JveElucHV0KTtcclxuICAgIHJldHVybiBjaGVja0JveEZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlRmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgZGF0ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IGRhdGVGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsLnJlbmRlcigpKTtcclxuICAgIGRhdGVGaWVsZC5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gICAgcmV0dXJuIGRhdGVGaWVsZDtcclxuICB9XHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0ZpZWxkXCI7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tIFwiLi9GaWVsZExhYmVsXCI7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9GaWVsZFR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IGVtYWlsSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcblxyXG4gICAgY29uc3QgZW1haWxGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVtYWlsRmllbGQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbC5yZW5kZXIoKSk7XHJcbiAgICBlbWFpbEZpZWxkLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xyXG4gICAgcmV0dXJuIGVtYWlsRmllbGQ7XHJcbiAgfVxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSBcIi4vRmllbGRMYWJlbFwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi4vZW51bXMvRmllbGRUeXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgdGV4dElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICB0ZXh0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgdGV4dElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RmllbGQ6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnB1dEZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgaW5wdXRGaWVsZC5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xyXG4gICAgcmV0dXJuIGlucHV0RmllbGQ7XHJcbiAgfVxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvRmllbGRcIjtcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gXCIuL0ZpZWxkTGFiZWxcIjtcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSBcIi4uL2VudW1zL0ZpZWxkVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IHNlbGVjdDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICdpZCdcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuXHJcbiAgICBjb25zdCBzZWxlY3RGaWVsZDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNlbGVjdEZpZWxkLmFwcGVuZENoaWxkKHRoaXMubGFiZWwucmVuZGVyKCkpO1xyXG4gICAgc2VsZWN0RmllbGQuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcclxuICAgIHJldHVybiBzZWxlY3RGaWVsZDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9GaWVsZFwiO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSBcIi4vRmllbGRMYWJlbFwiO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tIFwiLi4vZW51bXMvRmllbGRUeXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCB0ZXh0YXJlYTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICdpZCdcclxuICAgIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuXHJcbiAgICBjb25zdCB0ZXh0YXJlYUZpZWxkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGV4dGFyZWFGaWVsZC5hcHBlbmRDaGlsZCh0aGlzLmxhYmVsLnJlbmRlcigpKTtcclxuICAgIHRleHRhcmVhRmllbGQuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG4gICAgcmV0dXJuIHRleHRhcmVhRmllbGQ7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufSIsImV4cG9ydCBlbnVtIEZpZWxkVHlwZSB7XHJcbiAgVGV4dCA9IFwidGV4dFwiLCBNdWx0aUxpbmVUZXh0ID0gXCJtdWx0aWxpbmV0ZXh0XCIsIERhdGUgPSBcImRhdGVcIiwgRW1haWwgPSBcImVtYWlsXCIsIFNlbGVjdCA9IFwic2VsZWN0XCIsIENoZWNrYm94ID0gXCJjaGVja2JveFwiXHJcbn0iLCJpbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9jbGFzc2VzL0FwcFwiO1xyXG5pbXBvcnQgeyBGb3JtQ3JlYXRvciB9IGZyb20gXCIuL2NsYXNzZXMvRm9ybUNyZWF0b3JcIjtcclxuaW1wb3J0IHsgTG9jU3RvcmFnZSB9IGZyb20gJy4vY2xhc3Nlcy9Mb2NTdG9yYWdlJztcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL2NsYXNzZXMvZm9ybVwiO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuY29uc3QgbmV3Rm9ybUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1mb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG5jb25zdCBmb3JtTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtTmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5jb25zdCBuZXdGaWVsZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGQtZm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuY29uc3QgZmllbGROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkTmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5jb25zdCByZW5kZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyQnRuJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbmNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZUJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5jb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tCdG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuY29uc3QgZWRpdEZvcm1CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdEZvcm1CdG4nKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbmNvbnN0IGZpZWxkVHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGRUeXBlXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xyXG5cclxuXHJcbmNvbnN0IGZvcm1DcmVhdG9yID0gbmV3IEZvcm1DcmVhdG9yKCk7XHJcbmZvcm1DcmVhdG9yLnN0b3JhZ2UgPSBuZXcgTG9jU3RvcmFnZSgpO1xyXG5cclxuXHJcbi8vIExpc3RlbiBmb3IgYSBzdWJtaXQgZm9yIGEgbmV3IEZvcm0gdG8gYmUgY3JlYXRlZFxyXG5uZXdGb3JtRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vIHZhciBzdHIgPSA7XHJcbiAgLy8gZG9jdW1lbnQud3JpdGUoc3RyLik7XHJcbiAgZm9ybUNyZWF0b3IubmV3Rm9ybShmb3JtTmFtZS52YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpKTtcclxuICBuZXdGb3JtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIG5ld0ZpZWxkRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuLy8gTGlzdGVuIGZvciBhIHN1Ym1pdCBmb3IgYSBuZXcgRmllbGQgdG8gYmUgY3JlYXRlZFxyXG5uZXdGaWVsZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICBmb3JtQ3JlYXRvci5uZXdGaWVsZChmaWVsZE5hbWUudmFsdWUsIGZpZWxkVHlwZS52YWx1ZSk7XHJcbiAgQXBwLmFjdGl2ZUZvcm0uZmllbGRzLnB1c2goQXBwLmFjdGl2ZUZpZWxkKTtcclxuICBuZXdGb3JtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIG5ld0ZpZWxkRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICByZW5kZXJCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgZWRpdEZvcm1CdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgZmllbGROYW1lLnZhbHVlID0gJyc7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8vIExpc3RlbiBmb3IgYSBjYWxsIHRvIHJlbmRlciB0aGUgRm9ybVxyXG5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoQXBwLmFjdGl2ZUZvcm0ucmVuZGVyKCksIHNhdmVCdG4pO1xyXG4gIC8vIG5ld0Zvcm1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgcmVuZGVyQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgc2F2ZUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBlZGl0Rm9ybUJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBiYWNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG5zYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICBmb3JtQ3JlYXRvci5zdG9yYWdlLnNhdmVEb2N1bWVudChBcHAuYWN0aXZlRm9ybSwgJ2RvY3VtZW50cycpO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2luZGV4Lmh0bWwnO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSlcclxuXHJcbmJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2luZGV4Lmh0bWwnO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSkiXSwic291cmNlUm9vdCI6IiJ9