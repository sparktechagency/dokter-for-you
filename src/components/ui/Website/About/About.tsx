"use client";

import Title from "@/components/shared/Title";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useGetAllAboutQuery } from "@/redux/features/website/footerSlice";
import { imageUrl } from "@/redux/base/baseApi";

const About = () => {
    const router = useRouter();
    const { data: aboutData } = useGetAllAboutQuery(undefined);

    return (
        <div className="pt-[60px] bg-[#f7f7f7] min-h-screen">
            <div className="container">
                {aboutData?.data?.map((item:{ _id: string, title: string, description: string, image: string}, index:number) => {
                    const wordLimit = 74;
                    const words = item?.description?.split(" ") || [];
                    const truncatedText = words.slice(0, wordLimit).join(" ");
                    const hasMore = words.length > wordLimit;
                    

                    return (
                        <div
                            key={item._id}
                            className={`mb-[94px] w-full container flex flex-col lg:flex-row items-center gap-10 ${
                                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Content Section */}
                            <div className="lg:w-1/2 w-full">
                                <Title className="pb-[24px]">{item?.title}</Title>
                                <p className="text-gray-600">
                                    {truncatedText} {hasMore && "..."}
                                </p>
                                {hasMore && (
                                    <button
                                        className="mt-6 px-6 py-2 border border-primary text-primary hover:text-white hover:bg-primary"
                                        onClick={() => router.push(`/about/${item._id}`)}
                                    >
                                        View More
                                    </button>
                                )}
                            </div>

                            {/* Image Section */}
                            <div className="lg:w-1/2 w-full">
                                <Image
                                    src={item?.image?.startsWith("http") ? item.image : `${imageUrl}${item.image}`}
                                    height={450}
                                    width={510}
                                    alt={item.title}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default About;
