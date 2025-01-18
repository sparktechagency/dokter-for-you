import { baseApi } from "@/redux/base/baseApi";

const notificationSlice = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllNotification: build.query({
            query: (page) => {
                const params = new URLSearchParams();
                if (page) params.append("page", page)
                return {
                    url: `/notification?${params.toString()}`,
                }
            }
        }) , 

        readNotification: build.mutation({
            query: () => ({
                url: `/notification/read`,
                method: "PATCH",
            })
        })
    })
})

export const { useGetAllNotificationQuery , useReadNotificationMutation } = notificationSlice;