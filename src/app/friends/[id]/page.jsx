
import AddFriendBtn from "@/components/AddFriendBtn";
import Link from "next/link";

const FriendDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch friend details");
  }

  const data = await res.json();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <Link
          href="/friends"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-indigo-600"
        >
          <span aria-hidden="true">←</span> Back to Friends
        </Link>

        {/* Profile Header */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          <div className="h-36 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-500 sm:h-48" />

          <div className="px-5 pb-7 sm:px-8">
            <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">

              <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-indigo-100 text-4xl font-bold text-indigo-700 shadow-sm sm:h-28 sm:w-28">
                  {data.name.charAt(0)}
                </div>

                <div className="min-w-0 pb-1">
                  <p className="mb-1 text-sm font-medium text-indigo-600">
                    Friend Profile
                  </p>

                  <h1 className="break-words text-2xl font-bold text-slate-900 sm:text-3xl">
                    {data.name}
                  </h1>

                  <p className="mt-1 break-words text-sm text-slate-500">
                    @{data.username}
                  </p>
                </div>
              </div>

              {/* UI Only Button */}
              <AddFriendBtn friend={data}></AddFriendBtn>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                Friend ID: #{data.id}
              </span>

              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                Profile Details
              </span>
            </div>
          </div>
        </section>

        {/* Details Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Personal Information */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                👤
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Personal Information
                </h2>
                <p className="text-sm text-slate-500">
                  Basic contact details
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Full Name
                </p>
                <p className="break-words font-medium text-slate-800">
                  {data.name}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Username
                </p>
                <p className="break-words font-medium text-slate-800">
                  {data.username}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Email Address
                </p>
                <a
                  href={`mailto:${data.email}`}
                  className="break-all font-medium text-indigo-600 hover:underline"
                >
                  {data.email}
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Phone Number
                </p>
                <p className="break-words font-medium text-slate-800">
                  {data.phone}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Website
                </p>
                <a
                  href={`https://${data.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="break-all font-medium text-indigo-600 hover:underline"
                >
                  {data.website}
                </a>
              </div>
            </div>
          </section>

          {/* Address Information */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-xl">
                📍
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Address Details
                </h2>
                <p className="text-sm text-slate-500">
                  Location information
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Street
                </p>
                <p className="break-words font-medium text-slate-800">
                  {data.address.street}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Suite
                </p>
                <p className="break-words font-medium text-slate-800">
                  {data.address.suite}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  City
                </p>
                <p className="break-words font-medium text-slate-800">
                  {data.address.city}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Zip Code
                </p>
                <p className="break-words font-medium text-slate-800">
                  {data.address.zipcode}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Latitude
                  </p>
                  <p className="break-all text-sm font-medium text-slate-800">
                    {data.address.geo.lat}
                  </p>
                </div>

                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Longitude
                  </p>
                  <p className="break-all text-sm font-medium text-slate-800">
                    {data.address.geo.lng}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Company Information */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:col-span-2 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-xl">
                🏢
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Company Information
                </h2>
                <p className="text-sm text-slate-500">
                  Professional background
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Company Name
                </p>
                <p className="break-words font-semibold text-slate-800">
                  {data.company.name}
                </p>
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Business
                </p>
                <p className="break-words font-medium text-slate-800">
                  {data.company.bs}
                </p>
              </div>

              <div className="sm:col-span-2">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Company Catchphrase
                </p>
                <p className="break-words leading-7 text-slate-600">
                  {data.company.catchPhrase}
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-sm text-slate-400">
          Friend Profile · ID #{data.id}
        </p>
      </div>
    </main>
  );
};

export default FriendDetails;
