import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import CartList from "./CartList"
import ".././Product.css"

function Cart() {
    const { cartList } = useSelector((state) => state.products)
    const [totalPrice,setTotalPrice]=useState(0)
const [totalItem,setTotalItem]=useState(0)



useEffect(()=>{
  let items=0;
  let price=0;
  cartList.forEach((prods)=>{
    items=items+prods.qty
    price=items+prods.qty*prods.price
    setTotalPrice(price)
    setTotalItem(items)
    

  })

},[cartList,totalPrice,setTotalPrice,totalItem,setTotalItem])





    return (
      <div className="cartListBody">
      
      <div className="checkOut">
      <div className="check">
        <p className="freeOder">Your order is eligible for free delivery</p>
        <h5 className="itemTotal">SubTotal:{totalItem} Item</h5><h2 className="priceTotal">Cost : `${totalPrice}`</h2>
<button className="proceedToBuy">Proceed to buy</button>
      </div></div>

        <div  className="products2" >
            {cartList.length >= 0 && (
        cartList.map((data) => (
          <CartList
          key={data.id}
            id={data.id}
            title={data.title}
            category={data.category}
            camera={data.camera}
            size={data.size}
            qty={data.qty}
            inCart={data.inCart}
            images={data.images}
            weight={data.weight}
            price={data.price}

          />



        ))
      )}
           
        </div></div>
    )
}

export default Cart
