/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import Link from 'next/link';
import Title from '@/components/shared/Title';
import Image from 'next/image';
import { useGetAllCategoryQuery } from '@/redux/features/website/categorySlice';
import { imageUrl } from '@/redux/base/baseApi';


const ConsultationCategory = () => {
  const { data: category } = useGetAllCategoryQuery(undefined)
  const categories = category?.data

  return (
    <div className='bg-[#F7F7F7]'>
      <div className="container ">
        <nav className="flex items-center gap-2 text-sm mb-6 pt-2">
          <Link href="/home" className="text-[#00D6A3] hover:underline">Home</Link>
          <span className="text-[#00D6A3]">›</span>
          <Link href="/consultation-category" className="text-[#00D6A3] hover:underline">Start Your Consultation</Link>
        </nav>

        <Title className=" mb-10">
          Select Your Consultation Category
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[92px]" >
          {categories?.map((category: {_id : string, name: string, image: string, summary: string }, index: number) => (
            <Link href={`/subcategory?category=${category?._id}`} key={index}>
              <div className="bg-white h-[150px] rounded-none shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 p-2 rounded-full bg-primary text-white flex items-center justify-center">

                  <Image src={category?.image?.startsWith("http") ? category?.image : `${imageUrl}${category?.image}`} alt="Other" height={48} width={48} style={{ objectFit: 'cover'  , borderRadius: '100%' , height:"48px", width:"48px"}} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#222222] mb-2">
                    {category?.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category?.summary?.slice(0, 80)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultationCategory;