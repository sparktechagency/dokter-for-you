
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'How is your appetite?',
      options: [
        "heart rhythm disturbances or other heart condition",
        "Had a TIA or CVA (heart attack or stroke)",
        "diabetes (sugar disease)",
        "disease of the liver, kidneys or gallbladder",
        "Have Other Reason"
      ],
    }
  ];
const MedicalQuestion8 = () => {
    return (
        <Form>
        {questions.map((question, index) => (
          <SingleChoiceQuestion
            key={index}
            title={question.title}
            options={question.options}
          />
        ))}
      </Form>
    );
};

export default MedicalQuestion8