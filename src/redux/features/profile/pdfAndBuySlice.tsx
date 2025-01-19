import { baseApi } from "@/redux/base/baseApi"

const pdfAndBuySlice = baseApi.injectEndpoints({
    endpoints: (build) => ({  
   
       
        BuyNow: build.mutation({
            query: (id) => ({
                url: `/consultation/buyMedicine/${id}`,
                method: "POST",
               
            })
        })


    }) 
}) 

export const {  useBuyNowMutation} = pdfAndBuySlice