import { Field } from "../interfaces/Field";
import { FieldLabel } from "./FieldLabel";
import { FieldType } from "../enums/FieldType";

export class SelectField implements Field {
  name: string;
  label: FieldLabel;
  type: FieldType;
  value: string;
  options: string[];

  constructor(name: string, type: FieldType, value: string, options: string[]) {
    this.name = name;
    this.label = new FieldLabel(name);
    this.type = type;
    this.value = value;
    this.options = options;
  }
  render(): HTMLElement {
    // Create input element
    const select: HTMLSelectElement = document.createElement('select');
    // Add attribute 'id'
    select.setAttribute('id', `${this.name.toLowerCase()}`);
    // Add attribute 'name'
    select.setAttribute('name', `${this.name.toLowerCase()}`);
    // Set attribute 'type'
    select.setAttribute('type', `${this.type.toLowerCase()}`);

    const selectField: HTMLDivElement = document.createElement('div');
    selectField.appendChild(this.label.render());
    console.log(this.options);
    // Add options
    this.options.forEach(optionValue => {
      // Create option element
      const option: HTMLOptionElement = document.createElement('option');
      // Add attribute 'value'
      select.setAttribute('value', `${optionValue.toLowerCase()}`);
      // Add attribute 'value'
      option.textContent = optionValue;
      select.appendChild(option);
    })
    selectField.appendChild(select);
    return selectField;
  }

  getValue(): string {
    const input = document.getElementById(`${this.name.toLowerCase()}`) as HTMLSelectElement;
    return input.value;
  }
}