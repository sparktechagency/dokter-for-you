
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Do you have any pain anywhere in your body?',
      options: [
        'Yes',
        'No',
      ],
    }
  ]; 


const MedicalQuestion3 = () => {
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

export default MedicalQuestion3;