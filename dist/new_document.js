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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/new-document.ts");
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
const fieldType_1 = __webpack_require__(/*! ./fieldType */ "./src/fieldType.ts");
const inputField_1 = __webpack_require__(/*! ./inputField */ "./src/inputField.ts");
const form_1 = __webpack_require__(/*! ./form */ "./src/form.ts");
const checkboxField_1 = __webpack_require__(/*! ./checkboxField */ "./src/checkboxField.ts");
const emailField_1 = __webpack_require__(/*! ./emailField */ "./src/emailField.ts");
const dateField_1 = __webpack_require__(/*! ./dateField */ "./src/dateField.ts");
const textAreaField_1 = __webpack_require__(/*! ./textAreaField */ "./src/textAreaField.ts");
const selectField_1 = __webpack_require__(/*! ./selectField */ "./src/selectField.ts");
class App {
    static createNewForm(name) {
        let form = new form_1.Form(name);
        return form;
    }
    static createNewField(name) {
        let field;
        const selectedFieldType = document.getElementById("fieldType");
        switch (selectedFieldType.value) {
            case 'text':
                field = new inputField_1.InputField(name, fieldType_1.FieldType.Text, '');
                break;
            case 'multiLineText':
                field = new textAreaField_1.TextareaField(name, fieldType_1.FieldType.MultiLineText, '');
                break;
            case 'date':
                field = new dateField_1.DateField(name, fieldType_1.FieldType.Date, '');
                break;
            case 'email':
                field = new emailField_1.EmailField(name, fieldType_1.FieldType.Email, '');
                break;
            case 'select':
                field = new selectField_1.SelectField(name, fieldType_1.FieldType.Select, '');
                break;
            case 'checkbox':
                field = new checkboxField_1.CheckboxField(name, fieldType_1.FieldType.Checkbox, '');
                break;
            default:
                break;
        }
        return field;
    }
}
exports.App = App;
App.forms = [];


/***/ }),

/***/ "./src/checkboxField.ts":
/*!******************************!*\
  !*** ./src/checkboxField.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class CheckboxField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const checkboxField = document.createElement('input');
        checkboxField.setAttribute('id', `${this.name.toLowerCase()}`);
        checkboxField.setAttribute('name', `${this.name.toLowerCase()}`);
        checkboxField.setAttribute('type', `${this.type.toLowerCase()}`);
        return checkboxField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.CheckboxField = CheckboxField;


/***/ }),

/***/ "./src/dateField.ts":
/*!**************************!*\
  !*** ./src/dateField.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class DateField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const dateField = document.createElement('input');
        dateField.setAttribute('id', `${this.name.toLowerCase()}`);
        dateField.setAttribute('name', `${this.name.toLowerCase()}`);
        dateField.setAttribute('type', `${this.type.toLowerCase()}`);
        return dateField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.DateField = DateField;


/***/ }),

/***/ "./src/emailField.ts":
/*!***************************!*\
  !*** ./src/emailField.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class EmailField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const emailField = document.createElement('input');
        emailField.setAttribute('id', `${this.name.toLowerCase()}`);
        emailField.setAttribute('name', `${this.name.toLowerCase()}`);
        emailField.setAttribute('type', `${this.type.toLowerCase()}`);
        return emailField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.EmailField = EmailField;


/***/ }),

/***/ "./src/fieldLabel.ts":
/*!***************************!*\
  !*** ./src/fieldLabel.ts ***!
  \***************************/
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

/***/ "./src/fieldType.ts":
/*!**************************!*\
  !*** ./src/fieldType.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FieldType;
(function (FieldType) {
    FieldType["Text"] = "TEXT";
    FieldType["MultiLineText"] = "MULTILINETEXT";
    FieldType["Date"] = "DATE";
    FieldType["Email"] = "EMAIL";
    FieldType["Select"] = "SELECT";
    FieldType["Checkbox"] = "CHECKBOX";
})(FieldType = exports.FieldType || (exports.FieldType = {}));


/***/ }),

/***/ "./src/form.ts":
/*!*********************!*\
  !*** ./src/form.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class Form {
    constructor(name) {
        this.formFields = [];
        this.formValues = [];
        this.formName = name;
    }
    getValue(htmlElement) {
        this.formFields.forEach(field => {
            const renderedField = document.getElementById(`${field.name.toLowerCase()}`);
            this.formValues.push([`${field.name}`, renderedField.value]);
        });
        const ul = document.createElement('ul');
        ul.textContent = 'Values entered to the form:';
        htmlElement.appendChild(ul);
        this.formValues.forEach(pair => {
            let li = document.createElement('li');
            li.textContent = `${pair[0]}: ${pair[1]}`;
            htmlElement.appendChild(li);
        });
        return this.formValues;
    }
    render(htmlElement) {
        const form = document.createElement('form');
        form.setAttribute('id', `${this.formName.toLowerCase()}`);
        this.formFields.forEach(field => {
            let label = new fieldLabel_1.FieldLabel(field.name);
            form.appendChild(label.render());
            form.appendChild(field.render());
        });
        const header = document.createElement('h3');
        header.textContent = `${this.formName}`;
        htmlElement.appendChild(header);
        const linebreak = document.createElement("br");
        htmlElement.appendChild(linebreak);
        const submitField = document.createElement('input');
        submitField.setAttribute('type', 'submit');
        submitField.setAttribute('id', 'submitRenderedForm');
        submitField.setAttribute('value', 'Submit the Form!');
        form.appendChild(linebreak);
        form.appendChild(submitField);
        htmlElement.appendChild(form);
        const saveBtn = document.createElement('button');
        saveBtn.setAttribute('id', 'saveBtn');
        saveBtn.textContent = 'Save the Form';
        const backBtn = document.createElement('button');
        backBtn.setAttribute('id', 'backBtn');
        backBtn.textContent = 'Go back to Main Menu';
        htmlElement.appendChild(saveBtn);
        htmlElement.appendChild(backBtn);
    }
}
exports.Form = Form;


/***/ }),

/***/ "./src/inputField.ts":
/*!***************************!*\
  !*** ./src/inputField.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class InputField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const inputField = document.createElement('input');
        inputField.setAttribute('id', `${this.name.toLowerCase()}`);
        inputField.setAttribute('name', `${this.name.toLowerCase()}`);
        inputField.setAttribute('type', `${this.type.toLowerCase()}`);
        return inputField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.InputField = InputField;


/***/ }),

/***/ "./src/locStorage.ts":
/*!***************************!*\
  !*** ./src/locStorage.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class LocStorage {
    saveDocument(document) {
        let timeStamp = Date.now();
        let documentID = `${document.formName}-${timeStamp}`;
        let documents;
        let documentIDs;
        if (localStorage.getItem('documents') === null && localStorage.getItem('documentIDs') === null) {
            documents = [];
            documentIDs = [];
        }
        else {
            documents = JSON.parse(localStorage.getItem('documents'));
            documentIDs = JSON.parse(localStorage.getItem('documentIDs'));
        }
        documents.push(document);
        documentIDs.push(documentID);
        localStorage.setItem('documents', JSON.stringify(documents));
        localStorage.setItem('documentIDs', JSON.stringify(documentIDs));
    }
    loadDocument() {
        throw new Error("Method not implemented.");
    }
    getDocuments() {
        throw new Error("Method not implemented.");
    }
}
exports.LocStorage = LocStorage;


/***/ }),

/***/ "./src/new-document.ts":
/*!*****************************!*\
  !*** ./src/new-document.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
const locStorage_1 = __webpack_require__(/*! ./locStorage */ "./src/locStorage.ts");
const newFormForm = document.getElementById('document-form');
const formName = document.getElementById('dLabel');
const newFieldForm = document.getElementById('field-form');
const fieldName = document.getElementById('fLabel');
const renderBtn = document.getElementById('renderBtn');
const renderedForm = document.getElementById('renderedForm');
const formValues = document.getElementById('formValues');
const documentsList = document.getElementById('documentsList');
const saveBtn = document.getElementById('saveBtn');
const backBtn = document.getElementById('backBtn');
const storage = new locStorage_1.LocStorage();
newFormForm.addEventListener('submit', function (e) {
    let newForm = app_1.App.createNewForm(formName.value);
    app_1.App.activeForm = newForm;
    app_1.App.forms.push(newForm);
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'block';
    e.preventDefault();
});
newFieldForm.addEventListener('submit', function (e) {
    let newField = app_1.App.createNewField(fieldName.value);
    app_1.App.activeForm.formFields.push(newField);
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'block';
    renderBtn.style.display = 'block';
    fieldName.value = '';
    e.preventDefault();
});
renderBtn.addEventListener('click', function (e) {
    app_1.App.activeForm.render(renderedForm);
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'none';
    renderBtn.style.display = 'none';
    renderedForm.style.display = 'block';
    saveBtn.style.display = 'block';
    backBtn.style.display = 'block';
    e.preventDefault();
});
saveBtn.addEventListener('click', function (e) {
    storage.saveDocument(app_1.App.activeForm);
    window.location.href = 'index.html';
    e.preventDefault();
});
backBtn.addEventListener('click', function (e) {
    window.location.href = 'index.html';
    e.preventDefault();
});


/***/ }),

/***/ "./src/selectField.ts":
/*!****************************!*\
  !*** ./src/selectField.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class SelectField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const selectField = document.createElement('input');
        selectField.setAttribute('id', `${this.name.toLowerCase()}`);
        selectField.setAttribute('name', `${this.name.toLowerCase()}`);
        selectField.setAttribute('type', `${this.type.toLowerCase()}`);
        return selectField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.SelectField = SelectField;


/***/ }),

/***/ "./src/textAreaField.ts":
/*!******************************!*\
  !*** ./src/textAreaField.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fieldLabel_1 = __webpack_require__(/*! ./fieldLabel */ "./src/fieldLabel.ts");
class TextareaField {
    constructor(name, type, value) {
        this.name = name;
        this.label = new fieldLabel_1.FieldLabel(name);
        this.type = type;
        this.value = value;
    }
    render() {
        const textareaField = document.createElement('input');
        textareaField.setAttribute('id', `${this.name.toLowerCase()}`);
        textareaField.setAttribute('name', `${this.name.toLowerCase()}`);
        textareaField.setAttribute('type', `${this.type.toLowerCase()}`);
        return textareaField;
    }
    getValue() {
        const input = document.getElementById(`${this.name.toLowerCase()}`);
        return input.value;
    }
}
exports.TextareaField = TextareaField;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tib3hGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0ZUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbEZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9maWVsZExhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9maWVsZFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY1N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldy1kb2N1bWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0RmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHRBcmVhRmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztR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QUssQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBNUJELGtDQTRCQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JELG9GQUEwQztBQUcxQyxNQUFhLGFBQWE7SUFNeEIsWUFBWSxJQUFZLEVBQUUsSUFBZSxFQUFFLEtBQWE7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELE1BQU07UUFFSixNQUFNLGFBQWEsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4RSxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakUsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqRSxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQXdCLENBQUM7UUFDM0YsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQTVCRCxzQ0E0QkMiLCJmaWxlIjoibmV3X2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbmV3LWRvY3VtZW50LnRzXCIpO1xuIiwiaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZFR5cGUnO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gJy4vaW5wdXRGaWVsZCc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi9mb3JtJzsgLy8gQ1RSTCArIC5cbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBDaGVja2JveEZpZWxkIH0gZnJvbSAnLi9jaGVja2JveEZpZWxkJztcbmltcG9ydCB7IEVtYWlsRmllbGQgfSBmcm9tICcuL2VtYWlsRmllbGQnO1xuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9kYXRlRmllbGQnO1xuaW1wb3J0IHsgVGV4dGFyZWFGaWVsZCB9IGZyb20gJy4vdGV4dEFyZWFGaWVsZCc7XG5pbXBvcnQgeyBTZWxlY3RGaWVsZCB9IGZyb20gJy4vc2VsZWN0RmllbGQnO1xuXG4vLyBrbGFzYSB6YXJ6xIVkemFqxIVjYSB6IHdzenlzdGtpbWkgcG9kc3Rhd293eW1pIGZ1bmtjamFtaSBhcGxpa2Fjamkg4oCTIHJlYWdvd2FuaWVtIG5hIGVsZW1lbnR5IGludGVyZmVqc3UsIHd5xZt3aWV0bGFuaWVtIGZvcm11bGFyenkgaXRkLlxuLyogXG5cbkVmZWt0ZW0gcHJhY3kgcG93aW5uYSBiecSHIGFwbGlrYWNqYSBrdMOzcmEgcG96d2FsYSB3ecWbd2lldGxpxIcgc3RhdHljem5pZSB6YWtvZG93YW55IGZvcm11bGFyei4gUG93aW5uYSB0ZcW8IHVtb8W8bGl3acSHIHBvYnJhbmllIHd5bmlrw7N3IGFua2lldHkgKHdhcnRvxZtjaSBmb3JtdWxhcnphKSBpIHd5xZt3aWV0bGVuaWUgaWNoIHcgZG93b2xueW0gbWllanNjdSBla3JhbnUgKGplZHluaWUgZGxhIHRlc3R1IG1ldG9keSBnZXRWYWx1ZSgpIGtsYXN5IEZvcm0pLiBcblxuUHJ6eWvFgmFkb3d5IGZvcm11bGFyeiBkbyB3ecWbd2lldGxlbmlhOiBcbjEuXHRJbWnEmSAocG9sZSB0ZWtzdG93ZSkgXG4yLlx0TmF6d2lza28gKHBvbGUgdGVrc3Rvd2UpIFxuMy5cdEUtbWFpbCAocG9sZSBlLW1haWwpIFxuNC5cdFd5YnJhbnkga2llcnVuZWsgc3R1ZGnDs3cgKHNlbGVjdCkgXG41Llx0Q3p5IHByZWZlcnVqZXN6IGUtbGVhcm5pbmcgKGNoZWNrYm94KSBcbjYuXHRVd2FnaSAodGV4dGFyZWEpIFxuKi9cblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gICAgc3RhdGljIGZvcm1zOiBGb3JtW10gPSBbXTtcbiAgICBzdGF0aWMgYWN0aXZlRm9ybTogRm9ybTtcblxuICAgIHN0YXRpYyBjcmVhdGVOZXdGb3JtKG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZm9ybSA9IG5ldyBGb3JtKG5hbWUpO1xuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTmV3RmllbGQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWVsZDogRmllbGQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmllbGRUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZFR5cGVcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRGaWVsZFR5cGUudmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IElucHV0RmllbGQobmFtZSwgRmllbGRUeXBlLlRleHQsICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbXVsdGlMaW5lVGV4dCc6XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgVGV4dGFyZWFGaWVsZChuYW1lLCBGaWVsZFR5cGUuTXVsdGlMaW5lVGV4dCwgJycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBEYXRlRmllbGQobmFtZSwgRmllbGRUeXBlLkRhdGUsICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IEVtYWlsRmllbGQobmFtZSwgRmllbGRUeXBlLkVtYWlsLCAnJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgU2VsZWN0RmllbGQobmFtZSwgRmllbGRUeXBlLlNlbGVjdCwgJycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgQ2hlY2tib3hGaWVsZChuYW1lLCBGaWVsZFR5cGUuQ2hlY2tib3gsICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxufVxuXG5cbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBjaGVja2JveEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgY2hlY2tib3hGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgY2hlY2tib3hGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBjaGVja2JveEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgcmV0dXJuIGNoZWNrYm94RmllbGQ7XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgcmV0dXJuIGlucHV0LnZhbHVlO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZUZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IGRhdGVGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICdpZCdcclxuICAgIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIHJldHVybiBkYXRlRmllbGQ7XHJcbiAgfVxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gJy4vZmllbGRMYWJlbCc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vZmllbGRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IGVtYWlsRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBlbWFpbEZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBlbWFpbEZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIGVtYWlsRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICByZXR1cm4gZW1haWxGaWVsZDtcclxuICB9XHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCIvLyA9PiB3ecWbd2lldGxhIGV0eWtpZXRlXHJcbmV4cG9ydCBjbGFzcyBGaWVsZExhYmVsIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgTGFiZWwgZWxlbWVudFxyXG4gICAgY29uc3QgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnZm9yJ1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBUZXh0XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX1gO1xyXG4gICAgcmV0dXJuIGxhYmVsIGFzIEhUTUxFbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCIvLyBlbnVtZXJhdG9yIEZpZWxkVHlwZSBrdMOzcnkgYsSZZHppZSBkZWZpbmlvd2HFgiB0eXB5IHDDs2wgbW/FvGxpd3ljaCBkbyB1xbx5Y2lhIHcgYW5raWVjaWUgKHBvbGUgdGVrc3Rvd2UsIHBvbGUgd2llbG9saW5pamtvd2UsIGRhdGEsIGUtbWFpbCwgcG9sZSB3eWJvcnUsIGNoZWNrYm94KVxyXG5cclxuZXhwb3J0IGVudW0gRmllbGRUeXBlIHtcclxuICBUZXh0ID0gXCJURVhUXCIsIE11bHRpTGluZVRleHQgPSBcIk1VTFRJTElORVRFWFRcIiwgRGF0ZSA9IFwiREFURVwiLCBFbWFpbCA9IFwiRU1BSUxcIiwgU2VsZWN0ID0gXCJTRUxFQ1RcIiwgQ2hlY2tib3ggPSBcIkNIRUNLQk9YXCJcclxufSIsImltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xyXG4vLyBLbGFzYSBmb3JtIG9kcG93aWFkYSB6YSBwcnpldHJ6eW15d2FuaWUgIGNhxYJvxZtjaSBpbmZvcm1hY2ppIG8gZm9ybXVsYXJ6dSBvcmF6IGplZ28gd3nFm3dpZXRsYW5pZS5cclxuXHJcbi8vIFcga2xhc2llIHBvd2lubnkgYnnEhyBwcnplY2hvd3l3YW5lIGluZm9ybWFjamUgbyB3c3p5c3RraWNoIHBvbGFjaCBmb3JtdWxhcnphICh0YWJsaWNhIGVsZW1lbnTDs3cgRmllbGQpLlxyXG5cclxuLy8gS2xhc2EgcG93aW5uYSB1ZG9zdMSZcG5pYcSHIGR3aWUgbWV0b2R5OlxyXG4vLyAtIGdldFZhbHVlKCkgcG9iaWVyYWrEhWPEhSB3eW5pa2kgZm9ybXVsYXJ6YVxyXG4vLyAtIHJlbmRlcigpIHd5xZt3aWV0bGFqxIVjxIUgZm9ybXVsYXJ6IHdlIHdza2F6YW55bSBtaWVqc2N1LlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIHtcclxuICBmb3JtTmFtZTogc3RyaW5nO1xyXG4gIGZvcm1GaWVsZHM6IEZpZWxkW10gPSBbXTtcclxuICBmb3JtVmFsdWVzOiBbc3RyaW5nLCBzdHJpbmddW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZvcm1OYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5mb3JtRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb25zdCByZW5kZXJlZEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuZm9ybVZhbHVlcy5wdXNoKFtgJHtmaWVsZC5uYW1lfWAsIHJlbmRlcmVkRmllbGQudmFsdWVdKTtcclxuICAgIH0pO1xyXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGVyIFxyXG4gICAgY29uc3QgdWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIC8vIFNldCB0aGUgaGVhZGVyIHRleHQgY29udGVudCB0byB0aGUgbmFtZSBvZiB0aGUgRm9ybVxyXG4gICAgdWwudGV4dENvbnRlbnQgPSAnVmFsdWVzIGVudGVyZWQgdG8gdGhlIGZvcm06JztcclxuICAgIC8vIEFwcGVuZCB0aGUgaGVhZGVyIHRvIHRoZSBlbGVtZW50IHdoZXJlIHRoZSBmb3JtIHNob3VsZCBiZSByZW5kZXJlZFxyXG4gICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgdGhpcy5mb3JtVmFsdWVzLmZvckVhY2gocGFpciA9PiB7XHJcbiAgICAgIGxldCBsaTogSFRNTExJRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7cGFpclswXX06ICR7cGFpclsxXX1gO1xyXG4gICAgICBodG1sRWxlbWVudC5hcHBlbmRDaGlsZChsaSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gdGhpcy5mb3JtVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgLy8gQ3JlYXRlIGZvcm0gZWxlbWVudFxyXG4gICAgY29uc3QgZm9ybTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLmZvcm1OYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBcHBlbmQgZmllbGRzIHRvIHRoZSBmb3JtXHJcbiAgICB0aGlzLmZvcm1GaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGxldCBsYWJlbCA9IG5ldyBGaWVsZExhYmVsKGZpZWxkLm5hbWUpXHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwucmVuZGVyKCkpXHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQucmVuZGVyKCkpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBDcmVhdGUgYSBoZWFkZXIgd2l0aCB0aGUgbmFtZSBvZiB0aGUgRm9ybVxyXG4gICAgY29uc3QgaGVhZGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAvLyBTZXQgdGhlIGhlYWRlciB0ZXh0IGNvbnRlbnQgdG8gdGhlIG5hbWUgb2YgdGhlIEZvcm1cclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3RoaXMuZm9ybU5hbWV9YDtcclxuICAgIC8vIEFwcGVuZCB0aGUgaGVhZGVyIHRvIHRoZSBlbGVtZW50IHdoZXJlIHRoZSBmb3JtIHNob3VsZCBiZSByZW5kZXJlZFxyXG4gICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbnN0IGxpbmVicmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICAgIGh0bWxFbGVtZW50LmFwcGVuZENoaWxkKGxpbmVicmVhayk7XHJcbiAgICBjb25zdCBzdWJtaXRGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBzdWJtaXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFJlbmRlcmVkRm9ybScpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndmFsdWUnXHJcbiAgICBzdWJtaXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1N1Ym1pdCB0aGUgRm9ybSEnKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGluZWJyZWFrKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0RmllbGQpO1xyXG4gICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgYnV0dG9uIGZvciBzYXZpbmcgdGhlIEZvcm1cclxuICAgIGNvbnN0IHNhdmVCdG46IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2F2ZUJ0bicpO1xyXG4gICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlIHRoZSBGb3JtJztcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBidXR0b24gZm9yIGdvaW5nIGJhY2sgdG8gbWVudVxyXG4gICAgY29uc3QgYmFja0J0bjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJhY2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrQnRuJyk7XHJcbiAgICBiYWNrQnRuLnRleHRDb250ZW50ID0gJ0dvIGJhY2sgdG8gTWFpbiBNZW51JztcclxuICAgIGh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHNhdmVCdG4pO1xyXG4gICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoYmFja0J0bik7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gJy4vZmllbGRMYWJlbCc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vZmllbGRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBpbnB1dEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgcmV0dXJuIGlucHV0RmllbGQ7XHJcbiAgfVxyXG4gIGdldFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERhdGFTdG9yYWdlIH0gZnJvbSAnLi9kYXRhU3RvcmFnZSc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL2Zvcm0nO1xyXG5cclxuLypcclxuIC0gemFwaXN1aiBkb2t1bWVudHkgdcW8eXdhasSFYyBrbHVjemEgZG9rdW1lbnR1IGpha28ga2x1Y3phIGVsZW1lbnR1IHcgbG9jYWxTdG9yYWdlXHJcbiAtIG1ldG9kYSBzYXZlRG9jdW1lbnQoKSBwb3dpbm5hIHd5Z2VuZXJvd2HEhyB1bmlrYWxueSBpZGVudHlmaWthdG9yIGRva3VtZW50dS4gVcW8eWogRGF0ZS5ub3coKSBkbyBwb2JyYW5pYSBkYXR5ICh0aW1lc3RhbXApIHphcGlzYW5pYSBkb2t1bWVudHUuIElkZW5meXRpa2F0b3IgdHfDs3J6IHcgb3BhcmNpdSBvIHN6YWJsb24gXCJkb2N1bWVudC10aW1lc3RhbXBcIi5cclxuIC0gemFwYW1pxJl0YWogd3N6eXN0a2llIGRva3VtZW50eSAoaWQgZG9rdW1lbnR1KSB3IG9zb2JueW0gZWxlbWVuY2llIHcgbG9jYWxTdG9yYWdlICh0YWJsaWNhKS5cclxuIC0gcGFtacSZdGFqLCDFvGUgdyBsb2NhbFN0b3JhZ2UgemFwaXN1amVteSBzdHJpbmdpLiBBYnkgemFwaXNhxIcgb2JpZWt0IHogd2FydG/Fm2NpYW1pIGZvcm11bGFyemEgdcW8eWogb2JpZWt0dSBKU09OIGRvIHNlcmlhbGl6YWNqaSBkYW55Y2guXHJcblxyXG4qL1xyXG5cclxuZXhwb3J0IGNsYXNzIExvY1N0b3JhZ2UgaW1wbGVtZW50cyBEYXRhU3RvcmFnZSB7XHJcbiAgc2F2ZURvY3VtZW50KGRvY3VtZW50OiBGb3JtKTogdm9pZCB7XHJcbiAgICBsZXQgdGltZVN0YW1wOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgbGV0IGRvY3VtZW50SUQ6IHN0cmluZyA9IGAke2RvY3VtZW50LmZvcm1OYW1lfS0ke3RpbWVTdGFtcH1gO1xyXG4gICAgbGV0IGRvY3VtZW50czogRm9ybVtdO1xyXG4gICAgbGV0IGRvY3VtZW50SURzOiBzdHJpbmdbXTtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRzJykgPT09IG51bGwgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RvY3VtZW50SURzJykgPT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnRzID0gW107XHJcbiAgICAgIGRvY3VtZW50SURzID0gW107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkb2N1bWVudHMnKSk7XHJcbiAgICAgIGRvY3VtZW50SURzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZG9jdW1lbnRJRHMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnRzLnB1c2goZG9jdW1lbnQpO1xyXG4gICAgZG9jdW1lbnRJRHMucHVzaChkb2N1bWVudElEKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb2N1bWVudHMnLCBKU09OLnN0cmluZ2lmeShkb2N1bWVudHMpKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkb2N1bWVudElEcycsIEpTT04uc3RyaW5naWZ5KGRvY3VtZW50SURzKSk7XHJcbiAgfVxyXG5cclxuICBsb2FkRG9jdW1lbnQoKTogdm9pZCB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcbiAgZ2V0RG9jdW1lbnRzKCk6IHZvaWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAnO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi9mb3JtJztcclxuaW1wb3J0IHsgTG9jU3RvcmFnZSB9IGZyb20gJy4vbG9jU3RvcmFnZSc7XHJcblxyXG5jb25zdCBuZXdGb3JtRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2N1bWVudC1mb3JtJyk7XHJcbmNvbnN0IGZvcm1OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RMYWJlbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG5jb25zdCBuZXdGaWVsZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGQtZm9ybScpO1xyXG5jb25zdCBmaWVsZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZkxhYmVsJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbmNvbnN0IHJlbmRlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5kZXJCdG4nKTtcclxuY29uc3QgcmVuZGVyZWRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbmRlcmVkRm9ybScpO1xyXG5cclxuY29uc3QgZm9ybVZhbHVlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVmFsdWVzJyk7XHJcbmNvbnN0IGRvY3VtZW50c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jdW1lbnRzTGlzdCcpO1xyXG5cclxuY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlQnRuJyk7XHJcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja0J0bicpO1xyXG5cclxuY29uc3Qgc3RvcmFnZSA9IG5ldyBMb2NTdG9yYWdlKCk7XHJcblxyXG4vLyBMaXN0ZW4gZm9yIGEgc3VibWl0IGZvciBhIG5ldyBGb3JtIHRvIGJlIGNyZWF0ZWRcclxubmV3Rm9ybUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICBsZXQgbmV3Rm9ybSA9IEFwcC5jcmVhdGVOZXdGb3JtKGZvcm1OYW1lLnZhbHVlKTtcclxuICBBcHAuYWN0aXZlRm9ybSA9IG5ld0Zvcm07XHJcbiAgQXBwLmZvcm1zLnB1c2gobmV3Rm9ybSk7XHJcbiAgbmV3Rm9ybUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBuZXdGaWVsZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8vIExpc3RlbiBmb3IgYSBzdWJtaXQgZm9yIGEgbmV3IEZpZWxkIHRvIGJlIGNyZWF0ZWRcclxubmV3RmllbGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgbGV0IG5ld0ZpZWxkID0gQXBwLmNyZWF0ZU5ld0ZpZWxkKGZpZWxkTmFtZS52YWx1ZSk7XHJcbiAgQXBwLmFjdGl2ZUZvcm0uZm9ybUZpZWxkcy5wdXNoKG5ld0ZpZWxkKTtcclxuICBuZXdGb3JtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIG5ld0ZpZWxkRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICByZW5kZXJCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgZmllbGROYW1lLnZhbHVlID0gJyc7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59KTtcclxuXHJcbi8vIExpc3RlbiBmb3IgYSBjYWxsIHRvIHJlbmRlciB0aGUgRm9ybVxyXG5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIEFwcC5hY3RpdmVGb3JtLnJlbmRlcihyZW5kZXJlZEZvcm0pO1xyXG4gIG5ld0Zvcm1Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgcmVuZGVyQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgcmVuZGVyZWRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHNhdmVCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgYmFja0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbn0pO1xyXG5cclxuc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgc3RvcmFnZS5zYXZlRG9jdW1lbnQoQXBwLmFjdGl2ZUZvcm0pO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2luZGV4Lmh0bWwnO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSlcclxuXHJcbmJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2luZGV4Lmh0bWwnO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSkiLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9maWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IHNlbGVjdEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgc2VsZWN0RmllbGQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIHNlbGVjdEZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIHNlbGVjdEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgcmV0dXJuIHNlbGVjdEZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9maWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhRmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgdGV4dGFyZWFGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICdpZCdcclxuICAgIHRleHRhcmVhRmllbGQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIHRleHRhcmVhRmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgdGV4dGFyZWFGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIHJldHVybiB0ZXh0YXJlYUZpZWxkO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCkgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9