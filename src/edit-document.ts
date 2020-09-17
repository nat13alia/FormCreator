import { SelectField } from './classes/SelectField';
import { App } from './classes/App';
import { FormCreator } from "./classes/FormCreator";
import { LocStorage } from "./classes/LocStorage";
import { Field } from "./interfaces/Field";

const backBtn = document.getElementById('backBtn') as HTMLButtonElement;
const container = document.querySelector('.container') as HTMLDivElement;
const submitBtn = document.querySelector('#submitBtn') as HTMLInputElement;

const formCreator = new FormCreator();
formCreator.storage = new LocStorage();

let docID = window.location.search.substr(4);
let doc: {
  fields: Field[];
  name: string;
};


window.addEventListener('DOMContentLoaded', function (e) {
  backBtn.style.display = 'block';
  doc = formCreator.storage.loadDocument(docID);
  formCreator.newForm(doc.name);
  container.insertBefore(App.activeForm.render(), backBtn);
  const form = document.getElementById(`${App.activeForm.name.toLowerCase()}`) as HTMLFormElement;
  doc.fields.forEach(field => {
    const submitBtn = document.querySelector('#submitBtn') as HTMLInputElement;
    if (field.type === 'select') {
      form.insertBefore(formCreator.newField(field.name, field.type, field.options), submitBtn);
    }
    form.insertBefore(formCreator.newField(field.name, field.type), submitBtn);
  });

  form.addEventListener('submit', function (e) {
    console.log(App.activeForm.getValues());
    window.location.href = 'form-list.html';
    e.preventDefault();
  })
});


backBtn.addEventListener('click', function (e) {
  window.location.href = 'index.html';
  e.preventDefault();
}) 