import React from 'react'
import './RelatedProducts.css'
import dataproduct from '../assets/data'
import Item from '../item/Item'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
       <h1>Related Products</h1>
       <hr />
       <div className="relatedproduts-item">
          {dataproduct.map((item,i)=>{
          return <Item
          key={item.id}
          name={item.name}
          image={item.image}
          old_price={item.old_price}
          new_price={item.new_price} 
          />
          })}
       </div>
    </div>
  )
}

export default RelatedProducts
