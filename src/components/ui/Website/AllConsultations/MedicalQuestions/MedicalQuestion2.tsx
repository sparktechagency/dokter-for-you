'use client'

import { Select, InputNumber, ConfigProvider } from 'antd'
import { useState } from 'react'

const MedicalQuestion2 = () => {
    const [unit, setUnit] = useState('CM')
    const [height, setHeight] = useState<number | null>(60)
    return (
        <div>
            <h1 className='lg:text-[24px] text-[20px] font-medium pb-4'>
                What is your Height?
            </h1>

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
                        onChange={setHeight}
                        min={0}
                        placeholder="60"
                    />
                    <Select
                        value={unit}
                        onChange={setUnit}
                        className="w-28 h-[40px]"
                        style={{ height: "40px" }}
                        options={[
                            { value: 'CM', label: 'CM' },
                            { value: 'M', label: 'M' }
                        ]}
                    />
                </ConfigProvider>
            </div>

        </div>
    );
};

export default MedicalQuestion2;