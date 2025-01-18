"use client"
import { imageUrl } from '@/redux/base/baseApi';
import { useGetAllCategoryQuery } from '@/redux/features/website/categorySlice';
import { ConfigProvider, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = () => { 
  const [search , setSearch] = React.useState("")
  const { data: allCategories } = useGetAllCategoryQuery(search)
  const AllCategory = allCategories?.data
 console.log(search);

  return (
    <div className='bg-[#F7F7F7] '>

      <div className='bg-primary '>
        <form className=" flex container py-[24px] gap-5">
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 0
              },
            }}
          >
            <Input
              type="text"
              placeholder="Search here..."
              className=" rounded-none w-full h-[48px] bg-white/10  text-white placeholder-gray-500  placeholder:text-[18px] "
              prefix={<FiSearch color='#0A2369' size={24} />}  
              onChange={(e) => setSearch(e.target.value)}
               />
          </ConfigProvider>


        </form>
      </div>


      {
        AllCategory?.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-[52px] container" >
          {AllCategory?.map((category: { _id: string, name: string, image: string, summary: string }, index: number) => (
            <Link href={`/subcategory?category=${category?._id}`} key={index}>
              <div className="bg-white h-[150px] rounded-none shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 p-2 rounded-full bg-primary text-white flex items-center justify-center">

                  <Image src={category?.image?.startsWith("http") ? category?.image : `${imageUrl}${category?.image}`} alt="Other" height={48} width={48} style={{ objectFit: 'cover', borderRadius: '100%', height: "48px", width: "48px" }} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#222222] mb-2">
                    {category?.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category?.summary?.slice(0, 80)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div> : <div className='flex items-center justify-center py-[200px]'>
          <div>
            <Image src="/notFound.png" height={168} width={168} alt='' className='' />
            <h1 className='text-[#999999] text-[36px] font-medium pt-[25px]'>Data not found</h1>
          </div>
        </div>

      }



    </div>
  );
};

export default Search;