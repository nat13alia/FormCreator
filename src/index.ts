import { App } from './app';
import { Field } from './field';
import { Form } from './form';

const newFormForm = document.getElementById('document-form');
const formName = document.getElementById('dLabel') as HTMLInputElement;
const newFieldForm = document.getElementById('field-form');

let forms: Form[] = [];
let app = new App();

// Listen for a submit for a new Form to be created
newFormForm.addEventListener('submit', function (e) {
  app.createNewForm(formName.value);
  newFormForm.style.display = 'none';
  newFieldForm.style.display = 'block';
  e.preventDefault();
});

newFieldForm.addEventListener('submit', function (e) {
  app.createNewField();
  newFormForm.style.display = 'none';
  newFieldForm.style.display = 'block';
  e.preventDefault();
});