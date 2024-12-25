/* eslint-disable @next/next/no-img-element */
"use client"
import { imageUrl } from '@/redux/base/baseApi';
import { useGetSingleArticleQuery } from '@/redux/features/website/articlesSlice';
import { ArrowLeft } from 'lucide-react';
import moment from 'moment';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const BlogDetails = () => { 
  const {id} = useParams();  
  const {data} = useGetSingleArticleQuery(id)  
  const article = data?.data

    return (
        <div className='bg-[#F7F7F7]'>
             <div className="container ">
      {/* Header */}
      <header className="px-4 py-3 border-b"> 
        
        
            <Link href="/blogs" className='flex items-center text-gray-600 hover:text-gray-900' > 
          <ArrowLeft className="w-5 h-5 " />
          <span>Back</span>
            </Link>
      
      </header>

      {/* Hero Image */}
      <div className="relative  w-[100%]">
        <img
          src={article?.image?.startsWith("http") ? article?.image : `${imageUrl}${article?.image}`}
          alt="Medical professionals in a conference" 
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Content */}
      <main className=" mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-[500px] text-gray-900 pb-1">
        {article?.title}
        </h1> 
        <p className="text-sm text-gray-500  mb-[52px]">{moment(article?.createdAt).format("MMM DD YYYY")}</p>

        <div className="space-y-6 text-gray-700">
    {article?.description}

  
        </div>
      </main>
    </div>
        </div>
    );
};

export default BlogDetails;