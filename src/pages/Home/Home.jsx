//import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
  return (
    <div className = "containerHome">
      <h1>Welcome</h1>
      <p>Ini Adalah Home Page dari Aplikasi Note Sederhana Kita</p>
      <p>Silahkan Edit Stylenya</p>
      <Link className="buttonLink" to={"/notes"}>Buat Catatan...</Link>
    </div>

  )
}

export default Home
 