
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Was this diagnosis made by a doctor, and did this doctor recommend treatment ?',
      options: [
       "Yes" ,
       "No"
      ],
    }
  ];

const MedicalQuestion5 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => { 

  const handleOptionChange = (question: string, answer: string) => {
    updateQNA(question, answer);
}; 

    return (
        <div>
             
             <Form>
                  {questions.map((question, index) => (
                    <SingleChoiceQuestion
                      key={index}
                      title={question.title}
                      options={question.options}
                      onOptionChange={(answer: string) => handleOptionChange(question.title, answer)}
                    />
                  ))}
                </Form>
        </div>
    );
};

export default MedicalQuestion5;