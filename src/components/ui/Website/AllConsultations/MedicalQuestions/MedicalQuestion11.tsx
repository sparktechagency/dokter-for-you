
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
const MedicalQuestion11 = () => {
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

export default MedicalQuestion11