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
        console.log(`new Form name: ${form.formName}`);
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
        console.log(`createNewField has been called and it's type is: ${field.type}`);
        return field;
    }
}
exports.App = App;


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
    }
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
const formName = document.getElementById('dLabel');
const newFieldForm = document.getElementById('field-form');
const fieldName = document.getElementById('fLabel');
const renderBtn = document.getElementById('renderBtn');
const renderedForm = document.getElementById('renderedForm');
const formValues = document.getElementById('formValues');
let forms = [];
newFormForm.addEventListener('submit', function (e) {
    let newForm = app_1.App.createNewForm(formName.value);
    forms.push(newForm);
    app_1.App.activeForm = newForm;
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
    console.log(app_1.App.activeForm.formFields);
    fieldName.value = '';
    e.preventDefault();
});
renderBtn.addEventListener('click', function (e) {
    app_1.App.activeForm.render(renderedForm);
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'none';
    renderBtn.style.display = 'none';
    renderedForm.style.display = 'block';
    e.preventDefault();
});
renderedForm.addEventListener('submit', function (e) {
    console.log(app_1.App.activeForm.getValue(formValues));
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'none';
    renderBtn.style.display = 'none';
    renderedForm.style.display = 'none';
    formValues.style.display = 'block';
    e.preventDefault();
});


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
}
exports.InputField = InputField;


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
}
exports.TextareaField = TextareaField;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tib3hGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0ZUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbEZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9maWVsZExhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9maWVsZFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dEZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3RGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dEFyZWFGaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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Q3JCLENBQUM7SUFDRCxNQUFNO1FBRUosTUFBTSxhQUFhLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEUsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUvRCxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpFLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakUsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBdkJELHNDQXVCQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZFR5cGUnO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gJy4vaW5wdXRGaWVsZCc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi9mb3JtJzsgLy8gQ1RSTCArIC5cbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBDaGVja2JveEZpZWxkIH0gZnJvbSAnLi9jaGVja2JveEZpZWxkJztcbmltcG9ydCB7IEVtYWlsRmllbGQgfSBmcm9tICcuL2VtYWlsRmllbGQnO1xuaW1wb3J0IHsgRGF0ZUZpZWxkIH0gZnJvbSAnLi9kYXRlRmllbGQnO1xuaW1wb3J0IHsgVGV4dGFyZWFGaWVsZCB9IGZyb20gJy4vdGV4dEFyZWFGaWVsZCc7XG5pbXBvcnQgeyBTZWxlY3RGaWVsZCB9IGZyb20gJy4vc2VsZWN0RmllbGQnO1xuXG4vLyBrbGFzYSB6YXJ6xIVkemFqxIVjYSB6IHdzenlzdGtpbWkgcG9kc3Rhd293eW1pIGZ1bmtjamFtaSBhcGxpa2Fjamkg4oCTIHJlYWdvd2FuaWVtIG5hIGVsZW1lbnR5IGludGVyZmVqc3UsIHd5xZt3aWV0bGFuaWVtIGZvcm11bGFyenkgaXRkLlxuLyogXG5cbkVmZWt0ZW0gcHJhY3kgcG93aW5uYSBiecSHIGFwbGlrYWNqYSBrdMOzcmEgcG96d2FsYSB3ecWbd2lldGxpxIcgc3RhdHljem5pZSB6YWtvZG93YW55IGZvcm11bGFyei4gUG93aW5uYSB0ZcW8IHVtb8W8bGl3acSHIHBvYnJhbmllIHd5bmlrw7N3IGFua2lldHkgKHdhcnRvxZtjaSBmb3JtdWxhcnphKSBpIHd5xZt3aWV0bGVuaWUgaWNoIHcgZG93b2xueW0gbWllanNjdSBla3JhbnUgKGplZHluaWUgZGxhIHRlc3R1IG1ldG9keSBnZXRWYWx1ZSgpIGtsYXN5IEZvcm0pLiBcblxuUHJ6eWvFgmFkb3d5IGZvcm11bGFyeiBkbyB3ecWbd2lldGxlbmlhOiBcbjEuXHRJbWnEmSAocG9sZSB0ZWtzdG93ZSkgXG4yLlx0TmF6d2lza28gKHBvbGUgdGVrc3Rvd2UpIFxuMy5cdEUtbWFpbCAocG9sZSBlLW1haWwpIFxuNC5cdFd5YnJhbnkga2llcnVuZWsgc3R1ZGnDs3cgKHNlbGVjdCkgXG41Llx0Q3p5IHByZWZlcnVqZXN6IGUtbGVhcm5pbmcgKGNoZWNrYm94KSBcbjYuXHRVd2FnaSAodGV4dGFyZWEpIFxuXG4qL1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBzdGF0aWMgYWN0aXZlRm9ybTogRm9ybTtcblxuICAgIHN0YXRpYyBjcmVhdGVOZXdGb3JtKG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZm9ybSA9IG5ldyBGb3JtKG5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhgbmV3IEZvcm0gbmFtZTogJHtmb3JtLmZvcm1OYW1lfWApO1xuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlTmV3RmllbGQobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWVsZDogRmllbGQ7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkRmllbGRUeXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZFR5cGVcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgICAgIHN3aXRjaCAoc2VsZWN0ZWRGaWVsZFR5cGUudmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IElucHV0RmllbGQobmFtZSwgRmllbGRUeXBlLlRleHQsICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbXVsdGlMaW5lVGV4dCc6XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgVGV4dGFyZWFGaWVsZChuYW1lLCBGaWVsZFR5cGUuTXVsdGlMaW5lVGV4dCwgJycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBEYXRlRmllbGQobmFtZSwgRmllbGRUeXBlLkRhdGUsICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IEVtYWlsRmllbGQobmFtZSwgRmllbGRUeXBlLkVtYWlsLCAnJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgU2VsZWN0RmllbGQobmFtZSwgRmllbGRUeXBlLlNlbGVjdCwgJycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgQ2hlY2tib3hGaWVsZChuYW1lLCBGaWVsZFR5cGUuQ2hlY2tib3gsICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgY3JlYXRlTmV3RmllbGQgaGFzIGJlZW4gY2FsbGVkIGFuZCBpdCdzIHR5cGUgaXM6ICR7ZmllbGQudHlwZX1gKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9maWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNrYm94RmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgY2hlY2tib3hGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICdpZCdcclxuICAgIGNoZWNrYm94RmllbGQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIGNoZWNrYm94RmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgY2hlY2tib3hGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIHJldHVybiBjaGVja2JveEZpZWxkO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0ZUZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IGRhdGVGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICdpZCdcclxuICAgIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgZGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIHJldHVybiBkYXRlRmllbGQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gJy4vZmllbGRMYWJlbCc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vZmllbGRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFbWFpbEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IGVtYWlsRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBlbWFpbEZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBlbWFpbEZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIGVtYWlsRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICByZXR1cm4gZW1haWxGaWVsZDtcclxuICB9XHJcbn0iLCIvLyA9PiB3ecWbd2lldGxhIGV0eWtpZXRlXHJcbmV4cG9ydCBjbGFzcyBGaWVsZExhYmVsIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgTGFiZWwgZWxlbWVudFxyXG4gICAgY29uc3QgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnZm9yJ1xyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBUZXh0XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGAke3RoaXMubmFtZX1gO1xyXG4gICAgcmV0dXJuIGxhYmVsIGFzIEhUTUxFbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCIvLyBlbnVtZXJhdG9yIEZpZWxkVHlwZSBrdMOzcnkgYsSZZHppZSBkZWZpbmlvd2HFgiB0eXB5IHDDs2wgbW/FvGxpd3ljaCBkbyB1xbx5Y2lhIHcgYW5raWVjaWUgKHBvbGUgdGVrc3Rvd2UsIHBvbGUgd2llbG9saW5pamtvd2UsIGRhdGEsIGUtbWFpbCwgcG9sZSB3eWJvcnUsIGNoZWNrYm94KVxyXG5cclxuZXhwb3J0IGVudW0gRmllbGRUeXBlIHtcclxuICBUZXh0ID0gXCJURVhUXCIsIE11bHRpTGluZVRleHQgPSBcIk1VTFRJTElORVRFWFRcIiwgRGF0ZSA9IFwiREFURVwiLCBFbWFpbCA9IFwiRU1BSUxcIiwgU2VsZWN0ID0gXCJTRUxFQ1RcIiwgQ2hlY2tib3ggPSBcIkNIRUNLQk9YXCJcclxufSIsImltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xyXG4vLyBLbGFzYSBmb3JtIG9kcG93aWFkYSB6YSBwcnpldHJ6eW15d2FuaWUgIGNhxYJvxZtjaSBpbmZvcm1hY2ppIG8gZm9ybXVsYXJ6dSBvcmF6IGplZ28gd3nFm3dpZXRsYW5pZS5cclxuXHJcbi8vIFcga2xhc2llIHBvd2lubnkgYnnEhyBwcnplY2hvd3l3YW5lIGluZm9ybWFjamUgbyB3c3p5c3RraWNoIHBvbGFjaCBmb3JtdWxhcnphICh0YWJsaWNhIGVsZW1lbnTDs3cgRmllbGQpLlxyXG5cclxuLy8gS2xhc2EgcG93aW5uYSB1ZG9zdMSZcG5pYcSHIGR3aWUgbWV0b2R5OlxyXG4vLyAtIGdldFZhbHVlKCkgcG9iaWVyYWrEhWPEhSB3eW5pa2kgZm9ybXVsYXJ6YVxyXG4vLyAtIHJlbmRlcigpIHd5xZt3aWV0bGFqxIVjxIUgZm9ybXVsYXJ6IHdlIHdza2F6YW55bSBtaWVqc2N1LlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIHtcclxuICBmb3JtTmFtZTogc3RyaW5nO1xyXG4gIGZvcm1GaWVsZHM6IEZpZWxkW10gPSBbXTtcclxuICBmb3JtVmFsdWVzOiBbc3RyaW5nLCBzdHJpbmddW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZvcm1OYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5mb3JtRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBjb25zdCByZW5kZXJlZEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZmllbGQubmFtZS50b0xvd2VyQ2FzZSgpfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuZm9ybVZhbHVlcy5wdXNoKFtgJHtmaWVsZC5uYW1lfWAsIHJlbmRlcmVkRmllbGQudmFsdWVdKTtcclxuICAgIH0pO1xyXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGVyIFxyXG4gICAgY29uc3QgdWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIC8vIFNldCB0aGUgaGVhZGVyIHRleHQgY29udGVudCB0byB0aGUgbmFtZSBvZiB0aGUgRm9ybVxyXG4gICAgdWwudGV4dENvbnRlbnQgPSAnVmFsdWVzIGVudGVyZWQgdG8gdGhlIGZvcm06JztcclxuICAgIC8vIEFwcGVuZCB0aGUgaGVhZGVyIHRvIHRoZSBlbGVtZW50IHdoZXJlIHRoZSBmb3JtIHNob3VsZCBiZSByZW5kZXJlZFxyXG4gICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodWwpO1xyXG4gICAgdGhpcy5mb3JtVmFsdWVzLmZvckVhY2gocGFpciA9PiB7XHJcbiAgICAgIGxldCBsaTogSFRNTExJRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGxpLnRleHRDb250ZW50ID0gYCR7cGFpclswXX06ICR7cGFpclsxXX1gO1xyXG4gICAgICBodG1sRWxlbWVudC5hcHBlbmRDaGlsZChsaSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gdGhpcy5mb3JtVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgLy8gQ3JlYXRlIGZvcm0gZWxlbWVudFxyXG4gICAgY29uc3QgZm9ybTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLmZvcm1OYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBcHBlbmQgZmllbGRzIHRvIHRoZSBmb3JtXHJcbiAgICB0aGlzLmZvcm1GaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIGxldCBsYWJlbCA9IG5ldyBGaWVsZExhYmVsKGZpZWxkLm5hbWUpXHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwucmVuZGVyKCkpXHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGQucmVuZGVyKCkpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBDcmVhdGUgYSBoZWFkZXIgd2l0aCB0aGUgbmFtZSBvZiB0aGUgRm9ybVxyXG4gICAgY29uc3QgaGVhZGVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAvLyBTZXQgdGhlIGhlYWRlciB0ZXh0IGNvbnRlbnQgdG8gdGhlIG5hbWUgb2YgdGhlIEZvcm1cclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3RoaXMuZm9ybU5hbWV9YDtcclxuICAgIC8vIEFwcGVuZCB0aGUgaGVhZGVyIHRvIHRoZSBlbGVtZW50IHdoZXJlIHRoZSBmb3JtIHNob3VsZCBiZSByZW5kZXJlZFxyXG4gICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGNvbnN0IGxpbmVicmVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKTtcclxuICAgIGh0bWxFbGVtZW50LmFwcGVuZENoaWxkKGxpbmVicmVhayk7XHJcbiAgICBjb25zdCBzdWJtaXRGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBzdWJtaXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFJlbmRlcmVkRm9ybScpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndmFsdWUnXHJcbiAgICBzdWJtaXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1N1Ym1pdCB0aGUgRm9ybSEnKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGluZWJyZWFrKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0RmllbGQpO1xyXG4gICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9hcHAnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL2Zvcm0nO1xuXG5jb25zdCBuZXdGb3JtRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2N1bWVudC1mb3JtJyk7XG5jb25zdCBmb3JtTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkTGFiZWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG5jb25zdCBuZXdGaWVsZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGQtZm9ybScpO1xuY29uc3QgZmllbGROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZMYWJlbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbmNvbnN0IHJlbmRlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5kZXJCdG4nKTtcbmNvbnN0IHJlbmRlcmVkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5kZXJlZEZvcm0nKTtcbmNvbnN0IGZvcm1WYWx1ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVZhbHVlcycpO1xuXG5cbmxldCBmb3JtczogRm9ybVtdID0gW107XG5cbi8vIExpc3RlbiBmb3IgYSBzdWJtaXQgZm9yIGEgbmV3IEZvcm0gdG8gYmUgY3JlYXRlZFxubmV3Rm9ybUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgbGV0IG5ld0Zvcm0gPSBBcHAuY3JlYXRlTmV3Rm9ybShmb3JtTmFtZS52YWx1ZSk7XG4gIGZvcm1zLnB1c2gobmV3Rm9ybSk7XG4gIEFwcC5hY3RpdmVGb3JtID0gbmV3Rm9ybTtcbiAgbmV3Rm9ybUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gTGlzdGVuIGZvciBhIHN1Ym1pdCBmb3IgYSBuZXcgRmllbGQgdG8gYmUgY3JlYXRlZFxubmV3RmllbGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGxldCBuZXdGaWVsZCA9IEFwcC5jcmVhdGVOZXdGaWVsZChmaWVsZE5hbWUudmFsdWUpO1xuICBBcHAuYWN0aXZlRm9ybS5mb3JtRmllbGRzLnB1c2gobmV3RmllbGQpO1xuICBuZXdGb3JtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBuZXdGaWVsZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHJlbmRlckJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgY29uc29sZS5sb2coQXBwLmFjdGl2ZUZvcm0uZm9ybUZpZWxkcyk7XG4gIGZpZWxkTmFtZS52YWx1ZSA9ICcnO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gTGlzdGVuIGZvciBhIGNhbGwgdG8gcmVuZGVyIHRoZSBGb3JtXG5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICBBcHAuYWN0aXZlRm9ybS5yZW5kZXIocmVuZGVyZWRGb3JtKTtcbiAgbmV3Rm9ybUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlbmRlckJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZW5kZXJlZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4vLyBMaXN0ZW4gZm9yIGEgc3VibWl0IG9uIHRoZSByZW5kZXJlZCB0aGUgRm9ybVxucmVuZGVyZWRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnNvbGUubG9nKEFwcC5hY3RpdmVGb3JtLmdldFZhbHVlKGZvcm1WYWx1ZXMpKTtcbiAgbmV3Rm9ybUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlbmRlckJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZW5kZXJlZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZm9ybVZhbHVlcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG4iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9maWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3QgaW5wdXRGaWVsZDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICdpZCdcclxuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBgJHt0aGlzLnR5cGUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIHJldHVybiBpbnB1dEZpZWxkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9maWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IHNlbGVjdEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgc2VsZWN0RmllbGQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIHNlbGVjdEZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIHNlbGVjdEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgcmV0dXJuIHNlbGVjdEZpZWxkO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCB0ZXh0YXJlYUZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgdGV4dGFyZWFGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgdGV4dGFyZWFGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICB0ZXh0YXJlYUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgcmV0dXJuIHRleHRhcmVhRmllbGQ7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==