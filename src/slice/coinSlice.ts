import { createSlice } from '@reduxjs/toolkit';
import { getCoinApi, getCoinPriceByName } from '../services/coinApI';

export interface ICoins {
    symbol?: string;
    priceChange?: string;
    priceChangePercent?: string;
    weightedAvgPrice?: string;
    prevClosePrice?: string;
    lastPrice?: string;
    lastQty?: string;
    bidPrice?: string;
    bidQty?: string;
    askPrice?: string;
    askQty?: string;
    openPrice?: string;
    highPrice?: string;
    lowPrice?: string;
    volume?: string;
    quoteVolume?: string;
    openTime?: number;
    closeTime?: number;
    firstId?: number;
    lastId?: number;
    count?: number;
}

export interface ICoinChart {
    id?: string;
    price?: string;
    qty?: string;
    quote_qty?: string;
    time?: string;
    is_buyer_maker?: boolean;
}

interface IInitCoin {
    listCoin: ICoins[];
    listDetailACoin: ICoinChart[];
    isLoading?: boolean;
    isError?: boolean;
}

const initCoin: IInitCoin = {
    listCoin: [] as ICoins[],
    listDetailACoin: [] as ICoinChart[],
    isLoading: false,
    isError: false,
};

export const coinSlice = createSlice({
    name: 'coin',
    initialState: initCoin,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCoinApi.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getCoinApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.listCoin = action.payload;
            })
            .addCase(getCoinApi.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            });
        builder
            .addCase(getCoinPriceByName.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getCoinPriceByName.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.listDetailACoin = action.payload;
            })
            .addCase(getCoinPriceByName.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            });
    },
});

export default coinSlice.reducer;
