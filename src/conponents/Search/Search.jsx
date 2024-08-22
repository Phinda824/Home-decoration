import React, { useState } from "react";
import "./Search.css";

import products from "../../assets/data/products";
import ProductsList from "../UI/ProductList";

const Search = () => {
  const [productsData, setProductsData] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchProducts);
  };

  return (
    <div className="search_container">
      <input
        type="text"
        placeholder="Search Furniture"
        onChange={handleSearch}
      />
      {productsData == 0 ? (
        <div></div>
      ) : (
        <div className="search_results">
          <ProductsList data={products} />
        </div>
      )}
    </div>
  );
};

export default Search;
