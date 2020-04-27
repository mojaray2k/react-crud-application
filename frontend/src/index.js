import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./Redux/reducer";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
    // other store enhancers if any
  )
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
