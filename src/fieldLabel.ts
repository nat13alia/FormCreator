// => wyświetla etykiete
export class FieldLabel {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  render() {
    // Create Label element
    const label: HTMLElement = document.createElement('label');
    // Add attribute 'for'
    label.setAttribute('for', `${this.name.toLowerCase()}`);
    // Add Text
    label.textContent = `${this.name}`;
  }
}
