
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Do you have any trouble breathing or shortness of breath?',
      options: [
        'Heart rhythm disturbances or other heart condition',
        'Had a TIA or CVA (heart attack or stroke)',
        'Diabetes (sugar disease)',
        'Disease of the liver, kidneys or gallbladder',
        'Have Other Reason',
      ],
    }
  ];

const MedicalQuestion13 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => { 

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
        
export default MedicalQuestion13
