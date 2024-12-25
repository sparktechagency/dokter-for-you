"use client"
import Title from '@/components/shared/Title';
import { useGetAllInfoQuery } from '@/redux/features/website/footerSlice';
import React from 'react';

const UserAgreement = () => { 
        const name = "USER AGREEMENT"
        const { data } = useGetAllInfoQuery(name)
        const agreement = data?.data
    return (
        <div className='bg-[#F7F7F7] py-[40px]'>
            {
                agreement?.map((item: { name: string, description: string }, index: number) => (
                    <div className=' container' key={index}>

                        <Title className='pb-[24px] uppercase'> {item?.name === "USER AGREEMENT" ? "USER AGREEMENT" : item?.name}</Title>

                        <div className=' text-[#767676]'>
                            {item?.description}
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default UserAgreement;