import React from "react";
import "./SearchProduct.css";

import { Link } from "react-router-dom";

const SearchProduct = ({ data }) => {
  return (
    <div className="searchProduct_container">
      {data.map((item, index) => (
        <div className="search_section" key={index}>
          <Link to={`/shop/${item.id}`}>
            <img src={item.imgUrl} alt="" />
          </Link>
          <div className="item_section">
            <Link to={`/shop/${item.id}`}>
              <h1>{item.productName}</h1>
            </Link>
            <Link to={`/shop/${item.id}`}>
              <p>R {item.price}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchProduct;
