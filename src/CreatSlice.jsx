import { createSlice } from '@reduxjs/toolkit';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name,image,cost} = action.payload;
        const existingItem = state.items.find((product)=>product.name===name);
        if(existingItem){
            existingItem.quantity++;
        }else{
            state.items.push({name, image,cost, quantity:1})
        }
    
    },
    removeItem: (state, action) => {
        const item = action.payload;
        state.items = state.items.filter((product)=>product.name !== item)
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;
        const existingItem = state.items.find((product)=>product.name===name);
        if(existingItem){
            existingItem.quantity = quantity ;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;
