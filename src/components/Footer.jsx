import React from "react";
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 transition-colors group-hover:bg-white/20">
            <FiBookOpen className="text-xl text-[#B07D3C]" />
          </div>
          <span className="font-serif text-2xl font-bold text-white tracking-tight">
            StudyNook
          </span>
        </Link>

        {/* Copyright Text */}
        <p className="text-xs sm:text-sm text-slate-300">
          © 2025 StudyNook. All reserved spaces reserved.
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-300">
          <Link href="/rooms" className="hover:text-white transition-colors">
            Rooms
          </Link>
          <Link href="/login" className="hover:text-white transition-colors">
            Login
          </Link>
          <Link href="/signup" className="hover:text-white transition-colors">
            Register
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;