import React from 'react'
import Buscador from './Buscador'

const Landing = () => {
  return (
    <div className="container-fluid fondo">
      <div className="row mx-5">
        <div className="d-flex flex-column justify-content-center align-center " style={{ height: "100vh" }}>
          <div className="d-flex flex-column justify-content-evenly align-center alert align-middle bg-dark bg-opacity-75" style={{ height: "60%" }}>
            <div className="d-flex justify-content-center ">
              <div style={{ width: "600px" }}>
                <h1 className="text-center text-white fw-bold border-bottom border-3 border-light" style={{ fontSize: "56px", }}>¡Bienvenidos a Nappi!</h1>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between align-center text-light" >
              <h2 className="fw-light text-center">Esta es una aplicación para crear una carta de menú con los platos que desees. Puedes incluir hasta 4 platos!</h2>
              <h2 className="fw-light text-center">Empieza buscando tu comida favorita</h2>
              <div className="d-flex justify-content-center">
                <div className="py-3 rounded w-75">
                  <Buscador />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing