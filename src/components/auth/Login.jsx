import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Spinner from '../spinner/Spinner'
import '../../index.css'
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/action/action';

const Login = () => {

   // state para iniciar sesion
   const [usuario, setUsuario] = useState({
      email: "",
      password: "",
   });
   //Extraemos email y password de usuario
   const { email, password } = usuario

   //Variable necesaria para redireccionar al usuario a otra ruta
   let navigate = useNavigate();

   //Variable para la alert
   const Swal = require('sweetalert2')

   //State para el Spinner
   const [cargando, setCargando] = useState(false)

   //Funcion para guardar el token
   const setLocalStorage = value => {
      try {
         localStorage.setItem("Token", value)
      } catch (error) {
         console.error(error)
      }
   }

   //dispatch para guardar el token en redux
   const dispatch = useDispatch()

   const onChange = e => {
      setUsuario({
         ...usuario,
         [e.target.name]: e.target.value
      })
   }

   const onSubmit = async (e) => {
      e.preventDefault()

      // Validar que no haya campos vacios
      if (email.trim() === '' || password.trim() === '') {
         return Swal.fire({
            icon: 'warning',
            title: 'Todos los campos son requeridos',
         })
      } else {
         try {
            //Mostrar el spinner
            setCargando(true)

            const result = await axios.post(`http://challenge-react.alkemy.org/`, {
               email: email,
               password: password
            })

            if (result.data.token) {
               console.log(result.data.token);
               //Guardar en redux
               dispatch(setToken(result.data.token))
               //Guardo el token en local storage
               setLocalStorage(result.data.token)
               setTimeout(() => {
                  setCargando(true)
                  //Navego al home
                  navigate("/home");
               }, 1500)
            }
         } catch (error) {
            //Cambiar el estado del spinner a false para que no se vea
            setCargando(false)
            //Navego al login de nuevo 
            navigate("/");
            //Muestro una alerta con sweet alert
            return Swal.fire({
               icon: 'error',
               title: 'Ingresa una cuenta y contraseña válidas para continuar',
            })
         }
      }
   }

   const componente = (cargando) ? <Spinner /> : <input type="submit" className="btnn btn-primario btn-block" value="Iniciar Sesión" />

   return (
      <div className="form-usuario">
         <div className="contenedor-form sombra-dark ">
            <h1 className="titulo">Iniciar Sesion</h1>
            <form
               onSubmit={onSubmit}
            >
               <div className="campo-form">
                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Ingrese su email"
                     value={email}
                     onChange={onChange}
                  />
               </div>
               <div className="campo-form">
                  <label htmlFor="password">Password</label>
                  <input
                     type="password"
                     id="password"
                     name="password"
                     placeholder="Ingrese su contraseña"
                     value={password}
                     onChange={onChange}
                  />
               </div>
               <div className="campo-form">
                  {componente}
               </div>
            </form>
         </div>
      </div>
   )
}

export default Login;
