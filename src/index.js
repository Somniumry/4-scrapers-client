import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";
import News from "./service/news";
import axios from "axios";
import "./index.css";

const httpClient = axios.create({
  baseURL: "http://52.79.228.106",
});

const news = new News(httpClient);

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window._REDUX_DEVTOOLS_EXTENTION__ &&
        window.__REDUX_DEVTOOLS__EXTENTION__()
    )}
  >
    <App news={news} />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
