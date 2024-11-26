"use client"
import Title from '@/components/shared/Title';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'; 
import weight from "@/assests/weight.png"
import erectile from "@/assests/erectile.png"
import prostate from "@/assests/prostate.png"
import premature from "@/assests/premature.png"
import hairloss from "@/assests/hairloss.jpg"

const SubCategory = () => { 
    const searchParams = useSearchParams();
    const category = searchParams.get('category'); 

    const consultationCategories = [
        {
          title: 'Weight Problem',
          description: 'Id venenatis elementum Cras Lorem laboris, Quisque tincidunt massa',
          image: weight,
          link: '#'
        },
        {
          title: 'Erectile dysfunction',
          description: 'Id venenatis elementum Cras Lorem laboris, Quisque tincidunt massa',
          image: erectile,
          link: '#'
        },
        {
          title: 'Prostate',
          description: 'Id venenatis elementum Cras Lorem laboris, Quisque tincidunt massa',
          image: prostate,
          link: '#'
        },
        {
          title: 'Premature Ejaculation',
          description: 'Id venenatis elementum Cras Lorem laboris, Quisque tincidunt massa',
          image: premature,
          link: '#'
        },
        {
          title: 'Hair loss',
          description: 'Id venenatis elementum Cras Lorem laboris, Quisque tincidunt massa',
          image: hairloss,
          link: '#'
        }
      ];
  
    console.log(category);
    return (
        <div className='bg-[#F7F7F7]'>
           <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-4 text-sm">
        <Link href="/home" className="text-emerald-500 hover:text-emerald-600">Home</Link>
        <span className="mx-2 text-emerald-5000">›</span>
        <Link href="/consultation-category" className="text-emerald-500 hover:text-emerald-600">Start Your Consultation</Link>
        <span className="mx-2 text-emerald-5000">›</span>
        <span className="text-gray-500">For {category}</span>
      </nav>

      {/* Header */}
      <Title className=" mb-4">For {category}</Title>
      
      {/* Description */}
      <p className="text-[#6B6B6B] mb-10 ">
        Men&apos;s healthcare needs are very different from men&apos;s. Women often need to address reoccurring health problems men never have to deal with. For example, women have to see the doctor, like it or not, for the contraceptive pill. Did you know you can order your medications online and skip a doctor&apos;s visit? All you have to do is set up an online doctor&apos;s consultation and, if approved, you will receive your medication within 2 days. It&apos;s as easy as that!
      </p>

      {/* Category Title */}
      <Title className=" mb-6">{category}&apos;s Consultation Category</Title>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {consultationCategories.map((subCategory, index) => (
          <div key={index} className=" overflow-hidden ">
            <div className="relative h-48">
              <Image
                src={subCategory.image}
                alt={subCategory.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="">
              <h3 className="text-[24px] font-medium text-[#11D279] my-2">{subCategory.title}</h3>
              <p className="text-[#6B6B6B] mb-2">{subCategory.description}</p>
              <Link 
                href={`/subcategory-details?category=${category}&&subcategory=${subCategory.title}`}
                className="text-[#1854F9] underline "
              >
                Click more {'>'}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
        </div>
    );
};

export default SubCategory;