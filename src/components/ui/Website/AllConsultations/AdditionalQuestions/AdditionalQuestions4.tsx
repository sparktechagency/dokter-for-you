
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Do you have family or friends who are supportive of your weight loss journey?',
      options: [
       "Yes" ,
       "No"
      ],
    }
  ];

const AdditionalQuestions4 = () => {
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

export default AdditionalQuestions4;