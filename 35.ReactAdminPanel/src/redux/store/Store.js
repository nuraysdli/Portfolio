import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import wishlistSlice from "../features/wishlistSlice";
import basketSlice from "../features/basketSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistWishlistConfig = {
  key: "wishlist",
  storage,
};

const persistWishlistReducer = persistReducer(
  persistWishlistConfig,
  wishlistSlice
);


const persistBasketConfig = {
  key: "basket",
  storage,
};

const persistBasketReducer = persistReducer(
  persistBasketConfig,
  basketSlice
); 
export const store = configureStore({
  reducer: { products: productSlice, basket: persistBasketReducer,wishlist: persistWishlistReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
