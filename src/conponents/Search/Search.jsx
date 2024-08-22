import React, { useState } from "react";
import "./Search.css";

import products from "../../assets/data/products";
import ProductsList from "../UI/ProductList";

const Search = () => {
  const [productData, setProductData] = useState([]);
  return (
    <div className="search_container">
      <input type="text" placeholder="Search Furniture" />
      <div className="search_results">
        <ProductsList data={products} />
      </div>
    </div>
  );
};

export default Search;
