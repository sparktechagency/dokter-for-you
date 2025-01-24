/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ConfigProvider, Form, Input, message, Radio, Space } from 'antd';
import React, { useEffect, useState } from 'react';


const AdditionalQuestions1 = ({ dynamicQNA, question , form , current}: { dynamicQNA: (question: string, answer: string) => void, question: string , form:any , current:number }) => {

  const questions = [
    {
      title: question,
      options: [
        "Yes",
        "No"
      ],
    }
  ];

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState<string >(''); 

  useEffect(() => {
    setSelectedAnswer(null); 
    setAdditionalInfo("");
  }, [current]); 

  const handleOptionChange = (question: string, answer: string) => {
    setSelectedAnswer(answer);

    if (answer === "No") {
      setAdditionalInfo("");
      dynamicQNA(question, answer);
    } else if (answer === "Yes") {
      if (additionalInfo.trim().length === 0) {
        message.error("Please enter  Additional Information.");
      } else {
        dynamicQNA(question, `${answer}, ${additionalInfo}`);
      }
    }
  };

  const handleAdditionalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAdditionalInfo(value);

    if (selectedAnswer === "Yes" && value.trim().length > 0) {
      dynamicQNA(questions[0].title, `Yes, ${value}`);
    }
  };


  return (
    <div>
      <Form form={form}>
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
                    placeholder="Additional Information"
                    value={additionalInfo}
                    onChange={handleAdditionalInfoChange}
                    style={{
                      height: 48,
                      width: '420px',
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

export default AdditionalQuestions1;