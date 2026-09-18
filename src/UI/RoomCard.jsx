import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomCard = ({ room }) => {
  const {
    _id,
    roomName,
    description,
    floor,
    capacity,
    hourlyRate,
    amenities = [],
  } = room;

  const visibleAmenities = amenities.slice(0, 3);
  const remainingAmenities = amenities.length - 3;

  const shortDescription =
    description.length > 100 ? description.slice(0, 100) + "..." : description;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-52 w-full overflow-hidden">
        <Image
          src={room.image}
          alt={roomName}
          width={400}
          height={400}
          priority
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 line-clamp-1 text-xl font-bold text-gray-900">
          {roomName}
        </h3>

        <p className="mb-4 text-sm leading-6 text-gray-600">
          {shortDescription}
        </p>

        <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-xs text-gray-500">Floor</p>
            <p className="font-semibold text-gray-800">{floor}</p>
          </div>

          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-xs text-gray-500">Capacity</p>
            <p className="font-semibold text-gray-800">{capacity} people</p>
          </div>
        </div>

        <div className="mb-4">
          <span className="text-2xl font-bold text-primary">${hourlyRate}</span>
          <span className="text-sm text-gray-500"> /hr</span>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {visibleAmenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {amenity}
            </span>
          ))}

          {remainingAmenities > 0 && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              +{remainingAmenities} more
            </span>
          )}
        </div>

        {/* Button */}
        <Link
          href={`/rooms/${_id}`}
          className="mt-auto w-full rounded-xl bg-primary px-4 py-3 text-center font-semibold text-white transition hover:bg-primary/90"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
