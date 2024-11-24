import InputField from '@/components/shared/InputField';
import Title from '@/components/shared/Title';
import { Form } from 'antd';
import React from 'react';

const ProfileDetails = () => {
    return (
        <div>  

        <Title className='' >Personal Information </Title>
            <Form layout='vertical' className='w-full' >  

                <div className=' grid grid-cols-2 gap-x-7 py-[24px]' > 
                    <InputField name='first-name' label='First Name' />
                    <InputField name='last-name' label='Last Name' />
                    <InputField name='bod' label='Date of Birth' />
                    <InputField name='gender' label='Gender' />
                    <InputField name='email' label='Email' />
                    <InputField name='contact' label='Contact Number' />
                     </div> 
                     <Title className='' >Address Details </Title>


    <div className=' w-full pt-[24px]'>
<InputField name='Address' label='Address' />
    </div> 

    <div className='grid grid-cols-2 gap-x-7 pb-[24px]'>
<InputField name='Postcode' label='Postcode' />
    
<InputField name='City/town' label='City/Town' />
    </div> 

    <Form.Item className=' flex items-center justify-center  w-full '> 
        <button type='submit' className=' h-[48px] w-[300px] text-white bg-primary '> Save & Changes</button>
    </Form.Item>


            </Form>
        </div>
    );
};

export default ProfileDetails;