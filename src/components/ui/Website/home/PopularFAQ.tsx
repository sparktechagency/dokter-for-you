"use client";

import Title from '@/components/shared/Title'; 
import type { CSSProperties } from 'react' 
import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';
import { ChevronRight, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



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


]; 

const PopularFAQ = () => { 
    const { token } = theme.useToken();

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: "#F5F5F5",  
    
      borderRadius: token.borderRadiusLG,
    
    };   

  return (
    <div className="container  my-[94px]  w-full">
      <div className="space-y-4">
        <span className="text-[#11D279]  font-medium">
          GET YOUR ANSWER
        </span>
        <Title className=" pb-[64px]">
          POPULAR FREQUENTLY ASKED QUESTIONS
        </Title>
      </div>

      <div className=" flex lg:flex-row flex-col justify-center items-center w-full">
        <div className="relative  lg:w-1/2 w-full">
          <Image
            src="/faq.svg"
            alt="Doctor with clipboard"
      
             height={450}  width={550}  className=' object-cover '
          />
        </div>

        <div className=" lg:w-1/2 w-full lg:mt-3 mt-5 ">
        <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <Plus  size={22} style={{ 
        transform: `rotate(${isActive ? 0 : 270}deg)`,
        transition: 'transform 0.3s ease', 
        color: 'black' 
      }}  />} 
     expandIconPosition="end"
      style={{ background: "#fff"  , color: '#222222'}}  
      items={getItems(panelStyle)}
    />
 
 <div className=' text-end'>

          <Link 
            href="/faq"
            className="inline-flex items-center text-[#2563EB] hover:text-blue-700 font-medium mt-1 text-[14px]  underline"
          >
            All FAQ here
            <ChevronRight className="ml-1" size={20} />
          </Link>
 </div>
        </div>
      </div>
    </div>
  );
}

export default PopularFAQ;