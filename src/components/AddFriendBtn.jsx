'use client'
import { FriendContext } from "@/context/FriendContext";
import { useContext } from "react";

const AddFriendBtn = ({friend}) => {
    const {addFriend} = useContext(FriendContext);
    const handleAddFriend = () => {
        const added = addFriend(friend)
    }
    return (
        
            <button onClick={handleAddFriend}
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 sm:w-auto"
              >
                <span className="text-lg">+</span>
                Add Friend
              </button>
        
    );
};

export default AddFriendBtn;