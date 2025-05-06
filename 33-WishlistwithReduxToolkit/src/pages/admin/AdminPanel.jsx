import React, { useEffect } from "react";
import "./AdminPanel.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/features/productSlice";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  let { products } = useSelector((state) => state.products);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <Button className="add-btn" variant="success">
        Create
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id} style={{ verticalAlign: "middle" }}>
                <td>
                  <img
                    src={product.image}
                    style={{ width: "130px", height: "90px" }}
                    onClick={() => navigate(`/productdetail/${product.id}`)}
                  />
                </td>
                <td>{product.title.slice(0, 25) + "..."}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <div className="setting">
                    <Button variant="danger">Remove</Button>
                    <Button variant="warning">Edit</Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Link to={"/"}>Back</Link>
    </div>
  );
};

export default AdminPanel;
