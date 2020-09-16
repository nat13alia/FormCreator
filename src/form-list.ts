import { DataStorage } from './classes/DataStorage';
import { FormCreator } from './classes/FormCreator';
import { LocStorage } from './classes/LocStorage';
import { DocumentList } from "./classes/documentList";

const formList = document.getElementById('formList');
const backBtn = document.getElementById('backBtn');

const formCreator = new FormCreator();
formCreator.storage = new LocStorage();


window.addEventListener('DOMContentLoaded', function (e) {
  let docList = new DocumentList();
  docList.getDocumentList();
  formList.appendChild(docList.render());
  backBtn.style.display = 'block';

  document.getElementById('docsTable').addEventListener('click', function (e) {
    deleteEntry(e.target);
  })
  e.preventDefault();
})

backBtn.addEventListener('click', function (e) {
  window.location.href = 'index.html';
  e.preventDefault();
})

function deleteEntry(target: any) {
  if (target.classList.contains('removeBtn')) {
    formCreator.storage.removeDocument(target.parentElement.previousSibling.previousSibling.textContent);
    target.parentElement.parentElement.remove();
  }
}

