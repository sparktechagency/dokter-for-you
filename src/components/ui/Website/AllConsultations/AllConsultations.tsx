/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client"
import { useState } from 'react';
import { Form, Progress } from 'antd'
import { Poppins } from 'next/font/google';
import StepsFooterBtn from './StepsFooterBtn';
import AccountDetails from './AccountDetails';
import MedicalQuestion13 from './MedicalQuestions/MedicalQuestion13';
import MedicalQuestion1 from './MedicalQuestions/MedicalQuestion1';
import MedicalQuestion2 from './MedicalQuestions/MedicalQuestion2';
import MedicalQuestion3 from './MedicalQuestions/MedicalQuestion3';
import MedicalQuestion4 from './MedicalQuestions/MedicalQuestion4';
import MedicalQuestion5 from './MedicalQuestions/MedicalQuestion5';
import MedicalQuestion6 from './MedicalQuestions/MedicalQuestion6';
import MedicalQuestion7 from './MedicalQuestions/MedicalQuestion7';
import MedicalQuestion8 from './MedicalQuestions/MedicalQuestion8';
import MedicalQuestion9 from './MedicalQuestions/MedicalQuestion9';
import MedicalQuestion10 from './MedicalQuestions/MedicalQuestion10';
import MedicalQuestion11 from './MedicalQuestions/MedicalQuestion11';
import MedicalQuestion12 from './MedicalQuestions/MedicalQuestion12';
import MedicalQuestion14 from './MedicalQuestions/MedicalQuestion14';
import MedicationPreference from './MedicationPreference';
import WeightLossConsulation from './WeightLossConsulation/WeightLossConsulation';
import AdditionalQuestions1 from './AdditionalQuestions/AdditionalQuestions1';
import AdditionalQuestions2 from './AdditionalQuestions/AdditionalQuestions2';
import AdditionalQuestions3 from './AdditionalQuestions/AdditionalQuestions3';
import AdditionalQuestions4 from './AdditionalQuestions/AdditionalQuestions4';
import Delivery from './Delivery';
import Address from './Address';
// import DeliveryPayment from './DeliveryPayment'; 
import CheckConfirm from './CheckConfirm';
import ConsultationType from './ConsultationType';
import { useSearchParams } from 'next/navigation';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });


const AllConsultations = () => {
    const [current, setCurrent] = useState(0);
    const [hasPreference, setHasPreference] = useState<string | null>()
    const [consultationType , setConsultationType] = useState<string | null>() 
    const [qnaData, setQnaData] = useState<{ question: string; answer: string }[]>([]);   
    const [userId , setUserId] = useState<string | null>()   
    const [selectedMedicines , setSelectedMedicines] = useState([])
    
    const [medicines , setMedicines] = useState([]) 
    const [address , setAddress] = useState<string | null>()
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const SubCategory = searchParams.get('subcategory');  
    const SubCategoryName = searchParams.get('name');

    const newConsultationType = consultationType ? consultationType === "video" ? "VIDEOCALL" : "PRESCRIPTION" : "PRESCRIPTIONWITHMEDICINE" 
    

    const data = {
        "QNA": qnaData , 
        "userId":userId , 
        "medicins": medicines ,
        "category": category ,
        "subCategory": SubCategory ,
        "address" : address , 
        "consultationType": newConsultationType,
    }  

   
    const updateQNA = (question: string, answer: string) => {
        setQnaData((prev) => {
            const existing = prev.find((qna) => qna.question === question);
            if (existing) {            
                return prev.map((qna) =>
                    qna.question === question ? { question, answer } : qna
                );
            }
           
            return [...prev, { question, answer }];
        });
    }; 

    const steps = [
        {
            title: "Check Your Account Details",
            content: <AccountDetails setUserId={setUserId} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 1/14",
            content: <MedicalQuestion1 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 2/14",
            content: <MedicalQuestion2 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 3/14",
            content: <MedicalQuestion3 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 4/14",
            content: <MedicalQuestion4 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 5/14",
            content: <MedicalQuestion5 updateQNA={updateQNA}/> ,
            skippable: false,
        },
        {
            title: "Medical Question 6/14",
            content: <MedicalQuestion6 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 7/14",
            content: <MedicalQuestion7 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 8/14",
            content: <MedicalQuestion8 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 9/14",
            content: <MedicalQuestion9 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 10/14",
            content: <MedicalQuestion10 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 11/14",
            content: <MedicalQuestion11 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 12/14",
            content: <MedicalQuestion12 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 13/14",
            content: <MedicalQuestion13 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 14/14",
            content: <MedicalQuestion14 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "",
            content: <MedicationPreference setHasPreference={setHasPreference} updateQNA={updateQNA} /> ,
            skippable: false,
        },
        ...(hasPreference === "has_preference"
            ? [
                {
                    title: "",
                    content: <WeightLossConsulation SubCategoryName={SubCategoryName} setMedicines={setMedicines} setSelectedMedicines={setSelectedMedicines} /> ,
                    skippable: false,     
                },
                
            ]
            : [
                {
                    title: "",
                    content: <ConsultationType updateQNA={updateQNA} setConsultationType={setConsultationType} /> ,
                    skippable: false,
                },
            ]), 

            ...(consultationType !== "video"
                ? [
                    {
                        title: "",
                        content: <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Questions about your medication preference
                            </h2>
    
                            <h2 className="text-[16px] font-[400] text-[#6B6B6B]">
                                We have some additional questions about the product you sellected
                            </h2>
                        </div> ,
                         skippable: true,
                    },
        {
            title: "Additional Questions 1/4",
            content: <AdditionalQuestions1 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Additional Questions 2/4",
            content: <AdditionalQuestions2 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Additional Questions 3/4",
            content: <AdditionalQuestions3 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Additional Questions 4/4",
            content: <AdditionalQuestions4 updateQNA={updateQNA} /> ,
            skippable: false,
        }] : []),
        ...(hasPreference === "has_preference"
            ? [
                {
                    title: "",
                    content: <Delivery updateQNA={updateQNA} SubCategoryName={SubCategoryName} /> ,
                    skippable: false,
                },
                {
                    title: "",
                    content: <Address SubCategoryName={SubCategoryName} setAddress={setAddress} /> ,
                    skippable: false,
                }]
            :
            [
                {
                    title: "",
                    content: <Address SubCategoryName={SubCategoryName} setAddress={setAddress} /> ,
                    skippable: false,
                } 
            ]),

        // {
        //     title: "",
        //     content: <DeliveryPayment />
        // },
        {
            title: "",
            content: <CheckConfirm selectedMedicines={selectedMedicines} SubCategoryName={SubCategoryName} address={address} /> ,
            skippable: true,
        },


    ];

    const progressPercent = Math.round(((current + 1) / steps.length) * 100);
    const progressColor = '#0A2369'

    return (
        <div className={`bg-[#F7F7F7]  min-h-[calc(100vh-85px)] transition-all duration-1000 delay-500 ease-in-out opacity-100 translate-x-0 pt-[85px] ${poppins.className}`}>
            <div className='container px-4'>
                {/* Progress bar */}
                <Progress
                    percent={progressPercent}
                    showInfo={false}
                    strokeColor={progressColor}
                />



                <div className="steps-content  flex items-center justify-start" style={{ margin: '20px 0' }} >
                    <Form className='w-full' >
                        <div className={`lg:text-[32px] text-[28px] text-primary font-medium lg:tracking-wide py-3 ${poppins.className}`}>{steps[current]?.title} </div>
                        <div className=' bg-white p-6 mt-6 min-h-[350px]'>  {steps[current]?.content} </div>
                    </Form>
                </div>

                {/* footer buttons   */}
                <StepsFooterBtn current={current} setCurrent={setCurrent} steps={steps} data={data} hasPreference={hasPreference} medicines={medicines} consultationType={consultationType} />

            </div>
        </div>
    );
};

export default AllConsultations;
