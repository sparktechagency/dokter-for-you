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
    })  , 

    createConsultation:build.mutation({ 
        query: (data) => ({
          url: "/consultation/create",
          method: "POST",
          body: data,
        })
    })  , 

    getDynamicQuestions: build.query({
        query: (id) => { 
          const params = new URLSearchParams(); 
          if(id) params.append("subCategory", id)
          return{ 
            url: `/question?${params.toString()}`,
          }
        }
    })

  }) 
})  

export const {useGetAllMedicinesQuery , useGetMedicineByIdQuery , useCreateConsultationMutation , useGetDynamicQuestionsQuery} =  consultationSlice
