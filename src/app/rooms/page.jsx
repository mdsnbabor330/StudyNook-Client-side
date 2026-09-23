import RoomCard from "@/UI/RoomCard";
import RoomSearchFilter from "@/components/RoomSearchFilter";
import React from "react";

const Rooms = async () => {
  let rooms = [];
  try {
    const res = await fetch("http://localhost:3003/rooms", {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      rooms = await res.json();
    }
  } catch (err) {
    console.error("Error fetching rooms:", err);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 pt-24 sm:pt-28 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#2D6A4F] uppercase">
          OUR COLLECTION
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
          Explore Popular Rooms
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Discover our most popular study rooms designed to enhance your learning
          experience.
        </p>
      </div>

      {/* Search & Filters UI */}
      <RoomSearchFilter />

      {rooms && rooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {rooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="text-center max-w-md mx-auto bg-card border border-border shadow-xs p-8 sm:p-10 rounded-2xl text-muted-foreground">
          <p>No rooms available at the moment.</p>
        </div>
      )}
    </div>
  );
};

export default Rooms;
