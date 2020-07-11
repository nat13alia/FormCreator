import { DocumentList } from "./documentList";

const documentsList = document.getElementById('documentsList');
const backBtn = document.getElementById('backBtn');


window.addEventListener('DOMContentLoaded', function (e) {
  DocumentList.render(documentsList);
  backBtn.style.display = 'block';
  e.preventDefault();
})

backBtn.addEventListener('click', function (e) {
  window.location.href = 'index.html';
  e.preventDefault();
})