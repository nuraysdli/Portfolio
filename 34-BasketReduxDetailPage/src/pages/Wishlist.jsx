import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { updateWishlist,clearWishlist } from "../redux/features/wishlistSlice";

const Wishlist = () => {
  let { wishlist } = useSelector((state) => state.wishlist);
  let dispatch = useDispatch();

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  return (
    <div>
      {" "}
      <Table bordered>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {wishlist &&
            wishlist.map((product) => (
              <tr key={product.id} style={{ verticalAlign: "middle" }}>
                <td>
                  <img
                    src={product.image}
                    alt=""
                    style={{ width: "100px", height: "90px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Button
                    variant="danger"
                    style={{ width: "80px" }}
                    onClick={() => dispatch(updateWishlist(product))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Button
        variant="danger"
        onClick={handleClearWishlist}
        style={{ marginBottom: "20px",width:"100px" }}
      >
        Clear All
      </Button>
    </div>
  );
};

export default Wishlist;
