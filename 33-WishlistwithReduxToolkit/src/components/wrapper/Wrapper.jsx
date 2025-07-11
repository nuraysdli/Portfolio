import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Dropdown from "../../utils/Dropdown";
import "./Wrapper.css";
import { Link } from "react-router-dom";
import Wishlist from "../../pages/Wishlist";
import { useSelector } from "react-redux";

const Wrapper = () => {
  let { basket } = useSelector((state) => state.basket);

  let basketCount = basket.reduce((sum, product) => sum + product.count, 0);

  return (
    <div className="wrapper">
      <Link to={"/Wishlist"}>
        <FavoriteIcon style={{ cursor: "pointer" }} />
      </Link>
      <Link to={"/Basket"}>
        <ShoppingCartIcon style={{ cursor: "pointer" }} />
        <sup style={{ fontSize: "15px" }}>{basketCount}</sup>
      </Link>
      <Dropdown />
    </div>
  );
};

export default Wrapper;
