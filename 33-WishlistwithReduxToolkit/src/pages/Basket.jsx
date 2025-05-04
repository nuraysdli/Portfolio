import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { Button, Table } from "react-bootstrap";
import {
  decrement,
  increment,
  removeBasket,
} from "../redux/features/basketSlice";
import { Link, useNavigate } from "react-router-dom";

const Basket = () => {
  let { basket } = useSelector((state) => state.basket);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let totalPrice = basket.reduce(
    (sum, product) => sum + product.price * product.count,
    0
  );

  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((product) => (
              <tr key={product.id} style={{ verticalAlign: "middle" }}>
                <td>
                  <img
                    src={product.image}
                    style={{ width: "130px", height: "90px" }}
                    onClick={() => navigate(`/productdetail/${product.id}`)}
                  />
                </td>
                <td>{product.title}</td>
                <td>{(product.price * product.count).toFixed(2)}</td>
                <td>
                  <div
                    style={{
                      border: "1px solid gray",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "7px",
                      padding: "3px 0",
                      cursor: "pointer",
                    }}
                  >
                    <button
                      onClick={() => dispatch(decrement(product.id))}
                      disabled={product.count == 1}
                      style={{ border: "none", background: "transparent" }}
                    >
                      <CiSquareMinus size={20} />
                    </button>
                    {product.count}
                    <button
                      onClick={() => dispatch(increment(product.id))}
                      style={{ border: "none", background: "transparent" }}
                    >
                      <CiSquarePlus size={20} />
                    </button>
                  </div>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeBasket(product))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={"/"}>Back</Link>
        <p>TotalPrice: {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Basket;
