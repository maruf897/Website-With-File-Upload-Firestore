import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navigationbar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          src="https://dummyimage.com/600x400/000/fff.jpg&text=Gorurhat"
          width="50"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      Gorur Hat
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/registration">Sign Up</Link>
        </Nav.Link>
        <Navbar.Text>
          <Link to="/login">Login</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
