import { ConfigProvider, Input } from 'antd';
import Image from 'next/image';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <div className='bg-[#F7F7F7] '>

      <div className='bg-primary '>
        <div className=" flex container py-[24px] gap-5">
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
              prefix={<FiSearch color='#0A2369' size={24} />} />
          </ConfigProvider>

          <button
            className="h-[48px] px-7 bg-emerald-500 hover:bg-emerald-600 text-white rounded-l-none"
          >
            Search
          </button>
        </div>
      </div>

      <div className='flex items-center justify-center py-[200px]'>
        <div>
          <Image src="/notFound.png" height={168} width={168} alt='' className='' />
          <h1 className='text-[#999999] text-[36px] font-medium pt-[25px]'>Data not found</h1>
        </div>
      </div>

    </div>
  );
};

export default Search;