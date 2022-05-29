import React from "react";
import "./SignIn.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import rectangle62 from "../../Asset/Img/Rectangle_62.png";

export const SignIn = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="signInBg-picture">{/* sign in : car picture bg */}</div>

        <div className="signIn-input">
          <img src={rectangle62} alt="#"></img>
          <h2 className="welcome-text">Welcome, Admin BCR</h2>
                {/* <p className="email-input">Email</p>
                <p className="password-input">Password</p>
                <a className="signIn-button" href="#">Sign In</a> */}

          <Form className="email-password-input">
            <Form.Group className="email-input" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control className="email-column" type="email" placeholder="Contoh: johndee@gmail.com" />
            </Form.Group>

            <Form.Group className="password-input" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="6+ karakter" />
            </Form.Group>
            <Button className="signIn-button" variant="primary" type="submit"><a href="http://localhost:3000/Dashboard">
              Sign In</a>
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
