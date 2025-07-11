import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import wishlistSlice from "../features/wishlistSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import basketSlice from "../features/basketSlice";

const persistWishlistConfig = {
  key: "wishlist",
  storage,
};

const persistBasketConfig = {
  key: "basket",
  storage,
};

const persistWishlistReducer = persistReducer(
  persistWishlistConfig,
  wishlistSlice
);

const persistBasketReducer = persistReducer(persistBasketConfig, basketSlice);

export const store = configureStore({
  reducer: {
    products: productSlice,
    wishlist: persistWishlistReducer,
    basket: persistBasketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
