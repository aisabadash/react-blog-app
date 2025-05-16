import { configureStore } from "@reduxjs/toolkit";
import toolbarReducer from "./features/toolbar/toolbarSlice";
import themeReducer from "./features/theme/themeSlice";

export const store = configureStore({
   reducer: {
      toolbar: toolbarReducer,
      theme: themeReducer, 
   },
});