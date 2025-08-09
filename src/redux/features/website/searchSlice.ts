import { baseApi } from "@/redux/base/baseApi";

const searchSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({    

        getCategoryWithMedicine: build.query({
            query: (search) => { 
               const params = new URLSearchParams();  
            if(search) params.append("search", search)
                return {
                  url: `/category/with-medicine?${params.toString()}`,
                }
              },
        }),

    }) 
}) 

export const {useGetCategoryWithMedicineQuery} = searchSlice