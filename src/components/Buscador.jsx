import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { buscarPlatos, } from './redux/action/action';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup'
import "../index.css";

const Buscador = () => {

   //State para cargar el titulo del menu en el input
   const [menu, setMenu] = useState({
      titulo: "",
   })
   const { titulo } = menu

   //State para el Spinner
   const [cargando, setCargando] = useState(false)
   
   const handleChange = e => {
      setMenu({
         ...menu,
         [e.target.name]: e.target.value
      })
   }

   const handleSubmit = e => {
      e.preventDefault()
      //Mostrar el spinner
      setCargando(true)
      setTimeout(() => {
         setCargando(true)
      }, 1500)
      dispatch(buscarPlatos(titulo))
      console.log(platos)
   }

   const dispatch = useDispatch() //useDispatch conecta las action con los components para poder ser usados
   const platos = useSelector(state => state.platos) //useSelector conecta el state del reducer con el component,
   // este solo sirve para mostrar el resultado de la accion buscarPlatos.

   return (
      <div className="col">
         <form
            onSubmit={handleSubmit}
         >
            <div className="buscador">
               <input
                  className="formi"
                  type="text"
                  name="titulo"
                  placeholder="Buscar tu plato en Nappi..."
                  value={titulo}
                  onChange={handleChange}
               />
               <input
                  className="boton btn btn-primary"
                  type="submit"
                  value="Buscar"
               />
            </div>
         </form>

         {/* <Formik
            initialValues={{
               plato: "",
            }}
            onSubmit={(values) => {
               handleSubmit(values)
            }}
            validationSchema={nuevoPlatoSchema}
         >
            {() => {
               return (
                  <Form>
                     <div className="buscador">
                        <Field
                           name="plato"
                           type="text"
                           className="form-control"
                           placeholder="Buscar tu plato en Nappi..."
                        />
                        <input
                           className="boton btn btn-primary"
                           type="submit"
                           value="Buscar"
                        />
                     </div>
                  </Form>
               )
            }}
         </Formik> */}
      </div>
   )
}

export default Buscador