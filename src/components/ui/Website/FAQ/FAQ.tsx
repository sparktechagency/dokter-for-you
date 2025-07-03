"use client"
import Title from '@/components/shared/Title';
import React from 'react'; 
import { Collapse, theme } from 'antd';
import { Plus } from 'lucide-react';
import { useGetAllFaqQuery } from '@/redux/features/website/faqSlice';

const FAQ = () => { 
    const { token } = theme.useToken();  
    // const [page, setPage] = React.useState(1); 
    const { data: faqData } = useGetAllFaqQuery(undefined);    
    const allFaqData = faqData?.data || [];

    const panelStyle: React.CSSProperties = {
      marginBottom: 24,
      background: "#fff",  
      borderRadius: token.borderRadiusLG,
    };   

    const getItems = (data: typeof allFaqData): React.ComponentProps<typeof Collapse>['items'] => {
        return data.map((faq:{ question: string, answer: string, _id: string }) => ({
            key: faq._id,
            label: (
                <p className='font-sans' style={{ color: '#4E4E4E', fontSize: '19px' }}>
                    {faq.question}
                </p>
            ),
            children: (
                <p style={{ color: '#4E4E4E', fontSize: '16px' }}>
                    {faq.answer}
                </p>
            ),
            style: panelStyle,
        }));
    };

    return (
        <div className='bg-[#F7F7F7] py-[58px]'> 
            <div className='container'>  
                <div className='text-center pb-[40px]'>
                    <Title className='pb-[14px] uppercase'>
                        Popular Frequently Asked Questions
                    </Title>
                    <p className='text-[14px] text-[#6B6B6B]'>
                        We provide a secure and fastest renting system. Our mission is to make.
                        Do you have a question regarding our service?
                    </p>
                </div> 

                <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => (
                        <Plus 
                            size={22}
                            style={{ 
                                transform: `rotate(${isActive ? 0 : 270}deg)`,
                                transition: 'transform 0.3s ease', 
                                color: 'black' 
                            }}  
                        />
                    )}
                    expandIconPosition="end"
                    style={{ background: "#F7F7F7", color: '#222222' }}  
                    items={getItems(allFaqData)}
                /> 

                {allFaqData.length > 0 && (
                    <div>
                        {/* <Pagination
                            align="center"
                            current={page} 
                            total={faqData?.pagination?.total || 0}
                            onChange={(page) => setPage(page)} 
                        /> */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQ;
