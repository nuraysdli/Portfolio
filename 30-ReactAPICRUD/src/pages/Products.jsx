import React, { useState } from "react";
import Product from "../components/product/Product";
import Modal from "../components/modal/Modal";

const Products = ({ data, onDelete, onAdd, onUpdate, onReset, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const openCreateModal = () => {
    setEditProduct(null);
    setIsOpen(true);
  };

  const openEditModal = (product) => {
    setEditProduct(product);
    setIsOpen(true);
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "70%",
        margin: "50px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <h2>Products</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "green",
              borderRadius: "7px",
              cursor: "pointer",
            }}
            onClick={openCreateModal}
          >
            Add
          </button>
          <button
            style={{
              width: "100px",
              height: "30px",
              backgroundColor: "red",
              borderRadius: "7px",
              cursor: "pointer",
            }}
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data &&
            data.map((product) => (
              <Product
                key={product.id}
                product={product}
                deleteProd={() => onDelete(product.id)}
                editProd={() => openEditModal(product)}
              />
            ))}
        </div>
      )}

      {isOpen && (
        <Modal
          onClose={() => setIsOpen(false)}
          onAdd={onAdd}
          onUpdate={onUpdate}
          editProduct={editProduct}
        />
      )}
    </div>
  );
};

export default Products;
