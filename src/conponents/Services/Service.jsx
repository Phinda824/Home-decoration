import React from "react";
import "./Service.css";

import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const Service = () => {
  return (
    <div className="card-block">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="card-preview"
      >
        <div className="block">
          <div className="icon">
            <i class="fa-solid fa-pen-ruler"></i>
          </div>
          <p>Great design at nice prices</p>
        </div>
        <div className="block">
          <div className="icon">
            <i class="fa-solid fa-rotate"></i>
          </div>
          <p>14 days to change your mind</p>
        </div>
        <div className="block">
          <div className="icon">
            <i class="fa-solid fa-truck-fast"></i>
          </div>
          <p>In-room Delivery of your Furniture</p>
        </div>
        <div className="block">
          <div className="icon">
            <i class="fa-solid fa-tag"></i>
          </div>
          <p>12 Months Guarantee</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
