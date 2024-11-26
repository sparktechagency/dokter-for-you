import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Have you noticed any changes in your vision or hearing?',
      options: [
        "heart rhythm disturbances or other heart condition",
        "Had a TIA or CVA (heart attack or stroke)",
        "diabetes (sugar disease)",
        "disease of the liver, kidneys or gallbladder",
        "Have Other Reason"
      ],
    }
  ]; 

const MedicalQuestion12 = () => {
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

export default MedicalQuestion12