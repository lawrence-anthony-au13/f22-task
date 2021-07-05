import React from "react";
import image from "../images/omega-copy-2.png";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="#home">
        <img src={image} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <NavDropdown title="Demos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Demo1</NavDropdown.Item>
            <NavDropdown.Item href="#">Demo2</NavDropdown.Item>
            <NavDropdown.Item href="#">Demo3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#features">Pages</Nav.Link>
          <Nav.Link href="#pricing">Support</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="danger">Get this book</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
