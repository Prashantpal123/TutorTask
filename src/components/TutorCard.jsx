const TutorCard = ({ tutor, isSelected, onSelect, isMaxReached, isShaking  }) => {
  const isDisabled = isMaxReached && !isSelected;

  return (
    <div onClick={() => !isDisabled && onSelect(tutor)} className={` relative w-70 rounded-2xl ${isShaking ? "animate-shake" : ""} overflow-hidden bg-linear-to-b from-[#071923] to-[#02080d]
      border border-[#0f2a3a] transition-all duration-300 cursor-pointer hover:shadow-[0_0_25px_rgba(0,180,255,0.15)]
      ${isSelected ? "ring-2 ring-blue-500 shadow-lg" : ""}
      ${isDisabled ? "opacity-40 pointer-events-none" : ""}
      `}
    > <div className="h-20 bg-[#0a2433]" />
       {/* Avatar */}
        <div className="flex justify-center -mt-16 relative">
          <img src={tutor.image || "https://i.pravatar.cc/150?img=5"}  alt={tutor.name} className="w-20 h-20 rounded-full border border-[#4e585d] object-cover" />
                    {/* Verified Badge */}
                    <div className="absolute right-20 bottom-0 bg-green-900 text-[10px] px-2 py-0.5 rounded-full text-white font-semibold">Verified</div>
       </div>

      {/* Content */}
         <div className=" px-6 py-4">
        <h3 className="text-white text-center font-semibold text-md">
          {tutor.name || "Dr. Emily Chen"}
        </h3>

        <p className="text-gray-300 font-semibold text-xs mt-1">
          {tutor.subjects?.join(", ") ||
            "Mathematics, Physics, Chemistry"}
        </p>

        <p className="text-gray-300 font-semibold  text-xs mt-2">
          {tutor.experience || "0"} Years Experience
        </p>

        {/* Rating */}
        <div className="flex justify-between items-center gap-2 mt-2 text-xs">
          <span className="text-gray-300 font-semibold text-xs">
           <span className="text-blue-500">★</span> {tutor.rating || "4.9"} stars
          </span>

          <span className="text-gray-300 font-semibold text-xs">
            {tutor.reviews || "112"} reviews
          </span>
        </div>

        {/* Button */}
        <button
          className={`
          mt-4 w-full py-2 rounded-lg text-sm font-medium
          transition-all duration-200
          
          ${
            isSelected
              ? "bg-transparent border border-blue-500 text-white cursor-pointer"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }
          `}
        >
          {isSelected ? "✓ Selected" : "Select for Demo"}
        </button>
      </div>

      {/* Tooltip */}
      {isDisabled && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-xs px-3 py-1 rounded">
          Max 3 tutors only
        </div>
      )}
    </div>
  );
};

export default TutorCard;