import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
   items: [],
   isLoading: false,
   error: null,
};

export const fetchPosts = createAsyncThunk(
   "posts/fetchPosts",
   async (query, {rejectWithValue}) => {
      try {
         const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=50");
         if (!response.ok) {
            throw new Error("An error to fetching data");
         }
         const data = await response.json();
         return data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
      }
      catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

export const deletePost = createAsyncThunk(
   "posts/removePost",
   async (id, {rejectWithValue, dispatch}) => {
      try {
         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method: "DELETE",
         });

         if(!response.ok) {
            throw new Error("Can't delete post. Server error");
         }
         
         dispatch(removePost(id));
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

export const addNewPost = createAsyncThunk(
   "posts/addPost",
   async ({title, body, userId}, {rejectWithValue, dispatch}) => {
      try {
         const post = {
            userId: userId,
            title: title,
            body: body,
         };

         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`,{
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
         });

         if(!response.ok) {
            throw new Error("Can't add post. Server error");
         }

         const data = await response.json();
         dispatch(addPost(data));
         
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

const setError = (state, action) => {
   state.isLoading = false;
   state.error = action.payload;
}

const postsSlice = createSlice({
   name: "posts",
   initialState,
   reducers: {
      addPost(state, action) {         
         state.items.push(action.payload);
      },
      removePost(state, action) {
         state.items = state.items.filter((item) => item.id !== action.payload);         
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
         })
         .addCase(fetchPosts.rejected, setError)
         .addCase(deletePost.rejected, setError)
         .addCase(addNewPost.fulfilled, (state) => {
            state.isLoading = false;
            state.error = null;
         })
         .addCase(addNewPost.rejected, setError)
   },
});

const {addPost, removePost} = postsSlice.actions;
export default postsSlice.reducer;