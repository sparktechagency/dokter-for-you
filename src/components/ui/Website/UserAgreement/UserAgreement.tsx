"use client"
import Title from '@/components/shared/Title';
import { useGetAllInfoQuery } from '@/redux/features/website/footerSlice';
import React from 'react';

const UserAgreement = () => { 
        const name = "user-agreement"
        const { data } = useGetAllInfoQuery(name)
        const agreement = data?.data
    return (
        <div className='bg-[#F7F7F7] py-[40px]'>
            {
                agreement?.map((item: { name: string, description: string }, index: number) => (
                    <div className=' container' key={index}>

                        <Title className='pb-[24px] uppercase'> {item?.name === "user-agreement" ? "USER AGREEMENT" : item?.name}</Title>

                        <div className=' text-[#767676]' dangerouslySetInnerHTML={{ __html: item?.description }}/>
                           
                      
                    </div>
                ))
            }

        </div>
    );
};

export default UserAgreement;