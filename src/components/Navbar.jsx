"use client";
import React, { useState, useEffect } from "react";
import { FaMoon, FaRegSun, FaUserCircle } from "react-icons/fa";
import Navlink from "./Navlink";
import Link from "next/link";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  return (
    <nav className="sticky w-full z-50 bg-base-100 shadow-md p-2">
      <div className="navbar max-w-300 mx-auto">
        <div className="navbar-start">
          <a className="text-[#1C3557] text-3xl font-medium italic">
            StudyNook
          </a>
        </div>
        <div className="navbar-center gap-5">
          <Navlink href="/">Home</Navlink>
          <Navlink href="/rooms">Rooms</Navlink>
          <Navlink href="/add-room">Add Room</Navlink>
          <Navlink href="/my-listings">My Listings</Navlink>
          <Navlink href="/my-bookings">My Bookings</Navlink>
        </div>

        <div className="navbar-end gap-5">
          <Link href="/login" className="text-[#1C3557] font-medium">
            Login
          </Link>
          <Link href="/signup" className="text-[#1C3557] font-medium">
            Register
          </Link>

          <button
            aria-label="Toggle Theme"
            className="btn bg-white border btn-circle transition delay-180"
          >
            {theme === "light" ? (
              <FaMoon size={20} />
            ) : (
              <FaRegSun size={20} className="transition delay-200" />
            )}
          </button>

          <div className="dropdown dropdown-end text-black">
            <div
              tabIndex={0}
              role="button"
              className="avatar gap-3 items-center"
            >
              <FaUserCircle size={30} />
              <span>John Doe</span>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box w-52 mt-8 p-2 shadow"
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
