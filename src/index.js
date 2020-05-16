import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { startSetCustomers } from "./actions/coursesAction";
import { startSetExperts } from "./actions/expertActions";

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());

if (localStorage.getItem("authToken")) {
  store.dispatch(startSetCustomers());
  store.dispatch(startSetExperts());
}

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
