import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartSubTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.product.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += action.payload.quantity;
      } else {
        const tempProduct = {
          ...action.payload.product,
          cartQuantity: action.payload.quantity,
        };
        state.cartItems.push(tempProduct);
      }
      let sum = 0;
      state.cartItems.forEach(
        (item) => (sum += item.sOPrice * item.cartQuantity)
      );
      state.cartSubTotal = sum;
      state.cartTotalQuantity = state.cartItems.length;
    },
    changeQuantity(state, action) {
      const tempItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.product.id
      );
      if (tempItemIndex >= 0) {
        if (action.payload.quantity > 0) {
          state.cartItems[tempItemIndex].cartQuantity = action.payload.quantity;
        } else {
          state.cartItems.splice(tempItemIndex, 1);
        }
      }
      let sum = 0;
      state.cartItems.forEach(
        (item) => (sum += item.sOPrice * item.cartQuantity)
      );
      state.cartSubTotal = sum;
      state.cartTotalQuantity = state.cartItems.length;
    },
    removeCartItem(state, action) {
      state.cartItems.splice(action.payload, 1);
      let sum = 0;
      state.cartItems.forEach(
        (item) => (sum += item.sOPrice * item.cartQuantity)
      );
      state.cartSubTotal = sum;
      state.cartTotalQuantity = state.cartItems.length;
    }
  },
});

export const { addToCart, changeQuantity, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
