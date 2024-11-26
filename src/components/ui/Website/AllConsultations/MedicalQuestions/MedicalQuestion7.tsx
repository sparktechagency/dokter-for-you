
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Are you experiencing any fatigue or low energy ?',
      options: [
       "Yes" ,
       "No"
      ],
    }
  ];

const MedicalQuestion7 = () => {
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

export default MedicalQuestion7;