
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Are you having any problems with digestion?',
      options: [
        "stomach pain",
        "nausea",
        "bowel issues",
        "Have Other Reason"
      ],
    }
  ];
const MedicalQuestion11 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => { 

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

export default MedicalQuestion11