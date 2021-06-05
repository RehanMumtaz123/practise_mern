import React from "react";
import { Button, Form } from "react-bootstrap";

const login = () => {
  // const [name, useName] = useState("");
  // const [email, useEmail] = useState("");
  // const [passwd, usePasswd] = useState("");

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            id="email"
            autoComplete="off"
            placeholder="Enter email"
            type="email"
          />
   
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default login;
