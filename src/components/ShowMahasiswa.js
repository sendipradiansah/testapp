import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMahasiswa, mahasiswaSelector, deleteMahasiswa } from '../features/mahasiswaSlice';
import { Link } from 'react-router-dom';

const ShowMahasiswa = () => {

  const dispatch = useDispatch();
  const mahasiswa = useSelector(mahasiswaSelector.selectAll); 

  useEffect(() => {
    dispatch(getMahasiswa());
  }, [dispatch])

  return (
    <div>
      <Link to="/add" className="btn btn-success mb-4">Tambah</Link>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">No.</th>
            <th className="text-center">Nim</th>
            <th className="text-center">Nama</th>
            <th className="text-center">Alamat</th>
            <th className="text-center">Jurusan</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((item, index) => {
            return(
              <tr key={index}>
                <td className="text-center">{index+1}.</td>
                <td>{item.nim}</td>
                <td>{item.nama}</td>
                <td>{item.alamat}</td>
                <td>{item.jurusan}</td>
                <td className="text-center p-3">
                  <Link to={`/edit/${item.id}`} className="btn btn-primary">Ubah</Link>&nbsp;&nbsp;&nbsp;
                  <button onClick={() => {if(window.confirm(`Apakah anda yakin menghapus NIM ${item.nim}?`)) dispatch(deleteMahasiswa(item.id))}}className="btn btn-danger">Hapus</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ShowMahasiswa;
