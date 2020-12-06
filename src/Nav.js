import React from 'react'
import "./Nav.css"
import "./App.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Nav() {
    return (
        <>
       <div className="nav_bar">

        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" className="logo" alt=""/>


        <div className="searchBar">
            <input className="search" type="text"/>
        </div>

<div className="nav_details">

        <div className="first">
            <p>Hello,</p>
            <div className="2nd">Sign In</div>
        </div>

        <div className="first">
            <p>Returns</p>
            <div className="2nd">&orders</div>
        </div>

        <div className="first">
            <p>Try,</p>
            <div className="2nd">Prime</div>
        </div>

        <div className="second">
        <div className="test3">
        <p className="cartSize">1</p>
            <p className="icon"><ShoppingCartIcon style={{ fontSize: 30 }} /></p>
            </div>
            <div className="nd">Cart</div>
        </div>



</div>

       </div>
{/* {pic food} */}

       </>

    )
}

export default Nav
