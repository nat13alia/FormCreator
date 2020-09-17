const newDocBtn = document.getElementById('newForm') as HTMLButtonElement;
const docListBtn = document.getElementById('docList') as HTMLButtonElement;
const formListBtn = document.getElementById('formList') as HTMLButtonElement;


// Listen for a call to create a new Document
newDocBtn.addEventListener('click', function (e) {
  window.location.href = 'new-form.html';
  e.preventDefault();
});

// Listen for a call to view the List of the Documents
// docListBtn.addEventListener('click', function (e) {
//   window.location.href = 'document-list.html';
//   e.preventDefault();
// });

formListBtn.addEventListener('click', function (e) {
  window.location.href = 'form-list.html';
  e.preventDefault();
});


