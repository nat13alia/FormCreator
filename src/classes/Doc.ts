import { Field } from "../interfaces/Field";
import { Form } from "./Form";
import { FormCreator } from "./FormCreator";

export class Doc extends Form {
  name: string;
  fields: Field[] = [];
  fieldValues: string[];

  constructor(name: string, fields: Field[]) {
    super(name, fields);
  }

  render(): HTMLFormElement {
    // Create a form element
    const form: HTMLFormElement = document.createElement('form');
    // Set attribute 'id'
    form.setAttribute('id', `${this.name.toLowerCase()}`);
    // Create a header with the name of the Form
    const header: HTMLElement = document.createElement('h3');
    // Set the header text content to the name of the Form
    header.textContent = `${this.name}`;
    // Append the header
    form.appendChild(header);
    // Create a linebreak
    const linebreak = document.createElement("br");
    // Append a linebreak
    form.appendChild(linebreak);
    // Append fields
    this.fields.forEach(field => {
      form.appendChild(field.render());
    });
    form.appendChild(linebreak);
    form.appendChild(FormCreator.renderSubmitButton('submitBtn', 'Submit the Form!'));
    return form;
  }
}