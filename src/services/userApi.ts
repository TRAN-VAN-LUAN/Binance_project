import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../setup/axios/intances';
import { getUserFromLocalStorage } from '../utils/auth';

export const fetchAllUser = createAsyncThunk('user/fetchAllUser', async (_, thunkAPI) => {
    try {
        const response = await request.get('user', { signal: thunkAPI.signal });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
});

// export const login = createAsyncThunk('user/login', async (data: IFormLogin) => {
//     try {
//         const response = await request.post('login', data);
//         return response.data;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// });

const getCurrentUserFromLocal = getUserFromLocalStorage();

export const getCurrentUser = createAsyncThunk('user/currentUser', async (_) => {
    try {
        const response = await request.get(`user/${getCurrentUserFromLocal.id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
});
