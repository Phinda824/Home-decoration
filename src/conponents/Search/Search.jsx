import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search_container">
      <input type="text" placeholder="Search Furniture" />
      <div className="results"></div>
    </div>
  );
};

export default Search;
