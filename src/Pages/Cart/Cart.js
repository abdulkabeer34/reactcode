import React, { useState, useEffect } from "react";
import "./Cart.css";
import axios from "axios";

export default function Cart({ setSelectedValue }) {
  const [NewArr, setNewArr] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      let data = await axios.get("http://127.0.0.1:3002/cartsDatabase");
      setNewArr(...NewArr, data.data);
    };
    fetchData();
  }, []);

  async function remove(items) {
    const itemos =
      items.currentTarget.parentNode.childNodes[2].childNodes[0].textContent;

    items.currentTarget.parentNode.remove();
    axios.delete(
      "http://127.0.0.1:3002/cartsDatabase/" + items.currentTarget.id
    );

    const getItems = async () => {
      let data = await axios.get("http://127.0.0.1:3002/items");
      setSelectedValue(data.data.item - parseInt(itemos));
      axios.put("http://127.0.0.1:3002/items", {
        item: data.data.item - parseInt(itemos),
      });
    };
    getItems();
  }

  function input(e) {
    e.cancelable = false;
  }

  return (
    <div className="cart-main">
      <div className="cart-center">
        <div className="top-heading">
          <h1>Shoping Cart</h1>
        </div>
        <div className="bottom-cart-content">
          <div className="cart-left">
            <div className="cart-heading">
              <h1 className="product-name-heading">Product</h1>
              <h1 className="price">Price</h1>
              <h1 className="quatity">Quantity</h1>
              <h1></h1>
            </div>
            <div className="cart-product-list">
              {NewArr.map((item) => (
                <div className="product">
                  <div className="name">
                    <div className="img">
                      <img src={item.image} alt="" />
                    </div>
                    <h3>{item.name}</h3>
                  </div>
                  <div className="price">${item.price}</div>
                  <div className="quantity">{item.quantity}</div>
                  <div onClick={remove} id={item.id} className="remove-btn">
                    <i className="fas fa-x"></i>
                    <h4>Remove</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-right">
            <div className="cart-right-content">
              <div className="sub-total">
                <h1>Subtotal</h1>
                <h1>$456</h1>
              </div>
              <div className="shipping">
                <div className="shipping-content">
                  <h3>Shipping</h3>
                  <div className="flat-rate">
                    <input onClick={input} name="Check-box" type="radio" />
                    <p>
                      Flate Rate : <span>$20</span>
                    </p>
                  </div>
                  <div className="local-pickup">
                    <input onClick={input} name="Check-box" type="radio" />
                    <p>
                      Local Pickup : <span>$25</span>
                    </p>
                  </div>
                  <div className="flat-rate">
                    <input onClick={input} name="Check-box" type="radio" />
                    <p>Free Shipping</p>
                  </div>
                </div>
              </div>
              <div className="total">
                <h1>Total</h1>
                <h1>{totalPrice}</h1>
              </div>
              <div className="btn">Proceed to Checkout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
