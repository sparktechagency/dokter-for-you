'use client';

import { message } from 'antd';
import { useState } from 'react';

type DeliveryOption = 'forward' | 'digital' | 'video';

const ConsultationsDelivery = ({ updateQNA, SubCategoryName, setForwardStatus, setDeliveryType, medicineLength, setConsultationType }: { updateQNA: (question: string, answer: string) => void, SubCategoryName: string | null, setForwardStatus: React.Dispatch<React.SetStateAction<boolean | null>>, setDeliveryType: React.Dispatch<React.SetStateAction<string | null>>, medicineLength?: number | undefined, setConsultationType: React.Dispatch<React.SetStateAction<string | null>> }) => {
  const [selectedOption, setSelectedOption] = useState<DeliveryOption | null>(null);

  const handleOptionChange = (option: DeliveryOption) => {
    setSelectedOption(option);
    setDeliveryType(option);
    setForwardStatus(option === 'forward' ? true : false);
    setConsultationType(option === 'video' ? 'video' : 'regular');

    const question = 'Delivery Prescription';
    const answer =
      option === 'forward'
        ? 'Forward Prescription to our Partner'
        : option === 'digital' ? 'Receive Digital Prescription' : 'Video Consultation';

    updateQNA(question, answer);

    if (option === 'video') {
      message.success('The doctor will send the video consultation appointment to your email within 24 hours.');
    }
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
          className={`relative flex flex-col p-4 py-7 border cursor-pointer transition-all duration-200 ${selectedOption === 'forward'
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-200 hover:border-gray-300 bg-[#f3f6ff]'
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

            </div>
          </div>

          <div className="absolute -top-3 right-6">
            <p className="h-[40px] rounded-bl-3xl text-[16px] font-[400] bg-[#60E1A5] text-black px-5 flex items-center justify-center">
              Most chosen
            </p>
          </div>
        </label>

        {/* Video Consultation Option */}
        <label
          className={` ${(medicineLength ?? 0) >= 1 ? 'hidden' : ''} relative flex flex-col p-4 border py-7 cursor-pointer transition-all duration-200 ${selectedOption === 'video'
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-200 hover:border-gray-300 bg-[#f3f6ff]'
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
              <span className="mt-1 block text-[16px] text-[#999999]">
                Your video call will connect you with a registered doctor who will assess your symptoms and prescribe the right treatment. The prescription will be sent to a registered pharmacy, and they will contact you about your medication.
              </span>

            </div>
          </div>
        </label>


        {/* Digital Prescription Option */}
        <label
          className={`relative flex flex-col p-4 border py-7 cursor-pointer transition-all duration-200 ${selectedOption === 'digital'
              ? 'border-emerald-500 bg-emerald-50'
              : 'border-gray-200 hover:border-gray-300 bg-[#f3f6ff]'
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

            </div>
          </div>
        </label>
      </div>

      <div className={`border-t border-gray-200 py-4 bg-[#e8eefe] px-12  ${(medicineLength ?? 0) >= 1 ? 'hidden' : ''}`}>
        <h3 className="font-medium text-gray-900 text-[16px]">Overview</h3>
        <div className="flex lg:flex-row flex-col gap-3 pt-2 justify-between items-center text-[16px]">
          <div>
            <p className="text-gray-500 ">
              Consultation for {SubCategoryName} - €25.00
            </p>
          </div>
          <div className="text-right">
            <p className="text-primary font-medium">Total - €25.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationsDelivery;
