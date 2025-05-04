import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { clearWishlist, updateWishlist } from "../redux/features/wishlistSlice";

const Wishlist = () => {
  let { wishlist } = useSelector((state) => state.wishlist);
  let dispatch = useDispatch();

  return (
    <div>
      <Table striped bordered hover>
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
                    style={{ width: "130px", height: "90px" }}
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(updateWishlist(product))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {wishlist.length > 0 && (
        <Button variant="danger" onClick={() => dispatch(clearWishlist())}>
          Remove All
        </Button>
      )}
    </div>
  );
};

export default Wishlist;
