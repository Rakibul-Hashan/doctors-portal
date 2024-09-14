import React from "react";
import chair from "../../../assets/images/chair.png";
import "./Banner.css";

function Banner() {
  return (
    <div className={`hero home-hero lg:min-h-[700px]`}>
      <div className="hero-content flex-col lg:flex-row-reverse max-w-full">
        <img src={chair} className="rounded-lg lg:w-1/2" alt="chair" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="btn btn-primary  bg-gradient-to-r from-primary to-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
