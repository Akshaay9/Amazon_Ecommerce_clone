import React from 'react'
import "./Product.css"
import { useDispatch, useSelector } from "react-redux"
import ProductList from "./ProductList"
import poster from "../SVD_Pantry_Desktop_hero_1500x600_ICICI_2._CB414528928_.jpg"

function Product() {
    const { producList } = useSelector((state) => state.products)
    console.log(producList);
    return (
        <div>
        <div className="poster_image">

          <img className="poster" src={poster} alt=""/></div>
<div className="products">

             {producList.length>0 &&(
              producList.slice(0,10).map((item)=>(
                
                <ProductList
                key={item.id}
                  title={item.title}
                  category={item.category}
                  images={item.images}
                  price={item.price}
                  id={item.id}
                  description={item.description}
                  qty={item.qty}
                  inCart={item.inCart}
                  size={item.size}
                  weight={item.weight}
                />
               
              ))
                    )}
</div>
        </div>
    )
}

export default Product
