'use client'

import { createContext, useState } from "react"
import { toast } from "react-toastify";

export const FriendContext = createContext();


const FriendProvider = ({children}) => {
  const [friends , setFriends] = useState([]);

//   const FriendInfo = {
//     friends,
//     setFriends
//   }
const addFriend = (friend) => {
    const alreadyExists = friends.some((item) => item.id === friend.id);
    if(alreadyExists) {
        toast.info('Friend already added');
        return
    }
    setFriends((prevFriends) => [...prevFriends, friend]);
    toast.success('Friend added')
}

    return (<FriendContext.Provider value={{friends, addFriend}}>{children}</FriendContext.Provider>
    )
}

export default FriendProvider;
