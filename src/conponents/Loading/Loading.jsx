import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div>
      <div className="loading_container">
        <div className="spinner"></div>
        <div className="loading_text">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <div className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
