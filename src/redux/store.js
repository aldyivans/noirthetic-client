import { configureStore } from "@reduxjs/toolkit";
import { reducers, sagas } from "./reducers";
import { persistStore } from "redux-persist";
import promiseMiddleware from "./middlewares/promiseMiddleware";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  sagaMiddleware,
  promiseMiddleware
]

export const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

sagaMiddleware.run(sagas);
