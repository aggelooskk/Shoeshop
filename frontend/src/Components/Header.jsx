import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/Badge";

const Header = () => {
  const totalQty = useSelector((state) =>
    state.cart.cartItems.reduce((acc, item) => acc + item.qty, 0)
  );

  const { user } = useSelector((state) => state.user); 

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
                <Nav.Link>
                  ACCOUNT
                  {user && user.name && (
                    <Badge bg="secondary" className="ms-2">
                      1
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/search" className="ml-5">
                <Nav.Link>SEARCH</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart" className="ml-5">
                <Nav.Link>
                  CART
                  {totalQty > 0 && (
                    <Badge
                      pill
                      bg="danger"
                      style={{
                        top: "10px",
                        right: "10px",
                      }}
                    >
                      {totalQty} {/* Show cart quantity */}
                    </Badge>
                  )}
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
