"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InputField {
    constructor(name, label, type, value) {
        this.name = name;
        this.label = label;
        this.type = type;
        this.value = value;
    }
    render() {
        const input = document.createElement('input');
        input.setAttribute('id', `${this.name.toLowerCase()}`);
        input.setAttribute('name', `${this.name.toLowerCase()}`);
    }
}
exports.InputField = InputField;
//# sourceMappingURL=InputField.js.map