/* eslint-disable @next/next/no-img-element */
"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react'; 
import details from "@/assests/details.png"
import Link from 'next/link';
import Image from 'next/image';
import CommonBtn from '@/components/shared/CommonBtn';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const SubCategoryDetails = () => { 
    const searchParams = useSearchParams();
    const category = searchParams.get('category');  
    const SubCategory = searchParams.get('subcategory');   

    console.log(category); 
    console.log(SubCategory);
    return (
        <div className=' bg-[#F7F7F7] pb-[64px]'>
            <div className=" container ">
      <nav className="flex items-center text-sm mb-6 pt-2 text-gray-500">
        <Link href="/" className="text-emerald-500 hover:text-emerald-600">Home</Link>
        <span className="mx-2 text-emerald-500 ">›</span>
        <Link href="/consultation-category" className="text-emerald-500 hover:text-emerald-600">Start Your Consultation</Link>
        <span className="mx-2 text-emerald-500 ">›</span>
        <Link href={`/subcategory?category=${category}`} className="text-emerald-500 hover:text-emerald-600">For Men</Link>
        <span className="mx-2 text-emerald-500">›</span>
        <span className="text-emerald-500">{SubCategory}</span>
      </nav>

      <div className="mb-8">
        <Image 
          src={details}
          alt="Weight scale with feet" 
          height={332} 
          width={1400}
          className=" object-cover "
        />
      </div>

      <h1 className="text-2xl font-medium text-primary mb-6">Weight Problem</h1>

      <div className="space-y-6 text-gray-600">
        <p>
          Obesity is harmful to health. Being overweight can make you uncomfortable in your skin. In addition, obesity increases the risk of serious conditions. Slimming down to a healthy weight is of course the solution. But losing weight is easier said than done. How do you lose weight in a healthy way, and when can weight loss medication help? You can read all about it on this page.
        </p>

        <p>
          Men&apos;s healthcare needs are very different from men&apos;s. Women often need to address reoccurring health problems men never have to deal with. For example, women have to see the doctor, like it or not, for the contraceptive pill. Did you know you can order your medications online and skip a doctor&apos;s visit? All you have to do is set up an online doctor&apos;s consultation and, if approved, you will receive your medication within 2 days. It&apos;s as easy as that!
        </p>

        <p>
          Obesity is harmful to health. Being overweight can make you uncomfortable in your skin. In addition, obesity increases the risk of serious conditions. Slimming down to a healthy weight is of course the solution. But losing weight is easier said than done. How do you lose weight in a healthy way, and when can weight loss medication help? You can read all about it on this page.
        </p>

        <div className="pt-4">
          <p className="font-medium mb-4">Do you need help with selecting the right Consultation?</p>
          <Link href="/consultations" className=' w-full ' >
                    <CommonBtn className={` flex gap-1 items-center justify-center px-6  h-[56px] `}>
                        <span>Start Your Consultation</span>
                        <span><MdOutlineKeyboardArrowRight size={22} /></span>
                    </CommonBtn> 
                </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default SubCategoryDetails;