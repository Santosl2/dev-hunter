import { Controller } from "react-hook-form";
import { BsLinkedin } from "react-icons/bs";

import { motion } from "framer-motion";

import { Button, ErrorMessage, Input, Select } from "@/components/atoms";
import { CONTRACT_TYPES, MOBILITY_TYPES } from "@/shared/constants";
import { baseAnimationVariant } from "@/shared/variants";

import { useStepThree } from "./hooks/useStepThree";

export function StepThree() {
  const {
    prevStep,
    errors,
    handleSubmit,
    isValid,
    register,
    isLoading,
    control,
  } = useStepThree();

  return (
    <motion.form
      initial="initial"
      animate="animate"
      variants={baseAnimationVariant}
      data-testid="step-three"
      onSubmit={handleSubmit}
    >
      <Input
        type="url"
        placeholder="https://www.linkedin.com/in/"
        icon={<BsLinkedin />}
        {...register("linkedin")}
        error={errors.linkedin?.message as string}
      />

      <div className="mb-6">
        <Controller
          name="contract_type"
          control={control}
          render={({ field }) => (
            <Select
              options={CONTRACT_TYPES as any}
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

      <div className="flex justify-between items-center">
        <Button $variant="yellow" onClick={() => prevStep()}>
          Voltar
        </Button>
        <Button $variant="green" type="submit" disabled={!isValid || isLoading}>
          Finalizar!
        </Button>
      </div>
    </motion.form>
  );
}
