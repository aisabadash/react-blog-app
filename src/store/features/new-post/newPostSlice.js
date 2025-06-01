import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   item: {
      "userId": null,
      "title": "",
      "body": "",
   },
   errors: {
      title: false,
      body: true,
   },
   step: 0,
};

const newPostSlice = createSlice({
   name: 'newPost',
   initialState,
   reducers: {
      updateNewPost: (state, action) => {
         state.item = { ...state.item, ...action.payload };
      },
      resetNewPost: () => initialState,
      setStep: (state, action) => {
         state.step = action.payload;
      },
      setErrors: (state, action) => {
         state.errors = { ...state.errors, ...action.payload };
      },
   },
});

export const { updateNewPost, resetNewPost, setStep, setErrors } = newPostSlice.actions;
export default newPostSlice.reducer;