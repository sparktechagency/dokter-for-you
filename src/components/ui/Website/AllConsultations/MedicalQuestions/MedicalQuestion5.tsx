
import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react'; 
const questions = [
    {
      title: 'Was this diagnosis made by a doctor, and did this doctor recommend treatment ?',
      options: [
       "Yes" ,
       "No"
      ],
    }
  ];

const MedicalQuestion5 = () => {
    return (
        <div>
             
             <Form>
                  {questions.map((question, index) => (
                    <SingleChoiceQuestion
                      key={index}
                      title={question.title}
                      options={question.options}
                    />
                  ))}
                </Form>
        </div>
    );
};

export default MedicalQuestion5;