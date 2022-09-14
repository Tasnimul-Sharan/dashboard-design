import React from "react";
import banner from "../../../images/6179a579f91da881be2c758b_morning-brew-ShVipPImS6k-unsplash_5c8728bacb20daf02414ecbdf89e0418_2000.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-content">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="max-w-lg rounded-lg shadow-2xl"
          alt="produ"
        />
        <div className="text-justify">
          <h1 className="text-5xl text-white font-bold">
            Are You Finding Best Products!
          </h1>
          <p className="py-6 text-white">We have the World class products</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
