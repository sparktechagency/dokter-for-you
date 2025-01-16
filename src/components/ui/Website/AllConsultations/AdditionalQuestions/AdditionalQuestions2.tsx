
"use client"
import { ConfigProvider, Form, Input, Radio, Space } from 'antd';
import React, { useState } from 'react'; 
const questions = [
  {
    title: 'Do you have any chronic conditions or medical issues that might affect the use of this medication?',
    options: [
      "Yes",
      "No"
    ],
  }
];



const AdditionalQuestions2 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState<string>('');

  const handleOptionChange = (question: string, answer: string) => {
    setSelectedAnswer(answer);
    updateQNA(question, answer);

    // Clear additional input if "No" is selected
    if (answer === 'No') {
      setAdditionalInfo('');
    }
  };

  const handleAdditionalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAdditionalInfo(value);

    // Update the QNA with additional input
    updateQNA(questions[0].title, `${selectedAnswer}: ${value}`);
  };

  return (
    <div>
      <Form>
        {questions.map((question, index) => (
          <div key={index}>
            {/* Main Question */}
            <div>
              <h1 className="lg:text-[24px] text-[20px] font-medium pb-6">{question.title}</h1>
              <Form.Item>
                <Radio.Group
                  onChange={(e) => handleOptionChange(question.title, e.target.value)}
                  value={selectedAnswer}
                >
                  <Space direction="vertical">
                    {question.options.map((option, idx) => (
                      <div key={idx}>

                        <ConfigProvider
                          theme={{
                            token: {
                              colorPrimary: option === 'Yes' ? 'red' : 'green'
                            },
                          }}
                        >

                          <Radio

                            value={option}
                            className="text-[22px] font-medium my-5 flex items-center"
                            style={{
                              color: option === 'Yes' ? 'red' : 'green',
                              fontWeight: selectedAnswer === option ? 'bold' : 'normal',

                            }}
                          >
                            {option}
                          </Radio>
                        </ConfigProvider>
                      </div>
                    ))}
                  </Space>
                </Radio.Group>
              </Form.Item>
            </div>

            {/* Additional Input for "Yes" */}
            {selectedAnswer === 'Yes' && (
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: 'red',
                  },
                }}
              >
                <Form.Item>
                  <Input
                    placeholder="Reason"
                    value={additionalInfo}
                    onChange={handleAdditionalInfoChange}
                    style={{
                      height: 48,
                      width: '40%',
                    }}
                  />
                </Form.Item>
              </ConfigProvider>
            )}
          </div>
        ))}
      </Form>
    </div>
  );
};

export default AdditionalQuestions2;