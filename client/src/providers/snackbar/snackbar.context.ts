import { createContext } from "react";
import { colors } from "variables";

export interface SnackbarPayload {
  closable: boolean;
  text: string;
  color: keyof typeof colors;
}

export interface SnackbarContextProps {
  isOpen: boolean;
  open: (payload: SnackbarPayload) => void;
  close: () => void;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
  close: () => {},
  isOpen: false,
  open: () => {},
});
