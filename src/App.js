import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ReactDOM, useEffect,useState } from "react";
import React, { Component } from 'react'
import axios from "axios";

import Footer from "./components/Footer/Footer";
import Product_detail from "./Pages/Details/Product_detail";
import Home from "./components/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Header from "./components/Header1/Header";
import Product_List from "./Pages/Product-lists/Product_List";

export default function App() {

  const [selectedValue, setSelectedValue] = useState(true)

    return (
      <>
      <Router>
      <Header selectedValue={selectedValue} />
        <Routes>
          <Route exact path="/"  element={<Home/>}/>
          <Route    exact path="/details/:name/:id" element={<Product_detail  setSelectedValue={setSelectedValue} />}/>
          <Route exact path="/cart"    element={<Cart setSelectedValue={setSelectedValue} />}/>
          <Route exact path="/product-lists/:name" element={<Product_List/>} />
        </Routes>
      </Router>
    <Footer   />
      </>
    )
  }


