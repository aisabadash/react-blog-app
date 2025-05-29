import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const previewDialogSlice = createSlice({
  name: 'previewDialog',
  initialState,
  reducers: {
    openDialog: (state) => {
      state.open = true;
    },
    closeDialog: (state) => {
      state.open = false;
    },
  },
});

export const { openDialog, closeDialog } = previewDialogSlice.actions;
export default previewDialogSlice.reducer;