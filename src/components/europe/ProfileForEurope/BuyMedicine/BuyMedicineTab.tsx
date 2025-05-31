/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { Button, ConfigProvider, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { useGetAllConsultationsQuery } from '@/redux/features/profile/consultationSlice';
import BuyMedicineOrder from './BuyMedicineOrder';


interface ConsultationData {
    id: number;
    regNo: string;
    consultFor: string;
    medication: string;
    dateTime: string;
    price: string;
    suggestedMedicine: { dosage: string; }[]
}

const BuyMedicineTab = () => {
    const [selectedConsultation, setSelectedConsultation] = useState(null);
    // const name = "medication" 
    const { data: allConsultations, isLoading } = useGetAllConsultationsQuery(undefined)
    if (isLoading) {
        return <div>Loading...</div>
    }



    const DigitalPrescriptionOrderDetails = allConsultations?.data?.filter(
        (consultation: { forwardToPartner: boolean; }) => consultation?.forwardToPartner === true
    );

    const columns: ColumnsType<ConsultationData> = [
        {
            title: 'S. No.',
            dataIndex: 'sNo',
            key: 'sNo',        
            render: (_, __, index) => index + 1,
        },
        {
            title: 'Medicine name',
            dataIndex: '_id',
            key: 'regNo',           
        },
        {
            title: 'Consult for:',
            dataIndex: ["subCategory", "name"],
            key: 'consultFor',     
        },
        {
            title: 'From',
            dataIndex: 'suggestedMedicine',
            key: 'medication',        
            render: (_, record) => <div className='flex gap-1'>
                {record?.suggestedMedicine?.map((item: any, index: number) => (
                    <div key={index}>
                        {item?._id?.name}
                    </div>
                ))}
            </div>,
        },
        {
            title: 'Select Units per Box',
            dataIndex: '_id',
            key: 'regNo',      
        },
        {
            title: 'Dosage',
            dataIndex: '_id',
            key: 'regNo',     
        },
        {
            title: 'Quantity of medicine',
            dataIndex: '_id',
            key: 'regNo',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',    
            render: () => {
                return (
                    <div>
                        {"€25.00"}
                    </div>
                )
            }
        },
        {
            title: 'Action',
            key: 'action',        
            render: (_, record: any) => (
                <Button onClick={() => setSelectedConsultation(record)}
                    type="text"
                    icon={<MdOutlineArrowOutward size={24} />}
                    style={{ color: '#00b96b' }}
                />
            ),
        },
    ];

    return (
        <div className=" ">

            {selectedConsultation ? (
                <BuyMedicineOrder
                    consultationId={selectedConsultation}
                    onClose={() => setSelectedConsultation(null)}
                />
            ) : (

                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                headerBg: '#F7F7F7'
                            },
                        },
                        token: {
                            colorBgContainer: "#E7FBF2"
                        },
                    }}
                >
                    <Table
                        columns={columns}
                        dataSource={DigitalPrescriptionOrderDetails}
                        pagination={false}
                        className="consultation-table"
                        scroll={{ x: 'max-content' }}
                    />
                </ConfigProvider>
            )}
        </div>

    );
};

export default BuyMedicineTab;