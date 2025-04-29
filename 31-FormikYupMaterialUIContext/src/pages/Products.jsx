import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <Grid container spacing={2} padding={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography>${product.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
