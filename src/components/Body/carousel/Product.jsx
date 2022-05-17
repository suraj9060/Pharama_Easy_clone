import React from 'react'
import "./product.css"
import Card from './Card'

const Product = ({data}) => {
    
  return (
      <div className='prod_main_container'>
      <Card data={data} />
    </div>
  )
}

export default Product