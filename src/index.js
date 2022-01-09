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

const logger = (store) => (dispatch) => (action) => {
  return dispatch(action);
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".root")
);
