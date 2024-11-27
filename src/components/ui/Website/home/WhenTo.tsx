"use client"
import Title from '@/components/shared/Title';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const WhenTo = () => { 
  const router = useRouter()
    return ( 
        <div className=' mb-[64px] w-full container flex flex-col lg:flex-row items-center gap-10'> 
                <div className=" lg:w-1/2 w-full  ">
        <Title className=" pb-[40px]">When To Use Doctor For You</Title>
        <p className=" text-gray-600">
        id venenatis elementum Cras Lorem lobortis, Quisque tincidunt massa dignissim, Morbi at Lorem vel elementum non at tincidunt Donec tincidunt Praesent sapien  est. ex id porta volutpat ipsum id Vestibulum odio lacus sed facilisis lacus felis, dui lacus, Ut placerat. dui volutpat dui. Quisque Praesent at, enim. ex In 

tincidunt Ut quis vitae dui. urna. tincidunt elit placerat elit lacus, Vestibulum Donec Morbi vel tortor. efficitur. Donec leo. nisi tincidunt convallis. eget id venenatis elementum Cras Lorem lobortis, Quisque tincidunt massa dignissim, Morbi at Lorem vel elementum non at tincidunt Donec tincidunt Praesent sapien  est. ex id porta volutpat 
        </p>
        <button className="mt-6 px-6 py-2  border border-primary text-primary hover:text-white  hover:bg-primary" onClick={()=>router.push(`/about/1`)}>
          Learn More
        </button>
      </div>

            <div className=' lg:mt-0 mt-4'> 
 <Image src="/whenTo.svg"  height={450}  width={510}  className=' object-cover '  alt=''/> 
            </div>
        </div>
    
    );
};

export default WhenTo;