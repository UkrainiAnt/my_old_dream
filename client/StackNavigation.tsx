import React from "react";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  EnterConfirm,
  ChatScreen,
  AddContactScreen,
} from "./src/screens";
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { useAuthState } from "./src/hooks/helpers";

import { useAppSelector } from "hooks/redux";
import { codeSelector } from "store/selectors/confirm.selectors";

const Stack = createStackNavigator();

const HomeScreenOptions: StackNavigationOptions = {
  header: () => <></>,
};

const StackNavigation = () => {
  const { user } = useAuthState();

  const code = useAppSelector(codeSelector);

  return (
    <Stack.Navigator initialRouteName={user ? "home" : "login"}>
      {user ? (
        <>
          <Stack.Group
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
            }}
          >
            {code ? (
              <Stack.Screen
                options={HomeScreenOptions}
                name="confirm"
                component={EnterConfirm}
              />
            ) : (
              <Stack.Screen
                options={HomeScreenOptions}
                name="home"
                component={HomeScreen}
              />
            )}
          </Stack.Group>

          <Stack.Group
            screenOptions={{
              gestureDirection: "horizontal",
              gestureEnabled: true,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            <Stack.Screen
              options={HomeScreenOptions}
              name="add-contact"
              component={AddContactScreen}
            />
          </Stack.Group>

          <Stack.Group
            screenOptions={{
              gestureDirection: "horizontal",
              gestureEnabled: true,
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
          >
            <Stack.Screen
              options={HomeScreenOptions}
              name="chat"
              component={ChatScreen}
            />
          </Stack.Group>
        </>
      ) : (
        <Stack.Group
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          }}
        >
          <Stack.Screen
            options={HomeScreenOptions}
            name="login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={HomeScreenOptions}
            name="register"
            component={RegisterScreen}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
