
import { GetLocalStorage } from "@/util/LocalStroage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token  = GetLocalStorage("DokterToken") 

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://139.59.0.25:5002/api/v1" ,
        // baseUrl: "http://192.168.10.195:5000/api" 
        headers: {
            Authorization: `Bearer ${token}`,
          }
    }),
    endpoints: () => ({})
});

// export const imageUrl = "http://206.189.231.81:5000";
export const imageUrl = "http://139.59.0.25:5002/";