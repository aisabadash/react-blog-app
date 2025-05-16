import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   mode: "light",
}

const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      toggleThemeMode: (state) => {
         state.mode === "dark" ? state.mode = "light" : state.mode = "dark";
      }
   },
});

export const {toggleThemeMode} = themeSlice.actions;
export default themeSlice.reducer;