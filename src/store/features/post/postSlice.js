import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   item: {},
   isLoading: false,
   error: null,
};

export const fetchPost = createAsyncThunk(
   "post/fetchPost",
   async (id, {rejectWithValue}) => {
      try {
         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
         if (!response.ok) {
            throw new Error("An error of fetching data");
         }
         const data = await response.json();
         return data;
      }
      catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

const setError = (state, action) => {
   state.isLoading = false;
   state.error = action.payload;
}

const postSlice = createSlice({
   name: "post",
   initialState,
   reducers: {
      resetPost(state) {
         state.item = {};
         state.isLoading = false;
         state.error = null;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPost.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.item = action.payload;
         })
         .addCase(fetchPost.rejected, setError)
   },
});

export const { resetPost } = postSlice.actions;
export default postSlice.reducer;