import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMahasiswa, mahasiswaSelector } from "../../features/mahasiswaSlice";
import './Home.css';


const Home = () => {

    const dispatch = useDispatch();
    const mahasiswa = useSelector(mahasiswaSelector.selectAll);

    useEffect(() => {
        dispatch(getMahasiswa());
    }, [dispatch]);

    return(
        <div className="contentHome">
            <div className="box">
                <h2>Database Mahasiswa</h2>  
                <h5>Jumlah Mahasiswa: <span style={{fontWeight: "bold"}}>{mahasiswa.length}</span></h5>
            </div>
        </div>
    )
}

export default Home;