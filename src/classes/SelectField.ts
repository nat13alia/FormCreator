import { Field } from "../interfaces/Field";
import { FieldLabel } from "./FieldLabel";
import { FieldType } from "../enums/FieldType";

export class SelectField implements Field {
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
    const select: HTMLInputElement = document.createElement('input');
    // Add attribute 'id'
    select.setAttribute('id', `${this.name.toLowerCase()}`);
    // Add attribute 'name'
    select.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'type'
    select.setAttribute('type', `${this.type.toLowerCase()}`);

    const selectField: HTMLDivElement = document.createElement('div');
    selectField.appendChild(this.label.render());
    selectField.appendChild(select);
    return selectField;
  }

  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLInputElement;
    return input.value;
  }
}