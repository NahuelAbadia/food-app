import React from 'react'
import MiMenu from './MiMenu'
import { useSelector } from 'react-redux';
import '../../index.css'

const ContenedorMenu = () => {

   const carritoRedux = useSelector(state => state.carrito)
   const total = useSelector(state => state.total)
   const minutos = useSelector(state => state.minutos)
   const hScoreProm = useSelector(state => state.healthScore)

   return (
      <>
         {carritoRedux.length ?
            <div className="contenedor-cards mt-3 mb-4 bg-light">
               <h1 className="titulos-carrito">Mi Menu:</h1>
                  <div className="row mt-3 mb-3 carrito">
                        {carritoRedux.length <= 0 ? null : carritoRedux.map((item) => {
                           return <div className="col-lg-3 col-md-6 col-sm-6">
                              <MiMenu
                                 id={item.id}
                                 title={item.title}
                                 image={item.image}
                                 healthScore={item.healthScore}
                                 pricePerServing={item.pricePerServing}
                                 readyInMinutes={item.readyInMinutes}
                                 plato={item} //Le paso todas las props que tiene el plato
                              />
                           </div>
                        })}
                  </div>
               <div className="mt-3 mb-4">
                  <h4 className="info-carrito">Total: ${total.toFixed(2)}</h4>
                  <h4 className="info-carrito">Tus platos estaran listos en: {minutos} minutos</h4>
                  <h4 className="info-carrito">Promedio de Health Score: {hScoreProm}</h4>
               </div>
            </div>
            : null
         }
      </>
   )
}

export default ContenedorMenu