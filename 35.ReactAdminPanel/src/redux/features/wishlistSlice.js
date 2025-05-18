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
          (product) => product.id !== action.payload.id
        );
        toast.error("Product removed from wishlist");
      } else {
        state.wishlist.unshift(action.payload);
        toast.success("Product added to wishlist")
      }
    },
    clearWishlist: (state) => {
      state.wishlist = [];
      toast.info("All products removed from wishlist");
    }
  },
});

export default wishlistSlice.reducer;

export const { updateWishlist,clearWishlist  } = wishlistSlice.actions;
