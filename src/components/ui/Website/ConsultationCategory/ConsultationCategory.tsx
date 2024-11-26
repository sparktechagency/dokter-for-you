/* eslint-disable @next/next/no-img-element */
import React from 'react';
  import Link from 'next/link';

import Title from '@/components/shared/Title'; 
import man from "@/assests/man.png"
import woman from "@/assests/woman.png"
import pain from "@/assests/pain.png"
import skin from "@/assests/skin.png"
import services from "@/assests/services.png"
import sleep from "@/assests/sleep.png"
import stds from "@/assests/stds.png"
import children from "@/assests/children.png"
import Image from 'next/image';
  
  const categories = [
    {
      icon: <Image src={man} alt="" height={80} width={80} className="" />, 
      category:"Man" ,
      title: "For Man",
      description: "Id venenatis elementum Cras Lorem labortis, Quisque tincidunt massa dignissim"
    },
    {
        icon: <Image src={woman} alt="Woman icon" height={80} width={80} />,
        category:"Women" ,
        title: "For Woman",
        description: "Id venenatis elementum Cras Lorem labortis, Quisque tincidunt massa dignissim"
      },
      {
        icon: <Image src={children} alt="Children icon" height={80} width={80} />, 
        category:"Children" ,
        title: "For Children",
        description: "Id venenatis elementum Cras Lorem labortis, Quisque tincidunt massa dignissim"
      },
      {
        icon: <Image src={stds} alt="STDs icon" height={80} width={80} />,
        title: "STDs", 
        category:"STDs" ,
        description: "Id venenatis elementum Cras Lorem labortis, Quisque tincidunt massa dignissim"
      },
      {
        icon: <Image src={skin} alt="Skin care icon" height={80} width={80} />,
        title: "Skin Care", 
        category:"Skin" ,
        description: "Id venenatis elementum Cras Lorem labortis, Quisque tincidunt massa dignissim"
      },
      {
        icon: <Image src={pain} alt="Pain icon" height={80} width={80} />,
        title: "Pain", 
        category:"Pain" ,
        description: "Id venenatis elementum Cras Lorem labortis, Quisque tincidunt massa dignissim"
      },
      {
        icon: <Image src={sleep} alt="Sleep icon" height={80} width={80} />,
        title: "Sleep", 
        category:"Sleep" ,
        description: "Id venenatis elementum Cras Lorem labortis, Quisque tincidunt massa dignissim"
      },
      {
        icon: <Image src={services} alt="Other services icon" height={80} width={80} />,
        title: "Other Services", 
        category:"Other Services" ,
        description: "Id venenatis elementum Cras Lorem labortis, Quisque tincidunt massa dignissim"
      }
  ];
const ConsultationCategory = () => {
    return (
        <div className='bg-[#F7F7F7]'>
           <div className="container ">
      <nav className="flex items-center gap-2 text-sm mb-6 pt-2">
        <Link href="/home" className="text-[#00D6A3] hover:underline">Home</Link>
        <span className="text-[#00D6A3]">›</span>
        <Link href="/consultation-category" className="text-[#00D6A3] hover:underline">Start Your Consultation</Link>
      </nav>

      <Title className=" mb-10">
        Select Your Consultation Category
      </Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-[92px]" >
        {categories.map((category, index) => ( 
            <Link href={`/subcategory?category=${category?.category}`} key={index}> 
          <div 
            
            className="bg-white rounded-none shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 p-2 rounded-full bg-primary text-white flex items-center justify-center">
              {category.icon}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#222222] mb-2">
                {category.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          </div> 
          </Link>
        ))}
      </div>
    </div>
        </div>
    );
};

export default ConsultationCategory;