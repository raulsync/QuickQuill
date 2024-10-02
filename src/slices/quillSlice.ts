import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// const getStoredQuills = (): any[] => {
//   const storedQuills = localStorage.getItem('quills');
//   if (storedQuills) {
//     try {
//       const parsedQuills = JSON.parse(storedQuills);
//       return Array.isArray(parsedQuills) ? parsedQuills : [];
//     } catch (error) {
//       console.error('Error parsing quills from localStorage:', error);
//       return []; // Return an empty array on parse error
//     }
//   }
//   return []; // Return an empty array if nothing is stored
// };

interface QuillItem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

// Define the initial state type
interface QuillState {
  quill: QuillItem[];
}

const initialState: QuillState = {
  quill: JSON.parse(localStorage.getItem('quills') ?? '[]') as QuillItem[],
};

export const quillSlice = createSlice({
  name: 'quill',
  initialState,
  reducers: {
    // Add Quill Logic
    addToQuill: (state, action: PayloadAction<QuillItem>) => {
      const quills = action.payload;

      // Check if quill already exists by ID
      const index = state.quill.findIndex((item) => item.id === quills.id);

      // If quill already exists, show error and do nothing
      if (index >= 0) {
        toast.error('Quill already exists');
        return;
      }

      // If not, add the new quill
      state.quill.push(quills);
      localStorage.setItem('quills', JSON.stringify(state.quill));
      toast.success('Quill added successfully');
    },

    // Update Quill Logic
    updateToQuill: (state, action) => {
      const quills = action.payload;

      // Find the quill by ID
      const index = state.quill.findIndex((item) => item.id === quills.id);

      // If found, update it
      if (index >= 0) {
        state.quill[index] = quills;
        localStorage.setItem('quills', JSON.stringify(state.quill));
        toast.success('Quill updated');
      } else {
        toast.error('Quill not found');
      }
    },

    // Remove Quill Logic
    removeFromQuill: (state, action) => {
      const quillId = action.payload;

      // // Filter out the quill by ID
      state.quill = state.quill.filter((item) => item.id !== quillId);

      // Update localStorage
      localStorage.setItem('quills', JSON.stringify(state.quill));
      toast.success('Quill removed successfully');
    },

    // Reset Quill Logic
    resetQuill: (state) => {
      state.quill = [];
      localStorage.removeItem('quills');
      toast.success('Quills reset successfully');
    },
  },
});

export const { addToQuill, updateToQuill, resetQuill, removeFromQuill } =
  quillSlice.actions;

export default quillSlice.reducer;
