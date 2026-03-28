const SelectedTutors = ({ selected, removeTutor, confirmDemo }) => {
  return (
    <div className="bg-linear-to-b from-[#061c29] to-[#02121b]  border-l border-[#0f2a3a] h-150 w-[320px]  p-6 flex flex-col justify-between rounded-md">

      {/* Top Section */}
      <div>
        <h2 className="text-white text-lg font-semibold">Selected Tutors</h2>
         <p className="text-gray-400 text-sm mt-1"> {selected.length} / 3 selected  </p>

        {/* Selected List */}
        <div className="mt-6 space-y-3">
          {selected.map((tutor) => (
            <div key={tutor.id} className="flex items-center justify-between  border-b border-[#0f2a3a] pb-3" >
              {/* Left */}
              <div className="flex items-center gap-3">
                <img  src={tutor.image || "https://i.pravatar.cc/100"} alt={tutor.name} className="w-10 h-10 rounded-full object-cover"/>
                  <span className="text-white text-sm font-medium">
                  {tutor.name}
                </span>
              </div>

              {/* Remove */}
              <button onClick={() => removeTutor(tutor.id)} className="text-blue-400 text-sm hover:text-blue-300" >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Empty */}
        {selected.length === 0 && (
          <p className="text-gray-500 text-sm mt-6">
            No tutors selected
          </p>
        )}
      </div>

      {/* Bottom Button */}
      <div className="">
        <button onClick={confirmDemo} disabled={selected.length === 0} className=" w-full py-3 rounded-lg cursor-pointer  text-white font-medium bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all disabled:opacity-40  " >
          Confirm Demo Request
        </button>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          🎓 EduSelect
          <div className="text-xs mt-1"> © Footer </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedTutors;