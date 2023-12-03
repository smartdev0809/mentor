import { configureStore } from "@reduxjs/toolkit";
import { chatGptApi } from "./chatGpt";
import { artsApi } from "./art";

export const store = configureStore({
  reducer: {
    [chatGptApi.reducerPath]: chatGptApi.reducer,
    [artsApi.reducerPath]: artsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(chatGptApi.middleware)
      .concat(artsApi.middleware),
});
