import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/components/layout/toasts";
import { AuthProvider } from "./src/providers/auth";
import StackNavigation from "./StackNavigation";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "store/store";
import { Provider } from "react-redux";
import { LogBox, View, StyleSheet } from "react-native";
import { SnackbarProvider } from "providers/snackbar";
import { ChatProvider } from "providers/chat";

import { MessageProvider } from "providers/message";

LogBox.ignoreAllLogs();

console.warn = function warn() {};
const client = new QueryClient();

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Provider store={store}>
        <NavigationContainer>
          <QueryClientProvider client={client}>
            <AuthProvider>
              <ChatProvider>
                <MessageProvider>
                  <SnackbarProvider>
                    <StackNavigation />
                  </SnackbarProvider>
                </MessageProvider>
              </ChatProvider>
            </AuthProvider>
          </QueryClientProvider>
        </NavigationContainer>
      </Provider>

      <Toast config={toastConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
