import { GetLocalStorage } from "@/util/LocalStroage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://api.dokterforyou.com/api/v1", 
      baseUrl: "http://152.42.140.58:5002/api/v1" ,
    prepareHeaders: (headers) => {
      const token = GetLocalStorage("DokterToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["profile"],
});

// export const imageUrl = "https://api.dokterforyou.com/"; 
export const imageUrl = "http://152.42.140.58:5002/";  