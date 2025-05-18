 import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { addBasket, decrement, increment, removeBasket } from "../redux/features/basketSlice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import Product from "../components/product/Product";
import { useNavigate } from "react-router-dom";



const Basket = () => {
  let { basket } = useSelector((state) => state.basket);
  let dispatch = useDispatch();
  let navigate=useNavigate()

  const handleClearBasket = () => {
    dispatch(clearBasket());
  };
  console.log(basket);

  const totalPrice = basket.reduce(
    (sum, product) => (sum+product.price*product.count),0
    
  );

  console.log(totalPrice);

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          {basket &&
            basket.map((product) => (
              <tr key={product.id} style={{ verticalAlign: "middle" }}
          
>
                <td>
                  <img
                    src={product.image}
                    alt=""
                    style={{ width: "100px", height: "90px" }}
                    onClick={() => navigate(`/productdetail/${product.id}`)}
                  />
                </td>
                <td>{product.title}</td>
                <td>${product.price*product.count}</td>
                <td>
                  <button
                   onClick={()=>dispatch(decrement(product.id))} 
                   disabled={product.count ==1} 
                   style={{border:"none",background:"transparent"}} >
                    
                   <FaMinus/>
                

                </button>
                {product.count}
               <button
                 onClick={()=>dispatch(increment(product.id))}
                 style={{border:"none",background:"transparent"}} >
                 <FaPlus />
                 </button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    style={{ width: "80px" }}
                    onClick={() => dispatch(removeBasket(product))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Button
        variant="danger"
        onClick={handleClearBasket}
        style={{ marginBottom: "20px", width: "100px" }}
      >
        Clear All
      </Button>

      <div className="text-end mb-3">
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
      </div>
 
    </div>
  );
};

export default Basket;
