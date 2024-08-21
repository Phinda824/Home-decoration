import React from "react";
import "../../styles/collections.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import preview3 from "/images/dinning1.webp";
import preview from "/images/preview.jpeg";
import bedroom from "/images/bedroom1.webp";
import tvstand from "/images/tvstand.jpg";

const data = [
  {
    img: preview3,
    name: "New Dinning Collection",
  },
  {
    img: preview,
    name: "New Seating Room Collection",
  },
  {
    img: bedroom,
    name: "New Bedroom Collection",
  },
  {
    img: tvstand,
    name: "New Modern Tv Stand Collection",
  },
];

const Collections = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="product-container">
      <div className="content-p">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="card-p">
              <div className="section-p">
                <img src={d.img} alt="" />
                <div className="img-text">{d.name}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collections;
