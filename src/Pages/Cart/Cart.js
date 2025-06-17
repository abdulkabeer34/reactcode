import React, { useEffect, useState } from "react";
import axios from "axios";
import { message, notification } from "antd";

export default function Cart({ setSelectedValue }) {
  const [cartItems, setCartItems] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:3002/cartsDatabase");
        setCartItems(res.data);
      } catch (err) {
        message.error("Failed to load cart data");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(subtotal + shippingCost);
  }, [cartItems, shippingCost]);

  const handleRemove = async (id, quantity) => {
    try {
      await axios.delete(`http://127.0.0.1:3002/cartsDatabase/${id}`);
      const itemsRes = await axios.get("http://127.0.0.1:3002/items");
      const updatedCount = itemsRes.data.item - quantity;
      await axios.put("http://127.0.0.1:3002/items", { item: updatedCount });
      setSelectedValue(updatedCount);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      message.success("Item removed from cart");
    } catch (err) {
      message.error("Failed to remove item");
    }
  };

  const handleCheckout = async () => {
    setLoadingCheckout(true);
    try {
      const totalQuantity = cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );

      await Promise.all(
        cartItems.map((item) =>
          axios.delete(`http://127.0.0.1:3002/cartsDatabase/${item.id}`)
        )
      );

      await axios.put("http://127.0.0.1:3002/items", { item: 0 });
      setSelectedValue(0);
      setCartItems([]);
      notification.success({
        message: "Checkout Successful",
        description: "Your cart has been cleared and order is being processed.",
        placement: "topRight",
      });
    } catch (err) {
      console.error(err);
      message.error("Checkout failed.");
    } finally {
      setLoadingCheckout(false);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>
      <div className="row g-4">
        {/* LEFT SIDE */}
        <div className="col-lg-8">
          <div className="bg-light rounded shadow-sm p-3">
            <div className="row fw-bold border-bottom pb-2 mb-3">
              <div className="col-md-5">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
              <div className="col-md-3 text-end">Action</div>
            </div>

            {cartItems.length === 0 ? (
              <div className="text-center py-5">
                <h5 className="text-muted">🚫 No items in your cart</h5>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  className="row align-items-center border-bottom py-3 product-row"
                  key={item.id}
                >
                  <div className="col-md-5 d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt=""
                      width="70"
                      height="80"
                      className="bg-secondary-subtle rounded"
                    />
                    <h6 className="mb-0">{item.name}</h6>
                  </div>
                  <div className="col-md-2">${item.price}</div>
                  <div className="col-md-2 quantity">{item.quantity}</div>
                  <div className="col-md-3 text-end">
                    <button
                      onClick={() => handleRemove(item.id, item.quantity)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      <i className="fas fa-trash me-1"></i>Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="mb-3">🧾 Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>
                  $
                  {cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>

              <hr />

              <div className="mb-3">
                <h6 className="mb-2">Shipping Options</h6>
                <div className="form-check">
                  <input
                    type="radio"
                    name="shipping"
                    className="form-check-input"
                    onChange={() => setShippingCost(20)}
                  />
                  <label className="form-check-label">
                    Flat Rate: <span className="text-primary">$20</span>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="shipping"
                    className="form-check-input"
                    onChange={() => setShippingCost(25)}
                  />
                  <label className="form-check-label">
                    Local Pickup: <span className="text-primary">$25</span>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="shipping"
                    className="form-check-input"
                    onChange={() => setShippingCost(0)}
                  />
                  <label className="form-check-label">Free Shipping</label>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>

              <button
                className="btn btn-dark w-100"
                disabled={cartItems.length === 0 || loadingCheckout}
                onClick={handleCheckout}
              >
                {loadingCheckout ? "Processing..." : "Proceed to Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
