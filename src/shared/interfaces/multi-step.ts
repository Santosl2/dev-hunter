import { ContractsTypes, LocationTypes } from ".";

export type StepOneProps = {
  seniority: number;
  skills: string[];
};

export type StepTwoProps = {
  bio: string;
};

export type StepThreeProps = {
  linkedin: string;
  contract_type: ContractsTypes[];
  mobility_type: LocationTypes[];
};

export type LocalStorageSteps = {
  stepOne: StepOneProps;
  stepTwo: StepTwoProps;
  stepThree: StepThreeProps;
};
