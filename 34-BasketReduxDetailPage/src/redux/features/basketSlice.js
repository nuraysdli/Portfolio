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
            const { id, count = 1 } = action.payload;
            let existProduct = state.basket.find((product) => product.id === id);
          
            if (!existProduct) {
              state.basket.push({ ...action.payload, count });
              toast.success("Product added to basket");
            } else {
              existProduct.count += count;
              toast.info("Product count updated in basket");
            }
          },

 removeBasket:(state,action)=>{
    state.basket=state.basket.filter(product=>product.id != action.payload.id)
    toast.error("Product removed in basket");
 },
increment:(state,action)=>{
    let findProduct=state.basket.find((item)=>item.id==action.payload)
    if(findProduct){
        findProduct.count +=1
    }""
    toast.success("Product count +1 ");
},



decrement:(state,action)=>{
    let findProduct=state.basket.find((item)=>item.id==action.payload)
    if(findProduct && findProduct.count>1){
        findProduct.count -=1
    }
    toast.error("Product count -1  ");
},
clearBasket: (state) => {
    state.basket = [];
    toast.info("All products removed from basket");
  }

    },
});

export default basketSlice.reducer;

export const { addBasket, removeBasket ,increment,decrement,clearBasket} = basketSlice.actions;
