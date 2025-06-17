import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#8B5E3C" }}
      className="text-white py-5 mt-5"
    >
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-3 mb-md-0">
            <h3 className="fw-bold">Sign Up For Emails</h3>
            <p className="mb-0">
              Enjoy 50% off your first order when you sign up to our website.
            </p>
          </Col>
          <Col md={6}>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
              />
              <Button variant="light" className="fw-bold">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="text-start">
          <Col xs={6} md={3} className="mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p className="mb-1">Customer Service</p>
            <p className="mb-1">Find Store</p>
            <p className="mb-1">Book Appointment</p>
            <p className="mb-0">Tel: (234) 23-45-666</p>
          </Col>

          <Col xs={6} md={3} className="mb-4">
            <h5 className="fw-bold">Design Service</h5>
            <p className="mb-1">Interior Design</p>
            <p className="mb-1">Room Planner</p>
            <p className="mb-1">Our Project</p>
            <p className="mb-0">Design Chart</p>
          </Col>

          <Col xs={6} md={3} className="mb-4">
            <h5 className="fw-bold">About</h5>
            <p className="mb-1">Our Story</p>
            <p className="mb-1">Career</p>
            <p className="mb-1">Influencers</p>
            <p className="mb-0">Join Our Team</p>
          </Col>

          <Col xs={6} md={3} className="mb-4">
            <h5 className="fw-bold">Client Service</h5>
            <p className="mb-1">Contact Us</p>
            <p className="mb-1">Track Your Order</p>
            <p className="mb-1">Returns & Exchanges</p>
            <p className="mb-0">Shipping Information</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
