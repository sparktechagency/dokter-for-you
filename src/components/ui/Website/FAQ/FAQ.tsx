"use client"
import Title from '@/components/shared/Title';
import React from 'react'; 
import type { CSSProperties } from 'react' 
import type { CollapseProps } from 'antd';
import { Collapse, Pagination, theme } from 'antd';
import { Plus } from 'lucide-react';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: <p className='font-sans' style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 1 </p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 2 </p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 3 </p>,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '4',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 4</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '5',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 5</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '6',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 6</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },
  {
    key: '7',
    label: <p style={{ color: '#4E4E4E', fontSize: '19px' }}> This is panel header 7</p> ,
    children: <p style={{ color: '#4E4E4E', fontSize: '16px' }}>{text}</p>,
    style: panelStyle,
  },


]; 
const FAQ = () => { 
    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: "#fff",  
    
      borderRadius: token.borderRadiusLG,
    
    };   
    return (
        <div className='bg-[#F7F7F7] py-[58px]'> 

            <div className=' container'>  

                <div className='text-center pb-[40px]'>
            <Title className=' pb-[14px] uppercase '>Popular Frequently Asked Questions</Title>
            <p className=' text-[14px] text-[#6B6B6B]'> we provide a secure and fastest ranting system Our mission is to make. Do you have a question regarding our service? </p>
                </div> 

                <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <Plus  size={22} style={{ 
        transform: `rotate(${isActive ? 0 : 270}deg)`,
        transition: 'transform 0.3s ease', 
        color: 'black' 
      }}  />} 
     expandIconPosition="end"
      style={{ background: "#F7F7F7"  , color: '#222222'}}  
      items={getItems(panelStyle)}
    /> 

<Pagination align="center" defaultCurrent={1} total={50} />

            </div>
        </div>
    );
};

export default FAQ;