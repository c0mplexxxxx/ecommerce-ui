import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: ' ',
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const {searchFilterChange} = filterSlice.actions

export default filterSlice.reducer