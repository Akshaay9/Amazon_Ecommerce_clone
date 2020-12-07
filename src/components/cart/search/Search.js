import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import SearchList from "./searchList"
function Search() {
    const { searchList } = useSelector((state) => state.products)
    return (
        <div><div className="products2">
            {searchList.length > 1 ? searchList.map((item) => (

                <SearchList
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

            )) : <h1>oops! so such item is available</h1>}
        </div></div>
    )
}

export default Search
