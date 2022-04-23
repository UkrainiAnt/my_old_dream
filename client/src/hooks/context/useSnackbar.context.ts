import { useContext } from "react";
import {
  SnackbarContext,
  SnackbarContextProps,
} from "providers/snackbar/snackbar.context";

const useSnackbarContext = () => {
  return useContext<SnackbarContextProps>(SnackbarContext);
};

export default useSnackbarContext;
