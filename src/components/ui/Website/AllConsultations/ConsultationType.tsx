'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react'; 
import { message } from 'antd';


type DeliveryOption = 'regular' | 'video'; 

interface consultationTypeInterface {
    setConsultationType:(value:DeliveryOption | null)=>void 
    updateQNA: (question: string, answer: string) => void
}

const ConsultationType = ({setConsultationType , updateQNA}:consultationTypeInterface) => { 
    const [selectedOption, setSelectedOption] = useState<DeliveryOption | null>(null);  
    setConsultationType(selectedOption); 

    const handleOptionChange = (option: DeliveryOption) => {
        setSelectedOption(option);
        setConsultationType(option);   

        const question = 'Delivery Prescription';
        const answer =
          option === 'regular'
            ? 'regular'
            : 'video consultation';
    
        updateQNA(question, answer);  

        if (option === 'video') {
          message.success('The doctor will send the video consultation appointment to your email within 24 hours.');
      }

    };

    return (
        <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-[24px] font-medium text-[#222222]">Consultation Type</h2>
        <p className="text-[16px] text-[#6B6B6B]">
        Please choose your consultation type as you wish.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* regular Prescription Option */}
        <label
          className={`relative flex flex-col p-4 py-7 border cursor-pointer transition-all duration-200 ${
            selectedOption === 'regular'
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start space-x-3">
            <input
              type="radio"
              name="delivery"
              className="mt-1 h-4 w-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              checked={selectedOption === 'regular'}
              onChange={() => handleOptionChange('regular')}
            />
            <div className="flex-1">
              <span className="block font-medium text-gray-900 text-[16px]">
              Regular
              </span>
              <span className="mt-1 block text-[16px] text-[#999999] font-[400]">
              Apotheek Zaandam Oost ensures that your medication is delivered to your home by a partner pharmacy.
              </span>
              <button className="mt-3 inline-flex items-center text-sm font-medium text-[#1854F9]">
                More Information
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
         
            <div className="absolute -top-3 right-6 ">
         <p className=' h-[40px] rounded-bl-3xl text-[16px] font-[400] bg-[#60E1A5] text-black px-5 flex items-center justify-center '>  Most chosen </p>    
            </div>
       
        </label>

        {/* video Prescription Option */}
        <label
          className={`relative flex flex-col p-4 border py-7 cursor-pointer transition-all duration-200 ${
            selectedOption === 'video'
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start space-x-3">
            <input
              type="radio"
              name="delivery"
              className="mt-1 h-4 w-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              checked={selectedOption === 'video'}
              onChange={() => handleOptionChange('video')}
            />
            <div className="flex-1">
              <span className="block font-medium text-gray-900 text-[16px]">
              Video Consultation
              </span>
              <span className="mt-1 block  text-[16px] text-[#999999]">
              With  digital prescription, you buy your medication at your own pharmacy prescription, you buy your medication at your own pharmacy
              </span>
              <button className="mt-3 inline-flex items-center text-sm font-medium text-[#1854F9]">
                More Information
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </label>
      </div>

      <div className="border-t border-gray-200 pt-4"> 

      <h3 className="font-medium text-gray-900 text-[16px]">Overview</h3>
        <div className="flex lg:flex-row flex-col gap-3 justify-between items-center text-[16px]">
          <div> 
            <p className="text-gray-500 pt-4 ">Consultation for man / weigh problem - $25.00</p>
          </div>
          <div className="text-right">
            <p className="text-primary font-medium">Total - $25.00</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ConsultationType;