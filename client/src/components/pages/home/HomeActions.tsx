import { useState } from "react";
import { FAB, Portal, Provider } from "react-native-paper";

import { colors } from "variables";

const MyComponent = () => {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }: { open: boolean }) => setState({ open });

  const { open } = state;

  return (
    <FAB.Group
      style={{
        bottom: 20,
        right: 10,
        backgroundColor: colors.blue,
        position: "absolute",
      }}
      visible
      open={open}
      icon={open ? "calendar-today" : "plus"}
      actions={[
        { icon: "plus", onPress: () => console.log("Pressed add") },
        {
          icon: "star",
          label: "Star",
          onPress: () => console.log("Pressed star"),
        },
        {
          icon: "email",
          label: "Email",
          onPress: () => console.log("Pressed email"),
        },
        {
          icon: "bell",
          label: "Remind",
          onPress: () => console.log("Pressed notifications"),
          small: false,
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          console.log("open");
        }
      }}
    />
  );
};

export default MyComponent;
