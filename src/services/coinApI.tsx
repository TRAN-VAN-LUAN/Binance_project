import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCoinApi = createAsyncThunk('coin/getCoinApi', async (_) => {
    try {
        const response = await axios.get(`https://api.binance.com/api/v3/ticker/24hr`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
});

export const getCoinPriceByName = createAsyncThunk('coin/getCoinPriceByName', async (_) => {
    try {
        const response = await axios.get(`http://localhost:3000/BTCUSDT`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
    }
});
