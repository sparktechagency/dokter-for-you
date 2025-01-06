"use client"
import { Select, InputNumber, ConfigProvider } from 'antd';
import { useState } from 'react';

const MedicalQuestion1 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => {
    const [unit, setUnit] = useState('KG');
    const [weight, setWeight] = useState<number | null>(20);

    const question = "What is your weight?";

    const handleWeightChange = (value: number | null) => {
        setWeight(value);
        updateQNA(question, `${value ?? ''} ${unit}`);
    };

    const handleUnitChange = (value: string) => {
        setUnit(value);
        updateQNA(question, `${weight ?? ''} ${value}`);
    };

    return (
        <div>
            <h1 className="lg:text-[24px] text-[20px] font-medium pb-4">{question}</h1>

            <p className="text-[#636363] text-[16px] font-medium pb-2 ps-1">Weight</p>

            <div className="flex gap-2">
                <ConfigProvider
                    theme={{
                        components: {
                            Select: {
                                activeBorderColor: "#BABABA",
                                hoverBorderColor: "#BABABA",
                            },
                        },
                        token: {
                            borderRadius: 0,
                        },
                    }}
                >
                    <InputNumber
                        className="w-24 h-[40px]" 
                        style={{height: '40px'}}
                        value={weight}
                        onChange={handleWeightChange}
                        min={20}
                        placeholder="20"
                    />
                    <Select
                        value={unit}
                        onChange={handleUnitChange}
                        className="w-28 h-[40px]" 
                        style={{height: '40px'}}
                        options={[
                            { value: 'KG', label: 'KG' },
                            { value: 'LB', label: 'LB' },
                        ]}
                    />
                </ConfigProvider>
            </div>
        </div>
    );
};

export default MedicalQuestion1;