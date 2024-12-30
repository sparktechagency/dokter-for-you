
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Have you used this medication before, and if so, did you experience any side effects?',
      options: [
       "Yes" ,
       "No"
      ],
    }
  ];

const AdditionalQuestions4 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => { 

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

export default AdditionalQuestions4;