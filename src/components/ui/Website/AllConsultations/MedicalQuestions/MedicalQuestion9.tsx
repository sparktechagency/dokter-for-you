
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Have you had any recent weight changes?',
      options: [
        "Gain",
        "Loss",
      ],
    }
  ];
const MedicalQuestion9 = () => {
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

export default MedicalQuestion9