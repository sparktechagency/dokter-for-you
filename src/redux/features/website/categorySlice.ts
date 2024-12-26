import { baseApi } from "@/redux/base/baseApi";

const categorySlice = baseApi.injectEndpoints({
  endpoints: (build) => ({   

    getAllCategory: build.query({
        query: () => ({
            url: `/category` 
        })
    }),  

    getCategoryById: build.query({
        query: (id) => ({
            url: `/category/${id}` 
        })
    }) ,

    getSubCategory: build.query({
        query: (id) => { 
            const params = new URLSearchParams();  
            if(id) params.append("category", id)

            return{
                url: `/subcategory?${params.toString()}`, 
            }
        }
    }),  

    getSubCategoryById: build.query({
        query: (id) => ({
            url: `/subcategory/${id}` 
        })
    }) 

  }) 
}) 

export const {useGetAllCategoryQuery ,useGetCategoryByIdQuery ,  useGetSubCategoryQuery , useGetSubCategoryByIdQuery} =  categorySlice 