
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Have you consulted a doctor before for being overweight? if so, what was the result and what products have you used before? have you tried to lose weight before and failed?',
      options: [
       "Yes" ,
       "No"
      ],
    }
  ];

const AdditionalQuestions1 = () => {
    return (
        <Form className='w-3/4'>
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

export default AdditionalQuestions1;