import React from 'react'

const Product = ({data}) => {
    
  return (
      <div>
      {
        data.map((ele , index) => {
          return <div>
            <div>{ele.id}</div>
            <div>{ele.price}</div>
            <div> {ele.title}</div>
            <br />
            <hr />
          </div>
        })
          }
    </div>
  )
}

export default Product