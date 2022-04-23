import { useState } from "react";

const useInputValue = (
  initialValue: string,
  validator?: (value: string) => boolean
) => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setIsError] = useState<boolean>(false);

  const changeValue = (val: string) => {
    setValue(val);
  };

  const cleanValue = () => {
    setValue("");
  };

  const validate = () => {
    setIsError(false);
    const isError = validator?.(value);

    setIsError(!!isError);
  };

  return { value, changeValue, cleanValue, error, validate };
};

export default useInputValue;
