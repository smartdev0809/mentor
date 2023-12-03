import { configureStore } from "@reduxjs/toolkit";
import { chatGptApi } from "./chatGpt";

export const store = configureStore({
  reducer: {
    [chatGptApi.reducerPath]: chatGptApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatGptApi.middleware),
});
