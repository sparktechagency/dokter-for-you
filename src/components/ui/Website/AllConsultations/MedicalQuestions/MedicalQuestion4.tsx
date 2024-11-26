import { ConfigProvider, Form, Input } from 'antd';
import React from 'react';

const MedicalQuestion4 = () => {
    return (
        <div>
                <h1 className=' text-[24px] font-medium pb-4'>
                Why, and for which Diagnosis do you want treatment?
            </h1> 

        <Form className='lg:w-1/2 w-full'>
        <Form.Item> 
        <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 0 , 
                    }, 
              
                }}
            >
            <Input.TextArea rows={6} placeholder='To lose some weight' /> 
            </ConfigProvider>
        </Form.Item>
        </Form>
        </div>
    );
};

export default MedicalQuestion4;