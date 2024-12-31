"use client"
import { Button, ConfigProvider, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import PrescriptionOrder from '../TabsDetails/PrescriptionOrder';
import { useGetAllConsultationsQuery } from '@/redux/features/profile/consultationSlice';

interface ConsultationData {
    id: number;
    regNo: string;
    consultFor: string;
    medication: string;
    dateTime: string;
    price: string;
  } 

const data: ConsultationData[] = [
    {
      id: 1,
      regNo: "1906537887",
      consultFor: "Man problem/Erectile dysfunction",
      medication: "Caverjeet , Vardenafil",
      dateTime: "1/1/2025, 5:30 pm",
      price: "€ 25.00"
    },
    {
      id: 2,
      regNo: "1906537653",
      consultFor: "Man problem/Erectile dysfunction",
      medication: "Impotence, Trial Pack",
      dateTime: "1/1/2025, 5:30 pm",
      price: "€ 25.00"
    },
    {
      id: 3,
      regNo: "1906536293",
      consultFor: "Man problem/Erectile dysfunction",
      medication: "Caverjeet",
      dateTime: "1/1/2025, 5:30 pm",
      price: "€ 25.00"
    },
    {
      id: 4,
      regNo: "1906235884",
      consultFor: "Man problem/Erectile dysfunction",
      medication: "Caverjeet, Impotence",
      dateTime: "1/1/2025, 5:30 pm",
      price: "€ 25.00"
    }
  ]; 

const DigitalPrescriptionOrder = () => {  
    const [selectedConsultation, setSelectedConsultation] = useState<string | null>(null); 

    const name = "PRESCRIPTIONWITHMEDICINE"  
      const {data: consultations, isLoading} = useGetAllConsultationsQuery(name) 
      
    if(isLoading){
      return <div>Loading...</div>
    }
    
    const consultationsData = consultations?.data
    
      //console.log("kghdf",consultationsData);

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
            title: 'Medication',
            dataIndex: 'medication',
            key: 'medication',
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
        <div className=" "> 
        
        {selectedConsultation ? (
        <PrescriptionOrder
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
                scroll={{ x: 'max-content' }}
            />
        </ConfigProvider> 
      )}
    </div>

    );
};

export default DigitalPrescriptionOrder;