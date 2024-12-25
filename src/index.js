import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import DestinationIndex from "./Components/DestinationIndex";
import RandomDestination from "./Components/RandomDestination";
import Header from "./layout/Header";
import { store } from "./Redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <DestinationIndex />
      <RandomDestination />
    </Provider>
  </React.StrictMode>
);
