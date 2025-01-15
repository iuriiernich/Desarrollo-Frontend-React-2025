import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // aca se define todas las variables globales del componente product.jsx
  initialValue: 10,
  dataProduct: [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setInitialValue: (state, payload) => {
      state.initialValue = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInitialValue } = productSlice.actions;

export default productSlice.reducer;
