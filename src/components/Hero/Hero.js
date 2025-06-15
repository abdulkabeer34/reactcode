import React from "react";
import "./Hero.css";
import "./shoes.png";

export default function Hero() {
  return (
    <>
      <div class="hero-section">
        <div class="hero-main">
          <div class="hero-left">
            <div class="content">
              <h3 style={{ "--i": 1 }}>Starting from $69</h3>
              <h1 style={{ "--i": 2 }}>The Best Shoes Collection 2023</h1>
              <h2 style={{ "--i": 3 }}>
                Exclusive Offer <span>-35%</span> Off this week
              </h2>
              <div style={{ "--i": 4 }} class="btn">
                Shop now<i class="fas fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div class="hero-right">
            <img
              class="hero-image entry"
              src={require("./slider-img-1 (1).png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="feature-offers">
        <div class="offers-main">
          <div class="offer offer1">
            <div class="content">
              <div class="content-left">
                <i class="fa-solid fa-truck"></i>
              </div>
              <div class="content-right">
                <h3>Free Delivery</h3>
                <p>Orders from all item</p>
              </div>
            </div>
          </div>
          <div class="offer offer2">
            <div class="content">
              <div class="content-left">
                <i class="fa-solid fa-dollar-sign"></i>
              </div>
              <div class="content-right">
                <h3>Return & Refund</h3>
                <p>Maney back guarantee</p>
              </div>
            </div>
          </div>
          <div class="offer offer3">
            <div class="content">
              <div class="content-left">
                <i class="fa-solid fa-percent"></i>
              </div>
              <div class="content-right">
                <h3>Member Discount</h3>
                <p>One very order over $140.00</p>
              </div>
            </div>
          </div>
          <div class="offer offer4">
            <div class="content">
              <div class="content-left">
                <i class="fa-solid fa-headphones"></i>
              </div>
              <div class="content-right">
                <h3>Support 24/7</h3>
                <p>Contact us 24 hours a day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
