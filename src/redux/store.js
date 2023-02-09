import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"
import cartReducer from "./cartSlice";
import filtersReducer from "./filterSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'



const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  filters: filtersReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["cart", "filters"]
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
