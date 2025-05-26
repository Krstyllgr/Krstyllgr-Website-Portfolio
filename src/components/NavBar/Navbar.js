import React from "react";
import NavBar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap"; 
import "./Navbar.css";

function NavigationBar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <NavBar expand="lg" className="navbar">
      <Container className="containerNav">
        <NavBar.Brand
          onClick={() => handleScroll("homeSection")}
          className="navBrand"
        >
          Krstyllgr
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="nav ms-auto">
            <Nav.Link onClick={() => handleScroll("homeSection")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("aboutSection")}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("skillsSection")}>
              Services
            </Nav.Link>
            <Nav.Link onClick={() => handleScroll("worksSection")}>
              Work
            </Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
}

export default NavigationBar;
