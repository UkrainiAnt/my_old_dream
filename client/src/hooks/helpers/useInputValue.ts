import { useState } from "react";

const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const changeValue = (val: string) => {
    setValue(val);
  };

  const cleanValue = () => {
    setValue("");
  };

  return { value, changeValue, cleanValue };
};

export default useInputValue;
