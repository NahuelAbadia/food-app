import React from 'react'
import CardPlatos from '../platos/CardPlatos';
import { useSelector } from 'react-redux';
import { BiTimeFive } from 'react-icons/bi';
import { GiHealthNormal } from 'react-icons/gi';
import '../../index.css'

const ContenedorMenu = () => {

   const carritoRedux = useSelector(state => state.carrito)
   const total = useSelector(state => state.total)
   const minutos = useSelector(state => state.promMinutos)
   const hScoreProm = useSelector(state => state.promHealthScore)

   return (
      <>
         {carritoRedux.length ?
            <div className="contenedor-cards mt-3 mb-4 bg-light">
               <h1 className="titulos-carrito">Mi Menu:</h1>
               <div className="row mt-3 mb-3 carrito">
                  {carritoRedux.length <= 0 ? null : carritoRedux.map((item, index) => {
                     return <div key={index} className="col-lg-3 col-md-6 col-sm-6">
                        <CardPlatos
                           id={item.id}
                           title={item.title}
                           image={item.image}
                           healthscore={item.healthScore}
                           pricePerServing={item.pricePerServing}
                           readyInMinutes={item.readyInMinutes}
                           plato={item} //Le paso todas las props que tiene el plato
                        />
                     </div>
                  })}
               </div>
               <div className="mt-3 mb-4">
                  <div className="d-flex" style={{ paddingLeft: "20px" }}>
                     <h4 className="fw-bold">Total:</h4>
                     <h4 className="fw-bold" style={{ paddingLeft: "12px" }}>${total.toFixed(2)}</h4>
                  </div>
                  <div className="d-flex" style={{ paddingLeft: "20px" }}>
                     <h4 className="fw-bold">Tiempo:</h4>
                     <h4 className="fw-bold" style={{ paddingLeft: "12px" }}><BiTimeFive /> {minutos} minutos</h4>
                  </div>
                  <div className="d-flex" style={{ paddingLeft: "20px" }}>
                     <h4 className="fw-bold">Promedio de Health Score:</h4>
                     <h4 className="fw-bold" style={{ paddingLeft: "12px" }}><GiHealthNormal /> {hScoreProm.toFixed(2)}</h4>
                  </div>
               </div>
            </div>
            : null
         }
      </>
   )
}

export default ContenedorMenu