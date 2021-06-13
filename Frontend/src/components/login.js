import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  // const [name, useName] = useState("");
  const [email, setEmail] = useState();
  const [passwd, setPasswd] = useState();
  const history = useHistory();

  const loginUser = (e) => {
    e.preventDefault();
    try {
      fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          passwd,
        }),
      })
        .then((data) => {
          console.log("data chalaga :", data);
          window.alert("succes");
          history.push("/");
        })
        .catch((err) => {
          console.log("eeror", err);
          window.alert("fail");
        });
      // console.log(res);
      // const data = res.json();
      // if (data.status == 400 || !data) {
      // if (data.status === 200) {
      //   window.alert(data.data.message);
      //   history.push("/");
      // } else {
      // }
    } catch (error) {
      console.log("error:", error);
    }
  };
  // console.log(data.json())
  // const res = data.json();

  return (
    <div className="container">
      <Form method="POST">
        <Form.Group className="mb-3 mt-4">
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

        <Form.Group className="mb-3">
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
        <Form.Group className="mb-3">
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
