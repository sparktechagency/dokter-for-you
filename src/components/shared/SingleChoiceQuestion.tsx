/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Radio, Form, Space } from 'antd';

type QuestionProps = {
  title: string;
  options: string[];
  onOptionChange?: (answer: string) => void; // Optional callback prop for parent interaction
};

const SingleChoiceQuestion: React.FC<QuestionProps> = ({ title, options, onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setSelectedOption(value);
    if (onOptionChange) {
      onOptionChange(value); // Trigger the callback if provided
    }
  };

  return (
    <div>
      <h1 className="lg:text-[24px] text-[20px] font-medium pb-6">{title}</h1>
      <Form.Item>
        <Radio.Group onChange={handleChange} value={selectedOption}>
          <Space direction="vertical">
            {options.map((option, index) => (
              <Radio
                key={index}
                value={option}
                className="text-[18px] font-medium my-5 flex items-center"
              >
                {option}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>
    </div>
  );
};

export default SingleChoiceQuestion;
