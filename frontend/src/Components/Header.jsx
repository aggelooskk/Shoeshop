import React from "react";
import {
  Navbar,
  Nav,
  NavLink,
  Container,
  NavbarBrand,
} from "react-bootstrap";


const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-start"
          >
            <Nav className="mr-auto">
              <NavLink href="#shop" className="mr-5">
                SHOP
              </NavLink>
              <NavLink href="#reviews" className="mr-5">
                REVIEWS
              </NavLink>
              <NavLink href="#about" className="mr-5">
                ABOUT
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          <NavbarBrand id="shoeshop" className="mx-auto" href="#">
            SHOESHOP
          </NavbarBrand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavLink href="#account" className="ml-5">
                ACCOUNT
              </NavLink>
              <NavLink href="#search" className="ml-5">
                SEARCH
              </NavLink>
              <NavLink href="#cart" className="ml-5">
                CART
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
