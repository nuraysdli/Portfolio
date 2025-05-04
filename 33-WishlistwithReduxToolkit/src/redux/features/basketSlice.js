import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let existProduct = state.basket.find(
        (product) => product.id == action.payload.id
      );

      if (!existProduct) {
        state.basket.push({ ...action.payload, count: 1 });
      } else {
        existProduct.count += 1;
      }
      toast.success("Product added to basket");
    },

    removeBasket: (state, action) => {
      state.basket = state.basket.filter(
        (product) => product.id !== action.payload.id
      );
      toast.success("Product removed from basket");
    },

    increment: (state, action) => {
      let findProduct = state.basket.find((item) => item.id == action.payload);
      if (findProduct) {
        findProduct.count += 1;
      }
      toast.success("Product added to basket");
    },

    decrement: (state, action) => {
      let findProduct = state.basket.find((item) => item.id == action.payload);
      if (findProduct && findProduct.count > 1) {
        findProduct.count -= 1;
      }
      toast.success("Product removed from basket");
    },
  },
});

export default basketSlice.reducer;
export const { addBasket, removeBasket, increment, decrement } =
  basketSlice.actions;
