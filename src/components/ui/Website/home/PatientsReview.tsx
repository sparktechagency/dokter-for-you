/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Title from "@/components/shared/Title";
import { useGetAllReviewQuery } from "@/redux/features/website/reviewSlice";
import { imageUrl } from "@/redux/base/baseApi";
export interface Root {
  _id: string
  user: User
  description: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface User {
  _id: string
  email: string
  profile: string
  firstName: string
  location: string
}


export default function PatientsReview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center", // Ensures the slides are centered
    skipSnaps: false,
  });

  const { data: allReviews } = useGetAllReviewQuery(undefined);
  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <section className="pt-[72px] pb-[94px] bg-[#F7F7F7]">
      <div className="mx-auto  px-4">
        <div className="text-center  pb-[62px]">
          <p className="text-[#11D279] text-[16px] font-medium mb-2">Testimonial</p>
          <Title className="">
            WHAT OUR PATIENTS SAYS?
          </Title>
        </div>

          <div className="embla overflow-hidden" ref={emblaRef} >
            <div className="embla__container flex  " >
              {allReviews?.data?.map((testimonial: Root) => (
                <div
                  key={testimonial._id}
                  className="embla__slide flex-[0_0_80%] min-w-0 bg-[#FDFDFD]  shadow-lg me-4" 
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial?.user?.profile?.startsWith("https") ?
                          testimonial?.user?.profile : `${imageUrl}${testimonial?.user?.profile}`}
                        alt={testimonial?.user?.firstName}
                        width={70}
                        height={70}
                        style={{ borderRadius: "100%", width: "70px", height: "70px" }}
                        className="rounded-full border-2 p-1 border-[#E6E6E6]"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-xl font-semibold">{testimonial?.user?.firstName}</h3>
                        <p className="text-[#6B6B6B]">{testimonial?.user?.location}</p>
                      </div>
                    </div>
                    <p className="text-[#6B6B6B] leading-relaxed py-2">{testimonial?.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {allReviews?.data?.map((_: any, index: number) => (
                <button
                  key={index}
                  className="w-2.5 h-2.5 rounded-full bg-primary/20 transition-all duration-300 hover:bg-primary/50"
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
      </div>
    </section>
  );
}
