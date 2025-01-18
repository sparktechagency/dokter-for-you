"use client"
import React from 'react';
import { message,  } from 'antd';
import Title from '@/components/shared/Title';
import { useGetAllNotificationQuery, useReadNotificationMutation } from '@/redux/features/website/notificationSlice';
import moment from 'moment';


const Notifications = () => {

    const { data: notificationData, refetch } = useGetAllNotificationQuery(undefined)
    const notifications = notificationData?.data
    const [readNotification] = useReadNotificationMutation()

    const handleReadAll = async () => {
        await readNotification(null).then((res) => {

            if (res?.data?.success) {
                message.success(res?.data?.message)
                refetch()
            }
        })
    }

    return (
        <div className='bg-[#F7F7F7] py-[40px]'>

            <div className=' container'>

                <div className='flex items-center justify-between mb-4'>
                    <Title className=' uppercase'> Notifications</Title>
                    <button className='bg-primary text-white h-10 px-4 rounded-md' onClick={handleReadAll}>Read All</button>
                </div>

                <div className='grid grid-cols-1 gap-5   rounded-lg'>
                    {
                        notifications?.map((notification: { title: string, description: string, createdAt: string, _id: string, status: string }, index: number) => {
                            return (
                                <div key={index} className={`flex  items-center justify-between lg:h-[66px] ${notification?.status === "READ" ? "bg-white" : "bg-[#E8EEFE]"}  lg:px-[24px] px-2 py-4`}>

                                    <div className='flex flex-col gap-2 py-2'>
                                        <p className=' lg:text-[16px] text-[16px] font-medium text-[#5C5C5C]'>{notification?.title} </p>
                                        <p className=' text-[#5C5C5C] lg:text-[14px] text-[14px]'> {notification?.description}</p>
                                    </div>

                                    <p className='text-[14px]  ' style={{ color: "#A1A1A1", marginTop: "4px" }}>{moment(notification?.createdAt).format('DD/MM/YYYY , hh:mm a')}</p>

                                </div>
                            )
                        })
                    }
                </div>          
            </div>
        </div>
    )
}

export default Notifications