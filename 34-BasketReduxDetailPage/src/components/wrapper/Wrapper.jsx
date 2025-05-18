import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Dropdown from "../../utils/Dropdown";
import "./Wrapper.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = () => {
  let { wishlist } = useSelector((state) => state.wishlist);
  let {basket} =useSelector((state)=>state.basket)

  let basketCount=basket.reduce((sum,product)=>sum+product.count,0)
  return (
    <div className="wrapper">
      <Link
        to={"/wishlist"}
        style={{ display: "flex", alignItems: "center", gap: "4px" }}
      >
        <FavoriteIcon style={{ cursor: "pointer" }} />
        <sup style={{ fontSize: "14px", marginTop: "-8px" }}>
          {wishlist.length}
        </sup>
      </Link>

      <Link to={"/basket"}>
      <div style={{ position: "relative", display: "inline-block" }}>
  <ShoppingCartIcon style={{ cursor: "pointer", fontSize: "25px" }} />
  <sup
    style={{
      position: "absolute",
      top: "-8px",
      right: "-8px",
     
      padding: "2px 6px",
      
    }}
  >
    {basketCount}
  </sup>
</div>
      </Link>
      <Dropdown />
    </div>
  );
};

export default Wrapper;
