/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ConfigProvider, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useGetAllConsultationsQuery } from '@/redux/features/profile/consultationSlice';


interface ConsultationData {
    id: number;
    regNo: string;
    consultFor: string;
    medication: string;
    dateTime: string;
    price: string;
    suggestedMedicine: { dosage: string; }[] 
    selectedMedicines: any[];
}

const MedicineHistoryTab = () => {
    const { data: allConsultations, isLoading } = useGetAllConsultationsQuery(undefined) 
    const consultationData = allConsultations?.data
    if (isLoading) {
        return <div>Loading...</div>
    }

// product cost 

const medicineData = consultationData?.flatMap((items:any) => {   
   return items?.selectedMedicines?.map((item:any) => ({
        id: item._id,
        name: item.name,
        dosage: item.dosage?.dosage,
        count: item.count,
        price: item.price, 
        unitPerBox: item?.total?.unitPerBox, 
        sellingPrice: item?.total?.sellingPrice,
        totalPrice: item?.totalPrice, 
        status: items.status,
    }))
})



    const columns: ColumnsType<ConsultationData> = [
        {
            title: 'S. No.',
            dataIndex: 'sNo',
            key: 'sNo',        
            render: (_, __, index) => index + 1,
        },
        {
            title: 'Medicine name',
            dataIndex: 'name',
            key: 'name',           
        },
        {
            title: 'Dosage',
            dataIndex: 'dosage',
            key: 'dosage',
        },
        {
            title: 'Contents of the Box',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: 'Unit Per Box',
            dataIndex: 'unitPerBox',
            key: 'unitPerBox',
        },
        {
            title: 'Medicine cost (€) ',
            dataIndex: 'sellingPrice',
            key: 'sellingPrice', 
            render: (text) => `€${text.toFixed(2)}`, 
        },
        {
            title: 'Total Price (€)',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
            render: (text) => `€${text.toFixed(2)}`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status', 
            render: (status) => (
                <p className={`text-sm font-medium ${status === 'accepted' ? 'text-green-600' : status === 'pending' ? 'text-yellow-600' : 'text-red-600'}`}>
                    {status}
                </p>
            ),
        },
    ];

    return (
        <div className=" ">

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
                        dataSource={medicineData}
                        pagination={false}
                        className="consultation-table"
                        scroll={{ x: 'max-content' }}
                    />
                </ConfigProvider>
        
        </div>

    );
};

export default MedicineHistoryTab;