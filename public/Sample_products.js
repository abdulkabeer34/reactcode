import React from 'react'
import "./Sample-products.css"
import { Link } from 'react-router-dom'

export default function Sample_products() {
  return (
    <div className="main-sample">
      <div className="sample-title">
        <h1>Our products</h1>
        <div className="under-score"></div>
      </div>
    <div className="products">
        <div className="shirts sample-section">
            <div className="content">
                <h1>T-shirts</h1>
                <p>Discover the epitome of comfort and style with our premium t-shirts. We offer the best in quality, design, and fit, ensuring you look and feel your best every day. Elevate your wardrobe with our collection of exceptional t-shirts</p>
                <Link className="btn" to="/shirts" >Explore Now</Link>
            </div>
            <div className="image">
                <img src={require('./sample_shirt.jpg')} />
            </div>
        </div>
        <div className="shoes sample-section">
            <div className="content">
                <h1>Shoes</h1>
                <p>Step into style and comfort with our exquisite collection of shoes. We offer the finest quality, trendy designs, and a perfect fit for every step you take. Elevate your footwear game and stride confidently with our exceptional shoe selection.</p>
                <Link className="btn" to="/shoes">Explore Now</Link>
            </div>
            <div className="image">
                <img src={require('./sample_shoes.jpg')} alt=""/>
            </div>
        </div>
        <div className="hoodie sample-section">
            <div className="content">
                <h1>Hoodie</h1>
                <p>Wrap yourself in cozy warmth and urban style with our hoodies collection. Crafted for comfort and designed for fashion-forward individuals, our hoodies effortlessly blend comfort and trendiness. Elevate your casual wardrobe with our premium hoodie selection.</p>
                <Link className="btn" to="/hoodies">Explore Now</Link>
            </div>
            <div className="image">
                <img src={require('./sample_hoodie.jpg')} alt=""/>
            </div>
        </div>
        <div className="watch sample-section">
            <div className="content">
                <h1>Watch</h1>
                <p>Elevate your wrist game with our exquisite watch collection. Crafted for precision and designed for sophistication, our watches seamlessly blend timeless elegance and modern functionality. Make a statement of style and punctuality with our premium watch selection.</p>
                <Link className="btn" to="watches">Explore Now</Link>
            </div>
            <div className="image">
                <img src={require('./sample_watch.jpg')} alt=""/>
            </div>
        </div>
    </div>
   </div>

  )
}

