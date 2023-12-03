import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const openAiKey = import.meta.env.VITE_OPEN_AI_API_KEY;

export const artsApi = createApi({
  reducerPath: "artsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openai.com/v1/images/generations",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${openAiKey}`);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArts: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: {
          model: "dall-e-3",
          prompt: data.prompt,
          n: 1,
          size: "1024x1024",
          response_format: "b64_json",
        },
      }),
    }),
  }),
});

export const { useGetArtsMutation } = artsApi;
