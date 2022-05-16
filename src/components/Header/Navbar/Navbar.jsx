import React from 'react'
import "./navbar.css"
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_left">
        <img
          src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
          alt=""
        />
      </div>
      <div className="nav_right">
        <div className="nav_right_input">
          <input type="text" />
          <SearchIcon className="SearchIcon" />
        </div>
        <div className="nav_right_category">
          <div>
            {" "}
            <span>Our Medicine</span>
            <span>Health Care Product</span>
            <span>Lab Test</span>
            <span>RTPCR</span>
          </div>
          <div>
            <span>Offer</span>
            <span>Login/Signup</span>
            <span>Lab Test</span>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar