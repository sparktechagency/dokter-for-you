/* eslint-disable @typescript-eslint/no-explicit-any */

import { imageUrl } from '@/redux/base/baseApi';
import { useGetProfileQuery } from '@/redux/features/profile/getProfileSlice';
import { Checkbox } from 'antd';
import Image from 'next/image';
import React from 'react';

const CheckConfirm = ({ selectedMedicines, SubCategoryName, address }: { selectedMedicines: any, SubCategoryName: string | null, address: { firstname: string; lastname: string; streetAndHouseNo: string; postalCode: string; place: string; country: string; } }) => {
    const { data: userProfile } = useGetProfileQuery(undefined)
    const profileData = userProfile?.data
    return (
        <div>
            <div className="">
                <h1 className="lg:text-2xl text-[20px] font-semibold mb-6 text-gray-800">Check and Confirm</h1>

                <div className="bg-[#F3F6FF] p-4  shadow-sm mb-4">
                    <h2 className="font-semibold pb-2 text-[16px]">Consultation for {SubCategoryName} problem</h2>
                    <div className="flex justify-between items-start">

                        <p className="text-sm text-gray-500 ">Medical questionnaire, doctor&apos;s advice and prescription.</p>

                        <p className="font-semibold text-primary">€25.00</p>
                    </div>
                </div>


                <div className="bg-[#F3F6FF]  shadow-sm mb-4">
                    {
                        selectedMedicines?.map((medicine: { name: string, medicineType: string, dosage: string, image: string, form: string, total: string }, index: number) => (
                            <div key={index} className=" grid lg:grid-cols-4 grid-cols-2 justify-items-stretch gap-4 p-4 border-b">
                                <div className='flex items-center gap-2'>
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
                                <div className="text-right ml-8">
                                    <p className="text-sm text-[#999999] pb-1 font-medium">Dosage</p>
                                    <p className="text-sm">{medicine?.dosage}</p>
                                </div>
                                <div className="text-right ml-8">
                                    <p className="text-sm text-[#999999] pb-1 font-medium">Quantity of medicine</p>
                                    <p className="text-sm">{medicine?.total}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className="bg-[#F3F6FF] p-4  shadow-sm mb-4 grid lg:grid-cols-4 grid-cols-1 lg:gap-4 gap-6">
                    <div>
                        <h3 className="font-semibold mb-2">Address:</h3>
                        <p className='text-[#6B6B6B]'>{address?.firstname} {address?.lastname}</p>
                        <p className='text-[#6B6B6B]'>{address?.streetAndHouseNo}</p>
                        <p className='text-[#6B6B6B]'>{address?.country}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Billing address:</h3>
                        <p className='text-[#6B6B6B]'>john david</p>
                        <p className="text-green-500">101 new house street</p>
                        <p className="text-green-500">2957</p>
                        <p className="text-green-500">amsterdam, NL</p>
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
                        <h3 className="font-semibold mb-2">What happens after confirming this request?</h3>
                        <p className="text-sm">
                            The doctor checks your request and writes a prescription Your prescription is forwarded to the Apotheek Zaandam Oost pharmacy network You pay for your medication to Apotheek Zaandam Oost The pharmacy delivers your treatment or you receive your paper prescription
                        </p>
                    </div>
                    <div className="bg-[#E8EEFE] p-4  px-8 shadow-sm">

                        <div className="flex justify-between my-4 text-xl text-[#6B6B6B]">
                            <span>Subtotal -</span>
                            <span className="font-semibold">€25.00</span>
                        </div>
                        <div className="flex justify-between text-xl font-semibold text-primary mb-4">
                            <span>Total -</span>
                            <span className="">€25.00</span>
                        </div>
                    </div>
                </div>

                <h2 className="font-semibold mb-4 text-[18px]">Confirm the conditions:</h2>
                <div className="space-y-2 text-[#4E4E4E]">
                    <Checkbox defaultChecked>I declare that I have completed everything truthfully, completely and without reservation</Checkbox>
                    <Checkbox defaultChecked>I agree to the content and applicability of the general terms and conditions, the privacy statement and the right of withdrawal of Dokter For You.</Checkbox>
                    <Checkbox defaultChecked>I hereby expressly give permission to Dokter For You to collect and process my (medical) personal data as described in the privacy statement. This permission also applies to the processing by the treating physician.</Checkbox>
                    <Checkbox defaultChecked>I hereby give permission to Dokter For You to forward any prescription written by the doctor and my (medical) personal data to and have them processed by the pharmacy.</Checkbox>
                </div>
            </div>
        </div>
    );
};

export default CheckConfirm;