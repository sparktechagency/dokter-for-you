/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useForgetPasswordMutation, useVerifyEmailMutation } from "@/redux/features/auth/authApi";
import { GetLocalStorage, SetLocalStorage } from "@/util/LocalStroage";
import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import React, {  useEffect, useState } from "react"
import Swal from "sweetalert2";

const { Text } = Typography;

const VerifyOtp = () => { 
  const [email, setEmail] = useState<string | null>(null);
  const userInfo = GetLocalStorage("userInfo"); 
  const [verifyEmail] = useVerifyEmailMutation()
  const userType = userInfo?.userType 
  const router = useRouter() 
  const [forgetPassword] = useForgetPasswordMutation() 

  useEffect(() => {
    if (userInfo?.email) {
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const handleResendEmail = async () => {
    const value = {
      email: email
    }
    await forgetPassword(value).then((res) => {
      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        Swal.fire({
          title: "Oops",
          //@ts-ignore
          text: res?.error?.data?.message,
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });

      }
    })

  }

  const onFinish = async(values: { otp: string}) => {
    // //console.log(values); 
    const data = {
      email: email,
      oneTimeCode: parseInt(values?.otp)
    }

    await verifyEmail(data).then((res) => {

      if (res?.data?.success) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => { 

          if (userType === "registerUser") {
            router.push("/login")
          } else {
            router.push("/reset-password")
          } 

          if(res?.data){   
            SetLocalStorage("resetToken", res?.data?.data); 
          }
    
        });
      } else {
        Swal.fire({
          title: "Oops",
          //@ts-ignore
          text: res?.error?.data?.message,
          icon: "error",
          timer: 1500,
          showConfirmButton: false,
        });

      }
    })
  };  

    return (
        <div>

        <div className=" mb-6">
          <h1 className="text-[25px] font-semibold mb-6 text-primary ">Verification code</h1>
          <p className=" ">We&apos;ll send a verification code to your email. Check your inbox and
            enter the code here.</p>
        </div>

        <Form onFinish={onFinish} layout="vertical" className=' w-full mx-auto'>
 
 <ConfigProvider
     theme={{
         components: {
             Input: {
                 // lineHeight: 3,
                 controlHeight: 55,

                 borderRadius: 10,
             },
         },
         token: {
             colorPrimary: '#292C61',
         },
     }}
 >      
 <Form.Item
   className="flex items-center justify-center mx-auto"
   name="otp"
   rules={[{ required: true, message: 'Please input otp code here!' }]}
 >
   <Input.OTP
     style={{
       width: 300, 
       height: 50,

     }}
     className=""
     variant="filled"
     length={4}
   />
 </Form.Item>
 </ConfigProvider>

 
          <div className="flex items-center justify-between mb-6 ">
            <Text>Don&apos;t received code?</Text>

            <p
              onClick={handleResendEmail}
              className="login-form-forgot underline font-medium"
              style={{ color: "#00B047", cursor: "pointer" }}
            >
              Resend
            </p>
          </div>

          <Form.Item style={{marginBottom: 0}}>
            <Button
              htmlType="submit"
              style={{
                width: "100%",
                height: 40,
                border: "1px solid #d9d9d9",
                outline: "none",
                boxShadow: "none",
                background: "#0A2369",
                color: "white"
              }}
            >
            Verify
            </Button>
          </Form.Item>
        </Form>
    </div>
    );
};

export default VerifyOtp;