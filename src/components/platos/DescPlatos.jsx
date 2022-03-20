import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { detallesPlato } from '../../redux/action/action'
import { useEffect } from 'react'

const DescPlatos = () => {

   const { id } = useParams()

   const dispatch = useDispatch()
   const detallesDelPlato = useSelector(state => state.detalles) //useSelector conecta el state del reducer con el component

   useEffect(() => {
      dispatch(detallesPlato(id))
   }, [dispatch, id])

   console.log(detallesDelPlato)

   return (
      <>
         <div className="container">
            <div
               className="d-flex mt-4 align-items-center"
               style={{ height: '90vh' }}
            >
               <div
                  className="contenedor-desc-cards row mt-4 mb-4 bg-light d-flex justify-content-center align-items-center"
               >
                  <div className="col-lg-6 col-md-6 col-sm-12 h-100 d-flex align-items-center">
                     <img
                        src={detallesDelPlato.image}
                        alt="plato"
                        style={{ width: "100%" }}
                     />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center p-5 h-100">
                     <div className="row">
                        <h1 style={{ fontWeight: 700 }}>{detallesDelPlato.title}</h1>
                        <h1 className="mt-5" style={{ fontWeight: 700 }}>${detallesDelPlato.pricePerServing}</h1>
                        <h3 className="mt-3"><b>Health Score:</b> {detallesDelPlato.healthScore}</h3>
                        <h3 className="mt-3"><b>Listo en:</b> {detallesDelPlato.readyInMinutes} minutos</h3>
                        {detallesDelPlato.vegan ?
                           <div className="d-flex mt-3">
                              <h3><b>Vegano:</b></h3>
                              <input
                                 className="form-check-input mx-3 mt-2"
                                 type="checkbox"
                                 value=""
                                 id="flexCheckDefault"
                                 checked disabled
                                 style={{ fontSize: "23px" }}
                              />
                           </div>
                           :
                           <div className="d-flex mt-3">
                              <h3><b>Vegano:</b></h3>
                              <input
                                 className="form-check-input mx-3 mt-2"
                                 type="checkbox"
                                 value=""
                                 id="flexCheckDefault"
                                 disabled
                                 style={{ fontSize: "23px" }}
                              />
                           </div>
                        }
                        <a href={detallesDelPlato.sourceUrl} target="_blank" rel='noreferrer' className="btn btn-primary mt-5">Mas información</a>
                     </div>
                  </div>
                  <div className="col-12 mt-4 mb-4 d-flex justify-content-center">
                     <Link
                        to={"/home"}
                        style={{ textDecoration: "none", color: "black", fontWeight: "600", fontSize: "20px" }}
                     >
                        <button className="btn btn-primary">
                           Volver atras
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default DescPlatos