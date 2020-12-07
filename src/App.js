import React from 'react'
import Nav from "./Nav"
import Product from "./components/Product"
import Nav2 from "./components/Nav2"
import Cart from "./components/cart/Cart"
import Search from "./components/cart/search/Search"

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";




function App() {
  return (
    <div>
    <Router>
      <Nav />
      <Nav2/>
      {/* <Product/> */}

      <Switch>
      <Route path="/" exact component={Product}/>
      <Route path="/cart" exact component={Cart} />
      <Route path="/search" exact component={Search} />
     </Switch>
      
      </Router>
    </div>
  );
}

export default App;
