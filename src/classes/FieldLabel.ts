export class FieldLabel {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  render(): HTMLLabelElement {
    // Create a label element
    const label: HTMLLabelElement = document.createElement('label');
    // Add attribute 'for'
    label.setAttribute('for', `${this.name.toLowerCase()}`);
    // Add TextContent
    label.textContent = `${this.name}`;
    return label;
  }
}
