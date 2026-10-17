
'use client';

import { FriendContext } from '@/context/FriendContext';
import React, { useContext, useState } from 'react';

const AddedFriends = () => {
    const { friends } = useContext(FriendContext);

    const [sortOrder, setSortOrder] = useState('desc');

    const sortedFriends = [...friends].sort((a, b) => {
        return sortOrder === 'desc'
            ? Number(b.id) - Number(a.id)
            : Number(a.id) - Number(b.id);
    });

    const toggleSort = () => {
        setSortOrder((prev) => prev === 'desc' ? 'asc' : 'desc');
    };

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
                            <span className="text-xl">👥</span>
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
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                    <div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:px-7">
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">
                                Friends Directory
                            </h2>
                            <p className="mt-1 text-sm text-slate-500">
                                Browse and sort your friends.
                            </p>
                        </div>

                        {/* Sorting Button */}
                        <button
                            onClick={toggleSort}
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-700 transition-all duration-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white active:scale-95"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m3 8 4-4 4 4" />
                                <path d="M7 4v16" />
                                <path d="M21 16l-4 4-4-4" />
                                <path d="M17 20V4" />
                            </svg>

                            {sortOrder === 'desc'
                                ? 'ID: High to Low ↓'
                                : 'ID: Low to High ↑'}
                        </button>
                    </div>

                    {/* Table */}
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
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white">
                                                        {friend.name?.charAt(0)?.toUpperCase() || '?'}
                                                    </div>

                                                    <span className="font-semibold text-slate-800">
                                                        {friend.name || 'Unknown'}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-5 text-sm text-slate-600">
                                                {friend.email || 'No email provided'}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-16 text-center">
                                            <div className="text-4xl">👥</div>
                                            <h3 className="mt-4 text-lg font-bold text-slate-800">
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
                                {sortedFriends.length}
                            </span>{' '}
                            {sortedFriends.length === 1 ? 'friend' : 'friends'}
                        </p>

                        <p className="text-xs font-medium text-slate-400">
                            Sorted by ID · {sortOrder === 'desc' ? 'Descending' : 'Ascending'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddedFriends;
