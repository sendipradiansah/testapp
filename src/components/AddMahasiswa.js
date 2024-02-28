import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveMahasiswa } from '../features/mahasiswaSlice';
import { useNavigate } from 'react-router-dom';

const AddMahasiswa = () => {

  const[nim, setNim] = useState();
  const[nama, setNama] = useState();
  const[alamat, setAlamat] = useState();
  const[jurusan, setJurusan] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createMahasiswa = async(e) => {
    e.preventDefault();
    await dispatch(saveMahasiswa({nim, nama, alamat, jurusan}));
    navigate("/view");
  }

  return (
    <div className="shadow-none p-5 mb-5 bg-light rounded">
      <form onSubmit={createMahasiswa}>
        <div className="mb-3">
          <label for="nim" className="form-label">Nim</label>
          <input type="text" className="form-control" id="nim" placeholder="Nim" autoComplete="off" value={nim} onChange={(e) => setNim(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label for="nama" className="form-label">Nama</label>
          <input type="text" className="form-control" id="nama" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label for="alamat" className="form-label">Alamat</label>
          <input type="text" className="form-control" id="alamat" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} required/>
        </div>
        <div className="mb-5">
          <label for="jurusan" className="form-label">Jurusan</label>
          <input type="text" className="form-control" id="jurusan" placeholder="Jurusan" value={jurusan} onChange={(e) => setJurusan(e.target.value)} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddMahasiswa;
