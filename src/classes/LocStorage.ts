import { DataStorage } from './dataStorage';
import { Form } from './form';
import { Doc } from './Doc';

export class LocStorage implements DataStorage {
  getDocuments<T extends Form | string>(key: string): T[] {
    let objectContainer: T[];
    if (localStorage.getItem(key) === null) {
      objectContainer = [];
      console.log(objectContainer);
    } else {
      objectContainer = JSON.parse(localStorage.getItem(key));
      console.log(objectContainer);
    }
    return objectContainer;
  }

  saveDocument<T extends Form | Doc>(document: T, key: string): void {
    let timeStamp: number = Date.now();
    let documentID: string = `${document.name}-${timeStamp}`;
    let objectContainer: T[];
    let keysContainer: string[];
    if (localStorage.getItem(key) === null) {
      objectContainer = [];
    } else {
      objectContainer = JSON.parse(localStorage.getItem(key));
    }

    if (localStorage.getItem('keys') === null) {
      keysContainer = [];
    } else {
      keysContainer = JSON.parse(localStorage.getItem('keys'));
    }
    objectContainer.push(document);
    keysContainer.push(documentID);
    localStorage.setItem(key, JSON.stringify(objectContainer));
    localStorage.setItem('keys', JSON.stringify(keysContainer));
  }

  removeDocument<T extends Form | Doc>(documentID: string): void {
    let objectContainer: T[];
    let keysContainer: string[];

    if (localStorage.getItem('documents') === null) {
      objectContainer = [];
    } else {
      objectContainer = JSON.parse(localStorage.getItem('documents'));
    }

    if (localStorage.getItem('keys') === null) {
      console.log("The array of keys is empty");
    } else {
      keysContainer = JSON.parse(localStorage.getItem('keys'));
    }

    for (let i = 0; i < keysContainer.length; i++) {
      if (keysContainer[i] === documentID) {
        objectContainer.splice(i, 1);
        keysContainer.splice(i, 1);
      }
    }

    localStorage.setItem('documents', JSON.stringify(objectContainer));
    localStorage.setItem('keys', JSON.stringify(keysContainer));
  }
  loadDocument(): void {
    throw new Error("Method not implemented.");
  }
}


