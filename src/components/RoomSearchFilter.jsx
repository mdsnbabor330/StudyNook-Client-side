"use client";

import React, { useState } from "react";
import { FiSearch, FiSliders, FiX } from "react-icons/fi";

const ALL_AMENITIES = [
  "Wi-Fi",
  "Whiteboard",
  "Projector",
  "Air Conditioning",
  "Natural Light",
  "Power Outlets",
  "Coffee Machine",
  "Soundproof",
  "Standing Desk",
  "Locker",
];

const FLOORS = ["1", "2", "3", "4", "5"];

const RoomSearchFilter = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [maxPrice, setMaxPrice] = useState(100);
  const [priceChanged, setPriceChanged] = useState(false);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  const toggleFloor = (floor) => {
    setSelectedFloor((prev) => (prev === floor ? null : floor));
  };

  const handlePriceChange = (e) => {
    setMaxPrice(Number(e.target.value));
    setPriceChanged(true);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedAmenities([]);
    setSelectedFloor(null);
    setMaxPrice(100);
    setPriceChanged(false);
  };

  const hasActiveFilters =
    searchTerm ||
    selectedAmenities.length > 0 ||
    selectedFloor !== null ||
    priceChanged;

  return (
    <div className="w-full max-w-7xl mx-auto space-y-4">
      {/* Search Bar & Filter Toggle Button */}
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground">
            <FiSearch className="w-5 h-5 text-muted-foreground/70" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or description..."
            className="w-full pl-11 pr-4 py-3 sm:py-3.5 bg-card border border-border/80 rounded-2xl text-sm sm:text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-xs"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
            >
              <FiX className="w-4 h-4" />
            </button>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-5 py-3 sm:py-3.5 rounded-2xl font-medium text-sm sm:text-base transition-all shadow-xs ${
            isOpen
              ? "bg-[#1C3557] text-white hover:bg-[#152945]"
              : "bg-[#1C3557] text-white hover:bg-[#152945]"
          }`}
        >
          <FiSliders className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Expanded Filter Panel */}
      {isOpen && (
        <div className="bg-[#F7F2EA] dark:bg-card border border-[#E5DEC9] dark:border-border rounded-3xl p-6 sm:p-8 shadow-xs transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* AMENITIES */}
            <div className="lg:col-span-6 space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-[#7A6B52] dark:text-muted-foreground uppercase">
                AMENITIES
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {ALL_AMENITIES.map((amenity) => {
                  const isSelected = selectedAmenities.includes(amenity);
                  return (
                    <button
                      key={amenity}
                      type="button"
                      onClick={() => toggleAmenity(amenity)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-[#1C3557] text-white shadow-xs"
                          : "bg-[#EAE4D9] dark:bg-muted/60 text-[#2D261E] dark:text-foreground hover:bg-[#E0D8CA] dark:hover:bg-muted"
                      }`}
                    >
                      {amenity}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* FLOOR */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-[#7A6B52] dark:text-muted-foreground uppercase">
                FLOOR
              </h4>
              <div className="flex flex-wrap gap-2">
                {FLOORS.map((floor) => {
                  const isSelected = selectedFloor === floor;
                  return (
                    <button
                      key={floor}
                      type="button"
                      onClick={() => toggleFloor(floor)}
                      className={`w-10 h-10 rounded-xl text-sm font-semibold flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[#1C3557] text-white shadow-xs"
                          : "bg-[#EAE4D9] dark:bg-muted/60 text-[#2D261E] dark:text-foreground hover:bg-[#E0D8CA] dark:hover:bg-muted"
                      }`}
                    >
                      {floor}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MAX HOURLY RATE */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold tracking-wider text-[#7A6B52] dark:text-muted-foreground uppercase">
                MAX HOURLY RATE
              </h4>
              <div className="flex items-center gap-4 pt-2">
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={maxPrice}
                  onChange={handlePriceChange}
                  className="w-full h-2 bg-[#DED6C7] dark:bg-muted rounded-lg appearance-none cursor-pointer accent-[#1C3557]"
                />
                <span className="font-semibold text-sm sm:text-base text-[#B07D3C] min-w-[36px] text-right">
                  {!priceChanged || maxPrice === 100 ? "Any" : `$${maxPrice}`}
                </span>
              </div>
            </div>
          </div>

          {/* Reset Filters button if any active */}
          {hasActiveFilters && (
            <div className="mt-6 pt-4 border-t border-[#E5DEC9]/60 dark:border-border/60 flex justify-end">
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-semibold text-[#B07D3C] hover:underline flex items-center gap-1"
              >
                <FiX className="w-3.5 h-3.5" />
                Clear Filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RoomSearchFilter;
