import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/features/productSlice";

const Home = () => {
  let products = useSelector((state) => state.products.products);
  let dispatch = useDispatch();

  console.log(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div>Home</div>;
};

export default Home;
