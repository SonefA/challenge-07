import React from "react";
import "./AddNewCar.css";

import { Button, Form, FormControl, NavDropdown } from "react-bootstrap";


import homeLogo from "../../Asset/Img/Dashboard/navbar-left/fi_home.png";
import carsLogo from "../../Asset/Img/Dashboard/navbar-left/fi_truck.png";
import navbarMenu from "../../Asset/Img/Dashboard/navbar_top/fi_menu.png";
import profileLogo from "../../Asset/Img/Dashboard/navbar_top/Group_15.png";
import arrowRight from "../../Asset/Img/Dashboard/content/Vector.png";

import rectangle62 from "../../Asset/Img/Dashboard/navbar_top/Rectangle_62.png";

export const AddNewCar = () => {
  return (
    <>
      <div className="container-dashboard">
      
        <div className="anc-navbar-left">
          <div className="navbar-left-logo">
            <div className="navbar-left-logo1"></div>
          </div>

          <div className="navbar-left-home">
            {/* <div className="navbar-left-home1"></div> */}
            <div className="navbar-left-home1">
              <a href="http://localhost:3000/Dashboard">
                {" "}
                <img src={homeLogo} alt="#"></img>
              </a>
            </div>
            <p className="dashboard-text">Dashboard</p>
          </div>

          <div className="navbar-left-cars">
            {/* <div className="navbar-left-cars1"></div> */}
            <div className="navbar-left-cars1">
              <a href="http://localhost:3000/Cars">
                {" "}
                <img src={carsLogo} alt="#"></img>
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

        <div className="dashboard-main">
          <div className="dashboard-bar">
            <div className="dashboard-bar1">
              <h2 className="dashboard-title">Cars</h2>
              <div className="dashboard-menu">
                <a className="dashboard-menu1" href="http://www.google.com">
                  List Car
                </a>
              </div>
            </div>
          </div>

          <div className="anc-content">
            <ul>
              <li className="anc-link1">Cars</li>
              <img className="arrow-right" src={arrowRight} alt="#"></img>
              <li className="anc-link2">List Car</li>
              <img className="arrow-right" src={arrowRight} alt="#"></img>
              <li className="anc-link3">Add New Car</li>
            </ul>

            <h3 className="anc-content-title">Add New Car</h3>
            <div className="anc-input">
                <div className="anc-nama">
                <ul>
                    <p>Nama*</p>
                    <input placeholder="Placeholder"></input>
                    </ul>
                </div>
                <div className="anc-harga">
                <ul>
                    <p>Harga*</p>
                    <input placeholder="Placeholder"></input>
                    </ul>
                </div>
                <div className="anc-foto">
                <ul>
                    <p>Foto*</p>
                    <input placeholder="Placeholder" ></input>
                    <button>Upload</button>
                </ul>      
                <label>File Size max. 2MB</label> 
                </div>
                <div className="anc-sr">
                <ul>
                    <p>Start Rent*</p>
                    <label>-</label>
                    </ul>
                </div>
                <div className="anc-fr">
                <ul>
                    <p>Finish Rent*</p>
                    <label>-</label>
                    </ul>
                </div>
                <div className="anc-ca">
                <ul>
                    <p>Created at*</p>
                    <label>-</label>
                    </ul>
                </div>
                <div className="anc-ua">
                <ul>
                    <p>Updated at*</p>
                    <label>-</label>
                    </ul>
                </div>
                <div className="anc-btn">
                  <ul>
                    <button className="cancel">Cancel</button>
                    <button className="save">Save</button>
                  </ul>
                </div>
                
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};
