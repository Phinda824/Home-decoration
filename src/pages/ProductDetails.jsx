import React, { useRef, useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import CommonSection from "../conponents/UI/CommonSection";
import "../styles/product-details.css";
import ProductList from "../conponents/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef();
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);

  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category == category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("Review submited");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <div>
      <CommonSection title={productName} />

      <div className="detail_container">
        <div className="img_container">
          <img src={imgUrl} alt="" />
        </div>

        <div className="product_details">
          <h2>{productName}</h2>
          <div className="product_rating">
            <div className="stars">
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star"></i>
              </span>
              <span>
                <i class="fa-solid fa-star-half-stroke"></i>
              </span>
            </div>

            <p>
              (<span>{avgRating}</span> ratings)
            </p>
          </div>

          <div className="product_price">${price}</div>
          <div className="product_desc">{shortDesc}</div>

          <button className="buy_btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="tab_container">
        <div className="tab_wrapper">
          <h7
            className={`${tab == "desc" ? "active_tab" : ""}`}
            onClick={() => setTab("desc")}
          >
            Description
          </h7>
          <h7
            className={`${tab == "rev" ? "active_tab" : ""}`}
            onClick={() => setTab("rev")}
          >
            Reviews ({reviews.length})
          </h7>
        </div>

        {tab == "desc" ? (
          <div className="tab_content">{description}</div>
        ) : (
          <div className="tab_content">
            <div className="product_review">
              <ul>
                {reviews?.map((item, index) => (
                  <li key={index}>
                    <h7>Phinda Simanga</h7>
                    <span>{item.rating} (rating)</span>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>

              <div className="form_review">
                <h1>Leave your experience</h1>
                <form action="" onSubmit={submitHandler}>
                  <div className="form_group">
                    <input
                      type="text"
                      placeholder="Enter name"
                      ref={reviewUser}
                      required
                    />
                  </div>

                  <div className="form_rate">
                    <span onClick={() => setRating(1)}>
                      1<i class="fa-solid fa-star"></i>
                    </span>
                    <span onClick={() => setRating(12)}>
                      2<i class="fa-solid fa-star"></i>
                    </span>
                    <span onClick={() => setRating(3)}>
                      3<i class="fa-solid fa-star"></i>
                    </span>
                    <span onClick={() => setRating(4)}>
                      4<i class="fa-solid fa-star"></i>
                    </span>
                    <span onClick={() => setRating(5)}>
                      5<i class="fa-solid fa-star"></i>
                    </span>
                  </div>

                  <div className="form_group">
                    <textarea
                      ref={reviewMsg}
                      type="text"
                      placeholder="Review Message"
                      required
                    />
                  </div>

                  <button type="submit" className="buy_btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <h2 className="related_header">Other Product you may like</h2>
      <ProductList data={relatedProducts} />
    </div>
  );
};

export default ProductDetails;
