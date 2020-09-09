import { Field } from "../interfaces/Field";
import { FieldLabel } from "./FieldLabel";
import { FieldType } from "../enums/FieldType";

export class EmailField implements Field {
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
    const emailInput: HTMLInputElement = document.createElement('input');
    // Add attribute 'id'
    emailInput.setAttribute('id', `${this.name.toLowerCase()}`);
    // Add attribute 'name'
    emailInput.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'type'
    emailInput.setAttribute('type', `${this.type.toLowerCase()}`);

    const emailField: HTMLDivElement = document.createElement('div');
    emailField.appendChild(this.label.render());
    emailField.appendChild(emailInput);
    return emailField;
  }
  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLTextAreaElement;
    return input.value;
  }
}