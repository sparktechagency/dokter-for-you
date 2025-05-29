/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";
import CommonBtn from "@/components/shared/CommonBtn";
import WeightLossConsultation from "@/components/ui/Website/AllConsultations/WeightLossConsulation/WeightLossConsulation";
import { imageUrl } from "@/redux/base/baseApi";
import { useGetProfileQuery } from "@/redux/features/profile/getProfileSlice";
import { Checkbox } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setAllSelectedMedicines } from "@/redux/features/website/selectedMedicineSlice";


const BuyMedicine = ({ SubCategoryName, subcategoryId, category }: { SubCategoryName: string | null, subcategoryId: string | null, category: string | null }) => {
    const [medicines, setMedicines] = useState([])
    const [selectedMedicines, setSelectedMedicines] = useState([])
    const { data: profile } = useGetProfileQuery(undefined)
    const profileData = profile?.data
    const dispatch = useDispatch();
    const handleContinue = () => {
        dispatch(setAllSelectedMedicines(selectedMedicines));
    }
    console.log(medicines);
    return (
        <div className="bg-white p-5">

            <div className="">
                <WeightLossConsultation SubCategoryName={SubCategoryName} setMedicines={setMedicines} setSelectedMedicines={setSelectedMedicines} SubCategory={subcategoryId} />

                <div className="mb-4 mt-10 ">
                    {
                        selectedMedicines?.length >= 1 && <p className=" text-2xl font-medium text-[#222222] pb-4"> Selected medication </p>
                    }

                    <div className="bg-[#e7fbf2]  shadow-sm ">

                        {
                            selectedMedicines?.map((medicine: { name: string, medicineType: string, dosage: string, image: string, form: string, count: string, total: string, sellingPrice: number }, index: number) => (
                                <div key={index} className=" flex lg:flex-row flex-wrap items-center  justify-between gap-4 px-4 py-2 border-b">
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
                </div>


                <div className=" flex items-center justify-between text-[#FF3B28] ">
                    <div className="w-2/4">
                        <Checkbox >
                            <span className="text-[#FF3B28] text-sm block">
                                I declare that I have filled in everything truthfully, completely and without reservation.
                                If I receive medication based on false information, this is harmful and I am liable to prosecution.
                            </span>
                        </Checkbox>
                    </div>

                    <div>

                        <Link  
                        href={`${profileData ? `/medical-consultations?category=${category}&subcategory=${subcategoryId}&name=${SubCategoryName}` : "/login"}`}   
                        
                        className={` ${selectedMedicines?.length >= 1 ? "" : "cursor-not-allowed opacity-75"} w-full `}   

                        onClick={(e) => {
                            if (selectedMedicines?.length < 1) {
                                e.preventDefault();
                                return;
                            }
                            handleContinue();
                        }} >
                            <CommonBtn className={` flex gap-1 items-center justify-center px-6  h-[56px]  ${selectedMedicines?.length >= 1 ? "" : "cursor-not-allowed opacity-75"}`}>
                                <span> Continue to Buy </span>
                                <span><MdOutlineKeyboardArrowRight size={22} /></span>
                            </CommonBtn>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyMedicine;