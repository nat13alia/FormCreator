import { FieldType } from './enums/FieldType';
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

const fieldType = document.getElementById('fieldType') as HTMLSelectElement;
const optionsHolder = document.querySelector('.optionsHolder') as HTMLDivElement;
const addAnotherOption = document.getElementById('addAnotherOption') as HTMLButtonElement;

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
  if (fieldType.value == 'select') {
    // let options: NodeList = document.querySelectorAll('input#optionInput');
    let optionInputsCollection: HTMLCollection = document.getElementsByClassName('optionInput u-full-width');
    let optionInputs: HTMLInputElement[] = [];
    let options: string[] = [];
    for (let i = 0; i < optionInputsCollection.length; i++) {
      optionInputs.push(optionInputsCollection[i] as HTMLInputElement);
    }

    optionInputs.forEach(optionInput => {
      options.push(optionInput.value);
    });
    formCreator.newField(fieldName.value, fieldType.value, options);
  } else {
    formCreator.newField(fieldName.value, fieldType.value);
  }
  App.activeForm.fields.push(App.activeField);
  newFormForm.style.display = 'none';
  newFieldForm.style.display = 'block';
  renderBtn.style.display = 'block';
  editFormBtn.style.display = 'block';
  if (fieldType.value == 'select') {
    optionsHolder.style.display = 'block';
  } else {
    optionsHolder.style.display = 'none';
  }
  fieldName.value = '';
  e.preventDefault();
});

// Listen for a change on the selected field Type
fieldType.addEventListener('change', function (e) {
  if (fieldType.value == 'select') {
    optionsHolder.style.display = 'block';
  } else {
    optionsHolder.style.display = 'none';
  }
  e.preventDefault();
});

// Listen for a call to add another Option
addAnotherOption.addEventListener('click', function (e) {
  optionsHolder.insertBefore(FormCreator.renderInputForOptions(), addAnotherOption);
  e.preventDefault();
});


// Listen for a call to render the Form
renderBtn.addEventListener('click', function (e) {
  container.insertBefore(App.activeForm.render(), saveBtn);
  newFieldForm.style.display = 'none';
  renderBtn.style.display = 'none';
  saveBtn.style.display = 'block';
  editFormBtn.style.display = 'none';
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