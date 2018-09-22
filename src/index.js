import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

import "./index.css";
import App from "./App";

const storeWithMiddleWare = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleWare(reducers)}>
    <App />
  </Provider>,

  document.getElementById("root")
);
