"use client"
import Title from '@/components/shared/Title';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useGetCategoryByIdQuery, useGetSubCategoryQuery } from '@/redux/features/website/categorySlice';
import { imageUrl } from '@/redux/base/baseApi';


const SubCategory = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const { data: categoryDetails } = useGetCategoryByIdQuery(category)
  const categoryData = categoryDetails?.data
  const { data: subCategory } = useGetSubCategoryQuery(categoryData?._id)

  return (
    <div className='bg-[#F7F7F7]'>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-4 text-sm">
          <Link href="/home" className="text-emerald-500 hover:text-emerald-600">Home</Link>
          <span className="mx-2 text-emerald-5000">›</span>
          <Link href="/consultation-category" className="text-emerald-500 hover:text-emerald-600">Start Your Consultation</Link>
          <span className="mx-2 text-emerald-5000">›</span>
          <span className="text-gray-500"> {categoryData?.name}</span>
        </nav>

        {/* Header */}
        <Title className=" mb-4"> {categoryData?.name}</Title>

        {/* Description */}
        <p className="text-[#6B6B6B] mb-10 ">
          {categoryData?.summary}
        </p>

        {/* Category Title */}
        <Title className=" mb-6">{categoryData?.name}&apos;s Consultation Category</Title>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subCategory?.data?.map((subCategory: { _id: string, name: string, image: string, details: string }, index: number) => (
            <div key={index} className=" overflow-hidden ">
              <div className="relative h-48">
                <Image
                  src={subCategory?.image?.startsWith("http") ? subCategory?.image : `${imageUrl}${subCategory?.image}`}
                  alt={subCategory?.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="">
                <h3 className="text-[24px] font-medium text-[#11D279] my-2">{subCategory?.name}</h3>
                <p className="text-[#6B6B6B] mb-2">{subCategory?.details?.split(" ").slice(0,20).join(" ")}</p>
                <Link
                  href={`/subcategory-details?category=${categoryData?.name}&&subcategory=${subCategory._id}`}
                  className="text-[#1854F9] underline "
                >
                  Click more {'>'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SubCategory;