import React from 'react';
import Navbar from './Navbar';
import ContenedorMenu from '../ContenedorMenu';
import ContenedorPlatos from '../ContenedorPlatos';
import "../../index.css";

const Home = () => {
   return (
      <div className="container-fluid">
         <Navbar />
         <ContenedorMenu />
         <ContenedorPlatos />
      </div>
   )
}

export default Home;