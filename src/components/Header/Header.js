import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header({ selectedValue }) {
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:3002/items");
        setItemsCount(res.data.item || 0); // Assuming item is a number
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchData();
  }, [selectedValue]);

  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          MyShop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="align-items-center gap-4">
            <NavDropdown title="Products" id="products-dropdown">
              <NavDropdown.Item as={Link} to="/product-lists/shirts">
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product-lists/shoes">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product-lists/watch">
                Watches
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product-lists/hoodie">
                Hoodies
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/cart" className="position-relative text-white">
              <i className="fa-solid fa-cart-shopping fs-5"></i>
              {itemsCount > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {itemsCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
