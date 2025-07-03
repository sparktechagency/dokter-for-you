/* eslint-disable @next/next/no-img-element */
"use client"
import Title from '@/components/shared/Title';
import { imageUrl } from '@/redux/base/baseApi';
import { useGetAboutByIdQuery } from '@/redux/features/website/footerSlice';
import { useParams } from 'next/navigation';
import React from 'react';

const AboutDetails = () => {
  const { id } = useParams()
  const { data } = useGetAboutByIdQuery(id)
  const item = data?.data
  return (
    <div className=' pt-[60px] bg-[#f7f7f7]'>

      <div className=' container'>
      

        <div
          key={item?._id}
          className={`mb-[94px] w-full container flex flex-col lg:flex-row items-center gap-10`}
        >
          {/* Content Section */}
          <div className="lg:w-1/2 w-full">
          <Title className="pb-[24px]">{item?.title}</Title>
            <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: `${item?.description?.split(" ").slice(0, 250).join(" ")}` }}/>  

          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <img
              src={item?.image?.startsWith("http") ? item?.image : `${imageUrl}${item?.image}`}
              className=""
              alt={item?.title} 
              style={{ height:"350px" , width:"610px"}}
            />
          </div>
        </div>

        <div className=' pb-[94px] text-gray-600 mt-3' dangerouslySetInnerHTML={{ __html: `${item?.description?.split(" ").slice(250).join(" ")}` }} />
       
      </div>

    </div>
  );
};

export default AboutDetails;