import React from "react";
import "../../styles/common-section.css";

import background1 from "/images/background5.webp";

const CommonSection = ({ title }) => {
  return (
    <section className="common_section">
      <img src={background1} alt="" />
      <div className="text_title">
        <h1>{title}</h1>
      </div>
    </section>
  );
};

export default CommonSection;
