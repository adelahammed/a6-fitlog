"use client";
import Link from "next/link";
import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TodoContext } from "@/app/Context/TodaysContext";
import { SavedItemContext } from "@/app/Context/SavedContext";

const Navbar = () => {
  const { todaysitem } = useContext(TodoContext);
  const { saveditem } = useContext(SavedItemContext);
  const pathname = usePathname();
  const Navitems = () => {
    return (
      <ul className="menu menu-horizontal px-1">
        <li>
          <Link
            href="/"
            className={
              pathname === "/" ? "rounded-full text-[#ccff00] bg-[#1A2312]" : ""
            }
          >
            Workout
          </Link>
        </li>
        <li>
          <Link
            href="/myplan"
            className={
              pathname === "/myplan"
                ? "rounded-full text-[#ccff00] bg-[#1A2312]"
                : ""
            }
          >
            My Plan
          </Link>
        </li>
      </ul>
    );
  };
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Navitems />
          </div>
        </div>
        <Link href="/">
          <Image alt="logo" src={logo} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Navitems />
      </div>
      <div className="navbar-end gap-6 ">
        <Link href="/myplan" className="flex gap-2 items-center">
          Plan
          <span className="h-[20px] w-[20px] flex justify-center items-center rounded-full text-black bg-[#ccff00]">
            {todaysitem.length}
          </span>
        </Link>
        <Link href="/myplan" className="flex gap-2 items-center">
          Saved
          <span className="h-[20px] w-[20px] flex justify-center items-center rounded-full text-white border border-gray-400">
            {saveditem.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
