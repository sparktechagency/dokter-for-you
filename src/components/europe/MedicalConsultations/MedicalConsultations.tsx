/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client"
import { useEffect, useState } from 'react';
import { Form, Progress } from 'antd'
import { Poppins } from 'next/font/google';
import { useSearchParams } from 'next/navigation';
import { useGetDynamicQuestionsQuery, useGetMedicalDynamicQuestionsQuery } from '@/redux/features/website/consultationSlice';
import AccountDetails from '@/components/ui/Website/AllConsultations/AccountDetails';
import AdditionalQuestions1 from '@/components/ui/Website/AllConsultations/AdditionalQuestions/AdditionalQuestions1';
import Address from '@/components/ui/Website/AllConsultations/Address';
import MedicalQuestion1 from '@/components/ui/Website/AllConsultations/MedicalQuestions/MedicalQuestion1';
import MedicalQuestion2 from '@/components/ui/Website/AllConsultations/MedicalQuestions/MedicalQuestion2';
import StepsFooter from './StepsFooter';
import DynamicMedicalQuestion from './DynamicMedicalQuestion';
import ConsultationsDelivery from './ConsultationsDelivery';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ConsultationCheckConfirm from './ConsultationCheckConfirm';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export type AddressType = {
    firstname: string | null;
    lastname: string | null;
    streetAndHouseNo: string | null;
    postalCode: string | null;
    place: string | null;
    country: string | null;
};


const MedicalConsultations = () => {
    const [current, setCurrent] = useState(0);
    const [deliveryType, setDeliveryType] = useState<string | null>(null);
    const [qnaData, setQnaData] = useState<{ question: string; answer: string }[]>([]);
    const [dynamicQnaData, setDynamicQnaData] = useState<{ question: string; answer: string }[]>([]);
    const [userId, setUserId] = useState<string | null>()
    const [selectedMedicines, setSelectedMedicines] = useState([])
    const [forwardStatus, setForwardStatus] = useState<boolean>(false)
    const [consultationType, setConsultationType] = useState<string | null>()
    const [medicines, setMedicines] = useState([])
    const [address, setAddress] = useState<AddressType | null>()
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const SubCategory = searchParams.get('subcategory');
    const SubCategoryName = searchParams.get('name');
    const { data: dynamicQuestions } = useGetDynamicQuestionsQuery(SubCategory)
    const { data: medicalQuestions } = useGetMedicalDynamicQuestionsQuery(SubCategory)
    const allDynamicQuestions = dynamicQuestions?.data
    const allMedicalQuestions = medicalQuestions?.data
    const additionalTotal = allDynamicQuestions?.length || 0;
    const total = allMedicalQuestions?.length + 2
    const [form] = Form.useForm();
    const allSelectedMedicines = useSelector((state: RootState) => state.selectedMedicines);
    const medicineLength = allSelectedMedicines?.length || 0;
    console.log(medicalQuestions);

    useEffect(() => {
        if (allSelectedMedicines?.length > 0) {
            setSelectedMedicines(allSelectedMedicines);
            setMedicines(allSelectedMedicines.map((med: { _id: string; count: number; total: string }) => ({
                _id: med._id,
                count: med.count,
                total: med.total,
            })));
        }
    }, [allSelectedMedicines]);

    const data = {
        "QNA": qnaData,
        "DinamicQNA": dynamicQnaData,
        "userId": userId,
        "medicins": medicines,
        "category": category,
        "subCategory": SubCategory,
        "address": address,
        "forwardToPartner": forwardStatus,
        "consultationType": consultationType,
    }

    console.log(data, "all data ");

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
            content: <AccountDetails setUserId={setUserId} />,
            skippable: false,
        },
        {
            title: "",
            content: <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Questions about your medical Questions
                </h2>

                <h2 className="text-[16px] font-[400] text-[#6B6B6B]">
                    We have some additional questions about the product you selected
                </h2>
            </div>,
            skippable: true,
        },
        {
            title: `Medical Question 1/${total}`,
            content: <MedicalQuestion1 updateQNA={updateQNA} />,
            skippable: false,
        },
        {
            title: `Medical Question 2/${total}`,
            content: <MedicalQuestion2 updateQNA={updateQNA} />,
            skippable: false,
        },

        ...(allMedicalQuestions?.map((question: { question: string }, index: number) => ({
            title: `Medical Question ${index + 3}/${total}`,
            content: (
                <DynamicMedicalQuestion
                    question={question?.question}
                    updateQNA={updateQNA}
                    form={form}
                    current={current}
                />
            ),
            skippable: false,
        })) || []),
        {
            title: "",
            content: <ConsultationsDelivery updateQNA={updateQNA} SubCategoryName={SubCategoryName} setForwardStatus={setForwardStatus} setDeliveryType={setDeliveryType} medicineLength={medicineLength} setConsultationType={setConsultationType} />,
            skippable: false,
        },



        ...(deliveryType !== "video"
            ? [
                {
                    title: "",
                    content: <div>
                        {
                            medicineLength > 0 ? (
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                        Questions about your health
                                    </h2>

                                    <h2 className="text-[16px] font-[400] text-[#6B6B6B]">
                                        Your health is very important to us. Please take 3 minutes to answer the following  questions.
                                    </h2>
                                </div>
                            ) :
                                (
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                            Additional questions regarding the consultation or medication you have chosen
                                        </h2>

                                        <h2 className="text-[16px] font-[400] text-[#6B6B6B]">
                                            Please answer these last questions and your consultation will be sent to the doctor.
                                        </h2>
                                    </div>
                                )
                        }

                    </div>,
                    skippable: true,
                },
                ...(allDynamicQuestions?.map((question: { question: string }, index: number) => ({
                    title: `Additional Questions ${index + 1}/${additionalTotal}`,
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


        {
            title: "",
            content: <Address SubCategoryName={SubCategoryName} setAddress={setAddress} />,
            skippable: false,
        },
        {
            title: "",
            content: <ConsultationCheckConfirm selectedMedicines={selectedMedicines} SubCategoryName={SubCategoryName} address={address} />,
            skippable: true,
        },


    ];

    const progressPercent = Math.round(((current + 1) / steps.length) * 100);
    const progressColor = '#0A2369'

    return (
        <div className={`bg-[#F7F7F7]  min-h-[calc(100vh-85px)] transition-all duration-1000 delay-500 ease-in-out opacity-100 translate-x-0 pt-[85px] ${poppins.className}`}>

            {/* total count  */}
            <p className=' text-end container text-primary text-lg font-medium'> {current + 1}/{steps.length} </p>

            <div className='container px-4'>

                {/* Progress bar */}
                <Progress
                    percent={progressPercent}
                    showInfo={false}
                    strokeColor={progressColor}
                />

                {/* Steps content */}
                <div className="steps-content  flex items-center justify-start" style={{ margin: '20px 0' }} >
                    <Form className='w-full' >
                        <div className={`lg:text-[32px] text-[28px] text-primary font-medium lg:tracking-wide py-3 ${poppins.className}`}>{steps[current]?.title} </div>
                        <div className=' bg-white p-6 mt-6 min-h-[350px]'>  {steps[current]?.content} </div>
                    </Form>
                </div>

                {/* footer buttons   */}
                <StepsFooter current={current} setCurrent={setCurrent} steps={steps} form={form} data={data} allMedicalDynamicQuestions={allMedicalQuestions} allAdditionalDynamicQuestions={allDynamicQuestions} />

            </div>
        </div>
    );
};

export default MedicalConsultations;
