import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./FireBase";



function Login() {
// history
const history=useHistory()
    // hooks
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

// login
const login=(e)=>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
        history.push("/")

    })
    .catch(e=>alert(e.message))

}
// register
const register=(e)=>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
        history.push("/")

    })
    .catch(e=>alert(e.message))

}




    return (
        <div className='login'>
            
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password}  onChange={(e)=>setPassword(e.target.value)} />

                    <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button  onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}


export default Login
