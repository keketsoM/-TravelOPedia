import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { destinationAPI } from "./api/destinationApi";
import DestinationIndex from "./Components/DestinationIndex";
import Header from "./layout/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={destinationAPI}>
      <Header />
      <DestinationIndex />
    </ApiProvider>
  </React.StrictMode>
);
