import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
//se ejecuta antes de que la accion del dispatch llege al reducer, me va a permitir ver la accion
//y el estado antes y despues del dispatch
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(
  Boolean //esto es hermoso, filtro los false en un array
);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//composicion de potenciadores, de esta forma es un proceso de combinar varias funciones "enhancers" en una sola función compuesta
//que mejora el comportamiento de los "reducers" en Redux.
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
