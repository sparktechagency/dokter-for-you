import { ConfigProvider, Form, Input } from 'antd';
import React from 'react';

const MedicalQuestion4 = ({ updateQNA }: { updateQNA: (question: string, answer: string) => void }) => { 
    return (
        <div>
                <h1 className='lg:text-[24px] text-[20px] font-medium pb-4'>
                Why, and for which Diagnosis do you want treatment?
            </h1> 

        <Form className='lg:w-1/2 w-full' >
        <Form.Item> 
        <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0 , 
                    }, 
              
                }}
            >
            <Input.TextArea rows={6} placeholder='To lose some weight'
             style={{ 
                resize: 'none', 
                borderRadius: '0px',
                border: '1px solid #d9d9d9',
            }}  

            onChange={(e) => updateQNA('Why, and for which Diagnosis do you want treatment?', e.target.value)} /> 
            </ConfigProvider>
        </Form.Item>
        </Form>
        </div>
    );
};

export default MedicalQuestion4;