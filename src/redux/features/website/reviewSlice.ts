import { baseApi } from "@/redux/base/baseApi"

const reviewSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({ 

        getAllReview: build.query({
            query: () => {
                return {
                  url: `/review`,
                }
              },
        }), 

        createReview:build.mutation({
            query: (data) => ({
              url: "/review/create",
              method: "POST",
              body: data,
            })
        }) 

    }) 
}) 

export const { useGetAllReviewQuery , useCreateReviewMutation} = reviewSlice