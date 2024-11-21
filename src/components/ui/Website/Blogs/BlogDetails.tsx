import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const BlogDetails = () => {
    return (
        <div className='bg-[#F7F7F7]'>
             <div className="container ">
      {/* Header */}
      <header className="px-4 py-3 border-b"> 
        
        
            <Link href="/blogs" className='flex items-center text-gray-600 hover:text-gray-900' > 
          <ArrowLeft className="w-5 h-5 " />
          <span>Back</span>
            </Link>
      
      </header>

      {/* Hero Image */}
      <div className="relative  w-[100%]">
        <img
          src="/blog.jpg"
          alt="Medical professionals in a conference" 
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Content */}
      <main className=" mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-[500px] text-gray-900 pb-1">
          Strategic and commercial approach with issues
        </h1> 
        <p className="text-sm text-gray-500  mb-[52px]">Oct-20-2023</p>

        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed">
            Marriage is an eternal concept. It is meant to be a loving, intimate, selfless relationship between a man and a woman that lasts through eternity. The Bible teaches: &quot;Husbands, love your wives&quot; (Ephesians 5:25) and &quot;teach the young women ... to love their husbands&quot; (Titus 2:4). Love in marriage can be deeper and more selfless than in any other relationship. It is this type of love that binds spouses of His followers, and it is love that will last through eternity.
          </p>

          <p className="leading-relaxed">
            Marriage involves spiritual, emotional, and physical closeness. In the Old Testament, we are taught, &quot;Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh&quot; (Genesis 2:24). Married couples are expected to be unified in every way. Marriage can last forever. Your life on earth is not the beginning nor the end of your existence. After you die, your spirit will continue to live in the world of spirits and await the day when your spirit and physical body will be joined together eternally in the resurrection.
          </p>

          <p className="leading-relaxed">
            God wants our marriage relationships to also continue for eternity. This eternal union is possible when a man and a woman are faithful and sealed in holy temples, which those with proper authority from God fulfill these eternal ties. Marriage is an eternal concept. It is meant to be a loving, intimate, selfless relationship between a man and a woman that lasts through eternity. The Bible teaches: &quot;Husbands, love your wives&quot; (Ephesians 5:25) and &quot;teach the young women ... to love their husbands&quot; (Titus 2:4).
          </p>

  
        </div>
      </main>
    </div>
        </div>
    );
};

export default BlogDetails;