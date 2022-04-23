import { IUser } from "./IUser";

type message_type = "text" | "image" | "audio" | "video" | "admin";

export interface IMessage<Type extends Object>
  extends CreateMessagePayload<Type> {
  id: string;
  createdAt: Date | string;
  updatedAt?: Date | string;
  status?: "SENT" | "DELIVERED" | "VIEWED";

  user?: IUser;
}

export interface CreateMessagePayload<Type extends Object> {
  sender?: IUser;
  body: Type;
  type: message_type;
}
