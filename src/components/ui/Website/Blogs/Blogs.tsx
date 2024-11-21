"use client"
import React from 'react'; 
import blog1 from "@/assests/blog1.jpg";
import blog2 from "@/assests/blog2.jpg";
import blog3 from "@/assests/blog3.jpg";
import blog4 from "@/assests/blog4.jpg";
import blog5 from "@/assests/blog5.jpg";
import blog6 from "@/assests/blog6.jpg";
import blog7 from "@/assests/blog7.jpg";
import blog8 from "@/assests/blog8.jpg";
import blog9 from "@/assests/blog9.jpg"; 
import blog10 from "@/assests/artical1.png"; 
import blog11 from "@/assests/artical2.png"; 
import blog12 from "@/assests/artical3.png"; 
import Title from '@/components/shared/Title';
import Image from 'next/image';
import { Pagination } from 'antd';
import { useRouter } from 'next/navigation';

const articles = [
    { title: "Strategic and commercial approach with issues", image: blog10, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog11, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog12, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog1, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog2, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog3, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog4, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog5, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog6, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog7, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog8, time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image: blog9, time: "Oct-20-2023" },
];

const Blogs = () => { 
  const router = useRouter()
    return (
        <div>
            <div className="bg-[#F7F7F7] pt-[40px] pb-[64px]"> 
                <div className="container">
                    <Title className="text-start pb-[40px]">Latest Articles</Title>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                        {articles.map((article, index) => (
                            <div
                                key={index}
                                className="bg-white p-3 shadow-md rounded-lg hover:shadow-lg" 
                                onClick={()=>router.push(`/blogs/1`)}
                            > 
                                <Image
                                    src={article.image || blog1} 
                                    alt={article.title} 
                                    height={200}
                                    width={400}
                                    className="h-[200px] w-full"
                                />
                                <h3 className="font-semibold text-[#1A1A1A] py-2 text-[16px]">{article.title}</h3>
                                <p className="text-gray-600 text-[14px] pb-2">{article.time}</p>
                            </div>
                        ))}
                    </div> 
                    <Pagination align="center" defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    );
};

export default Blogs;
