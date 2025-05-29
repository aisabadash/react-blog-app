import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   isLoading: false,
   error: null,
};

export const fetchComments= createAsyncThunk(
   "comments/fetchComments",
   async (id, {rejectWithValue}) => {
      try {
         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments/`);
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

const commentsSlice = createSlice({
   name: "comments",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchComments.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
         })
         .addCase(fetchComments.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         })
   },
});

export default commentsSlice.reducer;