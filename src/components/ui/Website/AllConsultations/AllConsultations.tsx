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
import MedicationPreference from './MedicationPreference';
import WeightLossConsulation from './WeightLossConsulation/WeightLossConsulation';
import AdditionalQuestions1 from './AdditionalQuestions/AdditionalQuestions1';
import Delivery from './Delivery';
import Address from './Address';
// import DeliveryPayment from './DeliveryPayment'; 
import CheckConfirm from './CheckConfirm';
import ConsultationType from './ConsultationType';
import { useSearchParams } from 'next/navigation';
import MedicalQuestion12 from './MedicalQuestions/MedicalQuestion12';
import { useGetDynamicQuestionsQuery } from '@/redux/features/website/consultationSlice';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });


const AllConsultations = () => {
    const [current, setCurrent] = useState(0);
    const [hasPreference, setHasPreference] = useState<string | null>()
    const [consultationType , setConsultationType] = useState<string | null>() 
    const [qnaData, setQnaData] = useState<{ question: string; answer: string }[]>([]);   
    const [dynamicQnaData, setDynamicQnaData] = useState<{ question: string; answer: string }[]>([]);   
    const [userId , setUserId] = useState<string | null>()   
    const [selectedMedicines , setSelectedMedicines] = useState([])
    const [forwardStatus , setForwardStatus] = useState(false)  
    const [medicines , setMedicines] = useState([]) 
    const [address , setAddress] = useState<string | null>()
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const SubCategory = searchParams.get('subcategory');  
    const SubCategoryName = searchParams.get('name'); 
    const {data:dynamicQuestions} = useGetDynamicQuestionsQuery(SubCategory)  
    const allDynamicQuestions = dynamicQuestions?.data
    const total = allDynamicQuestions?.length
    const [form] = Form.useForm();
    const newConsultationType = consultationType ? consultationType === "video" ? "video" : "regular" : "regular" 

    const data = {
        "QNA": qnaData ,  
        "DinamicQNA" : dynamicQnaData ,
        "userId":userId , 
        "medicins": medicines ,
        "category": category ,
        "subCategory": SubCategory ,
        "address" : address ,  
        "forwardToPartner" : forwardStatus ,
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

    const dynamicQNA = (question: string, answer: string) => {
        setDynamicQnaData((prev) => {
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
            title: "Medical Question 1/13",
            content: <MedicalQuestion1 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 2/13",
            content: <MedicalQuestion2 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 3/13",
            content: <MedicalQuestion3 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 4/13",
            content: <MedicalQuestion4 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 5/13",
            content: <MedicalQuestion5 updateQNA={updateQNA}/> ,
            skippable: false,
        },
        {
            title: "Medical Question 6/13",
            content: <MedicalQuestion6 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 7/13",
            content: <MedicalQuestion7 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 8/13",
            content: <MedicalQuestion8 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 9/13",
            content: <MedicalQuestion9 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 10/13",
            content: <MedicalQuestion10 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 11/13",
            content: <MedicalQuestion11 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 12/13",
            content: <MedicalQuestion12 updateQNA={updateQNA} /> ,
            skippable: false,
        },
        {
            title: "Medical Question 13/13",
            content: <MedicalQuestion13 updateQNA={updateQNA} /> ,
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
                    content: <WeightLossConsulation SubCategoryName={SubCategoryName} setMedicines={setMedicines} setSelectedMedicines={setSelectedMedicines} SubCategory={SubCategory} /> ,
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
                    We have some additional questions about the product you selected
                </h2>
            </div> ,
             skippable: true,
        },
        ...(allDynamicQuestions?.map((question, index) => ({
            title: `Additional Questions ${index + 1}/${total}`,
            content: (
              <AdditionalQuestions1
                question={question?.question}
                dynamicQNA={dynamicQNA} 
                form={form} 
                current={current}
              />
            ),
            skippable: false,
          })) || [])
    ] : []),
        ...(hasPreference === "has_preference"
            ? [
                {
                    title: "",
                    content: <Delivery updateQNA={updateQNA} SubCategoryName={SubCategoryName} setForwardStatus={setForwardStatus} /> ,
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
                <StepsFooterBtn current={current} setCurrent={setCurrent} steps={steps} data={data} hasPreference={hasPreference} medicines={medicines} consultationType={consultationType} allDynamicQuestions={allDynamicQuestions} form={form} />

            </div>
        </div>
    );
};

export default AllConsultations;
