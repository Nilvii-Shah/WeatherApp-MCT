import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTrue: true,
  query: "delhi",
};
export const toggleSlice = createSlice({
  name: "Toggle",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isTrue ? (state.isTrue = false) : (state.isTrue = true);
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});
export const { toggleTheme, setQuery } = toggleSlice.actions;
export default toggleSlice.reducer;
