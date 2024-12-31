/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { TbBrandZoom } from 'react-icons/tb';
import Link from 'next/link';

interface ConsultationDetailsProps {
  consultationId: string;
  onClose: () => void;
}
 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ConsultationDetails =({ consultationId , onClose, consultations }: ConsultationDetailsProps) => { 
    //console.log("details Page" ,consultationId, consultations);
  return (
    <div className=''>
      <button
        onClick={onClose}
        className="mb-6 inline-flex items-center text-primary font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Consultations
      </button> 

      <div className='bg-white p-4 '>
 
 <p className=' font-medium lg:text-[32px] text-[22px] pb-[24px]'>Your Dr. Consultation</p>

  {/* Tracking Info */}
  <div className="bg-[#E7FBF2] p-4 rounded-none mb-6">
    <div className="text-[16px] flex flex-col gap-2">
      {/* <p className="text-[#4E4E4E]">Tracking No. #2164564615</p> */}
      <p className="text-[#4E4E4E]">Man problem/Erectile dysfunction</p>
      <p className="text-[#4E4E4E]">1/1/2025, 5:30 pm</p>
    </div>
  </div>
 
 <div className='bg-[#F7F7F7] p-4'>
  {/* Consultation Details */}
  <div className=" pb-4 mb-4 ">
    <div className="flex justify-between items-center mb-2">
      <div>
        <p className="text-[16px] text-[#4E4E4E]">Consultation for man&apos;s weigh problem</p>
        <p className="text-sm text-[#999999]">Medical questions/view, doctor&apos;s advice and prescription</p>
      </div>
      <p className="text-right text-primary">$25.00</p>
    </div>
    <div className="flex items-center justify-end gap-[200px]">
      <span className='text-[#6B6B6B]'>discount -</span>
      <span className='text-[#6B6B6B]'>$00.00</span>
    </div>
    <div className="flex justify-end items-center font-medium mt-3 gap-[200px] border-t pt-2">
      <span>Total -</span>
      <span>$25.00</span>
    </div>
  </div>

  {/* Prescription Report */}
  <div className="p-6 pb-11 mb-6 bg-white flex flex-col gap-4">
    <h3 className="text-center font-medium text-2xl text-primary ">Prescription Report</h3>
    <p className="text-center text-green-600 text-sm font-medium ">
      Our doctor has sent your prescription, please download the file.
    </p>

    <Link href={""} className="mx-auto flex items-center justify-center gap-2 px-6 bg-primary text-white h-[48px]">
      <TbBrandZoom className="h-4 w-4" size={26} color='white'/>
      Meeting Link
    </Link>
  </div>
 </div>


  {/* Bottom Text and Icons */}
  <div className="text-sm text-gray-600 mb-6 font-medium pt-6">
    <p>Praesent eget Nunc quis libero, ipsum nisi. Vestibulum sit ipsum facilisis eu leo. Nibh Praesent scelerisque ex Donec ipsum hendrerit ut non, ipsum Ut non, gravida quis at vitae eu enim. tocus, dui ipsum tincidunt urna elit felis, tempor</p>
    <p className="mt-4">Morbi nisi enim, adipiscing eget dui viverra quam Cras libero, Nunc ultrici lacus, lorem. lacus elit ex, leo ipsum elit venenatis cursus ex enim, dignis</p>
  </div>


      </div>
</div>
    
  );
} 

export default ConsultationDetails ;