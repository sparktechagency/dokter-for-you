"use client"
import InputField from '@/components/shared/InputField';
import Title from '@/components/shared/Title';
import { useEditProfileMutation, useGetProfileQuery } from '@/redux/features/profile/getProfileSlice';
import { Form, Input } from 'antd';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const ProfileDetails = () => {
    const [form] = Form.useForm();
    const { data } = useGetProfileQuery(undefined)
    const [editProfile] = useEditProfileMutation()
    const userData = data?.data

    useEffect(() => {
        if (userData) {
            form.setFieldsValue({
                firstName: userData?.firstName,
                lastName: userData?.lastName,
                dateOfBirth: userData?.dateOfBirth,
                gender: userData?.gender,
                email: userData?.email,
                contact: userData?.contact,
                location: userData?.location,
            });
        }
    }, [userData, form]);

    const handleSubmit = async (values: { firstName: string, lastName: string, dateOfBirth: string, gender: string, email: string, contact: string, location: string }) => {

        const formData = new FormData()
        formData.append('firstName', values?.firstName)
        formData.append('lastName', values?.lastName)
        formData.append('dateOfBirth', values?.dateOfBirth)
        formData.append('gender', values?.gender)
        formData.append('email', values?.email)
        formData.append('contact', values?.contact)
        formData.append('location', values?.location)

        await editProfile(formData).then((res) => {
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
                                text: res?.data?.message,
                                icon: "error",
                                timer: 1500,
                                showConfirmButton: false,
                            });
                        }     
        })

    }

    return (
        <div>

            <Title className='' >Personal Information </Title>
            <Form layout='vertical' className='w-full' form={form} onFinish={handleSubmit}>

                <div className=' grid lg:grid-cols-2 grid-cols-1 gap-x-7 pt-[16px]' >
                    <InputField name='firstName' label='First Name' />
                    <InputField name='lastName' label='Last Name' />
                    <InputField name='dateOfBirth' label='Date of Birth' />
                    <InputField name='gender' label='Gender' />

                    <Form.Item
                        name="email"
                        label={<p className="text-[#4E4E4E] text-[16px]">Email</p>} >

                        <Input
                            placeholder={`Enter your email`}
                            style={{
                                height: 48,
                                border: "1px solid #d9d9d9",
                                outline: "none",
                                boxShadow: "none",
                                backgroundColor: "white",
                            }}
                            readOnly
                        />
                    </Form.Item>


                    <InputField name='contact' label='Contact Number' />
                </div>
                <div className=' w-full'>
                    <InputField name='location' label='Address' />
                </div>

                <Form.Item className=' flex items-center justify-center  w-full '>
                    <button type='submit' className=' h-[48px] w-[300px] text-white bg-primary '> Save & Changes</button>
                </Form.Item>


            </Form>
        </div>
    );
};

export default ProfileDetails;