import {
  IUser,
  LoginPayload,
  RegisterPayload,
  IUpdateUserPayload,
} from "../models";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosInstance } from "lib/axios";
import { AxiosResponse } from "axios";

export default class UserSolution {
  static async login(payload: LoginPayload): Promise<any> {
    const { data } = await axiosInstance("auth/login", {
      method: "POST",
      data: payload,
    });

    AsyncStorage.setItem("token", data.accessToken);
  }

  static async register(payload: RegisterPayload) {
    const { data } = await axiosInstance("auth/register", {
      method: "POST",
      data: {
        ...payload,
        picture:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Vladimir_Putin_17-11-2021_%28cropped_2%29.jpg/250px-Vladimir_Putin_17-11-2021_%28cropped_2%29.jpg",
      },
    });

    AsyncStorage.setItem("token", data.accessToken);
  }

  static async updateUser(id: number, payload: IUpdateUserPayload) {
    const { data } = await axiosInstance("user/" + id, {
      method: "PUT",
      data: payload,
    });

    AsyncStorage.setItem("token", data.accessToken);
  }

  static async signInWithProvider(credentials: RegisterPayload) {
    const { data } = await axiosInstance("auth/provider", {
      method: "POST",
      data: credentials,
    });

    AsyncStorage.setItem("token", data.accessToken);
  }

  static async getCurrentUser(): Promise<AxiosResponse<IUser>> {
    return await axiosInstance.get("users/me");
  }

  static logoutUser(): void {
    AsyncStorage.removeItem("token");
  }

  static createUser(
    name: string,
    email: string,
    password: string
  ): RegisterPayload {
    const user: RegisterPayload = {
      name,
      email,
      password,
      picture: "https://avatars.dicebear.com/api/initials/" + email + ".svg",
    };

    return user;
  }
}
