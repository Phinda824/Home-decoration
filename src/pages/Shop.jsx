import React, { useState } from "react";
import CommonSection from "../conponents/UI/CommonSection";
import { Container } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductsList from "../conponents/UI/ProductList";

import { motion } from "framer-motion";
import { fadeIn } from "../Variants";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue == "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category == "sofa"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue == "chair") {
      const filteredProducts = products.filter(
        (item) => item.category == "chair"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue == "stand") {
      const filteredProducts = products.filter(
        (item) => item.category == "stand"
      );

      setProductsData(filteredProducts);
    }

    if (filterValue == "bed") {
      const filteredProducts = products.filter(
        (item) => item.category == "bed"
      );

      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchProducts);
  };

  return (
    <div>
      <CommonSection title="Products" />

      <section>
        <Container>
          <div className="container-section">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="first_section"
            >
              <div className="filter_widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="stand">Stand</option>
                  <option value="bed">Bed</option>
                </select>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="second_section"
            >
              <div className="filter_widget">
                <select>
                  <option>Sort By</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="search_box"
            >
              <input
                type="text"
                placeholder="Search Furniture"
                onChange={handleSearch}
              />
              <span>
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </motion.div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          {productsData.length == 0 ? (
            <h1 className="results">No products are found</h1>
          ) : (
            <ProductsList data={productsData} />
          )}
        </Container>
      </section>
    </div>
  );
};

export default Shop;
