import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { BsLinkedin } from "react-icons/bs";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Button,
  ErrorMessage,
  Input,
  Select,
  Textarea,
} from "@/components/atoms";
import { CONTRACT_TYPES, MOBILITY_TYPES } from "@/shared/constants";
import { useUserInfo } from "@/shared/hooks";
import { UpdateProfileData } from "@/shared/interfaces/user";
import { UpdateProfileSchema } from "@/shared/schemas/UpdateProfile.schema";

import { UpdateProfileFormProps } from "./UpdateProfileForm.types";

export function UpdateProfileForm({ onSubmit }: UpdateProfileFormProps) {
  const { data } = useUserInfo();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(UpdateProfileSchema),
  });

  const user = data?.data;

  const getDefaultContractTypes = (
    type: "mobility_type" | "contract_type",
    arr: any
  ) => {
    if (!user) return [];

    const obj = user[type];

    if (!obj) return [];

    // sorry ts :(
    const contractTypes = obj.map((d) =>
      arr.find(({ value }: any) => value === d)
    );
    return contractTypes;
  };

  const defaultContractTypes = getDefaultContractTypes(
    "contract_type",
    CONTRACT_TYPES
  );
  const defaultMobilityTypes = getDefaultContractTypes(
    "mobility_type",
    MOBILITY_TYPES
  );

  useEffect(() => {
    setValue(
      "contract_type",
      defaultContractTypes.map((d) => d.value)
    );
    setValue(
      "mobility_type",
      defaultMobilityTypes.map((d) => d.value)
    );
    setValue("bio", user?.bio || "");
  }, [user]);

  if (!user) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <Controller
          name="contract_type"
          control={control}
          render={({ field }) => (
            <Select
              options={CONTRACT_TYPES as any}
              defaultValue={defaultContractTypes}
              isMulti
              placeholder="Selecione seu modelo de contratação"
              {...field}
              onChange={(e) => {
                const formattedContract = e.map((location: any) => {
                  return location.value;
                });

                field.onChange(formattedContract);
              }}
            />
          )}
        />
        {errors.contract_type?.message && (
          <ErrorMessage message={errors.contract_type.message} />
        )}
      </div>

      <div className="mb-6">
        <Controller
          name="mobility_type"
          control={control}
          render={({ field }) => (
            <Select
              options={MOBILITY_TYPES as any}
              defaultValue={defaultMobilityTypes}
              isMulti
              {...field}
              placeholder="Selecione seu modelo de trabalho..."
              onChange={(e) => {
                const formattedLocation = e.map(
                  (location: any) => location.value
                );

                field.onChange(formattedLocation);
              }}
            />
          )}
        />

        {errors.mobility_type?.message && (
          <ErrorMessage message={errors.mobility_type.message} />
        )}
      </div>

      <div className="mb-6">
        <Textarea
          placeholder="Conte um pouco sobre você..."
          defaultValue={user?.bio}
          {...register("bio")}
        />
        {errors.bio?.message && <ErrorMessage message={errors.bio.message} />}
      </div>

      <Input
        type="url"
        placeholder="https://www.linkedin.com/in/"
        defaultValue={user?.linkedin}
        icon={<BsLinkedin />}
        {...register("linkedin")}
        error={errors.linkedin?.message as string}
      />

      <Button $variant="green" type="submit" disabled={isSubmitting}>
        Salvar
      </Button>
    </form>
  );
}
