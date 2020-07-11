import { Form } from "./form";

export class DocumentList {
  static documentsList: Form[];
  static documentIDs: string[];

  // metoda powinna korzystać z klasy LocStorage do pobrania listy dokumentów i zapamiętania jej w wewn. właściwości klasy
  static getDocumentList(): [Form[], string[]] {
    if (localStorage.getItem('documents') === null && localStorage.getItem('documentIDs') === null) {
      this.documentsList = [];
      this.documentIDs = [];
    } else {
      this.documentsList = JSON.parse(localStorage.getItem('documents'));
      this.documentIDs = JSON.parse(localStorage.getItem('documentIDs'));
    }
    return [this.documentsList, this.documentIDs];
  }

  //  metoda powinna wyświetlać listę dokumentów w formie tabeli zawierającej id dokumentu
  static render(htmlElement: HTMLElement) {
    // Create table element
    const docListTable: HTMLTableElement = document.createElement('table');
    const tHead: HTMLElement = document.createElement('thead');
    const thID: HTMLHeadElement = document.createElement('th');
    const thEdit: HTMLHeadElement = document.createElement('th');
    const thRemove: HTMLHeadElement = document.createElement('th');
    const trHeader: HTMLTableRowElement = document.createElement('tr');
    thID.textContent = 'Document ID'
    trHeader.appendChild(thID);
    trHeader.appendChild(thEdit);
    trHeader.appendChild(thRemove);
    tHead.appendChild(trHeader);
    docListTable.appendChild(tHead);

    // Set attribute 'id'
    docListTable.setAttribute('id', 'documentsTable');
    docListTable.setAttribute('class', 'u-full-width');

    let editLink: HTMLAnchorElement = document.createElement('a');
    // Setting attributes
    editLink.setAttribute('class', 'editLink');
    editLink.textContent = 'Edit'

    const tBody: HTMLElement = document.createElement('tbody');

    let listOfDocs: [Form[], string[]] = this.getDocumentList();
    for (let i = 0; i < listOfDocs[0].length; i++) {
      const tdID: HTMLElement = document.createElement('td');
      const tdEdit: HTMLElement = document.createElement('td');
      const tdRemove: HTMLElement = document.createElement('td');
      const tr: HTMLTableRowElement = document.createElement('tr');

      tdID.textContent = `${listOfDocs[0][i].formName} : ${listOfDocs[1][i]}`;
      tdEdit.innerHTML = `<a class="editLink" href="edit-document.html?id=${this.documentIDs[i]}">EDIT</a>`;
      tdRemove.innerHTML = `<button class="removeBtn">Remove</button>`;
      tr.appendChild(tdID);
      tr.appendChild(tdEdit);
      tr.appendChild(tdRemove);
      tBody.appendChild(tr);
    }

    docListTable.appendChild(tBody);
    htmlElement.appendChild(docListTable);
  };

  static getDocument(id: string) {

  }
  static removeDocument(id: string) {

  }

}
