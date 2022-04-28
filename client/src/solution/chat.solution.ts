import { axiosInstance } from "lib/axios";
import { IChat } from "models";

interface ChatPayload {
  users: number[];
  isGroup: boolean;
}

export default class ChatSolution {
  static async createChat(payload: ChatPayload) {
    const { data } = await axiosInstance({
      method: "POST",
      data: {
        data: { isGroup: payload.isGroup },
        userIds: payload.users,
      },
      url: "chat/create",
    });

    return data;
  }

  static async getAllUserChats(userId: number): Promise<IChat[]> {
    const { data } = await axiosInstance({
      method: "GET",
      url: "chat/" + userId + "/chats",
    });

    return data;
  }
}
