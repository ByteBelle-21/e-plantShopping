import { createSlice } from '@reduxjs/toolkit';

export const CreatSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const item = action.payload;
        const existingItem = state.items.find((product)=>product.name===item.name);
        if(existingItem){
            existingItem.quantity++;
        }else{
            state.items.push({item, quantity:1})
        }
    
    },
    removeItem: (state, action) => {
        const item = action.payload;
        state.items = state.items.filter((product)=>product.name !== item.name)
    },
    updateQuantity: (state, action) => {
        const {item, quantity} = action.payload;
        const existingItem = state.items.find((product)=>product.name===item.name);
        if(existingItem){
            existingItem.quantity = quantity ;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;
