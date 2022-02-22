import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/rootReducer'
import thunk from 'redux-thunk'

//En la store se le pasan todos los reducers, por eso le paso la constante creada arriba que contiene todos los reducers
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
)

export default store