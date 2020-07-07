import { DataStorage } from './dataStorage';
import { Form } from './form';

/*
 - zapisuj dokumenty używając klucza dokumentu jako klucza elementu w localStorage
 - metoda saveDocument() powinna wygenerować unikalny identyfikator dokumentu. Użyj Date.now() do pobrania daty (timestamp) zapisania dokumentu. Idenfytikator twórz w oparciu o szablon "document-timestamp".
 - zapamiętaj wszystkie dokumenty (id dokumentu) w osobnym elemencie w localStorage (tablica).
 - pamiętaj, że w localStorage zapisujemy stringi. Aby zapisać obiekt z wartościami formularza użyj obiektu JSON do serializacji danych.

*/

export class LocStorage implements DataStorage {
  saveDocument(document: Form): void {
    let timeStamp: number = Date.now();
    let documentID: string = `${document.formName}-${timeStamp}`;
    let documents: [Form, string][];
    if (localStorage.getItem('documents') === null) {
      documents = [];
    } else {
      documents = JSON.parse(localStorage.getItem('documents'));
    }
    documents.push([document, documentID]);
    localStorage.setItem('documents', JSON.stringify(documents));
  }

  loadDocument(): void {
    throw new Error("Method not implemented.");
  }
  getDocuments(): void {
    throw new Error("Method not implemented.");
  }
}


