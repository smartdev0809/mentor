import { configureStore } from "@reduxjs/toolkit";
import { factsApi } from "./facts";
import { lessonPlanApi } from "./lesson-plan";
import { artsApi } from "./art";

export const store = configureStore({
  reducer: {
    [factsApi.reducerPath]: factsApi.reducer,
    [artsApi.reducerPath]: artsApi.reducer,
    [lessonPlanApi.reducerPath]: lessonPlanApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(factsApi.middleware)
      .concat(artsApi.middleware)
      .concat(lessonPlanApi.middleware),
});
