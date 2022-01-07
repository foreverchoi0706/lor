import React from "react";
import reactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
/**@components */
import App from "./App.jsx";
/**@reducers */
import rootReducer from "./reducers/_root";
/**@saga */
import rootSaga from "./sagas/_root";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".root")
);
