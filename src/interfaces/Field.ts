import { FieldType } from "../enums/FieldType";
import { FieldLabel } from "../classes/FieldLabel";

export interface Field {
  name: string;
  label: FieldLabel;
  type: FieldType;
  value: string;
  options?: string[];

  render(): HTMLElement;
  getValue(): string;
}
