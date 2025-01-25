/* eslint-disable @next/next/no-img-element */
"use client"
import Title from '@/components/shared/Title';
import { imageUrl } from '@/redux/base/baseApi';
import { useGetAboutByIdQuery } from '@/redux/features/website/footerSlice';
import { useParams } from 'next/navigation';
import React from 'react';

const AboutDetails = () => { 
  const {id} = useParams()  
  const {data} = useGetAboutByIdQuery(id)  
  const item = data?.data
    return (
        <div className=' pt-[60px] bg-[#f7f7f7]'> 

<div className=' container'>
<Title className="pb-[24px]">{item?.title}</Title>

  <div className=" w-full">
    <img src={item?.image?.startsWith("http") ? item?.image : `${imageUrl}${item?.image}`}  className=" h-[600px] w-full object-fill" alt="" />
  </div>


        <div className=' pb-[94px] text-gray-600 mt-3'>
        {item?.description}
        </div>
</div>
            
        </div>
    );
};

export default AboutDetails;