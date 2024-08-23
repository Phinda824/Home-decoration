import React from "react";

import products from "../../assets/data/products";

const SearchProduct = () => {
  return (
    <div className="searchProduct_container">
      {products.map((item, index) => (
        <div className="search_img" key={index}>
          <img src={item.imgUrl} alt="" />
        </div>
      ))}
    </div>
  );
};

export default SearchProduct;
