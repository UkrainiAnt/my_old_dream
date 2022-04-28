import { useQuery } from "react-query";
import { ChatSolution } from "solution";
import { useAuthState } from "hooks/helpers";
import { queryNames } from "variables";

const useUserChats = () => {
  const { user } = useAuthState();
  const {
    data: chats,
    isLoading,
    isFetching,
    isError,
  } = useQuery([user?.id, queryNames], async ({ queryKey }) => {
    const [userId] = queryKey;
    return await ChatSolution.getAllUserChats(userId as number);
  });

  return { chats, isLoading: isLoading || isFetching, isError };
};

export default useUserChats;
