import { IChat, IUser } from "models";
import { fakeUser } from "./FakeUser";
import { fakeUsers } from ".";

const fakeChatRooms: IChat[] = [
  {
    id: "1",
    isGroup: false,
    members: [fakeUser, fakeUsers[1]],
    lastMessage: {
      id: "m1",
      type: "text",
      body: "btw, SpaceX is interested in buying notJust.dev!",
      createdAt: "2020-10-03T14:48:00.000Z",
    },
  },
  {
    id: "2",
    members: [fakeUser, fakeUsers[2]],
    lastMessage: {
      id: "m2",
      type: "text",
      body: "Why did you reject our offer?",
      createdAt: "2020-10-02T15:40:00.000Z",
    },
    isGroup: false,
  },
  {
    id: "3",
    isGroup: false,
    members: [fakeUser, fakeUsers[3]],
    lastMessage: {
      id: "m3",
      type: "text",
      body: "Is signal really better than my Whatsapp?",
      createdAt: "2020-10-02T14:48:00.000Z",
    },
  },
  {
    id: "4",
    members: [fakeUser, fakeUsers[4]],
    isGroup: false,
    lastMessage: {
      id: "m4",
      type: "text",
      body: "Destroy the like button!",
      createdAt: "2020-09-29T14:48:00.000Z",
    },
  },
  {
    id: "5",
    isGroup: false,
    members: [fakeUser, fakeUsers[5]],
    lastMessage: {
      id: "m5",
      type: "text",
      body: "I would be happy",
      createdAt: "2020-09-30T14:48:00.000Z",
    },
  },
  {
    id: "6",
    isGroup: false,
    members: [fakeUser, fakeUsers[6]],
    lastMessage: {
      id: "m6",
      type: "text",
      body: "Who sus?",
      createdAt: "2020-10-02T15:40:00.000Z",
    },
  },
  {
    id: "7",
    isGroup: false,
    members: [fakeUser, fakeUsers[7]],
    lastMessage: {
      id: "m7",
      type: "text",
      body: "How are you doing?",
      createdAt: "2020-10-02T15:40:00.000Z",
    },
  },
  {
    id: "8",
    isGroup: false,
    members: [fakeUser, fakeUsers[8]],
    lastMessage: {
      id: "m8",
      type: "text",
      body: "Hola hola coca cola?",
      createdAt: "2020-09-27T15:40:00.000Z",
    },
  },
  {
    id: "9",
    isGroup: false,
    members: [fakeUser, fakeUsers.pop() as IUser],
    lastMessage: {
      id: "m9",
      type: "text",
      body: "Meet me at the same place",
      createdAt: "2020-09-25T15:40:00.000Z",
    },
  },
];

export default fakeChatRooms;
export const [fakeChatRoom] = fakeChatRooms;
