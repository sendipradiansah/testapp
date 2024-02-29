import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMahasiswa, mahasiswaSelector, deleteMahasiswa } from '../features/mahasiswaSlice';
import { Link } from 'react-router-dom';

const ShowMahasiswa = () => {

  const dispatch = useDispatch();
  const mahasiswa = useSelector(mahasiswaSelector.selectAll); 

  //search
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if(searchInput !== ''){
      const filteredData = mahasiswa.filter(item => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
      });
      setSearchResults(filteredData);
    }

  }
  ////////

  useEffect(() => {
    dispatch(getMahasiswa());
  }, [dispatch])

  return (
    <div>
      <div className="d-flex justify-content-between">
        <Link to="/add" className="btn btn-success mb-4">Tambah</Link>
        <div className="col-md-3 col-md-3">
          <input type="text" className="form-control" id="search" placeholder="Search..." onChange={(e) => searchItems(e.target.value)}></input>
        </div>
      </div>
      <table className="table table-bordered">
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
          {
          searchInput.length > 1 ? 
          (
            searchResults.map((item, index) => {
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
            })
          )
          :
          (
            mahasiswa.map((item, index) => {
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
            })
          )
        }
        </tbody>
      </table>
    </div>
  )
}

export default ShowMahasiswa;
