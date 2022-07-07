import React from "react";
import "./Slider.css";
import leftArrow from "./icons/left-arrow.png";
import rightArrow from "./icons/right-arrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next slid" : "btn-slide prev slid"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
