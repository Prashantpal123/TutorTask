import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center gap-2  flex-wrap sm:flex-nowrap">
      
      {/* Search Input */}
      <div className="relative  sm:flex-1">
        <Search 
          className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
          size={14}
        />

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full
          bg-[#071a24]
          border border-[#0f2a3a]
          text-white
          pl-7
          pr-2
          py-2
          text-sm
          rounded-lg
          outline-none
          placeholder-gray-400
          focus:border-blue-500
          transition-all
          "
        />
      </div>

      {/* Filter Button */}
      <button
        className="
        flex items-center justify-center
        bg-[#071a24]
        border border-[#0f2a3a]
        text-gray-300
        px-3
        py-1.5
        rounded-lg
        hover:border-blue-500
        transition-all
        "
      >
        <SlidersHorizontal size={14} />
        <span className="hidden sm:block ml-1">Filter</span>
      </button>

    </div>
  );
};

export default SearchBar;