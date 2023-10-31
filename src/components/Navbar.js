import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const navLinks = [
    { to: "/", text: "Home", icon: <AiOutlineHome /> },
    { to: "/about", text: "About me", icon: <AiOutlineUser /> },
    { to: "/project", text: "Projects", icon: <AiOutlineFundProjectionScreen /> },
    { to: "/resume", text: "Resume", icon: <CgFileDocument /> },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <p2 className="img-fluid logo">SH</p2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navLinks.map((link, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={link.to}
                  onClick={() => updateExpanded(false)}
                >
                  {link.icon} {link.text}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="fork-btn"></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
