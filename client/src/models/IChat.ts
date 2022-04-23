import { IMessage, IUser } from "models";

type Message_type = string | File | File[];

export interface IChat {
  lastMessage: IMessage<Message_type>;
  isGroup: boolean;
  members: IUser[];
  name?: string;
  id: string;
  picture?: string;

  messages?: IMessage<any>[];
}
