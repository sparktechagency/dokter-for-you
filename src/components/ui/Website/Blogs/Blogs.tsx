"use client"
import React, { useState } from 'react';
import Title from '@/components/shared/Title';
import Image from 'next/image';
import { Pagination } from 'antd';
import { useRouter } from 'next/navigation';
import { useGetAllArticlesQuery } from '@/redux/features/website/articlesSlice';
import { imageUrl } from '@/redux/base/baseApi';
import moment from 'moment';


const Blogs = () => {
    const router = useRouter()
    const [page, setPage] = useState(1)
    const { data: allArticles } = useGetAllArticlesQuery(page)
    const articalsData = allArticles?.data
    console.log(articalsData?.length);

    return (
        <div>
            <div className="bg-[#F7F7F7] pt-[40px] pb-[64px]">
                <div className="container">
                    <Title className="text-start pb-[40px]">Latest Articles</Title>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
                        {articalsData?.map((article: { title: string, image: string, createdAt: string, _id: string }, index: number) => (
                            <div
                                key={index}
                                className="bg-white p-3 shadow-md rounded-lg hover:shadow-lg cursor-pointer"
                                onClick={() => router.push(`/blogs/${article._id}`)}
                            >
                                <Image
                                    src={article?.image?.startsWith("http") ? article?.image : `${imageUrl}${article?.image}`}
                                    alt={article.title}
                                    height={200}
                                    width={400}
                                    className="h-[200px] w-full"
                                />
                                <h3 className="font-semibold text-[#1A1A1A] py-2 text-[16px]">{article.title}</h3>
                                <p className="text-gray-600 text-[14px] pb-2">{moment(article.createdAt).format("MMM DD YYYY")}</p>
                            </div>
                        ))}
                    </div>  

                    <div className={`${articalsData?.length <= 0 ? "hidden" : "block"}`}>
                <Pagination align="center"
                            current={page}
                            total={allArticles?.pagination?.total || 0}
                            pageSize={10}
                            onChange={(page) => setPage(page)} />
                    </div>

             

                </div>
            </div>
        </div>
    );
};

export default Blogs;
