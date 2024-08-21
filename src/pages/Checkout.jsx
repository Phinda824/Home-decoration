import React from "react";
import CommonSection from "../conponents/UI/CommonSection";
import "../styles/checkout.css";

import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="checkout_container">
      <CommonSection title="Checkout" />
      <div className="checkout">
        <form className="bill_form">
          <div className="form_group">
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form_group">
            <input type="text" placeholder="Enter your email" />
          </div>

          <div className="form_group">
            <input type="text" placeholder="Enter your number" />
          </div>

          <div className="form_group">
            <input type="text" placeholder="Street address" />
          </div>

          <div className="form_group">
            <input type="text" placeholder="City" />
          </div>

          <div className="form_group">
            <input type="text" placeholder="Postal code" />
          </div>

          <div className="form_group">
            <input type="text" placeholder="Country" />
          </div>
        </form>

        <div className="checkout_cart">
          <div className="count_infor">
            <h1>
              Total Qty: <span>{totalQty} items</span>
            </h1>
            <h1>
              Subtotal: <span>R {totalAmount}</span>
            </h1>
            <h2>
              Shpping <p>Free Shiping:</p> <span>R 0</span>
            </h2>
            <div className="total_cost">
              Total Cost: <span>R {totalAmount}</span>
            </div>
          </div>
          <button className="place_order">Place an order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
