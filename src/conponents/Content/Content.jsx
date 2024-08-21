import React, { useState } from "react";
import "./Content.css";
import { motion } from "framer-motion";

import chair8 from "/images/chair8.webp";
import couch2 from "/images/couch2.webp";
import table1 from "/images/Table1.jpg";
import tvStand1 from "/images/Tv-stand1.webp";
import chair11 from "/images/chair11.jpg";
import bedroomtable from "/images/bedroomtable.jpg";
import table2 from "/images/table2.jpg";
import couch3 from "/images/couch3.jpg";

const Content = () => {
  const [action, setAction] = useState(true);

  return (
    <div className="content-section">
      <h1>See Our Quality Product</h1>
      <div className="content-sect">
        <div className="card-sect">
          <div className="image">
            <img src={chair8} alt="" />
          </div>
          <p>Comfortable Chair</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </div>
        <div className="card-sect">
          <div className="image">
            <img src={tvStand1} alt="" />
          </div>
          <p>Tv Stand</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </div>
        <div className="card-sect">
          <div className="image">
            <img src={couch2} alt="" />
          </div>
          <p>Comfortable Couch</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </div>
        <div className="card-sect">
          <div className="image">
            <img src={table1} alt="" />
          </div>
          <p>Coffee Table</p>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price">
            <div className="was">R850.00</div>
            <div className="current">R699.00</div>
          </div>
        </div>
      </div>
      {action ? (
        <div></div>
      ) : (
        <div className="content-sect">
          <div className="card-sect">
            <div className="image">
              <img src={chair11} alt="" />
            </div>
            <p>Flat wooden Dining Chair</p>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <div className="rate">4.5</div>
            </div>
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
          </div>
          <div className="card-sect">
            <div className="image">
              <img src={bedroomtable} alt="" />
            </div>
            <p>Tv Stand</p>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <div className="rate">4.5</div>
            </div>
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
          </div>
          <div className="card-sect">
            <div className="image">
              <img src={table2} alt="" />
            </div>
            <p>Comfortable Couch</p>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <div className="rate">4.5</div>
            </div>
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
          </div>
          <div className="card-sect">
            <div className="image">
              <img src={couch3} alt="" />
            </div>
            <p>Valvet sleeper couch</p>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <div className="rate">4.5</div>
            </div>
            <div className="price">
              <div className="was">R2999.99</div>
              <div className="current">R1999.99</div>
            </div>
          </div>
        </div>
      )}

      <div className="product-btn" onClick={() => setAction(!action)}>
        {action ? (
          <button className="btn">View All Products</button>
        ) : (
          <button className="btn">Show Less</button>
        )}
      </div>
    </div>
  );
};

export default Content;
