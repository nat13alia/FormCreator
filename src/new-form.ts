import { App } from "./classes/App";
import { FormCreator } from "./classes/FormCreator";
import { LocStorage } from './classes/LocStorage';
import { Form } from "./classes/form";

const container = document.querySelector('.container') as HTMLDivElement;

const newFormForm = document.getElementById('form-form') as HTMLFormElement;
const formName = document.getElementById('formName') as HTMLInputElement;

const newFieldForm = document.getElementById('field-form') as HTMLFormElement;
const fieldName = document.getElementById('fieldName') as HTMLInputElement;

const renderBtn = document.getElementById('renderBtn') as HTMLButtonElement;
const saveBtn = document.getElementById('saveBtn') as HTMLButtonElement;
const backBtn = document.getElementById('backBtn') as HTMLButtonElement;
const editFormBtn = document.getElementById('editFormBtn') as HTMLButtonElement;

const fieldType = document.getElementById("fieldType") as HTMLSelectElement;


const formCreator = new FormCreator();
formCreator.storage = new LocStorage();


// Listen for a submit for a new Form to be created
newFormForm.addEventListener('submit', function (e) {
  formCreator.newForm(formName.value);
  newFormForm.style.display = 'none';
  newFieldForm.style.display = 'block';
  e.preventDefault();
});

// Listen for a submit for a new Field to be created
newFieldForm.addEventListener('submit', function (e) {
  formCreator.newField(fieldName.value, fieldType.value);
  App.activeForm.fields.push(App.activeField);
  newFormForm.style.display = 'none';
  newFieldForm.style.display = 'block';
  renderBtn.style.display = 'block';
  editFormBtn.style.display = 'block';
  fieldName.value = '';
  e.preventDefault();
});

// Listen for a call to render the Form
renderBtn.addEventListener('click', function (e) {
  container.insertBefore(App.activeForm.render(), saveBtn);
  // newFormForm.style.display = 'none';
  newFieldForm.style.display = 'none';
  renderBtn.style.display = 'none';
  saveBtn.style.display = 'block';
  editFormBtn.style.display = 'block';
  backBtn.style.display = 'block';
  e.preventDefault();
});

saveBtn.addEventListener('click', function (e) {
  formCreator.storage.saveDocument(App.activeForm, 'documents');
  window.location.href = 'index.html';
  e.preventDefault();
})

backBtn.addEventListener('click', function (e) {
  window.location.href = 'index.html';
  e.preventDefault();
})