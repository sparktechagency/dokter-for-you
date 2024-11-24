"use client"
import React, { useState } from 'react';
import {  Pagination } from 'antd';
import Title from '@/components/shared/Title';


const Notifications = () => {
    const [page, setPage] = useState(1)

    return (
        <div className='bg-[#F7F7F7] py-[40px]'> 

        <div className=' container'>

            <div className='flex items-center justify-between mb-4'>
                <Title className=' uppercase'> Notifications</Title>
                <button className='bg-primary text-white h-10 px-4 rounded-md'>Read All</button>
            </div>

            <div className='grid grid-cols-1 gap-5   rounded-lg'>
                {
                    [...Array(8).keys()].map((notification, index)=>{
                        return(
                            <div key={index} className='flex items-center justify-between h-[66px] bg-white px-[24px]'>
                          
                              
                                    <p className=' text-[#5C5C5C] text-[16px]'> start a new trip at 5pm. Trip No.56. Trip started from Mexico city</p> 

                                    <p className='text-[14px]' style={{color:"#A1A1A1",marginTop:"4px"}}>1hr ago</p>
                             
                            </div>
                        )
                    })  
                }
            </div>


            <div className='flex items-center justify-center mt-6'>
                    <Pagination align="center"  defaultCurrent={page} total={50} onChange={(page)=> setPage(page)} showQuickJumper={false} showSizeChanger={false}/>
               
            </div>
        </div>
        </div>
    )
}

export default Notifications