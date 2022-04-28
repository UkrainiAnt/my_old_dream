import { IUser } from "./IUser";

type message_type = "text" | "image" | "audio" | "video" | "admin";

export interface IMessage<Type extends Object>
  extends CreateMessagePayload<Type> {
  id: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  sender?: IUser;
  status?: "SENT" | "DELIVERED" | "VIEWED";
}

export interface CreateMessagePayload<Type extends Object> {
  senderId: number;
  chatId: number;
  additionData?: string[];
  body: Type;

  type: message_type;
}
