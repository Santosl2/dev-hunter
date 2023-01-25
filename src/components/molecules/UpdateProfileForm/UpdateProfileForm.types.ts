import { UpdateProfileData } from "@/shared/interfaces/user";

export type UpdateProfileFormProps = {
  onSubmit: (data: UpdateProfileData) => void;
};
