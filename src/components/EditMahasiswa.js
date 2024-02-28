import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMahasiswa, mahasiswaSelector, updateMahasiswa } from '../features/mahasiswaSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditMahasiswa = () => {

  const[nim, setNim] = useState();
  const[nama, setNama] = useState();
  const[alamat, setAlamat] = useState();
  const[jurusan, setJurusan] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector((state) => mahasiswaSelector.selectById(state, id));

  useEffect(() => {
    dispatch(getMahasiswa());
  }, [dispatch])

  useEffect(() => {
    if(product){
      setNim(product.nim);
      setNama(product.nama);
      setAlamat(product.alamat);
      setJurusan(product.jurusan);
    }
  }, [product]);

  const handleUpdate = async(e) => {
    e.preventDefault();
    await dispatch(updateMahasiswa(({id, nim, nama, alamat, jurusan})));
    navigate("/view");
  }


  return (
    <div className="shadow-none p-5 mb-5 bg-light rounded">
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label for="nim" className="form-label">Nim</label>
          <input type="text" className="form-control" id="nim" placeholder="Nim" value={nim} onChange={(e) => setNim(e.target.value)} readOnly/>
        </div>
        <div className="mb-3">
          <label for="nama" className="form-label">Nama</label>
          <input type="text" className="form-control" id="nama" placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label for="alamat" className="form-label">Alamat</label>
          <input type="text" className="form-control" id="alamat" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)}/>
        </div>
        <div className="mb-5">
          <label for="jurusan" className="form-label">Jurusan</label>
          <input type="text" className="form-control" id="jurusan" placeholder="Jurusan" value={jurusan} onChange={(e) => setJurusan(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )
}

export default EditMahasiswa;
