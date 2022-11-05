import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";

function App() {

  return (
    <div className="App">
      <Header cart={cart}/>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/cart'>
        <CartPage />
      </Route>
    </div>
  );
}

export default App;
