import React, { useEffect } from "react";
import { useState } from "react";
import "./Sample-products.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import userData from "./otherProduct.json"


export default function Sample_products() {
   
   useEffect(() => {
    window.scrollTo(0, 0);
  },[])
   

    return (
      <>
            <div className="sample-list-main">
      <div className="center">
        <div className="top-heading">
            <h1>Trending Products</h1>
            <div className="big-underline"></div>
            <div className="categories">
              <h2>New</h2>
              <h2>Featured</h2>
              <h2>Top Sellers</h2>
            </div>
          </div>
      </div>
     <section className="sample-list-section">
        <div className="sample-list">
              {
                userData.map((item)=>(
                    <div className="product">
                    <Link to={`/details/others/${item.id}`} className="image">
                        <img src={item.image} alt=""/>
                    </Link>
                    <div className="content-center">
                        <div className="content">
                            <h3>Cooler</h3>
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
                               <h1 className="discount-price">${item.price}</h1>
                           </div>            
                       </div>
                    </div>
               </div>
                ))
              }
         
        </div>
        </section>
    </div>



    <div class="sale-main">
  <div class="image-left">
    <div class="content">
      <h3>
        Sale 20% off all store</h3>
      <h1>Smartphone
        BLU G91 Pro 2022</h1>
        <div class="btn"><h4>Shop Now</h4> <i class="fa-solid fa-arrow-right"></i></div>
    </div>
    <div class="space"></div>
  </div>
  <div class="image-right">
    <div class="content">
      <h1>HyperX Cloud II Wireless</h1>
      <h3> Sale 20% off all store</h3>
        <div class="btn"><h4>Shop Now</h4> <i class="fa-solid fa-arrow-right"></i></div>
    </div>
    <div class="space"></div>
  </div>
  </div>
      </>
    );
  
}

