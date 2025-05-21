import { configureStore } from "@reduxjs/toolkit";
import toolbarReducer from "./features/toolbar/toolbarSlice";
import themeReducer from "./features/theme/themeSlice";
import postsReducer from "./features/posts/postsSlice";
import searchReducer from "./features/search/searchSlice"

export const store = configureStore({
   reducer: {
      toolbar: toolbarReducer,
      theme: themeReducer,
      posts: postsReducer,
      search: searchReducer,
   },
});