import {
  SnackbarContext,
  SnackbarContextProps,
  SnackbarPayload,
} from "./snackbar.context";
import { Snackbar } from "react-native-paper";
import { FC, useState } from "react";

const SnackbarProvider: FC = (props) => {
  const { children } = props;

  const [text, setText] = useState<string>("");
  const [isOpen, setOpen] = useState<boolean>(false);
  const [closable, setClosable] = useState<boolean>(false);
  const [color, setColor] = useState<string>("");

  const open = ({ closable, color, text }: SnackbarPayload) => {
    setText(text);
    setColor(color);
    setClosable(closable);
    setOpen(true);
  };

  const close = () => {
    setText("");
    setClosable(false);
    setOpen(false);
  };

  const contextValue: SnackbarContextProps = {
    isOpen,
    close,
    open,
  };

  return (
    <SnackbarContext.Provider value={contextValue}>
      {children}
      <Snackbar
        visible={isOpen}
        onDismiss={close}
        action={
          closable
            ? {
                label: "Close",
                onPress: close,
              }
            : {
                label: "",
              }
        }
      >
        {text}
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
