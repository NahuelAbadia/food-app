import axios from "axios"

const apiKey = "176311675bab4fc0b6d062692781f1a7"

export const TOKEN = "TOKEN"
export const SET_TOKEN = "SET_TOKEN"
export const BUSCAR_PLATOS = "BUSCAR_PLATOS"
export const AGREGAR_PLATOS = "AGREGAR_PLATOS"
export const ELIMINAR_PLATOS = "ELIMINAR_PLATOS"
export const PRECIO_TOTAL_SUMA = "PRECIO_TOTAL_SUMA"
export const PRECIO_TOTAL_RESTA = "PRECIO_TOTAL_RESTA"
export const LISTO_EN_SUMA = "LISTO_EN_SUMA"
export const LISTO_EN_RESTA = "LISTO_EN_RESTA"
export const HEALTH_SCORE_SUMA = "HEALTH_SCORE_SUMA"
export const HEALTH_SCORE_RESTA = "HEALTH_SCORE_RESTA"
export const LOADING = "LOADING"

export function buscarPlatos(titulo) {
   //Cada vez que necesite conectarme a una API tengo que usar "dispatch" para poder consultarla y poder guardar los datos.
   return async function (dispatch) {
      dispatch(loading())
      try {
         const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=30&query=${titulo}&addRecipeInformation=true`

         const resultado = await axios.get(URL)
         //Guardo el tipo de accion y el payload que es la info que extraigo de la API
         return dispatch({
            type: BUSCAR_PLATOS,
            payload: resultado.data.results,
         })

      } catch (error) {
         console.log(error);
      }
   }
}

export function agregarPlatos(payload) {
   return {
      type: AGREGAR_PLATOS,
      payload
   }
}

export function eliminarPlatos(id) {
   return {
      type: ELIMINAR_PLATOS,
      payload: id,
   }
}

export function precioTotalSuma(payload) {
   return {
      type: PRECIO_TOTAL_SUMA,
      payload
   }
}

export function precioTotalResta(payload) {
   return {
      type: PRECIO_TOTAL_RESTA,
      payload
   }
}

export function listoEnSuma(payload) {
   return {
      type: LISTO_EN_SUMA,
      payload
   }
}

export function listoEnResta(payload) {
   return {
      type: LISTO_EN_RESTA,
      payload
   }
}

export function healthScoreSuma(payload) {
   return {
      type: HEALTH_SCORE_SUMA,
      payload
   }
}

export function healthScoreResta(payload) {
   return {
      type: HEALTH_SCORE_RESTA,
      payload
   }
}

export function userToken(payload) {
   return {
      type: TOKEN,
      payload
   }
}

export function setToken(payload) {
   return {
      type: SET_TOKEN,
      payload
   }
}

export function loading() {
   return {
      type: LOADING,
   }
}