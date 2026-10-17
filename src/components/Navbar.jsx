
"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Menu, X, Users } from "lucide-react";
import { FriendContext } from "@/context/FriendContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {friends} = useContext(FriendContext);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Friends", href: "/friends" },
    { name: "About", href: "/about" },
    { name: "Added-Friends", href: "/added-friends" },
  ];
  console.log(friends);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
        >
          <Users size={28} />
          <span>FriendZone</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition-colors hover:text-indigo-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
       <Link href={'/friends'}>
       <p>Added Item: {friends.length}</p></Link>
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
