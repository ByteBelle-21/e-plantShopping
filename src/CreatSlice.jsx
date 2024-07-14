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
    },
    updateQuantity: (state, action) => {
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CreatSlice.actions;

export default CreatSlice.reducer;
