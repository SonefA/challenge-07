import React from 'react';
import './Cars.css';

import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

import homeLogo2 from "../../Asset/Img/Dashboard/navbar-left/fi_home2.png";
import carsLogo2 from "../../Asset/Img/Dashboard/navbar-left/fi_truck2.png";
import navbarMenu from "../../Asset/Img/Dashboard/navbar_top/fi_menu.png";
import profileLogo from "../../Asset/Img/Dashboard/navbar_top/Group_15.png";
import arrowRight from "../../Asset/Img/Dashboard/content/Vector.png";
import rectangle62 from "../../Asset/Img/Dashboard/navbar_top/Rectangle_62.png";
import newCarButton from "../../Asset/Img/Dashboard/content/Button.png";
import sizeCars1 from "../../Asset/Img/Dashboard/content/Button_size_(1).png";
import sizeCars2 from "../../Asset/Img/Dashboard/content/Button_size_(2).png";
import sizeCars3 from "../../Asset/Img/Dashboard/content/Button_size_(3).png";
import sizeCars4 from "../../Asset/Img/Dashboard/content/Button_size_(4).png";
import cardCollection from "../../Asset/Img/Dashboard/content/Card_collection.svg";

export const Cars = () => {
  return (
    <>
      <div className="container-cars">
        <div className="navbar-left">
          <div className="navbar-left-logo">
            <div className="navbar-left-logo1"></div>
          </div>

          <div className="navbar-left-home">
            {/* <div className="navbar-left-home1"></div> */}
            <div className="navbar-left-home1">
              <a href="http://localhost:3000/Dashboard">
                {" "}
                <img src={homeLogo2} alt="#"></img>
              </a>
            </div>
            <p className="dashboard-text">Dashboard</p>
          </div>

          <div className="navbar-left-cars">
            {/* <div className="navbar-left-cars1"></div> */}
            <div className="navbar-left-cars1">
              <a href="http://localhost:3000/Cars">
                {" "}
                <img src={carsLogo2} alt="#"></img>
              </a>
            </div>
            <p className="cars-text">Cars</p>
          </div>
        </div>

        <div className="navbar-top">
          <div className="navbar-top-logo">
            <div className="navbar-top-menu">
              <a href="http://www.google.com">
                {" "}
                <img src={navbarMenu} alt="#"></img>
              </a>
            </div>
            {/* <div className="navbar-top-logo1"></div> */}
            <div className="navbar-top-logo1">
              <a href="http://www.google.com">
                {" "}
                <img src={rectangle62} alt="#"></img>
              </a>
            </div>
          </div>

          <div className="navbar-top-right">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <img className="profileLogo" src={profileLogo} alt="#" />
              <NavDropdown title="Unis Badri" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Setting</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="http://localhost:3000/">Logout</NavDropdown.Item>
              </NavDropdown>
            </Form>
          </div>
        </div>

        <div className="cars-main">
          <div className="cars-bar">
            <div className="cars-bar1">
              <h2 className="cars-title">CARS</h2>
              <div className="cars-menu">
                <a className="cars-menu1" href="http://www.google.com">
                  List Cars
                </a>
              </div>
            </div>
          </div>

          <div className="cars-content">
            <ul>
              <li className="cars-link1">Cars</li>
              <img className="arrow-right" src={arrowRight} alt="#"></img>
              <li className="cars-link2">List Car</li>
            </ul>

            <h3 className="cars-content-title">List Car</h3>
            
            {/* <img className='newCar-button' src={newCarButton} alt='#'></img> */}
            <div className="newCar-button"><a href="http://localhost:3000/AddNewCar"><img src={newCarButton} alt="#"></img></a></div>
            <ul className='sizeCars'>
                <li className="sizeCars1" id='1'><a href="http://www.google.com"><img src={sizeCars1} alt="#"></img></a></li>
                <li className="sizeCars1" id='2'><a href="http://www.google.com"><img src={sizeCars2} alt="#"></img></a></li>
                <li className="sizeCars1" id='3'><a href="http://www.google.com"><img src={sizeCars3} alt="#"></img></a></li>
                <li className="sizeCars1" id='4'><a href="http://www.google.com"><img src={sizeCars4} alt="#"></img></a></li>
            </ul>
          
            <div className="card-collection"><a href="http://www.google.com"><img src={cardCollection} alt="#"></img></a></div>
          </div>   
        </div>
      </div>
    </>
  )
}
