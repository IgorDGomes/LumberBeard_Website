"use client";

import Image from "next/image";
import logo from "../assets/logo.webp";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brown-600 flex items-center h-14 fixed right-0 left-0 z-50 shadow-lg">
      <div className="flex items-center justify-between w-[80%] xl:w-[1200px] mx-auto">
        <Link href={"/"} className="flex items-center">
          <Image src={logo} alt="Logo" className="size-12" />
          <span className="text-cream-100 font-semibold text-xl">
            LumberBeard
          </span>
        </Link>
        <div
          className="md:hidden relative"
          onClick={() => {
            if (menuOpen) {
              setMenuOpen(false);
            } else {
              setMenuOpen(true);
            }
          }}
        >
          <Menu className="text-white size-8" />
          {menuOpen && (
            <div className="absolute bg-white right-0 w-36 rounded-lg flex flex-col items-center justify-center">
              <Link
                href={"/"}
                className="w-full font-semibold hover:bg-brown-600/30 flex items-center justify-center py-2"
              >
                Home
              </Link>
              <Link
                href={"/about-us"}
                className="w-full font-semibold hover:bg-brown-600/30 flex items-center justify-center py-2"
              >
                About Us
              </Link>
              <Link
                href={"/contact"}
                className="w-full font-semibold hover:bg-brown-600/30 flex items-center justify-center py-2"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
        <nav className="md:flex hidden">
          <ul className="flex text-cream-100 justify-between w-64 lg:w-72 text-lg font-medium">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
