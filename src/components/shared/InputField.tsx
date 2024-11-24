"use client"
import { ConfigProvider, Form, Input } from 'antd';
import React, { useEffect } from 'react'

const InputField = ({ name, label }: { name: string, label: string }) => {
    const form = Form.useFormInstance();

    useEffect(() => {
        form.setFieldsValue({ name: '' });
    }, [form]);

    return (
        <Form.Item
            name={name}
            label={<p className='text-[#4E4E4E] text-[16px]'>{label}</p>}
            rules={[
                {
                    required: true,
                    message: `Please Enter your ${name}`,
                }
            ]}
        >
            <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0 , 
                    }, 
              
                }}
            >
                <Input
                    placeholder={`Enter Your ${label}`}
                    style={{
                        height: 48,
                        border: "1px solid #d9d9d9",
                        outline: "none",
                        boxShadow: "none" ,
                        backgroundColor: "white"
                    }}
                />
            </ConfigProvider>
        </Form.Item>
    );
}

export default InputField