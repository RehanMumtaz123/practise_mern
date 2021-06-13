import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const validateInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    try {
      const { name, email, phone, password, cpassword } = user;
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password, cpassword }),
      });
      const data = await res.json();
      if (data) {
        console.log("data chalaga :", data);
        window.alert("succes");
        history.push("/login");
      } else {
        console.log("eeror");
        window.alert("fail");
      }
    } catch (error) {console.log(error)}
  };

  return (
    <div className="container ">
      <section className="">
        <Form method="POST" className="container ">
          <Form.Group className="mt-4 mb-3 " controlId="formBasicEmail">
            <Form.Label>Name :</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={user.name}
              onChange={validateInput}
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
              value={user.email}
              onChange={validateInput}
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
              value={user.phone}
              onChange={validateInput}
              autoComplete="off"
              placeholder="Enter phone number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={validateInput}
              autoComplete="off"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="cpassword"
              value={user.cpassword}
              onChange={validateInput}
              id="cpassword"
              autoComplete="off"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            className="form-submit"
            variant="primary"
            name="signup"
            id="signup"
            onClick={PostData}
            value="register"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default Signup;
