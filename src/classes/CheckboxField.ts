import { Field } from "../interfaces/Field";
import { FieldLabel } from "./FieldLabel";
import { FieldType } from "../enums/FieldType";

export class CheckboxField implements Field {
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
  render(): HTMLDivElement {
    // Create input element    
    const checkBoxInput: HTMLInputElement = document.createElement('input');
    // Add attribute 'id'
    checkBoxInput.setAttribute('id', `${this.name.toLowerCase()}`);
    // Add attribute 'name'
    checkBoxInput.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'type'
    checkBoxInput.setAttribute('type', `${this.type.toLowerCase()}`);

    const checkBoxField: HTMLDivElement = document.createElement('div');
    checkBoxField.appendChild(this.label.render());
    checkBoxField.appendChild(checkBoxInput);
    return checkBoxField;
  }

  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLInputElement;
    return input.value;
  }
}