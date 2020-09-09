import { Field } from "../interfaces/Field";
import { FieldLabel } from "./FieldLabel";
import { FieldType } from "../enums/FieldType";

export class TextareaField implements Field {
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
    const textarea: HTMLInputElement = document.createElement('input');
    // Add attribute 'id'
    textarea.setAttribute('id', `${this.name.toLowerCase()}`);
    // Add attribute 'name'
    textarea.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'type'
    textarea.setAttribute('type', `${this.type.toLowerCase()}`);

    const textareaField: HTMLDivElement = document.createElement('div');
    textareaField.appendChild(this.label.render());
    textareaField.appendChild(textarea);
    return textareaField;
  }

  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLTextAreaElement;
    return input.value;
  }
}