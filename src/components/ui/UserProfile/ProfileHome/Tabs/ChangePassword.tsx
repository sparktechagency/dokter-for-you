/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ConfigProvider, Form, Input } from 'antd';
import React from 'react';
import { useChangePasswordMutation } from '@/redux/features/auth/authApi';
import Swal from 'sweetalert2';

const ChangePassword = () => {
    const [form] = Form.useForm();
    const [changePassword] = useChangePasswordMutation()

    const handleChangePassword = async(values: any) => {
       
        await changePassword(values).then((res) => {   
                if (res?.data?.success) {
                  Swal.fire({
                    text: res?.data?.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(()=>{
                    form.resetFields()
                  })
                } else {
                  Swal.fire({
                    title: "Oops",
                    text: res?.data?.message,
                    icon: "error",
                    timer: 1500,
                    showConfirmButton: false,
                  });
                }
              }) 

    };

    return (
        <div className="px-6 lg:px-12 mt-8">
  
                <Form
                    form={form}
                    layout="vertical"
                    initialValues={{ remember: true }}
                    onFinish={handleChangePassword}
                    className="w-full lg:w-1/2"
                >

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 0,
                            },

                        }}
                    >
                        <Form.Item
                            name="currentPassword"
                            label={<p className="block">Current Password</p>}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your current password!",
                                },
                            ]}
                            className="mb-5"
                        >
                            <Input.Password
                                placeholder="Enter Password"
                                style={{
                                    height: 48,
                                    border: "1px solid #d9d9d9",
                                    outline: "none",
                                    boxShadow: "none",
                                    backgroundColor: "white"
                                }}
                            />
                        </Form.Item>
                    </ConfigProvider> 

                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 0,
                            },

                        }}
                    >

                    <Form.Item
                        name="newPassword"
                        label={<p className="block">New Password</p>}
                        dependencies={["currentPassword"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("currentPassword") === value) {
                                        return Promise.reject(
                                            new Error("The new password and current password do not match!")
                                        );
                                    }
                                    return Promise.resolve();
                                },
                            }),
                        ]}
                        className="mb-5"
                    >
                        <Input.Password
                            placeholder="Enter password"
                            style={{
                                height: 48,
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none",
                                backgroundColor: "white"
                            }}
                        />
                    </Form.Item> 
                    </ConfigProvider>


                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 0,
                            },

                        }}
                    >
                    <Form.Item
                        name="confirmPassword"
                        label={<p className="block">Re-Type Password</p>}
                        dependencies={["newPassword"]}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "Please confirm your password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("newPassword") === value) {
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
                        <Input.Password
                            placeholder="Enter password"
                            style={{
                                height: 48,
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none",
                                backgroundColor: "white"
                            }}
                        />
                    </Form.Item> 
                    </ConfigProvider>

                    <Form.Item className="flex  justify-end">
                        <button

                            type="submit"
                            className="bg-primary text-white w-36 h-11 "
                        >
                            Save Changes
                        </button>
                    </Form.Item>
                </Form>
           
        </div>
    );
};

export default ChangePassword;