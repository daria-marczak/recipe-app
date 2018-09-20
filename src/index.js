import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ReduxPromise from "redux-promise";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

import "./index.css";
import App from "./App";

const storeWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleWare(reducers)}>
    <App />
  </Provider>,

  document.getElementById("root")
);
