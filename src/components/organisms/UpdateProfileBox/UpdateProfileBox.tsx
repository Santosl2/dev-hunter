import { toast } from "react-toastify";

import { UpdateProfileForm } from "@/components/molecules/UpdateProfileForm";
import { useMutationUpdateProfile } from "@/shared/hooks";
import { UpdateProfileData } from "@/shared/interfaces/user";

export function UpdateProfileBox() {
  const { mutateAsync } = useMutationUpdateProfile();

  const onSubmit = async (data: UpdateProfileData) => {
    try {
      await mutateAsync(data);

      toast.success("Perfil atualizado com sucesso!");
    } catch {
      toast.error("Erro ao atualizar perfil");
    }
  };
  return (
    <div className="bg-white rounded p-4">
      <UpdateProfileForm onSubmit={onSubmit} />
    </div>
  );
}
