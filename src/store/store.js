import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger"

import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }
  
    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('currentState: ', store.getState());
  
    next(action);
  
    console.log('next state: ', store.getState());
  };
  
//se ejecuta antes de que la accion del dispatch llege al reducer, me va a permitir ver la accion
//y el estado antes y despues del dispatch
const middleWares = [loggerMiddleware]

//composicion de potenciadores, de esta forma es un proceso de combinar varias funciones "enhancers" en una sola función compuesta 
//que mejora el comportamiento de los "reducers" en Redux.
const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composeEnhancers)