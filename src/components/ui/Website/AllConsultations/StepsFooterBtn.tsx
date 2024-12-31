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
interface propsType{
    current:number ,
    setCurrent:Dispatch<SetStateAction<number>> , 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    steps:({ title: string; content: React.JSX.Element; } | { content: string; title?: undefined; })[];  
    data: {
        QNA: Qna[]
        userId: string
        medicins: Medicin[]
        category: string
        subCategory: string
        consultationType: string
        address: Address
      }
      
    
}
const StepsFooterBtn = ({current ,setCurrent, steps , data}:propsType) => {  
    const router = useRouter();
    const [createConsultation] = useCreateConsultationMutation();
    const [validationErrors, setValidationErrors] = useState<{ [key: number]: boolean }>({});

    const next = () => {
        // Validation logic for each step
        const validateCurrentStep = () => {
            switch (current) {
                case 0:
                    if (!data.userId) {
                        return false;
                    }
                    break;
                case 1:
                    if (!data.QNA.find(qna => qna.question === "What is your weight?")) {
                        return false;
                    }
                    break; 

                case 2:
                    if (!data.QNA.find(qna => qna.question === "What is your Height?")) {
                        return false;
                    }
                    break;
               
                case 3:
                    if (!data.QNA.find(qna => qna.question === "Do you have any pain anywhere in your body?")) {
                        return false;
                    }
                    break;
               
                case 4:
                    if (!data.QNA.find(qna => qna.question === "Why, and for which Diagnosis do you want treatment?")) {
                        return false;
                    }
                    break;
               
                case 5:
                    if (!data.QNA.find(qna => qna.question === "Was this diagnosis made by a doctor, and did this doctor recommend treatment ?")) {
                        return false;
                    }
                    break;
               
                case 6:
                    if (!data.QNA.find(qna => qna.question === "Do any of the medical issues listed below apply to you?")) {
                        return false;
                    }
                    break;
               
                case 7:
                    if (!data.QNA.find(qna => qna.question === "Are you experiencing any fatigue or low energy ?")) {
                        return false;
                    }
                    break;
                case 8:
                    if (!data.QNA.find(qna => qna.question === "How is your appetite?")) {
                        return false;
                    }
                    break;
                case 9:
                    if (!data.QNA.find(qna => qna.question === "Have you had any recent weight changes?")) {
                        return false;
                    }
                    break;
               
                case 10:
                    if (!data.QNA.find(qna => qna.question === "How do you sleep at night?")) {
                        return false;
                    }
                    break;
                case 11:
                    if (!data.QNA.find(qna => qna.question === "Are you having any problems with digestion?")) {
                        return false;
                    }
                    break;
                case 12:
                    if (!data.QNA.find(qna => qna.question === "Have you noticed any changes in your vision or hearing?")) {
                        return false;
                    }
                    break;
                case 13:
                    if (!data.QNA.find(qna => qna.question === "Do you have any trouble breathing or shortness of breath?")) {
                        return false;
                    }
                    break;
                case 14:
                    if (!data.QNA.find(qna => qna.question === "Do you have any allergies?")) {
                        return false;
                    }
                    break;
            
                case 15:
                    if (!data.QNA.find(qna => qna.question === "Do you have any known allergies to medications or specific ingredients in this drug?")) {
                        return false;
                    }
                    break;
            
               
                case 16:
                    if (!data.QNA.find(qna => qna.question === "Do you have any chronic conditions or medical issues that might affect the use of this medication?")) {
                        return false;
                    }
                    break;
            
                case 17:
                    if (!data.QNA.find(qna => qna.question === "Are you currently taking any other medications that might interact with this drug?")) {
                        return false;
                    }
                    break;
            
                case 17:
                    if (!data.QNA.find(qna => qna.question === "Have you used this medication before, and if so, did you experience any side effects?")) {
                        return false;
                    }
                    break;
            
               
                default:
                    break;
            }
            return true;
        };

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
                <button  onClick={prev} className='text-primary font-medium border-2 border-primary  mt-6 px-5 h-[44px] flex items-center gap-1'>
                  <span> <BsArrowLeft color='#0a2369' size={22} /> </span>
                </button>
            )} 

            {current < steps.length - 1 && (
                <button onClick={next} className='mt-6 px-5 h-[45px] bg-primary text-white  flex items-center gap-1'> 
                <span>Continue</span> <span><BsArrowRight size={22} /> </span>
                </button>
            )}
            {current === steps.length - 1 && (
                <button   onClick={() =>{handleSubmit()}} className='mt-6 px-5 py-[10px] bg-primary text-white ' >
                    Done
                </button>
            )}
            
        </div>
    );
};

export default StepsFooterBtn;