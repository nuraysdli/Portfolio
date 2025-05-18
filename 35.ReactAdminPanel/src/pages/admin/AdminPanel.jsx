
import React, { useEffect, useState } from 'react'
import "./AdminPanel.css"
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, addProduct, deleteProduct, editProduct } from '../../redux/features/productSlice'
import TransitionsModal from '../../utils/modal/Modal'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    category: "",
    price: "",
    description: "",
  });

  const handleOpenCreate = () => {
    setFormData({
      image: "",
      title: "",
      category: "",
      price: "",
      description: "",
    });
    setIsEdit(false);
    setOpen(true);
  };

  const handleOpenEdit = (product) => {
    setFormData(product);
    setIsEdit(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(editProduct(formData)).then(() => {
        dispatch(getProducts());
        setOpen(false);
      });
    } else {
      dispatch(addProduct(formData)).then(() => {
        dispatch(getProducts());
        setOpen(false);
      });
    }
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id)).then(() => {
      dispatch(getProducts());
    });
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Admin panel</h2>
      <Button variant='warning' style={{ width: "200px", marginRight: "1100px" }} onClick={handleOpenCreate}>Create</Button>
      <Table bordered>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => (
            <tr key={product.id} style={{ verticalAlign: "middle" }}>
              <td>
                <img
                  src={product.image}
                  alt=""
                  style={{ width: "100px", height: "90px" }}
                  onClick={() => navigate(`/productdetail/${product.id}`)}
                />
              </td>
              <td>{product.title?.slice(0, 25) + "..."}</td>
              <td>${product.price}</td>
              <td>{product.category}</td>
              <td>{product.description?.slice(0, 100) + "..."}</td>
              <td>
                <div className='setting'>
                  <Button variant='danger' onClick={() => handleDeleteProduct(product.id)}>
                    Remove
                  </Button>
                  <Button variant='success' onClick={() => handleOpenEdit(product)}>
                    Edit
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <TransitionsModal
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        isEdit={isEdit}
      />

      <Button
        variant="danger"
        style={{ marginBottom: "20px", width: "100px" }}
        onClick={() => {
          products.forEach((product) => dispatch(deleteProduct(product.id)));
          dispatch(getProducts());
        }}
      >
        Clear All
      </Button>
    </div>
  )
}

export default AdminPanel
