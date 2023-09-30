import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <>
    <div className="main-footer">
        <div className="footer-upper-content">
            <div className="left">
                <h1>Sign Up For Emails</h1>
                <h4>Enjoy 50% on you first order when you sign up to our website</h4>
            </div>
            <div className="right">
                <input type="text" placeholder="Enter your email"/>
                <button>Subscribe</button>
            </div>
        </div>
        <div className="footer-lower-content">
            <div className="first content">
                <h1>Contact us</h1>
                <p>customer Service</p>
                <p>Find Store</p>
                <p>Book Appointement</p>
                <p>Tel: (234) 23-45-666</p>
            </div>
            <div className="second content">
                <h1>Design Service</h1>
                <p>Interior Design</p>
                <p>Room Planner</p>
                <p>Our Project</p>
                <p>Design Chart</p>
            </div>
            <div className="third content">
                <h1>About</h1>
                <p>Our Story</p>
                <p>Career</p>
                <p>Influencers</p>
                <p>Join Our Team</p>
            </div>
            <div className="fourth content">
                <h1>CLIENT SERVICE</h1>
                <p>Contact Us</p>
                <p>Track Your Order</p>
                <p>Returns & Exchanges</p>
                <p>Shipping Information</p>
            </div>
        </div>
    </div>
    </>
  )
}
