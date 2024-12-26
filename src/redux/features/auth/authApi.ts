import { baseApi } from "../../base/baseApi"; 
import { GetLocalStorage } from "@/util/LocalStroage";
const resetToken = GetLocalStorage("resetToken") 

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({ 

    registerUser:build.mutation({
      query: (data) => ({
        url: "/user",
        method: "POST",
        body: data,
      })
    }) , 

    loginUser: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
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

    resetPassword: build.mutation({
      query:(value)=>({
          url:"/auth/reset-password" ,
          headers: {
            // "Content-Type": "application/json", 
            Authorization: `Bearer ${resetToken}`,
          },
          method:"POST" ,
          body: value
      })
  }) ,  

    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }), 

  }),
});

export const { 
  useRegisterUserMutation,
  useLoginUserMutation,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useVerifyEmailMutation,
} = authApi;