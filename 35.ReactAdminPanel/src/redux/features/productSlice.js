import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};

let baseUrl = "http://localhost:3000/products";


export const getProducts = createAsyncThunk(
  "products/getproducts",
  async () => {
    let { data } = await axios(baseUrl);
    return data;
  }
);


export const addProduct = createAsyncThunk(
  "products/addproduct",
  async (product) => {
    let { data } = await axios.post(baseUrl, product);
    return data;
  }
);


export const deleteProduct = createAsyncThunk(
  "products/deleteproduct",
  async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  }
);


export const editProduct = createAsyncThunk(
  "products/editproduct",
  async (product) => {
    let { data } = await axios.put(`${baseUrl}/${product.id}`, product);
    return data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      state.products = state.products.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    });
  },
});

export default productSlice.reducer;
