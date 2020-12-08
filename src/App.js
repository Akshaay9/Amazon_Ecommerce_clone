import React,{useEffect} from 'react'
import Nav from "./Nav"
import Product from "./components/Product"
import Nav2 from "./components/Nav2"
import Cart from "./components/cart/Cart"
import Search from "./components/cart/search/Search"
import Login from "./Login"
import { auth } from "./FireBase";
import { useDispatch, useSelector } from "react-redux"

import {
  BrowserRouter,
  Switch,
  Route,
 
} from "react-router-dom";




function App() {
  const dispatch = useDispatch()

  
  useEffect(() => {
    // will only run once when the app component loads...

   const unSubscribe= auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return ()=>{
      unSubscribe()
    }
  }, []);


  return (
<BrowserRouter>
<>
  
   <Switch>
    <Route exact path="/login">
       <Login/>
    </Route>
    <Route exact path="/">
      <Nav/>
      <Nav2/>
      <Product/>
    </Route>
    <Route exact path="/cart">
    <Nav/>
      <Nav2/>
      <Cart/>
    </Route>
    <Route exact path="/search">
    <Nav/>
      <Nav2/>
   <Search/>
    </Route>
    
   </Switch>
  
</>
</BrowserRouter>
  );
}

export default App;
