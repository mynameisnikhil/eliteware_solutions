import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./components/redux/store";
import { Provider } from "react-redux";
import ReactPullToRefresh from "react-pull-to-refresh";

const root = ReactDOM.createRoot(document.getElementById("root"));

function handleRefresh(resolve, reject) {
  window.location.reload();
  resolve();
}
root.render(
  <Provider store={store}>
    <ReactPullToRefresh onRefresh={handleRefresh}>
      <App />
    </ReactPullToRefresh>
  </Provider>
);
