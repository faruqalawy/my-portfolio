import React from "react";

import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarOffcanvas,
  OffcanvasHeader,
  NavbarToggle,
  OffcanvasTitle,
  OffcanvasBody,
} from "react-bootstrap";

import "./Header.css";

export default function Header() {
  return (
    <Navbar collapseOnSelect sticky="top" className="Nav" expand="lg">
      <div className="custom-display header-display">
        <NavbarBrand className="navbar-brand">
          Faruq<span className="blue-color">.dev</span>
        </NavbarBrand>
        <NavbarToggle aria-controls={"offcanvasNavbar-expand-lg"} />
        <NavbarOffcanvas
          id={"offcanvasNavbar-expand-lg"}
          aria-labelledby={"offcanvasNavbarLabel-expand-lg"}
          placement="end"
        >
          <OffcanvasHeader closeButton>
            <OffcanvasTitle
              id={"offcanvasNavbarLabel-expand-lg"}
            ></OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody className="offcanvas-body">
            <Nav
              className="nav justify-content-end flex-grow-1 pe-3"
              id="navbar"
            >
              <Nav.Link href="#Home" className="offcanvas-case">
                Home
              </Nav.Link>
              <Nav.Link href="#About" className="ml-5 offcanvas-case">
                About
              </Nav.Link>
              <Nav.Link href="#Project" className="ml-5 offcanvas-case">
                Project
              </Nav.Link>
              <Nav.Link href="#Contact" className="ml-5 offcanvas-case">
                Contact
              </Nav.Link>
              <Nav.Link 
                href="https://drive.google.com/file/d/1mCjGHW1bq8nhoPD0GAVOGairJPHE-KS7/view?usp=sharing"
                className="offcanvas-case nav-button"
                target="_blank"
              >
                Download CV
              </Nav.Link>
            </Nav>
          </OffcanvasBody>
        </NavbarOffcanvas>
      </div>
    </Navbar>
  );
}
