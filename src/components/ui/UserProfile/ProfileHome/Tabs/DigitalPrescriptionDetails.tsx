"use client "
import { Button, ConfigProvider, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import PrescriptionDetails from '../TabsDetails/PrescriptionDetails';

interface ConsultationData {
    id: number;
    regNo: string;
    consultFor: string;
    dateTime: string;
    price: string;
}

const data: ConsultationData[] = [
    {
        id: 1,
        regNo: "1906537887",
        consultFor: "Man problem/Erectile dysfunction",
        dateTime: "1/1/2025, 5:30 pm",
        price: "€ 25.00"
    },
    {
        id: 2,
        regNo: "1906537653",
        consultFor: "Man problem/Erectile dysfunction",
        dateTime: "1/1/2025, 5:30 pm",
        price: "€ 25.00"
    },
    {
        id: 3,
        regNo: "1906536293",
        consultFor: "Man problem/Erectile dysfunction",
        dateTime: "1/1/2025, 5:30 pm",
        price: "€ 25.00"
    },
    {
        id: 4,
        regNo: "1906235884",
        consultFor: "Man problem/Erectile dysfunction",
        dateTime: "1/1/2025, 5:30 pm",
        price: "€ 25.00"
    }
];

const DigitalPrescriptionDetails = () => {
    const [selectedConsultation, setSelectedConsultation] = useState<string | null>(null);

    const columns: ColumnsType<ConsultationData> = [
        {
            title: 'S. No.',
            dataIndex: "id",
            key: 'id',
            width: 80,
        },
        {
            title: 'Reg. No.',
            dataIndex: 'regNo',
            key: 'regNo',
            width: 150,
        },
        {
            title: 'Consult for:',
            dataIndex: 'consultFor',
            key: 'consultFor',
            width: 250,
        },
        {
            title: 'Date & Time:',
            dataIndex: 'dateTime',
            key: 'dateTime',
            width: 180,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            width: 120,
        },
        {
            title: 'Action',
            key: 'action',
            width: 100,
            render: (_,record) => (
                <Button  onClick={() => setSelectedConsultation(record.regNo)}
                    type="text"
                    icon={<MdOutlineArrowOutward size={24} />}
                    style={{ color: '#00b96b' }}
                />
            ),
        },
    ];



    return (
        <div>
            <div className="container "> 

            {selectedConsultation ? (
        <PrescriptionDetails
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
                        dataSource={data}
                        pagination={false}
                        className="consultation-table"

                    />
                </ConfigProvider> 
      )}
            </div>
        </div>
    );
};

export default DigitalPrescriptionDetails;