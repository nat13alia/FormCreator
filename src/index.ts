import { App } from './app';

const newFormForm = document.getElementById('document-form');
const newFieldForm = document.getElementById('field-form');


let app = new App();

// Listen for a submit for a new Form to be created
newFormForm.addEventListener('submit', function (e) {
  app.createNewForm();
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