'use client';

import SingleChoiceQuestion from '@/components/shared/SingleChoiceQuestion';
import { Form } from 'antd';
import React from 'react';

const questions = [
    {
        title: 'Do you have any pain anywhere in your body?',
        options: ['Yes', 'No'],
    },
];

const MedicalQuestion3 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => {
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

export default MedicalQuestion3;
