import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaPhone, FaUser } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="top-logo-bar">
        <img src="/gov.png" alt="Gov Logo" />

        <img src="/logo2.png" alt="Indian Engineering Logo" />

        <img src="/logo3.png" alt="EEPC Logo" />
      </div>

      <Navbar expand="lg" className="main-navbar">
        <Container>
          <Navbar.Toggle aria-controls="main-navbar-nav" />

          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link href="#">About Us ▾</Nav.Link>
              <Nav.Link href="#">For Indians ▾</Nav.Link>
              <Nav.Link href="#">For International ▾</Nav.Link>
              <Nav.Link href="#">Members ▾</Nav.Link>
              <Nav.Link href="#">Policy Info ▾</Nav.Link>
              <Nav.Link href="#">Resources ▾</Nav.Link>
              <Nav.Link href="#">Publications ▾</Nav.Link>
              <Nav.Link href="#">Events ▾</Nav.Link>
              <Nav.Link href="#">Important Links ▾</Nav.Link>
            </Nav>

            <Nav className="nav-icons">
              <Nav.Link className="icon-btn">
                <FaHome />
              </Nav.Link>
              <Nav.Link className="icon-btn">
                <FaPhone />
              </Nav.Link>
              <Nav.Link className="icon-btn">
                <FaUser />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
