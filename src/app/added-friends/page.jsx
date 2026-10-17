
'use client';

import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';

const AddedFriends = () => {
    const { friends } = useContext(FriendContext);

    const sortedFriends = [...friends].sort(
        (a, b) => Number(b.id) - Number(a.id)
    );

    return (
        <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[3px] text-indigo-600">
                            Your Network
                        </p>

                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Added Friends
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Manage and view all your connected friends.
                        </p>
                    </div>

                    <div className="flex w-fit items-center gap-3 rounded-2xl border border-indigo-100 bg-white px-5 py-3 shadow-sm">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="23"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="10" cy="7" r="4" />
                                <path d="M20 8v6m3-3h-6" />
                            </svg>
                        </div>

                        <div>
                            <p className="text-xs font-medium text-slate-500">
                                Total Friends
                            </p>
                            <p className="text-2xl font-bold text-slate-900">
                                {friends.length}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Table Card */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.04)]">

                    <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-7">
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">
                                Friends Directory
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Your friends, all in one place.
                            </p>
                        </div>

                        <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-600">
                            ID: High to Low
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[600px] text-left">
                            <thead>
                                <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                                    <th className="px-6 py-4 font-semibold">Friend ID</th>
                                    <th className="px-6 py-4 font-semibold">Full Name</th>
                                    <th className="px-6 py-4 font-semibold">Email Address</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-100">
                                {sortedFriends.length > 0 ? (
                                    sortedFriends.map((friend) => (
                                        <tr
                                            key={friend.id}
                                            className="transition-colors duration-200 hover:bg-indigo-50/50"
                                        >
                                            <td className="px-6 py-5">
                                                <span className="inline-flex rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-bold text-indigo-600">
                                                    #{friend.id}
                                                </span>
                                            </td>

                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-sm">
                                                        {friend.name?.charAt(0)?.toUpperCase() || '?'}
                                                    </div>

                                                    <span className="font-semibold text-slate-800">
                                                        {friend.name || 'Unknown'}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-5">
                                                <span className="text-sm text-slate-600">
                                                    {friend.email || 'No email provided'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-16 text-center">
                                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="30"
                                                    height="30"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="9" cy="8" r="3" />
                                                    <path d="M3 20v-1a6 6 0 0 1 12 0v1" />
                                                    <path d="M16 11a3 3 0 1 0 0-6" />
                                                    <path d="M21 20v-1a6 6 0 0 0-4-5.65" />
                                                </svg>
                                            </div>

                                            <h3 className="mt-5 text-lg font-bold text-slate-800">
                                                No friends yet
                                            </h3>

                                            <p className="mt-2 text-sm text-slate-500">
                                                Added friends will appear here.
                                            </p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50/70 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-slate-500">
                            Showing{' '}
                            <span className="font-bold text-slate-800">
                                {friends.length}
                            </span>{' '}
                            {friends.length === 1 ? 'friend' : 'friends'}
                        </p>

                        <p className="text-xs font-medium text-slate-400">
                            Sorted by ID · Descending order
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddedFriends;
