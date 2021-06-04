import React from "react";
import { Icon } from "rsuite";
import "./navbar.css";
import "rsuite/dist/styles/rsuite-default.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
// import { Button } from "bootstrap";

const navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar bg="dark" className="d-flex" expand="lg">
        <Navbar.Brand href="#home" className="p-3 text-light my-2 flex-grow-1">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              className="text-light justify-content-around w-100"
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="text-light justify-content-around w-100"
              href="/about"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="text-light justify-content-around w-100"
              href="/contact"
            >
              Contact
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Link
            </Nav.Link>
          </Nav>
          <ul className="nav navbar-nav navbar-right justify-content-around">
            <li>
              <span className="glyphicon glyphicon-user text-light">
                <NavLink to="/signup">Sign Up</NavLink>
              </span>
            </li>
            <li>
              <span className="glyphicon glyphicon-user text-light">
                <NavLink to="/login">Login</NavLink>
              </span>
            </li>
            <li>
              <span className="glyphicon glyphicon-log-in text-light p-4">
                <Icon icon="opencart" size="2x" />
              </span>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default navbar;
