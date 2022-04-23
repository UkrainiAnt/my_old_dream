import { useState } from "react";

interface KeyValuePayload {
  [key: string]: any;
}

const useSelectValue = <Type extends KeyValuePayload>(
  payload: Type,
  initialKey: keyof Type
) => {
  const [key, setKey] = useState<keyof Type>(initialKey);

  const changeKey = (newKey: keyof Type) => {
    setKey(newKey);
  };

  return { value: payload[key], changeKey };
};

export default useSelectValue;
