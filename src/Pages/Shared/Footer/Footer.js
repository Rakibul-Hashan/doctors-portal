import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="p-10  ">
      <div className="footer place-content-between">
        <div>
          <span className="footer-title">Services</span>
          <Link to={'/'} className="link link-hover">Emergency Checkup</Link>
          <Link to={'/'} className="link link-hover">Monthly Checkup</Link>
          <Link to={'/'} className="link link-hover">Weekly Checkup</Link>
          <Link to={'/'} className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to={'/'} className="link link-hover">Fluoride Treatment</Link>
          <Link to={'/'} className="link link-hover">Cavity Filling</Link>
          <Link to={'/'} className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <p>New York - 101010 Hudson</p>
        </div>
      </div>
      <div className=" px-10 mt-20 footer-bottom">
        <div className="items-center grid-flow-col">
          <p className="text-center">Copyright 2022 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
