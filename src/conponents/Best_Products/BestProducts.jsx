import React, { useState } from "react";
import "../../styles/bestProducts.css";

import chair1 from "/images/chair1.webp";
import tvstand5 from "/images/tvstand5.jpg";
import table7 from "/images/table7.jpg";
import chair4 from "/images/chair4.png";
import chair14 from "/images/chair14.webp";
import chair2 from "/images/chair2.jpg";
import table2 from "/images/table2.jpg";
import couch from "/images/couch.png";
import couch9 from "/images/couch9.jpg";
import tvstand3 from "/images/tvstand3.jpg";
import tvstand4 from "/images/tvstand4.jpg";
import table6 from "/images/table6.jpg";

import { Link } from "react-router-dom";

const BestProducts = () => {
  const [action, setAction] = useState(true);

  return (
    <div className="content_section">
      <div className="content_sect">
        <div className="card_sect">
          <div className="image">
            <img src={chair1} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Comfortable Chair</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div className="card_sect">
          <div className="image">
            <img src={tvstand4} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Wooden TV Stand</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div className="card_sect">
          <div className="image">
            <img src={couch} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Yellow Sofa</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div className="card_sect">
          <div className="image">
            <img src={table6} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Coffee Table</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="content_sect">
        <div className="card_sect">
          <div className="image">
            <img src={tvstand5} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">TV Stand Blue White</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div className="card_sect">
          <div className="image">
            <img src={table7} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Watson Coffee Table</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div className="card_sect">
          <div className="image">
            <img src={chair4} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Tv Stand</Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>

        <div className="card_sect">
          <div className="image">
            <img src={chair14} alt="" />
          </div>
          <div className="name_text">
            <Link to="/shop/id">Joss Chair </Link>
          </div>
          <div className="rating">
            <i class="fa-solid fa-star"></i>
            <div className="rate">4.5</div>
          </div>
          <div className="price_cart">
            <div className="price">
              <div className="was">R850.00</div>
              <div className="current">R699.00</div>
            </div>
            <div className="add_icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
      </div>
      {action ? (
        <div></div>
      ) : (
        <div className="content_sect">
          <div className="card_sect">
            <div className="image">
              <img src={chair2} alt="" />
            </div>
            <div className="name_text">
              <Link to="/shop/id">Black Armchair </Link>
            </div>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <div className="rate">4.5</div>
            </div>
            <div className="price_cart">
              <div className="price">
                <div className="was">R850.00</div>
                <div className="current">R699.00</div>
              </div>
              <div className="add_icon">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>

          <div className="card_sect">
            <div className="image">
              <img src={couch9} alt="" />
            </div>
            <div className="name_text">
              <Link to="/shop/id">Flat wooden Dining Chair</Link>
            </div>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <div className="rate">4.5</div>
            </div>
            <div className="price_cart">
              <div className="price">
                <div className="was">R850.00</div>
                <div className="current">R699.00</div>
              </div>
              <div className="add_icon">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>

          <div className="card_sect">
            <div className="image">
              <img src={table2} alt="" />
            </div>
            <div className="name_text">
              <Link to="/shop/id">Study Table</Link>
            </div>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <div className="rate">4.5</div>
            </div>
            <div className="price_cart">
              <div className="price">
                <div className="was">R4850.00</div>
                <div className="current">R3599.00</div>
              </div>
              <div className="add_icon">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>

          <div className="card_sect">
            <div className="image">
              <img src={tvstand3} alt="" />
            </div>
            <div className="name_text">
              <Link to="/shop/id">Flat wooden Dining Chair</Link>
            </div>
            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <div className="rate">4.5</div>
            </div>
            <div className="price_cart">
              <div className="price">
                <div className="was">R850.00</div>
                <div className="current">R699.00</div>
              </div>
              <div className="add_icon">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
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

export default BestProducts;
