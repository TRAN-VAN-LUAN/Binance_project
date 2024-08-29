import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../models/IUser';
import { fetchAllUser, getCurrentUser } from '../services/userApi';
import { clearLocalStorage, getAccessFromLocalStorage } from '../utils/auth';

interface IinitStateSliceUser {
    listUser: IUser[];
    currentUser: IUser;
    isAuthencated: boolean;
    isLoading: boolean;
    isError: boolean;
}

const initialState: IinitStateSliceUser = {
    listUser: [] as IUser[],
    currentUser: {} as IUser,
    isAuthencated: Boolean(getAccessFromLocalStorage()),
    isLoading: false,
    isError: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            (state.isAuthencated = false), clearLocalStorage();
        },
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchAllUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.listUser = action.payload;
            })
            .addCase(fetchAllUser.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            });
        builder
            .addCase(getCurrentUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isAuthencated = Boolean(getAccessFromLocalStorage());
                state.currentUser = action.payload;
            })
            .addCase(getCurrentUser.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            });
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
