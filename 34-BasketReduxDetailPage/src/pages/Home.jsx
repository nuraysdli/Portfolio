import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productSlice";
import Product from "../components/product/Product";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  let { products } = useSelector((state) => state.products);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="row" style={{gap:"20px 0"}}>
      {products && products.map((product) => <Product key={product.id} product={product}/>)}
      </div>
      
    </div>
  );
};

export default Home;
