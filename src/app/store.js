import { configureStore } from "@reduxjs/toolkit";
import mahasiswaReducer from '../features/mahasiswaSlice';

export const store = configureStore({
    reducer: {
        mahasiswa: mahasiswaReducer
    }
})