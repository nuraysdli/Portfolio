import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateWishlist } from "../../redux/features/wishlistSlice";

const Product = ({ product }) => {
  let { wishlist } = useSelector((state) => state.wishlist);
  let dispatch = useDispatch();

  let existProduct = wishlist.find((item) => item.id == product.id);
  return (
    <div className="col-3">
      <Card style={{ width: "18rem", padding: "10px", position: "relative" }}>
        <FaHeart
          style={{
            position: "absolute",
            right: "10px",
            cursor: "pointer",
            color: existProduct ? "red" : "black",
          }}
          onClick={() => dispatch(updateWishlist(product))}
        />
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "18rem", padding: "10px" }}
        />
        <Card.Body>
          <Card.Title>{`${product.title.slice(0, 13)}`}...</Card.Title>
          <Card.Text>${product.price}</Card.Text>
          <Button variant="primary" style={{ width: "100%" }}>
            Add Basket
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
