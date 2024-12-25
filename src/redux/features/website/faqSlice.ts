import { baseApi } from "@/redux/base/baseApi";

const faqSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({   
 
    getAllFaq: build.query({ 
        query: (page) => {
            const params = new URLSearchParams();
            if (page) params.append("page", page)
            return {
              url: `/faq?${params.toString()}`,
            }
          },
    }),
  }) 
}) 

export  const {useGetAllFaqQuery} = faqSlice;