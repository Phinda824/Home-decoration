import React from "react";
import "../styles/cart.css";
import CommonSection from "../conponents/UI/CommonSection";

import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="cart_container">
      <CommonSection title="Shopping" />

      <div className="table_container">
        {cartItems.length == 0 ? (
          <h2 className="report">No item added to the cart</h2>
        ) : (
          <div className="table">
            <ul className="table_header">
              <li className="img_sect">
                <h1>Image</h1>
              </li>
              <li className="t_name">
                <h1>Title</h1>
              </li>
              <li className="t_price">
                <h1>Price</h1>
              </li>
              <li className="t_qty">
                <h1>Qty</h1>
              </li>
              <li className="t_delete">
                <h1>Delete</h1>
              </li>
            </ul>

            {cartItems.map((item, index) => (
              <Tr item={item} key={index} />
            ))}

            <div className="count_section">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <div className="count_total">
                  <h1>Subtotal</h1>
                  <div className="total_amount">${totalAmount}</div>
                </div>
                <p>Taxes and shipping will calculate in checkout</p>
              </motion.div>

              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="buttons"
              >
                <button className="buy_btn">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
                <button className="buy_btn">
                  <Link to="/checkout">Proceed to Checkout</Link>
                </button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <div className="table_b">
      <li className="b_img">
        <img src={item.imgUrl} alt="" />
      </li>
      <li className="b_name">{item.productName}</li>
      <li className="b_price">{item.price}</li>
      <li className="b_qty">{item.quantity}px</li>
      <li className="b_delete">
        <i onClick={deleteProduct} class="fa-solid fa-trash"></i>
      </li>
    </div>
  );
};

export default Cart;
