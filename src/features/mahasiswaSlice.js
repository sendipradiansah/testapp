import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getMahasiswa = createAsyncThunk("mahasiswa/getMahasiswa", async() => {
    const response = await axios.get('http://localhost:8000/mahasiswa');
    return response.data;
})

export const saveMahasiswa = createAsyncThunk("mahasiswa/saveMahasiswa", async({nim, nama, alamat, jurusan}) => {
    const response = await axios.post('http://localhost:8000/mahasiswa', {nim, nama, alamat, jurusan});
    return response.data;
})

export const updateMahasiswa = createAsyncThunk("mahasiswa/updateMahasiswa", async({id, nim, nama, alamat, jurusan}) => {
    const response = await axios.patch(`http://localhost:8000/mahasiswa/${id}`, {nim, nama, alamat, jurusan});
    return response.data;
})

export const deleteMahasiswa = createAsyncThunk("mahasiswa/deleteMahasiswa", async(id) => {
    await axios.delete(`http://localhost:8000/mahasiswa/${id}`);
    return id;
})

const mahasiswaEntity = createEntityAdapter({
    selectId: (mahasiswa) => mahasiswa.id
})

const mahasiswaSlice = createSlice({
    name: "mahasiswa",
    initialState: mahasiswaEntity.getInitialState(),
    extraReducers: builder => {
        builder.addCase(getMahasiswa.fulfilled, (state, action) => {
            mahasiswaEntity.setAll(state, action.payload);
        });
        builder.addCase(saveMahasiswa.fulfilled, (state, action) => {
            mahasiswaEntity.addOne(state, action.payload);
        });
        builder.addCase(deleteMahasiswa.fulfilled, (state, action) => {
            mahasiswaEntity.removeOne(state, action.payload);
        });
        builder.addCase(updateMahasiswa.fulfilled, (state, action) => {
            mahasiswaEntity.updateOne(state, { id: action.payload.id, updates: action.payload })
        })
    }
})

export const mahasiswaSelector = mahasiswaEntity.getSelectors(state => state.mahasiswa)
export default mahasiswaSlice.reducer;