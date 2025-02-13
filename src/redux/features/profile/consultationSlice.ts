import { baseApi } from "@/redux/base/baseApi"

const consultationSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({ 
        
        getAllConsultations: build.query({
            query: () => {   
                //console.log("Consultation Type:", name);
                // const params = new URLSearchParams(); 
                // if (name) params.append("consultationType", name)
                return{
                    url: `/consultation/my`,
                }              
            } , 
            // transformResponse: (response: any) => {
            //     //console.log("Consultation Response:", response);
            //     // return response.data 
            // }
        }),

    })
})

export const { useGetAllConsultationsQuery} = consultationSlice 