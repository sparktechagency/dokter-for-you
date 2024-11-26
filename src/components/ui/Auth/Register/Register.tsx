/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import InputField from "@/components/shared/InputField";
import {  Checkbox, ConfigProvider, Form, Input, Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Register = () => { 
    const router = useRouter()


  const onFinish = async(values:any) => { 
    console.log(values);

          router.push("/login")   
   
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
        > 

 <div className="grid grid-cols-2 gap-x-5"> 

          <InputField name={"firstName"} label={"First Name"} />
          <InputField name={"lastName"} label={"Last Name"} />
          <InputField name={"dob"} label={"Death of Birth"} /> 
           
           <Form.Item name="gender" label={<p className='text-[#4E4E4E] text-[16px]'>Gender</p>}>  
           <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0 , 
                    }, 
              
                }}
            >
           <Select
      defaultValue="Male"
      style={{ width: "100%" , height:"48px" }}
      options={[
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },

      ]}
    /> 
    </ConfigProvider>
           </Form.Item> 

           <InputField name={"email"} label={"Email"} />
           <InputField name={"contact"} label={"Contact Number"} /> 
 
           <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0 , 
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
                                new Error("The new password that you entered does not match!")
                            );
                        },
                    }),
                ]}
                className="mb-10"
            > 
              <ConfigProvider
                theme={{
                    
                    components: {
                        Select: {
                            activeBorderColor:"#d9d9d9" ,
                            activeOutlineColor:"#d9d9d9" ,
                            hoverBorderColor:"#d9d9d9"
                        },
                      },
                      token: {
                        borderRadius: 0 , 
                    }, 
                }}>
                <Input.Password
                    placeholder="Enter password"
                    className="border border-gray-300 h-[50px] bg-white rounded-lg"
                />
            </ConfigProvider>
            </Form.Item>
 
 </div>

            <div className="flex items-center justify-between">
              <Form.Item style={{marginBottom: 0}} name="agree" valuePropName="checked">
                <Checkbox>I agree with terms of service and privacy policy</Checkbox>
              </Form.Item>

        
          </div>

          <Form.Item style={{marginBottom: 0}}>
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
              Sign up
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