'use client';

import { Select, InputNumber, ConfigProvider } from 'antd';
import { useState } from 'react';

const MedicalQuestion2 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => {
    const [unit, setUnit] = useState('CM');
    const [height, setHeight] = useState<number | null>(60);

    const question = "What is your Height?";

    const handleHeightChange = (value: number | null) => {
        setHeight(value);
        updateQNA(question, `${value ?? ''} ${unit}`);
    };

    const handleUnitChange = (value: string) => {
        setUnit(value);
        updateQNA(question, `${height ?? ''} ${value}`);
    };

    return (
        <div>
            <h1 className='lg:text-[24px] text-[20px] font-medium pb-4'>{question}</h1>

            <p className='text-[#636363] text-[16px] font-medium pb-2 ps-1'>Height</p>

            <div className="flex gap-2">
                <ConfigProvider
                    theme={{
                        token: {
                            borderRadius: 0,
                        },
                    }}
                >
                    <InputNumber
                        className="w-24 h-[40px]"
                        value={height}
                        onChange={handleHeightChange}
                        min={60}
                        placeholder="60"
                    />
                    <Select
                        value={unit}
                        onChange={handleUnitChange}
                        className="w-28 h-[40px]"
                        style={{ height: "40px" }}
                        options={[
                            { value: 'CM', label: 'CM' },
                            { value: 'M', label: 'M' },
                        ]}
                    />
                </ConfigProvider>
            </div>
        </div>
    );
};

export default MedicalQuestion2;