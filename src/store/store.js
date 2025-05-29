import { configureStore } from "@reduxjs/toolkit";
import toolbarReducer from "./features/toolbar/toolbarSlice";
import themeReducer from "./features/theme/themeSlice";
import postsReducer from "./features/posts/postsSlice";
import searchReducer from "./features/search/searchSlice";
import postReducer from "./features/post/postSlice";
import snackbarReducer from "./features/snackbar/snackbarSlice";
import commentsReducer from "./features/comments/commentsSlice";
import commentsdialogReducer from "./features/comments-dialog/commentsDialogSlice";
import previewDialogReducer from "./features/preview-dialog/previewDialogSlice";
import newPostReducer from "./features//new-post/newPostSlice";

export const store = configureStore({
   reducer: {
      toolbar: toolbarReducer,
      theme: themeReducer,
      posts: postsReducer,
      search: searchReducer,
      post: postReducer,
      snackbar: snackbarReducer,
      comments: commentsReducer,
      dialog: commentsdialogReducer,
      previewDialog: previewDialogReducer,
      newPost: newPostReducer,
   },
});