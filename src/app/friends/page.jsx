import Allfriends from "@/components/Allfriends";

// const getFriends = async () => {
//   try {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/users",
//       {
//         cache: "no-store",
//       }
//     );



//     if (!res.ok) {
//       throw new Error("Failed to fetch friends data");
//     }

//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching friends:", error);
//     throw error;
//   }
// };

const FriendPage = () => {
    // const data = await getFriends();
    // console.log(data);
    return (
        <div>
            <Allfriends></Allfriends>
        </div>
    );
};

export default FriendPage;