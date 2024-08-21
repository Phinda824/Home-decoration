import React from "react";
import "../../styles/bestShoping.css";
import background from "/images/image.jpg";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const BestShoping = () => {
  return (
    <div className="shop_container">
      <img src={background} alt="" />
      <div className="shop_text">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <i class="fa-solid fa-store"></i>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="descr"
        >
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            labore delectus neque tenetur dolores inventore.
          </p>
          <div className="btn-container">
            <button className="btn_sop">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BestShoping;
