import { baseApi } from "@/redux/base/baseApi"

const getProfileSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({

        getProfile: build.query({
            query: () => ({
                url: `/user/profile`,
            }),
            providesTags: ["profile"],
        }),


        editProfile: build.mutation({
            query: (data) => ({
                url: "/user",
                method: "PATCH",
                body: data,
            })
        }),

        consultationSuccess: build.mutation({
            query: (data) => {
                const params = new URLSearchParams();
                if (data?.id) params.append("id", data?.id)
                if (data?.session_id) params.append("session_id", data?.session_id)
                return {
                    url: `/consultation/create/success?${params.toString()}`,
                    method: "POST",
                    body: data,
                }
            }
        })

    })
})

export const { useGetProfileQuery, useEditProfileMutation , useConsultationSuccessMutation} = getProfileSlice 