import { IUpdateUserPayload } from "models";
import { axiosInstance } from "lib/axios";

import { IUser } from "models";

export default class UserSolution {
  static async updateUser(userPayload: IUpdateUserPayload, userId: number) {
    const newUser = await axiosInstance({
      method: "PUT",
      data: userPayload,
      url: "users/" + userId,
    });

    return newUser;
  }

  static async getUserStats(userId: number) {
    console.log(userId + " userId");

    const userStats = await axiosInstance({
      method: "GET",
      url: "users/stats/" + userId,
    });

    return userStats;
  }

  static async getAllUsers(userId: number): Promise<IUser[]> {
    console.log(userId);

    const { data } = await axiosInstance({
      method: "get",
      url: "users/all",
    });

    return data;
  }

  static async searchUsers(search: string): Promise<IUser[]> {
    const { data } = await axiosInstance({
      url: "users/search?search=" + search,
      method: "GET",
    });

    return data;
  }
}
