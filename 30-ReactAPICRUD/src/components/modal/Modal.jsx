import React, { useState, useEffect } from "react";

const Modal = ({ onClose, onAdd, onUpdate, editProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (editProduct) {
      setTitle(editProduct.title);
      setPrice(editProduct.price);
    }
  }, [editProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      title,
      price,
      id: editProduct ? editProduct.id : undefined,
    };

    if (editProduct) {
      onUpdate(productData);
    } else {
      onAdd(productData);
    }

    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2>{editProduct ? "Edit Product" : "Add Product"}</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
            {editProduct ? "Update" : "Add"}
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
