import React from "react";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <div className="relative">
      <div className="px-1">
        <input
          type="text"
          placeholder="Search"
          className={`w-60 rounded-lg border-2 text-black lg:w-60 p-2`}
        />
      </div>
      <div>
        <CiSearch className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md bg-blue-400 p-0.5 h-8 w-8" />
      </div>
    </div>
  );
};

export default Search;
