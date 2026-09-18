import RoomCard from "@/UI/RoomCard";
import Link from "next/link";
import React from "react";

const ExploreRooms = async () => {
  const res = await fetch("http://localhost:3003/explore-rooms");
  const rooms = await res.json();
  console.log(rooms);

  return (
    <div className="max-w-310 mx-auto py-20">
      <div className="text-center space-y-3">
        <p className="text-lg font-semibold text-orange-300">Rooms</p>
        <h2 className="text-4xl font-bold">Explore Our Popular Rooms</h2>
        <p className="text-gray-600">
          Discover our most popular study rooms designed to enhance your
          learning experience.
        </p>
      </div>

      {rooms.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <p className=" mt-10 text-center w-310 max-w-310 text-gray-600 border border-gray-200 shadow-xl p-10 rounded-2xl">
          No rooms available at the moment.
        </p>
      )}
      <div className="flex justify-between gap-3 mt-10 items-center">
        <hr className="flex-1 " />
        <Link
          href={"/rooms"}
          className="font-semibold text-primary hover:text-primary/80 transition"
        >
          View All Rooms
        </Link>
      </div>
    </div>
  );
};

export default ExploreRooms;
