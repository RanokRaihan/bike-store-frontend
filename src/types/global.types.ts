/* eslint-disable no-unused-vars */
export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "  textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

export type TFilter = {
  key: string;
  value: string;
};

export type TMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};
// Example usage of FormFieldType.INPUT
