import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            {/* Text Section */}
            <Col md={6} className="mb-4 mb-md-0">
              <div className="pe-md-5">
                <h3 className="fw-light mb-2">Welcome To</h3>
                <h1 className="fw-bold display-4 mb-3">My Ecommerce Shop</h1>
                <p className="lead">
                  We Are{" "}
                  <span className="text-warning fw-bold">
                    Powerful Together
                  </span>
                </p>
                <Link to={"/product-lists/shirts"}>
                  <Button
                    variant="light"
                    className="mt-4 px-4 py-2 fw-semibold"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </Col>

            {/* Image Section */}
            <Col md={6}>
              <div className="text-center text-md-end ps-md-4">
                <img
                  src={require("./slider-img-1 (1).png")}
                  alt="Hero"
                  className="img-fluid"
                  style={{ maxHeight: "400px", objectFit: "contain" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Feature Section */}
      <section className="py-5 bg-light mt-5">
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded h-100">
                <i className="fa fa-cogs fa-3x text-danger mb-3"></i>
                <h5 className="fw-bold mb-2">Customization</h5>
                <p className="text-muted mb-0">
                  Fully customizable features tailored to your needs.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded h-100">
                <i className="fa fa-lock fa-3x text-danger mb-3"></i>
                <h5 className="fw-bold mb-2">Security</h5>
                <p className="text-muted mb-0">
                  State-of-the-art security built-in by default.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="p-4 border rounded h-100">
                <i className="fa fa-users fa-3x text-danger mb-3"></i>
                <h5 className="fw-bold mb-2">Community</h5>
                <p className="text-muted mb-0">
                  A large community of users and contributors worldwide.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
