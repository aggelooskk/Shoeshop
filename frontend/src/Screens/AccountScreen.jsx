import React from "react";
import { Link } from "react-router-dom";

import { Button, Row, Col, Container } from "react-bootstrap";

const AccountScreen = () => {
  return (
    <>
      <Container>
        <Link to="/" className="btn btn-outline-dark mb-4">
          Go Back
        </Link>
        <Row className="mb-3">
          <Col>
            <h1>Hello </h1>
            <p>Add your information for a better experience</p>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Link to="/login">
              <Button variant="dark" size="lg">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="dark" size="lg">
                Register
              </Button>
            </Link>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default AccountScreen;
