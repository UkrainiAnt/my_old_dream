import { useMutation } from "react-query";
import { AuthSolution } from "solution";
import { LoginPayload, RegisterPayload } from "models";
import { useNavigation } from "@react-navigation/native";

const useAuthMutations = () => {
  const navigator = useNavigation();

  const register = useMutation(
    async (payload: RegisterPayload) => await AuthSolution.register(payload)
  );

  const login = useMutation(
    async (payload: LoginPayload) => await AuthSolution.login(payload),
    {
      onSuccess: () => {
        navigator.navigate("home" as never, {} as never);
      },
    }
  );

  const signInWithProvider = useMutation(
    async (payload: RegisterPayload) =>
      await AuthSolution.signInWithProvider(payload),
    {
      onSuccess: () => {
        navigator.navigate("home" as never, {} as never);
      },
    }
  );

  const createGooglePayload = (googleUser: any): RegisterPayload => {
    const user: RegisterPayload = {
      email: googleUser.email,
      name: googleUser.givenName + " " + googleUser?.familyName || "",
      password: googleUser.photoUrl,
      picture: googleUser.photoUrl,
    };

    return user;
  };

  const isLoading =
    signInWithProvider.isLoading || login.isLoading || register.isLoading;

  return {
    register,
    login,
    isLoading,
    signInWithProvider,
    createGooglePayload,
  };
};

export default useAuthMutations;
