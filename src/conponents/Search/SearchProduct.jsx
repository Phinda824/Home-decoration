import React from "react";
import "./SearchProduct.css";

import products from "../../assets/data/products";

const SearchProduct = () => {
  return (
    <div className="searchProduct_container">
      {products.map((item, index) => (
        <div className="search_section" key={index}>
          <img src={item.imgUrl} alt="" />
          <div className="item_section">
            <h1>{item.productName}</h1>
            <p>R {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchProduct;
