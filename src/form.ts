import { Field } from './field';
// Klasa form odpowiada za przetrzymywanie  całości informacji o formularzu oraz jego wyświetlanie.

// W klasie powinny być przechowywane informacje o wszystkich polach formularza (tablica elementów Field).

// Klasa powinna udostępniać dwie metody:
// - getValue() pobierającą wyniki formularza
// - render() wyświetlającą formularz we wskazanym miejscu.

export class Form {
  formName: string;
  formFields: Field[] = [];

  constructor(name: string) {
    this.formName = name;
  }

  getValue() { }
  render() { }
}


