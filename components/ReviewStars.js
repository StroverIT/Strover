"use client"
import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewStars = ({ stars, size = 40 }) => {
  return (
    <ReactStars value={stars} size={size} activeColor="#ffd700" edit={false} />
  );
};

export default ReviewStars;
