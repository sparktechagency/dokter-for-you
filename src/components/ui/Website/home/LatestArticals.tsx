/* eslint-disable @next/next/no-img-element */
"use client"
import Title from '@/components/shared/Title';
import { useGetAllArticlesQuery } from '@/redux/features/website/articlesSlice';
import Link from 'next/link';
import React from 'react'; 
import moment from 'moment/moment';
import { imageUrl } from '@/redux/base/baseApi';

const LatestArticals = () => {  
 const {data:allArticles} = useGetAllArticlesQuery(undefined) 
 const articalsData  = allArticles?.data

    return (
        <div className="bg-gradient-to-r from-[#F2FFF9] to-[#D2DEFF] py-10"> 
        <div className=' container'>
        <Title className=" text-center pb-[64px]">Latest Articles</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-0 gap-y-5 ">
        {articalsData?.slice(0, 3)?.map((article:{title:string,image:string,createdAt:string}, index:number) => (
          <div
            key={index}
            className="bg-white p-3 shadow-md rounded-lg hover:shadow-lg"
          > 
            <img  src={article?.image?.startsWith("http") ? article?.image : `${imageUrl}${article?.image}`}  alt=' '  className=' h-[200px] w-full '/>
            <h3 className="font-semibold text-[#1A1A1A] py-2 text-[16px]">{article.title}</h3>
            <p className="text-gray-600 text-[14px] pb-2">  {moment(article.createdAt).format("MMM DD YYYY")} </p>
          </div>
        ))}
      </div> 
 
 <Link href="/blogs" className=' flex items-center justify-center'>
      <button className="mt-10 px-6 py-2    border  border-primary text-primary hover:text-white  hover:bg-primary">
      View all blog articles 
        </button> 
 </Link>

        </div>
    </div>
    );
};

export default LatestArticals;