import { baseApi } from "@/redux/base/baseApi";


const affiliatedDoctorSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({   
        getAffiliatedDoctors: build.query({
            query: () => { 
                return{
                    url: `/europe/affiliated-doctor`,
                }
            }
        })

    }) 
}) 

export const {useGetAffiliatedDoctorsQuery} = affiliatedDoctorSlice