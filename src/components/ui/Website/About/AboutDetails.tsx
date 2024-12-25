"use client"
import Title from '@/components/shared/Title';
import { imageUrl } from '@/redux/base/baseApi';
import { useGetAboutByIdQuery } from '@/redux/features/website/footerSlice';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

const AboutDetails = () => { 
  const {id} = useParams()  
  const {data} = useGetAboutByIdQuery(id)  
  const item = data?.data
    return (
        <div className=' pt-[60px] bg-[#f7f7f7]'> 

<div className=' container'>

<div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8"> 
  <div className="lg:w-1/2 w-full">
    <Title className="pb-[24px]">{item?.title}</Title>
    <p className="text-gray-600">
    {item?.description?.slice(0, 250)}
    </p>
  </div>

  <div className="lg:w-1/2 w-full">
    <Image src={item?.image?.startsWith("http") ? item?.image : `${imageUrl}${item?.image}`} height={400} width={400} className=" w-auto" alt="" />
  </div>
</div>

        <div className=' pb-[94px] text-gray-600 mt-3'>
        {item?.description}
        </div>
</div>
            
        </div>
    );
};

export default AboutDetails;