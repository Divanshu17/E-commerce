import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={onChange}
      className="border rounded px-3 py-2 w-full md:w-64"
    />
  );
}

export default SearchBar;
