import Image from "next/image";
import Herobg from "@/assets/herobg.jpg";
import Herofg from "@/assets/herofg.jpg";
import { FaArrowRight, FaBook } from "react-icons/fa";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="relative w-full">
      <Image
        src={Herobg}
        alt="hero bg"
        width={""}
        height={500}
        className="w-full h-full object-cover bg-center "
      />
      <div className="z-10 absolute w-full h-full inset-0 bg-primary/90">
        <div className=" max-w-310 mx-auto h-full flex items-center justify-between gap-10 mt-10">
          <div className="space-y-8 w-[45%]">
            <p className="bg-orange-300 w-60 rounded-2xl text-[16px] font-medium px-3 py-1 flex items-center gap-3">
              <FaBook />
              <span>PREMIUM STUDY SPACES</span>
            </p>
            <h1 className="text-[60px] font-bold text-white leading-18">
              Find Your <span className="text-orange-300">Perfect</span> Study
              Room
            </h1>
            <p className="font-medium text-gray-200">
              Reserve quiet reading rooms, collaborative studios, and seminar{" "}
              <br /> halls — all vetted, bookable in seconds, and ready when you
              are.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href={"/rooms"}
                className="px-5 py-2 font-semibold bg-orange-300 gap-1 rounded-2xl"
              >
                Explore Rooms
              </Link>
              <Link
                href={"/login"}
                className="px-5 py-2  bg-white/20 border border-gray-300 rounded-2xl text-white"
              >
                Get Started Free
              </Link>
            </div>
            <hr className="my-10" />
            <div className="flex items-center gap-10">
              <div className="space-y-2">
                <p className="text-[20px] text-orange-400">200+</p>
                <p className="text-gray-200">Study Rooms</p>
              </div>
              <div className="space-y-2">
                <p className="text-[20px] text-orange-400">4,800+</p>
                <p className="text-gray-200">Student Served</p>
              </div>
              <div className="space-y-2">
                <p className="text-[20px] text-orange-400">99%</p>
                <p className="text-gray-200">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          <div className="relative w-[45%]">
            <div className="hover-3d">
              {/* content */}
              <div className="overflow-hidden rounded-2xl outline-6 outline-white shadow-2xl">
                <Image src={Herofg} alt="hero fg" width={600} height={500} />
              </div>
              {/* 8 empty divs needed for the 3D effect */}
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="absolute -bottom-12 -left-20 bg-white border-5 border-orange-300 shadow rounded-2xl flex items-center gap-3 p-4">
              <div className=" bg-base-300 p-3 rounded-md flex items-center justify-center">
                <CiCircleCheck size={24} className="text-accent" />
              </div>
              <div>
                <p className="font-bold text-[18px]">Instant Booking</p>
                <p className="text-gray-500">No approval wait time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
