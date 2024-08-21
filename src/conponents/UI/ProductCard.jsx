import React, { useEffect, useState } from "react";

import "../../styles/product-card.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("Product added successfuly");
  };

  return (
    <div className="product_item">
      <div className="product_img">
        <Link to={`/shop/${item.id}`}>
          <img src={item.imgUrl} alt="" />
        </Link>
      </div>
      <div className="product_info">
        <h3 className="product_name">
          <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </h3>
        <span>{item.category}</span>
      </div>
      <div className="product_card-bottom">
        <div className="price">R {item.price}</div>
        <span onClick={addToCart}>
          <i class="fa-solid fa-cart-shopping"></i>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
