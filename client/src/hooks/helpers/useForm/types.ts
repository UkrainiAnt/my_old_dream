export type ValidationRule<T> = {
  readonly [P in keyof T]?: (value: T[P], values?: T) => boolean;
};

export type UseFormErrors<T> = {
  readonly [P in keyof T]?: React.ReactNode | null;
};

export interface UseForm<T> {
  values: T;
  errors: Record<keyof T, React.ReactNode>;
  validate: () => boolean;
  reset: () => void;
  setErrors: React.Dispatch<
    React.SetStateAction<Record<keyof T, React.ReactNode>>
  >;
  setValues: React.Dispatch<React.SetStateAction<T>>;
  setFieldValue: <K extends keyof T, U extends T[K]>(
    field: K,
    value: U
  ) => void;
  setFieldError: (field: keyof T, error: React.ReactNode) => void;
  validateField: (field: keyof T) => void;
  resetErrors: () => void;
  onSubmit: (
    handleSubmit: (values: T) => any
  ) => (event?: React.FormEvent) => void;
  getInputProps: (key: keyof T) => any;
  isError: boolean;
}
