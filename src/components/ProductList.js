import { logDOM } from '@testing-library/react'
import React from 'react'
import "./Product.css"
import { useDispatch, useSelector } from "react-redux"

function ProductList({title,category,images,price,id,description,qty,inCart,size,weight}) {

  const dispatch = useDispatch()
  const inCarty=(inCart)=>{
    if(!inCart)
    {
      return "Add to Cart"
    }
    else{
      return "Add more quantity"
    }
  }
  const loadAddToCartHandler=(id)=>{
    console.log(id);
    dispatch({
      type:"ADD_TO_CART",
      payload:{
        id
      }
    })

  }
    return (
     

        <div className="product">
        <h4>{title}</h4>
        <p className="category">Category : { category}</p>
          <img className="product_img" src={images[0]} alt=""/> 
          
            <p className="price">Price:{price}</p>
            <span className="size">size : {size}</span>
            <span className="weight">Weight : {weight}</span>

            <div className="textbtn">
           <button onClick={()=>loadAddToCartHandler(id)} className="cartBtn">{inCarty(inCart)}</button>
            </div>
          </div>

      
    )
}

export default ProductList
