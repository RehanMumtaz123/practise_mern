import React from "react";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  // const [name, useName] = useState("");
  const [email, setEmail] = useState();
  const [passwd, setPasswd] = useState();
  const history = useHistory();
  const loginUser = (e) => {
    e.preventDefault();
    const logginUser = { email, passwd };
    axios
    .post("http://localhost:15000/signin", logginUser)
    .then((data) => {
      if (data.status === 400 || data.ok === false) {
        window.alert("invalid credentials");
      } else {
        console.log(data);
        window.alert("successful");
        history.push("/");
      }
    })
    .catch((err) => {
      console.log("error:", err.response);
    });
  };
  // console.log(data.json())
  // const res = data.json();
  
  // fetch("http://localhost:15000/signin", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     email: email,
  //     passwd: passwd,
  //   }),
  // })
  return (
    <div className="container">
      <Form method="POST">
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
            autoComplete="off"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button
          variant="primary"
          name="signin"
          id="signin"
          value="Log in"
          type="submit"
          onClick={loginUser}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Login;
