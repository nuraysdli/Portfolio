import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { addBasket } from "../../redux/features/basketSlice";


import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateWishlist } from "../../redux/features/wishlistSlice";


const Product = ({ product }) => {
  let { wishlist } = useSelector((state) => state.wishlist);
  let dispatch = useDispatch();

  let navigate=useNavigate()

  let existProduct = wishlist.find((item) => item.id == product.id);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3"  onClick={()=>navigate(`/productdetail/${product.id}`)}>
      <Card className="card">
        {existProduct ? (
          <FaHeart
            className="icon"
            size={23}
            onClick={(e) =>{e.stopPropagation(),dispatch(updateWishlist(product))}}
            style={{ color: "black" }}
          />
        ) : (
          <FaRegHeart
            className="icon"
            size={23}
            onClick={(e) =>{e.stopPropagation(),dispatch(updateWishlist(product))}}
            style={{ color: "black" }}
          />
        )}

        <Card.Img className="card_img" variant="top" src={product.image} />
        <Card.Body>
          <Card.Title className="card_title">
            {product.title.slice(0, 20)}
          </Card.Title>
          <Card.Text className="price">${product.price}</Card.Text>
          <Button variant="primary"  onClick={(e) =>{e.stopPropagation(),dispatch(addBasket(product))}}>
  Add Basket
</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
