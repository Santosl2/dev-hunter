export type FiltersStateProps = {
  categories: string[];
  seniorities: string[];
  contractTypes: string[];
};

export type FiltersStateKeys = keyof FiltersStateProps;

export type ModalStateProps = {
  isOpen: boolean;
  modalType: string | null;
};
