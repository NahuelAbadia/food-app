import {
   TOKEN,
   SET_TOKEN,
   BUSCAR_PLATOS,
   AGREGAR_PLATOS,
   ELIMINAR_PLATOS,
   DETALLES_PLATO,
   PRECIO_TOTAL_SUMA,
   PRECIO_TOTAL_RESTA,
   LISTO_EN_SUMA,
   LISTO_EN_RESTA,
   HEALTH_SCORE_SUMA,
   HEALTH_SCORE_RESTA,
}
   from '../action/action'

const inicialState = {
   platos: [],
   carrito: [],
   detalles: {},
   total: 0,
   minutos: 0,
   healthScore: 0,
   token: localStorage.getItem("Token") || "",
}

export default function rootReducer(state = inicialState, action) {
   switch (action.type) {
      case BUSCAR_PLATOS:
         return {
            ...state,
            platos: action.payload
         }

      case AGREGAR_PLATOS:
         return {
            ...state,
            carrito: state.carrito.concat(action.payload) //Retorno el state de carrito y lo concateno con las busquedas que seleccione con el boton "Añadir"
         }

      case ELIMINAR_PLATOS:
         return {
            ...state,
            carrito: state.carrito.filter((item) => item.id !== action.payload) //Retorno el state de carrito con los platos que sean diferente del id selecionado para eliminar
         }

      case DETALLES_PLATO:
         return {
            ...state,
            detalles: action.payload,
         }

      case PRECIO_TOTAL_SUMA:
         let precio = state.total
         return {
            ...state,
            total: precio + action.payload
         }

      case PRECIO_TOTAL_RESTA:
         let precioResta = state.total
         return {
            ...state,
            total: precioResta - action.payload
         }

      case LISTO_EN_SUMA:
         let listoEnMinutos = state.minutos
         return {
            ...state,
            minutos: listoEnMinutos + action.payload
         }

      case LISTO_EN_RESTA:
         let listoEnMinutosResta = state.minutos
         return {
            ...state,
            minutos: listoEnMinutosResta - action.payload
         }

      case HEALTH_SCORE_SUMA:
         let hScoreSuma = state.healthScore
         return {
            ...state,
            healthScore: hScoreSuma + action.payload
         }

      case HEALTH_SCORE_RESTA:
         let hScoreResta = state.healthScore
         return {
            ...state,
            healthScore: hScoreResta - action.payload
         }

      case TOKEN:
         return {
            ...state,
            token: action.payload
         }

      case SET_TOKEN:
         return {
            ...state,
            token: action.payload
         }
         
      default:
         return state
   }
}