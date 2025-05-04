import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProductDetailPage.css";
import { getProducts } from "../../redux/features/productSlice";
import {
  addBasket,
  decrement,
  increment,
} from "../../redux/features/basketSlice";

const ProductDetailPage = () => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let { products } = useSelector((state) => state.products);

  let findProduct = products.find((product) => product.id == id);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!findProduct) {
    return (
      <div className="container">
        <p>product not found or still loading...</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="product-container">
          <div className="product-image">
            <img className="img" src={findProduct.image} alt="Product Image" />
          </div>

          <div className="product-details">
            <h4 className="product-title">{findProduct.title}</h4>
            <p className="product-category">{findProduct.category}</p>
            <p id="price-${findProduct.id}" className="product-price">
              ${findProduct.price * findProduct.count}
            </p>
            <p className="product-description">{findProduct.description}</p>

            <div className="product-rating">
              <span>⭐ {findProduct.rating.rate}</span>
              <span>({findProduct.rating.count} reviews)</span>
            </div>

            <div className="quantity-selector">
              <button
                className="btn-minus"
                onClick={() => dispatch(decrement(findProduct.id))}
                disabled={findProduct.count == 1}
              >
                -
              </button>
              <span className="basket-count">{findProduct.count}</span>
              <button
                className="btn-plus"
                onClick={() => dispatch(increment(findProduct.id))}
              >
                +
              </button>
            </div>

            <button
              className="btn btn-danger add-to-cart-btn"
              onClick={() => dispatch(addBasket(findProduct.id))}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
