/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Radio, Form, Space } from 'antd';


type QuestionProps = {
  title: string;
  options: string[];
};

const SingleChoiceQuestion: React.FC<QuestionProps> = ({ title, options }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div >
      <h1  className=' text-[24px] font-medium pb-6'>
        {title}
      </h1>
      <Form.Item>
        <Radio.Group onChange={handleChange} value={selectedOption}> 
        <Space direction="vertical" >
          {options.map((option, index) => (
            <Radio key={index} value={option} className='text-[18px] font-medium my-5 flex items-center' >
              {option}
            </Radio>
          ))} 
          </Space >
        </Radio.Group>
      </Form.Item>
    </div>
  );
}; 

export default SingleChoiceQuestion 