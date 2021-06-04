import React from "react";
import { Button, Form } from "react-bootstrap";

const signup = () => {
  return (
    <div className="container ">
      <section className="">
        <Form className="container m-10" style={{ margin: "10" }}>
          <Form.Group className="mt-4 mb-3 " controlId="formBasicEmail">
            <Form.Label>Name :</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              id="phone"
              name="phone"
              autoComplete="off"
              placeholder="Enter phone number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" id="password" autoComplete="off" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password"  name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="form-submit" variant="primary" name="signup" id="signup" value="register" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default signup;
