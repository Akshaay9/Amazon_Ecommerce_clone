import React from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./FireBase";

function CheckOut() {
    const history=useHistory()
const signOutPurchase =()=>{
    auth.signOut()
        history.push("/login")
    
}
const gotoHomePurchase =()=>{
history.push("/")
}


    return (
        <div className='login'>
            
        <img
            className="login__logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        />
    

    <div className='login__container'>
        <h1>Thank you For using Amazon.in for your shopping</h1>

      
            <button type='submit' onClick={signOutPurchase} className='login__signInButton'>Sign Out</button>
            <button type='submit' onClick={gotoHomePurchase} className='login__signInButton'>Go To HomePage for Shopping</button>
        

        <p>
           Your prodct will be dispatched within few days, thanks for using amazon for your pirchse, hope you had anice experience with us
        </p>

    </div>
</div>
    )
}

export default CheckOut
