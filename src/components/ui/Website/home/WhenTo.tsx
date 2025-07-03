"use client"
import Title from '@/components/shared/Title';
import { imageUrl } from '@/redux/base/baseApi';
import { useGetAllAboutQuery } from '@/redux/features/website/footerSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const WhenTo = () => {
  const router = useRouter()
  const { data: aboutData } = useGetAllAboutQuery(undefined);
  const item = aboutData?.data[0]
  return (
    <div className=' mb-[64px] w-full container flex flex-col lg:flex-row items-center gap-10'>
      <div className=" lg:w-1/2 w-full  "> 
      
        <Title className=" pb-[40px]">{item?.title}</Title> 

        <p className=" text-gray-600" dangerouslySetInnerHTML={{ __html: item?.description?.length > 250 ? `${item?.description?.slice(0, 850)}...` : item?.description }} />
      
        <button className={ `mt-6 px-6 py-2  border border-primary text-primary hover:text-white  hover:bg-primary ${item?.description?.length > 850 && "hidden"}`} onClick={() => router.push(`/about/${item._id}`)}>
          Learn More
        </button>
      </div>

      <div className=' lg:mt-0 mt-4'>
        <Image src={item?.image?.startsWith("http") ? item?.image : `${imageUrl}${item?.image}`} height={450} width={510} className=' object-cover ' alt='' />
      </div>
    </div>

  );
};

export default WhenTo;