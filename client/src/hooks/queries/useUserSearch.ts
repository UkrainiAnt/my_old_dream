import { UserSolution } from "solution";
import { useQuery } from "react-query";
import { queryNames } from "variables";

import { useChatContext } from "hooks/context";
import { useEffect } from "react";

const useUserSearch = (search: string) => {
  const { chats } = useChatContext();

  const {
    data: users,
    isLoading,
    isFetching,
    refetch,
  } = useQuery([queryNames.userSearch, search], async ({ queryKey }) => {
    const [_, search] = queryKey;
    return await UserSolution.searchUsers(search);
  });

  const otherUserIds = chats
    .map((item) => item.users.map((item) => item.id))
    .flat();

  const filteredUsers = users?.filter(
    (item) => !otherUserIds.includes(+item.id)
  );

  return { users: filteredUsers, isLoading: isLoading || isFetching, refetch };
};

export default useUserSearch;
