import React, { useEffect, useState } from "react";

import "../../styles/product-card.css";
import { Link } from "react-router-dom";

const SearchProduct = ({ item }) => {
  return (
    <div className="search_item">
      <div className="item_img">
        <Link to={`/shop/${item.id}`}>
          <img src={item.imgUrl} alt="" />
        </Link>
      </div>
      <div className="product_infor">
        <h3 className="product_name">
          <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </h3>
        <span>{item.category}</span>
      </div>
      <div className="product_price">
        <div className="price">R {item.price}</div>
      </div>
    </div>
  );
};

export default SearchProduct;
