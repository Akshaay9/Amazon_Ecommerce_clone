import React, { useState } from 'react'
import ".././Product.css"
import {updateValue} from "../../action/cartAction"
import { useDispatch, useSelector } from "react-redux";



function CartList({title,category,images,price,id,description,qty,inCart,size,weight}) {
  const [input, setInput] = useState(qty);




    const dispatch = useDispatch()
// remove from cart
    const loadDeleteFromCartHandler=()=>{
        dispatch({
          type:"REMOVE_FROM_CART",
          payload:{
        id
      }
        })
    }

    // increase the qty
    const changeTheValue=(e)=>{
        console.log(e.target.value);
        setInput(e.target.value)
        
dispatch(updateValue(id,e.target.value))
    }

    // total element





    // total Price



   
    return (
      
        <div className="product">
        <h4>{title}</h4>
        <p className="category">Category : { category}</p>
          <img className="product_img" src={images[0]} alt=""/> 
          
            <p className="price"><h3>Price:{price}</h3> </p>
            <span className="size">size : {size}</span>
            <span className="weight">Weight : {weight}</span>

            <div className="textbtn">
           <button onClick={()=>loadDeleteFromCartHandler(id)} className="cartBtn">Remove From Cart</button>
            </div>
            <label htmlFor="qty" className="inputQty">Qty : </label>
                {/* {setInput(qty)} */}
                <input
                    min="1"
                    type="number"
                    id="qty"
                    name="qty"
                    onChange={(e)=>changeTheValue(e)}
                value={input}
                

                />
          </div>
    )
}

export default CartList
