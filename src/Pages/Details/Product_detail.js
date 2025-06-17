import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";

export default function ProductDetail({ setSelectedValue }) {
  const { name, id } = useParams();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOriginalImage, setIsOriginalImage] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3003/${name}`);
        setData(res.data);
      } catch (err) {
        console.error("Error fetching product data:", err);
      }
    };
    fetchData();
  }, [name]);

  const handleImageChange = (src) => {
    setSelectedImage(src);
    setIsOriginalImage(false);
  };

  const handleAddToCart = async () => {
    setSelectedValue(false);

    const res = await axios.get("http://127.0.0.1:3002/items");
    const newItemCount = res.data.item + count;
    setSelectedValue(newItemCount);

    await axios.put("http://127.0.0.1:3002/items", {
      item: res.data.item + count,
    });

    const selectedItem = data.find((item) => item.id == id);
    if (selectedItem && count > 0) {
      const cartItem = {
        id: `${Math.floor(Math.random() * 1000000)}h${Math.floor(Math.random() * 100000000)}sdadf`,
        name: selectedItem.name,
        image: isOriginalImage ? selectedItem.images.image : selectedImage,
        quantity: count,
        price: selectedItem.price,
      };

      await axios.post("http://127.0.0.1:3002/cartsDatabase", cartItem);
    }
  };

  const item = data.find((item) => item.id == id);
  if (!item) return null;

  const allImages = [
    item.images.image,
    item.images.image1,
    item.images.image2,
    item.images.image3,
  ];

  return (
    <Container className="my-5">
      <Row>
        {/* Left: Images */}
        <Col md={6} className="text-center">
          <Image
            src={selectedImage || item.images.image}
            fluid
            rounded
            style={{
              maxWidth: "100%",
              maxHeight: "300px",
              objectFit: "contain",
            }}
          />
          <div className="d-flex justify-content-center mt-3 flex-wrap gap-2">
            {allImages.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                thumbnail
                onClick={() => handleImageChange(src)}
                style={{
                  width: 80,
                  height: 80,
                  cursor: "pointer",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        </Col>

        {/* Right: Details */}
        <Col md={6}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>

          <div className="mb-3">
            <strong>Availability:</strong>{" "}
            <span className="text-success">In Stock</span>
          </div>
          <div className="mb-3">
            <strong>SKU:</strong> <span>0034</span>
          </div>
          <h4 className="text-primary">${item.price}</h4>
          <div className="d-flex align-items-center gap-3 mb-3">
            <Button
              variant="outline-secondary"
              onClick={() => setCount(Math.max(0, count - 1))}
            >
              -
            </Button>
            <span>{count}</span>
            <Button
              variant="outline-secondary"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </div>

          <h5>Total: ${item.price * count}</h5>

          <Button
            variant="warning"
            onClick={handleAddToCart}
            disabled={count === 0}
          >
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
