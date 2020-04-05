import { Field } from '../Field';
import { FieldLabel } from './FieldLabel';
import { FieldType } from '../FieldType';

export class InputField implements Field {
  name: string;
  label: FieldLabel;
  type: FieldType;
  value: string;

  constructor(name: string, label: FieldLabel, type: FieldType, value: string) {
    this.name = name;
    this.label = label;
    this.type = type;
    this.value = value;
  }
  render(): void {
    // Create input element
    const input: HTMLElement = document.createElement('input');
    // Add attribute 'id'
    input.setAttribute('id', `${this.name.toLowerCase()}`);
    // Add attribute 'name'
    input.setAttribute('name', `${this.name.toLowerCase()}`);
  }
}
