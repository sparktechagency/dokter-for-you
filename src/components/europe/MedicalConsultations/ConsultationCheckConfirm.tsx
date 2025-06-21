/* eslint-disable @typescript-eslint/no-explicit-any */

import { AddressType } from '@/components/europe/MedicalConsultations/MedicalConsultations';
import { imageUrl } from '@/redux/base/baseApi';
import { useGetProfileQuery } from '@/redux/features/profile/getProfileSlice';
import { Checkbox, ConfigProvider, Input } from 'antd';
import Image from 'next/image';
import React from 'react';

const ConsultationCheckConfirm = ({ selectedMedicines, SubCategoryName, address }: { selectedMedicines?: any, SubCategoryName: string | null, address: AddressType | null | undefined }) => {
    const { data: userProfile } = useGetProfileQuery(undefined)
    const profileData = userProfile?.data
    console.log("Selected Medicines:", selectedMedicines);

    return (
        <div>
            <div className="">
                <h1 className="lg:text-2xl text-[20px] font-semibold mb-6 text-gray-800">Check and Confirm</h1>

                <div className={`bg-[#F3F6FF] p-4  shadow-sm mb-4 ${selectedMedicines?.length >= 1 ? 'hidden' : ''}`}>
                    <h2 className="font-semibold pb-2 text-[16px]">Consultation for {SubCategoryName} problem</h2>
                    <div className="flex justify-between items-start">

                        <p className="text-sm text-gray-500 ">Medical questionnaire, doctor&apos;s advice and prescription.</p>

                        <p className="font-semibold text-primary">€25.00</p>
                    </div>
                </div>


                <div className={`bg-[#F3F6FF]  shadow-sm mb-4 ${selectedMedicines?.length === 0 ? 'hidden' : ''}`}>
                    {
                        selectedMedicines?.map((medicine: { name: string, medicineType: string, dosage: string, image: string, form: string, count: string, total: string, sellingPrice: number }, index: number) => (
                            <div key={index} className=" flex lg:flex-row flex-wrap items-center  justify-between gap-4 px-4 py-3 border-b">
                                <div className='flex items-center gap-2 '>
                                    <Image src={`${imageUrl}${medicine?.image}`} alt="Ceevit" width={80} height={80} className="mr-4" />
                                    <div className="flex-grow">
                                        <h3 className="font-semibold">{medicine?.name}</h3>
                                        <p className="text-sm text-gray-500">{medicine?.medicineType} {medicine?.dosage}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-[#999999] pb-1 font-medium">From</p>
                                    <p className="text-sm">{medicine?.form}</p>
                                </div>

                                <div className="lg:text-right text-center">
                                    <p className="text-sm text-[#999999] pb-1 font-medium">Select Units per Box</p>
                                    <p className="text-sm text-center">{medicine?.total}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-[#999999] pb-1 font-medium">Dosage</p>
                                    <p className="text-sm">{medicine?.dosage}</p>
                                </div>
                                <div className="lg:text-right text-center">
                                    <p className="text-sm text-[#999999] pb-1 font-medium">Quantity of medicine</p>
                                    <p className="text-sm text-center">{medicine?.count}</p>
                                </div>
                                <div className="text-right ">
                                    <p className="text-sm text-[#999999] pb-1 font-medium">Price</p>
                                    <p className="text-sm">€{medicine?.sellingPrice}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className={`bg-[#F3F6FF] p-4  shadow-sm mb-4 grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-6 ${selectedMedicines?.length === 0 ? 'hidden' : ''}`}>
                    <div>
                        <h3 className="font-semibold mb-2">Address:</h3>
                        <p className="text-sm text-[#6B6B6B]">
                            {profileData?.firstName}  {profileData?.lastName}<br />
                            {profileData?.city} - {profileData?.postcode} <br /> {profileData?.country}<br />
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Billing address:</h3>
                        <p className='text-[#6B6B6B]'>{address?.firstname} {address?.lastname}</p>
                        <p className='text-[#6B6B6B]'>{address?.streetAndHouseNo}</p>
                        <p className='text-[#6B6B6B]'>{address?.country}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Contact details:</h3>
                        <p className='text-[#6B6B6B]'>{profileData?.email}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Your chosen payment method:</h3>
                        <p className="flex items-center text-[#6B6B6B] ">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                            Transfer your own booking
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mb-4">
                    <div className="bg-green-50 py-7 px-[24px] ">
                        <h3 className="font-semibold mb-2">What happens after confirming this request? </h3>
                        <p className="text-sm">
                            The doctor checks your request and writes your prescription. Your prescription will be forwarded to an affiliated pharmacy. After checking and approving the prescription, the affiliated pharmacy will send your medicine at home the next working day via express delivery. 
                        </p>
                    </div>
                    <div className="bg-[#E8EEFE] p-4   shadow-sm">
                        <div> 
                            <ConfigProvider
                                theme={{
                                    token: {
                                        colorPrimary: '#0a2369',
                                        colorText: '#6B6B6B',
                                        colorBgContainer: '#ffffff',
                                    },
                            }}>             
                            <Input className="w-full bg-primary text-white py-3  font-semibold " style={{ height: '50px' , border: 'none', borderRadius: '8px' }} placeholder="Use discount code" 
                                suffix={<button className=' text-[16px] text-white font-medium bg-primary h-[37px] px-7 rounded-none'> Confirm </button>} />
                            </ConfigProvider>

                        </div>

                        <div className=' px-5 '>
                            <div className="flex justify-between my-4 text-xl text-[#6B6B6B]">
                                <span>Subtotal -</span>
                                <span className="font-semibold">€25.00</span>
                            </div>
                            <div className="flex justify-between mb-4 text-xl text-[#6B6B6B]">
                                <span>Shipping Cost  -</span>
                                <span className="font-semibold">€10.00</span>
                            </div>
                            <div className="flex justify-between text-xl font-semibold text-primary mb-4">
                                <span>Total -</span>
                                <span className="">€25.00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="font-semibold mb-4 text-[18px]">Confirm the conditions:</h2> 

                <ConfigProvider
                    theme={{    
                        token: {
                              colorPrimary: '#0a2369',
                        }}}> 
                <div className="space-y-2 text-[#4E4E4E]"> 

                    <Checkbox defaultChecked>I declare that I have filled in everything truthfully, completely and without reservation. If I receive medication based on false information, this is harmful and I am liable to prosecution.</Checkbox>
                    <Checkbox defaultChecked>I agree to the content and applicability of the general terms and conditions, the privacy statement and the right of withdrawal of Dokter For You.</Checkbox>
                    <Checkbox defaultChecked>I hereby expressly give permission to Dokter For You to collect and process my (medical) personal data as described in the privacy statement. This permission also applies to the processing by the treating physician.</Checkbox>
                    <Checkbox defaultChecked>I hereby give permission to Dokter For You to forward any prescription written by the doctor and my (medical) personal data to and have them processed by the pharmacy.</Checkbox>
                </div> 
                </ConfigProvider>
            </div>
        </div>
    );
};

export default ConsultationCheckConfirm;