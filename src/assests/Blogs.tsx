import React from 'react'; 
import blog1 from "@/assests/blog1.jpg"
import blog2 from "@/assests/blog2.jpg"
import blog3 from "@/assests/blog3.jpg"
import blog4 from "@/assests/blog4.jpg"
import blog5 from "@/assests/blog5.jpg"
import blog6 from "@/assests/blog6.jpg"
import blog7 from "@/assests/blog7.jpg"
import blog8 from "@/assests/blog8.jpg"
import blog9 from "@/assests/blog9.jpg" 
import Title from '@/components/shared/Title';
import Image from 'next/image';


const articles = [
    { title: "Strategic and commercial approach with issues", image:"/artical1.png" , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:"/artical2.png" , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:"/artical3.png"  , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:{blog1}  , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:{blog2}  , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:{blog3}  , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:{blog4}  , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:{blog5}  , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:{blog6}  , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:{blog7}  , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:{blog8}  , time: "Oct-20-2023" },
    { title: "Strategic and commercial approach with issues", image:{blog9}  , time: "Oct-20-2023" },
   
  ];  
const Blogs = () => {
    return (
        <div>
             <div className="bg-[#F7F7F7] pt-[40px]"> 
        <div className=' container'>
        <Title className=" text-center pb-[64px]">Latest Articles</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 ">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white p-3 shadow-md rounded-lg hover:shadow-lg"
          > 
            <Image  src={article?.image ? `${article?.image}` : blog1 }  alt=' '  height={200} width={400} className=' h-[200px] w-full '/>
            <h3 className="font-semibold text-[#1A1A1A] py-2 text-[16px]">{article.title}</h3>
            <p className="text-gray-600 text-[14px] pb-2">{article.time}</p>
          </div>
        ))}
      </div> 
 
 <div className=' flex items-center justify-center'>
      <button className="mt-10 px-6 py-2    border border-primary text-primary hover:text-white  hover:bg-primary">
      View all blog articles 
        </button> 
 </div>

        </div>
    </div>
        </div>
    );
};

export default Blogs;