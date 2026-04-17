import { createContext, useState } from "react";
import friendsData from "../data/friends.json";

export const FriendsContext = createContext();

export function FriendsProvider({ children }) {
  const [friends, setFriends] = useState(friendsData);

  const addFriend = (newFriend) => {
    setFriends((prev) => [...prev, newFriend]);
  };

  return (
    <FriendsContext.Provider value={{ friends, addFriend }}>
      {children}
    </FriendsContext.Provider>
  );
}
