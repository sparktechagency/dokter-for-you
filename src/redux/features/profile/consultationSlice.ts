import { baseApi } from "@/redux/base/baseApi"

const consultationSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({ 
        
        getConsultations: build.query({
            query: (name) => {  
                const params = new URLSearchParams(); 
                if (name) params.append("consultationType", name)
                return{
                    url: `/consultation/my?${params.toString()}`,
                }              
            }
        }),

    })
})

export const { useGetConsultationsQuery} = consultationSlice 