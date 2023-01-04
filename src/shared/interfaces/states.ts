export type FiltersStateProps = {
  skills: string;
  seniorities: string;
  contractTypes: string;
};

export type FiltersStateKeys = keyof FiltersStateProps;

export type ModalStateProps = {
  isOpen: boolean;
  modalType: string | null;
};
