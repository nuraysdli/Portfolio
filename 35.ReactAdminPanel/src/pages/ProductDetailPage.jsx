
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../pages/ProductDetailPage.css";
import { getProducts } from '../redux/features/productSlice';
import { addBasket } from '../redux/features/basketSlice';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    const [count, setCount] = useState(1);

    useEffect(() => {
        if (!products.length) {
            dispatch(getProducts());
        }
    }, [dispatch, products.length]);

    const findProduct = products.find((product) => product.id == id);

    if (!findProduct) {
        return <p>Product not found</p>;
    }

    const handleAddToCart = () => {
        dispatch(addBasket({ ...findProduct, count }));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="product-container">
                    <div className="product-image">
                        <img className="img" src={findProduct.image} alt={findProduct.title} />
                    </div>
                    <div className="product-details">
                        <h4 className="product-title">{findProduct.title}</h4>
                        <p className="product-category">{findProduct.category}</p>
                        <p className="product-price">${findProduct.price}</p>
                        <p className="product-description">{findProduct.description}</p>

                        <div className="product-rating">
                            <span className="fa-solid fa-star" style={{ color: "#FFD43B" }}>
                                {findProduct.rating.rate}
                            </span>
                            <span> ({findProduct.rating.count} reviews)</span>
                        </div>


                        <div className="quantity-selector">
                            <button onClick={() => setCount(Math.max(1, count - 1))} 
                                 >
                                <FaMinus  />
                                
                            </button>
                            <span >{count}</span>
                            <button onClick={() => setCount(count + 1)} >
                                <FaPlus />
                            </button>
                        </div>


                        <button className="btn btn-danger add-to-cart-btn" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
