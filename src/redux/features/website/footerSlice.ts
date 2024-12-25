import { baseApi } from "@/redux/base/baseApi";



const footerSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getAllAbout: build.query({
            query: () => ({
                url: `/about`,
            })
        }),

        getAboutById: build.query({
            query: (id) => ({
                url: `/about/${id}`,
            })
        }), 

        // terms , user agreement 
        
    getAllInfo: build.query({
        query: (name) => {
            const params = new URLSearchParams();
            if (name) params.append("name", name)
            return {
              url: `/info?${params.toString()}`,
            }
          },
    }),  

    // subscriber  
    subscribeByEmail: build.mutation({
        query: (data) => ({
          url: "/subscriber/create",
          method: "POST",
          body: data,
        }),
      }), 

    //   support  
        createSupport:build.mutation({
            query: (data) => ({
              url: "/message/send",
              method: "POST",
              body: data,
            })
        })


    })
})

export const { useGetAboutByIdQuery, useGetAllAboutQuery  , useGetAllInfoQuery , useSubscribeByEmailMutation , useCreateSupportMutation } = footerSlice