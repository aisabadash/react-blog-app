import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   title: "",
}

const toolbarSlice = createSlice({
   name: 'toolbar',
   initialState,
   reducers: {
      setToolbarTitle: (state, action) => {
         state.title = action.payload;
      }
   },
});

export const {setToolbarTitle} = toolbarSlice.actions;
export default toolbarSlice.reducer;