import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<h1>Checkout</h1>} />
          <Route path="/login" element={<h1>Login page</h1>} />
          {/* This is the default route */}
          <Route path="/" element={<h1>Home page</h1>} />
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
