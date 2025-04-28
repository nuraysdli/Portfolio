import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Products from "./pages/Products";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  let baseUrl = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  let getAllProducts = async () => {
    setLoading(true);
    let res = await axios(baseUrl);
    setProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  let deleteProduct = (id) => {
    let filteredProducts = products.filter((item) => item.id !== id);
    setProducts([...filteredProducts]);
    toast.success("Product deleted successfully!");
  };

  let addProduct = (newProduct) => {
    const createdProduct = {
      ...newProduct,
      id: Math.random(),
    };
    setProducts([createdProduct, ...products]);
    toast.success("Product created successfully!");
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((item) =>
      item.id === updatedProduct.id ? updatedProduct : item
    );
    setProducts([...updatedProducts]);
    toast.success("Product updated successfully!");
  };

  const resetProduct = () => {
    setProducts([]);
    toast.info("All products reset!");
  };

  return (
    <div>
      <Products
        data={products}
        onDelete={deleteProduct}
        onAdd={addProduct}
        onUpdate={updateProduct}
        loading={loading}
        onReset={resetProduct}
      />
    </div>
  );
}

export default App;
