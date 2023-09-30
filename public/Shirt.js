import React, { useEffect } from "react";
import { useState } from "react";
import "./shirts.css";
import { Link } from "react-router-dom";
import userData from "./product-detail.json";
import userData1 from "./product-detail.json";
import { useParams } from "react-router-dom";

export default function Shirt() {
  let [showStatus,setShowStatus] = useState(true)
  let [hideStatus,setHideStatus] = useState(false)
  let [filtered,setFiltered] = useState([])
  
   
   
  const render = (e)=>{
    userData.shirts.map(function(item){
      if(item.name.split(" ").join("").toLowerCase()==e.target.value.split(" ").join("").toLowerCase()){
        // setFiltered(item)
        setFiltered([item]);
        setShowStatus(false);
        setHideStatus(true)
      }
      else if((item.name.split(" ").join("").toLowerCase()!==e.target.value.split(" ").join("").toLowerCase())&hideStatus){
        setShowStatus(true);
        setHideStatus(false);

      }
    })
  }

  if (showStatus) {
    return (
      <>
        <div className="shirts-main">
          <div className="uppper">
            <div className="title">
              <h1>Shirts</h1>
              <div className="underline"></div>
            </div>
            <div  className="input">
              <div></div>
              <input onChange={render} placeholder="Search Product" className="input_main" type="text" />
            </div>
          </div>

          <div className="shirts-info">
            {userData.shirts.map((item) => (
              <div className="shirt">
                {/* Don't forget to add a unique key */}
                <div className="img">
                  <img src={item.image} />
                  {/* Use alt attribute for accessibility */}
                </div>
                <div className="content">
                  <h1>{item.name}</h1>
                </div>
                <Link className="checkout" to={`/details/${item.id}`}>
                  {" "}
                  Check Out
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  if(hideStatus){
    return (
      <>
        <div className="shirts-main">
          <div className="uppper">
            <div className="title">
              <h1>Shirts</h1>
              <div className="underline"></div>
            </div>
            <div  className="input">
              <div></div>
              <input onChange={render} className="input_main" type="text" />
            </div>
          </div>

          <div className="shirts-info">
          {filtered.map((item) => (
              <div className="shirt">
                {/* Don't forget to add a unique key */}
                <div className="img">
                  <img src={item.image} />
                  {/* Use alt attribute for accessibility */}
                </div>
                <div className="content">
                  <h1>{item.name}</h1>
                </div>
                <Link className="checkout" to={`/details/${item.id}`}>
                  {" "}
                  Check Out
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
