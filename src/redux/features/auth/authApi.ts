import { baseApi } from "../../base/baseApi";
import { GetLocalStorage } from "@/util/LocalStroage";
const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    registerUser: build.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      })
    }),

    loginUser: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),

    verifyEmail: build.mutation({
      query: (data) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: data,
      }),
    }),

    forgetPassword: build.mutation({
      query: (data) => ({
        url: "/auth/forget-password",
        method: "POST",
        body: data,
      }),
    }),

    resetPasswords: build.mutation({
      query: (value) => {
        const resetToken = GetLocalStorage("resetToken");
        return {
          url: "/auth/reset-password",
          headers: {
            // "Content-Type": "application/json", 
            authorization: `Bearer ${resetToken}`,
          },
          method: "POST",
          body: value
        }
      }
    }),

    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),

    deleteAccount: build.mutation({
      query: ({ payload }) => {
        return {
          url: `/user/soft-delete`,
          method: 'DELETE',
          body: payload,
        };
      },
    }),


  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useResetPasswordsMutation,
  useVerifyEmailMutation,
  useDeleteAccountMutation
} = authApi;