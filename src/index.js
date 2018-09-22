import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware, ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";

import reducers from "./reducers";
import "./index.css";
import App from "./App";
import SingleRecipe from "./containers/SingleRecipe";

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(routerMiddleware(history), thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path={`/:id`} component={SingleRecipe} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
