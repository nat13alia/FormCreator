import { Form } from "./form";

export interface DataStorage {
  getDocuments(locStorageKey?: string, objectContainer?: object): object // metoda powinna zwracać tablicę idenfikatorów wszystkich zapisanych dokumentów.
  saveDocument(document: Form | Document, locStorageKey?: string, objectContainer?: object): void; //metoda powinna pobierać jako parametr obiekt z wartościami pól formularza (typ any) i zwracać identyfikator dokumentu (string)
  loadDocument(locStorageKey?: string, objectContainer?: object): void // metoda powinna pobierać jako parametr identyfikator dokumentu i zwracać obiekt z wartościami dokumentu (czyli wartościami wypełnionych przez użytkownika pól formularza)
}