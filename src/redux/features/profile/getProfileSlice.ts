import { baseApi } from "@/redux/base/baseApi"

const getProfileSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({   
        
        getProfile:build.query({ 
            query: () => ({
                url: `/user/profile`,
            })
        }),  
        

        editProfile:build.mutation({
            query: (data) => ({
                url: "/user",
                method: "PATCH",
                body: data,
            })
        }) , 


    }) 
}) 

export const {useGetProfileQuery , useEditProfileMutation} = getProfileSlice 