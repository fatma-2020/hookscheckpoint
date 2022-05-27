import React from "react";
import "./Search.css";
const Search = ({ searching }) => {
  return (
    <div>
      <input
        className="searchInput"
        type="text"
        placeholder=".. بحث"
        onChange={(e) =>{searching(e.target.value); }}
      />
    </div>
  );
};

export default Search;
