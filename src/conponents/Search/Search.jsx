import React, { useState } from "react";
import "./Search.css";

import products from "../../assets/data/products";
import ProductsList from "../UI/ProductList";
import SearchProduct from "./SearchProduct";

const Search = () => {
  const [productsData, setProductsData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setWordEntered(searchTerm);

    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (searchTerm === "") {
      setProductsData([]);
    } else {
      setProductsData(searchProducts);
    }
  };

  const clearInput = () => {
    setProductsData([]);
    setWordEntered("");
  };

  return (
    <div className="search_container">
      <div className="form_input">
        <input
          type="text"
          placeholder="Search Furniture"
          value={wordEntered}
          onChange={handleSearch}
        />
        <div className="searchIcon">
          {productsData.length === 0 ? (
            <i class="fa-solid fa-magnifying-glass"></i>
          ) : (
            <i class="fa-solid fa-xmark" onClick={clearInput}></i>
          )}
        </div>
      </div>
      {productsData.length != 0 && (
        <div className="search_results">
          <SearchProduct data={productsData} />
        </div>
      )}
    </div>
  );
};

export default Search;
