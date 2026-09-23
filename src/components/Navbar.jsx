"use client";
import React from "react";
import Navlink from "./Navlink";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FaArrowDown, FaMoon, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const navLinks = (
    <>
      <Navlink href="/">Home</Navlink>
      <Navlink href="/rooms">Rooms</Navlink>
      <Navlink href="/add-room" className={user ? "block" : "hidden"}>
        Add Room
      </Navlink>
      <Navlink href="/my-bookings" className={user ? "block" : "hidden"}>
        My Bookings
      </Navlink>
      <Navlink href="/my-listings" className={user ? "block" : "hidden"}>
        My Listings
      </Navlink>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-3">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle p-1 text-foreground"
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
              className="menu menu-sm dropdown-content bg-card text-card-foreground rounded-box z-50 mt-3 w-52 p-3 shadow-xl border border-border gap-2"
            >
              {navLinks}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-xs">
              <FiBookOpen className="text-lg text-gold" />
            </div>
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">
              StudyNook
            </span>
          </Link>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-8">{navLinks}</div>

        {/* Action Buttons */}

        {isPending ? (
          <span>Loading...</span>
        ) : user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="btn btn-circle btn-soft">
              <FaMoon size={20} />
            </div>

            <div className="dropdown dropdown-end">
              <div
                className="flex items-center gap-2 px-2 py-1 rounded-md border-2 border-gray-200 bg-primary text-white shadow cursor-pointer"
                tabIndex={0}
                role="button"
              >
                <div className="btn btn-ghost bg-white btn-circle avatar border border-gray-700">
                  {user?.image ? (
                    <Image
                      src={user?.image}
                      alt={user.name}
                      width={35}
                      height={35}
                      className="object-cover w-full h-full "
                    />
                  ) : (
                    <FaUserCircle size={30} className="text-gray-400" />
                  )}
                </div>
                <p className="font-bold">{user.name}</p>
                <IoIosArrowDown />
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-60 p-2 shadow text-[16px] gap-3"
              >
                <Navlink href={"/profile"} className={"hover:border-l-2 hover:border-primary rounded-md pl-2"} >Profile</Navlink>

                <Navlink href="/my-bookings" className={"hover:border-l-2 hover:border-primary rounded-md pl-2"}>My Bookings</Navlink>

                <Navlink href="/my-listings" className={"hover:border-l-2 hover:border-primary rounded-md pl-2"}>My Listings</Navlink>

                <button
                  className="bg-primary text-white font-medium rounded-md 
                text-[18px] text-center p-2 cursor-pointer hover:text-gold hover:font-bold  transition-all"
                  onClick={async () => {
                    await authClient.signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          window.location.reload();
                          redirect("/login");
                        },
                      },
                    });
                  }}
                >
                  Log Out
                </button>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/login"
              className="text-primary font-semibold px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full hover:bg-secondary transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-primary-foreground bg-primary hover:bg-primary/90 px-4 sm:px-5 py-2 text-xs sm:text-sm rounded-full font-medium shadow-xs transition-colors"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
