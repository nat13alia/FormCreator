import { Field } from "../interfaces/Field";
import { FieldLabel } from "./FieldLabel";
import { FieldType } from "../enums/FieldType";

export class DateField implements Field {
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
    const dateInput: HTMLInputElement = document.createElement('input');
    // Add attribute 'id'
    dateInput.setAttribute('id', `${this.name.toLowerCase()}`);
    // Add attribute 'name'
    dateInput.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'type'
    dateInput.setAttribute('type', `${this.type.toLowerCase()}`);

    const dateField: HTMLDivElement = document.createElement('div');
    dateField.appendChild(this.label.render());
    dateField.appendChild(dateInput);
    return dateField;
  }
  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLTextAreaElement;
    return input.value;
  }
}