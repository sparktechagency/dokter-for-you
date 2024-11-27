/* eslint-disable @next/next/no-img-element */

import Title from '@/components/shared/Title';
import Link from 'next/link';
import React from 'react';

const LatestArticals = () => { 
    const articles = [
        { title: "Strategic and commercial approach with issues", image:"/artical1.png" , time: "Oct-20-2023" },
        { title: "Strategic and commercial approach with issues", image:"/artical2.png" , time: "Oct-20-2023" },
        { title: "Strategic and commercial approach with issues", image:"/artical3.png"  , time: "Oct-20-2023" },
      ]; 
    return (
        <div className="bg-gradient-to-r from-[#F2FFF9] to-[#D2DEFF] py-10"> 
        <div className=' container'>
        <Title className=" text-center pb-[64px]">Latest Articles</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-0 gap-y-5 ">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white p-3 shadow-md rounded-lg hover:shadow-lg"
          > 
            <img  src={article?.image}  alt=' '  className=' h-[200px] w-full '/>
            <h3 className="font-semibold text-[#1A1A1A] py-2 text-[16px]">{article.title}</h3>
            <p className="text-gray-600 text-[14px] pb-2">{article.time}</p>
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