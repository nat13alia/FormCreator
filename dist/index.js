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
    getValue() {
        this.formFields.forEach(field => {
            this.formValues.push(field.value);
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
    console.log(app_1.App.activeForm.getValue());
    newFormForm.style.display = 'none';
    newFieldForm.style.display = 'none';
    renderBtn.style.display = 'none';
    renderedForm.style.display = 'none';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2tib3hGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0ZUZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbEZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9maWVsZExhYmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9maWVsZFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dEZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3RGaWVsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGV4dEFyZWFGaWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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Q0Y7QUF2QkQsa0NBdUJDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkQsb0ZBQTBDO0FBRzFDLE1BQWEsYUFBYTtJQU14QixZQUFZLElBQVksRUFBRSxJQUFlLEVBQUUsS0FBYTtRQUN0RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ0QsTUFBTTtRQUVKLE1BQU0sYUFBYSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhFLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFL0QsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqRSxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRjtBQXZCRCxzQ0F1QkMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vZmllbGRUeXBlJztcbmltcG9ydCB7IElucHV0RmllbGQgfSBmcm9tICcuL2lucHV0RmllbGQnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJy4vZm9ybSc7IC8vIENUUkwgKyAuXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgQ2hlY2tib3hGaWVsZCB9IGZyb20gJy4vY2hlY2tib3hGaWVsZCc7XG5pbXBvcnQgeyBFbWFpbEZpZWxkIH0gZnJvbSAnLi9lbWFpbEZpZWxkJztcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJy4vZGF0ZUZpZWxkJztcbmltcG9ydCB7IFRleHRhcmVhRmllbGQgfSBmcm9tICcuL3RleHRBcmVhRmllbGQnO1xuaW1wb3J0IHsgU2VsZWN0RmllbGQgfSBmcm9tICcuL3NlbGVjdEZpZWxkJztcblxuLy8ga2xhc2EgemFyesSFZHphasSFY2EgeiB3c3p5c3RraW1pIHBvZHN0YXdvd3ltaSBmdW5rY2phbWkgYXBsaWthY2ppIOKAkyByZWFnb3dhbmllbSBuYSBlbGVtZW50eSBpbnRlcmZlanN1LCB3ecWbd2lldGxhbmllbSBmb3JtdWxhcnp5IGl0ZC5cbi8qIFxuXG5FZmVrdGVtIHByYWN5IHBvd2lubmEgYnnEhyBhcGxpa2FjamEga3TDs3JhIHBvendhbGEgd3nFm3dpZXRsacSHIHN0YXR5Y3puaWUgemFrb2Rvd2FueSBmb3JtdWxhcnouIFBvd2lubmEgdGXFvCB1bW/FvGxpd2nEhyBwb2JyYW5pZSB3eW5pa8OzdyBhbmtpZXR5ICh3YXJ0b8WbY2kgZm9ybXVsYXJ6YSkgaSB3ecWbd2lldGxlbmllIGljaCB3IGRvd29sbnltIG1pZWpzY3UgZWtyYW51IChqZWR5bmllIGRsYSB0ZXN0dSBtZXRvZHkgZ2V0VmFsdWUoKSBrbGFzeSBGb3JtKS4gXG5cblByenlrxYJhZG93eSBmb3JtdWxhcnogZG8gd3nFm3dpZXRsZW5pYTogXG4xLlx0SW1pxJkgKHBvbGUgdGVrc3Rvd2UpIFxuMi5cdE5hendpc2tvIChwb2xlIHRla3N0b3dlKSBcbjMuXHRFLW1haWwgKHBvbGUgZS1tYWlsKSBcbjQuXHRXeWJyYW55IGtpZXJ1bmVrIHN0dWRpw7N3IChzZWxlY3QpIFxuNS5cdEN6eSBwcmVmZXJ1amVzeiBlLWxlYXJuaW5nIChjaGVja2JveCkgXG42Llx0VXdhZ2kgKHRleHRhcmVhKSBcblxuKi9cblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gICAgc3RhdGljIGFjdGl2ZUZvcm06IEZvcm07XG5cbiAgICBzdGF0aWMgY3JlYXRlTmV3Rm9ybShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZvcm0gPSBuZXcgRm9ybShuYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coYG5ldyBGb3JtIG5hbWU6ICR7Zm9ybS5mb3JtTmFtZX1gKTtcbiAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU5ld0ZpZWxkKG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgZmllbGQ6IEZpZWxkO1xuICAgICAgICBjb25zdCBzZWxlY3RlZEZpZWxkVHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGRUeXBlXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgICAgICBzd2l0Y2ggKHNlbGVjdGVkRmllbGRUeXBlLnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBJbnB1dEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5UZXh0LCAnJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ211bHRpTGluZVRleHQnOlxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IFRleHRhcmVhRmllbGQobmFtZSwgRmllbGRUeXBlLk11bHRpTGluZVRleHQsICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgZmllbGQgPSBuZXcgRGF0ZUZpZWxkKG5hbWUsIEZpZWxkVHlwZS5EYXRlLCAnJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgICAgICAgICBmaWVsZCA9IG5ldyBFbWFpbEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5FbWFpbCwgJycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IFNlbGVjdEZpZWxkKG5hbWUsIEZpZWxkVHlwZS5TZWxlY3QsICcnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIGZpZWxkID0gbmV3IENoZWNrYm94RmllbGQobmFtZSwgRmllbGRUeXBlLkNoZWNrYm94LCAnJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYGNyZWF0ZU5ld0ZpZWxkIGhhcyBiZWVuIGNhbGxlZCBhbmQgaXQncyB0eXBlIGlzOiAke2ZpZWxkLnR5cGV9YCk7XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG59XG5cblxuIiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gJy4vZmllbGRMYWJlbCc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vZmllbGRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveEZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IGNoZWNrYm94RmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBjaGVja2JveEZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBjaGVja2JveEZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIGNoZWNrYm94RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICByZXR1cm4gY2hlY2tib3hGaWVsZDtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xyXG5pbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9maWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi9maWVsZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBkYXRlRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnbmFtZSdcclxuICAgIGRhdGVGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBkYXRlRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICByZXR1cm4gZGF0ZUZpZWxkO1xyXG4gIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRW1haWxGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBlbWFpbEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgZW1haWxGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgZW1haWxGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3R5cGUnXHJcbiAgICBlbWFpbEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgcmV0dXJuIGVtYWlsRmllbGQ7XHJcbiAgfVxyXG59IiwiLy8gPT4gd3nFm3dpZXRsYSBldHlraWV0ZVxyXG5leHBvcnQgY2xhc3MgRmllbGRMYWJlbCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIExhYmVsIGVsZW1lbnRcclxuICAgIGNvbnN0IGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2ZvcidcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgVGV4dFxyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHt0aGlzLm5hbWV9YDtcclxuICAgIHJldHVybiBsYWJlbCBhcyBIVE1MRWxlbWVudDtcclxuICB9XHJcbn1cclxuIiwiLy8gZW51bWVyYXRvciBGaWVsZFR5cGUga3TDs3J5IGLEmWR6aWUgZGVmaW5pb3dhxYIgdHlweSBww7NsIG1vxbxsaXd5Y2ggZG8gdcW8eWNpYSB3IGFua2llY2llIChwb2xlIHRla3N0b3dlLCBwb2xlIHdpZWxvbGluaWprb3dlLCBkYXRhLCBlLW1haWwsIHBvbGUgd3lib3J1LCBjaGVja2JveClcclxuXHJcbmV4cG9ydCBlbnVtIEZpZWxkVHlwZSB7XHJcbiAgVGV4dCA9IFwiVEVYVFwiLCBNdWx0aUxpbmVUZXh0ID0gXCJNVUxUSUxJTkVURVhUXCIsIERhdGUgPSBcIkRBVEVcIiwgRW1haWwgPSBcIkVNQUlMXCIsIFNlbGVjdCA9IFwiU0VMRUNUXCIsIENoZWNrYm94ID0gXCJDSEVDS0JPWFwiXHJcbn0iLCJpbXBvcnQgeyBGaWVsZExhYmVsIH0gZnJvbSAnLi9maWVsZExhYmVsJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcclxuLy8gS2xhc2EgZm9ybSBvZHBvd2lhZGEgemEgcHJ6ZXRyenlteXdhbmllICBjYcWCb8WbY2kgaW5mb3JtYWNqaSBvIGZvcm11bGFyenUgb3JheiBqZWdvIHd5xZt3aWV0bGFuaWUuXHJcblxyXG4vLyBXIGtsYXNpZSBwb3dpbm55IGJ5xIcgcHJ6ZWNob3d5d2FuZSBpbmZvcm1hY2plIG8gd3N6eXN0a2ljaCBwb2xhY2ggZm9ybXVsYXJ6YSAodGFibGljYSBlbGVtZW50w7N3IEZpZWxkKS5cclxuXHJcbi8vIEtsYXNhIHBvd2lubmEgdWRvc3TEmXBuaWHEhyBkd2llIG1ldG9keTpcclxuLy8gLSBnZXRWYWx1ZSgpIHBvYmllcmFqxIVjxIUgd3luaWtpIGZvcm11bGFyemFcclxuLy8gLSByZW5kZXIoKSB3ecWbd2lldGxhasSFY8SFIGZvcm11bGFyeiB3ZSB3c2themFueW0gbWllanNjdS5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtIHtcclxuICBmb3JtTmFtZTogc3RyaW5nO1xyXG4gIGZvcm1GaWVsZHM6IEZpZWxkW10gPSBbXTtcclxuICBmb3JtVmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZm9ybU5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKSB7XHJcbiAgICB0aGlzLmZvcm1GaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgIHRoaXMuZm9ybVZhbHVlcy5wdXNoKGZpZWxkLnZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybVZhbHVlcztcclxuICB9XHJcblxyXG4gIHJlbmRlcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIC8vIENyZWF0ZSBmb3JtIGVsZW1lbnRcclxuICAgIGNvbnN0IGZvcm06IEhUTUxGb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5mb3JtTmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gQXBwZW5kIGZpZWxkcyB0byB0aGUgZm9ybVxyXG4gICAgdGhpcy5mb3JtRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICBsZXQgbGFiZWwgPSBuZXcgRmllbGRMYWJlbChmaWVsZC5uYW1lKVxyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsLnJlbmRlcigpKVxyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkLnJlbmRlcigpKTtcclxuICAgIH0pO1xyXG4gICAgLy8gQ3JlYXRlIGEgaGVhZGVyIHdpdGggdGhlIG5hbWUgb2YgdGhlIEZvcm1cclxuICAgIGNvbnN0IGhlYWRlcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgLy8gU2V0IHRoZSBoZWFkZXIgdGV4dCBjb250ZW50IHRvIHRoZSBuYW1lIG9mIHRoZSBGb3JtXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0aGlzLmZvcm1OYW1lfWA7XHJcbiAgICAvLyBBcHBlbmQgdGhlIGhlYWRlciB0byB0aGUgZWxlbWVudCB3aGVyZSB0aGUgZm9ybSBzaG91bGQgYmUgcmVuZGVyZWRcclxuICAgIGh0bWxFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb25zdCBsaW5lYnJlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIik7XHJcbiAgICBodG1sRWxlbWVudC5hcHBlbmRDaGlsZChsaW5lYnJlYWspO1xyXG4gICAgY29uc3Qgc3VibWl0RmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIHN1Ym1pdEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXRSZW5kZXJlZEZvcm0nKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ3ZhbHVlJ1xyXG4gICAgc3VibWl0RmllbGQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQgdGhlIEZvcm0hJyk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxpbmVicmVhayk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEZpZWxkKTtcclxuICAgIGh0bWxFbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnLi9mb3JtJztcblxuY29uc3QgbmV3Rm9ybUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9jdW1lbnQtZm9ybScpO1xuY29uc3QgZm9ybU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZExhYmVsJykgYXMgSFRNTElucHV0RWxlbWVudDtcblxuY29uc3QgbmV3RmllbGRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkLWZvcm0nKTtcbmNvbnN0IGZpZWxkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmTGFiZWwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG5jb25zdCByZW5kZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyQnRuJyk7XG5jb25zdCByZW5kZXJlZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVuZGVyZWRGb3JtJyk7XG5cbmxldCBmb3JtczogRm9ybVtdID0gW107XG5cbi8vIExpc3RlbiBmb3IgYSBzdWJtaXQgZm9yIGEgbmV3IEZvcm0gdG8gYmUgY3JlYXRlZFxubmV3Rm9ybUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgbGV0IG5ld0Zvcm0gPSBBcHAuY3JlYXRlTmV3Rm9ybShmb3JtTmFtZS52YWx1ZSk7XG4gIGZvcm1zLnB1c2gobmV3Rm9ybSk7XG4gIEFwcC5hY3RpdmVGb3JtID0gbmV3Rm9ybTtcbiAgbmV3Rm9ybUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gTGlzdGVuIGZvciBhIHN1Ym1pdCBmb3IgYSBuZXcgRmllbGQgdG8gYmUgY3JlYXRlZFxubmV3RmllbGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGxldCBuZXdGaWVsZCA9IEFwcC5jcmVhdGVOZXdGaWVsZChmaWVsZE5hbWUudmFsdWUpO1xuICBBcHAuYWN0aXZlRm9ybS5mb3JtRmllbGRzLnB1c2gobmV3RmllbGQpO1xuICBuZXdGb3JtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBuZXdGaWVsZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIHJlbmRlckJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgY29uc29sZS5sb2coQXBwLmFjdGl2ZUZvcm0uZm9ybUZpZWxkcyk7XG4gIGZpZWxkTmFtZS52YWx1ZSA9ICcnO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuLy8gTGlzdGVuIGZvciBhIGNhbGwgdG8gcmVuZGVyIHRoZSBGb3JtXG5yZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICBBcHAuYWN0aXZlRm9ybS5yZW5kZXIocmVuZGVyZWRGb3JtKTtcbiAgbmV3Rm9ybUZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbmV3RmllbGRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlbmRlckJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZW5kZXJlZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4vLyBMaXN0ZW4gZm9yIGEgc3VibWl0IG9uIHRoZSByZW5kZXJlZCB0aGUgRm9ybVxucmVuZGVyZWRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gIGNvbnNvbGUubG9nKEFwcC5hY3RpdmVGb3JtLmdldFZhbHVlKCkpO1xuICBuZXdGb3JtRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBuZXdGaWVsZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVuZGVyQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlbmRlcmVkRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRGaWVsZCBpbXBsZW1lbnRzIEZpZWxkIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbGFiZWw6IEZpZWxkTGFiZWw7XHJcbiAgdHlwZTogRmllbGRUeXBlO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdHlwZTogRmllbGRUeXBlLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBGaWVsZExhYmVsKG5hbWUpO1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgcmVuZGVyKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIC8vIENyZWF0ZSBpbnB1dCBlbGVtZW50XHJcbiAgICBjb25zdCBpbnB1dEZpZWxkOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ2lkJ1xyXG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIFNldCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsIGAke3RoaXMudHlwZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgcmV0dXJuIGlucHV0RmllbGQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XHJcbmltcG9ydCB7IEZpZWxkTGFiZWwgfSBmcm9tICcuL2ZpZWxkTGFiZWwnO1xyXG5pbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuL2ZpZWxkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0RmllbGQgaW1wbGVtZW50cyBGaWVsZCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBGaWVsZExhYmVsO1xyXG4gIHR5cGU6IEZpZWxkVHlwZTtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGU6IEZpZWxkVHlwZSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMubGFiZWwgPSBuZXcgRmllbGRMYWJlbChuYW1lKTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG4gIHJlbmRlcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAvLyBDcmVhdGUgaW5wdXQgZWxlbWVudFxyXG4gICAgY29uc3Qgc2VsZWN0RmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICBzZWxlY3RGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBBZGQgYXR0cmlidXRlICduYW1lJ1xyXG4gICAgc2VsZWN0RmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgYCR7dGhpcy5uYW1lLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICAvLyBTZXQgYXR0cmlidXRlICd0eXBlJ1xyXG4gICAgc2VsZWN0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICByZXR1cm4gc2VsZWN0RmllbGQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcclxuaW1wb3J0IHsgRmllbGRMYWJlbCB9IGZyb20gJy4vZmllbGRMYWJlbCc7XHJcbmltcG9ydCB7IEZpZWxkVHlwZSB9IGZyb20gJy4vZmllbGRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUZpZWxkIGltcGxlbWVudHMgRmllbGQge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBsYWJlbDogRmllbGRMYWJlbDtcclxuICB0eXBlOiBGaWVsZFR5cGU7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB0eXBlOiBGaWVsZFR5cGUsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IEZpZWxkTGFiZWwobmFtZSk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICByZW5kZXIoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgLy8gQ3JlYXRlIGlucHV0IGVsZW1lbnRcclxuICAgIGNvbnN0IHRleHRhcmVhRmllbGQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gQWRkIGF0dHJpYnV0ZSAnaWQnXHJcbiAgICB0ZXh0YXJlYUZpZWxkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLm5hbWUudG9Mb3dlckNhc2UoKX1gKTtcclxuICAgIC8vIEFkZCBhdHRyaWJ1dGUgJ25hbWUnXHJcbiAgICB0ZXh0YXJlYUZpZWxkLnNldEF0dHJpYnV0ZSgnbmFtZScsIGAke3RoaXMubmFtZS50b0xvd2VyQ2FzZSgpfWApO1xyXG4gICAgLy8gU2V0IGF0dHJpYnV0ZSAndHlwZSdcclxuICAgIHRleHRhcmVhRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgYCR7dGhpcy50eXBlLnRvTG93ZXJDYXNlKCl9YCk7XHJcbiAgICByZXR1cm4gdGV4dGFyZWFGaWVsZDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9