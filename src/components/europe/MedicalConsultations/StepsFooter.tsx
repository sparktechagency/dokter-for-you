'use client';

import { message } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

export interface Qna {
    question: string;
    answer: string;
}

export interface Medicin {
    _id: string;
    count: number;
    total: string;
}

export interface Address {
    firstname: string | undefined;
    lastname: string | undefined;
    streetAndHouseNo: string | undefined;
    postalCode: string | undefined;
    country: string | undefined;
    place: string | undefined;
}

interface Step {
    title?: string;
    content: React.JSX.Element | string;
    skippable?: boolean;
}

interface Props {
    current: number;
    setCurrent: Dispatch<SetStateAction<number>>;
    steps: Step[];
    form: any;
    data: {
        QNA: Qna[];
        DinamicQNA: Qna[];
        userId: string | null | undefined;
        medicins: Medicin[];
        category: string | null;
        subCategory: string | null;
        address?: Address;
        forwardToPartner?: string | null;
    };
    allMedicalDynamicQuestions?: Qna[];
    allAdditionalDynamicQuestions?: Qna[];
}

const StepsFooter = ({ current, setCurrent, steps, form, data, allMedicalDynamicQuestions, allAdditionalDynamicQuestions }: Props) => {
    console.log("StepsFooter data:", data?.QNA);
    const medicalQuestionsEnd = 3 + (allMedicalDynamicQuestions?.length || 0);
    const [validationErrors, setValidationErrors] = useState<{ [key: number]: boolean }>({});
    const dynamicEnd = (medicalQuestionsEnd + 2) + (allAdditionalDynamicQuestions?.length || 0);
 

    const next = () => {
        form.resetFields();

        const validateCurrentStep = (): boolean => {
            const currentStep = steps[current];

            if (currentStep?.skippable) return true;

            // for QNA  QUESTIONS  
            if (current >= 3 && current < medicalQuestionsEnd) {
                const medicalQuestion = allMedicalDynamicQuestions[current - 3];
                if (!medicalQuestion) {
                    return false;
                }

                const isAnswered = !!data.QNA.find((qna) => qna.question === medicalQuestion.question);
                if (!isAnswered) {

                    return false;
                }
                return true;
            }

            // for delivery prescription question  
            if (current === medicalQuestionsEnd) {
                const deliveryPrescription = data.QNA.find((qna) => qna.question === "Delivery Prescription");
                if (!deliveryPrescription) {
                    // message.error("Please provide a Delivery Prescription."); 
                    return false;
                }
                return true;
            }

            // for additional questions  
            if (data?.forwardToPartner !== "video" && current >= medicalQuestionsEnd + 2 && current < dynamicEnd) {
                const dynamicQuestion = allAdditionalDynamicQuestions[current -(medicalQuestionsEnd + 2)];
                if (!dynamicQuestion) {
                    return false;
                }

                const isAnswered = !!data.DinamicQNA.find((qna) => qna.question === dynamicQuestion.question);
                if (!isAnswered) {
                    message.error(`Please answer the question: "${dynamicQuestion.question}"`);
                    return false;
                }
                return true;
            }

            if (data?.forwardToPartner !== "video" && current === dynamicEnd) {
                if (!data.address) {
                    return false;
                }
                return true;
            } 

            if( data?.forwardToPartner === "video" && current === medicalQuestionsEnd + 1) {
                if (!data.address) {
                    return false;
                }
                return true;
            }

            switch (current) {
                case 0:
                    if (!data.userId) {
                        message.error('User ID is required.');
                        return false;
                    }
                    return true;
                case 1:
                    return !!data.QNA.find(qna => qna.question === "What is your weight?");

                case 2:
                    return !!data.QNA.find(qna => qna.question === "What is your Height?");

                case 3:
                    if (allMedicalDynamicQuestions) {
                        const dynamicQuestion = allMedicalDynamicQuestions[current - 3];
                        if (!dynamicQuestion) {
                            return false;
                        }

                        const isAnswered = !!data.QNA.find((qna) => qna.question === dynamicQuestion.question);
                        if (!isAnswered) {
                            message.error(`Please answer the question: "${dynamicQuestion.question}"`);
                            return false;
                        }
                        return true;
                    }


                default:
                    throw new Error(`Unhandled step: ${current}`);
            }
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

    return (
        <div className="steps-action flex items-center justify-end gap-3 pb-5">
            {current > 0 && (
                <button
                    onClick={prev}
                    className="text-primary font-medium border-2 border-primary mt-6 px-5 h-[44px] flex items-center gap-1"
                >
                    <BsArrowLeft color="#0a2369" size={22} />
                </button>
            )}

            {current < steps.length - 1 && (
                <button
                    onClick={next}
                    className="mt-6 px-5 h-[45px] bg-primary text-white flex items-center gap-1"
                >
                    <span>Continue</span>
                    <BsArrowRight size={22} />
                </button>
            )}

            {current === steps.length - 1 && (
                <button className="mt-6 px-5 py-[10px] bg-primary text-white">
                    Done
                </button>
            )}
        </div>
    );
};

export default StepsFooter;
