import { configureStore } from "@reduxjs/toolkit";
import { factsApi } from "./facts";
import { lessonPlanApi } from "./lesson-plan";

export const store = configureStore({
  reducer: {
    [factsApi.reducerPath]: factsApi.reducer,
    [lessonPlanApi.reducerPath]: lessonPlanApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(factsApi.middleware)
      .concat(lessonPlanApi.middleware),
});
