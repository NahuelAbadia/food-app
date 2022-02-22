import axios from "axios"

// const apiKey = `790c19bb62e647dfa16d07f8fe83851f`
// const apiKey = `bc57d855899b4bfda4d2cc6e158914ce`
// const apiKey = `b3bfeb277ec149fcb4a10c9d5d607776`
const apiKey = `0b5f53270b7447f78f17dd235a9bf7e2`

export const BUSCAR_PLATOS = "BUSCAR_PLATOS"
export const AGREGAR_PLATOS = "AGREGAR_PLATOS"
export const ELIMINAR_PLATOS = "ELIMINAR_PLATOS"
export const DETALLES_PLATO = "DETALLES_PLATO"
export const PRECIO_TOTAL_SUMA = "PRECIO_TOTAL_SUMA"
export const PRECIO_TOTAL_RESTA = "PRECIO_TOTAL_RESTA"
export const LISTO_EN_SUMA = "LISTO_EN_SUMA"
export const LISTO_EN_RESTA = "LISTO_EN_RESTA"
export const HEALTH_SCORE_SUMA = "HEALTH_SCORE_SUMA"
export const HEALTH_SCORE_RESTA = "HEALTH_SCORE_RESTA"

export function buscarPlatos(titulo) {
   //Cada vez que necesite conectarme a una API tengo que usar "dispatch" para poder consultarla y poder guardar los datos.
   return async function (dispatch) {
      try {
         const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=18&query=${titulo}&addRecipeInformation=true`

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

export function detallesPlato(id) {
   return async function (dispatch) {
      try {
         const detalles = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
         //Guardo el tipo de accion y el payload que es la info que extraigo de la API
         return dispatch({
            type: DETALLES_PLATO,
            payload: detalles.data,
         })
      } catch (error) {
         console.log(error)
      }
   }
}

export function precioTotalSuma(payload){
   return {
      type: PRECIO_TOTAL_SUMA,
      payload
   }
}

export function precioTotalResta(payload){
   return {
      type: PRECIO_TOTAL_RESTA,
      payload
   }
}

export function listoEnSuma(payload){
   return {
      type:LISTO_EN_SUMA,
      payload
   }
}

export function listoEnResta(payload){
   return {
      type:LISTO_EN_RESTA,
      payload
   }
}

export function healthScoreSuma(payload){
   return {
      type:HEALTH_SCORE_SUMA,
      payload
   }
}

export function healthScoreResta(payload){
   return {
      type:HEALTH_SCORE_RESTA,
      payload
   }
}