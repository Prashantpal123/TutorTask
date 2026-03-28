import SearchBar from "./SearchBar";
import { useState } from "react";

const SearchComponent = () => {
  const [search, setSearch] = useState("");

  return (
    <div className=" hidden sm:flex flex-col-reverse sm:flex-row sm:justify-between  mt-2  mb-2">
      
      <h2 className="text-white text-2xl font-semibold">
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