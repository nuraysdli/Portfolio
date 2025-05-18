import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

let baseUrl = "http://localhost:3000/products";

export const getProducts = createAsyncThunk("products", async () => {
  let {data} = await axios(baseUrl);
  return data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;

export const { extraReducers } = productSlice.actions;
