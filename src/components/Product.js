import React from 'react'
import { useDispatch, useSelector } from "react-redux"

function Product() {
    const { producList } = useSelector((state) => state.products)
    console.log(producList);
    return (
        <div>
            {producList.length>1 && (
                producList.slice(8,12).map((data)=>(
                    <h1>{data.title}</h1>
                ))
            )}
        </div>
    )
}

export default Product
