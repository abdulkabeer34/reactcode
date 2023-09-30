import React, { useEffect } from "react";
import { useState } from "react";
import "./Sample-products.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function Sample_products() {
  let [filtered,setFiltered] = useState([])
  const [Data, setData] = useState([])
  
   let{name} = useParams()
   
   useEffect(() => {
    window.scrollTo(0, 0);

    const getData = async ()=>{
      const data = await axios.get("http://localhost:3003/shirts")
      setData(data.data)
      setFiltered(data.data)
    }

    getData();
    
  },[])
   

  const render = async (e)=>{
    const arr = [];
setTimeout(() => {
  Data.map((item, index) => {
    if (e.target.value.length !== 0) {
      if (
        item.name.split(" ").join("").toLowerCase().trim().slice(0, (e.target.value.split(" ").join("").toLowerCase().trim()).length) ===
        e.target.value.split(" ").join("").toLowerCase().trim()
      ) {
        arr.push(item);
        setFiltered(arr);
      }
    }
  
    if (index = Data.length-1) {
      if (arr.length === 0) {
        setFiltered(Data);
      }
    }
  });
}, 1000);
    

  }

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
                <div className="product">
                    <Link to={`/details/shirts`} className="image">
                        <img src="/pics/headphone-1.png" alt=""/>
                    </Link>
                    <div className="content-center">
                        <div className="content">
                            <h3>Headphones</h3>
                           <h1>Hari Pati</h1>
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
                               <h1 className="discount-price">$56</h1>
                           </div>            
                       </div>
                    </div>
               </div>
                <div className="product">
                    <Link to={`/details/shirts`} className="image">
                        <img src="/pics/headphone-2.png" alt=""/>
                    </Link>
                    <div className="content-center">
                        <div className="content">
                            <h3>Headphones</h3>
                           <h1>Headphone wireless</h1>
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
                               <h1 className="discount-price">$56</h1>
                           </div>            
                       </div>
                    </div>
               </div>
               <div className="product">
                    <Link to={`/details/shirts`} className="image">
                        <img src="/pics/headphone-3.png" alt=""/>
                    </Link>
                    <div className="content-center">
                        <div className="content">
                            <h3>Headphones</h3>
                           <h1>Gaming Headphones</h1>
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
                               <h1 className="discount-price">$56</h1>
                           </div>            
                       </div>
                    </div>
               </div>
               <div className="product">
                    <Link to={`/details/shirts`} className="image">
                        <img src="/pics/mobile-1.png" alt=""/>
                    </Link>
                    <div className="content-center">
                        <div className="content">
                            <h3>phones</h3>
                           <h1>Samsung Galaxry Ultra</h1>
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
                               <h1 className="discount-price">$56</h1>
                           </div>            
                       </div>
                    </div>
               </div>
               <div className="product">
                    <Link to={`/details/shirts`} className="image">
                        <img src="/pics/mobile-2.png" alt=""/>
                    </Link>
                    <div className="content-center">
                        <div className="content">
                            <h3>phones</h3>
                           <h1>Iphone 14 pro</h1>
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
                               <h1 className="discount-price">$56</h1>
                           </div>            
                       </div>
                    </div>
               </div>
               <div className="product">
                    <Link to={`/details/shirts`} className="image">
                        <img src="/pics/ipad-1.png" alt=""/>
                    </Link>
                    <div className="content-center">
                        <div className="content">
                            <h3>phones</h3>
                           <h1>Apple air pad 1</h1>
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
                               <h1 className="discount-price">$56</h1>
                           </div>            
                       </div>
                    </div>
               </div>
               <div className="product">
                    <Link to={`/details/shirts`} className="image">
                        <img src="/pics/cpu-1.png" alt=""/>
                    </Link>
                    <div className="content-center">
                        <div className="content">
                            <h3>Cooler</h3>
                           <h1>Cpu Cooler(RGB)</h1>
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
                               <h1 className="discount-price">$56</h1>
                           </div>            
                       </div>
                    </div>
               </div>
               <div className="product">
                    <Link to={`/details/shirts`} className="image">
                        <img src="/pics/cpu-5.png" alt=""/>
                    </Link>
                    <div className="content-center">
                        <div className="content">
                            <h3>Cooler</h3>
                           <h1>Cpu Cooler</h1>
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
                               <h1 className="discount-price">$56</h1>
                           </div>            
                       </div>
                    </div>
               </div>
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

