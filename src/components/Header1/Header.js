import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect,useState } from 'react'

export default function Header({selectedValue}) {
   
  const [Items, setItems] = useState()
  useEffect(() => {

   const  getData = async ()=> {
    let data = await axios.get("http://127.0.0.1:3002/items")
    setItems(data.data.item)
  }
getData();

  }, [selectedValue])
  
  return (
    <nav>
      <div className="nav-center">
        <div className="left">
          <div className="logo">
            <h2>Logo</h2>
          </div>
          <div className="input-box">
            <input  type="text" />
            <h5 >Search</h5>
          </div>
        </div>
        <div className="right">
          <div className="heart">
            <h3>Products<i class="fa-solid fa-caret-down"></i></h3>
            <div className='dropdown-menu'>
              <ul>
                <Link className='links' to="/product-lists/shirts" >
                <li>Shirts</li>
                </Link>
                <Link className='links' to="/product-lists/shoes" >
                <li>Shoes</li>
                </Link>
                <Link className='links' to="/product-lists/watch" >
                <li>Watches</li>
                </Link>
                <Link className='links' to="/product-lists/hoodie" >
                <li>Hoodies</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="login">
            <div className="login-signup">
              <div className="content">
                <h3>My account</h3>
                <h3>Signup <span>&</span> Login</h3>
              </div>
              <div className="user">
                <i className="fa-regular fa-user"></i>
              </div>
            </div>
          </div>
          <div className="cart">
            <div className="content">
              <h3>Shopping Cart</h3>
              <h4></h4>
            </div>
          <Link to="/cart">
            <i to="/cart" className="fa-solid fa-cart-shopping"></i>
          </Link>
            <div  className='itemNum'>{Items}</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
