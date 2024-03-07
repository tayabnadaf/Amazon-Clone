import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Chekout from "./Components/Checkout";
function App() {
  const [cart, setCart]=useState([]);

  function handleAddToCart(item){
    setCart([...cart,item]);
  }
  const cartItemCount=cart.length;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<Chekout cart={cart}/>} />
          <Route path="/login" element={<h1>Login page</h1>} />
          {/* This is the default route */}
          <Route
            path="/"
            element={
              <>
                <Header cartItemCount={cartItemCount} />
                <Home onAddToCart={handleAddToCart}/>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
{
  /* We Need Ract-router */
}
{
  /*localhost.com/ */
}
/*localhost.com/checkout */
{
  /*localhost.com/login */
}
export default App;
