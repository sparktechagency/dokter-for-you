import { baseApi } from "@/redux/base/baseApi";

const shippingCostSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({   
        getShippingCost: build.query({
            query: (country) => { 
                const params = new URLSearchParams(); 
                if(country) params.append("country", country)
                return{ 
                    url: `/shipping/country?${params.toString()}`,
                }
            },
        //    transformResponse: (response: { data: { shippingCost: number } }) => console.log(response)
        }),
    }) 
}) 

export const { useGetShippingCostQuery } = shippingCostSlice;