"use client"
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';  

interface propsType{
    current:number ,
    setCurrent:Dispatch<SetStateAction<number>> , 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    steps:({ title: string; content: React.JSX.Element; } | { content: string; title?: undefined; })[]; 
}
const StepsFooterBtn = ({current ,setCurrent, steps}:propsType) => {  
    const router = useRouter()
    
    const next = () => {
        setCurrent(prev => Math.min(prev + 1, steps.length - 1));
    };

    const prev = () => {
        setCurrent(prev => Math.max(prev - 1, 0));
    }; 
    return (
        <div className="steps-action flex items-center justify-end gap-3 pb-5"> 
        {current > 0 && ( 
                <button  onClick={prev} className='text-primary font-medium border-2 border-primary  mt-6 px-5 h-[44px] flex items-center gap-1'>
                  <span> <BsArrowLeft color='#0a2369' size={22} /> </span>
                </button>
            )} 

            {current < steps.length - 1 && (
                <button onClick={next} className='mt-6 px-5 h-[45px] bg-primary text-white  flex items-center gap-1'> 
                <span>Continue</span> <span><BsArrowRight size={22} /> </span>
                </button>
            )}
            {current === steps.length - 1 && (
                <button   onClick={() =>{router.push("/profile")}} className='mt-6 px-5 py-[10px] bg-primary text-white ' >
                    Done
                </button>
            )}
            
        </div>
    );
};

export default StepsFooterBtn;