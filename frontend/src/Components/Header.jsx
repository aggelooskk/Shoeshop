import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/Badge"; 
import cartSlice from "../slices/cartSlice";

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
              <LinkContainer to="/shop" className="mr-5">
                <Nav.Link>SHOP</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/reviews" className="mr-5">
                <Nav.Link>REVIEWS</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about" className="mr-5">
                <Nav.Link>ABOUT</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>

          <NavbarBrand id="shoeshop" className="mx-auto" href="/">
            SHOESHOP
          </NavbarBrand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <LinkContainer to="/account" className="ml-5">
                <Nav.Link>ACCOUNT</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/search" className="ml-5">
                <Nav.Link>SEARCH</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart" className="ml-5">
                <Nav.Link>CART
                <Badge pill bg="danger"
                        style={{ 
                            position: "absolute", 
                            top: "10px"
                        }}> 
                        9 
                    </Badge> 
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
