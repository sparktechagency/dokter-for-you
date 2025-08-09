/* eslint-disable @next/next/no-img-element */
"use client"
import Title from '@/components/shared/Title';
import { imageUrl } from '@/redux/base/baseApi';
import { useGetAboutByIdQuery } from '@/redux/features/website/footerSlice';
import { Spin } from 'antd';
import { useParams } from 'next/navigation';
import React from 'react';

const AboutDetails = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetAboutByIdQuery(id)
  const item = data?.data
  return (
    <div className=' pt-[60px] bg-[#f7f7f7] min-h-[calc(95vh-100px)]'>
      {
        isLoading ? <div className='flex items-center justify-center  '> <Spin size='default' /> </div> :
          <div className=' container'>
            <div className=" w-full pb-5 flex items-center justify-center">
              <img
                src={item?.image?.startsWith("http") ? item?.image : `${imageUrl}${item?.image}`}
                className=""
                alt={item?.title}
                style={{ height: "350px", width: "610px" }}
              />
            </div>
            <div
              key={item?._id}
              className={`pb-[94px] w-full container flex flex-col lg:flex-row items-center gap-10`}
            >
              {/* Content Section */}
              <div className=" w-full">
                <Title className="pb-[24px]">{item?.title}</Title>
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: `${item?.description}` }} />

              </div>
            </div>


          </div>
      }
      {/* Image Section */}


    </div>
  );
};

export default AboutDetails;