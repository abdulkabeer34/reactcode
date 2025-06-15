import React, { useEffect } from "react";
import { useState } from "react";
import "./Product_List.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product_List() {
  let [filtered, setFiltered] = useState([]);
  const [Data, setData] = useState([]);

  let { name } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);

    const getData = async () => {
      const data = await axios.get("http://localhost:3003/" + name);
      setData(data.data);
      setFiltered(data.data);
    };

    getData();
  }, [name]);

  const render = async (e) => {
    const arr = [];
    setTimeout(() => {
      Data.map((item, index) => {
        if (e.target.value.length !== 0) {
          if (
            item.name
              .split(" ")
              .join("")
              .toLowerCase()
              .trim()
              .slice(
                0,
                e.target.value.split(" ").join("").toLowerCase().trim().length
              ) === e.target.value.split(" ").join("").toLowerCase().trim()
          ) {
            arr.push(item);
            setFiltered(arr);
          }
        }

        if ((index = Data.length - 1)) {
          if (arr.length === 0) {
            setFiltered(Data);
          }
        }
      });
    }, 1000);
  };

  return (
    <>
      <div className="product-list-main">
        <div className="center">
          <div className="top-heading">
            <h1>{name}</h1>
            <div className="big-underline"></div>
            <div className="categories">
              <h2>New</h2>
              <h2>Featured</h2>
              <h2>Top Sellers</h2>
            </div>
          </div>
        </div>
        <div className="input">
          <div></div>
          <input
            onChange={render}
            placeholder="Search Product"
            className="input_main"
            type="text"
          />
        </div>
        <section className="product-list-section">
          <div className="product-list">
            {filtered.map((item) => (
              <div className="product">
                <Link to={`/details/${name}/${item.id}`} className="image">
                  <img src={item.images.image} alt="" />
                </Link>
                <div className="content-center">
                  <div className="content">
                    <h3>Headphones</h3>
                    <h1>{item.name}</h1>
                    <div className="rating-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half"></i>
                      <h3>(2 reviews)</h3>
                    </div>
                    <div className="price">
                      <h3 className="org-price">$1199</h3>
                      <h1 className="discount-price">{item.price}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
