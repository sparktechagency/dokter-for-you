import { ArrowLeft, Download } from 'lucide-react';
import Image from 'next/image';
import React from 'react'; 
import moment from 'moment';
import { imageUrl } from '@/redux/base/baseApi';
import { useBuyNowMutation } from '@/redux/features/profile/pdfAndBuySlice';
import { useRouter } from 'next/navigation';
interface ConsultationDetailsProps {
    consultationId: {
      trackingNo: string;
      date: string;
      time: string;
      patient: string; 
      opinion: string;
      doctor: string;
      status: string;
      _id: string; 
      createdAt: string; 
      category: {
        name: string;
      }
      subCategory: {
        name: string;
      } 
      address:{
        streetAndHouseNo: string;
        postalCode: string;
        place: string;
        country: string; 
        firstname: string;
        lastname: string; 
      } 
      orderDate: string; 
      medicins:[] 
      suggestedMedicine:[]
    };
    onClose: () => void;
  } 
 

const PrescriptionOrder = ({consultationId ,    onClose }: ConsultationDetailsProps) => { 
  
const [BuyNow] = useBuyNowMutation()  
const router = useRouter()

const handleBuyNow = async() =>{ 
    await BuyNow(consultationId._id).then((res) => {

      if (res?.data?.success) {
        router.push(res?.data?.data)
      }
    })
}

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
   <p className="text-[#4E4E4E]">Tracking No. {consultationId?.trackingNo}</p>
        <p className="text-[#4E4E4E]">{consultationId?.category?.name} / {consultationId?.subCategory?.name}</p>
        <p className="text-[#4E4E4E]">{ moment(consultationId?.createdAt).format('DD/MM/YYYY , hh:mm a')}</p>
    </div>
  </div>
 
 <div className='bg-[#F7F7F7] p-4'>
  {/* Consultation Details */}
  <div className=" pb-4 mb-4 ">
    <div className="flex justify-between items-center mb-2">
      <div>
        <p className="lg:text-[16px] text-[14px] text-[#4E4E4E]">Consultation for {consultationId?.category?.name} problem</p>
        <p className="lg:text-sm text-[12px] text-[#999999]">Medical questions/view, doctor&apos;s advice and prescription</p>
      </div>
      <p className="text-right text-primary">€25.00</p>
    </div>
    <div className="flex items-center justify-end gap-[200px] text-[14px]">
      <span className='text-[#6B6B6B]'>discount - </span>
      <span className='text-[#6B6B6B]'>€00.00</span>
    </div>
    <div className="flex justify-end items-center font-medium mt-3 gap-[200px] border-t pt-2">
      <span>Total -</span>
      <span>€25.00</span>
    </div>
  </div>

  {/* Prescription Report */} 
   {consultationId &&
    (consultationId?.suggestedMedicine?.length > 0 || consultationId?.opinion) &&
    consultationId?.status === "accepted" && (
      <div className="p-6 pb-11 mb-6 bg-white flex flex-col gap-4">
      <h3 className="text-center font-medium text-2xl text-primary ">Prescription Report</h3>
      <p className="text-center text-green-600 text-sm font-medium ">
        Our doctor has sent your prescription, please download the file.
      </p>
      <p className="text-center text-red-500 text-sm ">
        Stating that it is valid for 7 days only and can be use once.
      </p> 
      <a  href={`${imageUrl}api/v1/pdf/generate-pdf/${consultationId?._id}`} download className="mx-auto flex items-center justify-center gap-2 px-6 bg-primary text-white h-[48px]" >
           <Download className="h-4 w-4" size={24} color='white'/>
           Download now
         </a>
    </div>
    )} 

 </div>

  {/* Address Information */}
  <div className="bg-[#E8EEFE] p-4 mt-6  grid lg:grid-cols-5 grid-cols-1 gap-4 mb-6">
    <div>
      <p className="text-sm font-medium mb-2">Address:</p>
      <p className="text-sm text-[#6B6B6B]">
       {consultationId?.address?.firstname}  {consultationId?.address?.lastname}<br />
       {consultationId?.address?.streetAndHouseNo}<br />
      {consultationId?.address?.postalCode} {consultationId?.address?.place}<br />
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
      <p className="text-sm font-medium mb-2">Pharmacy Name</p>
      <p className="text-sm text-[#6B6B6B]">
      Apotheek Zaandam<br />
      Oost
      </p>
    </div> 

    
    <div className=''>
      <p className="text-sm font-medium mb-2 ">Time schedule</p>
      <p className="text-[12px] text-[#6B6B6B]">
      Order Date :  { moment(consultationId?.orderDate).format('DD/MM/YYYY , hh:mm a')}
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
    {
      consultationId?.medicins?.map((medication:{_id: {image: string, name: string, medicineType: string, _id: string, dosage: string[]} , count: number  }) => (
        <div className="flex items-center justify-between gap-4 p-4 " key={medication?._id?._id}>
          <div className="flex items-center gap-5"> 
            <Image
              src={medication?._id?.image?.startsWith("http") ? medication?._id?.image : `${imageUrl}${medication?._id?.image}`}
              alt={medication?._id?.name}
              width={70}  
              height={70}
              className="object-cover"
            />
            <div className="flex-1">
              <p className="font-medium text-[16px] pb-1">{medication?._id?.name}</p>  
              <p className="text-sm text-[#6B6B6B]">{medication?._id?.medicineType} {medication?._id?.dosage[0]}</p>
            </div>
          </div>
          <div className="text-sm">
            <p className='text-[#999999] pb-1'>Dosage</p>
            <p className='text-[#4E4E4E]'>{medication?._id?.dosage[0]}</p>
          </div>
          <div className="text-sm">
            <p className='text-[#999999] pb-1'>Contents of the Box</p>
            <p className='text-[#4E4E4E]'>{medication?.count}</p>
          </div>
         
        </div>
      ))
    }
  
  </div>

  {/* Buy Now Button */}
  <div className="flex justify-end mb-8 pt-6" onClick={handleBuyNow}>
    <button className="bg-[#1a237e] px-6 h-[48px] text-white">Buy Now</button>
  </div>




      </div>
</div>
    );
};

export default PrescriptionOrder;