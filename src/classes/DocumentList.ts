import { LocStorage } from './LocStorage';
import { Form } from "./form";

export class DocumentList {
  documentsList: Form[];
  documentIDs: string[];

  // metoda powinna korzystać z klasy LocStorage do pobrania listy dokumentów i zapamiętania jej w wewn. właściwości klasy
  getDocumentList(): [Form[], string[]] {
    let storage = new LocStorage();
    this.documentsList = storage.getDocuments('documents');
    this.documentIDs = storage.getDocuments('keys');
    return [this.documentsList, this.documentIDs];
  }

  //  metoda powinna wyświetlać listę dokumentów w formie tabeli zawierającej id dokumentu
  render(): HTMLTableElement {
    // Create table element
    const docsTable: HTMLTableElement = document.createElement('table');
    // Set attribute 'id' and 'class'
    docsTable.setAttribute('id', 'docsTable');
    docsTable.setAttribute('class', 'u-full-width');
    // Create thead element
    const tHead: HTMLElement = document.createElement('thead');
    // Create th element for ID column
    const thName: HTMLHeadElement = document.createElement('th');
    thName.textContent = 'Document Name'
    // Create th element for ID column
    const thID: HTMLHeadElement = document.createElement('th');
    thID.textContent = 'Document ID'
    // Create th element for Edit link column
    const thEdit: HTMLHeadElement = document.createElement('th');
    // Create th element for remove btn column
    const thRemove: HTMLHeadElement = document.createElement('th');
    // Create tr element for header
    const trHeader: HTMLTableRowElement = document.createElement('tr');
    trHeader.appendChild(thName);
    trHeader.appendChild(thID);
    trHeader.appendChild(thEdit);
    trHeader.appendChild(thRemove);
    tHead.appendChild(trHeader);
    docsTable.appendChild(tHead);

    const tBody: HTMLElement = document.createElement('tbody');
    // Create a element for edit link
    let editLink: HTMLAnchorElement = document.createElement('a');
    // Setting attributes
    editLink.setAttribute('class', 'editLink');
    editLink.textContent = 'Edit'

    for (let i = 0; i < this.documentsList.length; i++) {
      const tdName: HTMLElement = document.createElement('td');
      const tdID: HTMLElement = document.createElement('td');
      const tdEdit: HTMLElement = document.createElement('td');
      const tdRemove: HTMLElement = document.createElement('td');
      const tr: HTMLTableRowElement = document.createElement('tr');

      tdName.textContent = `${this.documentsList[i].name}`;
      tdID.textContent = `${this.documentIDs[i]}`;
      tdEdit.innerHTML = `<a class="editLink" href="edit-document.html?id=${this.documentIDs[i]}">EDIT</a>`;
      tdRemove.innerHTML = `<button class="removeBtn ${this.documentIDs[i]}">Remove</button>`;
      tr.appendChild(tdName);
      tr.appendChild(tdID);
      tr.appendChild(tdEdit);
      tr.appendChild(tdRemove);
      tBody.appendChild(tr);
    }

    docsTable.appendChild(tBody);
    return docsTable;
  };



  static getDocument(id: string) {

  }
  static removeDocument(id: string) {

  }

}
