import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    updateWishlist: (state, action) => {
      let existProduct = state.wishlist.find(
        (product) => product.id == action.payload.id
      );
      if (existProduct) {
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== action.payload.id
        );
        toast.success("Product removed from wishlist");
      } else {
        state.wishlist.push(action.payload);
        toast.success("Product added to wishlist");
      }
    },
    clearWishlist: (state) => {
      state.wishlist = [];
      toast.success("All products removed from wishlist");
    },
  },
});

export default wishlistSlice.reducer;

export const { updateWishlist, clearWishlist } = wishlistSlice.actions;
