import SearchBar from "./SearchBar.jsx";
import { useState } from "react";

const SearchComponent = () => {
  const [search, setSearch] = useState("");

  return (
    <div className=" flex flex-col-reverse sm:flex-row sm:justify-between  mt-2  mb-2">
      
      <h2 className="mt-2 sm:mt-0 text-white text-2xl font-semibold">
        Available Tutors
      </h2>

      <SearchBar 
        search={search}
        setSearch={setSearch}
      />

    </div>
  );
};

export default SearchComponent