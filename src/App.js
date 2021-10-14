import React from 'react';
import Home from "./Components/Home.js";
import ProductHome from "./Components/ProductHome.js";
import { BrowseRouter as Router, Route, Link, useRouteMatch } from "react-router-dom";
import Cart from "./Components/Cart.js";
import AppBar from "@material-ui/core/AppBar";
import Product from "./Components/Product.js";


function App (){

  let {path, url} =useRouteMatch();
  return(
    <div>
    {/* The unordered list below could also be a navigation bar */}
    
    <AppBar className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/ProductHome">Products</Link>
      <Link to="/Cart">Cart</Link>
    </AppBar>
    <hr/>
    <br/>
    <br/>
    <br/>
   
   
      <Route exact path="/" component={Home}/>
      <Route path="/ProductHome" component={ProductHome}/>
      <Route path="/Product" component={Product}/>
      <Route path="/Cart" component={Cart}/>
  </div>

  )
  
}

export default App;
