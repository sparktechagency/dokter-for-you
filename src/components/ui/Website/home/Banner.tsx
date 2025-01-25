
import React from 'react'; 
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';

import "./style.css" 
import { Poppins } from 'next/font/google'
import CommonBtn from '@/components/shared/CommonBtn';
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

const Banner = () => { 

    return (
        <div 
            className="  background-container z-0" >  

            <div className="container  flex flex-col  gap-0 pt-[150px] items-center lg:items-start text-center  lg:h-full h-32">
             
                <h1 className={` lg:text-[53px] text-[40px] font-[600]  tracking-wider uppercase  text-[#11D279] ${poppins.className}`}>
                COMPLETE 
              
                </h1> 

                <h1 className={` lg:text-[53px] text-[36px] font-[600]  tracking-wider uppercase text-primary ${poppins.className}`}>
                HEALTH SOLUTION
                </h1>
                
        
                <p className={`mt-3 lg:px-0 px-2 lg:text-[24px] text-[20px] font-[400] ${poppins.className} tracking-wide lg:text-start lg:w-[488px]  text-[#4E4E4E] ` }>
                We provide you the best consultation and fastest delivery of your medicine
                </p> 

                <Link href="/consultation-category" className=' w-full lg:block flex items-center justify-center  ' >
                    <CommonBtn className={`mt-10 flex gap-1 items-center justify-center px-6  h-[56px]  ${poppins.className}`}>
                        <span>Start Your Consultation</span>
                        <span><MdOutlineKeyboardArrowRight size={22} /></span>
                    </CommonBtn> 
                </Link>
            </div> 
        </div>
    );
};

export default Banner;
