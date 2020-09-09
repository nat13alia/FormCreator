import { Field } from "../interfaces/Field";
import { FieldLabel } from "./FieldLabel";
import { FieldType } from "../enums/FieldType";

export class InputField implements Field {
  name: string;
  label: FieldLabel;
  type: FieldType;
  value: string;

  constructor(name: string, type: FieldType, value: string) {
    this.name = name;
    this.label = new FieldLabel(name);
    this.type = type;
    this.value = value;
  }

  render(): HTMLElement {
    // Create input element
    const textInput: HTMLInputElement = document.createElement('input');
    // Set attribute 'id'
    textInput.setAttribute('id', `${this.name.toLowerCase()}`);
    // Set attribute 'name'
    textInput.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'name'
    textInput.setAttribute('type', `${this.type.toLowerCase()}`);

    const inputField: HTMLDivElement = document.createElement('div');
    inputField.appendChild(this.label.render());
    inputField.appendChild(textInput);
    return inputField;
  }
  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLInputElement;
    return input.value;
  }
}
