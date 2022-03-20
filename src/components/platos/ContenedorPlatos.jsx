import React from 'react'
import Platos from './Platos';
import { useSelector } from 'react-redux'

const ContenedorPlatos = () => {

   const platos = useSelector(state => state.platos) //useSelector conecta el state del reducer con el component

   return (
      <>
         {/* Muestra todos los platos que trae la llamada a la API */}
         {platos.length ?
            <div className="contenedor-cards mt-3 mb-4 bg-light">
               <div className="container">
                  <div className="row mt-3 mb-3">
                     {platos.map((item, index) => {
                        return <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                           <Platos
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              healthscore={item.healthScore}
                              pricePerServing={item.pricePerServing}
                              readyInMinutes={item.readyInMinutes}
                              plato={item} //le paso todas las props que tiene el plato
                           >
                           </Platos>
                        </div>
                     })}
                  </div>
               </div>
            </div>
            : null}
      </>
   )
}

export default ContenedorPlatos
