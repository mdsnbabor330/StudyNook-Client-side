import Image from "next/image";
import Herobg from "@/assets/herobg.jpg";
import Herofg from "@/assets/herofg.jpg";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";

const Hero = () => {
  return (
    <section className="relative w-full pt-16 bg-primary overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-none">
        <Image
          src={Herobg}
          alt="hero background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 bg-gold/20 border border-gold/30 text-[#D4A359] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider">
              <FaBook className="text-gold" />
              <span>PREMIUM STUDY SPACES</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight sm:leading-tight">
              Find Your <span className="text-[#D4A359]">Perfect</span> Study
              Room
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Reserve quiet reading rooms, collaborative studios, and seminar
              halls — all vetted, bookable in seconds, and ready when you are.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/rooms"
                className="px-6 py-3 font-semibold bg-[#B07D3C] hover:bg-[#996b32] text-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
              >
                Explore Rooms
              </Link>
              <Link
                href="/login"
                className="px-6 py-3 font-medium bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-300"
              >
                Get Started Free
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <p className="text-xl sm:text-3xl font-bold text-[#D4A359]">
                  200+
                </p>
                <p className="text-xs sm:text-sm text-slate-300">Study Rooms</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl sm:text-3xl font-bold text-[#D4A359]">
                  4,800+
                </p>
                <p className="text-xs sm:text-sm text-slate-300">
                  Students Served
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xl sm:text-3xl font-bold text-[#D4A359]">
                  99%
                </p>
                <p className="text-xs sm:text-sm text-slate-300">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              {/* DaisyUI hover-3d wrapper */}
              <div className="hover-3d">
                {/* Content block: 1st child of hover-3d */}
                <div className="overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl">
                  <Image src={Herofg} alt="hero fg" width={600} height={500} priority className="w-full h-auto object-cover" />
                </div>

                {/* 8 empty divs as direct children of hover-3d for the 3D tilt effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              {/* Floating Instant Booking Badge */}
              <div className="absolute -bottom-5 sm:-bottom-6 left-4 sm:-left-6 bg-card border border-border shadow-xl rounded-2xl flex items-center gap-3 p-3.5 sm:p-4 z-20">
                <div className="bg-[#2D6A4F]/10 p-2.5 rounded-xl flex items-center justify-center">
                  <CiCircleCheck size={28} className="text-[#2D6A4F]" />
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base text-foreground">
                    Instant Booking
                  </p>
                  <p className="text-xs text-muted-foreground">
                    No approval wait time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
