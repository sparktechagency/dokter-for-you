"use client"
import Title from '@/components/shared/Title';
import { useGetAllInfoQuery } from '@/redux/features/website/footerSlice';
import React from 'react';

const Terms = () => {
    const name = "TermsConditions"
    const { data } = useGetAllInfoQuery(name)
    const terms = data?.data

    console.log(data);
    return (
        <div className='bg-[#F7F7F7] py-[40px] '>
            {
                terms?.map((item: { name: string, description: string }, index: number) => (
                    <div className=' container' key={index}>

                        <Title className='pb-[24px] uppercase'> {item?.name === "TermsConditions" ? "Terms & Conditions" : item?.name}</Title>

                        <div className=' text-[#767676]'>
                            {item?.description}
                        </div>
                    </div>
                ))
            }


        </div>
    );
};

export default Terms;