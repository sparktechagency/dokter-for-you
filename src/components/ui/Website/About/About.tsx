
 "use client"
 import Title from '@/components/shared/Title';
import Image from 'next/image';
import React from 'react'; 
import about1 from "@/assests/about1.png"
import about2 from "@/assests/about2.png"
import { useRouter } from 'next/navigation';

const About = () => { 
    const router = useRouter()
    return (
        <div className=' pt-[60px] bg-[#f7f7f7] min-h-screen'>
            
            <div className=' container'> 
                 {/* 1st section  */}
            <div className=' mb-[94px] w-full container flex flex-col lg:flex-row items-center gap-10'> 
                <div className=" lg:w-1/2  w-full  ">
        <Title className=" pb-[24px]">Our Story</Title>
        <p className=" text-gray-600">
        id venenatis elementum Cras Lorem lobortis, Quisque tincidunt massa dignissim, Morbi at Lorem vel elementum non at tincidunt Donec tincidunt Praesent sapien  est. ex id porta volutpat ipsum id Vestibulum odio lacus sed facilisis lacus felis, dui lacus, Ut placerat. dui volutpat dui. Quisque Praesent at, enim. ex In 

tincidunt Ut quis vitae dui. urna. tincidunt elit placerat elit lacus, Vestibulum Donec Morbi vel tortor. efficitur. Donec leo. nisi tincidunt convallis. eget id venenatis elementum Cras Lorem lobortis, Quisque tincidunt massa dignissim, Morbi at Lorem vel elementum non at tincidunt Donec tincidunt Praesent sapien  est. ex id porta volutpat 
        </p>
        <button className="mt-6 px-6 py-2  border border-primary text-primary hover:text-white  hover:bg-primary" onClick={()=>router.push(`/about/1`)}>
        View More
        </button>
      </div>

            <div className=' lg:w-1/2 w-full'> 
 <Image src={about1}  height={450}  width={510}  className=' '  alt=''/> 
            </div>
        </div>  

        
                 {/* 2nd section  */}
            <div className=' mb-[94px] w-full container flex flex-col lg:flex-row items-center gap-10'> 
                <div className=" lg:w-1/2 w-full lg:order-1 -order-1 ">
        <Title className=" pb-[24px]">When to use Doctor For You</Title>
        <p className=" text-gray-600">
        id venenatis elementum Cras Lorem lobortis, Quisque tincidunt massa dignissim, Morbi at Lorem vel elementum non at tincidunt Donec tincidunt Praesent sapien  est. ex id porta volutpat ipsum id Vestibulum odio lacus sed facilisis lacus felis, dui lacus, Ut placerat. dui volutpat dui. Quisque Praesent at, enim. ex In 

tincidunt Ut quis vitae dui. urna. tincidunt elit placerat elit lacus, Vestibulum Donec Morbi vel tortor. efficitur. Donec leo. nisi tincidunt convallis. eget id venenatis elementum Cras Lorem lobortis, Quisque tincidunt massa dignissim, Morbi at Lorem vel elementum non at tincidunt Donec tincidunt Praesent sapien  est. ex id porta volutpat 
        </p>
        <button className="mt-6 px-6 py-2  border border-primary text-primary hover:text-white  hover:bg-primary" onClick={()=>router.push(`/about/1`)}>
        View More
        </button>
      </div>

            <div className='lg:w-1/2 w-full'> 
 <Image src="/whenTo.svg"  height={450}  width={510}  className=' '  alt=''/> 
            </div>
        </div>  

                 {/* 3rd section  */}
            <div className=' pb-[94px] w-full container flex flex-col lg:flex-row items-center gap-10'> 
                <div className=" lg:w-1/2 w-full  ">
        <Title className=" pb-[24px]">Our Mission </Title>
        <p className=" text-gray-600">
        id venenatis elementum Cras Lorem lobortis, Quisque tincidunt massa dignissim, Morbi at Lorem vel elementum non at tincidunt Donec tincidunt Praesent sapien  est. ex id porta volutpat ipsum id Vestibulum odio lacus sed facilisis lacus felis, dui lacus, Ut placerat. dui volutpat dui. Quisque Praesent at, enim. ex In 

tincidunt Ut quis vitae dui. urna. tincidunt elit placerat elit lacus, Vestibulum Donec Morbi vel tortor. efficitur. Donec leo. nisi tincidunt convallis. eget id venenatis elementum Cras Lorem lobortis, Quisque tincidunt massa dignissim, Morbi at Lorem vel elementum non at tincidunt Donec tincidunt Praesent sapien  est. ex id porta volutpat 
        </p>
        <button className="mt-6 px-6 py-2  border border-primary text-primary hover:text-white  hover:bg-primary" onClick={()=>router.push(`/about/1`)}>
        View More
        </button>
      </div>

            <div className='lg:w-1/2 w-full'> 
 <Image src={about2}  height={400}  width={550}  className=' '  alt=''/> 
            </div>
        </div>  



            </div>
        </div>
    );
};

export default About;