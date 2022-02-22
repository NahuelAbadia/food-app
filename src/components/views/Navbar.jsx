import React from 'react';
import Buscador from '../Buscador'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="row bg-purple">
        <nav className="navbar navbar-light bg-purple contenedor-navbar">
          <div className="col-lg-4 col-md-3 col-sm-3 mx-2 nappi">
            <Link
              to={"/home"}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: 700,
                fontSize: "34px",
              }}
            >
              Nappi
            </Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 mx-5 buscador">
            <Buscador />
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;
