import React from "react";
import AddMahasiswa from "./components/AddMahasiswa";
import ShowMahasiswa from "./components/ShowMahasiswa";
import EditMahasiswa from "./components/EditMahasiswa";
import Home from "./app/Home/Home";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="menu">
          <Link to="/" className="link">Home</Link>
          <Link to="/view" className="link">Mahasiswa</Link>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/view" element={<ShowMahasiswa />}></Route>
          <Route path="/add" element={<AddMahasiswa />}></Route>
          <Route path="/edit/:id" element={<EditMahasiswa />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
