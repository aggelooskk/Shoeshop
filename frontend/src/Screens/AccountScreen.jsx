import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col, Container, Spinner } from "react-bootstrap";
import { logoutUser } from "../slices/userSlice";
import { FaUserCircle } from "react-icons/fa";

const AccountScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <Container>
      <Link to="/" className="btn btn-outline-dark mb-4">
        Go Back
      </Link>
      <Row>
        <Col className="my-3">
          {loading && (
            <p>
              <Spinner />
            </p>
          )}
          {error && <p className="text-danger">{error}</p>}
          {user && user.name ? (
            <>
              <FaUserCircle size={100} className="text-muted mb-3" />
              <h3>Welcome Back, {user.name}!</h3>
              <h5>Email: {user.email}</h5>
              <Button variant="danger" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <h3>Add your information for a better experience</h3>
              <Link to="/login">
                <Button variant="dark" size="lg">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="dark" size="lg" className="ms-3">
                  Register
                </Button>
              </Link>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AccountScreen;
