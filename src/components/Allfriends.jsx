import Link from "next/link";

const getFriends = async () => {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch friends data");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching friends:", error);
    throw error;
  }
};

const Allfriends = async () => {
  const friends = await getFriends();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        All Friends
      </h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {friends.map((friend) => (
            <Link key={friend.id} href={`/friends/${friend.id}`}>
          <div
            key={friend.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">
                {friend.id}
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">Friend ID</p>
                <h2 className="text-lg font-bold text-gray-800">
                  #{friend.id}
                </h2>
              </div>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <h3 className="mb-3 font-semibold text-indigo-600">
                Address Details
              </h3>

              <p className="mb-2 break-words text-sm text-gray-700">
                <span className="font-semibold">Street:</span>{" "}
                {friend.address.street}
              </p>

              <p className="mb-2 break-words text-sm text-gray-700">
                <span className="font-semibold">Suite:</span>{" "}
                {friend.address.suite}
              </p>

              <p className="mb-2 break-words text-sm text-gray-700">
                <span className="font-semibold">City:</span>{" "}
                {friend.address.city}
              </p>

              <p className="break-words text-sm text-gray-700">
                <span className="font-semibold">Zipcode:</span>{" "}
                {friend.address.zipcode}
              </p>
              <Link href={`/friends/${friend.id}`}>
              <button className="bg-green-300 py-2 px-4 rounded cursor-pointer hover:bg-green-800">View Details</button>
              </Link>
            </div>
          </div>
          </Link>
          
        ))} 
      </div>
    </section>
  );
};

export default Allfriends;
