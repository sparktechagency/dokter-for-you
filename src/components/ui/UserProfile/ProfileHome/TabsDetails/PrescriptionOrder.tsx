import { ArrowLeft, Download } from 'lucide-react';
import Image from 'next/image';
import React from 'react'; 
import ceevit from "@/assests/Ceevit.png"
import ace from "@/assests/Ace.png"
interface ConsultationDetailsProps {
    consultationId: string;
    onClose: () => void;
  } 
 

const PrescriptionOrder = ({ consultationId , onClose }: ConsultationDetailsProps) => { 
    //console.log(consultationId);
    return (
      <div className=''>
      <button
        onClick={onClose}
        className="mb-6 inline-flex items-center text-primary font-medium"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back 
      </button> 

      <div className='bg-white p-4 '>
 
 <p className=' font-medium lg:text-[32px] text-[22px] pb-[24px]'>Your Medication Details</p>

  {/* Tracking Info */}
  <div className="bg-[#E7FBF2] p-4 rounded-none mb-6">
    <div className="text-[16px] flex flex-col gap-2">
      <p className="text-[#4E4E4E]">Tracking No. #2164564615</p>
      <p className="text-[#4E4E4E]">Man problem/Erectile dysfunction</p>
      <p className="text-[#4E4E4E]">1/1/2025, 5:30 pm</p>
    </div>
  </div>
 
 <div className='bg-[#F7F7F7] p-4'>
  {/* Consultation Details */}
  <div className=" pb-4 mb-4 ">
    <div className="flex justify-between items-center mb-2">
      <div>
        <p className="lg:text-[16px] text-[14px] text-[#4E4E4E]">Consultation for man&apos;s weigh problem</p>
        <p className="lg:text-sm text-[12px] text-[#999999]">Medical questions/view, doctor&apos;s advice and prescription</p>
      </div>
      <p className="text-right text-primary">$25.00</p>
    </div>
    <div className="flex items-center justify-end gap-[200px] text-[14px]">
      <span className='text-[#6B6B6B]'>discount - </span>
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
    <p className="text-center text-red-500 text-sm ">
      Stating that it is valid for 7 days only and can be use once.
    </p>
    <button className="mx-auto flex items-center justify-center gap-2 px-6 bg-primary text-white h-[48px]">
      <Download className="h-4 w-4" size={24} color='white'/>
      Download now
    </button>
  </div>
 </div>

  {/* Address Information */}
  <div className="bg-[#E8EEFE] p-4 mt-6  grid lg:grid-cols-5 grid-cols-1 gap-4 mb-6">
    <div>
      <p className="text-sm font-medium mb-2">Address:</p>
      <p className="text-sm text-[#6B6B6B]">
        john david<br />
        101 new house street 2957<br />
        amsterdam, NL
      </p>
    </div>
    <div>
      <p className="text-sm font-medium mb-2">Billing address:</p>
      <p className="text-sm">
        <span className="text-green-600">john david</span><br />
        <span className="text-green-600">101 new house street 2957</span><br />
        <span className="text-green-600">amsterdam, NL</span>
      </p>
    </div> 

    <div>
      <p className="text-sm font-medium mb-2">Pharmacy Address</p>
      <p className="text-sm text-[#6B6B6B]">
        4957 Washington Ave,<br />
        Manchester
      </p>
    </div> 

    
    <div>
      <p className="text-sm font-medium mb-2">Time schedule</p>
      <p className="text-sm text-[#6B6B6B]">
      Order Date : 14/11/2022, <br />
       10:09
      </p>
    </div> 

    <div>
      <p className="text-sm font-medium mb-2">payment method:</p>
      <p className="text-sm text-[#6B6B6B]">
      Transfer your own booking

      </p>
    </div> 


  </div>

  {/* Medication List */}
  <div className="mb-6  bg-[#F7F7F7] px-4 py-5">
    <div className="flex lg:flex-row flex-wrap items-center justify-between gap-4 p-4 "> 

        <div className=' flex items-center gap-5'>
      <Image
        src={ceevit}
        alt="Ceelvit"
        width={70}
        height={70}
        className="object-cover"
      />
      <div className="flex-1">
        <p className="font-medium text-[16px] pb-1">Ceelvit</p>
        <p className="text-sm text-[#6B6B6B]">Vitamin C 250 mg</p>
      </div>
        </div>
      <div className="text-sm">
        <p className='text-[#999999] pb-1'>Dosage</p>
        <p className='text-[#4E4E4E]'>250 mg</p>
      </div>
      <div className="text-sm">
        <p className='text-[#999999] pb-1'>Contents of the Box</p>
        <p className='text-[#4E4E4E]'>2</p>
      </div>
      <div className="text-sm">
        <p className='text-[#999999] pb-1'>Price</p>
        <p className='text-[#4E4E4E]'>$13.00</p>
      </div>
    </div>

    <div className="flex lg:flex-row flex-wrap items-center justify-between gap-4 p-4 border-b"> 

        <div className=' flex items-center gap-5'>
      <Image
        src={ace}
        alt="Ceelvit"
        width={70}
        height={70}
        className="object-cover"
      />
      <div className="flex-1">
        <p className="font-medium text-[16px] pb-1">Ace</p>
        <p className="text-sm text-[#6B6B6B]">Paracetamol BP 500 mg</p>
      </div>
        </div>
      <div className="text-sm">
        <p className='text-[#999999] pb-1'>Dosage</p>
        <p className='text-[#4E4E4E]'>250 mg</p>
      </div>
      <div className="text-sm">
        <p className='text-[#999999] pb-1'>Contents of the Box</p>
        <p className='text-[#4E4E4E]'>2</p>
      </div>
      <div className="text-sm">
        <p className='text-[#999999] pb-1'>Price</p>
        <p className='text-[#4E4E4E]'>$18.00</p>
      </div>
    </div>

 

    {/* Total Calculation */}
    <div className="mt-4 space-y-2">
      <div className="flex  lg:justify-end justify-between items-center lg:gap-[200px] text-sm pb-2">
        <span className='text-[#6B6B6B] font-medium'>Subtotal -</span>
        <span>$31.00</span>
      </div>
      <div className="flex lg:justify-end justify-between items-center lg:gap-[200px] text-sm pb-2">
        <span className='text-[#6B6B6B] font-medium'>discount -</span>
        <span>$00.00</span>
      </div>
      <div className="flex lg:justify-end justify-between items-center lg:gap-[200px] text-sm pb-2">
        <span className='text-[#6B6B6B] font-medium'>Shipping Cost -</span>
        <span>$2.00</span>
      </div>
      <div className="flex lg:justify-end justify-between items-center lg:gap-[200px] font-medium pt-2 border-t ">
        <span className='text-primary font-medium'>Total -</span>
        <span className='text-primary font-medium'>$33.00</span>
      </div>
    </div>
  </div>

  {/* Buy Now Button */}
  <div className="flex justify-end mb-8 pt-6">
    <button className="bg-[#1a237e] px-6 h-[48px] text-white">Buy Now</button>
  </div>

  {/* Bottom Text and Icons */}
  <div className="text-sm text-gray-600 mb-6 font-medium">
    <p>Praesent eget Nunc quis libero, ipsum nisi. Vestibulum sit ipsum facilisis eu leo. Nibh Praesent scelerisque ex Donec ipsum hendrerit ut non, ipsum Ut non, gravida quis at vitae eu enim. tocus, dui ipsum tincidunt urna elit felis, tempor</p>
    <p className="mt-4">Morbi nisi enim, adipiscing eget dui viverra quam Cras libero, Nunc ultrici lacus, lorem. lacus elit ex, leo ipsum elit venenatis cursus ex enim, dignis</p>
  </div>


      </div>
</div>
    );
};

export default PrescriptionOrder;