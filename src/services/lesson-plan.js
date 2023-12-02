import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const openAiKey = import.meta.env.VITE_OPEN_AI_API_KEY;

export const lessonPlanApi = createApi({
  reducerPath: "lessonPlanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openai.com/v1/chat/completions",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${openAiKey}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPlan: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: {
          model: 'gpt-3.5-turbo',
          messages: data.messages,
        },
      }),
    }),
  }),
});

export const { useGetLessonPlanMutation } = lessonPlanApi;