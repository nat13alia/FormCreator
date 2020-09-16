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
  console.log(docID);
  console.log(doc);
  formCreator.newForm(doc.name);
  container.insertBefore(App.activeForm.render(), backBtn);
  const form = document.getElementById(`${App.activeForm.name.toLowerCase()}`) as HTMLFormElement;
  console.log(form);
  doc.fields.forEach(field => {
    const submitBtn = document.querySelector('#submitBtn') as HTMLInputElement;
    form.insertBefore(formCreator.newField(field.name, field.type), submitBtn);
  });
})

backBtn.addEventListener('click', function (e) {
  window.location.href = 'index.html';
  e.preventDefault();
}) 