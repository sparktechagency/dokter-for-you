/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import InputField from "@/components/shared/InputField";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";
import { SetLocalStorage } from "@/util/LocalStroage";
import { Checkbox, ConfigProvider, Form, Input, Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import React from "react";
import Swal from 'sweetalert2'; 

const Register = () => {
    const router = useRouter()   
    const [registerUser , { isLoading }] = useRegisterUserMutation()

    const onFinish = async (values: any) => {
       
        await registerUser(values).then((res) => {
    
            if (res?.data?.success) {
              Swal.fire({
                text: res?.data?.message,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              }).then(() => { 
                const value = {
                  userType: "registerUser",
                  email: values?.email
                }
                if (values?.email) {
                  SetLocalStorage("userInfo", value)
                } 
                router.push("/verify-otp")
              
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
        <div className=""
        >
            <div className=" mb-6">
                <h1 className="text-[25px] font-semibold mb-2">Register Now</h1>
                <p className="text-[#11D279]"> To proceed with your application, we first need some information from you</p>
            </div>
            <Form
                onFinish={onFinish}
                layout="vertical" 
                initialValues={{
                    remember: true ,
                    gender: "MALE"
                }}
            >

                <div className="grid grid-cols-2 gap-x-5">

                    <InputField name={"firstName"} label={"First Name"} />
                    <InputField name={"lastName"} label={"Last Name"} />
                    <InputField name={"location"} label={"Location"} />

                    <ConfigProvider
                        theme={{
                            components: {
                                Select: {
                                    activeBorderColor: "#BABABA",
                                    hoverBorderColor: "#BABABA"
                                },
                            },
                            token: {
                                borderRadius: 0,
                            },

                        }}
                    >
                        <Form.Item name="gender" label={<p className='text-[#4E4E4E] text-[16px]'>Gender</p>}>
                            <Select
                             
                                style={{ width: "100%", height: "48px" }}
                                options={[
                                    { value: 'MALE', label: 'Male' },
                                    { value: 'FEMALE', label: 'Female' },

                                ]}
                            />
                        </Form.Item>
                    </ConfigProvider>

                    <InputField name={"email"} label={"Email"} />
                    <InputField name={"contact"} label={"Contact Number"} />

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 0,
                            },

                        }}
                    >
                        <Form.Item
                            name="password"
                            label={<p className="block"> Password</p>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your password!",
                                },

                            ]}
                            className="mb-5"
                        >
                            <Input.Password
                                placeholder="Enter password"
                                className="border border-gray-300 h-[50px] bg-white rounded-lg"
                            />
                        </Form.Item>
                    </ConfigProvider>

                    <ConfigProvider
                        theme={{

                            components: {
                                Select: {
                                    activeBorderColor: "#d9d9d9",
                                    activeOutlineColor: "#d9d9d9",
                                    hoverBorderColor: "#d9d9d9"
                                },
                            },
                            token: {
                                borderRadius: 0,
                            },
                        }}>
                        <Form.Item
                            name="confirm_password"
                            label={<p className="block">Confirm Password</p>}
                            dependencies={["password"]}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your password!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue("password") === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error("The new password that you entered do not match!")
                                        );
                                    },
                                }),
                            ]}
                            className="mb-10"
                        >

                            <Input.Password
                                placeholder="Enter password"
                                className="border border-gray-300 h-[50px] bg-white rounded-lg"
                            />
                        </Form.Item>
                    </ConfigProvider>

                </div>

                <div className="flex items-center justify-between">
                    <Form.Item style={{ marginBottom: 0 }} name="agree" valuePropName="checked">
                        <Checkbox>I agree with terms of service and privacy policy</Checkbox>
                    </Form.Item>


                </div>

                <Form.Item style={{ marginBottom: 0 }}>
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            height: 45,
                            color: "white",
                            fontWeight: "400px",
                            fontSize: "18px",

                            marginTop: 20
                        }}
                        className="flex items-center justify-center bg-primary rounded-lg"
                    >
                    {isLoading ? "Please wait..." : "Sign up "}    
                    </button>
                </Form.Item>


            </Form>

            <div className=" flex items-center justify-center gap-1 py-4">
                <p className="text-[#636363]"> have any account?</p>
                <Link href="/login" className="text-[#1854F9] font-semibold" > Log in </Link>
            </div>
        </div>
    );
};

export default Register;