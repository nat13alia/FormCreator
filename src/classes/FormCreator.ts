import { DataStorage } from './DataStorage';
import { FieldType } from './../enums/FieldType';
import { Field } from '../interfaces/Field';
import { InputField } from './inputField';
import { TextareaField } from './textAreaField';
import { DateField } from './dateField';
import { EmailField } from './emailField';
import { SelectField } from './selectField';
import { CheckboxField } from './checkboxField';
import { Form } from './Form';
import { App } from './App';
import { LocStorage } from './LocStorage';

export class FormCreator {
  storage: LocStorage;

  newForm(name: string) {
    App.activeForm = new Form(name, []);
  }

  newField(name: string, type: string, options?: string[]): HTMLElement {
    switch (type) {
      case 'text':
        App.activeField = new InputField(name, FieldType.Text, '');
        break;

      case 'multilinetext':
        App.activeField = new TextareaField(name, FieldType.MultiLineText, '');
        break;

      case 'date':
        App.activeField = new DateField(name, FieldType.Date, '');
        break;

      case 'email':
        App.activeField = new EmailField(name, FieldType.Email, '');
        break;

      case 'select':
        App.activeField = new SelectField(name, FieldType.Select, '', options);
        break;

      case 'checkbox':
        App.activeField = new CheckboxField(name, FieldType.Checkbox, '');
        break;

      default:
        break;
    }
    return App.activeField.render();
  }

  static renderSubmitButton(id: string, value: string): HTMLInputElement {
    const submitField: HTMLInputElement = document.createElement('input');
    // Set attribute 'type'
    submitField.setAttribute('type', 'submit');
    // Set attribute 'id'
    submitField.setAttribute('id', `${id}`);
    // Set attribute 'value'
    submitField.setAttribute('value', `${value}`);
    return submitField
  }

  static renderInputForOptions(): HTMLInputElement {
    const textInput: HTMLInputElement = document.createElement('input');
    // Set attribute 'type'
    textInput.setAttribute('type', 'text');
    // Set attribute 'id'
    textInput.setAttribute('id', 'optionInput');
    // Set attribute 'class'
    textInput.setAttribute('class', 'optionInput u-full-width');
    // Set attribute 'class'
    textInput.setAttribute('placeholder', 'Enter the Option');
    return textInput;
  }
}