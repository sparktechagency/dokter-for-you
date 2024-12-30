import { baseApi } from "@/redux/base/baseApi"

const consultationSlice = baseApi.injectEndpoints({
  endpoints: (build) => ({    

    getAllMedicines: build.query({
        query: (search) => {  
            const params = new URLSearchParams(); 
            if(search) params.append("search", search)
            return{
                url: `/medicine?${params.toString()}`, 
            }
        }
    }),  

    getMedicineById: build.query({
        query: (id) => ({
            url: `/medicine/${id}` 
        })
    }) 

  }) 
})  

export const {useGetAllMedicinesQuery , useGetMedicineByIdQuery} =  consultationSlice
