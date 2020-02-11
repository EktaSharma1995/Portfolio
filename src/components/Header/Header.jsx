import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./Header.css";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";

const Navbar = () => {
  return (
    <StickyHeader
      header={
        <ReactBootStrap.Container fluid>
          <ReactBootStrap.Navbar className="custom" expand="lg">
            <ReactBootStrap.Navbar.Brand href="#title">
              Ekta Sharma
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.Nav.Link href="#about">
                  About
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#resume">
                  Resume
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#work">
                  Work
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#skills">
                  Skills
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="#about">
                  Contact
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
        </ReactBootStrap.Container>
      }
    ></StickyHeader>
  );
};

export default Navbar;
