import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Button,
  Row,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";

const LoginScreen = () => {
  return (
    <>
      <Form>
        <h1>Sign In</h1>
        <Form>
          <FormGroup controlId="email" className="my-3">
            <FormLabel>Email Address</FormLabel>
            <FormControl type="email" placeholder="Enter Email" />
          </FormGroup>
          <FormGroup controlId="password" className="my-3">
            <FormLabel>Password</FormLabel>
            <FormControl type="password" placeholder="Password" />
          </FormGroup>
          <Button type="submit" variant="dark" className="mt-3">
            Sign In
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer? <Link to={"/register"}>Register</Link>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default LoginScreen;
