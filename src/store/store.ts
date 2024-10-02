import { configureStore } from '@reduxjs/toolkit';
import quillReducer from '../slices/quillSlice';

export const store = configureStore({
  reducer: {
    quill: quillReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
