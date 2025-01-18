'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type DeliveryOption = 'forward' | 'digital';

const Delivery = ({ updateQNA , SubCategoryName , setForwardStatus }: { updateQNA: (question: string, answer: string) => void  , SubCategoryName:string|null , setForwardStatus: React.Dispatch<React.SetStateAction<boolean | null>>}) => {
  const [selectedOption, setSelectedOption] = useState<DeliveryOption | null>(null);

  const handleOptionChange = (option: DeliveryOption) => {
    setSelectedOption(option);
    setForwardStatus(option === 'forward' ? true : false );
    const question = 'Delivery Prescription';
    const answer =
      option === 'forward'
        ? 'Forward Prescription to our Partner'
        : 'Receive Digital Prescription';

    updateQNA(question, answer);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-[24px] font-medium text-[#222222]">Delivery</h2>
        <p className="text-[16px] text-[#6B6B6B]">
          Please make your choice below to receive your Consultation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Forward Prescription Option */}
        <label
          className={`relative flex flex-col p-4 py-7 border cursor-pointer transition-all duration-200 ${
            selectedOption === 'forward'
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start space-x-3">
            <input
              type="radio"
              name="delivery"
              className="mt-1 h-4 w-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              checked={selectedOption === 'forward'}
              onChange={() => handleOptionChange('forward')}
            />
            <div className="flex-1">
              <span className="block font-medium text-gray-900 text-[16px]">
                Forward Prescription to our Partner
              </span>
              <span className="mt-1 block text-[16px] text-[#999999] font-[400]">
                We will send your medication and your prescription is delivered to your home by a
                partner pharmacy
              </span>
              <button className="mt-3 inline-flex items-center text-sm font-medium text-[#1854F9]">
                More Information
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="absolute -top-3 right-6">
            <p className="h-[40px] rounded-bl-3xl text-[16px] font-[400] bg-[#60E1A5] text-black px-5 flex items-center justify-center">
              Most chosen
            </p>
          </div>
        </label>

        {/* Digital Prescription Option */}
        <label
          className={`relative flex flex-col p-4 border py-7 cursor-pointer transition-all duration-200 ${
            selectedOption === 'digital'
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start space-x-3">
            <input
              type="radio"
              name="delivery"
              className="mt-1 h-4 w-4 text-emerald-500 border-gray-300 focus:ring-emerald-500"
              checked={selectedOption === 'digital'}
              onChange={() => handleOptionChange('digital')}
            />
            <div className="flex-1">
              <span className="block font-medium text-gray-900 text-[16px]">
                Receive Digital Prescription
              </span>
              <span className="mt-1 block text-[16px] text-[#999999]">
                We will send you a prescription and buy your medication at your own pharmacy
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
            <p className="text-gray-500 pt-4">
              Consultation for {SubCategoryName} - $25.00
            </p>
          </div>
          <div className="text-right">
            <p className="text-primary font-medium">Total - $25.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
