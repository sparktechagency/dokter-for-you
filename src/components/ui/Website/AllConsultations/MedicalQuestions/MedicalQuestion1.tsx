'use client'

import { Select, InputNumber, ConfigProvider } from 'antd'
import { useState } from 'react'

const MedicalQuestion1 = () => { 
    const [unit, setUnit] = useState('KG')
    const [weight, setWeight] = useState<number | null>(60) 
    return (
        <div>
                  <h1  className=' text-[24px] font-medium pb-4'>
       What is your weight?
      </h1>  

      <p className='text-[#636363] text-[16px] font-medium pb-2 ps-1'>Weight</p>

      <div className="flex gap-2">  
      <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0 , 
                    }, 
              
                }}
            >
        <InputNumber
          className="w-24 h-[40px]"
          value={weight}
          onChange={setWeight}
          min={0}
          placeholder="60"
        />
        <Select
          value={unit}
          onChange={setUnit}
          className="w-28 h-[40px]" 
          style={{height:"40px"}}
          options={[
            { value: 'KG', label: 'KG' },
            { value: 'LB', label: 'LB' }
          ]}
        /> 
        </ConfigProvider>
      </div> 

        </div>
    );
};

export default MedicalQuestion1;