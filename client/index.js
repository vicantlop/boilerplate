import "../public/style.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Login, Signup } from "./components/AuthForm";

ReactDOM.render(
  <Provider store={store}>
    <div>
      Hello, world!
      <Login />
      <Signup />
    </div>
  </Provider>,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);
