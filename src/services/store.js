import { configureStore } from "@reduxjs/toolkit";
import { chatGptApi } from "./chatGpt";
import { artsApi } from "./art";
import { articleApi } from "./article";

export const store = configureStore({
  reducer: {
    [chatGptApi.reducerPath]: chatGptApi.reducer,
    [artsApi.reducerPath]: artsApi.reducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(chatGptApi.middleware)
      .concat(artsApi.middleware)
      .concat(articleApi.middleware),
});
