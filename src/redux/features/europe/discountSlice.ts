import { baseApi } from "@/redux/base/baseApi";

const discountSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({    
 createDiscount: build.mutation({
            query: (data) => ({
                url: "/discount/verify",
                method: "POST",
                body: data,
            }),
        }),
    })
}) 

export const { useCreateDiscountMutation } = discountSlice;