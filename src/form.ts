import { FieldLabel } from './fieldLabel';
import { Field } from './field';
// Klasa form odpowiada za przetrzymywanie  całości informacji o formularzu oraz jego wyświetlanie.

// W klasie powinny być przechowywane informacje o wszystkich polach formularza (tablica elementów Field).

// Klasa powinna udostępniać dwie metody:
// - getValue() pobierającą wyniki formularza
// - render() wyświetlającą formularz we wskazanym miejscu.

export class Form {
  formName: string;
  formFields: Field[] = [];
  formValues: string[] = [];

  constructor(name: string) {
    this.formName = name;
  }

  getValue() {
    this.formFields.forEach(field => {
      this.formValues.push(field.value);
    });
    return this.formValues;
  }

  render(htmlElement: HTMLElement) {
    // Create form element
    const form: HTMLFormElement = document.createElement('form');
    // Add attribute 'id'
    form.setAttribute('id', `${this.formName.toLowerCase()}`);
    // Append fields to the form
    this.formFields.forEach(field => {
      let label = new FieldLabel(field.name)
      form.appendChild(label.render())
      form.appendChild(field.render());
    });
    // Create a header with the name of the Form
    const header: HTMLElement = document.createElement('h3');
    // Set the header text content to the name of the Form
    header.textContent = `${this.formName}`;
    // Append the header to the element where the form should be rendered
    htmlElement.appendChild(header);
    const linebreak = document.createElement("br");
    htmlElement.appendChild(linebreak);
    const submitField: HTMLInputElement = document.createElement('input');
    // Set attribute 'type'
    submitField.setAttribute('type', 'submit');
    // Set attribute 'id'
    submitField.setAttribute('id', 'submitRenderedForm');
    // Set attribute 'value'
    submitField.setAttribute('value', 'Submit the Form!');
    form.appendChild(linebreak);
    form.appendChild(submitField);
    htmlElement.appendChild(form);
  }
}


