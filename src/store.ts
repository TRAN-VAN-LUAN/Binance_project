import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/useSlice';
import { useDispatch } from 'react-redux';
import coinReducer from './slice/coinSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        coin: coinReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
