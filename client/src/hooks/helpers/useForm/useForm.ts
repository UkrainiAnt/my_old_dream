import React from "react";
import { useState } from "react";
import { ValidationRule, UseForm, UseFormErrors } from "./types";

interface UseFormInput<InitialStateType> {
  validationRules?: ValidationRule<InitialStateType>;
  errorMessages?: UseFormErrors<InitialStateType>;
  initialValues: InitialStateType;
}

export default function useForm<
  InitialStateType extends { [key: string]: any }
>({
  initialValues,
  validationRules = {},
  errorMessages = {},
}: UseFormInput<InitialStateType>): UseForm<InitialStateType> {
  type ValidationErrors = Record<keyof InitialStateType, React.ReactNode>;

  const initialErrors = Object.keys(initialValues).reduce((acc, field) => {
    acc[field as keyof InitialStateType] = null;
    return acc;
  }, {} as ValidationErrors);

  const [errors, setErrors] = useState(initialErrors);
  const [values, setValues] = useState(initialValues);

  const resetErrors = () => setErrors(initialErrors);

  const reset = () => {
    setValues(initialValues);
    resetErrors();
  };

  const validate = () => {
    let isValid = true;

    const validationErrors = Object.keys(values).reduce((acc, field) => {
      if (
        validationRules &&
        typeof validationRules[field] === "function" &&
        !validationRules[field]!(values[field], values)
      ) {
        acc[field as keyof InitialStateType] = errorMessages[field] || true;
        isValid = false;
      } else {
        acc[field as keyof InitialStateType] = null;
      }

      return acc;
    }, {} as ValidationErrors);

    setErrors(validationErrors);
    return isValid;
  };

  const validateField = (field: keyof InitialStateType) =>
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]:
        typeof validationRules[field] === "function"
          ? validationRules[field]!(values[field], values)
            ? null
            : errorMessages[field] || true
          : null,
    }));

  const setFieldError = (
    field: keyof InitialStateType,
    error: React.ReactNode
  ) => setErrors((currentErrors) => ({ ...currentErrors, [field]: error }));

  const setFieldValue = <Key extends keyof InitialStateType>(
    field: Key,
    value: string
  ) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setFieldError(field, null);
  };

  const onSubmit = (handleSubmit: (values: InitialStateType) => any) => () => {
    if (validate()) {
      handleSubmit(values);
    }
  };

  const getInputProps = <Key extends keyof InitialStateType>(field: Key) => ({
    value: values[field],
    name: field,
    label:
      field.toString().split("").shift()?.toUpperCase() +
      field.toString().slice(1),
    onChangeText: (val: string) => setFieldValue(field, val),
    error: (errors[field] as string) || undefined,
    placeholder:
      field.toString()[0].toUpperCase() + field.toString().slice(1) + "...",
  });

  return {
    values,
    errors,
    validate,
    reset,
    setErrors,
    setValues,
    setFieldValue,
    setFieldError,
    validateField,
    resetErrors,
    onSubmit,
    getInputProps: getInputProps,
  };
}
