/* eslint-disable @next/next/no-img-element */
"use client"
import { useCountry } from '@/app/(website)/CountryContext';
import { imageUrl } from '@/redux/base/baseApi';
import { useGetCategoryWithMedicineQuery } from '@/redux/features/website/searchSlice';
import { ConfigProvider, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  const [search, setSearch] = React.useState("");
  const [medLimit, setMedLimit] = React.useState(20);
  const { data: allCategories } = useGetCategoryWithMedicineQuery(search);
  const { country } = useCountry();
  const AllCategory = allCategories?.data?.categories;
  const AllMedicines = allCategories?.data?.medicines || []; 


  const handleSeeMore = () => {
    if (medLimit === 20) {
      setMedLimit(40);
    } else if (medLimit === 40) {
      setMedLimit(60);
    }
    else if (medLimit === 60) {
      setMedLimit(80);
    }
    else if (medLimit === 80) {
      setMedLimit(100);
    }
    else if (medLimit === 100) {
      setMedLimit(120);
    }
    else if (medLimit === 120) {
      setMedLimit(140);
    }
    else if (medLimit === 140) {
      setMedLimit(AllMedicines.length);
    }
  };

  return (
    <div className='bg-[#F7F7F7] '>
      {/* Search Bar */}
      <div className='bg-primary '>
        <form className=" flex container py-[24px] gap-5">
          <ConfigProvider theme={{ token: { borderRadius: 0 } }}>
            <Input
              type="text"
              placeholder="Search here..."
              className=" rounded-none w-full h-[48px] bg-white/10 text-white placeholder-gray-500 placeholder:text-[18px]"
              prefix={<FiSearch color='#0A2369' size={24} />}
              onChange={(e) => setSearch(e.target.value)}
            />
          </ConfigProvider>
        </form>
      </div>

      {/* Categories */}
      <p className=' text-2xl font-semibold text-primary pt-[52px] pb-5 container'> Categories </p>
      {
        AllCategory?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  container">
            {AllCategory.map((category: { _id: string, name: string, image: string, summary: string }, index: number) => (
              <Link href={`/subcategory?category=${category?._id}`} key={index}>
                <div className="bg-white lg:h-[150px] h-full rounded-none shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 p-[2px] rounded-full bg-primary text-white flex items-center justify-center">
                    <Image
                      src={category?.image?.startsWith("http") ? category?.image : `${imageUrl}${category?.image}`}
                      alt="Other"
                      height={48}
                      width={48}
                      style={{ objectFit: 'cover', borderRadius: '100%', height: "48px", width: "48px" }}
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-[#222222] mb-2">{category?.name}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {category?.summary?.slice(0, 70)}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className='flex items-center justify-center py-[20px]'>
            <div>
              <Image src="/notFound.png" height={148} width={168} alt='' />
              <h1 className='text-[#999999] text-[24px] font-medium pt-[25px]'>Categories not found</h1>
            </div>
          </div>
        )
      }

      {/* Medicines */}  
      {country !== "Netherlands" && 
      
      <div > 
      <p className=' text-2xl font-semibold text-primary pt-[52px] pb-5 container'> Medicines </p>
      {
        AllMedicines.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container pb-14">
              {AllMedicines.slice(0, medLimit).map((med: { _id: string, name: string, image: string, summary: string , subCategory?:{name:string , _id:string , category:{name:string}} }, index: number) => (
                <Link href={`/subcategory-details?category=${med?.subCategory?.category?.name}&&subcategory=${med?.subCategory?._id}`} key={index}>
                  <div className="border bg-white relative rounded-lg p-4 shadow hover:shadow-lg cursor-pointer">
                    <img
                      src={med?.image?.startsWith("http") ? med?.image : `${imageUrl}${med?.image}`}
                      alt={med.name}
                      className="h-24 mx-auto"
                    />
                    <h3 className="text-lg font-semibold mt-4 text-center">{med.name}</h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* See More Button */}
            {AllMedicines.length > medLimit && (
              <div className="flex justify-center pb-14">
                <button
                  className="px-6 py-2 text-lg font-medium bg-primary text-white"
                  onClick={handleSeeMore}
                >
                  See More
                </button>
              </div>
            )}
          </>
        ) : (
          <div className='flex items-center justify-center py-[20px]'>
            <div>
              <Image src="/notFound.png" height={148} width={168} alt='' />
              <h1 className='text-[#999999] text-[24px] font-medium pt-[25px]'>Medicine not found</h1>
            </div>
          </div>
        )
      }
      </div> 
      }
    </div>
  );
};

export default Search;
