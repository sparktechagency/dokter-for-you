
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'How do you sleep at night?',
      options: [
        "heart rhythm disturbances or other heart condition",
        "Had a TIA or CVA (heart attack or stroke)",
        "diabetes (sugar disease)",
        "disease of the liver, kidneys or gallbladder",
        "Have Other Reason"
      ],
    }
  ];
const MedicalQuestion10 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => { 

  const handleOptionChange = (question: string, answer: string) => {
    updateQNA(question, answer);
};

    return (
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
    );
};

export default MedicalQuestion10