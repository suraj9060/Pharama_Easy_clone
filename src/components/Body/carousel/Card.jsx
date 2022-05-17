import React from 'react'
import "./product.css"

const Card = ({ data }) => {
    return (
        <div>
            {
                data.map((ele, index) => {
                    return (
                      <div className="Prod_container">
                        <div className="Prod_container_box">
                          <div>
                            <div
                              className="Prod_image"
                              style={{ width: "100px"}}
                            >
                              <img
                                className="image"
                                src={ele.image}
                                alt="images"
                              />
                            </div>
                            <div
                              style={{ width: "200px" }}
                              className="Prod_Title"
                            >
                              {" "}
                              {ele.title}
                            </div>
                            <h2 className="Prod_Price">{ele.price}</h2>
                            <button>Buy Now</button>
                          </div>
                        </div>
                      </div>
                    );})
                        }

                        </div>
                    );
                }

export default Card