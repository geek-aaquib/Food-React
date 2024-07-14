import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);


  const itemsLength = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between">
      <div>
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">Online Status {onlineStatus === true? "🟢":"🔴"}</li>
          <li className="p-4"><Link to="/">Home</Link></li>
          <li className="p-4"><Link to="/about">About Us</Link></li>
          <li className="p-4"><Link to="/contact">Contact Us</Link></li>
          <li className="p-4 font-bold"><Link to="/cart">Cart ({itemsLength.length}) </Link></li>
          <li className="p-4"><button className="login-btn" onClick = {()=>{btnName === "Login"?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button></li>
          <li className="p-4">{data.loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;