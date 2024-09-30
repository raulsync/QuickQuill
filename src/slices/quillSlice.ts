import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// interface QuillState {
//   quill:  ;
// }

const initialState = {
  quill: localStorage.getItem('quills') ? localStorage.getItem('quills') : [],
};

export const quillSlice = createSlice({
  name: 'quill',
  initialState,
  reducers: {
    addToQuill: (state, action) => {},
    updateToQuill: (state, action) => {},
    resetQuill: (state, action) => {},
    removeFromQuill: (state, action) => {},
  },
});

export const { addToQuill, updateToQuill, resetQuill, removeFromQuill } =
  quillSlice.actions;

export default quillSlice.reducer;
