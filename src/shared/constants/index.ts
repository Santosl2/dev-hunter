export const FILTERS_SLICE_NAME = "filters";
export const MODALS_SLICE_NAME = "modals";

export const CONTRACT_TYPES = [
  { value: "PJ", label: "PJ" },
  { value: "CLT", label: "CLT" },
  { value: "Freelancer", label: "Freelancer" },
] as const;

export const MOBILITY_TYPES = [
  {
    value: "Remoto",
    label: "Remoto",
  },
  {
    value: "Presencial",
    label: "Presencial",
  },
  {
    value: "Híbrido",
    label: "Híbrido",
  },
] as const;
