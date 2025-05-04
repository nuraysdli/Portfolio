import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Dropdown from "../../utils/Dropdown";
import "./Wrapper.css";
import { Link } from "react-router-dom";
import Wishlist from "../../pages/Wishlist";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Link to={"/Wishlist"}>
        <FavoriteIcon style={{ cursor: "pointer" }} />
      </Link>
      <Link>
        <ShoppingCartIcon style={{ cursor: "pointer" }} />
      </Link>
      <Dropdown />
    </div>
  );
};

export default Wrapper;
