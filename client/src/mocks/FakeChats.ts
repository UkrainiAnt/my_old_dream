import { IChat } from "models";
import { fakeUsers } from "mocks";
import { fakeUser } from "./FakeUser";

const fakeMessages = [
  {
    id: "m1",
    type: "text",
    body: "How are you, Elon!",
    createdAt: "2020-10-10T12:48:00.000Z",
    sender: fakeUser,
  },
  {
    id: "m2",
    type: "text",
    body: "I am good, good",
    createdAt: "2020-10-03T14:49:00.000Z",
    sender: fakeUsers[1],
  },
  {
    id: "m3",
    type: "text",
    body: "What about you?",
    createdAt: "2020-10-03T14:49:40.000Z",
    sender: fakeUser,
  },
  {
    id: "m4",
    type: "text",
    body: "Good as well, preparing for the stream now.",
    createdAt: "2020-10-03T14:50:00.000Z",
    sender: fakeUsers[1],
  },
  {
    id: "m5",
    type: "text",
    body: "How is SpaceX doing?",
    createdAt: "2020-10-03T14:51:00.000Z",
    sender: fakeUser,
  },
  {
    id: "m6",
    type: "text",
    body: "going to the Moooooon",
    createdAt: "2020-10-03T14:49:00.000Z",
    sender: fakeUsers[1],
  },
  {
    id: "m7",
    type: "text",
    body: "btw, SpaceX is interested in buying notJust.dev!",
    createdAt: "2020-10-03T14:53:00.000Z",
    sender: fakeUser,
  },
];

const fakeChatDetail: IChat = {
  isGroup: false,
  lastMessage: {
    id: "m1",
    type: "text",
    body: "How are you, Elon!",
    createdAt: "2020-10-10T12:48:00.000Z",
    user: fakeUser,
  },
  id: "1",
  members: [fakeUser, fakeUsers[1]],
  messages: fakeMessages.concat(
    fakeMessages,
    fakeMessages,
    fakeMessages,
    fakeMessages,
    fakeMessages,
    fakeMessages,
    fakeMessages,
    fakeMessages,
    fakeMessages,
    fakeMessages,
    fakeMessages
  ),
};

export default fakeChatDetail;
