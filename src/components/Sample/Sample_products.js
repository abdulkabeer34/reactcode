import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import userData from "./otherProduct.json";

export default function Sample_products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container fluid className="bg-light py-5">
        <Row className="justify-content-center">
          {userData.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Link to={`/details/others/${item.id}`}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </Link>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Subtitle className="text-muted mb-1">Cooler</Card.Subtitle>
                    <Card.Title className="fs-5">{item.name}</Card.Title>
                    <div className="text-warning d-flex align-items-center mb-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star-half"></i>
                      <small className="text-secondary ms-2">(2 reviews)</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="text-muted text-decoration-line-through">$1199</div>
                    <div className="fw-bold text-primary">${item.price}</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
