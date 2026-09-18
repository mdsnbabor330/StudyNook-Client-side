"use client";
import React, { useState, useEffect } from "react";
import { FaMoon, FaRegSun, FaUserCircle } from "react-icons/fa";
import Navlink from "./Navlink";
import Link from "next/link";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  

  const navLinks = (
    <>
      <Navlink href="/">Home</Navlink>
      <Navlink href="/rooms">Rooms</Navlink>
      <Navlink href="/add-room">Add Room</Navlink>
      <Navlink href="/my-listings">My Listings</Navlink>
      <Navlink href="/my-bookings">My Bookings</Navlink>
    </>
  );

  return (
    <nav className="fixed w-full z-50 bg-[#F7F4EF] shadow-2xl p-2">
      <div className="navbar max-w-310 mx-auto">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2 mr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            href="/"
            className="text-primary text-2xl sm:text-3xl font-bold "
          >
            StudyNook
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex gap-5">{navLinks}</div>

        <div className="navbar-end gap-2 ">
          <Link
            href="/login"
            className="text-primary font-bold py-2 px-4 rounded-full text-sm sm:text-base"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-white bg-primary py-2 px-4 rounded-full font-medium text-sm sm:text-base"
          >
            Register
          </Link>

          {/* <button
            aria-label="Toggle Theme"
            className="btn btn-sm p-0 sm:btn-md bg-white border btn-circle transition delay-180"
          >
            {theme === "light" ? (
              <FaMoon size={18} />
            ) : (
              <FaRegSun size={18} className="transition delay-200" />
            )}
          </button> */}

          {/* <div className="dropdown dropdown-end text-black">
            <div
              tabIndex={0}
              role="button"
              className="avatar gap-2 sm:gap-3 items-center cursor-pointer"
            >
              <FaUserCircle size={28} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mt-8 p-2 shadow z-1"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
