/* eslint-disable @next/next/no-img-element */
"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CommonBtn from '@/components/shared/CommonBtn';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useGetSubCategoryByIdQuery } from '@/redux/features/website/categorySlice';
import { imageUrl } from '@/redux/base/baseApi';
import { useGetProfileQuery } from '@/redux/features/profile/getProfileSlice';
import BuyMedicine from '@/components/europe/buyMedicine/BuyMedicine';
import { useCountry } from '@/app/(website)/CountryContext';

const SubCategoryDetails = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const SubCategory = searchParams.get('subcategory');
  const { data: subCategory } = useGetSubCategoryByIdQuery(SubCategory)
  const subCategoryData = subCategory?.data
  const { data: profile } = useGetProfileQuery(undefined)
  const profileData = profile?.data 
  const { country } = useCountry();

  console.log(subCategoryData); 

  return (
    <div className=' bg-[#F7F7F7] pb-[64px]'>
      <div className=" container ">
        <nav className="flex items-center text-sm mb-6 pt-2 text-gray-500">
          <Link href="/" className="text-emerald-500 hover:text-emerald-600">Home</Link>
          <span className="mx-2 text-emerald-500 ">›</span>
          <Link href="/consultation-category" className="text-emerald-500 hover:text-emerald-600">Start Your Consultation</Link>
          <span className="mx-2 text-emerald-500 ">›</span>
          <Link href={`/subcategory?category=${subCategoryData?.category}`} className="text-emerald-500 hover:text-emerald-600"> {category}</Link>
          <span className="mx-2 text-emerald-500">›</span>
          <span className="text-emerald-500">{subCategoryData?.name}</span>
        </nav>

        <div className="mb-8">
          <Image
            src={subCategoryData?.image?.startsWith("http") ? subCategoryData?.image : `${imageUrl}${subCategoryData?.image}`}
            alt="Weight scale with feet"
            height={332}
            width={1400}
            className=" object-cover "
          />
        </div>

        <h1 className="text-2xl font-medium text-primary mb-6">{subCategoryData?.name}</h1>

        <div className="space-y-6 text-gray-600">
          <p>
            {subCategoryData?.details}
          </p>


          <div className="pt-4 pb-10 border-b border-[#D1D1D1]">
            <p className="font-medium mb-4">Do you need help with selecting the right Consultation?</p>
            <Link href={`${profileData ?  country !== "Netherlands"? `/medical-consultations?category=${subCategoryData?.category}&subcategory=${subCategoryData?._id}&name=${subCategoryData?.name}` :`/consultations?category=${subCategoryData?.category}&subcategory=${subCategoryData?._id}&name=${subCategoryData?.name}` : "/login"}`} className=' w-full ' >
              <CommonBtn className={` flex gap-1 items-center justify-center px-6  h-[56px] `}>
                <span>Start Your Consultation</span>
                <span><MdOutlineKeyboardArrowRight size={22} /></span>
              </CommonBtn>
            </Link>
          </div> 

{
  country !== "Netherlands" &&  <BuyMedicine  subcategoryId={subCategoryData?._id} SubCategoryName={subCategoryData?.name}  
  category={subCategoryData?.category}  />
}
         

          <div className=' text-[#6B6B6B] text-[16px] pt-6'> 
            <div dangerouslySetInnerHTML={{ __html: subCategoryData?.introduction }} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryDetails;