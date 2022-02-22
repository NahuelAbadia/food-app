import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { detallesPlato } from './redux/action/action'
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
            <div className="contenedor-cards row justify-content-center align-items-center mt-4 mb-4" style={{ height: '40rem' }}>
               <div className="col-6 justify-content-center align-items-center center h-100 ">
                  <img src={detallesDelPlato.image} alt="plato" style={{ width: "100%" }} />
               </div>
               <div className="col-6 d-flex align-items-center justify-content-center  p-5 h-100">
                  <div className="row">
                     <h1 className="" style={{ fontWeight: 700 }}>{detallesDelPlato.title}</h1>
                     <h2 className="mt-5" style={{ fontWeight: 700 }}>${detallesDelPlato.pricePerServing}</h2>
                     <h3 className="mt-3">Health Score: <b>{detallesDelPlato.healthScore}</b></h3>
                     <h3 className="mt-3">Listo en: <b>{detallesDelPlato.readyInMinutes} minutos</b></h3>
                     {detallesDelPlato.vegan ?
                        <div className="col form-check">
                           <label className="form-check-label mt-3" for="flexCheckDefault">Vegano:</label>
                           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked disabled />
                        </div>
                        :
                        <div className="col form-check">
                           <label className="form-check-label mt-3" for="flexCheckDefault">Vegano:</label>
                           <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled />
                        </div>
                     }
                     <button className="btn btn-primary mt-5">Mas información</button>
                  </div>
               </div>
            </div>
            <div className="col center bg-purple">
               <Link
                  to={"/home"}
                  style={{ textDecoration: "none", color: "black", fontWeight: "600", fontSize: "20px" }}
               >
                  Volver atras
               </Link>
            </div>
         </div>
      </>
   )
}

export default DescPlatos