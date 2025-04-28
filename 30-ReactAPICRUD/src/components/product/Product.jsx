import React from "react";
import "./Product.css";
import { FaArrowRight } from "react-icons/fa";

const Product = ({ product, deleteProd, editProd }) => {
  return (
    <div className="cards">
      <div className="card">
        <div className="card-image">
          <img src={product.image} />
        </div>
        <div className="card-content">
          <h2 className="card-title">{product.title?.slice(0, 10)}...</h2>
          <p className="card-category">{product.category}</p>
          <p className="card-description">
            {product.description?.slice(0, 50)}...
            <FaArrowRight />
          </p>
          <div className="card-footer">
            <span className="card-price">{product.price}</span>
            <div className="card-rating">
              <span>{product.rating.rate}</span>
              <span>{product.rating.count}</span>
            </div>
          </div>
          <div
            className="process"
            style={{
              marginTop: "15px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button
              style={{
                width: "110px",
                height: "30px",
                backgroundColor: "red",
                borderRadius: "7px",
                cursor: "pointer",
              }}
              onClick={deleteProd}
            >
              Del
            </button>
            <button
              style={{
                width: "110px",
                height: "30px",
                backgroundColor: "orange",
                borderRadius: "7px",
                cursor: "pointer",
              }}
              onClick={editProd}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
