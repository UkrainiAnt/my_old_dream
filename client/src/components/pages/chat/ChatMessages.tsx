import { IMessage } from "models";
import { FC } from "react";
import { Message } from "components/shared/molecules/Message";
import { FlatList } from "react-native";

interface ChatMessagesProps {
  messages: IMessage<any>[];
}

const ChatMessages: FC<ChatMessagesProps> = (props) => {
  const { messages } = props;

  return (
    <FlatList
      data={messages}
      inverted
      showsVerticalScrollIndicator={false}
      style={{ width: "100%", flex: 1, marginTop: "auto" }}
      renderItem={({ item }) => <Message message={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ChatMessages;
