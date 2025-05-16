import { configureStore } from "@reduxjs/toolkit";
import toolbarReducer from "./features/toolbar/toolbarSlice";

export const store = configureStore({
   reducer: {
      toolbar: toolbarReducer, 
   },
});