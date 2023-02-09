import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    status: "idle",
    products: [],
  },
  reducer: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "producs/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:3001/products");
    const data = await res.json();
    return data;
  }
);

export default productsSlice.reducer
