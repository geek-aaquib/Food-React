import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  // let btnName = "Login";
  const [btnName, setBtnName] = useState("Login");
  // const [style, setStyle] = useState("login-btn");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li><button className="login-btn" onClick = {()=>{btnName === "Login"?setBtnName("Logout"):setBtnName("Login")}}
          >{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;