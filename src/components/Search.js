import React from "react";

export const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className="Search">
      <input
        type="text"
        ref={searchInput}
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
};
