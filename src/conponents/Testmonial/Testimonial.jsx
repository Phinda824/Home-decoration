import React from "react";
import "./Testimonial.css";
import face1 from "/images/face1.png";
import face2 from "/images/face2.jpg";

import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";

const Testimonial = () => {
  return (
    <div className="testimony">
      <div className="testimony-container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="person"
        >
          <div className="person-face">
            <img src={face1} alt="" />
          </div>
          <div className="name">Vusumzi Nola</div>
          <div className="quotes">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <p>
            Very pleased with the quality. Also fantastic service: great
            communication regarding delivery and quickly assembled
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="person"
        >
          <div className="person-face">
            <img src={face2} alt="" />
          </div>
          <div className="name">Fiona Helen</div>
          <div className="quotes">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <p>
            My dining room looks stylish L love my chairs. the process was so
            quick too the order was place on Thursday my chairs were here on
            Monday!!
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="person"
        >
          <div className="person-face">
            <img src={face2} alt="" />
          </div>
          <div className="name">Fiona Helen</div>
          <div className="quotes">
            <i class="fa-solid fa-quote-left"></i>
          </div>
          <p>
            Thank you to your technical staff that came to assemble the
            cupboard. Very friendly, on time and very professional in the
            workmanship.Also a 5 star for them.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
