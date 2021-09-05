import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { reactReduxFirebase } from "react-redux-firebase";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import "./css/index.css";
import firebase from "./services/firebase";
import reducers from "./store/reducers";


const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
  createStore
);
const store = createStoreWithFirebase(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
