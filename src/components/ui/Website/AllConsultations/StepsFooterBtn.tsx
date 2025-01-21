/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useCreateConsultationMutation } from '@/redux/features/website/consultationSlice';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export interface Qna {
    question: string
    answer: string
}

export interface Medicin {
    _id: string
    count: number
    total: string
}

export interface Address {
    firstname: string
    lastname: string
    streetAndHouseNo: string
    postalCode: string
    country: string
    place: string
}
interface propsType {
    current: number,
    setCurrent: Dispatch<SetStateAction<number>>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    steps: ({ title: string; content: React.JSX.Element; skippable?: boolean; } | { content: string; title?: undefined; skippable?: boolean; })[];
    data: {
        QNA: Qna[]
        userId: string
        medicins: Medicin[]
        category: string
        subCategory: string
        consultationType: string
        address: Address
    }
    hasPreference: string | null
    medicines: string[]
    consultationType: string | null
}
const StepsFooterBtn = ({ current, setCurrent, steps, data, hasPreference, medicines, consultationType }: propsType) => {
    const router = useRouter();
    const [createConsultation] = useCreateConsultationMutation();
    const [validationErrors, setValidationErrors] = useState<{ [key: number]: boolean }>({});
 
    const next = () => {
        const validateCurrentStep = () => {  

            if (steps[current]?.skippable) {
                return true; 
            }

            if (current === 15) {
                if (hasPreference === "has_preference") {
                    if (medicines.length === 0) {
                        message.error("Please select at least one medicine to proceed.");
                        return false;
                    }
                    return true; 
                }
                return !!data.QNA.find((qna) => qna.question === "Delivery Prescription");
            }
            if (hasPreference === "has_preference" && current >= 17 && current <= 20) {
                const questionMap: { [key: number]: string } = {
                    17: "Do you have any known allergies to medications or specific ingredients in this drug?",
                    18: "Do you have any chronic conditions or medical issues that might affect the use of this medication?",
                    19: "Are you currently taking any other medications that might interact with this drug?",
                    20: "Have you used this medication before, and if so, did you experience any side effects?",
                };
            
                const question = questionMap[current]; 
                if (!question) {
                  
                    return false; 
                }
            
                const isAnswered = !!data.QNA.find((qna) => qna.question === question); 
            
                return isAnswered; 
            }
           
            if (hasPreference === "has_preference" && current === 21) {
                return !!data.QNA.find((qna) => qna.question === "Delivery Prescription");
            }
        
            if (hasPreference === "has_preference" && current === 22) {
                if (!data.address) {
                    return false;
                }
                return true; 
            }
        
          
            if (consultationType !== "video" && current >= 17 && current <= 20) {
                const questionMap: { [key: number]: string } = {
                    17: "Do you have any known allergies to medications or specific ingredients in this drug?",
                    18: "Do you have any chronic conditions or medical issues that might affect the use of this medication?",
                    19: "Are you currently taking any other medications that might interact with this drug?",
                    20: "Have you used this medication before, and if so, did you experience any side effects?",
                };
        
                const question = questionMap[current];
                if (!question) {
                 
                    return false;
                }
        
                const isAnswered = !!data.QNA.find((qna) => qna.question === question);
            
        
                return isAnswered;
            } 

            if (consultationType !== "video" && current === 21) {
                if (!data.address) {
                    return false;
                }
                return true; 
            } 

            switch (current as number) {
                case 0:
                    return !!data.userId;

                case 1:
                    return !!data.QNA.find(qna => qna.question === "What is your weight?");

                case 2:
                    return !!data.QNA.find(qna => qna.question === "What is your Height?");

                case 3:
                    return !!data.QNA.find(qna => qna.question === "Do you have any existing medical conditions?");

                case 4:
                    return !!data.QNA.find(qna => qna.question === "Have you undergone any surgery in the past?");

                case 5:
                    return !!data.QNA.find(qna => qna.question === "Are you currently taking any medications?");

                case 6:
                    return !!data.QNA.find(qna => qna.question === "Have you ever experienced any adverse reactions to medications?");

                case 7:
                    return !!data.QNA.find(qna => qna.question === "Do you have any allergies?");

                case 8:
                    return !!data.QNA.find(qna => qna.question === "Do you smoke or have you smoked in the past?");

                case 9:
                    return !!data.QNA.find(qna => qna.question === "Do you consume alcohol?");

                case 10:
                    return !!data.QNA.find(qna => qna.question === "Do you have any close family members with hereditary conditions?");

                case 11:
                    return !!data.QNA.find(qna => qna.question === "Do you use recreational drugs?");

                case 12:
                    return !!data.QNA.find(qna => qna.question === "Is your blood pressure typically lower than 90/60 mmHg or higher than 140/90 mmHg?");

                case 13:
                    return !!data.QNA.find(qna => qna.question === "Would you like to provide any additional information?");

                case 14:
                    return !!data.QNA.find(qna => qna.question === "Do you have a medication preference?");

                case 15:
                    if (hasPreference === "has_preference") {
                        return medicines.length > 0;
                    }
                    return !!data.QNA.find((qna) => qna.question === "Delivery Prescription");

                case 16:
                    if (consultationType !== "video") {
                        const questionMap: { [key: number]: string } = {
                            16: "Do you have any known allergies to medications or specific ingredients in this drug?",
                            17: "Do you have any chronic conditions or medical issues that might affect the use of this medication?",
                            18: "Are you currently taking any other medications that might interact with this drug?",
                            19: "Have you used this medication before, and if so, did you experience any side effects?",
                        };

                        const question = questionMap[current];
                        if (!question) {
                          
                            return false;
                        }


                        const isAnswered = !!data.QNA.find(qna => qna.question === question);
                  

                        return isAnswered;
                    }


                    return !!data.address;

              

                default:
                    throw new Error(`Unhandled step: ${current}`);
            }
        }


        if (!validateCurrentStep()) {
            setValidationErrors((prev) => ({ ...prev, [current]: true })); 
            message.error("Please select an option to move forward.");
            return;
        } 
    

        setValidationErrors((prev) => ({ ...prev, [current]: false }));
        setCurrent((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const prev = () => {
        setCurrent((prev) => Math.max(prev - 1, 0));
    };

    const handleSubmit = async () => {
        await createConsultation(data).then((res) => { 
          
            if (res?.data?.success) {
                router.push(res?.data?.data);
            }
        });
    };
    return (
        <div className="steps-action flex items-center justify-end gap-3 pb-5">
            {current > 0 && (
                <button onClick={prev} className='text-primary font-medium border-2 border-primary  mt-6 px-5 h-[44px] flex items-center gap-1'>
                    <span> <BsArrowLeft color='#0a2369' size={22} /> </span>
                </button>
            )}

            {current < steps.length - 1 && (
                <button onClick={next} className='mt-6 px-5 h-[45px] bg-primary text-white  flex items-center gap-1'>
                    <span>Continue</span> <span><BsArrowRight size={22} /> </span>
                </button>
            )}
            {current === steps.length - 1 && (
                <button onClick={() => { handleSubmit() }} className='mt-6 px-5 py-[10px] bg-primary text-white ' >
                    Done
                </button>
            )}

        </div>
    );
};

export default StepsFooterBtn;