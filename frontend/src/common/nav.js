import React, { useMemo } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">STEFAN'S BLOG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" className="mr-auto">
            <Nav.Link>
              <Link to={`/`}>Blogs</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={`/about`}>About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={`/create`}>Create New</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
