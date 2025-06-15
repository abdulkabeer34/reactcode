import React, { useEffect, useState } from "react";
import "./product_detail.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Product_detail({ setSelectedValue }) {
  let [count, setCount] = useState(0);
  let [newcount, setNewCount] = useState(0);
  const { name, id } = useParams();
  const [orgImage, setOrgImg] = useState();
  const [Data, setData] = useState([]);
  let [state, setState] = useState(true);
  const [descrip, setDescrip] = useState();

  const main = document.querySelector(".main-product");

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:3003/" + name);
      setData(data.data);
    };

    getData();
  }, []);

  function changeImage(item) {
    main.firstElementChild.src = item.target.src;
    setOrgImg(item.target.src);
    setState(false);
  }

  async function clicked(event) {
    setSelectedValue(false);

    const getData = async () => {
      let data = await axios.get("http://127.0.0.1:3002/items");
      setSelectedValue(data.data.item + count + 455);
      axios.put("http://127.0.0.1:3002/items", {
        item: data.data.item + count,
      });
    };
    getData();

    Data.map(function (item) {
      if (item.id == id) {
        if (count != 0) {
          if (state) {
            axios.post("http://127.0.0.1:3002/cartsDatabase", {
              id:
                Math.floor(Math.random() * 1000000) +
                "h" +
                Math.floor(Math.random() * 100000000) +
                "sd" +
                "adf",
              name: item.name,
              image: item.images.image,
              quantity: count,
              price: item.price,
            });
          } else {
            axios.post("http://127.0.0.1:3002/cartsDatabase", {
              id:
                Math.floor(Math.random() * 1000000) +
                "h" +
                Math.floor(Math.random() * 100000000) +
                "sd" +
                "adf",
              name: item.name,
              image: orgImage,
              quantity: count,
              price: item.price,
            });
          }
        }
      }
    });
  }

  function increase() {
    setCount(++count);
    setNewCount(newcount + count);
  }

  function decrease() {
    if (count > 0) {
      setCount(--count);
      setNewCount(newcount - count);
    }
  }

  return (
    <>
      {Data.map(function (item) {
        if (item.id == id) {
          return (
            <div className="detail-main">
              <div className="detail-left">
                <div className="main-product">
                  <img src={item.images.image} alt="" />
                </div>
                <div className="product-varients">
                  <div className="img1 varients-img">
                    <img onClick={changeImage} src={item.images.image} alt="" />
                  </div>
                  <div className="img2 varients-img">
                    <img
                      onClick={changeImage}
                      src={item.images.image1}
                      alt=""
                    />
                  </div>
                  <div className="img3 varients-img">
                    <img
                      onClick={changeImage}
                      src={item.images.image2}
                      alt=""
                    />
                  </div>
                  <div className="img4 varients-img">
                    <img
                      onClick={changeImage}
                      src={item.images.image3}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="detail-right">
                <div className="cart-content-top">
                  <h1>{item.name}</h1>
                  <p>{item.description}</p>
                  <p className="cart-para">{item.description.slice(0, 90)}</p>
                  <div className="availibility">
                    <h3>
                      Availibility:
                      <span>
                        <i className="fa-solid fa-check"></i>in stock
                      </span>
                    </h3>
                    <h3>
                      sku:<span>0034</span>
                    </h3>
                  </div>
                </div>
                <div className="cart-content-bottom">
                  <div className="actual-price">
                    <h1>${item.price}-$54.99</h1>
                  </div>
                  <div className="select-color">
                    <h3>Select Color</h3>
                    <select className="color-select">
                      <option value="" disabled defaultValue>
                        Select a color
                      </option>
                      <option className="red" value="red">
                        Red
                      </option>
                      <option className="blue" value="blue">
                        Blue
                      </option>
                      <option className="green" value="green">
                        Green
                      </option>
                      <option className="yellow" value="yellow">
                        Yellow
                      </option>
                      <option className="orange" value="orange">
                        Orange
                      </option>
                    </select>
                  </div>
                  <div className="total-price">
                    <h1>${item.price * count}</h1>
                  </div>
                  <div className="quantity">
                    <div className="actual-quantity">{count}</div>
                    <div className="signs">
                      <i onClick={increase} className="fas fa-plus"></i>
                      <i onClick={decrease} className="fas fa-minus"></i>
                    </div>
                    <button onClick={clicked} className="btn">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
