import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Spinner,
  Button,
} from "react-bootstrap";

export default function Product_List() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const { name } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3003/${name}`);
        setData(response.data);
        setFiltered(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

  const handleSearch = (e) => {
    const input = e.target.value.trim().toLowerCase().replace(/\s+/g, "");
    if (!input) return setFiltered(data);

    const result = data.filter((item) =>
      item.name.trim().toLowerCase().replace(/\s+/g, "").startsWith(input)
    );

    setFiltered(result.length ? result : data);
  };

  return (
    <Container className="py-5">
      {/* Title */}
      <div className="text-center mb-4">
        <h1 className="text-capitalize">{name}</h1>
        <hr className="w-25 mx-auto" />
        <div className="d-flex justify-content-center gap-3">
          <Button variant="outline-primary" size="sm">New</Button>
          <Button variant="outline-success" size="sm">Featured</Button>
          <Button variant="outline-warning" size="sm">Top Sellers</Button>
        </div>
      </div>
      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <InputGroup>
            <Form.Control
              placeholder="Search product..."
              onChange={handleSearch}
            />
          </InputGroup>
        </Col>
      </Row>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}

      <Row>
        {!loading && filtered.length > 0 ? (
          filtered.map((item) => (
            <Col key={item.id} sm={6} md={4} lg={3} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Link
                  to={`/details/${name}/${item.id}`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={item.images.image}
                    alt={item.name}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                  <Card.Body className="text-center">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))
        ) : (
          !loading && (
            <div className="text-center w-100 py-5">
              <h5>No products found</h5>
            </div>
          )
        )}
      </Row>
    </Container>
  );
}
