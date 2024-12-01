import { configureStore } from "@reduxjs/toolkit";
import { destinationAPI } from "../api/destinationApi";
import { randomAPI } from "../api/randomApi";

export const store = configureStore({
  reducer: {
    [destinationAPI.reducerPath]: destinationAPI.reducer,
    [randomAPI.reducerPath]: randomAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(destinationAPI.middleware)
      .concat(randomAPI.middleware),
});
