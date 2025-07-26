import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import moment from 'moment';
import { imageUrl } from '@/redux/base/baseApi';
import { useBuyNowMutation } from '@/redux/features/profile/pdfAndBuySlice';
import { useRouter } from 'next/navigation';
import { useGetProfileQuery } from '@/redux/features/profile/getProfileSlice';
import { useGetShippingCostQuery } from '@/redux/features/europe/shippingCostSlice';
import { useCountry } from '@/app/(website)/CountryContext';
interface ConsultationDetailsProps {
    consultationId: {
        trackingNo: string;
        date: string;
        time: string;
        patient: string;
        opinion: string;
        doctor: string;
        totalAmount: string;
        status: string;
        _id: string;
        createdAt: string;
        category: {
            name: string;
        }
        subCategory: {
            name: string;
        }
        forwardToPartner: boolean;
        address: {
            streetAndHouseNo: string;
            postalCode: string;
            place: string;
            country: string;
            firstname: string;
            lastname: string;
        }
        orderDate: string;
        medicins: []
        suggestedMedicine: []
    };
    onClose: () => void;
}


const BuyMedicineOrder = ({ consultationId, onClose }: ConsultationDetailsProps) => {

    const [BuyNow] = useBuyNowMutation()
    const router = useRouter()
    const { data } = useGetProfileQuery(undefined)
    const userData = data?.data
    const { country } = useCountry();
    const { data: shippingCost } = useGetShippingCostQuery(country);


    const handleBuyNow = async () => {
        await BuyNow(consultationId._id).then((res) => {
            if (res?.data?.success) {
                router.push(res?.data?.data)
            }
        })
    }

    const totalMedicinePrice = consultationId?.suggestedMedicine?.reduce((total, medication: { count: number; _id: { sellingPrice: string; unitPerBox: string[]; }; }) => {
        const pricePerUnit = Number(medication?._id?.sellingPrice) * Number(medication?._id?.unitPerBox[0]);
        return total + (pricePerUnit * Number(medication?.count));
    }, 0);


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

                <p className=' font-medium lg:text-[32px] text-[22px] pb-[24px]'>Your Medicine Details</p>



                {/* Address Information */}
                <div className="bg-[#E8EEFE] p-4 mt-6  grid lg:grid-cols-5 grid-cols-1 gap-4 mb-6">
                    <div>
                        <p className="text-sm font-medium mb-2">Address:</p>
                        <p className="text-sm text-[#6B6B6B]">
                            {userData?.firstName}  {userData?.lastName}<br />
                            {userData?.city} - {userData?.postcode} <br /> {userData?.country}<br />
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-medium mb-2">Billing address:</p>
                        <p className="text-sm text-green-500">
                            {consultationId?.address?.firstname}  {consultationId?.address?.lastname}<br />
                            {consultationId?.address?.streetAndHouseNo}<br />
                            {consultationId?.address?.postalCode} {consultationId?.address?.place}<br />
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
                            Order Date :  {moment(consultationId?.orderDate).format('DD/MM/YYYY , hh:mm a')}
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
                <div className='bg-[#F7F7F7] px-4 py-5 mb-6 '>

                    <div className="  border-b border-gray-400 ">
                        {
                            consultationId?.suggestedMedicine?.map((medication: { _id: { image: string, name: string, medicineType: string, _id: string, unitPerBox: string[], sellingPrice: string, dosage: string[] }, count: number }) => (
                                <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-4 p-4 w-full " key={medication?._id?._id}>
                                    <div className="flex items-center gap-5">
                                        <Image
                                            src={medication?._id?.image?.startsWith("http") ? medication?._id?.image : `${imageUrl}${medication?._id?.image}`}
                                            alt={medication?._id?.name}
                                            width={70}
                                            height={70}
                                            className="object-cover"
                                        />

                                        <div className="flex-1 w-full lg:w-[200px] items-start">
                                            <p className="font-medium text-[16px] pb-1">{medication?._id?.name}</p>
                                            <p className="text-sm text-[#6B6B6B]">{medication?._id?.medicineType} {medication?._id?.dosage[0]}</p>
                                        </div>
                                    </div>

                                    <div className="text-sm">
                                        <p className='text-[#999999] pb-1'>Dosage</p>
                                        <p className='text-[#4E4E4E]'>{medication?._id?.dosage[0]}</p>
                                    </div>

                                    <div className="text-sm">
                                        <p className='text-[#999999] pb-1'>Quantity</p>
                                        <p className='text-[#4E4E4E]'>{medication?.count}</p>
                                    </div>


                                    <div className="text-sm w-full lg:w-[100px] items-center justify-center">
                                        <p className='text-[#999999] pb-1'>Price</p>
                                        <p className='text-[#4E4E4E]'> € {(Number(medication?._id?.sellingPrice) * Number(medication?._id?.unitPerBox[0]))}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex items-center justify-end  p-4 w-full'>
                        <div className=' lg:w-1/3 lg:pe-10'>

                            <div className=' flex flex-col gap-3'>
                                <div className='flex items-center justify-between gap-7'>
                                    <p className='text-gray-600 font-medium'> Subtotal- </p>
                                    <p className='text-gray-600 font-medium'> € {totalMedicinePrice} </p>
                                </div>

                                <div className='flex items-center justify-between gap-7'>
                                    <p className='text-gray-600 font-medium'> Shipping Cost- </p>
                                    <p className='text-gray-600 font-medium'> € {shippingCost}</p>
                                </div>

                                <div className='flex items-center justify-between gap-7 '>
                                    <p className='text-gray-600 font-medium'> total- </p>
                                    <p className='text-gray-600 font-medium'> € {Number(totalMedicinePrice) + Number(shippingCost)}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {
                    consultationId?.forwardToPartner === true ? (
                        <div className="flex justify-end mb-8 pt-6 gap-4">

                            {
                                consultationId?.status === "processing" ? (
                                    <div  >
                                        <div className="bg-[#fdc529] px-6 py-[13px] text-white text-center">Processing</div>
                                    </div>
                                ) : consultationId?.status === "delivered" ? (
                                    <div  >
                                        <div className="bg-green-700 px-6 py-[13px] text-white text-center ">Delivered</div>
                                    </div>
                                ) : (
                                    <div onClick={handleBuyNow}>
                                        <button className="bg-[#1a237e] px-6 h-[48px] text-white">Buy Now</button>
                                    </div>
                                )
                            }
                        </div>
                    ) : ""
                }

            </div>
        </div>
    );
};

export default BuyMedicineOrder;