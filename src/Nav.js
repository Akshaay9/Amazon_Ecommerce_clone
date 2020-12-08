import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import "./Nav.css"
import "./App.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link,useHistory} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import { auth } from "./FireBase";

function Nav() {
    const { cartList } = useSelector((state) => state.products)
    const { user } = useSelector((state) => state.products)
    const history=useHistory()
    
    const disdpatch=useDispatch()

const [totalItem,setTotalItem]=useState(0)
useEffect(()=>{
    let items=0;
    cartList.forEach((prods)=>{
      items=items+prods.qty
      setTotalItem(items)
    })
  },[cartList,totalItem,setTotalItem])

useEffect(()=>{
setTotalItem(0)
},[!Array.isArray(cartList) ])

// search 
const[searchterm,setSearchTerm]=useState("")
const searchChange=(e)=>{
    setSearchTerm(e.target.value)
    console.log(e.target.value);
}
const searchHandler=()=>{
    disdpatch({
        type:"SEARCH_ITEMS",
        payload:{
            searchterm
        }
    })
    setSearchTerm("")


}
const logOut=()=>{
    if(user)
    {
        auth.signOut()
        history.push("/login")

    }
}



    return (
       
        <>
       <div className="nav_bar">

       <Link to="/"><img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="logo" alt=""/></Link> 


        <div className="searchBar">
            <input className="search" type="text" value={searchterm} onChange={(e)=>searchChange(e)} />
          <Link to="/search"> <SearchIcon onClick={()=>searchHandler()} className="searchIcon"  disabled={!searchterm} /></Link> 
        </div>

<div className="nav_details">



<Link to={!user&& "/login"}>
        <div className="first">
            <p>Hello,{user?.email}</p>
            <div className="2nd" onClick={logOut} >{user?`Sign-out`:`Sign-in`}</div>
        </div> </Link>



        <div className="first">
            <p>Returns</p>
            <div className="2nd">&orders</div>
        </div>

        <div className="first">
            <p>Try,</p>
            <div className="2nd">Prime</div>
        </div>

        <Link to="/cart">
        <div className="second">
        <div className="test3">
        <p className="cartSize">{totalItem}</p>
        <p className="icon"><ShoppingCartIcon style={{ fontSize: 30 }} /></p>
            </div>
            <div className="nd">Cart</div>
        </div></Link>

        

        



</div>

       </div>
{/* {pic food} */}

       </>

    )
}

export default Nav
