import React from "react";
import { HomeScreen, LoginScreen, RegisterScreen } from "./src/screens";
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { useAuthState } from "./src/hooks/helpers";

const Stack = createStackNavigator();

const HomeScreenOptions: StackNavigationOptions = {
  header: () => <></>,
};

const StackNavigation = () => {
  const { user } = useAuthState();

  return (
    <Stack.Navigator initialRouteName={user ? "home" : "login"}>
      {user ? (
        <>
          <Stack.Group
            screenOptions={{
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
            }}
          >
            <Stack.Screen
              options={HomeScreenOptions}
              name="home"
              component={HomeScreen}
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
