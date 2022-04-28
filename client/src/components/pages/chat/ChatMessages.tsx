import { FC } from "react";
import { Message } from "components/shared/molecules/Message";
import { FlatList, View } from "react-native";
import { useRef } from "react";

import { useChatContext, useMessageContext } from "hooks/context";

import { NoMessagePlaceholder } from "components/placeholders";

const ChatMessages: FC = (props) => {
  const flatListRef = useRef<FlatList>(null);

  const { selectedChat } = useChatContext();
  const { messages } = useMessageContext();

  if (!messages.length) {
    return <NoMessagePlaceholder onPress={() => {}} />;
  }

  return (
    <>
      <FlatList
        data={messages}
        inverted
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", flex: 1, marginTop: "auto" }}
        renderItem={({ item }) => <Message message={item} />}
        keyExtractor={(item) => item.id}
      />

      <View style={{ height: 20 }}></View>
    </>
  );
};

export default ChatMessages;
