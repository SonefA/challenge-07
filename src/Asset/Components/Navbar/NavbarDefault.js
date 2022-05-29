import React from "react";
import "./NavbarDefault.css";

import logo from "../../Img/Nav/logo.svg";

export const NavbarDefault = () => {
  return (
    <div className="container-navbar">
      <img className="logo" src={logo} alt="#" width={200} height={60}></img>
      <ul>
        <li><a href="http://google.com">Our Services</a></li>
        <li><a href="http://google.com">Why Us</a></li>
        <li><a href="http://google.com">Testimonial</a></li>
        <li><a href="http://google.com">FAQ</a></li>
        <a className="btn-register" href="http://google.com">Register</a>
      </ul>
    </div>
  );
};